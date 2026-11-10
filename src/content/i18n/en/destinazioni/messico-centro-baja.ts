import type { Destinazione } from '@/lib/types'

export const destinazioniMessicoCentroBaja: Destinazione[] = [
  {
    slug: 'citta-del-messico',
    paeseSlug: 'messico',
    ordine: 10,
    nome: 'Mexico City',
    tipologia: ['città', 'cultura', 'archeologia', 'gastronomia'],
    giorniConsigliati: '4-5 days',
    visitataPersonalmente: true,
    introduzione:
      "The capital sits above 6,500 feet (2,000 meters) on the bed of a drained lake, on top of the ruins of Tenochtitlán. Twenty million people, a UNESCO-listed historic center, a great archaeological museum and some of the richest street food in the world.",
    percheAndarci:
      "Because it's the key to understanding the rest of the country: pre-Hispanic civilizations at the Anthropology Museum and Teotihuacán, colonial history on the Zócalo, today's Mexico in the Roma, Condesa and Coyoacán neighborhoods. At the end of October it's also the starting point of Día de los Muertos, with the Catrinas procession and the big public ofrendas.",
    cosaVedere: [
      'The Zócalo, the Metropolitan Cathedral and the Templo Mayor',
      "The Palacio Nacional with Diego Rivera's murals and the Palacio de Bellas Artes",
      "The Museo Nacional de Antropología in Chapultepec Forest",
      'Teotihuacán, the Pyramid of the Sun and the Calzada de los Muertos',
      "Coyoacán and Frida Kahlo's Casa Azul",
      'The canals of Xochimilco',
    ],
    cosaFare: [
      "Teotihuacán at opening time, or by hot-air balloon at dawn",
      "A trajinera ride at Xochimilco, agreeing the hourly price before getting on",
      "An evening of lucha libre at the Arena México",
      "Tacos al pastor and de suadero in neighborhood taquerías",
      "At the end of October, the Mega Procesión de Catrinas along the Paseo de la Reforma",
    ],
    doveDormire:
      "Roma Norte or Condesa, tree-lined, quiet neighborhoods not far from the center. The Centro Histórico is convenient by day but empty in the evening.",
    doveMangiare:
      "Taquerías, markets (Coyoacán, San Juan), tamales and atole for breakfast, churros with chocolate. The chef-driven restaurants of Roma and Polanco need to be booked weeks ahead.",
    comeSpostarsi: "Metro, Metrobús and ride apps; for Teotihuacán, the bus from the Terminal del Norte. No street-hailed taxis.",
    periodoMigliore: 'October to April, the dry season; late October for Día de los Muertos.',
    erroriDaEvitare: [
      'Taking street-hailed taxis instead of prepaid, de sitio or app taxis',
      'Scheduling the Anthropology Museum or the Templo Mayor on a Monday, when they are closed',
      'Underestimating the altitude in the first two days',
      "Not booking the Casa Azul, which sells out days ahead",
    ],
      "sapori": [
        {
          "nome": "Tacos al pastor",
          "testo": "Spit-roasted pork with pineapple, in every taquería."
        },
        {
          "nome": "Tlacoyos and quesadillas",
          "testo": "Filled corn tortillas, from stalls."
        },
        {
          "nome": "Chilaquiles",
          "testo": "Tortilla in spicy sauce for breakfast."
        },
        {
          "nome": "Pozole",
          "testo": "Corn and meat soup, on Sundays."
        },
        {
          "nome": "Mole and tamales",
          "testo": "Sauces and tamales, in the markets."
        }
      ],
      "attenzioni": [
        "Pickpockets on the metro and at the Zócalo: keep items in front and do not show phones.",
        "Street taxis: use Uber or sitio taxis.",
        "Altitude: drink water and go slowly on the first day."
      ],
    comeArrivare: "Benito Juárez International Airport (AICM), with direct flights or via a European capital; into the city by prepaid taxi or app. Authorised taxis are paid at the desks inside arrivals: about 300-450 MXN, 15-23 €, to Roma Norte or Condesa, 30-60 minutes depending on traffic. Metrobús line 4 runs from terminals 1 and 2 to the historic centre for about 30 MXN, with the rechargeable card or a contactless bank card; the metro (Terminal Aérea station) costs 5 MXN but with luggage at rush hour it isn't worth it. Since March 2026 Uber and DiDi can't pick up inside the terminal. From Puebla and Oaxaca, ADO buses arrive at TAPO or the Terminal del Sur.",
    costi: "Teotihuacán and the Anthropology Museum about 210 MXN each for foreigners (2026); the trajinera is paid per hour and per boat, at a price agreed before boarding. Low budget about 60-90 € a day per person (hostel or private room, taquerías, metro at 5 MXN); mid 125-200 € (boutique hotel in Roma or Condesa, restaurants, a few museums and Teotihuacán); high from 300 € up (design hotel or Polanco, driver, fine dining). Roughly 1 € = 20 MXN.",
    luoghi: [
      {
        "nome": "Zócalo, Cathedral and Templo Mayor",
        "testo": "The main square with the Metropolitan Cathedral, the Palacio Nacional and, next to it, the Templo Mayor, the Aztec heart of Tenochtitlan, with its museum. This is where you see how the colonial city was built on top of the Mexica one, with the same stones.",
        "come": "Metro Zócalo. The Templo Mayor has a separate INAH ticket; the Cathedral is free.",
        "quando": "Morning, before the heat and the demonstrations that often fill the square.",
        "tempo": "3 hours",
        "costo": "Templo Mayor: 210 MXN for foreigners, about 10 € (INAH page, 2026); on Sundays it is free only for Mexican citizens.",
        "orari": "Templo Mayor: Tuesday to Sunday 9-17, closed on Mondays (INAH page).",
        "lat": 19.435,
        "lng": -99.13139,
        "url": "https://lugares.inah.gob.mx/es/node/4463"
      },
      {
        "nome": "Palacio Nacional and the Diego Rivera murals",
        "testo": "The seat of the presidency, on the east side of the Zócalo. On the staircase and in the main courtyard are Diego Rivera's murals on the history of Mexico, from pre-Hispanic times to the Revolution: the clearest summary of how the country tells its own story.",
        "come": "Through the entrance on the Zócalo, with an ID document; security can be slow and access closes without notice on days of official events.",
        "quando": "Morning, on weekdays.",
        "tempo": "1-1.5 hours",
        "lat": 19.4325,
        "lng": -99.13139
      },
      {
        "nome": "Palacio de Bellas Artes",
        "testo": "The white marble theatre and museum with yellow domes, at the start of the Alameda Central. Inside are murals by Rivera, Orozco, Siqueiros and Tamayo; in the evening it hosts the Ballet Folklórico.",
        "come": "Metro Bellas Artes. The façade is free to see; for the murals you buy the museum ticket.",
        "quando": "Morning for the museum; for the view from above, the top-floor bar of the building opposite, at sunset.",
        "tempo": "1.5 hours",
        "costo": "95 MXN, about 5 € (2026, from secondary sources: the official site was unreachable).",
        "orari": "Tuesday to Sunday 10-18, ticket office until 17:30; closed on Mondays.",
        "lat": 19.4353,
        "lng": -99.1414
      },
      {
        "nome": "Torre Latinoamericana",
        "testo": "The 1956 skyscraper, a short walk from Bellas Artes, which withstood the 1957 and 1985 earthquakes. From the observation deck at the top you grasp the scale of the city, which on clear days reaches the volcanoes.",
        "come": "Metro Bellas Artes or San Juan de Letrán; tickets at the base of the tower.",
        "quando": "Late afternoon, to see the city before and after sunset.",
        "tempo": "1 hour",
        "lat": 19.43389,
        "lng": -99.14056
      },
      {
        "nome": "Museo Nacional de Antropología",
        "testo": "The largest and most visited museum in Mexico, in Chapultepec forest, with the Sun Stone and the halls of the Mesoamerican cultures. It is the key to understanding every site you see in the rest of the trip.",
        "come": "Metro Auditorio or Chapultepec.",
        "quando": "Morning, at opening; start with the Mexica hall, in the centre.",
        "tempo": "3-4 hours",
        "costo": "210 MXN for foreigners, about 10 € (INAH page, 2026).",
        "orari": "Tuesday to Sunday 9-18, closed on Mondays (INAH page).",
        "lat": 19.42611,
        "lng": -99.18611,
        "url": "https://lugares.inah.gob.mx/es/node/4237",
        "consiglio": "Pick a few halls: it is too big to see everything."
      },
      {
        "nome": "Chapultepec Castle",
        "testo": "The castle on Chapultepec hill, residence of Emperor Maximilian and today the Museo Nacional de Historia. From the terraces you see the Paseo de la Reforma cutting through the city.",
        "come": "Metro Chapultepec, then a walk uphill of about 15 minutes inside the park.",
        "quando": "Morning, combined with the Anthropology Museum in the same park.",
        "tempo": "2 hours",
        "costo": "210 MXN for foreigners, about 10 € (INAH page, 2026).",
        "orari": "Tuesday to Sunday 9-17, closed on Mondays (INAH page).",
        "lat": 19.42056,
        "lng": -99.18167,
        "url": "https://lugares.inah.gob.mx/es/node/4682"
      },
      {
        "nome": "Teotihuacán",
        "testo": "The city of the Temples of the Sun and the Moon and the Avenue of the Dead, about 40 km north-east of the capital, a UNESCO site. Its scale, conceived long before the Aztecs, only makes sense when you walk it.",
        "come": "Autobuses Teotihuacán bus from the Terminal del Norte, about an hour, or a tour; INAH ticket.",
        "quando": "At the 8 am opening, before the heat and the groups; Sundays are crowded.",
        "tempo": "Half a day",
        "costo": "210 MXN for foreigners, about 10 € (INAH page, 2026). According to news from August 2026 the Pyramid of the Moon is closed until further notice: ask at the ticket office.",
        "orari": "Daily 8-17, last entry at 16:30 (INAH page).",
        "lat": 19.693,
        "lng": -98.844,
        "url": "https://lugares.inah.gob.mx/es/node/4528",
        "consiglio": "Bring a hat and water: there is almost no shade."
      },
      {
        "nome": "Basilica of Guadalupe",
        "testo": "The most visited Catholic shrine in the Americas. Next to the modern basilica, round and from the 1970s, stands the old one, which leans like the Cathedral in the centre; the image of the Virgin is seen from a moving walkway that passes under the altar.",
        "come": "Metro La Villa-Basílica, or a stop on the way back from Teotihuacán.",
        "quando": "Weekday mornings; around 12 December millions of pilgrims arrive.",
        "tempo": "1.5 hours",
        "lat": 19.48444,
        "lng": -99.11722
      },
      {
        "nome": "Coyoacán and the Casa Azul",
        "testo": "A colonial neighbourhood with squares and a market, and Frida Kahlo's Casa Azul, now a museum. After the visit you have lunch at the market and stroll between the Jardín Centenario and the Plaza de la Conchita.",
        "come": "Metro or Uber; for the Casa Azul, tickets must be booked online in advance.",
        "quando": "Morning; you must turn up at the time printed on the ticket.",
        "tempo": "Half a day",
        "costo": "Casa Azul: 320 MXN for foreigners, about 16 € (2026), with timed entry booked online.",
        "orari": "Casa Azul closed on Mondays.",
        "lat": 19.35514,
        "lng": -99.16253,
        "url": "https://boletos.museofridakahlo.org.mx/"
      },
      {
        "nome": "Museo Anahuacalli",
        "testo": "The lava-stone temple-museum designed by Diego Rivera for his collection of pre-Hispanic art, in the south of the city. It is less known than the Casa Azul and pairs well with Coyoacán.",
        "come": "Uber or taxi from Coyoacán, about twenty minutes.",
        "quando": "Early afternoon, after Coyoacán.",
        "tempo": "1.5 hours",
        "orari": "Tuesday to Sunday 11-17:30, closed on Mondays (official site).",
        "lat": 19.3227,
        "lng": -99.14451,
        "url": "https://www.museoanahuacalli.org.mx/"
      },
      {
        "nome": "Xochimilco",
        "testo": "The canals with colourful trajineras, what remains of the Aztec lake system. At weekends it is one big party with mariachis and beer; on weekdays it is much quieter.",
        "come": "Metro to Tasqueña and then the light rail, or Uber to the embarcaderos.",
        "quando": "Weekday mornings, fewer crowds.",
        "tempo": "2-3 hours",
        "costo": "Roughly 600-700 MXN per hour for the whole boat, about 30-35 € (from the trip, 2026).",
        "lat": 19.25206,
        "lng": -99.09335,
        "consiglio": "Agree on duration and price of the boat before boarding; mariachis and vendors are paid separately."
      },
      {
        "nome": "Museo Soumaya",
        "testo": "The silver building on Plaza Carso, in Polanco, with Carlos Slim's collection: Rodin sculptures, European masters and Mexican art. The architecture and the inner ramp alone make it worth a visit.",
        "come": "Uber or taxi to Polanco (Nuevo Polanco).",
        "quando": "Afternoon, also on Mondays, when many museums are closed.",
        "tempo": "1.5 hours",
        "costo": "Free admission (official site).",
        "orari": "Daily 10:30-18:30 (official site).",
        "lat": 19.44066,
        "lng": -99.20462,
        "url": "https://www.museosoumaya.org/"
      },
      {
        "nome": "Roma, Condesa and Parque México",
        "testo": "The tree-lined neighbourhoods of the 1920s, with art deco houses, cafés, markets and the city's nightlife. Parque México and Avenida Ámsterdam, an oval with a pedestrian strip in the middle, are the place to wander without a plan.",
        "come": "On foot or by Metrobús along Avenida Insurgentes.",
        "quando": "Morning for cafés and the park, evening for dinner and bars.",
        "tempo": "Half a day",
        "costo": "Free",
        "lat": 19.41222,
        "lng": -99.16917
      },
      {
        "nome": "Lucha libre at Arena México",
        "testo": "CMLL lucha libre, with masks, acrobatics and a crowd that puts on more of a show than the ring. A popular and very Mexican night out.",
        "come": "In the Doctores neighbourhood: there and back by taxi or app, not on foot.",
        "quando": "Tuesday, Friday and Sunday (CMLL 2026 calendars).",
        "tempo": "2-3 hours",
        "lat": 19.42472,
        "lng": -99.15194,
        "consiglio": "Buy tickets at the arena box office or through official channels, not from street resellers."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Zócalo, Cathedral and Templo Mayor",
          "Murals of the Palacio Nacional",
          "Tacos for lunch in the centre",
          "Afternoon: Palacio de Bellas Artes and Torre Latinoamericana at sunset"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: historic centre as above",
          "Day 2: Museo Nacional de Antropología at opening, Chapultepec Castle, evening in Roma and Condesa"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Teotihuacán at opening, stopping at the Basilica of Guadalupe on the way back"
        ]
      },
      {
        "titolo": "4-5 days",
        "tappe": [
          "Day 4: Coyoacán and the Casa Azul, Anahuacalli, afternoon in Xochimilco",
          "Day 5: Museo Soumaya in Polanco and, in the evening, lucha libre at Arena México (Tuesday, Friday or Sunday)"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic centre",
        "perChi": "everything on foot",
        "testo": "Zócalo and museums nearby, but noisy and not pleasant at night away from the main streets."
      },
      {
        "nome": "Roma and Condesa",
        "perChi": "restaurants and bars",
        "testo": "Neighbourhoods of cafés and nightlife, safer on foot, close to Chapultepec. From hostels and private rooms to boutique hotels.",
        "fascia": "30-175 €"
      },
      {
        "nome": "Polanco",
        "perChi": "high end and fine dining",
        "testo": "An upmarket neighbourhood north of Chapultepec, with design hotels, the Museo Soumaya and the city's best-known restaurants.",
        "fascia": "from 250 €"
      },
      {
        "nome": "Coyoacán",
        "perChi": "calm and history",
        "testo": "A residential, colonial neighbourhood, further from the centre."
      }
    ],
    gite: [
      {
        "nome": "Teotihuacán",
        "distanza": "about 40 km, 1 hour by bus",
        "come": "Autobuses Teotihuacán bus from the Terminal del Norte, frequent departures, or a tour with a sunrise balloon flight (roughly 2,500-4,000 MXN).",
        "testo": "The Pyramids of the Sun and the Moon and the Avenue of the Dead: go in at the 8 am opening and you are back by early afternoon."
      },
      {
        "nome": "Puebla and Cholula",
        "distanza": "about 2 hours by bus",
        "come": "ADO bus from TAPO or the Terminal del Oriente, 200-300 MXN (from the trip).",
        "testo": "Puebla's baroque centre, with the Capilla del Rosario and the Biblioteca Palafoxiana, and the church of Cholula on top of the pyramid, with Popocatépetl behind it. Better with a night there."
      },
      {
        "nome": "Tepoztlán",
        "distanza": "about 80 km south, 1.5 hours by bus",
        "come": "Bus from the Terminal del Sur (Tasqueña).",
        "testo": "A mountain town with a weekend market and the small Tepozteco temple at the top of a steep climb of about an hour."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Mexico City?",
        "risposta": "Three full days for the historic centre, Chapultepec and Teotihuacán; with four or five you add Coyoacán, Xochimilco and a night of lucha libre."
      },
      {
        "domanda": "Which area is best to stay in?",
        "risposta": "Roma Norte or Condesa: tree-lined, full of restaurants and quieter in the evening. The historic centre is handy by day but empties after dinner; Polanco is for the high end."
      },
      {
        "domanda": "Which museums are closed on Mondays?",
        "risposta": "Almost all of them: Anthropology, Chapultepec Castle, Templo Mayor, Bellas Artes, Casa Azul and Anahuacalli. Monday is the right day for Teotihuacán, open daily, or the Museo Soumaya."
      },
      {
        "domanda": "Do you need to book Frida Kahlo's Casa Azul?",
        "risposta": "Yes, tickets are sold only online with an entry time, often days ahead; for foreigners they cost 320 MXN (2026)."
      },
      {
        "domanda": "How do you get to Teotihuacán?",
        "risposta": "With the Autobuses Teotihuacán bus from the Terminal del Norte, about an hour, or on a tour. Go in at the 8 am opening and bring water and a hat."
      },
      {
        "domanda": "Is Mexico City safe for tourists?",
        "risposta": "In the tourist neighbourhoods yes, with the care any big city needs: pickpockets on the metro and in crowds, no taxis hailed on the street, apps or taxis de sitio at night. Areas like Doctores, where Arena México is, are reached by car."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos', 'messico-cdmx-baja-california'],
    imageAlt: 'The Palacio de Bellas Artes in the historic center of Mexico City',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-01-citta-del-messico.jpg',
  },
  {
    slug: 'puebla-cholula',
    paeseSlug: 'messico',
    ordine: 11,
    nome: 'Puebla and Cholula',
    tipologia: ['città coloniale', 'archeologia', 'gastronomia', 'vulcani'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "Puebla is a UNESCO-listed colonial city, with facades covered in talavera and one of the country's most important cuisines. Close by is Cholula, with a huge pre-Hispanic pyramid and, on top, the sanctuary of the Virgen de los Remedios with the Popocatépetl in the background.",
    percheAndarci:
      "For the image of the yellow church on the pyramid with the smoking volcano behind it, for Puebla's baroque and for the mole. It's also the natural stop between Mexico City and Oaxaca.",
    cosaVedere: [
      "Puebla's historic center with the Cathedral and the Capilla del Rosario",
      'The Biblioteca Palafoxiana, a historic 17th-century library',
      "Cholula's Great Pyramid, its tunnels and the Santuario de la Virgen de los Remedios",
      'The indigenous baroque churches of Tonantzintla and Acatepec',
    ],
    cosaFare: [
      'Climb to the church on the pyramid at dawn or sunset to see the Popocatépetl and the Iztaccíhuatl',
      'Visit a traditional talavera workshop',
      "Try mole poblano, cemitas and the sweets of the Calle de los Dulces",
    ],
    doveDormire:
      "In Puebla, the center around the Zócalo, with many hotels in colonial buildings. In Cholula, hostels and small hotels at the foot of the pyramid.",
    doveMangiare: 'Mole poblano, chalupas, cemitas and molotes; chiles en nogada are a seasonal late-summer dish.',
    comeArrivare: 'ADO bus from Mexico City; from Puebla to Cholula by taxi or colectivo.',
    comeSpostarsi: 'On foot in the centers; taxis and apps between Puebla and Cholula.',
    periodoMigliore: 'October to April; the clear mornings of November-February are the best for seeing the volcanoes.',
    erroriDaEvitare: [
      'Visiting Cholula only at midday, when haze often hides the volcano',
      'Doing Puebla as a day trip from Mexico City without sleeping at least one night in Cholula',
    ],
      "luoghi": [
        {
          "nome": "Puebla historic centre and Cathedral",
          "testo": "A UNESCO site, with the Cathedral, the Zócalo and houses covered in talavera azulejos.",
          "come": "On foot from the Zócalo.",
          "quando": "Morning.",
          "tempo": "3 hours"
        },
        {
          "nome": "Palafoxiana Library and Capilla del Rosario",
          "testo": "The first public library in the Americas, founded in 1646, and a baroque chapel covered in gold (Templo de Santo Domingo).",
          "come": "On foot from the centre.",
          "quando": "Morning.",
          "tempo": "1.5 hours"
        },
        {
          "nome": "Great Pyramid of Cholula",
          "testo": "The largest pyramid in the world by volume, almost hidden under a grassy hill, with the church of the Virgen de los Remedios on top. The inner tunnels reopened in March 2026 after six years of closure, with group visits.",
          "come": "Bus or Uber from Puebla, a short ride.",
          "quando": "Morning; sunset for the view of the volcanoes.",
          "tempo": "2-3 hours",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Climb to the church on top for the panorama of the Popocatépetl and Iztaccíhuatl volcanoes."
        },
        {
          "nome": "Tonantzintla and Acatepec",
          "testo": "Indigenous baroque churches with azulejo façades and interiors covered in gilded stucco.",
          "come": "Uber or colectivo from Cholula.",
          "quando": "Morning.",
          "tempo": "1-2 hours"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Cathedral, Capilla del Rosario",
            "Lunch of mole poblano",
            "Afternoon: Cholula and pyramid"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Puebla centre and Palafoxiana",
            "Day 2: Cholula, pyramid, Tonantzintla and Acatepec"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Puebla historic centre",
          "perChi": "on foot to everything",
          "testo": "Hotels in historic buildings and restaurants nearby."
        },
        {
          "nome": "Cholula",
          "perChi": "village atmosphere",
          "testo": "Quieter, with bars and student life."
        }
      ],
      "sapori": [
        {
          "nome": "Mole poblano",
          "testo": "A chilli and chocolate sauce on chicken, symbol of the city."
        },
        {
          "nome": "Chiles en nogada",
          "testo": "Stuffed peppers with walnut sauce, in August-September."
        },
        {
          "nome": "Cemitas",
          "testo": "Sandwiches with meat, avocado and cheese."
        },
        {
          "nome": "Tacos árabes",
          "testo": "Grilled pork with Arab bread."
        }
      ],
      "attenzioni": [
        "The Cholula pyramid tunnels are narrow: not for the claustrophobic.",
        "Street taxis: use Uber.",
        "Popocatépetl volcano is active: the panorama may vary."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'The Santuario de la Virgen de los Remedios on the Cholula pyramid with the snow-capped volcano behind',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-06-puebla-cholula.jpg',
  },
  {
    slug: 'oaxaca',
    paeseSlug: 'messico',
    ordine: 12,
    nome: 'Oaxaca',
    tipologia: ['città coloniale', 'Día de los Muertos', 'gastronomia', 'archeologia'],
    giorniConsigliati: '4-5 days, more during the festival days',
    visitataPersonalmente: true,
    introduzione:
      "Capital of a state with a strong Indigenous presence, in the highlands, with a UNESCO-listed colonial center of green stone, enormous markets and the cuisine of its moles. Between October 31 and November 2 it is where Día de los Muertos is most alive and most varied.",
    percheAndarci:
      "For the festival nights in the cemeteries and the towns around, for the mezcal, for the markets and for Monte Albán, the Zapotec capital on a mountaintop.",
    cosaVedere: [
      'The Templo de Santo Domingo, the museum and the ethnobotanical garden',
      'The 20 de Noviembre and Benito Juárez markets',
      'Monte Albán',
      'The cemetery of Santa Cruz Xoxocotlán on the night of October 31',
      'The Panteón General (San Miguel)',
    ],
    cosaFare: [
      'Follow a comparsa in the barrios of Jalatlaco and Xochimilco in the days before the festival',
      "The muerteada of San Agustín Etla on the night of November 1, with a tour that guarantees the return",
      "The pasillo de humo at the Mercado 20 de Noviembre",
      'Try tlayudas, mole negro, tejate and chapulines',
    ],
    doveDormire:
      "The center between Santo Domingo and Jalatlaco. On festival nights prices rise steeply: book many months ahead.",
    doveMangiare: 'The markets for tlayudas, mole and chocolate; the mezcalerías in the center for artisanal mezcal.',
    comeSpostarsi: 'On foot in the center; colectivos and taxis for the towns; organized tours for the festival nights, when taxis are scarce.',
    periodoMigliore: 'October to April; late October-early November for Día de los Muertos; July for the Guelaguetza.',
    erroriDaEvitare: [
      'Booking festival lodging just a few weeks before departure',
      'Paying for tours that promise "access" to the cemeteries, which is free',
      'Photographing people and altars without asking',
      'Not checking on bloqueos before long trips',
    ],
      "sapori": [
        {
          "nome": "Mole negro",
          "testo": "A dark sauce of chillies, spices and chocolate."
        },
        {
          "nome": "Tlayuda",
          "testo": "A large crisp tortilla with beans, cheese and meat."
        },
        {
          "nome": "Quesillo and tasajo",
          "testo": "Stringy cheese and dried grilled meat."
        },
        {
          "nome": "Chapulines",
          "testo": "Toasted grasshoppers with lime and chilli."
        },
        {
          "nome": "Mezcal and chocolate",
          "testo": "Specialities of the region, in mezcalerías and workshops."
        }
      ],
      "attenzioni": [
        "During Día de Muertos Oaxaca is very crowded: book hotels and tours months ahead.",
        "Craft mezcal: buy from reliable producers and shops.",
        "Taxis without meter: agree the price."
      ],
    comeArrivare: "ADO bus from Puebla or Mexico City; flights from Mexico City. From Puebla (CAPU) the ADO bus takes about four and a half hours through the sierra, 450-800 MXN depending on the class (about 22-40 €); from Mexico City the direct journey takes 6-7 hours. During the Día de los Muertos seats sell out: book a few days ahead. The ADO terminal is north of the centre, about ten minutes by taxi from Santo Domingo. Towards the coast, the new motorway gets you to Puerto Escondido in about 3-3.5 hours by bus or van (300-500 MXN). Before leaving, ask at the hotel about bloqueos, the road blockades by unions and communities.",
    costi: "Entry to the panteones is free; evening cemetery tours at varying prices, roughly 600-1,200 MXN per person with transport (from the trip, 2026). Monte Albán and Mitla 210 MXN each for foreigners (INAH pages, 2026), Museo de las Culturas 210 MXN, Hierve el Agua 50-100 MXN in cash. Low budget about 60-90 € a day per person (hostel, markets, colectivos); mid 125-200 € (casa de huéspedes or small hotel in the centre, restaurants, a Valles Centrales tour); high from 300 € (hotel in a colonial house, driver, fine dining). On the nights of the festival accommodation costs two or three times as much.",
    luoghi: [
      {
        "nome": "Templo de Santo Domingo and the ethnobotanical garden",
        "testo": "A baroque church with gilded interiors, a former convent with a museum, and the ethnobotanical garden, which can only be visited with a guide. It is the finest monument in the city and the landmark to find your way around.",
        "come": "On foot from the centre; the church is free.",
        "quando": "Morning.",
        "tempo": "2-3 hours",
        "lat": 17.06556,
        "lng": -96.72306,
        "url": "https://lugares.inah.gob.mx/es/node/4252",
        "consiglio": "The ethnobotanical garden can only be entered on guided visits, and times and bookings have changed several times recently: ask in town before you go."
      },
      {
        "nome": "Museo de las Culturas de Oaxaca",
        "testo": "The museum inside the former convent of Santo Domingo, with halls on the Zapotec and Mixtec cultures and the treasure of Tomb 7 at Monte Albán, gold jewellery and jade. From the cloister windows you look down on the ethnobotanical garden.",
        "come": "Entrance beside the church of Santo Domingo.",
        "quando": "Morning, before Monte Albán or right after.",
        "tempo": "2 hours",
        "costo": "210 MXN for foreigners, about 10 € (INAH page, 2026).",
        "orari": "Tuesday to Saturday 10-16, closed Sunday and Monday according to the INAH page: check before going.",
        "lat": 17.06592,
        "lng": -96.72315,
        "url": "https://lugares.inah.gob.mx/es/node/4252"
      },
      {
        "nome": "Monte Albán",
        "testo": "The ancient Zapotec capital on a levelled hilltop above the city, a UNESCO site, with the great plaza, the ball court and the tombs. From the top you see all three Valles Centrales.",
        "come": "Shuttles from the centre or taxi, about 20 minutes; INAH ticket including the site museum.",
        "quando": "At opening: in the middle of the day it is hot and there is no shade.",
        "tempo": "2-3 hours",
        "costo": "210 MXN for foreigners, about 10 € (INAH page, 2026).",
        "orari": "Daily 8-17, last entry at 16 (INAH page).",
        "lat": 17.04389,
        "lng": -96.76778,
        "url": "https://lugares.inah.gob.mx/es/node/4351"
      },
      {
        "nome": "Mercado 20 de Noviembre and Benito Juárez",
        "testo": "Markets with grilled-meat stalls, chapulines, chocolate, mole and cheese. In the pasillo de humo of the 20 de Noviembre you pick raw meat and have it grilled on the spot.",
        "come": "On foot, a few blocks from the Zócalo.",
        "quando": "Morning and lunch; open every day.",
        "tempo": "1-2 hours",
        "costo": "Free",
        "lat": 17.05799,
        "lng": -96.727,
        "consiglio": "Bring cash in small notes."
      },
      {
        "nome": "Zócalo and Cathedral",
        "testo": "The tree-lined square with the bandstand and arcades, and the green-stone Cathedral beside it, on the Alameda. In the evening it fills with balloon sellers, bands and families.",
        "come": "On foot from the centre.",
        "quando": "Evening, when the square is liveliest.",
        "tempo": "1 hour",
        "costo": "Free",
        "lat": 17.06152,
        "lng": -96.72509
      },
      {
        "nome": "Andador Macedonio Alcalá",
        "testo": "The pedestrian street running up from the Cathedral to Santo Domingo, lined with colonial houses, galleries, craft shops and mezcalerías. It is the natural route across the centre.",
        "come": "On foot.",
        "quando": "Late afternoon and evening.",
        "tempo": "1 hour",
        "costo": "Free",
        "lat": 17.06312,
        "lng": -96.72432
      },
      {
        "nome": "Basílica de la Soledad",
        "testo": "The baroque shrine of the Virgen de la Soledad, the city's patron, with a façade of carved panels. On the square in front, stalls sell nieves, ices in local flavours.",
        "come": "On foot, west of the Zócalo.",
        "quando": "Morning or late afternoon.",
        "tempo": "45 minutes",
        "costo": "Free",
        "lat": 17.06361,
        "lng": -96.73028
      },
      {
        "nome": "Museo Textil de Oaxaca",
        "testo": "A small museum devoted to the textiles of Oaxaca's communities and of the world, with changing exhibitions and a cooperative shop. It helps you recognise the fabrics you see in the markets and in Teotitlán.",
        "come": "On foot from the centre, on calle Hidalgo.",
        "quando": "Any time, evenings included.",
        "tempo": "1 hour",
        "costo": "Free (official site).",
        "orari": "Monday-Friday 10-20, Saturday 11-20, Sunday 11-18 (official site).",
        "lat": 17.06077,
        "lng": -96.72292,
        "url": "https://museotextildeoaxaca.org/"
      },
      {
        "nome": "Museo Rufino Tamayo",
        "testo": "The museum of pre-Hispanic art collected by the Oaxacan painter Rufino Tamayo, in a colonial house with rooms painted in strong colours. A collection chosen with an artist's eye rather than an archaeologist's.",
        "come": "On foot, on avenida Morelos.",
        "quando": "Morning or early afternoon.",
        "tempo": "1 hour",
        "lat": 17.06346,
        "lng": -96.72689
      },
      {
        "nome": "Instituto de Artes Gráficas de Oaxaca (IAGO)",
        "testo": "The printmaking centre founded by Francisco Toledo, with exhibitions, an art library and a patio where people sit in silence. It shows the city's contemporary art scene.",
        "come": "On the Andador Macedonio Alcalá, opposite Santo Domingo.",
        "quando": "Afternoon.",
        "tempo": "45 minutes",
        "lat": 17.06657,
        "lng": -96.72407
      },
      {
        "nome": "Barrio de Jalatlaco",
        "testo": "A neighbourhood of colourful houses and cobbled streets east of the centre, with murals, cafés and small restaurants. In the days before the Día de los Muertos the barrio comparsas pass through here.",
        "come": "On foot from the centre, about 10 minutes.",
        "quando": "Morning for photos, evening for dinner.",
        "tempo": "1-2 hours",
        "costo": "Free",
        "lat": 17.06748,
        "lng": -96.71609
      },
      {
        "nome": "Cerro del Fortín and Auditorio Guelaguetza",
        "testo": "The hill north-west of the centre, with the amphitheatre where the Guelaguetza, the festival of Oaxaca's regions, is held in July. From the stairway and the lookout you get the best view of the city.",
        "come": "On foot up a flight of steps from the Santo Domingo area, or by taxi to the auditorium.",
        "quando": "Late afternoon, for sunset; better in company.",
        "tempo": "1.5 hours",
        "costo": "Free",
        "lat": 17.06864,
        "lng": -96.731
      },
      {
        "nome": "Central de Abastos",
        "testo": "The city's wholesale market, huge and chaotic, where producers from the surrounding villages arrive. It is the most authentic place to see what Oaxaca eats, from dried chiles to handmade tortillas.",
        "come": "Taxi or on foot from the centre, about 20 minutes south-west.",
        "quando": "Morning.",
        "tempo": "1-2 hours",
        "lat": 17.05977,
        "lng": -96.73534,
        "consiglio": "Watch out for pickpockets in the busiest aisles."
      },
      {
        "nome": "Santa Cruz Xoxocotlán cemetery and Panteón General",
        "testo": "The Día de Muertos vigils (31 October-2 November), with graves decorated with cempasúchil flowers and candles. The Panteón General is walkable from the centre, Xoxocotlán is south of the city.",
        "come": "Taxi or tour for Xoxocotlán, agreeing the return too; Panteón General on foot.",
        "quando": "Night of 31 October and 1-2 November.",
        "tempo": "Evening",
        "costo": "Free: no tour sells an «entry»",
        "lat": 17.03081,
        "lng": -96.75015,
        "consiglio": "Respect the families: it is not a show."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Monte Albán at opening",
          "Lunch at the Mercado 20 de Noviembre, in the pasillo de humo",
          "Afternoon: Santo Domingo and the Museo de las Culturas",
          "Evening: Andador Macedonio Alcalá and the Zócalo"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1 as above",
          "Day 2: Basílica de la Soledad, Museo Textil and Museo Tamayo, afternoon in Jalatlaco, sunset at Cerro del Fortín"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Valles Centrales (Árbol del Tule, Teotitlán, Mitla, Hierve el Agua) on a tour or by colectivo"
        ]
      },
      {
        "titolo": "Día de los Muertos",
        "tappe": [
          "31 October: Monte Albán in the morning, night at Santa Cruz Xoxocotlán",
          "1 November: Valles Centrales by day, the San Agustín Etla muerteada at night",
          "2 November: Panteón General and the last comparsas in town"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic centre",
        "perChi": "everything on foot",
        "testo": "Hotels in colonial houses, culture and restaurants, noisier. Between Santo Domingo and the Zócalo; on the nights of the festival prices rise two or three times.",
        "fascia": "75-175 €"
      },
      {
        "nome": "Barrio Jalatlaco",
        "perChi": "cafés and atmosphere",
        "testo": "A neighbourhood of colourful houses, quieter, walkable from the centre. Many casas de huéspedes and small hotels.",
        "fascia": "75-175 €"
      },
      {
        "nome": "Barrio de Xochimilco",
        "perChi": "those who want calm",
        "testo": "The old neighbourhood north of Santo Domingo, with the aqueduct and quiet streets, 10-15 minutes' walk from the centre."
      }
    ],
    gite: [
      {
        "nome": "Árbol del Tule and Teotitlán del Valle",
        "distanza": "20-40 minutes by colectivo or taxi",
        "come": "Colectivos towards Tlacolula from the centre, or taxi; the Tule enclosure costs a few pesos.",
        "testo": "The cypress of Santa María del Tule, among the trees with the widest trunk in the world, and the wool-weaving village of Teotitlán, where you visit the workshops."
      },
      {
        "nome": "Mitla and Hierve el Agua",
        "distanza": "about 45 km and 70 km, full day",
        "come": "Group tour, roughly 600-900 MXN per person excluding entries (from the trip), or colectivo to Mitla.",
        "testo": "Mitla has stone geometric mosaics unique in Mesoamerica (210 MXN for foreigners, open daily 8-17, INAH page); Hierve el Agua the petrified waterfalls with pools on the edge of the cliff, when the community keeps it open (50-100 MXN in cash)."
      },
      {
        "nome": "San Bartolo Coyotepec",
        "distanza": "about 15 km south, 30 minutes",
        "come": "Colectivo or taxi from the centre.",
        "testo": "The village of barro negro, black pottery polished by hand: in the family workshops you see how it is made."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Oaxaca?",
        "risposta": "Three days for the city, Monte Albán and a day in the Valles Centrales; four or five if you come for the Día de los Muertos, which has three different nights to follow."
      },
      {
        "domanda": "When should you book for the Día de los Muertos?",
        "risposta": "Accommodation 4-6 months ahead: between 30 October and 2 November prices rise two or three times and the centre sells out. Evening cemetery tours should be booked a few weeks ahead."
      },
      {
        "domanda": "How do you get to Monte Albán?",
        "risposta": "With the shuttles leaving from the centre or by taxi, about 20 minutes. The site opens at 8 and entry costs 210 MXN for foreigners (INAH page, 2026)."
      },
      {
        "domanda": "Is Hierve el Agua open?",
        "risposta": "It depends: the communities run it and in recent years it has closed several times over local disputes. Ask in town or at the agency the day before."
      },
      {
        "domanda": "What are bloqueos?",
        "risposta": "Road blockades by unions and communities, common in the state of Oaxaca: they can stop buses and taxis for hours. Before every transfer ask at the hotel and keep some margin."
      },
      {
        "domanda": "What should you eat in Oaxaca?",
        "risposta": "Mole negro, tlayudas over the coals, quesillo, chapulines, tejate and chocolate made with water. The pasillo de humo at the Mercado 20 de Noviembre is the simplest and most typical meal."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'A cempasúchil altar lit by candles on the night of the dead in Oaxaca',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-08-oaxaca.jpg',
  },
  {
    slug: 'valles-centrales-oaxaca',
    paeseSlug: 'messico',
    ordine: 13,
    nome: 'Central Valleys: Teotitlán, Matatlán, Mitla and Hierve el Agua',
    tipologia: ['villaggi', 'mezcal', 'archeologia', 'natura'],
    giorniConsigliati: '1-2 days from Oaxaca',
    visitataPersonalmente: true,
    introduzione:
      "The Tlacolula valley, east of Oaxaca, strings together along highway 190 the Tule cypress, the weaving town of Teotitlán del Valle, the mezcal palenques of Santiago Matatlán, the stone mosaics of Mitla and the petrified waterfalls of Hierve el Agua.",
    percheAndarci:
      "To see how artisanal mezcal is made, for the Zapotec ruins and for the towns where community life is still that of the festivals.",
    cosaVedere: [
      'The Árbol del Tule in Santa María del Tule',
      "The wool rug workshops of Teotitlán del Valle",
      'The palenques of Santiago Matatlán',
      "Mitla's geometric mosaics",
      'Hierve el Agua, when open',
      'The ruins of Yagul',
    ],
    cosaFare: [
      'Visit a palenque and taste mezcal from different agaves',
      'The muerteada of San Agustín Etla (north of Oaxaca) on the night of November 1',
      "Swim in the natural pools of Hierve el Agua",
    ],
    comeArrivare: 'On a group tour from Oaxaca, with a car and driver or by colectivo along highway 190.',
    comeSpostarsi: 'Colectivos between the towns; from Mitla, shared camionetas to Hierve el Agua.',
    periodoMigliore: 'all year; late October-early November for the altars in homes and the comparsas.',
    costi: 'Hierve el Agua with a community fee in cash; Mitla INAH ticket; palenque tastings often free.',
    erroriDaEvitare: [
      'Heading to Hierve el Agua without checking that it is open: closures from disputes between communities are frequent',
      'Driving after mezcal tastings',
      'Entering home altars without an invitation',
    ],
      "luoghi": [
        {
          "nome": "Árbol del Tule",
          "testo": "A Montezuma cypress with the stoutest trunk in the world, in the churchyard of Santa María del Tule. The most serious estimates put it at 1,400 to 1,600 years old.",
          "come": "Bus or taxi from Oaxaca, about 9 km east, on the road to Mitla.",
          "quando": "Morning.",
          "tempo": "Short stop"
        },
        {
          "nome": "Teotitlán del Valle",
          "testo": "A Zapotec village of hand-woven wool rugs with natural dyes (cochineal, indigo).",
          "come": "Taxi or tour from Oaxaca.",
          "quando": "Morning.",
          "tempo": "1-2 hours",
          "consiglio": "Buy in the family workshops, where you see the work."
        },
        {
          "nome": "Mitla",
          "testo": "A Zapotec-Mixtec site with geometric mosaics of fitted stone. INAH entry.",
          "come": "Colectivo or tour from Oaxaca.",
          "quando": "Morning.",
          "tempo": "1-2 hours",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Hierve el Agua",
          "testo": "Petrified limestone waterfalls and natural pools with views of the valley. Run by the community; opening may change.",
          "come": "Tour from Oaxaca or car.",
          "quando": "Morning, with fewer people; check opening.",
          "tempo": "2-3 hours",
          "consiglio": "After rain or road blockades it can be closed: check first."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Árbol del Tule",
            "Teotitlán del Valle",
            "Mezcal at Santiago Matatlán",
            "Mitla"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Tule, Teotitlán and Mitla",
            "Day 2: Hierve el Agua and Yagul"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Base in Oaxaca",
          "perChi": "services",
          "testo": "The Valleys are visited as a day trip from Oaxaca."
        },
        {
          "nome": "Teotitlán or Mitla",
          "perChi": "those who want to stay",
          "testo": "Small family inns, calm and local culture."
        }
      ],
      "sapori": [
        {
          "nome": "Craft mezcal",
          "testo": "Made in Santiago Matatlán, with tastings in the palenques."
        },
        {
          "nome": "Tlayudas",
          "testo": "In village comedores."
        },
        {
          "nome": "Barbacoa",
          "testo": "Goat meat cooked in an earth oven."
        },
        {
          "nome": "Pan de yema",
          "testo": "Sweet bread typical of the villages."
        }
      ],
      "attenzioni": [
        "Hierve el Agua: run by the community, it can close; check first.",
        "Buy rugs in family workshops, not from middlemen.",
        "Mezcal tastings are strong: do not drive."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'The petrified waterfalls of Hierve el Agua above the valley',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-11-valles-centrales-oaxaca.jpg',
  },
  {
    slug: 'puerto-escondido',
    paeseSlug: 'messico',
    ordine: 14,
    nome: 'Puerto Escondido and the Oaxaca Coast',
    tipologia: ['mare', 'surf', 'natura'],
    giorniConsigliati: '3-5 days',
    visitataPersonalmente: true,
    introduzione:
      "A surf town on the Pacific, with the famous Zicatela wave, quiet coves, lagoons with bioluminescence and, to the east, the villages of Mazunte and Zipolite. A new highway has shortened the trip from Oaxaca.",
    percheAndarci: 'To end a cultural trip with ocean, surf, sunsets and coastal nature.',
    cosaVedere: [
      'Playa Zicatela and La Punta',
      'The coves of Carrizalillo, Manzanillo and Puerto Angelito',
      'The Manialtepec Lagoon',
      'Mazunte, Zipolite and Punta Cometa',
    ],
    cosaFare: [
      'A surf lesson at Carrizalillo or La Punta',
      'Turtle releases with local projects, in season',
      'The bioluminescence at Manialtepec on a moonless night',
    ],
    doveDormire:
      "La Punta for hostels and budget, Zicatela for mid-range and nightlife, Carrizalillo and Rinconada for quiet and a few high-end hotels.",
    doveMangiare: 'Pescado a la talla, ceviche, tiritas and fish tacos in the beachside palapas.',
    comeSpostarsi: 'Taxis and colectivos along coastal highway 200.',
    periodoMigliore: 'November to April, the dry season; June to October rains and possible hurricanes.',
    erroriDaEvitare: [
      'Swimming at Zicatela, where the rip currents are dangerous',
      'Choosing bioluminescence tours that motor all the way to the end of the lagoon',
      'Leaving belongings unattended on the beach in the evening',
    ],
      "sapori": [
        {
          "nome": "Fresh fish",
          "testo": "Grilled, on the beaches."
        },
        {
          "nome": "Tlayuda",
          "testo": "From Oaxaca, in local restaurants."
        },
        {
          "nome": "Ceviche and aguachile",
          "testo": "Fresh, by the sea."
        },
        {
          "nome": "Oaxacan tamales",
          "testo": "Wrapped in banana leaves."
        }
      ],
      "attenzioni": [
        "Currents at Zicatela and Zipolite are dangerous: swim only where indicated.",
        "Thefts on the beach: leave nothing unattended.",
        "The road from Oaxaca is long and winding: consider the flight."
      ],
    comeArrivare: "Bus or van from Oaxaca on the new motorway; direct flights from Mexico City. With the Barranca Larga-Ventanilla motorway, fully open since 2024, it takes about 3-3.5 hours from Oaxaca instead of six or seven, 300-500 MXN (15-25 €): better to leave in the morning with a seat booked the day before, and ask about bloqueos. The flight from Mexico City takes about an hour (Aeroméxico, Volaris and Viva) and the airport is a few minutes by taxi from Zicatela and the centre. Those staying in Mazunte use Huatulco airport, about an hour's drive away.",
    costi: "Surf lessons and lagoon tours at varying prices: compare on the spot. Group surf lesson about 600-900 MXN (30-45 €), Centro Mexicano de la Tortuga about 50 MXN, turtle releases for a donation (from the trip, 2026). Low budget about 50-70 € a day per person (hostel at La Punta, fish on the beach, colectivos); mid 100-160 € (hotel in Zicatela, a surf lesson, Manialtepec lagoon); high from 250 € (quiet hotel in Carrizalillo or Rinconada, private outings).",
    luoghi: [
      {
        "nome": "Playa Zicatela",
        "testo": "A powerful, famous wave, the «Mexican Pipeline», for expert surfers; the beach, almost three kilometres long, has restaurants and hotels. From the sand you watch surfers riding the barrels.",
        "come": "On foot or by taxi from the centre.",
        "quando": "Dawn and sunset to watch the surfers; swimming only with great care.",
        "tempo": "Half a day",
        "costo": "Free",
        "consiglio": "Strong rip currents and drownings every year: swim only in the sheltered coves."
      },
      {
        "nome": "Carrizalillo, Manzanillo and Puerto Angelito",
        "testo": "Sheltered coves with calm water, good for swimming and snorkelling. Carrizalillo, at the bottom of about 160 steps, is also the beach for first surf lessons and sunsets.",
        "come": "Taxi or on foot; at Carrizalillo you go down the stairway.",
        "quando": "Morning for a swim, sunset at Carrizalillo.",
        "tempo": "Half a day",
        "costo": "Free; sunbeds and umbrellas for a fee",
        "lat": 15.85955,
        "lng": -97.07851,
        "consiglio": "The climb back from Carrizalillo in the heat is tiring: comfortable shoes and water."
      },
      {
        "nome": "La Punta",
        "testo": "The southern end of Zicatela, with a softer left-hand wave, surf schools, hostels and open-air bars. It is the youngest side of Puerto Escondido.",
        "come": "Taxi from the centre or on foot along Zicatela.",
        "quando": "Early morning for surfing, evening for the bars.",
        "tempo": "Half a day",
        "costo": "Group surf lesson about 600-900 MXN, 30-45 € (from the trip, 2026).",
        "lat": 15.83415,
        "lng": -97.0442
      },
      {
        "nome": "Playa Bacocho and the turtle release",
        "testo": "A long, open beach west of the centre, where at sunset some conservation projects release hatchlings from their nurseries into the sea. In late October and November the hatching season is at its peak.",
        "come": "Taxi from the centre, a few minutes.",
        "quando": "Sunset, with times to ask on the day.",
        "tempo": "1-2 hours",
        "costo": "A small donation to the project",
        "lat": 15.86618,
        "lng": -97.09354,
        "consiglio": "Don't touch the hatchlings, no flash, stay behind the marked line. The sea here is open: no swimming."
      },
      {
        "nome": "Playa Principal and Andador El Adoquín",
        "testo": "The town bay, with fishing boats pulled up on the sand and fish sold in the morning. Behind it is El Adoquín, the pedestrian street with shops, bars and restaurants.",
        "come": "On foot from the centre.",
        "quando": "Early morning for the fishermen, evening for a stroll.",
        "tempo": "1-2 hours",
        "costo": "Free",
        "lat": 15.86012,
        "lng": -97.06322
      },
      {
        "nome": "Manialtepec Lagoon",
        "testo": "A mangrove lagoon about 20 minutes west of town. At dawn you go by boat for the birds (herons, cormorants, kingfishers), at night for the bioluminescence, plankton that glows blue when the water moves.",
        "come": "Boat tour from Puerto Escondido.",
        "quando": "Dawn or a moonless night; bioluminescence peaks between July and September and is weaker in November.",
        "tempo": "2-3 hours",
        "lat": 15.94583,
        "lng": -97.19444,
        "consiglio": "Ask the operator how the previous nights went."
      },
      {
        "nome": "Mazunte, Zipolite and Punta Cometa",
        "testo": "Villages on the nearby coast: Mazunte for the turtle centre, Zipolite for the free beach, Punta Cometa for sunset, with a short path through dry scrub.",
        "come": "Colectivo or shared taxi along coastal highway 200, about an hour and a quarter.",
        "quando": "Sunset at Punta Cometa.",
        "tempo": "Full day",
        "lat": 15.66006,
        "lng": -96.55703,
        "consiglio": "You need a torch for the walk down from Punta Cometa in the dark."
      },
      {
        "nome": "Centro Mexicano de la Tortuga",
        "testo": "The research centre and aquarium devoted to sea turtles, in Mazunte, founded after the 1990 hunting ban that changed the village's economy. You see the species that nest on the Oaxaca coast.",
        "come": "In Mazunte, along the main road; combine it with Punta Cometa.",
        "quando": "Morning or early afternoon.",
        "tempo": "1 hour",
        "costo": "About 50 MXN, 2-3 € (from the trip, 2026)",
        "orari": "Closed Monday and Tuesday (from the trip).",
        "lat": 15.66652,
        "lng": -96.55177
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: swim at Carrizalillo or Puerto Angelito",
          "Fish lunch on Playa Principal",
          "Afternoon: Zicatela and La Punta to watch the surfers",
          "Sunset at Bacocho with the turtle release"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1 as above",
          "Day 2: surf lesson at La Punta in the morning, Manialtepec in the evening for the bioluminescence"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Mazunte with the Turtle Centre, Zipolite and sunset at Punta Cometa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Zicatela",
        "perChi": "surf and nightlife",
        "testo": "Hotels, bars and restaurants, noisy at night. Mid-range.",
        "fascia": "75-150 €"
      },
      {
        "nome": "La Punta",
        "perChi": "budget and a young vibe",
        "testo": "Hostels and cheap rooms, softer waves, outdoor life.",
        "fascia": "from 30 €"
      },
      {
        "nome": "Carrizalillo and Rinconada",
        "perChi": "peace and quiet",
        "testo": "Residential areas above the coves, with quieter hotels and a few high-end places."
      },
      {
        "nome": "Mazunte",
        "perChi": "those who want to change base",
        "testo": "A small, relaxed village about an hour and a quarter away, with cabañas and hostels; you fly out from Huatulco."
      }
    ],
    gite: [
      {
        "nome": "Mazunte, Zipolite and Punta Cometa",
        "distanza": "about 1 hour 15 along coastal highway 200",
        "come": "Colectivo or shared taxi; after sunset transport thins out.",
        "testo": "The Turtle Centre, Zipolite beach and sunset from the Punta Cometa headland."
      },
      {
        "nome": "Lagunas de Chacahua",
        "distanza": "about 70 km west",
        "come": "Day tour from Puerto Escondido, or colectivo to Zapotalito and then a boat.",
        "testo": "A national park of lagoons and mangroves, with a fishing village on a sand spit between lagoon and ocean."
      },
      {
        "nome": "Manialtepec Lagoon",
        "distanza": "about 20 minutes west",
        "come": "Boat tour at dawn or at night.",
        "testo": "Birds among the mangroves in the morning, bioluminescence on moonless nights."
      }
    ],
    faq: [
      {
        "domanda": "Can you swim at Zicatela?",
        "risposta": "Better not: it has strong rip currents and there are drownings every year. To swim, go to Carrizalillo, Manzanillo or Puerto Angelito."
      },
      {
        "domanda": "How many days do you need in Puerto Escondido?",
        "risposta": "Three days for the coves, surfing, Manialtepec and a day in Mazunte; with five you add Chacahua or a few days of rest."
      },
      {
        "domanda": "Where is best to stay?",
        "risposta": "La Punta to spend little, Zicatela for nightlife, Carrizalillo and Rinconada for quiet."
      },
      {
        "domanda": "When are the turtles released?",
        "risposta": "At sunset, at Bacocho, during the hatching season, which peaks in late October and November. Ask for the time on the day and leave a small donation."
      },
      {
        "domanda": "When can you see the bioluminescence at Manialtepec?",
        "risposta": "On moonless nights, best after rain: it peaks between July and September; in November it is weaker and varies from night to night."
      },
      {
        "domanda": "How do you get there from Oaxaca?",
        "risposta": "By bus or van on the new motorway, about 3-3.5 hours and 300-500 MXN, or by plane via Mexico City."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'The bay of Puerto Escondido seen from above among the cacti',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-12-puerto-escondido.jpg',
  },
  {
    slug: 'patzcuaro-janitzio',
    paeseSlug: 'messico',
    ordine: 15,
    nome: 'Pátzcuaro and Janitzio (Michoacán)',
    tipologia: ['Día de los Muertos', 'lago', 'villaggi'],
    giorniConsigliati: '2-3 days between October 30 and November 2',
    visitataPersonalmente: true,
    introduzione:
      "Pátzcuaro is a Purépecha colonial town on the lake of the same name, in the state of Michoacán. On the island of Janitzio, on the night of November 1, the cemetery lights up with candles and boats arrive from the shores: it is the most famous image of Día de los Muertos.",
    percheAndarci:
      "For the night at Janitzio and for the cemeteries of the lake towns, like Tzintzuntzan and Ihuatzio. It's a stop to weigh carefully: Michoacán has strict safety advisories from several governments: read the current ones before deciding.",
    cosaVedere: [
      "The island of Janitzio and its cemetery on the night of November 1",
      "The cemetery and yácatas of Tzintzuntzan, the old Purépecha capital",
      "The colonial squares of Pátzcuaro",
    ],
    cosaFare: [
      "The vigil at Tzintzuntzan on the night of October 31",
      "The launch crossing from the Muelle General to Janitzio",
      "The artisan tianguis of the Noche de Ánimas",
    ],
    comeArrivare: 'Bus from Mexico City via Morelia on highway 15D.',
    comeSpostarsi: 'Launches from the Muelle General to Janitzio; taxis and colectivos for the lake towns.',
    periodoMigliore: 'October 30 to November 2 for the Noche de Ánimas.',
    erroriDaEvitare: [
      "Deciding to go without having read Viaggiare Sicuri's updated card on Michoacán",
      'Traveling at night off the main roads',
      "Thinking you can combine Janitzio and Oaxaca's main nights on the same trip: they coincide",
    ],
      "luoghi": [
        {
          "nome": "Janitzio Island",
          "testo": "An island on Lake Pátzcuaro with a statue of Morelos, famous for the Día de Muertos vigil in the cemetery on the night of 1 November.",
          "come": "Boat from the Pátzcuaro dock.",
          "quando": "Night of 1 November for the vigil.",
          "tempo": "Half a day",
          "consiglio": "Respect the families: the vigil is not a show."
        },
        {
          "nome": "Tzintzuntzan",
          "testo": "An ancient Purépecha capital, with the yácatas (round pyramids) and a decorated cemetery.",
          "come": "Car or colectivo from Pátzcuaro, along the lake.",
          "quando": "Morning.",
          "tempo": "2 hours",
          "costo": "210 MXN for foreigners (2026).",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Colonial squares of Pátzcuaro",
          "testo": "Plaza Vasco de Quiroga and Plaza Gertrudis Bocanegra, with arcades and a crafts market.",
          "come": "On foot.",
          "quando": "Morning.",
          "tempo": "2-3 hours"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Plaza Vasco de Quiroga and market",
            "Afternoon: Tzintzuntzan",
            "Evening: boat to Janitzio, vigil (1 November)"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Pátzcuaro and Tzintzuntzan",
            "Day 2: Janitzio and surroundings"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Pátzcuaro centre",
          "perChi": "on foot to everything",
          "testo": "Hotels in colonial houses, near the squares."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado blanco",
          "testo": "White fish from the lake, fried or grilled."
        },
        {
          "nome": "Corundas and uchepos",
          "testo": "Corn tamales of Purépecha tradition."
        },
        {
          "nome": "Sopa tarasca",
          "testo": "Bean and tomato soup with ancho chilli."
        },
        {
          "nome": "Carnitas",
          "testo": "Slow-cooked pork from Michoacán."
        }
      ],
      "attenzioni": [
        "During Día de Muertos the area is very crowded: book months ahead.",
        "Respect the families during the vigils: no flash or intrusive photos.",
        "Boat to Janitzio: agree the price."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'The island of Janitzio in Lake Pátzcuaro with the Morelos monument on top, seen from above',
    immagine: '/images/messico/janitzio-stock.jpg',
  },
  {
    slug: 'la-paz-baja',
    paeseSlug: 'messico',
    ordine: 16,
    nome: 'La Paz and Espíritu Santo',
    tipologia: ['mare', 'fauna marina', 'isole'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "The capital of Baja California Sur has the pace of a provincial town, a long waterfront on the Sea of Cortez and, in front, the uninhabited archipelago of Espíritu Santo, a UNESCO site. In winter the whale shark feeds in the bay.",
    percheAndarci: 'To swim with the whale shark and with the sea lions of Los Islotes, and for Playa Balandra.',
    cosaVedere: [
      'The Malecón at sunset',
      'Playa Balandra, El Tecolote and Pichilingue',
      'The Espíritu Santo archipelago and Los Islotes',
    ],
    cosaFare: [
      'Swim with the whale shark with a CONANP-authorized operator, in season',
      'Snorkel with the sea lions at Los Islotes',
      'Kayak and lunch on the beach at Ensenada Grande',
    ],
    doveDormire: 'The Malecón or the center, everything on foot; quieter resorts toward Pichilingue.',
    doveMangiare: 'Fish and shrimp tacos, ceviche, aguachile, almejas chocolatas.',
    comeArrivare: 'Flight from Mexico City; Baja Ferries ferry from Mazatlán or Topolobampo to Pichilingue.',
    comeSpostarsi: 'Rental car for beaches and surroundings; tour boats for the islands.',
    periodoMigliore: 'autumn to spring for the whale shark, when CONANP opens the season.',
    costi: 'Whale shark and Espíritu Santo tours at varying prices, plus the park fee; Balandra has an entry fee to check before going.',
    erroriDaEvitare: [
      'Going to Balandra without having booked a shift',
      'Choosing an unauthorized whale shark operator',
      'Not keeping a spare day for the north wind',
    ],
      "luoghi": [
        {
          "nome": "La Paz Malecón",
          "testo": "The city's seafront, a few kilometres long, with sculptures, cafés and the sunset over the Sea of Cortez.",
          "come": "On foot from the centre.",
          "quando": "Sunset.",
          "tempo": "1-2 hours"
        },
        {
          "nome": "Playa Balandra",
          "testo": "A shallow bay with turquoise water, known for its mushroom rock, inside a protected natural area. Access is capped to protect the ecosystem.",
          "come": "By car or taxi from La Paz. Entry is in two shifts, 8-12 and 13-17, with a limited number of places per shift; some can be booked on CONANP's protected areas portal, the rest go to whoever arrives first.",
          "quando": "Early morning.",
          "tempo": "Half a day",
          "consiglio": "Arrive early and bring water and food: nothing is sold on the beach, and you take your rubbish back.",
          "costo": "Protected-area entry fee: check the amount with CONANP before going."
        },
        {
          "nome": "Espíritu Santo Island and Los Islotes",
          "testo": "An archipelago within the UNESCO site of the islands and protected areas of the Gulf of California, with sea lion colonies and seabeds for snorkelling. You swim with sea lions at Los Islotes.",
          "come": "Boat tour from La Paz with an authorised operator.",
          "quando": "Morning; year-round with varying times.",
          "tempo": "Full day"
        },
        {
          "nome": "Whale sharks in La Paz bay",
          "testo": "Meeting whale sharks inside the bay's refuge, in season, only with authorised boats.",
          "come": "Boat tour from La Paz.",
          "quando": "Usually between autumn and spring, but the season opens only when CONANP counts enough sharks in the bay's refuge: in 2025 it was suspended several times. Check first.",
          "tempo": "Half a day",
          "consiglio": "Choose operators who respect distances and number limits."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Playa Balandra",
            "Seafood lunch",
            "Sunset on the Malecón"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Balandra and Malecón",
            "Day 2: Espíritu Santo and Los Islotes"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centre and Malecón",
          "perChi": "on foot to everything",
          "testo": "Hotels and restaurants near the seafront."
        },
        {
          "nome": "Towards Balandra",
          "perChi": "calm",
          "testo": "Quieter hotels to the north, farther from the centre."
        }
      ],
      "sapori": [
        {
          "nome": "Fish tacos",
          "testo": "A Baja speciality, in taquerías."
        },
        {
          "nome": "Almejas chocolatas",
          "testo": "Local clams, fresh."
        },
        {
          "nome": "Machaca",
          "testo": "Shredded dried meat with eggs, from Baja."
        },
        {
          "nome": "Ceviche",
          "testo": "With lime, in seaside restaurants."
        }
      ],
      "attenzioni": [
        "Balandra has capped access in two shifts: check rules, hours and fee before going.",
        "For Los Islotes choose authorised operators: the sea lion rules are strict.",
        "Strong sun and wind: bring water and protection."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'Playa Balandra from above with turquoise shallow water, near La Paz',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-07-la-paz-baja.jpg',
  },
  {
    slug: 'bahia-magdalena',
    paeseSlug: 'messico',
    ordine: 17,
    nome: 'Bahía Magdalena',
    tipologia: ['balene', 'laguna', 'villaggi di pescatori'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "A large Pacific bay sheltered by sand islands, reachable by car from La Paz, with the fishing villages of Puerto Adolfo López Mateos and Puerto San Carlos. In winter the gray whales give birth and nurse their calves here.",
    percheAndarci: 'To see gray whale mothers with their calves up close, from the pangas of the local cooperatives.',
    cosaVedere: ['The gray whale lagoons', "The dunes of the barrier islands", 'The fishing villages'],
    cosaFare: [
      'A panga outing in the morning, when the wind is lighter',
    ],
    doveDormire: 'Simple lodgings and small motels in the two villages; package tent camps on the islands.',
    doveMangiare: "The fishermen's fish and seafood in family restaurants.",
    comeArrivare: 'By car from La Paz or from Loreto, via Ciudad Constitución.',
    periodoMigliore: 'winter, during the gray whale season: check dates with the cooperatives.',
    costi: 'Panga trips priced per boat, to agree in advance, cash only.',
    erroriDaEvitare: [
      'Arriving without cash',
      'Planning outings in the afternoon, when the wind churns up the lagoon',
      'Driving in the evening on the road back',
    ],
      "luoghi": [
        {
          "nome": "Grey whale watching",
          "testo": "The lagoons of Bahía Magdalena host the grey whales that come to give birth each year. You go out in a panga and the whales come up to the boat.",
          "come": "Panga with an operator from Puerto Adolfo López Mateos or Puerto San Carlos.",
          "quando": "In winter, during the whale season; in the morning, with less wind.",
          "tempo": "2-3 hours",
          "consiglio": "A morning trip, when the wind is weakest."
        },
        {
          "nome": "Barrier island dunes",
          "testo": "Sand dunes on Isla Magdalena, the long barrier separating the lagoon from the Pacific. From the top you see the calm water where the whales swim on one side and the ocean waves on the other; it is often the stop after the panga trip.",
          "come": "By panga from the lagoons.",
          "quando": "Morning.",
          "tempo": "Half a day"
        },
        {
          "nome": "Fishing villages",
          "testo": "Puerto Adolfo López Mateos and Puerto San Carlos, fishing villages with a market and fresh fish. They live from fishing and, in winter, from the whales: off season they are almost empty, with few restaurants open.",
          "come": "By car from La Paz or Ciudad Constitución.",
          "quando": "Daytime.",
          "tempo": "Half a day",
          "consiglio": "In winter the villages come alive with the whale season: ask locally whether there are festivals or events on your dates."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: panga trip for the whales",
            "Seafood lunch",
            "Afternoon: dunes"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: arrival, afternoon trip",
            "Day 2: morning trip and fish lunch at the port"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Puerto Adolfo López Mateos",
          "perChi": "nature",
          "testo": "Few services, simple inns."
        },
        {
          "nome": "Puerto San Carlos",
          "perChi": "services",
          "testo": "Larger, with hotels."
        }
      ],
      "sapori": [
        {
          "nome": "Almejas chocolatas",
          "testo": "Large clams with chocolate-coloured shells, raw with lime and salsa or tatemadas, cooked under embers. Buy them from fishermen or at the port stalls."
        },
        {
          "nome": "Callo de hacha",
          "testo": "The muscle of a large lagoon shellfish, thinly sliced and served raw with lime, cucumber and chilli, or as aguachile."
        },
        {
          "nome": "Fish and shrimp tacos",
          "testo": "Battered, with cabbage, cream and salsas, at the stalls of Puerto San Carlos and López Mateos. The quick lunch after the boat trip."
        },
        {
          "nome": "Ceviche",
          "testo": "Fish or shrimp marinated in lime with tomato, onion and coriander, on crunchy tostadas."
        }
      ],
      "attenzioni": [
        "Gray whales are only there in winter: check the season before going.",
        "Afternoon wind makes the sea rough: book mornings.",
        "Few services: bring cash.",
        "Whale trips are regulated: only with authorised pangas, with limited time and distances.",
        "Long distances and few petrol stations: fill up in Ciudad Constitución.",
        "Winter mornings on the boat are cool and damp: windbreaker and layers."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'A gray whale rising vertically out of the water off Baja California Sur',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-09-bahia-magdalena.jpg',
  },
  {
    slug: 'loreto',
    paeseSlug: 'messico',
    ordine: 18,
    nome: 'Loreto',
    tipologia: ['Pueblo Mágico', 'balene', 'parco marino'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "A Pueblo Mágico on the Sea of Cortez founded in 1697 by the Jesuits, with its historic Jesuit mission and a national marine park where whales are spotted in season.",
    percheAndarci: "For the whales in season, for the park's islands and for the calm of the town.",
    cosaVedere: [
      'The Misión de Nuestra Señora de Loreto',
      'The Parque Nacional Bahía de Loreto and Isla Coronado',
      'The Misión de San Javier in the Sierra de la Giganta',
    ],
    cosaFare: [
      'A boat trip for the whales, in season, with authorized lancheros',
      'Snorkeling and beach at Isla Coronado',
    ],
    doveDormire: 'The historic center near the mission; resorts at Nopoló for high-end.',
    doveMangiare: 'Catch of the day and clams on the malecón.',
    comeArrivare: 'By car from La Paz or from Bahía Magdalena; small airport with flights mostly from the United States and Tijuana.',
    periodoMigliore: 'winter for the whales: check the season with the operators.',
    costi: 'Whale and island trips with authorized operators, at varying prices.',
    erroriDaEvitare: [
      'Arriving in Loreto without having filled up on the stretch from Ciudad Constitución',
      'Booking with operators without a park permit',
    ],
      "luoghi": [
        {
          "nome": "Mission of Nuestra Señora de Loreto",
          "testo": "The Jesuit mission of Loreto, founded by the Jesuit Juan María de Salvatierra in 1697, with the missions museum next to the church. From here the expansion across the peninsula began; the stone church, built between 1740 and 1744, is still the heart of town life.",
          "come": "On foot from the centre.",
          "quando": "Morning.",
          "tempo": "1 hour",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Bahía de Loreto National Park and Isla Coronado",
          "testo": "A marine park, part of the Gulf of California UNESCO site, with islands, snorkelling and whales in season. Isla Coronado, one of the main islands, has a white beach, clear water and sea lions on the rocks; by boat you may cross paths with dolphins.",
          "come": "Boat from Loreto with an authorised operator.",
          "quando": "Morning; calm sea.",
          "tempo": "Full day"
        },
        {
          "nome": "San Javier Mission",
          "testo": "A Jesuit mission founded in 1699 in the Sierra de la Giganta, reached by a mountain road through canyons and palm oases. The stone church, built between 1744 and 1758 and is looked after by INAH.",
          "come": "Car or tour from Loreto, across the sierra.",
          "quando": "Morning.",
          "tempo": "Half a day",
          "consiglio": "A mountain road with tight bends: drive by day and take it slowly."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Loreto Mission",
            "Seafood lunch",
            "Afternoon: Isla Coronado"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Loreto and the National Park",
            "Day 2: San Javier Mission"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Loreto centre",
          "perChi": "on foot to everything",
          "testo": "Small hotels and restaurants near the seafront."
        }
      ],
      "sapori": [
        {
          "nome": "Almejas tatemadas",
          "testo": "Chocolate clams cooked under a fire of dry herbs, right on the sand: Loreto's speciality. Eaten with lime and salsa."
        },
        {
          "nome": "Fish tacos",
          "testo": "Battered, with cabbage, cream and salsas, at the downtown stalls from the morning."
        },
        {
          "nome": "Machaca",
          "testo": "Dried, shredded beef cooked with eggs, onion and chilli: the breakfast of the sierra ranches, with flour tortillas."
        },
        {
          "nome": "Date sweets",
          "testo": "The oases around Loreto and San Javier grow date palms brought by the missionaries: dates and sweets are sold in the town's shops."
        }
      ],
      "attenzioni": [
        "The road to San Javier climbs into the mountains with tight bends: drive by day and take it slowly.",
        "Strong sun and summer heat: go early.",
        "Authorised operators in the national park.",
        "The marine park charges a protected-area entry fee: ask whether it is included in the tour price."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'The stone Misión de Nuestra Señora de Loreto among the palms, in the center of town',
    immagine: '/images/messico/loreto-mision-stock.jpg',
  },
  {
    slug: 'todos-santos',
    paeseSlug: 'messico',
    ordine: 19,
    nome: 'Todos Santos',
    tipologia: ['Pueblo Mágico', 'surf', 'arte'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "A Pueblo Mágico on the Pacific right on the Tropic of Cancer, with colonial houses, galleries and cafés, and surf beaches like Playa Cerritos. Quieter and less expensive than Los Cabos.",
    percheAndarci: 'For a slow stop between La Paz and Cabo, surf at Cerritos and the turtle releases in season.',
    cosaVedere: ['The historic center and the galleries', 'Playa Cerritos', 'The Pacific beaches at sunset'],
    cosaFare: ['Surf lesson at Cerritos', 'Turtle release with the local projects, in hatching seasons'],
    doveDormire: 'Historic center, with small charming hotels and a few budget guesthouses.',
    comeArrivare: 'By car from La Paz or from Cabo San Lucas.',
    periodoMigliore: 'November to April.',
    erroriDaEvitare: ['Swimming on the open Pacific beaches outside Cerritos: strong currents'],
      "luoghi": [
        {
          "nome": "Historic centre and galleries",
          "testo": "A Pueblo Mágico with colonial houses, art galleries, boutiques and cafés. It used to be a sugar-cane town; today it lives on artists, surfers and small restaurants cooking with vegetables from the surrounding farms.",
          "come": "On foot.",
          "quando": "Morning and evening.",
          "tempo": "Half a day"
        },
        {
          "nome": "Playa Cerritos",
          "testo": "A Pacific beach with waves suitable for beginner surfing, schools and board rental.",
          "come": "Car or taxi from Todos Santos, heading south.",
          "quando": "Morning.",
          "tempo": "Half a day",
          "consiglio": "Outside Cerritos the Pacific beaches have strong currents: do not swim."
        },
        {
          "nome": "Turtle release",
          "testo": "Local conservation projects releasing hatchlings in the hatching seasons. Several species of sea turtles nest on the beaches near town; volunteers protect the nests and, at sunset, guide the hatchlings to the sea.",
          "come": "With local projects, in season.",
          "quando": "Evening.",
          "tempo": "1-2 hours",
          "consiglio": "Respect the project rules."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: centre and galleries",
            "Afternoon: Cerritos and surf lesson",
            "Sunset over the Pacific"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: centre and Cerritos",
            "Day 2: turtles in season or a day in La Paz"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Historic centre",
          "perChi": "charm",
          "testo": "Small hotels and guesthouses, on foot from restaurants."
        }
      ],
      "sapori": [
        {
          "nome": "Fish and shrimp tacos",
          "testo": "Baja style, battered, with cabbage, cream and salsas, at the stalls in town and towards Cerritos."
        },
        {
          "nome": "Grilled catch of the day",
          "testo": "Pacific fish, often dorado or red snapper, grilled with garlic butter or salsa, in downtown restaurants."
        },
        {
          "nome": "Farm cooking",
          "testo": "Todos Santos is surrounded by organic farms and gardens: herbs, vegetables and mangoes end up on restaurant menus and in local shops."
        },
        {
          "nome": "Coffee and sweets",
          "testo": "Downtown bakeries and cafés, with sweet bread and guava or mango sweets, for a break between galleries."
        }
      ],
      "attenzioni": [
        "Swimming on open Pacific beaches outside Cerritos: strong currents.",
        "Galleries close at varying hours: check.",
        "From mid-May to November is the Pacific hurricane season: check the bulletins before setting off."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'The long ocean beach of Todos Santos seen from above',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-13-todos-santos.jpg',
  },
  {
    slug: 'los-cabos',
    paeseSlug: 'messico',
    ordine: 20,
    nome: 'Los Cabos',
    tipologia: ['mare', 'balene', 'resort'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The tip of the peninsula, with two very different towns: Cabo San Lucas, touristy and nocturnal, with El Arco where the Sea of Cortez meets the Pacific, and San José del Cabo, colonial and quiet. To the north-east, Cabo Pulmo has one of the rare coral reefs on the west coast of North America.",
    percheAndarci: 'For the humpbacks in winter, El Arco and Cabo Pulmo, and for the departure airport.',
    cosaVedere: ['El Arco and Playa del Amor', "San José del Cabo's center and gallery district", 'The Cabo Pulmo national park'],
    cosaFare: [
      'Whale watching for the humpbacks',
      "The Thursday-evening Art Walk in San José del Cabo (November-June)",
      'Snorkeling at Cabo Pulmo with local operators',
    ],
    doveDormire: 'San José del Cabo for mid-range; the Corridor for high-end resorts; Cabo San Lucas for nightlife.',
    comeArrivare: 'San José del Cabo airport (SJD), with flights to Mexico City and direct to the United States; by car from Todos Santos.',
    periodoMigliore: 'winter for the humpbacks.',
    costi: 'Whale watching and water taxis at varying prices: compare operators.',
    erroriDaEvitare: [
      'Stopping for timeshare salespeople at the airport and in the Marina',
      'Underestimating the prices, which are very high',
    ],
      "luoghi": [
        {
          "nome": "El Arco and Playa del Amor",
          "testo": "The rock formation where the Sea of Cortez meets the Pacific, with Lover's Beach hidden behind.",
          "come": "Water taxi from the Cabo San Lucas pier.",
          "quando": "Morning.",
          "tempo": "1-2 hours",
          "consiglio": "The sea is rough: you cannot always land."
        },
        {
          "nome": "San José del Cabo",
          "testo": "A colonial centre with art galleries and the free Thursday evening Art Walk, from November to June, in the gallery district.",
          "come": "Car or bus from Cabo San Lucas.",
          "quando": "Thursday evening.",
          "tempo": "Half a day"
        },
        {
          "nome": "Cabo Pulmo National Park",
          "testo": "The oldest of only three coral reefs on the west coast of North America, in a national park that is part of the Gulf of California UNESCO site. Snorkelling and diving among huge schools of fish.",
          "come": "Car from Los Cabos, then a boat with a local operator.",
          "quando": "Morning.",
          "tempo": "Full day"
        },
        {
          "nome": "Humpback whale watching",
          "testo": "Humpback whale watching in the waters of Los Cabos. In winter they come here to mate and give birth: from the boat you see breaches, tail slaps and, with some luck, mothers with calves.",
          "come": "Boat from Cabo San Lucas or San José del Cabo.",
          "quando": "In winter, in season.",
          "tempo": "2-3 hours"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: El Arco by water taxi",
            "Lunch in Cabo San Lucas",
            "Thursday evening: Art Walk in San José del Cabo"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: El Arco and Cabo San Lucas",
            "Day 2: Cabo Pulmo or whales (in winter)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "San José del Cabo",
          "perChi": "quiet",
          "testo": "A colonial centre, calmer and less touristy."
        },
        {
          "nome": "Cabo San Lucas",
          "perChi": "nightlife",
          "testo": "Marina, bars and venues, very touristy."
        }
      ],
      "sapori": [
        {
          "nome": "Fish tacos",
          "testo": "Baja style, battered, with cabbage, cream and salsas. In San José del Cabo's taquerías they cost far less than at the Cabo San Lucas marina."
        },
        {
          "nome": "Ceviche and aguachile",
          "testo": "Raw fish or shrimp in lime, the aguachile with chilli and cucumber. Good for lunch with a cold beer."
        },
        {
          "nome": "Lobster",
          "testo": "Grilled or with butter, in seafront restaurants. It is expensive: ask the price by weight before ordering."
        },
        {
          "nome": "Margarita",
          "testo": "Tequila, lime and triple sec with salt on the rim, in Cabo San Lucas bars."
        }
      ],
      "attenzioni": [
        "Cabo San Lucas is touristy and expensive: compare prices.",
        "Time-share offers: refuse people who stop you in the street.",
        "The Pacific has strong currents: around Cabo San Lucas swim only at sheltered, flagged beaches such as Médano, Chileno and Santa María.",
        "At Cabo Pulmo you go in the water only with the village operators: park rules are strict to protect the reef.",
        "From mid-May to November is the Pacific hurricane season: check the bulletins."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'El Arco at Cabo San Lucas with a boat in front of the rocks',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-14-los-cabos.jpg',
  },
]
