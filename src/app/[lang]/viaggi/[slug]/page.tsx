import { richNodes } from '@/components/ui/Rich'
import type { Metadata } from 'next'
import { Filigrana } from '@/components/Filigrana'
import { SalvaBottone } from '@/components/SalvaBottone'
import { ScaricaGuida } from '@/components/ScaricaGuida'
import { FirmaAutore, FirmaBreve } from '@/components/FirmaAutore'
import { OrganizzaViaggio } from '@/components/OrganizzaViaggio'
import { notFound } from 'next/navigation'
import { listaPerViaggio, copertina as copertinaViaggio, editoriale } from '@/lib/i18n/contenuti'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { etichetta } from '@/lib/i18n/etichette'

/** Vecchi indirizzi con «-360» (titoli rinominati il 30/10/2026): redirect permanente al nuovo. */
import { Prose } from '@/components/Prose'
import { Tendina } from '@/components/Tendina'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { TripSummary } from '@/components/TripSummary'
import { RiepilogoViaggio } from '@/components/RiepilogoViaggio'
import { minutiDiLettura, PREFISSO_TAPPA } from '@/lib/riepilogo-viaggio'
import { Clock } from 'lucide-react'
import { BudgetBreakdown } from '@/components/BudgetBreakdown'
import type { TocItem } from '@/components/StickyTableOfContents'
import { GiorniBarraMobile, type VoceGiorno } from '@/components/signature/GiorniBarraMobile'
import { IndiceViaggio } from '@/components/signature/IndiceViaggio'
import { idGiorno, numeroGiorno, partiGiorno, tappeDeiGiorni } from '@/components/signature/giorni-ancore'
import { AltreGuidePaese } from '@/components/AltreGuidePaese'
import { areaDelPaese, conPaesiDelleDestinazioni, paesiDelViaggio } from '@/lib/viaggi-filtri'
import { AREE } from '@/lib/aree'
import { PageHeader } from '@/components/ui/PageHeader'
import { creditiCopertine } from '@/content/viaggi-copertine-crediti'
import { creditiHeroVideo } from '@/content/viaggi-hero-video-crediti'
import { DaySectionSignature } from '@/components/signature/DaySectionSignature'
import { RouteLine } from '@/components/signature/RouteLine'
import { Container } from '@/components/ui/Container'
import { getAllViaggi, getViaggioBySlug, type Viaggio } from '@/lib/viaggi'
import { getPaese, getTripMeta } from '@/lib/geo'
import type { ViaggioInBreve, TripMeta } from '@/lib/types'
import { getContinente, slugify } from '@/lib/utils'
import { JsonLd } from '@/components/JsonLd'
import { articoloViaggioJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/structured-data'
import type { EditorialMeta } from '@/content/viaggi-editorial'
import { getHeroVideo } from '@/content/viaggi-hero-video'
import { pageMetadata } from '@/lib/seo'
import { DomandeViaggio } from '@/components/domande/DomandeViaggio'
import { ProssimaDestinazione } from '@/components/ProssimaDestinazione'
import { domandePubblicate } from '@/lib/domande/archivio'
import type { Domanda } from '@/lib/domande/tipi'

const T = {
  it: {
    faqGiorni: (p: string) => `Quanti giorni servono per un viaggio in ${p}?`,
    faqCosto: (p: string) => `Quanto costa un viaggio in ${p}?`,
    faqQuando: (p: string) => `Quando andare in ${p}?`,
    home: 'Home',
    viaggi: 'Viaggi',
    inBreve: 'Il viaggio in breve',
    mappa: 'Mappa',
    itinerarioZone: 'Itinerario per zone',
    itinerarioGiorni: 'Itinerario giorno per giorno',
    cosaVedere: 'Cosa vedere e fare',
    doveDormire: 'Dove dormire',
    doveMangiare: 'Dove mangiare',
    budget: 'Budget',
    consigli: 'Consigli pratici',
    errori: 'Errori da evitare',
    organizza: 'Organizza il viaggio',
    schedaPratica: 'Scheda pratica',
    inQuestaPagina: 'In questa pagina',
    min: 'min',
    diLettura: 'di lettura',
    periodo: 'Periodo: ',
    durata: 'Durata: ',
    effettuato: (p: string) => `Viaggio effettuato nel periodo: ${p} · `,
    aggiornata: 'Pagina aggiornata il',
    verifica: 'Prezzi, orari, documenti e traghetti vanno sempre verificati prima della partenza.',
    laRotta: 'La rotta',
    rottaLead: "Le tappe dell'itinerario, nell'ordine in cui si visitano.",
    budgetNota:
      "Voci di spesa indicative: dove non c'è un dato affidabile, la voce resta vuota invece di una stima inventata.",
    doveHoDormito: 'Dove ho dormito',
    doveHoDormitoSub: 'Gli hotel tappa per tappa, con le alternative',
    doveHoMangiato: 'Dove ho mangiato',
    percheHoScelto: 'Perché ho scelto questo viaggio',
    cosaCercavo: 'Cosa cercavo',
    treEsperienzePiuBelle: 'Le tre esperienze più belle',
    cosaCambierei: 'Cosa cambierei oggi',
    aChiLoConsiglio: 'A chi lo consiglio',
  },
  en: {
    faqGiorni: (p: string) => `How many days do you need for a trip to ${p}?`,
    faqCosto: (p: string) => `How much does a trip to ${p} cost?`,
    faqQuando: (p: string) => `When is the best time to go to ${p}?`,
    home: 'Home',
    viaggi: 'Trips',
    inBreve: 'The trip in brief',
    mappa: 'Map',
    itinerarioZone: 'Itinerary by area',
    itinerarioGiorni: 'Day-by-day itinerary',
    cosaVedere: 'What to see and do',
    doveDormire: 'Where to sleep',
    doveMangiare: 'Where to eat',
    budget: 'Budget',
    consigli: 'Practical tips',
    errori: 'Mistakes to avoid',
    organizza: 'Plan the trip',
    schedaPratica: 'Practical info',
    inQuestaPagina: 'On this page',
    min: 'min',
    diLettura: 'read',
    periodo: 'Period: ',
    durata: 'Length: ',
    effettuato: (p: string) => `Trip taken in: ${p} · `,
    aggiornata: 'Page updated on',
    verifica: 'Prices, opening hours, documents and ferries should always be checked before departure.',
    laRotta: 'The route',
    rottaLead: 'The stops of the itinerary, in the order they are visited.',
    budgetNota:
      "Indicative costs: where there's no reliable figure, the line is left blank instead of an invented estimate.",
    doveHoDormito: 'Where I stayed',
    doveHoDormitoSub: 'The hotels stop by stop, with alternatives',
    doveHoMangiato: 'Where I ate',
    percheHoScelto: 'Why I chose this trip',
    cosaCercavo: 'What I was looking for',
    treEsperienzePiuBelle: 'The three best experiences',
    cosaCambierei: 'What I would change today',
    aChiLoConsiglio: 'Who I recommend it to',
  },
  es: {
    faqGiorni: (p: string) => `¿Cuántos días hacen falta para un viaje a ${p}?`,
    faqCosto: (p: string) => `¿Cuánto cuesta un viaje a ${p}?`,
    faqQuando: (p: string) => `¿Cuándo ir a ${p}?`,
    home: 'Inicio',
    viaggi: 'Viajes',
    inBreve: 'El viaje en breve',
    mappa: 'Mapa',
    itinerarioZone: 'Itinerario por zonas',
    itinerarioGiorni: 'Itinerario día a día',
    cosaVedere: 'Qué ver y hacer',
    doveDormire: 'Dónde dormir',
    doveMangiare: 'Dónde comer',
    budget: 'Presupuesto',
    consigli: 'Consejos prácticos',
    errori: 'Errores que evitar',
    organizza: 'Organiza el viaje',
    schedaPratica: 'Ficha práctica',
    inQuestaPagina: 'En esta página',
    min: 'min',
    diLettura: 'de lectura',
    periodo: 'Periodo: ',
    durata: 'Duración: ',
    effettuato: (p: string) => `Viaje realizado en el periodo: ${p} · `,
    aggiornata: 'Página actualizada el',
    verifica: 'Los precios, horarios, documentos y ferris deben comprobarse siempre antes de salir.',
    laRotta: 'La ruta',
    rottaLead: 'Las paradas del itinerario, en el orden en que se visitan.',
    budgetNota:
      'Partidas de gasto orientativas: donde no hay un dato fiable, la partida queda vacía en lugar de una estimación inventada.',
    doveHoDormito: 'Dónde dormí',
    doveHoDormitoSub: 'Los hoteles parada a parada, con alternativas',
    doveHoMangiato: 'Dónde comí',
    percheHoScelto: 'Por qué elegí este viaje',
    cosaCercavo: 'Qué buscaba',
    treEsperienzePiuBelle: 'Las tres mejores experiencias',
    cosaCambierei: 'Qué cambiaría hoy',
    aChiLoConsiglio: 'A quién se lo recomiendo',
  },
} satisfies Record<Lingua, Record<string, string | ((p: string) => string)>>

export async function generateStaticParams() {
  // gli slug dei viaggi sono uguali in ogni lingua
  return getAllViaggi('en').map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const viaggio = getViaggioBySlug(slug, lingua)
  if (!viaggio) return {}

  const editorial = editoriale(slug, lingua)
  return pageMetadata({
    ogPropria: true, // opengraph-image.tsx della pagina
    title: editorial.seoTitle ?? viaggio.titolo,
    description: editorial.seoDescription ?? viaggio.descrizione,
    socialTitle: editorial.socialTitle,
    socialDescription: editorial.socialDescription,
    path: `/viaggi/${viaggio.slug}`,
    type: 'article',
    lingua,
  })
}

const CAMPI_VIAGGIO_IN_BREVE = [
  'percheHoScelto',
  'cosaCercavo',
  'treEsperienzePiuBelle',
  'cosaCambierei',
  'aChiLoConsiglio',
] as const satisfies (keyof ViaggioInBreve)[]

export default async function ViaggioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const viaggio = getViaggioBySlug(slug, lingua)
  if (!viaggio) notFound()

  const meta = getTripMeta(viaggio.slug, lingua)
  if (!meta) notFound()
  const copertina = copertinaViaggio(viaggio.slug, lingua)
  const editorial = editoriale(viaggio.slug, lingua)
  // domande dei lettori già moderate: lette in cache, la pagina resta statica (la moderazione la rigenera)
  const domande = await domandePubblicate(viaggio.slug, lingua)

  const cosaVedereSezione = viaggio.sezioni.find((s) => /^(Cosa vedere|What to see|Qué ver)/i.test(s.titolo))
  const consigliSezione = viaggio.sezioni.find((s) => /^(Consigli pratici|Practical tips|Consejos prácticos)/i.test(s.titolo))
  const altreSezioni = viaggio.sezioni.filter((s) => s !== cosaVedereSezione && s !== consigliSezione)

  const toc: TocItem[] = []
  if (meta && CAMPI_VIAGGIO_IN_BREVE.some((key) => meta.viaggioInBreve[key]))
    toc.push({ href: '#il-viaggio-in-breve', label: t.inBreve })
  if (meta && meta.tappeMappa.length > 0) toc.push({ href: '#mappa', label: t.mappa })
  if (viaggio.giorni.length > 0)
    toc.push({
      href: '#itinerario-giorno-per-giorno',
      label: meta?.unitaGiorniLabel ? t.itinerarioZone : t.itinerarioGiorni,
    })
  if (cosaVedereSezione) toc.push({ href: `#${slugify(cosaVedereSezione.titolo)}`, label: t.cosaVedere })
  if (viaggio.doveDormito) toc.push({ href: '#dove-dormire', label: t.doveDormire })
  if (viaggio.doveMangiato) toc.push({ href: '#dove-mangiare', label: t.doveMangiare })
  if (meta) toc.push({ href: '#budget', label: t.budget })
  if (consigliSezione) {
    toc.push({ href: `#${slugify(consigliSezione.titolo)}`, label: t.consigli })
    toc.push({ href: `#${slugify(consigliSezione.titolo)}`, label: t.errori })
  }
  if (meta) toc.push({ href: '#organizza', label: t.organizza })

  // Home › Viaggi › Area › Paese › titolo: per i viaggi multi-Paese il primo Paese (il principale)
  const primoPaese = paesiDelViaggio(viaggio.slug)[0] ?? meta.paeseSlug
  const paese = getPaese(primoPaese, lingua)
  const areaSlug = areaDelPaese(primoPaese)
  const area = areaSlug ? AREE.find((a) => a.slug === areaSlug) : undefined
  const briciole: { nome: string; percorso: string }[] = [
    { nome: t.home, percorso: '/' },
    { nome: t.viaggi, percorso: '/viaggi' },
    ...(area ? [{ nome: area.nome[lingua], percorso: `/aree/${area.slug}` }] : []),
    ...(paese ? [{ nome: paese.nome, percorso: `/destinazioni/${paese.slug}` }] : []),
    { nome: viaggio.titolo, percorso: `/viaggi/${viaggio.slug}` },
  ]

  // il luogo del titolo («Rome in 4 days…» → Rome), altrimenti il Paese
  const nomePaese = viaggio.titolo.match(/^(.+?)\s+(?:in|en)\s+\d/i)?.[1] ?? getPaese(meta.paeseSlug, lingua)?.nome ?? viaggio.titolo

  return (
    <>
      <JsonLd
        data={[
          articoloViaggioJsonLd(
            {
              titolo: viaggio.titolo,
              descrizione: viaggio.descrizione,
              percorso: `/viaggi/${viaggio.slug}`,
              sezioni: viaggio.sezioni.map((s) => s.titolo),
            },
            lingua,
          ),
          breadcrumbJsonLd(briciole, lingua),
          // domande che si cercano davvero («how many days», «trip cost»), con le risposte già in pagina
          faqJsonLd(
            [
              { domanda: t.faqGiorni(nomePaese), risposta: [viaggio.durata, meta.ritmo].filter(Boolean).join('. ') },
              { domanda: t.faqCosto(nomePaese), risposta: meta.budgetTotale },
              { domanda: t.faqQuando(nomePaese), risposta: viaggio.periodo },
              ...domande.map((d) => ({ domanda: d.testo, risposta: d.risposta?.testo })),
            ],
            lingua,
          ),
        ].filter((d) => d !== null)}
      />
      <ScrollProgress className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-rosso motion-reduce:hidden" />

      <SignatureViaggioContent
        lingua={lingua}
        viaggio={viaggio}
        // ogni tappa e giorno con il Paese della sua destinazione (viaggi multi-Paese)
        meta={conPaesiDelleDestinazioni(meta)}
        copertina={copertina}
        video={getHeroVideo(viaggio.slug)}
        editorial={editorial}
        toc={toc}
        briciole={briciole}
        cosaVedereSezione={cosaVedereSezione}
        consigliSezione={consigliSezione}
        altreSezioni={altreSezioni}
        domande={domande}
      />
    </>
  )
}

