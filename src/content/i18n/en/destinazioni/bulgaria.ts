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
    introduzione: "Bulgaria's most famous ski area: about 70-75 km of slopes in the Pirin Mountains and an old town of stone and wood houses.",
    percheAndarci: "To ski in a corner of Europe that rarely shows up in winter holiday brochures, at prices much lower than the Alps.",
    cosaVedere: ['The old town of Bansko, between the houses of the "Bansko school" and the more modern part', 'The view from Todorka Peak (2,560 meters)'],
    cosaFare: [
      "Skiing on the Bansko Ski Zone slopes (there is a dedicated experience page)",
      "The 7.5 km lit run for night skiing (there is a dedicated experience page)",
      "Après-ski at Sopranos or at the Happy End Bar, at the base of the gondola",
      "Dinner in a traditional mehana in the old town",
    ],
    doveDormire:
      "I chose a hotel a few minutes' walk from the gondola station: in the morning I got to the slopes quickly and in the evening I was a couple of steps from the old town. It wasn't a branded or particularly refined place, just a practical base for the week on the snow.\n\nAlternatives near the gondola. Budget: Hotel Dumanov (about 150 meters from the lower station), La Vien Guest House (5 minutes on foot, family-run). Mid-range: Hotel Ida (indoor pool and hot tub), MPM Hotel Sport (almost direct access to the slopes). Luxury: Kempinski Hotel Grand Arena Bansko (the only true ski-in/ski-out in town), Premier Luxury Mountain Resort.",
    doveMangiare: "We ate in the mehanas of the old town: kapama, banitsa and shopska salata, always with rakia.",
    comeArrivare: "From Sofia it's about 2-2.5 hours by car (160 km). Alternatively there are shuttles and private transfers, the public bus, or the train plus a minibus.",
    comeSpostarsi: "An 8-seat gondola takes you from the center to the slopes; between one run and the next you get around on your skis.",
    periodoMigliore: "December 1 - mid-April, with guaranteed artificial snow on over 90% of the slopes",
    costi: "Day ski pass €35-40 (up to 25% less online); beer at the mountain hut €1.50-2; dinner in a mehana €15-20 per person.",
    erroriDaEvitare: ["Buying the ski pass at the ticket window: online, a few days ahead, it costs less", "Expecting Alpine slopes: you go to Bansko for the experience and the price, not for the level of the ski area"],
    miaEsperienza:
      "I didn't expect much from skiing in Bulgaria, and that's what I found: nice, well-kept slopes, nothing over the top compared to the Alps. That's exactly the charm. You go for the exotic experience of skiing in a corner of Europe off the usual circuits, more than for the skiing itself.",
    luoghi: [
      {
        nome: "Bansko ski area",
        testo: "The area is reached by a long gondola from the town. The slopes are well kept with guaranteed artificial snow on over 90%, but quieter than the Alps. People go for the exotic experience in a corner of Europe off the better-known circuits.",
        come: "Gondola station a few minutes on foot from the centre; day ski pass at the ticket office or online.",
        quando: "December to mid-April; in the early morning the gondola has queues.",
        tempo: "full day",
        costo: "day ski pass 35-40 euros, up to 25% less online (trip figure, to be rechecked)",
        url: "https://banskoski.com",
        consiglio: "Book the ski pass online to avoid the queue and save."
      },
      {
        nome: "Illuminated night run",
        testo: "A 7.5 km lit run to ski in the evening, descending to the town. It is one of the most distinctive attractions of Bansko.",
        come: "Gondola to the middle station and descent; hours on the ski area website.",
        quando: "Evening, on night-opening days.",
        tempo: "1-2 hours",
        url: "https://banskoski.com",
        consiglio: "After the run, après-ski at Sopranos or the Happy End Bar, at the base of the gondola."
      },
      {
        nome: "Todorka Peak",
        testo: "The viewpoint at 2,560 metres above the ski area, with a view of the Pirin mountains. You get there by lifts.",
        come: "Gondola and chairlifts.",
        quando: "Clear day, in winter.",
        tempo: "1 hour",
        consiglio: "Allow for wind and cold at the top."
      },
      {
        nome: "Bansko old town",
        testo: "Stone and wood houses of the 'Bansko school' (the nineteenth-century Bulgarian revival), the Holy Trinity church and typical mehanas with kapama, banitsa and shopska salata. It is livelier in the evening.",
        come: "On foot from the gondola station.",
        quando: "Evening.",
        tempo: "2 hours",
        consiglio: "Eat in the mehanas of the old town, not on the main road."
      }
    ],
    sapori: [
      {
        nome: "Kapama",
        testo: "Pork and sausage stew with cabbage, slowly cooked in a clay pot."
      },
      {
        nome: "Banitsa",
        testo: "Cheese pastry, the most common breakfast in Bulgaria."
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
      "From Sofia it is about 2-2h30 by road (160 km): use pre-booked transfers, not street taxis.",
      "The ski area has queues in high season: reach the gondola early.",
      "By car in winter you need winter tyres and chains on board."
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
      "The 24-meter-high stone walls enclosing the complex",
      "The Museum of Ecclesiastical History, with the Rafail Cross carved with over 1,500 biblical figures",
    ],
    cosaFare: ["Visit the monastery complex and the church (there is a dedicated experience page)", "Visit the Museum of Ecclesiastical History"],
    doveDormire: "I didn't sleep there: it was a half-day stop on the road back to Sofia.",
    doveMangiare: "I have no addresses to recommend: the stop was all about the visit.",
    comeArrivare: "With a detour from the main road between Bansko and Sofia.",
    comeSpostarsi: "On foot, inside the monastery complex.",
    periodoMigliore: "all year",
    costi: "Entrance to the complex and the church is free; Museum of Ecclesiastical History about 8 BGN (€4).",
    erroriDaEvitare: ["Entering the church with bare shoulders and knees", "Taking photos or video inside the religious buildings: it's not allowed"],
    miaEsperienza:
      "After the days on the snow, the monastery was the twist of the trip. The brightly colored frescoes of the Church of the Nativity of the Virgin and the silence of the mountain around are the most vivid memory of the whole tour.",
    luoghi: [
      {
        nome: "Rila Monastery complex",
        testo: "The largest Bulgarian monastery, a UNESCO site, founded in the 10th century by St John of Rila and rebuilt in the nineteenth. The 24 metre stone walls enclose a courtyard of black-and-white arcades.",
        come: "By car or bus from Sofia (about 2-2.5 hours) or as a detour on the road between Bansko and Sofia.",
        quando: "Early morning, before the tourist buses.",
        tempo: "1.5-2 hours",
        costo: "free entry",
        consiglio: "It is a place of worship: clothing that covers shoulders and knees."
      },
      {
        nome: "Church of the Nativity of the Virgin",
        testo: "The five-domed church with brightly coloured frescoes in the porch and inside, by nineteenth-century Bulgarian painters (including Zahari Zograf). Photography is not allowed inside.",
        come: "Inside the monastery courtyard.",
        quando: "Morning.",
        tempo: "30-45 minutes",
        costo: "free entry",
        consiglio: "The silence of the mountain around is the best part."
      },
      {
        nome: "Museum of Church History and the Raphael Cross",
        testo: "The monastery museum holds relics and the Raphael Cross, carved with over 1,500 miniature biblical figures. It is small but rich.",
        come: "In the complex, separate entry.",
        quando: "Daytime.",
        tempo: "45 minutes",
        costo: "about 8 BGN, 4 euros (trip figure, to be rechecked)",
        consiglio: "The ticket is easy to lose: keep it in your pocket."
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
      "Do not photograph inside the church and do not shout.",
      "Mountain road: in winter you need snow tyres."
    ],
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'The frescoed facade of the Church of the Nativity of the Virgin at Rila Monastery, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
