import type { Metadata } from 'next'
import { Filigrana } from '@/components/Filigrana'
import { SalvaBottone } from '@/components/SalvaBottone'
import { FirmaAutore } from '@/components/FirmaAutore'
import { PrenotaQui } from '@/components/OrganizzaViaggio'
import { link } from '@/lib/affiliazioni'
import { notFound } from 'next/navigation'
import { Backpack, CalendarDays, Clock, Compass, MapPin, Shuffle, Ticket, Users, Wallet } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Rich } from '@/components/ui/Rich'
import { PersonalVerdict } from '@/components/ui/PersonalVerdict'
import { ElencoNumerato, InfoPratiche, Ricordo, TitoloSezione } from '@/components/scheda/Blocchi'
import { RelatedContent } from '@/components/RelatedContent'
import { ComparisonBlock } from '@/components/ComparisonBlock'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/structured-data'
import {
  getAllEsperienze,
  getEsperienza,
  getPaese,
  getDestinazioniByEsperienzaSlug,
  getViaggiByEsperienza,
} from '@/lib/geo'
import { pageMetadata, primoTitoloCheSta } from '@/lib/seo'
import { richNodes } from '@/components/ui/Rich'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { localizza } from '@/lib/i18n/percorsi'
import { siteConfig } from '@/lib/site-config'

const T = {
  it: {
    home: 'Home',
    destinazioni: 'Destinazioni',
    titolo1: (n: string) => `${n}: vale la pena? Costi, durata e consigli`,
    titolo2: (n: string) => `${n}: vale la pena? Costi e consigli`,
    titolo3: (n: string) => `${n}: vale la pena? Consigli pratici`,
    titolo4: (n: string) => `${n}: vale la pena?`,
    faqCosto: (n: string) => `Quanto costa ${n}?`,
    faqDurata: (n: string) => `Quanto dura ${n}?`,
    faqPeriodo: (n: string) => `Qual è il periodo migliore per ${n}?`,
    faqPrenotare: (n: string) => `Come si prenota ${n}?`,
    faqPortare: (n: string) => `Cosa portare per ${n}?`,
    faqPerChi: (n: string) => `Per chi è adatta ${n}?`,
    doveSiTrova: 'Dove si trova',
    durata: 'Durata',
    periodo: 'Periodo',
    costo: 'Costo',
    comePrenotare: 'Come prenotare',
    cosaPortare: 'Cosa portare',
    perChiEAdatta: 'Per chi è adatta',
    percheFarla: 'Perché farla',
    alternative: 'Alternative',
    destinazioneCollegata: 'Destinazione collegata',
    destinazione: 'Destinazione',
    itinerari: 'Itinerari che la includono',
    itinerarioCompleto: 'Itinerario completo',
  },
  en: {
    home: 'Home',
    destinazioni: 'Destinations',
    titolo1: (n: string) => `${n}: worth it? Costs, duration and tips`,
    titolo2: (n: string) => `${n}: worth it? Costs and tips`,
    titolo3: (n: string) => `${n}: worth it? Practical tips`,
    titolo4: (n: string) => `${n}: worth it?`,
    faqCosto: (n: string) => `How much does ${n} cost?`,
    faqDurata: (n: string) => `How long does ${n} take?`,
    faqPeriodo: (n: string) => `What is the best time for ${n}?`,
    faqPrenotare: (n: string) => `How do you book ${n}?`,
    faqPortare: (n: string) => `What should you bring for ${n}?`,
    faqPerChi: (n: string) => `Who is ${n} right for?`,
    doveSiTrova: 'Where it is',
    durata: 'Duration',
    periodo: 'When to go',
    costo: 'Cost',
    comePrenotare: 'How to book',
    cosaPortare: 'What to bring',
    perChiEAdatta: 'Who it suits',
    percheFarla: 'Why do it',
    alternative: 'Alternatives',
    destinazioneCollegata: 'Related destination',
    destinazione: 'Destination',
    itinerari: 'Itineraries that include it',
    itinerarioCompleto: 'Full itinerary',
  },
  es: {
    home: 'Inicio',
    destinazioni: 'Destinos',
    titolo1: (n: string) => `${n}: ¿merece la pena? Costes, duración y consejos`,
    titolo2: (n: string) => `${n}: ¿merece la pena? Costes y consejos`,
    titolo3: (n: string) => `${n}: ¿merece la pena? Consejos prácticos`,
    titolo4: (n: string) => `${n}: ¿merece la pena?`,
    faqCosto: (n: string) => `¿Cuánto cuesta ${n}?`,
    faqDurata: (n: string) => `¿Cuánto dura ${n}?`,
    faqPeriodo: (n: string) => `¿Cuál es la mejor época para ${n}?`,
    faqPrenotare: (n: string) => `¿Cómo se reserva ${n}?`,
    faqPortare: (n: string) => `¿Qué llevar a ${n}?`,
    faqPerChi: (n: string) => `¿Para quién es ${n}?`,
    doveSiTrova: 'Dónde está',
    durata: 'Duración',
    periodo: 'Época',
    costo: 'Coste',
    comePrenotare: 'Cómo reservar',
    cosaPortare: 'Qué llevar',
    perChiEAdatta: 'Para quién es',
    percheFarla: 'Por qué hacerla',
    alternative: 'Alternativas',
    destinazioneCollegata: 'Destino relacionado',
    destinazione: 'Destino',
    itinerari: 'Itinerarios que la incluyen',
    itinerarioCompleto: 'Itinerario completo',
  },
} satisfies Record<Lingua, Record<string, string | ((n: string) => string)>>

