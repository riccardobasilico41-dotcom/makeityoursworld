import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getEsperienza, getPaese } from '@/lib/geo'
import { isLingua, type Lingua } from '@/lib/i18n/config'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Scheda esperienza di Make It Yours World'

const T = {
  it: { esperienza: 'Esperienza' },
  en: { esperienza: 'Experience' },
  es: { esperienza: 'Experiencia' },
} satisfies Record<Lingua, Record<string, string>>

/*
 * Oltre 300 schede: generarle tutte al build allungherebbe il build di vari
 * minuti (circa 1-3 s l'una). Lista vuota = nessuna al build, ciascuna nasce
 * alla prima richiesta e resta in cache (stesso meccanismo dell'ISR).
 */
export function generateStaticParams() {
  return []
}

export default async function Image({ params }: { params: Promise<{ lang: string; paese: string; slug: string }> }) {
  const { lang, paese: paeseSlug, slug } = await params
  const lingua = isLingua(lang) ? lang : 'en'
  const t = T[lingua]
  const esperienza = getEsperienza(paeseSlug, slug, lingua)
  const paese = getPaese(paeseSlug, lingua)

  return ogImage({
    lingua,
    eyebrow: paese?.nome ?? t.esperienza,
    titolo: ogTesto(esperienza?.nome ?? t.esperienza, 90),
    immagine: esperienza?.immagine,
  })
}
