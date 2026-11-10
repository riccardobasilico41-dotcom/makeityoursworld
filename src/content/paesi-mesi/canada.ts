import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'canada',
  zona: { it: "Montréal (Toronto un po' più mite)", en: "Montréal (Toronto slightly milder)", es: "Montreal (Toronto algo más templado)" },
  mesi: [
    { voto: 'sconsigliato', tmax: -5, tmin: -13, pioggia: 'media', nota: { it: "Neve e gelo: battello del Niagara e crociere delle balene fermi", en: "Snow and frost: Niagara boat and whale cruises stopped", es: "Nieve y hielo: barco del Niágara y cruceros de ballenas parados" } },
    { voto: 'sconsigliato', tmax: -3, tmin: -12, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 2, tmin: -6, pioggia: 'media' },
    { voto: 'sconsigliato', tmax: 11, tmin: 1, pioggia: 'media' },
    { voto: 'buono', tmax: 19, tmin: 8, pioggia: 'media' },
    { voto: 'ideale', tmax: 24, tmin: 14, pioggia: 'media', nota: { it: "Tutto aperto, balene a Tadoussac, giornate lunghissime", en: "Everything open, whales at Tadoussac, very long days", es: "Todo abierto, ballenas en Tadoussac, días larguísimos" } },
    { voto: 'ideale', tmax: 27, tmin: 17, pioggia: 'media', nota: { it: "Estate calda e umida a Toronto e Montréal, festival ovunque", en: "Hot, humid summer in Toronto and Montréal, festivals everywhere", es: "Verano cálido y húmedo en Toronto y Montreal, festivales por todas partes" } },
    { voto: 'ideale', tmax: 26, tmin: 16, pioggia: 'media' },
    { voto: 'ideale', tmax: 21, tmin: 11, pioggia: 'media' },
    { voto: 'ideale', tmax: 13, tmin: 5, pioggia: 'media', nota: { it: "Foliage fino a metà mese, notti già fredde", en: "Fall foliage until mid-month, nights already cold", es: "Follaje otoñal hasta mediados de mes, noches ya frías" } },
    { voto: 'sconsigliato', tmax: 6, tmin: -2, pioggia: 'media', nota: { it: "Città spente; a Churchill stagione degli orsi polari", en: "Quiet cities; polar bear season in Churchill", es: "Ciudades apagadas; temporada de osos polares en Churchill" } },
    { voto: 'sconsigliato', tmax: -1, tmin: -9, pioggia: 'media' },
  ],
  costi: {
    economico: { dormire: 40, mangiare: 35, trasporti: 20, attivita: 15 },
    medio: { dormire: 80, mangiare: 55, trasporti: 35, attivita: 30 },
    comfort: { dormire: 150, mangiare: 90, trasporti: 50, attivita: 60 },
    nota: { it: "Ai prezzi esposti si aggiungono tasse del 13-15 % e mance del 15-20 %; auto e alloggi sono le voci più pesanti.", en: "Displayed prices exclude 13-15% sales tax and 15-20% tips; car hire and lodging are the biggest costs.", es: "A los precios se suman impuestos del 13-15 % y propinas del 15-20 %; coche y alojamiento son lo que más pesa." },
  },
  aggiornato: '2026-11',
}
