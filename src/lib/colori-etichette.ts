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

/**
 * Colore «a tema» di ogni Paese, per la prima parte del titolo dei viaggi (es. «India:»).
 * Toni presi dal Paese (zafferano per l'India, blu Majorelle per il Marocco…), tutti abbastanza
 * scuri da restare leggibili come testo grande sul fondo panna (contrasto ≥ 3:1).
 */
const PER_PAESE: Record<string, string> = {
  india: '#c2410c',
  marocco: '#1e4fa3',
  giappone: '#c0172e',
  cina: '#a8161b',
  islanda: '#2a6f97',
  norvegia: '#1f4e79',
  svezia: '#1f4e79',
  danimarca: '#a3262e',
  giordania: '#a0522d',
  'sri-lanka': '#1f6b4a',
  thailandia: '#9a6b00',
  'new-york': '#b45309',
  florida: '#0e7490',
  california: '#c2410c',
  transilvania: '#6b1d2a',
  bulgaria: '#2f6b3f',
  'costa-rica': '#2f6b3f',
  messico: '#be185d',
  'corea-del-sud': '#2b4c9b',
  malesia: '#0f766e',
  singapore: '#b91c1c',
  borneo: '#3d5a2a',
  'emirati-arabi-uniti': '#a16207',
  qatar: '#7a2e4e',
  'arabia-saudita': '#8a5a12',
  italia: '#b4532a',
  francia: '#1f3a8a',
  spagna: '#b45309',
  portogallo: '#1e4fa3',
  indonesia: '#0f766e',
  bolivia: '#4a5a8a',
  peru: '#b91c1c',
  guatemala: '#0e7490',
  belize: '#0e7490',
  panama: '#1f5c56',
  brasile: '#15803d',
  croazia: '#1d5a78',
  montenegro: '#1f5c56',
  egitto: '#a16207',
  turchia: '#0f766e',
  filippine: '#0369a1',
  maldive: '#0e7490',
  canada: '#b91c1c',
  inghilterra: '#1f3a5f',
  scozia: '#4c3a72',
  irlanda: '#15803d',
  'irlanda-del-nord': '#166534',
  svizzera: '#b91c1c',
  austria: '#a3262e',
  germania: '#1a1814',
  'paesi-bassi': '#c2410c',
  polonia: '#a3262e',
  'repubblica-ceca': '#1f4e79',
  ungheria: '#2f6b3f',
  estonia: '#1f4e79',
  lettonia: '#7a2e3a',
  lituania: '#9a6b00',
  tanzania: '#8a5a12',
}

export const colorePaese = (paese?: string | null, continente?: string) =>
  (paese && PER_PAESE[paese]) || coloreContinente(continente)

/**
 * Divide il titolo in [testa, resto]: la testa è la parte prima dei due punti («India:»),
 * oppure il luogo prima di «in/on/by/en/a/per/por» («Rome» in «Rome in 4 Days»).
 * Se non c'è una testa breve, torna null e il titolo resta tutto nero.
 */
export function testaTitolo(titolo: string): [string, string] | null {
  const dueP = titolo.indexOf(':')
  if (dueP > 0 && dueP <= 45) return [titolo.slice(0, dueP + 1), titolo.slice(dueP + 1)]
  const m = titolo.match(/^(.{2,40}?)(?=\s(?:in|on|by|en|a|per|por)\s)/i)
  return m ? [m[1], titolo.slice(m[1].length)] : null
}
