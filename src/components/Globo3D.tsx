'use client'

import Link from 'next/link'
import { Suspense, useEffect, useMemo, useRef, useState, type RefObject } from 'react'
import { ArrowRight, X } from 'lucide-react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import type { PinGlobo } from './GloboDestinazioniSvg'

/*
 * Globo 3D delle destinazioni, nello spirito dei loghi da film: la Terra (NASA Blue Marble,
 * pubblico dominio) con nuvole e atmosfera, il marchio «make it yours.world» in lettere
 * estruse (Courier Prime Bold, OFL, convertito in typeface JSON in public/globo/) che gira su
 * un anello inclinato passando davanti e dietro, e un punto rosso per ogni destinazione.
 * Caricato solo da GloboDestinazioni.tsx (next/dynamic, ssr: false).
 */

const R = 1.6 // raggio della Terra
const R_ANELLO = 2.45
const TESTO = 'make it yours.world  '.repeat(2)
const SIZE = 0.56
const DEPTH = 0.13
const FOV = 32
const D2R = Math.PI / 180
const LNG_INIZIO = 12 // Europa e Africa al centro, come nel globo SVG
const TILT_INIZIO = 22 * D2R

const ROSSO = '#c3332a'
// vettori di appoggio per le proiezioni a ogni fotogramma (una sola istanza del globo per pagina)
const TMP = { v: new THREE.Vector3(), c: new THREE.Vector3(), n: new THREE.Vector3() }

type Trascina = { x: number; y: number; rotY: number; tilt: number; mosso: boolean }
type Controllo = {
  rotY: number
  tilt: number
  sopra: boolean
  trascina: Trascina | null
  scelto: number
  hover: { x: number; y: number } | null
  tap: { x: number; y: number; raggio: number } | null
  misura: { saltati: number; frame: number; tempo: number; fatto: boolean }
}

/** lat/lng → punto sulla sfera, coerente con le UV di THREE.SphereGeometry (texture equirettangolare) */
function sullaSfera(lat: number, lng: number, r: number, out: THREE.Vector3) {
  const f = lat * D2R
  const l = (lng + 180) * D2R
  return out.set(-r * Math.cos(f) * Math.cos(l), r * Math.sin(f), r * Math.cos(f) * Math.sin(l))
}

const atmosferaVert = /* glsl */ `
  varying vec3 vNormale;
  varying vec3 vVista;
  void main() {
    vNormale = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vVista = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`
// alone esterno (sfera più grande vista da dentro): forte sul bordo della Terra, zero al margine
const aloneFrag = /* glsl */ `
  varying vec3 vNormale;
  varying vec3 vVista;
  void main() {
    float i = pow(clamp(-dot(normalize(vNormale), normalize(vVista)), 0.0, 1.0), 2.2) * 1.9;
    gl_FragColor = vec4(vec3(0.32, 0.58, 1.0) * i, i);
  }
`
// velo azzurro sul bordo del disco (fresnel)
const bordoFrag = /* glsl */ `
  varying vec3 vNormale;
  varying vec3 vVista;
  void main() {
    float f = 1.0 - clamp(dot(normalize(vNormale), normalize(vVista)), 0.0, 1.0);
    float i = pow(f, 3.2) * 0.95;
    gl_FragColor = vec4(vec3(0.45, 0.7, 1.0) * i, i);
  }
`
const pinVert = /* glsl */ `
  uniform float uSize;
  uniform float uPixel;
  attribute float aSel;
  varying float vFaccia;
  varying float vSel;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vec3 n = normalize(wp.xyz);
    vFaccia = dot(n, normalize(cameraPosition - wp.xyz));
    vSel = aSel;
    vec4 mv = viewMatrix * wp;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixel * (1.0 + aSel * 0.9) * (8.0 / -mv.z);
  }
`
const pinFrag = /* glsl */ `
  varying float vFaccia;
  varying float vSel;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float nucleo = smoothstep(0.44, 0.3, d);
    float cuore = smoothstep(0.2, 0.0, d);
    float alone = pow(1.0 - d, 2.0) * 0.55;
    float vis = smoothstep(0.02, 0.22, vFaccia);
    // nucleo rosso pieno con un cuore chiaro, alone rosso semitrasparente
    vec3 c = mix(vec3(0.95, 0.14, 0.1), vec3(1.0, 0.8, 0.72), cuore * (0.55 + vSel * 0.45));
    float a = max(nucleo, alone) * vis;
    gl_FragColor = vec4(c, a);
  }
`

