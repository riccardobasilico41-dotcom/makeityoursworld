import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'irlanda',
  zona: { it: "Dublino (l'ovest è più piovoso)", en: "Dublin (the west is wetter)", es: "Dublín (el oeste es más lluvioso)" },
  mesi: [
    { voto: 'sconsigliato', tmax: 8, tmin: 2, pioggia: 'molta', nota: { it: "Giornate cortissime, buio poco dopo le 16", en: "Very short days, dark soon after 4 pm", es: "Días muy cortos, oscurece poco después de las 16" } },
    { voto: 'sconsigliato', tmax: 9, tmin: 2, pioggia: 'media' },
    { voto: 'buono', tmax: 10, tmin: 3, pioggia: 'media', nota: { it: "San Patrizio il 17 marzo: Dublino piena", en: "St Patrick's Day on 17 March: Dublin is packed", es: "San Patricio el 17 de marzo: Dublín llena" } },
    { voto: 'buono', tmax: 12, tmin: 4, pioggia: 'media' },
    { voto: 'ideale', tmax: 15, tmin: 7, pioggia: 'media', nota: { it: "Maggio e giugno di solito i più soleggiati", en: "May and June are usually the sunniest", es: "Mayo y junio suelen ser los más soleados" } },
    { voto: 'ideale', tmax: 18, tmin: 9, pioggia: 'media' },
    { voto: 'ideale', tmax: 20, tmin: 11, pioggia: 'media', nota: { it: "Alta stagione: alloggi e auto ai prezzi massimi", en: "High season: rooms and cars at peak prices", es: "Temporada alta: alojamiento y coches a precio máximo" } },
    { voto: 'ideale', tmax: 19, tmin: 11, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 10, pioggia: 'media' },
    { voto: 'buono', tmax: 14, tmin: 7, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 10, tmin: 4, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 8, tmin: 3, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 40, mangiare: 35, trasporti: 20, attivita: 10 },
    medio: { dormire: 80, mangiare: 60, trasporti: 35, attivita: 20 },
    comfort: { dormire: 150, mangiare: 100, trasporti: 50, attivita: 35 },
    nota: { it: "Tra i Paesi più cari d'Europa; Dublino è la tappa più costosa, l'auto pesa sui trasporti.", en: "Among Europe's priciest countries; Dublin is the most expensive stop, and the car drives up transport.", es: "Entre los países más caros de Europa; Dublín es la etapa más cara y el coche encarece el transporte." },
  },
  aggiornato: '2026-11',
}
