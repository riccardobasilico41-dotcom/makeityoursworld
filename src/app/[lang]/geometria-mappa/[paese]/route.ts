import { LINGUE } from '@/lib/i18n/config'
import { geometriaPaese, paesiConMappa } from '@/lib/mappa-geometria'

// Contorni delle mappe Paese: generati al build e scaricati dal client solo quando la mappa
// si avvicina allo schermo, così non pesano due volte (SVG + dati) sull'HTML della pagina.
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return LINGUE.flatMap((lang) => paesiConMappa().map((paese) => ({ lang, paese })))
}

export async function GET(_req: Request, { params }: { params: Promise<{ paese: string }> }) {
  const { paese } = await params
  const g = geometriaPaese(paese)
  if (!g) return new Response('Not found', { status: 404 })
  return Response.json(g)
}
