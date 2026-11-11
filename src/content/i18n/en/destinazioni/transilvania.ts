import type { Destinazione } from '@/lib/types'

export const destinazioniTransilvania: Destinazione[] = [
  {
    slug: 'bucarest',
    paeseSlug: 'transilvania',
    ordine: 1,
    nome: 'Bucharest',
    tipologia: ['città', 'storia'],
    giorniConsigliati: '1 day on arrival, 1-2 on the way back',
    visitataPersonalmente: true,
    introduzione: "The arrival and return point of the trip: the Palace of the Parliament, the historic Lipscani district and, on the last day, the Spa.",
    percheAndarci: "For the Palace of the Parliament, one of the largest administrative buildings in the world, and the atmosphere of the Lipscani old town.",
    cosaVedere: ['The Palace of the Parliament', 'The Romanian Athenaeum', 'The historic Lipscani district'],
    cosaFare: [
      'Guided tour of the Palace of the Parliament (there is a dedicated experience page)',
      'Evening walking tour with a local guide',
      "Traditional dinner at Caru' cu Bere, with folk shows",
      'Bucharest thermal baths on the last day (there is a dedicated experience page)',
    ],
    doveDormire:
      "On arrival we slept at the Hotel Duke Romana (Piața Romană area), a 3-star with mixed but overall positive reviews: good breakfast, comfortable beds and good value for money, with a few complaints about the attic rooms. On the way back, at the Hotel Continental Forum (Palace of the Parliament area), a 4-star, with very positive reviews on breakfast, staff and rooms.\n\nArrival alternatives: budget: Hello Hotels Bucharest, Trianon Hotel · mid-range: Casa Mendeleev · luxury (affordable): Epoque Hotel, Grand Hotel Continental.\n\nReturn alternatives: budget: Hotel Parliament, Volo Hotel Bucharest · mid-range: Filitti Boutique Hotel · luxury (affordable): Radisson Blu Hotel Bucharest, JW Marriott Bucharest Grand Hotel.",
    doveMangiare: "Caru' cu Bere for the welcome dinner; Hanu' lui Manuc or Excalibur for the farewell dinner.",
    usciteSerali: 'The Lipscani district, full of bars and venues with music until late; Freddo, St. Patrick, the Grădina Dorobanți garden.',
    comeArrivare: "You land at Henri Coandă airport in Otopeni, about 17 km north of the centre. The train reaches Gara de Nord in 20-25 minutes (about 6-7 lei); express bus 100, running 24 hours a day, stops at Piața Victoriei, Universitate and Piața Unirii (about 3 lei with a contactless card). Taxis are booked from the touch screens in arrivals and should not cost more than 60 lei to the centre; Bolt and Uber have a signposted pick-up area.",
    comeSpostarsi: 'On foot in the center, Uber, Bolt or taxi for the rest.',
    periodoMigliore: 'Halloween long weekend or early November',
    costi: "Daily budget per person, as a guide: low €40-60 (hostel or simple hotel, taverns, metro), mid €80-120 (central hotel, traditional restaurants, two entry tickets), high from €180. Tickets in 2026: Palace of the Parliament 85 lei (about €17), Village Museum 40 lei (about €8), Therme from 141 lei (about €28). Dinner at Caru' cu Bere costs about €25-30 per person.",
    erroriDaEvitare: ['Running out of cash: it is best to withdraw as soon as you land, because some traditional places prefer cash in lei'],
    miaEsperienza:
      "The Palace of the Parliament, with its out-of-scale size, tells the megalomania of the Ceaușescu regime before you even go in. It was one of the most impressive guided visits of the trip.",
    luoghi: [
      {
        nome: "Palace of the Parliament",
        testo: "A huge building, wanted by Ceaușescu and built between 1984 and 1997 after a large part of the old centre was demolished: 365,000 m², considered the heaviest building in the world. You visit only on a guided tour, among marble halls, chandeliers and giant carpets.",
        come: "Visitor entrance shown on the official website. Bring your passport and book ahead.",
        quando: "Weekday morning; the state rooms may be closed for events.",
        tempo: "1-1.5 hours",
        costo: "standard tour 85 lei adults, about €17 (2026)",
        lat: 44.4275,
        lng: 26.0875,
        url: "https://cic.cdep.ro/en/vizitare",
        consiglio: "The oversized scale tells the regime's megalomania even before you go in."
      },
      {
        nome: "Romanian Athenaeum",
        testo: "The neoclassical concert hall of 1888, with the dome and the circular fresco telling the history of Romania. Home of the George Enescu Philharmonic.",
        come: "On foot, at Piața Revoluției.",
        quando: "Morning or on a concert evening.",
        tempo: "30-45 minutes",
        costo: "building visit about €2; symphony concerts 120-160 lei, about €24-32",
        lat: 44.4413,
        lng: 26.0973,
        url: "https://fge.org.ro",
        consiglio: "If possible, attend a concert: the acoustics are excellent."
      },
      {
        nome: "Old Town (Lipscani)",
        testo: "The historic district of alleys, venues and old inns, today the heart of restaurants and evening life. By day it is quiet, in the evening it explodes with music.",
        come: "On foot, near Piața Unirii.",
        quando: "Evening.",
        tempo: "2 hours",
        costo: "free",
        orari: "Always open.",
        lat: 44.43237,
        lng: 26.09862,
        consiglio: "Check menu prices: some places are designed for tourists."
      },
      {
        nome: "Caru' cu Bere",
        testo: "Founded as a brewery in 1879, since 1899 it has been in a Gothic Revival building with Art Nouveau interiors and painted ceilings; a listed monument serving traditional Romanian cooking.",
        come: "In the centre, Strada Stavropoleos.",
        quando: "Dinner; book.",
        tempo: "1.5-2 hours",
        costo: "about €25-30 per person for a main course, a drink and dessert",
        lat: 44.4321,
        lng: 26.0981,
        url: "https://www.carucubere.ro",
        consiglio: "Try the sarmale and the papanași."
      },
      {
        nome: "Village Museum",
        testo: "An open-air museum opened in 1936, with many peasant buildings from the 17th to the 20th century brought from every region of Romania. You understand rural architecture well.",
        come: "In King Michael I Park (formerly Herăstrău), north of the centre, by metro or bus.",
        quando: "Morning; the park is pleasant.",
        tempo: "1.5-2 hours",
        costo: "40 lei adults, about €8 (2026)",
        orari: "Open every day, with seasonal hours; closed at Easter, on 25-26 December and on 1-2 January.",
        lat: 44.47336,
        lng: 26.07656,
        url: "https://www.muzeul-satului.ro",
        consiglio: "Combine with a walk in Herăstrău park."
      },
      {
        nome: "Bucharest Thermal Baths (Therme)",
        testo: "The large thermal and water park at the edge of the city, with pools, saunas and slides. Handy for resting on the last day.",
        come: "By taxi or shuttle from Bucharest: directions on the official website.",
        quando: "All day, especially the last day.",
        tempo: "full day",
        costo: "Galaxy area 141 lei Monday to Thursday and 151 lei Friday to Sunday (about €28-30); The Palm and Elysium cost more",
        orari: "Monday-Thursday 10:00-23:00, Friday and Saturday 9:00-24:00, Sunday 9:00-23:00; facilities close 30 minutes earlier.",
        lat: 44.60542,
        lng: 26.08536,
        url: "https://therme.ro",
        consiglio: "Book online to skip the queue."
      },
      {
        nome: "Stavropoleos Monastery",
        testo: "A small church from 1724 in Brâncovenesc style, with a porch of carved stone columns and frescoes, now a convent. Gravestones and fragments of demolished churches are gathered in the courtyard.",
        come: "On foot, on Strada Stavropoleos, next to Caru' cu Bere.",
        quando: "Daytime; during services enter quietly.",
        tempo: "20-30 minutes",
        costo: "free",
        lat: 44.43182,
        lng: 26.09879,
        url: "https://www.stavropoleos.ro"
      },
      {
        nome: "Cărturești Carusel",
        testo: "A bookshop on six levels inside a restored early 20th-century bank building, with white balconies and a café on the top floor. Opened in 2015, it is one of the most photographed interiors in the city.",
        come: "On foot, at Strada Lipscani 55.",
        quando: "Morning or late afternoon on weekdays.",
        tempo: "30-45 minutes",
        costo: "free",
        lat: 44.43189,
        lng: 26.10161,
        url: "https://carturesti.ro"
      },
      {
        nome: "Hanu' lui Manuc",
        testo: "Bucharest's oldest caravanserai still in use, built in 1808 by the Armenian merchant Manuc Bei: a courtyard enclosed by two floors of wooden galleries, now a restaurant and hotel.",
        come: "On foot, opposite Curtea Veche, near Piața Unirii.",
        quando: "Lunch or dinner; book at weekends.",
        tempo: "1.5 hours",
        lat: 44.42944,
        lng: 26.10194
      },
      {
        nome: "Curtea Veche (Old Princely Court)",
        testo: "The remains of the princely court where in 1459 Vlad III signed the first document to name Bucharest. Next to it stands the Church of the Annunciation, the oldest in the city still in use. In 2026 the site is undergoing safety works.",
        come: "On foot, on Strada Franceză, in the old town.",
        quando: "Daytime, together with Lipscani.",
        tempo: "30 minutes",
        lat: 44.43009,
        lng: 26.10129
      },
      {
        nome: "Piața Revoluției and Calea Victoriei",
        testo: "The square where in December 1989 Ceaușescu gave his last speech from the balcony of the former Central Committee, with the Memorial of Rebirth in the middle. Around it stand the Athenaeum, the Central University Library and the former Royal Palace.",
        come: "On foot along Calea Victoriei, about 10 minutes from Piața Romană and Universitate.",
        quando: "Daytime, or in the evening when the buildings are lit.",
        tempo: "30-45 minutes",
        costo: "free",
        orari: "Always open.",
        lat: 44.43866,
        lng: 26.0975
      },
      {
        nome: "National Museum of Art (former Royal Palace)",
        testo: "In the former Royal Palace on Piața Revoluției: the gallery of old Romanian art, with icons and liturgical objects, the gallery of modern Romanian art, with Grigorescu and Brâncuși, and a gallery of European art.",
        come: "On foot, Calea Victoriei 49-53.",
        quando: "Morning, on a rainy day.",
        tempo: "2 hours",
        lat: 44.44016,
        lng: 26.09553,
        url: "https://www.mnar.ro"
      },
      {
        nome: "Cișmigiu Gardens",
        testo: "The oldest public garden in the centre, laid out in the mid-19th century by the German landscape gardener Carl Meyer, with a lake, rowing boats in summer and an ice rink in winter.",
        come: "On foot, between Bulevardul Regina Elisabeta and Strada Știrbei Vodă.",
        quando: "Afternoon, for a break between visits.",
        tempo: "1 hour",
        costo: "free",
        lat: 44.43726,
        lng: 26.0906
      },
      {
        nome: "Spring Palace (Ceaușescu House)",
        testo: "The Ceaușescus' private residence until 1989, in the Primăverii district: original furniture, the mosaic swimming pool, the cinema room and Elena Ceaușescu's wardrobe. Visits are guided and must be booked.",
        come: "By taxi or metro (Aviatorilor), then a 10-minute walk.",
        quando: "By booking, at set times.",
        tempo: "1 hour",
        orari: "Tuesday-Sunday 10:00-17:00; closed on Mondays.",
        lat: 44.46888,
        lng: 26.09232,
        url: "https://casaceausescu.ro",
        consiglio: "It pairs well with the Palace of the Parliament: two sides of the same regime."
      },
      {
        nome: "Arch of Triumph",
        testo: "The 27-metre arch at the start of Șoseaua Kiseleff, in its current granite form from 1936, dedicated to independence and the 1918 union. You see it in passing on the way to the Village Museum.",
        come: "Metro Aviatorilor or bus along Șoseaua Kiseleff.",
        quando: "Daytime.",
        tempo: "15 minutes",
        costo: "free from outside",
        lat: 44.46719,
        lng: 26.07813
      }
    ],
    sapori: [
      {
        nome: "Sarmale",
        testo: "Cabbage rolls stuffed with meat and rice, served with sour cream."
      },
      {
        nome: "Mici",
        testo: "Grilled spiced sausages, eaten with mustard."
      },
      {
        nome: "Papanași",
        testo: "Fried doughnuts with sour cream and berry jam."
      },
      {
        nome: "Ciorbă",
        testo: "Traditional sour soup, in tripe or vegetable versions."
      }
    ],
    attenzioni: [
      "Taxis: use Bolt, Uber or official taxis with posted rates.",
      "To drive in Romania you need the road vignette (rovinieta), to have before you set off.",
      "Pickpockets at Gara de Nord and on the metro.",
      "The Palace of the Parliament requires a passport: bring it."
    ],
    faq: [
      {
        domanda: "How many days do you need in Bucharest?",
        risposta: "One full day is enough for the Palace of the Parliament, Lipscani and Calea Victoriei. Two days add the Village Museum and the Spring Palace; three, the Therme spa or a trip to Mogoșoaia or Snagov."
      },
      {
        domanda: "How do you get from the airport to the centre?",
        risposta: "By train to Gara de Nord in 20-25 minutes, by express bus 100 to Piața Unirii, or by taxi booked from the touch screens in arrivals, for no more than about 60 lei."
      },
      {
        domanda: "Do you need to book the Palace of the Parliament?",
        risposta: "Yes: entry is by guided tour only, and small groups usually book by phone the day before. You need an ID document and there is no left-luggage."
      },
      {
        domanda: "Do you need cash in lei?",
        risposta: "Cards are accepted almost everywhere in the centre, but some traditional places, guides and car parks prefer cash. It is best to withdraw as soon as you land."
      },
      {
        domanda: "Do Uber and Bolt work?",
        risposta: "Yes, they are the easiest way to get around outside the centre. For traditional taxis, choose ones with displayed fares, such as Cobălcescu or Cris Taxi."
      },
      {
        domanda: "Can you go to the Therme spa before your flight?",
        risposta: "Yes: Therme is in Balotești, 10-15 minutes from Otopeni airport. Just leave at least 2 hours before your flight."
      }
    ],
    gite: [
      {
        nome: "Sinaia and Peleș Castle",
        distanza: "about 2 hours by car",
        come: "By car along the DN1 or by train from Gara de Nord.",
        testo: "Carol I's summer residence in the Prahova valley, with Pelișor Castle next door. Peleș is closed on Mondays and Tuesdays and, in 2026, from 2 November to 1 December."
      },
      {
        nome: "Mogoșoaia Palace",
        distanza: "about 15 km north-west",
        come: "By car or taxi, half an hour depending on traffic.",
        testo: "The Brâncovenesc-style palace of 1702, on a lake, with a large park. A half day out of the city."
      },
      {
        nome: "Snagov Monastery",
        distanza: "about 40 km north",
        come: "By car; the monastery stands on an island in the lake, reached by a footbridge.",
        testo: "A small 16th-century monastery where, according to tradition, Vlad the Impaler is buried."
      },
      {
        nome: "Brașov",
        distanza: "about 3 hours by car without stops",
        come: "By car along the Prahova valley or by direct train from Gara de Nord.",
        testo: "The Saxon town with Piața Sfatului and the Black Church, a handy base for Bran and Râșnov."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Palace of the Parliament in the morning, with a guided tour",
          "Stavropoleos Monastery and Curtea Veche",
          "Lunch in Lipscani",
          "Cărturești Carusel",
          "Calea Victoriei to Piața Revoluției and the Athenaeum",
          "Dinner at Caru' cu Bere or Hanu' lui Manuc"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: centre as in the one-day plan",
          "Day 2: Village Museum and King Michael I Park, Arch of Triumph, Spring Palace in the afternoon, evening in Dorobanți"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Palace of the Parliament and old town",
          "Day 2: National Museum of Art, Cișmigiu Gardens, Village Museum and Spring Palace",
          "Day 3: Mogoșoaia Palace in the morning or half a day at the Therme spa before the flight"
        ]
      }
    ],
    zone: [
      {
        nome: "Old Town (Lipscani)",
        perChi: "those who want to go out in the evening on foot",
        testo: "Hotels and apartments among the bars of the historic centre, a few steps from everything. Noisy on Friday and Saturday nights.",
        fascia: "€70-150"
      },
      {
        nome: "Piața Romană and Calea Victoriei",
        perChi: "those who want a central, well-connected base",
        testo: "An area served by the metro, 15-20 minutes' walk from Lipscani, with hotels of every category along the main boulevards."
      },
      {
        nome: "Unirii and the Palace of the Parliament",
        perChi: "those arriving or leaving by car",
        testo: "Large hotels along the boulevards around Piața Unirii, within walking distance of both the Parliament and the old town."
      },
      {
        nome: "Dorobanți and Primăverii",
        perChi: "those looking for boutique hotels in a quiet district",
        testo: "An elegant residential district to the north, with cafés and restaurants; the metro or a taxi is needed for the centre.",
        fascia: "€110-280"
      }
    ],
    esperienzeSlugs: ['palazzo-parlamento', 'terme-bucarest'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'The Palace of the Parliament in Bucharest, Romania',
    immagine: '/images/transilvania/bucarest-stock.jpg',
  },
  {
    slug: 'peles-bran',
    paeseSlug: 'transilvania',
    ordine: 2,
    nome: 'Peleș Castle and Bran Castle',
    tipologia: ['storia', 'castelli'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: "Peleș Castle, perhaps the most beautiful of the trip for its architecture, and Bran Castle, the famous \"Dracula's Castle\".",
    percheAndarci: "To see in the same day two of the most famous castles in Romania: the Neo-Renaissance splendor of Peleș and the Gothic air of Bran.",
    cosaVedere: [
      "Peleș Castle, the summer residence of Carol I",
      'The Sinaia Monastery',
      'Bran Castle, the medieval fortress on the rock',
      'Cantacuzino Castle (optional photo stop)',
    ],
    cosaFare: [
      'Visit Peleș Castle, first and second floor (there is a dedicated experience page)',
      'Visit Bran Castle (there is a dedicated experience page)',
    ],
    doveDormire: "We didn't sleep here: it was a transit stop between Bucharest and Brașov.",
    doveMangiare: 'Restaurant Bucegi (with terrace) in Sinaia, or a packed lunch or street food to save time.',
    comeArrivare: "From Bucharest to Sinaia it is about 2 hours by car along the DN1 and the Prahova valley; from Sinaia to Bran takes about an hour, and from Bran to Brașov half an hour. Sinaia has a railway station on the Bucharest-Brașov line, from which you walk up to Peleș. Bran can also be reached by bus from Brașov, but to see both castles in one day a car is the most practical option.",
    comeSpostarsi: 'Rental car.',
    periodoMigliore: 'morning, to avoid the crowds at the castles',
    costi: "Daily budget per person, as a guide: low €40-60, mid €70-110, high from €150, plus fuel and parking. Tickets in 2026: Peleș 100 lei (about €20), Pelișor 30 lei (about €6), Bran 100 lei for the standard visit (about €20).",
    erroriDaEvitare: ["Trusting the prices of the stalls and restaurants around Bran Castle: they are tourist traps"],
    miaEsperienza:
      "In terms of architecture Peleș is perhaps the most beautiful castle of the trip, with interiors cared for down to the details in a way Bran, as fascinating as it is, is not. Bran's link with Dracula is more a tourist invention than a historical fact, but the castle is worth the visit on its own.",
    luoghi: [
      {
        nome: "Peleș Castle",
        testo: "The summer residence of Carol I, king of Romania, built between 1873 and 1914 in German neo-Renaissance style. For architecture it is perhaps the most beautiful castle of the trip, with interiors cared for in the smallest details.",
        come: "From Bucharest to Sinaia; from the centre of Sinaia walk up.",
        quando: "Early morning, to avoid the crowds.",
        tempo: "1.5 hours",
        costo: "100 lei adults, about €20, ground and first floor (2026)",
        orari: "Closed Monday and Tuesday; Wednesday 10:00-17:00, Thursday-Sunday 9:15-17:00, last entry at 16:00. Closed from 2 November to 1 December 2026.",
        lat: 45.35984,
        lng: 25.54265,
        url: "https://peles.ro",
        consiglio: "Tickets, on bilete.peles.ro, have a time slot and cannot be rescheduled."
      },
      {
        nome: "Sinaia Monastery",
        testo: "The monastery founded in 1695 that gives the town its name, with the old and new churches. A short stop before Peleș.",
        come: "On foot from the centre of Sinaia.",
        quando: "Morning.",
        tempo: "45 minutes",
        costo: "free entry",
        lat: 45.35533,
        lng: 25.54962,
        consiglio: "Silence inside."
      },
      {
        nome: "Bran Castle",
        testo: "The fortress on the rock, documented since 1377, famous for its link with Dracula. In fact the link is more a tourist invention than a historical fact, but the castle is worth the visit on its own.",
        come: "South-west of Brașov, by car. Tickets on the official website.",
        quando: "Early morning.",
        tempo: "1-1.5 hours",
        costo: "100 lei adults, about €20, standard visit (November-December 2026); often sold out: better online",
        orari: "Monday from 12:00, other days from 9:00; closes at 19:00 from April to October, at 18:00 from November to March.",
        lat: 45.51508,
        lng: 25.36724,
        url: "https://www.bran-castle.com",
        consiglio: "Vlad the Impaler never lived here: the Dracula link was born for tourism."
      },
      {
        nome: "Cantacuzino Castle at Bușteni",
        testo: "A neo-Brâncovenesc castle of 1911 at the foot of the Bucegi. An optional photo stop on the road.",
        come: "By car or train, in Bușteni, just past Sinaia.",
        quando: "Daytime.",
        tempo: "30 minutes",
        lat: 45.41411,
        lng: 25.54258,
        consiglio: "Only for those with time."
      },
      {
        nome: "Pelișor Castle",
        testo: "The smaller castle, built next to Peleș between 1899 and 1902 for the future King Ferdinand and Queen Marie, with Art Nouveau interiors. The visit takes under an hour and it is usually far less crowded.",
        come: "On foot from Peleș, a few minutes through the park.",
        quando: "Right after Peleș.",
        tempo: "45 minutes",
        costo: "30 lei adults, about €6, full tour (2026)",
        orari: "Closed Monday and Tuesday; Wednesday 10:00-17:00, Thursday-Sunday 9:15-17:00, last entry at 16:15.",
        lat: 45.3606,
        lng: 25.53914,
        url: "https://peles.ro"
      },
      {
        nome: "Sinaia Casino",
        testo: "The Belle Époque building of 1912-1913 in Dimitrie Ghica park, commissioned by Carol I on the model of Monte Carlo. Today it is a conference centre with some rooms open to visitors.",
        come: "On foot, in the park in the centre of Sinaia.",
        quando: "Daytime, on the way down from Peleș.",
        tempo: "30-45 minutes",
        lat: 45.35518,
        lng: 25.55338
      },
      {
        nome: "Sinaia cable cars (Cota 1400 and Cota 2000)",
        testo: "From the upper part of Sinaia the cable car climbs to Cota 1400 and the Carp gondola continues to Cota 2000, in the Bucegi mountains, with trails and views over the Prahova valley. In autumn 2026 the Cota 1000-1400 section is closed; the other lifts run when the weather allows.",
        come: "From the cable car station at the end of Sinaia's centre.",
        quando: "A clear day; in winter for skiing.",
        tempo: "half a day",
        lat: 45.34949,
        lng: 25.54595
      },
      {
        nome: "Urlătoarea Waterfall",
        testo: "A waterfall in the woods above Bușteni, at the foot of the Bucegi, reached by an easy marked trail. An outdoor stop between Sinaia and Bran.",
        come: "On foot from the upper part of Bușteni, along the marked trail.",
        quando: "May to October; in winter the trail can be icy.",
        tempo: "1.5 hours there and back",
        lat: 45.3962,
        lng: 25.51574
      },
      {
        nome: "Bran Village Museum",
        testo: "A small open-air museum at the foot of the castle, with farmhouses, granaries and workshops from the Bran area. A quick visit before or after the castle.",
        come: "On foot, next to the castle entrance.",
        quando: "Before or after the castle visit.",
        tempo: "30 minutes",
        lat: 45.51495,
        lng: 25.37004
      }
    ],
    sapori: [
      {
        nome: "Lunch in Sinaia",
        testo: "Restaurant Bucegi with a terrace, or a packed lunch to save time."
      }
    ],
    attenzioni: [
      "Early morning: the castles fill with groups by late morning.",
      "Peleș is closed on Mondays and Tuesdays; Bran opens only at 12 on Mondays. Tickets on the official websites."
    ],
    faq: [
      {
        domanda: "Can you see Peleș and Bran on the same day?",
        risposta: "Yes, leaving Bucharest early: Peleș in the morning, lunch in Sinaia and Bran in the afternoon, with an hour's drive between them. In the evening Brașov is half an hour away."
      },
      {
        domanda: "When is Peleș closed?",
        risposta: "On Mondays and Tuesdays, plus a few weeks a year for cleaning and conservation: in 2026 from 2 November to 1 December. It is worth checking peles.ro before setting off."
      },
      {
        domanda: "Do you need to book tickets?",
        risposta: "For Peleș, online tickets on bilete.peles.ro have a time slot and cannot be changed. At Bran the standard visit often sells out at weekends: better to buy online."
      },
      {
        domanda: "Is Bran really Dracula's castle?",
        risposta: "No: Vlad the Impaler never lived there, and the link with Bram Stoker's novel was created for tourism. The castle is still worth the visit."
      },
      {
        domanda: "Can you take photos inside Peleș?",
        risposta: "Amateur photos without flash are allowed under the castle rules, but professional shoots are charged separately."
      },
      {
        domanda: "Can you get there without a car?",
        risposta: "Yes, but it takes longer: train from Bucharest to Sinaia for Peleș, then train to Brașov and bus to Bran. Seeing everything in one day is hard."
      }
    ],
    gite: [
      {
        nome: "Râșnov Fortress",
        distanza: "about 15 km from Bran",
        come: "By car, on the road between Bran and Brașov.",
        testo: "The peasant fortress on a crag, with the Hollywood-style sign. In 2026 the citadel is under restoration and you visit the garden."
      },
      {
        nome: "Brașov",
        distanza: "about half an hour from Bran",
        come: "By car or bus.",
        testo: "The Saxon centre with Piața Sfatului, the Black Church and the Tâmpa cable car: the handiest base for the night."
      },
      {
        nome: "LiBEARty Bear Sanctuary in Zărnești",
        distanza: "about 30 minutes from Bran",
        come: "By car; visits only with online booking.",
        testo: "A refuge for bears rescued from captivity, with guided visits in the morning. Book well ahead."
      }
    ],
    programmi: [
      {
        titolo: "1 day (from Bucharest to Brașov)",
        tappe: [
          "Early start from Bucharest towards Sinaia",
          "Peleș Castle and Pelișor Castle",
          "Sinaia Monastery and lunch in the centre",
          "Photo stop at Cantacuzino Castle in Bușteni",
          "Bran Castle in the afternoon",
          "Arrival in Brașov in the evening"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Peleș, Pelișor, the Casino and the Sinaia cable car, night in Sinaia or Bușteni",
          "Day 2: Urlătoarea Waterfall in the morning, then Bran and the Village Museum, Râșnov and arrival in Brașov"
        ]
      }
    ],
    zone: [
      {
        nome: "Sinaia",
        perChi: "those who want to visit Peleș at opening time",
        testo: "Hotels and guesthouses in the mountain resort, within walking distance of the castle and the cable car. Easy even without a car, thanks to the train."
      },
      {
        nome: "Bușteni",
        perChi: "those looking for mountains and trails",
        testo: "Guesthouses at the foot of the Bucegi, ten minutes north of Sinaia, with views of the Caraiman cliffs."
      },
      {
        nome: "Bran and Râșnov",
        perChi: "those who want to sleep near the castles",
        testo: "Village guesthouses around the castle and towards Râșnov. Lower prices, a car is needed.",
        fascia: "€40-80"
      },
      {
        nome: "Brașov",
        perChi: "those who want an evening in town",
        testo: "The old town or the Șchei district, half an hour from Bran: a wider choice of restaurants and bars.",
        fascia: "€45-140"
      }
    ],
    esperienzeSlugs: ['castello-peles', 'castello-bran'],
    tripSlugs: ['transilvania-express'],
    imageAlt: "Bran Castle, \"Dracula's Castle\", in Transylvania, Romania",
    immagine: '/images/copertine/transilvania-express.jpg',
  },
  {
    slug: 'brasov',
    paeseSlug: 'transilvania',
    ordine: 3,
    nome: 'Brașov',
    tipologia: ['storia', 'natura'],
    giorniConsigliati: '1 day and one night',
    visitataPersonalmente: true,
    introduzione: "The Râșnov Fortress on top of a rock, the city sign in Hollywood style and the old town with Piața Sfatului and the Black Church.",
    percheAndarci: "For the Râșnov Fortress, much less crowded than Bran Castle and as beautiful as it, with a more epic than vampiric atmosphere.",
    cosaVedere: [
      'The Râșnov Fortress',
      'The "RASNOV" sign in Hollywood style',
      'Piața Sfatului and the Clock Tower',
      'The Black Church (Biserica Neagră), the great Gothic church of the city',
    ],
    cosaFare: ['Râșnov Fortress (there is a dedicated experience page)', 'A walk in the old town'],
    doveDormire:
      "Curtea Brașoveana, within walking distance of the old town, with excellent reviews: very helpful staff, clean rooms, nice garden.\n\nAlternatives: budget: Drachenhaus, Pensiunea Casa Cranta · mid-range: Vila Katharina · luxury (affordable): Casa Wagner, Radisson Blu Aurum Hotel Brașov.",
    doveMangiare: "Sergiana (steaming soups in hollowed-out bread bowls, paprika stews) or Casa Românească; after dinner at Deane's Irish Pub & Grill or Musik Cafe.",
    comeArrivare: "A short drive from Bran. From Bucharest you drive up the Prahova valley: about 2 hours to Sinaia, then an hour to Bran and half an hour on to Brașov, or around 3 hours without stops. There are also direct trains from Bucharest's Gara de Nord, and Bucharest Otopeni airport is linked to Gara de Nord by train in 20-25 minutes. The centre is walkable; a car is needed for Râșnov, Bran and Prejmer.",
    comeSpostarsi: 'On foot in the centre; by car to Râșnov.',
    periodoMigliore: 'late afternoon, for the light on the rock',
    costi: "I didn't note down Sergiana's prices; wine and palinka, though, cost more than average. Indicative daily budget per person: low €40-60 (guesthouse and simple taverns), mid €70-110 (central hotel, traditional restaurants, a couple of sights), high from €150. Prices checked for 2026: Black Church 30 lei (about €6), Tâmpa cable car 45 lei return (about €9).",
    erroriDaEvitare: ["Not booking the smaller traditional restaurants in time"],
    miaEsperienza:
      "The Râșnov Fortress, with the \"RASNOV\" Hollywood-style sign visible from the rock, has more of a Lord of the Rings atmosphere than a Dracula one. It was one of the least touristy gems of the whole trip.",
    luoghi: [
      {
        nome: "Piața Sfatului",
        testo: "The central square, with the Council House and the Clock Tower, ringed by colourful baroque houses and cafes. Here in the Middle Ages the fate of the city was decided.",
        come: "On foot, from the centre.",
        quando: "Morning and evening, when it lights up.",
        tempo: "1 hour",
        costo: "free entry",
        orari: "Always open.",
        lat: 45.6422,
        lng: 25.58922,
        consiglio: "Lunch with soup in a bread bowl at Sergiana."
      },
      {
        nome: "Black Church (Biserica Neagră)",
        testo: "The main Gothic church in Romania, begun in 1383 and completed in the 15th century. It has an 1839 Buchholz organ with about 4,000 pipes and the largest collection of ‘Transylvanian rugs’, Anatolian carpets donated by Saxon merchants between the 15th and 17th centuries.",
        come: "On foot from Piața Sfatului.",
        quando: "Morning.",
        tempo: "45 minutes",
        costo: "30 lei, about €6 (2026)",
        orari: "16 October to April: Tuesday-Saturday 10am-6pm, Sunday and Monday 12-6pm. From 1 April to 15 October it closes at 7pm.",
        lat: 45.641,
        lng: 25.58807,
        url: "https://bisericaneagra.ro/program/",
        consiglio: "The summer organ concerts are a great chance to see it."
      },
      {
        nome: "Mount Tâmpa and the BRAȘOV sign",
        testo: "The hill above the centre with the Hollywood-style sign and a cable car. From the top you see the whole city.",
        come: "Cable car or footpath.",
        quando: "Late afternoon.",
        tempo: "1.5-2 hours",
        costo: "Cable car return 45 lei, about €9 (2026); free on foot",
        lat: 45.63463,
        lng: 25.59346,
        url: "https://www.telecabina-tampa.ro/ro/bilete",
        consiglio: "The walk up is easy but steep in places."
      },
      {
        nome: "Casa Sfatului and the History Museum",
        testo: "The old town hall in the middle of Piața Sfatului, with the Trumpeters' Tower once used to spot fires and enemies. Inside is the county History Museum, with rooms on medieval Brașov and the Saxon guilds.",
        come: "On foot, in the middle of the square.",
        quando: "Morning, together with the square.",
        tempo: "45 minutes-1 hour",
        lat: 45.64234,
        lng: 25.58896
      },
      {
        nome: "Strada Republicii",
        testo: "The pedestrian street running north from Piața Sfatului, lined with 19th-century facades, cafés and shops. It is the town's evening stroll and the easiest way to get your bearings in the centre.",
        come: "On foot from Piața Sfatului.",
        quando: "Evening, when it fills up.",
        tempo: "30 minutes",
        costo: "free",
        orari: "Always open.",
        lat: 45.64249,
        lng: 25.59077
      },
      {
        nome: "Catherine's Gate and Șchei Gate",
        testo: "Catherine's Gate, from 1559, with its four corner turrets, is the only medieval town gate still intact; a few metres away stands the neoclassical Șchei Gate of 1828. They separated the Saxon citadel from the Romanian quarter of Șchei.",
        come: "On foot, at the south-west edge of the centre, near Strada Sforii.",
        quando: "Daytime.",
        tempo: "20 minutes",
        costo: "free (outside)",
        orari: "Always visible from outside.",
        lat: 45.63952,
        lng: 25.5861
      },
      {
        nome: "Rope Street (Strada Sforii)",
        testo: "An alley just over a metre wide, considered among the narrowest in Europe, connecting two streets. A quick curiosity in the centre.",
        come: "On foot, near the Șchei Gate.",
        quando: "Daytime.",
        tempo: "10 minutes",
        costo: "free entry",
        orari: "Always open.",
        lat: 45.63954,
        lng: 25.58859,
        consiglio: "To combine with a walk around the centre."
      },
      {
        nome: "Black Tower and White Tower",
        testo: "Two watchtowers on the western walls, on the hillside. Short paths and stairs lead up, and the view over the rooftops and the Black Church is one of the best in town without taking the cable car.",
        come: "On foot from the west side of the walls, along the walk below the hill (Aleea după Ziduri).",
        quando: "Late afternoon, with the light on the rooftops.",
        tempo: "1 hour for both",
        costo: "Viewpoint free",
        lat: 45.64128,
        lng: 25.58564
      },
      {
        nome: "Weavers' Bastion",
        testo: "The best-preserved bastion of the walls, built by the weavers' guild, with three levels of wooden galleries. Inside is a section of the History Museum with a scale model of 17th-century Brașov.",
        come: "On foot, along the south-eastern walls at the foot of Tâmpa, near the cable car station.",
        quando: "Before or after going up Tâmpa.",
        tempo: "45 minutes",
        lat: 45.63693,
        lng: 25.58899
      },
      {
        nome: "Șchei: St Nicholas Church and the First Romanian School",
        testo: "In the quarter where Romanians lived, outside the Saxon walls, stands the Orthodox church of St Nicholas with its slender bell tower. Next door, the First Romanian School is a museum recalling the first Romanian-language school, with old books and an early printing press.",
        come: "On foot from Șchei Gate, about 10 minutes uphill via Strada Prundului and Piața Unirii.",
        quando: "Morning.",
        tempo: "1 hour",
        lat: 45.63587,
        lng: 25.58121
      },
      {
        nome: "Râșnov Fortress",
        testo: "A fortified peasant citadel, with the 'RASNOV' Hollywood-style sign visible from the fortress. The atmosphere is more Lord of the Rings than Dracula, and it is among the least touristy gems of the trip.",
        come: "Just outside Brașov, in the town of Râșnov; go up on foot or with whatever transport runs on site.",
        quando: "Late afternoon, for the light on the fortress.",
        tempo: "1.5-2 hours",
        orari: "Fortress under restoration (2026): the citadel garden is open, ticket at the entrance. Summer 9am-7pm, winter 9am-5pm.",
        lat: 45.59059,
        lng: 25.46938,
        url: "https://www.cetatea-rasnov.ro",
        consiglio: "A peasant citadel: it sheltered the townspeople in wartime."
      },
      {
        nome: "Prejmer fortified church",
        testo: "The largest fortified church in Transylvania and a UNESCO site: a Gothic church ringed by walls about 12 metres high, lined inside with more than 270 small rooms on several levels where families took shelter during sieges. It is the clearest example of how Saxon villages defended themselves.",
        come: "By car, about 20 km north-east of Brașov.",
        quando: "Morning or early afternoon.",
        tempo: "1 hour",
        lat: 45.722,
        lng: 25.77374
      },
      {
        nome: "LiBEARty bear sanctuary, Zărnești",
        testo: "A forest reserve for brown bears rescued from cages, circuses and restaurants. Visits are by guided tour only, along walkways beside very large enclosures; it is a way to see bears without disturbing wild ones.",
        come: "By car, about 30 km south-west of Brașov, near Zărnești. Tickets online only, up to 14 days ahead.",
        quando: "In the morning, when the bears are active: make it the first thing of the day.",
        tempo: "2 hours including the walk from the car park",
        lat: 45.5951,
        lng: 25.37777,
        consiglio: "If the Transfăgărășan is open you can skip it: bears are often seen along the road."
      },
      {
        nome: "Poiana Brașov",
        testo: "Brașov's mountain resort, at about 1,000 metres, with ski slopes in winter and forest trails in summer. It is also a quiet base for those travelling by car.",
        come: "By car or city bus from Brașov, about 12 km of mountain road.",
        quando: "Winter for skiing, summer for walking.",
        tempo: "half a day",
        costo: "Free access; lifts are paid",
        lat: 45.59671,
        lng: 25.55619
      }
    ],
    sapori: [
      {
        nome: "Soup in a bread bowl",
        testo: "Ciorbă served inside a hollowed bread, a speciality of Brașov's traditional restaurants."
      },
      {
        nome: "Paprika stews",
        testo: "Traditional meat dishes of the local inns."
      },
      {
        nome: "Wine and palinka",
        testo: "They cost more than the local average."
      }
    ],
    attenzioni: [
      "Prices: wine and palinka in the centre's venues are above average.",
      "Râșnov Fortress and Brașov are close: organise them in one day.",
      "In winter there is ice on the Tâmpa path."
    ],
    faq: [
      {
        domanda: "How many days do you need in Brașov?",
        risposta: "One full day covers the old town and Tâmpa. Two days add Râșnov; three add Bran, the bear sanctuary and Prejmer."
      },
      {
        domanda: "Can you see Bran and Râșnov as a day trip from Brașov?",
        risposta: "Yes: Râșnov is about 20 minutes by car and Bran half an hour. By car they fit easily into the same half day."
      },
      {
        domanda: "How do you get up Tâmpa and the BRAȘOV sign?",
        risposta: "By cable car near the Weavers' Bastion (45 lei return in 2026) or on foot along the zigzag trail, about an hour up."
      },
      {
        domanda: "Brașov or Sibiu as a base?",
        risposta: "Brașov is better for the castles (Bran, Peleș, Râșnov); Sibiu for the Transfăgărășan. On a road trip it is worth sleeping in both."
      },
      {
        domanda: "Do you need a car in Brașov?",
        risposta: "Not for the centre, which is walkable. For Râșnov, Prejmer, Bran and the bear sanctuary a car is the most practical option."
      },
      {
        domanda: "Can you visit Râșnov Fortress?",
        risposta: "In 2026 the citadel is under restoration and only the fortress garden is open, with a ticket at the entrance. Check the official site before going."
      }
    ],
    gite: [
      {
        nome: "Bran Castle",
        distanza: "about 30 km, half an hour by car",
        come: "By car via Râșnov; tickets online, guide extra.",
        testo: "The castle linked to Dracula, on a rocky spur above the village. Easy to pair with Râșnov in the same half day."
      },
      {
        nome: "Sinaia and Peleș Castle",
        distanza: "about 1 hour by car",
        come: "By car along the Prahova valley; timed entry.",
        testo: "Carol I's summer residence, one of the richest castles in Europe. Check the calendar: it closes periodically for maintenance, for example in November."
      },
      {
        nome: "Viscri",
        distanza: "about 1 hour 20 by car",
        come: "By car, the last stretch on a minor road.",
        testo: "A Saxon village with a 12th-century fortified church, a UNESCO site. Entry 12 lei."
      },
      {
        nome: "Sighișoara",
        distanza: "about 2 hours by car",
        come: "By car or train.",
        testo: "The UNESCO medieval town with the Clock Tower and the covered stairway. It works as a stop on the way to Sibiu."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Piața Sfatului and Casa Sfatului in the morning",
          "Black Church",
          "Catherine's Gate, Șchei Gate and Strada Sforii",
          "Lunch with soup in a bread bowl",
          "Weavers' Bastion and the Tâmpa cable car in the afternoon",
          "Evening on Strada Republicii"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: old town as in the one-day plan",
          "Day 2: Râșnov Fortress in the morning, then Black and White Towers at sunset and the Șchei quarter"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: old town and Tâmpa",
          "Day 2: LiBEARty sanctuary early in the morning, then Râșnov and Bran Castle",
          "Day 3: Prejmer fortified church, back to town and an afternoon in Șchei or Poiana Brașov"
        ]
      }
    ],
    zone: [
      {
        nome: "Old town (Cetate)",
        testo: "Guesthouses and hotels inside or just outside the walls, a few minutes from Piața Sfatului. Pricier and noisier at weekends.",
        perChi: "those without a car who want to walk out in the evening",
        fascia: "€70-140"
      },
      {
        nome: "Șchei",
        testo: "The old Romanian quarter just outside the walls: sloping streets, low houses and quiet, 10-15 minutes' walk from the square.",
        perChi: "those looking for family-run guesthouses at lower prices",
        fascia: "€45-90"
      },
      {
        nome: "Poiana Brașov",
        testo: "Mountain hotels in the woods, 20 minutes' drive from the centre. Good for nature, less handy for evenings in town.",
        perChi: "those with a car or coming to ski",
        fascia: "€70-150"
      },
      {
        nome: "Râșnov and Bran",
        testo: "Village guesthouses below the fortress and towards Bran, 20-30 minutes' drive from Brașov. Lower prices, a car is needed.",
        perChi: "those who want to sleep near the castles",
        fascia: "€40-80"
      }
    ],
    esperienzeSlugs: ['fortezza-rasnov'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'The Râșnov Fortress on a rock near Brașov, Romania',
    immagine: '/images/transilvania/brasov-stock.jpg',
  },
  {
    slug: 'sighisoara-salina-turda',
    paeseSlug: 'transilvania',
    ordine: 4,
    nome: 'Sighișoara and Salina Turda',
    tipologia: ['storia', 'unesco'],
    giorniConsigliati: '1 day, the longest behind the wheel',
    visitataPersonalmente: true,
    introduzione: "The UNESCO medieval town of Sighișoara, birthplace of Count Dracula, and the underground salt mine of Salina Turda.",
    percheAndarci: "For Salina Turda, one of the most surprising things of the whole trip, and for the cobbled streets of Sighișoara.",
    cosaVedere: [
      'The Clock Tower of Sighișoara',
      "The birthplace of Count Dracula",
      'The Covered Stairway, the covered wooden staircase',
      'The underground lake of Salina Turda',
      'The Saxon village of Viscri, with its UNESCO Fortified Church (optional stop)',
    ],
    cosaFare: [
      "Climb the Clock Tower and visit Dracula's birthplace",
      'Climb to the upper part of the town along The Covered Stairway',
      'Visit Salina Turda, with table football, ping pong and little boats on the lake (there is a dedicated experience page)',
      'Optional stop at Viscri and its Fortified Church',
    ],
    doveDormire: "We didn't sleep here: it was a transit day on the way to Sibiu.",
    doveMangiare: 'Gasthaus Altepost or Vlad Dracul Restaurant in Sighișoara.',
    comeArrivare: "By car from Brașov to Viscri takes about an hour and twenty minutes, then about an hour from Viscri to Sighișoara, and about 2 hours from Sighișoara to Salina Turda. Sighișoara is also on the Brașov-Cluj railway line, with the station ten minutes' walk from the citadel. From Turda to Sibiu is about an hour and a half by road; the nearest airport to Turda is Cluj-Napoca.",
    comeSpostarsi: 'Rental car; on foot in the old towns.',
    periodoMigliore: 'leave early: it is the longest day behind the wheel of the trip',
    costi: "Daily budget per person, as a guide: low €35-55, mid €60-100, high from €140, plus fuel and parking. Tickets in 2026: Salina Turda 75 lei Monday to Friday and 90 lei at weekends (about €15-18), guide extra; Viscri 12 lei (about €2.50); Dracula's birthplace 5 lei for the upper floor (about €1).",
    erroriDaEvitare: ['Going over on time: it is the longest day behind the wheel of the whole trip'],
    miaEsperienza:
      "Salina Turda was one of the nicest surprises of the trip. From a salt mine I didn't expect to go down and find a navigable lake, and even a table football.",
    luoghi: [
      {
        nome: "Sighișoara Citadel and Clock Tower",
        testo: "One of the last inhabited medieval citadels in Europe, a UNESCO site since 1999. The Clock Tower, 64 metres tall, has housed the History Museum since 1898, with a view of the town.",
        come: "On foot from the car park below; steep lanes.",
        quando: "Early morning, when it is quiet.",
        tempo: "2 hours",
        lat: 46.2193,
        lng: 24.7933,
        consiglio: "Climb the tower for the view: the coloured houses from above."
      },
      {
        nome: "Dracula's birthplace and Covered Stairway",
        testo: "The house where Vlad Țepeș is said to have been born and the long covered wooden staircase that climbs to the church on the hill. A short stop among the coloured houses.",
        come: "On foot in the citadel.",
        quando: "Morning.",
        tempo: "1 hour",
        costo: "5 lei to go up to the upper floor, about €1",
        lat: 46.21947,
        lng: 24.79277,
        consiglio: "Combine it with the climb up the Covered Stairway."
      },
      {
        nome: "Viscri and the Fortified Church",
        testo: "A Saxon village with a fortified church, a UNESCO site, well preserved. An optional visit along the route.",
        come: "By car from Brașov, towards Sighișoara.",
        quando: "Morning.",
        tempo: "1-1.5 hours",
        costo: "12 lei, about €2.50",
        lat: 46.05471,
        lng: 25.08862,
        consiglio: "An optional but very authentic stop."
      },
      {
        nome: "Salina Turda",
        testo: "A salt mine that is today an underground park, with an underground lake, a panoramic lift, the echo chamber and an old winch still in place. It was one of the best surprises of the trip.",
        come: "By car from Sighișoara. Tickets at the entrance or online.",
        quando: "On weekdays; at weekends large groups arrive.",
        tempo: "2 hours",
        costo: "75 lei Monday to Friday, 90 at weekends and holidays (about €15-18, 2026); guide on request 205 lei",
        orari: "Every day 9:00-17:00, last entry at 16:20.",
        lat: 46.58771,
        lng: 23.7874,
        url: "https://salinaturda.eu",
        consiglio: "Dress in layers: inside the temperature is low all year."
      },
      {
        nome: "Church on the Hill",
        testo: "The Gothic Lutheran church at the top of the Covered Stairway, on School Hill, with 15th-century frescoes and a crypt. Behind it spreads the old Saxon cemetery, among the trees.",
        come: "On foot, climbing the Covered Stairway from the citadel.",
        quando: "Morning.",
        tempo: "45 minutes",
        lat: 46.21763,
        lng: 24.79055,
        consiglio: "The cemetery at the back is the quietest spot in town."
      },
      {
        nome: "Piața Cetății",
        testo: "The citadel's main square, framed by colourful houses with cafés and restaurants. At the end of July it hosts the medieval festival.",
        come: "On foot, from the Clock Tower.",
        quando: "Early morning or at sunset.",
        tempo: "30 minutes",
        costo: "free",
        orari: "Always open.",
        lat: 46.21997,
        lng: 24.79256
      },
      {
        nome: "Monastery Church",
        testo: "The Gothic church of the former Dominican monastery, next to the Clock Tower, with a collection of oriental carpets and a Baroque organ.",
        come: "On foot, at the entrance to the citadel.",
        quando: "Daytime.",
        tempo: "20-30 minutes",
        lat: 46.21965,
        lng: 24.79348
      },
      {
        nome: "Shoemakers' Tower",
        testo: "One of the nine surviving towers of the medieval walls, rebuilt in 1681 with a Baroque roof.",
        come: "On foot, on the north side of the citadel.",
        quando: "Daytime.",
        tempo: "20 minutes",
        costo: "free from outside",
        lat: 46.22126,
        lng: 24.79195
      },
      {
        nome: "Turda Gorge (Cheile Turzii)",
        testo: "A limestone canyon almost 3 km long carved by the Hășdate stream, with a trail along the bottom of the gorge and walls equipped for climbing. An outdoor walk close to Salina Turda.",
        come: "By car from Turda towards Petreștii de Jos, then on foot from the car park by the cabana.",
        quando: "April to October, in good weather.",
        tempo: "2 hours",
        lat: 46.56389,
        lng: 23.67917,
        consiglio: "Shoes with good soles: the rocks along the stream are slippery."
      },
      {
        nome: "Biertan Fortified Church",
        testo: "One of the largest fortified churches in Transylvania, a UNESCO site, enclosed by three rings of walls on a hill. Inside is the sacristy door with a lock of 19 bolts.",
        come: "By car, about half an hour from Sighișoara.",
        quando: "Morning or early afternoon.",
        tempo: "1 hour",
        lat: 46.13516,
        lng: 24.52145
      }
    ],
    sapori: [
      {
        nome: "Citadel cooking",
        testo: "Local dishes in Sighișoara's restaurants, handy for lunch."
      },
      {
        nome: "Mămăligă",
        testo: "Polenta with cheese and sour cream, served in local restaurants."
      }
    ],
    attenzioni: [
      "It is the longest day at the wheel: leave early.",
      "Tickets for Salina Turda are bought at the entrance or online.",
      "Park outside the Sighișoara citadel."
    ],
    faq: [
      {
        domanda: "How much time do you need in Sighișoara?",
        risposta: "The citadel takes 2-3 hours, with the Clock Tower, the Covered Stairway and the Church on the Hill. Biertan or Viscri need an extra half day."
      },
      {
        domanda: "Can you sleep inside the citadel?",
        risposta: "Yes, there are guesthouses and small hotels within the walls. Leave the car in the car parks below, as the citadel is entered only on foot."
      },
      {
        domanda: "Do you need to book Salina Turda?",
        risposta: "It is not compulsory: tickets are sold at the entrance or online. Online you skip the queue, which helps above all at weekends."
      },
      {
        domanda: "What is the temperature inside Salina Turda?",
        risposta: "Cool all year round, even in summer: bring a sweatshirt or a light jacket."
      },
      {
        domanda: "Is the boat ride on the underground lake worth it?",
        risposta: "It is short and paid separately. The lake is more spectacular seen from above, from the walkways."
      },
      {
        domanda: "Sighișoara and Turda on the same day?",
        risposta: "Yes, by car: Sighișoara in the morning, about 2 hours' drive and Salina Turda in the afternoon. It is a long day, so start early."
      }
    ],
    gite: [
      {
        nome: "Cluj-Napoca",
        distanza: "about 35 km from Turda",
        come: "By car along the A3 motorway, or by bus.",
        testo: "Transylvania's university city, with Union Square and St Michael's Church. It has the nearest airport to Turda."
      },
      {
        nome: "Sibiu",
        distanza: "about an hour and a half from Turda",
        come: "By car.",
        testo: "The Saxon old town with the Large Square and the Bridge of Lies, the starting point for the Transfăgărășan."
      },
      {
        nome: "Brașov",
        distanza: "about 2 hours from Sighișoara",
        come: "By car or train.",
        testo: "The town of the Black Church and Tâmpa, handy for the castles of Bran and Peleș."
      }
    ],
    programmi: [
      {
        titolo: "1 day (along the driving route)",
        tappe: [
          "Early start from Brașov",
          "Viscri and the fortified church",
          "Sighișoara: Clock Tower, Dracula's birthplace, Covered Stairway and Church on the Hill",
          "Lunch in the citadel",
          "About 2 hours' drive to Turda",
          "Salina Turda in the afternoon, then Sibiu or Cluj for the night"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Viscri, Biertan and Sighișoara, night in the citadel",
          "Day 2: Salina Turda in the morning and Turda Gorge in the afternoon, then Cluj-Napoca or Sibiu"
        ]
      }
    ],
    zone: [
      {
        nome: "Sighișoara citadel",
        perChi: "those who want the town in the evening, without crowds",
        testo: "Guesthouses and small hotels within the walls, among the colourful houses. Reached on foot from the car parks.",
        fascia: "€45-80"
      },
      {
        nome: "Sighișoara lower town",
        perChi: "those travelling by car who want easy parking",
        testo: "Hotels and guesthouses at the foot of the citadel, 5-10 minutes' walk from the Clock Tower.",
        fascia: "€35-70"
      },
      {
        nome: "Saxon villages (Viscri, Biertan)",
        perChi: "those looking for silence and restored farmhouses",
        testo: "Guesthouses in the villages around the fortified churches, with home cooking. A car is needed."
      },
      {
        nome: "Turda and Cluj-Napoca",
        perChi: "those visiting the salt mine and heading west",
        testo: "Turda has a few simple hotels near the salt mine; Cluj, half an hour away, has far more choice."
      }
    ],
    esperienzeSlugs: ['salina-turda'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'The colorful houses and cobbled streets of the old town of Sighișoara, Romania',
    immagine: '/images/transilvania/sighisoara-stock.jpg',
  },
  {
    slug: 'sibiu-transfagarasan',
    paeseSlug: 'transilvania',
    ordine: 5,
    nome: 'Sibiu and Transfăgărășan',
    tipologia: ['storia', 'natura', 'strada panoramica'],
    giorniConsigliati: '1 day, with a long stretch of driving',
    visitataPersonalmente: true,
    introduzione: "The UNESCO old town of Sibiu and the Transfăgărășan, a famous scenic road, with hairpin turns climbing high into the mountains.",
    percheAndarci: "For the Transfăgărășan, with Lake Bâlea and the (rare) chance of spotting bears along the road.",
    cosaVedere: [
      'Piața Mare and the Brukenthal Museum in Sibiu',
      'The Bridge of Lies (Podul Minciunilor)',
      'The hairpin turns of the Transfăgărășan up to Lake Bâlea',
      'The Vidraru Dam',
    ],
    cosaFare: [
      'City tour of Sibiu with a local guide',
      'Drive the Transfăgărășan (there is a dedicated experience page)',
      'Stop at the Balea Lac Restaurant on Lake Bâlea',
    ],
    doveDormire:
      "MyContinental Sibiu, a modern property near the old town. The most-cited things are the upper-floor rooms with a view of the city and the abundant breakfast; some complain about slow wifi and the elevators.\n\nAlternatives: budget: Casa Timpuri Vechi, Pensiunea Central Sibiu · mid-range: Casa Luxemburg · luxury (affordable): Noblesse Boutique Hotel, Mina Luxury Boutique Hotel.",
    doveMangiare: "Crama Sibiul Vechi (rustic wine cellar, few tables, booking mandatory), La Dobrun or Crama Ileana; after dinner Oldie's Pub or Geea Caffe.",
    comeArrivare: "By car from Salina Turda to Sibiu. From Salina Turda it is about 1 hour 30 by car, from Brașov about 2 hours 30 along the DN1 via Făgăraș. Sibiu airport has flights mainly via Munich and Vienna; from Bucharest you can also come by train or car. From the centre to the Transfăgărășan (Bâlea Cascadă) takes about an hour and a half, and bus 13 runs from the station to the ASTRA Museum.",
    comeSpostarsi: 'Rental car for the Transfăgărășan, on foot in the center of Sibiu.',
    periodoMigliore: 'summer and early autumn, when the Transfăgărășan is open to cars (dates depend on snow)',
    costi: "I didn't note down the prices. Indicative daily budget per person: low €40-60 (guesthouse and simple taverns), mid €70-110 (central hotel, cellar restaurants, museums), high from €150, plus fuel for the Transfăgărășan. Prices checked for 2026: Brukenthal Palace 50 lei (about €10), ASTRA Museum 50 lei (about €10), Bâlea cable car 80 lei each way (about €16).",
    erroriDaEvitare: ['Leaving without having checked on the official website that the Transfăgărășan is open', "Feeding the bears or getting out of the car if you spot one"],
    miaEsperienza:
      "The Transfăgărășan lives up to its fame: the hairpin turns climbing up to Lake Bâlea are among the most beautiful roads I've ever driven. The long return to Bucharest on the same day, though, takes its toll.",
    luoghi: [
      {
        nome: "Piața Mare and Brukenthal Museum",
        testo: "Sibiu's great square, among the most beautiful in Romania, with the Brukenthal Museum, among the oldest museums in the country, opened in 1817.",
        come: "On foot from the centre.",
        quando: "Morning.",
        tempo: "2 hours",
        costo: "Square free; Brukenthal Palace 50 lei, about €10 (2026); combined ticket for all branches 120 lei, valid 48 hours",
        orari: "Brukenthal Palace closed Monday and Tuesday. Winter hours from 28 October 2026: Wednesday-Sunday 9am-5pm, ticket office until 4:15pm; in summer 10am-6pm.",
        lat: 45.79678,
        lng: 24.15183,
        url: "https://www.brukenthalmuseum.ro/mnb/preturi",
        consiglio: "A city tour with a local guide helps understand the history."
      },
      {
        nome: "Piața Mică",
        testo: "The Small Square, cosier than Piața Mare, lined with old guild houses and arcades. From here you drop down to the lower town under the Bridge of Lies.",
        come: "On foot, through the Council Tower from Piața Mare.",
        quando: "Evening, when the cafés are open.",
        tempo: "30 minutes",
        costo: "free",
        orari: "Always open.",
        lat: 45.79772,
        lng: 24.15163
      },
      {
        nome: "Bridge of Lies (Podul Minciunilor)",
        testo: "An iron bridge from 1859. According to tradition, it creaks if someone tells a lie.",
        come: "On foot in the old town.",
        quando: "Evening.",
        tempo: "15 minutes",
        costo: "free entry",
        orari: "Always open.",
        lat: 45.79832,
        lng: 24.1508,
        consiglio: "Take the photo from below, in the lane underneath."
      },
      {
        nome: "Council Tower (Turnul Sfatului)",
        testo: "The tower linking Piața Mare and Piața Mică, with an arched passage at its base. At the top is a viewpoint over the rooftops and their \"eyes\", the eyelid-shaped dormers typical of Sibiu.",
        come: "On foot; stairs inside.",
        quando: "Late afternoon, with low light on the roofs.",
        tempo: "30 minutes",
        lat: 45.79761,
        lng: 24.15213
      },
      {
        nome: "Evangelical Cathedral of St Mary",
        testo: "The large Lutheran Gothic church on Piața Huet, symbol of the Saxon community, with a tower over 70 metres high dominating the centre. Inside are funerary slabs and a great organ; the tower can be climbed.",
        come: "On foot, on Piața Huet next to Piața Mare.",
        quando: "Morning.",
        tempo: "45 minutes",
        lat: 45.79777,
        lng: 24.15008
      },
      {
        nome: "Walls and towers of Strada Cetății",
        testo: "The best-preserved stretch of the medieval walls, along a tree-lined avenue with three towers in a row: the Carpenters', the Potters' and the Halberdiers'. A quiet walk just outside the circuit of squares.",
        come: "On foot, 10 minutes south-east of Piața Mare.",
        quando: "Morning or late afternoon.",
        tempo: "45 minutes",
        costo: "free",
        orari: "Always open.",
        lat: 45.79424,
        lng: 24.15321
      },
      {
        nome: "Passage of Stairs (Pasajul Scărilor)",
        testo: "A medieval stairway that runs down from the upper town, beside the Evangelical Cathedral, to the lower town, between retaining walls and arches. It is the most atmospheric link between Sibiu's two levels.",
        come: "On foot from Piața Huet.",
        quando: "Daytime.",
        tempo: "15 minutes",
        costo: "free",
        orari: "Always open.",
        lat: 45.79748,
        lng: 24.14927
      },
      {
        nome: "Orthodox Cathedral of the Holy Trinity",
        testo: "The Orthodox metropolitan cathedral, from the early 20th century, modelled on Hagia Sophia in Istanbul, with an interior fully painted and gilded. It is the counterpoint to the Saxon Gothic churches of the centre.",
        come: "On foot, on Strada Mitropoliei, 5 minutes from Piața Mare.",
        quando: "Morning, outside services.",
        tempo: "20-30 minutes",
        costo: "free entry",
        lat: 45.79459,
        lng: 24.14815
      },
      {
        nome: "ASTRA open-air museum",
        testo: "One of the largest open-air museums in Europe: 96 hectares of forest in Dumbrava Sibiului with farmhouses, windmills, wooden churches and craft workshops moved here from all over Romania, along 10 km of paths. It tells the story of rural life better than any gallery.",
        come: "About 6 km from the centre, on the road to Rășinari and Păltiniș: by car, by bike on the cycle path or on bus 13 from the station.",
        quando: "A dry day, from spring to autumn.",
        tempo: "3 hours",
        costo: "50 lei, about €10 (2026)",
        orari: "Daily; September to April 8am-5pm, last ticket 4:45pm at the main entrance.",
        lat: 45.75379,
        lng: 24.11274,
        url: "https://muzeulastra.ro/program-de-vizitare/",
        consiglio: "Lots of walking on dirt paths: wear comfortable shoes."
      },
      {
        nome: "Transfăgărășan road",
        testo: "The mountain road built between 1970 and 1974 under Ceaușescu: hairpin bends that climb to Lake Bâlea, among the best roads I have ever driven. Closed in winter.",
        come: "By car, from Sibiu or Curtea de Argeș. Usually open from late June to late October, depending on snow: status shown on signs at Curtea de Argeș and Cârțișoara.",
        quando: "Summer and early autumn; returning to Bucharest on the same day is very long.",
        tempo: "full day",
        costo: "No toll on the road",
        orari: "High section usually open from 20 June to 31 October, depending on snow.",
        lat: 45.60248,
        lng: 24.61401,
        consiglio: "Leave early: the long return to Bucharest the same day takes its toll."
      },
      {
        nome: "Bâlea Cascadă and the cable car",
        testo: "On the northern side, at about 1,200 metres, are the Bâlea waterfall and the lower station of the cable car to the lake. When the high road is closed, it is the only way to reach Lake Bâlea.",
        come: "By car from Cârțișoara along the Transfăgărășan; the cable car climbs 3.7 km to 2,034 metres in about 15 minutes.",
        quando: "All year; in winter it is the way up to the lake and the Ice Hotel.",
        tempo: "1-2 hours with the cable car",
        costo: "Cable car 80 lei each way, about €16 (2026)",
        orari: "Cable car 9am-5pm in winter, 9am-6pm in summer; runs with at least 10 people.",
        lat: 45.63657,
        lng: 24.60725,
        url: "https://www.balealac.ro"
      },
      {
        nome: "Lake Bâlea",
        testo: "The glacial lake at 2,034 metres on the Transfăgărășan, with chalets. In summer you arrive by car, the rest of the year by cable car from Bâlea Cascadă.",
        come: "By car along the road.",
        quando: "Summer, in clear weather.",
        tempo: "1 hour",
        costo: "Free by car; by cable car 80 lei each way (2026)",
        lat: 45.60331,
        lng: 24.61705,
        url: "https://www.balealac.ro",
        consiglio: "At the Balea Lac Restaurant you eat with a view of the lake."
      },
      {
        nome: "Poenari Citadel",
        testo: "The ruins of the fortress linked to Vlad the Impaler, on a ridge above the Argeș valley on the southern side of the Transfăgărășan. Getting there means climbing about 1,480 steps through the woods: the view over the valley pays for the effort.",
        come: "By car, just north of Arefu, before the Vidraru dam when coming from the south.",
        quando: "A dry morning or afternoon; it may close when bears are around.",
        tempo: "1.5-2 hours including the climb",
        lat: 45.3539,
        lng: 24.63526,
        consiglio: "This is Dracula's real fortress, much more than Bran Castle: worth the effort for history lovers."
      },
      {
        nome: "Vidraru Dam",
        testo: "A 166-metre arch dam, completed in 1966, on the Argeș river, with a large artificial lake. A panoramic stop on the southern side of the Transfăgărășan.",
        come: "By car along the road.",
        quando: "Daytime.",
        tempo: "30 minutes",
        costo: "free entry",
        orari: "Always visible from the road.",
        lat: 45.36631,
        lng: 24.63147,
        consiglio: "It can be seen from the road too."
      },
      {
        nome: "Făgăraș Citadel",
        testo: "A lowland fortress surrounded by a water-filled moat, one of the best preserved in Romania, in the town of Făgăraș on the road between Brașov and Sibiu. Inside is the museum of Țara Făgărașului.",
        come: "By car along the DN1, about 1 hour from Sibiu and 1 hour from Brașov.",
        quando: "As a stop on the Brașov-Sibiu road.",
        tempo: "1 hour",
        lat: 45.84517,
        lng: 24.97375
      }
    ],
    sapori: [
      {
        nome: "Romanian cellar cooking",
        testo: "Traditional dishes in the rustic cellars of the centre, often with few tables: best to book."
      },
      {
        nome: "Saxon cuisine",
        testo: "The city keeps traditional dishes and craft beers."
      }
    ],
    attenzioni: [
      "The Transfăgărășan is usually closed from late October to late June because of snow: check the status before leaving.",
      "Book at the small restaurants in the centre, which have few tables.",
      "Drive carefully: tight bends and truck and motorbike traffic."
    ],
    faq: [
      {
        domanda: "When is the Transfăgărășan open?",
        risposta: "The high section is usually open from 20 June to 31 October, but dates shift with the snow: check before setting off. The rest of the year Lake Bâlea can only be reached by cable car from Bâlea Cascadă."
      },
      {
        domanda: "How long does it take to drive the Transfăgărășan?",
        risposta: "From Sibiu to Lake Bâlea takes about an hour and a half; with stops at Vidraru and Poenari it is a full day. From the lake to Bucharest there are still about 3 hours 45 of driving."
      },
      {
        domanda: "Will you see bears on the Transfăgărășan?",
        risposta: "Often, especially on the southern side. Don't get out of the car and don't feed them: it is forbidden and dangerous; take photos through the window."
      },
      {
        domanda: "How many days do you need in Sibiu?",
        risposta: "One day is enough for the old town; two add the Transfăgărășan, three add the ASTRA Museum and a fortified church."
      },
      {
        domanda: "Is the Brukenthal Museum open on Monday?",
        risposta: "No: Brukenthal Palace is closed on Monday and Tuesday. On the other days in winter it opens from 9am to 5pm."
      },
      {
        domanda: "Do you need to book restaurants in Sibiu?",
        risposta: "For the small cellar restaurants in the centre, yes: Crama Sibiul Vechi, for example, has very few tables and booking is required."
      }
    ],
    gite: [
      {
        nome: "Cisnădioara",
        distanza: "about 12 km, 20 minutes by car",
        come: "By car via Cisnădie; the last stretch is an uphill walk to the church.",
        testo: "A small fortified Romanesque basilica on a hill above the Saxon village, with views over the Cibin mountains."
      },
      {
        nome: "Biertan",
        distanza: "about 80 km, 1 hour 30 by car",
        come: "By car towards Mediaș, then a minor road.",
        testo: "One of the largest Saxon fortified churches, a UNESCO site, with three rings of walls above the village."
      },
      {
        nome: "Salina Turda",
        distanza: "about 1 hour 30 by car",
        come: "By car on the A1 motorway, then towards Turda; ticket online.",
        testo: "The underground salt mine with its small lake and rowing boats: it is cool inside all year, bring a sweater."
      },
      {
        nome: "Sighișoara",
        distanza: "about 1 hour 45-2 hours by car",
        come: "By car or train.",
        testo: "The UNESCO medieval town with the Clock Tower, easy to combine with Viscri or Biertan."
      }
    ],
    programmi: [
      {
        titolo: "1 day in Sibiu",
        tappe: [
          "Piața Mare and the Brukenthal Museum in the morning",
          "Council Tower and Piața Mică",
          "Bridge of Lies and the Passage of Stairs down to the lower town",
          "Evangelical Cathedral and Piața Huet",
          "Strada Cetății walls in the afternoon",
          "Dinner in a cellar restaurant in the centre, booked ahead"
        ]
      },
      {
        titolo: "2 days: Sibiu and the Transfăgărășan",
        tappe: [
          "Day 1: Sibiu as in the one-day plan",
          "Day 2: early start, 1 hour 30 to Bâlea Cascadă, hairpins up to Lake Bâlea, down the southern side with Vidraru and Poenari"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Sibiu old town",
          "Day 2: ASTRA Museum in the morning, afternoon in Cisnădioara or at Biertan fortified church",
          "Day 3: Transfăgărășan north to south, with Lake Bâlea, the Vidraru dam and Poenari, then Curtea de Argeș or back to Bucharest (about 3 hours 45 from the lake)"
        ]
      }
    ],
    zone: [
      {
        nome: "Upper town (old town)",
        testo: "Hotels and guesthouses around Piața Mare and Piața Mică. The priciest area, especially during the Christmas market.",
        perChi: "those who want everything on foot",
        fascia: "€60-130"
      },
      {
        nome: "Lower town (Orașul de Jos)",
        testo: "The streets below the walls, with low houses and family guesthouses, 5-10 minutes' walk uphill from the squares.",
        perChi: "those after lower prices close to the centre",
        fascia: "€45-90"
      },
      {
        nome: "Cârțișoara and the northern Transfăgărășan",
        testo: "Village guesthouses at the northern entrance of the road, about an hour from Sibiu. Handy for reaching the hairpins before the traffic.",
        perChi: "those who want to hit the road at dawn",
        fascia: "€40-80"
      }
    ],
    esperienzeSlugs: ['transfagarasan'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'The hairpin turns of the Transfăgărășan among the mountains of Romania',
    immagine: '/images/transilvania/transfagarasan-stock.jpg',
  },
]
