import { datiMappaMondo } from '@/lib/mappa-mondo'
import { isLingua, LINGUE } from '@/lib/i18n/config'

// Terre e punti della mappa del mondo: generati al build e scaricati dal client solo
// quando la mappa entra nello schermo, così non pesano sull'HTML della home.
export const dynamic = 'force-static'

export function generateStaticParams() {
  return LINGUE.map((lang) => ({ lang }))
}

export async function GET(_req: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return Response.json(datiMappaMondo(isLingua(lang) ? lang : 'en'))
}
