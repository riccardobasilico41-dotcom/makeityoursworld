import type { TripMeta } from '@/lib/types'

export const maldiveGuidaMeta: TripMeta = {
  tripSlug: 'maldive-guida',
  paeseSlug: 'maldive',
  ritmo:
    'Slow and built around the sea: one excursion a day in the first days on a local island, then free days at the resort. The only constraints are the fixed speedboat and seaplane schedules and sea conditions.',
  trasporti:
    'Shared speedboats between Malé and the local islands, resort transfers by speedboat or seaplane (daytime only), MTCC public ferries for those with time, domestic flights to Baa, Fuvahmulah and the Southern atolls; boat excursions organized by guesthouses and dive centers.',
  stile: ['mare', 'snorkeling', 'immersioni', 'isole locali', 'resort'],
  adattoA: [
    'anyone who loves the sea more than luxury and wants to see whale sharks, mantas and turtles even with just a mask and fins',
    'anyone who wants the Maldives for less, sleeping on a local island and finishing with a few nights in a resort',
    'anyone who accepts the rules of a Muslim village: no alcohol, bikinis only on the bikini beach, Fridays and Ramadan',
    'divers looking for big animals and considering a liveaboard',
  ],
  puntiForti: [
    'The whale shark along the South Ari reef, present all year',
    'The mantas of Hanifaru Bay between August and October',
    'Life in a fishing village on the local islands, at a fraction of the price of a resort',
    'The choice of atoll explained season by season and animal by animal',
    'The liveaboard to see the far-off atolls, from the central route to the deep South',
  ],
  criticita: [
    'The currents in the channels (kandu) are the main danger: never swim beyond the edge of the reef alone',
    'On the local islands no alcohol, bikinis only on the bikini beach, shops closed in the middle of the day on Fridays and reduced life during the day in Ramadan',
    'Heavy stay taxes: green tax $6-12 per person per night, 17% TGST and 10% service',
    'Seaplanes only in daylight and speedboats depend on the sea: you need a spare night near the airport',
    'From May to November more wind, waves and rain, with rougher sea transfers',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    conChiSonoPartito:
      'a guide designed for independent travel, as a couple or with friends, booking guesthouses, speedboats and excursions directly',
    treEsperienzePiuBelle:
      "The whale shark in South Ari, the mantas at the cleaning stations or at Hanifaru, a resort's house reef at sunset",
    aChiLoConsiglio: 'anyone who wants a sea trip with big animals, spending less than you might imagine',
  },
  tappeMappa: [
    { nome: 'Malé and Hulhumalé', destinazioneSlug: 'male-hulhumale' },
    { nome: 'South Ari (Dhigurah)', destinazioneSlug: 'ari-sud' },
    { nome: 'Resort in South Ari' },
    { nome: 'Back to Hulhumalé', destinazioneSlug: 'male-hulhumale' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Malé and speedboat to Dhigurah', tratta: 'Velana Airport → Dhigurah, shared speedboat 1h30-2h', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Speedboat $50-70 per person each way, two departures a day from the airport', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-01-ari-sud.jpg', imageAlt: 'A long, narrow island fringed with white sand, seen from above in the middle of the turquoise lagoon: the typical atoll landscape' },
    { titoloGiorno: 'Day 2 — Dhigurah: the whale shark on the South Ari reef', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Whale shark excursion $60-120 per person', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-02-ari-sud.jpg', imageAlt: 'A whale shark swimming in the blue among rays of light' },
    { titoloGiorno: 'Day 3 — Snorkeling with mantas and a sandbank', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Mantas and sandbank $70-130 per person', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-03-ari-sud.jpg', imageAlt: 'A group of mantas swimming below the surface while a snorkeler watches them from above' },
    { titoloGiorno: 'Day 4 — Village life and sunset fishing', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Sunset fishing $30-50 per person', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-04-ari-sud.jpg', imageAlt: 'A small boat on the calm sea at sunset, with the low sun reflected on the water' },
    { titoloGiorno: 'Day 5 — Last morning in Ari and a dive', pernottamento: 'Dhigurah, guesthouse', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Dive $50-80; try dive $100-150', destinazioneSlug: 'ari-sud', immagine: '/images/viaggi/maldive-guida/giorno-05-ari-sud.jpg', imageAlt: 'A sea turtle swimming over the coral reef' },
    { titoloGiorno: 'Day 6 — From the local island to the resort', tratta: 'Dhigurah → resort, resort speedboat (or via Malé and seaplane)', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Seaplane $500-1,200 per person round trip if not included', immagine: '/images/viaggi/maldive-guida/giorno-06-resort.jpg', imageAlt: 'A speedboat crossing the turquoise lagoon toward a resort island in the Maldives' },
    { titoloGiorno: 'Day 7 — Resort: the house reef and an excursion', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'medio', costiNoti: 'Excursions from the resort $80-150', immagine: '/images/viaggi/maldive-guida/giorno-07-resort.jpg', imageAlt: 'The overwater villas of a Maldives resort, connected by wooden walkways over the lagoon' },
    { titoloGiorno: 'Day 8 — Resort: a day of rest', pernottamento: 'Resort', statoPernottamento: 'consigliato', intensita: 'leggero', immagine: '/images/viaggi/maldive-guida/giorno-08-resort.jpg', imageAlt: 'A palm tree on a white sand beach in front of the clear water of the lagoon' },
    { titoloGiorno: 'Day 9 — Resort and transfer to Hulhumalé', tratta: 'Resort → Hulhumalé, speedboat or seaplane', pernottamento: 'Hulhumalé, hotel near the airport', statoPernottamento: 'consigliato', intensita: 'leggero', destinazioneSlug: 'male-hulhumale', immagine: '/images/viaggi/maldive-guida/giorno-09-male-hulhumale.jpg', imageAlt: 'Hulhumalé seen from above, with the beach, the lagoon and the buildings of the new city' },
    { titoloGiorno: 'Day 10 — Malé and departure', tratta: 'Hulhumalé → Malé → Velana airport, 10-minute ferry', pernottamento: 'Return flight', statoPernottamento: 'consigliato', intensita: 'leggero', costiNoti: 'Malé-airport ferry $1-2', destinazioneSlug: 'male-hulhumale', immagine: '/images/viaggi/maldive-guida/giorno-10-male-hulhumale.jpg', imageAlt: 'Malé seen from above, with the city packed with buildings and the bridge to the airport island' },
  ],
  budget: [
    { etichetta: 'Intercontinental flights', valore: 'Italy-Malé roughly €600-1,200 round trip with one layover' },
    { etichetta: 'Guesthouse on a local island', valore: '$60-150 a night for a double with breakfast, plus taxes' },
    { etichetta: 'Resort', valore: 'from $300-400 a night mid-range, much more at the high end' },
    { etichetta: 'Stay taxes', valore: 'green tax $6 (guesthouses up to 50 rooms) or $12 (resorts) per person per night, 17% TGST, 10% service; departure tax $50 + $50 airport fee, usually in the ticket' },
    { etichetta: 'Transfers', valore: 'speedboat $25-70 each way; seaplane $500-1,200 round trip; MTCC ferries $2-6' },
    { etichetta: 'Excursions', valore: 'whale shark $60-120, mantas and sandbank $70-130, sunset fishing $30-50' },
    { etichetta: 'Diving', valore: '$50-80 from the local islands\' centers, $100-150 in resorts; Open Water $500-800' },
    { etichetta: 'Liveaboard (alternative)', valore: '$1,500-3,500 per person for a week, plus taxes, parks, tips and equipment' },
  ],
}
