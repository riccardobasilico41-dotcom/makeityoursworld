import type { Viaggio } from '@/lib/viaggi'
import type { TripMeta } from '@/lib/types'
import { getAllDestinazioni, getAllPaesi, getPaese } from '@/lib/geo'

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

const NOTA_LAVORO = /(da confermare|da verificare|da completare|da ricordare|da recuperare)/i

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

const nomeTappa = (n: string) => n.replace(/^(Rientro|Ritorno|Arrivo) (a|ad|in) /i, '').trim().toLowerCase()

/** Paesi toccati: quelli nominati nella Categoria più quelli delle destinazioni collegate alle tappe. */
function paesiDelViaggio(viaggio: Viaggio, meta: TripMeta): string[] {
  const paesi = new Set<string>()
  const perNome = new Map(getAllPaesi().map((p) => [p.nome.toLowerCase(), p.slug]))
  for (const c of viaggio.categorie) {
    const slug = perNome.get(c.toLowerCase())
    if (slug) paesi.add(slug)
  }
  const destinazioni = getAllDestinazioni()
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
  budget?: string
  ritmo?: string
  muoversi?: string
  tappe?: string
  conChi?: string
  adattoA?: string
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

export function datiRiepilogo(viaggio: Viaggio, meta: TripMeta): DatiRiepilogo {
  const scheda = vociSchedaPratica(viaggio.schedaPratica)

  const ideale = breve(prima(scheda, (k) => k === 'quando' || k.startsWith('quando andare')), 70)
  const fatto = viaggio.periodoBreve
  // «Periodo del viaggio» a volte è una data vera (6-13 luglio 2025), a volte già un consiglio
  // (maggio-settembre): solo nel primo caso si affianca il periodo consigliato della Scheda pratica.
  const eUnaData = /\d/.test(fatto)
  const quando =
    fatto && ideale && eUnaData && !ideale.toLowerCase().includes(fatto.toLowerCase())
      ? `${fatto} (il mio viaggio) · consigliato: ${ideale.charAt(0).toLowerCase()}${ideale.slice(1)}`
      : fatto || ideale

  const totale = meta.budget.find((v) => v.etichetta.toLowerCase() === 'totale')?.valore
  // dalla Scheda pratica vale solo una cifra: «gestito dal DMC» non è un budget
  const budgetScheda = breve(prima(scheda, (k) => /^(budget( indicativo)?|costi( indicativi)?)$/.test(k)), 110)
  const budget =
    breve(meta.budgetTotale, 110) ?? breve(totale, 110) ?? (budgetScheda && /\d/.test(budgetScheda) ? budgetScheda : undefined)

  const muoversi =
    breve(meta.trasporti, 110) ??
    breve(prima(scheda, (k) => /^(come ci si muove|come mi sono mosso|trasporti( interni)?)$/.test(k)), 110)

  const nomi = new Set(meta.tappeMappa.map((t) => nomeTappa(t.nome)).filter(Boolean))
  const paesi = paesiDelViaggio(viaggio, meta)
  let tappe: string | undefined
  if (nomi.size > 0) {
    const n = `${nomi.size} ${nomi.size === 1 ? 'tappa' : 'tappe'}`
    if (paesi.length > 1) tappe = `${paesi.length} Paesi · ${n}`
    else {
      const paese = getPaese(paesi[0] ?? meta.paeseSlug)?.nome
      tappe = paese ? `${n} in ${paese}` : n
    }
  } else if (paesi.length > 1) tappe = `${paesi.length} Paesi`

  return {
    durata: maiuscola(viaggio.durataBreve),
    quando: maiuscola(quando),
    budget,
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
