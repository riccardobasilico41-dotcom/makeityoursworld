import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'svezia',
  zona: { it: 'Lapponia: Kiruna e Abisko', en: 'Lapland: Kiruna and Abisko', es: 'Laponia: Kiruna y Abisko' },
  mesi: [
    { voto: 'ideale', tmax: -8, tmin: -17, pioggia: 'poca', nota: { it: 'Freddo secco fino a -25 °C; aurora nelle notti serene', en: 'Dry cold down to -25 °C; aurora on clear nights', es: 'Frío seco hasta -25 °C; aurora en noches despejadas' } },
    { voto: 'ideale', tmax: -7, tmin: -16, pioggia: 'poca' },
    { voto: 'ideale', tmax: -2, tmin: -12, pioggia: 'poca', nota: { it: 'Giornate più lunghe, aurora ancora frequente e prezzi più bassi', en: 'Longer days, frequent aurora and lower prices', es: 'Días más largos, auroras frecuentes y precios más bajos' } },
    { voto: 'sconsigliato', tmax: 3, tmin: -6, pioggia: 'poca', nota: { it: 'Notti troppo chiare per l\'aurora, neve ancora alta', en: 'Nights too bright for aurora, deep snow still', es: 'Noches demasiado claras para la aurora, aún mucha nieve' } },
    { voto: 'sconsigliato', tmax: 9, tmin: 1, pioggia: 'media' },
    { voto: 'buono', tmax: 15, tmin: 6, pioggia: 'media', nota: { it: 'Sole di mezzanotte e sentieri del Kungsleden', en: 'Midnight sun and Kungsleden trails', es: 'Sol de medianoche y senderos del Kungsleden' } },
    { voto: 'buono', tmax: 19, tmin: 9, pioggia: 'molta' },
    { voto: 'buono', tmax: 16, tmin: 7, pioggia: 'media' },
    { voto: 'buono', tmax: 10, tmin: 3, pioggia: 'media', nota: { it: 'Colori d\'autunno e ritorno dell\'aurora', en: 'Autumn colours and the aurora returns', es: 'Colores de otoño y vuelve la aurora' } },
    { voto: 'buono', tmax: 3, tmin: -4, pioggia: 'media' },
    { voto: 'buono', tmax: -3, tmin: -10, pioggia: 'poca' },
    { voto: 'ideale', tmax: -5, tmin: -13, pioggia: 'poca', nota: { it: 'Natale-Capodanno: il periodo più caro per voli e alloggi', en: 'Christmas-New Year: the priciest time for flights and stays', es: 'Navidad-Año Nuevo: la época más cara para vuelos y alojamiento' } },
  ],
  costi: {
    economico: { dormire: 40, mangiare: 30, trasporti: 10, attivita: 20 },
    medio: { dormire: 75, mangiare: 60, trasporti: 15, attivita: 45 },
    comfort: { dormire: 150, mangiare: 95, trasporti: 30, attivita: 90 },
    volo: [400, 650],
    nota: { it: 'Febbraio-marzo costa molto meno di Capodanno; husky e motoslitta sono le voci più care.', en: 'February-March costs far less than New Year; husky and snowmobile tours are the big extras.', es: 'Febrero-marzo cuesta mucho menos que Año Nuevo; huskies y motonieve son los extras más caros.' },
  },
  aggiornato: '2026-11',
}
