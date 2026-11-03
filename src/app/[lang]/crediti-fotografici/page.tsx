import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { pageMetadata } from '@/lib/seo'
import { linguaCorrente } from '@/lib/i18n/server'
import { LOCALE, type Lingua } from '@/lib/i18n/config'
import { creditiCopertine, type CreditoImmagine } from '@/content/viaggi-copertine-crediti'
import { creditiGiornoFoto } from '@/content/viaggi-giorno-foto-crediti'
import { creditiHeroVideo } from '@/content/viaggi-hero-video-crediti'
import { creditiMeraviglie } from '@/content/meraviglie-foto-crediti'
import { creditiHeroVideoMeraviglie } from '@/content/meraviglie-hero-video-crediti'
import { creditiDestinazioni } from '@/content/destinazioni-foto-crediti'

const T = {
  it: {
    titolo: 'Crediti fotografici',
    desc: 'Autori e licenze delle foto e dei video di repertorio usati sul sito.',
    lead: 'Le foto dei viaggi sono nostre. Dove abbiamo usato immagini o video di repertorio, ecco autori e licenze, con il link alla fonte originale.',
  },
  en: {
    titolo: 'Photo credits',
    desc: 'Authors and licenses of the stock photos and videos used on the site.',
    lead: 'The trip photos are ours. Where we used stock images or videos, here are the authors and licenses, with a link to the original source.',
  },
  es: {
    titolo: 'Créditos fotográficos',
    desc: 'Autores y licencias de las fotos y los vídeos de archivo usados en el sitio.',
    lead: 'Las fotos de los viajes son nuestras. Donde hemos usado imágenes o vídeos de archivo, aquí están los autores y las licencias, con el enlace a la fuente original.',
  },
} satisfies Record<Lingua, Record<string, string>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return {
    ...pageMetadata({ title: t.titolo, description: t.desc, path: '/crediti-fotografici', lingua }),
    robots: { index: false, follow: true },
  }
}

/**
 * Le didascalie sotto le foto sono state tolte dalle pagine: i crediti
 * richiesti dalle licenze (CC BY, CC BY-SA…) restano raccolti qui, uno per
 * file, con il link alla fonte. Linkata dal footer di ogni pagina.
 */
export default async function CreditiFotograficiPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const voci = new Map<string, CreditoImmagine>()
  const aggiungi = (c: CreditoImmagine) => voci.set(c.fonteUrl, c)
  Object.values(creditiCopertine).forEach(aggiungi)
  Object.values(creditiGiornoFoto).forEach((giorni) => Object.values(giorni).forEach(aggiungi))
  Object.values(creditiHeroVideo).forEach(aggiungi)
  Object.values(creditiMeraviglie).forEach(aggiungi)
  Object.values(creditiHeroVideoMeraviglie).forEach(aggiungi)
  Object.values(creditiDestinazioni).forEach(aggiungi)
  const elenco = [...voci.values()].sort((a, b) => a.autore.localeCompare(b.autore, LOCALE[lingua].html))

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: t.titolo }]}
        title={t.titolo}
        lead={<p>{t.lead}</p>}
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
