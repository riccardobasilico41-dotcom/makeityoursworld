import type { Destinazione } from '@/lib/types'

export const destinazioniBelize: Destinazione[] = [
  {
    slug: 'caye-caulker',
    paeseSlug: 'belize',
    ordine: 1,
    nome: 'Caye Caulker',
    tipologia: ['mare', 'isole'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "An island a few hundred meters long, with no cars (only golf carts and bicycles), with the official motto \"Go Slow\" written everywhere. It's the cheapest and most relaxed base for the Belizean sea.",
    percheAndarci:
      "It's the simplest and cheapest way to be on the second-largest barrier reef in the world: you sleep on the island, snorkel every day and live barefoot.",
    cosaVedere: [
      "The Split, the channel opened by a hurricane that divides the island in two, where everyone gathers at sunset",
      'The barrier reef offshore, part of the Belize Barrier Reef Reserve System (UNESCO)',
      'The mangroves and lagoons on the west side of the island',
    ],
    cosaFare: [
      'Snorkeling at Hol Chan Marine Reserve and Shark Ray Alley (see the dedicated experience card)',
      'A sunset sailing trip',
      'A day of diving or a scenic flight over the Great Blue Hole',
      'Kayaking among the mangroves, or even just a bike ride from one end of the island to the other',
    ],
    doveDormire: "The whole island can be covered on foot: you go from the hostels near the pier to the quieter cabañas on the east side.",
    doveMangiare:
      "Belize is expensive compared to its neighbors and on Caye Caulker you feel it, but there's a way out: the afternoon street barbecues, with grilled chicken or fish, rice and beans for a few dollars, and the women selling fried fish and fry jacks on the main street. The everyday dish is rice and beans with stewed meat. Lobster has a precise season (mid-June to February): out of season, if it's on the menu, it's frozen. Try conch ceviche at least once, which here is a local product.",
    comeArrivare:
      "International flight to Belize City (BZE), then a water taxi from the terminal downtown (about 45 minutes). Alternatively a domestic flight to Caye Caulker with Tropic Air or Maya Island Air.",
    comeSpostarsi: "On foot or by bicycle; golf carts can be rented but are of little use, because the island can be crossed in twenty minutes.",
    periodoMigliore: 'December-April for calm sea and visibility; June to November rainy and hurricane season',
    costi: 'water taxi from Belize City about 30-40 BZD each way; half-day snorkeling tour 60-100 BZD plus marine park fees',
    erroriDaEvitare: [
      "Expecting classic Caribbean beaches: the coast is mostly mangroves and piers, you get in the water from the docks",
      "Not budgeting for marine park entrance fees, often excluded from the tour price",
    ],
    miaEsperienza:
      "We got there from Belize City by water taxi and the \"Go Slow\" written everywhere describes the island as it is: no cars, only golf carts and bicycles, and within two days the rhythm slowed down by itself. The classic Caribbean beach is almost absent, the coast is mangroves and piers, and those who expect one are thrown for half a day before understanding that here the sea is done offshore. Offshore, in fact, is the reef: on the boat trip to Hol Chan and Shark Ray Alley we were in the water a meter from nurse sharks and rays that paid not the slightest attention to those watching. We left the afternoon free until sunset at the Split, where the whole island gathers. Belize costs almost double Guatemala, and here you feel it.",
      "luoghi": [
        {
          "nome": "The Split",
          "testo": "The channel that splits the island in two. Hurricane Hattie, in 1961, opened a shallow passage; the villagers then dug it out by hand into a channel. Today it is the island's meeting point: a bar on the dock, jumps off the bridge and a sunset everyone watches together.",
          "come": "At the end of the main street, a few minutes' walk from the water taxi dock.",
          "quando": "Late afternoon until sunset.",
          "tempo": "1-2 hours",
          "consiglio": "There is a current in the channel: enter the water from the calmer side and keep an eye on the boats."
        },
        {
          "nome": "Hol Chan Marine Reserve and Shark Ray Alley",
          "testo": "Hol Chan is a natural channel in the reef, south of Ambergris, inside a marine reserve that is part of the UNESCO Belize reef site. Shark Ray Alley is where fishermen used to clean their nets: the scraps drew nurse sharks and rays, which now swim up to the boat.",
          "come": "Half-day boat trip from Caye Caulker with guide and gear. The marine park fee is often not included in the price.",
          "quando": "Morning, when the sea is calmest; best season December-April.",
          "tempo": "Half a day",
          "costo": "Reserve fee 15 USD per person (since 2024), often not included in the tour price.",
          "url": "https://www.travelbelize.org/",
          "consiglio": "From people who have been: in the water a metre from nurse sharks and rays that pay no attention to who is watching. Before booking, ask what the price includes."
        },
        {
          "nome": "The Great Blue Hole from above",
          "testo": "A marine sinkhole more than 300 metres wide and about 124 deep, in the middle of Lighthouse Reef, an offshore atoll. The perfect circle can only be seen from above.",
          "come": "Scenic flight in a small plane from the island or from Belize City. The alternative is a full-day dive, which costs more and is more tiring.",
          "quando": "Clear day, preferably in the morning.",
          "tempo": "Half a day",
          "consiglio": "The flight costs far less than the dive and shows what the photos promise. Underwater you get a blue wall with little marine life."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Bike ride from one end of the island to the other",
            "Lunch from a street barbecue",
            "Snorkelling on the reef in the early afternoon",
            "Sunset at the Split"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: arrive by water taxi, walk around, sunset at the Split",
            "Day 2: Hol Chan and Shark Ray Alley in the morning, free afternoon, seafood dinner on the main street"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Days 1 and 2 as above",
            "Day 3: scenic flight over the Blue Hole or kayaking in the mangroves, then water taxi to Ambergris"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Near the dock",
          "perChi": "social life and low prices",
          "testo": "Hostels and guesthouses a few steps from bars and restaurants. You sleep near the evening music, so bring earplugs."
        },
        {
          "nome": "East and north side of the island",
          "perChi": "those who want quiet",
          "testo": "Quieter cabañas with the sea in front. For dinner you walk a little way, in the evening with a torch."
        }
      ],
      "sapori": [
        {
          "nome": "Rice and beans with stew chicken",
          "testo": "Rice and red beans cooked in coconut milk with stewed chicken: the everyday dish. Found in the restaurants and stalls on the main street."
        },
        {
          "nome": "Fry jacks",
          "testo": "Puffy fried dough, eaten at breakfast with eggs, beans or honey."
        },
        {
          "nome": "Conch ceviche",
          "testo": "Raw conch marinated in lime with onion and coriander. It is a local product, eaten fresh; the fishery is closed from July to September, so in those months it should not be on the menu."
        },
        {
          "nome": "Lobster",
          "testo": "Fishing is closed for a few months between late winter and early summer (since 2021, March to June): in that period, if it is on the menu, it is frozen."
        },
        {
          "nome": "Street barbecue",
          "testo": "In the afternoon, grilled chicken or fish with rice and beans, for a few dollars."
        }
      ],
      "attenzioni": [
        "Belize is expensive compared with Mexico and Guatemala, especially for excursions and activities: always ask what is included.",
        "Marine park fees are often excluded from the tour price and paid separately.",
        "At sunset sandflies appear, biting midges: use repellent and long clothes.",
        "Do not touch or feed sharks and rays while snorkelling, even if they come close."
      ],
    esperienzeSlugs: ['hol-chan-shark-ray-alley'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Shore with palm trees, wooden piers and shallow water at Caye Caulker, Belize',
    immagine: '/images/belize/caye-caulker.jpg',
  },
  {
    slug: 'ambergris-caye',
    paeseSlug: 'belize',
    ordine: 2,
    nome: 'Ambergris Caye and San Pedro',
    tipologia: ['mare', 'diving'],
    giorniConsigliati: '3-5 days',
    visitataPersonalmente: true,
    introduzione:
      "The largest and most developed island in Belize, with the town of San Pedro as its center: more services, restaurants and dive centers than Caye Caulker, but also higher prices.",
    percheAndarci:
      "It's the best base for those traveling mainly for diving: from here depart the trips to Hol Chan, to the Blue Hole and to the outermost points of the reef.",
    cosaVedere: [
      'Hol Chan Marine Reserve, the natural channel in the reef',
      'Shark Ray Alley, where you swim with nurse sharks and rays',
      'Secret Beach, on the west side of the island, with very shallow water',
      'The center of San Pedro, among colorful houses and golf carts',
    ],
    cosaFare: [
      'Dives on the reef or a day trip to the Great Blue Hole (three dives, long day and open sea)',
      'Snorkeling at Hol Chan and Shark Ray Alley',
      'Kitesurfing and windsurfing on the windward side of the island',
    ],
    doveDormire: 'San Pedro for the services and nightlife; the areas north and south of the island for quieter resorts, reachable by golf cart or boat.',
    doveMangiare:
      "San Pedro has more choice than anywhere in the country and also the highest prices: on the waterfront you pay for the location. In the streets behind there are the comedores where locals have lunch, with the same stew chicken at a quarter of the price. Look for the stands that grill the day's catch and the corn tortillas made on the spot. In season it's worth trying the conch fritter and, as a local drink, the seaweed shake, which described doesn't sound convincing and then works.",
    comeArrivare: 'Water taxi from Belize City (about 1h30, often with a stop at Caye Caulker) or a 15-minute domestic flight from Belize City.',
    comeSpostarsi: 'Rental golf carts, golf-cart taxis, bicycles; shuttle boats for the areas farther north.',
    periodoMigliore: 'December-April; the Blue Hole requires calm seas, more likely in the dry months',
    costi: 'Blue Hole dive 300-400 USD per person (three dives, lunch included); golf cart rental 50-80 USD per day',
    erroriDaEvitare: [
      "Booking the Blue Hole without adequate diving experience: the wall requires a deep descent and many operators ask for an advanced certification or a minimum number of dives",
      "Assuming the Blue Hole is spectacular for snorkeling too: from the surface you see little, the best view is from the air",
    ],
    miaEsperienza:
      "From Caye Caulker we moved by boat to Ambergris, the largest and most developed island in Belize: compared to Caye Caulker, San Pedro has more restaurants, more dive centers, more golf carts. It's where you decide how to approach the Blue Hole. The full-day dive costs quite a lot, often requires an advanced certification and underwater shows a blue wall with few stalactites and little fish; the famous photo of the perfect circle is seen only from above, and the scenic flight costs much less and is truer to what you imagine. For those staying on the water there's Secret Beach, with very shallow water. The last morning we kept free, with one last swim and a seaweed shake on the waterfront, before going back to Belize City for the flight.",
      "luoghi": [
        {
          "nome": "Hol Chan and Shark Ray Alley from San Pedro",
          "testo": "The natural channel in the reef and the spot for nurse sharks and rays, a few minutes by boat from San Pedro. Ambergris is the closest departure point.",
          "come": "Half-day boat trip booked in San Pedro; gear included. Park fee often extra.",
          "quando": "Morning; December-April.",
          "tempo": "Half a day",
          "costo": "Reserve fee 15 USD per person (since 2024), often not included in the tour price.",
          "url": "https://www.travelbelize.org/",
          "consiglio": "You get there sooner, so another snorkelling stop can fit in the same trip."
        },
        {
          "nome": "Secret Beach",
          "testo": "A beach away from the centre of San Pedro, with very shallow water and pale sand.",
          "come": "Golf-cart taxi or boat from San Pedro; ask locally about the state of the road.",
          "quando": "Morning or afternoon, with clear sky.",
          "tempo": "Half a day",
          "consiglio": "You go for swimming and eating by the water, not for surf. Bring cash."
        },
        {
          "nome": "Great Blue Hole",
          "testo": "A marine sinkhole in Lighthouse Reef, a UNESCO site. From San Pedro you go by boat for the dive or by plane for the scenic flight.",
          "come": "Dive: a full day with several dives in open sea; many operators require an advanced certification. Scenic flight: half a day.",
          "quando": "Calm-sea days, more likely from December to April.",
          "tempo": "Full day",
          "consiglio": "The best view is from the plane, and it costs far less. Underwater it is a blue wall with few stalactites and little marine life."
        },
        {
          "nome": "San Pedro town",
          "testo": "Sandy streets with colourful houses, cafés, restaurants and dive centres. The seafront is the heart of town, with the docks where every trip starts.",
          "come": "On foot from the main pier. On the island you get around by golf cart.",
          "quando": "Early morning for bookings, evening for waterfront life.",
          "tempo": "Half a day"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning at Hol Chan and Shark Ray Alley",
            "Lunch in a comedor away from the waterfront",
            "Afternoon at Secret Beach",
            "Dinner in San Pedro"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Hol Chan and Shark Ray Alley, sunset on the waterfront",
            "Day 2: scenic flight over the Blue Hole or a day of diving, then Secret Beach"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Days 1 and 2 as above",
            "Day 3: kitesurfing or windsurfing on the windward side, a last swim and departure for Belize City"
          ]
        }
      ],
      "zone": [
        {
          "nome": "San Pedro",
          "perChi": "services and nightlife",
          "testo": "Restaurants, dive centres and everything on foot. Noise in the evening and higher prices on the waterfront."
        },
        {
          "nome": "North and south of the island",
          "perChi": "quiet resorts",
          "testo": "Wider beaches and silence. For dinner you need a golf cart or shuttle boat."
        }
      ],
      "sapori": [
        {
          "nome": "Stew chicken in the comedores",
          "testo": "Stewed chicken with rice and beans, the same dish as on the waterfront for much less, in the streets behind the town."
        },
        {
          "nome": "Conch fritters",
          "testo": "Conch fritters, in season."
        },
        {
          "nome": "Seaweed shake",
          "testo": "A seaweed smoothie with milk, spices and cinnamon. It sounds unconvincing, but you drink it."
        },
        {
          "nome": "Grilled fish",
          "testo": "The catch of the day at San Pedro's stalls, with corn tortillas made on the spot."
        }
      ],
      "attenzioni": [
        "The San Pedro waterfront is expensive: to eat better and spend less, move to the inner streets.",
        "The Blue Hole requires adequate diving experience: many operators ask for an advanced certification or a minimum number of dives.",
        "Snorkelling at the Blue Hole surface shows little: it is not a reason to spend that much.",
        "Prices in Belize dollars or USD: always ask in which currency the quote is."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'A café in a yellow house with porches along a street in San Pedro, Ambergris Caye, Belize',
    immagine: '/images/belize/ambergris-caye.jpg',
  },
  {
    slug: 'san-ignacio-cayo',
    paeseSlug: 'belize',
    ordine: 3,
    nome: 'San Ignacio and the Cayo',
    tipologia: ['natura', 'cultura', 'avventura'],
    giorniConsigliati: '2-4 days',
    visitataPersonalmente: true,
    introduzione:
      "The interior of Belize, on the border with Guatemala: jungle, rivers, Maya sites and the archaeological cave of Actun Tunichil Muknal, among the most impressive in the world.",
    percheAndarci:
      "It balances the islands well: in a few days you go from the Caribbean sea to the jungle, with one of the most intense archaeological experiences in Mesoamerica.",
    cosaVedere: [
      'The ATM cave (Actun Tunichil Muknal), with Maya ceramics and human remains left in situ',
      'Xunantunich, a Maya site reached by a hand-cranked ferry on the Mopan River',
      'Caracol, the largest Maya site in Belize, inside the Chiquibul Forest Reserve',
      'The Green Hills Butterfly Ranch and the natural pools of Rio On, along the Mountain Pine Ridge',
    ],
    cosaFare: [
      'Excursion to the ATM cave, with a mandatory guide and cameras forbidden (see the dedicated experience card)',
      'Canoeing on the Macal River',
      'Cave tubing, floating on an inner tube through the caves',
      'A day at Tikal, in Guatemala: the border is about an hour from San Ignacio',
    ],
    doveDormire: 'San Ignacio for prices and services; the jungle lodges along the Macal River or on the Mountain Pine Ridge to stay inside the jungle.',
    doveMangiare:
      "In San Ignacio you eat better and spend less than in the rest of Belize, thanks to the Saturday morning market: fruit stalls, pupusas, tamales and Chinese-Belizean cooking, a combination common in the country that works. On weekdays the evening stands on the main street serve stew chicken and grilled chicken, and fry jacks for breakfast. Local cuisine mixes Maya, Creole and Mexican influences; in the Cayo the Maya one prevails.",
    comeArrivare: "Bus or shuttle from Belize City (about 2-3 hours) along the George Price Highway; it is also the overland entry point from Guatemala (Melchor de Mencos border).",
    comeSpostarsi: 'Organized tours for the sites and caves (almost always mandatory); shared taxis and local buses for short trips.',
    periodoMigliore: 'December-April; the ATM cave may close after heavy rain because of the water level',
    costi: 'ATM tour 100-140 USD per person including transport, lunch and admissions; Xunantunich about 10 USD admission',
    erroriDaEvitare: [
      "Bringing a camera to the ATM cave: it has been forbidden for years, since an accidental fall damaged an artifact, and there are no exceptions",
      'Booking the ATM tour with unauthorized operators: access is limited and reserved for guides with a specific license',
      "Underestimating that in the cave you walk and swim in cold water for hours, with tight passages",
    ],
    miaEsperienza:
      "We arrived in San Ignacio from the Melchor de Mencos border, with the first encounter with English and with the highest prices in Belize. The next day we devoted to the ATM cave, the most impressive thing in all of Belize: a hike through the jungle with three river crossings, then you enter by swimming into an underground river and go on for hours in cold water, with passages where you have to turn sideways. In the upper chamber you take off your shoes and walk in socks among intact ceramics and human remains left where the Maya had laid them more than a thousand years ago, including the \"Crystal Maiden\". No photos, forbidden since an accidental fall damaged an artifact. The following day was lighter: Xunantunich, reached by a small hand-cranked ferry on the Mopan River, and in the afternoon the pools of Rio On on the Mountain Pine Ridge. Those with problems with tight spaces or cold water can choose Xunantunich, which is outdoors.",
      "luoghi": [
        {
          "nome": "Actun Tunichil Muknal (ATM)",
          "testo": "A Maya archaeological cave with pottery and human remains left where they were placed, some over a thousand years old, including the «Crystal Maiden», the calcified, sparkling skeleton of a teenager. You swim in and follow an underground river.",
          "come": "Tickets are sold only by licensed tour operators, with guide and transport from San Ignacio: a jungle walk with river crossings, then hours in cold water and tight passages.",
          "quando": "Morning; December-April. It can close after heavy rain because of the water level.",
          "tempo": "Full day",
          "consiglio": "Cameras have been banned for visitors since 2012, when a dropped camera cracked a skull. Skip it if you are claustrophobic or struggle with cold water."
        },
        {
          "nome": "Xunantunich",
          "testo": "A Classic-period Maya site with the El Castillo pyramid on a hill above the Mopan river. You can climb to the top.",
          "come": "From San Ignacio taxi to the Mopan, then the hand-cranked ferry; on the other side you walk uphill.",
          "quando": "Morning, before the heat.",
          "tempo": "2 hours",
          "consiglio": "From the top you can see Guatemala. It combines easily with the cave or with Rio On on the same day."
        },
        {
          "nome": "Caracol",
          "testo": "One of the largest Maya cities, on the Vaca Plateau at the foot of the Maya Mountains. The Caana pyramid is 43 metres high.",
          "come": "Guided trip from San Ignacio along a long, partly unpaved road; lunch is usually included.",
          "quando": "Early morning. Dry season for the road.",
          "tempo": "Full day",
          "consiglio": "You go for the silence and the howler monkeys, not for the crowds of Tikal. Check the road conditions."
        },
        {
          "nome": "Rio On Pools and the Mountain Pine Ridge",
          "testo": "A series of small waterfalls and natural pools on the Rio On, in a highland pine forest. You swim and slide on smooth rocks.",
          "come": "By car or taxi from San Ignacio, climbing up to the Mountain Pine Ridge.",
          "quando": "During the day, in the dry season.",
          "tempo": "1-2 hours",
          "consiglio": "Water shoes: the rocks are slippery."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Xunantunich with the ferry across the Mopan",
            "Lunch at the San Ignacio market",
            "Afternoon: Rio On Pools"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: ATM cave, full day",
            "Day 2: Xunantunich in the morning, Rio On in the afternoon, dinner in San Ignacio"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Days 1 and 2 as above",
            "Day 3: Caracol with a guide, or a day at Tikal from the Guatemalan border"
          ]
        }
      ],
      "zone": [
        {
          "nome": "San Ignacio",
          "perChi": "prices and services",
          "testo": "The town has more restaurants, agencies and the market. All tours can be arranged on foot."
        },
        {
          "nome": "Lodges on the Macal or the Mountain Pine Ridge",
          "perChi": "staying in the jungle",
          "testo": "More quiet, birds and walks, but far from restaurants and tied to transfers."
        }
      ],
      "sapori": [
        {
          "nome": "San Ignacio market",
          "testo": "Fruit, pupusas, tamales and Chinese-Belizean food. The cheapest place to eat: it is busiest at the weekend, ask in town."
        },
        {
          "nome": "Stew chicken and grilled chicken",
          "testo": "At the evening stalls on the main street."
        },
        {
          "nome": "Fry jacks",
          "testo": "Breakfast of puffy fried dough."
        },
        {
          "nome": "Maya food of the Cayo",
          "testo": "Tamales, corn tortillas and spicy sauces, more present here than in the rest of Belize."
        }
      ],
      "attenzioni": [
        "Book the ATM tour only with authorised operators: access is limited and reserved to guides with a specific licence.",
        "No cameras in the ATM cave: they have been banned since 2012, when a dropped camera cracked a skull.",
        "At the Guatemalan border (Benque Viejo/Melchor de Mencos): change money only at official counters, not with people who approach you.",
        "After heavy rain the ATM cave and some roads, such as the one to Caracol, can close."
      ],
    esperienzeSlugs: ['grotta-atm'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'The El Castillo pyramid at the Maya site of Xunantunich, near San Ignacio in the Cayo District, Belize',
    immagine: '/images/belize/san-ignacio-cayo.jpg',
  },
  {
    slug: 'placencia-hopkins',
    paeseSlug: 'belize',
    ordine: 4,
    nome: 'Placencia and Hopkins',
    tipologia: ['mare', 'cultura'],
    giorniConsigliati: '2-4 days',
    visitataPersonalmente: true,
    introduzione:
      "The southern coast of mainland Belize: Placencia is a thin peninsula with the most beautiful sand beaches in the country, Hopkins a Garifuna village known for its culture and drums.",
    percheAndarci:
      "It's the alternative to the islands for those who want a real beach without taking the ferry, and it's the only place to get to know the Garifuna culture up close, recognized by UNESCO.",
    cosaVedere: [
      'The Placencia Sidewalk, the pedestrian walkway that runs through the village',
      'The Garifuna village of Hopkins, with traditional drum schools',
      'Laughing Bird Caye, a national park island off Placencia',
      'The Cockscomb Basin Wildlife Sanctuary, the first reserve in the world dedicated to jaguars',
    ],
    cosaFare: [
      'Snorkeling with whale sharks at Gladden Spit (seasonal, around the full moons between March and June)',
      'Garifuna drum lesson in Hopkins',
      'Trekking and swimming in the pools of the Cockscomb Basin',
    ],
    doveDormire: 'Placencia village for the social life, the northern peninsula for resorts; Hopkins for a more village atmosphere.',
    doveMangiare:
      "Here you find Garifuna cuisine, rare in the rest of Belize. The dish to look for is hudut, fish in coconut milk with mashed green plantain: it takes a long time to prepare and is served mostly by the family restaurants of Hopkins. In Placencia grilled fish and conch ceviche are everywhere, with the usual price difference between the beachfront and the inner streets. The chocolate of southern Belize, made at small farms in the Punta Gorda area, is sold just about everywhere and is worth what it costs.",
    comeArrivare: 'Domestic flight from Belize City to Placencia (about 40 minutes) or bus along the Hummingbird and Southern Highway (4-5 hours).',
    comeSpostarsi: 'On foot or by bicycle in the villages; rental golf carts on the Placencia peninsula.',
    periodoMigliore: 'December-April in general; March-June for the whale shark window',
    costi: 'domestic flight 100-150 USD each way; whale shark outing 200-250 USD per person in season',
    erroriDaEvitare: [
      "Building the trip around whale sharks, taking them for granted: sightings depend on the full moons and remain uncertain",
      "Underestimating bus times along the Southern Highway if you have a connecting flight",
    ],
    miaEsperienza:
      "From San Ignacio we went down to Placencia along the Hummingbird and the Southern Highway, and there for the first time on the trip we found postcard Caribbean sand, the kind the northern islands almost entirely lack. The Placencia Sidewalk runs on foot through the whole village; the next day we took the boat trip to Laughing Bird Caye, with shallow water and reefs close to shore. Then Hopkins, less than an hour away, which counts more for the culture than for the sea. The Garifuna descend from Africans who were never enslaved, deported here from the eastern Caribbean, and have their own language, cuisine and percussion, recognized by UNESCO. A drum lesson with a master from the village says more than any museum, and at the table the dish to look for is hudut. After the intense days in Guatemala and the Cayo, Hopkins was our decompression day. The whale sharks of Gladden Spit, on the other hand, depend on the full moons between March and June: take them as a bonus, don't put them at the center of the itinerary.",
      "luoghi": [
        {
          "nome": "Placencia Sidewalk",
          "testo": "The concrete pedestrian walkway through the village, on the edge of the peninsula, with shops, bars and fine-sand beach a few steps away. The closest thing to a Caribbean postcard beach on the mainland.",
          "come": "On foot from the village; the peninsula can also be covered by bike or golf cart.",
          "quando": "Morning for the beach, late afternoon for walking.",
          "tempo": "Half a day"
        },
        {
          "nome": "Laughing Bird Caye",
          "testo": "A tiny national-park island off Placencia, with reef nearby and shallow water. It is part of the UNESCO Belize Barrier Reef site.",
          "come": "Half-day boat trip from Placencia with one of the local operators; park fee extra.",
          "quando": "Morning, calm sea; dry season.",
          "tempo": "Half a day",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Bring reef-safe sunscreen and do not touch the corals."
        },
        {
          "nome": "Hopkins and Garifuna culture",
          "testo": "A Garifuna village by the sea. The Garifuna descend from Africans and from Carib and Arawak peoples of Saint Vincent, from where the British deported them in 1797; from there they spread along the Central American coast. Their language, dance and music have been UNESCO intangible heritage since 2001.",
          "come": "From Placencia by car or shuttle along the coast. In the village, on foot.",
          "quando": "Evening for drums, morning for the food.",
          "tempo": "Half a day",
          "consiglio": "A drum lesson with a master of the village says more than any museum. Ask in the village."
        },
        {
          "nome": "Cockscomb Basin Wildlife Sanctuary",
          "testo": "A reserve created to protect the jaguar, in a rainforest valley with trails to waterfalls and viewpoints. Jaguars are rarely seen.",
          "come": "From Hopkins or Placencia by car to the entrance; trails from one to a few hours, some with pools for a swim.",
          "quando": "Early morning; dry season.",
          "tempo": "Half a day",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Birds and monkeys are easier to see than jaguars: go for the forest."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: beach and the Placencia Sidewalk",
            "Seafood lunch in the village",
            "Afternoon: trip to Laughing Bird Caye"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Placencia and Laughing Bird Caye",
            "Day 2: Hopkins, drum lesson, hudut for lunch, then Cockscomb Basin"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Days 1 and 2 as above",
            "Day 3: seasonal, whale shark trip at Gladden Spit (between March and June, when the fish spawn)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Placencia village",
          "perChi": "social life",
          "testo": "Bars, restaurants, shops and beach on foot. More noise and more tourist prices."
        },
        {
          "nome": "Peninsula to the north",
          "perChi": "quiet resorts",
          "testo": "Wide sand and silence, but you have to travel to dine."
        },
        {
          "nome": "Hopkins",
          "perChi": "village atmosphere",
          "testo": "Fewer services, more culture. The sea is darker and the beach less postcard."
        }
      ],
      "sapori": [
        {
          "nome": "Hudut",
          "testo": "Fish in coconut milk with mashed green plantain. Long to prepare, it is served mostly by family restaurants in Hopkins."
        },
        {
          "nome": "Southern Belize chocolate",
          "testo": "Made in small farms around Punta Gorda, sold throughout the country."
        },
        {
          "nome": "Conch ceviche and grilled fish",
          "testo": "Everywhere in Placencia, with the usual price difference between beachfront and inner streets."
        },
        {
          "nome": "Rice and beans with chicken",
          "testo": "The basic Belizean dish, in the village eateries."
        }
      ],
      "attenzioni": [
        "Gladden Spit's whale sharks come between March and June for the fish eggs, but only for a few days: don't build the trip around them.",
        "The bus on the Southern Highway is slow: leave a good margin if you have a flight.",
        "Sunset brings sandflies on the beach: repellent.",
        "Boat trips may be cancelled when the sea is rough."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Palm trees, white sand and turquoise sea on the beach at Placencia, Belize',
    immagine: '/images/belize/placencia-hopkins.jpg',
  },
]
