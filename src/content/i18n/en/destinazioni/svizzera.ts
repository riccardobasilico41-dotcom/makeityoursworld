import type { Destinazione } from '@/lib/types'

export const destinazioniSvizzera: Destinazione[] = [
  {
    slug: 'interlaken',
    paeseSlug: 'svizzera',
    ordine: 1,
    nome: 'Interlaken and the lakes of Thun and Brienz',
    tipologia: ['laghi', 'base logistica', 'montagna'],
    giorniConsigliati: '1-2 days as a base, the whole rest of the trip revolves around it',
    visitataPersonalmente: true,
    introduzione:
      "Interlaken means \"between the lakes\": it sits on a strip of land between Lake Thun to the west and Lake Brienz to the east, both a milky turquoise from suspended glacial sediments. It is the logistics hub of the region, with several campsites within a few kilometers.",
    percheAndarci:
      "It is the most practical base for a van in the whole Jungfrau Region: there is the main station, supermarkets and outdoor gear rentals, and every other zone in this guide can be reached in a day without changing accommodation every night.",
    cosaVedere: [
      'Lake Thun and Lake Brienz, turquoise and milky from glacial sediments',
      "The center of Interlaken, with the Höheweg, the long avenue with the Jungfrau in view at the end",
      "Oberhofen Castle, on Lake Thun, with its botanical park overlooking the water",
      "The village of Iseltwald, on Lake Brienz, with a pier made famous by some international productions",
    ],
    cosaFare: [
      'A trip on a historic boat on one of the two lakes, with steamboats still in service',
      "A walk along the Höheweg at sunset, when the Jungfrau lights up pink",
      'Do the big shop at Coop or Migros in the center before heading up into the valleys, where prices go up',
    ],
    doveDormire:
      "On the shores of the two lakes, a few minutes from the center, there are several campsites equipped for vans: it is the area of the guide with the most legal places to sleep.",
    doveMangiare:
      "Rösti, fondue and raclette with the local alpine cheeses are the basis of the region's cuisine. A simple meal in a mid-range restaurant rarely costs less than 25-30 CHF per person.",
    comeArrivare: "Direct motorway exit from Bern (about an hour) or from the Valais via Grimsel-Furka.",
    comeSpostarsi: "On foot in the center; the van is for reaching the other zones, all within 20-30 minutes of driving.",
    periodoMigliore: 'June to September, with July-August hotter and more crowded.',
    costi: 'Campsites 35-50 CHF/night; boat trip from about 20-30 CHF per single trip.',
    erroriDaEvitare: [
      'Arriving without having booked, or at least identified, a campsite for the first night',
      'Shopping at the minimarkets in the valleys, much more expensive, instead of at the supermarkets in Interlaken',
      "Underestimating how much time the other zones take: Interlaken is the base, not the main destination of the trip",
    ],
    luoghi: [
      {
        nome: "Harder Kulm",
        testo: "The viewpoint above Interlaken, at 1,322 metres, with views of both lakes and, on a clear day, of Eiger, Mönch and Jungfrau. At the top are an observation platform and a restaurant in a castle-like building.",
        come: "Funicular from Harder Bahn station, near Interlaken Ost: about 10 minutes up.",
        quando: "Late afternoon for the light on the lakes. Seasonal: dates on the official website.",
        tempo: "2 hours",
        consiglio: "Check the webcams before going up: with low cloud the view disappears."
      },
      {
        nome: "Lake Brienz and Giessbach Falls",
        testo: "The greener, less touristy lake, with the Giessbach falls dropping in 14 steps beside a historic hotel. Reached by boat.",
        come: "Boat from Interlaken Ost or Brienz to the pier, then the historic Giessbach funicular.",
        quando: "Morning, in spring when the falls are full.",
        tempo: "half a day",
        consiglio: "The short walk through the woods from the pier to the falls is pleasant."
      },
      {
        nome: "Lake Thun",
        testo: "The lake west of Interlaken, with Thun castle, shore villages and the historic steamer. Spiez has a castle on the lake.",
        come: "Boat or train from Interlaken West; the boat is much slower than the train.",
        quando: "Summer.",
        tempo: "half a day",
        consiglio: "Take the boat to Thun and return by train, to see the lake and save time."
      },
      {
        nome: "Iseltwald",
        testo: "A small village on Lake Brienz, on a promontory with a former castle, now a rehabilitation centre. Famous for the jetty where a scene of the Korean series \"Crash Landing on You\" was shot.",
        come: "By car or bus from Interlaken Ost.",
        quando: "Early morning, before the groups.",
        tempo: "1-2 hours",
        costo: "Paid jetty, CHF 5, with a turnstile (introduced in 2023).",
        consiglio: "The pier is best at dawn."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Harder Kulm in the morning",
          "Boat on Lake Brienz",
          "Giessbach in the afternoon",
          "Dinner in Interlaken"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Harder Kulm and Lake Thun",
          "Day 2: Lake Brienz, Giessbach and Iseltwald"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        perChi: "for a convenient base",
        testo: "Trains to all valleys. High prices and a very touristy centre, but convenient without a car."
      },
      {
        nome: "Brienz and Iseltwald",
        perChi: "for quiet",
        testo: "On Lake Brienz, with fewer crowds; valley destinations need a car or train."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Grated, fried potatoes, often with egg or cheese, the base of German-Swiss cooking."
      },
      {
        nome: "Cheese fondue",
        testo: "Melted Gruyère and Emmental, eaten with bread from a shared pot."
      },
      {
        nome: "Swiss chocolate",
        testo: "From the town's shops and the Coop and Migros supermarkets, the cheapest."
      }
    ],
    attenzioni: [
      "Prices are very high: lunch from the Coop and Migros supermarkets cuts costs.",
      "Boat tickets are included in the Swiss Travel Pass: check before paying.",
      "To drive you need the motorway vignette, bought at the border or online."
    ],
    esperienzeSlugs: ['giro-battello-laghi-thun-brienz'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "Interlaken seen from above, with the emerald-colored Aare river crossing the town among the mountains, on the plain between lakes Thun and Brienz",
    immagine: '/images/svizzera/interlaken.jpg',
  },
  {
    slug: 'lauterbrunnen',
    paeseSlug: 'svizzera',
    ordine: 2,
    nome: 'Lauterbrunnen and the valley of waterfalls',
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: '1 full day',
    visitataPersonalmente: true,
    introduzione:
      "A glacial gorge with vertical walls, with seventy-two waterfalls counted along its twelve kilometers. The most famous is the Staubbach, a 300-meter drop almost in the village center: it inspired Goethe and, according to local tradition, the valley of Rivendell in \"The Lord of the Rings\".",
    percheAndarci:
      "It is the most scenic valley in the region and the starting point for Mürren, Wengen and Gimmelwald, car-free villages reachable only by cable car or cog railway. And there are the Trümmelbachfälle, a geological phenomenon with no equal elsewhere.",
    cosaVedere: [
      'The Staubbach waterfall, plunging 300 meters almost in the center of the village',
      'The Trümmelbachfälle, ten glacial waterfalls seen from tunnels and elevators carved into the mountain (see the dedicated experience page)',
      'The car-free villages of Wengen and Gimmelwald, reachable only by cable car or cog railway',
    ],
    cosaFare: [
      'Walk or bike the valley floor among the waterfalls, on an almost flat route',
      "Go up by cable car or cog railway toward Mürren or Wengen for the view from above over the gorge",
      'Visit the Trümmelbachfälle, open from early April to early November',
    ],
    doveDormire:
      "Equipped campsites on the valley floor. **In this valley free camping is prohibited**, with fines of up to 200 CHF, and the ban is enforced.",
    doveMangiare: 'Valley-floor restaurants with Swiss-German mountain cuisine; prices in the upper-middle range of the region.',
    comeArrivare: 'From Interlaken, 20 minutes by car or train.',
    comeSpostarsi: "The valley floor on foot or by bike; for Mürren, Wengen and Gimmelwald you need a cable car or cog railway, because cars can't get there.",
    periodoMigliore: 'June to September, with the waterfalls most abundant in early summer because of the snowmelt.',
    costi: 'Trümmelbachfälle 18 CHF adult admission, 8 CHF children 6-15.',
    erroriDaEvitare: [
      "Setting up a table and chairs outside the van in an unauthorized car park: the local police check exactly this, even where sleeping in the vehicle is tolerated",
      'Arriving at the Trümmelbachfälle without knowing they are closed from early November to early April',
      "Not planning for rain shoes: the waterfall tunnels are damp and slippery",
    ],
    luoghi: [
      {
        nome: "Staubbach Falls",
        testo: "A waterfall about 297 metres high dropping from a sheer wall above the village, often turned to mist by the wind.",
        come: "On foot from Lauterbrunnen station, a few minutes; you watch it from the village.",
        quando: "Morning, when sun enters the valley. Spring for peak flow.",
        tempo: "45 minutes",
        consiglio: "Bring a waterproof jacket: the wind carries the spray."
      },
      {
        nome: "Trümmelbach Falls",
        testo: "Ten glacial waterfalls running inside the mountain, seen from walkways and tunnels with a tunnel lift. Open from spring to autumn; no children under 4 and no dogs.",
        come: "By PostBus from Lauterbrunnen towards Stechelberg, or on foot along the valley.",
        quando: "Open roughly from early April to early November, 9 am to 5 pm (July and August 8.30 am-6 pm).",
        tempo: "1-1.5 hours",
        url: "https://www.truemmelbachfaelle.ch/",
        consiglio: "Wear shoes with grippy soles: walkways are wet."
      },
      {
        nome: "Wengen",
        testo: "A car-free village on a high terrace, reached by cog railway. It gives access to Kleine Scheidegg and the line to Jungfraujoch.",
        come: "Cog railway from Lauterbrunnen.",
        quando: "All year.",
        tempo: "2 hours",
        consiglio: "Start here for the walk to Männlichen, with views of the Eiger group."
      },
      {
        nome: "The valley on foot to Stechelberg",
        testo: "The flat valley path that follows the stream from Lauterbrunnen towards Stechelberg, between meadows and rock walls with dozens of waterfalls coming down. It passes near Trümmelbach and the cable car station for Mürren. It is the easiest walk in the region and shows why the valley is famous.",
        come: "Start on foot from the village; to return there is the postbus along the valley road.",
        quando: "May to October; after rainy days the waterfalls are fuller.",
        tempo: "2-3 hours on foot",
        costo: "Free.",
        consiglio: "Walk out and take the bus back: the path climbs gently towards Stechelberg."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Staubbach at opening",
          "Trümmelbach Falls",
          "Cog railway to Wengen",
          "Panoramic walk and return"
        ]
      }
    ],
    zone: [
      {
        nome: "Lauterbrunnen",
        perChi: "to stay in the valley",
        testo: "Campsites and lodgings on the valley floor, almost car-free at night; colder and quieter in the evening."
      },
      {
        nome: "Wengen and Mürren",
        perChi: "for plateau villages",
        testo: "Car-free, with views from above, but you must reach them by cog railway or cable car with luggage."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Fried potatoes, with cheese or sausage."
      },
      {
        nome: "Älplermagronen",
        testo: "Pasta, potatoes, cheese and fried onions, an alpine-hut dish."
      },
      {
        nome: "Alpine cheeses",
        testo: "Bought from small shops and producers."
      }
    ],
    attenzioni: [
      "Cows graze on trails: do not approach mothers with calves.",
      "Weather changes fast: fog and rain can hide the upper falls."
    ],
    esperienzeSlugs: ['trummelbachfalle'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "The Staubbach waterfall plunging from the rock wall above the chalets of Lauterbrunnen, among low clouds, in almost monochrome tones",
    immagine: '/images/svizzera/lauterbrunnen.jpg',
  },
  {
    slug: 'grindelwald',
    paeseSlug: 'svizzera',
    ordine: 3,
    nome: 'Grindelwald and the First',
    tipologia: ['montagna', 'panorama', 'famiglia'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      "At the foot of the Eiger's north face, Grindelwald is the most \"postcard\" village of the region. From here the cable car to the First leaves, where the Cliff Walk gives one of the most photographed views of the Bernese Alps without any demanding walking.",
    percheAndarci:
      "It is the easiest way to get close to the Eiger without serious elevation gain, and the First suits both those who walk to the Bachalpsee and those who only want the view from the cable car.",
    cosaVedere: [
      'The north face of the Eiger, visible from the whole village',
      'The First Cliff Walk, a cantilevered metal walkway on the rock face',
      'The Bachalpsee, a small alpine lake that reflects the Eiger, Mönch and Jungfrau on windless days',
    ],
    cosaFare: [
      'Take the cable car up to the First and walk the Cliff Walk, included in the ticket and repeatable as many times as you like',
      'Walk to the Bachalpsee, 2-3 hours round trip with moderate elevation gain',
      'Try the First Flyer zipline, an extra paid activity on site',
    ],
    doveDormire: 'Campsites in the area, cheaper than Interlaken but with less choice.',
    doveMangiare: 'Mountain restaurants with a view of the Eiger, prices in line with the rest of the region.',
    comeArrivare: 'From Interlaken, 20 minutes by car or train.',
    comeSpostarsi: 'The village is walkable; for the First and the Bachalpsee you need the cable car.',
    periodoMigliore: 'June to September; the Bachalpsee often stays frozen until well into June.',
    costi: 'First cable car 72-76 CHF round trip depending on the season; Cliff Walk included.',
    erroriDaEvitare: [
      "Going up to the First thinking the Bachalpsee is \"just around the corner\": the walk takes 2-3 hours round trip",
      'Underestimating the wind at the top, which on the Cliff Walk can be strong even with clear skies in the valley',
    ],
    luoghi: [
      {
        nome: "First and the Cliff Walk",
        testo: "From Grindelwald the gondola climbs to First, at 2,166 metres, with views of Eiger, Mönch and Jungfrau. The Cliff Walk is a 45-metre metal walkway hanging over the void along the wall.",
        come: "Gondola from Grindelwald, about 25 minutes with stops at Bort and Schreckfeld. The Cliff Walk is included in the ticket.",
        quando: "Morning, with the clearest sky. Closures and hours vary by season.",
        tempo: "2-3 hours",
        costo: "Prices on the official site; discounts with the Swiss Travel Pass or Half Fare Card.",
        consiglio: "The first cabin of the morning has shorter queues; glaciers are clearer before midday."
      },
      {
        nome: "Bachalpsee",
        testo: "A high lake mirroring the Wetterhorn and Schreckhorn. From First the path is easy, gently uphill.",
        come: "On foot from First station on the signed path.",
        quando: "Morning, when the water is still and mirrors the mountains.",
        tempo: "2 hours return",
        consiglio: "Bring a warm layer: the wind blows even in July."
      },
      {
        nome: "Lower Glacier (Unterer Gletscher)",
        testo: "The glacier that descends to the valley above Grindelwald, with a deep gorge cut by the river. Reached on foot from the village.",
        come: "On foot from the village or with the Pfingstegg cable car.",
        quando: "Summer.",
        tempo: "2-3 hours",
        consiglio: "Do not step on the ice without a guide: there are hidden crevasses."
      },
      {
        nome: "Männlichen and the panorama trail",
        testo: "The ridge between Grindelwald and Wengen, reached by gondola from Grindelwald Terminal. From the station a short climb leads to the crown-shaped viewpoint of the Royal Walk, then the panorama trail sets off towards Kleine Scheidegg, almost all downhill and facing the Eiger, Mönch and Jungfrau.",
        come: "Männlichen gondola from Grindelwald Terminal; from Kleine Scheidegg take the train back to Grindelwald or Wengen.",
        quando: "Summer, in the morning; gondola times and seasonal closures on the official website.",
        tempo: "half a day",
        consiglio: "Walk towards Kleine Scheidegg: you have the three peaks in front of you the whole way."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Gondola to First in the morning",
          "Cliff Walk",
          "Walk to Bachalpsee",
          "Descend on foot or by gondola"
        ]
      }
    ],
    zone: [
      {
        nome: "Grindelwald",
        perChi: "for hiking",
        testo: "The village is at the foot of the Eiger north face, with services and direct access to the gondolas."
      },
      {
        nome: "Interlaken",
        perChi: "to save money",
        testo: "Direct train from Interlaken Ost, with more lodging choice."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Fried potatoes, with eggs or cheese, in alpine restaurants."
      },
      {
        nome: "Fondue",
        testo: "Melted cheese in a pot, in huts and village restaurants."
      },
      {
        nome: "Meringue with cream",
        testo: "A dessert of meringues and mountain cream."
      }
    ],
    attenzioni: [
      "With low cloud the view from First disappears: check the webcams before buying the ticket.",
      "The Cliff Walk platforms are not for people with vertigo.",
      "Paths get snow from October; check trail conditions."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "The snowy north face of the Eiger dominating the village of Grindelwald, with chalets and green meadows at its foot",
    immagine: '/images/svizzera/grindelwald.jpg',
  },
  {
    slug: 'jungfraujoch',
    paeseSlug: 'svizzera',
    ordine: 4,
    nome: 'Jungfraujoch, the Top of Europe',
    tipologia: ['ghiacciaio', 'panorama', 'esperienza unica'],
    giorniConsigliati: '1 full day',
    visitataPersonalmente: true,
    introduzione:
      "The highest railway station in Europe, at 3,454 meters. It is reached by a cog railway dug almost entirely into the rock of the Eiger and the Mönch between 1896 and 1912. At the top is the Aletsch Glacier, the longest in the Alps.",
    percheAndarci:
      "It is the only point in this guide where you stand above 3,400 meters without a demanding hike, in front of the longest glacier in the Alps. It is also the most expensive ticket of the trip: it should be treated as the main day.",
    cosaVedere: [
      'The Aletsch Glacier, the largest in the Alps, a UNESCO World Heritage Site',
      'The ice palace carved into the permafrost',
      'The panoramic terraces, from which on clear days you can see as far as the Black Forest',
    ],
    cosaFare: [
      'Take the cog railway from Interlaken Ost, leaving early to have a better chance of clear sky',
      'Walk on the first stretch of the Aletsch Glacier, where marked and safe',
      'Visit the ice palace, included in the ticket',
    ],
    doveDormire: "You don't stay overnight at altitude: it is a day trip from Interlaken or the nearby valleys.",
    doveMangiare: 'Self-service restaurants at the station, prices typical of an isolated high-altitude spot.',
    comeArrivare: 'Cog train from Interlaken Ost, with changes at Grindelwald or Lauterbrunnen and at Kleine Scheidegg, about 2h20 in total.',
    comeSpostarsi: 'On foot among the terraces and panoramic tunnels at altitude.',
    periodoMigliore: 'all year, with different timetables and frequencies between high and low season; mornings are usually clearer than afternoons.',
    costi: 'Round-trip ticket from Interlaken Ost about 224-261 CHF depending on the season; discounted Good Morning Ticket for those leaving by 8.',
    erroriDaEvitare: [
      'Leaving in the early afternoon: clouds usually form after noon and block the view',
      "Not booking online: at the counter tickets usually cost more",
      'Underestimating the cold at altitude even in midsummer: you need a windbreaker and layers even in July',
    ],
    luoghi: [
      {
        nome: "Sphinx Terrace",
        testo: "The observatory and terrace at 3,571 metres, reached by lift from the station. From here you see the Aletsch, the Mönch and, on clear days, the Black Forest and the Vosges.",
        come: "Fast lift from the station (Top of Europe) to the platform.",
        quando: "Morning, with fewer clouds. Closed in strong wind or storm.",
        tempo: "45 minutes",
        costo: "An expensive ticket, with prices that vary by date and season; discounts with the Swiss Travel Pass or Half Fare Card. Seat reservation CHF 10; the Good Morning Ticket for the first train is 15% off from 1 May to 31 October 2026. Prices and offers on the official site.",
        url: "https://www.jungfrau.ch/",
        consiglio: "Check the webcam before leaving: on overcast days you see nothing."
      },
      {
        nome: "Ice Palace",
        testo: "A tunnel cut into the glacier, with ice sculptures, at about 3,450 metres. Slippery floor and below-zero temperature all year.",
        come: "Included in the ticket, next to the station.",
        quando: "All year.",
        tempo: "30 minutes",
        consiglio: "Wear non-slip shoes and gloves."
      },
      {
        nome: "Aletsch Glacier and the Plateau walk",
        testo: "The longest glacier in the Alps, over 20 kilometres, and the packed-snow path towards the Mönchsjoch hut. The walk is easy but at high altitude.",
        come: "Leave the station and follow the signed path across the plateau.",
        quando: "Morning; the snow is firmer and the weather better.",
        tempo: "1 hour",
        consiglio: "The air is thin: walk slowly and drink water."
      },
      {
        nome: "Eismeer stop",
        testo: "On the way up the train runs in a tunnel inside the Eiger and the Mönch and stops at Eismeer station, at about 3,160 metres. Through windows cut into the rock you look down on the glacier. The stop lasts about 5 minutes, but it is when you grasp the feat of the railway, completed in 1912.",
        come: "A short stop included in the journey, uphill only.",
        quando: "All year.",
        tempo: "a few minutes",
        consiglio: "Sit so you can get off quickly: there are few windows and they get crowded."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Leave Interlaken Ost by 8",
          "Change at Kleine Scheidegg",
          "Sphinx Terrace and Ice Palace",
          "Walk on the plateau",
          "Return in early afternoon"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        perChi: "for an early start",
        testo: "A convenient base for the first train; lodging for every budget."
      },
      {
        nome: "Grindelwald",
        perChi: "for the direct train",
        testo: "From Grindelwald the cog railway to Kleine Scheidegg means fewer changes."
      }
    ],
    sapori: [
      {
        nome: "Lindt chocolate",
        testo: "There is a shop at the top, expensive and touristy, but a typical souvenir."
      },
      {
        nome: "Mountain rösti",
        testo: "At the station self-service."
      },
      {
        nome: "Hot tea and soup",
        testo: "To warm up between the two outings on the ice."
      }
    ],
    attenzioni: [
      "Altitude sickness can hit even at 3,400 metres: go up slowly, drink and stop if you have a headache.",
      "The ticket is among the most expensive in the country: compare the Good Morning Ticket fares.",
      "Do not keep documents in outer pockets: wind and gloves make them awkward to find."
    ],
    esperienzeSlugs: ['jungfraujoch-top-of-europe'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "The Aletsch Glacier and the Jungfraufirn seen from the Sphinx panoramic terrace at the Jungfraujoch",
    immagine: '/images/svizzera/jungfraujoch.jpg',
  },
  {
    slug: 'muerren-schilthorn',
    paeseSlug: 'svizzera',
    ordine: 5,
    nome: 'Mürren and the Schilthorn',
    tipologia: ['montagna', 'panorama', 'trekking'],
    giorniConsigliati: '1 day, plus half a day for those doing the via ferrata',
    visitataPersonalmente: true,
    introduzione:
      "Mürren is one of the car-free villages of the Lauterbrunnen valley, with one of the most open views in the region over the Eiger, Mönch and Jungfrau. Above the village the cable car climbs to the Schilthorn, where the revolving restaurant Piz Gloria, made famous by a James Bond film, looks 360 degrees over more than two hundred peaks.",
    percheAndarci:
      "It has the same panorama as Grindelwald over the Eiger-Mönch-Jungfrau chain, but from the opposite side of the valley and in a car-free village. And the best-known via ferrata in the region starts from here.",
    cosaVedere: [
      'The panorama over the Eiger-Mönch-Jungfrau chain from the village of Mürren, with no walls blocking the view',
      "The revolving restaurant Piz Gloria at the top of the Schilthorn, set of the film \"On Her Majesty's Secret Service\"",
      'The village of Gimmelwald, even smaller and less touristy, reachable on foot via the via ferrata or by cable car',
    ],
    cosaFare: [
      'Take the cable car up to the Schilthorn for the 360-degree panorama',
      'Do the Mürren-Gimmelwald via ferrata, about 2.2 km with a 90-meter suspension bridge (see the dedicated experience page)',
      'Walk from Mürren to Gimmelwald on the regular trail, an alternative without via ferrata equipment',
    ],
    doveDormire: "No campsite inside Mürren (car-free village): you sleep at the valley-floor campsites in Lauterbrunnen or Stechelberg.",
    doveMangiare: 'Village restaurants with mountain cuisine; Piz Gloria at the top of the Schilthorn has a tourist menu with panoramic terrace prices.',
    comeArrivare: 'From Lauterbrunnen, cable car from Stechelberg or cog railway via Grütschalp.',
    comeSpostarsi: 'Mürren is walkable; for the Schilthorn and for Gimmelwald you need a cable car or the via ferrata.',
    periodoMigliore: 'June to October; the via ferrata is open only in this window.',
    costi: 'Schilthorn cable car about 115 CHF round trip from Stechelberg, 91 CHF from Mürren.',
    erroriDaEvitare: [
      'Tackling the via ferrata without approved gear or without having first done a simpler route',
      "Leaving the van in Lauterbrunnen thinking you can drive to Mürren: the village isn't reachable by car",
    ],
    confronti: [
      {
        titolo: 'Going up the Schilthorn from Stechelberg or from Mürren',
        introduzione:
          "The cable car to the Schilthorn has two starting points, with a difference in price and time to know before choosing.",
        opzioni: [
          {
            nome: 'From Stechelberg (valley floor)',
            sintesi: "The complete route, from the bottom of the Lauterbrunnen valley to the top, with a single ticket over several sections.",
            costo: 'about 115 CHF round trip',
            durata: '32 minutes one way',
            pro: ['A single ticket for the whole elevation gain', "Doesn't require taking the cog railway to Mürren first"],
            contro: ['More expensive than the section from Mürren', 'The van has to get all the way to Stechelberg, the last stretch of the valley'],
            perChi: "Those who arrive by van deep into the valley and don't want to change transport several times.",
          },
          {
            nome: 'From Mürren',
            sintesi: "You first get to Mürren by cog railway from Lauterbrunnen via Grütschalp, then take the shorter cable car to the Schilthorn.",
            costo: 'about 91 CHF round trip from Mürren',
            durata: 'shorter section than from Stechelberg',
            pro: ['Cheaper final section', 'You pass through Mürren anyway, useful for those who also want to see the village'],
            contro: ['You also need the cog railway ticket up to Mürren, so you save less than it seems'],
            perChi: 'Those who want to stop in Mürren anyway before or after going up the Schilthorn.',
          },
        ],
        raccomandazione:
          "For those with a van who also want to see the village of Mürren, the section from Stechelberg with an intermediate stop remains the easiest to organize in a single day.",
      },
    ],
    luoghi: [
      {
        nome: "Schilthorn and Piz Gloria",
        testo: "The peak at 2,970 metres with the revolving restaurant that features in a 1969 James Bond film. From the terrace you see Eiger, Mönch and Jungfrau.",
        come: "Cable car from Stechelberg (valley) or from Mürren, in several sections.",
        quando: "Morning, with the best light. Closed in high wind.",
        tempo: "2-3 hours",
        costo: "Return CHF 115 from Stechelberg and CHF 91.40 from Mürren, valid until 12/12/2026 (official site); big discounts with the Swiss Travel Pass.",
        url: "https://www.schilthorn.ch/",
        consiglio: "From the valley the ride is longer but gives views of the walls."
      },
      {
        nome: "Mürren",
        testo: "A car-free village on the plateau, facing the north face of the Eiger. A place for the view, not for monuments.",
        come: "Cable car from Stechelberg or train from Grütschalp.",
        quando: "All year.",
        tempo: "2 hours",
        consiglio: "Walk up to Allmendhubel for the mountain views."
      },
      {
        nome: "Gimmelwald",
        testo: "A tiny farming village halfway up the cliff, car-free, reached by cable car or on foot from Mürren. Wooden barns and grazing cows. It is the quietest spot in the valley, with the same view as Mürren and very few beds.",
        come: "Downhill path from Mürren, or the Stechelberg cable car, which stops here.",
        quando: "Summer and autumn.",
        tempo: "1.5 hours",
        consiglio: "It is a living village: respect private property and do not enter the barns."
      },
      {
        nome: "Birg and the Thrill Walk",
        testo: "The mid-station of the Schilthorn cable car, hanging over the valley. From here the Thrill Walk sets off, a built walkway that leads down along the sheer rock walls. You see the Eiger north face up close, with the drop under your feet.",
        come: "Get off at Birg with the same Schilthorn cable car ticket.",
        quando: "When the cable car runs; with ice the walkway may be closed.",
        tempo: "30-45 minutes",
        costo: "Included in the cable car ticket.",
        consiglio: "Anyone with vertigo can stay on the station terrace, which has the same view."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Cable car to the Schilthorn in the morning",
          "Breakfast at Piz Gloria",
          "Descent to Mürren",
          "Walk to Gimmelwald",
          "Return to Stechelberg"
        ]
      }
    ],
    zone: [
      {
        nome: "Mürren",
        perChi: "for views and quiet",
        testo: "On the plateau, car-free; few services and high prices."
      },
      {
        nome: "Lauterbrunnen",
        perChi: "to save money",
        testo: "Valley floor, more services and cheaper, with a cable car to Mürren."
      }
    ],
    sapori: [
      {
        nome: "Rösti",
        testo: "Fried potatoes with egg or cheese, in Mürren restaurants."
      },
      {
        nome: "Berner Platte",
        testo: "A Bernese dish of mixed meats and sauerkraut, in taverns."
      },
      {
        nome: "Fondue",
        testo: "Melted cheese, in the village restaurants."
      }
    ],
    attenzioni: [
      "With low cloud the Schilthorn is not visible: check the webcams.",
      "The cable car stops early in the evening: note the last run.",
      "Gimmelwald is a residential village: keep noise down in the evening."
    ],
    esperienzeSlugs: ['via-ferrata-muerren-gimmelwald'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "A Schilthorn cable car cabin suspended between Mürren and Birg, above the rock walls of the Lauterbrunnen valley",
    immagine: '/images/svizzera/muerren-schilthorn.jpg',
  },
  {
    slug: 'grimsel-furka',
    paeseSlug: 'svizzera',
    ordine: 6,
    nome: 'Grimselpass and Furkapass',
    tipologia: ['roadtrip', 'panorama', 'passi alpini'],
    giorniConsigliati: '1 transfer day',
    visitataPersonalmente: true,
    introduzione:
      "The road that leads from the Bernese Alps to the Valais through two of the most scenic passes in Switzerland: the Grimselpass (2,164 m), among emerald-colored reservoirs, and the Furkapass (2,429 m), famous for the Aston Martin chase in \"Goldfinger\" and overlooking the terminal tongue of the Rhône Glacier.",
    percheAndarci:
      "It is the pure driving day of this guide: here the van serves to cross the Alps, not just to visit them. And it links the Jungfrau Region to Zermatt without going back toward the plain.",
    cosaVedere: [
      'The Grimsel reservoirs, emerald green among the gray rock',
      "The Rhône Glacier, visible from the Furkapass: it is in sharp retreat and in summer partly covered with reflective sheets to slow its melting",
      "The Hotel Belvédère, abandoned on the Furkapass, where the car chase of \"Goldfinger\" was filmed",
    ],
    cosaFare: [
      'Drive the road with photo stops at the marked viewpoints',
      'A short walk to the tongue of the Rhône Glacier, where access is allowed',
    ],
    doveDormire: 'No stop planned: it is a transfer day between the Jungfrau Region and the Valais.',
    doveMangiare: 'A few huts and refreshment points on the passes, with isolated high-altitude prices: it is best to have supplies in the van.',
    comeArrivare: 'From Interlaken or from the Lauterbrunnen-Mürren area, about 2-3 hours of driving with stops.',
    comeSpostarsi: 'Only by car or van; there is no direct public connection along the whole route.',
    periodoMigliore: 'June to October; opening dates change every year depending on the snow remaining.',
    costi: 'No toll on the road.',
    erroriDaEvitare: [
      'Planning the transfer without first checking that the two passes are open, especially in early June or late October',
      "Not knowing that the Furka has an alternative by shuttle train (Furka Autoverlad) when the pass is closed to ordinary traffic",
    ],
    luoghi: [
      {
        nome: "Grimsel Pass",
        testo: "A pass at 2,164 metres between Canton Bern and Valais, in a landscape of reservoirs, dams and granite smoothed by ice. The road has hairpins and lay-bys.",
        come: "By car from Meiringen towards Gletsch. Usually open from June to October.",
        quando: "Morning: less traffic and better light. Check opening in spring and autumn.",
        tempo: "2 hours with stops",
        consiglio: "Stop at the Räterichsboden dam and Lake Grimsel."
      },
      {
        nome: "Rhône Glacier",
        testo: "The source of the Rhône, flowing from the glacier opposite the Belvédère hotel. An ice grotto cut into the glacier can be visited in summer.",
        come: "From the Gletsch car park, a few minutes on foot from the Belvédère.",
        quando: "Summer.",
        tempo: "1 hour",
        consiglio: "The glacier has retreated a lot: signs show its position in different years."
      },
      {
        nome: "Furka Pass",
        testo: "A pass at 2,429 metres, with steep hairpins and views of the Rhône. The pass was a set for a James Bond film (Goldfinger, 1964).",
        come: "By car from Gletsch, up the hairpins.",
        quando: "Summer.",
        tempo: "1 hour",
        consiglio: "The road has narrow sections: give way to uphill traffic."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Meiringen",
          "Grimsel Pass",
          "Gletsch and Rhône Glacier",
          "Furka Pass",
          "Andermatt or return via Susten"
        ]
      }
    ],
    zone: [
      {
        nome: "Meiringen",
        perChi: "for those coming from Bern",
        testo: "A town at the foot of the Grimsel, with hotels for every budget."
      },
      {
        nome: "Andermatt",
        perChi: "for continuing towards Ticino",
        testo: "An alpine village on the Furka, convenient for heading on to the Gotthard."
      }
    ],
    sapori: [
      {
        nome: "Älplermagronen",
        testo: "Pasta, potatoes and cheese, in huts."
      },
      {
        nome: "Meiringen meringue",
        testo: "The dessert that tradition says was born in the town, with cream."
      },
      {
        nome: "Bergkäse",
        testo: "Alpine cheese."
      }
    ],
    attenzioni: [
      "The passes are closed from October-November to June: check opening on official sites.",
      "Bad weather and ice can close the pass during the day.",
      "Fuel: petrol stations are rare at altitude, fill up in the valley."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "The Grimselpass valley with the reservoirs among granite rocks and the still-snowy peaks",
    immagine: '/images/svizzera/grimsel-furka.jpg',
  },
  {
    slug: 'zermatt',
    paeseSlug: 'svizzera',
    ordine: 7,
    nome: 'Zermatt and the Matterhorn',
    tipologia: ['montagna', 'panorama', 'iconico'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The southernmost point of this guide, and the only one where the van doesn't enter: Zermatt has been closed to private traffic since 1961. In exchange there is the Matterhorn, 4,478 meters of an almost perfect rock pyramid, visible from the village center.",
    percheAndarci:
      "The Matterhorn is one of the most recognizable mountains in the world. Zermatt is the most expensive and farthest zone of this guide, but it has viewpoints (the Gornergrat first of all) that have no equivalent in the rest of the trip.",
    cosaVedere: [
      'The Matterhorn, visible from the village center on every clear day',
      'The Gornergrat, reached by the highest open-air cog railway in Europe',
      "The historic center of Zermatt, without car traffic, with the traditional wooden barns on stone stilts",
    ],
    cosaFare: [
      'Take the train up to the Gornergrat for the frontal view of the Matterhorn',
      'Stroll through the center of Zermatt, free of cars',
      'For those with time, one of the many smaller panoramic cable cars around the village',
    ],
    doveDormire: "You don't sleep in Zermatt in a van, because the town is closed to private traffic: you sleep in the van in Täsch or go back toward the other zones.",
    doveMangiare: 'Tourist-village restaurants, among the most expensive in the guide; it is best to alternate them with meals prepared in the van in Täsch.',
    comeArrivare: 'The van is left in the covered car park in Täsch, 5 km before Zermatt; from there a shuttle train leaves every 20 minutes.',
    comeSpostarsi: 'On foot in the village; for the Gornergrat and the other altitudes you need the cog railway or the cable cars.',
    periodoMigliore: 'June to September; the Matterhorn is still visible (when the sky is clear) all year.',
    costi: 'Täsch parking from 17 CHF/day; Gornergrat extra, not included in the parking.',
    erroriDaEvitare: [
      'Trying to enter Zermatt by van or car: the ban exists and is checked',
      "Not allowing for the driving time to get there: over two hours from Interlaken even going via Grimsel-Furka",
      "Taking for granted that the Matterhorn is free of clouds: it makes its own even when the sky around is clear",
    ],
    luoghi: [
      {
        nome: "Gornergrat",
        testo: "The cog railway climbs to 3,089 metres. From the terrace you see the Matterhorn, Monte Rosa and the Gorner glacier.",
        come: "Rack train from the Gornergrat Bahn station in Zermatt; frequent departures in summer.",
        quando: "Morning, with the clearest sky.",
        tempo: "Half a day",
        costo: "Return CHF 132 from May to October 2026 and CHF 102 from November 2026 to April 2027; half price with the Swiss Travel Pass or Half Fare Card.",
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Get off at Rotenboden or Riffelberg for a walk."
      },
      {
        nome: "Matterhorn Glacier Paradise",
        testo: "The station at 3,820 metres, below the Klein Matterhorn summit (3,883 m): one of the highest points in Europe you can reach by cable car. An ice grotto is cut into the glacier.",
        come: "Cable car from Zermatt, changing at Furi and Trockener Steg.",
        quando: "Early morning for the clearest sky.",
        tempo: "Half a day",
        costo: "Return from CHF 104 in the November 2026-April 2027 season, with seasonal rates; current prices on the official website.",
        url: "https://www.matterhornparadise.ch/",
        consiglio: "Bring sunglasses and a warm layer: it is cold at 3,800 metres."
      },
      {
        nome: "Five Lakes Walk",
        testo: "A hike from Blauherd towards Sunnegga along five alpine lakes (Stellisee, Grindjisee, Grünsee, Moosjisee and Leisee) that mirror the Matterhorn. One of the classic photos.",
        come: "Funicular to Sunnegga and gondola to Blauherd, then on foot, more downhill than up.",
        quando: "Summer; the lakes reflect best in the morning.",
        tempo: "3-4 hours",
        consiglio: "Stellisee gets very busy: arrive early."
      },
      {
        nome: "Zermatt village",
        testo: "The car-free centre, with dark wooden houses, shops and hotels. The small cemetery by the church remembers climbers who died on the Matterhorn.",
        come: "On foot from the station.",
        quando: "All year.",
        tempo: "1-2 hours",
        consiglio: "The Matterhorn Museum tells the story of the first ascent in 1865."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Gornergrat in the morning",
          "Lunch at Riffelberg",
          "Walk towards Zermatt",
          "Dinner in the village"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Gornergrat and village",
          "Day 2: Matterhorn Glacier Paradise or the Five Lakes Walk"
        ]
      }
    ],
    zone: [
      {
        nome: "Zermatt",
        perChi: "to stay in the centre",
        testo: "Car-free; lodging at every price, but expensive."
      },
      {
        nome: "Täsch and Randa",
        perChi: "to save money",
        testo: "Lower prices, with the frequent shuttle train to Zermatt."
      }
    ],
    sapori: [
      {
        nome: "Raclette",
        testo: "Melted cheese scraped onto potatoes, typical of Valais."
      },
      {
        nome: "Cheese fondue",
        testo: "With Valais white wine."
      },
      {
        nome: "Chocolate Matterhorn",
        testo: "A sweet souvenir, in many shops."
      }
    ],
    attenzioni: [
      "Cars stop at Täsch: leave them in the car park and take the train.",
      "Prices are high: buy sandwiches at supermarkets before going up.",
      "On windy or cloudy days the cable cars can close: leave margin in the plan."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "The Matterhorn at sunset reflected in a small alpine lake above Zermatt, with a hiker seen from behind in the foreground",
    immagine: '/images/svizzera/zermatt.jpg',
  },
]
