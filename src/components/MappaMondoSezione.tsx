import { Container } from '@/components/ui/Container'
import { datiMappaMondo } from '@/lib/mappa-mondo'
import { MappaMondoDifferita } from './MappaMondoDifferita'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Il mondo che ho visto',
    sottotitolo: (n: number, p: number) =>
      `${n} destinazioni in ${p} Paesi. Tocca un Paese per avvicinarti e un punto rosso per aprire la destinazione; qui sotto tutti i Paesi.`,
    terre: 'Terre: Natural Earth. Luoghi:',
    contributors: 'contributors.',
  },
  en: {
    titolo: "The world I've seen",
    sottotitolo: (n: number, p: number) =>
      `${n} destinations in ${p} countries. Tap a country to zoom in and a red dot to open the destination; all the countries are listed below.`,
    terre: 'Land: Natural Earth. Places:',
    contributors: 'contributors.',
  },
  es: {
    titolo: 'El mundo que he visto',
    sottotitolo: (n: number, p: number) =>
      `${n} destinos en ${p} países. Toca un país para acercarte y un punto rojo para abrir el destino; más abajo están todos los países.`,
    terre: 'Tierras: Natural Earth. Lugares:',
    contributors: 'contributors.',
  },
} satisfies Record<Lingua, Record<string, string | ((n: number, p: number) => string)>>

/**
 * Sezione «Il mondo che ho visto»: mappa piatta del mondo con un punto per ogni
 * destinazione. Un tocco sul punto apre la scheda con foto e i collegamenti a
 * destinazione, Paese e viaggio.
 */
export async function MappaMondoSezione() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  // i dati servono qui solo per i numeri del sottotitolo; la mappa li scarica da /mappa-mondo.json
  const dati = datiMappaMondo(lingua)
  if (!dati) return null
  const { pins, nPaesi } = dati

  return (
    <section aria-labelledby="mondo-titolo" className="border-t border-alpine/10 bg-cream py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="mondo-titolo" className="font-display text-[clamp(2rem,3.4vw,3rem)] text-balance text-alpine">
            {t.titolo}
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-stone">
            {t.sottotitolo(pins.length, nPaesi)}
          </p>
        </div>
        <MappaMondoDifferita w={dati.w} h={dati.h} />
        <p className="mt-2 text-[11px] leading-snug text-stone/85">
          {t.terre}{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-rosso">
            © OpenStreetMap
          </a>{' '}
          {t.contributors}
        </p>
      </Container>
    </section>
  )
}
