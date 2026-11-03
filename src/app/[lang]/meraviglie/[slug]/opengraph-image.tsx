import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllMeraviglie, getMeraviglia } from '@/lib/meraviglie'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Guida a una meraviglia del mondo di Make It Yours World'

export function generateStaticParams() {
  return getAllMeraviglie().map((m) => ({ slug: m.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meraviglia = getMeraviglia(slug)

  return ogImage({
    eyebrow: meraviglia ? `${meraviglia.paese} · Meraviglia del mondo` : 'Meraviglie del mondo',
    titolo: ogTesto(meraviglia?.nome ?? 'Meraviglia del mondo', 90),
    immagine: meraviglia?.heroImage,
  })
}
