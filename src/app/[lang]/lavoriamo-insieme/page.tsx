import type { Metadata } from 'next'
import Link from '@/components/ui/Link'
import { Compass, FileDown, Users, Handshake, Mail, CalendarDays } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { bookingPubblico, emailPubblica } from '@/lib/site-config'
import { linguaCorrente } from '@/lib/i18n/server'
import { ISTITUZIONALE } from '@/lib/i18n/sito'
import type { Lingua } from '@/lib/i18n/config'

/*
 * Servizi di Rick. Consulenza ≠ vendita: niente pacchetti, niente prenotazioni fatte per conto
 * del lettore. I pulsanti compaiono solo con i contatti accesi in site-config (contactEnabled):
 * finché sono spenti la pagina spiega i servizi e dice soltanto che i contatti arriveranno.
 */

type Proposta = { titolo: string; testo: string; oggetto?: string; link?: { href: string; testo: string } }

const T: Record<
  Lingua,
  {
    titolo: string
    desc: string
    crumb: string
    h1: string
    lead: string
    proposte: Proposta[]
    nonFaccioTitolo: string
    nonFaccio: string
    scrivimi: string
    prenota: string
    comeFunzionano: string
    trasparenza: string
  }
> = {
  it: {
    titolo: 'Lavoriamo insieme: consulenza per il tuo itinerario e collaborazioni',
    desc: 'Una consulenza per costruire il tuo itinerario a partire dai viaggi del sito, idee per i gruppi, le guide PDF gratuite e le collaborazioni con enti del turismo e strutture. Niente pacchetti in vendita.',
    crumb: 'Lavoriamo insieme',
    h1: 'Lavoriamo insieme',
    lead: 'Ogni itinerario del sito nasce da luoghi che ho visitato e da esperienze che ho vissuto. Se vuoi usarli come base per il tuo viaggio, o hai un progetto da propormi, ecco cosa posso fare.',
    proposte: [
      {
        titolo: 'Consulenza per il tuo itinerario',
        testo:
          'Mi racconti date, budget e cosa ti piace fare; ti aiuto a costruire un itinerario giorno per giorno come quelli del sito, con tappe, spostamenti, dove dormire, costi indicativi e gli errori da evitare. Le prenotazioni restano tue: le fai tu, dove preferisci.',
        oggetto: 'Consulenza itinerario',
      },
      {
        titolo: 'Un itinerario per il tuo gruppo',
        testo:
          'Niente partenze a calendario né viaggi organizzati: se siete un gruppo di amici, una famiglia o un’associazione, vi aiuto a progettare il percorso adatto a voi, dalle date alle tappe.',
        oggetto: 'Itinerario per un gruppo',
      },
      {
        titolo: 'Guide PDF da portare in viaggio',
        testo:
          'Per diversi viaggi c’è già una guida PDF gratuita, da stampare o tenere sul telefono: la trovi nella pagina del viaggio, dove disponibile.',
        link: { href: '/viaggi', testo: 'Tutti i viaggi' },
      },
      {
        titolo: 'Collaborazioni',
        testo:
          'Enti del turismo, strutture e operatori: racconto posti che visito di persona, e ogni contenuto sponsorizzato è segnalato come tale, all’inizio della pagina.',
        oggetto: 'Collaborazione',
      },
    ],
    nonFaccioTitolo: 'Cosa non faccio',
    nonFaccio:
      'Non sono un’agenzia di viaggi né un tour operator: non vendo pacchetti, non prenoto voli, alloggi o tour al posto tuo e non incasso pagamenti per servizi di altri.',
    scrivimi: 'Scrivimi',
    prenota: 'Fissa una consulenza',
    comeFunzionano: 'Come funzionano link affiliati e collaborazioni:',
    trasparenza: 'trasparenza',
  },
  en: {
    titolo: "Let's Work Together: Itinerary Consulting and Collaborations",
    desc: 'A consultation to build your itinerary from the trips on the site, ideas for groups, the free PDF guides and collaborations with tourism boards and hotels. No packages for sale.',
    crumb: "Let's work together",
    h1: "Let's work together",
    lead: 'Every itinerary on the site is rooted in places I have visited and experiences I have lived. If you want to use them as the basis for your own trip, or you have a project to propose, here is what I can do.',
    proposte: [
      {
        titolo: 'A consultation for your itinerary',
        testo:
          'You tell me your dates, budget and what you like to do; I help you build a day-by-day itinerary like the ones on the site, with stops, transfers, where to sleep, indicative costs and the mistakes to avoid. Bookings stay yours: you make them yourself, wherever you prefer.',
        oggetto: 'Itinerary consultation',
      },
      {
        titolo: 'An itinerary for your group',
        testo:
          'No scheduled departures or organized tours: if you are a group of friends, a family or an association, I help you plan the route that suits you, from the dates to the stops.',
        oggetto: 'Itinerary for a group',
      },
      {
        titolo: 'PDF guides to take on the road',
        testo:
          'Several trips already have a free PDF guide, to print or keep on your phone: you will find it on the trip page, where available.',
        link: { href: '/viaggi', testo: 'All trips' },
      },
      {
        titolo: 'Collaborations',
        testo:
          'Tourism boards, hotels and operators: I write about places I visit in person, and every sponsored piece of content is labeled as such, at the top of the page.',
        oggetto: 'Collaboration',
      },
    ],
    nonFaccioTitolo: 'What I do not do',
    nonFaccio:
      'I am not a travel agency or a tour operator: I do not sell packages, I do not book flights, accommodation or tours on your behalf and I do not take payments for other people’s services.',
    scrivimi: 'Write to me',
    prenota: 'Book a consultation',
    comeFunzionano: 'How affiliate links and collaborations work:',
    trasparenza: 'transparency',
  },
  es: {
    titolo: 'Trabajemos juntos: asesoría para tu itinerario y colaboraciones',
    desc: 'Una asesoría para construir tu itinerario a partir de los viajes del sitio, ideas para grupos, las guías PDF gratuitas y las colaboraciones con entes de turismo y alojamientos. Sin paquetes a la venta.',
    crumb: 'Trabajemos juntos',
    h1: 'Trabajemos juntos',
    lead: 'Cada itinerario del sitio nace de lugares que he visitado y de experiencias que he vivido. Si quieres usarlos como base para tu viaje, o tienes un proyecto que proponerme, esto es lo que puedo hacer.',
    proposte: [
      {
        titolo: 'Asesoría para tu itinerario',
        testo:
          'Me cuentas fechas, presupuesto y lo que te gusta hacer; te ayudo a construir un itinerario día a día como los del sitio, con etapas, desplazamientos, dónde dormir, costes orientativos y los errores que evitar. Las reservas siguen siendo tuyas: las haces tú, donde prefieras.',
        oggetto: 'Asesoría de itinerario',
      },
      {
        titolo: 'Un itinerario para tu grupo',
        testo:
          'Nada de salidas en calendario ni viajes organizados: si sois un grupo de amigos, una familia o una asociación, os ayudo a diseñar la ruta que os encaja, de las fechas a las paradas.',
        oggetto: 'Itinerario para un grupo',
      },
      {
        titolo: 'Guías PDF para llevar de viaje',
        testo:
          'Varios viajes ya tienen una guía PDF gratuita, para imprimir o llevar en el móvil: la encuentras en la página del viaje, donde esté disponible.',
        link: { href: '/viaggi', testo: 'Todos los viajes' },
      },
      {
        titolo: 'Colaboraciones',
        testo:
          'Entes de turismo, alojamientos y operadores: cuento lugares que visito en persona, y todo contenido patrocinado se señala como tal, al principio de la página.',
        oggetto: 'Colaboración',
      },
    ],
    nonFaccioTitolo: 'Lo que no hago',
    nonFaccio:
      'No soy una agencia de viajes ni un turoperador: no vendo paquetes, no reservo vuelos, alojamientos ni tours en tu nombre y no cobro pagos por servicios de otros.',
    scrivimi: 'Escríbeme',
    prenota: 'Reserva una asesoría',
    comeFunzionano: 'Cómo funcionan los enlaces de afiliación y las colaboraciones:',
    trasparenza: 'transparencia',
  },
}

