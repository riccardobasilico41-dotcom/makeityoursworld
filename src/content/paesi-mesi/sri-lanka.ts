import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'sri-lanka',
  zona: { it: "Kandy e altopiano (costa sud-ovest più calda)", en: "Kandy and the hill country (south-west coast warmer)", es: "Kandy y las tierras altas (costa suroeste más cálida)" },
  mesi: [
    { voto: 'ideale', tmax: 27, tmin: 18, pioggia: 'poca', nota: { it: "Costa sud-ovest e altopiano asciutti, stagione dell'Adam's Peak", en: "Dry south-west coast and hills, Adam's Peak season", es: "Costa suroeste y tierras altas secas, temporada del Adam's Peak" } },
    { voto: 'ideale', tmax: 28, tmin: 18, pioggia: 'poca' },
    { voto: 'ideale', tmax: 30, tmin: 18, pioggia: 'media' },
    { voto: 'buono', tmax: 30, tmin: 20, pioggia: 'molta', nota: { it: "Capodanno singalese a metà mese: trasporti e hotel pieni", en: "Sinhalese New Year mid-month: transport and hotels full", es: "Año Nuevo cingalés a mediados de mes: transporte y hoteles llenos" } },
    { voto: 'sconsigliato', tmax: 29, tmin: 20, pioggia: 'media', nota: { it: "Monsone di sud-ovest su costa ovest, sud e altopiano", en: "South-west monsoon on the west and south coasts and hills", es: "Monzón del suroeste en las costas oeste y sur y en las tierras altas" } },
    { voto: 'sconsigliato', tmax: 28, tmin: 20, pioggia: 'media' },
    { voto: 'buono', tmax: 27, tmin: 20, pioggia: 'media', nota: { it: "Costa est al meglio; Esala Perahera a Kandy (luglio-agosto)", en: "East coast at its best; Esala Perahera in Kandy (July-August)", es: "Costa este en su mejor momento; Esala Perahera en Kandy (julio-agosto)" } },
    { voto: 'buono', tmax: 28, tmin: 19, pioggia: 'media' },
    { voto: 'buono', tmax: 28, tmin: 19, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 28, tmin: 19, pioggia: 'molta', nota: { it: "Piogge intermonsoniche su quasi tutta l'isola", en: "Inter-monsoon rains over most of the island", es: "Lluvias entre monzones en casi toda la isla" } },
    { voto: 'buono', tmax: 27, tmin: 19, pioggia: 'molta', nota: { it: "Ancora piovoso, ma poca folla e prezzi bassi", en: "Still rainy, but few crowds and low prices", es: "Todavía lluvioso, pero poca gente y precios bajos" } },
    { voto: 'buono', tmax: 27, tmin: 18, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 10, mangiare: 10, trasporti: 10, attivita: 15 },
    medio: { dormire: 30, mangiare: 15, trasporti: 20, attivita: 25 },
    comfort: { dormire: 90, mangiare: 30, trasporti: 35, attivita: 40 },
    nota: { it: "Siti archeologici e safari si pagano in dollari a prezzo da stranieri; l'auto con autista conviene in due o più.", en: "Archaeological sites and safaris are charged in dollars at foreigner rates; a car with driver pays off for two or more.", es: "Los sitios arqueológicos y los safaris se pagan en dólares con tarifa de extranjero; el coche con chófer compensa entre dos o más." },
  },
  aggiornato: '2026-11',
}
