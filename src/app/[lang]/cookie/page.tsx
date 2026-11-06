import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

/*
 * Cookie policy. Elenca TUTTO quello che il sito salva nel browser, verificato il 6/11/2026 sul
 * codice (grep di document.cookie, cookies().set, localStorage, sessionStorage) e sul sito
 * pubblicato con Playwright (nessuna richiesta a domini terzi).
 * Se un componente aggiunge una voce (es. checklist dell'attrezzatura in localStorage), va
 * aggiunta a VOCI qui sotto con nome, tipo, scopo e durata reali.
 */

type Voce = { nome: string; tipo: Record<Lingua, string>; scopo: Record<Lingua, string>; durata: Record<Lingua, string> }

const VOCI: Voce[] = [
  {
    nome: 'lingua',
    tipo: { it: 'cookie tecnico, del sito', en: 'technical cookie, first-party', es: 'cookie técnica, propia' },
    scopo: {
      it: 'Si crea solo se usi il selettore EN · IT · ES e ricorda la lingua scelta (contiene «it», «en» o «es»). Il sito non lo usa per reindirizzarti né per riconoscerti.',
      en: 'Created only if you use the EN · IT · ES switcher; it remembers the chosen language (it holds «it», «en» or «es»). The site does not use it to redirect or recognize you.',
      es: 'Se crea solo si usas el selector EN · IT · ES y recuerda el idioma elegido (contiene «it», «en» o «es»). El sitio no la usa para redirigirte ni para reconocerte.',
    },
    durata: { it: '1 anno', en: '1 year', es: '1 año' },
  },
  {
    nome: 'domande_admin',
    tipo: { it: 'cookie tecnico, del sito', en: 'technical cookie, first-party', es: 'cookie técnica, propia' },
    scopo: {
      it: 'Solo per l’autore: tiene aperta la sessione nella pagina riservata di moderazione delle domande. Chi visita il sito non lo riceve mai.',
      en: 'For the author only: keeps the session open on the private page for moderating questions. Visitors never receive it.',
      es: 'Solo para el autor: mantiene abierta la sesión en la página reservada de moderación de preguntas. Quien visita el sitio no la recibe nunca.',
    },
    durata: { it: '30 giorni', en: '30 days', es: '30 días' },
  },
  {
    nome: 'miy-salvati',
    tipo: { it: 'localStorage', en: 'localStorage', es: 'localStorage' },
    scopo: {
      it: 'L’elenco dei viaggi, delle destinazioni e delle esperienze che salvi con il cuore («Il mio prossimo viaggio»). Resta solo nel tuo browser e non viene mai inviato al server.',
      en: 'The list of trips, destinations and experiences you save with the heart («My next trip»). It stays only in your browser and is never sent to the server.',
      es: 'La lista de viajes, destinos y experiencias que guardas con el corazón («Mi próximo viaje»). Se queda solo en tu navegador y nunca se envía al servidor.',
    },
    durata: {
      it: 'Finché non togli i salvati o cancelli i dati del sito',
      en: 'Until you remove the saved items or clear the site data',
      es: 'Hasta que quites los guardados o borres los datos del sitio',
    },
  },
  {
    nome: 'miy-valigia:<lista>',
    tipo: { it: 'localStorage', en: 'localStorage', es: 'localStorage' },
    scopo: {
      it: 'Le voci che spunti nelle liste «Cosa portare» (una voce per lista), così le ritrovi quando torni. Restano solo nel tuo browser e non vengono mai inviate al server.',
      en: 'The items you tick in the «What to pack» lists (one entry per list), so you find them again when you come back. They stay only in your browser and are never sent to the server.',
      es: 'Los elementos que marcas en las listas «Qué llevar» (una entrada por lista), para que los encuentres al volver. Se quedan solo en tu navegador y nunca se envían al servidor.',
    },
    durata: {
      it: 'Finché non azzeri la lista o cancelli i dati del sito',
      en: 'Until you reset the list or clear the site data',
      es: 'Hasta que reinicies la lista o borres los datos del sitio',
    },
  },
  {
    nome: 'marchio',
    tipo: { it: 'sessionStorage', en: 'sessionStorage', es: 'sessionStorage' },
    scopo: {
      it: 'Ricorda che l’animazione del logo «scritto a macchina» è già stata mostrata, così non si ripete a ogni pagina. Contiene solo «1».',
      en: 'Remembers that the «typewritten» logo animation has already been shown, so it does not repeat on every page. It holds only «1».',
      es: 'Recuerda que la animación del logotipo «escrito a máquina» ya se ha mostrado, para que no se repita en cada página. Contiene solo «1».',
    },
    durata: { it: 'Fino alla chiusura della scheda', en: 'Until the tab is closed', es: 'Hasta que se cierra la pestaña' },
  },
  {
    nome: 'intro-vista',
    tipo: { it: 'sessionStorage', en: 'sessionStorage', es: 'sessionStorage' },
    scopo: {
      it: 'Ricorda che l’introduzione animata della home è già stata vista, per non riproporla. Contiene solo «1».',
      en: 'Remembers that the animated home page intro has already been seen, so it is not shown again. It holds only «1».',
      es: 'Recuerda que la introducción animada de la portada ya se ha visto, para no repetirla. Contiene solo «1».',
    },
    durata: { it: 'Fino alla chiusura della scheda', en: 'Until the tab is closed', es: 'Hasta que se cierra la pestaña' },
  },
]

