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
      "It's the capital of Latvia and the largest of the three Baltic capitals. The medieval Old Town, a UNESCO site since 1997, looks out over the Daugava River with the spires of its Hanseatic churches and the House of the Blackheads. Just outside the walls, the district built between the nineteenth and twentieth centuries has one of the highest concentrations of Art Nouveau architecture in the world. A bit further on, the Central Market, carved out of five former airship hangars, is still the largest covered bazaar in Europe.",
    percheAndarci:
      "In a small space there's a real medieval center, an entire Art Nouveau district to look at with your nose in the air, and a market that is an industrial monument where people still do their shopping every day. From here starts the classic day trip on the Latvian coast, the beach at Jūrmala.",
    cosaVedere: [
      "Cathedral Square (Doma laukums) with Riga Cathedral (Rīgas Doms), the largest church in the Baltics, and its historic organ",
      "St. Peter's Church, with the viewing platform on the spire at 72 meters: it's the highest view over the Old Town and the Daugava River",
      "The House of the Blackheads (Melngalvju nams), the most photographed Renaissance facade on the town hall square, rebuilt after the destruction of the war",
      "The Three Brothers (Trīs brāļi), three medieval and Baroque houses in a row on Mazā Pils iela, among the oldest stone buildings in the city",
      "The Art Nouveau district, along Alberta iela, Elizabetes iela and Strēlnieku iela: hundreds of facades decorated with masks, sculpted faces and floral motifs, many by the architect Mikhail Eisenstein, father of the film director Sergei Eisenstein",
      "The Central Market (Centrāltirgus): five pavilions carved out of German First World War airship hangars, opened in 1930, when it was the largest and most modern in Europe. It is part of the UNESCO site together with the Old Town",
    ],
    cosaFare: [
      "Climb the tower of St. Peter's Church for the panorama over the Old Town and the Daugava",
      "Walk along Alberta iela with your nose in the air, looking for the most elaborate facades of the Art Nouveau district",
      "Wander among the stalls of the Central Market, in the fish, meat, dairy and vegetable pavilions, stopping to taste the local specialties",
      "Spend an evening among the bars and restaurants of the Old Town, with a stop at the Skyline Bar or another rooftop for the view over the roofs",
    ],
    doveDormire:
      "In the Old Town (Vecrīga) everything is within walking distance, nightlife included. The Art Nouveau district, just outside the walls to the north, is quieter and just as central, and there you can sleep inside an Art Nouveau building.",
    doveMangiare:
      "The most iconic winter dish is pelēkie zirņi ar speķi, gray peas with bacon. Rupjmaize, the black rye bread, is the basis of much Latvian cooking, including rupjmaizes kārtojums, a layered dessert with cream and berries. To taste local products, from smoked cheese to Baltic fish, the stalls of the Central Market are the cheapest and most genuine way.",
    comeArrivare:
      "Riga International Airport (RIX), the main airport in the Baltics, is about 10 km from the center: bus or tram in 20-30 minutes, or taxi or Bolt in a few minutes. From some Italian airports there are direct low-cost flights, seasonal or year-round; otherwise you connect through a European hub. From Vilnius you arrive by bus in about 4 hours, with several companies (including Lux Express) and many runs a day.",
    comeSpostarsi:
      "The historic center is explored entirely on foot. Trams, trolleybuses and buses of the Rīgas satiksme network cover the rest of the city, with cheap time-based tickets. For Jūrmala there's the regional train from the central station, about 30 minutes, with departures at least every half hour.",
    periodoMigliore:
      "May-September, for the mild climate and, in high summer, the chance to combine the city with a swim at Jūrmala. June-August is the busiest season. Winter (November-March) is cold and often windy, but the Old Town holds up well and in December there's the Christmas market in Cathedral Square.",
    costi: "an inexpensive city by Western European standards: entry to the St. Peter's tower €9, an ordinary dinner €10-16 per person, train to Jūrmala about €2 each way.",
    erroriDaEvitare: [
      "Stopping at the Old Town: the Art Nouveau district just outside the walls is as central a part of Riga's architecture as the medieval center",
      "Going to the Central Market on the weekend after lunch: the best stalls empty out early, and the morning, with the local vendors, is the most authentic moment",
      "Planning Jūrmala without checking the weather: it's a seaside trip and makes sense mostly from June to August",
      "Thinking Russian isn't needed: the city's sizable Russian-speaking minority still speaks it, and in certain everyday situations outside the tourist center it's more useful than English",
    ],
    luoghi: [
      {
        nome: "Riga Cathedral and Dome Square",
        testo: "The largest Lutheran cathedral in the Baltic states, founded in 1211, with a historic organ. The square is ringed with cafes.",
        come: "On foot from the Old Town.",
        quando: "Morning; in the evening there are often organ concerts.",
        tempo: "1 hour",
        url: "https://doms.lv",
        consiglio: "Ask for the organ concert times."
      },
      {
        nome: "St Peter's Church",
        testo: "A Gothic church whose spire has a viewing platform at 72 metres, the highest view over the Old Town and the Daugava. You go up by lift.",
        come: "On foot, near Town Hall Square.",
        quando: "Clear day.",
        tempo: "45 minutes",
        costo: "9 euros for the platform (site figure, to be rechecked)",
        consiglio: "Better to go up in the morning, when the light is clear."
      },
      {
        nome: "House of the Blackheads",
        testo: "A Flemish Renaissance facade, destroyed in the Second World War and rebuilt. It belonged to the brotherhood of unmarried merchants.",
        come: "On Town Hall Square.",
        quando: "Morning, for photos.",
        tempo: "30 minutes",
        url: "https://www.melngalvjunams.lv",
        consiglio: "Town Hall Square is the best spot for photos."
      },
      {
        nome: "The Three Brothers",
        testo: "Three houses in a row on Mazā Pils street, among the oldest stone buildings in the city, from different eras, from the fifteenth to the late seventeenth century.",
        come: "On foot from the Old Town.",
        quando: "Daytime.",
        tempo: "15 minutes",
        costo: "free entry",
        consiglio: "Inside is the Museum of Architecture."
      },
      {
        nome: "Art Nouveau district",
        testo: "Alberta iela, Elizabetes iela and Strēlnieku iela, with hundreds of facades decorated with masks, faces and floral motifs, many by the architect Mikhail Eisenstein.",
        come: "On foot or by tram from the centre (15 minutes).",
        quando: "Morning, with full light on the facades.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "Look up: the details are above the first floor."
      },
      {
        nome: "Central Market",
        testo: "Five pavilions made from the German Zeppelin hangars of the First World War, opened in 1930. One of the largest covered markets in Europe.",
        come: "On foot from the railway station.",
        quando: "Morning.",
        tempo: "1-2 hours",
        consiglio: "Taste smoked fish in the fish pavilion."
      },
      {
        nome: "Freedom Monument and Occupation Museum",
        testo: "The 1935 monument is the symbol of Latvian independence, with an honour guard. The Occupation Museum, on Town Hall Square, tells the Soviet and Nazi history.",
        come: "On foot from the Old Town (10 minutes).",
        quando: "Morning.",
        tempo: "1.5 hours",
        url: "https://okupacijasmuzejs.lv",
        consiglio: "Check the opening hours and entry conditions of the Occupation Museum on its website."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Dome and St Peter's",
          "House of the Blackheads",
          "Lunch at the Central Market",
          "Afternoon: Art Nouveau",
          "Evening: Old Town"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Occupation Museum",
          "Freedom Monument",
          "Trip to Jūrmala (see entry)"
        ]
      }
    ],
    zone: [
      {
        nome: "Old Town (Vecrīga)",
        perChi: "Those who want to be a step from the sights",
        testo: "Near everything, but noisy in the evening; many bars."
      },
      {
        nome: "Art Nouveau centre",
        perChi: "Those seeking atmosphere and restaurants",
        testo: "Quiet, with beautiful buildings; 10 minutes from the Old Town."
      },
      {
        nome: "Āgenskalns",
        perChi: "Those who prefer a local district",
        testo: "Across the river, cheaper; linked by tram."
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
      "Night venues in the Old Town: some inflate the bill, check the menu before ordering.",
      "Taxis: use Bolt or Eco Taxi, not those parked near the station.",
      "Pickpockets in the Old Town and at the Central Market.",
      "In winter pavements are icy: suitable shoes."
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
      "Latvia's historic seaside resort: about 32 km of fine white sand on the Gulf of Riga, 20 km and half an hour by train from the capital. From the tsarist years through the Soviet era, when the USSR's elite vacationed there, hundreds of Art Nouveau and Art Deco wooden villas went up in Jūrmala. Many are restored today and serve as private homes, hotels or small museums.",
    percheAndarci:
      "It's the easiest beach to reach from a capital on this itinerary. Behind the sand, the residential streets full of decorated wooden villas are a diffuse museum of seaside architecture with more than a century of Latvian history.",
    cosaVedere: [
      "The white sand beach, continuous for about 32 km, among the widest and cleanest in the Baltics",
      "Jomas iela, the pedestrian street of Majori, the center of the town, with shops, cafés and ice cream parlors",
      "The Art Nouveau and Art Deco wooden villas in the residential streets of Majori and Dzintari, many with hand-carved details and glassed-in verandas",
      "The Dzintari Concert Hall, the open-air concert hall among the pines, historic home of festivals and summer events",
    ],
    cosaFare: [
      "Walk a long way on the beach, from Majori station toward Dzintari or Bulduri",
      "Wander the residential streets behind Jomas iela and look at the decorated wooden villas from outside",
      "Stop at one of the cafés or restaurants on the seafront, open all year and livelier in summer",
    ],
    doveDormire: "On this itinerary Jūrmala is visited in half a day from Riga, without sleeping there. Anyone who wants to stay a few days at the sea can add it as an extension.",
    doveMangiare: "Along Jomas iela restaurants and cafés serve Latvian and international cooking; in summer several beach kiosks serve grilled fish and ice cream.",
    comeArrivare: "From Riga by regional train from the central station (Rīga Centrālā stacija) to Majori: about 30 minutes, with departures at least every half hour.",
    comeSpostarsi: "The center of Majori and the beach are explored on foot. For Dzintari or the farther areas you can take the same regional train again, which stops at several points along the coast.",
    periodoMigliore: "June-August for swimming. In the shoulder seasons the walk on the beach and among the wooden villas is still pleasant, with fewer people.",
    costi: "an inexpensive trip: train about €2 each way, free beach, a meal in a seafront café €8-15.",
    erroriDaEvitare: [
      "Going out of season expecting the summer beach life: from October to May the beach is almost deserted and many places close",
      "Staying only on the beach without wandering the residential streets: it's the decorated wooden villas that make Jūrmala different from \"just another beach\"",
      "Underestimating the shallow, cool water of the Gulf of Riga, very different from a swim in the Mediterranean",
    ],
    luoghi: [
      {
        nome: "Jūrmala beach",
        testo: "A continuous white sand beach about 32 km long, among the widest and cleanest in the Baltic, on the coast of the Gulf of Riga.",
        come: "Train from Riga to Majori (about 30 minutes).",
        quando: "Summer, when it is warm; in winter it is deserted and atmospheric.",
        tempo: "half a day",
        costo: "free entry",
        consiglio: "The train is easier than the car: in summer a toll is charged to enter by vehicle."
      },
      {
        nome: "Jomas iela",
        testo: "The pedestrian street of Majori, the town centre, with shops, cafes and ice cream parlours. In summer it is very lively.",
        come: "On foot from Majori station (5 minutes).",
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
        testo: "The open-air hall among the pines, the historic home of summer festivals and concerts, with classical and pop music.",
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
      "To enter Jūrmala by car in summer a fee is charged: the train trip is simpler.",
      "The beach is windy: bring a sweatshirt even in summer.",
      "On summer weekends the restaurants are full: book."
    ],
    esperienzeSlugs: ['jurmala-spiaggia-ville-liberty'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: "A wooden villa with glassed-in verandas and carved decorations among the trees of Jūrmala",
    immagine: '/images/lettonia/jurmala.jpg',
  },
]
