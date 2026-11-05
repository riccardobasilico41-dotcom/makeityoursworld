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
    costi: 'a cable car ride costs 3 bolivianos, less than half a euro; the city is among the cheapest capitals in the world',
    erroriDaEvitare: [
      "Landing in El Alto and planning something demanding the same day: from sea level to 4,000 meters the body doesn't adapt in a few hours",
      'Underestimating road blockades: when they happen, they can isolate the city for days and cancel flights and transfers',
      'Walking around with valuables in view in crowded markets',
    ],
    miaEsperienza:
      "Landing in El Alto is a physical shock that almost nobody factors in: we stepped off the plane at more than four thousand meters and the body noticed before we even left the terminal. La Paz is the strangest city on the continent, built inside a basin with the poor neighborhoods up high and the rich ones down low. It's the opposite of every other city in the world, and for a precise reason: the lower you go, the more you can breathe. I recommend the urban cable cars to everyone: they cost a few cents and give the best view over the basin. The real problem in Bolivia is the road blockades, to be factored into the itinerary as a concrete risk.",
    luoghi: [
      {
        "nome": "Mi Teleférico",
        "testo": "The urban cable-car network linking La Paz and El Alto. It is public transport and also a great viewpoint over the basin, especially from the red and yellow lines.",
        "come": "Stations are all over the city; you buy the ticket at the station.",
        "quando": "At sunset, when the basin lights up.",
        "tempo": "1-2 hours",
        "costo": "Cheap ticket, bought at the station: fares on the official website",
        "url": "https://www.miteleferico.bo/",
        "consiglio": "Rick recommends them to everyone: they cost very little and give the best view over the basin."
      },
      {
        "nome": "Mercado de las Brujas",
        "testo": "The witches' market, with traditional Aymara remedies, herbs, amulets and the llama foetuses used as offerings to Pachamama.",
        "come": "On foot from the centre, in the calle Linares area.",
        "quando": "By day.",
        "tempo": "1 hour",
        "consiglio": "Always ask before photographing people."
      },
      {
        "nome": "Valle de la Luna",
        "testo": "Eroded clay formations a few kilometres from the centre, with short paths among spires and canyons.",
        "come": "Bus or taxi to the southern part of La Paz.",
        "quando": "Morning, with better light.",
        "tempo": "1-2 hours",
        "consiglio": "At this altitude even a short walk tires you: go slowly."
      },
      {
        "nome": "El Alto and the cholitas luchadoras",
        "testo": "El Alto's 16 de Julio fair (Thursday and Sunday) is a huge street market. In El Alto you can also watch the cholitas' wrestling, Aymara women in traditional skirts.",
        "come": "By cable car to El Alto.",
        "quando": "Thursday and Sunday for the market.",
        "tempo": "Half a day",
        "consiglio": "Keep bags and phone in front: the market is crowded."
      },
      {
        "nome": "Death Road (Carretera de la Muerte)",
        "testo": "The old road to Coroico, with about 3,500 metres of descent, now ridden downhill by mountain bike. A day experience through mist, forest and gorges.",
        "come": "With an operator, by mountain bike, leaving La Paz early in the morning and returning late afternoon.",
        "quando": "In the dry season, and only once acclimatised.",
        "tempo": "Full day",
        "costo": "Varies a lot between budget and premium operators: compare what is included",
        "consiglio": "Choose an operator with bikes and brakes in good condition: here it matters more than price."
      },
      {
        "nome": "Chacaltaya",
        "testo": "It was a high-altitude ski area. The glacier had completely disappeared by 2009; the area lies near Huayna Potosí.",
        "come": "Half-day tour from La Paz.",
        "quando": "Early morning.",
        "tempo": "Half a day",
        "consiglio": "Go up only after at least two days in La Paz: the altitude is very high."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Mercado de las Brujas",
          "Red and yellow cable cars",
          "Lunch with salteñas",
          "Sunset by cable car"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: the 1-day plan, in absolute calm",
          "Day 2: Valle de la Luna and El Alto market (Thursday or Sunday)"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Death Road, only after acclimatising"
        ]
      }
    ],
    zone: [
      {
        "nome": "Sopocachi",
        "perChi": "Those who want restaurants and nightlife",
        "testo": "A more polished district, lower down and with bars. A few steps from the centre."
      },
      {
        "nome": "San Pedro and centre",
        "perChi": "Budget travellers",
        "testo": "Low prices and convenient for agencies, but more chaotic and noisy."
      }
    ],
    sapori: [
      {
        "nome": "Salteñas",
        "testo": "Baked pastries filled with meat or chicken in gravy. Eaten mid-morning: they are not breakfast food."
      },
      {
        "nome": "Api con pastel",
        "testo": "Hot purple corn drink with a fried cheese pastry, street breakfast."
      },
      {
        "nome": "Covered-market soups",
        "testo": "Hearty, suited to the altitude."
      },
      {
        "nome": "Refined cooking in Sopocachi",
        "testo": "The district with the city's most elaborate offer."
      }
    ],
    attenzioni: [
      "Landing at El Alto, at very high altitude, and planning something demanding the same day.",
      "Road blockades: they can isolate the city for days and cancel flights and transfers.",
      "Unofficial taxis, especially in the evening: use radio taxis or apps.",
      "Pickpockets in crowded markets: no valuables in view.",
      "Recheck the political and social situation on Viaggiare Sicuri before leaving."
    ],
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
    costi: 'a 3-day tour roughly $150-250 per person depending on the operator, with entrance to the Eduardo Avaroa reserve separate (about 150 bolivianos in cash, according to operators) and Isla Incahuasi separate (about 30 bolivianos)',
    erroriDaEvitare: [
      "Choosing the operator on price alone: vehicles and maintenance make a real difference on isolated tracks at 4,500 meters, where a breakdown is a serious problem",
      "Going in January-March expecting to see everything: with the water the mirror effect is spectacular but several stops are dropped",
      "Underestimating the night cold: in the Sud Lípez lodgings you sleep below freezing, and the sleeping bag isn't always included",
      "Arriving in Uyuni without having acclimatized: the tour climbs to almost 5,000 meters on the second day",
    ],
    miaEsperienza:
      "It's the only place where I completely lost my sense of distance: with no reference points you can't tell whether a mountain is five kilometers or fifty away, and that's why the forced-perspective photos work. What stayed with me, though, is the second day, in Sud Lípez, more than the first on the salt: red lagoons full of flamingos above four thousand meters, geysers puffing at dawn at twenty below zero, lodgings where we slept in our clothes because there was no heating. It's a much harder tour than the photographs let you imagine, and the only line item where it doesn't pay to save is the operator: out there a 4x4 that breaks down is a serious problem.",
    luoghi: [
      {
        "nome": "The Uyuni salt flat",
        "testo": "A vast, high-altitude salt flat. With no reference points you cannot tell if a mountain is five or fifty kilometres away, which is why forced-perspective photos work.",
        "come": "Only by 4x4 with a driver, as part of an organised tour leaving from Uyuni.",
        "quando": "In the dry season the salt flat is dry and passable throughout. In the rainy season (roughly December-April) it turns into a mirror of water, but some stops are lost.",
        "tempo": "Half a day or a day",
        "costo": "The tour is paid to the agency and prices vary a lot between operators. Extra, in cash: entry to the Eduardo Avaroa reserve and to Isla Incahuasi; ask the operator for current amounts",
        "consiglio": "For perspective photos bring small-scale objects and use dawn light."
      },
      {
        "nome": "Isla Incahuasi",
        "testo": "The rock island covered in giant cacti in the middle of the white expanse.",
        "come": "A stop on the 4x4 tour from the salt flat, with a short climbing path.",
        "quando": "Dry season; in the rainy season it can become hard to reach.",
        "tempo": "1-2 hours",
        "consiglio": "The path gives the best view of the salt flat from a raised position."
      },
      {
        "nome": "Train cemetery",
        "testo": "Abandoned locomotives and wagons on the outskirts of Uyuni, a remnant of the mining railway network.",
        "come": "By taxi from the town or at the start of the tour.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "Watch out for rusty metal parts."
      },
      {
        "nome": "Laguna Colorada",
        "testo": "A lagoon coloured red by sediments and algae, with many flamingos, in the Sud Lípez.",
        "come": "A stop on the second day of the 4x4 tour.",
        "quando": "Early morning.",
        "tempo": "1-2 hours",
        "consiglio": "The second day in the Sud Lípez is the one that stayed most with Rick, more than the salt: red lagoons full of flamingos above four thousand metres."
      },
      {
        "nome": "Sol de Mañana geysers and hot springs",
        "testo": "Geysers at about 4,900 metres that puff at dawn and, along the same route, open-air hot pools.",
        "come": "Stops on the 4x4 tour.",
        "quando": "At dawn, with temperatures below zero.",
        "tempo": "1-2 hours",
        "consiglio": "Dress in layers: dawn at the geysers is among the coldest hours of the trip."
      },
      {
        "nome": "Laguna Verde",
        "testo": "A lagoon in the far south-west, near the Chilean border.",
        "come": "Last stop of the 4x4 tour before San Pedro de Atacama.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "Those continuing to Chile cross the border from here."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: train cemetery",
          "Salt flat and Isla Incahuasi",
          "Sunset on the salt flat"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: salt flat, Isla Incahuasi, night in a salt hotel",
          "Day 2: Sud Lípez lagoons, Laguna Colorada",
          "Day 3: geysers at dawn, hot springs, Laguna Verde, return to Uyuni or onward to San Pedro de Atacama"
        ]
      }
    ],
    zone: [
      {
        "nome": "Uyuni",
        "perChi": "Those leaving for the tour",
        "testo": "Starting base, a simple town with agencies."
      },
      {
        "nome": "Sud Lípez lodgings",
        "perChi": "Those on the 3-day tour",
        "testo": "Very basic, often without heating at high altitude. You sleep below zero."
      },
      {
        "nome": "Salt hotel",
        "perChi": "Those who want a special experience",
        "testo": "Walls and furnishings made from salt flat blocks."
      }
    ],
    sapori: [
      {
        "nome": "Tour meals",
        "testo": "Prepared by the driver-cook: soups, rice, meat."
      },
      {
        "nome": "Quinoa",
        "testo": "Grown in the area, in soups and local dishes."
      },
      {
        "nome": "Llama meat",
        "testo": "Often on the menus of Uyuni restaurants."
      }
    ],
    attenzioni: [
      "Choosing the operator on price alone: vehicles and maintenance make a real difference on high-altitude tracks.",
      "Night cold below zero: the sleeping bag is not always included.",
      "Arriving in Uyuni unacclimatised: on day two you climb almost to 5,000 metres.",
      "Rainy season (roughly December-April): mirror effect, but several stops are lost."
    ],
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
    luoghi: [
      {
        "nome": "Copacabana Basilica",
        "testo": "A pilgrimage destination devoted to the Virgen de Copacabana, in a slightly shabby town with a soul.",
        "come": "On foot from the lakefront.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "Copacabana is the natural entry from Peru."
      },
      {
        "nome": "Cerro Calvario",
        "testo": "The hill above the town, for sunset over the lake.",
        "come": "On foot from the centre, a short but steep climb.",
        "quando": "Sunset.",
        "tempo": "1-2 hours",
        "consiglio": "At this altitude the climb tires: go slowly."
      },
      {
        "nome": "Isla del Sol: Chincana and Roca Sagrada",
        "testo": "The Chincana ruins and the Roca Sagrada, at the northern end of the island where tradition says the sun and the first Inca were born.",
        "come": "Shared boat from Copacabana.",
        "quando": "Morning and sunset.",
        "tempo": "Half a day",
        "costo": "Boat plus small entry fees collected by the communities: carry cash",
        "consiglio": "Ask locally whether the passage to the northern part is open: tensions between communities have at times limited it."
      },
      {
        "nome": "The Isla del Sol ridge path",
        "testo": "The path along the island's ridge from north to south among terraces and ruins.",
        "come": "On foot, always uphill and at high altitude.",
        "quando": "Morning and sunset.",
        "tempo": "3-4 hours",
        "consiglio": "Sleeping one night on the island changes everything: day boats arrive and leave all together, and then the island goes quiet again."
      },
      {
        "nome": "Tiwanaku",
        "testo": "The ruins of a civilisation older than the Incas, on the road to La Paz.",
        "come": "By tour or taxi from the road to La Paz.",
        "quando": "Morning.",
        "tempo": "2-3 hours",
        "consiglio": "It combines with the return to La Paz."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Copacabana, Cerro Calvario at sunset",
          "Day 2: boat to Isla del Sol, ridge path"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Copacabana",
          "Day 2: Isla del Sol, night on the island",
          "Day 3: dawn on the island and return to Copacabana, then La Paz"
        ]
      }
    ],
    zone: [
      {
        "nome": "Copacabana",
        "perChi": "Those who want connections and convenience",
        "testo": "More convenient for transport. Cold nights at altitude."
      },
      {
        "nome": "Isla del Sol",
        "perChi": "Those who want the most atmospheric night",
        "testo": "Simple lodgings with no heating. Everything uphill."
      }
    ],
    sapori: [
      {
        "nome": "Lake trout",
        "testo": "Trout almost everywhere, on the Copacabana lakefront."
      },
      {
        "nome": "Pejerrey",
        "testo": "Lake fish, fried."
      },
      {
        "nome": "Quinoa and chuño",
        "testo": "Simple Andean cooking in small places."
      }
    ],
    attenzioni: [
      "Planning Isla del Sol as a day trip: you miss the best part.",
      "Access to the whole island is not guaranteed: ask locally.",
      "Underestimating altitude: you walk uphill high up.",
      "Kasani/Yunguyo border: hours and formalities change, check them again before you go."
    ],
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
    luoghi: [
      {
        "nome": "Colonial centre of Sucre and Casa de la Libertad",
        "testo": "The constitutional capital, a white colonial city on the UNESCO list, lower than La Paz. The republic was founded in the Casa de la Libertad.",
        "come": "On foot from the centre.",
        "quando": "By day.",
        "tempo": "Half a day",
        "consiglio": "Sucre is where Rick felt like staying longer: milder altitude, gentler climate."
      },
      {
        "nome": "Parque Cretácico",
        "testo": "An almost vertical wall with thousands of dinosaur footprints (over 12,000 recorded), in a quarry just outside Sucre.",
        "come": "By bus or taxi from the centre.",
        "quando": "Morning.",
        "tempo": "2 hours",
        "consiglio": "Bring comfortable shoes and a hat: the visit is outdoors."
      },
      {
        "nome": "Tarabuco market",
        "testo": "A textile village near Sucre, with the Sunday market and Yampara textiles.",
        "come": "By shared van or tour from Sucre.",
        "quando": "Sunday.",
        "tempo": "Half a day",
        "consiglio": "Haggle over prices."
      },
      {
        "nome": "Casa Nacional de la Moneda (Potosí)",
        "testo": "The old colonial mint, where the silver of Cerro Rico was coined.",
        "come": "On foot from the centre of Potosí.",
        "quando": "Morning.",
        "tempo": "1-2 hours",
        "consiglio": "At this altitude even walking in the centre is tiring."
      },
      {
        "nome": "Cerro Rico mines",
        "testo": "The silver mountain above Potosí: between the 16th and 18th centuries it produced much of the world's silver, and Potosí became one of the largest cities in the New World. You enter the tunnels of the still active mining cooperatives with helmet and lamp.",
        "come": "With a Potosí agency, preferably one run by former miners.",
        "quando": "On working days, when the cooperatives are active.",
        "tempo": "Half a day",
        "costo": "Guide and gear are paid to the agency: ask what the price includes",
        "consiglio": "For Rick it was the heaviest experience of the trip: hot, dusty tunnels beside men who spend ten hours a day there. Not recommended for the claustrophobic."
      },
      {
        "nome": "Spanish course in Sucre",
        "testo": "Central Sucre has several Spanish schools, handy for anyone staying a few weeks.",
        "come": "Schools in the centre of Sucre; book ahead.",
        "quando": "All year.",
        "tempo": "From a few days to weeks",
        "consiglio": "Prices and formats vary from school to school: compare before booking."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Sucre (centre, Casa de la Libertad, Parque Cretácico)",
          "Day 2: Potosí, Casa de la Moneda and Cerro Rico mines"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Sucre",
          "Day 2: Tarabuco (Sunday) or another trip",
          "Day 3: Potosí and mines"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic centre of Sucre",
        "perChi": "Those staying a few days",
        "testo": "A pleasant city to stay a few days."
      },
      {
        "nome": "Centre of Potosí",
        "perChi": "Those visiting the mines",
        "testo": "Basic lodgings at high altitude. Cold nights."
      }
    ],
    sapori: [
      {
        "nome": "Sucre covered markets",
        "testo": "You eat well spending very little; the juice stall is an institution."
      },
      {
        "nome": "Chorizos chuquisaqueños",
        "testo": "Spiced sausages typical of Sucre."
      },
      {
        "nome": "Potosí soups",
        "testo": "Hearty, suited to the altitude."
      }
    ],
    attenzioni: [
      "In Potosí the altitude weighs: even walking in the centre tires.",
      "The mines are a workplace, not an ordinary attraction: very harsh conditions.",
      "Bring a small gift for the miners (coca leaves, soft drinks) bought at the miners' market.",
      "Road blockades: they can block connections for days."
    ],
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
    luoghi: [
      {
        "nome": "Yacuma pampas",
        "testo": "Flooded grasslands explored by boat along the Rio Yacuma: caimans, capybaras, monkeys, pink dolphins and a great many birds, seen up close.",
        "come": "Organised 3-day tour from Rurrenabaque, with boat trips and nights in a lodge.",
        "quando": "In the dry season.",
        "tempo": "3 days, 2 nights",
        "costo": "All-inclusive tour: prices vary between agencies, compare several in Rurrenabaque",
        "consiglio": "Rick saw more animals with less effort than anywhere else. If the guide pulls caimans out of the water or looks for anacondas to be touched, say no."
      },
      {
        "nome": "Madidi jungle",
        "testo": "Primary forest inside the national park, with huge trees and very high biodiversity. Wildlife is harder to see.",
        "come": "3-4 day tour with guided walks and nights in a lodge or tent camp.",
        "quando": "In the dry season.",
        "tempo": "3-4 days",
        "costo": "Depends on the lodge and the length: ask the lodge or agency directly",
        "consiglio": "Choose a lodge run by indigenous communities."
      },
      {
        "nome": "Pink dolphins and sunsets over the pampas",
        "testo": "The pink dolphins come close to the boats, and sunset over the flooded grasslands is the best moment of the day.",
        "come": "Part of the pampas tour.",
        "quando": "Sunset.",
        "tempo": "1-2 hours",
        "consiglio": "Swimming with dolphins is only allowed where the guides permit."
      },
      {
        "nome": "La Paz-Rurrenabaque flight",
        "testo": "A flight of about 45 minutes to an hour on small planes, which can be cancelled for weather, taking you from the altiplano down to forest level.",
        "come": "Book with a margin; the alternative is a bus of about 18 hours.",
        "quando": "All year.",
        "tempo": "45 minutes to 1 hour",
        "consiglio": "Do not count on the return flight without margin."
      }
    ],
    programmi: [
      {
        "titolo": "3 days (pampas)",
        "tappe": [
          "Day 1: boat and sightings along the Rio Yacuma",
          "Day 2: piranha fishing, pink dolphins, night caiman search",
          "Day 3: dawn over the pampas and return"
        ]
      },
      {
        "titolo": "4-5 days (pampas and jungle)",
        "tappe": [
          "Days 1-3: pampas",
          "Days 4-5: Madidi with a lodge in the forest"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rurrenabaque",
        "perChi": "Those leaving for the tours",
        "testo": "Base town with agencies. Humid heat."
      },
      {
        "nome": "Lodges along the river",
        "perChi": "Those on the tours",
        "testo": "Basic but with mosquito nets."
      }
    ],
    sapori: [
      {
        "nome": "River fish",
        "testo": "Surubí and pacú, grilled."
      },
      {
        "nome": "Tour meals",
        "testo": "Included in the tours."
      }
    ],
    attenzioni: [
      "Flights to Rurrenabaque can be cancelled for weather: the alternative is a bus of about 18 hours.",
      "Some practices with caimans and anacondas harm the animals: check the operator.",
      "Serious repellent. Yellow fever vaccination is recommended for the Rurrenabaque area: ask your doctor before you go.",
      "Mosquitoes in notable quantity."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'Boats moored on the Beni River in Rurrenabaque, at the foot of forest-covered hills, Bolivia',
    immagine: '/images/bolivia/rurrenabaque-madidi.jpg',
  },
]
