import type { ViaggioScheda } from '@/components/TripCard'
import { AREE } from './aree'

/*
 * Filtri dell'archivio /viaggi: parte pura, senza dipendenze da 'node:fs' né dai dati dei
 * Paesi, così la importano sia il server (che prepara le schede) sia il componente client.
 *
 * Contratto URL (lo usano anche i link dalla home, dalle pagine Paese e area):
 *   /viaggi?q=<testo>&area=<slug area>&paese=<slug paese>&durata=<fascia>&quando=<1-12>&stile=<stile>&mese=<1-12>
 * `quando` = «Quando andare», sui mesi consigliati (TripMeta.mesiConsigliati);
 * `mese` = «Quando ci sono andato», sui mesi reali del viaggio (mesiDaPeriodo).
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

// --- Mese del viaggio ---
// Il «Periodo del viaggio» del markdown è testo libero e dice solo quando Rick è partito
// («6-13 luglio 2025», «fine febbraio», «luglio»); se non è registrato resta vuoto. Le stagioni
// consigliate stanno in «Quando andare» e nei `mesiConsigliati` del TripMeta (vedi
// mesiConsigliatiDelViaggio in viaggi-filtri.ts). Per prudenza `mesiDaPeriodo` restituisce un
// mese solo quando il testo indica un periodo unico e breve; alternative, stagioni, finestre
// lunghe o più viaggi («tre viaggi, nel 2018…») restano senza mese.

const MESI_IT = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']

/** Nomi dei mesi (indice 0 = gennaio) per etichette, chip e ricerca. */
export const NOMI_MESI: Record<'it' | 'en' | 'es', string[]> = {
  it: MESI_IT,
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
}

// Parole che trasformano il periodo in una scelta o in una stagione: nessun mese certo.
const PERIODO_INCERTO = /\b(oppure|o|pensato|costruito|primavera|estate|autunno|inverno|stagione|stagioni|tutto l'anno|viaggi)\b/

/**
 * Mesi (1-12) scritti nel periodo, nell'ordine del viaggio: «fine luglio» → [7],
 * «27 dicembre - 3 gennaio» → [12, 1]. Si legge il primo pezzo della frase che nomina un
 * mese (le spiegazioni dopo virgola o trattino lungo non contano); se prima o dentro quel
 * pezzo c'è un'alternativa o una stagione, o se il periodo copre più di due mesi (una
 * finestra, non un viaggio), il risultato è vuoto.
 */
export function mesiDaPeriodo(periodo: string): number[] {
  const testo = normalizza(periodo)
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\*/g, '')
  let prima = ''
  for (const pezzo of testo.split(/[,;:—]/)) {
    const trovati = [...pezzo.matchAll(new RegExp(`\\b(${MESI_IT.join('|')})\\b`, 'g'))].map((m) => MESI_IT.indexOf(m[1]) + 1)
    prima += ` ${pezzo}`
    if (trovati.length === 0) {
      if (PERIODO_INCERTO.test(prima)) return []
      continue
    }
    if (PERIODO_INCERTO.test(prima)) return []
    const distinti = [...new Set(trovati)]
    if (distinti.length === 1) return distinti
    if (distinti.length > 2) return []
    const [da, a] = distinti
    const ampiezza = ((a - da + 12) % 12) + 1
    return ampiezza === 2 ? [da, a] : []
  }
  return []
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
  /** Mesi (1-12) in cui il viaggio è stato fatto, dal «Periodo del viaggio»; vuoto se non è certo. */
  mesi: number[]
  /** Mesi (1-12) consigliati per fare il viaggio (TripMeta.mesiConsigliati), per «Quando andare». */
  mesiConsigliati?: number[]
  /** 'combined' = percorso che unisce più viaggi reali (TripMeta.provenienza). */
  provenienza?: 'journey' | 'combined'
  /** Titolo, descrizione, Paesi e tappe, già normalizzati. */
  ricerca: string
}

/**
 * Paese che compare nel filtro: solo quelli con almeno un viaggio. `stato` c'è per le schede
 * di tipo regione (Transilvania, California, Borneo…): il nome dello Stato sovrano, che non ha
 * una scheda sua, serve a mostrarle raggruppate («Stati Uniti › California»).
 */
export type OpzionePaese = { slug: string; nome: string; area: string | null; stato?: string }

/** Nome del Paese nel filtro e nei chip: «Stati Uniti › California» per le regioni. */
export function etichettaPaese(p: Pick<OpzionePaese, 'nome' | 'stato'>): string {
  return p.stato ? `${p.stato} › ${p.nome}` : p.nome
}

/**
 * Paesi in ordine alfabetico, con ogni regione subito dopo il suo Stato (o dopo le altre regioni
 * dello stesso Stato): «Malesia», «Malesia › Borneo», …, «Stati Uniti › California», «Stati Uniti › Florida».
 */
export function ordinaPaesi<T extends Pick<OpzionePaese, 'nome' | 'stato'>>(paesi: T[], lingua: string): T[] {
  return [...paesi].sort((a, b) => {
    const gruppo = (a.stato ?? a.nome).localeCompare(b.stato ?? b.nome, lingua)
    if (gruppo !== 0) return gruppo
    // nello stesso gruppo lo Stato (senza `stato`) viene prima delle sue regioni
    if (!a.stato !== !b.stato) return a.stato ? 1 : -1
    return a.nome.localeCompare(b.nome, lingua)
  })
}

