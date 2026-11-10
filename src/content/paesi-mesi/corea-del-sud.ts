import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'corea-del-sud',
  zona: { it: "Seoul", en: "Seoul", es: "Seúl" },
  mesi: [
    { voto: 'sconsigliato', tmax: 2, tmin: -6, pioggia: 'poca', nota: { it: "Gelo e Seollal (gen-feb): trasporti esauriti, negozi chiusi", en: "Freezing, plus Seollal (Jan-Feb): transport sold out, shops shut", es: "Frío intenso y Seollal (ene-feb): transporte agotado, tiendas cerradas" } },
    { voto: 'sconsigliato', tmax: 5, tmin: -3, pioggia: 'poca' },
    { voto: 'buono', tmax: 11, tmin: 2, pioggia: 'poca' },
    { voto: 'ideale', tmax: 18, tmin: 8, pioggia: 'media', nota: { it: "Fioritura dei ciliegi, da sud verso nord", en: "Cherry blossom, moving from south to north", es: "Floración de los cerezos, de sur a norte" } },
    { voto: 'ideale', tmax: 24, tmin: 14, pioggia: 'media' },
    { voto: 'buono', tmax: 28, tmin: 19, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 29, tmin: 22, pioggia: 'molta', nota: { it: "Jangma: monsone con piogge fortissime", en: "Jangma: monsoon season with very heavy rain", es: "Jangma: monzón con lluvias muy fuertes" } },
    { voto: 'sconsigliato', tmax: 30, tmin: 23, pioggia: 'molta', nota: { it: "Caldo umido e rischio tifoni", en: "Humid heat and typhoon risk", es: "Calor húmedo y riesgo de tifones" } },
    { voto: 'buono', tmax: 26, tmin: 18, pioggia: 'media', nota: { it: "Chuseok (set-ott): il paese si sposta, tutto pieno", en: "Chuseok (Sep-Oct): the whole country travels, everything full", es: "Chuseok (sep-oct): todo el país viaja, todo lleno" } },
    { voto: 'ideale', tmax: 20, tmin: 11, pioggia: 'poca', nota: { it: "Foliage: evento nazionale fino a inizio novembre", en: "Autumn foliage, a national event until early November", es: "Follaje otoñal, evento nacional hasta principios de noviembre" } },
    { voto: 'buono', tmax: 12, tmin: 4, pioggia: 'poca' },
    { voto: 'buono', tmax: 4, tmin: -3, pioggia: 'poca' },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 15, attivita: 10 },
    medio: { dormire: 40, mangiare: 40, trasporti: 20, attivita: 20 },
    comfort: { dormire: 100, mangiare: 75, trasporti: 35, attivita: 40 },
    nota: { it: "Trasporti e pasti costano poco; caffè e alloggi a Seoul sono a prezzi europei.", en: "Transport and meals are cheap; coffee and Seoul hotels cost as much as in Europe.", es: "Transporte y comidas baratos; el café y los hoteles de Seúl cuestan como en Europa." },
  },
  aggiornato: '2026-11',
}
