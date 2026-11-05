import type { TripMeta } from '@/lib/types'

// Structured metadata overlay for "Okinawa in Summer in 13 Days" (src/content/i18n/en/viaggi/92-okinawa-estate.md).
// `titoloGiorno` must match exactly the "### Day N — ..." headings of the markdown.

export const okinawaEstateMeta: TripMeta = {
  tripSlug: 'okinawa-estate',
  paeseSlug: 'giappone',
  ritmo:
    "Relaxed but with many transfers: four bases (Naha, Zamami, the north of the main island, Miyako, Ishigaki), with ferries and short flights between them and long days in the water.",
  trasporti:
    "Domestic flight to Naha, Yui Rail monorail in the city, rental car on the main island and on Miyako, ferries from Tomari to Zamami and from Ishigaki to Iriomote and Taketomi, domestic flights Naha-Miyako and Miyako-Ishigaki.",
  stile: ['mare', 'snorkeling', 'isole', 'cultura ryukyu'],
  adattoA: [
    'those who want a tropical sea without leaving Japan',
    'those who snorkel and want turtles and coral reef',
    'those who have already been to Tokyo and Kyoto and are looking for a different Japan',
    'those who can keep two spare days for typhoons',
  ],
  puntiForti: [
    'Snorkeling in the Kerama Islands, with the turtles of Ama beach',
    'The whale sharks of Churaumi and the Motobu Peninsula',
    'The Yanbaru forest and Iriomote, UNESCO Natural World Heritage since 2021',
    'The Irabu Bridge and the white beaches of Miyako',
    'The coral village of Taketomi',
  ],
  criticita: [
    'The best sea falls in the typhoon months: on average 2.3 approach in August and 2.0 in September (JMA)',
    'The rainy season lasts on average from May 10 to June 21, but varies a lot from year to year',
    "On the main island it's hard to get around without a car",
    "In summer there's the habu jellyfish: swim inside the nets and with a wetsuit",
    'Fast ferries, cars and lodging sell out in July and August',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: 'To those who love the sea and want a Japan that few people in Europe know',
  },
  tappeMappa: [
    { nome: 'Naha', destinazioneSlug: 'okinawa-naha' },
    { nome: 'Zamami, Kerama Islands', destinazioneSlug: 'isole-kerama' },
    { nome: 'Motobu and Yanbaru', destinazioneSlug: 'okinawa-naha' },
    { nome: 'Miyako', destinazioneSlug: 'miyako' },
    { nome: 'Ishigaki, Iriomote and Taketomi', destinazioneSlug: 'ishigaki-yaeyama' },
  ],
  giorni: [
    { titoloGiorno: 'Day 1 — Arrival in Naha', tratta: 'Domestic flight → Naha, monorail', pernottamento: 'Naha', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-01-naminoue.webp', imageAlt: "Naminoue Beach in Naha, with the shrine's cliff in the background" },
    { titoloGiorno: 'Day 2 — Naha: Shuri, the market and history', tratta: 'Shuri → Makishi market → Peace Memorial Park (Itoman)', pernottamento: 'Naha', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-02-shureimon.webp', imageAlt: "The Shureimon gate of Shuri Castle, Naha" },
    { titoloGiorno: 'Day 3 — Ferry to Zamami, Kerama Islands', tratta: 'Naha (Tomari port) → Zamami', pernottamento: 'Zamami', statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: 'Ferry Zamami 2,900 yen, Queen Zamami 3,950 yen, plus a 100 yen tax (2025-26)', destinazioneSlug: 'isole-kerama', immagine: '/images/viaggi/okinawa-estate/giorno-03-mare-zamami.webp', imageAlt: "The blue Kerama sea and its islets seen from Zamami" },
    { titoloGiorno: 'Day 4 — Zamami: turtles and deserted islands', tratta: 'Zamami, beaches and boat', pernottamento: 'Zamami', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'isole-kerama', immagine: '/images/viaggi/okinawa-estate/giorno-04-furuzamami.webp', imageAlt: "Furuzamami Beach on Zamami, with white sand and turquoise water" },
    { titoloGiorno: 'Day 5 — Back to Naha and north: Churaumi', tratta: 'Zamami → Naha (ferry) → Motobu (car)', pernottamento: 'Motobu or Nakijin', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Churaumi Aquarium 2,180 yen adults', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-05-churaumi.webp', imageAlt: "The great Kuroshio Sea tank at Churaumi Aquarium, with the whale sharks" },
    { titoloGiorno: 'Day 6 — Motobu: Kouri, Bise and Nakijin', tratta: 'Kouri → Bise → Nakijin Castle', pernottamento: 'Motobu or Nakijin', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-06-nakijin.webp', imageAlt: "The curving stone walls of Nakijin Castle on the Motobu peninsula" },
    { titoloGiorno: 'Day 7 — Yanbaru, the northern forest', tratta: 'Yanbaru → Cape Hedo → Naha airport → Miyako (flight)', pernottamento: 'Miyako', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'okinawa-naha', immagine: '/images/viaggi/okinawa-estate/giorno-07-yanbaru.webp', imageAlt: "The subtropical forest of Yanbaru, northern Okinawa" },
    { titoloGiorno: 'Day 8 — Miyako: the Irabu Bridge and Shimoji', tratta: 'Miyako → Irabu → Shimoji → Yonaha Maehama (car)', pernottamento: 'Miyako', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'miyako', immagine: '/images/viaggi/okinawa-estate/giorno-08-ponte-irabu.webp', imageAlt: "The Irabu Bridge crossing the turquoise sea between Miyako and Irabu" },
    { titoloGiorno: 'Day 9 — Miyako: snorkeling and the eastern tip', tratta: 'Yoshino beach → Higashi-Hennazaki → Ishigaki (flight)', pernottamento: 'Ishigaki', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'miyako', immagine: '/images/viaggi/okinawa-estate/giorno-09-higashi-hennazaki.webp', imageAlt: "Cape Higashi-hennazaki on Miyako, a tongue of grass over the open sea" },
    { titoloGiorno: 'Day 10 — Ishigaki: Kabira Bay', tratta: 'Ishigaki, Kabira and Sukuji', pernottamento: 'Ishigaki', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-10-kabira.webp', imageAlt: "Kabira Bay on Ishigaki, with green islets in turquoise water" },
    { titoloGiorno: 'Day 11 — Iriomote, the jungle', tratta: 'Ishigaki → Iriomote (ferry) → Ishigaki', pernottamento: 'Ishigaki or Iriomote', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-11-mangrovie-iriomote.webp', imageAlt: "Mangroves along a river on Iriomote" },
    { titoloGiorno: 'Day 12 — Taketomi, the village', tratta: 'Ishigaki → Taketomi (ferry) → Ishigaki', pernottamento: 'Ishigaki', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama', immagine: '/images/viaggi/okinawa-estate/giorno-12-kondoi-taketomi.webp', imageAlt: "Kondoi Beach on Taketomi, with its shallow, clear water" },
    { titoloGiorno: 'Day 13 — Return home', tratta: 'Ishigaki → Tokyo, Osaka or Naha → return home', pernottamento: 'no overnight stay (departure day)', intensita: 'leggero', destinazioneSlug: 'ishigaki-yaeyama' },
  ],
  budget: [
    { etichetta: 'International flights', valore: undefined },
    { etichetta: 'Domestic flights (Naha, Miyako, Ishigaki)', valore: undefined },
    { etichetta: 'Ferries', valore: undefined },
    { etichetta: 'Rental car', valore: undefined },
    { etichetta: 'Total', valore: undefined },
  ],
}
