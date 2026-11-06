import { datiRotta } from '@/lib/mappa-rotta'
import { getAllViaggi } from '@/lib/viaggi'
import { isLingua, LINGUE } from '@/lib/i18n/config'

// Mappa «La rotta» di ogni viaggio (contorni, rilievi, tappe): generata al build e scaricata
// dal client solo quando la mappa si avvicina allo schermo, così non pesa sull'HTML della pagina.
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return LINGUE.flatMap((lang) => getAllViaggi('it').map((v) => ({ lang, slug: v.slug })))
}

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const dati = datiRotta(slug, isLingua(lang) ? lang : 'en')
  if (!dati) return Response.json(null, { status: 404 })
  return Response.json(dati)
}
