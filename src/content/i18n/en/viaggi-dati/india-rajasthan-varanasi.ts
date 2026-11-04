import type { TripMeta } from '@/lib/types'

export const indiaRajasthanVaranasiMeta: TripMeta = {
  tripSlug: 'india-rajasthan-varanasi',
  paeseSlug: 'india',
  ritmo:
    "Intense in the first week (Delhi, three nights in Varanasi with dawn wake-ups, the overnight train, Agra and Jaipur), more relaxed in the second, with a buffer day in Jodhpur before Ranakpur and Udaipur. Three long car transfers and two by train.",
  trasporti:
    'Domestic flight Delhi-Varanasi, overnight train Varanasi-Agra in 2A or 3A, daytime trains Jodhpur-Jaisalmer and back, a car with driver for Agra-Jaipur, Jaipur-Pushkar-Jodhpur and Jodhpur-Ranakpur-Udaipur, a jeep for the dunes, flight home Udaipur-Delhi. Boats and walking along the ghats in Varanasi.',
  stile: ['culture', 'spirituality', 'overnight trains', 'desert', 'forts and palaces'],
  adattoA: [
    "anyone with at least two and a half weeks who wants the whole of northern India, from the Ganges to the desert",
    "anyone who wants to see Varanasi without rushing, with three nights on the river",
    "anyone curious to try an Indian overnight train in a berth",
    "anyone who can handle a few long transfers in exchange for less-trodden stops like Pushkar and Jaisalmer",
  ],
  puntiForti: [
    "The ghats of Varanasi at dawn by boat and the Ganga Aarti at Dashashwamedh in the evening",
    "The overnight train from Varanasi to Agra, a piece of India lived from the inside",
    "The Taj Mahal when the gates open",
    "A night in a tented camp among the Thar dunes near Jaisalmer",
    "Mehrangarh Fort above the blue city and Lake Pichola in Udaipur",
  ],
  criticita: [
    "Varanasi is intense: open-air cremations, crowds, narrow alleys and targeted scams (the \"wood for the poor\" at Manikarnika, boat prices)",
    "The overnight train must be booked 4-6 weeks ahead; without a confirmation you need plan B, the Varanasi-Delhi flight",
    "Between December and January fog delays trains and flights by hours, especially in Varanasi and between Delhi and Agra",
    "The Taj Mahal and the Sarnath museum are closed on Fridays: the days have to be fitted into the calendar",
    "Jaisalmer adds two days of transfers: anyone short on time drops it (12-13 day variation)",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'an itinerary designed for independent travel, as a couple or a small group, with domestic flights, trains and a driver for Rajasthan',
    treEsperienzePiuBelle:
      "Dawn by boat on the Ganges in Varanasi, the Taj Mahal when the gates open, the night among the Thar dunes",
    aChiLoConsiglio: 'to anyone with seventeen days between October and March who wants the complete North of India',
  },
  tappeMappa: [
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
    { nome: 'Varanasi and Sarnath', destinazioneSlug: 'varanasi' },
    { nome: 'Agra and the Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Jaipur', destinazioneSlug: 'jaipur' },
    { nome: 'Pushkar', destinazioneSlug: 'pushkar' },
    { nome: 'Jodhpur', destinazioneSlug: 'jodhpur' },
    { nome: 'Jaisalmer and the Thar Desert', destinazioneSlug: 'jaisalmer' },
    { nome: 'Ranakpur' },
    { nome: 'Udaipur', destinazioneSlug: 'udaipur' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Delhi and Old Delhi', tratta: 'Indira Gandhi airport → hotel → Old Delhi by metro', pernottamento: 'Delhi, Karol Bagh, Connaught Place or South Delhi', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-01-delhi.jpg', imageAlt: "A crowded street in Old Delhi toward Chandni Chowk, among signs, power lines and rickshaws, with a red dome in the background" },
    { titoloGiorno: 'Day 2 — Delhi: Humayun, Qutub Minar and flight to Varanasi', tratta: 'Delhi → Varanasi, domestic flight about 1h30', pernottamento: 'Varanasi, on the ghats between Assi and Dashashwamedh', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Humayun and Qutub Minar about 600 rupees each; flight 3,500-7,000 rupees', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-02-delhi.jpg', imageAlt: "The Qutub Minar, the twelfth-century red sandstone minaret, among the greenery and ruins of the complex under a cloudy sky" },
    { titoloGiorno: 'Day 3 — Varanasi: the ghats at dawn and the aarti at Dashashwamedh', pernottamento: 'Varanasi, on the ghats between Assi and Dashashwamedh', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Private rowboat one hour at dawn 800-1,500 rupees; Ganga Aarti free', destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-barca-pellegrini-riccardo.jpg', imageAlt: "A boat full of pilgrims wrapped in orange shawls crosses the Ganges in front of the ghats of Varanasi" },
    { titoloGiorno: 'Day 4 — Varanasi: Manikarnika, the Kashi Vishwanath and the alleys of the old city', pernottamento: 'Varanasi, on the ghats between Assi and Dashashwamedh', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-manikarnika-riccardo.jpg', imageAlt: "The red tower of a temple veiled by smoke above Manikarnika Ghat in Varanasi" },
    { titoloGiorno: 'Day 5 — Sarnath and the overnight train to Agra', tratta: 'Varanasi → Sarnath and back; Varanasi City → Agra Fort, overnight Marudhar Express about 14h (16:30-16:40 → 6:35)', pernottamento: 'Overnight train in 2A or 3A', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Sarnath about 300 rupees (museum separate, closed on Fridays); Marudhar Express in 2A about 2,000-3,000 rupees', destinazioneSlug: 'varanasi', immagine: '/images/india/varanasi-guglie-ghat-riccardo.jpg', imageAlt: 'Temple spires on the ghats of Varanasi with flocks of birds in the hazy sky' },
    { titoloGiorno: 'Day 6 — Agra: the Fort, the "baby Taj" and sunset from Mehtab Bagh', pernottamento: 'Agra, Taj Ganj area', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Agra Fort about 650 rupees', destinazioneSlug: 'agra', immagine: '/images/india/agra-forte-archi-riccardo.jpg', imageAlt: "A run of cusped arches in carved sandstone in Agra Fort, lit by warm light" },
    { titoloGiorno: 'Day 7 — The Taj Mahal at dawn and the road to Jaipur', tratta: 'Agra → Fatehpur Sikri → Abhaneri (optional) → Jaipur, car with driver 5-6h', pernottamento: 'Jaipur, haveli in the old city or Bani Park', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Taj Mahal about 1,100 rupees + 200 for the mausoleum; Fatehpur Sikri about 600', destinazioneSlug: 'agra', immagine: '/images/india/agra-taj-mahal-cupola-riccardo.jpg', imageAlt: "The dome of the Taj Mahal peeking out behind a dark pillar in backlight" },
    { titoloGiorno: 'Day 8 — Jaipur, the Pink City', pernottamento: 'Jaipur, haveli in the old city or Bani Park', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Amber 1,000 rupees, Hawa Mahal, Jantar Mantar and Nahargarh 600 each, City Palace about 700 (2026 foreigner rates)', destinazioneSlug: 'jaipur', immagine: '/images/india/jaipur-grata-riccardo.jpg', imageAlt: "A star-shaped pierced stone screen under a painted arch in Jaipur, with light filtering through" },
    { titoloGiorno: 'Day 9 — Jaipur: the bazaars and the road to Pushkar', tratta: 'Jaipur → Pushkar, car about 3h', pernottamento: 'Pushkar, guesthouse on the lake', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'pushkar', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-09-pushkar.jpg', imageAlt: "Pushkar seen from above, with the holy lake at the center of the town and the Aravalli hills around it" },
    { titoloGiorno: 'Day 10 — Pushkar at dawn and the road to Jodhpur', tratta: 'Pushkar → Jodhpur, car 4-5h', pernottamento: 'Jodhpur, haveli below the fort', statoPernottamento: 'consigliato', intensita: 'medio', destinazioneSlug: 'pushkar', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-10-pushkar.jpg', imageAlt: "The ghats and white houses overlooking the holy lake of Pushkar, reflected in the water" },
    { titoloGiorno: 'Day 11 — Jodhpur: Mehrangarh and the blue city', pernottamento: 'Jodhpur, haveli below the fort', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Mehrangarh about 600 rupees with audio guide', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-11-jodhpur.jpg', imageAlt: "Mehrangarh Fort on its cliff above the old city of Jodhpur" },
    { titoloGiorno: 'Day 12 — Toward Jaisalmer and the night in the Thar Desert', tratta: 'Jodhpur → Jaisalmer, train or car about 5h; Jaisalmer → Sam or Khuri dunes by jeep', pernottamento: 'Tented camp in the Thar Desert', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Camp with dinner, breakfast and camel 3,000-8,000 rupees per person', destinazioneSlug: 'jaisalmer', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-12-jaisalmer.jpg', imageAlt: "A camel with its handler in silhouette on the dunes at sunset" },
    { titoloGiorno: 'Day 13 — Jaisalmer, the golden city', pernottamento: 'Jaisalmer, hotel below the fort', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Fort free; royal palace, temples and havelis paid', destinazioneSlug: 'jaisalmer', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-13-jaisalmer.jpg', imageAlt: "The walls and bastions in golden sandstone of Jaisalmer Fort, with a flock of birds in flight" },
    { titoloGiorno: 'Day 14 — From Jaisalmer to Jodhpur', tratta: 'Jaisalmer → Jodhpur, train or car about 5h', pernottamento: 'Jodhpur, haveli below the fort', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-14-jodhpur.jpg', imageAlt: "The blue city of Jodhpur seen through a scalloped arched window" },
    { titoloGiorno: 'Day 15 — Ranakpur and arrival in Udaipur', tratta: 'Jodhpur → Ranakpur (about 3h) → Udaipur (about 2h), car with driver', pernottamento: 'Udaipur, Lal Ghat, Gangaur Ghat or Ambrai', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Ranakpur open to non-Jains from about 12 to 5 p.m.', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-15-udaipur.jpg', imageAlt: "The Jain temple of Ranakpur, with pale marble spires and the entrance staircase" },
    { titoloGiorno: 'Day 16 — Udaipur, the city of lakes', pernottamento: 'Udaipur, Lal Ghat, Gangaur Ghat or Ambrai', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'City Palace 400-700 rupees for foreigners', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-16-udaipur.jpg', imageAlt: "The white marble Lake Palace in the middle of Lake Pichola in Udaipur, with hills in the background" },
    { titoloGiorno: 'Day 17 — Flight from Udaipur to Delhi and departure', tratta: 'Udaipur → Delhi, domestic flight about 1h30 → international flight', pernottamento: 'Flight home (optional transit room at Aerocity)', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Udaipur-Delhi flight 4,000-8,000 rupees', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-17-udaipur.jpg', imageAlt: "The Lake Palace on Lake Pichola seen from the shore among palm trees, under a sky of clouds" },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: 'Italy-Delhi roughly 450-900 € round trip' },
    { etichetta: 'Visa and documents', valore: 'e-Tourist Visa $25 (30 days) or $40 (one year), plus a 2.5-3% fee, to be requested at least 4 days ahead; free e-Arrival Card within the 72 hours before' },
    { etichetta: 'Domestic flights', valore: 'Delhi-Varanasi 3,500-7,000 rupees, Udaipur-Delhi 4,000-8,000 rupees' },
    { etichetta: 'Trains', valore: 'overnight Varanasi-Agra (Marudhar Express) in 2A about 2,000-3,000 rupees; Jodhpur-Jaisalmer and back 500-1,500 rupees per leg' },
    { etichetta: 'Car with driver', valore: '3,000-4,500 rupees per leg, or 2,800-4,000 rupees a day for Rajasthan' },
    { etichetta: 'Varanasi', valore: 'dawn boat 800-1,500 rupees for the boat; Sarnath about 300 rupees' },
    { etichetta: 'Night in the desert', valore: '3,000-8,000 rupees per person with dinner, breakfast and camel' },
    { etichetta: 'Monument entrance fees', valore: '10,000-12,000 rupees per person in all, about 100-120 € (2026 foreigner rates, indicative)' },
  ],
}
