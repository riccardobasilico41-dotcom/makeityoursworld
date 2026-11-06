import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from '@/components/ui/Link'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { emailPubblica } from '@/lib/site-config'
import { AFFILIAZIONI, affiliazioniAttive } from '@/lib/affiliazioni'
import { ISTITUZIONALE } from '@/lib/i18n/sito'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Trasparenza: link affiliati e collaborazioni',
    desc: 'Link affiliati su Make It Yours World: quali programmi sono attivi, dove trovi gli avvisi, perché il prezzo per te non cambia e come vengono dichiarati i contenuti sponsorizzati.',
    crumb: 'Trasparenza',
    lead: 'Qui spiego come funzionano i link affiliati, quali sono attivi oggi, dove trovi gli avvisi e come scelgo cosa consigliare.',
  },
  en: {
    titolo: 'Transparency: Affiliate Links and Collaborations',
    desc: "Affiliate links on Make It Yours World: which programs are active, where you find the notices, why the price doesn't change for you and how sponsored content is disclosed.",
    crumb: 'Transparency',
    lead: 'Here I explain how affiliate links work, which ones are active today, where you find the notices and how I choose what to recommend.',
  },
  es: {
    titolo: 'Transparencia: enlaces de afiliación y colaboraciones',
    desc: 'Enlaces de afiliación en Make It Yours World: qué programas están activos, dónde encuentras los avisos, por qué el precio para ti no cambia y cómo se declaran los contenidos patrocinados.',
    crumb: 'Transparencia',
    lead: 'Aquí explico cómo funcionan los enlaces de afiliación, cuáles están activos hoy, dónde encuentras los avisos y cómo elijo qué recomendar.',
  },
} satisfies Record<Lingua, Record<string, string>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return {
    ...pageMetadata({ title: t.titolo, description: t.desc, path: '/trasparenza', lingua }),
    robots: { index: true, follow: true },
  }
}

const PROSA =
  'prose prose-neutral max-w-3xl prose-headings:font-display prose-headings:font-medium prose-headings:text-alpine prose-p:text-stone prose-li:text-stone prose-strong:text-ink prose-strong:font-semibold prose-a:text-rosso prose-a:no-underline hover:prose-a:underline'

type Chiave = keyof typeof AFFILIAZIONI

/** Un programma è attivo quando in src/lib/affiliazioni.ts c'è il suo ID o link. */
const attivo = (k: Chiave) => Object.values(AFFILIAZIONI[k]).some(Boolean)

/** Negozi Amazon con un tag compilato (it → Amazon.it, en → Amazon.com, es → Amazon.es). */
const NEGOZIO_AMAZON: Record<Lingua, string> = { it: 'Amazon.it', en: 'Amazon.com', es: 'Amazon.es' }
const amazonAttivi = (Object.keys(AFFILIAZIONI.amazon) as Lingua[]).filter((l) => AFFILIAZIONI.amazon[l])

