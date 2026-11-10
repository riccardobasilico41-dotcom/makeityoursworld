import type { TripMeta } from '@/lib/types'

export const filippineItinerarioMeta: TripMeta = {
  tripSlug: 'filippine-itinerario',
  paeseSlug: 'filippine',
  ritmo:
    "Medium: almost every day a boat or a snorkel, with five transfer days between islands (flights, ferries, vans) and one demanding canyoning day; the days in Siargao are the slowest.",
  trasporti:
    "On our own: four domestic flights (Manila-Puerto Princesa, Busuanga-Cebu, Bohol or Cebu-Siargao, Siargao-Manila or Cebu), Puerto Princesa-El Nido van, El Nido-Coron fast ferry, OceanJet Cebu-Bohol, bangka for island hopping, tricycles and scooters on the islands.",
  stile: ['mare', 'island hopping', 'snorkeling', 'immersioni', 'surf'],
  adattoA: [
    'people who love being in the water every day',
    'people who accept logistical surprises between islands: canceled ferries, rescheduled flights',
    'couples, friends and solo travelers',
    'divers and aspiring divers, with wrecks at Coron and reefs at Moalboal and Balicasag',
  ],
  puntiForti: [
    'The Miniloc lagoons at El Nido, crossed by kayak',
    'Kayangan Lake and the Japanese wrecks of Coron',
    'The school of millions of sardines a few meters from the shore at Moalboal',
    'The Chocolate Hills and tarsiers of Bohol',
    'Island hopping and surf in Siargao',
  ],
  criticita: [
    'Typhoon season (June-November, peak August-October) can stop boats and flights: you need a spare day',
    'Narrow ideal window: only March-May is dry in both Palawan and Siargao',
    'Few ATMs on the islands, often empty and with high fees: bring cash from Manila or Cebu',
    'Four low-cost domestic flights with changing schedules and baggage extra; for Siargao always a stop in Cebu',
    'Scooters and the sea are the concrete risks: helmet, no night riding, boats with life jackets',
  ],
  budgetTotale: 'roughly €1,600-2,600 per person as two, international flights excluded',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      "El Nido's Big Lagoon by kayak, the Moalboal sardine school, island hopping among Naked, Daku and Guyam in Siargao",
  },
  tappeMappa: [
    { nome: 'Manila' },
    { nome: 'El Nido', destinazioneSlug: 'el-nido' },
    { nome: 'Coron', destinazioneSlug: 'coron' },
    { nome: 'Cebu and Moalboal', destinazioneSlug: 'cebu-moalboal' },
    { nome: 'Bohol and Panglao', destinazioneSlug: 'bohol' },
    { nome: 'Siargao', destinazioneSlug: 'siargao' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Manila', tratta: 'International arrival in Manila', pernottamento: 'Manila, near the airport or in Makati', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/filippine-itinerario/giorno-01-manila.jpg', imageAlt: 'The Spanish walls and bastions of Intramuros, the historic center of Manila' },
    { titoloGiorno: 'Day 2 — Flight to Puerto Princesa and van to El Nido', tratta: 'Manila → Puerto Princesa (flight, 1h20) → El Nido (van, 5-6 hours)', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'flight €40-90, van 600-800 PHP, environmental fee 400 PHP', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-02-el-nido.jpg', imageAlt: 'The town of El Nido squeezed between the sea and the limestone cliffs, Palawan' },
    { titoloGiorno: 'Day 3 — El Nido: the Tour A lagoons', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour A 1,200-1,800 PHP, Big Lagoon about 200 PHP and kayak 150-200 PHP extra', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-03-el-nido.jpg', imageAlt: 'Limestone cliffs and turquoise water in the Bacuit archipelago, El Nido' },
    { titoloGiorno: 'Day 4 — El Nido: Tour C and Nacpan Beach', pernottamento: 'El Nido', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Tour C 1,400-1,800 PHP, tricycle to Nacpan 1,000-1,500 PHP', destinazioneSlug: 'el-nido', immagine: '/images/viaggi/filippine-itinerario/giorno-04-el-nido.jpg', imageAlt: 'Limestone islands and bangka boats in El Nido bay, Palawan' },
    { titoloGiorno: 'Day 5 — Ferry to Coron', tratta: 'El Nido → Coron, 3.5-4 hour fast ferry', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'ferry 1,800-3,500 PHP', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-05-coron.jpg', imageAlt: 'Coron bay seen from Mount Tapyas, with the islands in the background' },
    { titoloGiorno: 'Day 6 — Coron: Kayangan Lake, Barracuda and the Twin Lagoon', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'tour 1,500-2,500 PHP plus entries (Kayangan about 300 PHP, Twin Lagoon about 200 PHP, Barracuda 150-250 PHP)', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-06-coron.jpg', imageAlt: 'The limestone cliffs of Coron island dropping into turquoise water' },
    { titoloGiorno: 'Day 7 — Coron: wrecks and sand islands', pernottamento: 'Coron town', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'two dives 4,000-5,500 PHP', destinazioneSlug: 'coron', immagine: '/images/viaggi/filippine-itinerario/giorno-07-coron.jpg', imageAlt: 'The Calamian islands around Coron, with clear water and karst rocks' },
    { titoloGiorno: 'Day 8 — Flight to Cebu and transfer to Moalboal', tratta: 'Busuanga → Cebu (flight, 1h15) → Moalboal (car 3 hours or bus 4 hours)', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'flight €50-110, car 3,000-4,000 PHP', destinazioneSlug: 'cebu-moalboal', immagine: '/images/viaggi/filippine-itinerario/giorno-08-cebu-moalboal.jpg', imageAlt: 'Pescador islet off Moalboal, surrounded by the reef' },
    { titoloGiorno: 'Day 9 — Moalboal: sardines and turtles', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'boat to Pescador 1,500-2,500 PHP', destinazioneSlug: 'cebu-moalboal', immagine: '/images/viaggi/filippine-itinerario/giorno-09-cebu-moalboal.jpg', imageAlt: 'The reef around Pescador island seen from above, off Moalboal' },
    { titoloGiorno: 'Day 10 — Canyoning at Kawasan', pernottamento: 'Moalboal, Panagsama Beach', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'canyoning 1,500-2,500 PHP', destinazioneSlug: 'cebu-moalboal', immagine: '/images/filippine/kawasan-falls-badian-cebu.jpg', imageAlt: 'Kawasan Falls in Badian, Cebu, dropping into a turquoise pool in the jungle, with a bamboo raft on the water' },
    { titoloGiorno: 'Day 11 — From Moalboal to Bohol', tratta: 'Moalboal → Cebu → Tagbilaran (OceanJet, 2 hours) → Panglao; alternatively Oslob → Panglao by bangka', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'OceanJet 900-1,000 PHP in tourist class (business 1,400-1,550 PHP); Oslob-Panglao bangka about 1,000 PHP', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-11-bohol.jpg', imageAlt: 'The Chocolate Hills of Bohol, conical hills covered in grass' },
    { titoloGiorno: 'Day 12 — Bohol: Chocolate Hills, tarsiers and the Loboc river', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'driver 2,500-3,500 PHP, entries 100-200 PHP each', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-12-bohol.jpg', imageAlt: 'A Philippine tarsier clinging to a branch, in Bohol' },
    { titoloGiorno: 'Day 13 — Panglao: Balicasag and Virgin Island', pernottamento: 'Panglao', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'boat 1,500-2,500 PHP per boat', destinazioneSlug: 'bohol', immagine: '/images/viaggi/filippine-itinerario/giorno-13-bohol.jpg', imageAlt: 'Doljo beach in Panglao with palms and shallow sea' },
    { titoloGiorno: 'Day 14 — Flight to Siargao', tratta: 'Bohol → Cebu → Siargao: no direct flight from Panglao, about 1 hour from Cebu', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'flight €50-120', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-14-siargao.jpg', imageAlt: 'A pale sand beach among the palms in the Magpupungko area, in Siargao' },
    { titoloGiorno: 'Day 15 — Siargao: Naked, Daku and Guyam', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'island hopping 1,500-2,000 PHP', destinazioneSlug: 'siargao', immagine: '/images/filippine/siargao-isola-guyam.jpg', imageAlt: 'Guyam Island off Siargao, a tuft of coconut palms on a ring of white sand, seen from the bow of a bangka' },
    { titoloGiorno: 'Day 16 — Siargao: Sugba Lagoon and Magpupungko', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'boat to Sugba 1,600-2,500 PHP per boat', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-16-siargao.jpg', imageAlt: 'Magpupungko beach in Siargao with the rock platform uncovered by low tide' },
    { titoloGiorno: 'Day 17 — Siargao: surf and the last day by the sea', pernottamento: 'Siargao, General Luna', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'surf lesson 500-1,000 PHP an hour', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg', imageAlt: "The boardwalk and wooden tower on the Cloud 9 reef, Siargao's surf spot" },
    { titoloGiorno: 'Day 18 — Return from Siargao', tratta: 'Siargao → Manila or Cebu → Italy', intensita: 'leggero', destinazioneSlug: 'siargao', immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg', imageAlt: "The boardwalk and wooden tower on the Cloud 9 reef, Siargao's surf spot" },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: undefined },
    { etichetta: 'Domestic flights (4 legs)', valore: '€200-400' },
    { etichetta: 'Ferries and vans', valore: '€60-100' },
    { etichetta: 'Excursions, environmental fees and entries', valore: '€200-320' },
    { etichetta: 'Diving', valore: '€150-300 for 4-6 dives' },
    { etichetta: 'Lodging', valore: '€40-100 a night per room' },
    { etichetta: 'Meals', valore: '€15-30 a day' },
  ],
}
