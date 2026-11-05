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
    comeArrivare: "International flight to Bucharest, then taxi from the airport (best to use official taxis or a ride-hailing app).",
    comeSpostarsi: 'On foot in the center, Uber, Bolt or taxi for the rest.',
    periodoMigliore: 'Halloween long weekend or early November',
    costi: 'Tickets for the Palace of the Parliament, Romanian Athenaeum and Spa on the official websites.',
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
        costo: "tour prices on the official website",
        consiglio: "The oversized scale tells the regime's megalomania even before you go in."
      },
      {
        nome: "Romanian Athenaeum",
        testo: "The neoclassical concert hall of 1888, with the dome and the circular fresco telling the history of Romania. Home of the George Enescu Philharmonic.",
        come: "On foot, at Piața Revoluției.",
        quando: "Morning or on a concert evening.",
        tempo: "30-45 minutes",
        costo: "tickets and concerts on the official website",
        consiglio: "If possible, attend a concert: the acoustics are excellent."
      },
      {
        nome: "Old Town (Lipscani)",
        testo: "The historic district of alleys, venues and old inns, today the heart of restaurants and evening life. By day it is quiet, in the evening it explodes with music.",
        come: "On foot, near Piața Unirii.",
        quando: "Evening.",
        tempo: "2 hours",
        consiglio: "Check menu prices: some places are designed for tourists."
      },
      {
        nome: "Caru' cu Bere",
        testo: "Founded as a brewery in 1879, since 1899 it has been in a Gothic Revival building with Art Nouveau interiors and painted ceilings; a listed monument serving traditional Romanian cooking.",
        come: "In the centre, Strada Stavropoleos.",
        quando: "Dinner; book.",
        tempo: "1.5-2 hours",
        url: "https://www.carucubere.ro",
        consiglio: "Try the sarmale and the papanași."
      },
      {
        nome: "Village Museum",
        testo: "An open-air museum opened in 1936, with many peasant buildings from the 17th to the 20th century brought from every region of Romania. You understand rural architecture well.",
        come: "In King Michael I Park (formerly Herăstrău), north of the centre, by metro or bus.",
        quando: "Morning; the park is pleasant.",
        tempo: "1.5-2 hours",
        url: "https://www.muzeul-satului.ro",
        consiglio: "Combine with a walk in Herăstrău park."
      },
      {
        nome: "Bucharest Thermal Baths (Therme)",
        testo: "The large thermal and water park at the edge of the city, with pools, saunas and slides. Handy for resting on the last day.",
        come: "By taxi or shuttle from Bucharest: directions on the official website.",
        quando: "All day, especially the last day.",
        tempo: "full day",
        costo: "prices on the official website",
        url: "https://therme.ro",
        consiglio: "Book online to skip the queue."
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
    comeArrivare: 'By car from Bucharest to Sinaia, then from Sinaia to Bran.',
    comeSpostarsi: 'Rental car.',
    periodoMigliore: 'morning, to avoid the crowds at the castles',
    costi: "Tickets and prices for Peleș and Bran on the official websites.",
    erroriDaEvitare: ["Trusting the prices of the stalls and restaurants around Bran Castle: they are tourist traps"],
    miaEsperienza:
      "In terms of architecture Peleș is perhaps the most beautiful castle of the trip, with interiors cared for down to the details in a way Bran, as fascinating as it is, is not. Bran's link with Dracula is more a tourist invention than a historical fact, but the castle is worth the visit on its own.",
    luoghi: [
      {
        nome: "Peleș Castle",
        testo: "The summer residence of Carol I, king of Romania, built between 1873 and 1914 in German neo-Renaissance style. For architecture it is perhaps the most beautiful castle of the trip, with interiors cared for in the smallest details.",
        come: "From Bucharest to Sinaia; from the centre of Sinaia walk up.",
        quando: "Early morning, to avoid the crush. Closed from 2 November to 1 December 2026 for cleaning and conservation. Closed Monday and Tuesday; Wednesday 10-17, Thursday-Sunday 9:15-17, last entry at 16.",
        tempo: "1.5 hours",
        costo: "100 lei adults, ground and first floor (2026)",
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
        consiglio: "Silence inside."
      },
      {
        nome: "Bran Castle",
        testo: "The fortress on the rock, documented since 1377, famous for its link with Dracula. In fact the link is more a tourist invention than a historical fact, but the castle is worth the visit on its own.",
        come: "South-west of Brașov, by car. Tickets on the official website.",
        quando: "Early morning; on Mondays it opens at 12, other days at 9. Closes at 19 from April to October, at 18 from November to March.",
        tempo: "1-1.5 hours",
        costo: "100 lei adults, standard tour (November-December 2026); often sold out: better online",
        url: "https://www.bran-castle.com",
        consiglio: "Vlad the Impaler never lived here: the Dracula link was born for tourism."
      },
      {
        nome: "Cantacuzino Castle at Bușteni",
        testo: "A neo-Brâncovenesc castle of 1911 at the foot of the Bucegi. An optional photo stop on the road.",
        come: "By car or train, in Bușteni, just past Sinaia.",
        quando: "Daytime.",
        tempo: "30 minutes",
        consiglio: "Only for those with time."
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
    comeArrivare: 'A short drive from Bran.',
    comeSpostarsi: 'On foot in the centre; by car to Râșnov.',
    periodoMigliore: 'late afternoon, for the light on the rock',
    costi: "I didn't note down Sergiana's prices; wine and palinka, though, cost more than average.",
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
        consiglio: "Lunch with soup in a bread bowl at Sergiana."
      },
      {
        nome: "Black Church (Biserica Neagră)",
        testo: "The main Gothic church in Romania, begun in 1383 and completed in the 15th century. It has an 1839 Buchholz organ with about 4,000 pipes and the largest collection of ‘Transylvanian rugs’, Anatolian carpets donated by Saxon merchants between the 15th and 17th centuries.",
        come: "On foot from Piața Sfatului.",
        quando: "Morning.",
        tempo: "45 minutes",
        consiglio: "The summer organ concerts are a great chance to see it."
      },
      {
        nome: "Mount Tâmpa and the BRAȘOV sign",
        testo: "The hill above the centre with the Hollywood-style sign and a cable car. From the top you see the whole city.",
        come: "Cable car or footpath.",
        quando: "Late afternoon.",
        tempo: "1.5-2 hours",
        consiglio: "The walk up is easy but steep in places."
      },
      {
        nome: "Rope Street (Strada Sforii)",
        testo: "An alley just over a metre wide, considered among the narrowest in Europe, connecting two streets. A quick curiosity in the centre.",
        come: "On foot, near the Șchei Gate.",
        quando: "Daytime.",
        tempo: "10 minutes",
        costo: "free entry",
        consiglio: "To combine with a walk around the centre."
      },
      {
        nome: "Râșnov Fortress",
        testo: "A fortified peasant citadel, with the 'RASNOV' Hollywood-style sign visible from the fortress. The atmosphere is more Lord of the Rings than Dracula, and it is among the least touristy gems of the trip.",
        come: "Just outside Brașov, in the town of Râșnov; go up on foot or with whatever transport runs on site.",
        quando: "Late afternoon, for the light on the fortress.",
        tempo: "1.5-2 hours",
        consiglio: "A peasant citadel: it sheltered the townspeople in wartime."
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
    comeArrivare: 'By car from Brașov to Viscri, then toward Sighișoara and on to Salina Turda.',
    comeSpostarsi: 'Rental car; on foot in the old towns.',
    periodoMigliore: 'leave early: it is the longest day behind the wheel of the trip',
    costi: "Tickets for Viscri, the birthplace and Salina Turda on site or on the official websites; the guide at Salina Turda is paid separately.",
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
        consiglio: "Climb the tower for the view: the coloured houses from above."
      },
      {
        nome: "Dracula's birthplace and Covered Stairway",
        testo: "The house where Vlad Țepeș is said to have been born and the long covered wooden staircase that climbs to the church on the hill. A short stop among the coloured houses.",
        come: "On foot in the citadel.",
        quando: "Morning.",
        tempo: "1 hour",
        costo: "ticket on site",
        consiglio: "Combine it with the climb up the Covered Stairway."
      },
      {
        nome: "Viscri and the Fortified Church",
        testo: "A Saxon village with a fortified church, a UNESCO site, well preserved. An optional visit along the route.",
        come: "By car from Brașov, towards Sighișoara.",
        quando: "Morning.",
        tempo: "1-1.5 hours",
        costo: "ticket on site",
        consiglio: "An optional but very authentic stop."
      },
      {
        nome: "Salina Turda",
        testo: "A salt mine that is today an underground park, with an underground lake, a panoramic lift, the echo chamber and an old winch still in place. It was one of the best surprises of the trip.",
        come: "By car from Sighișoara. Tickets at the entrance or online.",
        quando: "Daily 9-17, last entry 16:20; big groups at weekends.",
        tempo: "2 hours",
        costo: "75 lei Monday to Friday, 90 at weekends and holidays (2026); guide on request 205 lei",
        url: "https://salinaturda.eu",
        consiglio: "Dress in layers: inside the temperature is low all year."
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
    comeArrivare: 'By car from Salina Turda to Sibiu.',
    comeSpostarsi: 'Rental car for the Transfăgărășan, on foot in the center of Sibiu.',
    periodoMigliore: 'summer and early autumn, when the Transfăgărășan is open to cars (dates depend on snow)',
    costi: "I didn't note down the prices.",
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
        url: "https://www.brukenthalmuseum.ro",
        consiglio: "A city tour with a local guide helps understand the history."
      },
      {
        nome: "Bridge of Lies (Podul Minciunilor)",
        testo: "An iron bridge from 1859. According to tradition, it creaks if someone tells a lie.",
        come: "On foot in the old town.",
        quando: "Evening.",
        tempo: "15 minutes",
        costo: "free entry",
        consiglio: "Take the photo from below, in the lane underneath."
      },
      {
        nome: "Transfăgărășan road",
        testo: "The mountain road built between 1970 and 1974 under Ceaușescu: hairpin bends that climb to Lake Bâlea, among the best roads I have ever driven. Closed in winter.",
        come: "By car, from Sibiu or Curtea de Argeș. Usually open from late June to late October, depending on snow: status shown on signs at Curtea de Argeș and Cârțișoara.",
        quando: "Summer and early autumn; returning to Bucharest on the same day is very long.",
        tempo: "full day",
        consiglio: "Leave early: the long return to Bucharest the same day takes its toll."
      },
      {
        nome: "Lake Bâlea",
        testo: "The glacial lake at 2,034 metres on the Transfăgărășan, with chalets. In summer you arrive by car, the rest of the year by cable car from Bâlea Cascadă.",
        come: "By car along the road.",
        quando: "Summer, in clear weather.",
        tempo: "1 hour",
        consiglio: "At the Balea Lac Restaurant you eat with a view of the lake."
      },
      {
        nome: "Vidraru Dam",
        testo: "A 166-metre arch dam, completed in 1966, on the Argeș river, with a large artificial lake. A panoramic stop on the southern side of the Transfăgărășan.",
        come: "By car along the road.",
        quando: "Daytime.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "It can be seen from the road too."
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
    esperienzeSlugs: ['transfagarasan'],
    tripSlugs: ['transilvania-express'],
    imageAlt: 'The hairpin turns of the Transfăgărășan among the mountains of Romania',
    immagine: '/images/transilvania/transfagarasan-stock.jpg',
  },
]
