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
    comeArrivare: "Cancún international airport (CUN) is the main airport of the area. ADO buses leave the terminals for the downtown bus station in about 30-40 minutes (about 130-140 MXN, tickets at the ADO desk in arrivals or on ado.com.mx) and continue to Playa del Carmen and Tulum. The official taxi is paid at the desk inside the terminal: about 550-700 MXN to downtown, more to the hotel zone. Uber at the airport is not guaranteed. The Tren Maya's Cancún Aeropuerto station is not in the terminal: you need a shuttle. In arrivals many «transport staff» are selling timeshares: walk straight to the exit.",
    comeSpostarsi: 'Local buses (red R1 line) to the beaches, taxi/Uber for the rest of the city.',
    periodoMigliore: "I didn't note it for this stop; the general indication for the area applies, that is the dry season, from November to April.",
    costi: "An expensive city: compared to the rest of the itinerary, prices are close to European ones. Low budget about 50-70 € a day per person (hostel or simple hotel downtown, street food at Parque las Palapas, R1 bus); mid 120-180 € (hotel downtown or a simple one in the hotel zone, Isla Mujeres by ferry, restaurant dinners); high from 300 € up (hotel zone resort, catamaran, Coco Bongo). Museo Maya 210 MXN, El Rey 145 MXN, Isla Mujeres ferry about 540 MXN return.",
    erroriDaEvitare: [
      "Not exchanging or withdrawing enough cash in the first two days: afterwards you're forced to stop constantly",
      "Expecting the postcard sea of the Riviera Maya: the city beaches are good but different from Tulum or Holbox",
    ],
    miaEsperienza:
      "For me Cancún was mostly a practical base: the first taste of Mexico with the street food of Parque las Palapas and the last free day on the beach before the flight home. It's not the stop I remember most, but at the beginning and end of the itinerary it works well.",
    luoghi: [
      {
        nome: "Isla Mujeres",
        testo: "An island a short ferry ride away, with beaches, snorkelling and a quiet village, easy for a day trip.",
        come: "Ferry from Puerto Juárez or Playa Tortugas; on the island you get around by rented golf cart.",
        quando: "Morning, to have time.",
        tempo: "Full day",
        costo: "Ferry about 540 MXN return, about 27 €; golf cart 1,300-1,500 MXN a day for 4 people, about 65-75 € (from the trip, 2026)",
        lat: 21.23333,
        lng: -86.73333,
        url: "https://www.ultramarferry.com/",
        consiglio: "The alternative is the organised catamaran day, pricier but with snorkelling stops included.",
      },
      {
        nome: "Playa Delfines and the Mirador",
        testo: "The widest public beach in the hotel zone, around km 18, with no hotels behind it: white sand, open sea and waves. Above it is the lookout with the «Cancún» sign, the most photographed spot in the city.",
        come: "R1 or R2 bus along Boulevard Kukulcán to the Playa Delfines stop; walk down from the lookout.",
        quando: "Morning, before the heat and the groups.",
        tempo: "2-3 hours",
        costo: "Free entry",
        lat: 21.06196,
        lng: -86.77858,
        consiglio: "Check the lifeguard flag before swimming: the sea is open here and currents are stronger than on the bay side.",
      },
      {
        nome: "Playa Marlin and Playa Gaviota",
        testo: "Free public beaches in the middle of the hotel zone, with no paid loungers. They are among the few free accesses to the sea in this part of the city; the water is rougher than on Isla Mujeres, so check the lifeguards' flag before swimming.",
        come: "Local bus from the centre.",
        quando: "Morning.",
        tempo: "Half a day",
        costo: "Free entry",
        lat: 21.10387,
        lng: -86.76283,
      },
      {
        nome: "Museo Maya de Cancún and San Miguelito",
        testo: "The INAH museum in the hotel zone, with sculptures, pottery and objects found at Maya sites in Quintana Roo. The ticket includes the San Miguelito archaeological zone, a small Maya settlement in the woods behind the museum.",
        come: "R1 or R2 bus to km 16.5 of Boulevard Kukulcán; tickets at the desk or online from the INAH page.",
        quando: "In the hottest hours or on a rainy day.",
        tempo: "1.5-2 hours",
        costo: "210 MXN for foreign visitors, about 10.50 €, San Miguelito included (INAH, 2026)",
        orari: "Tuesday to Sunday 9am-5pm, last entry 4:30pm; closed Mondays (INAH, 2026)",
        lat: 21.07403,
        lng: -86.77727,
        url: "https://lugares.inah.gob.mx/en/node/4284",
      },
      {
        nome: "Parque las Palapas and Mercado 28",
        testo: "A town square with street-food stalls and evening music, and the market with crafts and small restaurants.",
        come: "On foot, in the centre.",
        quando: "Evening.",
        tempo: "2-3 hours",
        lat: 21.16121,
        lng: -86.8276,
        consiglio: "The first taste of Mexico with street food.",
      },
      {
        nome: "MUSA, the underwater museum",
        testo: "Hundreds of concrete sculptures laid on the seabed between Cancún and Isla Mujeres, meant to ease divers' pressure on the natural reefs and now a reef in their own right, colonised by coral and fish. The galleries are at Punta Nizuc, Manchones and Punta Sam; at Punta Nizuc they can also be seen snorkelling.",
        come: "Only on organised trips, snorkelling, diving or by glass-bottom boat, bookable on the official website.",
        quando: "Morning, when the sea is calmer and the water clearer.",
        tempo: "2-3 hours",
        costo: "Snorkelling at Punta Nizuc 58 $, about 50 €; dives from 115 $, about 100 € (official website, 2026)",
        lat: 21.0763,
        lng: -86.8463,
        url: "https://musamexico.org/",
      },
      {
        nome: "El Rey archaeological zone",
        testo: "The remains of one of the Maya ports on the trade route along the Caribbean coast: a central street, two small plazas and buildings with traces of mural painting showing gods. It is quick to see, among iguanas sunning themselves on the stones.",
        come: "At km 18 of Boulevard Kukulcán, on the lagoon side, by R1 or R2 bus.",
        quando: "Early morning or late afternoon: there is little shade.",
        tempo: "45 minutes",
        costo: "145 MXN for foreign visitors, about 7 € (INAH, 2026)",
        orari: "Daily 8am-5pm, last entry 4:30pm (INAH, 2026)",
        lat: 21.06083,
        lng: -86.78111,
        url: "https://lugares.inah.gob.mx/en/node/4404",
      },
      {
        nome: "Playa Langosta and Playa Tortugas",
        testo: "The beaches on the Bahía de Mujeres side, in the northern part of the hotel zone: shallow, calm water, good for weak swimmers or families with children. Ferries to Isla Mujeres also leave from Playa Tortugas.",
        come: "R1 or R2 bus to the Playa Langosta or Playa Tortugas stops, on the first stretch of Boulevard Kukulcán.",
        quando: "Morning or at sunset.",
        tempo: "Half a day",
        costo: "Free entry",
        lat: 21.1451,
        lng: -86.78256,
      },
      {
        nome: "Coco Bongo",
        testo: "A well-known show club in the hotel zone: acrobats, live music and film-inspired acts until late at night. The price varies a lot depending on where you stand or sit (general, bar or table), so check what the ticket includes before buying.",
        come: "Tickets from resellers.",
        quando: "Evening.",
        tempo: "An evening",
        costo: "With open bar roughly from 90 $ up, about 78 €, depending on the night (from the trip, 2026)",
        lat: 21.1329,
        lng: -86.74721,
        consiglio: "For tickets try contacting Martin of Mexico Grand Tours: he has a bit of everything.",
      },
      {
        nome: "Nichupté Lagoon",
        testo: "The large lagoon behind the hotel zone, fringed with mangroves and home to crocodiles and water birds. From the restaurants on the lagoon side you watch the sunset, which here goes down behind the water.",
        come: "Boat or kayak trips from the marinas on Boulevard Kukulcán, or dinner at one of the places on the water.",
        quando: "At sunset.",
        tempo: "1-2 hours",
        lat: 21.09583,
        lng: -86.79194,
        consiglio: "No swimming in the lagoon: there are crocodiles.",
      },
      {
        nome: "Isla Blanca",
        testo: "A strip of sand north of Cancún, between the sea and the Chacmuchuch lagoon, with almost no buildings. Long, empty beaches, shallow water on the lagoon side and steady wind, which makes it the kitesurfing spot.",
        come: "By car or taxi from downtown, towards Costa Mujeres; the last stretch is a dirt road.",
        quando: "A calm day for the beach, a windy one for kiting.",
        tempo: "Half a day",
        lat: 21.41028,
        lng: -86.81083,
        consiglio: "Bring water and some food: facilities are few.",
      },
      {
        nome: "Malecón Tajamar",
        testo: "A walking and cycling path along the lagoon mangroves, between downtown and the hotel zone, used in the evening by joggers and local families. It is the quietest way to see the lagoon without taking a boat.",
        come: "On foot, by bike or by taxi from downtown.",
        quando: "Late afternoon.",
        tempo: "1 hour",
        costo: "Free",
        lat: 21.14716,
        lng: -86.81341,
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Morning: Isla Mujeres by ferry",
        "Afternoon: golf cart and snorkelling",
        "Evening: Parque las Palapas",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: Isla Mujeres",
        "Day 2: Playa Marlin, Mercado 28 and, if you like, Coco Bongo",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above",
        "Day 3: Museo Maya de Cancún and San Miguelito, then the El Rey archaeological zone",
        "Afternoon at Playa Delfines",
        "Sunset over Nichupté Lagoon",
      ] },
    ],
    zone: [
      {
        nome: "Centre (Downtown)",
        perChi: "budget and local life",
        testo: "Cheap hotels, markets and restaurants, but far from the sea.",
        fascia: "40-100 €",
      },
      {
        nome: "Hotel Zone",
        perChi: "sea and resorts",
        testo: "Beaches and resorts, but high prices and tourist traffic.",
        fascia: "150-350 €",
      },
      {
        nome: "Isla Mujeres",
        perChi: "those who want calm sea and quiet evenings",
        testo: "Hotels and small guesthouses in the village, with the northern beaches within walking distance. Getting back to Cancún depends on ferry times.",
      },
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
    gite: [
      {
        nome: "Isla Contoy",
        distanza: "about 40 km north, by boat",
        come: "Only on licensed day tours, often combined with Isla Mujeres; roughly 80-100 € per person (from the trip).",
        testo: "A nature reserve for seabirds, with empty beaches and snorkelling on the reef. Entry is limited to 200 people a day: book ahead.",
      },
      {
        nome: "Puerto Morelos",
        distanza: "about 36 km, 30-40 minutes",
        come: "ADO bus or colectivo towards Playa del Carmen; for the inland cenotes you need a car.",
        testo: "A fishing village with the old leaning lighthouse, the protected reef in front of the beach and, inland, the Ruta de los Cenotes.",
      },
      {
        nome: "Playa del Carmen",
        distanza: "about 70 km, 1 hour by bus",
        come: "ADO bus from the downtown terminal or the airport, frequent departures.",
        testo: "The pedestrian Quinta Avenida, the beaches and the ferries to Cozumel, which has the second largest coral reef in the world.",
      },
      {
        nome: "Chichén Itzá",
        distanza: "about 200 km, 2.5-3 hours",
        come: "Car, ADO bus or Tren Maya to Chichén Itzá station.",
        testo: "The great Maya city of El Castillo. Go in at the 8am opening, before the coaches from Cancún; the INAH page lists 105 + 548 MXN for foreign visitors and hours 8am-4pm, last entry 3pm (November 2026).",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Cancún?",
        risposta: "One or two days are enough for Isla Mujeres and a beach day; a third day adds the Museo Maya, El Rey and the lagoon. It works well split between the start and the end of the trip.",
      },
      {
        domanda: "Is it better to stay downtown or in the hotel zone?",
        risposta: "Downtown is cheaper, close to the ADO terminal and to the places where Mexicans eat, but far from the sea. The hotel zone has the beach in front of the hotel at much higher prices; R1 and R2 buses link the two.",
      },
      {
        domanda: "How do you get from the airport to downtown?",
        risposta: "By ADO bus, about 30-40 minutes and 130-140 MXN, tickets at the desk in arrivals. The official taxi is paid at the desk inside the terminal, about 550-700 MXN to downtown and more to the hotel zone.",
      },
      {
        domanda: "Are the hotel zone beaches free?",
        risposta: "Yes, you reach the sea through the public accesses: Playa Gaviota Azul, Playa Marlin, Playa Delfines, Playa Langosta and Playa Tortugas. Sunbeds and umbrellas cost money only at beach clubs.",
      },
      {
        domanda: "How do you get to Isla Mujeres?",
        risposta: "By ferry from Puerto Juárez or Playa Tortugas, about 540 MXN return. On the island you get around by rented golf cart, or take an organised catamaran day.",
      },
      {
        domanda: "What is the Visitax?",
        risposta: "It is the tourist tax of Quintana Roo, the state Cancún is in: 20.99 dollars per person, paid online only (Italian foreign ministry advice, May 2026).",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
    comeSpostarsi: 'The old town is small and easy to get around on foot.',
    periodoMigliore: "I didn't note it for this stop; the dry season recommended for the whole Yucatán applies, from November to April.",
    erroriDaEvitare: [
      "Underestimating Ek Balam because it's less famous than Chichén Itzá: it's far less crowded and, with the Xcanché cenote right next to it, it's an ideal pairing",
    ],
    miaEsperienza:
      "Valladolid was a short but pleasant stop: a very quiet town, where in the evening I took a walk after a full day among Río Lagartos, Ek Balam and the Xcanché cenote.",
      "sapori": [
        {
          "nome": "Cochinita pibil and poc chuc",
          "testo": "Slow-cooked marinated pork, and grilled pork with sour orange: two Yucatecan classics, all over town."
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
    comeArrivare: "By van/car from Cancún (about 2-2.5 hours), often stopping at Río Lagartos on the way. By car you take the Cancún-Mérida toll motorway and exit at Valladolid; ADO buses leave from Cancún's downtown terminal and arrive at the Valladolid terminal, a few blocks from the main square. The Tren Maya has a station outside town: from there you need a taxi to the centre. Chichén Itzá is about 40 km away, three quarters of an hour by road; Mérida about one and a half to two hours, via Chichén Itzá and Izamal.",
    costi: "I didn't note my costs in Valladolid; like the rest of the interior, it is a cheap stop. Low budget about 35-50 € a day per person (simple hotel in the centre, loncherías, colectivos to the cenotes); mid 80-130 € (boutique hotel, restaurants, Ek Balam or Chichén Itzá with a guide); high from 220 € (hacienda outside town, car with driver). Ek Balam 691 MXN for foreigners plus 100 MXN parking (INAH page); Chichén Itzá 105 MXN INAH plus 548 MXN state fee according to the INAH page (November 2026), while the local press reports 697 MXN with the single ticket.",
    luoghi: [
      {
        "nome": "Chichén Itzá",
        "testo": "One of the New Seven Wonders of the World, a Maya UNESCO site with El Castillo, the ball court and the sacred cenote.",
        "come": "From Valladolid by car or taxi, or on a guided tour.",
        "quando": "Morning, at opening, before the coaches and the heat.",
        "tempo": "3-4 hours",
        "costo": "697 MXN for foreigners, with a single federal and state ticket at one ticket office since 27 March 2026; free on Sundays only for Mexicans and residents. The INAH page instead gives 105 + 548 MXN (November 2026).",
        "orari": "Daily 8-16, last entry at 15 (INAH page).",
        "lat": 20.68289,
        "lng": -88.56861,
        "url": "https://lugares.inah.gob.mx/es/node/4335",
        "consiglio": "For Chichén Itzá I recommend a guide: Alejandro speaks Spanish and English, was born 20 minutes from the site and is extremely knowledgeable."
      },
      {
        "nome": "Ek Balam",
        "testo": "A smaller and far less crowded Maya site, with a large acropolis and very well preserved stucco decoration, such as the «monster's mouth» at the entrance to the tomb. Whether you can climb to the top depends on the rules at the time: ask at the ticket office.",
        "come": "From Valladolid by taxi or car, about half an hour.",
        "quando": "Morning.",
        "tempo": "2 hours",
        "costo": "210 MXN INAH plus 481 MXN state fee for foreigners, so 691 MXN, about 35 €, plus 100 MXN ejido parking (INAH page, 2026).",
        "lat": 20.89111,
        "lng": -88.13639,
        "url": "https://www.inah.gob.mx/",
        "consiglio": "Often underrated: pair it with the Xcanché cenote next door."
      },
      {
        "nome": "Cenote Xcanché",
        "testo": "An open-air cenote near Ek Balam. You go down a staircase cut into the rock to the water, surrounded by roots and hanging plants.",
        "come": "Taxi or bike from Ek Balam.",
        "quando": "Morning or early afternoon.",
        "tempo": "1-2 hours",
        "costo": "Separate ticket from Ek Balam (from the trip)",
        "lat": 20.88828,
        "lng": -88.12041
      },
      {
        "nome": "Río Lagartos and Las Coloradas",
        "testo": "A reserve with flamingos and pink lakes, north of Valladolid.",
        "come": "Tour or car, along the road to the coast, about an hour and a half.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "lat": 21.5975,
        "lng": -88.15778,
        "consiglio": "Often a stop on the way from Cancún."
      },
      {
        "nome": "Convent of San Bernardino de Siena",
        "testo": "The 16th-century Franciscan convent in the Sisal barrio, with its fortified church and a large green courtyard built over a cenote. In the evening a light show on the city's history is projected onto the façade.",
        "come": "On foot from the centre along the Calzada de los Frailes, about 15 minutes.",
        "quando": "Afternoon for the visit, evening for the show on the façade.",
        "tempo": "1 hour",
        "lat": 20.68579,
        "lng": -88.20993
      },
      {
        "nome": "Calzada de los Frailes",
        "testo": "The diagonal colonial street linking the centre to the Sisal convent, with well-restored colourful houses, shops and cafés. It is the most photographed street in Valladolid.",
        "come": "On foot.",
        "quando": "Early morning or at sunset, in low light.",
        "tempo": "45 minutes",
        "costo": "Free",
        "lat": 20.68813,
        "lng": -88.20717
      },
      {
        "nome": "Parque Francisco Cantón and San Servacio",
        "testo": "The main square, with its confidante benches, marquesita sellers and the white-fronted church of San Servacio, rebuilt in the 18th century. In the evening it is the centre of town life.",
        "come": "On foot.",
        "quando": "Evening.",
        "tempo": "1 hour",
        "costo": "Free",
        "lat": 20.6902,
        "lng": -88.20166
      },
      {
        "nome": "Cenote Zací",
        "testo": "A semi-open cenote right in the centre, a few blocks from the square, with a rock vault and stalactites over the water. Handy for a swim without leaving town.",
        "come": "On foot from the centre.",
        "quando": "Morning, before the groups.",
        "tempo": "1 hour",
        "lat": 20.69167,
        "lng": -88.19736
      },
      {
        "nome": "Casa de los Venados",
        "testo": "A private colonial house with a large collection of Mexican folk art, visited with a guide. It tells the story of the country's crafts better than many museums.",
        "come": "On foot, one block from the square.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "lat": 20.68928,
        "lng": -88.20088
      },
      {
        "nome": "Museo San Roque",
        "testo": "A small museum in the old church of San Roque, with Maya and colonial objects and the story of the Caste War, which began right around Valladolid.",
        "come": "On foot from the centre.",
        "quando": "Any time of day.",
        "tempo": "30 minutes",
        "lat": 20.68978,
        "lng": -88.1994
      },
      {
        "nome": "Cenote Suytun",
        "testo": "The cave cenote with a stone walkway in the middle and a beam of light coming through the hole in the roof, much photographed. You walk out to the platform surrounded by water.",
        "come": "By car or taxi, about 10 minutes east on the road to Cancún.",
        "quando": "Midday, when the light comes straight down.",
        "tempo": "1 hour",
        "lat": 20.69899,
        "lng": -88.12457
      },
      {
        "nome": "Cenote Oxman",
        "testo": "A deep cenote on the old San Lorenzo Oxman hacienda, with a rope swing into the water and the hacienda pool.",
        "come": "Taxi or bike, about 10 minutes south-west of the centre.",
        "quando": "Early afternoon.",
        "tempo": "2 hours",
        "lat": 20.66756,
        "lng": -88.23006
      },
      {
        "nome": "Cenotes Xkeken and Samulá",
        "testo": "Two cave cenotes side by side at Dzitnup, with a combined ticket: Xkeken has stalactites and roots reaching down to the water, Samulá a hole in the roof through which a tree's roots hang down.",
        "come": "Taxi or bike, about 10 minutes west of the centre.",
        "quando": "Morning.",
        "tempo": "1.5 hours",
        "lat": 20.66077,
        "lng": -88.24261
      },
      {
        "nome": "Cenote Ik Kil",
        "testo": "The large open cenote near Chichén Itzá, with vines hanging down to the water and a staircase carved into the rock. It pairs with a visit to the site.",
        "come": "Along the road to Mérida, a few kilometres from Chichén Itzá.",
        "quando": "After Chichén Itzá, before lunch.",
        "tempo": "1 hour",
        "lat": 20.6609,
        "lng": -88.5505
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Ek Balam and Xcanché cenote",
          "Lunch on the square",
          "Afternoon: historic centre, Calzada de los Frailes and San Bernardino",
          "Evening: a stroll and the light show on the convent façade"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Ek Balam, Xcanché, centre",
          "Day 2: Chichén Itzá at opening, then Ik Kil or Río Lagartos"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: cenotes around town (Suytun, Xkeken and Samulá, Oxman), Casa de los Venados and Cenote Zací"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic centre",
        "perChi": "everything on foot",
        "testo": "Main square, cantinas and loncherías nearby, hotels a few steps away.",
        "fascia": "55-110 €"
      },
      {
        "nome": "Sisal barrio and Calzada de los Frailes",
        "perChi": "atmosphere and calm",
        "testo": "The convent neighbourhood, with small hotels in colonial houses and cafés, 10-15 minutes' walk from the square."
      },
      {
        "nome": "Outside the centre",
        "perChi": "those with a car",
        "testo": "Haciendas and cenotes, but you need transport."
      }
    ],
    gite: [
      {
        "nome": "Izamal",
        "distanza": "about 1.5 hours by car",
        "come": "Car, or bus with a change; often a stop between Chichén Itzá and Mérida.",
        "testo": "The yellow town with the Franciscan convent built on top of a Maya pyramid and the Kinich Kakmó pyramid among the houses (free entry, daily 8-17, INAH page)."
      },
      {
        "nome": "Cobá",
        "distanza": "about 1 hour by car",
        "come": "Car or colectivo towards Tulum.",
        "testo": "The Maya site between two lagoons, with long sacbés to ride by bike and the Nohoch Mul pyramid (210 MXN for foreigners, daily 8-17, last entry at 16, INAH page)."
      },
      {
        "nome": "Las Coloradas",
        "distanza": "about 1.5-2 hours north",
        "come": "Car or tour, together with Río Lagartos.",
        "testo": "The pink pools of the coastal salt pans, viewed from the road without going into the water."
      }
    ],
    faq: [
      {
        "domanda": "Is Valladolid a good base for Chichén Itzá?",
        "risposta": "Yes: it is about 40 km away, three quarters of an hour by road, and staying here you reach the site at the 8 am opening, before the coaches from Cancún."
      },
      {
        "domanda": "How many days do you need in Valladolid?",
        "risposta": "One night is enough in passing; with two you do Ek Balam and Chichén Itzá, with three you add the cenotes around town."
      },
      {
        "domanda": "How much does Chichén Itzá cost?",
        "risposta": "For foreigners the INAH page gives 105 MXN plus a 548 MXN state fee (November 2026), the local press 697 MXN with the single ticket: check before you go. The site opens at 8 and last entry is at 15."
      },
      {
        "domanda": "Which cenotes to see around Valladolid?",
        "risposta": "Zací in the centre; Suytun, Xkeken and Samulá and Oxman a few minutes away; Xcanché near Ek Balam and Ik Kil near Chichén Itzá. Shower before swimming and no sunscreen."
      },
      {
        "domanda": "Can you climb the Ek Balam pyramid?",
        "risposta": "It depends on the rules at the time: ask at the ticket office. At Chichén Itzá you can't climb, and the fines are real."
      },
      {
        "domanda": "How do you get there from Cancún?",
        "risposta": "By car on the toll motorway, about 2-2.5 hours, by ADO bus or by Tren Maya, whose station is outside town."
      }
    ],
    esperienzeSlugs: ['rio-lagartos', 'ek-balam-cenote-xcanche'],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
    comeArrivare: "By van/car from Valladolid (about 1h30-2h), passing through Chichén Itzá and Izamal. Mérida international airport (MID) is south of the city, about twenty minutes by taxi from the centre. From Cancún you arrive by first-class ADO bus (about 4-5 hours, times on ado.com.mx) or by Tren Maya, which stops at Teya-Mérida station outside the city: from there you need a taxi to the centre. By car from Cancún you take the toll motorway via Valladolid.",
    comeSpostarsi: 'The old town on foot; for Playa Progreso you need a transfer by car or van (about 30-40 minutes).',
    periodoMigliore: "I didn't note it for Mérida; the dry season recommended for the Yucatán applies, from November to April.",
    costi: "I didn't note down my spending in Mérida; like the rest of the interior, it costs little. Low budget about 35-50 € a day per person (hostel or simple hotel, market and street food); mid 80-130 € (boutique hotel in the centre, restaurants, a trip to Progreso or Uxmal); high from 220 € up (luxury colonial house or hacienda, car with driver). INAH museums 210 MXN for foreign visitors, Government Palace free.",
    erroriDaEvitare: [
      'La Negrita closes early (around 10 pm): book in time if you want to enjoy it before heading elsewhere',
    ],
    miaEsperienza:
      "Mérida was the right mid-trip break: a day with no transfers between Playa Progreso and the pig beach and a real night out in the old town.",
    luoghi: [
      {
        nome: "Plaza Grande and historic centre",
        testo: "The central square with the 16th-century cathedral, the Government Palace with murals and the colonial houses around.",
        come: "On foot from the centre.",
        quando: "Morning and evening, when there is music.",
        tempo: "Half a day",
        costo: "Free",
        lat: 20.96707,
        lng: -89.62374,
      },
      {
        nome: "San Ildefonso Cathedral",
        testo: "The cathedral built in the second half of the 16th century on the east side of the Plaza Grande, with stones from the temples of T'hó, the Maya city Mérida grew on. It is among the oldest cathedrals in the Americas; inside it is plain, almost bare.",
        come: "From the Plaza Grande; go in outside service times, with shoulders and knees covered.",
        quando: "Morning.",
        tempo: "20-30 minutes",
        lat: 20.96712,
        lng: -89.62259,
      },
      {
        nome: "Government Palace",
        testo: "The seat of the Yucatán government, on the north side of the square, with Fernando Castro Pacheco's large murals on the history of the region: the Maya world, the conquest, the henequen haciendas.",
        come: "Enter from the square; the murals are along the main staircase and in the rooms upstairs.",
        quando: "Morning, before the heat.",
        tempo: "30-45 minutes",
        costo: "Free entry (from the trip)",
        lat: 20.96783,
        lng: -89.62336,
      },
      {
        nome: "Casa de Montejo",
        testo: "The palace of the Montejo conquistadors, on the south side of the square, with a 16th-century Plateresque façade where two Spanish soldiers stand on the heads of the defeated. Inside is a small museum with the rooms of a noble house.",
        come: "On the south side of the Plaza Grande.",
        quando: "Morning; the façade also at night, lit up.",
        tempo: "30 minutes",
        lat: 20.96618,
        lng: -89.62403,
      },
      {
        nome: "Paseo de Montejo and Palacio Cantón",
        testo: "The avenue of mansions from the golden age of henequen, when agave fibre made the hacienda owners rich. The most elegant, the Palacio Cantón, houses INAH's Regional Museum of Anthropology.",
        come: "On foot from the centre or by taxi; the museum entrance is on Calle 43.",
        quando: "The museum in the morning, the avenue in the late afternoon.",
        tempo: "2-3 hours",
        costo: "Museum 210 MXN for foreign visitors, about 10.50 € (INAH, 2026)",
        orari: "Museum Tuesday to Sunday 8am-5pm, last entry 4:30pm; closed Mondays (INAH, 2026)",
        lat: 20.97819,
        lng: -89.61951,
        url: "https://lugares.inah.gob.mx/en/node/4258",
        consiglio: "On Sunday mornings the avenue is closed to cars and fills with bicycles.",
      },
      {
        nome: "Municipal market",
        testo: "The covered market with fruit, spices, crafts and Yucatecan products.",
        come: "On foot from the centre.",
        quando: "Morning.",
        tempo: "1-2 hours",
        lat: 20.96369,
        lng: -89.62076,
        consiglio: "Beware of people offering to walk you to shops.",
      },
      {
        nome: "Gran Museo del Mundo Maya",
        testo: "The large modern museum in the north of the city, opened in 2012, telling the story of Yucatán's Maya culture from its origins to today with archaeological finds, reconstructions and multimedia rooms.",
        come: "By taxi or car from the centre, towards the northern outskirts.",
        quando: "In the hottest hours, in the cool of the galleries.",
        tempo: "2-3 hours",
        lat: 21.03465,
        lng: -89.62831,
        url: "https://www.granmuseodelmundomaya.com/",
      },
      {
        nome: "Parque de Santa Lucía",
        testo: "The arcaded little square a few blocks north of the Plaza Grande, with restaurants under the arches and tables outside. On Thursday evenings there is the Yucatecan serenade, with trova music and traditional dances.",
        come: "On foot from the Plaza Grande, along Calle 60.",
        quando: "In the evening, especially on Thursdays.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 20.97107,
        lng: -89.62254,
      },
      {
        nome: "MACAY, contemporary art museum",
        testo: "The Fernando García Ponce museum in the old Ateneo Peninsular, next to the cathedral, with work by Yucatán artists and temporary shows. The courtyard is a shady break a step from the square.",
        come: "On the east side of the Plaza Grande, next to the cathedral.",
        quando: "In the hot hours.",
        tempo: "1 hour",
        lat: 20.96664,
        lng: -89.62303,
        url: "https://www.macay.org/",
      },
      {
        nome: "Evening between La Negrita and the Mezcalería",
        testo: "Venues with live music and mezcal in the historic centre.",
        come: "On foot from the centre.",
        quando: "Evening.",
        tempo: "An evening",
      },
      {
        nome: "Playa Progreso",
        testo: "The beach at Progreso, on the Gulf of Mexico, Mérida's port, with a very long pier running out to sea and beach clubs on the sand.",
        come: "Bus or car from Mérida.",
        quando: "Daytime.",
        tempo: "Full day",
        costo: "Free sunbeds at beach clubs with a drink or meal (from the trip)",
        lat: 21.28278,
        lng: -89.66361,
        consiglio: "A mid-trip break without long transfers.",
      },
      {
        nome: "Izamal",
        testo: "The yellow town, east of Mérida: the large Franciscan convent is built on top of a Maya pyramid, and other pyramids survive in town, such as Kinich Kak Moo. Almost every façade is painted the same yellow.",
        come: "By car from Mérida or on the road from Chichén Itzá; the Tren Maya has a station in Izamal.",
        quando: "Morning or late afternoon.",
        tempo: "2-3 hours",
        lat: 20.93139,
        lng: -89.01778,
        consiglio: "The town is expensive: better not to waste too much time and money on souvenirs.",
      },
      {
        nome: "Celestún",
        testo: "A fishing village on the Gulf, on the edge of the Ría Celestún Biosphere Reserve: a mangrove lagoon where boats go out to see flamingos and waterbirds.",
        come: "By car or on a tour from Mérida, as a day trip; boats leave from the village.",
        quando: "Morning, when it's less busy.",
        tempo: "Full day",
        lat: 20.85917,
        lng: -90.4,
        consiglio: "Flamingo numbers vary a lot through the year: ask at the pier before paying for the boat, and ask the boatman to keep his distance from the birds.",
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Morning: Plaza Grande and market",
        "Afternoon: Paseo de Montejo",
        "Evening: La Negrita and Mezcalería",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: centre and market",
        "Day 2: Playa Progreso",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above",
        "Day 3: Uxmal at the 8am opening, about 1 hour 15 by car",
        "Early afternoon: Palacio Cantón and Paseo de Montejo",
        "Evening: Parque de Santa Lucía",
      ] },
    ],
    zone: [
      {
        nome: "Historic centre",
        perChi: "on foot to everything",
        testo: "Boutique hotels in colonial houses, near restaurants and the square.",
        fascia: "50-150 €",
      },
      {
        nome: "Paseo de Montejo",
        perChi: "elegance",
        testo: "Avenue of historic mansions, quieter.",
        fascia: "100-250 €",
      },
      {
        nome: "Santa Lucía and Santa Ana",
        perChi: "those who want a quiet neighbourhood within walking distance of the centre",
        testo: "The barrios north of the square, with restored colonial houses, small hotels and restaurants, 10-15 minutes on foot from the Plaza Grande.",
        fascia: "60-180 €",
      },
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
    gite: [
      {
        nome: "Uxmal",
        distanza: "about 1 hour 15 by car",
        come: "Car along Federal Highway 261 or an organised tour; with the Ruta Puuc it becomes a full day.",
        testo: "The great Puuc city, with the Pyramid of the Magician and the Nunnery Quadrangle. 566 MXN for foreign visitors, open daily 8am-4pm, last entry 3pm (INAH page, November 2026).",
      },
      {
        nome: "Dzibilchaltún",
        distanza: "about 12 km north, 20-30 minutes",
        come: "Car or taxi along the road to Progreso, then the Chablekal exit.",
        testo: "A Maya site with the Temple of the Seven Dolls, the Museum of the Maya People and the Xlacah cenote, where you can swim. At the equinoxes the sun shines through the temple door. 105 MXN, daily 8am-4pm (INAH, 2026).",
      },
      {
        nome: "Cuzamá and Homún cenotes",
        distanza: "about 45-50 km, 1 hour",
        come: "By car or tour; in the villages you move between cenotes with local guides, by moto-taxi or on the old hacienda carts.",
        testo: "Two villages on the cenote ring, with dozens of freshwater sinkholes open for swimming, some in caves. Each cenote charges its own entry, cash only.",
      },
      {
        nome: "Chichén Itzá",
        distanza: "about 2 hours by car",
        come: "Car, ADO bus or Tren Maya; it can be combined with Izamal.",
        testo: "The Maya city of El Castillo, best seen at the 8am opening. The INAH page lists 105 + 548 MXN for foreign visitors and hours 8am-4pm, last entry 3pm (November 2026).",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Mérida?",
        risposta: "Two days for the centre, the museums and a day in Progreso. With three or four days Mérida becomes the base for Uxmal, Celestún and the cenotes.",
      },
      {
        domanda: "Is it better to stay in the centre or on Paseo de Montejo?",
        risposta: "The historic centre is the most convenient: square, market and bars are all on foot. Paseo de Montejo and the Santa Lucía and Santa Ana barrios are quieter, with hotels in colonial houses.",
      },
      {
        domanda: "Can you visit Uxmal as a day trip from Mérida?",
        risposta: "Yes, it is about an hour and a quarter by car. Go in at the 8am opening because of the heat; the foreign visitor ticket is 566 MXN (INAH, November 2026).",
      },
      {
        domanda: "Do you need a car in Mérida?",
        risposta: "Not in the city: the centre is walkable and taxis and apps cover the rest. For Uxmal, Celestún and the cenotes a car or a tour makes everything easier.",
      },
      {
        domanda: "When is the best time to go?",
        risposta: "From November to April, in the dry season. From May the humid heat gets heavy; June to November is the Atlantic hurricane season.",
      },
      {
        domanda: "What is Hanal Pixán?",
        risposta: "It is Yucatán's festival of the dead, between late October and early November: altars in homes and squares, traditional food and celebrations in Mérida and the villages.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
          "testo": "A fort on the hill south-west of the centre, with a moat and cannons facing the Gulf. Inside is the archaeological museum with the jade masks from Calakmul; from its ramparts you can watch the sunset over the sea.",
          "come": "Taxi from the centre.",
          "quando": "Tuesday to Sunday 8:00-17:00, closed on Mondays (INAH listing); late afternoon for the sunset.",
          "costo": "145 MXN for foreigners (INAH listing, 2026).",
          "tempo": "1-2 hours",
          "url": "https://lugares.inah.gob.mx/en/node/4261"
        },
        {
          "nome": "Edzná",
          "testo": "An inland Maya site with the Building of the Five Storeys, a terraced pyramid on a large plaza. It sees few visitors compared with the Yucatán sites.",
          "come": "Car, taxi or tour from Campeche.",
          "quando": "Open daily 8:00-17:00, last entry at 16:30 (INAH listing). Early morning, before the heat.",
          "tempo": "Half a day",
          "url": "https://lugares.inah.gob.mx/en/node/5755",
          "consiglio": "Bring water and a hat: there is little shade.",
          "costo": "210 MXN for foreigners (INAH 2026 rates); the site museum is included."
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
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
          "testo": "A boat trip to the reef near the coast, where you may meet turtles. Here the reef is close to shore and less busy than on the Riviera Maya.",
          "come": "Tour from the waterfront with an operator.",
          "quando": "Morning.",
          "tempo": "2-3 hours"
        },
        {
          "nome": "Temazcal in the jungle",
          "testo": "A steam-bath ritual of indigenous tradition, with a guide.",
          "come": "Booking with a local property.",
          "quando": "Evening.",
          "tempo": "2-3 hours"
        },
        {
          "nome": "Banco Chinchorro",
          "testo": "A biosphere reserve off Mahahual, a coral atoll of about 800 km² with at least nine wrecks. The trip depends heavily on the weather: with strong wind trips are cancelled.",
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
    comeSpostarsi: 'We were on an organized tour from Mahahual; on the lagoon you get around by boat or kayak.',
    periodoMigliore: "I didn't note it for Bacalar; the dry season recommended for the area applies, from November to April.",
    erroriDaEvitare: [
      'On a tour from Mahahual there is little time: if you can, consider a night on site to enjoy it at leisure',
    ],
    miaEsperienza:
      "I only saw it in a day, with a 2-hour boat tour and an hour of kayaking. Beautiful, but the tight schedule showed: it's one of the stops I'd do more slowly on another trip.",
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
    comeArrivare: "On an organised tour from Mahahual, or independently by van or car. From Cancún it is about 4-5 hours by car along Federal Highway 307, passing Tulum; there are also ADO buses, which stop in town, and the Tren Maya with its Bacalar station, outside the centre. The nearest airport is Chetumal, about 40 km away, reached by taxi. From Xpujil and Calakmul it takes about 2 hours by road. Entering Quintana Roo from Campeche, clocks go forward one hour.",
    costi: "I didn't note the price of the tour. The two-hour boat tour is agreed at the pier or at an agency and paid in cash; the Fuerte de San Felipe has a ticket of a few euros; many piers on the lagoon belong to hotels or private clubs, with paid entry (from the trip). Indicative budget per person per day: low 40-60 € (room in town, simple food), mid 100-160 € (lagoon hotel, boat tour, kayak), high from 250 € (design hotel on the water, private outings).",
    luoghi: [
      {
        "nome": "Bacalar Lagoon",
        "testo": "The lagoon of seven colours, tens of kilometres long and narrow, with water in shades of blue and turquoise over a white bottom. It has the largest freshwater stromatolite system in the world: rock formations built by microorganisms, thousands of years old.",
        "come": "From Mahahual on an organised tour or independently by van or car.",
        "quando": "Morning, in full light.",
        "tempo": "Half a day or more",
        "lat": 18.75,
        "lng": -88.315,
        "consiglio": "A day trip feels rushed: if you can, consider a night there to enjoy it calmly."
      },
      {
        "nome": "Boat tour and kayak",
        "testo": "A 2-hour boat trip on the lagoon and, in my case, an hour of kayaking included after the tour.",
        "come": "Tour booked through the hotel or on the lakefront, the day before.",
        "quando": "Morning.",
        "tempo": "3 hours",
        "costo": "Price agreed at the pier or at an agency, in cash (from the trip)."
      },
      {
        "nome": "Canal de los Piratas and Isla de los Pájaros",
        "testo": "The narrow channel pirates once used towards Chetumal, with the clearest water in the lagoon and a white sandy bottom where you step off the boat. Nearby is the bird islet, which you only watch from a distance.",
        "come": "Only by boat, usually as a stop on the tour.",
        "quando": "Morning, with the sun high for the colours.",
        "tempo": "1 hour",
        "lat": 18.66993,
        "lng": -88.37578,
        "consiglio": "Only biodegradable sunscreen, and no walking on the stromatolites, which are protected."
      },
      {
        "nome": "Cenote Azul",
        "testo": "A deep, round cenote on the shore of the lagoon, south of town, with a restaurant on the edge and very dark blue water.",
        "come": "By taxi from the centre, a few minutes.",
        "quando": "Morning.",
        "tempo": "1-2 hours",
        "lat": 18.64701,
        "lng": -88.41298
      },
      {
        "nome": "Cenote Negro",
        "testo": "A deep sinkhole inside the lagoon, which from above looks like a dark patch in the turquoise. It is one of the spots best seen on the boat tour.",
        "come": "By boat or kayak from the lakefront.",
        "quando": "Morning.",
        "tempo": "30 minutes",
        "lat": 18.66693,
        "lng": -88.39428
      },
      {
        "nome": "Cocalitos and the stromatolites",
        "testo": "A shore south of town where the stromatolites can be seen in shallow water near the beach, with swings and piers. It is the easiest place to understand what they are without a boat.",
        "come": "By taxi or bike from the centre, along the Boulevard Costero.",
        "quando": "Early morning.",
        "tempo": "2 hours",
        "lat": 18.65179,
        "lng": -88.40917,
        "consiglio": "Don't touch or stand on the stromatolites."
      },
      {
        "nome": "Balneario Ejidal",
        "testo": "The town's community beach, with piers, palapas and access to shallow, clear water. It is one of the few ways into the lagoon outside the hotel piers.",
        "come": "On foot or by bike from the centre.",
        "quando": "Morning or late afternoon.",
        "tempo": "2-3 hours"
      },
      {
        "nome": "Los Rápidos",
        "testo": "South of the lagoon the water narrows into a channel with a current, where you float downstream among the stromatolites. There are restaurants on the water and kayak hire.",
        "come": "By car or taxi, about 30 minutes south of town.",
        "quando": "Weekday mornings.",
        "tempo": "Half a day",
        "lat": 18.59081,
        "lng": -88.43398
      },
      {
        "nome": "Fuerte San Felipe",
        "testo": "A fort built by the Spanish to defend Bacalar from pirates, on the shore of the lagoon, with a small piracy museum. From the walls you look down on the lagoon.",
        "come": "On foot from the centre.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "costo": "A ticket of a few euros (from the trip)",
        "orari": "Closing days to check on site.",
        "lat": 18.67694,
        "lng": -88.39528
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "2-hour boat tour: Canal de los Piratas, Cenote Negro, stromatolites",
          "Kayak",
          "Lunch by the lake",
          "Cenote Azul"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: boat tour and Fuerte San Felipe",
          "Day 2: Cocalitos in the morning, Los Rápidos in the afternoon, then departure"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Maya ruins of Chacchoben or Kohunlich, sunset at the Balneario Ejidal"
        ]
      }
    ],
    zone: [
      {
        "nome": "Bacalar lakefront",
        "perChi": "lagoon views",
        "testo": "Hotels and cabañas right on the water, pricier, often with a pier and kayaks.",
        "fascia": "110-230 €"
      },
      {
        "nome": "Town centre",
        "perChi": "budget",
        "testo": "Cheaper, a few minutes from the lagoon.",
        "fascia": "45-90 €"
      },
      {
        "nome": "South, Cocalitos and Los Rápidos",
        "perChi": "those with a car",
        "testo": "Eco-hotels and small isolated places on the shore, very quiet; you need transport to eat in town."
      }
    ],
    gite: [
      {
        "nome": "Chacchoben",
        "distanza": "about 40 km north, 45 minutes",
        "come": "Car or tour.",
        "testo": "A Maya site in the forest with restored pyramids and few visitors on days without cruise ships at Mahahual."
      },
      {
        "nome": "Kohunlich",
        "distanza": "about 1 hour west",
        "come": "Car along Federal Highway 186 towards Escárcega.",
        "testo": "The Temple of the Masks, with large stucco faces, in a site set in palm forest. INAH ticket, last entry at 16 local time (from the trip)."
      },
      {
        "nome": "Chetumal and Oxtankah",
        "distanza": "about 40 km, 40 minutes",
        "come": "Car, bus or colectivo.",
        "testo": "The Museo de la Cultura Maya and the seafront of Quintana Roo's capital, and a little to the north the Oxtankah site (145 MXN for foreigners, daily 9-17, INAH page)."
      },
      {
        "nome": "Mahahual",
        "distanza": "about 1.5 hours",
        "come": "Car or van.",
        "testo": "The seaside village of the Costa Maya, with its malecón, reef snorkelling and Banco Chinchorro offshore."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Bacalar?",
        "risposta": "Half a day is enough for the boat tour, but to enjoy it you need one or two nights: the lagoon is at its best early in the morning and at sunset."
      },
      {
        "domanda": "Can you swim in the lagoon?",
        "risposta": "Yes, from public balnearios such as the Balneario Ejidal, from Cocalitos or from hotel piers; many piers are private, with paid entry."
      },
      {
        "domanda": "What are stromatolites?",
        "risposta": "Rock formations built by microorganisms, thousands of years old: Bacalar has the largest freshwater system in the world. You don't touch or step on them."
      },
      {
        "domanda": "Which sunscreen can you use?",
        "risposta": "Only biodegradable ones, and better still a top and a hat: ordinary creams damage the stromatolites and the water."
      },
      {
        "domanda": "How do you get to Bacalar?",
        "risposta": "By car or ADO bus from Cancún, about 4-5 hours, by Tren Maya, or by flying to Chetumal, about 40 km away."
      },
      {
        "domanda": "Can you see Bacalar in a day?",
        "risposta": "Yes, on a tour from Mahahual, but time feels short: with a night you add Cocalitos, Los Rápidos and the sunset."
      }
    ],
    esperienzeSlugs: ['tour-barca-bacalar'],
    tripSlugs: ['messico-beach-life', 'messico-yucatan-completo'],
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
    comeArrivare: "By van or car from Mahahual (about 2-3 hours). From Cancún airport (CUN), about 120 km away, it takes around two hours by car or on direct ADO buses to the Tulum terminal. Closer is Tulum International Airport (TQO), opened in late 2023 about 25 km from town, with mainly domestic and North American flights. Tulum is also a Tren Maya station, on the line heading south to Bacalar.",
    comeSpostarsi: "I have no notes on how we got around in Tulum.",
    periodoMigliore: "I didn't note it for Tulum; the dry season recommended for the area applies, from November to April.",
    costi: "I didn't note down my spending in Tulum; it's one of the pricier stops, with almost European prices. Roughly, per person per day: €50-70 with a hostel, tacos and a bike; €120-180 with a hotel in town, a beach club and a couple of entry fees; over €300 with a beachfront hotel and dinners in the hotel zone.",
    erroriDaEvitare: [
      "At Caleta Tankah you're not refunded under any circumstances, even after a few minutes: better to think about it before paying the entry",
    ],
    miaEsperienza:
      "At Caleta Tankah the sea wasn't inviting at first, then the sun came out and the day changed, cenote included. The archaeological site on the cliff and Playa Paraíso remain among the strongest memories of the trip.",
      "luoghi": [
      {
        nome: "Tulum archaeological site",
        testo: "A Maya city on the cliff above the Caribbean, one of the few Maya sites facing the sea. El Castillo and the Temple of the Wind God are the key points; the walls enclosing the city on three sides explain the name Tulum, 'wall' in Maya (its ancient name was Zamá, 'dawn').",
        come: "From Tulum town by taxi or bike to Parque del Jaguar, the protected area where the site stands; ask locally how to reach the entrance. The little beach below the site is sometimes closed (sargassum or turtle nesting).",
        quando: "Morning, before the heat and the coaches.",
        tempo: "2 hours",
        costo: "265 MXN for foreigners, about €13 (165 MXN for the archaeological zone plus 100 MXN for Parque del Jaguar, 2026)",
        orari: "Daily 8am-5pm, last entry 3:30pm.",
        lat: 20.21472,
        lng: -87.42889,
        url: "https://www.inah.gob.mx/",
        consiglio: "A swim in the cove below the cliff after the visit, if access is open.",
      },
      {
        nome: "Cenote Dos Ojos",
        testo: "Two connected cenotes in a cave with stalactites, in the Sac Actun system: different from the open-air cenotes of Yucatán.",
        come: "By car or taxi from Tulum, heading north.",
        quando: "Morning.",
        tempo: "2 hours",
        lat: 20.32472,
        lng: -87.39194,
        consiglio: "Around Tulum I'd skip the most touristy cenotes and suggest Dos Ojos. Next to it there's another beautiful one whose name I've forgotten.",
      },
      {
        nome: "Caleta Tankah",
        testo: "A cove with turquoise water and a cenote, with a paid entry: cash only and no refunds.",
        come: "Taxi from Tulum.",
        quando: "Daytime.",
        tempo: "Half a day",
        costo: "300 MXN per person, about €15; cash only, no refunds",
        lat: 20.23168,
        lng: -87.4181,
        consiglio: "At first the sea was not inviting, then the sun came out and the day changed.",
      },
      {
        nome: "Playa Paraíso",
        testo: "A beach with beach clubs, among the most recommended in the area, with paid sunbeds.",
        come: "Taxi from Tulum.",
        quando: "Afternoon.",
        tempo: "Half a day",
        costo: "free beach; beach club sunbeds and umbrellas are paid",
        lat: 20.20404,
        lng: -87.43127,
        consiglio: "Arrive early to find a spot on the sand in front of the palms.",
      },
      {
        nome: "Xcacel",
        testo: "A protected beach without hotels, where turtles lay their eggs between spring and summer. The rules are strict: no food, alcohol or speakers.",
        come: "Taxi or car from Tulum.",
        quando: "Morning.",
        tempo: "2-3 hours",
        costo: "100 MXN, about €5",
        orari: "10am-4pm, closed on Mondays.",
        consiglio: "From April to October you may see turtles hatching: keep out of the fenced nesting areas.",
      },
      {
        nome: "Gran Cenote",
        testo: "The best-known cenote around Tulum: a pool of very clear water between low caves and wooden walkways, with small turtles swimming around. It suits first-time snorkellers, but it gets very busy in the middle of the day.",
        come: "About 5 km from town on the road to Cobá: by bike, taxi or car. A shower before entering is compulsory and regular sunscreen is not allowed.",
        quando: "At opening time, before the tours arrive.",
        tempo: "1.5-2 hours",
        lat: 20.24656,
        lng: -87.4641,
      },
      {
        nome: "Cenote Calavera",
        testo: "A small cenote with three openings in the cave roof that look like a skull: you jump through one of the holes or climb down the ladder. Basic and less polished than the others, it's the most fun if you're after a jump.",
        come: "Just outside town on the road to Cobá, easy to reach by bike.",
        quando: "Morning or early afternoon, when light comes through the holes.",
        tempo: "1 hour",
        lat: 20.22918,
        lng: -87.45727,
      },
      {
        nome: "Cenote Zacil-Ha",
        testo: "An open-air cenote with a small pool beside it, hammocks and a zipline over the water. Less spectacular than Dos Ojos but more relaxed, it works well for an afternoon with no plans.",
        come: "On the road to Cobá, about 7 km from Tulum; by car, taxi or bike.",
        quando: "Afternoon.",
        tempo: "1-2 hours",
        lat: 20.27441,
        lng: -87.48831,
      },
      {
        nome: "Kaan Luum Lagoon",
        testo: "A turquoise lagoon with a deep cenote in the middle, which from above looks like a dark blue circle. You swim in the shallow part from the jetty, in a setting that is nearly always quiet.",
        come: "About 20 minutes' drive south of Tulum, along Federal Highway 307 towards Felipe Carrillo Puerto.",
        quando: "Morning, with the sun high to see the colours.",
        tempo: "2 hours",
        lat: 20.16259,
        lng: -87.55401,
      },
      {
        nome: "Parque del Jaguar",
        testo: "The national park that since 2023 has enclosed the archaeological site and a stretch of coast with public beaches, cycle paths and facilities. Park entry is charged separately from the ruins and is included in the 265 MXN foreigners pay.",
        come: "By bike or taxi from town; there is a car park inside and a small train to the archaeological zone.",
        quando: "Morning, together with the ruins.",
        tempo: "Half a day with the site",
        costo: "100 MXN for foreigners, about €5 (2026)",
        lat: 20.18752,
        lng: -87.44357,
      },
    ],
      "programmi": [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Tulum archaeological site at opening time and Parque del Jaguar",
          "Lunch and a swim at Playa Paraíso",
          "Afternoon: Gran Cenote or Cenote Calavera",
          "Evening: dinner in town",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Cenote Dos Ojos in the morning",
          "Afternoon at Caleta Tankah or Xcacel (closed on Mondays)",
          "Evening at Straw Hat or Vagalume",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: day trip to Cobá, climbing Nohoch Mul",
          "Back via Cenote Zacil-Ha or Kaan Luum Lagoon",
        ],
      },
    ],
      "zone": [
      {
        nome: "Tulum town",
        perChi: "services and prices",
        testo: "Hotels in the centre, restaurants, near bus stops.",
        fascia: "€60-150",
      },
      {
        nome: "Beachfront hotel zone",
        perChi: "sea",
        testo: "Hotels and beach clubs, pricier.",
        fascia: "€250-600",
      },
      {
        nome: "Aldea Zamá and La Veleta",
        perChi: "those who want quiet halfway between town and sea",
        testo: "New residential areas between the centre and the beach, with condos, small hotels and apartments; you need a bike or taxi to get around.",
        fascia: "€90-180",
      },
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
    gite: [
      {
        nome: "Cobá",
        distanza: "45 km, about 45 minutes by car",
        come: "By car or with ADO buses and colectivos from town; many rent a bike at the entrance to get around the site.",
        testo: "A Maya city in the forest, with long white roads (sacbé) and the Nohoch Mul pyramid. Nearby there are a few little-visited cenotes.",
      },
      {
        nome: "Muyil and Sian Ka'an",
        distanza: "25 km, about 25 minutes by car",
        come: "By car or on a tour; boats along the reserve's canals leave from the Muyil site.",
        testo: "The small Maya site of Muyil is the gateway to the Sian Ka'an Biosphere Reserve, a UNESCO site: lagoons, mangroves and ancient canals where you float along with the current.",
      },
      {
        nome: "Akumal",
        distanza: "25 km, about 25 minutes by car",
        come: "By car, colectivo or taxi north along Federal Highway 307.",
        testo: "A bay where you snorkel over seagrass beds visited by green turtles. Swimming areas are regulated and you often go in with a local guide.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Tulum?",
        risposta: "Two days are enough for the archaeological site, a beach and two cenotes. With three you can add Cobá or Sian Ka'an.",
      },
      {
        domanda: "Is it better to stay in town or on the beach?",
        risposta: "In town you spend much less and eat better, but you need a bike or taxi for the sea. The hotel zone is on the water but prices and dinners are expensive.",
      },
      {
        domanda: "Tulum or Playa del Carmen as a base?",
        risposta: "Tulum is handier for ruins, cenotes and quiet beaches; Playa del Carmen has more city life and the ferries to Cozumel. Many people stay in both.",
      },
      {
        domanda: "Do you need to book the archaeological site?",
        risposta: "No, tickets are sold at the Parque del Jaguar entrance. It's worth arriving at 8am, because last entry is at 3:30pm and the coaches arrive mid-morning.",
      },
      {
        domanda: "Is there sargassum in Tulum?",
        risposta: "Between spring and summer large amounts of seaweed can wash up on Riviera Maya beaches. In those months check the daily reports and keep the cenotes as a backup.",
      },
      {
        domanda: "How do you get around Tulum?",
        risposta: "By bike, on cycle paths linking town, ruins and beach, or by taxi, agreeing the fare before getting in. For Cobá and Akumal there are colectivos and ADO buses.",
      },
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
    comeSpostarsi: "I have no notes on getting around the city: I only saw it for one evening.",
    periodoMigliore: "I didn't note it; the dry season recommended for the Riviera Maya applies, from November to April.",
    erroriDaEvitare: [],
    miaEsperienza:
      "I only saw it in the evening, with a stop at Clandestino: too little to form an idea of the city, which deserves more time (maybe with the excursion to Cozumel, which we didn't do on my trip).",
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
    comeArrivare: "By van or car from Tulum (about 1 hour). From Cancún airport, about 70 km away, ADO buses leave from the terminals and reach the centre in about an hour; tickets at the ADO desk in arrivals or on ado.com.mx. From Tulum the bus takes about 45 minutes. The main ADO terminal is at the corner of Quinta Avenida and Calle Juárez, a short walk from the sea and from the Cozumel ferry pier. The Tren Maya has a station on the edge of the city: from there you need a taxi to the centre.",
    costi: "For a single evening I didn't note the costs; like Tulum, prices are almost European. Roughly, per person per day: 50-70 € with a hostel, tacos and colectivos; 120-180 € with a hotel in the centre, a cenote and a beach club; from 300 € with a resort in Playacar or parks like Xcaret. Cozumel on a shared catamaran about 1,670 MXN per person including the ferry; private boat about 700 MXN per person plus the ferry, about 580 MXN return.",
    luoghi: [
      {
        "nome": "5th Avenue",
        "testo": "The main pedestrian street, parallel to the sea, with shops, restaurants and bars for several kilometres. To the north, past Calle 38, it becomes quieter and shadier.",
        "come": "On foot from the centre.",
        "quando": "Afternoon and evening.",
        "tempo": "2 hours",
        "costo": "Free",
        "lat": 20.63472,
        "lng": -87.06666
      },
      {
        "nome": "Mamitas Beach, Playacar and Parque Fundadores",
        "testo": "The public beaches in the centre, with beach clubs and free stretches. Mamitas is the liveliest, Playacar the quietest, in front of the resorts.",
        "come": "On foot from the centre.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "costo": "Free beach; in the beach clubs sunbeds with a minimum spend",
        "lat": 20.63109,
        "lng": -87.0652
      },
      {
        "nome": "Cozumel by catamaran or private boat",
        "testo": "A day trip to Cozumel with snorkelling on the Palancar, El Cielo and El Cielito reefs. We didn't do it on this trip, but with more time I recommend it.",
        "come": "Shared catamaran with ferry, lunch and open bar, or a private boat with the ferry paid separately: compare prices from several operators.",
        "quando": "Morning.",
        "tempo": "Full day",
        "costo": "Catamaran about 1,670 MXN per person, about 85 €, with return ferry; private boat about 700 MXN per person plus the ferry, about 580 MXN return (from the trip).",
        "lat": 20.43,
        "lng": -87.02
      },
      {
        "nome": "Parque Fundadores and Portal Maya",
        "testo": "The seafront square where Quinta Avenida begins, with the large bronze Portal Maya sculpture and the small church of the Virgen del Carmen. In the afternoon the voladores often perform, launching themselves tied to a very tall pole.",
        "come": "On foot, at Calle 1.",
        "quando": "Late afternoon.",
        "tempo": "30 minutes",
        "costo": "Free",
        "lat": 20.62204,
        "lng": -87.07497
      },
      {
        "nome": "Punta Esmeralda",
        "testo": "The public beach north of town popular with local families, with a freshwater pool where a small cenote flows out. No resorts behind it and the sea is often calmer.",
        "come": "Taxi or on foot along the beach from the centre, about 30 minutes.",
        "quando": "Weekday mornings.",
        "tempo": "Half a day",
        "costo": "Free",
        "lat": 20.64822,
        "lng": -87.05054
      },
      {
        "nome": "Xaman Ha (Playacar)",
        "testo": "Small Maya structures among the gardens of the Playacar resorts: Xaman Ha was the port where pilgrims set off for the sanctuary of Ixchel on Cozumel. It is not a large site, but you see it on the walk to the beach.",
        "come": "On foot or by bike from Parque Fundadores, inside Playacar.",
        "quando": "Morning.",
        "tempo": "30 minutes",
        "costo": "Free entry (INAH page, 2026).",
        "orari": "Daily 8-17 (INAH page).",
        "lat": 20.60728,
        "lng": -87.09289,
        "url": "https://lugares.inah.gob.mx/es/node/4354"
      },
      {
        "nome": "Calle 12 and the nightlife",
        "testo": "The street of bars and clubs, between Quinta Avenida and the sea, with bars, nightclubs and beach clubs open until late. It is noisy and crowded at weekends.",
        "come": "On foot from the centre.",
        "quando": "Evening and night.",
        "tempo": "Evening",
        "lat": 20.66842,
        "lng": -87.08293,
        "consiglio": "Count your change and keep an eye on your glass; use taxis de sitio to get back."
      },
      {
        "nome": "Clandestino",
        "testo": "An evening venue in the centre.",
        "come": "On foot from 5th Avenue.",
        "quando": "Evening.",
        "tempo": "Evening",
        "lat": 20.63746,
        "lng": -87.06578,
        "consiglio": "I only saw it in the evening, with a stop at Clandestino."
      },
      {
        "nome": "Cenote Chaak Tun",
        "testo": "A cave cenote on the western edge of the city, with two chambers lit by shafts of light from above. It is the cenote closest to the centre.",
        "come": "Taxi from the centre, about 15 minutes; guided visit.",
        "quando": "Midday, when the light beams come straight down.",
        "tempo": "1.5 hours",
        "lat": 20.65233,
        "lng": -87.12539
      },
      {
        "nome": "Cenote Cristalino and Cenote Azul",
        "testo": "Open cenotes side by side along Federal Highway 307, towards Tulum, with clear water, fish and jumping platforms. They are the easiest swim outside town.",
        "come": "Colectivo towards Tulum from Calle 2, stopping on request on the highway, or by car, about 20-25 minutes.",
        "quando": "Early morning, before the groups.",
        "tempo": "2-3 hours",
        "lat": 20.49041,
        "lng": -87.25028,
        "consiglio": "Shower before swimming and no sunscreen, as in every cenote."
      },
      {
        "nome": "Xcaret Park",
        "testo": "The biggest theme park on the Riviera Maya, with underground rivers to swim through, animals, a Maya archaeological zone and the evening show on the history of Mexico. Expensive, but designed for a full day.",
        "come": "Shuttles from the centre or taxi, about 10 minutes south.",
        "quando": "Full day, until the evening show.",
        "tempo": "Full day",
        "orari": "Daily 8:30-22 (official site).",
        "lat": 20.57806,
        "lng": -87.11917,
        "url": "https://www.xcaret.com/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: a public beach, Mamitas or Punta Esmeralda",
          "Lunch on 5th Avenue",
          "Afternoon: Parque Fundadores and Portal Maya, shopping",
          "Evening: Calle 12 or Clandestino"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: beaches and 5th Avenue",
          "Day 2: Cozumel by catamaran"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Cenote Chaak Tun in the morning, Cenote Cristalino and Azul, afternoon in Akumal for the turtles"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centre (5th Avenue)",
        "perChi": "nightlife",
        "testo": "Everything on foot, but noisy and expensive; better a side street away from Calle 12.",
        "fascia": "45-100 €"
      },
      {
        "nome": "Playacar",
        "perChi": "resorts",
        "testo": "A gated resort area, quieter, close to the ferry."
      },
      {
        "nome": "North, towards Punta Esmeralda",
        "perChi": "more calm",
        "testo": "Past Calle 38, quieter condos and small hotels, 15-20 minutes' walk from the centre."
      }
    ],
    gite: [
      {
        "nome": "Tulum",
        "distanza": "about 63 km, 45 minutes by bus",
        "come": "ADO bus or colectivo from Calle 2.",
        "testo": "The Maya ruins on the cliff and the beaches of the Parque del Jaguar. Go in at the 8 am opening; entry fees on the Tulum page."
      },
      {
        "nome": "Akumal",
        "distanza": "about 37 km, 30 minutes",
        "come": "Colectivo towards Tulum, then on foot from the road to the bay.",
        "testo": "The bay where you swim with sea turtles grazing on seagrass, with rules and access controlled by the community."
      },
      {
        "nome": "Puerto Morelos",
        "distanza": "about 35 km, 30 minutes",
        "come": "ADO bus or colectivo towards Cancún.",
        "testo": "A fishing village with the leaning lighthouse and the protected reef in front of the beach; inland, the Ruta de los Cenotes."
      }
    ],
    faq: [
      {
        "domanda": "Playa del Carmen or Tulum as a base?",
        "risposta": "Playa is handier for transport, restaurants and the Cozumel ferries, but it is a crowded city; Tulum has prettier beaches and a more relaxed feel, with even higher prices."
      },
      {
        "domanda": "How many days do you need in Playa del Carmen?",
        "risposta": "One or two days are enough for the beaches, Quinta Avenida and Cozumel; with three you add cenotes and Akumal."
      },
      {
        "domanda": "How do you get to Cozumel?",
        "risposta": "By ferry from the pier in the centre, about 580 MXN return, or on a shared catamaran that includes ferry, snorkelling and lunch (about 1,670 MXN per person, from the trip)."
      },
      {
        "domanda": "Are the beaches in Playa del Carmen free?",
        "risposta": "Yes, beaches in Mexico are public: you only pay for sunbeds and umbrellas in the beach clubs. Punta Esmeralda and Playacar are the quietest stretches."
      },
      {
        "domanda": "Is there sargassum?",
        "risposta": "It can arrive in summer and leave beaches covered in brown seaweed. Check local bulletins before choosing where to spend the day."
      },
      {
        "domanda": "What is the Visitax?",
        "risposta": "It is the tourist tax of Quintana Roo: 20.99 dollars per person, payable only online (Viaggiare Sicuri, May 2026)."
      }
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
    comeSpostarsi: 'A car-free island: on foot or with "carritos" (local taxis/golf carts).',
    periodoMigliore: 'Bioluminescence is best seen from April to November, and depends on moon phases and weather.',
    erroriDaEvitare: [
      'Heading out for the evening bioluminescence without lots of repellent: at Punta Mosquito the mosquitoes give no respite',
      "Walking to see the bioluminescence: it's almost an hour's walk in the dark each way, better a carrito, a kayak or a boat tour",
      "The 3 Islas tour is nice but a bit redundant if you've already seen similar things elsewhere on the trip",
    ],
    miaEsperienza:
      "Holbox was the right ending for the trip. If I had to recommend a single activity from the whole itinerary, it would be the whale shark excursion, which I did right here.",
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
    comeArrivare: "Ferry from Chiquilà (25-30 minutes), reached by van/car from Cancún. From Cancún to Chiquilá it is about two and a half hours by road; if you drive, leave the car in Chiquilá's paid guarded car parks, because tourist cars are not allowed on the island. The ferry costs about 330 MXN each way (about 16 €), with frequent sailings from morning to evening (from the trip, 2026). Golf cart taxis wait at the Holbox pier: agree the price before getting in. There is only one ATM on the island: arrive with enough cash.",
    costi: "I didn't note the overall cost of Holbox; prices for the individual excursions are in the entries above and in the experience pages. Roughly: whale shark 3,000-4,000 MXN per person plus the park wristband, 3 Islas 750-900 MXN, kayak for the bioluminescence 400-500 MXN, horse ride 850 MXN for an hour and a half, ferry 330 MXN each way (from the trip, 2026). Budget per person per day: low 50-70 € (hostel in the village, street food), mid 120-180 € (hotel in the village and one excursion), high from 300 € (beach hotel and whale shark).",
    luoghi: [
      {
        "nome": "Whale shark",
        "testo": "A boat trip to swim with the whale shark, allowed in small groups. There is a dedicated experience page. If I had to recommend just one activity from the whole itinerary, it would be this one.",
        "come": "Tour from Holbox harbour, with a guide; departure around 7-8 and back in the early afternoon.",
        "quando": "The season runs roughly from mid-May to mid-September, with July and August the best months; trips run under CONANP permits.",
        "tempo": "Half a day",
        "costo": "Shared tour roughly 3,000-4,000 MXN per person, about 150-200 €, plus the park wristband if required (from the trip, 2026).",
        "consiglio": "Biodegradable sunscreen, a long-sleeved top and water; a life jacket in the water is mandatory."
      },
      {
        "nome": "Bioluminescence at Punta Mosquito",
        "testo": "Luminescent plankton lights up the water at night. You can go on your own by «carrito» to the spot, by kayak with a guide or on a boat tour.",
        "come": "Ask locally on the day: it depends on the moon phase and the weather.",
        "quando": "Evening, best on moonless nights; it is best seen from April to November.",
        "tempo": "2 hours",
        "costo": "Guided kayak 500 MXN per person for groups over 8, 400 MXN under 8 (from the trip).",
        "lat": 21.54307,
        "lng": -87.35312,
        "consiglio": "Walking is not recommended: about an hour each way, almost all of it in the dark."
      },
      {
        "nome": "3 Islas tour",
        "testo": "A shared boat trip of about 3 hours, with flamingos, dolphins and birds: Isla Pájaros, the Yalahau cenote, Isla Pasión or Punta Mosquito.",
        "come": "Prices vary by operator, some include hotel pick-up. The Yalahau cenote is paid separately.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "costo": "750-900 MXN per person, about 38-45 € (about 1,100 MXN with transfer); Yalahau cenote about 200 MXN (from the trip).",
        "lat": 21.45715,
        "lng": -87.40564
      },
      {
        "nome": "Cabo Catoche",
        "testo": "A boat trip to the north-eastern tip of the Yucatán peninsula, between the Gulf of Mexico and the Caribbean, usually with snorkelling stops. We didn't do it on the trip.",
        "come": "Shared boat tour; compare several operators and what the price includes.",
        "quando": "Full day.",
        "tempo": "Full day",
        "costo": "Roughly 80-100 dollars per person (from the trip).",
        "lat": 21.6058,
        "lng": -87.1033
      },
      {
        "nome": "Punta Cocos",
        "testo": "The western tip of the island, where people go at sunset as the sun drops into the Gulf. At night it is another bioluminescence spot, closer to the village than Punta Mosquito.",
        "come": "By bike or golf cart from the centre, about 15 minutes, or on foot along the beach.",
        "quando": "Sunset.",
        "tempo": "1-2 hours",
        "costo": "Free",
        "lat": 21.50984,
        "lng": -87.39468
      },
      {
        "nome": "Punta Mosquito by day",
        "testo": "The sandbar east of the village, where at low tide you walk through shallow water among flocks of birds and, in season, flamingos. It is the wildest part of the island you can reach on foot.",
        "come": "On foot along the beach eastwards, about 30-40 minutes from the centre, or by golf cart to the start of the bar.",
        "quando": "Morning or late afternoon, at low tide.",
        "tempo": "2 hours",
        "costo": "Free",
        "lat": 21.54307,
        "lng": -87.35312,
        "consiglio": "Insect repellent and water shoes."
      },
      {
        "nome": "Village centre and murals",
        "testo": "The car-free sand streets around the square, with colourful houses, murals, restaurants and golf carts. In the evening the square is the island's meeting point.",
        "come": "On foot.",
        "quando": "Evening.",
        "tempo": "1-2 hours",
        "costo": "Free",
        "lat": 21.52167,
        "lng": -87.37667
      },
      {
        "nome": "Main beach and beach clubs",
        "testo": "The beach in front of the village, with shallow, calm water and beach clubs that ask for a minimum spend, usually deducted from the final bill: Carolinda, Zomay, Barbarossa, Amaite Beach Club.",
        "come": "On foot from the centre.",
        "quando": "Afternoon.",
        "tempo": "Half a day",
        "costo": "Free beach; minimum spend in the beach clubs"
      },
      {
        "nome": "Horse ride on the beach",
        "testo": "An hour and a half on horseback along the beach, a quiet way to see the stretches outside the village.",
        "come": "Booked in the village.",
        "quando": "Late afternoon.",
        "tempo": "1.5 hours",
        "costo": "850 MXN per person, about 43 € (from the trip)."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: 3 Islas tour",
          "Afternoon: beach",
          "Sunset at Punta Cocos",
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
    zone: [
      {
        "nome": "Village centre",
        "perChi": "everything on foot",
        "testo": "Restaurants, shops and hotels close to the square, car-free sand streets. In low season prices drop a lot.",
        "fascia": "50-170 €"
      },
      {
        "nome": "Beach outside the village",
        "perChi": "calm",
        "testo": "Seafront hotels, more isolated.",
        "fascia": "150-400 €"
      },
      {
        "nome": "Towards Punta Cocos",
        "perChi": "sunsets and silence",
        "testo": "A few places to stay on the west side, quiet; for the centre you need a golf cart or a bike."
      }
    ],
    gite: [
      {
        "nome": "El Cuyo",
        "distanza": "roughly 2 hours by car from Chiquilá",
        "come": "Ferry to Chiquilá, then by car.",
        "testo": "A fishing village on the Yucatán coast, with long, almost empty beaches and the feel of Holbox twenty years ago."
      },
      {
        "nome": "Río Lagartos and Las Coloradas",
        "distanza": "roughly 3 hours by car from Chiquilá",
        "come": "Car or tour; better as a stop on the way to Valladolid.",
        "testo": "A biosphere reserve with flamingos and mangroves by boat, and the pink lakes of the Las Coloradas salt pans."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need on Holbox?",
        "risposta": "Two or three days: one for the 3 Islas and Punta Mosquito, one for the whale shark in season or Cabo Catoche, plus the evenings for the bioluminescence."
      },
      {
        "domanda": "When can you swim with the whale shark?",
        "risposta": "Roughly from mid-May to mid-September, with July and August the best months; trips run under CONANP permits."
      },
      {
        "domanda": "How do you get to Holbox?",
        "risposta": "By van, bus or car from Cancún to Chiquilá, about two and a half hours, then a 25-30 minute ferry, about 330 MXN each way."
      },
      {
        "domanda": "Are there ATMs on Holbox?",
        "risposta": "Just one on the whole island, often with queues or empty: arrive with enough cash in pesos."
      },
      {
        "domanda": "Can you drive on the island?",
        "risposta": "No, tourist cars stay in Chiquilá. On the island you walk, cycle or use golf cart taxis, agreeing the price first."
      },
      {
        "domanda": "When can you see the bioluminescence?",
        "risposta": "It is best seen from April to November, on moonless nights; it depends on the moon phase and the weather, so ask locally on the day."
      }
    ],
    esperienzeSlugs: ['squalo-balena-holbox', 'bioluminescenza-holbox', 'tour-3-islas-holbox', 'cabo-catoche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'A boat anchored in the shallow, crystal-clear water of Holbox, with the white shore and palm trees on the horizon',
    immagine: '/images/messico/holbox-barca-acqua-bassa-riccardo.jpg',
  },
  {
    slug: 'uxmal-ruta-puuc',
    paeseSlug: 'messico',
    ordine: 30,
    nome: 'Uxmal and the Puuc Route',
    tipologia: ['archeologia', 'cultura'],
    giorniConsigliati: '1-2 days, sleeping near Uxmal or in Santa Elena',
    visitataPersonalmente: true,
    introduzione:
      'The great Maya city of the Puuc style, south of Mérida, and the country road linking the smaller sites in the same style: Kabah, Sayil and Labná.',
    percheAndarci:
      "To see a different Maya architecture from Chichén Itzá: façades that are plain at the bottom and covered at the top with stone mosaics and masks of Chaac, the rain god. The Puuc Route sites are quiet and often nearly empty.",
    cosaVedere: [
      'The Pyramid of the Magician and the Nunnery Quadrangle at Uxmal',
      'The Codz Poop at Kabah, with its façade of masks',
      'The Great Palace at Sayil, on stacked terraces',
      'The Labná arch',
    ],
    cosaFare: [
      'Enter Uxmal at opening time, 8 am',
      'Drive the Puuc Route, stopping at the smaller sites',
      'Have lunch with meat cooked underground, the pib',
    ],
    doveDormire:
      'There are few places to stay near Uxmal; Santa Elena is the nearest village. Sleeping here lets you enter the sites at opening time without the drive from Mérida.',
    doveMangiare:
      "After Uxmal I had lunch at Po' Pol Chac, with meat cooked underground.",
    comeArrivare: 'From Mérida on Federal Highway 261 towards Santa Elena, by car or on a tour.',
    comeSpostarsi: 'For the Puuc Route you need a car or a tour: the sites are along a country road.',
    periodoMigliore: 'November to April, the dry season; from April the heat at the shadeless sites is intense.',
    costi: 'Uxmal 105 MXN INAH admission plus a 461 MXN CULTUR state fee for foreigners; Kabah 155 MXN; Labná and Sayil 145 MXN each (INAH pages, November 2026).',
    erroriDaEvitare: [
      'Arriving at Uxmal in the afternoon: it closes at 4 pm, with last entry at 3 pm',
      'Bringing food to the site entrance: it is not allowed',
    ],
    miaEsperienza:
      "I visited Uxmal with a guide, on the road between Mérida and Campeche, and then had lunch at Po' Pol Chac, with meat cooked underground. I didn't do the Puuc Route.",
      "luoghi": [
        {
          "nome": "Uxmal",
          "testo": "The largest city of the Puuc style, a UNESCO World Heritage Site. The Pyramid of the Magician has an unusual oval plan; the Nunnery Quadrangle is a courtyard enclosed by four palaces with stone-mosaic façades.",
          "come": "From Mérida on Federal Highway 261 towards Santa Elena. INAH ticket plus the CULTUR state fee.",
          "quando": "Open daily 8 am to 4 pm, last entry 3 pm (INAH page).",
          "tempo": "2-3 hours",
          "costo": "105 MXN INAH plus 461 MXN CULTUR for foreigners; Yucatán residents don't pay the state fee (INAH page, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5797",
          "consiglio": "With a guide the symbols on the façades make much more sense."
        },
        {
          "nome": "Kabah",
          "testo": "The Codz Poop has a façade covered with hundreds of Chaac masks, one of the finest examples of Maya art according to INAH. The site also has a lone arch.",
          "come": "By car, south of Uxmal on the Puuc Route.",
          "quando": "Open daily 8 am to 5 pm, last entry 4 pm (INAH page).",
          "tempo": "1 hour",
          "costo": "155 MXN for foreigners (INAH page, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5504"
        },
        {
          "nome": "Sayil",
          "testo": "A Puuc site with the Great Palace, or North Palace, built on two terraces that give the impression of three storeys, with façades added in successive stages.",
          "come": "By car on the Puuc Route, between Kabah and Labná.",
          "quando": "Open daily 8 am to 5 pm, last entry 4 pm (INAH page).",
          "tempo": "45 minutes",
          "costo": "145 MXN for foreigners (INAH page, November 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/4458"
        },
        {
          "nome": "Labná",
          "testo": "Famous for its richly decorated arch, which linked two courtyards. Inhabited from 200 BC, it peaked between 800 and 1000 AD (INAH page). The site is quiet.",
          "come": "By car, at the end of the Puuc Route.",
          "quando": "Open daily 8 am to 5 pm, last entry 4 pm (INAH page).",
          "tempo": "1 hour",
          "costo": "145 MXN for foreigners (INAH page, 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/4427"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Uxmal at opening time",
            "Lunch with pib",
            "Afternoon: Kabah"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Uxmal and a night nearby",
            "Day 2: Kabah, Sayil and Labná, then on to Campeche"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Around Uxmal",
          "perChi": "those who want to enter at opening time",
          "testo": "A few places to stay near the site, to book ahead."
        },
        {
          "nome": "Santa Elena",
          "perChi": "those spending less",
          "testo": "The nearest village, with simple accommodation."
        }
      ],
      "sapori": [
        {
          "nome": "Pib and cochinita",
          "testo": "Meat marinated in achiote and cooked underground, the Maya pib method."
        },
        {
          "nome": "Sopa de lima",
          "testo": "Chicken and lime soup, the Yucatán classic."
        }
      ],
      "attenzioni": [
        "Uxmal closes earlier than the other sites: last entry at 3 pm.",
        "No food at the entrance, no pets, extra fee for professional video cameras.",
        "There are few services along the Puuc Route: get water and fuel before you set off."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo', 'messico-beach-life'],
    imageAlt: "The two-headed jaguar throne in front of the Governor's Palace at Uxmal",
    immagine: '/images/messico/uxmal-ruta-puuc-riccardo.webp',
  },
  {
    slug: 'palenque',
    paeseSlug: 'messico',
    ordine: 31,
    nome: 'Palenque',
    tipologia: ['archeologia', 'natura', 'cultura'],
    giorniConsigliati: '2 nights, with a full day for the site',
    visitataPersonalmente: true,
    introduzione:
      'A Classic Maya city on the first hills of Chiapas, inside a forest-covered national park, with the Temple of the Inscriptions and the tomb of King Pakal.',
    percheAndarci:
      'It is one of the most beautiful Maya sites for the combination of architecture and nature: temples among the trees, streams and howler monkeys. It also has a Tren Maya station.',
    cosaVedere: [
      'The Temple of the Inscriptions and the Palace with its tower',
      'The Group of the Crosses',
      'The site museum',
    ],
    cosaFare: [
      'Enter at opening time, 8 am, while the forest is still cool',
      'Follow the trails to the more distant temple groups',
      'Consider the Misol-Ha and Agua Azul waterfalls only if official advice on Federal Highway 199 allows it',
    ],
    doveDormire:
      'The town to spend less; the road up to the site to sleep in the greenery, closer to the entrance.',
    doveMangiare:
      'Simple food in town. Food is not allowed into the site.',
    comeSpostarsi: 'From town to the site, about 7 km inside the national park, by taxi or colectivo.',
    periodoMigliore: 'November to April, the driest season; the rest of the year it rains often and is very hot and humid.',
    erroriDaEvitare: [
      'Driving yourself to the waterfalls on Federal Highway 199 without checking the advice: the UK Foreign Office advises against all but essential travel on that stretch',
      'Arriving at midday: intense heat and crowds',
      'Looking for the site museum on a Monday: it is open Tuesday to Sunday (INAH page)',
    ],
      "sapori": [
        {
          "nome": "Chiapas coffee and chocolate",
          "testo": "Chiapas is a coffee and cacao region."
        },
        {
          "nome": "Chiapas tamales",
          "testo": "Tamales wrapped in banana leaf, in the markets."
        }
      ],
      "attenzioni": [
        "In Chiapas Viaggiare Sicuri reports robberies of foreigners and recommends staying on state highways.",
        "The UK Foreign Office advises against all but essential travel within 40 km of the Guatemalan border: Yaxchilán and Bonampak are in that zone.",
        "Strong repellent: there are many mosquitoes in the park."
      ],
    comeArrivare: "Tren Maya (Palenque station) or ADO bus; by car on Federal Highway 186, turning off at km 114 towards Palenque (INAH page). From Campeche it takes about 5-6 hours by car, from Xpujil and Calakmul another 5-6; Palenque is on Central time, like Campeche, one hour behind Quintana Roo. The airport with most flights is Villahermosa, from which you reach Palenque on the same Federal 186. From town to the site, about 7 km inside the national park, you go by taxi or by the colectivos running along the El Panchán road. Check Tren Maya times and tickets on the official site a few days ahead.",
    costi: "210 MXN INAH entry for foreigners, plus 215 MXN national park fee (CONANP) (INAH page, November 2026). Indicative budget per person per day: low 35-50 € (room in town, comedores, colectivo to the site); mid 70-110 € (cabaña in the forest along the site road, guide at the site); high from 180 € (hotel in the jungle, private tour to Yaxchilán and Bonampak). Yaxchilán: free INAH entry but the boat costs about 1,200 MXN; Bonampak 210 MXN plus community fees (INAH page).",
    luoghi: [
      {
        "nome": "Palenque archaeological zone",
        "testo": "The Temple of the Inscriptions held the tomb of Pakal, king of Palenque in the 7th century; the Palace has a tower, rare in Maya architecture. Around them, the Group of the Crosses and smaller temples in the forest.",
        "come": "Tickets at the visitor centre (CATVI) or online. You pay the INAH entry and the national park fee.",
        "quando": "Best at opening, when the forest is cool.",
        "tempo": "3-4 hours",
        "costo": "210 MXN INAH plus 215 MXN CONANP for foreigners, about 21 € in total (INAH page, November 2026).",
        "orari": "Daily 8-17, last entry at 16 (INAH page).",
        "lat": 17.4836,
        "lng": -92.0468,
        "url": "https://lugares.inah.gob.mx/en/node/4853",
        "consiglio": "No food at the entrance: eat before or after."
      },
      {
        "nome": "Temple of the Inscriptions",
        "testo": "The stepped pyramid that held Pakal's tomb, discovered in 1952 under the temple floor, with the famous carved sarcophagus lid. It takes its name from the long hieroglyphic texts in the temple at the top.",
        "come": "Inside the archaeological zone, on the right just after the entrance; the climb and the tomb are closed to the public.",
        "quando": "Early morning, with light on the façade.",
        "tempo": "30 minutes",
        "lat": 17.4836,
        "lng": -92.0468
      },
      {
        "nome": "The Palace",
        "testo": "The complex of courtyards, galleries and rooms on a large platform, with a four-storey tower unique in the Maya world, perhaps used to observe the sky. In the courtyards there are reliefs of captives and inscriptions.",
        "come": "Inside the archaeological zone, opposite the Temple of the Inscriptions.",
        "quando": "Morning.",
        "tempo": "45 minutes",
        "lat": 17.48415,
        "lng": -92.04616
      },
      {
        "nome": "Group of the Crosses",
        "testo": "Three temples on a raised plaza, the Temple of the Cross, of the Foliated Cross and of the Sun, built by Pakal's son, with carved panels inside. From the top of the Temple of the Cross you see the whole site with the plain behind.",
        "come": "On foot beyond the Palace, crossing the Otolum stream.",
        "quando": "Late morning.",
        "tempo": "45 minutes",
        "lat": 17.48292,
        "lng": -92.04523
      },
      {
        "nome": "Temple of the Count and North Group",
        "testo": "The temple where the 19th-century explorer Jean-Frédéric Waldeck, who called himself a count, lived for a while, and next to it the North Group with the ball court. It is the least crowded part of the site's core.",
        "come": "On foot inside the archaeological zone, to the north.",
        "quando": "Morning.",
        "tempo": "30 minutes",
        "lat": 17.48556,
        "lng": -92.04563
      },
      {
        "nome": "Waterfall trail and Baño de la Reina",
        "testo": "From the North Group the path drops into the forest along the Otolum stream, past small waterfalls, natural pools and groups of buildings still covered by vegetation. It is where you hear the howler monkeys and see how much of the site is still unexcavated.",
        "come": "Part of the visit, heading down to the site museum: you exit at the lower end without going back.",
        "quando": "At the end of the visit, walking down to the museum.",
        "tempo": "45 minutes",
        "consiglio": "No swimming in the pools; closed shoes, because the steps are slippery."
      },
      {
        "nome": "Alberto Ruz Lhuillier site museum",
        "testo": "The site museum, with reliefs and objects found in the excavations, named after the archaeologist who discovered Pakal's tomb in 1952. It has a replica of the tomb and of the sarcophagus lid.",
        "come": "On the site road. Entry is included in the archaeological zone ticket.",
        "quando": "After the visit, coming down the waterfall trail.",
        "tempo": "1 hour",
        "orari": "Tuesday to Sunday, 8:30 to 17 (INAH page).",
        "url": "https://lugares.inah.gob.mx/en/node/4293"
      },
      {
        "nome": "Misol-Ha and Agua Azul",
        "testo": "Two famous waterfalls south of Palenque, on the road to Ocosingo, Federal Highway 199: Misol-Ha is a single drop into a large pool, Agua Azul a series of blue pools, which lose their colour in the rainy season, about 60 km away plus a detour.",
        "come": "Only on an organised tour from town, and only if official advice allows it at the time.",
        "lat": 17.2557,
        "lng": -92.11595,
        "consiglio": "The British Foreign Office advises against all but essential travel on Highway 199 between Rancho Nuevo and the Chancalá junction, just outside Palenque, because of illegal roadblocks, protests and the risk of kidnapping. Entry fees are run by the communities: not verified."
      },
      {
        "nome": "Roberto Barrios waterfalls",
        "testo": "A series of turquoise pools and small cascades over travertine steps, near the village of Roberto Barrios, less known than Agua Azul. They are run by the local community.",
        "come": "On a tour or by taxi from town; check the latest advice on the area before leaving.",
        "quando": "Dry season, when the water is clearest.",
        "tempo": "Half a day",
        "lat": 17.33012,
        "lng": -91.91792
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: the site at opening, Temple of the Inscriptions, Palace and Group of the Crosses",
          "Waterfall trail down to the site museum",
          "Afternoon: rest in the El Panchán forest"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: site and museum",
          "Day 2: Roberto Barrios or, if official advice allows, Misol-Ha and Agua Azul on a tour"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Yaxchilán and Bonampak as a day tour, leaving at dawn"
        ]
      }
    ],
    zone: [
      {
        "nome": "Palenque town",
        "perChi": "budget and transport",
        "testo": "Cheaper, close to buses and services.",
        "fascia": "30-70 €"
      },
      {
        "nome": "Site road (El Panchán)",
        "perChi": "those who want the forest",
        "testo": "Places to stay in the vegetation, closer to the park entrance, with howler monkeys in the morning.",
        "fascia": "60-120 €"
      },
      {
        "nome": "La Cañada",
        "perChi": "a compromise",
        "testo": "The leafy neighbourhood at the western entrance to town, with hotels among the trees and restaurants, a few minutes from the centre and on the road to the site."
      }
    ],
    gite: [
      {
        "nome": "Yaxchilán and Bonampak",
        "distanza": "about 3 hours by road towards the Usumacinta river",
        "come": "Day tour from town, leaving at dawn; Yaxchilán is reached only by boat from Frontera Corozal.",
        "testo": "Yaxchilán, on the river at the border with Guatemala, has carved lintels in the forest (free entry, boat about 1,200 MXN); Bonampak the best-preserved Maya murals (210 MXN for foreigners plus 40 MXN community fee and 250 MXN internal transport). Both open 8-16:30, last entry at 16 (INAH pages). Check the latest advice before leaving: the area is close to the border."
      },
      {
        "nome": "Misol-Ha and Agua Azul",
        "distanza": "about 20 km and 60 km south",
        "come": "Only on an organised tour and only if official advice allows it.",
        "testo": "The most famous waterfalls in Chiapas, on Federal Highway 199. The British Foreign Office advises against all but essential travel on Highway 199 between Rancho Nuevo and the Chancalá junction, just outside Palenque, because of illegal roadblocks, protests and the risk of kidnapping. Entry fees are run by the communities: not verified."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Palenque?",
        "risposta": "Two nights, with a full day for the site and museum; with a third day you add Yaxchilán and Bonampak or the waterfalls."
      },
      {
        "domanda": "What time should you enter the site?",
        "risposta": "At the 8 am opening, when the forest is cool and the groups haven't arrived yet; last entry is at 16 (INAH page)."
      },
      {
        "domanda": "How much does Palenque cost?",
        "risposta": "For foreigners 210 MXN INAH entry plus 215 MXN national park fee, with the site museum included (INAH page, November 2026)."
      },
      {
        "domanda": "Can you go to Misol-Ha and Agua Azul?",
        "risposta": "They are on Federal Highway 199, where the British Foreign Office advises against all but essential travel between Rancho Nuevo and the Chancalá junction: decide only after reading the latest advice, and only on a tour."
      },
      {
        "domanda": "Can you do Yaxchilán and Bonampak in a day?",
        "risposta": "Yes, on a tour leaving at dawn and returning in the evening; Yaxchilán is reached by boat on the Usumacinta river."
      },
      {
        "domanda": "Better to stay in town or near the site?",
        "risposta": "Town is cheaper and close to buses and the Tren Maya; the site road, towards El Panchán, is in the forest and closer to the entrance."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo'],
    imageAlt: "The Temple of the Inscriptions at Palenque among the trees of the Chiapas forest",
    immagine: '/images/messico/palenque.webp',
  },
  {
    slug: 'calakmul',
    paeseSlug: 'messico',
    ordine: 32,
    nome: 'Calakmul',
    tipologia: ['archeologia', 'natura'],
    giorniConsigliati: '2 nights in Xpujil or along the reserve road, with a full day for the site',
    visitataPersonalmente: true,
    introduzione:
      'One of the great capitals of the Classic Maya world, rival of Tikal, buried in the forest of the Calakmul Biosphere Reserve in southern Campeche. It is a UNESCO World Heritage Site for both culture and nature.',
    percheAndarci:
      'To see a vast Maya city with almost no crowds, and the forest from the top of the pyramids. Along the trails you may come across monkeys and forest birds.',
    cosaVedere: [
      'The great structures of the city, with the view over the forest',
      'The stelae of the central plaza',
      'The Río Bec-style sites around Xpujil, such as Becán and Xpuhil',
    ],
    cosaFare: [
      'Leave Xpujil at dawn to have time at the site',
      'Walk the marked trails, watching for wildlife',
      'Stop at Balam Ku along Federal Highway 186',
    ],
    doveDormire:
      'The town of Xpujil, on Federal Highway 186, or the eco-lodges along the reserve road. There are few of them: book ahead.',
    doveMangiare:
      'A few simple places in Xpujil. For the day in the reserve, better to bring food and water.',
    comeArrivare: 'From Federal Highway 186 (Escárcega-Chetumal): at the km 95 junction you take the reserve road, and the site is at km 60 (INAH page). The Tren Maya has stations at Xpujil and Calakmul, but there doesn\'t appear to be public transport to the ruins.',
    comeSpostarsi: 'By car or on a tour from Xpujil.',
    periodoMigliore: 'November to April, the dry season; in the rainy season the forest is more humid and full of mosquitoes.',
    costi: '210 MXN INAH admission for foreigners, plus a 215 MXN reserve fee (CONANP) (INAH page, November 2026). Bring cash.',
    erroriDaEvitare: [
      'Leaving late: last entry is at 4 pm and the reserve road is long and narrow',
      'Leaving the marked trails',
      'Entering the reserve without fuel, water and cash',
      'Driving on Federal Highway 186 in the evening',
    ],
      "luoghi": [
        {
          "nome": "Calakmul archaeological zone",
          "testo": "The capital of the Kaan dynasty, which fought Tikal for control of the Maya lowlands. The tallest structures rise above the treetops: from up there you see only forest to the horizon.",
          "come": "From the km 95 junction on Federal Highway 186, 60 km of road inside the reserve. You pay the INAH admission and the CONANP reserve fee.",
          "quando": "Open daily 8 am to 5 pm, last entry 4 pm (INAH page). Leave at dawn.",
          "tempo": "Full day",
          "costo": "210 MXN INAH plus 215 MXN CONANP for foreigners (INAH page, November 2026).",
          "url": "https://lugares.inah.gob.mx/en/node/5551",
          "consiglio": "Closed shoes, repellent, water and food for the whole day."
        },
        {
          "nome": "Becán and Xpuhil",
          "testo": "Two Río Bec-style sites near the town of Xpujil, with decorative towers and, at Becán, a moat around the city.",
          "come": "By car from Federal Highway 186, a few minutes from town.",
          "tempo": "1-2 hours",
          "consiglio": "Good for the afternoon of your arrival day."
        },
        {
          "nome": "Balam Ku",
          "testo": "A small site along Federal Highway 186, on the road between Escárcega and Xpujil.",
          "come": "By car, as a stop along the way.",
          "tempo": "1 hour"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Dawn: leave Xpujil",
            "Morning and early afternoon: Calakmul",
            "Back in Xpujil before dark"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Balam Ku on the way, Becán or Xpuhil in the afternoon",
            "Day 2: Calakmul"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Xpujil",
          "perChi": "services and transport",
          "testo": "The town on Federal Highway 186, with simple accommodation and a few places to eat."
        },
        {
          "nome": "Reserve road",
          "perChi": "those who want the forest",
          "testo": "Eco-lodges closer to the site, few and to book ahead."
        }
      ],
      "sapori": [
        {
          "nome": "Campeche cooking",
          "testo": "Pan de cazón and Gulf fish are found in Campeche; around Calakmul the food is simple and home-style."
        }
      ],
      "attenzioni": [
        "Stay on the marked trails.",
        "No smoking at the site and an extra fee for professional video cameras.",
        "Viaggiare Sicuri reports chikungunya in Campeche: strong repellent."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-yucatan-completo'],
    imageAlt: "Calakmul's Structure I rising from the reserve's forest, seen from the top of Structure II",
    immagine: '/images/messico/calakmul.webp',
  },
]
