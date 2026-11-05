import type { Destinazione } from '@/lib/types'

export const destinazioniPaesiBassi: Destinazione[] = [
  {
    slug: 'amsterdam',
    paeseSlug: 'paesi-bassi',
    ordine: 1,
    nome: 'Amsterdam',
    tipologia: ['città', 'arte', 'storia'],
    giorniConsigliati: "3-4 days for the historic center, the canal ring and the main museums",
    visitataPersonalmente: true,
    introduzione:
      "The capital of the Netherlands, built on a network of concentric canals dug starting in the seventeenth century, in the Dutch Golden Age. The Grachtengordel (the canal ring), with its typical tall, narrow row houses facing the water, has been a UNESCO World Heritage Site since 2010. It's a compact, almost flat city, to be explored on foot or, more often, by bicycle.",
    percheAndarci:
      "In an area you can cross by bike in half an hour there are some of the most important museums in Europe (Rijksmuseum, Van Gogh Museum), a place of memory to visit well prepared like the Anne Frank House, and an entire canal district that is a World Heritage Site. And there's an urban culture you don't find like this elsewhere: the bicycle as the main means of transport, not as an activity for tourists.",
    cosaVedere: [
      "The Grachtengordel, the seventeenth-century canal ring (Herengracht, Keizersgracht, Prinsengracht) and UNESCO site, with its row houses and typical gables, the decorated fronts that once showed the owner's trade or wealth",
      "The Anne Frank House (Anne Frank Huis), on the Prinsengracht, the building where the Frank family hid from 1942 to 1944: tickets sell out weeks ahead and must be booked online on the official website",
      "The Rijksmuseum, the national museum with the largest collection of Dutch art and history in the world, from Rembrandt's Night Watch onward",
      "The Van Gogh Museum, the largest collection in the world of works by Vincent van Gogh, arranged largely in chronological order",
      "Jordaan, the former working-class neighborhood west of the center, now among the liveliest parts of the city, with narrow streets, hofjes (small inner courtyards, once almshouses) and a more residential atmosphere than the historic center",
      "The Red Light District (De Wallen), in the medieval heart of the city: a red-light area regulated for centuries, to be walked through without taking photos",
      "Dam Square, the central square with the Royal Palace and the National Monument",
    ],
    cosaFare: [
      "Rent a bicycle and get around like the locals: it's the most natural way to experience the city, but you have to learn the basic rules fast (see the dedicated experience page)",
      "A canal cruise, by day or at sunset, to see the Grachtengordel ring from the water instead of from the bridges",
      "Walk through Jordaan with no particular destination, among hofjes and small shops",
      "Cross the Red Light District at the same pace as any other part of the city, without stopping to photograph the windows or the people who work there: in many areas it's prohibited by law, and in any case it's a matter of basic respect",
      "If time allows, visit one of the smaller museums: the Van Loon Museum or the Willet-Holthuysen Museum, two canal-house museums that show how people lived in these houses",
    ],
    doveDormire:
      "The Grachtengordel (the canal ring) is the most central and characteristic area, convenient on foot for almost everything; Jordaan, just to the west, is the more residential alternative and often a bit cheaper, ten minutes' walk from the heart of the historic center.",
    doveMangiare:
      "Bitterballen (fried stuffed meatballs, a typical bar snack) with a Dutch beer; haring (marinated raw herring, served in pieces with chopped onion) from the street stalls; stroopwafel, the wafer filled with caramel syrup, best freshly made and still warm from the market stalls; rijsttafel, the \"rice table\" with dozens of small Indonesian-style dishes, a legacy of the Dutch colonial past and now part of the city's cuisine.",
    comeArrivare:
      "Amsterdam Schiphol Airport (AMS), among the busiest in Europe, about 15 km from the center: a direct train in 15-20 minutes to Central Station, with very frequent service. From Italy there's no convenient direct rail link: you almost always arrive by air.",
    comeSpostarsi: "In the center by bicycle or on foot; for the rest of the city, GVB trams, buses and metro, which can also be paid for with a contactless card directly on board. Driving is discouraged: in the center traffic is discouraged and parking is expensive and scarce.",
    periodoMigliore: "April-May and September-October for the mild weather and fewer crowds; June-August is high season, hot and very crowded; November-March is cold and often rainy but manageable, with Christmas markets in December",
    costi: "an expensive city by European standards: main museums €20-25 each, a regular dinner €20-25 per person, bike rental €10-15 a day",
    erroriDaEvitare: [
      "Arriving without having booked the Anne Frank House online: tickets sell out weeks ahead and are no longer sold at the ticket office",
      "Walking or stopping distractedly on the bike paths (the red asphalt, distinct from the sidewalk): across the city it's the most common cause of accidents and arguments with tourists",
      "Assuming you can pay in cash everywhere: many places accept only cards or contactless",
      "Photographing the windows or the people working in the Red Light District: it's prohibited in much of the area and culturally very frowned upon",
      "Underestimating the lines at the Rijksmuseum and the Van Gogh Museum in high season: it's best to book timed tickets online in advance",
    ],
    luoghi: [
      {
        nome: "Rijksmuseum",
        testo: "The Dutch national museum, with Rembrandt's Night Watch, the Vermeers and the miniature ships. The building has a free garden with sculptures and a square for photos.",
        come: "Tram 2 or 12 to the Rijksmuseum, 10 minutes from the centre. Timed ticket online.",
        quando: "Daily 9am-5pm, holidays included; early morning or late afternoon to avoid the crowd in front of The Night Watch.",
        tempo: "3 hours",
        costo: "€25 adults (2026), free under 18",
        url: "https://www.rijksmuseum.nl",
        consiglio: "Start from the Golden Age floor: in an hour you see the most important rooms."
      },
      {
        nome: "Van Gogh Museum",
        testo: "The largest Van Gogh collection: paintings, drawings and letters in chronological order, from The Potato Eaters to the Sunflowers. You understand the artist's evolution.",
        come: "Tram 2 or 5 to Van Baerlestraat; timed tickets.",
        quando: "Early morning, with a ticket already bought.",
        tempo: "2 hours",
        url: "https://www.vangoghmuseum.nl",
        consiglio: "Book ahead, especially at weekends: the slots sell out."
      },
      {
        nome: "Anne Frank House",
        testo: "The secret annex where Anne Frank and her family hid from 1942 to 1944, above her father's company. The route is narrow and silent; photography is not allowed.",
        come: "Tickets are sold only online on the official website: every Tuesday at 10am the tickets for visits six weeks later are released. None are sold at the door.",
        quando: "Book as soon as you decide the dates; on Prinsengracht, 15 minutes from the centre.",
        tempo: "1-1.5 hours",
        costo: "€16.50 adults, including a €1 booking fee (official site, 2026)",
        url: "https://www.annefrank.org",
        consiglio: "Beware of resellers: the official site is the only reliable one."
      },
      {
        nome: "Seventeenth-century canals",
        testo: "The canal ring (Grachtengordel) has been a UNESCO site since 2010, with gabled houses, bridges and boats. The most beautiful stretches are Prinsengracht, Keizersgracht and Herengracht.",
        come: "On foot, by boat tour or boat rental; best on foot.",
        quando: "Evening, with lights on the water.",
        tempo: "2-3 hours",
        consiglio: "Take a sunset boat tour to see the houses lit up."
      },
      {
        nome: "Jordaan and Begijnhof",
        testo: "The Jordaan is a district of narrow streets, cafes and craft shops. The Begijnhof is a hidden courtyard with medieval houses and a garden open to the public.",
        come: "On foot from the centre (10-15 minutes).",
        quando: "Morning, with soft light and fewer people.",
        tempo: "2 hours",
        costo: "Begijnhof: free entry",
        consiglio: "The Begijnhof is a living place: speak quietly and do not photograph the doors."
      },
      {
        nome: "Vondelpark",
        testo: "The city's largest park, with ponds, lawns and kiosks; in summer there are open-air concerts. A good place for a break after the museums.",
        come: "Next to the Van Gogh museum, a few minutes on foot.",
        quando: "Summer afternoon.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "Rent a bike to ride around the park."
      },
      {
        nome: "Albert Cuyp Market",
        testo: "The city's largest open-air street market: fruit, cheeses, hot stroopwafels and gadgets. Ideal for cheap snacks.",
        come: "Tram 3 or 24 to Albert Cuypstraat, in De Pijp.",
        quando: "Monday to Saturday, morning.",
        tempo: "1 hour",
        consiglio: "Try hot stroopwafels and herring with onions."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Rijksmuseum",
          "Lunch at Albert Cuyp",
          "Canals in the afternoon",
          "Evening: Jordaan"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: pre-booked Anne Frank House",
          "Van Gogh Museum",
          "Vondelpark and dinner"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: trip to Keukenhof (spring) or Zaanse Schans"
        ]
      }
    ],
    zone: [
      {
        nome: "Historic centre (Centrum)",
        perChi: "Those who want to do everything on foot",
        testo: "Canals and museums close by, but very high prices and noise, especially toward De Wallen."
      },
      {
        nome: "Jordaan and Canal Ring",
        perChi: "Those seeking atmosphere and quiet streets",
        testo: "Beautiful and calmer areas, but expensive."
      },
      {
        nome: "De Pijp",
        perChi: "Those who want bars, restaurants and local life",
        testo: "A lively district near Albert Cuyp; less touristy, slightly lower prices."
      },
      {
        nome: "Amsterdam Oost and Noord",
        perChi: "Those trying to save",
        testo: "Outside the centre, by tram or the free ferry to Noord."
      }
    ],
    sapori: [
      {
        nome: "Stroopwafel",
        testo: "A wafer with caramel syrup, to eat hot at the markets."
      },
      {
        nome: "Haring",
        testo: "Raw herring with onion and pickles, from the kiosks (haringhandel)."
      },
      {
        nome: "Bitterballen",
        testo: "Fried ragout croquettes, with mustard, typical of pubs."
      },
      {
        nome: "Poffertjes and pannenkoeken",
        testo: "Mini pancakes and Dutch crepes, in pancake restaurants."
      }
    ],
    attenzioni: [
      "Bicycles: they are the biggest danger for pedestrians; do not walk on the red bike lanes.",
      "Pickpockets at Centraal Station, on Dam and on crowded trams.",
      "Fake tickets or unofficial resellers for Anne Frank and museums: buy only from the official site.",
      "In De Wallen it is forbidden to photograph the workers; in some areas smoking cannabis in the street is prohibited.",
      "Taxis are not always cheap: better by tram or on foot."
    ],
    esperienzeSlugs: ['amsterdam-in-bicicletta', 'crociera-sui-canali-amsterdam', 'casa-di-anna-frank'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: "An old brick arched bridge over the Reguliersgracht canal in Amsterdam, with row houses and bare trees along the banks",
    immagine: '/images/paesi-bassi/amsterdam.jpg',
  },
]
