import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'malesia',
  zona: { it: "Kuala Lumpur e costa ovest", en: "Kuala Lumpur and the west coast", es: "Kuala Lumpur y la costa oeste" },
  mesi: [
    { voto: 'ideale', tmax: 33, tmin: 24, pioggia: 'molta', nota: { it: "Costa ovest asciutta; Perhentian e costa est chiuse", en: "Dry west coast; Perhentians and east coast closed", es: "Costa oeste seca; Perhentian y costa este cerradas" } },
    { voto: 'ideale', tmax: 33, tmin: 24, pioggia: 'media', nota: { it: "Capodanno cinese (gen-feb): Penang e Malacca piene", en: "Chinese New Year (Jan-Feb): Penang and Malacca full", es: "Año Nuevo chino (ene-feb): Penang y Malaca llenas" } },
    { voto: 'ideale', tmax: 34, tmin: 25, pioggia: 'molta' },
    { voto: 'buono', tmax: 34, tmin: 25, pioggia: 'molta' },
    { voto: 'buono', tmax: 34, tmin: 25, pioggia: 'molta', nota: { it: "Da maggio a settembre tocca alla costa est", en: "May to September is east-coast season", es: "De mayo a septiembre, temporada de la costa este" } },
    { voto: 'buono', tmax: 33, tmin: 25, pioggia: 'media' },
    { voto: 'buono', tmax: 33, tmin: 24, pioggia: 'media' },
    { voto: 'buono', tmax: 33, tmin: 25, pioggia: 'media' },
    { voto: 'buono', tmax: 33, tmin: 24, pioggia: 'molta' },
    { voto: 'buono', tmax: 33, tmin: 24, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 24, pioggia: 'molta', nota: { it: "Il mese più piovoso; la costa est chiude", en: "The wettest month; the east coast shuts down", es: "El mes más lluvioso; la costa este cierra" } },
    { voto: 'ideale', tmax: 32, tmin: 24, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 10, mangiare: 10, trasporti: 5, attivita: 5 },
    medio: { dormire: 20, mangiare: 15, trasporti: 10, attivita: 10 },
    comfort: { dormire: 60, mangiare: 30, trasporti: 20, attivita: 20 },
    nota: { it: "Si sta comodamente sotto i 50€ al giorno; alloggi e alcol sono le voci che salgono.", en: "You can travel comfortably on under €50 a day; rooms and alcohol are what push it up.", es: "Se viaja cómodamente con menos de 50 € al día; alojamiento y alcohol son lo que sube." },
  },
  aggiornato: '2026-11',
}
