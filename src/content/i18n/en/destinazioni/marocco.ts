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
        "testo": "The heart of the medina: by day orange-juice stalls, water sellers and snake charmers, by evening storytellers, musicians and dozens of open-air kitchens. UNESCO proclaimed it intangible heritage in 2001 and inscribed it on the List in 2008.",
        "come": "Reached on foot from the medina; taxis stop at the edges. You walk among the stalls.",
        "quando": "At sunset and in the evening, when the kitchens open.",
        "tempo": "1-2 hours",
        "consiglio": "Eat at the numbered stalls with posted prices and choose those full of locals."
      },
      {
        "nome": "Ben Youssef Madrasa",
        "testo": "The Koranic school first built in the Marinid era in the 14th century and rebuilt by the Saadian sultan Abdallah al-Ghalib, finished in 1564-65: it was then the largest in the Maghreb and housed up to 800 students. The courtyard has a large pool in the centre and walls of zellige, stucco and carved cedar. Around it, on two floors, are about 130 student cells.",
        "come": "On foot in the northern medina, from Jemaa el-Fna.",
        "quando": "Morning at opening, to have the courtyards empty.",
        "tempo": "45 minutes",
        "costo": "50 MAD (from my trip)"
      },
      {
        "nome": "Bahia Palace",
        "testo": "The palace begun in the 1860s by the grand vizier Si Musa and enlarged by his son Ba Ahmed until 1900: about 150 rooms, courtyards, gardens and painted cedar ceilings.",
        "come": "On foot from the Mellah or Jemaa el-Fna.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "costo": "70 MAD (from my trip)"
      },
      {
        "nome": "Saadian Tombs",
        "testo": "The Saadian royal necropolis, enlarged above all by Ahmad al-Mansur (1578-1603), with Carrara marble columns, muqarnas and zellige. The Hall of the Twelve Columns is al-Mansur's tomb.",
        "come": "Behind the Kasbah Mosque, on foot from Jemaa el-Fna.",
        "quando": "Early morning: in the afternoon a queue forms.",
        "tempo": "30-45 minutes",
        "costo": "70 MAD (from my trip)"
      },
      {
        "nome": "Jardin Majorelle",
        "testo": "The one-hectare botanical garden created by the painter Jacques Majorelle from 1923, with the cobalt blue that bears his name; in the 1980s Yves Saint Laurent and Pierre Bergé bought and restored it. The villa houses the Pierre Bergé Museum of Berber Arts.",
        "come": "Taxi from the medina, in the Guéliz district. Tickets online only, on the official site tickets.jardinmajorelle.com.",
        "quando": "Garden open daily 8am-5:30pm, last entry 5pm; Berber museum 8:30am-5pm (2026). Best at opening.",
        "tempo": "1-1.5 hours",
        "costo": "150 MAD (from my trip)",
        "consiglio": "Buy tickets only on the official site: those bought elsewhere do not give access.",
        "url": "https://www.jardinmajorelle.com/"
      },
      {
        "nome": "Yves Saint Laurent Museum",
        "testo": "Opened in 2017 a few steps from the Jardin Majorelle, it shows rotating selections of the designer's clothes, sketches and photographs; he had a home in Marrakech. There is also a temporary exhibition hall.",
        "come": "On foot from the Jardin Majorelle. Tickets on the official site tickets.jardinmajorelle.com.",
        "quando": "Open every day except Wednesday, 10am-6pm, last entry 5:30pm (2026).",
        "tempo": "1 hour",
        "url": "https://www.museeyslmarrakech.com/",
        "consiglio": "Pair it with the Majorelle on the same morning, booking both in advance."
      },
      {
        "nome": "Koutoubia Mosque",
        "testo": "The Almohad mosque built between 1158 and 1195, with a minaret about 77 metres high that is the city's landmark and probably inspired the Giralda in Seville. It is closed to non-Muslims; on the esplanade you see the remains of the first mosque, begun in 1147.",
        "come": "On foot from Jemaa el-Fna, heading west.",
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
      "In the souqs haggle starting well below the first price.",
      "Photos of the charmers and musicians in Jemaa el-Fna: you pay, agree beforehand.",
      "The Jardin Majorelle sells tickets online only: do not turn up without one."
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
        "testo": "The residence of the Glaoui clan, begun in 1860 on the old caravan route over the Atlas. Much of the palace is in ruins and the 2023 earthquake also hit the restored part; the reception rooms have zellige, stucco and painted cedar ceilings.",
        "come": "From Marrakech over the Tizi n'Tichka pass; visited with a local guide. Ask beforehand which rooms are open.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "The contrast between the mud outside and the decorated interiors is the surprise of the visit."
      },
      {
        "nome": "Aït Benhaddou Ksar",
        "testo": "The fortified mudbrick village on the Ounila river, UNESCO World Heritage since 1987, a set for films from \"Lawrence of Arabia\" to \"Gladiator\". You climb to the top for the view over the valley.",
        "come": "By car from Telouet; from the modern village you cross the river on the footbridge and climb between the houses.",
        "quando": "Morning, for the best light on the facade and no heat.",
        "tempo": "1-1.5 hours"
      },
      {
        "nome": "Taourirt Kasbah in Ouarzazate",
        "testo": "The kasbah enlarged by the Glaoui in the 19th century in the centre of Ouarzazate, where the Draa and Dadès valleys meet. Part of it is restored and open, with decorated rooms and reed ceilings; other parts are still lived in. It was damaged by the 2023 earthquake.",
        "come": "In central Ouarzazate. Visit on your own or with a guide at the entrance.",
        "quando": "Late afternoon, on the way to the valleys. Hours on site.",
        "tempo": "45 minutes",
        "consiglio": "The town's film studios are only for film lovers: the kasbah is more interesting."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Leave Marrakech, Tizi n'Tichka pass",
          "Telouet kasbah",
          "Lunch along the way",
          "Ksar of Aït Benhaddou"
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
        "testo": "A nearby town, with hotels in every price range and restaurants."
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
        "testo": "A canyon in the High Atlas: in the last 600 metres the smooth walls rise to about 160 metres and the floor narrows to around ten metres. You walk along the bottom beside the stream.",
        "come": "By car on the road towards Merzouga; you stop in a car park and walk.",
        "quando": "Morning, before the groups.",
        "tempo": "30 minutes"
      },
      {
        "nome": "Erg Chebbi and the night in the desert",
        "testo": "Dunes up to about 150 metres high, stretching some thirty kilometres, near Merzouga. You ride a camel to the tented camp, have dinner, sleep under an unlit sky and return at dawn.",
        "come": "The camel ride leaves from the village to the camp.",
        "quando": "Sunset and dawn; the best season is October to April.",
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
        "testo": "A village on the edge of Erg Chebbi linked to Gnawa music: in the music houses they play drums and qraqeb, the iron castanets, and serve tea. In summer it hosts a three-night Gnawa festival.",
        "come": "By car or 4x4 from Merzouga. It is often a stop on jeep tours around Erg Chebbi.",
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
        "come": "By car along the Draa valley.",
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
        "testo": "The main town of the Draa valley. On the way out there is the mural that replaced the old \"Tombouctou 52 jours\" sign, the time caravans took to reach Timbuktu. A little further south is Tamegroute, with the zawiya library and glazed pottery.",
        "come": "From Agdz south along the valley. Tamegroute is a little further on.",
        "quando": "Morning for Tamegroute and the potters' workshops.",
        "tempo": "Half a day",
        "consiglio": "In the Tamegroute library the books can only be looked at on site; the potters' kilns are worth more than the small local dunes."
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
        "testo": "The produce of the valley's palm groves."
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
      "The heat is intense in summer.",
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
        "testo": "The village famous for saffron, among the world's main exporters. In autumn, usually in November, it holds the international saffron festival.",
        "come": "By car from Agdz, on the road towards Taroudant.",
        "quando": "Autumn, in the flowering season.",
        "tempo": "1 hour",
        "consiglio": "Buy saffron at cooperatives and recommended places, not at tourist shops for passers-by."
      },
      {
        "nome": "Taghazout and surfing",
        "testo": "The fishing village about 19 km north of Agadir that became one of Morocco's surf spots, with schools for beginners; just north is Anchor Point, with its long right-handers.",
        "come": "From Agadir by taxi or bus; schools and rental on site.",
        "quando": "The best conditions run from September to April; for beginners the school and the day matter most.",
        "tempo": "Half a day",
        "costo": "Lesson 250 MAD per person, showers 10 MAD (from my trip)",
        "consiglio": "Stop for lunch in Taghazout after the lesson."
      },
      {
        "nome": "Taroudant",
        "testo": "A small town inside earthen walls 6 to 8 km long, with bastions and nine gates still in use. It has two souqs near the main squares, far less touristy than Marrakech's, and is nice to tour by carriage along the walls.",
        "come": "By car from Taliouine, towards Agadir.",
        "quando": "Afternoon.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Agadir Oufella Kasbah",
        "testo": "The walls of the old kasbah on the hill above the port, destroyed by the 1960 earthquake together with the old town inside it. From the top you see the whole bay.",
        "come": "By taxi or by the cable car running since 2022, which climbs about 1.7 km from the Tildi bridge.",
        "quando": "Sunset, with the light on the bay.",
        "tempo": "1 hour",
        "consiglio": "Go up by cable car and come down by taxi or on foot, looking at the fishing port."
      },
      {
        "nome": "Souk El Had",
        "testo": "Agadir's big covered market, inside walls with many gates: fruit, spices, argan oil, ceramics and clothes, with far more Moroccans than tourists. It is the right place to buy argan and amlou at normal prices.",
        "come": "By taxi from the seafront.",
        "quando": "Morning. Closed on Mondays; usually open 9am-6pm (2026), but individual stalls keep their own hours.",
        "tempo": "1.5-2 hours",
        "consiglio": "The fruit and vegetable stalls are the liveliest part."
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
        "testo": "The white-and-blue town built from 1760 by order of Sultan Mohammed III, with walls and sea bastions, UNESCO World Heritage since 2001. Pedestrian lanes and thuya-wood carving workshops.",
        "come": "On foot: you enter through the main gates or from the port.",
        "quando": "Late afternoon, with better light.",
        "tempo": "2-3 hours",
        "consiglio": "A guided walking tour gives you a good sense of direction."
      },
      {
        "nome": "Harbor and Skala",
        "testo": "The port with the fishermen's blue boats and the Sqala, the bastions with cannons also used as a Game of Thrones set, with gulls and fish stalls.",
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
        "testo": "Horse and quad rides along the sandy coast towards Diabat, about 5 km south, near the ruins of Bordj El Berod.",
        "come": "By taxi from the medina.",
        "quando": "Late afternoon.",
        "tempo": "1-2 hours"
      },
      {
        "nome": "Beach and kitesurfing",
        "testo": "The long sandy bay south of the medina, swept by strong trade winds: that is why kitesurfers and windsurfers love it. Few people swim, the water is cold; you walk to Diabat with Mogador island in front.",
        "come": "On foot from the medina heading south. Kite schools and rental on the beach.",
        "quando": "Afternoon, when the wind is steadier.",
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
  {
    slug: 'chefchaouen',
    paeseSlug: 'marocco',
    ordine: 7,
    nome: 'Chefchaouen',
    tipologia: ['città', 'montagna'],
    giorniConsigliati: '2 nights',
    visitataPersonalmente: false,
    introduzione:
      'The blue city in the Rif mountains, founded in 1471 as a fortress against the Portuguese. A small medina, with houses painted blue, the kasbah on the square and mountains all around.',
    percheAndarci:
      "To walk the blue medina at dawn, while it's still empty, and watch the sunset from the Spanish Mosque. It's also a quieter break between Tangier and Fez.",
    cosaVedere: [
      'The blue medina',
      'Outa el-Hammam square and the Great Mosque',
      'The kasbah, now a museum',
      'The Ras el-Ma spring',
      'The Spanish Mosque and the view over the town',
    ],
    cosaFare: ['Photographing the alleys at dawn', 'Climbing to the Spanish Mosque at sunset', 'A day in Akchour, among gorges and waterfalls'],
    comeArrivare:
      'There is no railway. CTM buses from Tangier (about 110 km) and from Fez (about 200 km, 4-5 hours), with tickets on booking.ctm.ma; otherwise a car with driver.',
    comeSpostarsi: 'On foot: the medina is small and all uphill.',
    periodoMigliore: 'spring and fall',
    erroriDaEvitare: [
      'Accepting cannabis offered on the street: in Morocco drugs of any kind are punished with prison',
      'Arriving for just an afternoon: the medina is at its best early in the morning and in the evening, once the day-trip groups have left',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'The blue medina',
        testo:
          'Uphill alleys and houses painted in many shades of blue. There are several explanations: to keep mosquitoes away, to recall the sky, or to attract tourists, as some locals say. None is certain. The town grew with the Andalusians, Moriscos and Sephardic Jews who came from Spain.',
        come: 'On foot, with no destination. The riad usually sends someone to pick up your luggage.',
        quando: 'At dawn, before the day-trip groups arrive.',
        tempo: 'half a day',
        consiglio: "Many doors and stairways belong to private homes: take photos without going in and without posing children.",
      },
      {
        nome: 'Outa el-Hammam square and the kasbah',
        testo:
          'The main square of the medina, with its cafés, the Great Mosque and the kasbah, the old fortress now turned into a museum.',
        come: "In the center of the medina. Non-Muslims don't enter the Great Mosque.",
        quando: 'In the evening, when the square fills up.',
        tempo: '1-2 hours',
      },
      {
        nome: 'Ras el-Ma',
        testo: 'The spring at the foot of the mountain, just outside the medina, where the water flows down toward the town.',
        come: 'On foot from the square, heading up toward the east gate of the medina.',
        quando: 'Morning or late afternoon, before climbing to the Spanish Mosque.',
        tempo: '30 minutes',
      },
      {
        nome: 'Spanish Mosque',
        testo:
          "The mosque built in the 1920s, during the Spanish protectorate, on the hill facing the town. Today it's mostly a viewpoint over all of Chefchaouen.",
        come: 'On foot from Ras el-Ma, on an uphill trail.',
        quando: 'At sunset.',
        tempo: '1 hour with the climb',
        consiglio: 'Have your phone flashlight ready for the walk down in the dark.',
      },
      {
        nome: 'Akchour',
        testo: "A valley about 30 km from Chefchaouen, with the river's gorges and waterfalls and trails among the rocks. It's the day trip for anyone who wants nature after the medina.",
        come: 'Car with driver or taxi from Chefchaouen.',
        quando: 'In spring and fall.',
        tempo: 'a full day',
        consiglio: 'Hiking shoes: the trails cross rocks and water.',
      },
    ],
    programmi: [
      {
        titolo: '1 day',
        tappe: ['Morning: the medina at dawn', 'Kasbah and Outa el-Hammam square', 'Afternoon: Ras el-Ma', 'Sunset from the Spanish Mosque'],
      },
      {
        titolo: '2 days',
        tappe: ['Day 1: as above', 'Day 2: Akchour for the day with a driver'],
      },
    ],
    zone: [
      {
        nome: 'Medina',
        perChi: 'anyone who wants the blue city right outside the door',
        testo: 'Riads and small hotels among the alleys. Lots of stairs and slopes with luggage.',
      },
      {
        nome: 'Outside the walls',
        perChi: 'anyone arriving by car',
        testo: 'Bigger hotels, easier for parking, a few minutes on foot from the medina.',
      },
    ],
    sapori: [
      { nome: 'Rif goat cheese', testo: 'The fresh cheese from the surrounding mountains, in the medina restaurants.' },
      { nome: 'Tagine', testo: 'Meat or chicken cooked in the clay pot, as in the rest of Morocco.' },
      { nome: 'Mint tea', testo: 'Served everywhere, hot and very sweet, in the cafés on the square.' },
    ],
    attenzioni: [
      'People offering cannabis on the street: in Morocco possession and use are punished with prison, tourists included.',
      'Fake guides offering to take you to the Spanish Mosque: the trail is easy and you can do it alone.',
      'Photos of people: ask first.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: 'The blue-painted alleys of the Chefchaouen medina, in the Rif mountains, Morocco',
  },
  {
    slug: 'fes',
    paeseSlug: 'marocco',
    ordine: 8,
    nome: 'Fez',
    tipologia: ['città', 'cultura', 'città imperiale'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: false,
    introduzione:
      'Founded in 789 by Idris I, capital until 1912. The old city, Fez el-Bali, has been a UNESCO World Heritage Site since 1981 and is one of the largest car-free urban areas in the world.',
    percheAndarci:
      "For the largest and oldest medina in Morocco, with the Marinid madrasas, the Qarawiyyin and the tanneries. It's the point where this itinerary splits from the desert one.",
    cosaVedere: [
      'Bab Bou Jeloud',
      'Bou Inania Madrasa',
      'Al-Attarine Madrasa',
      'The Qarawiyyin (from outside only)',
      'The Chouara tanneries',
      'Fez Jdid, the Mellah and the Royal Palace (from outside)',
      'The Jnan Sbil gardens',
    ],
    cosaFare: ['A morning with an official guide in Fez el-Bali', 'Watching the tanneries from the terraces', 'Sunset over the medina from the Marinid Tombs'],
    comeArrivare:
      'By ONCF train from Meknes, Rabat and Casablanca; by CTM bus from Chefchaouen; Fès-Saïss airport with flights from Europe.',
    comeSpostarsi: 'On foot in the medina, by petit taxi between the medina, Fez Jdid and the station.',
    periodoMigliore: "spring and fall; summer is very hot",
    erroriDaEvitare: [
      'Exploring alone on the first day without an offline map: the medina is a maze',
      'Following people who offer to guide you on the street: official guides carry a badge',
      "Booking a riad without asking where the taxi drops you: cars can't enter the medina",
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Bab Bou Jeloud and the Talaa Kebira',
        testo:
          'The gate decorated with blue tiles through which you enter Fez el-Bali. From here the Talaa Kebira runs downhill, the main street of the medina, among workshops, food stalls and loaded mules.',
        come: 'Petit taxi to Bab Bou Jeloud, then on foot downhill.',
        quando: 'Morning, when the shops open.',
        tempo: 'half an hour, then you carry on into the medina',
      },
      {
        nome: 'Bou Inania Madrasa',
        testo:
          "Commissioned by the Marinid sultan Abu Inan and built between 1350 and 1355. It's the only madrasa in Morocco that also served as a Friday mosque, with its own minaret. Opposite is the old water clock from 1357, which no longer works.",
        come: "Along the Talaa Kebira, a few minutes past Bab Bou Jeloud. The prayer hall is not open to non-Muslims, but you can see it from the courtyard.",
        quando: 'Early morning. Outside prayer times.',
        tempo: '30-45 minutes',
      },
      {
        nome: 'Al-Attarine Madrasa',
        testo:
          "A small madrasa built between 1323 and 1325 for the Marinid sultan Abu Said Uthman II, with a courtyard covered in zellige, stucco and carved cedar. It's open as a historic site.",
        come: 'In the heart of the medina, next to the Qarawiyyin.',
        quando: 'Morning.',
        tempo: '30 minutes',
      },
      {
        nome: 'The Qarawiyyin',
        testo:
          "The mosque founded in 857-859 by Fatima al-Fihri, which later became one of the oldest institutions of learning still active in the world. It's the center of the medina.",
        come: "Non-Muslims don't go in: through the open doors you can see part of the courtyard and the interior.",
        tempo: '15 minutes',
        consiglio: "Don't linger in front of the doors during prayer.",
      },
      {
        nome: 'Chouara tanneries',
        testo:
          "The largest tannery in the medina, with stone vats full of dye where hides are worked as they have been for centuries. Restored a few years ago and left in place. The smell is strong.",
        come: 'You watch from above, from the terraces of the leather shops around it, which ask you to pass through the store.',
        quando: 'In the morning, when the vats are in use.',
        tempo: '30 minutes',
        consiglio: "There's no obligation to buy. A small tip for whoever takes you up to the terrace is normal.",
      },
      {
        nome: 'Fez Jdid and the Mellah',
        testo:
          'The new city built by the Marinids in the 13th century, with the great gates of the Royal Palace and the Mellah, the old Jewish quarter, with houses whose balconies face the street.',
        come: 'Petit taxi, or on foot from Bab Bou Jeloud through Jnan Sbil. The Royal Palace can only be seen from outside.',
        quando: 'Afternoon.',
        tempo: '2 hours',
      },
      {
        nome: 'Jnan Sbil',
        testo: 'The historic gardens between Fez el-Bali and Fez Jdid, with avenues, pools and trees: the shady break of the day.',
        come: 'On foot from Bab Bou Jeloud.',
        tempo: '30-45 minutes',
      },
      {
        nome: 'The Marinid Tombs',
        testo: 'The ruins on the hills north of the medina. The reason to go up is the view: all of Fez el-Bali below, with its roofs and minarets.',
        come: 'By petit taxi. Better not to walk back alone after dark.',
        quando: 'Before sunset.',
        tempo: '1 hour',
      },
    ],
    programmi: [
      {
        titolo: '1 day',
        tappe: [
          'Morning with an official guide: Bab Bou Jeloud, Bou Inania Madrasa, Talaa Kebira',
          'Al-Attarine Madrasa and the Qarawiyyin from the doors',
          'Afternoon: Chouara tanneries',
          'Sunset from the Marinid Tombs',
        ],
      },
      {
        titolo: '2 days',
        tappe: ['Day 1: as above', 'Day 2: Fez Jdid, the Mellah and Jnan Sbil, a free afternoon in the souks or at a hammam'],
      },
      {
        titolo: '3 days',
        tappe: ['Days 1-2: as above', 'Day 3: Volubilis, Moulay Idriss and Meknes for the day with a car and driver'],
      },
    ],
    zone: [
      {
        nome: 'Fez el-Bali',
        perChi: 'anyone who wants to sleep inside the medina',
        testo: 'Riads in the alleys, quiet inside and chaotic outside. Pick a riad near a gate taxis can reach, such as Bab Bou Jeloud.',
      },
      {
        nome: 'Ville Nouvelle',
        perChi: 'anyone arriving by train or wanting comfort',
        testo: 'The modern city, with chain hotels and restaurants, close to the station. You need a taxi for the medina.',
      },
    ],
    sapori: [
      { nome: 'Pastilla', testo: 'Crisp pastry with pigeon or chicken, almonds and cinnamon, one of the specialties of Fez.' },
      { nome: 'Harira', testo: 'The lentil and tomato soup, found everywhere, which breaks the fast in the evening during Ramadan.' },
      { nome: 'Street food on the Talaa Kebira', testo: 'Bread, fritters and sweets at the stalls along the main street.' },
      { nome: 'Mint tea', testo: 'Offered in every shop and riad.' },
    ],
    attenzioni: [
      'Fake guides offering themselves on the street: ask to see the official badge before setting off with anyone.',
      'Whoever says a street is closed wants to take you to a shop: check the map.',
      'Pickpockets in the crowds of the souks: backpack in front and no cash on show.',
      "At the tanneries the terraces belong to shops: you look, you say thanks, you don't have to buy.",
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: 'The rooftops of the Fez el-Bali medina seen from above, with the minarets, Morocco',
  },
  {
    slug: 'meknes-volubilis',
    paeseSlug: 'marocco',
    ordine: 9,
    nome: 'Meknes and Volubilis',
    tipologia: ['città', 'storia', 'città imperiale', 'archeologia'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: false,
    introduzione:
      'Meknes is the city of Moulay Ismail, who made it his capital and reigned from 1672 to 1727: a UNESCO World Heritage Site since 1996. About 30 km away are the Roman ruins of Volubilis, a UNESCO World Heritage Site since 1997, and the holy town of Moulay Idriss.',
    percheAndarci:
      "For Moulay Ismail's gates and granaries, in a city calmer than Fez, and for the mosaics of a Roman city on the edge of the empire.",
    cosaVedere: [
      'Bab Mansour and el-Hedim square',
      'The Mausoleum of Moulay Ismail',
      'The Heri es-Souani and the Agdal basin',
      'The Bou Inania Madrasa of Meknes',
      'Volubilis',
      'Moulay Idriss Zerhoun',
    ],
    cosaFare: ['Volubilis early in the morning', 'A walk on your own through the Meknes medina'],
    comeArrivare: 'By ONCF train from Fez (about 40 minutes) or from Rabat (about 2 and a half hours). Meknes has two stations.',
    comeSpostarsi: 'On foot in the medina, petit taxi in town, taxi or car with driver for Volubilis and Moulay Idriss.',
    periodoMigliore: 'spring and fall; at Volubilis the summer sun is fierce',
    erroriDaEvitare: [
      'Going to Volubilis in the middle of a summer day: the site has almost no shade',
      'Calling the Heri es-Souani stables: it was a granary, as the historical sources explain',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Volubilis',
        testo:
          'Already inhabited in the 3rd century BC, it was the capital of the kingdom of Mauretania and then a Roman city from 44 AD. By the late 2nd century it had about 20,000 inhabitants and lived on olive oil. Rome left it around 285. What remains: the Decumanus Maximus, the basilica, the Capitol, the Arch of Caracalla from 217 and the mosaics in the houses, like the Labours of Hercules and Orpheus.',
        come: 'About 30 km from Meknes by taxi or car with driver; about 95 km from Fez. You visit on foot along the site route.',
        quando: 'Early morning: the site is open and has almost no shade.',
        tempo: '2 hours',
        consiglio: 'Hat, water and closed shoes. A guide at the entrance helps you read the ruins.',
      },
      {
        nome: 'Moulay Idriss Zerhoun',
        testo:
          "The holy town built around the mausoleum of Idris I, who founded the Idrisid dynasty at Volubilis in 787-788 and was killed there in 791. It's a few kilometers from the ruins, on the hills.",
        come: "With the same taxi as Volubilis. The mausoleum is a pilgrimage site and is generally not open to non-Muslims.",
        quando: 'After Volubilis, late in the morning.',
        tempo: '1 hour',
        consiglio: 'Climb to a viewpoint above the town to see it from above.',
      },
      {
        nome: 'Bab Mansour and el-Hedim square',
        testo:
          'The monumental gate begun by Moulay Ismail and finished in 1732 by his son Moulay Abdallah, named after Mansour al-Alj, a Christian convert to Islam. In front is el-Hedim square, whose name means "rubble": it comes from the demolitions carried out to open it.',
        come: 'On foot, at the entrance to the medina.',
        quando: 'Late afternoon, when the square comes alive.',
        tempo: '30 minutes',
      },
      {
        nome: 'Mausoleum of Moulay Ismail',
        testo: "The sultan's tomb, arranged between 1727 and 1729. It's a religious site also open to visitors.",
        come: 'On foot from Bab Mansour, in the imperial city. Covering clothes and silence.',
        tempo: '30 minutes',
      },
      {
        nome: 'Heri es-Souani',
        testo:
          "Moulay Ismail's huge granary and storehouse, with 22 rows of arches that once held up a vault that has since collapsed. It's often called a stable, but it was a granary. It sits next to the Agdal basin, part of the palace's water system.",
        come: "Petit taxi from Bab Mansour: it's far on foot.",
        tempo: '45 minutes',
      },
      {
        nome: 'Bou Inania Madrasa of Meknes',
        testo: "The Marinid madrasa begun around 1335-36 by Sultan Abu al-Hasan and named after his son Abu Inan. It's open to visitors.",
        come: 'In the medina, on foot from el-Hedim.',
        tempo: '30 minutes',
      },
      {
        nome: 'Dar Jamai Museum',
        testo: "A palace from 1882, built by a grand vizier of the sultan, which today houses a museum overlooking el-Hedim square.",
        come: 'On el-Hedim square.',
        tempo: '45 minutes',
      },
    ],
    programmi: [
      {
        titolo: '1 day',
        tappe: ['Morning: Volubilis', 'Late morning: Moulay Idriss', 'Afternoon: Bab Mansour, el-Hedim and the Mausoleum of Moulay Ismail'],
      },
      {
        titolo: '2 days',
        tappe: ['Day 1: Volubilis and Moulay Idriss', 'Day 2: Meknes, with the Heri es-Souani, the madrasa and Dar Jamai'],
      },
    ],
    zone: [
      {
        nome: 'Medina',
        perChi: 'anyone who wants to sleep near el-Hedim',
        testo: 'Riads and guesthouses a few steps from Bab Mansour.',
      },
      {
        nome: 'Ville Nouvelle',
        perChi: 'anyone traveling by train',
        testo: 'Hotels easier to reach from the station; you need a taxi for the medina.',
      },
    ],
    sapori: [
      { nome: 'Olives and oil from the plain', testo: 'The Volubilis and Meknes area has been olive country for two thousand years.' },
      { nome: 'Tagine', testo: 'In the restaurants around el-Hedim.' },
      { nome: 'Harira', testo: 'The lentil soup found everywhere.' },
    ],
    attenzioni: [
      'At Volubilis guides offer themselves at the entrance: agree on price and length before starting.',
      'The taxi to Volubilis and Moulay Idriss should be agreed in advance, with waiting time and return included.',
      'Covering clothes in Moulay Idriss, which is a holy town.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: 'The columns and the Arch of Caracalla among the Roman ruins of Volubilis, near Meknes, Morocco',
  },
  {
    slug: 'rabat',
    paeseSlug: 'marocco',
    ordine: 10,
    nome: 'Rabat (and the Hassan II Mosque in Casablanca)',
    tipologia: ['città', 'cultura', 'città imperiale', 'mare'],
    giorniConsigliati: '1-2 days, plus half a day in Casablanca',
    visitataPersonalmente: false,
    introduzione:
      "Morocco's capital since 1956, at the mouth of the Bou Regreg, facing Salé. A UNESCO World Heritage Site since 2012, for both its old and modern city. A short train ride away is Casablanca, with the Hassan II Mosque.",
    percheAndarci:
      'For the Kasbah of the Udayas on the sea, the Hassan Tower and the Chellah, in a tidy city where you get around without pressure. Then Casablanca for its mosque.',
    cosaVedere: [
      'The Kasbah of the Udayas',
      'The Andalusian Gardens',
      'The Hassan Tower',
      'The Mausoleum of Mohammed V',
      'The Chellah',
      'The Hassan II Mosque in Casablanca',
    ],
    cosaFare: ["The kasbah viewpoint over the river and the Atlantic", 'The guided tour of the Hassan II Mosque'],
    comeArrivare:
      'By ONCF train: Al Boraq from Tangier (about 1 hour 20) and from Casablanca; trains from Meknes and Fez. The stations are Rabat Ville and Rabat Agdal. There is also Rabat-Salé airport.',
    comeSpostarsi: 'On foot and by tram, which has linked Rabat and Salé since 2011.',
    periodoMigliore: 'all year, with spring and fall the most pleasant',
    erroriDaEvitare: [
      "Showing up at the Hassan II Mosque in shorts or sleeveless: you won't get in",
      'Going to the Hassan II Mosque without checking the tour times: there are fewer on Friday',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Kasbah of the Udayas',
        testo:
          'The citadel built by the Almohads around 1150 at the mouth of the Bou Regreg. You enter through the Bab Oudaya gate, built between 1195 and 1199, and walk among the white and blue houses to the viewpoint over Salé and the Atlantic. In the Moulay Ismail pavilion is the National Jewellery Museum, reopened in 2023.',
        come: 'On foot from the medina. Free entry to the kasbah.',
        quando: 'Morning or late afternoon.',
        tempo: '1-1.5 hours',
      },
      {
        nome: 'Andalusian Gardens',
        testo: 'The garden created between 1915 and 1918, during the French protectorate, on the model of the Moorish gardens of al-Andalus, inside the kasbah.',
        come: 'Inside the Kasbah of the Udayas.',
        tempo: '30 minutes',
      },
      {
        nome: 'Hassan Tower and Mausoleum of Mohammed V',
        testo:
          'The Hassan Tower is the never-finished minaret of the great mosque commissioned by the Almohad sultan Yaqub al-Mansur in the 12th century. Opposite stands the Mausoleum of Mohammed V, completed in 1971, where King Hassan II and Prince Abdallah are also buried, with the royal guard at the entrance.',
        come: 'On foot or by tram. The esplanade is open.',
        quando: 'Morning or late afternoon.',
        tempo: '1 hour',
        consiglio: 'Covering clothes, and no photos of the guards without asking.',
      },
      {
        nome: 'Chellah',
        testo:
          'The place where the ruins of the Roman city of Sala and the Marinid necropolis, begun in 1284-85, overlap. The main gate dates from 1339. Storks nest in the trees and on the old minaret. Every year it hosts the Jazz au Chellah festival.',
        come: 'Petit taxi, or on foot from the Hassan Tower.',
        quando: 'Afternoon, when the light is softer.',
        tempo: '1 hour',
      },
      {
        nome: 'Hassan II Mosque (Casablanca)',
        testo:
          "Casablanca's great mosque on the sea, one of the few in Morocco that non-Muslims can visit, only on the guided tour. The tour covers the prayer hall, the minaret hall and the ablution halls.",
        come: 'Al Boraq from Rabat Agdal to Casa Voyageurs, then a taxi. Tickets at the mosque for your time slot.',
        quando:
          'From September 16 to March 14: Saturday to Thursday at 9, 10, 11, 12 and 3 p.m.; Friday at 9, 10 and 3 p.m. From March 15 to September 15 also at 4 p.m. During Ramadan the hours change.',
        tempo: '1 hour',
        costo: '140 MAD for foreign adults (2026)',
        url: 'https://fmh2.ma/',
        consiglio: 'Shoulders and knees covered, no shorts or tank tops. Shoes come off at the entrance.',
      },
    ],
    programmi: [
      {
        titolo: '1 day',
        tappe: ['Morning: Kasbah of the Udayas and Andalusian Gardens', 'Afternoon: Hassan Tower and Mausoleum of Mohammed V', 'Late afternoon: Chellah'],
      },
      {
        titolo: '2 days',
        tappe: ['Day 1: as above', 'Day 2: Al Boraq to Casablanca and the Hassan II Mosque tour'],
      },
    ],
    zone: [
      {
        nome: 'Rabat medina',
        perChi: 'anyone who wants to sleep near the kasbah',
        testo: 'Riads a few minutes from the Kasbah of the Udayas. Calmer than the Fez medina.',
      },
      {
        nome: 'Modern center and Agdal',
        perChi: 'anyone traveling by train',
        testo: 'Hotels close to Rabat Ville and Rabat Agdal stations, with the tram to the medina.',
      },
    ],
    sapori: [
      { nome: 'Atlantic fish', testo: 'Grilled fish in the restaurants toward the port and the river mouth.' },
      { nome: 'Mint tea', testo: 'In the cafés of the kasbah and the medina.' },
    ],
    attenzioni: [
      'At the Hassan II Mosque you can only enter on the guided tour and in covering clothes: online resellers charge more than the ticket at the mosque.',
      'Pickpockets in crowded areas and on the beaches.',
      'Taxis: ask for the meter or agree on the price first.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: 'The Almohad gate of Bab Oudaya and the walls of the Kasbah of the Udayas in Rabat, Morocco',
  },
]