function Scena({
  pins,
  ctrlRef,
  cardRef,
  scelto,
  setScelto,
  onPronto,
  onLento,
}: {
  pins: PinGlobo[]
  ctrlRef: RefObject<Controllo>
  cardRef: RefObject<HTMLDivElement | null>
  scelto: number | null
  setScelto: (i: number | null) => void
  onPronto: () => void
  onLento: () => void
}) {
  const [terra, nuvole] = useLoader(THREE.TextureLoader, ['/globo/terra-2048.jpg', '/globo/nuvole-1024.jpg'])
  const font = useLoader(FontLoader, '/globo/courier-prime-bold.typeface.json')
  const gl = useThree((s) => s.gl)
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera
  const size = useThree((s) => s.size)

  const inclinaRef = useRef<THREE.Group>(null)
  const giraRef = useRef<THREE.Group>(null)
  const nuvoleRef = useRef<THREE.Mesh>(null)
  const anelloRef = useRef<THREE.Group>(null)
  const puntiRef = useRef<THREE.Points>(null)

  const terraMatRef = useRef<THREE.MeshStandardMaterial>(null)
  useEffect(() => {
    const mappa = terraMatRef.current?.map
    if (!mappa) return
    mappa.colorSpace = THREE.SRGBColorSpace
    mappa.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy())
    mappa.needsUpdate = true
  }, [terra, gl])

  // inquadratura: l'anello sta tutto in larghezza, Terra e lettere davanti in altezza
  useEffect(() => {
    const aspetto = size.width / Math.max(1, size.height)
    const mezzaV = (FOV / 2) * D2R
    const mezzaO = Math.atan(Math.tan(mezzaV) * aspetto)
    const d = Math.max(3.3 / Math.tan(mezzaO), 2.3 / Math.tan(mezzaV))
    camera.position.set(0, 0.32 * (d / 8), d)
    camera.lookAt(0, -0.06, 0)
    camera.updateProjectionMatrix()
  }, [camera, size])

  // lettere: una geometria per carattere, disposte sull'anello e girate verso l'esterno
  const lettere = useMemo(() => {
    const geo = new Map<string, TextGeometry>()
    const ris = font.data.resolution
    const n = TESTO.length
    const items: { ch: string; angolo: number; geo: TextGeometry }[] = []
    for (let i = 0; i < n; i++) {
      const ch = TESTO[i]
      if (ch === ' ') continue
      let g = geo.get(ch)
      if (!g) {
        g = new TextGeometry(ch, {
          font,
          size: SIZE,
          depth: DEPTH,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 0.014,
          bevelSize: 0.009,
          bevelSegments: 2,
        })
        const avanzo = ((font.data.glyphs[ch]?.ha ?? ris * 0.6) / ris) * SIZE
        g.translate(-avanzo / 2, -SIZE * 0.24, -DEPTH / 2)
        geo.set(ch, g)
      }
      items.push({ ch, angolo: (i / n) * Math.PI * 2, geo: g })
    }
    return { items, geo }
  }, [font])
  useEffect(() => () => lettere.geo.forEach((g) => g.dispose()), [lettere])

  const materiali = useMemo(
    () => ({
      // [facce, fianchi e smusso]: crema caldo metallico con il bordo color inchiostro
      lettera: [
        new THREE.MeshStandardMaterial({ color: '#f6ebd2', emissive: '#2b2216', metalness: 0.35, roughness: 0.3 }),
        new THREE.MeshStandardMaterial({ color: '#3b332b', metalness: 0.5, roughness: 0.45 }),
      ],
      punto: [
        new THREE.MeshStandardMaterial({ color: ROSSO, emissive: '#5a0d08', metalness: 0.3, roughness: 0.35 }),
        new THREE.MeshStandardMaterial({ color: '#6e1712', metalness: 0.4, roughness: 0.45 }),
      ],
    }),
    [],
  )
  useEffect(() => () => [...materiali.lettera, ...materiali.punto].forEach((m) => m.dispose()), [materiali])

  const punti = useMemo(() => {
    const pos = new Float32Array(pins.length * 3)
    const v = new THREE.Vector3()
    pins.forEach((p, i) => sullaSfera(p.lat, p.lng, R * 1.004, v).toArray(pos, i * 3))
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aSel', new THREE.BufferAttribute(new Float32Array(pins.length), 1))
    return { g, pos }
  }, [pins])
  useEffect(() => () => punti.g.dispose(), [punti])

  const uniformiPin = useMemo(() => ({ uSize: { value: 13 }, uPixel: { value: 1 } }), [])
  const pinMatRef = useRef<THREE.ShaderMaterial>(null)

  useEffect(() => {
    const p = puntiRef.current
    if (!p) return
    const sel = p.geometry.getAttribute('aSel') as THREE.BufferAttribute
    for (let i = 0; i < sel.count; i++) sel.setX(i, i === scelto ? 1 : 0)
    sel.needsUpdate = true
  }, [scelto])

  // pronto dopo il primo fotogramma con le texture caricate
  useEffect(() => {
    let r2 = 0
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(onPronto)
    })
    return () => {
      cancelAnimationFrame(r1)
      cancelAnimationFrame(r2)
    }
  }, [onPronto])

  useFrame((state, dt) => {
    const s = ctrlRef.current
    const passo = Math.min(dt, 0.1)
    const fermo = s.sopra || s.trascina?.mosso || s.scelto >= 0
    if (!fermo) s.rotY += passo * 0.1
    const inc = inclinaRef.current, gira = giraRef.current
    if (inc) inc.rotation.x += (s.tilt - inc.rotation.x) * Math.min(1, passo * 10)
    if (gira) gira.rotation.y = s.rotY
    if (nuvoleRef.current) nuvoleRef.current.rotation.y += passo * 0.012
    if (anelloRef.current) anelloRef.current.rotation.y -= passo * 0.09
    if (pinMatRef.current) {
      pinMatRef.current.uniforms.uPixel.value = state.gl.getPixelRatio()
      pinMatRef.current.uniforms.uSize.value = 13 * Math.min(1, Math.max(0.7, state.size.height / 700))
    }

    // proiezione di un pin sullo schermo: [x, y, quanto guarda verso la camera]
    const p = puntiRef.current
    const proietta = (i: number) => {
      if (!p) return null
      const { v, c, n } = TMP
      v.fromArray(punti.pos, i * 3).applyMatrix4(p.matrixWorld)
      n.copy(v).normalize()
      const faccia = c.copy(state.camera.position).sub(v).normalize().dot(n)
      v.project(state.camera)
      return [((v.x + 1) / 2) * state.size.width, ((1 - v.y) / 2) * state.size.height, faccia] as const
    }
    const vicino = (x: number, y: number, raggio: number) => {
      let meglio = -1, dist = raggio
      for (let i = 0; i < pins.length; i++) {
        const q = proietta(i)
        if (!q || q[2] < 0.15) continue
        const d = Math.hypot(q[0] - x, q[1] - y)
        if (d < dist) {
          dist = d
          meglio = i
        }
      }
      return meglio
    }
    if (s.hover) {
      const i = vicino(s.hover.x, s.hover.y, 14)
      s.hover = null
      if (i >= 0 && i !== s.scelto) {
        s.scelto = i
        setScelto(i)
      }
    }
    if (s.tap) {
      const i = vicino(s.tap.x, s.tap.y, s.tap.raggio)
      s.tap = null
      s.scelto = i
      setScelto(i >= 0 ? i : null)
    }

    // la scheda segue il suo pin; se il pin va dietro la Terra si chiude
    const card = cardRef.current
    if (s.scelto >= 0) {
      const q = proietta(s.scelto)
      if (!q || q[2] < 0.08) {
        s.scelto = -1
        setScelto(null)
      } else if (card) {
        card.style.left = `clamp(7.25rem, ${q[0].toFixed(1)}px, calc(100% - 7.25rem))`
        card.style.top = `${q[1].toFixed(1)}px`
        card.style.transform = q[1] > state.size.height - 170 ? 'translate(-50%, calc(-100% - 16px))' : 'translate(-50%, 16px)'
        card.style.visibility = 'visible'
      }
    }

    // se va sotto i 24 fps (saltati i primi fotogrammi di compilazione) torna l'SVG
    const m = s.misura
    if (!m.fatto) {
      if (dt > 0.5) m.frame = m.tempo = 0
      else if (m.saltati < 40) m.saltati++
      else {
        m.frame++
        m.tempo += dt
        if (m.frame >= 150) {
          m.fatto = true
          if (m.frame / m.tempo < 24) onLento()
        }
      }
    }
  })

  return (
    <>
      <ambientLight intensity={0.28} />
      <hemisphereLight args={['#cfe0ff', '#1a1208', 0.35]} />
      {/* il «sole»: davanti in alto a sinistra; una luce fredda da dietro disegna il bordo delle lettere */}
      <directionalLight position={[-4.5, 3, 5]} intensity={2.6} color="#fff6e8" />
      <directionalLight position={[4, 2.5, -5]} intensity={1.4} color="#9cc2ff" />

      <group ref={inclinaRef} rotation={[TILT_INIZIO, 0, 0]}>
        <group ref={giraRef}>
          <mesh>
            <sphereGeometry args={[R, 96, 64]} />
            <meshStandardMaterial ref={terraMatRef} map={terra} roughness={0.85} metalness={0} />
          </mesh>
          <mesh ref={nuvoleRef}>
            <sphereGeometry args={[R * 1.012, 72, 48]} />
            <meshStandardMaterial color="#ffffff" alphaMap={nuvole} transparent opacity={0.7} depthWrite={false} />
          </mesh>
          <points ref={puntiRef} geometry={punti.g} renderOrder={3}>
            <shaderMaterial
              vertexShader={pinVert}
              fragmentShader={pinFrag}
              ref={pinMatRef}
              uniforms={uniformiPin}
              transparent
              depthWrite={false}
            />
          </points>
        </group>
      </group>

      <mesh renderOrder={2}>
        <sphereGeometry args={[R * 1.004, 64, 48]} />
        <shaderMaterial vertexShader={atmosferaVert} fragmentShader={bordoFrag} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh renderOrder={1}>
        <sphereGeometry args={[R * 1.17, 64, 48]} />
        <shaderMaterial
          vertexShader={atmosferaVert}
          fragmentShader={aloneFrag}
          side={THREE.BackSide}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* anello del marchio: inclinato, il davanti scende sulla metà bassa della Terra */}
      <group rotation={[0.17, 0, -0.11]}>
        <group ref={anelloRef}>
          {lettere.items.map((l, i) => (
            <mesh
              key={i}
              geometry={l.geo}
              material={l.ch === '.' ? materiali.punto : materiali.lettera}
              position={[R_ANELLO * Math.sin(l.angolo), 0, R_ANELLO * Math.cos(l.angolo)]}
              rotation={[0, l.angolo, 0]}
            />
          ))}
        </group>
      </group>
    </>
  )
}

