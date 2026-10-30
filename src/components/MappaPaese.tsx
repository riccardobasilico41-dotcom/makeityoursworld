'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { ArrowRight } from 'lucide-react'

export type DatiMappa = { viewBox: string; w: number; h: number; path: string; graticola?: string }

export type PuntoMappa = {
  id: string
  tipo: 'destinazione' | 'esperienza'
  nome: string
  kicker: string
  testo: string
  href: string
  /** posizione nel viewBox della mappa */
  x: number
  y: number
  /** scostamento in pixel schermo per i punti sovrapposti */
  dx: number
  dy: number
  /** id dei punti collegati (esperienze di una destinazione, o la sua destinazione) */
  legati: string[]
}

type Filtro = 'tutto' | 'destinazione' | 'esperienza'
type VB = [number, number, number, number]

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const LARGH_CAR = 6.6 // px per carattere delle etichette (12px, semibold): stima per le collisioni
const DX_ETICHETTA = 17 // distanza dell'etichetta dal centro del pin, in pixel schermo

// il Paese ritagliato su un fondo grigio-azzurro (mare o Paesi vicini: i contorni non li distinguono),
// con una riga sottile che ripete il contorno a qualche pixel di distanza
const FONDO = '#e2e7e6'
const RIGA = '#c2cccc'
const GRIGLIA = '#cbd4d4'
const DISTANZA_RIGA = 14 // larghezza del tratto: la riga cade a metà, ~7 px dal contorno

/**
 * Mappa interattiva del Paese, sul modello di quella di Wale Adventure: contorno SVG,
 * pin che restano della stessa misura sullo schermo a ogni zoom, zoom animato sul
 * punto scelto, pannello con i dettagli, filtri. Rispetta prefers-reduced-motion.
 */
