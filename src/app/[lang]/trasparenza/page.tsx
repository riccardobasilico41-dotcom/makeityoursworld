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
    titolo: 'Trasparenza: link affiliati e collaborazioni',
    desc: 'Link affiliati su Make It Yours World: il prezzo per te non cambia, i consigli vengono dai viaggi fatti, i contenuti sponsorizzati sono sempre dichiarati.',
    crumb: 'Trasparenza',
    lead: 'Il blog si mantiene anche con qualche link affiliato. Qui spiego come funzionano, cosa cambia per te (niente) e come scelgo cosa consigliare.',
  },
  en: {
    titolo: 'Transparency: Affiliate Links and Collaborations',
    desc: "Affiliate links on Make It Yours World: the price for you doesn't change, the recommendations come from trips actually taken, sponsored content is always disclosed.",
    crumb: 'Transparency',
    lead: 'The blog is also kept going by a few affiliate links. Here I explain how they work, what changes for you (nothing) and how I choose what to recommend.',
  },
  es: {
    titolo: 'Transparencia: enlaces de afiliación y colaboraciones',
    desc: 'Enlaces de afiliación en Make It Yours World: el precio para ti no cambia, los consejos vienen de los viajes hechos, los contenidos patrocinados se declaran siempre.',
    crumb: 'Transparencia',
    lead: 'El blog se mantiene también con algún enlace de afiliación. Aquí explico cómo funcionan, qué cambia para ti (nada) y cómo elijo qué recomendar.',
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

const PARTNER: Record<Lingua, { nome: string; programma: string; cosa: string }[]> = {
  it: [
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
  ],
  en: [
    { nome: 'Booking.com', programma: 'Booking.com Affiliate Partner Programme', cosa: 'accommodation' },
    { nome: 'Trip.com', programma: 'Trip.com Affiliate', cosa: 'accommodation and trains, mainly in Asia' },
    { nome: 'GetYourGuide', programma: 'GetYourGuide Partner', cosa: 'tours, tickets and experiences' },
    { nome: 'Viator', programma: 'Viator Partner (Tripadvisor)', cosa: 'tours and experiences' },
    { nome: 'Amazon', programma: 'Amazon EU Associates (Amazon.it)', cosa: 'guidebooks, books and travel gear' },
    { nome: 'Heymondo', programma: 'Heymondo affiliate program', cosa: 'travel insurance' },
    { nome: 'Airalo', programma: 'Airalo affiliate program', cosa: 'eSIMs for data abroad' },
    { nome: 'Holafly', programma: 'Holafly affiliate program', cosa: 'eSIMs for data abroad' },
    { nome: 'DiscoverCars', programma: 'DiscoverCars affiliate program', cosa: 'car rental' },
    { nome: 'Skyscanner', programma: 'Skyscanner affiliate program', cosa: 'flight search' },
  ],
  es: [
    { nome: 'Booking.com', programma: 'Booking.com Affiliate Partner Programme', cosa: 'alojamientos' },
    { nome: 'Trip.com', programma: 'Trip.com Affiliate', cosa: 'alojamientos y trenes, sobre todo en Asia' },
    { nome: 'GetYourGuide', programma: 'GetYourGuide Partner', cosa: 'tours, entradas y experiencias' },
    { nome: 'Viator', programma: 'Viator Partner (Tripadvisor)', cosa: 'tours y experiencias' },
    { nome: 'Amazon', programma: 'Amazon EU Associates (Amazon.it)', cosa: 'guías, libros y equipamiento de viaje' },
    { nome: 'Heymondo', programma: 'programa de afiliación de Heymondo', cosa: 'seguro de viaje' },
    { nome: 'Airalo', programma: 'programa de afiliación de Airalo', cosa: 'eSIM para internet en el extranjero' },
    { nome: 'Holafly', programma: 'programa de afiliación de Holafly', cosa: 'eSIM para internet en el extranjero' },
    { nome: 'DiscoverCars', programma: 'programa de afiliación de DiscoverCars', cosa: 'alquiler de coches' },
    { nome: 'Skyscanner', programma: 'programa de afiliación de Skyscanner', cosa: 'buscador de vuelos' },
  ],
}

const CORPO: Record<Lingua, (p: { email: string }) => ReactNode> = {
  it: ({ email }) => (
    <>
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
        {PARTNER.it.map((p) => (
          <li key={p.nome}>
            <strong>{p.nome}</strong>, {p.programma}: {p.cosa}
          </li>
        ))}
      </ul>
      <p>
        Cosa succede ai tuoi dati quando clicchi uno di questi link è spiegato nell&apos;
        <Link href="/privacy">informativa privacy</Link> e nella <Link href="/cookie">cookie policy</Link>.
      </p>
      <h2>Licenze delle immagini</h2>
      <p>
        Autori e licenze delle immagini usate su concessione sono elencati nei{' '}
        <Link href="/crediti-fotografici">crediti</Link>.
      </p>
    </>
  ),
  en: ({ email }) => (
    <>
      <p>
        <em>Last updated: October 30, 2026</em>
      </p>

      <h2>How affiliate links work</h2>
      <p>
        Some links to accommodation, tours, flights, rentals, insurance, eSIMs and products are affiliate links: if you
        click and then book or buy, the partner site may pay me a small commission. These links carry the{' '}
        <code>rel=&quot;sponsored&quot;</code> attribute, as Google asks, and you find them mostly in the «Plan this trip»
        boxes on the pages.
      </p>
      <p>
        <strong>The price doesn&apos;t change for you.</strong> You pay exactly what you would pay by going to the site
        directly: the partner pays the commission, not you. You are not required to use these links, and the
        recommendations hold even if you book elsewhere.
      </p>
      <p>
        Some program sign-ups are still in progress: until a program is active, the link still takes you to the right page
        of the partner, but with no compensation for me.
      </p>

      <h2>Where the recommendations come from</h2>
      <p>
        What you find here comes from trips I actually took: the itineraries, places to stay, experiences and gear are the
        ones I used or evaluated while organizing those trips. A commission doesn&apos;t decide what I recommend or in
        what order: if I didn&apos;t like something I say so, even when there is an affiliate link, and I don&apos;t put
        affiliate links on things I wouldn&apos;t recommend to a friend.
      </p>

      <h2>Amazon</h2>
      <p>
        <strong>As an Amazon Associate I earn from qualifying purchases.</strong> The links to Amazon.it are part of the
        Amazon EU Associates program.
      </p>

      <h2>Sponsored content and collaborations</h2>
      <p>
        As of today there are no sponsored articles on the site. If in the future a trip, a stay, a product or a service is
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
        For collaboration proposals you can write to{' '}
        {email ? (
          <a href={`mailto:${email}`}>{email}</a>
        ) : (
          <mark className="bg-rosso/10 px-1 text-rosso">[email to be added]</mark>
        )}
        .
      </p>

      <h2>Affiliate programs</h2>
      <p>These are the partners the site may have affiliate links to:</p>
      <ul>
        {PARTNER.en.map((p) => (
          <li key={p.nome}>
            <strong>{p.nome}</strong>, {p.programma}: {p.cosa}
          </li>
        ))}
      </ul>
      <p>
        What happens to your data when you click one of these links is explained in the{' '}
        <Link href="/privacy">privacy notice</Link> and in the <Link href="/cookie">cookie policy</Link>.
      </p>
      <h2>Image licenses</h2>
      <p>
        Authors and licenses of the images used under license are listed in the{' '}
        <Link href="/crediti-fotografici">credits</Link>.
      </p>
    </>
  ),
  es: ({ email }) => (
    <>
      <p>
        <em>Última actualización: 30 de octubre de 2026</em>
      </p>

      <h2>Cómo funcionan los enlaces de afiliación</h2>
      <p>
        Algunos enlaces a alojamientos, tours, vuelos, alquileres, seguros, eSIM y productos son enlaces de afiliación: si
        haces clic y después reservas o compras, el sitio socio puede reconocerme una pequeña comisión. Estos enlaces
        llevan el atributo <code>rel=&quot;sponsored&quot;</code>, como pide Google, y los encuentras sobre todo en los
        recuadros «Organiza este viaje» de las páginas.
      </p>
      <p>
        <strong>Para ti el precio no cambia.</strong> Pagas exactamente lo que pagarías yendo directamente al sitio: la
        comisión la paga el socio, no tú. No estás obligado a usar estos enlaces, y los consejos valen aunque reserves en
        otro sitio.
      </p>
      <p>
        Algunas inscripciones a los programas siguen en curso: mientras un programa no esté activo, el enlace lleva igualmente
        a la página correcta del socio, pero sin ninguna compensación para mí.
      </p>

      <h2>De dónde vienen los consejos</h2>
      <p>
        Lo que encuentras aquí nace de los viajes que he hecho de verdad: los itinerarios, los alojamientos, las
        experiencias y el equipamiento son los que he usado o evaluado al organizar esos viajes. Una comisión no decide qué
        recomiendo ni en qué orden: si algo no me ha gustado, lo escribo, incluso cuando hay un enlace de afiliación, y no
        pongo enlaces de afiliación a cosas que no recomendaría a un amigo.
      </p>

      <h2>Amazon</h2>
      <p>
        <strong>Como afiliado de Amazon, obtengo ingresos por las compras que reúnen los requisitos.</strong> Los enlaces a
        Amazon.it forman parte del programa Amazon EU Associates.
      </p>

      <h2>Contenidos patrocinados y colaboraciones</h2>
      <p>
        A día de hoy en el sitio no hay artículos patrocinados. Si en el futuro una empresa me ofrece gratis o paga un
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
        Para propuestas de colaboración puedes escribir a{' '}
        {email ? (
          <a href={`mailto:${email}`}>{email}</a>
        ) : (
          <mark className="bg-rosso/10 px-1 text-rosso">[correo electrónico por añadir]</mark>
        )}
        .
      </p>

      <h2>Programas de afiliación</h2>
      <p>Estos son los socios a los que el sitio puede tener enlaces de afiliación:</p>
      <ul>
        {PARTNER.es.map((p) => (
          <li key={p.nome}>
            <strong>{p.nome}</strong>, {p.programma}: {p.cosa}
          </li>
        ))}
      </ul>
      <p>
        Lo que ocurre con tus datos cuando haces clic en uno de estos enlaces se explica en la{' '}
        <Link href="/privacy">política de privacidad</Link> y en la <Link href="/cookie">política de cookies</Link>.
      </p>
      <h2>Licencias de las imágenes</h2>
      <p>
        Los autores y las licencias de las imágenes usadas con permiso figuran en los{' '}
        <Link href="/crediti-fotografici">créditos</Link>.
      </p>
    </>
  ),
}

export default async function TrasparenzaPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const Corpo = CORPO[lingua]
  const email: string = siteConfig.contact.email
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
            <Corpo email={email} />
          </div>
        </Container>
      </section>
    </>
  )
}
