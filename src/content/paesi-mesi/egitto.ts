import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'egitto',
  zona: { it: "Luxor (al Cairo 4-6 °C in meno)", en: "Luxor (Cairo 4-6 °C cooler)", es: "Luxor (en El Cairo 4-6 °C menos)" },
  mesi: [
    { voto: 'ideale', tmax: 23, tmin: 7, pioggia: 'poca', nota: { it: "Alta stagione nei siti, cielo terso e notti fredde", en: "High season at the sites, clear skies and cold nights", es: "Temporada alta en los sitios, cielo despejado y noches frías" } },
    { voto: 'ideale', tmax: 25, tmin: 9, pioggia: 'poca' },
    { voto: 'ideale', tmax: 30, tmin: 13, pioggia: 'poca' },
    { voto: 'buono', tmax: 35, tmin: 18, pioggia: 'poca', nota: { it: "Possibili giornate di khamsin, vento caldo carico di sabbia", en: "Possible khamsin days, hot sand-laden wind", es: "Posibles días de khamsin, viento cálido cargado de arena" } },
    { voto: 'buono', tmax: 39, tmin: 22, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 41, tmin: 25, pioggia: 'poca', nota: { it: "Luxor oltre 40 °C: visite solo all'alba, mare caldissimo", en: "Luxor above 40 °C: visits only at dawn, very warm sea", es: "Luxor por encima de 40 °C: visitas solo al amanecer, mar muy cálido" } },
    { voto: 'sconsigliato', tmax: 41, tmin: 26, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 41, tmin: 26, pioggia: 'poca' },
    { voto: 'buono', tmax: 39, tmin: 23, pioggia: 'poca' },
    { voto: 'ideale', tmax: 36, tmin: 20, pioggia: 'poca', nota: { it: "Il mese più equilibrato; il 22 sole dentro Abu Simbel", en: "The best-balanced month; sun inside Abu Simbel on the 22nd", es: "El mes más equilibrado; el 22, el sol entra en Abu Simbel" } },
    { voto: 'ideale', tmax: 29, tmin: 13, pioggia: 'poca' },
    { voto: 'ideale', tmax: 24, tmin: 9, pioggia: 'poca', nota: { it: "Mare a 22-23 °C e ventoso; Natale e Capodanno i più cari", en: "Sea at 22-23 °C and windy; Christmas and New Year priciest", es: "Mar a 22-23 °C y con viento; Navidad y Año Nuevo, lo más caro" } },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 10, trasporti: 10, attivita: 20 },
    medio: { dormire: 35, mangiare: 20, trasporti: 20, attivita: 30 },
    comfort: { dormire: 90, mangiare: 35, trasporti: 35, attivita: 60 },
    nota: { it: "I biglietti dei siti si pagano a prezzo da stranieri e pesano anche nel budget più basso (GEM circa 35 $).", en: "Site tickets are charged at foreigner rates and weigh even on a tight budget (GEM about $35).", es: "Las entradas a los sitios tienen tarifa de extranjero y pesan incluso con poco presupuesto (GEM unos 35 $)." },
  },
  aggiornato: '2026-11',
}
