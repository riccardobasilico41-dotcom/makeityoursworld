import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { MeravigliaCard } from '@/components/MeravigliaCard'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { siteConfig } from '@/lib/site-config'
import { pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { raccoltaJsonLd } from '@/lib/structured-data'
import { linguaCorrente } from '@/lib/i18n/server'
import type { Lingua } from '@/lib/i18n/config'

const T = {
  it: {
    titolo: 'Le sette meraviglie del mondo',
    descrizioneSeo: (brand: string) =>
      `Guida pratica completa alle Sette Meraviglie del Mondo Moderno su ${brand}: prenotazione, prezzi, come arrivare, truffe da evitare e cosa vedere in ognuna.`,
    descrizioneRaccolta: 'Guida pratica completa alle Sette Meraviglie del Mondo Moderno.',
    home: 'Home',
    crumb: 'Meraviglie del mondo',
    eyebrow: 'Le sette meraviglie moderne',
    lead: 'Una guida pratica, monumento per monumento: come prenotare, come arrivare, prezzi e combo, tour organizzato o in autonomia, le truffe più comuni da evitare e le sezioni da non perdere.',
    schede: 'Le sette schede',
  },
  en: {
    titolo: 'The seven wonders of the world',
    descrizioneSeo: (brand: string) =>
      `A complete practical guide to the Seven Wonders of the Modern World on ${brand}: booking, prices, how to get there, scams to avoid and what to see at each one.`,
    descrizioneRaccolta: 'A complete practical guide to the Seven Wonders of the Modern World.',
    home: 'Home',
    crumb: 'Wonders of the world',
    eyebrow: 'The seven modern wonders',
    lead: 'A practical guide, monument by monument: how to book, how to get there, prices and combo tickets, guided tour or on your own, the most common scams to avoid and the parts you should not miss.',
    schede: 'The seven guides',
  },
  es: {
    titolo: 'Las siete maravillas del mundo',
    descrizioneSeo: (brand: string) =>
      `Guía práctica completa de las Siete Maravillas del Mundo Moderno en ${brand}: reserva, precios, cómo llegar, estafas que evitar y qué ver en cada una.`,
    descrizioneRaccolta: 'Guía práctica completa de las Siete Maravillas del Mundo Moderno.',
    home: 'Inicio',
    crumb: 'Maravillas del mundo',
    eyebrow: 'Las siete maravillas modernas',
    lead: 'Una guía práctica, monumento por monumento: cómo reservar, cómo llegar, precios y entradas combinadas, tour organizado o por tu cuenta, las estafas más comunes que evitar y las partes que no te puedes perder.',
    schede: 'Las siete guías',
  },
} satisfies Record<Lingua, Record<string, string | ((brand: string) => string)>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return pageMetadata({
    lingua,
    title: t.titolo,
    description: t.descrizioneSeo(siteConfig.brandName),
    path: '/meraviglie',
  })
}

export default async function MeraviglieIndexPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const meraviglie = getAllMeraviglie(lingua)

  return (
    <>
      <JsonLd
        data={raccoltaJsonLd(
          {
            nome: t.titolo,
            descrizione: t.descrizioneRaccolta,
            percorso: '/meraviglie',
            elementi: meraviglie.map((m) => ({ nome: m.nome, percorso: `/meraviglie/${m.slug}` })),
          },
          lingua,
        )}
      />
      <PageHeader
        crumbs={[{ label: t.home, href: '/' }, { label: t.crumb }]}
        eyebrow={t.eyebrow}
        title={t.titolo}
        lead={<p>{t.lead}</p>}
      />
      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="sr-only">{t.schede}</h2>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {meraviglie.map((meraviglia, i) => (
              <RevealItem key={meraviglia.slug}>
                <MeravigliaCard meraviglia={meraviglia} subito={i === 0} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  )
}
