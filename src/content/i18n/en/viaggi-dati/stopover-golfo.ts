import type { TripMeta } from '@/lib/types'

export const stopoverGolfoMeta: TripMeta = {
  tripSlug: 'stopover-golfo',
  paeseSlug: 'emirati-arabi-uniti',
  ritmo: 'Modular: seven days if done back to back, but each 24-48 hour block works as an independent stopover',
  trasporti: 'Scheduled flights with the Gulf hubs, metro from the airports, 4x4 with a driver for the desert',
  stile: ['stopover', 'architettura', 'deserto'],
  adattoA: [
    'people flying to Asia, Oceania or East Africa with long layovers to fill',
    'people who want to see something without lengthening the trip or spending much',
    'people who are willing to plan the stopover program when booking the ticket, not after',
  ],
  puntiForti: [
    "Dubai Creek by abra for one dirham, twenty minutes by metro from the airport",
    "The Sheikh Zayed Grand Mosque and the Louvre, both inside Etihad's free stopover",
    "The Qatar Airways stopover at about $14 a night, the best value for money in the Gulf",
  ],
  criticita: [
    "The programs aren't equivalent: Dubai Connect is a compensation for a long, unavoidable layover, all the others are choices to make at booking time",
    "The Qatar Airways stopover is booked on a separate portal with the flight code: it's the step almost nobody knows about",
    "From May to September temperatures go past 45 degrees (113°F) across the Gulf and the stopover comes down to museums and shopping malls",
    "A twelve-hour layover is not twelve hours in the city: between checks, transfer and getting back early, five or six are left",
    "Conditions, thresholds and prices of the programs change often and without notice",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'on our own, using the stopover programs of the Gulf airlines',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: "Dubai Creek by abra, the light under the dome of the Louvre Abu Dhabi, the dunes running into the water at Khor Al Adaid",
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Dubai', destinazioneSlug: 'dubai' },
    { nome: 'Abu Dhabi', destinazioneSlug: 'abu-dhabi' },
    { nome: 'Doha', destinazioneSlug: 'doha' },
    { nome: 'Khor Al Adaid', destinazioneSlug: 'qatar-deserto-nord' },
    { nome: 'Jeddah', destinazioneSlug: 'jeddah' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Dubai, the first 24 hours', tratta: 'DXB airport → downtown by metro (20 min)', pernottamento: 'Dubai, assigned by Dubai Connect or Deira/Bur Dubai', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'abra 1 dirham; Burj Khalifa from about 170 dirhams', destinazioneSlug: 'dubai', immagine: '/images/viaggi/stopover-golfo/giorno-1-dubai-creek.jpg', imageAlt: 'A wooden abra full of passengers crosses Dubai Creek, with the city skyline in the background' },
    { titoloGiorno: 'Day 2 — Dubai, the second day', pernottamento: 'Dubai', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'evening desert safari 200-400 dirhams', destinazioneSlug: 'dubai', immagine: '/images/viaggi/stopover-golfo/giorno-2-dubai-deserto.jpg', imageAlt: 'A jeep on the desert dunes near Dubai during the evening safari' },
    { titoloGiorno: 'Day 3 — Abu Dhabi, the Etihad stopover', tratta: 'Dubai → Abu Dhabi (about 2h by bus)', pernottamento: 'Abu Dhabi, hotel included in the Etihad stopover', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Grand Mosque free, with a timed-slot reservation', destinazioneSlug: 'abu-dhabi', immagine: '/images/viaggi/stopover-golfo/giorno-3-grande-moschea.jpg', imageAlt: 'The minarets and white domes of the Sheikh Zayed Grand Mosque seen from the palm-lined avenue' },
    { titoloGiorno: 'Day 4 — Abu Dhabi, the Louvre and the desert', pernottamento: 'Abu Dhabi', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Louvre Abu Dhabi about 65 dirhams', destinazioneSlug: 'abu-dhabi', immagine: '/images/viaggi/stopover-golfo/giorno-4-louvre-abu-dhabi.jpg', imageAlt: 'The perforated dome of the Louvre Abu Dhabi, with light filtering through to draw the "rain of light" on the plaza' },
    { titoloGiorno: 'Day 5 — Doha, the fourteen-dollar stopover', tratta: 'Flight to Doha; airport → downtown by metro (20 min)', pernottamento: 'Doha, Qatar Airways program hotel', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: '4-star hotel from about $14 per person per night; souq and falcon hospital free', destinazioneSlug: 'doha', immagine: '/images/viaggi/stopover-golfo/giorno-5-museo-arte-islamica-doha.jpg', imageAlt: 'The Museum of Islamic Art in Doha at dusk, with the West Bay skyline across the bay' },
    { titoloGiorno: 'Day 6 — Doha, the inland sea', tratta: 'Doha → Khor Al Adaid by 4x4 (1h30, last stretch on sand)', pernottamento: 'Doha or tented camp in the desert', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'excursion 250-500 riyals depending on the package', destinazioneSlug: 'qatar-deserto-nord', immagine: '/images/viaggi/stopover-golfo/giorno-6-khor-al-adaid.jpg', imageAlt: 'The dunes of Khor Al Adaid sloping down to the inland sea in the Qatari desert' },
    { titoloGiorno: 'Day 7 — Jeddah, the Saudi stopover', tratta: 'Flight to Jeddah with Saudia or flynas, free stopover visa', pernottamento: 'Jeddah, near Al-Balad or on the Corniche', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'free stopover visa, apart from administrative fees and insurance', destinazioneSlug: 'jeddah', immagine: '/images/viaggi/stopover-golfo/giorno-7-al-balad-jeddah.jpg', imageAlt: 'A tower house in Al-Balad in Jeddah, with carved green wooden rawashin on the upper floors' },
  ],
  budget: [
    { etichetta: 'Hotel with Emirates Dubai Connect', valore: 'free, but assigned: room, meals, transfer and transit visa included' },
    { etichetta: 'Hotel with Etihad Abu Dhabi Stopover', valore: 'free for 1 or 2 nights, on a round-trip booking with a declared stop' },
    { etichetta: 'Hotel with Qatar Airways Stopover', valore: '4-star from about $14 per person per night, 5-star $20-30' },
    { etichetta: 'Saudi Arabia stopover visa', valore: 'free with Saudia or flynas, apart from administrative fees and insurance' },
    { etichetta: 'Emirates and Qatar visas', valore: 'free on arrival for Italian citizens' },
    { etichetta: 'Desert excursions', valore: 'evening safari 200-400 dirhams; Khor Al Adaid 250-500 riyals' },
  ],
}
