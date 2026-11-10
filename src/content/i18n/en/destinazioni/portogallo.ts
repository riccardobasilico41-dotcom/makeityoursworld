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
      'Humberto Delgado Airport (LIS) is about 4 miles (7 km) from the center: by metro (red line) it takes about 20-25 minutes, or there are buses, taxis and ride-hailing apps. There is no convenient direct train from Italy, so you almost always arrive by plane. A metro ride costs about €1.90 plus €0.50 for the Navegante ocasional card, sold at the station machines; a metered taxi is about €12-20 with luggage, Uber and Bolt about €10-15.',
    comeSpostarsi: "There are lots of climbs, which is why there are the historic trams, the funiculars (elevadores) and the Santa Justa Lift. Metro, buses and suburban trains are paid with the Viva Viagem/Navegante contactless card. The center is also walkable, with a bit more breath for the hills.",
    periodoMigliore: 'April-May and September-October for the mild weather and fewer crowds; June-August is high season, hot and very crowded, especially on tram 28 and in Sintra; November-March is mild but rainy',
    costi:
      'a still fairly inexpensive city for Western Europe, although prices are rising: simple lunch 10-12€, normal dinner 15-20€ per person, tram or bus ticket about 2€. Rough daily budget per person, sharing a double: low €60-80, mid €110-150, high over €220.',
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
        "costo": "castle about €17 (2026); Alfama free",
        "orari": "Castle daily from 9; closes at 21 March-October and 18 in winter.",
        "lat": 38.7139,
        "lng": -9.1335,
        "url": "https://www.castelodesaojorge.pt/",
        "consiglio": "Get lost in the lanes without a map and walk down: the climb is the hard part, the descent is easy."
      },
      {
        "nome": "Belém: Jerónimos Monastery",
        "testo": "A 16th-century Manueline monastery, UNESCO-listed, with a two-storey cloister covered in maritime decoration and Vasco da Gama's tomb in the church. The south portal is one of Portugal's most elaborate works.",
        "come": "From the centre by tram 15 or by train from Cais do Sodré to Belém. The ticket is for the cloister; the church keeps its own hours.",
        "quando": "Cloister Tuesday to Sunday 9:30-17:30, last entry at 17:00. Closed on Mondays, 1 January, Easter Sunday, 1 May, 13 June and 25 December. Arrive at opening: by late morning the queue grows.",
        "tempo": "1.5 hours",
        "costo": "Cloister €18, 2026 (official site)",
        "orari": "Tuesday-Sunday 9:30-17:30. Closed Mondays.",
        "lat": 38.6979,
        "lng": -9.2068,
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "consiglio": "Buy the ticket from the official online ticket office to skip the queue at the desk. The church has a separate entrance from the cloister and is worth it on its own, for Vasco da Gama's tomb."
      },
      {
        "nome": "Belém Tower",
        "testo": "A Manueline fortress on the Tagus, built between 1514 and 1519 and UNESCO-listed together with the Jerónimos. The city's symbol: bastions, loggia and a terrace with river views. Inside the rooms are small and the climb narrow.",
        "come": "On foot from the Jerónimos along the river. Tram 15 and the train stop nearby.",
        "quando": "Tuesday to Sunday 9:30-17:30; closed on Mondays and on the same holidays as the Jerónimos. It may close when the weather makes the visit unsafe. Sunset lights it well from outside.",
        "tempo": "45 minutes inside, plus the walk",
        "costo": "€15, 2026 (official site)",
        "orari": "Tuesday-Sunday 9:30-17:30. Closed Mondays.",
        "lat": 38.6916,
        "lng": -9.216,
        "url": "https://mosteirojeronimos.torrebelem.gov.pt/",
        "consiglio": "For a photo from the shore, the riverside near the Padrão dos Descobrimentos is better than the interior."
      },
      {
        "nome": "Pastéis de Belém",
        "testo": "The pastry shop that has made pastéis de Belém since 1837, to an old recipe from the Jerónimos Monastery. Inside it is a maze of tiled rooms. They are eaten warm with cinnamon and icing sugar.",
        "come": "A few steps from the Jerónimos. Tram 15 and train stops are near.",
        "quando": "Open every day; hours on the official site. The queue outside moves fast because there is a takeaway counter.",
        "tempo": "half an hour",
        "costo": "about €1.50 per pastel (2026)",
        "lat": 38.6975,
        "lng": -9.2032,
        "url": "https://pasteisdebelem.pt/",
        "consiglio": "Go into the inner rooms instead of waiting at the counter: there's often space."
      },
      {
        "nome": "Baixa, Chiado and Praça do Comércio",
        "testo": "The centre rebuilt after 1755 with a grid of streets, the Praça do Comércio open to the Tagus and the Rua Augusta Arch. The Santa Justa Lift, from 1902, goes up to a viewpoint over the city. Chiado has historic bookshops and cafes.",
        "come": "On foot from the Baixa-Chiado or Terreiro do Paço metro. The lift is run by Carris, with a separate ticket.",
        "quando": "Morning for the square without crowds. The lift viewpoint fills up at midday.",
        "tempo": "half a day",
        "costo": "free; Arco da Rua Augusta ticketed",
        "lat": 38.7075,
        "lng": -9.1364,
        "url": "https://www.carris.pt/",
        "consiglio": "For a view from above, the Santa Luzia viewpoint or the Arch terrace avoids the lift queue."
      },
      {
        "nome": "Tram 28 and the viewpoints",
        "testo": "The historic yellow line that climbs through Graça, Alfama, Baixa and Estrela. For viewpoints: Santa Luzia, Portas do Sol, Senhora do Monte, Graça. The tram is crowded; the viewpoints can also be reached on foot.",
        "come": "The tram starts at Martim Moniz or Campo de Ourique. Pay with the rechargeable transport card or with an onboard ticket, which costs more.",
        "quando": "Early morning or in the evening: at midday it is packed. The miradouros at sunset.",
        "tempo": "2 hours for the ride",
        "costo": "about €3 per ride on board, less with the Navegante card; viewpoints free",
        "lat": 38.7118,
        "lng": -9.1301,
        "url": "https://www.carris.pt/",
        "consiglio": "Board at the terminus to get a seat."
      },
      {
        "nome": "LX Factory e Cais do Sodré",
        "testo": "LX Factory is a converted industrial complex under the 25 de Abril bridge, with bookshops, shops and restaurants. Nearby Cais do Sodré has the Time Out Market, in the Ribeira market hall, with stalls of chef-run food.",
        "come": "LX Factory: tram 15 or bus from the centre. Time Out Market: Cais do Sodré metro, on foot from the Baixa.",
        "quando": "LX Factory in the afternoon and on Sundays with the market. Time Out Market at lunch, but crowded.",
        "tempo": "2 hours",
        "costo": "free entry",
        "lat": 38.7034,
        "lng": -9.1786,
        "consiglio": "For dinner, the Cais do Sodré district with the Pink Street is livelier than the Time Out Market."
      },
      {
        "nome": "Oceanário e Parque das Nações",
        "testo": "One of Europe's largest indoor aquariums, opened in 1998, with a large central tank and habitats from the four oceans. Parque das Nações, the Expo 98 grounds, has a Tagus promenade and a cable car.",
        "come": "Red metro line to Oriente, then a short walk. From the airport it's on the same line.",
        "quando": "Morning, with fewer school groups. Useful on rainy days.",
        "tempo": "2-3 hours",
        "lat": 38.7636,
        "lng": -9.0938,
        "url": "https://www.oceanario.pt/",
        "consiglio": "Book online to skip the ticket queue."
      },
      {
        "nome": "Lisbon Cathedral (Sé)",
        "testo": "The 12th-century Romanesque cathedral, fortress-like, which survived the 1755 earthquake. In the cloister excavations show Roman, Moorish and medieval layers.",
        "come": "Halfway up from the Baixa to Alfama; trams 28 and 12 pass in front.",
        "quando": "On the way up to the castle in the morning.",
        "tempo": "30-45 minutes",
        "costo": "ticketed for tourists, cloister and treasury included",
        "orari": "Closed to tourist visits on Sundays.",
        "lat": 38.7099,
        "lng": -9.1335
      },
      {
        "nome": "Santa Justa Lift",
        "testo": "The 1902 neo-Gothic iron lift linking the Baixa to Largo do Carmo. The top platform looks over the castle, the Baixa and the river.",
        "come": "From Rua do Ouro, in the Baixa. Alternatively walk up through the Chiado and reach the platform from above, skipping the lift queue.",
        "quando": "At opening or in the evening; at midday the queue is long.",
        "tempo": "30 minutes plus the queue",
        "costo": "about €6 (€6.20 on board, up to two rides with viewpoint access, 2026), included in the Lisboa Card",
        "lat": 38.7121,
        "lng": -9.1394,
        "url": "https://www.carris.pt/"
      },
      {
        "nome": "Bairro Alto and Príncipe Real",
        "testo": "The Bairro Alto is a grid of lanes with tiny bars and fado houses, filling with people in the street at night. Higher up, Príncipe Real has gardens, 19th-century mansions and the São Pedro de Alcântara viewpoint.",
        "come": "On foot from the Chiado or by the Glória funicular from Restauradores.",
        "quando": "Afternoon for Príncipe Real, evening after 22 for the Bairro Alto.",
        "tempo": "2-3 hours",
        "costo": "free",
        "lat": 38.7166,
        "lng": -9.1489
      },
      {
        "nome": "National Tile Museum",
        "testo": "Five centuries of Portuguese tiles in the Madre de Deus convent, with an all-gold Baroque church and a 23-metre tile panorama of pre-earthquake Lisbon.",
        "come": "East of Alfama, off the beaten track: bus 759 or 794 from Praça do Comércio, or a taxi.",
        "quando": "A weekday morning, when it is quiet.",
        "tempo": "1.5 hours",
        "orari": "Closed Mondays.",
        "lat": 38.7247,
        "lng": -9.1135,
        "url": "https://www.museudoazulejo.gov.pt/"
      },
      {
        "nome": "Calouste Gulbenkian Museum",
        "testo": "An oil magnate's collection, from ancient Egypt to Persian carpets, from Rembrandt to Lalique jewellery, in a modernist building set in a garden. Next door is the Centro de Arte Moderna.",
        "come": "Metro to São Sebastião or Praça de Espanha.",
        "quando": "On a rainy day, or Sunday afternoon.",
        "tempo": "2 hours",
        "costo": "about €16 for the museum, €18 with the CAM and exhibitions (2026)",
        "orari": "10-18, Saturdays until 21. Closed Tuesdays.",
        "lat": 38.7375,
        "lng": -9.1545,
        "url": "https://gulbenkian.pt/museu/"
      },
      {
        "nome": "Monument to the Discoveries and MAAT",
        "testo": "The riverside Monument to the Discoveries, with Henry the Navigator at the prow and the compass rose in the square, and just east the MAAT, the art and architecture museum with a walkable roof over the river.",
        "come": "In Belém, on foot from the Jerónimos through the underpass; tram 15 or train from Cais do Sodré.",
        "quando": "At sunset, with light on the river and the 25 de Abril bridge.",
        "tempo": "1 hour",
        "costo": "square and MAAT roof free; Padrão viewpoint and exhibitions ticketed",
        "lat": 38.6936,
        "lng": -9.2058
      },
      {
        "nome": "Feira da Ladra and National Pantheon",
        "testo": "The Campo de Santa Clara flea market, with old objects, tiles and bric-a-brac, beneath the white dome of the National Pantheon, where Amália Rodrigues is buried. The Pantheon terrace looks over the Tagus.",
        "come": "Tram 28 to Voz do Operário, then on foot.",
        "quando": "Tuesday or Saturday morning, the market days.",
        "tempo": "1-2 hours",
        "costo": "market free; Pantheon ticketed",
        "orari": "Market on Tuesdays and Saturdays, morning to early afternoon; Pantheon closed Mondays.",
        "lat": 38.715,
        "lng": -9.125
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Alfama, the Sé and São Jorge Castle at opening",
          "Santa Luzia viewpoint and down to the Baixa for lunch",
          "Afternoon: Belém, Jerónimos, Belém Tower and a pastel de nata",
          "Sunset at the Monument to the Discoveries or a viewpoint, evening in the Bairro Alto"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Alfama, castle, tram 28, Baixa and Chiado, fado in the evening",
          "Day 2: Belém with Jerónimos, the Tower and MAAT, then LX Factory and Cais do Sodré; sunset at São Pedro de Alcântara"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Alfama, castle, Sé and Feira da Ladra (Tuesday or Saturday), Baixa",
          "Day 2: Belém and LX Factory, evening in the Bairro Alto",
          "Day 3: trip to Sintra, back for dinner; alternatively Gulbenkian, the Tile Museum and Parque das Nações"
        ]
      }
    ],
    zone: [
      {
        "nome": "Baixa and Chiado",
        "perChi": "those who want convenience",
        "testo": "Central, flat and close to metro and trains. Noisy in the evening and pricey. Few genuinely local places.",
        "fascia": "130-250 €"
      },
      {
        "nome": "Alfama and Graça",
        "perChi": "those who want atmosphere",
        "testo": "Lanes, fado, viewpoints. Slopes and steps, hard for taxis, loud music at night.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Príncipe Real, Estrela and Campo de Ourique",
        "perChi": "those who want residential districts",
        "testo": "Quieter, with gardens and good shops. Further from the river.",
        "fascia": "120-220 €"
      }
    ],
    gite: [
      {
        "nome": "Sintra",
        "distanza": "40 minutes by train",
        "come": "Train from Rossio station on the Navegante card, then bus 434 to Pena and the Moorish Castle.",
        "testo": "Pena Palace, Quinta da Regaleira and the Moorish Castle in the hill forests. Pena and Regaleira must be booked online with a time slot."
      },
      {
        "nome": "Cascais and the Estoril coast",
        "distanza": "40 minutes by train",
        "come": "Train from Cais do Sodré along the sea, roughly every 20 minutes.",
        "testo": "The fishing town turned resort, with beaches, an old centre and the Boca do Inferno. By bike you can reach Guincho beach."
      },
      {
        "nome": "Setúbal and Arrábida",
        "distanza": "50 km, 45 minutes by car",
        "come": "By car or bus from Sete Rios; for the hill-park beaches a car is almost essential.",
        "testo": "The Arrábida natural park, with turquoise coves beneath the hills, and Setúbal for choco frito. Boat trips to see the Sado dolphins leave from here."
      },
      {
        "nome": "Óbidos",
        "distanza": "85 km, 1 hour by bus",
        "come": "Direct buses from Campo Grande.",
        "testo": "A white-and-yellow village inside medieval walls you can walk along, with ginjinha served in chocolate cups."
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
    faq: [
      {
        "domanda": "How many days do you need in Lisbon?",
        "risposta": "Three days: one for Alfama and the Baixa, one for Belém, one for Sintra. With four or five, add Cascais, the museums and an unhurried fado night."
      },
      {
        "domanda": "Is the Lisboa Card worth it?",
        "risposta": "It pays off if you pack the Jerónimos, Belém Tower, Santa Justa and lots of transport, including the Sintra train, into a few days. If you walk a lot and see few museums, the rechargeable Navegante card is enough."
      },
      {
        "domanda": "How do you avoid the tram 28 queue?",
        "risposta": "Ride early in the morning or in the evening, or board at an intermediate stop rather than the Martim Moniz terminus. It is also pickpockets' favourite transport."
      },
      {
        "domanda": "Can you do Sintra as a day trip from Lisbon?",
        "risposta": "Yes, by train from Rossio in 40 minutes, setting off early: two palaces calmly, three if you rush. Pena and Regaleira must be booked online."
      },
      {
        "domanda": "Where to stay in Lisbon?",
        "risposta": "Baixa and Chiado for convenience, Alfama and Graça for atmosphere, Príncipe Real and Estrela for quiet. A double costs about €100-250; the hills and cobbles make staying near a metro useful."
      },
      {
        "domanda": "How do you get from the airport to central Lisbon?",
        "risposta": "By metro, red line, in 20-25 minutes for about €1.90 plus €0.50 for the card. A metered taxi is about €12-20; Uber and Bolt about €10-15."
      }
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
      "From Rossio station, in the heart of Lisbon, the CP Sintra line train reaches the end of the line in about 40 minutes, with frequent services from morning to evening. A Lisbon-Sintra return costs €5.10 (CP fares 2026) and is loaded on the €0.50 Navegante ocasional card; the €14 Train&Bus ticket is valid for a day on the train and on Scotturb buses 434 (Pena) and 435 (Monserrate). From the airport take the red metro line and change at Alameda to the green line for Rossio. By car, parking in the centre is scarce.",
    comeSpostarsi: "Local bus 434 runs a loop between the station, the historic center and the Pena Palace. The pedestrian center is walkable, but between the main sites (Pena, Regaleira, Castelo dos Mouros) it's always uphill, and the distances are longer than they look on the map.",
    periodoMigliore:
      "the climate is fine all year; the problem is the crowd. On weekends and in high season (June-August) the lines at the main palaces get very long already from late morning. On a weekday, leaving as early as possible, the wait is greatly reduced in any season.",
    costi: "Pena Palace €20 (park and palace), park only €12; Quinta da Regaleira €20; Moorish Castle and Monserrate €12; National Palace €13; Convent of the Capuchos €11; train from Lisbon €5.10 return. Indicative daily budget per person on a day trip from Lisbon, entries included: low €40-60, mid €70-100, high over €150.",
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
        "consiglio": "The park can be visited on its own without the palace queue and has viewpoints: useful if the queues are too long.",
        "orari": "Park 9:00-19:00 (last entry 18:00), palace 9:30-18:30 (last entry 17:30).",
        "lat": 38.78778,
        "lng": -9.39056
      },
      {
        "nome": "Quinta da Regaleira",
        "testo": "A neo-Gothic villa built between 1904 and 1910, with a garden full of symbols, grottoes and galleries. The Poço Iniciático is a 27-metre-deep well with a spiral staircase, linked to tunnels that come out at a small lake.",
        "come": "On foot from central Sintra, gently uphill. Tickets are sold at the desk or from the official online ticket office, which avoids the queue.",
        "quando": "Early morning or early afternoon: by late morning the well fills up. Hours on the official site.",
        "tempo": "2 hours",
        "url": "https://www.regaleira.pt/",
        "consiglio": "Go down the well in non-slip shoes and return through the tunnels: the exit is nicer than the descent.",
        "costo": "20 euros from January 2026 (official site)",
        "orari": "January-March and October-December 10:00-18:30; April-September 9:00-19:30. Last entry always at 17:30; the palace and chapel close 30 minutes before the garden.",
        "lat": 38.79511,
        "lng": -9.3962
      },
      {
        "nome": "Castelo dos Mouros",
        "testo": "The ruins of the fortress built by the Moors in the 8th and 9th centuries on the ridge above Sintra, with walls and towers linked by walkways. From the top you see the Pena, the town and the ocean.",
        "come": "From the centre on foot, uphill, or by bus 434 to the castle stop. Stretches of steps on uneven stone.",
        "quando": "Morning, with less wind. In fog the view is lost.",
        "tempo": "1-1.5 hours",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "If you have time for only one castle or palace besides the Pena, the crowds here are smaller.",
        "costo": "12 euros (Parques de Sintra)",
        "orari": "9:30-18:00, last entry 17:30.",
        "lat": 38.79241,
        "lng": -9.38867
      },
      {
        "nome": "Palácio Nacional de Sintra",
        "testo": "The royal palace in the centre, recognisable by the two white conical chimneys of the kitchens. Inside are the Swan Room, the Magpie Room and a large collection of azulejos from the 1400s.",
        "come": "On foot from the station. It's on the town's main square.",
        "quando": "Before lunch; the square is quieter in the evening.",
        "tempo": "1 hour",
        "url": "https://www.parquesdesintra.pt/",
        "consiglio": "Visit it if you're in town in the afternoon: less queue than the Pena.",
        "costo": "essential visit 13 euros (Parques de Sintra)",
        "orari": "Palace and gardens 9:30-18:30; last entry to the palace 17:30.",
        "lat": 38.79778,
        "lng": -9.39083
      },
      {
        "nome": "Cabo da Roca",
        "testo": "The westernmost point of continental Europe, with a lighthouse on cliffs dropping into the Atlantic, about 140 metres above the sea. The monument recalls Camões's line describing the place \"where the land ends and the sea begins\".",
        "come": "From Sintra centre by the scheduled bus towards Cascais (times on the Carris Metropolitana app) or by car.",
        "quando": "At sunset in strong wind; bring a jacket even in summer.",
        "tempo": "1 hour",
        "consiglio": "The visit certificate is bought at the small tourist office: it's a souvenir, not required.",
        "costo": "free",
        "lat": 38.78083,
        "lng": -9.50056
      },
      {
        "nome": "Monserrate Park and Palace",
        "testo": "A 19th-century palace with domes and decoration inspired by Moorish and Indian art, built for the English collector Francis Cook. Around it is a sloping botanical park with tree ferns, lawns and plants from every continent. It has far fewer people than Pena.",
        "come": "West of the centre, with Scotturb bus 435 from the station or by car. The road passes the Quinta da Regaleira and Seteais.",
        "quando": "In the afternoon, after Pena; with the sun low the palace turns pink.",
        "tempo": "2 hours",
        "costo": "12 euros (Parques de Sintra)",
        "orari": "Park 9:00-19:00 (last entry 18:00), palace 9:30-18:00.",
        "lat": 38.79423,
        "lng": -9.42065,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Convent of the Capuchos",
        "testo": "A small 16th-century Franciscan convent hidden in the forest of the serra, with tiny cells and low doors lined with cork. It is the opposite of the royal palaces: poor, silent, almost carved into the rock.",
        "come": "It is isolated in the forest of the serra, away from the centre: you get there by car or taxi.",
        "quando": "On foggy days, when the forest around it is at its best.",
        "tempo": "1 hour",
        "costo": "11 euros (Parques de Sintra)",
        "orari": "9:00-17:30, last entry 17:00.",
        "lat": 38.7844,
        "lng": -9.43817,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Chalet of the Countess of Edla",
        "testo": "An Alpine-style chalet built by Ferdinand II and his second wife, the singer Elise Hensler, in the western part of the Pena park. Outside it is decorated with imitation wood and cork, inside with azulejos and stucco.",
        "come": "Inside the Pena park: you reach it on foot from the palace along the park trails.",
        "quando": "After Pena, when people concentrate on the palace.",
        "tempo": "45 minutes",
        "costo": "included in the Pena park ticket, 12 euros (Parques de Sintra)",
        "orari": "Chalet 9:00-17:30, last entry 17:00; park 9:00-19:00.",
        "lat": 38.7851,
        "lng": -9.39911,
        "url": "https://www.parquesdesintra.pt/"
      },
      {
        "nome": "Palácio de Seteais",
        "testo": "A late 18th-century neoclassical palace, now a hotel, with a large arch between its two wings. From the lawn in front you see Pena and the Moorish Castle on the ridge.",
        "come": "On foot from the centre, 10-15 minutes on the road to Monserrate, just after the Quinta da Regaleira.",
        "quando": "In the late afternoon, on the way back from Monserrate.",
        "tempo": "20-30 minutes",
        "lat": 38.7968,
        "lng": -9.39957
      },
      {
        "nome": "Azenhas do Mar",
        "testo": "A village of white houses clinging to a cliff above the Atlantic, over a natural pool carved among the rocks. It is the postcard of the Sintra coast, about twenty minutes from the serra.",
        "come": "By car from the centre of Sintra towards Colares and the coast. The viewpoint is on the road above the village.",
        "quando": "At sunset; the natural pool is usable at low tide with a calm sea.",
        "tempo": "1 hour",
        "lat": 38.84096,
        "lng": -9.46191
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Train from Rossio, leaving before 8:00",
          "Pena Palace at opening time",
          "Moorish Castle or Regaleira in the late morning",
          "Lunch in the centre with a travesseiro",
          "Train back in the afternoon"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Pena, Chalet of the Countess of Edla, Moorish Castle, old town",
          "Day 2: Regaleira at opening time, Seteais and Monserrate, National Palace in the late afternoon"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above",
          "Day 3: Convent of the Capuchos in the morning, Azenhas do Mar, Cabo da Roca at sunset and back via Cascais"
        ]
      }
    ],
    zone: [
      {
        "nome": "Day trip from Lisbon",
        "perChi": "most visitors",
        "testo": "Train from Rossio in under an hour, back in the evening. A tight pace with the queues, but low cost.",
        "fascia": "100-250 € in Lisbon"
      },
      {
        "nome": "Sintra, old town",
        "perChi": "those who want the town without the crowds",
        "testo": "Sleeping in town means seeing Pena at opening and the centre in the evening. Few hotels and high prices.",
        "fascia": "110-200 €"
      },
      {
        "nome": "Colares and the coast",
        "perChi": "those with a car who want the sea nearby",
        "testo": "Quintas and rental houses among the Colares vineyards, a few minutes from Azenhas do Mar and the beaches. Quiet evenings, but you need a car for the palaces.",
        "fascia": "90-180 €"
      }
    ],
    gite: [
      {
        "nome": "Cascais and Boca do Inferno",
        "distanza": "about 30-40 minutes by bus or car",
        "come": "Scheduled bus from Sintra via Cabo da Roca, or by car; from Cascais you return to Lisbon by train to Cais do Sodré in about 40 minutes.",
        "testo": "The seaside town that was the court's summer residence, with its harbour, the town beach and the Boca do Inferno cliffs a few minutes' walk away."
      },
      {
        "nome": "Queluz National Palace",
        "distanza": "about 20 minutes by train",
        "come": "Sintra line train to Queluz-Belas, then on foot to the palace.",
        "testo": "The Rococo palace of the Braganzas, with gilded halls, French-style gardens and a canal lined with azulejos. It is on the Lisbon-Sintra line, so it fits in without detours. Palace and gardens 13 euros, gardens only 6 euros; 9:00-18:00, gardens until 18:30 (Parques de Sintra)."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Sintra?",
        "risposta": "A full day is enough for Pena and one or two other sites. With two days you add Monserrate, Seteais and the National Palace without rushing, with a third also the Capuchos and the coast."
      },
      {
        "domanda": "Do you need to book Pena and Regaleira?",
        "risposta": "Pena Palace can only be visited with a date and time slot, so it must be booked on the Parques de Sintra website. For Regaleira, an online ticket saves the queue at the ticket office."
      },
      {
        "domanda": "How do you get to Sintra from Lisbon?",
        "risposta": "By CP train from Rossio, about 40 minutes; a return costs 5.10 euros. The 14-euro Train&Bus ticket also includes buses 434 and 435."
      },
      {
        "domanda": "If there is time for only one site, Pena or Regaleira?",
        "risposta": "Pena for the views and the royal interiors, Regaleira for the well and the symbolic gardens. With real queues, late arrivals find Regaleira easier to manage."
      },
      {
        "domanda": "Is it worth driving to Sintra?",
        "risposta": "Usually not: private cars cannot go up to Pena and parking in the centre is scarce at weekends. A car is only useful for the Capuchos and the coast."
      },
      {
        "domanda": "Is it worth staying overnight in Sintra?",
        "risposta": "Yes, if you want Pena at opening time and the centre in the evening without groups. There are few hotels and they cost more than in Lisbon, so book early."
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
