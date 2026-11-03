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
    esperienzeSlugs: ['sintra-giornata-da-lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'The Pena National Palace of Sintra with its yellow and red towers emerging from the woods under a blue sky',
    immagine: '/images/portogallo/sintra.jpg',
  },
]
