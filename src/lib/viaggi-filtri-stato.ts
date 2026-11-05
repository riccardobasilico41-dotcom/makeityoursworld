import type { ViaggioScheda } from '@/components/TripCard'
import { AREE } from './aree'

/*
 * Filtri dell'archivio /viaggi: parte pura, senza dipendenze da 'node:fs' né dai dati dei
 * Paesi, così la importano sia il server (che prepara le schede) sia il componente client.
 *
 * Contratto URL (lo usano anche i link dalla home, dalle pagine Paese e area):
 *   /viaggi?q=<testo>&area=<slug area>&paese=<slug paese>&durata=<fascia>&stile=<stile>
 * Un solo valore per parametro; parametri e valori sconosciuti vengono ignorati.
 * `ordine` (durata-asc | durata-desc) è facoltativo e non fa parte dei filtri.
 */

// Tipologia/attività: derivati da categoria e tag già presenti in ogni file .md (nessun
// dato nuovo da mantenere), scelti tra quelli che ricorrono davvero nell'archivio. Sono
// anche i valori dell'URL (?stile=aurora%20boreale), in italiano in ogni lingua.
export const STILI_NOTI = [
  'mare',
  'montagna',
  'trekking',
  'deserto',
  'sci',
  'vulcani',
  'isole',
  'vino',
  'gastronomia',
  'archeologia',
  'giungla',
  'aurora boreale',
] as const

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Stili di un viaggio dalle sue categorie e dai tag (versione italiana del markdown). */
export function stiliDaCategorie(categorie: string[], tags: string[]): string[] {
  const testo = [...categorie, ...tags].join(' ').toLowerCase()
  // Confini di parola: un match per substring semplice ("sci" dentro "rinascimento") è un
  // falso positivo reale, trovato testando il filtro.
  return STILI_NOTI.filter((stile) => new RegExp(`\\b${escapeRegExp(stile)}\\b`, 'i').test(testo))
}

/** Fasce di durata, in giorni. I viaggi senza durata numerica («modulare») non entrano in nessuna. */
export const FASCE_DURATA = [
  { id: 'weekend', min: 1, max: 3 },
  { id: '4-7', min: 4, max: 7 },
  { id: '8-14', min: 8, max: 14 },
  { id: '15+', min: 15, max: Infinity },
] as const

export type IdFascia = (typeof FASCE_DURATA)[number]['id']

/** Il numero di giorni dall'inizio del campo «Durata» («12 giorni, 11 notti» → 12, «3-4 giorni» → 3). */
export function giorniDaDurata(durata: string): number | null {
  const match = durata.match(/^(\d+)/)
  return match ? Number(match[1]) : null
}

export function fasciaDi(giorni: number | null): IdFascia | null {
  if (giorni === null) return null
  return FASCE_DURATA.find((f) => giorni >= f.min && giorni <= f.max)?.id ?? null
}

