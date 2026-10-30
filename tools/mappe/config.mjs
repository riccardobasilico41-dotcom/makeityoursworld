// Configurazione delle mappe Paese: da quale geometria Natural Earth nasce ogni slug
// di src/content/paesi, quali pezzi tenere e in quali codici Paese cercare con Nominatim.
//
// fonte: 'world' = world-atlas@2.0.2 countries-50m (Natural Earth 1:50m, pubblico dominio)
//        'us'    = us-atlas@3.0.1 states-10m (US Census / Natural Earth, pubblico dominio)
// nomi:  feature da unire (properties.name nel topojson)
// clip:  [lngMin, latMin, lngMax, latMax] — tiene solo i poligoni con il centro dentro
//        (es. Francia metropolitana, Malesia peninsulare, isola del Borneo)
// cc:    countrycodes per Nominatim
// isole: 'tutte' = non scartare le isole piccole (arcipelaghi dove le isole SONO il Paese)

export const MAPPE = {
  'arabia-saudita': { fonte: 'world', nomi: ['Saudi Arabia'], cc: 'sa' },
  austria: { fonte: 'world', nomi: ['Austria'], cc: 'at' },
  belize: { fonte: 'world', nomi: ['Belize'], cc: 'bz', isole: 'tutte' },
  bolivia: { fonte: 'world', nomi: ['Bolivia'], cc: 'bo' },
  borneo: { fonte: 'world', nomi: ['Malaysia', 'Brunei', 'Indonesia'], clip: [108, -4.6, 119.4, 7.6], cc: 'my,bn,id' },
  brasile: { fonte: 'world', nomi: ['Brazil'], cc: 'br' },
  bulgaria: { fonte: 'world', nomi: ['Bulgaria'], cc: 'bg' },
  california: { fonte: 'us', nomi: ['California'], cc: 'us' },
  cina: { fonte: 'world', nomi: ['China', 'Hong Kong', 'Macao'], cc: 'cn,hk,mo' },
  'corea-del-sud': { fonte: 'world', nomi: ['South Korea'], cc: 'kr' },
  'costa-rica': { fonte: 'world', nomi: ['Costa Rica'], clip: [-86.5, 7.5, -82, 11.5], cc: 'cr' },
  croazia: { fonte: 'world', nomi: ['Croatia'], cc: 'hr', isole: 'tutte' },
  danimarca: { fonte: 'world', nomi: ['Denmark'], cc: 'dk' },
  egitto: { fonte: 'world', nomi: ['Egypt'], cc: 'eg' },
  'emirati-arabi-uniti': { fonte: 'world', nomi: ['United Arab Emirates'], cc: 'ae' },
  estonia: { fonte: 'world', nomi: ['Estonia'], cc: 'ee' },
  filippine: { fonte: 'world', nomi: ['Philippines'], cc: 'ph', isole: 'tutte' },
  florida: { fonte: 'us', nomi: ['Florida'], cc: 'us', isole: 'tutte' },
  francia: { fonte: 'world', nomi: ['France'], clip: [-5.5, 41, 10, 51.5], cc: 'fr' },
  germania: { fonte: 'world', nomi: ['Germany'], cc: 'de' },
  giappone: { fonte: 'world', nomi: ['Japan'], cc: 'jp' },
  giordania: { fonte: 'world', nomi: ['Jordan'], cc: 'jo' },
  guatemala: { fonte: 'world', nomi: ['Guatemala'], cc: 'gt' },
  india: { fonte: 'world', nomi: ['India'], cc: 'in' },
  indonesia: { fonte: 'world', nomi: ['Indonesia'], cc: 'id', isole: 'tutte' },
  islanda: { fonte: 'world', nomi: ['Iceland'], cc: 'is' },
  italia: { fonte: 'world', nomi: ['Italy'], cc: 'it', isole: 'tutte' },
  lettonia: { fonte: 'world', nomi: ['Latvia'], cc: 'lv' },
  lituania: { fonte: 'world', nomi: ['Lithuania'], cc: 'lt' },
  maldive: { fonte: 'world', nomi: ['Maldives'], cc: 'mv', isole: 'tutte' },
  malesia: { fonte: 'world', nomi: ['Malaysia'], clip: [99, 0.8, 105, 7.6], cc: 'my' },
  marocco: { fonte: 'world', nomi: ['Morocco'], cc: 'ma' },
  messico: { fonte: 'world', nomi: ['Mexico'], cc: 'mx' },
  montenegro: { fonte: 'world', nomi: ['Montenegro'], cc: 'me' },
  'new-york': { fonte: 'us', nomi: ['New York'], cc: 'us', isole: 'tutte' },
  norvegia: { fonte: 'world', nomi: ['Norway'], clip: [4, 57.5, 32, 71.5], cc: 'no' },
  'paesi-bassi': { fonte: 'world', nomi: ['Netherlands'], clip: [3, 50.5, 7.5, 54], cc: 'nl' },
  panama: { fonte: 'world', nomi: ['Panama'], cc: 'pa', isole: 'tutte' },
  peru: { fonte: 'world', nomi: ['Peru'], cc: 'pe' },
  polonia: { fonte: 'world', nomi: ['Poland'], cc: 'pl' },
  portogallo: { fonte: 'world', nomi: ['Portugal'], clip: [-10, 36.8, -6, 42.3], cc: 'pt' },
  qatar: { fonte: 'world', nomi: ['Qatar'], cc: 'qa' },
  'repubblica-ceca': { fonte: 'world', nomi: ['Czechia'], cc: 'cz' },
  singapore: { fonte: 'world', nomi: ['Singapore'], cc: 'sg', isole: 'tutte' },
  spagna: { fonte: 'world', nomi: ['Spain'], clip: [-18.5, 27.5, 4.5, 44], cc: 'es', isole: 'tutte' },
  'sri-lanka': { fonte: 'world', nomi: ['Sri Lanka'], cc: 'lk' },
  svezia: { fonte: 'world', nomi: ['Sweden'], cc: 'se' },
  svizzera: { fonte: 'world', nomi: ['Switzerland'], cc: 'ch' },
  thailandia: { fonte: 'world', nomi: ['Thailand'], cc: 'th', isole: 'tutte' },
  transilvania: { fonte: 'world', nomi: ['Romania'], cc: 'ro' },
  turchia: { fonte: 'world', nomi: ['Turkey'], cc: 'tr' },
  ungheria: { fonte: 'world', nomi: ['Hungary'], cc: 'hu' },
}
