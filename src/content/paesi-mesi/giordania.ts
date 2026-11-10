import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'giordania',
  zona: { it: "Amman e altopiano (Petra simile; Aqaba e Mar Morto molto più caldi)", en: "Amman and the highlands (Petra similar; Aqaba and the Dead Sea much hotter)", es: "Amán y la meseta (Petra similar; Áqaba y el mar Muerto mucho más cálidos)" },
  mesi: [
    { voto: 'buono', tmax: 13, tmin: 4, pioggia: 'media', nota: { it: "Mite di giorno, notti gelide nel deserto; possibile neve", en: "Mild days, freezing desert nights; snow possible", es: "Días suaves, noches heladas en el desierto; posible nieve" } },
    { voto: 'buono', tmax: 14, tmin: 5, pioggia: 'media' },
    { voto: 'ideale', tmax: 18, tmin: 8, pioggia: 'media' },
    { voto: 'ideale', tmax: 24, tmin: 11, pioggia: 'poca', nota: { it: "Clima ideale per Petra e i trekking a Wadi Rum", en: "Ideal weather for Petra and Wadi Rum hikes", es: "Clima ideal para Petra y las caminatas en Wadi Rum" } },
    { voto: 'ideale', tmax: 28, tmin: 15, pioggia: 'poca' },
    { voto: 'buono', tmax: 31, tmin: 19, pioggia: 'poca' },
    { voto: 'sconsigliato', tmax: 33, tmin: 21, pioggia: 'poca', nota: { it: "Caldo estremo a Wadi Rum, Aqaba e Mar Morto", en: "Extreme heat in Wadi Rum, Aqaba and the Dead Sea", es: "Calor extremo en Wadi Rum, Áqaba y el mar Muerto" } },
    { voto: 'sconsigliato', tmax: 33, tmin: 21, pioggia: 'poca' },
    { voto: 'buono', tmax: 31, tmin: 19, pioggia: 'poca' },
    { voto: 'ideale', tmax: 27, tmin: 15, pioggia: 'poca', nota: { it: "Caldo in calo, giornate ancora lunghe", en: "Heat easing, days still long", es: "Baja el calor, días todavía largos" } },
    { voto: 'ideale', tmax: 20, tmin: 10, pioggia: 'poca' },
    { voto: 'buono', tmax: 15, tmin: 6, pioggia: 'media', nota: { it: "Capodanno: alta stagione, Petra chiude presto", en: "New Year: high season, Petra closes early", es: "Año Nuevo: temporada alta, Petra cierra pronto" } },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 15, trasporti: 15, attivita: 25 },
    medio: { dormire: 45, mangiare: 30, trasporti: 30, attivita: 40 },
    comfort: { dormire: 120, mangiare: 60, trasporti: 50, attivita: 60 },
    nota: { it: "Petra costa 50 JOD al giorno: il Jordan Pass (70-80 JOD, visto incluso) conviene quasi sempre.", en: "Petra costs 50 JOD a day: the Jordan Pass (70-80 JOD, visa included) almost always pays off.", es: "Petra cuesta 50 JOD al día: el Jordan Pass (70-80 JOD, visado incluido) casi siempre compensa." },
  },
  aggiornato: '2026-11',
}