const PARTNER: Record<Lingua, { chiave: Chiave; nome: string; cosa: string }[]> = {
  it: [
    { chiave: 'booking', nome: 'Booking.com', cosa: 'alloggi' },
    { chiave: 'tripcom', nome: 'Trip.com', cosa: 'alloggi e treni, soprattutto in Asia' },
    { chiave: 'getyourguide', nome: 'GetYourGuide', cosa: 'tour, ingressi ed esperienze' },
    { chiave: 'viator', nome: 'Viator (Tripadvisor)', cosa: 'tour ed esperienze' },
    { chiave: 'amazon', nome: 'Amazon', cosa: 'guide, libri e attrezzatura da viaggio' },
    { chiave: 'heymondo', nome: 'Heymondo', cosa: 'assicurazione di viaggio' },
    { chiave: 'airalo', nome: 'Airalo', cosa: 'eSIM per internet all’estero' },
    { chiave: 'holafly', nome: 'Holafly', cosa: 'eSIM per internet all’estero' },
    { chiave: 'discovercars', nome: 'DiscoverCars', cosa: 'noleggio auto' },
    { chiave: 'skyscanner', nome: 'Skyscanner', cosa: 'ricerca voli' },
  ],
  en: [
    { chiave: 'booking', nome: 'Booking.com', cosa: 'accommodation' },
    { chiave: 'tripcom', nome: 'Trip.com', cosa: 'accommodation and trains, mainly in Asia' },
    { chiave: 'getyourguide', nome: 'GetYourGuide', cosa: 'tours, tickets and experiences' },
    { chiave: 'viator', nome: 'Viator (Tripadvisor)', cosa: 'tours and experiences' },
    { chiave: 'amazon', nome: 'Amazon', cosa: 'guidebooks, books and travel gear' },
    { chiave: 'heymondo', nome: 'Heymondo', cosa: 'travel insurance' },
    { chiave: 'airalo', nome: 'Airalo', cosa: 'eSIMs for data abroad' },
    { chiave: 'holafly', nome: 'Holafly', cosa: 'eSIMs for data abroad' },
    { chiave: 'discovercars', nome: 'DiscoverCars', cosa: 'car rental' },
    { chiave: 'skyscanner', nome: 'Skyscanner', cosa: 'flight search' },
  ],
  es: [
    { chiave: 'booking', nome: 'Booking.com', cosa: 'alojamientos' },
    { chiave: 'tripcom', nome: 'Trip.com', cosa: 'alojamientos y trenes, sobre todo en Asia' },
    { chiave: 'getyourguide', nome: 'GetYourGuide', cosa: 'tours, entradas y experiencias' },
    { chiave: 'viator', nome: 'Viator (Tripadvisor)', cosa: 'tours y experiencias' },
    { chiave: 'amazon', nome: 'Amazon', cosa: 'guías, libros y equipamiento de viaje' },
    { chiave: 'heymondo', nome: 'Heymondo', cosa: 'seguro de viaje' },
    { chiave: 'airalo', nome: 'Airalo', cosa: 'eSIM para internet en el extranjero' },
    { chiave: 'holafly', nome: 'Holafly', cosa: 'eSIM para internet en el extranjero' },
    { chiave: 'discovercars', nome: 'DiscoverCars', cosa: 'alquiler de coches' },
    { chiave: 'skyscanner', nome: 'Skyscanner', cosa: 'buscador de vuelos' },
  ],
}

const STATO: Record<Lingua, { si: string; no: string }> = {
  it: { si: 'affiliazione attiva', no: 'nessuna affiliazione attiva: link normale' },
  en: { si: 'affiliate program active', no: 'no active affiliation: plain link' },
  es: { si: 'afiliación activa', no: 'sin afiliación activa: enlace normal' },
}

function ElencoPartner({ lingua }: { lingua: Lingua }) {
  return (
    <ul>
      {PARTNER[lingua].map((p) => (
        <li key={p.chiave}>
          <strong>{p.nome}</strong>: {p.cosa} · <em>{attivo(p.chiave) ? STATO[lingua].si : STATO[lingua].no}</em>
        </li>
      ))}
    </ul>
  )
}

const negozi = (l: Lingua) => amazonAttivi.map((x) => NEGOZIO_AMAZON[x]).join(', ') || NEGOZIO_AMAZON[l]

