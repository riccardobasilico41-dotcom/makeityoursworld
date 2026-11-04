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
      "The old center is the real thing: walls, towers and the square with the oldest town hall in the Baltics have come down to us almost intact. And just outside those walls Tallinn changes face, with a Russian imperial park on one side and a creative district born in a Soviet factory on the other.",
    cosaVedere: [
      "Town Hall Square (Raekoja plats), with Tallinn Town Hall, from 1404, the oldest one still in use in the Baltics",
      "Toompea hill, with Toompea Castle (now the seat of the Estonian parliament, the Riigikogu) and the Alexander Nevsky Orthodox Cathedral, with its golden onion domes",
      "The Kohtuotsa and Patkuli viewing platforms on Toompea, the two classic views over the lower town, the port and the Gulf of Finland",
      "The medieval city walls, about 1.85 km still standing with the surviving towers, including Kiek in de Kök, the cannon tower whose name means \"peek into the kitchen\": one of the best-preserved defensive systems in Europe",
      "St. Olaf's Church (Oleviste kirik): in the 16th century, with its spire, it was for a time the tallest building in the world",
      "Kadriorg Park, with Kadriorg Palace, built in 1718 by Peter the Great for his wife Catherine I to a design by the Italian architect Niccolò Michetti, now home to the foreign art museum; a few steps away is KUMU, the Estonian art museum in a contemporary building, European Museum of the Year in 2008",
      "Telliskivi Creative City, the former Soviet-era industrial and railway complex that has been a creative district since 2009, with street art, design studios, independent shops and venues",
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
      "Tallinn Lennart Meri Airport (TLL) is about 4 km from the center: 15-20 minutes by tram or a few minutes by taxi/Bolt, one of the closest airports to a city center in Europe. From some Italian airports there are direct low-cost flights, seasonal or year-round; otherwise you connect through a European hub. From Riga: bus in about 4 to 4.5 hours, with several companies, including Lux Express, and several departures a day. From Helsinki: ferry in about 2 hours, a classic extension for anyone with a few extra days.",
    comeSpostarsi:
      "The old center is all walkable. Public trams and buses take you from the center to Kadriorg and Telliskivi in a few minutes, with cheap tickets to buy in the app or at ticket offices.",
    periodoMigliore:
      "May to September, for the milder weather and very long days near the solstice; June to August is the busiest season in the Old Town. Winter (November to March) is cold and dark, but the snow on the medieval roofs and the Christmas market in Town Hall Square have their charm.",
    costi: "a bit pricier than Vilnius and Riga: entry to the four towers of the city walls €12, entry to KUMU €12-16 depending on the exhibition, a normal dinner €12-18 per person.",
    erroriDaEvitare: [
      "Stopping at the Old Town: Kadriorg and Telliskivi show the tsarist and the contemporary Tallinn, which the medieval center alone doesn't tell",
      "Going up Toompea and skipping the two viewing platforms (Kohtuotsa and Patkuli): they're a few steps from each other and look at the lower town from different angles",
      "Assuming Estonian resembles Lithuanian or Latvian: it's a Finno-Ugric language, related to Finnish and entirely foreign to the Baltic family of the other two capitals",
      "Going to Telliskivi on Sunday evening or Monday, when several venues and independent shops are closed",
    ],
    luoghi: [
      {
        nome: "Town Hall Square (Raekoja plats)",
        testo: "The medieval heart of the city, with the Gothic Town Hall of 1404, the oldest still in use in the Baltic. In summer it has outdoor tables; in December it hosts the Christmas market.",
        come: "On foot from the port (10-15 minutes).",
        quando: "Early morning, for the square without crowds; the Town Hall is open only in summer.",
        tempo: "1 hour",
        url: "https://www.tallinn.ee",
        consiglio: "Check cruise days: the square fills with groups."
      },
      {
        nome: "Toompea and Alexander Nevsky Cathedral",
        testo: "The hill above the lower town, with Toompea Castle (seat of Parliament) and the Russian Orthodox cathedral of 1900, with onion domes. The climb is short but scenic.",
        come: "On foot from Town Hall Square, climbing Pikk jalg.",
        quando: "Morning.",
        tempo: "1.5 hours",
        costo: "cathedral entry free",
        consiglio: "For photos of the city from above, the Kohtuotsa and Patkuli platforms."
      },
      {
        nome: "Kohtuotsa and Patkuli viewing platforms",
        testo: "Two terraces on Toompea with the classic views of the lower town, the port and the Gulf of Finland, with red roofs and spires.",
        come: "On foot, 5 minutes from the cathedral.",
        quando: "Sunset, for the light on the roofs.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "Kohtuotsa is the most photographed, Patkuli is quieter."
      },
      {
        nome: "Medieval walls and towers",
        testo: "About 1.85 km of walls still standing with some twenty towers, including Kiek in de Kök, a cannon tower whose name means 'peep into the kitchen'. You can climb some towers.",
        come: "On foot, along Müürivahe.",
        quando: "Daytime, in good conditions.",
        tempo: "1-2 hours",
        costo: "12 euros for entry to the four towers (site figure, to be rechecked)",
        url: "https://www.linnamuuseum.ee",
        consiglio: "The combined ticket is worth it for several towers."
      },
      {
        nome: "St Olaf's Church (Oleviste kirik)",
        testo: "A church with a 124 metre spire that in the sixteenth century was for a time the tallest building in the world. You climb the tower for the view.",
        come: "On foot, at the bottom of Town Hall Square.",
        quando: "Clear day.",
        tempo: "45 minutes",
        url: "https://www.oleviste.ee",
        consiglio: "Climb the tower for the view of the port."
      },
      {
        nome: "Kadriorg Park and Palace, KUMU",
        testo: "The Palace, commissioned by Peter the Great in 1718 for his wife Catherine I, with the park and Kumu, the Estonian art museum, in a modern building in the same park.",
        come: "Tram 1 or 3 to Kadriorg, 10 minutes from the centre.",
        quando: "Afternoon; the park is free.",
        tempo: "3 hours",
        costo: "KUMU 12-16 euros depending on the exhibition (site figure, to be rechecked)",
        url: "https://kumu.ekm.ee",
        consiglio: "The park is a nice place to stroll outside the centre."
      },
      {
        nome: "Telliskivi Creative City",
        testo: "The former Soviet industrial complex, since 2009 a creative district with street art, studios, independent shops and restaurants. On Saturday there is a flea market.",
        come: "On foot from the Old Town (15 minutes) or by tram.",
        quando: "Evening, for the venues; Saturday for the market.",
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
        testo: "Near Telliskivi and the port, 15 minutes from the centre."
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
        testo: "Estonian marzipan, at the Maiasmokk confectionery, the oldest cafe in the city."
      }
    ],
    attenzioni: [
      "Medieval-costume restaurants are pricey and touristy: compare with those in Telliskivi.",
      "Taxis: use Bolt, born in Estonia, and not those near the cruise port.",
      "On cruise days the Old Town is extremely crowded: go early.",
      "In winter ice makes the cobbles dangerous: suitable shoes."
    ],
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "The pastel-colored medieval houses with pointed roofs on the east side of Town Hall Square in Tallinn, with outdoor café tables",
    immagine: '/images/estonia/tallinn.jpg',
  },
]
