import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllPaesi, getPaese } from '@/lib/geo'
import { isLingua, type Lingua } from '@/lib/i18n/config'
import { etichetta } from '@/lib/i18n/etichette'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Guida di viaggio per Paese di Make It Yours World'

export function generateStaticParams() {
  // gli slug dei Paesi sono uguali in ogni lingua
  return getAllPaesi('en').map((p) => ({ paese: p.slug }))
}

const T = {
  it: { guida: 'Guida', guidaViaggio: 'Guida di viaggio', destinazione: 'Destinazione' },
  en: { guida: 'Guide', guidaViaggio: 'Travel guide', destinazione: 'Destination' },
  es: { guida: 'Guía', guidaViaggio: 'Guía de viaje', destinazione: 'Destino' },
} satisfies Record<Lingua, Record<string, string>>

export default async function Image({ params }: { params: Promise<{ lang: string; paese: string }> }) {
  const { lang, paese: paeseSlug } = await params
  const lingua: Lingua = isLingua(lang) ? lang : 'en'
  const t = T[lingua]
  const paese = getPaese(paeseSlug, lingua)

  return ogImage({
    lingua,
    eyebrow: paese ? `${t.guida} · ${etichetta(paese.continente, lingua)}` : t.guidaViaggio,
    titolo: paese?.nome ?? t.destinazione,
    immagine: paese?.heroImage,
  })
}
