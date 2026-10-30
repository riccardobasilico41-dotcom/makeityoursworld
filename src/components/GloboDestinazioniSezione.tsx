import fs from 'node:fs'
import path from 'node:path'
import { Container } from '@/components/ui/Container'
import { coordinateDestinazioni } from '@/content/mappe/coordinate'
import { getAllPaesi, getDestinazioniByPaese } from '@/lib/geo'
import { GloboDestinazioni, type PaeseGlobo, type PinGlobo } from './GloboDestinazioni'

// cielo stellato in CSS (statico, niente immagini): vale sia per il globo 3D sia per l'SVG
const STELLE = [
  'radial-gradient(1px 1px at 12% 18%, rgb(255 255 255 / .8), transparent 60%)',
  'radial-gradient(1px 1px at 27% 72%, rgb(255 255 255 / .55), transparent 60%)',
  'radial-gradient(1.5px 1.5px at 41% 33%, rgb(255 255 255 / .7), transparent 60%)',
  'radial-gradient(1px 1px at 58% 86%, rgb(255 255 255 / .5), transparent 60%)',
  'radial-gradient(1px 1px at 66% 12%, rgb(255 255 255 / .65), transparent 60%)',
  'radial-gradient(1.5px 1.5px at 79% 57%, rgb(255 240 220 / .7), transparent 60%)',
  'radial-gradient(1px 1px at 91% 28%, rgb(255 255 255 / .5), transparent 60%)',
  'radial-gradient(1px 1px at 6% 91%, rgb(220 230 255 / .6), transparent 60%)',
].join(', ')

/**
 * Sezione «Il mondo che ho visto»: carica le terre (src/content/mappe/mondo.json, Natural
 * Earth 1:110m) e mette un pin per ogni destinazione con coordinate OpenStreetMap.
 */
export function GloboDestinazioniSezione() {
  const file = path.join(process.cwd(), 'src/content/mappe/mondo.json')
  if (!fs.existsSync(file)) return null
  const { paesi } = JSON.parse(fs.readFileSync(file, 'utf8')) as { paesi: PaeseGlobo[] }

  const pins: PinGlobo[] = []
  for (const paese of getAllPaesi()) {
    for (const d of getDestinazioniByPaese(paese.slug)) {
      const c = coordinateDestinazioni[`${paese.slug}/${d.slug}`]
      if (c) pins.push({ lat: c[0], lng: c[1], nome: d.nome, paese: paese.nome, href: `/destinazioni/${paese.slug}/${d.slug}` })
    }
  }
  if (pins.length < 2) return null
  const nPaesi = new Set(pins.map((p) => p.paese)).size

  return (
    <section
      aria-labelledby="globo-titolo"
      className="relative overflow-hidden bg-[#05070c] py-14 text-cream sm:py-20"
      style={{
        backgroundImage: `radial-gradient(ellipse 70% 55% at 50% 58%, rgb(40 70 130 / .28), transparent 70%), ${STELLE}`,
        backgroundSize: '100% 100%, 230px 230px, 310px 310px, 270px 270px, 190px 190px, 350px 350px, 290px 290px, 210px 210px, 330px 330px',
      }}
    >
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="globo-titolo" className="font-display text-[clamp(2rem,3.4vw,3rem)] text-balance text-cream">
            Il mondo che ho visto
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-cream/70">
            {pins.length} destinazioni in {nPaesi} Paesi. Trascina il globo per girarlo e tocca un punto rosso per aprire
            la destinazione; qui sotto tutti i Paesi.
          </p>
        </div>
      </Container>
      <div className="mt-4">
        <GloboDestinazioni paesi={paesi} pins={pins} />
        <p className="mx-auto mt-2 max-w-5xl px-4 text-[11px] text-cream/45">
          Immagini della Terra: NASA Visible Earth. Terre: Natural Earth. Luoghi:{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-cream">
            © OpenStreetMap
          </a>{' '}
          contributors.
        </p>
      </div>
    </section>
  )
}
