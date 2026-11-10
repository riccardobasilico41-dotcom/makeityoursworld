import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'polonia',
  zona: { it: 'Cracovia', en: 'Kraków', es: 'Cracovia' },
  mesi: [
    { voto: 'buono', tmax: 2, tmin: -4, pioggia: 'poca', nota: { it: 'Spesso sotto zero, neve possibile, ma meno code', en: 'Often below freezing, snow possible, but fewer queues', es: 'A menudo bajo cero, posible nieve, pero menos colas' } },
    { voto: 'buono', tmax: 4, tmin: -3, pioggia: 'poca' },
    { voto: 'buono', tmax: 9, tmin: 0, pioggia: 'poca' },
    { voto: 'ideale', tmax: 16, tmin: 5, pioggia: 'poca' },
    { voto: 'ideale', tmax: 21, tmin: 10, pioggia: 'media', nota: { it: 'Clima mite e slot di Auschwitz più facili', en: 'Mild weather and easier Auschwitz slots', es: 'Clima templado y turnos de Auschwitz más fáciles' } },
    { voto: 'buono', tmax: 24, tmin: 13, pioggia: 'media' },
    { voto: 'buono', tmax: 26, tmin: 15, pioggia: 'media' },
    { voto: 'buono', tmax: 26, tmin: 14, pioggia: 'media', nota: { it: 'Pieno di visitatori: slot di Auschwitz esauriti presto', en: 'Packed: Auschwitz slots sell out early', es: 'Lleno de visitantes: los turnos de Auschwitz se agotan pronto' } },
    { voto: 'ideale', tmax: 20, tmin: 10, pioggia: 'media' },
    { voto: 'ideale', tmax: 15, tmin: 6, pioggia: 'media' },
    { voto: 'buono', tmax: 8, tmin: 2, pioggia: 'poca' },
    { voto: 'buono', tmax: 3, tmin: -2, pioggia: 'poca', nota: { it: 'Mercatino di Natale sul Rynek Główny', en: 'Christmas market on the Rynek Główny', es: 'Mercadillo navideño en la Rynek Główny' } },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 5, attivita: 10 },
    medio: { dormire: 40, mangiare: 35, trasporti: 10, attivita: 25 },
    comfort: { dormire: 85, mangiare: 60, trasporti: 15, attivita: 35 },
    nota: { it: "Tra le mete più economiche d'Europa; Wieliczka (circa 25 €) è il biglietto più caro, Auschwitz è gratuito.", en: "Among Europe's cheapest destinations; Wieliczka (about €25) is the priciest ticket, Auschwitz is free.", es: 'De los destinos más baratos de Europa; Wieliczka (unos 25 €) es la entrada más cara, Auschwitz es gratis.' },
  },
  aggiornato: '2026-11',
}
