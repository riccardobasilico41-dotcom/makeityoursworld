import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Prose } from '@/components/Prose'
import { FirmaBreve } from '@/components/FirmaAutore'
import { ProssimaScheda } from '@/components/ProssimaScheda'
import { riduciPerScheda } from '@/components/TripCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { pageMetadata, titoloSeoViaggio } from '@/lib/seo'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { copertina } from '@/lib/i18n/contenuti'
import { getViaggioBySlug } from '@/lib/viaggi'
import { getAllConsigli, getConsiglio } from '@/lib/consigli'
import { localizza } from '@/lib/i18n/percorsi'
import { siteConfig } from '@/lib/site-config'

const T = {
  it: { home: 'Home', consigli: 'Consigli di viaggio', aggiornato: 'Aggiornato il', viaggi: 'I viaggi da cui nasce questo articolo' },
  en: { home: 'Home', consigli: 'Travel tips', aggiornato: 'Updated on', viaggi: 'The trips behind this article' },
  es: { home: 'Inicio', consigli: 'Consejos de viaje', aggiornato: 'Actualizado el', viaggi: 'Los viajes de los que nace este artículo' },
} satisfies Record<Lingua, Record<string, string>>

export function generateStaticParams() {
  return getAllConsigli().map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const c = getConsiglio(slug)
  if (!c) return {}
  const testo = c.testi[lingua]
  return pageMetadata({
    title: testo.titoloSeo ?? titoloSeoViaggio(testo.titolo),
    description: testo.descrizione,
    path: `/consigli/${c.slug}`,
    type: 'article',
    lingua,
  })
}

export default async function ConsiglioPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { slug } = await params
  const lingua = await linguaCorrente()
  const c = getConsiglio(slug)
  if (!c) notFound()
  const t = T[lingua]
  const testo = c.testi[lingua]
  const data = new Date(`${c.aggiornato}T12:00:00Z`).toLocaleDateString(LOCALE[lingua].html, { day: 'numeric', month: 'long', year: 'numeric' })
  const viaggi = c.viaggi
    .map((s) => getViaggioBySlug(s, lingua))
    .filter((v): v is NonNullable<typeof v> => Boolean(v))
    .map((v) => ({ ...riduciPerScheda(v), copertina: copertina(v.slug, lingua) }))

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: testo.titolo,
            description: testo.descrizione,
            inLanguage: LOCALE[lingua].html,
            dateModified: c.aggiornato,
            image: `${siteConfig.url}${c.immagine}`,
            mainEntityOfPage: `${siteConfig.url}${localizza(`/consigli/${c.slug}`, lingua)}`,
            author: { '@type': 'Person', name: 'Rick' },
          },
          breadcrumbJsonLd(
            [
              { nome: t.home, percorso: '/' },
              { nome: t.consigli, percorso: '/consigli' },
              { nome: testo.titolo, percorso: `/consigli/${c.slug}` },
            ],
            lingua,
          ),
        ]}
      />
      <PageHeader
        crumbs={[{ label: t.home, href: '/' }, { label: t.consigli, href: '/consigli' }, { label: testo.titolo }]}
        eyebrow={t.consigli}
        title={testo.titolo}
        lead={
          <>
            <p>{testo.lead}</p>
            <FirmaBreve />
          </>
        }
        meta={<p className="text-sm text-stone">{t.aggiornato} {data}</p>}
        media={{ tipo: 'foto', src: c.immagine, alt: c.imageAlt[lingua] }}
      />
      <section className="sezione">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Prose>{testo.corpo}</Prose>
          </div>
          {viaggi.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl text-ink">{t.viaggi}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {viaggi.map((v) => (
                  <ProssimaScheda key={v.slug} viaggio={v} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