/** Mesi brevi per le card («Mag–Set»). */
export const MESI_BREVI: Record<'it' | 'en' | 'es', string[]> = {
  it: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
}

const TUTTO_ANNO = { it: 'Tutto l’anno', en: 'All year', es: 'Todo el año' }

/**
 * Stagione consigliata in breve, dai mesi consigliati: [5,6,7,8,9] → «Mag–Set»,
 * [12,1,2] → «Dic–Feb» (a cavallo dell'anno), [4,5,9,10] → «Apr–Mag, Set–Ott»,
 * [4] → «Apr». Vuoto se non ci sono mesi: niente stagione inventata.
 */
export function stagioneBreve(mesi: number[] | undefined, lingua: 'it' | 'en' | 'es'): string {
  const validi = [...new Set((mesi ?? []).filter((m) => Number.isInteger(m) && m >= 1 && m <= 12))].sort((a, b) => a - b)
  if (validi.length === 0) return ''
  if (validi.length === 12) return TUTTO_ANNO[lingua]
  const presenti = new Set(validi)
  // si parte dal primo mese che non segue un mese consigliato: così dicembre-gennaio resta un pezzo solo
  const inizi = validi.filter((m) => !presenti.has(m === 1 ? 12 : m - 1))
  const pezzi = inizi.map((da) => {
    let a = da
    while (presenti.has(a === 12 ? 1 : a + 1)) a = a === 12 ? 1 : a + 1
    return [da, a] as const
  })
  const nome = (m: number) => MESI_BREVI[lingua][m - 1]
  return pezzi.map(([da, a]) => (da === a ? nome(da) : `${nome(da)}–${nome(a)}`)).join(', ')
}

/**
 * Budget del TripMeta per la card: il testo già pubblicato, senza «indicativamente/circa»
 * all'inizio e senza le parentesi. Niente cifre ricalcolate: se il testo non ha numeri o è
 * troppo lungo per una card non si mostra.
 */
export function budgetBreve(testo: string | undefined): string | undefined {
  if (!testo) return undefined
  const pulito = testo
    .replace(/\([^)]*\)/g, ' ')
    .replace(/^\s*(indicativamente|circa|de forma indicativa|aproximadamente|unos|roughly|about|around|approximately)\s+/i, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.])/g, '$1')
    .trim()
  if (!/\d/.test(pulito) || pulito.length > 100) return undefined
  return pulito.charAt(0).toUpperCase() + pulito.slice(1)
}

export const CHIAVI_FILTRO = ['q', 'area', 'paese', 'durata', 'quando', 'stile', 'mese'] as const
export type ChiaveFiltro = (typeof CHIAVI_FILTRO)[number]

/** Filtri del pannello «Altri filtri»: meno usati, o con pochi viaggi (il mese reale c'è in ~13). */
export const CHIAVI_AVANZATE = ['stile', 'mese'] as const satisfies readonly ChiaveFiltro[]

/** Modifiche che tolgono tutti i filtri (l'ordinamento resta). */
export const NESSUN_FILTRO: Record<ChiaveFiltro, ''> = { q: '', area: '', paese: '', durata: '', quando: '', stile: '', mese: '' }

export const ORDINI = ['consigliati', 'durata-asc', 'durata-desc'] as const
export type Ordine = (typeof ORDINI)[number]

export type StatoFiltri = Record<ChiaveFiltro, string> & {
  ordine: Ordine
  /** Filtri attivi nell'ordine in cui compaiono nell'URL: l'ultimo è l'ultimo applicato. */
  sequenza: ChiaveFiltro[]
}

export const STATO_VUOTO: StatoFiltri = { ...NESSUN_FILTRO, ordine: 'consigliati', sequenza: [] }

type LettoreParametri = { get(nome: string): string | null; keys(): IterableIterator<string> | Iterable<string> }

const AREE_VALIDE = new Set(AREE.map((a) => a.slug))
const FASCE_VALIDE = new Set<string>(FASCE_DURATA.map((f) => f.id))
const STILI_VALIDI = new Set<string>(STILI_NOTI)
const MESI_VALIDI = new Set(Array.from({ length: 12 }, (_, i) => String(i + 1)))

/** Legge lo stato dall'URL. I valori che non esistono vengono scartati, come se mancassero. */
export function leggiStato(params: LettoreParametri, paesiValidi: Set<string>): StatoFiltri {
  const pulito = (k: string) => (params.get(k) ?? '').trim()
  const q = pulito('q').slice(0, 80)
  const area = AREE_VALIDE.has(pulito('area')) ? pulito('area') : ''
  const paese = paesiValidi.has(pulito('paese')) ? pulito('paese') : ''
  const durata = FASCE_VALIDE.has(pulito('durata')) ? pulito('durata') : ''
  const stile = STILI_VALIDI.has(pulito('stile')) ? pulito('stile') : ''
  const mese = MESI_VALIDI.has(pulito('mese')) ? pulito('mese') : ''
  const quando = MESI_VALIDI.has(pulito('quando')) ? pulito('quando') : ''
  const o = pulito('ordine')
  const ordine: Ordine = (ORDINI as readonly string[]).includes(o) ? (o as Ordine) : 'consigliati'
  const stato = { q, area, paese, durata, quando, stile, mese }
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
  if (ignora !== 'quando' && s.quando && !(v.mesiConsigliati ?? []).includes(Number(s.quando))) return false
  if (ignora !== 'mese' && s.mese && !v.mesi.includes(Number(s.mese))) return false
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
