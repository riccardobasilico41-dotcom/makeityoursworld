/** Numero del giorno letto dal titolo «Giorno N — …» (o «Day N», «Día N»), altrimenti la posizione nella timeline. */
export function numeroGiorno(titolo: string, indice: number): string {
  return titolo.match(/(?:Giorno|Day|Día)\s+(\d+)/i)?.[1] ?? String(indice + 1)
}

/** Ancora di ogni giorno: per posizione, così resta unica anche se due titoli hanno lo stesso numero. */
export function idGiorno(indice: number): string {
  return `giorno-${indice + 1}`
}

const TITOLO_GIORNO = /^(?:Giorno|Day|Día)\s+\d+(?:\s*[-–]\s*\d+)?\s*(?:\(([^)]+)\))?\s*(?:[—–-]\s*(.*))?$/i

/**
 * Parti del titolo «Giorno 2 (07.04) — Kamakura, l'antica capitale sul mare»: la data tra
 * parentesi, se c'è, e il luogo dopo il trattino. I titoli senza «Giorno N» (le zone dei
 * roadtrip) sono già il luogo. Il testo resta quello del markdown, solo diviso.
 */
export function partiGiorno(titolo: string): { data?: string; luogo: string } {
  const m = titolo.trim().match(TITOLO_GIORNO)
  if (!m) return { luogo: titolo.trim() }
  return { data: m[1]?.trim() || undefined, luogo: m[2]?.trim() ?? '' }
}

/** Marcatore del riquadro pratico in fondo a un giorno («**In pratica**», «**In practice:**», «**En la práctica**»). */
const IN_PRATICA = /^\*\*(?:In pratica|In practice|En la práctica):?\*\*:?[ \t]*/im

/**
 * Divide il corpo di un giorno tra racconto e consigli pratici, al marcatore «In pratica»
 * che il markdown usa già. Senza marcatore il corpo resta intero.
 */
export function dividiGiorno(corpo: string): { racconto: string; pratica?: string } {
  const m = IN_PRATICA.exec(corpo)
  if (!m || m.index === undefined) return { racconto: corpo }
  const racconto = corpo.slice(0, m.index).trim()
  const pratica = corpo.slice(m.index + m[0].length).trim()
  if (!pratica) return { racconto: corpo }
  return { racconto, pratica }
}

/** Toglie «Rientro a», «Arrivo in»… dal nome della tappa, per confrontarlo con il titolo del giorno. */
const PREFISSO = /^(?:Rientro|Ritorno|Arrivo|Return|Back|Arrival|Arriving|Returning|Regreso|Vuelta|Llegada)\s+(?:a|ad|in|to|at|en)\s+/i
const piano = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

/**
 * Tappe della mappa che corrispondono a ogni giorno: quella della destinazione collegata e
 * quelle nominate nel titolo del giorno («Kyoto-Hiroshima-Miyajima» → tre tappe), in ordine di
 * percorso. Senza corrispondenza l'elenco resta vuoto: nessuna tappa evidenziata invece di
 * una tappa indovinata.
 */
export function tappeDeiGiorni(
  giorni: { titolo: string; destinazioneSlug?: string }[],
  tappe: { nome: string; destinazioneSlug?: string }[],
): number[][] {
  const nomi = tappe.map((t) => piano(t.nome.replace(PREFISSO, '').trim()))
  const escape = (n: string) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return giorni.map((g) => {
    const trovate = new Set<number>()
    if (g.destinazioneSlug) {
      tappe.forEach((t, i) => {
        if (t.destinazioneSlug === g.destinazioneSlug) trovate.add(i)
      })
    }
    const titolo = piano(g.titolo)
    nomi.forEach((n, i) => {
      if (n.length >= 3 && new RegExp(`(^|[^\\p{L}])${escape(n)}($|[^\\p{L}])`, 'u').test(titolo)) trovate.add(i)
    })
    return [...trovate].sort((a, b) => a - b)
  })
}
