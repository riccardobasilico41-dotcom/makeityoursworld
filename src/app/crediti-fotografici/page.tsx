import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { creditiCopertine, type CreditoImmagine } from '@/content/viaggi-copertine-crediti'
import { creditiGiornoFoto } from '@/content/viaggi-giorno-foto-crediti'
import { creditiHeroVideo } from '@/content/viaggi-hero-video-crediti'
import { creditiMeraviglie } from '@/content/meraviglie-foto-crediti'
import { creditiHeroVideoMeraviglie } from '@/content/meraviglie-hero-video-crediti'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Crediti fotografici',
    description: 'Autori e licenze delle foto e dei video di repertorio usati sul sito.',
    path: '/crediti-fotografici',
  }),
  robots: { index: false, follow: true },
}

/**
 * Le didascalie sotto le foto sono state tolte dalle pagine: i crediti
 * richiesti dalle licenze (CC BY, CC BY-SA…) restano raccolti qui, uno per
 * file, con il link alla fonte. Linkata dal footer di ogni pagina.
 */
export default function CreditiFotograficiPage() {
  const voci = new Map<string, CreditoImmagine>()
  const aggiungi = (c: CreditoImmagine) => voci.set(c.fonteUrl, c)
  Object.values(creditiCopertine).forEach(aggiungi)
  Object.values(creditiGiornoFoto).forEach((giorni) => Object.values(giorni).forEach(aggiungi))
  Object.values(creditiHeroVideo).forEach(aggiungi)
  Object.values(creditiMeraviglie).forEach(aggiungi)
  Object.values(creditiHeroVideoMeraviglie).forEach(aggiungi)
  const elenco = [...voci.values()].sort((a, b) => a.autore.localeCompare(b.autore, 'it'))

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Crediti fotografici' }]}
        title="Crediti fotografici"
        lead={
          <p>
            Le foto dei viaggi sono nostre. Dove abbiamo usato immagini o video di repertorio, ecco autori e licenze, con il
            link alla fonte originale.
          </p>
        }
      />
      <section className="py-16">
        <Container>
          <ul className="columns-1 gap-10 text-sm leading-relaxed text-stone md:columns-2">
            {elenco.map((c) => (
              <li key={c.fonteUrl} className="break-inside-avoid py-1">
                <a href={c.fonteUrl} rel="noopener noreferrer" target="_blank" className="text-ink underline-offset-2 hover:text-rosso hover:underline">
                  {c.autore}
                </a>
                , {c.licenza}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
