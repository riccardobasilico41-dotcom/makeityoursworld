import { NOMI_MESI, fasciaDi, normalizza, type IdFascia } from './viaggi-filtri-stato'

/*
 * Quiz «Dove vado?» (/dove-vado): parte pura, senza 'node:fs', la usano la pagina (server), il
 * componente client e il test tools/test/dove-vado.mjs. I dati di ogni viaggio li prepara
 * dove-vado-dati.ts a partire da quelli dell'archivio (mesi consigliati, durata, aree, stili, tag).
 *
 * Contratto URL (valori in italiano in ogni lingua, come l'archivio):
 *   /dove-vado?quando=<1-12|flessibile>&durata=<weekend|4-7|8-14|15+>&budget=<basso|medio|alto>
 *             &ama=<interesse>,<interesse>&con=<solo|coppia|amici|famiglia>&dove=<europa|lontano|ovunque>
 * Con tutte e sei le risposte la pagina mostra i risultati; valori sconosciuti vengono ignorati.
 */

export const INTERESSI = ['mare', 'cultura', 'natura', 'avventura', 'cibo', 'citta', 'neve'] as const
export type Interesse = (typeof INTERESSI)[number]
export const COMPAGNIE = ['solo', 'coppia', 'amici', 'famiglia'] as const
export type Compagnia = (typeof COMPAGNIE)[number]
export const BUDGET = ['basso', 'medio', 'alto'] as const
export type Budget = (typeof BUDGET)[number]
export const DISTANZE = ['europa', 'lontano', 'ovunque'] as const
export type Distanza = (typeof DISTANZE)[number]
export const DURATE = ['weekend', '4-7', '8-14', '15+'] as const satisfies readonly IdFascia[]

/** Scheda di un viaggio per il quiz: solo i campi che servono al punteggio e alla card. */
export type ViaggioQuiz = {
  slug: string
  titolo: string
  luogo?: string
  copertina?: { immagine: string; imageAlt: string }
  giorni: number | null
  durataBreve: string
  mesiConsigliati: number[]
  /** Il viaggio sta tutto in Europa (area «europa»). */
  europa: boolean
  interessi: Interesse[]
  /** Con chi lo consiglia il testo («coppie», «famiglie», «amici»…); vuoto = non detto. */
  compagnia: Compagnia[]
  /** Livello di spesa sul posto del Paese principale, indicativo: serve solo a ordinare il quiz. */
  costo: Budget
}

export type Risposte = {
  quando: string // '1'…'12' | 'flessibile' | ''
  durata: IdFascia | ''
  budget: Budget | ''
  ama: Interesse[]
  con: Compagnia | ''
  dove: Distanza | ''
}

export const RISPOSTE_VUOTE: Risposte = { quando: '', durata: '', budget: '', ama: [], con: '', dove: '' }

/** I sei passi del quiz, nell'ordine in cui compaiono. */
export const PASSI = ['quando', 'durata', 'budget', 'ama', 'con', 'dove'] as const
export type Passo = (typeof PASSI)[number]

type LettoreParametri = { get(nome: string): string | null }

const tra = <T extends string>(lista: readonly T[], v: string): T | '' => ((lista as readonly string[]).includes(v) ? (v as T) : '')

/** Legge le risposte dall'URL; quello che non esiste viene scartato. */
export function leggiRisposte(params: LettoreParametri): Risposte {
  const p = (k: string) => (params.get(k) ?? '').trim()
  const q = p('quando')
  const quando = q === 'flessibile' || /^(?:[1-9]|1[0-2])$/.test(q) ? q : ''
  const ama = [...new Set(p('ama').split(',').map((s) => s.trim()))].filter((s): s is Interesse => tra(INTERESSI, s) !== '')
  return {
    quando,
    durata: tra(DURATE, p('durata')),
    budget: tra(BUDGET, p('budget')),
    ama,
    con: tra(COMPAGNIE, p('con')),
    dove: tra(DISTANZE, p('dove')),
  }
}

/** Query string delle risposte, nell'ordine dei passi (vuota se non c'è niente). */
export function scriviRisposte(r: Risposte): string {
  const p = new URLSearchParams()
  if (r.quando) p.set('quando', r.quando)
  if (r.durata) p.set('durata', r.durata)
  if (r.budget) p.set('budget', r.budget)
  if (r.ama.length) p.set('ama', INTERESSI.filter((i) => r.ama.includes(i)).join(','))
  if (r.con) p.set('con', r.con)
  if (r.dove) p.set('dove', r.dove)
  return p.toString().replace(/%2C/g, ',')
}

