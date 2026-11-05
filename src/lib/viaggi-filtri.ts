import { AREE } from './aree'
import { getAllDestinazioni, getAllPaesi, getDestinazione, getPaese, getTripMeta } from './geo'
import type { TripMeta } from './types'
import { getAllViaggi, getViaggioBySlug, type Viaggio } from './viaggi'
import type { Lingua } from './i18n/config'
import { giorniDaDurata, mesiDaPeriodo, normalizza, stiliDaCategorie, type OpzionePaese } from './viaggi-filtri-stato'

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
  'irlanda-due-irlande': ['irlanda', 'irlanda-del-nord'],
}

/** Slug dei Paesi toccati da un viaggio (src/content/paesi), il principale per primo. */
export function paesiDelViaggio(slug: string): string[] {
  const multi = PAESI_MULTI[slug]
  if (multi) return multi
  const principale = getTripMeta(slug, 'it')?.paeseSlug
  return principale ? [principale] : []
}

/**
 * Paese in cui sta una destinazione collegata a una tappa o a un giorno: prima nei Paesi
 * `preferiti` (quello del viaggio, poi gli altri di PAESI_MULTI), infine in tutti. Serve per
 * i viaggi multi-Paese, dove una tappa può stare in un Paese diverso da quello del viaggio
 * (irlanda-due-irlande, giorni in Irlanda del Nord). `null` se la destinazione non esiste:
 * meglio nessun link che un link rotto. Gli slug sono uguali in ogni lingua, si cerca in italiano.
 */
export function paeseDellaDestinazione(destSlug: string, preferiti: string[]): string | null {
  for (const p of preferiti) if (getDestinazione(p, destSlug, 'it')) return p
  return getAllDestinazioni('it').find((d) => d.slug === destSlug)?.paeseSlug ?? null
}

/**
 * Il TripMeta con il Paese giusto su ogni tappa e giorno che ha una destinazione
 * (`paeseSlug`, solo a schermo: i dati dei viaggi non cambiano). I componenti costruiscono
 * `/destinazioni/<paeseSlug>/<destinazioneSlug>` con questo Paese invece di quello del viaggio.
 */
export function conPaesiDelleDestinazioni(meta: TripMeta): TripMeta {
  const preferiti = [...new Set([meta.paeseSlug, ...paesiDelViaggio(meta.tripSlug)])]
  const paese = (d?: string) => (d ? { paeseSlug: paeseDellaDestinazione(d, preferiti) } : {})
  return {
    ...meta,
    tappeMappa: meta.tappeMappa.map((t) => ({ ...t, ...paese(t.destinazioneSlug) })),
    giorni: meta.giorni.map((g) => ({ ...g, ...paese(g.destinazioneSlug) })),
  }
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
 * Viaggi il cui periodo si legge come un mese preciso ma è la finestra scelta per
 * l'itinerario, non quella in cui è stato fatto: brasile spiega perché luglio-agosto
 * («quando le lagune… sono piene») e non ha ricordi personali; rotte-dei-vini ha il periodo
 * in grassetto come tutte le finestre consigliate («settembre-ottobre, in vendemmia»).
 * Restano senza mese finché l'autore non conferma; elenco completo in docs/ux/mesi-viaggi.md.
 */
const MESI_DA_CONFERMARE = new Set(['brasile-itinerario', 'rotte-dei-vini-itinerario'])

/** Mesi (1-12) in cui è stato fatto il viaggio, dal «Periodo del viaggio» italiano. Vuoto se non è certo. */
export function mesiDelViaggio(slug: string): number[] {
  if (MESI_DA_CONFERMARE.has(slug)) return []
  const v = getViaggioBySlug(slug, 'it')
  return v ? mesiDaPeriodo(v.periodo) : []
}

/** Viaggi fatti in un mese (1-12), nell'ordine dell'archivio. Per la home («Dove sono stato a luglio»). */
export function viaggiDelMese(mese: number, lingua: Lingua): Viaggio[] {
  return getAllViaggi(lingua).filter((v) => mesiDelViaggio(v.slug).includes(mese))
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
    mesi: mesiDelViaggio(v.slug),
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
