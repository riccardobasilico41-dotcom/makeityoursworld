import type { Destinazione } from '@/lib/types'

export const destinazioniArabiaSaudita: Destinazione[] = [
  {
    slug: 'jeddah',
    paeseSlug: 'arabia-saudita',
    ordine: 1,
    nome: 'Jeddah',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "The Red Sea port through which pilgrims bound for Mecca have passed for centuries, and the most open and relaxed city in the Kingdom. In the old town, Al-Balad, the coral-stone tower houses with wooden mashrabiya at the windows are still standing. It's a UNESCO World Heritage site and the only place in Saudi Arabia where you walk through a real old city.",
    percheAndarci:
      "It's the country's natural gateway, and Al-Balad at sunset is the most beautiful thing in western Saudi Arabia. Jeddah also has a relationship with the outside world that the rest of the Kingdom lacks: for centuries people have arrived here from every corner of the Muslim world, and you can see it.",
    cosaVedere: [
      'Al-Balad, the UNESCO-listed old town, with coral-stone tower houses and rawashin, the carved wood facades',
      'Nassif House, the best known of the tower houses, with an inner ramp built so camels could climb up',
      'The Al-Alawi souq, inside Al-Balad, still in operation',
      "The Corniche and King Fahd's Fountain, the tallest water jet in the world",
      'The floating Al-Rahma mosque, on the Corniche',
      'The Red Sea reefs offshore, among the best preserved on the planet',
    ],
    cosaFare: [
      'Walk through Al-Balad at sunset, when the wooden facades catch the light (there is a dedicated experience card)',
      'Have a seafood dinner on the Corniche, as Saudis do on Thursday evenings',
      'Snorkeling or diving on the Red Sea reefs, much less crowded than the Egyptian ones',
      'Explore the contemporary art districts, the most unexpected thing in Jeddah and the whole country',
    ],
    doveDormire:
      "Near Al-Balad to stay in the historic part, or on the Corniche for the sea and the restaurants. Jeddah is big and spread out: location matters more than elsewhere.",
    doveMangiare:
      "Jeddah is the city where you eat best in Saudi Arabia, because centuries of pilgrimage have brought cuisines here from all over the Muslim world. Try kabsa, the national dish of spiced rice with meat, Yemeni mandi cooked in an underground oven, foul for breakfast and grilled Red Sea fish on the Corniche. Then Arabic coffee with dates, which here is a ritual of hospitality more than a drink. **There is no alcohol in the country**, not even in hotels.",
    comeArrivare: "International flight to King Abdulaziz (JED), the main airport in western Saudi Arabia, which is also where travellers on the Saudia or flynas stopover visa land. The most practical way into town is Uber or Careem, about 50-100 SAR (12-23 €) and 30-50 minutes to Al-Balad or the Corniche; official taxis from the rank cost about 100-150 SAR. The Haramain train runs from Terminal 1 to Al Sulaymaniyah station, but that is far from the old town. Avoid unlicensed drivers offering rides in arrivals.",
    comeSpostarsi:
      "Uber and Careem work very well and are cheap: they're the normal way to get around. Al-Balad is explored on foot, the rest of the city isn't, because distances are those of an American metropolis.",
    periodoMigliore:
      "November to March. Because of the Red Sea, Jeddah is hot and humid almost all year, and in summer heat and humidity together are heavy even by the standards of the region.",
    costi: "Walking around Al-Balad and the Corniche costs nothing, Hayy Jameel is free, the house-museums have modest tickets. Uber and Careem are cheap; hotels have capital-city prices. Indicative daily budget per person: low 60-80 € (simple hotel in a double room, Uber, neighbourhood food); mid 130-180 € (Corniche hotel, a fish dinner, a museum); high 300 € and up (resort in Obhur, private boat trip).",
    erroriDaEvitare: [
      "Trying to go to Mecca: it's **off-limits to non-Muslims**, on the highway signs show the mandatory detours and there are checkpoints. It's no formality to get around",
      'Visiting Al-Balad at noon: the neighborhood comes alive in the late afternoon, and only then does the light reach the wooden facades',
      "Photographing people, especially women, without explicit permission: here it's a more serious problem than elsewhere in the region",
      "Expecting to find alcohol: there is none in the whole country, not even in international hotels",
    ],
    confronti: [
      {
        titolo: 'Jeddah or Riyadh as your gateway',
        introduzione:
          "Saudi Arabia has two main airports almost a thousand kilometers apart, and choosing which one to enter through changes the shape of the whole itinerary.",
        opzioni: [
          {
            nome: 'Enter through Jeddah',
            sintesi: "The gateway to the west: Al-Balad in the city, AlUla a short flight or seven hours by road away, the Red Sea in front.",
            costo: 'frequent direct flights from Europe',
            durata: 'ideal base for a 7-9 day western itinerary',
            pro: [
              "It's the most pleasant and open city in the country, with the UNESCO-listed old town",
              'AlUla is much closer than from Riyadh',
              'The Red Sea is within reach, with almost untouched reefs',
              "It's the airport where those using the Saudia or flynas stopover visa land",
            ],
            contro: ['Heavy heat and humidity almost all year', 'Farther from the Asir and the east of the country', 'A spread-out city where you get around only by car'],
            perChi: "Anyone coming for the first time or with few days. With a four-day stopover visa it's the only sensible choice.",
          },
          {
            nome: 'Enter through Riyadh',
            sintesi: "The capital in the interior, with UNESCO-listed Diriyah at its gates and the Edge of the World an hour and a half down a track.",
            costo: 'direct flights from Europe, often a bit more expensive',
            durata: 'base for an itinerary through the center and east',
            pro: [
              'Diriyah, the original capital of the Sauds, is a UNESCO site and twenty minutes from the center',
              'The Edge of the World, the Tuwaiq escarpment, is one of the most spectacular things in the country',
              "The climate is dry: at the same temperature it's much easier to bear than Jeddah",
              "It's more convenient for continuing east and toward the Rub' al-Khali",
            ],
            contro: [
              'A modern, vertical city, with no old town to explore on foot',
              'In everyday life it is more conservative and less relaxed than Jeddah',
              'AlUla is far: the domestic flight is almost a must',
            ],
            perChi: 'Anyone with at least ten days, or anyone flying into and out of two different airports.',
          },
        ],
        raccomandazione:
          "With less than a week, Jeddah without a doubt: you land, see Al-Balad, fly to AlUla and come back. With ten days or more it's better to enter at one end and leave from the other (Jeddah, AlUla, then a flight to Riyadh with Diriyah and the Edge of the World), so you don't cover a thousand kilometers backwards.",
      },
    ],
    miaEsperienza:
      "Jeddah throws off anyone who arrives convinced that Saudi Arabia is all the same. It's a seaside city, in its ways more Mediterranean than you'd expect, and the difference from Riyadh can be felt in half a day. Al-Balad is the main reason to come, and it has to be seen at the right time. By day it's a dusty neighborhood under restoration; in the late afternoon the low light catches the rawashin, the carved wood facades, some four stories high, made to let air circulate and to let women look out without being seen, and the neighborhood changes. Many houses are propped up and several have collapsed: the restoration is moving ahead in patches, and whoever sees Al-Balad today sees it halfway. The other thing that stays with you is social more than monumental: the Corniche on Thursday evening, with families spreading rugs on the lawn, barbecues going and kids playing until midnight. It's there, more than in any museum, that you best understand what kind of country this is.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Al-Balad",
        "testo": "The old town, a UNESCO World Heritage Site since 2014 as \"Historic Jeddah, the Gate to Makkah\", with coral-stone tower houses and roshan, the large carved wooden windows. Restoration is patchy: some houses have become hotels, others are still propped up.",
        "come": "You explore the lanes on foot; taxi or Uber to the edge of the district. With a guide you understand better what you are looking at.",
        "quando": "Late afternoon, when the low light catches the wood and the district comes alive. At midday it is dusty and empty.",
        "tempo": "2-3 hours",
        "consiglio": "End the visit in the souq lanes with a cardamom Arabic coffee.",
        "orari": "District always open; shops and souq stalls close during prayers",
        "costo": "Free entry (2026)",
        "lat": 21.48333,
        "lng": 39.18333
      },
      {
        "nome": "Nassif House",
        "testo": "Built between 1872 and 1881 for the merchant Omar Nasseef, it is the best-known tower house in Al-Balad: Ibn Saud lived here in 1925 after entering Jeddah. The internal ramp let camels climb to the upper floors. Today it is a cultural centre with exhibitions and talks.",
        "come": "Inside Al-Balad, on foot.",
        "quando": "Morning or late afternoon. Check interior opening times on site.",
        "tempo": "45 minutes",
        "lat": 21.48389,
        "lng": 39.18778
      },
      {
        "nome": "Corniche, King Fahd Fountain and Al-Rahma Mosque",
        "testo": "The city's seafront, with the King Fahd Fountain, the world's highest water jet according to Guinness (312 metres), and Al-Rahma Mosque, known as the «floating mosque» because it is built on the shoreline and at high tide seems to rest on the water. In the evening families stroll and picnic.",
        "come": "Taxi or Uber from the center. You stroll the waterfront.",
        "quando": "Sunset and evening, especially at weekends.",
        "tempo": "2 hours",
        "consiglio": "Have a fish dinner in one of the restaurants in the area.",
        "orari": "Seafront always open; the fountain runs mainly in the evening",
        "costo": "Free (2026)",
        "lat": 21.51556,
        "lng": 39.145
      },
      {
        "nome": "Al-Shafi'i Mosque",
        "testo": "One of the oldest mosques in Jeddah, dating back to the 13th century, in the Al-Mazloum quarter of Al-Balad. Its minaret is visible from the surrounding lanes and is a handy landmark for finding your way around the old town.",
        "come": "On foot from Nassif House, a few minutes through the lanes.",
        "quando": "Outside prayer times, dressed modestly.",
        "tempo": "20 minutes",
        "lat": 21.48611,
        "lng": 39.1875,
        "consiglio": "Non-Muslims usually see it from outside: ask on site before going in."
      },
      {
        "nome": "Souq Al-Alawi",
        "testo": "The market street that runs through Al-Balad and is still in business: spices, incense, fabrics, dates and coffee. It is the easiest way to see the district as a lived-in place, not just a restored one.",
        "come": "On foot, inside Al-Balad.",
        "quando": "Late afternoon and after the sunset prayer, when the shops reopen.",
        "tempo": "1 hour",
        "orari": "Shops close during prayers",
        "costo": "Free entry (2026)",
        "lat": 21.48421,
        "lng": 39.1875,
        "consiglio": "Bring cash for the smaller stalls."
      },
      {
        "nome": "Bab Makkah",
        "testo": "The eastern gate of the old city, where the road to Mecca began. Around it is one of the busiest markets in Al-Balad, with fruit, sweets and street food.",
        "come": "On foot from Souq Al-Alawi, heading east.",
        "quando": "Evening.",
        "tempo": "30-45 minutes",
        "costo": "Free entry (2026)",
        "lat": 21.48526,
        "lng": 39.1927
      },
      {
        "nome": "Matbouli House Museum",
        "testo": "A house in Al-Balad open as a museum: one of the few ways to see the inside of one of the district's tower houses.",
        "come": "On foot, near Souq Al-Alawi.",
        "quando": "Afternoon; ask on site for opening times.",
        "tempo": "45 minutes",
        "lat": 21.48499,
        "lng": 39.18884
      },
      {
        "nome": "Red Sea Museum",
        "testo": "Opened on 6 December 2025 in the restored Bab Al-Bunt building, Jeddah's old sea gate on the edge of Al-Balad. More than a thousand objects in 23 galleries tell the story of the Red Sea: trade, pilgrimage, seafaring and nature.",
        "come": "Taxi or Uber to the Al-Balad waterfront, then on foot.",
        "quando": "Morning or early afternoon, before the sunset walk in the district.",
        "tempo": "1.5-2 hours",
        "consiglio": "See it before Al-Balad: it helps you understand where the wood of the rawashin and the pilgrims came from."
      },
      {
        "nome": "Al-Rahma Mosque",
        "testo": "The «floating mosque», from 1985, built on the water's edge along the northern Corniche: at high tide it seems to rest on the sea. It has one main dome and 52 smaller ones.",
        "come": "Taxi or Uber along the northern Corniche, about 30 minutes from Al-Balad.",
        "quando": "At sunset, for the light on the water.",
        "tempo": "30 minutes",
        "lat": 21.6486,
        "lng": 39.1008,
        "consiglio": "Cover arms and legs; women wear a headscarf if they go in."
      },
      {
        "nome": "Tayebat Museum",
        "testo": "A large private complex built in Hejazi style, with halls on the history of the peninsula, archaeology, coins, traditional costume and Islamic art. Useful for seeing how Hejazi house interiors were furnished.",
        "come": "Taxi or Uber, Al-Faisaliyah district.",
        "quando": "Morning.",
        "tempo": "2 hours",
        "orari": "Sunday-Thursday 8am-9pm",
        "lat": 21.58064,
        "lng": 39.17655
      },
      {
        "nome": "Hayy Jameel",
        "testo": "Art Jameel's contemporary arts centre, opened in 2021: exhibitions, cinema, library, workshops and cafés. It is the best place to see today's Saudi art scene.",
        "come": "Taxi or Uber, Al-Muhammadiyah district, in the north of the city.",
        "quando": "Afternoon or evening.",
        "tempo": "1.5 hours",
        "orari": "Daily 2pm-10pm; closed on Tuesday",
        "costo": "Free entry (2026)",
        "url": "https://hayyjameel.org/visit/"
      },
      {
        "nome": "Sharm Obhur",
        "testo": "The inlet north of the city, an old river valley flooded by the sea, with a marina, yacht clubs and private beaches. In the background you can see the Jeddah Tower construction site, which passed 480 metres in November 2026.",
        "come": "Taxi or Uber, about 30 km and half an hour from Al-Balad.",
        "quando": "Morning for the sea, sunset for the view.",
        "tempo": "Half a day",
        "lat": 21.7167,
        "lng": 39.1167,
        "consiglio": "The best beaches are paid and inside resorts or clubs: check access rules and dress code first."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Red Sea Museum",
          "Afternoon: Al-Balad, Nassif House and Al-Shafi'i Mosque",
          "Sunset in Souq Al-Alawi as far as Bab Makkah",
          "Evening: Corniche, King Fahd Fountain and a fish dinner"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2: morning at Sharm Obhur or on a boat to the reefs, afternoon at Hayy Jameel, sunset at Al-Rahma Mosque"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2: as above",
          "Day 3: Tayebat Museum in the morning, Matbouli House Museum and a second walk through Al-Balad, Thursday evening on the Corniche with the families"
        ]
      }
    ],
    zone: [
      {
        "nome": "Al-Balad",
        "perChi": "those who want to sleep in the historic center",
        "testo": "Few places, set in restored old houses. You can walk out into the lanes at sunset, but the sea and the new districts are far away."
      },
      {
        "nome": "Corniche",
        "perChi": "those who want sea and convenience",
        "testo": "Hotels and resorts on the seafront, with fish restaurants and evening strolls. Al-Balad is 15-30 minutes away by taxi."
      },
      {
        "nome": "New districts",
        "perChi": "those who prefer international hotels",
        "testo": "Glass towers and international chains along the big northern roads: comfortable and well served, but from here you only get around by car."
      },
      {
        "nome": "Obhur",
        "perChi": "those who want the sea and boat trips",
        "testo": "Resorts and clubs with private beaches on the northern inlet. Far from the centre, about half an hour from Al-Balad."
      }
    ],
    sapori: [
      {
        "nome": "Kabsa",
        "testo": "The national dish: spiced rice with meat or chicken."
      },
      {
        "nome": "Mandi",
        "testo": "Yemeni meat cooked in an underground oven, with smoked rice."
      },
      {
        "nome": "Foul",
        "testo": "Stewed fava beans for breakfast, with warm bread."
      },
      {
        "nome": "Grilled fish",
        "testo": "From the Red Sea, on the Corniche."
      }
    ],
    attenzioni: [
      "Safety: as of November 2026 the UK government advises against all but essential travel to the whole of Saudi Arabia and against all travel within 10 km of the Yemen border, because of missile and drone attacks (including on Riyadh airport). Check your government's travel advice and your insurance before leaving.",
      "Mecca is closed to non-Muslims: on the motorway the signs show the compulsory detours. It is not a rule to get around.",
      "Al-Balad at midday: the district comes alive in late afternoon, when the light reaches the wood.",
      "Photos of people, especially women: always ask permission.",
      "Rules on dress and public behavior: check the official channels before leaving."
    ],
    gite: [
      {
        "nome": "Red Sea reefs by boat",
        "distanza": "30 km, about 30 minutes to Obhur",
        "come": "Snorkelling or diving trips with the dive centres and yacht clubs of Obhur, booked a day or two ahead.",
        "testo": "Off Jeddah there are reefs far less visited than the Egyptian ones. Half a day is enough for two dives and getting back before the heat."
      },
      {
        "nome": "Umluj",
        "distanza": "about 5-6 hours' drive north",
        "come": "By car along the coast, ideally with at least one night there.",
        "testo": "An archipelago of white-sand islands and almost untouched reefs, still without tourist facilities. Not a day trip: it makes sense as a stop on the way to AlUla."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Jeddah?",
        "risposta": "Two days are enough for Al-Balad, the Corniche and a morning by the sea. With three you can add the museums and Hayy Jameel without rushing."
      },
      {
        "domanda": "Can non-Muslims visit Jeddah?",
        "risposta": "Yes, Jeddah is open to everyone. It is Mecca, about 80 km away, that is closed to non-Muslims: the motorways signpost the compulsory detours."
      },
      {
        "domanda": "When is the best time for Al-Balad?",
        "risposta": "Late afternoon, an hour and a half before sunset. At midday the district is empty and the light flat; after the sunset prayer the shops reopen."
      },
      {
        "domanda": "How do you get around the city?",
        "risposta": "By Uber or Careem, which are cheap and work well. Al-Balad is walkable, the rest of the city is not: distances are huge."
      },
      {
        "domanda": "Can you swim in Jeddah?",
        "risposta": "Yes, but the best beaches are inside paid resorts and clubs, especially in Obhur. On public beaches the country's dress rules apply."
      },
      {
        "domanda": "When should you go?",
        "risposta": "From November to March. The rest of the year the heat and humidity of the Red Sea make even an evening walk hard work."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['al-balad-jeddah'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: "The stone gate with two towers at the entrance of the historic Al-Balad district, Jeddah",
    immagine: '/images/arabia-saudita/jeddah.jpg',
  },
  {
    slug: 'alula',
    immagine: '/images/arabia-saudita/alula.jpg',
    paeseSlug: 'arabia-saudita',
    ordine: 2,
    nome: 'AlUla and Hegra',
    tipologia: ['archeologia', 'deserto', 'paesaggi'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    introduzione:
      "An oasis in a red sandstone desert, with one hundred and eleven monumental tombs carved into the rock by the Nabataeans, the same people as Petra, and with a stroke of luck Petra doesn't have: almost nobody in front of them. Hegra was the first Saudi site added to the UNESCO World Heritage list, in 2008.",
    percheAndarci:
      "It's the main reason to come to Saudi Arabia. Hegra was the second city of the Nabataean kingdom after Petra: the tombs are just as elaborate and much better preserved, because the sandstone here is harder, and they're visited by a number of people that would be unthinkable at Petra.",
    cosaVedere: [
      "Hegra (Mada'in Salih), with the 111 monumental tombs and Qasr al-Farid, the \"lonely tomb\" left unfinished",
      'Jabal Ikmah, the "open-air library" with hundreds of inscriptions in Dadanitic, Lihyanite, Nabataean and ancient Arabic',
      'Dadan, capital of the kingdoms of Dadan and Lihyan, older than Hegra',
      'The old town of AlUla, a maze of mud houses at the foot of the citadel',
      'Elephant Rock (Jabal AlFil), the sandstone monolith eroded into the shape of an elephant',
      'The AlUla oasis, with hundreds of thousands of date palms and shaded paths between the fields',
    ],
    cosaFare: [
      'The guided visit to Hegra, mandatory and limited in numbers (there is a dedicated experience card)',
      'Jabal Ikmah early in the morning, when the raking light makes the carvings stand out',
      "Sunset at Elephant Rock, the evening gathering spot for locals",
      'Walking or cycling in the oasis, along the paths among the palms',
      'In season, a night in the desert or a hot-air balloon flight over the sandstone formations',
    ],
    doveDormire:
      "AlUla has few facilities relative to demand and high prices, from desert resorts, very expensive, to simpler accommodations in the new town. **You need to book far in advance**, especially between December and February, in high season, with festivals and events.",
    doveMangiare:
      "The offering has grown fast, but remains limited and expensive compared to the rest of the country. In the restored old town there are restaurants and cafés; in the new town you eat at neighborhood places at normal prices. Look for the oasis dates, the local product, to buy directly from the growers.",
    comeArrivare: "Usually by domestic flight to AlUla (ULH): about an hour and a half from Jeddah and two hours from Riyadh, with Saudia and flynas. On arrival it is best to pick up a hire car, booked ahead in high season. Alternatively it is about 7 hours by road from Jeddah and 3-4 from Medina: the roads are excellent and fuel costs very little.",
    comeSpostarsi:
      "In AlUla there is a shuttle service between the main sites; for the rest you need a car. **You can't enter Hegra with your own vehicle**: access is only with the site's buses and guides.",
    periodoMigliore:
      "October to March; the best months are December and February, with temperatures between 12 and 25 degrees (54-77°F). In summer it goes well above 40 (104°F) and visiting becomes impossible. Desert nights are cold even in winter.",
    costi: "Hegra Day Tour 95 SAR (about 22 €), Dadan and Jabal Ikmah tour from 60 SAR (about 14 €), the oasis, AlJadidah and Harrat Viewpoint free. Accommodation is the most expensive item of the whole trip to Saudi Arabia. Indicative daily budget per person: low 90-120 € (simple hotel in the new town, shared car, one tour); mid 180-260 € (good hotel, two tours, dinners in AlJadidah); high 500 € and up (desert resort, private 4x4 tours).",
    erroriDaEvitare: [
      'Showing up at Hegra without a reservation: access is limited, you enter only with the guide and in peak months the spots run out',
      'Booking accommodation at the last minute: AlUla has few facilities and fills up in high season',
      'Planning it for summer',
      'Stopping at Hegra and skipping Jabal Ikmah and Dadan: they are in the same area and tell the thousand years before the Nabataeans',
      "Expecting only \"Petra without tourists\": the landscape is different and in some ways more beautiful, but the tombs are fewer and there is no Siq",
    ],
    miaEsperienza:
      "Hegra is the reason you take the plane to Saudi Arabia, and it delivers what it promises, as long as you adjust your expectations. If you arrive thinking \"Petra without the crowds\" you find something else: the tombs are one hundred and eleven against Petra's hundreds, there's no Siq to build up the surprise and there's no Treasury. In exchange there's what's no longer there elsewhere. You stand in front of a Nabataean facade carved two thousand years ago, ten meters high, with the inscriptions still legible on the lintel, and around you there's nobody: no vendors, no camels, no groups. Qasr al-Farid, the lonely tomb left unfinished, stands alone in the middle of the desert and shows how they worked: they carved from the top down, and you can see it halfway done. The rest of the area is worth as much as Hegra. Jabal Ikmah is a rock wall covered in inscriptions in four alphabets, left by those who passed through here twenty-five hundred years ago: a kind of public register carved in stone. On the practical side one thing matters: you enter only with the guide and a reservation, and in AlUla the accommodation is scarce and expensive.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hegra (Mada'in Salih)",
        "testo": "Saudi Arabia's first UNESCO World Heritage Site: more than 110 monumental Nabataean tombs carved into the sandstone about two thousand years ago, many with inscriptions about the dead. Qasr al-Farid, the lonely tomb, was left unfinished: you can see how they carved from the top down.",
        "come": "Guided tours only. Tours are limited each day: best booked online, at the visitor centre you only get a place if one is left. Meeting point at Hegra South Gate, with free parking, or a coach from Winter Park in AlUla.",
        "quando": "Morning or late afternoon, with less heat.",
        "tempo": "2-3 hours",
        "url": "https://www.experiencealula.com/en/places-to-go/hegra",
        "consiglio": "Book weeks ahead in peak months. Compared with Petra it is smaller and quieter.",
        "costo": "Hegra Day Tour with guide 95 SAR per person, about 22 €; Hegra Premium Tour by private 4x4 from 1,000 SAR per vehicle, about 230 € (2026)",
        "lat": 26.79167,
        "lng": 37.95278
      },
      {
        "nome": "Jabal Ikmah",
        "testo": "A canyon with hundreds of inscriptions carved into the sandstone, mostly in Dadanitic and other ancient North Arabian languages, nearly all from the second half of the 1st millennium BC.",
        "come": "With the Dadan and Jabal Ikmah tour: you park for free at AlUla's Winter Park and a coach takes you to the Dadan visitor centre, then to Jabal Ikmah and back.",
        "quando": "Morning, when the low light brings out the carvings.",
        "tempo": "1-1.5 hours",
        "url": "https://www.experiencealula.com/en/places-to-go/jabal-ikmah",
        "costo": "Dadan and Jabal Ikmah tour from 60 SAR per person, about 14 €, about 2 hours (2026)",
        "lat": 26.695,
        "lng": 37.8839
      },
      {
        "nome": "Dadan",
        "testo": "The capital of the Dadan and Lihyan kingdoms more than two thousand years ago, on the Incense Road, with tombs cut into the red cliff: some have seated lions carved in the rock and are thought to have belonged to the elite.",
        "come": "With the same tour as Jabal Ikmah, leaving from Winter Park; self-drive is not allowed. Tours are limited, best booked online.",
        "quando": "Morning.",
        "tempo": "1.5 hours",
        "url": "https://www.experiencealula.com/en/places-to-go/dadan",
        "consiglio": "Usually combined with Jabal Ikmah.",
        "costo": "Included in the Dadan and Jabal Ikmah tour (from 60 SAR, about 14 €, 2026)",
        "lat": 26.64676,
        "lng": 37.91393
      },
      {
        "nome": "AlUla Old Town and Elephant Rock",
        "testo": "The village of lanes and mudbrick houses, inhabited from the 12th century on the pilgrim route between Damascus and Mecca, now restored with shops and restaurants; and the elephant-shaped rock, where people gather at sunset.",
        "come": "The old town is explored on foot; Elephant Rock is a short drive out of town, with free parking and a wooden boardwalk.",
        "quando": "Old Town from afternoon to evening; Elephant Rock open daily from 4pm to midnight (2026), best at sunset.",
        "tempo": "2 hours",
        "consiglio": "Climbing the rock is not allowed; desert evenings are cold and there are fire pits.",
        "costo": "Old Town free, guided tour 70 SAR, about 16 € (2026); Elephant Rock with free parking",
        "url": "https://www.experiencealula.com/en/places-to-go/alula-old-town",
        "orari": "Old Town from 8-9am, shops until 11pm and restaurants until 1am; Elephant Rock daily 4pm-midnight",
        "lat": 26.61667,
        "lng": 37.91667
      },
      {
        "nome": "Qasr al-Farid",
        "testo": "The «lonely tomb», the most photographed in Hegra: a Nabataean facade carved into a single boulder standing alone in the desert. It was never finished, and the still-rough lower part shows that they worked from the top down.",
        "come": "Only on the Hegra tour, which stops here.",
        "quando": "Late afternoon, when the light warms the sandstone.",
        "tempo": "20-30 minutes, within the tour",
        "costo": "Included in the Hegra tour (2026)",
        "lat": 26.77397,
        "lng": 37.96122,
        "url": "https://www.experiencealula.com/en/places-to-go/hegra"
      },
      {
        "nome": "AlUla Oasis",
        "testo": "The palm grove that keeps the valley alive: the palms produce more than 90,000 tonnes of dates a year, and citrus and herbs also grow between the fields. About 6 km of signposted trails pass abandoned mud houses, working farms and ancient walls.",
        "come": "On foot or by bike; free parking, the handiest being Heart of the Oasis and North Parking near AlJadidah.",
        "quando": "Early morning or late afternoon, in the shade.",
        "tempo": "1.5-2 hours",
        "orari": "Trails open day and night",
        "costo": "Free; guided Oasis Heritage Trail 35 SAR, about 8 € (2026)",
        "lat": 26.62696,
        "lng": 37.91683,
        "url": "https://www.experiencealula.com/en/places-to-go/alula-oasis",
        "consiglio": "Dates are sold by weight directly by the growers."
      },
      {
        "nome": "AlJadidah Arts District",
        "testo": "The pedestrian arts district, a short walk from the Old Town: murals, galleries, temporary exhibitions, an open-air cinema and a roller rink. In the evening it is the liveliest place in AlUla, with cafés, restaurants and food trucks.",
        "come": "On foot from the Old Town; free parking at North Parking, with a shuttle.",
        "quando": "From 4pm onwards, when it comes alive.",
        "tempo": "1-2 hours",
        "orari": "Restaurants, food trucks and shops often open until at least midnight",
        "costo": "Free entry (2026)",
        "lat": 26.63195,
        "lng": 37.91184,
        "url": "https://www.experiencealula.com/en/places-to-go/aljadidah-arts-district"
      },
      {
        "nome": "Harrat Viewpoint",
        "testo": "A lookout at 1,219 metres on Harrat Uwayrid, a lava field above the valley: from here you see the oasis, Dadan and the Old Town. There are telescopes for stargazing after sunset.",
        "come": "By car, about 30 minutes from the Old Town, free parking; many tours also stop here.",
        "quando": "Sunset, then stay for the stars.",
        "tempo": "1-1.5 hours",
        "orari": "Daily 2pm-10pm",
        "costo": "Free, no booking needed (2026)",
        "lat": 26.63181,
        "lng": 37.89725,
        "url": "https://www.experiencealula.com/en/places-to-go/harrat-viewpoint",
        "consiglio": "Bring a hat and a jacket: in the evening it is windy and cold up there."
      },
      {
        "nome": "Maraya",
        "testo": "The mirror-clad building in the Ashar Valley, the largest in the world: 9,740 panels reflecting the surrounding rocks. It hosts concerts and events, with a 500-seat hall.",
        "come": "By car, about 20 minutes from central AlUla. The inside can only be seen on the dedicated tour or at an event.",
        "quando": "Late afternoon, when the reflection of the rocks is warmest.",
        "tempo": "30-45 minutes",
        "lat": 26.74315,
        "lng": 37.86528,
        "url": "https://www.experiencealula.com/en/places-to-go/maraya"
      },
      {
        "nome": "Sharaan Nature Reserve",
        "testo": "A 1,500 km² protected area north-east of Hegra, with red-rock canyons and flowering valleys. It is home to Nubian ibex, gazelles and ostriches; one day the Arabian leopard is meant to return too.",
        "come": "Only on 4x4 safaris or guided hikes, about 45 minutes from the Old Town. Children from age 8.",
        "quando": "Early morning or late afternoon, in the cool months; in summer activities stop.",
        "tempo": "3-7 hours depending on the tour",
        "costo": "Hidden Valley Hike from 304 SAR per person, about 70 €; dinner safari from 1,295 SAR, about 300 € (2026)",
        "lat": 26.8663,
        "lng": 38.24419,
        "url": "https://www.experiencealula.com/en/places-to-go/sharaan-nature-reserve",
        "consiglio": "Wear sand or green colours and bring a jacket: it is cold at dawn."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Hegra on the Day Tour, with Qasr al-Farid",
          "Afternoon: AlUla Oasis in the shade",
          "Sunset at Elephant Rock, dinner in AlJadidah"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Hegra with a guided tour, sunset at Elephant Rock",
          "Day 2: Jabal Ikmah and Dadan in the morning, Old Town and oasis in the afternoon, sunset at Harrat Viewpoint"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2: as above",
          "Day 3: excursion in the Sharaan reserve in the morning, Maraya in the afternoon, evening in AlJadidah"
        ]
      }
    ],
    zone: [
      {
        "nome": "New town of AlUla",
        "perChi": "those who want normal prices",
        "testo": "Neighbourhood hotels and eateries at lower prices, 10-30 minutes' drive from the sites. You still need a car."
      },
      {
        "nome": "Desert resorts",
        "perChi": "those who want luxury",
        "testo": "A few high-end properties in the Ashar Valley and around, very expensive and to be booked months ahead for December-February."
      },
      {
        "nome": "Old town",
        "perChi": "those who want the historic atmosphere",
        "testo": "Restaurants and cafés in the restored part and in AlJadidah, within walking distance; few places to stay."
      }
    ],
    sapori: [
      {
        "nome": "AlUla dates",
        "testo": "The oasis product, to buy from the producers."
      },
      {
        "nome": "Kabsa",
        "testo": "Spiced rice with meat, in neighborhood places."
      },
      {
        "nome": "Arabic coffee",
        "testo": "With cardamom, served with dates."
      },
      {
        "nome": "Oven bread",
        "testo": "Baked in neighborhood ovens."
      }
    ],
    attenzioni: [
      "Safety: as of November 2026 the UK government advises against all but essential travel to the whole of Saudi Arabia and against all travel within 10 km of the Yemen border, because of missile and drone attacks (including on Riyadh airport). Check your government's travel advice and your insurance before leaving.",
      "Turning up at Hegra without a booking: tours are limited and sell out in peak months.",
      "Booking lodging last minute: AlUla has few places and in high season they fill.",
      "Summer heat is extreme: come between October and March.",
      "Stopping at Hegra and skipping Jabal Ikmah and Dadan: they are just as interesting."
    ],
    gite: [
      {
        "nome": "Tayma",
        "distanza": "185 km, about 2 hours 45 by car",
        "come": "By car north-east on a paved road, there and back in a day.",
        "testo": "One of the oldest oases on the peninsula, where the Babylonian king Nabonidus withdrew for years in the 6th century BC. Ancient walls and wells remain."
      },
      {
        "nome": "Khaybar",
        "distanza": "265 km, about 3 hours 20 by car",
        "come": "By car south-east; better with a night, given the distances.",
        "testo": "An oasis ringed by black lava fields, with a fortress and the remains of ancient walls: the volcanic landscape is the opposite of AlUla's sandstone."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in AlUla?",
        "risposta": "Three days is the right amount: one for Hegra, one for Jabal Ikmah, Dadan and the Old Town, one for Sharaan or Harrat Viewpoint. With two you see the essentials."
      },
      {
        "domanda": "Can you visit Hegra on your own?",
        "risposta": "No. Entry is only on guided tours with limited places, the bus Day Tour from 95 SAR or the Premium by private 4x4. It is worth booking online weeks ahead."
      },
      {
        "domanda": "Do you need a car in AlUla?",
        "risposta": "Almost always: the sites are spread over tens of kilometres and tours start from different points. For Hegra, Dadan and Jabal Ikmah, transport inside the site is included in the tour."
      },
      {
        "domanda": "When should you go to AlUla?",
        "risposta": "From October to March, best between December and February. In summer it goes above 40 degrees and many activities stop."
      },
      {
        "domanda": "Is AlUla like Petra?",
        "risposta": "Both are Nabataean, but Hegra has fewer tombs, no Siq and no Treasury. In return there are very few visitors and inscriptions that are still legible."
      },
      {
        "domanda": "Can you sleep in AlUla without spending too much?",
        "risposta": "Places are few and expensive. The cheapest are in the new town; in high season they need booking well in advance."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['hegra-alula'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'A dromedary in the foreground on the sand of AlUla, with a sandstone pinnacle and desert rocks in the background',
  },
  {
    slug: 'riyadh-diriyah',
    paeseSlug: 'arabia-saudita',
    ordine: 3,
    nome: 'Riyadh and Diriyah',
    tipologia: ['città', 'storia', 'deserto'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The capital, in the heart of the Najd plateau: a vertical and very recent city, which went in two generations from a fortified village to a metropolis of seven million people. At its gates is Diriyah, the first capital of the Saud dynasty, built of mud brick and today a UNESCO World Heritage site. An hour and a half down a track is the Tuwaiq escarpment, which everyone calls the Edge of the World.",
    percheAndarci:
      "Here you understand how fast this country has transformed. And Diriyah and the Edge of the World, half an hour and an hour and a half from the center, are two of the best things in the Kingdom.",
    cosaVedere: [
      'Diriyah and the At-Turaif district, a UNESCO site, built entirely of mud brick',
      'The Saudi National Museum, the best in the country for understanding the history of the peninsula',
      'The Kingdom Centre, with the skybridge suspended between the two towers',
      'Masmak Fort, the mud fortress from which Ibn Saud began the reconquest in 1902',
      'The Al-Zal souq and the Deira district, the Riyadh from before the skyscrapers',
      'The Edge of the World (Jebel Fihrayn), the Tuwaiq escarpment overlooking nothing',
    ],
    cosaFare: [
      'Diriyah at sunset, when the mud walls turn orange (there is a dedicated experience card)',
      'The excursion to the Edge of the World, which requires a 4x4 and half a day (there is a dedicated experience card)',
      "Going up the Kingdom Centre skybridge for the view over the city",
      "An evening in the new districts, where since 2019 cafés, restaurants and venues have opened that weren't there five years ago",
    ],
    doveDormire:
      "The most convenient area for transport and restaurants is the modern center (Olaya, King Fahd Road). Diriyah has high-end properties in the restored district. Riyadh is huge and spread out: without a car or Uber you don't get anywhere.",
    doveMangiare:
      "Najdi cuisine is different from Jeddah's, drier: kabsa as the main dish, jareesh (cracked wheat cooked for a long time) and mutabbaq. In the old neighborhoods there are excellent popular restaurants that cost very little; in the new ones a café and restaurant scene that has exploded in recent years, with capital-city prices. Try Saudi Arabic coffee, light and spiced with cardamom, served with dates.",
    comeArrivare: "By plane to King Khalid International (RUH), with direct flights from Europe; from Jeddah the domestic flight takes about 2 hours, the same as from AlUla. From the airport, yellow metro line 4 runs into the city for about 4 SAR (under 1 €), with the Darb app or the card; Uber and Careem cost about 60-100 SAR (14-23 €). Avoid unlicensed drivers in arrivals.",
    comeSpostarsi:
      "With Uber and Careem, the normal way, which are cheap. The Riyadh metro has opened recently and covers the main axes. For the Edge of the World you need a 4x4 with a driver: the last stretch is on a track and it's easy to get lost.",
    periodoMigliore:
      "November to March. In the interior the climate is dry, and 30 degrees (86°F) is much easier to bear than the humidity of Jeddah; but in summer it goes past 45-50 (113-122°F) and winter nights drop close to freezing.",
    costi: "At-Turaif about 100 SAR (23 €), National Museum and Masmak free, Edge of the World on a tour 300-600 SAR (70-140 €). Uber is cheap, hotels have capital-city prices. Indicative daily budget per person: low 60-90 € (simple hotel in a double room, metro and Uber, popular restaurants); mid 140-200 € (hotel in Olaya, Diriyah, dinner in the new districts); high 350 € and up (hotel in Diriyah, private tour, dinners at Bujairi).",
    erroriDaEvitare: [
      'Going to the Edge of the World on your own with a regular car: the last stretch is a track, there are no signs and the phone gets signal only in patches',
      'Visiting Diriyah at noon: the mud reflects the light, and the beauty is all in the last hour of daylight',
      'Expecting a historic city: Riyadh was built almost entirely after the 1970s, and the old part comes down to Masmak and a few blocks',
      'Underestimating distances: Riyadh stretches for tens of kilometers and every trip takes half an hour',
    ],
    miaEsperienza:
      "Riyadh explains the country better than any other city, but because of the speed at which it has changed more than for what it shows. Masmak Fort, the mud fortress from which Ibn Saud's reconquest started in 1902, is wedged between the skyscrapers, and between them there are little more than a hundred years. What stayed with me, though, is Diriyah, half an hour outside the city: the first Saud capital, built entirely of mud brick, destroyed by the Ottomans in 1818 and restored in recent years. At sunset the walls go from ochre to orange, and the At-Turaif district, with its multi-story palaces and triangular motifs on the facades, seems to be one with the earth it's made of. The other stop is the Edge of the World, and for once the name doesn't exaggerate. After an hour and a half on a track you reach the edge of an escarpment that drops three hundred meters onto a plain disappearing at the horizon, with no fences, no ticket and very few people around. You need a 4x4 and a guide, because there are no signs and the phone gets no signal.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "At-Turaif in Diriyah",
        "testo": "The district of the capital of the first Saudi state (1727-1818), UNESCO World Heritage since 2010, built of mudbrick, destroyed in 1818 by Ibrahim Pasha's Ottoman-Egyptian army and restored. At sunset the walls turn from ochre to orange.",
        "come": "On the north-western edge of Riyadh, by taxi or Uber. Entry with a ticket booked in advance; you walk around the site.",
        "quando": "The last hour of light.",
        "tempo": "2 hours",
        "consiglio": "Have dinner at Bujairi Terrace to see the site lit up; Bujairi also needs a booked ticket.",
        "orari": "Until midnight; on Friday from 2pm",
        "costo": "About 100 SAR, about 23 € (2026), ticket on diriyah.sa",
        "url": "https://www.diriyah.sa",
        "lat": 24.73333,
        "lng": 46.57556
      },
      {
        "nome": "Saudi National Museum",
        "testo": "A comprehensive museum for understanding the history of the peninsula: eight halls, from geology and prehistory to the pre-Islamic kingdoms, Islam, the two Saudi states and the unification of the kingdom.",
        "come": "Taxi or Uber, in the Al-Murabba district, inside the King Abdulaziz Historical Centre.",
        "quando": "Morning, before Diriyah.",
        "tempo": "2 hours",
        "orari": "9am-7pm; Thursday and Friday 2pm-10pm; closed on Sunday",
        "costo": "Free entry (2026)",
        "lat": 24.64572,
        "lng": 46.71087,
        "consiglio": "See it before Diriyah: it gives the context for understanding At-Turaif."
      },
      {
        "nome": "Masmak Fort",
        "testo": "The mud and mudbrick fortress in the old centre, where Ibn Saud's recapture of Riyadh began in January 1902. Since 1995 it has been a museum, with photos, maps and weapons.",
        "come": "Taxi or Uber, in the center.",
        "quando": "Afternoon.",
        "tempo": "45 minutes",
        "orari": "Closed in the middle of the day, reopens in the afternoon",
        "costo": "Free entry (2026)",
        "lat": 24.63125,
        "lng": 46.71333
      },
      {
        "nome": "Edge of the World",
        "testo": "A long escarpment of the Tuwaiq range above the desert plain, about 100 km from Riyadh, with sweeping views.",
        "come": "On an organised tour or with a local guide. If you go on your own you need a 4x4, because the roads are rough, and everything you need: the area is wild and has no services.",
        "quando": "Morning or late afternoon.",
        "tempo": "Half a day",
        "consiglio": "Go with a tour and keep away from the edge.",
        "costo": "No ticket; 4x4 tour with driver 300-600 SAR, about 70-140 € depending on the package (2026)",
        "lat": 24.95004,
        "lng": 46.00264
      },
      {
        "nome": "Bujairi Terrace",
        "testo": "The district of restaurants and cafés facing At-Turaif across Wadi Hanifa. From here you see the mud walls lit up after sunset.",
        "come": "On foot from At-Turaif; Bujairi also requires a booked ticket.",
        "quando": "Evening, after visiting At-Turaif.",
        "tempo": "1.5-2 hours",
        "lat": 24.73579,
        "lng": 46.57586,
        "url": "https://www.diriyah.sa",
        "consiglio": "It is expensive: for the view, a coffee on the terrace is enough."
      },
      {
        "nome": "Souq Al-Zal",
        "testo": "The traditional market next to Masmak, with carpets, incense, clothes, daggers and antiques. It is the part of the city that most resembles the Riyadh of before the skyscrapers.",
        "come": "On foot from Masmak.",
        "quando": "After the afternoon prayer, when it reopens and gets busy.",
        "tempo": "1 hour",
        "orari": "Shops close during prayers",
        "costo": "Free entry (2026)",
        "lat": 24.62897,
        "lng": 46.71224,
        "consiglio": "Bargaining is normal, especially for carpets."
      },
      {
        "nome": "Deera Square and Imam Turki Grand Mosque",
        "testo": "The square of the old centre, next to Al-Hukm Palace and the Imam Turki bin Abdullah Grand Mosque: founded around 1830 and rebuilt in 1992 in Najdi style, it holds 17,000 worshippers. In the evening the Riyadh limestone turns golden.",
        "come": "On foot from Masmak and Souq Al-Zal.",
        "quando": "Evening, when it cools down and the mosque is lit.",
        "tempo": "30 minutes",
        "costo": "Free entry (2026)",
        "lat": 24.63088,
        "lng": 46.71184
      },
      {
        "nome": "Murabba Palace",
        "testo": "The «square» palace built outside the walls of the old city: from 1938 to 1953 it was the residence and office of King Abdulaziz. Since 1999 it has been a museum, inside the King Abdulaziz Historical Center, the same complex as the National Museum.",
        "come": "On foot from the National Museum.",
        "quando": "Afternoon, combined with the museum.",
        "tempo": "45 minutes",
        "lat": 24.6465,
        "lng": 46.7093
      },
      {
        "nome": "Kingdom Centre and Sky Bridge",
        "testo": "The 302-metre, 99-storey skyscraper with the large opening at the top, symbol of modern Riyadh. The Sky Bridge, the walkway hung between its two tips, gives the widest view over the city.",
        "come": "Taxi or Uber, Olaya district; ticket office on the ground floor, lifts from the mall.",
        "quando": "At sunset, with clear skies.",
        "tempo": "1 hour",
        "lat": 24.71138,
        "lng": 46.67435
      },
      {
        "nome": "Al-Faisaliah Tower",
        "testo": "Saudi Arabia's first skyscraper, from 2000, designed by Foster + Partners: 267 metres, with the glass sphere near the top. Until 2002 it was the tallest building in the country.",
        "come": "Taxi or Uber, Olaya district, a few minutes from the Kingdom Centre.",
        "quando": "Evening, when it is lit.",
        "tempo": "30 minutes",
        "lat": 24.69004,
        "lng": 46.68521
      },
      {
        "nome": "King Abdullah Financial District",
        "testo": "The financial district in the north of the city, with towers by international practices and pedestrian streets. It is where you best see the Riyadh being built right now.",
        "come": "Metro (KAFD station) or Uber.",
        "quando": "Evening, for a walk.",
        "tempo": "1 hour",
        "lat": 24.76281,
        "lng": 46.64031
      },
      {
        "nome": "Wadi Hanifa",
        "testo": "The valley that crosses Riyadh for 120 km from north-west to south-east: Diriyah, Uyaynah and other historic villages stand along it. In the city stretch there are parks and paths along the wadi bed.",
        "come": "By car or Uber to the parks along the wadi.",
        "quando": "Late afternoon, in the cool months.",
        "tempo": "1-2 hours",
        "lat": 24.5809,
        "lng": 46.71311
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: National Museum and Murabba Palace",
          "Afternoon: Masmak, Souq Al-Zal and Deera Square",
          "Sunset and evening: At-Turaif and dinner at Bujairi Terrace"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2: morning along Wadi Hanifa, afternoon at the Edge of the World by 4x4 until sunset"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2: as above",
          "Day 3: Kingdom Centre and Sky Bridge, Al-Faisaliah Tower, evening at King Abdullah Financial District"
        ]
      }
    ],
    zone: [
      {
        "nome": "Olaya / center",
        "perChi": "those who want to be near services",
        "testo": "Modern hotels, malls and restaurants along King Fahd Road. It is the handiest base for the metro and Uber; Diriyah is about 30 minutes away."
      },
      {
        "nome": "Diriyah",
        "perChi": "those who want to sleep near the historic site",
        "testo": "A few new hotels, quiet and well kept, a short walk from At-Turaif and Bujairi. Far from the centre: every trip into town is a journey."
      },
      {
        "nome": "Al-Murabba and the old centre",
        "perChi": "those who want to be close to the museums",
        "testo": "Simpler hotels near the National Museum, Masmak and Souq Al-Zal. In the evening the area is quieter than the new districts."
      }
    ],
    sapori: [
      {
        "nome": "Kabsa",
        "testo": "Spiced rice with meat, the main dish of the Najd."
      },
      {
        "nome": "Jareesh",
        "testo": "Cracked wheat cooked long with meat, drier than Jeddah cooking."
      },
      {
        "nome": "Mutabbaq",
        "testo": "Pastry stuffed with meat or cheese."
      },
      {
        "nome": "Arabic coffee",
        "testo": "With cardamom, everywhere."
      }
    ],
    attenzioni: [
      "Safety: as of November 2026 the UK government advises against all but essential travel to the whole of Saudi Arabia and against all travel within 10 km of the Yemen border, because of missile and drone attacks (including on Riyadh airport). Check your government's travel advice and your insurance before leaving.",
      "Edge of the World: better to go on an organised tour than on your own.",
      "Visiting Diriyah at midday: the mud reflects heat, the beauty is in the last hour of light.",
      "Expecting a historic city: Riyadh is largely modern.",
      "Summer heat is extreme: come between November and March."
    ],
    gite: [
      {
        "nome": "Ushaiger",
        "distanza": "211 km, about 2.5 hours by car",
        "come": "By car north-west, or on a day tour from Riyadh.",
        "testo": "One of the oldest villages in Najd, a stop for pilgrims heading to Mecca and the original home of the Al Thani family, who rule Qatar. Restored mud houses, lanes and palm groves."
      },
      {
        "nome": "King Khalid Royal Reserve (Thumamah)",
        "distanza": "74 km, about an hour by car",
        "come": "By car or Uber to the north-east.",
        "testo": "King Khalid's former estate, now a protected area of dunes and plains: where Riyadh residents go for desert picnics in the cool months."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Riyadh?",
        "risposta": "Two days for the museums in the centre, Diriyah and the Edge of the World. A third day adds the Kingdom Centre and the new districts."
      },
      {
        "domanda": "Can you go to the Edge of the World on your own?",
        "risposta": "You can, but it is not worth it: the last stretch is an unsignposted track, phone signal comes and goes and you need a 4x4. A tour with driver costs 300-600 SAR."
      },
      {
        "domanda": "Do you need to book Diriyah?",
        "risposta": "Yes, the ticket for At-Turaif, about 100 SAR, is bought online on diriyah.sa; Bujairi Terrace also requires a booked ticket."
      },
      {
        "domanda": "How do you get around Riyadh?",
        "risposta": "By Uber or Careem, which are cheap, and by metro on the main routes. Only the old centre around Masmak is walkable."
      },
      {
        "domanda": "Is the National Museum free?",
        "risposta": "Yes, entry is free. It is closed on Sunday, open 9am-7pm and on Thursday and Friday 2pm-10pm."
      },
      {
        "domanda": "When should you go to Riyadh?",
        "risposta": "From November to March. In summer it goes above 45 degrees, while winter nights can drop close to zero."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['diriyah', 'edge-of-the-world'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'The mud-brick walls and corner tower of the Masmak fortress, Riyadh',
    immagine: '/images/arabia-saudita/riyadh-diriyah.jpg',
  },
  {
    slug: 'abha-asir',
    paeseSlug: 'arabia-saudita',
    ordine: 4,
    nome: 'Abha and the Asir Mountains',
    tipologia: ['montagna', 'natura', 'cultura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The southwest of the country, above 2,000 meters (6,600 ft): green mountains, fog, cultivated terraces and stone villages clinging to the cliffs. It's the part of Saudi Arabia that defies every expectation, and the only one where in summer you stay cool while the rest of the Kingdom goes past 45 degrees (113°F).",
    percheAndarci:
      "Nobody expects Saudi Arabia to have a mountain region, rainy and terraced. And the architecture of the Asir, with its painted houses, vertical villages like Rijal Almaa and the \"stone villages\" on the escarpments, looks like nothing else on the peninsula.",
    cosaVedere: [
      'Rijal Almaa, the multi-story village of stone and quartz, a candidate for UNESCO World Heritage',
      'Asir National Park and Jebel Sawda, the highest point in the country',
      'Habala, the village on the escarpment that was once reached only by rope ladders',
      'The painted houses of Abha, with colorful geometric patterns painted by women (the Asiri qatt, UNESCO intangible heritage)',
      'The mountain markets, where vendors still wear flower garlands on their heads',
    ],
    cosaFare: [
      'A day in Rijal Almaa, with the museum in the restored houses',
      'The Asir cable car and the trails on Jebel Sawda',
      'A drive around the mountain villages, among terraces and fog',
      'The livestock and flower market, which here is still the social event of the week',
    ],
    doveDormire:
      "Abha has the normal range of a city, at modest prices; small properties are starting to appear in the mountain villages, but there are still few.",
    doveMangiare:
      "Because of mountain agriculture, Asir cuisine uses more grains and vegetables than the rest of the country. Try areeka, the bread with honey and clarified butter, and Asir honey, the most prized on the peninsula, which sells for substantial prices in the markets.",
    comeArrivare: "Usually by domestic flight to Abha (AHB) from Riyadh or Jeddah, about an hour and a half with Saudia or flynas. The airport is small and close to the city, and hire cars are picked up there: book ahead, especially in summer. By road from Jeddah it is over 600 kilometres of mountain roads. On the way back, if the tickets are separate, leave at least 3 hours between the domestic and the international flight.",
    comeSpostarsi: "A rental car is essential: the villages are scattered among the mountains and there is no useful public transport.",
    periodoMigliore:
      "here the calendar is the reverse of the rest of the country. The good season is summer, cool and green; winter can be cold and foggy. From June to August the Asir fills with Saudis fleeing the heat, and it's also the liveliest period.",
    costi: "Modest: aside from the domestic flight, it is one of the cheapest areas of the Kingdom. The Rijal Almaa museum costs a few tens of riyals, the cable cars are paid with hours that change with the season. Indicative daily budget per person: low 50-70 € (city hotel in a double room, shared car, neighbourhood restaurants); mid 100-150 € (better hotel, cable cars, lunches in the villages); high 250 € and up (mountain resort, private guide).",
    erroriDaEvitare: [
      'Planning it in winter expecting the climate of the rest of the country: at 2,200 meters (7,200 ft) it is cold and foggy',
      'Going without a car: the villages are scattered across tens of kilometers of mountains',
      'Rushing through it: it is the region where Saudi Arabia slows down, and in one day you only see the road',
      'Approaching the border area with Yemen, which official advisories recommend against',
    ],
    miaEsperienza:
      "We got there by domestic flight to Abha, and up there everything changed: green mountains, fog, cultivated terraces. We spent the first afternoon in Abha, among the painted houses and the market. The Asiri qatt, the colorful geometric patterns the women paint on the interiors of the houses, is UNESCO intangible heritage and has nothing in common with the austerity of the Najd. The next day I devoted to Rijal Almaa, the multi-story village of stone and quartz with facades that glitter in the sun, and in the afternoon we drove around the mountain villages, among terraces and fog, as far as Habala, on the escarpment. The last day was the slowest: the cable car, the trails on Jebel Sawda and the livestock and flower market, where vendors wear garlands on their heads. Worth knowing: here the good season is summer, when the rest of the Kingdom is unlivable and Saudis go up in droves to cool off.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Rijal Almaa",
        "testo": "The village of some sixty tower houses in stone, clay and wood, some up to eight storeys high, with white-rimmed windows. It is more than 900 years old and was a trading stop between Yemen, Mecca and the Levant; the restored houses hold a museum with over two thousand objects and documents.",
        "come": "By car from Abha, about 50 km and an hour of hairpin bends down towards the coastal plain.",
        "quando": "Morning, when the light is best and it is less hot in the valley.",
        "tempo": "Half a day",
        "lat": 18.2125,
        "lng": 42.27361
      },
      {
        "nome": "Jebel Sawda and the Asir cable car",
        "testo": "Officially recognised as the highest peak in the country, 3,207 metres, although a 2018 survey of Jabal Ferwa has questioned the record. The area is covered in juniper woods, often in mist, and baboons come up to the cars.",
        "come": "By car from Abha, half an hour to an hour; or by cable car.",
        "quando": "Early morning, when the clouds are low.",
        "tempo": "Half a day",
        "lat": 18.26672,
        "lng": 42.36826,
        "consiglio": "Do not feed the baboons."
      },
      {
        "nome": "Habala",
        "testo": "The village in a valley about 300 metres below the edge of the escarpment, once reachable only by rope ladders: the name comes from the Arabic word for «rope». It was home to the «flower men», who wore garlands of dried herbs and flowers on their heads. Since the 1990s you go down by cable car.",
        "come": "By car from Abha, about an hour (58 km), then cable car.",
        "quando": "Afternoon; the cable car has reduced hours and may stop in the wind.",
        "tempo": "1.5 hours",
        "lat": 18.03808,
        "lng": 42.87266
      },
      {
        "nome": "Abha and the painted houses",
        "testo": "Al-qatt al-asiri, the colourful geometric patterns women paint on the inside walls of houses, UNESCO intangible heritage since 2017. Abha stands at 2,270 metres and in summer is the coolest city in the Kingdom.",
        "come": "On foot or by taxi in the center.",
        "quando": "Morning.",
        "tempo": "2 hours",
        "lat": 18.21694,
        "lng": 42.50528
      },
      {
        "nome": "Al-Muftaha Art Village",
        "testo": "Abha's artists' quarter, with studios and galleries. It is one of the places to see al-qatt al-asiri reinterpreted by today's painters.",
        "come": "On foot or by taxi from central Abha.",
        "quando": "Afternoon and evening.",
        "tempo": "1 hour",
        "lat": 18.21314,
        "lng": 42.49556
      },
      {
        "nome": "Green Mountain (Al-Jabal Al-Akhdar)",
        "testo": "The hill in the middle of the city, with the easiest viewpoint over Abha and the surrounding mountains. In the evening it is where families meet.",
        "come": "By car or taxi from the centre, a few minutes.",
        "quando": "Sunset and evening.",
        "tempo": "45 minutes",
        "lat": 18.20451,
        "lng": 42.50634
      },
      {
        "nome": "Abha Dam lake",
        "testo": "The reservoir on the edge of the city, with a park and walks along the shore.",
        "come": "By car or taxi, a few minutes from the centre.",
        "quando": "Late afternoon.",
        "tempo": "1 hour",
        "lat": 18.21228,
        "lng": 42.48668
      },
      {
        "nome": "Al-Sahab Park",
        "testo": "The «park of the clouds», on the edge of the escarpment west of Abha: in the mist it feels like standing above the sky. There are viewpoints over the valleys dropping towards the Tihama.",
        "come": "By car from Abha, a few kilometres west.",
        "quando": "Early morning or late afternoon, when the clouds rise from the valley.",
        "tempo": "1 hour",
        "lat": 18.21832,
        "lng": 42.39671
      },
      {
        "nome": "Asir National Park",
        "testo": "Established in 1981, it covers the ridges around Abha and Jebel Sawda. Juniper woods, picnic areas and scenic roads: in summer it is full of Saudi families escaping the heat.",
        "come": "By car from Abha; the As-Sūda area is about half an hour away.",
        "quando": "Summer, in the morning.",
        "tempo": "Half a day",
        "lat": 18.27615,
        "lng": 42.36442
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Rijal Almaa and its museum",
          "Afternoon: Abha, the painted houses and Al-Muftaha Art Village",
          "Sunset on Green Mountain"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2: Jebel Sawda and Asir National Park in the morning, afternoon at Al-Sahab Park"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Abha and painted houses",
          "Day 2: Rijal Almaa",
          "Day 3: Habala by cable car and Jebel Sawda"
        ]
      }
    ],
    zone: [
      {
        "nome": "Abha",
        "perChi": "those who want a base with services",
        "testo": "City hotels at modest prices and restaurants, at the centre of all the trips: Rijal Almaa, Habala and Jebel Sawda are all within an hour."
      },
      {
        "nome": "Mountain villages",
        "perChi": "those who want quiet",
        "testo": "A few guesthouses and small places among the terraces. You need a car, and in winter the mist and cold are noticeable."
      },
      {
        "nome": "Khamis Mushait",
        "perChi": "those looking for more choice and low prices",
        "testo": "The big city half an hour from Abha, with chain hotels and malls. Handier for services, less attractive as a base."
      }
    ],
    sapori: [
      {
        "nome": "Areeka",
        "testo": "Bread with honey and clarified butter."
      },
      {
        "nome": "Asir honey",
        "testo": "Mountain honey, at the markets."
      },
      {
        "nome": "Grains and vegetables",
        "testo": "Mountain cooking uses more than the rest of the country."
      },
      {
        "nome": "Arabic coffee",
        "testo": "With cardamom."
      }
    ],
    attenzioni: [
      "Safety: as of November 2026 the UK government advises against all but essential travel to the whole of Saudi Arabia and against all travel within 10 km of the Yemen border, because of missile and drone attacks (including on Riyadh airport). Check your government's travel advice and your insurance before leaving.",
      "Here the good season is summer, cool and green; winter is cold and misty.",
      "Without a car you do not get around: the villages are spread over tens of kilometers.",
      "Visiting in a rush: in a day you only see the road.",
      "Border area: the UK government advises against all travel within 10 km of the Yemen border."
    ],
    gite: [
      {
        "nome": "Khamis Mushait",
        "distanza": "30 km, about half an hour by car",
        "come": "By car or taxi from Abha.",
        "testo": "The country's fifth city and one of the great trading centres of the south. The name means «Mushait's Thursday», after the weekly Thursday market."
      },
      {
        "nome": "Al-Namas",
        "distanza": "144 km, about 1 hour 45 by car",
        "come": "By car north on the mountain road.",
        "testo": "An Asir district town about 120 km north of Abha, on the heights among farmed terraces. It is the trip for those who want to see the mountains off the beaten track."
      }
    ],
    faq: [
      {
        "domanda": "When should you go to Asir?",
        "risposta": "In summer, unlike the rest of the country: above 2,000 metres it is cool and everything is green. Winter can be cold and misty."
      },
      {
        "domanda": "Do you need a car in Abha?",
        "risposta": "Yes. The villages and viewpoints are spread along mountain roads and there is no useful public transport. Cars are picked up at Abha airport."
      },
      {
        "domanda": "How many days do you need?",
        "risposta": "At least two, better three: one for Abha, one for Rijal Almaa, one for Habala and Jebel Sawda. In a single day you mostly see the road."
      },
      {
        "domanda": "Is it safe to go to Asir?",
        "risposta": "The British government advises against all travel within 10 km of the Yemen border and against non-essential travel to the whole country. Check the official travel advice before leaving and do not head south."
      },
      {
        "domanda": "What should you buy in Asir?",
        "risposta": "Mountain honey, the most prized on the peninsula, bought from producers after tasting it. It travels well in the hold, not in hand luggage."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'The houses of Abha among the greenery, seen from above in the haze of the Asir mountains',
    immagine: '/images/arabia-saudita/abha-asir.jpg',
  },
  {
    slug: 'umluj-mar-rosso',
    immagine: '/images/arabia-saudita/umluj-mar-rosso.jpg',
    paeseSlug: 'arabia-saudita',
    ordine: 5,
    nome: 'Umluj and the Red Sea',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '2 days, as an extension between Jeddah and AlUla',
    visitataPersonalmente: false,
    introduzione:
      "The northern coast of the Saudi Red Sea, with an archipelago of about a hundred white-sand islands and coral reefs among the least damaged on the planet, because until a few years ago no tourist could get there. With a forgivable exaggeration they call it \"the Saudi Maldives\".",
    percheAndarci:
      "These are reefs that haven't undergone decades of tourist pressure. And it's the part of the country that is changing fastest: the big coastal projects are rising here, and whoever goes now sees it before. It's on the list for a reason with an expiry date. These reefs are among the least damaged in the Red Sea because until 2019 almost no tourist could get there, and now some of the largest tourism projects ever started in the world are being born on this coast. The period in which Umluj remains a fishing port with about a hundred white islands in front of it and no facilities will, in all likelihood, be short. It should also be said honestly what this entails: no services, few operators, no guaranteed standard, and the country's rules apply on the beach too, where on public beaches people go into the water dressed. It's a coast that is opening up right now, far from our idea of a beach destination.",
    cosaVedere: [
      'The archipelago off Umluj, with white-sand islands and coral banks',
      'The reefs of the northern Red Sea, with very high visibility',
      'The coast toward Al Wajh and the area of the big tourism projects under construction',
      'The fishing villages along the coast, the part that is disappearing fastest',
    ],
    cosaFare: [
      'A day by boat among the islands, with snorkeling on the reefs',
      'Diving, in a diving scene still in its infancy and with very few operators',
      'Dolphin sightings and, in season, whale sharks',
    ],
    doveDormire:
      "In Umluj the offering is still scarce and mostly simple; the big coastal resorts under construction will completely change the picture. Many people base themselves in Yanbu, which is better equipped.",
    doveMangiare: 'Fish, in the restaurants of the ports and coastal villages, at low prices. It is not yet a tourist area: few choices and no menu in English.',
    comeArrivare: "With a domestic flight to Yanbu or Al-Wajh and then by car, or directly by car from Jeddah: about 5-6 hours on the coast road, which fits well into the journey to AlUla. Yanbu to Umluj is about 150 km, Umluj to Al-Wajh 176. Best to pick up the hire car at the airport: there is no useful public transport in the area.",
    comeSpostarsi: 'Your own car is a must; boat trips are arranged at the port with local operators.',
    periodoMigliore:
      "October to April. In summer the heat and humidity of the coast make a day on a boat tiring, even though the water stays excellent.",
    costi: "Boat trips at modest prices compared to the Egyptian Red Sea, to be agreed with local operators; cheap accommodation in town, very expensive at The Red Sea resorts. Indicative daily budget per person: low 60-80 € (simple room in a double, shared car, fish at the harbour); mid 120-180 € (better hotel or Yanbu, group boat trip); high 600 € and up (island resort).",
    erroriDaEvitare: [
      "Expecting tourist facilities: there aren't any yet, and it's both the merit and the limit of the area",
      'Counting on international-level operators for diving: the scene is in its infancy and has to be judged case by case',
      "Taking beach clothing for granted: outside the closed resorts the country's rules apply, and on public beaches people go into the water dressed",
      'Planning it without a car',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Umluj archipelago",
        "testo": "An archipelago of 103 white-sand islands and coral banks off Umluj, a town on the coast. Tourism here is still underdeveloped: no facilities on the islands, only boats run by local operators.",
        "come": "By boat from Umluj, with local operators, arranged at the harbour or through your accommodation.",
        "quando": "From October to April, in the morning when the sea is calmest.",
        "tempo": "A full day",
        "consiglio": "Bring water, shade and food: there is nothing on the islands."
      },
      {
        "nome": "Northern Red Sea reefs",
        "testo": "Little-visited reefs, because the country has only issued tourist visas since September 2019. An estimated 200 types of coral and 1,200 fish species live here. Snorkelling and diving with local operators.",
        "come": "Local operators, still few.",
        "quando": "In the cooler months.",
        "tempo": "Half a day"
      },
      {
        "nome": "Jabal Hassan Island",
        "testo": "The largest island of Tabuk Province in the Red Sea, with rocky hills and waters full of life: green and hawksbill turtles, dolphins and dugongs. It is also a stopover for migrating birds such as cranes and lapwings.",
        "come": "By boat from Umluj, usually as part of a day trip among the islands.",
        "quando": "Morning, with a calm sea.",
        "tempo": "Half or full day",
        "lat": 24.97778,
        "lng": 37.08361
      },
      {
        "nome": "Ras al-Shabaan beach",
        "testo": "One of the white-sand beaches with palms near Umluj, on the Red Sea. There are no organised facilities.",
        "come": "By car from Umluj.",
        "quando": "Morning or late afternoon.",
        "tempo": "2-3 hours",
        "consiglio": "Outside closed resorts people swim clothed: check local rules."
      },
      {
        "nome": "Al-Duqm beach",
        "testo": "The coast north of the town, with palms on the beach and pale sand.",
        "come": "By car, a few kilometres north of Umluj.",
        "quando": "Late afternoon.",
        "tempo": "2 hours",
        "lat": 25.0842,
        "lng": 37.25913
      },
      {
        "nome": "Umluj and the harbour",
        "testo": "The fishing town where all the boat trips start. It has no monuments, but it is where you find boats, fish and an idea of what the coast was like before the big projects.",
        "come": "By car; from Jeddah about 5-6 hours along the coast.",
        "quando": "Early morning, when the boats come back.",
        "tempo": "1 hour",
        "lat": 25.03028,
        "lng": 37.26223
      },
      {
        "nome": "The Red Sea destination",
        "testo": "The large tourism project between Umluj and Al-Wajh: the aim is 50 hotels on 22 islands and 6 inland sites. It is the future of this coast, with top-end resorts.",
        "come": "Via the dedicated airport or by car with a transfer to the islands, only with a resort booking.",
        "quando": "From October to April.",
        "tempo": "One or more days",
        "lat": 25.505,
        "lng": 36.955
      },
      {
        "nome": "Al-Wajh",
        "testo": "The coastal town further north, seat of its own governorate on the Red Sea. It has a domestic airport and is the alternative to Umluj for those arriving by air.",
        "come": "By car from Umluj, 176 km and about 2 hours.",
        "quando": "In passing, towards AlUla or further north.",
        "tempo": "Half a day",
        "lat": 26.28333,
        "lng": 36.41667
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: boat trip among the islands and snorkelling on the reefs",
          "Afternoon: Al-Duqm beach",
          "Evening: fish at Umluj harbour"
        ]
      },
      {
        "titolo": "2 days, between Jeddah and AlUla",
        "tappe": [
          "Day 1: from Jeddah to Umluj by car along the coast, sunset at Ras al-Shabaan",
          "Day 2: a day on the boat to Jabal Hassan, then on towards AlUla or a night in Al-Wajh"
        ]
      }
    ],
    zone: [
      {
        "nome": "Umluj",
        "perChi": "those who want a simple base",
        "testo": "Cheap, simple places to stay in town, close to the harbour where the boats leave. No real tourist facilities."
      },
      {
        "nome": "Yanbu",
        "perChi": "those who want more services",
        "testo": "The port city about 150 km south, bigger and better equipped, with chain hotels. You drive back and forth in a day."
      },
      {
        "nome": "The Red Sea resorts",
        "perChi": "those who want luxury on the islands",
        "testo": "A few top-end resorts between Umluj and Al-Wajh, very expensive and booked with transfer included."
      }
    ],
    sapori: [
      {
        "nome": "Fish",
        "testo": "In restaurants of ports and villages, at low prices."
      },
      {
        "nome": "Rice and meat",
        "testo": "Simple dishes in coastal places."
      },
      {
        "nome": "Arabic coffee",
        "testo": "With cardamom."
      },
      {
        "nome": "Dates",
        "testo": "From inland oases."
      }
    ],
    attenzioni: [
      "Safety: as of November 2026 the UK government advises against all but essential travel to the whole of Saudi Arabia and against all travel within 10 km of the Yemen border, because of missile and drone attacks (including on Riyadh airport). Check your government's travel advice and your insurance before leaving.",
      "There are no tourist facilities here yet: it is the strength and the limit of the area.",
      "International-level diving operators: the scene is just starting, to be judged case by case.",
      "Outside the resorts the country's rules apply on the beach too: modest clothing, ask locally."
    ],
    gite: [
      {
        "nome": "Harrat Lunayyir",
        "distanza": "in the Umluj hinterland",
        "come": "By 4x4 with a local guide: there are no facilities or signs.",
        "testo": "A lava field with volcanic craters and cones. In 2009 a swarm of earthquakes opened fissures in the ground and led to the evacuation of more than two thousand people: it is considered still active."
      },
      {
        "nome": "Yanbu",
        "distanza": "147 km, about 1 hour 45 by car",
        "come": "By car south along the coast.",
        "testo": "The big Red Sea port between Jeddah and Umluj, the best-equipped base in the area. Useful for breaking the drive from Jeddah or for finding hotels and services."
      }
    ],
    faq: [
      {
        "domanda": "Is Umluj really «the Saudi Maldives»?",
        "risposta": "It is an exaggeration: the islands and reefs are beautiful, but there are no resorts on the islands and no tourist services. It is a coast that is opening up right now."
      },
      {
        "domanda": "How do you get to Umluj?",
        "risposta": "By car from Jeddah, about 5-6 hours along the coast, or with a domestic flight to Yanbu or Al-Wajh and then by car. Without your own car you cannot get around."
      },
      {
        "domanda": "Can you swim in a swimsuit?",
        "risposta": "Only inside closed resorts. On public beaches the country's rules apply, and people swim clothed."
      },
      {
        "domanda": "When should you go to Umluj?",
        "risposta": "From October to April. In summer the heat and humidity make a day on a boat tiring, even though the sea stays excellent."
      },
      {
        "domanda": "Are there reliable dive centres?",
        "risposta": "Few, and the scene is just starting: pick operators with recent reviews and check equipment and safety before setting off."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'The low white houses of Umluj seen from above, with the blue Red Sea on the horizon',
  },
]
