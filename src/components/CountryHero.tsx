import { ArrowRight, CalendarDays, Clock, Compass, Wallet } from 'lucide-react'
import { InfoPratiche } from './scheda/Blocchi'
import { HeaderAction, PageHeader } from './ui/PageHeader'
import { Container } from './ui/Container'
import type { Media } from './ui/HeaderMedia'
import { copertina as copertinaViaggio } from '@/lib/i18n/contenuti'
import { creditiCopertine } from '@/content/viaggi-copertine-crediti'
import type { Paese } from '@/lib/types'
import { linguaCorrente } from '@/lib/i18n/server'
import { etichetta, etichette } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { home: 'Home', destinazioni: 'Destinazioni', periodo: 'Periodo migliore', durata: 'Durata consigliata', budget: 'Budget indicativo', stile: 'Stile di viaggio', itinerario: 'Scopri il mio itinerario', esplora: 'Esplora le destinazioni', inBreve: 'Il Paese in breve', rapide: 'Il mio viaggio in breve', durataViaggio: 'Durata', periodoViaggio: 'Quando ci sono andato', budgetViaggio: 'Budget', tipologia: 'Tipo di viaggio' },
  en: { home: 'Home', destinazioni: 'Destinations', periodo: 'Best time to go', durata: 'Recommended length', budget: 'Rough budget', stile: 'Travel style', itinerario: 'See my itinerary', esplora: 'Explore the destinations', inBreve: 'The country at a glance', rapide: 'My trip at a glance', durataViaggio: 'Length', periodoViaggio: 'When I went', budgetViaggio: 'Budget', tipologia: 'Type of trip' },
  es: { home: 'Inicio', destinazioni: 'Destinos', periodo: 'Mejor época', durata: 'Duración recomendada', budget: 'Presupuesto orientativo', stile: 'Estilo de viaje', itinerario: 'Descubre mi itinerario', esplora: 'Explora los destinos', inBreve: 'El país en breve', rapide: 'Mi viaje en breve', durataViaggio: 'Duración', periodoViaggio: 'Cuándo fui', budgetViaggio: 'Presupuesto', tipologia: 'Tipo de viaje' },
} satisfies Record<Lingua, Record<string, string>>

/**
 * Apertura della pagina Paese: stessa grammatica di tutte le pagine interne (`PageHeader`).
 * Foto: quella del Paese se c'è, altrimenti la copertina reale del viaggio principale
 * (con il suo credito); se manca anche quella, testata solo tipografica.
 */
export async function CountryHero({
  paese,
  tripHref,
  destinazioniHref,
  area,
  viaggio,
}: {
  paese: Paese
  tripHref: string
  /** Ancora della sezione destinazioni; assente se il Paese non ne ha (niente link a vuoto). */
  destinazioniHref?: string
  /** Area del Paese (src/lib/aree.ts) per il breadcrumb Home › Destinazioni › Area › Paese. */
  area?: { slug: string; nome: string }
  /** Dati reali del viaggio principale: le voci assenti non compaiono. */
  viaggio?: { durata?: string; periodo?: string; budget?: string; stile?: string[] }
}) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const copertina = copertinaViaggio(paese.tripPrincipaleSlug, lingua)
  const media: Media | undefined = paese.heroImage
    ? { tipo: 'foto', src: paese.heroImage, alt: paese.heroImageAlt }
    : copertina
      ? { tipo: 'foto', src: copertina.immagine, alt: copertina.imageAlt }
      : undefined
  const credito = !paese.heroImage && copertina ? creditiCopertine[paese.tripPrincipaleSlug] : undefined

  const rapide = [
    { label: t.durataViaggio, value: viaggio?.durata, icona: Clock },
    { label: t.periodoViaggio, value: viaggio?.periodo, icona: CalendarDays },
    { label: t.budgetViaggio, value: viaggio?.budget, icona: Wallet },
    { label: t.tipologia, value: viaggio?.stile?.join(' · '), icona: Compass },
  ].filter((v): v is { label: string; value: string; icona: typeof Clock } => Boolean(v.value?.trim()))

  return (
    <>
      <PageHeader
        crumbs={[
          { label: t.home, href: '/' },
          { label: t.destinazioni, href: '/destinazioni' },
          ...(area ? [{ label: area.nome, href: `/aree/${area.slug}` }] : []),
          { label: paese.nome },
        ]}
        eyebrow={etichetta(paese.continente, lingua)}
        title={paese.nome}
        lead={<p>{paese.descrizione}</p>}
        actions={
          <>
            <HeaderAction href={tripHref}>
              {t.itinerario}
              <ArrowRight size={16} aria-hidden="true" />
            </HeaderAction>
            {destinazioniHref &&
              (media ? (
                <a
                  href={destinazioniHref}
                  className="inline-flex min-h-11 items-center text-[0.95rem] font-semibold text-cream underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-cream/80"
                >
                  {t.esplora}
                </a>
              ) : (
                <HeaderAction href={destinazioniHref} secondary>
                  {t.esplora}
                </HeaderAction>
              ))}
          </>
        }
        media={media}
        pieno
        credito={credito}
      />
      {rapide.length > 0 && (
        <section aria-labelledby="info-rapide" className="border-b border-alpine/10 py-6 sm:py-8">
          <Container>
            <h2 id="info-rapide" className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">
              {t.rapide}
            </h2>
            <dl className="mt-3 grid grid-cols-2 gap-px border-2 border-ink bg-ink lg:grid-cols-4">
              {rapide.map(({ label, value, icona: Icona }, i) => (
                // con un numero dispari di voci l'ultima occupa la riga intera su due colonne
                <div
                  key={label}
                  className={`min-w-0 bg-white p-3 sm:p-4 ${rapide.length % 2 === 1 && i === rapide.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}
                >
                  <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone/85">
                    <Icona size={14} aria-hidden className="shrink-0 text-rosso" />
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-ink [overflow-wrap:anywhere]">{value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}    </>
  )
}

/**
 * Le voci di orientamento del Paese (periodo migliore, durata consigliata, budget, stile):
 * testi lunghi e consultivi, per questo stanno in basso, prima di «Organizza il viaggio»,
 * e non tra l'apertura e i contenuti.
 */
export async function InBrevePaese({ paese }: { paese: Paese }) {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return (
    <InfoPratiche
      titolo={t.inBreve}
      voci={[
        { label: t.periodo, value: paese.periodoMigliore, icona: CalendarDays },
        { label: t.durata, value: paese.durataConsigliata, icona: Clock },
        { label: t.budget, value: paese.budgetIndicativo, icona: Wallet },
        { label: t.stile, value: etichette(paese.stileViaggio, lingua).join(' · '), icona: Compass },
      ]}
    />
  )
}
