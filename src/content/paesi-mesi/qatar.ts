import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'qatar',
  zona: { it: 'Doha', en: 'Doha', es: 'Doha' },
  mesi: [
    { voto: 'ideale', tmax: 23, tmin: 15, pioggia: 'poca' },
    { voto: 'ideale', tmax: 24, tmin: 16, pioggia: 'poca' },
    { voto: 'ideale', tmax: 28, tmin: 19, pioggia: 'poca' },
    { voto: 'buono', tmax: 33, tmin: 23, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 39, tmin: 28, pioggia: 'poca', nota: { it: 'Arriva il caldo estremo, vicino ai 40 °C', en: 'Extreme heat arrives, near 40 °C', es: 'Llega el calor extremo, cerca de 40 °C' } },
    { voto: 'sconsigliato', tmax: 42, tmin: 31, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 42, tmin: 32, pioggia: 'poca', nota: { it: 'Oltre 40 °C con umidità costiera: impossibile stare fuori', en: 'Over 40 °C with coastal humidity: impossible outdoors', es: 'Más de 40 °C con humedad costera: imposible estar fuera' } },
    { voto: 'sconsigliato', tmax: 41, tmin: 32, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 39, tmin: 30, pioggia: 'poca' },
    { voto: 'buono', tmax: 36, tmin: 27, pioggia: 'poca' },
    { voto: 'ideale', tmax: 30, tmin: 22, pioggia: 'poca', nota: { it: 'Torna la stagione all\'aperto: deserto e Corniche', en: 'Outdoor season returns: desert and Corniche', es: 'Vuelve la temporada al aire libre: desierto y Corniche' } },
    { voto: 'ideale', tmax: 25, tmin: 17, pioggia: 'poca', nota: { it: '18 dicembre: festa nazionale', en: '18 December: National Day', es: '18 de diciembre: fiesta nacional' } },
  ],
  costi: {
    economico: { dormire: 25, mangiare: 15, trasporti: 5, attivita: 10 },
    medio: { dormire: 30, mangiare: 40, trasporti: 15, attivita: 30 },
    comfort: { dormire: 80, mangiare: 90, trasporti: 35, attivita: 80 },
    nota: { it: 'Con lo stopover Qatar Airways l\'hotel costa 15-30 € a persona a notte; musei e souq costano poco o niente.', en: 'With the Qatar Airways stopover, hotels cost €15-30 per person a night; museums and souqs are cheap or free.', es: 'Con el stopover de Qatar Airways el hotel cuesta 15-30 € por persona y noche; museos y zocos, poco o nada.' },
  },
  aggiornato: '2026-11',
}
