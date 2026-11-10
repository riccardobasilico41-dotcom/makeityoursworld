import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'norvegia',
  zona: { it: 'Nord: Tromsø e Lofoten', en: 'The north: Tromsø and Lofoten', es: 'El norte: Tromsø y Lofoten' },
  mesi: [
    { voto: 'buono', tmax: -1, tmin: -5, pioggia: 'molta', nota: { it: 'Notte polare a Tromsø fino a metà mese; aurora nelle notti serene', en: 'Polar night in Tromsø until mid-month; aurora on clear nights', es: 'Noche polar en Tromsø hasta mitad de mes; aurora en noches despejadas' } },
    { voto: 'buono', tmax: -1, tmin: -6, pioggia: 'media' },
    { voto: 'buono', tmax: 1, tmin: -4, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 4, tmin: -2, pioggia: 'media', nota: { it: 'Finisce la stagione dell\'aurora, neve in disgelo', en: 'Aurora season ends, snow starts melting', es: 'Termina la temporada de auroras, la nieve se derrite' } },
    { voto: 'buono', tmax: 9, tmin: 2, pioggia: 'media' },
    { voto: 'ideale', tmax: 13, tmin: 6, pioggia: 'media', nota: { it: 'Sole di mezzanotte, da fine maggio a fine luglio', en: 'Midnight sun, late May to late July', es: 'Sol de medianoche, de finales de mayo a finales de julio' } },
    { voto: 'ideale', tmax: 16, tmin: 9, pioggia: 'media', nota: { it: 'Alta stagione alle Lofoten; freddo e vento anche d\'estate', en: 'Peak season in Lofoten; cold and windy even in summer', es: 'Temporada alta en Lofoten; frío y viento incluso en verano' } },
    { voto: 'ideale', tmax: 15, tmin: 8, pioggia: 'media' },
    { voto: 'buono', tmax: 11, tmin: 5, pioggia: 'molta', nota: { it: 'Da fine mese torna l\'aurora', en: 'Aurora returns from late in the month', es: 'A finales de mes vuelve la aurora' } },
    { voto: 'buono', tmax: 5, tmin: 1, pioggia: 'molta' },
    { voto: 'buono', tmax: 2, tmin: -2, pioggia: 'media' },
    { voto: 'buono', tmax: 0, tmin: -4, pioggia: 'molta', nota: { it: 'Notte polare: il sole non sorge, buio quasi tutto il giorno', en: 'Polar night: the sun never rises, dark most of the day', es: 'Noche polar: el sol no sale, oscuro casi todo el día' } },
  ],
  costi: {
    economico: { dormire: 45, mangiare: 40, trasporti: 25, attivita: 20 },
    medio: { dormire: 80, mangiare: 75, trasporti: 50, attivita: 60 },
    comfort: { dormire: 150, mangiare: 120, trasporti: 80, attivita: 120 },
    nota: { it: 'Tra i Paesi più cari d\'Europa: i pasti da soli fanno 500-600 € a testa a settimana; le escursioni artiche costano 100-320 €.', en: 'Among Europe\'s priciest: meals alone run €500-600 a week; Arctic excursions cost €100-320.', es: 'Entre los más caros de Europa: solo las comidas suman 500-600 € por semana; las excursiones árticas, 100-320 €.' },
  },
  aggiornato: '2026-11',
}
