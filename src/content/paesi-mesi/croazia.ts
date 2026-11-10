import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'croazia',
  zona: {"it": "Dalmazia (Spalato)", "en": "Dalmatia (Split)", "es": "Dalmacia (Split)"},
  mesi: [
    { voto: 'sconsigliato', tmax: 11, tmin: 6, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 12, tmin: 6, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 15, tmin: 9, pioggia: 'media' },
    { voto: 'buono', tmax: 18, tmin: 12, pioggia: 'media', nota: {"it": "Plitvice e città perfette, mare ancora fresco", "en": "Plitvice and the cities at their best, sea still cool", "es": "Plitvice y las ciudades perfectas, mar aún fresco"} },
    { voto: 'buono', tmax: 23, tmin: 16, pioggia: 'media' },
    { voto: 'ideale', tmax: 28, tmin: 20, pioggia: 'poca', nota: {"it": "Mare a 22-25 °C, traghetti estivi attivi, meno folla", "en": "Sea at 22-25 °C, summer ferries running, fewer crowds", "es": "Mar a 22-25 °C, ferris de verano activos, menos gente"} },
    { voto: 'buono', tmax: 31, tmin: 23, pioggia: 'poca' },
    { voto: 'buono', tmax: 31, tmin: 23, pioggia: 'poca', nota: {"it": "Picco di caldo, prezzi e folla, soprattutto Dubrovnik e Hvar", "en": "Peak heat, prices and crowds, especially Dubrovnik and Hvar", "es": "Pico de calor, precios y gente, sobre todo Dubrovnik y Hvar"} },
    { voto: 'ideale', tmax: 25, tmin: 18, pioggia: 'media', nota: {"it": "Mare ancora caldo e prezzi in calo", "en": "Sea still warm and prices dropping", "es": "Mar aún cálido y precios a la baja"} },
    { voto: 'buono', tmax: 21, tmin: 15, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 16, tmin: 11, pioggia: 'molta', nota: {"it": "Fino a marzo molte strutture sulle isole chiudono", "en": "Until March many places on the islands close", "es": "Hasta marzo muchos alojamientos en las islas cierran"} },
    { voto: 'sconsigliato', tmax: 12, tmin: 7, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 35, mangiare: 30, trasporti: 15, attivita: 15 },
    medio: { dormire: 75, mangiare: 55, trasporti: 25, attivita: 30 },
    comfort: { dormire: 170, mangiare: 90, trasporti: 40, attivita: 60 },
    nota: {"it": "Cifre di giugno e settembre: a luglio e agosto contare il 30-50% in più.", "en": "June and September figures: add 30-50% in July and August.", "es": "Cifras de junio y septiembre: en julio y agosto, un 30-50% más."},
  },
  aggiornato: '2026-11',
}
