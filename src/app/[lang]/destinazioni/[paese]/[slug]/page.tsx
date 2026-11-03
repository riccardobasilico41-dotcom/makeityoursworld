import type { Metadata } from 'next'
import Link from '@/components/ui/Link'
import { Filigrana } from '@/components/Filigrana'
import { SalvaBottone } from '@/components/SalvaBottone'
import { FirmaAutore } from '@/components/FirmaAutore'
import { PrenotaQui } from '@/components/OrganizzaViaggio'
import { link } from '@/lib/affiliazioni'
import { notFound } from 'next/navigation'
import { ArrowRight, Camera, BedDouble, Bus, CalendarDays, Clock, Compass, Eye, Footprints, MapPin, Moon, Plane, Sparkles, Utensils, Wallet } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Rich } from '@/components/ui/Rich'
import { Galleria, type FotoGalleria } from '@/components/scheda/Galleria'
import { ElencoNumerato, ErroriDaEvitare, InfoPratiche, Ricordo, SchedaTesto, TitoloSezione } from '@/components/scheda/Blocchi'
import { ExperienceCard } from '@/components/ExperienceCard'
import { ComparisonBlock } from '@/components/ComparisonBlock'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/structured-data'
import { RelatedContent } from '@/components/RelatedContent'
import {
  getAllDestinazioni,
  getDestinazione,
  getPaese,
  getEsperienzeDiDestinazione,
  getViaggiByDestinazione,
  getTripMeta,
} from '@/lib/geo'
import { pageMetadata, primoTitoloCheSta } from '@/lib/seo'
import { richNodes } from '@/components/ui/Rich'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { etichette } from '@/lib/i18n/etichette'

