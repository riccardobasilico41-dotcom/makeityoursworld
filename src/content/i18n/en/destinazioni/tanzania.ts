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
      "From Arusha by 4x4, usually via Tarangire or Ngorongoro: it's about 8 hours to Seronera, so the transfer takes a full day with stops. Alternatively, domestic flights from Arusha or Kilimanjaro serve the park's airstrips, Seronera in the center and Kogatende in the north, saving two days on the road.",
    comeSpostarsi: "By 4x4 with a driver-guide: you can't walk on your own inside the park.",
    periodoMigliore:
      'June to October (dry season, migration in the north from July); December to March in the south, for the calving',
    costi:
      "Entry $70 per person per 24 hours in high season (16 May-14 March), about €60, plus 18% VAT; children aged 5-15 $20. Overnight fee $60 a night at lodges and camps from July to September, $30 at public campsites (2026). Budget: about €250-300 per person per day on a group camping safari, fees included. Mid-range: €400-600 in a tented camp or lodge with a private 4x4. High-end: over €900 in luxury camps with domestic flights.",
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
        "testo": "The center of the park and one of the best areas for big cats: lions, leopards in the acacias and cheetahs on the plains. The kopjes, the granite outcrops, are where lions rest. The Seronera River holds water even in the dry season, so there is wildlife here all year.",
        "come": "Game drive in a 4x4 with a guide, from your lodge or camp. You don't get out of the vehicle outside designated spots.",
        "quando": "All year. Animals are most active at dawn and in the late afternoon.",
        "tempo": "1 day or more",
        "costo": "Entry $70 per person per 24 hours in high season (16 May-14 March), about €60, plus 18% VAT; children aged 5-15 $20, about €17 (2026)",
        "orari": "Open every day of the year; gates close at 6 pm.",
        "lat": -2.4361,
        "lng": 34.8211,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti",
        "consiglio": "I did my safari with Suricata Safaris, which also has tent experiences inside the park: I recommend them."
      },
      {
        "nome": "Seronera Visitor Centre",
        "testo": "A small information center built around a kopje, with a trail of panels explaining the Serengeti ecosystem and the migration. Hyraxes and agama lizards are often seen among the rocks, and there is a picnic area.",
        "come": "A few minutes from the main Seronera track; it's the only place in the area where you can walk freely.",
        "quando": "Midday, in the break between the two game drives.",
        "tempo": "1 hour",
        "lat": -2.4462,
        "lng": 34.8184
      },
      {
        "nome": "Gol Kopjes",
        "testo": "A cluster of kopjes on the short-grass eastern plains, one of the best areas for cheetahs. In the rainy season the migration herds graze all around here.",
        "come": "By 4x4 with a guide, off the road between Naabi Hill Gate and Seronera. Access is regulated and the vehicle pays a separate permit.",
        "quando": "December to March, when the plains are green.",
        "tempo": "Half a day",
        "costo": "Gol Kopjes vehicle permit $10, about €9, on top of park entry (2026)",
        "lat": -2.768,
        "lng": 35.0909,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti"
      },
      {
        "nome": "Moru Kopjes",
        "testo": "Larger, more dramatic kopjes southwest of Seronera, with Gong Rock, a boulder that rings when struck, and old Maasai rock paintings. It's one of the few parts of the park where black rhinos are sometimes seen.",
        "come": "By 4x4 with a guide, about an hour southwest of Seronera.",
        "quando": "All year; from December to May the herds pass through too.",
        "tempo": "Half a day"
      },
      {
        "nome": "Southern plains and Ndutu",
        "testo": "The area where wildebeest calves are born, with predators following them. According to TANAPA the calving season is mainly in January and February. Lake Ndutu already lies inside the Ngorongoro Conservation Area, which has its own fees.",
        "come": "From Seronera or Ngorongoro by 4x4, with a guide; many seasonal camps move here from December to March.",
        "quando": "Mainly January and February.",
        "tempo": "1-2 days",
        "lat": -3.0033,
        "lng": 34.997,
        "url": "https://www.tanzaniaparks.go.tz/serengeti"
      },
      {
        "nome": "Western Corridor and Grumeti River",
        "testo": "The long tongue of park running toward Lake Victoria, crossed by the Grumeti River. The herds usually cross it between May and July, and the river is home to huge crocodiles.",
        "come": "By 4x4 from Seronera, 2-3 hours west; camps in the area also have airstrips.",
        "quando": "May to July for the migration.",
        "tempo": "1-2 days",
        "lat": -2.0846,
        "lng": 33.8001
      },
      {
        "nome": "Lobo and the northeast",
        "testo": "Hills and kopjes in the northeastern part of the park, far less busy than the center. In the dry season the herds pass through on their way to Kenya or back.",
        "come": "By 4x4 from Seronera, about 3 hours north.",
        "quando": "August to November.",
        "tempo": "1 day",
        "lat": -1.937,
        "lng": 35.1271
      },
      {
        "nome": "Mara River and the migration",
        "testo": "In the north of the park, during the dry season, wildebeest and zebras cross the Mara River while crocodiles wait. The reference point is Kogatende, which has an airstrip.",
        "come": "From Seronera by 4x4, many hours on the road; many people fly into Kogatende and stay at the permanent camps in the north.",
        "quando": "Dry season: TANAPA gives June-October for the migration. The exact timing of the crossings changes every year.",
        "tempo": "1-2 days",
        "lat": -1.7038,
        "lng": 35.0033,
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "Ask your operator where the migration is in the month you travel: it changes every year."
      },
      {
        "nome": "Hot-air balloon at dawn",
        "testo": "About an hour's flight over the plain at sunrise, usually followed by breakfast in the bush. Flights mostly go over Seronera and, in season, over the southern plains and the north.",
        "come": "Booked with a licensed operator, leaving camp before dawn.",
        "quando": "Dawn.",
        "tempo": "3-4 hours",
        "costo": "The flight is paid to the operator; the park charges a $50 fee per person, about €43 (2026)"
      },
      {
        "nome": "Walking safari with a ranger",
        "testo": "Walks led by an armed ranger that show the savanna up close: tracks, plants, insects and small animals you miss from the vehicle.",
        "come": "Arranged through your operator or at park headquarters; a ranger and permit are required.",
        "quando": "Early morning, before the heat.",
        "tempo": "1-4 hours",
        "costo": "$20 per person for walks up to 4 hours, about €17; $25 for longer walks, about €22 (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Flight from Arusha to a Seronera airstrip",
          "Game drive in the Seronera Valley and around the kopjes",
          "Return flight in the afternoon, or a night in the park"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: enter at Naabi Hill, Gol Kopjes, afternoon at Seronera and sunset with the lions",
          "Day 2: dawn balloon or game drive, visitor centre, departure"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Naabi Hill, Gol Kopjes and Seronera",
          "Day 2: Seronera at dawn and Moru Kopjes",
          "Day 3: north or south depending on the month, following the migration"
        ]
      }
    ],
    zone: [
      {
        "nome": "Seronera (center)",
        "perChi": "short stays focused on big cats",
        "testo": "The area with the most lodges, tented camps and public campsites, and wildlife all year. In high season it's also the busiest. Staying inside the park means a per-person overnight fee: $60 a night at lodges and camps from July to September, $30 at public campsites (about €52 and €26, 2026)."
      },
      {
        "nome": "South and Ndutu",
        "perChi": "trips from December to March",
        "testo": "Seasonal tented camps close to the herds and the calving season. Out of season the area empties."
      },
      {
        "nome": "North and Kogatende",
        "perChi": "anyone after the Mara crossings",
        "testo": "Permanent and seasonal camps along the Mara River, far from everything: most people fly in."
      },
      {
        "nome": "Western Corridor",
        "perChi": "May to July trips with fewer vehicles",
        "testo": "Lodges and camps toward the Grumeti River and the private reserves next to it."
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
    gite: [
      {
        "nome": "Olduvai Gorge",
        "distanza": "about 1 hour's drive from Naabi Hill Gate",
        "come": "By 4x4, on the road between the Serengeti and the Ngorongoro Crater.",
        "testo": "The site where the remains of Homo habilis were found, with a museum overlooking the gorge. It's the natural stop on the transfer."
      },
      {
        "nome": "Ngorongoro Crater",
        "distanza": "about 3 hours' drive from Seronera",
        "come": "By 4x4 with a guide, usually staying on the crater rim or in Karatu.",
        "testo": "The caldera full of wildlife, black rhinos included: almost everyone combines it with the Serengeti, on the way in or out."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in the Serengeti?",
        "risposta": "At least two nights inside the park. With a single day you spend more time on the road than watching animals; with three you can follow the migration in the right area for the month."
      },
      {
        "domanda": "How much is the Serengeti entry fee in 2026?",
        "risposta": "$70 per person per 24 hours in high season (16 May-14 March), plus 18% VAT, and $20 for children aged 5-15. An overnight fee is added if you sleep inside the park."
      },
      {
        "domanda": "What is the best month for the Great Migration?",
        "risposta": "It depends on what you want to see: calving in the south in January and February, the Western Corridor between May and July, the Mara crossings from July to October. Dates shift every year with the rains."
      },
      {
        "domanda": "Can you do the Serengeti on your own?",
        "risposta": "You can enter with your own 4x4, but nearly all visitors go with an operator and a driver-guide. Inside the park you don't walk without a ranger or get out of the vehicle outside designated spots."
      },
      {
        "domanda": "Tented camp or lodge?",
        "risposta": "A tented camp lets you hear the savanna at night and is often closer to the wildlife; a lodge has proper rooms and a pool. Seasonal camps move with the migration, lodges don't."
      },
      {
        "domanda": "Is it cold on game drives?",
        "risposta": "At dawn, yes, especially from June to August and in an open vehicle. Bring a fleece or a light down jacket, which comes off by mid-morning."
      }
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
      "Lodges and campsites on the crater rim, at about 2,300 meters: it gets very cold at night. It's cheaper to sleep in Karatu, outside the protected area, and drive up early in the morning.",
    comeArrivare:
      "From Arusha by 4x4, about 3-4 hours on a paved road via Mto wa Mbu and Karatu to Lodoare Gate. It's also the stop between Arusha and the Serengeti: the road to Naabi Hill crosses the conservation area, so the entry fee is due even just passing through. Those arriving by air usually land at Manyara or Arusha and continue by car.",
    comeSpostarsi: 'By 4x4 with a driver-guide, going down and back up on dedicated tracks.',
    periodoMigliore: 'all year; in the dry season the grass is short and animals are easier to see',
    costi:
      "Official NCAA fees for non-residents from outside East Africa: entry $70.80 per person per 24 hours, about €61 ($23.60 for children aged 5-15), plus $295 per vehicle for each crater descent and the 4x4 permit; overnight fee $59 a night at lodges (2026). Budget: about €250-300 per person per day on a camping safari with a night in Karatu. Mid-range: €400-550 with a lodge on the rim or in Karatu and a private 4x4. High-end: over €900 at luxury rim lodges.",
    erroriDaEvitare: [
      'Going down mid-morning: the first vehicles enter at dawn and find the crater emptier',
      'Underestimating the cold on the rim, in the evening and early morning',
      'Budgeting the safari without the crater fee, which is charged per vehicle and so weighs more on small groups',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Crater floor and Lake Magadi",
        "testo": "The floor of an intact volcanic caldera of about 260 km², some 610 meters deep, with the salt lake Magadi and swamps. It's home to lions, elephants, hippos and a small population of black rhinos; when there's water, flamingos gather on the lake.",
        "come": "You drive down a steep road in a 4x4 with a guide. Each descent pays a per-vehicle fee.",
        "quando": "Dawn: the first vehicles enter early and find the crater emptier.",
        "tempo": "Half a day",
        "costo": "$70.80 per person per 24 hours for non-residents aged 16+, about €61 ($23.60 for ages 5-15), plus $295 per vehicle for each crater descent, about €254 (2026)",
        "orari": "Every day: conservation area gates 6 am-6 pm, crater access 6 am-4 pm.",
        "lat": -3.1936,
        "lng": 35.5404,
        "url": "https://www.ncaa.go.tz/tariffs/",
        "consiglio": "The crater fee is per vehicle: it weighs more on small groups."
      },
      {
        "nome": "Lerai Forest",
        "testo": "A grove of yellow-barked acacias on the crater floor, fed by springs running down the walls. It's where bull elephants spend the hot hours and where rhinos are looked for at the edge of the trees.",
        "come": "During the game drive on the crater floor, near the ascent road.",
        "quando": "Morning and early afternoon.",
        "tempo": "30-60 minutes",
        "lat": -3.2199,
        "lng": 35.5193,
        "url": "https://www.ncaa.go.tz/ngorongoro-crater/"
      },
      {
        "nome": "Ngoitokitok Springs",
        "testo": "The crater's main picnic site, next to a pool with hippos. The kites are experts at snatching food from your hands: better to eat inside the vehicle.",
        "come": "On the eastern side of the floor, during the game drive.",
        "quando": "Lunch.",
        "tempo": "1 hour",
        "lat": -3.2103,
        "lng": 35.6012,
        "consiglio": "A hot lunch served in the crater needs a $23.60 permit per vehicle; a lodge packed lunch doesn't."
      },
      {
        "nome": "Crater rim",
        "testo": "The road along the rim, at about 2,300 meters, with viewpoints over the caldera and montane forest where elephants and buffalo are sometimes met. Early in the morning the floor is often covered in mist.",
        "come": "By car, on the road between Lodoare Gate and the rim lodges.",
        "quando": "Sunset and dawn, mist permitting.",
        "tempo": "30 minutes",
        "url": "https://www.ncaa.go.tz/ngorongoro-crater/"
      },
      {
        "nome": "Olduvai Gorge",
        "testo": "The paleoanthropological site on the plains of the Conservation Area, outside the crater, where the remains of Homo habilis were found. The museum overlooking the gorge explains the digs and holds casts of the finds.",
        "come": "On the road between the crater and the Serengeti, with a detour of a few kilometers.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "costo": "$35.40 per person aged 16+, about €30, together with Shifting Sand (2026)",
        "lat": -2.9936,
        "lng": 35.3511,
        "url": "https://www.ncaa.go.tz/olduvai-gorge/"
      },
      {
        "nome": "Shifting Sands",
        "testo": "A dune of black volcanic ash, blown in from Ol Doinyo Lengai, that the wind moves a few meters across the plain every year. A marker shows where it stood in past years.",
        "come": "By 4x4 from Olduvai, on tracks across the plain; you need a guide who knows the way.",
        "quando": "Morning, before the heat.",
        "tempo": "1 hour",
        "costo": "Included in the Olduvai ticket, $35.40 (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Laetoli Footprints",
        "testo": "Hominin footprints left in volcanic ash about 3.6 million years ago, among the oldest traces of upright walking. The originals are covered for protection; on site there's a replica and information panels.",
        "come": "By 4x4, south of Olduvai on long tracks: visited with a guide and half a day to spare.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "costo": "$23.60 per person aged 16+, about €20 (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Empakaai Crater",
        "testo": "A smaller, wilder crater to the northeast, with an alkaline lake on its floor where flamingos gather. From the rim, on clear days, you can see the Ol Doinyo Lengai volcano, and you can walk down to the lake.",
        "come": "By 4x4, 2-3 hours from the Ngorongoro rim; the walk down is done with an armed ranger.",
        "quando": "Morning, with the best light on the lake.",
        "tempo": "A full day",
        "costo": "Ranger-guided walk $23.60 per person up to 4 hours, about €20 (2026)",
        "lat": -2.9126,
        "lng": 35.7871,
        "url": "https://www.ncaa.go.tz/empakai-crater/"
      },
      {
        "nome": "Olmoti Crater",
        "testo": "A shallow, grassy crater north of Ngorongoro, with a trail to the waterfall where the Munge River begins. It's a short walk through Maasai pastures.",
        "come": "By 4x4 to the village of Nainokanoka, then on foot with a ranger.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "costo": "Ranger-guided walk $23.60 per person up to 4 hours, about €20 (2026)",
        "lat": -3.0115,
        "lng": 35.6497,
        "url": "https://www.ncaa.go.tz/olmoti-crater/"
      },
      {
        "nome": "Endoro and the Elephant Caves",
        "testo": "A trail in the conservation area's montane forest leading to caves dug by elephants licking mineral salt from the rock, and to a waterfall.",
        "come": "On foot with a ranger, arranged through your operator.",
        "quando": "Morning.",
        "tempo": "2-3 hours",
        "costo": "$17.70 per person aged 16+, about €15 (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Maasai boma",
        "testo": "A visit to a Maasai village, with dances, mud houses and explanations of herding life; inside the conservation area the Maasai still live with their herds.",
        "come": "With your operator, on the road around the crater.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "Ask in advance what's included and how much goes to the village.",
        "costo": "Cultural boma entry $20 per vehicle, about €17 (2026), plus the donation the village asks for",
        "url": "https://www.ncaa.go.tz/tariffs/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Dawn: descent into the crater, Lake Magadi and Lerai Forest",
          "Lunch at Ngoitokitok Springs",
          "Afternoon: ascent, visit to a boma or Olduvai"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: crater from dawn to early afternoon, night on the rim",
          "Day 2: Olduvai and Shifting Sands, then on to the Serengeti"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: crater",
          "Day 2: Olmoti and its waterfall, night in the area",
          "Day 3: walk down into Empakaai Crater"
        ]
      }
    ],
    zone: [
      {
        "nome": "Crater rim",
        "perChi": "anyone who wants the view and dawn in the crater",
        "testo": "Lodges and a public campsite on the rim, overlooking the caldera; nights are very cold. Inside the conservation area there's an overnight fee of $59 per person per night at lodges and camps, about €51, and $35.40 at the public campsite (2026)."
      },
      {
        "nome": "Karatu",
        "perChi": "anyone wanting to spend less",
        "testo": "A town among coffee farms about twenty minutes from Lodoare Gate, with lodges and campsites outside the conservation area: no overnight fee, but an early start."
      },
      {
        "nome": "Ndutu",
        "perChi": "trips from December to March",
        "testo": "Seasonal camps in the western part of the conservation area, on the Serengeti border, close to the herds in calving season."
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
    gite: [
      {
        "nome": "Lake Eyasi",
        "distanza": "about 1.5-2 hours' drive from Karatu",
        "come": "By 4x4 with your operator, leaving before dawn.",
        "testo": "A salt lake at the foot of the escarpment, home to the Hadzabe, among the last hunter-gatherers of East Africa, and Datoga herders. You go out with them at dawn."
      },
      {
        "nome": "Lake Manyara",
        "distanza": "about 1 hour's drive from Karatu",
        "come": "By 4x4, on the paved road toward Mto wa Mbu.",
        "testo": "The park of forest and alkaline lake below the Rift Valley escarpment, easily covered in half a day."
      },
      {
        "nome": "Lake Natron",
        "distanza": "about 3 hours on tracks from Empakaai",
        "come": "By 4x4, dropping from the Highlands into the Rift Valley; best with a night there.",
        "testo": "The red lake where lesser flamingos breed, at the foot of Ol Doinyo Lengai, the Maasai's sacred volcano."
      }
    ],
    faq: [
      {
        "domanda": "How much does it cost to visit the Ngorongoro Crater in 2026?",
        "risposta": "$70.80 per person per 24 hours to enter the conservation area, plus $295 per vehicle for each crater descent. With four people in a 4x4 the crater fee comes to just over $70 each."
      },
      {
        "domanda": "How long can you stay in the crater?",
        "risposta": "Crater access runs from 6 am to 4 pm and the conservation area gates close at 6 pm. Half a day on the floor is enough to see almost everything."
      },
      {
        "domanda": "Do you really see black rhinos?",
        "risposta": "Often, but at a distance: there are few of them and they live mostly in the open areas near Lerai Forest. Binoculars make the difference."
      },
      {
        "domanda": "Is it better to stay on the rim or in Karatu?",
        "risposta": "On the rim you're at the crater gate at dawn and have the view, but you pay the overnight fee and it's cold. Karatu costs less and is about twenty minutes from Lodoare Gate."
      },
      {
        "domanda": "Is Ngorongoro one of the TANAPA parks?",
        "risposta": "No: it's a conservation area run by the NCAA, with its own fees. You pay even just to cross it on the way to the Serengeti."
      },
      {
        "domanda": "What should you bring for the crater?",
        "risposta": "Warm layers for the morning on the rim, binoculars and water. Lunch is eaten at the picnic sites, ideally inside the vehicle because of the kites."
      }
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
    comeArrivare:
      "From Arusha by 4x4: Tarangire is about 120 km away, just under 2 hours on a paved road heading south, and Lake Manyara about 2 hours west, on the road to Karatu and Ngorongoro. That's why they're the first stops on the northern circuit. There's also an airstrip at Manyara, served by domestic flights from Arusha.",
    comeSpostarsi: 'By 4x4 with a driver-guide.',
    periodoMigliore: 'June to October, when animals gather around the water',
    costi:
      "Entry to each park $50 per person per 24 hours in high season (16 May-14 March), about €43, plus 18% VAT; children aged 5-15 $15. Overnight fee $40 a night at lodges inside the parks; night drive $50, canoeing at Manyara $20 (2026). Budget: about €200-250 per person per day on a group safari with a night in Mto wa Mbu. Mid-range: €350-500 with a lodge and private 4x4. High-end: over €700 at Tarangire's luxury camps.",
    erroriDaEvitare: [
      'Skipping Tarangire to rush to the Serengeti: in the dry season it\'s worth the trip on its own',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Tarangire National Park",
        "testo": "Baobabs, thousands of elephants, the densest population in Tanzania according to TANAPA, and wildlife gathering around the river in the dry season. Besides elephants there are lions, giraffes, buffalo and more than 500 bird species.",
        "come": "Game drive in a 4x4 with a guide, from the main gate in the north.",
        "quando": "Dry season, when animals gather around the water.",
        "tempo": "1 day",
        "costo": "Entry $50 per person per 24 hours in high season (16 May-14 March), about €43, plus 18% VAT; children aged 5-15 $15, about €13 (2026)",
        "orari": "Open every day of the year; gates close at 6 pm.",
        "lat": -3.8333,
        "lng": 36,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire",
        "consiglio": "In the dry season it's worth the trip on its own: don't skip it to rush to the Serengeti."
      },
      {
        "nome": "Tarangire River and the baobabs",
        "testo": "The river that gives the park its name is the only permanent water in the area: in the dry season elephant herds dig into the sandy bed to drink. Huge baobabs grow along the banks, some scarred by tusks.",
        "come": "On a game drive, following the tracks along the river in the northern part of the park.",
        "quando": "July to October.",
        "tempo": "Half a day"
      },
      {
        "nome": "Silale Swamp",
        "testo": "A large swamp in the south-central part of the park that stays green even in the dry season and draws elephants, buffalo and the lions that follow them. It's one of the best areas for waterbirds.",
        "come": "On a game drive, about an hour south of the main gate.",
        "quando": "Dry season.",
        "tempo": "Half a day",
        "lat": -4.0207,
        "lng": 36.1372
      },
      {
        "nome": "Night drive in Tarangire",
        "testo": "A game drive after sunset with spotlights, to see nocturnal animals: genets, porcupines, hyenas and, with luck, hunting leopards.",
        "come": "Only with licensed operators and lodges, which follow the park's specific rules.",
        "quando": "After sunset.",
        "tempo": "2-3 hours",
        "costo": "$50 per person, about €43; children aged 5-15 $25 (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire"
      },
      {
        "nome": "Walking safari in Tarangire",
        "testo": "Walks with an armed ranger through the park's savanna, among termite mounds and baobabs, reading tracks and seeing animals at their level.",
        "come": "Through your operator or the park lodges; a ranger and permit are required.",
        "quando": "Early morning.",
        "tempo": "1-4 hours",
        "costo": "$20 per person up to 4 hours, about €17; $25 for longer walks, about €22 (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire"
      },
      {
        "nome": "Lake Manyara",
        "testo": "A groundwater forest with mahoganies, figs and blue monkeys, the alkaline lake with lesser flamingos when the water level allows, and the Rift Valley escarpment above. It's famous for its tree-climbing lions.",
        "come": "Half-day game drive from the gate near Mto wa Mbu.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "costo": "Entry $50 per person per 24 hours in high season, about €43, plus 18% VAT; children aged 5-15 $15 (2026)",
        "orari": "Open every day of the year; gates close at 6 pm.",
        "lat": -3.5833,
        "lng": 35.8333,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/manyara"
      },
      {
        "nome": "Lake Manyara Treetop Walkway",
        "testo": "A walkway of suspension bridges through the forest canopy, at the height of the monkeys and birds. It's one of the few ways to be on foot inside the park.",
        "come": "From the welcome center near the park entrance, with a guide.",
        "quando": "Morning, when the forest is liveliest.",
        "tempo": "1 hour",
        "lat": -3.3746,
        "lng": 35.8366
      },
      {
        "nome": "Maji Moto hot springs",
        "testo": "Hot springs in the southern part of the park, where the forest gives way to the lakeshore. It's the farthest point of the classic loop.",
        "come": "On a game drive, following the track at the foot of the escarpment to the end of the park.",
        "quando": "Late morning.",
        "tempo": "2-3 hours there and back from the entrance"
      },
      {
        "nome": "Canoeing on Lake Manyara",
        "testo": "A canoe outing on the lake, among waterbirds and distant hippos, possible only when the water level allows.",
        "come": "With a licensed operator and a guide.",
        "quando": "Early morning or late afternoon.",
        "tempo": "2 hours",
        "costo": "$20 per person, about €17 (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/manyara"
      },
      {
        "nome": "Mto wa Mbu",
        "testo": "The town near the Lake Manyara entrance, on the road to Ngorongoro, where bananas are the main crop. People of many different ethnic groups live here, and the market and farms are explored with a local guide.",
        "come": "On foot or by bike with a local guide.",
        "quando": "Morning.",
        "tempo": "1-2 hours",
        "lat": -3.35,
        "lng": 35.85
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Arusha to Tarangire at dawn",
          "Game drive along the river and among the baobabs",
          "Afternoon on to Mto wa Mbu or Karatu"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Tarangire",
          "Day 2: Manyara, treetop walkway and Mto wa Mbu"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: northern Tarangire and the river",
          "Day 2: Silale Swamp, walking or night safari",
          "Day 3: Lake Manyara and Mto wa Mbu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Inside or on the edge of Tarangire",
        "perChi": "anyone after the real safari feel",
        "testo": "Lodges and tented camps inside the park or in the bordering areas, with elephants walking past the tents. Inside the park there's an overnight fee of $40 per person per night, about €34 (2026)."
      },
      {
        "nome": "Mto wa Mbu",
        "perChi": "spending less and staying close to Manyara",
        "testo": "Guesthouses, simple lodges and campsites in town, a few minutes from the Lake Manyara gate."
      },
      {
        "nome": "Karatu",
        "perChi": "anyone continuing to Ngorongoro",
        "testo": "Lodges among coffee farms, about half an hour from Mto wa Mbu and close to the Ngorongoro gate."
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
    gite: [
      {
        "nome": "Ngorongoro Crater",
        "distanza": "about 1.5 hours' drive from Mto wa Mbu",
        "come": "By 4x4 with a guide, on the paved road via Karatu.",
        "testo": "The caldera full of wildlife, black rhinos included: the natural next stop on the northern circuit."
      },
      {
        "nome": "Lake Natron",
        "distanza": "about 3 hours by road and track from Mto wa Mbu",
        "come": "By 4x4, heading north up the Rift Valley; best with a night there.",
        "testo": "The alkaline lake where lesser flamingos breed, at the foot of the Ol Doinyo Lengai volcano, with waterfalls reached on foot along a stream."
      }
    ],
    faq: [
      {
        "domanda": "Is Tarangire worth it if you're going to the Serengeti?",
        "risposta": "Yes, especially from July to October: the concentration of elephants and the baobabs are unlike anything else on the circuit. It's also the park closest to Arusha, handy for the first day."
      },
      {
        "domanda": "How much do Tarangire and Manyara cost in 2026?",
        "risposta": "$50 per person per 24 hours for each park in high season, plus 18% VAT, and $15 for children aged 5-15. Night drives, walks and canoeing are paid separately."
      },
      {
        "domanda": "Is half a day enough for Lake Manyara?",
        "risposta": "Yes, for the classic forest-and-lake loop. To reach the Maji Moto hot springs or do the treetop walkway at an easy pace you need most of the day."
      },
      {
        "domanda": "Do you see tree-climbing lions at Manyara?",
        "risposta": "Sometimes, but it's not guaranteed: they're the park's reputation more than a certainty. The forest, the baboons and the birds are always there."
      },
      {
        "domanda": "Are there flamingos all year?",
        "risposta": "No: it depends on the lake's water level, which varies a lot from year to year. Ask your operator about conditions before you go."
      },
      {
        "domanda": "Are there tsetse flies in Tarangire?",
        "risposta": "In some wooded areas, yes. Light-colored long clothing helps, avoiding blue and black which attract them, plus repellent."
      }
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
      "Zanzibar airport (ZNZ) is about twenty minutes from Stone Town and is served by domestic flights from Arusha, Kilimanjaro and Dar es Salaam, as well as direct international flights. From Dar es Salaam there are also fast ferries, about 2 hours to Stone Town port. On arrival you need Zanzibar's mandatory insurance ($44).",
    comeSpostarsi: 'Taxis or pre-arranged transfers between Stone Town and the beaches; in Stone Town you walk.',
    periodoMigliore: 'June to October and December to February, outside the rainy seasons',
    costi:
      "Mandatory insurance $44 per person for stays of up to 92 days, about €38. Budget: about €40-60 a day with guesthouses, food at Forodhani Gardens and dala dala. Mid-range: €100-160 with a seafront hotel, taxis and a few boat trips. High-end: over €350 at beach resorts or Stone Town's historic hotels.",
    erroriDaEvitare: [
      'Choosing the east coast without knowing about the tide: at low tide the sea pulls back hundreds of meters',
      'Walking around Stone Town in swimwear or a tank top: away from the beaches you cover shoulders and knees',
      "Arriving without Zanzibar's insurance already bought online, and queuing at the airport",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Stone Town",
        "testo": "The old town of alleys, carved wooden doors and seafront, a UNESCO World Heritage Site since 2000, where the architecture blends Arab, Persian, Indian and European influences with Swahili culture. It can be explored on foot in a morning, getting lost on purpose in the lanes.",
        "come": "On foot through the alleys, with a guide for the first day.",
        "quando": "Morning and evening, avoiding the hottest hours.",
        "tempo": "Half a day",
        "lat": -6.1624,
        "lng": 39.1913,
        "consiglio": "Have dinner at the evening market in Forodhani Gardens, next to the Old Fort, when fish is grilled after sunset."
      },
      {
        "nome": "Forodhani Gardens",
        "testo": "The seafront garden in Stone Town that turns into a street-food market every evening: fish skewers, octopus, griddle-cooked «Zanzibar pizza» and sugarcane juice. At sunset local boys dive off the jetty.",
        "come": "On foot from central Stone Town.",
        "quando": "From sunset on.",
        "tempo": "1-2 hours",
        "lat": -6.1606,
        "lng": 39.1886,
        "consiglio": "Agree on the price before the fish goes on the grill."
      },
      {
        "nome": "Old Fort",
        "testo": "The fort built by the Omanis in the late 17th century, the oldest building in Stone Town. The courtyard has craft shops and an amphitheater used for concerts and events, including the Sauti za Busara festival.",
        "come": "On foot, on the seafront next to Forodhani Gardens.",
        "quando": "Morning or late afternoon.",
        "tempo": "30 minutes",
        "lat": -6.1614,
        "lng": 39.1891
      },
      {
        "nome": "Anglican Cathedral and the old slave market",
        "testo": "Christ Church Cathedral was built between 1873 and 1880 on the site of Zanzibar's last slave market, closed in 1873. Next to it are the underground cells, a small museum and the memorial with chained figures.",
        "come": "On foot in the Mkunazini neighborhood, with the site's guide.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "lat": -6.1629,
        "lng": 39.1926
      },
      {
        "nome": "Darajani Market",
        "testo": "Stone Town's main market, with sections for fish, meat, fruit and spices. It's loud and crowded, and shows the real city behind the restored alleys.",
        "come": "On foot, on the eastern edge of the old town.",
        "quando": "Early morning, when the fish comes in.",
        "tempo": "1 hour",
        "lat": -6.1622,
        "lng": 39.1937
      },
      {
        "nome": "Prison Island (Changuu)",
        "testo": "A small island off Stone Town with a prison built in the late 19th century and later used as a quarantine station, plus an enclosure of Aldabra giant tortoises. Around it there's snorkeling on the reef.",
        "come": "By boat from Stone Town, about half an hour.",
        "quando": "Morning, when the sea is calmer.",
        "tempo": "Half a day",
        "lat": -6.1192,
        "lng": 39.1667
      },
      {
        "nome": "Nakupenda sandbank",
        "testo": "A strip of white sand that surfaces at low tide off Stone Town, in the middle of a turquoise sea. Boats stop for swimming, snorkeling and often a seafood lunch.",
        "come": "By boat from Stone Town; often combined with Prison Island.",
        "quando": "At low tide, which sets the trip times.",
        "tempo": "Half a day",
        "lat": -6.172,
        "lng": 39.149
      },
      {
        "nome": "Jozani Forest",
        "testo": "The forest of Jozani-Chwaka Bay National Park, home to the Zanzibar red colobus, an endangered monkey found only on the island. The visit also includes a wooden boardwalk through the mangroves.",
        "come": "By car from Stone Town, about 45 minutes; visited with a park guide.",
        "quando": "Morning.",
        "tempo": "2 hours",
        "lat": -6.233,
        "lng": 39.404
      },
      {
        "nome": "Spice farms",
        "testo": "Plantations in the island's interior where cloves, cinnamon, nutmeg, vanilla and pepper grow, the spices that made Zanzibar rich. The tour usually ends with a tasting of tropical fruit.",
        "come": "With a tour or driver from Stone Town, 20-40 minutes by car.",
        "quando": "Morning.",
        "tempo": "2-3 hours"
      },
      {
        "nome": "Mnemba Atoll",
        "testo": "The coral reef around the private islet of Mnemba, in a marine conservation area, famous for snorkeling with tropical fish, turtles and often dolphins. The island is seen from the boat: landing is for resort guests only.",
        "come": "By boat from Matemwe or Nungwi.",
        "quando": "Morning, with calm seas.",
        "tempo": "Half a day",
        "lat": -5.8196,
        "lng": 39.3837,
        "consiglio": "Choose a trip that doesn't chase the dolphins: in the long run it drives them away."
      },
      {
        "nome": "Nungwi",
        "testo": "The village on the island's northern tip, with beaches where the tide matters little, yards where dhows are still built by hand, and sunsets over the sea. It's the liveliest area, with bars and restaurants.",
        "come": "Taxi or dala dala from Stone Town, about an hour and a half.",
        "quando": "All year, for swimming at any hour.",
        "tempo": "A day or more",
        "lat": -5.7272,
        "lng": 39.2992
      },
      {
        "nome": "Kendwa",
        "testo": "The beach south of Nungwi, long and white, where the sea stays deep even at low tide. It's the classic choice for swimming all day.",
        "come": "Taxi from Stone Town, about an hour and a half; on foot along the beach from Nungwi at low tide.",
        "quando": "All year.",
        "tempo": "A day or more",
        "lat": -5.7535,
        "lng": 39.2897
      },
      {
        "nome": "Paje",
        "testo": "The east coast, with a wide beach and a shallow lagoon where the tide changes the landscape a lot: check the tide times. Steady wind has made it the island's kitesurfing capital.",
        "come": "By car from Stone Town, about an hour.",
        "quando": "At high tide for swimming; June to September and December to February for wind.",
        "tempo": "A day",
        "lat": -6.2667,
        "lng": 39.5341
      },
      {
        "nome": "Jambiani",
        "testo": "A village along the east coast, quieter than Paje, where at low tide women farm seaweed in the lagoon. The beach is very long and the sea changes color through the day.",
        "come": "By car from Stone Town, about an hour and a quarter.",
        "quando": "At high tide for swimming.",
        "tempo": "A day",
        "lat": -6.3167,
        "lng": 39.55
      },
      {
        "nome": "Kuza Cave",
        "testo": "A limestone cave inland from Jambiani with a clear freshwater pool for swimming. For the villagers it's a place of spiritual value.",
        "come": "By car or bike from Jambiani.",
        "quando": "In the hot hours, when cool water helps.",
        "tempo": "1 hour",
        "lat": -6.3038,
        "lng": 39.5334
      },
      {
        "nome": "The Rock",
        "testo": "A restaurant built on a rock off Michamvi Pingwe beach, reached on foot at low tide and by boat at high tide. It has become one of the island's symbols.",
        "come": "By car from Stone Town or Paje; book ahead.",
        "quando": "Lunch or sunset.",
        "tempo": "2 hours",
        "lat": -6.152,
        "lng": 39.5194
      },
      {
        "nome": "Kizimkazi",
        "testo": "The fishing village on the southern tip, with one of the oldest mosques in East Africa, which preserves an inscription dated 1107. Boats leave from here to look for dolphins.",
        "come": "By car from Stone Town, about an hour.",
        "quando": "Early morning for the dolphins.",
        "tempo": "Half a day",
        "lat": -6.433,
        "lng": 39.4623,
        "consiglio": "Dolphin trips are often crowded: pick an operator who keeps a distance and doesn't send everyone jumping in on top of the animals."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Stone Town on foot, Darajani Market and the cathedral",
          "Afternoon: Old Fort and seafront",
          "Evening: Forodhani Gardens"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Stone Town and Forodhani Gardens",
          "Day 2: Prison Island and Nakupenda sandbank, then a spice farm"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Stone Town",
          "Day 2: Jozani Forest, east coast and The Rock",
          "Day 3: snorkeling at Mnemba or a beach in the north"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stone Town",
        "perChi": "culture lovers",
        "testo": "Historic hotels and guesthouses in the old town, no beach: one or two nights are enough."
      },
      {
        "nome": "North (Nungwi, Kendwa)",
        "perChi": "beach and nightlife",
        "testo": "Beaches, bars and evening life, with swimming possible at any hour."
      },
      {
        "nome": "Northeast (Matemwe, Kiwengwa)",
        "perChi": "quiet resorts with Mnemba close by",
        "testo": "Large and small resorts on long beaches, with the reef offshore; the tide is noticeable here."
      },
      {
        "nome": "East (Paje, Jambiani, Michamvi)",
        "perChi": "kitesurfing and atmosphere",
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
    gite: [
      {
        "nome": "Menai Bay and Kwale",
        "distanza": "about 40 minutes by car to Fumba, then by boat",
        "come": "On dhow trips from Fumba, southwest of Stone Town.",
        "testo": "A marine conservation area with sandbanks, mangroves, snorkeling and Kwale island with its large baobab. The day usually includes a grilled seafood lunch."
      },
      {
        "nome": "Dar es Salaam",
        "distanza": "about 2 hours by fast ferry",
        "come": "Fast ferries from Stone Town port, several sailings a day.",
        "testo": "Tanzania's largest city, with the Kivukoni fish market and the National Museum. More than a day trip, it's the gateway for those continuing on the mainland."
      }
    ],
    faq: [
      {
        "domanda": "Do you need insurance to enter Zanzibar?",
        "risposta": "Yes: since 2024 Zanzibar's travel insurance has been mandatory, $44 per person for stays of up to 92 days. It's bought online before departure or on arrival."
      },
      {
        "domanda": "North coast or east coast?",
        "risposta": "The north, Nungwi and Kendwa, for swimming at any hour. The east coast, Paje and Jambiani, for kitesurfing and quieter villages, knowing that at low tide the sea pulls back hundreds of meters."
      },
      {
        "domanda": "How many days do you need in Zanzibar?",
        "risposta": "Four or five: one or two in Stone Town, the rest by the sea with a couple of boat trips. After a safari it's the classic way to end the trip."
      },
      {
        "domanda": "How should you dress in Stone Town?",
        "risposta": "With shoulders and knees covered: Zanzibar is mostly Muslim and swimwear is for the beaches. During Ramadan avoid eating and drinking in the street during the day."
      },
      {
        "domanda": "When is the best time to go?",
        "risposta": "June to October and December to February, outside the two rainy seasons. April and May are the wettest months."
      },
      {
        "domanda": "How do you get around the island?",
        "risposta": "By pre-arranged taxi or transfer, or by dala dala, the local minibuses, which are very cheap but slow. Agree on the taxi fare before getting in."
      }
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
    comeArrivare:
      "Kilimanjaro International Airport (JRO) lies between Arusha and Moshi, about an hour from Arusha and 45 minutes from Moshi, with international flights connecting via the Gulf, Ethiopia, Kenya or Europe. Arusha Airport (ARK), on the city's western outskirts, handles domestic flights to the parks and Zanzibar. Operators usually include the transfer.",
    comeSpostarsi: 'Transfer arranged by your operator or taxi; heavy traffic in town at rush hour.',
    periodoMigliore: 'June to October and January to February for Kilimanjaro, outside the rains',
    costi:
      "Arusha National Park $50 per person per 24 hours in high season, about €43, plus VAT; Kilimanjaro $70 a day plus huts or campsites and a $20 rescue fee (2026). Budget: about €35-50 a day in Arusha or Moshi with guesthouses, local food and dala dala. Mid-range: €80-130 with a garden lodge and taxis. High-end: over €250 at boutique lodges toward Usa River.",
    erroriDaEvitare: [
      'Booking the first safari day on the same day as your long-haul flight: better to spend a night in Arusha',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kilimanjaro",
        "testo": "Africa's highest mountain, 5,895 meters at Uhuru Peak. According to TANAPA the climb to Kibo takes 5 to 8 days depending on the route: among the best known are Machame, Lemosho, Marangu and Rongai. On clear days you can see it from the road.",
        "come": "With a licensed operator, with guides and porters.",
        "quando": "Avoid the two rainy seasons, March to May and around November.",
        "tempo": "5-8 days",
        "costo": "Entry $70 per person per day, about €60, plus 18% VAT; Marangu route huts $60 a night, campsites $50 a night, rescue fee $20 per climb (2026)",
        "lat": -3.0764,
        "lng": 37.354,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/kilimanjaro",
        "consiglio": "More days mean better acclimatization and a better chance of reaching the summit."
      },
      {
        "nome": "Arusha National Park",
        "testo": "The park at the foot of Mount Meru (4,566 meters, Tanzania's second-highest peak): the «Serengeti Ndogo» plain with buffalo, zebras and giraffes, Ngurdoto Crater, and forest with black-and-white colobus. It's one of the few northern parks where you can walk with a ranger.",
        "come": "By car from Arusha, about 40 minutes; ranger walks are arranged at the gate.",
        "quando": "Morning, when Kilimanjaro and Meru are more often clear of cloud.",
        "tempo": "A day",
        "costo": "Entry $50 per person per 24 hours in high season, about €43, plus 18% VAT; children aged 5-15 $15 (2026)",
        "orari": "Open every day of the year; gates close at 6 pm.",
        "lat": -3.25,
        "lng": 36.8333,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Mount Meru",
        "testo": "The volcano towering over Arusha, climbed in 3-4 days with a mandatory armed ranger, sleeping in the Miriakamba and Saddle huts. From the final ridge you see Kilimanjaro at dawn, and it's excellent acclimatization before Kili.",
        "come": "From Momella Gate, inside Arusha National Park, with a ranger and porters.",
        "quando": "June to October and January to February.",
        "tempo": "3-4 days",
        "costo": "Huts $30 a night, about €26; ranger $15 per day per group and rescue fee $20 per climb, on top of park entry (2026)",
        "lat": -3.2467,
        "lng": 36.7483,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Momella Lakes",
        "testo": "A group of shallow lakes in Arusha National Park, each a different color depending on algae and minerals, with flamingos, hippos and waterbirds. You can canoe on Small Momella.",
        "come": "On a game drive in the park or by canoe with a guide.",
        "quando": "Morning.",
        "tempo": "2-3 hours",
        "costo": "Canoeing $20 per person, about €17 (2026)",
        "lat": -3.2276,
        "lng": 36.896,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Materuni and the coffee villages near Moshi",
        "testo": "Chagga villages on the slopes of Kilimanjaro around Moshi, with coffee farms and waterfalls visited with local guides; the best known is Materuni, with a tall waterfall and a natural pool. The visit often includes roasting coffee by hand.",
        "come": "By car from Moshi, about 30-40 minutes, then on foot with a village guide.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "lat": -3.2502,
        "lng": 37.4001
      },
      {
        "nome": "Moshi",
        "testo": "The town at the foot of Kilimanjaro, calmer than Arusha, where almost all climbs start. The central market and downtown streets are easy on foot, and on clear mornings the summit appears above the rooftops.",
        "come": "By car from Arusha, about an hour and a half; from Kilimanjaro International Airport about 45 minutes.",
        "quando": "Early morning to see the mountain.",
        "tempo": "Half a day",
        "lat": -3.3349,
        "lng": 37.3404
      },
      {
        "nome": "Central Arusha",
        "testo": "The safari city, with the Clock Tower at its center, the central market and the Maasai craft market. More than a destination, it's where you meet your operator, change money and do last-minute shopping.",
        "come": "On foot downtown, with taxis or bajaji for longer hops.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "lat": -3.3724,
        "lng": 36.6945
      },
      {
        "nome": "Cultural Heritage Centre",
        "testo": "A large building on the edge of Arusha, on the road to the parks, with a gallery of contemporary African art and shops selling crafts, fabrics and tanzanite.",
        "come": "By car or taxi, on the Dodoma road at the city's western exit.",
        "quando": "Afternoon, on the way back from safari.",
        "tempo": "1 hour",
        "lat": -3.3772,
        "lng": 36.6583
      },
      {
        "nome": "Kikuletwa (Chemka) Hot Springs",
        "testo": "A natural pool of warm turquoise water among fig trees, fed by springs, halfway between Arusha and Moshi. People swim and swing in from ropes hanging off the trees.",
        "come": "By car, with the last stretch on a dirt track.",
        "quando": "Weekdays, when it's less crowded.",
        "tempo": "Half a day",
        "lat": -3.4443,
        "lng": 37.1938
      },
      {
        "nome": "Lake Chala",
        "testo": "A volcanic lake in a crater on the Kenyan border, with blue water and steep forested walls. You walk along the rim and down to the shore.",
        "come": "By car from Moshi, about an hour and a half.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "lat": -3.3174,
        "lng": 37.7001
      },
      {
        "nome": "Lake Duluti",
        "testo": "A small crater lake near Arusha surrounded by forest, with a loop trail and canoe outings. On clear days Meru stands in the background.",
        "come": "By car from Arusha, about 20-30 minutes toward Tengeru.",
        "quando": "Morning or late afternoon.",
        "tempo": "2 hours",
        "lat": -3.3868,
        "lng": 36.7889
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Arusha National Park and Momella Lakes",
          "Afternoon: Materuni waterfall and coffee"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Arusha National Park with a walk and canoeing",
          "Day 2: Lake Duluti in the morning, Kikuletwa Hot Springs in the afternoon"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: central Arusha and the Cultural Heritage Centre",
          "Day 2: Arusha National Park",
          "Day 3: Moshi, Materuni and coffee"
        ]
      }
    ],
    zone: [
      {
        "nome": "Arusha",
        "perChi": "anyone starting a safari",
        "testo": "The safari departure city, with hotels and agencies; the quieter areas are outside the center, toward the Moshi road."
      },
      {
        "nome": "Usa River and Tengeru",
        "perChi": "greenery close to Arusha National Park",
        "testo": "Lodges among farms and gardens on the road to Kilimanjaro, halfway between the city and the airport."
      },
      {
        "nome": "Moshi",
        "perChi": "Kilimanjaro climbers",
        "testo": "The town at the foot of the mountain, with guesthouses and simple hotels where trekking operators meet their clients."
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
    gite: [
      {
        "nome": "Tarangire National Park",
        "distanza": "about 2 hours' drive from Arusha",
        "come": "By 4x4 with a guide, leaving at dawn.",
        "testo": "Baobabs and elephant herds along the river: it's the northern-circuit park best done as a day trip from Arusha."
      },
      {
        "nome": "Lake Manyara",
        "distanza": "about 2 hours' drive from Arusha",
        "come": "By 4x4, on the paved road toward Mto wa Mbu.",
        "testo": "The forest, the alkaline lake and the Rift Valley escarpment, covered in half a day."
      }
    ],
    faq: [
      {
        "domanda": "How many days does it take to climb Kilimanjaro?",
        "risposta": "5 to 8 depending on the route. The 7-8 day routes, such as Lemosho, allow more time to acclimatize and improve the chances of reaching Uhuru Peak."
      },
      {
        "domanda": "How much are Kilimanjaro park fees in 2026?",
        "risposta": "$70 per person per day for entry, plus VAT, plus $60 a night in huts or $50 at campsites and a $20 rescue fee. On a one-week climb the park fees alone come to around $900 per person."
      },
      {
        "domanda": "Do you need a night in Arusha before the safari?",
        "risposta": "Yes, it's the safest choice: long-haul flights often land in the evening and the first safari day starts at dawn."
      },
      {
        "domanda": "Arusha or Moshi?",
        "risposta": "Arusha for northern-circuit safaris, Moshi for Kilimanjaro. Kilimanjaro International Airport is roughly halfway between them."
      },
      {
        "domanda": "Can you see Kilimanjaro from Arusha?",
        "risposta": "On clear days, yes, especially at dawn and from June to October. Often, though, the summit stays in the clouds for days."
      },
      {
        "domanda": "Is Meru good training for Kilimanjaro?",
        "risposta": "Yes: it reaches 4,566 meters and is climbed in 3-4 days, so it helps acclimatization. Many do it right before Kili."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Kilimanjaro above the clouds, with acacias in the foreground',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
