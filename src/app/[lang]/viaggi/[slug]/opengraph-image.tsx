import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllViaggi, getViaggioBySlug } from '@/lib/viaggi'
import { getPaese, getTripMeta } from '@/lib/geo'
import { getContinente } from '@/lib/utils'
import { copertina, editoriale } from '@/lib/i18n/contenuti'
import { isLingua, type Lingua } from '@/lib/i18n/config'
import { etichetta } from '@/lib/i18n/etichette'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Itinerario di viaggio di Rick su Make It Yours World'

export function generateStaticParams() {
  // gli slug dei viaggi sono uguali in ogni lingua
  return getAllViaggi('en').map((v) => ({ slug: v.slug }))
}

const T = {
  it: { itinerario: 'Itinerario', itinerarioViaggio: 'Itinerario di viaggio' },
  en: { itinerario: 'Itinerary', itinerarioViaggio: 'Travel itinerary' },
  es: { itinerario: 'Itinerario', itinerarioViaggio: 'Itinerario de viaje' },
} satisfies Record<Lingua, Record<string, string>>

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const lingua: Lingua = isLingua(lang) ? lang : 'en'
  const t = T[lingua]
  const viaggio = getViaggioBySlug(slug, lingua)
  const ed = editoriale(slug, lingua)
  const meta = getTripMeta(slug, lingua)
  const paese = meta ? getPaese(meta.paeseSlug, lingua) : undefined

  return ogImage({
    eyebrow: paese?.nome ?? (viaggio ? etichetta(getContinente(viaggio.categorie), lingua) : t.itinerario),
    titolo: ogTesto(ed.seoTitle ?? ed.socialTitle ?? viaggio?.titolo ?? t.itinerarioViaggio, 90),
    immagine: copertina(slug, lingua)?.immagine,
    lingua,
  })
}
