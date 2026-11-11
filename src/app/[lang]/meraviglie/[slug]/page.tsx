import type { Metadata } from 'next'
import { CardRicordo } from '@/components/scheda/CardRicordo'
import { Filigrana } from '@/components/Filigrana'

// la filigrana della meraviglia è quella del Paese dove si trova
const PAESE_MERAVIGLIA: Record<string, string> = {
  'grande-muraglia-cinese': 'cina',
  petra: 'giordania',
  'cristo-redentore': 'brasile',
  'machu-picchu': 'peru',
  'chichen-itza': 'messico',
  colosseo: 'italia',
  'taj-mahal': 'india',
}
import { FirmaAutore } from '@/components/FirmaAutore'
import { notFound } from 'next/navigation'
import { ArrowUpRight, AlertTriangle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { getAllMeraviglie, getMeraviglia } from '@/lib/meraviglie'
import { pageMetadata } from '@/lib/seo'
import { seoMeraviglia } from '@/lib/i18n/contenuti'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { getHeroVideoMeraviglia } from '@/content/meraviglie-hero-video'
import { creditiHeroVideoMeraviglie } from '@/content/meraviglie-hero-video-crediti'
import { creditiMeraviglie } from '@/content/meraviglie-foto-crediti'
import { PageHeader } from '@/components/ui/PageHeader'

const T = {
  it: {
    home: 'Home',
    meraviglie: 'Meraviglie del mondo',
    perche: 'Perché è una meraviglia',
    cosaVedere: 'Cosa vedere e perché',
    tour: 'Tour organizzato o in autonomia?',
    prenotazione: 'Prenotazione',
    prezzi: 'Prezzi e biglietti combinati',
    comeArrivare: 'Come arrivare',
    inAereo: 'In aereo: ',
    dallAeroporto: "Dall'aeroporto al sito: ",
    spostarsi: 'Come spostarsi sul posto: ',
    giorni: 'Giorni speciali e quando andare',
    truffe: 'Truffe comuni da evitare',
    errori: 'Altri errori da non fare',
    mia: 'La mia esperienza',
    info: 'Informazioni pratiche',
    paese: 'Paese',
    durata: 'Durata consigliata',
    periodo: 'Periodo migliore',
    dormire: 'Dove dormire',
    avviso: 'Prezzi, orari e regole di prenotazione cambiano spesso: verificare sempre sui canali ufficiali prima di partire.',
    verificate: 'Informazioni pratiche verificate il',
    su: 'su',
    parziale: 'Alcuni dati non confermati sono indicati in modo generico: fanno fede i siti ufficiali.',
  },
  en: {
    home: 'Home',
    meraviglie: 'Wonders of the world',
    perche: 'Why it is a wonder',
    cosaVedere: 'What to see and why',
    tour: 'Guided tour or on your own?',
    prenotazione: 'Booking',
    prezzi: 'Prices and combined tickets',
    comeArrivare: 'Getting there',
    inAereo: 'By air: ',
    dallAeroporto: 'From the airport to the site: ',
    spostarsi: 'Getting around on site: ',
    giorni: 'Special days and when to go',
    truffe: 'Common scams to avoid',
    errori: 'Other mistakes to avoid',
    mia: 'My experience',
    info: 'Practical information',
    paese: 'Country',
    durata: 'Recommended time',
    periodo: 'Best time to go',
    dormire: 'Where to stay',
    avviso: 'Prices, hours and booking rules change often: always check the official channels before you go.',
    verificate: 'Practical information checked on',
    su: 'on',
    parziale: 'Some details we could not confirm are given in general terms: the official sites are the reference.',
  },
  es: {
    home: 'Inicio',
    meraviglie: 'Maravillas del mundo',
    perche: 'Por qué es una maravilla',
    cosaVedere: 'Qué ver y por qué',
    tour: '¿Tour organizado o por tu cuenta?',
    prenotazione: 'Reserva',
    prezzi: 'Precios y entradas combinadas',
    comeArrivare: 'Cómo llegar',
    inAereo: 'En avión: ',
    dallAeroporto: 'Del aeropuerto al sitio: ',
    spostarsi: 'Cómo moverse por el lugar: ',
    giorni: 'Días especiales y cuándo ir',
    truffe: 'Estafas comunes que evitar',
    errori: 'Otros errores que evitar',
    mia: 'Mi experiencia',
    info: 'Información práctica',
    paese: 'País',
    durata: 'Duración recomendada',
    periodo: 'Mejor época',
    dormire: 'Dónde dormir',
    avviso: 'Los precios, horarios y normas de reserva cambian a menudo: comprueba siempre los canales oficiales antes de viajar.',
    verificate: 'Información práctica verificada el',
    su: 'en',
    parziale: 'Algunos datos no confirmados se indican de forma general: las webs oficiales son la referencia.',
  },
} satisfies Record<Lingua, Record<string, string>>

export async function generateStaticParams() {
  return getAllMeraviglie(await linguaCorrente()).map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const meraviglia = getMeraviglia(slug, lingua)
  if (!meraviglia) return {}
  const seo = seoMeraviglia(slug, lingua)
  return pageMetadata({
    ogPropria: true, // opengraph-image.tsx della pagina
    lingua,
    title: seo?.seoTitle ?? meraviglia.titolo,
    description: seo?.seoDescription ?? meraviglia.descrizione,
    socialTitle: seo?.socialTitle,
    path: `/meraviglie/${slug}`,
    type: 'article',
  })
}

export default async function MeravigliaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const meraviglia = getMeraviglia(slug, lingua)
  if (!meraviglia) notFound()
  const heroVideo = getHeroVideoMeraviglia(meraviglia.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: meraviglia.nome,
    description: meraviglia.descrizione,
    inLanguage: LOCALE[lingua].html,
    address: {
      '@type': 'PostalAddress',
      addressLocality: meraviglia.citta,
      addressCountry: meraviglia.paese,
    },
  }

  return (
    <>
      <Filigrana paese={PAESE_MERAVIGLIA[meraviglia.slug]} />
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { nome: t.home, percorso: '/' },
            { nome: t.meraviglie, percorso: '/meraviglie' },
            { nome: meraviglia.nome, percorso: `/meraviglie/${meraviglia.slug}` },
          ], lingua),
        ]}
      />
      <PageHeader
        crumbs={[
          { label: t.home, href: '/' },
          { label: t.meraviglie, href: '/meraviglie' },
          { label: meraviglia.nome },
        ]}
        eyebrow={`${meraviglia.paese} · ${meraviglia.citta}`}
        title={meraviglia.nome}
        titleNote={meraviglia.nomeLocale}
        lead={<p>{meraviglia.descrizione}</p>}
        media={
          heroVideo
            ? { tipo: 'video', src: heroVideo.src, poster: heroVideo.poster }
            : meraviglia.heroImage
              ? { tipo: 'foto', src: meraviglia.heroImage, alt: meraviglia.heroImageAlt }
              : undefined
        }
        credito={heroVideo ? creditiHeroVideoMeraviglie[meraviglia.slug] : creditiMeraviglie[meraviglia.slug]}
      />

      <section className="sezione">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl text-alpine">{t.perche}</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.storiaBreve}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">{t.cosaVedere}</h2>
              <div className="mt-4 space-y-4">
                {meraviglia.sezioniDaVedere.map((sezione) => (
                  <div key={sezione.nome} className="rounded-none border border-alpine/10 bg-cream-dark/40 p-5">
                    <h3 className="font-display text-lg text-alpine">{sezione.nome}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone">{sezione.perche}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">{t.tour}</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.tourOAutonomo}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">{t.prenotazione}</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.prenotazione}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">{t.prezzi}</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.prezzi}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">{t.comeArrivare}</h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-stone">
                <p><span className="font-medium text-ink">{t.inAereo}</span>{meraviglia.comeArrivareInternazionale}</p>
                <p><span className="font-medium text-ink">{t.dallAeroporto}</span>{meraviglia.comeArrivareLocale}</p>
                <p><span className="font-medium text-ink">{t.spostarsi}</span>{meraviglia.comeSpostarsi}</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">{t.giorni}</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.giorniSpeciali}</p>
            </div>

            {meraviglia.scamDaEvitare.length > 0 && (
              <div className="rounded-none border border-rosso/20 bg-rosso/5 p-6">
                <h2 className="flex items-center gap-2 font-display text-2xl text-rosso-dark">
                  <AlertTriangle size={20} />
                  {t.truffe}
                </h2>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-stone">
                  {meraviglia.scamDaEvitare.map((v) => (
                    <li key={v}>· {v}</li>
                  ))}
                </ul>
              </div>
            )}

            {meraviglia.erroriDaEvitare.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">{t.errori}</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {meraviglia.erroriDaEvitare.map((v) => (
                    <li key={v}>· {v}</li>
                  ))}
                </ul>
              </div>
            )}

            {meraviglia.miaEsperienza && (
              <CardRicordo etichetta={t.mia} className="mt-4">{meraviglia.miaEsperienza}</CardRicordo>
            )}
            <FirmaAutore />
            {meraviglia.verificataIl && meraviglia.fonti && meraviglia.fonti.length > 0 && (
              <p className="border-t border-alpine/10 pt-4 text-xs leading-relaxed text-stone/85">
                {t.verificate}{' '}
                {new Date(`${meraviglia.verificataIl}T12:00:00Z`).toLocaleDateString(LOCALE[lingua].html, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}{' '}
                {t.su}{' '}
                {meraviglia.fonti.map((f, i) => (
                  <span key={f.url}>
                    {i > 0 && ', '}
                    <a href={f.url} target="_blank" rel="noopener noreferrer" className="underline decoration-alpine/30 underline-offset-2 hover:text-alpine">
                      {f.titolo}
                    </a>
                  </span>
                ))}
                .{meraviglia.statoVerifica === 'parziale' && ` ${t.parziale}`}
              </p>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="font-display text-lg text-alpine">{t.info}</h2>
              <PracticalInfo
                className="mt-4"
                items={[
                  { label: t.paese, value: meraviglia.paese },
                  { label: t.durata, value: meraviglia.durataConsigliata },
                  { label: t.periodo, value: meraviglia.periodoMigliore },
                  { label: t.dormire, value: meraviglia.doveDormire },
                ]}
              />
            </div>
            <p className="flex items-center gap-1.5 text-xs text-stone/85">
              <ArrowUpRight size={12} />
              {t.avviso}
            </p>
          </aside>
        </Container>
      </section>
    </>
  )
}
