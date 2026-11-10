import type { DatiMesiPaese } from './tipi'

export const dati: DatiMesiPaese = {
  paeseSlug: 'francia',
  zona: { it: 'Parigi (le altre regioni nelle note)', en: 'Paris (other regions in the notes)', es: 'París (las demás regiones en las notas)' },
  mesi: [
    { voto: 'buono', tmax: 8, tmin: 3, pioggia: 'media' },
    { voto: 'buono', tmax: 9, tmin: 3, pioggia: 'poca', nota: { it: 'Mimosa in Costa Azzurra; Parigi fredda ma senza code', en: 'Mimosa on the Riviera; Paris cold but queue-free', es: 'Mimosa en la Costa Azul; París fría pero sin colas' } },
    { voto: 'buono', tmax: 13, tmin: 6, pioggia: 'poca' },
    { voto: 'ideale', tmax: 17, tmin: 8, pioggia: 'poca' },
    { voto: 'ideale', tmax: 20, tmin: 11, pioggia: 'media' },
    { voto: 'ideale', tmax: 23, tmin: 14, pioggia: 'media' },
    { voto: 'buono', tmax: 26, tmin: 16, pioggia: 'media', nota: { it: 'Lavanda in Provenza fino a metà mese; Costa Azzurra piena', en: 'Lavender in Provence until mid-month; Riviera packed', es: 'Lavanda en Provenza hasta mediados de mes; Costa Azul llena' } },
    { voto: 'buono', tmax: 26, tmin: 16, pioggia: 'media', nota: { it: 'Tutta la Francia in ferie; a Parigi molti locali chiudono', en: 'All of France on holiday; many Paris places close', es: 'Toda Francia de vacaciones; en París cierran muchos locales' } },
    { voto: 'ideale', tmax: 22, tmin: 13, pioggia: 'poca', nota: { it: 'Vendemmia sulle rotte dei vini, Costa Azzurra più tranquilla', en: 'Grape harvest on the wine routes, quieter Riviera', es: 'Vendimia en las rutas del vino, Costa Azul más tranquila' } },
    { voto: 'ideale', tmax: 17, tmin: 10, pioggia: 'media' },
    { voto: 'buono', tmax: 11, tmin: 6, pioggia: 'media' },
    { voto: 'buono', tmax: 8, tmin: 4, pioggia: 'media', nota: { it: 'Da fine mese si scia sulle Alpi, fino a inizio aprile', en: 'Alpine skiing from late month to early April', es: 'Esquí en los Alpes desde finales de mes hasta abril' } },
  ],
  costi: {
    economico: { dormire: 40, mangiare: 35, trasporti: 15, attivita: 20 },
    medio: { dormire: 85, mangiare: 60, trasporti: 20, attivita: 35 },
    comfort: { dormire: 180, mangiare: 110, trasporti: 35, attivita: 60 },
    nota: { it: 'Parigi e Costa Azzurra in alta stagione sono care; il menù del giorno a pranzo fa risparmiare molto.', en: 'Paris and the Riviera are pricey in peak season; the set lunch menu saves a lot.', es: 'París y la Costa Azul son caras en temporada alta; el menú del día a mediodía ahorra mucho.' },
  },
  aggiornato: '2026-11',
}
