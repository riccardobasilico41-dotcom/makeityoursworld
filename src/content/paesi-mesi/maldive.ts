import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'maldive',
  mesi: [
    { voto: 'ideale', tmax: 31, tmin: 26, pioggia: 'media', nota: { it: 'Stagione secca: mare calmo, visibilità ottima, prezzi massimi', en: 'Dry season: calm sea, great visibility, top prices', es: 'Estación seca: mar en calma, visibilidad óptima, precios máximos' } },
    { voto: 'ideale', tmax: 31, tmin: 26, pioggia: 'poca' },
    { voto: 'ideale', tmax: 32, tmin: 27, pioggia: 'poca' },
    { voto: 'ideale', tmax: 32, tmin: 27, pioggia: 'media', nota: { it: 'Il mese più caldo, mare spesso piatto', en: 'The hottest month, sea often flat', es: 'El mes más caluroso, mar a menudo en calma' } },
    { voto: 'buono', tmax: 32, tmin: 27, pioggia: 'molta' },
    { voto: 'buono', tmax: 31, tmin: 26, pioggia: 'molta', nota: { it: 'Monsone di sud-ovest: vento, mare mosso, prezzi bassi', en: 'Southwest monsoon: wind, rough sea, low prices', es: 'Monzón del suroeste: viento, mar movido, precios bajos' } },
    { voto: 'buono', tmax: 31, tmin: 26, pioggia: 'molta' },
    { voto: 'buono', tmax: 31, tmin: 26, pioggia: 'molta' },
    { voto: 'buono', tmax: 31, tmin: 26, pioggia: 'molta', nota: { it: 'Mante alla baia di Hanifaru (Baa), picco agosto-ottobre', en: 'Manta rays at Hanifaru Bay (Baa), peak August-October', es: 'Mantas en la bahía de Hanifaru (Baa), pico de agosto a octubre' } },
    { voto: 'buono', tmax: 31, tmin: 26, pioggia: 'molta' },
    { voto: 'buono', tmax: 30, tmin: 26, pioggia: 'molta', nota: { it: 'Transizione verso il secco: ottimo rapporto qualità-prezzo', en: 'Shift to the dry season: great value', es: 'Transición a la estación seca: muy buena relación calidad-precio' } },
    { voto: 'ideale', tmax: 30, tmin: 26, pioggia: 'molta', nota: { it: 'Dal 20 dicembre picco dei prezzi', en: 'Prices peak from 20 December', es: 'Desde el 20 de diciembre, precios máximos' } },
  ],
  costi: {
    economico: { dormire: 35, mangiare: 20, trasporti: 15, attivita: 30 },
    medio: { dormire: 120, mangiare: 50, trasporti: 50, attivita: 60 },
    comfort: { dormire: 400, mangiare: 100, trasporti: 100, attivita: 80 },
    volo: [600, 1200],
    nota: { it: 'Due viaggi diversi: isole locali con guesthouse o resort; idrovolante e green tax pesano sul conto.', en: 'Two different trips: local islands with guesthouses or resorts; seaplanes and green tax add up.', es: 'Dos viajes distintos: islas locales con guesthouse o resort; el hidroavión y la green tax suman.' },
  },
  aggiornato: '2026-11',
}
