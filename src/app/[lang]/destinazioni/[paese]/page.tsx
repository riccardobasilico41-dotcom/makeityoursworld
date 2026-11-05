import type { Metadata } from 'next'
import { Filigrana } from '@/components/Filigrana'
import Link from '@/components/ui/Link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { CountryHero, InBrevePaese } from '@/components/CountryHero'
import { riduciPerScheda } from '@/components/TripCard'
import { ProssimaScheda } from '@/components/ProssimaScheda'
import { RouteTimeline } from '@/components/RouteTimeline'
import { DestinationCard } from '@/components/DestinationCard'
import { BinarioCard } from '@/components/BinarioCard'
import { ExperienceCard } from '@/components/ExperienceCard'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { CountrySheet } from '@/components/CountrySheet'
import { FaqPaese } from '@/components/FaqPaese'
import { MappaPaeseSezione } from '@/components/MappaPaeseSezione'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { getAllPaesi, getPaese, getDestinazioniByPaese, getEsperienzeByPaese, getTripMeta } from '@/lib/geo'
import { getAllViaggi, getViaggioBySlug } from '@/lib/viaggi'
import { areaDelPaese, conPaesiDelleDestinazioni, datiFiltroViaggio, paesiDelViaggio } from '@/lib/viaggi-filtri'
import { getArea } from '@/lib/aree'
import { copertine } from '@/lib/i18n/contenuti'
import { pageMetadata } from '@/lib/seo'
import { seoPaese } from '@/lib/i18n/contenuti'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { richNodes } from '@/components/ui/Rich'