const T = {
  it: {
    titolo: 'Cookie policy',
    desc: 'Cosa salva Make It Yours World nel tuo browser: un cookie tecnico per la lingua e poche voci locali (viaggi salvati, animazioni già viste). Nessuna statistica, pubblicità o tracciamento.',
    crumb: 'Cookie',
    lead: 'In breve: niente statistiche, pubblicità o tracciamento. Il sito salva nel browser solo poche voci tecniche, elencate qui sotto, e per questo non ti chiede alcun consenso.',
    aggiornato: 'Ultimo aggiornamento: 6 novembre 2026',
    elencoTitolo: 'Cosa salva il sito nel tuo browser',
    elencoTesto:
      'Questo è l’elenco completo. I cookie viaggiano con le richieste al sito; localStorage e sessionStorage sono spazi del browser che il sito legge solo sul tuo dispositivo e non invia al server.',
    colonne: ['Nome', 'Tipo', 'A cosa serve', 'Durata'],
  },
  en: {
    titolo: 'Cookie policy',
    desc: 'What Make It Yours World saves in your browser: one technical cookie for the language and a few local items (saved trips, animations already seen). No analytics, advertising or tracking.',
    crumb: 'Cookies',
    lead: 'In short: no analytics, advertising or tracking. The site saves only a few technical items in your browser, listed below, which is why it does not ask for any consent.',
    aggiornato: 'Last updated: November 6, 2026',
    elencoTitolo: 'What the site saves in your browser',
    elencoTesto:
      'This is the complete list. Cookies travel with requests to the site; localStorage and sessionStorage are browser spaces that the site reads only on your device and does not send to the server.',
    colonne: ['Name', 'Type', 'What it is for', 'Duration'],
  },
  es: {
    titolo: 'Política de cookies',
    desc: 'Qué guarda Make It Yours World en tu navegador: una cookie técnica para el idioma y pocos datos locales (viajes guardados, animaciones ya vistas). Sin estadísticas, publicidad ni rastreo.',
    crumb: 'Cookies',
    lead: 'En breve: sin estadísticas, publicidad ni rastreo. El sitio solo guarda en el navegador unos pocos datos técnicos, que se enumeran aquí abajo, y por eso no te pide ningún consentimiento.',
    aggiornato: 'Última actualización: 6 de noviembre de 2026',
    elencoTitolo: 'Qué guarda el sitio en tu navegador',
    elencoTesto:
      'Esta es la lista completa. Las cookies viajan con las solicitudes al sitio; localStorage y sessionStorage son espacios del navegador que el sitio lee solo en tu dispositivo y no envía al servidor.',
    colonne: ['Nombre', 'Tipo', 'Para qué sirve', 'Duración'],
  },
} satisfies Record<Lingua, Record<string, unknown>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return {
    ...pageMetadata({ title: t.titolo, description: t.desc, path: '/cookie', lingua }),
    robots: { index: false, follow: true },
  }
}

