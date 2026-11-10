import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'transilvania',
  zona: { it: 'Brașov e Carpazi', en: 'Brașov and the Carpathians', es: 'Brașov y los Cárpatos' },
  mesi: [
    { voto: 'sconsigliato', tmax: 2, tmin: -6, pioggia: 'poca', nota: { it: 'Notti sotto zero; sci a Poiana Brașov', en: 'Sub-zero nights; skiing at Poiana Brașov', es: 'Noches bajo cero; esquí en Poiana Brașov' } },
    { voto: 'sconsigliato', tmax: 6, tmin: -4, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 11, tmin: -1, pioggia: 'poca' },
    { voto: 'buono', tmax: 16, tmin: 3, pioggia: 'poca' },
    { voto: 'ideale', tmax: 20, tmin: 8, pioggia: 'media' },
    { voto: 'ideale', tmax: 25, tmin: 12, pioggia: 'media' },
    { voto: 'ideale', tmax: 27, tmin: 13, pioggia: 'media', nota: { it: 'Transfăgărășan aperta, di norma da luglio a ottobre', en: 'Transfăgărășan open, normally July to October', es: 'Transfăgărășan abierta, normalmente de julio a octubre' } },
    { voto: 'ideale', tmax: 28, tmin: 13, pioggia: 'media' },
    { voto: 'ideale', tmax: 23, tmin: 9, pioggia: 'poca' },
    { voto: 'ideale', tmax: 16, tmin: 4, pioggia: 'poca', nota: { it: 'Foliage sui Carpazi e Halloween al Castello di Bran', en: 'Carpathian foliage and Halloween at Bran Castle', es: 'Follaje en los Cárpatos y Halloween en el castillo de Bran' } },
    { voto: 'buono', tmax: 10, tmin: 0, pioggia: 'poca', nota: { it: "Freddo, spesso pioggia o neve: il meteo cambia l'itinerario", en: 'Cold, often rain or snow: weather can change the route', es: 'Frío, a menudo lluvia o nieve: el tiempo cambia la ruta' } },
    { voto: 'buono', tmax: 4, tmin: -3, pioggia: 'poca', nota: { it: 'Mercatini di Natale a Sibiu e Brașov', en: 'Christmas markets in Sibiu and Brașov', es: 'Mercadillos navideños en Sibiu y Brașov' } },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 10, attivita: 10 },
    medio: { dormire: 35, mangiare: 35, trasporti: 20, attivita: 20 },
    comfort: { dormire: 80, mangiare: 60, trasporti: 30, attivita: 30 },
    nota: { it: "Tra le mete più economiche d'Europa; serve contante in lei per guide e locali piccoli.", en: "Among Europe's cheapest destinations; carry cash in lei for guides and small places.", es: 'De los destinos más baratos de Europa; hace falta efectivo en lei para guías y locales pequeños.' },
  },
  aggiornato: '2026-11',
}
