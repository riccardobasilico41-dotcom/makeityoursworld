import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'indonesia',
  zona: { it: 'Bali (Raja Ampat nelle note)', en: 'Bali (Raja Ampat in the notes)', es: 'Bali (Raja Ampat en las notas)' },
  mesi: [
    { voto: 'sconsigliato', tmax: 31, tmin: 25, pioggia: 'molta', nota: { it: 'Monsone su Bali, Giava e Flores; Raja Ampat al suo meglio', en: 'Monsoon on Bali, Java and Flores; Raja Ampat at its best', es: 'Monzón en Bali, Java y Flores; Raja Ampat en su mejor momento' } },
    { voto: 'sconsigliato', tmax: 31, tmin: 25, pioggia: 'molta' },
    { voto: 'buono', tmax: 31, tmin: 25, pioggia: 'molta', nota: { it: 'Nyepi, di solito a marzo: Bali ferma 24 ore, aeroporto chiuso', en: 'Nyepi, usually in March: Bali stops for 24 hours, airport shut', es: 'Nyepi, normalmente en marzo: Bali se para 24 horas, aeropuerto cerrado' } },
    { voto: 'ideale', tmax: 31, tmin: 25, pioggia: 'media' },
    { voto: 'ideale', tmax: 31, tmin: 25, pioggia: 'media' },
    { voto: 'ideale', tmax: 30, tmin: 25, pioggia: 'media' },
    { voto: 'ideale', tmax: 29, tmin: 24, pioggia: 'poca', nota: { it: 'Stagione secca e alta stagione: prenotare presto', en: 'Dry season and peak season: book early', es: 'Estación seca y temporada alta: reservar pronto' } },
    { voto: 'ideale', tmax: 29, tmin: 24, pioggia: 'poca' },
    { voto: 'ideale', tmax: 30, tmin: 24, pioggia: 'poca' },
    { voto: 'ideale', tmax: 31, tmin: 25, pioggia: 'media', nota: { it: 'Fine della secca; si apre la finestra di Raja Ampat', en: 'End of the dry season; Raja Ampat window opens', es: 'Fin de la estación seca; se abre la ventana de Raja Ampat' } },
    { voto: 'buono', tmax: 32, tmin: 25, pioggia: 'molta' },
    { voto: 'sconsigliato', tmax: 31, tmin: 25, pioggia: 'molta', nota: { it: 'Piogge forti; Natale e Capodanno tutto pieno a Bali', en: 'Heavy rain; Bali fully booked over Christmas and New Year', es: 'Lluvias fuertes; Bali llena en Navidad y Año Nuevo' } },
  ],
  costi: {
    economico: { dormire: 15, mangiare: 10, trasporti: 10, attivita: 10 },
    medio: { dormire: 30, mangiare: 20, trasporti: 15, attivita: 20 },
    comfort: { dormire: 80, mangiare: 40, trasporti: 30, attivita: 40 },
    nota: { it: 'Economica su Sumatra, Giava e Flores; Raja Ampat costa molto di più per logistica e permesso.', en: 'Cheap on Sumatra, Java and Flores; Raja Ampat costs far more for logistics and permit.', es: 'Barata en Sumatra, Java y Flores; Raja Ampat cuesta mucho más por logística y permiso.' },
  },
  aggiornato: '2026-11',
}
