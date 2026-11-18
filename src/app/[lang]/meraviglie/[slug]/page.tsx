import type { Metadata } from 'next'
import { paesiDelViaggio } from '@/lib/viaggi-filtri'
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
import { BedDouble, CalendarDays, Clock, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { InfoPratiche, RiquadroAvviso, TitoloSezione } from '@/components/scheda/Blocchi'
import { FaqGuida, GiteGuida, LuoghiGuida, ProgrammiGuida, ZoneSaporiAttenzioni } from '@/components/scheda/MiniGuida'
import { MappaLuoghi, MesiMeraviglia, TabellaBiglietti } from '@/components/scheda/GuidaMeraviglia'
import { Galleria } from '@/components/scheda/Galleria'
import { RelatedContent, type RelatedItem } from '@/components/RelatedContent'
import { StickyTableOfContents, type TocItem } from '@/components/StickyTableOfContents'
import { getAllViaggi } from '@/lib/viaggi'
import { getDestinazione } from '@/lib/geo'
import { getAllMeraviglie, getMeraviglia } from '@/lib/meraviglie'
import { pageMetadata } from '@/lib/seo'
import { seoMeraviglia } from '@/lib/i18n/contenuti'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, faqJsonLd, paginaLuogoJsonLd } from '@/lib/structured-data'
import { dateContenuto, dataLeggibile, ETICHETTA_AGGIORNATO } from '@/lib/date-contenuti'
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
    mia: 'Il mio ricordo',
    info: 'Informazioni pratiche',
    paese: 'Paese',
    durata: 'Durata consigliata',
    periodo: 'Periodo migliore',
    dormire: 'Dove dormire',
    avviso: 'Prezzi, orari e regole di prenotazione cambiano spesso: verificare sempre sui canali ufficiali prima di partire.',
    verificate: 'Informazioni pratiche verificate il',
    su: 'su',
    inBreve: 'In breve',
    luoghi: 'Cosa vedere',
    programmi: 'Programmi di visita',
    biglietti: 'Biglietti',
    mesi: 'Mese per mese',
    zone: 'Dove dormire',
    gite: 'Gite nei dintorni',
    avvertenze: 'Truffe ed errori',
    faq: 'Domande frequenti',
    foto: 'Le foto',
    correlati: 'Nei miei viaggi',
    viaggio: 'Itinerario completo',
    scheda: 'Scheda destinazione',
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
    mia: 'My memory',
    info: 'Practical information',
    paese: 'Country',
    durata: 'Recommended time',
    periodo: 'Best time to go',
    dormire: 'Where to stay',
    avviso: 'Prices, hours and booking rules change often: always check the official channels before you go.',
    verificate: 'Practical information checked on',
    su: 'on',
    inBreve: 'At a glance',
    luoghi: 'What to see',
    programmi: 'Visit plans',
    biglietti: 'Tickets',
    mesi: 'Month by month',
    zone: 'Where to stay',
    gite: 'Day trips',
    avvertenze: 'Scams and mistakes',
    faq: 'FAQ',
    foto: 'Photos',
    correlati: 'On my trips',
    viaggio: 'Full itinerary',
    scheda: 'Destination guide',
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
    mia: 'Mi recuerdo',
    info: 'Información práctica',
    paese: 'País',
    durata: 'Duración recomendada',
    periodo: 'Mejor época',
    dormire: 'Dónde dormir',
    avviso: 'Los precios, horarios y normas de reserva cambian a menudo: comprueba siempre los canales oficiales antes de viajar.',
    verificate: 'Información práctica verificada el',
    su: 'en',
    inBreve: 'En breve',
    luoghi: 'Qué ver',
    programmi: 'Planes de visita',
    biglietti: 'Entradas',
    mesi: 'Mes a mes',
    zone: 'Dónde dormir',
    gite: 'Excursiones',
    avvertenze: 'Estafas y errores',
    faq: 'Preguntas frecuentes',
    foto: 'Las fotos',
    correlati: 'En mis viajes',
    viaggio: 'Itinerario completo',
    scheda: 'Ficha del destino',
    parziale: 'Algunos datos no confirmados se indican de forma general: las webs oficiales son la referencia.',
  },
} satisfies Record<Lingua, Record<string, string>>

