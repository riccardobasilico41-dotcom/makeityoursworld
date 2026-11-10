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
      "It's the capital of Lithuania and the most populous of the three Baltic capitals. The historic center, a UNESCO site since 1994, is one of the largest Baroque centers in Central and Eastern Europe, among Baroque churches, Renaissance courtyards and medieval alleys. On the other bank of the Vilnia river, inside the same historic center, the Užupis neighborhood declared itself an independent republic in 1997, with an honorary constitution, flag and president.",
    percheAndarci:
      "In an area you can cover on foot there's Gediminas Hill, which dominates the city, a wealth of Baroque architecture, and a bohemian neighborhood that makes fun of its own institutions with the same seriousness with which it respects them. It's also the natural base for the country's classic day trip, the island castle at Trakai.",
    cosaVedere: [
      "Vilnius Cathedral (Vilniaus katedra), neoclassical, in Cathedral Square, with the separate bell tower and the royal crypts of the Grand Duchy of Lithuania",
      "Gediminas Hill, with the remains of the Upper Castle and Gediminas Tower (you climb up on foot or by funicular): it's the symbol of the city and a viewpoint over the historic center",
      "The Užupis neighborhood, with the Constitution Wall (the articles of the neighborhood's \"constitution\", translated into dozens of languages on as many plaques) and the Angel of Užupis, the statue that symbolizes the district",
      "St. Anne's Church, Gothic in red brick, and the nearby Church of St. Francis and St. Bernard: together they're one of the most photographed Gothic views in the city",
      "The University Courtyard of Vilnius University, founded in 1579 and one of the oldest universities in Central and Eastern Europe, with many connected courtyards and astronomical frescoes",
      "The Gate of Dawn (Aušros Vartai), the only gate left of the old walls, with the chapel of the icon of the Mother of Mercy, a pilgrimage destination",
      "The Palace of the Grand Dukes of Lithuania, rebuilt on the archaeological remains of the medieval royal castle, now a museum on the history of the Grand Duchy",
    ],
    cosaFare: [
      "Take the funicular (or walk) up to Gediminas Tower for the view over the red roofs of the Old Town",
      "Wander through the art galleries, cafés and small craft workshops of Užupis, looking for the plaques of the Constitution Wall",
      "Cross the courtyards of Vilnius University, with a stop at the University Library and St. John's Church",
      "Take an evening stroll among the bars of the historic center around Pilies Street, the pedestrian street that runs from Cathedral Square to the Gate of Dawn",
    ],
    doveDormire:
      "In the historic center (Senamiestis) everything is within walking distance: the Pilies Street area is the most central, the one toward Užupis is quieter and has a bohemian air all its own. Outside the walls, the Naujamiestis district (new town) is the cheaper alternative, a few minutes' walk from the historic center.",
    doveMangiare:
      "The national dish is cepelinai, big potato dumplings stuffed with meat or cheese. In summer the symbol of Lithuanian cooking is šaltibarščiai, a bright pink cold beetroot soup served with boiled potatoes. The kibinas, the stuffed pastry brought to Lithuania by the Karaim community of Trakai, can also be found in Vilnius. Several restaurants in the historic center do contemporary Lithuanian cooking at prices that are still low compared to Western Europe.",
    comeArrivare:
      "Vilnius International Airport (VNO) is close to the center: train or public bus, or a taxi or ride-hailing app. There are direct low-cost flights from some Italian airports, seasonal or year-round; otherwise you connect through a European hub. The airport is about 7 km away: the train reaches the central station in about 10 minutes (about €0.80, LTG Link app or machine, infrequent departures), buses 3G and 88 take 15-25 minutes with the city ticket from about €1 (Trafi or m.Ticket app), and Bolt costs about €8-12. From Riga the Lux Express bus takes about 4 hours, with fares from a few euros booked ahead up to €20-25.",
    comeSpostarsi:
      "You can walk the whole historic center. For the rest of the city, public buses and trolleybuses are cheap and frequent. For Trakai there's the regional train or the bus from the central station.",
    periodoMigliore:
      "May to September, for the mild weather and long days. June to August is the warmest and busiest season, with the solstice peak at the end of June. Winter (November to March) is cold, but the city holds up well and in December there are Christmas markets.",
    costi: "A cheap city by Western European standards, on a par with Riga. Daily budget per person with a shared double room: €45-65 on a tight budget (simple room, lunches at Halės market), €85-125 mid-range (3-4-star hotel in the Old Town, a couple of admissions, restaurant dinner), over €170 with a luxury hotel. 2026 admissions: Gediminas Tower €8, funicular €2-3, Palace of the Grand Dukes €16 full ticket, MO Museum €11; Trakai castles about €17.",
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
            sintesi: "The most direct and punctual connection; Trakai station is a few kilometres from the castle.",
            durata: 'under an hour',
            costo: 'a few euros each way',
            pro: ['Punctual and frequent', 'No traffic risk'],
            contro: ["Trakai station is farther from the castle than the bus stop", 'Fewer departures than the bus'],
            perChi: 'anyone who wants reliable schedules and is fine walking (or taking a local bus) from the station to the castle',
          },
          {
            nome: 'Intercity bus',
            sintesi: "More frequent than the train, and the stop is closer to the castle.",
            durata: 'under an hour',
            costo: 'a few euros each way',
            pro: ['Frequent departures', 'Stop a bit closer to the castle than the train station'],
            contro: ['Subject to traffic on the main road', 'Slightly more expensive than the train'],
            perChi: 'anyone who wants more freedom with timing, especially on weekends',
          },
        ],
      },
    ],
    miaEsperienza:
      "Vilnius was the first stop of our Baltic capitals trip with friends: three days between the Old Town, Gediminas Tower, the Palace of the Grand Dukes and Užupis, then the bus to Riga.",
    luoghi: [
      {
        nome: "Vilnius Cathedral and Cathedral Square",
        testo: "A cathedral with a neoclassical look, from Laurynas Gucevičius's late-18th-century rebuilding, with a freestanding bell tower that grew from a Lower Castle tower. Grand dukes and queens rest in the crypts and the royal mausoleum. The square is the city's meeting place, at the foot of Gediminas Hill.",
        come: "On foot from the Old Town.",
        quando: "Morning, for the light and fewer crowds.",
        tempo: "45 minutes",
        costo: "free entry",
        orari: "Square always accessible; crypts by guided tour only",
        lat: 54.68589,
        lng: 25.28779,
        consiglio: "Inside, don't miss the baroque Chapel of St Casimir."
      },
      {
        nome: "Gediminas Hill and Tower",
        testo: "The symbol of the city: the tower, rebuilt in 1933, is what remains of the Upper Castle and holds finds from the hill and models of Vilnius's castles. You go up on foot or by the inclined lift; from the platform you see the Old Town.",
        come: "On foot from Cathedral Square, or by the hill lift.",
        quando: "Late afternoon, for the light on the red roofs of the Old Town.",
        tempo: "1.5 hours",
        costo: "Tower €8; funicular €2 one way, €3 return (2026)",
        lat: 54.6867,
        lng: 25.2907,
        url: "https://www.lnm.lt",
        consiglio: "Walk up and, if needed, come down by the lift."
      },
      {
        nome: "Palace of the Grand Dukes and Museum of Occupations",
        testo: "The Palace, rebuilt on the ruins of the royal castle, tells of the Grand Duchy. A short distance away, the Museum of Occupations and Freedom Fights, in the former KGB building, documents the Soviet period.",
        come: "On foot: the Palace at the foot of the hill, the Museum a short way off in the centre.",
        quando: "Morning; opening hours and closing days on the official website.",
        tempo: "2 hours each",
        costo: "Palace of the Grand Dukes: full ticket €16, single routes €4-10 (2026)",
        orari: "Palace in summer (1 June-31 August) Mon-Wed and Sun 10-18, Thu-Sat 10-20; shorter hours the rest of the year, usually closed Monday. Occupation Museum: hours on the website",
        lat: 54.68621,
        lng: 25.28944,
        url: "https://www.valdovurumai.lt/en/visit",
        consiglio: "The cells in the KGB basement are hard to visit, but important."
      },
      {
        nome: "Pilies Street and Town Hall Square",
        testo: "Pilies gatvė is the city's oldest street, running south from Cathedral Square, lined with amber and linen stalls. It continues as Didžioji to the triangular Town Hall Square with its Neoclassical Town Hall: it is the spine of any Old Town visit.",
        come: "On foot, from the Cathedral towards the Gate of Dawn.",
        quando: "Morning for the façades, evening for the bars.",
        tempo: "1 hour",
        costo: "Free",
        orari: "Always accessible",
        lat: 54.68348,
        lng: 25.28934
      },
      {
        nome: "Gate of Dawn",
        testo: "The only part of the walls left intact after their demolition in 1799-1805, with the chapel housing the icon of the Mother of Mercy, held to be miraculous: one of the main Catholic pilgrimage sites in Lithuania.",
        come: "On foot from Town Hall Square.",
        quando: "Morning.",
        tempo: "30 minutes",
        costo: "free entry",
        lat: 54.67431,
        lng: 25.28956,
        consiglio: "It is a place of prayer: enter the chapel quietly."
      },
      {
        nome: "Užupis",
        testo: "The bohemian district across the stream, which proclaimed itself a republic on 1 April 1997. On the wall of Paupio street are the plaques with the 38 articles and 3 mottos of its 'constitution', in more than twenty languages.",
        come: "On foot from the Old Town, across the bridge.",
        quando: "Daytime; 1 April is the independence festival.",
        tempo: "1-2 hours",
        costo: "free entry",
        orari: "District always accessible",
        lat: 54.68063,
        lng: 25.29543,
        consiglio: "Look for the Angel of Užupis, the symbolic statue."
      },
      {
        nome: "St Anne's and Bernardine churches",
        testo: "The red-brick Gothic St Anne's church, next to the larger Church of St Francis and St Bernard. Together they form one of the most photographed views.",
        come: "On foot from the Cathedral.",
        quando: "Morning or evening.",
        tempo: "30-45 minutes",
        costo: "free entry",
        lat: 54.68302,
        lng: 25.29321,
        consiglio: "The best side for the photo is from the courtyard of the Bernardine church."
      },
      {
        nome: "Vilnius University",
        testo: "Founded in 1579, it has about thirteen linked courtyards, the baroque St John's church and a historic library. Hours and tickets on the university website.",
        come: "On foot, on Pilies gatvė.",
        quando: "Weekday morning.",
        tempo: "1 hour",
        orari: "Courtyards open Mon-Sat 9-18, ticket of a few euros",
        lat: 54.68282,
        lng: 25.28783,
        url: "https://www.vu.lt",
        consiglio: "In the Grand Courtyard stands the bell tower of St John's, rising above the centre."
      },
      {
        nome: "MO Museum",
        testo: "The museum of modern Lithuanian art from 1960 to today, in a white building designed by Daniel Libeskind and opened in 2018. The collection shows how artists worked under Soviet censorship and after; there is also a terrace above the entrance.",
        come: "A 10-minute walk from Town Hall Square, on Pylimo gatvė.",
        quando: "Afternoon or evening: it closes at 20:00.",
        tempo: "1.5-2 hours",
        costo: "€11, concession €6, family €22 (2026)",
        orari: "Daily 10-20, closed Tuesday",
        lat: 54.67935,
        lng: 25.2775,
        url: "https://mo.lt/en/"
      },
      {
        nome: "Church of St Peter and St Paul",
        testo: "Outside the centre, in the Antakalnis district, it has one of Europe's most extraordinary Baroque interiors: some two thousand white stucco figures, saints, angels, battle scenes and sea monsters, made by Italian artists in the 17th century. You would never guess it from outside.",
        come: "About 25 minutes on foot from the Cathedral along the river, or bus to Antakalnis.",
        quando: "In the morning, with light coming through the windows.",
        tempo: "45 minutes",
        costo: "Free",
        lat: 54.69412,
        lng: 25.30621,
        consiglio: "Combine it with Kalnai Park and the Hill of Three Crosses, halfway there."
      },
      {
        nome: "Hill of Three Crosses",
        testo: "Three white crosses on the hill in Kalnai Park, rebuilt in 1989 after the Soviet authorities blew up the originals. It is one of the widest viewpoints over the Old Town, less crowded than Gediminas Tower.",
        come: "On foot from Kalnai Park, a 15-minute climb on woodland paths.",
        quando: "At sunset.",
        tempo: "1 hour",
        costo: "Free",
        orari: "Park always open",
        lat: 54.68674,
        lng: 25.29755
      },
      {
        nome: "Literatų gatvė",
        testo: "A narrow Old Town street whose wall is covered with hundreds of small artworks, plaques and objects dedicated to writers linked to Lithuania, from Mickiewicz to Dostoevsky. You walk through it in minutes, but it is worth a close look.",
        come: "On foot, between Pilies and Didžioji.",
        quando: "During the day.",
        tempo: "15 minutes",
        costo: "Free",
        orari: "Always accessible",
        lat: 54.68226,
        lng: 25.2901
      },
      {
        nome: "Halės covered market",
        testo: "The city's oldest covered market, in a late 19th-century iron and glass hall near the Gate of Dawn. Among stalls of meat, smoked fish, cheese and black bread are small bars and kiosks serving good cheap lunches.",
        come: "A 5-minute walk from the Gate of Dawn.",
        quando: "In the morning, when the stalls are full.",
        tempo: "45 minutes",
        costo: "Free",
        lat: 54.67337,
        lng: 25.28646
      },
      {
        nome: "Bernardine Garden (Bernardinų sodas)",
        testo: "The restored park between the Bernardine church and the Vilnia river, with flowerbeds, a musical fountain and shady benches. It is where locals spend summer afternoons, steps from the Old Town and Užupis.",
        come: "A 2-minute walk from St Anne's Church.",
        quando: "A summer afternoon; in autumn for the colours.",
        tempo: "30-45 minutes",
        costo: "Free",
        lat: 54.68369,
        lng: 25.29719
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Cathedral Square and the climb to Gediminas Tower",
          "Palace of the Grand Dukes",
          "Lunch on Pilies Street or at Halės market",
          "Afternoon: University, Literatų gatvė, St Anne's Church and the Bernardine Garden",
          "Sunset in Užupis"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2 morning: Gate of Dawn and Town Hall Square",
          "Occupation Museum",
          "Afternoon: MO Museum (not on Tuesdays)",
          "Evening: Hill of Three Crosses at sunset"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1 and 2 as above",
          "Day 3 morning: Church of St Peter and St Paul in Antakalnis",
          "Afternoon: Trakai by train, the island castle and kibinai in the Karaite quarter"
        ]
      }
    ],
    zone: [
      {
        nome: "Old Town",
        testo: "Cobbled streets and evening life; pricey and noisy at weekends.",
        perChi: "Those who want to be on foot near everything",
        fascia: "€70-140"
      },
      {
        nome: "Užupis",
        testo: "Quiet, a few minutes on foot; few hotels.",
        perChi: "Those seeking an artists' atmosphere",
        fascia: "€60-110"
      },
      {
        nome: "Naujamiestis",
        testo: "A nineteenth-century district just outside the centre, linked on foot or by bus.",
        perChi: "Those who want to save",
        fascia: "€50-90"
      }
    ],
    sapori: [
      {
        nome: "Cepelinai",
        testo: "Large potato dumplings filled with meat or cheese, with cream and bacon."
      },
      {
        nome: "Šaltibarščiai",
        testo: "Cold beetroot and kefir soup, pink, typical of summer."
      },
      {
        nome: "Kibinai",
        testo: "Pastries filled with meat, a Karaite speciality (especially in Trakai)."
      },
      {
        nome: "Kepta duona",
        testo: "Fried rye bread with garlic and cheese, a beer snack."
      }
    ],
    attenzioni: [
      "Taxis: use a recognised app or a registered taxi with the meter on.",
      "Pickpockets in busy places and on public transport; in bars do not leave drinks unattended.",
      "In winter pavements are icy: suitable shoes."
    ],
    faq: [
      {
        domanda: "How many days do you need in Vilnius?",
        risposta: "Two days for the Old Town, Užupis, the main museums and a sunset from the Hill of Three Crosses. With three days you add Trakai, the best day trip from the capital."
      },
      {
        domanda: "Is Vilnius expensive?",
        risposta: "No: together with Riga it is among the cheapest capitals in the European Union. Lunch at the market or in a simple restaurant costs little more than €10, and many of the main sights, churches and districts, are free."
      },
      {
        domanda: "How do you get from Vilnius airport to the centre?",
        risposta: "By train in about 10 minutes to the central station (about €0.80), by bus 3G or 88 in 15-25 minutes, or by Bolt for about €8-12."
      },
      {
        domanda: "Can you visit Trakai as a day trip?",
        risposta: "Yes, half a day and a train or bus of about 35 minutes are enough. In low season the castle has shorter hours and closing days: check them first."
      },
      {
        domanda: "What is the Republic of Užupis?",
        risposta: "It is the artists' district across the Vilnia river, which declared itself a republic on 1 April 1997, with a tongue-in-cheek constitution posted in dozens of languages on Paupio street. No documents are needed to enter: it is a celebration, not a border."
      },
      {
        domanda: "When should you go to Vilnius?",
        risposta: "May to September for the weather and outdoor tables; December for the Christmas tree on Cathedral Square. Winter is very cold, but the city is quiet and even cheaper."
      }
    ],
    gite: [
      {
        nome: "Trakai",
        distanza: "about 28 km, 35 minutes by train",
        come: "Regional train from the central station or bus from the coach station next door.",
        testo: "The former capital of the Grand Duchy, with the red-brick Gothic castle on an island in Lake Galvė and the Karaite quarter with wooden houses and kibinai. Combined castles ticket about €17 in 2026."
      },
      {
        nome: "Kaunas",
        distanza: "about 100 km, 1-1.5 hours by train",
        come: "Frequent trains from Vilnius central station, or bus.",
        testo: "The country's second city and interwar capital, with an Old Town on the river, the castle and dozens of 1920s-30s modernist buildings, a UNESCO site since 2023."
      },
      {
        nome: "Europos Parkas",
        distanza: "about 20 km, 30 minutes by car",
        come: "By car or taxi; public transport links are awkward.",
        testo: "An open-air museum of contemporary art in the woods, with over a hundred sculptures, near the spot once calculated as the geographical centre of Europe."
      },
      {
        nome: "Hill of Crosses",
        distanza: "about 210 km, 2.5-3 hours by car",
        come: "By car, on an organised tour, or by train to Šiauliai and then bus or taxi.",
        testo: "A small hill covered with hundreds of thousands of crosses left by pilgrims, even when the Soviets had them removed. It is far: it makes more sense as a stop on the way to Riga than as a day trip."
      }
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
      "Before Vilnius it was the capital of the Grand Duchy of Lithuania, and it sits west of the current capital. The red-brick Gothic castle rises on an island in Lake Galvė, connected to the mainland by a wooden footbridge, in the middle of some of the most beautiful lakes in the country. The Karaim community has lived here for centuries; Grand Duke Vytautas brought them in during the 14th century as his personal guard, and they still have their own language, religion and cuisine.",
    percheAndarci:
      "It's the most photographed day trip in Lithuania, with good reason: a real medieval castle that looks like it's floating on an island, reachable in half a day from Vilnius without a car.",
    cosaVedere: [
      "Trakai Island Castle (Trakų salos pilis), built in the 14th-15th century by Grand Dukes Kęstutis and Vytautas. Today it houses the Trakai History Museum, with rooms on the history of the Grand Duchy and the main tower overlooking the lake",
      "The wooden footbridge between the mainland and the castle island, the town's classic photo",
      "The Karaim district, with the traditional three-windowed wooden houses on the main street (according to local tradition one window faces the street, one the courtyard and one God) and the Kenesa, the Karaim temple that's still active",
      "Lake Galvė, around the castle, with shores set up for walking and for renting boats and canoes",
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
    comeArrivare: "From Vilnius central station by regional train or by intercity bus; station and stop are a few kilometres from the castle.",
    comeSpostarsi: "From the station or bus stop to the center of Trakai and the castle there's a relaxed walk along the lake; alternatively there's a short local bus ride.",
    periodoMigliore: "May to September, when the lake shows its colors and you can rent a boat. The castle is open all year and has a different charm under the snow.",
    costi: "tickets and prices of the castle History Museum on the official website.",
    erroriDaEvitare: [
      "Leaving without checking opening hours: the castle's opening days and hours change with the season",
      "Stopping at the footbridge without going into the museum: the inside rooms, including those on the history of the Grand Duchy, are worth the ticket",
      "Thinking you'll get by in a few minutes: between getting there, the visit and the return you need a full half day",
    ],
    miaEsperienza:
      "We went to Trakai from Vilnius for an afternoon during our Baltic capitals trip with friends: the island castle with its museum and tower, and kibinai before heading back in the evening.",
    luoghi: [
      {
        nome: "Trakai Island Castle",
        testo: "A red-brick Gothic castle on an island in Lake Galvė, begun in the 14th century by Grand Duke Kęstutis and completed by his son Vytautas, who died there in 1430. Rebuilt in the 20th century, it houses the Trakai History Museum.",
        come: "From the town, pedestrian wooden bridge from the shore.",
        quando: "Weekday morning; October-March fewer crowds. From May to September open daily 10-19; March-April and October-November closed on Mondays, December-February closed Mondays and Tuesdays (10-18).",
        tempo: "2-3 hours",
        costo: "14 € April-September, 12 € October-March; reduced 7/6 € (2026)",
        consiglio: "Go into the museum rooms: they tell the story of the Grand Duchy."
      },
      {
        nome: "Karaite quarter",
        testo: "The district of the Karaite minority, with the typical three-window wooden houses and the kenesa, the Karaim temple. Here you eat kibinai.",
        come: "On foot from the centre, along the street.",
        quando: "Lunch.",
        tempo: "1 hour",
        consiglio: "Try the meat kibinai in one of the Karaite restaurants."
      },
      {
        nome: "Lake Galvė",
        testo: "The lake around the castle, dotted with islands, with shores equipped for walking and for renting boats and canoes. From the water you see the castle in a classic frame.",
        come: "On foot from the town; rental on the lakefront.",
        quando: "Summer, morning or late afternoon.",
        tempo: "1-2 hours",
        consiglio: "Renting a rowing boat is the easiest way to see the castle from the water."
      }
    ],
    sapori: [
      {
        nome: "Kibinai",
        testo: "Karaite pastries filled with lamb or beef and onion."
      },
      {
        nome: "Beer and kvas",
        testo: "Local drinks in the lake restaurants."
      }
    ],
    attenzioni: [
      "Trakai, west of Vilnius, is a half-day trip: trains and buses leave from the station.",
      "In summer parking and lakeside restaurants fill up at weekends.",
      "Restaurants facing the castle are pricier than those in the Karaite quarter."
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'The red-brick Trakai Island Castle reflected in the calm waters of Lake Galvė, among the trees',
    immagine: '/images/lituania/trakai.jpg',
  },
]
