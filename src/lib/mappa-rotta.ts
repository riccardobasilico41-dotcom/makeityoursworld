import fs from 'node:fs'
import path from 'node:path'
import { coordinateDestinazioni } from '@/content/mappe/coordinate'
import { getDestinazione, getPaese, getTripMeta } from '@/lib/geo'
import { conPaesiDelleDestinazioni, paesiDelViaggio } from '@/lib/viaggi-filtri'
import { linkDestinazione } from '@/lib/link-destinazione'
import { PREFISSO_TAPPA } from '@/lib/riepilogo-viaggio'
import { graticola, unaRiga } from '@/components/MappaPaeseSezione'
import type { DatiMappa, PuntoMappa } from '@/components/MappaPaese'
import type { DatiAtlante, TappaPercorso } from '@/components/MappaAtlante'
import type { Lingua } from '@/lib/i18n/config'

/*
 * Dati della mappa «La rotta» della pagina viaggio: la stessa mappa da atlante delle pagine
 * Paese (MappaAtlante), con solo le tappe del viaggio, numerate nell'ordine di `tappeMappa`.
 *
 * - Un Paese, tappe tutte dentro la sua mappa: i file del Paese così come sono.
 * - Più Paesi (o tappe fuori dalla mappa del Paese): una Mercatore comune sul riquadro delle
 *   tappe. Le mappe dei Paesi sono già Mercatore, quindi passare dall'una all'altra è solo
 *   scala + traslazione: contorni, fiumi, laghi e rilievi si riportano senza perdere
 *   dettaglio. Attorno, le terre di Natural Earth a bassa risoluzione (mondo.json) al posto dei
 *   vicini degli atlanti (tagliati sul riquadro del loro Paese).
 *
 * Calcolato al build e servito come JSON da /[lang]/rotte/[slug] (il client lo scarica solo
 * quando la mappa si avvicina allo schermo).
 */

type Proiezione = { tipo: 'mercatore'; lng0: number; y0: number; s: number; ox: number; oy: number }
type FileMappa = { viewBox: string; w: number; h: number; path: string; proiezione: Proiezione }

export type DatiRotta = {
  nomePaese: string
  mappa: DatiMappa
  atlante: DatiAtlante
  punti: PuntoMappa[]
  tappe: TappaPercorso[]
  percorso: { x: number; y: number }[]
  sogliaLuogo: number
  proiezione: { y0: number; s: number; oy: number }
  /** per ogni voce di `tappeMappa`, l'id del suo punto (null = tappa senza coordinate) */
  puntoDiTappa: (string | null)[]
  /** riquadro [x, y, w, h] che contiene tutte le tappe, per la mappa compatta (con un solo punto: quasi tutto il Paese) */
  riquadro: [number, number, number, number]
}

const DIR = path.join(process.cwd(), 'src/content/mappe')

function leggi<T>(nome: string): T | null {
  if (!/^[a-z-]+$/.test(nome.replace(/-atlante$/, ''))) return null
  const file = path.join(DIR, `${nome}.json`)
  return fs.existsSync(file) ? (JSON.parse(fs.readFileSync(file, 'utf8')) as T) : null
}

const mercY = (lat: number) => (Math.log(Math.tan(Math.PI / 4 + (Math.max(-85, Math.min(85, lat)) * Math.PI) / 360)) * 180) / Math.PI
const mercLat = (y: number) => (Math.atan(Math.exp((y * Math.PI) / 180)) * 360) / Math.PI - 90
const r1 = (n: number) => Math.round(n * 10) / 10

/** Scala + traslazione su tutte le coppie di numeri di un path fatto di soli M, coppie implicite e Z. */
function trasforma(d: string, a: number, bx: number, by: number): string {
  if (a === 1 && bx === 0 && by === 0) return d
  return d.replace(/(-?\d*\.?\d+(?:e-?\d+)?)[\s,]+(-?\d*\.?\d+(?:e-?\d+)?)/g, (_, x, y) => `${r1(a * +x + bx)} ${r1(a * +y + by)}`)
}

const T = {
  it: { tappa: (n: number) => `Tappa ${n}`, e: ' e ' },
  en: { tappa: (n: number) => `Stop ${n}`, e: ' and ' },
  es: { tappa: (n: number) => `Etapa ${n}`, e: ' y ' },
} satisfies Record<Lingua, { tappa: (n: number) => string; e: string }>

const elencoNomi = (nomi: string[], e: string) => (nomi.length < 2 ? nomi.join('') : `${nomi.slice(0, -1).join(', ')}${e}${nomi.at(-1)}`)

