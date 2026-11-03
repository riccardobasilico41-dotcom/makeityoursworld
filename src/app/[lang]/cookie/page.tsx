import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Cookie policy',
    desc: 'Make It Yours World non usa cookie né strumenti di tracciamento: salva solo un dato tecnico nel browser per la durata della visita. Ecco quale e perché.',
    crumb: 'Cookie',
    lead: 'In breve: il sito non usa cookie e non ti traccia. Per questo non vedi nessun banner da accettare.',
  },
  en: {
    titolo: 'Cookie policy',
    desc: 'Make It Yours World uses no cookies or tracking tools: it only saves one technical item in your browser for the length of the visit. Here is which one and why.',
    crumb: 'Cookies',
    lead: 'In short: the site uses no cookies and does not track you. That is why you see no banner to accept.',
  },
  es: {
    titolo: 'Política de cookies',
    desc: 'Make It Yours World no usa cookies ni herramientas de rastreo: solo guarda un dato técnico en el navegador durante la visita. Aquí está cuál y por qué.',
    crumb: 'Cookies',
    lead: 'En breve: el sitio no usa cookies y no te rastrea. Por eso no ves ningún banner que aceptar.',
  },
} satisfies Record<Lingua, Record<string, string>>

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
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
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
    </>
  ),
  en: () => (
    <>
      <p>
        <em>Last updated: October 30, 2026</em>
      </p>

      <h2>No cookies, no tracking</h2>
      <p>
        The site sets no cookies, neither technical nor profiling, and uses no analytics tools, advertising pixels, social
        buttons or content embedded from other services (maps, videos, external fonts). Fonts, photos and videos are hosted
        on the site itself, so when you open a page your browser does not contact any third parties.
      </p>

      <h2>The only item saved in your browser</h2>
      <p>
        The site uses a single entry in the browser&apos;s <strong>sessionStorage</strong>, a technical space similar to a
        cookie but never sent to the server, which the browser deletes by itself when you close the tab.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>What it is for</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>marchio</code>
            </td>
            <td>sessionStorage, technical</td>
            <td>
              Remembers that the «typewritten» logo animation has already been shown, so it does not repeat on every page.
              It contains only the value «1», no data about you.
            </td>
            <td>Until the tab is closed</td>
          </tr>
        </tbody>
      </table>
      <p>
        If the browser blocks this space the site still works: the animation simply repeats. You can delete it at any time
        from the browser settings (site data).
      </p>

      <h2>Why there is no banner</h2>
      <p>
        Under Article 122 of the Italian Privacy Code and the Italian Data Protection Authority&apos;s{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Guidelines on cookies and other tracking tools
        </a>{' '}
        (June 10, 2021), consent is only required for cookies and non-technical tracking tools. Tools strictly necessary to
        provide the service requested by the user can be used without consent, as long as the user is informed. The{' '}
        <code>marchio</code> entry falls into this category: it is technical, lasts a single visit and is not used to
        recognize or profile you. That is why we do not ask for any consent.
      </p>

      <h2>External sites reached through links</h2>
      <p>
        The pages contain links to third-party sites, including affiliate partners such as Booking.com, Trip.com,
        GetYourGuide, Viator, Amazon, Heymondo, Airalo, Holafly, DiscoverCars and Skyscanner (see{' '}
        <Link href="/trasparenza">Transparency</Link>). As long as you stay on this site, none of them receives any data.
        When you click a link and enter their site, they set their own cookies, also to recognize that you come from here,
        according to their cookie policies and with their own consent banners.
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
      <p>
        <em>Última actualización: 30 de octubre de 2026</em>
      </p>

      <h2>Ninguna cookie, ningún rastreo</h2>
      <p>
        El sitio no instala cookies, ni técnicas ni de perfilado, y no usa herramientas de estadística, píxeles
        publicitarios, botones sociales ni contenidos incrustados de otros servicios (mapas, vídeos, fuentes externas). Las
        fuentes, las fotos y los vídeos están alojados en el propio sitio, así que al abrir una página tu navegador no
        contacta con terceros.
      </p>

      <h2>El único dato guardado en el navegador</h2>
      <p>
        El sitio usa una sola entrada en el <strong>sessionStorage</strong> del navegador, un espacio técnico parecido a una
        cookie pero que nunca se envía al servidor y que el navegador borra por sí solo al cerrar la pestaña.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Para qué sirve</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>marchio</code>
            </td>
            <td>sessionStorage, técnico</td>
            <td>
              Recuerda que la animación del logotipo «escrito a máquina» ya se ha mostrado, para que no se repita en cada
              página. Contiene solo el valor «1», ningún dato sobre ti.
            </td>
            <td>Hasta que se cierra la pestaña</td>
          </tr>
        </tbody>
      </table>
      <p>
        Si el navegador bloquea este espacio, el sitio funciona igualmente: la animación se repite y nada más. Puedes
        borrarlo en cualquier momento desde los ajustes del navegador (datos de los sitios).
      </p>

      <h2>Por qué no hay banner</h2>
      <p>
        Según el art. 122 del Código de privacidad italiano y las{' '}
        <a href={GARANTE} rel="noopener noreferrer" target="_blank">
          Directrices sobre cookies y otras herramientas de rastreo
        </a>{' '}
        de la autoridad italiana de protección de datos (Garante, 10 de junio de 2021), el consentimiento solo hace falta
        para las cookies y las herramientas de rastreo no técnicas. Las herramientas estrictamente necesarias para prestar el
        servicio solicitado por el usuario se pueden usar sin consentimiento, informando de ello. La entrada{' '}
        <code>marchio</code> entra en esta categoría: es técnica, dura una sola visita y no sirve para reconocerte ni
        para perfilarte. Por eso no pedimos ningún consentimiento.
      </p>

      <h2>Sitios externos a los que llevan los enlaces</h2>
      <p>
        Las páginas contienen enlaces a sitios de terceros, entre ellos socios de afiliación como Booking.com, Trip.com,
        GetYourGuide, Viator, Amazon, Heymondo, Airalo, Holafly, DiscoverCars y Skyscanner (consulta{' '}
        <Link href="/trasparenza">Transparencia</Link>). Mientras permaneces en este sitio, ninguno de ellos recibe datos.
        Cuando haces clic en un enlace y entras en su sitio, son ellos quienes instalan sus propias cookies, también para
        reconocer que llegas desde aquí, según sus políticas de cookies y con sus propios banners de consentimiento.
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
            <Corpo />
          </div>
        </Container>
      </section>
    </>
  )
}
