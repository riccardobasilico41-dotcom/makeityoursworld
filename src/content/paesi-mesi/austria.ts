import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'austria',
  zona: { it: 'Vienna', en: 'Vienna', es: 'Viena' },
  mesi: [
    { voto: 'buono', tmax: 4, tmin: 0, pioggia: 'poca', nota: { it: 'Freddo vicino allo zero, ma musei e caffè senza code', en: 'Near-freezing cold, but museums and cafés without queues', es: 'Frío cercano a cero, pero museos y cafés sin colas' } },
    { voto: 'buono', tmax: 7, tmin: 1, pioggia: 'poca' },
    { voto: 'buono', tmax: 11, tmin: 4, pioggia: 'poca' },
    { voto: 'ideale', tmax: 17, tmin: 9, pioggia: 'poca' },
    { voto: 'ideale', tmax: 21, tmin: 12, pioggia: 'media', nota: { it: 'Clima mite e meno folla a Schönbrunn', en: 'Mild weather and smaller crowds at Schönbrunn', es: 'Clima templado y menos gente en Schönbrunn' } },
    { voto: 'buono', tmax: 26, tmin: 16, pioggia: 'media' },
    { voto: 'buono', tmax: 27, tmin: 18, pioggia: 'media', nota: { it: 'Alta stagione: caldo e folla nei punti più turistici', en: 'Peak season: heat and crowds at the main sights', es: 'Temporada alta: calor y gente en los puntos más turísticos' } },
    { voto: 'buono', tmax: 27, tmin: 18, pioggia: 'media' },
    { voto: 'ideale', tmax: 22, tmin: 14, pioggia: 'media' },
    { voto: 'ideale', tmax: 15, tmin: 9, pioggia: 'poca' },
    { voto: 'buono', tmax: 10, tmin: 5, pioggia: 'poca' },
    { voto: 'buono', tmax: 5, tmin: 1, pioggia: 'poca', nota: { it: "Mercatini di Natale, tra i più noti d'Europa", en: 'Christmas markets, among the best known in Europe', es: 'Mercadillos navideños, de los más famosos de Europa' } },
  ],
  costi: {
    economico: { dormire: 35, mangiare: 35, trasporti: 15, attivita: 15 },
    medio: { dormire: 75, mangiare: 65, trasporti: 15, attivita: 30 },
    comfort: { dormire: 150, mangiare: 110, trasporti: 25, attivita: 50 },
    nota: { it: 'Nella media europea: trasporti economici, musei principali sui 20-25 €.', en: 'Around the European average: cheap transport, main museums about €20-25.', es: 'En la media europea: transporte barato, museos principales a unos 20-25 €.' },
  },
  aggiornato: '2026-11',
}
