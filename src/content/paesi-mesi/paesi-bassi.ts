import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'paesi-bassi',
  zona: { it: "Amsterdam", en: "Amsterdam", es: "Ámsterdam" },
  mesi: [
    { voto: 'sconsigliato', tmax: 6, tmin: 1, pioggia: 'media', nota: { it: "Freddo, vento e buio presto, ma code corte", en: "Cold, windy and dark early, but short queues", es: "Frío, viento y oscurece pronto, pero colas cortas" } },
    { voto: 'sconsigliato', tmax: 7, tmin: 1, pioggia: 'media' },
    { voto: 'buono', tmax: 10, tmin: 3, pioggia: 'media' },
    { voto: 'ideale', tmax: 14, tmin: 5, pioggia: 'poca', nota: { it: "Tulipani al Keukenhof; King's Day il 27 aprile", en: "Tulips at Keukenhof; King's Day on 27 April", es: "Tulipanes en Keukenhof; Día del Rey el 27 de abril" } },
    { voto: 'ideale', tmax: 18, tmin: 9, pioggia: 'media' },
    { voto: 'buono', tmax: 20, tmin: 11, pioggia: 'media' },
    { voto: 'buono', tmax: 23, tmin: 14, pioggia: 'media', nota: { it: "Alta stagione: canali e musei pieni, hotel cari", en: "High season: busy canals and museums, pricey hotels", es: "Temporada alta: canales y museos llenos, hoteles caros" } },
    { voto: 'buono', tmax: 22, tmin: 13, pioggia: 'molta' },
    { voto: 'ideale', tmax: 19, tmin: 11, pioggia: 'media', nota: { it: "Clima ancora mite, meno folla", en: "Still mild, smaller crowds", es: "Todavía templado, menos gente" } },
    { voto: 'ideale', tmax: 15, tmin: 8, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 10, tmin: 5, pioggia: 'media' },
    { voto: 'buono', tmax: 7, tmin: 2, pioggia: 'media', nota: { it: "Mercatini di Natale e Amsterdam Light Festival", en: "Christmas markets and the Amsterdam Light Festival", es: "Mercados navideños y Amsterdam Light Festival" } },
  ],
  costi: {
    economico: { dormire: 50, mangiare: 35, trasporti: 10, attivita: 20 },
    medio: { dormire: 90, mangiare: 60, trasporti: 15, attivita: 35 },
    comfort: { dormire: 170, mangiare: 100, trasporti: 25, attivita: 55 },
    nota: { it: "Amsterdam è tra le città più care d'Europa per dormire; musei e mezzi costano il giusto.", en: "Amsterdam is one of Europe's priciest cities to sleep in; museums and transport are fair.", es: "Ámsterdam es de las ciudades más caras de Europa para dormir; museos y transporte, razonables." },
  },
  aggiornato: '2026-11',
}
