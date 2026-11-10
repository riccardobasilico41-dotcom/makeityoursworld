import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'filippine',
  zona: {"it": "Palawan (Puerto Princesa)", "en": "Palawan (Puerto Princesa)", "es": "Palawan (Puerto Princesa)"},
  mesi: [
    { voto: 'ideale', tmax: 31, tmin: 24, pioggia: 'poca', nota: {"it": "Finestra più asciutta, mare calmo per le escursioni in barca", "en": "Driest window, calm seas for boat trips", "es": "La ventana más seca, mar en calma para salidas en barco"} },
    { voto: 'ideale', tmax: 31, tmin: 24, pioggia: 'poca' },
    { voto: 'ideale', tmax: 32, tmin: 24, pioggia: 'poca' },
    { voto: 'ideale', tmax: 33, tmin: 25, pioggia: 'poca', nota: {"it": "Il mese più caldo e afoso", "en": "The hottest, most humid month", "es": "El mes más caluroso y bochornoso"} },
    { voto: 'buono', tmax: 33, tmin: 25, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 32, tmin: 25, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 24, pioggia: 'molta', nota: {"it": "Monsone di sud-ovest (habagat) e tifoni: barche spesso ferme", "en": "South-west monsoon (habagat) and typhoons: boats often cancelled", "es": "Monzón del suroeste (habagat) y tifones: barcos a menudo parados"} },
    { voto: 'sconsigliato', tmax: 32, tmin: 24, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 24, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 24, pioggia: 'molta', nota: {"it": "Tifoni ancora possibili, soprattutto nel centro-nord", "en": "Typhoons still possible, especially in the centre and north", "es": "Aún posibles tifones, sobre todo en el centro y norte"} },
    { voto: 'buono', tmax: 31, tmin: 24, pioggia: 'molta' },
    { voto: 'buono', tmax: 31, tmin: 24, pioggia: 'media', nota: {"it": "Siargao piovosa; Natale e Capodanno affollati", "en": "Siargao is rainy; Christmas and New Year are crowded", "es": "Siargao lluviosa; Navidad y Año Nuevo con mucha gente"} },
  ],
  costi: {
    economico: { dormire: 15, mangiare: 15, trasporti: 15, attivita: 15 },
    medio: { dormire: 35, mangiare: 25, trasporti: 25, attivita: 25 },
    comfort: { dormire: 100, mangiare: 45, trasporti: 40, attivita: 45 },
    nota: {"it": "Voli interni ed escursioni in barca sono le voci che pesano di più.", "en": "Domestic flights and boat trips are the biggest expenses.", "es": "Los vuelos internos y las excursiones en barco son los mayores gastos."},
  },
  aggiornato: '2026-11',
}
