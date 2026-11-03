/** Numero del giorno letto dal titolo «Giorno N — …» (o «Day N», «Día N»), altrimenti la posizione nella timeline. */
export function numeroGiorno(titolo: string, indice: number): string {
  return titolo.match(/(?:Giorno|Day|Día)\s+(\d+)/i)?.[1] ?? String(indice + 1)
}

/** Ancora di ogni giorno: per posizione, così resta unica anche se due titoli hanno lo stesso numero. */
export function idGiorno(indice: number): string {
  return `giorno-${indice + 1}`
}
