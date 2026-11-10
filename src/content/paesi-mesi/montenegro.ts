import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'montenegro',
  zona: { it: 'costa e Bocche di Cattaro', en: 'coast and Bay of Kotor', es: 'costa y bocas de Kotor' },
  mesi: [
    { voto: 'sconsigliato', tmax: 13, tmin: 5, pioggia: 'molta', nota: { it: 'Costa molto piovosa; sci a Žabljak e Kolašin', en: 'Very rainy coast; skiing at Žabljak and Kolašin', es: 'Costa muy lluviosa; esquí en Žabljak y Kolašin' } },
    { voto: 'sconsigliato', tmax: 14, tmin: 5, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 16, tmin: 7, pioggia: 'molta' },
    { voto: 'buono', tmax: 19, tmin: 10, pioggia: 'molta' },
    { voto: 'buono', tmax: 24, tmin: 14, pioggia: 'media' },
    { voto: 'ideale', tmax: 28, tmin: 18, pioggia: 'media', nota: { it: 'Mare caldo, montagna aperta, prezzi medi', en: 'Warm sea, mountains open, mid-range prices', es: 'Mar cálido, montaña abierta, precios medios' } },
    { voto: 'buono', tmax: 31, tmin: 20, pioggia: 'poca' },
    { voto: 'buono', tmax: 32, tmin: 21, pioggia: 'poca', nota: { it: 'Oltre 35 °C, traffico e navi da crociera a Kotor', en: 'Above 35 °C, traffic and cruise ships in Kotor', es: 'Más de 35 °C, tráfico y cruceros en Kotor' } },
    { voto: 'ideale', tmax: 27, tmin: 17, pioggia: 'media', nota: { it: 'Mare ancora caldo, meno folla, vendemmia sul lago', en: 'Sea still warm, fewer crowds, grape harvest by the lake', es: 'Mar aún cálido, menos gente, vendimia junto al lago' } },
    { voto: 'buono', tmax: 23, tmin: 13, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 18, tmin: 10, pioggia: 'molta', nota: { it: 'Molte strutture balneari chiuse fino a primavera', en: 'Many beach places closed until spring', es: 'Muchos alojamientos de playa cerrados hasta primavera' } },
    { voto: 'sconsigliato', tmax: 14, tmin: 6, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 25, mangiare: 20, trasporti: 15, attivita: 5 },
    medio: { dormire: 55, mangiare: 35, trasporti: 20, attivita: 15 },
    comfort: { dormire: 130, mangiare: 60, trasporti: 30, attivita: 30 },
    nota: { it: "Economico per il Mediterraneo; l'auto a noleggio (30-60 € al giorno) è la voce più grossa dopo l'alloggio.", en: 'Cheap for the Mediterranean; a rental car (€30-60 a day) is the biggest cost after lodging.', es: 'Barato para el Mediterráneo; el coche de alquiler (30-60 € al día) es el mayor gasto tras el alojamiento.' },
  },
  aggiornato: '2026-11',
}
