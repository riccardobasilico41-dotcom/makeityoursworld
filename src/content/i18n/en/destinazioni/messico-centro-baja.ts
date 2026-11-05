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
    comeArrivare: "Benito Juárez International Airport (AICM), with direct flights or via a European capital; into the city by prepaid taxi or app.",
    comeSpostarsi: "Metro, Metrobús and ride apps; for Teotihuacán, the bus from the Terminal del Norte. No street-hailed taxis.",
    periodoMigliore: 'October to April, the dry season; late October for Día de los Muertos.',
    costi: "Teotihuacán and the Anthropology Museum about 210 MXN each for foreigners (2026); trajineras are paid by the hour per boat, at a price agreed before getting on.",
    erroriDaEvitare: [
      'Taking street-hailed taxis instead of prepaid, de sitio or app taxis',
      'Scheduling the Anthropology Museum or the Templo Mayor on a Monday, when they are closed',
      'Underestimating the altitude in the first two days',
      "Not booking the Casa Azul, which sells out days ahead",
    ],
      "luoghi": [
        {
          "nome": "Zócalo, Cathedral and Templo Mayor",
          "testo": "The central square with the Metropolitan Cathedral, the Palacio Nacional and, beside it, the Templo Mayor, the Aztec heart of Tenochtitlan, with its museum.",
          "come": "Metro Zócalo. The Templo Mayor has a separate INAH entry.",
          "quando": "Morning; the Templo Mayor museum and archaeological zone open Tuesday to Sunday, 9am-5pm, and close on Mondays.",
          "tempo": "3 hours",
          "costo": "Templo Mayor: 210 MXN for foreigners (2026).",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "National Museum of Anthropology",
          "testo": "A great archaeological museum in Chapultepec forest, with the Sun Stone and the rooms of Mesoamerican cultures.",
          "come": "Metro Auditorio or Chapultepec.",
          "quando": "Morning; usually closed on Monday.",
          "tempo": "3-4 hours",
          "costo": "210 MXN for foreigners (2026).",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Choose a few rooms: it is too big to see it all."
        },
        {
          "nome": "Teotihuacán",
          "testo": "The city of the Temples of the Sun and Moon and the Calzada de los Muertos, outside the city, a UNESCO site.",
          "come": "Bus from Terminal Norte or tour; INAH entry.",
          "quando": "At the 8am opening (open daily until 5pm), before the heat and the groups.",
          "tempo": "Half a day",
          "costo": "210 MXN for foreigners (2026). According to August 2026 reports the Pyramid of the Moon is closed until further notice: ask at the ticket office.",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Bring a hat and water: almost no shade."
        },
        {
          "nome": "Coyoacán and Casa Azul",
          "testo": "A colonial district with squares and a market, and Frida Kahlo's Casa Azul, now a museum.",
          "come": "Metro or Uber; for Casa Azul tickets must be booked online in advance.",
          "quando": "Morning; the museum is closed on Mondays and you must arrive at the time on your ticket.",
          "tempo": "Half a day",
          "costo": "Casa Azul: 320 MXN for foreigners (2026), with timed entry booked online.",
          "url": "https://boletos.museofridakahlo.org.mx/"
        },
        {
          "nome": "Xochimilco",
          "testo": "The canals with colourful trajineras, a remnant of the Aztec lake system.",
          "come": "Metro and light rail or Uber to the landing stages.",
          "quando": "Weekday mornings, fewer crowds.",
          "tempo": "2-3 hours",
          "consiglio": "Agree the length and price of the boat before boarding."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Zócalo, Cathedral and Templo Mayor",
            "Palacio de Bellas Artes",
            "Lunch of tacos",
            "Museo Nacional de Antropología in the afternoon"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: historic centre and Anthropology museum",
            "Day 2: Teotihuacán at opening, Coyoacán in the afternoon"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Days 1-2 as above",
            "Day 3: Xochimilco and Casa Azul, or Bellas Artes with the murals"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Historic centre",
          "perChi": "on foot to everything",
          "testo": "Zócalo and museums nearby, but noisy and unsafe at night away from the main streets."
        },
        {
          "nome": "Roma and Condesa",
          "perChi": "restaurants and venues",
          "testo": "Neighbourhoods of cafés and nightlife, safer on foot, near Chapultepec."
        },
        {
          "nome": "Coyoacán",
          "perChi": "calm and history",
          "testo": "A residential and colonial district, farther from the centre."
        }
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
          "testo": "A historic library founded in the 17th century and a baroque chapel covered in gold (Templo de Santo Domingo).",
          "come": "On foot from the centre.",
          "quando": "Morning.",
          "tempo": "1.5 hours"
        },
        {
          "nome": "Great Pyramid of Cholula",
          "testo": "A huge pre-Hispanic pyramid, almost hidden under a grassy hill, with the church of the Virgen de los Remedios on top. The inner tunnels reopened in March 2026, with group visits.",
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
    comeArrivare: 'ADO bus from Puebla or from Mexico City; flights from Mexico City.',
    comeSpostarsi: 'On foot in the center; colectivos and taxis for the towns; organized tours for the festival nights, when taxis are scarce.',
    periodoMigliore: 'October to April; late October-early November for Día de los Muertos; July for the Guelaguetza.',
    costi: 'Entry to the panteones is free; evening cemetery tours at varying prices.',
    erroriDaEvitare: [
      'Booking festival lodging just a few weeks before departure',
      'Paying for tours that promise "access" to the cemeteries, which is free',
      'Photographing people and altars without asking',
      'Not checking on bloqueos before long trips',
    ],
      "luoghi": [
        {
          "nome": "Templo de Santo Domingo and ethnobotanical garden",
          "testo": "A Baroque church with gilded interiors, a former convent with a museum and the ethnobotanical garden, which can only be visited with a guide.",
          "come": "On foot from the centre.",
          "quando": "Morning.",
          "tempo": "2-3 hours",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "The ethnobotanical garden is open only on guided tours, and hours and booking have changed several times recently: ask in town before going."
        },
        {
          "nome": "Monte Albán",
          "testo": "The ancient Zapotec capital on a hill above the city, a UNESCO site, with the great plaza and the tombs.",
          "come": "Shuttles or taxi from Oaxaca; INAH entry.",
          "quando": "At opening.",
          "tempo": "2-3 hours",
          "costo": "210 MXN for foreigners (2026).",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "20 de Noviembre and Benito Juárez markets",
          "testo": "Markets with stalls of grilled meat, chapulines, chocolate, mole and cheese.",
          "come": "On foot from the centre.",
          "quando": "Morning and lunch.",
          "tempo": "1-2 hours"
        },
        {
          "nome": "Santa Cruz Xoxocotlán cemetery and Panteón General",
          "testo": "The Día de Muertos vigils (31 October-2 November), with decorated tombs and candles.",
          "come": "Taxi or tour; Panteón General at San Miguel.",
          "quando": "Night of 31 October and 1-2 November.",
          "tempo": "An evening",
          "consiglio": "Respect the families: it is not a show."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Santo Domingo",
            "Markets and lunch of tlayuda",
            "Monte Albán in the afternoon"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: centre and Santo Domingo",
            "Day 2: Monte Albán, markets, mezcalería"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Days 1-2 as above",
            "Day 3: Central Valleys (Teotitlán, Mitla, Hierve el Agua)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Historic centre",
          "perChi": "on foot to everything",
          "testo": "Hotels in colonial houses, culture and restaurants, noisier."
        },
        {
          "nome": "Jalatlaco district",
          "perChi": "cafés and atmosphere",
          "testo": "A neighbourhood of colourful houses, quieter, walking distance from the centre."
        }
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
          "testo": "A Montezuma cypress with a huge trunk, in the churchyard of Santa María del Tule. The most serious estimates put it at 1,400 to 1,600 years old.",
          "come": "Bus or taxi from Oaxaca, a short way east, on the road to Mitla.",
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
    comeArrivare: 'Bus or van from Oaxaca on the new highway; direct flights from Mexico City.',
    comeSpostarsi: 'Taxis and colectivos along coastal highway 200.',
    periodoMigliore: 'November to April, the dry season; June to October rains and possible hurricanes.',
    costi: 'Surf lessons and lagoon tours at varying prices: compare locally.',
    erroriDaEvitare: [
      'Swimming at Zicatela, where the rip currents are dangerous',
      'Choosing bioluminescence tours that motor all the way to the end of the lagoon',
      'Leaving belongings unattended on the beach in the evening',
    ],
      "luoghi": [
        {
          "nome": "Playa Zicatela",
          "testo": "A powerful, famous wave, the «Mexican Pipeline», for experienced surfers; the beach has restaurants and hotels.",
          "come": "On foot or taxi from the centre.",
          "quando": "Dawn and sunset to watch surfers; swim only with great caution.",
          "tempo": "Half a day",
          "consiglio": "Dangerous currents: do not swim where there are big waves."
        },
        {
          "nome": "Carrizalillo, Manzanillo and Puerto Angelito",
          "testo": "Sheltered coves with calm water, good for swimming and snorkelling.",
          "come": "Taxi or on foot with a staircase.",
          "quando": "Morning.",
          "tempo": "Half a day"
        },
        {
          "nome": "Manialtepec Lagoon",
          "testo": "A lagoon with mangroves and birds, with nocturnal bioluminescence.",
          "come": "Boat tour from Puerto Escondido.",
          "quando": "Dawn or night.",
          "tempo": "2-3 hours"
        },
        {
          "nome": "Mazunte, Zipolite and Punta Cometa",
          "testo": "Villages of the nearby coast: Mazunte for the turtle centre, Zipolite for the free beach, Punta Cometa for sunset.",
          "come": "Car or colectivo from Puerto Escondido, along the coast.",
          "quando": "Sunset at Punta Cometa.",
          "tempo": "Full day"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Carrizalillo",
            "Seafood lunch",
            "Afternoon: Zicatela",
            "Sunset on the beach"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: coves and Zicatela",
            "Day 2: Mazunte, Punta Cometa and Zipolite"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Zicatela",
          "perChi": "surf and nightlife",
          "testo": "Hotels, bars and restaurants, noisy at night."
        },
        {
          "nome": "La Punta",
          "perChi": "quiet atmosphere",
          "testo": "Quieter, with smaller waves, near the coves."
        }
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
    visitataPersonalmente: false,
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
