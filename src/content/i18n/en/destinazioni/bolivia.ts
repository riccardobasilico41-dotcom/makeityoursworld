import type { Destinazione } from '@/lib/types'

export const destinazioniBolivia: Destinazione[] = [
  {
    slug: 'la-paz',
    paeseSlug: 'bolivia',
    ordine: 1,
    nome: 'La Paz',
    tipologia: ['città', 'avventura'],
    giorniConsigliati: '3-4 days, including the day on the Death Road',
    visitataPersonalmente: true,
    introduzione:
      "The highest seat of government in the world, wedged into a canyon at 3,600 meters with El Alto towering over it at more than 4,000. You get around with an urban cable car network that is both public transport and the city's best viewpoint.",
    percheAndarci:
      "Because it's the base for the Death Road and for Lake Titicaca, and because the city itself, with its street markets, vertical neighborhoods and the contrast between the center and El Alto, is one of the most distinctive on the continent.",
    cosaVedere: [
      'Mi Teleférico, the urban cable car network: the red and yellow lines give the best view over the basin',
      "The Mercado de las Brujas, the witches' market, with traditional Aymara remedies",
      'The Valle de la Luna, eroded clay formations a few kilometers from the center',
      'The El Alto market (Thursdays and Sundays), one of the largest in South America',
      'Nevado Illimani closing the horizon at 6,438 meters',
    ],
    cosaFare: [
      'Ride down the Death Road by mountain bike (see the dedicated experience card)',
      'Take the cable car at sunset, when the basin lights up',
      'Watch a cholitas luchadoras match, the wrestling of Aymara women in El Alto',
      'Excursion to Chacaltaya, the former highest ski resort in the world, today without a glacier',
    ],
    doveDormire: 'Sopocachi for the restaurants and nightlife, the San Pedro area and the center for low prices and convenience to the agencies.',
    doveMangiare:
      "In La Paz you eat better on the street than in a restaurant: salteñas mid-morning (it's a local habit: they aren't eaten for breakfast), api with pastel, and the soups of the covered markets. In the Sopocachi area is the city's most refined offering.",
    comeArrivare:
      "International flight to El Alto (LPB), one of the highest airports in the world at over 4,000 meters: you go from sea level to the maximum altitude in a few hours, with effects you feel right away. By land, a bus from Copacabana (about 4 hours) or from Cusco via Lake Titicaca.",
    comeSpostarsi: 'Mi Teleférico for long trips, radio taxis for the rest. Avoid unofficial taxis, especially in the evening.',
    periodoMigliore: 'May-October, dry season; nights are cold all year',
    costi: 'a cable car ride costs a few euro cents; the city is among the cheapest capitals in the world',
    erroriDaEvitare: [
      "Landing in El Alto and planning something demanding the same day: from sea level to 4,000 meters the body doesn't adapt in a few hours",
      'Underestimating road blockades: when they happen, they can isolate the city for days and cancel flights and transfers',
      'Walking around with valuables in view in crowded markets',
    ],
    miaEsperienza:
      "Landing in El Alto is a physical shock that almost nobody factors in: we stepped off the plane at more than four thousand meters and the body noticed before we even left the terminal. La Paz is the strangest city on the continent, built inside a basin with the poor neighborhoods up high and the rich ones down low. It's the opposite of every other city in the world, and for a precise reason: the lower you go, the more you can breathe. I recommend the urban cable cars to everyone: they cost a few cents and give the best view over the basin. The real problem in Bolivia is the road blockades, to be factored into the itinerary as a concrete risk.",
    esperienzeSlugs: ['carretera-de-la-muerte'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'The snow-covered Nevado Illimani dominating the La Paz basin at sunset, Bolivia',
    immagine: '/images/bolivia/la-paz.jpg',
  },
  {
    slug: 'salar-de-uyuni',
    paeseSlug: 'bolivia',
    ordine: 2,
    nome: 'Salar de Uyuni and Sud Lípez',
    tipologia: ['natura', 'avventura', 'deserto'],
    giorniConsigliati: '3-4 days, the format of the classic 4x4 tour',
    visitataPersonalmente: true,
    introduzione:
      "The largest salt flat in the world, over 10,000 square kilometers at 3,650 meters of altitude, and its natural extension to the south: the colored lagoons, geysers and high-altitude deserts of Sud Lípez, up to the Chilean border.",
    percheAndarci:
      "Because it looks like nothing else, and because the three-day 4x4 tour crosses in sequence the salar, red and green lagoons, geysers at 5,000 meters and open-air hot springs: it's hard to find so many different landscapes in so little space.",
    cosaVedere: [
      'The salar itself, with the salt polygons as far as the eye can see',
      'Isla Incahuasi, the rock island covered in giant cacti in the middle of the white expanse',
      'The train cemetery, on the outskirts of Uyuni',
      'Laguna Colorada, red from algae, with thousands of flamingos',
      'The Sol de Mañana geysers, at almost 5,000 meters, and the Polques hot springs',
      'Laguna Verde at the foot of the Licancabur volcano',
    ],
    cosaFare: [
      'Classic 3-day, 2-night 4x4 tour, returning to Uyuni or continuing toward San Pedro de Atacama in Chile',
      'Forced-perspective photos on the salar, where the lack of reference points wipes out the perception of distance',
      'A night in a salt hotel, with walls and furniture made from salar blocks',
      'Sunrise on the salar, the moment when the light makes the real difference',
    ],
    doveDormire:
      "Uyuni as the starting base; during the tour you sleep in very basic lodgings in Sud Lípez, often without heating at over 4,000 meters.",
    doveMangiare: 'Meals included in the tour, prepared by the driver-cook.',
    comeArrivare:
      "Flight from La Paz to Uyuni (about an hour, the most comfortable option) or an overnight bus from La Paz, Sucre or Potosí. Many also arrive from San Pedro de Atacama, in Chile, doing the tour in reverse.",
    comeSpostarsi: "Only in a 4x4 with a driver, as part of the organized tour: it's not an area to explore independently.",
    periodoMigliore:
      "Two seasons, two different experiences. From May to October the salar is dry and can be crossed in full, with clear skies and freezing nights. From January to March a film of water turns it into the giant mirror of the most famous photographs, but some areas, Isla Incahuasi included, can become inaccessible.",
    costi: 'a 3-day tour roughly $150-250 per person depending on the operator, with entrance to Eduardo Avaroa park separate',
    erroriDaEvitare: [
      "Choosing the operator on price alone: vehicles and maintenance make a real difference on isolated tracks at 4,500 meters, where a breakdown is a serious problem",
      "Going in January-March expecting to see everything: with the water the mirror effect is spectacular but several stops are dropped",
      "Underestimating the night cold: in the Sud Lípez lodgings you sleep below freezing, and the sleeping bag isn't always included",
      "Arriving in Uyuni without having acclimatized: the tour climbs to almost 5,000 meters on the second day",
    ],
    miaEsperienza:
      "It's the only place where I completely lost my sense of distance: with no reference points you can't tell whether a mountain is five kilometers or fifty away, and that's why the forced-perspective photos work. What stayed with me, though, is the second day, in Sud Lípez, more than the first on the salt: red lagoons full of flamingos above four thousand meters, geysers puffing at dawn at twenty below zero, lodgings where we slept in our clothes because there was no heating. It's a much harder tour than the photographs let you imagine, and the only line item where it doesn't pay to save is the operator: out there a 4x4 that breaks down is a serious problem.",
    esperienzeSlugs: ['tour-uyuni-sud-lipez'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'An off-road vehicle on the white expanse of the Salar de Uyuni under a blue sky, Bolivia',
    immagine: '/images/bolivia/salar-de-uyuni.jpg',
  },
  {
    slug: 'titicaca-boliviano',
    paeseSlug: 'bolivia',
    ordine: 3,
    nome: 'Copacabana and Isla del Sol',
    tipologia: ['natura', 'cultura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The Bolivian side of Lake Titicaca: Copacabana, a pilgrimage town overlooking the lake, and Isla del Sol, where according to Inca tradition the sun and the first Inca were born. It's also the natural way to enter Bolivia from Peru.",
    percheAndarci:
      "Because Isla del Sol is more beautiful and less built-up than the Peruvian islands, with scenic trails among Inca ruins and terraces, and because the border crossing from Puno is among the simplest on the continent.",
    cosaVedere: [
      'The Basilica of Copacabana, a pilgrimage destination with the Virgen de la Candelaria',
      'Cerro Calvario, the hill above the town, for sunset over the lake',
      'The ruins of Chincana and the Roca Sagrada, at the northern end of Isla del Sol',
      "The trail that runs along the island's ridge from north to south",
      'The ruins of Tiwanaku, on the road to La Paz, capital of a civilization that preceded the Incas',
    ],
    cosaFare: [
      'Spend a night on Isla del Sol, instead of visiting it in a day: at sunset and dawn it is almost deserted',
      "Walk along the island's ridge, among terraces and ruins",
      'Cross the border from Puno via Kasani/Yunguyo, with the exit and entry stamps to be done on foot',
    ],
    doveDormire: "Copacabana for convenient connections; Isla del Sol for the most evocative night, in basic lodgings without heating.",
    doveMangiare: 'Trucha (lake trout) almost everywhere, on the Copacabana lakefront.',
    comeArrivare:
      "Bus from Puno (Peru) with a crossing at the Kasani border, about 3-4 hours in total; from La Paz about 4 hours, with the crossing of the Tiquina Strait on a barge.",
    comeSpostarsi: 'Shared boats from Copacabana to Isla del Sol; on the island there are no vehicles: you walk, always uphill.',
    periodoMigliore: 'May-October for the sun; at 3,800 meters nights are cold all year',
    costi: 'very cheap: boat to the island a few dollars, plus small entrance fees collected by the local communities',
    erroriDaEvitare: [
      "Planning Isla del Sol as a day trip from Copacabana: boat schedules leave few useful hours and you miss the best part",
      "Taking access to the whole island for granted: tensions between communities have at times limited passage to the northern part, so it's best to ask on the spot",
      "Underestimating the altitude: you walk uphill at almost 4,000 meters",
    ],
    miaEsperienza:
      "The Bolivian side of the lake is quite a bit more beautiful than the Peruvian one. Copacabana is a slightly shabby pilgrimage town but with a soul, and Isla del Sol for me beats the Puno islands: terraces, stone paths, no cars and no heavy tourist organization. Spending a night there changes everything, because the day boats all arrive and leave together, and as soon as they go the island falls silent again. You just have to factor in that you always walk uphill at almost four thousand meters, with a backpack, and it's tiring.",
    esperienzeSlugs: [],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Terraces and paths of Isla del Sol with sheep grazing on Lake Titicaca, Bolivia',
    immagine: '/images/bolivia/titicaca-boliviano.jpg',
  },
  {
    slug: 'sucre-potosi',
    paeseSlug: 'bolivia',
    ordine: 4,
    nome: 'Sucre and Potosí',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '3-4 days for both',
    visitataPersonalmente: true,
    introduzione:
      "Sucre is the constitutional capital, a white colonial city and UNESCO World Heritage site at 2,800 meters, the kindest altitude in Bolivia. Potosí, at 4,000 meters, is the city that with the silver of its Cerro Rico financed the Spanish empire for centuries, at the cost of an enormous number of lives.",
    percheAndarci:
      "For the contrast: Sucre is the gentlest Bolivia, with the best climate and the best Spanish schools in the country; Potosí is its harshest history, still visible every day in the active tunnels.",
    cosaVedere: [
      'The colonial center of Sucre, with the Casa de la Libertad where independence was signed',
      "Sucre's Parque Cretácico, a vertical wall with thousands of dinosaur footprints",
      'The Casa Nacional de la Moneda in Potosí, the old colonial mint',
      'Cerro Rico, the silver mountain that dominates Potosí',
      'The lagoons and textile villages around Sucre, such as Tarabuco with its Sunday market',
    ],
    cosaFare: [
      'Spanish course in Sucre, among the cheapest and most appreciated in South America',
      'Visit to the cooperative mines of Cerro Rico, an intense and debated experience (see the dedicated experience card)',
      'Tarabuco market on Sunday, for Yampara textiles',
    ],
    doveDormire: 'Historic center of Sucre, the most pleasant city in all of Bolivia to stay for a few days.',
    doveMangiare:
      "Sucre has the best quality of life in the country and in the covered markets you eat well spending very little, where the fruit juice stand is an institution. In Potosí the offering is more basic: hearty soups, suited to four thousand meters.",
    comeArrivare: 'Flight from La Paz to Sucre (about an hour) or overnight bus; between Sucre and Potosí about 3 hours by road.',
    comeSpostarsi: 'Both cities can be explored on foot; frequent buses between the two.',
    periodoMigliore: 'May-October; Sucre has the mildest climate in the country thanks to its lower altitude',
    costi: 'among the cheapest cities on the continent, language courses included',
    erroriDaEvitare: [
      "Passing through Potosí without accounting for the altitude: at 4,000 meters even walking around the center is tiring",
      "Treating the mine visit as just any tourist attraction: it's a real workplace, with very harsh conditions",
    ],
    miaEsperienza:
      "Sucre is the place where I felt like staying longer: two thousand eight hundred meters instead of four thousand, mild climate, a white and orderly city where you can finally breathe and sleep. Potosí is the opposite, and not only because of the altitude. Entering the tunnels of Cerro Rico was the heaviest experience of the whole trip, not dangerous in itself, but hard to digest: we walked bent over in hot, dusty tunnels next to men who spend ten hours a day there with tools from another century. It should be treated with the respect owed to a workplace. We came out silent, and perhaps that's right.",
    esperienzeSlugs: ['miniere-cerro-rico'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Cerro Rico dominating the red-tiled roofs of Potosí, Bolivia',
    immagine: '/images/bolivia/sucre-potosi.jpg',
  },
  {
    slug: 'rurrenabaque-madidi',
    paeseSlug: 'bolivia',
    ordine: 5,
    nome: 'Rurrenabaque and Madidi',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '4-5 days, to do both pampas and jungle',
    visitataPersonalmente: true,
    introduzione:
      "The Bolivian Amazon, far less trodden and quite a bit cheaper than the Peruvian or Brazilian one. From Rurrenabaque you set off in two opposite directions: the Yacuma pampas, flooded grasslands where wildlife is easy to see, or the primary forest of Madidi National Park.",
    percheAndarci:
      "Because it's perhaps the cheapest way in the world to enter the Amazon, and because Madidi is one of the protected areas with the greatest biodiversity on the planet.",
    cosaVedere: [
      'Caimans, capybaras and monkeys along the Yacuma River, in the pampas',
      'Pink river dolphins, which in the pampas approach the boats',
      "The primary forest of Madidi, with enormous trees and wildlife that is harder to spot but more authentic",
      'Sunsets over the flooded grasslands, the best moment of the day',
    ],
    cosaFare: [
      '3-day tour in the pampas: boating, wildlife viewing, piranha fishing and night-time caiman spotting',
      'Tour in the Madidi jungle, with guided walks and nights in lodges in the forest',
      'Swim with pink dolphins where guides allow it',
    ],
    confronti: [
      {
        titolo: 'Pampas or jungle? The two Amazons of Rurrenabaque',
        introduzione:
          "From Rurrenabaque you choose between two completely different environments, and those with time for only one often choose wrong. Quality has little to do with it: what matters is what you want to see.",
        opzioni: [
          {
            nome: 'Yacuma pampas',
            sintesi: 'Flooded grasslands traveled by boat along the river, with wildlife concentrated on the banks and clearly visible.',
            costo: 'roughly $100-200 for 3 days, all included',
            durata: '3 days, 2 nights',
            pro: [
              'Guaranteed, close-up sightings: caimans, capybaras, monkeys, pink dolphins, hundreds of birds',
              'Less tiring: you are almost always in a boat',
              'The cheaper of the two',
            ],
            contro: [
              "It's not the \"imagined\" Amazon rainforest: it's flooded savanna",
              'A remarkable number of mosquitoes',
              "Some practices of the cheapest operators with caimans and anacondas are ethically questionable",
            ],
            perChi: 'Those who want to see animals, and see them for sure.',
          },
          {
            nome: 'Madidi jungle',
            sintesi: 'Primary forest inside the national park, with guided walks and nights in lodges or tent camps.',
            costo: 'roughly $150-300 for 3-4 days',
            durata: '3-4 days',
            pro: [
              "It's the real Amazon, with enormous trees and very high biodiversity",
              'Strong cultural component if you choose a lodge run by Indigenous communities, such as Chalalán or San Miguel del Bala',
              'Much less trodden than the pampas',
            ],
            contro: [
              'Wildlife is much harder to spot: in the dense forest you hear more than you see',
              'More tiring, with walks in the humid heat',
              'Costs more',
            ],
            perChi: "Those who want to understand what the forest is really like, accepting that they'll see fewer animals.",
          },
        ],
        raccomandazione:
          "With four or five days you do both, and it's the best solution: pampas for the wildlife, Madidi for the forest. If you have to choose, those who come to the Amazon for the animals should take the pampas, those who come for the environment should choose Madidi. In both cases it's worth checking that the operator doesn't handle the wildlife to entertain clients.",
      },
    ],
    doveDormire: 'Rurrenabaque as a base; during the tours you sleep in lodges along the river, basic but with mosquito nets.',
    doveMangiare: 'Meals included in the tours.',
    comeArrivare:
      "Flight from La Paz to Rurrenabaque (about 45 minutes, on small planes, often canceled due to weather) or an 18-20 hour bus along a demanding mountain road.",
    comeSpostarsi: 'Only by boat and on foot, as part of organized tours.',
    periodoMigliore: 'May-October, dry season: fewer mosquitoes, passable roads and tracks, and wildlife concentrated along the rivers',
    costi: 'among the cheapest Amazon experiences in the world',
    erroriDaEvitare: [
      "Counting on the return flight with no margin: flights to Rurrenabaque are often canceled because of weather, and the alternative is a bus of almost twenty hours",
      "Choosing the cheapest operator without checking: in the pampas some practices with caimans and anacondas are harmful to the animals",
      "Going without serious repellent and without yellow fever vaccination",
    ],
    miaEsperienza:
      "In the pampas I saw more animals with less effort than anywhere else: you sit in a boat and caimans, capybaras, monkeys and hundreds of birds file past, with pink dolphins surfacing now and then beside the hull. There you also see the more questionable practices: some guides pull caimans out of the water or go looking for anacondas to let clients touch them. It shouldn't be indulged: just say no and ask to stay and watch. And the mosquitoes are on another level, instead of a repellent you'd need armor.",
    esperienzeSlugs: [],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Boats moored on the Beni River in Rurrenabaque, at the foot of forest-covered hills, Bolivia',
    immagine: '/images/bolivia/rurrenabaque-madidi.jpg',
  },
]
