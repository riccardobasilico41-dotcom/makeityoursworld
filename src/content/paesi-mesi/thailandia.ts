import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'thailandia',
  zona: {"it": "Mare delle Andamane (Phuket, Krabi)", "en": "Andaman coast (Phuket, Krabi)", "es": "Mar de Andamán (Phuket, Krabi)"},
  mesi: [
    { voto: 'ideale', tmax: 33, tmin: 25, pioggia: 'poca' },
    { voto: 'ideale', tmax: 34, tmin: 25, pioggia: 'poca' },
    { voto: 'ideale', tmax: 34, tmin: 25, pioggia: 'media', nota: {"it": "Al nord possibile fumo degli incendi agricoli: controllare l'aria", "en": "Possible farm-fire smoke in the north: check air quality", "es": "Posible humo de quemas agrícolas en el norte: mirar la calidad del aire"} },
    { voto: 'buono', tmax: 34, tmin: 26, pioggia: 'molta', nota: {"it": "Songkran dal 13 al 15: festa dell'acqua, tutto pieno", "en": "Songkran 13-15: water festival, everything booked", "es": "Songkran del 13 al 15: fiesta del agua, todo lleno"} },
    { voto: 'sconsigliato', tmax: 33, tmin: 26, pioggia: 'molta', nota: {"it": "Monsone sulle Andamane; isole Similan chiuse fino a metà ottobre", "en": "Monsoon on the Andaman coast; Similan Islands closed until mid-October", "es": "Monzón en el Andamán; islas Similan cerradas hasta mediados de octubre"} },
    { voto: 'sconsigliato', tmax: 32, tmin: 26, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 25, pioggia: 'molta', nota: {"it": "Andamane mosse: meglio il Golfo (Koh Samui)", "en": "Rough Andaman Sea: the Gulf (Koh Samui) is better", "es": "Andamán agitado: mejor el Golfo (Koh Samui)"} },
    { voto: 'sconsigliato', tmax: 32, tmin: 25, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 25, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 25, pioggia: 'molta' },
    { voto: 'buono', tmax: 32, tmin: 25, pioggia: 'molta' },
    { voto: 'ideale', tmax: 32, tmin: 24, pioggia: 'media' },
  ],
  costi: {
    economico: { dormire: 15, mangiare: 10, trasporti: 10, attivita: 15 },
    medio: { dormire: 30, mangiare: 20, trasporti: 15, attivita: 25 },
    comfort: { dormire: 90, mangiare: 40, trasporti: 30, attivita: 45 },
    nota: {"it": "Isole e Phuket costano più di Bangkok e del nord; a Natale e Capodanno i prezzi salgono molto.", "en": "The islands and Phuket cost more than Bangkok and the north; prices jump at Christmas and New Year.", "es": "Las islas y Phuket cuestan más que Bangkok y el norte; en Navidad y Año Nuevo los precios suben mucho."},
  },
  aggiornato: '2026-11',
}
