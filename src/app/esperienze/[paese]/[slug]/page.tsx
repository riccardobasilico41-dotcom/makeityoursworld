import type { Metadata } from 'next'
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

export async function generateStaticParams() {
  return getAllEsperienze().map((e) => ({ paese: e.paeseSlug, slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug, slug } = await params
  const esperienza = getEsperienza(paeseSlug, slug)
  if (!esperienza) return {}
  const nome = esperienza.nome
  return pageMetadata({
    // La domanda che si fa chi la sta valutando: «vale la pena?».
    title: primoTitoloCheSta([
      esperienza.costo && `${nome}: vale la pena? Costi, durata e consigli`,
      esperienza.costo && `${nome}: vale la pena? Costi e consigli`,
      `${nome}: vale la pena? Consigli pratici`,
      `${nome}: vale la pena?`,
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
  const paese = getPaese(paeseSlug)
  const esperienza = getEsperienza(paeseSlug, slug)
  if (!paese || !esperienza) notFound()

  const destinazioni = getDestinazioniByEsperienzaSlug(esperienza)
  const viaggi = getViaggiByEsperienza(esperienza)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: esperienza.nome,
    description: esperienza.cosE,
  }

  return (
    <>
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { nome: 'Home', percorso: '/' },
            { nome: 'Destinazioni', percorso: '/destinazioni' },
            { nome: paese.nome, percorso: `/destinazioni/${paeseSlug}` },
            { nome: esperienza.nome, percorso: `/esperienze/${paeseSlug}/${esperienza.slug}` },
          ]),
          faqJsonLd([
            { domanda: `Quanto costa ${esperienza.nome}?`, risposta: esperienza.costo },
            { domanda: `Quanto dura ${esperienza.nome}?`, risposta: esperienza.durata },
            { domanda: `Qual è il periodo migliore per ${esperienza.nome}?`, risposta: esperienza.periodo },
            { domanda: `Come si prenota ${esperienza.nome}?`, risposta: esperienza.comePrenotare },
            { domanda: `Cosa portare per ${esperienza.nome}?`, risposta: esperienza.cosaPortare },
            { domanda: `Per chi è adatta ${esperienza.nome}?`, risposta: esperienza.perChiEAdatta },
          ]),
        ].filter((d) => d !== null)}
      />
      <PageHeader
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinazioni', href: '/destinazioni' },
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
          { label: 'Dove si trova', value: esperienza.localita, icona: MapPin },
          { label: 'Durata', value: esperienza.durata, icona: Clock },
          { label: 'Periodo', value: esperienza.periodo, icona: CalendarDays },
          { label: 'Costo', value: esperienza.costo, icona: Wallet },
          { label: 'Come prenotare', value: esperienza.comePrenotare, icona: Ticket },
          { label: 'Cosa portare', value: esperienza.cosaPortare, icona: Backpack },
          { label: 'Per chi è adatta', value: esperienza.perChiEAdatta, icona: Users },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="space-y-14">
          <div className="max-w-3xl">
            <TitoloSezione icona={Compass}>Perché farla</TitoloSezione>
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
              <TitoloSezione icona={Shuffle}>Alternative</TitoloSezione>
              <ElencoNumerato voci={esperienza.alternative} />
            </div>
          )}

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-10">
              <RelatedContent
                titolo="Destinazione collegata"
                items={destinazioni.map((d) => ({
                  href: `/destinazioni/${paeseSlug}/${d.slug}`,
                  eyebrow: 'Destinazione',
                  titolo: d.nome,
                  sottotitolo: d.giorniConsigliati,
                }))}
              />
              <RelatedContent
                titolo="Itinerari che la includono"
                items={viaggi.map((v) => ({
                  href: `/viaggi/${v.slug}`,
                  eyebrow: 'Itinerario completo',
                  titolo: v.titolo,
                  sottotitolo: v.durataBreve,
                }))}
              />
            </div>
            <PrenotaQui
              voci={[
                { etichetta: esperienza.nome, href: link.getyourguide(`${esperienza.nome} ${esperienza.localita}`), nota: 'GetYourGuide' },
                { etichetta: esperienza.nome, href: link.viator(`${esperienza.nome} ${esperienza.localita}`), nota: 'Viator' },
              ]}
            />
          </div>
          <FirmaAutore className="max-w-3xl" />
        </Container>
      </section>
    </>
  )
}
