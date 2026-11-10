import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'borneo',
  zona: { it: "Kota Kinabalu e Sabah", en: "Kota Kinabalu and Sabah", es: "Kota Kinabalu y Sabah" },
  mesi: [
    { voto: 'buono', tmax: 31, tmin: 24, pioggia: 'media', nota: { it: "Monsone di nord-est: mare mosso a Semporna", en: "Northeast monsoon: rough seas around Semporna", es: "Monzón del noreste: mar agitado en Semporna" } },
    { voto: 'buono', tmax: 31, tmin: 24, pioggia: 'poca' },
    { voto: 'buono', tmax: 32, tmin: 24, pioggia: 'poca', nota: { it: "Tra i mesi più asciutti a Kota Kinabalu", en: "Among the driest months in Kota Kinabalu", es: "De los meses más secos en Kota Kinabalu" } },
    { voto: 'ideale', tmax: 33, tmin: 25, pioggia: 'media', nota: { it: "Mare calmo e visibilità alta a Sipadan", en: "Calm seas and great visibility at Sipadan", es: "Mar en calma y gran visibilidad en Sipadan" } },
    { voto: 'ideale', tmax: 33, tmin: 25, pioggia: 'molta' },
    { voto: 'ideale', tmax: 33, tmin: 24, pioggia: 'molta' },
    { voto: 'ideale', tmax: 32, tmin: 24, pioggia: 'molta' },
    { voto: 'ideale', tmax: 32, tmin: 24, pioggia: 'molta' },
    { voto: 'ideale', tmax: 32, tmin: 24, pioggia: 'molta' },
    { voto: 'buono', tmax: 32, tmin: 24, pioggia: 'molta', nota: { it: "Il mese più piovoso a Kota Kinabalu", en: "The wettest month in Kota Kinabalu", es: "El mes más lluvioso en Kota Kinabalu" } },
    { voto: 'sconsigliato', tmax: 32, tmin: 24, pioggia: 'molta', nota: { it: "Piogge frequenti, fiume alto sul Kinabatangan", en: "Frequent rain, high river on the Kinabatangan", es: "Lluvias frecuentes, río crecido en el Kinabatangan" } },
    { voto: 'sconsigliato', tmax: 32, tmin: 24, pioggia: 'molta' },
  ],
  costi: {
    economico: { dormire: 15, mangiare: 10, trasporti: 15, attivita: 30 },
    medio: { dormire: 35, mangiare: 15, trasporti: 25, attivita: 60 },
    comfort: { dormire: 90, mangiare: 30, trasporti: 40, attivita: 110 },
    nota: { it: "Il Borneo costa più della penisola: lodge a pacchetto, permessi di Sipadan e voli interni.", en: "Borneo costs more than mainland Malaysia: package lodges, Sipadan permits and domestic flights.", es: "Borneo cuesta más que la península: lodges con paquete, permisos de Sipadan y vuelos internos." },
  },
  aggiornato: '2026-11',
}
