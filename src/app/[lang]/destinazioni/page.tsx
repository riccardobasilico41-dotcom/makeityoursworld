import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '@/components/ui/Link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { contaPaesi, getAllPaesi } from '@/lib/geo'
import { raggruppaPerContinente } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { MappaMondoSezione } from '@/components/MappaMondoSezione'
import { breadcrumbJsonLd, raccoltaJsonLd } from '@/lib/structured-data'
import { linguaCorrente } from '@/lib/i18n/server'
import { AREE } from '@/lib/aree'
import { etichetta } from '@/lib/i18n/etichette'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    home: 'Home',
    titolo: 'Destinazioni',
    metaDesc: (brand: string) => `I Paesi esplorati in profondità su ${brand}, divisi per macro-regione: destinazioni ed esperienze, non solo l'itinerario completo.`,
    jsonDesc: (brand: string) => `I Paesi esplorati in profondità su ${brand}.`,
    eyebrow: 'Paese per Paese',
    lead: (n: number) => `${n} Paesi divisi per macro-regione: scegline uno per esplorarlo destinazione per destinazione ed esperienza per esperienza, non solo come itinerario unico.`,
    paese: 'Paese',
    paesi: 'Paesi',
    esplora: 'Esplora il Paese',
  },
  en: {
    home: 'Home',
    titolo: 'Destinations',
    metaDesc: (brand: string) => `The countries I explored in depth on ${brand}, grouped by region: destinations and experiences, not just the full itinerary.`,
    jsonDesc: (brand: string) => `The countries I explored in depth on ${brand}.`,
    eyebrow: 'Country by country',
    lead: (n: number) => `${n} countries grouped by region: pick one to explore it destination by destination and experience by experience, not just as a single itinerary.`,
    paese: 'country',
    paesi: 'countries',
    esplora: 'Explore the country',
  },
  es: {
    home: 'Inicio',
    titolo: 'Destinos',
    metaDesc: (brand: string) => `Los países explorados a fondo en ${brand}, agrupados por región: destinos y experiencias, no solo el itinerario completo.`,
    jsonDesc: (brand: string) => `Los países explorados a fondo en ${brand}.`,
    eyebrow: 'País por país',
    lead: (n: number) => `${n} países agrupados por región: elige uno para explorarlo destino a destino y experiencia a experiencia, no solo como un itinerario único.`,
    paese: 'país',
    paesi: 'países',
    esplora: 'Explora el país',
  },
} satisfies Record<Lingua, Record<string, string | ((a: never) => string)>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({
    lingua,
    title: t.titolo,
    description: t.metaDesc(siteConfig.brandName),
    path: '/destinazioni',
  })
}

export default async function DestinazioniIndexPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const paesi = getAllPaesi(lingua)
  // raggruppati per area, con gli stessi nomi delle pagine area e dei filtri (es. «Africa e Medio
  // Oriente»); i continenti che non stanno in nessuna area restano per continente, in fondo
  const gruppi = [
    ...AREE.map((area) => ({ chiave: area.slug, nome: area.nome[lingua], href: `/aree/${area.slug}` as string | undefined, items: paesi.filter((p) => area.continenti.includes(p.continente)) })),
    ...raggruppaPerContinente(paesi.filter((p) => !AREE.some((a) => a.continenti.includes(p.continente))), (p) => p.continente).map((g) => ({
      chiave: g.continente,
      nome: etichetta(g.continente, lingua),
      href: undefined as string | undefined,
      items: g.items,
    })),
  ].filter((g) => g.items.length > 0)

  return (
    <>
      <JsonLd
        data={[
          raccoltaJsonLd({
            nome: t.titolo,
            descrizione: t.jsonDesc(siteConfig.brandName),
            percorso: '/destinazioni',
            elementi: paesi.map((p) => ({ nome: p.nome, percorso: `/destinazioni/${p.slug}` })),
          }, lingua),
          // le stesse briciole visibili nell'intestazione
          breadcrumbJsonLd([{ nome: t.home, percorso: '/' }, { nome: t.titolo, percorso: '/destinazioni' }], lingua),
        ]}
      />
      <PageHeader
        crumbs={[{ label: t.home, href: '/' }, { label: t.titolo }]}
        eyebrow={t.eyebrow}
        title={t.titolo}
        lead={
          <p>{t.lead(contaPaesi(paesi))}</p>
        }
      />
      <MappaMondoSezione />
      <section className="sezione">
      <Container>
        <div className="space-y-16">
          {gruppi.map(({ chiave, nome, href, items }) => (
            <div key={chiave}>
              <div className="flex items-baseline gap-4 border-b border-alpine/15 pb-3">
                <h2 className="titolo-sezione text-alpine">
                  {href ? (
                    <Link href={href} className="hover:text-rosso">
                      {nome}
                    </Link>
                  ) : (
                    nome
                  )}
                </h2>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/85">
                  {contaPaesi(items)} {contaPaesi(items) === 1 ? t.paese : t.paesi}
                </span>
              </div>

              <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
                {items.map((paese) => (
                  <RevealItem key={paese.slug}>
                    <Link
                      href={`/destinazioni/${paese.slug}`}
                      className="group flex h-full flex-col overflow-hidden scheda-lista active:scale-[0.99] motion-reduce:active:scale-100"
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
                      <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="titolo-scheda text-alpine">{paese.nome}</h3>
                      <p className="text-sm leading-relaxed text-stone">{paese.descrizione}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-rosso">
                        {t.esplora}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                      </div>
                    </Link>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
        </div>
      </Container>
      </section>
    </>
  )
}
