import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'estonia',
  zona: { it: "Tallinn", en: "Tallinn", es: "Tallin" },
  mesi: [
    { voto: 'sconsigliato', tmax: -1, tmin: -6, pioggia: 'media', nota: { it: "Sotto zero, neve frequente e poche ore di luce", en: "Below freezing, frequent snow and few daylight hours", es: "Bajo cero, nieve frecuente y pocas horas de luz" } },
    { voto: 'sconsigliato', tmax: -1, tmin: -6, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 3, tmin: -4, pioggia: 'poca' },
    { voto: 'buono', tmax: 10, tmin: 1, pioggia: 'poca' },
    { voto: 'ideale', tmax: 15, tmin: 5, pioggia: 'poca' },
    { voto: 'ideale', tmax: 19, tmin: 10, pioggia: 'media', nota: { it: "Quasi 19 ore di luce; Jaanipäev il 23-24 giugno", en: "Almost 19 hours of daylight; Midsummer on 23-24 June", es: "Casi 19 horas de luz; San Juan el 23-24 de junio" } },
    { voto: 'ideale', tmax: 22, tmin: 13, pioggia: 'media', nota: { it: "Il mese più caldo, Città Vecchia affollata", en: "Warmest month, crowded Old Town", es: "El mes más cálido, casco antiguo lleno" } },
    { voto: 'ideale', tmax: 21, tmin: 12, pioggia: 'media' },
    { voto: 'ideale', tmax: 16, tmin: 8, pioggia: 'media', nota: { it: "Mite e con meno turisti", en: "Mild, with fewer tourists", es: "Templado y con menos turistas" } },
    { voto: 'buono', tmax: 10, tmin: 4, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 4, tmin: 0, pioggia: 'media' },
    { voto: 'buono', tmax: 1, tmin: -3, pioggia: 'media', nota: { it: "Mercatino di Natale nella Città Vecchia", en: "Christmas market in the Old Town", es: "Mercado navideño en el casco antiguo" } },
  ],
  costi: {
    economico: { dormire: 25, mangiare: 30, trasporti: 5, attivita: 10 },
    medio: { dormire: 50, mangiare: 55, trasporti: 10, attivita: 20 },
    comfort: { dormire: 100, mangiare: 95, trasporti: 20, attivita: 35 },
    nota: { it: "Più economica dell'Europa occidentale, ma la Città Vecchia di Tallinn d'estate costa cara.", en: "Cheaper than Western Europe, but Tallinn's Old Town gets pricey in summer.", es: "Más barata que Europa occidental, pero el casco antiguo de Tallin es caro en verano." },
  },
  aggiornato: '2026-11',
}
