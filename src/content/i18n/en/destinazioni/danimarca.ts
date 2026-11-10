import type { Destinazione } from '@/lib/types'

export const destinazioniDanimarca: Destinazione[] = [
  {
    slug: 'copenaghen',
    paeseSlug: 'danimarca',
    ordine: 1,
    nome: 'Copenhagen',
    tipologia: ['città', 'design', 'gastronomia'],
    giorniConsigliati: "3 days, the first stop of the \"Nordic Capitals\" itinerary",
    visitataPersonalmente: true,
    introduzione:
      "The Danish capital, often cited as the most bike-friendly city in the world: more than half of its residents get around by bike every day on over 450 km of lanes. In a compact center there are the colorful canals of Nyhavn, the historic gardens of Tivoli, the Little Mermaid's waterfront and Christiania, the self-governed community that has lived by its own rules in the heart of the city since 1971.",
    percheAndarci:
      "In an area you can cover on foot or by bike are some of the most recognizable images of northern Europe: the half-timbered houses of Nyhavn, the green copper roofs of the old town, Scandinavian design inside and outside the museums. And it's the most convenient gateway for a tour of the Nordic capitals: from here Stockholm is a few hours away by train or plane.",
    cosaVedere: [
      "Nyhavn, the seventeenth-century canal with the colorful facades of the merchants' houses, today a continuous row of cafés and restaurants on the quay: the most photographed spot in the city, and rightly so",
      "Tivoli Gardens, opened in 1843, one of the oldest amusement parks in the world still in operation: manicured gardens, historic wooden roller coasters and evening lights worth the visit even without riding anything. It is open only in certain seasons (spring-summer, Halloween, Christmas markets) and closes for a few months in winter",
      "The Little Mermaid (Den Lille Havfrue), the 1913 bronze sculpture inspired by the Hans Christian Andersen fairy tale, on the Langelinie waterfront. It's small and often surrounded by crowds and groups, one of the most-cited cases of an attraction that is worth more for its fame than for what you see; the waterfront walk around it is still worthwhile",
      "Christiania, the \"free town\" born in 1971 in a former military area in Christianshavn: self-built houses, murals and an atmosphere unlike the rest of the city. The historic Pusher Street, where hashish was sold openly for decades, was closed by the Danish authorities in 2024 after an episode of violence; selling drugs is illegal anyway throughout Denmark",
      "The old town around Strøget, one of the longest pedestrian shopping streets in Europe, which links Rådhuspladsen (the town hall square) to the old market square of Kongens Nytorv",
      "The Christianshavn district, with its smaller canals, houseboats and the church of Vor Frelsers Kirke, famous for the external spiral staircase that climbs around the golden spire",
    ],
    cosaFare: [
      "A ride on a rental bike along the waterfront and the canals, as the residents get around every day (see the dedicated experience page)",
      "A boat trip on the canals, from Nyhavn or from Christianshavn, to see the old town from the water (see the dedicated experience page)",
      "An evening at Tivoli, among historic rides and illuminated gardens, when it's in season",
      "A visit to Christiania keeping the community's rules in mind: no photos on the former Pusher Street and respect for the residents (see the dedicated experience page)",
      "A tour or a stop for smørrebrød, the Danish open-faced sandwich, at Torvehallerne (the covered market) or at one of the historic delicatessens in the center (see the dedicated experience page)",
    ],
    doveDormire:
      "The old town (Indre By) is the most convenient for those who want everything on foot, but it's also the most expensive area. Vesterbro, a former red-light district and today among the liveliest for bars and restaurants, is a good compromise between price and location, a few minutes on foot or by metro from the center. Nørrebro, multicultural and less touristy, is the cheapest choice, with real neighborhood life, but it's a bit farther from the main attractions.",
    doveMangiare:
      "Torvehallerne, the covered market near Nørreport, for smørrebrød, fish and local products in a quality street-food version. Nyhavn is scenic, but the prices are those of the view: better to choose carefully or stop for a coffee looking at the canal. For something more casual and international there's Reffen, the street-food area on the waterfront (open from spring to autumn).",
    comeArrivare:
      "Copenhagen-Kastrup Airport (CPH), among the best-connected hubs in northern Europe, about 20 minutes from the center by metro. There are direct flights from the main Italian cities. By train from Italy there's no convenient direct connection: those who prefer not to fly go through Germany with several changes. From the airport the M2 metro, running 24 hours a day, reaches Kongens Nytorv in about 15 minutes and the train gets to Central Station in 13; a 3-zone ticket costs about DKK 30 (about €4), from machines or the DOT Billetter app. From Stockholm the direct SJ train takes 5-5h30; from Oslo there is the DFDS overnight ferry, about 17 hours.",
    comeSpostarsi:
      "A rental bike, the choice most in tune with the city, then metro, S-tog (suburban trains) and buses with an integrated zone ticket. The old town is also easy to get around on foot.",
    periodoMigliore:
      "May-September for the weather and the long days; June-August is high season, with Tivoli on summer hours. December for the Christmas markets, with a very different and equally beautiful atmosphere.",
    costi:
      "Tivoli: garden entrance from about €20, combined ticket gardens plus unlimited rides up to about €66. Canal boat trip: about €15-20 per person for an hour. Cheap meal €7-20, café lunch €17-27, mid-range dinner €40-75 for two. Daily budget per person, excluding accommodation: low €50-70 (bike, Torvehallerne or supermarket, free sights), mid €100-140 (canal tour, one museum, average dinner), high over €200.",
    erroriDaEvitare: [
      "Walking or stopping on a bike lane without looking: they're as busy as the roads and cyclists don't slow down for distracted tourists",
      "Photographing in Christiania in the signposted areas (the former Pusher Street in particular) or the residents without permission: the rules are posted and enforced",
      "Assuming Tivoli is open all year: outside the Christmas period it closes for a few winter months, so it's best to check the calendar before planning the evening",
      "Underestimating the possible disappointment of the Little Mermaid: it's a small statue, often surrounded by crowds, to be seen during a waterfront walk rather than as a destination in itself",
      "Assuming you pay in euros: Denmark is not in the eurozone, you pay in Danish kroner (DKK)",
    ],
    miaEsperienza:
      "Copenhagen was the first stop of our Nordic capitals trip with friends: three days between Nyhavn, the canal boat tour, Tivoli, the Little Mermaid, Christianshavn and Christiania, then the train to Stockholm.",
    luoghi: [
      {
        nome: "Nyhavn",
        testo: "The canal dug between 1670 and 1675 for Christian V, lined with old coloured houses and now a row of cafés and restaurants on the quay. It is one of the most photographed spots in the city, and canal boats leave from here.",
        come: "Metro M1, M2, M3 or M4 to Kongens Nytorv, then a few steps on foot.",
        quando: "Early morning for photos; evening for tables on the quay, which are pricier.",
        tempo: "1 hour",
        costo: "free entry",
        orari: "Quay always open",
        lat: 55.67991,
        lng: 12.59029,
        consiglio: "The venues on the sunny side are very expensive: it often pays to eat a street further."
      },
      {
        nome: "Tivoli Gardens",
        testo: "Opened in 1843, it is one of the oldest amusement parks in the world, right in the centre. Neat gardens, the historic wooden roller coaster Rutschebanen and lights at dusk.",
        come: "On foot from the central station. Open in seasons: summer, Halloween and Christmas.",
        quando: "Evening, when the lights come on.",
        tempo: "3-4 hours",
        costo: "Garden entry around DKK 180-200, about €24-27; rides extra or with an unlimited wristband",
        orari: "Seasonal only: spring-summer, Halloween and Christmas; calendar on tivoli.dk",
        lat: 55.67361,
        lng: 12.56833,
        url: "https://www.tivoli.dk",
        consiglio: "The entrance ticket is separate from the rides: check the packages on the website."
      },
      {
        nome: "Canal boat tour",
        testo: "An hour on the canals of the centre and Christianshavn, passing under very low bridges and by the Opera, the Little Mermaid and Christiansborg. It is the quickest way to get your bearings on the first day.",
        come: "Frequent departures from Nyhavn and Gammel Strand; no need to book outside high season.",
        quando: "The first sunny afternoon; in winter departures are less frequent.",
        tempo: "1 hour",
        costo: "About €15-20 per person",
        lat: 55.6775,
        lng: 12.57861,
        consiglio: "The boats are open and it is windy on the water even in summer: bring a jacket."
      },
      {
        nome: "Rosenborg Castle",
        testo: "A Renaissance castle built by Christian IV between 1606 and 1624 as a summer residence. The treasury holds the Danish crown jewels and regalia; around it lies Kongens Have, the historic royal garden.",
        come: "Metro to Nørreport or on foot from the centre.",
        quando: "Weekday morning; the park is open to everyone, free.",
        tempo: "1.5 hours",
        orari: "Low season Tue-Sun 10am-4pm, closed Mondays (November 2026); garden always open",
        lat: 55.68567,
        lng: 12.57728,
        url: "https://www.kongernessamling.dk/en/rosenborg/",
        consiglio: "The Kongens Have is a good place for a free picnic."
      },
      {
        nome: "Amalienborg",
        testo: "Four identical palaces with rococo interiors around an octagonal square: the residence of the royal family. Every day there is the changing of the guard, which marches over from Rosenborg.",
        come: "On foot from Nyhavn, along the waterfront.",
        quando: "At noon, for the changing of the guard; the march sets off from the barracks at Gothersgade 100, next to Rosenborg.",
        tempo: "1 hour",
        costo: "changing of the guard free",
        lat: 55.68417,
        lng: 12.59306,
        url: "https://www.kongernessamling.dk/en/amalienborg/",
        consiglio: "The dome of the nearby Marble Church can be visited: times on the church's website."
      },
      {
        nome: "Little Mermaid and Kastellet",
        testo: "The 1913 bronze statue inspired by Andersen's tale is small and nearly always surrounded by groups, but the walk to get there is worth it. Right behind is Kastellet, a 17th-century star fortress with grassy ramparts and red barracks.",
        come: "On foot from Nyhavn along the Langelinie waterfront, about half an hour, or by bike.",
        quando: "Early morning, before the coaches.",
        tempo: "1-1.5 hours",
        costo: "Free",
        orari: "Statue always accessible",
        lat: 55.69278,
        lng: 12.59917
      },
      {
        nome: "Christiansborg",
        testo: "On the islet of Slotsholmen, the palace that houses Parliament, the Supreme Court and the royal reception rooms, with the ruins of the medieval castles in the basement. Its tower, the tallest in the city, has a viewing terrace over the city.",
        come: "On foot from Strøget or Gammel Strand; metro to Gammel Strand.",
        quando: "Morning for the royal rooms; the tower until evening.",
        tempo: "2 hours",
        lat: 55.67583,
        lng: 12.57889,
        url: "https://kongeligeslotte.dk/en/palaces-and-gardens/christiansborg-palace.html"
      },
      {
        nome: "Rundetårn (Round Tower)",
        testo: "The round tower of 1642, built by Christian IV as an astronomical observatory, is climbed by a spiral ramp with no steps. From the top you look over the centre, its copper roofs and spires.",
        come: "On foot from Strøget, on Købmagergade.",
        quando: "Late afternoon, with the light on the roofs.",
        tempo: "45 minutes",
        costo: "DKK 60 for adults (2026), about €8; free under 18",
        orari: "Open 362 days a year",
        lat: 55.68139,
        lng: 12.57583,
        url: "https://www.rundetaarn.dk/en/"
      },
      {
        nome: "Christianshavn and Vor Frelsers Kirke",
        testo: "A district of smaller canals, houseboats and the Church of Our Saviour, famous for its black and gold spire with an outside spiral staircase: you climb first inside the tower, on narrow and steep steps, then outdoors along the spiral, with a view over all of Copenhagen.",
        come: "Metro M1 or M2 to Christianshavn or on foot from the centre.",
        quando: "A clear day. Tower open daily 9am-8pm, last entry 30 minutes before closing, closed in January; it closes for a while in rain, snow or strong wind, because the copper steps get slippery. There are 400 steps in all, the last 150 outdoors.",
        tempo: "1-2 hours",
        costo: "tower DKK 70 adults, DKK 20 children (2026)",
        lat: 55.67292,
        lng: 12.59403,
        url: "https://www.vorfrelserskirke.dk",
        consiglio: "Book online: places are limited. The last stretch is exposed, not advised if you fear heights."
      },
      {
        nome: "Christiania",
        testo: "A 'free town' born in 1971 in a former military area: self-built houses, murals, studios and venues. It has its own rules, posted on signs at the entrances. Pusher Street, the dealing street, was dismantled in 2024.",
        come: "On foot from Christianshavn.",
        quando: "Daytime; evening is less advisable for casual visitors.",
        tempo: "1-2 hours",
        costo: "free entry",
        lat: 55.67361,
        lng: 12.59972,
        url: "https://www.christiania.org",
        consiglio: "Read the signs at the entrance and ask before photographing people."
      },
      {
        nome: "Ny Carlsberg Glyptotek",
        testo: "The museum founded by brewer Carl Jacobsen, with Greek, Roman and Etruscan sculpture, a large Rodin collection and Impressionist paintings. At its heart is a winter garden with palm trees under a glass dome.",
        come: "On foot from Central Station, opposite Tivoli.",
        quando: "On rainy days or in winter; the garden café is a good place for a break.",
        tempo: "2 hours",
        costo: "DKK 150 for adults, DKK 135 online (2026), about €18-20",
        lat: 55.67278,
        lng: 12.57222,
        url: "https://glyptoteket.com"
      },
      {
        nome: "Torvehallerne",
        testo: "Two glass halls near Nørreport with some sixty stalls of fish, cheese, bread, coffee and smørrebrød, the topped rye bread that is the classic Danish lunch. It is the easiest place to eat well without sitting down in a restaurant.",
        come: "Metro and trains to Nørreport, then two minutes on foot.",
        quando: "At lunchtime; Saturday is the liveliest day.",
        tempo: "1 hour",
        costo: "Free entry; smørrebrød roughly €8-15 a piece",
        lat: 55.68387,
        lng: 12.56955
      },
      {
        nome: "Louisiana Museum of Modern Art",
        testo: "In Humlebæk, north of Copenhagen, a major museum of modern and contemporary art: pavilions on the Øresund with works by Giacometti, Picasso, Warhol and Hockney, and a sculpture garden (Moore, Calder) sloping down to the sea.",
        come: "Coastal train from Copenhagen H to Humlebæk (about 40 minutes), then a 10-15 minute walk.",
        quando: "All day, with lunch at the cafe with a sea view. Open Tue-Fri 11am-10pm, Sat-Sun 11am-6pm, closed on Mondays.",
        tempo: "half a day",
        costo: "DKK 145 adults (2026)",
        orari: "Tue-Fri 11am-10pm, Sat-Sun 11am-6pm, closed Mondays",
        lat: 55.96944,
        lng: 12.54306,
        url: "https://www.louisiana.dk",
        consiglio: "Tickets and hours on the official website."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Nyhavn in the morning and a canal boat tour",
          "Amalienborg at noon for the changing of the guard",
          "Walk to the Little Mermaid and Kastellet",
          "Rosenborg and Kongens Have in the afternoon",
          "Evening at Tivoli, if in season"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Christiansborg and its tower",
          "Rundetårn and Strøget",
          "Lunch at Torvehallerne",
          "Afternoon in Christianshavn (Vor Frelsers Kirke) and Christiania",
          "Evening in Vesterbro"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: coastal train to the Louisiana Museum in Humlebæk",
          "Continue to Kronborg in Helsingør, one stop further north",
          "Alternatively, on a rainy day: Ny Carlsberg Glyptotek"
        ]
      }
    ],
    zone: [
      {
        nome: "Indre By (centre)",
        testo: "Near Nyhavn and Strøget; small rooms and high prices, evening noise in the pedestrian streets.",
        perChi: "Those short of time",
        fascia: "€160-300"
      },
      {
        nome: "Vesterbro",
        testo: "Near the central station, with food and venues. The station area is livelier.",
        perChi: "Those who want nightlife and restaurants",
        fascia: "€120-220"
      },
      {
        nome: "Nørrebro",
        testo: "Multicultural, with cafés and shops; close to the centre by bike.",
        perChi: "Those who prefer a real neighbourhood and mid prices",
        fascia: "€100-180"
      },
      {
        nome: "Christianshavn",
        testo: "Calm and picturesque, near Christiania; fewer cheap restaurants.",
        perChi: "Those who want canal atmosphere",
        fascia: "€140-250"
      }
    ],
    sapori: [
      {
        nome: "Smørrebrød",
        testo: "Rye bread topped with fish, meat or eggs, the traditional Danish lunch; served in cafés and traditional restaurants."
      },
      {
        nome: "Wienerbrød",
        testo: "Danish puff pastry, in cinnamon (kanelsnegl) or custard versions."
      },
      {
        nome: "Røde pølser",
        testo: "The red sausage of the kiosks (pølsevogn), with mustard and fried onion."
      },
      {
        nome: "Frikadeller",
        testo: "Pan-fried pork meatballs with potatoes and red cabbage."
      }
    ],
    attenzioni: [
      "Bicycles: stay out of the bike lanes and look before stepping off the pavement.",
      "Pickpockets on Strøget, at the central station, Nørreport, Nyhavn, Kongens Nytorv and in Christiania.",
      "Christiania and Nørrebro: take more care late at night, there has been gang violence. Do not buy anything from illegal sellers: dealing is illegal.",
      "Nyhavn venues are very expensive: check the menu before sitting."
    ],
    faq: [
      {
        domanda: "How many days do you need in Copenhagen?",
        risposta: "Two days are enough for the centre, Christianshavn and Christiania; a third lets you do the coastal trip to the Louisiana and Kronborg."
      },
      {
        domanda: "How do you get from Kastrup airport to the centre?",
        risposta: "The M2 metro, running 24 hours a day, reaches Kongens Nytorv in about 15 minutes; the train gets to Central Station in 13. A 3-zone ticket costs about DKK 30, from machines or the DOT Billetter app."
      },
      {
        domanda: "Is Tivoli open all year?",
        risposta: "No: it opens in spring-summer, for Halloween and for Christmas, and closes for a few winter months. Check the calendar on tivoli.dk before planning your evening."
      },
      {
        domanda: "Is it worth getting around Copenhagen by bike?",
        risposta: "Yes, the city is flat and there are cycle lanes everywhere; rent through the bike-sharing apps. The lanes are as busy as roads: do not stand on them on foot."
      },
      {
        domanda: "Can you take photos in Christiania?",
        risposta: "Not in the signposted areas, especially the former Pusher Street, and not of residents without permission. Selling drugs is illegal there as in the rest of Denmark."
      },
      {
        domanda: "How much does Copenhagen cost per day?",
        risposta: "It is among the most expensive cities in Europe: a cheap meal costs €7-20, an average dinner for two €40-75, a beer in a bar €7-11. Much can be seen for free on foot or by bike."
      }
    ],
    gite: [
      {
        nome: "Helsingør and Kronborg Castle",
        distanza: "about 45 minutes by train",
        come: "Coastal train (Kystbanen) from Copenhagen H; the castle is a 15-minute walk from the station.",
        testo: "The Renaissance castle on the Øresund strait where Shakespeare set Hamlet, a UNESCO site. It pairs well with the Louisiana, on the same line. Entry DKK 150; low season Tue-Sun 10am-4pm, closed Mondays (2026)."
      },
      {
        nome: "Roskilde",
        distanza: "about 25 minutes by train",
        come: "Frequent trains from Copenhagen H.",
        testo: "It has the cathedral where the kings of Denmark are buried, a UNESCO site, and the Viking Ship Museum on the fjord, with five 11th-century ships raised from the seabed."
      },
      {
        nome: "Malmö",
        distanza: "about 40 minutes by train",
        come: "Øresundståg train from Copenhagen H or the airport, across the Øresund bridge.",
        testo: "Sweden's third city, on the other side of the bridge: an old town with 16th-century squares, the twisting Turning Torso tower and long beaches. Bring ID for the border check."
      },
      {
        nome: "Frederiksborg Castle",
        distanza: "about 40 minutes by train",
        come: "S-tog line A to Hillerød, then 15 minutes on foot.",
        testo: "A red-brick Renaissance castle built on three islets in a lake, now the Museum of National History, with a Baroque garden."
      }
    ],
    esperienzeSlugs: ['nyhavn-giro-in-barca', 'copenaghen-tour-in-bicicletta', 'christiania-visita', 'smorrebrod-tour-torvehallerne'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: "Central Copenhagen lit up at night seen from above, with the City Hall square and streets full of lights",
    immagine: '/images/danimarca/copenaghen.jpg',
  },
]
