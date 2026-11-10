import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'portogallo',
  zona: { it: "Lisbona e Sintra", en: "Lisbon and Sintra", es: "Lisboa y Sintra" },
  mesi: [
    { voto: 'sconsigliato', tmax: 15, tmin: 8, pioggia: 'media' },
    { voto: 'buono', tmax: 16, tmin: 9, pioggia: 'media' },
    { voto: 'buono', tmax: 19, tmin: 11, pioggia: 'media' },
    { voto: 'ideale', tmax: 20, tmin: 12, pioggia: 'media', nota: { it: "Clima mite, ideale per le salite della città", en: "Mild weather, ideal for the city's hills", es: "Clima templado, ideal para las cuestas de la ciudad" } },
    { voto: 'ideale', tmax: 22, tmin: 14, pioggia: 'media' },
    { voto: 'buono', tmax: 26, tmin: 17, pioggia: 'poca', nota: { it: "Feste di Sant'Antonio il 12-13 giugno, alta stagione", en: "Santo António festivities on 12-13 June, high season", es: "Fiestas de San Antonio el 12-13 de junio, temporada alta" } },
    { voto: 'buono', tmax: 28, tmin: 18, pioggia: 'poca' },
    { voto: 'buono', tmax: 28, tmin: 19, pioggia: 'poca', nota: { it: "Caldo forte, tram 28 e Sintra al limite", en: "Strong heat, tram 28 and Sintra packed", es: "Calor fuerte, tranvía 28 y Sintra a tope" } },
    { voto: 'ideale', tmax: 27, tmin: 18, pioggia: 'poca' },
    { voto: 'ideale', tmax: 23, tmin: 15, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 18, tmin: 12, pioggia: 'media', nota: { it: "Il mese più piovoso, giornate corte", en: "The rainiest month, short days", es: "El mes más lluvioso, días cortos" } },
    { voto: 'sconsigliato', tmax: 15, tmin: 9, pioggia: 'media' },
  ],
  costi: {
    economico: { dormire: 30, mangiare: 20, trasporti: 10, attivita: 15 },
    medio: { dormire: 65, mangiare: 35, trasporti: 15, attivita: 25 },
    comfort: { dormire: 130, mangiare: 60, trasporti: 25, attivita: 40 },
    nota: { it: "Ancora economica per l'Europa occidentale, ma gli alloggi in centro sono rincarati; gli ingressi di Sintra sono la voce fissa più alta.", en: "Still affordable for Western Europe, but central lodging has gone up; Sintra's tickets are the biggest fixed cost.", es: "Aún barata para Europa occidental, aunque el alojamiento céntrico ha subido; las entradas de Sintra son el mayor gasto fijo." },
  },
  aggiornato: '2026-11',
}
