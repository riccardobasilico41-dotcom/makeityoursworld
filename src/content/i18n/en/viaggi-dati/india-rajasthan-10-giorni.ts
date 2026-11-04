import type { TripMeta } from '@/lib/types'

export const indiaRajasthan10GiorniMeta: TripMeta = {
  tripSlug: 'india-rajasthan-10-giorni',
  paeseSlug: 'india',
  ritmo:
    'Brisk but sustainable: five cities in ten days, with at least two nights in Delhi, Jaipur and Jodhpur and two long car transfers (Agra-Jaipur, Jodhpur-Udaipur) broken up by stops along the way. Early starts almost every day, to see the forts and the Taj Mahal before the heat and the crowds.',
  trasporti:
    'Independent: fast trains Delhi-Agra (Gatimaan Express or Vande Bharat) and Jaipur-Jodhpur booked on IRCTC, a car with driver for Agra-Jaipur and Jodhpur-Udaipur, a domestic flight Udaipur-Delhi for the trip home; in town the Delhi metro, Uber, Ola and tuk-tuks.',
  stile: ['culture', 'forts and palaces', 'trains', 'first time in India'],
  adattoA: [
    "anyone going to India for the first time who wants an itinerary they can organize on their own without a group tour",
    "anyone who wants the Taj Mahal at dawn and the great forts of Rajasthan with time to see them properly",
    "anyone with ten days who prefers two nights per city to a trip that touches everything",
    "anyone who accepts Delhi's strong impact in exchange for a calmer second half between Jodhpur and Udaipur",
  ],
  puntiForti: [
    "The Taj Mahal when the gates open, after seeing it at sunset from Mehtab Bagh the evening before",
    "Mehrangarh Fort above the blue city of Jodhpur, with the audio guide included in the ticket",
    "The Jain temple of Ranakpur with its 1,444 carved columns, as a stop on the transfer to Udaipur",
    "Sunset on Lake Pichola in Udaipur, with the City Palace lit up on the shore",
    "The Chand Baori stepwell at Abhaneri and Fatehpur Sikri along the road from Agra to Jaipur",
  ],
  criticita: [
    "The Taj Mahal is closed on Fridays: the Agra day has to be fitted into the calendar before booking trains and hotels (if Day 4 is a Friday, move the Taj to the afternoon of Day 3)",
    "Scams are the main annoyance: the \"closed\" hotel, fake tourism offices in Delhi, Jaipur gems, shops paying commissions. All avoidable if you know about them",
    "December and January bring morning fog between Delhi and Agra, with train delays and the Taj sometimes invisible at dawn",
    "Jaisalmer, the Thar Desert and Pushkar are left out for lack of time: they are in the variations",
    "Entrance fees for foreigners cost far more than for Indians, and since 2026 Rajasthan has doubled them: 9,000-11,000 rupees per person for the trip's monuments",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      "a proposal not taken this way, a short version of Rick's longer trip with Varanasi; designed for independent travel, with trains, a driver for the transfers and a domestic flight",
    treEsperienzePiuBelle:
      'The Taj Mahal at dawn, Mehrangarh Fort above the blue city, sunset on Lake Pichola in Udaipur',
    aChiLoConsiglio: 'to anyone going to India for the first time with ten days between October and March',
  },
  tappeMappa: [
    { nome: 'Delhi', destinazioneSlug: 'delhi' },
    { nome: 'Agra and the Taj Mahal', destinazioneSlug: 'agra' },
    { nome: 'Jaipur', destinazioneSlug: 'jaipur' },
    { nome: 'Jodhpur', destinazioneSlug: 'jodhpur' },
    { nome: 'Ranakpur' },
    { nome: 'Udaipur', destinazioneSlug: 'udaipur' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Delhi and Old Delhi', tratta: 'Indira Gandhi airport → hotel → Old Delhi by metro', pernottamento: 'Delhi, Karol Bagh, Connaught Place or South Delhi', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Cycle rickshaw in Chandni Chowk 300-500 rupees a ride', destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-01-delhi.jpg', imageAlt: "The Jama Masjid in Delhi, the great mosque of red sandstone and white marble with its minarets and domes, seen from the courtyard" },
    { titoloGiorno: 'Day 2 — Delhi: Humayun, Qutub Minar and New Delhi', pernottamento: 'Delhi, Karol Bagh, Connaught Place or South Delhi', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: "Humayun's Tomb and Qutub Minar about 600 rupees each for foreigners", destinazioneSlug: 'delhi', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-02-delhi.jpg', imageAlt: "Humayun's Tomb in Delhi, a Mughal mausoleum of red sandstone with a white marble dome, under a blue sky" },
    { titoloGiorno: 'Day 3 — By train to Agra: the Fort and the Taj at sunset from Mehtab Bagh', tratta: 'Delhi (Hazrat Nizamuddin) → Agra, Gatimaan Express or Vande Bharat, about 1h40-2h', pernottamento: 'Agra, Taj Ganj area', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Train 800-1,600 rupees depending on class; Agra Fort about 650 rupees', destinazioneSlug: 'agra', immagine: '/images/india/agra-chhatri-tramonto-riccardo.jpg', imageAlt: "A chhatri in silhouette against the orange sunset sky in Agra, among the dark crowns of trees" },
    { titoloGiorno: 'Day 4 — The Taj Mahal at dawn, Fatehpur Sikri and the road to Jaipur', tratta: 'Agra → Fatehpur Sikri → Abhaneri (optional) → Jaipur, car with driver, 5-6h with stops', pernottamento: 'Jaipur, haveli in the old city or Bani Park', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Taj Mahal about 1,100 rupees + 200 for the mausoleum; Fatehpur Sikri about 600 rupees', destinazioneSlug: 'agra', immagine: '/images/india/agra-taj-mahal-portale-riccardo.jpg', imageAlt: "The Taj Mahal framed by the dark arch of the entrance gate, silhouettes of visitors against the light" },
    { titoloGiorno: 'Day 5 — Jaipur: Amber Fort and Nahargarh at sunset', pernottamento: 'Jaipur, haveli in the old city or Bani Park', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Amber Fort 1,000 rupees, Nahargarh 600 (2026 foreigner rates); the composite ticket is now a 10-day state pass at 5,500 rupees', destinazioneSlug: 'jaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-05-jaipur.jpg', imageAlt: "Amber Fort on the hill above Lake Maota, with honey-colored walls and a flock of birds in flight" },
    { titoloGiorno: 'Day 6 — Jaipur: City Palace, Jantar Mantar, Hawa Mahal and the bazaars', pernottamento: 'Jaipur, haveli in the old city or Bani Park', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'City Palace about 700 rupees (private, outside the composite ticket); Hawa Mahal and Jantar Mantar 600 rupees each', destinazioneSlug: 'jaipur', immagine: '/images/india/jaipur-hawa-mahal-cupole-riccardo.jpg', imageAlt: "The pink domes and pinnacles of the Hawa Mahal above the rooftops of Jaipur" },
    { titoloGiorno: 'Day 7 — By train to Jodhpur, the blue city', tratta: 'Jaipur → Jodhpur, daytime train about 5h', pernottamento: 'Jodhpur, haveli below the fort (Ghanta Ghar, Navchokiya)', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Train 500-1,200 rupees depending on class', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-07-jodhpur.jpg', imageAlt: "The blue houses of Jodhpur's old city seen from above, a stretch of rooftops and indigo-colored facades" },
    { titoloGiorno: 'Day 8 — Jodhpur: Mehrangarh Fort and the blue alleys', pernottamento: 'Jodhpur, haveli below the fort (Ghanta Ghar, Navchokiya)', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Mehrangarh about 600 rupees with audio guide for foreigners', destinazioneSlug: 'jodhpur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-08-jodhpur.jpg', imageAlt: "Mehrangarh Fort on its cliff above Jodhpur, lit by the warm light of late afternoon" },
    { titoloGiorno: 'Day 9 — From Jodhpur to Udaipur via the Ranakpur temple', tratta: 'Jodhpur → Ranakpur (about 3h) → Udaipur (about 2h), car with driver', pernottamento: 'Udaipur, Lal Ghat, Gangaur Ghat or Ambrai', statoPernottamento: 'consigliato', intensita: 'intenso', costiNoti: 'Ranakpur open to non-Jains from about 12 to 5 p.m.', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-09-udaipur.jpg', imageAlt: "The Jain temple of Ranakpur in pale marble, with carved spires and the Aravalli hills behind" },
    { titoloGiorno: 'Day 10 — Udaipur: City Palace, Lake Pichola and departure', tratta: 'Udaipur → Delhi, domestic flight about 1h30, international connection', pernottamento: 'Flight home, or one more night in Udaipur', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'City Palace 400-700 rupees for foreigners; Udaipur-Delhi flight 4,000-8,000 rupees if booked early', destinazioneSlug: 'udaipur', immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-10-udaipur.jpg', imageAlt: "The City Palace of Udaipur on the shore of Lake Pichola, with its white towers above the water" },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: 'Italy-Delhi roughly 450-900 € round trip depending on the season' },
    { etichetta: 'Visa and documents', valore: 'e-Tourist Visa $25 (30 days) or $40 (one year), plus a 2.5-3% fee, to be requested at least 4 days ahead; free e-Arrival Card within the 72 hours before' },
    { etichetta: 'Trains', valore: 'Delhi-Agra 800-1,600 rupees, Jaipur-Jodhpur 500-1,200 rupees depending on class' },
    { etichetta: 'Car with driver', valore: 'about 3,000-4,500 rupees per leg (Agra-Jaipur, Jodhpur-Udaipur), or 2,800-4,000 rupees a day for the whole trip' },
    { etichetta: 'Domestic flight', valore: 'Udaipur-Delhi 4,000-8,000 rupees' },
    { etichetta: 'Monument entrance fees', valore: '9,000-11,000 rupees per person in all, about 90-110 € (2026 foreigner rates, indicative)' },
    { etichetta: 'Accommodation', valore: 'guesthouses 1,500-3,000 rupees, heritage hotels 4,000-9,000 rupees, palace hotels over 25,000 rupees a night' },
    { etichetta: 'Meals', valore: '200-500 rupees in a local restaurant, 800-2,000 in a tourist restaurant' },
  ],
}
