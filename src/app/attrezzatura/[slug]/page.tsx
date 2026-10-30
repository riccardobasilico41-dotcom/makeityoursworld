import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { pageMetadata, primoTitoloCheSta } from '@/lib/seo'
import { link, relAffiliato } from '@/lib/affiliazioni'
import { getAllViaggi } from '@/lib/viaggi'
import { getListaAttrezzatura, listeAttrezzatura } from '@/content/attrezzatura'

/** Title SEO per lista (≤ 60 caratteri); se manca si ripiega su «<titolo>: cosa mettere in valigia». */
const TITOLI_SEO: Record<string, string> = {
  'islanda-in-tenda': "Cosa mettere in valigia per l'Islanda in tenda: la lista",
  'inverno-artico': 'Cosa mettere in valigia per Lapponia e Tromsø in inverno',
  'snorkeling-mari-tropicali': 'Cosa portare per lo snorkeling: Maldive, Filippine, Egitto',
  'ande-alta-quota': 'Cosa mettere in valigia per Perù e Bolivia in alta quota',
  'trekking-rifugi-alpi': 'Cosa portare nel trekking di rifugio: TMB e Dolomiti',
  'settimana-bianca': 'Cosa portare in settimana bianca: la lista per lo sci',
  'weekend-in-citta': 'Cosa mettere nel bagaglio a mano per un weekend in città',
  'zaino-tropici': 'Cosa mettere nello zaino per Asia e Centro America',
}

export async function generateStaticParams() {
  return listeAttrezzatura.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const lista = getListaAttrezzatura(slug)
  if (!lista) return {}
  return pageMetadata({
    title: primoTitoloCheSta([TITOLI_SEO[slug], `${lista.titolo}: cosa mettere in valigia`, lista.titolo]),
    description: `${lista.titolo}: la lista di cosa mettere in valigia. ${lista.sottotitolo}.`,
    path: `/attrezzatura/${slug}`,
  })
}

export default async function ListaAttrezzaturaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lista = getListaAttrezzatura(slug)
  if (!lista) notFound()

  const viaggi = getAllViaggi().filter((v) => lista.viaggi.includes(v.slug))

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: 'Home', percorso: '/' },
          { nome: 'Cosa mettere in valigia', percorso: '/attrezzatura' },
          { nome: lista.titolo, percorso: `/attrezzatura/${lista.slug}` },
        ])}
      />
      <PageHeader
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cosa mettere in valigia', href: '/attrezzatura' },
          { label: lista.titolo },
        ]}
        eyebrow="Cosa mettere in valigia"
        title={lista.titolo}
        titleNote={lista.sottotitolo}
        lead={<p>{lista.intro}</p>}
        meta={
          <p className="text-sm leading-relaxed text-stone">
            Contiene link affiliati Amazon: se compri, il sito riceve una piccola commissione, senza costi in più per te.{' '}
            <Link href="/trasparenza" className="font-semibold text-ink underline underline-offset-2 hover:text-rosso">
              Come funziona
            </Link>
          </p>
        }
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
            <div className="space-y-14">
              {lista.sezioni.map((sezione, i) => (
                <section key={sezione.titolo} aria-labelledby={`sezione-${i}`}>
                  <h2
                    id={`sezione-${i}`}
                    className="border-b-2 border-ink pb-3 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] text-ink"
                  >
                    {sezione.titolo}
                  </h2>
                  <ul className="divide-y divide-ink/15">
                    {sezione.voci.map((voce) => (
                      <li key={voce.nome}>
                        <a
                          href={link.amazon(voce.ricerca)}
                          target="_blank"
                          rel={relAffiliato}
                          className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
                        >
                          <span>
                            <span className="block font-semibold text-ink group-hover:text-rosso">{voce.nome}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-stone">{voce.perche}</span>
                          </span>
                          <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-none border-2 border-ink px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink transition-colors duration-150 group-hover:bg-ink group-hover:text-cream">
                            Apri su Amazon
                            <ArrowUpRight size={14} aria-hidden="true" />
                            <span className="sr-only">(si apre in una nuova scheda)</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {viaggi.length > 0 && (
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="border-2 border-ink bg-cream-dark p-6">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">
                    {viaggi.length === 1 ? 'Il viaggio per cui serve' : 'I viaggi per cui serve'}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {viaggi.map((v) => (
                      <li key={v.slug}>
                        <Link
                          href={`/viaggi/${v.slug}`}
                          className="text-sm font-medium leading-snug text-ink underline-offset-2 hover:text-rosso hover:underline"
                        >
                          {v.titolo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/attrezzatura"
                    className="mt-6 inline-block border-t border-ink/15 pt-4 text-sm font-semibold text-ink underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-rosso"
                  >
                    Tutte le liste
                  </Link>
                </div>
              </aside>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
