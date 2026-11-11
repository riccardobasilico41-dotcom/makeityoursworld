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
    comeArrivare: "You land at Queen Alia (AMM), about 35 km south of the city. The Sariyah Airport Express bus costs about 3.50 JOD (about €4), ticket on board, and reaches 7th Circle and Tabarbour station in 45-60 minutes, every 30 minutes during the day with less frequent runs at night. The official yellow taxi, from the rank outside arrivals, costs about 25-30 JOD to the centre; Uber and Careem about 15-25 JOD. Avoid drivers who approach passengers inside the terminal. For the flight home, arrive three hours early: security checks start at the terminal entrance.",
    comeSpostarsi: 'Arranged transfers, on foot in the center.',
    periodoMigliore: 'December-January',
    costi: "Low budget about €40-60 per person per day (hostel or simple hotel Downtown, falafel and hummus, bus and plenty of walking); mid €90-140 (hotel in Jabal Amman, restaurants, taxis and apps); high €220 and up (international hotels in Abdali, terrace dinners, driver). Dinner at Zajal about 15 JOD; Citadel 3 JOD and Roman Theater 2 JOD, both included in the Jordan Pass (70-80 JOD); Jordan Museum 5 JOD; desert buggy near Amman 40 JOD (alternative option for Day 7). One dinar is about €1.20.",
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
        "costo": "3 JOD, about €3.50, for foreigners, or included in the Jordan Pass (2026)",
        "orari": "8am-5pm (2026)",
        "lat": 31.9547,
        "lng": 35.9343,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Take a taxi up and walk down towards the Roman theater: it is downhill and ends in the center."
      },
      {
        "nome": "Roman Theater",
        "testo": "A 2nd-century theatre from the time of Antoninus Pius, cut into the hillside, with about 6,000 seats. On either side of the entrance are two small museums, the Folklore Museum and the Museum of Popular Traditions. You climb the tiers and look down on the square.",
        "come": "In the heart of the center, on foot from the souqs and Rainbow Street.",
        "quando": "Open 8am-5pm (2026). Morning or late afternoon, when the steps are in shade.",
        "tempo": "45 minutes",
        "costo": "2 JOD, about €2.50, including the two museums, or included in the Jordan Pass (2026)",
        "orari": "8am-5pm (2026)",
        "lat": 31.95169,
        "lng": 35.93931,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Museum of Popular Traditions",
        "testo": "Two small museums in the wings of the Roman Theater: the Museum of Popular Traditions, with traditional dress, jewellery and household objects, and the Folklore Museum, devoted to Bedouin and village life. Half an hour is enough, on the same visit as the theater.",
        "come": "On either side of the Roman Theater entrance.",
        "quando": "Together with the theater.",
        "tempo": "30-45 minutes",
        "costo": "Included in the theater ticket and the Jordan Pass (2026)",
        "orari": "8am-5.15pm (2026)",
        "lat": 31.95169,
        "lng": 35.93931,
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
        "nome": "Al-Husseini Mosque",
        "testo": "The main mosque of the old centre and the landmark of Downtown: around it open the souqs, the fruit market and the streets of gold shops.",
        "come": "A few minutes on foot from the Roman Theater. Non-Muslims look from outside or ask at the entrance whether they may go in, outside prayer times.",
        "quando": "Outside prayer times, avoiding Friday midday.",
        "tempo": "15 minutes",
        "lat": 31.9497,
        "lng": 35.9347
      },
      {
        "nome": "Roman Nymphaeum",
        "testo": "The great public fountain of ancient Philadelphia, from the 2nd century, a short walk from the theater and the Al-Husseini Mosque. The arches and niches of the façade survive, in the middle of the downtown traffic.",
        "come": "On foot, between the Roman Theater and the Al-Husseini Mosque.",
        "quando": "During the day, while walking around Downtown.",
        "tempo": "15 minutes",
        "lat": 31.95033,
        "lng": 35.93617
      },
      {
        "nome": "Rainbow Street",
        "testo": "A pedestrian street in the Jabal Amman district, with cafes, restaurants with terraces, bookshops and craft stores. You come in the evening, when it fills with young people.",
        "come": "Taxi from the centre or on foot from the Roman theatre, uphill.",
        "quando": "After sunset, especially on Thursday and Friday evenings.",
        "tempo": "2-3 hours",
        "lat": 31.95062,
        "lng": 35.92311,
        "consiglio": "Pick a place with a terrace on the slope: the view of the lit-up city is the best part."
      },
      {
        "nome": "Jordan Museum",
        "testo": "The national museum, in the Ras al-Ain district, with fragments of the Dead Sea Scrolls and the 'Ain Ghazal statues, among the oldest large-scale human figures. The route runs from prehistory to modern times and is the right place to understand the country before or after the tour.",
        "come": "Taxi or Uber from the centre, a few minutes.",
        "quando": "On the morning of departure, if the flight is in the afternoon.",
        "tempo": "1.5-2 hours",
        "costo": "5 JOD, about €6, for non-Jordanians (2026)",
        "lat": 31.94565,
        "lng": 35.92652,
        "url": "https://jordanmuseum.jo"
      },
      {
        "nome": "King Abdullah I Mosque",
        "testo": "The mosque with the large blue dome, built in the late 1980s and dedicated to the founder of the kingdom. It is among the Amman mosques most used to non-Muslim visitors.",
        "come": "Taxi from the centre, towards Abdali. Enter with arms and legs covered; women are asked to cover their hair.",
        "quando": "Outside prayer times; avoid Friday midday.",
        "tempo": "30-45 minutes",
        "lat": 31.9616,
        "lng": 35.9131
      },
      {
        "nome": "Jabal al-Weibdeh",
        "testo": "One of the oldest neighbourhoods in the city, on the hill facing the Citadel, with stone houses from the first half of the 20th century, galleries and cafés popular with artists and students. Around Paris Circle you can spend an afternoon with no plan.",
        "come": "Uphill on foot from Downtown, or by taxi.",
        "quando": "Afternoon and evening.",
        "tempo": "1-2 hours",
        "lat": 31.95556,
        "lng": 35.92778
      },
      {
        "nome": "Darat al Funun",
        "testo": "A centre for contemporary Arab art in a group of historic villas in Jabal al-Weibdeh, with exhibitions, a terraced garden and the remains of a Byzantine church. It is one of the quietest places in the city, with a view over Downtown.",
        "come": "On foot from Jabal al-Weibdeh; the main entrance is on Nadeem al Mallah Street.",
        "quando": "Afternoon, with the light on the garden.",
        "tempo": "1 hour",
        "orari": "Saturday to Thursday 10am-7pm; closed on Fridays, in August and on public holidays; during Ramadan it closes at 3pm",
        "url": "https://daratalfunun.org"
      },
      {
        "nome": "Abdali and the Boulevard",
        "testo": "The new district of towers and malls, with the pedestrian Boulevard full of restaurants and chain stores. It lacks the character of the old centre, but shows the other face of the capital.",
        "come": "Taxi or Uber from the centre, about ten minutes.",
        "quando": "In the evening.",
        "tempo": "1-2 hours",
        "lat": 31.96444,
        "lng": 35.90639
      },
      {
        "nome": "Royal Automobile Museum",
        "testo": "The royal family's collection of cars and motorbikes, from 1920s vehicles to those of King Hussein, a keen motorist. It appeals even to those who don't follow cars, because it tells the country's history through its kings.",
        "come": "Taxi or Uber: it is in King Hussein Park, west of the centre.",
        "quando": "During the hot hours, indoors.",
        "tempo": "1 hour",
        "costo": "5 JOD, about €6; 7 JOD with the audio guide (2026)",
        "lat": 31.9842,
        "lng": 35.8257
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Citadel, Roman Theater with its two museums, Nymphaeum and the Downtown souqs",
          "Evening: dinner and bars on Rainbow Street",
          "Day 2: Jordan Museum in the morning, then the King Abdullah I Mosque",
          "Afternoon: Jabal al-Weibdeh and Darat al Funun (closed on Fridays)",
          "Evening: Abdali Boulevard, or back downtown for kunafa"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: day trip to Jerash in the morning, back in the afternoon",
          "Alternatively: Madaba and Mount Nebo, or an afternoon at the Dead Sea with a sunset swim"
        ]
      }
    ],
    zone: [
      {
        "nome": "Downtown / Al-Balad",
        "perChi": "those who want to be among souqs and theater",
        "testo": "You walk to almost everything and eat very well for little. In the evening it is noisy and less polished, and the hotels are basic.",
        "fascia": "€25-70"
      },
      {
        "nome": "Jabal Amman / Rainbow Street",
        "perChi": "those who want bars and a livable neighborhood",
        "testo": "Quieter, with restaurants and cafes close by. The streets are steep and the hotels cost more.",
        "fascia": "€70-140"
      },
      {
        "nome": "Abdali",
        "perChi": "business travelers or those who want modern hotels",
        "testo": "A new district of skyscrapers and international chains. Comfortable and well kept, but without character.",
        "fascia": "€100-250"
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
    gite: [
      {
        "nome": "Jerash",
        "distanza": "about 1 hour by car",
        "come": "Car with driver, taxi for the day or organised tour.",
        "testo": "One of the best-preserved Roman cities outside Italy, with the oval forum, the colonnaded cardo and two theaters. Entry is included in the Jordan Pass; arrive early, before the groups."
      },
      {
        "nome": "Madaba and Mount Nebo",
        "distanza": "Madaba about 45 minutes, Mount Nebo half an hour further",
        "come": "Car or taxi for the day; it pairs well with the Dead Sea.",
        "testo": "Madaba is the city of mosaics, with the Byzantine map of the Holy Land in the Church of St George; Mount Nebo has the basilica of mosaics and the view over the Jordan Valley. Madaba Archaeological Park 3 JOD, Mount Nebo 3 JOD."
      },
      {
        "nome": "Dead Sea",
        "distanza": "about 1 hour by car",
        "come": "Car or taxi; many resorts sell day passes to their beach and pools.",
        "testo": "You float in the hypersaline water at the lowest point on earth and watch the sunset over the hills of the West Bank. Keep the water away from face and eyes, and don't go in with cuts or right after shaving."
      },
      {
        "nome": "Desert castles",
        "distanza": "east of Amman, a good half day",
        "come": "By car with driver or rental: the most practical way.",
        "testo": "Qasr al-Kharrana, Qusayr Amra with its Umayyad frescoes and the fort of Azraq, in the eastern desert. Entry 3 JOD or included in the Jordan Pass; Kharrana is open 8am-5pm."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Amman?",
        "risposta": "One day is enough for the Citadel, the Roman Theater, Downtown and Rainbow Street. Two add the Jordan Museum and Jabal al-Weibdeh; with three, use the city as a base for Jerash or the Dead Sea."
      },
      {
        "domanda": "Is the Jordan Pass worth it?",
        "risposta": "Almost always: it costs 70, 75 or 80 JOD depending on the days at Petra (2026), covers the visa fee if you stay at least two full nights and includes entry to more than 40 sites, among them the Citadel and the Roman Theater. Buy it online before arriving."
      },
      {
        "domanda": "How do you get from the airport to central Amman?",
        "risposta": "The Sariyah Airport Express bus costs about 3.50 JOD and reaches 7th Circle and Tabarbour in 45-60 minutes; the official yellow taxi costs about 25-30 JOD, Uber and Careem about 15-25 JOD."
      },
      {
        "domanda": "Where is the best area to stay in Amman?",
        "risposta": "Downtown to spend little and walk between the souqs and the theater; Jabal Amman, around Rainbow Street, for a quieter area with restaurants; Abdali for modern hotels and international chains."
      },
      {
        "domanda": "What changes on Fridays in Amman?",
        "risposta": "Friday is the day of rest: many downtown shops open only after midday prayers, Darat al Funun is closed and mosques are best avoided at that time."
      },
      {
        "domanda": "Is Amman a good base for day trips?",
        "risposta": "Yes: Jerash and the Dead Sea are about an hour away, Madaba and Mount Nebo a little more, and you are back in the evening. For Petra and Wadi Rum it is better to move and sleep there."
      }
    ],
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
    comeArrivare: "About 1h transfer from Amman, with a stop to buy alcohol along the way. Jerash is about 50 km north of the capital: you get there by rental car, by taxi for the day or on an organised tour. The car park and ticket office are next to Hadrian's Arch, at the southern entrance of the site.",
    comeSpostarsi: 'On foot inside the archaeological site.',
    periodoMigliore: 'morning, before the heat and the organized groups',
    costi: "Admission included in the Jordan Pass. Without the pass the ticket costs 10 JOD (about €12), museum included (2026). Low budget about €40-60 a day per person (minibus or shared taxi from Amman, falafel and hummus); mid €80-120 (taxi for the day with Ajloun, restaurant lunch); high from €180 (private driver and guide).",
    erroriDaEvitare: [],
    miaEsperienza:
      "Jerash was a nice surprise: one of the best-preserved Roman cities I've ever seen, with the colonnaded cardo stretching out of sight. Much more than a pass-through stop.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hadrian's Arch and the Hippodrome",
        "testo": "The monumental southern gateway, built for Emperor Hadrian's visit in 129-130. Just beyond is the hippodrome, which could seat about 15,000 spectators for chariot races.",
        "come": "The parking lot is next to the arch; the ticket office is close by.",
        "quando": "Open 8am-5pm (2026). Best early in the morning, before the groups.",
        "tempo": "30 minutes",
        "costo": "10 JOD (about €12) for foreign visitors, museum included; included in the Jordan Pass (2026)",
        "orari": "Daily 8am-5pm (2026).",
        "lat": 32.27222,
        "lng": 35.89111,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Oval Forum and Cardo Maximus",
        "testo": "The oval square ringed by Ionic columns and, from there, the long colonnaded street that crosses the ancient city.",
        "come": "You walk it from south to north.",
        "quando": "Early morning and late afternoon for the light on the columns.",
        "tempo": "1 hour",
        "costo": "Included in the Jerash ticket",
        "orari": "With the site, 8am-5pm.",
        "lat": 32.27748,
        "lng": 35.89072,
        "consiglio": "Look at the paving of the cardo: the stones are still the original ones and you can see the ruts worn by chariots."
      },
      {
        "nome": "South Theater and Temple of Artemis",
        "testo": "The large theatre, with more than 3,000 seats, where a voice from the centre of the orchestra carries to every tier, and pipers and drummers often play; then the sanctuary of Artemis on the highest level, with columns visible from afar.",
        "come": "From the forum you climb to the theatre, then to the temple on the hill.",
        "quando": "Late morning, when the light is high and the theater resonates.",
        "tempo": "1 hour",
        "costo": "Included in the Jerash ticket",
        "orari": "With the site, 8am-5pm.",
        "lat": 32.27669,
        "lng": 35.88945
      },
      {
        "nome": "Hippodrome",
        "testo": "The chariot-racing track, almost 250 metres long, just past Hadrian's Arch. The stands have been partly rebuilt and you walk on the track itself.",
        "come": "On foot from Hadrian's Arch, on the left before the ticket office.",
        "quando": "At the start of the visit, in the morning.",
        "tempo": "20 minutes",
        "costo": "Included in the Jerash ticket",
        "orari": "With the site, 8am-5pm.",
        "lat": 32.27297,
        "lng": 35.89109
      },
      {
        "nome": "Temple of Zeus",
        "testo": "The sanctuary on the hill above the Oval Forum, rebuilt in the 2nd century over an older place of worship. The podium, a few columns and the view down over the plaza and the cardo remain.",
        "come": "From the Oval Forum, a short ramp on the left side of the plaza.",
        "quando": "Morning, before the South Theatre next door.",
        "tempo": "20 minutes",
        "costo": "Included in the Jerash ticket",
        "orari": "With the site, 8am-5pm.",
        "lat": 32.2768,
        "lng": 35.89033
      },
      {
        "nome": "Nymphaeum",
        "testo": "The great monumental fountain on the cardo, dedicated to the nymphs and built in 191, with two tiers of niches and the basin below. It was originally faced with marble, and water poured from lion-head spouts.",
        "come": "Along the cardo, halfway between the Oval Forum and the North Theatre.",
        "quando": "Afternoon, with the sun on the façade.",
        "tempo": "15 minutes",
        "costo": "Included in the Jerash ticket",
        "orari": "With the site, 8am-5pm.",
        "lat": 32.28057,
        "lng": 35.89221
      },
      {
        "nome": "Cathedral and Byzantine churches",
        "testo": "Behind the Nymphaeum, steps lead up to the 4th-century cathedral and, a little further, to the Church of St Theodore and a group of churches with mosaic floors. They show the Christian city that replaced the Roman one.",
        "come": "Up the staircase next to the Nymphaeum, on foot.",
        "quando": "Late morning or afternoon.",
        "tempo": "30-45 minutes",
        "costo": "Included in the Jerash ticket",
        "orari": "With the site, 8am-5pm.",
        "lat": 32.28056,
        "lng": 35.89164
      },
      {
        "nome": "North Theatre",
        "testo": "The smaller theatre, opened in 165 and later enlarged, also used for city council meetings. Greek names carved into the stone can still be read on the lowest rows.",
        "come": "At the end of the cardo, turning left onto the north decumanus.",
        "quando": "End of the visit, in the afternoon, when it is quieter.",
        "tempo": "20 minutes",
        "costo": "Included in the Jerash ticket",
        "orari": "With the site, 8am-5pm.",
        "lat": 32.2826,
        "lng": 35.89221
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
      },
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Jerash at opening time, from Hadrian's Arch to the North Theatre",
          "Lunch in the modern town",
          "Afternoon: Ajloun Castle",
          "Back to Amman for dinner"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Jerash and Ajloun Castle",
          "Night in Amman or Ajloun",
          "Day 2: Umm Qais, with the view over the Sea of Galilee",
          "Back to Amman"
        ]
      }
    ],
    zone: [
      {
        "nome": "Amman",
        "perChi": "those who visit as a day trip",
        "testo": "Jerash is about 50 km from Amman, so you go with a driver or on a tour. Sleeping in the capital is easier.",
        "fascia": "25-140 €"
      },
      {
        "nome": "Jerash town",
        "perChi": "those who want to see it at dawn",
        "testo": "A few simple hotels near the site, useful to enter at opening before the groups."
      },
      {
        "nome": "Ajloun",
        "perChi": "those adding the castle and the north",
        "testo": "A small town in the wooded hills about 25 km from Jerash, with a few simple hotels and guesthouses. Handy for a night between Jerash and Umm Qais."
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
    gite: [
      {
        "nome": "Ajloun Castle",
        "distanza": "about 25 km, 40 minutes by car",
        "come": "By car or taxi heading west; easy to pair with Jerash on the same day.",
        "testo": "The Ayyubid fortress from the late 12th century, on a hilltop overlooking the Jordan Valley. Admission 3 JOD (about €3.60), museum included, or with the Jordan Pass; open 8am-5pm."
      },
      {
        "nome": "Umm Qais (Gadara)",
        "distanza": "about 80 km, 1.5 hours by car",
        "come": "By car heading north via Irbid; it takes a full day together with Jerash.",
        "testo": "The Greco-Roman city of Gadara, built in black basalt in the country's north-west corner, with views over the Sea of Galilee and the Golan Heights. Open 8am-5pm, included in the Jordan Pass."
      },
      {
        "nome": "Amman",
        "distanza": "about 50 km, 1 hour by car",
        "come": "Car, taxi or tour; many people visit Jerash as a day trip from the capital.",
        "testo": "The Citadel, the Roman Theatre and Rainbow Street. It is the most convenient base for sleeping, with hotels in every price range."
      }
    ],
    faq: [
      {
        "domanda": "How long does it take to visit Jerash?",
        "risposta": "Three to four hours are enough for the route from Hadrian's Arch to the North Theatre. Another half day adds Ajloun Castle."
      },
      {
        "domanda": "How much is the Jerash entrance fee?",
        "risposta": "10 JOD (about €12) for foreign visitors, museum included (2026). With the Jordan Pass admission is already covered."
      },
      {
        "domanda": "Can Jerash be done as a day trip from Amman?",
        "risposta": "Yes, it is about 50 km and an hour's drive. Go by car, taxi for the day or tour, and be back for dinner."
      },
      {
        "domanda": "What is the best time of day?",
        "risposta": "Opening time at 8am: fewer people and less heat. There is very little shade on the site, so in summer it gets hard after 11am."
      },
      {
        "domanda": "Do you need a guide at Jerash?",
        "risposta": "It is not required: panels explain the main monuments. A guide helps you read the city, but agree the price first."
      },
      {
        "domanda": "What can be combined with Jerash on the same day?",
        "risposta": "Ajloun Castle, about 40 minutes away. With an extra day you can push on to Umm Qais in the far north."
      }
    ],
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
    comeArrivare: "About 1h30 transfer from Jerash. From Amman the road descends for about an hour to the Sweimeh resorts on the north-east shore, where almost all the hotels and beaches with facilities are. There are no convenient scheduled buses: go by rental car, taxi or hotel transfer. Madaba and Mount Nebo are 40 minutes uphill, the Baptism Site a quarter of an hour away.",
    comeSpostarsi: 'On foot in the resort, arranged transfer to Madaba for dinner.',
    periodoMigliore: 'sunset',
    costi: "I didn't note the resort prices: worth comparing them when booking. Low budget about €50-80 a day per person (hotel in Madaba, public beach, local food); mid €120-180 (mid-range resort on the sea, buffet dinner); high from €250 (luxury resort with spa). Baptism Site 12 JOD (about €14.50), Mujib Siq Trail 21 JOD plus tax (about €29), Madaba Archaeological Park 3 JOD or with the Jordan Pass (2026).",
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
        "lat": 31.71765,
        "lng": 35.7942,
        "consiglio": "Pair it with dinner at a restaurant in the old town."
      },
      {
        "nome": "Baptism Site (Bethany beyond the Jordan)",
        "testo": "The place on the Jordan River where tradition sets the baptism of Jesus, UNESCO World Heritage since 2015, about 9 km north of the Dead Sea. You walk past the remains of Byzantine churches down to the river, with the West Bank a few metres away.",
        "come": "By car from the Dead Sea. The standard ticket includes a shuttle and a local guide.",
        "quando": "Entry from 8am; last entry 4pm November-March, 5pm April-October (2026). Best in the morning, before the heat.",
        "tempo": "1.5-2 hours",
        "costo": "12 JOD (about €14.50) for foreign visitors (2026)",
        "orari": "Daily from 8am; last entry 4pm November-March, 5pm April-October (2026).",
        "lat": 31.83722,
        "lng": 35.55028,
        "url": "https://www.baptismsite.com/",
        "consiglio": "Bring a hat and water: the route is almost all in the sun."
      },
      {
        "nome": "Amman Beach",
        "testo": "The best-known public beach with facilities, showers, umbrellas and pools, an alternative to the resorts for those not staying by the sea. At weekends it fills up with Jordanian families.",
        "come": "By car or taxi, among the Sweimeh resorts; pay at the entrance.",
        "quando": "On weekdays, in the afternoon until sunset.",
        "tempo": "2-3 hours",
        "lat": 31.69952,
        "lng": 35.581
      },
      {
        "nome": "Dead Sea Panorama",
        "testo": "A complex on the edge of the escarpment above the sea, with a small museum on the geology, history and environment of the Dead Sea and a terrace overlooking the whole coast. At sunset the light falls on the West Bank opposite.",
        "come": "By car on the road climbing towards Ma'in, about 20 minutes from the resorts.",
        "quando": "Late afternoon, for the view in low light.",
        "tempo": "1 hour",
        "orari": "Museum 9am-5pm (2026).",
        "lat": 31.62954,
        "lng": 35.58436
      },
      {
        "nome": "Wadi Mujib, the Siq Trail",
        "testo": "The best-known water trail in the Mujib Reserve: you go up the river between sandstone walls, walking and at times swimming, to a waterfall. You get wet from head to toe.",
        "come": "From the visitor centre on the coast road, south of the resorts. Shoes that can get wet and nothing that fears water.",
        "quando": "Only in the warm season: in winter the water trails close because of floods.",
        "tempo": "2-3 hours",
        "costo": "21 JOD plus 16% tax, about €29 (2026)",
        "lat": 31.46712,
        "lng": 35.57314,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees",
        "consiglio": "Do not go if it has rained recently in the area: river levels rise quickly."
      },
      {
        "nome": "Hammamat Ma'in",
        "testo": "The hot springs in a gorge above the Dead Sea, with waterfalls of hot water running down the rocks. Part is reserved for a resort, the rest is open to the public with a ticket.",
        "come": "By car from Madaba or the Dead Sea, on a winding road.",
        "quando": "In winter, when the hot water is a pleasure; in summer it is very hot.",
        "tempo": "2-3 hours",
        "lat": 31.60947,
        "lng": 35.61046
      },
      {
        "nome": "Madaba Archaeological Park",
        "testo": "In the centre of Madaba, an area with a stretch of Roman road, the Church of the Virgin and the Hippolytus Hall with its mosaics, plus the museum. It rounds off the visit to the St George map well.",
        "come": "On foot from St George's Church, a few minutes.",
        "quando": "Morning, together with the mosaic map.",
        "tempo": "1 hour",
        "costo": "3 JOD (about €3.60), museum included; included in the Jordan Pass (2026)",
        "orari": "8am-4pm (2026).",
        "lat": 31.71615,
        "lng": 35.7955,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Museum at the Lowest Place on Earth and Lot's Cave",
        "testo": "At Ghor es-Safi, on the southern shore, a museum tells the story of the lowest area on the planet. Above it, on a slope, are the cave and the remains of the Byzantine monastery that tradition links to Lot.",
        "come": "By car along the Dead Sea road heading south, about an hour and a half from the resorts; a staircase climbs to the cave.",
        "quando": "Morning, before the valley heat gets heavy.",
        "tempo": "1.5 hours",
        "costo": "Museum 2 JOD (about €2.40), included in the Jordan Pass (2026)",
        "orari": "Museum 8am-5:15pm (2026).",
        "lat": 31.05043,
        "lng": 35.5023,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Madaba, the mosaic map and the archaeological park, then a swim in the Dead Sea at sunset",
          "Day 2 morning: Baptism Site",
          "Day 2 afternoon: Dead Sea Panorama and sunset from the terrace"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Madaba and a sunset swim",
          "Day 2: Baptism Site and Hammamat Ma'in",
          "Day 3: Wadi Mujib (Siq Trail, in the warm season) and the Museum at the Lowest Place on Earth, then on to Karak"
        ]
      }
    ],
    zone: [
      {
        "nome": "Resorts on the sea",
        "perChi": "those who want direct beach access",
        "testo": "Comfortable, with pools and spas. Food and drink prices are high and you often cannot bring food in from outside.",
        "fascia": "90-150 €"
      },
      {
        "nome": "Madaba",
        "perChi": "those who want to spend less",
        "testo": "Simpler hotels and local restaurants, with about an hour of transfer to the sea.",
        "fascia": "40-80 €"
      },
      {
        "nome": "Luxury resorts in Sweimeh",
        "perChi": "those after a spa and polished service",
        "testo": "The five-star hotels on the same stretch of coast, with larger beaches, more pools and spas. Food and drink are expensive too.",
        "fascia": "170-350 €"
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
    gite: [
      {
        "nome": "Mount Nebo",
        "distanza": "about 30 km, 40 minutes by car",
        "come": "By car, climbing towards Madaba; easy to pair with the town.",
        "testo": "The ridge from which, according to tradition, Moses saw the Promised Land, with the memorial and Byzantine mosaics. Admission 3 JOD (about €3.60)."
      },
      {
        "nome": "Amman",
        "distanza": "about 1 hour by car",
        "come": "Car, taxi or shuttle to the capital.",
        "testo": "The Citadel, the Roman Theatre and the downtown souqs. Go and come back in a day, or use Amman as a base."
      },
      {
        "nome": "Karak Castle",
        "distanza": "about 1.5 hours by car",
        "come": "By car south along the coast, then up onto the plateau.",
        "testo": "The great Crusader fortress above the town of Karak. Admission 2 JOD (about €2.40), museum included, or with the Jordan Pass; open 8am-5pm."
      }
    ],
    faq: [
      {
        "domanda": "Can you swim in the Dead Sea without staying at a resort?",
        "risposta": "Yes: Amman Beach and the other public beaches with facilities charge a day entrance, and many resorts sell a day pass for beach and pools."
      },
      {
        "domanda": "How long can you stay in the water?",
        "risposta": "Ideally no more than 15-20 minutes at a time, then a fresh-water shower. The salt stings eyes, cuts and freshly shaved skin."
      },
      {
        "domanda": "When is the best time for the Dead Sea?",
        "risposta": "October to April, with mild days. In summer, at this altitude, temperatures easily pass 40°C."
      },
      {
        "domanda": "Is Wadi Mujib open all year?",
        "risposta": "No: water trails such as the Siq Trail open only in the warm season and close in winter because of flood risk. The Siq ticket costs 21 JOD plus tax."
      },
      {
        "domanda": "Is the Dead Sea in the Jordan Pass?",
        "risposta": "Swimming is not, since you pay the beach or resort. The Madaba Archaeological Park and the Museum at the Lowest Place on Earth are included."
      },
      {
        "domanda": "Is it better to sleep at the Dead Sea or in Madaba?",
        "risposta": "By the sea for the sunset swim and rest; in Madaba to spend less and eat in town, with about an hour's drive to the beach."
      }
    ],
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
    comeArrivare: "About 1h30 transfer from Madaba to Karak; Mount Nebo is a later stop along the way to Little Petra. Mount Nebo is a few kilometres from Madaba, while Karak is reached from the north on the King's Highway, crossing the Mujib canyon, or from the Dead Sea climbing up onto the plateau. From Karak the King's Highway continues south to Shobak and Wadi Musa. The most flexible option is a rental car or a driver for the day.",
    comeSpostarsi: 'On foot inside the Karak fortress.',
    periodoMigliore: 'morning',
    costi: "Admission to Karak included in the Jordan Pass. Without the pass: Karak Castle 2 JOD (about €2.40), Mount Nebo 3 JOD (about €3.60), Shobak Castle 1 JOD, Dana Reserve 10 JOD plus tax (2026). Low budget about €40-60 a day per person (simple hotel in Karak or Madaba, local eateries); mid €90-140 (rental car or shared driver, mid-range hotel); high from €200 (private driver and guide).",
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
        "costo": "2 JOD (about €2.40), museum included; included in the Jordan Pass (2026)",
        "orari": "Daily 8am-5pm (2026).",
        "lat": 31.18056,
        "lng": 35.70139,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Mount Nebo",
        "testo": "The ridge, at about 700 metres, from which according to the Bible Moses saw the Promised Land. There is the memorial with Byzantine mosaics, reopened in 2016, and Gian Paolo Fantoni's serpent sculpture.",
        "come": "It is just outside Madaba, on the road towards the Dead Sea. You drive up to the car park.",
        "quando": "A clear day, when you see the Jordan Valley and Jericho, and on a very clear day Jerusalem.",
        "tempo": "45 minutes",
        "costo": "3 JOD (about €3.60) for foreign visitors (2026)",
        "lat": 31.76667,
        "lng": 35.725,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Shobak Castle",
        "testo": "The Crusader castle of Montréal, built in 1115 by Baldwin I on an isolated hill. Little of the original survives and the interior is in ruins, with inscriptions from Mamluk repairs: it is wilder than Karak. The Crusaders dug a tunnel down the hill to spring-fed cisterns.",
        "come": "On the King's Highway between Karak and Petra. You visit on your own; bring a torch for the tunnel.",
        "quando": "Open 8am-5pm (2026). Handy as a stop on the way to Petra.",
        "tempo": "1 hour",
        "costo": "1 JOD (about €1.20) for foreign visitors, or included in the Jordan Pass (2026)",
        "orari": "Daily 8am-5pm (2026).",
        "lat": 30.53139,
        "lng": 35.56083,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Karak Museum",
        "testo": "The small archaeological museum in the lower part of the castle, with finds from the Bronze Age to the Mamluk era and panels on the fortress's history. It helps you understand the castle's phases before exploring it.",
        "come": "Inside the castle, in the lower courtyard.",
        "quando": "At the start of the castle visit.",
        "tempo": "30 minutes",
        "costo": "Included in the castle ticket",
        "orari": "8am-5:15pm (2026).",
        "lat": 31.18216,
        "lng": 35.70172,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Umm ar-Rasas",
        "testo": "A UNESCO site since 2004, in the steppe south-east of Madaba, with the remains of a Roman and Byzantine town. In the Church of St Stephen a large 8th-century mosaic depicts the cities of the Holy Land; nearby rises a stylite tower.",
        "come": "By car from Madaba or Dhiban, turning east off the King's Highway.",
        "quando": "Morning or late afternoon; the site is open and has no shade.",
        "tempo": "1 hour",
        "costo": "Included in the Jordan Pass",
        "orari": "8am-5pm (2026).",
        "lat": 31.50079,
        "lng": 35.92026,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Machaerus (Mukawir)",
        "testo": "Herod the Great's fortress on top of an isolated hill above the Dead Sea. According to Josephus, John the Baptist was imprisoned and killed here; columns, cisterns and a very wide view over the coast remain.",
        "come": "By car to the village of Mukawir, then a short climb on foot.",
        "quando": "At sunset, with the light on the Dead Sea.",
        "tempo": "1 hour",
        "lat": 31.56722,
        "lng": 35.62417,
        "consiglio": "Closed shoes: the path is steep and stony."
      },
      {
        "nome": "Wadi Mujib canyon",
        "testo": "Along the King's Highway the road winds down into the great Mujib canyon and climbs up the other side. At the bottom is the dam lake; the viewpoints on the rim show the whole gorge.",
        "come": "By car on the King's Highway between Dhiban and Karak, stopping at the lay-bys.",
        "quando": "Morning, with low light on the walls.",
        "tempo": "30-45 minutes with stops",
        "lat": 31.44472,
        "lng": 35.81806
      },
      {
        "nome": "Dana Reserve",
        "testo": "Jordan's largest nature reserve, with the stone village of Dana on the edge of a valley that drops towards Wadi Araba. Half-day or multi-day trails among sandstone and granite mountains.",
        "come": "By car on the King's Highway, south of Tafila; some trails require a reserve guide.",
        "quando": "Spring and autumn, with good walking temperatures.",
        "tempo": "Half a day or one night",
        "costo": "10 JOD plus 16% tax, about €14 (2026)",
        "lat": 30.6751,
        "lng": 35.61053,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Mount Nebo, Umm ar-Rasas and the Wadi Mujib canyon",
          "Afternoon: Karak Castle and Museum",
          "Night in Karak or Dana",
          "Day 2: walk in the Dana Reserve, then Shobak Castle and arrival in Wadi Musa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Wadi Musa",
        "perChi": "those continuing to Petra",
        "testo": "The natural next stop along the King's Highway.",
        "fascia": "40-180 €"
      },
      {
        "nome": "Karak",
        "perChi": "those who want a quiet night",
        "testo": "Few places, simple and cheap; in the evening the town goes quiet early."
      },
      {
        "nome": "Madaba",
        "perChi": "those starting from the north",
        "testo": "A handy base for Mount Nebo, Umm ar-Rasas and Machaerus, with restaurants and simple hotels in the centre.",
        "fascia": "40-80 €"
      },
      {
        "nome": "Dana village",
        "perChi": "those who want to walk",
        "testo": "A few guesthouses and the reserve's lodge on the edge of the valley. Silence, starry skies and trails starting at the door."
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
    gite: [
      {
        "nome": "Petra",
        "distanza": "about 2.5 hours by car on the King's Highway",
        "come": "By car, taxi or transfer heading south, via Shobak.",
        "testo": "The Nabataean city carved into pink rock. It is best to reach Wadi Musa the afternoon before and go in at the 6am opening."
      },
      {
        "nome": "Madaba",
        "distanza": "about 1.5 hours by car",
        "come": "By car north on the King's Highway, crossing the Mujib canyon.",
        "testo": "The city of mosaics, with the Byzantine map in St George's Church and the archaeological park (3 JOD or with the Jordan Pass)."
      },
      {
        "nome": "Dead Sea, southern shore",
        "distanza": "about 1 hour by car",
        "come": "By car down from the plateau to Ghor es-Safi or to the resorts further north.",
        "testo": "The Museum at the Lowest Place on Earth and Lot's Cave, or a swim at the Sweimeh resorts further north."
      }
    ],
    faq: [
      {
        "domanda": "How much is Karak Castle?",
        "risposta": "2 JOD (about €2.40), museum included, or covered by the Jordan Pass (2026). It is open daily from 8am to 5pm."
      },
      {
        "domanda": "How long does Karak take?",
        "risposta": "An hour and a half for the castle and museum. With a torch you can also explore the dark corridors and underground halls."
      },
      {
        "domanda": "Is Mount Nebo in the Jordan Pass?",
        "risposta": "Mount Nebo is run by the Franciscans and has its own ticket of 3 JOD (about €3.60). Bring cash."
      },
      {
        "domanda": "King's Highway or Desert Highway?",
        "risposta": "The King's Highway is slower and winding but passes Madaba, Mount Nebo, the Mujib canyon, Karak and Shobak. The Desert Highway is faster, with no interesting stops."
      },
      {
        "domanda": "Can you see Mount Nebo and Karak on the same day?",
        "risposta": "Yes, leaving early from Madaba or the Dead Sea: Mount Nebo in the morning, Karak after lunch and Wadi Musa by evening."
      },
      {
        "domanda": "Is it worth sleeping in Dana?",
        "risposta": "Yes for walkers: the village is quiet and the trails start from the reserve. Admission is 10 JOD plus 16% tax."
      }
    ],
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
    comeArrivare: "The day before Petra we reached Little Petra and Wadi Musa by transfer from Karak and Mount Nebo. From Amman it's about 235 km, a good three hours by car on the Desert Highway (the King's Highway is slower but scenic, with stops at Madaba and Karak). From Aqaba it takes about two hours, from Wadi Rum an hour and a half. A JETT bus leaves Amman for Wadi Musa every morning; otherwise there are taxis, pre-booked transfers or a rental car, which is the most flexible option in Jordan. The town of Wadi Musa sits right at the site entrance.",
    comeSpostarsi: 'On foot throughout the site, including the Siq and the climb to the Monastery.',
    periodoMigliore: 'early morning, for the Siq and the Treasury with less direct light and fewer people',
    costi: "Low budget €50-70 a day (hostel or guesthouse, falafel and shawarma, ticket extra); mid-range €100-150 (hotel in Wadi Musa, restaurant dinners, taxis); high from €250 (hotel by the entrance, private guide, transfers). Entry: 50 JOD (about €60) for one day if you stay overnight in Jordan, 90 JOD (about €109) without an overnight stay; the Jordan Pass, from 70 JOD (about €85), covers Petra and the visa fee.",
    erroriDaEvitare: ['Going without hiking shoes: they are indispensable, especially for the climb to the Monastery (over 800 steps)'],
    miaEsperienza:
      "Seeing the Treasury appear from the Siq without the usual crowd in front is worth the trip on its own. The climb to the Monastery pays back every step with a view even more imposing than the Treasury. Little Petra, the day before, was also beautiful: less crowded, it gave us the first rush of enthusiasm. Together with Wadi Rum, it's the thing not to miss on the whole trip.",
    // GUIDA-START
    luoghi: [
      {
        nome: "The Siq and the Treasury (Al-Khazneh)",
        testo: "The natural gorge, about 1.2 km long between sandstone walls up to 180 metres high and in places only 3 metres wide, which narrows until it suddenly reveals the façade of the Treasury, about 37 metres high and carved into the rock.",
        come: "From the visitor centre to the Treasury it is a walk of half an hour up to an hour, depending on your pace. You can ride a horse on the first stretch, before the Siq.",
        quando: "The site opens at 6am and closes at 5pm (2026). Go in at the very first hour, when the Siq is empty; the sun reaches the Treasury mid-morning.",
        tempo: "45 minutes",
        costo: "50 JOD (about €60) for 1 day, 55 JOD (about €67) for 2, 60 JOD (about €73) for 3 if you spend at least one night in Jordan; 90 JOD (about €109) for day visitors without an overnight stay (2026). Included in the Jordan Pass.",
        orari: "Daily from 6am; closes at 5pm, in winter sometimes around 4pm (2026).",
        lat: 30.32208,
        lng: 35.45154,
        url: "https://international.visitjordan.com/page/17/Entrance-Fees",
        consiglio: "We found it almost deserted: seeing the Treasury appear from the Siq without a crowd is worth the trip on its own.",
      },
      {
        nome: "Street of Facades and Theater",
        testo: "After the Treasury the valley opens onto rock-cut tombs and the Nabataean theatre carved into the stone, which could hold about 8,500 people.",
        come: "On foot from the Treasury, all flat.",
        quando: "Morning.",
        tempo: "1 hour",
        costo: "Included in the Jordan Pass",
        orari: "Same as the site, from 6am to closing.",
        lat: 30.32398,
        lng: 35.44769,
      },
      {
        nome: "Royal Tombs",
        testo: "A group of monumental tombs cut into the mountain: the Urn Tomb, the Silk Tomb, the Corinthian Tomb and the Palace Tomb. In the Urn Tomb you can enter the great hall.",
        come: "A few minutes on foot from the theater.",
        quando: "Afternoon, when the red light lights up the walls.",
        tempo: "45 minutes",
        costo: "Included in the Jordan Pass",
        orari: "Same as the site, from 6am to closing.",
        lat: 30.32755,
        lng: 35.44926,
      },
      {
        nome: "Colonnaded Street and Great Temple",
        testo: "The paved Roman cardo running along the valley floor, with columns still standing on one side and the remains of markets. Above it on the left is the Great Temple, a Nabataean complex on terraces with a small theatre inside, one of the largest built (not carved) structures in the city.",
        come: "On foot, right after the theatre and the Royal Tombs, on flat ground. A staircase leads up to the Great Temple.",
        quando: "Late morning, on the way to the Monastery.",
        tempo: "45 minutes",
        costo: "included in the Petra ticket",
        orari: "Same as the site, from 6am to closing.",
        lat: 30.32912,
        lng: 35.44326,
      },
      {
        nome: "Qasr al-Bint",
        testo: "The main temple of the Nabataean city, one of the few masonry buildings to survive, still more than 20 metres high. It marks the end of the colonnaded street and the start of the climb to the Monastery; the two valley-floor restaurants and toilets are here too.",
        come: "On foot at the end of the colonnaded street, about 4 km from the entrance.",
        quando: "Around lunchtime, as a break before the Monastery.",
        tempo: "20-30 minutes",
        costo: "included in the Petra ticket",
        orari: "Same as the site, from 6am to closing.",
        lat: 30.3295,
        lng: 35.4401,
      },
      {
        nome: "Monastery (Ad-Deir)",
        testo: "A façade about 45 metres high, larger than the Treasury and plainer. You reach it by a path of nearly 800 rock-cut steps.",
        come: "You start from the bottom of the valley, past Qasr al-Bint: about 40 minutes uphill. Along the way there are stalls and a kiosk facing the monument.",
        quando: "After midday, when the sun is on the facade (in the morning it is in shade).",
        tempo: "2-2.5 hours round trip",
        costo: "Included in the Jordan Pass",
        orari: "Same as the site; in winter start the climb by 2pm so you don't come down in the dark.",
        lat: 30.33821,
        lng: 35.43098,
        consiglio: "Hiking shoes and water; the mint tea at the kiosk repays the climb.",
      },
      {
        nome: "High Place of Sacrifice (Al-Madbah)",
        testo: "A ceremonial area on the summit of Jebel Madbah, with an altar and two obelisks carved from the rock. The path climbs in steps from the theatre area and gives a view down over central Petra that you can't picture from the valley floor.",
        come: "Climb on foot from the Street of Facades, about 45 minutes of steps. You can descend the other side through Wadi Farasa, past the Lion Fountain and the Roman Soldier's Tomb, coming out near Qasr al-Bint.",
        quando: "Early morning or on the second day of your visit; in summer avoid the middle of the day.",
        tempo: "2-3 hours including the descent through Wadi Farasa",
        costo: "included in the Petra ticket",
        orari: "Same as the site, from 6am to closing.",
        lat: 30.32148,
        lng: 35.44699,
        consiglio: "The best use of the second day on your ticket, when your legs are already tired from the Monastery.",
      },
      {
        nome: "Al-Khubtha viewpoint over the Treasury",
        testo: "The trail up the Jebel al-Khubtha massif above the Royal Tombs, to a viewpoint looking down on the Treasury. It's the classic overhead photo of Petra, and less effort than the Monastery.",
        come: "Start from the Royal Tombs (Urn Tomb side), about an hour's climb on steps and rock. At the top a Bedouin tent asks a small fee to look over the edge.",
        quando: "In the morning, when the sun lights the Treasury's facade.",
        tempo: "2-2.5 hours return",
        costo: "included in the Petra ticket, plus a few dinars at the viewpoint",
        orari: "Same as the site, from 6am to closing.",
      },
      {
        nome: "Petra by Night",
        testo: "The Siq walked in the dark, lit by hundreds of candles, as far as the Treasury, where you sit on the ground and listen to Bedouin music. It's about atmosphere rather than sightseeing, but the Treasury by candlelight stays with you.",
        come: "It starts from the Wadi Musa visitor centre after sunset and you walk as a group to the Treasury, about 2 hours in all. The nights it runs change: ask at the visitor centre or your hotel.",
        quando: "Only on some nights of the week; best the evening before or after your full day in Petra.",
        tempo: "2 hours",
        costo: "30 JOD, about €36 (2026), not included in the Jordan Pass",
        lat: 30.32208,
        lng: 35.45154,
        url: "https://visitpetra.jo/en/Event/25",
        consiglio: "Get to the visitor centre early to walk at the front of the group: the first rows find the Siq silent.",
      },
      {
        nome: "Petra Museum",
        testo: "The museum opened in 2019 next to the visitor centre, with statues, pottery, jewellery and inscriptions found on the site. In an hour it explains who the Nabataeans were and how they lived, which isn't obvious among the rock facades.",
        come: "At the Petra entrance in Wadi Musa, before the turnstiles.",
        quando: "The afternoon you arrive, or on the way back from the site when it's hot.",
        tempo: "1 hour",
        costo: "included in the Petra ticket",
        lat: 30.32532,
        lng: 35.46784,
      },
      {
        nome: "Little Petra (Siq al-Barid)",
        testo: "A small canyon about 8 km north of Wadi Musa, with dwellings cut into the sandstone, Nabataean banqueting halls and a large cistern. The Painted Biclinium keeps well-preserved frescoes. Less famous and quieter than Petra.",
        come: "By taxi or transfer from Wadi Musa. You walk through the canyon.",
        quando: "Afternoon, the day before Petra.",
        tempo: "1.5-2 hours",
        costo: "Free entry in daytime",
        lat: 30.37408,
        lng: 35.44803,
        consiglio: "Great for warming up before Petra, with few people.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Enter at opening, 6am: the Siq and the Treasury with few people",
          "Street of Facades, theatre and Royal Tombs",
          "Colonnaded Street and Great Temple",
          "Lunch near Qasr al-Bint",
          "Climb to the Monastery in the early afternoon, with the sun on the facade",
          "Back through the Siq towards closing time",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above",
          "Evening: Petra by Night, if it falls on one of the scheduled nights",
          "Day 2 morning: High Place of Sacrifice, descending through Wadi Farasa",
          "Day 2 afternoon: Petra Museum and Little Petra by taxi",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Little Petra on the afternoon you arrive, and the Petra Museum",
          "Day 2: Siq, Treasury, Royal Tombs, colonnaded street and Monastery",
          "Day 3: Al-Khubtha viewpoint over the Treasury in the morning, then the High Place of Sacrifice",
          "Evening of day 2 or 3: Petra by Night",
        ],
      },
    ],
    zone: [
      {
        nome: "Wadi Musa",
        perChi: "those who want to enter at opening",
        testo: "The town below the entrance, with hotels in every range and restaurants. A few minutes from the site on foot or by shuttle.",
        fascia: "€40-180",
      },
      {
        nome: "Little Petra / Beidha",
        perChi: "those who want silence",
        testo: "A few camps and guesthouses near the canyon, more isolated and with little going on in the evening.",
        fascia: "€50-150",
      },
      {
        nome: "Taybeh",
        perChi: "those driving and looking for a view",
        testo: "The hill village south of Wadi Musa, with a few hotels set high above the valley and wide sunsets. You need a car or taxi to reach the site entrance, about a quarter of an hour.",
        fascia: "€60-150",
      },
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
      "Petra by Night: from 8.30pm to about 10.30pm, starting at the visitor centre, 30 JOD per person, free under 10 (2026). You also need a daytime ticket or the Jordan Pass, and it cannot be booked. It runs only on some evenings and official sources disagree on the days (Monday, Wednesday and Thursday, or Sunday to Thursday): check at the visitor centre."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Wadi Rum",
        distanza: "1.5 hours by car, about 110 km",
        come: "Transfer, taxi or rental car south on the Desert Highway; inside the desert you travel in the Bedouin camps' jeeps.",
        testo: "The valley of red sand and sandstone towers from Lawrence of Arabia. Better to spend a night in a tent than to go and come back in a day.",
      },
      {
        nome: "Shobak Castle",
        distanza: "40 minutes by car, about 30 km",
        come: "By car or taxi north on the King's Highway; it fits easily with arriving from Karak or Dana.",
        testo: "The crusader castle of Montréal on an isolated hilltop, with galleries and a rock-cut stairway down to a spring. Often almost empty.",
      },
      {
        nome: "Dana Biosphere Reserve",
        distanza: "1.5 hours by car, about 70 km",
        come: "By car on the King's Highway to Dana village; the trails are on foot, some with a reserve guide.",
        testo: "Jordan's largest nature reserve, with a stone village on the rim of a valley dropping towards Wadi Araba. Good for a day of walking after the archaeological sites.",
      },
      {
        nome: "Aqaba and the Red Sea",
        distanza: "2 hours by car, about 125 km",
        come: "Transfer, taxi or car on the Desert Highway; usually via Wadi Rum.",
        testo: "Snorkelling on the coral reefs and beach time after days of desert. More than a day trip, it's the natural final stop of a route south from Petra.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Petra?",
        risposta: "One full day covers the Siq, the Treasury, the Royal Tombs and the Monastery if you start at opening. With two days you can add the High Place of Sacrifice, the Al-Khubtha viewpoint and Little Petra without rushing.",
      },
      {
        domanda: "Is the Jordan Pass worth it for Petra?",
        risposta: "Almost always, if you stay at least three nights: from 70 JOD it includes Petra (50 JOD on its own) and the visa fee, plus Jerash, Wadi Rum and dozens of other sites. Buy it online before you arrive.",
      },
      {
        domanda: "Can you visit Petra as a day trip from Amman or Aqaba?",
        risposta: "You can, but the ticket for visitors not staying overnight in Jordan rises to 90 JOD and you arrive when the Siq is already crowded. Sleeping in Wadi Musa lets you enter at 6am, which is the real advantage.",
      },
      {
        domanda: "Is Petra by Night worth it?",
        risposta: "Yes for the atmosphere, not as a visit: you only see the Siq and the Treasury lit by candles. It costs 30 JOD, isn't in the Jordan Pass and runs only on some nights a week.",
      },
      {
        domanda: "When is the best time to visit Petra?",
        risposta: "March to May and October to November have good walking temperatures. In summer it's very hot after 10am; in winter the days are short and the site closes around 4pm.",
      },
      {
        domanda: "How much walking is there in Petra?",
        risposta: "From the entrance to Qasr al-Bint is about 4 km, and the Monastery adds more than 800 steps: a full day means 15-20 km. You need hiking shoes, water and a hat.",
      },
    ],
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
    comeArrivare: "Wadi Rum is about 120 km from Wadi Musa (Petra), about 2 hours by road, and about 70 km from Aqaba, an hour and a quarter. You arrive by rental car, by taxi or with the transfer arranged by the camp to the visitor centre and Rum village, where Bedouin guides wait with their jeeps. From Aqaba airport it takes about an hour and a half.",
    comeSpostarsi: 'A 4x4 jeep with a Bedouin guide, a camel for the initial stretch in the desert.',
    periodoMigliore: "the New Year period, for the party in the desert under the stars; sunrise for the best light on the dunes",
    costi: "Low budget about €50-70 a day per person (traditional camp with dinner and breakfast, shared jeep tour, entry with the Jordan Pass); mid €90-150 (tent with private bathroom, private half-day jeep, camel at JOD 20); high from €200 up (bubbles or luxury camp, full-day tour, guided climb). Protected area entry JOD 5 without the Jordan Pass; packed lunch about JOD 10; 1 JOD is about €1.20.",
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
        "costo": "Protected area entry JOD 5, about €6, for foreigners, or included in the Jordan Pass (2026); the jeep tour is paid separately",
        "orari": "Protected area and visitor centre daily 8am-5pm (Jordan Pass, 2026)",
        "lat": 29.5765,
        "lng": 35.41993,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx",
        "consiglio": "Ask that the tour includes a sunset on the dunes."
      },
      {
        "nome": "Camel in the desert",
        "testo": "A walk of about 45 minutes on camelback, in the traditional way.",
        "come": "Arranged from the camp.",
        "quando": "Dawn or sunset.",
        "tempo": "45 minutes",
        "costo": "JOD 20, about €24 (from my trip)"
      },
      {
        "nome": "Night in a tented camp",
        "testo": "The Bedouin camp with dinner cooked under the sand (zarb), music and a sky with no lights. Tents range from the simplest to transparent bubbles.",
        "come": "The jeep transfer leaves from the village.",
        "quando": "One night, better two if you want time to walk.",
        "tempo": "One night",
        "consiglio": "Bring a sweater: at night the temperature drops even in spring."
      },
      {
        "nome": "Visitor centre and the Seven Pillars of Wisdom",
        "testo": "The entrance to the protected area, where you show the Jordan Pass or pay for the ticket. Opposite stands the mountain with great vertical folds called the Seven Pillars of Wisdom, after T.E. Lawrence's book.",
        "come": "On the road that runs from the Desert Highway down to Rum village; parking at the centre.",
        "quando": "On arrival, before getting on the jeep.",
        "tempo": "20-30 minutes",
        "costo": "JOD 5, about €6, or Jordan Pass (2026)",
        "orari": "Daily 8am-5pm (2026)",
        "lat": 29.63923,
        "lng": 35.43444,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Lawrence's Spring",
        "testo": "A small spring on the face of Jebel Rum, linked to the story of Lawrence of Arabia, with Nabataean inscriptions on the rock. You climb for a few minutes for the view over the valley.",
        "come": "First stop on almost every jeep tour, a few minutes from the village.",
        "quando": "Morning.",
        "tempo": "20-30 minutes",
        "lat": 29.55979,
        "lng": 35.41019
      },
      {
        "nome": "Khazali Siq",
        "testo": "A narrow cleft in the mountain, cool even in summer, with Thamudic and Nabataean rock carvings of human figures, antelopes and footprints. You walk in for a few dozen metres.",
        "come": "A classic stop on the jeep tour.",
        "quando": "During the hot hours, for the shade.",
        "tempo": "20-30 minutes",
        "lat": 29.51796,
        "lng": 35.42347
      },
      {
        "nome": "Red sand dunes",
        "testo": "The big red sand dunes resting against the rock, the place for sandboarding and for climbing up to look at the desert from above.",
        "come": "On the jeep tour; you climb on foot, barefoot if the sand is not too hot.",
        "quando": "Late afternoon, towards sunset.",
        "tempo": "30-45 minutes",
        "lat": 29.52898,
        "lng": 35.42167
      },
      {
        "nome": "Little Bridge",
        "testo": "A small rock arch a few metres above the ground, easy to climb for a photo on the bridge. It is the simple alternative to the higher bridges.",
        "come": "On the half-day jeep tour.",
        "quando": "Afternoon.",
        "tempo": "20 minutes",
        "lat": 29.52041,
        "lng": 35.44302
      },
      {
        "nome": "Lawrence's House",
        "testo": "The remains of a small Nabataean stone building that tradition links to Lawrence's passage. More than the ruins, what counts is the view over the red plain.",
        "come": "A stop on the jeep tour.",
        "quando": "Afternoon.",
        "tempo": "15-20 minutes",
        "lat": 29.52862,
        "lng": 35.45931
      },
      {
        "nome": "Mushroom Rock",
        "testo": "An isolated rock in the sand with an eroded base that makes it look like a mushroom, one of the most photographed shapes in the desert.",
        "come": "On the longer jeep tours.",
        "quando": "Afternoon light.",
        "tempo": "15 minutes",
        "lat": 29.51805,
        "lng": 35.4935
      },
      {
        "nome": "Umm Fruth Rock Bridge",
        "testo": "A natural arch about 15 metres high, climbed in a few minutes up an easy rock slab. It is the best-known rock bridge in Wadi Rum.",
        "come": "On the 4-6 hour jeep tours; shoes with a good sole.",
        "quando": "Morning or afternoon, less crowded at lunchtime.",
        "tempo": "30 minutes",
        "lat": 29.46873,
        "lng": 35.44923,
        "consiglio": "Only a few people fit on top: wait your turn and avoid climbing in strong wind."
      },
      {
        "nome": "Burdah Rock Bridge",
        "testo": "A slender rock arch about 35 metres up on the ridge of Jebel Burdah. You reach it only with a demanding ascent, with sections of easy scrambling.",
        "come": "With a local guide, starting by jeep; for experienced hikers.",
        "quando": "Early morning, before the heat.",
        "tempo": "half a day",
        "lat": 29.46845,
        "lng": 35.49665
      },
      {
        "nome": "Barrah Canyon",
        "testo": "A long, wide canyon between sandstone walls, suited to a walk or a stretch by camel. It is also a climbing area.",
        "come": "By jeep or on foot with a guide; often on full-day tours.",
        "quando": "Morning.",
        "tempo": "2-3 hours on foot",
        "lat": 29.558,
        "lng": 35.4909
      },
      {
        "nome": "Jebel Umm ad-Dami",
        "testo": "Jordan's highest peak, about 1,850 metres, on the border with Saudi Arabia. The climb is short but steep, and from the top you see the Saudi desert.",
        "come": "With a guide, about an hour and a half by jeep from the village and then on foot.",
        "quando": "Leave at dawn; sunset at the summit only with the guide.",
        "tempo": "a full day",
        "lat": 29.30833,
        "lng": 35.42917
      }
    ],
    programmi: [
      {
        "titolo": "1 day and 1 night",
        "tappe": [
          "Arrival from Petra or Aqaba at the visitor centre",
          "4-6 hour jeep tour: Lawrence's Spring, Khazali Siq, red dunes, Little Bridge, Lawrence's House, Umm Fruth",
          "Sunset on the dunes, Bedouin dinner and starry sky",
          "Sunrise on the dunes and departure"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1 as above",
          "Day 2: camel ride or walk in Barrah Canyon, Mushroom Rock",
          "Second night at the camp"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: climb to Burdah Rock Bridge with a guide, or Jebel Umm ad-Dami"
        ]
      }
    ],
    zone: [
      {
        "nome": "Traditional tented camp",
        "perChi": "those who want the Bedouin experience",
        "testo": "Simple tents, shared bathroom, dinner and breakfast included. Little electricity: charge your phones beforehand.",
        "fascia": "€30-60"
      },
      {
        "nome": "Camp with private bathroom",
        "perChi": "those who want more comfort",
        "testo": "Tents and bubbles with bathroom, sometimes with air conditioning. They cost more.",
        "fascia": "€50-120"
      },
      {
        "nome": "Rum village",
        "perChi": "those who do not want to sleep in the desert",
        "testo": "Simple guesthouses at the foot of the valley, from where the tours leave."
      },
      {
        "nome": "Bubbles and luxury camps",
        "perChi": "those who want the starry sky from bed",
        "testo": "Transparent domes or «Martian»-style tents with private bathroom, air conditioning and dinner included. Prices vary a lot with the date.",
        "fascia": "€150-320"
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
    gite: [
      {
        "nome": "Petra",
        "distanza": "about 120 km, 2 hours",
        "come": "Transfer with the camp, taxi or rental car via the Desert Highway.",
        "testo": "The Nabataean city carved into the rock, the other reason for a trip to Jordan. It deserves at least a full day and a night in Wadi Musa."
      },
      {
        "nome": "Aqaba and the Red Sea",
        "distanza": "about 70 km, 1-1.5 hours",
        "come": "Taxi or transfer from Rum village; from Aqaba airport also about 1.5 hours.",
        "testo": "The sea after the desert: coral reef from the shore in the south towards the Saudi border, boat trips and fresh fish in the evening."
      }
    ],
    faq: [
      {
        "domanda": "How much time do you need in Wadi Rum?",
        "risposta": "One night with a 4-6 hour jeep tour is enough for the classic stops. With two nights you can add a walk or a camel ride without rushing."
      },
      {
        "domanda": "Does the Jordan Pass cover Wadi Rum?",
        "risposta": "Yes, entry to the protected area is included and you show it at the visitor centre. Without the pass you pay JOD 5; jeep, camp and camel are always extra."
      },
      {
        "domanda": "Can you visit Wadi Rum without sleeping in the desert?",
        "risposta": "Yes, on a day trip from Petra or Aqaba. But the sunset, the Bedouin dinner and the starry sky are the best part, and you miss them."
      },
      {
        "domanda": "How cold does it get at night?",
        "risposta": "In winter nights drop close to freezing, and it is cold in spring and autumn too. You need a jacket and layers, even after a hot day."
      },
      {
        "domanda": "Jeep, camel or on foot?",
        "risposta": "The jeep covers the main stops in half a day; the camel is slow and fine for one stretch; on foot you go only with a Bedouin guide."
      },
      {
        "domanda": "Do the camps have bathrooms and electricity?",
        "risposta": "Traditional camps have shared bathrooms and little power; those with private tents or bubbles have an en-suite bathroom. Arrive with a charged phone and a power bank."
      }
    ],
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
    comeArrivare: "About 1h transfer from Wadi Rum. Aqaba has King Hussein International Airport (AQJ), a few kilometres from the centre, with flights from Amman and seasonal direct links from Europe. From Amman it is about 330 km on the Desert Highway, four and a half hours by car, or you can take a JETT bus. From Petra it takes about two hours, from Wadi Rum an hour and a quarter.",
    comeSpostarsi: 'Transfer to the beach (15 minutes from the hotel).',
    periodoMigliore: 'a sunny day, after sunrise in the desert',
    costi: "Boat tour with Deep Blue included in the package. Low budget about €45-70 a day per person (simple hotel in the centre, public beach, falafel and fish at local places); mid €100-150 (seafront hotel, beach club, fish dinner); high from €220 (south-coast resort with diving). Fort and museum 3 JOD (about €3.60) or with the Jordan Pass (2026). Aqaba is a special economic zone: alcohol and some products cost less.",
    erroriDaEvitare: [],
    miaEsperienza:
      "In Aqaba we also went diving: pleasant, but nothing special compared to other Red Sea spots more famous for diving (Egypt above all). It remains a nice day to unwind after the desert, between snorkeling and water sports.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Snorkeling and diving",
        "testo": "The Red Sea a few hours from the desert, with coral reefs close to shore and warm water. There is also the wreck of the Cedar Pride, scuttled for divers on 16 November 1985: it is one of the best-known dive sites.",
        "come": "Book a diving center or a boat from the marina.",
        "quando": "All year, but spring and autumn are the best months.",
        "tempo": "Half a day",
        "lat": 29.42815,
        "lng": 34.97149,
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
        "costo": "3 JOD (about €3.60), museum included; included in the Jordan Pass (2026)",
        "orari": "Castle 8am-5pm, museum 8am-5:15pm (2026).",
        "lat": 29.52136,
        "lng": 35.00204,
        "url": "https://international.visitjordan.com/page/17/Entrance-Fees"
      },
      {
        "nome": "Aqaba Archaeological Museum",
        "testo": "Next to the fort, in the house of Sharif Hussein bin Ali, the museum holds finds from the Islamic city of Ayla, ceramics, coins and inscriptions. It is visited on the same ticket as the castle.",
        "come": "In the centre, beside the fort and the Arab Revolt Plaza.",
        "quando": "Late afternoon, together with the fort.",
        "tempo": "30 minutes",
        "costo": "Included in the fort ticket; included in the Jordan Pass",
        "orari": "8am-5:15pm (2026).",
        "lat": 29.52167,
        "lng": 35.00139,
        "url": "https://www.jordanpass.jo/Contents/Jordan_Attractions.aspx"
      },
      {
        "nome": "Ayla ruins",
        "testo": "The remains of the Islamic port city founded in the 7th century, with stretches of wall, the gates and the main street linking them. They lie in the open along the seafront, among hotels and palm trees.",
        "come": "On foot from the centre, on the seafront north of the fort.",
        "quando": "Early morning or towards evening, when the sun is low.",
        "tempo": "30 minutes",
        "lat": 29.53058,
        "lng": 35.0
      },
      {
        "nome": "Aqaba Church",
        "testo": "The mud-brick foundations of a late 3rd-century church, discovered in 1998 and considered among the oldest purpose-built churches. There is little to see, but it matters a great deal to the history of Christianity.",
        "come": "In the centre, near the seafront, a few minutes' walk from the Ayla ruins.",
        "quando": "Any time, combined with Ayla.",
        "tempo": "15 minutes",
        "lat": 29.53389,
        "lng": 34.99917
      },
      {
        "nome": "Arab Revolt Plaza and flagpole",
        "testo": "The large seafront square with a flagpole about 130 metres high flying the flag of the Arab Revolt, visible from Israel, Egypt and Saudi Arabia. In the evening it is where families meet and stroll.",
        "come": "In the centre, next to the fort.",
        "quando": "At sunset, with the light on the gulf.",
        "tempo": "20 minutes",
        "lat": 29.5217,
        "lng": 35.0011
      },
      {
        "nome": "Underwater Military Museum",
        "testo": "Since July 2019 around twenty decommissioned military vehicles, including tanks, a helicopter and an ambulance, have lain on the seabed at 15-28 metres, arranged as if in formation. It is an unusual dive, on sand, away from the coral.",
        "come": "Only with a dive centre, usually by boat.",
        "quando": "All year, in calm sea.",
        "tempo": "Half a day including the dive"
      },
      {
        "nome": "South coast and beach clubs",
        "testo": "Towards the Saudi border the coast is dotted with beach clubs and resorts with beaches, pools and direct access to the reef. It is the area for spending all day in swimwear and snorkelling from the shore.",
        "come": "By taxi from the centre, about 15-20 minutes; pay the beach club's day entrance.",
        "quando": "All day; in summer the morning is better.",
        "tempo": "Half a day or more",
        "lat": 29.43501,
        "lng": 34.97432
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
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2 morning: dive at the Cedar Pride or the Underwater Military Museum",
          "Day 2 afternoon: fort, museum, Ayla ruins and church",
          "Sunset on the Arab Revolt Plaza"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: beach and snorkelling on the south coast",
          "Day 2: diving or a glass-bottom boat, then the old centre",
          "Day 3: trip to Wadi Rum by jeep and back in the evening, or departure towards Petra"
        ]
      }
    ],
    zone: [
      {
        "nome": "Center and seafront",
        "perChi": "those who want to be on foot",
        "testo": "Mid-range hotels and restaurants near the sea.",
        "fascia": "45-75 €"
      },
      {
        "nome": "Resorts on the south coast",
        "perChi": "those who want beach and diving",
        "testo": "Luxury resorts with private beach and dive center, far from the center.",
        "fascia": "120-200 €"
      },
      {
        "nome": "Ayla",
        "perChi": "those after a new, quiet district",
        "testo": "The recent residential development north of the centre, built around a marina and artificial lagoons, with modern hotels and waterside restaurants. A short taxi ride reaches the old centre."
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
    gite: [
      {
        "nome": "Wadi Rum",
        "distanza": "about 70 km, an hour and a quarter by car",
        "come": "Taxi, rental car or camp transfer to the visitor centre; then a jeep with a Bedouin guide.",
        "testo": "The desert of red sand and sandstone towers. It can be done in a day with a jeep tour, but a night in a tent is worth far more."
      },
      {
        "nome": "Petra",
        "distanza": "about 125 km, 2 hours by car",
        "come": "Transfer, taxi or car on the Desert Highway; JETT buses also run.",
        "testo": "It can be done as a day trip, but the ticket without an overnight stay costs 90 JOD and you miss the 6am opening: better to sleep in Wadi Musa."
      }
    ],
    faq: [
      {
        "domanda": "Is Aqaba good for snorkelling?",
        "risposta": "Yes: on the south coast the reef starts a few metres from the shore, and mask and fins can be rented on the beach. The water stays warm most of the year."
      },
      {
        "domanda": "Is diving in Aqaba worth the trip?",
        "risposta": "It is pleasant and easy, with the Cedar Pride wreck and the Underwater Military Museum as highlights. Those looking for the big Red Sea will find more on the Egyptian coast."
      },
      {
        "domanda": "How should you dress in Aqaba?",
        "risposta": "Swimwear is fine at resorts and beach clubs; in town and on the public beach dress modestly, with shoulders and knees covered."
      },
      {
        "domanda": "How many days are needed in Aqaba?",
        "risposta": "One day is enough for sea and snorkelling after the desert. With two or three you add diving, the old centre and a trip to Wadi Rum."
      },
      {
        "domanda": "Is Aqaba Fort in the Jordan Pass?",
        "risposta": "Yes. Without the pass the ticket costs 3 JOD (about €3.60) and includes the archaeological museum next door (2026)."
      },
      {
        "domanda": "Are alcohol and shopping cheaper in Aqaba?",
        "risposta": "Yes, Aqaba is a special economic zone, and some products, alcohol included, cost less than in the rest of the country."
      }
    ],
    esperienzeSlugs: ['diving-aqaba'],
    tripSlugs: ['giordania-itinerario'],
    imageAlt: 'The coast of Aqaba on the Red Sea, Jordan',
    immagine: '/images/giordania/aqaba-stock.jpg',
  },
]
