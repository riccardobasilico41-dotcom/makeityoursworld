import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'new-york',
  mesi: [
    { voto: 'sconsigliato', tmax: 4, tmin: -2, pioggia: 'media', nota: { it: "Freddo vero e possibili tempeste di neve", en: "Real cold and possible snowstorms", es: "Frío de verdad y posibles tormentas de nieve" } },
    { voto: 'sconsigliato', tmax: 6, tmin: -1, pioggia: 'media' },
    { voto: 'buono', tmax: 10, tmin: 2, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 8, pioggia: 'media' },
    { voto: 'ideale', tmax: 22, tmin: 13, pioggia: 'media' },
    { voto: 'ideale', tmax: 27, tmin: 18, pioggia: 'media' },
    { voto: 'buono', tmax: 29, tmin: 21, pioggia: 'media', nota: { it: "Afa e umidità, temporali pomeridiani", en: "Heat and humidity, afternoon thunderstorms", es: "Bochorno y humedad, tormentas por la tarde" } },
    { voto: 'buono', tmax: 29, tmin: 21, pioggia: 'media' },
    { voto: 'ideale', tmax: 25, tmin: 17, pioggia: 'media', nota: { it: "Corsa ai playoff MLB e playoff WNBA delle Liberty", en: "MLB playoff race and Liberty WNBA playoffs", es: "Carrera a los playoffs de la MLB y playoffs WNBA de las Liberty" } },
    { voto: 'ideale', tmax: 18, tmin: 11, pioggia: 'media', nota: { it: "Clima fresco e inizio della stagione NBA", en: "Crisp weather and the NBA season starts", es: "Clima fresco e inicio de la temporada NBA" } },
    { voto: 'buono', tmax: 12, tmin: 6, pioggia: 'media' },
    { voto: 'buono', tmax: 7, tmin: 1, pioggia: 'media', nota: { it: "Luci di Natale e Rockefeller Center; hotel al massimo", en: "Christmas lights and Rockefeller Center; hotels at their priciest", es: "Luces de Navidad y Rockefeller Center; hoteles al máximo" } },
  ],
  costi: {
    economico: { dormire: 70, mangiare: 40, trasporti: 10, attivita: 25 },
    medio: { dormire: 140, mangiare: 80, trasporti: 15, attivita: 45 },
    comfort: { dormire: 260, mangiare: 130, trasporti: 35, attivita: 80 },
    nota: { it: "Gli hotel sono la voce più pesante; tasse e mance del 18-20 % non sono nei prezzi esposti.", en: "Hotels are the heaviest cost; taxes and 18-20% tips are not in the displayed prices.", es: "Los hoteles son lo que más pesa; impuestos y propinas del 18-20 % no van en los precios." },
  },
  aggiornato: '2026-11',
}
