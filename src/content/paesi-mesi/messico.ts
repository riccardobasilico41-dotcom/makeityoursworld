import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'messico',
  zona: {"it": "Yucatán e Riviera Maya (Mérida)", "en": "Yucatán and the Riviera Maya (Mérida)", "es": "Yucatán y la Riviera Maya (Mérida)"},
  mesi: [
    { voto: 'ideale', tmax: 31, tmin: 17, pioggia: 'poca' },
    { voto: 'ideale', tmax: 32, tmin: 18, pioggia: 'poca' },
    { voto: 'ideale', tmax: 35, tmin: 19, pioggia: 'poca' },
    { voto: 'buono', tmax: 36, tmin: 21, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 37, tmin: 22, pioggia: 'media', nota: {"it": "Caldo umido forte, soprattutto nei siti maya senza ombra", "en": "Strong humid heat, especially at Maya sites without shade", "es": "Calor húmedo fuerte, sobre todo en sitios mayas sin sombra"} },
    { voto: 'sconsigliato', tmax: 35, tmin: 23, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 35, tmin: 23, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 35, tmin: 23, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 34, tmin: 23, pioggia: 'molta', nota: {"it": "Picco della stagione degli uragani (giugno-novembre)", "en": "Peak of the hurricane season (June-November)", "es": "Pico de la temporada de huracanes (junio-noviembre)"} },
    { voto: 'sconsigliato', tmax: 33, tmin: 21, pioggia: 'media' },
    { voto: 'buono', tmax: 32, tmin: 19, pioggia: 'poca', nota: {"it": "Inizia la stagione secca; Hanal Pixán a Mérida", "en": "Dry season begins; Hanal Pixán in Mérida", "es": "Empieza la temporada seca; Hanal Pixán en Mérida"} },
    { voto: 'ideale', tmax: 31, tmin: 18, pioggia: 'poca', nota: {"it": "Vacanze di Natale: Riviera Maya piena e prezzi alti", "en": "Christmas holidays: Riviera Maya full and pricey", "es": "Vacaciones de Navidad: Riviera Maya llena y cara"} },
  ],
  costi: {
    economico: { dormire: 25, mangiare: 15, trasporti: 15, attivita: 15 },
    medio: { dormire: 60, mangiare: 30, trasporti: 25, attivita: 30 },
    comfort: { dormire: 150, mangiare: 60, trasporti: 50, attivita: 60 },
    nota: {"it": "L'entroterra costa poco, Tulum e Playa del Carmen hanno prezzi quasi europei.", "en": "The interior is cheap; Tulum and Playa del Carmen have near-European prices.", "es": "El interior es barato; Tulum y Playa del Carmen tienen precios casi europeos."},
  },
  aggiornato: '2026-11',
}
