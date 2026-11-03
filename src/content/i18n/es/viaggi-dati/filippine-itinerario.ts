import type { TripMeta } from '@/lib/types'

export const filippineItinerarioMeta: TripMeta = {
  tripSlug: 'filippine-itinerario',
  paeseSlug: 'filippine',
  ritmo:
    'Medio: casi cada día una barca o un snorkel, con cinco jornadas de traslado entre islas (vuelos, ferris, furgonetas) y un día exigente de barranquismo; los días en Siargao son los más lentos.',
  trasporti:
    "Por cuenta propia: cuatro vuelos internos (Manila-Puerto Princesa, Busuanga-Cebú, Bohol o Cebú-Siargao, Siargao-Manila o Cebú), furgoneta Puerto Princesa-El Nido, ferri rápido El Nido-Coron, OceanJet Cebú-Bohol, bangka para el island hopping, tricycle y scooter en las islas.",
  stile: ['mare', 'island hopping', 'snorkeling', 'immersioni', 'surf'],
  adattoA: [
    'quien ama estar en el agua cada día',
    'quien acepta imprevistos logísticos entre islas: ferris cancelados, vuelos cambiados',
    'parejas, amigos y viajeros en solitario',
    'buceadores y aspirantes a buceadores, con pecios en Coron y arrecifes en Moalboal y Balicasag',
  ],
  puntiForti: [
    'Las lagunas de Miniloc en El Nido, recorridas en kayak',
    'El lago Kayangan y los pecios japoneses de Coron',
    'El banco de millones de sardinas a pocos metros de la orilla de Moalboal',
    'Las Chocolate Hills y los társeros de Bohol',
    'El island hopping y el surf en Siargao',
  ],
  criticita: [
    'La temporada de tifones (junio-noviembre, pico agosto-octubre) puede parar barcas y vuelos: hace falta un día de margen',
    'Ventana ideal estrecha: solo marzo-mayo es seco tanto en Palawan como en Siargao',
    'Pocos cajeros en las islas, a menudo vacíos y con comisiones altas: efectivo desde Manila o Cebú',
    'Cuatro vuelos internos de bajo coste con horarios que cambian y equipaje aparte; para Siargao siempre escala en Cebú',
    'Scooter y mar son los riesgos concretos: casco, nada de conducir de noche, barcas con chalecos',
  ],
  budgetTotale: 'aproximadamente 1.600-2.600 € por persona entre dos, sin vuelos internacionales',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      "La Big Lagoon de El Nido en kayak, el banco de sardinas de Moalboal, el island hopping entre Naked, Daku y Guyam en Siargao",
  },
  tappeMappa: [
    { nome: 'Manila' },
    { nome: 'El Nido', destinazioneSlug: 'el-nido' },
    { nome: 'Coron', destinazioneSlug: 'coron' },
    { nome: 'Cebú y Moalboal', destinazioneSlug: 'cebu-moalboal' },
    { nome: 'Bohol y Panglao', destinazioneSlug: 'bohol' },
    { nome: 'Siargao', destinazioneSlug: 'siargao' },
  ],
  giorni: [
    { titoloGiorno: 'Día 1 — Llegada a Manila', tratta: 'Llegada internacional a Manila', pernottamento: 'Manila, cerca del aeropuerto o en Makati', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/filippine-itinerario/giorno-01-manila.jpg', imageAlt: 'Las murallas y los baluartes españoles de Intramuros, el centro histórico de Manila' },
    { titoloGiorno: 'Día 2 — Vuelo a Puerto Princesa y furgoneta a El Nido', tratta: 'Manila → Puerto Princesa (vuelo, 1 h 20) → El Nido (furgoneta, 5-6 horas)', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'vuelo 40-90 €, furgoneta 600-800 PHP, tasa ambiental 400 PHP', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-02-el-nido.jpg', imageAlt: 'El pueblo de El Nido encajado entre el mar y los acantilados calizos, Palawan' },
    { titoloGiorno: 'Día 3 — El Nido: las lagunas del Tour A', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour A 1.200-1.800 PHP, Big Lagoon unos 200 PHP y kayak 150-200 PHP aparte', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-03-el-nido.jpg', imageAlt: 'Acantilados calizos y agua turquesa en el archipiélago de Bacuit, El Nido' },
    { titoloGiorno: 'Día 4 — El Nido: el Tour C y la playa de Nacpan', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour C 1.400-1.800 PHP, tricycle a Nacpan 1.000-1.500 PHP', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-04-el-nido.jpg', imageAlt: 'Islas calizas y barcas bangka en la bahía de El Nido, Palawan' },
    { titoloGiorno: 'Día 5 — Ferri a Coron', tratta: 'El Nido → Coron, ferri rápido de 3,5-4 horas', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'ferri 1.800-3.500 PHP', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-05-coron.jpg', imageAlt: 'La bahía de Coron vista desde el monte Tapyas, con las islas al fondo' },
    { titoloGiorno: 'Día 6 — Coron: el lago Kayangan, el Barracuda y las Twin Lagoon', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'tour 1.500-2.500 PHP más entradas (Kayangan unos 300 PHP, Twin Lagoon unos 200 PHP, Barracuda 150-250 PHP)', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-06-coron.jpg', imageAlt: 'Los acantilados calizos de la isla de Coron que descienden al agua turquesa' },
    { titoloGiorno: 'Día 7 — Coron: pecios e islas de arena', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'dos inmersiones 4.000-5.500 PHP', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-07-coron.jpg', imageAlt: 'Las islas Calamian alrededor de Coron, con agua cristalina y rocas kársticas' },
    { titoloGiorno: 'Día 8 — Vuelo a Cebú y traslado a Moalboal', tratta: 'Busuanga → Cebú (vuelo, 1 h 15) → Moalboal (coche 3 horas o autobús 4 horas)', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'vuelo 50-110 €, coche 3.000-4.000 PHP', destinazioneSlug: 'cebu-moalboal', immagine: '/images/viaggi/filippine-itinerario/giorno-08-cebu-moalboal.jpg', imageAlt: 'El islote de Pescador frente a Moalboal, rodeado por el arrecife' },
    { titoloGiorno: 'Día 9 — Moalboal: las sardinas y las tortugas', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'barca a Pescador 1.500-2.500 PHP', destinazioneSlug: 'cebu-moalboal', immagine: '/images/viaggi/filippine-itinerario/giorno-09-cebu-moalboal.jpg', imageAlt: 'El arrecife alrededor de la isla de Pescador visto desde arriba, frente a Moalboal' },
    { titoloGiorno: 'Día 10 — El barranquismo de Kawasan', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'barranquismo 1.500-2.500 PHP', destinazioneSlug: 'cebu-moalboal' },
    { titoloGiorno: 'Día 11 — De Moalboal a Bohol', tratta: 'Moalboal → Cebú → Tagbilaran (OceanJet, 2 horas) → Panglao; como alternativa Oslob → Panglao en bangka', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'OceanJet 900-1.000 PHP en clase turista (business 1.400-1.550 PHP); bangka Oslob-Panglao unos 1.000 PHP', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-11-bohol.jpg', imageAlt: 'Las Chocolate Hills de Bohol, colinas cónicas cubiertas de hierba' },
    { titoloGiorno: 'Día 12 — Bohol: Chocolate Hills, társeros y el río Loboc', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'conductor 2.500-3.500 PHP, entradas 100-200 PHP cada una', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-12-bohol.jpg', imageAlt: 'Un társero de Filipinas agarrado a una rama, en Bohol' },
    { titoloGiorno: 'Día 13 — Panglao: Balicasag y Virgin Island', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'barca 1.500-2.500 PHP por barca', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-13-bohol.jpg', imageAlt: 'La playa de Doljo en Panglao con las palmeras y el mar poco profundo' },
    { titoloGiorno: 'Día 14 — Vuelo a Siargao', tratta: 'Bohol → Cebú → Siargao: sin vuelo directo desde Panglao, aproximadamente 1 hora desde Cebú', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'vuelo 50-120 €', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-14-siargao.jpg', imageAlt: 'Una playa de arena clara entre palmeras en la zona de Magpupungko, en Siargao' },
    { titoloGiorno: 'Día 15 — Siargao: Naked, Daku y Guyam', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'island hopping 1.500-2.000 PHP', destinazioneSlug: 'siargao' },
    { titoloGiorno: 'Día 16 — Siargao: la laguna de Sugba y Magpupungko', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'barca a Sugba 1.600-2.500 PHP por barca', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-16-siargao.jpg', imageAlt: 'La playa de Magpupungko en Siargao con la plataforma de roca descubierta por la marea baja' },
    { titoloGiorno: 'Día 17 — Siargao: surf y último día de mar', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'clase de surf 500-1.000 PHP la hora', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg', imageAlt: 'La pasarela y la torre de madera sobre el arrecife de Cloud 9, el spot de surf de Siargao' },
    { titoloGiorno: 'Día 18 — Regreso desde Siargao', tratta: 'Siargao → Manila o Cebú → Italia', intensita: 'leggero', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg', imageAlt: 'La pasarela y la torre de madera sobre el arrecife de Cloud 9, el spot de surf de Siargao' },
  ],
  budget: [
    { etichetta: 'Vuelos intercontinentales', valore: undefined },
    { etichetta: 'Vuelos internos (4 tramos)', valore: '200-400 €' },
    { etichetta: 'Ferris y furgonetas', valore: '60-100 €' },
    { etichetta: 'Excursiones, tasas ambientales y entradas', valore: '200-320 €' },
    { etichetta: 'Inmersiones', valore: '150-300 € por 4-6 inmersiones' },
    { etichetta: 'Alojamientos', valore: '40-100 € por noche y habitación' },
    { etichetta: 'Comidas', valore: '15-30 € al día' },
  ],
}
