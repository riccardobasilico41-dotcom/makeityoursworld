import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'spagna',
  zona: { it: 'Andalusia (Siviglia); le altre regioni nelle note', en: 'Andalusia (Seville); other regions in the notes', es: 'Andalucía (Sevilla); las demás regiones en las notas' },
  mesi: [
    { voto: 'buono', tmax: 16, tmin: 6, pioggia: 'media', nota: { it: "Canarie a 20 °C: la meta spagnola dell'inverno", en: "Canaries at 20 °C: Spain's winter destination", es: 'Canarias a 20 °C: el destino español del invierno' } },
    { voto: 'buono', tmax: 18, tmin: 7, pioggia: 'poca' },
    { voto: 'ideale', tmax: 22, tmin: 10, pioggia: 'poca' },
    { voto: 'ideale', tmax: 24, tmin: 12, pioggia: 'media', nota: { it: 'Settimana Santa (marzo o aprile): Siviglia piena e cara', en: 'Holy Week (March or April): Seville packed and pricey', es: 'Semana Santa (marzo o abril): Sevilla llena y cara' } },
    { voto: 'ideale', tmax: 28, tmin: 15, pioggia: 'poca', nota: { it: 'Patios di Córdoba nella prima metà del mese', en: 'Córdoba Patios festival in the first half of the month', es: 'Patios de Córdoba en la primera mitad del mes' } },
    { voto: 'sconsigliato', tmax: 33, tmin: 19, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 36, tmin: 21, pioggia: 'poca', nota: { it: 'Siviglia e Córdoba oltre 36 °C: meglio il Nord', en: 'Seville and Córdoba above 36 °C: head north instead', es: 'Sevilla y Córdoba por encima de 36 °C: mejor el Norte' } },
    { voto: 'sconsigliato', tmax: 36, tmin: 21, pioggia: 'poca', nota: { it: 'Baleari al massimo di prezzi e folla', en: 'Balearics at peak prices and crowds', es: 'Baleares en su máximo de precios y gente' } },
    { voto: 'ideale', tmax: 32, tmin: 18, pioggia: 'poca' },
    { voto: 'ideale', tmax: 26, tmin: 15, pioggia: 'media' },
    { voto: 'buono', tmax: 20, tmin: 10, pioggia: 'media' },
    { voto: 'buono', tmax: 17, tmin: 7, pioggia: 'media' },
  ],
  costi: {
    economico: { dormire: 30, mangiare: 25, trasporti: 10, attivita: 15 },
    medio: { dormire: 70, mangiare: 45, trasporti: 15, attivita: 30 },
    comfort: { dormire: 130, mangiare: 80, trasporti: 25, attivita: 50 },
    nota: { it: "Andalusia e Canarie nella media spagnola; Baleari d'estate e Paesi Baschi sono le zone più care.", en: 'Andalusia and the Canaries are average for Spain; the Balearics in summer and the Basque Country cost most.', es: 'Andalucía y Canarias en la media española; Baleares en verano y el País Vasco son lo más caro.' },
  },
  aggiornato: '2026-11',
}
