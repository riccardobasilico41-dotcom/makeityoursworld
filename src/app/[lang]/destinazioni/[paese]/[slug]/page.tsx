import type { Metadata } from 'next'
import { Filigrana } from '@/components/Filigrana'
import { SalvaBottone } from '@/components/SalvaBottone'
import { FirmaAutore } from '@/components/FirmaAutore'
import { PrenotaQui } from '@/components/OrganizzaViaggio'
import { link } from '@/lib/affiliazioni'
import { notFound } from 'next/navigation'
import { Camera, BedDouble, Bus, CalendarDays, Clock, Compass, Eye, Footprints, MapPin, Moon, Plane, Sparkles, Utensils, Wallet } from 'lucide-react'
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

// "Torna a..." con l'articolo corretto per ciascun Paese (il Messico, la Norvegia,
// l'Islanda, la Svezia) — l'italiano non si presta a una regola generica affidabile.
export async function generateStaticParams() {
  return getAllDestinazioni().map((d) => ({ paese: d.paeseSlug, slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug, slug } = await params
  const destinazione = getDestinazione(paeseSlug, slug)
  if (!destinazione) return {}
  const nome = destinazione.nome
  // «3-4 giorni», «1 giorno»: solo se è una durata vera, non «modulare» o una frase.
  const giorni = /^\d[\d\s–-]*giorn[oi]$/i.test(destinazione.giorniConsigliati.trim())
    ? destinazione.giorniConsigliati.trim()
    : undefined
  const errori = destinazione.erroriDaEvitare.length
  const paese = getPaese(paeseSlug)?.nome
  return pageMetadata({
    // Formula delle ricerche vere («cosa vedere», «quanti giorni»), dalla più ricca alla più corta che sta in 60 caratteri.
    title: primoTitoloCheSta([
      giorni && errori > 1 && `${nome}: cosa vedere in ${giorni} e ${errori} errori da evitare`,
      giorni && `${nome}: cosa vedere in ${giorni} e come organizzarsi`,
      giorni && `${nome}: cosa vedere in ${giorni}`,
      errori > 1 && `${nome}: cosa vedere e ${errori} errori da evitare`,
      paese && `${nome} (${paese}): cosa vedere e consigli pratici`,
      `${nome}: cosa vedere e consigli pratici`,
      `${nome}: cosa vedere`,
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
  const paese = getPaese(paeseSlug)
  const destinazione = getDestinazione(paeseSlug, slug)
  if (!paese || !destinazione) notFound()

  const esperienze = getEsperienzeDiDestinazione(destinazione)
  const viaggi = getViaggiByDestinazione(destinazione)

  // Galleria: le foto dei giorni dei viaggi passati da qui e quelle delle esperienze, le proprie prima
  const viste = new Set([destinazione.immagine])
  const foto: FotoGalleria[] = []
  const aggiungi = (src?: string, alt?: string) => {
    if (!src || viste.has(src)) return
    viste.add(src)
    foto.push({ src, alt: alt || destinazione.nome })
  }
  for (const v of viaggi) {
    for (const g of getTripMeta(v.slug)?.giorni ?? []) {
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
  }

  return (
    <>
      <Filigrana paese={paeseSlug} />
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { nome: 'Home', percorso: '/' },
            { nome: 'Destinazioni', percorso: '/destinazioni' },
            { nome: paese.nome, percorso: `/destinazioni/${paeseSlug}` },
            { nome: destinazione.nome, percorso: `/destinazioni/${paeseSlug}/${destinazione.slug}` },
          ]),
          faqJsonLd([
            { domanda: `Quanti giorni servono per ${destinazione.nome}?`, risposta: destinazione.giorniConsigliati },
            { domanda: `Qual è il periodo migliore per ${destinazione.nome}?`, risposta: destinazione.periodoMigliore },
            { domanda: `Come arrivare a ${destinazione.nome}?`, risposta: destinazione.comeArrivare },
            { domanda: `Come spostarsi a ${destinazione.nome}?`, risposta: destinazione.comeSpostarsi },
            { domanda: `Quanto costa ${destinazione.nome}?`, risposta: destinazione.costi },
          ]),
        ].filter((d) => d !== null)}
      />
      <PageHeader
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinazioni', href: '/destinazioni' },
          { label: paese.nome, href: `/destinazioni/${paeseSlug}` },
          { label: destinazione.nome },
        ]}
        eyebrow={destinazione.tipologia.join(' · ')}
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
          { label: 'Giorni consigliati', value: destinazione.giorniConsigliati, icona: Clock },
          { label: 'Periodo migliore', value: destinazione.periodoMigliore, icona: CalendarDays },
          { label: 'Costi', value: destinazione.costi, icona: Wallet },
          { label: 'Come arrivare', value: destinazione.comeArrivare, icona: Plane },
          { label: 'Come spostarsi', value: destinazione.comeSpostarsi, icona: Bus },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="space-y-14">
          <div className="max-w-3xl">
            <TitoloSezione icona={Compass}>Perché andarci</TitoloSezione>
            <p className="mt-4 text-lg leading-relaxed text-stone">{richNodes(destinazione.percheAndarci)}</p>
          </div>

          {destinazione.miaEsperienza && (
            <div className="max-w-3xl">
              <Ricordo testo={destinazione.miaEsperienza} />
            </div>
          )}

          {foto.length >= 2 && (
            <div>
              <TitoloSezione icona={Camera}>Le foto</TitoloSezione>
              <Galleria foto={foto.slice(0, 9)} />
            </div>
          )}

          {destinazione.cosaVedere.length > 0 && (
            <div>
              <TitoloSezione icona={Eye}>Cosa vedere</TitoloSezione>
              <ElencoNumerato voci={destinazione.cosaVedere} />
            </div>
          )}

          {destinazione.cosaFare.length > 0 && (
            <div>
              <TitoloSezione icona={Footprints}>Cosa fare</TitoloSezione>
              <ElencoNumerato voci={destinazione.cosaFare} />
            </div>
          )}

          {esperienze.length > 0 && (
            <div>
              <TitoloSezione icona={Sparkles}>Le esperienze da fare qui</TitoloSezione>
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
              <TitoloSezione icona={MapPin}>Mangiare, dormire, uscire</TitoloSezione>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {destinazione.doveDormire && <SchedaTesto icona={BedDouble} titolo="Dove dormire" testo={destinazione.doveDormire} />}
                {destinazione.doveMangiare && <SchedaTesto icona={Utensils} titolo="Dove mangiare" testo={destinazione.doveMangiare} />}
                {destinazione.usciteSerali && <SchedaTesto icona={Moon} titolo="Dopo cena" testo={destinazione.usciteSerali} />}
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
              titolo="Itinerari che includono questa destinazione"
              items={viaggi.map((v) => ({
                href: `/viaggi/${v.slug}`,
                eyebrow: 'Itinerario completo',
                titolo: v.titolo,
                sottotitolo: v.durataBreve,
              }))}
            />
            <PrenotaQui
              voci={[
                { etichetta: `Hotel: ${destinazione.nome}`, href: link.booking(`${destinazione.nome}, ${paese.nome}`), nota: 'Booking' },
                ...(paese.continente === 'Asia'
                  ? [{ etichetta: `Hotel: ${destinazione.nome}`, href: link.tripcomHotel(destinazione.nome), nota: 'Trip.com' }]
                  : []),
                { etichetta: `Attività: ${destinazione.nome}`, href: link.getyourguide(destinazione.nome), nota: 'GetYourGuide' },
              ]}
            />
          </div>
          <FirmaAutore className="max-w-3xl" />
        </Container>
      </section>
    </>
  )
}
