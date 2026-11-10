import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'singapore',
  mesi: [
    { voto: 'buono', tmax: 31, tmin: 24, pioggia: 'molta' },
    { voto: 'ideale', tmax: 32, tmin: 25, pioggia: 'media', nota: {"it": "In media il mese meno piovoso dell'anno", "en": "On average the driest month of the year", "es": "De media, el mes menos lluvioso del año"} },
    { voto: 'ideale', tmax: 32, tmin: 25, pioggia: 'media' },
    { voto: 'ideale', tmax: 32, tmin: 25, pioggia: 'media' },
    { voto: 'buono', tmax: 32, tmin: 26, pioggia: 'media' },
    { voto: 'buono', tmax: 32, tmin: 26, pioggia: 'media' },
    { voto: 'buono', tmax: 31, tmin: 25, pioggia: 'media' },
    { voto: 'buono', tmax: 31, tmin: 25, pioggia: 'media', nota: {"it": "Possibile foschia dagli incendi in Indonesia (giugno-ottobre)", "en": "Possible haze from fires in Indonesia (June-October)", "es": "Posible calima por incendios en Indonesia (junio-octubre)"} },
    { voto: 'buono', tmax: 32, tmin: 25, pioggia: 'media' },
    { voto: 'buono', tmax: 32, tmin: 25, pioggia: 'media' },
    { voto: 'buono', tmax: 31, tmin: 25, pioggia: 'molta' },
    { voto: 'buono', tmax: 31, tmin: 24, pioggia: 'molta', nota: {"it": "Monsone di nord-est: acquazzoni quasi ogni giorno", "en": "Northeast monsoon: downpours almost daily", "es": "Monzón del noreste: chaparrones casi a diario"} },
  ],
  costi: {
    economico: { dormire: 35, mangiare: 15, trasporti: 5, attivita: 20 },
    medio: { dormire: 65, mangiare: 35, trasporti: 10, attivita: 35 },
    comfort: { dormire: 200, mangiare: 80, trasporti: 20, attivita: 60 },
    nota: {"it": "Si spende soprattutto per dormire (100-180 € a notte la camera); hawker 3-6 € a pasto, trasporti quasi gratis.", "en": "Most of the money goes on beds (100-180 € a night per room); hawker meals 3-6 €, transport almost free.", "es": "Lo caro es dormir (100-180 € la noche por habitación); comida hawker 3-6 €, transporte casi gratis."},
  },
  aggiornato: '2026-11',
}