export function MappaPaese({ nomePaese, mappa, punti }: { nomePaese: string; mappa: DatiMappa; punti: PuntoMappa[] }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const vbRef = useRef<VB>([0, 0, mappa.w, mappa.h])
  const rafRef = useRef(0)
  const [filtro, setFiltro] = useState<Filtro>('tutto')
  const [selId, setSelId] = useState<string | null>(null)
  const [zoomato, setZoomato] = useState(false)

  const sel = punti.find((p) => p.id === selId) ?? null
  const visibile = useCallback((p: PuntoMappa) => filtro === 'tutto' || p.tipo === filtro, [filtro])
  // destinazioni sopra le esperienze; il punto scelto per ultimo, così sta sopra a tutto
  const ordinati = useMemo(
    () => [...punti].sort((a, b) => (a.tipo === b.tipo ? 0 : a.tipo === 'esperienza' ? -1 : 1)),
    [punti],
  )
  // le destinazioni sono numerate nell'ordine dell'elenco: stesso numero sul pin e a fianco
  const numero = useMemo(() => {
    const m = new Map<string, number>()
    punti.filter((p) => p.tipo === 'destinazione').forEach((p, i) => m.set(p.id, i + 1))
    return m
  }, [punti])
  const nD = punti.filter((p) => p.tipo === 'destinazione').length
  const nE = punti.length - nD

  /** Applica il viewBox e ricalcola scala dei pin ed etichette (imperativo, gira a ogni frame). */
  const applica = useCallback(() => {
    const svg = svgRef.current
    if (!svg) return
    const vb = vbRef.current
    svg.setAttribute('viewBox', vb.map((n) => n.toFixed(2)).join(' '))
    const r = svg.getBoundingClientRect()
    if (!r.width) return
    const k = Math.max(vb[2] / r.width, vb[3] / r.height) // unità mappa per pixel schermo
    const presi: [number, number, number, number][] = []
    const pins = Array.from(svg.querySelectorAll<SVGGElement>('[data-pin]'))
    // prima il selezionato, poi le destinazioni in ordine: le etichette che non ci stanno spariscono
    pins.sort((a, b) => Number(b.dataset.sel === '1') - Number(a.dataset.sel === '1'))
    for (const g of pins) {
      const x = +g.dataset.x! + +g.dataset.dx! * k
      const y = +g.dataset.y! + +g.dataset.dy! * k
      g.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${k.toFixed(4)})`)
      const t = g.querySelector<SVGTextElement>('[data-etichetta]')
      if (!t) continue
      const sx = (x - vb[0]) / k, sy = (y - vb[1]) / k // pixel schermo
      const lw = t.textContent!.length * LARGH_CAR
      const D = DX_ETICHETTA
      const aSinistra = sx + D + lw > r.width - 4 && sx - D - lw >= 4
      const nonCi = sx + D + lw > r.width - 4 && !aSinistra // né a destra né a sinistra: niente etichetta
      t.setAttribute('x', String(aSinistra ? -D : D))
      t.setAttribute('text-anchor', aSinistra ? 'end' : 'start')
      const box: [number, number, number, number] = aSinistra ? [sx - D - lw, sy - 9, sx - D + 4, sy + 9] : [sx + D - 4, sy - 9, sx + D + lw, sy + 9]
      const dentro = sx > -20 && sx < r.width + 20 && sy > -20 && sy < r.height + 20
      const libero = presi.every(([a, b, c, d]) => box[2] < a || box[0] > c || box[3] < b || box[1] > d)
      const mostra = g.dataset.off !== '1' && dentro && !nonCi && (g.dataset.sel === '1' || libero)
      t.style.display = mostra ? '' : 'none'
      if (mostra) presi.push(box)
    }
  }, [])

  const animaA = useCallback(
    (to: VB) => {
      cancelAnimationFrame(rafRef.current)
      const riduci = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (riduci) {
        vbRef.current = to
        applica()
        return
      }
      const from = vbRef.current.slice() as VB
      const t0 = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - t0) / 850)
        const e = ease(t)
        vbRef.current = from.map((v, i) => v + (to[i] - v) * e) as VB
        applica()
        if (t < 1) rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    },
    [applica],
  )

  const tutto = useCallback(() => {
    setZoomato(false)
    animaA([0, 0, mappa.w, mappa.h])
  }, [animaA, mappa.w, mappa.h])

  const zoomSu = useCallback(
    (p: PuntoMappa) => {
      // inquadra il punto e i punti collegati, con un minimo di zoom e il rapporto della mappa
      const legati = punti.filter((q) => p.legati.includes(q.id))
      const xs = [p.x, ...legati.map((q) => q.x)], ys = [p.y, ...legati.map((q) => q.y)]
      const rapp = mappa.h / mappa.w
      // zoom più stretto dove i punti sono fitti (es. New York sulla mappa dello Stato)
      const vicino = Math.min(...punti.filter((q) => q.id !== p.id && !p.legati.includes(q.id)).map((q) => Math.hypot(q.x - p.x, q.y - p.y)), Infinity)
      const minimo = Math.min(mappa.w / 2.4, Math.max(mappa.w / 40, vicino * 8))
      let w = Math.max(minimo, (Math.max(...xs) - Math.min(...xs)) * 1.6, ((Math.max(...ys) - Math.min(...ys)) * 1.6) / rapp)
      w = Math.min(w, mappa.w)
      const h = w * rapp
      const cx = (Math.max(...xs) + Math.min(...xs)) / 2, cy = (Math.max(...ys) + Math.min(...ys)) / 2
      const x = Math.min(Math.max(cx - w / 2, 0), mappa.w - w)
      const y = Math.min(Math.max(cy - h / 2, 0), mappa.h - h)
      setZoomato(w < mappa.w)
      animaA([x, y, w, h])
    },
    [animaA, mappa.w, mappa.h, punti],
  )

  const scegli = useCallback(
    (p: PuntoMappa) => {
      setSelId(p.id)
      zoomSu(p)
    },
    [zoomSu],
  )

  const azzera = useCallback(() => {
    setSelId(null)
    tutto()
  }, [tutto])

  // scala corretta al primo render, a ogni resize e dopo i cambi di selezione/filtro
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

  const cambiaFiltro = (f: Filtro) => {
    setFiltro(f)
    if (sel && f !== 'tutto' && sel.tipo !== f) azzera()
  }

  const tasto = (e: KeyboardEvent, p: PuntoMappa) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      scegli(p)
    } else if (e.key === 'Escape') {
      azzera()
    }
  }

  const chip = (f: Filtro, label: string) => (
    <button
      type="button"
      aria-pressed={filtro === f}
      onClick={() => cambiaFiltro(f)}
      className="inline-flex min-h-10 items-center gap-2 rounded-none border-2 border-ink px-4 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 aria-pressed:bg-ink aria-pressed:text-cream"
    >
      {label}
    </button>
  )

  const legati = sel ? punti.filter((q) => sel.legati.includes(q.id)) : []

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center gap-2" role="toolbar" aria-label="Filtra la mappa">
        {chip('tutto', 'Tutto')}
        {nD > 0 && chip('destinazione', `Destinazioni · ${nD}`)}
        {nE > 0 && chip('esperienza', `Esperienze · ${nE}`)}
      </div>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[7fr_5fr] lg:gap-10">
        <div>
          <div className="relative overflow-hidden border-2 border-ink" style={{ touchAction: 'pan-y', backgroundColor: FONDO }}>
            <svg
              ref={svgRef}
              viewBox={mappa.viewBox}
              className="block h-auto max-h-[78vh] w-full"
              role="group"
              aria-label={`Mappa di ${nomePaese} con destinazioni ed esperienze`}
              onKeyDown={(e) => e.key === 'Escape' && azzera()}
            >
              {mappa.graticola && (
                <path d={mappa.graticola} fill="none" stroke={GRIGLIA} strokeWidth={1} strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
              )}
              {/* riga di contorno: tratto largo coperto da uno un po' più stretto color fondo */}
              <g fill="none" strokeLinejoin="round">
                <path d={mappa.path} stroke={RIGA} strokeWidth={DISTANZA_RIGA} vectorEffect="non-scaling-stroke" />
                <path d={mappa.path} stroke={FONDO} strokeWidth={DISTANZA_RIGA - 2.5} vectorEffect="non-scaling-stroke" />
              </g>
              {/* due passate: tratto spesso sotto, riempimento sopra → si vede solo la costa, non i confini interni */}
              <path d={mappa.path} fill="none" stroke="var(--color-ink)" strokeWidth={2.4} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <path d={mappa.path} fill="var(--color-cream)" />
              {ordinati.map((p) => {
                const on = visibile(p)
                const isSel = p.id === selId
                const evid = sel ? sel.legati.includes(p.id) : false
                const dest = p.tipo === 'destinazione'
                return (
                  <g
                    key={p.id}
                    data-pin=""
                    transform={`translate(${p.x} ${p.y}) scale(${(mappa.w / 700).toFixed(4)})`}
                    data-x={p.x}
                    data-y={p.y}
                    data-dx={p.dx}
                    data-dy={p.dy}
                    data-sel={isSel ? '1' : '0'}
                    data-off={on ? '0' : '1'}
                    role="button"
                    tabIndex={on ? 0 : -1}
                    aria-hidden={on ? undefined : true}
                    aria-pressed={isSel}
                    aria-label={`${dest ? 'Destinazione' : 'Esperienza'}: ${p.nome}`}
                    onClick={() => on && scegli(p)}
                    onKeyDown={(e) => tasto(e, p)}
                    className={`group cursor-pointer outline-none transition-opacity duration-300 ${on ? '' : 'pointer-events-none opacity-15'}`}
                  >
                    <circle r={18} fill="transparent" />
                    {isSel && (
                      <circle
                        r={dest ? 15 : 10}
                        fill="none"
                        stroke="var(--color-rosso)"
                        strokeWidth={2}
                        className="origin-center [transform-box:fill-box] motion-safe:animate-ping"
                      />
                    )}
                    {dest ? (
                      <g className="origin-center transition-transform duration-200 [transform-box:fill-box] group-hover:scale-110">
                        {/* ombra piena spostata, come i box del sito */}
                        <circle cx={1.8} cy={1.8} r={10} fill="var(--color-ink)" />
                        <circle
                          r={10}
                          fill={isSel ? 'var(--color-ink)' : 'var(--color-rosso)'}
                          stroke="var(--color-cream)"
                          strokeWidth={1.8}
                          className="group-focus-visible:stroke-[4px]"
                        />
                        <text
                          y={3.9}
                          textAnchor="middle"
                          className="pointer-events-none fill-cream font-sans text-[11px] font-bold tabular-nums"
                        >
                          {numero.get(p.id)}
                        </text>
                      </g>
                    ) : (
                      <circle
                        r={isSel ? 6.5 : evid ? 5.5 : 4.5}
                        fill={isSel ? 'var(--color-rosso)' : 'var(--color-ink)'}
                        stroke="var(--color-cream)"
                        strokeWidth={2}
                        className="group-focus-visible:stroke-rosso group-focus-visible:stroke-[3px]"
                      />
                    )}
                    {(dest || isSel) && (
                      <text
                        data-etichetta=""
                        x={DX_ETICHETTA}
                        y={4.5}
                        className="pointer-events-none fill-ink font-sans text-[12px] font-semibold"
                        style={{ paintOrder: 'stroke', stroke: 'var(--color-cream)', strokeWidth: 4, strokeLinejoin: 'round' }}
                      >
                        {p.nome}
                      </text>
                    )}
                  </g>
                )
              })}
            </svg>

            <div className="pointer-events-none absolute left-3 top-3 flex flex-col items-center text-ink" aria-hidden>
              <svg width="18" height="26" viewBox="0 0 18 26">
                <path d="M9 1 L16 24 L9 19 L2 24 Z" fill="var(--color-cream)" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 1 L9 19 L2 24 Z" fill="var(--color-ink)" />
              </svg>
              <span className="mt-0.5 font-display text-[11px] font-bold leading-none">N</span>
            </div>
            <div className="absolute right-2 top-2 flex gap-2">
              {zoomato && (
                <button
                  type="button"
                  onClick={tutto}
                  className="min-h-10 rounded-none border-2 border-ink bg-cream px-3 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  Tutto il Paese
                </button>
              )}
            </div>
            <div className="pointer-events-none absolute bottom-2 left-2 flex flex-wrap gap-x-3 gap-y-1 bg-cream/85 px-2 py-1 text-[11px] text-stone">
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-flex size-4 items-center justify-center rounded-full bg-rosso text-[9px] font-bold text-cream shadow-[1px_1px_0_var(--color-ink)]" aria-hidden>
                  1
                </span>{' '}
                Destinazione
              </span>
              {nE > 0 && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block size-2 rounded-full bg-ink" aria-hidden /> Esperienza
                </span>
              )}
            </div>
          </div>
          <p className="mt-2 text-[11px] leading-snug text-stone/70">
            Contorni: Natural Earth. Luoghi:{' '}
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-rosso">
              © OpenStreetMap
            </a>{' '}
            contributors.
          </p>
        </div>

        <div className="border-t-2 border-ink pt-5" aria-live="polite">
          {sel ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rosso">{sel.kicker}</p>
              <h3 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-alpine text-balance">{sel.nome}</h3>
              <p className="mt-3 text-base leading-relaxed text-stone">{sel.testo}</p>
              <Link
                href={sel.href}
                className="mt-6 inline-flex items-center gap-2 rounded-none bg-alpine px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-alpine-dark"
              >
                {sel.tipo === 'destinazione' ? 'Apri la destinazione' : "Apri l'esperienza"}
                <ArrowRight size={15} aria-hidden />
              </Link>
              {legati.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone/60">
                    {sel.tipo === 'destinazione' ? 'Da fare qui' : 'Dove si trova'}
                  </p>
                  <ul className="mt-2 divide-y divide-alpine/10 border-y border-alpine/10">
                    {legati.map((q) => (
                      <li key={q.id}>
                        <button
                          type="button"
                          onClick={() => {
                            if (!visibile(q)) setFiltro('tutto')
                            scegli(q)
                          }}
                          className="flex w-full items-center justify-between gap-3 py-2.5 text-left text-sm font-medium text-ink hover:text-rosso"
                        >
                          {q.nome}
                          <ArrowRight size={14} className="shrink-0" aria-hidden />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button type="button" onClick={azzera} className="mt-6 text-sm text-stone underline underline-offset-2 hover:text-rosso">
                Torna a tutta la mappa
              </button>
            </div>
          ) : (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rosso">{nomePaese} sulla mappa</p>
              <p className="mt-3 text-base leading-relaxed text-stone">
                {nE > 0
                  ? "Tocca un punto rosso per una destinazione, uno scuro per un'esperienza: la mappa si avvicina e qui compare la scheda."
                  : 'Tocca un punto sulla mappa: si avvicina e qui compare la scheda della destinazione.'}
              </p>
              <ul className="mt-6 divide-y divide-alpine/10 border-y border-alpine/10">
                {punti
                  .filter((p) => visibile(p))
                  .slice(0, 12)
                  .map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => scegli(p)}
                        className="flex w-full items-center gap-3 py-2.5 text-left text-sm font-medium text-ink hover:text-rosso"
                      >
                        {p.tipo === 'destinazione' ? (
                          <span
                            aria-hidden
                            className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-rosso text-[10px] font-bold tabular-nums text-cream shadow-[1px_1px_0_var(--color-ink)]"
                          >
                            {numero.get(p.id)}
                          </span>
                        ) : (
                          <span aria-hidden className="mx-1.5 size-2 shrink-0 rounded-full bg-ink" />
                        )}
                        <span className="min-w-0 flex-1">{p.nome}</span>
                      </button>
                    </li>
                  ))}
              </ul>
              {punti.filter((p) => visibile(p)).length > 12 && (
                <p className="mt-2 text-xs text-stone/70">E altri {punti.filter((p) => visibile(p)).length - 12} punti sulla mappa.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
