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
        testo: "The city's monumental cemetery, opened in 1876, with the main building designed by architect Hermann Bollé. The long arcades and cupolas, built between 1879 and 1929, enclose graves of every faith, side by side. It is one of the most beautiful and peaceful places in Zagreb, and few tourists get there.",
        come: "By ZET bus 106 from the Kaptol terminus, near the cathedral (about every 20 minutes during opening hours), or uphill on foot.",
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
    comeArrivare:
      "The park lies on the D1 state road, about 2 hours' drive from both Zagreb and Zadar. Scheduled buses between Zagreb and the Dalmatian coast stop at entrances 1 and 2. The entrance car parks are open 7am-5pm and cost €2 an hour from June to September, €1.50 an hour in spring and autumn. Buy the ticket online with an entry time slot and validate it at the chosen entrance; it is worth sleeping in one of the villages around the park and going in at opening time.",
    comeSpostarsi: "On foot on the walkways, electric boat on Lake Kozjak and panoramic trains included in the ticket.",
    periodoMigliore: "May-June and September-October; July-August very crowded.",
    costi:
      "2026 day ticket: €40 from June to September (€25 after 4pm in June-August and after 3pm in September), €23 in April, May and October, €10 from November to March; two-day ticket €60, €39 or €15 depending on the season. Boat and panoramic trains are included. Daily budget per person, sharing a double: low €70-100, mid €130-200; a guesthouse near the entrances costs about €60-120 a night.",
    erroriDaEvitare: [
      "Arriving mid-morning in high season",
      "Not booking the entry slot online",
      "Thinking you can swim: it's forbidden",
    ],
    luoghi: [
      {
        "nome": "Upper lakes and Kozjak",
        "testo": "Sixteen lakes linked by waterfalls on travertine terraces, with wooden walkways over turquoise water. UNESCO site since 1979.",
        "come": "Entrance 2 for the upper lakes. Trails marked with letters (A-K) and an electric boat on Kozjak included in the ticket.",
        "quando": "At opening or after 3 pm, to avoid coach hours. The greenest period is May-June; in autumn the colours are stronger.",
        "tempo": "4-6 hours for a full route",
        "costo": "€40 from June to September (€25 after 4 pm in June-August and after 3 pm in September), €23 in April, May and October, €10 from November to March (2026). Buy only on the official website.",
        "url": "https://np-plitvicka-jezera.hr/en/",
        "consiglio": "In high season buy the ticket online in advance: it can sell out at the gates. It must be validated at the entrance chosen when buying.",
        "orari": "Open every day of the year, with hours that change by season. In November 2026 entrances 1 and 2 are open 8am-3pm with ticket sales until 1pm; the Kozjak boat runs 8am-4pm on the short route, panoramic trains every 30 minutes.",
        "lat": 44.88467,
        "lng": 15.60956
      },
      {
        "nome": "Veliki slap",
        "testo": "The park's highest waterfall, about 78 metres, at the end of the lower lakes. Seen from the walkway below or the trail above.",
        "come": "Entrance 1 for the lower lakes and Veliki slap, on foot with steps.",
        "quando": "Early morning or late afternoon.",
        "tempo": "1 hour",
        "consiglio": "A great last stop: then take the panoramic train back up.",
        "costo": "included in the park ticket",
        "lat": 44.90254,
        "lng": 15.6079,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Lower lakes and canyon",
        "testo": "A wilder, less crowded stretch, with rock walls, caves and waterfalls springing from the limestone. The boardwalks run just above the water between the Milanovac, Gavanovac and Kaluđerovac lakes, down to the canyon where the lakes end in the Korana. From the upper path you see the whole staircase of lakes from above, the postcard view.",
        "come": "On foot from entrance 1 along the signed path.",
        "quando": "Morning.",
        "tempo": "2 hours",
        "consiglio": "Non-slip soles: walkways are wet.",
        "costo": "included in the park ticket",
        "lat": 44.90116,
        "lng": 15.61076,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Galovac",
        "testo": "One of the most photographed upper lakes: the water runs down a series of travertine steps in dozens of small waterfalls, and the boardwalks pass right through them. It is where you understand how the lakes formed, barrier after barrier.",
        "come": "From entrance 2 by panoramic train to station St3, then on foot downhill along the upper lakes route (programme E).",
        "quando": "In the morning, when light filters through the beech trees and the groups have not yet arrived.",
        "tempo": "1 hour",
        "costo": "included in the park ticket",
        "lat": 44.87489,
        "lng": 15.60592,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Veliki Prštavac",
        "testo": "The most spectacular waterfall of the upper lakes, where Galovac pours into the lake below in a single drop. Beside it is the smaller Mali Prštavac. The boardwalks pass at the foot of the fall and along its edge.",
        "come": "Along the upper lakes route, just below Galovac.",
        "quando": "In spring, with snowmelt, the flow is at its strongest.",
        "tempo": "30 minutes",
        "costo": "included in the park ticket",
        "lat": 44.8779,
        "lng": 15.60843,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Prošćansko jezero",
        "testo": "The highest lake in the system, long and surrounded by forest, where the staircase of sixteen lakes begins. It has fewer waterfalls than the others but is the quietest: here the boardwalks give way to a lakeside path.",
        "come": "From entrance 2 by panoramic train to station St3 (Labudovac), then on foot.",
        "quando": "Early morning, while there is still mist on the surface.",
        "tempo": "1 hour",
        "costo": "included in the park ticket",
        "lat": 44.86158,
        "lng": 15.59689,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Sastavci",
        "testo": "The waterfalls at the end of the lower lakes, where the water of the whole system plunges into the canyon and the Korana river begins. They are a few steps from Veliki slap but far less crowded.",
        "come": "From entrance 1, down into the canyon along the lower lakes route (programmes A and B).",
        "quando": "Morning or late afternoon, together with Veliki slap.",
        "tempo": "30 minutes",
        "costo": "included in the park ticket",
        "lat": 44.90283,
        "lng": 15.60927,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Šupljara Cave",
        "testo": "A cave in the canyon wall above Lake Kaluđerovac. You enter from the lower path and climb up inside it by a stairway to the rim of the canyon, with a view over the lower lakes.",
        "come": "Along the lower lakes route from entrance 1: a short but steep detour.",
        "quando": "When the canyon is packed: it is one of the few quiet spots.",
        "tempo": "20-30 minutes",
        "costo": "included in the park ticket",
        "lat": 44.89995,
        "lng": 15.61179,
        "url": "https://np-plitvicka-jezera.hr/en/",
        "consiglio": "The steps inside are damp: wear shoes with good grip."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: entrance 2 at opening time, panoramic train to St3 and walk down the upper lakes: Prošćansko jezero, Galovac and Veliki Prštavac",
          "Late morning: electric boat across Kozjak to the lower lakes section",
          "Early afternoon: packed lunch or the snack point near the boat",
          "Afternoon: lower lakes canyon, Šupljara Cave, Veliki slap and Sastavci",
          "End of the day: climb to the east rim of the canyon and the panoramic train back to the entrance (this is the park's programme H)"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1, afternoon: entrance 1 after 3-4pm on the reduced ticket, lower lakes, Veliki slap and Sastavci (programme A)",
          "Day 2, morning: entrance 2 at opening time, upper lakes with Galovac and Prošćansko jezero, boat across Kozjak (programme E)",
          "Day 2, afternoon: leave for Zadar or Zagreb, stopping at Rastoke"
        ]
      }
    ],
    zone: [
      {
        "nome": "Mukinje and Rastovača",
        "perChi": "to stay close",
        "testo": "Guesthouses and rooms near the entrance, handy for early mornings.",
        "fascia": "€60-120"
      },
      {
        "nome": "Grabovac",
        "perChi": "for lower prices",
        "testo": "Cheaper, a few minutes by car from the entrance.",
        "fascia": "€60-120"
      },
      {
        "nome": "Park hotels",
        "perChi": "Those who want to go in at dawn without taking the car",
        "testo": "The few hotels run by the park, such as Hotel Jezero, are near entrance 2. They are practical rather than beautiful and are booked through the park website; the Korana and Borje campsites are also nearby."
      }
    ],
    gite: [
      {
        "nome": "Rastoke (Slunj)",
        "distanza": "about 30 km north, 30 minutes by car",
        "come": "By car on the D1 towards Zagreb; leave the car in Slunj and walk around.",
        "testo": "A village of old watermills built over the falls where the Slunjčica pours into the Korana. It looks like a miniature Plitvice with houses in the middle: an hour is enough, a good stop on the way to or from Zagreb."
      },
      {
        "nome": "Barać Caves",
        "distanza": "about 20 km, 25 minutes by car",
        "come": "By car towards Rakovica, then the road to the caves. Visits are guided.",
        "testo": "Karst caves with stalactites, chambers and bat colonies, visited with a guide along a fitted path. They stay cool even in summer: bring a jacket."
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
    faq: [
      {
        "domanda": "How long do you need to visit Plitvice?",
        "risposta": "A full day is enough for the upper and lower lakes on programme H (4-6 hours). To see them calmly and with fewer people, split the visit into two half days with the two-day ticket."
      },
      {
        "domanda": "Do you need to book Plitvice tickets in advance?",
        "risposta": "Yes, from June to September it is best to buy online on the park website with a time slot: in high season tickets at the desk can sell out. The ticket is valid for the chosen entrance."
      },
      {
        "domanda": "Entrance 1 or entrance 2?",
        "risposta": "Entrance 1 is closer to Veliki slap and the lower lakes, entrance 2 to the upper lakes and the boat. Early in the morning go for 2; in the afternoon 1, to see the falls in low light."
      },
      {
        "domanda": "How much does Plitvice cost in 2026?",
        "risposta": "€40 from June to September (€25 in the afternoon), €23 in April, May and October and €10 from November to March. The boat and panoramic trains are included."
      },
      {
        "domanda": "Can you swim in the Plitvice lakes?",
        "risposta": "No, swimming is banned throughout the park and it is enforced. At Krka too it has been banned under the falls since 2021: for a swim you have to wait for the sea."
      },
      {
        "domanda": "Can you visit Plitvice in winter?",
        "risposta": "Yes, the park is open all year and from November to March the ticket costs €10. Hours are shorter and with snow or ice some trails may be closed: check the alerts on the park website."
      }
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
    comeArrivare:
      "Split airport (SPU) is about 20 km from the centre, a few kilometres from Trogir: the Pleso shuttle runs to Split bus station in about 30-40 minutes for about €8, a taxi costs about €40-50 (much less to Trogir). The bus station, railway station and ferry port sit side by side, a few minutes' walk from the Riva. From Italy there are overnight ferries from Ancona; from Zagreb you drive down the motorway (toll about €25-30). If you are continuing to the islands, return the car here.",
    comeSpostarsi: "On foot in the center; bus to Trogir; catamarans from the port to the islands.",
    periodoMigliore: "May-June and September-October.",
    costi:
      "Palace substructures about €10 (€5 for young people and students); Meštrović Gallery €12; Klis fortress €12; Salona and Archaeological Museum €10 together; catamaran to Hvar €10-25. Daily budget per person, sharing a double: low €70-100, mid €130-200, high over €300.",
    erroriDaEvitare: ["Walking around the old town in swimwear: you'll get fined"],
    luoghi: [
      {
        "nome": "Diocletian's Palace",
        "testo": "The palace-fortress of the Roman emperor Diocletian, built in the late 3rd century and up to AD 305, inside which the old town lives today. Peristyle, mausoleum turned cathedral and underground halls are the heart of the visit.",
        "come": "On foot from the Riva, via the Silver or Bronze Gate. Streets are free; the cathedral, bell tower and cellars are paid.",
        "quando": "Early morning or evening: in the middle of the day the lanes are full.",
        "tempo": "2-3 hours",
        "consiglio": "The cellars: paid entry, almost empty and photogenic.",
        "costo": "streets and Peristyle free; cathedral, bell tower and substructures paid",
        "orari": "Always open; individual monuments keep their own hours.",
        "lat": 43.5085,
        "lng": 16.44025
      },
      {
        "nome": "Palace substructures",
        "testo": "The large vaulted halls beneath the emperor's apartments, almost intact because for centuries they were filled with rubble. Their plan mirrors the rooms that stood above and shows the true size of the palace. The central corridor, lined with stalls, links the Riva to the Peristyle.",
        "come": "Through the Bronze Gate on the waterfront. The central corridor is free, the side halls need a ticket.",
        "quando": "At opening time, before the cruise ship groups arrive.",
        "tempo": "45 minutes",
        "costo": "about €10, €5 for young people and students (2026)",
        "lat": 43.50758,
        "lng": 16.43979,
        "consiglio": "Enter through the Bronze Gate and climb up to the Peristyle: it is the route taken by those arriving from the sea."
      },
      {
        "nome": "Peristyle and Temple of Jupiter",
        "testo": "The colonnaded square in front of the imperial apartments, where Diocletian showed himself to his subjects: today there are cafés on the steps and an Egyptian granite sphinx brought by the emperor. A few steps away, down an alley, is the small Temple of Jupiter, turned into a baptistery, with a coffered stone ceiling.",
        "come": "In the centre of the palace, on foot from any gate.",
        "quando": "Early morning for an empty square, evening for the atmosphere.",
        "tempo": "30 minutes",
        "costo": "Peristyle free; baptistery paid",
        "lat": 43.50824,
        "lng": 16.44017
      },
      {
        "nome": "Cathedral of St Domnius and bell tower",
        "testo": "Diocletian's octagonal mausoleum, turned into a cathedral in the 7th century, is one of the oldest buildings in the world still used as a church. The 57-metre bell tower gives a view over the roofs.",
        "come": "Inside the Peristyle. Ticket for the cathedral and bell-tower climb.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "Climb the tower for the view: the steps are many and narrow.",
        "lat": 43.50805,
        "lng": 16.44043
      },
      {
        "nome": "Golden Gate and statue of Gregory of Nin",
        "testo": "The palace's north gate, the most ornate, where the road to Salona began. Outside stands the giant statue of Bishop Gregory of Nin by Ivan Meštrović, who in the 10th century defended the use of Croatian in the liturgy. Rubbing his big toe brings luck, which is why it shines.",
        "come": "On foot from the Peristyle, following the street north.",
        "quando": "Any time.",
        "tempo": "15 minutes",
        "costo": "free",
        "lat": 43.50918,
        "lng": 16.44065
      },
      {
        "nome": "Riva",
        "testo": "The pedestrian waterfront below the palace's south façade, with palm trees and cafés. It is the city's living room: people stroll here in the evening, watch the ferries and wait for the catamaran.",
        "come": "On foot, between the port and the Bronze Gate.",
        "quando": "In the evening, when it fills with locals.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 43.50783,
        "lng": 16.43829
      },
      {
        "nome": "Marjan Hill",
        "testo": "The wooded park above the city, with trails, small chapels and a viewpoint over the harbour and the islands. From the Veli Varoš quarter you climb to the first viewpoint; further on the pine forest continues to the summit, with its large white cross, and to small beaches on the open-sea side. It is where locals go to run and swim, away from the crowds of the palace.",
        "come": "On foot from the Veli Varoš district, uphill to the viewpoint.",
        "quando": "Late afternoon.",
        "tempo": "2 hours",
        "consiglio": "Bring water: there are no bars on the way up.",
        "costo": "free",
        "orari": "Park always open.",
        "lat": 43.5079,
        "lng": 16.43012
      },
      {
        "nome": "Meštrović Gallery",
        "testo": "The seaside villa the sculptor Ivan Meštrović built for himself in the 1930s, now a museum of his works in marble, bronze and wood, with a garden overlooking the bay. The same ticket covers the Kaštilac, a little further on, with his wooden cycle of the life of Christ.",
        "come": "On foot along the south side of Marjan (about 30 minutes from the Riva) or by bus 12.",
        "quando": "In the morning, combined with a swim on the Marjan beaches.",
        "tempo": "1-2 hours",
        "costo": "€12 adults, Kaštilac included (official price list)",
        "orari": "Tuesday to Sunday 9am-5pm, last entry half an hour before closing. Closed Mondays and on national holidays.",
        "lat": 43.50492,
        "lng": 16.41794,
        "url": "https://mestrovic.hr/"
      },
      {
        "nome": "Pazar and the fish market",
        "testo": "The Pazar is the open-air fruit, vegetable and flower market just outside the Silver Gate. The fish market (Peskarija), in the western part of the centre, sells the night's catch under a 19th-century roof: no flies, the locals say, thanks to the sulphurous water running beneath.",
        "come": "On foot: the Pazar east of the palace, the fish market near Marmontova street.",
        "quando": "Early morning; stalls close around midday.",
        "tempo": "45 minutes",
        "costo": "free",
        "lat": 43.5076,
        "lng": 16.44197
      },
      {
        "nome": "Bačvice Beach",
        "testo": "The city's sandy beach, shallow, ten minutes from the Riva. This is where people play picigin, the local pastime: keeping a small ball in the air in a circle, in shallow water, without letting it drop.",
        "come": "On foot from the Riva, passing behind the station.",
        "quando": "Morning or late afternoon; in the evening the bars above the beach come alive.",
        "tempo": "2-3 hours",
        "costo": "free; umbrellas extra",
        "lat": 43.50194,
        "lng": 16.44598
      },
      {
        "nome": "Archaeological Museum",
        "testo": "Croatia's oldest museum, founded in 1820, with inscriptions, sarcophagi and mosaics from Salona and Roman Dalmatia. The lapidarium under the garden portico is the most striking part.",
        "come": "About 15 minutes' walk north of the centre. Combined ticket with Salona.",
        "quando": "In the hot hours, combined with Salona on the same day.",
        "tempo": "1 hour",
        "costo": "€10 with Salona, valid 7 days (2026 price list)",
        "orari": "1 June-30 September Monday-Saturday 9am-2pm and 3pm-8pm; 1 October-31 May Monday-Friday 9am-2pm and 3pm-8pm, Saturday 9am-2pm. Closed Sundays and holidays. Closed for a new installation from 9 November to 11 December 2026.",
        "lat": 43.5159,
        "lng": 16.43458,
        "url": "https://www.armus.hr/"
      },
      {
        "nome": "Salona",
        "testo": "The ruins of the Roman capital of Dalmatia, Diocletian's home town, now in Solin on the edge of Split. You walk among the amphitheatre, baths, early Christian basilicas and the Manastirine necropolis, among olive trees and with hardly any tourists.",
        "come": "City bus from Split to Solin, about 20 minutes. The entrance is at the Tusculum.",
        "quando": "Early morning or late afternoon: the site is fully exposed to the sun.",
        "tempo": "2 hours",
        "costo": "€10 with the Archaeological Museum (2026 price list)",
        "orari": "Daily: 1 June-30 September 9am-8pm, 1 October-31 May 9am-6pm. Closed on holidays.",
        "lat": 43.54169,
        "lng": 16.48331,
        "url": "https://www.armus.hr/"
      },
      {
        "nome": "Klis Fortress",
        "testo": "The fortress on the pass above Split, which for centuries controlled the road between the coast and the interior and long held out against the Ottomans. From the walls you see Split, the islands and the Salona plain. Game of Thrones fans will recognise it as Meereen.",
        "come": "By car or bus from Split, about 20-30 minutes. From the car park you walk up.",
        "quando": "At sunset, with the light on the coast.",
        "tempo": "1-1.5 hours",
        "costo": "€12 adults, €4 under 15 (official site)",
        "orari": "According to the official site, daily 9am-7pm.",
        "lat": 43.56003,
        "lng": 16.52433,
        "url": "https://www.tvrdavaklis.com/"
      },
      {
        "nome": "Trogir",
        "testo": "A small medieval island-town west of Split, with St Lawrence cathedral and its portal carved by Radovan. UNESCO site.",
        "come": "By car or bus from Split. Visited on foot.",
        "quando": "Morning.",
        "tempo": "3 hours",
        "consiglio": "In the afternoon stop for an ice cream on the Riva.",
        "lat": 43.51705,
        "lng": 16.25144
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Bronze Gate, substructures and Peristyle before the cruise ships",
          "Late morning: St Domnius Cathedral, bell tower and Temple of Jupiter",
          "Midday: Pazar and the fish market, then lunch in Veli Varoš",
          "Afternoon: Golden Gate and Gregory of Nin, then a swim at Bačvice",
          "Late afternoon: walk up Marjan to the viewpoint",
          "Evening: stroll on the Riva"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan",
          "Day 2, morning: Meštrović Gallery and Kaštilac, then a swim on the Marjan beaches",
          "Day 2, afternoon: Salona and the Archaeological Museum on the combined ticket",
          "Day 2, evening: Klis fortress at sunset"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above",
          "Day 3, morning: Trogir by bus, St Lawrence Cathedral and Radovan's portal",
          "Day 3, afternoon: back to Split and an evening catamaran to Hvar, or a trip to Krka National Park"
        ]
      }
    ],
    zone: [
      {
        "nome": "Old town",
        "perChi": "for the centre",
        "testo": "Rooms inside the palace, on foot from everything; noisy late in the evening.",
        "fascia": "€100-180"
      },
      {
        "nome": "Veli Varoš",
        "perChi": "for a quiet district",
        "testo": "Fishermen's houses a short walk from the centre, below Marjan.",
        "fascia": "€70-130"
      },
      {
        "nome": "Bačvice",
        "perChi": "Those who want the beach on their doorstep",
        "testo": "The district above the sandy beach, ten minutes' walk from the Riva and close to the stations and port. In summer it is noisy at night because of the beach bars.",
        "fascia": "€90-170"
      },
      {
        "nome": "Žnjan",
        "perChi": "Those travelling by car and looking for modern hotels",
        "testo": "The eastern seafront, with a long beach, new hotels and easier parking. The centre is about half an hour on foot or a few minutes by bus.",
        "fascia": "€90-160"
      }
    ],
    gite: [
      {
        "nome": "Krka National Park",
        "distanza": "about 1 hour 15 minutes by car",
        "come": "By car to Skradin, then the boat to Skradinski buk (included in the ticket from April to October); organised tours also run.",
        "testo": "The great stepped waterfall of Skradinski buk, crossed by boardwalks, and the monastery on the islet of Visovac. Ticket €40 from June to September (€30 after 3pm), €20 in April, May and October; swimming is not allowed."
      },
      {
        "nome": "Hvar",
        "distanza": "about 1 hour by catamaran",
        "come": "Jadrolinija, TP Line and Krilo catamarans from Split port to Hvar town.",
        "testo": "The Venetian town with the Spanish fortress and the Pakleni Islands in front of the harbour. It can be done in a day, but the island deserves at least one night."
      },
      {
        "nome": "Bol and Zlatni Rat (Brač)",
        "distanza": "about 1 hour by catamaran",
        "come": "Direct catamaran from Split port to Bol, or the ferry to Supetar and a bus across the island.",
        "testo": "The pointed pebble beach that changes shape with wind and currents, famous with windsurfers. Above Bol you can climb Vidova Gora, the highest peak on the Adriatic islands."
      },
      {
        "nome": "Omiš and the Cetina canyon",
        "distanza": "about 25 km, 40 minutes by bus",
        "come": "Regular bus from Split station along the coast.",
        "testo": "A town between the sea and the canyon walls, with the Mirabella fortress above the roofs. On the Cetina river you can go rafting, kayaking and zip-lining."
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
    faq: [
      {
        "domanda": "How many days do you need in Split?",
        "risposta": "One full day is enough for Diocletian's Palace, Marjan and the Riva. With two you add the Meštrović Gallery, Salona and Klis; with three, Trogir or Krka too."
      },
      {
        "domanda": "Do you have to pay to visit Diocletian's Palace?",
        "risposta": "No, the streets and the Peristyle are free, because they are the old town. You pay for the cathedral and bell tower, the baptistery and the substructures (about €10)."
      },
      {
        "domanda": "Split or Trogir as a base?",
        "risposta": "Split is more convenient for ferries, buses and evenings out; Trogir is smaller, quieter and close to the airport. For the islands, stay in Split near the port."
      },
      {
        "domanda": "Where to stay in Split?",
        "risposta": "Inside the palace to be at the centre (about €100-180 a night), Veli Varoš for a quiet neighbourhood, Bačvice for the beach, Žnjan for hotels with parking."
      },
      {
        "domanda": "How do you get from Split to Hvar?",
        "risposta": "By catamaran to Hvar town, about an hour and €10-25 in summer. Car ferries arrive at Stari Grad instead, on the other side of the island."
      },
      {
        "domanda": "Can you walk around Split in swimwear?",
        "risposta": "No: in the old town, walking around in swimwear or shirtless and drinking alcohol in the street carries a €150 fine."
      }
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
    comeArrivare:
      "There is no airport: you arrive from Split. Jadrolinija, TP Line and Krilo catamarans reach Hvar town in about an hour, roughly €10-25 in summer; Jadrolinija car ferries instead dock at Stari Grad, from where Hvar town is 20-30 minutes by bus or car. Seasonal catamarans also run from Korčula and Dubrovnik (Hvar-Korčula about 1.5 hours). In July and August car places on the ferries must be booked in advance; if you stay only in Hvar town you can do without a car.",
    periodoMigliore: "June and September; lavender in bloom between June and July.",
    costi:
      "Fortress €12, or €15 on the combined ticket (fortress, theatre, loggia, clock tower and St John's church); theatre €10; cathedral €2; water taxi to the Pakleni Islands about €10-15 return. Daily budget per person, sharing a double: low €70-100, mid €130-200, high over €300; in August Hvar town is among the most expensive places in Croatia.",
    erroriDaEvitare: ["Drinking in the street or walking around town in swimwear: heavy fines", "Arriving in August without booked accommodation"],
    luoghi: [
      {
        "nome": "Hvar town and Spanish Fortress",
        "testo": "A Venetian town on the sea with the largest square in Dalmatia, St Stephen's cathedral and the seventeenth-century theatre above the arsenal. Above the town stands the sixteenth-century fortress (Fortica), with views over the harbour and the Pakleni islands.",
        "come": "On foot from the harbour. The fortress is an uphill walk from town.",
        "quando": "Fortress in the morning or late afternoon, because of the heat.",
        "tempo": "2-3 hours",
        "consiglio": "Climb to the fortress at sunset and have dinner afterwards in a lane away from the square.",
        "costo": "fortress €12; combined €15 with theatre, loggia, clock tower and St John's church (2026)",
        "orari": "Fortress 9am-6pm (tourist board summer hours 2026); off-season hours to be checked.",
        "lat": 43.17474,
        "lng": 16.4421,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "St Stephen's Square and cathedral",
        "testo": "The large paved square that opens from the harbour towards the hill, with a 16th-century Venetian well and white stone palaces. At the far end stands St Stephen's Cathedral, with its four-storey bell tower and Baroque altars inside. In the evening it is the heart of town life.",
        "come": "On foot from the harbour: the square starts at the quay.",
        "quando": "Early morning for an empty square, evening for the atmosphere.",
        "tempo": "45 minutes",
        "costo": "square free; cathedral €2 (2026)",
        "orari": "Cathedral 9am-12:30pm and 5pm-7:30pm (summer hours 2026).",
        "lat": 43.17218,
        "lng": 16.44335,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Theatre and Arsenal",
        "testo": "The Venetian Arsenal, where galleys were repaired, carries on its first floor the theatre opened in 1612, one of the oldest public theatres in Europe. The hall, with its painted boxes, is small and intimate; from the terrace above the Arsenal you look over the square.",
        "come": "On the harbour side of the square. The theatre is visited on a single or combined ticket.",
        "quando": "In the hot hours, when the fortress is in full sun.",
        "tempo": "30 minutes",
        "costo": "theatre €10, or combined €15 (2026)",
        "orari": "Theatre 10am-6pm (summer 2026); the Arsenal itself is closed to visitors in 2026.",
        "lat": 43.17212,
        "lng": 16.44147,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Benedictine convent and agave lace",
        "testo": "Hvar's Benedictine nuns make an extremely fine lace from the fibres of agave leaves, a tradition recognised by UNESCO. The convent's small museum shows finished pieces and, sometimes, how the threads are prepared.",
        "come": "In the lanes north of the square, on foot.",
        "quando": "Morning or late afternoon, according to opening hours.",
        "tempo": "30 minutes",
        "costo": "€5 (2026)",
        "orari": "10am-12:30pm and 4pm-7pm; closed Thursday afternoons and Sundays (summer 2026).",
        "lat": 43.17313,
        "lng": 16.44204,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Pakleni Islands",
        "testo": "An archipelago of islets with bays and clear water in front of Hvar town. Reached by water-taxi from the harbour.",
        "come": "Water-taxi from Hvar harbour, return at agreed times.",
        "quando": "Morning; the bays are calmer before midday.",
        "tempo": "half a day",
        "consiglio": "Agree the return time with the boatman.",
        "costo": "water taxi about €10-15 return (indicative 2026 price)",
        "lat": 43.16347,
        "lng": 16.39704
      },
      {
        "nome": "Stari Grad",
        "testo": "The oldest town on the island, founded by Greeks from Paros in 384 BC under the name Pharos. The long, narrow harbour is full of boats and stone houses, and in the centre stands the Tvrdalj, the fortified villa of the Renaissance poet Petar Hektorović. It is quieter and cheaper than Hvar town.",
        "come": "The car ferry from Split arrives here; Hvar town is reached by car or bus.",
        "quando": "Morning or evening; all year, even off season.",
        "tempo": "2 hours",
        "consiglio": "Combine the visit with the Stari Grad Plain, which starts just outside town.",
        "costo": "town free; Tvrdalj paid",
        "lat": 43.18248,
        "lng": 16.59573
      },
      {
        "nome": "Stari Grad Plain",
        "testo": "A farming landscape of walls and fields divided by Greek colonists in the 4th century BC, nearly unchanged; UNESCO listed.",
        "come": "From Stari Grad by bike or on foot along paths between olives and vines.",
        "quando": "Spring and autumn.",
        "tempo": "2-3 hours",
        "consiglio": "The ferry from Split arrives at Stari Grad, not Hvar town.",
        "costo": "free",
        "lat": 43.18252,
        "lng": 16.64771
      },
      {
        "nome": "Vrboska",
        "testo": "The island's smallest town, built along a narrow sea inlet crossed by little bridges, which is why it is called Hvar's «little Venice». It has a 16th-century fortified church, built for defence against pirates, and a fishermen's museum.",
        "come": "By car or bus from Stari Grad or Jelsa; on foot along the coast from Jelsa in about an hour.",
        "quando": "In the evening, for dinner along the inlet.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 43.18172,
        "lng": 16.67123
      },
      {
        "nome": "Jelsa",
        "testo": "A harbour town in the east of the island, with a tree-lined square behind the quay and pine-backed beaches a few minutes' walk away. It is quieter and cheaper than Hvar town, and handy for the coves on the south coast.",
        "come": "Bus from Stari Grad and Hvar town; in summer a catamaran links it with Split and Bol.",
        "quando": "All season; in June and September it is especially quiet.",
        "tempo": "half a day",
        "costo": "free",
        "lat": 43.1612,
        "lng": 16.69266
      },
      {
        "nome": "Malo Grablje",
        "testo": "A stone village abandoned in the 1960s, in a gorge among olive trees above Milna. The roofless houses, the church and the farmed terraces tell of the island before tourism. A path leads down to the sea at Milna.",
        "come": "By car or scooter from Hvar town inland, then on foot for the last stretch; or walking uphill from Milna.",
        "quando": "Morning or late afternoon: the gorge is hot at midday.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 43.16882,
        "lng": 16.5033
      },
      {
        "nome": "Velo Grablje and the lavender",
        "testo": "The inland village that in the 20th century became the centre of the island's lavender oil production. Around it are still the terraced fields, purple between June and July, and the dry-stone walls.",
        "come": "By car or scooter on the old road between Hvar town and Stari Grad.",
        "quando": "Late June to July, with the lavender in bloom.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 43.17074,
        "lng": 16.5217
      },
      {
        "nome": "Dubovica Beach",
        "testo": "A bay of white pebbles with a few stone houses on the south coast, east of Hvar town. The water is crystal clear and, with no road down to it, it stays quieter than the beaches you can drive to.",
        "come": "By car or bus to the stop on the main road, then on foot down a path of about 15-20 minutes.",
        "quando": "In the morning; on summer afternoons boats arrive too.",
        "tempo": "half a day",
        "costo": "free",
        "lat": 43.14593,
        "lng": 16.53487,
        "consiglio": "The climb back up is steep and in the sun: bring water."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: St Stephen's Square, the cathedral and the Benedictine convent with its agave lace",
          "Late morning: water taxi to Palmižana, swim and lunch on the Pakleni Islands",
          "Afternoon: back to town and the theatre on the combined ticket",
          "Sunset: walk up to the Spanish fortress, about twenty minutes through the pines",
          "Evening: dinner in a lane away from the square"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan",
          "Day 2, morning: by scooter or car inland, Malo Grablje and the lavender fields of Velo Grablje",
          "Day 2, afternoon: Stari Grad with Tvrdalj and the UNESCO plain",
          "Day 2, evening: dinner along the inlet in Vrboska or in Jelsa"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above",
          "Day 3: boat trip to Vis and the Blue Cave on Biševo, or a beach day at Dubovica and on the south coast"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hvar town",
        "perChi": "for life and convenience",
        "testo": "Hotels, bars and the harbour, but pricier and noisier in summer.",
        "fascia": "€100-250"
      },
      {
        "nome": "Stari Grad",
        "perChi": "Those arriving by car ferry and looking for calm",
        "testo": "The island's oldest town, with its long narrow harbour, restaurants on the quay and the UNESCO plain just outside. This is where the ferry from Split docks; Hvar town is 20-30 minutes away by bus or car.",
        "fascia": "€80-180"
      },
      {
        "nome": "Jelsa and Vrboska",
        "perChi": "Those looking for lower prices and quiet beaches",
        "testo": "Two neighbouring villages on the north-east coast, with pine woods and coves within walking distance. They are the cheapest on the island but far from Hvar town: not ideal if you want to go out there every evening.",
        "fascia": "€70-150"
      }
    ],
    gite: [
      {
        "nome": "Vis and the Blue Cave",
        "distanza": "full day by speedboat",
        "come": "Organised speedboat trips from Hvar town harbour, stopping at Biševo, Vis and often Stiniva bay.",
        "testo": "The most remote and least built-up island of central Dalmatia and the Blue Cave on the islet of Biševo, where light enters through an underwater opening. It is best seen around midday on a sunny day; in rough seas the cave closes."
      },
      {
        "nome": "Bol and Zlatni Rat (Brač)",
        "distanza": "short catamaran crossing from Jelsa",
        "come": "Jadrolinija catamaran on the Split-Bol-Jelsa line, in the months it runs.",
        "testo": "The pointed beach of Zlatni Rat, which changes shape with the wind, and the town of Bol with its Dominican monastery by the sea."
      },
      {
        "nome": "Korčula",
        "distanza": "about 1.5 hours by catamaran",
        "come": "Catamaran from Hvar town, roughly €20-30.",
        "testo": "The walled town on its peninsula, with herringbone streets and St Mark's Cathedral. It makes more sense as the next stop towards Dubrovnik than as a day return."
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
    faq: [
      {
        "domanda": "How many days do you need on Hvar?",
        "risposta": "Two days are enough for Hvar town, the fortress, the Pakleni Islands and a drive inland with Stari Grad. With three you add the trip to Vis and the Blue Cave."
      },
      {
        "domanda": "Is it better to stay in Hvar town or Stari Grad?",
        "risposta": "Hvar town for nightlife and the Pakleni Islands, but it costs more and is noisy in summer. Stari Grad and Jelsa are quieter, cheaper and convenient for those arriving by car ferry."
      },
      {
        "domanda": "How do you get to Hvar from Split?",
        "risposta": "By catamaran to Hvar town in about an hour (€10-25 in summer) or by car ferry to Stari Grad. In high season it is worth booking."
      },
      {
        "domanda": "When does the lavender bloom on Hvar?",
        "risposta": "Between June and July, in the inland fields around Velo Grablje and along the old road to Stari Grad."
      },
      {
        "domanda": "How much is the water taxi to the Pakleni Islands?",
        "risposta": "Roughly €10-15 return, with frequent departures from Hvar harbour in summer. Agree on the return time."
      },
      {
        "domanda": "Are there fines on Hvar for swimwear or drinking in the street?",
        "risposta": "Yes, in town walking around in swimwear, drinking in the street or sleeping on the beach is fined, with penalties of up to €500-700."
      }
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
    comeArrivare:
      "Dubrovnik airport (Čilipi) is about 20 km south of the city: the Platanus shuttle reaches Ploče Gate and Gruž bus station in about 30-35 minutes for about €10 (€15 return); a taxi costs about €40-50, Uber and Bolt usually less. Catamarans from Split, Hvar and Korčula dock at Gruž, where Libertas buses 1A and 1B run to Pile Gate for about €2. By car you arrive from the north over the Pelješac bridge, without crossing into Bosnia at Neum; parking near the old town is scarce and expensive.",
    comeSpostarsi: "On foot in the center; city buses to Gruž and Lapad; boat to Lokrum.",
    periodoMigliore: "May-June and September-October.",
    costi:
      "Walls about €40 (Lovrijenac fortress included); cable car €30 return; Lokrum €30 with the boat; Rector's Palace €15, or €20 for the single ticket to the ten city museums, valid 7 days; Ston walls about €10. Daily budget per person, sharing a double: low €70-100, mid €130-200, high over €300. Dubrovnik is the most expensive city in Croatia, especially in July and August.",
    erroriDaEvitare: [
      "Climbing the walls in the middle hours, with heat and cruise crowds",
      "Booking inside the walls without considering the stairs with luggage",
      "Arriving by car and looking for parking near the old town",
    ],
    luoghi: [
      {
        "nome": "Dubrovnik Walls",
        "testo": "A ring of medieval walls nearly two kilometres long around the old town, with towers and bastions. The best route to see the red roofs and the sea.",
        "come": "Climb from Pile Gate or the harbour side, following the signs on site.",
        "quando": "At opening or late afternoon: midday is hot and crowded.",
        "tempo": "1.5-2 hours",
        "costo": "about €40 (2026), entry to Lovrijenac fortress included",
        "consiglio": "Bring water and a hat: there is little shade.",
        "lat": 42.64172,
        "lng": 18.10729,
        "url": "https://citywallsdubrovnik.hr/"
      },
      {
        "nome": "Stradun and the old town",
        "testo": "The main street in polished stone, about 300 metres long, with Onofrio's Fountain, the Rector's Palace and the church of St Blaise. After the 1667 earthquake it was rebuilt in baroque forms.",
        "come": "On foot from Pile Gate. Cars cannot enter.",
        "quando": "Early morning or evening.",
        "tempo": "2-3 hours",
        "consiglio": "A walk after 8 pm, when the groups have left, is very different.",
        "costo": "free",
        "orari": "Always open; churches and museums along the street keep their own hours.",
        "lat": 42.64134,
        "lng": 18.10885
      },
      {
        "nome": "Lovrijenac Fortress",
        "testo": "The fortress on a 37-metre rock spur outside Pile Gate, guarding the city from the sea side. Above the entrance is the inscription «Non bene pro toto libertas venditur auro», the motto of the Republic of Ragusa. From its terraces you see the walls opposite, Pile bay and the open sea.",
        "come": "On foot from Pile Gate, up a steep flight of steps. Entry is with the city walls ticket.",
        "quando": "Late afternoon, after the walls walk, when the light hits the bastions opposite.",
        "tempo": "45 minutes",
        "costo": "included in the walls ticket (about €40, 2026)",
        "lat": 42.6408,
        "lng": 18.10423,
        "url": "https://citywallsdubrovnik.hr/",
        "consiglio": "Keep the walls ticket: it is valid here on the following days too."
      },
      {
        "nome": "Rector's Palace",
        "testo": "The Gothic-Renaissance palace from which the republic was governed: the rector lived here for one month, then handed over to another nobleman. Today it is the Cultural History Museum, with state rooms, the armoury, the prison cells and the arcaded courtyard. It is the clearest way to understand how Ragusa worked.",
        "come": "On Luža square, at the end of Stradun. Single ticket or the combined ticket for the city's ten museums.",
        "quando": "Morning, before the cruise ship groups.",
        "tempo": "1 hour",
        "costo": "€15; combined ticket for 10 museums €20, valid 7 days (official price list)",
        "orari": "1 April-31 October daily 9am-6pm; 1 November-31 March 9am-4pm, closed Mondays. Closed at Christmas, New Year and on 3 February (St Blaise).",
        "lat": 42.64032,
        "lng": 18.11073,
        "url": "https://www.dumus.hr/en/",
        "consiglio": "If you also plan to see the Homeland War Museum on Srđ or the Maritime Museum, the combined ticket pays off."
      },
      {
        "nome": "Lokrum island",
        "testo": "The wooded island in front of the old town, a nature reserve about 600 metres from town. There is the Benedictine monastery with its botanical garden, the Napoleonic fort at the top, free-roaming peacocks and the \"Dead Sea\", a small saltwater lake you can swim in. You swim off the rocks, far from the Stradun crowds.",
        "come": "Regular boats from the old harbour, a short crossing.",
        "quando": "In the warm season, in the morning; boat times posted at the harbour.",
        "tempo": "half a day",
        "consiglio": "Check the time of the last boat back before you go.",
        "costo": "€30 adults, €5 ages 7-18, return boat included (2026 price list)",
        "orari": "Boats from the old port; from 9 November 2026 hourly from 10am to 3pm, last return at 4pm; more frequent in summer. In rough seas the boat does not run, and overnight stays on the island are not allowed.",
        "lat": 42.62757,
        "lng": 18.12066,
        "url": "https://www.lokrum.hr/"
      },
      {
        "nome": "Cable car and Mount Srđ",
        "testo": "From the station above the walls the cable car climbs in a few minutes to Mount Srđ, 412 metres high, with views over the whole city and the islands. At the top stands Fort Imperial, built by the French in the early 19th century, which houses the museum of the 1990s war, when the city was besieged. At sunset the red roofs and Lokrum take on colour, and it is the best moment.",
        "come": "From the station near Buža Gate, on foot.",
        "quando": "Late afternoon for sunset.",
        "tempo": "1-2 hours",
        "costo": "€30 return, €17 one way (official site, 2026). Closed in December and from January to March; last ride up 30 minutes before closing.",
        "consiglio": "Book a sunset slot: queues can be long.",
        "orari": "2026: April 9am-9pm; May 9am-10pm (from the 15th until 11:30pm); June-August 9am-midnight; September 9am-midnight (from the 15th until 11pm); October 9am-9pm (from the 21st until 8pm); November 9am-5pm. Closed December-March and in strong wind.",
        "lat": 42.64307,
        "lng": 18.11157,
        "url": "https://www.dubrovnikcablecar.com/"
      },
      {
        "nome": "Franciscan Monastery",
        "testo": "The Friars Minor monastery just inside Pile Gate, with a Romanesque cloister of paired columns and capitals that are all different. Inside is a pharmacy opened in the early 14th century and still working, among the oldest in Europe. The small museum keeps the jars and ledgers of the old apothecary.",
        "come": "Entrance from Stradun, immediately on the left after Pile Gate. Ticket for cloister and museum; the pharmacy is visited as a shop.",
        "quando": "At opening time, while the cloister is still quiet.",
        "tempo": "30-45 minutes",
        "lat": 42.64167,
        "lng": 18.10773
      },
      {
        "nome": "Cathedral of the Assumption",
        "testo": "The Baroque cathedral rebuilt after the 1667 earthquake, on the site of an older Romanesque church. Above the high altar is a polyptych of the Assumption attributed to Titian's workshop. The treasury holds the reliquaries of St Blaise, the city's patron saint.",
        "come": "Behind the Rector's Palace, towards the old port. The church is free, the treasury is paid separately.",
        "quando": "Outside mass times, in the morning.",
        "tempo": "30 minutes",
        "lat": 42.63991,
        "lng": 18.11042
      },
      {
        "nome": "Church of St Blaise and Orlando's Column",
        "testo": "The Baroque church of the patron saint at the end of Stradun, with the silver statue of the saint holding a model of the city. In front stands Orlando's Column, from 1418, where decrees were read and the republic's flag was raised. On 3 February the feast of St Blaise fills the square.",
        "come": "On Luža square, on foot from Stradun.",
        "quando": "In the evening, when the square empties and the façade is lit.",
        "tempo": "20 minutes",
        "costo": "free",
        "lat": 42.6407,
        "lng": 18.11028
      },
      {
        "nome": "Dominican Monastery",
        "testo": "The large monastery beside Ploče Gate, built into the walls on the east side. The Gothic cloister with its mullioned windows and garden is one of the quietest corners of the old town. The museum holds paintings of the Ragusan school, goldsmiths' work and manuscripts.",
        "come": "On foot from Luža square towards Ploče Gate. Ticket at the cloister entrance.",
        "quando": "Early afternoon, when the groups are on the walls.",
        "tempo": "45 minutes",
        "lat": 42.64165,
        "lng": 18.11111
      },
      {
        "nome": "Buža, the rocks below the walls",
        "testo": "An opening in the walls on the south side leads to a bar set on rocks dropping straight into the sea. You have a drink looking at Lokrum and dive off the rocks, with metal ladders to climb back up.",
        "come": "Follow the «Cold drinks» sign from the area of the Jesuit church and go through the hole in the walls.",
        "quando": "Sunset for the bar, morning for swimming with fewer people.",
        "tempo": "1-2 hours",
        "lat": 42.63899,
        "lng": 18.10884,
        "consiglio": "Water shoes, and not for small children: there is no beach, only rocks."
      },
      {
        "nome": "Banje Beach",
        "testo": "The pebble beach closest to the old town, just outside Ploče Gate, with views of the walls and Lokrum. Part of it is free, part is taken by a beach club with paid loungers.",
        "come": "A 5-minute walk from Ploče Gate, down from the road.",
        "quando": "Early morning or after 5pm; in summer it is packed at midday.",
        "tempo": "2-3 hours",
        "costo": "free access; beach club loungers extra",
        "lat": 42.64161,
        "lng": 18.11638
      },
      {
        "nome": "Ston and Mali Ston oysters",
        "testo": "Ston's walls, about 5.5 km long, are among the longest preserved fortification systems in the world. Oysters are farmed in the bay of Mali Ston.",
        "come": "By car from Dubrovnik along the coast to the north-west, where the Pelješac peninsula begins.",
        "quando": "Morning for the walls and lunch with oysters.",
        "tempo": "half a day",
        "consiglio": "The walls are paid and the walk is tiring.",
        "costo": "Ston walls about €10 (2026)",
        "lat": 42.83964,
        "lng": 17.69399
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Stradun at opening time, the Franciscan Monastery and the Rector's Palace before the cruise ships",
          "Late morning: the cathedral and the Church of St Blaise on Luža square",
          "Lunch: away from Stradun, in the side streets",
          "Afternoon: a swim at Banje or off the Buža rocks",
          "Late afternoon: the walls from Pile Gate, then Lovrijenac on the same ticket",
          "Evening: cable car up Srđ for sunset"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan",
          "Day 2, morning: boat to Lokrum, the Benedictine monastery, the botanical garden and a swim in the «Dead Sea»",
          "Day 2, afternoon: the Dominican Monastery and the Maritime Museum with the combined museum ticket",
          "Day 2, evening: dinner in Lapad or Gruž, cheaper than the centre"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above",
          "Day 3: drive to Ston, walk the walls to Mali Ston in the morning and have oysters for lunch, then the Dingač wineries on the Pelješac peninsula",
          "Alternatively: boat to the Elaphiti Islands (Koločep, Lopud, Šipan) from Gruž port"
        ]
      }
    ],
    zone: [
      {
        "nome": "Old town",
        "perChi": "to stay inside the walls",
        "testo": "Rooms inside the city, but noisy, crowded by day and with few services for cars.",
        "fascia": "€150-350"
      },
      {
        "nome": "Ploče",
        "perChi": "Those who want a view of the old town and have a big budget",
        "testo": "The hillside district just east of Ploče Gate, with the most expensive hotels and terraces overlooking the old port and Lokrum. Banje is right below and the old town a few minutes' walk away, but it is all steps up and down.",
        "fascia": "€250-500"
      },
      {
        "nome": "Lapad and Babin Kuk",
        "perChi": "for beaches",
        "testo": "Peninsulas a few km away, with hotels, beaches and buses to the centre.",
        "fascia": "€100-250"
      },
      {
        "nome": "Gruž",
        "perChi": "Those arriving or leaving by catamaran and looking for lower prices",
        "testo": "The port district, with the morning market, the bus station and the catamaran piers. It is not the prettiest, but rooms cost less and buses 1A and 1B reach Pile Gate in a quarter of an hour.",
        "fascia": "€80-180"
      }
    ],
    gite: [
      {
        "nome": "Cavtat",
        "distanza": "about 20 km, 30 minutes",
        "come": "Libertas city bus line 10 from Gruž station, or a boat from Dubrovnik's old port.",
        "testo": "A quiet seaside town on a green peninsula, with a palm-lined waterfront, the Račić mausoleum by the sculptor Meštrović and a path around the headland with coves for swimming. It is close to the airport: good for the last morning too."
      },
      {
        "nome": "Elaphiti Islands",
        "distanza": "30 minutes to 1 hour by boat",
        "come": "Jadrolinija scheduled boats or organised trips from Gruž port to Koločep, Lopud and Šipan.",
        "testo": "Three car-free islands with fishing villages, summer villas of the Ragusan nobility and beaches such as sandy Šunj on Lopud. You can combine two islands in the same day."
      },
      {
        "nome": "Mljet",
        "distanza": "about 1.5-2 hours by catamaran",
        "come": "Catamaran from Gruž port; then bus, bike or on foot to the national park lakes.",
        "testo": "The western half of the island is a national park, with two saltwater lakes among the pines and the Benedictine monastery on the islet of St Mary in the middle of the large lake. You explore it by bike or kayak."
      },
      {
        "nome": "Bay of Kotor (Montenegro)",
        "distanza": "about 2 hours by car, with a border crossing",
        "come": "By rental car (you need the rental company's permission and the green card) or on an organised tour.",
        "testo": "Montenegro's fjord with Perast and its islets and the walled town of Kotor beneath the mountain. The border, outside Schengen, can take time in summer: leave early."
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
    faq: [
      {
        "domanda": "How many days do you need in Dubrovnik?",
        "risposta": "Two days are enough for the walls, the old town, the cable car and Lokrum. With three you add Ston and its oysters, the Elaphiti Islands or Montenegro."
      },
      {
        "domanda": "How much do the Dubrovnik walls cost, and is the Dubrovnik Pass worth it?",
        "risposta": "The walls ticket costs about €40 and includes Lovrijenac fortress. The one-day Dubrovnik Pass costs the same and adds museums and buses, but not the cable car."
      },
      {
        "domanda": "What is the best time of day to walk the walls?",
        "risposta": "At opening time or in the late afternoon. At midday in summer it is very hot on the walls, there is almost no shade and the cruise ship groups arrive."
      },
      {
        "domanda": "Where to stay in Dubrovnik?",
        "risposta": "Inside the walls for atmosphere (about €150-350 a night, with lots of steps), Ploče for the view, Lapad for beaches and lower prices, Gruž for the catamaran port."
      },
      {
        "domanda": "How do you get to Lokrum and how much does it cost?",
        "risposta": "By boat from the old port, in about 15 minutes. The reserve ticket costs €30 (€5 for ages 7-18) and includes the crossing; the last boat back leaves in the afternoon."
      },
      {
        "domanda": "Can you do a day trip to Montenegro from Dubrovnik?",
        "risposta": "Yes, the Bay of Kotor is about two hours' drive away. You need a document valid for travel abroad and, with a rental car, the rental company's permission."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: "The walls and old port of Dubrovnik by the sea",
    immagine: '/images/viaggi/croazia-itinerario/giorno-11-dubrovnik.jpg',
  },
]
