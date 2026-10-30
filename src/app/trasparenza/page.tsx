import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Trasparenza: link affiliati e collaborazioni',
    description:
      'Link affiliati su Make It Yours World: il prezzo per te non cambia, i consigli vengono dai viaggi fatti, i contenuti sponsorizzati sono sempre dichiarati.',
    path: '/trasparenza',
  }),
  robots: { index: true, follow: true },
}

const PROSA =
  'prose prose-neutral max-w-3xl prose-headings:font-display prose-headings:font-medium prose-headings:text-alpine prose-p:text-stone prose-li:text-stone prose-strong:text-ink prose-strong:font-semibold prose-a:text-rosso prose-a:no-underline hover:prose-a:underline'

const PARTNER: { nome: string; programma: string; cosa: string }[] = [
  { nome: 'Booking.com', programma: 'Booking.com Affiliate Partner Programme', cosa: 'alloggi' },
  { nome: 'Trip.com', programma: 'Trip.com Affiliate', cosa: 'alloggi e treni, soprattutto in Asia' },
  { nome: 'GetYourGuide', programma: 'GetYourGuide Partner', cosa: 'tour, ingressi ed esperienze' },
  { nome: 'Viator', programma: 'Viator Partner (Tripadvisor)', cosa: 'tour ed esperienze' },
  { nome: 'Amazon', programma: 'Amazon EU Associates (Amazon.it)', cosa: 'guide, libri e attrezzatura da viaggio' },
  { nome: 'Heymondo', programma: 'programma di affiliazione Heymondo', cosa: 'assicurazione di viaggio' },
  { nome: 'Airalo', programma: 'programma di affiliazione Airalo', cosa: 'eSIM per internet all’estero' },
  { nome: 'Holafly', programma: 'programma di affiliazione Holafly', cosa: 'eSIM per internet all’estero' },
  { nome: 'DiscoverCars', programma: 'programma di affiliazione DiscoverCars', cosa: 'noleggio auto' },
  { nome: 'Skyscanner', programma: 'programma di affiliazione Skyscanner', cosa: 'ricerca voli' },
]

export default function TrasparenzaPage() {
  const email: string = siteConfig.contact.email
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Trasparenza' }]}
        title="Trasparenza: link affiliati e collaborazioni"
        lead={
          <p>
            Il blog si mantiene anche con qualche link affiliato. Qui spiego come funzionano, cosa cambia per te (niente) e
            come scelgo cosa consigliare.
          </p>
        }
      />
      <section className="py-16">
        <Container>
          <div className={PROSA}>
            <p>
              <em>Ultimo aggiornamento: 30 ottobre 2026</em>
            </p>

            <h2>Come funzionano i link affiliati</h2>
            <p>
              Alcuni link verso alloggi, tour, voli, noleggi, assicurazioni, eSIM e prodotti sono link di affiliazione: se
              clicchi e poi prenoti o compri, il sito partner può riconoscermi una piccola commissione. Questi link portano
              l&apos;attributo <code>rel=&quot;sponsored&quot;</code>, come chiede Google, e li trovi soprattutto nei riquadri
              «Organizza questo viaggio» delle pagine.
            </p>
            <p>
              <strong>Per te il prezzo non cambia.</strong> Paghi esattamente quello che pagheresti andando sul sito
              direttamente: la commissione la paga il partner, non tu. Non sei obbligato a usare questi link, e i consigli
              valgono anche se prenoti altrove.
            </p>
            <p>
              Alcune iscrizioni ai programmi sono ancora in corso: finché un programma non è attivo, il link porta comunque alla
              pagina giusta del partner, ma senza alcun compenso per me.
            </p>

            <h2>Da dove vengono i consigli</h2>
            <p>
              Quello che trovi qui nasce dai viaggi che ho fatto davvero: gli itinerari, gli alloggi, le esperienze e
              l&apos;attrezzatura sono quelli che ho usato o che ho valutato organizzando quei viaggi. Una commissione non decide
              cosa consiglio né in che ordine: se qualcosa non mi è piaciuto lo scrivo, anche quando c&apos;è un link affiliato,
              e non metto link affiliati a cose che non consiglierei a un amico.
            </p>

            <h2>Amazon</h2>
            <p>
              <strong>In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti idonei.</strong> I link verso
              Amazon.it fanno parte del programma Amazon EU Associates.
            </p>

            <h2>Contenuti sponsorizzati e collaborazioni</h2>
            <p>
              Ad oggi sul sito non ci sono articoli sponsorizzati. Se in futuro un viaggio, un soggiorno, un prodotto o un
              servizio mi verrà offerto gratis o pagato da un&apos;azienda, lo dirò in modo chiaro all&apos;inizio del contenuto
              (per esempio «Contenuto sponsorizzato» o «Soggiorno offerto da…»), non nascosto in fondo. Le opinioni restano
              mie, e nessun partner può rivedere o approvare quello che scrivo prima della pubblicazione.
            </p>
            <p>
              Cerco di seguire il principio, comune al Codice del consumo, alle indicazioni dell&apos;Autorità Garante della
              Concorrenza e del Mercato (AGCM) e alla Digital Chart dell&apos;Istituto dell&apos;Autodisciplina Pubblicitaria,
              per cui la comunicazione commerciale deve essere sempre riconoscibile come tale.
            </p>
            <p>
              Per proposte di collaborazione puoi scrivere a{' '}
              {email ? (
                <a href={`mailto:${email}`}>{email}</a>
              ) : (
                <mark className="bg-rosso/10 px-1 text-rosso">[email da inserire]</mark>
              )}
              .
            </p>

            <h2>Programmi di affiliazione</h2>
            <p>Questi sono i partner verso cui il sito può avere link di affiliazione:</p>
            <ul>
              {PARTNER.map((p) => (
                <li key={p.nome}>
                  <strong>{p.nome}</strong>, {p.programma}: {p.cosa}
                </li>
              ))}
            </ul>
            <p>
              Cosa succede ai tuoi dati quando clicchi uno di questi link è spiegato nell&apos;
              <Link href="/privacy">informativa privacy</Link> e nella <Link href="/cookie">cookie policy</Link>.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
