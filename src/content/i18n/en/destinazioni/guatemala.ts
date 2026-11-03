import type { Destinazione } from '@/lib/types'

export const destinazioniGuatemala: Destinazione[] = [
  {
    slug: 'antigua-guatemala',
    paeseSlug: 'guatemala',
    ordine: 1,
    nome: 'Antigua Guatemala',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: "2-3 days, plus an extra night if you do the Acatenango trek",
    visitataPersonalmente: true,
    introduzione:
      "The former colonial capital, a UNESCO site: cobblestone streets, pastel facades, ruins of churches destroyed by earthquakes, and three volcanoes in the background, Agua, Fuego and Acatenango.",
    percheAndarci:
      "It's the base of almost every trip to Guatemala: it's an hour from the capital's airport, has shuttles to every other stop in the country, and the volcano treks start from here.",
    cosaVedere: [
      "The Santa Catalina Arch, with Volcán de Agua framed in the background",
      "The ruins of the Convent of Santa Clara and the La Merced church",
      "Cerro de la Cruz, a viewpoint over the city and the volcanoes (a short climb, best in a group or with the tourist police)",
      "The municipal market and the handicraft market",
    ],
    cosaFare: [
      "Two-day trek up Acatenango to watch Fuego's eruptions from camp (see the dedicated experience page)",
      "Guatemalan cooking or chocolate class (ChocoMuseo and other schools downtown)",
      "Half-day climb of Pacaya volcano, a shorter option than Acatenango",
      "A day trip to Chichicastenango on Thursday or Sunday, for the largest indigenous market in the country",
    ],
    doveDormire:
      "The lodgings are all in the historic center, a few blocks from the Parque Central: from hostels with rooftop terraces to colonial houses turned boutique hotels.",
    doveMangiare:
      "Antigua has the most international cuisine in the country and is the only Guatemalan city where you spend like in Europe without noticing. To avoid that there's the municipal market at midday, where the menú del día (soup, main dish, tortillas, drink) costs a few quetzales. Try the pepián, the meat stew with roasted seed sauce that is the national dish, plantain rellenitos as a street dessert, and the coffee: Guatemala grows some of the best in the world, and here you drink it in roasteries that roast it on the spot.",
    comeArrivare: "Fly to Guatemala City (GUA), then about 1 hour by shuttle or private taxi to Antigua.",
    comeSpostarsi: "You can walk the whole center; for the other stops in the country there are tourist shuttles, bookable at any agency downtown.",
    periodoMigliore: "November-April; Semana Santa (March-April) brings the most famous processions in Latin America, but also much higher prices and crowds",
    costi: "among the most expensive cities in Guatemala, but cheap by European standards; the Acatenango trek starts at around €60 with equipment included",
    erroriDaEvitare: [
      "Climbing Cerro de la Cruz alone and outside the hours when the tourist police are on duty",
      "Underestimating the night cold at the Acatenango camp (almost 4,000 m / 13,000 ft): you need real layers, not just a sweatshirt",
    ],
    miaEsperienza:
      "We arrived in Antigua in the early afternoon, and on our first walk along the cobblestone streets we had the volcanoes Agua, Fuego and Acatenango at the end of every street. The next day we walked around the historic center, from the Santa Catalina Arch to the ruined churches, and climbed Cerro de la Cruz for the view. What stays with me is Acatenango: five or six hours of climbing through cornfields and pine forest, on volcanic sand that gives way under your feet, the hardest stretch of the whole trip. The camp was above the clouds, Fuego started erupting before sunset, and at night we watched it throw lava a couple of kilometers away without leaving our sleeping bags, in cold close to freezing. In the morning we went down sliding on the sand more than walking. The list of things we did in Central America starts there.",
    esperienzeSlugs: ['trekking-acatenango'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Cobblestone street in Antigua Guatemala with colonial houses and Volcán de Agua in the background',
    immagine: '/images/guatemala/antigua-guatemala.jpg',
  },
  {
    slug: 'lago-atitlan',
    paeseSlug: 'guatemala',
    ordine: 2,
    nome: 'Lake Atitlán',
    tipologia: ['natura', 'cultura'],
    giorniConsigliati: '2-4 days, depending on how many villages you want to see',
    visitataPersonalmente: true,
    introduzione:
      "A lake inside a volcanic caldera, surrounded by three volcanoes and about ten very different Maya villages, connected almost only by boat.",
    percheAndarci:
      "This is where Guatemala slows down. Each village on the lake has its own character (some come for yoga, some for Spanish schools, some for traditional Tz'utujil and Kaqchikel life) and you pick your base according to the pace you're after.",
    cosaVedere: [
      "Panajachel, the arrival town and transport hub, with Calle Santander full of handicrafts",
      "San Juan la Laguna, the most polished village, known for its textile cooperatives and murals",
      "San Marcos la Laguna, the town of yoga and holistic practices, with the Cerro Tzankujil diving platform",
      "Santiago Atitlán, the largest and most traditional village, where the syncretic figure of Maximón is venerated",
      "The Atitlán Nature Reserve near Panajachel",
    ],
    cosaFare: [
      "Village-hopping by lancha, the shared public boats (see the dedicated experience page)",
      "Sunrise from the Indian Nose, the viewpoint over the caldera (night departure with a guide)",
      "Kayak or SUP on the lake in the early morning, when the water is still",
      "Spanish course in San Pedro la Laguna, among the cheapest in Latin America",
    ],
    doveDormire:
      "Your base changes the trip: Panajachel for convenient transport, San Pedro for low prices and company, San Marcos for calm and the holistic side, Santa Cruz for hotels on the water reachable only by boat.",
    doveMangiare:
      "On the lake you eat well if you know two things: the fish is almost always farmed tilapia, not caught in the lake, and restaurants with a view cost double those a block from the water. San Juan la Laguna has coffee cooperatives that also serve food and is the most polished spot; in San Marcos, because of the community that lives there, vegetarian cooking dominates. To eat like the locals, go to the Panajachel market in the morning: churrasco, tamales and caldo de pollo for a few quetzales.",
    comeArrivare: "Tourist shuttle from Antigua (about 3 hours) or from Guatemala City; alternatively a chicken bus with a change at Los Encuentros.",
    comeSpostarsi: "Public lanchas between the villages (a few euros per trip, they leave when full, until sunset); tuk tuks within the towns.",
    periodoMigliore: "November-April; in every season, after noon, the Xocomil wind makes the crossings rougher",
    costi: "lanchas 10-25 GTQ per trip depending on distance; lodging among the cheapest in the country",
    erroriDaEvitare: [
      "Planning crossings in the afternoon: the Xocomil wind picks up almost every day and makes the ride uncomfortable",
      "Staying only in Panajachel: it's the transport hub, not the most interesting village on the lake",
      "Climbing the Indian Nose in the dark without a guide",
    ],
    miaEsperienza:
      "Panajachel is the transport hub, with Calle Santander full of handicrafts, but stopping only there is the most common mistake: the lake begins when you get on a lancha. In one day we touched San Juan la Laguna, with its textile cooperatives and murals, San Marcos, the yoga town, and San Pedro, and every ten minutes by boat the atmosphere changed. The next day we woke up at four for the Indian Nose and then took the lancha to Santiago Atitlán, where the women still wear the tocoyal wrapped around their heads. We quickly learned to travel in the morning, because from early afternoon the Xocomil picks up and the crossings get rough. The sunrise from the Indian Nose is worth the early wake-up only with a clear sky: in the rainy season you climb in the dark to look at a cloud.",
    esperienzeSlugs: ['lance-villaggi-atitlan'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'The blue waters of Lake Atitlán with volcanoes in the background, seen from San Marcos La Laguna, Guatemala',
    immagine: '/images/guatemala/lago-atitlan.jpg',
  },
  {
    slug: 'tikal-flores',
    paeseSlug: 'guatemala',
    ordine: 3,
    nome: 'Tikal and Flores',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 days, one of them entirely for Tikal',
    visitataPersonalmente: true,
    introduzione:
      "The largest Maya site in Guatemala, in the Petén jungle: temples over 60 meters (200 ft) high rising above the forest canopy, amid the calls of howler monkeys and toucans. The base for visiting is the island of Flores, on Lake Petén Itzá.",
    percheAndarci:
      "Unlike other Maya sites, Tikal sits inside a living forest: the animals are as much a part of the visit as the pyramids, and the view from Temple IV over the jungle is one of the most famous in Mesoamerica.",
    cosaVedere: [
      "The Gran Plaza with Temples I (the Great Jaguar) and II",
      "Temple IV, the tallest in the site, with the viewing platform above the forest",
      "The Mundo Perdido, the oldest complex in the site",
      "The island of Flores, with its colorful houses and lakefront",
      "The smaller site of Yaxhá, much less crowded and ideal for sunset",
    ],
    cosaFare: [
      "Visit Tikal at sunrise, with the special ticket for early entry (see the dedicated experience page)",
      "Boat ride on Lake Petén Itzá at sunset",
      "Excursion to Yaxhá, reachable in a day from Flores",
    ],
    doveDormire:
      "Flores (the island) for the atmosphere and connections; El Remate as a quieter alternative halfway to Tikal; there are also a few hotels inside the park, handy for being at the gates when they open.",
    doveMangiare:
      "In the Petén you find dishes that don't exist in the rest of Guatemala: grilled white fish from Lake Petén Itzá and, in the more traditional places, game meat. On the island of Flores the lakefront restaurants have the sunset and tourist prices; one block up, on the inner streets, there are comedores where you spend a third. Inside Tikal park there's little to eat and it's expensive: bring your lunch and above all plenty of water.",
    comeArrivare:
      "Domestic flight from Guatemala City to Flores (about 1 hour, the fastest option) or overnight bus (8-10 hours). From Flores to the park, about 1h30 by shuttle.",
    comeSpostarsi: "Organized Flores-Tikal shuttles (for sunrise they leave very early); inside the site you get around only on foot, along several kilometers of trails.",
    periodoMigliore: "November-April for dry trails; morning fog in the dry season, however, can cover the view from Temple IV",
    costi: "park entrance about 150 GTQ, with a supplement for sunrise entry and a mandatory guide during that time slot",
    erroriDaEvitare: [
      "Buying the sunrise ticket expecting a guaranteed sunrise: in the dry season haze over the jungle is frequent",
      "Underestimating distances inside the site: you walk several kilometers in high heat and humidity",
      "Planning Tikal as a day trip from Antigua: the distance requires a flight or overnight bus",
    ],
    miaEsperienza:
      "We left Flores around three in the morning and walked in the dark to Temple IV with the guide. The sunrise, in the dry season, is often veiled by haze; what's worth the early wake-up is the sound, the chorus of howler monkeys and birds waking up at first light, before the buses arrive. We spent the rest of the day among the Gran Plaza, Temples I and II and the Mundo Perdido, walking for kilometers under the forest canopy: that's what sets Tikal apart from other Maya sites. Flores, where we had arrived the evening before, is an island of colorful houses with a quiet lakefront, living almost entirely off tourism to Tikal.",
    esperienzeSlugs: ['alba-tikal'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Stepped pyramid of the Mundo Perdido among the trees at the Maya site of Tikal, Guatemala',
    immagine: '/images/guatemala/tikal-flores.jpg',
  },
  {
    slug: 'semuc-champey',
    paeseSlug: 'guatemala',
    ordine: 4,
    nome: 'Semuc Champey',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 days, given the long transfers',
    visitataPersonalmente: true,
    introduzione:
      "A natural staircase of turquoise limestone pools on a rock bridge, under which the Cahabón river runs, tucked away. It's in a remote valley of Alta Verapaz, near the village of Lanquín.",
    percheAndarci:
      "It's the most photographed natural landscape in Guatemala, and remote enough never to be too crowded: the road to get there is part of the trip.",
    cosaVedere: [
      "The terraced natural pools of Semuc Champey",
      "The Mirador, a viewpoint looking down on the pools (a steep climb of about 30-45 minutes)",
      "The spot where the Cahabón river slips under the rock bridge",
      "The K'anba caves, explored by candlelight",
    ],
    cosaFare: [
      "Swim in the natural pools, following the route from the bottom up",
      "K'anba caves with a candle in hand, swimming sections included",
      "Tubing on the Cahabón river",
    ],
    doveDormire: "Lanquín (more services and connections) or the hostels along the dirt road to Semuc, closer to the entrance but isolated.",
    doveMangiare:
      "There's no choice, and it's good to know: in Lanquín and along the dirt road to the park you eat at the hostels, with set menus in the evening, or at the few comedores in town. At the Semuc entrance some families sell grilled chicken and freshly made tortillas, the best thing in the area. Buy water and snacks beforehand: inside the park there's nothing to be found.",
    comeArrivare:
      "Tourist shuttle from Antigua, Guatemala City or Flores: 8-10 hours, with the last stretch on a very slow dirt road. It's the most demanding transfer on a classic Guatemala route.",
    comeSpostarsi: "From town to the park entrance you ride in the bed of shared pickups, about 30-45 minutes.",
    periodoMigliore: "dry season for the most turquoise water: after the rains the color turns murky green",
    costi: "park entrance about 50 GTQ; combined tour of caves + tubing + entrance around 150-250 GTQ",
    erroriDaEvitare: [
      "Planning it as a 'pass-through' stop: the transfers to and from Lanquín are long and tiring, you need a full day for each leg",
      "Going right after days of heavy rain, when the pools lose their turquoise color",
    ],
    miaEsperienza:
      "Getting there is half the story: from Panajachel to Lanquín was the longest transfer day of the trip, with the last stretch on a dirt road that slowly descends into the valley. The next day we climbed up the pools from the bottom and then went up to the Mirador: the climb is steep, but without the view from above you can't understand how the place works, with the river disappearing under the rock bridge and re-emerging three hundred meters further on. In the afternoon we entered the K'anba caves, with a candle in hand and some stretches to swim in the dark: the least touristy thing in the area and the one I remember most. If you're claustrophobic, skip them without regrets.",
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'The turquoise terraced natural pools of Semuc Champey seen from above among the jungle, Guatemala',
    immagine: '/images/guatemala/semuc-champey.jpg',
  },
  {
    slug: 'chichicastenango',
    paeseSlug: 'guatemala',
    ordine: 5,
    nome: 'Chichicastenango',
    tipologia: ['cultura', 'mercati'],
    giorniConsigliati: 'half a day, as a day trip from Antigua or Lake Atitlán',
    visitataPersonalmente: true,
    introduzione:
      "The largest indigenous market in Central America: on Thursdays and Sundays it fills the entire center of town with textiles, masks, ceramics, flowers and food.",
    percheAndarci:
      "Beyond the market, it's one of the places where Maya-Catholic syncretism is most visible: on the steps of the Santo Tomás church, copal and offerings are still burned according to K'iche' rites.",
    cosaVedere: [
      "The market, with the handicraft section in the main square and the food section in the side streets",
      "The Santo Tomás church and its steps, where Maya rites are held",
      "The cemetery with its brightly painted tombs, just outside the center",
    ],
    cosaFare: [
      "Haggle for textiles and huipiles at the market (bargaining is the norm)",
      "Watch the rites on the Santo Tomás steps, respectfully and without photographing people without permission",
    ],
    doveDormire: "Most visitors come for the day; to be at the market when it opens, though, it's worth sleeping in town the night before.",
    doveMangiare:
      "On market days you eat at the market, in the food section of the side streets, standing at the stalls with the vendors: tamales wrapped in leaves, chuchitos, caldo, freshly made tortillas. The restaurants around the square serve the same things at triple the price. On other days there's little, and nothing special.",
    comeArrivare: "Tourist shuttle from Antigua (about 3 hours) or from Panajachel (about 1h30), with departures concentrated on market days.",
    comeSpostarsi: "All on foot, the town is small.",
    periodoMigliore: "only Thursday and Sunday, the market days; it's best to arrive early, when the market still belongs to the people who work there",
    costi: "no admission; the cost is whatever you spend haggling",
    erroriDaEvitare: [
      "Arriving on a day other than Thursday or Sunday: outside market days the town is quiet and not very interesting",
      "Photographing people or rites without asking permission: here it's a matter of respect",
    ],
    miaEsperienza:
      "We got there from Antigua, three hours by shuttle, on one of the two market days: outside Thursday and Sunday the town is quiet and not very interesting. We wandered among the stalls of textiles, masks and ceramics and ate standing at the stalls in the food section, in the side streets. What stayed with me, though, is the Santo Tomás staircase: on the steps of a Catholic church, copal and offerings are still burned according to K'iche' rites. It's a real ritual and you watch it with respect, without photographing people without permission. In the late afternoon we continued toward Lake Atitlán.",
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'The colorful mosaic-decorated arch over a cobblestone street in Chichicastenango, Guatemala',
    immagine: '/images/guatemala/chichicastenango.jpg',
  },
]
