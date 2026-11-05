import type { Destinazione } from '@/lib/types'

export const destinazioniMarocco: Destinazione[] = [
  {
    slug: 'marrakech',
    paeseSlug: 'marocco',
    ordine: 1,
    nome: 'Marrakech',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '3 days, split between the start and the end of the trip',
    visitataPersonalmente: true,
    introduzione: "The medina, the souks, Jemaa El-Fna in the evening and the Jardin Majorelle: the starting and ending point of the trip, where we spent three nights at different times.",
    percheAndarci: "It's the most convenient gateway to Morocco, with monuments and atmosphere worth more than one visit.",
    cosaVedere: [
      'Jemaa El-Fna Square, the heart of the medina',
      'Ali Ben Youssef Madrasa',
      'Bahia Palace',
      'Saadian Tombs',
      'Koutoubia Mosque (exterior only)',
      'Jardin Majorelle',
    ],
    cosaFare: [
      'Guided tour of Marrakech (see the dedicated experience page)',
      'Visit to the Jardin Majorelle (see the dedicated experience page)',
      'Shopping in the souks',
      'Dinner with a dinner show at Narwama',
    ],
    doveDormire:
      "We slept at Villa Zahra, a spacious, quiet villa, comfortable and less stifling than a hotel in the heart of the medina. According to the reviews it has a pool and helpful staff. The only compromise is the location, a bit outside the center, which is worth keeping in mind for evening trips.\n\nBudget: Central House Marrakech Medina, Equity Point Marrakech · mid-range: Riad Nelia, Riad Yasmine · luxury (not over the top): IZZA, Riad Kaiss.",
    doveMangiare: 'Kui Zin (welcome dinner), Narwama (dinner show), Safran by Koya.',
    usciteSerali: 'Churchill Bar or La Pergola.',
    comeArrivare: 'International flight to Marrakech.',
    comeSpostarsi: 'Private van with a guide, on foot in the medina, taxi to the Jardin Majorelle (50 MAD per ride).',
    periodoMigliore: 'early May',
    costi: 'Madrasa 50 MAD, Bahia Palace 70 MAD, Saadian Tombs 70 MAD, Jardin Majorelle 150 MAD per person.',
    erroriDaEvitare: ["Not booking the Jardin Majorelle in advance: entries are capped and it fills up fast during the middle of the day"],
    miaEsperienza:
      "The guided tour was a great way to get my bearings in the medina, but my strongest memory of Marrakech is still Jemaa El-Fna, seen again in the evening after the tour, among snake charmers, musicians and stalls of every kind.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Jemaa el-Fna Square",
        "testo": "The heart of the medina: by day orange-juice stalls and snake charmers, in the evening it fills with smoke, drums, musicians and open-air kitchens. Since 2008 it has been UNESCO intangible heritage.",
        "come": "Reached on foot from the medina; taxis stop at the edges. You walk among the stalls.",
        "quando": "At sunset and in the evening, when the kitchens open.",
        "tempo": "1-2 hours",
        "consiglio": "Eat at the numbered stalls with posted prices and choose those full of locals."
      },
      {
        "nome": "Ben Youssef Madrasa",
        "testo": "The Koranic school founded in the 14th century and rebuilt by the Saadian sultans in the 16th, among the largest in the Maghreb. The courtyard has a marble pool in the middle and walls of zellige, stucco and carved cedar up to the roof. Upstairs you see the students' small cells, looking onto the courtyard.",
        "come": "On foot from the north medina, about 15 minutes from Jemaa el-Fna.",
        "quando": "Morning at opening, to have the courtyards empty.",
        "tempo": "45 minutes",
        "costo": "50 MAD (from my trip)"
      },
      {
        "nome": "Bahia Palace",
        "testo": "The 19th-century palace of the grand vizier, with courtyards, gardens, painted rooms and cedar ceilings.",
        "come": "On foot from the Mellah or Jemaa el-Fna.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "costo": "70 MAD (from my trip)"
      },
      {
        "nome": "Saadian Tombs",
        "testo": "The mausoleum of the 16th-century Saadian sultans, with Carrara marble tombs and a room with twelve columns.",
        "come": "Near the kasbah, a 15-minute walk from Jemaa el-Fna.",
        "quando": "Early morning: in the afternoon a queue forms.",
        "tempo": "30-45 minutes",
        "costo": "70 MAD (from my trip)"
      },
      {
        "nome": "Jardin Majorelle",
        "testo": "The botanical garden painted cobalt blue, created by the painter Jacques Majorelle and later restored by Yves Saint Laurent. Inside is the Berber museum.",
        "come": "Taxi from the medina in 15 minutes, in the Guéliz district.",
        "quando": "Morning at opening: entries are limited and the garden fills.",
        "tempo": "1-1.5 hours",
        "costo": "150 MAD (from my trip)",
        "consiglio": "Book the ticket beforehand, because in the middle of the day a queue forms.",
        "url": "https://www.jardinmajorelle.com/"
      },
      {
        "nome": "Yves Saint Laurent Museum",
        "testo": "A few steps from the Jardin Majorelle, the pink brick and terracotta building shows rotating selections of the designer's clothes, sketches and photographs; he came to Marrakech every year. There is also a temporary exhibition room and a bookshop.",
        "come": "On foot from the Jardin Majorelle, on the same street. Separate ticket, to buy on the official site.",
        "quando": "Open every day except Wednesday, 10am-6pm, last entry 5:30pm (2026).",
        "tempo": "1 hour",
        "url": "https://www.museeyslmarrakech.com/",
        "consiglio": "Pair it with the Majorelle on the same morning, booking both in advance."
      },
      {
        "nome": "Koutoubia Mosque",
        "testo": "The 12th-century Almohad minaret, about 77 metres high, is the city's landmark and the model for the Giralda in Seville. The mosque is closed to non-Muslims, but you can walk around it and through the gardens behind, with the remains of the first mosque.",
        "come": "On foot from Jemaa el-Fna, five minutes west.",
        "quando": "Sunset, when the minaret takes on colour and the evening call to prayer starts.",
        "tempo": "30 minutes",
        "costo": "Exterior and gardens free"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Ben Youssef Madrasa and souqs",
          "Lunch in the medina",
          "Afternoon: Bahia Palace and Saadian Tombs",
          "Evening: Jemaa el-Fna at sunset and dinner"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2: Jardin Majorelle at opening, Guéliz, hammam and dinner with a show"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "those who want the atmosphere of Marrakech",
        "testo": "Riads inside the walls, a few minutes from Jemaa el-Fna. Narrow alleys, noise, hard to find your way with luggage: ask the riad to send someone to the door."
      },
      {
        "nome": "Guéliz",
        "perChi": "those who want a modern city",
        "testo": "A European district with restaurants and shops, near the Jardin Majorelle. Quieter, but you lose the atmosphere."
      },
      {
        "nome": "Hivernage",
        "perChi": "those who want hotels with a pool",
        "testo": "Large hotels with gardens, near both the medina and Guéliz."
      }
    ],
    sapori: [
      {
        "nome": "Tagine",
        "testo": "Meat or chicken with lemon, olives and vegetables, cooked in the clay pot."
      },
      {
        "nome": "Friday couscous",
        "testo": "The dish of the week in homes; found in restaurants on Fridays."
      },
      {
        "nome": "Pastilla",
        "testo": "Crisp pastry with pigeon or chicken, almonds and cinnamon."
      },
      {
        "nome": "Mint tea",
        "testo": "Always served, to drink hot and very sweet."
      }
    ],
    attenzioni: [
      "Unauthorized guides who offer themselves in the medina then ask for a high tip: agree beforehand or use an official guide.",
      "If a boy says \"the road is closed\", he is trying to take you to a shop: check on the map.",
      "In the souqs haggle starting from about a third of the stated price.",
      "Photos of the charmers and musicians in Jemaa el-Fna: you pay, agree beforehand.",
      "The Jardin Majorelle has limited entries: do not arrive without a ticket."
    ],
    // GUIDA-END
    esperienzeSlugs: ['tour-marrakech', 'jardin-majorelle'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Jemaa El-Fna square bustling in the evening in Marrakech, Morocco',
    immagine: '/images/marocco/marrakech-stock.jpg',
  },
  {
    slug: 'ait-benhaddou',
    paeseSlug: 'marocco',
    ordine: 2,
    nome: 'Telouet Kasbah and Aït Benhaddou',
    tipologia: ['storia', 'kasbah'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: "The former residence of the Glaoui family at Telouet and the ksar of Aït Benhaddou, a UNESCO site and the set of countless films, from \"Gladiator\" to \"Game of Thrones\".",
    percheAndarci: "For one of the best-preserved fortified mud villages in Morocco, which looks stuck in another era.",
    cosaVedere: ['The Telouet Kasbah, with its heavily decorated interiors', 'The ksar of Aït Benhaddou'],
    cosaFare: ['Visit to the Telouet Kasbah', 'Visit to the ksar of Aït Benhaddou'],
    doveDormire:
      "We slept at Ksar El Janoub, the place with the best reviews in the area: clean, well-kept rooms, a pool with a view and service described as attentive and friendly (several reviews mention the owner, Khalid, for his hospitality).\n\nBudget: Riad Caravane, Dar Mouna · mid-range: Kasbah Tebi, Kasbah El Hajja · luxury (not over the top): Kasbah Rayane, Caravane Hotel (Ounila Valley).",
    doveMangiare: 'Tawesna, for lunch after visiting the ksar.',
    comeArrivare: 'About 2h30 from Marrakech to Telouet, then about 1h to Aït Benhaddou.',
    comeSpostarsi: 'On foot in the ksar.',
    periodoMigliore: 'morning, for the best light on the rammed-earth facade',
    costi: "I didn't note down the entry prices for Telouet and Aït Benhaddou.",
    erroriDaEvitare: ["Forgetting to recharge power banks before the night in the desert: the tented camps have no electrical outlets"],
    miaEsperienza:
      "I was surprised by the contrast between the rammed-earth exterior of the Telouet Kasbah, now partly collapsed, and the interiors full of decoration. The ksar of Aït Benhaddou in person is even more beautiful than it looks in the films that made it famous.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Telouet Kasbah",
        "testo": "The old residence of the lords of the valley, now partly collapsed outside but with interiors rich in stucco, zellige and painted ceilings.",
        "come": "From Marrakech 2.5 hours over the Tizi n'Tichka pass; visited with a local guide.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "The contrast between the mud outside and the decorated interiors is the surprise of the visit."
      },
      {
        "nome": "Aït Benhaddou Ksar",
        "testo": "The fortified village in rammed earth, UNESCO heritage since 1987, a set for many films. You climb to the top for the view over the valley.",
        "come": "About an hour from Telouet; you cross the river on foot and climb between the houses.",
        "quando": "Morning, for the best light on the facade and no heat.",
        "tempo": "1-1.5 hours"
      },
      {
        "nome": "Taourirt Kasbah in Ouarzazate",
        "testo": "The kasbah of the Glaoui, the lords of the Atlas, in the centre of Ouarzazate: a maze of courtyards and rammed-earth rooms, partly restored, with painted wooden ceilings and latticed windows. It is a good introduction to the mud architecture you then see in the valleys.",
        "come": "In the centre of Ouarzazate, about half an hour's drive from Aït Benhaddou. Visit on your own or with a guide at the entrance.",
        "quando": "Late afternoon, on the way to the valleys. Hours on site.",
        "tempo": "45 minutes",
        "consiglio": "The Atlas Studios at the edge of town are only for film lovers: the kasbah is more interesting."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Leave Marrakech, Tizi n'Tichka pass",
          "Telouet Kasbah",
          "Lunch at Tawesna",
          "Aït Benhaddou Ksar"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aït Benhaddou",
        "perChi": "those who want to sleep in the valley",
        "testo": "Kasbah-hotels a few steps from the ksar, simple and quiet."
      },
      {
        "nome": "Ouarzazate",
        "perChi": "those who want more services",
        "testo": "A town 30 km away, with hotels in every range and restaurants."
      }
    ],
    sapori: [
      {
        "nome": "Tagine with almonds",
        "testo": "Lamb with prunes and almonds, in the restaurants around the ksar."
      },
      {
        "nome": "Berber bread",
        "testo": "Baked in the wood ovens of the villages."
      },
      {
        "nome": "Draa Valley dates",
        "testo": "Sweet and soft, sold along the road."
      },
      {
        "nome": "Mint tea",
        "testo": "Served everywhere as a welcome."
      }
    ],
    attenzioni: [
      "The Tizi n'Tichka pass is winding and in winter there may be snow or ice.",
      "Guides at Aït Benhaddou ask per-person fees: agree beforehand.",
      "Forgetting to charge power banks before the night in the desert: the camps have no outlets."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'The fortified ksar of Aït Benhaddou, a UNESCO World Heritage site, Morocco',
    immagine: '/images/marocco/ait-benhaddou-stock.jpg',
  },
  {
    slug: 'merzouga',
    paeseSlug: 'marocco',
    ordine: 3,
    nome: 'Todra Gorge and Merzouga',
    tipologia: ['deserto', 'natura'],
    giorniConsigliati: '2 days, 1 night in the desert',
    visitataPersonalmente: true,
    introduzione: "The Todra Gorge along the way, then a night at Erg Chebbi with a camel, a quad and a starry sky like no other.",
    percheAndarci: "It's the entrance to the Sahara and one of the best moments of the trip: the desert's starry sky, far from any artificial light.",
    cosaVedere: ['The Todra Gorge', 'The dunes of Erg Chebbi'],
    cosaFare: [
      'Visit to the Todra Gorge (30 minutes)',
      'Night in the desert at Erg Chebbi (see the dedicated experience page)',
      'Camel ride at sunset and at dawn',
      'Quad in the desert (see the dedicated experience page)',
    ],
    doveDormire:
      "We slept at Camp La Source, a tented camp at the foot of the Erg Chebbi dunes: large, well-kept tents, family management described as very welcoming and a starry sky far from any artificial light.\n\nBudget: Hostel La Liberte Merzouga, Merzouga Camp and Hostel · mid-range: Auberge La Khaima, Nomad Palace Camp · luxury (not over the top): Merzouga Luxury Desert Camp, Sahara Desert Luxury Camp.",
    doveMangiare: 'Dinner at the tented camp; allergies and intolerances can be flagged in advance.',
    comeArrivare: 'About 3h from Aït Benhaddou to the Todra Gorge, then about 3h to Erg Chebbi.',
    comeSpostarsi: 'Camel and quad in the desert.',
    periodoMigliore: 'early May, nights still cool',
    costi: 'Quad 350 MAD per person.',
    erroriDaEvitare: ["Going into the desert without a turban or pashmina: it's better to buy them beforehand at the local market, they protect against sand and the night cold", "Arriving in Merzouga without a supply of alcohol and snacks: there's very little to be found in the desert"],
    miaEsperienza:
      "The starry sky at night, far from any artificial light, was one of the best moments of the trip. The camel ride at dawn, with the dunes changing color in the sunlight, was a fitting end to that night.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Todra Gorges",
        "testo": "A limestone canyon in the High Atlas: in the last kilometre the walls rise for hundreds of metres and narrow to about ten metres. You walk along the bottom beside the stream, with climbers on the walls.",
        "come": "From Aït Benhaddou about 3 hours by road; you stop at a lot and walk.",
        "quando": "Morning, before the groups.",
        "tempo": "30 minutes"
      },
      {
        "nome": "Erg Chebbi and the night in the desert",
        "testo": "The dunes up to 150 meters high near Merzouga. You ride a camel to the tented camp, have dinner, sleep under a sky with no lights and return at dawn.",
        "come": "The camel leaves from the village, about an hour to the camp.",
        "quando": "Sunset and dawn.",
        "tempo": "One night",
        "consiglio": "Bring a turban or pashmina for sand and the night cold, and charge your phone beforehand."
      },
      {
        "nome": "Quad in the desert",
        "testo": "A quad ride among the dunes and villages near Merzouga, in a group with a guide.",
        "come": "Book at the hotel or camp.",
        "quando": "Morning or late afternoon.",
        "tempo": "1-2 hours",
        "costo": "350 MAD per person (from my trip)"
      },
      {
        "nome": "Khamlia and Gnawa music",
        "testo": "A village south of Merzouga lived in by Gnawa families, descendants of enslaved people brought from sub-Saharan Africa. In the music house they play drums and qraqeb, the iron castanets, and serve tea: a simple way to understand another part of Morocco's history.",
        "come": "By car or 4x4 from Merzouga, about 15 minutes. It is often a stop on the jeep tours around Erg Chebbi.",
        "quando": "Afternoon, before leaving for the desert camp.",
        "tempo": "1 hour",
        "costo": "Donation for the musicians",
        "consiglio": "Leave a donation or buy a CD: that is how the group makes a living."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Todra Gorges, then transfer to Merzouga, camel at sunset, night at the camp",
          "Day 2: dawn over the dunes, return"
        ]
      }
    ],
    zone: [
      {
        "nome": "Tented camp at Erg Chebbi",
        "perChi": "those who want the night in the desert",
        "testo": "Simple or more comfortable tents, with dinner and breakfast. Little electricity."
      },
      {
        "nome": "Hotel in Merzouga",
        "perChi": "those who prefer a room",
        "testo": "Hotels and kasbahs with a pool, a few minutes from the dunes."
      }
    ],
    sapori: [
      {
        "nome": "Desert bread (madfouna)",
        "testo": "A bread stuffed with meat and onions baked under the sand."
      },
      {
        "nome": "Camel tagine",
        "testo": "In some camps served on request."
      },
      {
        "nome": "Berber tea",
        "testo": "With mint and spices, at the camps."
      },
      {
        "nome": "Dates",
        "testo": "Sweet and dry, from the Ziz Valley."
      }
    ],
    attenzioni: [
      "Entering the desert without a turban or pashmina: better to buy them first at the market, they help against sand and cold.",
      "Arriving in Merzouga without a stock of alcohol and snacks: in the desert you find few.",
      "Nights are cold even in spring: bring warm layers.",
      "Check what the camel and quad cost before signing: prices vary."
    ],
    // GUIDA-END
    esperienzeSlugs: ['notte-deserto-erg-chebbi', 'gole-todra', 'quad-deserto-merzouga'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'A guide in a turban leads a dromedary across the orange sand of the Merzouga dunes',
    immagine: '/images/marocco/merzouga-guida-dromedario-riccardo.jpg',
  },
  {
    slug: 'agdz',
    paeseSlug: 'marocco',
    ordine: 4,
    nome: 'Agdz and the Draa Valley',
    tipologia: ['kasbah', 'natura'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: 'The Draa Valley and the Tamnougalt Kasbah, one of the best preserved in the area.',
    percheAndarci: "A quieter stop between the desert and the coast, with one of the best-preserved kasbahs in Morocco.",
    cosaVedere: ['The Tamnougalt Kasbah'],
    cosaFare: ['Visit to the Tamnougalt Kasbah', 'Free time by the pool'],
    doveDormire:
      "We spent one night at Kasbah Trane, along the Draa Valley: a quiet area and a good base for the nearby Tamnougalt Kasbah. I couldn't find any reviews under this exact name.\n\nBudget: Kasbah Maktob Tamnougalt, Guest House Jardin de Tamnougalt · mid-range: Maison d'Hôtes Kasbah Azul, Dar Jnane - La Maison Du Jardin · luxury (not over the top): Hotel and Restaurant Kasbah Draa, Kasbah Kissane.",
    doveMangiare: 'Dinner at the hotel.',
    comeArrivare: 'About 4h from Merzouga.',
    comeSpostarsi: 'On foot in the kasbah.',
    periodoMigliore: 'evening, for the visit to the Tamnougalt Kasbah',
    costi: 'Tamnougalt Kasbah 20 MAD per person + 200 MAD tip for the local guide.',
    erroriDaEvitare: [],
    miaEsperienza:
      "After the desert, Agdz came at just the right time to catch my breath, and the Tamnougalt Kasbah reminded me how worthwhile it is to step off the most beaten routes.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Tamnougalt Kasbah",
        "testo": "A fortified kasbah in the Draa Valley, lived in by Berber families. Visited with a local guide who explains the rooms and village life.",
        "come": "From Merzouga about 4 hours by road.",
        "quando": "Evening, for the light on the mud walls.",
        "tempo": "1 hour",
        "costo": "20 MAD per person plus about 200 MAD tip for the guide (from my trip)"
      },
      {
        "nome": "Draa Valley",
        "testo": "The long valley of palm groves along the river, with kasbahs and mud villages.",
        "come": "By car along the main road.",
        "quando": "Afternoon.",
        "tempo": "Half a day",
        "consiglio": "Leaving the most beaten routes is worth it: Tamnougalt shows it."
      },
      {
        "nome": "Zagora and the 'Timbuktu 52 days' sign",
        "testo": "The main town of the Draa valley, the last before the desert to the south. On the way out is the painted sign showing 52 days by camel to Timbuktu, a memory of the caravans. Around it, palm groves, kasbahs and the village of Tamegroute with its green pottery.",
        "come": "From Agdz about 1.5 hours south along the valley. Tamegroute is 20 km further on.",
        "quando": "Morning for Tamegroute and the workshops, sunset on the Tinfou dunes.",
        "tempo": "Half a day",
        "consiglio": "In Tamegroute the Koranic library and the potters' kilns are worth more than the Zagora dunes, small compared with Merzouga."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Leave Merzouga",
          "Lunch on the road",
          "Tamnougalt Kasbah",
          "Free time at the pool"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agdz",
        "perChi": "those who want a pause after the desert",
        "testo": "A small town with kasbah-hotels and a pool, quiet and without tourists."
      },
      {
        "nome": "Zagora",
        "perChi": "those who want more services",
        "testo": "A larger town to the south, with hotels and departures for the desert."
      }
    ],
    sapori: [
      {
        "nome": "Draa dates",
        "testo": "Among the best in Morocco."
      },
      {
        "nome": "Vegetable tagine",
        "testo": "With zucchini, carrots and saffron, in hotels and restaurants."
      },
      {
        "nome": "Berber bread",
        "testo": "Baked in a communal oven."
      },
      {
        "nome": "Mint tea",
        "testo": "With hospitality."
      }
    ],
    attenzioni: [
      "Check how much the local guide asks before the visit: the tip is agreed.",
      "The heat is strong from May to September.",
      "The area is very isolated: bring cash."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'The Tamnougalt Kasbah in the Draa Valley, Morocco',
    immagine: '/images/marocco/agdz-stock.jpg',
  },
  {
    slug: 'agadir',
    paeseSlug: 'marocco',
    ordine: 5,
    nome: 'Agadir and Taghazout',
    tipologia: ['mare', 'surf'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione: "Taliouine, Morocco's saffron capital, and a surf lesson at Taghazout, one of the best-known surf villages in Morocco.",
    percheAndarci: "The coast after days of desert and kasbahs, with a tasty stop at Taliouine along the road.",
    cosaVedere: ['The old town of Taliouine', 'The historic center of Taroudant'],
    cosaFare: [
      'Buying saffron at Taliouine',
      'Yoga at sunset with Khalid',
      'Surf lesson at Taghazout (see the dedicated experience page)',
    ],
    doveDormire:
      "We spent one night at Hotel Oasis, convenient because it's close to the sea and restaurants. Online reviews are mixed: the location and the buffet breakfast are good, the upkeep of the rooms less so, which several guests describe as dated.\n\nBudget: Hotel Sindibad Agadir, Résidence IGOUDAR · mid-range: Riad Dar Maktoub, Hôtel Riad Salam Agadir · luxury (not over the top): Sofitel Agadir Thalassa Sea & Spa, Hotel Riu Palace Tikida Agadir.",
    doveMangiare: 'Les Blancs (sea-view terrace, Spanish and Mediterranean cooking); lunch in Taghazout after surfing.',
    usciteSerali: 'LOFT, hookah and beers, Arab-club atmosphere.',
    comeArrivare: 'About 2h30 from Agdz to Taliouine, then about 3h to Agadir.',
    comeSpostarsi: 'Private van, on foot in Taghazout.',
    periodoMigliore: 'early May, good conditions for starting to surf',
    costi: 'Surf lesson 250 MAD per person (showers 10 MAD).',
    erroriDaEvitare: ["Buying saffron at the roadside shops aimed at passing tourists: in Taliouine it's best to go only to the places the guide recommends"],
    miaEsperienza:
      "A different morning from the rest of the trip: after days of desert and kasbahs, surfing at Taghazout was a plunge, literally too, into a completely different world.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Taliouine and saffron",
        "testo": "The village at the center of Moroccan saffron production. You can see how the flower is picked and sorted.",
        "come": "From Agdz about 2.5 hours by road.",
        "quando": "October-November for the harvest.",
        "tempo": "1 hour",
        "consiglio": "Buy saffron at cooperatives and recommended places, not at tourist shops for passers-by."
      },
      {
        "nome": "Taghazout and surfing",
        "testo": "The fishing village that became Morocco's surf capital, with steady waves and schools for beginners.",
        "come": "From Agadir 30 minutes by taxi or bus; schools and rental on site.",
        "quando": "Early May: ideal waves to start.",
        "tempo": "Half a day",
        "costo": "Lesson 250 MAD per person, showers 10 MAD (from my trip)",
        "consiglio": "Stop for lunch in Taghazout after the lesson."
      },
      {
        "nome": "Taroudant",
        "testo": "A small town inside almost intact red earth walls, about 7 km long, which is why it is called 'little Marrakech'. It has two souks, a Berber one and an Arab one, far less touristy than those in Marrakech, and a horse-drawn carriage ride along the walls is a good way to see it.",
        "come": "From Taliouine about 1 hour, towards Agadir.",
        "quando": "Afternoon.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Agadir Oufella Kasbah",
        "testo": "The walls of the old kasbah on the hill above the harbour, the only part of the city that survived the 1960 earthquake. On its side are the Arabic words 'God, Homeland, King', lit at night, and from the top you see the whole bay.",
        "come": "From the seafront by taxi or by the cable car that goes up from the harbour area.",
        "quando": "Sunset, with the light on the bay.",
        "tempo": "1 hour",
        "consiglio": "Go up by cable car and come down by taxi or on foot along the road, looking at the fishing port."
      },
      {
        "nome": "Souk El Had",
        "testo": "Agadir's big covered market, inside brick walls with a dozen gates: fruit, spices, argan oil, pottery and clothes, with far more Moroccans than tourists. It is the right place to buy argan and amlou at normal prices.",
        "come": "By taxi from the seafront, about 10 minutes.",
        "quando": "Morning. Closed on Mondays; Sunday is the busiest day.",
        "tempo": "1.5-2 hours",
        "consiglio": "The fruit and vegetable stalls are the liveliest part: mint tea in the cafes inside costs very little."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Taliouine, saffron, then Taroudant and arrival in Agadir, yoga at sunset",
          "Day 2: surf at Taghazout, lunch, dinner at Les Blancs"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agadir",
        "perChi": "those who want beach and services",
        "testo": "A modern city rebuilt after the 1960 earthquake, with a seafront and hotels."
      },
      {
        "nome": "Taghazout",
        "perChi": "those who want surf and atmosphere",
        "testo": "A village with surf schools and guesthouses, relaxed."
      }
    ],
    sapori: [
      {
        "nome": "Grilled fish",
        "testo": "In the restaurants of Agadir harbor."
      },
      {
        "nome": "Argan oil and amlou",
        "testo": "Almond paste, argan oil and honey, spread on bread."
      },
      {
        "nome": "Fish tagine",
        "testo": "On the coast, with vegetables and spices."
      },
      {
        "nome": "Saffron",
        "testo": "In teas and dishes, bought at Taliouine."
      }
    ],
    attenzioni: [
      "Saffron sold in tourist shops is often adulterated, buy only in recommended places.",
      "The current at Taghazout can be strong: follow the instructor's directions.",
      "The sun on the coast burns even with a cloudy sky."
    ],
    // GUIDA-END
    esperienzeSlugs: ['surf-taghazout'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'A surf lesson on the waves of Taghazout, Morocco',
    immagine: '/images/marocco/agadir-stock.jpg',
  },
  {
    slug: 'essaouira',
    paeseSlug: 'marocco',
    ordine: 6,
    nome: 'Essaouira',
    tipologia: ['città', 'mare', 'relax'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione: "The fortified port town on the Atlantic, with a white-and-blue medina among the most beautiful in Morocco.",
    percheAndarci: "For an atmosphere different from the rest of the trip, with shopping that's better value than in Marrakech and a bit of relaxation.",
    cosaVedere: ['The white-and-blue medina of Essaouira', 'The fortified port', 'The Ranch de Diabat'],
    cosaFare: [
      'Guided tour of Essaouira (1h30)',
      'Hammam at Kenza (see the dedicated experience page)',
      'Quad adventure at the Ranch de Diabat, with a possible horseback ride',
    ],
    doveDormire:
      "We spent one night at Maison De Sud, right in the old town, a few steps from the souks and the port: a house with character, with handcrafted decor and, according to the reviews, very attentive staff. The rooms are small, and at night you hear the calls to prayer, which is normal in the heart of the medina.\n\nBudget: La Smala, Riad Al Madina · mid-range: Lyon Mogador, Riad Chakir Mogador · luxury (not over the top): Heure Bleue Palais, Riad Dar Maya.",
    doveMangiare: 'Triskala, La Table by Madada or Des Rêves.',
    comeArrivare: 'About 2h30 from Agadir via Taghazout.',
    comeSpostarsi: 'On foot in the medina.',
    periodoMigliore: 'late afternoon, for the guided tour in the best light',
    costi: 'Hammam 250 MAD per person; shopping generally cheaper than in Marrakech.',
    erroriDaEvitare: [],
    miaEsperienza:
      "After days of van, desert and sightseeing, the hour at the hammam at Kenza was one of the few truly relaxing moments of the trip, and the white-and-blue medina of Essaouira remains one of the loveliest atmospheres in Morocco.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Essaouira Medina",
        "testo": "The white and blue city ringed by 18th-century walls, UNESCO heritage, with pedestrian alleys and woodworking shops in thuya.",
        "come": "On foot: enter by Bab Doukkala or from the harbor.",
        "quando": "Late afternoon, with better light.",
        "tempo": "2-3 hours",
        "consiglio": "The guided tour of about an hour and a half gives good orientation."
      },
      {
        "nome": "Harbor and Skala",
        "testo": "The harbor with the fishermen's blue boats and the ramparts with cannons, where you see the gulls and the fish stalls.",
        "come": "On foot from the medina.",
        "quando": "Morning, when the trawlers arrive, and at sunset.",
        "tempo": "1 hour"
      },
      {
        "nome": "Hammam",
        "testo": "A steam bath with scrub and massage in the Moroccan tradition.",
        "come": "Book ahead at a venue in the medina.",
        "quando": "Afternoon.",
        "tempo": "1-1.5 hours",
        "costo": "250 MAD per person at Kenza (from my trip)",
        "consiglio": "Perfect after days of van and visits."
      },
      {
        "nome": "Ranch de Diabat",
        "testo": "Horse and quad rides on the sandy coast near the remains of the old Diabat castle.",
        "come": "From the medina by taxi, about 10 minutes.",
        "quando": "Late afternoon.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Beach and kitesurfing",
        "testo": "The long sandy bay south of the medina, swept by the trade winds for much of the year: this is why Essaouira is one of Africa's kitesurfing and windsurfing capitals. Swimming is limited, the water is cold; you walk as far as Diabat with the island of Mogador in front.",
        "come": "On foot from the medina, leaving by Bab Sbaa to the south. Kite schools and rentals on the beach.",
        "quando": "Afternoon, when the wind is steadier. It blows harder in summer.",
        "tempo": "Half a day",
        "consiglio": "For a kite lesson choose a licensed school with certified instructors, and ask what the insurance covers."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: arrival, medina and harbor, fish dinner",
          "Day 2: morning at the market, hammam, afternoon at Diabat"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "those who want to be inside the city",
        "testo": "Riads and guesthouses in the white alleys, very close to everything. Small rooms, but the atmosphere is unique."
      },
      {
        "nome": "Seafront",
        "perChi": "those who want beach and wind",
        "testo": "Modern hotels facing the sea, larger and with parking."
      }
    ],
    sapori: [
      {
        "nome": "Grilled fish at the harbor",
        "testo": "You choose at the counter and the nearby restaurants cook it."
      },
      {
        "nome": "Fish tagine",
        "testo": "With vegetables and spices."
      },
      {
        "nome": "Argan oil",
        "testo": "Made in women's cooperatives, for cooking and cosmetics."
      },
      {
        "nome": "Almond sweets",
        "testo": "From the pastry makers of the medina."
      }
    ],
    attenzioni: [
      "The strong wind (trade winds) often makes the seafront cold: bring a jacket even in summer.",
      "Shopping in Essaouira generally costs less than in Marrakech, but the price is still negotiated.",
      "Avoid unofficial guides in the street."
    ],
    // GUIDA-END
    esperienzeSlugs: ['hammam-essaouira'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'The white-and-blue medina of the port town of Essaouira, Morocco',
    immagine: '/images/marocco/essaouira-stock.jpg',
  },
]
