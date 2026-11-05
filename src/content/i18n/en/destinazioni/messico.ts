import type { Destinazione } from '@/lib/types'

export const destinazioniMessico: Destinazione[] = [
  {
    slug: 'cancun',
    paeseSlug: 'messico',
    ordine: 1,
    nome: 'Cancún',
    tipologia: ['mare', 'nightlife', 'cultura'],
    giorniConsigliati: '1-2 days, ideally split between the outbound and return legs',
    visitataPersonalmente: true,
    introduzione:
      "The arrival and departure point of almost every trip to the Yucatán: international airport, a handy ADO terminal for buses and city beaches you can reach without a car.",
    percheAndarci:
      "At the start it's for shaking off jet lag and sorting out the first things (SIM, cash); at the end, for an afternoon on a public beach before flying home.",
    cosaVedere: ['Playa Marlin', 'Playa Gaviota', 'Parque las Palapas', 'Mercado 28'],
    cosaFare: [
      "A beach day reaching Playa Marlin or Playa Gaviota by the local R1 bus (free, no paid loungers like in the Hotel Zone)",
      "Isla Mujeres on your own: ferry from Puerto Juárez or Playa Tortugas (about 540 MXN round trip), then you get around the island on a rented golf cart (1,300-1,500 MXN for 4 people). Alternatively the organized catamaran day, pricier but with snorkeling stops included",
      "Isla Contoy and Isla Mujeres on an organized full-day tour: Contoy is a nature reserve with entries capped at 200 people a day; roughly €80-100 per person",
      "Aperitivo and evening street food at Parque las Palapas",
      "Public beach in front of Coco Bongo and, in high season, the Coco Bongo Beach Party in the afternoon",
    ],
    doveDormire:
      "I slept at Hostel Selina Cancún Downtown, about 200 meters from the ADO terminal: clean, with breakfast included by the pool.",
    doveMangiare:
      "To spend little: stalls and street food at Parque las Palapas (my fixed spot for the first evenings), or El Socio Naiz or Taqueria Coapenitos for a simple Mexican meal at low prices. Mid-range: a la Parrilla, touristy but pleasant and with separate checks (watch for the service charge added automatically, usually over 10 people at the table), or Señor Frog, better for lunch because of its drinking games. For a more refined dinner: Naviós Mexican Fusion Seafood, on the water in the Hotel Zone with a view of the crocodiles (medium-high price), or Chambao, the priciest on the list (€60+ per person) but with very good fresh fish.",
    usciteSerali:
      "The big classic is Coco Bongo, a club-show in the Hotel Zone: better to buy tickets in advance, especially on high-season weekends. Cheaper alternatives are Mandala (entry around €20) and Monkey Business, which combines dinner and a night out (at the door they often ask for the hotel or tour badge).",
    comeArrivare: 'Cancún international airport, the main hub of the area; ADO bus or Uber to downtown.',
    comeSpostarsi: 'Local buses (red R1 line) to the beaches, taxi/Uber for the rest of the city.',
    periodoMigliore: "I didn't note it for this stop; the general indication for the area applies, that is the dry season, from November to April.",
    costi: 'An expensive city: compared to the rest of the itinerary, prices are close to European ones.',
    erroriDaEvitare: [
      "Not exchanging or withdrawing enough cash in the first two days: afterwards you're forced to stop constantly",
      "Expecting the postcard sea of the Riviera Maya: the city beaches are good but different from Tulum or Holbox",
    ],
    miaEsperienza:
      "For me Cancún was mostly a practical base: the first taste of Mexico with the street food of Parque las Palapas and the last free day on the beach before the flight home. It's not the stop I remember most, but at the beginning and end of the itinerary it works well.",
      "luoghi": [
        {
          "nome": "Isla Mujeres",
          "testo": "An island 20 minutes by ferry, with beaches, snorkelling and a quiet village, convenient for a day trip.",
          "come": "Ferry from Puerto Juárez or Playa Tortugas; on the island you get around by rented golf cart.",
          "quando": "Morning, to have time.",
          "tempo": "Full day",
          "consiglio": "The alternative is the organised catamaran day, pricier but with snorkelling stops included."
        },
        {
          "nome": "Playa Marlin and Playa Gaviota",
          "testo": "Free public beaches in the middle of the hotel zone, with no paid loungers. They are among the few free accesses to the sea in this part of the city; the water is rougher than on Isla Mujeres, so check the lifeguards' flag before swimming.",
          "come": "Local R1 bus from the centre.",
          "quando": "Morning.",
          "tempo": "Half a day"
        },
        {
          "nome": "Parque las Palapas and Mercado 28",
          "testo": "A town square with street-food stalls and evening music, and the market with crafts and small restaurants.",
          "come": "On foot from the centre, north of the hotel zone.",
          "quando": "Evening.",
          "tempo": "2-3 hours",
          "consiglio": "The first taste of Mexico with street food."
        },
        {
          "nome": "Coco Bongo",
          "testo": "The most famous show club in the city, in the hotel zone: acrobats, live music and film-inspired acts until late at night. The price varies a lot depending on where you stand or sit (general, bar or table), so check what the ticket includes before buying.",
          "come": "Tickets from resellers.",
          "quando": "Evening.",
          "tempo": "An evening",
          "consiglio": "For tickets try contacting Martin of Mexico Grand Tours: he has a bit of everything."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Isla Mujeres by ferry",
            "Afternoon: golf cart and snorkelling",
            "Evening: Parque las Palapas"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Isla Mujeres",
            "Day 2: Playa Marlin, Mercado 28 and, if you like, Coco Bongo"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centre (Downtown)",
          "perChi": "budget and local life",
          "testo": "Cheap hotels, markets and restaurants, but far from the sea."
        },
        {
          "nome": "Hotel Zone",
          "perChi": "sea and resorts",
          "testo": "Beaches and resorts, but high prices and tourist traffic."
        }
      ],
      "sapori": [
        {
          "nome": "Tacos al pastor",
          "testo": "Marinated pork with pineapple, in the taquerías of the centre."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Pork cooked in the pibil, a Yucatán speciality."
        },
        {
          "nome": "Ceviche and aguachile",
          "testo": "Raw fish marinated in lime, by the sea."
        },
        {
          "nome": "Marquesitas",
          "testo": "Crisp wafers filled with Edam cheese and Nutella, from street stalls."
        }
      ],
      "attenzioni": [
        "In the hotel zone food and drink prices are very high: eat in the centre.",
        "Taxis without meter: agree the price before getting in.",
        "Time-share or too-cheap tour offers: do not follow people who stop you in the street."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'White beach and turquoise waves with the hotels of the Cancún hotel zone in the background',
    immagine: '/images/messico/cancun.jpg',
  },
  {
    slug: 'valladolid',
    paeseSlug: 'messico',
    ordine: 2,
    nome: 'Valladolid',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '1 night, even just passing through on the way to Mérida',
    visitataPersonalmente: true,
    introduzione:
      'A quiet colonial town in the middle of the Yucatán, a handy base for Río Lagartos, Ek Balam and the first cenotes of the trip.',
    percheAndarci:
      "It breaks up the pace between coast and interior. The old town is pleasant to walk in the evening and is the starting point for one of the best combinations of the itinerary: Ek Balam plus the Xcanché cenote.",
    cosaVedere: ['Colonial old town', 'Ek Balam archaeological site'],
    cosaFare: ['Evening stroll downtown', 'Swim at the Xcanché cenote'],
    doveDormire: 'I slept at Hotel Waye, a few steps from the main square.',
    doveMangiare:
      "I didn't note down the restaurant names. The old town around the main square is full of cantinas and Yucatecan loncherías at low prices, all within walking distance of the hotel: you can improvise without booking.",
    comeArrivare: 'By van/car from Cancún (about 2-2h30), often with a stop at Río Lagartos along the way.',
    comeSpostarsi: 'The old town is small and easy to get around on foot.',
    periodoMigliore: "I didn't note it for this stop; the dry season recommended for the whole Yucatán applies, from November to April.",
    costi: "I didn't note down my spending in Valladolid; like the rest of the interior, it's a cheap stop.",
    erroriDaEvitare: [
      "Underestimating Ek Balam because it's less famous than Chichén Itzá: it's far less crowded and, with the Xcanché cenote right next to it, it's an ideal pairing",
    ],
    miaEsperienza:
      "Valladolid was a short but pleasant stop: a very quiet town, where in the evening I took a walk after a full day among Río Lagartos, Ek Balam and the Xcanché cenote.",
      "luoghi": [
        {
          "nome": "Chichén Itzá",
          "testo": "One of the new wonders of the world, a UNESCO Maya site with El Castillo, the ball court and the sacred cenote.",
          "come": "From Valladolid about 40 minutes by car or taxi, or a guided tour.",
          "quando": "Morning, at opening, before the coaches and the heat.",
          "tempo": "3-4 hours",
          "costo": "697 MXN for foreigners, with a single federal and state ticket at one desk since 27 March 2026; Sundays are free only for Mexicans and residents.",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "For Chichén Itzá I recommend a guide: Alejandro speaks Spanish and English, was born 20 minutes from the site and is very well prepared."
        },
        {
          "nome": "Ek Balam",
          "testo": "A smaller, far less crowded Maya site, with a large acropolis and very well preserved stucco decorations, such as the 'monster mouth' at the tomb entrance. Whether you can climb to the top depends on the current rules: ask at the ticket office.",
          "come": "From Valladolid about 30 minutes by taxi.",
          "quando": "Morning.",
          "tempo": "2 hours",
          "costo": "About 690 MXN for foreigners, federal and state fee combined (2026).",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Often underrated: combine it with the Xcanché cenote right next to it."
        },
        {
          "nome": "Cenote Xcanché",
          "testo": "An open-air cenote near Ek Balam, with jumps and lianas. You go down a stairway in the rock to the water, surrounded by hanging roots and plants; there is bike rental and a small restaurant around it.",
          "come": "Taxi or bike from Ek Balam.",
          "quando": "Morning or early afternoon.",
          "tempo": "1-2 hours"
        },
        {
          "nome": "Río Lagartos and Las Coloradas",
          "testo": "A reserve with flamingos and pink lagoons, north of Valladolid.",
          "come": "Tour or car, along the road to the coast.",
          "quando": "Morning.",
          "tempo": "Half a day",
          "consiglio": "Often a stop along the route from Cancún."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Ek Balam and Xcanché cenote",
            "Lunch on the square",
            "Afternoon: historic centre",
            "Evening: walk"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Ek Balam, Xcanché, centre",
            "Day 2: Chichén Itzá at opening, then Río Lagartos"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Historic centre",
          "perChi": "on foot to everything",
          "testo": "Main square, nearby cantinas and loncherías, hotels a few steps away."
        },
        {
          "nome": "Outside the centre",
          "perChi": "those with a car",
          "testo": "Haciendas and cenotes, but you need transport."
        }
      ],
      "sapori": [
        {
          "nome": "Cochinita pibil and poc chuc",
          "testo": "Marinated pork and grilled pork with sour oranges, typical of Valladolid."
        },
        {
          "nome": "Valladolid longaniza",
          "testo": "Smoked spiced sausage, a local speciality."
        },
        {
          "nome": "Sopa de lima",
          "testo": "Chicken and lime soup, a Yucatecan dish."
        },
        {
          "nome": "Panuchos and salbutes",
          "testo": "Fried tortillas filled with beans or chicken."
        }
      ],
      "attenzioni": [
        "Chichén Itzá: go at opening, and do not follow touts at the entrance.",
        "Do not climb pyramids where it is forbidden: fines are real.",
        "Cenotes: follow the rules on sunscreen and showering before swimming."
      ],
    esperienzeSlugs: ['rio-lagartos', 'ek-balam-cenote-xcanche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Arcades and a yellow colonial-style facade in downtown Valladolid, Yucatán',
    immagine: '/images/messico/valladolid.jpg',
  },
  {
    slug: 'merida',
    paeseSlug: 'messico',
    ordine: 3,
    nome: 'Mérida',
    tipologia: ['cultura', 'nightlife', 'natura'],
    giorniConsigliati: '2 days, also handy as a mid-trip break',
    visitataPersonalmente: true,
    introduzione:
      "The capital of the Yucatán: a colonial old town, good nightlife and, half an hour away, a trip mixing sea and curiosities (Playa Progreso and the \"pig beach\").",
    percheAndarci:
      "Culture, local shopping and a day away from the archaeological sites of the rest of the trip. With the hotel laundry it's also the right place to get your luggage back in order.",
    cosaVedere: ['Colonial old town', 'Mercado municipal', 'Playa Progreso and the meteorite museum'],
    cosaFare: [
      'A day at Playa Progreso',
      "Swimming with pigs at the \"pig beach\" (Playa de los Cerditos), little visited compared to the rest of the program",
      'Shopping at the mercado municipal',
      'An evening between La Negrita and the Mezcalería',
    ],
    doveDormire: 'I slept at the Ontico Urban Design Hotel, in the old town.',
    doveMangiare:
      "We had dinner at the Mezcalería, a very large, informal place where you don't need to book. For lunch the old town and the mercado municipal have lots of cheap places serving Yucatecan food (cochinita pibil, panuchos, sopa de lima).",
    usciteSerali:
      "Drinks at La Negrita before dinner (it closes early, around 10 pm: to enjoy it at leisure it's better to book in time). Besides La Negrita and the Mezcalería, the street for bars and evening venues is Paseo de Montejo.",
    comeArrivare: 'By van/car from Valladolid (about 1h30-2h), passing through Chichén Itzá and Izamal.',
    comeSpostarsi: 'The old town on foot; for Playa Progreso you need a transfer by car or van (about 30-40 minutes).',
    periodoMigliore: "I didn't note it for Mérida; the dry season recommended for the Yucatán applies, from November to April.",
    costi: "I didn't note down my spending in Mérida; like the rest of the interior, it costs little.",
    erroriDaEvitare: [
      'La Negrita closes early (around 10 pm): book in time if you want to enjoy it before heading elsewhere',
    ],
    miaEsperienza:
      "Mérida was the right mid-trip break: a day with no transfers between Playa Progreso and the pig beach and a real night out in the old town.",
      "luoghi": [
        {
          "nome": "Plaza Grande and historic centre",
          "testo": "The central square with the 16th-century cathedral, the Government Palace with murals and the colonial houses around.",
          "come": "On foot from the centre.",
          "quando": "Morning and evening, when there is music.",
          "tempo": "Half a day"
        },
        {
          "nome": "Municipal market",
          "testo": "The covered market with fruit, spices and crafts, where you buy Yucatecan goods.",
          "come": "On foot from the centre, east of the square.",
          "quando": "Morning.",
          "tempo": "1-2 hours"
        },
        {
          "nome": "Playa Progreso and pig beach",
          "testo": "Progreso beach half an hour from Mérida, and Playa de los Cerditos, off the beaten track.",
          "come": "Bus or car from Mérida, about 40 minutes.",
          "quando": "Daytime.",
          "tempo": "Full day",
          "consiglio": "A mid-trip break without long transfers."
        },
        {
          "nome": "Evening between La Negrita and the Mezcalería",
          "testo": "Venues with live music and mezcal in the historic centre.",
          "come": "On foot from the centre.",
          "quando": "Evening.",
          "tempo": "An evening"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Plaza Grande and market",
            "Afternoon: Paseo de Montejo",
            "Evening: La Negrita and Mezcalería"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: centre and market",
            "Day 2: Playa Progreso and pig beach"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Historic centre",
          "perChi": "on foot to everything",
          "testo": "Boutique hotels in colonial houses, near restaurants and the square."
        },
        {
          "nome": "Paseo de Montejo",
          "perChi": "elegance",
          "testo": "Avenue of 20th-century mansions, quieter."
        }
      ],
      "sapori": [
        {
          "nome": "Sopa de lima",
          "testo": "Chicken and lime soup."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Pork marinated in pibil."
        },
        {
          "nome": "Papadzules",
          "testo": "Tortillas filled with egg and a pumpkin-seed sauce."
        },
        {
          "nome": "Salbutes and panuchos",
          "testo": "Fried filled tortillas."
        }
      ],
      "attenzioni": [
        "Heat and humidity are strong: drink a lot and visit in the morning.",
        "Unofficial taxis: use Uber or agreed taxis.",
        "The centre is safe in the evening on the main streets; elsewhere ask for advice."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'The arcades of the Palacio Municipal on the main square of the old town of Mérida, Yucatán',
    immagine: '/images/messico/merida.jpg',
  },
  {
    slug: 'campeche',
    paeseSlug: 'messico',
    ordine: 4,
    nome: 'Campeche',
    tipologia: ['cultura'],
    giorniConsigliati: '1 night, a convenient stopover',
    visitataPersonalmente: true,
    introduzione:
      "A fortified colonial city on the Gulf of Mexico, a UNESCO World Heritage site, far less touristy than the other stops on the itinerary.",
    percheAndarci:
      "A well-kept, quiet old town, a good base before the longest transfer of the whole trip to Mahahual.",
    cosaVedere: ['Cathedral Square', 'Puerta del Mar and the waterfront', 'Fortified old town'],
    cosaFare: ['Walk from the Cathedral to the waterfront, through the Puerta del Mar'],
    doveDormire: 'I slept at Hotel Francis Drake, in the old town.',
    doveMangiare:
      "I didn't note down the restaurants. In the fortified old town there are several places on the main streets near the Cathedral, handy for a quick dinner before the long transfer the next day to Mahahual.",
    comeArrivare: 'By van/car from Mérida, with stops at Uxmal, Becal and Pomuch along the way.',
    comeSpostarsi: 'The old town is small and easy to get around on foot.',
    periodoMigliore: "I didn't note it for Campeche; the dry season recommended for the Yucatán applies, from November to April.",
    costi: "I didn't note down my spending in Campeche; the interior in general is very cheap.",
    erroriDaEvitare: [
      'The next day, toward Mahahual, the transfer is very long and you change time zone: it\'s best to leave as early as possible in the morning',
    ],
    miaEsperienza:
      "A short but pleasant stop. Cathedral Square is very well kept, with the typical shoe shiners, and the walk to the waterfront through the Puerta del Mar was a nice way to stretch my legs after hours in the van.",
      "luoghi": [
        {
          "nome": "Cathedral Square",
          "testo": "The main square of the historic centre, well kept, with the cathedral and the typical shoeshiners. The pastel facades of the houses around it are the Campeche of the photos; in the evening the square fills with families and sweet sellers.",
          "come": "On foot.",
          "quando": "Morning and evening.",
          "tempo": "1 hour"
        },
        {
          "nome": "Puerta del Mar and waterfront",
          "testo": "The sea gate of the old walls, leading to the waterfront. The walk from the cathedral is a good way to stretch after hours in a van.",
          "come": "On foot from the square.",
          "quando": "Afternoon and evening.",
          "tempo": "1-2 hours"
        },
        {
          "nome": "Walls and bastions",
          "testo": "Campeche is a fortified city, a UNESCO site since 1999, with walls and bastions built in the 17th and 18th centuries against pirate attacks. Some bastions house small museums and gardens; part of the walls can be walked.",
          "come": "On foot along the walls.",
          "quando": "Morning.",
          "tempo": "2 hours",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Fuerte de San Miguel",
          "testo": "A fort on the hill south-west of the centre, with a moat and cannons facing the Gulf. Inside is the archaeological museum with the jade masks from Calakmul; the sunset over the sea from its ramparts is one of the best in town.",
          "come": "Taxi from the centre, about 10 minutes.",
          "quando": "Late afternoon; like many INAH museums, check the Monday closure.",
          "tempo": "1-2 hours",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Edzná",
          "testo": "An inland Maya site with the Building of the Five Storeys, a terraced pyramid on a large plaza. It sees few visitors compared with the Yucatán sites, and you walk it almost alone, among iguanas and silence.",
          "come": "Car, taxi or tour from Campeche, about an hour.",
          "quando": "Early morning, before the heat.",
          "tempo": "Half a day",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Bring water and a hat: there is little shade."
        }
      ],
      "programmi": [
        {
          "titolo": "Half a day",
          "tappe": [
            "Cathedral Square",
            "Puerta del Mar and waterfront",
            "Dinner in the historic centre"
          ]
        },
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: walls and bastions",
            "Afternoon: walk and dinner"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Fortified historic centre",
          "perChi": "on foot to everything",
          "testo": "Hotels in colonial houses, very close to the cathedral and waterfront."
        }
      ],
      "sapori": [
        {
          "nome": "Pan de cazón",
          "testo": "Layered tortillas with shredded cazón (a small shark), black beans and tomato sauce. It is the city's signature dish, found in downtown restaurants and loncherías."
        },
        {
          "nome": "Camarones al coco",
          "testo": "Shrimp fried in a crust of grated coconut, often with a sweet fruit sauce. Order them in the seafood restaurants on the waterfront."
        },
        {
          "nome": "Coctel campechano",
          "testo": "A cold glass of mixed seafood, such as shrimp, octopus and oysters, with tomato sauce, lime and avocado. In Mexico 'campechano' simply means 'mixed'."
        },
        {
          "nome": "Panuchos and codzitos",
          "testo": "Fried tortillas filled with beans and small rolled tacos with tomato sauce: the peninsula's antojitos, in markets and at street suppers."
        }
      ],
      "attenzioni": [
        "The next day's transfer towards Mahahual is very long and crosses a time zone: leave early.",
        "The centre is quiet in the evening, but avoid empty streets outside the walls.",
        "Low prices: do not pay more for improvised tours.",
        "Many INAH museums, including those in the forts, close on Mondays: check before planning the day.",
        "From April to October the humid heat is intense: go out early in the morning and at sunset, and drink plenty."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'A gate in the old walls of the historic center of Campeche with a colorful colonial house in the background',
    immagine: '/images/messico/campeche.jpg',
  },
  {
    slug: 'mahahual',
    paeseSlug: 'messico',
    ordine: 5,
    nome: 'Mahahual',
    tipologia: ['mare', 'natura'],
    giorniConsigliati: '1-2 nights',
    visitataPersonalmente: true,
    introduzione:
      "A town on the Caribbean Sea, much quieter than Tulum or Playa del Carmen. It's the base for snorkeling with turtles and for the trip's second Temazcal.",
    percheAndarci: 'Calm sea and a handy base for the boat trip to Bacalar.',
    cosaVedere: ['Mahahual waterfront'],
    cosaFare: ['Snorkeling with turtles', 'Evening Temazcal in the jungle'],
    doveDormire: "I didn't note the name of the place; on the waterfront there's a choice at every price level.",
    doveMangiare: "I didn't note down where we ate in Mahahual.",
    comeArrivare: 'From Campeche, with the longest transfer of the whole itinerary and a time zone change.',
    comeSpostarsi: "I have no notes on getting around in Mahahual.",
    periodoMigliore: "I didn't note it for Mahahual; the dry season recommended for the area applies, from November to April.",
    costi: "I didn't note down my spending in Mahahual.",
    erroriDaEvitare: [
      "The arrival day has a tight schedule: if you slip on the timing of the previous stops (especially Balam Ku) the rest of the day falls apart",
    ],
    miaEsperienza:
      "I arrived in Mahahual in the evening, after the longest transfer of the trip. The next day was one of the fullest of the itinerary, with Bacalar, snorkeling with turtles and the Temazcal: the detail is on the trip page.",
      "luoghi": [
        {
          "nome": "Mahahual waterfront",
          "testo": "The waterfront of the village on the Caribbean, with restaurants, beach clubs and the cruise-ship pier, south of the Riviera Maya.",
          "come": "From Campeche with the longest transfer of the itinerary and a time-zone change.",
          "quando": "Afternoon and evening.",
          "tempo": "Half a day"
        },
        {
          "nome": "Snorkelling with turtles",
          "testo": "A boat trip a few metres off the coast, where green turtles live on the reef. Here the reef is very close to shore and far less busy than on the Riviera Maya: you also see rays, parrotfish and soft corals.",
          "come": "Tour from the waterfront with an operator.",
          "quando": "Morning.",
          "tempo": "2-3 hours"
        },
        {
          "nome": "Temazcal in the jungle",
          "testo": "A steam-bath ritual of indigenous tradition, with a guide, in the evening, in a spot in the jungle.",
          "come": "Booking with a local property.",
          "quando": "Evening.",
          "tempo": "2-3 hours"
        },
        {
          "nome": "Banco Chinchorro",
          "testo": "A biosphere reserve off Mahahual, one of the largest coral atolls in the Caribbean, with pristine reefs and wrecks. It is the finest trip in the area but also the most weather-dependent: in strong wind trips are cancelled.",
          "come": "Only with authorised operators from Mahahual or Xcalak, by fast boat.",
          "quando": "Morning, with a calm sea; best in the dry months.",
          "tempo": "Full day",
          "consiglio": "Ask how many hours of sailing there are and what the price includes (park fee, lunch, gear)."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: snorkelling with turtles",
            "Afternoon: waterfront",
            "Evening: temazcal"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: arrival from Campeche, waterfront",
            "Day 2: Bacalar as a day trip, snorkelling and temazcal"
          ]
        }
      ],
      "zone": [
        {
          "nome": "On the waterfront",
          "perChi": "on foot to everything",
          "testo": "Hotels in all price ranges, noisy on cruise days."
        },
        {
          "nome": "Outside the centre",
          "perChi": "calm",
          "testo": "More isolated cabañas, away from the ships."
        }
      ],
      "sapori": [
        {
          "nome": "Whole fried fish and ceviche",
          "testo": "The catch of the day fried whole, with rice, salad and tortillas, in the waterfront restaurants. At lunchtime go for fish or shrimp ceviche."
        },
        {
          "nome": "Pez león",
          "testo": "Lionfish is an invasive species in the Caribbean and here it is gladly cooked: in ceviche, fried or in tacos. Ordering it also helps the reef."
        },
        {
          "nome": "Fish tacos",
          "testo": "Battered or griddled fish in a corn tortilla, with cabbage, salsa and lime. At the village stalls they cost far less than on the seafront."
        },
        {
          "nome": "Agua fresca",
          "testo": "Fruit waters in big glasses: jamaica, horchata, lime with chaya. Good for the Caribbean heat, instead of fizzy drinks."
        }
      ],
      "attenzioni": [
        "Arrival day has a tight schedule: if you slip on the earlier stops (especially Balam Ku) the rest of the day falls apart.",
        "On cruise days the waterfront is crowded and prices rise.",
        "Strong sun: reef-safe sunscreen and water.",
        "Few ATMs, sometimes out of cash: arrive with enough pesos.",
        "Between spring and summer sargassum can arrive: ask locally which beaches are clean."
      ],
    esperienzeSlugs: ['snorkeling-tartarughe-mahahual', 'temazcal'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Mahahual beach with palm trees, tables and boats on the Caribbean Sea',
    immagine: '/images/messico/mahahual.jpg',
  },
  {
    slug: 'bacalar',
    paeseSlug: 'messico',
    ordine: 6,
    nome: 'Bacalar',
    tipologia: ['natura'],
    giorniConsigliati: 'half a day if on a tour from Mahahual, 1-2 nights to enjoy it at leisure',
    visitataPersonalmente: true,
    introduzione:
      "The \"lagoon of seven colors\", one of the most beautiful stretches of water in the Yucatán. You can visit it in a day from Mahahual or as a stop of its own, sleeping on site.",
    percheAndarci: 'For the water that changes color with depth, the boat tours and the kayak.',
    cosaVedere: ['Bacalar Lagoon'],
    cosaFare: ['2-hour boat tour on the lagoon', 'Kayak (in my case it was included after the boat tour)'],
    doveDormire: "I didn't sleep in Bacalar (I saw it in a day from Mahahual), so I have no place to recommend; if you want to stay a night there are lodgings on the lagoon at every price level.",
    doveMangiare: "On the day trip I didn't note down where we ate.",
    comeArrivare: 'On an organized tour from Mahahual, or on your own by van or car.',
    comeSpostarsi: 'We were on an organized tour from Mahahual; on the lagoon you get around by boat or kayak.',
    periodoMigliore: "I didn't note it for Bacalar; the dry season recommended for the area applies, from November to April.",
    costi: "I didn't note down the price of the tour.",
    erroriDaEvitare: [
      'On a tour from Mahahual there is little time: if you can, consider a night on site to enjoy it at leisure',
    ],
    miaEsperienza:
      "I only saw it in a day, with a 2-hour boat tour and an hour of kayaking. Beautiful, but the tight schedule showed: it's one of the stops I'd do more slowly on another trip.",
      "luoghi": [
        {
          "nome": "Bacalar Lagoon",
          "testo": "The lagoon of seven colours, about 40 km long, with water in shades of blue and turquoise over a white bottom.",
          "come": "From Mahahual on an organised tour or independently by van or car.",
          "quando": "Morning, with full light.",
          "tempo": "Half a day or more",
          "consiglio": "Time on a day trip is tight: if you can, consider a night on site to enjoy it calmly."
        },
        {
          "nome": "Boat tour and kayak",
          "testo": "A 2-hour boat trip on the lagoon and, in my case, an hour of kayaking included after the tour.",
          "come": "Tour booked through the hotel or the lakeside.",
          "quando": "Morning.",
          "tempo": "3 hours"
        },
        {
          "nome": "Cenote Azul",
          "testo": "A deep, round cenote on the lagoon shore.",
          "come": "By taxi from the centre.",
          "quando": "Morning.",
          "tempo": "1-2 hours"
        },
        {
          "nome": "Fuerte San Felipe",
          "testo": "An 18th-century fort against pirates, now a museum, on the lagoon shore.",
          "come": "On foot from the centre.",
          "quando": "Morning.",
          "tempo": "1 hour",
          "url": "https://www.inah.gob.mx/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "2-hour boat tour",
            "Kayak",
            "Lunch by the lake",
            "Cenote Azul"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: boat tour and Fuerte San Felipe",
            "Day 2: kayak and cenote, then departure"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Bacalar lakeside",
          "perChi": "lagoon view",
          "testo": "Hotels and cabañas right on the water, pricier."
        },
        {
          "nome": "Town centre",
          "perChi": "budget",
          "testo": "Cheaper, a few minutes from the lagoon."
        }
      ],
      "sapori": [
        {
          "nome": "Fresh fish",
          "testo": "Grilled on the lakeside."
        },
        {
          "nome": "Tacos and quesadillas",
          "testo": "From street stalls, in the centre."
        },
        {
          "nome": "Ceviche",
          "testo": "With lime and coriander."
        },
        {
          "nome": "Agua de Jamaica",
          "testo": "Hibiscus drink, typical of Mexico."
        }
      ],
      "attenzioni": [
        "On a tour time is short: consider a night.",
        "Protect the lagoon: biodegradable sunscreen is required in many places.",
        "Do not walk on the stromatolites: they are fragile organisms."
      ],
    esperienzeSlugs: ['tour-barca-bacalar'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Clear turquoise waters of the Bacalar lagoon with a wooden pier among the vegetation',
    immagine: '/images/messico/bacalar.jpg',
  },
  {
    slug: 'tulum',
    paeseSlug: 'messico',
    ordine: 7,
    nome: 'Tulum',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      'Maya ruins on a cliff above the Caribbean, some of the most beautiful beaches of the Riviera Maya and a nightlife that makes itself heard.',
    percheAndarci: "Culture (the archaeological site), sea (Playa Paraíso) and nights out in the same stop: elsewhere it's hard to find them together.",
    cosaVedere: ['Tulum archaeological site, on the cliff', 'Caleta Tankah', 'Playa Paraíso', 'Cenote near Dos Ojos, in the Sac Actun system'],
    cosaFare: [
      "Tulum archaeological site in the morning, before the worst of the heat: it's the only Maya site in Mexico facing the sea",
      'A day at Caleta Tankah (300 MXN per person, no cards; no refunds, even if you leave after a few minutes)',
      'Lunch and afternoon at Playa Paraíso, in one of the most recommended beach clubs in the area (paid loungers)',
      "Swim in a cenote in the Dos Ojos/Sac Actun area: it's in a cave, with stalactites, different from the open-air cenotes of the Yucatán",
      'For those with more time: Xcacel (100 MXN; food, alcohol and speakers not allowed; open 10-16, closed Mondays; from April to October you can see turtle hatching), or Gran Cenote or Cenote Calavera',
    ],
    doveDormire: "I didn't note the name of the place in Tulum.",
    doveMangiare:
      "Sabor de Mar for fish, El Takazo Jr for cheap tacos, Bonita (Tulum Burger Bar) for a break from Mexican food. For a more sophisticated dinner, TuTulum: reinvented Mexican cooking (about €40 per person), with a few insect-based dishes for the curious.",
    usciteSerali:
      "Straw Hat is the busiest place in the evening; in winter a festival may be happening in the area. For live music there's also Vagalume.",
    comeArrivare: 'By van or car from Mahahual (about 2-3 hours).',
    comeSpostarsi: "I have no notes on how we got around in Tulum.",
    periodoMigliore: "I didn't note it for Tulum; the dry season recommended for the area applies, from November to April.",
    costi: "I didn't note down my spending in Tulum; it's one of the pricier stops, with almost European prices.",
    erroriDaEvitare: [
      "At Caleta Tankah you're not refunded under any circumstances, even after a few minutes: better to think about it before paying the entry",
    ],
    miaEsperienza:
      "At Caleta Tankah the sea wasn't inviting at first, then the sun came out and the day changed, cenote included. The archaeological site on the cliff and Playa Paraíso remain among the strongest memories of the trip.",
      "luoghi": [
        {
          "nome": "Tulum archaeological site",
          "testo": "A Maya city on the cliff above the Caribbean, one of the few Maya sites facing the sea. El Castillo and the Temple of the Wind God are the key points; the walls enclosing the city on three sides explain the name Tulum, 'wall' in Maya (its ancient name was Zamá, 'dawn').",
          "come": "From Tulum town by taxi or bike; inside Parque del Jaguar a paid electric shuttle runs to the entrance. The small beach below the site is sometimes closed (sargassum or turtle nesting).",
          "quando": "Morning, before the heat and the coaches.",
          "tempo": "2 hours",
          "costo": "265 MXN for foreigners, archaeological zone and protected area combined (2026); the internal electric shuttle is about 20 MXN.",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "A swim in the cove below the cliff after the visit, if access is open."
        },
        {
          "nome": "Cenote Dos Ojos",
          "testo": "Two connected cenotes in a cave with stalactites, in the Sac Actun system: different from the open-air cenotes of Yucatán.",
          "come": "By car or taxi from Tulum, about 20 minutes north.",
          "quando": "Morning.",
          "tempo": "2 hours",
          "consiglio": "Around Tulum I'd skip the most touristy cenotes and suggest Dos Ojos. Next to it there's another beautiful one whose name I've forgotten."
        },
        {
          "nome": "Caleta Tankah",
          "testo": "A cove with turquoise water and a cenote, paid entry (300 MXN per person, no cards, no refunds).",
          "come": "Taxi from Tulum.",
          "quando": "Daytime.",
          "tempo": "Half a day",
          "consiglio": "At first the sea was not inviting, then the sun came out and the day changed."
        },
        {
          "nome": "Playa Paraíso",
          "testo": "A beach with beach clubs, among the most recommended in the area, with paid sunbeds.",
          "come": "Taxi from Tulum.",
          "quando": "Afternoon.",
          "tempo": "Half a day"
        },
        {
          "nome": "Xcacel",
          "testo": "A protected beach, one of the last on the coast without hotels, where turtles lay their eggs between spring and summer. The rules are strict: no food, alcohol or speakers; entry fee, hours and closing days should be checked locally.",
          "come": "Taxi or car from Tulum.",
          "quando": "Morning.",
          "tempo": "2-3 hours"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: archaeological site",
            "Lunch at Playa Paraíso",
            "Afternoon: Dos Ojos or Gran Cenote"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: archaeological site and Playa Paraíso",
            "Day 2: Caleta Tankah, Dos Ojos and Xcacel"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Tulum town",
          "perChi": "services and prices",
          "testo": "Hotels in the centre, restaurants, near bus stops."
        },
        {
          "nome": "Beachfront hotel zone",
          "perChi": "sea",
          "testo": "Hotels and beach clubs, pricier."
        }
      ],
      "sapori": [
        {
          "nome": "Cochinita pibil",
          "testo": "Marinated pork, a Yucatán speciality."
        },
        {
          "nome": "Tacos al pastor",
          "testo": "Al pastor and fish tacos, from street stalls."
        },
        {
          "nome": "Ceviche",
          "testo": "With lime and coriander, in beach clubs."
        },
        {
          "nome": "Agua de Jamaica",
          "testo": "Hibiscus, for the heat."
        }
      ],
      "attenzioni": [
        "Archaeological site: bring water and sunscreen, the heat is strong; climbing on structures is forbidden.",
        "Cenotes: follow the rules on sunscreen and showering; the most touristy are crowded.",
        "Caleta Tankah: no cards and no refunds, even if you leave after a few minutes."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'A group in wetsuits and snorkeling gear in a cave cenote near Dos Ojos, Tulum',
    immagine: '/images/messico/cenote-dos-ojos-gruppo.jpg',
  },
  {
    slug: 'playa-del-carmen',
    paeseSlug: 'messico',
    ordine: 8,
    nome: 'Playa del Carmen',
    tipologia: ['nightlife', 'mare'],
    giorniConsigliati: '1 evening in my itinerary, but you can stay 1-2 full days',
    visitataPersonalmente: true,
    introduzione: "The most social city on the Riviera Maya and the classic starting point for the excursion to Cozumel.",
    percheAndarci: 'Nightlife and, for those with an extra day, the second largest coral reef in the world at Cozumel.',
    cosaVedere: ['5th Avenue (5ta Avenida)'],
    cosaFare: [
      "Excursion to Cozumel on a shared catamaran (about 1,670 MXN per person, with round-trip ferry, 4 hours of sailing with snorkeling stops at Palancar/El Cielo/El Cielito, open bar and buffet lunch at Playa Mia) or on a private boat (about 700 MXN per person, plus the ferry, about 580 MXN round trip, with snacks and 2 beers per person). We didn't do it on this trip, but with more time I recommend it.",
      'A day at the public beaches: Mamitas Beach, Playacar Beach, Parque Fundadores',
      'Shopping on 5th Avenue',
      'An evening at Clandestino',
    ],
    doveDormire: "On this trip I spent only one evening in Playa del Carmen, without sleeping there: I have no place to recommend.",
    doveMangiare:
      "Las Camelias on 5th Avenue for a hearty meal, Zitla as an alternative. For a special occasion Mezcla (about €50 per person): expensive but very good.",
    usciteSerali:
      "Coco Bongo (the same chain as in Cancún) is the best-known choice; on 5th Avenue Clandestino and Santino are also very popular.",
    comeArrivare: 'By van or car from Tulum (about 1 hour).',
    comeSpostarsi: "I have no notes on getting around the city: I only saw it for one evening.",
    periodoMigliore: "I didn't note it; the dry season recommended for the Riviera Maya applies, from November to April.",
    costi: "For a single evening I didn't note down my spending; like Tulum, it has almost European prices.",
    erroriDaEvitare: [],
    miaEsperienza:
      "I only saw it in the evening, with a stop at Clandestino: too little to form an idea of the city, which deserves more time (maybe with the excursion to Cozumel, which we didn't do on my trip).",
      "luoghi": [
        {
          "nome": "5th Avenue (5ta Avenida)",
          "testo": "The main pedestrian street, parallel to the sea, with shops, restaurants and bars.",
          "come": "On foot from the centre.",
          "quando": "Afternoon and evening.",
          "tempo": "2 hours"
        },
        {
          "nome": "Mamitas Beach, Playacar and Parque Fundadores",
          "testo": "The public beaches of the centre, with beach clubs and free stretches.",
          "come": "On foot from the centre.",
          "quando": "Morning.",
          "tempo": "Half a day"
        },
        {
          "nome": "Cozumel by catamaran or private boat",
          "testo": "A day excursion to Cozumel with snorkelling on the Palancar, El Cielo and El Cielito reefs. We did not do it on this trip, but with more time I recommend it.",
          "come": "Shared catamaran about 1,670 MXN per person with return ferry, lunch at Playa Mia, open bar; private boat about 700 MXN plus ferry about 580 MXN return.",
          "quando": "Morning.",
          "tempo": "Full day"
        },
        {
          "nome": "Clandestino",
          "testo": "An evening venue in the centre.",
          "come": "On foot from 5ta.",
          "quando": "Evening.",
          "tempo": "An evening",
          "consiglio": "I saw it only in the evening, with a stop at Clandestino."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: public beach",
            "Lunch on 5ta Avenida",
            "Afternoon: shopping",
            "Evening: Clandestino"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: beaches and 5ta Avenida",
            "Day 2: Cozumel by catamaran"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centre (5ta Avenida)",
          "perChi": "nightlife",
          "testo": "Everything on foot, but noisy and expensive."
        },
        {
          "nome": "Playacar",
          "perChi": "resorts",
          "testo": "A gated resort area, quieter, near the ferry."
        }
      ],
      "sapori": [
        {
          "nome": "Tacos al pastor and fish tacos",
          "testo": "From street stalls."
        },
        {
          "nome": "Ceviche",
          "testo": "With lime, in seaside restaurants."
        },
        {
          "nome": "Cochinita pibil",
          "testo": "Yucatecan pork."
        },
        {
          "nome": "Aguachile",
          "testo": "Raw prawns in a spicy lime sauce."
        }
      ],
      "attenzioni": [
        "On 5ta Avenida prices are touristy: move one or two streets away to eat better.",
        "Touts selling tours: do not stop.",
        "The ferry to Cozumel has fixed times: check the last return."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'The beach and waterfront of Playa del Carmen seen from the sea, with boats and palm trees',
    immagine: '/images/messico/playa-del-carmen.jpg',
  },
  {
    slug: 'holbox',
    paeseSlug: 'messico',
    ordine: 9,
    nome: 'Holbox',
    tipologia: ['mare', 'natura', 'nightlife'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      'A car-free island on the Gulf of Mexico, reachable only by ferry: whale shark, bioluminescence and a pace much slower than the rest of the trip.',
    percheAndarci: "It's the high point of the itinerary, for the whale shark and for the atmosphere of the island.",
    cosaVedere: ['Punta Mosquito', 'The center of the island, without cars'],
    cosaFare: [
      'Whale shark excursion (see the dedicated experience page)',
      "Bioluminescence at Punta Mosquito: on your own with a \"carrito\" (local taxi/golf cart) to the spot; on foot (not recommended: about an hour's walk each way, mostly in the dark); by guided kayak (500 MXN per person for groups over 8 people, 400 MXN under 8) or with an organized boat tour. It's best seen from April to November and depends on moon phases and weather: it's worth asking on site the same day.",
      "3 Islas tour (Isla Pájaros, Yalahau cenote, Isla Pasión or Punta Mosquito): a shared boat trip of about 3 hours, 750-900 MXN per person depending on the operator (some include the hotel transfer for about 1,100 MXN); the entry to the Yalahau cenote is paid separately, about 200 MXN. You see flamingos, dolphins and several bird species.",
      "Cabo Catoche (we didn't do it on my trip, but it's among the most offered excursions on the island): the northernmost point of the Yucatán, where the Gulf of Mexico and the Caribbean Sea meet. A shared boat tour from morning to late afternoon, with snorkeling on a shallow coral reef (about 2 meters: turtles, octopuses, lobsters and sometimes harmless nurse sharks), fishing and fresh ceviche prepared on the spot. Roughly $80-100 per person; it's worth comparing several operators before booking.",
      'Horseback ride on the beach: 850 MXN per person for an hour and a half',
      'Beach clubs with a minimum spend (usually deducted from the final bill): Carolinda, Zomay, Barbarossa, Amaite Beach Club',
      "If it rains: a cooking class at Puerta Rosa (fairly pricey, but a good alternative) or a yoga class",
    ],
    doveDormire: "I didn't note the name of the place in Holbox.",
    doveMangiare:
      "To spend little: Taco Queto for cheap, good tacos, El Crustaceo Kascarudo for no-frills fish and seafood. Mid-range: Mandarina, Posada Mawimbi, Viva Zapata, Chiringuito Raíces. For an occasion: Casa Alebrije or Tacos de Humo (here a welcome tequila on the house often turns up).",
    usciteSerali:
      "At sunset Café del Mar is the right place for a drink with a view. In the evening: Hot Corner for pachangueo and live music, La Combi between live music and DJ sets, Bikini Bottom for a DJ set on the beach, Tribe Hostel for live music, Chobys if you want to catch the sunset later still.",
    comeArrivare: 'Ferry from Chiquilà (25-30 minutes), reachable by van/car from Cancún.',
    comeSpostarsi: 'A car-free island: on foot or with "carritos" (local taxis/golf carts).',
    periodoMigliore: 'Bioluminescence is best seen from April to November, and depends on moon phases and weather.',
    costi: "I didn't note down the overall bill for Holbox; the prices of the individual excursions are in the entries above and in the experience pages.",
    erroriDaEvitare: [
      'Heading out for the evening bioluminescence without lots of repellent: at Punta Mosquito the mosquitoes give no respite',
      "Walking to see the bioluminescence: it's almost an hour's walk in the dark each way, better a carrito, a kayak or a boat tour",
      "The 3 Islas tour is nice but a bit redundant if you've already seen similar things elsewhere on the trip",
    ],
    miaEsperienza:
      "Holbox was the right ending for the trip. If I had to recommend a single activity from the whole itinerary, it would be the whale shark excursion, which I did right here.",
      "luoghi": [
        {
          "nome": "Whale shark",
          "testo": "A boat excursion to swim with the whale shark, allowed in small groups. There is a dedicated experience card. If I had to recommend a single activity of the whole itinerary, it would be this.",
          "come": "Tour from the Holbox port, with a guide.",
          "quando": "June-September, the window when whale sharks are in Holbox waters.",
          "tempo": "Half a day"
        },
        {
          "nome": "Bioluminescence at Punta Mosquito",
          "testo": "Luminescent plankton lights up the water at night. Independently with a «carrito» to the point; by kayak with a guide (500 MXN per person above 8 people, 400 below); or with a boat tour.",
          "come": "Ask on site the same day: it depends on lunar phases and weather.",
          "quando": "Evening; best seen from April to November.",
          "tempo": "2 hours",
          "consiglio": "Going on foot is not advised: about an hour's walk each way, mostly in the dark."
        },
        {
          "nome": "3 Islas tour",
          "testo": "A shared boat trip of about 3 hours, with flamingos, dolphins and birds: Isla Pájaros, Yalahau cenote, Isla Pasión or Punta Mosquito.",
          "come": "750-900 MXN per person depending on the operator; some include the hotel transfer (about 1,100 MXN). Yalahau cenote is paid separately, about 200 MXN.",
          "quando": "Morning.",
          "tempo": "3 hours"
        },
        {
          "nome": "Cabo Catoche",
          "testo": "An excursion to the northernmost point of Yucatán, where the Gulf of Mexico meets the Caribbean. Snorkelling on a shallow reef, fishing and fresh ceviche. We did not do it on the trip.",
          "come": "Shared tour from morning to late afternoon, about 80-100 USD per person; compare several operators.",
          "quando": "Full day.",
          "tempo": "Full day"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: 3 Islas tour",
            "Afternoon: beach",
            "Evening: bioluminescence"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: whale shark (in season)",
            "Day 2: 3 Islas and Punta Mosquito"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Days 1-2 as above",
            "Day 3: Cabo Catoche or a horse ride"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Town centre",
          "perChi": "on foot to everything",
          "testo": "Restaurants, shops and hotels near the square, sandy streets without cars."
        },
        {
          "nome": "Beach to the north-east",
          "perChi": "calm",
          "testo": "Seaside hotels, more isolated."
        }
      ],
      "sapori": [
        {
          "nome": "Holbox pizza",
          "testo": "With lobster, typical of the island."
        },
        {
          "nome": "Ceviche",
          "testo": "Fresh fish."
        },
        {
          "nome": "Fish tacos",
          "testo": "From street stalls."
        },
        {
          "nome": "Lobster and seafood",
          "testo": "Grilled, in season."
        }
      ],
      "attenzioni": [
        "Whale shark: seasonal; not guaranteed and depends on the operator.",
        "Bioluminescence: depends on lunar phases and weather, ask on site the same day.",
        "On Holbox beaches there is sargassum in some months: it is not a flaw of the island but must be factored in."
      ],
    esperienzeSlugs: ['squalo-balena-holbox', 'bioluminescenza-holbox', 'tour-3-islas-holbox', 'cabo-catoche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'A boat anchored in the shallow, crystal-clear water of Holbox, with the white shore and palm trees on the horizon',
    immagine: '/images/messico/holbox-barca-acqua-bassa-riccardo.jpg',
  },
]
