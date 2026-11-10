import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'tanzania',
  zona: {"it": "Arusha e circuito nord dei safari", "en": "Arusha and the northern safari circuit", "es": "Arusha y el circuito norte de safaris"},
  mesi: [
    { voto: 'ideale', tmax: 28, tmin: 10, pioggia: 'media', nota: {"it": "Nascite degli gnu nel Serengeti meridionale", "en": "Wildebeest calving in the southern Serengeti", "es": "Nacimientos de ñus en el sur del Serengeti"} },
    { voto: 'ideale', tmax: 28, tmin: 10, pioggia: 'media' },
    { voto: 'buono', tmax: 27, tmin: 11, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 25, tmin: 13, pioggia: 'molta', nota: {"it": "Grandi piogge: piste fangose, molti campi chiusi", "en": "Long rains: muddy tracks, many camps closed", "es": "Lluvias largas: pistas embarradas, muchos campamentos cerrados"} },
    { voto: 'sconsigliato', tmax: 22, tmin: 11, pioggia: 'molta' },
    { voto: 'ideale', tmax: 21, tmin: 8, pioggia: 'poca' },
    { voto: 'ideale', tmax: 20, tmin: 9, pioggia: 'poca', nota: {"it": "Stagione secca: animali vicino all'acqua, alta stagione", "en": "Dry season: animals near water, peak season", "es": "Temporada seca: animales cerca del agua, temporada alta"} },
    { voto: 'ideale', tmax: 22, tmin: 8, pioggia: 'poca', nota: {"it": "Attraversamenti dei fiumi nel Serengeti nord", "en": "River crossings in the northern Serengeti", "es": "Cruces de ríos en el norte del Serengeti"} },
    { voto: 'ideale', tmax: 24, tmin: 8, pioggia: 'poca' },
    { voto: 'ideale', tmax: 26, tmin: 10, pioggia: 'poca' },
    { voto: 'buono', tmax: 27, tmin: 10, pioggia: 'media', nota: {"it": "Piccole piogge: acquazzoni brevi, meno gente", "en": "Short rains: brief showers, fewer people", "es": "Lluvias cortas: chaparrones breves, menos gente"} },
    { voto: 'buono', tmax: 27, tmin: 10, pioggia: 'media' },
  ],
  costi: {
    economico: { dormire: 30, mangiare: 15, trasporti: 30, attivita: 75 },
    medio: { dormire: 90, mangiare: 30, trasporti: 50, attivita: 110 },
    comfort: { dormire: 250, mangiare: 50, trasporti: 80, attivita: 150 },
    nota: {"it": "Il safari è la voce più pesante: park fee a persona e al giorno, lodge molto più cari del campeggio.", "en": "The safari is the biggest cost: park fees per person per day, lodges far pricier than camping.", "es": "El safari es el mayor gasto: tasas del parque por persona y día, lodges mucho más caros que acampar."},
  },
  aggiornato: '2026-11',
}
