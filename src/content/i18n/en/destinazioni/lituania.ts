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
    comeArrivare: "LTG Link regional trains to Trakai leave from Vilnius central station: about 35 minutes and about €1.90 in second class, with a price that varies with demand. Alternatively there is the scheduled bus from the bus station next door, with similar times. Station and stop are a few kilometres from the castle, a walk along the lake. By car it is about 28 km from Vilnius.",
    comeSpostarsi: "From the station or bus stop to the center of Trakai and the castle there's a relaxed walk along the lake; alternatively there's a short local bus ride.",
    periodoMigliore: "May to September, when the lake shows its colors and you can rent a boat. The castle is open all year and has a different charm under the snow.",
    costi: "Daily budget per person sharing a double room: €40-60 on a tight budget (guesthouse, kibinai, only the Island Castle), €80-120 mid-range (lakeside hotel, combined castle ticket, dinner at a restaurant), over €150 with a spa hotel. 2026 prices: train from Vilnius about €1.90 each way, Island Castle €14 from April to September and €12 from October to March, combined with the Peninsula Castle €17 (April-September only), Karaim museum €9.",
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
        quando: "Weekday morning; from October to March there are fewer crowds.",
        tempo: "2-3 hours",
        costo: "€14 April-September, €12 October-March; reduced 7/6 €; combined with the Peninsula Castle €17 (April-September, 2026)",
        orari: "April-September daily 10-19; March, October and November 10-18, closed Mondays; December-February 10-18, closed Mondays and Tuesdays. Last entry 30 minutes before closing",
        lat: 54.6525,
        lng: 24.93306,
        url: "https://trakaimuziejus.lt",
        consiglio: "Go into the museum rooms: they tell the story of the Grand Duchy."
      },
      {
        nome: "Karaite quarter",
        testo: "The district of the Karaite minority, with the typical three-window wooden houses and the kenesa, the Karaim temple. Here you eat kibinai.",
        come: "On foot from the centre, along the street.",
        quando: "Lunch.",
        tempo: "1 hour",
        costo: "free entry",
        lat: 54.64733,
        lng: 24.93374,
        consiglio: "Try the meat kibinai in one of the Karaite restaurants."
      },
      {
        nome: "Lake Galvė",
        testo: "The lake around the castle, dotted with islands, with shores equipped for walking and for renting boats and canoes. From the water you see the castle in a classic frame.",
        come: "On foot from the town; rental on the lakefront.",
        quando: "Summer, morning or late afternoon.",
        tempo: "1-2 hours",
        lat: 54.66,
        lng: 24.93,
        consiglio: "Renting a rowing boat is the easiest way to see the castle from the water."
      },
      {
        nome: "Peninsula Castle",
        testo: "The oldest castle in Trakai, built by Grand Duke Kęstutis in the 14th century on the peninsula between lakes Galvė and Luka. The walls and towers remain, partly rebuilt, inside a large park; the chapel of the former Dominican monastery hosts an exhibition of sacred art. It takes less time and draws fewer people than the Island Castle.",
        come: "On foot from the centre, at the start of Kęstučio gatvė.",
        quando: "Before or after the Island Castle, while the crowds are on the island.",
        tempo: "45 minutes-1 hour",
        costo: "€10 April-September, €8 October-March; reduced 6/5 € (2026)",
        orari: "April-September daily 10-18; October-March Tuesday-Saturday 10-18, closed Sundays and Mondays",
        lat: 54.646,
        lng: 24.937,
        url: "https://trakaimuziejus.lt",
        consiglio: "From April to September the combined ticket with the Island Castle costs €17 and is worth it."
      },
      {
        nome: "S. Šapšal Karaim National Museum",
        testo: "The museum of Trakai's Karaim community, named after the scholar Seraja Šapšal, holds costumes, religious objects, weapons and documents. It tells how the minority came from Crimea at the end of the 14th century and kept its language and faith to this day.",
        come: "On foot along Karaimų gatvė, at number 22.",
        quando: "Together with lunch in the Karaite quarter.",
        tempo: "45 minutes",
        costo: "€9 April-September, €7 October-March; reduced 5/4 € (2026)",
        orari: "Wednesday-Sunday 10-18, closed Mondays and Tuesdays",
        lat: 54.64717,
        lng: 24.93307,
        url: "https://trakaimuziejus.lt"
      },
      {
        nome: "Trakai Kenesa",
        testo: "The Karaim temple of Trakai, wooden, rectangular in plan with a hipped roof, completed around 1800 and restored in the 1890s. It is one of the few surviving kenesas of the former Polish-Lithuanian Commonwealth.",
        come: "On foot along Karaimų gatvė, at number 30.",
        quando: "During the walk through the Karaite quarter.",
        tempo: "15 minutes",
        lat: 54.64778,
        lng: 24.93278,
        consiglio: "It is usually seen only from outside: the interior rarely opens."
      },
      {
        nome: "Basilica of the Visitation",
        testo: "Trakai's parish church, founded by Grand Duke Vytautas in 1409 in Gothic style and later remodelled in Baroque style. It keeps the icon of the Madonna of Trakai, venerated as patroness of Lithuania.",
        come: "On foot from the centre, in the southern part of town, towards the station.",
        quando: "On the way to or from the station.",
        tempo: "20-30 minutes",
        costo: "free entry",
        lat: 54.64286,
        lng: 24.93444
      },
      {
        nome: "Užutrakis Manor",
        testo: "A late-19th-century neoclassical villa of the Tyszkiewicz family, on the opposite shore of Lake Galvė, with a park designed by the French landscape architect Édouard André. From the lawn by the lake you see the Island Castle from a less familiar angle.",
        come: "On foot or by bike from the centre, about 3 km along the lake; in summer also by boat.",
        quando: "Afternoon, with the light on the lake.",
        tempo: "1-2 hours",
        lat: 54.6597,
        lng: 24.9438,
        consiglio: "The villa is under restoration and some parts may be closed: the park is worth it anyway."
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
    programmi: [
      {
        titolo: "Half a day",
        tappe: ["Morning train from Vilnius", "Island Castle and History Museum", "Lunch with kibinai on Karaimų gatvė", "Back to Vilnius in the afternoon"]
      },
      {
        titolo: "1 day",
        tappe: ["Morning: Island Castle as soon as it opens", "Lunch in the Karaite quarter, kenesa and Karaim museum (not Monday or Tuesday)", "Afternoon: Peninsula Castle", "Boat trip on Lake Galvė before the train back"]
      },
      {
        titolo: "2 days",
        tappe: ["Day 1 as above, with a night by the lake", "Day 2 morning: walk or cycle to Užutrakis Manor", "Basilica of the Visitation", "Afternoon: Senieji Trakai and back to Vilnius"]
      }
    ],
    zone: [
      {
        nome: "Old town and Karaimų gatvė",
        perChi: "Those who want the castle a few steps away",
        testo: "Guesthouses and small hotels in the wooden houses, near the restaurants; quiet in the evening.",
        fascia: "€60-110"
      },
      {
        nome: "Lakeshores",
        perChi: "Those looking for a spa and a view of the water",
        testo: "Spa hotels and resorts on lakes Galvė and Totoriškės, a little outside the centre.",
        fascia: "€90-160"
      },
      {
        nome: "Vilnius as a base",
        perChi: "Those doing Trakai as a day trip",
        testo: "More choice and lower prices; by train Trakai is 35 minutes away.",
        fascia: "€50-140"
      }
    ],
    faq: [
      {
        domanda: "How much time do you need for Trakai?",
        risposta: "Half a day is enough for the Island Castle and a lunch of kibinai. A full day adds the Peninsula Castle, the Karaite quarter and a boat trip."
      },
      {
        domanda: "How do you get from Vilnius to Trakai?",
        risposta: "By regional train from the central station, about 35 minutes and about €1.90 each way, or by bus from the bus station next door. From Trakai station to the castle you walk along the lake."
      },
      {
        domanda: "How much does the castle cost?",
        risposta: "In 2026 the Island Castle costs €14 from April to September and €12 from October to March. From April to September there is a combined ticket with the Peninsula Castle for €17."
      },
      {
        domanda: "Is the castle open all year?",
        risposta: "Yes, but in winter it closes on Mondays and Tuesdays, and in March, October and November on Mondays. From April to September it is open daily from 10 to 19."
      },
      {
        domanda: "Can you go around the lake by boat?",
        risposta: "Yes, rowing boats, pedal boats and canoes can be rented on the lakefront, mainly from May to September. It is the best way to see the castle from the water."
      },
      {
        domanda: "What are kibinai?",
        risposta: "Filled pastries, usually with lamb or beef and onion, a typical Karaim dish. In Trakai you eat them in the places on Karaimų gatvė."
      }
    ],
    gite: [
      {
        nome: "Senieji Trakai",
        distanza: "about 3 km",
        come: "By car, bike or taxi from Trakai.",
        testo: "The village of \"old Trakai\", where the first castle stood and where, according to tradition, Grand Duke Vytautas was born. The church with the former Benedictine monastery remains, on a rise among the fields."
      },
      {
        nome: "Vilnius",
        distanza: "about 28 km, 35 minutes by train",
        come: "Regional train or bus to the central station.",
        testo: "The capital, with the UNESCO-listed Baroque Old Town, the Užupis district and Gediminas Tower. For anyone sleeping in Trakai it is an easy day."
      },
      {
        nome: "Kaunas",
        distanza: "about 85 km, about 1 hour by car",
        come: "By car on the A1 motorway, or by train via Vilnius.",
        testo: "The country's second city, capital between the wars, with its Old Town on the river and the modernist buildings of the 1920s and 1930s, UNESCO World Heritage since 2023."
      }
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'The red-brick Trakai Island Castle reflected in the calm waters of Lake Galvė, among the trees',
    immagine: '/images/lituania/trakai.jpg',
  },
]