/** Minuscole e senza accenti, per la ricerca testuale («Perù» = «peru»). */
export function normalizza(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Scheda dell'archivio: quella di TripCard più i campi già calcolati per i filtri. */
export type ViaggioCatalogo = ViaggioScheda & {
  /** Slug dei Paesi toccati (src/content/paesi), il primo è quello principale. */
  paesi: string[]
  /** Slug delle aree (src/lib/aree.ts) dei Paesi toccati. */
  aree: string[]
  giorni: number | null
  stili: string[]
  /** Titolo, descrizione, Paesi e tappe, già normalizzati. */
  ricerca: string
}

/** Paese che compare nel filtro: solo quelli con almeno un viaggio. */
export type OpzionePaese = { slug: string; nome: string; area: string | null }

export const CHIAVI_FILTRO = ['q', 'area', 'paese', 'durata', 'stile'] as const
export type ChiaveFiltro = (typeof CHIAVI_FILTRO)[number]

export const ORDINI = ['consigliati', 'durata-asc', 'durata-desc'] as const
export type Ordine = (typeof ORDINI)[number]

export type StatoFiltri = Record<ChiaveFiltro, string> & {
  ordine: Ordine
  /** Filtri attivi nell'ordine in cui compaiono nell'URL: l'ultimo è l'ultimo applicato. */
  sequenza: ChiaveFiltro[]
}

export const STATO_VUOTO: StatoFiltri = { q: '', area: '', paese: '', durata: '', stile: '', ordine: 'consigliati', sequenza: [] }

type LettoreParametri = { get(nome: string): string | null; keys(): IterableIterator<string> | Iterable<string> }

const AREE_VALIDE = new Set(AREE.map((a) => a.slug))
const FASCE_VALIDE = new Set<string>(FASCE_DURATA.map((f) => f.id))
const STILI_VALIDI = new Set<string>(STILI_NOTI)

/** Legge lo stato dall'URL. I valori che non esistono vengono scartati, come se mancassero. */
export function leggiStato(params: LettoreParametri, paesiValidi: Set<string>): StatoFiltri {
  const pulito = (k: string) => (params.get(k) ?? '').trim()
  const q = pulito('q').slice(0, 80)
  const area = AREE_VALIDE.has(pulito('area')) ? pulito('area') : ''
  const paese = paesiValidi.has(pulito('paese')) ? pulito('paese') : ''
  const durata = FASCE_VALIDE.has(pulito('durata')) ? pulito('durata') : ''
  const stile = STILI_VALIDI.has(pulito('stile')) ? pulito('stile') : ''
  const o = pulito('ordine')
  const ordine: Ordine = (ORDINI as readonly string[]).includes(o) ? (o as Ordine) : 'consigliati'
  const stato = { q, area, paese, durata, stile }
  const sequenza: ChiaveFiltro[] = []
  for (const k of params.keys()) {
    if ((CHIAVI_FILTRO as readonly string[]).includes(k) && stato[k as ChiaveFiltro] && !sequenza.includes(k as ChiaveFiltro)) {
      sequenza.push(k as ChiaveFiltro)
    }
  }
  return { ...stato, ordine, sequenza }
}

/**
 * Nuova query string a partire da quella attuale: le chiavi cambiate si spostano in fondo,
 * così l'ordine dell'URL ricorda quale filtro è stato applicato per ultimo. Le chiavi che
 * non riguardano l'archivio vengono lasciate dove sono.
 */
export function scriviQuery(attuale: string, modifiche: Partial<Record<ChiaveFiltro | 'ordine', string>>): string {
  const p = new URLSearchParams(attuale)
  for (const [k, v] of Object.entries(modifiche)) {
    p.delete(k)
    if (v && !(k === 'ordine' && v === 'consigliati')) p.append(k, v)
  }
  return p.toString()
}

/** Il viaggio passa i filtri? `ignora` esclude un filtro (per i conteggi accanto alle opzioni). */
export function passaFiltri(v: ViaggioCatalogo, s: Record<ChiaveFiltro, string>, ignora?: ChiaveFiltro): boolean {
  if (ignora !== 'area' && s.area && !v.aree.includes(s.area)) return false
  if (ignora !== 'paese' && s.paese && !v.paesi.includes(s.paese)) return false
  if (ignora !== 'durata' && s.durata && fasciaDi(v.giorni) !== s.durata) return false
  if (ignora !== 'stile' && s.stile && !v.stili.includes(s.stile)) return false
  if (ignora !== 'q' && s.q) {
    const parole = normalizza(s.q).split(' ').filter(Boolean)
    if (!parole.every((p) => v.ricerca.includes(p))) return false
  }
  return true
}

/** Ordinamento: «consigliati» è l'ordine dell'archivio; per durata i viaggi senza giorni vanno in fondo. */
export function ordina(viaggi: ViaggioCatalogo[], ordine: Ordine): ViaggioCatalogo[] {
  if (ordine === 'consigliati') return viaggi
  const verso = ordine === 'durata-asc' ? 1 : -1
  return [...viaggi].sort((a, b) => {
    if (a.giorni === null && b.giorni === null) return 0
    if (a.giorni === null) return 1
    if (b.giorni === null) return -1
    return (a.giorni - b.giorni) * verso
  })
}
