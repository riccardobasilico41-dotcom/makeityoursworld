import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'lettonia',
  zona: { it: 'Riga', en: 'Riga', es: 'Riga' },
  mesi: [
    { voto: 'sconsigliato', tmax: 0, tmin: -5, pioggia: 'media', nota: { it: 'Freddo pungente e vento dal Golfo di Riga', en: 'Biting cold and wind off the Gulf of Riga', es: 'Frío intenso y viento del golfo de Riga' } },
    { voto: 'sconsigliato', tmax: 0, tmin: -5, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 5, tmin: -2, pioggia: 'poca' },
    { voto: 'buono', tmax: 12, tmin: 3, pioggia: 'poca' },
    { voto: 'ideale', tmax: 18, tmin: 8, pioggia: 'poca' },
    { voto: 'ideale', tmax: 21, tmin: 12, pioggia: 'media', nota: { it: 'Līgo, 23-24 giugno: la festa di mezza estate', en: 'Līgo, 23-24 June: the midsummer festival', es: 'Līgo, 23-24 de junio: la fiesta de San Juan' } },
    { voto: 'ideale', tmax: 24, tmin: 15, pioggia: 'media', nota: { it: 'Il mese più caldo, bagno possibile a Jūrmala', en: 'The warmest month, a swim at Jūrmala is possible', es: 'El mes más cálido, se puede nadar en Jūrmala' } },
    { voto: 'ideale', tmax: 23, tmin: 14, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 10, pioggia: 'media', nota: { it: 'Mite e con meno turisti in Città Vecchia', en: 'Mild, with fewer tourists in the Old Town', es: 'Templado y con menos turistas en el casco antiguo' } },
    { voto: 'buono', tmax: 11, tmin: 5, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 5, tmin: 1, pioggia: 'media' },
    { voto: 'buono', tmax: 1, tmin: -2, pioggia: 'media', nota: { it: 'Mercatino di Natale in Città Vecchia, buio presto', en: 'Christmas market in the Old Town, early dark', es: 'Mercadillo navideño en el casco antiguo, anochece pronto' } },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 25, trasporti: 5, attivita: 10 },
    medio: { dormire: 45, mangiare: 40, trasporti: 10, attivita: 20 },
    comfort: { dormire: 80, mangiare: 70, trasporti: 15, attivita: 35 },
    nota: { it: "Economica per l'eurozona: pasto normale 8-16 €, treno per Jūrmala circa 2 €.", en: 'Cheap for the eurozone: a regular meal €8-16, train to Jūrmala about €2.', es: 'Barata para la eurozona: comida normal 8-16 €, tren a Jūrmala unos 2 €.' },
  },
  aggiornato: '2026-11',
}
