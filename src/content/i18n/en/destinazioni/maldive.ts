import type { Destinazione } from '@/lib/types'

export const destinazioniMaldive: Destinazione[] = [
  {
    slug: 'male-hulhumale',
    paeseSlug: 'maldive',
    ordine: 1,
    nome: 'Malé and Hulhumalé',
    tipologia: ['città', 'arrivo'],
    giorniConsigliati: 'half a day or a transit night',
    visitataPersonalmente: true,
    introduzione:
      "The capital, one of the most densely populated cities in the world, and Hulhumalé, the artificial island next to Velana airport, with a city beach, hotels and restaurants.",
    percheAndarci:
      "For the first or last night, when flight times don't allow a boat or a seaplane, and for half a day between the fish market and the Friday Mosque.",
    cosaVedere: [
      'The Malé fish market in the afternoon, when the dhonis come back',
      'The fruit and vegetable market',
      'The Friday Mosque (Hukuru Miskiy), in coral stone from 1658',
      'Hulhumalé beach',
    ],
    cosaFare: ['Try short eats at a local café', 'An evening stroll along the Hulhumalé waterfront'],
    doveDormire: 'Hulhumalé, 10-15 minutes from the airport, with hotels and guesthouses from $60 to $150.',
    doveMangiare: 'Local cafés for short eats, restaurants on the Hulhumalé waterfront.',
    comeArrivare: 'From Velana airport by ferry to Malé (10-15 minutes, 15 rufiyaa or $1, 2025) or by bus and taxi to Hulhumalé and to Malé over the bridge.',
    comeSpostarsi: 'On foot and by taxi.',
    periodoMigliore: 'all year.',
    erroriDaEvitare: ['Visiting the mosques during prayer or without covered clothing', 'Looking for alcohol: Malé and Hulhumalé are inhabited islands, and the ban applies there'],
    luoghi: [
      {
        "nome": "Malé fish market",
        "testo": "On Malé's northern waterfront the dhonis unload tuna and reef fish, which are cut on the counters in front of onlookers. It is the most genuine spot in the capital: strong smells, wet floors, fishermen haggling. Next door is the fruit and vegetable market, with coconuts, chillies and packets of dried fish.",
        "come": "From the airport ferry terminal, a few minutes on foot.",
        "quando": "From early afternoon, when the boats come back; slower on Fridays because of prayers. No fixed hours.",
        "tempo": "1 hour",
        "consiglio": "Always ask permission before photographing people."
      },
      {
        "nome": "Friday Mosque (Hukuru Miskiy)",
        "testo": "Built in 1658 under Sultan Ibrahim Iskandar, it is the oldest mosque in Malé: coral blocks fitted together without mortar and carved with patterns and inscriptions, with lacquered wooden ceilings and beams. Next to it are the cemetery with coral headstones and the Munnaaru minaret. The coral stone mosques of the Maldives are on the UNESCO tentative list.",
        "come": "On foot from central Malé. Non-Muslims need permission to go inside: ask the mosque staff or the Ministry of Islamic Affairs; it can be seen well from outside anyway.",
        "quando": "Outside prayer times, avoiding Fridays.",
        "tempo": "30 minutes",
        "consiglio": "Cover shoulders and knees; no entry during prayer."
      },
      {
        "nome": "Hulhumalé beach",
        "testo": "The city beach of the artificial island next to the airport, with a waterfront and restaurants. Handy for the first or last night.",
        "come": "From Velana by bus or taxi, 10-15 minutes.",
        "quando": "Sunset and evening.",
        "tempo": "an evening",
        "consiglio": "It is an inhabited island: local rules apply, so covered clothing and no alcohol."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Fruit market in the morning, fish market in the afternoon",
          "Friday Mosque outside prayer",
          "Ferry to the airport or bus to Hulhumalé",
          "Dinner on the Hulhumalé waterfront"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hulhumalé",
        "perChi": "first or last night",
        "testo": "10-15 minutes from Velana, with hotels and guesthouses from $60 to $150 and waterfront restaurants. Modern and a bit anonymous."
      },
      {
        "nome": "Malé",
        "perChi": "those who want the city",
        "testo": "A very dense capital, noisy and without a beach. Useful for half a day, less for sleeping."
      }
    ],
    sapori: [
      {
        "nome": "Short eats",
        "testo": "Gulha, bajiya and kavaabu: fried afternoon snacks in local cafés."
      },
      {
        "nome": "Mas huni",
        "testo": "Tuna, grated coconut, onion and chili with roshi, a flatbread: the Maldivian breakfast."
      },
      {
        "nome": "Garudhiya",
        "testo": "Tuna broth with rice, lime and chili."
      },
      {
        "nome": "Tuna curry",
        "testo": "Fish of the day in curry, in cafés and guesthouses."
      }
    ],
    attenzioni: [
      "On inhabited islands (Malé, Hulhumalé) alcohol is neither sold nor drunk. Importing it is banned.",
      "E-cigarettes are banned: import since 15 November 2024, possession and use since 15 December 2024, tourists included. Since 1 November 2025 anyone born on or after 1 January 2007 may not buy or smoke tobacco, tourists included.",
      "Fill in the IMUGA (traveller declaration) within the 96 hours before the flight, one per person, children included. It is free: use only the official portal imuga.immigration.gov.mv, as there are fake paid sites.",
      "Taking away corals, shells and sand is banned, even from the beach: they are seized at the airport and you risk a fine."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: "Malé seen from above, with the harbor full of boats and the colorful buildings of the capital",
    immagine: '/images/maldive/male-hulhumale.jpg',
  },
  {
    slug: 'male-sud-vaavu',
    paeseSlug: 'maldive',
    ordine: 2,
    nome: 'South Malé and Vaavu',
    tipologia: ['isole locali', 'snorkeling', 'squali'],
    giorniConsigliati: '3-5 days',
    visitataPersonalmente: false,
    introduzione:
      "The atolls closest to the airport heading south: South Malé with Maafushi, Guraidhoo and Gulhi, and farther down Vaavu, little touristed, with Fulidhoo and the shark channels.",
    percheAndarci:
      "For anyone with few days or who wants to spend little on transfers: short speedboat rides, many guesthouses, turtles, nurse sharks and the Alimatha night dive.",
    cosaVedere: [
      "Maafushi's bikini beach and the nearby reefs with turtles",
      'The island of Fulidhoo, small and quiet',
      'The Vaavu channels (Fotteyo, Miyaru Kandu) with gray reef sharks',
    ],
    cosaFare: ['Snorkeling with nurse sharks and rays', 'The Alimatha night dive', 'A day at a nearby resort from Maafushi'],
    doveDormire: 'Guesthouses in Maafushi (the most developed and crowded), Guraidhoo, Gulhi, Fulidhoo.',
    doveMangiare: 'Maldivian cooking in the guesthouses and the island cafés.',
    comeArrivare: 'Speedboat from Malé in 45-90 minutes ($20-40), or the cheap MTCC ferry ($2-3) with few departures.',
    comeSpostarsi: 'Boat excursions organized by the guesthouses.',
    periodoMigliore: 'December to April for a calm sea; from May to November speedboats are bumpier.',
    erroriDaEvitare: ["Expecting a quiet village in Maafushi: it's heavily built up and crowded", 'Counting on ferries on Friday'],
    luoghi: [
      {
        "nome": "Maafushi and its bikini beach",
        "testo": "The most developed local island near Malé, with a signposted bikini beach, many guesthouses and nearby reefs where turtles are seen.",
        "come": "Shared speedboat from Malé in about 45 minutes. The MTCC ferry via Gulhi usually leaves in the afternoon, Saturday to Thursday, and takes 1.5 to 2 hours.",
        "quando": "All year; December to April the sea is calmer.",
        "tempo": "2-3 days",
        "costo": "Shared speedboat $20-40 each way; MTCC ferry $2-3 (indicative, 2026)",
        "consiglio": "It is heavily built-up and crowded: not the quiet village you might expect."
      },
      {
        "nome": "Fulidhoo",
        "testo": "A small local island in Vaavu, quiet, with sandy streets, a few hundred inhabitants and a handful of guesthouses. In the evening nurse sharks and rays often come to the jetty looking for fish scraps. It is a good base for the Vaavu channels and the Alimatha night dive.",
        "come": "Speedboat from Malé, or MTCC ferry in about 3 hours, 2-3 times a week and never on Fridays; excursions are booked through the guesthouse.",
        "tempo": "2-3 days"
      },
      {
        "nome": "Vaavu channels and Alimatha",
        "testo": "The Fotteyo and Miyaru Kandu channels bring grey reef sharks. At Alimatha the night dive is known for dozens of nurse sharks.",
        "come": "With the dive centres and guesthouse excursions.",
        "quando": "December to April for calm seas.",
        "tempo": "a full day",
        "consiglio": "The channels have currents: you need experience and months of diving behind you."
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: speedboat from Malé to Maafushi, snorkelling with turtles",
          "Day 2: snorkelling or dive excursion with nurse sharks",
          "Day 3: day at a nearby resort, or Vaavu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Maafushi",
        "perChi": "services and choice",
        "testo": "The most developed, with many guesthouses and restaurants. Crowded and built-up."
      },
      {
        "nome": "Guraidhoo and Gulhi",
        "perChi": "calmer",
        "testo": "Smaller, quieter islands in the same atoll."
      },
      {
        "nome": "Fulidhoo",
        "perChi": "little touristed",
        "testo": "In Vaavu, quiet and with few facilities."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Breakfast of tuna, coconut and onion with roshi, in guesthouses."
      },
      {
        "nome": "Garudhiya",
        "testo": "Tuna broth with rice, lime and chili."
      },
      {
        "nome": "Grilled fish",
        "testo": "Caught that day and grilled in guesthouses."
      },
      {
        "nome": "Short eats",
        "testo": "Fried gulha and bajiya in the island cafés, in the afternoon."
      }
    ],
    attenzioni: [
      "Friday is the day of rest: shops and cafés close from late morning, long ferries do not run and excursions may be reduced.",
      "Bikini only on the signposted bikini beach; elsewhere shoulders and knees covered, even for swimming.",
      "MTCC ferries are slow, with few departures and hardly ever on Fridays. Tickets are sold only at the terminal on the day, 30-45 minutes before: bring rufiyaa or small dollar bills and check times on mtcc.mv or with the guesthouse.",
      "Guesthouse excursions have fixed list prices: compare with others if possible.",
      "Since 1 January 2025 the green tax is $6 per person per night in guesthouses with up to 50 rooms and $12 in resorts: ask whether it is already in the price."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'A sand road among palm trees and low houses on a local island in the Maldives',
    immagine: '/images/maldive/male-sud-vaavu.jpg',
  },
  {
    slug: 'rasdhoo',
    paeseSlug: 'maldive',
    ordine: 3,
    nome: 'Rasdhoo and North Ari',
    tipologia: ['isole locali', 'immersioni', 'squali martello'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "A week in Ukulhas wasn't in the plan: last time, war broke out in the Middle East, our flights were cancelled and, sadly, we had to stay a week longer. Ukulhas is beautiful and very authentic, but different from Dhigurah: less tropical paradise and more of a lived-in island. Here we dived and got our certifications with Reef Rangers Ukulhas, who are excellent.",
    introduzione:
      "A small atoll at the northeast tip of Ari, with the local island of Rasdhoo, and the nearby Ukulhas and Thoddoo. The outer side of the atoll drops into the deep blue.",
    percheAndarci:
      'For the hammerhead sharks that come up from the depths at dawn, mainly from December to April, and for a local island with good dive centers.',
    cosaVedere: ['The hammerhead shark site at dawn (Hammerhead Point)', 'The reefs with mantas and turtles', 'The beach and gardens of Ukulhas and Thoddoo'],
    cosaFare: ['A dawn dive in the blue for experienced divers', 'Snorkeling on the lagoon reefs'],
    doveDormire: 'Guesthouses in Rasdhoo, Ukulhas and Thoddoo.',
    doveMangiare: 'Maldivian cooking and grilled fish in the guesthouses.',
    comeArrivare: 'Speedboat from Malé in about 1 to 1.5 hours ($40-60), or MTCC ferry in about 3 hours with a few departures a week.',
    comeSpostarsi: 'By boat with the dive centers.',
    periodoMigliore: 'December to April for the hammerhead sharks, peaking January to March.',
    costi: 'Dive $50-80 from the local centers.',
    erroriDaEvitare: ['Attempting the hammerhead shark dive without experience in the blue and at depth'],
    luoghi: [
      {
        "nome": "Hammerhead Point",
        "testo": "The site is Madivaru Corner, on the outer side of the atoll that drops into deep blue. At dawn scalloped hammerheads rise from the cooler water and are usually seen between 25 and 40 metres, along with grey reef sharks and eagle rays. It is a blue-water dive, with current, for experienced divers.",
        "come": "With a Rasdhoo dive centre, by boat at dawn.",
        "quando": "At dawn; possible all year, best December to April (peak January to March).",
        "tempo": "half a day",
        "costo": "Dive $50-80 from local centres (indicative, 2026)",
        "consiglio": "Do not attempt it without blue-water and deep-dive experience."
      },
      {
        "nome": "Ukulhas with Reef Rangers",
        "testo": "A local island in North Ari, beautiful and very authentic, more a lived-in island than a tropical paradise. We spent a week there: it was unplanned, because flights were cancelled when war broke out in the Middle East. We dived and got our certifications with Reef Rangers Ukulhas, who were excellent.",
        "come": "Speedboat from Malé, about 1-1.5 hours.",
        "tempo": "3-4 days, or more for a certification",
        "consiglio": "For diving and courses: Reef Rangers Ukulhas. Always keep a spare day before the flight."
      },
      {
        "nome": "Rasdhoo, Ukulhas and Thoddoo reefs",
        "testo": "Snorkelling on the lagoon reefs, with mantas and turtles. The beaches and gardens of Ukulhas and Thoddoo.",
        "come": "Boat excursions from guesthouses and dive centres.",
        "quando": "All year; December to April brings calmer seas and clearer water.",
        "tempo": "a full day"
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: speedboat from Malé to Rasdhoo, snorkelling on the reef",
          "Day 2: dawn dive at Hammerhead Point (experts) or snorkelling with mantas",
          "Day 3: Ukulhas and Thoddoo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rasdhoo",
        "perChi": "divers",
        "testo": "Local island with good dive centres and guesthouses. Handy for dawn with the hammerheads."
      },
      {
        "nome": "Ukulhas",
        "perChi": "those after a lived-in island",
        "testo": "Authentic, with diving and courses. Less tropical paradise than Dhigurah."
      },
      {
        "nome": "Thoddoo",
        "perChi": "green and quiet",
        "testo": "An agricultural island with gardens and fewer tourists."
      }
    ],
    sapori: [
      {
        "nome": "Grilled fish",
        "testo": "Fish of the day in guesthouses, with rice and sides."
      },
      {
        "nome": "Mas huni",
        "testo": "Tuna, coconut and onion with roshi at breakfast."
      },
      {
        "nome": "Tuna curry",
        "testo": "Tuna curry with rice, in guesthouses at dinner."
      },
      {
        "nome": "Thoddoo fruit",
        "testo": "Watermelon, papaya and other fruit grown on the island."
      }
    ],
    attenzioni: [
      "Flight disruptions: keep a spare day, because cancellations and delays can leave you stuck on the island.",
      "Hammerhead Point without blue-water and deep-dive experience is dangerous.",
      "Last dive at least 24 hours before the flight, seaplane included, and insurance that covers diving.",
      "On Fridays many shops close and excursions may be reduced."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'The white beach on the lagoon side of Kuramathi, in Rasdhoo atoll',
    immagine: '/images/maldive/rasdhoo.jpg',
  },
  {
    slug: 'ari-sud',
    paeseSlug: 'maldive',
    ordine: 4,
    nome: 'South Ari (Dhigurah and Dhangethi)',
    tipologia: ['isole locali', 'snorkeling', 'squali balena', 'mante'],
    giorniConsigliati: '4-5 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "Dhigurah is incredible, probably the most complete island in the whole Maldives, even if there are still some crowds. One thing I didn't like: you have no freedom in choosing excursions, you can only rely on your homestay or hotel, and prices are fixed like a cartel.",
    introduzione:
      'The southern part of Ari atoll, with the marine protected area between Maamigili and Dhigurah where young whale sharks feed along the outer reef all year.',
    percheAndarci:
      "It's the easiest place in the Maldives to swim with a whale shark, with local islands with long beaches and mantas at the cleaning stations.",
    cosaVedere: [
      'The whale shark along the outer reef',
      'The mantas at the cleaning stations, such as around Rangali',
      "Dhigurah's long bikini beach",
      "The lagoon's sandbanks",
    ],
    cosaFare: ['Snorkeling with the whale shark', 'Snorkeling or diving with the mantas', 'Sunset fishing on a dhoni'],
    doveDormire: 'Guesthouses in Dhigurah and Dhangethi; resorts on nearby islands.',
    doveMangiare: 'Maldivian cooking in the guesthouses, catch of the day.',
    comeArrivare: 'Speedboat from Malé in about 2 hours ($60-100), or a domestic flight to Maamigili and a boat.',
    comeSpostarsi: 'Boat excursions from the guesthouses and dive centers.',
    periodoMigliore: 'all year for whale sharks, with most sightings from August to November according to Visit Maldives and calmer seas from December to April; mantas on the western side in the dry season.',
    costi: 'Whale shark $60-120 per person; mantas and sandbanks $70-130.',
    erroriDaEvitare: [
      'Getting closer than 3 meters to the whale shark, touching it or using flash',
      "Choosing operators that don't respect the limits on boats and swimmers",
    ],
    luoghi: [
      {
        "nome": "Whale shark along the outer reef",
        "testo": "The South Ari Marine Protected Area (SAMPA), between Maamigili and Dhigurah, is one of the few places in the world where whale sharks, almost all young males, are seen all year. They swim along the outer reef, often near the surface: a mask and fins are enough. It is the easiest place in the Maldives to meet them, and boats coordinate by radio to find them.",
        "come": "Boat excursion from the guesthouses and dive centres of Dhigurah and Dhangethi.",
        "quando": "All year; according to Visit Maldives sightings peak from August to November, while the sea is calmer from December to April.",
        "tempo": "half a day",
        "costo": "$60-120 per person (indicative, 2026)",
        "consiglio": "Stay at least 3 metres from the body and 4 from the tail, do not touch it, do not swim in front of it and use no flash. Choose operators who respect limits on boats and swimmers."
      },
      {
        "nome": "Mantas at the cleaning stations",
        "testo": "Mantas visit the cleaning stations around Rangali, on the western side of the atoll. They can be seen snorkelling or diving.",
        "come": "By boat with guesthouses or dive centres.",
        "quando": "Dry season, from December.",
        "tempo": "half a day",
        "costo": "Mantas and sandbanks $70-130 (indicative, 2026)"
      },
      {
        "nome": "Dhigurah bikini beach",
        "testo": "Dhigurah is incredible, probably the most complete island in all the Maldives. A long beach, though there are still some people.",
        "come": "Speedboat from Malé in about 2 hours, usually two departures a day, or a domestic flight to Maamigili and a boat.",
        "tempo": "half a day",
        "costo": "Speedboat $60-100 each way (indicative, 2026)",
        "consiglio": "For excursions you have no freedom of choice: you depend on your homestay or hotel, and prices are fixed list prices."
      },
      {
        "nome": "Lagoon sandbanks",
        "testo": "Sandbars that emerge in the lagoon, with picnics and snorkelling.",
        "come": "Boat excursion from guesthouses.",
        "tempo": "half a day",
        "costo": "Sandbank with picnic $40-80 (indicative, 2026)"
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: speedboat from Malé to Dhigurah, beach and sunset",
          "Day 2: whale shark in the morning, sandbank in the afternoon"
        ]
      },
      {
        "titolo": "4 days",
        "tappe": [
          "Day 1: arrival at Dhigurah",
          "Day 2: whale shark",
          "Day 3: mantas snorkelling or diving",
          "Day 4: sandbank and sunset fishing, then return"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dhigurah",
        "perChi": "long beach",
        "testo": "Long, narrow island with a beach, guesthouses and homestays. There are some people, but it remains the most complete."
      },
      {
        "nome": "Dhangethi",
        "perChi": "smaller alternative",
        "testo": "Local island with guesthouses and dive centres, more compact."
      },
      {
        "nome": "Nearby resorts",
        "perChi": "those who want alcohol and comfort",
        "testo": "On nearby islands, with a speedboat transfer. Everything costs more, but alcohol is allowed."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Breakfast of tuna, coconut and onion with roshi."
      },
      {
        "nome": "Garudhiya",
        "testo": "Tuna broth with rice, lime and chili."
      },
      {
        "nome": "Grilled fish",
        "testo": "Caught that day, in guesthouses at dinner."
      },
      {
        "nome": "Short eats",
        "testo": "Gulha, bajiya and kavaabu in the afternoon."
      }
    ],
    attenzioni: [
      "Whale sharks: do not come within 3 metres, do not touch them and use no flash.",
      "Do not pick operators who ignore limits on boats and swimmers.",
      "Excursion prices are fixed list prices and you can only rely on your own accommodation: ask what is included.",
      "Last dive at least 24 hours before the flight, seaplane included."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'A whale shark swimming just below the surface, the encounter people go to South Ari for',
    immagine: '/images/maldive/ari-sud.jpg',
  },
  {
    slug: 'baa-hanifaru',
    paeseSlug: 'maldive',
    ordine: 5,
    nome: 'Baa and Hanifaru Bay',
    tipologia: ['riserva UNESCO', 'mante', 'snorkeling'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: false,
    introduzione:
      'An atoll that is a UNESCO biosphere reserve, with the small Hanifaru Bay where between June and November dozens, sometimes over a hundred, mantas gather to feed on plankton.',
    percheAndarci:
      "For one of the largest aggregations of mantas in the world, which you watch while snorkeling, with the peak between August and October.",
    cosaVedere: ['The mantas and the occasional whale sharks at Hanifaru', "The atoll's reefs and thila"],
    cosaFare: ['Snorkeling at Hanifaru with an authorized guide', "Dives at the atoll's sites outside the bay"],
    doveDormire: "Guesthouses in Dharavandhoo and Thulhaadhoo; resorts on the atoll's islands.",
    doveMangiare: 'Maldivian cooking in the guesthouses; resort restaurants.',
    comeArrivare: 'Seaplane from Malé (about 35-45 minutes) or a domestic flight to Dharavandhoo and a boat.',
    comeSpostarsi: 'By boat.',
    periodoMigliore: 'June to November, peak August to October in the weeks around the new and full moon.',
    costi: 'Bay entry about $20 per person per day, usually included in the excursion ($60-80 from local islands).',
    erroriDaEvitare: [
      'Expecting to dive with tanks: at Hanifaru only snorkeling is allowed',
      'Booking at the last minute in August-October: entries are limited',
    ],
    luoghi: [
      {
        "nome": "Hanifaru Bay",
        "testo": "A small funnel-shaped bay in the Baa UNESCO biosphere reserve (since 2011). During the southwest monsoon the currents trap plankton there and dozens, sometimes over a hundred, mantas arrive and feed in circles, sometimes with a whale shark or two. It can only be watched while snorkelling, in slots of about 45 minutes controlled by rangers.",
        "come": "By boat from Dharavandhoo or Thulhaadhoo with an authorised guide. Scuba diving is banned.",
        "quando": "June to November, peaking August to October in the weeks around new and full moon.",
        "tempo": "half a day",
        "costo": "Entry $20 per person per day for the atoll conservation fund, usually already included in the excursion (indicative, 2026)",
        "consiglio": "Book ahead in August to October: entries are limited. No flash and no touching the animals."
      },
      {
        "nome": "The atoll reefs and thilas",
        "testo": "Outside the bay, dives at the atoll sites, among submerged pinnacles (thila) and reefs. Scuba is allowed here and the cleaning stations draw mantas even when the bay is empty. It is the way to see Baa underwater without the slots and rules of Hanifaru.",
        "come": "With the dive centres of the local islands or resorts.",
        "tempo": "a full day"
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: seaplane or domestic flight to Dharavandhoo, then boat to the guesthouse",
          "Day 2: Hanifaru snorkelling with an authorised guide",
          "Day 3: snorkelling or dives outside the bay"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dharavandhoo",
        "perChi": "close to the bay",
        "testo": "Local island with an airport and guesthouses, the closest base to Hanifaru."
      },
      {
        "nome": "Thulhaadhoo",
        "perChi": "quiet island",
        "testo": "Local island with guesthouses, less touristy."
      },
      {
        "nome": "Baa resorts",
        "perChi": "those who want comfort",
        "testo": "On the atoll's islands, with a seaplane from Malé. Expensive but convenient for the mantas."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Tuna, coconut and onion with roshi."
      },
      {
        "nome": "Garudhiya",
        "testo": "Tuna broth with rice, lime and chili."
      },
      {
        "nome": "Grilled fish",
        "testo": "Caught that day, in guesthouses."
      },
      {
        "nome": "Resort buffets",
        "testo": "International and seafood cuisine, expensive à la carte: full board is often better value."
      }
    ],
    attenzioni: [
      "Only snorkelling is allowed at Hanifaru: no scuba.",
      "In August to October entries are limited: do not book at the last minute.",
      "Mantas are not guaranteed: they depend on tide, moon and plankton.",
      "The seaplane flies by day only and has baggage limits: check beforehand."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'A group of mantas seen from above swimming in turquoise water',
    immagine: '/images/maldive/baa-hanifaru.jpg',
  },
  {
    slug: 'fuvahmulah',
    paeseSlug: 'maldive',
    ordine: 6,
    nome: 'Fuvahmulah',
    tipologia: ['immersioni', 'squali tigre', 'isola locale'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "For diving I recommend fuvahmulahdive.com. It isn't a place for beginners: you need experience and you're often out in the blue. But if you love big pelagics it's incredible, especially for tiger sharks.",
    introduzione:
      'An atoll made up of a single island in the south of the Maldives, almost on the equator, with no lagoon, the deep ocean a few meters from the shore, freshwater lakes and dense vegetation.',
    percheAndarci:
      'For the tiger sharks, present all year, together with thresher, hammerhead and mola mola in some seasons: one of the best-known shark dives in the world.',
    cosaVedere: ['The tiger sharks at the Tiger Zoo', "The inland lakes and Thoondu beach, with white pebble sand"],
    cosaFare: ['Dives with tiger sharks for certified divers', 'A bike ride around the island'],
    doveDormire: 'Guesthouses and small hotels tied to the dive centers.',
    doveMangiare: 'Maldivian cooking in the guesthouses.',
    comeArrivare: 'Domestic flight from Malé in about 1 hour 20-25 minutes.',
    comeSpostarsi: 'Bike, scooter, taxi.',
    periodoMigliore: 'all year; the sea can be rough from May to November.',
    erroriDaEvitare: ['Going without experience: currents and ocean conditions require an advanced certification and a good number of dives'],
    luoghi: [
      {
        "nome": "Tiger Zoo, the tiger sharks",
        "testo": "The tiger shark dive site, with sharks present all year, along with thresher and hammerhead sharks and mola mola in some seasons. It is not a place for beginners: you need experience and are often out in the blue, but if you love big pelagics it is incredible.",
        "come": "With a dive centre on the island. I recommend fuvahmulahdive.com.",
        "quando": "All year; the sea can be rough from May to November.",
        "tempo": "a full day",
        "consiglio": "You need an advanced certification and a good number of dives: currents and ocean conditions are unforgiving."
      },
      {
        "nome": "Inland lakes and Thoondu beach",
        "testo": "The island has two freshwater lakes, rare in the Maldives: Bandaara Kilhi, the larger, with the marshes and mud of Koda Kilhi, and Dhadimagi Kilhi, with the Fuvahmulah Nature Park, a wooden boardwalk and herons. In the north, Thoondu beach is made of small smooth white pebbles instead of sand, and it is a protected area.",
        "come": "By bike, scooter or taxi on the island.",
        "tempo": "half a day"
      },
      {
        "nome": "Island bike ride",
        "testo": "The atoll is a single island, without a lagoon, with deep ocean a few metres from shore. A bike ride lets you see all of it.",
        "come": "Bike rental in town.",
        "tempo": "half a day"
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: domestic flight from Malé (1 hour 20), island ride",
          "Day 2: dives with tiger sharks",
          "Day 3: inland lakes and Thoondu beach"
        ]
      }
    ],
    zone: [
      {
        "nome": "Guesthouses tied to dive centres",
        "perChi": "divers",
        "testo": "Simple accommodation, often booked together with the dives. The island is small, so you get around by bike or scooter."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Tuna, coconut and onion with roshi at breakfast."
      },
      {
        "nome": "Garudhiya",
        "testo": "Tuna broth with rice, lime and chili."
      },
      {
        "nome": "Fish of the day",
        "testo": "Grilled or in curry at guesthouses."
      },
      {
        "nome": "Island fruit",
        "testo": "Papaya, banana and coconut grown in the island's fields, with its dense vegetation."
      }
    ],
    attenzioni: [
      "Going without experience: currents and ocean conditions call for an advanced certification and a good number of dives.",
      "Last dive at least 24 hours before the flight, and insurance that covers diving.",
      "The sea can be rough from May to November.",
      "The domestic flight has baggage limits: check before leaving."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'A tiger shark swimming over the sandy seabed',
    immagine: '/images/maldive/fuvahmulah.jpg',
  },
]
