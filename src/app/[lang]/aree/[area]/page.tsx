import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from '@/components/ui/Link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { DestinationCard } from '@/components/DestinationCard'
import { JsonLd } from '@/components/JsonLd'
import { AREE, getArea } from '@/lib/aree'
import { contaPaesi, getAllPaesi, getDestinazioniByPaese } from '@/lib/geo'
import { contaViaggiNellArea } from '@/lib/viaggi-filtri'
import { pageMetadata } from '@/lib/seo'
import { breadcrumbJsonLd, raccoltaJsonLd } from '@/lib/structured-data'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

/*
 * Pagina di una macro-regione (Asia, Europa…): si apre cliccando l'area nel menu.
 * Prima le card dei Paesi, poi tutte le destinazioni divise per Paese.
 */

const T = {
  it: {
    home: 'Home',
    destinazioni: 'Destinazioni',
    seoTitle: (a: string) => `${a}: Paesi e destinazioni da scoprire`,
    seoDesc: (a: string, p: number, d: number, v: number) =>
      `${a}: ${p} Paesi e ${d} destinazioni con schede pratiche, cosa vedere e ${v} itinerari giorno per giorno dai miei viaggi.`,
    eyebrow: (p: number, d: number) => `${p} Paesi · ${d} destinazioni`,
    lead: (a: string) => `Tutti i Paesi e le destinazioni di ${a} raccontati sul sito: scegli un Paese per la scheda completa, o vai dritto a una destinazione.`,
    paesi: 'I Paesi',
    tutte: 'Tutte le destinazioni',
    esplora: 'Esplora il Paese',
    nDest: (n: number) => `${n} ${n === 1 ? 'destinazione' : 'destinazioni'}`,
    vediPaese: 'Apri il Paese',
    tuttiIViaggi: (a: string) => `Tutti i viaggi in ${a}`,
    nViaggi: (n: number) => `${n} ${n === 1 ? 'itinerario' : 'itinerari'} giorno per giorno`,
  },
  en: {
    home: 'Home',
    destinazioni: 'Destinations',
    seoTitle: (a: string) => `${a}: countries and destinations to explore`,
    seoDesc: (a: string, p: number, d: number, v: number) =>
      `${a}: ${p} countries and ${d} destinations with practical guides, what to see and ${v} day-by-day itineraries from my trips.`,
    eyebrow: (p: number, d: number) => `${p} countries · ${d} destinations`,
    lead: (a: string) => `Every country and destination in ${a} covered on the site: pick a country for the full guide, or go straight to a destination.`,
    paesi: 'Countries',
    tutte: 'All destinations',
    esplora: 'Explore the country',
    nDest: (n: number) => `${n} ${n === 1 ? 'destination' : 'destinations'}`,
    vediPaese: 'Open the country',
    tuttiIViaggi: (a: string) => `All trips in ${a}`,
    nViaggi: (n: number) => `${n} day-by-day ${n === 1 ? 'itinerary' : 'itineraries'}`,
  },
  es: {
    home: 'Inicio',
    destinazioni: 'Destinos',
    seoTitle: (a: string) => `${a}: países y destinos para descubrir`,
    seoDesc: (a: string, p: number, d: number, v: number) =>
      `${a}: ${p} países y ${d} destinos con fichas prácticas, qué ver y ${v} itinerarios día a día de mis viajes.`,
    eyebrow: (p: number, d: number) => `${p} países · ${d} destinos`,
    lead: (a: string) => `Todos los países y destinos de ${a} que cuento en la web: elige un país para la ficha completa o ve directo a un destino.`,
    paesi: 'Los países',
    tutte: 'Todos los destinos',
    esplora: 'Explorar el país',
    nDest: (n: number) => `${n} ${n === 1 ? 'destino' : 'destinos'}`,
    vediPaese: 'Abrir el país',
    tuttiIViaggi: (a: string) => `Todos los viajes en ${a}`,
    nViaggi: (n: number) => `${n} ${n === 1 ? 'itinerario' : 'itinerarios'} día a día`,
  },
} satisfies Record<Lingua, unknown>

export function generateStaticParams() {
  return AREE.map((a) => ({ area: a.slug }))
}

