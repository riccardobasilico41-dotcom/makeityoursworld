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
import { creditiAltreFoto } from '@/content/altre-foto-crediti'

type Gruppo = 'giorni' | 'copertine' | 'schede' | 'video'

const T = {
  it: {
    titolo: 'Crediti fotografici',
    desc: 'Autori, opere e licenze delle foto e dei video di repertorio usati sul sito, con il link alla fonte originale.',
    lead: 'La maggior parte delle foto sono mie. Delle volte, quando non è possibile o quando quelle che ho fatto anni fa sono venute male, uso foto di altri, con il loro permesso e citandoli correttamente: qui trovi per ciascuna opera, autore e licenza, con il link alla fonte originale.',
    totale: (n: number) => `${n} file di repertorio.`,
    gruppi: {
      giorni: 'Foto dei viaggi giorno per giorno',
      copertine: 'Copertine dei viaggi',
      schede: 'Destinazioni, esperienze, meraviglie e altre pagine',
      video: 'Video',
    } as Record<Gruppo, string>,
    di: 'di',
  },
  en: {
    titolo: 'Photo credits',
    desc: 'Authors, works and licenses of the stock photos and videos used on the site, with a link to the original source.',
    lead: 'Most of the photos are mine. Sometimes, when that isn’t possible or when the ones I took years ago came out badly, I use other people’s photos, with their permission and crediting them properly: here you find the work, author and license for each, with a link to the original source.',
    totale: (n: number) => `${n} stock files.`,
    gruppi: {
      giorni: 'Day-by-day trip photos',
      copertine: 'Trip covers',
      schede: 'Destinations, experiences, wonders and other pages',
      video: 'Videos',
    } as Record<Gruppo, string>,
    di: 'by',
  },
  es: {
    titolo: 'Créditos fotográficos',
    desc: 'Autores, obras y licencias de las fotos y los vídeos de archivo usados en el sitio, con el enlace a la fuente original.',
    lead: 'La mayoría de las fotos son mías. A veces, cuando no es posible o cuando las que hice hace años salieron mal, uso fotos de otras personas, con su permiso y citándolas correctamente: aquí encuentras para cada una la obra, el autor y la licencia, con el enlace a la fuente original.',
    totale: (n: number) => `${n} archivos de repertorio.`,
    gruppi: {
      giorni: 'Fotos de los viajes día a día',
      copertine: 'Portadas de los viajes',
      schede: 'Destinos, experiencias, maravillas y otras páginas',
      video: 'Vídeos',
    } as Record<Gruppo, string>,
    di: 'de',
  },
} satisfies Record<Lingua, Record<string, unknown>>

export async function generateMetadata(): Promise<Metadata> {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  return {
    ...pageMetadata({ title: t.titolo, description: t.desc, path: '/crediti-fotografici', lingua }),
    robots: { index: false, follow: true },
  }
}

/** Nome leggibile dell'opera ricavato dalla fonte (Wikimedia «File:…», slug Unsplash/Pexels/Mixkit). */
function titoloOpera(url: string): string | null {
  try {
    const u = new URL(url)
    const parti = u.pathname.split('/').filter(Boolean)
    let nome = decodeURIComponent(parti.at(-1) ?? '')
    if (u.hostname === 'commons.wikimedia.org') nome = nome.replace(/^File:/, '').replace(/\.(jpe?g|png|webp|tiff?|gif)$/i, '')
    else if (u.hostname.endsWith('unsplash.com') && parti[0] === 'photos' && parti[1]) nome = decodeURIComponent(parti[1])
    nome = nome
      .replace(/_/g, ' ')
      .replace(/-(\d{5,}|(?=[A-Za-z0-9]*[0-9A-Z])[A-Za-z0-9]{11})$/, '') // id finale di Pexels/Unsplash (con cifre o maiuscole)
      .replace(/-/g, ' ')
      .trim()
    // id senza parole (es. «JE2UOjt6a08») o nomi di file da fotocamera: niente titolo
    if (!nome || !/[a-zà-ÿ]{3}/i.test(nome) || /^(img|dsc|pxl|photo)\s?\d+$/i.test(nome)) return null
    return nome.length > 90 ? `${nome.slice(0, 87)}…` : nome
  } catch {
    return null
  }
}

/**
 * Le didascalie sotto le foto sono state tolte dalle pagine: i crediti richiesti dalle licenze
 * (CC BY, CC BY-SA…) sono raccolti qui, uno per file (deduplicati per fonte), con opera, autore,
 * licenza e link alla fonte. Linkata dal footer e dalle pagine Come lavoro e Trasparenza.
 * Ogni voce ha autore, licenza e fonte (controllato il 6/11/2026: 0 voci incomplete su 1117).
 */
export default async function CreditiFotograficiPage() {
  const lingua = await linguaCorrente()
  const t = T[lingua]
  const visti = new Set<string>()
  const gruppi: Record<Gruppo, CreditoImmagine[]> = { giorni: [], copertine: [], schede: [], video: [] }
  const aggiungi = (g: Gruppo) => (c: CreditoImmagine) => {
    if (!c.autore?.trim() || !c.licenza?.trim() || !c.fonteUrl || visti.has(c.fonteUrl)) return
    visti.add(c.fonteUrl)
    gruppi[g].push(c)
  }
  Object.values(creditiGiornoFoto).forEach((giorni) => Object.values(giorni).forEach(aggiungi('giorni')))
  Object.values(creditiCopertine).forEach(aggiungi('copertine'))
  Object.values(creditiDestinazioni).forEach(aggiungi('schede'))
  Object.values(creditiMeraviglie).forEach(aggiungi('schede'))
  Object.values(creditiAltreFoto).forEach(aggiungi('schede'))
  Object.values(creditiHeroVideo).forEach(aggiungi('video'))
  Object.values(creditiHeroVideoMeraviglie).forEach(aggiungi('video'))
  const ordina = (a: CreditoImmagine, b: CreditoImmagine) => a.autore.localeCompare(b.autore, LOCALE[lingua].html)

  return (
    <>
      <PageHeader crumbs={[{ label: 'Home', href: '/' }, { label: t.titolo }]} title={t.titolo} lead={<p>{t.lead}</p>} />
      <section className="py-16">
        <Container>
          <p className="text-sm text-stone">{t.totale(visti.size)}</p>
          {(Object.keys(gruppi) as Gruppo[])
            .filter((g) => gruppi[g].length > 0)
            .map((g) => (
              <section key={g} aria-labelledby={`crediti-${g}`} className="mt-12">
                <h2 id={`crediti-${g}`} className="font-display text-2xl text-alpine">
                  {t.gruppi[g]} <span className="text-base text-stone">({gruppi[g].length})</span>
                </h2>
                <ul className="mt-4 columns-1 gap-10 text-sm leading-relaxed text-stone md:columns-2">
                  {gruppi[g].sort(ordina).map((c) => {
                    const opera = titoloOpera(c.fonteUrl)
                    return (
                      <li key={c.fonteUrl} className="break-inside-avoid py-1">
                        <a
                          href={c.fonteUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-ink underline-offset-2 hover:text-rosso hover:underline"
                        >
                          {opera ? `«${opera}»` : c.autore}
                        </a>
                        {opera && ` ${t.di} ${c.autore}`}, {c.licenza}
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
        </Container>
      </section>
    </>
  )
}
