import type { TripMeta } from '@/lib/types'

export const croaziaItinerarioMeta: TripMeta = {
  tripSlug: 'croazia-itinerario',
  paeseSlug: 'croazia',
  ritmo:
    "Steady: a new stop every one or two days, with short legs by car as far as Split and by catamaran between the islands; early mornings are reserved for Plitvice, Krka and the walls of Dubrovnik to avoid the crowds.",
  trasporti:
    "Rental car from Zagreb to Split (Plitvice, Zadar, Krka, Šibenik, Trogir) with return in Split; catamarans Split-Hvar-Korčula-Dubrovnik; bus and taxi in Dubrovnik; day trip by car or bus to Ston.",
  stile: ['sea', 'islands', 'nature', 'historic towns', 'europe'],
  adattoA: [
    "those leaving from Italy who want a trip close to home, with the euro and an ID card",
    "those who want to combine inland lakes and waterfalls, Roman and Venetian towns, and islands",
    "those who can travel between late May and June or in September, avoiding the July-August peak",
    "those who prefer to leave the car on the mainland and move by catamaran between the islands",
  ],
  puntiForti: [
    "Plitvice at opening, before the walkways fill up",
    "Diocletian's Palace in Split, a city inside a Roman imperial residence",
    "The Pakleni Islands from Hvar and the old town of Korčula",
    "The walls of Dubrovnik at sunset and the oysters of Ston",
  ],
  criticita: [
    "In July-August Plitvice, Hvar and Dubrovnik are crowded and expensive",
    "Fines for swimwear, alcohol in the street and disorderly behavior in the old towns: €150 in Split, up to €700 in Hvar",
    "One-way surcharge for returning the car in Split",
    "Tourist tax and parking often excluded from online prices",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito: "independently, car as far as Split and catamarans between the islands",
    treEsperienzePiuBelle:
      "The Plitvice walkways at dawn, sunset at the Sea Organ in Zadar, the walls of Dubrovnik in the late afternoon",
  },
  tappeMappa: [
    { nome: 'Zagreb', destinazioneSlug: 'zagabria' },
    { nome: 'Plitvice Lakes', destinazioneSlug: 'plitvice' },
    { nome: 'Zadar, Krka and Šibenik', destinazioneSlug: 'zara-krka-sebenico' },
    { nome: 'Split and Trogir', destinazioneSlug: 'spalato' },
    { nome: 'Hvar', destinazioneSlug: 'hvar' },
    { nome: 'Korčula', destinazioneSlug: 'curzola' },
    { nome: 'Dubrovnik and Ston', destinazioneSlug: 'dubrovnik' },
  ],
  giorni: [
    { titoloGiorno: "Day 1 — Arrival in Zagreb", tratta: "Flight to Zagreb or car from Trieste (about 2.5 hours)", pernottamento: "Zagreb, Lower Town", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'zagabria', immagine: '/images/viaggi/croazia-itinerario/giorno-01-zagabria.jpg', imageAlt: "The colorful tiled roof of St. Mark's Church in Zagreb's Upper Town" },
    { titoloGiorno: "Day 2 — Toward Plitvice: the lower lakes", tratta: "Zagreb → Plitvice, about 2 hours by car", pernottamento: "Near the Plitvice entrances", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "ticket €40 in June-September (€25 in the afternoon), €23 in April, May and October; online with time slot", destinazioneSlug: 'plitvice', immagine: '/images/viaggi/croazia-itinerario/giorno-02-plitvice.jpg', imageAlt: "Veliki Slap, the tallest waterfall of the Plitvice lakes" },
    { titoloGiorno: "Day 3 — Plitvice at opening and the road to Zadar", tratta: "Plitvice → Zadar, about 2 hours by car", pernottamento: "Zadar, old town", statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'plitvice', immagine: '/images/viaggi/croazia-itinerario/giorno-03-plitvice.jpg', imageAlt: "A wooden walkway next to a waterfall and the turquoise water of the Plitvice lakes" },
    { titoloGiorno: "Day 4 — Zadar: the Sea Organ and the Greeting to the Sun", pernottamento: "Zadar, old town", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'zara-krka-sebenico', immagine: '/images/viaggi/croazia-itinerario/giorno-04-zara-krka-sebenico.jpg', imageAlt: "The tip of the Zadar peninsula from above, with the waterfront of the Sea Organ and the Greeting to the Sun" },
    { titoloGiorno: "Day 5 — The Krka waterfalls and Šibenik", tratta: "Zadar → Skradin (Krka) → Šibenik, about 1 hour plus the boat in the park", pernottamento: "Šibenik", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Krka €40 in June-September (€30 after 3 pm), €20 in April, May and October; swimming forbidden", destinazioneSlug: 'zara-krka-sebenico', immagine: '/images/viaggi/croazia-itinerario/giorno-05-zara-krka-sebenico.jpg', imageAlt: "Skradinski Buk, the stepped waterfall of Krka National Park" },
    { titoloGiorno: "Day 6 — Trogir and arrival in Split", tratta: "Šibenik → Trogir → Split, about 1.5 hours; car return in Split", pernottamento: "Split, old town", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'spalato', immagine: '/images/viaggi/croazia-itinerario/giorno-06-spalato.jpg', imageAlt: "The Trogir waterfront with the medieval center, palm trees and moored boats" },
    { titoloGiorno: "Day 7 — Split: Diocletian's Palace and Marjan", pernottamento: "Split, old town", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "palace cellars €10-15", destinazioneSlug: 'spalato', immagine: '/images/viaggi/croazia-itinerario/giorno-07-spalato.jpg', imageAlt: "The columns and arches of the Peristyle of Diocletian's Palace in Split, beneath the bell tower" },
    { titoloGiorno: "Day 8 — By catamaran to Hvar", tratta: "Split → Hvar, catamaran (about 1 hour)", pernottamento: "Hvar town or Stari Grad", statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "catamaran €15-25 in summer", destinazioneSlug: 'hvar', immagine: '/images/viaggi/croazia-itinerario/giorno-08-hvar.jpg', imageAlt: "Hvar bay and the Pakleni Islands seen from the Spanish Fortress" },
    { titoloGiorno: "Day 9 — Hvar: the Pakleni Islands", tratta: "Hvar → Pakleni Islands, water taxi", pernottamento: "Hvar town or Stari Grad", statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "water taxi €10-15 round trip", destinazioneSlug: 'hvar', immagine: '/images/viaggi/croazia-itinerario/giorno-09-hvar.jpg', imageAlt: "The Pakleni Islands in front of Hvar harbor, seen through the pines" },
    { titoloGiorno: "Day 10 — Korčula, Marco Polo's town", tratta: "Hvar → Korčula, catamaran (about 1.5 hours)", pernottamento: "Korčula, old town or Lumbarda", statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: "catamaran €20-30", destinazioneSlug: 'curzola', immagine: '/images/viaggi/croazia-itinerario/giorno-10-curzola.jpg', imageAlt: "The old town of Korčula on its fortified peninsula" },
    { titoloGiorno: "Day 11 — From Korčula to Dubrovnik and the walls", tratta: "Korčula → Dubrovnik (Gruž port), catamaran (about 2 hours)", pernottamento: "Dubrovnik, old town or Lapad", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "catamaran €25-35; walls about €40 with Lovrijenac", destinazioneSlug: 'dubrovnik', immagine: '/images/viaggi/croazia-itinerario/giorno-11-dubrovnik.jpg', imageAlt: "The walls and old port of Dubrovnik above the sea" },
    { titoloGiorno: "Day 12 — Dubrovnik: Stradun, Lokrum and the cable car", pernottamento: "Dubrovnik, old town or Lapad", statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: "Lokrum with boat €25-30", destinazioneSlug: 'dubrovnik', immagine: '/images/viaggi/croazia-itinerario/giorno-12-dubrovnik.jpg', imageAlt: "The Stradun seen from the top of the Dubrovnik walls" },
    { titoloGiorno: "Day 13 — Ston and the Pelješac peninsula", tratta: "Dubrovnik → Ston, about 1 hour", pernottamento: "Dubrovnik, old town or Lapad", statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'dubrovnik', immagine: '/images/viaggi/croazia-itinerario/giorno-13-dubrovnik.jpg', imageAlt: "The walls of Ston behind flowering trees" },
    { titoloGiorno: "Day 14 — Return from Dubrovnik", tratta: "Dubrovnik → Čilipi airport (about 20 km)", intensita: 'leggero', destinazioneSlug: 'dubrovnik', immagine: '/images/viaggi/croazia-itinerario/giorno-14-dubrovnik.jpg', imageAlt: "The western walls of Dubrovnik and the coves below the Lovrijenac fortress" },
  ],
  budget: [
    { etichetta: 'Daily budget, budget level', valore: "€70-100 per person" },
    { etichetta: 'Daily budget, mid-range', valore: "€130-200 per person" },
    { etichetta: 'Daily budget, high-end', valore: "over €300 per person" },
    { etichetta: 'National parks', valore: "Plitvice and Krka €40 each from June to September (€23 and €20 in spring and October)" },
    { etichetta: 'Dubrovnik', valore: "walls about €40; Lokrum with boat €25-30" },
    { etichetta: 'Catamarans', valore: "Split-Hvar €10-25, Hvar-Korčula €20-30, Korčula-Dubrovnik €25-35" },
    { etichetta: 'Car and tolls', valore: "rental €40-90 a day in summer plus one-way surcharge; Zagreb-Split €25-30" },
    { etichetta: 'Tourist tax', valore: "up to €2.65 per person per night in high season (Dubrovnik), €1.86 in Zagreb" },
  ],
}
