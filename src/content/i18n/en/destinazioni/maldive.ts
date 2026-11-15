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
    miaEsperienza:
      "Malé and Hulhumalé were my arrival and departure point in the Maldives, between Velana airport and the speedboats to the islands.",
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
    comeArrivare: "Velana airport is on Hulhulé island, opposite Malé. To the capital there is the public ferry, 10-15 minutes, roughly every 15 minutes from 5am to midnight, for about $1 in rufiyaa (about €1); otherwise the bus over the Sinamalé bridge (MVR 10-15) or a taxi (about MVR 70, about €4). Hulhumalé is about ten minutes away by bus (MVR 10-20) or taxi (about MVR 80, about €4.50). Speedboats and seaplanes to the other islands leave from the desks in the arrivals hall.",
    comeSpostarsi: 'On foot and by taxi.',
    periodoMigliore: 'all year.',
    costi: "Ferry to Malé about $1, bus MVR 10-20, taxi MVR 70-80 (about €4-4.50), 2026. Budget: about €70-100 a day with a guesthouse in Hulhumalé, local cafés and buses. Mid-range: €120-200 with a seafront hotel and taxis. High: over €250 with the best hotels in Hulhumalé and restaurant dinners.",
    erroriDaEvitare: ['Visiting the mosques during prayer or without covered clothing', 'Looking for alcohol: Malé and Hulhumalé are inhabited islands, and the ban applies there'],
    luoghi: [
      {
        "nome": "Malé fish market",
        "costo": "Free entry.",
        "testo": "On Malé's northern waterfront the dhonis unload tuna and reef fish, which are cut on the counters in front of onlookers. It is the most genuine spot in the capital: strong smells, wet floors, fishermen haggling. Next door is the fruit and vegetable market, with coconuts, chillies and packets of dried fish.",
        "come": "From the airport ferry terminal, a few minutes on foot.",
        "quando": "From early afternoon, when the boats come back; slower on Fridays because of prayers. No fixed hours.",
        "tempo": "1 hour",
        "consiglio": "Always ask permission before photographing people."
      },
      {
        "nome": "Friday Mosque (Hukuru Miskiy)",
        "lng": 73.5125,
        "lat": 4.17806,
        "testo": "Built in 1658 under Sultan Ibrahim Iskandar, it is the oldest mosque in Malé: coral blocks fitted together without mortar and carved with patterns and inscriptions, with lacquered wooden ceilings and beams. Next to it are the cemetery with coral headstones and the Munnaaru minaret. The coral stone mosques of the Maldives are on the UNESCO tentative list.",
        "come": "On foot from central Malé. Non-Muslims need permission to go inside: ask the mosque staff or the Ministry of Islamic Affairs; it can be seen well from outside anyway.",
        "quando": "Outside prayer times, avoiding Fridays.",
        "tempo": "30 minutes",
        "consiglio": "Cover shoulders and knees; no entry during prayer."
      },
      {
        "nome": "Hulhumalé beach",
        "costo": "Public beach, free.",
        "lng": 73.54,
        "lat": 4.2125,
        "testo": "The city beach of the artificial island next to the airport, with a waterfront and restaurants. Handy for the first or last night.",
        "come": "From Velana by bus or taxi, 10-15 minutes.",
        "quando": "Sunset and evening.",
        "tempo": "an evening",
        "consiglio": "It is an inhabited island: local rules apply, so covered clothing and no alcohol."
      },
      {
        "nome": "National Museum and Sultan Park",
        "testo": "Opened in 1952, the museum holds artefacts from the Buddhist era to the Islamic sultans: carved stones, weapons, clothing and court objects. It stands in Sultan Park, part of the 17th-century royal palace compound, which burned down in 1968. The park, with trees and shaded benches, is one of the few green corners of the centre.",
        "come": "On foot from central Malé, next to the Grand Friday Mosque.",
        "quando": "In the morning, before the hottest hours.",
        "tempo": "1-1.5 hours",
        "lat": 4.177283,
        "lng": 73.509979,
        "consiglio": "Ask about hours and tickets on site: they change and are not reliably published."
      },
      {
        "nome": "Grand Friday Mosque (Islamic Centre)",
        "testo": "Opened in November 1984, with its large golden dome and 41-metre minaret it is Malé's most recognisable landmark. It was built with funds from several Islamic countries, listed on a plaque at the entrance.",
        "come": "On foot in the centre, opposite Sultan Park.",
        "quando": "Outside prayer times, never on Friday at midday.",
        "tempo": "20-30 minutes",
        "consiglio": "Shoulders and knees covered."
      },
      {
        "nome": "Muliaage",
        "testo": "The official residence of the president, built between 1914 and 1919 for the heir to the throne, in the style of colonial Ceylon bungalows. It sits next to the old Friday Mosque and the Munnaaru minaret, in the historic core of the city.",
        "come": "On foot; it can only be seen from outside.",
        "tempo": "15 minutes",
        "lat": 4.1775,
        "lng": 73.5125
      },
      {
        "nome": "Artificial Beach",
        "testo": "The small beach built at the eastern corner of Malé, sheltered by breakwaters. In the evening it fills with families and young people swimming fully clothed: the best place to see the city unwind.",
        "come": "On foot, at the eastern end of the seafront.",
        "quando": "Late afternoon and evening.",
        "tempo": "30 minutes-1 hour",
        "costo": "Free.",
        "lat": 4.17426,
        "lng": 73.51856,
        "consiglio": "Swim in a T-shirt and long shorts: no bikinis."
      },
      {
        "nome": "Sinamalé Bridge",
        "testo": "Opened on 30 August 2018, it is the first bridge between islands in the Maldives: 2.1 km linking Malé, the airport island and Hulhumalé, with separate pedestrian lanes. From the top you see the lagoon, the harbour and the dense skyline of the capital.",
        "come": "On foot from the east side of Malé, or by bus or taxi.",
        "quando": "Early morning or at sunset, when the sun is low.",
        "tempo": "about 30 minutes on foot",
        "lat": 4.17294,
        "lng": 73.52449
      },
      {
        "nome": "Tsunami Monument",
        "testo": "On Malé's south-western seafront, it remembers the victims of the 26 December 2004 tsunami, which hit almost every atoll. A short stop on the walk towards the Villimalé ferry terminal.",
        "come": "On foot along the southern seafront.",
        "tempo": "15 minutes",
        "costo": "Free.",
        "lat": 4.17156,
        "lng": 73.50109
      },
      {
        "nome": "Villimalé (Villingili)",
        "testo": "An island 2 km west of Malé, now the city's fifth district. In 1973 it became the second resort in the Maldives, then a residential area: it is greener and quieter than the capital, with a public beach.",
        "come": "Public ferry from the Villingili terminal on the west side of Malé, running 24 hours a day.",
        "quando": "Morning or late afternoon.",
        "tempo": "half a day",
        "lat": 4.17361,
        "lng": 73.48472,
        "consiglio": "It is an inhabited island: cover up on the beach."
      },
      {
        "nome": "Velana-Malé ferry",
        "testo": "The cheapest and most Maldivian way to reach the capital: a boat crossing the channel between the airport island and Malé with commuters and workers. In ten minutes you go from the terminal to the northern seafront, near the fish market.",
        "come": "The jetty is in front of Velana airport arrivals; pay in cash.",
        "tempo": "10-15 minutes",
        "costo": "About $1 in rufiyaa (about €1), 2026.",
        "orari": "Roughly every 15 minutes, from 5am to midnight.",
        "lat": 4.19167,
        "lng": 73.52889
      },
      {
        "nome": "Banana Reef",
        "testo": "In North Malé, it is one of the first dive sites opened in the Maldives and is now a protected marine area. Shaped like a banana, it has walls, caves and overhangs with schools of fish, reef sharks and soft corals.",
        "come": "With a dive centre in Malé, Hulhumalé or the nearby resorts.",
        "quando": "All year; better visibility from December to April.",
        "tempo": "half a day",
        "costo": "Dive $50-80 with local centres, about €43-70 (2026)."
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: arrive at Velana, bus to Hulhumalé, beach and dinner on the seafront",
          "Day 2: Malé on foot between the National Museum, mosques and markets, then the ferry to Villimalé and sunset at Artificial Beach"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Hulhumalé and the Sinamalé bridge at sunset",
          "Day 2: Malé, from the fish market to the Friday Mosque and Sultan Park",
          "Day 3: a dive at Banana Reef or a day at a nearby resort"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hulhumalé",
        "perChi": "first or last night",
        "testo": "10-15 minutes from Velana, with hotels and guesthouses from $60 to $150 and waterfront restaurants. Modern and a bit anonymous.",
        "fascia": "50-130 €"
      },
      {
        "nome": "Malé",
        "perChi": "those who want the city",
        "testo": "A very dense capital, noisy and without a beach. Useful for half a day, less for sleeping."
      },
      {
        "nome": "Villimalé",
        "perChi": "those who want quiet near the capital",
        "testo": "Residential island 2 km from Malé, with a public beach and a 24-hour ferry. Greener and quieter, but further from the airport."
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
    gite: [
      {
        "nome": "Maafushi",
        "distanza": "about 45 minutes by speedboat",
        "come": "Shared speedboat from Malé or the airport, $25-40 one way (about €22-35).",
        "testo": "The most developed local island in South Malé, with a bikini beach and reefs with turtles. Better with a night, but it works as a day trip too."
      },
      {
        "nome": "A day at a resort",
        "distanza": "20-60 minutes by speedboat",
        "come": "Resort day pass with transfer, $100-200 with lunch (about €85-170).",
        "testo": "To see a house reef and a resort beach without staying there. Alcohol is sometimes included."
      },
      {
        "nome": "Guraidhoo",
        "distanza": "31 km, about 45 minutes by speedboat",
        "come": "Shared speedboat, three departures a day; the MTCC ferry takes about 2 hours 15.",
        "testo": "A smaller local island than Maafushi, with the channels of the Guraidhoo Kandu protected marine area."
      }
    ],
    faq: [
      {
        "domanda": "Is Malé worth visiting?",
        "risposta": "For half a day, yes: the fish market, Friday Mosque, National Museum and seafront can be seen on foot in a few hours. For sleeping, Hulhumalé is better."
      },
      {
        "domanda": "Where to sleep the night before or after a flight?",
        "risposta": "In Hulhumalé, 10-15 minutes from the airport, with hotels and guesthouses from $60 to $150. Anyone landing in the evening and heading to a distant atoll almost always has to sleep here, because seaplanes only fly by day."
      },
      {
        "domanda": "How do you get from the airport to Malé?",
        "risposta": "By public ferry, 10-15 minutes for about $1, or by bus or taxi over the Sinamalé bridge."
      },
      {
        "domanda": "Can you drink alcohol in Malé and Hulhumalé?",
        "risposta": "No. They are inhabited islands, and alcohol is neither sold nor drunk; importing it is also banned. It is only available at resorts and on safari boats."
      },
      {
        "domanda": "How should you dress in Malé?",
        "risposta": "Shoulders and knees covered in town and in mosques. On the beach, in Hulhumalé as at Artificial Beach, no bikinis: T-shirt and shorts."
      },
      {
        "domanda": "Can you go inside the old Friday Mosque?",
        "risposta": "Non-Muslims need a permit, requested from the mosque staff or the Ministry of Islamic Affairs. The courtyard, coral cemetery and minaret can be seen from outside anyway."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: "Malé seen from above, with the harbor full of boats and the colorful buildings of the capital",
    immagine: '/images/maldive/male-dall-alto.jpg',
  },
  {
    slug: 'male-sud-vaavu',
    paeseSlug: 'maldive',
    ordine: 2,
    nome: 'South Malé and Vaavu',
    tipologia: ['isole locali', 'snorkeling', 'squali'],
    giorniConsigliati: '3-5 days',
    visitataPersonalmente: true,
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
    comeArrivare: "Shared speedboats leave Velana or Malé at fixed times: about 45 minutes to Maafushi and Guraidhoo, $25-40 one way (about €22-35), longer to Fulidhoo and Vaavu. Book them through the guesthouse, which usually arranges the pick-up at arrivals. The public MTCC ferries leave from the Villingili terminal in Malé, cost $2-3, take 1.5 to 3 hours, have few departures and do not run on Fridays.",
    comeSpostarsi: 'Boat excursions organized by the guesthouses.',
    periodoMigliore: 'December to April for a calm sea; from May to November speedboats are bumpier.',
    costi: "Speedboat $25-40 one way (about €22-35), MTCC ferry $2-3, dive $50-80 (about €43-70), 2026. Budget: about €80-110 a day with a simple guesthouse, meals there and one excursion. Mid-range: €150-250 with a boutique guesthouse and daily excursions. High: over €300 with daily dives and a resort day.",
    erroriDaEvitare: ["Expecting a quiet village in Maafushi: it's heavily built up and crowded", 'Counting on ferries on Friday'],
    luoghi: [
      {
        "nome": "Maafushi and its bikini beach",
        "lng": 73.49001,
        "lat": 3.94116,
        "testo": "The most developed local island near Malé, with a signposted bikini beach, many guesthouses and nearby reefs where turtles are seen.",
        "come": "Shared speedboat from Malé in about 45 minutes. The MTCC ferry via Gulhi usually leaves in the afternoon, Saturday to Thursday, and takes 1.5 to 2 hours.",
        "quando": "All year; December to April the sea is calmer.",
        "tempo": "2-3 days",
        "costo": "Shared speedboat $20-40 each way; MTCC ferry $2-3 (indicative, 2026)",
        "consiglio": "It is heavily built-up and crowded: not the quiet village you might expect."
      },
      {
        "nome": "Fulidhoo",
        "costo": "MTCC ferry $2-3; speedboat to be arranged with the guesthouse (2026).",
        "lng": 73.41472,
        "lat": 3.68056,
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
      },
      {
        "nome": "Guraidhoo",
        "testo": "A local island in South Malé, about 31 km from the capital, with around 3,000 residents. It is smaller and less built up than Maafushi, known for snorkelling with turtles, sandbanks and a few waves for surfing.",
        "come": "Shared speedboat in about 45 minutes, three departures a day; MTCC ferry in about 2 hours 15.",
        "quando": "December-April for calm seas.",
        "tempo": "2-3 days",
        "costo": "Speedboat $25-40 one way, about €22-35 (2026).",
        "lat": 3.9,
        "lng": 73.46833
      },
      {
        "nome": "Gulhi",
        "testo": "A small local island between Malé and Maafushi, on the MTCC ferry route. It has fewer places to stay and fewer people than its neighbour, but the same trips to turtles, sandbanks and resorts.",
        "come": "Shared speedboat from Malé, or the MTCC ferry to Maafushi, which stops here.",
        "tempo": "2-3 days",
        "costo": "Speedboat $25-40, about €22-35; ferry $2-3 (2026).",
        "lat": 3.98889,
        "lng": 73.50889
      },
      {
        "nome": "Guraidhoo Kandu",
        "testo": "A protected marine area in South Malé with two main channels, Lhosfushi Kandu and Guraidhoo Kandu, and several dive sites. With an incoming current come reef sharks, eagle rays and big schools of fish.",
        "come": "With the dive centres on Guraidhoo and Maafushi.",
        "quando": "December-April, with an incoming current.",
        "tempo": "half a day",
        "costo": "Dive $50-80, about €43-70 (2026).",
        "consiglio": "A channel with current: experience needed."
      },
      {
        "nome": "Kandooma Thila",
        "testo": "A submerged pinnacle in South Malé, near Guraidhoo, swept by currents. It is known for grey reef sharks, eagle rays, jacks and soft corals on its walls.",
        "come": "By boat with dive centres on Guraidhoo, Maafushi and the nearby resorts.",
        "tempo": "half a day",
        "costo": "Dive $50-80, about €43-70 (2026).",
        "consiglio": "For divers with an advanced certification."
      },
      {
        "nome": "Fotteyo Kandu",
        "testo": "On the eastern rim of Vaavu, one of the most famous channels in the Maldives: caves and overhangs covered in colourful soft corals, grey reef sharks and eagle rays when the current comes in from the ocean.",
        "come": "With dive centres on Fulidhoo, Keyodhoo and Thinadhoo, or on a liveaboard.",
        "quando": "December-April.",
        "tempo": "half a day",
        "consiglio": "Strong current: experienced divers only."
      },
      {
        "nome": "Felidhoo",
        "testo": "The capital of Vaavu atoll, on the eastern side, close to the channels. It is an island of everyday life, with a harbour, school and mosque, still barely touched by tourism.",
        "come": "Speedboat from Malé or the MTCC ferry to Vaavu.",
        "tempo": "half a day",
        "lat": 3.47167,
        "lng": 73.54722
      },
      {
        "nome": "Thinadhoo (Vaavu)",
        "testo": "A small local island in Vaavu next to Felidhoo, with a few guesthouses. It is a quiet base for diving the atoll's eastern channels.",
        "come": "Speedboat from Malé, arranged by the guesthouse.",
        "tempo": "2-3 days",
        "lat": 3.48889,
        "lng": 73.53917
      },
      {
        "nome": "MTCC ferry to Maafushi",
        "testo": "The public ferry is slow but costs a fraction of the speedboat and travels with locals, among rice sacks and scooters. On the way to Maafushi it stops at Gulhi.",
        "come": "From the Villingili terminal in Malé; buy the ticket in cash on the day, 30-45 minutes before.",
        "tempo": "1.5-2 hours",
        "costo": "$2-3, about €2-3 (2026).",
        "orari": "Usually in the afternoon, Saturday to Thursday; never on Fridays."
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: speedboat to Maafushi or Guraidhoo, bikini beach and sunset",
          "Day 2: snorkelling with turtles and a sandbank, then back to Malé"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Days 1-2: Guraidhoo or Maafushi, turtles and a dive at Guraidhoo Kandu",
          "Day 3: transfer to Fulidhoo, nurse sharks at the jetty in the evening",
          "Day 4: Fotteyo Kandu or snorkelling, Alimatha night dive",
          "Day 5: back to Malé, never by ferry on a Friday"
        ]
      }
    ],
    zone: [
      {
        "nome": "Maafushi",
        "perChi": "services and choice",
        "testo": "The most developed, with many guesthouses and restaurants. Crowded and built-up.",
        "fascia": "50-170 €"
      },
      {
        "nome": "Guraidhoo and Gulhi",
        "perChi": "calmer",
        "testo": "Smaller, quieter islands in the same atoll."
      },
      {
        "nome": "Fulidhoo",
        "perChi": "little touristed",
        "testo": "In Vaavu, quiet and with few facilities.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Felidhoo, Thinadhoo and Keyodhoo",
        "perChi": "divers in Vaavu",
        "testo": "Islands on Vaavu's eastern side, close to the channels. Few places to stay and no nightlife."
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
    gite: [
      {
        "nome": "A day at a nearby resort",
        "distanza": "10-30 minutes by boat from Maafushi",
        "come": "Guesthouse excursion, $100-200 with lunch (about €85-170).",
        "testo": "House reef, postcard beach and sometimes alcohol included: a taste of resort life while staying on a local island."
      },
      {
        "nome": "Sandbank picnic",
        "distanza": "15-30 minutes by boat",
        "come": "Boat trip from the guesthouse, $40-80 (about €35-70).",
        "testo": "A strip of sand in the middle of the lagoon, with snorkelling on the nearby reef. No shade: bring a towel, water and sunscreen."
      },
      {
        "nome": "Alimatha by night",
        "distanza": "from Fulidhoo, by boat",
        "come": "With Vaavu's dive centres; dive $50-80 (about €43-70).",
        "testo": "The night dive with dozens of nurse sharks, one of the most famous in the Maldives."
      }
    ],
    faq: [
      {
        "domanda": "Maafushi or Fulidhoo?",
        "risposta": "Maafushi for the choice of guesthouses, restaurants and trips; Fulidhoo for a small, quiet village. Many split their stay between the two."
      },
      {
        "domanda": "How much does it cost to get to Maafushi?",
        "risposta": "The shared speedboat costs $25-40 one way and takes about 45 minutes. The MTCC ferry costs $2-3 but takes 1.5-2 hours and does not run on Fridays."
      },
      {
        "domanda": "Can you drink alcohol on Maafushi?",
        "risposta": "Not on the island. Some bar boats are anchored outside the lagoon, and guesthouses run days at nearby resorts, where alcohol is allowed."
      },
      {
        "domanda": "Where can you see nurse sharks?",
        "risposta": "At Alimatha in Vaavu on the night dive, and often in the evening at the Fulidhoo jetty, where they come with rays for fish scraps."
      },
      {
        "domanda": "Can you travel on a Friday?",
        "risposta": "Speedboats run on reduced schedules, MTCC ferries on long routes do not. Shops and cafés close from late morning for prayers."
      },
      {
        "domanda": "Can you swim in a bikini?",
        "risposta": "Only on the signposted bikini beach. Elsewhere, even in the water, shoulders and knees covered."
      }
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
    comeArrivare: "Shared speedboats leave Velana for Rasdhoo, Ukulhas and Thoddoo, taking about 1 to 1.5 hours, for $40-70 per person one way (about €35-60). There are usually one or two departures a day, booked through the guesthouse, which also arranges the pick-up at arrivals. The MTCC ferry takes about 3 hours, runs a few times a week and not on Fridays. Between islands you travel with the dive centres' boats.",
    comeSpostarsi: 'By boat with the dive centers.',
    periodoMigliore: 'December to April for the hammerhead sharks, peaking January to March.',
    costi: "Dive $50-80 with local centres (about €43-70), speedboat $40-70 one way (about €35-60), 2026. Budget: about €80-110 a day with a guesthouse, meals there and snorkelling. Mid-range: €150-250 with two dives a day. High: over €300 with certification courses or a resort day at Kuramathi.",
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
        "lng": 72.86444,
        "lat": 4.21389,
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
      },
      {
        "nome": "Rasdhoo island",
        "testo": "The main local island of the small Rasdhoo atoll, set apart from Ari at its north-eastern tip. You can walk around it quickly, past low houses, the mosque and the harbour, and it has several dive centres facing the atoll's outer side.",
        "come": "Shared speedboat from Velana, about 1-1.5 hours.",
        "quando": "December-April for calm seas and hammerheads.",
        "tempo": "3-4 days",
        "costo": "Speedboat $40-70 one way, about €35-60 (2026).",
        "lat": 4.26278,
        "lng": 72.99139
      },
      {
        "nome": "Kuramathi",
        "testo": "A long, narrow resort island in the same small atoll, a short hop from Rasdhoo, with a white beach on the lagoon side. From Rasdhoo it is the easiest choice for a day with a house reef, restaurants and alcohol.",
        "come": "Day pass arranged by the guesthouse, with a boat.",
        "tempo": "a day",
        "costo": "Resort day $100-200 with lunch, about €85-170 (2026).",
        "lat": 4.25861,
        "lng": 72.98
      },
      {
        "nome": "Thoddoo",
        "testo": "An isolated island about 20 km from Rasdhoo, with around 1,900 residents in 2022 and a farming economy: it is the largest watermelon producer in the Maldives and grows papaya, mango, chillies and passion fruit. One part of the island has Buddhist ruins.",
        "come": "Shared speedboat from Velana or a boat from Rasdhoo.",
        "tempo": "2-3 days",
        "lat": 4.43694,
        "lng": 72.95944
      },
      {
        "nome": "Mathiveri",
        "testo": "A small local island on the western side of North Ari, with a few guesthouses and nearby reefs. It is quieter than Ukulhas and handy for the dive sites in the middle of the atoll.",
        "come": "Speedboat from Velana, arranged by the guesthouse.",
        "tempo": "2-3 days",
        "lat": 4.19028,
        "lng": 72.74722
      },
      {
        "nome": "Maaya Thila",
        "testo": "A small round thila in North Ari, a protected marine area and one of the most famous sites in the Maldives. Whitetip sharks, turtles, morays and stonefish; at night the predators hunt all around it.",
        "come": "By boat with dive centres on Ukulhas, Mathiveri and Rasdhoo.",
        "quando": "All year; also famous as a night dive.",
        "tempo": "half a day",
        "costo": "Dive $50-80, about €43-70 (2026)."
      },
      {
        "nome": "Fish Head (Mushimasmingili Thila)",
        "testo": "A protected thila in North Ari, known for the grey reef sharks patrolling its edge and for big schools of fusiliers and jacks. The walls have overhangs and small caves.",
        "come": "With the atoll's dive centres.",
        "tempo": "half a day",
        "costo": "Dive $50-80, about €43-70 (2026).",
        "consiglio": "Often with current: an advanced certification is better."
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: speedboat from Velana to Rasdhoo, a walk round the island and snorkelling on the reef",
          "Day 2: dawn at Hammerhead Point (experienced divers) or a day at Kuramathi"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Days 1-2: Rasdhoo, hammerheads at dawn and the lagoon reef",
          "Days 3-4: Ukulhas, dives at Maaya Thila and Fish Head",
          "Day 5: Thoddoo and its farms, then back to Malé"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rasdhoo",
        "perChi": "divers",
        "testo": "Local island with good dive centres and guesthouses. Handy for dawn with the hammerheads.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Ukulhas",
        "perChi": "those after a lived-in island",
        "testo": "Authentic, with diving and courses. Less tropical paradise than Dhigurah.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Thoddoo",
        "perChi": "green and quiet",
        "testo": "An agricultural island with gardens and fewer tourists.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Mathiveri",
        "perChi": "divers who want quiet",
        "testo": "A small island on the west side of North Ari, near the thilas in the middle of the atoll. Few places to stay."
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
    gite: [
      {
        "nome": "Kuramathi",
        "distanza": "a few minutes by boat from Rasdhoo",
        "come": "Day pass through the guesthouse, $100-200 with lunch (about €85-170).",
        "testo": "A resort day with a house reef and lagoon beach, right next to the local island."
      },
      {
        "nome": "Ukulhas",
        "distanza": "about 15 km from Rasdhoo",
        "come": "Dive centre boat or shared speedboat.",
        "testo": "A local island with a long beach and a well-known commitment to waste management, good for diving and courses."
      },
      {
        "nome": "Thoddoo",
        "distanza": "about 20 km from Rasdhoo",
        "come": "Private boat or an excursion arranged by the guesthouse.",
        "testo": "Watermelon and papaya fields, a beach and a farming rhythm you won't find on other islands."
      }
    ],
    faq: [
      {
        "domanda": "When can you see hammerheads at Rasdhoo?",
        "risposta": "At dawn on the atoll's outer side, possible all year but more frequent from December to April, peaking between January and March."
      },
      {
        "domanda": "Do you need experience for Hammerhead Point?",
        "risposta": "Yes: it is a blue-water dive in current, usually at 25-40 metres. You need an advanced certification and to be comfortable diving with no reference."
      },
      {
        "domanda": "Rasdhoo or Ukulhas?",
        "risposta": "Rasdhoo for hammerheads at dawn; Ukulhas for a more lived-in island, its beach and the sites in central North Ari such as Maaya Thila."
      },
      {
        "domanda": "How much does a dive cost?",
        "risposta": "With local island centres $50-80 (about €43-70), with or without equipment depending on the centre. Multi-dive packages cost less per dive."
      },
      {
        "domanda": "Can you get certified here?",
        "risposta": "Yes, the centres on Rasdhoo and Ukulhas run beginner and advanced courses. Allow a few extra days and a spare day before your flight."
      },
      {
        "domanda": "How long should you wait between your last dive and flying?",
        "risposta": "At least 24 hours, seaplanes included."
      }
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
    comeArrivare: "From Velana the shared speedboat to Dhigurah and Dhangethi takes 1.5 to 2 hours across open sea and costs roughly $50-70 per person one way (about €43-60), with two departures a day (around 10:45-11am and 4pm) and different times on Fridays. Book it through the guesthouse. Alternatively, there is a domestic flight to Maamigili followed by a boat. If you land in the evening, sleep in Hulhumalé and leave the next morning.",
    comeSpostarsi: 'Boat excursions from the guesthouses and dive centers.',
    periodoMigliore: 'all year for whale sharks, with most sightings from August to November according to Visit Maldives and calmer seas from December to April; mantas on the western side in the dry season.',
    costi: "Whale shark $60-120 per person (about €52-105); mantas and sandbank $70-130 (about €60-110); speedboat $50-70 one way; dive $50-80 (2026). Budget: about €80-120 a day with a guesthouse and one excursion. Mid-range: €150-250 with a boutique guesthouse and daily excursions. High: from €400 at a nearby resort.",
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
        "costo": "$60-120 per person, about €52-105 (2026)",
        "consiglio": "Stay at least 3 metres from the body and 4 from the tail, do not touch it, do not swim in front of it and use no flash. Choose operators who respect limits on boats and swimmers."
      },
      {
        "nome": "Mantas at the cleaning stations",
        "testo": "Mantas visit the cleaning stations around Rangali, on the western side of the atoll. They can be seen snorkelling or diving.",
        "come": "By boat with guesthouses or dive centres.",
        "quando": "Dry season, from December.",
        "tempo": "half a day",
        "costo": "Mantas and sandbank $70-130, about €60-110 (2026)"
      },
      {
        "nome": "Dhigurah bikini beach",
        "lng": 72.92389,
        "lat": 3.52639,
        "testo": "Dhigurah is incredible, probably the most complete island in all the Maldives. A long beach, though there are still some people.",
        "come": "Speedboat from Malé in about 2 hours, usually two departures a day, or a domestic flight to Maamigili and a boat.",
        "tempo": "half a day",
        "costo": "Shared speedboat $50-70 one way, about €43-60 (2026)",
        "consiglio": "For excursions you have no freedom of choice: you depend on your homestay or hotel, and prices are fixed list prices."
      },
      {
        "nome": "Lagoon sandbanks",
        "testo": "Sandbars that emerge in the lagoon, with picnics and snorkelling.",
        "come": "Boat excursion from guesthouses.",
        "tempo": "half a day",
        "costo": "Sandbank picnic $40-80, about €35-70 (2026)"
      },
      {
        "nome": "Dhangethi",
        "testo": "A smaller, more compact local island than Dhigurah, to the north along the same reef. It has guesthouses, dive centres and easy access to atoll sites such as Broken Rock and Kuda Rah Thila.",
        "come": "Shared speedboat from Velana, about 1.5-2 hours.",
        "tempo": "2-3 days",
        "costo": "Speedboat $50-70 one way, about €43-60 (2026).",
        "lat": 3.60746,
        "lng": 72.95561
      },
      {
        "nome": "Maamigili",
        "testo": "The island with South Ari's domestic airport, on the western edge of the whale shark protected area. It is mainly a transit point: you land and continue by boat to Dhigurah, Dhangethi or the resorts.",
        "come": "Domestic flight from Malé, then a boat.",
        "tempo": "a stopover",
        "lat": 3.47522,
        "lng": 72.83507
      },
      {
        "nome": "Kuda Rah Thila",
        "testo": "A protected thila in South Ari, known for walls covered in soft corals and small caves, with schools of fish, turtles and sometimes grey reef sharks. The top is deep: it is a dive for certified divers.",
        "come": "With the dive centres on Dhangethi and Dhigurah.",
        "tempo": "half a day",
        "costo": "Dive $50-80, about €43-70 (2026)."
      },
      {
        "nome": "Broken Rock",
        "testo": "A pinnacle in South Ari split by a canyon you can swim through, among soft corals, sea fans and reef fish. One of the most photographed sites in the atoll.",
        "come": "With the dive centres on Dhangethi and Dhigurah.",
        "tempo": "half a day",
        "costo": "Dive $50-80, about €43-70 (2026).",
        "consiglio": "Keep clear of the coral in the canyon: you need good buoyancy and finning."
      },
      {
        "nome": "Mahibadhoo",
        "testo": "The capital of South Ari, an island 2.4 km by 1.2 with about 2,500 people living from fishing, tourism and public services. More village life than beach: harbour, mosques and local cafés.",
        "come": "Boat from Dhangethi or Dhigurah, or speedboat from Velana.",
        "tempo": "half a day",
        "lat": 3.75752,
        "lng": 72.96861
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
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: speedboat from Velana to Dhigurah, bikini beach and sunset on the west side",
          "Day 2: whale shark on the outer reef, afternoon on the beach",
          "Day 3: mantas and sandbank, or a dive at Broken Rock"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dhigurah",
        "perChi": "long beach",
        "testo": "Long, narrow island with a beach, guesthouses and homestays. There are some people, but it remains the most complete.",
        "fascia": "50-170 €"
      },
      {
        "nome": "Dhangethi",
        "perChi": "smaller alternative",
        "testo": "Local island with guesthouses and dive centres, more compact."
      },
      {
        "nome": "Nearby resorts",
        "perChi": "those who want alcohol and comfort",
        "testo": "On nearby islands, with a speedboat transfer. Everything costs more, but alcohol is allowed.",
        "fascia": "260-520 €"
      },
      {
        "nome": "Maamigili",
        "perChi": "those arriving by domestic flight",
        "testo": "An island with an airport, convenient for flights but less appealing for a stay. Useful for a transit night."
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
    gite: [
      {
        "nome": "Dhangethi",
        "distanza": "about 10 km from Dhigurah",
        "come": "Private boat or with the dive centre.",
        "testo": "Another local island in the atoll, more compact, and the gateway to Broken Rock and Kuda Rah Thila."
      },
      {
        "nome": "A day at a nearby resort",
        "distanza": "15-40 minutes by boat",
        "come": "Day pass through the guesthouse, $100-200 with lunch (about €85-170).",
        "testo": "House reef, a beach with no dress code and sometimes alcohol included."
      },
      {
        "nome": "Mahibadhoo",
        "distanza": "about 26 km from Dhigurah",
        "come": "Boat arranged by the guesthouse.",
        "testo": "The atoll capital, to see the everyday life of a larger Maldivian island."
      }
    ],
    faq: [
      {
        "domanda": "When can you see whale sharks in South Ari?",
        "risposta": "All year. According to Visit Maldives sightings are most frequent from August to November; from December to April the sea is calmer and visibility better."
      },
      {
        "domanda": "Is a sighting guaranteed?",
        "risposta": "No. The odds are good, but they depend on sea and current: book the trip early in your stay to leave room for a second try."
      },
      {
        "domanda": "Do you need to be a diver?",
        "risposta": "No: the whale shark often swims near the surface, and a mask and fins are enough. Diving is for thilas such as Broken Rock and Kuda Rah Thila."
      },
      {
        "domanda": "Dhigurah or Dhangethi?",
        "risposta": "Dhigurah for its long beach and bikini beach; Dhangethi for a smaller island close to the dive sites."
      },
      {
        "domanda": "What are the rules with whale sharks?",
        "risposta": "At least 3 metres from the body and 4 from the tail, no touching, no flash and never in front of its mouth. Choose operators that respect the limits on boats and swimmers."
      },
      {
        "domanda": "How much do excursions cost?",
        "risposta": "Whale shark $60-120 per person, mantas and sandbank $70-130, sandbank picnic $40-80. They are booked through your own accommodation: ask what is included."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'A whale shark swimming just below the surface, the encounter people go to South Ari for',
    immagine: '/images/maldive/squalo-balena.jpg',
  },
  {
    slug: 'baa-hanifaru',
    paeseSlug: 'maldive',
    ordine: 5,
    nome: 'Baa and Hanifaru Bay',
    tipologia: ['riserva UNESCO', 'mante', 'snorkeling'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      'An atoll that is a UNESCO biosphere reserve, with the small Hanifaru Bay where between June and November dozens, sometimes over a hundred, mantas gather to feed on plankton.',
    percheAndarci:
      "For one of the largest aggregations of mantas in the world, which you watch while snorkeling, with the peak between August and October.",
    cosaVedere: ['The mantas and the occasional whale sharks at Hanifaru', "The atoll's reefs and thila"],
    cosaFare: ['Snorkeling at Hanifaru with an authorized guide', "Dives at the atoll's sites outside the bay"],
    doveDormire: "Guesthouses in Dharavandhoo and Thulhaadhoo; resorts on the atoll's islands.",
    doveMangiare: 'Maldivian cooking in the guesthouses; resort restaurants.',
    comeArrivare: "Baa's resorts are reached by seaplane from Malé, about 35-45 minutes, by day only and with strict baggage limits (often 20-25 kg in total); it costs roughly $500-1,200 per person return (about €430-1,030), sometimes included in the price. For the local islands, take a Maldivian or Manta Air domestic flight to Dharavandhoo airport, opened in 2012, and then a boat. If you land in the evening, sleep in Hulhumalé.",
    comeSpostarsi: 'By boat.',
    periodoMigliore: 'June to November, peak August to October in the weeks around the new and full moon.',
    costi: "Bay entry about $20 per person per day (about €17), usually included in the excursion ($60-80 from local islands, about €52-70); seaplane $500-1,200 return (2026). Budget: about €90-130 a day with a guesthouse on Dharavandhoo, meals and one trip. Mid-range: €150-250 with a better guesthouse and dives. High: from €400 at a seaplane resort.",
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
        "costo": "Dive $50-80 with local island centres, about €43-70; at resorts $100-150 (2026).",
        "testo": "Outside the bay, dives at the atoll sites, among submerged pinnacles (thila) and reefs. Scuba is allowed here and the cleaning stations draw mantas even when the bay is empty. It is the way to see Baa underwater without the slots and rules of Hanifaru.",
        "come": "With the dive centres of the local islands or resorts.",
        "tempo": "a full day"
      },
      {
        "nome": "Dharavandhoo",
        "testo": "The local island closest to Hanifaru Bay, with a domestic airport opened in 2012, a harbour and several guesthouses. The surrounding waters, with Dharavandhoo Thila and Hanifaru, are protected by law.",
        "come": "Domestic flight from Malé to the island's airport.",
        "quando": "June-November for mantas, peaking August-October.",
        "tempo": "3-4 days",
        "lat": 5.15833,
        "lng": 73.13056
      },
      {
        "nome": "Dharavandhoo Thila",
        "testo": "The thila next to Dharavandhoo, in the protected area together with Hanifaru. It is a cleaning station visited by mantas and sometimes whale sharks, and it can be dived with tanks.",
        "come": "With the dive centres on Dharavandhoo.",
        "quando": "South-west monsoon season, June to November.",
        "tempo": "half a day",
        "costo": "Dive $50-80, about €43-70 (2026)."
      },
      {
        "nome": "Thulhaadhoo",
        "testo": "The second most populated island in Baa, famous for lacquer work: it once supplied lacquered items to noble families, today mostly to visitors. In the workshops you see hand-turned and painted boxes and vases.",
        "come": "Boat from Dharavandhoo or from the atoll's resorts.",
        "tempo": "half a day or 2-3 days",
        "lat": 5.02306,
        "lng": 72.83972,
        "consiglio": "Lacquerware is the atoll's most authentic souvenir."
      },
      {
        "nome": "Eydhafushi",
        "testo": "The capital of Baa atoll, an island of everyday life rather than tourism, with a harbour, shops and local cafés. Useful as a stop between islands and to see a working Maldivian island.",
        "come": "Boat from Dharavandhoo.",
        "tempo": "half a day",
        "lat": 5.10378,
        "lng": 73.07037
      },
      {
        "nome": "Goidhoo",
        "testo": "The main island of the small Goidhoo atoll (Horsburgh on English charts), oval and about 16 km long, separated from Baa by a channel almost 10 km wide. Its deep inner lagoon, free of coral heads, is rare in the Maldives. In 2022 the island had 583 residents.",
        "come": "Speedboat from Malé or a boat from Dharavandhoo, arranged with the guesthouse.",
        "tempo": "2-3 days",
        "lat": 4.87461,
        "lng": 72.99763
      },
      {
        "nome": "Fulhadhoo",
        "testo": "One of the smallest inhabited islands in the Maldives, 0.3 km² and 341 residents in 2022, in Goidhoo atoll. Almost empty white beaches and few places to stay: the choice for those who want isolation.",
        "come": "Speedboat from Malé or a boat from Goidhoo, arranged with the guesthouse.",
        "tempo": "2-3 days",
        "lat": 4.88528,
        "lng": 72.93333
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: domestic flight to Dharavandhoo, afternoon on the beach",
          "Day 2: Hanifaru snorkelling in the morning, back on the afternoon flight"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Days 1-3: Dharavandhoo, Hanifaru and Dharavandhoo Thila",
          "Day 4: Thulhaadhoo and its lacquer workshops",
          "Day 5: back to Malé, or on to Goidhoo atoll"
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
      },
      {
        "nome": "Goidhoo atoll",
        "perChi": "those seeking isolation",
        "testo": "Goidhoo, Fulhadhoo and Fehendhoo, small, sparsely populated islands in a separate atoll. Far from Hanifaru: seeing the mantas means a long boat trip."
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
    gite: [
      {
        "nome": "Thulhaadhoo",
        "distanza": "about 35 km from Dharavandhoo",
        "come": "Boat arranged by the guesthouse.",
        "testo": "The lacquer workshops, the atoll's best-known craft, and a large, lived-in local island."
      },
      {
        "nome": "Eydhafushi",
        "distanza": "about 9 km from Dharavandhoo",
        "come": "Boat from Dharavandhoo.",
        "testo": "The atoll capital, for half a day among the harbour, shops and cafés."
      },
      {
        "nome": "Goidhoo atoll",
        "distanza": "about 37 km from Dharavandhoo",
        "come": "Private boat, to be arranged with the guesthouse.",
        "testo": "Small islands with almost empty beaches and a deep lagoon free of coral heads."
      }
    ],
    faq: [
      {
        "domanda": "When should you go to Hanifaru?",
        "risposta": "From June to November, peaking between August and October in the weeks around new and full moon, when currents concentrate the plankton."
      },
      {
        "domanda": "Can you dive at Hanifaru?",
        "risposta": "No, only snorkelling is allowed in the bay, in slots of about 45 minutes overseen by rangers. Tanks are used at sites outside the bay, such as Dharavandhoo Thila."
      },
      {
        "domanda": "How much does it cost to see the mantas at Hanifaru?",
        "risposta": "Entry is about $20 per person per day for the atoll's conservation fund, usually included in the excursion, which costs $60-80 from the local islands."
      },
      {
        "domanda": "Are the mantas guaranteed?",
        "risposta": "No: they depend on tide, moon and plankton. With three or four days available the odds improve a lot."
      },
      {
        "domanda": "Local island or resort in Baa?",
        "risposta": "Dharavandhoo is the closest and cheapest base for the bay, reached by domestic flight. Resorts are more comfortable and serve alcohol, but involve a seaplane and much higher prices."
      },
      {
        "domanda": "Do you need to book ahead?",
        "risposta": "Yes, between August and October: entries to the bay are limited and domestic flights to Dharavandhoo fill up."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'A group of mantas seen from above swimming in turquoise water',
    immagine: '/images/maldive/mante.jpg',
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
    comeArrivare: "Fuvahmulah is about 494 km south of Malé and can only be reached by domestic flight, Maldivian or Manta Air, in about 1 hour 20-25 minutes. The airstrip, on the island's south-eastern side, has operated since 11 November 2011, with daily flights to Malé. The harbour is at the south-eastern tip, near the airport, and the dive boats leave from there. If you reach Velana late, sleep in Hulhumalé.",
    comeSpostarsi: 'Bike, scooter, taxi.',
    periodoMigliore: 'all year; the sea can be rough from May to November.',
    costi: "Dive $50-150 depending on the centre and number of dives (about €43-130), 2026. Budget: about €100-140 a day with a guesthouse and two dives. Mid-range: €160-250 with a full dive package and a scooter. High: over €300 with the best accommodation and daily dives.",
    erroriDaEvitare: ['Going without experience: currents and ocean conditions require an advanced certification and a good number of dives'],
    luoghi: [
      {
        "nome": "Tiger Zoo, the tiger sharks",
        "costo": "Dive $50-150, about €43-130 (2026).",
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
      },
      {
        "nome": "Thoondu beach",
        "testo": "The wide white beach at the island's northern tip, in the Dhadimagu ward. Instead of sand there are small smooth, shiny pebbles found only here in the Maldives. Some years a natural lagoon, Bissaaveli, forms, where locals swim.",
        "come": "By bike, scooter or taxi from town.",
        "quando": "At sunset.",
        "tempo": "1-2 hours",
        "costo": "Free.",
        "lat": -0.27723,
        "lng": 73.41761,
        "consiglio": "It is a protected area: do not take the pebbles away."
      },
      {
        "nome": "Bandaara Kilhi",
        "testo": "The larger of the island's two freshwater lakes, also called the \"State Lake\", between the Maalegan and Miskiymagu wards. Around it are marshes and dense vegetation: a landscape seen nowhere else in the Maldives.",
        "come": "By bike or scooter, in the middle of the island.",
        "tempo": "1 hour",
        "lat": -0.29804,
        "lng": 73.42902
      },
      {
        "nome": "Fuvahmulah Havitta",
        "testo": "An ancient ruin about 12 metres high in the Dhadimagu ward, possibly a stupa from the Buddhist period, before conversion to Islam. Today it is a mound covered in vegetation, but it remains one of the island's oldest traces.",
        "come": "By bike or scooter, in the north of the island.",
        "tempo": "30 minutes",
        "lat": -0.28103,
        "lng": 73.41902
      },
      {
        "nome": "Gemmiskiy mosque",
        "testo": "In the north of the island, in Dhadimagu, a coral-stone mosque built around 1300 and considered among the oldest in the Maldives. It is still used for prayer.",
        "come": "By bike or scooter.",
        "quando": "Outside prayer times.",
        "tempo": "20 minutes",
        "consiglio": "View it from outside, with shoulders and knees covered."
      },
      {
        "nome": "Fuvahmulah airport and harbour",
        "testo": "On the island's south-eastern side are the airstrip, in use since 2011, and the harbour built in the early 2000s, from which the dive boats depart. It is the arrival point and the area where the sea trips are concentrated.",
        "come": "Domestic flight from Malé, about 1 hour 20-25 minutes.",
        "tempo": "a stopover",
        "lat": -0.3094,
        "lng": 73.43607
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: flight from Malé, afternoon by bike between Bandaara Kilhi and Thoondu beach",
          "Day 2: two dives with tiger sharks; fly the next day, at least 24 hours after the last one"
        ]
      },
      {
        "titolo": "4 days",
        "tappe": [
          "Day 1: arrival and a ride round the island",
          "Days 2-3: dives at Tiger Zoo and the blue-water sites",
          "Day 4: Havitta, Gemmiskiy mosque and sunset at Thoondu, no diving before the flight"
        ]
      }
    ],
    zone: [
      {
        "nome": "Guesthouses tied to dive centres",
        "perChi": "divers",
        "testo": "Simple accommodation, often booked together with the dives. The island is small, so you get around by bike or scooter."
      },
      {
        "nome": "Dhoondigan and the south-east",
        "perChi": "those diving every day",
        "testo": "The harbour and airport area, where the dive boats leave from. Convenient for dawn trips."
      },
      {
        "nome": "Dhadimagu and the north",
        "perChi": "those who want beach and calm",
        "testo": "The north, with Thoondu beach, the Havitta and Gemmiskiy mosque. Further from the harbour: you need a scooter."
      },
      {
        "nome": "Maalegan and the centre",
        "perChi": "those who want to be halfway",
        "testo": "The middle of the island, near Bandaara Kilhi, a few minutes from both the harbour and the north."
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
    faq: [
      {
        "domanda": "Do you need experience for Fuvahmulah's tiger sharks?",
        "risposta": "Yes: you dive in open ocean, often in blue water and with current. Centres ask for an advanced certification and a good number of logged dives."
      },
      {
        "domanda": "When should you go to Fuvahmulah?",
        "risposta": "Tiger sharks are there all year. From May to November the sea can be rough and some trips get cancelled."
      },
      {
        "domanda": "How do you get to Fuvahmulah?",
        "risposta": "By domestic flight from Malé, about 1 hour 20-25 minutes. A morning outbound flight avoids losing a day."
      },
      {
        "domanda": "How do you get around the island?",
        "risposta": "By bike, scooter or taxi. The island is about 4.5 km long and 1.2 km wide: by scooter you reach anywhere in a few minutes."
      },
      {
        "domanda": "Are there beaches for swimming?",
        "risposta": "Few: the island has no lagoon and the deep ocean comes within a few metres of the shore. Thoondu is the finest beach, but swimming depends on the day's sea."
      },
      {
        "domanda": "How long should you wait between your last dive and flying?",
        "risposta": "At least 24 hours. Plan it in, because you always leave here by plane."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'A tiger shark swimming over the sandy seabed',
    immagine: '/images/maldive/squalo-tigre.jpg',
  },
]
