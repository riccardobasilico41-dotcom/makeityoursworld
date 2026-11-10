import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'svizzera',
  zona: { it: "Interlaken e Oberland bernese (577 m)", en: "Interlaken and the Bernese Oberland (577 m)", es: "Interlaken y el Oberland bernés (577 m)" },
  mesi: [
    { voto: 'sconsigliato', tmax: 3, tmin: -3, pioggia: 'media', nota: { it: "Stagione sciistica: ottima per sciare, passi alpini chiusi", en: "Ski season: great for skiing, mountain passes closed", es: "Temporada de esquí: ideal para esquiar, puertos cerrados" } },
    { voto: 'sconsigliato', tmax: 5, tmin: -3, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 11, tmin: 1, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 15, tmin: 4, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 19, tmin: 8, pioggia: 'molta', nota: { it: "Passi d'alta quota ancora chiusi", en: "High mountain passes still closed", es: "Los puertos de alta montaña siguen cerrados" } },
    { voto: 'buono', tmax: 22, tmin: 12, pioggia: 'molta', nota: { it: "Meno gente, ma neve possibile sui passi più alti", en: "Fewer people, but snow possible on the highest passes", es: "Menos gente, pero posible nieve en los puertos más altos" } },
    { voto: 'ideale', tmax: 24, tmin: 14, pioggia: 'molta', nota: { it: "Passi tutti aperti; temporali pomeridiani frequenti", en: "All passes open; frequent afternoon thunderstorms", es: "Todos los puertos abiertos; tormentas frecuentes por la tarde" } },
    { voto: 'ideale', tmax: 24, tmin: 14, pioggia: 'molta' },
    { voto: 'ideale', tmax: 19, tmin: 10, pioggia: 'media' },
    { voto: 'buono', tmax: 14, tmin: 6, pioggia: 'media', nota: { it: "I passi alti iniziano a chiudere", en: "The high passes start to close", es: "Los puertos altos empiezan a cerrar" } },
    { voto: 'sconsigliato', tmax: 8, tmin: 1, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 4, tmin: -2, pioggia: 'media' },
  ],
  costi: {
    economico: { dormire: 45, mangiare: 35, trasporti: 25, attivita: 30 },
    medio: { dormire: 100, mangiare: 75, trasporti: 45, attivita: 60 },
    comfort: { dormire: 200, mangiare: 130, trasporti: 70, attivita: 100 },
    nota: { it: "Tra i Paesi più cari d'Europa: in van si spendono 150-200 CHF al giorno in due, funivie escluse.", en: "Among Europe's priciest countries: a van trip runs 150-200 CHF a day for two, before cable cars.", es: "Entre los países más caros de Europa: en furgoneta, 150-200 CHF al día para dos, sin teleféricos." },
  },
  aggiornato: '2026-11',
}
