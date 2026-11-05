import Link from '@/components/ui/Link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { FieldDossier } from './FieldDossier'
import { getContinente } from '@/lib/utils'
import type { Viaggio } from '@/lib/viaggi'
import type { CopertinaViaggio } from '@/content/viaggi-copertine'
import { linguaCorrente } from '@/lib/i18n/server'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { archivio: "L'archivio dei viaggi" },
  en: { archivio: 'The trip archive' },
  es: { archivio: 'El archivo de viajes' },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Archivio visivo: scorrimento orizzontale nativo (scroll-snap, nessun
 * hijack dello scroll verticale) attraverso i viaggi recenti. Le tessere con
 * una copertina reale e quelle senza (Field Dossier) stanno nello stesso
 * ritmo, stessa dimensione: una copertina mancante non deve leggersi come
 * "la versione rotta" della tessera con foto.
 */
export async function VisualArchive({
  viaggi,
  copertine,
}: {
  viaggi: Viaggio[]
  copertine: Record<string, CopertinaViaggio>
}) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return (
    <section className="border-t border-alpine/10 sezione">
      <Container className="mb-10">
        {/* la CTA «tutti i viaggi» è subito sotto, nella sezione della Home: qui non si ripete */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl font-display text-[clamp(2rem,3.4vw,3rem)] text-balance text-alpine">
            {t.archivio}
          </h2>
        </div>
      </Container>

      <Reveal>
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pl-6 sm:pl-8 [scrollbar-width:thin]">
          {viaggi.map((viaggio) => {
            const continente = etichetta(getContinente(viaggio.categorie), lingua)
            const copertina = copertine[viaggio.slug]
            return (
              <Link
                key={viaggio.slug}
                href={`/viaggi/${viaggio.slug}`}
                className="group relative flex h-[26rem] w-[19rem] shrink-0 snap-start flex-col overflow-hidden rounded-none border border-alpine/10 transition-colors duration-150 hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine focus-visible:ring-offset-2 sm:w-[22rem]"
              >
                {copertina ? (
                  <>
                    <Image
                      src={copertina.immagine}
                      alt={copertina.imageAlt}
                      fill
                      sizes="(min-width: 640px) 22rem, 19rem"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="relative z-10 mt-auto p-6 text-cream">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream/70">
                        {continente}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-medium leading-tight">{viaggio.titolo}</h3>
                      <p className="mt-2 text-sm text-cream/70">{viaggio.durataBreve}</p>
                    </div>
                  </>
                ) : (
                  <FieldDossier
                    tone="dark"
                    size="lg"
                    eyebrow={continente}
                    titolo={viaggio.titolo}
                    meta={viaggio.durataBreve}
                    className="h-full"
                  />
                )}
              </Link>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
