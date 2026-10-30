import fs from 'node:fs'
import path from 'node:path'
import { Container } from '@/components/ui/Container'
import { coordinateDestinazioni } from '@/content/mappe/coordinate'
import { getAllPaesi, getDestinazioniByPaese } from '@/lib/geo'
import { GloboDestinazioni, type PaeseGlobo, type PinGlobo } from './GloboDestinazioni'

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
    <section aria-labelledby="globo-titolo" className="overflow-hidden border-b border-alpine/10 py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="globo-titolo" className="font-display text-[clamp(2rem,3.4vw,3rem)] text-balance text-alpine">
            Il mondo che ho visto
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-stone">
            {pins.length} destinazioni in {nPaesi} Paesi. Trascina il globo per girarlo, tocca un punto per aprire la
            destinazione o un Paese per la sua pagina.
          </p>
        </div>
      </Container>
      <div className="mt-6 px-2 sm:px-6">
        <GloboDestinazioni paesi={paesi} pins={pins} />
        <p className="mx-auto mt-2 max-w-5xl px-4 text-[11px] text-stone/70">
          Terre: Natural Earth. Luoghi:{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-rosso">
            © OpenStreetMap
          </a>{' '}
          contributors.
        </p>
      </div>
    </section>
  )
}
