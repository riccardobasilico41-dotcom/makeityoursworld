import fs from 'node:fs'
import path from 'node:path'
import { coordinateDestinazioni } from '@/content/mappe/coordinate'
import { getAllPaesi, getDestinazioniByPaese, getViaggiByDestinazione } from '@/lib/geo'
import { unaRiga } from '@/components/MappaPaeseSezione'
import type { PinMondo } from '@/components/MappaMondo'

/*
 * Proiezione Equal Earth (Šavrič, Patterson, Jenny 2018): aree vere, forme poco deformate,
 * calcolata qui sul server; al client arrivano solo il path delle terre e le x/y dei pin.
 */
const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796
const M = Math.sqrt(3) / 2
const SCALA = 180 // unità del viewBox per radiante
const LAT_NORD = 84
const LAT_SUD = -57 // senza Antartide

/** Come nel menu: le aree raggruppano i `continente` dei Paesi. */
const AREA: Record<string, string> = {
  'Medio Oriente': 'Africa e Medio Oriente',
  Africa: 'Africa e Medio Oriente',
  'Nord America': 'Nord e Centro America',
  'America Centrale': 'Nord e Centro America',
}

function equalEarth(lng: number, lat: number): [number, number] {
  const l = (lng * Math.PI) / 180
  const t = Math.asin(M * Math.sin((lat * Math.PI) / 180))
  const t2 = t * t, t6 = t2 * t2 * t2
  const x = (2 * Math.sqrt(3) * l * Math.cos(t)) / (3 * (9 * A4 * t6 * t2 + 7 * A3 * t6 + 3 * A2 * t2 + A1))
  const y = t * (A4 * t6 * t2 + A3 * t6 + A2 * t2 + A1)
  return [x * SCALA, -y * SCALA]
}

const [, Y0] = equalEarth(0, LAT_NORD)
const [, Y1] = equalEarth(0, LAT_SUD)
const [X1] = equalEarth(180, 0)
const PAD = 6
const W = 2 * X1 + 2 * PAD
const H = Y1 - Y0 + 2 * PAD
const proietta = (lng: number, lat: number) => {
  const [x, y] = equalEarth(lng, Math.max(LAT_SUD - 3, lat))
  return [x + X1 + PAD, y - Y0 + PAD] as const
}

function anello(coords: number[]): string {
  // anelli a cavallo dell'antimeridiano (Russia, Fiji): si portano tutti dallo stesso lato,
  // altrimenti il tratto da +180 a -180 attraversa la mappa; quello che esce dal bordo lo taglia il viewBox
  let min = Infinity, max = -Infinity, somma = 0
  for (let k = 0; k < coords.length; k += 2) {
    min = Math.min(min, coords[k])
    max = Math.max(max, coords[k])
    somma += coords[k]
  }
  const avvolto = max - min > 180
  const est = somma > 0
  let d = ''
  for (let k = 0; k < coords.length; k += 2) {
    let lng = coords[k]
    if (avvolto && est && lng < 0) lng += 360
    if (avvolto && !est && lng > 0) lng -= 360
    const [x, y] = proietta(lng, coords[k + 1])
    d += (k ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)
  }
  return d + 'Z'
}

/** Meridiani ogni 30° e paralleli ogni 30°, più il bordo della proiezione. */
function graticola(): string {
  let d = ''
  for (let lng = -180; lng <= 180; lng += 30) {
    for (let lat = LAT_SUD; lat <= LAT_NORD; lat += 3) {
      const [x, y] = proietta(lng, Math.min(lat, LAT_NORD))
      d += (lat === LAT_SUD ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1)
    }
  }
  for (const lat of [-30, 0, 30, 60]) {
    for (let lng = -180; lng <= 180; lng += 5) {
      const [x, y] = proietta(lng, lat)
      d += (lng === -180 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1)
    }
  }
  return d
}

export type DatiMappaMondo = {
  w: number
  h: number
  terre: { nome: string; slug?: string; d: string }[]
  graticola: string
  pins: PinMondo[]
  aree: { nome: string; box: [number, number, number, number] }[]
  nPaesi: number
}

/** Terre, punti e aree della mappa del mondo, calcolati al build (vedi /mappa-mondo.json). */
export function datiMappaMondo(): DatiMappaMondo | null {
  const file = path.join(process.cwd(), 'src/content/mappe/mondo.json')
  if (!fs.existsSync(file)) return null
  const { paesi } = JSON.parse(fs.readFileSync(file, 'utf8')) as { paesi: { n: string; s?: string; p: number[][] }[] }

  const terre = paesi.map((p) => ({ nome: p.n, slug: p.s, d: p.p.map(anello).join('') }))

  const pins: PinMondo[] = []
  const areaDi = new Map<string, string>()
  for (const paese of getAllPaesi()) {
    for (const d of getDestinazioniByPaese(paese.slug)) {
      const c = coordinateDestinazioni[`${paese.slug}/${d.slug}`]
      if (!c) continue
      const [x, y] = proietta(c[1], c[0])
      const viaggio = getViaggiByDestinazione(d)[0]
      areaDi.set(`${paese.slug}/${d.slug}`, AREA[paese.continente] ?? paese.continente)
      pins.push({
        id: `${paese.slug}/${d.slug}`,
        x: +x.toFixed(2),
        y: +y.toFixed(2),
        nome: d.nome,
        paese: paese.nome,
        testo: unaRiga(d.introduzione, 140),
        href: `/destinazioni/${paese.slug}/${d.slug}`,
        paeseHref: `/destinazioni/${paese.slug}`,
        immagine: d.immagine ?? paese.heroImage,
        imageAlt: d.immagine ? d.imageAlt : paese.heroImageAlt,
        viaggio: viaggio ? { titolo: viaggio.titolo, href: `/viaggi/${viaggio.slug}` } : undefined,
      })
    }
  }
  if (pins.length < 2) return null
  const nPaesi = new Set(pins.map((p) => p.paese)).size

  // rettangolo dei punti di ogni area, per i pulsanti «Vai a» sotto la mappa
  const aree = [...new Set(areaDi.values())]
    .map((nome) => {
      const ps = pins.filter((p) => areaDi.get(p.id) === nome)
      const xs = ps.map((p) => p.x), ys = ps.map((p) => p.y)
      const x0 = Math.min(...xs), y0 = Math.min(...ys)
      return { nome, n: ps.length, box: [x0, y0, Math.max(...xs) - x0, Math.max(...ys) - y0] as [number, number, number, number] }
    })
    .filter((a) => a.n > 1)
    .sort((a, b) => b.n - a.n)
    .map(({ nome, box }) => ({ nome, box }))


  return { w: +W.toFixed(1), h: +H.toFixed(1), terre, graticola: graticola(), pins, aree, nPaesi }
}
