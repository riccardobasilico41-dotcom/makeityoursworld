import type { Destinazione } from '@/lib/types'

export const destinazioniBulgaria: Destinazione[] = [
  {
    slug: 'bansko',
    paeseSlug: 'bulgaria',
    ordine: 1,
    nome: 'Bansko',
    tipologia: ['skiing', 'mountains'],
    giorniConsigliati: '4 days, three full ones on the slopes',
    visitataPersonalmente: true,
    introduzione: "One of Bulgaria's best-known ski areas, in the Pirin Mountains, with an old town of stone and wood houses.",
    percheAndarci: "To ski in a corner of Europe that rarely shows up in winter holiday brochures, at prices much lower than the Alps.",
    cosaVedere: ['The old town of Bansko, between the houses of the "Bansko school" and the more modern part', 'The view from Todorka Peak'],
    cosaFare: [
      "Skiing on the Bansko Ski Zone slopes (there is a dedicated experience page)",
      "The lit run for night skiing (there is a dedicated experience page)",
      "Après-ski in the bars at the base of the gondola",
      "Dinner in a traditional mehana in the old town",
    ],
    doveDormire:
      "I chose a hotel a few minutes' walk from the gondola station: in the morning I got to the slopes quickly and in the evening I was a couple of steps from the old town. It wasn't a branded or particularly refined place, just a practical base for the week on the snow.\n\nAlternatives near the gondola. Budget: Hotel Dumanov (near the lower station), La Vien Guest House (5 minutes on foot, family-run). Mid-range: Hotel Ida (indoor pool and hot tub), MPM Hotel Sport (almost direct access to the slopes). Luxury: Kempinski Hotel Grand Arena Bansko (next to the gondola), Premier Luxury Mountain Resort.",
    doveMangiare: "We ate in the mehanas of the old town: kapama, banitsa and shopska salata, always with rakia.",
    comeArrivare: "You fly into Sofia, the most convenient international airport, about 160 km from Bansko: by car it takes 2 to 2.5 hours along the Struma motorway and then up the valley to Razlog. Those going only to ski often use shared transfers (about €15-30 per person) or private ones (about €80-90 per car), to be booked ahead. The public bus costs about €20-22 but means going via Sofia's central station; the train to Blagoevgrad and then a minibus is the slowest option.",
    comeSpostarsi: "A gondola takes you from the center to the slopes; between one run and the next you get around on your skis.",
    periodoMigliore: "from December to spring, with artificial snow; season dates on the official website",
    costi: "Daily budget per person, as a guide: low €50-70 (guesthouse, mehanas, lift pass), mid €90-130 (hotel near the gondola, equipment hire, dinners out), high from €200. The adult day pass cost about €33 in the 2025/26 season; a local beer about €1.50-2, a dinner in a mehana €15-20 per person. Prices in the mountain huts are much higher. Since 2026 you pay in euros.",
    erroriDaEvitare: ["Buying the ski pass at the ticket window: online, a few days ahead, it costs less", "Expecting Alpine slopes: you go to Bansko for the experience and the price, not for the level of the ski area"],
    miaEsperienza:
      "I didn't expect much from skiing in Bulgaria, and that's what I found: nice, well-kept slopes, nothing over the top compared to the Alps. That's exactly the charm. You go for the exotic experience of skiing in a corner of Europe off the usual circuits, more than for the skiing itself.",
    luoghi: [
      {
        nome: "Bansko ski area",
        testo: "The area is reached by a long gondola, running since 2003, from the town to the Banderishka Polyana base; the lifts reach 2,600 metres and there are about 75 km of slopes. The slopes are quieter than the Alps. People go for the exotic experience in a corner of Europe off the better-known circuits.",
        come: "Gondola station a few minutes on foot from the centre; ski pass at the ticket office or online.",
        quando: "Winter; early in the morning there are queues at the gondola.",
        tempo: "full day",
        costo: "adult day pass about €33 in the 2025/26 season; 2026/27 prices on the official website",
        orari: "Season from 1 December 2026 to 11 April 2027; gondola 8:30-17:00, chairlifts 8:45-16:15.",
        lat: 41.82709,
        lng: 23.4775,
        url: "https://banskoski.com",
        consiglio: "Buy the ski pass online to avoid the ticket office queue."
      },
      {
        nome: "Illuminated night run",
        testo: "The run back down to the town, is lit for evening skiing, but not every day. It is one of the most distinctive attractions of Bansko.",
        come: "Gondola to the middle station and descent; hours on the ski area website.",
        quando: "Evening, on night-opening days.",
        tempo: "1-2 hours",
        url: "https://banskoski.com",
        consiglio: "After the run, après-ski in the bars at the base of the gondola."
      },
      {
        nome: "Todorka Peak",
        testo: "The Todorka top station, with a view of the Pirin mountains. You get there by lifts.",
        come: "Gondola and chairlifts.",
        quando: "Clear day, in winter.",
        tempo: "1 hour",
        lat: 41.75274,
        lng: 23.43179,
        consiglio: "Allow for wind and cold at the top."
      },
      {
        nome: "Bansko old town",
        testo: "Stone and wood houses of the 'Bansko school' (the nineteenth-century Bulgarian revival), the Holy Trinity church, built by the townspeople in the 19th century, and typical mehanas with kapama, banitsa and shopska salata. It is livelier in the evening.",
        come: "On foot from the gondola station.",
        quando: "Evening.",
        tempo: "2 hours",
        costo: "free",
        orari: "Always open.",
        lat: 41.83933,
        lng: 23.48871,
        consiglio: "Eat in the mehanas of the old town, not on the main road."
      },
      {
        nome: "Holy Trinity Church",
        testo: "The large church of 1835, built by the townspeople after obtaining permission from the Ottoman authorities, with a bell tower of about 30 metres added in 1850. Inside are icons and frescoes by painters of the Bansko school.",
        come: "On foot, in the old town.",
        quando: "Daytime, outside services.",
        tempo: "30 minutes",
        costo: "free",
        lat: 41.83539,
        lng: 23.48706,
        consiglio: "Clothing that covers shoulders and knees."
      },
      {
        nome: "Velyanova House",
        testo: "A fortified 19th-century house decorated by the painter Velyan Ognev, who came from Debar to paint the Holy Trinity Church. The \"blue room\" has carved wooden ceilings and painted walls.",
        come: "On foot, on Velyan Ognev street, in the old town.",
        quando: "Daytime.",
        tempo: "30 minutes",
        lat: 41.8355,
        lng: 23.48803
      },
      {
        nome: "Neofit Rilski House Museum",
        testo: "The birthplace of Neofit Rilski (1793-1881), monk and educator, author of the first Bulgarian grammar. It is a typical Bansko fortified house, with thick walls and hiding places.",
        come: "On foot, in the old town, near the Holy Trinity Church.",
        quando: "Daytime.",
        tempo: "30 minutes",
        lat: 41.83509,
        lng: 23.48669
      },
      {
        nome: "Nikola Vaptsarov House Museum",
        testo: "The birthplace of the poet Nikola Vaptsarov (1909-1942), executed in Sofia for his anti-fascist activity, with personal belongings and the story of early 20th-century Bansko.",
        come: "On foot, on Nikola Vaptsarov square.",
        quando: "Daytime.",
        tempo: "30-45 minutes",
        lat: 41.8375,
        lng: 23.4888
      },
      {
        nome: "Permanent Icon Exhibition",
        testo: "Icons of the Bansko school of painting, from the 18th and 19th centuries, gathered in a building in the old town. It shows how much of an artistic centre the town was before it became a ski resort.",
        come: "On foot, on Yane Sandanski street, in the old town.",
        quando: "Daytime, on weekdays.",
        tempo: "30 minutes",
        lat: 41.83615,
        lng: 23.48817
      },
      {
        nome: "Banya and its hot springs",
        testo: "The spa village a few kilometres from Bansko, with hot springs, public pools and hotels with spas. An afternoon of rest after the days on the slopes.",
        come: "By car or taxi, about a quarter of an hour.",
        quando: "Afternoon or evening, after skiing.",
        tempo: "2-3 hours",
        lat: 41.88111,
        lng: 23.52444
      }
    ],
    sapori: [
      {
        nome: "Kapama",
        testo: "Pork and sausage stew with cabbage, slowly cooked in a clay pot."
      },
      {
        nome: "Banitsa",
        testo: "Cheese pastry, a typical breakfast in Bulgaria."
      },
      {
        nome: "Shopska salata",
        testo: "Tomato, cucumber and grated feta salad."
      },
      {
        nome: "Rakia",
        testo: "Fruit brandy, drunk before meals."
      }
    ],
    attenzioni: [
      "Bulgaria has used the euro since 1 January 2026: compare with older lev prices.",
      "Sofia is about 160 km away: use pre-booked transfers, not street taxis.",
      "The ski area has queues in high season: reach the gondola early.",
      "By car in winter you need winter equipment (snow tyres, chains if required)."
    ],
    faq: [
      {
        domanda: "When can you ski in Bansko?",
        risposta: "The 2026/27 season runs from 1 December 2026 to 11 April 2027, with artificial snow on most slopes. Dates may change with the weather."
      },
      {
        domanda: "How much is the lift pass?",
        risposta: "The adult day pass cost about €33 in the 2025/26 season. Buying online a few days ahead saves up to 25% compared with the ticket office."
      },
      {
        domanda: "How do you get there from Sofia?",
        risposta: "By car in 2 to 2.5 hours (about 160 km), by shared or private transfer, or by public bus from Sofia's central station, slower and cheaper."
      },
      {
        domanda: "Do you pay in euros in Bulgaria?",
        risposta: "Yes: Bulgaria joined the eurozone on 1 January 2026 and since 1 February 2026 the euro is the only legal currency. In the mehanas outside the centre it helps to carry cash."
      },
      {
        domanda: "Is Bansko good for beginners?",
        risposta: "Yes: Banderishka Polyana has blue runs and the ski-school area. The two black runs, including the Todorka one, are for experienced skiers."
      },
      {
        domanda: "Do you need a car in Bansko?",
        risposta: "Not if you stay near the gondola: the slopes are reached on foot and the old town is a few minutes away. A car is useful for Banya, the Pirin in summer or Rila Monastery."
      }
    ],
    gite: [
      {
        nome: "Rila Monastery",
        distanza: "about 2 hours by car",
        come: "By car towards Sofia, with a detour into the Rila valley.",
        testo: "Bulgaria's most important Orthodox monastery, a UNESCO site. It fits well on the way back to Sofia."
      },
      {
        nome: "Vihren hut and Pirin National Park",
        distanza: "about 15 km south",
        come: "By car along the Banderitsa valley road, in summer.",
        testo: "The starting point for trails to Vihren, the highest peak of the Pirin (2,914 m), inside a UNESCO-listed park."
      },
      {
        nome: "Dobrinishte",
        distanza: "about 6 km east",
        come: "By car or taxi.",
        testo: "A village with hot springs and a small ski area, quieter than Bansko."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Early gondola and skiing at Banderishka Polyana and Shiligarnika",
          "Lunch on the mountain or back in town",
          "Après-ski at the gondola base",
          "Dinner in a mehana in the old town"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: skiing as in the one-day plan",
          "Day 2: skiing in the morning up to Todorka, afternoon in the old town between the Holy Trinity Church and Velyanova House, evening in Banya"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1 and 2: skiing in the resort",
          "Day 3: Rila Monastery on the way back to Sofia"
        ]
      }
    ],
    zone: [
      {
        nome: "Near the gondola",
        perChi: "those who ski every day and want to leave the car parked",
        testo: "Hotels 100-500 metres from the base station, some with pool and spa. In high season they fill up early.",
        fascia: "€80-130"
      },
      {
        nome: "Old town",
        perChi: "those who want the mehanas and evening life on foot",
        testo: "Guesthouses and small hotels among the stone houses, 10-15 minutes' walk from the gondola.",
        fascia: "€40-90"
      },
      {
        nome: "Luxury resorts",
        perChi: "those looking for large spas and mountain-hotel services",
        testo: "Large five-star properties opposite the gondola or with a dedicated shuttle."
      },
      {
        nome: "Banya and Razlog",
        perChi: "those travelling by car who want lower prices or the hot springs",
        testo: "Villages 10-15 minutes away by road, with spa hotels and guesthouses; to ski you drive back to Bansko every morning."
      }
    ],
    esperienzeSlugs: ['sci-bansko', 'discesa-notturna-bansko'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'The snow-covered slopes of the Bansko ski area, Bulgaria',
    immagine: '/images/bulgaria/bansko-stock.jpg',
  },
  {
    slug: 'monastero-rila',
    paeseSlug: 'bulgaria',
    ordine: 2,
    nome: 'Rila Monastery',
    tipologia: ['religion', 'history', 'unesco'],
    giorniConsigliati: 'half a day, on the way back',
    visitataPersonalmente: true,
    introduzione: "The largest and most important Orthodox monastery in Bulgaria, founded in the 10th century by the hermit Ivan of Rila and a UNESCO World Heritage Site since 1983.",
    percheAndarci: "It was the twist of the trip. After the days on the snow the contrast is total, and it's probably the strongest memory of the whole tour.",
    cosaVedere: [
      "The five-domed Church of the Nativity of the Virgin, covered in brightly colored frescoes",
      "The high stone walls enclosing the complex, which make it look like a fortress",
      "The Museum of Ecclesiastical History, with the Rafail Cross, carved with 104 religious scenes and 650 miniature figures",
    ],
    cosaFare: ["Visit the monastery complex and the church (there is a dedicated experience page)", "Visit the Museum of Ecclesiastical History"],
    doveDormire: "I didn't sleep there: it was a half-day stop on the road back to Sofia.",
    doveMangiare: "I have no addresses to recommend: the stop was all about the visit.",
    comeArrivare: "The monastery lies at the end of the Rilska river valley, about 2 hours by car from both Sofia and Bansko, with a turn-off from the Struma motorway near Kocherinovo. According to the monastery, direct public transport has not been restored: without a car you come on an organised trip from Sofia, or take the bus to Blagoevgrad and then a taxi. In winter the valley road can be icy.",
    comeSpostarsi: "On foot, inside the monastery complex.",
    periodoMigliore: "all year",
    costi: "Daily budget per person, as a guide: low €30-50, mid €60-90, high from €130 with a hotel night and a private guide. Entry to the complex and the church is free; in 2026 the Museum of Church History costs €5, Hrelyo's Tower and the Monastery Economy museum €3 each, the ethnographic museum €4.",
    erroriDaEvitare: ["Entering the church with bare shoulders and knees", "Taking photos or video inside the religious buildings without following the monastery's rules"],
    miaEsperienza:
      "After the days on the snow, the monastery was the twist of the trip. The brightly colored frescoes of the Church of the Nativity of the Virgin and the silence of the mountain around are the most vivid memory of the whole tour.",
    luoghi: [
      {
        nome: "Rila Monastery complex",
        testo: "The largest and best-known Orthodox monastery in Bulgaria, a UNESCO site, founded in the 10th century, by tradition by St John of Rila and rebuilt between 1834 and 1862 after a fire. The high, almost fortress-like stone walls enclose a courtyard of black-and-white striped arcades.",
        come: "By car or bus from Sofia, south of the capital, or as a detour on the road between Bansko and Sofia.",
        quando: "Early morning, before the tourist buses.",
        tempo: "1.5-2 hours",
        costo: "free entry",
        lat: 42.13331,
        lng: 23.34012,
        url: "https://rilskimanastir.org/en/",
        consiglio: "It is a place of worship: clothing that covers shoulders and knees."
      },
      {
        nome: "Church of the Nativity of the Virgin",
        testo: "The five-domed church with brightly coloured frescoes in the porch and inside, by several nineteenth-century painters, including the brothers Zahari and Dimitar Zograf. For photos inside, follow the monastery's rules.",
        come: "Inside the monastery courtyard.",
        quando: "Morning.",
        tempo: "30-45 minutes",
        costo: "free entry",
        orari: "Monday-Thursday 6:30-18:00, Friday-Sunday 6:30-18:30; from 1 June to 30 September Friday-Sunday until 19:30.",
        lat: 42.13339,
        lng: 23.34018,
        consiglio: "The silence of the mountain around is the best part."
      },
      {
        nome: "Museum of Church History and the Raphael Cross",
        testo: "The monastery museum holds relics and the Raphael Cross, a single piece of wood, 81 x 43 cm, in which the monk Rafail carved 104 religious scenes and 650 miniature figures. It is small but rich.",
        come: "In the complex, separate entry.",
        quando: "Daytime.",
        tempo: "45 minutes",
        costo: "€5 adults, €2 students up to 18 (2026)",
        orari: "Every day 8:30-16:30; from 1 June to 30 September 8:30-19:30.",
        lat: 42.13334,
        lng: 23.34072,
        url: "https://rilskimanastir.org/en/museums/tc-rkovno-istoricheski-muzei/",
        consiglio: "The ticket is easy to lose: keep it in your pocket."
      },
      {
        nome: "Hrelyo's Tower",
        testo: "The oldest building in the monastery, from 1335: a stone tower about 23 metres high on five floors, built by the feudal lord Stefan Hrelyo Dragovol. On the top floor is the Chapel of the Transfiguration with 14th-century frescoes.",
        come: "In the monastery courtyard, next to the church.",
        quando: "Morning.",
        tempo: "30 minutes",
        costo: "€3 adults, €2 students up to 18 (2026)",
        orari: "Every day 8:30-16:30.",
        lat: 42.1336,
        lng: 23.34021,
        url: "https://rilskimanastir.org/en/museums/khrel-ova-kula/"
      },
      {
        nome: "Icon Gallery",
        testo: "Eighty 18th- and 19th-century icons from the monastery collection and 28 portraits of the abbots, from 1860 to 2005. A small room, useful for understanding Bulgarian religious painting.",
        come: "In the complex, separate entry.",
        quando: "Daytime.",
        tempo: "20-30 minutes",
        orari: "Every day 8:30-16:30.",
        lat: 42.13312,
        lng: 23.3405,
        url: "https://rilskimanastir.org/en/museums/ikonna-galeriia/"
      },
      {
        nome: "Monastery Economy Museum and old kitchen",
        testo: "The practical life of the monastery in the 18th and 19th centuries: an old mill, the bread oven, tools for logging and beekeeping. The highlight is the magernitsa, the kitchen where meals were prepared for monks and pilgrims, built by master Alexi from the village of Rila.",
        come: "In the complex, separate entry.",
        quando: "Daytime.",
        tempo: "30 minutes",
        costo: "€3 adults, €2 students up to 18 (2026)",
        orari: "Every day 8:30-16:30.",
        url: "https://rilskimanastir.org/en/museums/muzei-manastirsko-stopanstvo/"
      },
      {
        nome: "Ethnographic Museum and guest rooms",
        testo: "Carpets, folk costumes, jewellery and a 19th-century household room. The guest rooms bear the names of the towns that furnished them, such as Koprivshtitsa, Teteven, Chirpan, Kyustendil and Gabrovo.",
        come: "In the complex; for some rooms ask the staff at the Museum of Church History.",
        quando: "Daytime.",
        tempo: "30 minutes",
        costo: "€4 adults, €2 students up to 18 (2026)",
        orari: "Every day 8:30-16:30.",
        url: "https://rilskimanastir.org/en/museums/etnografski-muzei-i-gostni-stai-arkhondaritci/"
      },
      {
        nome: "Cave of St John of Rila",
        testo: "The place where, according to tradition, the hermit lived before the monastery was founded, with a small church. Pilgrims squeeze through the narrow cleft of the cave.",
        come: "By car for about 3.5 km up the valley east of the monastery, then about ten minutes uphill on foot through the woods.",
        quando: "Daytime, with suitable shoes.",
        tempo: "1-1.5 hours",
        lat: 42.1501,
        lng: 23.36991
      },
      {
        nome: "St Luke's Hermitage",
        testo: "A small hermitage of 1798 in the woods, with a courtyard and the Church of St Luke. A quiet detour on the road to Kirilova polyana.",
        come: "On foot or by car along the road to Kirilova polyana, about 3.7 km north-east of the monastery, then a short trail.",
        quando: "Daytime.",
        tempo: "45 minutes",
        lat: 42.14551,
        lng: 23.36066
      }
    ],
    sapori: [
      {
        nome: "Packed meal",
        testo: "At the monastery there are no obligatory restaurants: lunch before or after."
      }
    ],
    attenzioni: [
      "Modest clothing: shoulders and knees covered, no hats inside the church.",
      "Inside the church respect the photo rules and speak quietly.",
      "Mountain road: in winter you need snow tyres."
    ],
    faq: [
      {
        domanda: "How much does it cost to visit Rila Monastery?",
        risposta: "The complex and the church are free. The museums are paid separately: in 2026 the Museum of Church History €5, Hrelyo's Tower €3, the ethnographic museum €4."
      },
      {
        domanda: "How much time do you need?",
        risposta: "Two to three hours are enough for the courtyard, the church and the museum. With Hrelyo's Tower and the Cave of St John, allow half a day."
      },
      {
        domanda: "Can you take photos?",
        risposta: "The courtyard can be photographed freely; inside the church and the religious buildings follow the monastery's rules, which normally do not allow photos or video."
      },
      {
        domanda: "How should you dress?",
        risposta: "Shoulders and knees covered, no hat inside the church and a low voice: it is a working monastery."
      },
      {
        domanda: "Can you get there by public transport?",
        risposta: "The direct connection has not been restored. The options are an organised trip from Sofia or the bus to Blagoevgrad plus a taxi."
      },
      {
        domanda: "Can you sleep at the monastery?",
        risposta: "Yes, there are guest rooms: book by phone Monday to Friday, 14:30-16:00 and 18:00-19:00, on +359 896 872 010."
      }
    ],
    gite: [
      {
        nome: "The Seven Rila Lakes",
        distanza: "on the other side of the Rila, above Sapareva Banya",
        come: "By car to Panichishte, then chairlift and trail to the Rilski Ezera hut.",
        testo: "Seven glacial lakes in terraces between 2,100 and 2,500 metres. In summer it is the most famous hike in the Rila."
      },
      {
        nome: "Sofia and Boyana Church",
        distanza: "about 2 hours by car",
        come: "By car along the Struma motorway.",
        testo: "The Alexander Nevsky Cathedral, the Rotunda of St George and the Roman remains of Serdica; at the foot of Vitosha, Boyana Church with frescoes from 1259, a UNESCO site."
      },
      {
        nome: "Bansko",
        distanza: "about 2 hours by car",
        come: "By car south along the Struma and then up the valley to Razlog.",
        testo: "The Pirin ski resort, with an old town of stone houses and mehanas."
      }
    ],
    programmi: [
      {
        titolo: "Half a day (along the way)",
        tappe: [
          "Arrival early in the morning, before the tour buses",
          "Courtyard and Church of the Nativity of the Virgin",
          "Museum of Church History and Raphael's Cross",
          "Lunch in the restaurants outside the walls and departure"
        ]
      },
      {
        titolo: "1 day",
        tappe: [
          "Morning: church, Hrelyo's Tower and Museum of Church History",
          "Lunch outside the walls",
          "Afternoon: Cave of St John of Rila and St Luke's Hermitage",
          "Return to Sofia or Bansko"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: monastery and museums, night in the monastery rooms or the valley hotels",
          "Day 2: morning service, Cave of St John and a walk towards Kirilova polyana"
        ]
      }
    ],
    zone: [
      {
        nome: "Monastery rooms",
        perChi: "those who want to experience the monastery in the evening and early morning",
        testo: "Simple rooms within the walls, bookable by phone on weekdays. In the evening, once the gates are closed, the courtyard is silent."
      },
      {
        nome: "Hotels along the valley",
        perChi: "those travelling by car who want more comfort",
        testo: "A few hotels and a campsite 1-3 km from the monastery, including one with a spa."
      },
      {
        nome: "Rila village",
        perChi: "those looking for simple, low-priced guesthouses",
        testo: "The village about 20 km down the valley, with family guesthouses and a few shops."
      },
      {
        nome: "Sofia",
        perChi: "those visiting the monastery as a day trip",
        testo: "The capital, about 2 hours away, with the widest choice of hotels; organised trips leave from here."
      }
    ],
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'The frescoed facade of the Church of the Nativity of the Virgin at Rila Monastery, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
