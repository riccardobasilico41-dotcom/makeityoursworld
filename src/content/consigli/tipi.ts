import type { Lingua } from '@/lib/i18n/config'

/** Testo di un articolo in una lingua. `corpo` è markdown (## per le sezioni). */
export type TestoConsiglio = {
  titolo: string
  /** Titolo per Google se quello in pagina supera i 60 caratteri. */
  titoloSeo?: string
  descrizione: string
  /** Una o due frasi in apertura, sotto il titolo. */
  lead: string
  corpo: string
}

/**
 * Articolo della sezione «Consigli»: risponde a una domanda che si cerca su Google
 * («quando andare in Giappone», «aurora boreale dove e quando») partendo da quello che c'è
 * già nei viaggi del sito, e rimanda ai viaggi collegati.
 */
export type Consiglio = {
  /** Slug canonico (italiano); quelli tradotti stanno in src/content/i18n/<l>/slug/consigli.json. */
  slug: string
  /** Data dell'ultima revisione, AAAA-MM-GG. */
  aggiornato: string
  immagine: string
  imageAlt: Record<Lingua, string>
  /** Slug dei viaggi collegati (mostrati come card in fondo). */
  viaggi: string[]
  /** Destinazione a cui appartiene la guida («thailandia/bangkok»): la guida compare anche nella sua pagina. */
  destinazione?: string
  testi: Record<Lingua, TestoConsiglio>
}
