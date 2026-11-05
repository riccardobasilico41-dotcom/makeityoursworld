import type { TripMeta } from '@/lib/types'

export const indonesiaIsolaPerIsolaMeta: TripMeta = {
  tripSlug: 'indonesia-isola-per-isola',
  paeseSlug: 'indonesia',
  ritmo:
    'Guía modular: al menos una semana por isla, eligiendo las islas según el mes. Los destinos son intercambiables',
  trasporti:
    'Vuelos internos desde los nudos de Yakarta, Bali y Makassar; trenes en Java; lanchas rápidas a las Nusa, las Gili y las Mentawai; ferris; barcos y liveaboards en Komodo y Raja Ampat; conductores por días, o moto para quien tenga experiencia',
  stile: ['isole', 'mare', 'vulcani', 'giungla', 'cultura'],
  adattoA: [
    'quien tiene que elegir qué islas ver y en qué época',
    'quien quiere entender cómo moverse entre las islas y cuántos días hacen falta',
    'quien ya ha estado en Bali y busca la siguiente isla',
    'quien quiere montar su propio itinerario a partir de los que ya están en la web',
  ],
  puntiForti: [
    'El calendario de temporadas isla por isla, con Raja Ampat al revés',
    'Para cada isla qué hacer, cómo llegar, cuándo ir y cuántos días hacen falta',
    'Los recuerdos de Rick isla por isla, de los dragones de Komodo a los funerales de Toraja',
    'Ejemplos de combinación ya listos, de 12 días a 5 semanas',
  ],
  criticita: [
    'Precios, horarios, cierres y tasas locales cambian a menudo: hay que comprobarlos antes de salir',
    'El Rinjani suele cerrar en los primeros meses del año (en 2026 del 1 de enero al 31 de marzo) y puede cerrar senderos también en estación seca',
    'El importe del permiso de Raja Ampat para extranjeros no está confirmado',
    'Rick no ha visitado el Borneo indonesio: solo información básica',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    aChiLoConsiglio: 'A quien está eligiendo adónde ir en Indonesia: una o dos islas por viaje, según el mes',
  },
  unitaGiorniLabel: 'Zona',
  tappeMappa: [
    { nome: 'Sumatra', destinazioneSlug: 'sumatra' },
    { nome: 'Mentawai', destinazioneSlug: 'mentawai' },
    { nome: 'Java', destinazioneSlug: 'giava' },
    { nome: 'Bali', destinazioneSlug: 'bali' },
    { nome: 'Nusa Penida y Nusa Lembongan', destinazioneSlug: 'bali', lat: -8.74559, lng: 115.53468 },
    { nome: 'Lombok y Gili', destinazioneSlug: 'lombok-gili' },
    { nome: 'Komodo', destinazioneSlug: 'komodo' },
    { nome: 'Flores', destinazioneSlug: 'flores' },
    { nome: 'Célebes', destinazioneSlug: 'sulawesi' },
    { nome: 'Raja Ampat', destinazioneSlug: 'raja-ampat' },
  ],
  giorni: [
    { titoloGiorno: 'Bali', tratta: 'Vuelo a Denpasar', intensita: 'leggero', costiNoti: 'tasa turística 150.000 IDR por persona', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Nusa Penida y Nusa Lembongan', tratta: 'Lancha rápida desde Sanur, una media hora', intensita: 'medio', costiNoti: 'tasa local de las Nusa, distinta de la de Bali', destinazioneSlug: 'bali' },
    { titoloGiorno: 'Lombok y las Gili', tratta: 'Vuelo a Lombok o lancha rápida desde Bali', intensita: 'intenso', costiNoti: 'Rinjani con guía y operador autorizado, reserva en la app oficial E-Rinjani; en 2026 cerrado del 1 de enero al 31 de marzo', destinazioneSlug: 'lombok-gili' },
    { titoloGiorno: 'Java', tratta: 'Vuelo a Yakarta, Yogyakarta o Surabaya', intensita: 'intenso', costiNoti: 'entrada con cupo para subir a Borobudur', destinazioneSlug: 'giava' },
    { titoloGiorno: 'Sumatra', tratta: 'Vuelo a Medan o Padang', intensita: 'intenso', destinazioneSlug: 'sumatra' },
    { titoloGiorno: 'Las Mentawai', tratta: 'Ferri rápido Mentawai Fast desde Padang', intensita: 'intenso', costiNoti: 'tasa de surf con importe por comprobar', destinazioneSlug: 'mentawai' },
    { titoloGiorno: 'Komodo y Flores', tratta: 'Vuelo directo desde Bali o Yakarta a Labuan Bajo', intensita: 'medio', costiNoti: 'entrada al parque 250.000 IDR por persona para extranjeros desde el 30/10/2024', destinazioneSlug: 'komodo' },
    { titoloGiorno: 'Célebes', tratta: 'Vuelo a Makassar o Manado; 8-10 h de carretera a Toraja', intensita: 'medio', destinazioneSlug: 'sulawesi' },
    { titoloGiorno: 'Raja Ampat', tratta: 'Vuelo a Sorong, ferri a Waisai unas 2h', intensita: 'medio', costiNoti: 'billete del ferri en el puerto; permiso del parque obligatorio', destinazioneSlug: 'raja-ampat' },
    { titoloGiorno: 'El Borneo indonesio', tratta: 'Vuelo a Pangkalan Bun, klotok desde el puerto de Kumai', intensita: 'leggero' },
  ],
  budget: [
    { etichetta: 'Visado e-VOA', valore: 'unos 500.000 IDR' },
    { etichetta: 'Tasa turística de Bali', valore: '150.000 IDR por persona' },
    { etichetta: 'Entrada al Parque de Komodo', valore: '250.000 IDR por persona para extranjeros, trekking y snorkel incluidos' },
    { etichetta: 'Ferri Sorong-Waisai', valore: 'billete en el puerto, economy o VIP; precio por comprobar' },
    { etichetta: 'Permiso de Raja Ampat (PIN)', valore: 'obligatorio, importe para extranjeros por comprobar' },
    { etichetta: 'Vuelos internos', valore: undefined },
  ],
}
