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
    comeArrivare: "Marrakech Menara Airport (RAK) is about 6 km from the medina, 15-20 minutes by car. Bus L19 runs to Jemaa el-Fna and Guéliz in about 30 minutes (about 30 MAD, cash on board, roughly every half hour from 6am to 11:30pm). Official taxis at the arrivals rank ask about 100-150 MAD by day and more after 8pm: agree the fare before getting in, or ask your riad for a transfer. From Casablanca, ONCF trains take about 3 hours.",
    comeSpostarsi: 'Private van with a guide, on foot in the medina, taxi to the Jardin Majorelle (50 MAD per ride).',
    periodoMigliore: 'early May',
    costi: "Low budget about €40-60 per person per day (simple riad or hostel in the medina, street food and the Jemaa el-Fna stalls, two monuments); mid-range €100-150 (boutique riad, half-day guide, restaurant dinners, hammam); high from €250 up (luxury riad or hotel with pool, top restaurants, private driver). Monuments 50-80 MAD, Jardin Majorelle 150 MAD, city taxis about 50 MAD a ride.",
    erroriDaEvitare: ["Not booking the Jardin Majorelle in advance: entries are capped and it fills up fast during the middle of the day"],
    miaEsperienza:
      "The guided tour was a great way to get my bearings in the medina, but my strongest memory of Marrakech is still Jemaa El-Fna, seen again in the evening after the tour, among snake charmers, musicians and stalls of every kind.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Jemaa el-Fna Square",
        testo: "The heart of the medina: by day orange-juice stalls, water sellers and snake charmers, by evening storytellers, musicians and dozens of open-air kitchens. UNESCO proclaimed it intangible heritage in 2001 and inscribed it on the List in 2008.",
        come: "Reached on foot from the medina; taxis stop at the edges. You walk among the stalls.",
        quando: "At sunset and in the evening, when the kitchens open.",
        tempo: "1-2 hours",
        costo: "free entry",
        orari: "Always open; the open-air food stalls are set up around sunset",
        lat: 31.62583,
        lng: -7.98944,
        consiglio: "Eat at the numbered stalls with posted prices and choose those full of locals.",
      },
      {
        nome: "Ben Youssef Madrasa",
        testo: "The Koranic school first built in the Marinid era in the 14th century and rebuilt by the Saadian sultan Abdallah al-Ghalib, finished in 1564-65: it was then the largest in the Maghreb and housed up to 800 students. The courtyard has a large pool in the centre and walls of zellige, stucco and carved cedar. Around it, on two floors, are about 130 student cells.",
        come: "On foot in the northern medina, from Jemaa el-Fna.",
        quando: "Morning at opening, to have the courtyards empty.",
        tempo: "45 minutes",
        costo: "50 MAD, about €5 (from my trip)",
        lat: 31.63194,
        lng: -7.98619,
      },
      {
        nome: "Bahia Palace",
        testo: "The palace begun in the 1860s by the grand vizier Si Musa and enlarged by his son Ba Ahmed until 1900: about 150 rooms, courtyards, gardens and painted cedar ceilings.",
        come: "On foot from the Mellah or Jemaa el-Fna.",
        quando: "Morning.",
        tempo: "1 hour",
        costo: "70 MAD, about €6.50 (from my trip)",
        lat: 31.62159,
        lng: -7.98223,
      },
      {
        nome: "Saadian Tombs",
        testo: "The Saadian royal necropolis, enlarged above all by Ahmad al-Mansur (1578-1603), with Carrara marble columns, muqarnas and zellige. The Hall of the Twelve Columns is al-Mansur's tomb.",
        come: "Behind the Kasbah Mosque, on foot from Jemaa el-Fna.",
        quando: "Early morning: in the afternoon a queue forms.",
        tempo: "30-45 minutes",
        costo: "70 MAD, about €6.50 (from my trip)",
        lat: 31.6173,
        lng: -7.9887,
      },
      {
        nome: "Jardin Majorelle",
        testo: "The one-hectare botanical garden created by the painter Jacques Majorelle from 1923, with the cobalt blue that bears his name; in the 1980s Yves Saint Laurent and Pierre Bergé bought and restored it. The villa houses the Pierre Bergé Museum of Berber Arts.",
        come: "Taxi from the medina, in the Guéliz district. Tickets online only, on the official site tickets.jardinmajorelle.com.",
        quando: "Garden open daily 8am-5:30pm, last entry 5pm; Berber museum 8:30am-5pm (2026). Best at opening.",
        tempo: "1-1.5 hours",
        costo: "150 MAD, about €14 (from my trip)",
        orari: "Garden daily 8am-5:30pm, last entry 5pm; Berber museum 8:30am-5pm (2026)",
        lat: 31.64278,
        lng: -8.00306,
        url: "https://www.jardinmajorelle.com/",
        consiglio: "Buy tickets only on the official site: those bought elsewhere do not give access.",
      },
      {
        nome: "Yves Saint Laurent Museum",
        testo: "Opened in 2017 a few steps from the Jardin Majorelle, it shows rotating selections of the designer's clothes, sketches and photographs; he had a home in Marrakech. There is also a temporary exhibition hall.",
        come: "On foot from the Jardin Majorelle. Tickets on the official site tickets.jardinmajorelle.com.",
        quando: "Open every day except Wednesday, 10am-6pm, last entry 5:30pm (2026).",
        tempo: "1 hour",
        lat: 31.64254,
        lng: -8.00342,
        url: "https://www.museeyslmarrakech.com/",
        consiglio: "Pair it with the Majorelle on the same morning, booking both in advance.",
      },
      {
        nome: "Koutoubia Mosque",
        testo: "The Almohad mosque built between 1158 and 1195, with a minaret about 77 metres high that is the city's landmark and probably inspired the Giralda in Seville. It is closed to non-Muslims; on the esplanade you see the remains of the first mosque, begun in 1147.",
        come: "On foot from Jemaa el-Fna, heading west.",
        quando: "Sunset, when the minaret takes on colour and the evening call to prayer starts.",
        tempo: "30 minutes",
        costo: "Exterior and gardens free",
        orari: "Exterior and gardens always accessible; mosque closed to non-Muslims",
        lat: 31.62412,
        lng: -7.99354,
      },
      {
        nome: "Medina souks",
        testo: "The maze of covered markets north of Jemaa el-Fna, divided by trade: lanterns and metalwork, leather, babouches, carpets, spices, dyers. Souk Semmarine is the main artery; the further from the square, the more craftsmen you see at work.",
        come: "On foot from Jemaa el-Fna, entering through Souk Semmarine. An offline map saves relying on people offering directions.",
        quando: "Morning, when shops open and it is less crowded; on Friday at midday many shops close for prayers.",
        tempo: "2-3 hours",
        costo: "free entry",
        lat: 31.62792,
        lng: -7.98809,
        consiglio: "Always bargain, starting well below half the asking price, and take your time.",
      },
      {
        nome: "El Badi Palace",
        testo: "The ruins of the great palace the Saadian sultan Ahmad al-Mansur began in 1578, clad in gold, onyx and Italian marble, then stripped by the Alawite sultan Moulay Ismail a century later. What remains is the huge courtyard with pools and orange trees, ramparts topped by storks and, in a pavilion, the Koutoubia minbar.",
        come: "On foot from Place des Ferblantiers, south of the medina.",
        quando: "Late afternoon, when the light warms the walls and you can climb the ramparts.",
        tempo: "1 hour",
        lat: 31.6183,
        lng: -7.9858,
        consiglio: "Climb to the terraces for the view over the rooftops and the Atlas.",
      },
      {
        nome: "Le Jardin Secret",
        testo: "A 16th-century riad in the heart of the medina restored with two gardens, a four-part Islamic one and an exotic one, fed by the ancient khettara water system. A quiet spot steps from the souks, with a tower looking over the medina rooftops and the Atlas.",
        come: "On foot from the souks, on rue Mouassine.",
        quando: "In the hottest hours, as a break from the souks.",
        tempo: "45 minutes-1 hour",
        lat: 31.63087,
        lng: -7.99005,
        url: "https://lejardinsecretmarrakech.com/en/",
      },
      {
        nome: "Maison de la Photographie",
        testo: "A collection of photographs of Morocco from 1870 to 1960, displayed in an old medina house: portraits, Atlas and desert landscapes, city life before tourism. The rooftop café looks over the whole medina.",
        come: "3 minutes on foot from the Ben Youssef Madrasa, on rue Souk Ahal Fassi.",
        quando: "Combined with the Ben Youssef Madrasa in the morning; the terrace is lovely in the afternoon too.",
        tempo: "1 hour",
        costo: "80 MAD adults, about €7.50; free under 15 (2026)",
        orari: "Daily 9:30am-7pm (2026)",
        lat: 31.63199,
        lng: -7.98437,
        url: "https://www.maisondelaphotographie.ma/",
      },
      {
        nome: "Mellah",
        testo: "The old Jewish quarter, created in the 16th century next to the royal palace, with the Lazama synagogue still open to visitors, the large Jewish cemetery and the quarter's spice market. Very few Jews live here today, but the houses with balconies over the street set it apart from the rest of the medina.",
        come: "On foot from Place des Ferblantiers, near the Bahia and El Badi palaces.",
        quando: "Morning, before or after the Bahia; the synagogue and cemetery close on Saturdays.",
        tempo: "1-1.5 hours",
        lat: 31.61981,
        lng: -7.98487,
      },
      {
        nome: "Menara Gardens",
        testo: "A large olive grove with a 12th-century water basin and a 19th-century pavilion, with the Atlas in the background on clear days. People come for the view and a walk outside the medina more than for the garden itself.",
        come: "By taxi from the medina, 10-15 minutes; agree the fare before getting in.",
        quando: "Late afternoon, in winter and spring when the Atlas is snow-capped.",
        tempo: "1 hour",
        costo: "gardens free",
        lat: 31.61333,
        lng: -8.02167,
      },
      {
        nome: "Dar Si Said",
        testo: "The 19th-century palace of the brother of vizier Ba Ahmed, a short walk from the Bahia, now home to the national museum of weaving and carpets: Berber and Arab rugs, costumes, jewellery, painted wooden doors. Smaller and quieter than the Bahia.",
        come: "5 minutes on foot from the Bahia Palace.",
        quando: "Morning, on the same outing as the Bahia.",
        tempo: "45 minutes-1 hour",
        lat: 31.62333,
        lng: -7.98381,
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Ben Youssef Madrasa and Maison de la Photographie",
          "Medina souks and Le Jardin Secret",
          "Lunch in the medina",
          "Afternoon: Bahia Palace and Saadian Tombs",
          "Evening: Koutoubia at sunset and dinner at Jemaa el-Fna",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Jardin Majorelle at opening time and the Yves Saint Laurent Museum",
          "Lunch in Guéliz",
          "Afternoon: Mellah and El Badi Palace",
          "Hammam and dinner",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: day trip to the Atlas, the Ourika Valley or Imlil",
          "Back in town in the late afternoon, Menara Gardens or Dar Si Said",
          "Last evening at Jemaa el-Fna",
        ],
      },
    ],
    zone: [
      {
        nome: "Medina",
        perChi: "those who want the atmosphere of Marrakech",
        testo: "Riads inside the walls, a few minutes from Jemaa el-Fna. Narrow alleys, noise, hard to find your way with luggage: ask the riad to send someone to the door.",
        fascia: "€50-150",
      },
      {
        nome: "Guéliz",
        perChi: "those who want a modern city",
        testo: "A European district with restaurants and shops, near the Jardin Majorelle. Quieter, but you lose the atmosphere.",
        fascia: "€50-120",
      },
      {
        nome: "Hivernage",
        perChi: "those who want hotels with a pool",
        testo: "Large hotels with gardens, near both the medina and Guéliz.",
        fascia: "€120-300",
      },
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
    gite: [
      {
        nome: "Ourika Valley",
        distanza: "about 60 km, 1 hour",
        come: "Shared grand taxi or a trip with a driver from the city.",
        testo: "A green valley at the foot of the Atlas, with Berber villages, riverside restaurants and, at Setti Fatma, a walk up to the waterfalls. The easiest escape from the Marrakech heat.",
      },
      {
        nome: "Imlil and the High Atlas",
        distanza: "about 65 km, 1.5 hours",
        come: "Car with driver or grand taxi via Asni; from Imlil you walk with a local guide.",
        testo: "The village where the trails to Toubkal, North Africa's highest peak, begin. In a day you can walk for a few hours between mud-brick villages and walnut trees, with lunch in a Berber home.",
      },
      {
        nome: "Ouzoud Falls",
        distanza: "about 150 km, 2.5-3 hours",
        come: "Organised trip or car with driver; a full day.",
        testo: "Falls of about 110 metres in a red gorge, with trails, small boats under the cascades and Barbary macaques among the olive trees.",
      },
      {
        nome: "Essaouira",
        distanza: "about 190 km, 2.5-3 hours",
        come: "Supratours or CTM bus from the city, or by car; better with a night there.",
        testo: "The fortified town on the Atlantic, with its white and blue medina, fishing harbour and constant wind. Shopping costs less than in Marrakech.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Marrakech?",
        risposta: "Two full days are enough for the medina, the monuments and the Jardin Majorelle; a third day adds a trip to the Atlas or the Ourika Valley.",
      },
      {
        domanda: "Riad in the medina or hotel in Guéliz?",
        risposta: "A medina riad gives you the atmosphere and puts almost everything within walking distance, but the alleys are noisy and hard with luggage. Guéliz and Hivernage are quieter and more modern, a taxi ride from the square.",
      },
      {
        domanda: "Do you need to book the Jardin Majorelle?",
        risposta: "Yes: timed tickets are sold only on the official website, and tickets bought elsewhere do not give access. The same site sells the Yves Saint Laurent Museum.",
      },
      {
        domanda: "Can you go inside the Koutoubia?",
        risposta: "No: like almost all mosques in Morocco it is closed to non-Muslims. You can see the minaret, the esplanade and the surrounding gardens.",
      },
      {
        domanda: "How do you bargain in the souks?",
        risposta: "Start well below half the asking price and go up slowly, calmly and with no obligation; if the price does not suit you, say goodbye and walk on. Anyone offering to take you to a shop usually gets a commission.",
      },
      {
        domanda: "What is the best time to go?",
        risposta: "Spring and autumn, with warm days and cool evenings. July and August often go above 40 °C; in winter days are mild but nights are cold, and riads are not always well heated.",
      },
    ],
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
    visitataPersonalmente: true,
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
      "By road: about 110 km from Tangier (about 2 hours of driving) and about 190 km from Fez (almost 4 hours without stops), with a car and driver or CTM buses (services and times on ctm.ma). There is no railway. Tetouan, about 60 km away, is the nearest hub for buses and grand taxis to Tangier and the coast. Cars can't enter the medina: you leave the car in a guarded car park outside the walls, a few dirham a night, and walk to the riad, often with a porter (tip to be agreed).",
    comeSpostarsi: 'On foot: the medina is small and all uphill.',
    periodoMigliore: 'spring and fall',
    costi:
      "Low budget about €30-50 a day per person (simple riad in the medina, meals in the cafés on the square); mid €70-110 (riad with a terrace, restaurant dinners, a driver to Akchour split between two); high from €180 up (the most polished riads, car and driver for the whole stay). Almost everything in town is free; the kasbah has a cheap ticket.",
    erroriDaEvitare: [
      'Accepting cannabis offered on the street: Morocco has zero tolerance for drugs, with prison and heavy fines',
      'Arriving for just an afternoon: the medina is at its best early in the morning and in the evening, once the day-trip groups have left',
    ],
    miaEsperienza:
      "I went there on my eleven-day road trip through northern Morocco: coming from Tangier, two days between the medina, Ras el-Ma and the Spanish Mosque, then down towards Fès.",
    // GUIDA-START
    luoghi: [
      {
        nome: "The blue medina",
        testo: "Uphill alleys and houses painted in many shades of blue. There are several explanations: to keep mosquitoes away, to recall the sky, or to attract tourists, as some locals say. None is certain. The town grew with the Andalusians, Moriscos and Jews who came from the Iberian Peninsula.",
        come: "On foot, with no destination. For luggage, ask the riad whether they send someone.",
        quando: "At dawn, before the day-trip groups arrive.",
        tempo: "half a day",
        costo: "free",
        orari: "Always open",
        lat: 35.17139,
        lng: -5.26972,
        consiglio: "Many doors and stairways belong to private homes: take photos without going in and without posing children.",
      },
      {
        nome: "Outa el-Hammam square and the Great Mosque",
        testo: "The main square of the medina, with cafés under the trees, the Great Mosque and its octagonal minaret and, on the opposite side, the walls of the kasbah. In the evening it's where the whole town meets.",
        come: "In the center of the medina. Non-Muslims don't enter the Great Mosque.",
        quando: "In the evening, when the square fills up.",
        tempo: "1-2 hours",
        costo: "free",
        orari: "Square always open; mosque closed to non-Muslims",
        lat: 35.16843,
        lng: -5.26233,
      },
      {
        nome: "The kasbah",
        testo: "The old fortress on the square, now a museum. Inside there's an Andalusian garden and a few rooms with objects and photographs of the town, and from the tower you see the rooftops and the square from above.",
        come: "Entrance from Outa el-Hammam square, with a cheap ticket (from my trip).",
        quando: "In the morning, before the heat and the groups.",
        tempo: "45 minutes",
        lat: 35.16867,
        lng: -5.26151,
        consiglio: "Climb the tower: it's the best view of the square without the hike to the Spanish Mosque.",
      },
      {
        nome: "Bab el-Ain",
        testo: "The main gate of the medina, on the west side, where taxis stop and the uphill alleys begin. From here the painted streets climb to the square in ten minutes.",
        come: "On foot from the car parks and the new town; it's the easiest way in with luggage.",
        quando: "Early morning, to photograph the first blue streets while they're empty.",
        tempo: "15 minutes",
        costo: "free",
        orari: "Always open",
        lat: 35.1682,
        lng: -5.26499,
      },
      {
        nome: "Ras el-Ma",
        testo: "The spring at the foot of the mountain, just outside the medina, where the water flows down toward the town. Along the stream are channels and wash houses still in use.",
        come: "On foot from the square: just outside the medina, on the east side.",
        quando: "Morning or late afternoon, before climbing to the Spanish Mosque.",
        tempo: "30 minutes",
        costo: "free",
        orari: "Always open",
        lat: 35.17149,
        lng: -5.25609,
      },
      {
        nome: "Spanish Mosque",
        testo: "The mosque built by the Spanish in the 1920s on the hill facing the town. Today it's disused and mostly a viewpoint over all of Chefchaouen.",
        come: "On foot from Ras el-Ma, on an uphill trail: about half an hour, with little shade.",
        quando: "At sunset.",
        tempo: "1 hour with the climb",
        costo: "free",
        lat: 35.16553,
        lng: -5.25563,
        consiglio: "Have your phone flashlight ready for the walk down in the dark.",
      },
      {
        nome: "Akchour waterfalls",
        testo: "A valley about 30 km from Chefchaouen (40 minutes by road), in Talassemtane National Park, with the river's gorges and waterfalls and trails among the rocks. It's the day trip for anyone who wants nature after the medina.",
        come: "Car with driver or taxi from Chefchaouen, price agreed the evening before. From the car park you walk up the river.",
        quando: "In spring and fall; summer weekends are crowded.",
        tempo: "a full day",
        lat: 35.24264,
        lng: -5.18186,
        consiglio: "Hiking shoes: the trails cross rocks and water.",
      },
      {
        nome: "God's Bridge (Pont de Dieu)",
        testo: "A natural rock arch over the river, on the other trail that starts from Akchour. The path crosses over the arch and then drops down to the river, where you see it from below.",
        come: "From the same Akchour car park, on a different trail from the waterfalls; easy to combine with them on the same day.",
        quando: "Morning, before the heat.",
        tempo: "half a day",
        lat: 35.22836,
        lng: -5.17563,
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: the medina at dawn, from Bab el-Ain up to the square",
          "Kasbah and Outa el-Hammam square",
          "Afternoon: Ras el-Ma",
          "Sunset from the Spanish Mosque",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above",
          "Day 2: Akchour for the day with a driver, waterfalls in the morning and God's Bridge in the afternoon",
          "Evening back on the square",
        ],
      },
      {
        titolo: "3 days",
        tappe: ["Days 1-2: as above", "Day 3: Tetouan and its white medina, or the sea at Oued Laou"],
      },
    ],
    zone: [
      {
        nome: "Medina",
        perChi: "anyone who wants the blue city right outside the door",
        testo: "Riads and small hotels among the alleys. Lots of stairs and slopes with luggage.",
        fascia: "€30-90",
      },
      {
        nome: "Outside the walls",
        perChi: "anyone arriving by car",
        testo: "Bigger hotels, easier for parking, a few minutes on foot from the medina.",
      },
    ],
    sapori: [
      { nome: "Rif goat cheese", testo: "The fresh cheese from the surrounding mountains, in the medina restaurants." },
      { nome: "Tagine", testo: "Meat or chicken cooked in the clay pot, as in the rest of Morocco." },
      { nome: "Mint tea", testo: "Served everywhere, hot and very sweet, in the cafés on the square." },
    ],
    attenzioni: [
      "People offering cannabis on the street: Morocco has zero tolerance for drugs, tourists included, with prison and heavy fines.",
      "Fake guides offering to take you to the Spanish Mosque: the trail is easy and you can do it alone.",
      "Photos of people: ask first.",
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Akchour and God's Bridge",
        distanza: "about 30 km, 40 minutes",
        come: "Car with driver or taxi from Chefchaouen, price agreed the evening before.",
        testo: "Two trails from the same car park: one follows the river up to the waterfalls, the other leads to the rock arch of God's Bridge. You can do both in a day.",
      },
      {
        nome: "Tetouan",
        distanza: "about 60 km, 1 hour 15 minutes",
        come: "CTM bus, grand taxi or car; it's also on the way to Tangier.",
        testo: "The white medina with Andalusian influences, a UNESCO site since 1997, with its craft souks and Hassan II square in front of the Royal Palace. Less touristy than Chefchaouen.",
      },
      {
        nome: "Oued Laou",
        distanza: "about 55 km, 1 hour 10 minutes",
        come: "Car or grand taxi, on a mountain road down to the sea.",
        testo: "A fishing village on the Mediterranean with a long beach, popular in summer mostly with Moroccan families.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Chefchaouen?",
        risposta: "Two nights: one day for the medina, the kasbah, Ras el-Ma and sunset from the Spanish Mosque, one for Akchour. As a day trip from Tangier or Fez you see little, and at the worst hours.",
      },
      {
        domanda: "Why is Chefchaouen blue?",
        risposta: "There's no certain answer. People say the blue keeps mosquitoes away, recalls the sky or is linked to the Jews who came from Spain; today houses are also repainted for visitors.",
      },
      {
        domanda: "How do you get to Chefchaouen?",
        risposta: "Only by road: about 2 hours from Tangier and almost 4 from Fez, with a car and driver or CTM buses. There's no railway.",
      },
      {
        domanda: "Can you do Akchour on your own?",
        risposta: "Yes: the trails are marked and busy, and you reach the waterfalls and God's Bridge without a guide. You need a car or taxi to get there and shoes that can get wet.",
      },
      {
        domanda: "Is Chefchaouen safe?",
        risposta: "It's a quiet town. The most common nuisance is people offering cannabis on the street: a firm no is enough, bearing in mind that in Morocco drugs are punished with prison, tourists included.",
      },
      {
        domanda: "When is the best time to go?",
        risposta: "Spring and fall, with mild days and a green Akchour valley. In winter the Rif mountains are cold and rainy; in summer the medina fills with visitors.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "The blue-painted alleys of Chefchaouen's medina, in the Rif mountains, Morocco",
    immagine: '/images/marocco/chefchaouen.webp',
  },
  {
    slug: 'fes',
    paeseSlug: 'marocco',
    ordine: 8,
    nome: 'Fez',
    tipologia: ['città', 'cultura', 'città imperiale'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      'Founded in 789 by Idris I, capital until 1912. The old city, Fez el-Bali, has been a UNESCO World Heritage Site since 1981 and is one of the largest and oldest urban pedestrian zones in the world.',
    percheAndarci:
      "For one of the largest and oldest medinas in the world, with the Marinid madrasas, the Qarawiyyin and the tanneries. It's the point where this itinerary splits from the desert one.",
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
      "By road from Chefchaouen (about 190 km, almost 4 hours without stops) and from Meknes (about 70 km, an hour of driving), with a car and driver or CTM bus; the ONCF train is an alternative from Meknes, Rabat, Casablanca and Tangier, with times on oncf-voyages.ma. The station is in the Ville Nouvelle: from there a red petit taxi, with a meter, takes you to the medina gate closest to your riad, usually Bab Bou Jeloud or Bab Guissa. Fès-Saïss airport is about 15 km from the medina: grand taxi at a price agreed before getting in, or the riad's transfer.",
    comeSpostarsi: 'On foot in the medina, by petit taxi between the medina, Fez Jdid and the station.',
    periodoMigliore: "spring and fall; summer is very hot",
    costi:
      "Low budget about €35-55 a day per person (simple riad in the medina, street food on the Talaa Kebira, madrasas at about 20 MAD); mid €90-140 (charming riad, official guide for half a day, dinners on roof terraces, hammam); high from €220 up (luxury riad with a pool, driver for Volubilis and Meknes). Petit taxis in town use the meter, a few euros a ride.",
    erroriDaEvitare: [
      'Exploring alone on the first day without an offline map: the medina is a maze',
      'Following people who offer to guide you on the street: official guides carry a badge',
      "Booking a riad without asking where the taxi drops you: cars can't enter the medina",
    ],
    miaEsperienza:
      "I went there on the eleven-day trip through northern Morocco, coming from Chefchaouen: three days, first Fès el-Bali with the madrasas, the tanneries and the souks, then Fès Jdid, the Mellah and the medina from above.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Bab Bou Jeloud and the Talaa Kebira",
        testo: "The gate decorated with blue tiles through which you enter Fez el-Bali. From here the Talaa Kebira runs downhill, the main street of the medina, among workshops, food stalls and loaded mules.",
        come: "Petit taxi to Bab Bou Jeloud, then on foot downhill.",
        quando: "Morning, when the shops open.",
        tempo: "half an hour, then you carry on into the medina",
        costo: "free",
        orari: "Gate and street always open",
        lat: 34.06167,
        lng: -4.98389,
      },
      {
        nome: "Bou Inania Madrasa",
        testo: "Commissioned by the Marinid sultan Abu Inan and built between 1350 and 1355. It's the only madrasa in Morocco that also served as a Friday mosque, with its own minaret. Opposite is the old water clock, completed in 1357, whose mechanism is no longer understood.",
        come: "Along the Talaa Kebira, a few minutes past Bab Bou Jeloud. The prayer hall is not open to non-Muslims, but you can see it from the courtyard.",
        quando: "Early morning. Outside prayer times.",
        tempo: "30-45 minutes",
        costo: "about 20 MAD, about €2 (from my trip)",
        lat: 34.06194,
        lng: -4.98278,
        consiglio: "Bring dirham in cash: cards aren't accepted at the ticket desk.",
      },
      {
        nome: "Al-Attarine Madrasa",
        testo: "A small madrasa built between 1323 and 1325 for the Marinid sultan Abu Said Uthman II, with a courtyard covered in zellige, stucco and carved cedar. It's open as a historic site.",
        come: "In the heart of the medina, next to the Qarawiyyin.",
        quando: "Morning.",
        tempo: "30 minutes",
        costo: "a ticket similar to Bou Inania, about 20 MAD (from my trip)",
        lat: 34.06508,
        lng: -4.97369,
      },
      {
        nome: "The Qarawiyyin",
        testo: "The mosque founded in 857-859, by tradition by Fatima al-Fihri, which later became a centre of learning that UNESCO cites as the oldest continuously operating institution of higher learning in the world. It's the center of the medina.",
        come: "Non-Muslims don't go in: through the open doors you can see part of the courtyard and the interior.",
        tempo: "15 minutes",
        costo: "outside only, free",
        orari: "Closed to non-Muslims",
        lat: 34.06444,
        lng: -4.97333,
        consiglio: "Don't linger in front of the doors during prayer.",
      },
      {
        nome: "Chouara tanneries",
        testo: "The largest tannery in the city, with stone vats full of dye where hides are worked as they have been for centuries. One of the oldest in the city, restored in the 21st century and left in place. The smell is strong.",
        come: "You watch from above, from the terraces of the leather shops around it, which ask you to pass through the store.",
        quando: "During the day, when the vats are in use.",
        tempo: "30 minutes",
        costo: "no ticket: you go in through the shops and leave a tip (from my trip)",
        lat: 34.06609,
        lng: -4.97098,
        consiglio: "There's no obligation to buy. A small tip for whoever takes you up to the terrace is normal.",
      },
      {
        nome: "Fondouk el-Nejjarine",
        testo: "An 18th-century caravanserai, where merchants once slept and stored their goods, restored and now a museum of woodwork arts and crafts. Its three-storey courtyard is one of the finest in the medina, and outside is the zellige fountain of Nejjarine square.",
        come: "A few steps from the Qarawiyyin, on the square of the same name, where carpenters still work.",
        quando: "Morning or early afternoon, as a break between madrasas and souks.",
        tempo: "45 minutes",
        lat: 34.06483,
        lng: -4.97596,
        consiglio: "Go up to the terrace: there's a café with a view over the rooftops.",
      },
      {
        nome: "Place Seffarine",
        testo: "The coppersmiths' square, where craftsmen hammer copper and brass under a large tree. The Seffarine madrasa, the oldest Marinid madrasa in the city, and the Qarawiyyin library open onto it.",
        come: "On foot from the Qarawiyyin, heading down toward the river and the tanneries.",
        quando: "During the day, when the workshops are busy.",
        tempo: "15-20 minutes",
        costo: "free",
        lat: 34.0642,
        lng: -4.9728,
      },
      {
        nome: "Zawiya of Moulay Idriss II",
        testo: "The shrine where Idris II is buried: in the 9th century he made Fez his capital, and he is considered the city's patron. The complex was rebuilt in the 18th century; the streets around it are full of stalls selling candles, incense and sweets for pilgrims.",
        come: "In the center of the medina, near the Qarawiyyin. Non-Muslims don't go in: you look from the door.",
        quando: "During the day; Fridays are busier with worshippers.",
        tempo: "15 minutes",
        costo: "outside only",
        orari: "Closed to non-Muslims",
        lat: 34.06485,
        lng: -4.97475,
      },
      {
        nome: "Dar Batha",
        testo: "A late 19th-century palace with a large Andalusian garden, just outside Bab Bou Jeloud. After a restoration begun in 2019 it reopened in 2025 as the Museum of Islamic Arts, with Fez blue ceramics, woodwork, carpets and scientific instruments.",
        come: "On foot from Bab Bou Jeloud, a few minutes toward Fez Jdid.",
        quando: "Early afternoon, when the medina is hottest and most crowded.",
        tempo: "1 hour",
        lat: 34.06058,
        lng: -4.98272,
      },
      {
        nome: "Fez Jdid and the Mellah",
        testo: "The new city founded by the Marinids in 1276, with the great gates of the Royal Palace and the Mellah, the old Jewish quarter.",
        come: "Petit taxi, or on foot from Bab Bou Jeloud through Jnan Sbil. The Royal Palace can only be seen from outside.",
        quando: "Afternoon.",
        tempo: "2 hours",
        costo: "Royal Palace from outside only, free",
        orari: "Royal Palace closed to the public; the gates can always be seen",
        lat: 34.0553,
        lng: -4.99393,
      },
      {
        nome: "Ibn Danan Synagogue and the Jewish cemetery",
        testo: "In the Mellah, the restored 17th-century synagogue and the Jewish cemetery, with its white tombs in rows on the hillside. The houses around have wooden balconies over the street, unlike those of the medina.",
        come: "On foot in the Mellah, past the gates of the Royal Palace.",
        quando: "Afternoon, on the same outing as Fez Jdid.",
        tempo: "1 hour",
        costo: "a donation or a small ticket (from my trip)",
        lat: 34.0523,
        lng: -4.9922,
      },
      {
        nome: "Jnan Sbil",
        testo: "The historic gardens between Fez el-Bali and Fez Jdid, laid out in the 19th century under Moulay Hassan I: the shady break of the day.",
        come: "On foot from Bab Bou Jeloud.",
        tempo: "30-45 minutes",
        lat: 34.05828,
        lng: -4.98681,
      },
      {
        nome: "The Marinid Tombs",
        testo: "The ruins on the hills north of the medina. The reason to go up is the view: all of Fez el-Bali below, with its roofs and minarets.",
        come: "By petit taxi, agreeing on the return too.",
        quando: "Before sunset.",
        tempo: "1 hour",
        costo: "free",
        lat: 34.06977,
        lng: -4.97924,
        consiglio: "Come down by taxi before dark rather than walking back along the paths.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning with an official guide: Bab Bou Jeloud, Bou Inania Madrasa, Talaa Kebira",
          "Al-Attarine Madrasa, the Qarawiyyin from the doors and the Zawiya of Moulay Idriss II",
          "Fondouk el-Nejjarine and lunch in the medina",
          "Afternoon: Place Seffarine and the Chouara tanneries",
          "Sunset from the Marinid Tombs",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above",
          "Day 2: Dar Batha and Jnan Sbil",
          "Fez Jdid, the Royal Palace gates and the Mellah, with the Ibn Danan Synagogue and the Jewish cemetery",
          "Free afternoon in the souks or at a hammam",
        ],
      },
      {
        titolo: "3 days",
        tappe: ["Days 1-2: as above", "Day 3: Volubilis, Moulay Idriss and Meknes for the day with a car and driver"],
      },
    ],
    zone: [
      {
        nome: "Fez el-Bali",
        perChi: "anyone who wants to sleep inside the medina",
        testo: "Riads in the alleys, quiet inside and chaotic outside. Pick a riad near a gate taxis can reach, such as Bab Bou Jeloud.",
        fascia: "€40-120",
      },
      {
        nome: "Batha and Bab Bou Jeloud",
        perChi: "anyone who wants a charming riad that's easy to reach",
        testo: "The western edge of the medina, near Dar Batha and the blue gate: taxis stop a few steps away and you're straight onto the Talaa Kebira. Many restored riads here have a roof terrace, a few a pool.",
        fascia: "€80-200",
      },
      {
        nome: "Ville Nouvelle",
        perChi: "anyone arriving by car or wanting comfort",
        testo: "The modern city, with chain hotels and restaurants, easier to reach by car. You need a taxi for the medina.",
      },
    ],
    sapori: [
      { nome: "Pastilla", testo: "Crisp pastry with pigeon or chicken, almonds and cinnamon, one of the specialties of Fez." },
      { nome: "Harira", testo: "The lentil and tomato soup, found everywhere, which breaks the fast in the evening during Ramadan." },
      { nome: "Street food on the Talaa Kebira", testo: "Bread, fritters and sweets at the stalls along the main street." },
      { nome: "Mint tea", testo: "Offered in every shop and riad." },
    ],
    attenzioni: [
      "Fake guides offering themselves on the street: ask to see the official badge before setting off with anyone.",
      "Whoever says a street is closed wants to take you to a shop: check the map.",
      "Pickpockets in the crowds of the souks: backpack in front and no cash on show.",
      "At the tanneries the terraces belong to shops: you look, you say thanks, you don't have to buy.",
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Volubilis and Moulay Idriss",
        distanza: "about 70 km, 1.5 hours",
        come: "Car with driver or a day tour; the two places are a few kilometers apart.",
        testo: "The ruins of the Roman city, a UNESCO site since 1997, with the Arch of Caracalla and the mosaics still in the houses, then the holy town of Moulay Idriss, white on its hill, for lunch. Volubilis costs about 70 MAD (from my trip) and has little shade.",
      },
      {
        nome: "Meknes",
        distanza: "about 70 km, 1 hour",
        come: "ONCF train, grand taxi or car; easy to combine with Volubilis.",
        testo: "The city of Moulay Ismail, a UNESCO site since 1996, with Bab Mansour, el-Hedim square and the huge Heri es-Souani granary. It's calmer than Fez and easy to explore on your own.",
      },
      {
        nome: "Ifrane and the Middle Atlas",
        distanza: "about 70 km, 1 hour 15 minutes",
        come: "Car or grand taxi; better with a driver so you can stop in the forests.",
        testo: "A mountain town of pitched-roof houses, built in the colonial era, surrounded by the cedar forests of the Middle Atlas, home to Barbary macaques. In summer people come for the cool air; in winter it sometimes snows.",
      },
      {
        nome: "Sefrou",
        distanza: "about 35 km, 40 minutes",
        come: "Grand taxi from Fez or car.",
        testo: "A small medina at the foot of the Atlas, with an old mellah and a waterfall just outside the center. It's the shortest trip for seeing a Moroccan town without tourists.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Fez?",
        risposta: "Two full days: one for Fez el-Bali with the madrasas and tanneries, one for Fez Jdid, the Mellah and Dar Batha. A third day lets you add Volubilis, Moulay Idriss and Meknes.",
      },
      {
        domanda: "Do you need a guide in the Fez medina?",
        risposta: "For the first morning an official guide is worth it, booked through the riad and with a badge: the medina is a maze. After that it's easy to explore alone with an offline map.",
      },
      {
        domanda: "Can you go inside the Qarawiyyin?",
        risposta: "No, it's closed to non-Muslims, like the Zawiya of Moulay Idriss II. Through the open doors you can see part of the courtyard and the interior; the Bou Inania and al-Attarine madrasas, on the other hand, can be visited.",
      },
      {
        domanda: "Do the Chouara tanneries charge admission?",
        risposta: "There's no ticket: you go up to the terraces of the leather shops around them. You're expected to look at the goods or leave a small tip, but there's no obligation to buy.",
      },
      {
        domanda: "Fez or Marrakech?",
        risposta: "Fez has the oldest and most authentic medina, with fewer tourists and more craftsmen at work; Marrakech has more monuments to visit, gardens and nightlife. With time, see both, on two different itineraries.",
      },
      {
        domanda: "How do you get to a riad in the medina?",
        risposta: "Cars can't enter: the taxi drops you at a gate, usually Bab Bou Jeloud or Bab Guissa, and the riad sends someone for your luggage. Ask in advance which gate is closest.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "The rooftops of Fès el-Bali seen from the Merenid Tombs, with the minarets, Morocco",
    immagine: '/images/marocco/fes.webp',
  },
  {
    slug: 'meknes-volubilis',
    paeseSlug: 'marocco',
    ordine: 9,
    nome: 'Meknes and Volubilis',
    tipologia: ['città', 'storia', 'città imperiale', 'archeologia'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
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
    comeArrivare: 'By car from Fez (about 70 km, an hour of driving) or from Rabat (about 140 km, almost 2 hours). The ONCF train is an alternative: Meknes has two stations.',
    comeSpostarsi: 'On foot in the medina, petit taxi in town, taxi or car with driver for Volubilis and Moulay Idriss.',
    periodoMigliore: 'spring and fall; at Volubilis the summer sun is fierce',
    erroriDaEvitare: [
      'Going to Volubilis in the middle of a summer day: the site has almost no shade',
      'Calling the Heri es-Souani stables: it was a granary, as the historical sources explain',
    ],
    miaEsperienza:
      "I passed through on the northern Morocco road trip: Volubilis and Moulay Idriss along the road from Fès, one night in Meknès and the next morning the city of Moulay Ismail, before driving on to Rabat.",
    // GUIDA-START
    luoghi: [
      {
        nome: 'Volubilis',
        testo:
          'Already inhabited in the 3rd century BC, possibly the capital of the kingdom of Mauretania, it became Roman when Rome annexed Mauretania in 44 AD. By the late 2nd century it had about 20,000 inhabitants and lived on olive oil. Around 285 it fell to local tribes and Rome never retook it. What remains: the Decumanus Maximus, the basilica, the Capitol, the Arch of Caracalla from 217 and the mosaics in the houses, like the Labours of Hercules and Orpheus.',
        come: 'About 30 km north of Meknes (half an hour by road) and about 70 km from Fez (an hour and a half), by car with driver or taxi. You visit on foot along the site route.',
        quando: 'Early morning: the site is open and has almost no shade.',
        tempo: '2 hours',
        consiglio: 'Hat, water and closed shoes. A guide helps you read the ruins.',
      },
      {
        nome: 'Moulay Idriss Zerhoun',
        testo:
          "The holy town built around the mausoleum of Idris I, who founded the Idrisid dynasty at Volubilis in 787-788 and was killed there in 791. Today's mausoleum was rebuilt by Moulay Ismail in the early 18th century. It's a few kilometers from the ruins, on the hills.",
        come: "With the same taxi as Volubilis. The mausoleum is a pilgrimage site and is not open to non-Muslims.",
        quando: 'After Volubilis, late in the morning.',
        tempo: '1 hour',
        consiglio: 'Climb the higher hill of the town, which looks over the whole religious complex.',
      },
      {
        nome: 'Bab Mansour and el-Hedim square',
        testo:
          'The monumental gate begun by Moulay Ismail and finished in 1732 by his son Moulay Abdallah, named after Mansour al-Alj, a former Christian slave who converted to Islam. In front is el-Hedim square, whose name means "rubble": it comes from the demolitions carried out to open it.',
        come: 'On foot, at the entrance to the medina.',
        quando: 'Late afternoon, when the square comes alive.',
        tempo: '30 minutes',
      },
      {
        nome: 'Mausoleum of Moulay Ismail',
        testo: "The sultan's tomb. It's still a religious site, also open to tourists.",
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
        testo: "The Marinid madrasa founded in 1335-36 by Sultan Abu al-Hasan and now named after his son Abu Inan.",
        come: 'In the medina, on foot from el-Hedim.',
        tempo: '30 minutes',
      },
      {
        nome: 'Dar Jamai Museum',
        testo: "A palace from 1882, built by a grand vizier of Sultan Moulay Hassan, which today houses a museum overlooking el-Hedim square.",
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
        perChi: 'anyone arriving by car',
        testo: 'Hotels easier to reach by car; you need a taxi for the medina.',
      },
    ],
    sapori: [
      { nome: 'Olives and oil from the plain', testo: 'The Volubilis and Meknes area has been olive country since Roman times.' },
      { nome: 'Tagine', testo: 'In the restaurants around el-Hedim.' },
      { nome: 'Harira', testo: 'The lentil soup found everywhere.' },
    ],
    attenzioni: [
      'At Volubilis guides offer their services: agree on price and length before starting, and ask for the official badge.',
      'The taxi to Volubilis and Moulay Idriss should be agreed in advance, with waiting time and return included.',
      'Covering clothes in Moulay Idriss, which is a holy town.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "The Arch of Caracalla among the Roman ruins of Volubilis, near Meknès, Morocco",
    immagine: '/images/marocco/meknes-volubilis.webp',
  },
  {
    slug: 'rabat',
    paeseSlug: 'marocco',
    ordine: 10,
    nome: 'Rabat (and the Hassan II Mosque in Casablanca)',
    tipologia: ['città', 'cultura', 'città imperiale', 'mare'],
    giorniConsigliati: '1-2 days, plus half a day in Casablanca',
    visitataPersonalmente: true,
    introduzione:
      "Morocco's capital since 1912, and still so after independence in 1956, at the mouth of the Bou Regreg, facing Salé. A UNESCO World Heritage Site since 2012, for both its old and modern city. About 95 km away by road is Casablanca, with the Hassan II Mosque.",
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
      'By car from Meknes (about 140 km, almost 2 hours) and from Casablanca (about 95 km, just over an hour). The ONCF train is an alternative, with Rabat Ville and Rabat Agdal stations. There is also Rabat-Salé airport.',
    comeSpostarsi: 'On foot and by tram, which has linked Rabat and Salé since 2011.',
    periodoMigliore: 'all year, with spring and fall the most pleasant',
    erroriDaEvitare: [
      "Showing up at the Hassan II Mosque in shorts or sleeveless: you won't get in",
      'Going to the Hassan II Mosque without checking the tour times: there are fewer on Friday',
    ],
    miaEsperienza:
      "It was the last stop of my northern Morocco trip: a day between the Kasbah of the Udayas, the Hassan Tower and the Chellah, then on to Casablanca for the Hassan II Mosque and the flight home.",
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
          'The Hassan Tower is the never-finished minaret of the great mosque commissioned by the Almohad sultan Yaqub al-Mansur, begun in 1191 and left unfinished at his death in 1199. Next to it stands the Mausoleum of Mohammed V, completed in 1971, where his sons King Hassan II and Prince Abdallah are also buried, with the honour guard at the entrance.',
        come: 'On foot or by tram. The esplanade is open.',
        quando: 'Morning or late afternoon.',
        tempo: '1 hour',
        consiglio: 'Covering clothes, and no photos of the guards without asking.',
      },
      {
        nome: 'Chellah',
        testo:
          'The place where the ruins of the Roman city of Sala and the Marinid necropolis, begun in 1284-85, overlap. The main gate dates from 1339. Storks nest in the trees and on the old minaret. For years the ruins have hosted the Jazz au Chellah festival.',
        come: 'Petit taxi, or on foot from the Hassan Tower.',
        quando: 'Afternoon, when the light is softer.',
        tempo: '1 hour',
      },
      {
        nome: 'Hassan II Mosque (Casablanca)',
        testo:
          "Casablanca's great mosque on the sea, one of the few in Morocco that non-Muslims can visit, only on the guided tour. The tour covers the prayer hall, the minaret hall and the ablution halls.",
        come: 'By car from Rabat, about 95 km along the coast.',
        quando:
          'Guided tours several times a day, in the morning and early afternoon; fewer on Fridays. Current times are on fmh2.ma, where they are given in GMT.',
        tempo: '1 hour',
        costo: '140 MAD for foreign adults (fmh2.ma, November 2026)',
        url: 'https://fmh2.ma/',
        consiglio: 'Shoulders, torso and legs covered to below the knees: no shorts or tank tops. Shoes come off at the entrance, with bags handed out at the door.',
      },
    ],
    programmi: [
      {
        titolo: '1 day',
        tappe: ['Morning: Kasbah of the Udayas and Andalusian Gardens', 'Afternoon: Hassan Tower and Mausoleum of Mohammed V', 'Late afternoon: Chellah'],
      },
      {
        titolo: '2 days',
        tappe: ['Day 1: as above', 'Day 2: by car to Casablanca and the Hassan II Mosque tour'],
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
        perChi: 'anyone arriving by car or wanting comfort',
        testo: 'Hotels in the modern city, with the tram to the medina.',
      },
    ],
    sapori: [
      { nome: 'Atlantic fish', testo: 'Grilled fish in the restaurants toward the port and the river mouth.' },
      { nome: 'Mint tea', testo: 'In the cafés of the kasbah and the medina.' },
    ],
    attenzioni: [
      'At the Hassan II Mosque you can only enter on the guided tour and in covering clothes: the official price is the one on fmh2.ma.',
      'Pickpockets in crowded areas and on the beaches.',
      'Taxis: ask for the meter or agree on the price first.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: "The Almohad gate of Bab Oudaya and the walls of the Kasbah of the Udayas in Rabat, Morocco",
    immagine: '/images/marocco/rabat.webp',
  },
]
