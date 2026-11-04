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
    costi: 'most sites are included in the Tourist Ticket (Boleto Turístico); the Maras salt pans have a separate ticket (about 10 soles)',
    erroriDaEvitare: [
      'Squeezing the Sacred Valley and Machu Picchu into a single rushed day: it is the classic mistake that takes the meaning out of both',
      'Sleeping in Cusco the night before the 5 or 6 a.m. train from Ollantaytambo',
    ],
    miaEsperienza:
      "It sits sixteen hundred feet (five hundred meters) lower than Cusco, and from here on you sleep better. The first day, Pisac, with the market and the site on the hill, then Ollantaytambo, where we slept to be ready for the morning train to Machu Picchu. The town is at its best in the evening, when the tour buses have left and it goes back to its residents. The next day, the rest of the valley: the Maras salt pans, pools carved into the mountain and used for generations by the same families, the circular terraces of Moray, and Chinchero, for the weaving. It's the stop to extend if you have an extra day, and it's the one almost everyone sacrifices to rush to Machu Picchu.",
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
            costo: 'train $70-500 round trip depending on class (Expedition/Voyager are the cheap ones, Vistadome is panoramic, Hiram Bingham is luxury), plus $24 for the round-trip shuttle bus and entry to the site (about 152 soles)',
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
      "Entry: about 152 soles for the basic circuit; the circuit with Huayna Picchu or with Machu Picchu Mountain costs about 200 soles (around $54). The only official seller is the Ministry of Culture portal, tuboleto.cultura.pe: everything else is resellers with a markup.",
    erroriDaEvitare: [
      'Booking late: for Huayna Picchu you need 2-3 months ahead in any season, 3-4 in the high season, and the spots go fast',
      'Buying tickets from unofficial resellers at inflated prices instead of on tuboleto.cultura.pe',
      "Choosing the circuit without reading what it includes: the routes are binding and some don't pass through the points you take for granted",
      'Arriving in Cusco and going up to Machu Picchu the next day, without acclimatizing',
    ],
    miaEsperienza:
      "The moment I carry with me from Peru is Machu Picchu at dawn. Getting in among the first, when the citadel is still almost empty, pays you back for the alarm in the dark and the road to get there: the advice that counts above all is to sleep in Aguas Calientes and enter on the first shift, less for the light than for those forty minutes when the place is still quiet. I've gotten there in several ways: on a five-day trek, by minibus to Hidroeléctrica and then on foot, and by train, in economy class. I also did Huayna Picchu: it's beautiful, but you have to book in time and if you're afraid of heights you should think hard. It helps to know beforehand that you can't wander freely: the circuit you choose when you book decides what you'll see and what you won't.",
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
      'Organized trek roughly $400-700 per person for 4-5 days with guide, mules and meals; independently you spend much less, with entry to the site around 60 soles.',
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
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario'],
    imageAlt: 'The rainforest running down to the waters of the Madre de Dios River, in the Peruvian Amazon',
    immagine: '/images/peru/amazzonia-peruviana.jpg',
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
    costi: 'entry to the Santa Catalina Monastery and the Colca tourist ticket are separate, both modest',
    erroriDaEvitare: [
      'Doing the Colca in a single day from Arequipa: it means leaving at 3 a.m. and spending almost all the time on the bus',
      'Underestimating the climb out of the Sangalle oasis: about 3,600 feet (1,100 meters) of elevation gain, to be done before the sun gets strong',
    ],
    miaEsperienza:
      "It's the city where I finally slept well: at 7,500 feet (2,300 meters) the body recovers, and after days spent at altitude you feel it. The Santa Catalina Monastery is the place that stayed with me most. I didn't expect it to be so big: it's a small walled city with alleys painted blue and orange. At the Cruz del Cóndor, on the other hand, you have to arrive with the right expectations: the condors rise on the morning currents and when it happens it's impressive, but it's not guaranteed and the viewpoint is packed with people. It's still worth the dawn wake-up.",
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
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario'],
    imageAlt: 'Laguna 69 with its turquoise color at the foot of the glaciers of the Cordillera Blanca, Peru',
    immagine: '/images/peru/huaraz-cordillera-blanca.jpg',
  },
]
