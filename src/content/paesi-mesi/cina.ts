import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'cina',
  zona: { it: 'Pechino (a sud più mite e piovoso)', en: 'Beijing (milder and wetter in the south)', es: 'Pekín (más templado y lluvioso en el sur)' },
  mesi: [
    { voto: 'buono', tmax: 2, tmin: -7, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 6, tmin: -4, pioggia: 'poca', nota: { it: 'Capodanno cinese (fine gennaio-febbraio): treni esauriti e siti pieni', en: 'Chinese New Year (late Jan-Feb): trains sold out, sites packed', es: 'Año Nuevo chino (fin de enero-febrero): trenes agotados y lugares llenos' } },
    { voto: 'buono', tmax: 13, tmin: 2, pioggia: 'poca' },
    { voto: 'ideale', tmax: 21, tmin: 9, pioggia: 'poca', nota: { it: 'Clima mite ovunque: inizia la stagione migliore', en: 'Mild weather everywhere: the best season begins', es: 'Clima templado en todo el país: empieza la mejor temporada' } },
    { voto: 'ideale', tmax: 27, tmin: 15, pioggia: 'poca', nota: { it: 'Primi giorni di maggio festivi e affollati', en: 'Early May is a holiday and crowded', es: 'Los primeros días de mayo son festivos y concurridos' } },
    { voto: 'buono', tmax: 31, tmin: 20, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 32, tmin: 23, pioggia: 'molta', nota: { it: 'Caldo afoso e piogge; al sud città sopra i 40 °C', en: 'Sultry heat and rain; southern cities top 40 °C', es: 'Calor bochornoso y lluvias; en el sur se superan los 40 °C' } },
    { voto: 'sconsigliato', tmax: 31, tmin: 22, pioggia: 'molta' },
    { voto: 'ideale', tmax: 27, tmin: 16, pioggia: 'media' },
    { voto: 'ideale', tmax: 19, tmin: 9, pioggia: 'poca', nota: { it: 'Evitare la Settimana d\'oro (1-7 ottobre): si muove tutto il Paese', en: 'Avoid Golden Week (1-7 October): the whole country travels', es: 'Evita la Semana Dorada (1-7 de octubre): viaja todo el país' } },
    { voto: 'buono', tmax: 10, tmin: 1, pioggia: 'poca' },
    { voto: 'buono', tmax: 4, tmin: -5, pioggia: 'poca' },
  ],
  costi: {
    economico: { dormire: 15, mangiare: 15, trasporti: 15, attivita: 15 },
    medio: { dormire: 35, mangiare: 25, trasporti: 25, attivita: 25 },
    comfort: { dormire: 70, mangiare: 45, trasporti: 40, attivita: 40 },
    nota: { it: 'Basso per quello che si vede; il conto sale con voli interni, parchi naturali e Hong Kong.', en: 'Cheap for what you see; domestic flights, nature parks and Hong Kong push it up.', es: 'Barato para lo que se ve; suben la cuenta los vuelos internos, los parques y Hong Kong.' },
  },
  aggiornato: '2026-11',
}
