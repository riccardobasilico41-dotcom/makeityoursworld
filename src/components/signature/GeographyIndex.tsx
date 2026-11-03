import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { codicePaese } from './paese-codici'
import type { Paese } from '@/lib/types'
import { linguaCorrente } from '@/lib/i18n/server'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Da dove vuoi partire?',
    conteggio: (n: number) => `${n} Paesi in archivio, ognuno con una scheda pratica completa e le sue destinazioni.`,
  },
  en: {
    titolo: 'Where do you want to start?',
    conteggio: (n: number) => `${n} countries in the archive, each with a complete practical guide and its destinations.`,
  },
  es: {
    titolo: '¿Por dónde quieres empezar?',
    conteggio: (n: number) => `${n} países en el archivo, cada uno con una ficha práctica completa y sus destinos.`,
  },
} satisfies Record<Lingua, Record<string, string | ((n: number) => string)>>

type GruppoContinente = { continente: string; items: Paese[] }

/**
 * Indice di geografia: sostituisce l'elenco di pillole per continente con un
 * indice editoriale denso, ordinato per continente, dove ogni Paese porta il
 * proprio codice reale (ISO 3166-1 alpha-2, non un'icona) e il conteggio
 * delle destinazioni già in archivio. Non è una mappa vera — non abbiamo
 * confini geografici reali disponibili in questo ambiente — quindi non
 * finge di esserlo: è un indice cartografico tipografico, dichiaratamente.
 */
export async function GeographyIndex({
  gruppi,
  conteggioDestinazioni,
}: {
  gruppi: GruppoContinente[]
  conteggioDestinazioni: (paeseSlug: string) => number
}) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return (
    <section className="border-t border-alpine/10 bg-alpine-dark py-24 text-cream sm:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-lg font-display text-[clamp(2rem,3.4vw,3rem)] text-balance">
              {t.titolo}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-cream/60">
              {t.conteggio(gruppi.reduce((n, g) => n + g.items.length, 0))}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-14">
          {gruppi.map(({ continente, items }, gi) => (
            <Reveal key={continente} delay={Math.min(gi * 0.04, 0.2)}>
              <div className="grid gap-4 border-t border-cream/10 pt-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/40">{etichetta(continente, lingua)}</p>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((paese) => (
                    <li key={paese.slug}>
                      <Link
                        href={`/destinazioni/${paese.slug}`}
                        className="group flex items-baseline justify-between gap-3 border-b border-cream/0 pb-1.5 transition-colors hover:border-cream/30"
                      >
                        <span className="flex items-baseline gap-2.5">
                          <span className="font-mono text-[0.65rem] tabular-nums text-cream/40">
                            {codicePaese(paese.slug)}
                          </span>
                          <span className="font-display text-lg font-medium text-cream transition-colors">
                            {paese.nome}
                          </span>
                        </span>
                        <span className="shrink-0 font-mono text-[0.65rem] tabular-nums text-cream/40">
                          {conteggioDestinazioni(paese.slug)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
