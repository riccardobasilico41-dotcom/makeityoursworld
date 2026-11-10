import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'italia',
  zona: {"it": "Roma e città d'arte del centro", "en": "Rome and the central art cities", "es": "Roma y las ciudades de arte del centro"},
  mesi: [
    { voto: 'buono', tmax: 13, tmin: 3, pioggia: 'media' },
    { voto: 'buono', tmax: 14, tmin: 3, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 6, pioggia: 'media', nota: {"it": "Dolomiti: neve e luce migliori; città d'arte senza code", "en": "Dolomites: best snow and light; art cities without queues", "es": "Dolomitas: la mejor nieve y luz; ciudades de arte sin colas"} },
    { voto: 'buono', tmax: 20, tmin: 8, pioggia: 'media' },
    { voto: 'buono', tmax: 25, tmin: 13, pioggia: 'media' },
    { voto: 'buono', tmax: 30, tmin: 17, pioggia: 'poca' },
    { voto: 'buono', tmax: 33, tmin: 19, pioggia: 'poca', nota: {"it": "Dolomiti: rifugi aperti da fine giugno a metà settembre", "en": "Dolomites: mountain huts open late June to mid-September", "es": "Dolomitas: refugios abiertos de finales de junio a mediados de septiembre"} },
    { voto: 'sconsigliato', tmax: 33, tmin: 20, pioggia: 'poca', nota: {"it": "Si sposta tutto il Paese: prezzi alti e folla ovunque", "en": "The whole country is on holiday: high prices, crowds everywhere", "es": "Todo el país de vacaciones: precios altos y gente por todas partes"} },
    { voto: 'ideale', tmax: 28, tmin: 16, pioggia: 'media', nota: {"it": "Isole ancora calde e inizio vendemmia, senza la folla d'agosto", "en": "Islands still warm and harvest begins, without August crowds", "es": "Islas aún cálidas y comienza la vendimia, sin el gentío de agosto"} },
    { voto: 'ideale', tmax: 23, tmin: 12, pioggia: 'media' },
    { voto: 'buono', tmax: 17, tmin: 8, pioggia: 'molta' },
    { voto: 'buono', tmax: 13, tmin: 4, pioggia: 'media', nota: {"it": "Stagione sci da dicembre a inizio aprile", "en": "Ski season from December to early April", "es": "Temporada de esquí de diciembre a principios de abril"} },
  ],
  costi: {
    economico: { dormire: 40, mangiare: 30, trasporti: 15, attivita: 15 },
    medio: { dormire: 80, mangiare: 55, trasporti: 25, attivita: 30 },
    comfort: { dormire: 170, mangiare: 90, trasporti: 40, attivita: 50 },
    nota: {"it": "Conta soprattutto il periodo: Dolomiti e città d'arte in alta stagione costano molto, l'Appennino interno poco.", "en": "Timing matters most: the Dolomites and art cities are pricey in high season, the inland Apennines cheap.", "es": "Lo que más pesa es la época: Dolomitas y ciudades de arte son caras en temporada alta, los Apeninos del interior baratos."},
  },
  aggiornato: '2026-11',
}
