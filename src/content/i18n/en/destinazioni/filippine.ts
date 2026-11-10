import type { Destinazione } from '@/lib/types'

export const destinazioniFilippine: Destinazione[] = [
  {
    slug: 'el-nido',
    paeseSlug: 'filippine',
    ordine: 1,
    nome: 'El Nido',
    tipologia: ['mare', 'island hopping', 'lagune'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "El Nido was the first stop of my Philippines trip: van from Puerto Princesa, then the lagoons of Tour A, Tour C and Nacpan beach.",
    introduzione:
      "In northern Palawan, a bay closed in by black limestone cliffs and the Bacuit archipelago, with inner lagoons, beaches and caves reachable only by boat.",
    percheAndarci: "For the Miniloc lagoons, the Bacuit islands and beaches like Nacpan, among the most famous seascapes in Asia.",
    cosaVedere: [
      'The Big Lagoon at Miniloc (Tour A) and the Small Lagoon (Tour D)',
      'Hidden Beach, Secret Beach and Matinloc Shrine (Tour C)',
      'Nacpan Beach',
      'Taraw Cliff from the Canopy Walk, the via ferrata above the town',
    ],
    cosaFare: [
      'Island hopping with tours A, B, C and D',
      'Kayaking inside the lagoons',
      'Multi-day boat expedition to Coron',
    ],
    doveDormire:
      "The town (El Nido town) for prices and restaurants, Corong-Corong for sunsets and calm, Nacpan and Lio for quieter beaches. Budget: hostels and guesthouses in town · mid-range: hotels in Corong-Corong · luxury: El Nido's private island resorts.",
    doveMangiare: "Grilled fish and kinilaw (raw fish marinated in vinegar) in town; adobo, sinigang and lechon in the carinderias.",
    comeArrivare:
      "Cebgo (formerly AirSwift) flights to Lio airport from Clark, Cebu, Coron, Caticlan and Bohol: since 29 March 2026 they no longer leave from Manila. Otherwise a flight to Puerto Princesa and a shared van of about 5-5.5 hours (about 720-790 PHP, 2026); fast craft from Coron (about 3.5 hours).",
    comeSpostarsi: "Tricycles and rental scooters; tour boats from the port and from Corong-Corong.",
    periodoMigliore: "January to April; between July and October many tours are canceled because of the sea",
    costi:
      "Environmental fee (ETDF) 400 PHP valid for 10 days; island hopping tours 1,200-1,800 PHP per person with lunch, plus site entrance fees (Big Lagoon and Small Lagoon 200 PHP each, with capped numbers); two-seat kayak 300-400 PHP extra (indicative prices, 2026).",
    erroriDaEvitare: [
      "Booking Tour A at the last minute in high season: entries to the Big Lagoon are in limited time slots",
      "Arriving without cash: cards are not accepted everywhere and the ATMs often run out of cash at weekends",
    ],
    luoghi: [
      {
        "nome": "Tour A: Big Lagoon, Secret Lagoon and Shimizu",
        "testo": "The tour of the lagoons of Miniloc island. You cross the Big Lagoon by kayak between limestone walls, and you reach the Secret Lagoon through a narrow gap in the rock. Lunch is on Shimizu or 7 Commando beach. Since 2018 the Small Lagoon has been part of Tour D: the two lagoons cannot be visited on the same day.",
        "come": "By bangka from the port or from Corong-Corong with a licensed operator. The tour is organised: boat, guide, kayaks and lunch.",
        "quando": "Departure in the morning. The Big Lagoon has time slots from 7 am to 4 pm, capped at 60 people and 30 kayaks per slot and booked by the agencies: in high season book the tour a day ahead. From July to October many departures are cancelled because of the sea.",
        "tempo": "a full day",
        "costo": "Tour 1,200-1,500 PHP per person with lunch; Big Lagoon entry 200 PHP and two-seat kayak 300-400 PHP extra; ETDF fee 400 PHP if not already paid (indicative, 2026)",
        "consiglio": "Bring reef shoes, your own mask and a dry bag. Go to the kayaks early, before the other boats."
      },
      {
        "nome": "Tour C: Hidden Beach, Secret Beach and Matinloc",
        "testo": "The hidden beaches tour: Hidden Beach and Secret Beach are reached by swimming or wading through shallow water inside rock walls. Then the Matinloc shrine (optional entry, about 200 PHP) and Helicopter Island. It is the route most exposed to the open sea and the first to be cancelled when the weather turns.",
        "come": "By bangka with a licensed operator; lunch on board or on a beach.",
        "quando": "Morning. In rough seas Tour C is the first to be cancelled: keep a spare day.",
        "tempo": "a full day",
        "costo": "Tour roughly 1,400-1,800 PHP per person with lunch (indicative, 2026)",
        "consiglio": "Tour D goes to the Small Lagoon and Cadlao, Tour B to Pinagbuyutan and Snake Island: they are usually less crowded, so pick them if A and C are full."
      },
      {
        "nome": "Nacpan Beach",
        "testo": "Four kilometres of pale sand and palms, about 17 km north of town, joined at one end to its twin beach, Calitang, by a sand spit. It is calmer than the beaches near town and good for sunset.",
        "come": "By tricycle or scooter from El Nido, about 45 minutes.",
        "quando": "Afternoon until sunset.",
        "tempo": "half a day",
        "costo": "Beach free; tricycle round trip with waiting 700-1,500 PHP per vehicle, up to about four people, agreed in advance (indicative, 2026)",
        "consiglio": "Ask the tricycle to wait, because it is hard to find a free one for the return."
      },
      {
        "nome": "Taraw Cliff and Canopy Walk",
        "testo": "The limestone wall above the town, with the widest view over El Nido and Bacuit Bay. The free climb to the summit has been marked by accidents, and the DENR, the environment agency, has not authorised any guides or operators. The official alternative is the Canopy Walk (El Nido Via Ferrata): walkways and hanging bridges over the rocks, done with harness, helmet and guide included in the ticket.",
        "come": "On foot from the Canopy Walk entrance in town; you go up in a group with the harness provided.",
        "quando": "Usually open daily from 8 am to 5 pm; best early or in the late afternoon, because of the heat.",
        "tempo": "about 1.5 hours",
        "costo": "Canopy Walk about 400-450 PHP (indicative, 2026)",
        "consiglio": "Wear shoes with good grip: the rock is sharp and slippery when wet. Turn down anyone offering the summit climb on their own."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Tour A or C in the morning",
          "Lunch on the boat or on a beach",
          "Sunset at Corong-Corong"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Tour A to the Miniloc lagoons",
          "Day 2: Tour C, then Nacpan by tricycle for sunset"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Tour A",
          "Day 2: Tour C and Nacpan",
          "Day 3: Tour D with the Small Lagoon, or a free day and the Canopy Walk on Taraw"
        ]
      }
    ],
    zone: [
      {
        "nome": "El Nido town",
        "perChi": "prices and restaurants",
        "testo": "The centre for hostels, guesthouses and bars, with tours leaving on foot. It is noisy in the evening and the beach is small."
      },
      {
        "nome": "Corong-Corong",
        "perChi": "sunsets and quiet",
        "testo": "A few minutes by tricycle from town, with mid-range seafront hotels and sunsets. Fewer restaurants."
      },
      {
        "nome": "Nacpan and Lio",
        "perChi": "quiet beaches",
        "testo": "Farther from town, with wide beaches and little nightlife. You need a tricycle or scooter to get around."
      }
    ],
    sapori: [
      {
        "nome": "Kinilaw",
        "testo": "Raw fish marinated in vinegar with onion, ginger and calamansi. Eaten fresh in seafront places and in the town carinderias."
      },
      {
        "nome": "Grilled fish",
        "testo": "The day's catch cooked over coals, with rice. In the beach restaurants in town at dinner."
      },
      {
        "nome": "Adobo",
        "testo": "Chicken or pork stewed in vinegar, soy sauce, garlic and bay leaf: the national dish. In carinderias, the local canteens."
      },
      {
        "nome": "Sinigang",
        "testo": "Sour tamarind soup with vegetables and pork or prawns. In carinderias and Filipino restaurants."
      },
      {
        "nome": "Lechon",
        "testo": "Whole roast pig with crackling skin. Sold by the piece in carinderias and markets."
      }
    ],
    attenzioni: [
      "Cash: outside the bigger operators cards are rarely accepted, and the ATMs in town often run out of cash at weekends. Arrive with pesos already withdrawn.",
      "The tour price does not always include the environmental fee (ETDF, 400 PHP, valid 10 days) or site entries: ask what is included before paying.",
      "Rough sea: from July to October boat trips are suspended. Keep a spare day before your flight.",
      "Board only boats with life jackets on board, and give up when the coast guard suspends departures."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: "Limestone cliffs and turquoise water in the Bacuit archipelago, El Nido",
    immagine: '/images/viaggi/filippine-itinerario/giorno-03-el-nido.jpg',
  },
  {
    slug: 'coron',
    paeseSlug: 'filippine',
    ordine: 2,
    nome: 'Coron',
    tipologia: ['mare', 'relitti', 'laghi'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "I got here by ferry from El Nido during the Philippines trip: Kayangan Lake, Barracuda, the Twin Lagoons and a day of wrecks and sandbars.",
    introduzione:
      "The islands of Coron and Busuanga, north of Palawan: freshwater lakes among limestone rocks, white sand islets and a bay full of Japanese wrecks from 1944.",
    percheAndarci: "For Kayangan Lake and Barracuda Lake, the Twin Lagoon and the dives on the World War II wrecks.",
    cosaVedere: [
      'Kayangan Lake and its viewpoint',
      'Barracuda Lake, where the water changes temperature at depth',
      'The Twin Lagoon',
      'The islands of Malcapuya, Banana and Bulog Dos',
      'Mount Tapyas at sunset',
    ],
    cosaFare: [
      'Diving the Coron Bay wrecks (Okikawa Maru, Akitsushima, Irako)',
      'Snorkeling the Skeleton Wreck',
      'The Maquinit hot springs in the evening',
    ],
    doveDormire: "Coron town for convenience; resorts on private islands for those who want to spend.",
    comeArrivare: "Flights to Busuanga (Francisco B. Reyes airport, 30-40 minutes from Coron town) from Manila, Clark and Cebu, and Cebgo flights from El Nido; fast craft from El Nido (3.5-4 hours).",
    comeSpostarsi: "Tricycles in town, tour boats from the port.",
    periodoMigliore: 'December to May',
    costi:
      "Island hopping tours roughly 1,000-1,500 PHP per person with lunch, plus the entrance fee for each site, cash only (Kayangan about 300 PHP, Barracuda 200-250, Twin Lagoon 200); wreck dives with the dive centres in Coron town (indicative prices, 2026).",
    erroriDaEvitare: [
      "Going to Kayangan in mid-morning, when all the boats arrive together",
      "Diving the interior wrecks without proper certification and training",
    ],
    luoghi: [
      {
        "nome": "Kayangan Lake",
        "testo": "A lake of fresh and brackish water enclosed by limestone rock, considered one of the cleanest in the Philippines. From the viewpoint on the entrance stairs you see the bay: it is the symbol image of Coron.",
        "come": "By boat on the island-hopping tours; from the landing a steep staircase up to the viewpoint. A life jacket is mandatory for swimming in the lake.",
        "quando": "At opening time or late in the day: around mid-morning all the boats arrive together.",
        "tempo": "1 hour",
        "costo": "Entry about 300 PHP, cash, on top of the tour (indicative, 2026)",
        "consiglio": "Ask the operator to reverse the order of the stops so you reach Kayangan before the crowds."
      },
      {
        "nome": "Barracuda Lake",
        "testo": "A layer of fresh water over a layer of salt water: at around 14 metres down the water jumps abruptly from about 28 to about 38 degrees. You swim between black rock walls.",
        "come": "By boat on the tours; from the landing you go down a few steps to the water.",
        "quando": "Morning, with fewer boats.",
        "tempo": "45 minutes",
        "costo": "Entry about 200-250 PHP, extra (indicative, 2026)"
      },
      {
        "nome": "Twin Lagoon",
        "testo": "Two lagoons separated by a rock wall. You pass from one to the other by swimming: at low tide through a narrow gap in the rock, at high tide under the wall.",
        "come": "By boat on island-hopping tours.",
        "quando": "Early, before the tour boats arrive.",
        "tempo": "45 minutes",
        "costo": "Entry about 200 PHP, extra (indicative, 2026)"
      },
      {
        "nome": "Japanese wrecks of Coron Bay",
        "testo": "About ten Japanese ships sunk by American carrier aircraft on 24 September 1944, now covered in coral. The best known are the Okikawa Maru, the Akitsushima and the Irako. The Skeleton Wreck lies a few metres down and can also be seen snorkelling.",
        "come": "With the dive centres in Coron town, which run two-dive outings. Deep wrecks need at least an Advanced certification; penetrations only with proper training.",
        "tempo": "a full day",
        "costo": "Prices and packages at the dive centres in Coron town"
      },
      {
        "nome": "Mount Tapyas and Maquinit hot springs",
        "testo": "More than 700 steps above the town for a sunset view over the bay. In the evening, the Maquinit hot springs near the sea: one of the few saltwater hot springs in the world.",
        "come": "You climb Tapyas on foot from town; Maquinit by tricycle.",
        "quando": "Tapyas at sunset, Maquinit after dinner or at sunset.",
        "tempo": "2-3 hours in all",
        "costo": "Entry fees and tricycle in cash: prices on site; agree the tricycle fare in advance"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Classic island hopping: Kayangan, Barracuda, Twin Lagoon",
          "Sunset from Mount Tapyas"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Kayangan, Barracuda and Twin Lagoon",
          "Day 2: wreck dives or snorkelling at the Skeleton Wreck, then Maquinit in the evening"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: lakes tour",
          "Day 2: wrecks",
          "Day 3: sand islands (Malcapuya, Banana, Bulog Dos) and Tapyas at sunset"
        ]
      }
    ],
    zone: [
      {
        "nome": "Coron town",
        "perChi": "convenience",
        "testo": "Hotels and guesthouses near the port, restaurants and dive centres. Chaotic and noisy, but convenient for the tours."
      },
      {
        "nome": "Private islands",
        "perChi": "those who want to splurge",
        "testo": "Resorts on nearby islands, with a boat transfer. Isolated and quiet, but everything costs more."
      }
    ],
    sapori: [
      {
        "nome": "Kinilaw",
        "testo": "Raw fish in vinegar and calamansi, in the waterfront places."
      },
      {
        "nome": "Tinola",
        "testo": "Chicken broth with ginger, green papaya and chili leaves. In carinderias."
      },
      {
        "nome": "Grilled fish and seafood",
        "testo": "Crab, prawns and the day's fish over coals, in seafront restaurants. Ask the price by weight before ordering."
      },
      {
        "nome": "Tour lunch",
        "testo": "On tour boats lunch is usually rice with grilled fish or chicken and fruit, served on the beach."
      }
    ],
    attenzioni: [
      "Kayangan is packed in mid-morning: arrive early or late.",
      "Diving inside wrecks without proper certification and training: dangerous.",
      "Site entry fees are not always included in the tour price: ask first and carry small notes, as they are cash only.",
      "Ferries to and from El Nido are cancelled in rough seas: keep a spare day."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: "The limestone cliffs of Coron island dropping into turquoise water",
    immagine: '/images/viaggi/filippine-itinerario/giorno-06-coron.jpg',
  },
  {
    slug: 'cebu-moalboal',
    paeseSlug: 'filippine',
    ordine: 3,
    nome: 'Cebu and Moalboal',
    tipologia: ['mare', 'immersioni', 'canyoning'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "I stayed in Moalboal during the Philippines trip, based at Panagsama Beach, between the sardines and the turtles. For the Kawasan canyoneering we set off early in the morning to avoid the crowds.",
    introduzione:
      "The southwest coast of Cebu island, with the reef of Panagsama Beach in Moalboal, the Kawasan falls in Badian and Cebu City as the flight hub.",
    percheAndarci:
      "To swim in the middle of a school of millions of sardines a few meters from shore, for the sea turtles and for canyoning in the Kawasan gorges.",
    cosaVedere: [
      'The sardine school at Panagsama Beach',
      'Pescador Island, by boat',
      'The Kawasan falls',
      'White Beach in Moalboal',
    ],
    cosaFare: [
      'Snorkeling from shore with the sardines and turtles',
      'Canyoning in the Kawasan gorges',
      'Diving at Pescador Island',
    ],
    doveDormire: "Panagsama Beach in Moalboal, with guesthouses and small resorts right on the reef.",
    comeArrivare: "Mactan-Cebu airport, then about 105 km south: 3-4 hours by Ceres bus from the South Bus Terminal or by car, depending on traffic.",
    comeSpostarsi: "Tricycles and scooters; boats to Pescador.",
    periodoMigliore: 'December to May',
    costi: "Canyoning at Kawasan about 2,000 PHP per person with a guide, plus about 100 PHP for the mandatory shuttle; snorkeling from shore free, you only pay for gear rental (indicative prices, 2026).",
    erroriDaEvitare: [
      "Going to Oslob to swim with whale sharks: the animals are fed to keep them there, and marine biologists criticize this practice",
      "Touching the turtles or chasing them in the water",
    ],
    luoghi: [
      {
        "nome": "Sardine ball at Panagsama Beach",
        "testo": "Millions of sardines moving like a single cloud a few metres from shore. You swim among them with mask and fins, no boat needed. Sea turtles are often seen along the same reef.",
        "come": "You enter from Panagsama beach: the school is a few dozen metres from shore. Mask and fins can be rented at the dive shops.",
        "quando": "Early morning, with the best light and fewer people.",
        "tempo": "1-2 hours",
        "costo": "Free; you only pay for mask and fin rental",
        "consiglio": "Do not touch or chase the turtles, and do not kick: the school scatters."
      },
      {
        "nome": "Pescador Island",
        "testo": "A small island about 3 km off the coast, Moalboal's best-known dive site, with a coral wall dropping to about 40 metres and an underwater cave called the Cathedral. Turtles are often seen around it, and snorkellers stay over the reef. It is Moalboal's second classic outing after the sardines.",
        "come": "By boat from Panagsama Beach.",
        "quando": "Afternoon or morning, with calm sea.",
        "tempo": "half a day",
        "costo": "Boat price to agree with the dive shops or boatmen in Panagsama"
      },
      {
        "nome": "Canyoning at Kawasan Falls",
        "testo": "You descend the gorge of the Matutinao river for a few hours, with jumps from the rocks (the high ones are optional), natural slides and swimming stretches, down to the turquoise falls. In 2023 the Province of Cebu revoked the permits of unlicensed operators: go only with authorised guides.",
        "come": "From Moalboal to Badian, about 20 km, in 30-40 minutes. You go with a guide, with helmet and life jacket.",
        "quando": "Leave early to avoid the crowds.",
        "tempo": "half a day or a little more",
        "costo": "About 2,000 PHP per person with guide, helmet and life jacket, plus about 100 PHP for the mandatory shuttle; packages with transfers cost more (indicative, 2026)",
        "consiglio": "Closed water shoes and no valuables."
      },
      {
        "nome": "White Beach",
        "testo": "The pale sand beach of Basdaku, north of Panagsama, wider and easier for swimming. There are stalls and a few restaurants on the sand. It is the right place for a free afternoon after the canyoning.",
        "come": "By tricycle or scooter from Panagsama.",
        "tempo": "an afternoon"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Sardines at dawn from shore",
          "Boat to Pescador",
          "Sunset at Panagsama"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: sardines, turtles and Pescador",
          "Day 2: canyoning at Kawasan and White Beach"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: sardines and turtles",
          "Day 2: Kawasan",
          "Day 3: dives at Pescador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Panagsama Beach",
        "perChi": "those who want to stay on the reef",
        "testo": "Guesthouses and small resorts with the reef below the restaurants. The most convenient base for sardines and diving; lively in the evening."
      },
      {
        "nome": "Badian",
        "perChi": "those who want Kawasan close",
        "testo": "Farther south, near the falls. Fewer services and less nightlife."
      }
    ],
    sapori: [
      {
        "nome": "Cebu lechon",
        "testo": "Roast pig stuffed with herbs, with crackling skin, the island's specialty. Sold by the portion in markets and carinderias."
      },
      {
        "nome": "Puso",
        "testo": "Rice cooked in a woven coconut leaf, diamond-shaped. Sold next to street grills."
      },
      {
        "nome": "Danggit",
        "testo": "Dried fish fried crisp, served at breakfast with vinegar and garlic rice."
      },
      {
        "nome": "Dried mango",
        "testo": "A Cebu souvenir, sold in packs in every shop."
      }
    ],
    attenzioni: [
      "Oslob and the whale sharks: the animals are fed to keep them near shore, a practice criticised by marine biologists. Better avoided.",
      "Do not touch or chase turtles in the water.",
      "Scooters: the most common cause of accidents among tourists. Wear a helmet and do not ride at night.",
      "Manila airport (NAIA) taxis: most complaints are about white taxis that do not switch on the meter and ask a fixed price. Use Grab from the signed pickup zone, yellow metered taxis or coupon taxis from the official desk, never someone approaching you in the crowd.",
      "eTravel: within 72 hours before arriving in the Philippines you must fill in the free form at etravel.gov.ph, which generates the QR code checked at boarding and on arrival. Sites that charge for it are not official."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: "Pescador islet off Moalboal, surrounded by the reef",
    immagine: '/images/viaggi/filippine-itinerario/giorno-08-cebu-moalboal.jpg',
  },
  {
    slug: 'bohol',
    paeseSlug: 'filippine',
    ordine: 4,
    nome: 'Bohol and Panglao',
    tipologia: ['paesaggio', 'mare', 'natura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "I went during the Philippines trip, based in Panglao: the Chocolate Hills, the tarsiers and the Loboc River, then Balicasag and Virgin Island by boat.",
    introduzione:
      "An island in the central Visayas with the conical hills of the Chocolate Hills, tarsiers in the forest and the island of Panglao, linked by a bridge, with the beaches and reefs of Balicasag.",
    percheAndarci: "For the Chocolate Hills, the Philippine tarsier, the Loboc River and snorkeling at Balicasag.",
    cosaVedere: [
      'The Chocolate Hills from the Carmen viewpoint',
      'The Philippine Tarsier Sanctuary in Corella',
      'The Loboc River',
      'The colonial churches of Baclayon and Loboc',
      'Balicasag and Virgin Island by boat from Panglao',
    ],
    cosaFare: ["A loop of the island by scooter or with a driver", 'Snorkeling or diving at Balicasag', "A dawn outing for the dolphins"],
    doveDormire: "Panglao, at Alona Beach or in the quieter bays of Dumaluan and Doljo.",
    comeArrivare: "OceanJet fast ferry from Cebu to Tagbilaran, or a flight to Panglao airport.",
    comeSpostarsi: "Scooter, tricycle or a car with a driver for the day.",
    periodoMigliore: 'December to May',
    costi:
      "Chocolate Hills: fee at the ticket office, because the rise to 150 PHP for adults is on hold; an entry ticket at the tarsier sanctuary; car with driver and boats to Balicasag to agree in advance, with the marine site fees paid in cash (2026).",
    erroriDaEvitare: [
      "Visiting tarsiers at the fake “sanctuaries” along the road: they're nocturnal animals and the visits stress them; the Corella center is the one run by the foundation",
      "Using flash on the tarsiers",
    ],
    luoghi: [
      {
        "nome": "Chocolate Hills",
        "testo": "Cone-shaped limestone hills covered in grass, 1,776 according to the 1997 decree that protected them, spread across Carmen, Batuan and Sagbayan. From March to May the dry grass turns brown, hence the name; from June it turns green again. You view them from above, from the terrace of the Carmen complex.",
        "come": "By car with a driver on the inland loop, Carmen is about 55 km from Tagbilaran. A staircase of 214 steps leads to the viewpoint.",
        "quando": "Late afternoon, for the softest light; by mid-morning the terrace is crowded.",
        "tempo": "1 hour",
        "costo": "Entry in cash, fee at the ticket office: the rise to 150 PHP for adults set by a Carmen ordinance has been on hold since September 2025, with no new date (2026)"
      },
      {
        "nome": "Philippine Tarsier Sanctuary, Corella",
        "testo": "A forest sanctuary run by the Philippine Tarsier Foundation, where you see the Philippine tarsier, one of the smallest primates in the world, a nocturnal animal that sleeps by day.",
        "come": "By car with a driver on the same inland loop; you walk quietly along a trail.",
        "quando": "Morning, when the animals are asleep.",
        "tempo": "45 minutes",
        "costo": "Entry ticket: fee at the ticket office",
        "consiglio": "No flash and keep your voice down. Avoid the fake sanctuaries along the road with caged tarsiers."
      },
      {
        "nome": "Loboc River and colonial churches",
        "testo": "The Loboc River is known for its lunch cruises, between palms and green water: a very touristy stop, but relaxing after the hills. On the same road stand two Jesuit colonial churches: Loboc, rebuilt in the 18th century after the fire of 1638, and Baclayon, in coral stone, consecrated in 1727 in the oldest Christian settlement on Bohol.",
        "come": "On the inland loop with a driver.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Balicasag and Virgin Island",
        "testo": "Balicasag is a marine sanctuary: the shallow reef ends in cliffs dropping below 30 metres, with turtles and schools of fish, excellent for snorkelling and diving. Virgin Island is a sandbar that emerges at low tide. Many tours leave at dawn to look for dolphins, though sightings are not guaranteed.",
        "come": "By boat from Panglao, leaving at dawn for the dolphins.",
        "quando": "Leave at dawn; Virgin Island at low tide.",
        "tempo": "half a day",
        "costo": "Boat price to agree; on top, in cash, the sanctuary fee, the mandatory small boat at Balicasag and the Virgin Island landing fee"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Inland loop with driver: Chocolate Hills, tarsiers, Loboc River",
          "Baclayon church on the way back"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: inland loop",
          "Day 2: dawn boat for dolphins, Balicasag and Virgin Island, afternoon at the beach"
        ]
      }
    ],
    zone: [
      {
        "nome": "Alona Beach",
        "perChi": "nightlife and services",
        "testo": "Panglao's liveliest beach, with bars, diving and hotels. Crowded and noisy in the evening."
      },
      {
        "nome": "Dumaluan and Doljo",
        "perChi": "quiet",
        "testo": "Quieter bays with resorts and guesthouses. You need a tricycle or scooter to eat out."
      }
    ],
    sapori: [
      {
        "nome": "Calamay",
        "testo": "A sweet of glutinous rice, coconut milk and brown sugar, sold in coconut shells in Bohol."
      },
      {
        "nome": "Kinilaw",
        "testo": "Raw fish marinated in vinegar, in Panglao eateries."
      },
      {
        "nome": "Grilled fish",
        "testo": "The day's catch at Alona Beach in the evening."
      },
      {
        "nome": "Ube",
        "testo": "The purple yam of Filipino desserts, in ice cream and cakes in the island cafés."
      }
    ],
    attenzioni: [
      "Tarsiers: avoid the roadside \"sanctuaries\" with caged animals. The Corella centre is run by a foundation.",
      "No flash with tarsiers: they are nocturnal animals and visits stress them.",
      "Scooters: tourists mostly get hurt on bikes. Wear a helmet and do not ride at night.",
      "Cebu-Tagbilaran ferry: in 2026 OceanJet changed fares several times because of the fuel surcharge (tourist class between 880 and 1,000 PHP; the crossing takes about 2 hours in calm sea) and cancelled some sailings in April. Check fares and times first."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: "The Chocolate Hills of Bohol, conical hills covered in grass",
    immagine: '/images/viaggi/filippine-itinerario/giorno-11-bohol.jpg',
  },
  {
    slug: 'siargao',
    paeseSlug: 'filippine',
    ordine: 5,
    nome: 'Siargao',
    tipologia: ['surf', 'mare', 'isole'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "Siargao was the last stop of my Philippines trip, in General Luna: island hopping between Naked, Daku and Guyam, Sugba Lagoon, Magpupungko and surfing.",
    introduzione:
      "A teardrop-shaped island facing the Pacific Ocean, off northeastern Mindanao: palm groves, lagoons, sand islets and the Cloud 9 wave.",
    percheAndarci: "For the surf, island hopping among Naked, Daku and Guyam, the Sugba lagoon and the relaxed air of a surfer island.",
    cosaVedere: [
      'The Cloud 9 boardwalk in General Luna',
      'The islands of Naked, Daku and Guyam',
      'Sugba Lagoon in Del Carmen',
      'The Magpupungko rock pools at low tide',
      'The coconut groves of the interior, by scooter',
    ],
    cosaFare: ['Surf lessons for beginners', "A loop of the island by scooter", 'Paddleboarding in Sugba Lagoon'],
    doveDormire: "General Luna, along the Tourism Road and toward Cloud 9; Pacifico for those seeking a quieter village.",
    doveMangiare: "International places in General Luna, grilled fish and carinderias outside the center.",
    comeArrivare: "Direct flights to Sayak (in Del Carmen) from Cebu, Clark and Davao; there are no longer direct flights from Manila, so you connect via Clark or Cebu. Then about 45 minutes to General Luna (shared van about 300 PHP, 2026).",
    comeSpostarsi: "Rental scooter or habal-habal (motorbike taxi); shared vans for the airport.",
    periodoMigliore: 'April to August for boat trips; surf from September to November; the heaviest rain from November to January',
    costi:
      "Island hopping to Naked, Daku and Guyam about 1,700-2,200 PHP per person on shared tours; basic surf lesson about 600 PHP an hour; scooter 350-500 PHP a day (indicative prices, 2026).",
    erroriDaEvitare: [
      "Riding a scooter without experience, or at night: accidents are the number one problem for tourists on the island",
      "Going to Magpupungko at high tide, when the pools can't be seen",
    ],
    luoghi: [
      {
        "nome": "Cloud 9",
        "testo": "The wave that made Siargao famous, with a wooden boardwalk and a tower over the General Luna reef. It is the surfers' landmark. Since April 2026 the tower has been under reconstruction: check whether it is open.",
        "come": "A few minutes from General Luna, by scooter or on foot along the Tourism Road.",
        "quando": "Surf: September to November, big waves for experts. Morning to watch the waves.",
        "tempo": "1 hour",
        "costo": "Basic surf lesson about 600 PHP an hour; private coaching costs more (indicative, 2026)"
      },
      {
        "nome": "Naked, Daku and Guyam",
        "testo": "Three islands off General Luna: Naked Island, a sandbar without a single tree; Daku, where lunch is usually grilled fish; Guyam, a round islet with palms.",
        "come": "Island-hopping tour by boat from General Luna.",
        "quando": "Morning, in calm seas; the best period for boat trips is April to August.",
        "tempo": "half a day",
        "costo": "Shared tour about 1,700-2,200 PHP per person; ask beforehand whether lunch, island fees and transfers are included (indicative, 2026)"
      },
      {
        "nome": "Sugba Lagoon",
        "testo": "A green-blue lagoon among mangroves and limestone rocks, at Del Carmen. You get there only by boat, along the mangrove channels. You paddle board, swim or jump into the water from the wooden platform in the middle.",
        "come": "By boat from Del Carmen; from General Luna it takes most of a day. Access sometimes closes for maintenance: check before going.",
        "tempo": "half a day"
      },
      {
        "nome": "Magpupungko rock pools",
        "testo": "Natural seawater pools among the rocks of Pilar, on the east coast, which appear at low tide. At high tide the waves cover them and there is almost nothing to see.",
        "come": "By scooter or with a driver from town, on the east coast.",
        "quando": "At low tide: at high tide the pools are not visible.",
        "tempo": "2-3 hours"
      },
      {
        "nome": "Roads through the palm groves",
        "testo": "The inland roads cross coconut groves as far as the eye can see, with viewpoints along the way: it is the island's most photographed landscape. Go early in the morning or towards sunset, when it is cooler. For photos pull fully off the road, never on a bend.",
        "come": "By scooter from General Luna.",
        "tempo": "1 hour"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Island hopping to Naked, Daku and Guyam",
          "Sunset at Cloud 9"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: island hopping",
          "Day 2: surf lesson in the morning, then the inland palm groves by scooter"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: island hopping",
          "Day 2: Sugba Lagoon",
          "Day 3: Magpupungko at low tide and island loop"
        ]
      }
    ],
    zone: [
      {
        "nome": "General Luna",
        "perChi": "surf and nightlife",
        "testo": "The surfers' hub, with bars, schools and hotels along the Tourism Road. Lively in the evening."
      },
      {
        "nome": "Pacifico",
        "perChi": "quiet village",
        "testo": "Farther north, a calmer village, with waves and few services."
      }
    ],
    sapori: [
      {
        "nome": "Grilled fish",
        "testo": "At lunch on island-hopping tours, on Daku beach."
      },
      {
        "nome": "Carinderia",
        "testo": "Local canteens outside the centre: rice, adobo and fish for a few pesos."
      },
      {
        "nome": "Coconut",
        "testo": "Fresh coconut water along the roads, with palms everywhere."
      },
      {
        "nome": "General Luna eateries",
        "testo": "International food and smoothie bowls along the Tourism Road."
      }
    ],
    attenzioni: [
      "Scooters: the most common cause of accidents among tourists in Siargao. Helmet, no night riding, insurance that covers the bike.",
      "Magpupungko at high tide: the pools are not visible. Check the tides.",
      "Season: the heaviest rain falls from November to January; the best period for boat trips is April to August.",
      "Cash: withdraw before boat days or trips north and carry small notes; with a foreign card the local fee is about 250 PHP per withdrawal (BDO), plus your own bank's fee."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: "The boardwalk and wooden tower on the Cloud 9 reef, Siargao's surf spot",
    immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg',
  },
]
