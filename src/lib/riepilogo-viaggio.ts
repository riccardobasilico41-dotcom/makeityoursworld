import type { Viaggio } from '@/lib/viaggi'
import type { TripMeta } from '@/lib/types'
import { getAllDestinazioni, getAllPaesi, getPaese } from '@/lib/geo'
import type { Lingua } from '@/lib/i18n/config'
import { mesiConsigliatiDelViaggio } from '@/lib/viaggi-filtri'
import { NOMI_MESI } from '@/lib/viaggi-filtri-stato'

/*
 * Dati del riepilogo in cima all'articolo di viaggio. Tutto viene da quello che
 * c'è già: righe di testa del markdown (Viaggio), overlay `TripMeta` e voci
 * "- **Etichetta:** testo" della «Scheda pratica». Niente stime: una voce senza
 * dato resta vuota e il riquadro non la mostra.
 */

/** Voci di primo livello della Scheda pratica ("- **Quando andare:** …"), chiave in minuscolo. */
export function vociSchedaPratica(markdown: string): Record<string, string> {
  const voci: Record<string, string> = {}
  let chiave: string | null = null
  for (const riga of markdown.split('\n')) {
    const m = riga.match(/^[-*]\s+\*\*([^*]+?):?\*\*:?\s*(.*)$/)
    if (m) {
      chiave = m[1].replace(/:$/, '').trim().toLowerCase()
      voci[chiave] = m[2].trim()
    } else if (chiave && /^\s+\S/.test(riga)) {
      voci[chiave] = `${voci[chiave]} ${riga.trim()}`.trim()
    } else {
      chiave = null
    }
  }
  return voci
}

const NOTA_LAVORO =
  /(da confermare|da verificare|da completare|da ricordare|da recuperare|to be confirmed|to be checked|to be completed|por confirmar|por verificar|por completar)/i

const T = {
  it: {
    ilMioViaggio: 'il mio viaggio',
    consigliato: 'consigliato',
    tappa: 'tappa',
    tappe: 'tappe',
    paesi: 'Paesi',
    inPaese: (n: string, paese: string) => `${n} in ${paese}`,
  },
  en: {
    ilMioViaggio: 'my trip',
    consigliato: 'recommended',
    tappa: 'stop',
    tappe: 'stops',
    paesi: 'countries',
    inPaese: (n: string, paese: string) => `${n} in ${paese}`,
  },
  es: {
    ilMioViaggio: 'mi viaje',
    consigliato: 'recomendado',
    tappa: 'parada',
    tappe: 'paradas',
    paesi: 'países',
    inPaese: (n: string, paese: string) => `${n} en ${paese}`,
  },
} satisfies Record<Lingua, Record<string, string | ((a: string, b: string) => string)>>

/** Prefisso delle tappe di rientro/arrivo (nelle tre lingue), da togliere per ricavare il luogo. */
export const PREFISSO_TAPPA =
  /^(Rientro|Ritorno|Arrivo) (a|ad|in) |^(Return|Back|Arrival|Arriving|Returning) (to|in|at) |^(Regreso|Vuelta|Llegada) (a|en) /i

/** Prima frase o primo inciso, per stare in una casella che si legge al volo. */
export function breve(testo: string | undefined, max = 100): string | undefined {
  if (!testo) return undefined
  let t = testo.replace(/\s+/g, ' ').trim()
  if (!t || NOTA_LAVORO.test(t)) return undefined
  const tagli = [': ', ' — ', ' – ', '. ', '; ']
    .map((s) => t.indexOf(s))
    .filter((i) => i > 3)
  if (tagli.length) t = t.slice(0, Math.min(...tagli))
  t = t.replace(/[.,;:]$/, '')
  if (t.length > max) t = t.slice(0, max).replace(/\s+\S*$/, '') + '…'
  // un ** aperto e tagliato a metà resterebbe in pagina così com'è
  if ((t.match(/\*\*/g) ?? []).length % 2 === 1) t = t.replace(/\*\*/g, '')
  return t.charAt(0).toUpperCase() + t.slice(1)
}

function prima(voci: Record<string, string>, test: (chiave: string) => boolean): string | undefined {
  const k = Object.keys(voci).find(test)
  return k ? voci[k] : undefined
}

