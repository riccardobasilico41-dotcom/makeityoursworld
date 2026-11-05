import type { Destinazione } from '@/lib/types'

export const destinazioniPanama: Destinazione[] = [
  {
    slug: 'panama-city',
    paeseSlug: 'panama',
    ordine: 1,
    nome: 'Panama City',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "A capital with two opposite faces a few kilometers apart: the skyline of skyscrapers on the bay and the Casco Viejo, the colonial historic center and UNESCO site, with its squares and rooftops.",
    percheAndarci:
      "It's the air hub of all of Latin America and the obligatory gateway to the country, and unlike many capitals in the region it deserves a couple of days.",
    cosaVedere: [
      'The Casco Viejo, with Plaza de la Independencia and the colonial churches',
      'The Miraflores Locks on the Panama Canal, with the visitor center and the panoramic terrace',
      'The ruins of Panamá Viejo, the original city destroyed by pirates in 1671',
      'The Biomuseo designed by Frank Gehry, on the Calzada de Amador',
      "Parque Natural Metropolitano, tropical forest within the city limits",
    ],
    cosaFare: [
      "Visit the canal locks, best at the times ships transit (there's a dedicated experience page)",
      'An aperitivo on one of the Casco Viejo rooftops at sunset',
      'Day trip to the Perlas islands or Isla Taboga by ferry',
      'Excursion to Portobelo and the Caribbean coast, about 2 hours from the capital',
    ],
    doveDormire: "Casco Viejo for the atmosphere and nightlife; the Marbella and Obarrio area for more modern hotels and often lower prices.",
    doveMangiare:
      "The place not to skip is the Mercado de Mariscos on the bay: downstairs you buy the fish, upstairs they cook it, and a ceviche in a plastic cup costs a couple of dollars. The Casco Viejo has the rooftops and the high-end restaurants, with international-capital prices; the neighborhood fondas serve sancocho, the chicken soup with ñame that is the national dish, and ropa vieja. As street food, try carimañolas and fried empanadas at breakfast.",
    comeArrivare: "International flight to Panama City-Tocumen (PTY), one of the main hubs of the Americas; from the airport to the center 30-45 minutes by taxi or Uber.",
    comeSpostarsi: "Metro (two lines, cheap and functional), Uber widespread and convenient, taxis always to be negotiated before getting in.",
    periodoMigliore: "mid-December to mid-April, the dry season; the rest of the year it rains mostly in the afternoon",
    costi: "you pay in US dollars (the balboa exists only as coins); entry to Miraflores about 20 USD for foreigners",
    erroriDaEvitare: [
      "Going to the locks without checking the transit times: without ships passing through, the visit loses most of its point",
      "Walking at night outside the tourist areas of the Casco Viejo, which borders neighborhoods to avoid",
    ],
    miaEsperienza:
      "From the airport we went straight to the Casco Viejo, and the first impact was a skyline of skyscrapers that looked like nothing we'd seen in the previous three weeks. The next day, in the morning, the Miraflores Locks: the ship transit times need to be checked beforehand, because without a ship maneuvering you're looking at an empty concrete basin, while a container ship coming in with a few inches of margin on each side is worth the detour by itself. In the afternoon the ruins of Panamá Viejo and a walk in the Casco Viejo, where the most interesting thing to look at is the contrast between renovated buildings and facades still propped up. We had lunch at the Mercado de Mariscos with a ceviche in a plastic cup for a couple of dollars. Outside the tourist areas of the Casco, after sunset, it's better not to walk around.",
      "luoghi": [
        {
          "nome": "Miraflores Locks",
          "testo": "The Panama Canal locks where ships are raised and lowered between the two levels, with a visitor centre, museum and viewing terrace.",
          "come": "Ride-hailing taxi or hotel transfer from Panama City. Entry ticket to the visitor centre.",
          "quando": "Morning: check ship transit times in advance, because without a ship in motion you are looking at an empty basin.",
          "tempo": "2-3 hours",
          "costo": "17.22 USD for non-residents aged 13 and over (official ACP fee in force in 2026).",
          "url": "https://pancanal.com/",
          "consiglio": "A container ship entering with a few centimetres of clearance on each side is worth the detour alone."
        },
        {
          "nome": "Casco Viejo",
          "testo": "The colonial historic centre, a UNESCO site: Plaza de la Independencia, churches, restored palaces and façades still propped up, among cafés and rooftops.",
          "come": "On foot once you arrive; the district can be seen in a day.",
          "quando": "Morning and sunset; in the evening stay on the tourist streets.",
          "tempo": "Half a day",
          "consiglio": "The contrast between restored buildings and propped-up façades is the most interesting thing to look at. Outside the tourist areas, after sunset, better not to walk."
        },
        {
          "nome": "Panamá Viejo",
          "testo": "The ruins of the original city, founded in 1519 and destroyed in 1671 during the attack of the privateer Henry Morgan, by a fire whose author is still uncertain. Together with Casco Viejo it has been a UNESCO site since 1997.",
          "come": "Ride-hailing taxi from the centre.",
          "quando": "Tuesday to Sunday, 8:30am-5:30pm (ticket office until 4:30pm); closed on Mondays. Morning, before the heat.",
          "tempo": "1-2 hours",
          "url": "https://www.patronatopanamaviejo.org/"
        },
        {
          "nome": "Mercado de Mariscos",
          "testo": "The fish market near Casco Viejo, with ceviche stalls served in cups.",
          "come": "On foot from Casco Viejo.",
          "quando": "Lunch.",
          "tempo": "1 hour",
          "consiglio": "Ceviche comes in a plastic cup, eaten at the counter, for a few dollars."
        },
        {
          "nome": "Biomuseo",
          "testo": "The museum designed by Frank Gehry on the Amador Causeway, about the rise of the isthmus of Panama and biodiversity. The building with coloured canopies is visible from afar; inside, the rooms tell how the isthmus, joining two continents, changed animals and currents.",
          "come": "Taxi or Uber.",
          "quando": "Tuesday to Friday 9am-3pm, Saturday and Sunday 10am-3pm; closed on Mondays.",
          "tempo": "2 hours",
          "costo": "20 USD for non-resident adults (2026).",
          "url": "https://biomuseo.org/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Miraflores Locks with a ship in transit",
            "Lunch at the Mercado de Mariscos",
            "Afternoon: Casco Viejo",
            "Sunset over the sea from the Cinta Costera"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Miraflores, Casco Viejo",
            "Day 2: Panamá Viejo, Biomuseo, Calzada de Amador"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Casco Viejo",
          "perChi": "atmosphere and venues",
          "testo": "Hotels and restaurants in restored buildings, on foot. Pricier, noisy at night on weekends."
        },
        {
          "nome": "Bella Vista and Obarrio",
          "perChi": "services and prices",
          "testo": "A district of skyscrapers, hotels and restaurants, well connected by taxi."
        }
      ],
      "sapori": [
        {
          "nome": "Ceviche",
          "testo": "Raw fish marinated in lime, at the Mercado de Mariscos."
        },
        {
          "nome": "Sancocho",
          "testo": "Chicken soup with yuca and coriander, the national dish."
        },
        {
          "nome": "Arroz con pollo",
          "testo": "Chicken rice with vegetables, in the fondas."
        },
        {
          "nome": "Patacones",
          "testo": "Fried, flattened green plantain, to go with dishes."
        }
      ],
      "attenzioni": [
        "The UK Foreign Office reports muggings in Casco Viejo too, as well as Panamá Viejo and Avenida Central: after dark use ride-hailing taxis and don't walk alone on poorly lit streets.",
        "Before going to Miraflores check ship transit times.",
        "Taxis are often poorly maintained and have no meter: better to use apps or hotel-arranged transport."
      ],
    esperienzeSlugs: ['chiuse-miraflores'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "The skyline of Panama City's skyscrapers seen from a terrace in the Casco Viejo",
    immagine: '/images/panama/panama-city.jpg',
  },
  {
    slug: 'san-blas',
    paeseSlug: 'panama',
    ordine: 2,
    nome: 'San Blas (Guna Yala)',
    tipologia: ['mare', 'isole', 'cultura'],
    giorniConsigliati: '2-4 days',
    visitataPersonalmente: true,
    introduzione:
      "An archipelago of over 300 Caribbean islands autonomously administered by the Guna people: palm trees, white sand, shallow turquoise water and accommodation that is basic by choice, often without continuous electricity.",
    percheAndarci:
      "It's the most famous sea in Panama and one of the few self-governed indigenous territories on the continent: access rules, transport and facilities are managed by the Guna community, with no tourist chains.",
    cosaVedere: [
      'The best-known islands for day trips: Isla Perro (with a shipwreck for snorkeling), Isla Aguja, Cayos Holandeses',
      'The natural shallow-water pools in the middle of the sea',
      'The Guna villages, where you buy molas, the traditional hand-sewn textiles',
    ],
    cosaFare: [
      "A night in a cabaña on an island, with meals included and boat trips among the islets",
      'Snorkeling on the wrecks and the coral shallows',
      'Sailing crossing to Colombia (3-5 days), the classic alternative to the Darién Gap',
    ],
    doveDormire: "Only cabañas run by Guna families, from very spartan ones to a few options with a private bathroom: you book as a package, with transport and meals included.",
    doveMangiare: "Meals are almost always included in the package: fish, lobster in season, rice and plantain.",
    comeArrivare:
      "4x4 transfer from Panama City to the port of Cartí (about 2h30-3h on a very steep mountain road), then a boat to the islands. Departures very early in the morning.",
    comeSpostarsi: "Only by boat, with transfers arranged by the place you're staying.",
    periodoMigliore: "dry season (December-April) for calmer seas; the boat crossing can be demanding in wind",
    costi:
      "entry to the Guna territory and island taxes to be paid in cash; 4x4 transfer plus boat 40-60 USD each way; packages with cabaña and meals 60-150 USD per person per night",
    erroriDaEvitare: [
      "Arriving without cash: there are no ATMs or card payments on the islands",
      "Expecting resort comforts: limited electricity, rationed fresh water and almost no wifi are part of the experience",
      "Booking through unauthorized intermediaries: the facilities and transport are run by the Guna community, which regulates access",
    ],
    miaEsperienza:
      "Getting there was the most demanding transfer of the second part: wake-up around five, almost three hours of 4x4 on a mountain road with steep grades to the port of Cartí, then the boat to the islands. It's worth knowing what you're getting into. Guna Yala is a self-governed territory: the Guna run the tourism and the entry fee is paid to them, in cash only, because there are no ATMs or cards on the islands. Our cabaña was basic by choice, run by a Guna family: electricity on a schedule, rationed fresh water, almost no wifi, meals included. We spent the full day on the boat among Isla Perro, with the wreck to snorkel, Isla Aguja, the Cayos Holandeses and the natural pools in the middle of the sea. The rules belong to the community: you ask permission before photographing people and houses, nothing is taken away from the islands and scuba diving is prohibited.",
      "luoghi": [
        {
          "nome": "Isla Perro and the wreck",
          "testo": "A small island with a shipwreck to see while snorkelling.",
          "come": "By boat from the islands where you sleep, on a day tour.",
          "quando": "Morning, with calm sea.",
          "tempo": "1-2 hours",
          "consiglio": "Snorkelling only, no tanks: scuba diving is banned in Guna Yala to protect the reef."
        },
        {
          "nome": "Isla Aguja and Cayos Holandeses",
          "testo": "Islets with palms and white sand, turquoise water and shallow seabeds.",
          "come": "Boat tour among the islands, included in the package.",
          "quando": "Morning, in clear light.",
          "tempo": "Day"
        },
        {
          "nome": "Natural pools in the middle of the sea",
          "testo": "Sandbanks with shallow water, surrounded by open sea.",
          "come": "By boat from the cabaña.",
          "quando": "Morning.",
          "tempo": "Short stop"
        },
        {
          "nome": "Guna villages and molas",
          "testo": "The Guna villages, where you can buy molas, the traditional textiles hand-sewn by the women. Guna Yala is an autonomous comarca, governed by the Guna General Congress and each community's sahila.",
          "come": "Visit from one of the inhabited islands, with the residents' permission.",
          "quando": "Daytime.",
          "tempo": "1-2 hours",
          "consiglio": "Ask permission before photographing people and houses, and take nothing away from the islands."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Pre-dawn departure from Panama City by 4x4 to Cartí",
            "Boat to the islands, snorkelling at Isla Perro",
            "Return towards evening, often too tight for a single day"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: 4x4 to Cartí, boat, night in a cabaña",
            "Day 2: tour among Isla Perro, Isla Aguja, Cayos Holandeses, natural pools, then return"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Cabaña on a Guna island",
          "perChi": "authentic experience",
          "testo": "Basic by choice: electricity on a schedule, rationed fresh water, almost no wifi, meals included, run by a Guna family."
        },
        {
          "nome": "Accommodation on the mainland at Cartí",
          "perChi": "those who want to arrive at dawn",
          "testo": "Less atmospheric, but avoids the night departure."
        }
      ],
      "sapori": [
        {
          "nome": "Grilled fish and lobster",
          "testo": "The Guna catch, often included in meals."
        },
        {
          "nome": "Rice and beans",
          "testo": "The base of every meal, with fried plantain."
        },
        {
          "nome": "Patacones",
          "testo": "Fried plantain, as a side."
        },
        {
          "nome": "Coconut",
          "testo": "Fresh coconut water and pieces of flesh, gathered on the island."
        }
      ],
      "attenzioni": [
        "Entering Guna Yala means paying a fee to the comarca, on top of the port: bring cash, as there are no ATMs on the islands.",
        "The trip from Panama City starts before dawn, with hours of 4x4 on a steep mountain road: if you get carsick, take something.",
        "Community rules: ask permission before photographing people and houses, take nothing from the islands, no scuba."
      ],
    esperienzeSlugs: ['notte-isola-san-blas'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "White sand islet with palm trees and huts in the San Blas archipelago, Panama",
    immagine: '/images/panama/san-blas.jpg',
  },
  {
    slug: 'bocas-del-toro',
    paeseSlug: 'panama',
    ordine: 3,
    nome: 'Bocas del Toro',
    tipologia: ['mare', 'isole', 'nightlife'],
    giorniConsigliati: '3-5 days',
    visitataPersonalmente: true,
    introduzione:
      "A Caribbean archipelago on the border with Costa Rica, with stilt houses, surfing, snorkeling and the liveliest nightlife in the country.",
    percheAndarci:
      "It's the place where Panama becomes Caribbean in atmosphere too: livelier and less basic than San Blas, with very different islands a few minutes apart by boat.",
    cosaVedere: [
      'Isla Colón, with Bocas Town and its colorful wooden buildings',
      'Starfish Beach, the beach of the sea stars',
      'Isla Bastimentos and the marine national park, with Red Frog Beach',
      'Cayo Zapatilla, often the most beautiful stop on the boat tours',
      'Cayo Coral, for snorkeling in shallow water',
    ],
    cosaFare: [
      'Day boat tour among the islets, with snorkeling stops and dolphin sightings',
      'Surf lesson at Playa Bluff or Paunch',
      'Kayak ride through the mangroves',
      'An evening in Bocas Town, among bars on the water and parties on the islands',
    ],
    doveDormire: "Bocas Town on Isla Colón for services and nightlife; Bastimentos or Carenero for quiet and lodging on the water.",
    doveMangiare:
      "Bocas is the place in Panama where you eat Caribbean: fish and chicken in coconut sauce, rice and beans cooked in coconut milk instead of water, patacones everywhere. The archipelago's Afro-Caribbean heritage shows in the cooking more than elsewhere in the country. In Bocas Town the restaurants on the water cost double the stalls two streets away, where you eat the same fish; the morning market is the cheapest option. Ice-cold local beer is almost the official drink of the island.",
    comeArrivare:
      "Domestic flight from Panama City to Bocas del Toro (about 1 hour) or overnight bus to Almirante and a water taxi (about 30 minutes). Many also arrive overland from Costa Rica, from the Sixaola border.",
    comeSpostarsi: "Water taxis between the islands (a few dollars each way), bicycles and taxis on Isla Colón.",
    periodoMigliore:
      "it has a different microclimate from the rest of the country: September-October and February-March are often the sunniest periods, while here the Panamanian \"dry season\" doesn't always line up",
    costi: "day boat tour 25-40 USD per person plus national park fees; domestic flight 100-150 USD each way",
    erroriDaEvitare: [
      "Taking the national dry season for granted: here the weather follows a different cycle from the rest of Panama",
      "Planning the boat tour without allowing for rough seas, which can cancel outings to the outer cayos",
    ],
    miaEsperienza:
      "From Boquete we got to Bocas overland as far as Almirante and then by water taxi, and it was the opposite of San Blas: stilt houses, a much more social and noisy atmosphere, hostels and people who almost always stay longer than planned. The next day we did the boat tour among the islets: Cayo Zapatilla, often the most beautiful point of the whole tour, and Starfish Beach, which lives up to its name with sea stars in water barely over three feet deep, plus a snorkeling stop at Cayo Coral. Outings to the outer cayos get canceled in rough seas, and that's something to allow for. Two practical warnings: here the weather follows its own microclimate and not the dry season of the rest of Panama, and the sands are infested with chitres, sand flies that bite without you feeling it and leave marks for days. In the evening, in Bocas Town, live music and parties that often move by boat to the nearby islands.",
      "luoghi": [
        {
          "nome": "Isla Colón and Bocas Town",
          "testo": "The main town of the archipelago, with colourful wooden houses on stilts, hostels and nightlife.",
          "come": "Arrive by water taxi from Almirante or by plane from Panama City.",
          "quando": "Evening, for live music and parties.",
          "tempo": "Half a day"
        },
        {
          "nome": "Cayo Zapatilla",
          "testo": "The uninhabited islets of Cayos Zapatilla, inside Isla Bastimentos National Marine Park, created in 1988, with white sand and forest. Often the best stop on boat tours.",
          "come": "With a boat tour from Bocas Town; park entry extra.",
          "quando": "Morning, with calm sea.",
          "tempo": "Half a day",
          "consiglio": "Trips to the outer cayos are cancelled in rough sea: factor this in."
        },
        {
          "nome": "Starfish Beach",
          "testo": "The starfish beach: you see them in shallow water near the shore, and the name keeps its promise.",
          "come": "Stop on boat tours or by water taxi.",
          "quando": "Morning.",
          "tempo": "Short stop",
          "consiglio": "Do not touch or take the starfish out of the water."
        },
        {
          "nome": "Cayo Coral and Isla Bastimentos",
          "testo": "Snorkelling in shallow water at Cayo Coral. Isla Bastimentos has the national marine park and Red Frog Beach, reached by water taxi.",
          "come": "Boat tour from Bocas Town.",
          "quando": "Morning.",
          "tempo": "Half a day"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: boat tour to Cayo Zapatilla, Starfish Beach, Cayo Coral",
            "Afternoon: rest in Bocas Town",
            "Evening: live music"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: tour of the cayos",
            "Day 2: Red Frog Beach on Bastimentos and an evening boat ride to nearby islands"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Bocas Town",
          "perChi": "social life",
          "testo": "Hostels, bars and restaurants, noisy. People who almost always stay longer than planned."
        },
        {
          "nome": "Bastimentos and Carenero",
          "perChi": "quiet",
          "testo": "Few services, more nature and silence."
        }
      ],
      "sapori": [
        {
          "nome": "Coconut fish",
          "testo": "Caribbean dish with coconut milk and fish."
        },
        {
          "nome": "Rondón",
          "testo": "Fish, plantain and yuca stew in coconut milk."
        },
        {
          "nome": "Patacones",
          "testo": "Fried plantain with ceviche or cheese."
        },
        {
          "nome": "Seafood",
          "testo": "Crabs and lobster, in season and in seaside restaurants."
        }
      ],
      "attenzioni": [
        "Bocas has its own microclimate and rains, not the dry season of the rest of Panama.",
        "Chitras, sandflies that bite without you noticing and leave marks for days, infest the beaches: repellent.",
        "Trips to the outer cayos are cancelled when the sea is rough."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "Colorful little stilt houses and a wooden pier over the water at Bocas del Toro, Panama",
    immagine: '/images/panama/bocas-del-toro.jpg',
  },
  {
    slug: 'boquete',
    paeseSlug: 'panama',
    ordine: 4,
    nome: 'Boquete and the Highlands',
    tipologia: ['natura', 'trekking'],
    giorniConsigliati: '2-4 days',
    visitataPersonalmente: true,
    introduzione:
      "Highland Panama, in the province of Chiriquí: cool climate, some of the best coffee plantations in the world, cloud forests and Volcán Barú, the highest point in the country.",
    percheAndarci:
      "It's the only place in the world from which, on the right day, you can see the Pacific Ocean and the Caribbean Sea together. And it's the cool counterweight to the Caribbean islands.",
    cosaVedere: [
      'Volcán Barú (3,475 m), with the night climb for sunrise over the two oceans',
      'The Sendero Los Quetzales, among the best places in the world to spot the quetzal',
      'The coffee plantations of the area, including those that produce the prized Geisha',
      'The Lost Waterfalls and the Caldera Hot Springs',
    ],
    cosaFare: [
      "Night climb of Volcán Barú for sunrise (there's a dedicated experience page)",
      'Tour of a coffee finca with tasting',
      'Birdwatching on the Sendero Los Quetzales, best with a local guide',
      'Rafting on the Rio Chiriquí Viejo',
    ],
    doveDormire: "Boquete town for services; lodges on the surrounding hills for greenery and views of the valley.",
    doveMangiare:
      "In Boquete you drink the best coffee of the trip: the area produces Geisha, which sets world price records at auctions, and in the town's cafés you taste it for a fraction of what it costs elsewhere. For a mountain town the food scene is surprisingly international, because of the community of North American retirees who live there; to eat Panamanian you need the local fondas, with sancocho and carne guisada. At the farmers' market you find strawberries and highland vegetables, rare in the rest of the country.",
    comeArrivare:
      "Domestic flight from Panama City to David (about 1 hour), then 40 minutes by car or bus to Boquete; alternatively an overnight bus from the capital (6-7 hours).",
    comeSpostarsi: "Frequent local buses between David and Boquete; a rental car is handy for the fincas and trails outside town.",
    periodoMigliore:
      "December-April for the Barú climb with clear skies; the bajareque, the fine drizzle typical of the area, can appear in any season",
    costi: "entry to Volcán Barú park a few dollars; guided climb 50-90 USD per person; coffee tour 30-40 USD",
    erroriDaEvitare: [
      "Climbing Barú without winter clothing: you reach the summit before dawn, with wind and temperatures near freezing",
      "Expecting the view of the two oceans to be guaranteed: it only happens with a clear sky, typically in the dry months",
    ],
    miaEsperienza:
      "We got there from San Blas via Panama City and the flight to David, and after the humid heat of the islands Boquete was a physical relief: you sleep with the window open and no fan, something that almost never happens in the rest of the trip. We did the tour of a coffee finca with tasting, and this is where you taste Geisha for a fraction of what it costs elsewhere. The next night we set out around midnight for Barú: eight miles (thirteen kilometers) of dirt track each way, in the dark, with the cold increasing, to reach the 3,475-meter summit before dawn. The view of the two oceans together only comes with a completely clear sky, that is on a few good days even in the dry season; even without that luck, the night climb with the valleys lit up below is worth the effort. By late morning we were back in Boquete.",
      "luoghi": [
        {
          "nome": "Barú volcano",
          "testo": "The volcano of Chiriquí and the highest peak in Panama (3,475 m), from where on a clear day you see the Pacific and the Caribbean together, which happens rarely. Night climb for sunrise.",
          "come": "Start around midnight, on foot with a guide on a long, steep trail, or with 4x4 tours to the top.",
          "quando": "Sunrise, with completely clear skies, which means few good days even in the dry season.",
          "tempo": "Night-morning",
          "consiglio": "Without the view of two oceans, the night climb with the lit valleys below is still worth the effort. Bring warm layers."
        },
        {
          "nome": "Sendero Los Quetzales",
          "testo": "A trail in Barú park, in the cloud forest between Boquete and Cerro Punta, on the flank of the volcano. It is a good place to look for the quetzal.",
          "come": "A trail of a few hours, with a guide or independently.",
          "quando": "Early morning, when birds are most active. The trail sometimes closes for bad weather or fallen trees (reopened in November 2025): check with MiAmbiente.",
          "tempo": "About 6 hours",
          "url": "https://miambiente.gob.pa/"
        },
        {
          "nome": "Coffee finca tour",
          "testo": "A visit to a plantation with tasting, including Geisha, Boquete's prized coffee, at a fraction of the price elsewhere.",
          "come": "Half-day tour bookable in town.",
          "quando": "Morning.",
          "tempo": "2-3 hours",
          "consiglio": "Geisha can be tasted here at a fraction of what it costs elsewhere."
        },
        {
          "nome": "Lost Waterfalls",
          "testo": "A trail in the cloud forest of Los Naranjos, near Boquete, linking three waterfalls, each reached by a short detour.",
          "come": "By car or taxi from Boquete to the entrance; a trail of about 3.2 km, of moderate difficulty.",
          "quando": "By day, best in the morning.",
          "tempo": "Half a day",
          "url": "https://www.tourismpanama.com/blog/post/trails-and-waterfalls-to-enjoy-in-boquete/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Coffee finca tour with tasting",
            "Afternoon: Lost Waterfalls or a stroll around town"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: coffee and rest (Boquete is cool)",
            "Day 2: Sendero Los Quetzales in the morning, night climb of Barú"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Day 1: coffee",
            "Day 2: Sendero Los Quetzales",
            "Day 3: Barú at dawn, then rest"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Boquete",
          "perChi": "services and life",
          "testo": "Restaurants, tours, hotels; cooler than the rest of Panama, you sleep with the window open."
        },
        {
          "nome": "Surroundings and fincas",
          "perChi": "nature and quiet",
          "testo": "Lodges among coffee and forest, far from services."
        }
      ],
      "sapori": [
        {
          "nome": "Geisha coffee",
          "testo": "The prized coffee of the area, to taste at a finca or in a Boquete café."
        },
        {
          "nome": "Sancocho",
          "testo": "Chicken soup with yuca and coriander."
        },
        {
          "nome": "Trout",
          "testo": "Farmed in highland rivers, in restaurants of the area."
        },
        {
          "nome": "Strawberries and highland vegetables",
          "testo": "Products of the Boquete markets."
        }
      ],
      "attenzioni": [
        "Barú is climbed at night: warm layers, torch and guide. Panama's mountain trails are poorly marked, phones often have no signal and hikers have gone missing: never alone.",
        "The view of two oceans from the summit is only possible with fully clear skies, on few good days.",
        "Rain and fog can change plans: keep a day in hand."
      ],
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "Rainbow over the green hills around Boquete, in the Chiriquí highlands, Panama",
    immagine: '/images/panama/boquete.jpg',
  },
]
