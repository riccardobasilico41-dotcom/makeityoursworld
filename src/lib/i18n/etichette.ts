import type { Lingua } from './config'
import { ETICHETTE } from './etichette-dati'

/**
 * Etichette che nei dati restano in italiano perché fanno da chiave (continenti, tipologie,
 * stili, tag, categorie): si traducono solo quando si mostrano. Senza traduzione, l'originale.
 */
export function etichetta(it: string, lingua: Lingua): string {
  if (lingua === 'it') return it
  const t = ETICHETTE[it] ?? ETICHETTE[it.toLowerCase()] ?? MINUSCOLE.get(it.trim().toLowerCase())
  return t?.[lingua] ?? it
}

/** Indice senza maiuscole: «medio oriente» trova «Medio Oriente» (prima restava in italiano). */
const MINUSCOLE = new Map(Object.entries(ETICHETTE).map(([k, v]) => [k.toLowerCase(), v]))

export const etichette = (voci: string[], lingua: Lingua) => voci.map((v) => etichetta(v, lingua))

/** Giudizio di un'esperienza (chiave tecnica → testo). */
export const GIUDIZIO: Record<Lingua, Record<string, string>> = {
  it: { imperdibile: 'Imperdibile', 'la-rifarei': 'La rifarei', 'bella-non-essenziale': 'Bella ma non essenziale', 'da-verificare': 'Da verificare' },
  en: { imperdibile: 'Unmissable', 'la-rifarei': "I'd do it again", 'bella-non-essenziale': 'Nice, not essential', 'da-verificare': 'To be checked' },
  es: { imperdibile: 'Imprescindible', 'la-rifarei': 'Lo repetiría', 'bella-non-essenziale': 'Bonita, no imprescindible', 'da-verificare': 'Por comprobar' },
}

/** Intensità di un giorno. */
export const INTENSITA: Record<Lingua, Record<string, string>> = {
  it: { leggero: 'Leggero', medio: 'Medio', intenso: 'Intenso' },
  en: { leggero: 'Easy', medio: 'Moderate', intenso: 'Intense' },
  es: { leggero: 'Suave', medio: 'Medio', intenso: 'Intenso' },
}
