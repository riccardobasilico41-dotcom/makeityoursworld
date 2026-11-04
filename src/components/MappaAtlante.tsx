'use client'

import Link from '@/components/ui/Link'
import { useCallback, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLingua } from '@/lib/i18n/LinguaProvider'
import type { Lingua } from '@/lib/i18n/config'
import type { DatiMappa, PuntoMappa } from './MappaPaese'

/**
 * Variante «da stampa antica» della mappa Paese (per ora solo il Perù, vedi ATLANTE in
 * MappaPaeseSezione): rilievo ombreggiato ritagliato sul Paese, mare inciso a onde,
 * Paesi vicini tratteggiati, fiumi e laghi, percorso del viaggio che si disegna quando
 * la mappa entra in vista, punti vicini raggruppati, etichette che non si sovrappongono,
 * scala e rosa dei venti. Stessa interazione di MappaPaese (zoom, scheda, filtri).
 */

export type TestoLingue = Record<Lingua, string>

export type DatiAtlante = {
  fonte: string
  /** tinta altimetrica + rilievo; null = tinta piatta (città-Stato, atolli) */
  rilievo: { src: string; srcHd?: string; x: number; y: number; w: number; h: number } | null
  /** `colore` = indice nella tavolozza delle velature: due vicini adiacenti non lo condividono */
  vicini: { id: string; colore: number; path: string }[]
  fiumi: { id: string; peso: number; path: string }[]
  laghi: { id: string; path: string }[]
  /** zone interne colorate come i vicini, sopra il Paese (es. i cinque distretti di New York) */
  interni?: { id: string; colore: number; path: string }[]
  /** ponti principali: segmenti a doppia linea */
  ponti?: { id: string; path: string }[]
  /** riga dei crediti al posto di quella standard (prima di «© OpenStreetMap contributors») */
  crediti?: TestoLingue
  /** distanza di raggruppamento in px (le città hanno i luoghi più fitti) */
  raggioGruppo?: number
  etichette: { id: string; tipo: 'paese' | 'mare' | 'fiume' | 'lago' | 'ponte'; x: number; y: number; ruota?: number; testo: TestoLingue }[]
}

/** Tappa del viaggio sulla mappa: id del punto-destinazione, numero d'ordine, posizione. */
export type TappaPercorso = { id: string; n: number; x: number; y: number }

const T = {
  it: {
    filtra: 'Filtra la mappa',
    tutto: 'Tutto',
    destinazioni: (n: number) => `Destinazioni · ${n}`,
    esperienze: (n: number) => `Esperienze · ${n}`,
    mappaDi: (nome: string) => `Mappa di ${nome} con il percorso del viaggio, destinazioni ed esperienze`,
    pinTappa: (n: number, nome: string) => `Tappa ${n}: ${nome}`,
    pinDestinazione: (nome: string) => `Destinazione fuori percorso: ${nome}`,
    pinEsperienza: (nome: string) => `Esperienza: ${nome}`,
    gruppo: (n: number, nomi: string) => `${n} luoghi vicini: ${nomi}. Avvicina la mappa`,
    tuttoPaese: 'Tutto il Paese',
    tappa: 'Tappa del viaggio',
    fuoriPercorso: 'Altra destinazione',
    esperienza: 'Esperienza',
    luoghiVicini: 'Luoghi vicini',
    percorso: 'Percorso, in ordine di tappa',
    fonti: 'Contorni e fiumi: Natural Earth. Rilievo: SRTM30_PLUS (UCSD/NOAA). Luoghi:',
    contributors: 'contributors.',
    apriDestinazione: 'Apri la destinazione',
    apriEsperienza: "Apri l'esperienza",
    daFareQui: 'Da fare qui',
    doveSiTrova: 'Dove si trova',
    tornaMappa: 'Torna a tutta la mappa',
    sullaMappa: (nome: string) => `${nome} sulla mappa`,
    tocca: 'La linea tratteggiata segue le tappe del viaggio, nell’ordine. Tocca un punto per avvicinarti e aprire la scheda; i cerchi scuri con un numero raccolgono luoghi vicini.',
    altri: (n: number) => (n === 1 ? 'E un altro punto sulla mappa.' : `E altri ${n} punti sulla mappa.`),
    kmScala: 'km',
  },
  en: {
    filtra: 'Filter the map',
    tutto: 'All',
    destinazioni: (n: number) => `Destinations · ${n}`,
    esperienze: (n: number) => `Experiences · ${n}`,
    mappaDi: (nome: string) => `Map of ${nome} with the trip route, destinations and experiences`,
    pinTappa: (n: number, nome: string) => `Stop ${n}: ${nome}`,
    pinDestinazione: (nome: string) => `Destination off the route: ${nome}`,
    pinEsperienza: (nome: string) => `Experience: ${nome}`,
    gruppo: (n: number, nomi: string) => `${n} places close together: ${nomi}. Zoom in`,
    tuttoPaese: 'Whole country',
    tappa: 'Trip stop',
    fuoriPercorso: 'Other destination',
    esperienza: 'Experience',
    luoghiVicini: 'Places close together',
    percorso: 'Route, stop by stop',
    fonti: 'Outlines and rivers: Natural Earth. Relief: SRTM30_PLUS (UCSD/NOAA). Places:',
    contributors: 'contributors.',
    apriDestinazione: 'Open the destination',
    apriEsperienza: 'Open the experience',
    daFareQui: 'To do here',
    doveSiTrova: 'Where it is',
    tornaMappa: 'Back to the full map',
    sullaMappa: (nome: string) => `${nome} on the map`,
    tocca: 'The dashed line follows the trip stops in order. Tap a point to zoom in and open its page; dark circles with a number gather places close together.',
    altri: (n: number) => (n === 1 ? 'And one more point on the map.' : `And ${n} more points on the map.`),
    kmScala: 'km',
  },
  es: {
    filtra: 'Filtrar el mapa',
    tutto: 'Todo',
    destinazioni: (n: number) => `Destinos · ${n}`,
    esperienze: (n: number) => `Experiencias · ${n}`,
    mappaDi: (nome: string) => `Mapa de ${nome} con la ruta del viaje, destinos y experiencias`,
    pinTappa: (n: number, nome: string) => `Etapa ${n}: ${nome}`,
    pinDestinazione: (nome: string) => `Destino fuera de la ruta: ${nome}`,
    pinEsperienza: (nome: string) => `Experiencia: ${nome}`,
    gruppo: (n: number, nomi: string) => `${n} lugares cercanos: ${nomi}. Acercar el mapa`,
    tuttoPaese: 'Todo el país',
    tappa: 'Etapa del viaje',
    fuoriPercorso: 'Otro destino',
    esperienza: 'Experiencia',
    luoghiVicini: 'Lugares cercanos',
    percorso: 'Ruta, etapa por etapa',
    fonti: 'Contornos y ríos: Natural Earth. Relieve: SRTM30_PLUS (UCSD/NOAA). Lugares:',
    contributors: 'contributors.',
    apriDestinazione: 'Abrir el destino',
    apriEsperienza: 'Abrir la experiencia',
    daFareQui: 'Qué hacer aquí',
    doveSiTrova: 'Dónde está',
    tornaMappa: 'Volver a todo el mapa',
    sullaMappa: (nome: string) => `${nome} en el mapa`,
    tocca: 'La línea discontinua sigue las etapas del viaje, en orden. Toca un punto para acercarte y abrir su ficha; los círculos oscuros con un número reúnen lugares cercanos.',
    altri: (n: number) => (n === 1 ? 'Y un punto más en el mapa.' : `Y ${n} puntos más en el mapa.`),
    kmScala: 'km',
  },
} satisfies Record<Lingua, Record<string, string | ((...a: never[]) => string)>>

