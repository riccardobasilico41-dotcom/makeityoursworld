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
    comeArrivare: 'Istanbul Airport (IST), connected by the M11 metro and the Havaist buses; Sabiha Gökçen airport (SAW) on the Asian side.',
    comeSpostarsi:
      "Rechargeable Istanbulkart for the metro, T1 tram, funiculars and ferries; taxis with the BiTaksi or Uber apps, which in Istanbul calls the yellow taxis.",
    periodoMigliore: 'April-June and September-November',
    costi:
      "Hagia Sophia €25 for tourists; Topkapı with harem around €50; Museum Pass Istanbul around €105 for 5 days (approximate prices, in euros).",
    erroriDaEvitare: [
      "Accepting a stranger's invitation for a drink in a bar: it's the inflated-bill scam, common in Taksim and Sultanahmet",
      "Picking up the brush a shoe shiner drops in front of you: it's the pretext for a paid shine",
      'Eating in Sultanahmet restaurants with no prices displayed',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hagia Sophia",
        "testo": "Justinian's basilica, consecrated in 537, then a mosque from 1453, a museum from 1935 and a mosque again since 2020, with Byzantine mosaics beneath the great dome.",
        "come": "T1 tram to Sultanahmet. Since 15 January 2024 foreign visitors pay for a ticket and go up to the upper galleries, reopened in 2024, while most of the ground floor is reserved for worshippers. Modest clothing; women must cover their heads.",
        "quando": "Early morning, outside prayer times.",
        "tempo": "1-1.5 hours",
        "consiglio": "Check the hours on the official site beforehand, as they change with the access rules.",
        "costo": "Paid ticket for foreign visitors: price on official channels"
      },
      {
        "nome": "Blue Mosque and the Hippodrome",
        "testo": "The Sultanahmet Mosque, built between 1609 and 1617, with six minarets and more than twenty thousand Iznik tiles inside. In front, the square of the ancient hippodrome with the Egyptian obelisk.",
        "come": "On foot from Hagia Sophia. Shoes off, shoulders and legs covered; women with the head covered.",
        "quando": "Open daily 8.30am-7pm from April to September and 8.30am-5pm from October to March, last entry 30 minutes before; on Fridays visits start at 2.30pm. Closed to visitors for the midday and afternoon prayers, from 30 minutes before the call to 15 minutes after the end (2026).",
        "tempo": "45 minutes",
        "url": "https://sultanahmetcami.org/",
        "consiglio": "If your clothes are not suitable, borrow some from the loan counter at the entrance and return them there.",
        "costo": "Free entry (2026)"
      },
      {
        "nome": "Topkapı Palace and Harem",
        "testo": "The main residence of the Ottoman sultans for about four centuries, until the mid-19th century: courtyards, pavilions, treasury and Harem, on the promontory between the Bosphorus, the Sea of Marmara and the Golden Horn.",
        "come": "On foot from Hagia Sophia. The ticket for foreigners includes the Harem and Hagia Irene; it can also be bought online.",
        "quando": "Closed on Tuesdays. Open 9am-5:30pm, ticket office until 5pm (2026). Arrive at opening.",
        "tempo": "2-3 hours",
        "url": "https://www.millisaraylar.gov.tr/en/palaces/topkapi-palace",
        "consiglio": "Go first to the Harem and the Treasury, which have queues, then the courtyards.",
        "costo": "TL 2,750 for foreign visitors including the Harem and Hagia Irene, valid one day; Harem or Hagia Irene alone TL 1,050 (2026)"
      },
      {
        "nome": "Basilica Cistern",
        "testo": "A huge underground Byzantine reservoir from the 6th century, Justinian's time, with 336 marble columns in 12 rows, softly lit. Two columns stand on reused blocks carved with Medusa's head.",
        "come": "On foot from Hagia Sophia. In high season an online ticket is best.",
        "quando": "Early morning or evening, when the queue is shorter.",
        "tempo": "45 minutes",
        "consiglio": "Avoid the weekend and the middle of the day.",
        "costo": "Different prices by day and in the evening slot: check them on the official website"
      },
      {
        "nome": "Grand Bazaar and Spice Bazaar",
        "testo": "The covered market with over 4,000 shops selling carpets, ceramics and jewellery; a little further on, the spice market with tea, Turkish sweets and dried fruit.",
        "come": "T1 tram to Beyazıt-Kapalıçarşı, or on foot from Hagia Sophia.",
        "quando": "In the morning, before the crowds; the Grand Bazaar is closed on Sundays.",
        "tempo": "2 hours",
        "consiglio": "At the Spice Bazaar, taste before you buy."
      },
      {
        "nome": "Galata Tower",
        "testo": "The Genoese stone tower completed in 1348 above Karaköy, about 63 metres high. From the terrace at the top you see the Golden Horn, the Bosphorus and the historic peninsula with its domes and minarets. Since 2020 it has been a museum.",
        "come": "T1 tram to Karaköy, then walk up the narrow streets; or take the historic Tünel funicular. Inside, a lift goes to the sixth floor, then stairs climb to the terrace, at about 40 metres.",
        "quando": "Open daily 8:30am-6:30pm, ticket office until about 6:15pm (2026). Best at opening or in the last hour: at midday there is a queue.",
        "tempo": "1 hour",
        "costo": "Price for foreign visitors on the official website",
        "url": "https://muze.gov.tr/",
        "consiglio": "Walk all the way round the terrace: each side has a different view."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Hagia Sophia and the Blue Mosque",
          "Basilica Cistern",
          "Afternoon: Topkapı",
          "Evening: sunset on the Bosphorus and dinner in Karaköy"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Sultanahmet as above",
          "Day 2: Süleymaniye, Grand Bazaar, Spice Bazaar, ferry to Kadıköy",
          "Day 3: Galata, Beyoğlu, Chora (Kariye) and a Bosphorus cruise"
        ]
      }
    ],
    zone: [
      {
        "nome": "Sultanahmet",
        "perChi": "those with little time who want to be among the monuments",
        "testo": "You walk to almost everything. It is touristy, with expensive restaurants and insistent sellers; in the evening it quiets early."
      },
      {
        "nome": "Galata / Karaköy",
        "perChi": "those who want bars, cafes and nightlife",
        "testo": "A trendy district, with boutique hotels and terraces. The slopes are steep and at night it is noisy."
      },
      {
        "nome": "Beyoğlu / Taksim",
        "perChi": "those who want nightlife and connections",
        "testo": "The heart of night life, near metro and tram. Noisy and less polished."
      }
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
    comeArrivare: 'Flights from Istanbul to Kayseri (ASR, 1 hour transfer) or Nevşehir (NAV, 40 minutes); night buses from Istanbul (about 10-11 hours).',
    comeSpostarsi: 'Rental car or day tours (Red Tour, Green Tour); dolmuş minibuses connect Göreme, Uçhisar, Avanos and Ürgüp.',
    periodoMigliore: "April-June and September-October; in winter there is snow and the landscape is beautiful, but more balloon flights get canceled",
    costi:
      "Hot-air balloon roughly €180-350 per person depending on the season; Göreme Open-Air Museum around €20-25; Derinkuyu around €15-20; Museum Pass Cappadocia around €45-50 (approximate).",
    erroriDaEvitare: [
      "Booking the balloon for your last morning: flights get canceled when it's windy, and it's best to have at least one spare day",
      'Choosing the operator on price alone: the license and the number of passengers per basket matter',
      'Visiting the open-air museum at noon, when all the groups arrive',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Göreme Open-Air Museum",
        "testo": "A cluster of rock-cut churches and monasteries carved into the stone cones, with frescoes mostly from the 10th and 11th centuries. The Dark Church (Karanlık) is one of the finest.",
        "come": "From Göreme on foot or by shuttle.",
        "quando": "Open daily 8am-5pm, ticket office until 4:15pm (November 2026). At opening, before the groups.",
        "tempo": "1.5-2 hours",
        "url": "https://muze.gov.tr/",
        "consiglio": "Ask at the ticket office whether the Dark Church needs a supplement: the colours are worth the stop.",
        "costo": "Price for foreign visitors on the official website"
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
        "tempo": "2-3 hours"
      },
      {
        "nome": "Derinkuyu and Kaymaklı",
        "testo": "The multi-level underground cities, used for centuries as refuges during raids. Derinkuyu goes down to about 85 metres and could shelter thousands of people with their animals; rolling stone doors sealed the corridors.",
        "come": "By car or on a tour from Göreme.",
        "quando": "Early morning to avoid the crowd in the corridors.",
        "tempo": "1-1.5 hours",
        "url": "https://muze.gov.tr/",
        "consiglio": "If you are claustrophobic, think carefully: the corridors are narrow and low.",
        "costo": "Prices for foreign visitors on the official website"
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: balloon, Göreme Open-Air Museum, Red Valley at sunset",
          "Day 2: Derinkuyu, Ihlara Valley, Uçhisar"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: trekking in Love Valley and Pigeon Valley, sunset at Uçhisar"
        ]
      }
    ],
    zone: [
      {
        "nome": "Göreme",
        "perChi": "those who want to be near everything",
        "testo": "Cave hotels, restaurants and balloon departures. The most touristy."
      },
      {
        "nome": "Uçhisar",
        "perChi": "those who want views and quiet",
        "testo": "A village under the castle, charming hotels with a panoramic terrace."
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
    comeArrivare: 'Denizli Çardak airport, then 1 hour by road; buses from Göreme (overnight, about 9-10 hours), from Selçuk (3 hours) and from Antalya (4 hours).',
    comeSpostarsi: 'On foot; dolmuş to Denizli.',
    periodoMigliore: "spring and autumn; in summer the white terraces dazzle and burn",
    costi: 'Pamukkale-Hierapolis admission around €30; Antique Pool separate, around €10-15 (approximate).',
    erroriDaEvitare: [
      'Going up at noon in summer: the glare off the white is blinding',
      'Expecting all the pools to be full: many are left dry on rotation to preserve the travertine',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Travertine terraces",
        "testo": "The white limestone pools down the slope, filled by hot springs. The authorities regulate the water and close some sections in turn so the travertine can regenerate. UNESCO World Heritage since 1988 together with Hierapolis.",
        "come": "Entrance from the south or north of the site; bus or car to the parking lot.",
        "quando": "Site open daily 8am-6pm, ticket office until 5pm (November 2026). Sunset, with the light on the white; at midday in summer it is blinding.",
        "tempo": "1-2 hours",
        "url": "https://muze.gov.tr/",
        "consiglio": "Bring a towel and swimsuit, knowing that many pools may be dry.",
        "costo": "Single ticket for Hierapolis and the travertines: price for foreigners on the official website"
      },
      {
        "nome": "Hierapolis and the Antique Pool",
        "testo": "The ruins of the city founded in the 2nd century BC above the terraces: the theatre, the necropolis with about 1,200 tombs, the octagonal Martyrium of St Philip and the ancient hot-water pool with columns on the bottom.",
        "come": "You walk around the site. The pool is paid separately.",
        "quando": "Early morning or late afternoon.",
        "tempo": "2 hours",
        "url": "https://muze.gov.tr/",
        "costo": "Included in the travertines ticket; Antique Pool extra"
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
      }
    ],
    zone: [
      {
        "nome": "Pamukkale village",
        "perChi": "those who want to be under the terraces",
        "testo": "Family-run guesthouses, thermal pools and simple restaurants."
      },
      {
        "nome": "Karahayıt",
        "perChi": "those who want thermal baths",
        "testo": "A nearby village with spas and red iron-rich waters."
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
    comeArrivare: 'Izmir airport (1 hour); Izmir-Selçuk train; buses from Pamukkale.',
    comeSpostarsi: 'Taxi or dolmuş from Selçuk to the upper entrance of Ephesus (a few km); rental car.',
    periodoMigliore: 'April-June and September-October, always at opening time',
    costi: 'Ephesus around €40, Terrace Houses around €15 (approximate, in euros).',
    erroriDaEvitare: [
      'Going in mid-morning in high season, when the cruise ship passengers from Kuşadası arrive',
      'Skipping the Terrace Houses to save money: they are the best part of the site',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Ephesus",
        "testo": "The great Greco-Roman city with the Library of Celsus (2nd century AD), the great theatre for about 24,000-25,000 spectators, Curetes Street and the Terrace Houses, six Roman homes with mosaics and frescoes under a protective roof.",
        "come": "From Selçuk by taxi or dolmuş; the upper entrance saves the climb.",
        "quando": "Open daily 8am-6pm, ticket office until 5:30pm (November 2026). At opening, especially when cruise ships arrive from Kuşadası.",
        "tempo": "2-3 hours",
        "url": "https://muze.gov.tr/",
        "consiglio": "The Terrace Houses are among the best parts of the site: check at the ticket office whether they are included.",
        "costo": "The ticket also includes the Ephesus Experience Museum; price for foreigners on the official website"
      },
      {
        "nome": "Basilica of St John and Selçuk Castle",
        "testo": "The basilica Justinian had built in the 6th century over the traditional tomb of the apostle, with the castle on the hill.",
        "come": "On foot from Selçuk.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "House of the Virgin Mary (Meryem Ana)",
        "testo": "The shrine in the hills above Selçuk that Catholic tradition, since the 19th century, regards as the Virgin Mary's last home. Three popes have visited.",
        "come": "By taxi or on a tour from Selçuk.",
        "quando": "Morning.",
        "tempo": "45 minutes"
      },
      {
        "nome": "Şirince",
        "testo": "A small village of stone houses on a hill, with fruit wines and shops.",
        "come": "Dolmuş or taxi from Selçuk, about 7 km.",
        "quando": "Afternoon.",
        "tempo": "1-2 hours",
        "consiglio": "Taste the fruit wines before buying."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Ephesus at opening and Terrace Houses",
          "Lunch in Selçuk",
          "Afternoon: Basilica of St John",
          "Evening: Şirince"
        ]
      }
    ],
    zone: [
      {
        "nome": "Selçuk",
        "perChi": "those who want to be near Ephesus",
        "testo": "A town with family guesthouses, restaurants and a market."
      },
      {
        "nome": "Şirince",
        "perChi": "those who want village atmosphere",
        "testo": "Stone houses and vineyards, quieter but isolated with few services."
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
    comeArrivare: 'Dalaman (for Fethiye) and Antalya (for Kaş and Kekova) airports.',
    comeSpostarsi: 'Rental car; dolmuş between the main towns; boats from the harbor to the islands.',
    periodoMigliore: 'May-June and September-October; July-August are very hot and crowded',
    costi:
      "Boat trip with lunch roughly €25-45; paragliding around €100-150; Patara and Saklıkent around €5-15 each (approximate).",
    erroriDaEvitare: [
      "Touring the coast without a car: dolmuş run between towns, but the best coves stay out of reach",
      'Going in August without booking: Kaş and Ölüdeniz fill up',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Ölüdeniz and Butterfly Valley",
        "testo": "The turquoise lagoon, a protected nature area, with Butterfly Valley just beyond.",
        "come": "Dolmuş from Fethiye.",
        "quando": "Morning, before the bathers arrive.",
        "tempo": "Half a day",
        "consiglio": "Paragliding flights from Mount Babadağ land here."
      },
      {
        "nome": "Kayaköy",
        "testo": "A Greek village emptied by the 1923 population exchange, with about 500 ruined stone houses on the slope.",
        "come": "Dolmuş from Fethiye, about 8 km.",
        "quando": "Morning or afternoon, in low light.",
        "tempo": "1-1.5 hours"
      },
      {
        "nome": "Saklıkent",
        "testo": "A gorge around 300 metres deep where you wade through cold water between rock walls; the walking section only opens when the water level allows.",
        "come": "By car from Fethiye.",
        "quando": "Summer, when it is hot.",
        "tempo": "2-3 hours",
        "consiglio": "Rent water shoes on site."
      },
      {
        "nome": "Kekova and Simena",
        "testo": "A protected stretch of sea with the sunken ruins of Dolichiste, destroyed by an earthquake in the 2nd century, and the village of Kaleköy, ancient Simena, reachable only by sea, below a castle.",
        "come": "Boat or kayak trip from Üçağız or Kaş.",
        "quando": "Morning, with the clearest water.",
        "tempo": "Half a day",
        "consiglio": "Swimming and diving over the sunken city are forbidden: you look from the boat or kayak."
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Fethiye and Ölüdeniz",
          "Day 2: Kayaköy, Saklıkent and Patara",
          "Day 3: Kaş and Kekova"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fethiye",
        "perChi": "those who want a base with services",
        "testo": "A city with a harbor, fish market and dolmuş for the whole coast."
      },
      {
        "nome": "Ölüdeniz",
        "perChi": "those who want beach and paragliding",
        "testo": "Touristy, with hotels and bars until late."
      },
      {
        "nome": "Kaş",
        "perChi": "those who want a quiet seaside town",
        "testo": "Cafes and taverns on the harbor, diving and trips to Kekova."
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
    comeArrivare: 'Antalya airport (AYT), with direct flights from Italy in season and from Istanbul all year round.',
    comeSpostarsi: 'Tram and taxi in the city; car for the sites nearby.',
    periodoMigliore: 'April to November',
    costi: 'Archaeological Museum and Aspendos around €15-20 each (approximate).',
    erroriDaEvitare: ["Returning the rental car in another city without checking the one-way fee"],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kaleiçi",
        "testo": "The old town inside the walls, with traditional red-roofed houses, Hadrian's Gate, built for the emperor's visit in 130, and the old harbour, now a marina. In the evening it is full of restaurants.",
        "come": "On foot from the modern centre.",
        "quando": "Afternoon and evening.",
        "tempo": "2 hours"
      },
      {
        "nome": "Antalya Archaeological Museum",
        "testo": "It was one of Turkey's most important museums, with the Roman statues from Perge. It closed in July 2025 and is being rebuilt: as of November 2026 it cannot be visited.",
        "come": "Closed for rebuilding.",
        "quando": "Check the official website for the reopening date.",
        "tempo": "—",
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "Aspendos and Perge",
        "testo": "The theatre of Aspendos, built in 155, is considered one of the best preserved of antiquity and still hosts a summer opera and ballet festival. Perge, near Antalya, has the stadium, the large South Baths and the main street with a water channel down the middle.",
        "come": "By car with a driver or on a tour from Antalya: Perge is on the way to Aspendos.",
        "quando": "Open daily 8am-5pm, ticket office until 4:30pm (November 2026). Early morning.",
        "tempo": "Half a day for both",
        "url": "https://muze.gov.tr/",
        "consiglio": "Aspendos is the stop not to skip.",
        "costo": "Prices for foreign visitors on the official website"
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
      }
    ],
    zone: [
      {
        "nome": "Kaleiçi",
        "perChi": "those who want the old town",
        "testo": "Hotels in Ottoman houses, evening noise from the bars."
      },
      {
        "nome": "Konyaaltı",
        "perChi": "those who want a beach",
        "testo": "A modern area with a pebble beach and mountains behind."
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
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'View of Kaleiçi, the old town of Antalya overlooking the sea',
    immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg',
  },
]
