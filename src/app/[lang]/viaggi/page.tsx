import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { TripFilters } from '@/components/TripFilters'
import { riduciPerScheda } from '@/components/TripCard'
import { getAllViaggi } from '@/lib/viaggi'
import { siteConfig } from '@/lib/site-config'
import { pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { raccoltaJsonLd } from '@/lib/structured-data'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'
import { copertine } from '@/lib/i18n/contenuti'

const T = {
  it: {
    titolo: 'Tutti i viaggi',
    descMeta: (brand: string) => `Il catalogo completo degli itinerari di ${brand}: destinazioni, periodi e durate a colpo d'occhio.`,
    descJson: (brand: string) => `Il catalogo completo degli itinerari di ${brand}.`,
    home: 'Home',
    viaggi: 'Viaggi',
    eyebrow: "L'archivio completo",
    lead: (n: number) =>
      `${n} itinerari completi, giorno per giorno, divisi per macro-regione. Oppure esplora una singola destinazione o esperienza dalla pagina Paese.`,
  },
  en: {
    titolo: 'All trips',
    descMeta: (brand: string) => `The full catalog of ${brand} itineraries: destinations, seasons and trip lengths at a glance.`,
    descJson: (brand: string) => `The full catalog of ${brand} itineraries.`,
    home: 'Home',
    viaggi: 'Trips',
    eyebrow: 'The full archive',
    lead: (n: number) =>
      `${n} complete itineraries, day by day, grouped by region. Or explore a single destination or experience from the country page.`,
  },
  es: {
    titolo: 'Todos los viajes',
    descMeta: (brand: string) => `El catálogo completo de itinerarios de ${brand}: destinos, épocas y duraciones de un vistazo.`,
    descJson: (brand: string) => `El catálogo completo de itinerarios de ${brand}.`,
    home: 'Inicio',
    viaggi: 'Viajes',
    eyebrow: 'El archivo completo',
    lead: (n: number) =>
      `${n} itinerarios completos, día a día, agrupados por región. O explora un solo destino o experiencia desde la página del país.`,
  },
} satisfies Record<Lingua, Record<string, string | ((a: never) => string)>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({
    title: t.titolo,
    description: t.descMeta(siteConfig.brandName),
    path: '/viaggi',
    lingua,
  })
}

export default async function ViaggiIndexPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const viaggi = getAllViaggi(lingua)
  const copertineViaggi = copertine(lingua)

  return (
    <>
      <JsonLd
        data={raccoltaJsonLd(
          {
            nome: t.titolo,
            descrizione: t.descJson(siteConfig.brandName),
            percorso: '/viaggi',
            elementi: viaggi.map((v) => ({ nome: v.titolo, percorso: `/viaggi/${v.slug}` })),
          },
          lingua,
        )}
      />
      <PageHeader
        crumbs={[{ label: t.home, href: '/' }, { label: t.viaggi }]}
        eyebrow={t.eyebrow}
        title={t.titolo}
        lead={<p>{t.lead(viaggi.length)}</p>}
      />
      <section className="py-14 sm:py-20">
        <Container>
          <TripFilters viaggi={viaggi.map((v) => ({ ...riduciPerScheda(v), copertina: copertineViaggi[v.slug] }))} />
        </Container>
      </section>
    </>
  )
}
