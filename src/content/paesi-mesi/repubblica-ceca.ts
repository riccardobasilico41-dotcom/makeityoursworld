import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'repubblica-ceca',
  zona: { it: "Praga", en: "Prague", es: "Praga" },
  mesi: [
    { voto: 'sconsigliato', tmax: 4, tmin: -1, pioggia: 'poca', nota: { it: "Spesso sotto zero, a volte neve", en: "Often below freezing, sometimes snow", es: "A menudo bajo cero, a veces nieve" } },
    { voto: 'sconsigliato', tmax: 6, tmin: 0, pioggia: 'poca' },
    { voto: 'buono', tmax: 10, tmin: 3, pioggia: 'poca' },
    { voto: 'ideale', tmax: 16, tmin: 7, pioggia: 'poca', nota: { it: "Clima mite, code ancora gestibili", en: "Mild weather, queues still manageable", es: "Clima suave, colas aún llevaderas" } },
    { voto: 'ideale', tmax: 21, tmin: 11, pioggia: 'media' },
    { voto: 'buono', tmax: 24, tmin: 15, pioggia: 'media' },
    { voto: 'buono', tmax: 27, tmin: 17, pioggia: 'media', nota: { it: "Ponte Carlo e Piazza della Città Vecchia al limite", en: "Charles Bridge and Old Town Square at capacity", es: "Puente de Carlos y plaza de la Ciudad Vieja al límite" } },
    { voto: 'buono', tmax: 26, tmin: 16, pioggia: 'media' },
    { voto: 'ideale', tmax: 20, tmin: 12, pioggia: 'poca' },
    { voto: 'ideale', tmax: 14, tmin: 8, pioggia: 'poca' },
    { voto: 'buono', tmax: 9, tmin: 4, pioggia: 'poca' },
    { voto: 'buono', tmax: 5, tmin: 1, pioggia: 'poca', nota: { it: "Mercatini di Natale in Città Vecchia e Venceslao", en: "Christmas markets in Old Town and Wenceslas squares", es: "Mercados navideños en la Ciudad Vieja y Wenceslao" } },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 5, attivita: 10 },
    medio: { dormire: 55, mangiare: 35, trasporti: 10, attivita: 20 },
    comfort: { dormire: 110, mangiare: 60, trasporti: 15, attivita: 30 },
    nota: { it: "Più economica dell'Europa occidentale, ma il centro di Praga ha prezzi da capitale: occhio ai conti.", en: "Cheaper than Western Europe, but central Prague charges capital-city prices: check the bill.", es: "Más barata que Europa occidental, pero el centro de Praga tiene precios de capital: ojo a la cuenta." },
  },
  aggiornato: '2026-11',
}
