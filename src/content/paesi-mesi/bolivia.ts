import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'bolivia',
  zona: { it: 'La Paz e altopiano', en: 'La Paz and the Altiplano', es: 'La Paz y el altiplano' },
  mesi: [
    { voto: 'buono', tmax: 19, tmin: 7, pioggia: 'molta', nota: { it: 'Piogge: Salar allagato a specchio, ma alcune tappe del tour chiuse', en: 'Rainy season: Salar mirror effect, but some tour stops close', es: 'Lluvias: efecto espejo en el Salar, pero cierran algunas paradas' } },
    { voto: 'buono', tmax: 19, tmin: 7, pioggia: 'molta', nota: { it: 'Carnevale di Oruro, patrimonio UNESCO; strade peggiori per le piogge', en: 'Oruro Carnival, UNESCO-listed; rain makes roads worse', es: 'Carnaval de Oruro, patrimonio UNESCO; las lluvias empeoran las rutas' } },
    { voto: 'buono', tmax: 19, tmin: 7, pioggia: 'media' },
    { voto: 'buono', tmax: 19, tmin: 6, pioggia: 'media' },
    { voto: 'ideale', tmax: 19, tmin: 5, pioggia: 'poca', nota: { it: 'Inizia la stagione secca: Salar asciutto e piste del Sud Lípez aperte', en: 'Dry season begins: Salar dry, Sur Lípez tracks open', es: 'Empieza la estación seca: Salar seco y pistas del Sur Lípez abiertas' } },
    { voto: 'ideale', tmax: 18, tmin: 3, pioggia: 'poca' },
    { voto: 'ideale', tmax: 17, tmin: 3, pioggia: 'poca', nota: { it: 'Cieli limpidi, ma notti sotto zero in quota', en: 'Clear skies, but freezing nights at altitude', es: 'Cielos despejados, pero noches bajo cero en altura' } },
    { voto: 'ideale', tmax: 18, tmin: 4, pioggia: 'poca' },
    { voto: 'ideale', tmax: 19, tmin: 5, pioggia: 'poca' },
    { voto: 'ideale', tmax: 20, tmin: 6, pioggia: 'media' },
    { voto: 'buono', tmax: 20, tmin: 7, pioggia: 'media' },
    { voto: 'buono', tmax: 20, tmin: 8, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 10, mangiare: 10, trasporti: 10, attivita: 15 },
    medio: { dormire: 25, mangiare: 15, trasporti: 20, attivita: 30 },
    comfort: { dormire: 55, mangiare: 30, trasporti: 40, attivita: 50 },
    nota: { it: 'Il Paese più economico del Sud America: le voci vere sono il tour di Uyuni e la Carretera de la Muerte.', en: 'South America\'s cheapest country: the real costs are the Uyuni tour and the Death Road.', es: 'El país más barato de Sudamérica: los gastos reales son el tour de Uyuni y la Carretera de la Muerte.' },
  },
  aggiornato: '2026-11',
}
