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
      "Tallinn Lennart Meri Airport (TLL) is close to the center: tram, or a taxi or ride-hailing app. From some Italian airports there are direct low-cost flights, seasonal or year-round; otherwise you connect through a European hub. From Riga: direct buses, with several companies and several departures a day. From Helsinki: regular ferries, a classic extension for anyone with a few extra days.",
    comeSpostarsi:
      "The old center is all walkable. Public transport links the center with Kadriorg and Telliskivi, with cheap tickets to buy in the app or at ticket offices.",
    periodoMigliore:
      "May to September, for the milder weather and very long days near the solstice; June to August is the busiest season in the Old Town. Winter (November to March) is cold and dark, but the snow on the medieval roofs and the Christmas market in Town Hall Square have their charm.",
    costi: "a bit pricier than Vilnius and Riga: current prices for towers and museums on the official websites.",
    erroriDaEvitare: [
      "Stopping at the Old Town: Kadriorg and Telliskivi show the tsarist and the contemporary Tallinn, which the medieval center alone doesn't tell",
      "Going up Toompea and skipping the two viewing platforms (Kohtuotsa and Patkuli): they're a few steps from each other and look at the lower town from different angles",
      "Assuming Estonian resembles Lithuanian or Latvian: it's a Finno-Ugric language, related to Finnish and entirely foreign to the Baltic family of the other two capitals",
      "Going to Telliskivi without checking opening hours: venues and independent shops don't all open the same way every day",
    ],
    luoghi: [
      {
        nome: "Town Hall Square (Raekoja plats)",
        testo: "The medieval heart of the city, with the Gothic Town Hall finished in 1404, the oldest in the Baltic Sea region and Scandinavia, now a museum and concert venue. In summer it has outdoor tables; in December it hosts the Christmas market.",
        come: "On foot from the port.",
        quando: "Early morning, for the square without crowds; visiting hours of the Town Hall and its tower on the official website.",
        tempo: "1 hour",
        url: "https://www.tallinn.ee",
        consiglio: "Check cruise days: the square fills with groups."
      },
      {
        nome: "Toompea and Alexander Nevsky Cathedral",
        testo: "The hill above the lower town, with Toompea Castle (seat of Parliament) and the Orthodox Alexander Nevsky Cathedral, built at the end of the 19th century, with onion domes. The climb is short but scenic.",
        come: "On foot from Town Hall Square, climbing Pikk jalg.",
        quando: "Morning.",
        tempo: "1.5 hours",
        consiglio: "For photos of the city from above, the Kohtuotsa and Patkuli platforms."
      },
      {
        nome: "Kohtuotsa and Patkuli viewing platforms",
        testo: "Two terraces on Toompea with the classic views of the lower town, the port and the Gulf of Finland, with red roofs and spires.",
        come: "On foot from the cathedral.",
        quando: "Sunset, for the light on the roofs.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "Kohtuotsa is often crowded, Patkuli usually quieter."
      },
      {
        nome: "Medieval walls and towers",
        testo: "A long stretch of walls still standing, with many medieval towers, including Kiek in de Kök, a 15th-century artillery tower whose Low German name means ‘peek into the kitchen’. You can also visit the Maiden Tower, the Short Leg gate tower and the underground bastion passages.",
        come: "On foot, along Müürivahe.",
        quando: "Daytime, in good conditions.",
        tempo: "1-2 hours",
        costo: "Kiek in de Kök 16 €, bastion passages 10 € (2026); from October to April closed on Mondays, open 11-18",
        url: "https://www.linnamuuseum.ee",
        consiglio: "Combine Kiek in de Kök and the bastion passages in one visit."
      },
      {
        nome: "St Olaf's Church (Oleviste kirik)",
        testo: "A Gothic church with a spire about 124 metres tall, the tallest church in Estonia. The tower has a viewing platform at 60 metres.",
        come: "On foot, at the bottom of Town Hall Square.",
        quando: "Clear day.",
        tempo: "45 minutes",
        url: "https://www.oleviste.ee",
        consiglio: "Climb the tower for the view of the port."
      },
      {
        nome: "Kadriorg Park and Palace, KUMU",
        testo: "The Palace, commissioned by Peter the Great in 1718 for his wife Catherine I, with the park and Kumu, the Estonian art museum, in a modern building in the same park.",
        come: "Tram 1 or 3 to the Kadriorg terminus, or on foot from the centre.",
        quando: "Afternoon; the park is free. Kumu is closed on Mondays; open 10-18, Thursdays until 20.",
        tempo: "3 hours",
        costo: "Kumu 16 € full, 11 € reduced, 32 € family (2026)",
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
        consiglio: "You eat very well here at reasonable prices."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Town Hall Square",
          "Toompea and Nevsky Cathedral",
          "Walls and towers",
          "Lunch in a medieval restaurant",
          "Evening: Telliskivi"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Kadriorg and KUMU",
          "St Olaf's Church",
          "Evening in the Old Town"
        ]
      }
    ],
    zone: [
      {
        nome: "Old Town (Vanalinn)",
        perChi: "Those who want to stay on foot among the sights",
        testo: "Cobbled streets and atmosphere, but high prices and evening noise."
      },
      {
        nome: "Kalamaja",
        perChi: "Those seeking a district of cafes and wooden houses",
        testo: "Near Telliskivi and the port, a short way from the centre."
      },
      {
        nome: "Kesklinn",
        perChi: "Those who want convenience and shopping centres",
        testo: "Modern, a few minutes from the Old Town."
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
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "The pastel-colored medieval houses with pointed roofs on the east side of Town Hall Square in Tallinn, with outdoor café tables",
    immagine: '/images/estonia/tallinn.jpg',
  },
]