type Filtro = 'tutto' | 'destinazione' | 'esperienza'
type VB = [number, number, number, number]
type Box = [number, number, number, number]

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const mercLat = (y: number) => (Math.atan(Math.exp((y * Math.PI) / 180)) * 360) / Math.PI - 90
const sovrapposti = (p: Box, q: Box) => !(p[2] < q[0] || p[0] > q[2] || p[3] < q[1] || p[1] > q[3])

// carta, inchiostro e acque «da stampa»
// acquerello: mare azzurro velato, più carico lungo le coste; Paesi vicini con una velatura ciascuno
const MARE = '#dce8ea'
const MARE_COSTA = '#cfe0e4'
const ONDE = '#7d9eab'
const ACQUA = '#3c6d8c' // fiumi e contorno dei laghi
const SCRITTA_ACQUA = '#2c5873' // ≥ 4.5:1 sull'alone panna
const RIGA = '#93b2bc'
const GRIGLIA = '#a9a08c'
const BORDO_VICINO = '#9e9789'
// tavolozza da vecchio atlante: [velatura, bordo più carico lungo il confine]
const VELATURE: [string, string][] = [
  ['#f0dedb', '#e3bdb6'], // rosa
  ['#f1e8c9', '#e2cf92'], // giallo paglia
  ['#e6e0ec', '#c9bcd8'], // lavanda
  ['#f2e1cc', '#e3c39b'], // pesca
  ['#dfe8dd', '#b9cdb4'], // verde salvia
  ['#ebe4d3', '#d3c4a3'], // sabbia
  ['#e3e4ec', '#c1c4d6'], // grigio-azzurro
]
const velatura = (i: number) => VELATURE[((i % VELATURE.length) + VELATURE.length) % VELATURE.length]
const TINTA_PIATTA = '#d3ddb4' // pianura, per i Paesi senza rilievo
const DX = 16 // distanza dell'etichetta dal centro del pin, px
const R_GRUPPO = 38 // sotto questa distanza (px) i luoghi si raggruppano

/** Unità di posizione: punti nello stesso posto (esperienza = sua destinazione) stanno insieme. */
type Luogo = { x: number; y: number; punti: PuntoMappa[]; prio: number }
type Gruppo = { x: number; y: number; luoghi: Luogo[] }

