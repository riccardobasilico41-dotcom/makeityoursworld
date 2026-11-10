import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'giappone',
  zona: { it: 'Tokyo e Kyoto', en: 'Tokyo and Kyoto', es: 'Tokio y Kioto' },
  mesi: [
    { voto: 'buono', tmax: 10, tmin: 1, pioggia: 'poca' },
    { voto: 'buono', tmax: 11, tmin: 2, pioggia: 'poca' },
    { voto: 'ideale', tmax: 14, tmin: 5, pioggia: 'media', nota: { it: 'Sakura: a Tokyo il picco cade spesso a fine marzo', en: 'Sakura: Tokyo\'s peak often falls in late March', es: 'Sakura: en Tokio el pico suele caer a finales de marzo' } },
    { voto: 'ideale', tmax: 19, tmin: 10, pioggia: 'media' },
    { voto: 'ideale', tmax: 24, tmin: 15, pioggia: 'media', nota: { it: 'Golden Week (29 aprile-5 maggio): treni e hotel pieni', en: 'Golden Week (29 April-5 May): trains and hotels full', es: 'Golden Week (29 de abril-5 de mayo): trenes y hoteles llenos' } },
    { voto: 'buono', tmax: 26, tmin: 19, pioggia: 'molta', nota: { it: 'Tsuyu, stagione delle piogge su Honshu fino a metà luglio', en: 'Tsuyu, Honshu\'s rainy season, until mid-July', es: 'Tsuyu, temporada de lluvias en Honshu hasta mediados de julio' } },
    { voto: 'buono', tmax: 30, tmin: 22, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 31, tmin: 24, pioggia: 'molta', nota: { it: 'Caldo umido sopra i 30 °C; Obon a metà mese', en: 'Humid heat above 30 °C; Obon mid-month', es: 'Calor húmedo por encima de 30 °C; Obon a mitad de mes' } },
    { voto: 'buono', tmax: 28, tmin: 20, pioggia: 'molta', nota: { it: 'Stagione dei tifoni: tenere giorni di margine', en: 'Typhoon season: keep spare days', es: 'Temporada de tifones: deja días de margen' } },
    { voto: 'ideale', tmax: 22, tmin: 15, pioggia: 'molta' },
    { voto: 'ideale', tmax: 17, tmin: 9, pioggia: 'media', nota: { it: 'Foliage d\'autunno (koyo) a Kyoto e sulle Alpi', en: 'Autumn foliage (koyo) in Kyoto and the Alps', es: 'Follaje de otoño (koyo) en Kioto y los Alpes' } },
    { voto: 'buono', tmax: 12, tmin: 4, pioggia: 'poca' },
  ],
  costi: {
    economico: { dormire: 30, mangiare: 20, trasporti: 20, attivita: 15 },
    medio: { dormire: 55, mangiare: 35, trasporti: 35, attivita: 25 },
    comfort: { dormire: 140, mangiare: 70, trasporti: 50, attivita: 45 },
    nota: { it: 'I trasporti includono il JR Pass spalmato sui giorni; a Niseko tra Natale e Capodanno i prezzi sono tra i più alti.', en: 'Transport includes the JR Pass spread over the days; Niseko over Christmas is among the priciest.', es: 'El transporte incluye el JR Pass repartido por días; Niseko en Navidad está entre lo más caro.' },
  },
  aggiornato: '2026-11',
}
