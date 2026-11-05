import type { Destinazione } from '@/lib/types'

export const destinazioniTanzania: Destinazione[] = [
  {
    slug: 'serengeti',
    paeseSlug: 'tanzania',
    ordine: 1,
    nome: 'Serengeti',
    tipologia: ['safari', 'parco nazionale', 'fauna'],
    giorniConsigliati: '2-3 days, ideally with at least two nights inside the park',
    visitataPersonalmente: true,
    introduzione:
      "The great plain of northern Tanzania, a UNESCO World Heritage Site: open savanna, granite kopjes, big cats and, depending on the season, the herds of the Great Migration.",
    percheAndarci:
      "It's the park where the very idea of a safari comes from: huge open spaces, lions, cheetahs and leopards, and millions of wildebeest and zebras moving with the rains.",
    cosaVedere: [
      'The Seronera Valley, in the center of the park, the easiest area for big cats',
      'The kopjes, the granite outcrops where lions rest',
      'The southern plains toward Ndutu during the wildebeest calving season',
      'The Mara River, in the north, during the migration crossings',
    ],
    cosaFare: [
      'Game drives at dawn and in the late afternoon, when animals are most active',
      'Sleeping in a tent inside the park (see the dedicated experience page)',
      'Following the Great Migration in the right area for the month (see the dedicated experience page)',
      'A hot air balloon safari at dawn, if you want to see the plain from above',
    ],
    doveDormire:
      "Inside the park there's everything: public campsites with camping tents, permanent tented camps with real beds and bathrooms, lodges and luxury camps. Sleeping inside the Serengeti rather than outside saves hours on the road and puts you on the tracks right at dawn. Suricata Safaris runs the circuit in all three styles (camping, mid-range and luxury).",
    comeArrivare:
      "From Arusha by 4x4, usually via Tarangire or Ngorongoro: it's a long day on the road. Alternatively, a domestic flight from Arusha to one of the park's airstrips.",
    comeSpostarsi: "By 4x4 with a driver-guide: you can't walk on your own inside the park.",
    periodoMigliore:
      'June to October (dry season, migration in the north from July); December to March in the south, for the calving',
    costi:
      "Entry about $83 per person every 24 hours in high season and $71 in low season, VAT included, plus the overnight fee at camps and lodges (about $59-71 per night); at public campsites about $35 (approximate, check with your operator).",
    erroriDaEvitare: [
      "Going to the wrong area for the month: the migration moves, and in summer there are no wildebeest in the south of the park",
      'Planning a single day: between getting there and back you spend more time in the car than watching animals',
      'Forgetting warm layers for the dawn game drives, which are cold on an open 4x4',
    ],
    miaEsperienza:
      "I did my safari with Suricata Safaris: they're top, they have accommodation for every taste and also the tent experiences, which I recommend. I like traveling rough and close to nature, even if a 5-star stay now and then is fine too.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Seronera Valley",
        "testo": "The centre of the park, one of the best areas for big cats: lions, leopards in the acacias and cheetahs on the plains. The kopjes, the granite outcrops, are where lions rest.",
        "come": "Game drive in a 4x4 with a guide, from the lodge or camp. You do not leave the vehicle outside permitted spots.",
        "quando": "The park is open all year and the gates close at 6pm (TANAPA). Animals are most active at dawn and in the late afternoon.",
        "tempo": "1 day or more",
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "I did my safari with Suricata Safaris, which also has tent experiences inside the park: I recommend them.",
        "costo": "TANAPA entry fee for foreign visitors: current prices on the official site; ask your operator whether the quote includes taxes and VAT"
      },
      {
        "nome": "Southern plains and Ndutu",
        "testo": "The area where wildebeest calves are born, with predators following them. According to TANAPA the calving season is mainly January to February.",
        "come": "From Seronera or Ngorongoro by 4x4, with a guide.",
        "quando": "Mainly January and February.",
        "tempo": "1-2 days",
        "url": "https://www.tanzaniaparks.go.tz/serengeti"
      },
      {
        "nome": "Mara River and the migration",
        "testo": "In the north of the park, during the dry season, wildebeest and zebra crossing the Mara River, with crocodiles waiting.",
        "come": "From Seronera by 4x4, many hours of driving; many camps are fixed in the north.",
        "quando": "Dry season: TANAPA gives June-October for the migration. The exact timing of the crossings changes every year.",
        "tempo": "1-2 days",
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "Ask the operator where the migration is in the month of travel: it changes every year."
      },
      {
        "nome": "Hot-air balloon at dawn",
        "testo": "A flight over the plains at sunrise, usually followed by breakfast in the bush.",
        "come": "Book with an operator, leaving the camp before dawn.",
        "quando": "Dawn.",
        "tempo": "3-4 hours"
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: game drive in Seronera, sunset with the lions",
          "Day 2: dawn balloon or game drive, departure"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: north or south depending on the month, following the migration"
        ]
      }
    ],
    zone: [
      {
        "nome": "Tented camps",
        "perChi": "those who want the truest safari",
        "testo": "Tents with beds and bathroom, in the middle of the savanna. You hear the animals at night."
      },
      {
        "nome": "Lodges",
        "perChi": "those who want more comfort",
        "testo": "Real rooms and a pool, often with panoramic views."
      },
      {
        "nome": "Public campsite",
        "perChi": "those who want to spend less",
        "testo": "The cheapest, with basic facilities."
      }
    ],
    sapori: [
      {
        "nome": "Ugali",
        "testo": "Maize porridge, goes with meat and stews."
      },
      {
        "nome": "Nyama choma",
        "testo": "Grilled meat, goat or beef."
      },
      {
        "nome": "Pilau",
        "testo": "Spiced rice with meat."
      },
      {
        "nome": "Chai and Tanzanian coffee",
        "testo": "Served everywhere, even in the bush."
      }
    ],
    attenzioni: [
      "Going to the wrong area for the month: the migration moves, and the south is the calving area early in the year.",
      "Planning a single day: between going and coming back you spend more time in the car than watching animals.",
      "Forgetting warm layers for dawn game drives, cold on the open 4x4.",
      "Choosing an unlicensed operator: check registration and reviews.",
      "TANAPA park fees are charged per person and are usually already in the operator's price: ask for them to be listed separately in the quote."
    ],
    // GUIDA-END
    esperienzeSlugs: ['safari-in-tenda', 'grande-migrazione'],
    tripSlugs: [],
    imageAlt: 'A lone acacia in the Serengeti savanna at sunset, with hills on the horizon',
    immagine: '/images/tanzania/serengeti-savana.jpg',
  },
  {
    slug: 'ngorongoro',
    paeseSlug: 'tanzania',
    ordine: 2,
    nome: 'Ngorongoro Crater',
    tipologia: ['safari', 'fauna', 'unesco'],
    giorniConsigliati: '1 day in the crater, with the night on the rim',
    visitataPersonalmente: true,
    introduzione:
      "An intact volcanic caldera with a flat floor full of animals: grazers, lions, hippos and the rare black rhino. It's the heart of the Ngorongoro Conservation Area, a UNESCO World Heritage Site, where the Maasai still live with their herds.",
    percheAndarci:
      "In a few hours and in an enclosed space you see a huge number of animals, black rhino included, with the crater walls all around.",
    cosaVedere: [
      'The crater floor, with its salt lake and swamps',
      'The black rhinos, which are easier to spot here than elsewhere in the north',
      'The view from the crater rim',
      "Olduvai Gorge, a paleontological site inside the protected area, on the way to the Serengeti",
    ],
    cosaFare: [
      'A game drive on the crater floor (see the dedicated experience page)',
      'A visit to a Maasai village (cultural boma)',
    ],
    doveDormire:
      "Lodges and campsites on the crater rim, at about 2,300 meters: it gets really cold at night. It's cheaper to sleep in Karatu, outside the protected area, and drive up early in the morning.",
    comeArrivare: 'From Arusha by 4x4, via Karatu; it\'s also the stop on the way between Arusha and the Serengeti.',
    comeSpostarsi: 'By 4x4 with a driver-guide, going down and back up on dedicated tracks.',
    periodoMigliore: 'all year; in the dry season the grass is short and animals are easier to see',
    costi:
      "Official NCAA rates for non-resident visitors from outside East Africa: entry $70.80 per person every 24 hours ($23.60 for children aged 5 to 15), plus $295 per vehicle for each descent into the crater and the 4x4 permit.",
    erroriDaEvitare: [
      'Going down mid-morning: the first vehicles enter at dawn and find the crater emptier',
      'Underestimating the cold on the rim, in the evening and early morning',
      'Budgeting the safari without the crater fee, which is charged per vehicle and so weighs more on small groups',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Crater floor",
        "testo": "The floor of an unbroken volcanic caldera of about 260 km², around 610 metres deep, with the salt lake Magadi and swamps. Lions, elephants, hippos and a small population of black rhinos live here.",
        "come": "You drive down a steep road in a 4x4 with a guide. Each descent pays a per-vehicle fee.",
        "quando": "Dawn: the first vehicles enter early and find the crater emptier.",
        "tempo": "Half a day",
        "costo": "USD 70.80 per person per 24 hours for non-residents aged 16+ (USD 23.60 aged 5-15), plus USD 295 per vehicle for each crater descent (NCAA tariffs, 2026)",
        "url": "https://www.ncaa.go.tz/tariffs/",
        "consiglio": "The crater fee is per vehicle: it weighs more on small groups."
      },
      {
        "nome": "Olduvai Gorge",
        "testo": "The paleoanthropological site on the plains of the Conservation Area, outside the crater, where Homo habilis remains were found. There is a museum with explanations.",
        "come": "On the road between the crater and the Serengeti.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "url": "https://www.ncaa.go.tz/tariffs/",
        "costo": "USD 35.40 per person aged 16+, together with Shifting Sand (NCAA tariff, 2026)"
      },
      {
        "nome": "Maasai boma",
        "testo": "A visit to a Maasai village, with dances, mud houses and explanations of the herders' life.",
        "come": "With the operator, on the road around the crater.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "Ask in advance what is included and how much goes to the villages.",
        "costo": "Entry to the cultural bomas USD 20 per vehicle (NCAA tariff, 2026), plus what the village asks"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Dawn: descent into the crater",
          "Lunch on the floor at the picnic area",
          "Afternoon: climb out, boma or Olduvai visit"
        ]
      }
    ],
    zone: [
      {
        "nome": "Crater rim",
        "perChi": "those who want the view and the dawn",
        "testo": "Lodges and camps on the rim, with views over the caldera. Cold in the evening."
      },
      {
        "nome": "Karatu",
        "perChi": "those who want to spend less",
        "testo": "A small town near the crater gate, with budget lodges."
      }
    ],
    sapori: [
      {
        "nome": "Ugali and stews",
        "testo": "Maize and meat dishes, in the lodges."
      },
      {
        "nome": "Pilau",
        "testo": "Spiced rice."
      },
      {
        "nome": "Mtori",
        "testo": "Green banana and meat soup, typical of the north."
      },
      {
        "nome": "Chai",
        "testo": "Spiced tea with milk."
      }
    ],
    attenzioni: [
      "Descending mid-morning: the first vehicles enter at dawn and find the crater emptier.",
      "Underestimating the cold on the rim, in the evening and early morning.",
      "Budgeting the safari without the crater fee, which is paid per vehicle.",
      "Visits to Maasai villages: pick operators who share revenue with them."
    ],
    // GUIDA-END
    esperienzeSlugs: ['cratere-ngorongoro'],
    tripSlugs: [],
    imageAlt: 'The floor of Ngorongoro Crater seen from the rim, with the lake and the caldera walls',
    immagine: '/images/tanzania/ngorongoro-cratere.jpg',
  },
  {
    slug: 'tarangire-manyara',
    paeseSlug: 'tanzania',
    ordine: 3,
    nome: 'Tarangire and Lake Manyara',
    tipologia: ['safari', 'parco nazionale', 'natura'],
    giorniConsigliati: '1 day each, often at the start or end of the circuit',
    visitataPersonalmente: true,
    introduzione:
      "Two parks close to Arusha and very different from each other: Tarangire, with giant baobabs and herds of elephants along the river, and Lake Manyara, squeezed between the Rift Valley escarpment and the lake, with forest, flamingos and baboons.",
    percheAndarci:
      "They're the easiest stops to start a safari and, in the dry season, Tarangire has one of the highest concentrations of elephants in Tanzania.",
    cosaVedere: [
      'The baobabs and elephants along the Tarangire River',
      'The forest and the shore of Lake Manyara, with flamingos when the water level allows',
      'The Rift Valley escarpment above Manyara',
    ],
    cosaFare: [
      'A game drive in Tarangire, best in the dry season',
      'A drive through Lake Manyara National Park, which works well in half a day',
      'A visit to the village of Mto wa Mbu, at the entrance to Manyara',
    ],
    doveDormire:
      'Camps and lodges just outside or inside Tarangire; for Manyara you stay in Mto wa Mbu or Karatu, which is also the base for Ngorongoro.',
    comeArrivare: 'From Arusha by 4x4: they are the two parks of the northern circuit closest to the city.',
    comeSpostarsi: 'By 4x4 with a driver-guide.',
    periodoMigliore: 'June to October, when animals gather around the water',
    costi: 'Approximate entry of about $50-60 per person every 24 hours for each park (TANAPA rates as reported by operators, to be checked).',
    erroriDaEvitare: [
      'Skipping Tarangire to rush to the Serengeti: in the dry season it\'s worth the trip on its own',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Tarangire National Park",
        "testo": "Baobabs, thousands of elephants, the densest population in Tanzania according to TANAPA, and wildlife gathering along the river in the dry season.",
        "come": "Game drive in a 4x4 with a guide.",
        "quando": "Dry season, when animals gather around water. Gates close at 6pm.",
        "tempo": "1 day",
        "url": "https://www.tanzaniaparks.go.tz/tarangire",
        "consiglio": "In the dry season it is worth the trip on its own: do not skip it to rush to the Serengeti.",
        "costo": "TANAPA entry fee for foreign visitors: current prices on the official site; ask your operator whether the quote includes taxes and VAT"
      },
      {
        "nome": "Lake Manyara",
        "testo": "A groundwater forest with mahogany, figs and blue monkeys, a canopy walkway, the soda lake with lesser flamingos when the level allows and the Rift Valley escarpment above. It is known for tree-climbing lions.",
        "come": "Half-day game drive.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "url": "https://www.tanzaniaparks.go.tz/lake-manyara",
        "costo": "TANAPA entry fee for foreign visitors: current prices on the official site; ask your operator whether the quote includes taxes and VAT"
      },
      {
        "nome": "Mto wa Mbu",
        "testo": "The town near the Lake Manyara entrance, on the road to Ngorongoro, best explored with a local guide.",
        "come": "On foot or by bike with a local guide.",
        "quando": "Morning.",
        "tempo": "1-2 hours"
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Tarangire",
          "Day 2: Manyara and Mto wa Mbu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lodges in the parks",
        "perChi": "those who want the real safari",
        "testo": "Lodges and camps on the edge of the park."
      },
      {
        "nome": "Karatu / Mto wa Mbu",
        "perChi": "those who want to spend less",
        "testo": "Towns with lodges and campsites."
      }
    ],
    sapori: [
      {
        "nome": "Ugali",
        "testo": "With meat stews."
      },
      {
        "nome": "Fried bananas",
        "testo": "A common snack in the local markets."
      },
      {
        "nome": "Pilau",
        "testo": "Spiced rice."
      },
      {
        "nome": "Chai",
        "testo": "Served everywhere."
      }
    ],
    attenzioni: [
      "Skipping Tarangire to rush to the Serengeti.",
      "Expecting flamingos all year: the water level changes.",
      "Bike ride at Mto wa Mbu: choose local guides."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'A herd of elephants crossing the Tarangire River, with baobabs on the bank',
    immagine: '/images/tanzania/tarangire-elefanti.jpg',
  },
  {
    slug: 'zanzibar',
    paeseSlug: 'tanzania',
    ordine: 4,
    nome: 'Zanzibar',
    tipologia: ['mare', 'spiagge', 'città storica'],
    giorniConsigliati: '4-5 days, after the safari',
    visitataPersonalmente: true,
    introduzione:
      "The main island of the archipelago (Unguja) is the classic beach stop after a safari: Stone Town, the UNESCO-listed old town, and the white beaches of the Indian Ocean, from Nungwi and Kendwa in the north to Paje and Jambiani on the east coast.",
    percheAndarci:
      'To end the trip with some beach days, and for a historic town that mixes Swahili, Arab, Indian and European culture.',
    cosaVedere: [
      'Stone Town, with its carved doors, alleys and waterfront (see the dedicated experience page)',
      'The northern beaches, Nungwi and Kendwa, where the tide is less noticeable',
      'The east coast, Paje and Jambiani, where low tide uncovers the lagoon',
      'Jozani Forest, with the Zanzibar red colobus monkeys',
    ],
    cosaFare: [
      'Snorkeling around Mnemba Atoll',
      'Kitesurfing in Paje',
      'Dinner at the evening market in the Forodhani Gardens in Stone Town',
    ],
    doveDormire:
      'One or two nights in Stone Town for the town, then the beach: the north to swim at any time of day, the east coast for kitesurfing and quieter villages.',
    comeArrivare:
      "Domestic flight from Arusha or Kilimanjaro to Zanzibar airport (ZNZ), or direct international flights; from Dar es Salaam also the fast ferry. On entry you need Zanzibar's mandatory insurance ($44).",
    comeSpostarsi: 'Taxis or pre-arranged transfers between Stone Town and the beaches; in Stone Town you walk.',
    periodoMigliore: 'June to October and December to February, outside the rainy seasons',
    costi: 'Mandatory insurance $44 per person for stays of up to 92 days.',
    erroriDaEvitare: [
      'Choosing the east coast without knowing about the tide: at low tide the sea pulls back hundreds of meters',
      'Walking around Stone Town in swimwear or a tank top: away from the beaches you cover shoulders and knees',
      "Arriving without Zanzibar's insurance already bought online, and queuing at the airport",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Stone Town",
        "testo": "The old town of lanes, carved wooden doors and seafront, UNESCO World Heritage since 2000, where the architecture blends Arab, Persian, Indian and European influences with Swahili culture.",
        "come": "On foot in the alleys, with a guide for the first day.",
        "quando": "Morning and evening.",
        "tempo": "Half a day",
        "consiglio": "Dinner at the evening market in Forodhani Gardens, next to the Old Fort, when fish is grilled after sunset."
      },
      {
        "nome": "Nungwi and Kendwa",
        "testo": "The beaches in the north of the island.",
        "come": "Taxi or dala dala from Stone Town.",
        "quando": "All year.",
        "tempo": "A full day"
      },
      {
        "nome": "Paje and Jambiani",
        "testo": "The east coast, with wide beaches and a shallow lagoon where the tide changes the scene a lot: check the tide times. Kitesurfing at Paje.",
        "come": "By car from Stone Town.",
        "quando": "At high tide for swimming.",
        "tempo": "A full day"
      },
      {
        "nome": "Jozani Forest and Mnemba Atoll",
        "testo": "Jozani Forest, in Jozani-Chwaka Bay National Park, home to the Zanzibar red colobus, an endangered monkey found only on the island; and Mnemba Atoll, famous for snorkelling.",
        "come": "Jozani by car; Mnemba by boat from the northeast.",
        "quando": "Morning.",
        "tempo": "Half a day each"
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Stone Town",
          "Day 2: Jozani forest and the east coast",
          "Day 3: snorkeling at Mnemba or beach in the north"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stone Town",
        "perChi": "those who want culture",
        "testo": "Historic hotels in the old city, without a beach."
      },
      {
        "nome": "North (Nungwi, Kendwa)",
        "perChi": "those who want beaches and nightlife",
        "testo": "Beaches, bars and nightlife."
      },
      {
        "nome": "East (Paje, Jambiani)",
        "perChi": "those who want kitesurf and atmosphere",
        "testo": "Wide beaches, quieter; swimming depends on the tides."
      }
    ],
    sapori: [
      {
        "nome": "Grilled fish",
        "testo": "In restaurants by the sea."
      },
      {
        "nome": "Urojo",
        "testo": "Spiced Zanzibar soup, at the market."
      },
      {
        "nome": "Pilau",
        "testo": "Spiced rice."
      },
      {
        "nome": "Sugarcane juice",
        "testo": "Freshly pressed at kiosks."
      }
    ],
    attenzioni: [
      "Choosing the east coast without checking the tides: at low tide swimming can be difficult.",
      "Walking around Stone Town in swimwear or tank top: away from beaches you cover shoulders and knees.",
      "Arriving without Zanzibar's mandatory insurance (ZIC): buy it online at visitzanzibar.go.tz or on arrival; it covers your whole stay.",
      "Excursion sellers on the beach: compare prices with the hotel."
    ],
    // GUIDA-END
    esperienzeSlugs: ['stone-town'],
    tripSlugs: [],
    imageAlt: 'The white beach of Nungwi, in northern Zanzibar, with turquoise water and houses on the shore',
    immagine: '/images/tanzania/zanzibar-nungwi.jpg',
  },
  {
    slug: 'arusha-kilimanjaro',
    paeseSlug: 'tanzania',
    ordine: 5,
    nome: 'Arusha and Kilimanjaro',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 night before and after the safari; 6-8 days to climb Kilimanjaro',
    visitataPersonalmente: false,
    introduzione:
      "Arusha is the town almost every northern safari starts from, at the foot of Mount Meru; a little further east is Kilimanjaro, Africa's highest mountain, with Moshi as the base for climbers.",
    percheAndarci:
      "It's the logistics hub of the trip: this is where you land, meet your operator and head off to the parks. With more time you can add a trek on Kilimanjaro or Meru.",
    cosaVedere: [
      'Kilimanjaro, which on clear days you can see even from the road',
      'Arusha National Park, at the foot of Mount Meru, for a day on foot or by car',
    ],
    cosaFare: [
      'Climbing Kilimanjaro on one of the classic routes (Machame, Lemosho, Marangu, Rongai)',
      'A 3-4 day trek on Mount Meru',
      'A trip to the Materuni waterfalls and a coffee farm near Moshi',
    ],
    doveDormire: 'Arusha has lodges and hotels in every price range; for Kilimanjaro the base is Moshi.',
    comeArrivare: 'Kilimanjaro International Airport (JRO), between Arusha and Moshi; Arusha Airport (ARK) handles domestic flights.',
    comeSpostarsi: 'Transfer arranged by your operator or taxi; heavy traffic in town at rush hour.',
    periodoMigliore: 'June to October and January to February for Kilimanjaro, outside the rains',
    erroriDaEvitare: [
      'Booking the first safari day on the same day as your long-haul flight: better to spend a night in Arusha',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kilimanjaro",
        "testo": "Africa's highest mountain, 5,895 metres at Uhuru Peak. According to TANAPA the climb to Kibo takes 5 to 8 days depending on the route: among the best known are Machame, Lemosho, Marangu and Rongai. On clear days you see it from the road.",
        "come": "With a licensed operator, with guides and porters.",
        "quando": "Avoid the two rainy seasons, March to May and around November.",
        "tempo": "5-8 days",
        "url": "https://www.tanzaniaparks.go.tz/kilimanjaro",
        "consiglio": "More days mean more acclimatization and a better chance of reaching the top.",
        "costo": "TANAPA entry fee for foreign visitors: current prices on the official site; ask your operator whether the quote includes taxes and VAT"
      },
      {
        "nome": "Arusha National Park",
        "testo": "The park at the foot of Mount Meru (4,566 metres, Tanzania's second-highest peak): the \"Serengeti Ndogo\" grassland with buffalo, zebra and giraffe, the Momella lakes with hippos and water birds, and walks with a ranger.",
        "come": "By car from Arusha; walks with a ranger are arranged at the gate.",
        "quando": "Morning.",
        "tempo": "A full day",
        "url": "https://www.tanzaniaparks.go.tz/arusha",
        "costo": "TANAPA entry fee for foreign visitors: current prices on the official site; ask your operator whether the quote includes taxes and VAT"
      },
      {
        "nome": "Coffee villages near Moshi",
        "testo": "The villages on the slopes of Kilimanjaro around Moshi, with coffee farms and waterfalls to visit with local guides.",
        "come": "By car from Moshi.",
        "quando": "Morning.",
        "tempo": "Half a day"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Arusha National Park",
          "Afternoon: coffee villages near Moshi"
        ]
      }
    ],
    zone: [
      {
        "nome": "Arusha",
        "perChi": "those leaving for safari",
        "testo": "The safari departure city, with hotels and agencies."
      },
      {
        "nome": "Moshi",
        "perChi": "those climbing Kilimanjaro",
        "testo": "A town at the foot of the mountain, with guesthouses."
      }
    ],
    sapori: [
      {
        "nome": "Kilimanjaro coffee",
        "testo": "Grown on the mountain's slopes."
      },
      {
        "nome": "Ugali",
        "testo": "With meat stews."
      },
      {
        "nome": "Nyama choma",
        "testo": "Grilled meat."
      },
      {
        "nome": "Chai",
        "testo": "Spiced tea."
      }
    ],
    attenzioni: [
      "Booking the first safari the same day as the intercontinental flight: better a night in Arusha.",
      "Climbing Kilimanjaro without acclimatization: altitude sickness is common.",
      "Choosing an operator only on price: safety, porters' pay and license matter."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Kilimanjaro above the clouds, with acacias in the foreground',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
