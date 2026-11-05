import Link from '@/components/ui/Link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { riduciPerScheda } from '@/components/TripCard'
import { ProssimaScheda } from '@/components/ProssimaScheda'
import { TitoloSezione } from '@/components/scheda/Blocchi'
import { scegliProssima } from '@/components/ProssimaDestinazione'
import { getPaese } from '@/lib/geo'
import { getAllViaggi } from '@/lib/viaggi'
import { paesiDelViaggio } from '@/lib/viaggi-filtri'
import { copertina } from '@/lib/i18n/contenuti'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: (p: string) => `Altre guide: ${p}`,
    tutti: (n: number, p: string) => `Tutti i ${n} viaggi: ${p}`,
    guidaPaese: (p: string) => `Guida al Paese: ${p}`,
    lead: 'Gli altri itinerari che toccano lo stesso Paese.',
  },
  en: {
    titolo: (p: string) => `More guides: ${p}`,
    tutti: (n: number, p: string) => `All ${n} trips: ${p}`,
    guidaPaese: (p: string) => `Country guide: ${p}`,
    lead: 'The other itineraries that visit the same country.',
  },
  es: {
    titolo: (p: string) => `Más guías: ${p}`,
    tutti: (n: number, p: string) => `Los ${n} viajes: ${p}`,
    guidaPaese: (p: string) => `Guía del país: ${p}`,
    lead: 'Los otros itinerarios que pasan por el mismo país.',
  },
} satisfies Record<Lingua, Record<string, unknown>>

const MAX = 4

/**
 * Altre guide dello stesso Paese in fondo al viaggio: solo viaggi veri dell'archivio che
 * toccano almeno uno dei Paesi di questo (`paesiDelViaggio`), il Paese principale per primo.
 * Non ripete il viaggio già proposto da «Leggi la prossima destinazione». Senza altri viaggi
 * restano solo i link alla pagina Paese e all'archivio filtrato.
 */
export function AltreGuidePaese({ slug, lingua }: { slug: string; lingua: Lingua }) {
  const t = T[lingua]
  const paesi = paesiDelViaggio(slug)
  if (paesi.length === 0) return null
  const prossima = scegliProssima(slug, lingua)

  const tutti = getAllViaggi(lingua)
  const conPaesi = tutti.map((v) => ({ v, paesi: paesiDelViaggio(v.slug) }))
  // ordine: prima chi condivide il Paese principale, poi gli altri Paesi; a parità, l'ordine dell'archivio
  const rango = (p: string[]) => Math.min(...p.map((x) => (paesi.includes(x) ? paesi.indexOf(x) : 99)))
  const altri = conPaesi
    .filter(({ v, paesi: p }) => v.slug !== slug && v.slug !== prossima && p.some((x) => paesi.includes(x)))
    .sort((a, b) => rango(a.paesi) - rango(b.paesi))

  const nomi = paesi.map((p) => ({ slug: p, nome: getPaese(p, lingua)?.nome })).filter((p): p is { slug: string; nome: string } => !!p.nome)
  if (nomi.length === 0) return null
  const elencoNomi = nomi.map((p) => p.nome).join(' · ')

  return (
    <section aria-labelledby="altre-guide" className="border-t border-alpine/10 pt-10">
      <div id="altre-guide">
        <TitoloSezione icona={BookOpen}>{t.titolo(elencoNomi)}</TitoloSezione>
      </div>
      {altri.length > 0 && (
        <>
          <p className="mt-3 text-stone">{t.lead}</p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {altri.slice(0, MAX).map(({ v, paesi: p }) => {
              const luogo = p
                .map((x) => getPaese(x, lingua)?.nome)
                .filter(Boolean)
                .join(' · ')
              return (
                <li key={v.slug} className="min-w-0">
                  <ProssimaScheda viaggio={{ ...riduciPerScheda(v), copertina: copertina(v.slug, lingua), luogo: luogo || undefined }} />
                </li>
              )
            })}
          </ul>
        </>
      )}
      <ul className="mt-6 flex flex-wrap gap-2">
        {nomi.map((p) => {
          const n = conPaesi.filter((x) => x.paesi.includes(p.slug)).length
          return (
            <li key={p.slug} className="contents">
              <Link
                href={`/destinazioni/${p.slug}`}
                className="inline-flex min-h-11 items-center gap-1.5 border-2 border-ink bg-cream px-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream motion-reduce:transition-none"
              >
                {t.guidaPaese(p.nome)}
                <ArrowRight size={14} aria-hidden />
              </Link>
              {n > 1 && (
                <Link
                  href={`/viaggi?paese=${p.slug}`}
                  className="inline-flex min-h-11 items-center gap-1.5 border-2 border-ink/25 bg-white px-3 text-sm font-medium text-ink transition-colors hover:border-ink motion-reduce:transition-none"
                >
                  {t.tutti(n, p.nome)}
                  <ArrowRight size={14} aria-hidden />
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
