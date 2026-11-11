import type { Destinazione } from '@/lib/types'

export const destinazioniTurchia: Destinazione[] = [
  {
    slug: 'istanbul',
    paeseSlug: 'turchia',
    ordine: 1,
    nome: 'Istanbul',
    tipologia: ['città', 'storia', 'cibo'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "Ancient Byzantium, later Constantinople, split by the Bosphorus between Europe and Asia: the historic peninsula of Sultanahmet, the districts of Beyoğlu and Karaköy, Kadıköy on the Asian side.",
    percheAndarci:
      "For Hagia Sophia, Topkapı and the Süleymaniye, for the bazaars, for the ferries on the Bosphorus and for one of the richest street food scenes in the Mediterranean.",
    cosaVedere: [
      'Hagia Sophia, where tourists visit the upper galleries',
      'The Blue Mosque and the Hippodrome',
      'The Basilica Cistern',
      'Topkapı Palace with the harem',
      'The Süleymaniye Mosque, a masterpiece by Sinan',
      'The Grand Bazaar and the Spice Bazaar',
      'Chora (Kariye), with the Byzantine mosaics reopened in 2024',
    ],
    cosaFare: [
      'The public ferry on the Bosphorus up to Anadolu Kavağı',
      'Taking the ferry from Eminönü to Kadıköy for the market on the Asian side',
      'A historic hammam',
      'Sunset from the Galata Tower or from a terrace in Karaköy',
    ],
    doveDormire:
      "Sultanahmet to be within walking distance of the monuments, Karaköy and Galata for restaurants and nightlife, Kadıköy for a more local Istanbul. Budget: small hotels in Sultanahmet and Fatih · mid-range: boutique hotels in Karaköy · luxury: historic hotels on the Bosphorus.",
    doveMangiare:
      "Balık ekmek (fish sandwich) in Eminönü, Adana kebab and lahmacun in the lokanta, meze and rakı in the meyhane of Beyoğlu, Turkish breakfast in Kadıköy, baklava from Karaköy Güllüoğlu.",
    comeArrivare: "From Istanbul Airport (IST) the M11 metro reaches Gayrettepe in about 35 minutes, then the M2 goes on to Taksim or towards the historic peninsula (about 40-75 TL with the Istanbulkart, sold at machines in the airport). Havaist buses run to Sultanahmet or Taksim in 1-1.5 hours (about 275 TL, also at night). A taxi costs about €40-60: better booked through BiTaksi or Uber, with the meter on. Sabiha Gökçen Airport (SAW) is on the Asian side, linked to Kadıköy by the M4 metro.",
    comeSpostarsi:
      "Rechargeable Istanbulkart for the metro, T1 tram, funiculars and ferries; taxis with the BiTaksi or Uber apps, which in Istanbul calls the yellow taxis.",
    periodoMigliore: 'April-June and September-November',
    costi:
      "Low budget about €50-70 per person per day (small hotel in Sultanahmet or Fatih, street food and lokanta, one or two free mosques); mid-range €110-160 (boutique hotel in Karaköy or Sultanahmet, Topkapı and Hagia Sophia, meze dinners); high from €250 up (historic hotels on the Bosphorus, restaurants with a view, private guides). Hagia Sophia €25, Topkapı with the Harem about €50, Museum Pass Istanbul about €115-120 for 5 days.",
    erroriDaEvitare: [
      "Accepting a stranger's invitation for a drink in a bar: it's the inflated-bill scam, common in Taksim and Sultanahmet",
      "Picking up the brush a shoe shiner drops in front of you: it's the pretext for a paid shine",
      'Eating in Sultanahmet restaurants with no prices displayed',
    ],
    miaEsperienza:
      "I went with friends at the start of my sixteen-day trip around Turkey: four days between Sultanahmet with Hagia Sophia, the Blue Mosque and the Cistern, Topkapı, the Grand Bazaar and the Süleymaniye, the Bosphorus, Beyoğlu and Kadıköy.",
    // GUIDA-START
    luoghi: [
      {
        nome: "Hagia Sophia",
        testo: "Justinian's basilica, consecrated in 537, then a mosque from 1453, a museum from 1935 and a mosque again since 2020, with Byzantine mosaics beneath the great dome.",
        come: "T1 tram to Sultanahmet. Since 15 January 2024 foreign visitors pay for a ticket and go up to the upper galleries, reopened in 2024, while most of the ground floor is reserved for worshippers. Modest clothing; women must cover their heads.",
        quando: "Early morning, outside prayer times.",
        tempo: "1-1.5 hours",
        costo: "€25 for foreign visitors, dedicated route through the upper galleries (2026)",
        lat: 41.0085,
        lng: 28.98001,
        consiglio: "Check the hours on the official site beforehand, as they change with the access rules.",
      },
      {
        nome: "Blue Mosque and the Hippodrome",
        testo: "The Sultanahmet Mosque, built between 1609 and 1617, with six minarets and more than twenty thousand Iznik tiles inside. In front, the square of the ancient hippodrome with the Egyptian obelisk.",
        come: "On foot from Hagia Sophia. Shoes off, shoulders and legs covered; women with the head covered.",
        quando: "Open daily 8.30am-7pm from April to September and 8.30am-5pm from October to March, last entry 30 minutes before; on Fridays visits start at 2.30pm. Closed to visitors for the midday and afternoon prayers, from 30 minutes before the call to 15 minutes after the end (2026).",
        tempo: "45 minutes",
        costo: "Free entry (2026)",
        orari: "April-September 8:30am-7pm, October-March 8:30am-5pm; Fridays from 2:30pm; closed to visitors during prayers (2026)",
        lat: 41.00539,
        lng: 28.97682,
        url: "https://sultanahmetcami.org/",
        consiglio: "If your clothes are not suitable, borrow some from the loan counter at the entrance and return them there.",
      },
      {
        nome: "Topkapı Palace and Harem",
        testo: "The main residence of the Ottoman sultans for about four centuries, until the mid-19th century: courtyards, pavilions, treasury and Harem, on the promontory between the Bosphorus, the Sea of Marmara and the Golden Horn.",
        come: "On foot from Hagia Sophia. The ticket for foreigners includes the Harem and Hagia Irene; it can also be bought online.",
        quando: "Closed on Tuesdays. Open 9am-5:30pm, ticket office until 5pm (2026). Arrive at opening.",
        tempo: "2-3 hours",
        costo: "2,750 TL (about €50) for foreign visitors with the Harem and Hagia Irene, valid one day; Harem or Hagia Irene alone 1,050 TL (2026)",
        orari: "9am-5:30pm, ticket office until 5pm; closed Tuesdays (2026)",
        lat: 41.013,
        lng: 28.984,
        url: "https://www.millisaraylar.gov.tr/en/palaces/topkapi-palace",
        consiglio: "Go first to the Harem and the Treasury, which have queues, then the courtyards.",
      },
      {
        nome: "Basilica Cistern",
        testo: "A huge underground Byzantine reservoir from the 6th century, Justinian's time, with 336 marble columns in 12 rows, softly lit. Two columns stand on reused blocks carved with Medusa's head.",
        come: "On foot from Hagia Sophia. In high season an online ticket is best.",
        quando: "Early morning or evening, when the queue is shorter.",
        tempo: "45 minutes",
        costo: "about 1,950-2,250 TL by day (about €35-40), 3,000 TL for the evening session (about €55); not in the Museum Pass (2026, indicative prices)",
        orari: "Daytime 9am-6:30pm, evening session 7:30pm-10pm (2026)",
        lat: 41.00806,
        lng: 28.97778,
        consiglio: "Avoid the weekend and the middle of the day.",
      },
      {
        nome: "Grand Bazaar and Spice Bazaar",
        testo: "The covered market with over 4,000 shops selling carpets, ceramics and jewellery; a little further on, the spice market with tea, Turkish sweets and dried fruit.",
        come: "T1 tram to Beyazıt-Kapalıçarşı, or on foot from Hagia Sophia.",
        quando: "In the morning, before the crowds; the Grand Bazaar is closed on Sundays.",
        tempo: "2 hours",
        costo: "free entry",
        orari: "Grand Bazaar closed on Sundays",
        lat: 41.01058,
        lng: 28.96793,
        consiglio: "At the Spice Bazaar, taste before you buy.",
      },
      {
        nome: "Galata Tower",
        testo: "The Genoese stone tower completed in 1348 above Karaköy, about 63 metres high. From the terrace at the top you see the Golden Horn, the Bosphorus and the historic peninsula with its domes and minarets. Since 2020 it has been a museum.",
        come: "T1 tram to Karaköy, then walk up the narrow streets; or take the historic Tünel funicular. Inside, a lift goes to the sixth floor, then stairs climb to the terrace, at about 40 metres.",
        quando: "Open daily 8:30am-6:30pm, ticket office until about 6:15pm (2026). Best at opening or in the last hour: at midday there is a queue.",
        tempo: "1 hour",
        costo: "about €30 for foreign visitors (2026)",
        orari: "Daily 8:30am-6:30pm, ticket office until about 6:15pm (2026)",
        lat: 41.02564,
        lng: 28.97421,
        url: "https://muze.gov.tr/",
        consiglio: "Walk all the way round the terrace: each side has a different view.",
      },
      {
        nome: "Süleymaniye Mosque",
        testo: "The great mosque Sinan built for Suleiman the Magnificent, completed in 1557, on the city's third hill. Plainer and less crowded than the Blue Mosque, it has a terrace over the Golden Horn and, in the garden, the tombs of Suleiman and his wife Hürrem.",
        come: "10-15 minutes uphill on foot from the Grand Bazaar. Same dress rules as the other mosques.",
        quando: "Outside prayer times; at sunset the Golden Horn terrace is at its best.",
        tempo: "45 minutes-1 hour",
        costo: "free entry",
        lat: 41.01611,
        lng: 28.96389,
        consiglio: "Walk down afterwards to the Spice Bazaar through the old craftsmen's streets.",
      },
      {
        nome: "Dolmabahçe Palace",
        testo: "The palace on the Bosphorus where the sultans moved in the mid-19th century, with 285 rooms mixing Ottoman and European Baroque styles, Baccarat crystal and the great ceremonial hall. Atatürk died here in 1938: the palace clocks are stopped at 9:05.",
        come: "Tram T1 to Kabataş, then 5 minutes on foot. Visits follow a guided route in groups; tickets also on the official Milli Saraylar app.",
        quando: "Morning, arriving when the ticket office opens.",
        tempo: "2 hours",
        costo: "2,000 TL (about €35) for foreign visitors with the Selamlık, Harem and painting museum (2026)",
        orari: "Ticket office 9am-5pm; closed Mondays (2026)",
        lat: 41.03944,
        lng: 29.00167,
        url: "https://www.millisaraylar.gov.tr/en/palaces/dolmabahce-palace",
      },
      {
        nome: "Istanbul Archaeology Museums",
        testo: "Three museums in the same garden below Topkapı: the archaeology museum with the so-called Alexander Sarcophagus, the Museum of the Ancient Orient and the Tiled Kiosk. A world-class collection that people short on time often skip.",
        come: "On foot from Sultanahmet, through Gülhane Park. Included in the Museum Pass Istanbul.",
        quando: "In the afternoon, after Topkapı.",
        tempo: "1.5-2 hours",
        lat: 41.0117,
        lng: 28.98132,
      },
      {
        nome: "Chora (Kariye)",
        testo: "The former Church of the Holy Saviour in Chora, with one of the finest cycles of Byzantine mosaics and frescoes in the world, from the early 14th century. Converted into a mosque, it reopened to visitors in 2024, with the narthex mosaics visible again.",
        come: "Out of the way, near the Theodosian Walls: bus or taxi from Sultanahmet, or 20 minutes on foot from Balat. Included in the Museum Pass Istanbul.",
        quando: "Morning, combined with Balat and Fener.",
        tempo: "1 hour",
        lat: 41.03122,
        lng: 28.93903,
      },
      {
        nome: "Balat and Fener",
        testo: "The old Jewish and Greek quarters on the Golden Horn, with colourful houses on steep streets, the iron church of St Stephen of the Bulgars and the Ecumenical Patriarchate of Constantinople. Explored on foot, between cafés and small shops.",
        come: "Bus or taxi from Eminönü along the Golden Horn, or the Golden Horn ferry line to Fener or Balat.",
        quando: "Weekday mornings; at weekends the photo streets get crowded.",
        tempo: "2-3 hours",
        costo: "free entry",
        lat: 41.0328,
        lng: 28.9456,
      },
      {
        nome: "Bosphorus cruise",
        testo: "The best way to understand the city: the public ferry runs up the strait between Europe and Asia, under the bridges and past palaces, wooden yalı mansions and fortresses, to Anadolu Kavağı near the Black Sea.",
        come: "Şehir Hatları long public ferry from Eminönü; shorter routes with the tourist boats at the pier.",
        quando: "The long ferry leaves in the morning; in summer the afternoon light is best on the way back.",
        tempo: "Half a day, or a full day with the long ferry",
        costo: "about 320 TL return (about €6) on the long public ferry (2026, to be rechecked)",
        orari: "Long ferry: leaves Eminönü at 10:35am, returns from Anadolu Kavağı at 3pm (2026, to be rechecked)",
        lat: 41.01722,
        lng: 28.97111,
        consiglio: "At Anadolu Kavağı, walk up to Yoros Castle for the view over the mouth of the Black Sea.",
      },
      {
        nome: "Kadıköy and Moda",
        testo: "The heart of the Asian side: a market of fish, fruit and pickles, everyday eateries where locals eat and, further south, the Moda seafront for sunset. This is everyday Istanbul, far from the monuments.",
        come: "Ferry from Eminönü or Karaköy, 20 minutes, with the Istanbulkart.",
        quando: "Afternoon and evening.",
        tempo: "Half a day",
        costo: "free entry",
        lat: 40.99339,
        lng: 29.03736,
        consiglio: "The ferry crossing, with a tea bought on board, is worth the trip on its own.",
      },
      {
        nome: "İstiklal and Beyoğlu",
        testo: "The great pedestrian avenue between Taksim Square and the Galata Tower, with the red heritage tram, 19th-century arcades such as the Çiçek Pasajı, Levantine churches and bookshops. Around it, the streets of meyhane taverns with meze and rakı.",
        come: "Metro M2 to Taksim and walk down, or up from Karaköy on the Tünel funicular.",
        quando: "Late afternoon and evening.",
        tempo: "2 hours",
        costo: "free entry",
        lat: 41.03417,
        lng: 28.97889,
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Hagia Sophia at opening time and the Blue Mosque",
          "Basilica Cistern",
          "Afternoon: Topkapı Palace with the Harem",
          "Evening: sunset ferry and dinner in Karaköy",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Grand Bazaar in the morning",
          "Süleymaniye Mosque and down to the Spice Bazaar",
          "Afternoon: ferry to Kadıköy and sunset in Moda",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: public Bosphorus ferry from Eminönü, or Dolmabahçe in the morning",
          "Afternoon: Galata Tower and İstiklal",
          "Alternatively: Balat, Fener and Chora instead of the Bosphorus",
        ],
      },
    ],
    zone: [
      {
        nome: "Sultanahmet",
        perChi: "those with little time who want to be among the monuments",
        testo: "You walk to almost everything. It is touristy, with expensive restaurants and insistent sellers; in the evening it quiets early.",
        fascia: "€50-120",
      },
      {
        nome: "Galata / Karaköy",
        perChi: "those who want bars, cafes and nightlife",
        testo: "A trendy district, with boutique hotels and terraces. The slopes are steep and at night it is noisy.",
        fascia: "€90-180",
      },
      {
        nome: "Beyoğlu / Taksim",
        perChi: "those who want nightlife and connections",
        testo: "The heart of night life, near metro and tram. Noisy and less polished.",
        fascia: "€60-140",
      },
      {
        nome: "Kadıköy",
        perChi: "those who want a more local Istanbul and lower prices",
        testo: "The Asian side, lively and full of eateries; the monuments are a 20-minute ferry ride away, which becomes part of the trip.",
        fascia: "€50-110",
      },
    ],
    sapori: [
      {
        "nome": "Balık ekmek",
        "testo": "A sandwich with grilled fish, on the Galata Bridge and at Eminönü."
      },
      {
        "nome": "Meze and rakı",
        "testo": "Cold small plates and aniseed spirit in the meyhanes of Beyoğlu."
      },
      {
        "nome": "Börek and simit",
        "testo": "Savory pastry and a sesame ring, for breakfast or a break."
      },
      {
        "nome": "Baklava and lokum",
        "testo": "Sweets with pistachio and honey, in the old pastry shops."
      }
    ],
    attenzioni: [
      "Strangers inviting you for a drink or dinner somewhere: the UK government warns of both inflated bills and spiked drinks. Choose where to go yourself and keep your glass in sight.",
      "Pickpocketing is common in tourist areas: keep your bag and phone under control, especially on the tram and in the bazaars.",
      "Restaurants in Sultanahmet without posted prices: ask for the menu with prices before sitting.",
      "Taxis: only registered ones with the meter on, or apps; note the plate number. Avoid lifts offered by unofficial drivers.",
      "Regional tensions: the UK government (October 2026) warns of possible flight cancellations and airspace closures across the Middle East and advises against all travel within 10 km of the Syrian border. Check your government's travel advice before leaving."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Princes' Islands",
        distanza: "1-1.5 hours by ferry",
        come: "Public ferry from Kabataş or Eminönü to Büyükada, the largest island; pay with the Istanbulkart.",
        testo: "Nine car-free islands in the Sea of Marmara, with 19th-century wooden villas, pine woods and small beaches. Explored on foot, by bike or by electric minibus.",
      },
      {
        nome: "Bursa",
        distanza: "about 2-2.5 hours",
        come: "Fast ferry from Istanbul to Mudanya or Güzelyalı, then a bus to the centre; or a direct bus.",
        testo: "The first Ottoman capital, with the Grand Mosque, the Green Mosque, the tombs of the early sultans and the silk caravanserais. In winter it is also the gateway to the Uludağ slopes.",
      },
      {
        nome: "Edirne",
        distanza: "about 2.5-3 hours by bus",
        come: "Bus from Esenler or Alibeyköy coach stations.",
        testo: "The town on the Greek and Bulgarian borders, home to the Selimiye Mosque, which Sinan considered his masterpiece, a UNESCO site. A long but feasible day trip.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Istanbul?",
        risposta: "Three days for Sultanahmet, the bazaars, the Süleymaniye, the Bosphorus and a crossing to the Asian side; four add Dolmabahçe, Chora and Balat without rushing.",
      },
      {
        domanda: "Is the Museum Pass Istanbul worth it?",
        risposta: "It pays off if you visit Topkapı with the Harem plus at least two or three museums such as the Archaeology Museums or Chora. It does not include Hagia Sophia, the Basilica Cistern or the Galata Tower.",
      },
      {
        domanda: "Do you have to pay for Hagia Sophia?",
        risposta: "Yes: since 2024 foreign visitors pay €25 and follow a route through the upper galleries, while the ground floor is reserved for prayer. The Blue Mosque and the Süleymaniye remain free.",
      },
      {
        domanda: "How should you dress to enter mosques?",
        risposta: "Shoulders and knees covered for everyone, head covered for women, shoes off at the entrance. The main mosques lend scarves and long skirts at the door.",
      },
      {
        domanda: "Is it better to stay in Sultanahmet or Karaköy?",
        risposta: "Sultanahmet for those short on time who want to walk to the monuments; Karaköy and Galata for bars and nightlife, a tram ride or a walk from the old city.",
      },
      {
        domanda: "How do you get around the city?",
        risposta: "With the rechargeable Istanbulkart, valid on the T1 tram, metro, funiculars, buses and ferries. The T1 tram links Sultanahmet, the Grand Bazaar, Eminönü, Karaköy and Kabataş.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Hagia Sophia seen from the northwest, with the great dome and the four minarets',
    immagine: '/images/viaggi/turchia-itinerario/giorno-02-istanbul.jpg',
  },
  {
    slug: 'cappadocia',
    paeseSlug: 'turchia',
    ordine: 2,
    nome: 'Cappadocia',
    tipologia: ['paesaggio', 'trekking', 'storia'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    introduzione:
      "A plateau of volcanic tuff that erosion has carved into fairy chimneys, valleys and pinnacles, with Byzantine rock-cut churches and underground cities.",
    percheAndarci:
      "For the hot-air balloons at dawn, the frescoed churches of the Göreme Open-Air Museum, walks in the valleys and nights in a hotel carved into the rock.",
    cosaVedere: [
      'The Göreme Open-Air Museum and the Dark Church',
      'The citadel of Uçhisar',
      'The Red Valley and the Rose Valley at sunset',
      'Paşabağ (Monks Valley) and the Devrent valley',
      'The underground cities of Derinkuyu and Kaymaklı',
      'The Ihlara valley',
    ],
    cosaFare: [
      'The hot-air balloon flight at dawn',
      'Trekking in Love Valley and Pigeon Valley',
      'A horseback or quad ride at sunset',
    ],
    doveDormire:
      "Göreme for convenience, Uçhisar and Ortahisar for the view and the quiet, Ürgüp for restaurants and wineries. Budget: guesthouses in Göreme · mid-range: cave hotels in Göreme and Uçhisar · luxury: Argos in Cappadocia, Museum Hotel.",
    doveMangiare:
      "Testi kebab cooked in a clay pot, mantı (dumplings with yogurt), pide, the wines of Ürgüp and Uçhisar.",
    comeArrivare: "From Istanbul you fly in about an hour to Kayseri (ASR) or Nevşehir (NAV), roughly €40-90 with luggage. From Kayseri to Göreme the transfer takes about an hour, from Nevşehir about 40 minutes; shared transfers, roughly €10-15 per person, are booked through the hotel according to the flight time. Alternatively, night buses from Istanbul take 10-11 hours, and those to Pamukkale leave from Göreme and Nevşehir (9-10 hours, €20-35).",
    comeSpostarsi: 'Rental car or day tours (Red Tour, Green Tour); dolmuş minibuses connect Göreme, Uçhisar, Avanos and Ürgüp.',
    periodoMigliore: "April-June and September-October; in winter there is snow and the landscape is beautiful, but more balloon flights get canceled",
    costi: "Low budget about €50-70 a day per person (guesthouse in Göreme, dolmuş, one museum, food in village restaurants); mid €110-170 (cave hotel, a day tour or a car, two sites a day, dinners with wine); high from €300 up (cave hotel with a terrace in Uçhisar, balloon, private guide). Tickets 2026: Göreme Open-Air Museum €20, Dark Church €6, Zelve-Paşabağ €12, Derinkuyu or Kaymaklı €13; balloon €150-350.",
    erroriDaEvitare: [
      "Booking the balloon for your last morning: flights get canceled when it's windy, and it's best to have at least one spare day",
      'Choosing the operator on price alone: the license and the number of passengers per basket matter',
      'Visiting the open-air museum at noon, when all the groups arrive',
    ],
    miaEsperienza:
      "I flew in from Istanbul during the sixteen days in Turkey with friends: three days based in Göreme, the hot-air balloon at dawn, the open-air museum, the Red Valley, Uçhisar and the underground city, then the night bus to Pamukkale.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Göreme Open-Air Museum",
        "testo": "A cluster of rock-cut churches and monasteries carved into the stone cones, with frescoes mostly from the 10th and 11th centuries. The Dark Church (Karanlık) is one of the finest.",
        "come": "From Göreme on foot or by shuttle.",
        "quando": "At opening, before the groups.",
        "tempo": "1.5-2 hours",
        "costo": "€20 for foreign visitors (muze.gov.tr, 2026); Dark Church €6 extra",
        "orari": "Daily 8am-5pm, ticket office until 4:15pm (2026)",
        "lat": 38.6427,
        "lng": 34.84503,
        "url": "https://muze.gov.tr/muze-detay?SectionId=GRM01&DistId=GRM",
        "consiglio": "Ask at the ticket office whether the Dark Church needs a supplement: the colours are worth the stop."
      },
      {
        "nome": "Hot-air balloon at dawn",
        "testo": "The flight over the valleys and fairy chimneys at sunrise is the reason many come here.",
        "come": "Book with a licensed operator, with hotel pickup before dawn.",
        "quando": "At dawn, when the weather allows: in strong wind flights are cancelled.",
        "tempo": "About an hour in the air, half a morning in total",
        "consiglio": "Book for the first days and keep one in reserve: flights are canceled in wind."
      },
      {
        "nome": "Red Valley and Rose Valley",
        "testo": "Paths among pink and red rocks with churches carved into the rock, beautiful at sunset.",
        "come": "Start on foot from Göreme or drive to a viewpoint.",
        "quando": "Sunset.",
        "tempo": "2-3 hours",
        "costo": "Free",
        "lat": 38.65099,
        "lng": 34.85359
      },
      {
        "nome": "Derinkuyu and Kaymaklı",
        "testo": "The multi-level underground cities, used for centuries as refuges during raids. Derinkuyu goes down to about 85 metres and could shelter thousands of people with their animals; rolling stone doors sealed the corridors.",
        "come": "By car or on a tour from Göreme.",
        "quando": "Early morning to avoid the crowd in the corridors.",
        "tempo": "1-1.5 hours",
        "costo": "€13 each for foreign visitors (muze.gov.tr, 2026)",
        "orari": "Daily 8am-5pm, ticket office until 4:15pm (2026)",
        "lat": 38.37357,
        "lng": 34.7351,
        "url": "https://muze.gov.tr/muze-detay?SectionId=DKY01&DistId=DKY",
        "consiglio": "If you are claustrophobic, think carefully: the corridors are narrow and low."
      },
      {
        "nome": "Dark Church (Karanlık Kilise)",
        "testo": "The church in the open-air museum with the best-preserved frescoes in Cappadocia: its few windows protected the colours, especially the blue backgrounds. It has been restored and costs extra.",
        "come": "Inside the Göreme Open-Air Museum, separate ticket.",
        "quando": "In the same visit to the museum, early.",
        "tempo": "15-20 minutes",
        "costo": "€6 for foreign visitors (muze.gov.tr, 2026)",
        "orari": "Daily 8am-5pm, ticket office until 4:45pm (2026)",
        "lat": 38.6387,
        "lng": 34.84626,
        "url": "https://muze.gov.tr/muze-detay?SectionId=GRM02&DistId=GRM"
      },
      {
        "nome": "Zelve and Paşabağ",
        "testo": "Two sites on one ticket: Zelve is a valley of carved houses and churches, inhabited until the 1950s and abandoned because of the risk of collapse; Paşabağ, the Monks Valley, has multi-capped fairy chimneys with hermits' cells.",
        "come": "By car, quad or dolmuş towards Avanos, 10-15 minutes from Göreme.",
        "quando": "Late afternoon, in the low light.",
        "tempo": "1.5-2 hours",
        "costo": "€12 for foreign visitors (muze.gov.tr, 2026)",
        "orari": "Daily 8am-5pm, ticket office until 4:15pm (2026)",
        "lat": 38.66917,
        "lng": 34.86337,
        "url": "https://muze.gov.tr/muze-detay?SectionId=ZPO01&DistId=ZPO"
      },
      {
        "nome": "Devrent Valley",
        "testo": "Also called Imagination Valley: pink rocks with no churches or houses, where people look for animal shapes, the most famous being the camel. It can be seen quickly from the road.",
        "come": "By car between Zelve and Ürgüp, a stop at the roadside.",
        "quando": "Late afternoon.",
        "tempo": "20-30 minutes",
        "costo": "Free",
        "lat": 38.67262,
        "lng": 34.88551
      },
      {
        "nome": "Uçhisar Castle",
        "testo": "The highest rock spur in the area, riddled with rooms and passages, towering over the village of Uçhisar. From the top you see Göreme, the valleys and, on clear days, Mount Erciyes.",
        "come": "By car or dolmuş from Göreme, 10 minutes; steps to the top.",
        "quando": "At sunset.",
        "tempo": "45 minutes-1 hour",
        "lat": 38.63033,
        "lng": 34.80556
      },
      {
        "nome": "Love Valley",
        "testo": "The valley of tall, elongated mushroom-shaped pinnacles, the one most photographed from the balloons. A trail runs along the bottom, among vineyards and fruit trees.",
        "come": "On foot from Göreme or from the Uçhisar road; the trail is easy but poorly marked.",
        "quando": "At dawn, under the balloons, or in the afternoon.",
        "tempo": "2-3 hours on foot",
        "costo": "Free",
        "lat": 38.66069,
        "lng": 34.81961
      },
      {
        "nome": "Pigeon Valley",
        "testo": "The valley between Uçhisar and Göreme named after the thousands of dovecotes carved into the rock, used to collect guano as fertiliser for the vineyards. The trail drops into a green canyon.",
        "come": "On foot, downhill from Uçhisar to Göreme.",
        "quando": "Morning or afternoon, avoiding the hot hours in summer.",
        "tempo": "1.5-2 hours",
        "costo": "Free",
        "lat": 38.63278,
        "lng": 34.81611
      },
      {
        "nome": "Ortahisar Castle",
        "testo": "The other great fortified spur of Cappadocia, in the village of Ortahisar, less visited than Uçhisar. Around it are storehouses in the tuff where citrus fruit and potatoes are kept.",
        "come": "By car from Göreme or Ürgüp, 10 minutes.",
        "quando": "Afternoon.",
        "tempo": "45 minutes",
        "lat": 38.61994,
        "lng": 34.86433
      },
      {
        "nome": "Avanos",
        "testo": "The small town on the Kızılırmak, Turkey's longest river, famous for pottery made with the river's red clay. You can step into the workshops to watch the kick wheel.",
        "come": "By dolmuş or car from Göreme, 15 minutes.",
        "quando": "Afternoon, together with Zelve and Paşabağ.",
        "tempo": "1-2 hours",
        "lat": 38.715,
        "lng": 34.84667
      },
      {
        "nome": "Ihlara Valley",
        "testo": "A canyon about a hundred metres deep cut by the Melendiz river, with a trail along the stream and frescoed rock churches in the walls. It is the greenest walk in the region.",
        "come": "By car or on the Green Tour, about 1.5 hours from Göreme; the classic stretch runs from Ihlara to Belisırma.",
        "quando": "Morning; in summer for the coolness of the river.",
        "tempo": "half a day",
        "lat": 38.2575,
        "lng": 34.29528,
        "consiglio": "Lunch at the streamside restaurants in Belisırma, then a taxi back to the car."
      },
      {
        "nome": "Selime Monastery",
        "testo": "The large rock-cut complex at the end of the Ihlara valley, with a cathedral carved on two levels, kitchens and stables. The landscape around it has been used as a set for science-fiction films.",
        "come": "By car or on the Green Tour, combined with Ihlara.",
        "quando": "Afternoon, after Ihlara.",
        "tempo": "45 minutes-1 hour",
        "lat": 38.3012,
        "lng": 34.25943
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "At dawn: hot-air balloon, or the sky full of balloons from Göreme's terraces",
          "Göreme Open-Air Museum and the Dark Church",
          "Afternoon: Zelve, Paşabağ and Devrent",
          "Sunset over the Red Valley"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1 as above",
          "Day 2: Derinkuyu or Kaymaklı underground city",
          "Ihlara Valley and Selime Monastery",
          "Sunset from Uçhisar Castle"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: hike through Pigeon Valley and Love Valley",
          "Afternoon in Avanos among the pottery workshops, or Ortahisar Castle",
          "Dinner and wine in Ürgüp, with the spare day for the balloon"
        ]
      }
    ],
    zone: [
      {
        "nome": "Göreme",
        "perChi": "those who want to be near everything",
        "testo": "Cave hotels, restaurants and balloon departures. The most touristy.",
        "fascia": "€40-170"
      },
      {
        "nome": "Uçhisar",
        "perChi": "those who want views and quiet",
        "testo": "A village under the castle, charming hotels with a panoramic terrace.",
        "fascia": "€90-170"
      },
      {
        "nome": "Ürgüp / Mustafapaşa",
        "perChi": "those who want a less touristy place",
        "testo": "Quieter towns, with local restaurants and wine."
      }
    ],
    sapori: [
      {
        "nome": "Testi kebab",
        "testo": "Meat and vegetables cooked in a clay jar that is broken at the table."
      },
      {
        "nome": "Mantı",
        "testo": "Small ravioli with yogurt and spiced butter."
      },
      {
        "nome": "Cappadocian wines",
        "testo": "Whites from the Emir grape and local reds, in the wineries of Ürgüp and Uçhisar."
      },
      {
        "nome": "Pide",
        "testo": "Boat-shaped Turkish pizza with cheese or meat, in local ovens."
      }
    ],
    attenzioni: [
      "Balloon on the last morning: it is canceled in wind, so keep one in reserve.",
      "Choose the operator by license and passengers per basket, not only price.",
      "Open-Air Museum at midday: all the groups arrive, better at opening.",
      "Quad and horse rentals: check the condition of the vehicles and the insurance before leaving."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Soğanlı Valley",
        "distanza": "about 55-60 km, 1 hour",
        "come": "By car; there are no regular tours.",
        "testo": "Two valleys with painted rock churches and the village of rag dolls, with almost no tourists. Cappadocia as it must have been before the boom."
      },
      {
        "nome": "Kayseri",
        "distanza": "about 75 km, 1 hour",
        "come": "By car or by bus from Nevşehir; many flights to Istanbul leave from here.",
        "testo": "The Seljuk city at the foot of the Erciyes volcano, with its citadel, 13th-century madrasas and bazaar. In winter you can ski on Erciyes."
      },
      {
        "nome": "Hacıbektaş",
        "distanza": "about 55 km, 45 minutes",
        "come": "By car from Göreme or Avanos.",
        "testo": "The complex of the Sufi saint Hacı Bektaş Veli, centre of the Alevi tradition, with the museum and the mausoleum in a quiet garden."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Cappadocia?",
        "risposta": "Three nights: two full days for museums, valleys and underground cities, plus a spare morning for the balloon, which gets cancelled in wind."
      },
      {
        "domanda": "Is it better to stay in Göreme, Uçhisar or Ürgüp?",
        "risposta": "Göreme is the most convenient, with everything on foot; Uçhisar and Ortahisar are quieter and have views; Ürgüp has more restaurants and wineries but you need a car for the valleys."
      },
      {
        "domanda": "How much does the balloon cost and when do you fly?",
        "risposta": "There is no official price: roughly €150-350 per person depending on season, operator and number of passengers in the basket. Flights leave at dawn and last about an hour."
      },
      {
        "domanda": "Derinkuyu or Kaymaklı?",
        "risposta": "Derinkuyu goes deeper and is more spectacular, Kaymaklı is closer to Göreme and often less crowded. The ticket is €13 at both: for most people one is enough."
      },
      {
        "domanda": "Do you need a car in Cappadocia?",
        "risposta": "It is not essential: dolmuş minibuses run between Göreme, Uçhisar, Avanos and Ürgüp, and Ihlara and the underground cities are covered by the Green Tour. A car gives freedom for sunsets and distant valleys."
      },
      {
        "domanda": "Is the Museum Pass Cappadocia worth it?",
        "risposta": "Göreme (€20), the Dark Church (€6), Zelve-Paşabağ (€12) and one underground city (€13) add up to €51; the pass, around €65 for three days, pays off only if you add other sites."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Hot-air balloons above the tuff valleys of Göreme National Park, in Cappadocia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-06-cappadocia.jpg',
  },
  {
    slug: 'pamukkale',
    paeseSlug: 'turchia',
    ordine: 3,
    nome: 'Pamukkale and Hierapolis',
    tipologia: ['paesaggio', 'archeologia', 'terme'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      "A hill of white travertine terraces formed by hot springs, with the ruins of the Roman city of Hierapolis on top.",
    percheAndarci:
      "For walking barefoot in the limestone pools, for the Roman theater of Hierapolis and for Cleopatra's ancient pool, with its submerged columns.",
    cosaVedere: [
      'The travertine terraces',
      'The theater and the necropolis of Hierapolis',
      'The Antique Pool, with separate admission',
      "The martyrium of Saint Philip",
    ],
    cosaFare: ['Walking up barefoot from the bottom at sunset', 'A swim in the Antique Pool'],
    doveDormire: 'The village of Pamukkale, at the foot of the terraces, with guesthouses and small hotels with thermal pools.',
    comeArrivare: "The nearest airport is Denizli Çardak, about an hour's drive away, with flights from Istanbul; shuttles and taxis run from there to the village. By bus you get off at Denizli bus station and take the minibus (dolmuş) to Pamukkale, at the foot of the hill. The overnight bus from Cappadocia, from Göreme or Nevşehir, takes about 9-10 hours and costs roughly €20-35; from Selçuk it takes about 3 hours, from Antalya about 4. By car, Pamukkale-Aphrodisias-Selçuk is about 3.5 hours of driving.",
    comeSpostarsi: 'On foot; dolmuş to Denizli.',
    periodoMigliore: "spring and autumn; in summer the white terraces dazzle and burn",
    costi: "Low budget about €60-80 a day per person (guesthouse in the village, food in local places, €30 ticket); mid €100-150 (hotel with thermal pool, Antique Pool, Laodicea, dinner at a restaurant); high €200 and up (thermal hotel in Karahayıt, car, guide). 2026 tickets for foreign visitors: Pamukkale-Hierapolis €30, Laodicea €12, Aphrodisias €12; the Antique Pool is paid separately, in lira.",
    erroriDaEvitare: [
      'Going up at noon in summer: the glare off the white is blinding',
      'Expecting all the pools to be full: many are left dry on rotation to preserve the travertine',
    ],
    miaEsperienza:
      "I arrived on the night bus from Cappadocia during the sixteen days in Turkey with friends: a day between the terraces and Hierapolis, then by car towards Aphrodisias and Ephesus.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Travertine terraces",
        "testo": "The white limestone pools down the slope, filled by hot springs. The authorities regulate the water and close some sections in turn so the travertine can regenerate. UNESCO World Heritage since 1988 together with Hierapolis.",
        "come": "Entrance from the south or north of the site; bus or car to the parking lot. From the lower entrance, in the village, you walk up barefoot in about half an hour.",
        "quando": "At sunset, with the light on the white; at midday in summer it is blinding.",
        "tempo": "1-2 hours",
        "costo": "€30 for foreign visitors, single ticket with Hierapolis (muze.gov.tr, 2026)",
        "orari": "Daily 8am-6pm, ticket office until 5pm (muze.gov.tr, 2026)",
        "lat": 37.92389,
        "lng": 29.12333,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK",
        "consiglio": "Bring a towel and swimsuit, knowing that many pools may be dry."
      },
      {
        "nome": "Hierapolis and the Antique Pool",
        "testo": "The ruins of the city founded in the 2nd century BC above the terraces: the theatre, the necropolis with about 1,200 tombs, the octagonal Martyrium of St Philip and the ancient hot-water pool with columns on the bottom.",
        "come": "You walk around the site. The pool is paid separately.",
        "quando": "Early morning or late afternoon.",
        "tempo": "2 hours",
        "costo": "Included in the €30 travertines ticket; Antique Pool extra, in lira",
        "orari": "Daily 8am-6pm, ticket office until 5pm (muze.gov.tr, 2026)",
        "lat": 37.925,
        "lng": 29.12583,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Theatre of Hierapolis",
        "testo": "The Roman theatre cut into the hillside, with a stage building decorated with reliefs restored by the Italian archaeological mission that has worked here for decades. From the top rows you see the whole Lycus valley.",
        "come": "On foot from the Antique Pool, about ten minutes uphill.",
        "quando": "Morning, before the heat: the path has no shade.",
        "tempo": "30-45 minutes",
        "costo": "Included in the Hierapolis ticket",
        "lat": 37.9267,
        "lng": 29.1292,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Necropolis of Hierapolis",
        "testo": "One of the largest ancient cemeteries in Anatolia, along the road coming in from the north: tumuli, sarcophagi and house tombs, many tilted by earthquakes. You cross it when entering from the north gate.",
        "come": "From the north entrance of the site, on foot along the ancient road.",
        "quando": "Late afternoon, with low light.",
        "tempo": "45 minutes-1 hour",
        "costo": "Included in the Hierapolis ticket",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Frontinus Gate and Frontinus Street",
        "testo": "The monumental three-arched gate between two round towers, built at the end of the 1st century AD by the proconsul Julius Frontinus and dedicated to Emperor Domitian. The city's main colonnaded street starts here.",
        "come": "From the north entrance, after the necropolis.",
        "quando": "Together with the necropolis.",
        "tempo": "20 minutes",
        "costo": "Included in the Hierapolis ticket",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Martyrium of St Philip",
        "testo": "The 5th-century octagonal shrine built where tradition places the martyrdom of the apostle Philip, on the hill above the city. In 2011 the Italian mission announced the discovery, near the martyrium, of the church holding what it believes is his tomb.",
        "come": "Walk up from the theatre, about 15-20 minutes on steps and path.",
        "quando": "Early morning or late afternoon.",
        "tempo": "1 hour including the climb",
        "costo": "Included in the Hierapolis ticket",
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Plutonium",
        "testo": "The cave sacred to Pluto that releases carbon dioxide, which in antiquity killed the animals offered in sacrifice. Found and excavated by the Italian mission, it is seen from outside, next to the temple of Apollo.",
        "come": "On foot, between the theatre and the Antique Pool.",
        "quando": "Any time during the visit.",
        "tempo": "15 minutes",
        "costo": "Included in the Hierapolis ticket",
        "lat": 37.9268,
        "lng": 29.12681,
        "url": "https://muze.gov.tr/muze-detay?SectionId=PMK01&DistId=PMK"
      },
      {
        "nome": "Hierapolis Archaeological Museum",
        "testo": "The museum inside the great Roman baths, with vaulted halls of travertine blocks. It shows sarcophagi, statues and reliefs from Hierapolis, Laodicea and Tripolis, useful for making sense of the ruins outside.",
        "come": "Next to the Antique Pool, in the centre of the site.",
        "quando": "In the hottest hours, when the sun is fierce outside.",
        "tempo": "45 minutes",
        "costo": "Listed at €30 on muze.gov.tr, the same amount as the site ticket",
        "orari": "Daily 8am-5:30pm, ticket office until 5pm (muze.gov.tr, 2026)",
        "lat": 37.92506,
        "lng": 29.12405,
        "url": "https://muze.gov.tr/muze-detay?SectionId=DHA01&DistId=MRK"
      },
      {
        "nome": "Karahayıt",
        "testo": "The spa village a few kilometres north of Pamukkale, where an iron-rich hot spring stains the limestone red and orange. Around it are many hotels with thermal pools.",
        "come": "By dolmuş or car from Pamukkale village, about 10 minutes.",
        "quando": "Evening, after visiting Hierapolis.",
        "tempo": "1 hour",
        "costo": "The red spring is free to see",
        "lat": 37.96539,
        "lng": 29.10268
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Hierapolis, theater and necropolis",
          "Antique Pool",
          "Afternoon: climb the terraces",
          "Sunset on the travertine"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1 as above",
          "Day 2: Laodicea at opening time",
          "Hierapolis Archaeological Museum and the climb to the Martyrium of St Philip",
          "Evening at the red spring and thermal baths of Karahayıt"
        ]
      },
      {
        "titolo": "Along the route",
        "tappe": [
          "Overnight bus from Göreme or Nevşehir, arriving in Pamukkale early in the morning",
          "Terraces and Hierapolis during the day, night in the village",
          "Pick up the car in Denizli and head west",
          "Two-hour stop at Aphrodisias, then Selçuk for the evening"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pamukkale village",
        "perChi": "those who want to be under the terraces",
        "testo": "Family-run guesthouses, thermal pools and simple restaurants.",
        "fascia": "€35-70"
      },
      {
        "nome": "Karahayıt",
        "perChi": "those who want thermal baths",
        "testo": "A nearby village with spas and red iron-rich waters.",
        "fascia": "€60-250"
      },
      {
        "nome": "Denizli",
        "perChi": "those arriving late or leaving by car",
        "testo": "The city about half an hour away, with the bus station, car rentals and city hotels; not much to see, but handy for logistics."
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Thin pastry filled with cheese or spinach, cooked on the spot."
      },
      {
        "nome": "Denizli kebab",
        "testo": "Lamb slow-cooked in a wood-fired oven, served with bread."
      },
      {
        "nome": "Ayran",
        "testo": "Salty liquid yogurt, for the heat."
      },
      {
        "nome": "Turkish tea",
        "testo": "In the tulip glass, everywhere."
      }
    ],
    attenzioni: [
      "Climbing at midday in summer: the white glare is blinding and the heat burns.",
      "Expecting every pool to be full: many sections are closed in turn to protect the travertine.",
      "Follow the guards' instructions on where and how to walk on the travertine: usually barefoot, so bring a bag for your shoes."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Aphrodisias",
        "distanza": "about 1.5 hours by car",
        "come": "By car, on the road towards Selçuk; awkward by public transport.",
        "testo": "The city of Aphrodite, UNESCO World Heritage since 2017, with an almost intact Roman stadium, the tetrapylon and a museum full of statues from its school of sculptors, including the reliefs of the Sebasteion. Ticket €12, open daily 8:30am-5:30pm (muze.gov.tr, 2026)."
      },
      {
        "nome": "Laodicea",
        "distanza": "about 20 minutes by car",
        "come": "By car or taxi from Pamukkale, towards Denizli.",
        "testo": "One of the seven churches of the Book of Revelation, with two theatres, colonnaded streets partly re-erected and a 4th-century church under a roof. Far less visited than Hierapolis. Ticket €12, daily 8am-5:30pm (muze.gov.tr, 2026)."
      }
    ],
    faq: [
      {
        "domanda": "How much time do you need in Pamukkale?",
        "risposta": "One full day is enough for the terraces and Hierapolis. It is worth sleeping in the village for sunset on the travertine and an early morning without groups; a second day only makes sense if you add Laodicea or Aphrodisias."
      },
      {
        "domanda": "How much is the Pamukkale entrance fee?",
        "risposta": "For foreign visitors the single ticket for the terraces and Hierapolis costs €30 in 2026. The Antique Pool is paid separately, in lira, at its own ticket desk."
      },
      {
        "domanda": "Can you bathe in the terraces?",
        "risposta": "You walk barefoot and wade in the open pools, which are shallow and change on rotation. For a real swim there is the Antique Pool, among the submerged columns."
      },
      {
        "domanda": "Is it better to enter from the lower or upper entrance?",
        "risposta": "From the lower entrance, in the village, you climb barefoot on the travertine in about half an hour, the nicest way to reach Hierapolis. The north and south entrances, reached by car or on tours, suit those who want to start from the ruins and the necropolis."
      },
      {
        "domanda": "Can you visit Pamukkale as a day trip from Selçuk?",
        "risposta": "Yes, on a tour or by bus, but it is about 3 hours each way and you miss the sunset. Better a night in the village, on the way between Cappadocia and the coast."
      },
      {
        "domanda": "Is the Museum Pass worth it?",
        "risposta": "The Museum Pass The Mediterranean, €90 for 7 days, covers state sites in the provinces of Antalya, Mersin, Adana and Denizli, so Pamukkale and Laodicea too. It pays off if you continue to the Lycian coast and Antalya."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'The white travertine pools of Pamukkale filled with blue water',
    immagine: '/images/viaggi/turchia-itinerario/giorno-08-pamukkale.jpg',
  },
  {
    slug: 'efeso',
    paeseSlug: 'turchia',
    ordine: 4,
    nome: 'Ephesus, Selçuk and Şirince',
    tipologia: ['archeologia', 'borghi'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The best-preserved Roman city in the eastern Mediterranean, with the Library of Celsus and the great theater, a few kilometers from the town of Selçuk and the hill village of Şirince.",
    percheAndarci:
      "For walking the Curetes Street up to the Library of Celsus, seeing the frescoes and mosaics of the Terrace Houses and spending an evening among the Greek houses of Şirince.",
    cosaVedere: [
      'The Library of Celsus and the great theater of Ephesus',
      'The Terrace Houses, with a separate ticket',
      'The Basilica of St. John and the Selçuk castle',
      'The Ephesus Museum in Selçuk',
      "The House of the Virgin Mary (Meryem Ana Evi)",
      'Aphrodisias, on the road from Pamukkale',
    ],
    cosaFare: ['Entering through the upper gate and walking down toward the library', 'Tasting the fruit wines in Şirince'],
    doveDormire: 'Selçuk for convenience and prices, Şirince for the quiet; Kuşadası for those who want the sea nearby.',
    comeArrivare: "The nearest airport is Izmir Adnan Menderes, about an hour's drive from Selçuk; regional trains from the airport station and from central Izmir run to Selçuk station. From Pamukkale there are direct buses in about 3 hours, while by car, via Aphrodisias, allow about 3.5 hours of driving. From Selçuk to the upper entrance of Ephesus it is only a few kilometres: a taxi for a few euros or a dolmuş.",
    comeSpostarsi: 'Taxi or dolmuş from Selçuk to the upper entrance of Ephesus (a few km); rental car.',
    periodoMigliore: 'April-June and September-October, always at opening time',
    costi: "Low budget about €70-90 a day per person (guesthouse in Selçuk, dolmuş, Ephesus, food in local places); mid €130-180 (stone house in Şirince or hotel in Selçuk, taxis, Terrace Houses and museum, dinners with wine); high €250 and up (boutique hotel, private guide, car). 2026 tickets for foreign visitors: Ephesus €40 including the Experience Museum, Terrace Houses €15, Ephesus Museum €10, Basilica of St John €6.",
    erroriDaEvitare: [
      'Going in mid-morning in high season, when the cruise ship passengers from Kuşadası arrive',
      'Skipping the Terrace Houses to save money: they are the best part of the site',
    ],
    miaEsperienza:
      "I went during the sixteen days in Turkey with friends, driving from Pamukkale with a stop at Aphrodisias: based in Selçuk, then Ephesus and Şirince.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Ephesus",
        "testo": "The great Greco-Roman city with the Library of Celsus (2nd century AD), the Great Theatre with about 24,000-25,000 seats, Curetes Street and the Terrace Houses, Roman residences with mosaics and frescoes under a roof.",
        "come": "From Selçuk by taxi or dolmuş; the upper entrance avoids the climb.",
        "quando": "At opening time, especially when the cruise ships arrive from Kuşadası: from 10am the site fills up.",
        "tempo": "2-3 hours",
        "costo": "€40 for foreign visitors, Ephesus Experience Museum included (muze.gov.tr, 2026)",
        "orari": "Daily 8am-6pm, ticket office until 5:30pm (muze.gov.tr, 2026)",
        "lat": 37.94097,
        "lng": 27.34147,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS",
        "consiglio": "The Terrace Houses have a separate €15 ticket: it is worth it, they are among the best parts of the site."
      },
      {
        "nome": "Terrace Houses",
        "testo": "Seven Roman houses of Ephesus's leading families, built in the 1st century AD on the terraces of Mount Koressos, under a large roof. You walk on walkways above mosaic floors and frescoed walls.",
        "come": "Inside Ephesus, along Curetes Street, with a separate ticket.",
        "quando": "Before midday, before heading down to the library.",
        "tempo": "45 minutes-1 hour",
        "costo": "€15 for foreign visitors (muze.gov.tr, 2026)",
        "orari": "Daily 9am-5pm, ticket office until 4:30pm (muze.gov.tr, 2026)",
        "lat": 37.93806,
        "lng": 27.34139,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS02&DistId=EFS"
      },
      {
        "nome": "Library of Celsus",
        "testo": "The most photographed two-storey façade in Turkey, built in the early 2nd century AD by the son of governor Celsus as a library and tomb for his father. It was re-erected piece by piece in the 1970s.",
        "come": "At the bottom of Curetes Street, walking down from the upper entrance.",
        "quando": "Right at opening, before the groups, or in the last hour.",
        "tempo": "20-30 minutes",
        "costo": "Included in the Ephesus ticket",
        "lat": 37.93914,
        "lng": 27.34075,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS"
      },
      {
        "nome": "Great Theatre of Ephesus",
        "testo": "The theatre cut into Mount Panayır, the largest in Roman Asia Minor, with about 24,000-25,000 seats. In front of it starts Harbour Street, which once reached the sea.",
        "come": "Inside Ephesus, next to the lower entrance.",
        "quando": "End of the visit, in the afternoon light.",
        "tempo": "20-30 minutes",
        "costo": "Included in the Ephesus ticket",
        "lat": 37.94101,
        "lng": 27.34273,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS01&DistId=EFS"
      },
      {
        "nome": "Ephesus Experience Museum",
        "testo": "The multimedia museum opposite the Great Theatre, which recreates daily life in the ancient city with projections and an audio guide. Useful before or after the walk through the ruins.",
        "come": "Opposite the Great Theatre, inside the site.",
        "quando": "At the end of the visit, in the hot hours.",
        "tempo": "30-45 minutes",
        "costo": "Included in the €40 Ephesus ticket (muze.gov.tr, 2026)",
        "orari": "Daily 8am-6pm, ticket office until 5:30pm (muze.gov.tr, 2026)",
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFS03&DistId=EFS"
      },
      {
        "nome": "Ephesus Museum",
        "testo": "The archaeological museum in Selçuk, with the two statues of Artemis found at Ephesus, finds from the Terrace Houses and halls on the fountains and the imperial cult. It helps piece together what you saw in the morning.",
        "come": "On foot in the centre of Selçuk.",
        "quando": "Afternoon, after Ephesus.",
        "tempo": "1 hour",
        "costo": "€10 for foreign visitors (muze.gov.tr, 2026)",
        "orari": "Daily 8:30am-5:30pm, ticket office until 5pm (muze.gov.tr, 2026)",
        "lat": 37.94896,
        "lng": 27.36767,
        "url": "https://muze.gov.tr/muze-detay?SectionId=EFM01&DistId=EFM"
      },
      {
        "nome": "Basilica of St John and Selçuk castle",
        "testo": "The basilica Justinian had built in the 6th century over the traditional tomb of the apostle, with the castle on the hill.",
        "come": "On foot from Selçuk.",
        "quando": "Morning, or at sunset.",
        "tempo": "1 hour",
        "costo": "€6 for foreign visitors (muze.gov.tr, 2026)",
        "orari": "Daily 8am-6pm, ticket office until 5:30pm (muze.gov.tr, 2026)",
        "lat": 37.95292,
        "lng": 27.36697,
        "url": "https://muze.gov.tr/muze-detay?SectionId=STJ01&DistId=STJ"
      },
      {
        "nome": "İsa Bey Mosque",
        "testo": "The mosque from 1375, at the foot of St John's hill, with granite columns taken from the ruins of Ephesus and a marble portal. It is one of the oldest in western Anatolia.",
        "come": "On foot from central Selçuk, below the basilica.",
        "quando": "Outside prayer times.",
        "tempo": "20 minutes",
        "lat": 37.95222,
        "lng": 27.36583
      },
      {
        "nome": "Artemision",
        "testo": "The Temple of Artemis, one of the Seven Wonders of the ancient world: today a single re-erected column stands in a marshy field. From here you see the basilica and the İsa Bey Mosque together.",
        "come": "On foot from Selçuk, on the road to Ephesus.",
        "quando": "At sunset.",
        "tempo": "15-20 minutes",
        "lat": 37.94972,
        "lng": 27.36389
      },
      {
        "nome": "House of the Virgin Mary (Meryem Ana)",
        "testo": "The shrine in the hills above Selçuk that Catholic tradition has considered, since the 19th century, the last home of the Virgin Mary. Three popes have visited.",
        "come": "By taxi or on a tour from Selçuk; it is about 15 minutes from the upper entrance of Ephesus.",
        "quando": "Morning.",
        "tempo": "45 minutes",
        "lat": 37.91154,
        "lng": 27.33406
      },
      {
        "nome": "Şirince",
        "testo": "A small village of stone houses in the hills, with fruit wines and shops.",
        "come": "Dolmuş or taxi from Selçuk, about 7 km.",
        "quando": "Afternoon.",
        "tempo": "1-2 hours",
        "lat": 37.94139,
        "lng": 27.43306,
        "consiglio": "Taste the fruit wines before buying."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Ephesus at opening and the Terrace Houses",
          "Lunch in Selçuk",
          "Afternoon: Basilica of St John",
          "Evening: Şirince"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Ephesus from the upper entrance, Terrace Houses, Library of Celsus and Great Theatre",
          "Afternoon at the Ephesus Museum, then dinner in Selçuk",
          "Day 2: House of the Virgin Mary in the morning",
          "Basilica of St John, İsa Bey Mosque and the Artemision, then evening in Şirince"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Priene, Miletus and Didyma by car, heading south",
          "Or half a day at the beach in Kuşadası"
        ]
      }
    ],
    zone: [
      {
        "nome": "Selçuk",
        "perChi": "those who want to stay close to Ephesus",
        "testo": "A small town with family-run guesthouses, restaurants and a market.",
        "fascia": "€35-60"
      },
      {
        "nome": "Şirince",
        "perChi": "those who want village atmosphere",
        "testo": "Stone houses and vineyards, quieter but isolated and with few services.",
        "fascia": "€70-120"
      },
      {
        "nome": "Kuşadası",
        "perChi": "those who want the sea",
        "testo": "The seaside town about twenty minutes away, with the cruise port, beaches and large hotels; pricier and busier than Selçuk.",
        "fascia": "€80-190"
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Filled pastry, at the market stalls."
      },
      {
        "nome": "Köfte",
        "testo": "Grilled meatballs with bread and salad."
      },
      {
        "nome": "Şirince fruit wines",
        "testo": "Pomegranate, peach and blackberry, in the village shops."
      },
      {
        "nome": "Zeytinyağlı",
        "testo": "Vegetables in olive oil, a cold Aegean starter."
      }
    ],
    attenzioni: [
      "Entering mid-morning in high season means meeting the cruise ships: better at opening.",
      "Skipping the Terrace Houses to save money is a mistake: they are among the best parts.",
      "Guides on site: agree the price and duration before starting."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Priene, Miletus and Didyma",
        "distanza": "about 1 hour by car to Priene",
        "come": "By car or on a day tour from Selçuk; public transport needs several changes.",
        "testo": "Three Ionian sites in a row heading south: Priene on the mountainside, with its grid plan, the great theatre of Miletus and the temple of Apollo at Didyma, with huge columns."
      },
      {
        "nome": "Kuşadası",
        "distanza": "about 20 km, 20-30 minutes",
        "come": "By dolmuş or car from Selçuk.",
        "testo": "The nearest seaside town, with its promenade, Pigeon Island and the beaches of the Dilek peninsula. Good for half a day at the sea."
      }
    ],
    faq: [
      {
        "domanda": "How much does it cost to enter Ephesus?",
        "risposta": "In 2026 the ticket for foreign visitors costs €40 and includes the Experience Museum. The Terrace Houses are extra, €15; the Ephesus Museum in Selçuk costs €10 and the Basilica of St John €6."
      },
      {
        "domanda": "How long does it take to visit Ephesus?",
        "risposta": "The site takes 2-3 hours, plus an hour for the Terrace Houses. With Selçuk, the museum and Şirince you need a full day, two to add the House of the Virgin Mary without rushing."
      },
      {
        "domanda": "Which entrance is best?",
        "risposta": "The upper entrance, reached by taxi from Selçuk: you walk down Curetes Street to the Library of Celsus and the Great Theatre, with no climb."
      },
      {
        "domanda": "Is it better to stay in Selçuk or Kuşadası?",
        "risposta": "Selçuk is a few minutes from Ephesus, quieter and cheaper. Kuşadası has the sea and more hotels, but it is pricier and crowded with cruise passengers."
      },
      {
        "domanda": "When should you go to avoid the crowds?",
        "risposta": "At the 8am opening: from 10am the cruise passengers from Kuşadası arrive. Spring and early autumn are the best months; in summer it goes above 35 °C at midday."
      },
      {
        "domanda": "Can you get to Ephesus from Izmir airport?",
        "risposta": "Yes: Selçuk is about an hour away, by regional train from the airport station or by transfer, and from Selçuk the entrance to Ephesus is a few minutes by taxi."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'The stone tiers of the ancient stadium of Ephesus',
    immagine: '/images/viaggi/turchia-itinerario/giorno-10-efeso.jpg',
  },
  {
    slug: 'costa-licia',
    paeseSlug: 'turchia',
    ordine: 5,
    nome: 'Lycian Coast: Fethiye, Ölüdeniz, Kaş and Kekova',
    tipologia: ['mare', 'trekking', 'road trip'],
    giorniConsigliati: '4-5 days',
    visitataPersonalmente: true,
    introduzione:
      "The stretch of coast between Fethiye and Antalya, with turquoise coves, Lycian rock-cut tombs, the Lycian Way trail and the submerged ruins of Kekova.",
    percheAndarci:
      "For the most beautiful sea in Turkey, the beaches of Ölüdeniz and Kaputaş, the sand of Patara, the Saklıkent gorge and boat trips among the islands.",
    cosaVedere: [
      'The Ölüdeniz lagoon and the Butterfly Valley',
      'The abandoned village of Kayaköy',
      'The Saklıkent gorge',
      'The ruins and the beach of Patara',
      'Kaputaş beach',
      'The submerged ruins of Kekova and the Kaleköy (Simena) castle',
    ],
    cosaFare: [
      'Paragliding from Babadağ over Ölüdeniz',
      'A stage of the Lycian Way',
      'Kayak or boat over the sunken city of Kekova',
      'Diving and snorkeling in Kaş',
    ],
    doveDormire:
      "Fethiye or Ölüdeniz for the first base, Kaş for the second (the nicest and liveliest). Budget: guesthouses in Kaş · mid-range: hotels with sea views · luxury: resorts in Ölüdeniz and Kalkan.",
    doveMangiare: 'Fish chosen at the Fethiye market and cooked in the restaurants around it, gözleme in the villages, meze in the taverns of Kaş.',
    comeArrivare: "Two airports serve the coast: Dalaman (DLM) for Fethiye, Ölüdeniz and Göcek, about an hour's drive from Fethiye, and Antalya (AYT) for Kaş and Kekova, about three and a half hours from Kaş. In season there are direct flights from Italy to both, and all year via Istanbul. Driving in from the Aegean takes about 3.5-4 hours from Selçuk to Fethiye; from Fethiye to Kaş the coast road takes about 2 hours.",
    comeSpostarsi: 'Rental car; dolmuş between the main towns; boats from the harbor to the islands.',
    periodoMigliore: 'May-June and September-October; July-August are very hot and crowded',
    costi: "Low budget about €50-70 a day per person (guesthouse in Fethiye or Kaş, dolmuş, one site a day, food in local places); mid €100-150 (sea-view hotel, rental car, boat trip, fish dinners); high from €220 up (resort in Ölüdeniz or Kalkan, private boat, paragliding). 2026 tickets for foreign visitors: Patara €15, Myra €13, Church of St Nicholas €17, Simena €4, Kayaköy, Tlos, Xanthos, Letoon, the Tomb of Amyntas and Gemile Island €3 each.",
    erroriDaEvitare: [
      "Touring the coast without a car: dolmuş run between towns, but the best coves stay out of reach",
      'Going in August without booking: Kaş and Ölüdeniz fill up',
    ],
    miaEsperienza:
      "I went by car with friends in the final part of the sixteen days in Turkey: Fethiye, Ölüdeniz and Kayaköy, then Saklıkent and Patara down to Kaş and a day on a boat to Kekova.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fethiye and the Tomb of Amyntas",
        "testo": "Fethiye is a real town, with a harbour full of gulets, the fish market and the seafront. Above the centre, Lycian tombs are cut into the rock face: the largest, the 4th-century BC Tomb of Amyntas, has a temple front with Ionic columns.",
        "come": "A staircase climbs from the centre to the tomb, about 15 minutes on foot.",
        "quando": "Late afternoon, when the carved façade turns orange.",
        "tempo": "1 hour for the tomb, half a day with the market and harbour",
        "costo": "Tomb of Amyntas €3 (2026).",
        "orari": "Daily, 8:30-19:30 from April to October and 8:30-17:30 from November to March.",
        "lat": 36.6183,
        "lng": 29.1178,
        "url": "https://www.turkishmuseums.com/museum/detail/2177-mugla-amynthas-archaeological-site/2177/4",
        "consiglio": "At the fish market, ask the price per kilo before the fish is weighed: cooking at the restaurants around is paid separately."
      },
      {
        "nome": "Ölüdeniz and Butterfly Valley",
        "testo": "The turquoise lagoon, a protected natural area, with the public beach of Belcekız in front. A little further south, Butterfly Valley is a cove shut in by rock walls, reachable in practice only by sea.",
        "come": "Dolmuş from Fethiye, about 30 minutes. For Butterfly Valley, boat from Ölüdeniz beach.",
        "quando": "Morning, before the crowds of swimmers; in summer arrive early to find a spot.",
        "tempo": "Half a day",
        "costo": "The lagoon has a small entry fee, Belcekız beach is free; boat to Butterfly Valley about €10-20 return.",
        "lat": 36.5495,
        "lng": 29.1116,
        "consiglio": "Paragliding flights take off from Mount Babadağ, at almost two thousand metres, and land on the beach: about €100-150."
      },
      {
        "nome": "Kayaköy",
        "testo": "A Greek village emptied by the population exchange of 1923, with about 500 roofless stone houses on the hillside and two churches. A trail also leads down from here towards Ölüdeniz.",
        "come": "Dolmuş from Fethiye, about 8 km. You walk among the ruins on uphill paths.",
        "quando": "Morning or afternoon, in low light.",
        "tempo": "1-1.5 hours",
        "costo": "€3 (2026).",
        "orari": "Daily, 8:30-19:30 from April to October and 8:30-17:30 from November to March.",
        "lat": 36.5767,
        "lng": 29.0867,
        "url": "https://www.turkishmuseums.com/museum/detail/2187-mugla-kayakoy-archaeological-site/2187/4"
      },
      {
        "nome": "Gemile Island",
        "testo": "A small island off the coast between Ölüdeniz and Kayaköy, also called St Nicholas Island, with the remains of Byzantine churches and a long covered walkway climbing to the top. It is a classic stop on boat trips from Fethiye and Ölüdeniz.",
        "come": "By boat only: day trips from Fethiye and Ölüdeniz or boats from Gemiler bay.",
        "quando": "Morning, before the tour boats arrive.",
        "tempo": "1 hour on the island",
        "costo": "€3 (2026), plus the boat.",
        "orari": "Daily, 8:30-19:30 from April to October and 8:30-17:30 from November to March.",
        "lat": 36.5534,
        "lng": 29.0694,
        "url": "https://www.turkishmuseums.com/museum/detail/2181-mugla-gemile-island/2181/4"
      },
      {
        "nome": "Tlos",
        "testo": "One of the oldest cities of Lycia, on a spur above the Xanthos valley, with façade tombs cut into the cliff, the acropolis with its Ottoman castle, the stadium and the theatre. From the top you see the mountains towards Saklıkent.",
        "come": "By car from Fethiye, about 40 minutes; it pairs easily with Saklıkent.",
        "quando": "Early morning or late afternoon: there is little shade.",
        "tempo": "1.5 hours",
        "costo": "€3 (2026).",
        "orari": "Daily, 8:30-19:30 from April to October and 8:30-17:30 from November to March.",
        "lat": 36.5539,
        "lng": 29.4208,
        "url": "https://www.turkishmuseums.com/museum/detail/2194-mugla-tlos-archaeological-site/2194/4"
      },
      {
        "nome": "Saklıkent",
        "testo": "A gorge about 300 metres deep and 18 kilometres long, where you walk through cold water between rock walls. The water comes from mountain snow and is icy even in August; the walking section opens only when the level allows, then the gorge narrows and gets demanding.",
        "come": "By car from Fethiye, about an hour. A wooden walkway at the entrance, then you wade the stream.",
        "quando": "Summer, when it is hot; in spring the water can be too high.",
        "tempo": "2-3 hours",
        "costo": "About €5-10.",
        "lat": 36.4688,
        "lng": 29.4034,
        "consiglio": "Rent water shoes on site and keep phone and documents in a dry bag."
      },
      {
        "nome": "Xanthos and Letoon",
        "testo": "Xanthos was the capital of the Lycian League, with its theatre, pillar tombs and the inscribed pillar bearing the longest known Lycian text. A few kilometres away, the Letoon was the federal sanctuary of Leto, Apollo and Artemis. Together they have been a UNESCO World Heritage Site since 1988.",
        "come": "By car, on the road between Fethiye and Kaş; Xanthos is near the village of Kınık, the Letoon 10 minutes away.",
        "quando": "Morning, before the heat; they pair with Patara on the same day.",
        "tempo": "1 hour each",
        "costo": "€3 each (2026).",
        "orari": "Xanthos: Daily, 8:30-19:00 from April to October (ticket office until 18:30) and 8:30-17:30 from November to March (ticket office until 17:00). Letoon: 8:30-19:30 in summer, 8:30-17:30 in winter.",
        "lat": 36.3571,
        "lng": 29.3193,
        "url": "https://www.turkishmuseums.com/museum/detail/1975-antalya-xanthos-archeological-site/1975/4"
      },
      {
        "nome": "Patara",
        "testo": "The ruins of the ancient Lycian capital, with the theatre, the restored bouleuterion, the League's assembly hall, and a colonnaded street. Beyond the ruins lies an 18-kilometre sandy beach among the dunes, protected because sea turtles nest there.",
        "come": "By car or dolmuş from Kaş or Kalkan to the village of Gelemiş; from the ruins to the beach on foot or by car.",
        "quando": "The ruins in the morning, the beach in the afternoon.",
        "tempo": "Half a day",
        "costo": "€15 (2026), ruins and beach.",
        "orari": "Daily, 8:30-19:00 from April to October (ticket office until 18:30) and 8:30-17:30 from November to March (ticket office until 17:00).",
        "lat": 36.2603,
        "lng": 29.3142,
        "url": "https://www.turkishmuseums.com/museum/detail/1968-antalya-patara/1968/4",
        "consiglio": "The beach closes at sunset for the turtles, and you cannot stay at night."
      },
      {
        "nome": "Kaputaş",
        "testo": "A small sand-and-pebble beach at the mouth of a gorge between Kalkan and Kaş, with very intense blue water. It is one of the most photographed beaches in the country, and it can be seen well from the coast road above.",
        "come": "Steps lead down from the road; the car park is small and there is a dolmuş stop between Kaş and Kalkan.",
        "quando": "Early morning or off season: in summer it fills up fast.",
        "tempo": "1-2 hours",
        "lat": 36.2292,
        "lng": 29.4492,
        "consiglio": "Stop only if there is space in the car park: you cannot park along the coast road."
      },
      {
        "nome": "Kaş and the Antiphellos theatre",
        "testo": "The most pleasant seaside town on the coast, with uphill lanes, cafés on the harbour and tavernas. At the edge of town stands the small Hellenistic theatre of ancient Antiphellos, facing the sea and the Greek island of Kastellorizo, and Lycian tombs appear here and there among the houses.",
        "come": "On foot from the harbour: the theatre is 10 minutes to the west.",
        "quando": "Sunset at the theatre, then the evening on the harbour.",
        "tempo": "Half a day",
        "lat": 36.2,
        "lng": 29.6383,
        "consiglio": "Kaş is also a diving centre, with wrecks and caves close to the coast."
      },
      {
        "nome": "Kekova and Simena",
        "testo": "A protected stretch of sea with the sunken ruins of Dolichiste, destroyed by an earthquake in the 2nd century, and the village of Kaleköy, ancient Simena, reachable only by sea, below a castle. From the castle you see the islands, the bay and a Lycian sarcophagus rising from the water.",
        "come": "Boat or kayak trip from Üçağız or Kaş; in Kaleköy you walk up to the castle between the houses.",
        "quando": "Morning, when the water is clearest; boats return in the afternoon.",
        "tempo": "Half or full day",
        "costo": "Boat trip with lunch about €25-45, kayak tour about €40-60; Simena castle €4 (2026).",
        "orari": "Simena castle: Daily, 8:30-19:00 from April to October (ticket office until 18:30) and 8:30-17:30 from November to March (ticket office until 17:00).",
        "lat": 36.1906,
        "lng": 29.8615,
        "url": "https://www.turkishmuseums.com/museum/detail/1972-antalya-simena-archeological-site/1972/4",
        "consiglio": "Swimming and diving over the sunken city are forbidden: you look from the boat or the kayak."
      },
      {
        "nome": "Myra and the Church of St Nicholas",
        "testo": "In Demre, the rock tombs of Myra have façades carved like Lycian houses, above a large Roman theatre. In town, the Church of St Nicholas held the relics of the bishop of Myra until they were taken to Bari in 1087.",
        "come": "By car from Kaş, about 45 minutes; the ruins and the church are 2 km apart.",
        "quando": "Morning, before the tour coaches from Antalya.",
        "tempo": "2 hours for both",
        "costo": "Myra €13, Church of St Nicholas €17 (2026).",
        "orari": "Daily, 8:30-19:00 from April to October (ticket office until 18:30) and 8:30-17:30 from November to March (ticket office until 17:00).",
        "lat": 36.2592,
        "lng": 29.9853,
        "url": "https://www.turkishmuseums.com/museum/detail/1966-antalya-myra-archaeological-site/1966/4",
        "consiglio": "On the road to Antalya it pairs well with Olympos and the Chimaera."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Ölüdeniz and the lagoon",
          "Afternoon: Kayaköy",
          "Evening: Tomb of Amyntas at sunset and dinner at the Fethiye fish market"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Fethiye, Ölüdeniz and Kayaköy",
          "Day 2: Saklıkent and Tlos in the morning, Xanthos and Patara in the afternoon, arrival in Kaş via Kaputaş"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Fethiye and Ölüdeniz",
          "Day 2: Kayaköy, Saklıkent and Patara",
          "Day 3: Kaş and Kekova"
        ]
      },
      {
        "titolo": "5 days, Fethiye to Antalya",
        "tappe": [
          "Day 1: Fethiye and the Tomb of Amyntas",
          "Day 2: Ölüdeniz, Butterfly Valley and Kayaköy",
          "Day 3: Tlos, Saklıkent, Xanthos and Patara, evening in Kaş",
          "Day 4: Kekova and Simena by boat",
          "Day 5: Myra and St Nicholas, Olympos and the Chimaera, arrival in Antalya"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fethiye",
        "perChi": "those who want a base with services",
        "testo": "A town with a harbour, fish market and dolmuş along the whole coast.",
        "fascia": "€40-70"
      },
      {
        "nome": "Ölüdeniz",
        "perChi": "those who want beach and paragliding",
        "testo": "Touristy, with hotels and bars open late; prices rise near the lagoon.",
        "fascia": "€80-140"
      },
      {
        "nome": "Kaş",
        "perChi": "those who want a quiet seaside town",
        "testo": "Cafés and tavernas on the harbour, diving and trips to Kekova.",
        "fascia": "€45-160"
      },
      {
        "nome": "Kalkan",
        "perChi": "those looking for villas and upmarket hotels",
        "testo": "A town of white houses on a bay between Kaş and Patara, with many villas with pools and terrace restaurants; pricier and less lively than Kaş."
      }
    ],
    sapori: [
      {
        "nome": "Fish at the Fethiye market",
        "testo": "You choose at the counter and the nearby restaurants cook it."
      },
      {
        "nome": "Gözleme",
        "testo": "Thin filled pastry, in the villages."
      },
      {
        "nome": "Kaş meze",
        "testo": "Cold plates of vegetables and cheeses, in the harbor taverns."
      },
      {
        "nome": "Ayran",
        "testo": "Salty liquid yogurt."
      }
    ],
    attenzioni: [
      "Touring the coast without a car: dolmuş exist, but the best coves stay out of reach.",
      "August without booking: Kaş and Ölüdeniz fill up.",
      "Boat trips sold on the street vary a lot: look at what the price includes.",
      "Paragliding: choose a licensed operator and check that your travel insurance covers it."
    ],
    gite: [
      {
        "nome": "Kastellorizo (Meis)",
        "distanza": "about 20 minutes by ferry from Kaş",
        "come": "Ferry from Kaş harbour, with a passport or an ID card valid for travel: it is a Greek island, so you leave Turkey.",
        "testo": "The colourful village on the harbour, the Blue Cave by boat and tavernas by the sea. It takes half a day."
      },
      {
        "nome": "Olympos and the Chimaera",
        "distanza": "about 2 hours from Kaş, 1.5 hours from Antalya",
        "come": "By car along the coast towards Antalya; for the Chimaera you walk up from Çıralı in about half an hour.",
        "testo": "The ruins of Olympos in the woods along a stream, down to the beach (€10, 2026), and the flames of the Chimaera, which burn naturally from underground on the hill above Çıralı. They are best after dark: you need closed shoes and a torch."
      },
      {
        "nome": "The Twelve Islands of Fethiye",
        "distanza": "a day by boat from Fethiye harbour",
        "come": "Gulets with lunch on board leave the harbour in the morning, booked the day before.",
        "testo": "Swimming stops among the bays and islands of the gulf, often including Gemile Island and coves reachable only by sea. Check what the price includes: some boats are very crowded and play loud music."
      },
      {
        "nome": "A stage of the Lycian Way",
        "distanza": "on foot from Ölüdeniz or Kaş",
        "come": "The trail is marked with red and white stripes; the easiest sections are Ölüdeniz-Faralya and Kaş-Limanağzı.",
        "testo": "The 540 km trail linking Fethiye to Antalya along the coast. A one-day section gives views over the lagoon or the bays from above; there is little shade, and you need hiking shoes and plenty of water."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need for the Lycian coast?",
        "risposta": "Four or five days for the stretch from Fethiye to Antalya with Kekova. With three days you can do Fethiye, Ölüdeniz, Patara and Kaş, skipping a few sites."
      },
      {
        "domanda": "Is it better to stay in Fethiye, Ölüdeniz or Kaş?",
        "risposta": "Fethiye or Ölüdeniz for the western part, Kaş for Kekova, Patara and Myra. Two bases save you driving the same road every day."
      },
      {
        "domanda": "Do you need a car?",
        "risposta": "It is not essential, because dolmuş link the main towns, but without a car you miss the coves, Tlos and Saklıkent. For five days a rental car is the most convenient choice."
      },
      {
        "domanda": "Can you swim over the sunken city of Kekova?",
        "risposta": "No: swimming and diving over the ruins are forbidden. Boats stop for swimming in nearby bays and the ruins are seen from the boat or a kayak."
      },
      {
        "domanda": "When is the best time to go?",
        "risposta": "May-June and September-October, when the sea is already warm and there are fewer people. July and August are very hot and Kaş and Ölüdeniz must be booked ahead."
      },
      {
        "domanda": "How much do the archaeological sites cost?",
        "risposta": "In 2026 Patara costs €15, Myra €13 and the Church of St Nicholas €17; Tlos, Xanthos, Letoon and Kayaköy €3 each. You pay at the ticket office by card or online on the ministry's site."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Panorama of Kaş with the harbor, the white houses and the sea of the Lycian coast',
    immagine: '/images/viaggi/turchia-itinerario/giorno-13-costa-licia.jpg',
  },
  {
    slug: 'antalya',
    paeseSlug: 'turchia',
    ordine: 6,
    nome: 'Antalya',
    tipologia: ['città', 'mare', 'archeologia'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The big city of the Mediterranean coast, with the old town of Kaleiçi around the Roman harbor and one of the best archaeological museums in the country.",
    percheAndarci: "To end the trip near the airport, with Kaleiçi, the museum and the Düden waterfalls; nearby are Perge, Aspendos and Termessos.",
    cosaVedere: ["Kaleiçi and Hadrian's Gate", 'The Antalya Archaeological Museum', 'The Düden waterfalls', 'The theater of Aspendos and Perge'],
    cosaFare: ['A swim at Konyaaltı', 'An evening at the old harbor'],
    doveDormire: 'In the restored Ottoman houses of Kaleiçi.',
    comeArrivare: "Antalya airport (AYT) is about 20-30 minutes from the centre, with direct flights from Italy in season and from Istanbul all year round. From the airport the AntRay tram runs to the centre, or take a taxi or the hotel transfer; in high season it is worth reaching the airport 2.5-3 hours before the flight home. From Kaş the coast road takes about 3.5 hours by car, from Pamukkale about 3.5-4.",
    comeSpostarsi: 'Tram and taxi in the city; car for the sites nearby.',
    periodoMigliore: 'April to November',
    costi: "Low budget about €50-70 a day per person (guesthouse in Kaleiçi, tram, one site, food in local places); mid €100-150 (hotel in an Ottoman house, car or driver for Perge and Aspendos, dinners at the harbour); high from €250 up (seaside resort or luxury hotel, private guide, rafting or a boat). 2026 tickets for foreign visitors: Aspendos €15, Perge €11, Side €7, Karain €5.",
    erroriDaEvitare: ["Returning the rental car in another city without checking the one-way fee"],
    miaEsperienza:
      "It was the last stop of my sixteen days in Turkey with friends: I drove in from Kaş, spent a night in Kaleiçi and flew home from here.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kaleiçi",
        "testo": "The old town inside the walls, with traditional red-roofed houses, Hadrian's Gate, built for the emperor's visit in 130, and the old harbour, now a marina. In the evening it is full of restaurants.",
        "come": "On foot from the modern centre; the lanes step down to the harbour.",
        "quando": "Afternoon and evening, when it cools down.",
        "tempo": "2 hours",
        "lat": 36.881,
        "lng": 30.7037,
        "consiglio": "In high season book dinner: the harbour restaurants fill up."
      },
      {
        "nome": "Hadrian's Gate",
        "testo": "The three-arched marble gate built for Emperor Hadrian's visit in 130, the eastern entrance to Kaleiçi. Under the arches you can still see the ruts left by cart wheels in the paving.",
        "come": "On Atatürk Caddesi, a short walk from the tram stop.",
        "quando": "Always visible; lit up in the evening.",
        "tempo": "15 minutes",
        "costo": "Free.",
        "lat": 36.8853,
        "lng": 30.7083
      },
      {
        "nome": "Yivli Minare",
        "testo": "The fluted 13th-century minaret, in brick with turquoise tile inlays, the symbol of the city. It stands next to the mosque of the same name and the clock tower, at the northern entrance to Kaleiçi.",
        "come": "On foot from Kale Kapısı square.",
        "quando": "Outside prayer times if you want to enter the mosque.",
        "tempo": "20 minutes",
        "costo": "Free.",
        "lat": 36.8864,
        "lng": 30.7044,
        "consiglio": "In the mosque shoulders and knees covered, and a headscarf for women."
      },
      {
        "nome": "Hıdırlık Tower and Karaalioğlu Park",
        "testo": "The 2nd-century Roman stone tower at the south-west corner of the walls, above the cliff. Next to it Karaalioğlu Park runs along the coast, with views over the gulf and the Beydağları mountains.",
        "come": "On foot from the old harbour, 10 minutes uphill.",
        "quando": "At sunset, when the light drops behind the mountains.",
        "tempo": "1 hour",
        "costo": "Free.",
        "lat": 36.8814,
        "lng": 30.7036
      },
      {
        "nome": "Antalya Archaeological Museum",
        "testo": "It was one of the most important museums in Turkey, with the Roman statues from Perge and carved sarcophagi. It closed in July 2025 and is being rebuilt: in November 2026 it cannot be visited.",
        "come": "Closed for reconstruction.",
        "quando": "Check the reopening date on the official site.",
        "tempo": "—",
        "lat": 36.8856,
        "lng": 30.6797,
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "Upper Düden Waterfalls",
        "testo": "The Düden river drops into a gorge inside a wooded park on the northern edge of the city. A path runs behind the falls, through a damp cave.",
        "come": "By taxi or city bus from the centre, about 20-30 minutes.",
        "quando": "Early morning on weekdays; at weekends families and groups arrive.",
        "tempo": "1 hour",
        "lat": 36.9638,
        "lng": 30.7269
      },
      {
        "nome": "Lower Düden Waterfalls",
        "testo": "Where the river ends straight in the sea, falling from a cliff about forty metres high, in the Lara area. You watch them from the clifftop park or, better, from the sea on the boats leaving the old harbour.",
        "come": "By taxi towards Lara, about 20 minutes; or by boat from Kaleiçi harbour.",
        "quando": "Afternoon, with the sun behind you.",
        "tempo": "30-45 minutes, or 1-2 hours by boat",
        "lat": 36.851,
        "lng": 30.7835
      },
      {
        "nome": "Konyaaltı Beach",
        "testo": "The long pebble beach west of the centre, with the mountains behind, a pedestrian and cycle promenade and beach clubs with loungers. The water gets deep right away.",
        "come": "Tram or bus from the centre, about 15 minutes, or on foot along the coast from Karaalioğlu Park.",
        "quando": "May to October; in summer early or after 5 pm.",
        "tempo": "Half a day",
        "lat": 36.865,
        "lng": 30.6444,
        "consiglio": "Water shoes to get in over the pebbles."
      },
      {
        "nome": "Tünektepe cable car",
        "testo": "From the western end of Konyaaltı a cable car climbs Tünektepe hill, with a viewpoint and a restaurant over the Gulf of Antalya, the city and the mountains.",
        "come": "By taxi or bus to the lower station, at the far end of Konyaaltı.",
        "quando": "Sunset, with the city lights.",
        "tempo": "1-1.5 hours",
        "lat": 36.8262,
        "lng": 30.5906
      },
      {
        "nome": "Perge",
        "testo": "One of the great cities of Pamphylia, close to Antalya: the Hellenistic gate with its two round towers, the stadium, the large South Baths and the main street with a water channel down the middle. Many of the statues of the Antalya museum come from here.",
        "come": "By car, taxi or tour from Antalya, about 20 minutes. It is on the way to Aspendos.",
        "quando": "Early morning: the site is large and has almost no shade.",
        "tempo": "1.5-2 hours",
        "costo": "€11 (2026).",
        "orari": "Daily, 8:00-19:00 in summer (ticket office until 18:30) and 8:00-17:00 from November to April (ticket office until 16:30).",
        "lat": 36.9604,
        "lng": 30.8537,
        "url": "https://www.turkishmuseums.com/museum/detail/1969-antalya-perge-archaeological-site/1969/4"
      },
      {
        "nome": "Aspendos",
        "testo": "The theatre, built in 155, is considered one of the best preserved of antiquity, with its stage building still standing, and it still hosts a summer opera and ballet festival. On the hill behind stand the basilica, the agora and a long stretch of aqueduct.",
        "come": "By car with driver or on a tour from Antalya, about 45 minutes.",
        "quando": "Early morning, before the coaches; in summer in the evening for performances.",
        "tempo": "1-1.5 hours",
        "costo": "€15 (2026).",
        "orari": "Daily, 8:00-19:00 in summer (ticket office until 18:30) and 8:00-17:00 from November to April (ticket office until 16:30).",
        "lat": 36.9389,
        "lng": 31.1722,
        "url": "https://www.turkishmuseums.com/museum/detail/1963-antalya-aspendos-archaeological-site/1963/4",
        "consiglio": "If you have time for only one site outside the city, make it this one."
      },
      {
        "nome": "Termessos",
        "testo": "A city perched at over a thousand metres in Güllük Dağı National Park, which Alexander the Great gave up besieging. The theatre on the edge of the precipice looks out over the mountains; around it remain walls, cisterns and hundreds of tombs scattered in the woods.",
        "come": "By car, about 45 minutes from Antalya to the car park, then a steep 20-30 minute climb on a stony path.",
        "quando": "Morning, in spring or autumn; in summer it is hot even at altitude.",
        "tempo": "3 hours",
        "orari": "Daily, 8:00-19:00 in summer and 8:00-17:00 from November to April (ticket office until 15:30).",
        "lat": 36.9825,
        "lng": 30.4644,
        "url": "https://www.turkishmuseums.com/museum/detail/1974-antalya-termessos-archeological-site/1974/4",
        "consiglio": "Hiking shoes and water: there is nothing at the top."
      },
      {
        "nome": "Karain Cave",
        "testo": "A cave inhabited since the Palaeolithic, among the most important prehistoric sites in Turkey, north-west of Antalya. You climb up a staircase, and a small museum next to it displays the finds.",
        "come": "By car, about 30 minutes from the centre; it pairs with Termessos.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "costo": "€5 (2026).",
        "orari": "Daily, 8:00-19:30 in summer and 8:00-17:00 from November to April (ticket office until 16:30).",
        "lat": 37.0778,
        "lng": 30.5708,
        "url": "https://www.turkishmuseums.com/museum/detail/1964-antalya-karain-cave/1964/4"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Perge and Aspendos",
          "Afternoon: swim at Konyaaltı",
          "Evening: Kaleiçi and the old harbour"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Kaleiçi, Hadrian's Gate, Yivli Minare, Hıdırlık Tower; sunset from Karaalioğlu Park",
          "Day 2: Perge and Aspendos in the morning, Lower Düden Waterfalls in the afternoon, evening at the harbour"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Kaleiçi and the Upper Düden Waterfalls",
          "Day 2: Perge, Aspendos and Side",
          "Day 3: Termessos and Karain in the morning, Konyaaltı and the Tünektepe cable car at sunset"
        ]
      }
    ],
    zone: [
      {
        "nome": "Kaleiçi",
        "perChi": "those who want the old town",
        "testo": "Hotels in Ottoman houses, noise from the bars in the evening.",
        "fascia": "€60-130"
      },
      {
        "nome": "Konyaaltı",
        "perChi": "those who want the beach",
        "testo": "A modern area with a pebble beach and mountains in the background, linked to the centre by tram and bus."
      },
      {
        "nome": "Lara",
        "perChi": "those who want a resort near the airport",
        "testo": "The sandy coast to the east, past the Lower Düden Waterfalls, with large hotels and all-inclusives; far from the old town."
      }
    ],
    sapori: [
      {
        "nome": "Piyaz",
        "testo": "White bean salad with eggs and tahini, an Antalya specialty."
      },
      {
        "nome": "Şiş köfte",
        "testo": "Grilled meatballs with bread."
      },
      {
        "nome": "Tahini-molasses",
        "testo": "A sweet breakfast with sesame cream and grape molasses."
      },
      {
        "nome": "Fresh fruit",
        "testo": "Oranges and pomegranates from the market."
      }
    ],
    attenzioni: [
      "Rental car dropped in another city: check the one-way fee.",
      "All-inclusive hotels far from the center: sometimes the transfer costs as much as the difference.",
      "In summer it is very hot: visit at dawn."
    ],
    gite: [
      {
        "nome": "Side",
        "distanza": "about 75 km, 1 hour 15 minutes",
        "come": "By car, or by bus from Antalya to Manavgat, then dolmuş.",
        "testo": "The village is built inside the ancient city: the theatre, the Temple of Apollo by the sea, the colonnaded street and the museum in the Roman baths. Archaeological site €7 and museum €5 (2026); the temple at sunset is the finest sight."
      },
      {
        "nome": "Köprülü Canyon",
        "distanza": "about 1.5 hours",
        "come": "By car or with the rafting trips leaving from hotels, with morning pick-up.",
        "testo": "A canyon along the Köprü river in a national park, with the easiest and busiest rafting in the area and a Roman bridge still in use. Higher up are the ruins of Selge."
      },
      {
        "nome": "Phaselis and the Tahtalı cable car",
        "distanza": "about 1 hour towards Kemer",
        "come": "By car along the south-west coast.",
        "testo": "Phaselis has three ancient harbours and a paved street among the pines leading to coves where you swim among the ruins (€10, 2026). Nearby a cable car climbs Mount Tahtalı, at over 2,300 metres."
      },
      {
        "nome": "Kurşunlu Waterfall",
        "distanza": "about 20 km, 30 minutes",
        "come": "By car or taxi heading east.",
        "testo": "A nature park with a waterfall in a green hollow and a path among the pools. It pairs with Perge on the same road."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Antalya?",
        "risposta": "One for Kaleiçi and Aspendos, two to add Perge, the waterfalls and the sea, three with Termessos or Side. Many use it as the last stop before the flight."
      },
      {
        "domanda": "Is the Antalya Archaeological Museum open?",
        "risposta": "No: it has been closed since July 2025 for reconstruction and cannot be visited in November 2026. Check the reopening on the ministry's official site."
      },
      {
        "domanda": "How do you get to Aspendos and Perge without a car?",
        "risposta": "With a half-day tour or a taxi with driver for both, done in the same morning because Perge is on the way to Aspendos."
      },
      {
        "domanda": "Where is it best to stay?",
        "risposta": "Kaleiçi to be on foot between the harbour and restaurants, Konyaaltı for the beach in town, Lara for a resort near the airport."
      },
      {
        "domanda": "How much do the sites around Antalya cost?",
        "risposta": "For foreign visitors in 2026 Aspendos costs €15, Perge €11, Side €7 and Karain Cave €5. Tickets are paid at the ticket office by card or online."
      },
      {
        "domanda": "When should you go?",
        "risposta": "April to June and September to November. July and August are very hot: visit the sites at opening and spend the afternoon at the sea."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'View of Kaleiçi, the old town of Antalya overlooking the sea',
    immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg',
  },
]
