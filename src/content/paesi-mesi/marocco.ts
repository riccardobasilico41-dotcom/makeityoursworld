import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'marocco',
  zona: {"it": "Marrakech; nel deserto notti più fredde", "en": "Marrakech; colder nights in the desert", "es": "Marrakech; noches más frías en el desierto"},
  mesi: [
    { voto: 'buono', tmax: 19, tmin: 6, pioggia: 'poca', nota: {"it": "Notti gelide nel deserto, neve sull'Atlante", "en": "Freezing nights in the desert, snow on the Atlas", "es": "Noches heladas en el desierto, nieve en el Atlas"} },
    { voto: 'buono', tmax: 21, tmin: 8, pioggia: 'poca' },
    { voto: 'ideale', tmax: 24, tmin: 10, pioggia: 'poca' },
    { voto: 'ideale', tmax: 26, tmin: 12, pioggia: 'poca' },
    { voto: 'ideale', tmax: 29, tmin: 15, pioggia: 'poca', nota: {"it": "Clima ancora gestibile prima del gran caldo", "en": "Weather still manageable before the big heat", "es": "Clima todavía llevadero antes del gran calor"} },
    { voto: 'buono', tmax: 34, tmin: 18, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 38, tmin: 21, pioggia: 'poca', nota: {"it": "Oltre 37 °C a Marrakech, deserto rovente", "en": "Over 37 °C in Marrakech, scorching desert", "es": "Más de 37 °C en Marrakech, desierto abrasador"} },
    { voto: 'sconsigliato', tmax: 37, tmin: 21, pioggia: 'poca', nota: {"it": "Caldo estremo nell'interno; meglio la costa atlantica", "en": "Extreme heat inland; the Atlantic coast is better", "es": "Calor extremo en el interior; mejor la costa atlántica"} },
    { voto: 'buono', tmax: 33, tmin: 19, pioggia: 'poca' },
    { voto: 'ideale', tmax: 29, tmin: 16, pioggia: 'poca', nota: {"it": "Clima mite, buono per deserto e montagna", "en": "Mild weather, good for desert and mountains", "es": "Clima suave, bueno para desierto y montaña"} },
    { voto: 'buono', tmax: 23, tmin: 11, pioggia: 'poca' },
    { voto: 'buono', tmax: 20, tmin: 7, pioggia: 'poca' },
  ],
  costi: {
    economico: { dormire: 15, mangiare: 10, trasporti: 10, attivita: 10 },
    medio: { dormire: 40, mangiare: 20, trasporti: 20, attivita: 20 },
    comfort: { dormire: 110, mangiare: 45, trasporti: 50, attivita: 40 },
    nota: {"it": "Economico per l'Europa; autista o tour per il deserto alzano la voce trasporti.", "en": "Cheap by European standards; a driver or desert tour raises transport costs.", "es": "Barato para estándares europeos; un chófer o tour al desierto sube el transporte."},
  },
  aggiornato: '2026-11',
}
