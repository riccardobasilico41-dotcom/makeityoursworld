import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { siteConfig } from '@/lib/site-config'
import { isLingua } from '@/lib/i18n/config'
import { SITO } from '@/lib/i18n/sito'
import type { Lingua } from '@/lib/i18n/config'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = `${siteConfig.brandName} — ${SITO.en.tagline}`

const T = {
  it: { eyebrow: 'Diario di viaggio', titolo: 'Itinerari giorno per giorno, un continente alla volta' },
  en: { eyebrow: 'Travel journal', titolo: 'Day-by-day itineraries, one continent at a time' },
  es: { eyebrow: 'Diario de viaje', titolo: 'Itinerarios día a día, un continente cada vez' },
} satisfies Record<Lingua, Record<string, string>>

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const lingua = isLingua(lang) ? lang : 'en'
  return ogImage({
    eyebrow: T[lingua].eyebrow,
    titolo: T[lingua].titolo,
    lingua,
  })
}
