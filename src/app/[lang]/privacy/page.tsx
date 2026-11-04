import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site-config'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Informativa privacy',
    desc: 'Chi tratta i dati su Make It Yours World, quali (log tecnici, email di chi scrive, nome e testo delle domande sotto i viaggi), perché, per quanto tempo e come esercitare i tuoi diritti.',
    crumb: 'Privacy',
    lead: 'Questo è un blog di viaggio personale: niente account, newsletter, pubblicità o statistiche. L’unico modulo è quello per fare una domanda sotto un viaggio. Qui sotto trovi i pochi dati che passano comunque dal sito e cosa ne succede.',
    daInserire: (s: string) => `[${s} da inserire]`,
    indirizzo: 'indirizzo',
    email: 'email',
  },
  en: {
    titolo: 'Privacy notice',
    desc: 'Who processes data on Make It Yours World, which data (technical logs, emails of people who write, name and text of the questions under the trips), why, for how long and how to exercise your rights.',
    crumb: 'Privacy',
    lead: 'This is a personal travel blog: no accounts, newsletters, advertising or analytics. The only form is the one for asking a question under a trip. Below you will find the few data items that still pass through the site and what happens to them.',
    daInserire: (s: string) => `[${s} to be added]`,
    indirizzo: 'address',
    email: 'email',
  },
  es: {
    titolo: 'Política de privacidad',
    desc: 'Quién trata los datos en Make It Yours World, cuáles (registros técnicos, correos de quien escribe, nombre y texto de las preguntas bajo los viajes), por qué, durante cuánto tiempo y cómo ejercer tus derechos.',
    crumb: 'Privacidad',
    lead: 'Este es un blog de viajes personal: sin cuentas, boletines, publicidad ni estadísticas. El único formulario es el de hacer una pregunta bajo un viaje. Aquí abajo encuentras los pocos datos que pasan igualmente por el sitio y qué se hace con ellos.',
    daInserire: (s: string) => `[${s} por añadir]`,
    indirizzo: 'dirección',
    email: 'correo electrónico',
  },
} satisfies Record<Lingua, Record<string, string | ((s: string) => string)>>

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

/** Finché il dato non è in site-config si vede un segnaposto evidente, mai un campo vuoto. */
function DaInserire({ valore, segnaposto, lingua }: { valore: string; segnaposto: string; lingua: Lingua }) {
  if (valore) return <>{valore}</>
  return <mark className="bg-rosso/10 px-1 text-rosso">{T[lingua].daInserire(segnaposto)}</mark>
}

function Email({ lingua }: { lingua: Lingua }) {
  const email: string = siteConfig.contact.email
  return email ? <a href={`mailto:${email}`}>{email}</a> : <DaInserire valore="" segnaposto={T[lingua].email} lingua={lingua} />
}

const VERCEL = 'https://vercel.com/legal/privacy-policy'
const GARANTE = 'https://www.garanteprivacy.it'

