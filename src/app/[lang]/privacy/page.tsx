import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Informativa privacy',
    description:
      'Chi tratta i dati su Make It Yours World, quali (solo log tecnici ed email di chi scrive), perché, per quanto tempo e come esercitare i tuoi diritti.',
    path: '/privacy',
  }),
  robots: { index: false, follow: true },
}

const PROSA =
  'prose prose-neutral max-w-3xl prose-headings:font-display prose-headings:font-medium prose-headings:text-alpine prose-p:text-stone prose-li:text-stone prose-strong:text-ink prose-strong:font-semibold prose-a:text-rosso prose-a:no-underline hover:prose-a:underline'

/** Finché il dato non è in site-config si vede un segnaposto evidente, mai un campo vuoto. */
function DaInserire({ valore, segnaposto }: { valore: string; segnaposto: string }) {
  if (valore) return <>{valore}</>
  return <mark className="bg-rosso/10 px-1 text-rosso">[{segnaposto} da inserire]</mark>
}

function Email() {
  const email: string = siteConfig.contact.email
  return email ? <a href={`mailto:${email}`}>{email}</a> : <DaInserire valore="" segnaposto="email" />
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]}
        title="Informativa privacy"
        lead={
          <p>
            Questo è un blog di viaggio personale: niente account, moduli, newsletter, commenti, pubblicità o statistiche.
            Qui sotto trovi i pochi dati che passano comunque dal sito e cosa ne succede.
          </p>
        }
      />
      <section className="py-16">
        <Container>
          <div className={PROSA}>
            <p>
              <em>Ultimo aggiornamento: 30 ottobre 2026</em>
            </p>
            <p>
              Informativa resa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR) a chi visita{' '}
              <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, '')}</a>.
            </p>

            <h2>1. Titolare del trattamento</h2>
            <p>
              Titolare è <strong>{siteConfig.titolare.nome}</strong>, persona fisica, che cura il sito a titolo personale.
              <br />
              Recapito: <DaInserire valore={siteConfig.titolare.indirizzo} segnaposto="indirizzo" />
              <br />
              Email: <Email />
            </p>
            <p>Il titolare non è tenuto a nominare un responsabile della protezione dei dati (DPO) e non l&apos;ha nominato.</p>

            <h2>2. Quali dati trattiamo</h2>
            <h3>Dati tecnici di navigazione</h3>
            <p>
              Quando apri una pagina, il server che ospita il sito registra in automatico alcuni dati tecnici: indirizzo IP,
              data e ora della richiesta, pagina richiesta, codice di risposta, browser e sistema operativo (user agent),
              pagina di provenienza. Sono i normali log di qualsiasi sito web. Non li usiamo per profilarti né per sapere chi
              sei, e non li incrociamo con altri dati.
            </p>
            <h3>Dati che ci mandi tu per email</h3>
            <p>
              Se scrivi all&apos;indirizzo email del sito, riceviamo il tuo indirizzo, il nome se lo indichi e quello che scrivi nel
              messaggio. Ti chiediamo di non inviare dati particolari (per esempio sulla salute) se non servono.
            </p>
            <h3>Cosa non trattiamo</h3>
            <p>
              Il sito non usa cookie, strumenti di statistica, pixel pubblicitari o di social network, mappe o video incorporati
              da altri servizi. Font, foto e video sono ospitati sul sito stesso, quindi aprire una pagina non manda richieste a
              Google o ad altri terzi. Per l&apos;unica informazione salvata nel browser vedi la{' '}
              <Link href="/cookie">cookie policy</Link>.
            </p>

            <h2>3. Finalità e basi giuridiche</h2>
            <ul>
              <li>
                <strong>Far funzionare il sito e proteggerlo</strong> (consegnare le pagine, prevenire abusi e attacchi,
                risolvere errori) con i dati tecnici di navigazione. Base giuridica: legittimo interesse del titolare alla
                sicurezza e al funzionamento del sito (art. 6, par. 1, lett. f GDPR).
              </li>
              <li>
                <strong>Rispondere a chi scrive</strong>, comprese le proposte di collaborazione. Base giuridica: esecuzione di
                misure richieste dall&apos;interessato (art. 6, par. 1, lett. b) o, per i semplici messaggi, il legittimo
                interesse a rispondere (art. 6, par. 1, lett. f).
              </li>
            </ul>
            <p>Non c&apos;è alcun processo decisionale automatizzato né profilazione.</p>

            <h2>4. Per quanto tempo</h2>
            <ul>
              <li>
                <strong>Log tecnici:</strong> conservati dal fornitore di hosting per il periodo limitato previsto dal suo
                servizio e poi cancellati in automatico; non ne facciamo copie.
              </li>
              <li>
                <strong>Email:</strong> per il tempo necessario a gestire la richiesta e poi cancellate, al più tardi entro 24
                mesi dall&apos;ultimo scambio, salvo che servano per tutelare un diritto in giudizio.
              </li>
            </ul>

            <h2>5. Chi riceve i dati</h2>
            <p>
              I dati non vengono venduti né ceduti. Li tratta per nostro conto, come responsabile del trattamento (art. 28
              GDPR):
            </p>
            <ul>
              <li>
                <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, USA, che ospita il sito e ne
                registra i log tecnici (
                <a href="https://vercel.com/legal/privacy-policy" rel="noopener noreferrer" target="_blank">
                  privacy policy di Vercel
                </a>
                ).
              </li>
              <li>Il fornitore della casella di posta usata per l&apos;indirizzo email del sito, solo per i messaggi ricevuti.</li>
            </ul>
            <p>I dati possono essere comunicati alle autorità solo se lo impone la legge.</p>

            <h2>6. Trasferimento fuori dall&apos;Unione europea</h2>
            <p>
              Vercel è una società statunitense e i dati tecnici possono essere trattati negli Stati Uniti. Vercel aderisce
              all&apos;EU-U.S. Data Privacy Framework: il trasferimento si basa sulla decisione di adeguatezza della Commissione
              europea del 10 luglio 2023 (art. 45 GDPR).
            </p>

            <h2>7. I tuoi diritti</h2>
            <p>In qualsiasi momento puoi chiedere al titolare, scrivendo all&apos;indirizzo email indicato sopra:</p>
            <ul>
              <li>l&apos;accesso ai tuoi dati e una copia (art. 15);</li>
              <li>la rettifica dei dati inesatti (art. 16);</li>
              <li>la cancellazione (art. 17);</li>
              <li>la limitazione del trattamento (art. 18);</li>
              <li>la portabilità dei dati che ci hai fornito (art. 20);</li>
              <li>
                di <strong>opporti</strong> al trattamento basato sul legittimo interesse, per motivi legati alla tua situazione
                particolare (art. 21).
              </li>
            </ul>
            <p>
              Rispondiamo entro un mese (art. 12). Considera che dai soli log tecnici spesso non è possibile risalire a una
              persona: in quel caso potremmo chiederti qualche informazione in più per trovare i dati che ti riguardano.
            </p>
            <p>
              Se ritieni che il trattamento violi il GDPR puoi proporre reclamo al{' '}
              <a href="https://www.garanteprivacy.it" rel="noopener noreferrer" target="_blank">
                Garante per la protezione dei dati personali
              </a>{' '}
              (art. 77) o all&apos;autorità del Paese UE in cui vivi o lavori, oppure rivolgerti al giudice.
            </p>

            <h2>8. Link affiliati e siti di terzi</h2>
            <p>
              Molte pagine contengono link verso siti esterni: prenotazioni di alloggi ed esperienze, voli, noleggio auto,
              assicurazioni di viaggio, eSIM, libri e attrezzatura (per esempio Booking.com, Trip.com, GetYourGuide, Viator,
              Amazon, Heymondo, Airalo, Holafly, DiscoverCars, Skyscanner). Alcuni sono link di affiliazione, spiegati nella
              pagina <Link href="/trasparenza">Trasparenza</Link>.
            </p>
            <p>
              Il nostro sito non passa a questi partner alcun dato su di te. Quando clicchi e arrivi sul loro sito, sono loro a
              raccogliere i dati (anche con i propri cookie, per esempio per riconoscere che arrivi da qui) come titolari
              autonomi, secondo le loro informative privacy e cookie, che ti invitiamo a leggere. Non abbiamo controllo su quei
              trattamenti.
            </p>

            <h2>9. Modifiche</h2>
            <p>
              Se il sito cambia (per esempio con l&apos;aggiunta di statistiche, pubblicità, newsletter o un modulo di contatto)
              questa informativa verrà aggiornata prima che il cambiamento sia attivo, e la data in cima alla pagina lo
              indicherà.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
