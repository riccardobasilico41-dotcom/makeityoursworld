import type { Metadata } from 'next'
import Link from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo'
import { listeValigia } from '@/lib/i18n/contenuti'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Cosa mettere in valigia: le liste per viaggio',
    desc: 'Liste pronte per la valigia: Islanda in tenda, inverno artico, snorkeling, Ande, rifugi alpini, settimana bianca, weekend in città e zaino ai tropici.',
    cosa: 'Cosa mettere in valigia',
    eyebrow: 'Liste per la valigia',
    lead: 'Una lista per ogni tipo di viaggio, costruita sui consigli pratici degli itinerari: le stesse cose che abbiamo usato davvero, divise per sezione e con il link per trovarle.',
    sezioniVoci: (s: number, v: number) => `${s} sezioni · ${v} voci`,
    apri: 'Apri la lista',
  },
  en: {
    titolo: 'What to Pack: Checklists by Trip',
    desc: 'Ready-made packing lists: Iceland by tent, Arctic winter, snorkeling, the Andes, Alpine huts, a ski week, a city weekend and a tropical backpack.',
    cosa: 'What to pack',
    eyebrow: 'Packing lists',
    lead: 'A list for every kind of trip, built from the practical tips in the itineraries: the same things we actually used, split by section and with a link to find them.',
    sezioniVoci: (s: number, v: number) => `${s} sections · ${v} items`,
    apri: 'Open the list',
  },
  es: {
    titolo: 'Qué meter en la maleta: listas por viaje',
    desc: 'Listas listas para la maleta: Islandia en tienda, invierno ártico, snorkel, los Andes, refugios alpinos, semana de esquí, fin de semana en la ciudad y mochila para los trópicos.',
    cosa: 'Qué meter en la maleta',
    eyebrow: 'Listas para la maleta',
    lead: 'Una lista para cada tipo de viaje, construida a partir de los consejos prácticos de los itinerarios: las mismas cosas que usamos de verdad, divididas por sección y con el enlace para encontrarlas.',
    sezioniVoci: (s: number, v: number) => `${s} secciones · ${v} artículos`,
    apri: 'Abrir la lista',
  },
} satisfies Record<Lingua, Record<string, string | ((a: number, b: number) => string)>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({ title: t.titolo, description: t.desc, path: '/attrezzatura', lingua })
}

export default async function AttrezzaturaIndexPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: 'Home', percorso: '/' },
          { nome: t.cosa, percorso: '/attrezzatura' },
        ], lingua)}
      />
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: t.cosa }]}
        eyebrow={t.eyebrow}
        title={t.cosa}
        lead={<p>{t.lead}</p>}
      />
      <section className="sezione">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {listeValigia(lingua).map((lista) => {
              const voci = lista.sezioni.reduce((n, s) => n + s.voci.length, 0)
              return (
                <li key={lista.slug}>
                  <Link
                    href={`/attrezzatura/${lista.slug}`}
                    className="group flex h-full flex-col rounded-none border-2 border-ink bg-white p-6 transition-colors duration-150 hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rosso">
                      {t.sezioniVoci(lista.sezioni.length, voci)}
                    </p>
                    <h2 className="mt-3 font-display text-2xl leading-tight text-ink">{lista.titolo}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{lista.sottotitolo}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink group-hover:text-rosso">
                      {t.apri}
                      <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>
    </>
  )
}
