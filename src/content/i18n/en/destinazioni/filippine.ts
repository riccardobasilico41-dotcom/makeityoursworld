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
      "Environmental fee (ETDF) 400 PHP valid for 10 days; island hopping tours 1,200-1,800 PHP per person with lunch, plus site entrance fees (Big Lagoon and Small Lagoon 200 PHP each, with capped numbers); two-seat kayak 300-400 PHP extra (indicative prices, 2026). Daily budget: low about €40-55 with a guesthouse in town, one tour and carinderias; mid about €90-140 with a hotel in Corong-Corong, tours, entry fees and restaurants; high over €450 with a private-island resort.",
    erroriDaEvitare: [
      "Booking Tour A at the last minute in high season: entries to the Big Lagoon are in limited time slots",
      "Arriving without cash: cards are not accepted everywhere and the ATMs often run out of cash at weekends",
    ],
    luoghi: [
      {
        "nome": "Tour A: Big Lagoon, Secret Lagoon and Shimizu",
        "testo": "The tour of the lagoons of Miniloc island. You cross the Big Lagoon by kayak between limestone walls, and you reach the Secret Lagoon through a narrow gap in the rock. Lunch is on Shimizu or 7 Commando beach. Since 2018 the Small Lagoon has been part of Tour D: the two lagoons cannot be visited on the same day.",
        "lat": 11.15474,
        "lng": 119.32087,
        "come": "By bangka from the port or from Corong-Corong with a licensed operator. The tour is organised: boat, guide, kayaks and lunch.",
        "quando": "Departure in the morning. The Big Lagoon has time slots from 7 am to 4 pm, capped at 60 people and 30 kayaks per slot and booked by the agencies: in high season book the tour a day ahead. From July to October many departures are cancelled because of the sea.",
        "tempo": "a full day",
        "costo": "Tour 1,200-1,500 PHP per person with lunch (about €17-21); Big Lagoon entry 200 PHP (about €3) and two-seat kayak 300-400 PHP (about €4-6) extra; ETDF fee 400 PHP (about €6) if not already paid (indicative, 2026)",
        "consiglio": "Bring reef shoes, your own mask and a dry bag. Go to the kayaks early, before the other boats."
      },
      {
        "nome": "Tour C: Hidden Beach, Secret Beach and Matinloc",
        "testo": "The hidden beaches tour: Hidden Beach and Secret Beach are reached by swimming or wading through shallow water inside rock walls. Then the Matinloc shrine (optional entry, about 200 PHP) and Helicopter Island. It is the route most exposed to the open sea and the first to be cancelled when the weather turns.",
        "lat": 11.18984,
        "lng": 119.28221,
        "come": "By bangka with a licensed operator; lunch on board or on a beach.",
        "quando": "Morning. In rough seas Tour C is the first to be cancelled: keep a spare day.",
        "tempo": "a full day",
        "costo": "Tour roughly 1,400-1,800 PHP per person with lunch, about €20-25 (indicative, 2026)",
        "consiglio": "Tour D goes to the Small Lagoon and Cadlao, Tour B to Pinagbuyutan and Snake Island: they are usually less crowded, so pick them if A and C are full."
      },
      {
        "nome": "Nacpan Beach",
        "testo": "Four kilometres of pale sand and palms, about 17 km north of town, joined at one end to its twin beach, Calitang, by a sand spit. It is calmer than the beaches near town and good for sunset.",
        "lat": 11.32215,
        "lng": 119.42838,
        "come": "By tricycle or scooter from El Nido, about 45 minutes.",
        "quando": "Afternoon until sunset.",
        "tempo": "half a day",
        "costo": "Beach free; tricycle round trip with waiting 700-1,500 PHP per vehicle (about €10-21), up to about four people, agreed in advance (indicative, 2026)",
        "consiglio": "Ask the tricycle to wait, because it is hard to find a free one for the return."
      },
      {
        "nome": "Taraw Cliff and Canopy Walk",
        "testo": "The limestone wall above the town, with the widest view over El Nido and Bacuit Bay. The free climb to the summit has been marked by accidents, and the DENR, the environment agency, has not authorised any guides or operators. The official alternative is the Canopy Walk (El Nido Via Ferrata): walkways and hanging bridges over the rocks, done with harness, helmet and guide included in the ticket.",
        "lat": 11.17756,
        "lng": 119.39,
        "come": "On foot from the Canopy Walk entrance in town; you go up in a group with the harness provided.",
        "quando": "Usually open daily from 8 am to 5 pm; best early or in the late afternoon, because of the heat.",
        "tempo": "about 1.5 hours",
        "costo": "Canopy Walk about 400-450 PHP, about €6 (indicative, 2026)",
        "consiglio": "Wear shoes with good grip: the rock is sharp and slippery when wet. Turn down anyone offering the summit climb on their own."
      },
      {
        "nome": "Tour B: Snake Island, Pinagbuyutan and the caves",
        "testo": "The tour of the southern Bacuit Bay. Snake Island is a winding sandbar that stretches towards the coast at low tide, seen from above from a small viewpoint. The tour also stops at Cudugnon Cave, entered through a low passage in the rock, Cathedral Cave seen from the boat and Pinagbuyutan island. It usually has fewer boats than Tours A and C.",
        "lat": 11.09528,
        "lng": 119.34091,
        "come": "By bangka from the port or Corong-Corong with a licensed operator; boat, guide and lunch included.",
        "quando": "Morning, at low tide to see the Snake Island sandbar properly.",
        "tempo": "a full day",
        "costo": "Tour roughly 1,200-1,800 PHP per person with lunch (about €17-25), plus the ETDF fee if not already paid (indicative, 2026)",
        "consiglio": "Reef shoes for Cudugnon Cave: the entrance is low and the rock slippery."
      },
      {
        "nome": "Tour D: Small Lagoon and Cadlao",
        "testo": "Since 2018 this has been the Small Lagoon tour, at Miniloc, which you enter swimming or by kayak through a narrow gap in the rock. Then the lagoon of Cadlao, the large island facing the town, and sheltered beaches such as Paradise Beach. It is a short, protected tour, the right choice when the open sea is rough.",
        "lat": 11.15671,
        "lng": 119.32096,
        "come": "By bangka from El Nido with a licensed operator; kayaks for hire at the lagoon.",
        "quando": "Morning. The Small Lagoon also has time slots and capped numbers: in high season book the day before.",
        "tempo": "a full day",
        "costo": "Tour roughly 1,200-1,800 PHP per person with lunch (about €17-25); Small Lagoon entry 200 PHP (about €3) and kayak extra (indicative, 2026)"
      },
      {
        "nome": "Las Cabanas",
        "testo": "The sunset beach, south of Corong-Corong, with bars on the sand and views over the islands of the bay. A zipline runs from here to the islet of Depeldet. At low tide you can walk a long way on the sand.",
        "lat": 11.14566,
        "lng": 119.39581,
        "come": "By tricycle from El Nido town, about 15 minutes.",
        "quando": "Late afternoon, for the sunset.",
        "tempo": "2-3 hours",
        "consiglio": "After sunset tricycles are scarce: arrange the return with the same driver beforehand."
      },
      {
        "nome": "Corong-Corong",
        "testo": "The waterfront south of town, facing Bacuit Bay, with hotels, restaurants and some of the boat tour departures. At sunset the sun goes down behind the islands opposite. It is also the quietest area to stay close to town.",
        "lat": 11.16515,
        "lng": 119.39849,
        "come": "On foot or by tricycle from town, 5-10 minutes.",
        "quando": "At sunset.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Lio Beach",
        "testo": "A long, quiet beach near the airport, north of town, inside a recent tourist district with hotels, shops and restaurants. The water is shallow and calm, easy for swimming. It is less spectacular than Nacpan but much closer.",
        "lat": 11.212,
        "lng": 119.4173,
        "come": "By tricycle or scooter from El Nido, about 15-20 minutes.",
        "quando": "Morning or afternoon, on days without a boat tour.",
        "tempo": "half a day"
      },
      {
        "nome": "Duli Beach",
        "testo": "A wide, little-visited bay on the north coast of El Nido, with pale sand, palms and very few buildings. In the right conditions there is surf, which is rare around here. It suits those with a scooter who want a day away from the tours.",
        "lat": 11.35306,
        "lng": 119.46504,
        "come": "By scooter or tricycle from El Nido, about an hour on the road, the last stretch unpaved.",
        "quando": "In dry weather: after rain the dirt road turns muddy.",
        "tempo": "half a day",
        "consiglio": "Bring water and cash: there are very few services on the beach."
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
        "testo": "The centre for hostels, guesthouses and bars, with tours leaving on foot. It is noisy in the evening and the beach is small.",
        "fascia": "€20-40"
      },
      {
        "nome": "Corong-Corong",
        "perChi": "sunsets and quiet",
        "testo": "A few minutes by tricycle from town, with mid-range seafront hotels and sunsets. Fewer restaurants.",
        "fascia": "€60-110"
      },
      {
        "nome": "Nacpan and Lio",
        "perChi": "quiet beaches",
        "testo": "Farther from town, with wide beaches and little nightlife. You need a tricycle or scooter to get around."
      },
      {
        "nome": "Bacuit islands",
        "perChi": "those who want to splurge",
        "testo": "Resorts on private islands in the archipelago, reachable only by boat. Total quiet and lagoons nearby, but everything is expensive and meals are taken at the resort.",
        "fascia": "over €400"
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
    gite: [
      {
        "nome": "Ille Cave and the Dewil valley",
        "distanza": "about 30-40 minutes by road",
        "come": "By scooter or tricycle towards New Ibajay, south-east of town.",
        "testo": "A limestone rock shelter where archaeologists found traces of very ancient human presence, in a valley of rice fields and rocks. Visited with a local guide, it is an alternative to the sea on days without a boat."
      },
      {
        "nome": "Taytay",
        "distanza": "about 1.5-2 hours by road",
        "come": "By van or scooter along the road to Puerto Princesa.",
        "testo": "The old capital of northern Palawan, with the Spanish fortress of Santa Isabel overlooking the bay. A quiet stop, away from the tour circuit."
      },
      {
        "nome": "Port Barton",
        "distanza": "about 3-4 hours by road",
        "come": "By shared van from El Nido; people usually stay at least one night.",
        "testo": "A seaside village quieter and cheaper than El Nido, with its own island and reef tours. It fits well as a stop on the way to Puerto Princesa."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in El Nido?",
        "risposta": "Three days are enough for Tour A, Tour C and Nacpan. With four you add Tour B or D and keep a spare day in case the sea stops the boats."
      },
      {
        "domanda": "Which tour should you choose between A, B, C and D?",
        "risposta": "Tour A covers the Miniloc lagoons, Tour C the hidden beaches and is the most exposed to the sea. Tours B and D have fewer boats; D goes to the Small Lagoon."
      },
      {
        "domanda": "Can you see the Big Lagoon and the Small Lagoon on the same day?",
        "risposta": "No: since 2018 the Big Lagoon is part of Tour A and the Small Lagoon of Tour D. Both have time slots and capped numbers, and entry is booked through the agency."
      },
      {
        "domanda": "How much is the El Nido environmental fee?",
        "risposta": "The ETDF costs 400 PHP (about €6) per person and is valid for 10 days. You pay it once: keep the receipt with you during the tours."
      },
      {
        "domanda": "How do you get from El Nido to Coron?",
        "risposta": "By fast ferry, 3.5-4 hours, roughly 1,800-3,500 PHP (about €25-50) depending on company and class. Alternatively, the 3-5 day boat expedition between the islands or a Cebgo flight."
      },
      {
        "domanda": "When is the best time to go to El Nido?",
        "risposta": "From January to April the sea is calmer. Between July and October many trips are cancelled: if you go then, keep at least one spare day."
      }
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
    comeArrivare:
      "Flights to Busuanga (Francisco B. Reyes airport, 30-40 minutes from Coron town) from Manila, Clark and Cebu, and Cebgo flights from El Nido; shared vans run from the airport to town. From El Nido there is the fast craft (3.5-4 hours, roughly 1,800-3,500 PHP, about €25-50, 2026), which leaves in the morning and is cancelled in rough seas.",
    comeSpostarsi: "Tricycles in town, tour boats from the port.",
    periodoMigliore: 'December to May',
    costi:
      "Island hopping tours roughly 1,000-1,500 PHP per person with lunch, plus the entrance fee for each site, cash only (Kayangan about 300 PHP, Barracuda 200-250, Twin Lagoon 200); wreck dives with the dive centres in Coron town (indicative prices, 2026). Daily budget: low about €40-55 with a guesthouse in town, one tour and carinderias; mid about €90-130 with a hotel with pool, tours and entry fees; high over €300 with a private-island resort or dive days.",
    erroriDaEvitare: [
      "Going to Kayangan in mid-morning, when all the boats arrive together",
      "Diving the interior wrecks without proper certification and training",
    ],
    luoghi: [
      {
        "nome": "Kayangan Lake",
        "testo": "A lake of fresh and brackish water enclosed by limestone rock, considered one of the cleanest in the Philippines. From the viewpoint on the entrance stairs you see the bay: it is the symbol image of Coron.",
        "lat": 11.95381,
        "lng": 120.22312,
        "come": "By boat on the island-hopping tours; from the landing a steep staircase up to the viewpoint. A life jacket is mandatory for swimming in the lake.",
        "quando": "At opening time or late in the day: around mid-morning all the boats arrive together.",
        "tempo": "1 hour",
        "costo": "Entry about 300 PHP (about €4), cash, on top of the tour (indicative, 2026)",
        "consiglio": "Ask the operator to reverse the order of the stops so you reach Kayangan before the crowds."
      },
      {
        "nome": "Barracuda Lake",
        "testo": "A layer of fresh water over a layer of salt water: at around 14 metres down the water jumps abruptly from about 28 to about 38 degrees. You swim between black rock walls.",
        "lat": 11.95637,
        "lng": 120.21684,
        "come": "By boat on the tours; from the landing you go down a few steps to the water.",
        "quando": "Morning, with fewer boats.",
        "tempo": "45 minutes",
        "costo": "Entry about 200-250 PHP (about €3-4), extra (indicative, 2026)"
      },
      {
        "nome": "Twin Lagoon",
        "testo": "Two lagoons separated by a rock wall. You pass from one to the other by swimming: at low tide through a narrow gap in the rock, at high tide under the wall.",
        "lat": 11.94775,
        "lng": 120.20956,
        "come": "By boat on island-hopping tours.",
        "quando": "Early, before the tour boats arrive.",
        "tempo": "45 minutes",
        "costo": "Entry about 200 PHP (about €3), extra (indicative, 2026)"
      },
      {
        "nome": "Japanese wrecks of Coron Bay",
        "testo": "About ten Japanese ships sunk by American carrier aircraft on 24 September 1944, now covered in coral. The best known are the Okikawa Maru, the Akitsushima and the Irako. The Skeleton Wreck lies a few metres down and can also be seen snorkelling.",
        "lat": 11.94129,
        "lng": 120.19193,
        "come": "With the dive centres in Coron town, which run two-dive outings. Deep wrecks need at least an Advanced certification; penetrations only with proper training.",
        "tempo": "a full day",
        "costo": "Two wreck dives roughly 4,000-5,500 PHP with gear, about €56-77 (indicative, 2026)"
      },
      {
        "nome": "Mount Tapyas and Maquinit hot springs",
        "testo": "More than 700 steps above the town for a sunset view over the bay. In the evening, the Maquinit hot springs near the sea: one of the few saltwater hot springs in the world.",
        "lat": 12.00511,
        "lng": 120.20466,
        "come": "You climb Tapyas on foot from town; Maquinit by tricycle.",
        "quando": "Tapyas at sunset, Maquinit after dinner or at sunset.",
        "tempo": "2-3 hours in all",
        "costo": "Tapyas free; Maquinit about 300 PHP (about €4); agree the tricycle fare in advance (indicative, 2026)"
      },
      {
        "nome": "Malcapuya Island",
        "testo": "An island of white sand and palms in the municipality of Culion, south of Coron, with a reef for snorkeling off the beach. It is the main stop of the sand islands tour, together with Banana Island and Bulog Dos. The crossing is long, but the water is among the clearest in the area.",
        "lat": 11.79065,
        "lng": 120.11484,
        "come": "By boat from Coron town on the sand islands tour; island entry fee extra, in cash.",
        "quando": "Morning departure, with calm sea.",
        "tempo": "a full day with the other islands",
        "costo": "Sand islands tour roughly 2,000-2,800 PHP per person, about €28-39; island fees extra (indicative, 2026)"
      },
      {
        "nome": "Banana Island",
        "testo": "An islet with a pale sand beach and a reef a few metres from shore, often the lunch stop on the sand islands tour. There are shaded huts and some facilities. It suits those who want to snorkel without straying far from the beach.",
        "lat": 11.77067,
        "lng": 120.12684,
        "come": "By boat on the sand islands tour, with Malcapuya and Bulog Dos.",
        "quando": "Midday, as the tour break.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Bulog Dos",
        "testo": "An islet with a sandbar that stretches into the sea at low tide. It is the third stop of the sand islands tour. There is almost no shade.",
        "lat": 11.78197,
        "lng": 120.13463,
        "come": "By boat on the sand islands tour.",
        "quando": "At low tide, when the sandbar is exposed.",
        "tempo": "1 hour",
        "consiglio": "Hat and sunscreen: there is no shelter on the sand."
      },
      {
        "nome": "CYC Beach",
        "testo": "An islet with a small beach and mangroves a few minutes by boat from Coron town. The water is shallow, fine for weak swimmers, and it is often the first or last stop of the tours. Handy for half a day if time is short.",
        "lat": 11.96364,
        "lng": 120.18066,
        "come": "By boat on island hopping tours or with a boatman from the port.",
        "quando": "At the end of the day, on the way back from the tour.",
        "tempo": "1 hour"
      },
      {
        "nome": "Siete Pecados",
        "testo": "A marine park of seven islets a few minutes by boat from the port, with corals and fish in shallow water. It is the closest snorkeling to town and features on many tours. With strong current, stay close to the boat.",
        "lat": 11.98384,
        "lng": 120.22987,
        "come": "By boat from Coron town port, on your own with a boatman or on a tour; entry extra, in cash.",
        "quando": "Morning, with little current.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Lusong Gunboat and Coral Garden",
        "testo": "A Japanese gunboat sunk in shallow water near Lusong island: at low tide the stern almost reaches the surface and is easy to see snorkeling. Next to it lies a shallow coral garden. It is usually visited on the same trip as the Skeleton Wreck.",
        "lat": 11.97925,
        "lng": 120.01961,
        "come": "By boat from Coron town, on wreck or snorkeling tours.",
        "quando": "At low tide, when the wreck is closest to the surface.",
        "tempo": "1 hour"
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
        "testo": "Hotels and guesthouses near the port, restaurants and dive centres. Chaotic and noisy, but convenient for the tours.",
        "fascia": "€20-90"
      },
      {
        "nome": "Private islands",
        "perChi": "those who want to splurge",
        "testo": "Resorts on nearby islands, with a boat transfer. Isolated and quiet, but everything costs more."
      },
      {
        "nome": "Busuanga, out of town",
        "perChi": "those seeking seclusion",
        "testo": "A few resorts among bays and mangroves along the Busuanga coast, closer to the airport and the road to Calauit. You need a car or the resort transfers for any trip."
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
    gite: [
      {
        "nome": "Calauit Safari Park",
        "distanza": "about 3 hours by road or boat",
        "come": "On an organised tour from Coron town, usually a full day.",
        "testo": "A reserve in northern Busuanga created in 1977, home to giraffes and zebras brought from Kenya and Calamian animals such as the Calamian deer. The journey is long, suited to those with a day to spare."
      },
      {
        "nome": "Culion",
        "distanza": "about 1.5-2 hours by boat",
        "come": "By boat from Coron town, on a tour or by hiring a bangka.",
        "testo": "The island that from 1906 hosted the largest leper colony in Asia, today a quiet town with a museum telling its story and a church on the hill above the sea."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Coron?",
        "risposta": "Three days: one for Kayangan and Barracuda lakes and the Twin Lagoon, one for the wrecks and one for the sand islands. With less time, choose the lakes tour."
      },
      {
        "domanda": "Are entry fees included in the tour price?",
        "risposta": "Often not. Kayangan, Barracuda, the Twin Lagoon and the islands are paid separately, in cash only: ask beforehand and carry small notes."
      },
      {
        "domanda": "Do you need a certification to see the wrecks?",
        "risposta": "Snorkeling is enough for the Skeleton Wreck and the Lusong Gunboat, which lie in shallow water. The deep wrecks need at least an Advanced certification, and penetration needs specific training."
      },
      {
        "domanda": "How do you avoid the crowds at Kayangan Lake?",
        "risposta": "Arrive at opening time or at the end of the day. You can ask the operator to reverse the order of the stops."
      },
      {
        "domanda": "How do you get to Coron from El Nido?",
        "risposta": "By fast ferry, 3.5-4 hours, leaving in the morning and cancelled in rough seas, or by Cebgo flight to Busuanga. Keep a spare day."
      },
      {
        "domanda": "Where is it best to stay in Coron?",
        "risposta": "In Coron town, near the port where the tours leave and the dive centres. Island resorts are quieter but pricier and far from everything."
      }
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
    comeArrivare:
      "Mactan-Cebu airport, then about 105 km south. The Ceres bus leaves from Cebu's South Bus Terminal and takes about 4 hours (under 250 PHP, about €3.50); a private car takes about 3 hours, roughly 3,000-4,000 PHP (about €42-56), depending on traffic (2026). From Moalboal you continue to Bohol by ferry from Cebu.",
    comeSpostarsi: "Tricycles and scooters; boats to Pescador.",
    periodoMigliore: 'December to May',
    costi: "Canyoning at Kawasan about 2,000 PHP per person with a guide, plus about 100 PHP for the mandatory shuttle; snorkeling from shore free, you only pay for gear rental (indicative prices, 2026). Daily budget: low about €35-50 with a guesthouse in Panagsama, shore snorkeling and carinderias; mid about €70-110 with a reef resort, canyoning or dives; high over €150 with a dive resort and private car.",
    erroriDaEvitare: [
      "Going to Oslob to swim with whale sharks: the animals are fed to keep them there, and marine biologists criticize this practice",
      "Touching the turtles or chasing them in the water",
    ],
    luoghi: [
      {
        "nome": "Sardine ball at Panagsama Beach",
        "testo": "Millions of sardines moving like a single cloud a few metres from shore. You swim among them with mask and fins, no boat needed. Sea turtles are often seen along the same reef.",
        "lat": 9.94663,
        "lng": 123.36615,
        "come": "You enter from Panagsama beach: the school is a few dozen metres from shore. Mask and fins can be rented at the dive shops.",
        "quando": "Early morning, with the best light and fewer people.",
        "tempo": "1-2 hours",
        "costo": "Free; you only pay for mask and fin rental",
        "consiglio": "Do not touch or chase the turtles, and do not kick: the school scatters."
      },
      {
        "nome": "Pescador Island",
        "testo": "A small island about 3 km off the coast, Moalboal's best-known dive site, with a coral wall dropping to about 40 metres and an underwater cave called the Cathedral. Turtles are often seen around it, and snorkellers stay over the reef. It is Moalboal's second classic outing after the sardines.",
        "lat": 9.92303,
        "lng": 123.34346,
        "come": "By boat from Panagsama Beach.",
        "quando": "Afternoon or morning, with calm sea.",
        "tempo": "half a day",
        "costo": "Boat roughly 1,500-2,500 PHP per boat, about €21-35 (indicative, 2026)"
      },
      {
        "nome": "Canyoning at Kawasan Falls",
        "testo": "You descend the gorge of the Matutinao river for a few hours, with jumps from the rocks (the high ones are optional), natural slides and swimming stretches, down to the turquoise falls. In 2023 the Province of Cebu revoked the permits of unlicensed operators: go only with authorised guides.",
        "lat": 9.802,
        "lng": 123.37394,
        "come": "From Moalboal to Badian, about 20 km, in 30-40 minutes. You go with a guide, with helmet and life jacket.",
        "quando": "Leave early to avoid the crowds.",
        "tempo": "half a day or a little more",
        "costo": "About 2,000 PHP per person (about €28) with guide, helmet and life jacket, plus about 100 PHP for the mandatory shuttle; packages with transfers cost more (indicative, 2026)",
        "consiglio": "Closed water shoes and no valuables."
      },
      {
        "nome": "White Beach",
        "testo": "The pale sand beach of Basdaku, north of Panagsama, wider and easier for swimming. There are stalls and a few restaurants on the sand. It is the right place for a free afternoon after the canyoning.",
        "lat": 9.98542,
        "lng": 123.36891,
        "come": "By tricycle or scooter from Panagsama.",
        "tempo": "an afternoon"
      },
      {
        "nome": "Basilica del Santo Niño",
        "testo": "Cebu's most important church, built where in 1565 the Spanish found the statue of the Santo Niño, the Child Jesus given by Magellan in 1521. It is the heart of the Sinulog festival in January, and even on ordinary days it is full of worshippers. There is a small museum next door.",
        "lat": 10.29389,
        "lng": 123.90139,
        "come": "In the historic centre of Cebu City, walking distance from Magellan's Cross and Fort San Pedro.",
        "quando": "Early morning, before the heat; on Sundays and in January it is very crowded.",
        "tempo": "45 minutes",
        "consiglio": "Cover shoulders and knees. During mass, visit in silence."
      },
      {
        "nome": "Magellan's Cross",
        "testo": "The pavilion in front of the basilica that houses the cross planted by the Spanish when Magellan arrived in Cebu in 1521. By tradition the original cross is encased in the wooden one seen today. The ceiling is painted with the scene of the first baptism.",
        "lat": 10.29354,
        "lng": 123.90195,
        "come": "On foot in the historic centre, next to the basilica.",
        "tempo": "15 minutes"
      },
      {
        "nome": "Fort San Pedro",
        "testo": "The triangular fort built by the Spanish from 1565, considered the oldest in the Philippines, near the port. Inside are a small museum and a garden, and from the walls you see the waterfront. It takes little time to walk round.",
        "lat": 10.29222,
        "lng": 123.90583,
        "come": "On foot from the basilica, about 10 minutes, or by Grab.",
        "quando": "Morning or late afternoon.",
        "tempo": "45 minutes"
      },
      {
        "nome": "Osmeña Peak",
        "testo": "The highest point on Cebu island, just over 1,000 metres, above Dalaguete: a ridge of pointed hills and grassland from which, on clear days, you see both coasts. The climb from the last village is short. At dawn there is often a sea of clouds below the summit.",
        "lat": 9.82015,
        "lng": 123.44235,
        "come": "From Moalboal by car or scooter towards Dalaguete, across the mountains; from the last village you walk up, usually with a local guide.",
        "quando": "At dawn, before the clouds and the heat.",
        "tempo": "half a day including the journey",
        "consiglio": "Leaving in the dark calls for a guide or driver who knows the mountain road."
      },
      {
        "nome": "Lambug Beach",
        "testo": "A long pale-sand beach in Badian, south of Moalboal, with calm water and few buildings. It is the handiest beach after the Kawasan canyoning.",
        "lat": 9.85717,
        "lng": 123.36814,
        "come": "By scooter or tricycle from Moalboal, about 30 minutes; combine it with Kawasan.",
        "quando": "Afternoon.",
        "tempo": "2-3 hours"
      },
      {
        "nome": "Mantayupan Falls",
        "testo": "One of the tallest waterfalls on Cebu island, in Barili, north of Moalboal, in a green gorge with natural pools at the base. It is far less crowded than Kawasan.",
        "lat": 10.10092,
        "lng": 123.53577,
        "come": "By scooter or car from Moalboal, about an hour; from the entrance a stepped path leads down.",
        "quando": "Morning; after a few days of rain the flow is stronger.",
        "tempo": "2 hours"
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
        "testo": "Guesthouses and small resorts with the reef below the restaurants. The most convenient base for sardines and diving; lively in the evening.",
        "fascia": "€20-80"
      },
      {
        "nome": "Badian",
        "perChi": "those who want Kawasan close",
        "testo": "Farther south, near the falls. Fewer services and less nightlife."
      },
      {
        "nome": "White Beach (Basdaku)",
        "perChi": "a beach for swimming",
        "testo": "North of Panagsama, with resorts on the sand and the easiest sea for swimming. For the sardines and restaurants you need a tricycle."
      },
      {
        "nome": "Cebu City",
        "perChi": "flights and a stopover night",
        "testo": "Hotels near Mactan airport or downtown for late arrivals or early departures. Allow plenty of time for traffic towards Moalboal."
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
    gite: [
      {
        "nome": "Tumalog Falls",
        "distanza": "about 2 hours by road",
        "come": "By car or scooter towards Oslob, on the east coast; from the entrance a shuttle or a walk down.",
        "testo": "A veil-like waterfall running down a mossy wall into a shallow pool. It is in Oslob, but you can visit without joining the encounter with the fed whale sharks."
      },
      {
        "nome": "Sumilon Island",
        "distanza": "about 2 hours by road plus 15 minutes by boat",
        "come": "By car to Oslob, then by boat.",
        "testo": "An island off Oslob with one of the first marine sanctuaries in the Philippines, a sandbar and a reef for snorkeling. A long day, to combine with Tumalog."
      }
    ],
    faq: [
      {
        "domanda": "Are the Moalboal sardines there all year?",
        "risposta": "Usually yes, a few dozen metres off Panagsama beach. The school moves along the reef, though, and on some days it is smaller or further out."
      },
      {
        "domanda": "Do you need a boat to see the sardines?",
        "risposta": "No: you go in from the beach with mask and fins. A boat is only needed for Pescador Island."
      },
      {
        "domanda": "Can you do the Kawasan canyoning on your own?",
        "risposta": "No: since 2023 Cebu Province only allows canyoning with licensed operators and guides, with helmet and life jacket. It costs about 2,000 PHP (about €28) per person plus the shuttle."
      },
      {
        "domanda": "Is it worth swimming with the whale sharks in Oslob?",
        "risposta": "It is not recommended: the animals are fed every day to keep them close to shore, a practice criticised by marine biologists. Tumalog and Sumilon, in the same area, can be visited without it."
      },
      {
        "domanda": "How do you get from Moalboal to Bohol?",
        "risposta": "Go back to Cebu City and take the OceanJet fast ferry to Tagbilaran, about 2 hours. Alternatively a bangka runs from Oslob to Panglao, about 1,000 PHP (about €14), with one departure a day."
      },
      {
        "domanda": "How many days do you need in Moalboal?",
        "risposta": "Two days for the sardines, Pescador and Kawasan; three to add dives or Osmeña Peak at dawn."
      }
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
    comeArrivare:
      "The OceanJet fast ferry links Cebu and Tagbilaran in about 2 hours, roughly 880-1,000 PHP (about €12-14) in tourist class in 2026, with fares changing for the fuel surcharge. Alternatively fly to Panglao airport. From Oslob a bangka runs to Panglao, about 1,000 PHP, once a day.",
    comeSpostarsi: "Scooter, tricycle or a car with a driver for the day.",
    periodoMigliore: 'December to May',
    costi:
      "Chocolate Hills: fee at the ticket office, because the rise to 150 PHP for adults is on hold; an entry ticket at the tarsier sanctuary; car with driver and boats to Balicasag to agree in advance, with the marine site fees paid in cash (2026). Daily budget: low about €35-50 with a guesthouse in Alona and carinderias; mid about €80-130 with a resort in Dumaluan, a driver for the interior and a boat; high over €200 with Panglao's big resorts.",
    erroriDaEvitare: [
      "Visiting tarsiers at the fake “sanctuaries” along the road: they're nocturnal animals and the visits stress them; the Corella center is the one run by the foundation",
      "Using flash on the tarsiers",
    ],
    luoghi: [
      {
        "nome": "Chocolate Hills",
        "testo": "Cone-shaped limestone hills covered in grass, 1,776 according to the 1997 decree that protected them, spread across Carmen, Batuan and Sagbayan. From March to May the dry grass turns brown, hence the name; from June it turns green again. You view them from above, from the terrace of the Carmen complex.",
        "lat": 9.79877,
        "lng": 124.16734,
        "come": "By car with a driver on the inland loop, Carmen is about 55 km from Tagbilaran. A staircase of 214 steps leads to the viewpoint.",
        "quando": "Late afternoon, for the softest light; by mid-morning the terrace is crowded.",
        "tempo": "1 hour",
        "costo": "Entry in cash, fee at the ticket office: the rise to 150 PHP for adults set by a Carmen ordinance has been on hold since September 2025, with no new date (2026)"
      },
      {
        "nome": "Philippine Tarsier Sanctuary, Corella",
        "testo": "A forest sanctuary run by the Philippine Tarsier Foundation, where you see the Philippine tarsier, one of the smallest primates in the world, a nocturnal animal that sleeps by day.",
        "lat": 9.69153,
        "lng": 123.95256,
        "come": "By car with a driver on the same inland loop; you walk quietly along a trail.",
        "quando": "Morning, when the animals are asleep.",
        "tempo": "45 minutes",
        "costo": "Entry ticket: fee at the ticket office",
        "consiglio": "No flash and keep your voice down. Avoid the fake sanctuaries along the road with caged tarsiers."
      },
      {
        "nome": "Loboc River and colonial churches",
        "testo": "The Loboc River is known for its lunch cruises, between palms and green water: a very touristy stop, but relaxing after the hills. On the same road stand two Jesuit colonial churches: Loboc, rebuilt in the 18th century after the fire of 1638, and Baclayon, in coral stone, consecrated in 1727 in the oldest Christian settlement on Bohol.",
        "lat": 9.63642,
        "lng": 124.03094,
        "come": "On the inland loop with a driver.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Balicasag and Virgin Island",
        "testo": "Balicasag is a marine sanctuary: the shallow reef ends in cliffs dropping below 30 metres, with turtles and schools of fish, excellent for snorkelling and diving. Virgin Island is a sandbar that emerges at low tide. Many tours leave at dawn to look for dolphins, though sightings are not guaranteed.",
        "lat": 9.51729,
        "lng": 123.68438,
        "come": "By boat from Panglao, leaving at dawn for the dolphins.",
        "quando": "Leave at dawn; Virgin Island at low tide.",
        "tempo": "half a day",
        "costo": "Boat roughly 1,500-2,500 PHP per boat (about €21-35); on top, in cash, the sanctuary fee, the mandatory small boat at Balicasag and the Virgin Island landing fee (indicative, 2026)"
      },
      {
        "nome": "Alona Beach",
        "testo": "Panglao's liveliest beach, with pale sand, restaurants on the shore and dive centres. The dawn boats for dolphins, Balicasag and Virgin Island leave from here. In the evening you eat grilled fish on the sand.",
        "lat": 9.54845,
        "lng": 123.77339,
        "come": "By tricycle or scooter from anywhere on Panglao; from Tagbilaran about 30-40 minutes.",
        "quando": "Early morning or at sunset; at midday the beach is full of boats.",
        "tempo": "half a day"
      },
      {
        "nome": "Dumaluan Beach",
        "testo": "A long beach, quieter than Alona, to the east, with fine sand and shallow water. There are a few resorts on the sand. It is the choice for an afternoon swim without crowds.",
        "lat": 9.55943,
        "lng": 123.80771,
        "come": "By tricycle or scooter from Alona, about 10 minutes.",
        "quando": "Afternoon, at high tide for swimming.",
        "tempo": "half a day"
      },
      {
        "nome": "Hinagdanan Cave",
        "testo": "A limestone cave in Dauis, on Panglao island, with an underground pool lit by holes in the ceiling. You go down a ladder, which gives the cave its name. Swimming is possible.",
        "lat": 9.62528,
        "lng": 123.80111,
        "come": "By tricycle or scooter from Alona or Tagbilaran, about 20-30 minutes.",
        "quando": "Morning, before the groups.",
        "tempo": "45 minutes"
      },
      {
        "nome": "Bilar mahogany forest",
        "testo": "About two kilometres of road between Loboc and Bilar running through a mahogany forest planted to reforest the area. The tall, dense trees shade the road and many stop for a few photos. You pass through it on the way to the Chocolate Hills.",
        "lat": 9.68479,
        "lng": 124.08055,
        "come": "By car with driver or scooter, on the inland tour.",
        "quando": "In daylight, on the road between Loboc and Carmen.",
        "tempo": "15-30 minutes",
        "consiglio": "Stop only at the roadside, off the carriageway: trucks and buses pass."
      },
      {
        "nome": "Sipatan hanging bridge",
        "testo": "Two hanging bridges of bamboo and rope over the Loboc River, inland, crossed on foot over swaying planks. It is a short stop on the inland tour, with fruit stalls at the exit.",
        "lat": 9.67534,
        "lng": 124.04784,
        "come": "By car with driver on the inland tour, on the road between Loboc and Bilar.",
        "tempo": "20-30 minutes"
      },
      {
        "nome": "Dauis Church",
        "testo": "The Church of the Assumption in Dauis, just over the bridge to Panglao, in coral stone, with a painted ceiling. Inside, near the altar, there is a freshwater well tied to a local legend. It is a quick visit on the way to or from Tagbilaran.",
        "lat": 9.6258,
        "lng": 123.86498,
        "come": "By tricycle or scooter from Alona or Tagbilaran, about 20 minutes.",
        "tempo": "30 minutes",
        "consiglio": "Cover shoulders and knees; during mass, visit in silence."
      },
      {
        "nome": "Blood Compact Shrine",
        "testo": "The seaside monument in Bool, Tagbilaran, commemorating the 1565 blood compact between the Spaniard Miguel López de Legazpi and the local chief Datu Sikatuna. Bronze statues show the scene. It is a stop of a few minutes on the road to Baclayon.",
        "lat": 9.62746,
        "lng": 123.8792,
        "come": "By car or tricycle from Tagbilaran, about 10 minutes, on the coast road towards Baclayon.",
        "tempo": "15 minutes"
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
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Blood Compact, Baclayon, tarsiers, Loboc River, the mahogany forest and the Chocolate Hills in the afternoon",
          "Day 2: dawn boat for dolphins, Balicasag and Virgin Island",
          "Day 3: Hinagdanan Cave and Dauis Church, then Dumaluan or Alona"
        ]
      }
    ],
    zone: [
      {
        "nome": "Alona Beach",
        "perChi": "nightlife and services",
        "testo": "Panglao's liveliest beach, with bars, diving and hotels. Crowded and noisy in the evening.",
        "fascia": "€25-40"
      },
      {
        "nome": "Dumaluan and Doljo",
        "perChi": "quiet",
        "testo": "Quieter bays with resorts and guesthouses. You need a tricycle or scooter to eat out.",
        "fascia": "€60-120"
      },
      {
        "nome": "Tagbilaran",
        "perChi": "port and stopover night",
        "testo": "The provincial capital, near the port for ferries from Cebu: simple hotels and malls, but no beach. Handy only for a late arrival or an early departure."
      },
      {
        "nome": "Loboc and the interior",
        "perChi": "nature and silence",
        "testo": "A few lodges along the Loboc River, among palms and forest, close to the tarsiers and the Chocolate Hills. There is little to do in the evening and you need a car for the sea."
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
    gite: [
      {
        "nome": "Pamilacan Island",
        "distanza": "about 1 hour by boat",
        "come": "By boat from Alona or Baclayon, often on the same trip as the dolphins.",
        "testo": "An island south-east of Panglao, once a village of whale and manta hunters, today with a marine sanctuary and a reef for snorkeling. Dolphins are often seen in the surrounding waters."
      },
      {
        "nome": "Anda",
        "distanza": "about 2.5-3 hours by road",
        "come": "By car with driver or scooter along the east coast.",
        "testo": "The eastern tip of Bohol, with white sand beaches, freshwater pools inside caves and very few people. Go for the day or for a quiet night."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Bohol?",
        "risposta": "Two days are enough for the inland tour and the boat to Balicasag. With three you add Panglao, Hinagdanan and a beach afternoon."
      },
      {
        "domanda": "Are the Chocolate Hills always brown?",
        "risposta": "No: the grass turns brown in the dry season, between March and May. From June the hills turn green again."
      },
      {
        "domanda": "Where can you see tarsiers responsibly?",
        "risposta": "At the Philippine Tarsier Sanctuary in Corella, run by the Philippine Tarsier Foundation. Avoid the roadside «sanctuaries» with caged animals, and never use flash."
      },
      {
        "domanda": "Are the Panglao dolphins guaranteed?",
        "risposta": "No: they depend on the sea and on luck. Boats leave Alona before six and must not chase or surround the animals."
      },
      {
        "domanda": "How do you get to Bohol from Cebu?",
        "risposta": "By OceanJet fast ferry to Tagbilaran, about 2 hours, or by plane to Panglao. Ferry fares and timetables changed often in 2026: check them beforehand."
      },
      {
        "domanda": "Is it better to stay in Panglao or Tagbilaran?",
        "risposta": "In Panglao, at Alona or in the bays of Dumaluan and Doljo, for beaches and boats. Tagbilaran is only for a night near the port."
      }
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
    comeArrivare:
      "Direct flights to Sayak (in Del Carmen) from Cebu, Clark and Davao; there are no longer direct flights from Manila, so you connect via Clark or Cebu. From Cebu the flight takes about an hour. From the airport it is about 45 minutes to General Luna by shared van (about 300 PHP, about €4, 2026) or private transfer.",
    comeSpostarsi: "Rental scooter or habal-habal (motorbike taxi); shared vans for the airport.",
    periodoMigliore: 'April to August for boat trips; surf from September to November; the heaviest rain from November to January',
    costi:
      "Island hopping to Naked, Daku and Guyam about 1,700-2,200 PHP per person on shared tours; basic surf lesson about 600 PHP an hour; scooter 350-500 PHP a day (indicative prices, 2026). Daily budget: low about €35-50 with a hostel in General Luna, scooter and carinderias; mid about €80-120 with a bungalow on Tourism Road, tours and surf lessons; high over €250 with a resort towards Cloud 9.",
    erroriDaEvitare: [
      "Riding a scooter without experience, or at night: accidents are the number one problem for tourists on the island",
      "Going to Magpupungko at high tide, when the pools can't be seen",
    ],
    luoghi: [
      {
        "nome": "Cloud 9",
        "testo": "The wave that made Siargao famous, with a wooden boardwalk and a tower over the General Luna reef. It is the surfers' landmark. Since April 2026 the tower has been under reconstruction: check whether it is open.",
        "lat": 9.81333,
        "lng": 126.1644,
        "come": "A few minutes from General Luna, by scooter or on foot along the Tourism Road.",
        "quando": "Surf: September to November, big waves for experts. Morning to watch the waves.",
        "tempo": "1 hour",
        "costo": "Basic surf lesson about 600 PHP an hour (about €8); private coaching costs more (indicative, 2026)"
      },
      {
        "nome": "Naked, Daku and Guyam",
        "testo": "Three islands off General Luna: Naked Island, a sandbar without a single tree; Daku, where lunch is usually grilled fish; Guyam, a round islet with palms.",
        "lat": 9.73486,
        "lng": 126.12593,
        "come": "Island-hopping tour by boat from General Luna.",
        "quando": "Morning, in calm seas; the best period for boat trips is April to August.",
        "tempo": "half a day",
        "costo": "Shared tour about 1,700-2,200 PHP per person (about €24-31); ask beforehand whether lunch, island fees and transfers are included (indicative, 2026)"
      },
      {
        "nome": "Sugba Lagoon",
        "testo": "A green-blue lagoon among mangroves and limestone rocks, at Del Carmen. You get there only by boat, along the mangrove channels. You paddle board, swim or jump into the water from the wooden platform in the middle.",
        "lat": 9.90631,
        "lng": 125.90029,
        "costo": "Boat roughly 1,600-2,500 PHP per boat (about €23-35), plus the entry fee (indicative, 2026)",
        "come": "By boat from Del Carmen; from General Luna it takes most of a day. Access sometimes closes for maintenance: check before going.",
        "tempo": "half a day"
      },
      {
        "nome": "Magpupungko rock pools",
        "testo": "Natural seawater pools among the rocks of Pilar, on the east coast, which appear at low tide. At high tide the waves cover them and there is almost nothing to see.",
        "lat": 9.87573,
        "lng": 126.1202,
        "come": "By scooter or with a driver from town, on the east coast.",
        "quando": "At low tide: at high tide the pools are not visible.",
        "tempo": "2-3 hours"
      },
      {
        "nome": "Roads through the palm groves",
        "testo": "The inland roads cross coconut groves as far as the eye can see, with viewpoints along the way: it is the island's most photographed landscape. Go early in the morning or towards sunset, when it is cooler. For photos pull fully off the road, never on a bend.",
        "lat": 9.81654,
        "lng": 126.05479,
        "come": "By scooter from General Luna.",
        "tempo": "1 hour"
      },
      {
        "nome": "Pacifico Beach",
        "testo": "A long beach on the north-east coast, in San Isidro, with a quiet village and reef waves on the Pacific. In the right conditions there are waves for learners too. It is much calmer than General Luna.",
        "lat": 9.94375,
        "lng": 126.10332,
        "come": "By scooter or habal-habal from General Luna, about an hour across the interior.",
        "quando": "Morning, before the wind.",
        "tempo": "half a day or one night"
      },
      {
        "nome": "Maasin River",
        "testo": "A green river among palms in the village of Maasin, on the road between General Luna and Dapa. From a palm leaning over the water you swing in on a rope. You can also hire a small boat to go upriver.",
        "lat": 9.81993,
        "lng": 126.05714,
        "come": "By scooter from General Luna, about 15-20 minutes.",
        "quando": "Morning, before the groups arrive.",
        "tempo": "1 hour"
      },
      {
        "nome": "Tayangban Cave Pool",
        "testo": "A cave with water running through it in Pilar, on the east coast, explored walking and swimming with a local guide up to a pool among the rocks. It stays cool even in the hottest hours. Combine it with Magpupungko, not far away.",
        "lat": 9.8613,
        "lng": 126.06305,
        "come": "By scooter or with a driver from General Luna, about 45 minutes; take a guide at the entrance.",
        "quando": "Midday, while waiting for low tide at Magpupungko.",
        "tempo": "1 hour"
      },
      {
        "nome": "Alegria Beach",
        "testo": "A long pale-sand beach in Burgos, in the north of the island, almost always empty. There are very few facilities and a few palms for shade. It is the goal of the scooter ride round the north.",
        "lat": 10.05335,
        "lng": 126.07122,
        "come": "By scooter from General Luna, about an hour and a half.",
        "quando": "In dry weather, leaving early.",
        "tempo": "half a day",
        "consiglio": "Bring water and fill up first: there are few petrol stations along the northern road."
      },
      {
        "nome": "Jacking Horse",
        "testo": "General Luna's beginner spot, a short distance from Cloud 9, with softer waves over a reef bottom. Surf schools bring their students here when conditions allow.",
        "lat": 9.81469,
        "lng": 126.16336,
        "come": "On foot or by scooter from General Luna, along Tourism Road.",
        "quando": "On the right tide, which the schools check every day.",
        "tempo": "1-2 hours",
        "costo": "Lesson with instructor and board roughly 500-1,000 PHP an hour, about €7-14 (indicative, 2026)"
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
        "testo": "The surfers' hub, with bars, schools and hotels along the Tourism Road. Lively in the evening.",
        "fascia": "€20-40"
      },
      {
        "nome": "Pacifico",
        "perChi": "quiet village",
        "testo": "Farther north, a calmer village, with waves and few services."
      },
      {
        "nome": "Tourism Road",
        "perChi": "gardens and quiet",
        "testo": "The road from General Luna towards Cloud 9, with bungalows in greenery and seafront resorts. Bars and surf schools are within walking distance, but nights are quieter.",
        "fascia": "€50-100"
      },
      {
        "nome": "Towards Cloud 9",
        "perChi": "seafront resorts",
        "testo": "The most polished resorts on the coast, close to the wave and the boardwalk. High prices and full services."
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
    gite: [
      {
        "nome": "Sohoton Cove and Bucas Grande",
        "distanza": "about 1.5-2 hours by boat",
        "come": "On an organised tour from General Luna, usually a full day.",
        "testo": "A bay enclosed by limestone walls on Bucas Grande island, reached through a cave at low tide, with inner lagoons. A long day, only with calm sea."
      },
      {
        "nome": "Del Carmen mangroves",
        "distanza": "about 45 minutes by road",
        "come": "By scooter or van to Del Carmen port, then by boat or kayak.",
        "testo": "One of the largest mangrove forests in Mindanao, with channels to explore by boat or kayak. You also cross it on the way to Sugba Lagoon."
      }
    ],
    faq: [
      {
        "domanda": "When is the surf season in Siargao?",
        "risposta": "The biggest waves at Cloud 9 arrive from September to November, for experienced surfers only. Learners find beginner waves almost all year at Jacking Horse and other spots."
      },
      {
        "domanda": "Can beginners learn to surf?",
        "risposta": "Yes: General Luna's schools give lessons with instructor and board, roughly 500-1,000 PHP an hour (about €7-14). Cloud 9 and the reef breaks are for experienced surfers."
      },
      {
        "domanda": "Do you need a scooter in Siargao?",
        "risposta": "It helps a lot, because distances are long. Those without experience use habal-habal or a driver: motorbike accidents are the main problem for tourists on the island."
      },
      {
        "domanda": "How many days do you need in Siargao?",
        "risposta": "Three or four days: island hopping, Sugba Lagoon, Magpupungko at low tide and a day of surfing or scootering."
      },
      {
        "domanda": "How do you get to Siargao?",
        "risposta": "By plane to Sayak, in Del Carmen, from Cebu, Clark or Davao; from Manila you connect. From the airport to General Luna it is about 45 minutes by van."
      },
      {
        "domanda": "When is the best time for boat trips?",
        "risposta": "From April to August the sea is calmer. The heaviest rain falls from November to January."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['filippine-itinerario'],
    imageAlt: "The boardwalk and wooden tower on the Cloud 9 reef, Siargao's surf spot",
    immagine: '/images/viaggi/filippine-itinerario/giorno-17-siargao.jpg',
  },
]
