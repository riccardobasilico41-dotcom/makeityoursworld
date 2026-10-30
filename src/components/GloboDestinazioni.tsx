'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'

export type PaeseGlobo = { n: string; s?: string; p: number[][] }
export type PinGlobo = { lat: number; lng: number; nome: string; paese: string; href: string }

// geometria (unità del viewBox)
const W = 1000
const H = 720
const CX = 500
const CY = 360
const R = 270
const RX = 440 // anello del marchio
const RY = 104
const TILT = -13
const FONT = 64
const D2R = Math.PI / 180
const PHI_INIZIO = 22 // guardiamo da un po' più a nord: c'è più terra

/** Ellisse dell'anello: da sinistra, giù davanti, a destra, su dietro (testo dritto sul davanti). */
const ANELLO = `M ${CX - RX} ${CY} A ${RX} ${RY} 0 0 0 ${CX + RX} ${CY} A ${RX} ${RY} 0 0 0 ${CX - RX} ${CY}`
const COPIE = 2

/**
 * Globo che gira con i pin di tutte le destinazioni, come il logo Universal: il marchio
 * «make it yours.world» corre su un anello inclinato che passa davanti al globo nella metà
 * bassa e dietro nella metà alta. Proiezione ortografica scritta a mano, niente librerie.
 * Gira da solo piano, si ferma col mouse sopra o mentre lo trascini; con
 * prefers-reduced-motion resta fermo (anello statico) ma si può ancora trascinare.
 */
