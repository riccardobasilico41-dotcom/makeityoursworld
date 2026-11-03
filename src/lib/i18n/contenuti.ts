import type { Lingua } from './config'
import * as EN from '@/content/i18n/en/indice'
import * as ES from '@/content/i18n/es/indice'
import { editorialViaggi, type EditorialMeta } from '@/content/viaggi-editorial'
import { seoPaesi, seoMeraviglie, type SeoPagina } from '@/content/seo-pagine'
import { copertineViaggi, type CopertinaViaggio } from '@/content/viaggi-copertine'
import { listeAttrezzatura, type ListaAttrezzatura } from '@/content/attrezzatura'

/*
 * Versioni tradotte dei contenuti «piccoli» (testi SEO, titoli editoriali, alt delle
 * copertine, liste della valigia). Se la traduzione manca, resta l'italiano.
 */

const tr = (l: Lingua) => (l === 'en' ? EN : l === 'es' ? ES : null)

export function editoriale(slug: string, lingua: Lingua): EditorialMeta {
  return tr(lingua)?.editorialViaggi?.[slug] ?? editorialViaggi[slug] ?? {}
}

export function seoPaese(slug: string, lingua: Lingua): SeoPagina | undefined {
  return tr(lingua)?.seoPaesi?.[slug] ?? seoPaesi[slug]
}

export function seoMeraviglia(slug: string, lingua: Lingua): SeoPagina | undefined {
  return tr(lingua)?.seoMeraviglie?.[slug] ?? seoMeraviglie[slug]
}

/** Copertina del viaggio: immagine dall'italiano, testo alternativo tradotto. */
export function copertina(slug: string, lingua: Lingua): CopertinaViaggio | undefined {
  const it = copertineViaggi[slug]
  const t = tr(lingua)?.copertineViaggi?.[slug]
  return it && t ? { ...it, ...t, immagine: it.immagine } : it
}

export function copertine(lingua: Lingua): Record<string, CopertinaViaggio> {
  if (lingua === 'it') return copertineViaggi
  return Object.fromEntries(Object.keys(copertineViaggi).map((k) => [k, copertina(k, lingua)!]))
}

const liste: Partial<Record<Lingua, ListaAttrezzatura[]>> = { it: listeAttrezzatura }
export function listeValigia(lingua: Lingua): ListaAttrezzatura[] {
  if (liste[lingua]) return liste[lingua]!
  const t = new Map((tr(lingua)?.listeAttrezzatura ?? []).map((l) => [l.slug, l]))
  liste[lingua] = listeAttrezzatura.map((l) => (t.has(l.slug) ? { ...l, ...t.get(l.slug)!, slug: l.slug, viaggi: l.viaggi } : l))
  return liste[lingua]!
}
export const listaPerViaggio = (slug: string, lingua: Lingua) => listeValigia(lingua).find((l) => l.viaggi.includes(slug))
export const getListaAttrezzatura = (slug: string, lingua: Lingua) => listeValigia(lingua).find((l) => l.slug === slug)
