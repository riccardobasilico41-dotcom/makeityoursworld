import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { pageMetadata } from '@/lib/seo'
import { listeAttrezzatura } from '@/content/attrezzatura'

export const metadata: Metadata = pageMetadata({
  title: 'Cosa mettere in valigia: le liste per viaggio',
  description:
    'Liste pronte per la valigia: Islanda in tenda, inverno artico, snorkeling, Ande, rifugi alpini, settimana bianca, weekend in città e zaino ai tropici.',
  path: '/attrezzatura',
})

export default function AttrezzaturaIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: 'Home', percorso: '/' },
          { nome: 'Cosa mettere in valigia', percorso: '/attrezzatura' },
        ])}
      />
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Cosa mettere in valigia' }]}
        eyebrow="Liste per la valigia"
        title="Cosa mettere in valigia"
        lead={
          <p>
            Una lista per ogni tipo di viaggio, costruita sui consigli pratici degli itinerari: le stesse cose che
            abbiamo usato davvero, divise per sezione e con il link per trovarle.
          </p>
        }
      />
      <section className="py-14 sm:py-20">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {listeAttrezzatura.map((lista) => {
              const voci = lista.sezioni.reduce((n, s) => n + s.voci.length, 0)
              return (
                <li key={lista.slug}>
                  <Link
                    href={`/attrezzatura/${lista.slug}`}
                    className="group flex h-full flex-col rounded-none border-2 border-ink bg-white p-6 transition-colors duration-150 hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rosso">
                      {lista.sezioni.length} sezioni · {voci} voci
                    </p>
                    <h2 className="mt-3 font-display text-2xl leading-tight text-ink">{lista.titolo}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{lista.sottotitolo}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink group-hover:text-rosso">
                      Apri la lista
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
