import type { Metadata } from 'next'
import Link from 'next/link'
import { Compass, Map, Mail, Users, Handshake } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Lavoriamo insieme: viaggi su misura e collaborazioni',
  description:
    'Un itinerario costruito sul tuo viaggio, i viaggi di gruppo con Rick e le collaborazioni con enti del turismo, strutture e operatori.',
  path: '/lavoriamo-insieme',
})

const PROPOSTE = [
  {
    icona: Compass,
    titolo: 'Il tuo itinerario su misura',
    testo:
      'Mi racconti date, budget e cosa ti piace fare; io ti preparo un itinerario giorno per giorno come quelli del sito, con tappe, alloggi, spostamenti, costi e gli errori da evitare.',
    azione: 'Chiedi un itinerario',
    oggetto: 'Itinerario su misura',
  },
  {
    icona: Map,
    titolo: 'Itinerari pronti e mappe',
    testo:
      'Le guide del sito in versione da portare in viaggio: PDF da stampare o tenere sul telefono e liste di Google Maps con tutti i posti già salvati.',
    azione: 'Avvisami quando escono',
    oggetto: 'Itinerari in PDF e mappe',
  },
  {
    icona: Users,
    titolo: 'Un viaggio per il tuo gruppo, su richiesta',
    testo:
      'Niente partenze a calendario: se siete un gruppo di amici, una famiglia o un\'associazione, costruiamo insieme un viaggio su misura per voi, dalle date alle tappe.',
    azione: 'Chiedi una proposta',
    oggetto: 'Viaggio su misura per un gruppo',
  },
  {
    icona: Handshake,
    titolo: 'Collaborazioni',
    testo:
      'Enti del turismo, strutture e operatori: racconto solo posti che visito di persona, e ogni contenuto sponsorizzato è segnalato come tale.',
    azione: 'Proponi una collaborazione',
    oggetto: 'Collaborazione',
  },
]

/** Contatto via email: finché l'indirizzo non è in site-config, il pulsante resta un segnaposto visibile. */
function mailto(oggetto: string) {
  const email = siteConfig.contact.email
  return email ? `mailto:${email}?subject=${encodeURIComponent(oggetto)}` : undefined
}

export default function LavoriamoInsiemePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Lavoriamo insieme' }]}
        eyebrow="Make It Yours World"
        title="Lavoriamo insieme"
        lead={
          <p>
            Dietro ogni itinerario del sito c&apos;è un viaggio fatto davvero. Se vuoi il tuo, costruito su misura, o hai un
            progetto da proporre, ecco come.
          </p>
        }
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {PROPOSTE.map((p) => {
              const href = mailto(p.oggetto)
              return (
                <article key={p.titolo} className="flex flex-col border-2 border-ink bg-white p-6">
                  <p.icona size={26} aria-hidden="true" className="text-rosso" />
                  <h2 className="mt-4 font-display text-2xl text-ink">{p.titolo}</h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-stone">{p.testo}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 self-start bg-rosso px-5 py-2.5 text-sm font-semibold text-cream hover:bg-rosso-dark"
                    >
                      <Mail size={16} aria-hidden="true" />
                      {p.azione}
                    </a>
                  ) : (
                    <p className="mt-6 self-start border border-dashed border-ink/30 px-4 py-2 text-sm text-stone">
                      {p.azione}: [email da inserire]
                    </p>
                  )}
                </article>
              )
            })}
          </div>
          <p className="mt-10 text-sm text-stone">
            Come funzionano link affiliati e collaborazioni:{' '}
            <Link href="/trasparenza" className="underline underline-offset-2 hover:text-rosso">
              trasparenza
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  )
}
