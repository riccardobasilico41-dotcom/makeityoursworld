import type { Lingua } from '@/lib/i18n/config'

/*
 * Domande dei lettori sotto i viaggi. Tipi e limiti condivisi tra modulo (client),
 * azioni (server) e archivio. Nessun dato di contatto: solo il nome scelto e il testo.
 */

export const STATI = ['in-attesa', 'pubblicata', 'scartata'] as const
export type StatoDomanda = (typeof STATI)[number]

export type Domanda = {
  id: string
  /** slug canonico del viaggio */
  viaggio: string
  lingua: Lingua
  nome: string
  testo: string
  /** ISO 8601 */
  data: string
  stato: StatoDomanda
  risposta?: { testo: string; data: string }
}

export const MAX_NOME = 40
export const MAX_TESTO = 1000
export const MIN_TESTO = 10
export const MAX_RISPOSTA = 4000
/** tempo minimo tra apertura della pagina e invio: sotto è quasi sempre un bot */
export const MIN_SECONDI_COMPILAZIONE = 4
/** invii massimi dalla stessa pagina aperta (il modulo poi si chiude) */
export const MAX_INVII_PAGINA = 3

/** id e slug ammessi nei percorsi dei file: niente «..», niente barre */
export const ID_VALIDO = /^[a-z0-9-]{1,80}$/
