import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'germania',
  zona: { it: "Berlino", en: "Berlin", es: "Berlín" },
  mesi: [
    { voto: 'sconsigliato', tmax: 3, tmin: -2, pioggia: 'poca', nota: { it: "Spesso vicino o sotto zero, giornate cortissime", en: "Often near or below freezing, very short days", es: "A menudo cerca o bajo cero, días muy cortos" } },
    { voto: 'sconsigliato', tmax: 5, tmin: -2, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 9, tmin: 0, pioggia: 'poca' },
    { voto: 'buono', tmax: 15, tmin: 4, pioggia: 'poca' },
    { voto: 'ideale', tmax: 20, tmin: 8, pioggia: 'media' },
    { voto: 'ideale', tmax: 23, tmin: 12, pioggia: 'media' },
    { voto: 'ideale', tmax: 25, tmin: 14, pioggia: 'media', nota: { it: "Il mese più caldo e affollato, Reichstag da prenotare presto", en: "Warmest and busiest month, book the Reichstag early", es: "El mes más cálido y concurrido, reserva pronto el Reichstag" } },
    { voto: 'ideale', tmax: 25, tmin: 14, pioggia: 'media' },
    { voto: 'ideale', tmax: 20, tmin: 10, pioggia: 'poca' },
    { voto: 'buono', tmax: 14, tmin: 6, pioggia: 'poca', nota: { it: "Meno folla, clima ancora gestibile", en: "Fewer crowds, weather still manageable", es: "Menos gente, clima todavía llevadero" } },
    { voto: 'sconsigliato', tmax: 8, tmin: 2, pioggia: 'poca' },
    { voto: 'buono', tmax: 4, tmin: -1, pioggia: 'poca', nota: { it: "Mercatini di Natale in decine di punti della città", en: "Christmas markets in dozens of spots across the city", es: "Mercados navideños en decenas de puntos de la ciudad" } },
  ],
  costi: {
    economico: { dormire: 30, mangiare: 30, trasporti: 15, attivita: 15 },
    medio: { dormire: 65, mangiare: 55, trasporti: 20, attivita: 25 },
    comfort: { dormire: 120, mangiare: 95, trasporti: 30, attivita: 40 },
    nota: { it: "Tra le capitali più economiche dell'Europa occidentale; molti luoghi della memoria sono gratuiti.", en: "One of Western Europe's cheaper capitals; many memorial sites are free.", es: "Una de las capitales más baratas de Europa occidental; muchos lugares de memoria son gratuitos." },
  },
  aggiornato: '2026-11',
}
