import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getEsperienza, getPaese } from '@/lib/geo'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Scheda esperienza di Make It Yours World'

/*
 * Oltre 300 schede: generarle tutte al build allungherebbe il build di vari
 * minuti (circa 1-3 s l'una). Lista vuota = nessuna al build, ciascuna nasce
 * alla prima richiesta e resta in cache (stesso meccanismo dell'ISR).
 */
export function generateStaticParams() {
  return []
}

export default async function Image({ params }: { params: Promise<{ paese: string; slug: string }> }) {
  const { paese: paeseSlug, slug } = await params
  const esperienza = getEsperienza(paeseSlug, slug)
  const paese = getPaese(paeseSlug)

  return ogImage({
    eyebrow: paese?.nome ?? 'Esperienza',
    titolo: ogTesto(esperienza?.nome ?? 'Esperienza', 90),
    immagine: esperienza?.immagine,
  })
}
