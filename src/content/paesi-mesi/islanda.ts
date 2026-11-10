import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'islanda',
  zona: {"it": "Reykjavík e costa sud-ovest", "en": "Reykjavík and the south-west coast", "es": "Reikiavik y la costa suroeste"},
  mesi: [
    { voto: 'sconsigliato', tmax: 3, tmin: -2, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 3, tmin: -2, pioggia: 'molta' },
    { voto: 'buono', tmax: 4, tmin: -1, pioggia: 'media', nota: {"it": "Aurore boreali e giornate che si allungano", "en": "Northern lights and lengthening days", "es": "Auroras boreales y días que se alargan"} },
    { voto: 'buono', tmax: 7, tmin: 1, pioggia: 'media' },
    { voto: 'buono', tmax: 10, tmin: 4, pioggia: 'poca' },
    { voto: 'ideale', tmax: 13, tmin: 7, pioggia: 'poca', nota: {"it": "Sole di mezzanotte: luce quasi tutta la notte", "en": "Midnight sun: light almost all night", "es": "Sol de medianoche: luz casi toda la noche"} },
    { voto: 'ideale', tmax: 15, tmin: 9, pioggia: 'poca', nota: {"it": "Strade F degli altopiani aperte; alta stagione, prenotare tutto", "en": "Highland F-roads open; peak season, book everything", "es": "Pistas F del interior abiertas; temporada alta, reservar todo"} },
    { voto: 'ideale', tmax: 14, tmin: 9, pioggia: 'media' },
    { voto: 'buono', tmax: 11, tmin: 6, pioggia: 'molta', nota: {"it": "Prime aurore boreali; strade F in chiusura", "en": "First northern lights; F-roads start closing", "es": "Primeras auroras; las pistas F empiezan a cerrar"} },
    { voto: 'buono', tmax: 8, tmin: 3, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 5, tmin: 0, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 3, tmin: -2, pioggia: 'molta', nota: {"it": "Notte polare: 4-5 ore di luce, strade del nord a rischio", "en": "Polar night: 4-5 hours of daylight, northern roads at risk", "es": "Noche polar: 4-5 horas de luz, carreteras del norte en riesgo"} },
  ],
  costi: {
    economico: { dormire: 35, mangiare: 40, trasporti: 40, attivita: 20 },
    medio: { dormire: 90, mangiare: 70, trasporti: 50, attivita: 45 },
    comfort: { dormire: 180, mangiare: 110, trasporti: 70, attivita: 80 },
    nota: {"it": "Tra i Paesi più cari d'Europa; il campeggio abbassa molto la voce dormire.", "en": "One of the most expensive countries in Europe; camping cuts accommodation costs a lot.", "es": "De los países más caros de Europa; acampar reduce mucho el alojamiento."},
  },
  aggiornato: '2026-11',
}
