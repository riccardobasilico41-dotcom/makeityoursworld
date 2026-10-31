import fs from 'node:fs'
import path from 'node:path'
import { Container } from '@/components/ui/Container'
import { coordinateDestinazioni } from '@/content/mappe/coordinate'
import { getAllPaesi, getDestinazioniByPaese, getViaggiByDestinazione } from '@/lib/geo'
import { unaRiga } from './MappaPaeseSezione'
import { MappaMondo, type PinMondo } from './MappaMondo'

/*
 * Proiezione Equal Earth (Šavrič, Patterson, Jenny 2018): aree vere, forme poco deformate,
 * calcolata qui sul server; al client arrivano solo il path delle terre e le x/y dei pin.
 */
const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796
const M = Math.sqrt(3) / 2
const SCALA = 180 // unità del viewBox per radiante
const LAT_NORD = 84
const LAT_SUD = -57 // senza Antartide

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

/**
 * Sezione «Il mondo che ho visto»: mappa piatta del mondo con un punto per ogni
 * destinazione. Un tocco sul punto apre la scheda con foto e i collegamenti a
 * destinazione, Paese e viaggio.
 */
export function MappaMondoSezione() {
  const file = path.join(process.cwd(), 'src/content/mappe/mondo.json')
  if (!fs.existsSync(file)) return null
  const { paesi } = JSON.parse(fs.readFileSync(file, 'utf8')) as { paesi: { n: string; s?: string; p: number[][] }[] }

  const terre = paesi.map((p) => ({ nome: p.n, slug: p.s, d: p.p.map(anello).join('') }))

  const pins: PinMondo[] = []
  for (const paese of getAllPaesi()) {
    for (const d of getDestinazioniByPaese(paese.slug)) {
      const c = coordinateDestinazioni[`${paese.slug}/${d.slug}`]
      if (!c) continue
      const [x, y] = proietta(c[1], c[0])
      const viaggio = getViaggiByDestinazione(d)[0]
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

  return (
    <section aria-labelledby="mondo-titolo" className="border-t border-alpine/10 bg-cream py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="mondo-titolo" className="font-display text-[clamp(2rem,3.4vw,3rem)] text-balance text-alpine">
            Il mondo che ho visto
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-stone">
            {pins.length} destinazioni in {nPaesi} Paesi. Tocca un Paese per avvicinarti e un punto rosso per aprire la
            destinazione; qui sotto tutti i Paesi.
          </p>
        </div>
        <MappaMondo
          w={+W.toFixed(1)}
          h={+H.toFixed(1)}
          terre={terre}
          graticola={graticola()}
          pins={pins}
        />
        <p className="mt-2 text-[11px] leading-snug text-stone/85">
          Terre: Natural Earth. Luoghi:{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-rosso">
            © OpenStreetMap
          </a>{' '}
          contributors.
        </p>
      </Container>
    </section>
  )
}
