import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'ungheria',
  zona: { it: 'Budapest', en: 'Budapest', es: 'Budapest' },
  mesi: [
    { voto: 'buono', tmax: 5, tmin: -1, pioggia: 'poca', nota: { it: 'Sotto zero: le vasche termali esterne fumano nel freddo', en: 'Below freezing: outdoor thermal pools steam in the cold', es: 'Bajo cero: las piscinas termales exteriores humean con el frío' } },
    { voto: 'buono', tmax: 7, tmin: 0, pioggia: 'poca' },
    { voto: 'buono', tmax: 12, tmin: 4, pioggia: 'poca' },
    { voto: 'ideale', tmax: 19, tmin: 9, pioggia: 'poca' },
    { voto: 'ideale', tmax: 23, tmin: 13, pioggia: 'media' },
    { voto: 'buono', tmax: 27, tmin: 16, pioggia: 'media' },
    { voto: 'buono', tmax: 29, tmin: 18, pioggia: 'media', nota: { it: 'Caldo e folla al Bastione dei Pescatori e a Széchenyi', en: 'Heat and crowds at Fisherman\'s Bastion and Széchenyi', es: 'Calor y multitudes en el Bastión de los Pescadores y Széchenyi' } },
    { voto: 'buono', tmax: 29, tmin: 18, pioggia: 'media', nota: { it: '20 agosto: festa nazionale con fuochi sul Danubio', en: '20 August: national holiday with fireworks on the Danube', es: '20 de agosto: fiesta nacional con fuegos sobre el Danubio' } },
    { voto: 'ideale', tmax: 23, tmin: 13, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 9, pioggia: 'media' },
    { voto: 'buono', tmax: 11, tmin: 4, pioggia: 'media' },
    { voto: 'buono', tmax: 5, tmin: 0, pioggia: 'poca', nota: { it: 'Mercatini di Natale in piazza Vörösmarty e alla Basilica', en: 'Christmas markets in Vörösmarty Square and at the Basilica', es: 'Mercadillos navideños en la plaza Vörösmarty y en la Basílica' } },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 5, attivita: 15 },
    medio: { dormire: 50, mangiare: 40, trasporti: 10, attivita: 25 },
    comfort: { dormire: 100, mangiare: 70, trasporti: 20, attivita: 45 },
    nota: { it: 'Tra le capitali europee più economiche; la voce fissa sono le terme, 20-30 € a ingresso.', en: 'One of Europe\'s cheapest capitals; the fixed cost is the baths, €20-30 a visit.', es: 'Una de las capitales europeas más baratas; el gasto fijo son las termas, 20-30 € por entrada.' },
  },
  aggiornato: '2026-11',
}
