import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'california',
  zona: { it: 'San Francisco e costa', en: 'San Francisco and the coast', es: 'San Francisco y la costa' },
  mesi: [
    { voto: 'sconsigliato', tmax: 14, tmin: 8, pioggia: 'molta', nota: { it: 'Sierra innevata e Tioga Road chiusa; ottimo il deserto', en: 'Snowy Sierra and Tioga Road closed; great for the desert', es: 'Sierra nevada y Tioga Road cerrada; ideal para el desierto' } },
    { voto: 'sconsigliato', tmax: 16, tmin: 9, pioggia: 'molta' },
    { voto: 'buono', tmax: 17, tmin: 9, pioggia: 'media' },
    { voto: 'ideale', tmax: 17, tmin: 10, pioggia: 'poca' },
    { voto: 'ideale', tmax: 18, tmin: 11, pioggia: 'poca', nota: { it: 'Cascate di Yosemite al massimo, deserto ancora vivibile', en: 'Yosemite falls at their peak, desert still bearable', es: 'Cascadas de Yosemite al máximo, desierto aún llevadero' } },
    { voto: 'ideale', tmax: 19, tmin: 12, pioggia: 'poca', nota: { it: 'Mattine grigie sulla costa (June Gloom)', en: 'Grey coastal mornings (June Gloom)', es: 'Mañanas grises en la costa (June Gloom)' } },
    { voto: 'buono', tmax: 19, tmin: 12, pioggia: 'poca' },
    { voto: 'buono', tmax: 20, tmin: 13, pioggia: 'poca', nota: { it: 'Death Valley oltre 45 °C, parchi pieni, rischio incendi', en: 'Death Valley above 45 °C, packed parks, wildfire risk', es: 'Death Valley por encima de 45 °C, parques llenos, riesgo de incendios' } },
    { voto: 'ideale', tmax: 21, tmin: 13, pioggia: 'poca', nota: { it: "Forse il mese migliore per l'anello completo", en: 'Probably the best month for the full loop', es: 'Quizá el mejor mes para la ruta completa' } },
    { voto: 'ideale', tmax: 21, tmin: 12, pioggia: 'poca' },
    { voto: 'buono', tmax: 18, tmin: 10, pioggia: 'media', nota: { it: 'Tioga Road chiude con le prime nevi', en: 'Tioga Road closes with the first snow', es: 'Tioga Road cierra con las primeras nevadas' } },
    { voto: 'sconsigliato', tmax: 14, tmin: 8, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 50, mangiare: 40, trasporti: 30, attivita: 15 },
    medio: { dormire: 100, mangiare: 70, trasporti: 40, attivita: 25 },
    comfort: { dormire: 200, mangiare: 110, trasporti: 60, attivita: 50 },
    nota: { it: 'Tra le mete più care: tasse e mance aggiungono il 25-30 %, e dal 2026 i grandi parchi chiedono 100 $ in più agli stranieri.', en: 'Among the priciest destinations: taxes and tips add 25-30 %, and since 2026 the big parks charge foreigners an extra $100.', es: 'De los destinos más caros: impuestos y propinas suman un 25-30 %, y desde 2026 los grandes parques cobran 100 $ extra a los extranjeros.' },
  },
  aggiornato: '2026-11',
}
