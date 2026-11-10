import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'irlanda-del-nord',
  zona: { it: 'Belfast e costa di Antrim', en: 'Belfast and the Antrim coast', es: 'Belfast y la costa de Antrim' },
  mesi: [
    { voto: 'sconsigliato', tmax: 8, tmin: 2, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 9, tmin: 2, pioggia: 'media' },
    { voto: 'buono', tmax: 11, tmin: 3, pioggia: 'media' },
    { voto: 'buono', tmax: 13, tmin: 5, pioggia: 'media' },
    { voto: 'ideale', tmax: 16, tmin: 7, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 10, pioggia: 'media', nota: { it: 'Giornate lunghissime: luce fino alle 22 passate', en: 'Very long days: light until after 10 pm', es: 'Días larguísimos: luz hasta pasadas las 22' } },
    { voto: 'ideale', tmax: 20, tmin: 12, pioggia: 'media', nota: { it: 'Intorno al 12: parate e falò della tradizione orangista', en: 'Around the 12th: Orange Order parades and bonfires', es: 'Alrededor del 12: desfiles y hogueras de la tradición orangista' } },
    { voto: 'ideale', tmax: 19, tmin: 12, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 10, pioggia: 'media' },
    { voto: 'buono', tmax: 14, tmin: 7, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 11, tmin: 4, pioggia: 'molta', nota: { it: 'Il mese più piovoso, con giornate già corte', en: 'The wettest month, with days already short', es: 'El mes más lluvioso, con días ya cortos' } },
    { voto: 'sconsigliato', tmax: 8, tmin: 2, pioggia: 'molta', nota: { it: 'Giornate cortissime: buio verso le 16', en: 'Very short days: dark around 4 pm', es: 'Días cortísimos: oscurece hacia las 16' } },
  ],
  costi: {
    economico: { dormire: 25, mangiare: 30, trasporti: 15, attivita: 10 },
    medio: { dormire: 50, mangiare: 50, trasporti: 30, attivita: 20 },
    comfort: { dormire: 100, mangiare: 85, trasporti: 45, attivita: 35 },
    nota: { it: 'È Regno Unito: si paga in sterline e serve l\'ETA da 20 £; l\'auto a noleggio pesa sui trasporti.', en: 'It\'s the UK: pounds and a £20 ETA; a hire car weighs on transport.', es: 'Es Reino Unido: se paga en libras y hace falta la ETA de 20 £; el coche de alquiler pesa en transporte.' },
  },
  aggiornato: '2026-11',
}