export default function Globo3D({
  pins,
  onPronto,
  onLento,
}: {
  pins: PinGlobo[]
  onPronto: () => void
  onLento: () => void
}) {
  const boxRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const ctrl = useRef<Controllo>({
    rotY: -(90 + LNG_INIZIO) * D2R,
    tilt: TILT_INIZIO,
    sopra: false,
    trascina: null,
    scelto: -1,
    hover: null,
    tap: null,
    misura: { saltati: 0, frame: 0, tempo: 0, fatto: false },
  })
  const [scelto, setSceltoStato] = useState<number | null>(null)
  const [inVista, setInVista] = useState(true)
  const [tabVisibile, setTabVisibile] = useState(true)

  const setScelto = (i: number | null) => {
    ctrl.current.scelto = i ?? -1
    setSceltoStato(i)
  }

  // fuori schermo o scheda del browser nascosta: niente render
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const io = new IntersectionObserver(([e]) => setInVista(e.isIntersecting))
    io.observe(box)
    const vis = () => setTabVisibile(document.visibilityState === 'visible')
    vis()
    document.addEventListener('visibilitychange', vis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', vis)
    }
  }, [])

  // trascinamento e scelta dei pin (mouse e touch; in verticale la pagina scorre, vedi touch-action)
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const s = ctrl.current
    const nellaScheda = (e: PointerEvent) => !!cardRef.current?.contains(e.target as Node)
    const locale = (e: PointerEvent) => {
      const r = box.getBoundingClientRect()
      return { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const giu = (e: PointerEvent) => {
      if (nellaScheda(e) || e.button > 0) return
      s.trascina = { x: e.clientX, y: e.clientY, rotY: s.rotY, tilt: s.tilt, mosso: false }
    }
    const muovi = (e: PointerEvent) => {
      if (nellaScheda(e)) return
      const t = s.trascina
      if (!t) {
        if (e.pointerType === 'mouse') s.hover = locale(e)
        return
      }
      const dx = e.clientX - t.x, dy = e.clientY - t.y
      if (!t.mosso && Math.hypot(dx, dy) > 6) {
        t.mosso = true
        box.setPointerCapture(e.pointerId)
      }
      if (!t.mosso) return
      const k = 3.2 / Math.max(320, box.clientHeight)
      s.rotY = t.rotY + dx * k
      s.tilt = Math.max(-0.6, Math.min(0.75, t.tilt + dy * k))
    }
    const su = (e: PointerEvent) => {
      const t = s.trascina
      s.trascina = null
      if (!t || t.mosso || nellaScheda(e)) return
      s.tap = { ...locale(e), raggio: e.pointerType === 'mouse' ? 14 : 26 }
    }
    const annulla = () => {
      s.trascina = null
    }
    const entra = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') s.sopra = true
    }
    const esce = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      s.sopra = false
      s.scelto = -1
      setSceltoStato(null)
    }
    box.addEventListener('pointerdown', giu)
    box.addEventListener('pointermove', muovi)
    box.addEventListener('pointerup', su)
    box.addEventListener('pointercancel', annulla)
    box.addEventListener('pointerenter', entra)
    box.addEventListener('pointerleave', esce)
    return () => {
      box.removeEventListener('pointerdown', giu)
      box.removeEventListener('pointermove', muovi)
      box.removeEventListener('pointerup', su)
      box.removeEventListener('pointercancel', annulla)
      box.removeEventListener('pointerenter', entra)
      box.removeEventListener('pointerleave', esce)
    }
  }, [])

  const sel = scelto !== null ? pins[scelto] : null
  const nPaesi = useMemo(() => new Set(pins.map((p) => p.paese)).size, [pins])

  return (
    <div ref={boxRef} className="relative h-full w-full cursor-grab select-none active:cursor-grabbing" style={{ touchAction: 'pan-y' }}>
      <div
        className="absolute inset-0"
        role="img"
        aria-label={`Globo 3D con ${pins.length} destinazioni raccontate sul sito, in ${nPaesi} Paesi: l'elenco dei Paesi è qui sotto`}
      >
        <Canvas
          aria-hidden
          frameloop={inVista && tabVisibile ? 'always' : 'never'}
          dpr={[1, 2]}
          flat
          camera={{ fov: FOV, near: 0.1, far: 60, position: [0, 0.3, 8] }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0)
            gl.domElement.addEventListener('webglcontextlost', (e) => {
              e.preventDefault()
              onLento()
            })
          }}
        >
          <Suspense fallback={null}>
            <Scena pins={pins} ctrlRef={ctrl} cardRef={cardRef} scelto={scelto} setScelto={setScelto} onPronto={onPronto} onLento={onLento} />
          </Suspense>
        </Canvas>
      </div>

      {sel && (
        <div
          ref={cardRef}
          key={scelto}
          className="absolute z-10 w-56 cursor-auto border-2 border-ink bg-cream p-3 shadow-[4px_4px_0_var(--color-rosso)]"
          style={{ visibility: 'hidden', left: 0, top: 0 }}
          role="dialog"
          aria-label={sel.nome}
        >
          <button
            type="button"
            onClick={() => setScelto(null)}
            className="absolute right-1 top-1 p-1 text-stone hover:text-rosso"
            aria-label="Chiudi"
          >
            <X size={14} />
          </button>
          <p className="pr-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-rosso">{sel.paese}</p>
          <p className="mt-1 font-display text-lg leading-tight text-alpine">{sel.nome}</p>
          <Link
            href={sel.href}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-rosso underline-offset-2 hover:text-rosso"
          >
            Apri la destinazione <ArrowRight size={13} aria-hidden />
          </Link>
        </div>
      )}
    </div>
  )
}
