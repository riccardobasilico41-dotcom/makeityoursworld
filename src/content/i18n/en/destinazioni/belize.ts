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
    comeArrivare: "You land at Philip S. W. Goldson International Airport in Belize City (BZE). There is no public transport: the official taxi to the water taxi terminal downtown costs about 25-35 USD (about €22-30) and takes 20-30 minutes. From there the water taxi to Caye Caulker leaves several times a day and crosses in about 45 minutes, for 30-40 BZD each way (about €13-17); tickets are sold at the terminal. Short on time, take a Tropic Air or Maya Island Air domestic flight to the island's airstrip. From San Pedro, on Ambergris, the water taxi takes about half an hour.",
    comeSpostarsi: "On foot or by bicycle; golf carts can be rented but are of little use, because the island can be crossed in twenty minutes.",
    periodoMigliore: 'December-April for calm sea and visibility; June to November rainy and hurricane season',
    costi: "Water taxi from Belize City about 30-40 BZD each way (about €13-17); half-day snorkeling tour 60-100 BZD (about €26-43) plus the Hol Chan fee, 15 USD (about €13). Budget: about €50-70 a day with a hostel, street barbecue and a bike. Mid-range: €110-160 with a guesthouse with private bathroom, a boat trip and seafood dinners. High: over €250 with a seafront cabaña, diving or a Blue Hole flight.",
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
          "consiglio": "There is a current in the channel: enter the water from the calmer side and keep an eye on the boats.",
          "costo": "Free entry; you only pay at the bar.",
          "orari": "Always open.",
          "lat": 17.7496,
          "lng": -88.0239
        },
        {
          "nome": "Hol Chan Marine Reserve and Shark Ray Alley",
          "testo": "Hol Chan is a natural channel in the reef, south of Ambergris, inside a marine reserve set up in 1987 that is part of the UNESCO Belize reef site. Shark Ray Alley is where fishermen used to clean their nets: the scraps drew nurse sharks and rays, which now swim up to the boat.",
          "come": "Half-day boat trip from Caye Caulker with guide and gear. The marine park fee is often not included in the price.",
          "quando": "Morning, when the sea is calmest; best season December-April.",
          "tempo": "Half a day",
          "costo": "Reserve fee 15 USD per person, about €13 (since 2024), often not included in the tour price.",
          "url": "https://www.travelbelize.org/",
          "consiglio": "From people who have been: in the water a metre from nurse sharks and rays that pay no attention to who is watching. Before booking, ask what the price includes.",
          "lat": 17.8628,
          "lng": -87.9772
        },
        {
          "nome": "The Great Blue Hole from above",
          "testo": "A marine sinkhole more than 300 metres wide and about 124 deep, in the middle of Lighthouse Reef, an atoll about 70 km off the coast. The perfect circle can only be seen from above.",
          "come": "Scenic flight in a small plane from the island or from Belize City. The alternative is a full-day dive, which costs more and is more tiring.",
          "quando": "Clear day, preferably in the morning.",
          "tempo": "Half a day",
          "consiglio": "The flight costs far less than the dive and shows what the photos promise. Underwater you get a blue wall with little marine life.",
          "lat": 17.3153,
          "lng": -87.5344
        },
        {
          "nome": "Front Street",
          "testo": "The sandy street running along the east side of the village, from the water taxi dock to the Split. It holds tour agencies, cafés and, in the afternoon, the street barbecues with grilled chicken and fish. In the evening the whole island strolls along it.",
          "come": "On foot from the dock; you walk its whole length in a quarter of an hour.",
          "quando": "Afternoon for the barbecues, evening for a stroll.",
          "tempo": "1 hour",
          "orari": "Always open; the stalls work mostly from the afternoon.",
          "lat": 17.7427,
          "lng": -88.0242,
          "consiglio": "Tour prices vary from one agency to the next: compare two or three and ask whether the park fee is included."
        },
        {
          "nome": "Caye Caulker Forest Reserve",
          "testo": "The northern half of the island, beyond the Split, is almost uninhabited and partly protected as a forest reserve: mangroves, littoral forest and lagoons visited by herons and other waterbirds. It is Caye Caulker's wild side, a few minutes from the village.",
          "come": "By kayak or boat across the Split; some agencies run guided trips through the mangroves.",
          "quando": "Early morning or late afternoon, with less heat and more birds.",
          "tempo": "2-3 hours",
          "lat": 17.7906,
          "lng": -88.0214,
          "consiglio": "Bring repellent: the sandflies in the mangroves are relentless."
        },
        {
          "nome": "Caye Caulker Marine Reserve",
          "testo": "The stretch of barrier reef off the island, protected as a marine reserve. The shortest snorkeling trips stop here, over shallow coral gardens with parrotfish, rays and sometimes turtles.",
          "come": "On the snorkeling trips leaving from the Front Street docks, often combined with Hol Chan.",
          "quando": "Morning, with calm sea; December-April.",
          "tempo": "Half a day",
          "lat": 17.7502,
          "lng": -87.9994,
          "consiglio": "Reef-safe sunscreen and never stand on the coral."
        },
        {
          "nome": "Swallow Caye Wildlife Sanctuary",
          "testo": "A sanctuary between Caye Caulker and Belize City set up to protect Antillean manatees, which graze in the seagrass beds among the mangroves. Boats approach with the engine off and the animals are watched from the surface.",
          "come": "Half-day boat trip from Caye Caulker with a licensed guide; swimming with the manatees is not allowed.",
          "quando": "Morning, with flat water and good visibility.",
          "tempo": "Half a day",
          "lat": 17.4965,
          "lng": -88.1249
        },
        {
          "nome": "Half Moon Caye",
          "testo": "An island on Lighthouse Reef atoll, a natural monument and part of the UNESCO reef site. It hosts a colony of red-footed boobies watched from a platform among the trees, and a beach where Blue Hole trips stop for lunch.",
          "come": "Included in Blue Hole diving or snorkeling days, with a long open-sea crossing.",
          "quando": "Calm-sea days, more frequent from December to April.",
          "tempo": "Full day, with the Blue Hole",
          "lat": 17.2055,
          "lng": -87.5364,
          "consiglio": "If you get seasick take something before leaving: the crossing lasts hours."
        },
        {
          "nome": "Turneffe Atoll",
          "testo": "The largest of Belize's three atolls, between the barrier reef and Lighthouse Reef: mangrove islands, inner lagoons and coral walls. Divers come on day trips for richer reefs than those near the coast.",
          "come": "Day dive trip with an island dive center; certification required.",
          "quando": "December-April, with calmer seas.",
          "tempo": "Full day",
          "lat": 17.309,
          "lng": -87.8728
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
        },
        {
          "nome": "South of the island, towards the airstrip",
          "perChi": "long stays and quiet",
          "testo": "Rental houses and guesthouses among the palms, away from the music. The village is a few minutes away by bike."
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
      "gite": [
        {
          "nome": "Ambergris Caye and San Pedro",
          "distanza": "about 30 minutes by water taxi",
          "come": "Water taxi from the main dock, several runs a day.",
          "testo": "Belize's largest island, with the town of San Pedro, Secret Beach and a wider choice of restaurants and dive centers. An easy there-and-back day trip."
        },
        {
          "nome": "Altun Ha",
          "distanza": "about 50 km north of Belize City",
          "come": "Day tour: water taxi to Belize City, then by road; tickets can also be bought online on the NICH website.",
          "testo": "A Classic-period Maya site with two plazas and the Temple of the Masonry Altars, where a large jade head of the sun god was found. It is the Maya site closest to the islands."
        }
      ],
      "faq": [
        {
          "domanda": "How many days do you need on Caye Caulker?",
          "risposta": "Three or four: one to settle in and catch sunset at the Split, one for Hol Chan and Shark Ray Alley, one for the Blue Hole or the mangroves. If you just want to slow down, one more day is easy to add."
        },
        {
          "domanda": "Are there beaches on Caye Caulker?",
          "risposta": "Few, and narrow: the coast is mostly mangroves and docks, and you swim from the piers or at the Split. The real sea is offshore, on the reef."
        },
        {
          "domanda": "Caye Caulker or Ambergris Caye?",
          "risposta": "Caye Caulker is smaller, cheaper and walkable; Ambergris has more services, more resorts and higher prices. They are half an hour apart by water taxi, so you can do both."
        },
        {
          "domanda": "Do I need cash?",
          "risposta": "Yes: on the island you pay cash almost everywhere and ATMs are few. US dollars are accepted everywhere, with change in Belize dollars at the fixed 2-to-1 rate."
        },
        {
          "domanda": "When is the best time to go?",
          "risposta": "December to April, with calmer seas and clearer water. From June to November it rains more and it is hurricane season."
        },
        {
          "domanda": "Flight or dive at the Blue Hole?",
          "risposta": "To see the blue circle, the scenic flight matches the photos better and costs far less. The dive is a long open-sea day, needs experience and underwater mostly shows a dark wall."
        }
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
      "San Pedro has more choice than anywhere in the country and also the highest prices: on the waterfront you pay for the location. In the streets behind there are the comedores where locals have lunch, with the same stew chicken at a quarter of the price. Look for the stands that grill the day's catch and the corn tortillas made on the spot. In season, try the conch fritter and, as a local drink, the seaweed shake, which described doesn't sound convincing and then works.",
    comeArrivare: "There are two ways from Belize City. The water taxi leaves several times a day from the seafront terminal and reaches San Pedro in about an hour and a half, often stopping at Caye Caulker. The Tropic Air or Maya Island Air domestic flight takes about 15 minutes and leaves from both the international airport and the municipal airstrip. From Caye Caulker the water taxi takes about half an hour. San Pedro is also linked by boat to Chetumal, in Mexico, for travelers coming from the Yucatán.",
    comeSpostarsi: 'Rental golf carts, golf-cart taxis, bicycles; shuttle boats for the areas farther north.',
    periodoMigliore: 'December-April; the Blue Hole requires calm seas, more likely in the dry months',
    costi: "Blue Hole dive 300-400 USD per person (about €260-345), with three dives and lunch; golf cart rental 50-80 USD a day (about €43-69); Hol Chan fee 15 USD (about €13). Budget: about €70-90 a day with a hostel, comedores and getting around on foot. Mid-range: €150-220 with a hotel in town, one tour and seafront dinners. High: over €350 with a resort north of town and dive days.",
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
          "costo": "Reserve fee 15 USD per person, about €13 (since 2024), often not included in the tour price.",
          "url": "https://www.travelbelize.org/",
          "consiglio": "You get there sooner, so another snorkelling stop can fit in the same trip.",
          "lat": 17.8628,
          "lng": -87.9772
        },
        {
          "nome": "Secret Beach",
          "testo": "A beach away from the centre of San Pedro, with very shallow water and pale sand.",
          "come": "Golf-cart taxi or boat from San Pedro; ask locally about the state of the road.",
          "quando": "Morning or afternoon, with clear sky.",
          "tempo": "Half a day",
          "consiglio": "You go for swimming and eating by the water, not for surf. Bring cash.",
          "lat": 17.9731,
          "lng": -87.972
        },
        {
          "nome": "Great Blue Hole",
          "testo": "A marine sinkhole in Lighthouse Reef, a UNESCO site. From San Pedro you go by boat for the dive or by plane for the scenic flight.",
          "come": "Dive: a full day with several dives in open sea; many operators require an advanced certification. Scenic flight: half a day.",
          "quando": "Calm-sea days, more likely from December to April.",
          "tempo": "Full day",
          "consiglio": "The best view is from the plane, and it costs far less. Underwater it is a blue wall with few stalactites and little marine life.",
          "lat": 17.3153,
          "lng": -87.5344
        },
        {
          "nome": "San Pedro town",
          "testo": "Sandy streets with colourful houses, cafés, restaurants and dive centres. The seafront is the heart of town, with the docks where every trip starts.",
          "come": "On foot from the main pier. On the island you get around by golf cart.",
          "quando": "Early morning for bookings, evening for waterfront life.",
          "tempo": "Half a day",
          "lat": 17.9214,
          "lng": -87.9611
        },
        {
          "nome": "Mexico Rocks",
          "testo": "A patch of coral heads in shallow water inside the reef, north of San Pedro. It is the island's easiest snorkeling: a few meters deep, brain coral and reef fish, fine even for weak swimmers.",
          "come": "By boat on snorkeling trips from San Pedro, often combined with other stops in the north of the island.",
          "quando": "Morning, with calm sea.",
          "tempo": "2-3 hours",
          "lat": 17.9928,
          "lng": -87.9058
        },
        {
          "nome": "Bacalar Chico",
          "testo": "The national park and marine reserve at the northern tip of Ambergris, on the Mexican border, within the UNESCO reef site. The Bacalar Chico channel, traditionally said to have been dug by the Maya, separates the island from the Yucatán peninsula; around it are mangroves, lagoons and an almost empty reef.",
          "come": "Full-day boat trip from San Pedro with snorkeling and a stop at the ranger station.",
          "quando": "Dry season, with calm sea for the long ride north.",
          "tempo": "Full day",
          "lat": 18.1362,
          "lng": -87.859
        },
        {
          "nome": "Marco Gonzalez",
          "testo": "A small Maya archaeological site in the south of the island, hidden among the mangroves. It was a trading port on the coastal route: there are no pyramids, but it shows that Ambergris was inhabited and busy long before tourism.",
          "come": "By golf cart south from San Pedro, then a short trail through the mangroves.",
          "quando": "Morning, before the heat and mosquitoes.",
          "tempo": "1 hour",
          "lat": 17.8821,
          "lng": -88.0148,
          "consiglio": "Repellent and closed shoes."
        },
        {
          "nome": "Boca del Rio Park",
          "testo": "San Pedro's public beach, just north of the center, with palms, benches and a pier to jump from. It is where locals swim at weekends.",
          "come": "On foot or by bike from central San Pedro.",
          "quando": "Afternoon and sunset.",
          "tempo": "1-2 hours",
          "costo": "Free.",
          "lat": 17.93,
          "lng": -87.957
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
        },
        {
          "nome": "Boca del Rio and the north of town",
          "perChi": "quiet without giving up the center",
          "testo": "Just past the bridge, more residential and quieter than the seafront. The center is a walk or bike ride away."
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
      "gite": [
        {
          "nome": "Caye Caulker",
          "distanza": "about 30 minutes by water taxi",
          "come": "Water taxi from San Pedro, several runs a day.",
          "testo": "The \"Go Slow\" island, car-free and cheaper: an afternoon at the Split and a seafood dinner are enough to feel the difference from San Pedro."
        },
        {
          "nome": "Altun Ha",
          "distanza": "about 50 km north of Belize City",
          "come": "Day tour from San Pedro, by boat to the mainland and then by road.",
          "testo": "The Maya site closest to the islands, with the Temple of the Masonry Altars, where a large jade head of the sun god was found."
        }
      ],
      "faq": [
        {
          "domanda": "How many days do you need on Ambergris Caye?",
          "risposta": "Three days cover Hol Chan, the Blue Hole and Secret Beach; divers plan five, to have slack if the sea cancels trips."
        },
        {
          "domanda": "Do I need a golf cart?",
          "risposta": "Not in town, which is walkable. For Secret Beach and the north and south ends, yes: you rent one with a driving license, or use golf-cart taxis."
        },
        {
          "domanda": "Do I need a certification for the Blue Hole?",
          "risposta": "For diving, yes: the wall is deep and many operators ask for an advanced certification or a minimum of logged dives. Without one there is the scenic flight."
        },
        {
          "domanda": "Is Ambergris expensive?",
          "risposta": "It is the most expensive part of Belize, especially on the seafront. In the back streets the comedores serve the same dishes for much less."
        },
        {
          "domanda": "Are prices in US or Belize dollars?",
          "risposta": "You see both, and the Belize dollar is worth half a US dollar. Before accepting a quote, ask which currency it is in."
        }
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
    comeArrivare: "From Belize City you arrive by bus or shuttle along the George Price Highway in about 2-3 hours, via Belmopan; from the international airport take a taxi to the bus station or a pre-booked shuttle. Coming from Guatemala you cross at Melchor de Mencos, open every day, and San Ignacio is a few kilometers away. Heading south to Placencia and Hopkins you take the Hummingbird Highway: about 4-5 hours by shuttle, longer by bus with a change in Dangriga.",
    comeSpostarsi: 'Organized tours for the sites and caves (almost always mandatory); shared taxis and local buses for short trips.',
    periodoMigliore: 'December-April; the ATM cave may close after heavy rain because of the water level',
    costi: "ATM tour 100-140 USD per person (about €86-120) with transport, lunch and entry; Xunantunich and Caracol 25 BZD (about €11), Cahal Pech and Barton Creek 20 BZD (about €9) for non-residents. Budget: about €45-60 a day with a guesthouse in town, the market and shared taxis. Mid-range: €100-150 with a hotel with pool and one tour a day. High: over €250 with a jungle lodge on the Macal and private guides.",
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
          "consiglio": "Cameras have been banned for visitors since 2012, when a dropped camera cracked a skull. Skip it if you are claustrophobic or struggle with cold water.",
          "costo": "Licensed tour only: 100-140 USD per person (about €86-120), entry included.",
          "lat": 17.13,
          "lng": -88.8658,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Xunantunich",
          "testo": "A Classic-period Maya site with the El Castillo pyramid, about 40 metres high, on a hill above the Mopan river. You can climb to the top.",
          "come": "From San Ignacio taxi to the Mopan, then the hand-cranked ferry; on the other side you walk uphill.",
          "quando": "Morning, before the heat.",
          "tempo": "2 hours",
          "consiglio": "From the top you can see Guatemala. It combines easily with the cave or with Rio On on the same day.",
          "costo": "25 BZD for non-residents, about €11 (2026); the Mopan ferry is free.",
          "orari": "Daily 8am-5pm, holidays included; last entry one hour before closing by car, an hour and a half before on foot.",
          "lat": 17.0891,
          "lng": -89.1414,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Caracol",
          "testo": "One of the largest Maya cities, on the Vaca Plateau at the foot of the Maya Mountains. The Caana pyramid, 43 metres high, is still the tallest man-made structure in Belize.",
          "come": "Guided trip from San Ignacio along a long, partly unpaved road; lunch is usually included.",
          "quando": "Early morning. Dry season for the road.",
          "tempo": "Full day",
          "consiglio": "You go for the silence and the howler monkeys, not for the crowds of Tikal. Check the road conditions.",
          "costo": "25 BZD for non-residents, about €11 (2026).",
          "orari": "Daily 8am-5pm; last tour at 2pm, visitors out by 3pm.",
          "lat": 16.7612,
          "lng": -89.1185,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Rio On Pools and the Mountain Pine Ridge",
          "testo": "A series of small waterfalls and natural pools on the Rio On, in a highland pine forest. You swim and slide on smooth rocks.",
          "come": "By car or taxi from San Ignacio, climbing up to the Mountain Pine Ridge.",
          "quando": "During the day, in the dry season.",
          "tempo": "1-2 hours",
          "consiglio": "Water shoes: the rocks are slippery.",
          "lat": 16.9896,
          "lng": -88.9782
        },
        {
          "nome": "Cahal Pech",
          "testo": "A Maya site on a hill above San Ignacio, among the oldest settlements in the Belize Valley. Plazas, temples and the residential courtyards of an elite family, with the town visible below. It is the closest site and quick to visit.",
          "come": "On foot from central San Ignacio, uphill, or by taxi.",
          "quando": "Early morning or late afternoon, in low light.",
          "tempo": "1-2 hours",
          "costo": "20 BZD for non-residents, about €9 (2026).",
          "orari": "Daily: April-October 6am-6pm, October-April 6:30am-5pm; last tour one hour before closing.",
          "lat": 17.1477,
          "lng": -89.0723,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Barton Creek Cave",
          "testo": "A river cave visited by canoe, paddling up the underground river by torchlight among stalactites and chambers tens of meters high. The Maya used it for ceremonies, and pottery and remains are still on the ledges. It is the calm alternative to ATM: no swimming, you stay seated in the canoe.",
          "come": "By car or on a tour from San Ignacio; the last stretch is a dirt road with fords. Canoes and lights are rented at the entrance.",
          "quando": "Morning; after heavy rain the road can be rough.",
          "tempo": "Half a day with travel",
          "costo": "20 BZD for non-residents, about €9 (2026), canoe extra.",
          "orari": "Daily 8am-5pm; no entry into the cave after 4pm.",
          "lat": 17.1129,
          "lng": -88.9293,
          "url": "https://ticketing.nichbelize.org/"
        },
        {
          "nome": "Rio Frio Cave",
          "testo": "A cave crossed end to end by a river, with a huge mouth opening onto the Mountain Pine Ridge pine forest. You walk inside on the rocks along the water, no gear needed.",
          "come": "By car or on a Mountain Pine Ridge tour, often combined with Rio On Pools and Big Rock Falls.",
          "quando": "Daytime, dry season.",
          "tempo": "1 hour",
          "lat": 16.9792,
          "lng": -89.0072
        },
        {
          "nome": "Big Rock Falls",
          "testo": "A waterfall on the Privassion River dropping into a wide, deep pool where you can swim. You reach it down a short stepped trail through the forest.",
          "come": "By car or tour along the Mountain Pine Ridge road, then 10-15 minutes on foot.",
          "quando": "Dry season; after heavy rain the current is dangerous.",
          "tempo": "1-2 hours",
          "lat": 17.0325,
          "lng": -88.9742,
          "consiglio": "Shoes with good grip: the steps are slippery."
        },
        {
          "nome": "Green Hills Butterfly Ranch",
          "testo": "A tropical butterfly farm with a large flight house, a botanical garden and hummingbird feeders, on the road to the Mountain Pine Ridge. Guides explain the butterfly life cycle, from chrysalis to flight.",
          "come": "By car or taxi from San Ignacio, on the Georgeville road towards the Mountain Pine Ridge.",
          "quando": "Late morning, when the sun gets the butterflies flying.",
          "tempo": "1 hour",
          "lat": 17.0975,
          "lng": -88.9742
        },
        {
          "nome": "San Ignacio Market",
          "testo": "The town's open-air market, with Cayo farmers, Mennonites and sellers from Guatemala: fruit, vegetables, cheese, pupusas and tamales. Saturday morning is the liveliest time.",
          "come": "On foot from the center, near the Macal River.",
          "quando": "Saturday morning.",
          "tempo": "1 hour",
          "consiglio": "It is the cheapest place to eat in all of Belize: go hungry."
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
        },
        {
          "nome": "Santa Elena",
          "perChi": "low prices and short stays",
          "testo": "The twin town across the Macal bridge, more residential and less touristy. Central San Ignacio is a walk away."
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
      "gite": [
        {
          "nome": "Tikal (Guatemala)",
          "distanza": "about 100 km, across the Melchor de Mencos border",
          "come": "Day tour with transport and guide, leaving at dawn; you need your passport and pay the exit and entry fees at the border.",
          "testo": "The great Maya city of the Petén, with temples rising above the forest, howler monkeys and toucans. It is a long day trip: if you can, sleep in Flores or near the park."
        },
        {
          "nome": "Belize Zoo",
          "distanza": "about 1 hour by road towards Belize City",
          "come": "On the George Price Highway: the Belize City bus stops there, or go by car or shuttle.",
          "testo": "A small zoo in the pine savanna, with only animals native to Belize, many rescued or born in captivity: jaguars, tapirs, harpy eagles and monkeys. It is the surest way to see a jaguar up close."
        }
      ],
      "faq": [
        {
          "domanda": "How many days do you need in San Ignacio?",
          "risposta": "At least two: one for ATM cave, one for Xunantunich and the Mountain Pine Ridge. A third day adds Caracol or Tikal."
        },
        {
          "domanda": "Is ATM cave difficult?",
          "risposta": "It needs ordinary fitness: river crossings, a swim, hours in cold water and tight squeezes. If you are claustrophobic or a weak swimmer, choose Barton Creek or Xunantunich instead."
        },
        {
          "domanda": "Can you take photos in ATM cave?",
          "risposta": "No: cameras have been banned for visitors since 2012, after a dropped camera damaged a skull. Phones and cameras stay on the bus."
        },
        {
          "domanda": "Can you buy Maya site tickets online?",
          "risposta": "Yes, Xunantunich, Cahal Pech, Caracol and Barton Creek sell tickets on the NICH website. ATM, by contrast, can only be visited through licensed tour operators."
        },
        {
          "domanda": "Can you do Tikal as a day trip from San Ignacio?",
          "risposta": "Yes, on a tour leaving at dawn and returning in the evening, crossing the border twice. It is a long day: sleeping in Flores makes the visit calmer."
        },
        {
          "domanda": "San Ignacio or a jungle lodge?",
          "risposta": "In town you spend less and book tours on foot; lodges on the Macal or the Mountain Pine Ridge put you in the forest, but you depend on transfers for everything."
        }
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
    comeArrivare: "The fastest way is a Tropic Air or Maya Island Air domestic flight from Belize City, about half an hour to the Placencia airstrip. By land, from San Ignacio or Belize City you take the Hummingbird Highway, the most scenic road in the country, and then the Southern Highway: about 4-5 hours by shuttle, which drops you at your lodging, longer by public bus with a change in Dangriga. Hopkins is on the same coast, less than an hour from Placencia; Hopkins to Belize City takes about three hours. In high season, December to April, book lodging ahead.",
    comeSpostarsi: 'On foot or by bicycle in the villages; rental golf carts on the Placencia peninsula.',
    periodoMigliore: 'December-April in general; March-June for the whale shark window',
    costi: "Domestic flight 100-150 USD each way (about €86-130); whale shark trip 200-250 USD per person in season (about €172-215). Budget: about €50-70 a day with a village guesthouse, grilled fish and a bike. Mid-range: €110-170 with a beach cabaña and one boat trip. High: over €280 with a resort on the north peninsula and private trips.",
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
          "tempo": "Half a day",
          "costo": "Free.",
          "orari": "Always open.",
          "lat": 16.5156,
          "lng": -88.3672
        },
        {
          "nome": "Laughing Bird Caye",
          "testo": "A tiny national-park island off Placencia, with reef nearby and shallow water. It is part of the UNESCO Belize Barrier Reef site.",
          "come": "Half-day boat trip from Placencia with one of the local operators; park fee extra.",
          "quando": "Morning, calm sea; dry season.",
          "tempo": "Half a day",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Bring reef-safe sunscreen and do not touch the corals.",
          "lat": 16.4438,
          "lng": -88.1964
        },
        {
          "nome": "Hopkins and Garifuna culture",
          "testo": "A Garifuna village by the sea. The Garifuna descend from Africans and from Carib and Arawak peoples of Saint Vincent, from where the British deported them in 1797; from there they spread along the Central American coast. Their language, dance and music have been UNESCO intangible heritage since 2001.",
          "come": "From Placencia by car or shuttle along the coast. In the village, on foot.",
          "quando": "Evening for drums, morning for the food.",
          "tempo": "Half a day",
          "consiglio": "A drum lesson with a master of the village says more than any museum. Ask in the village.",
          "lat": 16.8604,
          "lng": -88.2845
        },
        {
          "nome": "Cockscomb Basin Wildlife Sanctuary",
          "testo": "A reserve set up in 1986 as the first protected area for the jaguar, in a rainforest valley with trails to waterfalls and viewpoints. Jaguars are rarely seen.",
          "come": "From Hopkins or Placencia by car to the entrance; trails from one to a few hours, some with pools for a swim.",
          "quando": "Early morning; dry season.",
          "tempo": "Half a day",
          "url": "https://www.travelbelize.org/",
          "consiglio": "Birds and monkeys are easier to see than jaguars: go for the forest.",
          "lat": 16.7801,
          "lng": -88.4574
        },
        {
          "nome": "Gladden Spit and Silk Cayes",
          "testo": "A marine reserve off Placencia, within the UNESCO reef site. The Silk Cayes are three sand islets with snorkeling on the reef; at Gladden Spit, between March and June, around the full moons, fish gather to spawn and draw whale sharks.",
          "come": "Full-day boat trip from Placencia; for whale sharks only licensed operators, with limited numbers.",
          "quando": "Silk Cayes year-round in calm sea; whale sharks March-June, in the days around the full moon.",
          "tempo": "Full day",
          "lat": 16.4471,
          "lng": -88.0537,
          "consiglio": "Sightings are not guaranteed: the Silk Cayes alone are worth the day."
        },
        {
          "nome": "Mayflower Bocawina National Park",
          "testo": "A rainforest park at the foot of the Maya Mountains, near Hopkins, with small Maya sites, trails and a string of waterfalls. The tallest, Antelope Falls, is reached by a steep trail, partly with ropes.",
          "come": "By car or taxi from Hopkins, then trails on foot from the entrance.",
          "quando": "Early morning; dry season for the trails.",
          "tempo": "Half a day",
          "lat": 16.9307,
          "lng": -88.4071,
          "consiglio": "Wear swimwear under your clothes: you can swim in the pools below the falls."
        },
        {
          "nome": "Monkey River",
          "testo": "A river south of Placencia, with the small village of the same name at its mouth. You travel upriver by boat through mangroves and forest, with walks to look for howler monkeys, iguanas, crocodiles and birds.",
          "come": "Full-day boat trip from Placencia, with a guide and lunch in the village.",
          "quando": "Morning departure, when wildlife is most active.",
          "tempo": "Full day",
          "lat": 16.3634,
          "lng": -88.4853,
          "consiglio": "Repellent and long sleeves for the forest walks."
        },
        {
          "nome": "St. Herman's Blue Hole National Park",
          "testo": "A small park on the Hummingbird Highway with a turquoise sinkhole you can swim in and St. Herman's Cave, where the Maya left traces of ceremonies. It is the classic stop on the road between Cayo and the south coast.",
          "come": "A stop by car or shuttle along the Hummingbird Highway; short trails from the entrance to the pool and the cave.",
          "quando": "Daytime, during the transfer.",
          "tempo": "1-2 hours",
          "lat": 17.156,
          "lng": -88.685,
          "consiglio": "Bring a torch for the cave: it is pitch dark inside."
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
      "gite": [
        {
          "nome": "Dangriga",
          "distanza": "about half an hour by road from Hopkins",
          "come": "By car, shuttle or bus along the coast.",
          "testo": "The main Garifuna town in Belize, with drum workshops and an everyday life untouched by tourism. On 19 November it celebrates Garifuna Settlement Day with particular fervor, marking the Garifuna arrival on the coast."
        },
        {
          "nome": "Punta Gorda and Toledo cacao",
          "distanza": "further south on the Southern Highway, about 2-3 hours by road",
          "come": "By car or with a night in Punta Gorda; cacao farm visits are booked locally.",
          "testo": "Belize's southernmost district, with Mopan and Q'eqchi' Maya villages and small farms where cacao is grown and processed by hand. The chocolate sold across the country comes from here."
        }
      ],
      "faq": [
        {
          "domanda": "Placencia or Hopkins?",
          "risposta": "Placencia has the better beach and more services; Hopkins is a quieter Garifuna village where music and food matter most. They are under an hour apart, and many split their stay."
        },
        {
          "domanda": "When can you see whale sharks?",
          "risposta": "Between March and June, in the days around the full moon, at Gladden Spit. Even then they are not guaranteed: treat them as a bonus."
        },
        {
          "domanda": "How many days do you need?",
          "risposta": "Two or three: one day for Placencia and Laughing Bird Caye, one for Hopkins and Cockscomb, a third for the Silk Cayes or Monkey River."
        },
        {
          "domanda": "Will I see a jaguar at Cockscomb?",
          "risposta": "Almost never: it is a shy, nocturnal animal. Birds, monkeys and tracks are far more likely; the reason to go is the forest and its waterfalls."
        },
        {
          "domanda": "What should I eat in Hopkins?",
          "risposta": "Hudut, fish in coconut milk with mashed green plantain, the signature Garifuna dish. Family restaurants make it, often to order because it takes time."
        }
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Palm trees, white sand and turquoise sea on the beach at Placencia, Belize',
    immagine: '/images/belize/placencia-hopkins.jpg',
  },
]
