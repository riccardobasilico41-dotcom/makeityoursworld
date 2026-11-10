import type { Lingua } from '@/lib/i18n/config'

/** Giudizio sul mese per viaggiare nel Paese (in generale, o nella zona indicata nella nota). */
export type VotoMese = 'ideale' | 'buono' | 'sconsigliato'

export type MesePaese = {
  voto: VotoMese
  /** Massime e minime medie in °C, arrotondate (della zona più visitata). */
  tmax: number
  tmin: number
  /** Pioggia del mese, a parole: niente millimetri. */
  pioggia: 'poca' | 'media' | 'molta'
  /** Facoltativa, una riga: perché quel voto («monsone sulla costa ovest», «sakura», «Capodanno cinese: tutto pieno»). */
  nota?: Record<Lingua, string>
}

/** Spesa al giorno a persona, in euro, per voce. */
export type VociSpesa = { dormire: number; mangiare: number; trasporti: number; attivita: number }

/**
 * Calendario del Paese (12 mesi, gennaio = indice 0) e costi giornalieri per il calcolatore.
 * Uno per Paese in src/content/paesi-mesi/<slug>.ts, registrato in ./index.ts.
 */
export type DatiMesiPaese = {
  paeseSlug: string
  /** Zona a cui si riferiscono temperature e voti, se il Paese ha climi molto diversi. */
  zona?: Record<Lingua, string>
  mesi: MesePaese[]
  costi: {
    /** Spesa al giorno a persona in euro, per stile di viaggio (camera doppia divisa in due). */
    economico: VociSpesa
    medio: VociSpesa
    comfort: VociSpesa
    /** Volo A/R dall'Italia in euro, fascia indicativa (economy, prenotato con anticipo). */
    volo?: [number, number]
    nota?: Record<Lingua, string>
  }
  /** Mese e anno dei dati (es. «2026-11»). */
  aggiornato: string
}