const T = {
  it: {
    itinerarioCompleto: 'Itinerario completo, giorno per giorno — con quello che rifarei e quello che cambierei.',
    durata: 'Durata',
    altriViaggi: 'Gli altri viaggi nel Paese',
    altriViaggiDesc: (nome: string) => `Altri itinerari giorno per giorno che passano da ${nome}.`,
    trasporti: 'Trasporti',
    stile: 'Stile',
    ritmo: 'Ritmo',
    copiaItinerario: 'Copia questo itinerario',
    leggiViaggio: 'Leggi il viaggio giorno per giorno',
    principaliTappe: 'Principali tappe',
    destinazioni: 'Destinazioni',
    destinazioniDesc: "Ogni tappa dell'itinerario esplorata singolarmente: quanto fermarsi, cosa fare, dove ho dormito e mangiato io.",
    esperienze: 'Esperienze',
    esperienzeDesc: 'Le attività che valgono davvero il tempo — con un giudizio sincero su ciascuna.',
    organizza: 'Organizza il viaggio',
    organizzaConScheda: (nome: string) => `Tutto quello che serve per organizzare un viaggio in ${nome}, al di là del singolo itinerario.`,
    organizzaSenzaScheda: 'Le informazioni pratiche raccolte nella scheda del viaggio: verificale sempre prima di partire, prezzi e orari cambiano.',
    quandoAndare: 'Quando andare',
    periodoStagionalita: 'Periodo e stagionalità',
    comeSpostarsi: 'Come spostarsi',
    trasportiPrincipali: 'Trasporti principali',
    budget: 'Budget',
    vociSpesa: 'Voci di spesa',
    documenti: 'Documenti',
    passaportoVisto: 'Passaporto e visto',
    simInternet: 'SIM e internet',
    restareConnessi: 'Come restare connessi',
    saluteAssicurazione: 'Salute e assicurazione',
    saperePrima: 'Cosa sapere prima di partire',
    valigia: 'Cosa mettere in valigia',
    bagaglio: 'Bagaglio consigliato',
    errori: 'Errori da evitare',
    nonRifare: 'Cosa non rifare',
    home: 'Home',
    tuttiIViaggi: (nome: string) => `Tutti i viaggi in ${nome}`,
  },
  en: {
    itinerarioCompleto: "The full itinerary, day by day, including what I'd do again and what I'd change.",
    durata: 'Length',
    altriViaggi: 'More trips in the country',
    altriViaggiDesc: (nome: string) => `Other day-by-day itineraries that pass through ${nome}.`,
    trasporti: 'Transport',
    stile: 'Style',
    ritmo: 'Pace',
    copiaItinerario: 'Copy this itinerary',
    leggiViaggio: 'Read the trip day by day',
    principaliTappe: 'Main stops',
    destinazioni: 'Destinations',
    destinazioniDesc: 'Every stop on the itinerary on its own: how long to stay, what to do, where I slept and ate.',
    esperienze: 'Experiences',
    esperienzeDesc: 'The activities that are really worth your time, with an honest verdict on each one.',
    organizza: 'Plan your trip',
    organizzaConScheda: (nome: string) => `Everything you need to plan a trip to ${nome}, beyond the single itinerary.`,
    organizzaSenzaScheda: 'The practical information collected in the trip guide: always double-check it before you go, prices and opening hours change.',
    quandoAndare: 'When to go',
    periodoStagionalita: 'Timing and seasons',
    comeSpostarsi: 'Getting around',
    trasportiPrincipali: 'Main transport',
    budget: 'Budget',
    vociSpesa: 'Cost breakdown',
    documenti: 'Documents',
    passaportoVisto: 'Passport and visa',
    simInternet: 'SIM and internet',
    restareConnessi: 'How to stay connected',
    saluteAssicurazione: 'Health and insurance',
    saperePrima: 'What to know before you go',
    valigia: 'What to pack',
    bagaglio: 'Suggested luggage',
    errori: 'Mistakes to avoid',
    nonRifare: "What I wouldn't repeat",
    home: 'Home',
    tuttiIViaggi: (nome: string) => `All trips in ${nome}`,
  },
  es: {
    itinerarioCompleto: 'El itinerario completo, día a día, con lo que repetiría y lo que cambiaría.',
    durata: 'Duración',
    altriViaggi: 'Otros viajes en el país',
    altriViaggiDesc: (nome: string) => `Otros itinerarios día a día que pasan por ${nome}.`,
    trasporti: 'Transporte',
    stile: 'Estilo',
    ritmo: 'Ritmo',
    copiaItinerario: 'Copia este itinerario',
    leggiViaggio: 'Lee el viaje día a día',
    principaliTappe: 'Paradas principales',
    destinazioni: 'Destinos',
    destinazioniDesc: 'Cada parada del itinerario por separado: cuánto quedarse, qué hacer, dónde dormí y comí yo.',
    esperienze: 'Experiencias',
    esperienzeDesc: 'Las actividades que de verdad merecen tu tiempo, con una opinión sincera de cada una.',
    organizza: 'Organiza el viaje',
    organizzaConScheda: (nome: string) => `Todo lo que necesitas para organizar un viaje a ${nome}, más allá del itinerario concreto.`,
    organizzaSenzaScheda: 'La información práctica recogida en la ficha del viaje: compruébala siempre antes de salir, los precios y los horarios cambian.',
    quandoAndare: 'Cuándo ir',
    periodoStagionalita: 'Época y estacionalidad',
    comeSpostarsi: 'Cómo moverse',
    trasportiPrincipali: 'Transportes principales',
    budget: 'Presupuesto',
    vociSpesa: 'Partidas de gasto',
    documenti: 'Documentos',
    passaportoVisto: 'Pasaporte y visado',
    simInternet: 'SIM e internet',
    restareConnessi: 'Cómo estar conectado',
    saluteAssicurazione: 'Salud y seguro',
    saperePrima: 'Qué saber antes de salir',
    valigia: 'Qué meter en la maleta',
    bagaglio: 'Equipaje recomendado',
    errori: 'Errores que evitar',
    nonRifare: 'Lo que no repetiría',
    home: 'Inicio',
    tuttiIViaggi: (nome: string) => `Todos los viajes en ${nome}`,
  },
} satisfies Record<Lingua, Record<string, string | ((nome: string) => string)>>

