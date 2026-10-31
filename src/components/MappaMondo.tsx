'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { ArrowRight, Minus, Plus, RotateCcw, X } from 'lucide-react'

export type PinMondo = {
  id: string
  /** posizione nel viewBox (proiezione Equal Earth, vedi MappaMondoSezione) */
  x: number
  y: number
  nome: string
  paese: string
  testo: string
  href: string
  paeseHref: string
  immagine?: string
  imageAlt?: string
  viaggio?: { titolo: string; href: string }
}

type Terra = { nome: string; slug?: string; d: string }
type VB = [number, number, number, number]

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

/**
 * Mappa del mondo piatta nello stile delle mappe dei Paesi: fondo grigio-azzurro, terre
 * color calce con la costa a inchiostro, Paesi raccontati sul sito un tono più scuri, un
 * punto rosso per destinazione che resta della stessa misura a ogni zoom. Toccare un Paese
 * avvicina la mappa; toccare un punto apre la scheda con foto, destinazione, Paese e viaggio.
 */
export function MappaMondo({ w, h, terre, graticola, pins }: { w: number; h: number; terre: Terra[]; graticola: string; pins: PinMondo[] }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const vbRef = useRef<VB>([0, 0, w, h])
  const rafRef = useRef(0)
  const trascina = useRef<{ x: number; y: number; vb: VB; mosso: boolean } | null>(null)
  const [selId, setSelId] = useState<string | null>(null)
  const [zoomato, setZoomato] = useState(false)
  const sel = pins.find((p) => p.id === selId) ?? null

  /** Applica il viewBox e scala i pin perché restino della stessa misura sullo schermo. */
  const applica = useCallback(() => {
    const svg = svgRef.current
    if (!svg) return
    const vb = vbRef.current
    svg.setAttribute('viewBox', vb.map((n) => n.toFixed(2)).join(' '))
    const r = svg.getBoundingClientRect()
    if (!r.width) return
    const k = Math.max(vb[2] / r.width, vb[3] / r.height)
    svg.querySelectorAll<SVGGElement>('[data-pin]').forEach((g) => {
      g.setAttribute('transform', `translate(${g.dataset.x} ${g.dataset.y}) scale(${k.toFixed(4)})`)
    })
  }, [])

  const limita = useCallback(
    (vb: VB): VB => {
      const lw = Math.min(w, Math.max(w / 14, vb[2]))
      const lh = lw * (h / w)
      return [Math.min(Math.max(vb[0], 0), w - lw), Math.min(Math.max(vb[1], 0), h - lh), lw, lh]
    },
    [w, h],
  )

  const animaA = useCallback(
    (meta: VB) => {
      cancelAnimationFrame(rafRef.current)
      const to = limita(meta)
      setZoomato(to[2] < w - 0.5)
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        vbRef.current = to
        applica()
        return
      }
      const from = vbRef.current.slice() as VB
      const t0 = performance.now()
      const passo = (ora: number) => {
        const t = Math.min(1, (ora - t0) / 750)
        vbRef.current = from.map((v, i) => v + (to[i] - v) * ease(t)) as VB
        applica()
        if (t < 1) rafRef.current = requestAnimationFrame(passo)
      }
      rafRef.current = requestAnimationFrame(passo)
    },
    [applica, limita, w],
  )

  const zoomDi = (fattore: number) => {
    const [x, y, vw, vh] = vbRef.current
    const nw = vw / fattore, nh = vh / fattore
    animaA([x + (vw - nw) / 2, y + (vh - nh) / 2, nw, nh])
  }
  const tutto = () => animaA([0, 0, w, h])

  /** Avvicina a un rettangolo (un Paese), con un po' di margine e il rapporto della mappa. */
  const inquadra = (bx: number, by: number, bw: number, bh: number) => {
    const margine = 1.5
    let vw = Math.max(bw * margine, (bh * margine * w) / h, w / 14)
    vw = Math.min(vw, w)
    const vh = vw * (h / w)
    animaA([bx + bw / 2 - vw / 2, by + bh / 2 - vh / 2, vw, vh])
  }

  useEffect(() => {
    applica()
  })
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const ro = new ResizeObserver(() => applica())
    ro.observe(svg)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [applica])

  // trascinamento quando la mappa è avvicinata (in verticale la pagina scorre: vedi touch-action)
  const giu = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (e.button > 0) return
    trascina.current = { x: e.clientX, y: e.clientY, vb: vbRef.current.slice() as VB, mosso: false }
  }
  const muovi = (e: ReactPointerEvent<SVGSVGElement>) => {
    const t = trascina.current
    const svg = svgRef.current
    if (!t || !svg || !zoomato) return
    const dx = e.clientX - t.x, dy = e.clientY - t.y
    if (!t.mosso && Math.hypot(dx, dy) < 6) return
    if (!t.mosso) {
      t.mosso = true
      svg.setPointerCapture(e.pointerId)
    }
    const r = svg.getBoundingClientRect()
    const k = t.vb[2] / r.width
    cancelAnimationFrame(rafRef.current)
    vbRef.current = limita([t.vb[0] - dx * k, t.vb[1] - dy * k, t.vb[2], t.vb[3]])
    applica()
  }
  const su = () => {
    // il click che segue un trascinamento non deve aprire niente
    setTimeout(() => (trascina.current = null), 0)
  }
  const eraTrascinamento = () => !!trascina.current?.mosso

  const tocca = (p: PinMondo) => {
    if (eraTrascinamento()) return
    // punti fitti (es. Europa a mappa intera): prima si avvicina, poi si sceglie
    const svg = svgRef.current
    const vb = vbRef.current
    if (svg && vb[2] > w / 5) {
      const k = vb[2] / svg.getBoundingClientRect().width
      const vicini = pins.filter((q) => q.id !== p.id && Math.hypot(q.x - p.x, q.y - p.y) / k < 16).length
      if (vicini > 0) {
        inquadra(p.x - w / 16, p.y - h / 16, w / 8, h / 8)
        return
      }
    }
    setSelId(p.id)
  }

  const toccaTerra = (e: React.MouseEvent<SVGPathElement>) => {
    if (eraTrascinamento()) return
    const b = e.currentTarget.getBBox()
    // Paesi enormi o divisi dall'antimeridiano (Russia, Stati Uniti con l'Alaska): avvicina al punto toccato
    if (b.width > w * 0.35) {
      const svg = svgRef.current!
      const r = svg.getBoundingClientRect()
      const [x, y, vw, vh] = vbRef.current
      const px = x + ((e.clientX - r.left) / r.width) * vw
      const py = y + ((e.clientY - r.top) / r.height) * vh
      inquadra(px - w / 12, py - h / 12, w / 6, h / 6)
      return
    }
    inquadra(b.x, b.y, b.width, b.height)
  }

  const bottone =
    'inline-flex size-10 items-center justify-center border-2 border-ink bg-cream text-ink transition-colors hover:bg-ink hover:text-cream'

  return (
    <div className="relative mt-8">
      <div className="relative overflow-hidden border-2 border-ink" style={{ backgroundColor: '#e2e7e6', touchAction: zoomato ? 'none' : 'pan-y' }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${w} ${h}`}
          className={`block h-auto w-full select-none ${zoomato ? 'cursor-grab active:cursor-grabbing' : ''}`}
          role="group"
          aria-label={`Mappa del mondo con ${pins.length} destinazioni`}
          onPointerDown={giu}
          onPointerMove={muovi}
          onPointerUp={su}
          onPointerCancel={su}
          onKeyDown={(e) => e.key === 'Escape' && setSelId(null)}
        >
          <path d={graticola} fill="none" stroke="#cbd4d4" strokeWidth={1} strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
          <g strokeLinejoin="round">
            {terre.map((t, i) => (
              <path
                key={i}
                d={t.d}
                fill={t.slug ? 'var(--color-cream-dark)' : 'var(--color-cream)'}
                stroke="var(--color-ink)"
                strokeWidth={t.slug ? 0.9 : 0.6}
                strokeOpacity={t.slug ? 0.9 : 0.55}
                vectorEffect="non-scaling-stroke"
                onClick={toccaTerra}
                className="cursor-zoom-in transition-[fill] duration-150 hover:fill-[#dcd8cc]"
              >
                <title>{t.nome}</title>
              </path>
            ))}
          </g>
          {pins.map((p) => {
            const isSel = p.id === selId
            return (
              <g
                key={p.id}
                data-pin=""
                data-x={p.x}
                data-y={p.y}
                transform={`translate(${p.x} ${p.y})`}
                role="button"
                tabIndex={0}
                aria-label={`${p.nome}, ${p.paese}`}
                aria-pressed={isSel}
                onClick={() => tocca(p)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelId(p.id)
                  }
                }}
                className="group cursor-pointer outline-none"
              >
                <circle r={11} fill="transparent" />
                {isSel && <circle r={12} fill="none" stroke="var(--color-rosso)" strokeWidth={2} className="origin-center [transform-box:fill-box] motion-safe:animate-ping" />}
                <circle cx={1.2} cy={1.2} r={isSel ? 7 : 5} fill="var(--color-ink)" />
                <circle
                  r={isSel ? 7 : 5}
                  fill={isSel ? 'var(--color-ink)' : 'var(--color-rosso)'}
                  stroke="var(--color-cream)"
                  strokeWidth={1.4}
                  className="transition-transform duration-150 group-hover:scale-125 group-focus-visible:stroke-[3px] [transform-box:fill-box] origin-center"
                />
                <title>{`${p.nome} · ${p.paese}`}</title>
              </g>
            )
          })}
        </svg>

        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <button type="button" className={bottone} onClick={() => zoomDi(1.8)} aria-label="Avvicina">
            <Plus size={16} />
          </button>
          <button type="button" className={bottone} onClick={() => zoomDi(1 / 1.8)} aria-label="Allontana" disabled={!zoomato}>
            <Minus size={16} />
          </button>
          {zoomato && (
            <button type="button" className={bottone} onClick={tutto} aria-label="Tutto il mondo">
              <RotateCcw size={15} />
            </button>
          )}
        </div>
        <p className="pointer-events-none absolute bottom-2 left-2 hidden bg-cream/85 px-2 py-1 text-[11px] text-stone sm:block">
          Tocca un Paese per avvicinarti · trascina per spostarti
        </p>

        {sel && (
          <div className="hidden sm:block">
            {/* la scheda va dal lato opposto al punto scelto, per non coprirlo */}
            <SchedaPin
              pin={sel}
              onChiudi={() => setSelId(null)}
              className={`absolute bottom-3 w-80 shadow-[5px_5px_0_var(--color-rosso)] ${sel.x < w / 2 ? 'right-16' : 'left-3'}`}
            />
          </div>
        )}
      </div>
      {sel && <SchedaPin pin={sel} onChiudi={() => setSelId(null)} className="relative mt-4 sm:hidden" />}
    </div>
  )
}

function SchedaPin({ pin, onChiudi, className = '' }: { pin: PinMondo; onChiudi: () => void; className?: string }) {
  return (
    <div className={`z-10 border-2 border-ink bg-cream ${className}`} role="dialog" aria-label={pin.nome}>
      <Link href={pin.href} className="group relative block aspect-[16/10] overflow-hidden bg-cream-dark">
        {pin.immagine && (
          <Image
            src={pin.immagine}
            alt={pin.imageAlt ?? pin.nome}
            fill
            sizes="(min-width: 640px) 320px, 100vw"
            loading="eager"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </Link>
      <button
        type="button"
        onClick={onChiudi}
        className="absolute right-2 top-2 inline-flex size-9 items-center justify-center bg-cream/90 text-ink hover:text-rosso"
        aria-label="Chiudi"
      >
        <X size={16} />
      </button>
      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rosso">{pin.paese}</p>
        <Link href={pin.href} className="mt-1 block font-display text-xl leading-tight text-alpine hover:text-rosso">
          {pin.nome}
        </Link>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone">{pin.testo}</p>
        <div className="mt-4 flex flex-col gap-2 text-sm font-medium">
          <Link href={pin.href} className="inline-flex min-h-10 items-center justify-between gap-2 bg-alpine px-4 text-cream hover:bg-alpine-dark">
            Apri la destinazione <ArrowRight size={15} aria-hidden />
          </Link>
          <Link href={pin.paeseHref} className="inline-flex min-h-10 items-center justify-between gap-2 border-2 border-ink px-4 text-ink hover:bg-ink hover:text-cream">
            Tutto su {pin.paese} <ArrowRight size={15} aria-hidden />
          </Link>
          {pin.viaggio && (
            <Link href={pin.viaggio.href} className="inline-flex min-h-10 items-center justify-between gap-2 border-2 border-ink px-4 text-ink hover:bg-ink hover:text-cream">
              <span className="line-clamp-1">Il viaggio: {pin.viaggio.titolo}</span> <ArrowRight size={15} className="shrink-0" aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
