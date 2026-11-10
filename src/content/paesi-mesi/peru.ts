import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'peru',
  zona: {"it": "Cusco e Ande del sud", "en": "Cusco and the southern Andes", "es": "Cusco y los Andes del sur"},
  mesi: [
    { voto: 'sconsigliato', tmax: 21, tmin: 8, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 20, tmin: 8, pioggia: 'molta', nota: {"it": "Piogge forti sulle Ande; Cammino Inca chiuso per manutenzione", "en": "Heavy rain in the Andes; Inca Trail closed for maintenance", "es": "Lluvias fuertes en los Andes; Camino Inca cerrado por mantenimiento"} },
    { voto: 'sconsigliato', tmax: 21, tmin: 8, pioggia: 'molta' },
    { voto: 'buono', tmax: 21, tmin: 6, pioggia: 'media', nota: {"it": "Fine delle piogge: valli verdi e meno gente", "en": "End of the rains: green valleys, fewer people", "es": "Fin de las lluvias: valles verdes y menos gente"} },
    { voto: 'ideale', tmax: 21, tmin: 4, pioggia: 'poca' },
    { voto: 'ideale', tmax: 21, tmin: 2, pioggia: 'poca', nota: {"it": "Inti Raymi il 24 a Cusco: città piena, prenotare prima", "en": "Inti Raymi on the 24th in Cusco: city full, book early", "es": "Inti Raymi el 24 en Cusco: ciudad llena, reservar antes"} },
    { voto: 'ideale', tmax: 21, tmin: 1, pioggia: 'poca', nota: {"it": "Alta stagione: Machu Picchu e treni da prenotare per tempo", "en": "High season: book Machu Picchu and trains well ahead", "es": "Temporada alta: reservar Machu Picchu y trenes con tiempo"} },
    { voto: 'ideale', tmax: 22, tmin: 3, pioggia: 'poca' },
    { voto: 'ideale', tmax: 22, tmin: 5, pioggia: 'poca' },
    { voto: 'buono', tmax: 22, tmin: 7, pioggia: 'media' },
    { voto: 'buono', tmax: 22, tmin: 8, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 21, tmin: 8, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 10, mangiare: 15, trasporti: 15, attivita: 20 },
    medio: { dormire: 35, mangiare: 25, trasporti: 25, attivita: 40 },
    comfort: { dormire: 100, mangiare: 50, trasporti: 45, attivita: 70 },
    nota: {"it": "Paese economico, ma il treno per Machu Picchu costa 70-500 $ A/R e i lodge amazzonici 300-400 $ per tre notti.", "en": "A cheap country, but the Machu Picchu train costs 70-500 $ return and Amazon lodges 300-400 $ for three nights.", "es": "País barato, pero el tren a Machu Picchu cuesta 70-500 $ ida y vuelta y los lodges amazónicos 300-400 $ por tres noches."},
  },
  aggiornato: '2026-11',
}
