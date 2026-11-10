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
    comeArrivare: "Direct motorway exit from Bern (about an hour) or from the Valais via Grimsel-Furka. Without a car you usually fly into Zurich: from the station under the terminal the SBB train reaches Interlaken Ost in about 2 hours, changing in Bern, with departures every half hour; a full-price second-class ticket costs about CHF 75-80 (about €80-86), much less with Supersaver fares in the SBB app. From Geneva it takes about 3 hours. Interlaken has two stations: West for the centre and Lake Thun, Ost for Lake Brienz and trains to Lauterbrunnen and Grindelwald.",
    comeSpostarsi: "On foot in the center; the van is for reaching the other zones, all within 20-30 minutes of driving.",
    periodoMigliore: 'June to September, with July-August hotter and more crowded.',
    costi: "Campsites 35-50 CHF/night; boat trip from about 20-30 CHF per single trip. Daily budget per person: low €100-140 (campsite or hostel, Coop or Migros groceries, one funicular ride), mid €220-320 (mid-range hotel in a double, one restaurant meal, one cable car), high €450 and up.",
    erroriDaEvitare: [
      'Arriving without having booked, or at least identified, a campsite for the first night',
      'Shopping at the minimarkets in the valleys, much more expensive, instead of at the supermarkets in Interlaken',
      "Underestimating how much time the other zones take: Interlaken is the base, not the main destination of the trip",
    ],
    miaEsperienza:
      "Interlaken was the starting base of our van trip with friends through the Bernese Alps: from here we went up to Lauterbrunnen, Grindelwald and the Jungfrau, before the passes towards Zermatt.",
    luoghi: [
      {
        nome: "Harder Kulm",
        testo: "The viewpoint above Interlaken, at 1,322 metres, with views of both lakes and, on a clear day, of Eiger, Mönch and Jungfrau. At the top are an observation platform and a restaurant in a castle-like building.",
        come: "Funicular from Harder Bahn station, near Interlaken Ost: about 10 minutes up.",
        quando: "Late afternoon for the light on the lakes. Seasonal: dates on the official website.",
        tempo: "2 hours",
        costo: "Tickets from CHF 22 (about €24) on the official site, lowest fare of the 2026 season.",
        orari: "Seasonal, closed in winter; in season it runs daily, with evening trips for sunset.",
        lat: 46.69968,
        lng: 7.85614,
        url: "https://www.jungfrau.ch/en-gb/harder-kulm/",
        consiglio: "Check the webcams before going up: with low cloud the view disappears."
      },
      {
        nome: "Höheweg and Höhematte",
        testo: "Interlaken's main avenue runs along the Höhematte, a large meadow kept free of buildings where paragliders land. From here the Jungfrau appears at the end of the view, between Belle Époque hotels. It is the place for an evening stroll that costs nothing.",
        come: "On foot, 10 minutes from Interlaken Ost or Interlaken West.",
        quando: "At sunset, when the Jungfrau catches the light.",
        tempo: "1 hour",
        costo: "Free.",
        orari: "Always open.",
        lat: 46.68773,
        lng: 7.86085
      },
      {
        nome: "Lake Brienz and Giessbach Falls",
        testo: "The greener, less touristy lake, with the Giessbach falls dropping in 14 steps beside a historic hotel. Reached by boat.",
        come: "Boat from Interlaken Ost or Brienz to the pier, then the historic Giessbach funicular.",
        quando: "Morning, in spring when the falls are full.",
        tempo: "half a day",
        lat: 46.73355,
        lng: 8.02382,
        url: "https://www.giessbach.ch/en/",
        consiglio: "The short walk through the woods from the pier to the falls is pleasant."
      },
      {
        nome: "Lake Thun",
        testo: "The lake west of Interlaken, with Thun castle, shore villages and the historic steamer. Spiez has a castle on the lake.",
        come: "Boat or train from Interlaken West; the boat is much slower than the train.",
        quando: "Summer.",
        tempo: "half a day",
        costo: "Boat about CHF 20-30 (about €21-32) one way; included in the Swiss Travel Pass.",
        lat: 46.70559,
        lng: 7.69144,
        url: "https://www.bls.ch/en",
        consiglio: "Take the boat to Thun and return by train, to see the lake and save time."
      },
      {
        nome: "Iseltwald",
        testo: "A small village on Lake Brienz, on a promontory with a former castle, now a rehabilitation centre. Famous for the jetty where a scene of the Korean series \"Crash Landing on You\" was shot.",
        come: "By car or bus from Interlaken Ost.",
        quando: "Early morning, before the groups.",
        tempo: "1-2 hours",
        costo: "Paid jetty, CHF 5, with a turnstile (introduced in 2023).",
        orari: "Jetty open all day.",
        lat: 46.71046,
        lng: 7.96346,
        consiglio: "The pier is best at dawn."
      },
      {
        nome: "Schynige Platte",
        testo: "A balcony at 1,967 metres reached by a historic cogwheel railway with wooden carriages. At the top are an alpine botanical garden, a viewing platform and views of Eiger, Mönch and Jungfrau on one side and Lake Thun on the other. The hike to First starts here.",
        come: "Cogwheel train from Wilderswil, 5 minutes by train from Interlaken Ost.",
        quando: "A clear morning; the garden is at its best in July.",
        tempo: "half a day",
        costo: "CHF 68 (about €73) return.",
        orari: "Mid-June to late October.",
        lat: 46.65226,
        lng: 7.91117,
        url: "https://www.jungfrau.ch/en-gb/schynige-platte/"
      },
      {
        nome: "Thun and its castle",
        testo: "The town at the end of the lake has a medieval centre with the raised pavements of Obere Hauptgasse and the fast-flowing Aare under covered bridges. Above it stands the four-towered castle, one of the oldest fortified complexes in Europe, now a museum with views over the town and the Alps.",
        come: "Train from Interlaken West, about 30 minutes, or boat across the lake.",
        quando: "On Saturday mornings there is a market in the centre.",
        tempo: "half a day",
        orari: "Castle closed November to January.",
        lat: 46.75992,
        lng: 7.62972,
        url: "https://schlossthun.ch/en/"
      },
      {
        nome: "Oberhofen Castle",
        testo: "A castle whose turret stands in the water of Lake Thun, surrounded by a lakeside park with centuries-old trees. Inside are rooms furnished from the Middle Ages to the 19th century. It is the most photogenic stop on the boat trip.",
        come: "Boat from Interlaken West or Thun, or bus from Thun.",
        quando: "Summer, late afternoon for the light on the lake.",
        tempo: "1-2 hours",
        lat: 46.72968,
        lng: 7.66857,
        url: "https://www.schlossoberhofen.ch/"
      },
      {
        nome: "Spiez and its castle",
        testo: "Spiez Castle stands on a headland above a bay with a small harbour and sloping vineyards. You visit the halls and the tower, then walk down to the lake through the vines.",
        come: "Train from Interlaken West, about 20 minutes, or boat.",
        quando: "May to October, when the castle is open.",
        tempo: "2 hours",
        orari: "1 May to 31 October: Monday 2-5 pm, Tuesday to Sunday 10 am-5 pm; July and August daily until 6 pm. Closed 1 November 2026 to 30 April 2027.",
        lat: 46.68938,
        lng: 7.68747,
        url: "https://www.schloss-spiez.ch/en/"
      },
      {
        nome: "St. Beatus Caves",
        testo: "Karst caves with stalactites, pools and underground waterfalls, visited along a lit path about a kilometre long. A small cave museum sits at the entrance. Inside, the temperature stays between 8 and 10 degrees all year.",
        come: "Bus 21 from Interlaken towards Thun, Beatushöhlen stop, or boat on Lake Thun.",
        quando: "On rainy days, when the peaks are hidden.",
        tempo: "1.5 hours",
        costo: "Adults CHF 20 (about €21), children 6-16 CHF 12.",
        orari: "Open all year.",
        lat: 46.68467,
        lng: 7.78231,
        url: "https://www.beatushoehlen.swiss/en/",
        consiglio: "Bring a jacket even in August."
      },
      {
        nome: "Brienz and the Rothorn railway",
        testo: "Brienz is the woodcarvers' village, with dark timber houses along the lake. From the station the Brienz Rothorn steam cogwheel railway climbs to 2,244 metres, with views over the lake and the Bernese Alps.",
        come: "Train or boat from Interlaken Ost to Brienz; the cogwheel railway leaves opposite the station.",
        quando: "From June, when trains run to the summit.",
        tempo: "half a day",
        orari: "2027 season from 8 May to the Planalp midway station; from 5 June eight trips a day to the summit. No service in winter.",
        lat: 46.75508,
        lng: 8.03889,
        url: "https://brienz-rothorn-bahn.ch/en/"
      },
      {
        nome: "Ballenberg Open-Air Museum",
        testo: "More than a hundred rural houses dismantled across Switzerland and rebuilt in a large wooded park, with farm animals, gardens and craftspeople at work. In one day it shows how people lived in each canton.",
        come: "Train to Brienz, then bus to one of the two entrances.",
        quando: "April to October; with children it is the best day out.",
        tempo: "a full day",
        orari: "Closed in winter; reopens daily from 15 April 2027.",
        lat: 46.7487,
        lng: 8.0804,
        url: "https://www.ballenberg.ch/en/",
        consiglio: "The park is big: pick the areas you want to see beforehand."
      },
      {
        nome: "Unterseen old town",
        testo: "Across the Aare, five minutes from the centre, Unterseen keeps the Stadthaus square, the church with its medieval bell tower and 17th-century wooden houses. It is the quietest and oldest part of Interlaken.",
        come: "On foot from Interlaken West across the bridge over the Aare.",
        quando: "Morning or evening, for a short walk.",
        tempo: "45 minutes",
        costo: "Free.",
        orari: "Always open.",
        lat: 46.68692,
        lng: 7.8494
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Harder Kulm in the morning",
          "Boat on Lake Brienz to Giessbach",
          "Stop at Iseltwald on the way back",
          "Sunset on the Höhematte and dinner in Interlaken"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Harder Kulm, Lake Brienz, Giessbach and Iseltwald",
          "Day 2: Lake Thun by boat with stops at Oberhofen and Spiez, back by train; evening in Unterseen"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Harder Kulm, Höheweg and Unterseen",
          "Day 2: Schynige Platte in the morning, afternoon on Lake Brienz with Giessbach and Iseltwald",
          "Day 3: Lake Thun with Thun Castle and Oberhofen, or Brienz with the Rothorn or Ballenberg; if it rains, the St. Beatus Caves"
        ]
      }
    ],
    zone: [
      {
        nome: "Interlaken",
        testo: "Trains to all valleys. High prices and a very touristy centre, but convenient without a car.",
        perChi: "for a convenient base",
        fascia: "€150-300"
      },
      {
        nome: "Brienz and Iseltwald",
        testo: "On Lake Brienz, with fewer crowds; valley destinations need a car or train.",
        perChi: "for quiet",
        fascia: "€130-260"
      },
      {
        nome: "Thun and Spiez",
        testo: "On Lake Thun, with an old town, restaurants and direct trains to Bern and Interlaken. The Jungfrau valleys are 45-60 minutes away.",
        perChi: "those who want a real town and slightly lower prices",
        fascia: "€120-240"
      },
      {
        nome: "Campsites on the two lakes",
        testo: "Between Unterseen, Bönigen and the lakeshores there are several campsites a few minutes from the centre, the cheapest option in the area. In low season TCS campsites offer deals from about CHF 25 a night for two.",
        perChi: "those travelling by van or tent",
        fascia: "pitch CHF 35-50 (about €37-53)"
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
    faq: [
      {
        domanda: "How many days do you need in Interlaken?",
        risposta: "Two days are enough for the two lakes and Harder Kulm. With three or four days Interlaken becomes the base for Lauterbrunnen, Grindelwald and the Jungfraujoch."
      },
      {
        domanda: "Is it better to stay in Interlaken, Grindelwald or Lauterbrunnen?",
        risposta: "Interlaken is the most convenient without a car, with trains to every valley and more choice of rooms. Grindelwald and Lauterbrunnen are lovelier in the evening but cost more and lengthen trips to the lakes."
      },
      {
        domanda: "Is the Jungfrau Travel Pass worth it?",
        risposta: "It starts at CHF 165 (about €177) for 3 days, boats included. It pays off if you ride at least two or three lifts, such as First, Schynige Platte and Harder Kulm; for the Jungfraujoch it only gives a discount."
      },
      {
        domanda: "Do you need to book the Jungfraujoch?",
        risposta: "It is not compulsory outside peak summer days, but online tickets are cheaper. A seat reservation costs CHF 10 and guarantees your time slot."
      },
      {
        domanda: "What can you do in Interlaken in winter?",
        risposta: "Much is closed until spring: Spiez Castle, Ballenberg and the Rothorn railway. The St. Beatus Caves are open all year and trains to the Jungfrau valleys run in winter too."
      },
      {
        domanda: "Do you pay for the Iseltwald jetty?",
        risposta: "Yes, since 2023 there has been a turnstile with a CHF 5 entry fee."
      }
    ],
    gite: [
      {
        nome: "Bern",
        distanza: "about 1 hour by train",
        come: "Direct train or one change from Interlaken Ost or West, several an hour.",
        testo: "The capital has a UNESCO-listed medieval centre with six kilometres of arcades, the Zytglogge and the bear pit on the Aare. It is easy to cover on foot in a day."
      },
      {
        nome: "Lucerne",
        distanza: "about 2 hours by train",
        come: "Luzern-Interlaken Express panoramic train from Interlaken Ost, over the Brünig Pass.",
        testo: "The wooden Chapel Bridge, the lakefront and the Dying Lion. The train ride itself, past lakes and over the Brünig Pass, is worth the trip."
      },
      {
        nome: "Aare Gorge (Aareschlucht)",
        distanza: "about 35 minutes by train",
        come: "Direct train from Interlaken Ost to Meiringen, then on foot or by small train to the entrance.",
        testo: "A 1.4 km gorge between rock walls up to 200 metres high, walked on footbridges above the river. Pair it with Meiringen, home of meringues and Sherlock Holmes."
      },
      {
        nome: "Oeschinensee (Kandersteg)",
        distanza: "about 1 hour by train",
        come: "Train to Kandersteg changing at Spiez, then gondola and a 20-minute walk.",
        testo: "A turquoise lake enclosed by sheer rock walls, one of the finest in the Bernese Alps. In summer the high trail around the lake is the walk to do."
      }
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
    comeArrivare: "From Interlaken, 20 minutes by car or train. The BOB train leaves Interlaken Ost several times an hour and takes about 20 minutes; from Lauterbrunnen station the cogwheel train goes up to Wengen and the cable car to Grütschalp and Mürren, while the post bus runs up the valley to Stechelberg, stopping at the Trümmelbach Falls. From Zurich airport it takes about 2.5 hours with changes in Bern and Interlaken.",
    comeSpostarsi: "The valley floor on foot or by bike; for Mürren, Wengen and Gimmelwald you need a cable car or cog railway, because cars can't get there.",
    periodoMigliore: 'June to September, with the waterfalls most abundant in early summer because of the snowmelt.',
    costi: "Trümmelbachfälle 18 CHF adult admission, 8 CHF children 6-15. Daily budget per person: low €100-140 (campsite, supermarket food, free waterfalls and trails), mid €220-320 (hotel in a double, restaurant, one cable car), high €450 and up with the Schilthorn or Jungfraujoch.",
    erroriDaEvitare: [
      "Setting up a table and chairs outside the van in an unauthorized car park: the local police check exactly this, even where sleeping in the vehicle is tolerated",
      'Arriving at the Trümmelbachfälle without knowing they are closed from early November to early April',
      "Not planning for rain shoes: the waterfall tunnels are damp and slippery",
    ],
    miaEsperienza:
      "The Lauterbrunnen valley was one of the stops of our van trip with friends, right after Interlaken.",
    luoghi: [
      {
        nome: "Staubbach Falls",
        testo: "A waterfall about 297 metres high dropping from a sheer wall above the village, often turned to mist by the wind.",
        come: "On foot from Lauterbrunnen station, a few minutes; you watch it from the village.",
        quando: "Morning, when sun enters the valley. Spring for peak flow.",
        tempo: "45 minutes",
        costo: "Free.",
        orari: "Visible from the village at any time.",
        lat: 46.58978,
        lng: 7.90543,
        consiglio: "Bring a waterproof jacket: the wind carries the spray."
      },
      {
        nome: "Trümmelbach Falls",
        testo: "Ten glacial waterfalls running inside the mountain, seen from walkways and tunnels with a tunnel lift. Open from spring to autumn; no children under 4 and no dogs.",
        come: "By PostBus from Lauterbrunnen towards Stechelberg, or on foot along the valley.",
        quando: "Open roughly from early April to early November, 9 am to 5 pm (July and August 8.30 am-6 pm).",
        tempo: "1-1.5 hours",
        costo: "Adults CHF 18 (about €19), children 6-15 CHF 8; no group rates.",
        orari: "Early April to early November, daily 9 am-5 pm; July and August 8.30 am-6 pm. Closed in winter.",
        lat: 46.57001,
        lng: 7.91321,
        url: "https://www.truemmelbachfaelle.ch/",
        consiglio: "Wear shoes with grippy soles: walkways are wet."
      },
      {
        nome: "Wengen",
        testo: "A car-free village on a high terrace, reached by cog railway. It gives access to Kleine Scheidegg and the line to Jungfraujoch.",
        come: "Cog railway from Lauterbrunnen.",
        quando: "All year.",
        tempo: "2 hours",
        orari: "Trains from Lauterbrunnen all year, about 11 minutes.",
        lat: 46.60544,
        lng: 7.92172,
        consiglio: "Start here for the walk to Männlichen, with views of the Eiger group."
      },
      {
        nome: "The valley on foot to Stechelberg",
        testo: "The flat valley path that follows the stream from Lauterbrunnen towards Stechelberg, between meadows and rock walls with dozens of waterfalls coming down. It passes near Trümmelbach and the cable car station for Mürren. It is the easiest walk in the region and shows why the valley is famous.",
        come: "Start on foot from the village; to return there is the postbus along the valley road.",
        quando: "May to October; after rainy days the waterfalls are fuller.",
        tempo: "2-3 hours on foot",
        costo: "Free.",
        orari: "Trail always open.",
        lat: 46.54502,
        lng: 7.9022,
        consiglio: "Walk out and take the bus back: the path climbs gently towards Stechelberg."
      },
      {
        nome: "Mürrenbach Falls",
        testo: "One of the highest waterfalls in Switzerland, about 417 metres in several drops, falling from the Mürren terrace towards Stechelberg. From the valley floor you see it whole; the Mürren-Gimmelwald via ferrata crosses it on a suspension bridge.",
        come: "From the valley trail near Stechelberg, on foot or by post bus to the Schilthornbahn.",
        quando: "May to July, during snowmelt.",
        tempo: "30-minute stop",
        costo: "Free.",
        orari: "Always visible.",
        lat: 46.55542,
        lng: 7.89666
      },
      {
        nome: "Grütschalp and the trail to Mürren",
        testo: "A cable car climbs from Lauterbrunnen to Grütschalp, where a small train runs on the level to Mürren. The path next to the tracks is one of the most scenic walks in the valley, with Eiger, Mönch and Jungfrau in front of you the whole way.",
        come: "Cable car from Lauterbrunnen station, opposite the BOB platforms; then on foot or by train to Mürren.",
        quando: "June to October, in the morning.",
        tempo: "1.5 hours on foot",
        lat: 46.59656,
        lng: 7.89071,
        consiglio: "Ride up, walk to Mürren, then go down via Gimmelwald and Stechelberg to make a loop."
      },
      {
        nome: "Isenfluh and Sulwald",
        testo: "A tiny village on a terrace above the mouth of the valley, with a small cable car up to Sulwald. From there you ride down on a scooter or walk towards the Lobhornhütte, with far fewer people than in Mürren.",
        come: "Narrow road from Lauterbrunnen or post bus, then the Isenfluh-Sulwald cable car.",
        quando: "Summer and early autumn.",
        tempo: "half a day",
        orari: "Cable car runs all year except during maintenance (2-6 November 2026); scooters until 1 November 2026.",
        lat: 46.62011,
        lng: 7.89617,
        url: "https://isenfluh.ch/"
      },
      {
        nome: "Obersteinberg and the upper valley",
        testo: "Beyond Stechelberg the valley becomes a nature reserve with no roads, closed off by the Breithorn and Tschingelhorn glaciers. The trail climbs to an old mountain inn at Obersteinberg, looking onto waterfalls pouring off the glaciers.",
        come: "On foot from Stechelberg, the post bus terminus.",
        quando: "June to September.",
        tempo: "a full day, about 5-6 hours return",
        costo: "Free.",
        lat: 46.51854,
        lng: 7.88542,
        consiglio: "For fit hikers: the climb is over 800 metres."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Staubbach in the morning",
          "Walk along the valley to Trümmelbach",
          "Mürrenbach Falls and the bus back",
          "Afternoon in Wengen by cogwheel train"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Staubbach, Trümmelbach and the valley walk to Stechelberg",
          "Day 2: cable car to Grütschalp, trail to Mürren, down via Gimmelwald; evening in Wengen"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Staubbach, Trümmelbach and Mürrenbach",
          "Day 2: Grütschalp, Mürren and the Schilthorn",
          "Day 3: Wengen and Kleine Scheidegg, or the Obersteinberg hike; in doubtful weather Isenfluh and Sulwald"
        ]
      }
    ],
    zone: [
      {
        nome: "Lauterbrunnen",
        testo: "Campsites and lodgings on the valley floor, almost car-free at night; colder and quieter in the evening.",
        perChi: "to stay in the valley",
        fascia: "€120-260"
      },
      {
        nome: "Wengen and Mürren",
        testo: "Car-free, with views from above, but you must reach them by cog railway or cable car with luggage.",
        perChi: "for plateau villages",
        fascia: "€160-320"
      },
      {
        nome: "Interlaken",
        testo: "20 minutes by train, with many more rooms and restaurants. You miss the valley in the evening but gain connections to the lakes and Grindelwald.",
        perChi: "those who want more choice and slightly lower prices",
        fascia: "€150-300"
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
    faq: [
      {
        domanda: "How many days do you need in Lauterbrunnen?",
        risposta: "One day for the valley-floor waterfalls and Wengen. With two or three days you can add Mürren, the Schilthorn and a proper hike such as Obersteinberg."
      },
      {
        domanda: "Can you sleep in a van in the Lauterbrunnen valley?",
        risposta: "No: wild camping and overnight parking outside authorised areas are banned, with fines up to CHF 200. Sleep at the valley-floor campsites."
      },
      {
        domanda: "Are the Trümmelbach Falls open in winter?",
        risposta: "No, they open from early April to early November. Staubbach can be seen all year, though in winter it carries little water."
      },
      {
        domanda: "When are the waterfalls at their best?",
        risposta: "Between May and July, during snowmelt, and after a few days of rain. By late summer the flow drops."
      },
      {
        domanda: "Do you need a car in Lauterbrunnen?",
        risposta: "No. The valley floor is easy on foot and by post bus, and Wengen and Mürren can only be reached by train or cable car because they are car-free."
      }
    ],
    gite: [
      {
        nome: "Mürren and the Schilthorn",
        distanza: "about 20 minutes by cable car and train",
        come: "Cable car to Grütschalp and train to Mürren; for the Schilthorn, cable car from Mürren or Stechelberg.",
        testo: "The car-free village with the widest view of the Jungfrau and, above it, Piz Gloria at 2,970 metres with its revolving restaurant."
      },
      {
        nome: "Kleine Scheidegg and Jungfraujoch",
        distanza: "about 45 minutes to Kleine Scheidegg",
        come: "Cogwheel train from Lauterbrunnen via Wengen; from there the Jungfrau Railway continues to the top.",
        testo: "The classic ascent to the Jungfrau from the Lauterbrunnen side. Even just to Kleine Scheidegg it is a day of views and easy trails."
      },
      {
        nome: "Interlaken and the lakes",
        distanza: "about 20 minutes by train",
        come: "Direct BOB train to Interlaken Ost.",
        testo: "Harder Kulm, a boat on Lake Brienz and Iseltwald: the right day when clouds cover the peaks."
      }
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
    comeArrivare: "From Interlaken, 20 minutes by car or train. The direct BOB train from Interlaken Ost takes about 35 minutes and stops both at Grindelwald Terminal (Eiger Express and the Männlichen gondola) and at the village station, a few minutes from the First cable car. From Zurich airport it takes about 2.5-3 hours with changes in Bern and Interlaken. By car there is a covered car park at the Terminal.",
    comeSpostarsi: 'The village is walkable; for the First and the Bachalpsee you need the cable car.',
    periodoMigliore: 'June to September; the Bachalpsee often stays frozen until well into June.',
    costi: "First cable car 72-76 CHF round trip depending on the season; Cliff Walk included. Daily budget per person: low €110-150 (hostel or campsite, supermarket food, one lift), mid €230-330 (mid-range hotel in a double, restaurant, First or Männlichen), high €450 and up, Jungfraujoch included.",
    erroriDaEvitare: [
      "Going up to the First thinking the Bachalpsee is \"just around the corner\": the walk takes 2-3 hours round trip",
      'Underestimating the wind at the top, which on the Cliff Walk can be strong even with clear skies in the valley',
    ],
    miaEsperienza:
      "Grindelwald and First were one of the stops of our van trip with friends in the Jungfrau Region.",
    luoghi: [
      {
        nome: "First and the Cliff Walk",
        testo: "From Grindelwald the gondola climbs to First, at 2,166 metres, with views of Eiger, Mönch and Jungfrau. The Cliff Walk is a 45-metre metal walkway hanging over the void along the wall.",
        come: "Gondola from Grindelwald, about 25 minutes with stops at Bort and Schreckfeld. The Cliff Walk is included in the ticket.",
        quando: "Morning, with the clearest sky. Closures and hours vary by season.",
        tempo: "2-3 hours",
        costo: "CHF 72-76 (about €77-81) return depending on the season; Cliff Walk included.",
        lat: 46.66033,
        lng: 8.05301,
        url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/",
        consiglio: "The first cabin of the morning has shorter queues; glaciers are clearer before midday."
      },
      {
        nome: "Bachalpsee",
        testo: "A high lake mirroring the Wetterhorn and Schreckhorn. From First the path is easy, gently uphill.",
        come: "On foot from First station on the signed path.",
        quando: "Morning, when the water is still and mirrors the mountains.",
        tempo: "2 hours return",
        costo: "Free (you need the First cable car ticket).",
        orari: "Trail walkable June to October, once the snow has melted.",
        lat: 46.66958,
        lng: 8.02095,
        consiglio: "Bring a warm layer: the wind blows even in July."
      },
      {
        nome: "Eiger Express and Eigergletscher",
        testo: "The gondola opened in 2020 climbs in about 15 minutes from Grindelwald Terminal to Eigergletscher station, under the Eiger north face. Up there you take the train to the Jungfraujoch or walk down the Eiger Trail.",
        come: "BOB train from Interlaken Ost to Grindelwald Terminal, which also has a covered car park.",
        quando: "On the first morning runs, before clouds build on the face.",
        tempo: "15-minute ride, then it depends on where you go",
        costo: "Included in the Jungfraujoch ticket, which starts online at CHF 100.60 (about €108, lowest fare).",
        lat: 46.62448,
        lng: 8.02028,
        url: "https://www.jungfrau.ch/en-gb/"
      },
      {
        nome: "Männlichen and the panorama trail",
        testo: "The ridge between Grindelwald and Wengen, reached by gondola from Grindelwald Terminal. From the station a short climb leads to the crown-shaped viewpoint of the Royal Walk, then the panorama trail sets off towards Kleine Scheidegg, almost all downhill and facing the Eiger, Mönch and Jungfrau.",
        come: "Männlichen gondola from Grindelwald Terminal; from Kleine Scheidegg take the train back to Grindelwald or Wengen.",
        quando: "Summer, in the morning; gondola times and seasonal closures on the official website.",
        tempo: "half a day",
        orari: "Summer until early November; closed for maintenance from 6 November 2026, reopening on 12 December 2026 for winter.",
        lat: 46.61814,
        lng: 7.93804,
        url: "https://maennlichen.ch/en/",
        consiglio: "Walk towards Kleine Scheidegg: you have the three peaks in front of you the whole way."
      },
      {
        nome: "Kleine Scheidegg",
        testo: "The 2,061-metre pass between Grindelwald and Wengen, at the foot of Eiger, Mönch and Jungfrau. It is the hub of the cogwheel railways and the end of the panoramic trail from Männlichen; in summer the meadows around it are full of hikers.",
        come: "WAB cogwheel train from Grindelwald, about 30 minutes, or from Wengen.",
        quando: "Summer; in winter it sits in the middle of the ski slopes.",
        tempo: "1-2 hours, more if you walk",
        lat: 46.58525,
        lng: 7.96131,
        consiglio: "Walk down to Alpiglen or Wengernalp and catch the train there."
      },
      {
        nome: "Eiger Trail",
        testo: "The path that runs down from Eigergletscher to Alpiglen right under the Eiger north face, the most famous wall in climbing history. You walk over scree and meadows with the Grindelwald valley below.",
        come: "Eiger Express to Eigergletscher, then on foot; from Alpiglen take the train back to Grindelwald.",
        quando: "July to September, when the trail is clear of snow.",
        tempo: "about 2.5 hours",
        costo: "The trail is free; you pay for the lifts.",
        lat: 46.56846,
        lng: 7.9882,
        consiglio: "Do it downhill: uphill is much harder."
      },
      {
        nome: "Lower Glacier (Unterer Gletscher)",
        testo: "The glacier that descends to the valley above Grindelwald, with a deep gorge cut by the river. Reached on foot from the village.",
        come: "On foot from the village or with the Pfingstegg cable car.",
        quando: "Summer.",
        tempo: "2-3 hours",
        orari: "The gorge closes in winter; open from spring to autumn.",
        lat: 46.611,
        lng: 8.05029,
        consiglio: "Do not step on the ice without a guide: there are hidden crevasses."
      },
      {
        nome: "Pfingstegg",
        testo: "A small cable car climbs from the village to a terrace at 1,391 metres above the lower glacier, with a summer toboggan run, a zip line and a restaurant. Easy trails lead from here towards the glacier and Bäregg.",
        come: "On foot from the centre to the valley station, about 15 minutes, or bus to the Pfingsteggbahn stop.",
        quando: "Afternoon, with children.",
        tempo: "2-3 hours",
        orari: "Summer season 2026 from 25 April to 25 October; closed in winter.",
        lat: 46.61752,
        lng: 8.05686,
        url: "https://www.pfingstegg.ch/en/"
      },
      {
        nome: "First Flyer, Glider, Mountain Cart and Trottibike",
        testo: "First's ride-down activities: a long zip line over the meadows, an eagle-shaped towed glider, three-wheeled carts and mountain scooters to coast down gravel roads to the valley. They run between the cable car's midway stations, Schreckfeld and Bort.",
        come: "First cable car; tickets at the valley station.",
        quando: "Summer, in dry weather.",
        tempo: "half a day",
        costo: "First Adventure Package from CHF 60 (about €64) for two activities, unlimited cable car rides.",
        lat: 46.64672,
        lng: 8.05177,
        url: "https://www.jungfrau.ch/en-gb/grindelwaldfirst/",
        consiglio: "On July and August weekends the Flyer has queues: do it first."
      },
      {
        nome: "Grosse Scheidegg",
        testo: "The 1,962-metre pass towards Meiringen, closed to private traffic, with the Wetterhorn seeming to topple onto the road. You reach it by bus in summer or on foot from First, on an almost level trail with constant views of the valley.",
        come: "Summer post bus from Grindelwald, or on foot from First in about 1.5 hours.",
        quando: "June to September, when the bus runs.",
        tempo: "half a day",
        costo: "Free on foot; the bus is extra.",
        lat: 46.65588,
        lng: 8.10187
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "First cable car on the first run",
          "Cliff Walk and hike to Bachalpsee",
          "Ride down on the First Flyer or Mountain Cart",
          "Afternoon at the lower glacier gorge",
          "Dinner in the village"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: First, Cliff Walk, Bachalpsee and ride-down activities",
          "Day 2: Männlichen gondola, panoramic trail to Kleine Scheidegg, back by train; evening at Pfingstegg"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: First, Cliff Walk and Bachalpsee, then on foot to Grosse Scheidegg",
          "Day 2: Männlichen and Kleine Scheidegg, walk down towards Alpiglen",
          "Day 3: Eiger Express to Eigergletscher and the Eiger Trail; or the Jungfraujoch on the early runs"
        ]
      }
    ],
    zone: [
      {
        nome: "Grindelwald",
        testo: "The village is at the foot of the Eiger north face, with services and direct access to the gondolas.",
        perChi: "for hiking",
        fascia: "€130-280"
      },
      {
        nome: "Interlaken",
        testo: "Direct train from Interlaken Ost, with more lodging choice.",
        perChi: "to save money",
        fascia: "€150-300"
      },
      {
        nome: "Grindelwald hostels and guesthouses",
        testo: "The village has hostels and small guesthouses with simple double rooms, often with a shared kitchen. Book early for July and August.",
        perChi: "those on a tight budget",
        fascia: "€80-150"
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
    faq: [
      {
        domanda: "How many days do you need in Grindelwald?",
        risposta: "One day is enough for First, the Cliff Walk and Bachalpsee. With two or three days you can add Männlichen, Kleine Scheidegg, the Eiger Trail or the Jungfraujoch."
      },
      {
        domanda: "Is Grindelwald or Lauterbrunnen the better base?",
        risposta: "Grindelwald has more services, the Eiger view and direct access to First and the Eiger Express. Lauterbrunnen is smaller and handy for Mürren, Wengen and the waterfalls."
      },
      {
        domanda: "How much does it cost to go up to First?",
        risposta: "A return ticket costs CHF 72-76 (about €77-81) depending on the season, with the Cliff Walk included. With a Swiss Travel Pass or Half Fare Card you pay less."
      },
      {
        domanda: "How long is the walk from First to Bachalpsee?",
        risposta: "About an hour each way on an easy, gently rising trail. In early summer the lake may still be frozen."
      },
      {
        domanda: "Is the Cliff Walk suitable for children?",
        risposta: "Yes, the walkway has high railings and is included in the ticket. In strong wind it can feel unnerving."
      }
    ],
    gite: [
      {
        nome: "Jungfraujoch",
        distanza: "about 45 minutes by gondola and train",
        come: "Eiger Express from Grindelwald Terminal to Eigergletscher, then the Jungfrau Railway inside the mountain.",
        testo: "Europe's highest station, at 3,454 metres, with the Aletsch Glacier and the Ice Palace. Leave on the first runs and keep a spare day for the weather."
      },
      {
        nome: "Wengen and Lauterbrunnen",
        distanza: "about 1 hour 15 minutes by train",
        come: "Cogwheel train from Grindelwald to Kleine Scheidegg, then down to Wengen and Lauterbrunnen.",
        testo: "The classic Jungfrau loop: up one valley and down the other, with car-free Wengen and the Lauterbrunnen waterfalls. From Lauterbrunnen you return via Interlaken."
      },
      {
        nome: "Interlaken and the lakes",
        distanza: "about 35 minutes by train",
        come: "Direct BOB train from Grindelwald to Interlaken Ost.",
        testo: "For a quieter day or when the weather up high is doubtful: a boat on Lake Brienz, Harder Kulm and the centre of Interlaken."
      }
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
    miaEsperienza:
      "The Jungfraujoch was one of the stops of our van trip with friends: the van stays below, and you only get to the top by train.",
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
    miaEsperienza:
      "Mürren and the Schilthorn were one of the areas of our van trip with friends in the Jungfrau Region.",
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
    miaEsperienza:
      "The Grimsel and Furka passes were our van drive with friends from the Jungfrau Region towards Valais, on the way to Zermatt.",
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
    comeArrivare: "The van is left in the covered car park in Täsch, 5 km before Zermatt; from there a shuttle train leaves every 20 minutes. The shuttle train from Täsch takes about 12 minutes. By train from Zurich airport it takes about 3 hours 40 minutes with a change in Visp, from Interlaken about 2.5 hours via Spiez and Visp, and from Geneva airport about 4 hours; the last stretch, from Visp, is on the Matterhorn Gotthard Bahn line. Zermatt station is in the centre and hotels often send electric taxis for luggage.",
    comeSpostarsi: 'On foot in the village; for the Gornergrat and the other altitudes you need the cog railway or the cable cars.',
    periodoMigliore: 'June to September; the Matterhorn is still visible (when the sky is clear) all year.',
    costi: "Täsch parking from 17 CHF/day; Gornergrat extra, not included in the parking. Daily budget per person: low €120-160 (hostel or room in Täsch, supermarket food, Sunnegga or Schwarzsee), mid €280-400 (hotel double in Zermatt, restaurant, Gornergrat), high €550 and up.",
    erroriDaEvitare: [
      'Trying to enter Zermatt by van or car: the ban exists and is checked',
      "Not allowing for the driving time to get there: over two hours from Interlaken even going via Grimsel-Furka",
      "Taking for granted that the Matterhorn is free of clouds: it makes its own even when the sky around is clear",
    ],
    miaEsperienza:
      "Zermatt was the last stop of our van trip with friends, coming over the Grimsel and Furka passes: you leave the van in Täsch and do the last stretch by train.",
    luoghi: [
      {
        nome: "Gornergrat",
        testo: "The cog railway climbs to 3,089 metres. From the terrace you see the Matterhorn, Monte Rosa and the Gorner glacier.",
        come: "Rack train from the Gornergrat Bahn station in Zermatt; frequent departures in summer.",
        quando: "Morning, with the clearest sky.",
        tempo: "Half a day",
        costo: "Return CHF 132 from May to October 2026 and CHF 102 from November 2026 to April 2027; half price with the Swiss Travel Pass or Half Fare Card.",
        lat: 45.98331,
        lng: 7.78463,
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Get off at Rotenboden or Riffelberg for a walk."
      },
      {
        nome: "Zermatt village",
        testo: "The car-free centre, with dark wooden houses, shops and hotels. The small cemetery by the church remembers climbers who died on the Matterhorn.",
        come: "On foot from the station.",
        quando: "All year.",
        tempo: "1-2 hours",
        costo: "Free.",
        orari: "Always open.",
        lat: 46.02457,
        lng: 7.74813,
        consiglio: "The Matterhorn Museum tells the story of the first ascent in 1865."
      },
      {
        nome: "Matterhorn Glacier Paradise",
        testo: "The station at 3,820 metres, below the Klein Matterhorn summit (3,883 m): one of the highest points in Europe you can reach by cable car. An ice grotto is cut into the glacier.",
        come: "Cable car from Zermatt, changing at Furi and Trockener Steg.",
        quando: "Early morning for the clearest sky.",
        tempo: "Half a day",
        costo: "Return CHF 104 (about €111) from November 2026 to April 2027, CHF 138 (about €148) from May to October 2027.",
        lat: 45.93836,
        lng: 7.72934,
        url: "https://www.matterhornparadise.ch/",
        consiglio: "Bring sunglasses and a warm layer: it is cold at 3,800 metres."
      },
      {
        nome: "Five Lakes Walk",
        testo: "A hike from Blauherd towards Sunnegga along five alpine lakes (Stellisee, Grindjisee, Grünsee, Moosjisee and Leisee) that mirror the Matterhorn. One of the classic photos.",
        come: "Funicular to Sunnegga and gondola to Blauherd, then on foot, more downhill than up.",
        quando: "Summer; the lakes reflect best in the morning.",
        tempo: "3-4 hours",
        costo: "Combined ticket Zermatt-Blauherd and Sunnegga-Zermatt CHF 52 (about €56) in summer.",
        orari: "Trail walkable from late June to early October, depending on snow.",
        lat: 46.01344,
        lng: 7.80038,
        url: "https://www.matterhornparadise.ch/en/information/tickets-prices/sightseeing-tickets",
        consiglio: "Stellisee gets very busy: arrive early."
      },
      {
        nome: "Riffelsee",
        testo: "The small lake below Rotenboden station, at 2,757 metres, where the whole Matterhorn is reflected on still mornings. It is Zermatt's most classic photo and is a few minutes' walk from the train.",
        come: "Gornergrat railway to Rotenboden, then 10 minutes downhill on foot.",
        quando: "Early morning, when the water is still.",
        tempo: "1 hour",
        costo: "Included in the Gornergrat ticket.",
        orari: "The lake is usually ice-free from July to October.",
        lat: 45.98336,
        lng: 7.76205,
        url: "https://www.gornergratbahn.ch/",
        consiglio: "Walk on to Riffelberg and catch the train there."
      },
      {
        nome: "Sunnegga and Rothorn",
        testo: "An underground funicular climbs in a few minutes to Sunnegga, a sunny terrace with Leisee lake and a playground; from there gondola and cable car continue to the Rothorn at 3,103 metres. It is the viewpoint most squarely facing the Matterhorn's east face.",
        come: "Sunnegga Express funicular from the valley station by the river, then Blauherd and Rothorn.",
        quando: "Morning for the Matterhorn in sunlight; Sunnegga also at sunset.",
        tempo: "half a day",
        costo: "Sunnegga return CHF 26 in winter and CHF 36 (about €39) in summer; Rothorn CHF 70 in winter and CHF 96 (about €103) in summer.",
        lat: 46.01717,
        lng: 7.76976,
        url: "https://www.matterhornparadise.ch/en/experience/peaks/rothorn",
        consiglio: "Leisee is swimmable in summer: one of the few alpine lakes suited to children."
      },
      {
        nome: "Schwarzsee",
        testo: "A dark lake at 2,583 metres with a white chapel on its shore, right at the foot of the Hörnli ridge, the normal route up the Matterhorn. From here you see the mountain side-on, almost within reach.",
        come: "Cable car from Zermatt, changing at Furi.",
        quando: "Summer; you can walk back down to Zermatt via Stafelalp.",
        tempo: "2-3 hours",
        costo: "Return CHF 53 in winter and CHF 70 (about €75) in summer.",
        lat: 45.99077,
        lng: 7.70682,
        url: "https://www.matterhornparadise.ch/"
      },
      {
        nome: "Matterhorn Museum - Zermatlantis",
        testo: "A museum under the church square, built like a buried village, telling the story of the first Matterhorn ascent in 1865 and the tragedy on the descent. It also displays the broken rope from Whymper's party.",
        come: "On foot from the station, 5 minutes, next to the church.",
        quando: "On bad-weather afternoons.",
        tempo: "1 hour",
        costo: "Adults CHF 12 (about €13), teenagers 10-16 CHF 7, children free.",
        orari: "Open afternoons: from 20 November 2026 Friday-Sunday 3-6 pm, from 18 December daily 3-6 pm; from June 2027 daily 2-6 pm.",
        lat: 46.01977,
        lng: 7.74646,
        url: "https://www.zermatt.ch/en/Media/Attractions/Matterhorn-Museum-Zermatlantis"
      },
      {
        nome: "Kirchbrücke",
        testo: "The bridge over the Vispa next to the church is the spot in the village with the clearest view of the Matterhorn, framed by houses and the river. At dawn, when the summit glows orange, it fills with photographers.",
        come: "On foot from the centre, 5 minutes from the station.",
        quando: "At dawn, for first light on the summit.",
        tempo: "20 minutes",
        costo: "Free.",
        orari: "Always open.",
        lat: 46.01891,
        lng: 7.74806
      },
      {
        nome: "Hinterdorf, the old village",
        testo: "A narrow lane behind Bahnhofstrasse with barns and granaries of blackened timber from the 16th and 17th centuries, raised on stilts with stone discs to keep mice out. It is what remains of farming Zermatt before mountaineering.",
        come: "On foot from the church heading north along Hinterdorfstrasse.",
        quando: "Early morning or evening, when it is quiet.",
        tempo: "30 minutes",
        costo: "Free.",
        orari: "Always open.",
        lat: 46.02085,
        lng: 7.74761
      },
      {
        nome: "Gorner Gorge (Gornerschlucht)",
        testo: "A narrow gorge carved by the Gorner glacial stream, walked on wooden footbridges fixed to the rock above green water. It is a short outing, half an hour from the centre, that pairs well with walking back down from Furi.",
        come: "On foot from the village towards the hamlet of Blatten, about 30 minutes.",
        quando: "In summer, in the warm hours.",
        tempo: "1-2 hours including the walk",
        lat: 46.00882,
        lng: 7.7391,
        consiglio: "Check it is open first: the walkways close out of season."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Kirchbrücke at dawn",
          "Gornergrat by train, stop at Riffelsee getting off at Rotenboden",
          "Lunch at Riffelberg and back by train",
          "Afternoon in Hinterdorf and the Matterhorn Museum"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Gornergrat, Riffelsee and the village",
          "Day 2: Sunnegga, the five lakes trail and Rothorn; evening at Kirchbrücke"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Gornergrat and Riffelsee, afternoon in the village and the museum",
          "Day 2: Sunnegga, the five lakes and Rothorn",
          "Day 3: Matterhorn Glacier Paradise in the morning, Schwarzsee in the afternoon and a walk down past the Gorner Gorge"
        ]
      }
    ],
    zone: [
      {
        nome: "Zermatt",
        testo: "Car-free; lodging at every price, but expensive.",
        perChi: "to stay in the centre",
        fascia: "€200-450"
      },
      {
        nome: "Täsch and Randa",
        testo: "Lower prices, with the frequent shuttle train to Zermatt.",
        perChi: "to save money",
        fascia: "€130-250"
      },
      {
        nome: "Visp and Brig",
        testo: "The two towns on the Rhône line, about an hour by train from Zermatt, have cheaper hotels and fast trains to Bern, Interlaken and Italy.",
        perChi: "those combining Zermatt with other places in Valais",
        fascia: "€110-200"
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
    faq: [
      {
        domanda: "How many days do you need in Zermatt?",
        risposta: "Two days are enough for Gornergrat and the five lakes trail. With three you can add Matterhorn Glacier Paradise and Schwarzsee, and keep a spare day in case the Matterhorn is hidden."
      },
      {
        domanda: "Can you drive to Zermatt?",
        risposta: "No, the village is closed to private traffic. You leave the car in Täsch, in the covered car park from CHF 17 a day, and the shuttle train takes about 12 minutes, every 20 minutes."
      },
      {
        domanda: "Gornergrat or Matterhorn Glacier Paradise?",
        risposta: "Gornergrat faces the Matterhorn head-on and has Riffelsee on the way, so it is the pick if you only have one day. Glacier Paradise is higher and icier, but from the top you see the Matterhorn side-on."
      },
      {
        domanda: "When is the Matterhorn most visible?",
        risposta: "Early in the morning, before clouds gather around the summit. The lift companies' webcams help you decide whether to go up."
      },
      {
        domanda: "How much does a day in Zermatt cost?",
        risposta: "Lifts weigh most: Gornergrat costs CHF 132 return in summer, half with a Swiss Travel Pass or Half Fare Card. With a hotel and a restaurant you easily pass €300 per person."
      }
    ],
    gite: [
      {
        nome: "Charles Kuonen Suspension Bridge (Randa)",
        distanza: "about 20 minutes by train, then 1-2 hours on foot",
        come: "Train to Randa, then a signposted uphill trail to the bridge, on the Europaweg route.",
        testo: "A 494-metre pedestrian suspension bridge over a side valley, one of the longest in the Alps. You walk above the void with the Weisshorn ahead."
      },
      {
        nome: "Saas-Fee",
        distanza: "about 2 hours by train and bus",
        come: "Train to Visp or Stalden, then post bus to Saas-Fee.",
        testo: "The other car-free village in Valais, ringed by four-thousanders and glaciers that come down almost to the houses. Less crowded and a little cheaper than Zermatt."
      },
      {
        nome: "Sion",
        distanza: "about 2 hours by train",
        come: "Train to Visp and change onto the Rhône line.",
        testo: "The capital of Valais, with two fortified hills, Valère and Tourbillon, and terraced vineyards all around. A day of town and wine when the weather up high is bad."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: "The Matterhorn at sunset reflected in a small alpine lake above Zermatt, with a hiker seen from behind in the foreground",
    immagine: '/images/svizzera/zermatt.jpg',
  },
]
