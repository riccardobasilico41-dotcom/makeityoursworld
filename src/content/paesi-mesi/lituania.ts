import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'lituania',
  zona: { it: "Vilnius", en: "Vilnius", es: "Vilna" },
  mesi: [
    { voto: 'sconsigliato', tmax: -2, tmin: -6, pioggia: 'media', nota: { it: "Freddo pungente sotto zero, neve frequente", en: "Biting cold below freezing, frequent snow", es: "Frío intenso bajo cero, nieve frecuente" } },
    { voto: 'sconsigliato', tmax: 0, tmin: -6, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 5, tmin: -3, pioggia: 'poca' },
    { voto: 'buono', tmax: 13, tmin: 3, pioggia: 'poca' },
    { voto: 'ideale', tmax: 19, tmin: 8, pioggia: 'media' },
    { voto: 'ideale', tmax: 22, tmin: 11, pioggia: 'media', nota: { it: "Fino a 17 ore di luce; Joninės il 23-24 giugno", en: "Up to 17 hours of daylight; Joninės on 23-24 June", es: "Hasta 17 horas de luz; Joninės el 23-24 de junio" } },
    { voto: 'ideale', tmax: 24, tmin: 14, pioggia: 'media' },
    { voto: 'ideale', tmax: 23, tmin: 13, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 9, pioggia: 'media', nota: { it: "Mite e con meno turisti, prezzi più bassi", en: "Mild, with fewer tourists and lower prices", es: "Templado, con menos turistas y precios más bajos" } },
    { voto: 'buono', tmax: 10, tmin: 4, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 4, tmin: 0, pioggia: 'media' },
    { voto: 'buono', tmax: 0, tmin: -4, pioggia: 'media', nota: { it: "Mercatino e albero di Natale in piazza della Cattedrale", en: "Christmas market and tree on Cathedral Square", es: "Mercado y árbol de Navidad en la plaza de la Catedral" } },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 5, attivita: 10 },
    medio: { dormire: 40, mangiare: 35, trasporti: 10, attivita: 15 },
    comfort: { dormire: 80, mangiare: 65, trasporti: 15, attivita: 30 },
    nota: { it: "Tra le capitali più economiche dell'eurozona; la Città Vecchia si gira tutta a piedi.", en: "One of the eurozone's cheapest capitals; the Old Town is all walkable.", es: "Una de las capitales más baratas de la eurozona; el casco antiguo se recorre a pie." },
  },
  aggiornato: '2026-11',
}