function datiArea(slug: string, lingua: Lingua) {
  const area = getArea(slug)
  if (!area) return null
  const paesi = getAllPaesi(lingua)
    .filter((p) => area.continenti.includes(p.continente))
    .sort((x, y) => x.nome.localeCompare(y.nome, lingua))
  const conDest = paesi.map((p) => ({ paese: p, destinazioni: getDestinazioniByPaese(p.slug, lingua) }))
  const nDest = conDest.reduce((n, x) => n + x.destinazioni.length, 0)
  const nViaggi = contaViaggiNellArea(area.slug)
  // le regioni (Florida, Transilvania…) contano per il loro Stato, vedi contaPaesi
  const nPaesi = contaPaesi(paesi)
  return { area, conDest, nDest, nViaggi, nPaesi }
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area: slug } = await params
  const lingua = await linguaCorrente()
  const d = datiArea(slug, lingua)
  if (!d) return {}
  const t = T[lingua]
  const nome = d.area.nome[lingua]
  return pageMetadata({
    title: t.seoTitle(nome),
    description: t.seoDesc(nome, d.nPaesi, d.nDest, d.nViaggi),
    path: `/aree/${slug}`,
    lingua,
  })
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params
  const lingua = await linguaCorrente()
  const d = datiArea(slug, lingua)
  if (!d) notFound()
  const t = T[lingua]
  const nome = d.area.nome[lingua]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { nome: t.home, percorso: '/' },
            { nome: t.destinazioni, percorso: '/destinazioni' },
            { nome, percorso: `/aree/${slug}` },
          ], lingua),
          raccoltaJsonLd(
            {
              nome,
              descrizione: t.lead(nome),
              percorso: `/aree/${slug}`,
              elementi: d.conDest.map(({ paese }) => ({ nome: paese.nome, percorso: `/destinazioni/${paese.slug}` })),
            },
            lingua,
          ),
        ]}
      />
      <PageHeader
        pieno
        crumbs={[{ label: t.home, href: '/' }, { label: t.destinazioni, href: '/destinazioni' }, { label: nome }]}
        eyebrow={t.eyebrow(d.nPaesi, d.nDest)}
        title={nome}
        lead={t.lead(nome)}
        media={{ tipo: 'foto', src: d.area.immagine, alt: d.area.imageAlt[lingua] }}
      />

      <section aria-labelledby="paesi-titolo" className="py-14 sm:py-20">
        <Container>
          <h2 id="paesi-titolo" className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-alpine">
            {t.paesi}
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.conDest.map(({ paese, destinazioni }) => (
              <li key={paese.slug}>
                <Link
                  href={`/destinazioni/${paese.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-alpine/10 bg-white transition-colors duration-150 hover:border-ink"
                >
                  {paese.heroImage && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-cream-dark">
                      <Image
                        src={paese.heroImage}
                        alt={paese.heroImageAlt ?? ''}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rosso">{t.nDest(destinazioni.length)}</p>
                    <h3 className="font-display text-xl text-alpine">{paese.nome}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-stone">{paese.descrizione}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-rosso">
                      {t.esplora}
                      <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {d.nViaggi > 0 && (
            <Link
              href={`/viaggi?area=${slug}`}
              className="group mt-10 flex flex-wrap items-center justify-between gap-4 border-2 border-ink bg-white p-6 shadow-[6px_6px_0_var(--color-rosso)] transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_var(--color-rosso)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2 sm:p-8"
            >
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-rosso">{t.nViaggi(d.nViaggi)}</span>
                <span className="mt-1 block font-display text-[clamp(1.4rem,2.4vw,2rem)] text-alpine">{t.tuttiIViaggi(nome)}</span>
              </span>
              <ArrowUpRight size={22} aria-hidden className="text-rosso transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </Container>
      </section>

      <section aria-labelledby="tutte-titolo" className="border-t border-alpine/10 bg-cream-dark/30 py-14 sm:py-20">
        <Container>
          <h2 id="tutte-titolo" className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-alpine">
            {t.tutte}
          </h2>
          {/* indice rapido per Paese: con molte destinazioni la pagina è lunga */}
          <nav aria-label={t.paesi} className="mt-5 flex flex-wrap gap-2">
            {d.conDest
              .filter((x) => x.destinazioni.length > 0)
              .map(({ paese }) => (
                <a
                  key={paese.slug}
                  href={`#paese-${paese.slug}`}
                  className="inline-flex min-h-9 items-center border border-ink/20 bg-cream px-3 text-sm font-medium text-ink hover:border-ink hover:bg-ink hover:text-cream"
                >
                  {paese.nome}
                </a>
              ))}
          </nav>
          <div className="mt-12 space-y-14">
            {d.conDest
              .filter((x) => x.destinazioni.length > 0)
              .map(({ paese, destinazioni }) => (
                <div key={paese.slug} id={`paese-${paese.slug}`} className="scroll-mt-24">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-alpine/15 pb-3">
                    <h3 className="font-display text-2xl text-alpine">{paese.nome}</h3>
                    <Link href={`/destinazioni/${paese.slug}`} className="text-sm font-semibold text-rosso hover:underline">
                      {t.vediPaese} →
                    </Link>
                  </div>
                  <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {destinazioni.map((dest) => (
                      <li key={dest.slug}>
                        <DestinationCard destinazione={dest} paeseSlug={paese.slug} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </Container>
      </section>
    </>
  )
}