const T = {
  it: {
    home: 'Home',
    destinazioni: 'Destinazioni',
    giorniRe: /^\d[\d\s–-]*giorn[oi]$/i,
    titoloGiorniErrori: (n: string, g: string, e: number) => `${n}: cosa vedere in ${g} e ${e} errori da evitare`,
    titoloGiorniOrganizzarsi: (n: string, g: string) => `${n}: cosa vedere in ${g} e come organizzarsi`,
    titoloGiorni: (n: string, g: string) => `${n}: cosa vedere in ${g}`,
    titoloErrori: (n: string, e: number) => `${n}: cosa vedere e ${e} errori da evitare`,
    titoloPaese: (n: string, p: string) => `${n} (${p}): cosa vedere e consigli pratici`,
    titoloConsigli: (n: string) => `${n}: cosa vedere e consigli pratici`,
    titoloVedere: (n: string) => `${n}: cosa vedere`,
    qGiorni: (n: string) => `Quanti giorni servono per ${n}?`,
    qPeriodo: (n: string) => `Qual è il periodo migliore per ${n}?`,
    qArrivare: (n: string) => `Come arrivare a ${n}?`,
    qSpostarsi: (n: string) => `Come spostarsi a ${n}?`,
    qCosto: (n: string) => `Quanto costa ${n}?`,
    giorniConsigliati: 'Giorni consigliati',
    periodoMigliore: 'Periodo migliore',
    costi: 'Costi',
    comeArrivare: 'Come arrivare',
    comeSpostarsi: 'Come spostarsi',
    perche: 'Perché andarci',
    foto: 'Le foto',
    cosaVedere: 'Cosa vedere',
    cosaFare: 'Cosa fare',
    esperienzeQui: 'Le esperienze da fare qui',
    mangiare: 'Mangiare, dormire, uscire',
    dormire: 'Dove dormire',
    mangiareDove: 'Dove mangiare',
    dopoCena: 'Dopo cena',
    itinerari: 'Itinerari che includono questa destinazione',
    itinerarioCompleto: 'Itinerario completo',
    hotel: (n: string) => `Hotel: ${n}`,
    attivita: (n: string) => `Attività: ${n}`,
  },
  en: {
    home: 'Home',
    destinazioni: 'Destinations',
    giorniRe: /^\d[\d\s–-]*days?$/i,
    titoloGiorniErrori: (n: string, g: string, e: number) => `${n}: what to see in ${g} and ${e} mistakes to avoid`,
    titoloGiorniOrganizzarsi: (n: string, g: string) => `${n}: what to see in ${g} and how to plan it`,
    titoloGiorni: (n: string, g: string) => `${n}: what to see in ${g}`,
    titoloErrori: (n: string, e: number) => `${n}: what to see and ${e} mistakes to avoid`,
    titoloPaese: (n: string, p: string) => `${n} (${p}): what to see and practical tips`,
    titoloConsigli: (n: string) => `${n}: what to see and practical tips`,
    titoloVedere: (n: string) => `${n}: what to see`,
    qGiorni: (n: string) => `How many days do you need for ${n}?`,
    qPeriodo: (n: string) => `What is the best time to visit ${n}?`,
    qArrivare: (n: string) => `How do you get to ${n}?`,
    qSpostarsi: (n: string) => `How do you get around ${n}?`,
    qCosto: (n: string) => `How much does ${n} cost?`,
    giorniConsigliati: 'Recommended days',
    periodoMigliore: 'Best time to go',
    costi: 'Costs',
    comeArrivare: 'Getting there',
    comeSpostarsi: 'Getting around',
    perche: 'Why go',
    foto: 'Photos',
    cosaVedere: 'What to see',
    cosaFare: 'What to do',
    esperienzeQui: 'Experiences to have here',
    mangiare: 'Eating, sleeping, going out',
    dormire: 'Where to sleep',
    mangiareDove: 'Where to eat',
    dopoCena: 'After dinner',
    itinerari: 'Itineraries that include this destination',
    itinerarioCompleto: 'Full itinerary',
    hotel: (n: string) => `Hotel: ${n}`,
    attivita: (n: string) => `Activities: ${n}`,
  },
  es: {
    home: 'Inicio',
    destinazioni: 'Destinos',
    giorniRe: /^\d[\d\s–-]*d[ií]as?$/i,
    titoloGiorniErrori: (n: string, g: string, e: number) => `${n}: qué ver en ${g} y ${e} errores que evitar`,
    titoloGiorniOrganizzarsi: (n: string, g: string) => `${n}: qué ver en ${g} y cómo organizarse`,
    titoloGiorni: (n: string, g: string) => `${n}: qué ver en ${g}`,
    titoloErrori: (n: string, e: number) => `${n}: qué ver y ${e} errores que evitar`,
    titoloPaese: (n: string, p: string) => `${n} (${p}): qué ver y consejos prácticos`,
    titoloConsigli: (n: string) => `${n}: qué ver y consejos prácticos`,
    titoloVedere: (n: string) => `${n}: qué ver`,
    qGiorni: (n: string) => `¿Cuántos días hacen falta para ${n}?`,
    qPeriodo: (n: string) => `¿Cuál es la mejor época para ir a ${n}?`,
    qArrivare: (n: string) => `¿Cómo llegar a ${n}?`,
    qSpostarsi: (n: string) => `¿Cómo moverse por ${n}?`,
    qCosto: (n: string) => `¿Cuánto cuesta ${n}?`,
    giorniConsigliati: 'Días recomendados',
    periodoMigliore: 'Mejor época',
    costi: 'Costes',
    comeArrivare: 'Cómo llegar',
    comeSpostarsi: 'Cómo moverse',
    perche: 'Por qué ir',
    foto: 'Las fotos',
    cosaVedere: 'Qué ver',
    cosaFare: 'Qué hacer',
    esperienzeQui: 'Experiencias que vivir aquí',
    mangiare: 'Comer, dormir, salir',
    dormire: 'Dónde dormir',
    mangiareDove: 'Dónde comer',
    dopoCena: 'Después de cenar',
    itinerari: 'Itinerarios que incluyen este destino',
    itinerarioCompleto: 'Itinerario completo',
    hotel: (n: string) => `Hotel: ${n}`,
    attivita: (n: string) => `Actividades: ${n}`,
  },
} satisfies Record<Lingua, Record<string, unknown>>

// "Torna a..." con l'articolo corretto per ciascun Paese (il Messico, la Norvegia,
// l'Islanda, la Svezia) — l'italiano non si presta a una regola generica affidabile.
export async function generateStaticParams() {
  const lingua = await linguaCorrente()
  // le schede si generano alla prima visita nelle lingue diverse dall'inglese (limite di durata del build)
  if (lingua !== 'en') return []
  return getAllDestinazioni(lingua).map((d) => ({ paese: d.paeseSlug, slug: d.slug }))
}

