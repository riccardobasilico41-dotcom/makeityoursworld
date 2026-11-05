import type { Metadata } from 'next'
import Link from '@/components/ui/Link'
import { Compass, Map, Mail, Users, Handshake } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Lavoriamo insieme: viaggi su misura e collaborazioni',
    desc: 'Un itinerario costruito sul tuo viaggio, i viaggi di gruppo con Rick e le collaborazioni con enti del turismo, strutture e operatori.',
    crumb: 'Lavoriamo insieme',
    h1: 'Lavoriamo insieme',
    lead: "Dietro ogni itinerario del sito c'è un viaggio fatto davvero. Se vuoi il tuo, costruito su misura, o hai un progetto da proporre, ecco come.",
    emailDaInserire: '[email da inserire]',
    comeFunzionano: 'Come funzionano link affiliati e collaborazioni:',
    trasparenza: 'trasparenza',
    proposte: [
      {
        titolo: 'Il tuo itinerario su misura',
        testo:
          'Mi racconti date, budget e cosa ti piace fare; io ti preparo un itinerario giorno per giorno come quelli del sito, con tappe, alloggi, spostamenti, costi e gli errori da evitare.',
        azione: 'Chiedi un itinerario',
        oggetto: 'Itinerario su misura',
      },
      {
        titolo: 'Itinerari pronti e mappe',
        testo:
          'Le guide del sito in versione da portare in viaggio: PDF da stampare o tenere sul telefono e liste di Google Maps con tutti i posti già salvati.',
        azione: 'Avvisami quando escono',
        oggetto: 'Itinerari in PDF e mappe',
      },
      {
        titolo: 'Un viaggio per il tuo gruppo, su richiesta',
        testo:
          "Niente partenze a calendario: se siete un gruppo di amici, una famiglia o un'associazione, costruiamo insieme un viaggio su misura per voi, dalle date alle tappe.",
        azione: 'Chiedi una proposta',
        oggetto: 'Viaggio su misura per un gruppo',
      },
      {
        titolo: 'Collaborazioni',
        testo:
          'Enti del turismo, strutture e operatori: racconto solo posti che visito di persona, e ogni contenuto sponsorizzato è segnalato come tale.',
        azione: 'Proponi una collaborazione',
        oggetto: 'Collaborazione',
      },
    ],
  },
  en: {
    titolo: "Let's Work Together: Custom Trips and Collaborations",
    desc: "An itinerary built around your trip, group trips with Rick and collaborations with tourism boards, hotels and operators.",
    crumb: "Let's work together",
    h1: "Let's work together",
    lead: "Behind every itinerary on the site there is a trip I actually took. If you want your own, built to measure, or you have a project to propose, here is how.",
    emailDaInserire: '[email to be added]',
    comeFunzionano: 'How affiliate links and collaborations work:',
    trasparenza: 'transparency',
    proposte: [
      {
        titolo: 'Your custom itinerary',
        testo:
          "You tell me your dates, budget and what you like to do; I prepare a day-by-day itinerary like the ones on the site, with stops, places to stay, transfers, costs and the mistakes to avoid.",
        azione: 'Ask for an itinerary',
        oggetto: 'Custom itinerary',
      },
      {
        titolo: 'Ready-made itineraries and maps',
        testo:
          "The site's guides in a version you can take on the road: PDFs to print or keep on your phone and Google Maps lists with all the places already saved.",
        azione: 'Let me know when they are out',
        oggetto: 'PDF itineraries and maps',
      },
      {
        titolo: 'A trip for your group, on request',
        testo:
          "No scheduled departures: if you are a group of friends, a family or an association, we build a trip together just for you, from the dates to the stops.",
        azione: 'Ask for a proposal',
        oggetto: 'Custom trip for a group',
      },
      {
        titolo: 'Collaborations',
        testo:
          "Tourism boards, hotels and operators: I only write about places I visit in person, and every sponsored piece of content is labeled as such.",
        azione: 'Propose a collaboration',
        oggetto: 'Collaboration',
      },
    ],
  },
  es: {
    titolo: 'Trabajemos juntos: viajes a medida y colaboraciones',
    desc: 'Un itinerario construido sobre tu viaje, los viajes en grupo con Rick y las colaboraciones con entes de turismo, alojamientos y operadores.',
    crumb: 'Trabajemos juntos',
    h1: 'Trabajemos juntos',
    lead: 'Detrás de cada itinerario del sitio hay un viaje hecho de verdad. Si quieres el tuyo, a tu medida, o tienes un proyecto que proponer, aquí te cuento cómo.',
    emailDaInserire: '[correo electrónico por añadir]',
    comeFunzionano: 'Cómo funcionan los enlaces de afiliación y las colaboraciones:',
    trasparenza: 'transparencia',
    proposte: [
      {
        titolo: 'Tu itinerario a medida',
        testo:
          'Me cuentas fechas, presupuesto y lo que te gusta hacer; yo te preparo un itinerario día a día como los del sitio, con paradas, alojamientos, desplazamientos, costes y los errores que evitar.',
        azione: 'Pide un itinerario',
        oggetto: 'Itinerario a medida',
      },
      {
        titolo: 'Itinerarios listos y mapas',
        testo:
          'Las guías del sitio en versión para llevar de viaje: PDF para imprimir o tener en el móvil y listas de Google Maps con todos los lugares ya guardados.',
        azione: 'Avísame cuando salgan',
        oggetto: 'Itinerarios en PDF y mapas',
      },
      {
        titolo: 'Un viaje para tu grupo, bajo petición',
        testo:
          'Nada de salidas en calendario: si sois un grupo de amigos, una familia o una asociación, construimos juntos un viaje a vuestra medida, de las fechas a las paradas.',
        azione: 'Pide una propuesta',
        oggetto: 'Viaje a medida para un grupo',
      },
      {
        titolo: 'Colaboraciones',
        testo:
          'Entes de turismo, alojamientos y operadores: cuento solo lugares que visito en persona, y todo contenido patrocinado se señala como tal.',
        azione: 'Propón una colaboración',
        oggetto: 'Colaboración',
      },
    ],
  },
} satisfies Record<Lingua, Record<string, unknown>>

const ICONE = [Compass, Map, Users, Handshake]

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({ title: t.titolo, description: t.desc, path: '/lavoriamo-insieme', lingua })
}

/** Contatto via email: finché l'indirizzo non è in site-config, il pulsante resta un segnaposto visibile. */
function mailto(oggetto: string) {
  const email = siteConfig.contact.email
  return email ? `mailto:${email}?subject=${encodeURIComponent(oggetto)}` : undefined
}

export default async function LavoriamoInsiemePage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
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
              const href = mailto(p.oggetto)
              const Icona = ICONE[i]
              return (
                <article key={p.titolo} className="flex flex-col border-2 border-ink bg-white p-6">
                  <Icona size={26} aria-hidden="true" className="text-rosso" />
                  <h2 className="mt-4 font-display text-2xl text-ink">{p.titolo}</h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-stone">{p.testo}</p>
                  {href ? (
                    <a
                      href={href}
                      className="btn btn-primario mt-6 self-start"
                    >
                      <Mail size={16} aria-hidden="true" />
                      {p.azione}
                    </a>
                  ) : (
                    <p className="mt-6 self-start border border-dashed border-ink/30 px-4 py-2 text-sm text-stone">
                      {p.azione}: {t.emailDaInserire}
                    </p>
                  )}
                </article>
              )
            })}
          </div>
          <p className="mt-10 text-sm text-stone">
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