export function GloboDestinazioni({ paesi, pins }: { paesi: PaeseGlobo[]; pins: PinGlobo[] }) {
  const router = useRouter()
  const svgRef = useRef<SVGSVGElement>(null)
  const terreRef = useRef<SVGGElement>(null)
  const pinRef = useRef<SVGGElement>(null)
  const graticolaRef = useRef<SVGPathElement>(null)
  const testiRef = useRef<SVGTextPathElement[]>([])
  const misuraRef = useRef<SVGTextElement>(null)
  const stato = useRef({ lam: -12, phi: PHI_INIZIO, offset: 0, sopra: false, sporco: true, trascina: null as null | { x: number; y: number; lam: number; phi: number; mosso: boolean }, visibile: true, giro: 0 })
  const [scelto, setScelto] = useState<{ i: number; x: number; y: number } | null>(null)
  const [spaziatura, setSpaziatura] = useState(0)
  const sceltoRef = useRef(scelto)
  useEffect(() => {
    sceltoRef.current = scelto
    stato.current.sporco = true
  }, [scelto])

  // lunghezza dell'anello e spaziatura delle lettere perché COPIE marchi lo riempiano esatti
  // (misurata a font caricati: il carattere macchina da scrivere arriva dopo)
  useLayoutEffect(() => {
    let vivo = true
    const misura = () => {
      const t = misuraRef.current
      if (!t || !vivo) return
      const lungo = Math.PI * (3 * (RX + RY) - Math.sqrt((3 * RX + RY) * (RX + 3 * RY))) // Ramanujan
      const unaCopia = t.getComputedTextLength()
      const caratteri = t.textContent?.length ?? 1
      stato.current.giro = lungo
      stato.current.sporco = true
      setSpaziatura(Math.max(0, (lungo / COPIE - unaCopia) / caratteri))
    }
    document.fonts.ready.then(misura)
    return () => {
      vivo = false
    }
  }, [])

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const riduci = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const s = stato.current

    const proietta = (lng: number, lat: number) => {
      const l = (lng - s.lam) * D2R, f = lat * D2R, f0 = s.phi * D2R
      const cosc = Math.sin(f0) * Math.sin(f) + Math.cos(f0) * Math.cos(f) * Math.cos(l)
      const x = R * Math.cos(f) * Math.sin(l)
      const y = R * (Math.cos(f0) * Math.sin(f) - Math.sin(f0) * Math.cos(f) * Math.cos(l))
      return [x, y, cosc] as const
    }

    const anello = (coords: number[], chiuso: boolean) => {
      let d = '', visti = 0
      for (let k = 0; k < coords.length; k += 2) {
        const pr = proietta(coords[k], coords[k + 1])
        let x = pr[0], y = pr[1]
        const c = pr[2]
        if (c > 0) visti++
        else {
          // dietro: schiacciato sul bordo del disco (taglio approssimato all'orizzonte)
          const m = Math.hypot(x, y) || 1
          x = (x / m) * R
          y = (y / m) * R
        }
        d += (k ? 'L' : 'M') + (CX + x).toFixed(1) + ' ' + (CY - y).toFixed(1)
      }
      return visti ? d + (chiuso ? 'Z' : '') : ''
    }

    const graticola = () => {
      let d = ''
      for (let lng = -180; lng < 180; lng += 30) {
        let seg = '', on = false
        for (let lat = -80; lat <= 80; lat += 5) {
          const [x, y, c] = proietta(lng, lat)
          if (c > 0) { seg += (on ? 'L' : 'M') + (CX + x).toFixed(1) + ' ' + (CY - y).toFixed(1); on = true } else on = false
        }
        d += seg
      }
      for (let lat = -60; lat <= 60; lat += 30) {
        let seg = '', on = false
        for (let lng = -180; lng <= 180; lng += 5) {
          const [x, y, c] = proietta(lng, lat)
          if (c > 0) { seg += (on ? 'L' : 'M') + (CX + x).toFixed(1) + ' ' + (CY - y).toFixed(1); on = true } else on = false
        }
        d += seg
      }
      return d
    }

    const disegna = () => {
      const terre = terreRef.current?.children
      if (terre) {
        for (let i = 0; i < paesi.length; i++) {
          const d = paesi[i].p.map((r) => anello(r, true)).join('')
          terre[i].setAttribute('d', d)
        }
      }
      graticolaRef.current?.setAttribute('d', graticola())
      const ps = pinRef.current?.children
      if (ps) {
        for (let i = 0; i < pins.length; i++) {
          const [x, y, c] = proietta(pins[i].lng, pins[i].lat)
          const g = ps[i] as SVGGElement
          if (c > 0.05) {
            g.setAttribute('transform', `translate(${(CX + x).toFixed(1)} ${(CY - y).toFixed(1)})`)
            g.style.display = ''
          } else g.style.display = 'none'
        }
      }
      const sc = sceltoRef.current
      if (sc) {
        const [x, y, c] = proietta(pins[sc.i].lng, pins[sc.i].lat)
        if (c <= 0.05) setScelto(null)
        else if (Math.abs(CX + x - sc.x) > 0.5 || Math.abs(CY - y - sc.y) > 0.5) setScelto({ i: sc.i, x: CX + x, y: CY - y })
      }
      const g = s.giro
      testiRef.current.forEach((t, k) => t?.setAttribute('startOffset', String(s.offset - (k % 2) * g)))
    }

    let raf = 0, ultimo = performance.now()
    const passo = (ora: number) => {
      const dt = Math.min(64, ora - ultimo)
      ultimo = ora
      if (s.visibile && !riduci) {
        if (!s.sopra && !s.trascina && !sceltoRef.current) s.lam -= dt * 0.006 // ~6° al secondo
        if (s.giro) s.offset = (s.offset + dt * 0.03) % s.giro
        disegna()
      } else if (s.visibile && s.sporco) {
        s.sporco = false
        disegna()
      }
      raf = requestAnimationFrame(passo)
    }
    disegna()
    raf = requestAnimationFrame(passo)

    const io = new IntersectionObserver(([e]) => { s.visibile = e.isIntersecting })
    io.observe(svg)

    // trascinamento (mouse e touch: in verticale la pagina scorre, vedi touch-action)
    const scala = () => W / svg.getBoundingClientRect().width
    const giu = (e: PointerEvent) => {
      s.trascina = { x: e.clientX, y: e.clientY, lam: s.lam, phi: s.phi, mosso: false }
    }
    const muovi = (e: PointerEvent) => {
      const t = s.trascina
      if (!t) return
      const dx = (e.clientX - t.x) * scala(), dy = (e.clientY - t.y) * scala()
      if (!t.mosso && Math.hypot(dx, dy) > 6) {
        t.mosso = true
        svg.setPointerCapture(e.pointerId)
      }
      if (!t.mosso) return
      s.lam = t.lam - dx * 0.25
      s.phi = Math.max(-60, Math.min(70, t.phi + dy * 0.25))
      disegna()
    }
    const su = (e: PointerEvent) => {
      if (s.trascina?.mosso) {
        e.preventDefault()
        // il click che segue un trascinamento non deve aprire nulla
        const blocca = (ev: Event) => { ev.stopPropagation(); ev.preventDefault() }
        svg.addEventListener('click', blocca, { capture: true, once: true })
        setTimeout(() => svg.removeEventListener('click', blocca, { capture: true }), 0)
      }
      s.trascina = null
    }
    const entra = () => { s.sopra = true }
    const esce = () => { s.sopra = false }
    svg.addEventListener('pointerdown', giu)
    svg.addEventListener('pointermove', muovi)
    svg.addEventListener('pointerup', su)
    svg.addEventListener('pointercancel', su)
    svg.addEventListener('pointerenter', entra)
    svg.addEventListener('pointerleave', esce)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      svg.removeEventListener('pointerdown', giu)
      svg.removeEventListener('pointermove', muovi)
      svg.removeEventListener('pointerup', su)
      svg.removeEventListener('pointercancel', su)
      svg.removeEventListener('pointerenter', entra)
      svg.removeEventListener('pointerleave', esce)
    }
  }, [paesi, pins])

  const marchio = (
    <>
      {Array.from({ length: COPIE }, (_, k) => (
        <tspan key={k}>
          make it yours<tspan fill="var(--color-rosso)">.</tspan>world{'  '}
        </tspan>
      ))}
    </>
  )
  const testoAnello = (strato: 'dietro' | 'davanti') =>
    [0, 1].map((k) => (
      <text
        key={k}
        fontSize={FONT}
        fontWeight={700}
        letterSpacing={spaziatura}
        fill={strato === 'dietro' ? 'var(--color-stone)' : 'var(--color-ink)'}
        stroke={strato === 'davanti' ? 'var(--color-cream)' : undefined}
        strokeWidth={strato === 'davanti' ? 7 : undefined}
        strokeLinejoin="round"
        style={{ fontFamily: 'var(--font-typewriter)', paintOrder: 'stroke' }}
        dominantBaseline="central"
      >
        <textPath
          href="#globo-anello"
          ref={(el) => {
            if (el) testiRef.current[(strato === 'dietro' ? 0 : 2) + k] = el
          }}
          startOffset={0}
        >
          {marchio}
        </textPath>
      </text>
    ))

  const sel = scelto ? pins[scelto.i] : null

  return (
    <div
      className="relative mx-auto w-full max-w-5xl"
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') setScelto(null)
      }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full cursor-grab select-none active:cursor-grabbing"
        style={{ touchAction: 'pan-y' }}
        role="img"
        aria-label={`Globo con ${pins.length} destinazioni raccontate sul sito, in ${new Set(pins.map((p) => p.paese)).size} Paesi`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setScelto(null)
        }}
      >
        <defs>
          <path id="globo-anello" d={ANELLO} />
          <clipPath id="globo-dietro" clipPathUnits="userSpaceOnUse">
            <rect x={-200} y={-400} width={W + 400} height={CY + 400} />
          </clipPath>
          <clipPath id="globo-davanti" clipPathUnits="userSpaceOnUse">
            <rect x={-200} y={CY} width={W + 400} height={H} />
          </clipPath>
          <radialGradient id="globo-luce" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="var(--color-cream)" />
            <stop offset="100%" stopColor="var(--color-cream-dark)" />
          </radialGradient>
        </defs>

        {/* testo nascosto solo per misurare una copia del marchio */}
        <text ref={misuraRef} fontSize={FONT} fontWeight={700} style={{ fontFamily: 'var(--font-typewriter)' }} opacity={0} aria-hidden>
          {'make it yours.world  '}
        </text>

        {/* anello, metà dietro */}
        <g transform={`rotate(${TILT} ${CX} ${CY})`} clipPath="url(#globo-dietro)" aria-hidden>
          <use href="#globo-anello" fill="none" stroke="var(--color-stone)" strokeOpacity={0.35} strokeWidth={1.5} />
          {testoAnello('dietro')}
        </g>

        {/* globo */}
        <circle cx={CX} cy={CY} r={R} fill="url(#globo-luce)" stroke="var(--color-ink)" strokeWidth={3} />
        <path ref={graticolaRef} fill="none" stroke="var(--color-ink)" strokeOpacity={0.08} strokeWidth={1} />
        <g ref={terreRef}>
          {paesi.map((p) => (
            <path
              key={p.n}
              fill="var(--color-ink)"
              fillOpacity={p.s ? 0.85 : 0.62}
              stroke="var(--color-cream)"
              strokeWidth={0.6}
              className={p.s ? 'cursor-pointer transition-[fill] hover:fill-rosso-dark' : undefined}
              onClick={p.s ? () => router.push(`/destinazioni/${p.s}`) : undefined}
            >
              <title>{p.s ? `${p.n}: apri la pagina Paese` : p.n}</title>
            </path>
          ))}
        </g>
        <g ref={pinRef}>
          {pins.map((p, i) => (
            <g
              key={p.href}
              className="cursor-pointer"
              style={{ display: 'none' }}
              onPointerEnter={(e) => {
                if (e.pointerType === 'mouse') setScelto({ i, x: 0, y: 0 })
              }}
              onClick={(e) => {
                e.stopPropagation()
                setScelto({ i, x: 0, y: 0 })
              }}
            >
              <circle r={11} fill="transparent" />
              <circle r={scelto?.i === i ? 7 : 4.5} fill="var(--color-rosso)" stroke="var(--color-cream)" strokeWidth={1.5} />
            </g>
          ))}
        </g>

        {/* anello, metà davanti */}
        <g transform={`rotate(${TILT} ${CX} ${CY})`} clipPath="url(#globo-davanti)" aria-hidden className="pointer-events-none">
          <use href="#globo-anello" fill="none" stroke="var(--color-ink)" strokeOpacity={0.5} strokeWidth={1.5} />
          {testoAnello('davanti')}
        </g>
      </svg>

      {sel && scelto && scelto.x > 0 && (
        <div
          className="absolute z-10 w-56 border-2 border-ink bg-cream p-3 shadow-[4px_4px_0_var(--color-ink)]"
          style={{
            left: `clamp(7.25rem, ${((scelto.x / W) * 100).toFixed(2)}%, calc(100% - 7.25rem))`,
            top: `${((scelto.y / H) * 100).toFixed(2)}%`,
            transform: 'translate(-50%, 14px)',
          }}
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
          <Link href={sel.href} className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-rosso underline-offset-2 hover:text-rosso">
            Apri la destinazione <ArrowRight size={13} aria-hidden />
          </Link>
        </div>
      )}
    </div>
  )
}
