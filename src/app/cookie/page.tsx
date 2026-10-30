import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Cookie policy',
    description:
      'Make It Yours World non usa cookie né strumenti di tracciamento: salva solo un dato tecnico nel browser per la durata della visita. Ecco quale e perché.',
    path: '/cookie',
  }),
  robots: { index: false, follow: true },
}

const PROSA =
  'prose prose-neutral max-w-3xl prose-headings:font-display prose-headings:font-medium prose-headings:text-alpine prose-p:text-stone prose-li:text-stone prose-strong:text-ink prose-strong:font-semibold prose-a:text-rosso prose-a:no-underline hover:prose-a:underline prose-th:text-ink prose-td:text-stone'

export default function CookiePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Cookie' }]}
        title="Cookie policy"
        lead={
          <p>
            In breve: il sito non usa cookie e non ti traccia. Per questo non vedi nessun banner da accettare.
          </p>
        }
      />
      <section className="py-16">
        <Container>
          <div className={PROSA}>
            <p>
              <em>Ultimo aggiornamento: 30 ottobre 2026</em>
            </p>

            <h2>Nessun cookie, nessun tracciamento</h2>
            <p>
              Il sito non imposta cookie, né tecnici né di profilazione, e non usa strumenti di statistica, pixel pubblicitari,
              pulsanti social o contenuti incorporati da altri servizi (mappe, video, font esterni). Font, foto e video sono
              ospitati sul sito stesso, quindi aprendo una pagina il tuo browser non contatta terze parti.
            </p>

            <h2>L&apos;unico dato salvato nel browser</h2>
            <p>
              Il sito usa una sola voce nel <strong>sessionStorage</strong> del browser, uno spazio tecnico simile a un cookie
              ma che non viene mai inviato al server e che il browser cancella da solo quando chiudi la scheda.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>A cosa serve</th>
                  <th>Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>marchio</code>
                  </td>
                  <td>sessionStorage, tecnico</td>
                  <td>
                    Ricorda che l&apos;animazione del logo «scritto a macchina» è già stata mostrata, così non si ripete a ogni
                    pagina. Contiene solo il valore «1», nessun dato su di te.
                  </td>
                  <td>Fino alla chiusura della scheda</td>
                </tr>
              </tbody>
            </table>
            <p>
              Se il browser blocca questo spazio il sito funziona lo stesso: l&apos;animazione si ripete e basta. Puoi
              cancellarlo in qualsiasi momento dalle impostazioni del browser (dati dei siti).
            </p>

            <h2>Perché non c&apos;è il banner</h2>
            <p>
              Secondo l&apos;art. 122 del Codice privacy e le{' '}
              <a
                href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876"
                rel="noopener noreferrer"
                target="_blank"
              >
                Linee guida cookie e altri strumenti di tracciamento
              </a>{' '}
              del Garante (10 giugno 2021), il consenso serve solo per i cookie e gli strumenti di tracciamento non tecnici. Gli
              strumenti strettamente necessari a fornire il servizio richiesto dall&apos;utente si possono usare senza consenso,
              dandone informazione. La voce <code>marchio</code> rientra in questa categoria: è tecnica, dura una sola visita e
              non serve a riconoscerti né a profilarti. Per questo non chiediamo alcun consenso.
            </p>

            <h2>Siti esterni raggiunti dai link</h2>
            <p>
              Le pagine contengono link a siti di terzi, tra cui partner di affiliazione come Booking.com, Trip.com,
              GetYourGuide, Viator, Amazon, Heymondo, Airalo, Holafly, DiscoverCars e Skyscanner (vedi{' '}
              <Link href="/trasparenza">Trasparenza</Link>). Finché resti su questo sito nessuno di loro riceve dati. Quando
              clicchi un link ed entri nel loro sito, sono loro a impostare i propri cookie, anche per riconoscere che arrivi da
              qui, secondo le loro cookie policy e con i loro banner di consenso.
            </p>

            <h2>Se in futuro cambia qualcosa</h2>
            <p>
              Se un giorno aggiungeremo statistiche, pubblicità o altri strumenti di terze parti, aggiorneremo questa pagina e{' '}
              <Link href="/privacy">l&apos;informativa privacy</Link> e, dove la legge lo richiede, mostreremo un banner per
              chiedere il tuo consenso prima di attivarli.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