const CORPO: Record<Lingua, (p: { email: string | null }) => ReactNode> = {
  it: ({ email }) => (
    <>
      <p>
        <em>Ultimo aggiornamento: 6 novembre 2026</em>
      </p>

      <h2>A che punto sono le affiliazioni</h2>
      {affiliazioniAttive ? (
        <p>
          Alcuni link verso alloggi, tour, voli, noleggi, assicurazioni, eSIM e prodotti sono link di affiliazione: se
          clicchi e poi prenoti o compri, il sito partner può riconoscermi una piccola commissione. L&apos;elenco qui sotto
          dice quali programmi sono attivi oggi.
        </p>
      ) : (
        <p>
          <strong>Oggi nessun programma di affiliazione è attivo.</strong> I link verso alloggi, tour, voli, noleggi,
          assicurazioni, eSIM e prodotti portano alla pagina giusta del partner, ma non mi fanno guadagnare nulla. Quando
          un programma si attiverà, lo vedrai segnato qui sotto.
        </p>
      )}
      <p>
        I link di un programma attivo portano l&apos;attributo <code>rel=&quot;sponsored&quot;</code>, come chiede
        Google; quelli dei riquadri «Organizza questo viaggio» lo portano già, per prudenza.
      </p>

      <h2>Dove trovi gli avvisi</h2>
      <ul>
        <li>nei riquadri «Organizza questo viaggio» e «Prenota» delle pagine di viaggi, destinazioni ed esperienze, con un link a questa pagina;</li>
        <li>nelle liste «Cosa portare» (attrezzatura), accanto ai link verso Amazon;</li>
        <li>all&apos;inizio di un contenuto sponsorizzato, se mai ce ne sarà uno (vedi sotto).</li>
      </ul>
      <p>
        <strong>Per te il prezzo non cambia.</strong> Con un&apos;affiliazione attiva la commissione la paga il partner,
        non tu. Non sei obbligato a usare questi link, e i consigli valgono anche se prenoti altrove.
      </p>

      <h2>Da dove vengono i consigli</h2>
      <p>
        Ogni viaggio raccontato qui nasce da luoghi che ho visitato e da esperienze che ho vissuto: alloggi, esperienze e
        attrezzatura sono quelli che ho usato o che ho valutato organizzando quei viaggi. Una commissione non decide cosa
        consiglio né in che ordine: se qualcosa non mi è piaciuto lo scrivo, e non metto link a cose che non consiglierei
        a un amico.
      </p>

      {amazonAttivi.length > 0 && (
        <>
          <h2>Amazon</h2>
          <p>
            <strong>In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti idonei.</strong> Programma attivo
            per: {negozi('it')}.
          </p>
        </>
      )}

      <h2>Contenuti sponsorizzati e collaborazioni</h2>
      <p>
        Ad oggi sul sito non ci sono contenuti sponsorizzati. Se in futuro un viaggio, un soggiorno, un prodotto o un
        servizio mi verrà offerto gratis o pagato da un&apos;azienda, lo dirò in modo chiaro all&apos;inizio del contenuto
        (per esempio «Contenuto sponsorizzato» o «Soggiorno offerto da…»), non nascosto in fondo. Le opinioni restano mie,
        e nessun partner può rivedere o approvare quello che scrivo prima della pubblicazione.
      </p>
      <p>
        Cerco di seguire il principio, comune al Codice del consumo, alle indicazioni dell&apos;Autorità Garante della
        Concorrenza e del Mercato (AGCM) e alla Digital Chart dell&apos;Istituto dell&apos;Autodisciplina Pubblicitaria,
        per cui la comunicazione commerciale deve essere sempre riconoscibile come tale.
      </p>
      <p>
        {email ? (
          <>
            Per proposte di collaborazione puoi scrivere a <a href={`mailto:${email}`}>{email}</a>.
          </>
        ) : (
          <>
            Le proposte di collaborazione sono descritte in <Link href="/lavoriamo-insieme">Lavoriamo insieme</Link>.{' '}
            {ISTITUZIONALE.it.contattiPresto}
          </>
        )}
      </p>

      <h2>Partner a cui puntano i link</h2>
      <ElencoPartner lingua="it" />
      <p>
        Cosa succede ai tuoi dati quando clicchi uno di questi link è spiegato nell&apos;
        <Link href="/privacy">informativa privacy</Link> e nella <Link href="/cookie">cookie policy</Link>.
      </p>
      <h2>Licenze delle immagini</h2>
      <p>
        Autori e licenze delle immagini di repertorio sono elencati nei{' '}
        <Link href="/crediti-fotografici">crediti fotografici</Link>.
      </p>
    </>
  ),
  en: ({ email }) => (
    <>
      <p>
        <em>Last updated: November 6, 2026</em>
      </p>

      <h2>Where affiliations stand</h2>
      {affiliazioniAttive ? (
        <p>
          Some links to accommodation, tours, flights, rentals, insurance, eSIMs and products are affiliate links: if you
          click and then book or buy, the partner site may pay me a small commission. The list below shows which programs
          are active today.
        </p>
      ) : (
        <p>
          <strong>No affiliate program is active today.</strong> The links to accommodation, tours, flights, rentals,
          insurance, eSIMs and products take you to the right partner page, but earn me nothing. When a program becomes
          active, you will see it marked below.
        </p>
      )}
      <p>
        Links of an active program carry the <code>rel=&quot;sponsored&quot;</code> attribute, as Google asks; those in
        the «Plan this trip» boxes already carry it, as a precaution.
      </p>

      <h2>Where you find the notices</h2>
      <ul>
        <li>in the «Plan this trip» and «Book» boxes on trip, destination and experience pages, with a link to this page;</li>
        <li>in the «What to pack» gear lists, next to the links to Amazon;</li>
        <li>at the top of any sponsored content, should there ever be any (see below).</li>
      </ul>
      <p>
        <strong>The price doesn&apos;t change for you.</strong> With an active affiliation the partner pays the commission,
        not you. You are not required to use these links, and the recommendations hold even if you book elsewhere.
      </p>

      <h2>Where the recommendations come from</h2>
      <p>
        Every journey featured here is rooted in places I have visited and experiences I have lived: places to stay,
        experiences and gear are the ones I used or evaluated while organizing those trips. A commission doesn&apos;t
        decide what I recommend or in what order: if I didn&apos;t like something I say so, and I don&apos;t link to things
        I wouldn&apos;t recommend to a friend.
      </p>

      {amazonAttivi.length > 0 && (
        <>
          <h2>Amazon</h2>
          <p>
            <strong>As an Amazon Associate I earn from qualifying purchases.</strong> Program active for: {negozi('en')}.
          </p>
        </>
      )}

      <h2>Sponsored content and collaborations</h2>
      <p>
        As of today there is no sponsored content on the site. If in the future a trip, a stay, a product or a service is
        offered to me for free or paid for by a company, I will say so clearly at the start of the content (for example
        «Sponsored content» or «Stay offered by…»), not hidden at the bottom. The opinions remain mine, and no partner can
        review or approve what I write before publication.
      </p>
      <p>
        I try to follow the principle, shared by the Italian Consumer Code, the guidance of the Italian Competition
        Authority (AGCM) and the Digital Chart of the Italian Advertising Self-Regulatory Institute, that commercial
        communication must always be recognizable as such.
      </p>
      <p>
        {email ? (
          <>
            For collaboration proposals you can write to <a href={`mailto:${email}`}>{email}</a>.
          </>
        ) : (
          <>
            Collaborations are described on <Link href="/lavoriamo-insieme">Let&apos;s work together</Link>.{' '}
            {ISTITUZIONALE.en.contattiPresto}
          </>
        )}
      </p>

      <h2>Partners the links point to</h2>
      <ElencoPartner lingua="en" />
      <p>
        What happens to your data when you click one of these links is explained in the{' '}
        <Link href="/privacy">privacy notice</Link> and in the <Link href="/cookie">cookie policy</Link>.
      </p>
      <h2>Image licenses</h2>
      <p>
        Authors and licenses of the stock images are listed in the <Link href="/crediti-fotografici">photo credits</Link>.
      </p>
    </>
  ),
  es: ({ email }) => (
    <>
      <p>
        <em>Última actualización: 6 de noviembre de 2026</em>
      </p>

      <h2>En qué punto están las afiliaciones</h2>
      {affiliazioniAttive ? (
        <p>
          Algunos enlaces a alojamientos, tours, vuelos, alquileres, seguros, eSIM y productos son enlaces de afiliación:
          si haces clic y después reservas o compras, el sitio socio puede reconocerme una pequeña comisión. La lista de
          abajo indica qué programas están activos hoy.
        </p>
      ) : (
        <p>
          <strong>Hoy no hay ningún programa de afiliación activo.</strong> Los enlaces a alojamientos, tours, vuelos,
          alquileres, seguros, eSIM y productos llevan a la página correcta del socio, pero no me hacen ganar nada. Cuando
          un programa se active, lo verás marcado aquí abajo.
        </p>
      )}
      <p>
        Los enlaces de un programa activo llevan el atributo <code>rel=&quot;sponsored&quot;</code>, como pide Google;
        los de los recuadros «Organiza este viaje» ya lo llevan, por prudencia.
      </p>

      <h2>Dónde encuentras los avisos</h2>
      <ul>
        <li>en los recuadros «Organiza este viaje» y «Reserva» de las páginas de viajes, destinos y experiencias, con un enlace a esta página;</li>
        <li>en las listas «Qué llevar» (equipamiento), junto a los enlaces a Amazon;</li>
        <li>al principio de un contenido patrocinado, si alguna vez lo hay (ver abajo).</li>
      </ul>
      <p>
        <strong>Para ti el precio no cambia.</strong> Con una afiliación activa la comisión la paga el socio, no tú. No
        estás obligado a usar estos enlaces, y los consejos valen aunque reserves en otro sitio.
      </p>

      <h2>De dónde vienen los consejos</h2>
      <p>
        Cada viaje de esta web nace de lugares que he visitado y de experiencias que he vivido: alojamientos, experiencias
        y equipamiento son los que he usado o evaluado al organizar esos viajes. Una comisión no decide qué recomiendo ni en
        qué orden: si algo no me ha gustado, lo escribo, y no enlazo cosas que no recomendaría a un amigo.
      </p>

      {amazonAttivi.length > 0 && (
        <>
          <h2>Amazon</h2>
          <p>
            <strong>Como afiliado de Amazon, obtengo ingresos por las compras que reúnen los requisitos.</strong> Programa
            activo para: {negozi('es')}.
          </p>
        </>
      )}

      <h2>Contenidos patrocinados y colaboraciones</h2>
      <p>
        A día de hoy en el sitio no hay contenidos patrocinados. Si en el futuro una empresa me ofrece gratis o paga un
        viaje, una estancia, un producto o un servicio, lo diré con claridad al principio del contenido (por ejemplo
        «Contenido patrocinado» o «Estancia ofrecida por…»), no escondido al final. Las opiniones siguen siendo mías, y
        ningún socio puede revisar ni aprobar lo que escribo antes de su publicación.
      </p>
      <p>
        Intento seguir el principio, común al Código de Consumo italiano, a las indicaciones de la Autoridad italiana de la
        Competencia y del Mercado (AGCM) y a la Digital Chart del Instituto de Autodisciplina Publicitaria italiano, según
        el cual la comunicación comercial debe ser siempre reconocible como tal.
      </p>
      <p>
        {email ? (
          <>
            Para propuestas de colaboración puedes escribir a <a href={`mailto:${email}`}>{email}</a>.
          </>
        ) : (
          <>
            Las colaboraciones se describen en <Link href="/lavoriamo-insieme">Trabajemos juntos</Link>.{' '}
            {ISTITUZIONALE.es.contattiPresto}
          </>
        )}
      </p>

      <h2>Socios a los que apuntan los enlaces</h2>
      <ElencoPartner lingua="es" />
      <p>
        Lo que ocurre con tus datos cuando haces clic en uno de estos enlaces se explica en la{' '}
        <Link href="/privacy">política de privacidad</Link> y en la <Link href="/cookie">política de cookies</Link>.
      </p>
      <h2>Licencias de las imágenes</h2>
      <p>
        Los autores y las licencias de las imágenes de archivo figuran en los{' '}
        <Link href="/crediti-fotografici">créditos fotográficos</Link>.
      </p>
    </>
  ),
}

export default async function TrasparenzaPage() {
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
            <Corpo email={emailPubblica} />
          </div>
        </Container>
      </section>
    </>
  )
}
