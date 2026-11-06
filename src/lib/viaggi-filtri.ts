import { AREE } from './aree'
import { getAllDestinazioni, getAllPaesi, getDestinazione, getPaese, getTripMeta } from './geo'
import type { TripMeta } from './types'
import { getAllViaggi, getViaggioBySlug, type Viaggio } from './viaggi'
import type { Lingua } from './i18n/config'
import { budgetBreve, giorniDaDurata, mesiDaPeriodo, normalizza, ordinaPaesi, stiliDaCategorie, type OpzionePaese } from './viaggi-filtri-stato'

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
 * Viaggi il cui «Periodo del viaggio» si leggerebbe come un mese ma non è quello in cui Rick è
 * partito. Dal 6/11/2026 il campo contiene solo il periodo reale (le stagioni consigliate sono
 * passate in «Quando andare» e in `mesiConsigliati`), quindi l'elenco è vuoto: resta come
 * valvola per i casi dubbi. Elenco completo in docs/ux/periodi-viaggi.md.
 */
const MESI_DA_CONFERMARE = new Set<string>([])

/** Mesi (1-12) in cui è stato fatto il viaggio, dal «Periodo del viaggio» italiano. Vuoto se non è certo. */
export function mesiDelViaggio(slug: string): number[] {
  if (MESI_DA_CONFERMARE.has(slug)) return []
  const v = getViaggioBySlug(slug, 'it')
  return v ? mesiDaPeriodo(v.periodo) : []
}

/**
 * Mesi (1-12) consigliati per fare il viaggio, per il Travel Finder («Quando andare»). Vengono da
 * `mesiConsigliati` del TripMeta, scritti a partire dal testo già pubblicato; vuoto se il testo
 * non dà mesi chiari. Da non confondere con `mesiDelViaggio`, i mesi in cui Rick c'è andato.
 */
export function mesiConsigliatiDelViaggio(slug: string): number[] {
  const mesi = getTripMeta(slug, 'it')?.mesiConsigliati ?? []
  return [...new Set(mesi.filter((m) => Number.isInteger(m) && m >= 1 && m <= 12))]
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
  const schede = paesi.map((p) => getPaese(p, lingua)).filter((p) => p !== undefined)
  const nomiPaesi = schede.map((p) => p.nome)
  // lo Stato delle regioni entra nella ricerca: «Stati Uniti» trova anche California e Florida
  const stati = schede.map((p) => (p.tipo === 'regione' ? p.stato : undefined)).filter((n): n is string => Boolean(n))
  const meta = getTripMeta(v.slug, lingua)
  const tappe = meta?.tappeMappa.map((t) => t.nome) ?? []
  return {
    paesi,
    aree: areeDelViaggio(v.slug),
    giorni: giorniDaDurata(it.durata),
    stili: stiliDaCategorie(it.categorie, it.tags),
    mesi: mesiDelViaggio(v.slug),
    mesiConsigliati: mesiConsigliatiDelViaggio(v.slug),
    ricerca: normalizza([v.titolo, v.descrizione, ...nomiPaesi, ...stati, ...tappe].join(' ')),
    luogo: nomiPaesi.length ? nomiPaesi.join(' · ') : undefined,
    // solo per la card: il budget totale c'è in pochi viaggi e non è confrontabile, niente filtro
    budget: budgetBreve(meta?.budgetTotale),
    provenienza: meta?.provenienza,
  }
}

/**
 * Paesi con almeno un viaggio, per il filtro: in ordine alfabetico nella lingua, con le regioni
 * (tipo 'regione') sotto il loro Stato, «Stati Uniti › California». Ogni scheda compare una volta.
 */
export function opzioniPaesi(lingua: Lingua): OpzionePaese[] {
  const conViaggi = new Set(getAllViaggi('it').flatMap((v) => paesiDelViaggio(v.slug)))
  const opzioni = getAllPaesi(lingua)
    .filter((p) => conViaggi.has(p.slug))
    .map((p) => ({
      slug: p.slug,
      nome: p.nome,
      area: areaDelPaese(p.slug),
      ...(p.tipo === 'regione' && p.stato ? { stato: p.stato } : {}),
    }))
  return ordinaPaesi(opzioni, lingua)
}
