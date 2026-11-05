import type { Metadata } from 'next'
import Link from '@/components/ui/Link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { pageMetadata, primoTitoloCheSta } from '@/lib/seo'
import { link, relAffiliato } from '@/lib/affiliazioni'
import { getAllViaggi } from '@/lib/viaggi'
import { listeAttrezzatura } from '@/content/attrezzatura'
import { getListaAttrezzatura } from '@/lib/i18n/contenuti'
import { linguaCorrente } from '@/lib/i18n/server'
import { type Lingua } from '@/lib/i18n/config'

/** Title SEO per lista (≤ 60 caratteri); se manca si ripiega su «<titolo>: cosa mettere in valigia». */
const TITOLI_SEO: Record<Lingua, Record<string, string>> = {
  it: {
    'islanda-in-tenda': "Cosa mettere in valigia per l'Islanda in tenda: la lista",
    'inverno-artico': 'Cosa mettere in valigia per Lapponia e Tromsø in inverno',
    'snorkeling-mari-tropicali': 'Cosa portare per lo snorkeling: Maldive, Filippine, Egitto',
    'ande-alta-quota': 'Cosa mettere in valigia per Perù e Bolivia in alta quota',
    'trekking-rifugi-alpi': 'Cosa portare nel trekking di rifugio: TMB e Dolomiti',
    'settimana-bianca': 'Cosa portare in settimana bianca: la lista per lo sci',
    'weekend-in-citta': 'Cosa mettere nel bagaglio a mano per un weekend in città',
    'zaino-tropici': 'Cosa mettere nello zaino per Asia e Centro America',
  },
  en: {
    'islanda-in-tenda': 'What to Pack for Iceland by Tent: The Checklist',
    'inverno-artico': 'What to Pack for Lapland and Tromsø in Winter',
    'snorkeling-mari-tropicali': 'What to Pack for Snorkeling: Maldives, Philippines, Egypt',
    'ande-alta-quota': 'What to Pack for Peru and Bolivia at High Altitude',
    'trekking-rifugi-alpi': 'What to Pack for Hut-to-Hut Trekking: TMB and Dolomites',
    'settimana-bianca': 'What to Pack for a Ski Week: The Checklist',
    'weekend-in-citta': 'What to Pack in a Carry-On for a City Weekend',
    'zaino-tropici': 'What to Pack in Your Backpack for Asia and Central America',
  },
  es: {
    'islanda-in-tenda': 'Qué meter en la maleta para Islandia en tienda: la lista',
    'inverno-artico': 'Qué meter en la maleta para Laponia y Tromsø en invierno',
    'snorkeling-mari-tropicali': 'Qué llevar para hacer snorkel: Maldivas, Filipinas, Egipto',
    'ande-alta-quota': 'Qué meter en la maleta para Perú y Bolivia en altura',
    'trekking-rifugi-alpi': 'Qué llevar en el trekking de refugio: TMB y Dolomitas',
    'settimana-bianca': 'Qué llevar a la semana de esquí: la lista',
    'weekend-in-citta': 'Qué meter en el equipaje de mano para un fin de semana en la ciudad',
    'zaino-tropici': 'Qué meter en la mochila para Asia y Centroamérica',
  },
}

const T = {
  it: {
    cosa: 'Cosa mettere in valigia',
    sufTitolo: 'cosa mettere in valigia',
    desc: (titolo: string, sotto: string) => `${titolo}: la lista di cosa mettere in valigia. ${sotto}.`,
    affiliati: 'Contiene link affiliati Amazon: se compri, il sito riceve una piccola commissione, senza costi in più per te.',
    comeFunziona: 'Come funziona',
    apri: 'Apri su Amazon',
    nuovaScheda: '(si apre in una nuova scheda)',
    unViaggio: 'Il viaggio per cui serve',
    piuViaggi: 'I viaggi per cui serve',
    tutte: 'Tutte le liste',
  },
  en: {
    cosa: 'What to pack',
    sufTitolo: 'what to pack',
    desc: (titolo: string, sotto: string) => `${titolo}: the checklist of what to pack. ${sotto}.`,
    affiliati: 'Contains Amazon affiliate links: if you buy, the site gets a small commission at no extra cost to you.',
    comeFunziona: 'How it works',
    apri: 'Open on Amazon',
    nuovaScheda: '(opens in a new tab)',
    unViaggio: 'The trip it is for',
    piuViaggi: 'The trips it is for',
    tutte: 'All the lists',
  },
  es: {
    cosa: 'Qué meter en la maleta',
    sufTitolo: 'qué meter en la maleta',
    desc: (titolo: string, sotto: string) => `${titolo}: la lista de qué meter en la maleta. ${sotto}.`,
    affiliati: 'Contiene enlaces de afiliado de Amazon: si compras, el sitio recibe una pequeña comisión, sin coste adicional para ti.',
    comeFunziona: 'Cómo funciona',
    apri: 'Abrir en Amazon',
    nuovaScheda: '(se abre en una pestaña nueva)',
    unViaggio: 'El viaje para el que sirve',
    piuViaggi: 'Los viajes para los que sirve',
    tutte: 'Todas las listas',
  },
} satisfies Record<Lingua, Record<string, string | ((a: string, b: string) => string)>>

export async function generateStaticParams() {
  return listeAttrezzatura.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const lista = getListaAttrezzatura(slug, lingua)
  if (!lista) return {}
  return pageMetadata({
    title: primoTitoloCheSta([TITOLI_SEO[lingua][slug], `${lista.titolo}: ${t.sufTitolo}`, lista.titolo]),
    description: t.desc(lista.titolo, lista.sottotitolo),
    path: `/attrezzatura/${slug}`,
    lingua,
  })
}

export default async function ListaAttrezzaturaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const lista = getListaAttrezzatura(slug, lingua)
  if (!lista) notFound()

  const viaggi = getAllViaggi(lingua).filter((v) => lista.viaggi.includes(v.slug))

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: 'Home', percorso: '/' },
          { nome: t.cosa, percorso: '/attrezzatura' },
          { nome: lista.titolo, percorso: `/attrezzatura/${lista.slug}` },
        ], lingua)}
      />
      <PageHeader
        crumbs={[
          { label: 'Home', href: '/' },
          { label: t.cosa, href: '/attrezzatura' },
          { label: lista.titolo },
        ]}
        eyebrow={t.cosa}
        title={lista.titolo}
        titleNote={lista.sottotitolo}
        lead={<p>{lista.intro}</p>}
        meta={
          <p className="text-sm leading-relaxed text-stone">
            {t.affiliati}{' '}
            <Link href="/trasparenza" className="font-semibold text-ink underline underline-offset-2 hover:text-rosso">
              {t.comeFunziona}
            </Link>
          </p>
        }
      />

      <section className="sezione">
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
                          href={link.amazon(voce.ricerca, lingua)}
                          target="_blank"
                          rel={relAffiliato}
                          className="group flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
                        >
                          <span>
                            <span className="block font-semibold text-ink group-hover:text-rosso">{voce.nome}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-stone">{voce.perche}</span>
                          </span>
                          <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-none border-2 border-ink px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink transition-colors duration-150 group-hover:bg-ink group-hover:text-cream">
                            {t.apri}
                            <ArrowUpRight size={14} aria-hidden="true" />
                            <span className="sr-only">{t.nuovaScheda}</span>
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
                    {viaggi.length === 1 ? t.unViaggio : t.piuViaggi}
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
                    {t.tutte}
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
