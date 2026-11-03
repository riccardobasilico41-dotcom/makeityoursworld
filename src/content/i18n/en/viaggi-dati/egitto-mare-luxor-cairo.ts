import type { TripMeta } from '@/lib/types'

export const egittoMareLuxorCairoMeta: TripMeta = {
  tripSlug: 'egitto-mare-luxor-cairo',
  paeseSlug: 'egitto',
  ritmo:
    "Intense for the first six days, with dawn wake-ups in Cairo and Luxor to avoid the heat and the groups; then four days of sea at a free pace before the direct flight home.",
  trasporti:
    "Independent: Uber and private driver in Cairo, Cairo-Luxor domestic flight, car with driver for the west bank and for the Luxor-Marsa Alam (or Hurghada) transfer, boat excursions from the resort, return flight from the Red Sea.",
  stile: ['archaeology', 'sea', 'snorkeling', 'first time in Egypt'],
  adattoA: [
    "anyone going to Egypt for the first time with 10-12 days",
    "anyone who wants pyramids, temples and sea in the same trip without a cruise",
    "couples and families with kids who can handle early wake-ups",
    "anyone who prefers to end the trip with the relaxing part",
  ],
  puntiForti: [
    "Giza, Saqqara and Dahshur in a day and a half, to understand the whole evolution of the pyramid",
    "The Grand Egyptian Museum with Tutankhamun's complete assemblage",
    "Luxor's west bank at dawn and the hot-air balloon flight",
    "The reef from the shore at Marsa Alam, with turtles at Abu Dabbab and dolphins at Dolphin House",
    "Return on a direct flight from the sea, without going back to Cairo",
  ],
  criticita: [
    "Ticket prices have gone up several times since 2024: between GEM, Giza and Luxor you reach €120-160 per person for entrance fees alone, by card only",
    "Strong commercial pushiness at Giza and Luxor: camels, fake guides, papyrus and perfume shops",
    "From May to September Luxor exceeds 40 °C (104 °F): you visit only at dawn",
    "From December to March the Red Sea is around 22 °C (72 °F) and windy, with boat outings sometimes canceled",
    "Sharm el-Sheikh isn't connected to Luxor by land in a reasonable time: you need an extra flight",
  ],
  budgetTotale: "roughly €1,100-1,700 per person in pairs, international flights excluded",
  viaggioInBreve: {
    treEsperienzePiuBelle:
      "The pyramids of Giza at opening, the Valley of the Kings at dawn, the Abu Dabbab reef from the shore",
  },
  tappeMappa: [
    { nome: 'Cairo', destinazioneSlug: 'cairo' },
    { nome: 'Giza, Saqqara and Dahshur', destinazioneSlug: 'piramidi' },
    { nome: 'Luxor', destinazioneSlug: 'luxor' },
    { nome: 'Edfu' },
    { nome: 'Marsa Alam', destinazioneSlug: 'mar-rosso' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Cairo', tratta: 'Cairo Airport → Giza, Uber or transfer', pernottamento: 'Giza, near the pyramids', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'visa on arrival $30', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-01-cairo.jpg', imageAlt: "The three pyramids of Giza seen from above, with the desert and the first houses of Cairo in the background" },
    { titoloGiorno: 'Day 2 — The pyramids of Giza and the Grand Egyptian Museum', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Giza 700 EGP, inside of Khufu about 1,500 EGP, GEM 1,830 EGP (about $35)', destinazioneSlug: 'piramidi', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg', imageAlt: "The pyramids of Giza standing out against the desert on a clear day" },
    { titoloGiorno: 'Day 3 — Saqqara, Dahshur and the evening at Khan el-Khalili', tratta: 'Giza → Saqqara → Dahshur → Islamic Cairo, car with driver', pernottamento: 'Giza', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'driver $30-50, Saqqara 600 EGP, Dahshur 200 EGP', destinazioneSlug: 'piramidi', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-03-piramidi.jpg', imageAlt: "Djoser's step pyramid at Saqqara with the stone funerary enclosure in the foreground" },
    { titoloGiorno: 'Day 4 — Islamic and Coptic Cairo, flight to Luxor', tratta: 'Cairo → Luxor, one-hour flight', pernottamento: 'Luxor, east bank', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Citadel 550 EGP, flight €60-120, Luxor Temple 500 EGP', destinazioneSlug: 'cairo', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg', imageAlt: "The mosque-madrasa of Sultan Hassan and the al-Rifa'i Mosque with their minarets, in Islamic Cairo" },
    { titoloGiorno: 'Day 5 — Luxor, west bank: Valley of the Kings and Hatshepsut\'s temple', pernottamento: 'Luxor, east bank', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Valley of the Kings 750 EGP, Tutankhamun about 700, Hatshepsut 440, Medinet Habu 220; driver $25-40', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-05-luxor.jpg', imageAlt: "Hatshepsut's mortuary temple at Deir el-Bahari, with its terraces at the foot of the rock wall" },
    { titoloGiorno: 'Day 6 — Balloon at dawn, Karnak and Luxor Temple', pernottamento: 'Luxor, east bank', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'hot-air balloon $50-100, Karnak 600 EGP', destinazioneSlug: 'luxor', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-06-luxor.jpg', imageAlt: "Hot-air balloons rising at dawn above Luxor's west bank" },
    { titoloGiorno: 'Day 7 — From Luxor to the Red Sea', tratta: 'Luxor → Edfu → Marsa Alam, 4-4.5 hours with driver (Hurghada: 4 hours)', pernottamento: 'Marsa Alam, resort with a reef', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'private car $100-150, temple of Edfu 550 EGP', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-07-mar-rosso.jpg', imageAlt: "The Egyptian coast of the Red Sea seen from the International Space Station, with the Eastern Desert" },
    { titoloGiorno: 'Day 8 — Sea: the coral reef from the shore', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'discovery dive $60-90', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-08-mar-rosso.jpg', imageAlt: "A parrotfish among the corals of the Marsa Shagra reef, north of Marsa Alam" },
    { titoloGiorno: 'Day 9 — By boat to the islands or diving', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Dolphin House $40-60, two dives $70-110', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg', imageAlt: "Table corals and turquoise water on a Red Sea coral reef" },
    { titoloGiorno: 'Day 10 — Wadi el Gemal or a free day', pernottamento: 'Marsa Alam', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Wadi el Gemal excursion $35-60', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-10-wadi-el-gemal.jpg', imageAlt: "A white-cheeked tern on the shoreline of the Wadi el Gemal reserve, on the Red Sea" },
    { titoloGiorno: 'Day 11 — Return', tratta: 'Marsa Alam (or Hurghada) → Italy, direct flight', intensita: 'leggero', destinazioneSlug: 'mar-rosso', immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg', imageAlt: "Table corals and turquoise water on a Red Sea coral reef" },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: undefined },
    { etichetta: 'Tourist visa', valore: '$30 on arrival (since March 1, 2026) or as an official e-visa' },
    { etichetta: 'Site tickets', valore: '€120-160 per person, €55-60 more with Seti I and the inside of Khufu' },
    { etichetta: 'Cairo-Luxor domestic flight', valore: '€60-120' },
    { etichetta: 'Drivers and transfers', valore: '€60-100 each for two people' },
    { etichetta: 'Lodging', valore: '€50-90 a room in Cairo and Luxor, €70-130 all-inclusive at the sea' },
    { etichetta: 'Excursions, balloon and diving', valore: '€120-250 per person' },
    { etichetta: 'Tips (baksheesh)', valore: '€40-70 per person for the trip' },
  ],
}
