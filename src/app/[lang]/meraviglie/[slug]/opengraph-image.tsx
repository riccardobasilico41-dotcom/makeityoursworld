import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllMeraviglie, getMeraviglia } from '@/lib/meraviglie'
import { isLingua, type Lingua } from '@/lib/i18n/config'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Guida a una meraviglia del mondo di Make It Yours World'

const T = {
  it: { meraviglia: 'Meraviglia del mondo', meraviglie: 'Meraviglie del mondo' },
  en: { meraviglia: 'Wonder of the world', meraviglie: 'Wonders of the world' },
  es: { meraviglia: 'Maravilla del mundo', meraviglie: 'Maravillas del mundo' },
} satisfies Record<Lingua, Record<string, string>>

export function generateStaticParams() {
  return getAllMeraviglie('en').map((m) => ({ slug: m.slug }))
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const lingua = isLingua(lang) ? lang : 'en'
  const t = T[lingua]
  const meraviglia = getMeraviglia(slug, lingua)

  return ogImage({
    lingua,
    eyebrow: meraviglia ? `${meraviglia.paese} · ${t.meraviglia}` : t.meraviglie,
    titolo: ogTesto(meraviglia?.nome ?? t.meraviglia, 90),
    immagine: meraviglia?.heroImage,
  })
}
