import type { Destinazione } from '@/lib/types'

export const destinazioniIndonesia: Destinazione[] = [
  {
    slug: 'sumatra',
    paeseSlug: 'indonesia',
    ordine: 1,
    nome: 'Sumatra',
    tipologia: ['natura', 'avventura', 'trekking'],
    giorniConsigliati: '7-10 days to cover the north (Bukit Lawang, Lake Toba, Berastagi)',
    visitataPersonalmente: true,
    introduzione:
      "The archipelago's wildest gateway: the Gunung Leuser jungle with its wild orangutans, the largest volcanic lake in the world and Batak culture on Samosir island.",
    percheAndarci:
      "Jungle trekking here is less trodden than in other Southeast Asian destinations, and the strongest moment is meeting the orangutans.",
    cosaVedere: [
      "Gunung Leuser National Park at Bukit Lawang, one of the last habitats of the Sumatran orangutans",
      "Lake Toba, the largest volcanic lake in the world, with Samosir island at its center",
      "The Batak villages of Samosir, with traditional saddle-roofed houses and stone tombs",
      "The Sibayak and Sinabung volcanoes around Berastagi",
    ],
    cosaFare: [
      "A jungle trek of one or more days at Bukit Lawang to spot wild orangutans (only with a certified guide)",
      "Boat trip on Lake Toba and a day by scooter on Samosir island",
      "A dip in the hot springs at the foot of Sibayak after a volcano trek",
      "Immersion in Batak culture: ceremonies, crafts, Sigale-gale dances",
    ],
    doveDormire:
      "Guesthouses along the Bohorok river at Bukit Lawang, handy for an early start on the trek; homestays on Samosir island for Lake Toba.",
    doveMangiare:
      "You eat simply and almost everywhere well: nasi padang (display cases with many ready dishes: you point at what you want and pay only for what you touch) is the local institution and was born right here, in West Sumatra. Around Lake Toba pork appears, rare in the rest of Muslim Indonesia, because the Batak are Christian. Sumatran coffee, drunk in the warungs on the road to Berastagi, is highly regarded and costs little.",
    comeArrivare: "For the north, fly to Medan's Kualanamu airport (KNO) from Jakarta, Kuala Lumpur or Singapore. The Railink train reaches Medan in about 35-45 minutes; for Bukit Lawang you need a private car instead, about 3-4 hours for 650,000-700,000 IDR (about €37-40), almost always sent by the guesthouse. For Lake Toba there is also Silangit airport, about an hour and a half from Parapat, with direct flights to Jakarta. For Bukittinggi and West Sumatra, fly to Padang (PDG): from there it's about 3 hours by car, with a private car at about 500,000 IDR (about €28).",
    comeSpostarsi: "Private car or bus between Medan, Bukit Lawang, Berastagi and Lake Toba; ferry to Samosir island.",
    periodoMigliore: "June-September, the driest season for trekking",
    costi: "Among the cheapest islands in the archipelago, especially for accommodation and guided treks. Budget: about €25-35 a day with guesthouses on the river or the lake, warungs and buses. Mid-range: €60-90 with better rooms, a driver for the long legs (800,000-900,000 IDR, about €45-50, from Bukit Lawang to Berastagi) and the two-day trek. High: over €130 with lakeside resorts, a private driver for every leg and private treks.",
    erroriDaEvitare: [
      "Relying on uncertified guides for the orangutan trek: unregulated close contact is dangerous for both visitors and animals",
      "Underestimating travel times on mountain roads that are often in poor condition",
    ],
    confronti: [
      {
        titolo: 'Orangutans in Sumatra or Borneo?',
        introduzione:
          "Wild orangutans exist only on these two islands, and they are different species: the Sumatran one (critically endangered) and the Bornean one. Anyone who has done Bukit Lawang and is thinking of Borneo, or vice versa, is right to ask, because the two experiences are different.",
        opzioni: [
          {
            nome: 'Bukit Lawang, Sumatra',
            sintesi: "Trekking on foot in the Gunung Leuser jungle, looking for the animals instead of waiting for them.",
            costo: "the cheapest: guided treks at modest prices, simple accommodation on the river",
            durata: '2-3 days',
            pro: [
              "You walk inside the forest: the encounter is active, with no platforms or boats",
              "High chances, because the area is home to formerly rehabilitated individuals who are now wild",
              "Much lower costs than the Borneo options",
              "The Leuser is one of the few ecosystems where orangutans, tigers, rhinos and elephants live together",
            ],
            contro: [
              "There is an ethical knot: some guides lure the animals with food to guarantee the sighting, and this must be explicitly refused when you book",
              "Physically demanding: mud, roots, high heat and humidity",
              "Less strict regulation than in Malaysia: quality depends a lot on the guide",
              "Besides the orangutans, the area offers less variety of visible wildlife",
            ],
            perChi: "Anyone who wants to look for them on foot, has a modest budget and chooses the operator carefully.",
          },
          {
            nome: 'Sabah, Malaysian Borneo',
            sintesi: "The Sepilok plus Kinabatangan system: a rehabilitation center with scheduled feedings and then river cruises to spot wild animals.",
            costo: "much higher: lodges on the Kinabatangan are paid as a package",
            durata: '4-5 days to do both sensibly',
            pro: [
              "At Sepilok a close encounter is reasonably guaranteed in almost every season",
              "On the Kinabatangan the orangutans are wild and come with everything else: proboscis monkeys, pygmy elephants, crocodiles, hornbills",
              "Higher management and regulation standards, with declared feeding practices",
              "The same island has the primary forest of the Danum Valley and Sipadan",
            ],
            contro: [
              "You watch from a platform or a boat, at a distance: it's less direct",
              "It costs much more, and internal transfers are long",
              "At Sepilok the animals are semi-wild and used to humans",
            ],
            perChi: "Anyone who also wants to see the rest of Borneo's wildlife and accepts a higher budget in exchange for greater predictability.",
          },
        ],
        raccomandazione:
          "For the orangutan encounter alone, Sumatra gives more for much less: you walk, you search, and it costs a fraction. Borneo is the choice when the list is longer (proboscis monkeys, pygmy elephants, primary forest, Sipadan) and the orangutans are only one of the reasons. Anyone who has already done Bukit Lawang shouldn't cross half of Southeast Asia to see them again: go to Borneo for everything else, and you'll see them anyway.",
      },
    ],
    miaEsperienza:
      "It's the island almost nobody puts on the itinerary, and they're wrong. At Bukit Lawang we climbed up through the mud holding on to roots, in a heat that took your breath away, and after three hours without seeing anything I started to doubt I hadn't wasted a day. Then an orangutan came down onto a branch a few meters away, stayed looking for a few seconds and went back to eating, and the doubt vanished. There's an uncomfortable side too: some guides lure the animals with food to guarantee the sighting, and this must be explicitly refused when you book. Lake Toba, afterward, was the decompression: big as a province, silent, with a rhythm that slows down by itself.",
    luoghi: [
      {
        nome: "Bukit Lawang and the Gunung Leuser",
        testo: "The village on the Bohorok River at the gates of Gunung Leuser National Park, one of the remaining habitats of the Sumatran orangutan. Formerly rehabilitated orangutans, now wild, live in the area. The park is also home to the Sumatran elephant, tiger and rhinoceros.",
        come: "From Medan by car or minibus, a few hours depending on traffic. Treks are only done with a certified guide, on foot in the jungle, for half a day or several days. Prices are set by the local guides and the park permit is usually included: compare two or three offers before choosing.",
        quando: "In the drier months, when the trails are less muddy. Head out at dawn.",
        tempo: "2-3 days",
        lat: 3.55083,
        lng: 98.12367,
        consiglio: "Explicitly refuse, already when booking, guides who lure animals with food."
      },
      {
        nome: "Lake Toba",
        testo: "The largest volcanic lake in the world, about 1,130 km², born of an enormous eruption. Cool water, green shores, villages and a large island in the middle, Samosir.",
        come: "From Medan by car or bus to Parapat, several hours on the road, then a ferry to Tuk Tuk on Samosir Island. From Berastagi to Parapat it's about 3 hours, with a driver at 700,000-800,000 IDR (about €40-45). The passenger ferry Parapat-Tuk Tuk takes about 45 minutes; the car ferry leaves from Ajibata and lands at Tomok.",
        quando: "All year, better in the morning and in the dry season.",
        tempo: "2-3 days",
        lat: 2.68,
        lng: 98.88,
        consiglio: "After Bukit Lawang it is the ideal decompression: slow pace, no hurry."
      },
      {
        nome: "Samosir Island and the Batak villages",
        testo: "The Toba Batak are overwhelmingly Christian and live in saddle-roofed houses with carved façades. The island fills the center of the crater and is almost as large as Singapore. Homestays and restaurants cluster on the Tuk Tuk peninsula, the traditional villages lie along the coast road.",
        come: "By rented scooter or car from Tuk Tuk, along the road that circles the island.",
        quando: "In the morning. The Sigale-gale puppet dances are staged mostly for visitors, in some villages.",
        tempo: "1 day",
        costo: "Scooter rental 70,000-100,000 IDR a day, about €4-6 (2026).",
        lat: 2.58333,
        lng: 98.81667,
        consiglio: "Rent a scooter and circle the island slowly, stopping in villages."
      },
      {
        nome: "Huta Siallagan in Ambarita",
        testo: "King Siallagan's village, with Batak houses in a row and the stone chairs where the council of elders met to judge wrongdoers. It is one of the most visited villages on Samosir, a few kilometers from Tuk Tuk.",
        come: "By scooter from Tuk Tuk, about ten minutes north along the coast road. Guides at the entrance tell the story of the chairs.",
        quando: "In the morning, before the groups.",
        tempo: "1 hour",
        lat: 2.67892,
        lng: 98.83647,
      },
      {
        nome: "Tomok and King Sidabutar's tomb",
        testo: "The village where the car ferry docks, with the stone sarcophagus of King Sidabutar, still venerated, and ancestor statues around it. Along the lane to the tomb there are stalls selling ulos textiles and carvings.",
        come: "By scooter from Tuk Tuk heading south, or on the ferry from Ajibata.",
        quando: "In the morning.",
        tempo: "1 hour",
        lat: 2.62,
        lng: 98.862,
      },
      {
        nome: "Sipiso-piso Waterfall",
        testo: "A waterfall that plunges more than a hundred meters from the plateau into a gorge, at the northern end of Lake Toba. From the viewpoint you see the falls and the lake together.",
        come: "A stop on the road between Berastagi and Parapat, with a driver. From the parking lot a long staircase goes down toward the base: climbing back up is tiring.",
        quando: "In the morning, before the clouds roll in.",
        tempo: "1-2 hours",
        lat: 2.91642,
        lng: 98.51965,
      },
      {
        nome: "Gunung Sibayak and Berastagi",
        testo: "An active but calm volcano above the town of Berastagi, with a climb of a few hours and fumaroles at the top. Afterward, hot springs for resting.",
        come: "From Berastagi on foot or by motorbike to the trailhead. Better with a guide.",
        quando: "In the early morning hours, before clouds and rain arrive.",
        tempo: "half a day",
        lat: 3.23917,
        lng: 98.50556,
        consiglio: "End the trek with a soak in the hot springs."
      },
      {
        nome: "Bukit Gundaling",
        testo: "The hill just outside Berastagi with a view of the area's two volcanoes, Sibayak and Sinabung. Sinabung has been active for years and the exclusion zones around the crater must be respected: from here you watch it from a distance.",
        come: "A few minutes by car from central Berastagi.",
        quando: "At sunset or early in the morning, with clear skies.",
        tempo: "1 hour",
        lat: 3.19273,
        lng: 98.50129,
      },
      {
        nome: "Medan: Istana Maimun and markets",
        testo: "The starting city for almost every trip in northern Sumatra. The palace of the Sultan of Deli, built between 1887 and 1891 and still owned by the sultanate, and the markets are the most interesting stops.",
        come: "The palace is in the centre, by taxi or Grab.",
        quando: "In the morning.",
        tempo: "2 hours",
        lat: 3.57528,
        lng: 98.68389,
        consiglio: "Do not stay more than one night: the good part is outside the city."
      },
      {
        nome: "Masjid Raya Al-Mashun, Medan",
        testo: "The great mosque of the Deli sultanate, with black domes and stained-glass windows. It is a few minutes' walk from Istana Maimun and the two pair well.",
        come: "On foot from the palace. Visitors enter outside prayer times, with legs and shoulders covered.",
        quando: "In the morning, avoiding Friday midday.",
        tempo: "30-45 minutes",
        lat: 3.57511,
        lng: 98.68732,
      },
      {
        nome: "Bukittinggi and the Jam Gadang",
        testo: "The city of the Minangkabau highlands, at about 900 meters, cool in the evening after the heat of the coast. In the center stands the Jam Gadang, the clock tower, surrounded by the Pasar Atas market and places to eat. It is the base for day trips in West Sumatra.",
        come: "From Padang or its airport by car, about 3 hours. The center is easily walkable.",
        quando: "Late afternoon and evening, when the square fills up.",
        tempo: "half a day",
        lat: -0.3052,
        lng: 100.3696,
        consiglio: "You can no longer climb the tower: you look at it from the square."
      },
      {
        nome: "Ngarai Sianok and Lobang Jepang",
        testo: "The canyon dropping steeply at the edge of Bukittinggi, with green walls and the river at the bottom. Under Panorama park, on the canyon rim, are the Lobang Jepang, tunnels dug during the Japanese occupation in the Second World War.",
        come: "On foot from central Bukittinggi to Panorama park; the tunnel entrance is in the same park.",
        quando: "In the morning, with light on the canyon walls.",
        tempo: "2 hours",
        costo: "About 15,000 IDR for the viewpoint, under €1 (2026); a cheap separate ticket for the tunnels.",
        orari: "Lobang Jepang open roughly from 8 am to late afternoon.",
        lat: -0.30779,
        lng: 100.3652,
      }
    ],
    programmi: [
      {
        titolo: "3 days: Bukit Lawang only",
        tappe: [
          "Day 1: arrival at Kualanamu, car to Bukit Lawang, dinner on the Bohorok",
          "Day 2: two-day trek in the Gunung Leuser with a night in the jungle",
          "Day 3: back on foot or tubing down the river, car to Medan and Istana Maimun"
        ]
      },
      {
        titolo: "4 days: Bukittinggi and West Sumatra",
        tappe: [
          "Day 1: arrival in Padang, road to Bukittinggi through the Lembah Anai gorge",
          "Day 2: Harau Valley",
          "Day 3: Puncak Lawang and Lake Maninjau along the Kelok 44 hairpins",
          "Day 4: Jam Gadang, Ngarai Sianok and Lobang Jepang, back to Padang"
        ]
      },
      {
        titolo: "7 days",
        tappe: [
          "Day 1: arrival in Medan, transfer to Bukit Lawang",
          "Day 2-3: trek in Leuser with a certified guide",
          "Day 4: transfer to Berastagi, Sibayak",
          "Day 5-6: Lake Toba and Samosir",
          "Day 7: return to Medan"
        ]
      },
      {
        titolo: "10 days",
        tappe: [
          "As the 7 days, with an extra day at Bukit Lawang and two at Lake Toba",
          "A stop at Sipiso-piso Waterfall between Berastagi and Parapat",
          "A day by scooter on Samosir between Tuk Tuk, Ambarita and Tomok",
          "Fly out of Silangit to Jakarta instead of driving back to Medan"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Lawang",
        perChi: "anyone doing the trek",
        testo: "Guesthouses along the Bohorok river. Simple and convenient for an early start.",
        fascia: "10-40 €"
      },
      {
        nome: "Tuk Tuk (Samosir)",
        perChi: "anyone going to Lake Toba",
        testo: "Homestays and guesthouses on the Tuk Tuk peninsula, on the lake. Quiet, low cost.",
        fascia: "12-45 €"
      },
      {
        nome: "Berastagi",
        perChi: "anyone going to the volcano",
        testo: "A highland town with cheap lodging, cooler."
      },
      {
        nome: "Bukittinggi, around the Jam Gadang",
        perChi: "anyone touring West Sumatra",
        testo: "Hotels and homestays in the center, with restaurants on foot and day trips to Harau and Maninjau.",
        fascia: "15-60 €"
      }
    ],
    sapori: [
      {
        nome: "Nasi padang",
        testo: "Rice with many ready-made dishes brought to the table or shown in the window: you pick what you want and pay for what you touch. It comes from West Sumatra."
      },
      {
        nome: "Sumatran coffee",
        testo: "Highly regarded, drunk in the warungs on the road to Berastagi for little money."
      },
      {
        nome: "Batak pork",
        testo: "Around Lake Toba, because the Batak are Christian. Rare in the rest of Muslim Indonesia."
      },
      {
        nome: "Mie goreng",
        testo: "Stir-fried noodles with vegetables and egg. Almost always available."
      }
    ],
    attenzioni: [
      "Trek only with certified guides: unregulated close contact is dangerous for you and for the orangutans.",
      "On mountain roads journey times are much longer than they look.",
      "The Bohorok river can swell with rain: follow local advice.",
      "Law: Indonesia has very severe drug laws. Carry nothing that is not your own."
    ],
    gite: [
      {
        nome: "Harau Valley",
        distanza: "47 km from Bukittinggi, 1.5-2 hours by car",
        come: "Car with driver from Bukittinggi, past Payakumbuh. Entry about 10,000-20,000 IDR per person, under €1.",
        testo: "A bowl of rice fields enclosed by vertical rock walls, with small waterfalls dropping from the cliffs, such as Sarasah Murai. Better on a weekday and in the morning, before the afternoon clouds."
      },
      {
        nome: "Lake Maninjau and Puncak Lawang",
        distanza: "45 minutes from Bukittinggi to the viewpoint, 1.5-2 hours to the shore",
        come: "Car with a local driver: the road is narrow. Puncak Lawang about 10,000-25,000 IDR per person, the shore is free.",
        testo: "A volcanic lake inside a caldera, best seen first from above. Then you go down to the shore along the Kelok 44, the road with 44 numbered hairpins, and have lake fish for lunch."
      }
    ],
    faq: [
      {
        domanda: "How many days do you need in Sumatra?",
        risposta: "At least a week for the north, between Bukit Lawang, Berastagi and Lake Toba. With two weeks you can add Bukittinggi and the Mentawai, starting from Padang."
      },
      {
        domanda: "Are you sure to see orangutans at Bukit Lawang?",
        risposta: "There's no guarantee, but the odds are high because formerly rehabilitated orangutans live in the area. Anyone promising a sure sighting often lures the animals with food, a practice to refuse."
      },
      {
        domanda: "Do you need a guide for trekking in Gunung Leuser?",
        risposta: "Yes, you can only enter with a certified guide. Choose among registered guides rather than the cheapest offers on the street."
      },
      {
        domanda: "How do you get to Lake Toba?",
        risposta: "By car to Parapat, about 3 hours from Berastagi or 4-5 from Kualanamu airport, then the passenger ferry to Tuk Tuk in about 45 minutes. Alternatively, fly to Silangit, an hour and a half from Parapat."
      },
      {
        domanda: "Medan or Padang as a gateway?",
        risposta: "Medan for the orangutans, Berastagi and Lake Toba; Padang for Bukittinggi and the Mentawai. The two areas are far apart by land, and with little time it's best to pick one."
      },
      {
        domanda: "When is the best time to visit Sumatra?",
        risposta: "From June to September, the driest season. With the rains the jungle trails get very muddy and the Bohorok river can swell."
      }
    ],
    esperienzeSlugs: ['trekking-oranghi-bukit-lawang'],
    tripSlugs: ['indonesia-itinerario', 'sumatra-mentawai', 'indonesia-isola-per-isola'],
    imageAlt: "Lake Toba seen from above among green hills and forest, Sumatra",
    immagine: '/images/indonesia/sumatra.jpg',
  },
  {
    slug: 'giava',
    paeseSlug: 'indonesia',
    ordine: 2,
    nome: 'Java',
    tipologia: ['cultura', 'natura', 'vulcani'],
    giorniConsigliati: '6-8 days between Yogyakarta, Bromo and Ijen',
    visitataPersonalmente: true,
    introduzione:
      "The most populous island in Indonesia, the cultural heart of the country with great Buddhist and Hindu temples and two spectacular volcanoes to see at dawn.",
    percheAndarci:
      "On a single island it packs the temples of Borobudur and Prambanan, dawn over the Bromo crater and the blue fire of Ijen, very different experiences.",
    cosaVedere: [
      "Borobudur, the largest Buddhist temple in the world, at dawn",
      "Prambanan, the largest Hindu temple complex in Indonesia",
      "Mount Bromo, with its smoking crater surrounded by the Sea of Sand",
      "Kawah Ijen, with its turquoise sulfuric acid lake and the blue flames at night",
    ],
    cosaFare: [
      "Dawn at Bromo by 4x4 jeep from the Mount Penanjakan viewpoint",
      "Night trek to the Ijen crater to see the \"blue fire\" phenomenon and the sulfur miners at work",
      "Tour of the temples of Yogyakarta, the ideal base for Borobudur and Prambanan",
      "Batik class or a visit to a traditional workshop in Yogyakarta",
    ],
    doveDormire:
      "Yogyakarta as a base for Borobudur and Prambanan, with the Prawirotaman area quieter than Malioboro; for Bromo you sleep at Cemoro Lawang, on the crater rim, and for Ijen in Banyuwangi or the guesthouses of Licin.",
    doveMangiare:
      "Yogyakarta is the place to try gudeg, the sweet jackfruit stew that is the city's signature dish and divides whoever tastes it. For the rest, the street beats the restaurants: nasi goreng and mie goreng from the evening carts, sate ayam and tempeh (invented right here in Java), fried and eaten as a snack. Around Bromo and Ijen the offer is minimal and meals are had at the guesthouse: it's not the part of the trip where you eat well.",
    comeArrivare:
      "From Europe you land in Jakarta (CGK) and connect to a domestic flight of about 1 hour 20 minutes to Yogyakarta, leaving a few hours' margin for delays and immigration. Yogyakarta airport (YIA) is on the coast, about 45 km from the city: the KA Bandara train reaches Tugu station in about 40 minutes for around IDR 20,000 (about €1; about 50,000 for the faster YIA Xpress), the DAMRI bus costs around IDR 80,000, and Grab or a taxi about IDR 250,000-350,000 (€15-20) in over an hour. For Bromo and Ijen you continue by train to Surabaya Gubeng (4-5 hours) and Probolinggo (another 2 hours).",
    comeSpostarsi:
      "Train between the main cities (an efficient Jakarta-Yogyakarta-Surabaya network), car with driver for the excursions to Bromo and Ijen.",
    periodoMigliore: "May-September, clearer skies for dawn at Bromo",
    costi: "Entry: Borobudur and Prambanan about USD 25 each for foreigners, with the Borobudur climb extra; Bromo about IDR 255,000; Ijen IDR 100,000-150,000 (2025-26). Budget: about €25-35 a day with guesthouses, warungs, trains and public minivans. Mid-range: €50-80 with a hotel in Prawirotaman, a car with driver for the temples and a shared jeep at Bromo. High: over €150 with upscale hotels and private volcano tours.",
    erroriDaEvitare: [
      "Climbing Kawah Ijen without a gas mask: sulfur fumes are dangerous",
      "Underestimating Jakarta traffic when planning your transfers",
    ],
    miaEsperienza:
      "Java is the part of Indonesia that feels least like a vacation and leaves the sharpest memory. Ijen above all: we set off at one in the morning and climbed in the dark with the gas mask on. Down in the crater, the blue flames were smaller than they look in photos; everything else was enormous. Miners walked past with baskets of eighty kilos of sulfur on their shoulders, barefoot or nearly, and in there tourism takes on a different weight. At Bromo the opposite happened: dawn from Penanjakan is spectacular, but it's also a parking lot with hundreds of jeeps and rows of people holding up their phones. It's still worth it, as long as you know beforehand. Borobudur at dawn is one of the few things that lives up to its myth, but the ticket to climb the structure is limited in number and sells out well in advance.",
    luoghi: [
      {
        nome: "Borobudur",
        testo: "The largest Buddhist temple in the world, from the 9th century, with nine stacked platforms, six square and three circular, 2,672 relief panels and originally 504 Buddha statues. At dawn, with mist over the plain, it's one of the few places that lives up to its legend.",
        come: "From Yogyakarta by car or bus. Climbing the monument is capped, with a guide and special sandals: book online on the official website well in advance.",
        quando: "At sunrise or sunset, with dedicated paid packages. Climbing the structure is split into time slots with a fixed quota and sells out.",
        tempo: "3 hours",
        costo: "For foreigners about USD 25, around €22 (2025), for the park; the climb up the structure, with a guide and upanat sandals, is a separate ticket in time slots, with about 1,200 places a day. Indonesians pay less.",
        orari: "Structure climb every day 8:30am-5pm, in time slots. On Mondays the temple area may be closed for maintenance: check the official website.",
        lat: -7.608,
        lng: 110.204,
        url: "https://ticket.borobudurpark.com/en",
        consiglio: "Book the climbing ticket well ahead, because places are limited.",
      },
      {
        nome: "Prambanan",
        testo: "The largest Hindu temple complex in Indonesia, from the mid-9th century, with towers dedicated to Shiva, Vishnu and Brahma; Shiva's, 47 metres high, is the tallest of the complex. The reliefs of the Shiva and Brahma temples tell the Ramayana.",
        come: "Just outside Yogyakarta, by city bus or taxi. Visit on your own or with a guide.",
        quando: "In the morning or at sunset. On Mondays, for maintenance, only the park around the temples can be visited: check the official website. On some evenings the Ramayana ballet is staged.",
        tempo: "2 hours",
        costo: "For foreigners about USD 25, around €22 (2025). The ticket also covers the Lumbung, Bubrah and Sewu temples in the same park.",
        orari: "Every day from 6:30am; closes in the late afternoon, with last entry about an hour before.",
        lat: -7.75222,
        lng: 110.49167,
        url: "https://ticket.borobudurpark.com/en",
        consiglio: "Check ballet dates: in some periods it is held at sunset with the towers lit.",
      },
      {
        nome: "Gunung Bromo",
        testo: "A smoking crater inside the Tengger caldera, surrounded by the Sea of Sand. Dawn from the Penanjakan viewpoint is one of Java's most famous images.",
        come: "From Cemoro Lawang or Surabaya by 4x4 jeep booked the evening before. You leave in the middle of the night. The ticket is bought online on the park's official website, before the visit. From the Sea of Sand you walk up to the crater rim, with a final staircase of about 250 steps.",
        quando: "At dawn; from April to October the sky is clearer. Before setting off, check that the park is open: in 2026 it stayed closed for weeks after a fire.",
        tempo: "half a day",
        costo: "Foreigner entry about IDR 255,000, around €15 (2026), higher at weekends, booked online. Shared jeep about IDR 700,000-900,000 per vehicle (€40-50), split between 4-6 people.",
        lat: -7.94167,
        lng: 112.95,
        url: "https://bromotenggersemeru.org/",
        consiglio: "Dawn from Penanjakan is spectacular but crowded with jeeps: go knowing it.",
      },
      {
        nome: "Kawah Ijen and the blue fire",
        testo: "The largest strongly acidic crater lake in the world, about a kilometre wide and turquoise, and at night the blue flames of burning sulphur gas. Sulphur miners work in the crater, carrying extremely heavy loads on their shoulders.",
        come: "From Banyuwangi or Licin by car to Paltuding, then on foot to the crater rim and, where allowed, down towards the lake. A real gas mask is needed. Tickets are bought online; the park also asks for a recent medical certificate (hotels and tours often arrange it).",
        quando: "The Paltuding gate opens at 2am and closes at noon; the blue fire is only visible in the dark, before dawn. The crater closes one day a month for cleaning and in bad weather or volcanic activity.",
        tempo: "half a day",
        costo: "Foreigners IDR 100,000 on weekdays and IDR 150,000 at weekends and on holidays, about €6-9 (2025).",
        orari: "Paltuding gate from 2am to noon. Closed for maintenance on the first Friday of the month and with fumes, bad weather or volcanic activity.",
        lat: -8.0575,
        lng: 114.2415,
        url: "https://ayoketamannasional.kehutanan.go.id/en/taman-wisata-alam/kawah-ijen",
        consiglio: "Bring a real gas mask and not a scarf; do not photograph the miners without asking.",
      },
      {
        nome: "Yogyakarta Kraton and Taman Sari",
        testo: "The sultan's palace, still in use, with a museum and gamelan performances. Within the Kraton grounds is Taman Sari, the «water castle» built in the 18th century, with pools and pavilions.",
        come: "On foot or by becak from Malioboro.",
        quando: "In the morning. The Kraton has reduced hours on ceremony days.",
        tempo: "2 hours",
        costo: "Kraton about IDR 25,000 for foreigners, Taman Sari separately about IDR 25,000: around €1.50 each (2025).",
        orari: "Kraton Tuesday to Sunday 9am-2pm, closed on Mondays and during court ceremonies.",
        lat: -7.80569,
        lng: 110.36406,
        consiglio: "Visit both on the same walk, then get lost in the batik district streets. Ignore anyone offering a «students' batik exhibition, today only»: it leads to a shop with inflated prices.",
      },
      {
        nome: "Punthuk Setumbu",
        testo: "A wooded hill a few kilometres from Borobudur, from which at dawn you see the temple rise out of the mist, with the Merapi and Merbabu volcanoes behind. It's the easiest alternative when the sunrise places on the temple are sold out.",
        come: "By car from Yogyakarta, about an hour and a half; from the car park a short climb on steps to the platform.",
        quando: "Before dawn, then enter Borobudur with the first time slot.",
        tempo: "1.5 hours",
        lat: -7.60741,
        lng: 110.17784,
        consiglio: "Dry days, from May to September, give a better chance of low mist and volcanoes together.",
      },
      {
        nome: "Candi Ratu Boko",
        testo: "The remains of an 8th-9th century complex on a plateau south of Prambanan: a great stone gate, terraces, pools and foundations. The setting matters more than the ruins, with views over the plain and Merapi at sunset.",
        come: "A few kilometres south of Prambanan, by car or taxi; it's easy to pair in the same afternoon.",
        quando: "Late afternoon, for sunset from the gate.",
        tempo: "1.5-2 hours",
        orari: "Every day from 7am.",
        lat: -7.77,
        lng: 110.48889,
        url: "https://ticket.borobudurpark.com/en",
      },
      {
        nome: "Candi Sewu",
        testo: "Java's second Buddhist complex after Borobudur, from the 8th century: a central temple surrounded by rows of smaller temples, many partly rebuilt. It's in the same park as Prambanan and almost always empty.",
        come: "On foot or with the bicycles and shuttles inside the Prambanan park, about 800 metres north of the main temples.",
        quando: "After Prambanan, an hour and a half before closing.",
        tempo: "45 minutes",
        costo: "Included in the Prambanan ticket.",
        lat: -7.74393,
        lng: 110.49284,
        url: "https://ticket.borobudurpark.com/en",
      },
      {
        nome: "Madakaripura Waterfall",
        testo: "Java's tallest waterfall, hidden at the end of a narrow canyon, with a drop of over 200 metres. Getting there means walking along the river and passing under smaller falls: you will get wet.",
        come: "About 45 minutes by car from the Bromo area; about a kilometre on foot along the river, then another 500 metres wading.",
        quando: "In the morning, after dawn at Bromo; in the dry season, because the river swells when it rains.",
        tempo: "2-3 hours",
        lat: -7.84472,
        lng: 113.0175,
        consiglio: "Sandals, a change of clothes and a dry bag for phone and documents.",
      },
      {
        nome: "Malioboro and batik workshops",
        testo: "Yogyakarta's shopping street and the batik workshops where you can learn the wax and dye technique.",
        come: "On foot. Courses are booked at workshops in the Taman Sari district.",
        quando: "Afternoon and evening.",
        tempo: "2-3 hours",
        lat: -7.79336,
        lng: 110.36571,
        consiglio: "A batik course is a good way to see a living craft.",
      },
      {
        nome: "Kotagede",
        testo: "Yogyakarta's oldest district, first capital of the Mataram kingdom in the 16th century, with narrow lanes, traditional houses, the old mosque and the royal tombs. It's best known for its silver workshops, where you can watch filigree being made.",
        come: "About 5 km south-east of the centre, by Grab or Gojek; the district is explored on foot.",
        quando: "In the morning, when the workshops are open.",
        tempo: "2 hours",
        lat: -7.81786,
        lng: 110.39541,
      },
      {
        nome: "Kota Tua, Jakarta",
        testo: "Old Dutch colonial Batavia, with Fatahillah Square, the arcaded administrative buildings and museums housed in historic buildings. It's the right place to see Jakarta in half a day, before the flight to Yogyakarta.",
        come: "By Grab or TransJakarta bus to Jakarta Kota station; then on foot around the square.",
        quando: "Morning or late afternoon, avoiding the midday heat.",
        tempo: "2-3 hours",
        lat: -6.13468,
        lng: 106.81324,
      },
      {
        nome: "Monas, Jakarta",
        testo: "The National Monument, a 132-metre obelisk with a gilded top in the middle of Merdeka Square. From the terrace at the top, on days without haze, the city stretches to the horizon.",
        come: "By Grab from Kota Tua, a few minutes. The ride to the top has a separate ticket and limited places.",
        quando: "In the morning, when the haze is lighter and queues shorter.",
        tempo: "1-1.5 hours",
        lat: -6.17539,
        lng: 106.82714,
      },
    ],
    programmi: [
      {
        titolo: "1 day: the temples of Yogyakarta",
        tappe: [
          "Dawn at Borobudur, or at Punthuk Setumbu if places are sold out",
          "Climb the structure with the first time slot",
          "Break in Yogyakarta during the hot hours",
          "Afternoon at Prambanan and Candi Sewu, sunset among the towers",
        ],
      },
      {
        titolo: "2 days: Yogyakarta",
        tappe: [
          "Day 1: Borobudur at dawn, Prambanan and Sewu at sunset",
          "Day 2: Kraton and Taman Sari in the morning, batik workshop",
          "Day 2: Kotagede in the afternoon, evening on Malioboro with gudeg",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Yogyakarta, Kraton and Taman Sari, dinner on Malioboro",
          "Day 2: dawn at Borobudur, Prambanan in the afternoon",
          "Day 3: train to Surabaya or Probolinggo, night at Cemoro Lawang",
        ],
      },
      {
        titolo: "6-8 days",
        tappe: [
          "Days 1-3 as above",
          "Day 4: dawn at Bromo, transfer toward Banyuwangi",
          "Day 5: Ijen in the night, rest",
          "Days 6-8: Bali or return",
        ],
      },
    ],
    zone: [
      {
        nome: "Prawirotaman (Yogyakarta)",
        perChi: "anyone who wants to be quieter",
        testo: "A district of cafés and guesthouses, less chaotic than Malioboro.",
        fascia: "€15-70",
      },
      {
        nome: "Malioboro",
        perChi: "anyone who wants the tourist heart",
        testo: "Near the station and stalls. Noisy.",
        fascia: "€20-80",
      },
      {
        nome: "Cemoro Lawang",
        perChi: "anyone going to Bromo",
        testo: "A village on the crater rim, with simple lodging. Cold at night.",
        fascia: "€15-70",
      },
      {
        nome: "Banyuwangi or Licin",
        perChi: "anyone going to Ijen",
        testo: "Simple lodging for a middle-of-the-night start.",
      },
    ],
    sapori: [
      {
        nome: "Gudeg",
        testo: "Sweet jackfruit stew, Yogyakarta's signature dish. It divides those who taste it."
      },
      {
        nome: "Nasi goreng and mie goreng",
        testo: "Fried rice and noodles, from evening carts."
      },
      {
        nome: "Sate ayam",
        testo: "Chicken skewers with peanut sauce."
      },
      {
        nome: "Tempeh",
        testo: "Fermented soy, invented right in Java, fried and eaten as a snack."
      }
    ],
    attenzioni: [
      "Ijen: without a gas mask the sulfur fumes are dangerous.",
      "Jakarta traffic makes journey times unpredictable.",
      "Bromo: agree the jeep price before leaving; Penanjakan is crowded.",
      "Unofficial taxis at stations ask high fares: use Grab or metered taxis."
    ],
    gite: [
      {
        nome: "Mount Merapi",
        distanza: "about 30 km, 1 hour by car",
        come: "By car with driver to Kaliurang, then by jeep with local tours over the lava flows of the 2010 eruption.",
        testo: "Indonesia's most active volcano towers over the Yogyakarta plain. Jeep tours pass buried villages and lava fields, with the smoking cone behind on clear mornings. When the volcanic alert is high, areas near the crater close.",
      },
      {
        nome: "Parangtritis Beach",
        distanza: "about 28 km, 45 minutes-1 hour by car",
        come: "By Grab or scooter from Yogyakarta, heading south.",
        testo: "A long dark-sand beach on the Indian Ocean, with dunes and cliffs, tied to the legends of the Queen of the Southern Sea. People come for sunset: currents are strong and swimming is not advised.",
      },
      {
        nome: "Dieng Plateau",
        distanza: "about 120 km, 3-4 hours by car",
        come: "By car with driver, leaving before dawn; a long day, better with a night there.",
        testo: "A volcanic plateau above 2,000 metres with some of Java's oldest Hindu temples, coloured lakes and steaming craters. It's cold, especially at dawn.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Java?",
        risposta: "Three days are enough for Yogyakarta with Borobudur and Prambanan. Adding Bromo and Ijen takes 6-8 days, because train and road transfers are long.",
      },
      {
        domanda: "Do you need to book the Borobudur climb?",
        risposta: "Yes. The climb is in time slots with a guide and about 1,200 places a day, and it sells out well in advance: buy it on the official portal before you leave.",
      },
      {
        domanda: "Can you do Borobudur and Prambanan on the same day?",
        risposta: "Yes, it's the most common combination: Borobudur at dawn, a break in the hot hours, Prambanan in the afternoon until sunset. They're on opposite sides of Yogyakarta, so you need a car with driver.",
      },
      {
        domanda: "How do you get from Yogyakarta to Bromo?",
        risposta: "By train to Surabaya Gubeng (4-5 hours), then to Probolinggo (about 2 hours) and by public minivan to Cemoro Lawang, about IDR 35,000. Outside Probolinggo station, ignore anyone saying the minivans have already left.",
      },
      {
        domanda: "Can you climb Ijen without a tour?",
        risposta: "Yes, with a car and driver from Banyuwangi or Licin to Paltuding and a ticket bought online. You still need a real gas mask, a headlamp and the medical check required by the park.",
      },
      {
        domanda: "When is the best time to visit Java?",
        risposta: "From May to September, the dry season, when the dawn sky over Bromo and Borobudur is clearest. From November to March it rains often and volcano trails can close.",
      },
    ],
    esperienzeSlugs: ['alba-bromo-jeep'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'indonesia-isola-per-isola'],
    imageAlt: "A stone Buddha head at Borobudur, seen from behind, in front of the valley wrapped in dawn mist, Java",
    immagine: '/images/indonesia/borobudur-buddha-nebbia-riccardo.jpg',
  },
  {
    slug: 'bali',
    paeseSlug: 'indonesia',
    ordine: 3,
    nome: 'Bali',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: '7-10 days to cover Ubud, the south and at least one of the nearby islands',
    visitataPersonalmente: true,
    introduzione:
      "The best-known island of the archipelago: terraced rice paddies, temples perched over the sea, surf beaches and a highly developed nightlife and wellness scene.",
    percheAndarci:
      "In a small space there are very different souls: the cultural calm of Ubud, the surf and nightlife of the south, the cliffs of Uluwatu and Nusa Penida, reachable by boat.",
    cosaVedere: [
      "The terraced rice paddies of Tegalalang and the monkey forest in Ubud",
      "The Uluwatu temple, on a cliff dropping straight into the sea",
      "Tanah Lot, the temple on a rock surrounded by the tide",
      "Kelingking Beach and Angel's Billabong on Nusa Penida",
    ],
    cosaFare: [
      "Sunrise trek on the Gunung Batur volcano",
      "A day (or more) on the Nusa Penida islands for Kelingking Beach and the snorkeling spots with manta rays (there is a dedicated experience page)",
      "Surfing at Canggu or Uluwatu, for all levels",
      "Kecak dance at sunset at the Uluwatu temple",
      "Scooter ride among the rice paddies of Ubud's hinterland",
    ],
    doveDormire:
      "Ubud for the cultural side and the rice paddies, Canggu for surf and evening life, Uluwatu for the cliffs and relative calm, Sanur or Nusa Dua for a quieter, family-friendly pace. Sleeping one night on Nusa Penida avoids the double crossing in a day.",
    doveMangiare:
      "The mistake is eating only in cafés for foreigners, which are everywhere and excellent but tell you little. Babi guling, spit-roasted suckling pig, is the Balinese dish par excellence and is found in specialized places that open at lunch and close when they run out; bebek betutu, duck cooked for hours in spices, often has to be ordered the day before. In neighborhood warungs you eat for a few euros, and quality has nothing to do with price.",
    comeArrivare: "You land at Denpasar's Ngurah Rai airport (DPS), from Europe with one stop, usually in Singapore, Doha, Dubai or Istanbul. There are no trains or metro: at the official taxi desk in arrivals fares are fixed by zone, about 150,000-250,000 IDR for Kuta, Seminyak or Sanur and 300,000-450,000 IDR for Ubud, which is 1 to 2 hours away depending on traffic; Uluwatu is about 45 minutes. Grab and Gojek cost less, from the pick-up point shown in the app. Before leaving, pay the e-VOA and the Love Bali tourist levy (150,000 IDR) online and fill in the All Indonesia Arrival Card.",
    comeSpostarsi:
      "Rented scooter (international license recommended, frequent checks) or private driver/Grab for longer trips.",
    periodoMigliore: "April-October, dry season",
    costi: "They vary a lot: it is one of the Indonesian destinations with the widest choice, both budget and high-end. Budget: about 30-40 € a day with guesthouses, warungs and a scooter (60,000-100,000 IDR a day). Mid-range: 80-120 € with a villa or boutique hotel and a few days with a driver (300,000-600,000 IDR per trip). High: over 200 € with resorts and a full-time driver. Tourist levy 150,000 IDR per person.",
    erroriDaEvitare: [
      "Renting a scooter without an international license: checks are frequent and fines are steep",
      "Underestimating the traffic between Canggu and Seminyak at rush hour",
      "Not booking the boat to Nusa Penida in advance in high season",
    ],
    miaEsperienza:
      "Bali is two different islands depending on where you sleep, and that's why it gets opposite verdicts. The south between Canggu and Seminyak is made of concrete, traffic and places designed for people coming from outside: you can have fun, but Indonesia is elsewhere. Twenty kilometers inland is enough and the flower offerings in front of the houses, renewed every morning, reappear, along with temples in use rather than on display: the island becomes what you came looking for. More than any rice paddy or beach, what stayed with me is the Kecak dance at Uluwatu at sunset, with seventy men sitting in a circle making all the music with their voices. Nusa Penida, on the other hand, is by now a victim of its own success (Kelingking at midday is a line of people on a steep path) and it's best to be on the first boat in the morning.",
    luoghi: [
      {
        nome: "Ubud and the Tegalalang rice terraces",
        testo: "Bali's cultural centre, with temples, workshops, dances and terraced rice fields all around. Tegalalang is the most photographed, but the interior has less-visited valleys.",
        come: "From Denpasar or the south by car with a driver or by scooter: times depend heavily on traffic. The rice fields are visited on foot.",
        quando: "In the morning, before the groups.",
        tempo: "1 day",
        costo: "Tegalalang about 25,000 IDR, about 1.5 €, depending on the access point; swings extra.",
        lat: -8.4335,
        lng: 115.279,
        consiglio: "Head a little inland and you find the flower offerings in front of houses and temples in daily use again.",
      },
      {
        nome: "Ubud Monkey Forest",
        testo: "A forest with temples and hundreds of macaques. They are used to visitors and steal glasses, bags and food.",
        come: "On foot from central Ubud.",
        quando: "In the morning.",
        tempo: "1 hour",
        costo: "About 130,000 IDR for foreign adults since April 2026, about 7 €.",
        orari: "Daily, about 9:00-18:00.",
        lat: -8.5188,
        lng: 115.2585,
        url: "https://www.monkeyforestubud.com/",
        consiglio: "Don't bring food or dangling objects: the macaques grab everything.",
      },
      {
        nome: "Uluwatu Temple and the Kecak dance",
        testo: "A temple on a cliff dropping sheer into the sea. In the evening, in the amphitheatre, the Kecak dance is performed: dozens of men sitting in a circle make all the music with their voices, without instruments, and tell the Ramayana.",
        come: "From Canggu or Seminyak by car or scooter; allow extra time for traffic. There are macaques everywhere.",
        quando: "At sunset.",
        tempo: "2-3 hours",
        costo: "Temple about 50,000 IDR, about 3 €; Kecak about 150,000 IDR, about 8 €, separate ticket.",
        orari: "The Kecak starts every evening around 18:00; in peak months seats sell out.",
        lat: -8.8291,
        lng: 115.0849,
        consiglio: "Arrive early to get a good seat in the amphitheatre.",
      },
      {
        nome: "Tanah Lot",
        testo: "A temple on an offshore rock, surrounded by the tide. One of the most photographed sunset spots in Bali.",
        come: "By car from Canggu, a short way along the coast. At low tide you can reach the foot of the rock.",
        quando: "At sunset, but it is crowded.",
        tempo: "1.5 hours",
        lat: -8.6212,
        lng: 115.0868,
        consiglio: "Check the tide: at low tide it is more striking.",
      },
      {
        nome: "Sunrise on Gunung Batur",
        testo: "A night trek to the top of the volcano, 1,717 metres, for sunrise over the caldera and Lake Batur. The climb takes a few hours and is not technical.",
        come: "With a local guide, in practice mandatory, starting from Toya Bungkah or nearby villages; many agencies pick you up at your hotel between 2 and 3 a.m.",
        quando: "Leave in the middle of the night to be at the top for sunrise.",
        tempo: "Half a day",
        costo: "Permit about 100,000 IDR per person, about 5.5 €, plus the guide.",
        lat: -8.242,
        lng: 115.375,
        consiglio: "Bring a jacket: it is cold at the top.",
      },
      {
        nome: "Tirta Empul",
        testo: "The temple of the holy springs, founded in the 10th century, where Balinese bathe in purification under the stone spouts. You can enter the pools wearing a sarong, following the line of worshippers.",
        come: "About 30-40 minutes by car north of Ubud, towards Tampaksiring. Pair it with Tegalalang.",
        quando: "At opening time, before the groups; on ceremony days the pools may be reserved for worshippers.",
        tempo: "1-1.5 hours",
        costo: "About 75,000 IDR for foreign adults, about 4 € (2026); sarong lent or rented.",
        orari: "Daily, about 8:00-18:00.",
        lat: -8.4155,
        lng: 115.3153,
        consiglio: "Those who go in the water skip the spouts reserved for rites for the dead: worshippers and custodians point them out.",
      },
      {
        nome: "Pura Besakih",
        testo: "Bali's \"mother temple\", on the slopes of Gunung Agung at about a thousand metres: a complex of more than twenty temples on terraces, the most important on the island. On festival days it is full of processions.",
        come: "About an hour and a half by car from Ubud. You enter with a temple guide hired at the entrance: ignore guides offering themselves along the road.",
        quando: "In the morning, when Agung is free of clouds.",
        tempo: "2 hours",
        lat: -8.3739,
        lng: 115.4517,
      },
      {
        nome: "Pura Lempuyang",
        testo: "The temple at the eastern tip of the island, famous for the split gate framing Gunung Agung, the \"Gate of Heaven\". The photo is taken in turns and the queue can last hours; the higher temples, up a long staircase, are almost empty.",
        come: "About 2 hours by car from Ubud. Private cars are left at the terminal, then a mandatory shuttle takes you to the entrance.",
        quando: "At dawn, when the queue is shortest and Agung is clearest.",
        tempo: "Half a day including the journey",
        costo: "About 100,000 IDR plus 50,000 for the return shuttle, about 8 € in total (2026), cash only; sarong included.",
        lat: -8.3915,
        lng: 115.6305,
        consiglio: "The \"mirror\" reflection in the photos is the photographer's trick with a piece of glass: there is no lake.",
      },
      {
        nome: "Tirta Gangga",
        testo: "The water garden of the last king of Karangasem, with pools, fountains and koi: you walk on stepping stones across the water. It is the natural stop after Lempuyang.",
        come: "By car, about twenty minutes from Lempuyang.",
        quando: "Late morning, on the way back from Lempuyang.",
        tempo: "1 hour",
        costo: "Small entrance fee.",
        lat: -8.412,
        lng: 115.587,
      },
      {
        nome: "Sidemen",
        testo: "A valley of rice terraces at the foot of Gunung Agung, less touristy than Tegalalang, with villages of songket weavers. There is no monument to tick off: you walk among the fields and stop at a warung with a view of the volcano.",
        come: "From Ubud about 1h15-1h30 by road, by scooter or with a driver (return about 350,000 IDR, about 20 €).",
        quando: "Early morning or late afternoon.",
        tempo: "Half a day, or a night",
        lat: -8.48,
        lng: 115.44,
        consiglio: "To walk among the rice fields, hire a village guide for a couple of hours: the paths are not signposted and cross private land.",
      },
      {
        nome: "Kerta Gosa in Klungkung",
        testo: "The hall of justice of the old Klungkung kingdom, with ceilings painted in the Kamasan style: the punishments of hell and rewards of heaven, like a comic strip. Next to it are the floating pavilion and a small museum.",
        come: "On the road between Ubud and Sidemen or Padang Bai, an easy stop with a driver.",
        quando: "By day, on a drive east.",
        tempo: "45 minutes",
        costo: "Modest entrance fee.",
        lat: -8.5355,
        lng: 115.4039,
      },
      {
        nome: "Jatiluwih rice terraces",
        testo: "Bali's most extensive terraces, a UNESCO site for the subak, the shared irrigation system run by the water temples. Marked trails of different lengths cross them, with Mount Batukaru in the background.",
        come: "About 1.5-2 hours by car from Ubud; pair it with Ulun Danu Beratan.",
        quando: "In the morning, before the heat; before the harvest the terraces are green.",
        tempo: "2-3 hours",
        costo: "About 75,000 IDR for foreigners, about 4 €.",
        lat: -8.37,
        lng: 115.131,
      },
      {
        nome: "Ulun Danu Beratan",
        testo: "The temple of the water goddess on Lake Beratan, at about 1,200 metres, with multi-tiered roofs that seem to float. Up here it is cool and mornings are often misty.",
        come: "By car, in the Bedugul area, on the road between the south and Munduk or Lovina.",
        quando: "Early morning, when the lake is still.",
        tempo: "1 hour",
        costo: "About 100,000 IDR for foreigners since July 2026, about 5.5 €, cash or card.",
        lat: -8.2752,
        lng: 115.1668,
      },
      {
        nome: "Ubud Royal Palace and Saraswati Temple",
        testo: "In central Ubud stands Puri Saren, the royal family's palace, and a little further on the Saraswati Temple with its lotus pond. In the evening the courtyards host Balinese dance shows almost every day.",
        come: "On foot, on Ubud's main street.",
        quando: "By day for the courtyards, in the evening for the dances.",
        tempo: "1 hour, plus the show",
        costo: "Free by day; tickets for the evening dances on sale at the entrance in the afternoon.",
        lat: -8.5069,
        lng: 115.2625,
      },
      {
        nome: "Campuhan Ridge Walk",
        testo: "A paved path of about two kilometres along the ridge between two river valleys, just outside Ubud, through tall grass and palms. At the end there are cafés and rice fields.",
        come: "On foot from central Ubud; it starts behind Gunung Lebah temple.",
        quando: "At dawn or sunset: at midday there is no shade.",
        tempo: "1-1.5 hours",
        costo: "Free.",
        lat: -8.503,
        lng: 115.254,
      },
      {
        nome: "Uluwatu beaches",
        testo: "On the Bukit peninsula the beaches are small coves below the cliffs: Padang Padang, Bingin, Suluban, each with its own staircase. They have Bali's most famous surf breaks.",
        come: "By scooter or with a driver; you walk down steep stairs.",
        quando: "At low tide, when there is more sand; sunset from the warungs of Bingin.",
        tempo: "Half a day",
        costo: "Padang Padang about 15,000 IDR for foreigners, cash.",
        lat: -8.811,
        lng: 115.103,
      },
      {
        nome: "Nusa Penida: Kelingking Beach",
        testo: "A dinosaur-shaped cliff above a beach, the most photographed spot on the island. Angel's Billabong and Manta Bay complete the tour.",
        come: "By fast boat from Sanur or Padang Bai, then car or scooter on the island.",
        quando: "On the first boat of the morning, to avoid the queue on the steep path.",
        tempo: "1 day",
        lat: -8.7505,
        lng: 115.4746,
        consiglio: "Spending a night on Nusa Penida avoids a double crossing in one day.",
      },
    ],
    programmi: [
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Ubud, the royal palace and Monkey Forest, Campuhan Ridge Walk at sunset",
          "Day 2: sunrise on Batur, on the way back Tirta Empul and the Tegalalang rice terraces",
          "Day 3: Uluwatu, beaches at low tide and the Kecak dance at sunset",
        ],
      },
      {
        titolo: "5 days",
        tappe: [
          "Days 1-2: as above",
          "Day 3: east Bali, Lempuyang at dawn, Tirta Gangga, Kerta Gosa and the Sidemen valley",
          "Day 4: Jatiluwih and Ulun Danu Beratan, Tanah Lot at sunset",
          "Day 5: Uluwatu, beaches and the Kecak dance",
        ],
      },
      {
        titolo: "7 days",
        tappe: [
          "Days 1-5: as above",
          "Days 6-7: Nusa Penida on the first boat from Sanur, Kelingking before the crowds, a night on the island and back",
        ],
      },
    ],
    zone: [
      {
        nome: "Ubud",
        perChi: "those looking for culture and rice fields",
        testo: "The cultural heart, with guesthouses among the fields. Very touristy by day.",
        fascia: "35-150 €",
      },
      {
        nome: "Canggu",
        perChi: "those looking for surf and nightlife",
        testo: "Bars, cafés and black-sand beaches. Heavy traffic and concrete.",
        fascia: "50-180 €",
      },
      {
        nome: "Uluwatu",
        perChi: "those looking for cliffs and relative calm",
        testo: "Beaches below the cliffs and sunsets. Quieter but far from everything.",
        fascia: "60-250 €",
      },
      {
        nome: "Sanur or Nusa Dua",
        perChi: "families",
        testo: "A quieter pace and sheltered sea. Boats to the Nusa islands leave from Sanur.",
        fascia: "50-250 €",
      },
    ],
    sapori: [
      {
        nome: "Babi guling",
        testo: "Spit-roasted suckling pig, the Balinese dish par excellence. Found in specialized places that open at lunch and close when they run out."
      },
      {
        nome: "Bebek betutu",
        testo: "Duck cooked for hours in spices, often to order the day before."
      },
      {
        nome: "Nasi campur",
        testo: "Rice with small tastes of meat, vegetables and fritters, in neighborhood warungs."
      },
      {
        nome: "Sate lilit",
        testo: "Skewers of minced fish or meat wrapped around bamboo or lemongrass."
      }
    ],
    attenzioni: [
      "Scooters: an international licence is needed, checks are frequent and fines high.",
      "Traffic between Canggu and Seminyak at peak hours: leave plenty of margin.",
      "Money changers and cocktails: use official exchanges and drink at reliable venues. Methanol in drinks is a risk flagged by authorities.",
      "Nusa Penida: book the boat ahead in high season and leave early.",
      "On arrival you pay the Bali tourist levy, IDR 150,000 per person since 2024: best paid online on the official Love Bali website (lovebali.baliprov.go.id).",
    ],
    gite: [
      {
        nome: "Nusa Lembongan and Nusa Ceningan",
        distanza: "about 30 minutes by fast boat from Sanur",
        come: "Fast boat from Sanur, several departures a day, to book the day before; on the island, scooter or pick-up with driver.",
        testo: "Quieter than Penida: mangroves to tour by boat, the yellow bridge to Ceningan, the Blue Lagoon and snorkelling trips. They can be done in a day, but a night makes everything calmer.",
      },
      {
        nome: "Gili Islands",
        distanza: "1.5-2 hours by fast boat from Padang Bai",
        come: "Fast boat from Padang Bai (about 350,000-475,000 IDR each way), pricier from Sanur; buy from the company, not from sellers at the port.",
        testo: "Three car-free islets off Lombok: party-going Trawangan, in-between Air, silent Meno, with turtles a few metres from the shore. A day trip makes no sense: you need at least two nights.",
      },
      {
        nome: "Menjangan Island",
        distanza: "about 3-4 hours by car from the south, then 30-40 minutes by boat",
        come: "By car to Labuan Lalang pier, in West Bali National Park, then a boat with a guide.",
        testo: "The best snorkelling in Bali: coral walls dropping steeply into clear water, in the national park of the west. Combine it with a night in Pemuteran or Munduk.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Bali?",
        risposta: "From 7 to 10 days for Ubud, the south and at least one of the nearby islands. With fewer than five you have to choose: Ubud and Uluwatu, giving up the east.",
      },
      {
        domanda: "Where should you stay in Bali?",
        risposta: "In two bases: Ubud for the rice fields and inland temples, Uluwatu or Sanur for the sea. Switching base saves hours of traffic every day.",
      },
      {
        domanda: "What do you need to enter Bali?",
        risposta: "A passport valid for six months, an online e-VOA (about 500,000 IDR, about 35 €), the All Indonesia Arrival Card and the 150,000 IDR Love Bali tourist levy, paid online at lovebali.baliprov.go.id.",
      },
      {
        domanda: "Scooter or driver in Bali?",
        risposta: "A scooter costs 60,000-100,000 IDR a day, but you need an international licence and real experience in traffic. A driver costs 300,000-600,000 IDR per trip and is the sensible choice for long outings.",
      },
      {
        domanda: "What is the best time to visit Bali?",
        risposta: "From April to October, in the dry season. In March, on Nyepi day, the island stops for 24 hours and even the airport closes.",
      },
      {
        domanda: "Can Nusa Penida be done as a day trip?",
        risposta: "Yes, but it is tiring: two crossings and slow roads. Better to sleep a night on the island and be at Kelingking with the first boat of the morning.",
      },
    ],
    esperienzeSlugs: ['giornata-nusa-penida'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'bali-nusa-komodo', 'bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: 'The Jatiluwih rice terraces in Bali, glistening with water to the horizon, seen from the drone',
    immagine: '/images/indonesia/jatiluwih-terrazze-riccardo.jpg',
  },
  {
    slug: 'sulawesi',
    paeseSlug: 'indonesia',
    ordine: 4,
    nome: 'Sulawesi',
    tipologia: ['cultura', 'natura', 'diving'],
    giorniConsigliati: '7-9 days between Tana Toraja and Bunaken',
    visitataPersonalmente: true,
    introduzione:
      "An island of unique shape, split between the funeral traditions and mountain villages of Tana Toraja and the reefs of Bunaken National Park, in the far north.",
    percheAndarci:
      "It offers two almost opposite experiences: a culture that treats death as a social event instead of a taboo, and one of the most beautiful marine parks in Southeast Asia.",
    cosaVedere: [
      "The tongkonan villages of Tana Toraja, with their boat-roofed houses",
      "The tombs carved into the rock and the \"tau tau,\" the wooden effigies of the dead",
      "The reef of Bunaken National Park, with vertical coral walls",
      "Makassar and the Dutch fort of Fort Rotterdam",
    ],
    cosaFare: [
      "Attend, with a local guide to explain the etiquette, a Toraja funeral ceremony if it happens to fall in the right period",
      "Trekking among the mountain villages around Rantepao",
      "Diving or snorkeling in Bunaken National Park (there is a dedicated experience page)",
    ],
    doveDormire:
      "Rantepao is the natural base for all of Tana Toraja, with simple guesthouses in the center; for Bunaken you choose between the dive resorts on the island itself, handier for dawn dives, and Manado on the mainland, cheaper but with a boat crossing every day.",
    doveMangiare:
      "Sulawesi has very spicy cooking, especially in the north around Manado: the dish to know is rica-rica, based on chili in quantities that are not negotiable. In Makassar you eat coto makassar, a beef soup served at breakfast, and grilled fish on the seafront in the evening. In Tana Toraja pork and buffalo appear, because the area is Christian: pa'piong, meat cooked inside a bamboo tube, often has to be ordered in advance.",
    comeArrivare:
      "There are two airports: Makassar (UPG), the hub for the south, and Manado (MDC), the gateway to the north. From Makassar to Rantepao the night bus leaves in the evening from the Daya terminal and arrives early in the morning after about 9-10 hours, for 200,000-350,000 IDR depending on class (about €11-19); the flight to Toraja airport takes about 55 minutes, but flights are few and can be cancelled. From Denpasar to Manado there is a direct flight of about 2.5 hours when the route is running, otherwise you connect via Makassar in 4-5 hours. From Manado airport to Tomohon it's 1-1.5 hours by car; for Bunaken the boat from the Manado pier takes 30-60 minutes.",
    comeSpostarsi: "Bus or car with driver for Tana Toraja; boat from the Manado pier for Bunaken. To organize everything I recommend Wale Adventure (wale-adventure.com), a local tour operator: kind and good at what they do, with private tours all over the island and a vanilla farm you can visit (I built their website).",
    periodoMigliore: "May-October",
    costi:
      "Tangkoko about 100,000 IDR a day for foreigners (about €5), more at weekends, guide extra; Bunaken about 50,000 IDR a day (about €3), often included in tours (2026). Budget: about €30-40 a day with guesthouses, warungs and buses. Mid-range: €70-110 with hotels in Rantepao and Manado, a driver and a guide. High: over €150 with a dive resort on Bunaken and private tours.",
    erroriDaEvitare: [
      "Attending funeral ceremonies without a guide to explain the etiquette: they are private events, open to visitors only with certain rules of respect",
    ],
    miaEsperienza:
      "Tana Toraja is the most different thing I saw in Indonesia, and it's not a postcard place. A Toraja funeral lasts days, gathers hundreds of people and involves the sacrifice of buffalo in front of everyone. It has nothing of the sobriety we're used to: it's an enormously expensive celebration, for which families save for years. As an outsider you can attend (you bring a gift, usually sugar or cigarettes, and stay where the guide indicates), but you have to be ready to see things that hit hard. Bunaken is the other side: coral walls dropping straight down for hundreds of meters, where you turn onto your back and there's no bottom below. Between the two, the one that changed something in me is Toraja.",
    luoghi: [
      {
        nome: "Rantepao and the tongkonan villages",
        testo: "The heart of Tana Toraja, with boat-roofed houses (tongkonan) and rice fields. Kete Kesu is one of the best-known villages, with houses, granaries and tombs.",
        come: "Toraja is far from Makassar: a long trip by night bus or car, or by domestic flight. The villages are visited with a guide.",
        quando: "In the dry season. Funeral dates are set by the families: the guide will know if one is taking place.",
        tempo: "2-3 days",
        lat: -2.97046,
        lng: 119.89872,
        consiglio: "Take a local guide who explains the symbols: without one you lose half the meaning.",
      },
      {
        nome: "Ke'te Kesu",
        testo: "The most visited tongkonan village in Tana Toraja: a row of boat-roofed houses facing the rice barns, with buffalo horns hung on the façades as a sign of rank. Behind the village, on the rock face, there are old tombs and hanging wooden coffins. It's the right place to understand how a Toraja village works before seeing the others.",
        come: "A few kilometres south-east of Rantepao, by car, scooter or with the guide.",
        quando: "Early morning, before the groups.",
        tempo: "1-1.5 hours",
        costo: "A small entrance ticket, paid at the gate.",
        lat: -2.99664,
        lng: 119.91026,
      },
      {
        nome: "Rock tombs",
        testo: "Tombs carved into the rock face and burial caves, such as the Lemo cemetery, set in a steep rock wall. At some sites the «tau tau», wooden effigies of the dead, watch from balconies.",
        come: "With the guide from Rantepao, by car or scooter.",
        quando: "In the morning.",
        tempo: "half a day",
        costo: "A small entrance ticket at each site, paid at the gate.",
        lat: -3.04979,
        lng: 119.89287,
        consiglio: "Bring a torch for the caves and respect the tombs: do not touch bones.",
      },
      {
        nome: "Londa",
        testo: "Burial caves at the foot of a rock wall, with tau tau lined up on a balcony carved above the entrance. Inside, in the dark, there are coffins, skulls and bones left by the families, often with offerings of cigarettes. It's one of the most striking burial sites in the area, and one of the closest to Rantepao.",
        come: "South of Rantepao, by car or scooter. At the entrance local guides with lamps take you into the caves.",
        quando: "In the morning.",
        tempo: "1 hour",
        costo: "A small entrance ticket; the guide with the lamp is paid separately.",
        lat: -3.01491,
        lng: 119.87589,
        consiglio: "Some passages are low and you walk bent over: closed shoes and no bulky bags.",
      },
      {
        nome: "A Toraja funeral",
        testo: "A funeral lasts several days, often draws hundreds of people and involves sacrificing buffalo. Families save for years. It's an extremely expensive celebration, not a sober mourning.",
        come: "Only with a guide who explains the etiquette. You bring a gift, usually sugar or cigarettes, and stay where the guide says.",
        quando: "Whenever the family holds it: dates aren't fixed and you find out locally, through the guide.",
        tempo: "half a day",
        consiglio: "Be prepared to see striking things. To organize the trip: Wale Adventure (wale-adventure.com), a local operator.",
      },
      {
        nome: "Batutumonga and the Sesean trails",
        testo: "A village on the slopes of Mount Sesean, north of Rantepao, with terraced rice fields dropping towards the valley and a view over the whole plain. From here you walk down for a few hours through fields, isolated tongkonan and small villages. It's the slowest and least touristy way to see Toraja culture.",
        come: "By car to the village, then on foot downhill with a guide arranged in Rantepao by the day.",
        quando: "In the dry season, starting in the morning.",
        tempo: "1 day",
        lat: -2.91039,
        lng: 119.88334,
        consiglio: "The trail runs along dykes and private land: after rain they're muddy, so wear shoes with grip.",
      },
      {
        nome: "Bunaken National Marine Park",
        testo: "Vertical coral walls and clear water. Well known for snorkelling and boat diving.",
        come: "By boat from Manado harbour. Packages of one or more nights.",
        quando: "In the months with the calmest sea: ask the dive operators.",
        tempo: "2-3 days",
        costo: "Park entry for foreigners about 50,000 IDR a day, about €3 (2026), often included in tours.",
        lat: 1.61667,
        lng: 124.75,
        consiglio: "Whoever arrives after Toraja experiences it as a counterweight: two different faces of the island.",
      },
      {
        nome: "Tangkoko Nature Reserve",
        testo: "A lowland forest below Mount Tangkoko, near Bitung, at the north-eastern tip of Sulawesi. You walk with a local guide looking for tarsiers, tiny primates with huge eyes, and crested black macaques, as well as hornbills and other birds. It's one of the few places in the world where you have a good chance of seeing tarsiers.",
        come: "About 2-2.5 hours by car from Tomohon, a little less from Manado. You enter from the village of Batuputih with a local guide, which is compulsory.",
        quando: "At dawn for the macaques and birds; at sunset for the tarsiers, when they come out of the hollow trees where they sleep.",
        tempo: "2-3 hours per walk",
        costo: "About 100,000 IDR a day for foreigners, about €5 (2026), more at weekends; the guide is paid separately.",
        lat: 1.51667,
        lng: 125.18333,
        consiglio: "We did it with Wale Adventure. With a night in Batuputih you can do both dawn and sunset without driving in the dark. Don't shine a torch or flash at the tarsiers.",
      },
      {
        nome: "Tomohon and Lake Linow",
        testo: "Tomohon is a town on the plateau between the Lokon and Mahawu volcanoes, cooler than the coast and surrounded by flower nurseries and vegetable gardens. A few kilometres south is Lake Linow, a volcanic lake whose water changes colour with the sulphur and the light, with fumaroles on its shores. It's the handiest base for northern Sulawesi.",
        come: "1-1.5 hours by car from Manado airport; the lake is a few minutes from the centre of Tomohon.",
        quando: "In the morning, before clouds build over the volcanoes.",
        tempo: "half a day",
        lat: 1.27078,
        lng: 124.82648,
        consiglio: "You'll need a sweater in the evening. Wale Adventure is based in Tomohon and runs tours across the north, including a visit to their vanilla farm.",
      },
      {
        nome: "Mount Mahawu",
        testo: "One of the volcanoes enclosing the Tomohon plateau, with a wide crater and a small lake at the bottom. You drive almost to the top and walk up to the rim, from where on clear days you can see Lokon, the plain and the sea towards Manado.",
        come: "By car from Tomohon, then a short walk up.",
        quando: "Early morning, when the sky is clearest.",
        tempo: "1.5-2 hours",
        lat: 1.358,
        lng: 124.858,
      },
      {
        nome: "Fort Rotterdam and Makassar",
        testo: "The fort on the harbour, originally a fortress of the Gowa kingdom and rebuilt by the Dutch VOC in the 17th century, with the La Galigo museum. The city is the starting point for Toraja.",
        come: "On foot or by taxi from the centre of Makassar.",
        quando: "In the morning.",
        tempo: "1-2 hours",
        lat: -5.13389,
        lng: 119.40552,
        consiglio: "Eat coto makassar in the morning and grilled fish on the waterfront in the evening.",
      },
      {
        nome: "Paotere harbour",
        testo: "Makassar's old harbour, where the pinisi are moored, the big wooden boats of the Bugis that still link the islands. Among cargo, fishermen and the fish market, it's the liveliest and least touristy side of the city.",
        come: "By taxi or Grab from the centre, a few kilometres north of Fort Rotterdam.",
        quando: "Early morning, when the boats are unloaded.",
        tempo: "1 hour",
        lat: -5.1097,
        lng: 119.42109,
      },
      {
        nome: "Losari waterfront",
        testo: "Makassar's seafront, a short walk from Fort Rotterdam, where the city gathers in the evening. Stalls and seafood restaurants grill the day's catch, and sunset over the strait is the best moment of the day in town.",
        come: "On foot from Fort Rotterdam.",
        quando: "At sunset and in the evening.",
        tempo: "1-2 hours",
        lat: -5.14388,
        lng: 119.40698,
      },
    ],
    programmi: [
      { titolo: "1 day: Makassar", tappe: [
        "Early morning: Paotere harbour and the pinisi",
        "Breakfast of coto makassar",
        "Fort Rotterdam and the La Galigo museum",
        "Sunset and grilled fish on the Losari waterfront",
        "Evening: night bus to Rantepao",
      ] },
      { titolo: "3 days: Tana Toraja", tappe: [
        "Day 1: Ke'te Kesu in the morning, then Londa and Lemo",
        "Day 2: a Toraja funeral with the guide, if one is taking place",
        "Day 3: Batutumonga and the walk down through the Sesean rice fields",
        "Evening: back to Makassar on the night bus",
      ] },
      { titolo: "3 days: the north, from Tomohon to Bunaken", tappe: [
        "Day 1: arrival in Manado and up to Tomohon, Lake Linow and Mahawu",
        "Day 2: Tangkoko, with the sunset walk for the tarsiers and a night in Batuputih",
        "Day 3: boat to Bunaken, snorkelling or diving on the walls",
      ] },
      { titolo: "7-9 days", tappe: [
        "Day 1: arrival in Makassar, Fort Rotterdam",
        "Day 2: transfer to Rantepao",
        "Day 3-4: tongkonan, rock tombs, a funeral if there is one",
        "Day 5: return to Makassar or flight to Manado",
        "Day 6-8: Bunaken",
        "Day 9: return",
      ] },
    ],
    zone: [
      {
        nome: "Rantepao",
        perChi: "anyone visiting Tana Toraja",
        testo: "A small town with guesthouses and restaurants, base for the villages.",
        fascia: "€20-60",
      },
      {
        nome: "Tomohon",
        perChi: "those exploring the north with Tangkoko and the volcanoes",
        testo: "Cool plateau between the volcanoes, with homestays and cheap small hotels. 1-1.5 hours from Manado.",
        fascia: "€10-40",
      },
      {
        nome: "Manado",
        perChi: "anyone going to Bunaken",
        testo: "A port city with hotels, from where boats leave for the island.",
        fascia: "€25-80",
      },
      {
        nome: "Bunaken Island",
        perChi: "anyone diving",
        testo: "Homestays and resorts on the island. Simple.",
        fascia: "€40-120",
      },
    ],
    sapori: [
      {
        nome: "Coto makassar",
        testo: "Beef soup, served for breakfast in Makassar."
      },
      {
        nome: "Pa'piong",
        testo: "Meat cooked in a bamboo tube, typical of Toraja. Often has to be ordered in advance."
      },
      {
        nome: "Rica-rica",
        testo: "A very spicy dish of the north, around Manado."
      },
      {
        nome: "Grilled fish",
        testo: "On the Makassar waterfront, in the evening."
      }
    ],
    attenzioni: [
      "Funeral ceremonies: do not show up without a guide; they are private events with rules of respect.",
      "Tana Toraja is Christian: pork appears, which elsewhere in Indonesia is rare.",
      "Roads to Toraja are long and winding; the night bus is uncomfortable.",
      "Diving packages at Bunaken cost more than average: compare operators."
    ],
    gite: [
      {
        nome: "Rammang-Rammang",
        distanza: "about 45 km from Makassar, 1-1.5 hours by car",
        come: "By car with a driver to the river jetty, then by boat among the karst towers.",
        testo: "Limestone towers rising from the rice fields and the river, in the Maros karst. You go up the river by boat to a small village among the cliffs and walk through the fields.",
      },
      {
        nome: "Bantimurung Waterfall",
        distanza: "about 45 km from Makassar, 1-1.5 hours by car",
        come: "By car; it combines easily with Rammang-Rammang on the same day.",
        testo: "A wide waterfall over rock steps in Bantimurung-Bulusaraung National Park, famous for its butterflies. At weekends it's full of families from Makassar: better on a weekday.",
      },
      {
        nome: "Lembeh Strait",
        distanza: "Bitung, 1-1.5 hours by car from Manado",
        come: "By car to Bitung, then by boat with a dive centre.",
        testo: "The channel between Sulawesi and Lembeh island is one of the world's best-known spots for muck diving: dark sand bottoms where you look for octopus, frogfish and nudibranchs. It's close to Tangkoko and pairs well with the reserve.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need for Sulawesi?",
        risposta: "At least a week for Tana Toraja and the north: Toraja alone takes three days plus two on the road to and from Makassar, and the north with Tomohon, Tangkoko and Bunaken another three or four.",
      },
      {
        domanda: "Is Tana Toraja or northern Sulawesi better?",
        risposta: "It depends on what you're after: Toraja is culture, with villages, tombs and funerals; the north is nature, with volcanoes, tarsiers and the Bunaken walls. Short on time, the north is easier because Manado has direct flights to Sorong and Bali.",
      },
      {
        domanda: "How do you get to Tana Toraja from Makassar?",
        risposta: "By night bus from the Daya terminal, about 9-10 hours for 200,000-350,000 IDR, or on the roughly 55-minute flight to Toraja airport, which has few flights and can be cancelled.",
      },
      {
        domanda: "Can you attend a Toraja funeral?",
        risposta: "Yes, with a local guide who knows the family and explains the etiquette. You bring a small gift, usually sugar or cigarettes, and stay where the guide says; ceremonies are more frequent in the dry season.",
      },
      {
        domanda: "When can you see tarsiers in Tangkoko?",
        risposta: "At sunset, when they come out of the hollow trees where they sleep. To see them calmly it's worth sleeping in Batuputih, at the reserve entrance, and doing the dawn walk for the macaques too.",
      },
      {
        domanda: "When is the best time for Sulawesi?",
        risposta: "From May to October, in the drier season. It's also when the big Toraja funerals are most frequent, especially in summer.",
      },
    ],
    esperienzeSlugs: ['diving-bunaken-national-park'],
    tripSlugs: ['indonesia-itinerario', 'bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: "A tongkonan with a ship's-prow roof in a Toraja village near Rantepao, Sulawesi",
    immagine: '/images/indonesia/sulawesi.jpg',
  },
  {
    slug: 'lombok-gili',
    paeseSlug: 'indonesia',
    ordine: 5,
    nome: 'Lombok and Gili',
    tipologia: ['mare', 'trekking', 'isole'],
    giorniConsigliati: '6-8 days, of which 2-3 for the Rinjani trek if included',
    visitataPersonalmente: true,
    introduzione:
      "Bali's less crowded neighbor: the three Gili islands without motor vehicles, the Rinjani volcano (the second highest in Indonesia) and southern beaches still little visited.",
    percheAndarci:
      "The pace is slower than in Bali: the Rinjani trek is the physical challenge, the Gilis the relaxed counterweight by the sea.",
    cosaVedere: [
      "The three Gili islands (Trawangan, Meno, Air), with no cars or scooters",
      "Mount Rinjani, with the crater lake Segara Anak",
      "The southern beaches: Kuta Lombok, Tanjung Aan, Selong Belanak",
    ],
    cosaFare: [
      "Snorkeling with sea turtles at the Gilis",
      "A multi-day trek on the Rinjani up to the crater lake (there is a dedicated experience page)",
      "Surfing at Kuta Lombok or, for advanced levels, at Desert Point",
    ],
    doveDormire:
      "Gili Trawangan for evening life, Gili Air for the balance between services and calm, Gili Meno for silence; in Lombok, Kuta is the southern base for surf and beaches, Senaru and Sembalun are the two villages from which the Rinjani treks start.",
    doveMangiare:
      "The dish of Lombok is ayam taliwang, grilled chicken in a chili sauce that shows no mercy. On the Gilis the evening market on Trawangan is a good, cheap place: the fish is displayed on ice, you choose it and wait for it to be grilled. In the seaside restaurants you pay mostly for the view.",
    comeArrivare: "Lombok International Airport (LOP) is at Praya, in the south of the island, with flights from Bali in just under an hour and from Jakarta. From the airport Kuta Lombok is about half an hour by car, Senaru about 3 hours. From Bali, fast boats leave from Padang Bai (1.5-2 hours, 350,000-475,000 IDR one way, about €18-25) or from the pricier Sanur, and land on the Gilis or at Bangsal; in rough seas sailings are cancelled or delayed. From Bangsal the public boat to the Gilis takes about 30 minutes and costs little. Buy tickets from the company or from well-known platforms, not from sellers at the port.",
    comeSpostarsi: "Only cidomo (horse-drawn carts) or bicycle on the Gilis, where motor vehicles are banned; car or scooter on the rest of Lombok.",
    periodoMigliore:
      "the dry season; the Rinjani closes in the rainy season, dates are on the park's official E-Rinjani app",
    costi: "Fast boat Padang Bai-Gili 350,000-475,000 IDR one way (about €18-25), bike hire on the Gilis about 50,000 IDR a day (about €2.50). Budget: about €25-35 a day with guesthouses, warungs and public boats. Mid-range: €60-90 with a bungalow with pool, restaurants and a couple of boat trips. High-end: over €150 with beachfront resorts and private transfers. The Rinjani trek is paid separately to the operator.",
    erroriDaEvitare: [
      "Underestimating the effort and altitude of the Rinjani trek",
      "Attempting the trek without a guide: it is mandatory by law",
    ],
    miaEsperienza:
      "The Rinjani is the hardest trek I did in Indonesia, and comparison with the others doesn't hold up. The climb to the crater rim is long and exposed, and ends on volcanic sand where for every three steps you lose one. We pitched camp on the rim, in the wind, and you sleep little and badly. Waking up above Lake Segara Anak with the clouds below, though, repays everything. The Gilis are perfect right afterward: no cars or scooters, you walk around in an hour and the turtles can be seen from the beach, with no boat or guide. Trawangan at night is more of a party than some expect, Meno is the opposite: better to know before booking.",
    luoghi: [
      {
        nome: "The Gili islands: Trawangan, Meno and Air",
        testo: "Three islands where cars and motorbikes are banned by local ordinance: you get around on foot, by bike or by horse cart (cidomo). Trawangan is the largest and the party island, Meno the quietest, Air somewhere in between. Turtles can be seen on the reefs close to shore.",
        come: "Fast boat from Bali (Padang Bai) or local boat from Bangsal, the port on Lombok's north coast. On the Gilis you walk or take a cidomo.",
        quando: "In the dry season. Meno is the quietest at any time.",
        tempo: "2-3 days",
        consiglio: "Choose the island by character: party on Trawangan, calm on Meno.",
        costo: "Fast boat from Padang Bai 350,000-475,000 IDR one way, about €18-25 (2026); the public boat between the three islands costs a few euros. Bike hire about 50,000 IDR a day, about €2.50.",
        lat: -8.35034,
        lng: 116.03626,
      },
      {
        nome: "Snorkeling with turtles",
        testo: "Green turtles graze on the reefs close to shore. No boat or guide needed.",
        come: "You enter the water from the beach, with rented mask and fins.",
        quando: "In the morning, with calmer water.",
        tempo: "1-2 hours",
        consiglio: "Do not touch or chase the turtles: keep your distance.",
        costo: "Mask and fins for hire for a few euros; the shared half-day snorkeling trip around the three islands is cheap and is booked the evening before.",
      },
      {
        nome: "Trek to Gunung Rinjani",
        testo: "Indonesia's second-highest volcano, 3,726 metres. From the crater rim you see Lake Segara Anak, inside the caldera, at about 2,000 metres. The route is long and exposed and ends on volcanic sand.",
        come: "From Senaru or Sembalun, only with a licensed operator and a guide. Tickets are booked on the park's official E-Rinjani app (Android and iOS); the erinjani.id website now redirects to a private agency, not to the park. Multi-day packages with porters and tents.",
        quando: "In the dry season. With rain, bad weather or after accidents the park may close the trails: check the E-Rinjani app or the park's official channels before booking.",
        tempo: "several days",
        consiglio: "The camp on the rim is windy and you sleep little: waking above the clouds with the lake below pays off everything.",
        orari: "Closed every year from January to the end of March, and sometimes at other times after accidents or bad weather.",
        lat: -8.41441,
        lng: 116.45977,
      },
      {
        nome: "Senaru waterfalls",
        testo: "Sendang Gile and Tiu Kelep are two waterfalls in the forest at the foot of Rinjani, reached by a short walk. A great rest day before or after the trek.",
        come: "On foot from Senaru, with a guide.",
        quando: "In the morning.",
        tempo: "3 hours",
        consiglio: "Wear shoes that can get wet.",
        lat: -8.30556,
        lng: 116.40828,
      },
      {
        nome: "Southern beaches: Kuta, Tanjung Aan, Selong Belanak",
        testo: "Bays of pale sand and surf waves, much less crowded than Bali.",
        come: "By scooter or car from Kuta Lombok, which is close to the airport.",
        quando: "In the morning or at sunset.",
        tempo: "1 day",
        consiglio: "Selong Belanak suits beginner surfers.",
        lat: -8.91667,
        lng: 116.28333,
      },
      {
        nome: "Gili Trawangan night market",
        testo: "Every evening, near Trawangan's harbour, the stalls lay out fish, prawns and squid on ice: you choose, pay by weight and they grill it on the spot. Next to them there are satay, nasi campur and sweets. It is one of the cheapest ways to eat on the Gilis.",
        come: "On foot from the harbour, on the main road along the east coast.",
        quando: "From sunset; the best stalls run out of fish early.",
        tempo: "1 hour",
        consiglio: "Ask the price per kilo before choosing the fish.",
      },
      {
        nome: "Nest, the underwater statues of Gili Meno",
        testo: "A circle of life-size human figures sculpted by Jason deCaires Taylor and laid on the seabed a few metres deep, off Gili Meno. They can be seen with just mask and snorkel, and coral is colonising the sculptures.",
        come: "Swimming from Gili Meno's west beach, or as a stop on the snorkeling trips around the three islands.",
        quando: "With calm water and low tide, in the morning.",
        tempo: "1 hour",
        consiglio: "There is current: stay close to the boat or the buoy and don't touch the statues.",
      },
      {
        nome: "Bukit Merese",
        testo: "A grassy hill east of Kuta Lombok, overlooking the bays of Tanjung Aan and Gerupuk. It is the best-known viewpoint in the south, and it fills up at sunset.",
        come: "By scooter or car from Kuta, about 15 minutes; then a short walk up.",
        quando: "At sunset, or at dawn to have it almost empty.",
        tempo: "1 hour",
        lat: -8.91423,
        lng: 116.31908,
        consiglio: "Combine it with a swim at Tanjung Aan, just below.",
      },
      {
        nome: "Mawun Beach",
        testo: "A horseshoe bay between two headlands west of Kuta, with pale sand and water more sheltered than the nearby beaches. There are a few warungs and umbrellas for hire.",
        come: "By scooter or car from Kuta, about 20 minutes on the coast road towards Selong Belanak.",
        quando: "In the morning, before the wind.",
        tempo: "Half a day",
        lat: -8.90221,
        lng: 116.23234,
        consiglio: "It fits well with Selong Belanak on the same loop.",
      },
      {
        nome: "Sade Sasak village",
        testo: "A traditional village of the Sasak people, with bamboo and thatch houses and hat-shaped rice barns, the emblem of Lombok. Families still live here, weaving and selling fabrics. It is very touristy, but it helps understand the island's culture.",
        come: "On the road between the airport and Kuta. You visit with a village guide, who is given a donation.",
        quando: "In the morning or late afternoon.",
        tempo: "1 hour",
        lat: -8.63854,
        lng: 116.30769,
        consiglio: "There is no obligation to buy the fabrics: saying no is normal.",
      },
      {
        nome: "Sukarara",
        testo: "The village of songket weaving, fabrics with gold and silver threads made by hand on wooden looms. In the workshops you can watch the weaving and sometimes try it.",
        come: "By car, in the centre of the island, often on the same loop as Sade.",
        quando: "During the day, when they work at the looms.",
        tempo: "45 minutes",
        lat: -8.69408,
        lng: 116.22522,
        consiglio: "Fabric prices are negotiable.",
      },
      {
        nome: "Pink Beach (Pantai Tangsi)",
        testo: "A beach on the south-eastern tip of Lombok, where the sand turns pink from fragments of red coral. It is far from everything and less visited than the Kuta beaches.",
        come: "By car from Kuta, about 1.5-2 hours, partly on dirt roads; or by boat from the nearby bays.",
        quando: "The pink shows best with the sun high.",
        tempo: "Full day with the journey",
        lat: -8.85931,
        lng: 116.58086,
        consiglio: "Bring water and food: facilities are few.",
      },
      {
        nome: "Benang Kelambu and Benang Stokel waterfalls",
        testo: "Two waterfalls in the forest of the island's centre, on the southern slopes of Rinjani. Benang Kelambu falls in thin veils down a wall covered in vegetation, Benang Stokel has two higher drops.",
        come: "By car from Kuta or Mataram, about 1.5 hours; from the car park a footpath, with local guides available.",
        quando: "There is more water in the rainy season; fewer people in the morning.",
        tempo: "Half a day",
        lat: -8.53277,
        lng: 116.33701,
        consiglio: "Shoes that can get wet: the path is slippery.",
      },
      {
        nome: "Taman Narmada",
        testo: "A water garden built in the eighteenth century by the Balinese kings who ruled Lombok, with pools, pavilions and a temple. According to tradition the large pool reproduces Rinjani's crater lake.",
        come: "East of Mataram, by car or taxi.",
        quando: "On weekdays, when fewer local families visit.",
        tempo: "1 hour",
        lat: -8.59602,
        lng: 116.20533,
      },
      {
        nome: "Pura Lingsar",
        testo: "An early eighteenth-century complex shared by Balinese Hindus and Sasak Muslims of the Wetu Telu tradition. Every year, at the Perang Topat festival, the two communities throw rice parcels at each other.",
        come: "A few kilometres north-east of Mataram, combined with Narmada.",
        quando: "During the day; sarong and sash, usually lent at the entrance.",
        tempo: "45 minutes",
        lat: -8.57581,
        lng: 116.18014,
      },
    ],
    programmi: [
      {
        titolo: "2 days: Gili",
        tappe: [
          "Day 1: boat from Bangsal or Bali, Gili Trawangan by bike, sunset on the west coast and dinner at the night market",
          "Day 2: snorkeling trip around the three islands with the turtles and Nest at Gili Meno, afternoon on Gili Air",
        ],
      },
      {
        titolo: "3 days: southern Lombok",
        tappe: [
          "Day 1: Sade and Sukarara from the airport, evening in Kuta",
          "Day 2: Mawun and Selong Belanak, sunset at Bukit Merese",
          "Day 3: Tanjung Aan in the morning, then Pink Beach or the Benang Kelambu waterfalls",
        ],
      },
      {
        titolo: "6-8 days",
        tappe: [
          "Day 1: arrival in Lombok, Senaru",
          "Day 2-4: Rinjani trek",
          "Day 5: rest, Senaru waterfalls",
          "Day 6-7: Gili, snorkeling with turtles",
          "Day 8: departure",
        ],
      },
      {
        titolo: "Without Rinjani",
        tappe: [
          "Day 1-2: Kuta Lombok and the southern beaches",
          "Day 3-5: Gili",
          "Day 6: return",
        ],
      },
    ],
    zone: [
      {
        nome: "Gili Trawangan",
        perChi: "anyone who wants nightlife",
        testo: "Bars, restaurants and venues. Louder than many expect.",
        fascia: "€25-120",
      },
      {
        nome: "Gili Meno",
        perChi: "anyone seeking calm",
        testo: "The quietest, with few services and lovely sunsets.",
        fascia: "€30-120",
      },
      {
        nome: "Senaru or Sembalun",
        perChi: "anyone doing Rinjani",
        testo: "Villages on the volcano's slopes with simple guesthouses.",
      },
      {
        nome: "Kuta Lombok",
        perChi: "anyone seeking beaches and surf",
        testo: "A quiet town with cheap lodging.",
        fascia: "€30-130",
      },
    ],
    sapori: [
      {
        nome: "Ayam taliwang",
        testo: "Grilled chicken in a chilli sauce that takes no prisoners, Lombok's best-known dish."
      },
      {
        nome: "Grilled fish at Trawangan night market",
        testo: "Fish is displayed on ice, you choose and wait for it to be grilled. One of the cheapest ways to eat on the Gilis."
      },
      {
        nome: "Plecing kangkung",
        testo: "Water spinach with spicy tomato sauce, a typical Lombok side dish."
      },
      {
        nome: "Sate rembiga",
        testo: "Spicy beef skewers, typical of Lombok."
      }
    ],
    attenzioni: [
      "Rinjani: a guide, a licensed operator and booking on the official E-Rinjani app are compulsory. Underestimating effort and altitude is the most common mistake.",
      "Trawangan in the evening is more party than it looks; Meno is the opposite. Choose one by character.",
      "Crossings from Bali: the sea can be rough; avoid booking overly tight transfers.",
      "On the Gilis, currents and boats: do not swim far from the shore."
    ],
    gite: [
      {
        nome: "South-western Gilis: Nanggu, Sudak and Kedis",
        distanza: "about 2 hours by car from Kuta or Mataram, then 15-20 minutes by boat",
        come: "Car to the harbour at Tawun or Sekotong, then a boat hired on the spot to tour the islands.",
        testo: "Small islets with almost no facilities, shallow water and reef close to shore. They are the Gilis without the crowds of the three famous ones.",
      },
      {
        nome: "Gili Kondo",
        distanza: "about 2.5 hours by car from Kuta or Senaru, then a short boat ride",
        come: "Car to the north-east coast (Sambelia), boat to hire at the jetty.",
        testo: "A white-sand islet off the east coast, visited mostly by local tourists, with snorkeling on the surrounding reef.",
      },
      {
        nome: "Tetebatu",
        distanza: "about 1.5 hours by car from Kuta or Mataram",
        come: "Car or scooter; on site, walks through the rice fields with a village guide.",
        testo: "A farming village on the southern slopes of Rinjani, with terraced rice fields, plantations and forest waterfalls. Cooler air and a slow pace.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need for Lombok and the Gilis?",
        risposta: "For the Gilis alone 2-3 days are enough. With southern Lombok it becomes 5-6, and the Rinjani trek adds 2-3 days plus one of rest.",
      },
      {
        domanda: "Which Gili island should I choose?",
        risposta: "Trawangan for nightlife, Gili Air for a balance of services and calm, Gili Meno for silence. You move between them in a few minutes on the public boat.",
      },
      {
        domanda: "Do you need a guide for the Rinjani trek?",
        risposta: "Yes, it is required by law, with a licensed operator and a booking on the park's official E-Rinjani app.",
      },
      {
        domanda: "When is Rinjani closed?",
        risposta: "Every year from January to the end of March, in the rainy season. It can also close at other times after accidents or bad weather: check the E-Rinjani app before booking.",
      },
      {
        domanda: "How do you get from Bali to the Gilis?",
        risposta: "By fast boat from Padang Bai (1.5-2 hours, 350,000-475,000 IDR one way) or from the pricier Sanur. In rough seas sailings are cancelled: better not to book a flight the same day.",
      },
      {
        domanda: "Are there ATMs on the Gilis?",
        risposta: "A few, mostly on Trawangan, and they don't always work. Arrive with enough cash, especially for Gili Meno and Gili Air.",
      },
    ],
    esperienzeSlugs: ['trekking-gunung-rinjani'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili', 'indonesia-isola-per-isola'],
    imageAlt: 'A white sand islet off Lombok, with outrigger boats moored and the hills behind',
    immagine: '/images/indonesia/gili-isolotto-barche-riccardo.jpg',
  },
  {
    slug: 'komodo',
    paeseSlug: 'indonesia',
    ordine: 6,
    nome: 'Komodo',
    tipologia: ['natura', 'avventura', 'diving'],
    giorniConsigliati: '3-4 days, often on a boat tour from Labuan Bajo',
    visitataPersonalmente: true,
    introduzione:
      "The national park that gives its name to the Komodo dragon, the largest lizard in the world, in an archipelago of islands beautiful above and below sea level.",
    percheAndarci:
      "It's where people go to see Komodo dragons in their natural habitat, plus much-photographed panoramas and seabeds.",
    cosaVedere: [
      "The Komodo dragons on Komodo island and on Rinca island",
      "Pink Beach, with sand tinted pink by coral fragments",
      "Padar Island, the viewpoint with the three crescent bays",
      "The snorkeling spots of Kanawa and Kelor",
    ],
    cosaFare: [
      "Guided trek to see the Komodo dragons (there is a dedicated experience page)",
      "Climb to Padar Island at dawn for the iconic panorama",
      "Snorkeling or diving in the marine park",
      "Boat tour (including multi-day liveaboards) from Labuan Bajo among the islands of the park",
    ],
    doveDormire:
      "Labuan Bajo is everyone's base, with a wide choice of hostels and resorts on the harbor. Otherwise you sleep on board, on boat tours of two or more nights, which are also the only way to be at Padar at dawn.",
    doveMangiare:
      "In Labuan Bajo you eat fish, and well: the evening market on the waterfront displays the day's catch and grills it on the spot, at prices much lower than the restaurants with a harbor view a bit farther along. On board the crew cooks: simple dishes of rice, fish and vegetables, but good.",
    comeArrivare: "Fly to Labuan Bajo (Komodo airport, LBJ), with direct flights from Bali in about 1 hour 15 minutes and from Jakarta; flights from Lombok are less frequent. The airport is a few minutes by car from the harbour and the hotels in town. Boats to the park leave Labuan Bajo harbour in the morning; to be at Padar at dawn you leave before 5 or sleep on board. Coming from the east, you drive the Trans-Flores road with a car and driver, about 9-10 hours from Bajawa with stops.",
    comeSpostarsi: "Only by boat: organized tours of one or more days, or liveaboards.",
    periodoMigliore: "April-December, dry season with calmer seas",
    costi: "Park entry 250,000 IDR per person for foreigners (about €13), usually handled by the operator; diving tax 25,000 IDR per activity. Budget: about €40-60 a day with a guesthouse, the night market and a shared day tour. Mid-range: €100-150 with a hotel in town and a speedboat, or two nights on a shared boat. High-end: over €250 with a private liveaboard or a beach resort.",
    erroriDaEvitare: [
      "Approaching the dragons without a ranger or a guide: they are dangerous predators",
      "Underestimating the rough sea and strong currents between the islands",
    ],
    miaEsperienza:
      "The dragons almost always stay still. They are huge animals that spend the day in the shade and move little, and anyone expecting a documentary scene is thrown off: what impresses is the size and the fact that the ranger holds only a forked stick. Rinca is wilder and less crowded than Komodo island, and it's worth asking for it specifically. The best moment is Padar at dawn: a short, steep climb along a ridge, and below, three bays with three different sands all together. It has to be done very early, because from eight the line on the path is continuous and the heat makes itself felt.",
    luoghi: [
      {
        nome: "Rinca Island",
        testo: "It has plenty of dragons and is wilder and less crowded than Komodo island. The dragons almost always lie still in the shade, but they are dangerous predators.",
        come: "By boat from Labuan Bajo: the time depends on the type of boat. You walk the trails with a ranger, who carries only a forked stick.",
        quando: "In the morning, in the cooler hours.",
        tempo: "half a day",
        url: "https://www.komodonationalpark.org/",
        consiglio: "Ask explicitly for Rinca in the tour: it is wilder than Komodo island.",
        costo: "Park entry 250,000 IDR per person for foreigners, about €13 (2026), usually included or handled by the tour operator; a ranger is mandatory.",
        lat: -8.65927,
        lng: 119.7256,
      },
      {
        nome: "Komodo Island and Loh Liang",
        testo: "The island that gives the park its name. Short trails start from Loh Liang and lead to areas where dragons can be seen.",
        come: "By boat from Labuan Bajo, farther than Rinca. With a compulsory ranger.",
        quando: "In the morning.",
        tempo: "half a day",
        url: "https://www.komodonationalpark.org/",
        consiglio: "Never approach without the ranger and never leave the trail.",
        costo: "Park entry 250,000 IDR per person for foreigners, about €13 (2026); a ranger is mandatory.",
        lat: -8.56831,
        lng: 119.5069,
      },
      {
        nome: "Padar Island",
        testo: "A short steep climb on a ridge, and below three bays with sands of different colors: the park's most famous viewpoint.",
        come: "By boat from Labuan Bajo with a tour, often as the first stop of the morning.",
        quando: "At dawn, very early: soon after, the groups arrive, the queue on the trail is constant and the heat kicks in.",
        tempo: "1.5 hours",
        consiglio: "Going up at first light is the only way to have the view without the queue.",
        costo: "Included in the park ticket. Since 2026 there is a daily visitor cap and Padar slots are booked: confirm them with the operator.",
        lat: -8.6627,
        lng: 119.55574,
        url: "https://www.komodonationalpark.org/",
      },
      {
        nome: "Pink Beach",
        testo: "A pinkish beach from coral fragments mixed with the sand, with excellent snorkeling.",
        come: "By boat as a stop on the tour.",
        quando: "Morning or early afternoon.",
        tempo: "1-2 hours",
        consiglio: "Snorkel: the seabed is more interesting than the beach.",
        lat: -8.60137,
        lng: 119.52052,
      },
      {
        nome: "Kanawa, Kelor and Manta Point",
        testo: "Islands and snorkeling spots with coral reef and, in some places, manta rays.",
        come: "By boat on one-day or multi-day tours.",
        quando: "In the months with the calmest sea; ask the crew.",
        tempo: "half a day",
        consiglio: "Strong currents between islands: listen to the crew's instructions.",
        costo: "For diving the park tax is separate: 25,000 IDR per activity, about €1.30 (2026).",
        lat: -8.4948,
        lng: 119.75884,
      },
      {
        nome: "Taka Makassar",
        testo: "A strip of white sand that surfaces at low tide in the middle of the sea, near Manta Point. The water around is shallow and turquoise, and boats stop for a swim and snorkeling between stops.",
        come: "By boat, as a stop on one-day or multi-day tours.",
        quando: "At low tide, when the sand is exposed; the crew decides the time.",
        tempo: "1 hour",
        consiglio: "Sunscreen and a T-shirt: there is no shade.",
      },
      {
        nome: "Gili Lawa Darat",
        testo: "A hilly island in the north of the park, with a grassy ridge overlooking the bays and islands around. It is one of the finest viewpoint climbs after Padar, and usually less crowded.",
        come: "By boat, on multi-day tours that cover the north of the park; a steep walk up a footpath.",
        quando: "At sunset or dawn, sleeping on board.",
        tempo: "1-1.5 hours",
        lat: -8.46933,
        lng: 119.55799,
        consiglio: "Closed shoes: the ground is dry and slippery.",
      },
      {
        nome: "Kalong Island",
        testo: "A mangrove island from which thousands of flying foxes, the big fruit bats, pour out at sunset and cross the sky towards the nearby islands. You don't land: you watch from the anchored boat.",
        come: "By boat, on tours with a night on board, which anchor here in the evening.",
        quando: "At sunset.",
        tempo: "1 hour",
        consiglio: "It is one of the reasons to choose at least one night on a boat.",
      },
      {
        nome: "Batu Cermin cave",
        testo: "A limestone cave a few kilometres from the centre of Labuan Bajo. The name, «mirror stone», comes from the light that at certain hours enters through a crack and reflects on the walls. Inside there are marine fossils in the rock.",
        come: "By scooter or taxi from the centre; visited with a local guide and a helmet.",
        quando: "Around midday, when the light enters the cave.",
        tempo: "1 hour",
        lat: -8.48374,
        lng: 119.89796,
        consiglio: "A good half day on land before or after the boat tours.",
      },
      {
        nome: "Kampung Ujung night market",
        testo: "On Labuan Bajo's seafront, in the evening, stalls display the catch of the day and grill it on the spot. You eat at outdoor tables, at prices far lower than the restaurants overlooking the harbour.",
        come: "On foot from the centre, on the seafront.",
        quando: "From sunset.",
        tempo: "1 hour",
        consiglio: "Agree the price of the fish before it goes on the grill.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Dawn: Padar",
          "Morning: Pink Beach and snorkeling",
          "Lunch on board",
          "Afternoon: Rinca or Komodo with the rangers",
          "Sunset: return to Labuan Bajo",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: day tour with Padar at dawn, Pink Beach and Komodo; evening at the Kampung Ujung market",
          "Day 2: snorkeling at Kanawa and Kelor in the morning, Batu Cermin cave in the afternoon",
        ],
      },
      {
        titolo: "3 days (boat)",
        tappe: [
          "Day 1: Kanawa, Rinca, night on board",
          "Day 2: Padar at dawn, Pink Beach, Manta Point",
          "Day 3: Komodo island and return",
        ],
      },
    ],
    zone: [
      {
        nome: "Labuan Bajo",
        perChi: "anyone doing day tours",
        testo: "A port with hotels of every range, seaside restaurants and the evening fish market. Base for all tours.",
      },
      {
        nome: "Beaches outside town (Waecicu, Pede)",
        perChi: "anyone wanting a beach resort",
        testo: "Resorts and hotels with pools on the coast north and south of the centre. Quieter, but you need a taxi for the harbour and restaurants.",
        fascia: "€100-300",
      },
      {
        nome: "On board (liveaboard)",
        perChi: "anyone wanting to see more",
        testo: "Sleeping on the boat lets you be at Padar at dawn, before the groups. Costs more.",
      },
    ],
    sapori: [
      {
        nome: "Grilled fish from the evening market",
        testo: "The day's catch displayed on Labuan Bajo's waterfront and grilled to order. Costs far less than the restaurants with a harbor view."
      },
      {
        nome: "Boat cooking",
        testo: "On board the crew cooks: rice, fish and vegetables, simple but good."
      },
      {
        nome: "Flores coffee",
        testo: "Home-roasted and served unfiltered."
      }
    ],
    attenzioni: [
      "Approach the dragons only with a ranger: they are dangerous predators.",
      "Rough sea and strong currents between islands: listen to the crew and do not swim alone.",
      "At Padar the queue on the trail builds right after dawn: go up at first light.",
      "Check the official park fees and permits before booking."
    ],
    gite: [
      {
        nome: "Cunca Wulang waterfall",
        distanza: "about 1 hour by car from Labuan Bajo",
        come: "Car with driver or scooter, then a forest walk with a village guide.",
        testo: "A waterfall in a rock canyon with natural pools for swimming. It is the best land trip around Labuan Bajo.",
      },
      {
        nome: "Wae Rebo",
        distanza: "2 days: road to Denge, then a 2.5-3 hour walk up",
        come: "Car with driver to Denge, then the walk up; you sleep in the village houses.",
        testo: "A Manggarai village with traditional conical houses, in a valley among the mountains. Not a day trip, but one of the finest experiences on Flores.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need for Komodo?",
        risposta: "A day tour covers Padar, Pink Beach and the dragons. With 2-3 days, ideally with a night on a boat, you add snorkeling, Manta Point and Padar at dawn without rushing.",
      },
      {
        domanda: "Day tour or a boat with a night on board?",
        risposta: "The day tour is cheaper but rushed. Sleeping on board lets you climb Padar at dawn, before the groups, and see Kalong's flying foxes at sunset.",
      },
      {
        domanda: "How much is the Komodo National Park entry fee?",
        risposta: "For foreigners 250,000 IDR per person, about €13, usually handled by the operator; diving has a separate tax. Fees have changed several times: confirm them before booking.",
      },
      {
        domanda: "Is there a visitor limit at Komodo?",
        risposta: "Since 1 April 2026 the park admits at most 1,000 visitors a day, with the tightest limits on Padar, Rinca and Komodo. In high season book the tour well ahead.",
      },
      {
        domanda: "Is it dangerous to see Komodo dragons?",
        risposta: "They are predators, but visits are only with a ranger and on the trails. The risk is low if you follow instructions and stay with the group.",
      },
      {
        domanda: "When is the best time for Komodo?",
        risposta: "From April to December, in the dry season, when the sea is calmer. Mantas are never guaranteed.",
      },
    ],
    esperienzeSlugs: ['trekking-draghi-komodo'],
    tripSlugs: ['indonesia-itinerario', 'bali-nusa-komodo', 'indonesia-isola-per-isola'],
    imageAlt: "The hills and bays of Padar island seen from the viewpoint, Komodo National Park",
    immagine: '/images/indonesia/komodo.jpg',
  },
  {
    slug: 'flores',
    paeseSlug: 'indonesia',
    ordine: 7,
    nome: 'Flores',
    tipologia: ['natura', 'cultura', 'vulcani'],
    giorniConsigliati: '5-7 days, often combined with Komodo via Labuan Bajo',
    visitataPersonalmente: true,
    introduzione:
      "The wildest and least developed of the islands touched by the trip, famous for the three color-changing volcanic lakes of Kelimutu and for traditional villages suspended among the mountains.",
    percheAndarci:
      "It's a more rural, less touristy side of Indonesia, with volcanic landscapes and a village culture still alive.",
    cosaVedere: [
      "Kelimutu, with its three crater lakes of different colors",
      "The traditional village of Bena, at the foot of the Inerie volcano",
      "Wae Rebo, the remote village reachable only on foot",
      "Riung, starting point for the 17 islands tour",
    ],
    cosaFare: [
      "Dawn at Kelimutu to see the lakes in the best light (there is a dedicated experience page)",
      "A 1-2 day trek to the village of Wae Rebo",
      "Tour of the traditional villages around Bajawa, including Bena",
    ],
    doveDormire:
      "Moni is the village from which you set off at night for Kelimutu, with basic guesthouses; Bajawa serves as a base for the traditional villages, Labuan Bajo for the west and the Komodo tours. At Wae Rebo you sleep in the village's communal house, all together on the floor: it's not a hotel and shouldn't be treated like one.",
    doveMangiare:
      "The offer is minimal, and it's part of the trip: outside Labuan Bajo you eat in village warungs, almost always rice, fish or chicken and stir-fried vegetables, with few alternatives. It's worth trying se'i, the smoked meat typical of the eastern islands, and everywhere you find Flores coffee, home-roasted and served unfiltered. In the guesthouses of Moni dinner is ordered in the afternoon, because they cook it specially.",
    comeArrivare:
      "For the west, fly to Labuan Bajo (LBJ), with direct flights from Bali, just over an hour, and from Jakarta; it's also the port for Komodo National Park. For the east, fly to Ende or Maumere, with few flights and changing schedules: book them in advance. Then you cross the island on the Trans-Flores with a car and driver by the day: Labuan Bajo-Bajawa about 9-10 hours with stops, Bajawa-Moni 6-7 hours, Moni-Ende 1.5-2 hours, Moni-Maumere 3-4 hours.",
    comeSpostarsi:
      "The Trans-Flores, the road crossing the island from west to east: scenic but winding and slower than it seems on the map.",
    periodoMigliore: "May-October",
    costi: "Entry: Kelimutu about IDR 150,000 for foreigners on weekdays, more at weekends; Bena and the villages by donation. Budget: about €20-30 a day with guesthouses and warungs, but the car and driver on the Trans-Flores weighs on the budget and is best shared. Mid-range: €50-80 with a shared driver and better hotels in Labuan Bajo. High: over €120 with a private driver, ecolodges and resorts in Labuan Bajo. Always carry cash: outside Labuan Bajo and Ende ATMs are rare.",
    erroriDaEvitare: [
      "Underestimating travel times on the Trans-Flores: straight-line distances are deceptive",
    ],
    miaEsperienza:
      "Flores is the part of Indonesia that has stayed behind, and that is exactly what makes it the most interesting for me. The Trans-Flores looks short on the map, but it's really an endless succession of curves: two hundred kilometers is a whole day, and anyone short on time would do better to give it up. Kelimutu at dawn is worth the three a.m. alarm anyway. The colors of the three lakes change over time and there's no way to know beforehand what you'll find, and that's the point of the place. Wae Rebo is the strongest thing on the island: three hours of climbing in the forest, then seven conical houses in a clearing among the mountains and nothing else. It's an inhabited village, and you stay by its rules.",
    luoghi: [
      {
        nome: "Kelimutu",
        testo: "Three crater lakes on the same mountain, of different colours that change over time with volcanic gases and rain. There's no way of knowing in advance which colours you'll find, and that's the point of the place.",
        come: "From the village of Moni by motorbike or car to the car park, about 12 km and half an hour, then around twenty minutes on foot on an easy path with steps to the highest viewpoint. Alarm before dawn.",
        quando: "At dawn, before the mist rises. Clouds can cover everything for the first hour and then suddenly clear.",
        tempo: "3 hours",
        costo: "Foreigners about IDR 150,000 on weekdays, around €9 (2025), more at weekends; in cash.",
        lat: -8.76611,
        lng: 121.81417,
        url: "https://ayoketamannasional.kehutanan.go.id/en/taman-nasional/kelimutu",
        consiglio: "They deserve the pre-dawn wake-up: the dawn light on the lakes is the best part.",
      },
      {
        nome: "Wae Rebo",
        testo: "A remote village with seven conical houses (mbaru niang) arranged in a circle around the altar, in a clearing among the mountains, at about 1,200 metres. It's inhabited and you follow its rules, starting with the welcome ritual. One of the most powerful things on the island.",
        come: "From the Denge and Dintor area, about 4.5 km of forest trail: 2.5-3 hours uphill (2022). You sleep in the village guest houses, dormitory-style. It's arranged through the village committee or an operator.",
        quando: "In the dry season; when it rains the trail is muddy.",
        tempo: "2 days (1 night)",
        lat: -8.76932,
        lng: 120.28398,
        consiglio: "Bring a modest gift for the community and respect the village rules.",
      },
      {
        nome: "Bena",
        testo: "A traditional village at the foot of the Inerie volcano, with rows of thatched houses and megalithic stone monuments. The Ngada people still live here.",
        come: "From Bajawa by car, about twenty kilometres. At the entrance you sign the register and leave a donation.",
        quando: "In the morning or early afternoon.",
        tempo: "1-2 hours",
        costo: "Registered donation at the entrance.",
        lat: -8.87763,
        lng: 120.98583,
        consiglio: "Leave a small offering and ask before photographing people.",
      },
      {
        nome: "Cancar and Ruteng spiderweb rice fields",
        testo: "Rice fields laid out in a radial pattern like a spiderweb, following the ancient land division. The best viewpoint is on a hill near the village.",
        come: "From Ruteng by car; it's a natural stop on the Trans-Flores between Labuan Bajo and Bajawa.",
        quando: "In the morning or at sunset.",
        tempo: "1 hour",
        consiglio: "Combine with a stop in Ruteng, a cool highland town, and its coffee.",
      },
      {
        nome: "Riung and the 17 islands",
        testo: "An archipelago of small islands with beaches and snorkeling, protected as a marine park. You tour it by boat, stopping on white beaches and at an islet where colonies of giant fruit bats roost.",
        come: "From Bajawa or Ruteng to Riung by car, then boat. Half-day or day tours.",
        quando: "In the dry season, when the sea is calmer.",
        tempo: "half a day",
        consiglio: "Come with the right time: distances on the Trans-Flores are deceptive.",
      },
      {
        nome: "Sukarno's house in Ende",
        testo: "The house where Sukarno was exiled in the 1930s, before becoming Indonesia's first president. Inside are furniture and objects from the time; in the nearby garden, under a breadfruit tree, he is said to have conceived the principles of Pancasila.",
        come: "In central Ende, by car or on foot.",
        quando: "On weekdays, in the morning.",
        tempo: "45 minutes",
        costo: "Donation or a small ticket.",
        orari: "Monday to Friday from 9am, office hours; closed on Saturdays and Sundays.",
        lat: -8.84066,
        lng: 121.64455,
      },
      {
        nome: "Penggajawa Beach",
        testo: "A south-coast beach covered in blue and green pebbles, which locals collect, sort by colour and sell by the sack. It's a half-hour stop on the road between Bajawa and Ende.",
        come: "On the Trans-Flores, just before Ende coming from Bajawa.",
        quando: "During the day, on the transfer.",
        tempo: "30 minutes",
        lat: -8.79458,
        lng: 121.49271,
        consiglio: "The pebbles are the locals' livelihood: don't take any away.",
      },
      {
        nome: "Murundao Waterfall",
        testo: "A small waterfall with a pool to swim in, just outside the village of Moni. It's the easiest way to warm up after the cold of dawn at Kelimutu.",
        come: "On foot from Moni, a few minutes from the main road.",
        quando: "Late morning, on the way back from Kelimutu.",
        tempo: "1 hour",
        lat: -8.75117,
        lng: 121.84602,
      },
      {
        nome: "Batu Cermin Cave",
        testo: "A limestone cave on the edge of Labuan Bajo, called «mirror stone» because at certain hours sunlight comes through a crack and reflects off the damp walls. Fossils of corals and sea creatures show in the rock, a sign it was once under the sea.",
        come: "A few kilometres from central Labuan Bajo, by scooter or car; inside you go with a local guide and a helmet.",
        quando: "Late morning, when the sun is higher.",
        tempo: "1 hour",
        lat: -8.47937,
        lng: 119.89919,
      },
    ],
    programmi: [
      {
        titolo: "2 days: Kelimutu from the east",
        tappe: [
          "Day 1: fly to Ende, Sukarno's house, road to Moni",
          "Day 1: dinner at the guesthouse, ordered in the afternoon",
          "Day 2: dawn at Kelimutu, swim at Murundao",
          "Day 2: back to Ende or Maumere for the flight",
        ],
      },
      {
        titolo: "3 days: the west from Labuan Bajo",
        tappe: [
          "Day 1: Labuan Bajo, Batu Cermin cave, road to Ruteng and the Cancar rice fields",
          "Day 2: Denge and climb to Wae Rebo, night in the village",
          "Day 3: descent and return to Labuan Bajo",
        ],
      },
      {
        titolo: "5-7 days (east-west)",
        tappe: [
          "Day 1: Maumere or Ende, Moni",
          "Day 2: Kelimutu at dawn, Trans-Flores toward Bajawa",
          "Day 3: Bena and Ngada villages",
          "Day 4: road to Ruteng, Cancar",
          "Day 5: Denge and climb to Wae Rebo",
          "Day 6: Wae Rebo, descent and return to Labuan Bajo",
        ],
      },
    ],
    zone: [
      {
        nome: "Moni",
        perChi: "anyone seeing Kelimutu",
        testo: "A village of simple guesthouses. Dinner is ordered in the afternoon.",
        fascia: "€10-30",
      },
      {
        nome: "Bajawa",
        perChi: "anyone going to Bena",
        testo: "A highland town with all kinds of lodging, cooler.",
        fascia: "€12-45",
      },
      {
        nome: "Labuan Bajo",
        perChi: "anyone departing or arriving",
        testo: "A port with more services, base for Komodo.",
        fascia: "€20-120",
      },
    ],
    sapori: [
      {
        nome: "Se'i",
        testo: "Smoked meat typical of the eastern islands."
      },
      {
        nome: "Flores coffee",
        testo: "Home-roasted and served unfiltered, everywhere."
      },
      {
        nome: "Village warungs",
        testo: "Rice, fish or chicken and stir-fried vegetables: the offer is minimal, and that is part of the trip."
      },
      {
        nome: "Sayur rebus",
        testo: "Boiled vegetables with sambal, simple and common."
      }
    ],
    attenzioni: [
      "The Trans-Flores is long and winding: short stretches on the map can take a full day.",
      "At Wae Rebo and Bena you are a guest: ask before photographing and respect local rules.",
      "Guesthouses have few places: book for the main stops.",
      "Carry cash: ATMs are rare outside Labuan Bajo."
    ],
    gite: [
      {
        nome: "Komodo National Park",
        distanza: "1-2 hours by boat from Labuan Bajo",
        come: "On a boat tour for the day or with nights on board, with licensed operators.",
        testo: "Komodo dragons on Rinca or Komodo island, always with a ranger, Padar at dawn and snorkeling at Manta Point and Kanawa. Park entry for foreigners is IDR 250,000, with trekking and snorkeling included.",
      },
      {
        nome: "Kanawa",
        distanza: "about 1 hour by boat from Labuan Bajo",
        come: "With tour boats or a boat ride from the port.",
        testo: "An islet with a white beach and a reef starting a few metres from shore: easy snorkeling for the last day before the flight.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need for Flores?",
        risposta: "Five to seven days to cross it from east to west with Kelimutu, Bena and Wae Rebo. With less time, pick one side: the east for Kelimutu, the west for Wae Rebo.",
      },
      {
        domanda: "Can you travel around Flores without a driver?",
        risposta: "Yes, with local buses and motorbikes, but it's slow and tiring. Almost everyone hires a car and driver by the day on the Trans-Flores, with the price agreed beforehand: the more days, the lower the rate.",
      },
      {
        domanda: "How do you get to Wae Rebo?",
        risposta: "From the village of Denge you walk up about 4.5 km through the forest, 2.5-3 hours. You sleep in the village guest house and arrive respecting the welcome ritual.",
      },
      {
        domanda: "Is it better to start from the east or the west?",
        risposta: "It makes no difference: fly into Maumere or Ende and leave from Labuan Bajo, or the other way round. If you want to end with Komodo, start from the east.",
      },
      {
        domanda: "How much is the entry fee to Kelimutu?",
        risposta: "For foreigners about IDR 150,000 on weekdays, more at weekends. Bring cash.",
      },
      {
        domanda: "Are there ATMs on Flores?",
        risposta: "In Labuan Bajo and Ende yes; in the villages no, and Moni has none. Set off with cash for the road days.",
      },
    ],
    esperienzeSlugs: ['alba-kelimutu'],
    tripSlugs: ['indonesia-itinerario', 'indonesia-isola-per-isola'],
    imageAlt: "The conical mbaru niang houses of the village of Wae Rebo among the mountains of Flores",
    immagine: '/images/indonesia/flores.jpg',
  },
  {
    slug: 'raja-ampat',
    paeseSlug: 'indonesia',
    ordine: 8,
    nome: 'Raja Ampat',
    tipologia: ['diving', 'natura', 'mare'],
    giorniConsigliati: '5-7 days, best on a liveaboard or across several different islands',
    visitataPersonalmente: true,
    introduzione:
      "The most remote archipelago of the trip, in West Papua: reefs considered among the most biodiverse in the world and mushroom-shaped islands rising from an emerald sea.",
    percheAndarci:
      "For divers and snorkelers it's one of the most coveted destinations in the world; even without diving, the viewpoints over the mushroom islands are enough to justify the trip.",
    cosaVedere: [
      "Piaynemo and Wayag, the iconic viewpoints over the mushroom-shaped limestone islands",
      "Arborek, a stilt village with a reef accessible straight from the beach",
      "The manta ray spots and the pristine reefs of the marine park",
    ],
    cosaFare: [
      "Diving or snorkeling on a liveaboard among the reefs of the marine park (there is a dedicated experience page)",
      "Climb to the Piaynemo and Wayag viewpoints",
      "A day at Arborek for snorkeling from the village",
    ],
    doveDormire:
      "Three options very different in budget and comfort (homestay, dive resort or liveaboard): the comparison is below.",
    doveMangiare:
      "There is no choice, and none is needed: in homestays you eat what the family cooks, three times a day, freshly caught fish with rice and vegetables. It's good and monotonous. Outside the lodgings there are no restaurants, so the last chance to buy snacks, water and cash is Sorong or Waisai: there are no ATMs on the islands.",
    comeArrivare:
      "You fly to Sorong (SOQ) from Jakarta, Makassar or Manado, the last one direct in about 1.5 hours with Lion Air or TransNusa; from Bali there's a direct Garuda flight only in the months it runs, in 2026-2027 from late October to March. From the airport to Sorong harbour it's a few minutes by taxi. The ferry to Waisai leaves at 2 pm and takes about 2 hours, with tickets at the port in economy or VIP; the morning sailing doesn't run every day. In Waisai the homestay's boat takes you to Kri, Arborek or the Fam islands. There are no ATMs on the islands: withdraw cash in Sorong.",
    comeSpostarsi: "Only by sea: public boat, private boat or liveaboard.",
    periodoMigliore:
      "there is no truly wrong season: there are two different experiences. From October to April the currents bring an upwelling of plankton-rich water that draws mantas and the other big pelagics, the sea is calmer and liveaboards operate at full strength: it's the safest window and the one with the most wildlife. From May to September southeast winds blow, which raise the sea especially in the Dampier Strait and on crossings toward Misool: transfers between islands can get longer and outings in the most exposed areas can be cancelled, and many liveaboards move elsewhere in this period. In exchange, summer has far fewer people. For rain there's no seasonal rule: it rains all year here, in short, unpredictable showers. What decides when to go is the wind and what you want to see underwater.",
    costi:
      "Raja Ampat regency tourism fee 1,000,000 IDR per person for foreigners, about €55 (2026), paid once per stay; the marine park fee is separate and its amount changed in 2026, so ask your homestay before you leave. Budget: about €60-90 a day per person with a full-board homestay and shared boat trips. Mid-range: €150-250 with a dive resort and dives. High: over €300 a day on a liveaboard.",
    erroriDaEvitare: [
      "Not calculating the cost and time needed to get the mandatory marine park permit (PIN Raja Ampat)",
      "Underestimating internal transport costs: flights and boats to this area are among the priciest in the country",
      "Going in summer expecting the same big pelagics as in winter: mantas and sharks are much less frequent when plankton doesn't rise to the surface",
      "Not allowing buffer days if you travel from May to September: wind can cancel an outing or lengthen a transfer between islands, especially toward Misool",
    ],
    confronti: [
      {
        titolo: 'Where to stay in Raja Ampat: homestay, resort or liveaboard?',
        introduzione:
          "With an archipelago made almost only of islands and no real town, where you sleep decides a large part of the trip: budget, contact with local communities and which points of the park you can actually reach.",
        opzioni: [
          {
            nome: 'Homestay',
            sintesi: "Family-run stilt houses on islands like Gam, Kri or Arborek: the simplest and most common base.",
            costo: "the lowest of the three options, usually with meals cooked by the family",
            durata: 'best suited to stays of a week or more on one or two islands',
            pro: [
              "The spending stays almost entirely with the local community, which is also what supports protection of the marine park",
              "Many exceptional reefs (Arborek above all) can be reached by swimming from the beach, without a boat",
              "Direct contact with the people who live on the islands",
            ],
            contro: [
              "Basic accommodation: bathroom often shared, electricity only at fixed hours (generator)",
              "No restaurants outside the lodging: you eat what the family cooks",
              "For the farthest points (Wayag, Misool) you still have to arrange boats separately",
            ],
            perChi: "Anyone who wants the cheapest and most local-life way to stay in Raja Ampat, and is content to explore the area around their own island.",
          },
          {
            nome: 'Dive resort',
            sintesi: "Mid-to-high range properties, often on a private or nearly private island, designed for organized diving.",
            costo: 'mid-to-high, often with packages that include dives',
            durata: 'from a few days to a week, with daily boat outings to nearby sites',
            pro: [
              "Much higher comfort than a homestay: hot water, continuous electricity, own restaurant",
              "Dedicated staff and faster, better-equipped boats for dive outings",
              "A good fixed base for anyone who wants more comfort without giving up daily diving",
            ],
            contro: [
              "Cost still high, and further from the model that directly supports the communities",
              "Stays tied to a single area: for distant points you still have to move",
            ],
            perChi: "Serious divers who want comfort and organization, without the budget or flexibility of a liveaboard.",
          },
          {
            nome: 'Liveaboard',
            sintesi: "A boat that serves as both lodging and transport, moving at night so each day you're at a different site.",
            costo: 'the most expensive of the three options, usually all inclusive',
            durata: 'multi-day cruises, the most efficient way to cover areas far from each other',
            pro: [
              "It's the only practical way to get to Wayag or push south toward Misool on the same trip",
              "No time lost in overland transfers or ferries: you sleep while the boat changes area",
              "Dives and meals organized by the crew, the highest comfort of the three options",
            ],
            contro: [
              "The cost is by far the highest of the three options",
              "The least connected to local communities: the money almost all stays with the operator",
              "In the wind season (May-September) many liveaboards move elsewhere, to avoid the most exposed areas",
            ],
            perChi: 'Anyone with the budget who wants to see the most of the archipelago, remotest points included, in a single organized week.',
          },
        ],
        raccomandazione:
          "For a first trip on a modest budget, a homestay on an island like Kri or Arborek already gives a great deal. A liveaboard is justified when the goal is to see the whole archipelago, Wayag included, in a single intense week: that's where its cost, the highest of the three options, makes sense.",
      },
    ],
    miaEsperienza:
      "It's the most beautiful place I've seen underwater, and also the hardest to reach: two flights, a ferry and a boat, with costs that look nothing like the rest of Indonesia. The difference shows at the first snorkel, though: a density of fish like the reef at Arborek, twenty meters from shore, doesn't exist anywhere else anymore. The currents are strong and must be taken seriously: certain spots can only be done at the right times. Sleeping in homestays rather than resorts is the choice worth making, because that model, even more than the price, is what keeps the park's protection going. Piaynemo at sunset, with the wooden stairs and the crowded platform, is the only moment you meet anyone else. We were there in August 2026, which every guidebook marks as the wrong season. In part it is, but not in the way you expect: the sea was amazing all the same, ten days without seeing a drop of rain. The wind, though, made itself felt: it lengthened a couple of transfers between islands and made us skip an outing in a more exposed area. The other thing to count is the big pelagics: mantas and sharks are much rarer in summer, because the upwelling of plankton-rich water that draws them is mainly a winter phenomenon. With reefs full of fish anyway and very few other tourists around, it was a trade-off I don't regret.",
    luoghi: [
      {
        nome: "Piaynemo",
        testo: "Raja Ampat's iconic viewpoint, with mushroom-shaped limestone islands rising from a turquoise lagoon. Reached by a wooden staircase.",
        come: "By boat from the islands of Waisai or from homestays. The marine park permit (PIN Raja Ampat) is paid.",
        quando: "At sunset, but it is the only time you meet anyone else.",
        tempo: "half a day",
        costo: "Covered by the Raja Ampat permits; the village may ask a small fee per boat.",
        lat: -0.56417,
        lng: 130.2706,
        consiglio: "Go up early or at the end of the day to avoid the crowded platform.",
      },
      {
        nome: "Kri and Cape Kri",
        testo: "A small island in the Dampier Strait, with a white beach, a row of homestays and a dive centre. The surrounding reefs are among the most species-rich in the world, and many can be reached straight from the jetty. Cape Kri, on the eastern tip, is one of the park's most famous dive sites for the sheer amount of fish.",
        come: "From Waisai harbour on the homestay's boat, arranged in advance. Dives are done with Soul Scuba Divers, on the island.",
        quando: "In the morning, with high light and often flatter sea.",
        tempo: "2-3 days",
        lat: -0.56083,
        lng: 130.6779,
        consiglio: "We stayed at Paparisa Homestay: prices above the average for homestays, but a good balance between comfort and a local stay, and dolphins and dugongs often swim off the beach.",
      },
      {
        nome: "Arborek",
        testo: "A stilt village with a reef you can reach straight from the beach, with a density of fish a few metres from shore that is rare elsewhere.",
        come: "By boat from the rest of the islands. You sleep in the village homestays.",
        quando: "All year; better in the morning.",
        tempo: "1-2 days",
        lat: -0.56506,
        lng: 130.51758,
        consiglio: "Sleep in homestays, not resorts: that model is what keeps the park's protection going.",
      },
      {
        nome: "Fam islands: Rufas and the Fam Wall",
        testo: "Further north-west the landscape changes: forest-covered limestone islets, turquoise lagoons and very few places to stay. Rufas is a bay among the islets with shallow, clear water; the Fam Wall is a coral wall dropping into the blue, with soft corals and gorgonian fans. Piaynemo is a few minutes away by boat.",
        come: "By boat from Kri or Waisai, a few hours depending on the sea; trips are arranged with the homestay.",
        quando: "The tide decides the order of the stops; with wind the exposed spots may be skipped.",
        tempo: "1-2 days",
        lat: -0.66054,
        lng: 130.29064,
        consiglio: "We stayed at Tanjung Mefiyai Homestay: very simple, in a beautiful spot, with Reno arranging trips and transfers. Bring your own mask and fins, as borrowed ones aren't always in good shape.",
      },
      {
        nome: "Telaga Bintang (Star Lagoon)",
        testo: "A star-shaped lagoon enclosed by rocks, right next to Piaynemo. You see it from above from a small viewpoint reached by a short climb over the rock, and almost every boat combines it with Piaynemo.",
        come: "On the same boat trip as Piaynemo.",
        quando: "Before or after Piaynemo, in the afternoon light.",
        tempo: "30-45 minutes",
        lat: -0.56887,
        lng: 130.27073,
        consiglio: "The rock is sharp and slippery: wear shoes with soles.",
      },
      {
        nome: "Dampier Strait and manta spots",
        testo: "The park's pristine reefs, with mantas at cleaning stations and a huge variety of fish. Currents are strong and must be respected.",
        come: "By boat with operators, at the right times for currents.",
        quando: "Mantas and large pelagics depend on the season: ask the dive operators before setting dates.",
        tempo: "1-2 days",
        consiglio: "Certain spots can only be done with the right current: follow the guide's instructions.",
      },
      {
        nome: "Birds of paradise at Saporkren and Sawinggrai",
        testo: "Birds of paradise live in the forests of Waigeo and Gam, with the males performing their courtship dance on the same branches at dawn. Guides from the villages of Saporkren and Sawinggrai lead you to the viewing spots. In Sawinggrai the village jetty is also a good snorkelling spot.",
        come: "Saporkren is near Waisai, Sawinggrai on Gam: by boat from the homestay before dawn, then a short walk in the forest with the village guide.",
        quando: "At dawn: after the first hours the birds stop displaying.",
        tempo: "half a day",
        lat: -0.43686,
        lng: 130.72983,
        consiglio: "Bring binoculars or a long lens: the birds sit high in the trees.",
      },
      {
        nome: "Wayag",
        testo: "The other famous viewpoint, in the north, with dozens of limestone islets in a lagoon. Farther, it takes more time and more money.",
        come: "By liveaboard or private boat, far from Waisai. Depends on wind and sea.",
        quando: "In the months with the calmest sea: ask homestays and operators.",
        tempo: "1 day or more",
        lat: 0.17774,
        lng: 130.04205,
        consiglio: "Allow a buffer day: wind can cancel the trip.",
      },
      {
        nome: "Misool",
        testo: "The south of the park, with more remote reefs and limestone islands and calmer areas. Less traveled.",
        come: "By liveaboard or resort, far from Waisai.",
        quando: "In the months with the calmest sea; when the wind blows the sea towards Misool gets rough.",
        tempo: "2 days or more",
        lat: -1.86951,
        lng: 130.13809,
        consiglio: "In windy weather transfers to Misool can be cancelled: leave some margin.",
      },
      {
        nome: "Yenbuba jetty",
        testo: "The village of Yenbuba, on Mansuar island opposite Kri, has a jetty where schools of fish gather underneath, and a reef that starts a few metres from the shore. It's one of the easiest snorkelling trips from Kri.",
        come: "A few minutes by boat from Kri, with the homestay.",
        quando: "When the current is weak: ask the guide for the time.",
        tempo: "1-2 hours",
        lat: -0.57107,
        lng: 130.65374,
        consiglio: "In the village always ask before photographing people.",
      },
      {
        nome: "Friwen Wall",
        testo: "A shallow coral wall along Friwen island, between Waisai and Kri, covered in soft corals, sponges and fans. It's a sheltered spot, suitable even for first-time snorkellers in these waters.",
        come: "By boat from Waisai or Kri, often as a stop during the transfer.",
        quando: "With the tide and current the guide suggests.",
        tempo: "1 hour",
        lat: -0.47745,
        lng: 130.69603,
      },
    ],
    programmi: [
      { titolo: "1 day: from Kri", tappe: [
        "Morning: snorkelling from the Kri jetty or at Cape Kri",
        "Midday hours in the shade",
        "Afternoon: boat to the Yenbuba jetty",
        "Sunset from the homestay beach",
      ] },
      { titolo: "3 days: Kri, Arborek and Fam", tappe: [
        "Day 1: Sorong-Waisai ferry, boat to Kri and a first swim from the jetty",
        "Day 2: birds of paradise at dawn, then the Arborek reef",
        "Day 3: transfer to the Fam islands, Telaga Bintang and Piaynemo at sunset",
      ] },
      { titolo: "5-7 days", tappe: [
        "Day 1: flight to Sorong, ferry to Waisai",
        "Day 2-3: Arborek and snorkeling on nearby reefs",
        "Day 4: Piaynemo",
        "Day 5-6: manta spots or Wayag, if the sea allows",
        "Day 7: return to Sorong",
      ] },
    ],
    zone: [
      {
        nome: "Homestays (Arborek, Gam, Kri)",
        perChi: "anyone who wants to save and support communities",
        testo: "You sleep in families' homes, eat what they cook, without electricity at all hours.",
        fascia: "€30-80",
      },
      {
        nome: "Dive resorts (Kri, Gam, Mansuar)",
        perChi: "those diving every day who want comfort",
        testo: "Bungalows with round-the-clock electricity, a restaurant and fast boats to the Dampier Strait sites. Usually sold as packages with meals and dives.",
        fascia: "from €280",
      },
      {
        nome: "Liveaboard",
        perChi: "anyone who wants to cover more areas",
        testo: "A boat with bunks, to reach Wayag and Misool. Expensive.",
      },
      {
        nome: "Waisai",
        perChi: "anyone arriving and leaving",
        testo: "The district capital, with few services and a logistics stop.",
      },
    ],
    sapori: [
      {
        nome: "Fresh fish with rice",
        testo: "Freshly caught fish with rice and vegetables, in homestays. Good and monotonous."
      },
      {
        nome: "Papeda",
        testo: "Sago glue, typical of Papua, served with yellow fish soup."
      },
      {
        nome: "Seasonal fruit",
        testo: "Whatever there is, on the islands."
      }
    ],
    attenzioni: [
      "The marine park permit (PIN Raja Ampat) is mandatory: work out its cost and time.",
      "Wind can lengthen transfers and cancel trips to exposed areas: ask operators which season is best.",
      "There are no ATMs on the islands: withdraw in Sorong or Waisai.",
      "Currents are strong: always follow the guide's instructions."
    ],
    gite: [
      {
        nome: "Arborek and Sawinggrai",
        distanza: "about 20 km by boat from Kri",
        come: "On the homestay's boat, priced per boat and shared.",
        testo: "A day between the Arborek reef, with schools of fish under the jetty, and the village of Sawinggrai on Gam. Leaving at dawn you can add the birds of paradise.",
      },
      {
        nome: "Piaynemo and Telaga Bintang",
        distanza: "about 45 km by boat from Kri, a few hours depending on the sea",
        come: "With the homestay or a private boat, leaving in the morning.",
        testo: "The most famous viewpoint in Raja Ampat and the star-shaped lagoon next to it, with a snorkelling stop on the way. With wind the crossing gets longer: better to spend a night in the Fam islands.",
      },
      {
        nome: "Friwen Wall and Saporkren",
        distanza: "near Waisai, about 10 km by boat from Kri",
        come: "By boat, also as a stop on arrival or departure.",
        testo: "Birds of paradise in the Saporkren forest at dawn, then snorkelling on the sheltered Friwen wall. It's the easiest trip to fit around ferry day.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Raja Ampat?",
        risposta: "At least a week: with less you spend more time travelling than in the water. It's worth splitting it between the Dampier Strait (Kri, Arborek) and the Fam islands.",
      },
      {
        domanda: "How much is the Raja Ampat permit?",
        risposta: "In 2026 the regency tourism fee is 1,000,000 IDR per person for foreigners, once per stay. The marine park fee is separate and its amount changed in 2026: ask your homestay, and keep the receipt.",
      },
      {
        domanda: "Homestay, resort or liveaboard?",
        risposta: "A homestay is the cheapest option and the one that supports the communities protecting the park. A resort suits those diving every day; a liveaboard those who want to reach Wayag or Misool on the same trip.",
      },
      {
        domanda: "When is the best time for Raja Ampat?",
        risposta: "October to April, with calmer seas, mantas and big pelagics. From May to September the south-east winds blow: transfers take longer and some trips may be cancelled, but there are far fewer people.",
      },
      {
        domanda: "Are there ATMs in Raja Ampat?",
        risposta: "Not on the islands. Withdraw all the cash for your stay in Sorong, in rupiah: homestays, boats and village fees are paid in cash.",
      },
      {
        domanda: "How do you get to Kri?",
        risposta: "Fly to Sorong, take the 2 pm ferry to Waisai (about 2 hours) and then the homestay's boat to Kri. A morning flight gives you a margin to reach the port.",
      },
    ],
    esperienzeSlugs: ['diving-liveaboard-raja-ampat'],
    tripSlugs: ['bali-sulawesi-raja-ampat', 'indonesia-isola-per-isola'],
    imageAlt: "Limestone islets covered in forest in the turquoise lagoon of Piaynemo, Raja Ampat",
    immagine: '/images/indonesia/raja-ampat.jpg',
  },
  {
    slug: 'mentawai',
    paeseSlug: 'indonesia',
    ordine: 9,
    nome: 'Mentawai',
    tipologia: ['natura', 'cultura', 'surf', 'mare'],
    giorniConsigliati: '7-8 days: 3-4 in the Siberut jungle, the rest on Sipora for the sea or surfing',
    visitataPersonalmente: true,
    introduzione:
      "An archipelago west of Sumatra, with four main islands: Siberut, Sipora, North Pagai and South Pagai. On Siberut you spend a few days in the jungle with a Mentawai family; on Sipora there are beaches and some of the most famous surf breaks in the world.",
    percheAndarci:
      "To spend a few days in an uma, the Mentawai longhouse, with guides from Siberut, and then for the sea and the waves of Sipora.",
    cosaVedere: [
      "The Siberut jungle, going up the river by motorized canoe to a family's uma",
      "The beaches of Sipora",
      "Tuapejat, the capital of the Mentawai, on Sipora",
      "The surf breaks of Sipora",
    ],
    cosaFare: [
      "A few days with a Mentawai family in the Siberut jungle, with an operator that works with Mentawai guides",
      "Surfing the reefs of Sipora, only for intermediates and experts, in the May-September season",
      "Surf lessons on beach breaks for beginners, best in the months with little swell",
    ],
    doveDormire:
      "On Siberut in the uma of the host family, on a mat under a mosquito net. On Sipora simple homestays, or pricier resorts and surf camps.",
    comeArrivare:
      "Fly to Padang's Minangkabau airport (PDG) from Jakarta, Bali or Kuala Lumpur: a return ticket from Jakarta or Bali costs about 130-200 USD. The Minangkabau Ekspres train takes about 40 minutes, for about 10,000 IDR, to Pulau Air station, near the port; by Grab or Gojek it's about 100,000-150,000 IDR. From the port at the mouth of the Batang Arau the Mentawai Fast ferry leaves: about 3.5 hours to Tuapejat (Sipora) and about 4 to Siberut, at about 300,000-400,000 IDR (about €17-22), with a surcharge for surfboards. Times and prices change often: check them on the operator's official page, and buy the ticket the day before at the port. No confirmed regular flights show up for the Mentawai airport.",
    comeSpostarsi:
      "On Siberut minivan, motorized canoe on the river and trekking through mud. Between the islands and to the breaks, private boat or transfers organized by operators and surf camps.",
    periodoMigliore:
      "May to early September for the Siberut jungle, May-September for the biggest swells; from November to January it rains a lot",
    costi:
      "jungle stays with local operators are sold as packages, prices from the operator; surfers pay a compulsory surf tax, with the amount to be checked at booking. Budget: about €50-70 a day with simple homestays on Sipora and the public ferry. Mid-range: €100-150 with a better homestay, a few shared boat trips and the Siberut jungle package (from €480 per person for 6 days with a stop on Sipora). High: over €250 with a resort or surf camp and a private boat, which costs roughly 1,500,000-3,000,000 IDR a day (about €85-170).",
    erroriDaEvitare: [
      "Treating the visit as a show: you are a guest in a family's home, you ask permission before every photo and you don't pay for poses or costumes",
      "Leaving without buffer days: with a red Syahbandar flag the ferries don't go out",
      "Underestimating the conditions: mud, mosquitoes, no electricity, humid heat",
      "Thinking the famous reefs are suitable for beginners",
      "Leaving without insurance that covers evacuation and without having seen a travel medicine clinic about malaria",
    ],
    miaEsperienza:
      "I went with Mentawai Tribe, a Padang operator that works with guides from Siberut, and I spent a few days in the jungle with a Mentawai family. These places are unreal. It's not for everyone, though: there's mud everywhere, there are insects, there's no electricity and you sleep on a mat. And there's an ethical side to face honestly. It's not a human zoo, you're a guest in someone's home. You ask before photographing, the guide arranges the gifts, the money has to reach the community: that's why it matters to choose an operator with Mentawai guides. It also helps to know that for decades the state suppressed their traditions, burning ritual objects and arresting the shamans. After the jungle there are the beaches, beautiful, and the surf of Sipora, which is the reason almost everyone comes all the way here.",
    luoghi: [
      {
        nome: "Siberut jungle and a Mentawai family's uma",
        testo: "You go up the river by motorized canoe to the uma, a family's longhouse, and spend a few days in the jungle. Mud everywhere, insects, no electricity, you sleep on a mat. It is not a human zoo: you are a guest in someone's home.",
        come: "From the port on Siberut, by motor canoe and on foot through the forest. With Mentawai guides from local operators in Padang. From the port you continue by minivan or pick-up to a village, then 1.5-2 hours by canoe and about 3.5 km on foot over mud, roots and logs.",
        quando: "In the less rainy months; ask the operator, because at certain times it rains a lot and the trails get hard.",
        tempo: "3-8 days",
        costo: "Sold as a package by the operator; for example from €480 per person for 6 days between Siberut and Sipora (2026).",
        lat: -1.36667,
        lng: 98.93333,
        consiglio: "Ask before photographing, agree gifts with the guide and choose an operator with Mentawai guides, so the money reaches the community."
      },
      {
        nome: "Muara Siberut",
        testo: "Siberut's main port, where the ferry from Padang arrives. From here transport leaves for the inland villages and the river canoes. Past the port, phone coverage becomes unreliable.",
        come: "Mentawai Fast ferry from Padang, about 4 hours. According to the jungle operator the public sailings leave on Tuesday, Thursday and Saturday, but always reconfirm them.",
        quando: "Early morning departure: those heading to the jungle reach the uma in the afternoon.",
        tempo: "half a day in transit",
        costo: "Ferry about 300,000-400,000 IDR per person, about €17-22 (2026).",
        lat: -1.5968,
        lng: 99.2138,
        url: "https://www.mentawaifast.com/",
        consiglio: "Phone, documents and money in the dry bag as soon as you land: you get wet in the canoe."
      },
      {
        nome: "Tuapejat and Sipora",
        testo: "The capital of the Mentawai and the island with the nicest beaches. After the Siberut jungle it is the sea and rest part.",
        come: "Mentawai Fast ferry from Padang, only on some days of the week. Times and prices change often: check them on the operator's page. The crossing takes about 3.5 hours.",
        quando: "In the months with the calmest sea, after asking operators.",
        tempo: "2-3 days",
        costo: "Ferry about 300,000-400,000 IDR per person, about €17-22, plus the surfboard surcharge (2026).",
        lat: -2.0308,
        lng: 99.5867,
        url: "https://www.mentawaifast.com/",
        consiglio: "Leave days of margin: with the Syahbandar red flag the ferries do not sail."
      },
      {
        nome: "Sipora beaches",
        testo: "Beautiful, little-visited beaches with clear water. In front of many of them lies the reef, good for snorkeling when the sea is calm. Accommodation is scattered along the coast, between Tuapejat and the south of the island.",
        come: "By scooter or with organized transfers from Tuapejat; for the nearby beaches also by boat.",
        quando: "In the morning, when the sea is smoother and the wind lighter.",
        tempo: "1-2 days",
        consiglio: "Bring everything you need: services on the island are few. Coral cuts: even a small scratch should be disinfected at once."
      },
      {
        nome: "The Mentawai surf breaks",
        testo: "Some of the most famous waves in the world, the reason almost everyone comes this far. Surf camps and boats take you to the breaks depending on the swell and your level.",
        come: "By private boat or transfers organized by surf camps. Mandatory surf fee. Beginners have beach breaks with lessons and rentals.",
        quando: "Swells and the best season depend on your level: ask the surf camps before fixing dates.",
        tempo: "at least 5 days",
        costo: "Beginner lessons and rentals about 500,000-1,000,000 IDR a day, about €28-55 (2026). Surf tax extra, amount to confirm with your accommodation.",
        consiglio: "The famous reefs are not for beginners: choose breaks by level."
      },
      {
        nome: "Lance's Left, Katiet bay",
        testo: "The most accessible left in southern Sipora, in Katiet bay. It is still a reef wave, for intermediates, and it gets serious with big swells.",
        come: "By boat from the accommodation in southern Sipora, choosing the spot the same morning with the boatman.",
        quando: "Early morning, with less wind and fewer boats.",
        tempo: "half a day",
        consiglio: "At low tide the reef is a few centimeters down: reef booties and never in the water alone."
      },
      {
        nome: "HTs (Lance's Right)",
        testo: "A hard-to-read right near Lance's Left, with sharp reef on the inside. It is a wave for experts.",
        come: "By boat from Katiet bay or the accommodation in southern Sipora.",
        quando: "Early morning, depending on swell and tide.",
        tempo: "half a day",
        lat: -2.37567,
        lng: 99.85954,
        consiglio: "Those without the level watch from the boat: it's already a show."
      },
      {
        nome: "Telescopes",
        testo: "A long left in northern Sipora, with several barreling sections. It is one of the island's best-known breaks, for experienced surfers.",
        come: "By boat from the accommodation on Sipora; the spot is chosen in the morning according to the swell direction.",
        quando: "Early morning, before the wind picks up.",
        tempo: "half a day",
        consiglio: "Non-surfers can snorkel in calm water or stay on the boat."
      },
      {
        nome: "Padang: old town and Siti Nurbaya bridge",
        testo: "The departure city for the Mentawai. Along the Batang Arau river stand old Dutch-era warehouses, and the Siti Nurbaya bridge is the finest spot at sunset. The ferry port is at the mouth of the same river.",
        come: "On foot in the old town, staying in a hotel near the port.",
        quando: "At sunset.",
        tempo: "half a day",
        lat: -0.96546,
        lng: 100.35909,
        consiglio: "It's also the last chance for a proper nasi padang and to buy packaged rendang."
      },
      {
        nome: "Air Manis beach and Malin Kundang",
        testo: "A beach south of Padang with the rock that, according to legend, is Malin Kundang, the ungrateful son turned to stone. It is the easiest outing for a spare day in the city.",
        come: "By car or Grab from central Padang.",
        quando: "Afternoon.",
        tempo: "2 hours",
        lat: -0.99127,
        lng: 100.36069,
      }
    ],
    programmi: [
      {
        titolo: "4 days: Siberut only",
        tappe: [
          "Day 1: ferry from Padang to Siberut, canoe up the river and trail to the uma",
          "Day 2: a day with the family, gathering food and working sago",
          "Day 3: the forest around the uma early in the morning, afternoon rest",
          "Day 4: back on foot and by canoe, ferry to Padang"
        ]
      },
      {
        titolo: "5 days: Sipora, sea and surf",
        tappe: [
          "Day 1: Mentawai Fast from Padang to Tuapejat, transfer to the accommodation",
          "Day 2: beach and snorkeling, or a surf lesson on beach breaks",
          "Day 3: boat to Lance's Left and HTs in Katiet bay",
          "Day 4: Telescopes in the morning or a slow reserve day",
          "Day 5: Tuapejat-Padang ferry in the early afternoon"
        ]
      },
      {
        titolo: "8-9 days",
        tappe: [
          "Day 1: Padang, ferry to Siberut",
          "Day 2-5: jungle with the Mentawai family",
          "Day 6: return and ferry to Tuapejat",
          "Day 7-8: beaches or surf at Sipora",
          "Day 9: return to Padang"
        ]
      }
    ],
    zone: [
      {
        nome: "Siberut (uma or homestay)",
        perChi: "anyone doing the jungle",
        testo: "You sleep with the family or in a simple camp. No electricity."
      },
      {
        nome: "Tuapejat",
        perChi: "anyone arriving by ferry",
        testo: "Simple hotels and restaurants. A logistics point."
      },
      {
        nome: "Sipora homestays",
        perChi: "anyone after sea and a few boat trips",
        testo: "Simple places along the coast, between Tuapejat and the south of the island. Best to pick one with the boat transfer included.",
        fascia: "40-85 €"
      },
      {
        nome: "Sipora surf camps",
        perChi: "surfers",
        testo: "Dedicated facilities, with boats for the breaks.",
        fascia: "from 220 €"
      }
    ],
    sapori: [
      {
        nome: "Fish and rice",
        testo: "The basic meal in the jungle and on the islands."
      },
      {
        nome: "Sago",
        testo: "A traditional Mentawai food, prepared by families."
      },
      {
        nome: "Nasi padang in Padang",
        testo: "Before or after the islands, the dish of the departure city."
      }
    ],
    attenzioni: [
      "Do not treat the visit as a show: you are a guest, you ask before photographing and you do not pay for poses or costumes.",
      "With a red flag the ferries do not sail: leave with days of margin.",
      "Tough conditions: mud, mosquitoes, no electricity, humid heat.",
      "Insurance that covers evacuation and a visit to a travel-medicine clinic for malaria."
    ],
    gite: [
      {
        nome: "Bukittinggi and the Ngarai Sianok canyon",
        distanza: "about 3 hours by car from Padang",
        come: "Private car, about 500,000 IDR (about €28), agreed in advance. Better with a night there, if your margin days allow.",
        testo: "The city of the Minangkabau highlands, cool after the heat of the coast, with the Jam Gadang clock tower, the Ngarai Sianok canyon and the Japanese tunnels of Lobang Jepang."
      },
      {
        nome: "Lembah Anai waterfall",
        distanza: "along the road between Padang and Bukittinggi",
        come: "By car, as a stop on the main road up to the highlands.",
        testo: "The waterfall drops right by the roadside, in the Lembah Anai gorge. It pairs with the Bukittinggi trip or works alone with a free half day in Padang."
      }
    ],
    faq: [
      {
        domanda: "How many days do you need for the Mentawai?",
        risposta: "Seven or eight days: three or four in the Siberut jungle and the rest on Sipora. Add at least one spare day in Padang before your flight."
      },
      {
        domanda: "How do you get to the Mentawai?",
        risposta: "On the Mentawai Fast ferry from Padang: about 3.5 hours to Tuapejat and 4 to Siberut. There are no confirmed regular flights."
      },
      {
        domanda: "Are the Mentawai worth it if you don't surf?",
        risposta: "Yes: the Siberut jungle with a Mentawai family and the Sipora beaches are enough on their own. Non-surfers can also follow the boats to the breaks and snorkel."
      },
      {
        domanda: "Can you learn to surf in the Mentawai?",
        risposta: "On beach breaks, with lessons and rentals at about 500,000-1,000,000 IDR a day. The famous reefs, such as HTs and Telescopes, are for intermediate and expert surfers."
      },
      {
        domanda: "How much is the Mentawai surf tax?",
        risposta: "Only surfers pay it, and the amount changes often. Ask your accommodation or operator for the current figure before you leave."
      },
      {
        domanda: "When is the best time to visit the Mentawai?",
        risposta: "From May to September: for the Siberut jungle the driest months run from May to early September, and summer also brings the biggest swells. From November to January it rains a lot."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sumatra-mentawai', 'indonesia-isola-per-isola'],
    imageAlt: 'The Mentawai rainforest running down to the sea, with a river winding toward the coast, seen from the drone',
    immagine: '/images/indonesia/mentawai-costa-foresta.webp',
  },
]
