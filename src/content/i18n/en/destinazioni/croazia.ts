import type { Destinazione } from '@/lib/types'

export const destinazioniCroazia: Destinazione[] = [
  {
    slug: 'zagabria',
    paeseSlug: 'croazia',
    ordine: 1,
    nome: 'Zagreb',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: "1-2 days",
    visitataPersonalmente: true,
    introduzione:
      "The capital, divided between the medieval Upper Town and the Austro-Hungarian Lower Town, with cafés, museums and the Dolac market. It's the natural starting point for Plitvice.",
    percheAndarci: "For a continental, Central European Croatia, different from the coast.",
    cosaVedere: [
      "St. Mark's Church and the Upper Town",
      "The Lotrščak Tower and the noon cannon",
      "The Dolac market",
      "The Museum of Broken Relationships",
    ],
    cosaFare: ["An evening in the cafés of Tkalčićeva Street", "Štrukli at a trattoria in the Upper Town", "The Christmas market in December"],
    doveDormire: "Lower Town or near Jelačić Square: budget €50-80, mid-range €90-150, high-end over €200.",
    comeArrivare: "Zagreb airport; by car from Trieste in about two and a half hours.",
    comeSpostarsi: "On foot, by tram and with the funicular to the Upper Town.",
    periodoMigliore: "April-October; December for Advent.",
    erroriDaEvitare: ["Skipping it altogether to rush to the sea"],
    luoghi: [
      {
        nome: "Upper Town (Gornji grad)",
        testo: "The medieval core on a hill, with St Mark's church and its tiled roof, the Lotrščak tower (where a cannon fires every day at noon) and the old town lanes.",
        come: "On foot from the Lower Town or by funicular, one of the world's shortest (66 metres of track).",
        quando: "Morning or late afternoon. The cannon fires at noon.",
        tempo: "2 hours",
        consiglio: "Walk up from Tkalčićeva street and come down by funicular."
      },
      {
        nome: "Dolac Market",
        testo: "The city's open-air market above Jelačić Square, with fruit and vegetable stalls under red umbrellas and cheese in the covered market below.",
        come: "On foot from the centre, a few minutes from Jelačić Square.",
        quando: "Morning, until midday, when the stalls are full.",
        tempo: "1 hour",
        consiglio: "Try fresh cream cheese (sir i vrhnje) with warm bread."
      },
      {
        nome: "Museum of Broken Relationships",
        testo: "A small museum of objects donated by people all over the world, each with the story of a relationship that ended. Funny and at times moving.",
        come: "On foot from the Upper Town, on Sv. Ćirila i Metoda street.",
        quando: "Morning or afternoon, avoiding weekends.",
        tempo: "1 hour",
        consiglio: "The point is the donors' stories next to each object: allow time to read them."
      },
      {
        nome: "Mirogoj Cemetery",
        testo: "The city's monumental cemetery, opened in 1876, with the main building designed by architect Hermann Bollé. The long arcades and cupolas enclose graves of every faith, side by side. It is one of the most beautiful and peaceful places in Zagreb, and few tourists get there.",
        come: "By city bus from Kaptol, near the cathedral, or uphill on foot.",
        quando: "Morning or late afternoon; in early November it is full of candles.",
        tempo: "1 hour",
        costo: "Free.",
        consiglio: "Stay on the paths and keep your voice down: it is a working cemetery."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Dolac market in the morning",
          "Cathedral and Upper Town",
          "Lunch with štrukli",
          "Museum of Broken Relationships",
          "Aperitif on Tkalčićeva street"
        ]
      }
    ],
    zone: [
      {
        nome: "Lower Town",
        perChi: "for station and trams",
        testo: "Hotels and apartments within walking distance of everything; the centre is lively and a bit noisy at night."
      },
      {
        nome: "Near Jelačić Square",
        perChi: "for short stays",
        testo: "Everything on foot; prices are a little higher."
      }
    ],
    sapori: [
      {
        nome: "Štrukli",
        testo: "Pasta filled with fresh cheese, boiled or baked, the city's signature dish."
      },
      {
        nome: "Purica s mlincima",
        testo: "Roast turkey with thin baked pasta, a Croatian home-cooking dish."
      },
      {
        nome: "Kremšnita",
        testo: "Custard and cream between two pastry layers, typical of Samobor near the city."
      }
    ],
    attenzioni: [
      "For taxis, use apps (Bolt, Uber) or cars with a displayed fare: prices vary at the station.",
      "Accommodation prices rise at Christmas: book ahead.",
      "On Advent market weekends the centre gets very crowded: a weekday is better."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: "St. Mark's Church with its colorful tiled roof in Zagreb",
    immagine: '/images/viaggi/croazia-itinerario/giorno-01-zagabria.jpg',
  },
  {
    slug: 'plitvice',
    paeseSlug: 'croazia',
    ordine: 2,
    nome: 'Plitvice Lakes',
    tipologia: ['parco nazionale', 'laghi', 'cascate'],
    giorniConsigliati: "1-2 days",
    visitataPersonalmente: true,
    introduzione:
      "Sixteen terraced lakes linked by waterfalls and travertine barriers, crossed by wooden walkways, in Croatia's oldest national park, a UNESCO site since 1979.",
    percheAndarci: "For the waterfalls and the colors of the lakes, best seen at opening time.",
    cosaVedere: ["Veliki Slap, the tallest waterfall (78 m)", "The lower lakes and the canyon", "The upper lakes and Lake Kozjak"],
    cosaFare: ["Enter at opening from Entrance 2 for the upper lakes", "Do the lower lakes in the late afternoon"],
    doveDormire: "Guesthouses and rooms at Mukinje, Rastovača and Grabovac (€60-120); a few hotels inside the park.",
    comeArrivare: "By car from Zagreb (about 2 hours) or from Zadar (about 2 hours); buses from both cities.",
    comeSpostarsi: "On foot on the walkways, electric boat on Lake Kozjak and panoramic trains included in the ticket.",
    periodoMigliore: "May-June and September-October; July-August very crowded.",
    costi: "Day ticket about €40 in June-September, less in spring and autumn; to be bought online with a time slot.",
    erroriDaEvitare: [
      "Arriving mid-morning in high season",
      "Not booking the entry slot online",
      "Thinking you can swim: it's forbidden",
    ],
    luoghi: [
      {
        nome: "Upper lakes and Kozjak",
        testo: "Sixteen lakes linked by waterfalls on travertine terraces, with wooden walkways over turquoise water. UNESCO site since 1979.",
        come: "Entrance 2 for the upper lakes. Trails marked with letters (A-K) and an electric boat on Kozjak included in the ticket.",
        quando: "At opening or after 3 pm, to avoid coach hours. The greenest period is May-June; in autumn the colours are stronger.",
        tempo: "4-6 hours for a full route",
        costo: "€40 from June to September (€25 after 4 pm in June-August and after 3 pm in September), €23 in April, May and October, €10 from November to March (2026). Buy only on the official website.",
        url: "https://np-plitvicka-jezera.hr/en/",
        consiglio: "In high season buy the ticket online in advance: it can sell out at the gates. It must be validated at the entrance chosen when buying."
      },
      {
        nome: "Veliki slap",
        testo: "The park's highest waterfall, about 78 metres, at the end of the lower lakes. Seen from the walkway below or the trail above.",
        come: "Entrance 1 for the lower lakes and Veliki slap, on foot with steps.",
        quando: "Early morning or late afternoon.",
        tempo: "1 hour",
        consiglio: "A great last stop: then take the panoramic train back up."
      },
      {
        nome: "Lower lakes and canyon",
        testo: "A wilder, less crowded stretch, with rock walls, caves and waterfalls springing from the limestone. The boardwalks run just above the water between the Milanovac, Gavanovac and Kaluđerovac lakes, down to the canyon where the lakes end in the Korana. From the upper path you see the whole staircase of lakes from above, the postcard view.",
        come: "On foot from entrance 1 along the signed path.",
        quando: "Morning.",
        tempo: "2 hours",
        consiglio: "Non-slip soles: walkways are wet."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Entrance 2 at opening",
          "Upper lakes and Kozjak by boat",
          "Lunch in the park",
          "Lower lakes and Veliki slap in the afternoon"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: upper lakes and Kozjak",
          "Day 2: lower lakes, canyon and quieter trails"
        ]
      }
    ],
    zone: [
      {
        nome: "Mukinje and Rastovača",
        perChi: "to stay close",
        testo: "Guesthouses and rooms near the entrance, handy for early mornings."
      },
      {
        nome: "Grabovac",
        perChi: "for lower prices",
        testo: "Cheaper, a few minutes by car from the entrance."
      }
    ],
    sapori: [
      {
        nome: "Grilled lamb",
        testo: "Prepared in restaurants on the road to the park, with potatoes."
      },
      {
        nome: "Trout",
        testo: "From the area's rivers, grilled or fried."
      },
      {
        nome: "Štrukli and cheese cream",
        testo: "Found in taverns near the entrance."
      }
    ],
    attenzioni: [
      "Swimming in the lakes is forbidden and patrolled: stay on the paths.",
      "In summer tickets can sell out: buy them online before you go.",
      "Bring food and water: inside, services are few and expensive."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: "A wooden walkway next to a waterfall and the turquoise water of the Plitvice lakes",
    immagine: '/images/viaggi/croazia-itinerario/giorno-03-plitvice.jpg',
  },
  {
    slug: 'zara-krka-sebenico',
    paeseSlug: 'croazia',
    ordine: 3,
    nome: 'Zadar, Krka and Šibenik',
    tipologia: ['città storiche', 'parco nazionale', 'mare'],
    giorniConsigliati: "2 days",
    visitataPersonalmente: true,
    introduzione:
      "Northern Dalmatia: Zadar with its Roman and Venetian center and the waterfront installations, the travertine waterfalls of Krka National Park and Šibenik with the Cathedral of St. James.",
    percheAndarci: "For the sunset at the Sea Organ, the Krka waterfalls and two historic towns less crowded than Split and Dubrovnik.",
    cosaVedere: [
      "The Sea Organ and the Greeting to the Sun in Zadar",
      "The Church of St. Donatus and the Roman forum",
      "Skradinski Buk and the Visovac monastery in Krka",
      "The Cathedral of St. James in Šibenik",
    ],
    cosaFare: ["The boat from Skradin to the waterfalls", "A day trip to the Kornati or Ugljan from Zadar"],
    doveDormire: "Apartments in the old towns (€80-150); hotels at Borik, near Zadar.",
    comeArrivare: "By car from Plitvice; Zadar airport with seasonal flights.",
    periodoMigliore: "May-June and September.",
    costi: "Krka about €40 in summer, much less in low season.",
    erroriDaEvitare: ["Expecting to swim under the Krka waterfalls: it has been forbidden since 2021"],
    luoghi: [
      {
        nome: "Zadar: Sea Organ and Greeting to the Sun",
        testo: "Two installations on the old town waterfront: the Sea Organ plays as waves enter tubes under the steps, and next to it a glass disc catches the sunset light. Both are by architect Nikola Bašić.",
        come: "On foot from the old town, along the Riva.",
        quando: "At sunset, when it plays and glows.",
        tempo: "1 hour",
        consiglio: "Sit on the steps: the sound changes with wind and waves."
      },
      {
        nome: "Zadar Old Town",
        testo: "A peninsula with the Roman Forum, the round church of St Donatus (9th century) and Romanesque churches. Heavily damaged in World War II and rebuilt.",
        come: "On foot from the car parks outside the walls.",
        quando: "Morning or evening.",
        tempo: "2 hours",
        consiglio: "The fish and produce market near the walls is a good breakfast."
      },
      {
        nome: "Skradinski buk (Krka)",
        testo: "A series of waterfalls and pools on travertine terraces in Krka National Park. You walk on boardwalks and take a boat from Skradin.",
        come: "By car from Šibenik. Start from the Skradin entrance with the boat included in the ticket.",
        quando: "Early morning or late day. May-June and September.",
        tempo: "3-4 hours",
        costo: "€40 from June to September, €20 in April, May and October, €7 from November to March (2026); from 1 April to 31 October it includes the boat from Skradin.",
        url: "https://np-krka.hr/en/",
        consiglio: "Swimming at the foot of the falls is no longer allowed."
      },
      {
        nome: "St James' Cathedral, Šibenik",
        testo: "A Renaissance stone cathedral, UNESCO listed, built without mortar using interlocking blocks. Over 70 carved faces run along its outer frieze.",
        come: "On foot from the old centre.",
        quando: "Morning.",
        tempo: "45 minutes",
        consiglio: "Look at the faces on the apses: they are thought to show people of Dalmatia at the time."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Zadar in the morning",
          "Lunch in town",
          "Sunset at the Sea Organ"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Zadar and sunset on the Riva",
          "Day 2: Krka in the morning, Šibenik in the afternoon"
        ]
      }
    ],
    zone: [
      {
        nome: "Zadar Old Town",
        perChi: "for the centre",
        testo: "Stone lodgings steps from everything; lively at night around the Riva."
      },
      {
        nome: "Šibenik",
        perChi: "to reach Krka",
        testo: "Quieter than Split, handy for the motorway and the park."
      }
    ],
    sapori: [
      {
        nome: "Maraschino",
        testo: "Cherry liqueur typical of Zadar."
      },
      {
        nome: "Paška janjetina",
        testo: "Roast lamb from the island of Pag."
      },
      {
        nome: "Sir iz mišine",
        testo: "Aged cheese from Pag."
      },
      {
        nome: "Šibenik fish",
        testo: "Simple seafood cooking in the harbour konobe."
      }
    ],
    attenzioni: [
      "Swimming at Krka is no longer allowed: ask at the ticket desks about restrictions.",
      "In July and August the falls fill up: arrive at opening.",
      "Parking near the old town is paid and time-limited."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: "Skradinski Buk in Krka National Park",
    immagine: '/images/viaggi/croazia-itinerario/giorno-05-zara-krka-sebenico.jpg',
  },
  {
    slug: 'spalato',
    paeseSlug: 'croazia',
    ordine: 4,
    nome: 'Split and Trogir',
    tipologia: ['città romana', 'mare', 'porto'],
    giorniConsigliati: "2 days",
    visitataPersonalmente: true,
    introduzione:
      "Split lives inside the palace that Emperor Diocletian had built around 300 AD. Half an hour away is Trogir, a medieval little island and UNESCO site. The port is the hub for ferries to the islands.",
    percheAndarci: "For Diocletian's Palace, the Riva, Marjan and the connections to Hvar, Brač and Vis.",
    cosaVedere: [
      "The Peristyle and the Cathedral of St. Domnius",
      "The palace cellars",
      "Marjan hill",
      "The center of Trogir and Radovan's portal",
    ],
    cosaFare: ["Picigin at Bačvice", "Climb the bell tower of St. Domnius", "An evening on the Riva"],
    doveDormire: "Inside or next to the palace (rooms €100-180); hostels from €30-40 a bed.",
    comeArrivare: "Split airport; car, bus or ferry from Ancona.",
    comeSpostarsi: "On foot in the center; bus to Trogir; catamarans from the port to the islands.",
    periodoMigliore: "May-June and September-October.",
    costi: "Palace cellars €10-15.",
    erroriDaEvitare: ["Walking around the old town in swimwear: you'll get fined"],
    luoghi: [
      {
        nome: "Diocletian's Palace",
        testo: "The palace-fortress of the Roman emperor Diocletian, built in the late 3rd century and up to AD 305, inside which the old town lives today. Peristyle, mausoleum turned cathedral and underground halls are the heart of the visit.",
        come: "On foot from the Riva, via the Silver or Bronze Gate. Streets are free; the cathedral, bell tower and cellars are paid.",
        quando: "Early morning or evening: in the middle of the day the lanes are full.",
        tempo: "2-3 hours",
        consiglio: "The cellars: paid entry, almost empty and photogenic."
      },
      {
        nome: "Cathedral of St Domnius and bell tower",
        testo: "Diocletian's octagonal mausoleum, turned into a cathedral in the 7th century, is one of the oldest buildings in the world still used as a church. The 57-metre bell tower gives a view over the roofs.",
        come: "Inside the Peristyle. Ticket for the cathedral and bell-tower climb.",
        quando: "Morning.",
        tempo: "1 hour",
        consiglio: "Climb the tower for the view: the steps are many and narrow."
      },
      {
        nome: "Marjan Hill",
        testo: "The wooded park above the city, with trails, small chapels and a viewpoint over the harbour and the islands. From the Veli Varoš quarter you climb to the first viewpoint; further on the pine forest continues to the summit, with its large white cross, and to small beaches on the open-sea side. It is where locals go to run and swim, away from the crowds of the palace.",
        come: "On foot from the Veli Varoš district, uphill to the viewpoint.",
        quando: "Late afternoon.",
        tempo: "2 hours",
        consiglio: "Bring water: there are no bars on the way up."
      },
      {
        nome: "Trogir",
        testo: "A small medieval island-town west of Split, with St Lawrence cathedral and its portal carved by Radovan. UNESCO site.",
        come: "By car or bus from Split. Visited on foot.",
        quando: "Morning.",
        tempo: "3 hours",
        consiglio: "In the afternoon stop for an ice cream on the Riva."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Diocletian's Palace in the morning",
          "Lunch in the old town",
          "Marjan climb in the afternoon",
          "Dinner on the Riva"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: palace, cathedral and cellars",
          "Day 2: Trogir in the morning, Klis or Salona in the afternoon"
        ]
      }
    ],
    zone: [
      {
        nome: "Old town",
        perChi: "for the centre",
        testo: "Rooms inside the palace, on foot from everything; noisy late in the evening."
      },
      {
        nome: "Veli Varoš",
        perChi: "for a quiet district",
        testo: "Fishermen's houses a short walk from the centre, below Marjan."
      }
    ],
    sapori: [
      {
        nome: "Pašticada",
        testo: "Beef stewed in a wine and plum sauce, with gnocchi."
      },
      {
        nome: "Soparnik",
        testo: "Savoury Swiss chard pie from Dalmatia, baked under the embers."
      },
      {
        nome: "Crni rižot",
        testo: "Black cuttlefish-ink risotto."
      },
      {
        nome: "Rožata",
        testo: "Dalmatian caramel custard with a typical rose-liqueur flavour."
      }
    ],
    attenzioni: [
      "Unmarked taxis in Split can charge far more than the fare: use Bolt or Uber.",
      "For ferries in summer, book the car space with Jadrolinija.",
      "Beware of tourist-menu restaurants in squares with high prices: moving one street away cuts the cost."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: "The columns and arches of the Peristyle of Diocletian's Palace in Split",
    immagine: '/images/viaggi/croazia-itinerario/giorno-07-spalato.jpg',
  },
  {
    slug: 'hvar',
    paeseSlug: 'croazia',
    ordine: 5,
    nome: 'Hvar',
    tipologia: ['isola', 'mare', 'vita notturna'],
    giorniConsigliati: "2 days",
    visitataPersonalmente: true,
    introduzione:
      "The sunniest island in the Adriatic, with a Venetian town on the bay, the Pakleni Islands facing the harbor, lavender fields inland and the Stari Grad Plain, a UNESCO site.",
    percheAndarci: "For the coves of the Pakleni, the sunset from the fortress and, for those who look for it, the nightlife.",
    cosaVedere: ["The Spanish Fortress", "St. Stephen's Square and the 1612 theater", "The Pakleni Islands", "The Stari Grad Plain"],
    cosaFare: ["Water taxi to Palmižana", "A tour of the interior among lavender and abandoned villages"],
    doveDormire: "Hvar town for evening life (€100-220, more in August), Stari Grad and Jelsa for quiet.",
    comeArrivare: "Catamaran from Split (about 1 hour); car ferry from Split to Stari Grad.",
    periodoMigliore: "June and September; lavender in bloom between June and July.",
    costi: "Water taxi to the Pakleni €10-15 round trip.",
    erroriDaEvitare: ["Drinking in the street or walking around town in swimwear: heavy fines", "Arriving in August without booked accommodation"],
    luoghi: [
      {
        nome: "Hvar town and Spanish Fortress",
        testo: "A Venetian town on the sea with the largest square in Dalmatia, St Stephen's cathedral and the seventeenth-century theatre above the arsenal. Above the town stands the sixteenth-century fortress (Fortica), with views over the harbour and the Pakleni islands.",
        come: "On foot from the harbour. The fortress is an uphill walk from town.",
        quando: "Fortress in the morning or late afternoon, because of the heat.",
        tempo: "2-3 hours",
        consiglio: "Climb to the fortress at sunset and have dinner afterwards in a lane away from the square."
      },
      {
        nome: "Pakleni Islands",
        testo: "An archipelago of islets with bays and clear water in front of Hvar town. Reached by water-taxi from the harbour.",
        come: "Water-taxi from Hvar harbour, return at agreed times.",
        quando: "Morning; the bays are calmer before midday.",
        tempo: "half a day",
        consiglio: "Agree the return time with the boatman."
      },
      {
        nome: "Stari Grad Plain",
        testo: "A farming landscape of walls and fields divided by Greek colonists in the 4th century BC, nearly unchanged; UNESCO listed.",
        come: "From Stari Grad by bike or on foot along paths between olives and vines.",
        quando: "Spring and autumn.",
        tempo: "2-3 hours",
        consiglio: "The ferry from Split arrives at Stari Grad, not Hvar town."
      },
      {
        nome: "Stari Grad",
        testo: "The oldest town on the island, founded by Greeks from Paros in 384 BC under the name Pharos. The long, narrow harbour is full of boats and stone houses, and in the centre stands the Tvrdalj, the fortified villa of the Renaissance poet Petar Hektorović. It is quieter and cheaper than Hvar town.",
        come: "The car ferry from Split arrives here; Hvar town is reached by car or bus.",
        quando: "Morning or evening; all year, even off season.",
        tempo: "2 hours",
        consiglio: "Combine the visit with the Stari Grad Plain, which starts just outside town."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Hvar town in the morning",
          "Pakleni Islands, swimming",
          "Fortress at sunset"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Hvar town and fortress",
          "Day 2: Stari Grad and its plain, then Jelsa or Vrboska"
        ]
      }
    ],
    zone: [
      {
        nome: "Hvar town",
        perChi: "for life and convenience",
        testo: "Hotels, bars and the harbour, but pricier and noisier in summer."
      },
      {
        nome: "Stari Grad and Jelsa",
        perChi: "for calm",
        testo: "Quieter and cheaper, with a bus to Hvar town."
      }
    ],
    sapori: [
      {
        nome: "Gregada",
        testo: "Fish stew with potatoes and oil, fishermen's cooking."
      },
      {
        nome: "Lavender",
        testo: "Essential oil and honey, sold everywhere on the island."
      },
      {
        nome: "Plavac and Bogdanuša wines",
        testo: "Local red and white from the island's wineries."
      }
    ],
    attenzioni: [
      "The ferry from Split goes to Stari Grad; from there you need a bus or taxi to Hvar town.",
      "In summer rooms on weekends go early: book months ahead.",
      "Wear water shoes on the rocks: sea urchins are common."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: "Hvar bay and the Pakleni Islands from the Spanish Fortress",
    immagine: '/images/viaggi/croazia-itinerario/giorno-08-hvar.jpg',
  },
  {
    slug: 'curzola',
    paeseSlug: 'croazia',
    ordine: 6,
    nome: 'Korčula',
    tipologia: ['isola', 'città storica', 'vino'],
    giorniConsigliati: "1-2 days",
    visitataPersonalmente: true,
    introduzione:
      "A fortified old town on a peninsula, with herringbone streets, the Cathedral of St. Mark and the house dedicated to Marco Polo; the island produces the white wine grk.",
    percheAndarci: "For a historic town quieter than Hvar and Dubrovnik and for the moreška dance.",
    cosaVedere: ["The old town and the walls", "The Cathedral of St. Mark", "Lumbarda and its vineyards"],
    cosaFare: ["Watch the moreška on summer evenings", "Taste the grk in Lumbarda"],
    doveDormire: "Old town or Lumbarda, €90-160.",
    comeArrivare: "Catamaran from Split, Hvar or Dubrovnik; ferry from Orebić on the Pelješac peninsula.",
    periodoMigliore: "June and September.",
    erroriDaEvitare: ["Visiting only as a day trip from the cruises, missing the evening"],
    luoghi: [
      {
        nome: "Korčula Old Town",
        testo: "A fortified peninsula with a herringbone street plan, with lanes designed to shelter from the wind. Venetian walls and towers, and St Mark's cathedral with an altarpiece by Tintoretto.",
        come: "On foot from the harbour, through the Land Gate.",
        quando: "Morning or evening.",
        tempo: "2 hours",
        consiglio: "Climb the cathedral tower for the rooftops."
      },
      {
        nome: "Marco Polo's House",
        testo: "According to local tradition Marco Polo was born in Korčula. In the centre there is a house that tradition names as his.",
        come: "In the old centre, with steep steps.",
        quando: "Morning.",
        tempo: "30 minutes",
        consiglio: "Birth in Korčula is a tradition, not a documented fact."
      },
      {
        nome: "Moreška",
        testo: "A sword dance that stages the fight between Moors and Christians over a kidnapped girl, performed in Korčula for centuries. Two armies in red and black costumes clash with rhythmic blows and sparks on the blades. Today there are regular shows for visitors about twice a week.",
        come: "In the evening, outdoors or in a hall, ticketed.",
        quando: "Summer, evenings.",
        tempo: "1 hour",
        consiglio: "Check day and time on site: they vary."
      },
      {
        nome: "Pelješac peninsula",
        testo: "The long peninsula opposite, with small Plavac mali producers. From Orebić a short ferry crossing takes you to Korčula.",
        come: "By car, visiting the wineries of Dingač and Potomje.",
        quando: "Spring and autumn.",
        tempo: "half a day",
        consiglio: "Book tastings, especially in high season."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Old town in the morning",
          "Lunch by the sea",
          "Lumbarda beach or a boat trip",
          "Moreška in the evening, if scheduled"
        ]
      }
    ],
    zone: [
      {
        nome: "Old town",
        perChi: "for atmosphere",
        testo: "Rooms in the historic centre; music and strolling in the evening, but you sleep well."
      },
      {
        nome: "Lumbarda",
        perChi: "for beaches",
        testo: "A village with sand beaches and vineyards, a few kilometres from town."
      }
    ],
    sapori: [
      {
        nome: "Grk",
        testo: "Dry white wine from the Lumbarda area."
      },
      {
        nome: "Pošip",
        testo: "Fragrant local white, excellent with fish."
      },
      {
        nome: "Plavac mali",
        testo: "Powerful Pelješac red."
      },
      {
        nome: "Zrnovski makaruli",
        testo: "Local hand-rolled pasta, with meat sauce."
      }
    ],
    attenzioni: [
      "The ferry from Split and Dubrovnik must be booked in high season.",
      "With the bora wind connections can be cancelled.",
      "In pier restaurants check the price of fish by weight."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: "The old town of Korčula on its fortified peninsula",
    immagine: '/images/viaggi/croazia-itinerario/giorno-10-curzola.jpg',
  },
  {
    slug: 'dubrovnik',
    paeseSlug: 'croazia',
    ordine: 7,
    nome: 'Dubrovnik and Ston',
    tipologia: ['città fortificata', 'mare', 'isole'],
    giorniConsigliati: "3 days",
    visitataPersonalmente: true,
    introduzione:
      "The ancient Republic of Ragusa, enclosed by two kilometers of walls above the sea, with the Stradun, the palaces and the monasteries. Facing it is the island of Lokrum; to the north, Ston with its walls over five kilometers long and the oysters of Mali Ston.",
    percheAndarci: "For the walk around the walls, the old town, Lokrum and the trips toward Ston, the Elaphiti Islands and the Bay of Kotor.",
    cosaVedere: [
      "The walls and the Lovrijenac fortress",
      "The Stradun and the Rector's Palace",
      "The island of Lokrum",
      "The view from Mount Srđ",
      "The walls and salt pans of Ston",
    ],
    cosaFare: ["The walk around the walls in the late afternoon", "A swim at Buža, outside the walls", "Oysters at Mali Ston"],
    doveDormire: "Inside the walls (from €150, often over €250 in high season) or at Lapad and Gruž for lower prices.",
    comeArrivare: "Čilipi airport (about 20 km); catamaran from Split, Hvar and Korčula; car over the Pelješac bridge.",
    comeSpostarsi: "On foot in the center; city buses to Gruž and Lapad; boat to Lokrum.",
    periodoMigliore: "May-June and September-October.",
    costi: "Walls about €40 with Lovrijenac; Lokrum with boat €25-30.",
    erroriDaEvitare: [
      "Climbing the walls in the middle hours, with heat and cruise crowds",
      "Booking inside the walls without considering the stairs with luggage",
      "Arriving by car and looking for parking near the old town",
    ],
    luoghi: [
      {
        nome: "Dubrovnik Walls",
        testo: "A ring of medieval walls nearly two kilometres long around the old town, with towers and bastions. The best route to see the red roofs and the sea.",
        come: "Climb from Pile Gate or the harbour side, following the signs on site.",
        quando: "At opening or late afternoon: midday is hot and crowded.",
        tempo: "1.5-2 hours",
        costo: "Entry ticket, prices on the official site.",
        consiglio: "Bring water and a hat: there is little shade."
      },
      {
        nome: "Stradun and the old town",
        testo: "The main street in polished stone, about 300 metres long, with Onofrio's Fountain, the Rector's Palace and the church of St Blaise. After the 1667 earthquake it was rebuilt in baroque forms.",
        come: "On foot from Pile Gate. Cars cannot enter.",
        quando: "Early morning or evening.",
        tempo: "2-3 hours",
        consiglio: "A walk after 8 pm, when the groups have left, is very different."
      },
      {
        nome: "Cable car and Mount Srđ",
        testo: "From the station above the walls the cable car climbs in a few minutes to Mount Srđ, 412 metres high, with views over the whole city and the islands. At the top stands Fort Imperial, built by the French in the early 19th century, which houses the museum of the 1990s war, when the city was besieged. At sunset the red roofs and Lokrum take on colour, and it is the best moment.",
        come: "From the station near Buža Gate, on foot.",
        quando: "Late afternoon for sunset.",
        tempo: "1-2 hours",
        costo: "Return ticket, prices on the official site.",
        consiglio: "Book a sunset slot: queues can be long."
      },
      {
        nome: "Ston and Mali Ston oysters",
        testo: "Ston's walls, about 5.5 km long, are among the longest preserved fortification systems in the world. Oysters are farmed in the bay of Mali Ston.",
        come: "By car from Dubrovnik along the coast to the north-west, where the Pelješac peninsula begins.",
        quando: "Morning for the walls and lunch with oysters.",
        tempo: "half a day",
        consiglio: "The walls are paid and the walk is tiring."
      },
      {
        nome: "Lokrum island",
        testo: "The wooded island in front of the old town, a nature reserve about 600 metres from town. There is the Benedictine monastery with its botanical garden, the Napoleonic fort at the top, free-roaming peacocks and the \"Dead Sea\", a small saltwater lake you can swim in. You swim off the rocks, far from the Stradun crowds.",
        come: "Regular boats from the old harbour, a short crossing.",
        quando: "In the warm season, in the morning; boat times posted at the harbour.",
        tempo: "half a day",
        consiglio: "Check the time of the last boat back before you go."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Walls at opening",
          "Stradun and Rector's Palace",
          "Lunch outside the walls",
          "Cable car at sunset"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: walls, Stradun and cable car",
          "Day 2: Ston and oysters, or Lokrum by boat"
        ]
      }
    ],
    zone: [
      {
        nome: "Old town",
        perChi: "to stay inside the walls",
        testo: "Rooms inside the city, but noisy, crowded by day and with few services for cars."
      },
      {
        nome: "Lapad and Babin Kuk",
        perChi: "for beaches",
        testo: "Peninsulas a few km away, with hotels, beaches and buses to the centre."
      }
    ],
    sapori: [
      {
        nome: "Mali Ston oysters",
        testo: "Small and salty, farmed in the nearby bay."
      },
      {
        nome: "Rožata",
        testo: "The city's caramel custard."
      },
      {
        nome: "Crni rižot",
        testo: "Black cuttlefish-ink risotto."
      },
      {
        nome: "Dingač",
        testo: "Intense red from the Pelješac peninsula."
      }
    ],
    attenzioni: [
      "In high season the city is very crowded, with limits on cruise ships: avoid the middle hours.",
      "Restaurants on the Stradun cost more: go to side lanes or outside the walls.",
      "Car parks in and outside town charge by the hour and fine those who overstay.",
      "The Pelješac bridge avoids crossing Bosnia at Neum, so no border checks."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: "The walls and old port of Dubrovnik by the sea",
    immagine: '/images/viaggi/croazia-itinerario/giorno-11-dubrovnik.jpg',
  },
]