export async function generateStaticParams() {
  const lingua = await linguaCorrente()
  return getAllPaesi(lingua).map((p) => ({ paese: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug } = await params
  const lingua = await linguaCorrente()
  const paese = getPaese(paeseSlug, lingua)
  if (!paese) return {}
  const seo = seoPaese(paeseSlug, lingua)
  return pageMetadata({
    ogPropria: true, // opengraph-image.tsx della pagina
    lingua,
    title: seo?.seoTitle ?? paese.titolo,
    description: seo?.seoDescription ?? paese.descrizione,
    socialTitle: seo?.socialTitle,
    path: `/destinazioni/${paeseSlug}`,
  })
}

export default async function PaesePage({ params }: { params: Promise<{ paese: string }> }) {
  const { paese: paeseSlug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const paese = getPaese(paeseSlug, lingua)
  if (!paese) notFound()

  const destinazioni = getDestinazioniByPaese(paeseSlug, lingua)
  const esperienze = getEsperienzeByPaese(paeseSlug, lingua)
  const tripPrincipale = getViaggioBySlug(paese.tripPrincipaleSlug, lingua)
  const tripMeta = getTripMeta(paese.tripPrincipaleSlug, lingua)
  // tutti i viaggi che toccano il Paese (stesso criterio del filtro ?paese=), il principale a parte
  const viaggiPaese = getAllViaggi(lingua).filter((v) => paesiDelViaggio(v.slug).includes(paeseSlug))
  const nViaggiPaese = viaggiPaese.length
  const copertineViaggi = copertine(lingua)
  const altriViaggi = viaggiPaese
    .filter((v) => v.slug !== tripPrincipale?.slug)
    .slice(0, 3)
    .map((v) => ({ ...riduciPerScheda(v), copertina: copertineViaggi[v.slug], luogo: datiFiltroViaggio(v, lingua).luogo }))
  const areaSlug = areaDelPaese(paeseSlug)
  const areaDati = areaSlug ? getArea(areaSlug) : undefined
  const area = areaDati ? { slug: areaDati.slug, nome: areaDati.nome[lingua] } : undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Country',
    name: paese.nome,
    description: paese.descrizione,
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
            ...(area ? [{ nome: area.nome, percorso: `/aree/${area.slug}` }] : []),
            { nome: paese.nome, percorso: `/destinazioni/${paeseSlug}` },
          ], lingua),
        ]}
      />
      <CountryHero
        paese={paese}
        tripHref={tripPrincipale ? `/viaggi/${tripPrincipale.slug}` : '/viaggi'}
        destinazioniHref={destinazioni.length > 0 ? '#destinazioni' : undefined}
        area={area}
        viaggio={
          tripPrincipale
            ? {
                durata: tripPrincipale.durataBreve,
                periodo: tripPrincipale.periodoBreve,
                budget: tripMeta?.budgetTotale,
                stile: tripMeta?.stile.slice(0, 4),
              }
            : undefined
        }
      />

      {/* Il viaggio che ho fatto io */}
      {tripPrincipale && (
        <section className="sezione">
          <Container>
            <SectionHeading
              title={tripPrincipale.titolo}
              description={t.itinerarioCompleto}
            />
            <Reveal>
              <div className="mt-8 grid gap-10 rounded-none border border-alpine/10 bg-cream-dark/40 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  {tripPrincipale.apertura ? (
                    <p className="font-display text-xl italic leading-relaxed text-alpine">
                      {richNodes(tripPrincipale.apertura)}
                    </p>
                  ) : (
                    <p className="font-display text-xl italic leading-relaxed text-stone">
                      {richNodes(tripPrincipale.descrizione)}
                    </p>
                  )}
                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                    {tripPrincipale.durataBreve && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-stone/85">{t.durata}</dt>
                        <dd className="text-ink">{tripPrincipale.durataBreve}</dd>
                      </div>
                    )}
                    {tripMeta && (
                      <>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/85">{t.trasporti}</dt>
                          <dd className="text-ink">{richNodes(tripMeta.trasporti)}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/85">{t.stile}</dt>
                          <dd className="text-ink">{tripMeta.stile.join(' · ')}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/85">{t.ritmo}</dt>
                          <dd className="text-ink">{richNodes(tripMeta.ritmo)}</dd>
                        </div>
                      </>
                    )}
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/viaggi/${tripPrincipale.slug}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-none bg-alpine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-alpine-dark"
                    >
                      {t.copiaItinerario}
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href={`/viaggi/${tripPrincipale.slug}#itinerario-giorno-per-giorno`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-none border border-alpine/30 px-6 py-3 text-sm font-medium text-alpine transition-colors hover:bg-alpine/5"
                    >
                      {t.leggiViaggio}
                    </Link>
                  </div>
                </div>

                {tripMeta && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone/85">{t.principaliTappe}</p>
                    <RouteTimeline tappe={conPaesiDelleDestinazioni(tripMeta).tappeMappa} paeseSlug={paeseSlug} />
                  </div>
                )}
              </div>
            </Reveal>

            {/* gli altri viaggi del Paese, se ce ne sono: card come nell'archivio, poi il filtro completo */}
            {altriViaggi.length > 0 && (
              <div className="mt-14">
                <h3 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] text-alpine">{t.altriViaggi}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">{t.altriViaggiDesc(paese.nome)}</p>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {altriViaggi.map((v) => (
                    <li key={v.slug} className="flex">
                      <ProssimaScheda viaggio={v} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {nViaggiPaese >= 2 && (
              <Link
                href={`/viaggi?paese=${paeseSlug}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-rosso underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
              >
                {t.tuttiIViaggi(paese.nome)} ({nViaggiPaese})
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            )}
          </Container>
        </section>
      )}

      {/* Destinazioni */}
      {destinazioni.length > 0 && (
      <section id="destinazioni" className="scroll-mt-24 border-t border-alpine/10 sezione">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              title={t.destinazioni}
              description={t.destinazioniDesc}
            />
          </div>
          <Reveal className="mt-10">
            <BinarioCard etichetta={t.destinazioni}>
              {destinazioni.map((d) => (
                <DestinationCard key={d.slug} destinazione={d} paeseSlug={paeseSlug} />
              ))}
            </BinarioCard>
          </Reveal>
        </Container>
      </section>
      )}

      {/* Esperienze */}
      {esperienze.length > 0 && (
      <section id="esperienze" className="scroll-mt-24 border-t border-alpine/10 sezione">
        <Container>
          <SectionHeading
            title={t.esperienze}
            description={t.esperienzeDesc}
          />
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
            {esperienze.map((e) => (
              <RevealItem key={e.slug}>
                <ExperienceCard esperienza={e} paeseSlug={paeseSlug} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
      )}

      {/* Mappa dopo destinazioni ed esperienze: in alto spingeva il viaggio e le card una
          schermata più giù; qui riassume sul contorno del Paese quello che si è appena visto */}
      <MappaPaeseSezione
        paeseSlug={paeseSlug}
        nomePaese={paese.nome}
        destinazioni={destinazioni}
        esperienze={esperienze}
      />

      <FaqPaese paese={paese} />

      {/* le voci consultive del Paese (periodo migliore, durata, budget, stile): prima stavano
          sotto l'apertura, ora aprono la parte pratica */}
      <InBrevePaese paese={paese} />

      {/* Organizza il viaggio: in fondo, a tendine, per chi cerca il dettaglio pratico */}
      <section id="organizza-il-viaggio" className="scroll-mt-24 border-t border-alpine/10 bg-cream-dark/30 sezione">
        <Container>
          <SectionHeading
            title={t.organizza}
            description={
              paese.scheda ? t.organizzaConScheda(paese.nome) : t.organizzaSenzaScheda
            }
          />
          {paese.scheda ? (
            <CountrySheet scheda={paese.scheda} />
          ) : (
            <>
              <PracticalInfo
                className="mt-10 sm:grid-cols-3"
                items={[
                  { label: t.quandoAndare, href: `/viaggi/${paese.tripPrincipaleSlug}#scheda-riassuntiva`, value: t.periodoStagionalita },
                  { label: t.comeSpostarsi, href: `/viaggi/${paese.tripPrincipaleSlug}#scheda-riassuntiva`, value: t.trasportiPrincipali },
                  { label: t.budget, href: `/viaggi/${paese.tripPrincipaleSlug}#budget`, value: t.vociSpesa },
                  { label: t.documenti, href: `/viaggi/${paese.tripPrincipaleSlug}#itinerario-giorno-per-giorno`, value: t.passaportoVisto },
                  { label: t.simInternet, href: `/viaggi/${paese.tripPrincipaleSlug}#itinerario-giorno-per-giorno`, value: t.restareConnessi },
                  { label: t.saluteAssicurazione, href: `/viaggi/${paese.tripPrincipaleSlug}#itinerario-giorno-per-giorno`, value: t.saperePrima },
                  { label: t.valigia, href: `/viaggi/${paese.tripPrincipaleSlug}#itinerario-giorno-per-giorno`, value: t.bagaglio },
                  { label: t.errori, href: `/viaggi/${paese.tripPrincipaleSlug}#errori-da-evitare`, value: t.nonRifare },
                ]}
              />
            </>
          )}
        </Container>
      </section>

    </>
  )
}
