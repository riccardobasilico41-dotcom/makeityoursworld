import type { TripMeta } from '@/lib/types'

export const montenegroItinerarioMeta: TripMeta = {
  tripSlug: 'montenegro-itinerario',
  paeseSlug: 'montenegro',
  ritmo:
    "Steady, by car: three nights on the Bay of Kotor, then one stop a day along coast, lake and mountains, with 1-3 hour drives on slow roads. Two more demanding days: Bobotov Kuk or the Durmitor panoramic road, and rafting on the Tara.",
  trasporti:
    "Rental car from Tivat or Podgorica, Kamenari-Lepetane ferry across the Bay, boats to Our Lady of the Rocks and on Lake Skadar, inflatable raft for rafting on the Tara. To go into Croatia, Bosnia or Albania you need the rental company's authorization and a green card.",
  stile: ['roadtrip', 'mare', 'montagna', 'trekking', 'monasteri'],
  adattoA: [
    "people who want sea and mountains on the same trip, two hours' flight from Italy",
    "people who love driving and accept narrow roads and hairpin turns",
    "people who want to combine Montenegro with Dubrovnik, Mostar or northern Albania",
    "people traveling in June or September looking for a cheaper alternative to Croatia",
  ],
  puntiForti: [
    "The Bay of Kotor from the fortress of St. John and the island of Our Lady of the Rocks at Perast",
    "The twenty-five switchbacks of Lovćen and the Njegoš mausoleum on the summit",
    "The Ostrog monastery wedged into the rock face",
    "The Black Lake and the Durmitor panoramic road",
    "Rafting in the Tara canyon and the Đurđevića Tara bridge",
  ],
  criticita: [
    "July and August bring strong heat, traffic on the coast, border lines and cruise ships at Kotor",
    "Montenegro is not in the European Union: European roaming doesn't apply and data on Italian SIMs costs a lot",
    "Mountain roads are narrow and winding: driving times are longer than the miles suggest",
    "Leaving the country in a rental car requires written authorization, a green card and the original registration document, with a surcharge",
    "The electronic ID card is only valid for stays of up to 30 days; in summer 2026 no direct ferry from Italy",
    "Budva and the central coast are built up and crowded: the nicest part of the sea is between the Bay and Petrovac",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      "itinerary designed for independent travel, as a couple, with friends or as a family, with a rental car",
    treEsperienzePiuBelle:
      "The Bay of Kotor from the Kotor walls, the Ostrog monastery in the rock, the Tara canyon by inflatable raft",
    aChiLoConsiglio: "to anyone with ten days in June or September who wants a road trip between sea and mountains",
  },
  tappeMappa: [
    { nome: 'Kotor and the Bay of Kotor', destinazioneSlug: 'bocche-di-cattaro' },
    { nome: 'Lovćen and Cetinje', destinazioneSlug: 'lovcen-cetinje' },
    { nome: 'Budva and the Riviera', destinazioneSlug: 'budva-riviera' },
    { nome: 'Lake Skadar', destinazioneSlug: 'lago-di-scutari' },
    { nome: 'Ostrog Monastery', destinazioneSlug: 'ostrog' },
    { nome: 'Durmitor and the Tara Canyon', destinazioneSlug: 'durmitor-tara' },
    { nome: 'Podgorica' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival at Tivat and Kotor at sunset', tratta: 'Tivat airport → Kotor, about 15 minutes (from Podgorica about 1h30)', pernottamento: 'Kotor, Dobrota or Muo', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'bocche-di-cattaro', immagine: '/images/viaggi/montenegro-itinerario/giorno-01-bocche-di-cattaro.jpg', imageAlt: "Star trails above the mountains of the Bay of Kotor, with the lights of Kotor reflected in the bay" },
    { titoloGiorno: 'Day 2 — Kotor: the old town and the walls up to the fortress', pernottamento: 'Kotor, Dobrota or Muo', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Walls and fortress of St. John about €15 in season, cash', destinazioneSlug: 'bocche-di-cattaro', immagine: '/images/viaggi/montenegro-itinerario/giorno-02-bocche-di-cattaro.jpg', imageAlt: "The red-tiled roofs of Kotor's old town and the domes of the church of St. Nicholas" },
    { titoloGiorno: 'Day 3 — Perast, Our Lady of the Rocks and the loop around the Bay', tratta: 'Kotor → Perast → Risan → Kamenari-Lepetane ferry → Tivat → Kotor', pernottamento: 'Kotor, Dobrota or Muo', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Kamenari ferry about €5 for the car; boat to the island a few euros', destinazioneSlug: 'bocche-di-cattaro', immagine: '/images/viaggi/montenegro-itinerario/giorno-03-bocche-di-cattaro.jpg', imageAlt: "Perast seen from the bay, with the bell tower of St. Nicholas and the mountains of the Bay of Kotor" },
    { titoloGiorno: 'Day 4 — The Lovćen switchbacks, Njeguši and Cetinje', tratta: 'Kotor → switchbacks → Njeguši → Njegoš mausoleum → Cetinje', pernottamento: 'Cetinje', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'National park €3, Njegoš mausoleum about €8 extra', destinazioneSlug: 'lovcen-cetinje', immagine: '/images/viaggi/montenegro-itinerario/giorno-04-lovcen-cetinje.jpg', imageAlt: "Meadows and trees on the plateau of Lovćen National Park" },
    { titoloGiorno: 'Day 5 — Budva, the coast and Sveti Stefan', tratta: 'Cetinje → Budva, about 40 minutes → Sveti Stefan → Petrovac', pernottamento: 'Petrovac or Budva', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Sun loungers and umbrellas €15-30 a day in high season', destinazioneSlug: 'budva-riviera', immagine: '/images/viaggi/montenegro-itinerario/giorno-05-budva-riviera.jpg', imageAlt: "The Budva Riviera seen from above, with St. Nicholas island and the old town" },
    { titoloGiorno: 'Day 6 — Lake Skadar: Virpazar and Rijeka Crnojevića', tratta: 'Petrovac → Virpazar → Pavlova Strana → Rijeka Crnojevića', pernottamento: 'Lake Skadar (Virpazar) or Podgorica', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'National park about €5; boat €15-30 per person', destinazioneSlug: 'lago-di-scutari', immagine: '/images/viaggi/montenegro-itinerario/giorno-06-lago-di-scutari.jpg', imageAlt: "The old stone bridge of Rijeka Crnojevića over the river flowing down to Lake Skadar" },
    { titoloGiorno: 'Day 7 — The Ostrog monastery and the road to Žabljak', tratta: 'Lake Skadar → Ostrog → Nikšić → Žabljak, about 2h30 from Ostrog', pernottamento: 'Žabljak', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Ostrog monastery free entry', destinazioneSlug: 'ostrog', immagine: '/images/viaggi/montenegro-itinerario/giorno-07-ostrog.jpg', imageAlt: "The Ostrog monastery set into the rock face" },
    { titoloGiorno: 'Day 8 — Durmitor: the Black Lake, the panoramic road and Bobotov Kuk', pernottamento: 'Žabljak', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'National park about €5, parking extra', destinazioneSlug: 'durmitor-tara', immagine: '/images/viaggi/montenegro-itinerario/giorno-08-durmitor-tara.jpg', imageAlt: "The Žabljak plateau seen from above, with the Durmitor mountains on the horizon" },
    { titoloGiorno: 'Day 9 — The Tara bridge, rafting and the descent south', tratta: 'Žabljak → Đurđevića Tara bridge → rafting Brštanovica-Šćepan Polje → Morača canyon → Podgorica', pernottamento: 'Podgorica (or the coast, for flights from Tivat)', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Rafting €50-80 with lunch; zipline €20-30', destinazioneSlug: 'durmitor-tara', immagine: '/images/viaggi/montenegro-itinerario/giorno-09-durmitor-tara.jpg', imageAlt: "The Tara river running along the bottom of its canyon between wooded walls" },
    { titoloGiorno: 'Day 10 — Podgorica and departure', tratta: 'Podgorica → airport, about 15 minutes', pernottamento: 'Return flight', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/montenegro-itinerario/giorno-10-podgorica.jpg', imageAlt: "Podgorica and the surrounding hills seen from above" },
  ],
  budget: [
    { etichetta: 'Flights', valore: 'Italy-Tivat or Podgorica roughly €80-250 round trip' },
    { etichetta: 'Rental car', valore: "€30-60 a day in summer; surcharge for leaving the country €30-60 per rental, up to €100 for Albania" },
    { etichetta: 'Admissions', valore: 'Kotor walls about €15; national parks €3-5 each; Njegoš mausoleum about €8' },
    { etichetta: 'Ferry and boats', valore: 'Kamenari about €5 for the car; Our Lady of the Rocks a few euros; Lake Skadar €15-30' },
    { etichetta: 'Activities', valore: 'rafting on the Tara €50-80; zipline €20-30' },
    { etichetta: 'Lodging', valore: '€40-70 for a double on a budget, €80-150 mid-range; doubled in July-August on the coast' },
    { etichetta: 'Meals', valore: '€15-30 in a konoba; fish often by the kilo' },
    { etichetta: 'Tourist tax', valore: 'about €1 per person per night, depending on the municipality; free under 12' },
  ],
}
