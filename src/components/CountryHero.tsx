import { ArrowRight, CalendarDays, Clock, Compass, Wallet } from 'lucide-react'
import { InfoPratiche } from './scheda/Blocchi'
import { HeaderAction, HeaderFacts, PageHeader } from './ui/PageHeader'
import type { Media } from './ui/HeaderMedia'
import { copertina as copertinaViaggio } from '@/lib/i18n/contenuti'
import { creditiCopertine } from '@/content/viaggi-copertine-crediti'
import type { Paese } from '@/lib/types'
import { linguaCorrente } from '@/lib/i18n/server'
import { etichetta, etichette } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: { home: 'Home', destinazioni: 'Destinazioni', periodo: 'Periodo migliore', durata: 'Durata consigliata', budget: 'Budget indicativo', stile: 'Stile di viaggio', itinerario: 'Scopri il mio itinerario', esplora: 'Esplora le destinazioni', inBreve: 'In breve' },
  en: { home: 'Home', destinazioni: 'Destinations', periodo: 'Best time to go', durata: 'Recommended length', budget: 'Rough budget', stile: 'Travel style', itinerario: 'See my itinerary', esplora: 'Explore the destinations', inBreve: 'At a glance' },
  es: { home: 'Inicio', destinazioni: 'Destinos', periodo: 'Mejor época', durata: 'Duración recomendada', budget: 'Presupuesto orientativo', stile: 'Estilo de viaje', itinerario: 'Descubre mi itinerario', esplora: 'Explora los destinos', inBreve: 'En breve' },
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
}: {
  paese: Paese
  tripHref: string
  destinazioniHref: string
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

  const facts = [
    { label: t.periodo, value: paese.periodoMigliore, icona: CalendarDays },
    { label: t.durata, value: paese.durataConsigliata, icona: Clock },
    { label: t.budget, value: paese.budgetIndicativo, icona: Wallet },
    { label: t.stile, value: etichette(paese.stileViaggio, lingua).join(' · '), icona: Compass },
  ]

  return (
    <>
      <PageHeader
        crumbs={[{ label: t.home, href: '/' }, { label: t.destinazioni, href: '/destinazioni' }, { label: paese.nome }]}
        eyebrow={etichetta(paese.continente, lingua)}
        title={paese.nome}
        lead={<p>{paese.descrizione}</p>}
        meta={media ? undefined : <HeaderFacts items={facts} />}
        actions={
          <>
            <HeaderAction href={tripHref}>
              {t.itinerario}
              <ArrowRight size={16} aria-hidden="true" />
            </HeaderAction>
            {media ? (
              <a
                href={destinazioniHref}
                className="text-[0.95rem] font-semibold text-cream underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-cream/80"
              >
                {t.esplora}
              </a>
            ) : (
              <HeaderAction href={destinazioniHref} secondary>
                {t.esplora}
              </HeaderAction>
            )}
          </>
        }
        media={media}
        pieno
        credito={credito}
      />
      {media && <InfoPratiche titolo={t.inBreve} voci={facts} />}
    </>
  )
}
