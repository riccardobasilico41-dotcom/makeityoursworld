import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'danimarca',
  zona: { it: 'Copenaghen', en: 'Copenhagen', es: 'Copenhague' },
  mesi: [
    { voto: 'sconsigliato', tmax: 3, tmin: 1, pioggia: 'media', nota: { it: 'Freddo umido e buio già nel pomeriggio', en: 'Damp cold and dark by mid-afternoon', es: 'Frío húmedo y oscuro ya por la tarde' } },
    { voto: 'sconsigliato', tmax: 3, tmin: 1, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 6, tmin: 2, pioggia: 'poca' },
    { voto: 'buono', tmax: 11, tmin: 4, pioggia: 'poca' },
    { voto: 'ideale', tmax: 16, tmin: 8, pioggia: 'poca' },
    { voto: 'ideale', tmax: 19, tmin: 12, pioggia: 'media', nota: { it: 'Giornate lunghissime, il sole tramonta dopo le 22', en: 'Very long days, sunset after 10 pm', es: 'Días larguísimos, el sol se pone después de las 22' } },
    { voto: 'ideale', tmax: 23, tmin: 14, pioggia: 'media', nota: { it: 'Alta stagione: più caro e affollato', en: 'Peak season: pricier and busier', es: 'Temporada alta: más cara y concurrida' } },
    { voto: 'ideale', tmax: 21, tmin: 14, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 11, pioggia: 'media' },
    { voto: 'buono', tmax: 12, tmin: 7, pioggia: 'media', nota: { it: 'Meno folla e prezzi più bassi, clima ancora gradevole', en: 'Fewer crowds and lower prices, still pleasant', es: 'Menos gente y precios más bajos, clima aún agradable' } },
    { voto: 'sconsigliato', tmax: 8, tmin: 4, pioggia: 'media' },
    { voto: 'buono', tmax: 5, tmin: 2, pioggia: 'media', nota: { it: 'Tivoli e mercatini di Natale riaperti da fine novembre', en: 'Tivoli and Christmas markets open from late November', es: 'Tivoli y mercadillos navideños abiertos desde finales de noviembre' } },
  ],
  costi: {
    economico: { dormire: 45, mangiare: 40, trasporti: 10, attivita: 20 },
    medio: { dormire: 100, mangiare: 80, trasporti: 15, attivita: 35 },
    comfort: { dormire: 180, mangiare: 140, trasporti: 25, attivita: 55 },
    nota: { it: "Tra le città più care d'Europa: birra 7-11 €, cena media 30-45 €; supermercati e street food aiutano.", en: "Among Europe's most expensive cities: beer €7-11, mid-range dinner €30-45; supermarkets and street food help.", es: 'Entre las ciudades más caras de Europa: cerveza 7-11 €, cena media 30-45 €; supermercados y street food ayudan.' },
  },
  aggiornato: '2026-11',
}
