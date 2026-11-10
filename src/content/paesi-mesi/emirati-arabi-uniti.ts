import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'emirati-arabi-uniti',
  zona: { it: 'Dubai e Abu Dhabi', en: 'Dubai and Abu Dhabi', es: 'Dubái y Abu Dabi' },
  mesi: [
    { voto: 'ideale', tmax: 24, tmin: 15, pioggia: 'poca' },
    { voto: 'ideale', tmax: 26, tmin: 16, pioggia: 'poca' },
    { voto: 'ideale', tmax: 29, tmin: 19, pioggia: 'poca' },
    { voto: 'buono', tmax: 34, tmin: 22, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 38, tmin: 26, pioggia: 'poca', nota: { it: 'Inizia il caldo estremo: oltre 38 °C di giorno', en: 'Extreme heat sets in: over 38 °C by day', es: 'Llega el calor extremo: más de 38 °C de día' } },
    { voto: 'sconsigliato', tmax: 40, tmin: 28, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 42, tmin: 31, pioggia: 'poca', nota: { it: 'Oltre 40 °C con umidità altissima: si vive al chiuso', en: 'Over 40 °C with very high humidity: life moves indoors', es: 'Más de 40 °C y humedad altísima: se vive en interiores' } },
    { voto: 'sconsigliato', tmax: 42, tmin: 32, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 40, tmin: 29, pioggia: 'poca' },
    { voto: 'buono', tmax: 36, tmin: 25, pioggia: 'poca' },
    { voto: 'ideale', tmax: 31, tmin: 21, pioggia: 'poca', nota: { it: 'Torna la stagione all\'aperto, tra 24 e 30 gradi', en: 'Outdoor season returns, 24-30 degrees', es: 'Vuelve la temporada al aire libre, entre 24 y 30 grados' } },
    { voto: 'ideale', tmax: 27, tmin: 17, pioggia: 'poca' },
  ],
  costi: {
    economico: { dormire: 30, mangiare: 20, trasporti: 10, attivita: 20 },
    medio: { dormire: 55, mangiare: 50, trasporti: 20, attivita: 50 },
    comfort: { dormire: 150, mangiare: 100, trasporti: 40, attivita: 100 },
    nota: { it: 'Con Dubai Connect o lo stopover Etihad l\'hotel è compreso; mangiare nei quartieri indiani costa poco.', en: 'With Dubai Connect or the Etihad stopover the hotel is included; Indian-quarter food is cheap.', es: 'Con Dubai Connect o el stopover de Etihad el hotel va incluido; comer en los barrios indios cuesta poco.' },
  },
  aggiornato: '2026-11',
}
