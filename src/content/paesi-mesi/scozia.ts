import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'scozia',
  zona: {"it": "Edimburgo; Highlands più fresche e piovose", "en": "Edinburgh; the Highlands are cooler and wetter", "es": "Edimburgo; las Highlands son más frescas y lluviosas"},
  mesi: [
    { voto: 'sconsigliato', tmax: 7, tmin: 2, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 8, tmin: 2, pioggia: 'media' },
    { voto: 'buono', tmax: 10, tmin: 3, pioggia: 'poca' },
    { voto: 'buono', tmax: 12, tmin: 5, pioggia: 'poca' },
    { voto: 'ideale', tmax: 15, tmin: 7, pioggia: 'poca' },
    { voto: 'ideale', tmax: 17, tmin: 10, pioggia: 'media', nota: {"it": "Giornate di 17-18 ore di luce", "en": "Days with 17-18 hours of daylight", "es": "Días de 17-18 horas de luz"} },
    { voto: 'ideale', tmax: 19, tmin: 12, pioggia: 'molta', nota: {"it": "Moscerini (midges) nelle Highlands: portare il repellente", "en": "Midges in the Highlands: bring repellent", "es": "Mosquitos (midges) en las Highlands: llevar repelente"} },
    { voto: 'ideale', tmax: 19, tmin: 12, pioggia: 'molta', nota: {"it": "Festival e Fringe: Edimburgo piena, prezzi alti", "en": "Festival and Fringe: Edinburgh full, high prices", "es": "Festival y Fringe: Edimburgo llena, precios altos"} },
    { voto: 'ideale', tmax: 17, tmin: 10, pioggia: 'media' },
    { voto: 'buono', tmax: 13, tmin: 7, pioggia: 'molta', nota: {"it": "Foliage nelle Highlands, giornate che si accorciano", "en": "Autumn colours in the Highlands, shorter days", "es": "Colores de otoño en las Highlands, días más cortos"} },
    { voto: 'sconsigliato', tmax: 10, tmin: 4, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 7, tmin: 2, pioggia: 'media', nota: {"it": "Hogmanay a Edimburgo; circa 7 ore di luce", "en": "Hogmanay in Edinburgh; about 7 hours of daylight", "es": "Hogmanay en Edimburgo; unas 7 horas de luz"} },
  ],
  costi: {
    economico: { dormire: 35, mangiare: 35, trasporti: 30, attivita: 15 },
    medio: { dormire: 75, mangiare: 55, trasporti: 40, attivita: 30 },
    comfort: { dormire: 150, mangiare: 95, trasporti: 55, attivita: 50 },
    nota: {"it": "Noleggio auto, carburante e hotel nelle Highlands d'estate pesano sul budget.", "en": "Car hire, fuel and Highland hotels in summer weigh on the budget.", "es": "El alquiler de coche, la gasolina y los hoteles de las Highlands en verano pesan en el presupuesto."},
  },
  aggiornato: '2026-11',
}
