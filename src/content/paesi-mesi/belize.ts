import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'belize',
  zona: { it: "Costa e isole (Belize City)", en: "Coast and cayes (Belize City)", es: "Costa y cayos (Belize City)" },
  mesi: [
    { voto: 'buono', tmax: 28, tmin: 21, pioggia: 'media' },
    { voto: 'ideale', tmax: 29, tmin: 22, pioggia: 'poca', nota: { it: "Stagione secca, mare limpido per immersioni e snorkeling", en: "Dry season, clear water for diving and snorkelling", es: "Temporada seca, mar claro para buceo y snorkel" } },
    { voto: 'ideale', tmax: 30, tmin: 22, pioggia: 'poca' },
    { voto: 'ideale', tmax: 31, tmin: 24, pioggia: 'poca' },
    { voto: 'buono', tmax: 32, tmin: 25, pioggia: 'media' },
    { voto: 'buono', tmax: 32, tmin: 26, pioggia: 'molta', nota: { it: "Iniziano piogge e stagione degli uragani, prezzi più bassi", en: "Rains and hurricane season begin, lower prices", es: "Empiezan las lluvias y la temporada de huracanes, precios más bajos" } },
    { voto: 'buono', tmax: 32, tmin: 25, pioggia: 'molta' },
    { voto: 'buono', tmax: 32, tmin: 25, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 32, tmin: 25, pioggia: 'molta', nota: { it: "Picco di uragani e piogge, alcune strutture chiudono", en: "Peak hurricanes and rain, some places close", es: "Pico de huracanes y lluvias, algunos sitios cierran" } },
    { voto: 'sconsigliato', tmax: 31, tmin: 24, pioggia: 'molta' },
    { voto: 'buono', tmax: 29, tmin: 22, pioggia: 'molta', nota: { it: "19 novembre, Garifuna Settlement Day a Dangriga e Hopkins", en: "19 November, Garifuna Settlement Day in Dangriga and Hopkins", es: "19 de noviembre, Garifuna Settlement Day en Dangriga y Hopkins" } },
    { voto: 'buono', tmax: 28, tmin: 21, pioggia: 'molta', nota: { it: "Natale e Capodanno: isole piene e prezzi al massimo", en: "Christmas and New Year: full cayes, top prices", es: "Navidad y Año Nuevo: cayos llenos y precios máximos" } },
  ],
  costi: {
    economico: { dormire: 25, mangiare: 20, trasporti: 10, attivita: 20 },
    medio: { dormire: 55, mangiare: 35, trasporti: 20, attivita: 45 },
    comfort: { dormire: 130, mangiare: 60, trasporti: 45, attivita: 90 },
    nota: { it: "Prezzi da Caraibi più che da Centro America: immersioni al Blue Hole e voli interni pesano molto.", en: "Caribbean rather than Central American prices: Blue Hole dives and domestic flights weigh heavily.", es: "Precios de Caribe más que de Centroamérica: el buceo en el Blue Hole y los vuelos internos pesan mucho." },
  },
  aggiornato: '2026-11',
}