const CORPO: Record<Lingua, (lingua: Lingua) => ReactNode> = {
  it: (lingua) => (
    <>
      <p>
        <em>Ultimo aggiornamento: 4 novembre 2026</em>
      </p>
      <p>
        Informativa resa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR) a chi visita{' '}
        <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, '')}</a>.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Titolare è <strong>{siteConfig.titolare.nome}</strong>, persona fisica, che cura il sito a titolo personale.
        <br />
        Recapito: <DaInserire valore={siteConfig.titolare.indirizzo} segnaposto={T[lingua].indirizzo} lingua={lingua} />
        <br />
        Email: <Email lingua={lingua} />
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
      <h3 id="domande">Domande sotto i viaggi</h3>
      <p>
        Se usi il modulo «Fai una domanda» in fondo a un viaggio, salviamo solo il <strong>nome che scegli</strong> (anche
        un soprannome), il <strong>testo della domanda</strong>, la lingua e la pagina del viaggio, e la data. Non chiediamo
        email né altri recapiti e non salviamo il tuo indirizzo IP: per frenare lo spam il server conta gli invii solo in
        memoria, con un codice ricavato dall&apos;IP che non viene scritto da nessuna parte e sparisce al più tardi dopo 24
        ore. La domanda non è pubblica finché non la leggo e rispondo; se la pubblico, nome, domanda e risposta sono
        visibili a tutti sulla pagina del viaggio. Non scrivere nella domanda dati personali tuoi o di altri.
      </p>
      <h3>Cosa non trattiamo</h3>
      <p>
        Il sito non usa cookie per chi lo visita (l&apos;unico cookie, tecnico, serve solo all&apos;autore per entrare
        nella pagina di moderazione delle domande), né strumenti di statistica, pixel pubblicitari o di social network, mappe o video incorporati
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
        <li>
          <strong>Pubblicare le domande dei lettori con la risposta</strong>, perché siano utili anche ad altri
          viaggiatori. Base giuridica: il tuo consenso, dato con la casella del modulo (art. 6, par. 1, lett. a), che
          puoi revocare in qualsiasi momento chiedendo di togliere la domanda.
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
        <li>
          <strong>Domande sotto i viaggi:</strong> finché la domanda resta pubblicata o finché chiedi di toglierla. Le
          domande scartate o senza risposta vengono cancellate al più tardi dopo 12 mesi.
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
          <a href={VERCEL} rel="noopener noreferrer" target="_blank">
            privacy policy di Vercel
          </a>
          ).
        </li>
        <li>
          Lo stesso Vercel conserva le domande sotto i viaggi nel servizio <strong>Vercel Blob</strong>, in un archivio
          privato che si trova nell&apos;Unione europea (Francoforte, Germania).
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
      <p>
        Per far togliere o correggere una tua domanda basta scrivere all&apos;indirizzo email indicato sopra, con il
        viaggio e il nome usato: la cancelliamo dall&apos;archivio, non solo dalla pagina.
      </p>
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
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
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
    </>
  ),
  en: (lingua) => (
    <>
      <p>
        <em>Last updated: November 4, 2026</em>
      </p>
      <p>
        Notice provided under Article 13 of Regulation (EU) 2016/679 (GDPR) to those who visit{' '}
        <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, '')}</a>.
      </p>

      <h2>1. Data controller</h2>
      <p>
        The controller is <strong>{siteConfig.titolare.nome}</strong>, a natural person, who runs the site in a personal
        capacity.
        <br />
        Contact address: <DaInserire valore={siteConfig.titolare.indirizzo} segnaposto={T[lingua].indirizzo} lingua={lingua} />
        <br />
        Email: <Email lingua={lingua} />
      </p>
      <p>The controller is not required to appoint a data protection officer (DPO) and has not appointed one.</p>

      <h2>2. What data we process</h2>
      <h3>Technical browsing data</h3>
      <p>
        When you open a page, the server hosting the site automatically records some technical data: IP address, date and
        time of the request, page requested, response code, browser and operating system (user agent), referring page.
        These are the normal logs of any website. We do not use them to profile you or to find out who you are, and we do
        not combine them with other data.
      </p>
      <h3>Data you send us by email</h3>
      <p>
        If you write to the site&apos;s email address, we receive your address, your name if you give it, and what you write
        in the message. Please do not send special categories of data (for example about health) unless necessary.
      </p>
      <h3 id="domande">Questions under the trips</h3>
      <p>
        If you use the «Ask a question» form at the end of a trip, we store only the <strong>name you choose</strong> (a
        nickname is fine), the <strong>text of the question</strong>, the language and trip page, and the date. We do not ask
        for an email or other contact details and we do not store your IP address: to curb spam the server counts
        submissions only in memory, with a code derived from the IP that is never written anywhere and disappears after
        24 hours at the latest. The question is not public until I read it and reply; if I publish it, the name, question
        and answer are visible to everyone on the trip page. Please do not put personal data about yourself or others in
        the question.
      </p>
      <h3>What we do not process</h3>
      <p>
        The site uses no cookies for visitors (the only cookie, a technical one, is used solely by the author to sign in
        to the question moderation page), and no analytics tools, advertising or social network pixels, or maps or videos embedded from
        other services. Fonts, photos and videos are hosted on the site itself, so opening a page does not send requests to
        Google or other third parties. For the only item saved in your browser, see the{' '}
        <Link href="/cookie">cookie policy</Link>.
      </p>

      <h2>3. Purposes and legal bases</h2>
      <ul>
        <li>
          <strong>Operating and protecting the site</strong> (delivering pages, preventing abuse and attacks, fixing errors)
          using the technical browsing data. Legal basis: the controller&apos;s legitimate interest in the security and
          operation of the site (Article 6(1)(f) GDPR).
        </li>
        <li>
          <strong>Replying to those who write</strong>, including collaboration proposals. Legal basis: performance of
          measures requested by the data subject (Article 6(1)(b)) or, for simple messages, the legitimate interest in
          replying (Article 6(1)(f)).
        </li>
        <li>
          <strong>Publishing readers&apos; questions with the answer</strong>, so they can help other travelers too. Legal
          basis: your consent, given with the form checkbox (Article 6(1)(a)), which you can withdraw at any time by
          asking for the question to be removed.
        </li>
      </ul>
      <p>There is no automated decision-making or profiling.</p>

      <h2>4. For how long</h2>
      <ul>
        <li>
          <strong>Technical logs:</strong> kept by the hosting provider for the limited period set by its service and then
          deleted automatically; we make no copies.
        </li>
        <li>
          <strong>Emails:</strong> for the time needed to handle the request and then deleted, at the latest within 24
          months of the last exchange, unless they are needed to defend a legal claim.
        </li>
        <li>
          <strong>Questions under the trips:</strong> for as long as the question stays published or until you ask for it
          to be removed. Discarded or unanswered questions are deleted after 12 months at the latest.
        </li>
      </ul>

      <h2>5. Who receives the data</h2>
      <p>
        The data is neither sold nor transferred. It is processed on our behalf, as data processor (Article 28 GDPR), by:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, USA, which hosts the site and records
          its technical logs (
          <a href={VERCEL} rel="noopener noreferrer" target="_blank">
            Vercel privacy policy
          </a>
          ).
        </li>
        <li>
          Vercel also stores the questions under the trips in its <strong>Vercel Blob</strong> service, in a private store
          located in the European Union (Frankfurt, Germany).
        </li>
        <li>The provider of the mailbox used for the site&apos;s email address, only for the messages received.</li>
      </ul>
      <p>The data may be disclosed to the authorities only if the law requires it.</p>

      <h2>6. Transfer outside the European Union</h2>
      <p>
        Vercel is a US company and the technical data may be processed in the United States. Vercel participates in the
        EU-U.S. Data Privacy Framework: the transfer is based on the European Commission&apos;s adequacy decision of July
        10, 2023 (Article 45 GDPR).
      </p>

      <h2>7. Your rights</h2>
      <p>
        To have one of your questions removed or corrected, just write to the email address given above with the trip
        and the name you used: we delete it from the archive, not only from the page.
      </p>
      <p>At any time you can ask the controller, by writing to the email address given above, for:</p>
      <ul>
        <li>access to your data and a copy (Article 15);</li>
        <li>rectification of inaccurate data (Article 16);</li>
        <li>erasure (Article 17);</li>
        <li>restriction of processing (Article 18);</li>
        <li>portability of the data you provided to us (Article 20);</li>
        <li>
          the right to <strong>object</strong> to processing based on legitimate interest, on grounds relating to your
          particular situation (Article 21).
        </li>
      </ul>
      <p>
        We reply within one month (Article 12). Please note that technical logs alone often do not allow a person to be
        identified: in that case we may ask you for some more information to find the data concerning you.
      </p>
      <p>
        If you believe the processing violates the GDPR you can lodge a complaint with the Italian{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Data Protection Authority (Garante per la protezione dei dati personali)
        </a>{' '}
        (Article 77) or with the authority of the EU country where you live or work, or go to court.
      </p>

      <h2>8. Affiliate links and third-party sites</h2>
      <p>
        Many pages contain links to external sites: bookings for accommodation and experiences, flights, car rental, travel
        insurance, eSIMs, books and gear (for example Booking.com, Trip.com, GetYourGuide, Viator, Amazon, Heymondo,
        Airalo, Holafly, DiscoverCars, Skyscanner). Some are affiliate links, explained on the{' '}
        <Link href="/trasparenza">Transparency</Link> page.
      </p>
      <p>
        Our site passes no data about you to these partners. When you click and arrive on their site, they collect data
        (also with their own cookies, for example to recognize that you come from here) as independent controllers,
        according to their own privacy and cookie notices, which we invite you to read. We have no control over that
        processing.
      </p>

      <h2>9. Changes</h2>
      <p>
        If the site changes (for example by adding analytics, advertising, newsletters or a contact form) this notice will
        be updated before the change goes live, and the date at the top of the page will show it.
      </p>
    </>
  ),
  es: (lingua) => (
    <>
      <p>
        <em>Última actualización: 4 de noviembre de 2026</em>
      </p>
      <p>
        Información facilitada conforme al art. 13 del Reglamento (UE) 2016/679 (RGPD) a quienes visitan{' '}
        <a href={siteConfig.url}>{siteConfig.url.replace(/^https?:\/\//, '')}</a>.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable es <strong>{siteConfig.titolare.nome}</strong>, persona física, que gestiona el sitio a título
        personal.
        <br />
        Dirección de contacto: <DaInserire valore={siteConfig.titolare.indirizzo} segnaposto={T[lingua].indirizzo} lingua={lingua} />
        <br />
        Correo electrónico: <Email lingua={lingua} />
      </p>
      <p>El responsable no está obligado a nombrar un delegado de protección de datos (DPD) y no lo ha nombrado.</p>

      <h2>2. Qué datos tratamos</h2>
      <h3>Datos técnicos de navegación</h3>
      <p>
        Cuando abres una página, el servidor que aloja el sitio registra automáticamente algunos datos técnicos: dirección
        IP, fecha y hora de la solicitud, página solicitada, código de respuesta, navegador y sistema operativo (user
        agent), página de procedencia. Son los registros normales de cualquier sitio web. No los usamos para perfilarte ni
        para saber quién eres, y no los cruzamos con otros datos.
      </p>
      <h3>Datos que nos envías por correo electrónico</h3>
      <p>
        Si escribes a la dirección de correo del sitio, recibimos tu dirección, tu nombre si lo indicas y lo que escribas
        en el mensaje. Te pedimos que no envíes datos especiales (por ejemplo, sobre la salud) si no hacen falta.
      </p>
      <h3 id="domande">Preguntas bajo los viajes</h3>
      <p>
        Si usas el formulario «Haz una pregunta» al final de un viaje, guardamos solo el <strong>nombre que elijas</strong>{' '}
        (también un apodo), el <strong>texto de la pregunta</strong>, el idioma y la página del viaje, y la fecha. No pedimos
        correo ni otros datos de contacto y no guardamos tu dirección IP: para frenar el spam el servidor cuenta los envíos
        solo en memoria, con un código derivado de la IP que no se escribe en ningún sitio y desaparece como máximo a las 24
        horas. La pregunta no es pública hasta que la leo y respondo; si la publico, el nombre, la pregunta y la respuesta
        son visibles para todos en la página del viaje. No escribas en la pregunta datos personales tuyos ni de otras
        personas.
      </p>
      <h3>Qué no tratamos</h3>
      <p>
        El sitio no usa cookies para quien lo visita (la única cookie, técnica, la usa solo el autor para entrar en la
        página de moderación de las preguntas), ni herramientas de estadística, píxeles publicitarios o de redes sociales, ni mapas o vídeos
        incrustados de otros servicios. Las fuentes, las fotos y los vídeos están alojados en el propio sitio, así que abrir
        una página no envía solicitudes a Google ni a otros terceros. Para el único dato guardado en el navegador consulta
        la <Link href="/cookie">política de cookies</Link>.
      </p>

      <h2>3. Finalidades y bases jurídicas</h2>
      <ul>
        <li>
          <strong>Hacer funcionar el sitio y protegerlo</strong> (entregar las páginas, prevenir abusos y ataques, resolver
          errores) con los datos técnicos de navegación. Base jurídica: interés legítimo del responsable en la seguridad y
          el funcionamiento del sitio (art. 6, apdo. 1, letra f RGPD).
        </li>
        <li>
          <strong>Responder a quien escribe</strong>, incluidas las propuestas de colaboración. Base jurídica: aplicación de
          medidas solicitadas por el interesado (art. 6, apdo. 1, letra b) o, para los mensajes simples, el interés
          legítimo en responder (art. 6, apdo. 1, letra f).
        </li>
        <li>
          <strong>Publicar las preguntas de los lectores con la respuesta</strong>, para que sirvan también a otros
          viajeros. Base jurídica: tu consentimiento, dado con la casilla del formulario (art. 6, apdo. 1, letra a), que
          puedes retirar en cualquier momento pidiendo que se quite la pregunta.
        </li>
      </ul>
      <p>No hay ninguna decisión automatizada ni elaboración de perfiles.</p>

      <h2>4. Durante cuánto tiempo</h2>
      <ul>
        <li>
          <strong>Registros técnicos:</strong> conservados por el proveedor de alojamiento durante el periodo limitado que
          prevé su servicio y después borrados automáticamente; no hacemos copias.
        </li>
        <li>
          <strong>Correos electrónicos:</strong> durante el tiempo necesario para gestionar la solicitud y después
          borrados, como máximo a los 24 meses del último intercambio, salvo que hagan falta para defender un derecho en
          juicio.
        </li>
        <li>
          <strong>Preguntas bajo los viajes:</strong> mientras la pregunta siga publicada o hasta que pidas quitarla. Las
          preguntas descartadas o sin respuesta se borran como máximo a los 12 meses.
        </li>
      </ul>

      <h2>5. Quién recibe los datos</h2>
      <p>
        Los datos no se venden ni se ceden. Los tratan por cuenta nuestra, como encargados del tratamiento (art. 28 RGPD):
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, EE. UU., que aloja el sitio y
          registra sus registros técnicos (
          <a href={VERCEL} rel="noopener noreferrer" target="_blank">
            política de privacidad de Vercel
          </a>
          ).
        </li>
        <li>
          La propia Vercel conserva las preguntas bajo los viajes en su servicio <strong>Vercel Blob</strong>, en un
          archivo privado ubicado en la Unión Europea (Fráncfort, Alemania).
        </li>
        <li>El proveedor del buzón de correo usado para la dirección del sitio, solo para los mensajes recibidos.</li>
      </ul>
      <p>Los datos solo pueden comunicarse a las autoridades si la ley lo exige.</p>

      <h2>6. Transferencia fuera de la Unión Europea</h2>
      <p>
        Vercel es una empresa estadounidense y los datos técnicos pueden tratarse en Estados Unidos. Vercel está adherida
        al Marco de Privacidad de Datos UE-EE. UU.: la transferencia se basa en la decisión de adecuación de la Comisión
        Europea de 10 de julio de 2023 (art. 45 RGPD).
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Para que se quite o se corrija una de tus preguntas basta con escribir a la dirección de correo indicada arriba,
        con el viaje y el nombre que usaste: la borramos del archivo, no solo de la página.
      </p>
      <p>En cualquier momento puedes pedir al responsable, escribiendo a la dirección de correo indicada arriba:</p>
      <ul>
        <li>el acceso a tus datos y una copia (art. 15);</li>
        <li>la rectificación de los datos inexactos (art. 16);</li>
        <li>la supresión (art. 17);</li>
        <li>la limitación del tratamiento (art. 18);</li>
        <li>la portabilidad de los datos que nos has facilitado (art. 20);</li>
        <li>
          <strong>oponerte</strong> al tratamiento basado en el interés legítimo, por motivos relacionados con tu
          situación particular (art. 21).
        </li>
      </ul>
      <p>
        Respondemos en el plazo de un mes (art. 12). Ten en cuenta que a partir de los solos registros técnicos a menudo no
        es posible identificar a una persona: en ese caso podríamos pedirte alguna información más para encontrar los datos
        que te conciernen.
      </p>
      <p>
        Si consideras que el tratamiento infringe el RGPD, puedes presentar una reclamación ante la{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          autoridad italiana de protección de datos (Garante per la protezione dei dati personali)
        </a>{' '}
        (art. 77) o ante la autoridad del país de la UE en el que vives o trabajas, o acudir a los tribunales.
      </p>

      <h2>8. Enlaces de afiliación y sitios de terceros</h2>
      <p>
        Muchas páginas contienen enlaces a sitios externos: reservas de alojamientos y experiencias, vuelos, alquiler de
        coches, seguros de viaje, eSIM, libros y equipamiento (por ejemplo Booking.com, Trip.com, GetYourGuide, Viator,
        Amazon, Heymondo, Airalo, Holafly, DiscoverCars, Skyscanner). Algunos son enlaces de afiliación, explicados en la
        página <Link href="/trasparenza">Transparencia</Link>.
      </p>
      <p>
        Nuestro sitio no pasa a estos socios ningún dato sobre ti. Cuando haces clic y llegas a su sitio, son ellos quienes
        recogen los datos (también con sus propias cookies, por ejemplo para reconocer que llegas desde aquí) como
        responsables independientes, según sus políticas de privacidad y de cookies, que te invitamos a leer. No tenemos
        control sobre esos tratamientos.
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
          <div className={PROSA}>{CORPO[lingua](lingua)}</div>
        </Container>
      </section>
    </>
  )
}
