import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'florida',
  zona: {"it": "Orlando e Florida centrale (Miami più calda d'inverno)", "en": "Orlando and Central Florida (Miami warmer in winter)", "es": "Orlando y Florida central (Miami más cálida en invierno)"},
  mesi: [
    { voto: 'buono', tmax: 22, tmin: 10, pioggia: 'media' },
    { voto: 'buono', tmax: 24, tmin: 11, pioggia: 'poca' },
    { voto: 'ideale', tmax: 26, tmin: 13, pioggia: 'media', nota: {"it": "Spring break: spiagge e parchi affollati, prezzi in salita", "en": "Spring break: crowded beaches and parks, rising prices", "es": "Spring break: playas y parques llenos, precios al alza"} },
    { voto: 'ideale', tmax: 29, tmin: 16, pioggia: 'media' },
    { voto: 'ideale', tmax: 31, tmin: 19, pioggia: 'media' },
    { voto: 'buono', tmax: 33, tmin: 22, pioggia: 'molta', nota: {"it": "Dal 1° giugno stagione degli uragani; temporali quasi ogni pomeriggio", "en": "Hurricane season from 1 June; storms most afternoons", "es": "Temporada de huracanes desde el 1 de junio; tormentas casi cada tarde"} },
    { voto: 'buono', tmax: 33, tmin: 23, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 33, tmin: 23, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 22, pioggia: 'molta', nota: {"it": "Picco della stagione degli uragani", "en": "Peak of the hurricane season", "es": "Pico de la temporada de huracanes"} },
    { voto: 'buono', tmax: 29, tmin: 19, pioggia: 'media' },
    { voto: 'ideale', tmax: 26, tmin: 15, pioggia: 'poca' },
    { voto: 'buono', tmax: 23, tmin: 12, pioggia: 'media', nota: {"it": "Vacanze di Natale: parchi di Orlando pieni", "en": "Christmas holidays: Orlando parks packed", "es": "Vacaciones de Navidad: parques de Orlando llenos"} },
  ],
  costi: {
    economico: { dormire: 50, mangiare: 40, trasporti: 25, attivita: 20 },
    medio: { dormire: 80, mangiare: 65, trasporti: 35, attivita: 45 },
    comfort: { dormire: 200, mangiare: 110, trasporti: 50, attivita: 80 },
    nota: {"it": "Il cibo è caro, ai prezzi vanno aggiunte tasse e mance del 18-20%; i parchi di Orlando costano 130-260 $.", "en": "Food is expensive, with tax and 18-20% tips on top; Orlando parks cost 130-260 $.", "es": "La comida es cara, con impuestos y propinas del 18-20% aparte; los parques de Orlando cuestan 130-260 $."},
  },
  aggiornato: '2026-11',
}
