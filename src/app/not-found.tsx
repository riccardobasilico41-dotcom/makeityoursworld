import Link from 'next/link'
import { ArrowRight, Compass, Landmark, Map } from 'lucide-react'
import { HeaderAction, PageHeader } from '@/components/ui/PageHeader'

const STRADE = [
  { href: '/viaggi', icona: Map, titolo: 'Tutti i viaggi', testo: 'Ottanta itinerari giorno per giorno, un continente alla volta.' },
  { href: '/destinazioni', icona: Compass, titolo: 'Le destinazioni', testo: 'Paese per Paese, con la mappa e le cose da fare.' },
  { href: '/meraviglie', icona: Landmark, titolo: 'Le sette meraviglie', testo: 'Come arrivarci, quando andare, cosa prenotare.' },
]

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="Errore 404"
        title="Questa strada non porta da nessuna parte"
        lead={
          <p>
            Il link è sbagliato, oppure la pagina ha cambiato indirizzo. Succede anche in viaggio: si torna indietro e si
            prende la strada giusta. Puoi anche cercare con la lente in alto.
          </p>
        }
        actions={
          <HeaderAction href="/">
            Torna alla home
            <ArrowRight size={16} aria-hidden="true" />
          </HeaderAction>
        }
        media={{ tipo: 'foto', src: '/images/copertine/islanda-2024.jpg', alt: 'Iceberg nella laguna glaciale di Jökulsárlón, Islanda' }}
        pieno
      />
      <section className="py-14 sm:py-20">
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
