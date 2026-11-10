import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'arabia-saudita',
  zona: {"it": "Riyadh e interno (AlUla simile)", "en": "Riyadh and the interior (AlUla similar)", "es": "Riad y el interior (AlUla similar)"},
  mesi: [
    { voto: 'ideale', tmax: 20, tmin: 9, pioggia: 'poca', nota: {"it": "AlUla e il deserto al meglio, notti fresche", "en": "AlUla and the desert at their best, cool nights", "es": "AlUla y el desierto en su mejor momento, noches frescas"} },
    { voto: 'ideale', tmax: 24, tmin: 12, pioggia: 'poca' },
    { voto: 'buono', tmax: 28, tmin: 15, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 34, tmin: 21, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 39, tmin: 26, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 43, tmin: 28, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 43, tmin: 29, pioggia: 'poca', nota: {"it": "Oltre 43 °C all'interno; fresco solo sulle montagne dell'Asir", "en": "Over 43 °C inland; cool only in the Asir mountains", "es": "Más de 43 °C en el interior; fresco solo en las montañas de Asir"} },
    { voto: 'sconsigliato', tmax: 44, tmin: 30, pioggia: 'poca', nota: {"it": "Jeddah: caldo umido, costa quasi insopportabile", "en": "Jeddah: humid heat, the coast is nearly unbearable", "es": "Yeda: calor húmedo, la costa casi insoportable"} },
    { voto: 'sconsigliato', tmax: 40, tmin: 26, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 35, tmin: 21, pioggia: 'poca' },
    { voto: 'buono', tmax: 28, tmin: 16, pioggia: 'poca', nota: {"it": "Inizia la stagione buona in tutto il Paese", "en": "The good season starts across the country", "es": "Empieza la buena temporada en todo el país"} },
    { voto: 'ideale', tmax: 22, tmin: 11, pioggia: 'poca' },
  ],
  costi: {
    economico: { dormire: 30, mangiare: 15, trasporti: 25, attivita: 20 },
    medio: { dormire: 50, mangiare: 40, trasporti: 45, attivita: 40 },
    comfort: { dormire: 130, mangiare: 80, trasporti: 75, attivita: 80 },
    nota: {"it": "AlUla ha pochi alloggi e cari, e i voli interni pesano; la benzina invece costa pochissimo.", "en": "AlUla has few, pricey places to stay and domestic flights add up; fuel, though, is very cheap.", "es": "AlUla tiene pocos alojamientos y caros, y los vuelos internos suman; la gasolina, en cambio, cuesta muy poco."},
  },
  aggiornato: '2026-11',
}
