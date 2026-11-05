import type { Metadata } from 'next'
import Link from '@/components/ui/Link'
import { ArrowRight, Compass, Landmark, Map } from 'lucide-react'
import { HeaderAction, PageHeader } from '@/components/ui/PageHeader'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    metaTitolo: 'Pagina non trovata',
    eyebrow: 'Errore 404',
    titolo: 'Questa strada non porta da nessuna parte',
    lead: 'Il link è sbagliato, oppure la pagina ha cambiato indirizzo. Succede anche in viaggio: si torna indietro e si prende la strada giusta. Puoi anche cercare con la lente in alto.',
    home: 'Torna alla home',
    alt: 'Iceberg nella laguna glaciale di Jökulsárlón, Islanda',
    viaggi: 'Tutti i viaggi',
    viaggiTesto: 'Ottanta itinerari giorno per giorno, un continente alla volta.',
    destinazioni: 'Le destinazioni',
    destinazioniTesto: 'Paese per Paese, con la mappa e le cose da fare.',
    meraviglie: 'Le sette meraviglie',
    meraviglieTesto: 'Come arrivarci, quando andare, cosa prenotare.',
  },
  en: {
    metaTitolo: 'Page not found',
    eyebrow: 'Error 404',
    titolo: "This road doesn't lead anywhere",
    lead: 'The link is wrong, or the page has moved. It happens on the road too: you turn back and take the right way. You can also search with the magnifying glass at the top.',
    home: 'Back to the home page',
    alt: 'Iceberg in the Jökulsárlón glacier lagoon, Iceland',
    viaggi: 'All the trips',
    viaggiTesto: 'Eighty day-by-day itineraries, one continent at a time.',
    destinazioni: 'The destinations',
    destinazioniTesto: 'Country by country, with the map and things to do.',
    meraviglie: 'The seven wonders',
    meraviglieTesto: 'How to get there, when to go, what to book.',
  },
  es: {
    metaTitolo: 'Página no encontrada',
    eyebrow: 'Error 404',
    titolo: 'Este camino no lleva a ninguna parte',
    lead: 'El enlace es incorrecto o la página ha cambiado de dirección. También pasa de viaje: se da la vuelta y se toma el camino correcto. También puedes buscar con la lupa de arriba.',
    home: 'Volver al inicio',
    alt: 'Iceberg en la laguna glaciar de Jökulsárlón, Islandia',
    viaggi: 'Todos los viajes',
    viaggiTesto: 'Ochenta itinerarios día a día, un continente cada vez.',
    destinazioni: 'Los destinos',
    destinazioniTesto: 'País por país, con el mapa y las cosas que hacer.',
    meraviglie: 'Las siete maravillas',
    meraviglieTesto: 'Cómo llegar, cuándo ir, qué reservar.',
  },
} satisfies Record<Lingua, Record<string, string>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  return { title: T[lingua].metaTitolo, robots: { index: false } }
}

export default async function NotFound() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const STRADE = [
    { href: '/viaggi', icona: Map, titolo: t.viaggi, testo: t.viaggiTesto },
    { href: '/destinazioni', icona: Compass, titolo: t.destinazioni, testo: t.destinazioniTesto },
    { href: '/meraviglie', icona: Landmark, titolo: t.meraviglie, testo: t.meraviglieTesto },
  ]
  return (
    <>
      <PageHeader
        eyebrow={
          // «ERROR 404» enorme, da cartello stradale: è la prima cosa che si legge
          <span className="block font-display text-[clamp(4.5rem,16vw,11rem)] leading-[0.85] tracking-tight normal-case text-cream [text-shadow:0_4px_32px_rgb(0_0_0/0.45)]">
            ERROR <span className="text-[oklch(70%_0.16_32)]">404</span>
          </span>
        }
        title={t.titolo}
        lead={<p>{t.lead}</p>}
        actions={
          <HeaderAction href="/">
            {t.home}
            <ArrowRight size={16} aria-hidden="true" />
          </HeaderAction>
        }
        media={{ tipo: 'foto', src: '/images/copertine/islanda-2024.jpg', alt: t.alt }}
        pieno
      />
      <section className="sezione">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 sm:grid-cols-3 sm:px-8">
          {STRADE.map(({ href, icona: Icona, titolo, testo }) => (
            <Link key={href} href={href} className="group flex flex-col gap-2 border-2 border-ink bg-cream p-6 transition-colors hover:bg-ink hover:text-cream">
              <Icona size={22} aria-hidden className="text-rosso" />
              <span className="font-display text-xl">{titolo}</span>
              <span className="text-sm leading-relaxed text-stone group-hover:text-cream/80">{testo}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