export async function generateStaticParams() {
  // le schede in italiano e spagnolo si generano alla prima visita (build di Vercel entro il limite)
  if ((await linguaCorrente()) !== 'en') return []
  return getAllEsperienze('en').map((e) => ({ paese: e.paeseSlug, slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug, slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const esperienza = getEsperienza(paeseSlug, slug, lingua)
  if (!esperienza) return {}
  const nome = esperienza.nome
  return pageMetadata({
    lingua,
    // La domanda che si fa chi la sta valutando: «vale la pena?».
    title: primoTitoloCheSta([
      esperienza.costo && t.titolo1(nome),
      esperienza.costo && t.titolo2(nome),
      t.titolo3(nome),
      t.titolo4(nome),
      nome,
    ]),
    description: esperienza.cosE,
    path: `/esperienze/${paeseSlug}/${slug}`,
    type: 'article',
  })
}

export default async function EsperienzaPage({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}) {
  const { paese: paeseSlug, slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const paese = getPaese(paeseSlug, lingua)
  const esperienza = getEsperienza(paeseSlug, slug, lingua)
  if (!paese || !esperienza) notFound()

  const destinazioni = getDestinazioniByEsperienzaSlug(esperienza, lingua)
  const viaggi = getViaggiByEsperienza(esperienza, lingua)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: esperienza.nome,
    description: esperienza.cosE,
    url: `${siteConfig.url}${localizza(`/esperienze/${paeseSlug}/${esperienza.slug}`, lingua)}`,
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
            { nome: esperienza.nome, percorso: `/esperienze/${paeseSlug}/${esperienza.slug}` },
          ], lingua),
          faqJsonLd([
            { domanda: t.faqCosto(esperienza.nome), risposta: esperienza.costo },
            { domanda: t.faqDurata(esperienza.nome), risposta: esperienza.durata },
            { domanda: t.faqPeriodo(esperienza.nome), risposta: esperienza.periodo },
            { domanda: t.faqPrenotare(esperienza.nome), risposta: esperienza.comePrenotare },
            { domanda: t.faqPortare(esperienza.nome), risposta: esperienza.cosaPortare },
            { domanda: t.faqPerChi(esperienza.nome), risposta: esperienza.perChiEAdatta },
          ], lingua),
        ].filter((d) => d !== null)}
      />
      <PageHeader
        crumbs={[
          { label: t.home, href: '/' },
          { label: t.destinazioni, href: '/destinazioni' },
          { label: paese.nome, href: `/destinazioni/${paeseSlug}` },
          { label: esperienza.nome },
        ]}
        eyebrow={esperienza.localita}
        badge={<PersonalVerdict giudizio={esperienza.giudizio} />}
        title={esperienza.nome}
        lead={<Rich text={esperienza.cosE} as="p" />}
        media={esperienza.immagine ? { tipo: 'foto', src: esperienza.immagine, alt: esperienza.imageAlt } : undefined}
        pieno
        actions={
          <SalvaBottone
            elemento={{ tipo: 'esperienza', id: `${paeseSlug}/${esperienza.slug}`, titolo: esperienza.nome, href: `/esperienze/${paeseSlug}/${esperienza.slug}`, immagine: esperienza.immagine, sottotitolo: paese.nome }}
          />
        }
      />

      <InfoPratiche
        voci={[
          { label: t.doveSiTrova, value: esperienza.localita, icona: MapPin },
          { label: t.durata, value: esperienza.durata, icona: Clock },
          { label: t.periodo, value: esperienza.periodo, icona: CalendarDays },
          { label: t.costo, value: esperienza.costo, icona: Wallet },
          { label: t.comePrenotare, value: esperienza.comePrenotare, icona: Ticket },
          { label: t.cosaPortare, value: esperienza.cosaPortare, icona: Backpack },
          { label: t.perChiEAdatta, value: esperienza.perChiEAdatta, icona: Users },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="space-y-14">
          <div className="max-w-3xl">
            <TitoloSezione icona={Compass}>{t.percheFarla}</TitoloSezione>
            <p className="mt-4 text-lg leading-relaxed text-stone">{richNodes(esperienza.percheFarla)}</p>
          </div>

          {esperienza.miaEsperienza && (
            <div className="max-w-3xl">
              <Ricordo testo={esperienza.miaEsperienza} />
            </div>
          )}

          {esperienza.confronti?.map((confronto) => (
            <div key={confronto.titolo} className="max-w-4xl">
              <ComparisonBlock confronto={confronto} />
            </div>
          ))}

          {esperienza.alternative.length > 0 && (
            <div>
              <TitoloSezione icona={Shuffle}>{t.alternative}</TitoloSezione>
              <ElencoNumerato voci={esperienza.alternative} />
            </div>
          )}

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-10">
              <RelatedContent
                titolo={t.destinazioneCollegata}
                items={destinazioni.map((d) => ({
                  href: `/destinazioni/${paeseSlug}/${d.slug}`,
                  eyebrow: t.destinazione,
                  titolo: d.nome,
                  sottotitolo: d.giorniConsigliati,
                }))}
              />
              <RelatedContent
                titolo={t.itinerari}
                items={viaggi.map((v) => ({
                  href: `/viaggi/${v.slug}`,
                  eyebrow: t.itinerarioCompleto,
                  titolo: v.titolo,
                  sottotitolo: v.durataBreve,
                }))}
              />
            </div>
            <PrenotaQui
              voci={[
                { etichetta: esperienza.nome, href: link.getyourguide(`${esperienza.nome} ${esperienza.localita}`, lingua), nota: 'GetYourGuide' },
                { etichetta: esperienza.nome, href: link.viator(`${esperienza.nome} ${esperienza.localita}`, lingua), nota: 'Viator' },
              ]}
            />
          </div>
          <FirmaAutore className="max-w-3xl" />
        </Container>
      </section>
    </>
  )
}