const nomeTappa = (n: string) => n.replace(PREFISSO_TAPPA, '').trim().toLowerCase()

/** Paesi toccati: quelli nominati nella Categoria più quelli delle destinazioni collegate alle tappe. */
function paesiDelViaggio(viaggio: Viaggio, meta: TripMeta, lingua: Lingua): string[] {
  const paesi = new Set<string>()
  // le categorie dei viaggi restano in italiano in ogni lingua: si confrontano con i nomi italiani
  const perNome = new Map(getAllPaesi('it').map((p) => [p.nome.toLowerCase(), p.slug]))
  for (const c of viaggio.categorie) {
    const slug = perNome.get(c.toLowerCase())
    if (slug) paesi.add(slug)
  }
  const destinazioni = getAllDestinazioni(lingua)
  for (const t of meta.tappeMappa) {
    if (!t.destinazioneSlug) continue
    const trovate = destinazioni.filter((d) => d.slug === t.destinazioneSlug)
    const d = trovate.find((x) => x.paeseSlug === meta.paeseSlug) ?? (trovate.length === 1 ? trovate[0] : undefined)
    if (d) paesi.add(d.paeseSlug)
  }
  return [...paesi]
}

export type DatiRiepilogo = {
  durata?: string
  quando?: string
  /** true quando manca la data vera del viaggio e «quando» è il periodo migliore per andarci. */
  quandoMigliore?: boolean
  budget?: string
  /** Prima opzione per arrivare in centro dall'aeroporto (il resto è nella Scheda pratica). */
  aeroporto?: string
  ritmo?: string
  muoversi?: string
  tappe?: string
  conChi?: string
  adattoA?: string
}

/** Mesi consigliati in intervalli leggibili: [4,5,6,9,10] → «aprile-giugno, settembre-ottobre». */
function intervalliMesi(mesi: number[], lingua: Lingua): string | undefined {
  const m = [...new Set(mesi)].filter((x) => x >= 1 && x <= 12).sort((a, b) => a - b)
  if (!m.length) return undefined
  if (m.length === 12) return { it: 'tutto l\'anno', en: 'all year round', es: 'todo el año' }[lingua]
  const gruppi: number[][] = []
  for (const x of m) {
    const g = gruppi[gruppi.length - 1]
    if (g && x === g[g.length - 1] + 1) g.push(x)
    else gruppi.push([x])
  }
  // dicembre-gennaio: unisce l'ultimo gruppo al primo se l'anno «gira»
  if (gruppi.length > 1 && gruppi[0][0] === 1 && gruppi[gruppi.length - 1].at(-1) === 12) gruppi.unshift([...gruppi.pop()!, ...gruppi.shift()!])
  const nomi = NOMI_MESI[lingua]
  return gruppi.map((g) => (g.length === 1 ? nomi[g[0] - 1] : `${nomi[g[0] - 1]}-${nomi[g[g.length - 1] - 1]}`)).join(', ')
}

const maiuscola = (t?: string) => (t ? t.charAt(0).toUpperCase() + t.slice(1) : undefined)

/** Le prime voci di «adatto a» che stanno in una riga lunga; almeno la prima, accorciata. */
function adattoA(voci: string[]): string | undefined {
  const scelte: string[] = []
  for (const v of voci) {
    const t = v.trim()
    if (!t) continue
    if (scelte.length === 0) scelte.push(breve(t, 120) ?? t)
    else if ([...scelte, t].join(' · ').length <= 120) scelte.push(t)
    else break
  }
  return scelte.length ? scelte.join(' · ') : undefined
}

