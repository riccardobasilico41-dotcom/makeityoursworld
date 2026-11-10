import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'india',
  zona: {"it": "Rajasthan e Nord (Jaipur)", "en": "Rajasthan and the North (Jaipur)", "es": "Rajastán y el norte (Jaipur)"},
  mesi: [
    { voto: 'ideale', tmax: 23, tmin: 8, pioggia: 'poca', nota: {"it": "Mattine fredde e nebbia tra Delhi e Agra: treni in ritardo", "en": "Cold mornings and fog between Delhi and Agra: trains run late", "es": "Mañanas frías y niebla entre Delhi y Agra: trenes con retraso"} },
    { voto: 'ideale', tmax: 26, tmin: 12, pioggia: 'poca' },
    { voto: 'buono', tmax: 32, tmin: 17, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 38, tmin: 23, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 41, tmin: 27, pioggia: 'poca', nota: {"it": "Oltre 40-45 °C in Rajasthan e sul Gange", "en": "Over 40-45 °C in Rajasthan and on the Ganges", "es": "Más de 40-45 °C en Rajastán y en el Ganges"} },
    { voto: 'sconsigliato', tmax: 40, tmin: 28, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 35, tmin: 26, pioggia: 'molta', nota: {"it": "Monsone: piogge forti, a Varanasi il Gange sommerge i ghat", "en": "Monsoon: heavy rain, in Varanasi the Ganges floods the ghats", "es": "Monzón: lluvias fuertes, en Benarés el Ganges cubre los ghats"} },
    { voto: 'sconsigliato', tmax: 33, tmin: 25, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 34, tmin: 24, pioggia: 'media' },
    { voto: 'buono', tmax: 34, tmin: 20, pioggia: 'poca' },
    { voto: 'ideale', tmax: 30, tmin: 14, pioggia: 'poca', nota: {"it": "Il mese più equilibrato per Rajasthan e Varanasi", "en": "The most balanced month for Rajasthan and Varanasi", "es": "El mes más equilibrado para Rajastán y Benarés"} },
    { voto: 'ideale', tmax: 25, tmin: 10, pioggia: 'poca' },
  ],
  costi: {
    economico: { dormire: 15, mangiare: 10, trasporti: 15, attivita: 10 },
    medio: { dormire: 55, mangiare: 20, trasporti: 30, attivita: 15 },
    comfort: { dormire: 170, mangiare: 40, trasporti: 50, attivita: 30 },
    volo: [450, 900],
    nota: {"it": "Fascia media con autista e hotel heritage; gli ingressi per stranieri costano 600-1.300 rupie l'uno.", "en": "Mid-range means a driver and heritage hotels; foreigner entry fees run 600-1,300 rupees each.", "es": "La gama media incluye chófer y hoteles heritage; las entradas para extranjeros cuestan 600-1.300 rupias cada una."},
  },
  aggiornato: '2026-11',
}
