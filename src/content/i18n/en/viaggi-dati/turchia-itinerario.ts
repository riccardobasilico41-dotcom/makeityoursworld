import type { TripMeta } from '@/lib/types'

export const turchiaItinerarioMeta: TripMeta = {
  tripSlug: 'turchia-itinerario',
  paeseSlug: 'turchia',
  ritmo:
    'Medium-intense: four full days on foot in Istanbul, 4 a.m. wake-ups in Cappadocia, an overnight bus and three days of archaeological sites; it eases off on the Lycian coast, with short drives and days by boat.',
  trasporti:
    "Independent: tram, metro and ferries with the Istanbulkart, domestic flight Istanbul-Kayseri or Nevşehir, overnight bus Cappadocia-Pamukkale, one-way rental car from Denizli to Antalya, boats from the coastal harbors.",
  stile: ['città', 'archeologia', 'mongolfiera', 'road trip', 'mare'],
  adattoA: [
    'those going to Turkey for the first time with a good two weeks',
    'those who want cities, landscape, archaeology and sea in the same trip',
    'those who like driving on coastal roads',
    'couples and groups of friends; families with teenagers who can handle the overnight bus',
  ],
  puntiForti: [
    'Hagia Sophia, Topkapı and the Bosphorus by ferry',
    'The hot-air balloons at dawn above the valleys of Cappadocia',
    'Aphrodisias and Ephesus with the Terrace Houses, at opening time',
    'The Ölüdeniz lagoon, the Saklıkent gorge and Patara beach',
    'Kekova by boat over the sunken city',
  ],
  criticita: [
    'State museums are expensive and quoted in euros, rising every year; Turkish lira with very high inflation',
    'The balloon is expensive (€150-350) and subject to cancellation because of wind: you need a spare day',
    'Recurring scams in Istanbul: the bar with an inflated bill, the shoe shiner, taxis without a meter',
    'Rental car with a one-way surcharge between Denizli and Antalya',
    'July and August are very hot inland and crowded on the coast',
  ],
  budgetTotale: 'roughly €2,000-3,000 per person for two, international flights excluded',
  viaggioInBreve: {
    treEsperienzePiuBelle:
      'The balloons above Göreme at dawn, the Library of Celsus in Ephesus before the cruise ships, the sea at Kekova and Kaleköy',
  },
  tappeMappa: [
    { nome: 'Istanbul', destinazioneSlug: 'istanbul' },
    { nome: 'Cappadocia (Göreme)', destinazioneSlug: 'cappadocia' },
    { nome: 'Pamukkale and Hierapolis', destinazioneSlug: 'pamukkale' },
    { nome: 'Aphrodisias' },
    { nome: 'Ephesus and Selçuk', destinazioneSlug: 'efeso' },
    { nome: 'Fethiye and Ölüdeniz', destinazioneSlug: 'costa-licia' },
    { nome: 'Kaş and Kekova', destinazioneSlug: 'costa-licia' },
    { nome: 'Antalya', destinazioneSlug: 'antalya' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Istanbul', tratta: 'Istanbul Airport → Sultanahmet, Havaist or metro', pernottamento: 'Istanbul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-01-istanbul.jpg', imageAlt: 'Sunset over Sultanahmet in Istanbul, with the domes and minarets against the sky' },
    { titoloGiorno: 'Day 2 — Sultanahmet: Hagia Sophia, the Blue Mosque and the Cistern', pernottamento: 'Istanbul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Hagia Sophia €25, Cistern about 1,950-2,250 lira by day (€35-40), 3,000 lira in the evening', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-02-istanbul.jpg', imageAlt: 'Hagia Sophia seen from the northwest, with the great dome and the four minarets' },
    { titoloGiorno: 'Day 3 — Topkapı, the Grand Bazaar and the Süleymaniye', pernottamento: 'Istanbul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Topkapı with harem 2,750 lira (about €50), closed on Tuesdays', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-03-istanbul.jpg', imageAlt: "The imperial hall of the harem of Topkapı Palace, with the tiles and the sultan's throne" },
    { titoloGiorno: 'Day 4 — The Bosphorus, Beyoğlu and Kadıköy', pernottamento: 'Istanbul, Sultanahmet', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'long Bosphorus ferry about 320 lira round trip (10:35 from Eminönü), short ferries with the Istanbulkart, Galata Tower €30', destinazioneSlug: 'istanbul', immagine: '/images/viaggi/turchia-itinerario/giorno-04-istanbul.jpg', imageAlt: 'The Galata Tower rising above the rooftops of Beyoğlu in Istanbul' },
    { titoloGiorno: 'Day 5 — Flight to Cappadocia', tratta: 'Istanbul → Kayseri or Nevşehir, one-hour flight → Göreme', pernottamento: 'Göreme, cave hotel', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'flight €40-90, transfer €10-15', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-05-cappadocia.jpg', imageAlt: 'The fairy chimneys and tuff rocks of Göreme National Park, in Cappadocia' },
    { titoloGiorno: 'Day 6 — Balloon at Dawn and the Göreme Open-Air Museum', pernottamento: 'Göreme, cave hotel', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'balloon €150-350, open-air museum €20', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-06-cappadocia.jpg', imageAlt: 'Hot-air balloons above the tuff valleys of Göreme National Park, in Cappadocia' },
    { titoloGiorno: 'Day 7 — Red Valley, Uçhisar and the Underground City', tratta: 'Göreme → Derinkuyu → Uçhisar; in the evening overnight bus to Pamukkale', pernottamento: 'Overnight bus Göreme-Pamukkale', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Derinkuyu €13, overnight bus €20-35', destinazioneSlug: 'cappadocia', immagine: '/images/viaggi/turchia-itinerario/giorno-07-cappadocia.jpg', imageAlt: 'The pink and white layers of the valleys of Cappadocia' },
    { titoloGiorno: 'Day 8 — Pamukkale and Hierapolis', pernottamento: 'Pamukkale, guesthouse in the village', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Pamukkale-Hierapolis €30, Antique Pool roughly €6-13', destinazioneSlug: 'pamukkale', immagine: '/images/viaggi/turchia-itinerario/giorno-08-pamukkale.jpg', imageAlt: 'The white travertine pools of Pamukkale filled with blue water' },
    { titoloGiorno: 'Day 9 — Aphrodisias and Arrival in Selçuk', tratta: 'Pamukkale → Aphrodisias → Selçuk, about 3.5 hours by car', pernottamento: 'Selçuk', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Aphrodisias €12, Basilica of St. John €6', destinazioneSlug: 'efeso', immagine: '/images/viaggi/turchia-itinerario/giorno-09-efeso.jpg', imageAlt: 'The tetrapylon, the monumental gate of ancient Aphrodisias' },
    { titoloGiorno: 'Day 10 — Ephesus and Şirince', pernottamento: 'Selçuk or Şirince', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Ephesus €40, Terrace Houses €15 separate', destinazioneSlug: 'efeso', immagine: '/images/viaggi/turchia-itinerario/giorno-10-efeso.jpg', imageAlt: 'The stone tiers of the ancient stadium of Ephesus' },
    { titoloGiorno: 'Day 11 — Toward the Lycian Coast: Fethiye', tratta: 'Selçuk → Fethiye, about 3.5-4 hours by car', pernottamento: 'Fethiye or Ölüdeniz', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-11-costa-licia.jpg', imageAlt: 'The harbor of Fethiye with the boats and the mountains of the Lycian coast' },
    { titoloGiorno: 'Day 12 — Ölüdeniz, Kayaköy and the Lycian Way', pernottamento: 'Fethiye or Ölüdeniz', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'paragliding around €100-150', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-12-costa-licia.jpg', imageAlt: 'The abandoned stone houses on the hillside of Kayaköy' },
    { titoloGiorno: 'Day 13 — From Fethiye to Kaş: Saklıkent and Patara', tratta: 'Fethiye → Saklıkent → Patara → Kaş, about 3 hours of driving with stops', pernottamento: 'Kaş', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Saklıkent around €5-10, Patara €15', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-13-costa-licia.jpg', imageAlt: 'Panorama of Kaş with the harbor, the white houses and the sea of the Lycian coast' },
    { titoloGiorno: 'Day 14 — Kekova by Boat', pernottamento: 'Kaş', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'boat with lunch €25-45, kayak €40-60', destinazioneSlug: 'costa-licia', immagine: '/images/viaggi/turchia-itinerario/giorno-14-costa-licia.jpg', imageAlt: 'The bay of Kaş seen from above, with the islands on the horizon toward Kekova' },
    { titoloGiorno: 'Day 15 — From Kaş to Antalya', tratta: 'Kaş → Myra or Olympos → Antalya, about 3.5 hours of driving', pernottamento: 'Antalya, Kaleiçi', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'antalya', immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg', imageAlt: 'View of Kaleiçi, the old town of Antalya overlooking the sea' },
    { titoloGiorno: 'Day 16 — Antalya and the Trip Home', tratta: 'Antalya → Italy, direct flight in season or via Istanbul', intensita: 'leggero', costiNoti: 'archaeological museum closed for reconstruction since 2025 (reopening announced by the end of 2026)', destinazioneSlug: 'antalya', immagine: '/images/viaggi/turchia-itinerario/giorno-16-antalya.jpg', imageAlt: 'The rooftops and houses of the old town of Kaleiçi, in Antalya' },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: undefined },
    { etichetta: 'Museums and sites', valore: '€280-380 per person' },
    { etichetta: 'Hot-air balloon', valore: '€150-350 per person' },
    { etichetta: 'Domestic flight and overnight bus', valore: '€60-125' },
    { etichetta: 'Rental car, 8 days with one-way fee', valore: '€200-350 each for two, fuel and tolls included' },
    { etichetta: 'Accommodation', valore: '€70-150 per night per room' },
    { etichetta: 'Meals', valore: '€25-45 a day' },
  ],
}
