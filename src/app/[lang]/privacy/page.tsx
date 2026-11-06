import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { DatiMancanti, RecapitoPrivacy } from '@/components/istituzionali/DatiMancanti'
import { pageMetadata } from '@/lib/seo'
import { domandeAttive, emailPubblica, siteConfig } from '@/lib/site-config'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

/*
 * Informativa privacy. Descrive solo quello che il sito fa davvero (verificato il 6/11/2026
 * sul codice e sul sito pubblicato: nessuna richiesta a terzi, nessuna statistica).
 * Titolare, recapito ed email arrivano da site-config: se mancano, un riquadro lo dice
 * (DatiMancanti) e il modulo delle domande resta spento (domandeAttive).
 * Le sezioni sulle email compaiono solo quando i contatti pubblici sono attivi.
 */

const T = {
  it: {
    titolo: 'Informativa privacy',
    desc: 'Chi tratta i dati su Make It Yours World, quali (log tecnici del server, nome e testo delle domande sotto i viaggi quando il modulo è aperto), perché, per quanto tempo e come esercitare i tuoi diritti.',
    crumb: 'Privacy',
    lead: 'Questo è un blog di viaggio personale: niente account, newsletter, pubblicità o statistiche. Qui sotto trovi i pochi dati che passano comunque dal sito e cosa ne succede.',
    persona: 'persona fisica, che cura il sito a titolo personale',
    nomeMancante: 'nome non ancora indicato',
  },
  en: {
    titolo: 'Privacy notice',
    desc: 'Who processes data on Make It Yours World, which data (server technical logs, name and text of the questions under the trips when the form is open), why, for how long and how to exercise your rights.',
    crumb: 'Privacy',
    lead: 'This is a personal travel blog: no accounts, newsletters, advertising or analytics. Below you will find the few data items that still pass through the site and what happens to them.',
    persona: 'a natural person, who runs the site in a personal capacity',
    nomeMancante: 'name not yet provided',
  },
  es: {
    titolo: 'Política de privacidad',
    desc: 'Quién trata los datos en Make It Yours World, cuáles (registros técnicos del servidor, nombre y texto de las preguntas bajo los viajes cuando el formulario está abierto), por qué, durante cuánto tiempo y cómo ejercer tus derechos.',
    crumb: 'Privacidad',
    lead: 'Este es un blog de viajes personal: sin cuentas, boletines, publicidad ni estadísticas. Aquí abajo encontrarás los pocos datos que pasan igualmente por el sitio y qué ocurre con ellos.',
    persona: 'persona física, que gestiona el sitio a título personal',
    nomeMancante: 'nombre aún no indicado',
  },
} satisfies Record<Lingua, Record<string, string>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return {
    ...pageMetadata({ title: t.titolo, description: t.desc, path: '/privacy', lingua }),
    robots: { index: false, follow: true },
  }
}

const PROSA =
  'prose prose-neutral max-w-3xl prose-headings:font-display prose-headings:font-medium prose-headings:text-alpine prose-p:text-stone prose-li:text-stone prose-strong:text-ink prose-strong:font-semibold prose-a:text-rosso prose-a:no-underline hover:prose-a:underline'

const VERCEL = 'https://vercel.com/legal/privacy-policy'
const GARANTE = 'https://www.garanteprivacy.it'

/** Riga del titolare: nome (se c'è), natura, indirizzo (solo se c'è), recapito privacy. */
function Titolare({ lingua, etichette }: { lingua: Lingua; etichette: { recapito: string; email: string } }) {
  const { nome, indirizzo } = siteConfig.titolare
  return (
    <p>
      <strong>{nome ?? T[lingua].nomeMancante}</strong>, {T[lingua].persona}.
      {indirizzo && (
        <>
          <br />
          {etichette.recapito}: {indirizzo}
        </>
      )}
      <br />
      {etichette.email}: <RecapitoPrivacy lingua={lingua} />
    </p>
  )
}

