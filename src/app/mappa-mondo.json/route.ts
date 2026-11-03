import { datiMappaMondo } from '@/lib/mappa-mondo'

// Terre e punti della mappa del mondo: generati al build e scaricati dal client solo
// quando la mappa entra nello schermo, così non pesano sull'HTML della home.
export const dynamic = 'force-static'

export function GET() {
  return Response.json(datiMappaMondo())
}
