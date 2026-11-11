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
        "costo": "95 MXN, about 5 € (2026).",
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
    comeArrivare: "From Mexico City, ADO buses leave from TAPO or the Terminal del Sur, very frequently: about 2 hours and 200-300 MXN, about 10-15 € (2026), to Puebla's CAPU terminal, from where you take a taxi or app ride into the centre. Puebla airport (PBC), at Huejotzingo, has few domestic flights; nearly everyone arrives via Mexico City. From Puebla to Cholula is 20-30 minutes by Uber, taxi or colectivo. To continue to Oaxaca, the bus costs 450-800 MXN and takes about 4.5-5 hours.",
    comeSpostarsi: 'On foot in the centers; taxis and apps between Puebla and Cholula.',
    periodoMigliore: 'October to April; the clear mornings of November-February are the best for seeing the volcanoes.',
    costi: "Rough daily budget per person for 2026: low 50-80 € (hostel or simple hotel in Cholula, markets and cemitas, colectivos); mid 110-170 € (hotel in a colonial house in the centre, museums, Poblano restaurants, Uber); high from 250 € (upscale hotel, private guide, chef-led restaurants). Great Pyramid of Cholula 210 MXN for foreigners; Museo Amparo 85 MXN; Biblioteca Palafoxiana about 40 MXN, free on Tuesday.",
    erroriDaEvitare: [
      'Visiting Cholula only at midday, when haze often hides the volcano',
      'Doing Puebla as a day trip from Mexico City without sleeping at least one night in Cholula',
    ],
    luoghi: [
      {
        nome: "Zócalo and Puebla Cathedral",
        testo: "The heart of the UNESCO-listed historic centre, with its arcades and the Cathedral of the Immaculate Conception, whose towers are among the tallest in the country. Inside are the Altar of the Kings and a large inlaid wooden choir; the square fills up in the evening.",
        come: "On foot; the cathedral can be visited outside mass times.",
        quando: "Morning for the cathedral, evening for the lit-up square.",
        tempo: "1-1.5 hours",
        costo: "Free",
        lat: 19.04283,
        lng: -98.19836,
      },
      {
        nome: "Capilla del Rosario and Santo Domingo",
        testo: "Inside the church of Santo Domingo, the Rosary Chapel is late-17th-century Baroque covered in gilded stucco, angels and scrolls, considered one of the masterpieces of Mexican Baroque. It is a few minutes' walk from the Zócalo.",
        come: "On foot from the centre, on 5 de Mayo.",
        quando: "Outside mass times.",
        tempo: "30 minutes",
        costo: "Free",
        lat: 19.04656,
        lng: -98.19831,
      },
      {
        nome: "Biblioteca Palafoxiana",
        testo: "The first public library in the Americas, founded in 1646 by Bishop Juan de Palafox: a Baroque hall with three tiers of wooden shelves and tens of thousands of old volumes. It is next to the cathedral, in the Casa de la Cultura.",
        come: "On foot, on the first floor of the Casa de la Cultura, beside the cathedral.",
        quando: "Morning; entry is free on Tuesday and it gets busier.",
        tempo: "45 minutes",
        costo: "About 40 MXN, about 2 €; free on Tuesday (2026)",
        orari: "Closed Monday",
        lat: 19.0425,
        lng: -98.1989,
      },
      {
        nome: "Museo Amparo",
        testo: "A private museum in two connected colonial buildings, with one of the country's best collections of pre-Hispanic art, rooms of colonial and contemporary art and a terrace overlooking the domes of the centre. It works well on a rainy morning too.",
        come: "On foot, two blocks from the Zócalo.",
        quando: "Morning; the terrace café is good for a break.",
        tempo: "2 hours",
        costo: "85 MXN, about 4 € (2026)",
        orari: "Wednesday to Monday 10 am-6 pm, closed Tuesday",
        lat: 19.0408,
        lng: -98.1985,
        url: "https://museoamparo.com/",
      },
      {
        nome: "Callejón de los Sapos",
        testo: "A small square and a few lanes of the old quarter south-east of the Zócalo, with antique shops, talavera and cantinas. On Saturdays and Sundays there is a flea market; in the evening, bars with live music.",
        come: "On foot, five minutes from the Zócalo.",
        quando: "Weekend mornings for the market, evenings for the bars.",
        tempo: "1 hour",
        costo: "Free",
        lat: 19.04075,
        lng: -98.19646,
      },
      {
        nome: "Barrio del Artista",
        testo: "A courtyard of small studios where painters and printmakers work with their doors open and sell their pieces. Next door is the Parián, the crafts market with talavera, onyx and sweets.",
        come: "On foot, north-east of the Zócalo, towards the Teatro Principal.",
        quando: "Afternoon, when the studios are open.",
        tempo: "45 minutes",
        costo: "Free",
        lat: 19.044,
        lng: -98.192,
      },
      {
        nome: "Calle de los Dulces",
        testo: "The stretch of 6 Oriente with the old sweet shops: sweet-potato camotes, tortitas de Santa Clara, borrachitos and jamoncillos, born in the city's convents. You can taste before you buy.",
        come: "On foot, near Santa Clara, a few blocks from the Zócalo.",
        quando: "Afternoon.",
        tempo: "30 minutes",
        lat: 19.04616,
        lng: -98.19617,
      },
      {
        nome: "Talavera Uriarte",
        testo: "One of the historic workshops making talavera with designation of origin, active since the 19th century. The guided tour shows the whole process, from clay kneaded by foot to hand-painting and double firing.",
        come: "On foot from the centre, on 4 Poniente; the tour must be booked.",
        quando: "On weekdays, when the artisans are at work.",
        tempo: "50 minutes",
        costo: "150 MXN Monday to Friday, 200 MXN on Saturday, about 8-10 € (2026)",
        orari: "Tours Monday to Friday 10 am-3 pm; Saturday subject to availability",
        url: "https://www.uriartetalavera.com.mx/visita-uriarte",
        consiglio: "Genuine talavera carries the designation-of-origin mark: the pieces sold for a few pesos at stalls are almost always factory-made.",
      },
      {
        nome: "Forts of Loreto and Guadalupe",
        testo: "On the hill north-east of the centre, where on 5 May 1862 the Mexican army defeated the French: the date of Cinco de Mayo. Fort Loreto houses a museum of the battle, and around it is a park with views of the city and the volcanoes.",
        come: "Taxi or Uber from the centre, about 10 minutes.",
        quando: "On a clear morning, to see the volcanoes.",
        tempo: "1.5-2 hours",
        lat: 19.05675,
        lng: -98.18694,
      },
      {
        nome: "Museo Internacional del Barroco",
        testo: "A white, undulating building designed by Toyo Ito, in the modern Angelópolis district, telling the story of the Baroque in art, music and the city, with interactive rooms. Interesting for the contrast with the historic centre.",
        come: "Taxi or Uber from the centre, about 20 minutes; the Estrella de Puebla big wheel is nearby.",
        quando: "Afternoon.",
        tempo: "2 hours",
        lat: 19.01931,
        lng: -98.24661,
      },
      {
        nome: "Great Pyramid of Cholula",
        testo: "The largest pyramid in the world by volume, almost hidden under a grassy hill, with the church of the Virgen de los Remedios on top. The inner tunnels reopened in March 2026 after six years of closure, with group visits; the site museum is included in the ticket.",
        come: "Uber, taxi or colectivo from Puebla, 20-30 minutes; tickets also online.",
        quando: "Morning for the tunnels and the archaeological zone.",
        tempo: "2-3 hours",
        costo: "210 MXN for foreigners, about 10 € (2026)",
        orari: "Archaeological zone Wednesday to Sunday 9 am-5 pm",
        lat: 19.0575,
        lng: -98.30194,
        url: "https://lugares.inah.gob.mx/en/node/5678",
        consiglio: "The tunnels are narrow: not for anyone claustrophobic.",
      },
      {
        nome: "Sanctuary of the Virgen de los Remedios",
        testo: "The yellow church the Spanish built on top of the pyramid, the one in the photos with Popocatépetl smoking behind it. You walk up a ramp; from the churchyard, on clear mornings, you see Popocatépetl and Iztaccíhuatl.",
        come: "On foot from the square of San Pedro Cholula, free climb.",
        quando: "At sunrise or sunset; at midday haze often hides the volcano.",
        tempo: "1 hour",
        costo: "Free",
        lat: 19.0581,
        lng: -98.3018,
      },
      {
        nome: "Convent of San Gabriel",
        testo: "The 16th-century Franciscan convent on the main square of San Pedro Cholula, with the Capilla Real, a chapel with dozens of domes built for converted indigenous people. It faces the pyramid.",
        come: "On foot, on Cholula's main square.",
        quando: "Afternoon, before walking up to the sanctuary for sunset.",
        tempo: "45 minutes",
        costo: "Free",
        lat: 19.06229,
        lng: -98.30438,
      },
      {
        nome: "Tonantzintla and Acatepec",
        testo: "Two indigenous Baroque churches a few kilometres from Cholula. Santa María Tonantzintla has an interior covered with polychrome stucco faces, fruit and angels made by local craftsmen; San Francisco Acatepec has a facade entirely clad in talavera.",
        come: "Uber or colectivo from Cholula, 10-15 minutes; the two churches are close together.",
        quando: "Morning; at Tonantzintla photos are not allowed inside.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 19.02988,
        lng: -98.3197,
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Morning: Zócalo, Cathedral, Palafoxiana and Capilla del Rosario",
        "Lunch with mole poblano",
        "Afternoon: Cholula, pyramid and sanctuary at sunset",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: Puebla centre, Museo Amparo, Calle de los Dulces and Callejón de los Sapos in the evening",
        "Day 2: Cholula at dawn, pyramid and tunnels, Tonantzintla and Acatepec",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above",
        "Day 3: Talavera Uriarte in the morning, Loreto and Guadalupe forts, then Atlixco or the Baroque Museum",
      ] },
    ],
    zone: [
      {
        nome: "Puebla historic centre",
        perChi: "everything on foot",
        testo: "Hotels in colonial buildings around the Zócalo, with restaurants and museums close by.",
        fascia: "60-125 €",
      },
      {
        nome: "Cholula",
        perChi: "village feel and volcano views",
        testo: "Hostels and small hotels at the foot of the pyramid, some with a terrace facing Popocatépetl; in the evening there are student bars.",
        fascia: "35-90 €",
      },
      {
        nome: "Angelópolis",
        perChi: "those travelling by car",
        testo: "The modern area between Puebla and Cholula, with chain hotels, malls and the Baroque Museum; convenient for driving, but without charm.",
      },
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
    gite: [
      {
        nome: "Atlixco",
        distanza: "about 30 km from Cholula, 40 minutes",
        come: "By car or bus from Puebla.",
        testo: "A pueblo mágico of flower nurseries at the foot of Popocatépetl, with the Cerro de San Miguel and its chapel above the town. In November the poinsettia fields are in bloom.",
      },
      {
        nome: "Paso de Cortés",
        distanza: "about 1.5 hours from Cholula",
        come: "By car via San Nicolás de los Ranchos; the national park entry fee applies.",
        testo: "The pass at about 3,600 metres between Popocatépetl and Iztaccíhuatl, in the Izta-Popo National Park, starting point of trails towards Iztaccíhuatl. Popocatépetl itself cannot be climbed: check CENAPRED's alert light.",
      },
      {
        nome: "Cuetzalan",
        distanza: "about 3.5 hours from Puebla",
        come: "By bus or car; better with a night there.",
        testo: "A Sierra Norte town among mists and coffee farms, with a Sunday Nahua market, caves and waterfalls. It is far for a day trip, but it is Puebla at its greenest.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need for Puebla and Cholula?",
        risposta: "Two days: one for central Puebla and one for Cholula, with the pyramid and the churches of Tonantzintla and Acatepec. A third day adds the forts, Uriarte and Atlixco.",
      },
      {
        domanda: "Better to stay in Puebla or Cholula?",
        risposta: "Puebla has more museums, restaurants and colonial hotels; Cholula is smaller and lets you climb to the sanctuary at dawn, when the volcanoes show best. With two nights, do one in each.",
      },
      {
        domanda: "Can you do Puebla as a day trip from Mexico City?",
        risposta: "You can, with about 2 hours by bus each way, but you only see the centre. For Cholula in good light on the volcanoes you need at least one night.",
      },
      {
        domanda: "Are the Cholula pyramid tunnels open?",
        risposta: "Yes, they reopened in March 2026 after six years, with group visits. The archaeological zone opens Wednesday to Sunday 9 am-5 pm and costs 210 MXN for foreigners.",
      },
      {
        domanda: "When can you best see Popocatépetl?",
        risposta: "On clear mornings from November to February, at sunrise or sunset. At midday haze often hides it.",
      },
      {
        domanda: "When do you eat chiles en nogada?",
        risposta: "They are an August and September dish, the season for walnuts and pomegranate. The rest of the year few restaurants make them; mole poblano is always available.",
      },
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
    comeArrivare: "All the villages of the Tlacolula valley lie along Highway 190, the Pan-American road from Oaxaca towards Tehuantepec: Tule is about 10 km away, Teotitlán and Tlacolula 30, Mitla 45 and Hierve el Agua about 70, i.e. 1.5-2 hours' drive. The easiest way is a group tour from Oaxaca (roughly 600-900 MXN per person, about 30-45 €, entry fees excluded) or a car with driver. On your own you use the colectivos and buses that run along the 190; from Mitla, shared pickups go to Hierve el Agua.",
    comeSpostarsi: 'Colectivos between the towns; from Mitla, shared camionetas to Hierve el Agua.',
    periodoMigliore: 'all year; late October-early November for the altars in homes and the comparsas.',
    costi: "Group tour of the mezcal road 600-900 MXN per person, entry fees excluded; Mitla and Yagul 210 MXN, Dainzú and Lambityeco 145 MXN for foreigners (2026); Hierve el Agua 50-100 MXN between community fee and ticket, cash only; tastings at palenques often free. Rough daily budget per person: low 40-60 € (colectivos, village comedores, tickets); mid 80-120 € (tour or car, lunch at a restaurant in Teotitlán, a few purchases); high from 180 € (private driver and guide for the day).",
    erroriDaEvitare: [
      'Heading to Hierve el Agua without checking that it is open: closures from disputes between communities are frequent',
      'Driving after mezcal tastings',
      'Entering home altars without an invitation',
    ],
    luoghi: [
      {
        nome: "Árbol del Tule",
        testo: "A Montezuma cypress with the stoutest trunk in the world, in the churchyard of Santa María del Tule. The most serious estimates put it at 1,400 to 1,600 years old; local children point out animal shapes in the knots of the bark.",
        come: "Bus, colectivo or taxi from Oaxaca, about 10 km east, on the road to Mitla.",
        quando: "Morning, as the first stop.",
        tempo: "30 minutes",
        costo: "A few pesos to enter the enclosure (2026)",
        lat: 17.0465,
        lng: -96.63611,
      },
      {
        nome: "Dainzú",
        testo: "A small Zapotec site on a hillside, with stone slabs carved with figures of ballplayers wearing masks and gloves. It takes little time and you are almost always alone.",
        come: "Turn-off at km 23.5 of the 190, then 1.5 km south.",
        quando: "Morning, before the heat.",
        tempo: "45 minutes",
        costo: "145 MXN for foreigners, about 7 € (2026)",
        orari: "Daily 8 am-5 pm, last entry 4.30 pm",
        lat: 17.0037,
        lng: -96.55717,
        url: "https://lugares.inah.gob.mx/en/node/5739",
      },
      {
        nome: "Teotitlán del Valle",
        testo: "A Zapotec village of hand-woven wool rugs dyed with natural colours (cochineal, indigo, lichens). In family workshops you see the loom, the carding and the dye baths, and around the Day of the Dead you may see a home altar.",
        come: "Colectivo, taxi or tour from Oaxaca, about 30-40 minutes; the village is 4 km north of the 190.",
        quando: "Morning; enter home altars only if invited.",
        tempo: "1-2 hours",
        lat: 17.02917,
        lng: -96.52,
        consiglio: "Buy from family workshops, where you can see the work.",
      },
      {
        nome: "Lambityeco",
        testo: "A tiny Zapotec site beside the 190, with two shelters protecting stucco friezes and masks of the rain god Cocijo and of a noble couple. Photography is forbidden here.",
        come: "On the 190 at km 30.6, 2.5 km before Tlacolula.",
        quando: "A short stop on the way.",
        tempo: "30 minutes",
        costo: "145 MXN for foreigners, about 7 € (2026)",
        orari: "Daily 8 am-5 pm, last entry 4.30 pm",
        lat: 16.97167,
        lng: -96.49194,
        url: "https://lugares.inah.gob.mx/en/node/5709",
      },
      {
        nome: "Tlacolula Sunday market",
        testo: "One of the largest markets in the Valles Centrales: on Sundays the streets around the church fill with stalls of mezcal, bread, barbacoa, textiles and animals, with Zapotec women from the villages. Inside the covered market are the grilled-meat comedores.",
        come: "On the 190, about 30 km from Oaxaca; frequent colectivos on Sunday.",
        quando: "Sunday morning; 1 November 2026 falls on a Sunday.",
        tempo: "1.5-2 hours",
        costo: "Free",
        lat: 16.95428,
        lng: -96.47886,
      },
      {
        nome: "Yagul",
        testo: "A Zapotec city on a rocky hill, with a large ball court, the Palace of the Six Patios and a fortress on top with a view over the whole valley. The prehistoric caves around it are part of the Yagul and Mitla UNESCO site.",
        come: "Turn-off at km 36 of the 190, 1.2 km past Tlacolula.",
        quando: "Late afternoon for the light over the valley; it closes at 5 pm.",
        tempo: "1-1.5 hours",
        costo: "210 MXN for foreigners, about 10 € (2026)",
        orari: "Daily 8 am-5 pm, last entry 4 pm",
        lat: 16.95836,
        lng: -96.45014,
        url: "https://lugares.inah.gob.mx/en/node/5849",
      },
      {
        nome: "Santiago Matatlán",
        testo: "The village that calls itself the «world capital of mezcal», with dozens of palenques along the road. You see agave roasted in underground stone ovens, crushed with a horse-drawn stone wheel and distilled in copper or clay stills.",
        come: "On the 190, just south of the Mitla turn-off; with a tour or a car with driver.",
        quando: "Late morning, when the palenques are working.",
        tempo: "1-2 hours",
        costo: "Visit and tasting free or for a few pesos, with no obligation to buy (2026)",
        lat: 16.8661,
        lng: -96.38342,
        consiglio: "Whoever is driving doesn't drink: there are checkpoints.",
      },
      {
        nome: "Mitla",
        testo: "The Zapotec-Mixtec religious centre with geometric mosaics of stones fitted without mortar, unique in Mesoamerica, covering the palace walls. Next to it is the colonial church built on top of one of the complexes.",
        come: "Colectivo or tour from Oaxaca, about an hour; turn north at km 39 of the 190.",
        quando: "Morning or early afternoon.",
        tempo: "1-2 hours",
        costo: "210 MXN for foreigners, about 10 € (2026); tickets also online",
        orari: "Daily 8 am-5 pm, last entry 4.30 pm",
        lat: 16.92083,
        lng: -96.36167,
        url: "https://lugares.inah.gob.mx/en/node/5793",
      },
      {
        nome: "Hierve el Agua",
        testo: "Petrified waterfalls of calcium carbonate above a valley, with natural pools overlooking the drop. The site has been disputed for years between the communities of San Lorenzo Albarradas and San Isidro Roaguía and has had sudden closures, one from 2020 to October 2021.",
        come: "Tour from Oaxaca, car or shared pickup from Mitla; about 70 km and 1.5-2 hours from Oaxaca.",
        quando: "Morning, with fewer people; check it is open the week before.",
        tempo: "2-3 hours",
        costo: "50-100 MXN between community fee and ticket, about 3-5 €, cash only (2026)",
        lat: 16.86552,
        lng: -96.276,
        consiglio: "After rain or because of road blockades it may be closed: check first with your hotel or a local operator.",
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Árbol del Tule",
        "Teotitlán del Valle",
        "Mezcal at Santiago Matatlán",
        "Mitla, and Hierve el Agua if open",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: Tule, Dainzú, Teotitlán, Lambityeco and Yagul",
        "Day 2: Matatlán, Mitla and Hierve el Agua",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above, with the first on a Sunday for the Tlacolula market",
        "Day 3: Ocotlán valley with San Bartolo Coyotepec and San Martín Tilcajete",
      ] },
    ],
    zone: [
      {
        nome: "Central Oaxaca",
        perChi: "services and tour departures",
        testo: "The Valles are visited as day trips from Oaxaca: almost all tours start in the centre. During the Day of the Dead nights prices double or triple.",
        fascia: "75-175 €",
      },
      {
        nome: "Jalatlaco neighbourhood",
        perChi: "quiet close to the centre",
        testo: "Cobbled streets and colourful houses east of the centre, towards the exit for the 190: handy if you drive to the Valles.",
        fascia: "75-175 €",
      },
      {
        nome: "Teotitlán or Mitla",
        perChi: "those who want to stay in the valley",
        testo: "Small family guesthouses, peace and village life; handy for reaching Hierve el Agua early in the morning.",
      },
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
    gite: [
      {
        nome: "Ocotlán valley: San Bartolo Coyotepec and San Martín Tilcajete",
        distanza: "15-35 km south of Oaxaca",
        come: "By colectivo, taxi or tour on road 175 towards Ocotlán.",
        testo: "The other crafts valley: San Bartolo works barro negro, black pottery polished with stone; Tilcajete carves and paints alebrijes. On Friday there is the Ocotlán market.",
      },
      {
        nome: "San Agustín Etla",
        distanza: "about 40 minutes north of Oaxaca",
        come: "Taxi or tour; on the night of the muerteada, only with a tour that brings you back.",
        testo: "A hillside village with an old textile mill turned into an arts centre. On the night of 1 November it hosts the largest muerteada in the Valles Centrales, with hundreds of people in masks.",
      },
      {
        nome: "Monte Albán",
        distanza: "about 10 km from Oaxaca, 20-30 minutes",
        come: "Shuttles from the centre, taxi or tour.",
        testo: "The Zapotec capital on a levelled mountain above the city, with the Gran Plaza and views over the three valleys. It is the main archaeological visit from Oaxaca, to pair with a day in the Valles.",
      },
    ],
    faq: [
      {
        domanda: "Is Hierve el Agua open?",
        risposta: "In 2026 visitors describe it as open, but because of disputes between communities it can close without notice. Ask your hotel or a local operator the week before.",
      },
      {
        domanda: "Tour or on your own?",
        risposta: "A group tour (600-900 MXN plus entry fees) is the easiest way to see everything in a day without driving after mezcal. On your own you go by colectivo, with more time in the villages but more waiting.",
      },
      {
        domanda: "How much is the entry to Mitla?",
        risposta: "210 MXN for foreigners, open daily 8 am-5 pm with last entry at 4.30 pm (2026). Tickets can also be bought online.",
      },
      {
        domanda: "Are mezcal tastings free?",
        risposta: "At the Santiago Matatlán palenques almost always, or for a few pesos, with no obligation to buy. Artisanal mezcal is strong: drivers don't drink.",
      },
      {
        domanda: "When is the Tlacolula market?",
        risposta: "On Sunday, from morning until early afternoon. Plan your Valles day to pass through mid-morning.",
      },
      {
        domanda: "How many days do you need for the Valles Centrales?",
        risposta: "One day is enough for Tule, Teotitlán, Matatlán and Mitla; two days add Hierve el Agua, Yagul and the smaller sites without rushing.",
      },
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
    comeArrivare: "From Mexico City, first-class buses to Pátzcuaro leave from the Poniente and Norte terminals and go via Morelia on Highway 15D: about 4-5 hours. If you fly, you land in Morelia (MLM); from the city, buses to Pátzcuaro run often and take about an hour. Pátzcuaro's bus station is south of the center, a few minutes by taxi from the plazas. Road travel is for daylight only.",
    comeSpostarsi: 'Launches from the Muelle General to Janitzio; taxis and colectivos for the lake towns.',
    periodoMigliore: 'October 30 to November 2 for the Noche de Ánimas.',
    costi: "Daily budget per person, indicative for 2026 and outside the festival nights: low €45-65 (small hotel or guesthouse, market and comedores, colectivos); mid €90-140 (hotel in a colonial house in the center, taxis to the lake towns, restaurant dinners); high from €220 (boutique hotel, car with driver). Single items: boat to Janitzio about 100 MXN round trip; Tzintzuntzan 210 MXN and Ihuatzio 145 MXN for foreigners; Museo de Artes e Industrias Populares 145 MXN. Between October 31 and November 2 lodging costs much more and must be booked months ahead.",
    erroriDaEvitare: [
      "Deciding to go without having read Viaggiare Sicuri's updated card on Michoacán",
      'Traveling at night off the main roads',
      "Thinking you can combine Janitzio and Oaxaca's main nights on the same trip: they coincide",
    ],
    luoghi: [
      {
        nome: "Janitzio Island",
        testo: "The best-known island on the lake, a Purépecha fishing village whose houses climb in tiers up to the huge statue of José María Morelos, which you climb inside along a staircase painted with the story of the independence hero. On the night of November 1 the cemetery fills with candles, cempasúchil flowers and families keeping vigil: it is the most famous image of Día de los Muertos.",
        come: "By boat from the Muelle General in Pátzcuaro; on the island you walk up steep lanes lined with stalls.",
        quando: "By day in any season; on the night of November 1 for the vigil, with full boats and long waits at the pier.",
        tempo: "Half a day; on the vigil night until late",
        costo: "Boat about 100 MXN per person round trip, about €5 (2026)",
        orari: "Daytime boats roughly 9 am to 6 pm; on the festival nights service runs until late",
        lat: 19.57361,
        lng: -101.65194,
        consiglio: "During the vigil families pray beside the graves: no flash, and photos only after asking.",
      },
      {
        nome: "Muelle General",
        testo: "The lake's main pier, about three kilometers north of the center, where boats leave for Janitzio and the other islands. Around it are ticket booths, craft stalls and small restaurants frying charales and pescado blanco.",
        come: "By taxi or the colectivos marked «Muelle» from the center, about ten minutes.",
        quando: "Morning, before the groups arrive.",
        tempo: "30 minutes, plus the wait for the boat",
        costo: "Free",
        lat: 19.54332,
        lng: -101.61659,
      },
      {
        nome: "Plaza Vasco de Quiroga",
        testo: "Pátzcuaro's big square, one of the largest in Mexico, framed by colonial houses with arcades and red-tiled roofs. In the middle stands the fountain with the statue of Vasco de Quiroga, the bishop who in the 16th century organized the lake villages by craft: copper, lacquer, wood, textiles.",
        come: "On foot; it is the center of town.",
        quando: "Early morning or evening, when the lamps come on.",
        tempo: "1 hour",
        costo: "Free",
        lat: 19.5135,
        lng: -101.60877,
      },
      {
        nome: "Plaza Gertrudis Bocanegra and market",
        testo: "The «plaza chica», busier and more local than the big one, named after the independence heroine executed in Pátzcuaro in 1817. On its north side the market begins, with stalls of fruit, corundas, bread and crafts from the lake towns; during the Noche de Ánimas the artisan tianguis is set up here and in the main square.",
        come: "On foot, two blocks north of Plaza Vasco de Quiroga.",
        quando: "Morning, when the market is liveliest.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 19.51612,
        lng: -101.60886,
      },
      {
        nome: "Gertrudis Bocanegra Library",
        testo: "The public library occupies the former church of San Agustín. At the end of the nave is Juan O'Gorman's large mural of the history of Michoacán, from Purépecha origins to the revolution, one of the lesser-known reasons to stop in town.",
        come: "On foot, on Plaza Gertrudis Bocanegra.",
        quando: "By day, during library hours.",
        tempo: "30 minutes",
        costo: "Free",
        lat: 19.51661,
        lng: -101.6084,
      },
      {
        nome: "Basílica de Nuestra Señora de la Salud",
        testo: "The church Vasco de Quiroga intended as a cathedral, left unfinished and rebuilt several times. It keeps the image of the Virgen de la Salud, modeled with the Purépecha technique in corn-stalk paste, and draws pilgrims, especially around December 8.",
        come: "On foot, uphill east of the main square.",
        quando: "Morning; during mass, visit quietly.",
        tempo: "30 minutes",
        costo: "Free",
        lat: 19.51511,
        lng: -101.60615,
      },
      {
        nome: "Museo de Artes e Industrias Populares",
        testo: "The INAH museum occupies the Colegio de San Nicolás, founded by Vasco de Quiroga in the 16th century. It gathers lacquerware, hammered copper, ceramics, masks and textiles from the lake towns, and in the garden stands a troje, the traditional Purépecha wooden house.",
        come: "On foot, one block east of Plaza Vasco de Quiroga.",
        quando: "Morning, before touring the workshops.",
        tempo: "1 hour",
        costo: "145 MXN for foreigners, about €7; 80 MXN for Mexicans (2026)",
        orari: "Tuesday to Sunday 9 am-5 pm, closed Monday",
        lat: 19.51381,
        lng: -101.60715,
        url: "https://lugares.inah.gob.mx/en/node/4877",
      },
      {
        nome: "Casa de los Once Patios",
        testo: "An 18th-century former convent with a series of linked courtyards, now home to artisans' workshops: hand-painted lacquer, looms, copper, embroidery. Entry is free and you often see the sellers at work.",
        come: "On foot, a few blocks southeast of the main square.",
        quando: "Late morning, when the workshops are open.",
        tempo: "45 minutes",
        costo: "Free entry",
        lat: 19.51181,
        lng: -101.60808,
      },
      {
        nome: "Tzintzuntzan archaeological site",
        testo: "The ancient capital of the Purépecha kingdom, which held off the Aztecs and fell only with the arrival of the Spanish. On a large platform overlooking the lake stand the yácatas, bases with a mixed rectangular and circular plan; the small site museum is included in the ticket.",
        come: "By car or with the colectivos to Quiroga from central Pátzcuaro, about 25-30 minutes along the lakeshore.",
        quando: "Morning; on the night of October 31 the town cemetery hosts one of the most heartfelt vigils on the lake.",
        tempo: "1.5-2 hours",
        costo: "210 MXN for foreigners, about €10; 105 MXN for Mexicans (2026)",
        orari: "Daily 9 am-6 pm, last entry 5 pm",
        lat: 19.62314,
        lng: -101.57378,
        url: "https://lugares.inah.gob.mx/en/node/5791",
        consiglio: "In town, the Franciscan convent with its courtyard of olive trees is also worth a stop.",
      },
      {
        nome: "Ihuatzio archaeological site",
        testo: "A less visited Purépecha site on a plateau above the lake, with two large twin pyramids and long walls that also served as walkways. It is quiet and almost always empty, and the village of Ihuatzio has a cemetery that fills on the nights of the dead.",
        come: "By car or taxi from Pátzcuaro, about 20 minutes northeast.",
        quando: "Morning or late afternoon.",
        tempo: "1 hour",
        costo: "145 MXN for foreigners, about €7; 80 MXN for Mexicans (2026)",
        orari: "Daily 9 am-6 pm, last entry 5 pm",
        lat: 19.57778,
        lng: -101.62217,
        url: "https://lugares.inah.gob.mx/en/node/5482",
      },
      {
        nome: "Cerro del Estribo",
        testo: "The wooded hill west of town, a protected natural area, with a lookout over the lake and its islands. Locals walk up a long stairway, especially on weekends.",
        come: "By car or taxi to the parking area, then on foot up the stairway.",
        quando: "Early morning, when the air is clearest.",
        tempo: "1.5-2 hours",
        costo: "Free",
        lat: 19.51199,
        lng: -101.642,
        consiglio: "Go up in a group and by day, with no valuables on show.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Plaza Vasco de Quiroga, Museo de Artes e Industrias Populares and Casa de los Once Patios",
          "Lunch at the Plaza Gertrudis Bocanegra market and the library mural",
          "Afternoon: boat from the Muelle General to Janitzio and climb to the Morelos statue",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: the center, the Basílica and the market, then Janitzio in the afternoon",
          "Day 2: Tzintzuntzan with the yácatas and the convent, Ihuatzio on the way back",
        ],
      },
      {
        titolo: "3 days (October 30-November 1)",
        tappe: [
          "October 30: arrival, the center and the Noche de Ánimas artisan tianguis",
          "October 31: Tzintzuntzan by day and the vigil in its cemetery at night",
          "November 1: Ihuatzio or Santa Clara del Cobre by day, then the boat to Janitzio at night",
        ],
      },
    ],
    zone: [
      {
        nome: "Historic center",
        perChi: "everything on foot",
        testo: "Hotels and guesthouses in colonial buildings around the two plazas, with the market and restaurants a few steps away. On the festival nights prices rise sharply.",
        fascia: "€75-100",
      },
      {
        nome: "Colonial charm houses",
        perChi: "those who want a patio and a fireplace",
        testo: "A few boutique hotels in the old mansions of the center, with courtyards, fireplaces for cool evenings and large rooms.",
        fascia: "from €250",
      },
      {
        nome: "Toward the lake and the Muelle General",
        perChi: "those heading often to the islands",
        testo: "Hotels and posadas along Avenida Lázaro Cárdenas, closer to the pier but far from the plazas: in the evening you need a taxi.",
      },
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
    gite: [
      {
        nome: "Santa Clara del Cobre",
        distanza: "about 20 km south, half an hour",
        come: "By car or with the colectivos from the bus station.",
        testo: "The town of hand-hammered copper, with dozens of workshops where you watch pots, vases and lamps being made, and a museum devoted to the craft. In August it hosts the national copper fair.",
      },
      {
        nome: "Morelia",
        distanza: "about 60 km, 1 hour",
        come: "By first-class bus, frequent departures from the Pátzcuaro station.",
        testo: "The capital of Michoacán has a pink-stone historic center listed by UNESCO, with the cathedral, the aqueduct and the arcades. It works as a day trip, returning in daylight.",
      },
      {
        nome: "Tócuaro and Erongarícuaro",
        distanza: "10-20 km on the western shore",
        come: "By car or taxi along the lake road.",
        testo: "Two less visited Purépecha villages: Tócuaro is known for its carved and painted wooden masks, Erongarícuaro for its square and Franciscan convent.",
      },
    ],
    faq: [
      {
        domanda: "Is it safe to go to Pátzcuaro?",
        risposta: "The Italian Foreign Ministry advises against non-essential travel to Michoacán, and the state is at the highest level in US advisories too. The lake area is touristy and very busy during the festival, but anyone going should read the current advisories, travel only by day and stick to main roads.",
      },
      {
        domanda: "Which night is the Janitzio vigil?",
        risposta: "The vigil in the island cemetery is the night between November 1 and 2. October 31 is the night for Tzintzuntzan; Ihuatzio and Jarácuaro are less crowded alternatives.",
      },
      {
        domanda: "How do you get to Janitzio island?",
        risposta: "By boat from the Muelle General, north of the center, for about 100 MXN per person round trip. By day boats leave when full; on the festival nights the lines at the pier are long.",
      },
      {
        domanda: "How many days do you need?",
        risposta: "Two days are enough for the town, Janitzio and Tzintzuntzan. For the festival, arrive on October 30 and stay until November 2.",
      },
      {
        domanda: "Can you combine Janitzio and Oaxaca on the same trip?",
        risposta: "The main nights coincide, so you miss one of them. The most practical order is Pátzcuaro from October 30 to November 1, back to Mexico City on the 2nd for Mixquic, and Oaxaca after the festival.",
      },
      {
        domanda: "What do you eat in Pátzcuaro?",
        risposta: "Pescado blanco and fried charales from the lake, corundas and uchepos, sopa tarasca and carnitas from nearby Quiroga. At the market, breakfast is atole and bread.",
      },
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
    comeArrivare: "La Paz international airport (LAP) is about a dozen kilometres from the centre: from Mexico City the flight takes about 2 hours 15 minutes and costs roughly 1,500-3,500 MXN, about 75-175 € (2026); into town you take a taxi or the rental car, best picked up straight away. If you land at San José del Cabo (SJD), which has more international flights, the drive is about 2.5-3 hours. Baja Ferries arrive at the port of Pichilingue, 17 km north, from Mazatlán and Topolobampo.",
    comeSpostarsi: 'Rental car for beaches and surroundings; tour boats for the islands.',
    periodoMigliore: 'autumn to spring for the whale shark, when CONANP opens the season.',
    costi: "Rough daily budget per person for 2026: low 75-110 € (hostel or small hotel, fish tacos, shared car); mid 150-225 € (hotel on the seafront, one boat trip a day, seafood dinners); high from 350 € (resort towards Pichilingue, private trips). Single items: whale shark 1,500-2,500 MXN plus the sanctuary wristband (215 MXN in the 2025-2026 season); Espíritu Santo 2,500-3,500 MXN; Balandra 120 MXN; Regional Museum 145 MXN for foreigners.",
    erroriDaEvitare: [
      'Going to Balandra without having booked a shift',
      'Choosing an unauthorized whale shark operator',
      'Not keeping a spare day for the north wind',
    ],
    luoghi: [
      {
        nome: "Isla Espíritu Santo",
        testo: "An uninhabited archipelago within the UNESCO site of the islands and protected areas of the Gulf of California, with red cliffs, white-sand coves and snorkelling reefs. The day usually includes lunch on the beach at Ensenada Grande and stops along the coast, sometimes with dolphins or mantas.",
        come: "Boat tour from La Paz or Pichilingue with an authorised operator.",
        quando: "Early-morning departure; with strong north wind, trips are cancelled.",
        tempo: "Full day",
        costo: "Roughly 2,500-3,500 MXN per person, about 125-175 €, plus the park fee if not included (2026)",
        lat: 24.47139,
        lng: -110.3325,
        consiglio: "Keep a spare day in La Paz for wind cancellations.",
      },
      {
        nome: "Los Islotes",
        testo: "The rocks at the northern tip of the archipelago, home to a sea lion colony: you snorkel while the young ones come close out of curiosity and circle the swimmers. It is the stop everyone waits for on the Espíritu Santo day.",
        come: "Only by boat, as part of the Espíritu Santo tour; you get in where the operator says.",
        quando: "Morning, with a calm sea.",
        tempo: "1 hour in the water",
        consiglio: "The sea lion rules are strict: no touching, and keep away from females and adult males.",
      },
      {
        nome: "Whale sharks in La Paz bay",
        testo: "Swimming with whale sharks in the bay's refuge zone, near the El Mogote sandspit, only with authorised boats. You swim on the surface beside the animal, in small groups and in turns of a few minutes, without touching.",
        come: "Boat tour from the Malecón; check the operator is on CONANP's official list for the season.",
        quando: "Usually between autumn and spring, but the season only opens when CONANP counts enough sharks in the refuge: in 2025 it was suspended several times.",
        tempo: "Half a day",
        costo: "Roughly 1,500-2,500 MXN per person, about 75-125 €, plus the sanctuary wristband (215 MXN for foreigners in the 2025-2026 season)",
        lat: 24.163,
        lng: -110.362,
        consiglio: "Water is 20-22 °C in winter: a shorty wetsuit helps.",
      },
      {
        nome: "Playa Balandra",
        testo: "A shallow bay of turquoise water among red hills, known for its mushroom rock, inside a protected natural area. You can wade knee-deep for hundreds of metres; access is limited to protect the mangroves and dunes.",
        come: "By car or taxi from La Paz, about 25 minutes. Two sessions, 8 am-12 noon and 1-5 pm, with 450 people per session; book on CONANP's protected-areas portal.",
        quando: "Morning session, with less wind.",
        tempo: "Half a day",
        costo: "120 MXN per person per day, about 6 €; half for students (2026)",
        orari: "Sessions 8 am-12 noon and 1-5 pm, extended to 7 pm at Easter, in summer and in December",
        lat: 24.32068,
        lng: -110.3229,
        consiglio: "Bring water and food: nothing is sold on the beach, and you take your rubbish back.",
      },
      {
        nome: "Playa El Tecolote",
        testo: "The wide, open beach just past Balandra, with seafood restaurants on the sand, kayak rental and a view of Espíritu Santo. It has no sessions and is the alternative when Balandra is full.",
        come: "By car, about 30 minutes from La Paz, at the end of the Pichilingue road.",
        quando: "Afternoon, after the Balandra session.",
        tempo: "2-3 hours",
        costo: "Free",
        lat: 24.33622,
        lng: -110.31625,
      },
      {
        nome: "Playa Pichilingue",
        testo: "A small sheltered beach next to the ferry port, with palapas and seafood restaurants. The water is calm and shallow, good for a quick swim on the way to Balandra.",
        come: "By car, about 20 minutes from La Paz.",
        quando: "Lunch or late afternoon.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 24.28417,
        lng: -110.32861,
      },
      {
        nome: "La Paz Malecón",
        testo: "The city's seafront, about five kilometres of sculptures, cafés and cycle path, where families, cyclists and ice-cream sellers come out in the evening. Sunset over the Sea of Cortez, with the sculptures backlit, is the daily ritual.",
        come: "On foot from the centre; by rented bike.",
        quando: "Sunset.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 24.16752,
        lng: -110.3109,
      },
      {
        nome: "Playa El Coromuel",
        testo: "The town beach at the end of the Malecón, with a beach club, a water slide and palapas, where La Paz families go. The water is calm and shallow; the name comes from the evening wind that cools the bay.",
        come: "By bike or taxi from the centre, a few minutes.",
        quando: "Afternoon.",
        tempo: "1-2 hours",
        lat: 24.19623,
        lng: -110.3006,
      },
      {
        nome: "Cathedral and Jardín Velasco",
        testo: "The main square of the small centre, with its bandstand, the old government house and the Cathedral of Nuestra Señora de La Paz, built where the 18th-century Jesuit mission stood. Around it are the shops and taquerías of the centre.",
        come: "On foot, three blocks from the Malecón.",
        quando: "Morning or evening.",
        tempo: "30 minutes",
        costo: "Free",
        lat: 24.16167,
        lng: -110.31278,
      },
      {
        nome: "Regional Museum of Anthropology and History",
        testo: "The INAH museum of Baja California Sur, with reproductions of the cave paintings of the Sierra de San Francisco, the peninsula's peoples, the missions and the history of La Paz pearls. It gives context to a region visited mostly for the sea.",
        come: "On foot from the centre, at the corner of Altamirano and 5 de Mayo.",
        quando: "In the hot hours or on a windy day.",
        tempo: "1-1.5 hours",
        costo: "145 MXN for foreigners, about 7 € (2026)",
        orari: "Tuesday to Sunday 9 am-6 pm, closed Monday",
        lat: 24.15956,
        lng: -110.30881,
        url: "https://lugares.inah.gob.mx/en/node/5005",
      },
      {
        nome: "Whale and Marine Science Museum",
        testo: "A small museum on the seafront, with skeletons of whales and dolphins from the Sea of Cortez and panels on the species you meet on boat trips. A good introduction before the whale sharks or grey whales.",
        come: "On foot or by bike along the Malecón.",
        quando: "Afternoon.",
        tempo: "1 hour",
        lat: 24.14758,
        lng: -110.31842,
      },
      {
        nome: "Mercado Madero",
        testo: "The municipal market in the centre, with fish and fruit stalls and small comedores serving breakfast of fried fish tacos, the most typical breakfast in Baja, or machaca.",
        come: "On foot from the centre.",
        quando: "Morning.",
        tempo: "1 hour",
        lat: 24.15829,
        lng: -110.31553,
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Morning: Playa Balandra, 8 am session",
        "Seafood lunch at El Tecolote",
        "Sunset on the Malecón",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: whale sharks in the morning (in season), Balandra in the afternoon session, Malecón",
        "Day 2: Espíritu Santo and Los Islotes",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above",
        "Day 3: a buffer for the wind; if the sea is fine, Regional Museum, Mercado Madero and Playa El Coromuel, or Todos Santos",
      ] },
    ],
    zone: [
      {
        nome: "Centre and Malecón",
        perChi: "everything on foot",
        testo: "Hotels on the seafront and in the streets just behind, with restaurants and boat-trip agencies on foot. Mid-range seafront hotels are the most convenient choice.",
        fascia: "90-150 €",
      },
      {
        nome: "Old-centre streets",
        perChi: "lower budgets",
        testo: "Hostels and small hotels a few blocks from the sea, near the market and the taquerías.",
        fascia: "35-60 €",
      },
      {
        nome: "Towards Pichilingue and Costa Baja",
        perChi: "resorts and quiet",
        testo: "Resorts and quiet hotels to the north, on the beach road, further from the centre: you need a car.",
        fascia: "da 225 €",
      },
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
    gite: [
      {
        nome: "Todos Santos",
        distanza: "about 80 km, 1 hour",
        come: "By car on Federal Highway 19 towards the Pacific.",
        testo: "A pueblo mágico on the Pacific, with a historic centre of galleries, Cerritos beach for surfing and, in winter, turtle hatchling releases at sunset.",
      },
      {
        nome: "La Ventana and El Sargento",
        distanza: "about 45-60 minutes south-east",
        come: "By car towards the Sea of Cortez, over the sierra.",
        testo: "Two villages on the bay facing Isla Cerralvo, famous in winter for kitesurfing in the north wind. Even without the sport, the beach and the sunsets are worth the trip.",
      },
      {
        nome: "Magdalena Bay",
        distanza: "about 3 hours north-west",
        come: "By car to Puerto San Carlos or López Mateos, leaving at dawn; then a panga with local fishermen.",
        testo: "The lagoon where grey whales give birth: the official season runs from 1 January to 30 April, and from the boats you may see mothers and calves a few metres away. It can be a day trip, but a night there is better.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in La Paz?",
        risposta: "Three or four: one for Balandra and the Malecón, one for Espíritu Santo, one for the whale sharks in season and a spare one for the wind, which often cancels trips.",
      },
      {
        domanda: "When can you swim with whale sharks?",
        risposta: "Usually between autumn and spring, but the season only opens when CONANP counts enough animals in the bay, and it can be suspended. Before booking, check that it is open and the list of authorised operators.",
      },
      {
        domanda: "Do you need to book Playa Balandra?",
        risposta: "Yes, it's wise: entry is in two sessions (8 am-12 noon and 1-5 pm) of 450 people each, booked on CONANP's protected-areas portal. Entry costs 120 MXN.",
      },
      {
        domanda: "Do you need a car in La Paz?",
        risposta: "Not for the centre, but for Balandra, El Tecolote and the surroundings it is very handy. When renting, check the liability insurance, which is mandatory and often not included in the online price.",
      },
      {
        domanda: "La Paz or Los Cabos as a base?",
        risposta: "La Paz is quieter and cheaper and is the base for Espíritu Santo and the whale sharks; Los Cabos has resorts, nightlife and humpback whales. Many do both, with Todos Santos in between.",
      },
      {
        domanda: "How do you get to Los Islotes?",
        risposta: "Only by boat, on a day tour to Espíritu Santo from La Paz or Pichilingue, roughly 2,500-3,500 MXN per person. With strong north wind, trips are cancelled.",
      },
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
    comeArrivare: "Bahía Magdalena can only be reached by car. From La Paz it is about three hours northwest on Federal Highway 1 to Ciudad Constitución, then the turnoff to Puerto San Carlos or, farther north, to Puerto Adolfo López Mateos. From Loreto you cross the Sierra de la Giganta in about three hours. Águila buses reach Ciudad Constitución but not the villages; the nearest airports are La Paz (LAP) and Loreto (LTO), where it pays to rent a car.",
    periodoMigliore: 'winter, during the gray whale season: check dates with the cooperatives.',
    costi: "Daily budget per person, indicative for 2026: low €75-110 (motel in the village, fish in family restaurants, panga shared with others); mid €150-225 (morning trips on the lagoon, rental car with insurance); high from €350 (packaged tent camp on the islands, private boat). Single items: whale panga about 1,500-2,000 MXN per hour for the whole boat, up to 6-8 people; simple lodging 700-1,500 MXN a night. Cards barely work in the villages: bring cash in pesos.",
    erroriDaEvitare: [
      'Arriving without cash',
      'Planning outings in the afternoon, when the wind churns up the lagoon',
      'Driving in the evening on the road back',
    ],
    luoghi: [
      {
        nome: "Gray whales at Puerto Adolfo López Mateos",
        testo: "In the northern part of the bay, near the mouth that opens onto the Pacific, gray whale mothers spend the winter with their newborn calves. The cooperative pangas reach the whale area quickly, and the whales often approach the boat on their own, sometimes close enough to be touched.",
        come: "Panga with the pier cooperatives, guide on board; you pay per boat and can share with other travelers.",
        quando: "Official season January 1 to April 30; the best period is mid-February to late March. Mornings are best, with the lagoon flat.",
        tempo: "1.5-3 hours on the water",
        costo: "About 1,500-2,000 MXN per hour for the whole boat, up to 6-8 people, about €75-100 (2026)",
        lat: 25.19278,
        lng: -112.11056,
        consiglio: "The whales decide on contact: stay seated in the boat, without leaning out or chasing them.",
      },
      {
        nome: "Gray whales from Puerto San Carlos",
        testo: "From the town in the middle of the bay, longer trips leave that take in the whale areas, the mangroves and the barrier islands. It is the alternative to López Mateos when boats there are full or wind closes the mouth.",
        come: "Panga with the port operators; times are agreed the evening before.",
        quando: "January to April, morning departure.",
        tempo: "Half a day",
        costo: "A 2025 offer was about 8,000 MXN for a boat of up to 8 people for about six hours, about €400",
        lat: 24.78958,
        lng: -112.10768,
      },
      {
        nome: "The village of López Mateos",
        testo: "A fishing village built around the pier, with low houses, pangas pulled up on shore and a few comedores. Between late January and early February it hosts the gray whale festival, with music and food.",
        come: "By car; the cooperatives' pier is at the end of the village.",
        quando: "During whale season; out of season it is almost deserted.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 25.19278,
        lng: -112.11056,
        consiglio: "In 2026 the festival ran from January 30 to February 1: dates change every year.",
      },
      {
        nome: "Puerto San Carlos",
        testo: "The largest town on the bay, with a commercial port, gas stations, small hotels and seafood restaurants. It is the most convenient base for those who want services and more choice for sleeping and eating.",
        come: "By car, about an hour from Ciudad Constitución.",
        quando: "Year-round; livelier in winter.",
        tempo: "Half a day",
        costo: "Free",
        lat: 24.78958,
        lng: -112.10768,
      },
      {
        nome: "Isla Magdalena dunes",
        testo: "The long sand island that closes the bay toward the ocean. You land from the panga and cross the dunes to the Pacific beach: on one side the calm whale lagoon, on the other the open surf, with shells and animal tracks in the sand.",
        come: "Only by panga, often as a stop during the whale trip.",
        quando: "Morning, before the wind picks up.",
        tempo: "1-2 hours",
        lat: 24.90242,
        lng: -112.22122,
        consiglio: "Light closed shoes and water: there is no shade on the dunes.",
      },
      {
        nome: "Mangrove channels",
        testo: "North of López Mateos the lagoon narrows into mangrove-lined channels where herons, pelicans, frigatebirds and ospreys nest. The panga trips are calm and work outside whale season too.",
        come: "By panga with the López Mateos cooperatives, also combined with the whales.",
        quando: "Early morning or late afternoon, for the birds.",
        tempo: "1-2 hours",
      },
      {
        nome: "Isla Santa Margarita",
        testo: "The southernmost barrier island, long and almost uninhabited, closing off the southern part of the bay. Trips from Puerto San Carlos run along its beaches and cliffs, with good chances of seeing dolphins and seabirds.",
        come: "By panga from Puerto San Carlos, with an operator.",
        quando: "Morning, with calm seas.",
        tempo: "Half a day",
        lat: 24.41524,
        lng: -111.78906,
      },
      {
        nome: "Ciudad Constitución",
        testo: "The farming town of the Santo Domingo valley, seat of the municipality of Comondú, is the obligatory stop on the way to the bay. It has no particular sights, but it has ATMs, supermarkets, gas stations and a few hotels on the Transpeninsular.",
        come: "On Federal Highway 1, about two and a half hours from La Paz.",
        quando: "A stop on the way in, for cash and fuel.",
        tempo: "1 hour",
        lat: 25.03222,
        lng: -111.67028,
        consiglio: "Fill up and withdraw cash here: gas stations and ATMs are scarce in the bay villages.",
      },
    ],
    programmi: [
      {
        titolo: "1 day (from La Paz)",
        tappe: [
          "Leave La Paz at dawn, stop in Ciudad Constitución",
          "Late morning: whale panga trip from López Mateos or San Carlos",
          "Seafood lunch at the port and back to La Paz before dark",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: arrival, a walk around the village and an afternoon trip if the lagoon is calm",
          "Day 2: dawn trip with a stop on the Isla Magdalena dunes, lunch and the road to Loreto or La Paz",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above, at López Mateos",
          "Day 3: Puerto San Carlos, mangroves or Isla Santa Margarita by panga, then departure",
        ],
      },
    ],
    zone: [
      {
        nome: "Puerto Adolfo López Mateos",
        perChi: "those who want to be near the whales",
        testo: "A few simple lodgings and small motels steps from the cooperatives' pier. In whale season they fill up: book ahead.",
        fascia: "€35-75",
      },
      {
        nome: "Puerto San Carlos",
        perChi: "those looking for more services",
        testo: "More hotels, restaurants and shops, and closer to Ciudad Constitución and the southern part of the bay.",
        fascia: "€35-75",
      },
      {
        nome: "Tent camps on the islands",
        perChi: "those who want to sleep on the lagoon",
        testo: "Organized camps on the bay islands, sold as packages with meals and boat trips: the top end of the area.",
      },
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
    gite: [
      {
        nome: "Loreto",
        distanza: "about 3 hours northeast",
        come: "By car via Ciudad Constitución and the Sierra de la Giganta, in daylight only.",
        testo: "The Pueblo Mágico on the Sea of Cortez is the natural next stop after the bay, with its 1697 mission and, from mid-January to late March, blue whales in the marine park.",
      },
      {
        nome: "La Paz",
        distanza: "about 3 hours southeast",
        come: "By car on Federal Highway 1.",
        testo: "The capital of Baja California Sur, with the Malecón, Playa Balandra, Espíritu Santo and whale sharks in season. Many use it as a base and come to the bay for the day.",
      },
    ],
    faq: [
      {
        domanda: "When can you see gray whales in Bahía Magdalena?",
        risposta: "The official season runs from January 1 to April 30. The period with the most mothers and calves in the lagoon is mid-February to late March.",
      },
      {
        domanda: "Can you do it as a day trip from La Paz?",
        risposta: "Yes, leaving at dawn: it is about three hours each way. With a night in a village you get two trips on the water and drive less tired.",
      },
      {
        domanda: "López Mateos or Puerto San Carlos?",
        risposta: "López Mateos is closer to the whale area and trips are short; San Carlos has more hotels and services and longer trips that also visit the islands.",
      },
      {
        domanda: "How much does the boat trip cost?",
        risposta: "You pay per boat, not per person: about 1,500-2,000 MXN per hour for a panga for up to 6-8 people. At the pier you can join other travelers to split the cost.",
      },
      {
        domanda: "Can you touch the whales?",
        risposta: "Mothers sometimes approach with their calves and let themselves be touched, but it is their choice. Licensed boats follow rules on time and distance and do not chase the animals.",
      },
      {
        domanda: "Do you need cash?",
        risposta: "Yes: cards barely work in the villages and the cooperatives want cash in pesos. Withdraw in Ciudad Constitución.",
      },
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
    comeArrivare: "Loreto's small airport (LTO) has flights mainly from the United States and Tijuana. On a road trip you arrive by car: from La Paz it is about 4.5-5 hours on Federal Highway 1 via Ciudad Constitución, from Bahía Magdalena about 3 hours across the Sierra de la Giganta. Águila buses stop in town along the Transpeninsular. Gas stations are few between Ciudad Constitución and Loreto: fill up before.",
    periodoMigliore: 'winter for the whales: check the season with the operators.',
    costi: "Daily budget per person, indicative for 2026: low €75-110 (small hotel in the center, fish tacos, shared car); mid €150-225 (hotel near the malecón, one boat trip a day); high from €350 (resort in Nopoló, private trips). Single items: blue whales from about 3,000 MXN per person; Isla Coronado about 70 dollars per person (about 1,250 MXN); Museo de las Misiones 145 MXN for foreigners; marine park wristband extra if not included; mid-range lodging 1,200-2,500 MXN a night.",
    erroriDaEvitare: [
      'Arriving in Loreto without having filled up on the stretch from Ciudad Constitución',
      'Booking with operators without a park permit',
    ],
    luoghi: [
      {
        nome: "Misión de Nuestra Señora de Loreto",
        testo: "The first mission of the Californias, founded in 1697 by the Jesuit Juan María de Salvatierra: from here began the expansion that reached as far as San Francisco. The stone church, built between 1740 and 1744, is still the center of town life, with the statue of the Virgen de Loreto on the altar.",
        come: "On foot from the center, on Calle Salvatierra.",
        quando: "Morning, together with the museum next door.",
        tempo: "30 minutes",
        costo: "Free entry",
        lat: 26.01043,
        lng: -111.34336,
      },
      {
        nome: "Museo de las Misiones",
        testo: "The INAH museum next to the mission tells the story of the Jesuits in Baja California: maps, weapons, mission tools, sacred art and the life of the peninsula's peoples before the Europeans arrived. It makes sense of the missions scattered across the sierra.",
        come: "On foot, beside the church.",
        quando: "Morning: it closes early in the afternoon.",
        tempo: "45 minutes-1 hour",
        costo: "145 MXN for foreigners, about €7; 80 MXN for Mexicans, free on Sundays for Mexicans (2026)",
        orari: "Tuesday to Saturday 9 am-3 pm, closed Sunday and Monday",
        lat: 26.01028,
        lng: -111.34366,
        url: "https://lugares.inah.gob.mx/en/node/5176",
      },
      {
        nome: "Loreto Malecón",
        testo: "The town's seafront, quiet and tidy, with benches, palms and the pier where the lancheros leave from. Here the Sea of Cortez faces east, and the best time is dawn, when the sun rises behind Isla del Carmen.",
        come: "On foot from the center.",
        quando: "Dawn or evening.",
        tempo: "1 hour",
        costo: "Free",
        lat: 26.01059,
        lng: -111.33909,
      },
      {
        nome: "Blue whales in Parque Nacional Bahía de Loreto",
        testo: "In winter the blue whale, the largest animal that has ever lived, feeds in the park's waters, along with fin whales and pods of dolphins. The marine park is part of the UNESCO site of the islands and protected areas of the Gulf of California.",
        come: "Boat trip from the malecón with licensed lancheros; boats keep their distance under park rules.",
        quando: "Mid-January to late March, early-morning departure with calm seas.",
        tempo: "About 5 hours",
        costo: "From about 3,000 MXN per person, about €150, plus the park wristband if not included (2026)",
        lat: 25.86417,
        lng: -111.12167,
        consiglio: "Sightings are not guaranteed: keep a second day free to try again.",
      },
      {
        nome: "Isla Coronado",
        testo: "The island closest to town, an old volcano with a white beach and clear water on its sheltered side. A colony of sea lions lives on the rocks, and on the crossing you often meet dolphins.",
        come: "By boat from the malecón with a licensed operator.",
        quando: "Morning, with calm seas.",
        tempo: "Half a day",
        costo: "About 70 dollars per person, about 1,250 MXN or €60, park wristband excluded (2026)",
        lat: 26.11792,
        lng: -111.27352,
      },
      {
        nome: "Isla del Carmen",
        testo: "The largest island in the park, uninhabited, with old salt works that operated until the last century, sandy bays and red cliffs. Boat trips explore its coast with snorkeling stops.",
        come: "By boat from Loreto with a licensed operator.",
        quando: "Morning; with a north wind, trips are canceled.",
        tempo: "Full day",
        lat: 25.93961,
        lng: -111.17611,
      },
      {
        nome: "Isla Danzante",
        testo: "A small, narrow, mountainous island off Puerto Escondido, with coves for kayaking and reefs for snorkeling. It is the easiest destination for paddling in the park.",
        come: "By kayak or boat from Puerto Escondido, about 25 km south of Loreto.",
        quando: "Morning, before the wind.",
        tempo: "Half a day",
        lat: 25.7884,
        lng: -111.25067,
      },
      {
        nome: "Nopoló",
        testo: "The planned tourist zone south of town, with resorts, a golf course and a long beach on the bay. It is quieter than the center and has the services of the big hotels.",
        come: "By car, about 10 minutes south of Loreto.",
        quando: "Afternoon at the beach.",
        tempo: "2-3 hours",
        lat: 25.93094,
        lng: -111.35963,
      },
      {
        nome: "Puerto Escondido",
        testo: "An almost enclosed natural harbor at the foot of the Sierra de la Giganta, with a marina where Sea of Cortez sailboats stop. Trips leave from here to Isla Danzante and the southern coast of the park.",
        come: "By car, about half an hour south of Loreto on Federal Highway 1.",
        quando: "Morning.",
        tempo: "1-2 hours",
        lat: 25.81433,
        lng: -111.31209,
      },
      {
        nome: "Playa Juncalito",
        testo: "A quiet beach south of Loreto, with fishermen's pangas on the sand and the sierra behind. You swim in calm water and look at the park's islands from the shore.",
        come: "By car, about 20 minutes south of Loreto.",
        quando: "Afternoon.",
        tempo: "2 hours",
        costo: "Free",
        lat: 25.83308,
        lng: -111.33107,
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: mission, Museo de las Misiones and malecón",
          "Seafood lunch in the center",
          "Afternoon: Isla Coronado by boat, if the sea is calm",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: blue whale trip (in season), then the mission and the malecón",
          "Day 2: Isla Coronado in the morning, Misión San Javier by car in the afternoon",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: spare day to try again for whales, or Puerto Escondido, kayaking at Isla Danzante and Playa Juncalito",
        ],
      },
    ],
    zone: [
      {
        nome: "Historic center and malecón",
        perChi: "everything on foot",
        testo: "Small hotels and posadas near the mission and the seafront, with restaurants and the lancheros' stands a few steps away.",
        fascia: "€60-125",
      },
      {
        nome: "Nopoló",
        perChi: "resorts and calm",
        testo: "Resorts and vacation homes on the beach, with a golf course: you need a car to get into town.",
      },
      {
        nome: "Toward Puerto Escondido and Juncalito",
        perChi: "kayaking and the sea",
        testo: "Vacation rentals and campgrounds along the southern coast, handy for trips to Isla Danzante.",
      },
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
    gite: [
      {
        nome: "Misión San Javier",
        distanza: "about 1.5 hours by car",
        come: "By car or on a tour, on the mountain road through the Sierra de la Giganta.",
        testo: "The mission founded in 1699 and built in stone between 1744 and 1758 is one of the best preserved on the peninsula, in a ranch village among canyons and palms. The road is narrow and winding: drive by day.",
      },
      {
        nome: "Bahía Magdalena",
        distanza: "about 3 hours southwest",
        come: "By car via Ciudad Constitución, leaving at dawn.",
        testo: "The Pacific lagoons where gray whales give birth, from January 1 to April 30. Better with a night in López Mateos or San Carlos.",
      },
      {
        nome: "Laguna San Ignacio",
        distanza: "about 4 hours north",
        come: "By car on the Transpeninsular, as a 2-3 day extension.",
        testo: "The lagoon where close encounters with gray whales are most frequent, inside the El Vizcaíno Biosphere Reserve, with tent camps on the shore.",
      },
    ],
    faq: [
      {
        domanda: "When can you see blue whales in Loreto?",
        risposta: "From mid-January to late March. Trips last about five hours and cost from about 3,000 MXN per person; sightings are not guaranteed.",
      },
      {
        domanda: "How many days do you need in Loreto?",
        risposta: "Two days for the blue whales, the mission and Isla Coronado; three if you want a spare day for the sea or a relaxed visit to San Javier.",
      },
      {
        domanda: "How do you get to Isla Coronado?",
        risposta: "By boat from the malecón with a licensed operator, about half a day and about 70 dollars per person. The marine park wristband is often extra.",
      },
      {
        domanda: "Do you need a car in Loreto?",
        risposta: "Not for the town, but yes for San Javier, Puerto Escondido and the beaches to the south. When renting, check the third-party liability insurance, which is mandatory and often left out of online prices.",
      },
      {
        domanda: "Are the museum and the mission open every day?",
        risposta: "The church is, with free entry. The Museo de las Misiones opens Tuesday to Saturday from 9 am to 3 pm and costs 145 MXN for foreigners.",
      },
      {
        domanda: "Can you fly to Loreto?",
        risposta: "Yes, Loreto airport has flights mainly from the United States and Tijuana. From Europe it is easier to fly to La Paz or San José del Cabo and drive up.",
      },
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
    comeArrivare: "Todos Santos is on Federal Highway 19, about an hour by car from both La Paz (80 km) and Cabo San Lucas. The nearest airports are La Paz (LAP) and San José del Cabo (SJD), with more international flights: at either one, pick up the rental car right away. Buses linking La Paz and Cabo San Lucas along the Pacific stop in town, but you need a car for Cerritos and the beaches.",
    periodoMigliore: 'November to April.',
    costi: "Daily budget per person, indicative for 2026: low €75-110 (guesthouse, fish tacos, shared car); mid €150-225 (charming hotel in the center, surf lesson, restaurant dinners); high from €350 (boutique hotel and chef-driven cooking). Single items: hotels in the center 2,000-5,000 MXN a night, about €100-250; turtle release for a small cash donation. Staying here costs less than in Los Cabos.",
    erroriDaEvitare: ['Swimming on the open Pacific beaches outside Cerritos: strong currents'],
    luoghi: [
      {
        nome: "Historic center and galleries",
        testo: "The old sugarcane town, now a Pueblo Mágico, with low colonial houses, art galleries, boutiques and cafés along Calles Juárez, Centenario and Topete. You can walk it in an hour, but it is worth staying until evening, when the galleries open and the streets come alive.",
        come: "On foot.",
        quando: "Late afternoon and evening.",
        tempo: "Half a day",
        costo: "Free",
        consiglio: "Galleries keep variable hours and some close in summer.",
      },
      {
        nome: "Misión de Nuestra Señora del Pilar",
        testo: "The mission church, founded by the Jesuits in the 18th century and rebuilt several times, looks onto the town square. Inside is the image of the Virgen del Pilar, celebrated on October 12 with the patron saint's festival.",
        come: "On foot, on the square.",
        quando: "Morning or evening.",
        tempo: "20 minutes",
        costo: "Free entry",
        lat: 23.44978,
        lng: -110.22557,
      },
      {
        nome: "Teatro Cine General Manuel Márquez de León",
        testo: "The town's old theater and cinema, next to the square, with its restored period façade. It hosts shows, concerts and cultural festival events.",
        come: "On foot, next to the mission.",
        quando: "Evening, if there is a show.",
        tempo: "20 minutes from outside",
        lat: 23.45043,
        lng: -110.22556,
      },
      {
        nome: "Hotel California",
        testo: "The town's most famous building, a hotel with a blue façade and a bar under the arcades. The link with the Eagles song exists only in legend, but it has made it a stop for many visitors.",
        come: "On foot, on Calle Juárez.",
        quando: "Evening, for a drink.",
        tempo: "30 minutes",
        lat: 23.44892,
        lng: -110.22568,
      },
      {
        nome: "Centro Cultural Profesor Néstor Agúndez",
        testo: "The cultural center occupies an old school with murals on its façade and houses the regional history museum, a reconstructed Southern Baja ranch house, a photo archive and a picture gallery. It tells the story of the town before the surfers and galleries.",
        come: "On foot, a few blocks from the square.",
        quando: "Morning.",
        tempo: "45 minutes",
        lat: 23.45089,
        lng: -110.22356,
      },
      {
        nome: "Playa Cerritos",
        testo: "A Pacific bay sheltered by a rocky point, the only one in the area where you can swim with some safety. The waves suit beginners, and on the beach there are surf schools, board rentals and restaurants.",
        come: "By car or taxi, about 15 minutes south of Todos Santos; parking on the beach.",
        quando: "Early morning for lessons, when the waves are gentler.",
        tempo: "Half a day",
        lat: 23.32964,
        lng: -110.17617,
        consiglio: "Even here, swim near the lifeguards and away from the rocks, where currents are stronger.",
      },
      {
        nome: "Playa Punta Lobos",
        testo: "The fishermen's beach, just south of town, where at midday the pangas ride the waves back in and unload the catch. From a rocky point you see the whole coast; swimming is dangerous.",
        come: "By car on a dirt track, about 10 minutes from the center.",
        quando: "Late morning, for the boats coming in.",
        tempo: "1 hour",
        costo: "Free",
        lat: 23.41474,
        lng: -110.23049,
      },
      {
        nome: "Playa Las Palmas",
        testo: "A secluded beach backed by a palm grove, between two rocky points, reached on a short walk. It is one of the most beautiful in the area at sunset, but the sea has strong currents.",
        come: "By car heading south, then on foot for the last stretch.",
        quando: "Late afternoon.",
        tempo: "2 hours",
        costo: "Free",
        lat: 23.38987,
        lng: -110.21273,
      },
      {
        nome: "Playa La Pastora",
        testo: "The beach north of town, long and open, used by experienced surfers and by those who come to watch the sunset over the Pacific. In winter you may see humpback whales blowing offshore.",
        come: "By car heading north on a dirt road, 10-15 minutes.",
        quando: "Sunset.",
        tempo: "1-2 hours",
        costo: "Free",
        consiglio: "For looking only: currents and breakers make swimming dangerous.",
      },
      {
        nome: "Turtle release",
        testo: "In the hatching seasons, the town's conservation projects release into the sea, at sunset, the turtles born in their hatcheries, in winter mostly leatherbacks and olive ridleys. The hatchlings are set on the sand and reach the water on their own.",
        come: "With local projects, such as Tortugueros Las Playitas, north of town; dates depend on the hatchings and are announced a few hours ahead.",
        quando: "At sunset, in the hatching months.",
        tempo: "1 hour",
        costo: "Small cash donation",
        consiglio: "Do not touch the hatchlings, and use no flash or flashlights.",
      },
      {
        nome: "El Pescadero",
        testo: "The farming village south of Todos Santos, among organic farms, fruit stands and small restaurants. It is the base for Cerritos and for the Sierra de la Laguna trails.",
        come: "By car, about 15 minutes south on Federal Highway 19.",
        quando: "Morning, for the farm stands.",
        tempo: "1-2 hours",
        lat: 23.36417,
        lng: -110.16833,
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Playa Cerritos and a surf lesson",
          "Afternoon: the mission, the Centro Cultural and the galleries in the center",
          "Sunset at La Pastora, dinner in town",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: historic center, Punta Lobos for the pangas coming in, sunset at Las Palmas",
          "Day 2: Cerritos and El Pescadero, turtles at sunset in season",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: a hike in the Sierra de la Laguna, or a day in La Paz or Cabo San Lucas",
        ],
      },
    ],
    zone: [
      {
        nome: "Historic center",
        perChi: "charm and restaurants on foot",
        testo: "Small charming hotels in the mid and upper range and a few budget guesthouses, steps from the galleries and restaurants.",
        fascia: "€100-250",
      },
      {
        nome: "El Pescadero and Cerritos",
        perChi: "surf",
        testo: "Vacation rentals, small hotels and campgrounds near the Cerritos waves: you are in swimwear all day, but you need a car for dinner.",
      },
      {
        nome: "La Pastora and Las Playitas",
        perChi: "those who want silence",
        testo: "Houses and villas scattered north of town, among palm groves and empty beaches, reached on dirt roads.",
      },
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
    gite: [
      {
        nome: "La Paz",
        distanza: "about 80 km, 1 hour",
        come: "By car on Federal Highway 19.",
        testo: "The Malecón, Playa Balandra and, in season, whale sharks; with an extra day, Espíritu Santo and the sea lions of Los Islotes.",
      },
      {
        nome: "Cabo San Lucas",
        distanza: "about 1 hour south",
        come: "By car on Federal Highway 19.",
        testo: "The boat to El Arco and, from December to April, humpback whale trips. It is the most touristy and expensive part of the peninsula.",
      },
      {
        nome: "Sierra de la Laguna",
        distanza: "a few kilometers inland",
        come: "By car to the trailheads on the El Pescadero side, ideally with a guide.",
        testo: "The biosphere reserve behind the coast, with oak and pine forests above the desert. Short walks work as a day trip; the trek to the lagoon at the top takes two days.",
      },
    ],
    faq: [
      {
        domanda: "Can you swim in Todos Santos?",
        risposta: "Not on the beaches in front of town: currents and breakers are strong. You swim at Playa Cerritos, 15 minutes south, near the lifeguards.",
      },
      {
        domanda: "When are the turtles released?",
        risposta: "In the hatching seasons, at sunset, with the town's conservation projects. Dates depend on the eggs and are announced a few hours ahead: ask as soon as you arrive.",
      },
      {
        domanda: "Todos Santos or Los Cabos as a base?",
        risposta: "Todos Santos is quieter and cheaper, with galleries, surf and empty beaches; Los Cabos has resorts, nightlife and humpback whale trips. They are an hour apart.",
      },
      {
        domanda: "How many days do you need?",
        risposta: "One day is enough for the center and Cerritos; two allow for sunsets, turtles in season and a slower pace.",
      },
      {
        domanda: "Is Hotel California the one from the song?",
        risposta: "No, the link with the Eagles track exists only in legend. The hotel is still one of the most photographed buildings in town.",
      },
      {
        domanda: "When should you go to Todos Santos?",
        risposta: "From November to April, with dry days and whales offshore. From mid-May to November it is Pacific hurricane season.",
      },
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
    comeArrivare: "San José del Cabo international airport (SJD) has flights to Mexico City, with connections to Europe, and many direct flights to the United States. From the airport it takes about 20 minutes to central San José and about 45 to Cabo San Lucas along the Corridor; you go by rental car, pre-booked shuttle or authorised terminal taxi. From Todos Santos it is about an hour's drive, from La Paz 2.5-3 hours. In the arrivals hall, timeshare sellers offer «transport» and gifts: walk straight past.",
    periodoMigliore: 'winter for the humpbacks.',
    costi: "This is the most expensive part of Baja, with many prices in dollars (paying in pesos is better). Rough daily budget per person for 2026: low 90-130 € (simple hotel in San José, street tacos, buses); mid 180-260 € (mid-range hotel, car, one boat trip); high from 400 € (resort on the Corridor, private boats). Whale watching on shared boats 80-130 dollars per person, about 70-110 €; water-taxi trip to El Arco at a price agreed in advance.",
    erroriDaEvitare: [
      'Stopping for timeshare salespeople at the airport and in the Marina',
      'Underestimating the prices, which are very high',
    ],
    luoghi: [
      {
        nome: "El Arco",
        testo: "The rock formation at the tip of the peninsula, where the Sea of Cortez meets the Pacific, with a sea lion colony on the nearby rocks. It can only be seen from the sea, on a boat trip of under an hour.",
        come: "Water taxi from the Marina or Médano beach; agree the price first.",
        quando: "Morning, when the sea is calmer.",
        tempo: "1 hour",
        lat: 22.87602,
        lng: -109.89456,
      },
      {
        nome: "Playa del Amor",
        testo: "The narrow beach between two seas hidden behind El Arco. The Sea of Cortez side is sheltered; the Pacific side, Playa del Divorcio, has very strong waves and currents and is unsafe for swimming.",
        come: "By water taxi, asking the boatman to come back for you at a set time.",
        quando: "Morning; in rough seas landing is not always possible.",
        tempo: "1-2 hours",
        consiglio: "Swim only on the Sea of Cortez side.",
      },
      {
        nome: "Cabo San Lucas Marina",
        testo: "The marina around which Cabo San Lucas revolves, with yachts, sport-fishing boats, restaurants and waterfront bars. Boats for El Arco and whale watching leave from here; in the evening it is the centre of the nightlife.",
        come: "On foot from central Cabo San Lucas.",
        quando: "Morning for the boats, evening for the bars.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 22.88251,
        lng: -109.9105,
        consiglio: "Timeshare sellers offer «free» trips in exchange for a half-day presentation: walk on.",
      },
      {
        nome: "Playa El Médano",
        testo: "The long beach on Cabo San Lucas bay, with calm water, beach clubs, water sports and a view of El Arco. It is the liveliest and one of the few in the area where swimming is safe.",
        come: "On foot from the Marina, 10-15 minutes.",
        quando: "Morning for calm, afternoon for atmosphere.",
        tempo: "Half a day",
        costo: "Free",
        lat: 22.89506,
        lng: -109.89362,
      },
      {
        nome: "Playa Chileno",
        testo: "A bay on the Corridor between the two towns, sheltered and with a small reef: you snorkel from the beach among tropical fish. It has public access with parking, toilets and shade.",
        come: "By car or bus on the Corridor road, about 20 minutes from Cabo San Lucas.",
        quando: "Early morning, before the boat groups arrive.",
        tempo: "2-3 hours",
        costo: "Free",
        lat: 22.94984,
        lng: -109.80708,
      },
      {
        nome: "Playa Santa María",
        testo: "A horseshoe bay between two rocky headlands, protected for snorkelling, with clear water and shoals of fish a few metres from the shore. It is smaller and quieter than Chileno.",
        come: "By car on the Corridor, just west of Chileno; public car park above.",
        quando: "Morning.",
        tempo: "2-3 hours",
        costo: "Free",
        lat: 22.92973,
        lng: -109.81624,
      },
      {
        nome: "Playa Palmilla",
        testo: "The San José del Cabo beach with the calmest water, sheltered by a rocky point, with fishermen's boats and a public stretch for swimming. Handy for a last morning before your flight.",
        come: "By car or taxi, about 10 minutes from central San José.",
        quando: "Morning.",
        tempo: "2 hours",
        costo: "Free",
        lat: 23.01365,
        lng: -109.71799,
      },
      {
        nome: "Central San José del Cabo",
        testo: "The colonial, quiet side of Los Cabos, with Plaza Mijares, the mission founded by the Jesuits in 1730 and streets of low houses with restaurants. In the evening the square fills with families.",
        come: "Car or bus from Cabo San Lucas, about 40 minutes; the centre is walkable.",
        quando: "Late afternoon and evening.",
        tempo: "Half a day",
        costo: "Free",
        lat: 23.06211,
        lng: -109.6948,
      },
      {
        nome: "Art District and Art Walk",
        testo: "The streets behind the San José mission, with dozens of contemporary and Mexican art galleries. On Thursday evenings, from November to June, there is the free Art Walk: open galleries, street music and stalls.",
        come: "On foot from Plaza Mijares.",
        quando: "Thursday evening, November to June.",
        tempo: "2 hours",
        costo: "Free",
        lat: 23.0621,
        lng: -109.6956,
      },
      {
        nome: "San José Estuary",
        testo: "The freshwater lagoon where the San José river meets the sea, with reeds, palms and over two hundred bird species. A path runs alongside it to the beach; by kayak you paddle in among the reeds.",
        come: "On foot from central San José, towards the hotel zone.",
        quando: "At dawn or dusk, for the birds.",
        tempo: "1-2 hours",
        lat: 23.05216,
        lng: -109.67862,
      },
      {
        nome: "Flora Farms",
        testo: "An organic farm at the foot of the sierra above San José, with vegetable gardens, a farm-to-table restaurant and shops. It has become a polished, pricey hangout, but the walk through the gardens is pleasant.",
        come: "By car, about 15 minutes from central San José, the last stretch on a dirt road.",
        quando: "Dinner, with a booking; or the afternoon for the gardens.",
        tempo: "2 hours",
        lat: 23.07903,
        lng: -109.6776,
      },
      {
        nome: "Humpback whale watching",
        testo: "Watching humpback whales in the waters of Los Cabos. In winter they come here to mate and give birth: from the boat you see breaches, tail slaps and, with some luck, mothers with calves.",
        come: "Boat from the Cabo San Lucas Marina or San José del Cabo.",
        quando: "December to April, in the morning.",
        tempo: "2-3 hours",
        costo: "80-130 dollars per person on shared boats, about 70-110 €; private boat for eight about 700 dollars",
      },
      {
        nome: "Cabo Pulmo National Park",
        testo: "The oldest of only three coral reefs on the west coast of North America, the only hard reef in the Gulf of California, protected since 1995 and full of fish again. You snorkel and dive among huge shoals, rays and turtles.",
        come: "Car from San José, about 2 hours, the last kilometres on dirt; then a boat with a village operator.",
        quando: "Morning, with a calm sea.",
        tempo: "Full day",
        lat: 23.44667,
        lng: -109.40667,
        consiglio: "No ATM in the village: bring cash, water and food.",
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Morning: El Arco and Playa del Amor by water taxi",
        "Afternoon: Playa El Médano or snorkelling at Chileno",
        "Evening: central San José del Cabo, with the Art Walk on Thursdays",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: El Arco, Marina, whale watching in the afternoon (in winter)",
        "Day 2: Santa María and Chileno in the morning, estuary and San José at sunset",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above",
        "Day 3: Cabo Pulmo for snorkelling, back for dinner at Flora Farms or in town",
      ] },
    ],
    zone: [
      {
        nome: "San José del Cabo",
        perChi: "quiet and close to the airport",
        testo: "Colonial centre, calmer and less touristy, about twenty minutes from the airport: the easiest choice for the last night.",
        fascia: "90-175 €",
      },
      {
        nome: "The Corridor",
        perChi: "high-end resorts",
        testo: "The 30 km of coast between the two towns, with resorts, golf courses and the Chileno and Santa María bays; you need a car.",
        fascia: "da 350 €",
      },
      {
        nome: "Cabo San Lucas",
        perChi: "nightlife and boats",
        testo: "Marina, bars and clubs, very touristy; handy for walking to El Arco boats and whale watching.",
      },
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
    gite: [
      {
        nome: "Todos Santos",
        distanza: "about 1 hour from Cabo San Lucas",
        come: "By car on Federal Highway 19 along the Pacific.",
        testo: "A pueblo mágico with a centre of galleries and restaurants, organic farms and, in winter, turtle hatchling releases at sunset. It is cheaper than Cabo for sleeping too.",
      },
      {
        nome: "Playa Los Cerritos",
        distanza: "about 50 minutes from Cabo San Lucas",
        come: "By car on Federal Highway 19, just before Todos Santos.",
        testo: "One of the few Pacific beaches where you can swim, with waves good for learning to surf and schools on the sand.",
      },
      {
        nome: "La Paz",
        distanza: "about 2.5-3 hours",
        come: "By car or bus; better with at least two nights.",
        testo: "The calm capital of Baja California Sur, the base for Espíritu Santo, the Los Islotes sea lions, whale sharks and Playa Balandra.",
      },
    ],
    faq: [
      {
        domanda: "Better to stay in Cabo San Lucas or San José del Cabo?",
        risposta: "San José is quieter, colonial and close to the airport; Cabo San Lucas has the Marina, nightlife and boats to El Arco. Many stay in San José and visit Cabo for the day.",
      },
      {
        domanda: "Where is it safe to swim in Los Cabos?",
        risposta: "At sheltered, signposted beaches such as El Médano, Chileno, Santa María and Palmilla. On the Pacific side, including Playa del Divorcio, the currents are very strong.",
      },
      {
        domanda: "When can you see humpback whales?",
        risposta: "From December to April. Trips last two to three hours and cost roughly 80-130 dollars per person on shared boats.",
      },
      {
        domanda: "How many days do you need in Los Cabos?",
        risposta: "Two or three: one for El Arco and Cabo San Lucas, one for the Corridor bays and San José, and a third for Cabo Pulmo or the whales.",
      },
      {
        domanda: "Is Cabo Pulmo worth the trip?",
        risposta: "Yes, for snorkellers and divers: it is the richest coral reef in the Gulf of California. It is about two hours' drive, and the village has no ATM.",
      },
      {
        domanda: "How do you avoid the timeshare sellers?",
        risposta: "At the airport and in the Marina they offer transport, free tours or discounts in exchange for a half-day presentation. Just don't stop, and book transfers and trips in advance.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'El Arco at Cabo San Lucas with a boat in front of the rocks',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-14-los-cabos.jpg',
  },
]