const CORPO: Record<Lingua, (lingua: Lingua) => ReactNode> = {
  it: (lingua) => (
    <>
      <p>
        <em>Ultimo aggiornamento: 6 novembre 2026</em>
      </p>
      <p>
        Informativa resa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR) a chi visita{' '}
        <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, '')}</a>.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <Titolare lingua={lingua} etichette={{ recapito: 'Recapito', email: 'Email per la privacy' }} />

      <h2>2. Quali dati trattiamo</h2>
      <h3>Dati tecnici di navigazione</h3>
      <p>
        Quando apri una pagina, il server che ospita il sito registra in automatico alcuni dati tecnici: indirizzo IP,
        data e ora della richiesta, pagina richiesta, codice di risposta, browser e sistema operativo (user agent),
        pagina di provenienza. Sono i normali log di qualsiasi sito web. Non li usiamo per profilarti né per sapere chi
        sei, e non li incrociamo con altri dati.
      </p>
      {emailPubblica && (
        <>
          <h3>Dati che ci mandi tu per email</h3>
          <p>
            Se scrivi all&apos;indirizzo email del sito, riceviamo il tuo indirizzo, il nome se lo indichi e quello che
            scrivi nel messaggio. Ti chiediamo di non inviare dati particolari (per esempio sulla salute) se non servono.
          </p>
        </>
      )}
      <h3 id="domande">Domande sotto i viaggi</h3>
      {!domandeAttive && (
        <p>
          <strong>Al momento il modulo è chiuso e non raccoglie nulla.</strong> Riaprirà solo quando questa informativa
          sarà completa. Quando è aperto funziona così:
        </p>
      )}
      <p>
        il modulo «Fai una domanda» in fondo a un viaggio salva il <strong>nome che scegli</strong> (anche un
        soprannome), il <strong>testo della domanda</strong>, la lingua, la pagina del viaggio e la data. Non chiede email
        né altri recapiti e non salva il tuo indirizzo IP: per frenare lo spam il server conta gli invii solo in memoria,
        con un codice ricavato dall&apos;IP che non viene scritto da nessuna parte e sparisce al più tardi dopo 24 ore. La
        domanda non è pubblica finché non la leggo e rispondo; se la pubblico, nome, domanda e risposta sono visibili a
        tutti sulla pagina del viaggio. Non scrivere nella domanda dati personali tuoi o di altri.
      </p>
      <h3>Cosa non trattiamo</h3>
      <p>
        Il sito non usa strumenti di statistica, pixel pubblicitari o di social network, mappe o video incorporati da
        altri servizi. Font, foto e video sono ospitati sul sito stesso: aprire una pagina non manda richieste a Google o
        ad altri terzi. Il cookie della lingua e le poche voci salvate nel browser (per esempio i viaggi che salvi) sono
        descritti nella <Link href="/cookie">cookie policy</Link>: restano sul tuo dispositivo e non servono a
        riconoscerti.
      </p>

      <h2>3. Finalità e basi giuridiche</h2>
      <ul>
        <li>
          <strong>Far funzionare il sito e proteggerlo</strong> (consegnare le pagine, prevenire abusi e attacchi,
          risolvere errori) con i dati tecnici di navigazione. Base giuridica: legittimo interesse del titolare alla
          sicurezza e al funzionamento del sito (art. 6, par. 1, lett. f GDPR).
        </li>
        {emailPubblica && (
          <li>
            <strong>Rispondere a chi scrive</strong>, comprese le proposte di collaborazione. Base giuridica: esecuzione
            di misure richieste dall&apos;interessato (art. 6, par. 1, lett. b) o, per i semplici messaggi, il legittimo
            interesse a rispondere (art. 6, par. 1, lett. f).
          </li>
        )}
        <li>
          <strong>Pubblicare le domande dei lettori con la risposta</strong>, quando il modulo è aperto, perché siano
          utili anche ad altri viaggiatori. Base giuridica: il tuo consenso, dato con la casella del modulo (art. 6, par.
          1, lett. a), che puoi revocare in qualsiasi momento chiedendo di togliere la domanda.
        </li>
      </ul>
      <p>Non c&apos;è alcun processo decisionale automatizzato né profilazione.</p>

      <h2>4. Per quanto tempo</h2>
      <ul>
        <li>
          <strong>Log tecnici:</strong> conservati dal fornitore di hosting per il periodo limitato previsto dal suo
          servizio e poi cancellati in automatico; non ne facciamo copie.
        </li>
        {emailPubblica && (
          <li>
            <strong>Email:</strong> per il tempo necessario a gestire la richiesta e poi cancellate, al più tardi entro
            24 mesi dall&apos;ultimo scambio, salvo che servano per tutelare un diritto in giudizio.
          </li>
        )}
        <li>
          <strong>Domande sotto i viaggi:</strong> finché la domanda resta pubblicata o finché chiedi di toglierla. Le
          domande scartate o senza risposta vengono cancellate al più tardi dopo 12 mesi.
        </li>
      </ul>

      <h2>5. Chi riceve i dati</h2>
      <p>
        I dati non vengono venduti né ceduti. Li tratta per nostro conto, come responsabile del trattamento (art. 28
        GDPR), <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, USA, che ospita il sito, ne
        registra i log tecnici e conserva le domande sotto i viaggi in un archivio privato del servizio Vercel Blob (
        <a href={VERCEL} rel="noopener noreferrer" target="_blank">
          privacy policy di Vercel
        </a>
        ).
        {emailPubblica && ' Per i messaggi ricevuti, anche il fornitore della casella di posta usata per l’email del sito.'}
      </p>
      <p>I dati possono essere comunicati alle autorità solo se lo impone la legge.</p>

      <h2>6. Trasferimento fuori dall&apos;Unione europea</h2>
      <p>
        Vercel è una società statunitense e i dati possono essere trattati negli Stati Uniti. Vercel aderisce
        all&apos;EU-U.S. Data Privacy Framework: il trasferimento si basa sulla decisione di adeguatezza della Commissione
        europea del 10 luglio 2023 (art. 45 GDPR).
      </p>

      <h2>7. I tuoi diritti</h2>
      <p>
        In qualsiasi momento puoi chiedere al titolare, al recapito indicato nella sezione 1 (
        <RecapitoPrivacy lingua={lingua} />
        ):
      </p>
      <ul>
        <li>l&apos;accesso ai tuoi dati e una copia (art. 15);</li>
        <li>la rettifica dei dati inesatti (art. 16);</li>
        <li>la cancellazione (art. 17), per esempio di una tua domanda: la togliamo dall&apos;archivio, non solo dalla pagina;</li>
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
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Garante per la protezione dei dati personali
        </a>{' '}
        (art. 77) o all&apos;autorità del Paese UE in cui vivi o lavori, oppure rivolgerti al giudice.
      </p>

      <h2>8. Link a siti di terzi</h2>
      <p>
        Molte pagine contengono link verso siti esterni: prenotazioni di alloggi ed esperienze, voli, noleggio auto,
        assicurazioni di viaggio, eSIM, libri e attrezzatura (per esempio Booking.com, Trip.com, GetYourGuide, Viator,
        Amazon, Heymondo, Airalo, Holafly, DiscoverCars, Skyscanner). Se e quando sono link di affiliazione è spiegato
        nella pagina <Link href="/trasparenza">Trasparenza</Link>.
      </p>
      <p>
        Il nostro sito non passa a questi siti alcun dato su di te. Quando clicchi e arrivi da loro, sono loro a
        raccogliere i dati (anche con i propri cookie) come titolari autonomi, secondo le loro informative privacy e
        cookie, che ti invitiamo a leggere. Non abbiamo controllo su quei trattamenti.
      </p>

      <h2>9. Modifiche</h2>
      <p>
        Se il sito cambia (per esempio con l&apos;aggiunta di statistiche, pubblicità, newsletter o un modulo di contatto)
        questa informativa verrà aggiornata prima che il cambiamento sia attivo, e la data in cima alla pagina lo
        indicherà.
      </p>
    </>
  ),
  en: (lingua) => (
    <>
      <p>
        <em>Last updated: November 6, 2026</em>
      </p>
      <p>
        Notice provided under Article 13 of Regulation (EU) 2016/679 (GDPR) to visitors of{' '}
        <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, '')}</a>.
      </p>

      <h2>1. Data controller</h2>
      <Titolare lingua={lingua} etichette={{ recapito: 'Contact address', email: 'Privacy email' }} />

      <h2>2. What data we process</h2>
      <h3>Technical browsing data</h3>
      <p>
        When you open a page, the server hosting the site automatically records some technical data: IP address, date
        and time of the request, requested page, response code, browser and operating system (user agent), referring
        page. These are the normal logs of any website. We do not use them to profile you or to find out who you are, and
        we do not combine them with other data.
      </p>
      {emailPubblica && (
        <>
          <h3>Data you send us by email</h3>
          <p>
            If you write to the site&apos;s email address, we receive your address, your name if you give it and what you
            write in the message. Please do not send special categories of data (for example about health) unless needed.
          </p>
        </>
      )}
      <h3 id="domande">Questions under the trips</h3>
      {!domandeAttive && (
        <p>
          <strong>The form is currently closed and collects nothing.</strong> It will reopen only once this notice is
          complete. When it is open it works like this:
        </p>
      )}
      <p>
        the «Ask a question» form at the bottom of a trip saves the <strong>name you choose</strong> (a nickname is
        fine), the <strong>text of the question</strong>, the language, the trip page and the date. It does not ask for an
        email or any other contact and does not store your IP address: to curb spam the server counts submissions only in
        memory, with a code derived from the IP that is never written anywhere and disappears within 24 hours at most. The
        question is not public until I read it and reply; if I publish it, name, question and answer are visible to
        everyone on the trip page. Do not include personal data about yourself or others in the question.
      </p>
      <h3>What we do not process</h3>
      <p>
        The site uses no analytics tools, advertising or social network pixels, or maps and videos embedded from other
        services. Fonts, photos and videos are hosted on the site itself: opening a page sends no requests to Google or
        other third parties. The language cookie and the few items saved in your browser (for example the trips you save)
        are described in the <Link href="/cookie">cookie policy</Link>: they stay on your device and are not used to
        recognize you.
      </p>

      <h2>3. Purposes and legal bases</h2>
      <ul>
        <li>
          <strong>Running and protecting the site</strong> (delivering pages, preventing abuse and attacks, fixing errors)
          using technical browsing data. Legal basis: the controller&apos;s legitimate interest in the security and
          operation of the site (Art. 6(1)(f) GDPR).
        </li>
        {emailPubblica && (
          <li>
            <strong>Replying to people who write</strong>, including collaboration proposals. Legal basis: steps taken
            at the request of the data subject (Art. 6(1)(b)) or, for simple messages, the legitimate interest in
            replying (Art. 6(1)(f)).
          </li>
        )}
        <li>
          <strong>Publishing readers&apos; questions with the answer</strong>, when the form is open, so they are useful to
          other travelers too. Legal basis: your consent, given with the form checkbox (Art. 6(1)(a)), which you can
          withdraw at any time by asking for the question to be removed.
        </li>
      </ul>
      <p>There is no automated decision-making or profiling.</p>

      <h2>4. How long</h2>
      <ul>
        <li>
          <strong>Technical logs:</strong> kept by the hosting provider for the limited period set by its service and then
          deleted automatically; we make no copies.
        </li>
        {emailPubblica && (
          <li>
            <strong>Emails:</strong> for as long as needed to handle the request and then deleted, at the latest within 24
            months of the last exchange, unless needed to defend a legal claim.
          </li>
        )}
        <li>
          <strong>Questions under the trips:</strong> for as long as the question stays published or until you ask for it
          to be removed. Discarded or unanswered questions are deleted within 12 months at most.
        </li>
      </ul>

      <h2>5. Who receives the data</h2>
      <p>
        Data is never sold or handed over. It is processed on our behalf, as a processor (Art. 28 GDPR), by{' '}
        <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, USA, which hosts the site, records its
        technical logs and keeps the questions under the trips in a private Vercel Blob store (
        <a href={VERCEL} rel="noopener noreferrer" target="_blank">
          Vercel privacy policy
        </a>
        ).
        {emailPubblica && ' For messages received, also the provider of the mailbox used for the site’s email.'}
      </p>
      <p>Data may be disclosed to authorities only where required by law.</p>

      <h2>6. Transfers outside the European Union</h2>
      <p>
        Vercel is a US company and data may be processed in the United States. Vercel participates in the EU-U.S. Data
        Privacy Framework: the transfer relies on the European Commission&apos;s adequacy decision of July 10, 2023 (Art.
        45 GDPR).
      </p>

      <h2>7. Your rights</h2>
      <p>
        At any time you can ask the controller, at the contact given in section 1 (
        <RecapitoPrivacy lingua={lingua} />
        ), for:
      </p>
      <ul>
        <li>access to your data and a copy (Art. 15);</li>
        <li>rectification of inaccurate data (Art. 16);</li>
        <li>erasure (Art. 17), for example of one of your questions: we remove it from the archive, not just from the page;</li>
        <li>restriction of processing (Art. 18);</li>
        <li>portability of the data you provided (Art. 20);</li>
        <li>
          and you can <strong>object</strong> to processing based on legitimate interest, on grounds relating to your
          particular situation (Art. 21).
        </li>
      </ul>
      <p>
        We reply within one month (Art. 12). Bear in mind that technical logs alone often cannot be traced back to a
        person: in that case we may ask you for some extra information to find the data concerning you.
      </p>
      <p>
        If you believe the processing breaches the GDPR you can lodge a complaint with the Italian{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Garante per la protezione dei dati personali
        </a>{' '}
        (Art. 77) or with the authority of the EU country where you live or work, or go to court.
      </p>

      <h2>8. Links to third-party sites</h2>
      <p>
        Many pages contain links to external sites: bookings for accommodation and experiences, flights, car rental,
        travel insurance, eSIMs, books and gear (for example Booking.com, Trip.com, GetYourGuide, Viator, Amazon,
        Heymondo, Airalo, Holafly, DiscoverCars, Skyscanner). Whether and when they are affiliate links is explained on
        the <Link href="/trasparenza">Transparency</Link> page.
      </p>
      <p>
        Our site passes no data about you to these sites. When you click and land on their site, they collect data (also
        with their own cookies) as independent controllers, under their own privacy and cookie policies, which we invite
        you to read. We have no control over that processing.
      </p>

      <h2>9. Changes</h2>
      <p>
        If the site changes (for example by adding analytics, advertising, a newsletter or a contact form) this notice will
        be updated before the change goes live, and the date at the top of the page will show it.
      </p>
    </>
  ),
  es: (lingua) => (
    <>
      <p>
        <em>Última actualización: 6 de noviembre de 2026</em>
      </p>
      <p>
        Información facilitada conforme al art. 13 del Reglamento (UE) 2016/679 (RGPD) a quien visita{' '}
        <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, '')}</a>.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <Titolare lingua={lingua} etichette={{ recapito: 'Dirección de contacto', email: 'Correo para la privacidad' }} />

      <h2>2. Qué datos tratamos</h2>
      <h3>Datos técnicos de navegación</h3>
      <p>
        Cuando abres una página, el servidor que aloja el sitio registra automáticamente algunos datos técnicos: dirección
        IP, fecha y hora de la solicitud, página solicitada, código de respuesta, navegador y sistema operativo (user
        agent), página de procedencia. Son los registros normales de cualquier sitio web. No los usamos para perfilarte
        ni para saber quién eres, y no los cruzamos con otros datos.
      </p>
      {emailPubblica && (
        <>
          <h3>Datos que nos envías por correo electrónico</h3>
          <p>
            Si escribes a la dirección de correo del sitio, recibimos tu dirección, tu nombre si lo indicas y lo que
            escribes en el mensaje. Te pedimos que no envíes datos de categorías especiales (por ejemplo, de salud) si no
            hacen falta.
          </p>
        </>
      )}
      <h3 id="domande">Preguntas bajo los viajes</h3>
      {!domandeAttive && (
        <p>
          <strong>Por ahora el formulario está cerrado y no recoge nada.</strong> Volverá a abrirse solo cuando esta
          política esté completa. Cuando está abierto funciona así:
        </p>
      )}
      <p>
        el formulario «Haz una pregunta» al final de un viaje guarda el <strong>nombre que eliges</strong> (también un
        apodo), el <strong>texto de la pregunta</strong>, el idioma, la página del viaje y la fecha. No pide correo
        electrónico ni otros datos de contacto y no guarda tu dirección IP: para frenar el spam, el servidor cuenta los
        envíos solo en memoria, con un código derivado de la IP que no se escribe en ninguna parte y desaparece como máximo
        a las 24 horas. La pregunta no es pública hasta que la leo y respondo; si la publico, nombre, pregunta y respuesta
        son visibles para todos en la página del viaje. No escribas en la pregunta datos personales tuyos ni de otros.
      </p>
      <h3>Lo que no tratamos</h3>
      <p>
        El sitio no usa herramientas de estadística, píxeles publicitarios o de redes sociales, ni mapas o vídeos
        incrustados de otros servicios. Las fuentes, las fotos y los vídeos están alojados en el propio sitio: abrir una
        página no envía solicitudes a Google ni a otros terceros. La cookie del idioma y los pocos datos guardados en el
        navegador (por ejemplo, los viajes que guardas) se describen en la{' '}
        <Link href="/cookie">política de cookies</Link>: se quedan en tu dispositivo y no sirven para reconocerte.
      </p>

      <h2>3. Finalidades y bases jurídicas</h2>
      <ul>
        <li>
          <strong>Hacer funcionar el sitio y protegerlo</strong> (servir las páginas, prevenir abusos y ataques, resolver
          errores) con los datos técnicos de navegación. Base jurídica: interés legítimo del responsable en la seguridad y
          el funcionamiento del sitio (art. 6.1.f RGPD).
        </li>
        {emailPubblica && (
          <li>
            <strong>Responder a quien escribe</strong>, incluidas las propuestas de colaboración. Base jurídica: aplicación
            de medidas a petición del interesado (art. 6.1.b) o, para los mensajes simples, el interés legítimo en
            responder (art. 6.1.f).
          </li>
        )}
        <li>
          <strong>Publicar las preguntas de los lectores con la respuesta</strong>, cuando el formulario está abierto,
          para que sean útiles también a otros viajeros. Base jurídica: tu consentimiento, dado con la casilla del
          formulario (art. 6.1.a), que puedes retirar en cualquier momento pidiendo que se quite la pregunta.
        </li>
      </ul>
      <p>No hay decisiones automatizadas ni elaboración de perfiles.</p>

      <h2>4. Durante cuánto tiempo</h2>
      <ul>
        <li>
          <strong>Registros técnicos:</strong> los conserva el proveedor de alojamiento durante el periodo limitado
          previsto por su servicio y luego se borran automáticamente; no hacemos copias.
        </li>
        {emailPubblica && (
          <li>
            <strong>Correos electrónicos:</strong> durante el tiempo necesario para gestionar la solicitud y después se
            borran, como máximo 24 meses después del último intercambio, salvo que sirvan para defender un derecho en
            juicio.
          </li>
        )}
        <li>
          <strong>Preguntas bajo los viajes:</strong> mientras la pregunta siga publicada o hasta que pidas quitarla. Las
          preguntas descartadas o sin respuesta se borran como máximo a los 12 meses.
        </li>
      </ul>

      <h2>5. Quién recibe los datos</h2>
      <p>
        Los datos no se venden ni se ceden. Los trata por nuestra cuenta, como encargado del tratamiento (art. 28 RGPD),{' '}
        <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, EE. UU., que aloja el sitio, registra
        sus datos técnicos y conserva las preguntas bajo los viajes en un archivo privado del servicio Vercel Blob (
        <a href={VERCEL} rel="noopener noreferrer" target="_blank">
          política de privacidad de Vercel
        </a>
        ).
        {emailPubblica && ' Para los mensajes recibidos, también el proveedor del buzón usado para el correo del sitio.'}
      </p>
      <p>Los datos solo pueden comunicarse a las autoridades si la ley lo exige.</p>

      <h2>6. Transferencias fuera de la Unión Europea</h2>
      <p>
        Vercel es una empresa estadounidense y los datos pueden tratarse en Estados Unidos. Vercel está adherida al Marco
        de Privacidad de Datos UE-EE. UU.: la transferencia se basa en la decisión de adecuación de la Comisión Europea del
        10 de julio de 2023 (art. 45 RGPD).
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        En cualquier momento puedes pedir al responsable, en el contacto indicado en la sección 1 (
        <RecapitoPrivacy lingua={lingua} />
        ):
      </p>
      <ul>
        <li>el acceso a tus datos y una copia (art. 15);</li>
        <li>la rectificación de los datos inexactos (art. 16);</li>
        <li>la supresión (art. 17), por ejemplo de una pregunta tuya: la borramos del archivo, no solo de la página;</li>
        <li>la limitación del tratamiento (art. 18);</li>
        <li>la portabilidad de los datos que nos has facilitado (art. 20);</li>
        <li>
          y puedes <strong>oponerte</strong> al tratamiento basado en el interés legítimo, por motivos relacionados con tu
          situación particular (art. 21).
        </li>
      </ul>
      <p>
        Respondemos en el plazo de un mes (art. 12). Ten en cuenta que a partir de los registros técnicos a menudo no es
        posible identificar a una persona: en ese caso podríamos pedirte algún dato más para encontrar la información que
        te concierne.
      </p>
      <p>
        Si consideras que el tratamiento infringe el RGPD puedes presentar una reclamación ante el{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Garante per la protezione dei dati personali
        </a>{' '}
        italiano (art. 77) o ante la autoridad del país de la UE en el que vives o trabajas (en España, la AEPD), o acudir
        a los tribunales.
      </p>

      <h2>8. Enlaces a sitios de terceros</h2>
      <p>
        Muchas páginas contienen enlaces a sitios externos: reservas de alojamientos y experiencias, vuelos, alquiler de
        coches, seguros de viaje, eSIM, libros y equipamiento (por ejemplo Booking.com, Trip.com, GetYourGuide, Viator,
        Amazon, Heymondo, Airalo, Holafly, DiscoverCars, Skyscanner). Si y cuándo son enlaces de afiliación se explica en
        la página <Link href="/trasparenza">Transparencia</Link>.
      </p>
      <p>
        Nuestro sitio no pasa a estos sitios ningún dato sobre ti. Cuando haces clic y llegas a su sitio, son ellos quienes
        recogen los datos (también con sus propias cookies) como responsables independientes, según sus políticas de
        privacidad y de cookies, que te invitamos a leer. No tenemos control sobre esos tratamientos.
      </p>

      <h2>9. Cambios</h2>
      <p>
        Si el sitio cambia (por ejemplo, con la incorporación de estadísticas, publicidad, boletines o un formulario de
        contacto), esta política se actualizará antes de que el cambio esté activo, y la fecha en la parte superior de la
        página lo indicará.
      </p>
    </>
  ),
}

export default async function PrivacyPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: t.crumb }]}
        title={t.titolo}
        lead={<p>{t.lead}</p>}
      />
      <section className="py-16">
        <Container>
          <DatiMancanti lingua={lingua} />
          <div className={PROSA}>{CORPO[lingua](lingua)}</div>
        </Container>
      </section>
    </>
  )
}
