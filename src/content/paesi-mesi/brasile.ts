import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'brasile',
  zona: {"it": "Rio de Janeiro e costa sud-est", "en": "Rio de Janeiro and the south-east coast", "es": "Río de Janeiro y la costa sudeste"},
  mesi: [
    { voto: 'buono', tmax: 32, tmin: 24, pioggia: 'molta', nota: {"it": "Estate piena: caldo forte e acquazzoni nel pomeriggio", "en": "High summer: intense heat and afternoon downpours", "es": "Pleno verano: mucho calor y chaparrones por la tarde"} },
    { voto: 'buono', tmax: 32, tmin: 24, pioggia: 'molta', nota: {"it": "Carnevale: prezzi raddoppiati, alloggi da prenotare mesi prima", "en": "Carnival: prices double, book rooms months ahead", "es": "Carnaval: precios dobles, reservar con meses de antelación"} },
    { voto: 'buono', tmax: 31, tmin: 24, pioggia: 'molta' },
    { voto: 'buono', tmax: 30, tmin: 23, pioggia: 'media' },
    { voto: 'buono', tmax: 28, tmin: 21, pioggia: 'media' },
    { voto: 'ideale', tmax: 27, tmin: 19, pioggia: 'poca', nota: {"it": "Lagune dei Lençóis Maranhenses piene da giugno a settembre", "en": "Lençóis Maranhenses lagoons full from June to September", "es": "Lagunas de Lençóis Maranhenses llenas de junio a septiembre"} },
    { voto: 'ideale', tmax: 26, tmin: 19, pioggia: 'poca', nota: {"it": "Picco delle lagune e Chapada asciutta; a Rio inverno mite", "en": "Peak lagoon season, dry Chapada; mild winter in Rio", "es": "Lagunas en su máximo y Chapada seca; invierno suave en Río"} },
    { voto: 'ideale', tmax: 27, tmin: 19, pioggia: 'poca' },
    { voto: 'ideale', tmax: 27, tmin: 20, pioggia: 'poca' },
    { voto: 'buono', tmax: 28, tmin: 21, pioggia: 'media', nota: {"it": "Bene Rio e Iguazú, ma lagune dei Lençóis quasi vuote", "en": "Fine for Rio and Iguazú, but Lençóis lagoons almost empty", "es": "Bien Río e Iguazú, pero lagunas de Lençóis casi vacías"} },
    { voto: 'buono', tmax: 29, tmin: 22, pioggia: 'media' },
    { voto: 'buono', tmax: 30, tmin: 23, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 20, attivita: 15 },
    medio: { dormire: 50, mangiare: 30, trasporti: 40, attivita: 35 },
    comfort: { dormire: 120, mangiare: 55, trasporti: 60, attivita: 70 },
    nota: {"it": "I voli interni sono indispensabili e pesano molto sulla voce trasporti.", "en": "Domestic flights are unavoidable and weigh heavily on transport.", "es": "Los vuelos internos son imprescindibles y pesan mucho en el transporte."},
  },
  aggiornato: '2026-11',
}
