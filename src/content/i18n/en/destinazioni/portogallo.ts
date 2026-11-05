import type { Destinazione } from '@/lib/types'

export const destinazioniPortogallo: Destinazione[] = [
  {
    slug: 'lisbona',
    paeseSlug: 'portogallo',
    ordine: 1,
    nome: 'Lisbon',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '3-4 days, including the day trip to Sintra',
    visitataPersonalmente: true,
    introduzione:
      "Portugal's capital sits on seven hills overlooking the Tagus estuary. It was largely rebuilt after the 1755 earthquake, which gave shape to the Baixa: the low-lying district with a regular Enlightenment layout that today separates the older, hillier neighborhoods, Alfama and Bairro Alto, from the river.",
    percheAndarci:
      "It's a city to live vertically, among climbs, miradouros (viewpoints) and historic vehicles designed for its hills. In a compact space there is the oldest and most layered neighborhood (Alfama) and the commercial center rebuilt after the earthquake (Baixa-Chiado). An hour away by train is Sintra, one of the most photographed fairy-tale landscapes in Europe.",
    cosaVedere: [
      "Alfama, the oldest neighborhood, almost intact after the 1755 earthquake thanks to its Arab structure of narrow alleys. Here you listen to fado, the traditional Portuguese song, in the fado houses (casas de fado) scattered among the alleys",
      "Tram 28, the historic line that crosses Alfama, Graça, Baixa and Estrela in vintage wooden cars: the most classic (and most crowded) way to see the city's hills from the inside",
      "Belém, on the waterfront, from where the great Portuguese expeditions of the Age of Discovery set out. Here are the Jerónimos Monastery, a Manueline masterpiece and UNESCO site, and the Belém Tower, the city's symbolic fortress on the water, also UNESCO",
      "Baixa and Chiado, the center rebuilt after 1755 on an Enlightenment grid, with the Praça do Comércio on the Tagus and the Santa Justa Lift, the neo-Gothic wrought-iron panoramic elevator",
      "The miradouros, the viewpoints scattered over the hills: at sunset the Miradouro da Senhora do Monte and the Miradouro da Graça are among the most beautiful",
      "Sintra, a UNESCO site since 1995, with the Pena National Palace and the Quinta da Regaleira (there is a dedicated destination)",
    ],
    cosaFare: [
      "Take tram 28 early in the morning, before 9, to avoid the crush and the pickpockets who have made it as famous as its views",
      "Listen to live fado, in the evening, in a fado house in Alfama",
      "Eat a pastel de nata at Pastéis de Belém, the original 1837 pastry shop, where the recipe was born",
      "Go up to the miradouros at sunset, with a glass of wine from an open-air kiosk (esplanada)",
      "Devote a whole day to Sintra, leaving as early as possible (there are a dedicated destination and experience)",
    ],
    doveDormire:
      "Baixa-Chiado is the most central and practical area, well connected with the rest of the city. Alfama has more character and is more lived-in, but the climbs are steeper and the streets narrower. From both you can walk to most of the attractions in the center.",
    doveMangiare:
      "The pastel de nata, flaky pastry with custard and cinnamon, is found everywhere, but it was born at Pastéis de Belém. Bacalhau (salt cod) is prepared in hundreds of variations. In Bairro Alto and Alfama you eat petiscos, small plates to share like Spanish tapas. In the tiny historic kiosks of the Baixa you drink ginjinha, the sour cherry liqueur served in little glasses.",
    comeArrivare:
      "Humberto Delgado Airport (LIS) is about 4 miles (7 km) from the center: by metro (red line) it takes about 20-25 minutes, or there are buses, taxis and ride-hailing apps. There is no convenient direct train from Italy, so you almost always arrive by plane.",
    comeSpostarsi: "There are lots of climbs, which is why there are the historic trams, the funiculars (elevadores) and the Santa Justa Lift. Metro, buses and suburban trains are paid with the Viva Viagem/Navegante contactless card. The center is also walkable, with a bit more breath for the hills.",
    periodoMigliore: 'April-May and September-October for the mild weather and fewer crowds; June-August is high season, hot and very crowded, especially on tram 28 and in Sintra; November-March is mild but rainy',
    costi: "a still fairly inexpensive city for Western Europe, although prices are rising: simple lunch 10-12€, normal dinner 15-20€ per person, tram or bus ticket about 2€",
    erroriDaEvitare: [
      "Boarding tram 28 in the middle hours hoping for a seat and some peace: it's among the most crowded public transport in Europe and a favorite of pickpockets",
      "Planning a walking tour as if Lisbon were flat",
      "Going to Sintra without leaving early: the lines for the Pena Palace get very long already by mid-morning",
      'Looking for the "real" pastel de nata only at Pastéis de Belém: those from the neighborhood pastry shops are excellent too, and with no line',
    ],
    confronti: [
      {
        titolo: 'How to get to Sintra from Lisbon',
        introduzione: "You can go to Sintra on your own by train or with an organized tour. The main difference is how much time you're willing to spend in line between one palace and the next.",
        opzioni: [
          {
            nome: 'Train from Rossio + online tickets',
            sintesi: 'Regional train from Rossio station (about 40 minutes, very frequent departures), then local bus 434 or a walk up to the Pena Palace, with entry tickets bought online in advance with a time slot',
            costo: 'train about 5€ each way, entry 15-25€ per site',
            durata: 'a full day, leaving early',
            pro: ['Costs little', 'You decide the schedule and pace', "You don't depend on a group"],
            contro: ['The local bus and lines have to be organized on your own', "There's no historical guide"],
            perChi: 'people who prefer to move on their own and save money',
          },
          {
            nome: 'Organized tour from Lisbon',
            sintesi: 'Minivan transfer from Lisbon with a guide, "skip-the-line" tickets included and an itinerary that often also touches Cascais or the Boca do Inferno',
            costo: 'around 70-100€ per person',
            durata: 'a full day',
            pro: ['No logistics to organize', 'Often priority entry', 'A guide who tells the history'],
            contro: ['Costs more', 'The group decides the pace', 'Less time left to explore on your own'],
            perChi: "people who don't want to deal with transport and lines, or have little time",
          },
        ],
        raccomandazione: "With a free day and a minimum of organization, the train with tickets booked online is the most efficient choice. In Sintra how you get there matters little: what matters is leaving early in the morning.",
      },
    ],
    luoghi: [
      {
        "nome": "Alfama and São Jorge Castle",
        "testo": "The oldest district, which survived the 1755 earthquake almost intact, with lanes, steps, hanging laundry and fado houses. Above it, the medieval castle with its walls, gardens and views over the Tagus and the Baixa. Below, the Sé, the Romanesque cathedral.",
        "come": "Climb on foot from the Baixa along Rua da Madalena or take tram 28. The castle entrance is on Largo do Chão da Feira, up a steep slope.",
        "quando": "Early morning for the castle, sunset for the terraces. In the evening the fado houses fill up after 20.",
        "tempo": "half a day",
        "url": "https://www.castelodesaojorge.pt/",
        "consiglio": "Get lost in the lanes without a map and walk down: the climb is the hard part, the descent is easy."
      },
      {
        "nome": "Belém: Jerónimos Monastery",
        "testo": "A 16th-century Manueline monastery, UNESCO-listed, with a two-storey cloister covered in maritime decoration and Vasco da Gama's tomb in the church. The south portal is one of Portugal's most elaborate works.",
        "come": "From the centre by tram 15 or by train from Cais do Sodré to Belém. The ticket is for the cloister; the church keeps its own hours.",
        "quando": "Cloister Tuesday to Sunday 9:30-17:30, last entry at 17:00. Closed on Mondays, 1 January, Easter Sunday, 1 May, 13 June and 25 December. Arrive at opening: by late morning the queue grows.",
        "tempo": "1.5 hours",
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "costo": "Cloister €18, 2026 (official site)",
        "consiglio": "Buy the ticket from the official online ticket office to skip the queue at the desk. The church has a separate entrance from the cloister and is worth it on its own, for Vasco da Gama's tomb."
      },
      {
        "nome": "Belém Tower",
        "testo": "A Manueline fortress on the Tagus, built between 1514 and 1519 and UNESCO-listed together with the Jerónimos. The city's symbol: bastions, loggia and a terrace with river views. Inside the rooms are small and the climb narrow.",
        "come": "On foot from the Jerónimos along the river. Tram 15 and the train stop nearby.",
        "quando": "Tuesday to Sunday 9:30-17:30; closed on Mondays and on the same holidays as the Jerónimos. It may close when the weather makes the visit unsafe. Sunset lights it well from outside.",
        "tempo": "45 minutes inside, plus the walk",
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "costo": "€15, 2026 (official site)",
        "consiglio": "For a photo from the shore, the riverside near the Padrão dos Descobrimentos is better than the interior."
      },
      {
        "nome": "Pastéis de Belém",
        "testo": "The pastry shop that has made pastéis de Belém since 1837, to an old recipe from the Jerónimos Monastery. Inside it is a maze of tiled rooms. They are eaten warm with cinnamon and icing sugar.",
        "come": "A few steps from the Jerónimos. Tram 15 and train stops are near.",
        "quando": "Open every day; hours on the official site. The queue outside moves fast because there is a takeaway counter.",
        "tempo": "half an hour",
        "url": "https://pasteisdebelem.pt/",
        "consiglio": "Go into the inner rooms instead of waiting at the counter: there's often space."
      },
      {
        "nome": "Baixa, Chiado and Praça do Comércio",
        "testo": "The centre rebuilt after 1755 with a grid of streets, the Praça do Comércio open to the Tagus and the Rua Augusta Arch. The Santa Justa Lift, from 1902, goes up to a viewpoint over the city. Chiado has historic bookshops and cafes.",
        "come": "On foot from the Baixa-Chiado or Terreiro do Paço metro. The lift is run by Carris, with a separate ticket.",
        "quando": "Morning for the square without crowds. The lift viewpoint fills up at midday.",
        "tempo": "half a day",
        "url": "https://www.carris.pt/",
        "consiglio": "For a view from above, the Santa Luzia viewpoint or the Arch terrace avoids the lift queue."
      },
      {
        "nome": "Tram 28 and the viewpoints",
        "testo": "The historic yellow line that climbs through Graça, Alfama, Baixa and Estrela. For viewpoints: Santa Luzia, Portas do Sol, Senhora do Monte, Graça. The tram is crowded; the viewpoints can also be reached on foot.",
        "come": "The tram starts at Martim Moniz or Campo de Ourique. Pay with the rechargeable transport card or with an onboard ticket, which costs more.",
        "quando": "Early morning or in the evening: at midday it is packed. The miradouros at sunset.",
        "tempo": "2 hours for the ride",
        "url": "https://www.carris.pt/",
        "consiglio": "Board at the terminus to get a seat."
      },
      {
        "nome": "LX Factory e Cais do Sodré",
        "testo": "LX Factory is a converted industrial complex under the 25 de Abril bridge, with bookshops, shops and restaurants. Nearby Cais do Sodré has the Time Out Market, in the Ribeira market hall, with stalls of chef-run food.",
        "come": "LX Factory: tram 15 or bus from the centre. Time Out Market: Cais do Sodré metro, on foot from the Baixa.",
        "quando": "LX Factory in the afternoon and on Sundays with the market. Time Out Market at lunch, but crowded.",
        "tempo": "2 hours",
        "consiglio": "For dinner, the Cais do Sodré district with the Pink Street is livelier than the Time Out Market."
      },
      {
        "nome": "Oceanário e Parque das Nações",
        "testo": "One of Europe's largest indoor aquariums, opened in 1998, with a large central tank and habitats from the four oceans. Parque das Nações, the Expo 98 grounds, has a Tagus promenade and a cable car.",
        "come": "Red metro line to Oriente, then a short walk. From the airport it's on the same line.",
        "quando": "Morning, with fewer school groups. Useful on rainy days.",
        "tempo": "2-3 hours",
        "url": "https://www.oceanario.pt/",
        "consiglio": "Book online to skip the ticket queue."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Alfama and the castle",
          "Lunch in the Baixa",
          "Afternoon: Belém, Jerónimos and a pastel de nata",
          "Sunset at a miradouro"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Belém, Baixa and Chiado, fado in the evening",
          "Day 2: Alfama, tram 28 and miradouros, LX Factory"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Alfama and Baixa",
          "Day 2: Belém and LX Factory",
          "Day 3: trip to Sintra, back for dinner"
        ]
      }
    ],
    zone: [
      {
        "nome": "Baixa and Chiado",
        "perChi": "those who want convenience",
        "testo": "Central, flat and close to metro and trains. Noisy in the evening and pricey. Few genuinely local places."
      },
      {
        "nome": "Alfama and Graça",
        "perChi": "those who want atmosphere",
        "testo": "Lanes, fado, viewpoints. Slopes and steps, hard for taxis, loud music at night."
      },
      {
        "nome": "Príncipe Real, Estrela and Campo de Ourique",
        "perChi": "those who want residential districts",
        "testo": "Quieter, with gardens and good shops. Further from the river."
      }
    ],
    sapori: [
      {
        "nome": "Pastel de nata",
        "testo": "Puff pastry with custard, served warm with cinnamon."
      },
      {
        "nome": "Bacalhau à Brás",
        "testo": "Shredded salt cod with egg, fried potatoes and onion."
      },
      {
        "nome": "Bifana",
        "testo": "A sandwich with pork marinated in white wine and garlic, from kiosks and bars."
      },
      {
        "nome": "Grilled sardines",
        "testo": "A June speciality, for the Santos Populares."
      },
      {
        "nome": "Ginjinha",
        "testo": "Sour cherry liqueur served in a small glass, at the Baixa kiosks."
      }
    ],
    attenzioni: [
      "Pickpockets on tram 28, on the metro and in tourist areas: keep your backpack and phone in front.",
      "In the Baixa and Bairro Alto strangers may offer hashish or other drugs in the street: say no and walk on. Illegal drugs carry severe penalties in Portugal.",
      "At restaurants the «couvert» (bread, olives, cheese) brought to the table is charged if touched: refuse it if you don't want it.",
      "Tuk-tuks and taxis outside tourist areas: agree the price first, or use apps.",
      "Municipal tourist tax per night, paid at the hotel and subject to change (check the current amount).",
      "Metro, train and Carris strikes, announced in advance: check the news on travel days."
    ],
    esperienzeSlugs: ['tram-28-alfama', 'pasteis-de-belem'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'The yellow tram 28 lit up in the evening on a narrow street in Lisbon, with the white facade of a church at the end of the road',
    immagine: '/images/portogallo/lisbona.jpg',
  },
  {
    slug: 'sintra',
    paeseSlug: 'portogallo',
    ordine: 2,
    nome: 'Sintra',
    tipologia: ['storia', 'natura', 'arte'],
    giorniConsigliati: 'a full day, as a trip from Lisbon',
    visitataPersonalmente: true,
    introduzione:
      'A small town among wooded hills, about 19 miles (30 km) northwest of Lisbon, a UNESCO site since 1995 as the "Cultural Landscape of Sintra." For centuries the Portuguese nobility and royal family spent their summers here, building palaces and romantic villas in a concentration unique in Europe, in a microclimate cooler and damper than Lisbon\'s.',
    percheAndarci:
      "The Pena National Palace, with its colorful towers in 19th-century romantic style at the top of a hill, is one of the most photographed landscapes in Portugal. The Quinta da Regaleira, with its spiral initiation well and esoteric gardens, is among the most unusual things in the country. Because of the lines, though, it's also one of the most demanding days of the whole itinerary.",
    cosaVedere: [
      "The Pena National Palace, a 19th-century romantic royal palace mixing Gothic, Manueline, Moorish and Renaissance elements, bright yellow and red, at the top of a hill above the town",
      'The Quinta da Regaleira, an early-20th-century villa with an esoteric garden, famous for the "Poço Iniciático" (initiation well): a spiral staircase that descends underground among Masonic and Templar symbols',
      "The Castelo dos Mouros, the ruins of the 9th-century Moorish castle, with views over Sintra and, on clear days, all the way to the ocean",
      "The Sintra National Palace, in the center, with the two enormous white conical chimneys seen from all over the valley",
      "The historic center of Sintra, small and pedestrian, with historic pastry shops known for travesseiros (puff pastry sweets filled with almond cream) and queijadas",
    ],
    cosaFare: [
      "Take the first available train from Lisbon to be among the first in line at the Pena Palace: it's the advice repeated by anyone who has already done this trip",
      "Book online, before leaving, the time-slot tickets for Pena and Regaleira, without counting on buying on the spot",
      "Use the local bus 434 between the station, the center and the Pena Palace, instead of walking the steep climb on hot days",
      "Go down into the initiation well of the Quinta da Regaleira, one of the most photographed and crowded spots: here too you have to allow for the wait",
    ],
    doveDormire: 'It is visited as a day trip from Lisbon, without sleeping in Sintra.',
    doveMangiare: 'Travesseiros and queijadas, the typical sweets, at one of the historic pastry shops in the center. For the rest there are mostly tourist places around the station and in the pedestrian center.',
    comeArrivare:
      "By regional train from Rossio station in Lisbon: about 40 minutes, with very frequent departures during the day. It's much simpler and cheaper than a rental car, also because in the center of Sintra, on weekends and in high season, parking is scarce.",
    comeSpostarsi: "Local bus 434 runs a loop between the station, the historic center and the Pena Palace. The pedestrian center is walkable, but between the main sites (Pena, Regaleira, Castelo dos Mouros) it's always uphill, and the distances are longer than they look on the map.",
    periodoMigliore:
      "the climate is fine all year; the problem is the crowd. On weekends and in high season (June-August) the lines at the main palaces get very long already from late morning. On a weekday, leaving as early as possible, the wait is greatly reduced in any season.",
    costi: 'Pena Palace about 20-25€, Quinta da Regaleira about 15€, with discounts on combined tickets; train from Lisbon about 5€ each way',
    erroriDaEvitare: [
      'Arriving mid-morning thinking you will "do everything at leisure": the lines at the Pena Palace and the Quinta da Regaleira lengthen fast after 10-11',
      "Not booking the time-slot tickets online: in high season the morning slots run out",
      "Underestimating distances and elevation changes between one site and another: it's not a compact center like Lisbon",
      "Wanting to see all four main sites (Pena, Regaleira, Castelo dos Mouros, National Palace) in one day: with real lines, usually at least one has to be sacrificed",
    ],
    luoghi: [
      {
        "nome": "Palácio Nacional da Pena",
        "testo": "A Romantic palace built between 1842 and 1854 for Ferdinand II on a hilltop, yellow and red, with towers, battlements and Moorish and Manueline decoration. It was the royal family's summer residence and the rooms keep furnishings from its collections. Around it is a park of over 200 hectares.",
        "come": "From Sintra station Scotturb bus 434 climbs to the Pena. On foot the climb is long and steep. Private cars are not allowed on the access roads: a shuttle runs every 15 minutes from the bottom of the park to the palace. Entry with a timed ticket.",
        "quando": "Park 9am-7pm, palace 9:30am-6:30pm (last ticket at 5:30pm). The palace can only be visited with a booked date and time slot. First slot of the morning: after 10:30am the queue gets longer. Tickets online on Parques de Sintra.",
        "tempo": "2-3 hours with the park",
        "url": "https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/",
        "costo": "Visita Essencial (park and palace) €20, park only €12, 2026 (official site)",
        "consiglio": "The park can be visited on its own without the palace queue and has viewpoints: useful if the queues are too long."
      },
      {
        "nome": "Quinta da Regaleira",
        "testo": "A neo-Gothic villa built between 1904 and 1910, with a garden full of symbols, grottoes and galleries. The Poço Iniciático is a 27-metre-deep well with a spiral staircase, linked to tunnels that come out at a small lake.",
        "come": "On foot from central Sintra, gently uphill. Tickets are sold at the desk or from the official online ticket office, which avoids the queue.",
        "quando": "Early morning or early afternoon: by late morning the well fills up. Hours on the official site.",
        "tempo": "2 hours",
        "url": "https://www.regaleira.pt/",
        "consiglio": "Go down the well in non-slip shoes and return through the tunnels: the exit is nicer than the descent."
      },
      {
        "nome": "Castelo dos Mouros",
        "testo": "The ruins of the fortress built by the Moors in the 8th and 9th centuries on the ridge above Sintra, with walls and towers linked by walkways. From the top you see the Pena, the town and the ocean.",
        "come": "From the centre on foot, uphill, or by bus 434 to the castle stop. Stretches of steps on uneven stone.",
        "quando": "Morning, with less wind. In fog the view is lost.",
        "tempo": "1-1.5 hours",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "If you have time for only one castle or palace besides the Pena, the crowds here are smaller."
      },
      {
        "nome": "Palácio Nacional de Sintra",
        "testo": "The royal palace in the centre, recognisable by the two white conical chimneys of the kitchens. Inside are the Swan Room, the Magpie Room and a large collection of azulejos from the 1400s.",
        "come": "On foot from the station. It's on the town's main square.",
        "quando": "Before lunch; the square is quieter in the evening.",
        "tempo": "1 hour",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Visit it if you're in town in the afternoon: less queue than the Pena."
      },
      {
        "nome": "Cabo da Roca",
        "testo": "The westernmost point of continental Europe, with a lighthouse on cliffs dropping into the Atlantic. The monument recalls Camões's line describing the place \"where the land ends and the sea begins\".",
        "come": "From Sintra centre by the scheduled bus towards Cascais (times on the Carris Metropolitana app) or by car.",
        "quando": "At sunset in strong wind; bring a jacket even in summer.",
        "tempo": "1 hour",
        "consiglio": "The visit certificate is bought at the small tourist office: it's a souvenir, not required."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Train from Rossio, leaving before 8",
          "Pena Palace at opening",
          "Moors Castle or Regaleira in late morning",
          "Lunch in town with a travesseiro",
          "Train back in the afternoon"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Pena, Moors Castle, old town",
          "Day 2: Regaleira, National Palace, Cabo da Roca at sunset"
        ]
      }
    ],
    zone: [
      {
        "nome": "Day trip from Lisbon",
        "perChi": "most visitors",
        "testo": "Train from Rossio in under an hour, back in the evening. A tight pace with the queues, but low cost."
      },
      {
        "nome": "Sintra, old town",
        "perChi": "those who want the town without the crowds",
        "testo": "Sleeping in town means seeing Pena at opening and the centre in the evening. Few hotels and high prices."
      }
    ],
    sapori: [
      {
        "nome": "Travesseiro",
        "testo": "Puff pastry filled with almond and egg cream, Sintra's symbol sweet, at the Piriquita pastry shop."
      },
      {
        "nome": "Queijada",
        "testo": "A small sweet of fresh cheese, eggs and cinnamon."
      },
      {
        "nome": "Colares wine",
        "testo": "Wine from a sandy area near the sea, with ungrafted vines."
      },
      {
        "nome": "Pastel de nata",
        "testo": "Found in every pastry shop."
      },
      {
        "nome": "Bacalhau",
        "testo": "Salt cod in several versions in the restaurants of the centre."
      }
    ],
    attenzioni: [
      "Pena and Regaleira tickets are timed: buy online before you go, in high season the morning slots run out.",
      "Bus 434 is packed in the middle of the day: board at the station, the terminus, to get a seat.",
      "Taxis and tuk-tuks quote high fares: agree the price first.",
      "Parking is nearly impossible in the centre at weekends: take the train.",
      "Big backpacks don't always fit into the palaces: leave luggage in Lisbon.",
      "Fog and damp are frequent: bring a waterproof jacket."
    ],
    esperienzeSlugs: ['sintra-giornata-da-lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'The Pena National Palace of Sintra with its yellow and red towers emerging from the woods under a blue sky',
    immagine: '/images/portogallo/sintra.jpg',
  },
]
