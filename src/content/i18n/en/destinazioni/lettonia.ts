import type { Destinazione } from '@/lib/types'

export const destinazioniLettonia: Destinazione[] = [
  {
    slug: 'riga',
    paeseSlug: 'lettonia',
    ordine: 1,
    nome: 'Riga',
    tipologia: ['città', 'architettura', 'gastronomia'],
    giorniConsigliati: '3 days, including the trip to Jūrmala',
    visitataPersonalmente: true,
    introduzione:
      "It's the capital of Latvia and the largest of the three Baltic capitals. The medieval Old Town, a UNESCO site since 1997, looks out over the Daugava River with the spires of its Hanseatic churches and the House of the Blackheads. Just outside the walls, the district built between the nineteenth and twentieth centuries is famous for its Art Nouveau buildings. A bit further on, the Central Market, carved out of five former airship hangars, is one of Europe's great covered markets.",
    percheAndarci:
      "In a small space there's a real medieval center, an entire Art Nouveau district to look at with your nose in the air, and a market that is an industrial monument where people still do their shopping every day. From here starts the classic day trip on the Latvian coast, the beach at Jūrmala.",
    cosaVedere: [
      "Cathedral Square (Doma laukums) with Riga Cathedral (Rīgas Doms), the city's great medieval church, and its historic organ",
      "St. Peter's Church, with the viewing platform on the spire at 72 meters, with views over the Old Town and the Daugava River",
      "The House of the Blackheads (Melngalvju nams), the famous Renaissance facade on the town hall square, rebuilt after the destruction of the war",
      "The Three Brothers (Trīs brāļi), three houses from different periods in a row on Mazā Pils iela, in the Old Town",
      "The Art Nouveau district, along Alberta iela and the nearby streets: hundreds of facades decorated with masks, sculpted faces and floral motifs, many by the architect Mikhail Eisenstein, father of the film director Sergei Eisenstein",
      "The Central Market (Centrāltirgus): five pavilions carved out of German First World War airship hangars, opened in 1930. It is part of the UNESCO site together with the Old Town",
    ],
    cosaFare: [
      "Climb the tower of St. Peter's Church for the panorama over the Old Town and the Daugava",
      "Walk along Alberta iela with your nose in the air, looking for the most elaborate facades of the Art Nouveau district",
      "Wander among the stalls of the Central Market, in the fish, meat, dairy and vegetable pavilions, stopping to taste the local specialties",
      "Spend an evening among the bars and restaurants of the Old Town, with a stop at a rooftop for the view over the roofs",
    ],
    doveDormire:
      "In the Old Town (Vecrīga) everything is within walking distance, nightlife included. The Art Nouveau district, just outside the walls to the north, is quieter and just as central, and there you can sleep inside an Art Nouveau building.",
    doveMangiare:
      "The most iconic winter dish is pelēkie zirņi ar speķi, gray peas with bacon. Rupjmaize, the black rye bread, is the basis of much Latvian cooking, including rupjmaizes kārtojums, a layered dessert with cream and berries. To taste local products, from smoked cheese to Baltic fish, the stalls of the Central Market are the cheapest and most genuine way.",
    comeArrivare:
      "Riga International Airport (RIX), is outside the city: public bus, or a taxi or ride-hailing app. From some Italian airports there are direct low-cost flights, seasonal or year-round; otherwise you connect through a European hub. From Vilnius there are direct buses, with several companies and many runs a day. Bus 22 links the airport with the centre in 30-45 minutes, every 10-20 minutes, with a ticket of about €1.50 bought in advance (app, machine or Narvesen) or about €1.80 paid on board by card; since April 2026 there is also the N22 night bus. From Vilnius and Tallinn the Lux Express bus takes about 4 hours and arrives at the coach station next to the Central Market, a few minutes' walk from the Old Town.",
    comeSpostarsi:
      "The historic center is explored entirely on foot. Trams, trolleybuses and buses of the Rīgas satiksme network cover the rest of the city, with cheap time-based tickets. For Jūrmala there's the regional train from the central station, with frequent departures.",
    periodoMigliore:
      "May-September, for the mild climate and, in high summer, the chance to combine the city with a swim at Jūrmala. June-August is the busiest season. Winter (November-March) is cold and often windy, but the Old Town holds up well and in December there's the Christmas market in Cathedral Square.",
    costi: "A cheap city by Western European standards: in the 2025 City Costs Barometer Riga came out the best value of 38 European cities. Daily budget per person with a shared double room: €45-65 on a tight budget, €90-130 mid-range (3-4-star hotel, a museum, restaurant dinner), over €180 with a 5-star hotel and Michelin-starred restaurants. 2026 admissions: House of the Blackheads €10, Occupation Museum €8, St Peter's tower about €9, Art Nouveau Museum €9; bus ticket from about €1.50.",
    erroriDaEvitare: [
      "Stopping at the Old Town: the Art Nouveau district just outside the walls is as central a part of Riga's architecture as the medieval center",
      "Going to the Central Market on the weekend after lunch: the best stalls empty out early, and the morning, with the local vendors, is the most authentic moment",
      "Planning Jūrmala without checking the weather: it's a seaside trip and makes sense mostly from June to August",
      "Thinking Russian isn't needed: the city's sizable Russian-speaking minority still speaks it, and in certain everyday situations outside the tourist center it's more useful than English",
    ],
    miaEsperienza:
      "Riga was the middle stop of our Baltic capitals trip with friends: we got there by bus from Vilnius and stayed three days, between the Old Town, the Art Nouveau district, the Central Market and St Peter's tower, then the bus to Tallinn.",
    luoghi: [
      {
        nome: "Riga Cathedral and Dome Square",
        testo: "Considered among the largest medieval churches in the Baltic states, founded in 1211, with the Walcker organ inaugurated in 1884, 6,718 pipes. The square is ringed with cafes.",
        come: "On foot from the Old Town.",
        quando: "Morning.",
        tempo: "1 hour",
        orari: "Square always accessible; cathedral and organ concert times on the website",
        lat: 56.94911,
        lng: 24.10474,
        url: "https://doms.lv",
        consiglio: "Organ concert programme on the official website."
      },
      {
        nome: "House of the Blackheads",
        testo: "From the 15th century the seat of the Brotherhood of Blackheads, a guild of unmarried merchants and ship owners, with a facade decorated in the early 17th century. Destroyed in the Second World War and demolished in the Soviet era, it was rebuilt at the end of the 20th century.",
        come: "On Town Hall Square.",
        quando: "Morning, for photos.",
        tempo: "30 minutes",
        costo: "€10; with coffee €12, with sparkling wine or Black Balsam €13; audio guide €4 (2026)",
        orari: "Daily 10-17, with closures or shorter hours on some dates",
        lat: 56.94714,
        lng: 24.10692,
        url: "https://www.melngalvjunams.lv",
        consiglio: "Town Hall Square is the best spot for photos."
      },
      {
        nome: "St Peter's Church",
        testo: "A Gothic church whose spire has a viewing platform at 72 metres, with views over the Old Town and the Daugava. You go up by lift.",
        come: "On foot, near Town Hall Square.",
        quando: "Clear day.",
        tempo: "45 minutes",
        costo: "Tower about €9 (2026)",
        orari: "Tower tickets sold until 17:00",
        lat: 56.9475,
        lng: 24.10944,
        consiglio: "Better to go up in the morning, when the light is clear."
      },
      {
        nome: "The Three Brothers",
        testo: "Three houses in a row at numbers 17, 19 and 21 of Mazā Pils iela, dwelling houses from different periods: the first, with its stepped gable, is medieval, the third is Baroque.",
        come: "On foot from the Old Town.",
        quando: "Daytime.",
        tempo: "15 minutes",
        costo: "free entry",
        orari: "Façades visible at any time",
        lat: 56.95035,
        lng: 24.10429,
        consiglio: "Inside is the Museum of Architecture."
      },
      {
        nome: "Art Nouveau district",
        testo: "Alberta iela and the streets around it, with facades decorated with masks, faces and floral motifs, many designed by the architect Mikhail Eisenstein.",
        come: "On foot or by tram from the centre.",
        quando: "Morning, with full light on the facades.",
        tempo: "1-2 hours",
        costo: "free entry",
        orari: "Streets always accessible",
        lat: 56.95901,
        lng: 24.10985,
        consiglio: "Look up: the details are above the first floor."
      },
      {
        nome: "Art Nouveau Museum",
        testo: "The flat of architect Konstantīns Pēkšēns at Alberta iela 12, furnished as an early 20th-century bourgeois home. The painted spiral staircase is the most photographed feature; it is the best way to see an interior after the façades of the street.",
        come: "A 15-20-minute walk from the Old Town, in the Art Nouveau district.",
        quando: "Together with the walk along Alberta iela and Elizabetes iela.",
        tempo: "1 hour",
        costo: "Full exhibition €9, concession €5; interiors only €6 (2026)",
        orari: "10-18 (ticket desk until 17:45), closed Monday",
        lat: 56.95961,
        lng: 24.10852,
        url: "https://jugendstils.riga.lv/en/"
      },
      {
        nome: "Central Market",
        testo: "Five pavilions made from the German Zeppelin hangars of the First World War, opened in 1930.",
        come: "On foot from the railway station.",
        quando: "Morning.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 56.94433,
        lng: 24.11321,
        consiglio: "Taste smoked fish in the fish pavilion."
      },
      {
        nome: "Freedom Monument and Occupation Museum",
        testo: "The monument, unveiled in 1935, is the symbol of Latvian independence; the honour guard, removed by the Soviets, returned in 1992. The Occupation Museum, in the Old Town, tells the Soviet and Nazi history.",
        come: "On foot from the Old Town.",
        quando: "Morning.",
        tempo: "1.5 hours",
        costo: "Occupation Museum €8, students €5 (2026); monument free",
        orari: "Museum daily 10-18",
        lat: 56.95151,
        lng: 24.11338,
        url: "https://okupacijasmuzejs.lv",
        consiglio: "Hours and tickets of the Occupation Museum on the official website."
      },
      {
        nome: "The Corner House, former KGB headquarters (Stūra māja)",
        testo: "The building on the corner of Brīvības iela and Stabu iela where the Soviet political police interrogated and imprisoned people. The guided tour takes in the cells, corridors and execution yard: hard going and very well told, run by the Occupation Museum.",
        come: "A 10-minute walk from the Freedom Monument along Brīvības iela.",
        quando: "In the morning, booking the English tour.",
        tempo: "1-1.5 hours",
        costo: "Guided tour €15, students €9; ground-floor exhibition free (2026)",
        orari: "Daily 10.30-17.30; English tours at 11, 12, 13, 15 and 16",
        lat: 56.95817,
        lng: 24.12414,
        url: "https://okupacijasmuzejs.lv/en/kgb-building-info",
        consiglio: "Not suitable for children under 12 or for people with limited mobility."
      },
      {
        nome: "Swedish Gate and Powder Tower",
        testo: "The Swedish Gate of 1698 is the only surviving gate in the walls, built into a private house; Jacob's Barracks run alongside. Nearby, the round Powder Tower, with cannonballs still lodged in its walls, is the last of the defensive towers left.",
        come: "On foot, on Torņa iela in the northern part of the Old Town.",
        quando: "During the day, as part of the Old Town walk.",
        tempo: "30 minutes",
        costo: "Exteriors free",
        orari: "Always visible from outside",
        lat: 56.95145,
        lng: 24.10638
      },
      {
        nome: "Bastejkalns Park and the city canal",
        testo: "The green belt laid out in the 19th century where the bastions were demolished, between the Old Town and the centre: a canal with small bridges, lawns, the National Opera and the boulevards. Boats leave from the water for loops of the canal and the Daugava river.",
        come: "On foot, behind the Freedom Monument.",
        quando: "Late afternoon in summer; in autumn for the colours.",
        tempo: "1 hour",
        costo: "Park free",
        orari: "Always open",
        lat: 56.95189,
        lng: 24.11038
      },
      {
        nome: "Nativity of Christ Orthodox Cathedral",
        testo: "The large neo-Byzantine church of 1884 on Brīvības boulevard, with gilded domes and painted interiors. In Soviet times it was turned into a planetarium; returned to worship, it is once again the city's main Orthodox church.",
        come: "On foot, in Esplanade Park, 5 minutes from the Freedom Monument.",
        quando: "During the day, avoiding services.",
        tempo: "20-30 minutes",
        costo: "Free; shoulders and legs covered, headscarf for women",
        lat: 56.95391,
        lng: 24.11551
      },
      {
        nome: "Academy of Sciences and Maskavas forštate",
        testo: "The Stalinist skyscraper of the 1950s, nicknamed «Stalin's birthday cake», with a viewing terrace over the Old Town and the Central Market. Around it lies the Maskavas district, with wooden houses and remains of the former Jewish ghetto: a side of Riga few visitors see.",
        come: "A 5-10-minute walk from the Central Market.",
        quando: "During the day, with clear skies.",
        tempo: "1 hour with the district",
        lat: 56.94313,
        lng: 24.12202
      },
      {
        nome: "National Library (Castle of Light)",
        testo: "Gunnar Birkerts's huge glass-mountain building, opened in 2014 on the left bank of the Daugava. From the opposite bank it is Riga's most modern view; inside, the «book staircase» of volumes donated by citizens rises through several floors.",
        come: "A 15-minute walk from the Old Town across the Stone Bridge (Akmens tilts).",
        quando: "At sunset for the photo from the Old Town bank.",
        tempo: "1 hour",
        lat: 56.94104,
        lng: 24.09677
      },
      {
        nome: "Kalnciema kvartāls",
        testo: "A block of restored wooden houses on the left bank, with courtyards, cafés and the Saturday market of local producers, bread, cheese and crafts. In summer there are open-air concerts.",
        come: "Tram or bus from the Old Town, about 10 minutes, or on foot from Āgenskalns.",
        quando: "Saturday morning, for the market.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 56.94313,
        lng: 24.0667
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Dome Square and Cathedral, Three Brothers, Swedish Gate and Powder Tower",
          "House of the Blackheads on Town Hall Square",
          "Lunch at the Central Market",
          "Afternoon: Freedom Monument, Bastejkalns Park and the Art Nouveau district on Alberta iela",
          "Sunset from St Peter's tower (tickets until 17:00)"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2 morning: Occupation Museum and the guided tour of the Corner House",
          "Art Nouveau Museum (not on Mondays) and Nativity Cathedral",
          "Afternoon: Academy of Sciences and Maskavas, then the National Library across the river"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1 and 2 as above",
          "Day 3: Jūrmala by train (beach and wooden villas of Majori), or Sigulda and the Gauja valley",
          "If it is Saturday, morning at the Kalnciema market before leaving"
        ]
      }
    ],
    zone: [
      {
        nome: "Old Town (Vecrīga)",
        testo: "Near everything, but noisy in the evening; many bars.",
        perChi: "Those who want to be a step from the sights",
        fascia: "€70-140"
      },
      {
        nome: "Art Nouveau centre",
        testo: "Quiet, with beautiful buildings; walkable from the Old Town.",
        perChi: "Those seeking atmosphere and restaurants",
        fascia: "€60-120"
      },
      {
        nome: "Āgenskalns",
        testo: "Across the river, cheaper; linked by tram.",
        perChi: "Those who prefer a local district",
        fascia: "€45-85"
      }
    ],
    sapori: [
      {
        nome: "Rupjmaize",
        testo: "Dark, sweet rye bread, the base of Latvian cooking."
      },
      {
        nome: "Pelēkie zirņi ar speķi",
        testo: "Grey peas with bacon, a traditional dish."
      },
      {
        nome: "Rīgas Melnais balzams",
        testo: "A black herbal liqueur, to try in the Old Town bars."
      },
      {
        nome: "Smoked fish",
        testo: "Excellent at the Central Market: salmon, eel, sprats."
      }
    ],
    attenzioni: [
      "Nightlife: some tourists have been charged very high prices or fraudulent card payments. Watch card payments made in front of you and be wary if asked to re-enter your PIN.",
      "Taxis: book with a known company or take one from a rank, only registered cars with yellow plates; agree the rough fare first.",
      "Pickpockets in the Old Town, at the Central Market and at the train and bus stations.",
      "In winter pavements are icy: suitable shoes."
    ],
    faq: [
      {
        domanda: "How many days do you need in Riga?",
        risposta: "Two days for the Old Town, the Art Nouveau district, the Central Market and the Soviet-history museums. The third day goes to Jūrmala or Sigulda."
      },
      {
        domanda: "Is Riga expensive?",
        risposta: "No: it is among the cheapest capitals in the European Union, with 3-star hotels from about €55-85 a night and café lunches for €12-20. You only pay more at the venues on Town Hall Square."
      },
      {
        domanda: "How do you get from Riga airport to the centre?",
        risposta: "By bus 22 in 30-45 minutes for about €1.50, or by Bolt or taxi in about 20 minutes. At night there is the N22 bus, one an hour."
      },
      {
        domanda: "Riga or Tallinn: which one?",
        risposta: "Tallinn has the more compact and intact medieval town; Riga is bigger, with Art Nouveau, the market and more varied nightlife, and it is cheaper. With 4-5 days you can do both, linked by a bus of about 4 hours."
      },
      {
        domanda: "Do you need to book the former KGB headquarters?",
        risposta: "The Corner House can only be seen on a guided tour at fixed times: buy the ticket online in advance, especially in summer. The ground-floor exhibition is free."
      },
      {
        domanda: "When should you go to Riga?",
        risposta: "May to September for the weather and Jūrmala; on 23-24 June it is Līgo, the midsummer festival, when many places close. December has the Christmas market on Dome Square."
      }
    ],
    gite: [
      {
        nome: "Jūrmala",
        distanza: "about 20 km, 30-35 minutes by train",
        come: "Regional train from the central station to Majori, departures at least every half hour.",
        testo: "Latvia's historic seaside resort: 33 km of white sand on the Gulf of Riga and hundreds of Art Nouveau wooden villas. By train you avoid the entry fee charged to cars."
      },
      {
        nome: "Sigulda and Gauja National Park",
        distanza: "about 50 km, 1-1.5 hours by train",
        come: "Regional train from Riga central station; in Sigulda you get around on foot and by cable car.",
        testo: "The Gauja river valley with forests, sandstone caves and the red-brick Turaida Castle. In autumn the foliage is the main reason to go."
      },
      {
        nome: "Rundāle Palace",
        distanza: "about 80 km, 1-1.5 hours by car",
        come: "By car or on an organised tour; by public transport you change in Bauska.",
        testo: "The Baroque palace designed by Rastrelli, the architect of St Petersburg's Winter Palace, with a French garden and rose garden. It is the trip for aristocratic Latvia."
      },
      {
        nome: "Ķemeri bog",
        distanza: "about 45 km, about 1 hour by train",
        come: "Train on the Jūrmala line to Ķemeri, then about 3 km on foot or by taxi to the trail.",
        testo: "A wooden boardwalk of about 3 km in Ķemeri National Park, among pools, dwarf pines and moss. It pairs well with half a day in Jūrmala."
      }
    ],
    esperienzeSlugs: ['riga-art-nouveau-passeggiata', 'riga-mercato-centrale-tour'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "The skyline of Riga's Old Town seen from the Daugava, with the spires of St. Peter's and the Cathedral above the riverfront",
    immagine: '/images/lettonia/riga.jpg',
  },
  {
    slug: 'jurmala',
    paeseSlug: 'lettonia',
    ordine: 2,
    nome: 'Jūrmala',
    tipologia: ['mare', 'architettura', 'relax'],
    giorniConsigliati: 'half a day, as a day trip from Riga',
    visitataPersonalmente: true,
    introduzione:
      "Latvia's historic seaside resort: a long beach of fine white sand on the Gulf of Riga, just west of the capital and reachable by train. From the tsarist years through the Soviet era, when the USSR's elite vacationed there, hundreds of Art Nouveau and Art Deco wooden villas went up in Jūrmala. Many are restored today and serve as private homes, hotels or small museums.",
    percheAndarci:
      "It's the easiest beach to reach from a capital on this itinerary. Behind the sand, the residential streets full of decorated wooden villas are a diffuse museum of seaside architecture with more than a century of Latvian history.",
    cosaVedere: [
      "The white sand beach, long and continuous",
      "Jomas iela, the pedestrian street of Majori, the center of the town, with shops, cafés and ice cream parlors",
      "The Art Nouveau and Art Deco wooden villas in the residential streets of Majori and Dzintari, many with hand-carved details and glassed-in verandas",
      "The Dzintari Concert Hall, the open-air concert hall, historic home of festivals and summer events",
    ],
    cosaFare: [
      "Walk a long way on the beach, from Majori station toward Dzintari or Bulduri",
      "Wander the residential streets behind Jomas iela and look at the decorated wooden villas from outside",
      "Stop at one of the cafés or restaurants on the seafront, open all year and livelier in summer",
    ],
    doveDormire: "On this itinerary Jūrmala is visited in half a day from Riga, without sleeping there. Anyone who wants to stay a few days at the sea can add it as an extension.",
    doveMangiare: "Along Jomas iela restaurants and cafés serve Latvian and international cooking; in summer several beach kiosks serve grilled fish and ice cream.",
    comeArrivare: "From Riga by regional train from the central station (Rīga Centrālā stacija) to Majori, with frequent departures.",
    comeSpostarsi: "The center of Majori and the beach are explored on foot. For Dzintari or the farther areas you can take the same regional train again, which stops at several points along the coast.",
    periodoMigliore: "June-August for swimming. In the shoulder seasons the walk on the beach and among the wooden villas is still pleasant, with fewer people.",
    costi: "an inexpensive trip: cheap train, free beach, cafés and restaurants on the seafront.",
    erroriDaEvitare: [
      "Going out of season expecting the summer beach life: outside summer the beach is almost deserted and many places close",
      "Staying only on the beach without wandering the residential streets: it's the decorated wooden villas that make Jūrmala different from \"just another beach\"",
      "Underestimating the shallow, cool water of the Gulf of Riga, very different from a swim in the Mediterranean",
    ],
    miaEsperienza:
      "We went to Jūrmala by train from Riga for a morning during our Baltic capitals trip with friends: a walk on the beach from Majori and among the wooden villas, then back to Riga in the afternoon.",
    luoghi: [
      {
        nome: "Jūrmala beach",
        testo: "A white quartz-sand beach 33 km long, on the coast of the Gulf of Riga.",
        come: "Train from Riga to Majori, on the Riga-Tukums line.",
        quando: "Summer, when it is warm; in winter it is deserted and atmospheric.",
        tempo: "half a day",
        costo: "free entry",
        consiglio: "The train is easier than the car: non-residents pay a toll to enter Jūrmala by vehicle, all year round: 5 € a day for a car (2026)."
      },
      {
        nome: "Jomas iela",
        testo: "The pedestrian street of Majori, the town centre, with shops, cafes and ice cream parlours. In summer it is very lively.",
        come: "On foot from Majori station.",
        quando: "Summer afternoon and evening.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "Choose a cafe on the side streets for better prices."
      },
      {
        nome: "Art Nouveau wooden villas",
        testo: "In the residential streets of Majori and Dzintari, wooden villas with carving and glazed verandas, examples of early-twentieth-century wooden architecture.",
        come: "On foot, behind Jomas iela.",
        quando: "Daytime, in good light.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "You look from outside: they are private homes."
      },
      {
        nome: "Dzintari Concert Hall",
        testo: "The open-air hall, the historic home of summer festivals and concerts, with classical and pop music.",
        come: "Train to Dzintari.",
        quando: "Summer, in the evening.",
        tempo: "2 hours",
        url: "https://www.dzintarukoncertzale.lv",
        consiglio: "Check the schedule for the concerts on the bill."
      }
    ],
    sapori: [
      {
        nome: "Grilled fish",
        testo: "Salmon and sprats served at the beach kiosks."
      },
      {
        nome: "Ice cream",
        testo: "Kiosks on the seafront, in summer, also cheap."
      }
    ],
    attenzioni: [
      "To enter Jūrmala by car non-residents pay a toll all year round, 5 € a day (2026): the train trip is simpler.",
      "The beach is windy: bring a sweatshirt even in summer.",
      "On summer weekends the restaurants are full: book."
    ],
    esperienzeSlugs: ['jurmala-spiaggia-ville-liberty'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "A wooden villa with glassed-in verandas and carved decorations among the trees of Jūrmala",
    immagine: '/images/lettonia/jurmala.jpg',
  },
]
