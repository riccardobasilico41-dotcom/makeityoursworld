import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllViaggi, getViaggioBySlug } from '@/lib/viaggi'
import { getPaese, getTripMeta } from '@/lib/geo'
import { getContinente } from '@/lib/utils'
import { copertineViaggi } from '@/content/viaggi-copertine'
import { getEditorialMeta } from '@/content/viaggi-editorial'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Itinerario di viaggio di Rick su Make It Yours World'

export function generateStaticParams() {
  return getAllViaggi().map((v) => ({ slug: v.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const viaggio = getViaggioBySlug(slug)
  const editoriale = getEditorialMeta(slug)
  const meta = getTripMeta(slug)
  const paese = meta ? getPaese(meta.paeseSlug) : undefined

  return ogImage({
    eyebrow: paese?.nome ?? (viaggio ? getContinente(viaggio.categorie) : 'Itinerario'),
    titolo: ogTesto(editoriale.seoTitle ?? editoriale.socialTitle ?? viaggio?.titolo ?? 'Itinerario di viaggio', 90),
    immagine: copertineViaggi[slug]?.immagine,
  })
}
