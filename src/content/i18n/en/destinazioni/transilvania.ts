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