export function rispostaData(r: Risposte, passo: Passo): boolean {
  return passo === 'ama' ? r.ama.length > 0 : r[passo] !== ''
}

/** Il primo passo senza risposta, o null se il quiz è completo. */
export function primoPassoAperto(r: Risposte): Passo | null {
  return PASSI.find((p) => !rispostaData(r, p)) ?? null
}

const ORDINE_DURATE: IdFascia[] = [...DURATE]

export type Motivo =
  | { tipo: 'mese'; mese: number }
  | { tipo: 'durata'; giorni: number }
  | { tipo: 'interessi'; interessi: Interesse[] }
  | { tipo: 'budget'; budget: Budget }
  | { tipo: 'compagnia'; con: Compagnia }
  | { tipo: 'distanza'; dove: 'europa' | 'lontano' }

export type Risultato = { viaggio: ViaggioQuiz; punti: number; motivi: Motivo[] }

/**
 * Punteggio di un viaggio. Ogni risposta pesa: la distanza e la durata quasi da filtro,
 * gli interessi molto, mese, budget e compagnia meno. I dati mancanti (nessun mese consigliato,
 * durata modulare) non tolgono punti: il viaggio resta in gara ma non sale.
 */
export function punteggio(v: ViaggioQuiz, r: Risposte): Risultato {
  let punti = 0
  const motivi: Motivo[] = []

  if (r.quando && r.quando !== 'flessibile' && v.mesiConsigliati.length) {
    const mese = Number(r.quando)
    if (v.mesiConsigliati.includes(mese)) {
      punti += 3
      motivi.push({ tipo: 'mese', mese })
    } else punti -= 2
  }

  if (r.durata && v.giorni !== null) {
    const fascia = fasciaDi(v.giorni)
    const distanza = fascia ? Math.abs(ORDINE_DURATE.indexOf(fascia) - ORDINE_DURATE.indexOf(r.durata)) : 9
    if (distanza === 0) {
      punti += 3
      motivi.push({ tipo: 'durata', giorni: v.giorni })
    } else if (distanza === 1) punti += 0.5
    else punti -= 3
  }

  if (r.ama.length) {
    const comuni = r.ama.filter((i) => v.interessi.includes(i))
    if (comuni.length) {
      punti += 2 * comuni.length + (comuni.length === r.ama.length ? 1 : 0)
      motivi.push({ tipo: 'interessi', interessi: comuni })
    } else punti -= 3
  }

  if (r.budget) {
    const d = Math.abs(BUDGET.indexOf(v.costo) - BUDGET.indexOf(r.budget))
    if (d === 0) {
      punti += 1.5
      if (r.budget !== 'medio') motivi.push({ tipo: 'budget', budget: r.budget })
    } else if (d === 2) punti -= 2
  }

  if (r.con && r.con !== 'solo' && v.compagnia.includes(r.con)) {
    punti += 1.5
    motivi.push({ tipo: 'compagnia', con: r.con })
  }

  if (r.dove === 'europa' || r.dove === 'lontano') {
    if (v.europa === (r.dove === 'europa')) {
      punti += 2
      motivi.push({ tipo: 'distanza', dove: r.dove })
    } else punti -= 6
  }

  return { viaggio: v, punti, motivi }
}

/**
 * I viaggi migliori: da 3 a 6, in ordine di punteggio (a parità, l'ordine dell'archivio).
 * Oltre i primi tre entrano solo quelli vicini al migliore.
 */
export function migliori(viaggi: ViaggioQuiz[], r: Risposte, min = 3, max = 6): Risultato[] {
  const tutti = viaggi.map((v, i) => ({ ...punteggio(v, r), i }))
  tutti.sort((a, b) => b.punti - a.punti || a.i - b.i)
  const top = tutti[0]?.punti ?? 0
  const soglia = top - Math.max(2, Math.abs(top) * 0.25)
  const scelti = tutti.filter((x, i) => i < min || (i < max && x.punti >= soglia))
  return scelti.map(({ viaggio, punti, motivi }) => ({ viaggio, punti, motivi }))
}

// --- La riga «perché» ---

type L = 'it' | 'en' | 'es'

