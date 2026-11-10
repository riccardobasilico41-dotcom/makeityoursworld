import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'guatemala',
  zona: {"it": "altopiani (Città del Guatemala e Antigua)", "en": "highlands (Guatemala City and Antigua)", "es": "altiplano (Ciudad de Guatemala y Antigua)"},
  mesi: [
    { voto: 'ideale', tmax: 25, tmin: 13, pioggia: 'poca' },
    { voto: 'ideale', tmax: 27, tmin: 14, pioggia: 'poca' },
    { voto: 'ideale', tmax: 28, tmin: 15, pioggia: 'poca' },
    { voto: 'ideale', tmax: 28, tmin: 16, pioggia: 'poca' },
    { voto: 'buono', tmax: 27, tmin: 17, pioggia: 'molta', nota: {"it": "Iniziano le piogge del pomeriggio", "en": "Afternoon rains begin", "es": "Empiezan las lluvias de la tarde"} },
    { voto: 'buono', tmax: 25, tmin: 17, pioggia: 'molta' },
    { voto: 'buono', tmax: 25, tmin: 17, pioggia: 'molta', nota: {"it": "«Canícula»: le piogge di solito rallentano a metà estate", "en": "\"Canícula\": rains usually ease in midsummer", "es": "«Canícula»: las lluvias suelen bajar a mitad del verano"} },
    { voto: 'buono', tmax: 26, tmin: 17, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 25, tmin: 17, pioggia: 'molta', nota: {"it": "Mese più piovoso: strade di montagna difficili, rischio uragani", "en": "Wettest month: hard mountain roads, hurricane risk", "es": "El mes más lluvioso: carreteras de montaña difíciles, riesgo de huracanes"} },
    { voto: 'sconsigliato', tmax: 24, tmin: 16, pioggia: 'molta' },
    { voto: 'ideale', tmax: 24, tmin: 15, pioggia: 'poca', nota: {"it": "Torna il secco; aquiloni giganti a Sumpango il 1° novembre", "en": "Dry season returns; giant kites at Sumpango on 1 November", "es": "Vuelve la seca; barriletes gigantes en Sumpango el 1 de noviembre"} },
    { voto: 'ideale', tmax: 24, tmin: 14, pioggia: 'poca' },
  ],
  costi: {
    economico: { dormire: 10, mangiare: 15, trasporti: 10, attivita: 15 },
    medio: { dormire: 35, mangiare: 25, trasporti: 20, attivita: 25 },
    comfort: { dormire: 90, mangiare: 45, trasporti: 35, attivita: 45 },
    nota: {"it": "Tra i Paesi più economici della regione; shuttle turistici sui 15-30 € a tratta.", "en": "One of the cheapest countries in the region; tourist shuttles around €15-30 per leg.", "es": "De los países más baratos de la región; shuttles turísticos de 15-30 € por trayecto."},
  },
  aggiornato: '2026-11',
}
