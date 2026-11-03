import { Container } from '@/components/ui/Container'
import { datiMappaMondo } from '@/lib/mappa-mondo'
import { MappaMondoDifferita } from './MappaMondoDifferita'

/**
 * Sezione «Il mondo che ho visto»: mappa piatta del mondo con un punto per ogni
 * destinazione. Un tocco sul punto apre la scheda con foto e i collegamenti a
 * destinazione, Paese e viaggio.
 */
export function MappaMondoSezione() {
  // i dati servono qui solo per i numeri del sottotitolo; la mappa li scarica da /mappa-mondo.json
  const dati = datiMappaMondo()
  if (!dati) return null
  const { pins, nPaesi } = dati

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
        <MappaMondoDifferita w={dati.w} h={dati.h} />
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
