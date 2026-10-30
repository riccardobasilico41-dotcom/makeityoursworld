/**
 * Modello delle guide PDF scaricabili (pagina /guide/[slug]/stampa).
 * Una guida = un viaggio del sito + i dati pratici verificati che sul sito
 * non ci sono. Ogni fatto rimanda a una fonte in `fonti` tramite il suo id.
 */

export type FonteGuida = {
  id: string
  titolo: string
  url: string
}

/** Coordinate in gradi decimali [lat, lng]. */
export type Gps = [number, number]

export type LuogoGuida = {
  nome: string
  indirizzo?: string
  orari?: string
  biglietto?: string
  jordanPass?: 'incluso' | 'non incluso'
  telefono?: string
  web?: string
  gps?: Gps
  nota?: string
  fonti: string[]
}

export type ContattoGuida = {
  nome: string
  cosa: string
  indirizzo?: string
  telefono?: string
  web?: string
  gps?: Gps
  /** usato = citato nel viaggio di Rick; ufficiale = ente pubblico; non-provato = operatore da registro. */
  stato: 'usato' | 'ufficiale' | 'non-provato'
  /** Avvertenza sull'affidabilità del dato (es. fonte unica, numero da riconfermare). */
  avviso?: string
  fonti: string[]
}

export type TrattaGuida = {
  da: string
  a: string
  km: number
  minuti: number
  /** Tempo annotato nel viaggio, se diverso dalla stima stradale. */
  nelMioViaggio?: string
}

export type GiornoGuida = {
  numero: number
  titolo: string
  /** Riassunto in prima persona, dal diario del viaggio. */
  racconto: string
  tratte: TrattaGuida[]
  luoghi: LuogoGuida[]
  mangiare: ContattoGuida[]
  dormire: string
  /** Nota pratica aggiuntiva, non presente sul sito. */
  nota?: string
  costiNoti?: string[]
}

export type TappaMappa = {
  nome: string
  gps: Gps
  giorno: string
  /** Posizione dell'etichetta rispetto al punto. */
  etichetta?: 'destra' | 'sinistra' | 'sopra' | 'sotto'
}

export type RigaTabella = { voce: string; valore: string; fonti?: string[] }

export type SezioneTesto = {
  titolo: string
  righe: RigaTabella[]
}

export type FraseGuida = { it: string; ar: string; nota?: string }

export type RigaBudget = { voce: string; costo?: string; nota?: string }

export type Guida = {
  slug: string
  tripSlug: string
  paese: string
  titolo: string
  sottotitolo: string
  autore: string
  verificatoAl: string
  intro: string[]
  cosaInPiu: string[]
  tappe: TappaMappa[]
  giorni: GiornoGuida[]
  jordanPass?: {
    regola: string
    scenari: { situazione: string; scelta: string }[]
    calcolo: { voce: string; senzaPass: number; conPass: number }[]
    fonti: string[]
  }
  primaDiPartire: SezioneTesto[]
  emergenze: {
    numeri: RigaTabella[]
    ambasciata: ContattoGuida[]
    ospedali: ContattoGuida[]
  }
  contatti: { gruppo: string; nota?: string; voci: ContattoGuida[] }[]
  budget: { righe: RigaBudget[]; nota: string }
  valigia: { gruppo: string; voci: string[] }[]
  frasario: { gruppo: string; frasi: FraseGuida[] }[]
  numeri: FraseGuida[]
  nonVerificato: string[]
  fonti: FonteGuida[]
}
