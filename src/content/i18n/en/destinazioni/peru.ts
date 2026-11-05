import type { Destinazione } from '@/lib/types'

export const destinazioniPeru: Destinazione[] = [
  {
    slug: 'cusco',
    paeseSlug: 'peru',
    ordine: 1,
    nome: 'Cusco',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '3-4 days, at least two of them just for acclimatizing',
    visitataPersonalmente: true,
    introduzione:
      "The old capital of the Inca empire at 11,200 feet (3,400 meters), where dry-fitted stone foundations still hold up the colonial churches built on top of them. It's the logistical base for almost everything you do in Peru: trains, treks and flights to the Amazon all start here.",
    percheAndarci:
      "Because it's the unavoidable starting point, and because it's worth it on its own: the Inca stonework at Sacsayhuamán and Qorikancha is the best way to understand what you're about to see at Machu Picchu.",
    cosaVedere: [
      'Qorikancha, the Inca sun temple on which the conquistadors built the convent of Santo Domingo',
      'Sacsayhuamán, the fortress above the city with megalithic blocks fitted together without mortar',
      'Plaza de Armas and the Cathedral',
      'The San Blas neighborhood, the steepest and most characterful',
      'The Stone of Twelve Angles, on Calle Hatun Rumiyoc',
    ],
    cosaFare: [
      "Take it easy for the first two days: without acclimatizing you won't be able to do the rest of the trip",
      'San Pedro Market for a first taste of Andean food',
      'Peruvian cooking class, or a ceviche and pisco sour tasting',
      'A day at Rainbow Mountain (Vinicunca) or Humantay Lake, both above 15,000 feet (4,600 meters), to be done only once you have acclimatized',
    ],
    doveDormire:
      'The historic center and San Blas are the most convenient and pleasant areas; San Blas is all uphill, though, which you feel a lot in the first days at altitude.',
    doveMangiare:
      "San Pedro Market is the right place for your first impression: fruit juices at the counter, soups and menú del día for a few soles. In town, try cuy (guinea pig), grilled alpaca and chicharrón; a pisco sour is a must the first night, but take it slow, because at 11,200 feet (3,400 meters) alcohol hits twice as hard.",
    comeArrivare: 'Domestic flight from Lima (about 1h20), which is almost the only sensible option. By land from Puno or Arequipa it takes 6-10 hours by bus.',
    comeSpostarsi: 'You get around the center on foot; cheap taxis and colectivos for the outer areas. For the Sacred Valley, organized tours or a car with a driver.',
    periodoMigliore: "May-September, the dry season. Watch out for June 24, when Inti Raymi fills the city",
    costi: 'the Cusco Tourist Ticket (Boleto Turístico, about 130 soles) covers Sacsayhuamán, the Sacred Valley sites and several museums in a single ticket; it is almost always worth it',
    erroriDaEvitare: [
      'Landing in Cusco and leaving for a trek the next day: it is the most direct way to ruin your trip with altitude sickness',
      "Underestimating the nights: at 11,200 feet (3,400 meters) it's cold all year, even when it's 68°F (20°C) in the daytime",
      "Going up to Rainbow Mountain in the first few days, when your body hasn't yet reacted to the altitude",
    ],
    miaEsperienza:
      "The first day here is a lost day, and you have to factor it in: we landed at 11,200 feet (3,400 meters) and only walked slowly between Plaza de Armas and San Blas, coca tea in hand like everyone else. It's what you need, and the rest of the trip benefits. On the second day, Qorikancha and Sacsayhuamán, the best way to understand beforehand what you'll see at Machu Picchu, and lunch at San Pedro Market among juices at the counter and soups for a few soles. For souvenirs in Cusco, I go to Assunta. From here I did both Rainbow Mountain and Humantay Lake, plus another colorful mountain and a couple of lakes whose names I don't remember.",
    luoghi: [
      {
        "nome": "Plaza de Armas and Cathedral",
        "testo": "The colonial heart of Cusco: arcades, wooden balconies and a Cathedral built with blocks taken from Sacsayhuamán. In the evening, with the churches lit up, it is the place to catch your breath after the arrival day.",
        "come": "In the centre, a walk from almost every hotel. The Cathedral has its own ticket, not included in the general Boleto Turístico.",
        "quando": "The square is best at dawn and after sunset, when tour groups are elsewhere.",
        "tempo": "1-2 hours with the Cathedral",
        "consiglio": "On the first day do nothing else: stroll slowly between the square and San Blas with a coca tea in hand, like everyone does."
      },
      {
        "nome": "Qorikancha (Santo Domingo convent)",
        "testo": "It was the Inca Temple of the Sun. The conquistadors built the Santo Domingo convent on top, but the dry-stone walls survived the earthquakes that damaged the colonial part. It explains what the stones at Machu Picchu are about.",
        "come": "On foot from the Plaza de Armas, heading south-east. You visit the convent with its cloisters and Inca rooms; there is also a separate site museum.",
        "quando": "Best in the morning, before the organised groups.",
        "tempo": "1 hour",
        "consiglio": "Visit it on the second day together with Sacsayhuamán: the best way to understand Inca masonry before the rest of the trip."
      },
      {
        "nome": "Sacsayhuamán",
        "testo": "The fortress-sanctuary above the city, with three great terrace walls of megalithic blocks fitted without mortar: the largest is estimated at between 128 and almost 200 tonnes. From the top you see all of Cusco, and on 24 June Inti Raymi is celebrated here.",
        "come": "Above the city, to the north: by taxi or uphill on foot, which is best avoided in your first days at altitude. It is included in the Boleto Turístico.",
        "quando": "Morning or early afternoon. On 24 June, Inti Raymi day, access changes: check beforehand.",
        "tempo": "1.5-2 hours",
        "costo": "General Boleto Turístico about 130 soles for foreigners, valid 10 days, 16 sites (COSITUC price list, 2026). Partial tickets for a single circuit cost 70 soles",
        "consiglio": "Go up by taxi and walk down: the descent towards San Blas is pleasant and does not tire you."
      },
      {
        "nome": "San Blas and the Stone of Twelve Angles",
        "testo": "The artisans' quarter, all steep lanes, workshops and cafés. In Calle Hatun Rumiyoc is the twelve-angled stone, an Inca block fitted perfectly among the others.",
        "come": "On foot from the square. The streets are steep and cobbled.",
        "quando": "All day; the workshops are livelier in the afternoon.",
        "tempo": "1-2 hours",
        "consiglio": "For souvenirs you find better-made things here than at the stalls on the square. Allow for the climbs: they are felt in the first days."
      },
      {
        "nome": "San Pedro Market",
        "testo": "The covered market where the locals eat: juice stalls, soups, cheeses, herbs and coca. A first taste of Andean cooking without spending much.",
        "come": "On foot from the Plaza de Armas, heading west. Free entry.",
        "quando": "Morning and lunch; many stalls close in the afternoon.",
        "tempo": "1 hour",
        "consiglio": "The menú del día at lunch costs a few soles and is what locals eat. Keep your bag in front: pickpockets work here."
      },
      {
        "nome": "Rainbow Mountain (Vinicunca)",
        "testo": "The striped mountain in ochre, pink and turquoise, above 16,400 feet (5,000 metres). A day trip from Cusco, with a final walk at altitude that is hard on your breath more than on distance.",
        "come": "A day trip leaving Cusco at night, a few hours on the road and an uphill walk. You go with an agency.",
        "quando": "Dry season. Leave before dawn for fewer crowds.",
        "tempo": "Full day",
        "consiglio": "Do it after a few days of acclimatisation. Rick also did Humantay lake and other lakes nearby, always after getting used to the altitude."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Plaza de Armas and Cathedral",
          "Qorikancha and lunch at San Pedro market",
          "Afternoon: San Blas and the Stone of Twelve Angles",
          "Evening: light dinner and early bed, you are at altitude"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: square, San Blas and market, all easy, coca tea and no alcohol",
          "Day 2 morning: Qorikancha",
          "Day 2 afternoon: Sacsayhuamán by taxi and walk down towards San Blas"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as in the 2-day plan",
          "Day 3: sleep already in the Sacred Valley (lower) or, well acclimatised, Rainbow Mountain or Humantay lake as a day trip"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic centre and Plaza de Armas",
        "perChi": "Arrivals who want everything on foot",
        "testo": "The most convenient area for restaurants, agencies and transport. Lively and a bit noisy at night; beware of pickpockets in the busiest streets."
      },
      {
        "nome": "San Blas",
        "perChi": "Those who want atmosphere and workshops",
        "testo": "The prettiest quarter, with lanes and cafés. All uphill, and in the first days at altitude the stairs weigh a lot."
      },
      {
        "nome": "San Pedro and Santa Ana area",
        "perChi": "Budget travellers",
        "testo": "Cheaper lodgings near the market and the bus station. Less picturesque, but the square is within walking distance."
      }
    ],
    sapori: [
      {
        "nome": "Cuy",
        "testo": "Guinea pig roasted or fried, a festive Andean dish. Eaten in the typical restaurants of the centre and in picanterías out of town."
      },
      {
        "nome": "Grilled alpaca",
        "testo": "Lean meat, like a delicate beef. Found in almost every restaurant in the centre."
      },
      {
        "nome": "Chicharrón",
        "testo": "Fried pork pieces served with corn and potatoes, a weekend dish."
      },
      {
        "nome": "Mate de coca",
        "testo": "Coca leaf infusion, offered in almost every lodging. Drunk all day in the first days at altitude."
      },
      {
        "nome": "Menú del día",
        "testo": "Soup, main and drink at a low fixed price. The best place to try it is San Pedro market."
      }
    ],
    attenzioni: [
      "Unofficial taxis at the airport and everywhere: use only booked taxis or apps. It is one of the places where thefts are most frequent.",
      "Street money changers passing fake or out-of-circulation notes: change only at a bank or an authorised casa de cambio.",
      "Pickpockets in busy tourist areas and at San Pedro market: bag in front, no phone in hand.",
      "Altitude sickness (soroche): two days of real rest before any trek, no alcohol on the first day.",
      "Long-distance buses: use only the main companies, especially at night."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'A woman vendor in a hat holds up a tray of corn on the cob in front of the cathedral of Cusco, in the Plaza de Armas',
    immagine: '/images/peru/cusco-plaza-de-armas-venditrice-riccardo.jpg',
  },
  {
    slug: 'valle-sacra',
    paeseSlug: 'peru',
    ordine: 2,
    nome: 'Sacred Valley of the Incas',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 days, better to sleep there than do it as a day trip from Cusco',
    visitataPersonalmente: true,
    introduzione:
      'The Urubamba River valley between Cusco and Machu Picchu: terraces, salt pans still in use since Inca times, weaving villages and the fortress of Ollantaytambo, where the trains leave from.',
    percheAndarci:
      "It sits 1,600-2,000 feet (500-600 meters) lower than Cusco, so it's the right place to acclimatize while sleeping better, and it's full of sites that almost nobody visits slowly because everyone rushes to Machu Picchu.",
    cosaVedere: [
      'Ollantaytambo, the only Inca settlement still inhabited according to its original layout, with the terraced fortress above the town',
      'The Maras salt pans, thousands of white pools carved into the mountainside',
      'Moray, the concentric circular terraces the Incas used as an agricultural laboratory',
      'The market and archaeological site of Pisac',
      'Chinchero, for traditional weaving',
    ],
    cosaFare: [
      'Sleep in Ollantaytambo the night before the train to Machu Picchu: you gain a good hour of sleep compared with leaving from Cusco',
      'Bike or quad ride between Maras and Moray',
      'Rafting on the Urubamba or paragliding above the valley',
      "Weaving workshop with a women's cooperative in Chinchero",
    ],
    doveDormire:
      'Ollantaytambo is the most strategic choice for the train; Urubamba has the most comfortable lodgings; Pisac is the quietest and most alternative.',
    doveMangiare:
      "In the valley you eat better at the countryside restaurants with views over the terraces than at the tourist places in Pisac. Look for the trucha (trout) from the local rivers and the classic menú del día, which costs very little at midday and is what the locals eat.",
    comeArrivare: 'About 1h30 by car from Cusco to Ollantaytambo; frequent, cheap colectivos leave from Calle Pavitos in Cusco.',
    comeSpostarsi: 'Car with a driver or an organized tour to cover Maras, Moray and Pisac in one day; colectivos between the main towns.',
    periodoMigliore: 'May-September; in the rainy season the dirt roads to Maras get difficult',
    costi: 'most sites are included in the Tourist Ticket (Boleto Turístico); the Maras salt pans have a separate ticket, paid in cash at the entrance',
    erroriDaEvitare: [
      'Squeezing the Sacred Valley and Machu Picchu into a single rushed day: it is the classic mistake that takes the meaning out of both',
      'Sleeping in Cusco the night before the 5 or 6 a.m. train from Ollantaytambo',
    ],
    miaEsperienza:
      "It sits sixteen hundred feet (five hundred meters) lower than Cusco, and from here on you sleep better. The first day, Pisac, with the market and the site on the hill, then Ollantaytambo, where we slept to be ready for the morning train to Machu Picchu. The town is at its best in the evening, when the tour buses have left and it goes back to its residents. The next day, the rest of the valley: the Maras salt pans, pools carved into the mountain and used for generations by the same families, the circular terraces of Moray, and Chinchero, for the weaving. It's the stop to extend if you have an extra day, and it's the one almost everyone sacrifices to rush to Machu Picchu.",
    luoghi: [
      {
        "nome": "Pisac",
        "testo": "A town with a craft market and, on the hill, an Inca site with terraces and a ceremonial quarter. The site is less visited than Machu Picchu and you walk it almost alone.",
        "come": "From Cusco by shared van or car. The archaeological site is included in the Boleto Turístico; the market is in the village.",
        "quando": "Early morning for the site, then the market. The market runs on Tuesday, Thursday and Sunday; the biggest is on Sunday.",
        "tempo": "Half a day",
        "consiglio": "If you have only one day, go to the site in the morning and come down to the market for lunch."
      },
      {
        "nome": "Ollantaytambo",
        "testo": "A village with a grid of Inca-origin streets and some of the oldest continuously occupied dwellings in South America, below a terraced fortress. Most trains to Machu Picchu leave from here.",
        "come": "By car or shared van from Cusco, about 72 km by road. You visit on foot. The site is included in the Boleto Turístico.",
        "quando": "The site in the morning; the town is at its best in the evening, when the tour buses have left.",
        "tempo": "2-3 hours for the site, one night for the town",
        "consiglio": "Sleep here the night before the train to Machu Picchu: you sleep longer than if you leave from Cusco.",
        "url": "https://cosituccusco.pe/tarifario/"
      },
      {
        "nome": "Maras salt pans",
        "testo": "A great many white pools cut into the mountainside, fed by a salty spring and worked for generations by the same families.",
        "come": "By car with a driver or on a tour, often combined with Moray. You walk along the edge of the pans where access is allowed.",
        "quando": "Morning or late afternoon, when the salt is whitest.",
        "tempo": "1 hour",
        "costo": "Separate ticket, not included in the Boleto Turístico: paid in cash at the entrance",
        "consiglio": "The dirt roads to Maras become difficult in the rainy season."
      },
      {
        "nome": "Moray",
        "testo": "Concentric circular terraces, a sort of amphitheatre: the Incas used them as an agricultural laboratory, with temperature differences between levels.",
        "come": "By car or bike from Maras. Included in the Boleto Turístico.",
        "quando": "All day; morning light is best.",
        "tempo": "45 minutes",
        "consiglio": "A bike or quad ride between Maras and Moray is a good alternative to the car."
      },
      {
        "nome": "Chinchero",
        "testo": "A weavers' village above the valley, with Inca terraces and the colonial church of Nuestra Señora de la Natividad.",
        "come": "From Cusco, on the road to the valley. Site included in the Boleto Turístico.",
        "quando": "Morning.",
        "tempo": "1-2 hours",
        "consiglio": "A weaving workshop with a women's cooperative is worth more than the tourist shops."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Pisac (site and market)",
          "Lunch in Urubamba",
          "Afternoon: Ollantaytambo",
          "Back to Cusco or sleep there"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Chinchero, Moray, Maras, then night in Ollantaytambo",
          "Day 2: Pisac in the morning, or train to Machu Picchu from Ollantaytambo"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Pisac and night in Pisac or Urubamba",
          "Day 2: Chinchero, Moray, Maras, night in Ollantaytambo",
          "Day 3: Ollantaytambo and train to Aguas Calientes"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ollantaytambo",
        "perChi": "Those taking the train to Machu Picchu",
        "testo": "The most strategic choice: station on foot, Inca lanes and few crowds in the evening. Small, with less choice of places to eat."
      },
      {
        "nome": "Urubamba",
        "perChi": "Those who want comfort and a central position",
        "testo": "The town with the most comfortable lodging and often more space, halfway along the valley. Less character."
      },
      {
        "nome": "Pisac",
        "perChi": "Those who want quiet and an alternative feel",
        "testo": "Quieter, with a craft scene, but farther from the train. The Sunday market brings many people."
      }
    ],
    sapori: [
      {
        "nome": "Trucha",
        "testo": "Trout from the local rivers, grilled or fried. Eaten in the country restaurants along the valley."
      },
      {
        "nome": "Menú del día",
        "testo": "At lunchtime it costs very little and is what locals eat."
      },
      {
        "nome": "Chicha morada and chicha de jora",
        "testo": "The first is a non-alcoholic purple corn drink, the second a fermented corn beer. Found in towns and markets."
      },
      {
        "nome": "Maíz cancha and choclo con queso",
        "testo": "Toasted corn and large cobs with fresh cheese, street snack and table food across the valley."
      }
    ],
    attenzioni: [
      "Do not squeeze the Sacred Valley and Machu Picchu into a single day: both lose their meaning.",
      "Cheap tours that make long stops in tourist shops: ask in advance which sites are included.",
      "Dirt roads to Maras and Moray are difficult in the rainy season.",
      "Train to Machu Picchu: seats sell out weeks ahead in peak months."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'Thousands of Maras salt pools descending in steps along the side of the Sacred Valley',
    immagine: '/images/peru/saline-maras-riccardo.jpg',
  },
  {
    slug: 'machu-picchu',
    paeseSlug: 'peru',
    ordine: 3,
    nome: 'Machu Picchu',
    tipologia: ['cultura', 'trekking'],
    giorniConsigliati: '2 days (one night in Aguas Calientes) to enter at opening without rushing',
    visitataPersonalmente: true,
    introduzione:
      'The 15th-century Inca citadel suspended between the mountains, and the destination with the most regulated access system in all of South America: daily quotas, fixed time slots, mandatory circuits and extra tickets in very limited numbers for the peaks.',
    percheAndarci:
      "Because it is what it promises to be, and because the way you get there changes the whole trip: arriving by train or after four days of walking through the Sun Gate are two different experiences.",
    cosaVedere: [
      'The Intihuatana, the ritual stone linked to solar observation, one of the few to survive the colonial destruction',
      'The Temple of the Sun and the Royal Enclosure, where Inca masonry reaches its highest level',
      'The agricultural terraces, with the classic photographic views',
      'Huayna Picchu, the peak that serves as the backdrop of the photos: a steep climb with a separate ticket',
      'Intipunku, the Sun Gate, the arrival point of the Inca Trail',
    ],
    cosaFare: [
      "Choose the right circuit when you book: the routes are numbered and binding, you can't move freely around the site",
      'Add the climb to Huayna Picchu or Machu Picchu Mountain, both with a separate and very limited quota',
      'Sleep in Aguas Calientes to enter on the first shift, when the site is emptiest',
    ],
    confronti: [
      {
        titolo: 'How to get to Machu Picchu: all the options compared',
        introduzione:
          "There is no road that reaches Machu Picchu: you get there only by train, on foot, or with a combination of the two. The choice weighs on the budget far more than the entrance ticket, which costs relatively little. All options converge on Aguas Calientes (Machu Picchu Pueblo), from where you go up by shuttle bus in 25 minutes or on foot in 1h30-2h.",
        opzioni: [
          {
            nome: 'Train from Ollantaytambo or Cusco',
            sintesi:
              'The classic way: a PeruRail or IncaRail train to Aguas Calientes, then a shuttle bus to the entrance. Departures from Ollantaytambo are more numerous and cheaper than those from Cusco/Poroy.',
            costo: 'train $70-500 round trip depending on class (Expedition/Voyager are the cheap ones, Vistadome is panoramic, Hiram Bingham is luxury), plus $24 for the round-trip shuttle bus and entry to the site (152 soles for foreign adults on the circuits without a mountain, 2026)',
            durata: '1 day from Ollantaytambo, better 2 with a night in Aguas Calientes',
            pro: [
              'No physical preparation required, suitable for everyone',
              'Certain, predictable timing, useful if you have few days',
              'Lets you sleep in Aguas Calientes and enter on the first shift',
            ],
            contro: [
              'By far the most expensive option',
              'Train seats sell out weeks ahead in the high season',
              'No sense of gradual "arrival": you go from the train car to the citadel in a few hours',
            ],
            perChi: "People short on time, traveling with children or who don't want to take on a trek at altitude.",
          },
          {
            nome: 'Classic Inca Trail (4 days)',
            sintesi:
              'The historic trek along the original paved road, arriving at Machu Picchu through Intipunku, the Sun Gate, at dawn on the last day. You must go with an authorized agency: it cannot be done independently.',
            costo: 'roughly $600-900 per person, all inclusive (permit, guide, porters, camp, meals, return train)',
            durata: '4 days, 3 nights',
            pro: [
              'Arriving through the Sun Gate is how the site was meant to be seen',
              'Inca sites along the route that no other way touches',
              'Everything organized: porters, cook, tents',
            ],
            contro: [
              'Permits are limited and sell out as much as 5-6 months ahead, especially for May through August',
              'Closed all of February for maintenance',
              'Warmiwañusca Pass at 13,800 feet (4,215 meters): real acclimatization needed',
            ],
            perChi: 'People who want the full historic experience and can book many months ahead.',
          },
          {
            nome: 'Short Inca Trail (2 days)',
            sintesi:
              'A shortened version that starts at km 104 of the railway and covers the last stretch of the original path, arriving at the Sun Gate in the afternoon and visiting the site the next day.',
            costo: 'roughly $400-550 per person',
            durata: '2 days, 1 night (in Aguas Calientes, not in a tent)',
            pro: [
              'You still arrive through Intipunku, as on the classic route',
              'Much less demanding, you sleep in a hotel',
              'Permits are easier to find than for the classic trail',
            ],
            contro: [
              'Still requires a limited-quota permit',
              'You miss most of the route and the sites in between',
            ],
            perChi: 'People who want to arrive through the Sun Gate without four days of camping at altitude.',
          },
          {
            nome: 'Salkantay Trek (4-5 days)',
            sintesi:
              "The most popular alternative to the Inca Trail: a pass at 15,500 feet (4,630 meters) beneath the Salkantay glacier, then a descent into the cloud forest and arrival at Aguas Calientes via Hidroeléctrica.",
            costo: 'roughly $350-600 per person depending on the level of the camps',
            durata: '4-5 days',
            pro: [
              'No limited-quota permits: you can book even a few days ahead',
              'More varied scenery than the Inca Trail, from glacier to jungle',
              'Costs noticeably less',
            ],
            contro: [
              'The pass is higher than the Inca Trail one: you feel the altitude',
              "You don't arrive through the Sun Gate but from below, like those who come by train",
            ],
            perChi: "People who want a demanding, scenic trek without depending on permits.",
          },
          {
            nome: 'Via Hidroeléctrica (bus + walk)',
            sintesi:
              'The low-cost option: a minibus from Cusco to the Hidroeléctrica power station, then a 2-3 hour flat walk along the tracks to Aguas Calientes.',
            costo: 'roughly $30-60 round trip for transport',
            durata: '2 days (6-7 hours of road each way plus the walk)',
            pro: [
              'By far the cheapest way to reach the site',
              'The final walk along the railway is pleasant and flat',
            ],
            contro: [
              "The road is long, winding and in places exposed: it's not a comfortable ride",
              'In the rainy season landslides and closures are frequent',
              'A very long day, leaving before dawn',
            ],
            perChi: 'People on a tight budget who have an extra day to spend.',
          },
          {
            nome: 'Inca Jungle Trek (3-4 days)',
            sintesi:
              'An adventure package that combines a mountain bike descent, rafting, zipline and hiking, ending in Aguas Calientes.',
            costo: 'roughly $250-450 per person depending on the activities included',
            durata: '3-4 days',
            pro: [
              "The most fun way to get there if you're after adrenaline more than archaeology",
              'No permit required',
              'Lower elevations than the other treks: fewer altitude problems',
            ],
            contro: [
              'Little historical or archaeological content along the route',
              'The quality of bikes and equipment varies a lot from operator to operator',
            ],
            perChi: "People who are young at heart, want activities and aren't interested in the historic trail.",
          },
        ],
        raccomandazione:
          "With fixed dates and little time, take the train from Ollantaytambo with a night in Aguas Calientes: you enter on the first shift and avoid the rush. With 4-5 days and a wish to walk, the Salkantay gives you more scenery for less money and without the permit anxiety. The classic Inca Trail is worth it only if you can decide (and book) at least five or six months ahead.",
      },
    ],
    doveDormire:
      'Aguas Calientes (Machu Picchu Pueblo) is the only base that lets you enter on the first shift without depending on the first train of the day; otherwise Ollantaytambo or the Sacred Valley for a day visit.',
    doveMangiare:
      "Aguas Calientes lives on tourism and the prices show it: the restaurants on the main street are expensive and mediocre, so it's better to head down toward the market and eat at a fraction of the price. Still, bring water and something to eat for the visit, because you can't eat inside the site.",
    comeArrivare: 'See the comparison above: train, trek or via Hidroeléctrica, all arriving at Aguas Calientes.',
    comeSpostarsi:
      'From Aguas Calientes to the site entrance: Consettur shuttle bus, about 25 minutes and $24 round trip, or 1h30-2h on foot, uphill. Inside the site you move only along the assigned circuit.',
    periodoMigliore:
      'May-September for clear skies, but it is also when everything sells out first. April and October are a good compromise between weather and crowds',
    costi:
      "Entry for foreign adults (2026): 152 soles for the circuits without a mountain, 200 soles for the routes with Huayna Picchu, Machu Picchu Mountain or the Great Cavern. An 11-sol increase for foreign adults was announced from 1 May 2026: check the final figure when you buy. There are three circuits and ten routes, with a daily cap (4,500 entries a day, 5,600 in high season). The only official seller is the Ministry of Culture portal, tuboleto.cultura.pe: everything else is resellers with a markup.",
    erroriDaEvitare: [
      'Booking late: for Huayna Picchu you need 2-3 months ahead in any season, 3-4 in the high season, and the spots go fast',
      'Buying tickets from unofficial resellers at inflated prices instead of on tuboleto.cultura.pe',
      "Choosing the circuit without reading what it includes: the routes are binding and some don't pass through the points you take for granted",
      'Arriving in Cusco and going up to Machu Picchu the next day, without acclimatizing',
    ],
    miaEsperienza:
      "The moment I carry with me from Peru is Machu Picchu at dawn. Getting in among the first, when the citadel is still almost empty, pays you back for the alarm in the dark and the road to get there: the advice that counts above all is to sleep in Aguas Calientes and enter on the first shift, less for the light than for those forty minutes when the place is still quiet. I've gotten there in several ways: on a five-day trek, by minibus to Hidroeléctrica and then on foot, and by train, in economy class. I also did Huayna Picchu: it's beautiful, but you have to book in time and if you're afraid of heights you should think hard. It helps to know beforehand that you can't wander freely: the circuit you choose when you book decides what you'll see and what you won't.",
    luoghi: [
      {
        "nome": "The citadel and the visiting circuits",
        "testo": "The 15th-century Inca complex with agricultural terraces, the Temple of the Sun, the Royal Enclosure and the Intihuatana, the ritual stone linked to the sun.",
        "come": "You reach Aguas Calientes by train or on foot, then the shuttle bus or a climb on foot. Inside the site the route is fixed: you choose the circuit when you buy and cannot wander freely. Rules on guides and circuits are on the official portal.",
        "quando": "The first slot is the quietest and repays the early alarm. The dry season is also when tickets sell out first.",
        "tempo": "3-4 hours",
        "costo": "152 soles for foreign adults on the circuits without a mountain (2026). Check the current fare on the official portal, the only place to buy",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "Sleep in Aguas Calientes to enter at the first slot. Bring water and a snack to eat before entering."
      },
      {
        "nome": "Huayna Picchu",
        "testo": "The peak in the background of the photos, with a steep climb on stone steps and exposed stretches. From the top you see the citadel from above.",
        "come": "Separate ticket with timed entry and very limited places. The climb starts inside the site: allow plenty of time, it is steep.",
        "quando": "Morning time slots. Book well ahead, especially in peak months.",
        "tempo": "2-3 hours",
        "costo": "Separate from the citadel-only ticket: fare on the official portal",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "Rick did it: it is beautiful, but anyone with vertigo should think hard."
      },
      {
        "nome": "Machu Picchu Mountain",
        "testo": "The mountain behind the citadel, an alternative to Huayna Picchu, with a wider view and a longer but less exposed route.",
        "come": "Separate limited-entry ticket, same booking rules as Huayna Picchu. The climb starts from the site.",
        "quando": "Morning slots; book well ahead.",
        "tempo": "3-4 hours up and down",
        "costo": "Separate from the citadel-only ticket: fare on the official portal",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "If Huayna Picchu is sold out or you fear exposed stretches, this is the alternative."
      },
      {
        "nome": "Intipunku, the Sun Gate",
        "testo": "The pass from which those on the Inca Trail see the citadel for the first time at dawn. It can also be reached by a walk from the site.",
        "come": "An uphill walk from inside the site, along the original trail.",
        "quando": "Dawn for those arriving by the Inca Trail; for others, morning.",
        "tempo": "1.5-2 hours round trip",
        "consiglio": "It gives a different, almost empty view. Ask at the entrance whether your circuit includes the stretch."
      },
      {
        "nome": "Aguas Calientes (Machu Picchu Pueblo)",
        "testo": "The base for the whole visit, built around the tracks. It has the hot springs that give it its name and a market, but it lives off tourism and the prices show it.",
        "come": "Only by train or on foot (see the comparison above). The Consettur shuttle bus to the site leaves from here.",
        "quando": "You sleep one night to enter at the first slot.",
        "tempo": "One night",
        "consiglio": "Go down towards the market to eat at a fraction of the main street prices."
      },
      {
        "nome": "Getting there: train, Inca Trail, Salkantay, Hidroeléctrica",
        "testo": "How you go weighs on the budget more than the entry fee. Rick arrived by train in economy class, by minibus to Hidroeléctrica and then on foot, and on a five-day trek.",
        "come": "PeruRail or IncaRail train from Ollantaytambo or Cusco; Salkantay trek without capped permits; Inca Trail only with an authorised agency and permits that sell out well ahead.",
        "quando": "The Inca Trail is closed in February. The dry season is the most in demand.",
        "tempo": "From 1 day (train) to 4-5 days (trek)",
        "consiglio": "With fixed dates: train from Ollantaytambo and a night in Aguas Calientes. With 4-5 days, the Salkantay."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Early train from Ollantaytambo",
          "Shuttle bus and a 2-3 hour guided visit",
          "Train back in the afternoon (long day, tight times)"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: afternoon train to Aguas Calientes, dinner and early bed",
          "Day 2: first morning bus, entry in the first slot, Huayna Picchu if booked, train back"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Sacred Valley and night in Ollantaytambo",
          "Day 2: train, Machu Picchu at the first slot",
          "Day 3: second morning at the site or hot springs, then return"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aguas Calientes",
        "perChi": "Those who want the first slot",
        "testo": "The only base that does not depend on the first train. High prices for what it offers, noise from the tracks and bars."
      },
      {
        "nome": "Ollantaytambo",
        "perChi": "Those taking the train who want to sleep in a real village",
        "testo": "Quieter, with Inca lanes. The train leaves early, so the alarm is before dawn."
      },
      {
        "nome": "Sacred Valley (Urubamba)",
        "perChi": "Day visitors who do not want to sleep high",
        "testo": "Lower and more comfortable, but it makes for a very long day to the site."
      }
    ],
    sapori: [
      {
        "nome": "Menú del día at the Aguas Calientes market",
        "testo": "Soup and a one-plate meal at a fraction of the prices of the restaurants on the main street."
      },
      {
        "nome": "Trucha",
        "testo": "River trout, the most common dish on local menus."
      },
      {
        "nome": "Lomo saltado",
        "testo": "Stir-fried beef with onion, tomato and fries, served with rice. Found everywhere."
      },
      {
        "nome": "Chicha morada",
        "testo": "Sweet non-alcoholic purple corn drink that goes with almost every meal."
      }
    ],
    attenzioni: [
      "Buy tickets only on tuboleto.cultura.pe: resellers add a markup.",
      "The chosen circuit is binding: read what it includes before paying.",
      "The site has daily quotas and time slots: without a booking you do not enter.",
      "Do not go up to Machu Picchu the day after arriving in Cusco: you need acclimatisation.",
      "Long buses and roads towards Hidroeléctrica: winding, with landslides in the rainy season."
    ],
    esperienzeSlugs: ['huayna-picchu', 'cammino-inca'],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'A lone llama grazes on the Inca terraces of Machu Picchu wrapped in morning mist',
    immagine: '/images/peru/machu-picchu-lama-terrazze-riccardo.jpg',
  },
  {
    slug: 'choquequirao',
    paeseSlug: 'peru',
    ordine: 4,
    nome: 'Choquequirao',
    tipologia: ['trekking', 'cultura', 'avventura'],
    giorniConsigliati: '4-5 days for the classic round trip',
    visitataPersonalmente: false,
    immagine: '/images/peru/choquequirao.jpg',
    imageAlt: 'The Inca terraces of Choquequirao with the white stone llamas in the walls and a group of hikers on the terrace',
    introduzione:
      'The "sister of Machu Picchu": an Inca citadel of comparable size, excavated only about a third of the way, perched above the Apurímac canyon. Fewer than ten thousand people a year get there, compared with Machu Picchu\'s million and a half, and the reason is simple: there is no way in other than walking for two days.',
    percheAndarci:
      "It's the place where you can stand in front of Inca ruins of that scale almost alone, something that hasn't happened at Machu Picchu for decades. And it's a window that is closing: for years there has been talk of a cable car that would cut access from two days of walking to twenty minutes.",
    cosaVedere: [
      'The ceremonial plaza and the usnu sector, the central part of the citadel',
      'The llama terraces, decorated with llama figures in inset white stone',
      'The agricultural sector with terraces descending the mountainside',
      'The Apurímac canyon, one of the deepest on the continent, which you cross by descending and climbing back about 4,900 feet (1,500 meters) on each side',
    ],
    cosaFare: [
      'The classic 4-5 day trek from Cachora, round trip on the same route (see the dedicated experience page)',
      'The long Choquequirao-Machu Picchu traverse, 8-9 days, one of the hardest and most beautiful treks in Peru',
      'Staying two nights at the site instead of one, to have a full day among the ruins without the fatigue of the climb',
    ],
    doveDormire:
      'Camping all along the route (Chiquisca, Santa Rosa, Marampata), with some families renting out space and basic services at Marampata, the village closest to the site.',
    doveMangiare: "Meals prepared by your own trek organization; at Marampata and Chiquisca you can find something simple.",
    comeArrivare: 'From Cusco about 4 hours by car to Cachora (Apurímac region), the starting point of the trail.',
    comeSpostarsi: 'Only on foot. Mules can be hired for the luggage and, on some stretches, for those who are struggling.',
    periodoMigliore:
      'April to October. In the rainy season the trail becomes dangerous because of landslides, and the heat in the canyon is heavy at any time of year',
    costi:
      'Organized trek roughly $400-700 per person for 4-5 days with guide, mules and meals; independently you spend much less, plus the site entry, paid at the control point.',
    confronti: [
      {
        titolo: 'Go now or wait for the cable car?',
        introduzione:
          'The cable car project for Choquequirao has existed since 2011 and has been postponed several times since then for technical, legal, environmental and social reasons. In 2026 it is still at the tender stage, using the public-private partnership model, and with no confirmed construction date. It would change the place completely.',
        opzioni: [
          {
            nome: 'Go now, on foot',
            sintesi: 'The 4-5 day trek from Cachora, as it is done today: two days of walking to get there, with a descent and climb of the Apurímac canyon.',
            durata: '4-5 days',
            costo: '$400-700 with an agency, much less independently',
            pro: [
              'Almost deserted ruins on a monumental scale: about 10,000 people a year go today',
              'The route itself is considered harder than the Inca Trail and the Salkantay, and is part of the experience',
              'No tourist infrastructure: the place is still as it was',
            ],
            contro: [
              'Physically demanding: about 4,900 feet (1,500 meters) of descent and as much of climb, twice, with strong heat in the valley floor',
              'It takes time: 4-5 days minimum, hard to fit into a short itinerary',
            ],
            perChi: 'People who enjoy walking and want to see the place before it changes.',
          },
          {
            nome: 'Wait for the cable car',
            sintesi:
              'The project calls for over 6 miles (10 km) of aerial route between Kiuñalla (Apurímac) and Yanama (Cusco), with an estimated investment of around $261 million.',
            durata: '20 minutes instead of two days of walking',
            pro: [
              'It would make the site accessible to anyone, regardless of fitness',
              'Timing compatible with a day visit from Cusco',
            ],
            contro: [
              'No confirmed construction date: the award was expected in the last quarter of 2026 and the project has been slipping for over a decade',
              'Capacity would go from about 10,000 visitors a year to over a million: it would be a different place',
            ],
            perChi: "People who can't or don't want to take on four days of trekking at altitude.",
          },
        ],
        raccomandazione:
          "If you are able to walk, go now. Today the value of Choquequirao lies in the ruins and also in the fact that you get there with effort and are almost alone: exactly what the cable car would eliminate.",
      },
    ],
    erroriDaEvitare: [
      'Underestimating it because "it\'s less famous than Machu Picchu": Cusco guides consider it harder than both the Inca Trail and the Salkantay',
      'Carrying too much weight: the elevation change is felt enormously, and the mules for the luggage are worth every sol spent',
      'Going in the rainy season, when the trail along the canyon wall becomes dangerous',
      'Planning only one night at the site: you arrive tired and leave right away, losing the feel of the place',
    ],
    miaEsperienza:
      '',
    luoghi: [
      {
        "nome": "The citadel of Choquequirao",
        "testo": "An Inca citadel called Machu Picchu's \"sister city\" for its layout and architecture, only partly excavated (30-40%). Few people get here, because there is no way but walking.",
        "come": "Only on foot from Cachora, after two days of walking. You camp near the site; a guide is advised.",
        "quando": "Dry season. In the rainy season the trail is dangerous.",
        "tempo": "A morning or a full day; two nights is best",
        "costo": "Site entry paid at the control point before the citadel; fare on the Ministry of Culture site",
        "consiglio": "Stay two nights to have a full day among the ruins without the fatigue of the climb."
      },
      {
        "nome": "The llama terraces",
        "testo": "Terraces decorated with figures of llamas and other camelids in white stone set into the wall, the site's most recognisable detail.",
        "come": "In the agricultural sector of the site, reached by a short walk from the central area.",
        "quando": "Early morning, with low light on the walls.",
        "tempo": "30-60 minutes",
        "consiglio": "Bring a zoom lens or stay close to the walls: the figures are small."
      },
      {
        "nome": "The Apurímac canyon",
        "testo": "A very deep canyon: there are about 1,600 metres of height difference between the site and the river, and the trail goes all the way down and back up, with strong heat at the bottom.",
        "come": "The path starts at Cachora, descends to the river and climbs towards Marampata. Stages are done with camps along the way.",
        "quando": "Start at dawn to avoid the heat in the valley floor.",
        "tempo": "2 days of walking each way",
        "consiglio": "Mules for the luggage are worth every sol: the elevation change is felt a lot."
      },
      {
        "nome": "Marampata and the camps along the trail",
        "testo": "The village just before the site, with some families renting tent space and basic services. Lower down, Chiquisca and Santa Rosa are the classic stops.",
        "come": "Along the trail, shortly before the site.",
        "quando": "As an evening stop, before the last climb.",
        "tempo": "One night",
        "consiglio": "Bring cash in coins and small notes: there are no ATMs."
      }
    ],
    programmi: [
      {
        "titolo": "4-5 days",
        "tappe": [
          "Day 1: Cusco-Cachora by car, then descent towards the river and first camp",
          "Day 2: climb towards Marampata",
          "Day 3: visit Choquequirao",
          "Day 4: back towards Chiquisca or Santa Rosa",
          "Day 5: climb to Cachora and return to Cusco"
        ]
      }
    ],
    zone: [
      {
        "nome": "Cachora",
        "perChi": "Those starting and preparing the trek",
        "testo": "The starting village, with simple lodging and mules to hire. A night before leaving helps with the altitude."
      },
      {
        "nome": "Camps on the trail (Chiquisca, Santa Rosa, Marampata)",
        "perChi": "Walkers",
        "testo": "Camping with basic services. Little comfort, a lot of silence."
      }
    ],
    sapori: [
      {
        "nome": "Trek meals",
        "testo": "Prepared by the agency: soups, rice, coca tea. On your own you carry everything, apart from something simple at Marampata and Chiquisca."
      },
      {
        "nome": "Canyon fruit",
        "testo": "In the hot valley bottom families sell oranges and bananas to passers-by."
      }
    ],
    attenzioni: [
      "The trek is often considered harder than the Inca Trail and the Salkantay: don't underestimate it.",
      "Not in the rainy season: the path on the canyon side becomes dangerous.",
      "No phone signal: leave your itinerary with someone.",
      "One night at the site is too little."
    ],
    esperienzeSlugs: ['trek-choquequirao'],
    tripSlugs: [],
  },
  {
    slug: 'amazzonia-peruviana',
    paeseSlug: 'peru',
    ordine: 5,
    nome: 'Peruvian Amazon',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '3-4 days from Puerto Maldonado, 5-7 from Iquitos, 6-8 for Manu',
    visitataPersonalmente: true,
    introduzione:
      'More than half of Peru is Amazon rainforest, and the real question is "which door to enter by": Puerto Maldonado, Iquitos and Manu offer three very different experiences in cost, difficulty and type of wildlife.',
    percheAndarci:
      'Because it is the counterweight to the Andes, and because Peru has some of the most biodiverse protected areas on the planet: the Tambopata Reserve, Manu National Park and the Pacaya-Samiria reserve.',
    cosaVedere: [
      'The clay licks (collpas), the clay walls where hundreds of parrots and macaws gather at dawn to supplement their minerals',
      'The giant otters of the oxbow lakes, such as Lake Sandoval',
      'The pink river dolphins, easier to spot around Iquitos',
      'Caimans, monkeys, sloths and hundreds of bird species',
      'The canopy walkways, the bridges suspended among the treetops',
    ],
    cosaFare: [
      'Night walks in the forest, when wildlife is most active',
      'Dawn boat trips to spot wildlife along the rivers',
      'Piranha fishing and visits to local communities',
      'Birdwatching at the collpas, to be done very early in the morning',
    ],
    confronti: [
      {
        titolo: 'The three doors to the Peruvian Amazon compared',
        introduzione:
          "Puerto Maldonado, Iquitos and Manu are three different things: the time needed, the cost, the difficulty of access and even the animals you see all change. Choosing one without knowing what the others offer is the most common way to end up disappointed by an Amazon lodge. We went in through Puerto Maldonado, toward the Tambopata reserve; Iquitos and Manu stay here as alternatives for those with more days.",
        opzioni: [
          {
            nome: 'Puerto Maldonado (Tambopata)',
            sintesi:
              'The door we went in through, and the simplest: direct flights from Cusco and Lima, and lodges reachable with short boat transfers along the Madre de Dios and Tambopata rivers.',
            costo: 'roughly $300-600 for 3 nights in a lodge, all inclusive; flight from Cusco a little over an hour',
            durata: '3-4 days, the ideal format',
            pro: [
              'Very quick access: you can slot it into a Cusco-Machu Picchu itinerary without upending it',
              'Great for giant otters, macaws at the collpas and canopy wildlife',
              'Wide choice of lodges for every price range',
            ],
            contro: [
              'The area closest to the city is the most heavily traveled: for the best wildlife you have to push farther upriver, and it takes more hours by boat',
              'Less of an "expedition" and more of an organized circuit',
            ],
            perChi: 'People with few days who still want a real Amazon without logistical complications.',
          },
          {
            nome: 'Iquitos (Pacaya-Samiria and the Amazon River)',
            sintesi:
              "The largest city in the world that can't be reached by road: you get there only by plane or by going up the river. It's the base for long river expeditions and Amazon River cruises.",
            costo: 'from $400-800 for a lodge of a few nights up to several thousand for river cruises',
            durata: '5-7 days to make sense',
            pro: [
              'The most complete river experience: you really navigate instead of basing yourself in a lodge',
              'Pink dolphins are spotted more easily than elsewhere',
              "The city itself is a piece of the rubber boom's history, with a character Puerto Maldonado doesn't have",
            ],
            contro: [
              "You reach it only via Lima: it doesn't fit well into an Andean loop",
              'It needs more days to justify the trip',
              'Some attractions near the city are very touristy, with animals kept in questionable conditions',
            ],
            perChi: 'People who want the river as the protagonist and have a week to devote to it.',
          },
          {
            nome: 'Manu National Park',
            sintesi:
              'One of the most biodiverse areas on the planet, reached from Cusco by land and then by boat, passing through the descent from the Andes to the lowland forest.',
            costo: 'roughly $800-1,500 for a 6-8 day expedition',
            durata: '6-8 days, no fewer',
            pro: [
              "The highest biodiversity of the three: it's where you see the most",
              'The descent from the Andes to the forest crosses completely different vegetation belts, cock-of-the-rock included',
              'Little traveled: you meet very few other groups',
            ],
            contro: [
              'The most expensive and the longest: two days of transfers just to get in and out',
              'Difficulty level from moderate to demanding',
              'The reserved zone has limited access and requires authorized operators',
            ],
            perChi: 'People who put wildlife first and have the time and budget for a real expedition.',
          },
        ],
        raccomandazione:
          "On a classic two-week trip to Peru, Puerto Maldonado is the sensible choice, and it's the one we did: it costs little in terms of time and still gives you a real Amazon, as long as you pick a lodge far enough from the city. Iquitos only makes sense if you devote a week to the river. Manu is for those returning to Peru a second time, or coming specifically for the wildlife.",
      },
    ],
    doveDormire:
      'Lodges in the forest, almost always sold as a package with transfers, meals and excursions included. Distance from the city matters more than the luxury of the lodge: the farther up the river you go, the more wildlife you see.',
    doveMangiare: 'Meals included in the lodge packages.',
    comeArrivare:
      "Puerto Maldonado: flight from Cusco (a little over an hour) or from Lima. Iquitos: flight from Lima, or going up the river: there are no roads. Manu: from Cusco by land and then by boat, with two days of transfers.",
    comeSpostarsi: 'Only by boat along the rivers and on foot along the trails, always accompanied by a lodge guide.',
    periodoMigliore:
      "From May to October (low water) the trails are more passable and wildlife concentrates along the waterways; from December to May (high water) you navigate deeper into the flooded forest. There is no rain-free season.",
    costi: 'The main cost is the lodge package; the domestic flight from Cusco to Puerto Maldonado costs little if booked in time.',
    erroriDaEvitare: [
      'Choosing the lodge closest to the city because it costs less: it is the number one reason people come back saying "we didn\'t see anything"',
      'Going to the Amazon for two nights: the first and last days are almost entirely lost to transfers',
      'Forgetting the yellow fever vaccination certificate, required by some lodges',
      'Underestimating repellent, a headlamp and waterproof bags for electronics',
    ],
    miaEsperienza:
      "We entered the Amazon from Puerto Maldonado, with the flight from Lima and then the boat along the river to a lodge in the Tambopata reserve. It's not the documentary you expect: in the dense forest you hear much more than you see. We did the canopy walkway among the treetops and the boat trip to Lake Sandoval, the one with the giant otters. The moment that turned everything around was dawn at the collpa, when hundreds of parrots and macaws arrived together on the clay wall and for twenty minutes we couldn't look at anything else. The other thing that matters more than it seems is the distance from the city: from the nearby, comfortable lodges you see very little, while a few more hours by boat change the experience. I never got fully used to the humid heat, but if you manage it, the Amazon deserves time: it's incredible.",
    luoghi: [
      {
        "nome": "Puerto Maldonado and the Tambopata reserve",
        "testo": "The most convenient gateway to the Peruvian Amazon, with a flight from Cusco or Lima and then a boat to lodges in the reserve. Here Rick did the canopy walkway and the boat trip.",
        "come": "Fly from Cusco or Lima, then a boat along the river. Lodges sell packages with transfers and excursions.",
        "quando": "The dry season has more walkable trails and wildlife concentrated along the rivers.",
        "tempo": "3-4 days",
        "consiglio": "Choose a lodge far from the town: from the near ones you see very little."
      },
      {
        "nome": "The parrot clay lick (collpa)",
        "testo": "A clay wall where in the morning many parrots and macaws gather to take in minerals. A short but intense sighting.",
        "come": "Reached with the lodge guide, leaving before dawn. Some collpas are near Tambopata, others in Manu.",
        "quando": "At dawn, best on days without rain.",
        "tempo": "2-3 hours",
        "consiglio": "Rick saw it and it was the moment that turned the trip around: for twenty minutes you look at nothing else."
      },
      {
        "nome": "Sandoval Lake",
        "testo": "A forest lake where you see birds and caimans and, with some luck, giant otters. You reach it with a walk in the forest and then by canoe.",
        "come": "Excursion organised by the lodges, on foot plus canoe.",
        "quando": "Morning or late afternoon.",
        "tempo": "Half a day",
        "consiglio": "Bring repellent and a headlamp."
      },
      {
        "nome": "Iquitos and Pacaya-Samiria",
        "testo": "Iquitos is the largest city in the world, outside islands, that cannot be reached by road: you arrive only by air or by river. From the city, expeditions leave for the Pacaya-Samiria reserve, where Rick went with Ruth Amazon Expedition: nights in farmers' houses and in tents in the forest.",
        "come": "Flight from Lima or boat along the river. From Iquitos tours leave from agencies and lodgings.",
        "quando": "All year; the dry season makes the trails easier.",
        "tempo": "3-4 days for an expedition",
        "costo": "3 days 1,000 soles, 4 days 1,350 soles per person with Ruth Amazon Expedition (November 2026)",
        "url": "https://ruthamazonexpeditions.com/",
        "consiglio": "Sleeping in a tent in the forest is not for everyone: consider it before leaving. Belén market can be visited on your own but with care."
      },
      {
        "nome": "Manu",
        "testo": "The Manu National Park, a protected area very rich in wildlife, with long and difficult access.",
        "come": "From Cusco by road and then by boat, with a long transfer.",
        "quando": "Dry season.",
        "tempo": "6-8 days",
        "consiglio": "Choose it only with at least a week and a high budget."
      }
    ],
    programmi: [
      {
        "titolo": "3 days (Puerto Maldonado)",
        "tappe": [
          "Day 1: flight, boat and arrival at the lodge",
          "Day 2: collpa at dawn, canopy walkway, night outing",
          "Day 3: Sandoval Lake and return"
        ]
      },
      {
        "titolo": "4 days (Iquitos and Pacaya-Samiria)",
        "tappe": [
          "Day 1: Iquitos and transfer by boat",
          "Days 2-3: boat trips, walks and nights in the forest",
          "Day 4: return to Iquitos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lodges far from the city",
        "perChi": "Those who want to see wildlife",
        "testo": "The farther up the river, the more you see. They cost more and need more hours by boat."
      },
      {
        "nome": "Puerto Maldonado and Iquitos",
        "perChi": "Those who need logistics",
        "testo": "Transit cities with simple lodging, heat and mototaxi noise."
      }
    ],
    sapori: [
      {
        "nome": "Juane",
        "testo": "Rice with chicken wrapped in a bijao leaf, a typical jungle dish."
      },
      {
        "nome": "River fish",
        "testo": "Paiche, boquichico and other species, grilled or in soup."
      },
      {
        "nome": "Tacacho con cecina",
        "testo": "Green plantain balls with smoked meat, a typical jungle breakfast."
      }
    ],
    attenzioni: [
      "Yellow fever vaccination: recommended for the Amazon, ask your doctor before you go.",
      "Repellent, headlamp and waterproof bags for electronics.",
      "Two nights are too few: the first and last days go in transfers.",
      "Areas bordering Ecuador, Colombia and Brazil: higher risk from drug-related crime, follow official travel advice.",
      "Ayahuasca and San Pedro ceremonies in Iquitos: they are unregulated, and official advice reports serious illness, deaths and assaults."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario'],
    imageAlt: 'A river in the Peruvian Amazon running straight through the forest, seen from the drone under a blue sky',
    immagine: '/images/peru/amazzonia-fiume-foresta-riccardo.jpg',
  },
  {
    slug: 'lago-titicaca',
    paeseSlug: 'peru',
    ordine: 6,
    nome: 'Lake Titicaca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 days on the Peruvian side, 4-5 if you continue into Bolivia',
    visitataPersonalmente: true,
    introduzione:
      "The highest navigable lake in the world, at 12,500 feet (3,812 meters), shared between Peru and Bolivia. On the Peruvian side you set out from Puno for the Uros floating islands, Taquile and Amantaní; on the Bolivian side there are Copacabana and the Isla del Sol, and the border is crossed without difficulty.",
    percheAndarci:
      'For the communities that live there, more than for the scenery: the Uros still build their islands from totora reeds, on Taquile the weaving is UNESCO heritage and on Amantaní you sleep in the families\' homes.',
    cosaVedere: [
      'The Uros floating islands, a few minutes by boat from Puno',
      'Taquile, with its textiles and a view of the Bolivian part of the lake',
      'Amantaní, the island where you stay overnight with families',
      'The pre-Inca funerary towers of Sillustani, just outside Puno',
      'Copacabana and the Isla del Sol, in Bolivia, where according to tradition the first Inca was born',
    ],
    cosaFare: [
      'Two-day tour with a night in a homestay on Amantaní: it is what makes the visit worthwhile',
      'Continue overland to Bolivia (see the comparison below)',
      'Kayaking at dawn on the lake, when the water is still and the light is best',
    ],
    confronti: [
      {
        titolo: 'Extending Titicaca into Bolivia: how and whether it\'s worth it',
        introduzione:
          'Puno and Copacabana are a few hours apart and the Kasani/Yunguyo border crossing is one of the simplest on the continent. The question is whether to stop at the Peruvian side or also cross to the Bolivian one, which has a different character.',
        opzioni: [
          {
            nome: 'Peruvian side only (Puno)',
            sintesi: 'Base in Puno, with the Uros, Taquile and possibly the night on Amantaní.',
            durata: '2-3 days',
            pro: [
              'No borders to cross, everything fits easily with Cusco or Arequipa',
              'The homestay on Amantaní is the most authentic experience of the lake',
            ],
            contro: [
              'The Uros are the most touristy and organized spot on the whole lake',
              'Puno as a city has little to offer',
            ],
            perChi: 'People with a Peru-only itinerary and few days.',
          },
          {
            nome: 'Extension to Copacabana and Isla del Sol (Bolivia)',
            sintesi:
              'Bus from Puno to Copacabana crossing the Kasani border (about 3-4 hours in total, with the exit and entry formalities done on foot), then a boat to the Isla del Sol.',
            costo: 'bus $10-20; boat to the Isla del Sol a few dollars; local entry fees on the island',
            durata: '2-3 more days',
            pro: [
              'The Isla del Sol is more beautiful and less built up than the Peruvian islands, with scenic trails among Inca ruins',
              "Copacabana has a pilgrimage-town atmosphere that Puno doesn't",
              'It naturally opens the way to La Paz and the rest of Bolivia',
            ],
            contro: [
              'You have to factor in the border logistics, with exit and entry stamps done on foot',
              'On the Isla del Sol, tensions between communities have at times limited access to the north part: it is best to ask on the spot',
            ],
            perChi: 'People on a wider South American loop or who want to enter Bolivia overland.',
          },
        ],
        raccomandazione:
          "If Bolivia is already in your plans, Titicaca is the best way to enter it: you go from Puno to Copacabana in half a day and reach La Paz the next day. If the trip stays Peruvian, two days in Puno with the night on Amantaní are enough.",
      },
    ],
    doveDormire: 'Puno for logistics; Amantaní for the homestay, which is the main reason to come all this way.',
    doveMangiare:
      "On the lake the meal that counts is dinner on Amantaní, prepared by the host family and eaten together with them: simple and genuine. On the boat tour from Puno, lunch is on Taquile, with a view of the Bolivian side of the lake.",
    comeArrivare:
      "From Cusco, a tourist bus of about 7-8 hours with stops at sites along the way (the best option), the Andean Explorer panoramic train, or a flight to Juliaca. From Arequipa about 6 hours by bus.",
    comeSpostarsi: 'Shared boats and organized tours from the port of Puno; on Taquile and Amantaní you get around only on foot, uphill.',
    periodoMigliore: 'May-September for the sun; nights are freezing all year at almost 12,800 feet (3,900 meters)',
    costi: 'two-day tour with homestay roughly $30-60 per person, one of the best value-for-money deals in Peru',
    erroriDaEvitare: [
      'Arriving in Puno straight from low altitude: at 12,500 feet (3,812 meters) altitude sickness is more likely than in Cusco',
      "Doing only the half-day Uros trip and leaving: it's the most touristy and least representative part of the lake",
      "Underestimating the cold at night in the houses on Amantaní, where there's no heating",
    ],
    miaEsperienza:
      "The Uros, it has to be said, are a tourist staging: half an hour of interesting explanation about how the totora island is built, and little more. Then Taquile, with lunch and the view of the Bolivian side of the lake. Titicaca turned into something else on Amantaní, where we slept in a family's home, had dinner with them and climbed to the Pachatata temple for sunset. It's not comfortable: shared bathroom, hot water not guaranteed and, at 12,500 feet (3,800 meters) without heating, the night is freezing. But it's the only point of the tour where you step out of the tourist circuit, and it's the moment of the lake that stuck with me most.",
    luoghi: [
      {
        "nome": "Puno",
        "testo": "The base for the lake, which lies at 3,812 metres. It has a lively centre and the port the boats leave from. It is higher than Cusco: altitude sickness is more likely.",
        "come": "From Cusco by tourist bus with stops (a full day), a tourist train or a flight to Juliaca. Buses also from Arequipa.",
        "quando": "Dry season, for the sun.",
        "tempo": "1-2 days",
        "consiglio": "Arrive already acclimatised and do not plan anything heavy on the first day."
      },
      {
        "nome": "Uros islands",
        "testo": "Floating totora reed islands, built by the communities that still live on them. The visit is touristy: a short explanation about how an island is built.",
        "come": "Boat from Puno, a short ride.",
        "quando": "Morning.",
        "tempo": "1-2 hours",
        "consiglio": "Rick calls it a tourist show: do not give it more time than needed."
      },
      {
        "nome": "Taquile",
        "testo": "An island with a village and traditional weaving, recognised by UNESCO. Lunch with a view of the lake.",
        "come": "Boat from Puno, a few hours' sailing, then uphill on foot.",
        "quando": "Morning and lunch.",
        "tempo": "Half a day",
        "consiglio": "You walk at altitude and uphill, at a slow pace."
      },
      {
        "nome": "Amantaní",
        "testo": "The island where you sleep in families' homes. You dine with them and climb to the Pachatata temple for sunset. No roads, no heating.",
        "come": "Boat from Puno, usually in a two-day tour.",
        "quando": "Sunset and dawn.",
        "tempo": "One night",
        "costo": "Two-day tour with homestay: book with Puno agencies, compare what is included",
        "consiglio": "This is the moment of the lake that stayed with Rick most. Bring a warm sleeping bag: shared bathroom and hot water not guaranteed."
      },
      {
        "nome": "Sillustani",
        "testo": "Pre-Inca funerary towers (chullpas) on the shore of Lake Umayo, near Puno.",
        "come": "Half-day tour or taxi from Puno.",
        "quando": "Afternoon, with low light.",
        "tempo": "2-3 hours",
        "consiglio": "If time is short, choose Amantaní over the Uros and add this separately."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: boat from Puno, Uros, Amantaní, dinner with the family",
          "Day 2: dawn, Taquile, return to Puno"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Puno and Sillustani",
          "Days 2-3: as in the 2-day plan"
        ]
      }
    ],
    zone: [
      {
        "nome": "Puno centre",
        "perChi": "Those who need logistics",
        "testo": "Lodging, agencies and restaurants, but at this altitude nights are cold."
      },
      {
        "nome": "Amantaní (homestay)",
        "perChi": "Those who want the real experience",
        "testo": "The family hosts with dinner. Shared bathroom, no heating."
      }
    ],
    sapori: [
      {
        "nome": "Trucha and pejerrey",
        "testo": "Trout and lake fish, fried or grilled."
      },
      {
        "nome": "Quinoa",
        "testo": "In soups and local dishes, grown at altitude."
      },
      {
        "nome": "Dinner at Amantaní",
        "testo": "Simple and genuine, prepared by the host family."
      }
    ],
    attenzioni: [
      "Altitude: arriving straight from low altitude greatly raises the risk of soroche.",
      "Night cold in Amantaní homes, with no heating.",
      "The half-day Uros trip alone is the most touristy part of the lake."
    ],
    esperienzeSlugs: ['homestay-amantani'],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'A smiling Uros woman in a straw hat shows an embroidered tapestry on Lake Titicaca',
    immagine: '/images/peru/titicaca-uros-arazzo-riccardo.jpg',
  },
  {
    slug: 'lima',
    paeseSlug: 'peru',
    ordine: 7,
    nome: 'Lima',
    tipologia: ['città', 'cibo'],
    giorniConsigliati: '2 days, often at the start and the end of the trip',
    visitataPersonalmente: true,
    introduzione:
      "The capital on the ocean, the arrival point of every international flight and, over the last twenty years, one of the world's gastronomic capitals: several of the city's restaurants regularly appear in the rankings of the world's best.",
    percheAndarci: "Because you pass through anyway, and because it's where Peruvian cuisine can be seen at its best, from neighborhood ceviche to haute cuisine.",
    cosaVedere: [
      'The colonial historic center, a UNESCO site, with the Plaza Mayor and the convent of San Francisco',
      'Miraflores and the Malecón, the clifftop promenade overlooking the ocean',
      'Barranco, the bohemian neighborhood with murals and the Bridge of Sighs (Puente de los Suspiros)',
      "The Larco Museum, with the country's most important collection of pre-Columbian art",
      'Huaca Pucllana, the pre-Inca pyramid in the middle of Miraflores',
    ],
    cosaFare: [
      "Eat ceviche at a cevichería at lunch, as is the custom here (in the evening it's considered out of hours)",
      'Food tour through markets and neighborhood kitchens',
      'Paragliding off the Miraflores cliff',
      'Book one of the world-ranked restaurants well in advance, if that interests you',
    ],
    doveDormire: 'Miraflores for convenience and safety, Barranco for atmosphere; both away from the historic center but well connected.',
    doveMangiare:
      "Lima is the gastronomic reason for the trip: ceviche at lunch in a neighborhood cevichería (in the evening it's considered out of hours and the fish is no longer the morning's), then tiradito, causa, lomo saltado and anticuchos from the carts in the evening. The haute cuisine the city is famous for has to be booked weeks ahead.",
    comeArrivare: "Jorge Chávez Airport, the country's only intercontinental hub. From the airport to the center, authorized taxis or apps: never the unlicensed drivers at the exit.",
    comeSpostarsi: 'Taxi through an app, Metropolitano for the main axes; traffic is heavy, so always allow extra time.',
    periodoMigliore: 'December-April for the sun; from June to November the garúa, a constant damp haze, covers the city',
    costi: 'average; haute cuisine has international prices, the rest does not',
    erroriDaEvitare: [
      'Taking unauthorized taxis at the airport exit: it is one of the spots where thefts from tourists are most frequent',
      "Skipping it entirely: many only pass through in transit, but in two days here you see a Peru that isn't in the Andes",
    ],
    miaEsperienza:
      "Many cross it only in transit and miss the best reason to stay, the food. Peruvian cooking is one of the things I remember most from these trips, and Lima is where I found it at its best. We ate our first ceviche at lunch, as is the custom here, in a neighborhood cevichería with fish that had arrived that morning. Then the historic center between Plaza Mayor and San Francisco, the Malecón of Miraflores out to Huaca Pucllana and a sunset aperitivo in Barranco, on the Bridge of Sighs. The city is dangerous, though: you have to get around with care, especially outside Miraflores and Barranco.",
    luoghi: [
      {
        "nome": "Plaza Mayor and San Francisco convent",
        "testo": "The colonial historic centre, UNESCO heritage. The Plaza Mayor has the government palace and the cathedral; a few steps away the San Francisco convent with the library and catacombs.",
        "come": "By taxi or Metropolitano from Miraflores; then on foot.",
        "quando": "By day, on weekdays. At night it is better to avoid it.",
        "tempo": "Half a day",
        "consiglio": "The centre should be walked with care, especially off the main streets."
      },
      {
        "nome": "Miraflores and the Malecón",
        "testo": "The clifftop promenade above the ocean, with parks, Pacific views and paragliding. The first evening walk in Lima is here.",
        "come": "On foot from any hotel in Miraflores.",
        "quando": "Sunset and evening, with the lights.",
        "tempo": "1-2 hours",
        "consiglio": "It is among the city's calmer areas, but official advice reports robberies here too: keep your phone in your pocket."
      },
      {
        "nome": "Huaca Pucllana",
        "testo": "An adobe and clay pyramid in the middle of Miraflores, a centre of the Lima culture, which flourished between AD 200 and 700.",
        "come": "On foot from Miraflores; guided visit.",
        "quando": "By day; opening hours on the museum's official site.",
        "tempo": "1 hour",
        "consiglio": "Visit with a guide: it gives you the context of a Lima much older than the Incas."
      },
      {
        "nome": "Barranco",
        "testo": "The bohemian quarter of murals, galleries and bars. The Bridge of Sighs is the classic place for a sunset aperitif.",
        "come": "By taxi or app from Miraflores.",
        "quando": "Late afternoon and evening.",
        "tempo": "2-3 hours",
        "consiglio": "Rick ended the day here: an aperitif on the bridge at sunset."
      },
      {
        "nome": "Larco Museum",
        "testo": "A large collection of pre-Columbian art, in a viceregal house with gardens.",
        "come": "By taxi or app, in Pueblo Libre.",
        "quando": "Morning, to avoid groups. Check hours and days on the site.",
        "tempo": "2 hours",
        "url": "https://www.museolarco.org/",
        "consiglio": "Add it if you have a free half day, especially for the textiles and the erotic gallery."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: historic centre",
          "Lunch: ceviche in a neighbourhood cevichería",
          "Afternoon: Miraflores and Malecón",
          "Sunset: Barranco"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: the 1-day plan",
          "Day 2: Larco Museum and Huaca Pucllana, dinner at a restaurant booked in advance"
        ]
      }
    ],
    zone: [
      {
        "nome": "Miraflores",
        "perChi": "Those who want convenience and safety",
        "testo": "The most convenient and safe area, near the Malecón. More expensive."
      },
      {
        "nome": "Barranco",
        "perChi": "Those who want atmosphere and nightlife",
        "testo": "Bohemian, with bars and murals. Noisier at night."
      },
      {
        "nome": "Historic centre",
        "perChi": "Budget travellers",
        "testo": "Cheap lodging, but the area empties at night and is less safe."
      }
    ],
    sapori: [
      {
        "nome": "Ceviche",
        "testo": "Raw fish marinated in lime with onion and chilli. Eaten at lunch in a neighbourhood cevichería, not at dinner."
      },
      {
        "nome": "Tiradito and causa",
        "testo": "The first is sliced raw fish, the second a cold yellow-potato terrine."
      },
      {
        "nome": "Lomo saltado",
        "testo": "Stir-fried beef with onion and tomato, served with rice and fries."
      },
      {
        "nome": "Anticuchos",
        "testo": "Marinated beef heart skewers, from street carts in the evening."
      },
      {
        "nome": "Pisco sour",
        "testo": "The national cocktail: pisco, lime, egg white and syrup."
      }
    ],
    attenzioni: [
      "Unofficial taxis at the airport exit: one of the places where thefts are most frequent. Only booked taxis or apps.",
      "Robberies even in tourist areas such as Miraflores and Barranco: no valuables on show, phone away from the roadside, ATMs only inside banks or buildings.",
      "Traffic is heavy: always add time.",
      "Book high-end restaurants ahead."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'Aerial view of the Miraflores district in Lima, with buildings and a tree-lined park, Peru',
    immagine: '/images/peru/lima.jpg',
  },
  {
    slug: 'arequipa-colca',
    paeseSlug: 'peru',
    ordine: 8,
    nome: 'Arequipa and the Colca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '3-4 days, two of them for the canyon',
    visitataPersonalmente: true,
    introduzione:
      'The "white city," built from sillar, the light volcanic stone, at the foot of the Misti volcano. A few hours away is the Colca Canyon, one of the deepest in the world, where condors take flight early in the morning.',
    percheAndarci:
      "Arequipa sits at 7,500 feet (2,300 meters) and is the right stop to acclimatize gradually before going up to Cusco or Puno, instead of reaching altitude all at once.",
    cosaVedere: [
      'The Santa Catalina Monastery, a city within a city with colorful alleys and courtyards',
      'The Plaza de Armas and the cathedral in white sillar',
      'The Juanita mummy at the Museo Santuarios Andinos',
      'The Cruz del Cóndor, in the Colca Canyon, the viewing point for Andean condors',
      'The colonial villages and pre-Inca terraces along the canyon',
    ],
    cosaFare: [
      'Get up early for the Cruz del Cóndor: the condors use the morning thermals',
      'Two-day trek in the canyon to the Sangalle oasis, with a climb out at dawn',
      'La Calera hot springs in Chivay',
      'Try the rocoto relleno and the other dishes of Arequipeña cuisine, different from the rest of the country',
    ],
    doveDormire: 'Historic center of Arequipa; Chivay or Cabanaconde as bases for the canyon.',
    doveMangiare:
      "Arequipeña cuisine is different from the rest of Peru and worth tasting in the traditional picanterías: rocoto relleno, adobo on Sunday morning and chupe de camarones. In the canyon the offer shrinks to the set menus of the small village restaurants.",
    comeArrivare: 'Flight from Lima (about 1h30) or overnight bus; from Puno about 6 hours by bus.',
    comeSpostarsi: 'Arequipa is walkable; for the Colca, organized two-day tours or regular buses to Chivay and Cabanaconde.',
    periodoMigliore: 'May-September; condors can be seen all year but most likely in the early morning hours',
    costi: 'Santa Catalina Monastery 50 soles for foreign adults (2026); the Colca tourist ticket is separate',
    erroriDaEvitare: [
      'Doing the Colca in a single day from Arequipa: it means leaving at 3 a.m. and spending almost all the time on the bus',
      'Underestimating the climb out of the Sangalle oasis: about 3,600 feet (1,100 meters) of elevation gain, to be done before the sun gets strong',
    ],
    miaEsperienza:
      "It's the city where I finally slept well: at 7,500 feet (2,300 meters) the body recovers, and after days spent at altitude you feel it. The Santa Catalina Monastery is the place that stayed with me most. I didn't expect it to be so big: it's a small walled city with alleys painted blue and orange. At the Cruz del Cóndor, on the other hand, you have to arrive with the right expectations: the condors rise on the morning currents and when it happens it's impressive, but it's not guaranteed and the viewpoint is packed with people. It's still worth the dawn wake-up.",
    luoghi: [
      {
        "nome": "Plaza de Armas and Arequipa cathedral",
        "testo": "The square of the white city, built in sillar, the light volcanic stone, with arcades and the cathedral. The Misti volcano appears in the background.",
        "come": "On foot from the historic centre.",
        "quando": "Evening, with warm light on the sillar.",
        "tempo": "1 hour",
        "consiglio": "Arequipa is lower than Cusco and Puno: the right stop to acclimatise before Cusco or Puno."
      },
      {
        "nome": "Santa Catalina Monastery",
        "testo": "A city within a city, with lanes, coloured courtyards and cells. Dominican nuns lived here, closed off from the world for centuries.",
        "come": "On foot from the centre. You need your passport for the foreigner ticket.",
        "quando": "Every day 9am-5pm; on Tuesday and Wednesday open until 8pm (last entry 7pm). Closed on Good Friday, 25 December and 1 January.",
        "tempo": "1.5-2 hours",
        "costo": "50 soles for foreign adults (2026)",
        "url": "https://www.santacatalina.org.pe/",
        "consiglio": "Visit mid-morning or in the evening to avoid groups."
      },
      {
        "nome": "Andean Sanctuaries Museum and the mummy Juanita",
        "testo": "A museum with the mummy of an Inca girl sacrificed on the Ampato volcano, found very well preserved.",
        "come": "On foot from the centre. Guided visit.",
        "quando": "Check hours and closing days before going.",
        "tempo": "1 hour",
        "consiglio": "The visit is guided and short: worth it to understand the Colca context."
      },
      {
        "nome": "Cruz del Cóndor",
        "testo": "The Andean condor viewpoint in the Colca Canyon, one of the deepest in the world. The condors fly close past the canyon walls.",
        "come": "Organised tour from Arequipa or scheduled bus to Chivay and Cabanaconde, with transfer to the viewpoint.",
        "quando": "Early morning, all year.",
        "tempo": "1-2 hours at the spot",
        "consiglio": "Sleep in Chivay or Cabanaconde the night before to arrive early."
      },
      {
        "nome": "Chivay and the La Calera hot springs",
        "testo": "The main town of the valley, with a market and the La Calera hot springs, excellent after a day on the road at altitude.",
        "come": "Road from Arequipa.",
        "quando": "Evening.",
        "tempo": "1-2 hours at the springs",
        "consiglio": "A good base for the first night in the canyon."
      },
      {
        "nome": "Trek to Sangalle (the oasis)",
        "testo": "A two-day trek in the canyon, down to the Sangalle oasis and back up at dawn.",
        "come": "Starts from Cabanaconde; can be done on your own or with a guide.",
        "quando": "Dry season; go down early to avoid the heat.",
        "tempo": "2 days",
        "consiglio": "The climb back is hard: start in the dark to avoid the sun."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Plaza de Armas and Santa Catalina",
          "Day 2: Andean Sanctuaries Museum and departure for Chivay"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Arequipa",
          "Day 2: Chivay, La Calera hot springs",
          "Day 3: Cruz del Cóndor at dawn and return or onward to Puno"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic centre of Arequipa",
        "perChi": "Those visiting the city",
        "testo": "The most convenient area for the monastery and square. Some streets are noisy at night."
      },
      {
        "nome": "Chivay",
        "perChi": "Those visiting the canyon without trekking",
        "testo": "The largest town in the valley, with hot springs and a market. At altitude, cold at night."
      },
      {
        "nome": "Cabanaconde",
        "perChi": "Those who want to hike",
        "testo": "The town near the Cruz del Cóndor and the path to Sangalle. Simple lodging."
      }
    ],
    sapori: [
      {
        "nome": "Rocoto relleno",
        "testo": "Stuffed hot pepper with meat and cheese, a typical Arequipa dish."
      },
      {
        "nome": "Adobo",
        "testo": "Pork marinated in chicha and spices, eaten on Sunday mornings."
      },
      {
        "nome": "Chupe de camarones",
        "testo": "River prawn soup, typical of the picanterías."
      },
      {
        "nome": "Fixed menus in the Colca",
        "testo": "In the canyon the offer is limited to the set menus of small village restaurants."
      }
    ],
    attenzioni: [
      "Night buses: choose only main companies.",
      "Altitude in the Colca: villages and viewpoints are at high altitude.",
      "The Sangalle trek is very hot at the bottom in summer.",
      "Do not buy very cheap tours: stops are often skipped."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: 'The lit facade of the cathedral of Arequipa at night, with the golden bell tower against the black sky',
    immagine: '/images/peru/arequipa-cattedrale-notte-riccardo.jpg',
  },
  {
    slug: 'huaraz-cordillera-blanca',
    paeseSlug: 'peru',
    ordine: 9,
    nome: 'Huaraz and the Cordillera Blanca',
    tipologia: ['trekking', 'natura', 'avventura'],
    giorniConsigliati: '4-7 days, depending on the treks chosen',
    visitataPersonalmente: true,
    introduzione:
      "The highest tropical mountain range in the world, with over thirty peaks above 20,000 feet (6,000 meters) and glacial lakes of almost unreal colors. It's high-mountain Peru, nearly ignored by those who come only for Machu Picchu.",
    percheAndarci:
      "Because it's the best trekking area in the country and because Laguna 69 and the Santa Cruz circuit hold their own against any Andean trek, at a fraction of the cost and the crowds of the Cusco circuit.",
    cosaVedere: [
      'Laguna 69, at 15,100 feet (4,600 meters), a turquoise that looks artificial',
      'Nevado Huascarán, the highest mountain in Peru (6,768 m)',
      'Laguna Parón, the largest lake in the Cordillera Blanca',
      'The archaeological site of Chavín de Huántar, a UNESCO site',
      'Nevado Pastoruri, one of the few glaciers reachable in a day',
    ],
    cosaFare: [
      "Laguna 69 as a day trip: the classic, demanding because of the altitude more than the distance",
      'Santa Cruz trek, 4 days among the 20,000-footers (6,000 meters) of the range',
      'Introductory mountaineering on Nevado Mateo or Ishinca, for those with experience',
    ],
    doveDormire: 'Huaraz is the base for everything: hostels and small hotels, with trekking agencies on every corner.',
    doveMangiare:
      "Huaraz is a mountain town and you eat accordingly: hot soups at every meal, trucha (trout) from high-altitude farms, cuy and pachamanca, meat cooked underground with red-hot stones, found mostly on weekends. The central market in the morning serves caldo de gallina and the high-altitude herbal infusions that help in the first days. For trekking days, the packed lunch is prepared by the agencies or bought at the market: on the trails there is nothing.",
    comeArrivare: 'Overnight bus from Lima, about 8 hours. There are no convenient regular flights: the road is the normal way.',
    comeSpostarsi: 'Colectivos and day tours from the Huaraz agencies to all the trek starting points.',
    periodoMigliore: 'May to September, the dry season: the rest of the year the high-altitude trails become impassable',
    costi: 'among the cheapest areas in Peru: a guided day to Laguna 69 costs a few tens of dollars',
    erroriDaEvitare: [
      'Arriving from Lima (sea level) and leaving the next day for Laguna 69 at 15,100 feet (4,600 meters): you need to acclimatize in Huaraz for at least two days',
      'Relying on the cheapest agencies without checking guides and equipment, especially for multi-day treks',
    ],
    miaEsperienza:
      "It's the part of Peru almost nobody does, and that's a shame: the Cordillera Blanca stands up to anything you see around Cusco, at a fraction of the price and with no lines. Laguna 69 sums it all up: the last forty minutes above 14,800 feet (4,500 meters) were a fight for breath, twenty steps and a rest, and then we found ourselves in front of that turquoise that looks retouched and isn't. The town itself isn't beautiful, it's a staging post full of agencies, but it's what you need.",
    luoghi: [
      {
        "nome": "Laguna 69",
        "testo": "The turquoise lake at 4,600 metres, with a colour that looks retouched. It is the classic day trek of the Cordillera Blanca, hard because of altitude more than distance.",
        "come": "A day trip leaving Huaraz at dawn, a few hours on the road and then a few hours' uphill walk. Done with an agency or by shared van.",
        "quando": "Dry season. Leave early for a clear sky.",
        "tempo": "Full day",
        "consiglio": "Rick describes the last forty minutes above 4,500 metres as a fight for breath: twenty steps and a rest. Acclimatise in Huaraz at least two days."
      },
      {
        "nome": "Santa Cruz trek",
        "testo": "A multi-day trek in the range among very high peaks, with tent camps and the Punta Unión pass.",
        "come": "With an agency, with mules and a cook, from Huaraz, with a long transfer at the start.",
        "quando": "Dry season.",
        "tempo": "4 days",
        "consiglio": "Check the guide and equipment: the cheapest agencies are not always reliable."
      },
      {
        "nome": "Laguna Parón",
        "testo": "A high-altitude lake in the Cordillera Blanca, ringed by peaks, with turquoise water.",
        "come": "Shared van or day tour from Huaraz, with a stretch on dirt road.",
        "quando": "Early morning.",
        "tempo": "Half day or full day",
        "consiglio": "A good alternative if Laguna 69 is too tiring."
      },
      {
        "nome": "Chavín de Huántar",
        "testo": "UNESCO archaeological site, a pre-Inca ceremonial centre with underground galleries and sculptures.",
        "come": "Day tour from Huaraz, with a long road journey.",
        "quando": "Morning; the galleries are cooler.",
        "tempo": "Full day with transfers",
        "consiglio": "Visit the museum: it explains much of the site."
      },
      {
        "nome": "Pastoruri glacier",
        "testo": "A glacier reachable in a day, at high altitude, in strong retreat.",
        "come": "Day tour, with a short final walk.",
        "quando": "Morning.",
        "tempo": "Full day",
        "consiglio": "The altitude is high: ask for the acclimatisation stop."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Huaraz and acclimatisation (town, market)",
          "Day 2: Laguna 69 or Parón"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Huaraz, acclimatisation",
          "Day 2: Laguna 69",
          "Day 3: Chavín or Parón"
        ]
      }
    ],
    zone: [
      {
        "nome": "Huaraz centre",
        "perChi": "Those who want a base for treks",
        "testo": "Hostels and small hotels, agencies on every corner. The town is not pretty, but it is convenient."
      }
    ],
    sapori: [
      {
        "nome": "Trucha",
        "testo": "Farmed trout at altitude."
      },
      {
        "nome": "Cuy",
        "testo": "Guinea pig, traditional dish."
      },
      {
        "nome": "Pachamanca",
        "testo": "Meat cooked underground with hot stones, especially at weekends."
      },
      {
        "nome": "Caldo de gallina",
        "testo": "Hen broth, at the central market in the morning."
      }
    ],
    attenzioni: [
      "Do not leave for Laguna 69 the day after arriving from Lima: you need at least two days of acclimatisation.",
      "Check guides and equipment for multi-day treks before paying.",
      "Night bus Lima-Huaraz: main companies only.",
      "No phone coverage on treks."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario'],
    imageAlt: 'Laguna 69 with its turquoise color at the foot of the glaciers of the Cordillera Blanca, Peru',
    immagine: '/images/peru/huaraz-cordillera-blanca.jpg',
  },
]
