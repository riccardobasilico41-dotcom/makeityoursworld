import Link from '@/components/ui/Link'
import Image from 'next/image'
import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { inEvidenza: 'Il viaggio in evidenza', tappe: 'Le tappe', leggi: "Leggi l'itinerario completo", altre: (n: number) => `e altre ${n}` },
  en: { inEvidenza: 'Featured trip', tappe: 'The stops', leggi: 'Read the full itinerary', altre: (n: number) => `and ${n} more` },
  es: { inEvidenza: 'El viaje destacado', tappe: 'Las paradas', leggi: 'Lee el itinerario completo', altre: (n: number) => `y ${n} más` },
} satisfies Record<Lingua, Record<string, string | ((n: number) => string)>>

/**
 * Il viaggio in evidenza della Home, in una schermata: foto, apertura, le prime tappe e
 * la CTA verso l'itinerario. Prima era un racconto in tre battute con lo scroll ancorato
 * (gsap, 270vh): ritmo e punto forte restano nella pagina del viaggio, qui non si ripetono.
 */
export function FeaturedJourney({
  lingua,
  titolo,
  href,
  apertura,
  tappe,
  durata,
  periodo,
  copertina,
}: {
  lingua: Lingua
  titolo: string
  href: string
  apertura: string
  /** Nomi delle tappe, già senza doppioni, nell'ordine del viaggio. */
  tappe: string[]
  durata?: string
  periodo?: string
  copertina?: { immagine: string; imageAlt: string }
}) {
  const t = T[lingua]
  const prime = tappe.slice(0, 4)
  const resto = tappe.length - prime.length

  return (
    <section aria-labelledby="evidenza-titolo" className="border-t border-alpine/10 bg-cream-dark/40 sezione">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
            {copertina && (
              <Link
                href={href}
                tabIndex={-1}
                aria-hidden="true"
                className="relative block aspect-[4/3] w-full scheda overflow-hidden"
              >
                <Image
                  src={copertina.immagine}
                  alt={copertina.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 34rem, calc(100vw - 3rem)"
                  className="object-cover"
                />
              </Link>
            )}

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{t.inEvidenza}</p>
              <h2 id="evidenza-titolo" className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-balance text-alpine">
                {titolo}
              </h2>
              {(durata || periodo) && (
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-stone">
                  {durata && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} aria-hidden className="text-rosso" />
                      {durata}
                    </span>
                  )}
                  {periodo && (
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} aria-hidden className="text-rosso" />
                      {periodo}
                    </span>
                  )}
                </p>
              )}
              <p className="mt-5 line-clamp-5 font-display text-lg italic leading-relaxed text-alpine sm:text-xl">{apertura}</p>

              {prime.length > 0 && (
                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone/85">{t.tappe}</p>
                  <ol className="mt-3 flex flex-wrap items-center gap-2 text-sm text-ink">
                    {prime.map((nome, i) => (
                      <li key={nome} className="inline-flex max-w-full items-center gap-2 border-2 border-ink bg-white px-2.5 py-1">
                        <span className="font-mono text-[11px] text-rosso">{String(i + 1).padStart(2, '0')}</span>
                        {nome}
                      </li>
                    ))}
                    {resto > 0 && <li className="text-xs text-stone">{t.altre(resto)}</li>}
                  </ol>
                </div>
              )}

              <Link
                href={href}
                className="btn btn-primario mt-8"
              >
                {t.leggi}
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
