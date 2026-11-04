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
    introduzione:
      "In northern Palawan, a bay closed in by black limestone cliffs and the Bacuit archipelago, with inner lagoons, beaches and caves reachable only by boat.",
    percheAndarci: "For the Miniloc lagoons, the Bacuit islands and beaches like Nacpan, among the most famous seascapes in Asia.",
    cosaVedere: [
      'Big Lagoon and Small Lagoon at Miniloc (Tour A)',
      'Hidden Beach, Secret Beach and Matinloc Shrine (Tour C)',
      'Nacpan Beach and Twin Beach',
      'The Taraw Cliff viewpoint',
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
      "AirSwift flight from Manila to Lio airport (expensive), or a flight to Puerto Princesa and a 5-6 hour van; fast craft from Coron (3.5-4 hours).",
    comeSpostarsi: "Tricycles and rental scooters; tour boats from the port and from Corong-Corong.",
    periodoMigliore: "January to April; between July and October many tours are canceled because of the sea",
    costi:
      "Environmental fee (ETDF) 400 PHP valid for 10 days; island hopping tours roughly 1,400-1,900 PHP per person with lunch, plus site entrance fees (Big Lagoon has limited numbers, 200-300 PHP); kayaks extra (indicative prices).",
    erroriDaEvitare: [
      "Booking Tour A at the last minute in high season: entries to the Big Lagoon are in limited time slots",
      "Arriving without cash: ATMs are few and often empty",
    ],
    luoghi: [
      {
        "nome": "Tour A: Big Lagoon, Small Lagoon, Secret Lagoon",
        "testo": "The tour of the lagoons of Miniloc island. You cross the Big Lagoon by kayak between limestone walls, you swim into the Small Lagoon through a gap in the rock, and you reach the Secret Lagoon through a narrow opening. Lunch is on Shimizu or 7 Commando beach.",
        "come": "By bangka from the port or from Corong-Corong with a licensed operator. The tour is organised: boat, guide, kayaks and lunch.",
        "quando": "Departure in the morning. The Big Lagoon has timed entry slots, so book the tour a day ahead in high season. From July to October many departures are cancelled because of the sea.",
        "tempo": "a full day",
        "costo": "Tour roughly 1,200-1,800 PHP per person with lunch; Big Lagoon entry about 200 PHP and kayak 150-200 PHP extra (indicative, 2026)",
        "consiglio": "Bring reef shoes, your own mask and a dry bag. Go to the kayaks early, before the other boats."
      },
      {
        "nome": "Tour C: Hidden Beach, Secret Beach and Matinloc",
        "testo": "The hidden beaches tour: Hidden Beach and Secret Beach are reached by swimming or wading through shallow water inside rock walls. Then the Matinloc shrine and snorkelling on the reefs around Helicopter Island.",
        "come": "By bangka with a licensed operator; lunch on board or on a beach.",
        "quando": "Morning. At low tide the entrance to Secret Beach is easier.",
        "tempo": "a full day",
        "costo": "Tour roughly 1,400-1,800 PHP per person with lunch (indicative, 2026)",
        "consiglio": "Tours B and D visit other islands and are usually less crowded: pick them if A and C are full."
      },
      {
        "nome": "Nacpan Beach",
        "testo": "Four kilometres of pale sand and palms on the west coast, linked to Twin Beach by a trail. It is calmer than the beaches near town and good for sunset.",
        "come": "By tricycle or scooter from El Nido, about 40 minutes on a partly unpaved road.",
        "quando": "Afternoon until sunset.",
        "tempo": "half a day",
        "costo": "Tricycle round trip 1,000-1,500 PHP, to be agreed (indicative, 2026)",
        "consiglio": "Ask the tricycle to wait, because it is hard to find a free one for the return."
      },
      {
        "nome": "Taraw Cliff",
        "testo": "The limestone wall above the town. At the top, after a steep climb partly on rock, there is a viewpoint over El Nido and Bacuit Bay.",
        "come": "From the town on foot to the start; you climb with a guide.",
        "quando": "Early morning or late afternoon, because of the heat.",
        "tempo": "2-3 hours",
        "consiglio": "Wear shoes with good grip: the rock is sharp and slippery when wet."
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
          "Day 3: tour B or D, or a free day and Taraw Cliff at dawn"
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
      "Cash: ATMs in El Nido are few and often empty. Withdraw in Manila or Cebu before leaving.",
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
    comeArrivare: "Flights to Busuanga (Francisco B. Reyes airport, 40 minutes from Coron town) from Manila and Cebu; fast craft from El Nido.",
    comeSpostarsi: "Tricycles in town, tour boats from the port.",
    periodoMigliore: 'December to May',
    costi:
      "Island hopping tours roughly 1,500-2,500 PHP per person with lunch, plus the entrance fee for each site (Kayangan around 300-400 PHP); two wreck dives roughly 4,000-5,500 PHP (indicative prices).",
    erroriDaEvitare: [
      "Going to Kayangan in mid-morning, when all the boats arrive together",
      "Diving the interior wrecks without proper certification and training",
    ],
    luoghi: [
      {
        "nome": "Kayangan Lake",
        "testo": "A lake of fresh and brackish water enclosed by limestone rock, among the cleanest in the Philippines. From the viewpoint on the entrance stairs you see the bay: it is the symbol image of Coron.",
        "come": "By boat on the island-hopping tours; from the landing a short climb of steps to the viewpoint. In some areas you swim with a life jacket, by regulation.",
        "quando": "At opening time or late in the day: around mid-morning all the boats arrive together.",
        "tempo": "1 hour",
        "costo": "Entry about 300-400 PHP, on top of the tour (indicative, 2026)",
        "consiglio": "Ask the operator to reverse the order of the stops so you reach Kayangan before the crowds."
      },
      {
        "nome": "Barracuda Lake",
        "testo": "A layer of fresh water over a layer of salt water: as you go down the temperature changes abruptly, up to over 35 degrees in the deepest layer. You swim between black rock walls.",
        "come": "By boat on the tours; from the landing you go down a few steps to the water.",
        "quando": "Morning, with fewer boats.",
        "tempo": "45 minutes",
        "costo": "Entry about 150-250 PHP, extra (indicative, 2026)"
      },
      {
        "nome": "Twin Lagoon",
        "testo": "Two lagoons separated by a rock wall. You pass from one to the other by swimming under the rock, or on foot at low tide; the water is colder on top and warmer below.",
        "come": "By boat on island-hopping tours.",
        "quando": "At low tide the passage is easier.",
        "tempo": "45 minutes",
        "costo": "Entry about 200 PHP, extra (indicative, 2026)"
      },
      {
        "nome": "Japanese wrecks of Coron Bay",
        "testo": "About ten Japanese ships sunk by American aircraft in September 1944, now covered in coral. The best known are the Okikawa Maru, the Akitsushima and the Irako. The Skeleton Wreck lies a few metres down and can also be seen snorkelling.",
        "come": "With the dive centres in Coron town, which run two-dive outings. Deep wrecks need at least an Advanced certification; penetrations only with proper training.",
        "tempo": "a full day",
        "costo": "Two dives roughly 4,000-5,500 PHP with equipment (indicative, 2026)"
      },
      {
        "nome": "Mount Tapyas and Maquinit hot springs",
        "testo": "Seven hundred steps above the town for a sunset view over the bay. In the evening, the Maquinit hot springs, in a rock pool near the sea.",
        "come": "You climb Tapyas on foot from town; Maquinit by tricycle.",
        "quando": "Tapyas at sunset, Maquinit after dinner or at sunset.",
        "tempo": "2-3 hours in all",
        "costo": "Tapyas free; Maquinit about 300 PHP (indicative, 2026)"
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
      "Site entry fees are not always included in the tour price: ask first.",
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
      'Diving the Pescador wall',
    ],
    doveDormire: "Panagsama Beach in Moalboal, with guesthouses and small resorts right on the reef.",
    comeArrivare: "Mactan-Cebu airport, then 3 hours by private car or 4 by Ceres bus from the South Bus Terminal.",
    comeSpostarsi: "Tricycles and scooters; boats to Pescador.",
    periodoMigliore: 'December to May',
    costi: "Canyoning at Kawasan roughly 1,500-2,500 PHP with a guide; snorkeling from shore free or with a small fee; a dive 1,500-2,000 PHP (indicative prices).",
    erroriDaEvitare: [
      "Going to Oslob to swim with whale sharks: the animals are fed to keep them there, and marine biologists criticize this practice",
      "Touching the turtles or chasing them in the water",
    ],
    luoghi: [
      {
        "nome": "Sardine ball at Panagsama Beach",
        "testo": "Millions of sardines moving like a single cloud a few metres from shore. You swim among them with mask and fins, no boat needed. Sea turtles are often seen along the same reef.",
        "come": "You enter from the shore or from the steps of the Panagsama Beach restaurants.",
        "quando": "Early morning, with the best light and fewer people.",
        "tempo": "1-2 hours",
        "costo": "Free from shore or with a small fee at the venue (indicative, 2026)",
        "consiglio": "Do not touch or chase the turtles, and do not kick: the school scatters."
      },
      {
        "nome": "Pescador Island",
        "testo": "A small island with a coral wall dropping into the blue, excellent for snorkelling and diving.",
        "come": "By boat from Panagsama Beach.",
        "quando": "Afternoon or morning, with calm sea.",
        "tempo": "half a day",
        "costo": "Boat roughly 1,500-2,500 PHP (indicative, 2026)"
      },
      {
        "nome": "Canyoning at Kawasan Falls",
        "testo": "You descend the Matutinao river for a few hours, with jumps from rocks of 3 to 10 metres (the high ones are optional), natural slides and swimming stretches, down to the turquoise falls.",
        "come": "From Moalboal to Badian in about 45 minutes. You go with a guide, with helmet and life jacket.",
        "quando": "Leave early to avoid the crowds.",
        "tempo": "half a day or a little more",
        "costo": "Canyoning with guide roughly 1,500-2,500 PHP with transfer (indicative, 2026)",
        "consiglio": "Closed water shoes and no valuables."
      },
      {
        "nome": "White Beach",
        "testo": "The long beach of Moalboal, good for a free afternoon after the canyoning.",
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
          "Day 3: dives on the Pescador wall"
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
      "Manila airport taxis: white ones without a meter ask absurd prices. Use Grab or the yellow metered taxis."
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
    comeArrivare: "OceanJet fast ferry from Cebu to Tagbilaran (2 hours), or a flight to Panglao airport.",
    comeSpostarsi: "Scooter, tricycle or a car with a driver for the day.",
    periodoMigliore: 'December to May',
    costi:
      "Chocolate Hills and tarsier sanctuary roughly 100-200 PHP each; car with driver for the island loop 2,500-3,500 PHP; Balicasag outing 1,500-2,500 PHP per boat (indicative prices).",
    erroriDaEvitare: [
      "Visiting tarsiers at the fake “sanctuaries” along the road: they're nocturnal animals and the visits stress them; the Corella center is the one run by the foundation",
      "Using flash on the tarsiers",
    ],
    luoghi: [
      {
        "nome": "Chocolate Hills",
        "testo": "Over a thousand cone-shaped limestone hills covered in grass, which turn brown in the dry season. You view them from above, from the Carmen viewpoint.",
        "come": "By car with a driver on the inland loop, about 1.5 hours from Panglao. A staircase leads to the viewpoint.",
        "quando": "Morning or late afternoon.",
        "tempo": "1 hour",
        "costo": "Entry roughly 100-200 PHP (indicative, 2026)"
      },
      {
        "nome": "Philippine Tarsier Sanctuary, Corella",
        "testo": "A forest sanctuary run by a foundation, where you see the Philippine tarsier, one of the smallest primates in the world, a nocturnal animal that sleeps by day.",
        "come": "By car with a driver on the same inland loop; you walk quietly along a trail.",
        "quando": "Morning, when the animals are asleep.",
        "tempo": "45 minutes",
        "costo": "Entry roughly 100-200 PHP (indicative, 2026)",
        "consiglio": "No flash and keep your voice down. Avoid the fake sanctuaries along the road with caged tarsiers."
      },
      {
        "nome": "Loboc River and colonial churches",
        "testo": "You go up the Loboc River on a cruise with a buffet lunch. On the same road, the colonial churches of Loboc and Baclayon.",
        "come": "On the inland loop with a driver.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Balicasag and Virgin Island",
        "testo": "Balicasag is a small marine sanctuary with a coral wall and many turtles, excellent for snorkelling and diving. Virgin Island is a sandbar that emerges mid-sea at low tide. Dolphins are often seen in the channel at dawn.",
        "come": "By boat from Panglao, leaving at dawn for the dolphins.",
        "quando": "Leave at dawn; Virgin Island at low tide.",
        "tempo": "half a day",
        "costo": "Boat roughly 1,500-2,500 PHP, plus site fees; two dives at Balicasag 3,000-4,000 PHP (indicative, 2026)"
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
      "Cebu-Tagbilaran ferry: fares changed several times in 2026 because of the fuel surcharge. Check the price first."
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
    introduzione:
      "A teardrop-shaped island facing the Pacific Ocean, off northeastern Mindanao: palm groves, lagoons, sand islets and the Cloud 9 wave.",
    percheAndarci: "For the surf, island hopping among Naked, Daku and Guyam, the Sugba lagoon and the relaxed air of a surfer island.",
    cosaVedere: [
      'The Cloud 9 boardwalk in General Luna',
      'The islands of Naked, Daku and Guyam',
      'Sugba Lagoon in Del Carmen',
      'The Magpupungko rock pools at low tide',
      'The road through the palm groves of Coconut Road',
    ],
    cosaFare: ['Surf lessons for beginners', "A loop of the island by scooter", 'Paddleboarding in Sugba Lagoon'],
    doveDormire: "General Luna, along the Tourism Road and toward Cloud 9; Pacifico for those seeking a quieter village.",
    doveMangiare: "International places in General Luna, grilled fish and carinderias outside the center.",
    comeArrivare: "Direct flights from Manila and Cebu to Sayak airport, then 45 minutes to General Luna.",
    comeSpostarsi: "Rental scooter or habal-habal (motorbike taxi); shared vans for the airport.",
    periodoMigliore: 'March to October for calm seas; surf with big waves from September to November; December to February wind and rain',
    costi:
      "Island hopping roughly 1,500-2,000 PHP per person; surf lesson 500-1,000 PHP with instructor and board; scooter 350-500 PHP a day (indicative prices).",
    erroriDaEvitare: [
      "Riding a scooter without experience, or at night: accidents are the number one problem for tourists on the island",
      "Going to Magpupungko at high tide, when the pools can't be seen",
    ],
    luoghi: [
      {
        "nome": "Cloud 9",
        "testo": "The wave that made Siargao famous, with a wooden boardwalk and a tower over the General Luna reef. It is the surfers' landmark.",
        "come": "A few minutes from General Luna, by scooter or on foot along the Tourism Road.",
        "quando": "Surf: September to November, big waves for experts. Morning to watch the waves.",
        "tempo": "1 hour",
        "costo": "Beginner surf lesson 500-1,000 PHP with instructor and board (indicative, 2026)"
      },
      {
        "nome": "Naked, Daku and Guyam",
        "testo": "Three islands half an hour from General Luna: Naked Island, a sandbar without a single tree; Daku, the largest, with a fishing village and a grilled-fish lunch; Guyam, a round islet with palms.",
        "come": "Island-hopping tour by boat from General Luna.",
        "quando": "Morning, in calm seas, in the March to October season.",
        "tempo": "half a day",
        "costo": "Roughly 1,500-2,000 PHP per person (indicative, 2026)"
      },
      {
        "nome": "Sugba Lagoon",
        "testo": "A green-blue lagoon among mangroves and limestone rocks, at Del Carmen. You paddle board or swim.",
        "come": "In the north of the island, by boat from Del Carmen; a day trip from General Luna.",
        "tempo": "half a day"
      },
      {
        "nome": "Magpupungko rock pools",
        "testo": "Natural rock pools near the sea, visible at low tide.",
        "come": "By scooter or with a driver from town, on the east coast.",
        "quando": "At low tide: at high tide the pools are not visible.",
        "tempo": "2-3 hours"
      },
      {
        "nome": "Coconut Road",
        "testo": "A straight road between coconut palm groves, to ride by scooter: the most photographed image of the island's interior.",
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
          "Day 2: surf lesson in the morning, then Coconut Road by scooter"
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
      "Season: December to February brings wind and rain; the best period for calm seas is March to October.",
      "Cash and ATMs: few and sometimes empty at weekends, with fees of 250-500 PHP. Withdraw in advance."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: "The boardwalk and wooden tower on the Cloud 9 reef, Siargao's surf spot",
    immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg',
  },
]