const PROSA =
  'prose prose-neutral max-w-3xl prose-headings:font-display prose-headings:font-medium prose-headings:text-alpine prose-p:text-stone prose-li:text-stone prose-strong:text-ink prose-strong:font-semibold prose-a:text-rosso prose-a:no-underline hover:prose-a:underline prose-th:text-ink prose-td:text-stone'

const GARANTE = 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876'

const CORPO: Record<Lingua, () => ReactNode> = {
  it: () => (
    <>
      <h2>Niente statistiche, pubblicità o contenuti di terzi</h2>
      <p>
        Il sito non usa strumenti di statistica, pixel pubblicitari, pulsanti social o contenuti incorporati da altri
        servizi (mappe, video, font esterni). Font, foto e video sono ospitati sul sito stesso, quindi aprendo una pagina
        il tuo browser non contatta terze parti.
      </p>
      <p>
        Se il browser blocca cookie o archiviazione locale il sito funziona lo stesso: la lingua non viene ricordata, i
        salvati durano solo finché la pagina è aperta e le animazioni si ripetono. Puoi cancellare tutto in qualsiasi
        momento dalle impostazioni del browser (dati dei siti).
      </p>

      <h2>Perché non c&apos;è il banner</h2>
      <p>
        Secondo l&apos;art. 122 del Codice privacy e le{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Linee guida cookie e altri strumenti di tracciamento
        </a>{' '}
        del Garante (10 giugno 2021), il consenso serve per i cookie e gli strumenti di tracciamento non tecnici. Quelli
        strettamente necessari a fornire il servizio richiesto si possono usare senza consenso, dandone informazione. Le
        voci elencate sopra sono di questo tipo: servono a funzioni che usi tu (lingua, salvati, animazioni) e non a
        riconoscerti o profilarti.
      </p>

      <h2>Siti esterni raggiunti dai link</h2>
      <p>
        Le pagine contengono link a siti di terzi, tra cui Booking.com, Trip.com, GetYourGuide, Viator, Amazon, Heymondo,
        Airalo, Holafly, DiscoverCars e Skyscanner (vedi <Link href="/trasparenza">Trasparenza</Link>). Finché resti su
        questo sito nessuno di loro riceve dati. Quando clicchi un link ed entri nel loro sito, sono loro a impostare i
        propri cookie, secondo le loro cookie policy e con i loro banner di consenso.
      </p>

      <h2>Se in futuro cambia qualcosa</h2>
      <p>
        Se un giorno aggiungeremo statistiche, pubblicità o altri strumenti di terze parti, aggiorneremo questa pagina e{' '}
        <Link href="/privacy">l&apos;informativa privacy</Link> e, dove la legge lo richiede, mostreremo un banner per
        chiedere il tuo consenso prima di attivarli.
      </p>
    </>
  ),
  en: () => (
    <>
      <h2>No analytics, advertising or third-party content</h2>
      <p>
        The site uses no analytics tools, advertising pixels, social buttons or content embedded from other services (maps,
        videos, external fonts). Fonts, photos and videos are hosted on the site itself, so when you open a page your
        browser does not contact any third parties.
      </p>
      <p>
        If your browser blocks cookies or local storage the site still works: the language is not remembered, saved items
        last only while the page is open and the animations repeat. You can delete everything at any time from the browser
        settings (site data).
      </p>

      <h2>Why there is no banner</h2>
      <p>
        Under Article 122 of the Italian Privacy Code and the Italian Data Protection Authority&apos;s{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Guidelines on cookies and other tracking tools
        </a>{' '}
        (June 10, 2021), consent is required for non-technical cookies and tracking tools. Those strictly necessary to
        provide the service requested can be used without consent, as long as you are informed. The items listed above are
        of this kind: they serve features you use (language, saved items, animations), not to recognize or profile you.
      </p>

      <h2>External sites reached through links</h2>
      <p>
        The pages contain links to third-party sites, including Booking.com, Trip.com, GetYourGuide, Viator, Amazon,
        Heymondo, Airalo, Holafly, DiscoverCars and Skyscanner (see <Link href="/trasparenza">Transparency</Link>). As
        long as you stay on this site, none of them receives any data. When you click a link and enter their site, they
        set their own cookies, according to their cookie policies and with their own consent banners.
      </p>

      <h2>If something changes in the future</h2>
      <p>
        If one day we add analytics, advertising or other third-party tools, we will update this page and{' '}
        <Link href="/privacy">the privacy notice</Link> and, where the law requires it, we will show a banner to ask for
        your consent before activating them.
      </p>
    </>
  ),
  es: () => (
    <>
      <h2>Sin estadísticas, publicidad ni contenidos de terceros</h2>
      <p>
        El sitio no usa herramientas de estadística, píxeles publicitarios, botones sociales ni contenidos incrustados de
        otros servicios (mapas, vídeos, fuentes externas). Las fuentes, las fotos y los vídeos están alojados en el propio
        sitio, así que al abrir una página tu navegador no contacta con terceros.
      </p>
      <p>
        Si el navegador bloquea las cookies o el almacenamiento local, el sitio funciona igualmente: el idioma no se
        recuerda, los guardados duran solo mientras la página está abierta y las animaciones se repiten. Puedes borrarlo
        todo en cualquier momento desde los ajustes del navegador (datos de los sitios).
      </p>

      <h2>Por qué no hay banner</h2>
      <p>
        Según el art. 122 del Código de privacidad italiano y las{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Directrices sobre cookies y otras herramientas de rastreo
        </a>{' '}
        de la autoridad italiana de protección de datos (Garante, 10 de junio de 2021), el consentimiento hace falta para
        las cookies y las herramientas de rastreo no técnicas. Las estrictamente necesarias para prestar el servicio
        solicitado se pueden usar sin consentimiento, informando de ello. Los datos enumerados arriba son de este tipo:
        sirven a funciones que usas tú (idioma, guardados, animaciones), no para reconocerte ni perfilarte.
      </p>

      <h2>Sitios externos a los que llevan los enlaces</h2>
      <p>
        Las páginas contienen enlaces a sitios de terceros, entre ellos Booking.com, Trip.com, GetYourGuide, Viator,
        Amazon, Heymondo, Airalo, Holafly, DiscoverCars y Skyscanner (consulta{' '}
        <Link href="/trasparenza">Transparencia</Link>). Mientras permaneces en este sitio, ninguno de ellos recibe datos.
        Cuando haces clic en un enlace y entras en su sitio, son ellos quienes instalan sus propias cookies, según sus
        políticas de cookies y con sus propios banners de consentimiento.
      </p>

      <h2>Si en el futuro cambia algo</h2>
      <p>
        Si algún día añadimos estadísticas, publicidad u otras herramientas de terceros, actualizaremos esta página y{' '}
        <Link href="/privacy">la política de privacidad</Link> y, donde la ley lo exija, mostraremos un banner para pedir
        tu consentimiento antes de activarlas.
      </p>
    </>
  ),
}

export default async function CookiePage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const Corpo = CORPO[lingua]
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: t.crumb }]}
        title={t.titolo}
        lead={<p>{t.lead}</p>}
      />
      <section className="py-16">
        <Container>
          <div className={PROSA}>
            <p>
              <em>{t.aggiornato}</em>
            </p>
            <h2>{t.elencoTitolo}</h2>
            <p>{t.elencoTesto}</p>
            <div className="not-prose -mx-4 overflow-x-auto px-4">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-ink text-ink">
                    {t.colonne.map((c) => (
                      <th key={c} scope="col" className="py-2 pr-4 font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VOCI.map((v) => (
                    <tr key={v.nome} className="border-b border-ink/15 align-top text-stone">
                      <th scope="row" className="py-3 pr-4 font-normal">
                        <code className="text-ink">{v.nome}</code>
                      </th>
                      <td className="py-3 pr-4">{v.tipo[lingua]}</td>
                      <td className="py-3 pr-4 leading-relaxed">{v.scopo[lingua]}</td>
                      <td className="py-3">{v.durata[lingua]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Corpo />
          </div>
        </Container>
      </section>
    </>
  )
}
