import { AREE } from './aree'
import { getAllPaesi, getPaese, getTripMeta } from './geo'
import { getAllViaggi, getViaggioBySlug, type Viaggio } from './viaggi'
import type { Lingua } from './i18n/config'
import { giorniDaDurata, normalizza, stiliDaCategorie, type OpzionePaese } from './viaggi-filtri-stato'

/*
 * Filtri dell'archivio /viaggi, lato server: Paesi e aree di ogni viaggio. La parte che
 * serve anche al browser (stato dell'URL, fasce, stili, filtro) è in viaggi-filtri-stato.ts.
 */

/**
 * Viaggi che toccano più di un Paese. Il primo è il `paeseSlug` del TripMeta, gli altri
 * vengono dalla Categoria del markdown, confermati dalle destinazioni collegate alle tappe.
 * Il Borneo del viaggio è quello malese (Sabah e Sarawak), per questo compare anche Malesia.
 */
export const PAESI_MULTI: Record<string, string[]> = {
  'centro-america-itinerario': ['guatemala', 'belize', 'panama'],
  'malesia-singapore': ['malesia', 'singapore'],
  'stopover-golfo': ['emirati-arabi-uniti', 'qatar', 'arabia-saudita'],
  'capitali-nordiche': ['danimarca', 'svezia', 'norvegia'],
  'capitali-baltiche': ['lituania', 'lettonia', 'estonia'],
  'borneo-itinerario': ['borneo', 'malesia'],
}

/** Slug dei Paesi toccati da un viaggio (src/content/paesi), il principale per primo. */
export function paesiDelViaggio(slug: string): string[] {
  const multi = PAESI_MULTI[slug]
  if (multi) return multi
  const principale = getTripMeta(slug, 'it')?.paeseSlug
  return principale ? [principale] : []
}

/** Area (src/lib/aree.ts) di un Paese, dal suo `continente`. */
export function areaDelPaese(paeseSlug: string): string | null {
  const p = getPaese(paeseSlug, 'it')
  return p ? (AREE.find((a) => a.continenti.includes(p.continente))?.slug ?? null) : null
}

export function areeDelViaggio(slug: string): string[] {
  const aree = paesiDelViaggio(slug)
    .map(areaDelPaese)
    .filter((a): a is string => Boolean(a))
  return [...new Set(aree)]
}

/** Quanti viaggi dell'archivio toccano un Paese: lo stesso conteggio del filtro ?paese=. */
export function contaViaggiNelPaese(paeseSlug: string): number {
  return getAllViaggi('it').filter((v) => paesiDelViaggio(v.slug).includes(paeseSlug)).length
}

/** Quanti viaggi dell'archivio stanno in un'area: lo stesso conteggio del filtro ?area=. */
export function contaViaggiNellArea(areaSlug: string): number {
  return getAllViaggi('it').filter((v) => areeDelViaggio(v.slug).includes(areaSlug)).length
}

/**
 * Campi per i filtri di un viaggio. Giorni e stili si leggono dal markdown italiano (le
 * categorie e i tag italiani sono le chiavi degli stili), i testi della ricerca dalla lingua.
 */
export function datiFiltroViaggio(v: Viaggio, lingua: Lingua) {
  const it = lingua === 'it' ? v : (getViaggioBySlug(v.slug, 'it') ?? v)
  const paesi = paesiDelViaggio(v.slug)
  const nomiPaesi = paesi.map((p) => getPaese(p, lingua)?.nome).filter((n): n is string => Boolean(n))
  const tappe = getTripMeta(v.slug, lingua)?.tappeMappa.map((t) => t.nome) ?? []
  return {
    paesi,
    aree: areeDelViaggio(v.slug),
    giorni: giorniDaDurata(it.durata),
    stili: stiliDaCategorie(it.categorie, it.tags),
    ricerca: normalizza([v.titolo, v.descrizione, ...nomiPaesi, ...tappe].join(' ')),
    luogo: nomiPaesi.length ? nomiPaesi.join(' · ') : undefined,
  }
}

/** Paesi con almeno un viaggio, in ordine alfabetico nella lingua, per il filtro. */
export function opzioniPaesi(lingua: Lingua): OpzionePaese[] {
  const conViaggi = new Set(getAllViaggi('it').flatMap((v) => paesiDelViaggio(v.slug)))
  return getAllPaesi(lingua)
    .filter((p) => conViaggi.has(p.slug))
    .map((p) => ({ slug: p.slug, nome: p.nome, area: areaDelPaese(p.slug) }))
    .sort((a, b) => a.nome.localeCompare(b.nome, lingua))
}
