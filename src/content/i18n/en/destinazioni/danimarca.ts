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
      "Copenhagen-Kastrup Airport (CPH), among the best-connected hubs in northern Europe, about 20 minutes from the center by metro. There are direct flights from the main Italian cities. By train from Italy there's no convenient direct connection: those who prefer not to fly go through Germany with several changes.",
    comeSpostarsi:
      "A rental bike, the choice most in tune with the city, then metro, S-tog (suburban trains) and buses with an integrated zone ticket. The old town is also easy to get around on foot.",
    periodoMigliore:
      "May-September for the weather and the long days; June-August is high season, with Tivoli on summer hours. December for the Christmas markets, with a very different and equally beautiful atmosphere.",
    costi:
      "Tivoli: garden entrance from about €20, combined ticket gardens plus unlimited rides up to about €66. Canal boat trip: about €15-20 per person for an hour. Cheap meal €7-20, café lunch €17-27, mid-range dinner €40-75 for two.",
    erroriDaEvitare: [
      "Walking or stopping on a bike lane without looking: they're as busy as the roads and cyclists don't slow down for distracted tourists",
      "Photographing in Christiania in the signposted areas (the former Pusher Street in particular) or the residents without permission: the rules are posted and enforced",
      "Assuming Tivoli is open all year: outside the Christmas period it closes for a few winter months, so it's best to check the calendar before planning the evening",
      "Underestimating the possible disappointment of the Little Mermaid: it's a small statue, often surrounded by crowds, to be seen during a waterfront walk rather than as a destination in itself",
      "Assuming you pay in euros: Denmark is not in the eurozone, you pay in Danish kroner (DKK)",
    ],
    luoghi: [
      {
        nome: "Nyhavn",
        testo: "The seventeenth-century canal with the colourful facades of merchants' houses, now a line of cafes and restaurants on the quay. It is the most photographed spot in the city, and boats for the canals leave from here.",
        come: "On foot from Kongens Nytorv (5 minutes) or by metro (M1/M2) to Kongens Nytorv.",
        quando: "Early morning for photos; evening for tables on the quay, which are pricier.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "The venues on the sunny side are very expensive: it often pays to eat a street further."
      },
      {
        nome: "Rosenborg Castle",
        testo: "A Renaissance castle built by Christian IV between 1606 and 1634, with the crown jewels in the basement and the Kongens Have gardens. The rooms keep original furnishings.",
        come: "Metro or on foot to Nørreport (10 minutes from the centre).",
        quando: "Weekday morning; the park is open to everyone, free.",
        tempo: "1.5 hours",
        consiglio: "The Kongens Have is a good place for a free picnic."
      },
      {
        nome: "Amalienborg",
        testo: "Four rococo palaces around an octagonal square, the royal family's residence. The changing of the guard takes place at noon, with a march from Rosenborg.",
        come: "On foot from Nyhavn, along the waterfront (10 minutes).",
        quando: "Noon for the ceremony.",
        tempo: "1 hour",
        costo: "changing of the guard free",
        url: "https://www.kongernessamling.dk",
        consiglio: "Climb the nearby Marble Church for the dome and the view."
      },
      {
        nome: "Tivoli Gardens",
        testo: "Opened in 1843, it is one of the oldest amusement parks in the world still operating, in the middle of the city. Landscaped gardens, historic wooden roller coasters and lights at dusk.",
        come: "On foot from the central station (5 minutes). Open seasonally: summer, Halloween and Christmas.",
        quando: "Evening, when the lights come on.",
        tempo: "3-4 hours",
        url: "https://www.tivoli.dk",
        consiglio: "The entrance ticket is separate from the rides: check the packages on the website."
      },
      {
        nome: "Christianshavn and Vor Frelsers Kirke",
        testo: "A district with minor canals, houseboats and the Church of Our Saviour, famous for the gilded external spiral stair climbing the steeple. The climb is narrow and steep, with a view over all of Copenhagen.",
        come: "Metro M1/M2 to Christianshavn or on foot from the centre (15 minutes).",
        quando: "Clear day; the tower closes in strong wind, snow or ice.",
        tempo: "1-2 hours",
        url: "https://www.vorfrelserskirke.dk",
        consiglio: "The climb is not suitable for those with a fear of heights."
      },
      {
        nome: "Christiania",
        testo: "A 'free town' born in 1971 in a former military area: self-built houses, murals, studios and venues. It has its own rules: no photos of people, especially around the former Pusher Street, closed in 2024, and no running.",
        come: "On foot from Christianshavn, entrance from Prinsessegade.",
        quando: "Daytime; evening is less advisable for casual visitors.",
        tempo: "1-2 hours",
        costo: "free entry",
        url: "https://www.christiania.org",
        consiglio: "Respect the rules at the entrance and do not photograph the stalls."
      },
      {
        nome: "Louisiana Museum of Modern Art",
        testo: "In Humlebæk, north of Copenhagen, Denmark's best-loved modern art museum: pavilions by the sea with collections by Giacometti, Picasso and contemporary art, and a sculpture garden by the sea.",
        come: "Train from Copenhagen H to Humlebæk (about 35-40 minutes), then a 10-minute walk.",
        quando: "All day, with lunch at the cafe with a sea view.",
        tempo: "half a day",
        url: "https://www.louisiana.dk",
        consiglio: "Book your entry online at weekends."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Nyhavn in the morning",
          "Amalienborg at noon",
          "Rosenborg and Kongens Have",
          "Afternoon canal boat",
          "Evening at Tivoli"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Christianshavn (Vor Frelsers Kirke)",
          "Christiania",
          "Torvehallerne for lunch",
          "Evening: Vesterbro"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Louisiana or Kronborg Castle in Helsingør"
        ]
      }
    ],
    zone: [
      {
        nome: "Indre By (centre)",
        perChi: "Those short of time",
        testo: "Near Nyhavn and Strøget; small rooms and high prices, evening noise in the pedestrian streets."
      },
      {
        nome: "Vesterbro",
        perChi: "Those who want nightlife and restaurants",
        testo: "Near the central station, with food and venues. The station area is livelier."
      },
      {
        nome: "Nørrebro",
        perChi: "Those who prefer a real neighbourhood and mid prices",
        testo: "Multicultural, with cafes and shops; 15 minutes by bike from the centre."
      },
      {
        nome: "Christianshavn",
        perChi: "Those who want canal atmosphere",
        testo: "Calm and picturesque, near Christiania; fewer cheap restaurants."
      }
    ],
    sapori: [
      {
        nome: "Smørrebrød",
        testo: "Rye bread with fish, meat or egg, the traditional Danish lunch; try it at Torvehallerne."
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
        testo: "Baked pork meatballs with potatoes and red cabbage."
      }
    ],
    attenzioni: [
      "Bicycles: stay out of the bike lanes and look before stepping off the pavement.",
      "Pickpockets on Strøget, at the central station and in Nyhavn.",
      "Christiania: no photos around the former Pusher Street or of residents, and do not buy anything from illegal sellers: dealing is illegal and the police patrol.",
      "Nyhavn venues with inflated prices: check the menu before sitting."
    ],
    esperienzeSlugs: ['nyhavn-giro-in-barca', 'copenaghen-tour-in-bicicletta', 'christiania-visita', 'smorrebrod-tour-torvehallerne'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: "Central Copenhagen lit up at night seen from above, with the City Hall square and streets full of lights",
    immagine: '/images/danimarca/copenaghen.jpg',
  },
]
