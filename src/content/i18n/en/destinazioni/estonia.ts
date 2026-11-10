import type { Destinazione } from '@/lib/types'

export const destinazioniEstonia: Destinazione[] = [
  {
    slug: 'tallinn',
    paeseSlug: 'estonia',
    ordine: 1,
    nome: 'Tallinn',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    introduzione:
      "Estonia's capital is the northernmost of the three Baltic capitals and looks out on the Gulf of Finland. The Old Town, a UNESCO site since 1997, is one of the best-preserved medieval centers in northern Europe: up top is Toompea, the fortified hill where power sat, below is the city of the Hanseatic merchants. Outside the walls, the baroque Kadriorg park and the former industrial complex of Telliskivi tell of two different Estonias, the tsarist one and the newer, digital and creative one.",
    percheAndarci:
      "The old center is the real thing: walls, towers and the square with the Gothic town hall have come down to us almost intact. And just outside those walls Tallinn changes face, with a Russian imperial park on one side and a creative district born in a Soviet factory on the other.",
    cosaVedere: [
      "Town Hall Square (Raekoja plats), with Tallinn Town Hall, from 1404, still in use",
      "Toompea hill, with Toompea Castle (now the seat of the Estonian parliament, the Riigikogu) and the Alexander Nevsky Orthodox Cathedral, with its golden onion domes",
      "The Kohtuotsa and Patkuli viewing platforms on Toompea, the two classic views over the lower town, the port and the Gulf of Finland",
      "The medieval city walls, with a long stretch still standing and the surviving towers, including Kiek in de Kök, the large artillery tower",
      "St. Olaf's Church (Oleviste kirik), Gothic, with its tall spire rising over the lower town",
      "Kadriorg Park, with Kadriorg Palace, built in 1718 by Peter the Great for his wife Catherine I to a design by the Italian architect Niccolò Michetti, now home to the foreign art museum; a few steps away is KUMU, the Estonian art museum in a contemporary building",
      "Telliskivi Creative City, the former Soviet-era industrial and railway complex that is now a creative district, with street art, design studios, independent shops and venues",
    ],
    cosaFare: [
      "Climb Toompea to the Kohtuotsa and Patkuli platforms for the view over the lower town",
      "Walk the stretch of wall that can still be walked and climb one of the towers open to the public",
      "Wander among the museums and avenues of Kadriorg Park, with a stop at KUMU if there's time for a longer visit",
      "Spend an afternoon among the independent shops, murals and venues of Telliskivi Creative City",
    ],
    doveDormire:
      "In the Old Town, to have everything on foot: the lower part around Town Hall Square is the most central, Toompea the quietest and most scenic. The Kalamaja district, between the Old Town and Telliskivi, is a more residential alternative with a more local feel.",
    doveMangiare:
      "Verivorst (blood sausage) with lingonberries is a traditional dish, especially at Christmas; kiluvõileib, an open sandwich with marinated sprats, butter and hard-boiled egg, is the Estonian snack par excellence. Telliskivi has the city's youngest food scene, with street food, craft breweries and weekend food markets.",
    comeArrivare:
      "Tallinn Lennart Meri Airport (TLL) is close to the center: tram, or a taxi or ride-hailing app. From some Italian airports there are direct low-cost flights, seasonal or year-round; otherwise you connect through a European hub. From Riga: direct buses, with several companies and several departures a day. From Helsinki: regular ferries, a classic extension for anyone with a few extra days. From the airport, tram 4 reaches the centre in about 20 minutes (about €2 bought from the driver, less with a transport card or QR ticket); Bolt costs about €6-10. From Riga the Lux Express bus takes about 4-4.5 hours; the coach station is a couple of kilometres from the Old Town, linked by tram or a 30-minute walk.",
    comeSpostarsi:
      "The old center is all walkable. Public transport links the center with Kadriorg and Telliskivi, with cheap tickets to buy in the app or at ticket offices.",
    periodoMigliore:
      "May to September, for the milder weather and very long days near the solstice; June to August is the busiest season in the Old Town. Winter (November to March) is cold and dark, but the snow on the medieval roofs and the Christmas market in Town Hall Square have their charm.",
    costi: "A bit pricier than Vilnius and Riga, much cheaper than Helsinki. Daily budget per person with a shared double room: €60-80 on a tight budget (simple room or hostel, lunches in Telliskivi), €110-160 mid-range (3-star hotel, a museum or tower, restaurant dinner), over €220 with a 4-5-star hotel in the Old Town. 2026 admissions: Kiek in de Kök €16, Kumu €16, Lennusadam €22, TV Tower €18-19.",
    erroriDaEvitare: [
      "Stopping at the Old Town: Kadriorg and Telliskivi show the tsarist and the contemporary Tallinn, which the medieval center alone doesn't tell",
      "Going up Toompea and skipping the two viewing platforms (Kohtuotsa and Patkuli): they're a few steps from each other and look at the lower town from different angles",
      "Assuming Estonian resembles Lithuanian or Latvian: it's a Finno-Ugric language, related to Finnish and entirely foreign to the Baltic family of the other two capitals",
      "Going to Telliskivi without checking opening hours: venues and independent shops don't all open the same way every day",
    ],
    miaEsperienza:
      "Tallinn was the last stop of our Baltic capitals trip with friends: we got there by bus from Riga and stayed three days, between the Old Town, Toompea Hill, the walls, Kadriorg and Telliskivi before the flight home.",
    luoghi: [
      {
        nome: "Town Hall Square (Raekoja plats)",
        testo: "The medieval heart of the city, with the Gothic Town Hall finished in 1404, the oldest in the Baltic Sea region and Scandinavia, now a museum and concert venue. In summer it has outdoor tables; in December it hosts the Christmas market.",
        come: "On foot from the port.",
        quando: "Early morning, for the square without crowds; visiting hours of the Town Hall and its tower on the official website.",
        tempo: "1 hour",
        costo: "Square free; Town Hall €7, combined Town Hall and tower ticket €12 (2026)",
        orari: "From 1 June to 31 August Town Hall Mon-Thu 11-18, Fri-Sun 11-16, tower daily 11-18; September to May Town Hall by appointment only (Mon-Fri 10-16) and tower closed",
        lat: 59.43735,
        lng: 24.74521,
        url: "https://raekoda.tallinn.ee/en/visit/",
        consiglio: "Check cruise days: the square fills with groups."
      },
      {
        nome: "Toompea and Alexander Nevsky Cathedral",
        testo: "The hill above the lower town, with Toompea Castle (seat of Parliament) and the Orthodox Alexander Nevsky Cathedral, built at the end of the 19th century, with onion domes. The climb is short but scenic.",
        come: "On foot from Town Hall Square, climbing Pikk jalg.",
        quando: "Morning.",
        tempo: "1.5 hours",
        costo: "Nevsky Cathedral: free entry, modest dress",
        lat: 59.43575,
        lng: 24.73932,
        consiglio: "For photos of the city from above, the Kohtuotsa and Patkuli platforms."
      },
      {
        nome: "Kohtuotsa and Patkuli viewing platforms",
        testo: "Two terraces on Toompea with the classic views of the lower town, the port and the Gulf of Finland, with red roofs and spires.",
        come: "On foot from the cathedral.",
        quando: "Sunset, for the light on the roofs.",
        tempo: "30 minutes",
        costo: "free entry",
        orari: "Open-air terraces, always accessible",
        lat: 59.43773,
        lng: 24.74221,
        consiglio: "Kohtuotsa is often crowded, Patkuli usually quieter."
      },
      {
        nome: "Medieval walls and towers",
        testo: "A long stretch of walls still standing, with many medieval towers, including Kiek in de Kök, a 15th-century artillery tower whose Low German name means ‘peek into the kitchen’. You can also visit the Maiden Tower, the Short Leg gate tower and the underground bastion passages.",
        come: "On foot, along Müürivahe.",
        quando: "Daytime, in good conditions.",
        tempo: "1-2 hours",
        costo: "Kiek in de Kök 16 €, bastion passages 10 € (2026); from October to April closed on Mondays, open 11-18",
        orari: "11-18; closed on Mondays from October to April. Until the end of 2026 the Maiden Tower and the wall walk are reached through Kiek in de Kök",
        lat: 59.4347,
        lng: 24.74127,
        url: "https://www.linnamuuseum.ee",
        consiglio: "Combine Kiek in de Kök and the bastion passages in one visit."
      },
      {
        nome: "St Olaf's Church (Oleviste kirik)",
        testo: "A Gothic church with a spire about 124 metres tall, the tallest church in Estonia. The tower has a viewing platform at 60 metres.",
        come: "On foot, at the bottom of Town Hall Square.",
        quando: "Clear day.",
        tempo: "45 minutes",
        orari: "Viewing platform open from April to late October, closed 31 October to 1 April; the church opens during services",
        lat: 59.44132,
        lng: 24.7479,
        url: "https://oleviste.ee/vaateplatvorm/",
        consiglio: "Climb the tower for the view of the port."
      },
      {
        nome: "Town Hall Pharmacy (Raeapteek)",
        testo: "One of Europe's oldest pharmacies still in business, in the same building since 1422, on a corner of Town Hall Square. Next to the modern counter is a small museum of jars, tools and medieval remedies; it still sells spiced claret and marzipan.",
        come: "On foot, Raekoja plats 11.",
        quando: "In the morning, before the cruise groups.",
        tempo: "20-30 minutes",
        costo: "Free museum entry for individual visitors (€2 per person only for guided groups)",
        orari: "Mon-Sat 10-18, break 13.30-14",
        lat: 59.43773,
        lng: 24.74594,
        url: "https://raeapteek.ee/en/"
      },
      {
        nome: "St Mary's Cathedral (Toomkirik)",
        testo: "The city's oldest church, on Toompea hill, with origins in the 13th century. Inside are dozens of wooden funeral coats of arms of the Baltic German nobility and carved tombs: a sober interior, very different from the domes of the nearby Orthodox cathedral.",
        come: "On foot on Toompea, two minutes from the Nevsky Cathedral.",
        quando: "In the morning, combined with the viewing terraces.",
        tempo: "30-45 minutes",
        orari: "Tue-Sun 10-16, closed Monday",
        lat: 59.43704,
        lng: 24.73916,
        url: "https://toomkirik.ee/en/"
      },
      {
        nome: "St Nicholas Museum (Niguliste)",
        testo: "A Gothic church in the lower town turned into a museum of sacred art, part of the Art Museum of Estonia. It holds the fragment of Bernt Notke's late 15th-century «Danse Macabre» and large medieval altarpieces; on some evenings it hosts organ concerts.",
        come: "On foot, Niguliste 3, at the foot of Toompea.",
        quando: "A rainy afternoon, or an evening concert.",
        tempo: "1 hour",
        orari: "Tue-Sun 10-18, closed Monday",
        lat: 59.43592,
        lng: 24.74277,
        url: "https://niguliste.ekm.ee/en/"
      },
      {
        nome: "Pikk Street and St Catherine's Passage",
        testo: "Pikk, the «long street», links the harbour to Toompea past the merchant guild houses, the House of the Blackheads and the Fat Margaret tower. A few steps away, Katariina käik, a medieval lane along the walls of the Dominican monastery, has workshops of glassmakers, potters and weavers.",
        come: "On foot, from Viru Gate or Town Hall Square.",
        quando: "Early morning or at sunset, when the lanes empty out.",
        tempo: "1 hour",
        costo: "Free",
        orari: "Streets always accessible; workshops open during the day",
        lat: 59.43783,
        lng: 24.74798
      },
      {
        nome: "Kadriorg Park and Palace, KUMU",
        testo: "The Palace, commissioned by Peter the Great in 1718 for his wife Catherine I, with the park and Kumu, the Estonian art museum, in a modern building in the same park.",
        come: "Tram 1 or 3 to the Kadriorg terminus, or on foot from the centre.",
        quando: "Afternoon; the park is free. Kumu is closed on Mondays; open 10-18, Thursdays until 20.",
        tempo: "3 hours",
        costo: "Kumu 16 € full, 11 € reduced, 32 € family (2026)",
        orari: "Kumu Tue, Wed and Fri-Sun 10-18, Thu 10-20, closed Monday; Kadriorg Palace also closed Monday; park always open",
        lat: 59.43847,
        lng: 24.79102,
        url: "https://kumu.ekm.ee",
        consiglio: "The park is a nice place to stroll outside the centre."
      },
      {
        nome: "Telliskivi Creative City",
        testo: "The former workshops where locomotives were repaired, now a creative district with street art, studios, independent shops and restaurants.",
        come: "On foot from the Old Town or by public transport.",
        quando: "Evening, for the venues; Saturday for the shops.",
        tempo: "2 hours",
        costo: "free entry",
        orari: "Area always accessible; shops and venues keep their own hours",
        lat: 59.43893,
        lng: 24.72873,
        consiglio: "You eat very well here at reasonable prices."
      },
      {
        nome: "Lennusadam, the Seaplane Harbour",
        testo: "The Estonian Maritime Museum inside three 1917 concrete seaplane hangars with thin-shell vaults. Walkways run above the 1936 submarine Lembit, and historic ships moored outside can be boarded, such as the steam icebreaker Suur Tõll. It works even for people who are not into the sea.",
        come: "A 15-minute walk from Kalamaja, or bus to the Lennusadam stop.",
        quando: "A day of bad weather, or with children.",
        tempo: "2-3 hours",
        costo: "Combined ticket (hangar, temporary exhibition, ships Suur Tõll and Valvas) €22, concession €11; with the Fat Margaret tower €30 (2026)",
        orari: "October-April Tue-Sun 10-18; May-September daily 10-19",
        lat: 59.45451,
        lng: 24.73885,
        url: "https://meremuuseum.ee/lennusadam/en/"
      },
      {
        nome: "TV Tower (Teletorn)",
        testo: "The tower built for the 1980 Olympic sailing regatta, 314 metres tall, with the viewing platform open at 175 metres: from there you see the city, the gulf and, on clear days, the Finnish coast. There is also an optional harnessed «edge walk» outside the platform.",
        come: "Bus from the centre towards Pirita-Kose, about 20-25 minutes, or taxi.",
        quando: "A clear day; if visibility is poor, the ticket desk stamps your ticket so you can come back free within two months.",
        tempo: "1.5 hours",
        costo: "€18-19, concession €13-14; evening ticket €10 from 17:00 (2026)",
        orari: "Sun-Fri 10-18, Sat 10-21",
        lat: 59.47119,
        lng: 24.88744,
        url: "https://teletorn.ee/en/"
      },
      {
        nome: "Estonian Open Air Museum (Rocca al Mare)",
        testo: "A museum village in the woods by the sea, west of the centre, with farms, windmills, a wooden church, a school and an inn moved here from all over Estonia. It shows rural life from the 18th to the 20th century, down to a collective-farm apartment block.",
        come: "Bus from the centre towards Rocca al Mare, about 25 minutes.",
        quando: "Summer for farm activities; in winter under snow it is quiet and lovely.",
        tempo: "3 hours",
        costo: "€14 in low season (29 September-22 April), €7 from 16:00; summer prices on the website (2026)",
        orari: "Low season Tue-Sun, buildings 10-17, park until 19 (daily in December)",
        lat: 59.436,
        lng: 24.63534,
        url: "https://evm.ee/en/"
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Town Hall Square and Town Hall Pharmacy",
          "Up to Toompea: Nevsky Cathedral, St Mary's Cathedral, Kohtuotsa and Patkuli terraces",
          "Lunch in the lower town",
          "Afternoon: walls and Kiek in de Kök, then Pikk Street and St Catherine's Passage",
          "St Olaf's tower (April to October)",
          "Evening: dinner in Telliskivi"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2 morning: Kadriorg Park, Palace and Kumu (not on Mondays)",
          "Afternoon: Kalamaja on foot and Lennusadam",
          "Evening: Telliskivi or the Old Town lit up"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1 and 2 as above",
          "Day 3: ferry day trip to Helsinki, or morning at the Rocca al Mare Open Air Museum and sunset from the TV Tower",
          "Alternatively, a day in Lahemaa National Park by car or on a tour"
        ]
      }
    ],
    zone: [
      {
        nome: "Old Town (Vanalinn)",
        testo: "Cobbled streets and atmosphere, but high prices and evening noise.",
        perChi: "Those who want to stay on foot among the sights",
        fascia: "€90-170"
      },
      {
        nome: "Kalamaja",
        testo: "Near Telliskivi and the port, a short way from the centre.",
        perChi: "Those seeking a district of cafes and wooden houses",
        fascia: "€70-120"
      },
      {
        nome: "Kesklinn",
        testo: "Modern, a few minutes from the Old Town.",
        perChi: "Those who want convenience and shopping centres",
        fascia: "€70-130"
      },
      {
        nome: "Kadriorg",
        testo: "Wooden villas and the park, 15-20 minutes by tram from the Old Town; quiet in the evening, close to Kumu and the sea.",
        perChi: "Those after greenery and quiet",
        fascia: "€70-120"
      }
    ],
    sapori: [
      {
        nome: "Leib (black bread)",
        testo: "Dark rye bread, the base of Estonian cooking."
      },
      {
        nome: "Kama",
        testo: "Toasted cereal flour with kefir, a typical dessert."
      },
      {
        nome: "Verivorst",
        testo: "Blood sausage with barley, typical of Christmas."
      },
      {
        nome: "Marzipan",
        testo: "Estonian marzipan, at the Maiasmokk confectionery, a historic cafe in the city."
      }
    ],
    attenzioni: [
      "Medieval-costume restaurants are pricey and touristy: compare with those in Telliskivi.",
      "Taxis: use a recognised app, and not those near the cruise port.",
      "On cruise days the Old Town is extremely crowded: go early.",
      "In winter ice makes the cobbles dangerous: suitable shoes."
    ],
    faq: [
      {
        domanda: "How many days do you need in Tallinn?",
        risposta: "Two days are enough for the Old Town, Toompea, Kadriorg and Telliskivi. A third day adds Lennusadam and the TV Tower, or a trip to Helsinki or Lahemaa."
      },
      {
        domanda: "Is Tallinn expensive?",
        risposta: "It is the priciest of the three Baltic capitals, but still much cheaper than Helsinki and the Scandinavian capitals. The medieval-costume restaurants on the square are what push the bill up most."
      },
      {
        domanda: "Can you visit Tallinn as a day trip from Helsinki?",
        risposta: "Yes, with the roughly 2-hour ferry you can see the Old Town in a day. If you can, stay at least one night: in the evening, once the cruise ships leave, the centre empties and is much nicer."
      },
      {
        domanda: "When is the best time to visit Tallinn?",
        risposta: "May to September, with very long days in June; only from June to August can the Town Hall and its tower be visited without an appointment. December has the Christmas market on the square, but it gets dark early and it is cold."
      },
      {
        domanda: "Is the Tallinn Card worth it?",
        risposta: "It pays off if you do three or more admissions a day: it includes the Town Hall and many city museums, among others. For a visit limited to the Old Town, with its free squares and terraces, it is often unnecessary."
      },
      {
        domanda: "How do you get from the airport to the Old Town?",
        risposta: "By tram 4 in about 20 minutes, ticket about €2 from the driver. By taxi or Bolt it takes 10-15 minutes and about €6-10."
      }
    ],
    gite: [
      {
        nome: "Helsinki",
        distanza: "about 2 hours by ferry",
        come: "Scheduled ferries from Tallinn's Terminal D and Old Port, many sailings a day; book online.",
        testo: "The Finnish capital is just across the gulf: in a day you can see Senate Square, the Orthodox Uspenski Cathedral and the harbour market. Take the first ferry out and the last one back."
      },
      {
        nome: "Lahemaa National Park",
        distanza: "about 70 km, 1 hour by car",
        come: "By rental car or on an organised tour; public transport is sparse.",
        testo: "Bogs with wooden boardwalks, forests, fishing villages on the coast and the manor houses of Palmse and Sagadi. It is the classic nature day trip from Tallinn."
      },
      {
        nome: "Tartu",
        distanza: "about 185 km, 2-2.5 hours by train",
        come: "Elron train from Balti jaam station, or bus from the coach station.",
        testo: "Estonia's university town, European Capital of Culture 2024, with its sloping Town Hall Square, Toome Hill with the cathedral ruins and the Estonian National Museum."
      }
    ],
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "The pastel-colored medieval houses with pointed roofs on the east side of Town Hall Square in Tallinn, with outdoor café tables",
    immagine: '/images/estonia/tallinn.jpg',
  },
]
