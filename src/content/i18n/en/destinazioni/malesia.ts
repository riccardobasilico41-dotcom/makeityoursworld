import type { Destinazione } from '@/lib/types'

export const destinazioniMalesia: Destinazione[] = [
  {
    slug: 'kuala-lumpur',
    paeseSlug: 'malesia',
    ordine: 1,
    nome: 'Kuala Lumpur',
    tipologia: ['città', 'gastronomia', 'architettura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "A capital that grew from a tin prospectors' camp into a city of skyscrapers, where a mosque, a Hindu temple and a Chinese temple can stand on the same block and where the civic institution is street food.",
    percheAndarci:
      "It's the quickest way to understand how Malaysia works: three communities live in the same city with separate languages, religions and cuisines, and they meet at the food courts. And it's an excellent air hub, from which the whole rest of the trip departs.",
    cosaVedere: [
      'The Petronas Twin Towers, with the skybridge and the observation deck',
      'The Batu Caves, with the nearly 43-meter golden statue of Murugan and the long colorful staircase',
      'The Masjid Jamek mosque, at the confluence of the two rivers the city takes its name from',
      'The Chinatown district around Petaling Street and the Sri Mahamariamman temple',
      'The Islamic Arts Museum, rich and usually quiet',
      'The Jalan Alor night market, where you dine outdoors among stalls of different cuisines',
    ],
    cosaFare: [
      "Climb the Batu Caves early in the morning, before the heat and the groups (there's a dedicated experience page)",
      'Dinner at Jalan Alor, the right way to spend the first evening',
      'Tour the neighborhoods on foot: Chinatown, Little India in Brickfields, Kampung Baru',
      'Walk the canopy walkway of Bukit Nanas forest park, a patch of rainforest in the middle of the city',
    ],
    doveDormire:
      "Bukit Bintang for convenience and evening life, Chinatown for low prices and character, KLCC for proximity to the towers and malls. The city is big and chaotic: it's best to stay near a monorail or metro station.",
    doveMangiare:
      "Kuala Lumpur is a city where you eat very well, and there's only one way to do it: food courts and street stalls, leaving the restaurants alone. Try nasi lemak (coconut rice with sambal, dried anchovies, peanuts and egg: it's considered the national dish and eaten at breakfast), char kway teow, Indian roti canai in the morning with dhal, laksa and charcoal-grilled satay. Jalan Alor in the evening is the most scenic version; the food courts of the malls, with air conditioning, are good and cheap.",
    comeArrivare: "From KLIA (terminals 1 and 2) the KLIA Ekspres train reaches KL Sentral in about 30 minutes, every 15-20 minutes from 5am until just after midnight: 55 ringgit, about €11 (65 from 1 January 2027), with 10% off on the app or paying by contactless card at the gate. The bus to KL Sentral costs about 15 ringgit and takes an hour or more; a Grab about 70-100 ringgit, up to an hour in traffic. Taxis only with the prepaid coupon from the counter. From KL Sentral, continue by metro, monorail or Grab. Immigration may ask for the MDAC filled in online.",
    comeSpostarsi:
      "Metro, monorail and LRT cover the center well, with Touch 'n Go or a single ticket. Grab is cheap and solves everything else. Walking is possible but tiring: patchy sidewalks, heat and humidity.",
    periodoMigliore:
      'all year, with afternoon downpours in any season.',
    costi: "Batu Caves, mosques, temples and parks free; Islamic Arts Museum 20 ringgit (about €4), KL Forest Eco Park 40 ringgit for foreigners (about €8), Petronas skybridge about 80 ringgit (about €16). Metro and monorail cost a few ringgit a ride. Daily budget: about €30-40 with a hostel and food courts, €70-110 with a mid-range hotel in Bukit Bintang, over €200 in a luxury hotel at KLCC.",
    erroriDaEvitare: [
      'Climbing the Batu Caves in the middle of the day: a long staircase under the equatorial sun, with monkeys that steal everything you hold in your hands',
      "Dressing too revealingly to visit temples and mosques: at the Batu Caves and at Masjid Negara shoulders and knees need to be covered, and the sarongs lent at the entrance only partly solve it",
      "Judging the city by the malls of Bukit Bintang: what's worth it is in the neighborhoods, on foot",
      'Counting on cards at street stalls: there you need cash',
    ],
    miaEsperienza:
      "Almost everyone uses Kuala Lumpur as a stopover, and yet it holds up for two full days, as long as you explore it by neighborhoods more than by monuments. The Petronas are best looked at from below at blue hour and that's fine: the climb to the skybridge costs money and gives back less than it promises. The Batu Caves should be done at seven in the morning, when the colorful steps are still in shade and the faithful climb to pray: two hours later it's a scorching staircase with hundreds of people and monkeys tearing bottles out of your hands. The memory that stays, though, is simpler: the evening at Jalan Alor, sitting on plastic stools in the middle of the street, with a Chinese kitchen on the right, a Malay one on the left and an Indian stall opposite. That's where you understand what country you're talking about.",
    luoghi: [
      {
        nome: "Petronas Twin Towers",
        testo: "The twin towers, 452 metres high and the tallest buildings in the world from 1998 to 2004, are the symbol of the city. You visit the skybridge on the 41st floor, linking the two towers, and the observation deck on the 86th floor; at the foot there is KLCC park with its fountain.",
        come: "LRT to KLCC, with a direct exit into the shopping centre. Tickets for the climb are timed and booked online on the official site.",
        quando: "Tuesday to Sunday, 9:00-21:00; closed on Mondays except public holidays (2025). Sunset is the most requested time and slots sell out. From below the towers look best at blue hour.",
        tempo: "1 hour for the climb; KLCC park takes half an hour",
        costo: "about 80 ringgit for foreigners, about €16 (2026); timed tickets on the official website (unofficial resellers don't refund)",
        consiglio: "Anyone who does not want to spend can look at them from below and take the view from another tower, the KL Tower.",
        orari: "Tuesday-Sunday 9am-9pm, closed Monday except public holidays",
        url: "https://www.petronastwintowers.com.my/",
        lat: 3.15785,
        lng: 101.71165
      },
      {
        nome: "Batu Caves",
        testo: "A Hindu shrine in a limestone cave, preceded by the golden statue of Murugan, almost 43 meters tall, and 272 colorful steps. Inside there is a large hall with small temples, light falling through an opening in the roof and monkeys on the steps.",
        come: "Komuter train from KL Sentral to the Batu Caves terminus. Entry to the main cave is free. The Dark Cave, the protected inner cave, can only be visited on the Malaysian Nature Society's educational trips, when they run. Shoulders and knees covered.",
        quando: "Early in the morning, with worshippers climbing and the steps in shade. During the Thaipusam festival the crowds are huge.",
        tempo: "2 hours",
        costo: "free entry",
        consiglio: "Do not hold bottles, glasses or food in your hands: the monkeys snatch them.",
        orari: "daily, from early morning to evening",
        lat: 3.2379,
        lng: 101.684
      },
      {
        nome: "Masjid Jamek",
        testo: "The mosque, from 1909, stands at the confluence of the Klang and Gombak rivers, where the city began. A little further on is Merdeka Square, where on 31 August 1957 the British flag was lowered and the Malayan flag raised for the first time, with the Sultan Abdul Samad Building beside it.",
        come: "LRT to Masjid Jamek. The mosque is visited outside prayer times, with a robe lent at the entrance.",
        quando: "In the morning.",
        tempo: "1 hour",
        consiglio: "Walk on to Chinatown, in the same afternoon.",
        costo: "free entry",
        orari: "visits outside prayer times",
        lat: 3.14905,
        lng: 101.69575
      },
      {
        nome: "Chinatown, Petaling Street and Sri Mahamariamman",
        testo: "The Chinese district with its street market and a historic Hindu temple, a few steps from each other.",
        come: "LRT to Pasar Seni. The market is open-air, the temple is visited barefoot.",
        quando: "In the morning for the temple; in the evening for the street, when the market is liveliest.",
        tempo: "1.5 hours",
        consiglio: "Do not buy the fakes: opening prices are very high.",
        costo: "free entry to the temple",
        lat: 3.1445,
        lng: 101.6978
      },
      {
        nome: "Islamic Arts Museum",
        testo: "A rich museum on the subject: textiles, ceramics, manuscripts and models of mosques. Usually quiet.",
        come: "In the Lake Gardens park, near the National Mosque. By taxi or Grab, or on foot from KL Sentral with a long walk.",
        quando: "Open daily, 9:30-18:00 (last entry 17:30). Ideal in the early afternoon, in the hottest hours.",
        tempo: "2 hours",
        url: "https://www.iamm.org.my/",
        consiglio: "The museum café, air-conditioned and quiet, is an excellent break.",
        costo: "20 ringgit, about €4 (official website, 2026)",
        orari: "daily 9:30am-6pm, last entry 5:30pm",
        lat: 3.1418,
        lng: 101.6899
      },
      {
        nome: "Jalan Alor",
        testo: "A street closed to traffic in the evening, with open-air tables and Chinese, Malay and Indian kitchens side by side. The place to eat on the first night.",
        come: "On foot from Bukit Bintang or by monorail to Bukit Bintang.",
        quando: "In the evening.",
        tempo: "1-2 hours",
        consiglio: "Ask the price before ordering fish, which is paid by weight.",
        costo: "dishes from a few ringgit up to about ten, about €1-3",
        orari: "from late afternoon until late at night; cash at the stalls",
        lat: 3.1455,
        lng: 101.7087
      },
      {
        nome: "Merdeka Square and the Sultan Abdul Samad Building",
        testo: "The large lawn where, at midnight on 31 August 1957, the British flag was lowered and the Malayan flag raised, on a 95-metre flagpole. Opposite stands the Sultan Abdul Samad Building of 1897, Moorish in style with copper domes and a clock tower; on the other side, the old Royal Selangor Club in Tudor style.",
        come: "LRT to Masjid Jamek, then five minutes on foot. Seen from outside, together with the mosque.",
        quando: "Early morning, or in the evening when the buildings are lit.",
        tempo: "45 minutes",
        costo: "free",
        orari: "always open",
        consiglio: "Just to the south is the Kuala Lumpur City Gallery, with a scale model of the city: useful for getting your bearings on the first day.",
        lat: 3.1478,
        lng: 101.6934
      },
      {
        nome: "Masjid Negara",
        testo: "The National Mosque, opened in 1965 a few years after independence: an umbrella roof with eighteen points, for the thirteen states of the federation and the five pillars of Islam, and a 73-metre minaret. It's modern architecture, with pools and gardens, very different from the colonial mosques.",
        come: "On foot from the Islamic Arts Museum, five minutes, or by Grab. Non-Muslims use a separate entrance; a long robe is lent free at the door, and shoes come off.",
        quando: "In the morning, outside prayer times.",
        tempo: "45 minutes",
        costo: "free entry",
        orari: "visits for non-Muslims outside prayer times, with shorter slots on Friday",
        consiglio: "Pair it with the Islamic Arts Museum: the mosque first, then the museum in the hot hours.",
        lat: 3.142,
        lng: 101.6917
      },
      {
        nome: "Perdana Botanical Garden (Lake Gardens)",
        testo: "The large colonial park from the 1880s, around a lake on the hill behind the National Mosque. Inside are the orchid garden and the hibiscus garden, Malaysia's national flower, and it's where the city goes jogging in the morning.",
        come: "By Grab, or on foot from Masjid Negara up through the park.",
        quando: "At dawn or late afternoon; at midday there's little shade.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "If you don't want to walk much, stick to the orchid garden, the best kept.",
        lat: 3.1429,
        lng: 101.6848
      },
      {
        nome: "KL Forest Eco Park (Bukit Nanas)",
        testo: "One of the oldest forest reserves in the country, protected since 1906: real rainforest right in the centre, at the foot of KL Tower. A canopy walkway takes you through the treetops, with skyscrapers poking out between the leaves.",
        come: "Monorail to Bukit Nanas, then a ten-minute walk uphill; you can also enter from the KL Tower side. Pay at the entrance, preferably in cash.",
        quando: "Early morning, before the heat. The walkway closes in bad weather.",
        tempo: "1-1.5 hours",
        costo: "40 ringgit for foreigners, about €8 (2026)",
        consiglio: "Bring repellent and water: it's real forest, with mosquitoes and humidity.",
        lat: 3.1516,
        lng: 101.7015
      },
      {
        nome: "KL Tower (Menara Kuala Lumpur)",
        testo: "The 421-metre telecommunications tower, completed in 1995. It stands on Bukit Nanas hill, so its observation deck at 276 metres is higher than the Petronas skybridge, and on the open-air Sky Deck you're outside, in the wind.",
        come: "Free shuttle from the entrance on Jalan Puncak, or on foot through KL Forest Eco Park.",
        quando: "At sunset, with the Petronas lighting up opposite.",
        tempo: "1 hour",
        orari: "daily 9am-10pm; the open-air Sky Deck closes in bad weather",
        url: "https://kltower.com.my/",
        consiglio: "This is the tower you see the Petronas from: if you only go up one, make it this one.",
        lat: 3.1528,
        lng: 101.7038
      },
      {
        nome: "Thean Hou Temple",
        testo: "A six-tiered Chinese temple finished in the late 1980s and dedicated to Mazu, the sea goddess dear to sailors. Red and gold roofs, hundreds of lanterns and a terrace looking over the city.",
        come: "By Grab, about 15 minutes from the centre: there's no convenient station nearby.",
        quando: "Late afternoon, with warm light on the roofs; at Chinese New Year the lanterns number in the thousands and it's crowded.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "It pairs well with Brickfields, a few minutes away by Grab.",
        lat: 3.1218,
        lng: 101.6873
      },
      {
        nome: "Kampung Baru",
        testo: "A Malay village from 1900 that survives among the skyscrapers, with wooden houses on stilts, vegetable plots and nasi lemak stalls. The contrast with the Petronas, a kilometre away, is the reason to come.",
        come: "LRT to Kampung Baru. From the KLCC side you can walk over the Saloma Link footbridge across the Klang River.",
        quando: "At sunset, then dinner at the stalls and the lit-up bridge.",
        tempo: "1-2 hours",
        costo: "free",
        consiglio: "The houses are lived in: stay on the streets and don't walk into the yards.",
        lat: 3.1631,
        lng: 101.703
      },
      {
        nome: "Central Market (Pasar Seni) and Kwai Chai Hong",
        testo: "The covered market of 1888, with its sky-blue Art Deco façade from 1937, now full of crafts: batik, carved wood, pewter. A few steps away, Kwai Chai Hong is a restored Chinatown lane with murals of neighbourhood life in the 1960s.",
        come: "LRT to Pasar Seni. The market is air-conditioned.",
        quando: "The market in the hot hours; Kwai Chai Hong in the evening, with the lights.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "Upstairs in the market there's a cheap food court.",
        lat: 3.1456,
        lng: 101.6956
      },
      {
        nome: "Brickfields (Little India)",
        testo: "The Indian quarter next to KL Sentral: colourful arches on Jalan Tun Sambanthan, flower-garland stalls, sari shops and Tamil music from the loudspeakers. It's the place for rice served on a banana leaf.",
        come: "On foot from KL Sentral or the KL Sentral monorail stop, five minutes.",
        quando: "At lunchtime, for banana leaf rice.",
        tempo: "1-1.5 hours",
        costo: "free",
        consiglio: "Banana leaf is eaten with the right hand; at the end, fold the leaf towards you to say you enjoyed it.",
        lat: 3.1304,
        lng: 101.6856
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Early morning: Batu Caves, climbing in the shade",
          "Back for breakfast at KL Sentral",
          "Early afternoon: Islamic Arts Museum, in the cool",
          "Late afternoon: walk to Masjid Jamek, then Chinatown",
          "Blue hour: the Petronas from below",
          "Evening: dinner at Jalan Alor"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Batu Caves at dawn, Masjid Negara and the Islamic Arts Museum in the hot hours, Petronas and KLCC Park at blue hour",
          "Day 2: Masjid Jamek and Merdeka Square in the morning, Central Market and Chinatown",
          "Lunch in Brickfields with banana leaf rice, then Thean Hou Temple",
          "Evening: dinner at Jalan Alor and Bukit Bintang"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1 and 2: as above",
          "Day 3: KL Forest Eco Park at opening time and up KL Tower",
          "Afternoon: Perdana Botanical Garden, or a free afternoon during the heat",
          "Sunset in Kampung Baru, then the Saloma Link bridge towards the lit-up Petronas",
          "Instead of a third day in the city: a day trip to Malacca or Putrajaya"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Bintang",
        perChi: "anyone who wants food, shops and nightlife",
        testo: "The shopping center, with a huge choice of lodging and restaurants. It is loud and a little touristy, but well connected.",
        fascia: "€40-110"
      },
      {
        nome: "KLCC",
        perChi: "anyone looking for views of the towers and high-end hotels",
        testo: "Quiet, clean, with quality restaurants. Less authentic life.",
        fascia: "€90-220"
      },
      {
        nome: "Chinatown and Pasar Seni",
        perChi: "anyone who wants to save money and be close to markets and the station",
        testo: "Hostels and cheap hotels, close to the airport train. Noisy in the evening.",
        fascia: "€25-70"
      },
      {
        nome: "KL Sentral and Brickfields",
        perChi: "anyone arriving or leaving by train or plane",
        testo: "Hotels around the central station, where the KLIA Ekspres arrives and the metro, monorail and Batu Caves trains stop. Convenient rather than pretty; in the evening you eat in Brickfields.",
        fascia: "€40-100"
      }
    ],
    sapori: [
      {
        nome: "Nasi lemak",
        testo: "Coconut rice with fried anchovies, egg, cucumber and sambal. The national breakfast; found everywhere, from street stalls."
      },
      {
        nome: "Char kway teow",
        testo: "Rice noodles stir-fried over fierce heat with prawns, egg and bean sprouts. A Chinese-Malay street dish, excellent at night on Jalan Alor."
      },
      {
        nome: "Bak kut teh",
        testo: "Pork ribs in a broth of spices and garlic, of Chinese origin. Eaten for breakfast or lunch in the places of Klang and Chinatown."
      },
      {
        nome: "Roti canai",
        testo: "Flat Indian bread, crisp and rich, served with lentil curry. Eaten in the mamak places that stay open all night."
      }
    ],
    attenzioni: [
      "Motorbike snatch thefts: keep your phone away from the curb and your bag on the side away from the road.",
      "At the Batu Caves, monkeys are aggressive about food and open bags. In the shrine, shoulders and knees covered.",
      "Taxis: use Grab or metered taxis. Refuse anyone who proposes a «fixed price» at the station.",
      "Heat and afternoon downpours are almost daily: outdoor visits in the morning."
    ],
    gite: [
      {
        nome: "Malacca",
        distanza: "about 2 hours by bus",
        come: "Bus from the TBS terminal to Melaka Sentral, then a few minutes by Grab to the old town.",
        testo: "The Portuguese, Dutch and British port on the strait, a UNESCO site, with Peranakan houses and the Jonker Street night market at weekends. It deserves a night; it has its own page on the site."
      },
      {
        nome: "Putrajaya",
        distanza: "about 25 km, half an hour by train",
        come: "KLIA Transit train from KL Sentral to Putrajaya station, then Grab between the monuments.",
        testo: "The administrative capital built from scratch in the 1990s around an artificial lake: the pink Putra Mosque, the steel Tuanku Mizan Mosque and the monumental bridges. Half a day is enough."
      },
      {
        nome: "Kuala Selangor fireflies",
        distanza: "about 70 km, 1.5 hours by car",
        come: "By car or on an evening tour from Kuala Lumpur; the small boats leave after sunset from Kampung Kuantan.",
        testo: "In the mangroves of the Selangor River thousands of fireflies light up in unison on the trees. You only see it on moonless, rainless nights, in a rowing boat and in silence."
      }
    ],
    faq: [
      {
        domanda: "How many days do you need in Kuala Lumpur?",
        risposta: "Two full days for the Batu Caves, the Petronas, the museums and the neighbourhoods. A third adds KL Tower and the forest park, or a day trip to Malacca or Putrajaya."
      },
      {
        domanda: "Is it worth going up the Petronas Twin Towers?",
        risposta: "The skybridge costs about 80 ringgit and sunset slots sell out early. The towers look better from below at blue hour, or from KL Tower, which is higher and faces them."
      },
      {
        domanda: "How do you get to the Batu Caves and how much does it cost?",
        risposta: "By KTM Komuter train from KL Sentral to the Batu Caves terminus, about 35-40 minutes for a few ringgit. Entry to the main cave is free; it's best to arrive at dawn."
      },
      {
        domanda: "Where to stay in Kuala Lumpur?",
        risposta: "Bukit Bintang for food and convenience, Chinatown to spend little, KLCC for views of the towers. What matters is being near a metro or monorail stop."
      },
      {
        domanda: "How do you get from the airport to central Kuala Lumpur?",
        risposta: "The KLIA Ekspres reaches KL Sentral in about 30 minutes for 55 ringgit (65 from 2027). The bus costs about 15 ringgit but takes over an hour; a Grab about 70-100 ringgit."
      },
      {
        domanda: "How should you dress for mosques and temples in Kuala Lumpur?",
        risposta: "Shoulders and knees covered, and shoes off before going in. Masjid Negara and Masjid Jamek lend a long robe at the entrance; at the Batu Caves it's best to arrive already suitably dressed."
      }
    ],
    esperienzeSlugs: ['batu-caves'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'The Kuala Lumpur skyline at dusk with the Petronas Twin Towers lit up',
    immagine: '/images/malesia/kuala-lumpur.jpg',
  },
  {
    slug: 'penang',
    paeseSlug: 'malesia',
    ordine: 2,
    nome: 'Penang and George Town',
    tipologia: ['gastronomia', 'cultura', 'città coloniali'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    introduzione:
      "An island on the Strait of Malacca with George Town at its center, a former British free port and now a UNESCO site: Chinese shophouses, mosques, temples, clan houses on the water and street food famous throughout the country.",
    percheAndarci:
      "For the food, which here is enough on its own to justify the trip, and because George Town is the city where Malaysia's cultural layers read best: different communities a few blocks apart, each with its own religious architecture, all arrived by sea.",
    cosaVedere: [
      "George Town's UNESCO historic center, with the Peranakan shophouses",
      'The Clan Jetties, the stilt villages of Chinese families, each of a different clan',
      "The Kek Lok Si temple, a large Buddhist complex on Air Itam hill",
      "Cheong Fatt Tze's Blue Mansion and the Pinang Peranakan Mansion",
      'The Street of Harmony, where a mosque, a Chinese temple, a Hindu temple and an Anglican church stand on the same street',
      "The murals of the center, which have made George Town famous well beyond its perimeter",
    ],
    cosaFare: [
      "Eat at the street stalls, the reason you come here (there's a dedicated experience page)",
      'Tour the historic center on foot following the murals and the wrought-iron installations',
      'Take the funicular up Penang Hill for the view over the island and the cool air',
      "Hike in Penang National Park to Monkey Beach",
    ],
    doveDormire:
      "Inside the UNESCO perimeter of George Town, preferably in a restored shophouse: everything is walkable and it's the only way to see the city in the evening. Batu Ferringhi is the beach and resort area, but it's on the other side of the island and cuts you off from the best part.",
    doveMangiare:
      "It's the reason for the trip. Try in order: assam laksa, the sour fish and tamarind soup that is the island's signature dish; char kway teow stir-fried in a wok over a live flame; cendol, the iced dessert with coconut milk and palm sugar; Indian-Muslim nasi kandar, with curries poured one over another on rice; and rojak, a salty fruit salad with fermented shrimp sauce. You eat at coffee shops and food courts more than in restaurants, and the best stalls keep their own hours: some open only in the morning, others only after sunset.",
    comeArrivare: "Penang International Airport (PEN) is in the south of the island, about 30-45 minutes by Grab or taxi from George Town; there is also the slower Rapid Penang bus. From Kuala Lumpur you fly in under an hour, or take the ETS train from KL Sentral to Butterworth, on the mainland, in about 4 hours, and from there the ferry across the strait to the George Town terminal in a few minutes: the nicest way to arrive. Buses from Kuala Lumpur and the Cameron Highlands (about 4-5 hours) reach the island over the bridge.",
    comeSpostarsi: 'George Town is explored on foot; for the rest of the island cheap public buses and Grab.',
    periodoMigliore:
      'the driest season, early in the year. During the city festivals, such as the George Town Festival, the city fills up.',
    costi: "Blue Mansion RM25 with the guided tour, Penang Hill funicular RM40 return for foreigners (official prices 2026); the old town and the murals are free, and dishes at the stalls cost from a few ringgit to about ten. Budget: about €30-40 a day with a guesthouse, street stalls and buses. Mid-range: €70-100 with a hotel in a restored shophouse, Grab and some entry fees. High: over €150 with historic hotels such as the Eastern & Oriental and restaurant dinners.",
    erroriDaEvitare: [
      "Going to Penang for the beaches: Batu Ferringhi is mediocre and keeps you away from the part that matters",
      "Eating at restaurants with illustrated menus: the best stalls have no English signs and close when they run out of ingredients",
      "Touring the historic center at noon: between eleven and three the heat is serious and the shade scarce",
      "Staying just one night: George Town needs at least two evenings, because half the stalls only work after sunset",
    ],
    confronti: [
      {
        titolo: 'Penang or Malacca?',
        introduzione:
          "They are the two Strait cities inscribed together on the UNESCO list, they have the same history (colonial ports with Chinese, Indian and Malay communities) and are often set against each other when time is short. They are less alike than they seem.",
        opzioni: [
          {
            nome: 'George Town (Penang)',
            sintesi: "Bigger and livelier, considered the food capital of the country, on an island that also has mountains, a national park and beaches.",
            costo: 'the city is almost entirely free; flight or bus from KL',
            durata: '2-3 days',
            pro: [
              "The street food is on another level, and it's the main reason to come to Malaysia",
              'Bigger historic center, still inhabited as well as restored for visitors',
              "There's more beyond the city: Penang Hill, the national park, the Clan Jetties",
            ],
            contro: ['Farther from Kuala Lumpur', 'More chaotic and less photogenic overall', 'The beaches are disappointing'],
            perChi: 'Anyone with at least two days who also comes to eat. If you pick just one, this is it.',
          },
          {
            nome: 'Malacca',
            sintesi: 'Smaller and older, with the Portuguese, Dutch and British layering visible in just a few blocks, not far from Kuala Lumpur.',
            costo: 'bus from KL, inexpensive',
            durata: '1-2 days',
            pro: [
              'Convenient: it fits between Kuala Lumpur and Singapore with no detours',
              'Older and more readable colonial history, with three overlapping European dominations',
              'Jonker Street on weekends and the Peranakan quarter are very beautiful',
            ],
            contro: [
              'Much more touristy in proportion, and on weekends swamped by day visitors',
              'The center is exhausted in half a day',
              "The food is good but doesn't hold up against Penang",
            ],
            perChi: 'Anyone with just one day or traveling overland to Singapore.',
          },
        ],
        raccomandazione:
          "With a week available you do both: Malacca is a one-day stop on the way to Singapore, Penang a stop of its own of two or three. If you have to pick one, Penang, unless the trip ends in Singapore overland: in that case Malacca costs almost no time.",
      },
    ],
    miaEsperienza:
      "You go to Penang to eat, and anyone who says otherwise hasn't been. George Town's historic center is beautiful (peeling shophouses, Chinese signs, the Clan Jetties on stilts where people still live), but what makes it different from any other Malaysian city is that each community brought its own cuisine here and none watered it down. Assam laksa, with that sour fish and tamarind broth that throws you off at the first spoonful, is the dish worth the detour. You need to know how it works: the best stalls have no English signs, open at their own hours and close when they run out, and it happens that you show up and find the shutter down at two in the afternoon. As for the art side, the murals are fun and by now there are lines to take pictures in front of the most famous ones, but the city is a UNESCO site for something else.",
    luoghi: [
      {
        nome: "Historic centre of George Town",
        testo: "A UNESCO site for its mosaic of cultures: Peranakan shophouses, Chinese temples, mosques, churches and old British houses. You walk it through the narrow streets with the street murals.",
        come: "From the ferry terminal or hotels, on foot. Many walking routes.",
        quando: "Early morning and after four in the afternoon. Between eleven and three the heat is serious.",
        tempo: "half a day",
        consiglio: "Look for the murals but also for the craftsmen's workshops, and stop for a white coffee in an old coffee shop.",
        costo: "Free: you walk, and the murals cost nothing.",
        lat: 5.41444,
        lng: 100.32917,
      },
      {
        nome: "Clan Jetties",
        testo: "Stilt villages where Chinese families, grouped by clan, have lived for generations. The best known is Chew Jetty, with wooden houses, small altars and shops.",
        come: "On foot from the George Town waterfront. It is a place where people live: walk quietly, ask before photographing.",
        quando: "In the morning or late afternoon.",
        tempo: "1 hour",
        consiglio: "Buy something from one of the shops along the pier: it is the only proper way to support those who live there.",
        lat: 5.41314,
        lng: 100.34128,
      },
      {
        nome: "Kek Lok Si",
        testo: "The largest Buddhist temple in Malaysia, at the foot of Air Itam hill. The seven-storey Ten Thousand Buddhas Pagoda has a Chinese base, a Thai middle section and a Burmese dome; higher up is a large bronze statue of Guanyin.",
        come: "Rapid Penang bus from George Town or taxi. Inclined lifts take you up to the statue.",
        quando: "In the morning; during Chinese New Year it is crowded with lanterns and worshippers.",
        tempo: "1.5 hours",
        costo: "entry to the complex free; the inclined lifts are paid separately",
        consiglio: "Go up to the Guanyin statue: the view over Penang is worth the steps.",
        lat: 5.39952,
        lng: 100.27373,
      },
      {
        nome: "Cheong Fatt Tze Mansion (Blue Mansion)",
        testo: "The mansion of the merchant Cheong Fatt Tze, built between 1897 and 1904, with indigo walls made from lime and natural dye, inner courtyards and original furnishings. Its restoration received a UNESCO heritage conservation award.",
        come: "On foot from central George Town. Visits are by guided tour in English, at set times; the house is also a hotel.",
        quando: "In the morning, with the English-language tour.",
        tempo: "1 hour",
        url: "https://www.cheongfatttzemansion.com/",
        consiglio: "Arrive in time for the first tour: groups are small and the story is worth more than the rooms.",
        costo: "Guided tour RM25 for adults, about €5; RM12.50 under 12 (official site, 2026).",
        orari: "Guided tours every day at 11:00 and 15:30, 45 minutes; booking online is advisable.",
        lat: 5.42141,
        lng: 100.33495,
      },
      {
        nome: "Street of Harmony",
        testo: "A stretch of Jalan Masjid Kapitan Keling and around, where a mosque, a Chinese temple, a Hindu temple and an Anglican church stand close together. A real example of coexistence.",
        come: "On foot in the old town.",
        quando: "In the morning. Mosques are closed to non-Muslims during prayer.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Visit the Kapitan Keling Mosque outside prayer times, in covered clothing.",
        lat: 5.41667,
        lng: 100.33739,
      },
      {
        nome: "Penang Hill",
        testo: "A hill rising to 833 metres above the city, reached by a funicular that gets to the top in 5-10 minutes, with cooler air, a botanic garden and views over George Town and the mainland.",
        come: "By bus from Komtar or by taxi to the funicular station, then up by funicular.",
        quando: "Open daily from 6:15am to 9:45pm. In the morning there's less mist and shorter queues.",
        tempo: "3 hours",
        url: "https://www.penanghill.gov.my/",
        consiglio: "Go up early: in the afternoon the funicular queues are long.",
        costo: "Funicular return, normal lane: RM40 for foreign adults, about €8; RM20 for children aged 4-12 (official site, 2026).",
        orari: "Daily 6:15am-9:45pm.",
        lat: 5.42444,
        lng: 100.26892,
      },
      {
        nome: "Khoo Kongsi",
        testo: "The clan house of the Khoo family, the most lavish in George Town: a granite courtyard enclosed by the members' row houses and, at the end, the Leong San Tong temple, rebuilt in the early twentieth century after a fire. Roofs crowded with ceramic figures, carved columns and gilded beams. It shows well how the Hokkien clans ran community life.",
        come: "On foot from the old town, through the lane from Cannon Square. Self-guided, with panels and a small museum on the ground floor.",
        quando: "In the morning, when the light reaches the courtyard.",
        tempo: "1 hour",
        lat: 5.41503,
        lng: 100.33712,
        url: "https://www.khookongsi.com.my/",
      },
      {
        nome: "Pinang Peranakan Mansion",
        testo: "The green mansion built in the late nineteenth century by Chung Keng Quee, leader of the Chinese community and tin magnate, now a museum of Peranakan culture. It holds more than a thousand period pieces: Nyonya porcelain, jewellery, inlaid furniture, wedding clothes. The interiors, with the central courtyard and the gilded screens, are worth the visit on their own.",
        come: "On foot from the old town, on Church Street. Self-guided or with the museum guides.",
        quando: "Mid-morning or early afternoon, to be indoors in the hottest hours.",
        tempo: "1-1.5 hours",
        lat: 5.418,
        lng: 100.34119,
        url: "https://www.pinangperanakanmansion.com.my/",
        consiglio: "Pair it with the Blue Mansion: one tells the story of the Chinese merchants, the other of the Peranakan families.",
      },
      {
        nome: "St. George's Church",
        testo: "Built in 1818 by the East India Company, it is the oldest Anglican church in Southeast Asia: white Doric columns, a lawn and a small pavilion in memory of Francis Light, the founder of the colony. It is a few steps from the Kapitan Keling Mosque and the temple of the goddess of mercy.",
        come: "On foot on Farquhar Street, in the old town.",
        quando: "In the morning, together with the Street of Harmony.",
        tempo: "20 minutes",
        lat: 5.41972,
        lng: 100.33911,
      },
      {
        nome: "Fort Cornwallis",
        testo: "The star fort built by the British where Francis Light landed in 1786, first in timber and then in brick in the early nineteenth century. What remains are the low walls, the cannons facing the sea and a small chapel. It is more interesting for its history than for what you see.",
        come: "On foot on the seafront, near the Queen Victoria clock tower and the Esplanade.",
        quando: "Late afternoon, then a walk on the Esplanade at sunset.",
        tempo: "45 minutes",
        lat: 5.4205,
        lng: 100.3439,
      },
      {
        nome: "Armenian Street and the murals",
        testo: "The street where in 2012 the Lithuanian artist Ernest Zacharevic painted the children on a bicycle, the mural that made George Town's street art famous. Around it are other paintings and the wrought-iron caricatures that tell the history of the streets. Today it is full of shops and cafés, and there is a queue for photos at the best-known murals.",
        come: "On foot; the murals are spread between Armenian Street, Lebuh Ah Quee and Cannon Street. The tourist office has a map.",
        quando: "Before nine, when the murals are free and it is still cool.",
        tempo: "1-2 hours",
        costo: "Free.",
        lat: 5.41474,
        lng: 100.33811,
      },
      {
        nome: "Little India and Sri Mahamariamman",
        testo: "The Indian quarter between Queen Street and Market Street, with sari shops, flower garlands, Tamil music and sweet stalls. At its heart is Sri Mahamariamman, from 1833, the oldest Hindu temple on the island, with its entrance tower covered in colourful deities.",
        come: "On foot, next to the Street of Harmony. Enter the temple barefoot and covered.",
        quando: "At sunset, when the lights come on; during Deepavali it is decorated for the festival.",
        tempo: "1 hour",
        lat: 5.41774,
        lng: 100.33856,
        consiglio: "Stop for a teh tarik and roti canai at one of the places with tables on the pavement.",
      },
      {
        nome: "Wat Chayamangkalaram and Dhammikarama",
        testo: "Two Buddhist temples facing each other on Burma Lane, in Pulau Tikus. The Thai Wat Chayamangkalaram houses a large reclining Buddha more than 30 metres long; the Burmese Dhammikarama, founded in 1803, has stone elephants at the entrance and gilded pagodas. Two different styles a few metres apart.",
        come: "About 3 km northwest of the centre: Grab in 10-15 minutes or a Rapid Penang bus. Enter barefoot, with shoulders and knees covered.",
        quando: "In the morning, when worshippers are there and it is less hot.",
        tempo: "1 hour",
        lat: 5.4318,
        lng: 100.31341,
      },
      {
        nome: "Gurney Drive",
        testo: "The seafront north of the centre, with the island's most famous open-air food court: dozens of stalls of char kway teow, satay, oyster omelette, rojak and laksa under the evening lights. More touristy than the George Town stalls, but handy for tasting many dishes in one dinner.",
        come: "Grab from the old town in about 10-15 minutes.",
        quando: "In the evening, after sunset, when all the stalls are open.",
        tempo: "1-2 hours",
        lat: 5.43656,
        lng: 100.31256,
        consiglio: "Walk the whole row before ordering: the same dish varies a lot from stall to stall.",
      },
      {
        nome: "Penang Botanic Gardens",
        testo: "The botanic garden founded by the British in the late nineteenth century in a valley near a waterfall, also called the Waterfall Gardens. Lawns, old tropical trees, ferns and macaques used to people. A steep trail also starts here and climbs on foot to Penang Hill.",
        come: "Grab or Rapid Penang bus from the centre, about 20 minutes.",
        quando: "Early morning, when residents run and walk and it is cool.",
        tempo: "1-2 hours",
        lat: 5.43996,
        lng: 100.28833,
        consiglio: "Keep food out of sight: the monkeys snatch it from your hands.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Armenian Street murals before nine",
          "Khoo Kongsi and the Street of Harmony with the Kapitan Keling Mosque",
          "Lunch in a coffee shop in the centre",
          "Blue Mansion on the 3:30pm tour",
          "Clan Jetties at sunset",
          "Dinner at the George Town street stalls or at Gurney Drive",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above",
          "Day 2: Kek Lok Si in the morning, then assam laksa in Air Itam",
          "Penang Hill by funicular in the afternoon",
          "Little India and nasi kandar for dinner",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2: as above",
          "Day 3: Botanic Gardens early, then Wat Chayamangkalaram and Dhammikarama",
          "Pinang Peranakan Mansion in the hot hours",
          "Fort Cornwallis and the Esplanade at sunset",
          "Alternatively, a day in Penang National Park",
        ],
      },
    ],
    zone: [
      {
        nome: "George Town old town",
        perChi: "those who want to do everything on foot",
        testo: "Restored shophouses turned into guesthouses and small hotels. Very convenient, a bit noisy at night.",
        fascia: "€40-100",
      },
      {
        nome: "Batu Ferringhi",
        perChi: "those looking for the sea and resorts",
        testo: "A strip of beach with big hotels. The sea is mediocre, but it's the easiest area for families.",
        fascia: "€70-200",
      },
      {
        nome: "Komtar and Jalan Burma",
        perChi: "those on a budget",
        testo: "Mid-range hotels, outside the tourist core but a few minutes away by bus or taxi.",
        fascia: "€30-70",
      },
      {
        nome: "Gurney Drive",
        perChi: "those who want modern hotels and malls",
        testo: "Large hotels and apartments on the seafront, with the food court on the doorstep. The old town is a Grab ride away.",
        fascia: "€50-130",
      },
    ],
    sapori: [
      {
        nome: "Assam laksa",
        testo: "Noodles in a sour fish and tamarind broth with mint and pineapple. The dish worth the detour; eaten in Air Itam."
      },
      {
        nome: "Char kway teow",
        testo: "Noodles stir-fried over high flame with prawns, cockles and egg. In Penang the version is smoky from the charcoal fire."
      },
      {
        nome: "Nasi kandar",
        testo: "Rice with various curries ladled over, of Indian Muslim origin. You order at the counter and point to what goes on the plate."
      },
      {
        nome: "Cendol",
        testo: "Shaved ice, coconut milk, palm syrup and green jellies. Penang's dessert."
      }
    ],
    attenzioni: [
      "The best stalls have no English signs, open at their own hours and close when they run out: arrive early or do not count on a seat.",
      "Avoid the centre between eleven and three: the heat is strong and shade is scarce.",
      "In temples and mosques, shoulders and knees covered, shoes off.",
      "At the tourist stalls around the murals food and souvenirs cost more than in the side streets."
    ],
    gite: [
      {
        nome: "Penang National Park and Monkey Beach",
        distanza: "about 1 hour by bus",
        come: "Bus 101 from George Town to Teluk Bahang; you register at the park entrance, then take the forest trail or a paid boat, price agreed beforehand.",
        testo: "Malaysia's smallest national park, created in 2003, with forest, beaches and a meromictic lake. Monkey Beach is about an hour and a half on the trail; Pantai Kerachut is a turtle nesting site.",
      },
      {
        nome: "Batu Ferringhi",
        distanza: "about 15 km, 30-45 minutes",
        come: "Bus 101 from George Town or Grab.",
        testo: "The resort beach on the north coast. The sea is not Malaysia's best, but in the evening there is a market along the main road and seafood on the sand.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Penang?",
        risposta: "Two or three: one for George Town's old town, one for Kek Lok Si and Penang Hill, the third to eat slowly or for the national park. With a single night you miss half the stalls, which only open in the evening.",
      },
      {
        domanda: "Penang or Malacca?",
        risposta: "Penang if you also come for the food and have at least two days; Malacca if time is short or you travel overland to Singapore. With a week you can do both.",
      },
      {
        domanda: "Where to stay in George Town?",
        risposta: "Inside the UNESCO area, in a restored shophouse: you walk everywhere and see the city at night. Batu Ferringhi only makes sense if you want a beach resort.",
      },
      {
        domanda: "How much is the Penang Hill funicular?",
        risposta: "RM40 return for foreign adults in the normal lane and RM20 for children aged 4-12 (official site, 2026). It runs daily from 6:15am to 9:45pm.",
      },
      {
        domanda: "Do you need to book the Blue Mansion?",
        risposta: "It's a good idea: entry is only with the 11am or 3:30pm guided tour, which lasts 45 minutes and costs RM25, and places often sell out.",
      },
      {
        domanda: "Is Penang a beach destination?",
        risposta: "Not really. Batu Ferringhi is mediocre and far from the centre; for the sea in Malaysia, Langkawi or the Perhentians are better.",
      },
    ],
    esperienzeSlugs: ['street-food-penang'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'The roofs of George Town, Weld Quay and the Clan Jetties seen from above, with the strait and Butterworth in the background',
    immagine: '/images/malesia/penang.jpg',
  },
  {
    slug: 'malacca',
    paeseSlug: 'malesia',
    ordine: 3,
    nome: 'Malacca',
    tipologia: ['storia', 'città coloniali', 'gastronomia'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The port that for centuries controlled the most strategic strait in Asia, conquered by the Portuguese, then by the Dutch and finally by the British: three European dominations overlapping in a few blocks, plus the Peranakan culture born of marriages between Chinese merchants and Malay women.",
    percheAndarci:
      "Here the colonial history of Southeast Asia is read by walking (the ruined Portuguese church, the red Dutch square, the fort), and the city lies halfway between Kuala Lumpur and Singapore.",
    cosaVedere: [
      'Dutch Square with Christ Church and the Stadthuys, the old Dutch town hall',
      "The ruins of St. Paul's Church at the top of the hill, with the view over the strait",
      'The Porta de Santiago, what remains of the Portuguese fortress A Famosa',
      "Jonker Street, Chinatown's main street, with the weekend night market",
      'The Baba & Nyonya Heritage Museum, a Peranakan house preserved with its original furnishings',
      "Cheng Hoon Teng, a historic Chinese temple",
    ],
    cosaFare: [
      'Walk the UNESCO historic center, which can be done entirely on foot in half a day',
      'Dine Peranakan, the cuisine born of the meeting of Chinese and Malays, typical of Malacca and Penang',
      'Jonker Street night market at the weekend',
      'A river boat ride at sunset, with the murals on the banks',
    ],
    doveDormire:
      "Inside the historic center, better on the Chinatown side: in the evening, when the day-visitor coaches have left, the neighborhood changes completely, and that's the reason to stay overnight.",
    doveMangiare:
      "The cuisine to look for is Peranakan or Nyonya: ayam pongteh, chicken stewed with fermented soy sauce, and Nyonya laksa, with coconut milk, which is different from the Penang one. The popular specialty is instead chicken rice ball, chicken with rice served in compact balls, typical of the city. Also try Malacca cendol, rich in palm sugar, and satay celup, skewers cooked by customers in a pot of boiling peanut sauce in the middle of the table.",
    comeArrivare: "Malacca has no useful scheduled flights: you arrive by bus. Buses leave Kuala Lumpur's TBS terminal constantly and reach Melaka Sentral in about 2 hours; from KLIA airport there are direct buses, taking about 2-2.5 hours. Melaka Sentral is outside town: from there to the old town it's a few minutes by Grab or a local bus. For Singapore there are direct buses taking about 4-5 hours including the border, best booked at least the day before.",
    comeSpostarsi: 'The historic center is explored on foot. For the bus station, which is outside the city, you need a local bus or Grab.',
    periodoMigliore: 'all year, with the driest months early in the year. The Jonker Street night market is only on weekends, which affects the choice of days.',
    costi: "State museums (Stadthuys, Maritime Museum, Sultanate Palace) RM20 each for foreigners, Baba & Nyonya about RM20-25, Menara Taming Sari from RM20 (2026); St. Paul's, the Porta de Santiago and the temples are free. Budget: about €30-40 a day with a guesthouse in Chinatown, street food and buses. Mid-range: €60-90 with a hotel in a historic house and some Nyonya dinners. High: over €140 with the luxury hotels on the river.",
    erroriDaEvitare: [
      'Going on a weekend expecting quiet: from Friday to Sunday Malacca is a very popular domestic destination',
      "Doing it as a day trip from Kuala Lumpur: you only see it in the worst hours and miss the evening, which is when the city works",
      "Riding the trishaws decorated with lights and blasting music expecting a romantic ride: they're a kitsch attraction, which is fine if you know in advance",
    ],
    miaEsperienza:
      "Malacca is a short stop that delivers much more than it promises, on one condition: sleeping there. By day, especially on weekends, the center is a continuous flow of day visitors from Kuala Lumpur and Singapore, with trishaws decorated with LED lights passing by blasting music: a level of kitsch that becomes fun the second time. In the evening, when the coaches leave, what remains are the Chinatown alleys, the Peranakan houses with open doors and the lit-up river. St. Paul's hill, with the roofless Portuguese church and the Dutch tombstones leaning against the walls, is the place where this city's layers make sense in two minutes. And Nyonya cuisine, born from the meeting of Chinese merchants and Malay women, is one of the most interesting things I ate in the whole country.",
    luoghi: [
      {
        nome: "Dutch Square, Christ Church and Stadthuys",
        testo: "The Dutch centre of the city, with its brick-red buildings: Christ Church, completed in 1753, and the Stadthuys, the old seat of the Dutch government, built in 1650.",
        come: "On foot from the historic centre. The Stadthuys houses a history and ethnography museum.",
        quando: "In the morning, before the crowd.",
        tempo: "1 hour",
        consiglio: "Start here and go up to St. Paul by the side stairs.",
        costo: "RM20 for foreign adults, about €4; RM10 for children (Perbadanan Muzium Melaka, 2026).",
        orari: "Tuesday to Sunday 9am-5:30pm, last entry 4:30pm; closed on Mondays.",
        lat: 2.19406,
        lng: 102.24915,
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "St. Paul's Hill and Porta de Santiago",
        testo: "On the hill stand the ruins of the church that began as a Portuguese chapel in 1521, with Dutch tombstones along the walls. At the foot is the Porta de Santiago, the last part of the A Famosa fortress.",
        come: "On foot, with a short climb. From the top you see the strait.",
        quando: "At sunset, with the light falling over the strait.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Read the gravestones: they are a summary of the city's history.",
        lat: 2.1928,
        lng: 102.249,
      },
      {
        nome: "Jonker Street",
        testo: "The main street of Chinatown, with antique shops, cafés and, on weekends, a crowded night market.",
        come: "On foot from the centre. The night market runs Friday, Saturday and Sunday evenings.",
        quando: "On weekdays to walk calmly; on weekends for the market.",
        tempo: "1-2 hours",
        consiglio: "Eating on Jonker is not always the best choice: try the side streets.",
        lat: 2.19672,
        lng: 102.24653,
        costo: "Free.",
        orari: "Night market on Friday, Saturday and Sunday from the evening.",
      },
      {
        nome: "Baba & Nyonya Heritage Museum",
        testo: "The house of a Peranakan family, preserved with its original furnishings: carved wood, porcelain and family photos. It tells the story of the Chinese-Malay community born from Chinese merchants marrying local women.",
        come: "On foot from Jonker Street.",
        quando: "Closed on Tuesdays. Other weekdays 10am-4:15pm, weekends 10am-4:45pm (2025).",
        tempo: "1 hour",
        url: "https://www.babanyonyamuseum.com/",
        consiglio: "Check hours and visiting arrangements on the website before going.",
        costo: "About RM20-25, roughly €4-5.",
        orari: "Closed on Tuesdays; other weekdays 10am-4:15pm, Saturday and Sunday 10am-4:45pm (official site).",
      },
      {
        nome: "Cheng Hoon Teng",
        testo: "A historic Chinese temple, still in use; in the nearby streets there are also the Sri Poyatha Moorthi Hindu temple and the Kampung Kling Mosque, founded in 1748 and rebuilt in brick in 1872, with architecture mixing Sumatran, Chinese, Hindu and Malay elements: three cultures a few steps apart.",
        come: "On foot, in the old town, on Jalan Tukang Emas, known as Harmony Street.",
        quando: "In the morning.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Visit both on the same walk, with a covered head for the mosque.",
        lat: 2.19747,
        lng: 102.24686,
        url: "https://www.chenghoonteng.org.my/",
      },
      {
        nome: "Maritime Museum (Muzium Samudera)",
        testo: "A large replica of the Flor de la Mar, the Portuguese carrack that sank off Malacca in 1511 loaded with the spoils of the conquest. Inside and in the buildings next door, the story of the port: Arab, Chinese and Indian merchants, spices, European rule. It is the museum families like most.",
        come: "On foot along the river, a few minutes from Dutch Square. The same ticket covers the museum's nearby sections.",
        quando: "In the hot hours, to be indoors.",
        tempo: "1 hour",
        costo: "RM20 for foreign adults, about €4; RM10 for children (Perbadanan Muzium Melaka, 2026).",
        orari: "Tuesday to Sunday 9am-5:30pm, last entry 4:30pm; closed on Mondays.",
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "Sultanate Palace",
        testo: "The reconstruction in dark timber, without nails, of the palace of Sultan Mansur Shah, who reigned in the fifteenth century when Malacca was the richest port on the Strait. Inside is the museum of Malay culture: costumes, weapons, court scenes. It tells the story of Malacca before the Europeans.",
        come: "On foot at the foot of St. Paul's Hill, on the side opposite the Porta de Santiago. Shoes off inside.",
        quando: "In the morning, before the climb to St. Paul's.",
        tempo: "45 minutes",
        costo: "RM20 for foreign adults, about €4; RM10 for children (Perbadanan Muzium Melaka, 2026).",
        orari: "Tuesday to Sunday 9am-5:30pm, last entry 4:30pm; closed on Mondays.",
        lat: 2.1929,
        lng: 102.2504,
        url: "https://www.perzim.gov.my/",
      },
      {
        nome: "Malacca River cruise",
        testo: "The boat that travels about 9 km up the river past houses painted with murals, restored warehouses, bridges and the village of Kampung Morten. In the evening, with the lights on the banks, it is the most relaxing way to see the city.",
        come: "From the jetty near the Maritime Museum or the other landings along the river; tickets at the counter or online.",
        quando: "After sunset, with the banks lit up.",
        tempo: "45 minutes",
        orari: "Daily 9am-11pm.",
        url: "https://www.melakarivercruise.my/",
      },
      {
        nome: "Kampung Morten",
        testo: "A traditional Malay village left in the middle of the city, on a bend of the river: wooden houses on stilts with steep roofs, gardens and decorated staircases. It is lived in, and some families open their home to visitors.",
        come: "On foot along the river walk, about 15 minutes from Jonker Street, or on the cruise.",
        quando: "Late afternoon, then back along the river at sunset.",
        tempo: "45 minutes",
        lat: 2.20339,
        lng: 102.25103,
        consiglio: "It is a residential area: no photos inside the yards without asking.",
      },
      {
        nome: "Kampung Hulu Mosque",
        testo: "Dating from 1728, it is one of the oldest mosques in Malaysia still in use. It has the tiered pyramid roof typical of Javanese mosques and a minaret that looks like a pagoda: architecture mixing Malay, Chinese and Hindu influences, like nearby Kampung Kling.",
        come: "On foot in northern Chinatown. Non-Muslims enter outside prayer times, in covered clothing.",
        quando: "In the morning, away from Friday prayers.",
        tempo: "20 minutes",
        lat: 2.19925,
        lng: 102.24761,
      },
      {
        nome: "Menara Taming Sari",
        testo: "An 80-metre revolving observation tower: the cabin rotates as it climbs and in a few minutes shows the old town, the river, the strait and the artificial islands. There is nothing historic about it, but it helps you understand the shape of the city.",
        come: "On foot from Dutch Square, towards the seafront.",
        quando: "At sunset, with the light over the strait.",
        tempo: "30 minutes, with a 7-minute ride",
        costo: "From RM20 for adults, about €4 (official site, 2026).",
        orari: "Weekdays 9am-10pm; weekends and public holidays 9am-11pm.",
        lat: 2.19083,
        lng: 102.24711,
        url: "https://www.menaratamingsari.com/",
      },
      {
        nome: "Bukit China",
        testo: "The hill that, according to tradition, the sultan gave to the Chinese princess Hang Li Po and her retinue in the fifteenth century. Today it is one of the largest Chinese cemeteries outside China, with thousands of horseshoe-shaped tombs among the trees. At its foot are the sultan's well and the Sam Po Kong temple.",
        come: "On foot or by Grab from the centre, about 1 km east of Jonker Street. Paths between the tombs lead to the top.",
        quando: "Early morning, when the hill is full of people walking and exercising.",
        tempo: "1 hour",
        lat: 2.2,
        lng: 102.2577,
        consiglio: "Respect the graves: stay on the paths, not on the burials.",
      },
      {
        nome: "Portuguese Settlement",
        testo: "The seaside quarter where the descendants of the Portuguese who arrived in 1511 live, still speaking Kristang, a Portuguese creole. Low houses, crosses on the doors, a square with seafood restaurants. At the end of June it celebrates the Festa de San Pedro, with decorated boats.",
        come: "About 3 km southeast of the centre, 10 minutes by Grab.",
        quando: "In the evening, for grilled fish in the square.",
        tempo: "1-2 hours",
        lat: 2.18583,
        lng: 102.26583,
        consiglio: "Try devil curry, the spicy curry of Kristang cooking.",
      },
      {
        nome: "Masjid Selat (Straits Mosque)",
        testo: "A modern mosque built on stilts over the water, on the artificial island of Pulau Melaka, opened in 2006. At high tide it seems to float; at sunset the light behind the minaret draws many photographers.",
        come: "About 3 km south of the centre, by Grab. Non-Muslims enter outside prayer times, in covered clothing; women with their heads covered.",
        quando: "At sunset, staying outside during the evening prayer.",
        tempo: "45 minutes",
        lat: 2.17889,
        lng: 102.24917,
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Dutch Square, Christ Church and the Stadthuys museum",
          "Sultanate Palace, then up St. Paul's Hill and the Porta de Santiago",
          "Nyonya lunch",
          "Early afternoon: Baba & Nyonya Museum",
          "Cheng Hoon Teng, Kampung Kling and Kampung Hulu",
          "Evening: Jonker Street and a cruise on the lit-up river",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above",
          "Day 2: Bukit China early, then the Maritime Museum in the hot hours",
          "Kampung Morten along the river in the afternoon",
          "Sunset at Masjid Selat",
          "Dinner at the Portuguese Settlement",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2: as above",
          "Day 3: morning trip to Pulau Besar",
          "Menara Taming Sari at sunset",
          "A last satay celup dinner",
        ],
      },
    ],
    zone: [
      {
        nome: "Chinatown and Jonker Street",
        perChi: "those who want to be in the heart of the city",
        testo: "Guesthouses in historic houses, many close to everything. Noisy at weekends.",
        fascia: "€25-90",
      },
      {
        nome: "Riverside",
        perChi: "those looking for a river view",
        testo: "Hotels with river views, quieter. A bit further from Jonker Street.",
        fascia: "€50-150",
      },
      {
        nome: "Bandar Hilir",
        perChi: "those who want a modern hotel close to the centre",
        testo: "Large hotels and malls between Dutch Square and the sea, near the Menara Taming Sari. Convenient but without atmosphere.",
        fascia: "€40-100",
      },
    ],
    sapori: [
      {
        nome: "Chicken rice ball",
        testo: "Rice shaped into balls and served with poached chicken. The local version of chicken rice."
      },
      {
        nome: "Nyonya laksa",
        testo: "Noodles in coconut and prawn broth, typical of Peranakan cooking."
      },
      {
        nome: "Cendol",
        testo: "Shaved ice, coconut milk, palm syrup and green jellies. A much-loved dessert in Malacca."
      },
      {
        nome: "Satay celup",
        testo: "Skewers cooked at the table in a pot of boiling sauce. A Malacca specialty."
      }
    ],
    attenzioni: [
      "From Friday to Sunday the city is crowded with day-trippers: if you can, come on weekdays.",
      "The trishaws decorated with lights and loud music are an attraction: agree the price before getting on.",
      "Do not make it a day trip from Kuala Lumpur: you miss the evening, when the coaches leave.",
      "The heat is strong at midday: carry water and cover your head."
    ],
    gite: [
      {
        nome: "Pulau Besar",
        distanza: "about 20 km, then 15 minutes by boat",
        come: "By Grab or taxi to the Anjung Batu jetty in Umbai, then the ferry to the island.",
        testo: "A small island off the coast, with quiet beaches, trails and tombs of Muslim saints visited by pilgrims. Half a day of sea and silence after the crowded centre.",
      },
      {
        nome: "Port Dickson",
        distanza: "about 90 km, 1.5 hours by car",
        come: "By car or with a driver; buses from Melaka Sentral are slower.",
        testo: "The beach resort closest to Kuala Lumpur, with long beaches and the Tanjung Tuan lighthouse. The sea isn't postcard material, but it's a rest day on the way north.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Malacca?",
        risposta: "One full day is enough for the old town; with two you add museums, Kampung Morten and an unhurried evening on the river. Stay at least one night.",
      },
      {
        domanda: "Can you visit Malacca as a day trip from Kuala Lumpur?",
        risposta: "You can, with about 2 hours by bus each way, but you see the city in its hottest and most crowded hours and miss the evening, which is the best time.",
      },
      {
        domanda: "When is the Jonker Street night market?",
        risposta: "Friday, Saturday and Sunday from the evening. On other days the street is quieter and easier to walk.",
      },
      {
        domanda: "Malacca or Penang?",
        risposta: "Malacca if time is short or you travel overland to Singapore; Penang if you have two or three days and also come for the food.",
      },
      {
        domanda: "How much are Malacca's museums?",
        risposta: "State museums such as the Stadthuys, the Maritime Museum and the Sultanate Palace cost RM20 each for foreign adults and close on Mondays. The Baba & Nyonya Heritage Museum is private and closes on Tuesdays.",
      },
      {
        domanda: "How do you get from Malacca to Singapore?",
        risposta: "By direct bus, about 4-5 hours including the border. The SG Arrival Card is filled in online in the three days before arrival.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'The Malacca river among the colorful houses of the historic center, with a tourist boat',
    immagine: '/images/malesia/malacca.jpg',
  },
  {
    slug: 'cameron-highlands',
    paeseSlug: 'malesia',
    ordine: 4,
    nome: 'Cameron Highlands',
    tipologia: ['natura', 'montagna', 'trekking'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "The plateau where the British took refuge from the heat: tea plantations as far as the eye can see, strawberry greenhouses, mossy forest and a cool climate in the evening. It's one of the few places on the peninsula where you need a sweatshirt.",
    percheAndarci:
      "After a few days of equatorial heat the physical relief is felt, and the tea plantations that roll down the hills in waves are a much-photographed landscape. The mossy forest, the highland moss forest, is something else entirely.",
    cosaVedere: [
      'The tea plantations, with the green terraces following the hills',
      'The mossy forest on Gunung Brinchang, a highland wood covered in moss and ferns, walkable on a boardwalk',
      'The strawberry farms and greenhouses, the plateau\'s other typical produce',
      "The Brinchang market, with the plateau's produce",
    ],
    cosaFare: [
      "Visit a plantation with a tasting and a view over the terraces (there's a dedicated experience page)",
      'Walk in the mossy forest in the morning, when the fog is still among the trees',
      "One of the numbered trails in the area, from easy to quite demanding",
      "Look for the rafflesia, a giant flower, with a local guide: it blooms in periods and isn't guaranteed",
    ],
    doveDormire:
      "Tanah Rata is the most convenient town and has the widest offer; Brinchang is closer to the plantations but more anonymous. Rooms rarely have heating: at night it's really cold and blankets matter more than stars.",
    doveMangiare:
      "The plateau has its own food identity tied to the climate: steamboat, the pot of boiling broth in the middle of the table where vegetables and meat are cooked, is what everyone eats in the evening because it's cold, and it's the right thing to do. For the rest, tea and scones in the plantations' tea rooms (a colonial legacy that here isn't a pose) and strawberries in every possible form, including those it would be better to avoid.",
    comeArrivare:
      "Bus from Kuala Lumpur or from Penang and Ipoh. The last stretch is a mountain road with many hairpin bends: anyone prone to carsickness feels it, and it's no small detail on a long trip.",
    comeSpostarsi:
      "Distances between points of interest are awkward on foot and public transport is sparse: almost everyone joins a half-day tour or takes a taxi for the day. Grab works intermittently.",
    periodoMigliore:
      'all year, with cool, stable temperatures. Rain is frequent in the afternoon in every season: outings should be scheduled for the morning.',
    costi: "entry to the plantations free or nominal; half-day tours are paid, with prices to compare among the Tanah Rata agencies.",
    erroriDaEvitare: [
      'Going on a weekend or during Malaysian school holidays: the plateau is a much-loved domestic destination and the hairpin roads turn into a line of cars',
      "Bringing nothing warm: here, the only place on the trip, the evening is freezing",
      'Booking the cheapest tours for the mossy forest, which often only take you to the crowded boardwalk near the tower instead of the real part',
      "Expecting unspoiled landscapes: the plateau is heavily farmed and in some areas plastic greenhouses have eaten the view",
    ],
    miaEsperienza:
      "The Cameron Highlands work mostly by contrast: we arrived after days of humid heat and in the evening we slept under a blanket, which by then felt like a luxury. The tea plantations are beautiful, with green terraces rolling down in waves, and the tea room overlooking the hills is one of those colonial things that don't feel out of place here. The mossy forest is the part that surprises most (a dwarf forest at 2,000 meters completely covered in moss, with fog among the branches) and also the one where it pays to be practical: there are two mossy forests, the real one and the tourist boardwalk next to the tower's parking lot, and the cheapest tours only go to the second. There's also the other side of the coin: the plateau is agricultural and in some stretches plastic greenhouses cover entire slopes. It's a farmed area with some beautiful pieces in it, not a national park.",
    luoghi: [
      {
        nome: "Tea plantations",
        testo: "Hills covered in tea terraces as far as the eye can see, such as the BOH Sungai Palas plantation, where the trail to the mossy forest also starts. Some plantations have a tea room with a view.",
        come: "By car or tour from Tanah Rata or Brinchang. Narrow mountain roads.",
        quando: "In the morning, with less mist and fewer people.",
        tempo: "2 hours",
        consiglio: "Have tea on the terrace and look at the hills for half an hour: it is the best part."
      },
      {
        nome: "Mossy Forest on Gunung Brinchang",
        testo: "A highland forest near the top of Gunung Brinchang, covered in moss, ferns and wild orchids, with mist among the branches. It's walked on a wooden boardwalk.",
        come: "By 4x4 or guided tour from Tanah Rata or Brinchang. Ask to be taken to the real part, not just to the boardwalk next to the tower car park.",
        quando: "Early in the morning: the mist rises by midday.",
        tempo: "2-3 hours",
        consiglio: "Prefer a guided tour with an extra hour: the cheapest tours only go to the crowded boardwalk."
      },
      {
        nome: "Strawberry farms and greenhouses",
        testo: "Growing strawberries and vegetables is the plateau's other typical activity. You visit greenhouses, eat strawberries and buy honey and tea.",
        come: "By car or tour, along Brinchang's main road.",
        quando: "In the morning.",
        tempo: "1 hour",
        consiglio: "Do not expect untouched landscape: many areas are covered by plastic greenhouses."
      },
      {
        nome: "Brinchang and the market",
        testo: "One of the main towns on the plateau, with a local produce market, a night market and restaurants serving steamboat.",
        come: "On foot in Brinchang or by bus from Tanah Rata.",
        quando: "Late afternoon and evening.",
        tempo: "2 hours",
        consiglio: "Bring a sweater: it is cold in the evening."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Early morning: Mossy Forest with a guided tour",
          "Late morning: tea plantation with tea on the terrace",
          "Lunch in Brinchang",
          "Early afternoon: strawberry farm",
          "Evening: steamboat in Brinchang"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "As above, and on the second day a light trek on the Tanah Rata trails and some free time"
        ]
      }
    ],
    zone: [
      {
        nome: "Tanah Rata",
        perChi: "anyone who wants to be close to trails and buses",
        testo: "The centre with hostels and guesthouses, convenient for excursions and restaurants. A bit busy."
      },
      {
        nome: "Brinchang",
        perChi: "anyone who wants to be near the Mossy Forest and the market",
        testo: "Quieter, with mid-range hotels and colder in the evening."
      }
    ],
    sapori: [
      {
        nome: "Steamboat",
        testo: "A pot of boiling broth in the middle of the table where you cook meat, fish and vegetables. Ideal for the cold evenings of the plateau."
      },
      {
        nome: "Scones with strawberries and cream",
        testo: "A British legacy, served in the tea rooms of the plantations."
      },
      {
        nome: "Plantation tea",
        testo: "Local black tea, served in the plantation tea rooms."
      },
      {
        nome: "Murtabak",
        testo: "A pancake stuffed with meat and egg, of Indian Muslim origin. Found in the places of Tanah Rata and Brinchang."
      }
    ],
    attenzioni: [
      "On weekends and Malaysian school holidays the winding roads jam: come on a weekday.",
      "Evenings are cool, and cold higher up: bring something warm.",
      "For those prone to car sickness: the road up is full of hairpin bends.",
      "Choose a Mossy Forest tour that reaches the real part and not just the boardwalk near the car park."
    ],
    esperienzeSlugs: ['piantagioni-te-cameron'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'The forest-covered hills of the Cameron Highlands seen from a viewpoint',
    immagine: '/images/malesia/cameron-highlands.jpg',
  },
  {
    slug: 'taman-negara',
    paeseSlug: 'malesia',
    ordine: 5,
    nome: 'Taman Negara',
    tipologia: ['natura', 'giungla', 'trekking'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "An ancient rainforest, in the heart of the Malay peninsula. You get there by boat along the river, and that already says a lot about what to expect.",
    percheAndarci:
      "It's real jungle, reachable from Kuala Lumpur, and the canopy walkway suspended between the trees is one of the few ways to see a rainforest from above instead of from below, where you see almost nothing.",
    cosaVedere: [
      'The canopy walkway, suspended among the treetops',
      'Bukit Teresek, the scenic climb above the forest canopy',
      'The Lata Berkoh rapids, reached by boat upriver',
      'An Orang Asli village, the indigenous communities of the peninsula, with a blowpipe demonstration',
      "The Gua Telinga caves, crawled through, for those who aren't afraid of tight spaces",
    ],
    cosaFare: [
      "Walk the canopy walkway early in the morning (there's a dedicated experience page)",
      'Guided night walk in the forest, the moment when animals are really seen',
      'Longboat trip up the river to the rapids',
      'Multi-day trek to the hides, the observation posts where you sleep waiting for wildlife',
    ],
    doveDormire:
      "Kuala Tahan, the village on the opposite bank from the park entrance, has the budget accommodations and the floating restaurants; inside the park there is the official resort, pricier but with the advantage of already being on the right side of the river in the morning.",
    doveMangiare:
      "At Kuala Tahan you eat in the floating restaurants moored on the river, serving simple Malay food at low prices with the current passing under the tables. Inside the park the offer is limited and expensive. For long treks you bring everything from outside: water included, because along the trails there's nothing.",
    comeArrivare:
      'Minibus from Kuala Lumpur to Kuala Tembeling or to Jerantut, then a longboat on the Tembeling river: the crossing is the best part of the transfer. Many operators offer the combined package from the capital.',
    comeSpostarsi: "On foot in the park and by boat on the river: there are no roads. To cross from Kuala Tahan to the entrance there are frequent, cheap small boats.",
    periodoMigliore:
      'the driest window is mid-year. At the end of the year the rains are heavy and some activities are suspended; the river level affects boat trips upriver.',
    costi: "entering the park requires a permit from the Department of Wildlife and National Parks (often included in packages); the canopy walkway and guided walks are paid separately, with prices depending on length.",
    erroriDaEvitare: [
      "Expecting to see tigers, elephants or tapirs: they're there, but sightings are extremely rare and anyone who arrives with that idea goes back disappointed. Here you hear more than you see",
      'Going without leech socks in the wet season: land leeches are numerous and come from below',
      'Doing the canopy walkway in the middle of the day, when there is a line on the walkways and you pass one at a time',
      "Underestimating the night walk: it's the moment when the forest comes alive, and almost everyone skips it out of tiredness",
    ],
    miaEsperienza:
      "Taman Negara has to be approached with the right expectations, because it's the stop that disappoints anyone who arrives thinking of a documentary. The rainforest is extremely dense and to the side you see only a few meters: you hear cicadas, distant gibbons, birds, but of big animals you see almost nothing. What makes it memorable are the longboat crossing to get there, two and a half hours against the current between two walls of green, and the canopy walkway, the only way to look at the forest from above and grasp its layered structure. It should be done at opening, because later you pass one at a time with a line behind you. The night walk is the part almost everyone skips, and it's the one that's worth it: with a flashlight you see spiders, snakes, eyes reflecting in the dark, and the forest that is silent by day becomes very loud. One last practical thing: the leeches are there and climb up from your feet, and the dedicated socks are not an excess of zeal.",
    luoghi: [
      {
        nome: "Canopy walkway",
        testo: "A walkway suspended among the treetops. It's the only way to look at the forest from above and understand its layered structure.",
        come: "On foot from Kuala Tahan village, along a forest trail. The permit is bought at the visitor centre; people cross a few at a time.",
        quando: "At opening: later you go with a queue behind you.",
        tempo: "2-3 hours",
        consiglio: "Go at opening to have the walkway almost empty."
      },
      {
        nome: "Bukit Teresek",
        testo: "A steep climb above the forest canopy, with steps and roots. From the top you see the green expanse and the river.",
        come: "On foot from Kuala Tahan, on the same trail as the canopy walkway, with one more stretch.",
        quando: "Early in the morning, for the cool.",
        tempo: "2 hours",
        consiglio: "Bring water and high socks against leeches."
      },
      {
        nome: "Lata Berkoh",
        testo: "Rapids upstream of the village, reached by going up the river in a longboat. The boat ride, against the current between two walls of forest, is already part of the visit.",
        come: "By longboat from the village, at times agreed with operators. The river level decides whether you can go.",
        quando: "In the morning. In the rainy season the trips stop.",
        tempo: "half a day",
        consiglio: "Ask several operators whether the trip is confirmed before booking."
      },
      {
        nome: "Night walk",
        testo: "A night walk with a guide and flashlight in the forest: spiders, insects, snakes and frogs, and with luck a mammal. It is when the forest comes alive.",
        come: "With a park guide or authorized operator, from the village.",
        quando: "After sunset, for a couple of hours.",
        tempo: "2 hours",
        consiglio: "It is the part almost everyone skips out of tiredness and it is the one worth doing."
      },
      {
        nome: "Orang Asli village and Gua Telinga",
        testo: "The indigenous communities of the peninsula still live in the area; a visit with a blowpipe demonstration is the most common form. Gua Telinga is a cave you crawl through, with bats.",
        come: "With authorized operators, by boat. The cave visit requires not minding tight spaces.",
        quando: "In the morning.",
        tempo: "half a day",
        consiglio: "Choose an operator who brings money to the community and does not stage a show."
      }
    ],
    programmi: [
      {
        titolo: "2 days",
        tappe: [
          "Day 1: arrive by boat from Kuala Tembeling (about 2.5 hours on the river), check in, night walk",
          "Day 2: canopy walkway at opening, Bukit Teresek, lunch in the village, return in the afternoon"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "As the 2 days, with the extra day for Lata Berkoh or the Orang Asli village"
        ]
      }
    ],
    zone: [
      {
        nome: "Kuala Tahan (village side)",
        perChi: "anyone who wants a cheap bed and nearby restaurants",
        testo: "Guesthouses and chalets on the river facing the park, with floating restaurants. Noisy and simple."
      },
      {
        nome: "Inside the park",
        perChi: "anyone who wants to stay inside the park",
        testo: "A resort with chalets, close to the trails. More expensive, with few food choices."
      }
    ],
    sapori: [
      {
        nome: "Grilled river fish",
        testo: "Tembeling fish grilled over charcoal, served in the floating restaurants of Kuala Tahan."
      },
      {
        nome: "Nasi campur",
        testo: "Rice with many small dishes of your choice, pointed out at the counter. A simple, cheap meal."
      },
      {
        nome: "Teh tarik",
        testo: "Tea with condensed milk «pulled» from one glass to another. Ordered everywhere."
      },
      {
        nome: "Mee goreng",
        testo: "Stir-fried noodles with vegetables and egg. The dish that is almost always available."
      }
    ],
    attenzioni: [
      "Leeches are numerous in the wet season: proper socks, and check your legs at the end of the day.",
      "Do not expect to see tigers or elephants: sightings are extremely rare.",
      "Almost no ATMs in the village: bring cash from Kuala Lumpur or Jerantut.",
      "In the rainy season, at the end of the year, the rivers rise and some activities are suspended: ask locally."
    ],
    esperienzeSlugs: ['canopy-walkway-taman-negara'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'The Taman Negara rainforest seen from Teresek hill, with mountains on the horizon',
    immagine: '/images/malesia/taman-negara.jpg',
  },
  {
    slug: 'langkawi',
    paeseSlug: 'malesia',
    ordine: 6,
    nome: 'Langkawi',
    tipologia: ['mare', 'isole', 'natura'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    introduzione:
      "An archipelago of many islands in the north of the Strait of Malacca, next to the Thai border: beaches, mangroves, a UNESCO geopark of limestone formations and a very steep cable car that climbs a ridge with a curved suspension bridge.",
    percheAndarci:
      "It's a west-coast island reachable without complications, it works even in the season when the Perhentians close, and the boat ride through the mangroves shows a Malaysia different from the one of the beaches.",
    cosaVedere: [
      'The Sky Bridge, the curved pedestrian bridge suspended above the forest, reached by the Machinchang cable car',
      'The Kilim mangrove geopark, with the limestone formations and caves',
      'The well-equipped Pantai Cenang beach and the quieter ones in the north',
    ],
    cosaFare: [
      'Boat ride in the Kilim mangroves, with sea eagles and limestone caves',
      'Cable car and Sky Bridge, better in the morning before the haze arrives',
      'Island hopping among the nearby islands',
    ],
    doveDormire:
      'Pantai Cenang for services, restaurants and evening life; the north coast around Datai and Tanjung Rhu for resorts and real quiet; Kuah for low prices and proximity to the port, but without a decent beach.',
    doveMangiare:
      "The island lives on tourism and prices reflect it, but a few meters from the beach is enough to get back to Malaysian standards: the night market stalls are the best and cheapest option. Grilled fish and fish curries are the natural cuisine of the place.",
    comeArrivare:
      'Flight to Langkawi (LGK) from Kuala Lumpur or Penang, or ferry from Kuala Kedah, Penang or Satun in Thailand, useful for those combining the two countries.',
    comeSpostarsi:
      "A rental car or scooter is the right way: the island is big, public transport almost nonexistent and taxis expensive compared with the rest of the country. Driving is easy and the roads are good.",
    periodoMigliore:
      'the dry season on the west coast, around the start of the year, with the calmest sea. In the middle months rains are more frequent and haze from Indonesian fires can arrive.',
    costi: "cable car and Sky Bridge paid (prices on the official website), mangrove tour per boat to split, cheap scooter rental.",
    erroriDaEvitare: [
      "Expecting postcard Thai waters: Langkawi's sea is often cloudy because we're at the mouth of river systems, and anyone looking for turquoise is disappointed",
      'Going up the cable car in the early afternoon, when haze covers the view and the line is long',
      "Renting a scooter without an international license and without a helmet: there are checks",
      "Treating the mangrove tour as a regular boat trip: guides who feed the eagles to attract them are a questionable practice, and you should ask in advance whether the operator does it",
    ],
    miaEsperienza:
      "Langkawi is Malaysia's easy island and should be taken for that: you arrive by plane, rent a scooter and get around freely. On the sea you need to lower your expectations. The water is often greenish and cloudy, because we're in the strait and the rivers dump into it: anyone looking for the turquoise of the postcards is looking at the wrong coast of Malaysia. Surprisingly, what gives the stop its meaning is the non-beach part: the tour through the Kilim mangroves, with the limestone walls closing over the boat, the bat caves and the crabs on the mud, is more interesting than any beach on the island. The Sky Bridge deserves the climb as long as you do it early: around noon the haze eats everything and the line remains. And there's the practical detail nobody anticipates: Langkawi is a free port, so alcohol costs a third of what it does in the rest of the country, and you notice right away how the evening atmosphere changes compared with the rest of Malaysia.",
    luoghi: [
      {
        nome: "Langkawi Sky Bridge and cable car",
        testo: "The cable car climbs towards the top of Gunung Mat Cincang. From there you go down to the curved pedestrian bridge, hanging over the void at 660 metres above sea level, with views over sea, islands and forest.",
        come: "From the base station take the cable car to the top station, then the SkyGlide inclined lift or a path takes you to the bridge.",
        quando: "In the morning, when haze is lower and queues shorter.",
        tempo: "3 hours",
        url: "https://www.panoramalangkawi.com/",
        consiglio: "Go up at opening: around midday haze covers the view."
      },
      {
        nome: "Telaga Tujuh (Seven Wells)",
        testo: "A series of natural rock pools at the top of a waterfall of about 90 metres, in the forest above Oriental Village. Cool water for a swim after the climb.",
        come: "About 1.5 km north of Oriental Village, the cable car base: by scooter or car to the car park, then on foot.",
        quando: "Early morning.",
        tempo: "1 hour and a half",
        consiglio: "Pair it with the cable car on the same morning. Wear proper shoes: wet rocks are slippery."
      },
      {
        nome: "Kilim mangroves",
        testo: "Part of the Langkawi UNESCO Global Geopark: limestone walls, bat caves, monkeys and crabs in the mud. Visited by boat.",
        come: "By boat with operators, from the Kilim jetty. The tour lasts a few hours.",
        quando: "In the morning.",
        tempo: "half a day",
        consiglio: "Ask in advance whether the operator feeds the eagles: it is a questionable practice."
      },
      {
        nome: "Pantai Cenang",
        testo: "A well-equipped beach, with bars, restaurants and shops. Often murky sea, but a lovely sunset.",
        come: "By scooter or taxi from the airport, which is close by.",
        quando: "Sunset.",
        tempo: "2 hours",
        consiglio: "Anyone seeking turquoise sea should go to the Perhentians: here it is beach life."
      }
    ],
    programmi: [
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Sky Bridge at opening, lunch, Pantai Cenang at sunset",
          "Day 2: Kilim mangroves in the morning, island trip in the afternoon"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "As the 2 days, with a free third day: northern beaches, a scooter ride among rice fields, sunset at Tanjung Rhu"
        ]
      }
    ],
    zone: [
      {
        nome: "Pantai Cenang",
        perChi: "anyone who wants beach, bars and dining out",
        testo: "The liveliest area, with plenty of choice. Noisy and crowded."
      },
      {
        nome: "Pantai Tengah",
        perChi: "anyone looking for some calm",
        testo: "Next to Cenang, quieter, with resorts and guesthouses."
      },
      {
        nome: "Kuah",
        perChi: "anyone arriving by ferry or wanting to save",
        testo: "The main town, with the port and the lowest prices, but far from the beaches."
      }
    ],
    sapori: [
      {
        nome: "Grilled fish",
        testo: "Fresh fish grilled over charcoal with sambal, in the seaside restaurants."
      },
      {
        nome: "Langkawi laksa",
        testo: "Noodles in a spicy fish broth. Found at street stalls."
      },
      {
        nome: "Duty-free goods",
        testo: "Langkawi is a duty-free island: chocolate, alcohol and perfume cost less than on the mainland."
      },
      {
        nome: "Nasi lemak",
        testo: "Coconut rice with fried anchovies, egg and sambal. The national breakfast."
      }
    ],
    attenzioni: [
      "Often murky sea: anyone seeking turquoise water is disappointed, better to focus on mangroves and excursions.",
      "Scooters: international licence and helmet, checks exist.",
      "Eagles and monkeys in the mangroves: do not feed them and ask the operator whether they do.",
      "In the dry months haze from fires in Indonesia can arrive: check the news."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'The Langkawi Sky Bridge suspended between the forest-covered mountains',
    immagine: '/images/malesia/langkawi.jpg',
  },
  {
    slug: 'perhentian',
    paeseSlug: 'malesia',
    ordine: 7,
    nome: 'Perhentian Islands',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "Two islands on the east coast, in the South China Sea: white sand, truly turquoise water, turtles you meet snorkeling from the shore and no roads, because there are no vehicles. They close almost entirely when the northeast monsoon arrives, around the turn of the year.",
    percheAndarci:
      "They're the answer to the question of where the beautiful sea in Malaysia is (on the east coast, not the west), and development is still low: you sleep in chalets, eat on the beach and in the evening electricity in some places runs on a generator.",
    cosaVedere: [
      'Perhentian Besar, the bigger one, quieter and with the best beaches',
      'Perhentian Kecil, the small one, with Long Beach and the evening life',
      'The reefs reachable by snorkeling',
      'The coves accessible only by sea',
    ],
    cosaFare: [
      'Snorkeling with turtles, which here you see starting from the beach with no boat or guide',
      'Course or dives: the Perhentians are an inexpensive place to get certified',
      'Boat tour around the two islands with stops at snorkeling spots',
      'Walk the jungle trail between the beaches, the only land connection',
    ],
    doveDormire:
      'Besar for families and anyone looking for calm, Kecil and Long Beach for the more social pace and low prices. Accommodations are simple: wooden chalets, air conditioning not always, and in some places electricity runs on a schedule.',
    doveMangiare:
      "You eat in the chalets' restaurants and at the evening beach barbecues, where the fish is displayed on ice and grilled on the spot: it's the typical dinner and costs little. The offer is limited and repetitive (nasi goreng, mie goreng, fish, curry) and has to be accepted as part of the package. Worth knowing: we're in a conservative state, alcohol is hard to find and expensive, and some places don't serve it at all.",
    comeArrivare:
      'Flight to Kota Bharu or night bus from Kuala Lumpur to Kuala Besut, then a speedboat. The crossing is fast but bumpy: anyone prone to seasickness feels it.',
    comeSpostarsi: "Only on foot and by water taxi: there are no roads or vehicles on the islands. Transfers between beaches are by boat, for a few ringgit.",
    periodoMigliore:
      'the months outside the monsoon, in the middle of the year. **Around the turn of the year the islands close almost completely** because of the northeast monsoon: the places shut and the ferries stop. It is a real closure, more than a low season.',
    costi:
      "simple chalets at low prices, return speedboat from Kuala Besut; diving at low prices.",
    erroriDaEvitare: [
      "Planning them during the northeast monsoon: they're closed, and it's the mistake that sinks whole itineraries",
      'Counting on card payments: on the islands you function almost only on cash and ATMs are very few and often empty: withdraw on the mainland',
      'Expecting resorts and services: here you sleep in chalets and the power can go on a schedule',
      "Underestimating Terengganu's social code: it's a conservative state, and away from the beaches covered clothing is the expected norm",
    ],
    miaEsperienza:
      "The Perhentians are worth reorganizing a Malaysia itinerary for: it's the only coast where the sea is the one in the photographs, turquoise and transparent, and you just need to enter the water from the beach to run into a turtle grazing on the bottom without a care. It's also a place deliberately left behind: wooden chalets, a fan instead of air conditioning, scheduled electricity, no working ATM and dinners that repeat after three days. Anyone who knows it in advance enjoys it, anyone expecting a resort doesn't. The thing to put on the agenda before anything else is the calendar: from November to February the northeast monsoon closes the islands, the ferries stop and the places shut. More than low season, it's closed: it's the mistake that blows up more Malaysian itineraries than any other.",
    luoghi: [
      {
        nome: "Perhentian Besar",
        testo: "The big island, quieter, with the best beaches and fewer evening venues. The place for sea and silence.",
        come: "By speedboat from the Kuala Besut jetty.",
        quando: "Outside the monsoon months. During the northeast monsoon almost all resorts and ferries stop.",
        tempo: "at least 2 nights",
        costo: "Marine park conservation fee: RM30 for foreigners (2022), paid at the office on the Kuala Besut jetty.",
        consiglio: "Book chalets and boat in advance in high season."
      },
      {
        nome: "Perhentian Kecil and Long Beach",
        testo: "The small island, with the liveliest beach (Long Beach), bars on the sand and evening life. On the other side, Coral Bay, quieter.",
        come: "Speedboat from Kuala Besut; between beaches by water taxi.",
        quando: "Outside the monsoon months.",
        tempo: "at least 2 nights",
        consiglio: "Anyone seeking quiet should go to Coral Bay or Besar."
      },
      {
        nome: "Snorkeling on the reef",
        testo: "Snorkeling spots where you can meet blacktip reef sharks and turtles. In some spots you enter directly from the beach.",
        come: "By boat with snorkeling operators, half a day.",
        quando: "In the morning, with the clearest water.",
        tempo: "half a day",
        consiglio: "Do not touch or chase turtles: watch without approaching."
      },
      {
        nome: "Sea-only coves",
        testo: "Coves reachable only by boat or short trails, with transparent water and very few people.",
        come: "By water taxi from Kecil, or on foot through the forest on a marked trail.",
        quando: "In the morning.",
        tempo: "half a day",
        consiglio: "Bring cash for the water taxi: ATMs on the islands are very few."
      }
    ],
    programmi: [
      {
        titolo: "3 days",
        tappe: [
          "Day 1: arrival, chalet, beach and sunset",
          "Day 2: snorkeling trip on the reef",
          "Day 3: sea-only coves and boat back"
        ]
      },
      {
        titolo: "4 days",
        tappe: [
          "As the 3 days, with the fourth for a dive or a free day on the beach"
        ]
      }
    ],
    zone: [
      {
        nome: "Long Beach (Kecil)",
        perChi: "anyone who wants nightlife and convenience",
        testo: "Simple chalets, bars, restaurants, dive shops. Noisier."
      },
      {
        nome: "Coral Bay (Kecil)",
        perChi: "anyone who wants sunsets and a little calm",
        testo: "On the west side of Kecil, with beach bars and few people."
      },
      {
        nome: "Perhentian Besar",
        perChi: "anyone who wants the best sea and silence",
        testo: "Few resorts and chalets, a few restaurants. Electricity at set hours."
      }
    ],
    sapori: [
      {
        nome: "Grilled fish",
        testo: "Catch of the day grilled over charcoal with rice and vegetables, in small beachside restaurants."
      },
      {
        nome: "Nasi goreng",
        testo: "Fried rice with egg and vegetables. Almost always available."
      },
      {
        nome: "Roti canai",
        testo: "Flat bread served with curry. A basic breakfast."
      },
      {
        nome: "Fresh fruit and coconut water",
        testo: "Coconut and tropical fruit, sold on the beach."
      }
    ],
    attenzioni: [
      "During the northeast monsoon, around the turn of the year, almost all resorts and ferries close: check dates before booking.",
      "Cash: few ATMs and often empty, withdraw on the mainland.",
      "Terengganu is a conservative state: away from the beaches, dress in covered clothing.",
      "Electricity at set hours and no air conditioning in many chalets."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'A white sand beach and turquoise sea at the foot of the jungle on Perhentian Kecil',
    immagine: '/images/malesia/perhentian.jpg',
  },
]