// slug fuori dall'elenco: nessuna rotta, quindi la 404 vera di global-not-found.tsx (già nell'HTML)
export const dynamicParams = false

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

// nomi con cui la meraviglia compare nei diari di viaggio (italiani): servono a trovare i viaggi che ci passano
const ALIAS_MERAVIGLIA: Record<string, string[]> = {
  'grande-muraglia-cinese': ['Grande Muraglia', 'Muraglia cinese', 'Mutianyu'],
  petra: ['Petra'],
  'cristo-redentore': ['Cristo Redentore', 'Corcovado'],
  'machu-picchu': ['Machu Picchu'],
  'chichen-itza': ['Chichén Itzá', 'Chichen Itza', 'Chichén Itza'],
  colosseo: ['Colosseo'],
  'taj-mahal': ['Taj Mahal'],
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Slug dei viaggi il cui testo italiano (titolo, apertura, giorni, sezioni) nomina la meraviglia. */
function viaggiConMeraviglia(slug: string, nome: string, paese: string): string[] {
  const nomi = [nome, ...(ALIAS_MERAVIGLIA[slug] ?? [])]
  // Il nome da solo non basta («l'Hard Rock Café a forma di Colosseo» in Florida): il viaggio deve essere in quel Paese.
  const paeseSlug = paese.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/\s+/g, '-')
  const re = new RegExp(`(?<![\\p{L}])(${nomi.map(escapeRe).join('|')})(?![\\p{L}])`, 'u')
  return getAllViaggi('it')
    .map((v) => {
      const titolo = re.test(v.titolo) ? 2 : 0
      const corpo = [v.apertura ?? '', ...v.giorni.map((g) => `${g.titolo}\n${g.corpo}`), ...v.sezioni.map((x) => x.corpo)].join('\n')
      const nelPaese = paesiDelViaggio(v.slug).includes(paeseSlug)
      return { slug: v.slug, punti: nelPaese ? titolo + (re.test(corpo) ? 1 : 0) : 0 }
    })
    .filter((x) => x.punti > 0)
    .sort((a, b) => b.punti - a.punti)
    .slice(0, 6)
    .map((x) => x.slug)
}

