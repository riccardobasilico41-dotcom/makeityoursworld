import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'inghilterra',
  zona: { it: "Londra", en: "London", es: "Londres" },
  mesi: [
    { voto: 'sconsigliato', tmax: 9, tmin: 2, pioggia: 'media', nota: { it: "Grigio e umido, giornate di otto ore", en: "Grey and damp, eight-hour days", es: "Gris y húmedo, días de ocho horas" } },
    { voto: 'sconsigliato', tmax: 9, tmin: 2, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 12, tmin: 4, pioggia: 'poca' },
    { voto: 'buono', tmax: 15, tmin: 5, pioggia: 'poca' },
    { voto: 'ideale', tmax: 18, tmin: 8, pioggia: 'poca', nota: { it: "Giornate lunghe, Cotswolds in fiore, folla ancora gestibile", en: "Long days, Cotswolds in bloom, crowds still manageable", es: "Días largos, Cotswolds en flor, gente aún llevadera" } },
    { voto: 'ideale', tmax: 21, tmin: 11, pioggia: 'media' },
    { voto: 'ideale', tmax: 24, tmin: 13, pioggia: 'media' },
    { voto: 'buono', tmax: 23, tmin: 13, pioggia: 'media', nota: { it: "Il mese più affollato e caro per dormire", en: "The busiest and priciest month for lodging", es: "El mes más concurrido y caro para dormir" } },
    { voto: 'ideale', tmax: 20, tmin: 11, pioggia: 'media' },
    { voto: 'buono', tmax: 16, tmin: 8, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 12, tmin: 4, pioggia: 'media' },
    { voto: 'buono', tmax: 9, tmin: 2, pioggia: 'media', nota: { it: "Luci e mercatini di Natale; i villaggi delle Cotswolds più spenti", en: "Christmas lights and markets; Cotswolds villages quieter", es: "Luces y mercados navideños; los pueblos de los Cotswolds, más apagados" } },
  ],
  costi: {
    economico: { dormire: 40, mangiare: 35, trasporti: 15, attivita: 15 },
    medio: { dormire: 80, mangiare: 60, trasporti: 25, attivita: 35 },
    comfort: { dormire: 180, mangiare: 100, trasporti: 40, attivita: 60 },
    nota: { it: "Londra è tra le città più care d'Europa per dormire, ma i grandi musei nazionali sono gratuiti.", en: "London is among Europe's priciest cities to sleep in, but the big national museums are free.", es: "Londres está entre las ciudades más caras de Europa para dormir, pero los grandes museos nacionales son gratuitos." },
  },
  aggiornato: '2026-11',
}