type SezioneViaggio = Viaggio['sezioni'][number]

/**
 * Composizione Signature Editorial della pagina viaggio: apertura firmata
 * (foto reale se in `copertineViaggi`, altrimenti Field Dossier a scala
 * hero), mappa del percorso con `RouteLine`, e giorno-per-giorno con numeri
 * grandi + segnaposto di percorso.
 */
function SignatureViaggioContent({
  lingua,
  viaggio,
  meta,
  copertina,
  video,
  editorial,
  toc,
  briciole,
  cosaVedereSezione,
  consigliSezione,
  altreSezioni,
  domande,
}: {
  lingua: Lingua
  viaggio: Viaggio
  meta: TripMeta
  copertina?: { immagine: string; imageAlt: string }
  video?: { src: string; poster: string }
  editorial: EditorialMeta
  toc: TocItem[]
  briciole: { nome: string; percorso: string }[]
  cosaVedereSezione?: SezioneViaggio
  consigliSezione?: SezioneViaggio
  altreSezioni: SezioneViaggio[]
  domande: Domanda[]
}) {
  const t = T[lingua]

  // indice: le sezioni nell'ordine in cui compaiono in pagina (serve per segnare quella che si
  // legge), una voce per ancora; i giorni con numero, data e luogo dal titolo del markdown
  const ordine = [
    '#il-viaggio-in-breve',
    '#scheda-pratica',
    '#mappa',
    '#itinerario-giorno-per-giorno',
    cosaVedereSezione ? `#${slugify(cosaVedereSezione.titolo)}` : '',
    '#dove-dormire',
    '#dove-mangiare',
    '#budget',
    consigliSezione ? `#${slugify(consigliSezione.titolo)}` : '',
    '#organizza',
  ]
  const sezioni = [...(viaggio.schedaPratica ? [{ href: '#scheda-pratica', label: t.schedaPratica }] : []), ...toc]
    .filter((v, i, a) => a.findIndex((x) => x.href === v.href) === i)
    .sort((a, b) => ordine.indexOf(a.href) - ordine.indexOf(b.href))
  const giorniIndice: VoceGiorno[] = viaggio.giorni.map((g, i) => {
    const { data, luogo } = partiGiorno(g.titolo)
    return { numero: numeroGiorno(g.titolo, i), id: idGiorno(i), data, luogo }
  })
  const tappeGiorni = tappeDeiGiorni(
    viaggio.giorni.map((g) => ({
      titolo: g.titolo,
      destinazioneSlug: meta.giorni.find((m) => m.titoloGiorno === g.titolo)?.destinazioneSlug,
    })),
    meta.tappeMappa,
  )

  return (
    <>
      <Filigrana paese={meta.paeseSlug} />
      <PageHeader
        crumbs={briciole.map((b, i) => (i === briciole.length - 1 ? { label: b.nome } : { label: b.nome, href: b.percorso }))}
        eyebrow={etichetta(getContinente(viaggio.categorie), lingua)}
        title={editorial.editorialHeadline ?? viaggio.titolo}
        lead={
          <>
            {editorial.editorialHook && <p>{editorial.editorialHook}</p>}
            <FirmaBreve />
          </>
        }
        meta={
          <p className="inline-flex items-center gap-2 text-sm text-stone">
            <Clock size={16} aria-hidden className="text-rosso" />
            <span>
              <span className="font-semibold text-ink">{minutiDiLettura(viaggio)} {t.min}</span> {t.diLettura}
            </span>
          </p>
        }
        media={
          video
            ? { tipo: 'video', src: video.src, poster: video.poster }
            : copertina
              ? { tipo: 'foto', src: copertina.immagine, alt: copertina.imageAlt }
              : undefined
        }
        credito={video ? creditiHeroVideo[viaggio.slug] : copertina ? creditiCopertine[viaggio.slug] : undefined}
        actions={
          <>
            <SalvaBottone
              elemento={{ tipo: 'viaggio', id: viaggio.slug, titolo: viaggio.titolo, href: `/viaggi/${viaggio.slug}`, immagine: copertina?.immagine, sottotitolo: viaggio.durataBreve }}
            />
            <ScaricaGuida slug={viaggio.slug} />
          </>
        }
      />

      {/* Durata, periodo, budget, ritmo, spostamenti, Paesi e area, tappe, tipo di viaggio, con chi:
          prima erano sparsi tra la riga sotto il titolo e la «Scheda riassuntiva», ora stanno solo qui. */}
      <RiepilogoViaggio viaggio={viaggio} meta={meta} />

      {/* Indice: da lg una colonna laterale sticky (sezioni + giorni), sotto lg una barra sticky
          «Giorno 3 di 12 ▾» + «Mappa» in cima all'articolo. Prima era una fila di pulsanti fissa qui. */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="lg:grid lg:grid-cols-[12.5rem_minmax(0,1fr)] lg:gap-12">
          <aside className="hidden pt-16 lg:block">
            <IndiceViaggio sezioni={sezioni} giorni={giorniIndice} unitaLabel={meta.unitaGiorniLabel} />
          </aside>
          <div className="min-w-0 space-y-16">
            <GiorniBarraMobile
              giorni={giorniIndice}
              sezioni={sezioni}
              unitaLabel={meta.unitaGiorniLabel}
              tappe={meta.tappeMappa}
              tappeGiorni={tappeGiorni}
              paeseSlug={meta.paeseSlug}
            />
            {viaggio.apertura && (
              <p className="font-display text-xl italic leading-relaxed text-alpine sm:text-2xl lg:text-3xl">
                {richNodes(viaggio.apertura)}
              </p>
            )}

            <div className="space-y-8">
              <TripSummary meta={meta} />
              {CAMPI_VIAGGIO_IN_BREVE.some((key) => meta.viaggioInBreve[key]) && (
                <div id="il-viaggio-in-breve" className="scroll-mt-24">
                  <h2 className="font-display text-xl text-alpine">{t.inBreve}</h2>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    {CAMPI_VIAGGIO_IN_BREVE.filter((key) => meta.viaggioInBreve[key]).map((key) => (
                      <div key={key} className="rounded-none border border-alpine/10 p-4">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-stone/85">{t[key]}</dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-ink">{meta.viaggioInBreve[key]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {viaggio.schedaPratica && (
              <div id="scheda-pratica" className="scroll-mt-24 border-2 border-ink bg-cream-dark/50 p-6 sm:p-8">
                <h2 className="font-display text-2xl text-alpine">{t.schedaPratica}</h2>
                {viaggio.periodo && viaggio.periodo !== viaggio.periodoBreve && (
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    <span className="font-semibold text-ink">{t.periodo}</span>
                    {viaggio.periodo}
                  </p>
                )}
                {viaggio.durata && viaggio.durata !== viaggio.durataBreve && (
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    <span className="font-semibold text-ink">{t.durata}</span>
                    {viaggio.durata}
                  </p>
                )}
                <Prose className="mt-4 max-w-none text-sm prose-ul:my-0 prose-li:my-1.5 lg:columns-2 lg:gap-10 [&_li]:break-inside-avoid">{viaggio.schedaPratica}</Prose>
              </div>
            )}

            <p className="text-xs leading-relaxed text-stone/85">
              {viaggio.periodo ? t.effettuato(viaggio.periodo) : ''}{t.aggiornata}{' '}
              {new Date().toLocaleDateString(LOCALE[lingua].html, { year: 'numeric', month: 'long', day: 'numeric' })}.
              <br />
              {t.verifica}
            </p>
            {meta.tappeMappa.length > 0 && (
              <div id="mappa" className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">{t.laRotta}</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone">
                  {t.rottaLead}
                </p>
                <div className="mt-8 rounded-none border border-alpine/10 bg-cream-dark/40 p-6 sm:p-10">
                  <RouteLine
                    tappe={meta.tappeMappa}
                    paeseSlug={meta.paeseSlug}
                    strokeClassName="stroke-alpine/60"
                    labelClassName="text-alpine"
                    className="h-48"
                  />
                </div>
              </div>
            )}

            {viaggio.giorni.length > 0 && (
              <div id="itinerario-giorno-per-giorno" className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">
                  {meta.unitaGiorniLabel ? t.itinerarioZone : t.itinerarioGiorni}
                </h2>
                <div className="mt-10">
                  <DaySectionSignature
                    giorni={viaggio.giorni}
                    meta={meta.giorni}
                    paeseSlug={meta.paeseSlug}
                    unitaLabel={meta.unitaGiorniLabel}
                    tappe={meta.tappeMappa}
                    tappeGiorni={tappeGiorni}
                  />
                </div>
              </div>
            )}

            {cosaVedereSezione && (
              <div id={slugify(cosaVedereSezione.titolo)} className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">{cosaVedereSezione.titolo}</h2>
                <Prose className="mt-4">{cosaVedereSezione.corpo}</Prose>
              </div>
            )}

            {/* approfondimenti, hotel e ristoranti chiusi a tendina: la pagina resta percorribile
                sul telefono e chi cerca un dettaglio lo apre dall'indice */}
            <div className="-my-8 space-y-0 [&>details+details]:border-t-0">
              {altreSezioni.map((sezione) => (
                <Tendina key={sezione.titolo} id={slugify(sezione.titolo)} titolo={sezione.titolo}>
                  <Prose className="mt-2">{sezione.corpo}</Prose>
                </Tendina>
              ))}
              {viaggio.doveDormito && (
                <Tendina id="dove-dormire" titolo={t.doveHoDormito} sottotitolo={t.doveHoDormitoSub}>
                  <Prose className="hotel-schede mt-2 max-w-none text-sm">{viaggio.doveDormito}</Prose>
                </Tendina>
              )}
              {viaggio.doveMangiato && (
                <Tendina id="dove-mangiare" titolo={t.doveHoMangiato}>
                  <Prose className="hotel-schede mt-2 max-w-none text-sm">{viaggio.doveMangiato}</Prose>
                </Tendina>
              )}
            </div>

            <div id="budget" className="scroll-mt-24">
              <h2 className="font-display text-2xl text-alpine">{t.budget}</h2>
              <p className="mt-2 text-sm text-stone">
                {t.budgetNota}
              </p>
              <div className="mt-4">
                <BudgetBreakdown voci={meta.budget} />
              </div>
            </div>

            {consigliSezione && (
              <div id={slugify(consigliSezione.titolo)} className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">{consigliSezione.titolo}</h2>
                <Prose className="mt-4">{consigliSezione.corpo}</Prose>
              </div>
            )}

            {viaggio.chiusura && (
              <p className="border-t border-alpine/10 pt-10 font-display text-lg italic leading-relaxed text-stone sm:text-xl">
                {richNodes(viaggio.chiusura)}
              </p>
            )}

            {viaggio.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {viaggio.tags.map((tag) => (
                  <span key={tag} className="rounded-none bg-alpine/5 px-3 py-1 text-xs font-medium text-alpine">
                    #{etichetta(tag, lingua)}
                  </span>
                ))}
              </div>
            )}
            <OrganizzaViaggio
              tappe={meta.tappeMappa.map((t) => t.nome.replace(PREFISSO_TAPPA, ''))}
              paese={viaggio.categorie[1] ?? getContinente(viaggio.categorie)}
              asia={getContinente(viaggio.categorie) === 'Asia'}
              cina={viaggio.categorie.includes('Cina')}
              lista={listaPerViaggio(viaggio.slug, lingua)}
            />
            <FirmaAutore />
            <ProssimaDestinazione slug={viaggio.slug} lingua={lingua} />
            <AltreGuidePaese slug={viaggio.slug} lingua={lingua} />
            <DomandeViaggio viaggio={viaggio.slug} lingua={lingua} domande={domande} />
          </div>
          </div>

        </Container>
      </section>
    </>
  )
}
