import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'panama',
  zona: {"it": "Panama City; Bocas del Toro ha un microclima a parte", "en": "Panama City; Bocas del Toro has its own microclimate", "es": "Ciudad de Panamá; Bocas del Toro tiene su propio microclima"},
  mesi: [
    { voto: 'ideale', tmax: 32, tmin: 21, pioggia: 'poca', nota: {"it": "Piena stagione secca, mare calmo a San Blas", "en": "Peak dry season, calm seas at San Blas", "es": "Plena temporada seca, mar en calma en San Blas"} },
    { voto: 'ideale', tmax: 33, tmin: 22, pioggia: 'poca' },
    { voto: 'ideale', tmax: 33, tmin: 22, pioggia: 'poca' },
    { voto: 'buono', tmax: 33, tmin: 23, pioggia: 'media' },
    { voto: 'buono', tmax: 32, tmin: 23, pioggia: 'molta', nota: {"it": "Iniziano le piogge in città e negli altopiani", "en": "Rains begin in the city and the highlands", "es": "Empiezan las lluvias en la ciudad y el altiplano"} },
    { voto: 'buono', tmax: 32, tmin: 23, pioggia: 'molta' },
    { voto: 'buono', tmax: 32, tmin: 23, pioggia: 'molta' },
    { voto: 'buono', tmax: 32, tmin: 23, pioggia: 'molta' },
    { voto: 'buono', tmax: 31, tmin: 22, pioggia: 'molta', nota: {"it": "Bocas del Toro spesso soleggiata, il resto del Paese piovoso", "en": "Bocas del Toro often sunny, the rest of the country wet", "es": "Bocas del Toro a menudo soleada, el resto del país lluvioso"} },
    { voto: 'buono', tmax: 31, tmin: 22, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 31, tmin: 22, pioggia: 'molta', nota: {"it": "Mese più piovoso sui Caraibi; San Blas mosso", "en": "Wettest month on the Caribbean side; rough seas at San Blas", "es": "El mes más lluvioso en el Caribe; mar agitado en San Blas"} },
    { voto: 'buono', tmax: 32, tmin: 22, pioggia: 'media', nota: {"it": "Il secco arriva da metà mese", "en": "The dry season arrives mid-month", "es": "La temporada seca llega a mitad de mes"} },
  ],
  costi: {
    economico: { dormire: 20, mangiare: 20, trasporti: 15, attivita: 15 },
    medio: { dormire: 50, mangiare: 30, trasporti: 25, attivita: 35 },
    comfort: { dormire: 120, mangiare: 55, trasporti: 50, attivita: 60 },
    nota: {"it": "San Blas costa di più: cabañas 60-150 $ a persona con pasti, transfer 40-60 $ a tratta.", "en": "San Blas costs more: cabañas $60-150 per person with meals, transfers $40-60 each way.", "es": "San Blas cuesta más: cabañas de 60-150 $ por persona con comidas, traslados de 40-60 $ por trayecto."},
  },
  aggiornato: '2026-11',
}