export function datiRiepilogo(viaggio: Viaggio, meta: TripMeta, lingua: Lingua): DatiRiepilogo {
  const t = T[lingua]
  const scheda = vociSchedaPratica(viaggio.schedaPratica)

  const ideale = breve(prima(scheda, (k) => /^(quando|when|cu[aá]ndo)$/.test(k) || /^(quando andare|when to go|cu[aá]ndo (ir|viajar))/.test(k)), 70)
  const fatto = viaggio.periodoBreve
  // «Periodo del viaggio» a volte è una data vera (6-13 luglio 2025), a volte già un consiglio
  // (maggio-settembre): solo nel primo caso si affianca il periodo consigliato della Scheda pratica.
  const eUnaData = /\d/.test(fatto)
  const quando =
    fatto && ideale && eUnaData && !ideale.toLowerCase().includes(fatto.toLowerCase())
      ? `${fatto} (${t.ilMioViaggio}) · ${t.consigliato}: ${ideale.charAt(0).toLowerCase()}${ideale.slice(1)}`
      : fatto || ideale || intervalliMesi(mesiConsigliatiDelViaggio(viaggio.slug), lingua)
  const quandoMigliore = !fatto

  const totale = meta.budget.find((v) => /^(totale|total)$/i.test(v.etichetta.trim()))?.valore
  // dalla Scheda pratica vale solo una cifra: «gestito dal DMC» non è un budget
  const budgetScheda = breve(prima(scheda, (k) => /^(budget( indicativo)?|costi( indicativi)?|costs?|indicative budget|presupuesto( orientativo| indicativo)?|costes( orientativos)?)$/.test(k)), 110)
  const budget =
    breve(meta.budgetTotale, 110) ?? breve(totale, 110) ?? (budgetScheda && /\d/.test(budgetScheda) ? budgetScheda : undefined)

  const muoversi =
    breve(meta.trasporti, 110) ??
    breve(prima(scheda, (k) => /^(come ci si muove|come mi sono mosso|trasporti( interni)?|getting around|how i got around|transport|internal transport|domestic transport|c[oó]mo (moverse|me mov[ií]|se mueve|desplazarse)|transporte( interno)?)$/.test(k)), 110)

  // «Dall'aeroporto al centro» della Scheda pratica: qui solo l'aeroporto e la prima opzione
  const aeroportoIntero = prima(scheda, (k) => /^(dall['’]aeroporto( al centro)?|from the airport( to the cent(re|er))?|del aeropuerto( al centro)?|desde el aeropuerto( al centro)?)$/.test(k))
  let aeroporto: string | undefined
  if (aeroportoIntero) {
    let a = aeroportoIntero.replace(/\s+/g, ' ').trim().split(' · ')[0].replace(/[.;,]$/, '')
    if (a.length > 150) a = a.slice(0, 150).replace(/\s+\S*$/, '') + '…'
    if ((a.match(/\*\*/g) ?? []).length % 2 === 1) a = a.replace(/\*\*/g, '')
    aeroporto = a.charAt(0).toUpperCase() + a.slice(1)
  }

  const nomi = new Set(meta.tappeMappa.map((t) => nomeTappa(t.nome)).filter(Boolean))
  const paesi = paesiDelViaggio(viaggio, meta, lingua)
  let tappe: string | undefined
  if (nomi.size > 0) {
    const n = `${nomi.size} ${nomi.size === 1 ? t.tappa : t.tappe}`
    if (paesi.length > 1) tappe = `${paesi.length} ${t.paesi} · ${n}`
    else {
      const paese = getPaese(paesi[0] ?? meta.paeseSlug, lingua)?.nome
      tappe = paese ? t.inPaese(n, paese) : n
    }
  } else if (paesi.length > 1) tappe = `${paesi.length} ${t.paesi}`

  return {
    durata: maiuscola(viaggio.durataBreve),
    quando: maiuscola(quando),
    quandoMigliore,
    budget,
    aeroporto,
    ritmo: breve(meta.ritmo, 90),
    muoversi,
    tappe,
    conChi: maiuscola(viaggio.compagniBreve),
    adattoA: adattoA(meta.adattoA),
  }
}

/** Minuti di lettura del testo che finisce in pagina, a 200 parole al minuto. */
export function minutiDiLettura(viaggio: Viaggio): number {
  const testo = [
    viaggio.apertura,
    viaggio.schedaPratica,
    ...viaggio.giorni.map((g) => `${g.titolo} ${g.corpo}`),
    ...viaggio.sezioni.map((s) => `${s.titolo} ${s.corpo}`),
    viaggio.doveDormito,
    viaggio.doveMangiato,
    viaggio.chiusura,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\]\([^)]*\)/g, ']')
  const parole = testo.match(/[\p{L}\p{N}]+/gu)?.length ?? 0
  return Math.max(1, Math.ceil(parole / 200))
}