/** Schede che fanno parte della sezione Amazzonia. */
const AMAZZONIA_SLUG = new Set(['peru/amazzonia-peruviana', 'brasile/amazzonia-manaus', 'bolivia/rurrenabaque-madidi'])

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug, slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const destinazione = getDestinazione(paeseSlug, slug, lingua)
  if (!destinazione) return {}
  const nome = destinazione.nome
  // «3-4 giorni», «1 giorno»: solo se è una durata vera, non «modulare» o una frase.
  const giorni = t.giorniRe.test(destinazione.giorniConsigliati.trim())
    ? destinazione.giorniConsigliati.trim()
    : undefined
  const errori = destinazione.erroriDaEvitare.length
  const paese = getPaese(paeseSlug, lingua)?.nome
  return pageMetadata({
    lingua,
    // Formula delle ricerche vere («cosa vedere», «quanti giorni»), dalla più ricca alla più corta che sta in 60 caratteri.
    title: primoTitoloCheSta([
      giorni && errori > 1 && t.titoloGiorniErrori(nome, giorni, errori),
      giorni && t.titoloGiorniOrganizzarsi(nome, giorni),
      giorni && t.titoloGiorni(nome, giorni),
      errori > 1 && t.titoloErrori(nome, errori),
      paese && t.titoloPaese(nome, paese),
      t.titoloConsigli(nome),
      t.titoloVedere(nome),
      nome,
    ]),
    description: destinazione.introduzione,
    path: `/destinazioni/${paeseSlug}/${slug}`,
    type: 'article',
  })
}

