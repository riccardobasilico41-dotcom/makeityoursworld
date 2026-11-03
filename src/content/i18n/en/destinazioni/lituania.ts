import type { Destinazione } from '@/lib/types'

export const destinazioniLituania: Destinazione[] = [
  {
    slug: 'vilnius',
    paeseSlug: 'lituania',
    ordine: 1,
    nome: 'Vilnius',
    tipologia: ['città', 'storia', 'arte'],
    giorniConsigliati: '3 days, including the day trip to Trakai',
    visitataPersonalmente: true,
    introduzione:
      "It's the capital of Lithuania and the most populous of the three Baltic capitals. The historic center, a UNESCO site since 1994, is one of the largest Baroque centers in Central and Eastern Europe: over 1,500 historic buildings among Baroque churches, Renaissance courtyards and medieval alleys. On the other bank of the Vilnia river, inside the same historic center, the Užupis neighborhood declared itself an independent republic in 1997, with an honorary constitution, flag and president.",
    percheAndarci:
      "In an area you can cover on foot there's Gediminas Hill, which dominates the city, the highest concentration of Baroque architecture in the Baltics, and a bohemian neighborhood that makes fun of its own institutions with the same seriousness with which it respects them. It's also the natural base for the country's classic day trip, the island castle at Trakai.",
    cosaVedere: [
      "Vilnius Cathedral (Vilniaus katedra), neoclassical, in Cathedral Square, with the separate bell tower and the royal crypts of the Grand Duchy of Lithuania",
      "Gediminas Hill, with the remains of the Upper Castle and Gediminas Tower (you climb up on foot or by funicular): it's the symbol of the city and the highest viewpoint over the historic center",
      "The Užupis neighborhood, with the Constitution Wall (the 41 articles of the neighborhood's \"constitution\", translated into dozens of languages on as many plaques) and the Angel of Užupis, the statue that symbolizes the district",
      "St. Anne's Church, Gothic in red brick, and the nearby Church of St. Francis and St. Bernard: together they're one of the most photographed Gothic views in the city",
      "The University Courtyard of Vilnius University, founded in 1579 and one of the oldest universities in Central and Eastern Europe, with thirteen connected courtyards and astronomical frescoes",
      "The Gate of Dawn (Aušros Vartai), the only gate left of the old walls, with the chapel of the Black Madonna icon, a pilgrimage destination",
      "The Palace of the Grand Dukes of Lithuania, rebuilt on the archaeological remains of the medieval royal castle, now a museum on the history of the Grand Duchy",
    ],
    cosaFare: [
      "Take the funicular (or walk) up to Gediminas Tower for the view over the red roofs of the Old Town",
      "Wander through the art galleries, cafés and small craft workshops of Užupis, looking for the plaques of the Constitution Wall",
      "Cross the thirteen courtyards of Vilnius University, with a stop at the University Library and St. John's Church",
      "Take an evening stroll among the bars of the historic center around Pilies Street, the pedestrian street that runs from Cathedral Square to the Gate of Dawn",
    ],
    doveDormire:
      "In the historic center (Senamiestis) everything is within walking distance: the Pilies Street area is the most central, the one toward Užupis is quieter and has a bohemian air all its own. Outside the walls, the Naujamiestis district (new town) is the cheaper alternative, a few minutes' walk from the historic center.",
    doveMangiare:
      "The national dish is cepelinai, big potato dumplings stuffed with meat or cheese. In summer the symbol of Lithuanian cooking is šaltibarščiai, a bright pink cold beetroot soup served with boiled potatoes. The kibinas, the stuffed pastry brought to Lithuania by the Karaim community of Trakai, can also be found in Vilnius. Several restaurants in the historic center do contemporary Lithuanian cooking at prices that are still low compared to Western Europe.",
    comeArrivare:
      "Vilnius International Airport (VNO) is about 7 km from the center: train or public bus in 10-20 minutes, or a taxi or Bolt in a few minutes. There are direct low-cost flights from some Italian airports, seasonal or year-round; otherwise you connect through a European hub.",
    comeSpostarsi:
      "You can walk the whole historic center. For the rest of the city, public buses and trolleybuses are cheap and frequent. For Trakai there's the regional train (about 34 minutes) or the bus (about 35 minutes) from the central station.",
    periodoMigliore:
      "May to September, for the mild weather and long days. June to August is the warmest and busiest season, with the solstice peak at the end of June. Winter (November to March) is cold, but the city holds up well and in December there are Christmas markets.",
    costi: "a cheap city by Western European standards: Gediminas Tower entrance €8 plus €2-3 for the funicular, regular dinner €10-15 per person, local beer €3-5.",
    erroriDaEvitare: [
      "Thinking that Lithuanian speakers understand Latvian (the language of nearby Riga): they're distantly related Baltic languages, but you can't understand one starting from the other",
      "Crossing Užupis in a hurry: the point of the place is to stop, read the Constitution Wall and wander aimlessly among the galleries",
      "Going up Gediminas Tower in the middle of the day in high season, when the funicular line gets long: better to go early in the morning or toward sunset",
      "Planning Trakai as a \"quick\" one-hour stop: between transport and the castle visit you need half a day",
    ],
    confronti: [
      {
        titolo: 'How to get to Trakai from Vilnius',
        introduzione: "Two equally practical ways to reach the island castle, both from Vilnius central station and with very similar travel times.",
        opzioni: [
          {
            nome: 'Regional train',
            sintesi: "The most direct and punctual connection; Trakai station is about 3 km from the castle.",
            durata: 'about 34 minutes',
            costo: 'a few euros each way',
            pro: ['Punctual and frequent', 'No traffic risk'],
            contro: ["Trakai station is farther from the castle than the bus stop", 'Fewer departures than the bus'],
            perChi: 'anyone who wants reliable schedules and is fine walking (or taking a local bus) from the station to the castle',
          },
          {
            nome: 'Intercity bus',
            sintesi: "More frequent than the train, and the stop is closer to the castle.",
            durata: 'about 35 minutes',
            costo: 'about €5-6 each way',
            pro: ['More frequent departures, up to 50 a day on weekdays', 'Stop about 2.3 km from the castle, a bit closer than the train station'],
            contro: ['Subject to traffic on the main road', 'Slightly more expensive than the train'],
            perChi: 'anyone who wants more freedom with timing, especially on weekends',
          },
        ],
      },
    ],
    esperienzeSlugs: ['uzupis-repubblica-passeggiata'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'The historic center of Vilnius among the greenery, with church domes and roofs and wooded hills in the background',
    immagine: '/images/lituania/vilnius.jpg',
  },
  {
    slug: 'trakai',
    paeseSlug: 'lituania',
    ordine: 2,
    nome: 'Trakai',
    tipologia: ['castello', 'natura', 'storia'],
    giorniConsigliati: 'half a day, as a day trip from Vilnius',
    visitataPersonalmente: true,
    introduzione:
      "Before Vilnius it was the capital of the Grand Duchy of Lithuania, and it sits about 28 km west of the current capital. The red-brick Gothic castle rises on an island in Lake Galvė, connected to the mainland by a wooden footbridge, in the middle of some of the most beautiful lakes in the country: there are over two hundred around Trakai. The Karaim community has lived here for centuries; Grand Duke Vytautas brought them in during the 14th century as his personal guard, and they still have their own language, religion and cuisine.",
    percheAndarci:
      "It's the most photographed day trip in Lithuania, with good reason: a real medieval castle that looks like it's floating on an island, reachable in half a day from Vilnius without a car.",
    cosaVedere: [
      "Trakai Island Castle (Trakų salos pilis), built in the 14th-15th century by Grand Dukes Kęstutis and Vytautas. Today it houses the Trakai History Museum, with rooms on the history of the Grand Duchy and the main tower overlooking the lake",
      "The wooden footbridge between the mainland and the castle island, the town's classic photo",
      "The Karaim district, with the traditional three-windowed wooden houses on Karaimų street (according to local tradition one window faces the street, one the courtyard and one God) and the Kenesa, the Karaim temple that's still active",
      "Lake Galvė, the largest of the lakes around Trakai, with shores set up for walking and for renting boats and canoes",
    ],
    cosaFare: [
      "Visit the museum inside the castle and climb the main tower for the view over Lake Galvė",
      "Rent a rowboat or a pedal boat to see the castle from the water, the most photographed shot",
      "Try kibinai, the stuffed pastries typical of Karaim cuisine, at one of the historic places on the main street",
      "Stroll among the wooden houses of the Karaim district and, if it's open, step into the Kenesa",
    ],
    doveDormire: "On this itinerary Trakai is visited in half a day from Vilnius, without staying overnight.",
    doveMangiare:
      "Karaim kibinai, the town's dish, can be found at several historic places near the castle. For a full meal there are the lakeside restaurants, with a view of the castle and Lithuanian and Karaim cooking.",
    comeArrivare: "From Vilnius central station by regional train (about 34 minutes; the station is about 3 km from the castle) or by intercity bus (about 35 minutes; the stop is about 2.3 km from the castle).",
    comeSpostarsi: "From the station or bus stop to the center of Trakai and the castle it's a relaxed 30-40 minute walk along the lake; alternatively there's a short local bus ride.",
    periodoMigliore: "May to September, when the lake shows its colors and you can rent a boat. The castle is open all year and has a different charm under the snow.",
    costi: "entrance to the castle History Museum €12 in low season (October-March) and €14 in high season (April-September); free on the last Sunday of the month.",
    erroriDaEvitare: [
      "Leaving without checking opening hours: the castle closes one day a week and has shorter hours in low season",
      "Stopping at the footbridge without going into the museum: the inside rooms, including those on the history of the Grand Duchy, are worth the ticket",
      "Thinking you'll get by in a few minutes: between getting there, the visit and the return you need a full half day",
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'The red-brick Trakai Island Castle reflected in the calm waters of Lake Galvė, among the trees',
    immagine: '/images/lituania/trakai.jpg',
  },
]
