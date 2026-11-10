import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'costa-rica',
  zona: {"it": "Valle Centrale (San José); coste più calde", "en": "Central Valley (San José); the coasts are hotter", "es": "Valle Central (San José); las costas son más cálidas"},
  mesi: [
    { voto: 'ideale', tmax: 28, tmin: 19, pioggia: 'poca', nota: {"it": "Stagione secca; balene a Uvita fino a marzo", "en": "Dry season; whales at Uvita until March", "es": "Temporada seca; ballenas en Uvita hasta marzo"} },
    { voto: 'ideale', tmax: 29, tmin: 19, pioggia: 'poca' },
    { voto: 'ideale', tmax: 30, tmin: 19, pioggia: 'poca' },
    { voto: 'ideale', tmax: 30, tmin: 19, pioggia: 'media' },
    { voto: 'buono', tmax: 29, tmin: 19, pioggia: 'molta' },
    { voto: 'buono', tmax: 28, tmin: 19, pioggia: 'molta' },
    { voto: 'buono', tmax: 28, tmin: 19, pioggia: 'molta', nota: {"it": "«Veranillo», pausa delle piogge; balene a Uvita fino a ottobre", "en": "\"Veranillo\" break in the rains; whales at Uvita until October", "es": "«Veranillo», pausa de lluvias; ballenas en Uvita hasta octubre"} },
    { voto: 'buono', tmax: 28, tmin: 19, pioggia: 'molta' },
    { voto: 'buono', tmax: 28, tmin: 18, pioggia: 'molta', nota: {"it": "Pacifico molto piovoso; Caraibi (Cahuita, Puerto Viejo) più asciutti", "en": "Very wet Pacific side; Caribbean coast (Cahuita, Puerto Viejo) drier", "es": "Pacífico muy lluvioso; Caribe (Cahuita, Puerto Viejo) más seco"} },
    { voto: 'sconsigliato', tmax: 27, tmin: 19, pioggia: 'molta', nota: {"it": "Mese più piovoso in valle e sul Pacifico", "en": "Wettest month in the valley and on the Pacific", "es": "El mes más lluvioso en el valle y el Pacífico"} },
    { voto: 'buono', tmax: 27, tmin: 18, pioggia: 'media' },
    { voto: 'ideale', tmax: 28, tmin: 18, pioggia: 'poca', nota: {"it": "Natale e Capodanno: tutto pieno, prezzi alti", "en": "Christmas and New Year: everything full, high prices", "es": "Navidad y Año Nuevo: todo lleno, precios altos"} },
  ],
  costi: {
    economico: { dormire: 25, mangiare: 25, trasporti: 15, attivita: 20 },
    medio: { dormire: 55, mangiare: 40, trasporti: 30, attivita: 40 },
    comfort: { dormire: 120, mangiare: 75, trasporti: 50, attivita: 70 },
    nota: {"it": "Tra i Paesi più cari del Centro America; attività quasi sempre in dollari.", "en": "One of the priciest countries in Central America; activities are almost always paid in dollars.", "es": "De los países más caros de Centroamérica; las actividades se pagan casi siempre en dólares."},
  },
  aggiornato: '2026-11',
}