export default async function MeravigliaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const meraviglia = getMeraviglia(slug, lingua)
  if (!meraviglia) notFound()
  const m = meraviglia
  const heroVideo = getHeroVideoMeraviglia(m.slug)

  // correlati: viaggi che passano di qui (dal testo italiano) e scheda destinazione collegata
  const nomeIt = getMeraviglia(slug, 'it')?.nome ?? m.nome
  const tuttiViaggi = getAllViaggi(lingua)
  const viaggi = viaggiConMeraviglia(m.slug, nomeIt, getMeraviglia(slug, 'it')?.paese ?? m.paese)
    .map((s) => tuttiViaggi.find((v) => v.slug === s))
    .filter((v) => v !== undefined)
  const [paeseDest, slugDest] = m.destinazione?.split('/') ?? []
  const dest = paeseDest && slugDest ? getDestinazione(paeseDest, slugDest, lingua) : undefined
  const correlati: RelatedItem[] = [
    ...(dest ? [{ href: `/destinazioni/${paeseDest}/${slugDest}`, eyebrow: t.scheda, titolo: dest.nome, sottotitolo: m.paese }] : []),
    ...viaggi.map((v) => ({ href: `/viaggi/${v.slug}`, eyebrow: t.viaggio, titolo: v.titolo, sottotitolo: v.durataBreve })),
  ]

  const avvertenze = m.scamDaEvitare.length > 0 || m.erroriDaEvitare.length > 0
  const conLuoghi = !!m.luoghi?.length
  const conGalleria = (m.galleria?.length ?? 0) >= 2
  const conZone = !!m.zone?.length

  // indice della pagina: solo le sezioni presenti, nell'ordine in cui compaiono
  const toc: TocItem[] = [
    { href: '#info-pratiche', label: t.inBreve },
    { href: '#perche', label: t.perche },
    { href: '#cosa-vedere', label: t.luoghi },
    ...(m.programmi?.length ? [{ href: '#programmi', label: t.programmi }] : []),
    { href: '#biglietti', label: t.biglietti },
    ...(m.mesi?.length === 12 ? [{ href: '#mesi', label: t.mesi }] : []),
    { href: '#come-arrivare', label: t.comeArrivare },
    ...(conZone || m.doveDormire ? [{ href: '#dove-dormire', label: t.zone }] : []),
    ...(m.gite?.length ? [{ href: '#gite', label: t.gite }] : []),
    ...(avvertenze ? [{ href: '#avvertenze', label: t.avvertenze }] : []),
    ...(m.faq?.length ? [{ href: '#faq', label: t.faq }] : []),
    ...(conGalleria ? [{ href: '#foto', label: t.foto }] : []),
    ...(correlati.length ? [{ href: '#correlati', label: t.correlati }] : []),
  ]

  const date = dateContenuto('meraviglie', m.slug)
  const jsonLd = paginaLuogoJsonLd(
    {
      nome: m.nome,
      percorso: `/meraviglie/${m.slug}`,
      pubblicato: date?.pubblicato,
      aggiornato: date?.aggiornato,
      luogo: {
        '@type': 'TouristAttraction',
        name: m.nome,
        description: m.descrizione,
        inLanguage: LOCALE[lingua].html,
        address: {
          '@type': 'PostalAddress',
          addressLocality: m.citta,
          addressCountry: m.paese,
        },
      },
    },
    lingua,
  )

  const testo = 'mt-3 max-w-3xl text-base leading-relaxed text-stone'

  return (
    <>
      <Filigrana paese={PAESE_MERAVIGLIA[m.slug]} />
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { nome: t.home, percorso: '/' },
            { nome: t.meraviglie, percorso: '/meraviglie' },
            { nome: m.nome, percorso: `/meraviglie/${m.slug}` },
          ], lingua),
          m.faq?.length ? faqJsonLd(m.faq, lingua) : null,
        ].filter((d) => d !== null)}
      />
      <PageHeader
        crumbs={[
          { label: t.home, href: '/' },
          { label: t.meraviglie, href: '/meraviglie' },
          { label: m.nome },
        ]}
        eyebrow={`${m.paese} · ${m.citta}`}
        title={m.nome}
        titleNote={m.nomeLocale}
        lead={<p>{m.descrizione}</p>}
        meta={
          date ? (
            <p className="text-sm text-stone">
              {ETICHETTA_AGGIORNATO[lingua]} <time dateTime={date.aggiornato}>{dataLeggibile(date.aggiornato, lingua)}</time>
            </p>
          ) : undefined
        }
        media={
          heroVideo
            ? { tipo: 'video', src: heroVideo.src, poster: heroVideo.poster }
            : m.heroImage
              ? { tipo: 'foto', src: m.heroImage, alt: m.heroImageAlt }
              : undefined
        }
        credito={heroVideo ? creditiHeroVideoMeraviglie[m.slug] : creditiMeraviglie[m.slug]}
      />

      <InfoPratiche
        titolo={t.info}
        voci={[
          { label: t.paese, value: m.paese, icona: MapPin },
          { label: t.durata, value: m.durataConsigliata, icona: Clock },
          { label: t.periodo, value: m.periodoMigliore, icona: CalendarDays },
          { label: t.dormire, value: m.doveDormire, icona: BedDouble },
        ]}
      />

      <section className="sezione">
        <Container className="space-y-14">
          {/* wrapper: l'indice resta fermo qui invece di scorrere sopra le sezioni */}
          <div className="max-w-sm">
            <StickyTableOfContents items={toc} />
          </div>

          {m.miaEsperienza && (
            <div className="max-w-3xl">
              <CardRicordo etichetta={t.mia}>{m.miaEsperienza}</CardRicordo>
            </div>
          )}

          <div id="perche" className="scroll-mt-24">
            <TitoloSezione>{t.perche}</TitoloSezione>
            <p className={testo}>{m.storiaBreve}</p>
          </div>

          <div id="cosa-vedere" className="scroll-mt-24 space-y-10">
            {conLuoghi ? (
              <>
                <MappaLuoghi luoghi={m.luoghi} nome={m.nome} lingua={lingua} />
                <LuoghiGuida d={m} lingua={lingua} />
              </>
            ) : (
              <div className="max-w-3xl">
                <TitoloSezione>{t.cosaVedere}</TitoloSezione>
                <div className="mt-4 space-y-4">
                  {m.sezioniDaVedere.map((sezione) => (
                    <div key={sezione.nome} className="scheda-lista p-5">
                      <h3 className="titolo-scheda text-alpine">{sezione.nome}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone">{sezione.perche}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {m.programmi?.length ? (
            <div id="programmi" className="scroll-mt-24">
              <ProgrammiGuida d={m} lingua={lingua} />
            </div>
          ) : null}

          <div className="max-w-3xl">
            <TitoloSezione>{t.tour}</TitoloSezione>
            <p className={testo}>{m.tourOAutonomo}</p>
          </div>

          <div id="biglietti" className="scroll-mt-24 space-y-8">
            <TabellaBiglietti biglietti={m.biglietti} lingua={lingua} />
            <div className="max-w-3xl">
              <h2 className="titolo-scheda text-alpine">{t.prezzi}</h2>
              <p className={testo}>{m.prezzi}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="titolo-scheda text-alpine">{t.prenotazione}</h2>
              <p className={testo}>{m.prenotazione}</p>
            </div>
          </div>

          {m.mesi?.length === 12 && (
            <div id="mesi" className="scroll-mt-24">
              <MesiMeraviglia mesi={m.mesi} lingua={lingua} />
            </div>
          )}

          <div className="max-w-3xl">
            <TitoloSezione>{t.giorni}</TitoloSezione>
            <p className={testo}>{m.giorniSpeciali}</p>
          </div>

          <div id="come-arrivare" className="max-w-3xl scroll-mt-24">
            <TitoloSezione>{t.comeArrivare}</TitoloSezione>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-stone">
              <p><span className="font-medium text-ink">{t.inAereo}</span>{m.comeArrivareInternazionale}</p>
              <p><span className="font-medium text-ink">{t.dallAeroporto}</span>{m.comeArrivareLocale}</p>
              <p><span className="font-medium text-ink">{t.spostarsi}</span>{m.comeSpostarsi}</p>
            </div>
          </div>

          {conZone ? (
            <div id="dove-dormire" className="scroll-mt-24">
              <ZoneSaporiAttenzioni d={{ zone: m.zone }} lingua={lingua} />
            </div>
          ) : m.doveDormire ? (
            <div id="dove-dormire" className="max-w-3xl scroll-mt-24">
              <TitoloSezione>{t.dormire}</TitoloSezione>
              <p className={testo}>{m.doveDormire}</p>
            </div>
          ) : null}

          {m.gite?.length ? (
            <div id="gite" className="scroll-mt-24">
              <GiteGuida d={m} lingua={lingua} />
            </div>
          ) : null}

          {avvertenze && (
            <div id="avvertenze" className="scroll-mt-24 space-y-6">
              <RiquadroAvviso titolo={t.truffe} voci={m.scamDaEvitare} />
              <RiquadroAvviso titolo={t.errori} voci={m.erroriDaEvitare} />
            </div>
          )}

          {m.faq?.length ? (
            <div id="faq" className="scroll-mt-24">
              <FaqGuida d={m} lingua={lingua} />
            </div>
          ) : null}

          {conGalleria && (
            <div id="foto" className="scroll-mt-24">
              <TitoloSezione>{t.foto}</TitoloSezione>
              <Galleria foto={m.galleria!.slice(0, 6)} />
            </div>
          )}

          {correlati.length > 0 && (
            <div id="correlati" className="scroll-mt-24">
              <RelatedContent titolo={t.correlati} items={correlati} />
            </div>
          )}

          <div className="max-w-3xl space-y-4">
            <FirmaAutore />
            {m.verificataIl && m.fonti && m.fonti.length > 0 && (
              <p className="border-t border-alpine/10 pt-4 text-xs leading-relaxed text-stone/85">
                {t.verificate}{' '}
                {new Date(`${m.verificataIl}T12:00:00Z`).toLocaleDateString(LOCALE[lingua].html, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}{' '}
                {t.su}{' '}
                {m.fonti.map((f, i) => (
                  <span key={f.url}>
                    {i > 0 && ', '}
                    <a href={f.url} target="_blank" rel="noopener noreferrer" className="underline decoration-alpine/30 underline-offset-2 hover:text-alpine">
                      {f.titolo}
                    </a>
                  </span>
                ))}
                .{m.statoVerifica === 'parziale' && ` ${t.parziale}`}
              </p>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