const ICONE = [Compass, Users, FileDown, Handshake]

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({ title: t.titolo, description: t.desc, path: '/lavoriamo-insieme', lingua })
}

/** mailto con oggetto, solo se l'email pubblica è attiva in site-config. */
const mailto = (oggetto: string) =>
  emailPubblica ? `mailto:${emailPubblica}?subject=${encodeURIComponent(oggetto)}` : null

export default async function LavoriamoInsiemePage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const contattiAccesi = Boolean(emailPubblica || bookingPubblico)
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: t.crumb }]}
        eyebrow="Make It Yours World"
        title={t.h1}
        lead={<p>{t.lead}</p>}
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {t.proposte.map((p, i) => {
              const href = p.oggetto ? mailto(p.oggetto) : null
              const Icona = ICONE[i]
              return (
                <article key={p.titolo} className="flex flex-col border-2 border-ink bg-white p-6">
                  <Icona size={26} aria-hidden="true" className="text-rosso" />
                  <h2 className="mt-4 font-display text-2xl text-ink">{p.titolo}</h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-stone">{p.testo}</p>
                  {p.link && (
                    <Link href={p.link.href} className="btn btn-secondario mt-6 self-start">
                      {p.link.testo}
                    </Link>
                  )}
                  {href && (
                    <a href={href} className="btn btn-primario mt-6 self-start">
                      <Mail size={16} aria-hidden="true" />
                      {t.scrivimi}
                    </a>
                  )}
                </article>
              )
            })}
          </div>

          <div className="mt-10 max-w-3xl border-l-4 border-rosso pl-5">
            <h2 className="font-display text-xl text-ink">{t.nonFaccioTitolo}</h2>
            <p className="mt-2 text-base leading-relaxed text-stone">{t.nonFaccio}</p>
          </div>

          {contattiAccesi ? (
            bookingPubblico && (
              <a href={bookingPubblico} rel="noopener noreferrer" className="btn btn-primario mt-10">
                <CalendarDays size={16} aria-hidden="true" />
                {t.prenota}
              </a>
            )
          ) : (
            <p className="mt-10 text-sm text-stone">{ISTITUZIONALE[lingua].contattiPresto}</p>
          )}

          <p className="mt-6 text-sm text-stone">
            {t.comeFunzionano}{' '}
            <Link href="/trasparenza" className="underline underline-offset-2 hover:text-rosso">
              {t.trasparenza}
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  )
}
