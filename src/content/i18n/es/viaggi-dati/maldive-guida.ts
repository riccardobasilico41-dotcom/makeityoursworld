import type { TripMeta } from '@/lib/types'

export const maldiveGuidaMeta: TripMeta = {
  tripSlug: 'maldive-guida',
  paeseSlug: 'maldive',
  ritmo:
    "Lento y construido sobre el mar: una excursión al día los primeros días en una isla local, luego días libres en el resort. Las únicas limitaciones son los horarios fijos de speedboats e hidroaviones y las condiciones del mar.",
  trasporti:
    "Speedboats compartidas entre Malé y las islas locales, traslado del resort en speedboat o hidroavión (solo de día), ferris públicos MTCC para quien tiene tiempo, vuelos internos a Baa, Fuvahmulah y los atolones del Sur; excursiones en barca organizadas por guesthouses y centros de buceo.",
  stile: ['mare', 'snorkeling', 'immersioni', 'isole locali', 'resort'],
  adattoA: [
    "quien ama el mar más que el lujo y quiere ver tiburones ballena, mantas y tortugas incluso solo con máscara y aletas",
    "quien quiere las Maldivas gastando menos, durmiendo en una isla local y cerrando con unas noches en un resort",
    "quien acepta las reglas de un pueblo musulmán: nada de alcohol, bikini solo en la bikini beach, viernes y Ramadán",
    "buceadores que buscan grandes animales y valoran un liveaboard",
  ],
  puntiForti: [
    "El tiburón ballena a lo largo del arrecife de Ari Sur, presente todo el año",
    "Las mantas de la bahía de Hanifaru entre agosto y octubre",
    "La vida de un pueblo de pescadores en las islas locales, a una fracción del precio de un resort",
    "La elección del atolón explicada temporada por temporada y animal por animal",
    "El liveaboard para ver los atolones lejanos, de la ruta central al Sur profundo",
  ],
  criticita: [
    "Las corrientes de los canales (kandu) son el peligro principal: nunca nadar solo más allá del borde del arrecife",
    "En las islas locales nada de alcohol, bikini solo en la bikini beach, tiendas cerradas el viernes a mediodía y vida reducida de día durante el Ramadán",
    "Impuestos sobre la estancia pesados: green tax 6-12 $ por persona y noche, TGST 17 % y servicio 10 %",
    "Hidroaviones solo de día y speedboats condicionadas por el mar: hace falta una noche de margen cerca del aeropuerto",
    "De mayo a noviembre más viento, olas y lluvias, con traslados por mar más agitados",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      "guía pensada para viajar por libre, en pareja o con amigos, reservando guesthouses, speedboats y excursiones directamente",
    treEsperienzePiuBelle:
      "El tiburón ballena en Ari Sur, las mantas en las estaciones de limpieza o en Hanifaru, la house reef de un resort al atardecer",
    aChiLoConsiglio: "a quien quiere un viaje de mar con grandes animales, gastando menos de lo que se imagina",
  },
  tappeMappa: [
    { nome: 'Malé y Hulhumalé', destinazioneSlug: 'male-hulhumale' },
    { nome: 'Ari Sur (Dhigurah)', destinazioneSlug: 'ari-sud' },
    { nome: 'Resort en Ari Sur' },
    { nome: 'Regreso a Hulhumalé', destinazioneSlug: 'male-hulhumale' },
  ],
  giorni: [
    { titoloGiorno: 'Día 1 — Llegada a Malé y speedboat a Dhigurah', tratta: 'Aeropuerto de Velana → Dhigurah, speedboat compartida 1h30-2h', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "Speedboat 50-70 $ por persona por trayecto, dos salidas al día desde el aeropuerto", destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-01-ari-sud.jpg', imageAlt: "Una isla larga y estrecha bordeada de arena blanca, vista desde arriba en medio de la laguna turquesa: el paisaje típico de los atolones" },
    { titoloGiorno: 'Día 2 — Dhigurah: el tiburón ballena en el arrecife de Ari Sur', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Excursión tiburón ballena 60-120 $ por persona', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-02-ari-sud.jpg', imageAlt: "Un tiburón ballena nadando en el azul entre los rayos de luz" },
    { titoloGiorno: 'Día 3 — Snorkeling con las mantas y un banco de arena', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Mantas y banco de arena 70-130 $ por persona', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-03-ari-sud.jpg', imageAlt: "Un grupo de mantas nadando bajo la superficie mientras un buceador de snorkel las observa desde arriba" },
    { titoloGiorno: 'Día 4 — La vida del pueblo y la pesca al atardecer', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Pesca al atardecer 30-50 $ por persona', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-04-ari-sud.jpg', imageAlt: "Una pequeña barca en el mar en calma al atardecer, con el sol bajo reflejándose en el agua" },
    { titoloGiorno: 'Día 5 — Última mañana en Ari y una inmersión', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Inmersión 50-80 $; bautismo de buceo 100-150 $', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-05-ari-sud.jpg', imageAlt: "Una tortuga marina nadando sobre el arrecife de coral" },
    { titoloGiorno: 'Día 6 — De la isla local al resort', tratta: 'Dhigurah → resort, speedboat del resort (o vía Malé e hidroavión)', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Hidroavión 500-1.200 $ por persona ida y vuelta si no está incluido', immagine: '/images/viaggi/maldive-guida/giorno-06-resort.jpg', imageAlt: "Una speedboat cruzando la laguna turquesa hacia una isla-resort de las Maldivas" },
    { titoloGiorno: 'Día 7 — Resort: la house reef y una excursión', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Excursiones desde el resort 80-150 $', immagine: '/images/viaggi/maldive-guida/giorno-07-resort.jpg', imageAlt: "Las villas sobre el agua de un resort de las Maldivas, conectadas por pasarelas de madera sobre la laguna" },
    { titoloGiorno: 'Día 8 — Resort: un día de descanso', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/maldive-guida/giorno-08-resort.jpg', imageAlt: "Una palmera en una playa de arena blanca frente al agua transparente de la laguna" },
    { titoloGiorno: 'Día 9 — Resort y traslado a Hulhumalé', tratta: 'Resort → Hulhumalé, speedboat o hidroavión', pernottamento: 'Hulhumalé, hotel cerca del aeropuerto', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'male-hulhumale', immagine: '/images/viaggi/maldive-guida/giorno-09-male-hulhumale.jpg', imageAlt: "Hulhumalé vista desde arriba, con la playa, la laguna y los edificios de la ciudad nueva" },
    { titoloGiorno: 'Día 10 — Malé y partida', tratta: 'Hulhumalé → Malé → aeropuerto de Velana, ferri 10 minutos', pernottamento: 'Vuelo de regreso', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Ferri Malé-aeropuerto 1-2 $', destinazioneSlug: 'male-hulhumale', immagine: '/images/viaggi/maldive-guida/giorno-10-male-hulhumale.jpg', imageAlt: "Malé vista desde arriba, con la ciudad repleta de edificios y el puente hacia la isla del aeropuerto" },
  ],
  budget: [
    { etichetta: 'Vuelos intercontinentales', valore: 'Italia-Malé indicativamente 600-1.200 € ida y vuelta con una escala' },
    { etichetta: 'Guesthouse en isla local', valore: '60-150 $ la noche la doble con desayuno, más impuestos' },
    { etichetta: 'Resort', valore: 'desde 300-400 $ la noche en gama media, mucho más en gama alta' },
    { etichetta: 'Impuestos sobre la estancia', valore: 'green tax 6 $ (guesthouse de hasta 50 habitaciones) o 12 $ (resort) por persona y noche, TGST 17 %, servicio 10 %; tasa de salida 50 $ + 50 $ de tasa aeroportuaria, normalmente incluidas en el billete' },
    { etichetta: 'Traslados', valore: 'speedboat 25-70 $ por trayecto; hidroavión 500-1.200 $ ida y vuelta; ferris MTCC 2-6 $' },
    { etichetta: 'Excursiones', valore: 'tiburón ballena 60-120 $, mantas y banco de arena 70-130 $, pesca al atardecer 30-50 $' },
    { etichetta: 'Inmersiones', valore: '50-80 $ en los centros de las islas locales, 100-150 $ en los resorts; Open Water 500-800 $' },
    { etichetta: 'Liveaboard (alternativa)', valore: '1.500-3.500 $ por persona por una semana, más impuestos, parques, propinas y equipo' },
  ],
}
