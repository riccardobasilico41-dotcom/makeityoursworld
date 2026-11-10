import { getAllViaggi, getViaggioBySlug } from '@/lib/viaggi'
import { isLingua, LINGUE } from '@/lib/i18n/config'
import { kmlRotta, luoghiDellaRotta } from '@/lib/luoghi-rotta'

// Tappe del viaggio in KML, da importare in Google My Maps e ritrovare nell'app sul telefono.
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return LINGUE.flatMap((lang) => getAllViaggi('it').map((v) => ({ lang, slug: v.slug })))
}

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const lingua = isLingua(lang) ? lang : 'en'
  const luoghi = luoghiDellaRotta(slug, lingua)
  if (luoghi.length === 0) return new Response('Not found', { status: 404 })
  const titolo = getViaggioBySlug(slug, lingua)?.titolo ?? slug
  return new Response(kmlRotta(titolo, luoghi), {
    headers: {
      'Content-Type': 'application/vnd.google-earth.kml+xml; charset=utf-8',
      'Content-Disposition': `attachment; filename="${slug}.kml"`,
    },
  })
}
