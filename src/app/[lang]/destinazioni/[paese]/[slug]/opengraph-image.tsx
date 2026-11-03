import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getDestinazione, getPaese } from '@/lib/geo'
import { isLingua } from '@/lib/i18n/config'
import type { Lingua } from '@/lib/i18n/config'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Scheda destinazione di Make It Yours World'

/*
 * Oltre 300 schede: generarle tutte al build allungherebbe il build di vari
 * minuti (circa 1-3 s l'una). Lista vuota = nessuna al build, ciascuna nasce
 * alla prima richiesta e resta in cache (stesso meccanismo dell'ISR).
 */
export function generateStaticParams() {
  return []
}

const ETICHETTA: Record<Lingua, string> = { it: 'Destinazione', en: 'Destination', es: 'Destino' }

export default async function Image({ params }: { params: Promise<{ lang: string; paese: string; slug: string }> }) {
  const { lang, paese: paeseSlug, slug } = await params
  const lingua: Lingua = isLingua(lang) ? lang : 'en'
  const destinazione = getDestinazione(paeseSlug, slug, lingua)
  const paese = getPaese(paeseSlug, lingua)

  return ogImage({
    lingua,
    eyebrow: paese?.nome ?? ETICHETTA[lingua],
    titolo: ogTesto(destinazione?.nome ?? ETICHETTA[lingua], 90),
    immagine: destinazione?.immagine,
  })
}