export function datiRotta(slug: string, lingua: Lingua): DatiRotta | null {
  const grezzo = getTripMeta(slug, lingua)
  if (!grezzo || grezzo.tappeMappa.length === 0) return null
  const meta = conPaesiDelleDestinazioni(grezzo)
  const t = T[lingua]

  // tappe con coordinate (a mano nei viaggi-dati, altrimenti OSM), un punto per destinazione
  type Tappa = { id: string; nome: string; paese: string | null; lat: number; lng: number; href: string; testo: string; kicker: string }
  const lista: Tappa[] = []
  const puntoDiTappa: (string | null)[] = []
  for (const [i, tp] of meta.tappeMappa.entries()) {
    const paese = tp.paeseSlug === undefined ? meta.paeseSlug : tp.paeseSlug
    const c: [number, number] | undefined =
      typeof tp.lat === 'number' && typeof tp.lng === 'number'
        ? [tp.lat, tp.lng]
        : paese && tp.destinazioneSlug
          ? coordinateDestinazioni[`${paese}/${tp.destinazioneSlug}`]
          : undefined
    if (!c) {
      puntoDiTappa.push(null)
      continue
    }
    const id = tp.destinazioneSlug ? `d:${paese}/${tp.destinazioneSlug}` : `t:${i}`
    if (!lista.some((q) => q.id === id)) {
      const dest = paese && tp.destinazioneSlug ? getDestinazione(paese, tp.destinazioneSlug, lingua) : undefined
      lista.push({
        id,
        nome: dest?.nome ?? tp.nome.replace(PREFISSO_TAPPA, '').trim(),
        paese,
        lat: c[0],
        lng: c[1],
        href: linkDestinazione(tp.destinazioneSlug, tp.paeseSlug, meta.paeseSlug) ?? '#itinerario-giorno-per-giorno',
        testo: dest ? unaRiga(dest.introduzione) : '',
        kicker: '',
      })
    }
    puntoDiTappa.push(id)
  }
  // una sola posizione (le tappe di una città, o tutte nella stessa destinazione): la mappa del Paese con quel punto
  if (lista.length === 0) return null

  // Paesi da disegnare con il dettaglio dell'atlante: quelli del viaggio e quelli delle tappe
  const paesi = [...new Set([...paesiDelViaggio(slug), meta.paeseSlug, ...lista.map((q) => q.paese)])].filter(
    (p): p is string => !!p && !!leggi<FileMappa>(p),
  )
  const nomePaese = elencoNomi(
    [...new Set(lista.map((q) => q.paese ?? meta.paeseSlug))].map((p) => getPaese(p, lingua)?.nome).filter((n): n is string => !!n),
    t.e,
  )

  const principale = leggi<FileMappa>(meta.paeseSlug)
  const dentro = (f: FileMappa) =>
    lista.every((q) => {
      const x = f.proiezione.ox + (q.lng - f.proiezione.lng0) * f.proiezione.s
      const y = f.proiezione.oy + (f.proiezione.y0 - mercY(q.lat)) * f.proiezione.s
      return x > 10 && x < f.w - 10 && y > 10 && y < f.h - 10
    })
  const unoSolo = principale && paesi.length === 1 && paesi[0] === meta.paeseSlug && dentro(principale)

  let mappa: DatiMappa
  let atlante: DatiAtlante
  let pr: Proiezione

  if (unoSolo) {
    pr = principale.proiezione
    mappa = { viewBox: principale.viewBox, w: principale.w, h: principale.h, path: principale.path, graticola: graticola(principale) }
    atlante = leggi<DatiAtlante>(`${meta.paeseSlug}-atlante`) ?? { fonte: '', rilievo: null, vicini: [], fiumi: [], laghi: [], etichette: [] }
  } else {
    // riquadro delle tappe con un margine, poi allargato verso un rapporto tra 0,62 e 1,25
    const lngs = lista.map((q) => q.lng), ys = lista.map((q) => mercY(q.lat))
    let x0 = Math.min(...lngs), x1 = Math.max(...lngs), y0 = Math.min(...ys), y1 = Math.max(...ys)
    const m = Math.max(1.2, 0.28 * Math.max(x1 - x0, y1 - y0))
    x0 -= m; x1 += m; y0 -= m; y1 += m
    const r = (y1 - y0) / (x1 - x0)
    if (r < 0.62) { const k = ((x1 - x0) * 0.62 - (y1 - y0)) / 2; y0 -= k; y1 += k }
    if (r > 1.25) { const k = ((y1 - y0) / 1.25 - (x1 - x0)) / 2; x0 -= k; x1 += k }
    const W = 1000
    const s = W / (x1 - x0)
    const H = Math.round((y1 - y0) * s)
    pr = { tipo: 'mercatore', lng0: x0, y0: y1, s, ox: 0, oy: 0 }
    mappa = { viewBox: `0 0 ${W} ${H}`, w: W, h: H, path: '', graticola: graticola({ w: W, h: H, proiezione: pr }) }
    atlante = { fonte: '', rilievo: null, rilievi: [], vicini: [], fiumi: [], laghi: [], etichette: [] }

    for (const p of paesi) {
      const f = leggi<FileMappa>(p)!
      const at = leggi<DatiAtlante>(`${p}-atlante`)
      const q = f.proiezione
      const a = s / q.s
      const bx = (q.lng0 - q.ox / q.s - pr.lng0) * s
      const by = (pr.y0 - q.y0) * s - q.oy * a
      const contorno = trasforma(f.path, a, bx, by)
      mappa.path += contorno
      const ril = at?.rilievo
      atlante.rilievi!.push(
        ril ? { src: ril.src, srcHd: ril.srcHd, x: r1(a * ril.x + bx), y: r1(a * ril.y + by), w: r1(a * ril.w), h: r1(a * ril.h), clip: contorno } : { x: 0, y: 0, w: 0, h: 0, clip: contorno },
      )
      if (!at) continue
      // i vicini degli atlanti sono tagliati sul riquadro di ciascun Paese: qui farebbero rettangoli, li sostituisce `terra`
      for (const v of at.fiumi) atlante.fiumi.push({ ...v, id: `${p}-${v.id}`, path: trasforma(v.path, a, bx, by) })
      for (const v of at.laghi) atlante.laghi.push({ ...v, id: `${p}-${v.id}`, path: trasforma(v.path, a, bx, by) })
      for (const e of at.etichette) {
        if (e.tipo === 'paese') continue // i nomi dei vicini di un atlante possono cadere su un Paese del viaggio
        if (atlante.etichette.some((g) => g.testo.it === e.testo.it)) continue
        const x = a * e.x + bx, y = a * e.y + by
        if (x > 20 && x < W - 20 && y > 20 && y < H - 20) atlante.etichette.push({ ...e, id: `${p}-${e.id}`, x: r1(x), y: r1(y) })
      }
    }

    // terre di fondo: i Paesi di mondo.json che toccano il riquadro, tranne quelli già disegnati
    const mondo = leggi<{ paesi: { n: string; s?: string; p: number[][] }[] }>('mondo')
    let terra = ''
    for (const p of mondo?.paesi ?? []) {
      if (p.s && paesi.includes(p.s)) continue
      for (const anello of p.p) {
        let d = ''
        let tocca = false
        for (let k = 0; k < anello.length; k += 2) {
          const x = (anello[k] - pr.lng0) * s
          const y = (pr.y0 - mercY(anello[k + 1])) * s
          if (x > -W * 0.2 && x < W * 1.2 && y > -H * 0.2 && y < H * 1.2) tocca = true
          d += `${k ? '' : 'M'}${r1(x)} ${r1(y)} `
        }
        if (tocca) terra += `${d.trim()}Z`
      }
    }
    if (terra) atlante.terra = terra
  }

  const proietta = (lat: number, lng: number) => [pr.ox + (lng - pr.lng0) * pr.s, pr.oy + (pr.y0 - mercY(lat)) * pr.s] as const

  const latC = mercLat(pr.y0 - (mappa.h / 2 - pr.oy) / pr.s)
  const sogliaLuogo = Math.max(1.5, 0.15 / ((111.32 * Math.cos((latC * Math.PI) / 180)) / pr.s))

  const tappe: TappaPercorso[] = []
  const punti: PuntoMappa[] = lista.map((q, i) => {
    const [x, y] = proietta(q.lat, q.lng)
    tappe.push({ id: q.id, n: i + 1, x, y })
    return { id: q.id, tipo: 'destinazione', nome: q.nome, kicker: t.tappa(i + 1), testo: q.testo, href: q.href, x, y, dx: 0, dy: 0, legati: [] }
  })

  // percorso nell'ordine dei giorni (con i rientri), se i giorni hanno le destinazioni; se no, l'ordine delle tappe
  const perSlug = new Map(meta.tappeMappa.map((tp, i) => [tp.destinazioneSlug, puntoDiTappa[i]]))
  const sequenza = meta.giorni.map((g) => (g.destinazioneSlug ? perSlug.get(g.destinazioneSlug) : null)).filter((id): id is string => !!id)
  const ids = new Set(sequenza).size > 1 ? sequenza : puntoDiTappa.filter((id): id is string => !!id)
  const percorso: { x: number; y: number }[] = []
  let ultimo = ''
  for (const id of ids) {
    if (id === ultimo) continue
    ultimo = id
    const p = punti.find((q) => q.id === id)!
    percorso.push({ x: r1(p.x), y: r1(p.y) })
  }

  const xs = punti.map((p) => p.x), ys = punti.map((p) => p.y)
  const riquadro: [number, number, number, number] =
    punti.length > 1
      ? [Math.min(...xs), Math.min(...ys), Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)]
      : [mappa.w * 0.1, mappa.h * 0.1, mappa.w * 0.8, mappa.h * 0.8]

  return {
    nomePaese,
    mappa,
    atlante,
    punti,
    tappe,
    percorso,
    sogliaLuogo,
    proiezione: { y0: pr.y0, s: pr.s, oy: pr.oy },
    puntoDiTappa,
    riquadro: riquadro.map(r1) as [number, number, number, number],
  }
}