export const NOMI_INTERESSI: Record<L, Record<Interesse, string>> = {
  it: { mare: 'mare', cultura: 'cultura', natura: 'natura', avventura: 'avventura', cibo: 'cibo', citta: 'città', neve: 'neve' },
  en: { mare: 'sea', cultura: 'culture', natura: 'nature', avventura: 'adventure', cibo: 'food', citta: 'cities', neve: 'snow' },
  es: { mare: 'mar', cultura: 'cultura', natura: 'naturaleza', avventura: 'aventura', cibo: 'comida', citta: 'ciudad', neve: 'nieve' },
}

const FRASI: Record<
  L,
  {
    mese: (m: string) => string
    giorni: (n: number) => string
    e: string
    budget: Record<'basso' | 'alto', string>
    con: Record<'coppia' | 'amici' | 'famiglia', string>
    dove: Record<'europa' | 'lontano', string>
  }
> = {
  it: {
    mese: (m) => `${m} è uno dei mesi migliori`,
    giorni: (n) => `${n} ${n === 1 ? 'giorno' : 'giorni'}`,
    e: 'e',
    budget: { basso: 'costi contenuti sul posto', alto: 'vale la spesa' },
    con: { coppia: 'adatto alle coppie', amici: 'bello tra amici', famiglia: 'adatto alle famiglie' },
    dove: { europa: 'in Europa', lontano: 'fuori Europa' },
  },
  en: {
    mese: (m) => `${m} is one of the best months`,
    giorni: (n) => `${n} ${n === 1 ? 'day' : 'days'}`,
    e: 'and',
    budget: { basso: 'low costs on the ground', alto: 'worth the splurge' },
    con: { coppia: 'great for couples', amici: 'fun with friends', famiglia: 'family-friendly' },
    dove: { europa: 'in Europe', lontano: 'outside Europe' },
  },
  es: {
    mese: (m) => `${m} es uno de los mejores meses`,
    giorni: (n) => `${n} ${n === 1 ? 'día' : 'días'}`,
    e: 'y',
    budget: { basso: 'gastos contenidos en destino', alto: 'vale lo que cuesta' },
    con: { coppia: 'ideal en pareja', amici: 'genial con amigos', famiglia: 'apto para familias' },
    dove: { europa: 'en Europa', lontano: 'fuera de Europa' },
  },
}

function elenco(parole: string[], e: string): string {
  return parole.length <= 1 ? (parole[0] ?? '') : `${parole.slice(0, -1).join(', ')} ${e} ${parole.at(-1)}`
}

/** «marzo è uno dei mesi migliori, 10 giorni, mare e cultura». Vuoto se nessuna risposta combacia. */
export function perche(motivi: Motivo[], lingua: L): string {
  const f = FRASI[lingua]
  const pezzi = motivi.map((m) => {
    switch (m.tipo) {
      case 'mese': {
        const nome = NOMI_MESI[lingua][m.mese - 1]
        return f.mese(nome)
      }
      case 'durata':
        return f.giorni(m.giorni)
      case 'interessi':
        return elenco(
          m.interessi.map((i) => NOMI_INTERESSI[lingua][i]),
          f.e,
        )
      case 'budget':
        return f.budget[m.budget as 'basso' | 'alto']
      case 'compagnia':
        return f.con[m.con as 'coppia' | 'amici' | 'famiglia']
      case 'distanza':
        return f.dove[m.dove]
    }
  })
  const testo = pezzi.filter(Boolean).join(', ')
  return testo.charAt(0).toUpperCase() + testo.slice(1)
}

// --- Dalle risposte all'archivio filtrato ---

/** Interessi che hanno uno stile corrispondente nel filtro dell'archivio (?stile=). */
const STILE_ARCHIVIO: Partial<Record<Interesse, string>> = { mare: 'mare', cibo: 'gastronomia', neve: 'sci' }

/**
 * Link all'archivio con i filtri che esistono anche lì: mese consigliato, durata, area Europa,
 * e lo stile se l'interesse scelto è uno solo e ha un equivalente. Percorso canonico.
 */
export function linkArchivio(r: Risposte): string {
  const p = new URLSearchParams()
  if (r.quando && r.quando !== 'flessibile') p.set('quando', r.quando)
  if (r.durata) p.set('durata', r.durata)
  if (r.dove === 'europa') p.set('area', 'europa')
  const stile = r.ama.length === 1 ? STILE_ARCHIVIO[r.ama[0]] : undefined
  if (stile) p.set('stile', stile)
  const qs = p.toString()
  return qs ? `/viaggi?${qs}` : '/viaggi'
}

// --- Dai dati del viaggio agli interessi e alla compagnia (li usa dove-vado-dati.ts) ---

