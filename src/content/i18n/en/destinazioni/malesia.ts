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
    comeArrivare:
      'Flight to Kuala Lumpur International (KUL), a major regional hub, with the KLIA Ekspres train taking you downtown. Terminal 2 serves low-cost flights, including those to Borneo.',
    comeSpostarsi:
      "Metro, monorail and LRT cover the center well, with Touch 'n Go or a single ticket. Grab is cheap and solves everything else. Walking is possible but tiring: patchy sidewalks, heat and humidity.",
    periodoMigliore:
      'all year, with afternoon downpours in any season.',
    costi:
      "Petronas skybridge paid (prices on the official website), Batu Caves free, Islamic Arts Museum with a ticket (prices on the museum website). Transport costs a few ringgit.",
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
        testo: "The twin towers are the symbol of the city. You visit the skybridge linking the two towers and the highest observation deck; at the foot there is KLCC park with its fountain.",
        come: "LRT to KLCC, with a direct exit into the shopping centre. Tickets for the climb are timed and booked online on the official site.",
        quando: "Tuesday to Sunday, 9:00-21:00; closed on Mondays except public holidays (2025). Sunset is the most requested time and slots sell out. From below the towers look best at blue hour.",
        tempo: "1 hour for the climb; KLCC park takes half an hour",
        costo: "Timed ticket for the skybridge and observation deck, more expensive for non-Malaysians: current prices and purchase on the official website (tickets from unofficial resellers are not refundable).",
        consiglio: "Anyone who does not want to spend can look at them from below and take the view from another tower, the KL Tower."
      },
      {
        nome: "Batu Caves",
        testo: "A Hindu shrine in a limestone cave, preceded by the golden statue of Murugan, almost 43 meters tall, and a long colorful staircase. Inside there is a large hall with small temples, light falling through an opening in the roof and monkeys on the steps.",
        come: "Komuter train from KL Sentral to the Batu Caves terminus. Entry to the main cave is free. The Dark Cave, the protected inner cave, can only be visited on the Malaysian Nature Society's educational trips, when they run. Shoulders and knees covered.",
        quando: "Early in the morning, with worshippers climbing and the steps in shade. During the Thaipusam festival the crowds are huge.",
        tempo: "2 hours",
        costo: "free entry",
        consiglio: "Do not hold bottles, glasses or food in your hands: the monkeys snatch them."
      },
      {
        nome: "Masjid Jamek",
        testo: "The mosque stands at the confluence of the Klang and Gombak rivers, where the city began. A little further on is the Sultan Abdul Samad Building.",
        come: "LRT to Masjid Jamek. The mosque is visited outside prayer times, with a robe lent at the entrance.",
        quando: "In the morning.",
        tempo: "1 hour",
        consiglio: "Walk on to Chinatown, in the same afternoon."
      },
      {
        nome: "Chinatown, Petaling Street and Sri Mahamariamman",
        testo: "The Chinese district with its street market and a historic Hindu temple, a few steps from each other.",
        come: "LRT to Pasar Seni. The market is open-air, the temple is visited barefoot.",
        quando: "In the morning for the temple; in the evening for the street, when the market is liveliest.",
        tempo: "1.5 hours",
        consiglio: "Do not buy the fakes: opening prices are very high."
      },
      {
        nome: "Islamic Arts Museum",
        testo: "A rich museum on the subject: textiles, ceramics, manuscripts and models of mosques. Usually quiet.",
        come: "In the Lake Gardens park, near the National Mosque. By taxi or Grab, or on foot from KL Sentral with a long walk.",
        quando: "Open daily, 9:30-18:00 (last entry 17:30). Ideal in the early afternoon, in the hottest hours.",
        tempo: "2 hours",
        url: "https://www.iamm.org.my/",
        consiglio: "The museum café, air-conditioned and quiet, is an excellent break.",
        costo: "Entry ticket; prices on the museum website."
      },
      {
        nome: "Jalan Alor",
        testo: "A street closed to traffic in the evening, with open-air tables and Chinese, Malay and Indian kitchens side by side. The place to eat on the first night.",
        come: "On foot from Bukit Bintang or by monorail to Bukit Bintang.",
        quando: "In the evening.",
        tempo: "1-2 hours",
        consiglio: "Ask the price before ordering fish, which is paid by weight."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: ["Early morning: Batu Caves, climbing in the shade","Back to KL Sentral for breakfast","Early afternoon: Islamic Arts Museum, in the cool","Late afternoon: Masjid Jamek on foot, then Chinatown","Blue hour: the Petronas from below","Evening: dinner on Jalan Alor"]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above without Jalan Alor",
          "Day 2: morning at the Lake Gardens and Perdana Botanical Garden, then KL Tower; evening dinner at Jalan Alor and Bukit Bintang"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Bintang",
        perChi: "anyone who wants food, shops and nightlife",
        testo: "The shopping center, with a huge choice of lodging and restaurants. It is loud and a little touristy, but well connected."
      },
      {
        nome: "KLCC",
        perChi: "anyone looking for views of the towers and high-end hotels",
        testo: "Quiet, clean, with quality restaurants. Less authentic life."
      },
      {
        nome: "Chinatown and Pasar Seni",
        perChi: "anyone who wants to save money and be close to markets and the station",
        testo: "Hostels and cheap hotels, close to the airport train. Noisy in the evening."
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
    comeArrivare:
      'Flight to Penang (PEN) from Kuala Lumpur or abroad, or ETS train to Butterworth and a ferry, which is the nicest way to arrive.',
    comeSpostarsi: 'George Town is explored on foot; for the rest of the island cheap public buses and Grab.',
    periodoMigliore:
      'the driest season, early in the year. During the city festivals, such as the George Town Festival, the city fills up.',
    costi:
      "The city itself is almost entirely free: the old town is walkable and the murals cost nothing. At Kek Lok Si you pay for the inclined lifts up to the statue; the Penang Hill funicular has a ticket, with prices on the official website.",
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
        consiglio: "Look for the murals but also for the craftsmen's workshops, and stop for a white coffee in an old coffee shop."
      },
      {
        nome: "Clan Jetties",
        testo: "Stilt villages where Chinese families, grouped by clan, have lived for generations. The best known is Chew Jetty, with wooden houses, small altars and shops.",
        come: "On foot from the George Town waterfront. It is a place where people live: walk quietly, ask before photographing.",
        quando: "In the morning or late afternoon.",
        tempo: "1 hour",
        consiglio: "Buy something from one of the shops along the pier: it is the only proper way to support those who live there."
      },
      {
        nome: "Kek Lok Si",
        testo: "A large Buddhist temple complex at the foot of Air Itam hill. The Ten Thousand Buddhas Pagoda has a Chinese base, a Thai middle section and a Burmese dome; higher up is a large bronze statue of Guanyin.",
        come: "Rapid Penang bus from George Town or taxi. Inclined lifts take you up to the statue.",
        quando: "In the morning; during Chinese New Year it is crowded with lanterns and worshippers.",
        tempo: "1.5 hours",
        costo: "entry to the complex free; the inclined lifts are paid separately",
        consiglio: "Go up to the Guanyin statue: the view over Penang is worth the steps."
      },
      {
        nome: "Cheong Fatt Tze Mansion (Blue Mansion)",
        testo: "The mansion of the merchant Cheong Fatt Tze, built between 1897 and 1904, with indigo walls made from lime and natural dye, inner courtyards and original furnishings. Its restoration received a UNESCO heritage conservation award.",
        come: "On foot from central George Town. Visits are by guided tour in English, at set times; the house is also a hotel.",
        quando: "In the morning, with the English-language tour.",
        tempo: "1 hour",
        url: "https://www.cheongfatttzemansion.com/",
        consiglio: "Arrive in time for the first tour: groups are small and the story is worth more than the rooms."
      },
      {
        nome: "Street of Harmony",
        testo: "A stretch of Jalan Masjid Kapitan Keling and around, where a mosque, a Chinese temple, a Hindu temple and an Anglican church stand close together. A real example of coexistence.",
        come: "On foot in the old town.",
        quando: "In the morning. Mosques are closed to non-Muslims during prayer.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Visit the Kapitan Keling Mosque outside prayer times, in covered clothing."
      },
      {
        nome: "Penang Hill",
        testo: "A hill above the city, reached by a funicular, with cooler air, a botanic garden and views over George Town and the mainland.",
        come: "By bus from Komtar or by taxi to the funicular station, then up by funicular.",
        quando: "Open daily from 6:15am to 9:45pm. In the morning there's less mist and shorter queues.",
        tempo: "3 hours",
        url: "https://www.penanghill.gov.my/",
        consiglio: "Go up early: in the afternoon the funicular queues are long."
      }
    ],
    programmi: [
      {
        titolo: "2 days",
        tappe: [
          "Day 1: morning on foot in the historic centre and Street of Harmony; lunch at a food centre; early afternoon Blue Mansion; late afternoon Clan Jetties; evening street dinner",
          "Day 2: morning Kek Lok Si; lunch in Air Itam (assam laksa); afternoon Penang Hill; free evening"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "As the two days, with the third devoted to eating: traditional breakfast, market, a tour in search of the best stalls, and a final dinner at a hawker centre"
        ]
      }
    ],
    zone: [
      {
        nome: "Historic centre of George Town",
        perChi: "anyone who wants to do everything on foot",
        testo: "Restored shophouses turned into guesthouses and small hotels. Very convenient, a bit noisy in the evening."
      },
      {
        nome: "Batu Ferringhi",
        perChi: "anyone looking for the sea and resorts",
        testo: "A strip of beach with large hotels. Mediocre sea, but the most convenient area for families."
      },
      {
        nome: "Komtar and Jalan Burma",
        perChi: "anyone who wants to save",
        testo: "Mid-range hotels, outside the tourist heart but a few minutes by bus or taxi."
      }
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
    comeArrivare:
      "Frequent buses from Kuala Lumpur, from the TBS terminal. From Malacca to Singapore there are direct buses, border included: it's the reason this city sits in the middle of almost every itinerary.",
    comeSpostarsi: 'The historic center is explored on foot. For the bus station, which is outside the city, you need a local bus or Grab.',
    periodoMigliore: 'all year, with the driest months early in the year. The Jonker Street night market is only on weekends, which affects the choice of days.',
    costi: "Baba & Nyonya Heritage Museum paid (prices on its website), St. Paul's and the Porta de Santiago free, river boat ride paid.",
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
        testo: "The Dutch centre of the city, with its brick-red buildings: Christ Church and the Stadthuys, the old seat of the Dutch government.",
        come: "On foot from the historic centre. The Stadthuys houses a history and ethnography museum.",
        quando: "In the morning, before the crowd.",
        tempo: "1 hour",
        consiglio: "Start here and go up to St. Paul by the side stairs."
      },
      {
        nome: "St. Paul's Hill and Porta de Santiago",
        testo: "On the hill stand the ruins of the church that began as a Portuguese chapel, with Dutch tombstones along the walls. At the foot is the Porta de Santiago, the last part of the A Famosa fortress.",
        come: "On foot, with a short climb. From the top you see the strait.",
        quando: "At sunset, with the light falling over the strait.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Read the gravestones: they are a summary of the city's history."
      },
      {
        nome: "Jonker Street",
        testo: "The main street of Chinatown, with antique shops, cafés and, on weekends, a crowded night market.",
        come: "On foot from the centre. The night market runs Friday, Saturday and Sunday evenings.",
        quando: "On weekdays to walk calmly; on weekends for the market.",
        tempo: "1-2 hours",
        consiglio: "Eating on Jonker is not always the best choice: try the side streets."
      },
      {
        nome: "Baba & Nyonya Heritage Museum",
        testo: "The house of a Peranakan family, preserved with its original furnishings: carved wood, porcelain and family photos. It tells the story of the Chinese-Malay community born from Chinese merchants marrying local women.",
        come: "On foot from Jonker Street.",
        quando: "Closed on Tuesdays. Other weekdays 10am-4:15pm, weekends 10am-4:45pm (2025).",
        tempo: "1 hour",
        url: "https://www.babanyonyamuseum.com/",
        consiglio: "Check hours and visiting arrangements on the website before going."
      },
      {
        nome: "Cheng Hoon Teng",
        testo: "A historic Chinese temple, still in use; in the nearby streets there are also a mosque and a Hindu temple: three cultures a few steps apart.",
        come: "On foot, in the old town, in the area known as Harmony Street.",
        quando: "In the morning.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Visit both on the same walk, with a covered head for the mosque."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Dutch Square and Stadthuys",
          "Late morning: St. Paul's Hill and Porta de Santiago",
          "Lunch: Nyonya cooking",
          "Early afternoon: Baba & Nyonya Museum",
          "Late afternoon: Cheng Hoon Teng and Harmony Street",
          "Evening: Jonker Street and the lit-up river"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above",
          "Day 2: morning wandering Chinatown on a weekday, river boat ride and return in the afternoon"
        ]
      }
    ],
    zone: [
      {
        nome: "Chinatown and Jonker Street",
        perChi: "anyone who wants to be at the heart of the city",
        testo: "Guesthouses in historic houses, many close to everything. Noisy on weekends."
      },
      {
        nome: "Riverside",
        perChi: "anyone looking for a river view",
        testo: "Hotels with river views, quieter. A bit farther from Jonker Street."
      }
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
        testo: "Hills covered in tea terraces as far as the eye can see. Some plantations have a tea room with a view.",
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
          "Day 1: arrive by boat from Kuala Tembeling, check in, night walk",
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
        testo: "The cable car climbs towards the top of Gunung Mat Cincang. From there you go down to the curved pedestrian bridge, hanging over the void, with views over sea, islands and forest.",
        come: "From the base station take the cable car to the top station, then the SkyGlide inclined lift or a path takes you to the bridge.",
        quando: "In the morning, when haze is lower and queues shorter.",
        tempo: "3 hours",
        url: "https://www.panoramalangkawi.com/",
        consiglio: "Go up at opening: around midday haze covers the view."
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
