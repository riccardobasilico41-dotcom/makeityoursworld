import type { Destinazione } from '@/lib/types'

export const destinazioniGiordania: Destinazione[] = [
  {
    slug: 'amman',
    paeseSlug: 'giordania',
    ordine: 1,
    nome: 'Amman',
    tipologia: ['città', 'storia'],
    giorniConsigliati: '1-2 days, as arrival/departure',
    visitataPersonalmente: true,
    introduzione: "The capital, arrival and departure point of the trip, with the Citadel, the Roman Theater and the evening life of Rainbow Street.",
    percheAndarci: "It's the natural entry to the country and, on the way back from the desert and the Red Sea, a last day of culture and city before the flight.",
    cosaVedere: ['The Amman Citadel', 'The Roman Theater', 'Rainbow Street'],
    cosaFare: [
      'Welcome dinner at Zajal (Prince Mohammed Street, about 15 JOD)',
      'Visit the Citadel and the Roman Theater',
      'Lunch at the Bazaar',
      'Cooking class and Arabic calligraphy class',
      'An evening at Talet Al Jabal or C-Ling on Rainbow Street',
    ],
    doveDormire:
      "I slept in an ordinary hotel, and I didn't note the name. It's best to stay in the center, to get around on foot between the Citadel, the Roman Theater and Rainbow Street.\n\nBudget: Farah Hotel & Hostel, Cliff Hostel, both a couple of steps from the Roman Theater · mid-range: Toledo Hotel (near Rainbow Street), Kaya Hotel Amman (Abdali district, in-house spa) · more luxurious: Fairmont Amman, W Amman.",
    doveMangiare: 'Zajal for the welcome dinner; lunch at the Bazaar on the way back.',
    usciteSerali: 'Talet Al Jabal or C-Ling, on Rainbow Street.',
    comeArrivare: 'International flight to Amman.',
    comeSpostarsi: 'Arranged transfers, on foot in the center.',
    periodoMigliore: 'December-January',
    costi: 'Dinner at Zajal about 15 JOD; desert buggy near Amman 40 JOD (alternative option for Day 7).',
    erroriDaEvitare: [],
    miaEsperienza:
      "The Citadel, with its view over the whole old city, was a nice stop to close the trip before the return flight, even though it isn't what I remember most from Jordan.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Citadel (Jabal al-Qala'a)",
        "testo": "The hill above the city, with traces of settlement from the Neolithic. At the top stand the columns of the great Roman temple known as the \"Temple of Hercules\" (2nd century), the Umayyad palace built around 735 and the archaeological museum. From the edge you see the whole of Amman, with the Roman theatre below.",
        "come": "From the centre you go up by taxi or on foot, a steep climb. You visit on your own, the panels are in English.",
        "quando": "Open 8am-5pm (2026). Late afternoon has the best light on the temple; at midday in summer there is no shade.",
        "tempo": "1-1.5 hours",
        "costo": "JOD 3 for foreigners, or included in the Jordan Pass (2026)",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Take a taxi up and walk down towards the Roman theater: it is downhill and ends in the center."
      },
      {
        "nome": "Roman Theater",
        "testo": "A 2nd-century theatre from the time of Antoninus Pius, cut into the hillside, with about 6,000 seats. On either side of the entrance are two small museums, the Folklore Museum and the Museum of Popular Traditions. You climb the tiers and look down on the square.",
        "come": "In the heart of the center, on foot from the souqs and Rainbow Street.",
        "quando": "Open 8am-5pm (2026). Morning or late afternoon, when the steps are in shade.",
        "tempo": "45 minutes",
        "costo": "Included in the Jordan Pass",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Downtown and the souqs",
        "testo": "The old center around the al-Husseini mosque: spice shops, cafes, sweets, clothes, gold. It is the liveliest and most authentic part of the capital, far more than the new districts.",
        "come": "On foot from the Roman theater, a few minutes.",
        "quando": "Daytime into the evening. On Friday mornings many shops open late.",
        "tempo": "2 hours",
        "consiglio": "Stop for a hot kunafa and for falafel and hummus in one of the historic places in the center."
      },
      {
        "nome": "Rainbow Street",
        "testo": "A pedestrian street in the Jabal Amman district, with cafes, restaurants with terraces, bookshops and craft stores. You come in the evening, when it fills with young people.",
        "come": "Taxi from the centre or on foot from the Roman theatre, uphill.",
        "quando": "After sunset, especially on Thursday and Friday evenings.",
        "tempo": "2-3 hours",
        "consiglio": "Pick a place with a terrace on the slope: the view of the lit-up city is the best part."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Citadel and archaeological museum",
          "Walk down to the Roman Theater",
          "Lunch and a stroll through Downtown and the souqs",
          "Sunset and dinner on Rainbow Street"
        ]
      }
    ],
    zone: [
      {
        "nome": "Downtown / Al-Balad",
        "perChi": "those who want to be among souqs and theater",
        "testo": "You walk to almost everything and eat very well for little. In the evening it is noisy and less polished, and the hotels are basic."
      },
      {
        "nome": "Jabal Amman / Rainbow Street",
        "perChi": "those who want bars and a livable neighborhood",
        "testo": "Quieter, with restaurants and cafes close by. The streets are steep and the hotels cost more."
      },
      {
        "nome": "Abdali",
        "perChi": "business travelers or those who want modern hotels",
        "testo": "A new district of skyscrapers and international chains. Comfortable and well kept, but without character."
      }
    ],
    sapori: [
      {
        "nome": "Mansaf",
        "testo": "The national dish: lamb cooked in jameed, a dried salty yogurt, served over rice with pine nuts. Eaten in traditional restaurants and in homes."
      },
      {
        "nome": "Falafel and hummus",
        "testo": "Breakfast and a quick lunch in the historic places of Downtown. Eaten seated, with warm bread, onion and mint."
      },
      {
        "nome": "Kunafa",
        "testo": "A sweet of melted cheese with fine pastry and syrup, hot, cut on the spot in the shops of the center."
      },
      {
        "nome": "Maqluba",
        "testo": "Rice, chicken or lamb and vegetables cooked in a pot and flipped over when served."
      }
    ],
    attenzioni: [
      "Yellow taxis have a meter: have it switched on or agree the price before getting in. Uber and Careem work and remove the problem.",
      "Rainbow Street and the center are safe, but at midday in summer the sun is strong and there is no shade on the Citadel.",
      "In Jordan Friday is the day of rest: many shops open late and museums may have shorter hours.",
      "The Jordan Pass (JOD 70, 75 or 80 with 1, 2 or 3 consecutive days at Petra, 2026) must be bought online before arriving: it covers the tourist visa if you stay at least two nights and includes entry to over 40 sites.",
      "Regional tensions: the UK government (October 2026) warns of the risk of sudden escalation, possible flight cancellations and airspace closures, and advises against all travel within 3 km of the Syrian border. Check your government's travel advice before leaving."
    ],
    // GUIDA-END
    esperienzeSlugs: ['cittadella-amman'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: "A white and ginger cat walking towards the camera on the hills of Amman, with the city's buildings behind",
    immagine: '/images/giordania/amman-gatto-skyline-riccardo.jpg',
  },
  {
    slug: 'jerash',
    paeseSlug: 'giordania',
    ordine: 2,
    nome: 'Jerash',
    tipologia: ['storia', 'archeologia'],
    giorniConsigliati: 'half a day',
    visitataPersonalmente: true,
    introduzione: "One of the best-preserved Roman cities in the world outside Italy, with its oval forum, the colonnaded cardo and the two theaters.",
    percheAndarci: "It's on the road between Amman and the Dead Sea and is worth the stop in itself: it's much more beautiful than you'd expect from a \"pass-through\" stop.",
    cosaVedere: ['The Oval Forum', 'The colonnaded Cardo', 'The two Roman theaters'],
    cosaFare: ['Guided visit to the archaeological site'],
    doveDormire: "I didn't stay overnight here: a stop between Amman and the Dead Sea.",
    doveMangiare: "I have no addresses to recommend: we stopped mainly for the visit.",
    comeArrivare: 'About 1h transfer from Amman, with a stop to buy alcohol along the way.',
    comeSpostarsi: 'On foot inside the archaeological site.',
    periodoMigliore: 'morning, before the heat and the organized groups',
    costi: 'Admission included in the Jordan Pass.',
    erroriDaEvitare: [],
    miaEsperienza:
      "Jerash was a nice surprise: one of the best-preserved Roman cities I've ever seen, with the colonnaded cardo stretching out of sight. Much more than a pass-through stop.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hadrian's Arch and the Hippodrome",
        "testo": "The monumental southern gateway, built for Emperor Hadrian's visit in 129-130. Just beyond is the hippodrome.",
        "come": "The parking lot is next to the arch; the ticket office is close by.",
        "quando": "Open 8am-5pm (2026). Best early in the morning, before the groups.",
        "tempo": "30 minutes",
        "costo": "JOD 10 for foreigners, or included in the Jordan Pass (2026)",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Oval Forum and Cardo Maximus",
        "testo": "The oval square ringed by Ionic columns and, from there, the long colonnaded street that crosses the ancient city.",
        "come": "You walk it from south to north.",
        "quando": "Early morning and late afternoon for the light on the columns.",
        "tempo": "1 hour",
        "consiglio": "Look at the paving of the cardo: the original stones show how the street worked."
      },
      {
        "nome": "South Theater and Temple of Artemis",
        "testo": "The large theatre, where a voice from the centre of the orchestra carries to every tier, and pipers and drummers often play; then the sanctuary of Artemis on the highest level, with columns visible from afar.",
        "come": "From the forum you climb to the theatre, then to the temple on the hill.",
        "quando": "Late morning, when the light is high and the theater resonates.",
        "tempo": "1 hour"
      }
    ],
    programmi: [
      {
        "titolo": "Half a day",
        "tappe": [
          "Hadrian's Arch and Hippodrome",
          "Oval Forum",
          "Cardo Maximus",
          "South Theater",
          "Temple of Artemis"
        ]
      }
    ],
    zone: [
      {
        "nome": "Amman",
        "perChi": "those who visit as a day trip",
        "testo": "Jerash is about 50 km from Amman, so you go with a driver or on a tour. Sleeping in the capital is easier."
      },
      {
        "nome": "Jerash town",
        "perChi": "those who want to see it at dawn",
        "testo": "A few simple hotels near the site, useful to enter at opening before the groups."
      }
    ],
    sapori: [
      {
        "nome": "Falafel and hummus",
        "testo": "Near the site you find hot sandwiches and plates of chickpeas for a quick lunch."
      },
      {
        "nome": "Mansaf",
        "testo": "The lamb dish with rice and salty yogurt; restaurants in the modern town serve it all year."
      },
      {
        "nome": "Sage tea",
        "testo": "Many kiosks serve it with sugar and fresh leaves."
      },
      {
        "nome": "Hot Arabic bread",
        "testo": "Fresh from the neighborhood ovens, with zaatar and oil."
      }
    ],
    attenzioni: [
      "Some sellers offer improvised guides at the entrance: agree the price first, or skip it and read the panels.",
      "There is no shade on the site: bring a hat, water and closed shoes, as the stones are uneven.",
      "The stalls at the exit sell souvenirs at inflated prices: always haggle."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'The colonnaded cardo of Jerash among green meadows, with the modern city in the background, Jordan',
    immagine: '/images/giordania/jerash-cardo-riccardo.jpg',
  },
  {
    slug: 'mar-morto',
    paeseSlug: 'giordania',
    ordine: 3,
    nome: 'Dead Sea',
    tipologia: ['natura', 'relax'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: 'You float in the lowest hyper-saline waters on Earth, and at sunset, with the hills of the West Bank in the background, it is even more beautiful.',
    percheAndarci: "It's a physical experience you can't repeat anywhere else, and a relaxed pause between Jerash and the most intense part of the trip.",
    cosaVedere: ['The sunset over the hills of the West Bank'],
    cosaFare: [
      'Swim in the hyper-saline waters at sunset',
      'Relax at the resort',
      'Dinner in Madaba (Haret Jdoudna or Hikayet Sitti)',
      'After-dinner drinks at the Saint John Sky Bar or the bar of the Grand Hotel Madaba',
    ],
    doveDormire:
      "I slept at the Holiday Inn Resort Dead Sea by IHG. Online reviews (Tripadvisor, about 5,600, average 4/5) describe it as an upper-mid-range resort with attentive staff, three pools, a private beach and an abundant buffet; the most cited flaws are the high prices of food and drinks, some maintenance problems in the rooms and the ban on bringing in outside food.\n\nBudget: Ramada Resort by Wyndham Dead Sea, O Beach Hotel & Resort (direct access to the sea at a fraction of the price) · mid-range: Dead Sea Spa Hotel, Crowne Plaza Jordan Dead Sea Resort & Spa (the Holiday Inn's range) · more luxurious: Hilton Dead Sea Resort & Spa, Kempinski Hotel Ishtar Dead Sea.",
    doveMangiare: 'Haret Jdoudna or Hikayet Sitti in Madaba; after-dinner at the bar of the Grand Hotel Madaba or the Saint John Sky Bar.',
    comeArrivare: 'About 1h30 transfer from Jerash.',
    comeSpostarsi: 'On foot in the resort, arranged transfer to Madaba for dinner.',
    periodoMigliore: 'sunset',
    costi: "I didn't note the resort prices: worth comparing them when booking.",
    erroriDaEvitare: ['Heading toward the more conservative areas or the desert without having bought alcohol in Madaba (Soho or Hangover)'],
    miaEsperienza:
      "Floating at the surface of the water watching the sun go down behind the hills of the West Bank is an experience in itself. At sunset, I think, the Dead Sea gives more than you expect.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Swimming and mud at the Dead Sea",
        "testo": "The sea lies about 440 metres below ocean level (2025) and keeps dropping. It is so salty that you float effortlessly. You lie on the surface, spread mud on your skin and let it dry.",
        "come": "Enter from a resort with a private beach or from an equipped public beach. Go in slowly, without diving.",
        "quando": "Sunset, with the light on the West Bank hills.",
        "tempo": "1-2 hours in the water",
        "consiglio": "Do not shave the day before, keep the water away from eyes and face, and rinse right away with fresh water."
      },
      {
        "nome": "Madaba and the mosaic map",
        "testo": "The city of Byzantine mosaics. In the Greek Orthodox Church of St George lies the 6th-century map, made between 542 and 570, with Jerusalem at its centre: it originally measured 21 by 7 metres and had more than two million tesserae.",
        "come": "Madaba is about half an hour from Amman and about an hour from the Dead Sea; you see the centre on foot.",
        "quando": "Morning, when the church is less crowded.",
        "tempo": "1-2 hours",
        "consiglio": "Pair it with dinner at a restaurant in the old town."
      },
      {
        "nome": "Baptism Site (Bethany beyond the Jordan)",
        "testo": "The place on the Jordan River where tradition sets the baptism of Jesus, UNESCO World Heritage since 2015, about 9 km north of the Dead Sea. You walk past the remains of Byzantine churches down to the river, with the West Bank a few metres away.",
        "come": "By car from the Dead Sea. The standard ticket includes a shuttle and a local guide.",
        "quando": "Entry from 8am; last entry 4pm November-March, 5pm April-October (2026). Best in the morning, before the heat.",
        "tempo": "1.5-2 hours",
        "url": "https://www.baptismsite.com/",
        "consiglio": "Bring a hat and water: the route is almost all in the sun.",
        "costo": "JOD 12 for foreigners (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Madaba and the church of St George",
          "Lunch in Madaba",
          "Afternoon: transfer to the Dead Sea",
          "Swim and mud, then sunset over the sea"
        ]
      }
    ],
    zone: [
      {
        "nome": "Resorts on the sea",
        "perChi": "those who want direct beach access",
        "testo": "Comfortable, with pools and spas. Food and drink prices are high and you often cannot bring food in from outside."
      },
      {
        "nome": "Madaba",
        "perChi": "those who want to spend less",
        "testo": "Simpler hotels and local restaurants, with about an hour of transfer to the sea."
      }
    ],
    sapori: [
      {
        "nome": "Maqluba",
        "testo": "Rice, meat and vegetables flipped at the table, typical of Madaba and Jordanian homes."
      },
      {
        "nome": "Jordan Valley dates",
        "testo": "Sweet and soft, sold along the road and in the shops of Madaba."
      },
      {
        "nome": "Zarb",
        "testo": "Meat and vegetables cooked underground; found in restaurants that prepare it on request."
      },
      {
        "nome": "Mud cosmetics",
        "testo": "Creams and soaps with Dead Sea salts, in the shops of Madaba and the resorts."
      }
    ],
    attenzioni: [
      "The salt stings eyes and cuts: no diving, no splashing, and rinse right away if it happens.",
      "In the cosmetics shops in front of the resorts prices are higher than in town: compare first.",
      "Do not stay in the water too long at a time, and drink plenty."
    ],
    // GUIDA-END
    esperienzeSlugs: ['bagno-mar-morto'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'The veiled sun reflected in the Dead Sea at sunset, small silhouettes of bathers on the shore, Jordan',
    immagine: '/images/giordania/mar-morto-tramonto-riccardo.jpg',
  },
  {
    slug: 'karak-monte-nebo',
    paeseSlug: 'giordania',
    ordine: 4,
    nome: 'Karak and Mount Nebo',
    tipologia: ['storia', 'religione'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: 'The Crusader fortress of Karak and Mount Nebo, the place from which tradition has it that Moses saw the Promised Land, on the way to Little Petra.',
    percheAndarci: "Karak is a worthwhile historical stop, on the plateau south of the Dead Sea; Mount Nebo should be counted more for its symbolic value than for the view.",
    cosaVedere: ['The Crusader fortress of Karak Castle', 'The view from Mount Nebo'],
    cosaFare: ['Visit Karak Castle', 'Stop at Mount Nebo'],
    doveDormire: "I didn't stay overnight here: a stop on the way to Little Petra and Wadi Musa.",
    doveMangiare: 'Lunch along the road between Mount Nebo and Little Petra.',
    comeArrivare: 'About 1h30 transfer from Madaba to Karak; Mount Nebo is a later stop along the route to Little Petra.',
    comeSpostarsi: 'On foot inside the Karak fortress.',
    periodoMigliore: 'morning',
    costi: 'Admission to Karak included in the Jordan Pass.',
    erroriDaEvitare: [],
    miaEsperienza:
      "Karak Castle is an imposing fortress and worth the visit. Mount Nebo, to be honest, left me indifferent: it counts more as a symbol (it's the place from which, according to tradition, Moses saw the Promised Land) than as a landscape, and it's the stop of the day I remember least.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Karak Castle",
        "testo": "A Crusader fortress begun in the 1140s on a rocky spur, surrendered to Saladin's forces in 1188 and enlarged by the Mamluks. You walk through dark corridors, vaults and underground halls, with the modern town around it.",
        "come": "You get there from Madaba along the King's Highway. You visit on your own, but some corridors are dark: bring a torch.",
        "quando": "Open 8am-5pm (2026). In the morning there is less wind and the sun is still low.",
        "tempo": "1-1.5 hours",
        "costo": "Included in the Jordan Pass (figure from my trip)",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Mount Nebo",
        "testo": "The ridge, at about 700 metres, from which according to the Bible Moses saw the Promised Land. There is the memorial with Byzantine mosaics, reopened in 2016, and Gian Paolo Fantoni's serpent sculpture.",
        "come": "It is just outside Madaba, on the road towards the Dead Sea. You drive up to the car park.",
        "quando": "A clear day, when you see the Jordan Valley and Jericho, and on a very clear day Jerusalem.",
        "tempo": "45 minutes",
        "costo": "JOD 3 for foreigners (2026)"
      },
      {
        "nome": "Shobak Castle",
        "testo": "The Crusader castle of Montréal, built in 1115 by Baldwin I on an isolated hill. Little of the original survives and the interior is in ruins, with inscriptions from Mamluk repairs: it is wilder than Karak. The Crusaders dug a tunnel down the hill to spring-fed cisterns.",
        "come": "On the King's Highway between Karak and Petra. You visit on your own; bring a torch for the tunnel.",
        "quando": "Open 8am-5pm (2026). Handy as a stop on the way to Petra.",
        "tempo": "1 hour",
        "costo": "Included in the Jordan Pass",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Leave Madaba or the Dead Sea",
          "Mount Nebo",
          "Lunch along the King's Highway",
          "Karak Castle",
          "Arrival at Wadi Musa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Wadi Musa",
        "perChi": "those continuing to Petra",
        "testo": "The natural next stop along the King's Highway."
      },
      {
        "nome": "Karak",
        "perChi": "those who want a quiet night",
        "testo": "Few places, simple and cheap; in the evening the town goes quiet early."
      }
    ],
    sapori: [
      {
        "nome": "Mansaf",
        "testo": "The dish of the Karak Bedouin area: lamb, rice and salty yogurt."
      },
      {
        "nome": "Falafel and shawarma",
        "testo": "In the eateries of central Karak, for a cheap lunch."
      },
      {
        "nome": "Shrak bread",
        "testo": "Thin bread cooked on a convex stone, typical of the countryside."
      },
      {
        "nome": "Bedouin tea",
        "testo": "With sage or mint, served at stops along the road."
      }
    ],
    attenzioni: [
      "The King's Highway is scenic but winding: allow more time than the navigation says.",
      "In the bars along the road prices are not displayed: ask first.",
      "Mount Nebo is worth more for its meaning than the view: if time is short it can be dropped from the plan.",
      "On 23 October 2026 there was a shooting at a church in Karak Governorate: follow local authorities' advice and the news (gov.uk)."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'The stone walls of the Crusader fortress of Karak Castle, Jordan',
    immagine: '/images/giordania/karak-stock.jpg',
  },
  {
    slug: 'petra',
    paeseSlug: 'giordania',
    ordine: 5,
    nome: 'Petra and Little Petra',
    tipologia: ['storia', 'trekking', 'unesco'],
    giorniConsigliati: '1 full day for Petra, half a day for Little Petra',
    visitataPersonalmente: true,
    introduzione: 'The heart of the trip: the Siq, the Treasury (Al-Khazneh), the climb to the Monastery (Ad-Deir) and, as a prelude, the small canyon of Little Petra.',
    percheAndarci: "It's one of the New Seven Wonders of the World, a UNESCO World Heritage Site, and we found it almost deserted because of the drop in tourism in the region: a rare opportunity, hard to repeat.",
    cosaVedere: [
      'The Siq, the natural gorge 1.2-1.5 km long carved into the pink sandstone',
      'The Treasury (Al-Khazneh), 39-40 meters of facade carved into the rock',
      'The Royal Tombs',
      'The Monastery (Ad-Deir), 45 meters high by 50 wide',
      'Little Petra (Siq al-Barid), the miniature antechamber of Petra',
    ],
    cosaFare: [
      'Walk through the Siq to the Treasury (30-40 minutes)',
      'Climb to the Monastery: over 800 steps, 40-45 minutes of steep walking',
      'Mint tea at the kiosk in front of the Monastery',
      'Little Petra Trek the day before',
      'Hammam and Turkish bath at Al Yhakor (Al Yakhor Turkish Bath, Wadi Musa) at the end of the day',
    ],
    doveDormire:
      "I slept in an ordinary hotel in Wadi Musa, and I didn't note the name. Wadi Musa is convenient because it's a few minutes on foot or by shuttle from the entrance to Petra.\n\nBudget: Petra Cabin Hostel, Rocky Mountain Hotel (family-run, panoramic terrace) · mid-range: Petra Panorama Hotel, La Maison Hotel Petra · more luxurious: Petra Moon Luxury Hotel (boutique, very close to the entrance), Petra Marriott Hotel.",
    doveMangiare: 'Typical dinner arranged by the DMC on the day of Little Petra.',
    comeArrivare: 'The day before Petra we reached Little Petra and Wadi Musa by transfer from Karak and Mount Nebo.',
    comeSpostarsi: 'On foot throughout the site, including the Siq and the climb to the Monastery.',
    periodoMigliore: 'early morning, for the Siq and the Treasury with less direct light and fewer people',
    costi: 'Admission included in the Jordan Pass.',
    erroriDaEvitare: ['Going without hiking shoes: they are indispensable, especially for the climb to the Monastery (over 800 steps)'],
    miaEsperienza:
      "Seeing the Treasury appear from the Siq without the usual crowd in front is worth the trip on its own. The climb to the Monastery pays back every step with a view even more imposing than the Treasury. Little Petra, the day before, was also beautiful: less crowded, it gave us the first rush of enthusiasm. Together with Wadi Rum, it's the thing not to miss on the whole trip.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "The Siq and the Treasury (Al-Khazneh)",
        "testo": "The natural gorge, about 1.2 km long between sandstone walls up to 180 metres high and in places only 3 metres wide, which narrows until it suddenly reveals the façade of the Treasury, about 37 metres high and carved into the rock.",
        "come": "From the entrance to the Treasury it is a walk of half an hour or a little more. You can ride a horse on the first stretch, before the Siq.",
        "quando": "The site opens at 6am and closes at 5pm (2026). Go in at the very first hour, when the Siq is empty; the sun reaches the Treasury mid-morning.",
        "tempo": "45 minutes",
        "costo": "JOD 50 for 1 day, 55 for 2, 60 for 3 if you stay at least one night in Jordan; JOD 90 as a day trip without an overnight stay (2026). Included in the Jordan Pass.",
        "consiglio": "We found it almost deserted: seeing the Treasury appear from the Siq without a crowd is worth the trip on its own.",
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Street of Facades and Theater",
        "testo": "After the Treasury the valley opens onto rock-cut tombs and the Nabataean theatre carved into the stone, which could hold about 8,500 people.",
        "come": "On foot from the Treasury, all flat.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "costo": "Included in the Jordan Pass"
      },
      {
        "nome": "Royal Tombs",
        "testo": "A group of monumental tombs cut into the mountain: the Urn Tomb, the Silk Tomb, the Corinthian Tomb and the Palace Tomb. In the Urn Tomb you can enter the great hall.",
        "come": "A few minutes on foot from the theater.",
        "quando": "Afternoon, when the red light lights up the walls.",
        "tempo": "45 minutes",
        "costo": "Included in the Jordan Pass"
      },
      {
        "nome": "Monastery (Ad-Deir)",
        "testo": "A façade about 45 metres high, larger than the Treasury and plainer. You reach it by a path of nearly 800 rock-cut steps.",
        "come": "You start from the bottom of the valley, past Qasr al-Bint: about 40 minutes uphill. Along the way there are stalls and a kiosk facing the monument.",
        "quando": "After midday, when the sun is on the facade (in the morning it is in shade).",
        "tempo": "2-2.5 hours round trip",
        "costo": "Included in the Jordan Pass",
        "consiglio": "Hiking shoes and water; the mint tea at the kiosk repays the climb."
      },
      {
        "nome": "Little Petra (Siq al-Barid)",
        "testo": "A small canyon about 8 km north of Wadi Musa, with dwellings cut into the sandstone, Nabataean banqueting halls and a large cistern. The Painted Biclinium keeps well-preserved frescoes. Less famous and quieter than Petra.",
        "come": "By taxi or transfer from Wadi Musa. You walk through the canyon.",
        "quando": "Afternoon, the day before Petra.",
        "tempo": "1.5-2 hours",
        "consiglio": "Great for warming up before Petra, with few people.",
        "costo": "Free entry in daytime"
      }
    ],
    programmi: [
      {
        "titolo": "1 day at Petra",
        "tappe": [
          "Enter at opening, Siq and Treasury",
          "Street of Facades and Theater",
          "Royal Tombs",
          "Lunch near Qasr al-Bint",
          "Climb to the Monastery in the early afternoon",
          "Return"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Little Petra and arrival at Wadi Musa",
          "Day 2: Petra as above, with half a day more for the High Place of Sacrifice or for Petra by Night on the evenings it is open"
        ]
      }
    ],
    zone: [
      {
        "nome": "Wadi Musa",
        "perChi": "those who want to enter at opening",
        "testo": "The town below the entrance, with hotels in every range and restaurants. A few minutes from the site on foot or by shuttle."
      },
      {
        "nome": "Little Petra / Beidha",
        "perChi": "those who want silence",
        "testo": "A few camps and guesthouses near the canyon, more isolated and with little going on in the evening."
      }
    ],
    sapori: [
      {
        "nome": "Zarb",
        "testo": "Meat and vegetables cooked in the sand, in some Wadi Musa restaurants on request."
      },
      {
        "nome": "Maqluba",
        "testo": "The upside-down dish of rice and meat, easy to find in the places on the main street."
      },
      {
        "nome": "Hammam",
        "testo": "At the end of the day a Turkish bath in Wadi Musa loosens the legs after the steps."
      },
      {
        "nome": "Cardamom and sage tea",
        "testo": "Served by the Bedouin along the paths of the site."
      }
    ],
    attenzioni: [
      "For horses, camels and donkeys always agree the price before getting on, even when you are told it is included.",
      "For the animals' welfare, it is better to walk up to the Monastery.",
      "Bring water and a hat: there are few water points in the site and in summer it is very hot.",
      "Petra by Night runs only on some evenings: check the schedule on official channels."
    ],
    // GUIDA-END
    esperienzeSlugs: ['salita-monastero-petra', 'hammam-wadi-musa'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'The whole facade of the Treasury of Petra, with the pediment and the two orders of columns carved into the pink rock, Jordan',
    immagine: '/images/meraviglie/petra-tesoro-facciata-riccardo.jpg',
  },
  {
    slug: 'wadi-rum',
    paeseSlug: 'giordania',
    ordine: 6,
    nome: 'Wadi Rum',
    tipologia: ['deserto', 'avventura'],
    giorniConsigliati: '1 day and one night',
    visitataPersonalmente: true,
    introduzione: 'The "Valley of the Moon": a desert of red sand and sandstone formations that served as the set for Lawrence of Arabia. We explored it by camel and by jeep, with a New Year\'s night under the stars.',
    percheAndarci: "After Petra it's the second great protagonist of the trip, and together with Petra the thing not to miss in Jordan.",
    cosaVedere: [
      "Lawrence's Spring",
      'The Khazali canyon with its Nabataean rock carvings',
      'The red dunes and natural rock bridges like Umm Fruth',
      "Lawrence's House",
      "The New Year's starry sky, far from any light pollution",
    ],
    cosaFare: [
      '45-minute camel ride (20 JOD)',
      '4-6 hour jeep safari on the classic Bedouin pickups',
      'Sandboarding on the dunes',
      'Driving the jeep in the desert yourself (for those who feel up to it)',
      'An improvised beach volleyball game on the sand',
      'Typical Bedouin dinner (often zarb, cooked under the sand)',
      "New Year's party in the desert",
      'Sunrise on the dunes the next morning',
    ],
    doveDormire:
      "I slept in a tented camp in the desert, whose name I didn't note: a classic Bedouin tent, dinner and breakfast included, a starry sky without equal.\n\nBasic camp, shared bathroom: Wadi Rum Bedouin Camp, Bedouin Lifestyle Camp · private tent with bathroom: Wadi Rum Serenity Camp, Zeina Desert Lodge · luxury desert camp: Sun City Camp (famous for its \"martian domes\"), Palmera Camp (tents and panoramic bubbles with private bathroom).",
    doveMangiare: 'Typical Bedouin dinner at the tented camp; for the packed lunch, a stop at a local bakery or pastry shop (10 JOD).',
    comeArrivare: 'About 1h30 transfer from Wadi Musa/Petra.',
    comeSpostarsi: 'A 4x4 jeep with a Bedouin guide, a camel for the initial stretch in the desert.',
    periodoMigliore: "the New Year period, for the party in the desert under the stars; sunrise for the best light on the dunes",
    costi: 'Camel ride 20 JOD; packed lunch 10 JOD.',
    erroriDaEvitare: [],
    miaEsperienza:
      "The jeep safari among canyons and red dunes, the sandboarding, the sunset on the dunes on arrival at the camp and then the New Year's party under one of the most beautiful starry skies I've ever seen: hard to imagine a more absurd way of saying goodbye to the old year. Together with Petra, it's the thing not to miss on the trip to Jordan.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Jeep safari among canyons and dunes",
        "testo": "The normal way to see the desert, UNESCO World Heritage since 2011: a Bedouin pick-up with a guide, among red sandstone formations, canyons and dunes. Classic stops are Lawrence's Spring, with Nabataean inscriptions on the rock, Khazali Canyon with rock carvings of people and antelopes, and a rock bridge.",
        "come": "Leave from Rum village with the camp's guide or from the visitor center. The trip is priced by length and agreed in advance.",
        "quando": "A tour of 4-6 hours, starting in the morning or in the afternoon for the sunset.",
        "tempo": "4-6 hours",
        "costo": "Protected area entry JOD 5 for foreigners or included in the Jordan Pass (2026); the jeep tour is paid separately",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Ask that the tour includes a sunset on the dunes."
      },
      {
        "nome": "Camel in the desert",
        "testo": "A walk of about 45 minutes on camelback, in the traditional way.",
        "come": "Arranged from the camp.",
        "quando": "Dawn or sunset.",
        "tempo": "45 minutes",
        "costo": "20 JOD (from my trip)"
      },
      {
        "nome": "Night in a tented camp",
        "testo": "The Bedouin camp with dinner cooked under the sand (zarb), music and a sky with no lights. Tents range from the simplest to transparent bubbles.",
        "come": "The jeep transfer leaves from the village.",
        "quando": "One night, better two if you want time to walk.",
        "tempo": "One night",
        "consiglio": "Bring a sweater: at night the temperature drops even in spring."
      }
    ],
    programmi: [
      {
        "titolo": "1 day and one night",
        "tappe": [
          "Arrival from Petra or Aqaba, jeep to the camp",
          "4-6 hour tour among canyons and dunes",
          "Sunset, Bedouin dinner and starry sky",
          "Dawn on the dunes and return"
        ]
      }
    ],
    zone: [
      {
        "nome": "Traditional tented camp",
        "perChi": "those who want the Bedouin experience",
        "testo": "Simple tents, shared bathroom, dinner and breakfast included. Little electricity: charge your phones beforehand."
      },
      {
        "nome": "Camp with private bathroom",
        "perChi": "those who want more comfort",
        "testo": "Tents and bubbles with bathroom, sometimes with air conditioning. They cost more."
      },
      {
        "nome": "Rum village",
        "perChi": "those who do not want to sleep in the desert",
        "testo": "Simple guesthouses at the foot of the valley, from where the tours leave."
      }
    ],
    sapori: [
      {
        "nome": "Zarb",
        "testo": "Lamb, chicken and vegetables cooked for hours in an oven under the sand, served in the evening at the camp."
      },
      {
        "nome": "Bedouin tea",
        "testo": "With sage, sugar and embers; you drink it every time you arrive at a tent."
      },
      {
        "nome": "Bread baked on embers",
        "testo": "Thin, made on the fire by the camp hosts."
      },
      {
        "nome": "Mansaf",
        "testo": "Lamb with rice and salty yogurt, in some camps for festive evenings."
      }
    ],
    attenzioni: [
      "Jeep tour prices vary a lot between camps: agree the price beforehand and compare.",
      "At night it is cold even in spring and autumn: bring heavy clothing.",
      "Do not wander off alone from the camp in the evening, the tracks vanish in the dark.",
      "Sandstorms can cancel tours: leave a margin in the plan."
    ],
    // GUIDA-END
    esperienzeSlugs: ['jeep-safari-wadi-rum', 'capodanno-deserto'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'A young Bedouin with a keffiyeh over his face in front of the red rocks of Wadi Rum, Jordan',
    immagine: '/images/giordania/wadi-rum-beduino-riccardo.jpg',
  },
  {
    slug: 'aqaba',
    paeseSlug: 'giordania',
    ordine: 7,
    nome: 'Aqaba',
    tipologia: ['mare', 'relax'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: 'From the desert to the Red Sea in less than an hour: beach clubs, water sports, snorkeling and diving before heading back to Amman.',
    percheAndarci: "It's one of the loveliest contrasts in Jordan: you close the most intense part of the trip with a day at the sea.",
    cosaVedere: ['The coral reefs of the Red Sea'],
    cosaFare: [
      'Beach club',
      'Water sports (jet ski, banana boat)',
      'Snorkeling on the coral reefs',
      'Diving (arranged independently)',
      'Boat tour with Deep Blue (included in the package)',
    ],
    doveDormire:
      "I slept in an ordinary hotel, whose name I didn't note, convenient for its closeness to the beach and the waterfront.\n\nBudget: Days Inn Hotel & Suites Aqaba, Extra Traveller (hostel) · mid-range: Golden Tulip Aqaba, Bratus Hotel Aqaba · more luxurious: Kempinski Hotel Aqaba, Mövenpick Resort & Spa Aqaba.",
    doveMangiare: 'Sheikh El Harah (seafood specialties), Suzana, Buffalo Wings & Ring (American cuisine), Khubza & Seneya (Al Nahda Street).',
    comeArrivare: 'About 1h transfer from Wadi Rum.',
    comeSpostarsi: 'Transfer to the beach (15 minutes from the hotel).',
    periodoMigliore: 'a sunny day, after sunrise in the desert',
    costi: 'Boat tour with Deep Blue included in the package.',
    erroriDaEvitare: [],
    miaEsperienza:
      "In Aqaba we also went diving: pleasant, but nothing special compared to other Red Sea spots more famous for diving (Egypt above all). It remains a nice day to unwind after the desert, between snorkeling and water sports.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Snorkeling and diving",
        "testo": "The Red Sea a few hours from the desert, with coral reefs close to shore and warm water. There is also the wreck of the Cedar Pride, one of the best-known dive sites.",
        "come": "Book a diving center or a boat from the marina.",
        "quando": "All year, but spring and autumn are the best months.",
        "tempo": "Half a day",
        "consiglio": "I found the dives pleasant but less spectacular than other points of the Red Sea."
      },
      {
        "nome": "Seafront and beaches",
        "testo": "The centre has a seafront with cafes and the public beach; further south are the equipped beaches of the resorts and the marine park. In town you dress modestly; swimwear is fine inside the facilities.",
        "come": "By taxi from the main hotels.",
        "quando": "All day, especially in the afternoon.",
        "tempo": "Half a day"
      },
      {
        "nome": "Aqaba Fort and museum",
        "testo": "The Mamluk fort built in the early 16th century by Sultan Qansuh al-Ghuri. In 1917 the Arab forces, with Lawrence, took Aqaba from the Ottomans. The city's archaeological museum is in the Jordan Pass.",
        "come": "In the centre, near the seafront.",
        "quando": "Castle open 8am-5pm, museum 8am-5:15pm (2026). Late afternoon, before sunset over the sea.",
        "tempo": "45 minutes",
        "costo": "Included in the Jordan Pass",
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: boat tour with snorkeling",
          "Seafood lunch in the center",
          "Afternoon at the beach",
          "Dinner on the seafront"
        ]
      }
    ],
    zone: [
      {
        "nome": "Center and seafront",
        "perChi": "those who want to be on foot",
        "testo": "Mid-range hotels and restaurants near the sea."
      },
      {
        "nome": "Resorts on the south coast",
        "perChi": "those who want beach and diving",
        "testo": "Luxury resorts with private beach and dive center, far from the center."
      }
    ],
    sapori: [
      {
        "nome": "Grilled fish",
        "testo": "In the seafront restaurants, grilled over coals with salad sides."
      },
      {
        "nome": "Sayadieh",
        "testo": "Fish with spiced rice and caramelized onions, a typical Aqaba dish."
      },
      {
        "nome": "Falafel",
        "testo": "In the places in the center, for a cheap lunch."
      },
      {
        "nome": "Fresh fruit juices",
        "testo": "Sold at the seafront kiosks."
      }
    ],
    attenzioni: [
      "Outside resort beaches a swimsuit is not appropriate: use a cover-up.",
      "The sun on the sea is strong all year: high protection and water."
    ],
    // GUIDA-END
    esperienzeSlugs: ['diving-aqaba'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'The coast of Aqaba on the Red Sea, Jordan',
    immagine: '/images/giordania/aqaba-stock.jpg',
  },
]
