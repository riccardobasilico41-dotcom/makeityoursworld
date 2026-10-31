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
  /** Se il sito è compreso nel pass del paese (Jordan Pass, Boleto Turístico…): il nome sta in `Guida.pass.nome`. */
  pass?: 'incluso' | 'non incluso'
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
  /** Mezzo, se non è l'auto: «Shinkansen Hikari», «bus notturno», «volo»… */
  mezzo?: string
  /** Tempo annotato nel viaggio, se diverso dalla stima stradale. */
  nelMioViaggio?: string
}

export type GiornoGuida = {
  numero: number
  /** Ultimo giorno, se la scheda copre più giorni (es. un trek di 4 giorni). */
  fino?: number
  titolo: string
  /** Pagina del sito collegata (es. '/destinazioni/giappone/kyoto'): diventa un QR nella scheda. */
  paginaSito?: string
  /** Riassunto in prima persona, dal diario del viaggio. */
  racconto: string
  tratte: TrattaGuida[]
  /** Testo al posto della tabella quando il giorno non ha spostamenti. */
  senzaStrada?: string
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

/** `loc` = pronuncia traslitterata nella lingua locale; `scritto` = grafia originale (kana, singalese…), facoltativa. */
export type FraseGuida = { it: string; loc: string; scritto?: string; nota?: string }

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
  mappa: {
    /** Nomi (inizio del nome) delle tappe nell'ordine del percorso: linea piena. */
    percorso: string[]
    /** Tratto di rientro, tratteggiato. */
    ritorno?: string[]
    /** Laghi, mari, golfi da disegnare (poligoni in [lat, lng]). */
    acque?: { nome: string; punti: Gps[]; etichetta: Gps; allinea?: 'start' | 'end' }[]
    legenda: string
    /** Nota sotto la tabella delle tratte (come sono stati calcolati i tempi). */
    notaTempi: string
    notaTempiFonti?: string[]
    /** Lunghezza della barra di scala. */
    scalaKm?: number
  }
  /** Pass o biglietto cumulativo del paese (Jordan Pass, JR Pass, Boleto Turístico…). */
  pass?: {
    nome: string
    /** Titolo della pagina, es. «Jordan Pass: conviene?» */
    titolo: string
    occhiello?: string
    regola: string
    scenari: { situazione: string; scelta: string }[]
    calcolo?: { voce: string; senzaPass: number; conPass: number }[]
    /** Intestazione della tabella di calcolo, es. «Il conto su questo itinerario (JOD)». */
    calcoloTitolo?: string
    /** Riquadro nero di chiusura. */
    esito?: string
    fonti: string[]
  }
  primaDiPartire: SezioneTesto[]
  emergenze: {
    numeri: RigaTabella[]
    ambasciata: ContattoGuida[]
    ospedali: ContattoGuida[]
  }
  contatti: { gruppo: string; nota?: string; notaFonti?: string[]; voci: ContattoGuida[] }[]
  budget: { righe: RigaBudget[]; nota: string; cambio?: string; cambioFonti?: string[] }
  valigia: { gruppo: string; voci: string[] }[]
  lingua: {
    /** Occhiello della pagina, es. «Arabo giordano, traslitterato». */
    nome: string
    /** Come si legge la trascrizione. */
    pronuncia: string
  }
  frasario: { gruppo: string; frasi: FraseGuida[] }[]
  numeri: FraseGuida[]
  /** Pagine del sito da aprire con il QR (percorso relativo, es. '/viaggi/giappone-itinerario'). */
  pagineSito?: { titolo: string; path: string }[]
  nonVerificato: string[]
  /** Frase sulla data di consultazione delle fonti. */
  consultate: string
  fonti: FonteGuida[]
}
