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
    comeArrivare: "From Sofia it's a few hours by car. Alternatively there are shuttles and private transfers, the public bus, or the train plus a minibus.",
    comeSpostarsi: "A gondola takes you from the center to the slopes; between one run and the next you get around on your skis.",
    periodoMigliore: "from December to spring, with artificial snow; season dates on the official website",
    costi: "Ski pass prices on the official website, where they usually cost less than at the ticket office; beer and dinners in mehanas cheaper than in the Alps.",
    erroriDaEvitare: ["Buying the ski pass at the ticket window: online, a few days ahead, it costs less", "Expecting Alpine slopes: you go to Bansko for the experience and the price, not for the level of the ski area"],
    miaEsperienza:
      "I didn't expect much from skiing in Bulgaria, and that's what I found: nice, well-kept slopes, nothing over the top compared to the Alps. That's exactly the charm. You go for the exotic experience of skiing in a corner of Europe off the usual circuits, more than for the skiing itself.",
    luoghi: [
      {
        nome: "Bansko ski area",
        testo: "The area is reached by a long gondola from the town to the Banderishka Polyana base; the lifts climb high into the mountains. The slopes are quieter than the Alps. People go for the exotic experience in a corner of Europe off the better-known circuits.",
        come: "Gondola station a few minutes on foot from the centre; ski pass at the ticket office or online.",
        quando: "Winter, season dates on the official website; in the early morning the gondola has queues.",
        tempo: "full day",
        costo: "ski pass prices on the official website",
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
        consiglio: "Allow for wind and cold at the top."
      },
      {
        nome: "Bansko old town",
        testo: "Stone and wood houses of the 'Bansko school' (the nineteenth-century Bulgarian revival), the Holy Trinity church, built by the townspeople in the 19th century, and typical mehanas with kapama, banitsa and shopska salata. It is livelier in the evening.",
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
      "From Sofia: use pre-booked transfers, not street taxis.",
      "The ski area has queues in high season: reach the gondola early.",
      "By car in winter you need winter equipment (snow tyres, chains if required)."
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
    comeArrivare: "With a detour from the main road between Bansko and Sofia.",
    comeSpostarsi: "On foot, inside the monastery complex.",
    periodoMigliore: "all year",
    costi: "Entrance to the complex and the church is free; Museum of Ecclesiastical History about €4 (Bulgaria has used the euro since 2026).",
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
        consiglio: "It is a place of worship: clothing that covers shoulders and knees."
      },
      {
        nome: "Church of the Nativity of the Virgin",
        testo: "The five-domed church with brightly coloured frescoes in the porch and inside, by several nineteenth-century painters, including the brothers Zahari and Dimitar Zograf. For photos inside, follow the monastery's rules.",
        come: "Inside the monastery courtyard.",
        quando: "Morning.",
        tempo: "30-45 minutes",
        costo: "free entry",
        consiglio: "The silence of the mountain around is the best part."
      },
      {
        nome: "Museum of Church History and the Raphael Cross",
        testo: "The monastery museum holds relics and the Raphael Cross, a single piece of wood, 81 x 43 cm, in which the monk Rafail carved 104 religious scenes and 650 miniature figures. It is small but rich.",
        come: "In the complex, separate entry.",
        quando: "Daytime.",
        tempo: "45 minutes",
        costo: "separate ticket, in euros since 2026: price posted on site",
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
      "Inside the church respect the photo rules and speak quietly.",
      "Mountain road: in winter you need snow tyres."
    ],
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'The frescoed facade of the Church of the Nativity of the Virgin at Rila Monastery, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