export default async function DestinazionePage({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}) {
  const { paese: paeseSlug, slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const paese = getPaese(paeseSlug, lingua)
  const destinazione = getDestinazione(paeseSlug, slug, lingua)
  if (!paese || !destinazione) notFound()

  const esperienze = getEsperienzeDiDestinazione(destinazione, lingua)
  const viaggi = getViaggiByDestinazione(destinazione, lingua)

  // Galleria: le foto dei giorni dei viaggi passati da qui e quelle delle esperienze, le proprie prima
  const viste = new Set([destinazione.immagine])
  const foto: FotoGalleria[] = []
  const aggiungi = (src?: string, alt?: string) => {
    if (!src || viste.has(src)) return
    viste.add(src)
    foto.push({ src, alt: alt || destinazione.nome })
  }
  for (const v of viaggi) {
    for (const g of getTripMeta(v.slug, lingua)?.giorni ?? []) {
      if (g.destinazioneSlug === destinazione.slug) aggiungi(g.immagine, g.imageAlt)
    }
  }
  for (const e of esperienze) aggiungi(e.immagine, e.imageAlt)
  foto.sort((a, b) => Number(b.src.includes('-riccardo')) - Number(a.src.includes('-riccardo')))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destinazione.nome,
    description: destinazione.introduzione,
    inLanguage: LOCALE[lingua].html,
  }

  return (
    <>
      <Filigrana paese={paeseSlug} />
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { nome: t.home, percorso: '/' },
            { nome: t.destinazioni, percorso: '/destinazioni' },
            { nome: paese.nome, percorso: `/destinazioni/${paeseSlug}` },
            { nome: destinazione.nome, percorso: `/destinazioni/${paeseSlug}/${destinazione.slug}` },
          ], lingua),
          faqJsonLd([
            { domanda: t.qGiorni(destinazione.nome), risposta: destinazione.giorniConsigliati },
            { domanda: t.qPeriodo(destinazione.nome), risposta: destinazione.periodoMigliore },
            { domanda: t.qArrivare(destinazione.nome), risposta: destinazione.comeArrivare },
            { domanda: t.qSpostarsi(destinazione.nome), risposta: destinazione.comeSpostarsi },
            { domanda: t.qCosto(destinazione.nome), risposta: destinazione.costi },
          ], lingua),
        ].filter((d) => d !== null)}
      />
      <PageHeader
        crumbs={[
          { label: t.home, href: '/' },
          { label: t.destinazioni, href: '/destinazioni' },
          { label: paese.nome, href: `/destinazioni/${paeseSlug}` },
          { label: destinazione.nome },
        ]}
        eyebrow={etichette(destinazione.tipologia, lingua).join(' · ')}
        title={destinazione.nome}
        lead={<Rich text={destinazione.introduzione} as="p" />}
        media={destinazione.immagine ? { tipo: 'foto', src: destinazione.immagine, alt: destinazione.imageAlt } : undefined}
        pieno
        actions={
          <SalvaBottone
            elemento={{ tipo: 'destinazione', id: `${paeseSlug}/${destinazione.slug}`, titolo: destinazione.nome, href: `/destinazioni/${paeseSlug}/${destinazione.slug}`, immagine: destinazione.immagine, sottotitolo: paese.nome }}
          />
        }
      />

      <InfoPratiche
        voci={[
          { label: t.giorniConsigliati, value: destinazione.giorniConsigliati, icona: Clock },
          { label: t.periodoMigliore, value: destinazione.periodoMigliore, icona: CalendarDays },
          { label: t.costi, value: destinazione.costi, icona: Wallet },
          { label: t.comeArrivare, value: destinazione.comeArrivare, icona: Plane },
          { label: t.comeSpostarsi, value: destinazione.comeSpostarsi, icona: Bus },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="space-y-14">
          {AMAZZONIA_SLUG.has(`${paeseSlug}/${destinazione.slug}`) && (
            // le schede amazzoniche rimandano alla sezione che le confronta tutte e alla traversata in barca
            <Link
              href="/amazzonia"
              className="group flex items-center justify-between gap-4 border-2 border-ink bg-alpine p-5 text-cream transition-colors hover:bg-ink sm:p-6"
            >
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/70">
                  {{ it: 'Amazzonia', en: 'Amazon', es: 'Amazonía' }[lingua]}
                </span>
                <span className="mt-1 block font-display text-xl">
                  {{ it: 'Tutte le porte a confronto e la traversata in barca lenta', en: 'Every gateway compared, and the slow-boat crossing', es: 'Todas las puertas comparadas y la travesía en barco lento' }[lingua]}
                </span>
              </span>
              <ArrowRight size={20} aria-hidden className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
          <div className="max-w-3xl">
            <TitoloSezione icona={Compass}>{t.perche}</TitoloSezione>
            <p className="mt-4 text-lg leading-relaxed text-stone">{richNodes(destinazione.percheAndarci)}</p>
          </div>

          {destinazione.miaEsperienza && (
            <div className="max-w-3xl">
              <Ricordo testo={destinazione.miaEsperienza} />
            </div>
          )}

          {foto.length >= 2 && (
            <div>
              <TitoloSezione icona={Camera}>{t.foto}</TitoloSezione>
              <Galleria foto={foto.slice(0, 9)} />
            </div>
          )}

          {destinazione.cosaVedere.length > 0 && (
            <div>
              <TitoloSezione icona={Eye}>{t.cosaVedere}</TitoloSezione>
              <ElencoNumerato voci={destinazione.cosaVedere} />
            </div>
          )}

          {destinazione.cosaFare.length > 0 && (
            <div>
              <TitoloSezione icona={Footprints}>{t.cosaFare}</TitoloSezione>
              <ElencoNumerato voci={destinazione.cosaFare} />
            </div>
          )}

          {esperienze.length > 0 && (
            <div>
              <TitoloSezione icona={Sparkles}>{t.esperienzeQui}</TitoloSezione>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {esperienze.map((e) => (
                  <ExperienceCard key={e.slug} esperienza={e} paeseSlug={paeseSlug} />
                ))}
              </div>
            </div>
          )}

          {destinazione.confronti?.map((confronto) => (
            <div key={confronto.titolo} className="max-w-4xl">
              <ComparisonBlock confronto={confronto} />
            </div>
          ))}

          {(destinazione.doveMangiare || destinazione.doveDormire || destinazione.usciteSerali) && (
            <div>
              <TitoloSezione icona={MapPin}>{t.mangiare}</TitoloSezione>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {destinazione.doveDormire && <SchedaTesto icona={BedDouble} titolo={t.dormire} testo={destinazione.doveDormire} />}
                {destinazione.doveMangiare && <SchedaTesto icona={Utensils} titolo={t.mangiareDove} testo={destinazione.doveMangiare} />}
                {destinazione.usciteSerali && <SchedaTesto icona={Moon} titolo={t.dopoCena} testo={destinazione.usciteSerali} />}
              </div>
            </div>
          )}

          {destinazione.erroriDaEvitare.length > 0 && (
            <div className="max-w-4xl">
              <ErroriDaEvitare voci={destinazione.erroriDaEvitare} />
            </div>
          )}

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <RelatedContent
              titolo={t.itinerari}
              items={viaggi.map((v) => ({
                href: `/viaggi/${v.slug}`,
                eyebrow: t.itinerarioCompleto,
                titolo: v.titolo,
                sottotitolo: v.durataBreve,
              }))}
            />
            <PrenotaQui
              voci={[
                { etichetta: t.hotel(destinazione.nome), href: link.booking(`${destinazione.nome}, ${paese.nome}`, lingua), nota: 'Booking' },
                ...(paese.continente === 'Asia'
                  ? [{ etichetta: t.hotel(destinazione.nome), href: link.tripcomHotel(destinazione.nome, lingua), nota: 'Trip.com' }]
                  : []),
                { etichetta: t.attivita(destinazione.nome), href: link.getyourguide(destinazione.nome, lingua), nota: 'GetYourGuide' },
              ]}
            />
          </div>
          <FirmaAutore className="max-w-3xl" />
        </Container>
      </section>
    </>
  )
}
