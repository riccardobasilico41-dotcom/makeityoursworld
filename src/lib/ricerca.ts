// Ricerca nel sito senza librerie: indice statico (/cerca.json) + punteggio
// per pertinenza. Condiviso fra la route dell'indice e il pannello client.

export type TipoVoce = 'paese' | 'destinazione' | 'viaggio' | 'esperienza' | 'meraviglia'

export type VoceIndice = {
  tipo: TipoVoce
  nome: string
  href: string
  /** Paese (o continente per viaggi e Paesi): secondo campo di ricerca. */
  paese: string
  /** Riga breve sotto il nome nei risultati. */
  dettaglio: string
  /** Tag, tipologia, località: terzo campo di ricerca. */
  tag: string[]
  immagine?: string
}

export const GRUPPI: { tipo: TipoVoce; etichetta: string }[] = [
  { tipo: 'paese', etichetta: 'Paesi' },
  { tipo: 'destinazione', etichetta: 'Destinazioni' },
  { tipo: 'viaggio', etichetta: 'Viaggi' },
  { tipo: 'esperienza', etichetta: 'Esperienze' },
  { tipo: 'meraviglia', etichetta: 'Meraviglie' },
]

export const MAX_PER_GRUPPO = 8

/** Minuscole, senza accenti, solo lettere e cifre separate da uno spazio. */
export function normalizza(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

type VoceNormalizzata = VoceIndice & { _nome: string; _paese: string; _tag: string }

export function preparaIndice(voci: VoceIndice[]): VoceNormalizzata[] {
  return voci.map((v) => ({
    ...v,
    _nome: ` ${normalizza(v.nome)}`,
    _paese: ` ${normalizza(v.paese)}`,
    _tag: ` ${normalizza(v.tag.join(' '))}`,
  }))
}

/** Punteggio di un termine in un campo (già con spazio iniziale): inizio parola > contenuto. */
function punti(campo: string, termine: string, pesoInizio: number, pesoDentro: number): number {
  if (campo.includes(` ${termine}`)) return pesoInizio
  if (campo.includes(termine)) return pesoDentro
  return 0
}

export function cerca(indice: VoceNormalizzata[], query: string): Map<TipoVoce, VoceIndice[]> {
  const q = normalizza(query)
  const gruppi = new Map<TipoVoce, VoceIndice[]>()
  if (!q) return gruppi
  const termini = q.split(' ')

  const trovati: { voce: VoceNormalizzata; punteggio: number }[] = []
  for (const voce of indice) {
    let totale = 0
    let ok = true
    for (const t of termini) {
      const p = Math.max(
        punti(voce._nome, t, 100, 50),
        punti(voce._paese, t, 40, 20),
        punti(voce._tag, t, 30, 15),
      )
      if (!p) {
        ok = false
        break
      }
      totale += p
    }
    if (!ok) continue
    // Nome che comincia con la frase intera, o identico: in cima.
    if (voce._nome.startsWith(` ${q}`)) totale += 60
    if (voce._nome === ` ${q}`) totale += 40
    trovati.push({ voce, punteggio: totale })
  }

  trovati.sort((a, b) => b.punteggio - a.punteggio || a.voce.nome.localeCompare(b.voce.nome, 'it'))

  for (const { voce } of trovati) {
    const lista = gruppi.get(voce.tipo) ?? []
    if (lista.length < MAX_PER_GRUPPO) {
      lista.push(voce)
      gruppi.set(voce.tipo, lista)
    }
  }
  return gruppi
}
