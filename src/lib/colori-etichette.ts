/**
 * Colori delle etichette sulle foto delle card (Paese, continente, tipo di destinazione).
 * Tutti scuri abbastanza da tenere il testo crema leggibile (contrasto ≥ 4,5:1), e presi
 * dalla stessa famiglia di toni terrosi del sito, così le card non sono tutte uguali.
 */
const PER_TIPO: Record<string, string> = {
  mare: '#1d5a78',
  isole: '#1d5a78',
  isola: '#1d5a78',
  costa: '#1d5a78',
  diving: '#16506b',
  snorkeling: '#16506b',
  natura: '#2f6b3f',
  'parco nazionale': '#2f6b3f',
  trekking: '#3d5a2a',
  montagna: '#3d5a2a',
  avventura: '#8a3b12',
  deserto: '#8a5a12',
  città: '#a3262e',
  nightlife: '#7a2e4e',
  cultura: '#7a5212',
  storia: '#6b4a1a',
  archeologia: '#6b4a1a',
  architettura: '#6b4a1a',
  arte: '#5b3a72',
  musei: '#5b3a72',
  religione: '#5b3a72',
  borghi: '#7a5212',
  gastronomia: '#9a3412',
  cibo: '#9a3412',
  relax: '#1d5a78',
}

const PER_CONTINENTE: Record<string, string> = {
  Asia: '#a3262e',
  Europa: '#1f4e79',
  Africa: '#8a5a12',
  'Medio Oriente': '#8a5a12',
  'Africa e Medio Oriente': '#8a5a12',
  'Nord America': '#1f5c56',
  'America Centrale': '#2f6b3f',
  'Nord e Centro America': '#1f5c56',
  'Sud America': '#7a2e4e',
  Oceania: '#16506b',
}

const PER_AREA: Record<string, string> = {
  asia: PER_CONTINENTE.Asia,
  europa: PER_CONTINENTE.Europa,
  'africa-e-medio-oriente': PER_CONTINENTE.Africa,
  'nord-e-centro-america': PER_CONTINENTE['Nord America'],
  'sud-america': PER_CONTINENTE['Sud America'],
}

const BASE = '#1a1814'

export const coloreTipo = (tipo?: string) => (tipo && PER_TIPO[tipo.toLowerCase()]) || BASE
export const coloreContinente = (continente?: string) => (continente && PER_CONTINENTE[continente]) || BASE
export const coloreArea = (area?: string | null) => (area && PER_AREA[area]) || BASE