/** Parole di stili, categorie e tag (normalizzate) che portano a ciascun interesse. */
const PAROLE: Record<Interesse, string[]> = {
  mare: ['mare', 'isole', 'snorkeling', 'spiagge', 'costa', 'immersioni', 'diving', 'island hopping', 'surf', 'vela', 'isole locali', 'resort', 'laguna', 'cenote'],
  cultura: ['cultura', 'archeologia', 'storia', 'arte', 'templi', 'musei', 'architettura', 'castelli', 'citta d\'arte', 'cittadarte', 'rinascimento', 'monasteri', 'medine', 'kasbah', 'memoria', 'piramidi', 'spiritualita', 'borghi', 'villaggi storici', 'forti e palazzi', 'maya', 'festival', 'flamenco', 'musica', 'arte contemporanea', 'storia contemporanea', 'design'],
  natura: ['natura', 'trekking', 'montagna', 'vulcani', 'giungla', 'parchi', 'parchi nazionali', 'paesaggi', 'cascate', 'laghi', 'fauna selvatica', 'safari', 'balene', 'deserto', 'deserti', 'risaie', 'amazzonia', 'alta quota', 'oranghi', 'giardini', 'backwaters', 'aurora boreale', 'aurora-boreale', 'campagna'],
  avventura: ['avventura', 'trekking', 'on the road', 'on-the-road', 'road trip', 'roadtrip', 'vulcani', 'deserto', 'immersioni', 'alta quota', 'altaquota', 'campeggio', 'vanlife', 'safari', 'giungla', 'surf', 'inverno estremo', 'diving', 'mongolfiera', 'cammino di santiago'],
  cibo: ['gastronomia', 'cibo', 'vino', 'enogastronomia', 'streetfood', 'street food', 'distillerie'],
  citta: ['citta', 'cittadarte', 'citta d\'arte', 'megalopoli', 'vita notturna', 'nightlife', 'citta storiche', 'citta coloniali', 'citta imperiali', 'capodanno'],
  neve: ['sci', 'inverno', 'aurora boreale', 'aurora-boreale', 'inverno estremo', 'neve polverosa', 'lapponia'],
}
const INDICE = new Map<string, Interesse[]>()
for (const i of INTERESSI) for (const p of PAROLE[i]) INDICE.set(p, [...(INDICE.get(p) ?? []), i])

/** Interessi da stili, categorie e tag italiani di un viaggio. «cultura andina» vale come «cultura». */
export function interessiDa(parole: string[]): Interesse[] {
  const trovati = new Set<Interesse>()
  for (const grezza of parole) {
    const p = normalizza(grezza)
    for (const i of INDICE.get(p) ?? []) trovati.add(i)
    if (p.startsWith('cultura ')) trovati.add('cultura')
  }
  return INTERESSI.filter((i) => trovati.has(i))
}

/** Con chi: dalle frasi «adatto a» e «con chi sono partito» (italiano). */
export function compagniaDa(testi: string[]): Compagnia[] {
  const t = normalizza(testi.join(' / '))
  const c: Compagnia[] = []
  if (/\b(da sol[oa]|in solitaria|chi viaggia sol[oa])\b/.test(t)) c.push('solo')
  if (/\bcoppi[ae]\b/.test(t)) c.push('coppia')
  if (/\b(amici|gruppi?|gruppetto|weroad)\b/.test(t)) c.push('amici')
  if (/\b(famigli[ae]|bambini)\b/.test(t)) c.push('famiglia')
  return c
}

/*
 * Livello di spesa sul posto (alloggi, cibo, trasporti) del Paese principale, solo per ordinare
 * i risultati del quiz: non compare come cifra da nessuna parte. Gli altri Paesi sono «medio».
 */
const COSTO_BASSO = new Set(['bolivia', 'peru', 'india', 'indonesia', 'sri-lanka', 'thailandia', 'filippine', 'malesia', 'borneo', 'marocco', 'egitto', 'guatemala', 'bulgaria', 'transilvania', 'montenegro', 'polonia', 'ungheria', 'turchia', 'messico', 'lituania'])
const COSTO_ALTO = new Set(['norvegia', 'islanda', 'svizzera', 'danimarca', 'svezia', 'new-york', 'california', 'florida', 'canada', 'maldive', 'emirati-arabi-uniti', 'arabia-saudita'])

export function costoDelPaese(paeseSlug: string | undefined): Budget {
  if (!paeseSlug) return 'medio'
  return COSTO_BASSO.has(paeseSlug) ? 'basso' : COSTO_ALTO.has(paeseSlug) ? 'alto' : 'medio'
}