export function MappaAtlante({
  nomePaese,
  mappa,
  atlante,
  punti,
  tappe,
  percorso: sequenza,
  sogliaLuogo = 1.5,
  proiezione,
}: {
  nomePaese: string
  mappa: DatiMappa
  atlante: DatiAtlante
  punti: PuntoMappa[]
  tappe: TappaPercorso[]
  /** il viaggio nell'ordine vero dei giorni (le destinazioni possono ripetersi, es. i rientri a Lima) */
  percorso: { x: number; y: number }[]
  /** sotto questa distanza (unità mappa) due punti sono «lo stesso posto»: deve combaciare con il server */
  sogliaLuogo?: number
  proiezione: { y0: number; s: number; oy: number }
}) {
  const lingua = useLingua()
  const t = T[lingua]
  const uid = useId().replace(/:/g, '')
  const svgRef = useRef<SVGSVGElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const scalaRef = useRef<HTMLDivElement>(null)
  const vbRef = useRef<VB>([0, 0, mappa.w, mappa.h])
  const rafRef = useRef(0)
  const [filtro, setFiltro] = useState<Filtro>('tutto')
  const [selId, setSelId] = useState<string | null>(null)
  const [zoomato, setZoomato] = useState(false)
  /** unità mappa per pixel schermo della vista (di arrivo): decide i raggruppamenti */
  const [kVista, setKVista] = useState<number | null>(null)
  /** percorso: 'ssr' = già disegnato (niente JS / movimento ridotto), poi 'attesa' → 'visto' */
  const [fase, setFase] = useState<'ssr' | 'attesa' | 'visto'>('ssr')
  /** il rilievo dettagliato si carica solo dopo il primo zoom */
  const [dettaglio, setDettaglio] = useState(false)

  const sel = punti.find((p) => p.id === selId) ?? null
  const visibile = useCallback((p: PuntoMappa) => filtro === 'tutto' || p.tipo === filtro, [filtro])
  const raggio = atlante.raggioGruppo ?? R_GRUPPO
  const nTappa = useMemo(() => new Map(tappe.map((q) => [q.id, q.n])), [tappe])
  const nD = punti.filter((p) => p.tipo === 'destinazione').length
  const nE = punti.length - nD

  // ordine di priorità: tappe in ordine, poi le altre destinazioni, poi le esperienze
  const prio = useCallback(
    (p: PuntoMappa) => (nTappa.has(p.id) ? nTappa.get(p.id)! : p.tipo === 'destinazione' ? 100 : 200),
    [nTappa],
  )

  // luoghi: punti a meno di 1,5 unità l'uno dall'altro (il server li ha già sfalsati con dx/dy)
  const luoghi = useMemo(() => {
    const out: Luogo[] = []
    for (const p of [...punti].sort((a, b) => prio(a) - prio(b))) {
      const l = out.find((l) => Math.hypot(l.x - p.x, l.y - p.y) < sogliaLuogo)
      if (l) l.punti.push(p)
      else out.push({ x: p.x, y: p.y, punti: [p], prio: prio(p) })
    }
    return out
  }, [punti, prio, sogliaLuogo])

  // gruppi alla scala della vista: greedy dal luogo più importante; il luogo scelto resta fuori
  const gruppi = useMemo(() => {
    const out: Gruppo[] = []
    for (const l of luoghi) {
      if (!l.punti.some(visibile)) continue
      const libero = kVista === null || l.punti.some((p) => p.id === selId)
      const g = libero ? undefined : out.find((g) => g.luoghi.length && !g.luoghi[0].punti.some((p) => p.id === selId) && Math.hypot(g.x - l.x, g.y - l.y) / kVista! < raggio)
      if (g) g.luoghi.push(l)
      else out.push({ x: l.x, y: l.y, luoghi: [l] })
    }
    // seconda passata: due gruppi ancora troppo vicini (i loro cerchi si toccherebbero) si fondono
    if (kVista !== null) {
      for (let i = 0; i < out.length; i++) {
        for (let j = i + 1; j < out.length; j++) {
          const a = out[i], b = out[j]
          const fissi = [a, b].some((g) => g.luoghi.some((l) => l.punti.some((p) => p.id === selId)))
          if (fissi || Math.hypot(a.x - b.x, a.y - b.y) / kVista >= raggio) continue
          a.luoghi.push(...b.luoghi)
          out.splice(j, 1)
          j = i
        }
      }
    }
    return out
  }, [luoghi, kVista, selId, visibile, raggio])

  // percorso: ogni tratto è un arco morbido che piega sempre alla destra del verso di marcia,
  // così andata e ritorno sulla stessa tratta (Lima ⇄ Amazzonia) restano due archi distinti;
  // a metà di ogni arco una freccia nel verso del viaggio
  const { percorso, frecce } = useMemo(() => {
    const pts = sequenza.length > 1 ? sequenza : tappe
    if (pts.length < 2) return { percorso: '', frecce: [] as { x: number; y: number; a: number; len: number }[] }
    let d = `M${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`
    const frecce: { x: number; y: number; a: number; len: number }[] = []
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i]
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2
      const dx = b.x - a.x, dy = b.y - a.y
      const c = 0.2
      const cx = mx - dy * c, cy = my + dx * c
      d += `Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
      frecce.push({
        x: 0.25 * a.x + 0.5 * cx + 0.25 * b.x,
        y: 0.25 * a.y + 0.5 * cy + 0.25 * b.y,
        a: (Math.atan2(dy, dx) * 180) / Math.PI,
        len: Math.hypot(dx, dy),
      })
    }
    return { percorso: d, frecce }
  }, [sequenza, tappe])

  /** Applica il viewBox; elementi a misura fissa sullo schermo; etichette senza sovrapposizioni; scala. */
  const applica = useCallback(() => {
    const svg = svgRef.current
    if (!svg) return
    const vb = vbRef.current
    svg.setAttribute('viewBox', vb.map((n) => n.toFixed(2)).join(' '))
    const r = svg.getBoundingClientRect()
    if (!r.width) return
    const k = Math.max(vb[2] / r.width, vb[3] / r.height)
    const pxX = (x: number) => (x - vb[0]) / k, pxY = (y: number) => (y - vb[1]) / k

    const fissi = Array.from(svg.querySelectorAll<SVGGElement>('[data-fisso]'))
    const ostacoli: Box[] = []
    const pins: { g: SVGGElement; sx: number; sy: number }[] = []
    const statiche: { g: SVGGElement; sx: number; sy: number }[] = []
    for (const g of fissi) {
      const x = +g.dataset.x! + +(g.dataset.dx ?? 0) * k
      const y = +g.dataset.y! + +(g.dataset.dy ?? 0) * k
      g.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${k.toFixed(4)})`)
      const sx = pxX(x), sy = pxY(y)
      if (g.dataset.statica !== undefined) {
        statiche.push({ g, sx, sy })
        continue
      }
      if (g.dataset.len !== undefined) {
        // frecce del percorso: solo sui tratti abbastanza lunghi sullo schermo
        g.style.display = +g.dataset.len / k > 64 ? '' : 'none'
        continue
      }
      const raggio = +(g.dataset.raggio ?? 0)
      if (raggio) ostacoli.push([sx - raggio, sy - raggio, sx + raggio, sy + raggio])
      pins.push({ g, sx, sy })
    }

    // la scala grafica (in basso a sinistra) occupa un angolo: niente scritte lì sotto
    // e la rosa dei venti (in alto a sinistra)
    const presi: Box[] = [[0, r.height - 26, 130, r.height], [0, 0, 64, 72]]
    const libera = (b0: Box, proprio?: Box) => {
      const box: Box = [b0[0] - 3, b0[1] - 2, b0[2] + 3, b0[3] + 2] // un filo d'aria tra le scritte
      return box[0] >= 2 && box[2] <= r.width - 2 && box[1] >= 2 && box[3] <= r.height - 2 &&
      presi.every((q) => !sovrapposti(box, q)) &&
      ostacoli.every((q) => q === proprio || !sovrapposti(box, q))
    }
    const misura = (el: SVGGraphicsElement) => {
      if (!el.dataset.bw) {
        el.style.display = ''
        const b = el.getBBox()
        el.dataset.bw = String(b.width)
        el.dataset.bh = String(b.height)
      }
      return [+el.dataset.bw!, +el.dataset.bh!] as const
    }

    // etichette dei pin: prima il selezionato, poi per priorità; destra, sinistra, sopra, sotto
    pins.sort((a, b) => Number(b.g.dataset.sel === '1') - Number(a.g.dataset.sel === '1') || +a.g.dataset.prio! - +b.g.dataset.prio!)
    for (const { g, sx, sy } of pins) {
      const el = g.querySelector<SVGTextElement>('[data-etichetta]')
      if (!el) continue
      const [w] = misura(el)
      const h = 12
      const raggio = +(g.dataset.raggio ?? 0)
      const proprio = ostacoli.find((q) => q[0] === sx - raggio && q[1] === sy - raggio)
      const gruppo = g.dataset.gruppo !== undefined
      const D = gruppo ? 21 : DX // i gruppi hanno l'anello più largo
      // sopra e sotto: centrata, ma spostata quanto basta per restare dentro la mappa (senza staccarsi dal pin)
      const sposta = Math.max(Math.min(0, r.width - 4 - (sx + w / 2)), Math.max(0, 4 - (sx - w / 2)))
      const sp = Math.abs(sposta) <= w / 2 - 6 ? sposta : 0
      const destra = { box: [sx + D - 3, sy - h / 2, sx + D + w, sy + h / 2] as Box, x: D, y: 4, a: 'start' }
      const sinistra = { box: [sx - D - w, sy - h / 2, sx - D + 3, sy + h / 2] as Box, x: -D, y: 4, a: 'end' }
      const sopra = { box: [sx + sp - w / 2, sy - D - h, sx + sp + w / 2, sy - D + 1] as Box, x: sp, y: -D - 2, a: 'middle' }
      const sotto = { box: [sx + sp - w / 2, sy + D - 1, sx + sp + w / 2, sy + D + h] as Box, x: sp, y: D + 9, a: 'middle' }
      const cand = gruppo ? [destra, sotto, sopra, sinistra] : [destra, sinistra, sopra, sotto]
      const dentro = sx > -20 && sx < r.width + 20 && sy > -20 && sy < r.height + 20
      let c = dentro ? cand.find((c) => libera(c.box, proprio)) : undefined
      if (!c && dentro && g.dataset.sel === '1') c = cand.find((c) => c.box[0] >= 2 && c.box[2] <= r.width - 2) ?? cand[0]
      el.style.display = c ? '' : 'none'
      if (!c) continue
      el.setAttribute('x', String(c.x))
      el.setAttribute('y', String(c.y))
      el.setAttribute('text-anchor', c.a)
      presi.push(c.box)
    }
    // poi le scritte dell'atlante (Paesi, mare, fiumi): solo dove c'è posto
    for (const { g, sx, sy } of statiche) {
      const corpo = g.firstElementChild as SVGGElement
      const [w, h] = misura(corpo)
      const box: Box = [sx - w / 2, sy - h / 2, sx + w / 2, sy + h / 2]
      const ok = libera(box)
      corpo.style.display = ok ? '' : 'none'
      if (ok) presi.push(box)
    }

    // il rilievo (~1 km per pixel) da molto vicino si sgrana: sfuma un poco nelle ultime fasi dello zoom
    const op = (0.62 + 0.36 * Math.min(1, Math.max(0, (k - 0.05) / 0.3))).toFixed(2)
    svg.querySelectorAll<SVGImageElement>('[data-rilievo]').forEach((im) => im.setAttribute('opacity', op))

    // scala grafica alla latitudine del centro della vista
    const bar = scalaRef.current
    if (bar) {
      const lat = mercLat(proiezione.y0 - (vb[1] + vb[3] / 2 - proiezione.oy) / proiezione.s)
      const kmPx = ((111.32 * Math.cos((lat * Math.PI) / 180)) / proiezione.s) * k
      const passi = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000]
      const km = passi.find((p) => p / kmPx >= 70) ?? 1000
      const w = km / kmPx
      bar.style.width = `${w.toFixed(1)}px`
      const fine = bar.querySelector<HTMLElement>('[data-fine]')
      const meta = bar.querySelector<HTMLElement>('[data-meta]')
      if (fine) fine.textContent = `${km} ${t.kmScala}`
      if (meta) meta.textContent = String(km / 2)
    }
  }, [proiezione, t.kmScala])

  useEffect(() => {
    if (kVista !== null && kVista < 0.75 * (mappa.w / 1000)) setDettaglio(true)
  }, [kVista, mappa.w])

  const kDi = useCallback((vb: VB) => {
    const r = svgRef.current?.getBoundingClientRect()
    return r && r.width ? Math.max(vb[2] / r.width, vb[3] / r.height) : null
  }, [])

  const animaA = useCallback(
    (to: VB) => {
      cancelAnimationFrame(rafRef.current)
      setKVista(kDi(to))
      const riduci = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (riduci) {
        vbRef.current = to
        applica()
        return
      }
      const from = vbRef.current.slice() as VB
      const t0 = performance.now()
      const step = (now: number) => {
        const tt = Math.min(1, (now - t0) / 850)
        const e = ease(tt)
        vbRef.current = from.map((v, i) => v + (to[i] - v) * e) as VB
        applica()
        if (tt < 1) rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    },
    [applica, kDi],
  )

  const tutto = useCallback(() => {
    setZoomato(false)
    animaA([0, 0, mappa.w, mappa.h])
  }, [animaA, mappa.w, mappa.h])

  /** Inquadra un insieme di posizioni con una larghezza minima, nel rapporto della mappa. */
  const inquadra = useCallback(
    (xs: number[], ys: number[], minimo: number) => {
      const rapp = mappa.h / mappa.w
      let w = Math.max(minimo, (Math.max(...xs) - Math.min(...xs)) * 1.6, ((Math.max(...ys) - Math.min(...ys)) * 1.6) / rapp)
      w = Math.min(w, mappa.w)
      const h = w * rapp
      const cx = (Math.max(...xs) + Math.min(...xs)) / 2, cy = (Math.max(...ys) + Math.min(...ys)) / 2
      const x = Math.min(Math.max(cx - w / 2, 0), mappa.w - w)
      const y = Math.min(Math.max(cy - h / 2, 0), mappa.h - h)
      setZoomato(w < mappa.w)
      animaA([x, y, w, h])
    },
    [animaA, mappa.w, mappa.h],
  )

  const zoomSu = useCallback(
    (p: PuntoMappa) => {
      const legati = punti.filter((q) => p.legati.includes(q.id))
      const vicino = Math.min(...punti.filter((q) => q.id !== p.id && !p.legati.includes(q.id)).map((q) => Math.hypot(q.x - p.x, q.y - p.y)), Infinity)
      const minimo = Math.min(mappa.w / 2.4, Math.max(mappa.w / 40, vicino * 8))
      inquadra([p.x, ...legati.map((q) => q.x)], [p.y, ...legati.map((q) => q.y)], minimo)
    },
    [inquadra, mappa.w, punti],
  )

  /** Apre un gruppo: zoom finché i luoghi si separano (distanza minima ≥ R_GRUPPO + margine). */
  const apriGruppo = useCallback(
    (g: Gruppo) => {
      const r = svgRef.current?.getBoundingClientRect()
      let dmin = Infinity
      for (const a of g.luoghi) for (const b of g.luoghi) if (a !== b) dmin = Math.min(dmin, Math.hypot(a.x - b.x, a.y - b.y))
      const wSep = r && r.width ? (dmin / (raggio * 1.6)) * Math.max(r.width, r.height * (mappa.w / mappa.h)) : mappa.w / 6
      inquadra(g.luoghi.map((l) => l.x), g.luoghi.map((l) => l.y), Math.max(mappa.w / 30, Math.min(wSep, mappa.w / 2.4)))
    },
    [inquadra, mappa.w, mappa.h, raggio],
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

  useEffect(() => {
    applica()
  })
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const ro = new ResizeObserver(() => {
      setKVista(kDi(vbRef.current))
      applica()
    })
    ro.observe(svg)
    // i caratteri arrivano dopo: rimisura le etichette
    document.fonts?.ready.then(() => {
      svg.querySelectorAll<SVGGraphicsElement>('[data-bw]').forEach((el) => delete el.dataset.bw)
      applica()
    })
    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [applica, kDi])

  // il percorso si disegna quando la mappa entra in vista (non con il movimento ridotto)
  useEffect(() => {
    const box = boxRef.current
    if (!box || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return
    setFase('attesa')
    const io = new IntersectionObserver(
      (voci) => {
        if (voci.some((v) => v.isIntersecting)) {
          // un frame dopo, così la transizione parte da «nascosto»
          requestAnimationFrame(() => setFase('visto'))
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(box)
    return () => io.disconnect()
  }, [])

  const cambiaFiltro = (f: Filtro) => {
    setFiltro(f)
    if (sel && f !== 'tutto' && sel.tipo !== f) azzera()
  }

  const tasto = (e: KeyboardEvent, azione: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      azione()
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
  const elenco = useMemo(() => [...punti].sort((a, b) => prio(a) - prio(b)), [punti, prio])
  const scala0 = (mappa.w / 700).toFixed(4)
  const stileEtichetta = { paintOrder: 'stroke', stroke: 'var(--color-cream)', strokeWidth: 3.5, strokeLinejoin: 'round' } as const
  const P = (s: string) => `${uid}-${s}`

  const pin = (p: PuntoMappa, dx: number, dy: number) => {
    const on = visibile(p)
    const isSel = p.id === selId
    const evid = sel ? sel.legati.includes(p.id) : false
    const dest = p.tipo === 'destinazione'
    const n = nTappa.get(p.id)
    return (
      <g
        key={p.id}
        data-fisso=""
        data-x={p.x}
        data-y={p.y}
        data-dx={dx}
        data-dy={dy}
        data-raggio={on ? (dest ? 11 : 6) : 0}
        data-prio={isSel ? -1 : prio(p)}
        data-sel={isSel ? '1' : '0'}
        transform={`translate(${p.x} ${p.y}) scale(${scala0})`}
        role="button"
        tabIndex={on ? 0 : -1}
        aria-hidden={on ? undefined : true}
        aria-pressed={isSel}
        aria-label={dest ? (n ? t.pinTappa(n, p.nome) : t.pinDestinazione(p.nome)) : t.pinEsperienza(p.nome)}
        onClick={() => on && scegli(p)}
        onKeyDown={(e) => tasto(e, () => scegli(p))}
        className={`group cursor-pointer outline-none transition-opacity duration-300 ${on ? '' : 'pointer-events-none opacity-15'}`}
      >
        <circle r={18} fill="transparent" />
        {isSel && (
          <circle r={dest ? 15 : 10} fill="none" stroke="var(--color-rosso)" strokeWidth={2} className="origin-center [transform-box:fill-box] motion-safe:animate-ping" />
        )}
        {dest ? (
          <g className="origin-center transition-transform duration-200 [transform-box:fill-box] group-hover:scale-110">
            <circle cx={1.6} cy={1.6} r={n ? 10 : 7} fill="var(--color-ink)" />
            <circle
              r={n ? 10 : 7}
              fill={isSel ? 'var(--color-ink)' : n ? 'var(--color-rosso)' : 'var(--color-cream)'}
              stroke={n || isSel ? 'var(--color-cream)' : 'var(--color-rosso)'}
              strokeWidth={n ? 1.8 : 2.4}
              className="group-focus-visible:stroke-[4px]"
            />
            {n && (
              <text y={3.9} textAnchor="middle" className="pointer-events-none fill-cream font-sans text-[11px] font-bold tabular-nums">
                {n}
              </text>
            )}
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
            x={DX}
            y={4}
            className="pointer-events-none fill-ink font-display text-[10.5px] font-semibold uppercase tracking-[0.12em]"
            style={stileEtichetta}
          >
            {p.nome}
          </text>
        )}
      </g>
    )
  }

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center gap-2" role="toolbar" aria-label={t.filtra}>
        {chip('tutto', t.tutto)}
        {nD > 0 && chip('destinazione', t.destinazioni(nD))}
        {nE > 0 && chip('esperienza', t.esperienze(nE))}
      </div>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[7fr_5fr] lg:gap-10">
        <div>
          <div
            ref={boxRef}
            className="relative overflow-hidden border-2 border-ink shadow-[5px_5px_0_var(--color-ink)]"
            style={{ touchAction: 'pan-y', backgroundColor: MARE }}
          >
            <svg
              ref={svgRef}
              viewBox={mappa.viewBox}
              className="block h-auto max-h-[78vh] w-full"
              role="group"
              aria-label={t.mappaDi(nomePaese)}
              onKeyDown={(e) => e.key === 'Escape' && azzera()}
            >
              <defs>
                {/* onde incise del mare: due file sfalsate di trattini ondulati */}
                <pattern id={P('onde')} width={34} height={18} patternUnits="userSpaceOnUse">
                  <g fill="none" stroke={ONDE} strokeWidth={0.9} strokeLinecap="round" opacity={0.7}>
                    <path d="M2 5q3-2.6 6 0t6 0" />
                    <path d="M19 14q3-2.6 6 0t6 0" />
                  </g>
                </pattern>
                {/* tratteggio leggero dei Paesi vicini */}
                <pattern id={P('tratteggio')} width={7} height={7} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <path d="M0 0V7" stroke="#8f887a" strokeWidth={0.7} opacity={0.35} />
                </pattern>
                {atlante.vicini.map((v) => (
                  <clipPath key={v.id} id={P(`c-${v.id}`)}>
                    <path d={v.path} />
                  </clipPath>
                ))}
                {atlante.interni?.map((v) => (
                  <clipPath key={v.id} id={P(`ci-${v.id}`)}>
                    <path d={v.path} />
                  </clipPath>
                ))}
                <clipPath id={P('paese')}>
                  <path d={mappa.path} />
                </clipPath>
                <mask id={P('traccia')} maskUnits="userSpaceOnUse" x={0} y={0} width={mappa.w} height={mappa.h}>
                  <path
                    d={percorso}
                    fill="none"
                    stroke="#fff"
                    strokeWidth={30}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength={1}
                    strokeDasharray="1 1"
                    style={{
                      strokeDashoffset: fase === 'attesa' ? 1 : 0,
                      transition: fase === 'visto' ? 'stroke-dashoffset 2.6s cubic-bezier(0.65, 0, 0.35, 1) 0.2s' : 'none',
                    }}
                  />
                </mask>
              </defs>

              {/* mare: azzurro acquerello con le onde incise */}
              <rect width={mappa.w} height={mappa.h} fill={MARE} />
              <rect width={mappa.w} height={mappa.h} fill={`url(#${P('onde')})`} />
              {/* lungo le coste l'acquerello si carica e le righe d'acqua coprono le onde */}
              <g fill="none" strokeLinejoin="round">
                {[64, 40].map((w, i) => (
                  <g key={w} opacity={i ? 1 : 0.7}>
                    <path d={mappa.path} stroke={MARE_COSTA} strokeWidth={w} vectorEffect="non-scaling-stroke" />
                    {atlante.vicini.map((v) => (
                      <path key={v.id} d={v.path} stroke={MARE_COSTA} strokeWidth={w} vectorEffect="non-scaling-stroke" />
                    ))}
                  </g>
                ))}
                {[30, 20, 11].map((w) => (
                  <g key={w}>
                    <path d={mappa.path} stroke={RIGA} strokeWidth={w} vectorEffect="non-scaling-stroke" />
                    {atlante.vicini.map((v) => (
                      <path key={v.id} d={v.path} stroke={RIGA} strokeWidth={w} vectorEffect="non-scaling-stroke" />
                    ))}
                    <path d={mappa.path} stroke={MARE_COSTA} strokeWidth={w - 1.6} vectorEffect="non-scaling-stroke" />
                    {atlante.vicini.map((v) => (
                      <path key={v.id} d={v.path} stroke={MARE_COSTA} strokeWidth={w - 1.6} vectorEffect="non-scaling-stroke" />
                    ))}
                  </g>
                ))}
              </g>

              {/* Paesi vicini: una velatura tenue ciascuno, più carica lungo il confine (come i vecchi atlanti) */}
              <g>
                {atlante.vicini.map((v) => {
                  const [velo, bordo] = velatura(v.colore)
                  return (
                    <g key={v.id}>
                      <path d={v.path} fill={velo} stroke={velo} strokeWidth={2} vectorEffect="non-scaling-stroke" />
                      <path d={v.path} fill="none" stroke={bordo} strokeWidth={9} opacity={0.8} clipPath={`url(#${P(`c-${v.id}`)})`} vectorEffect="non-scaling-stroke" />
                      <path d={v.path} fill={`url(#${P('tratteggio')})`} stroke={BORDO_VICINO} strokeWidth={0.9} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                    </g>
                  )
                })}
              </g>

              {/* il Paese: inchiostro sotto, carta, rilievo ritagliato sulla forma */}
              <path d={mappa.path} fill="none" stroke="var(--color-ink)" strokeWidth={2.6} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <path d={mappa.path} fill="var(--color-cream)" />
              {atlante.rilievo ? (
                <image
                  href={atlante.rilievo.src}
                  x={atlante.rilievo.x}
                  y={atlante.rilievo.y}
                  width={atlante.rilievo.w}
                  height={atlante.rilievo.h}
                  preserveAspectRatio="none"
                  clipPath={`url(#${P('paese')})`}
                  data-rilievo=""
                  opacity={0.98}
                />
              ) : (
                <path d={mappa.path} fill={TINTA_PIATTA} opacity={0.9} />
              )}
              {dettaglio && atlante.rilievo?.srcHd && (
                <image
                  href={atlante.rilievo.srcHd}
                  x={atlante.rilievo.x}
                  y={atlante.rilievo.y}
                  width={atlante.rilievo.w}
                  height={atlante.rilievo.h}
                  preserveAspectRatio="none"
                  clipPath={`url(#${P('paese')})`}
                  data-rilievo=""
                  opacity={0.98}
                />
              )}
              {/* contorno a inchiostro anche sopra la tinta, sottile */}
              <path d={mappa.path} fill="none" stroke="var(--color-ink)" strokeWidth={0.8} strokeLinejoin="round" opacity={0.7} vectorEffect="non-scaling-stroke" />
              {/* zone interne (distretti): velatura più viva dei vicini, bordo carico lungo il confine */}
              {atlante.interni?.map((v) => {
                const [velo, bordo] = velatura(v.colore)
                return (
                  <g key={v.id}>
                    <path d={v.path} fill={velo} />
                    <path d={v.path} fill="none" stroke={bordo} strokeWidth={8} clipPath={`url(#${P(`ci-${v.id}`)})`} vectorEffect="non-scaling-stroke" />
                    <path d={v.path} fill="none" stroke="var(--color-ink)" strokeWidth={0.7} strokeDasharray="4 2 1 2" opacity={0.75} vectorEffect="non-scaling-stroke" />
                  </g>
                )
              })}
              {/* ponti principali: doppia linea incisa */}
              {atlante.ponti?.map((b) => (
                <g key={b.id} strokeLinecap="round">
                  <path d={b.path} fill="none" stroke="var(--color-ink)" strokeWidth={3.4} vectorEffect="non-scaling-stroke" />
                  <path d={b.path} fill="none" stroke="var(--color-cream)" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
                </g>
              ))}

              {/* acque interne */}
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                {atlante.fiumi.map((f) => (
                  <path key={f.id} d={f.path} stroke={ACQUA} strokeWidth={f.peso === 3 ? 2.1 : f.peso === 2 ? 1.5 : 1} opacity={0.9} vectorEffect="non-scaling-stroke" />
                ))}
              </g>
              {atlante.laghi.map((l) => (
                <g key={l.id}>
                  <path d={l.path} fill={MARE} />
                  <path d={l.path} fill={`url(#${P('onde')})`} stroke={ACQUA} strokeWidth={1} vectorEffect="non-scaling-stroke" />
                </g>
              ))}

              {mappa.graticola && (
                <path d={mappa.graticola} fill="none" stroke={GRIGLIA} strokeWidth={0.8} strokeDasharray="1 4" opacity={0.8} vectorEffect="non-scaling-stroke" />
              )}

              {/* percorso del viaggio: tratteggio rosso, rivelato da una maschera che si «disegna» */}
              {percorso && (
                <g mask={`url(#${P('traccia')})`}>
                  <path d={percorso} fill="none" stroke="var(--color-cream)" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={0.85} vectorEffect="non-scaling-stroke" />
                  <path d={percorso} fill="none" stroke="var(--color-rosso)" strokeWidth={2.2} strokeDasharray="7 5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  {frecce.map((f, i) => (
                    <g key={i} data-fisso="" data-x={f.x} data-y={f.y} data-len={f.len} transform={`translate(${f.x} ${f.y}) scale(${scala0})`} aria-hidden>
                      <path d="M-4.5 -4 L4.5 0 L-4.5 4 L-2.6 0 Z" transform={`rotate(${f.a.toFixed(1)})`} fill="var(--color-rosso)" stroke="var(--color-cream)" strokeWidth={1} strokeLinejoin="round" />
                    </g>
                  ))}
                </g>
              )}

              {/* scritte dell'atlante, a misura fissa: le nasconde chi non trova posto */}
              {atlante.etichette.map((e) => {
                const righe = (e.testo[lingua] ?? e.testo.it).split('\n')
                const acqua = e.tipo === 'fiume' || e.tipo === 'lago'
                const zona = [...atlante.vicini, ...(atlante.interni ?? [])].find((v) => v.id === e.id)
                return (
                  <g key={e.id} data-fisso="" data-statica="" data-x={e.x} data-y={e.y} transform={`translate(${e.x} ${e.y}) scale(${scala0})`} aria-hidden className="pointer-events-none">
                    <g>
                      <text
                        transform={e.ruota ? `rotate(${e.ruota})` : undefined}
                        textAnchor="middle"
                        className={
                          e.tipo === 'mare'
                            ? 'font-display text-[11px] font-medium uppercase tracking-[0.42em]'
                            : acqua
                              ? 'font-sans text-[10px] italic tracking-[0.12em]'
                              : e.tipo === 'ponte'
                                ? 'fill-ink font-sans text-[8.5px] italic tracking-[0.06em]'
                                : 'fill-stone font-display text-[10.5px] font-semibold uppercase tracking-[0.3em]'
                        }
                        fill={acqua || e.tipo === 'mare' ? SCRITTA_ACQUA : undefined}
                        style={e.tipo === 'mare' ? undefined : { paintOrder: 'stroke', stroke: acqua || e.tipo === 'ponte' || !zona ? 'var(--color-cream)' : velatura(zona.colore)[0], strokeWidth: 3, strokeLinejoin: 'round' }}
                      >
                        {righe.map((riga, i) => (
                          <tspan key={i} x={0} dy={i === 0 ? `${(-(righe.length - 1) * 0.65 + 0.35).toFixed(2)}em` : '1.3em'}>
                            {riga}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  </g>
                )
              })}

              {/* pin e gruppi */}
              {[...gruppi].reverse().map((g) => {
                const membri = g.luoghi.flatMap((l) => l.punti).filter(visibile)
                if (g.luoghi.length === 1) return g.luoghi[0].punti.map((p) => pin(p, p.dx, p.dy))
                const capo = membri[0]
                const chiave = `g:${membri.map((p) => p.id).join(',')}`
                return (
                  <g
                    key={chiave}
                    data-fisso=""
                    data-x={g.x}
                    data-y={g.y}
                    data-raggio={13}
                    data-gruppo=""
                    data-prio={capo ? prio(capo) : 300}
                    data-sel="0"
                    transform={`translate(${g.x} ${g.y}) scale(${scala0})`}
                    role="button"
                    tabIndex={0}
                    aria-label={t.gruppo(membri.length, membri.map((p) => p.nome).join(', '))}
                    onClick={() => apriGruppo(g)}
                    onKeyDown={(e) => tasto(e, () => apriGruppo(g))}
                    className="group cursor-pointer outline-none"
                  >
                    <circle r={20} fill="transparent" />
                    <g className="origin-center transition-transform duration-200 [transform-box:fill-box] group-hover:scale-110">
                      <circle cx={1.8} cy={1.8} r={12.5} fill="var(--color-rosso)" />
                      <circle r={12.5} fill="var(--color-ink)" stroke="var(--color-cream)" strokeWidth={1.8} className="group-focus-visible:stroke-rosso group-focus-visible:stroke-[4px]" />
                      <circle r={16} fill="none" stroke="var(--color-ink)" strokeWidth={1} strokeDasharray="2 2.4" />
                      <text y={4.2} textAnchor="middle" className="pointer-events-none fill-cream font-sans text-[12px] font-bold tabular-nums">
                        {membri.length}
                      </text>
                    </g>
                    <text data-etichetta="" x={DX} y={4} className="pointer-events-none fill-ink font-display text-[10.5px] font-semibold uppercase tracking-[0.12em]" style={stileEtichetta}>
                      {capo ? `${capo.nome} +${membri.length - 1}` : ''}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* rosa dei venti */}
            <div className="pointer-events-none absolute left-2 top-2 text-ink sm:left-3 sm:top-3" aria-hidden>
              <svg width="54" height="62" viewBox="-27 -35 54 62" className="block">
                <circle r={17} fill="var(--color-cream)" fillOpacity={0.75} stroke="var(--color-ink)" strokeWidth={0.8} />
                <circle r={13.5} fill="none" stroke="var(--color-ink)" strokeWidth={0.5} strokeDasharray="1 1.6" />
                {/* punte intercardinali */}
                {[45, 135, 225, 315].map((a) => (
                  <g key={a} transform={`rotate(${a})`}>
                    <path d="M0 -14 L3 0 L0 0 Z" fill="var(--color-ink)" />
                    <path d="M0 -14 L-3 0 L0 0 Z" fill="var(--color-cream)" stroke="var(--color-ink)" strokeWidth={0.5} />
                  </g>
                ))}
                {/* punte cardinali */}
                {[0, 90, 180, 270].map((a) => (
                  <g key={a} transform={`rotate(${a})`}>
                    <path d="M0 -24 L4.2 0 L0 0 Z" fill={a === 0 ? 'var(--color-rosso)' : 'var(--color-ink)'} />
                    <path d="M0 -24 L-4.2 0 L0 0 Z" fill="var(--color-cream)" stroke={a === 0 ? 'var(--color-rosso)' : 'var(--color-ink)'} strokeWidth={0.6} />
                  </g>
                ))}
                <circle r={1.6} fill="var(--color-ink)" />
                <text y={-26.5} textAnchor="middle" className="fill-ink font-display text-[9px] font-bold">
                  N
                </text>
              </svg>
            </div>

            <div className="absolute right-2 top-2 flex gap-2">
              {zoomato && (
                <button
                  type="button"
                  onClick={tutto}
                  className="min-h-10 rounded-none border-2 border-ink bg-cream px-3 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  {t.tuttoPaese}
                </button>
              )}
            </div>

            {/* scala grafica a scacchi, aggiornata a ogni zoom */}
            <div className="pointer-events-none absolute bottom-2 left-3 text-ink" aria-hidden>
              <div ref={scalaRef} className="relative" style={{ width: 80 }}>
                <div className="flex h-[5px] border border-ink">
                  <span className="flex-1 bg-ink" />
                  <span className="flex-1 bg-cream" />
                </div>
                <div className="mt-0.5 flex justify-between font-display text-[9px] font-semibold uppercase leading-none tracking-wider">
                  <span>0</span>
                  <span data-meta="" className="-translate-x-1/2 pl-1">
                    50
                  </span>
                  <span data-fine="" className="translate-x-1/3">
                    100 {t.kmScala}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* legenda sotto la mappa, così sul telefono non copre nulla */}
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-stone">
            <li className="inline-flex items-center gap-1.5">
              <span className="inline-flex size-4 items-center justify-center rounded-full bg-rosso text-[9px] font-bold text-cream shadow-[1px_1px_0_var(--color-ink)]" aria-hidden>
                1
              </span>
              {t.tappa}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <svg width="28" height="8" aria-hidden>
                <path d="M1 4H27" stroke="var(--color-rosso)" strokeWidth="2.2" strokeDasharray="6 4" strokeLinecap="round" />
              </svg>
              {t.percorso}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="inline-block size-3 rounded-full border-2 border-rosso bg-cream" aria-hidden />
              {t.fuoriPercorso}
            </li>
            {nE > 0 && (
              <li className="inline-flex items-center gap-1.5">
                <span className="inline-block size-2 rounded-full bg-ink" aria-hidden />
                {t.esperienza}
              </li>
            )}
            <li className="inline-flex items-center gap-1.5">
              <span className="inline-flex size-4 items-center justify-center rounded-full bg-ink text-[9px] font-bold text-cream shadow-[1px_1px_0_var(--color-rosso)]" aria-hidden>
                3
              </span>
              {t.luoghiVicini}
            </li>
          </ul>
          <p className="mt-2 text-[11px] leading-snug text-stone/85">
            {atlante.crediti?.[lingua] ?? t.fonti}{' '}
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-rosso">
              © OpenStreetMap
            </a>{' '}
            {t.contributors}
          </p>
        </div>

        <div className="border-t-2 border-ink pt-5" aria-live="polite">
          {sel ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rosso">
                {nTappa.has(sel.id) ? `${t.tappa} ${nTappa.get(sel.id)} · ` : ''}
                {sel.kicker}
              </p>
              <h3 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-alpine text-balance">{sel.nome}</h3>
              <p className="mt-3 text-base leading-relaxed text-stone">{sel.testo}</p>
              <Link
                href={sel.href}
                className="mt-6 inline-flex items-center gap-2 rounded-none bg-alpine px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-alpine-dark"
              >
                {sel.tipo === 'destinazione' ? t.apriDestinazione : t.apriEsperienza}
                <ArrowRight size={15} aria-hidden />
              </Link>
              {legati.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone/85">{sel.tipo === 'destinazione' ? t.daFareQui : t.doveSiTrova}</p>
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
                {t.tornaMappa}
              </button>
            </div>
          ) : (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rosso">{t.sullaMappa(nomePaese)}</p>
              <p className="mt-3 text-base leading-relaxed text-stone">{t.tocca}</p>
              <ul className="mt-6 divide-y divide-alpine/10 border-y border-alpine/10">
                {elenco
                  .filter((p) => visibile(p))
                  .slice(0, 12)
                  .map((p) => {
                    const n = nTappa.get(p.id)
                    return (
                      <li key={p.id}>
                        <button type="button" onClick={() => scegli(p)} className="flex w-full items-center gap-3 py-2.5 text-left text-sm font-medium text-ink hover:text-rosso">
                          {n ? (
                            <span aria-hidden className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-rosso text-[10px] font-bold tabular-nums text-cream shadow-[1px_1px_0_var(--color-ink)]">
                              {n}
                            </span>
                          ) : p.tipo === 'destinazione' ? (
                            <span aria-hidden className="mx-1 size-3 shrink-0 rounded-full border-2 border-rosso bg-cream" />
                          ) : (
                            <span aria-hidden className="mx-1.5 size-2 shrink-0 rounded-full bg-ink" />
                          )}
                          <span className="min-w-0 flex-1">{p.nome}</span>
                        </button>
                      </li>
                    )
                  })}
              </ul>
              {punti.filter((p) => visibile(p)).length > 12 && <p className="mt-2 text-xs text-stone/85">{t.altri(punti.filter((p) => visibile(p)).length - 12)}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
