import type { Destinazione } from '@/lib/types'

export const destinazioniEmiratiArabiUniti: Destinazione[] = [
  {
    slug: 'dubai',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 1,
    nome: "Dubai",
    tipologia: ['city', 'architecture', 'stopover'],
    giorniConsigliati: "24 hours for the essential stopover, 48 to see it properly",
    visitataPersonalmente: true,
    introduzione:
      "In 1960 it was a pearl divers' fishing port on the creek; today it has the tallest building in the world. It's also the busiest airport on the planet for international passengers: a great many pass through without getting off, while getting off, with the airlines' programs, often costs little or nothing.",
    percheAndarci:
      "It's the easiest stopover in the world: free visa on arrival, a metro from the airport, and in two days you see the Dubai of the photographs and the one almost no one looks for, with the creek, the wooden boats, the souks and the Deira neighborhoods where most of the residents live.",
    cosaVedere: [
      "The Burj Khalifa, 828 meters, with observation decks on floors 124-125 and 148",
      "Dubai Creek, with the abras (the wooden boats that ferry for one dirham) and the gold and spice souks in Deira",
      "The historic Al Fahidi district, with wind towers and houses of coral and gypsum",
      "The Dubai Fountain and the Dubai Mall, which is a city in itself",
      "Jumeirah Mosque, the only one open to non-Muslims, with guided tours",
      "The Museum of the Future, with Arabic calligraphy carved on its torus-shaped facade",
      "Alserkal Avenue, the art gallery district carved out of industrial warehouses",
    ],
    cosaFare: [
      "Cross the creek by abra and wander at random through the Deira souks (there's a dedicated experience page)",
      "Go up the Burj Khalifa at sunset, with a ticket bought online",
      "Desert safari with dinner and a night under the stars (there's a dedicated experience page)",
      "Eat in the Indian and Pakistani neighborhoods of Bur Dubai and Karama, where you eat better and spend less",
    ],
    doveDormire:
      "Deira and Bur Dubai for low prices, the metro and the real city; Downtown to be under the Burj Khalifa; Jumeirah and Marina for the beach. With an Emirates or Etihad stopover the program assigns the hotel and the choice doesn't arise.",
    doveMangiare:
      "Outside India, Dubai is one of the best places to eat the cuisine of the subcontinent, and it costs very little: in Karama, Bur Dubai and Deira you can have dinner for under ten euros in restaurants full of residents. Try the biryani, the Pakistani curries, the Afghan bread baked in the tandoor and, for local food, the machboos and the shawarma from street stalls. Real Emirati cooking is rare: the country is overwhelmingly inhabited by foreigners, and you see it first of all in the menus.",
    comeArrivare:
      "By plane to Dubai International (DXB), twenty minutes by metro from the center, or Al Maktoum (DWC), much farther away. From Abu Dhabi there are frequent buses, about 2 hours.",
    comeSpostarsi:
      "Metro with the Nol Card on the main axis, taxis and Careem for the rest, abra on the creek at one dirham a crossing. You can walk only in winter and only in certain areas: the city is made for cars.",
    periodoMigliore:
      "November to March. From June to September temperatures top 45 degrees (113 °F) with high humidity and life moves indoors: a summer stopover comes down to shopping malls and hotels.",
    costi:
      "Burj Khalifa from about 170 dirhams for floors 124-125, much more for 148 and for the sunset slots; abra 1 dirham; metro a few dirhams; desert safari 200-400 dirhams depending on the package. With Dubai Connect or the Etihad stopover the hotel comes off the bill.",
    erroriDaEvitare: [
      "Buying the Burj Khalifa ticket on the spot: it costs more, and the sunset slots sell out days ahead",
      "Stopping at the malls and the Marina: it's the Dubai everyone expects, and the least interesting. The creek, the souks and Al Fahidi are twenty minutes by metro",
      "Planning a stopover between June and September, when being outdoors is impossible",
      "Forgetting that alcohol is drunk only in licensed venues and that public drunkenness is an offense",
      "Counting on WhatsApp for calls: on local networks VoIP is limited, though messages go through",
    ],
    confronti: [
      {
        titolo: "Gulf airlines' stopover programs: how they really work",
        introduzione:
          "All the big Gulf airlines have a program to convince you to stop at their hub instead of changing planes in two hours, but they work in very different ways. The difference that matters is one: some are compensation for a long layover you're forced into, others are commercial products you choose. Confusing them is the quickest way to expect a free hotel and not get one.",
        opzioni: [
          {
            nome: "Emirates — Dubai Connect",
            sintesi: "Free hotel, meals, transfers and transit visa when the Dubai layover is long and unavoidable. It's compensation, not a tourist package.",
            costo: "free, but you don't choose: it's assigned",
            durata: "layovers of roughly 8 to 26 hours, with different thresholds depending on the travel class",
            pro: [
              "Completely free: room, meals, transfer and transit visa included",
              "Doesn't lengthen the trip: it applies to a layover you'd have anyway",
              "It also covers the visa, so no paperwork is needed beforehand",
            ],
            contro: [
              "Only applies if the Dubai layover is **the shortest available** on that route: anyone who deliberately chooses a later flight loses it",
              "Requires a single ticket issued on Emirates documents, with incoming and outgoing flights on Emirates (or Qantas codeshare)",
              "The hotel is assigned and may be far from the center: as a base for sightseeing it's worth little",
              "Between transfers and procedures the real free hours shrink considerably",
            ],
            perChi: "Anyone who already has a long, forced layover in Dubai and prefers a bed to the airport. It's not the program to build a visit on.",
          },
          {
            nome: "Emirates — Dubai Stopover (package)",
            sintesi: "The separate commercial product: discounted hotels and an easier visa for anyone who decides to stop for one or more days.",
            costo: "paid, with discounted rates compared to booking independently",
            durata: "one or more nights, your choice",
            pro: ["Hotel and length are chosen", "Lower prices than booking separately", "Can be combined with the ticket in a single booking"],
            contro: ["It's not free, and it's often confused with Dubai Connect", "Should be compared with the price of an independent booking, because it isn't always the lowest"],
            perChi: "Anyone who chooses to stop in Dubai and wants the convenience of a single booking.",
          },
          {
            nome: "Etihad — Abu Dhabi Stopover",
            sintesi: "One or two nights of free hotel in Abu Dhabi for anyone who deliberately adds a stop to a round-trip ticket.",
            costo: "free hotel for one or two nights; flights, transfers and meals are at your own expense",
            durata: "stop of at least 24 hours, 1 or 2 nights",
            pro: [
              "It's free and, unlike Dubai Connect, **you choose it**: you add it while booking on the Etihad site",
              "Abu Dhabi can be seen well in two days: Grand Mosque, Louvre and the Liwa desert within reach",
              "Can be combined with Dubai, two hours away by bus",
            ],
            contro: [
              "Requires a round-trip booking with the stop declared: it doesn't apply to just any layover",
              "The hotel has to be booked a few days before the flight, not at the last minute",
              "Requires the visa for the Emirates or the right to receive it on arrival; for Italians it's not a problem, because at the airport it's free",
            ],
            perChi: "Anyone flying Etihad who wants to add two real days of sightseeing without paying for the hotel. It's the program with the best balance of being free and being flexible.",
          },
          {
            nome: "Qatar Airways — Stopover in Doha",
            sintesi: "Four- and five-star hotels at token prices for anyone stopping in Doha between flights, to be booked on the Discover Qatar portal.",
            costo: "four stars from about $14 per person per night, five stars from $20-30: a fraction of normal Doha prices",
            durata: "1 to 4 nights, with a layover between 12 and 96 hours",
            pro: [
              "The best value for money of all the Gulf programs",
              "Valid for Qatar Airways, codeshare and oneworld tickets, so for a great many passengers",
              "Hotel and number of nights are chosen, and Doha is easily visited in two days",
              "For Italians the visa on arrival is free: no paperwork beforehand",
            ],
            contro: [
              "It's not free, although it comes close",
              "Booked on a separate portal with the flight booking code: an extra step many don't know about",
              "In peak periods the best properties run out",
            ],
            perChi: "Anyone flying Qatar Airways who isn't in a hurry. At these prices not stopping is almost a choice against your own interests.",
          },
          {
            nome: "Saudia and flynas — stopover visa for Saudi Arabia",
            sintesi: "Not a hotel but a visa: anyone flying Saudia or flynas gets a free stopover visa, also valid for tourism, to stay in the Kingdom for up to 4 days.",
            costo: "the visa is free, apart from administrative fees and the mandatory health insurance",
            durata: "visa valid three months, stay up to 4 days",
            pro: [
              "Saves the ordinary tourist visa, which costs around 130 euros",
              "Requested online after buying the ticket and arrives by email in a short time",
              "Four days are enough for Jeddah plus AlUla, the heart of the country",
              "It also allows Umrah, for those who are Muslim",
            ],
            contro: [
              "Doesn't include the hotel: it's an entry facilitation, not a package",
              "Ties you to the airline: valid only when flying Saudia or flynas",
              "Four days is little for such a large country, where you need domestic flights to get around",
            ],
            perChi: "Anyone who wants to see Saudi Arabia without committing to a long trip, or try it before returning with the annual visa.",
          },
        ],
        raccomandazione:
          "One rule is enough to find your way: **Dubai Connect is compensation, all the others are choices**. If you have the long Dubai layover anyway, Dubai Connect is found money and shouldn't be left on the table. If instead you're deciding where to stop, the best is Qatar Airways (at fourteen dollars a night in a four-star there's no contest), followed by Etihad, which is free but requires a round-trip booking. The Saudi stopover visa is a case apart: it doesn't give you a bed, it gives you entry to a country whose visa otherwise costs a hundred and thirty euros, and it's the cheapest way to see Hegra. In any case the conditions should be rechecked on the official sites before booking, because these programs change often and without notice.",
      },
    ],
    miaEsperienza:
      "Dubai is the easiest city in the world to dismiss, and after two days that judgment struck me as lazy. The skyline and the malls are just as you imagine them. The Burj Khalifa impresses with its numbers and a bit less in person: a line, an elevator, a glass wall. But twenty minutes by metro there's another city nobody looks for. The creek is still a real commercial port, with wooden boats loaded to the brim with appliances bound for Iran and India; the abra that crosses it costs one dirham, you sit among people going to work and step off on the other side in the spice souk. Al Fahidi, with its wind towers and gypsum alleys, shows what this place was like when pearls were the only economy. And then there's the fact that explains the city better than any skyscraper: Emiratis are barely over ten percent of the people who live there, and in the evening in the Pakistani restaurants of Karama you eat very well for eight euros, among workers, drivers and families. That, more than the Burj, is Dubai.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Dubai Creek, abra and Deira souqs",
        "testo": "The old trading port, still active, with wooden boats loaded with goods for Iran and India. The abra, the wooden ferry, crosses the creek for one dirham and lands at the spice souq and the gold souq.",
        "come": "Metro to Al Ras or Al Ghubaiba, then on foot to the abra stops.",
        "quando": "Morning or late afternoon, less heat.",
        "tempo": "2-3 hours",
        "costo": "Abra 1 dirham",
        "consiglio": "Sit on the abra among people going to work: it is the part of Dubai nobody looks for."
      },
      {
        "nome": "Al Fahidi",
        "testo": "The historic district with wind towers, coral and gypsum houses and narrow alleys, where you understand what the place was like when pearls were the economy. There are museums and cafes.",
        "come": "Metro to Al Fahidi, 20 minutes from the new center.",
        "quando": "Morning, before the heat.",
        "tempo": "1-2 hours",
        "consiglio": "It combines well with the creek tour in the same morning."
      },
      {
        "nome": "Burj Khalifa",
        "testo": "The tallest skyscraper in the world, 828 meters. The terraces on floors 124-125 and 148 give views of the city and the desert.",
        "come": "Metro to Burj Khalifa/Dubai Mall. Ticket to buy online.",
        "quando": "Sunset, with time slots to book days ahead.",
        "tempo": "1-1.5 hours",
        "url": "https://www.burjkhalifa.ae/",
        "consiglio": "Buy online: on site it costs more and the sunset slots run out."
      },
      {
        "nome": "Desert safari",
        "testo": "An evening in a 4x4 on the dunes, with sunset, dinner in a tented camp and a night under the stars. It is the most sold \"desert\" experience around Dubai.",
        "come": "Operators with hotel pickup. Modest dunes half an hour from the city.",
        "quando": "Afternoon and evening, from October to April.",
        "tempo": "5-6 hours",
        "consiglio": "For the real desert you need Liwa and the Rub' al-Khali."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: creek, abra and Deira souqs",
          "Lunch in Karama or Bur Dubai",
          "Afternoon: Al Fahidi",
          "Sunset: Burj Khalifa, then the Dubai Mall fountain"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as above",
          "Day 2: desert safari or a day in Abu Dhabi"
        ]
      }
    ],
    zone: [
      {
        "nome": "Deira / Bur Dubai",
        "perChi": "those who want old Dubai and to spend less",
        "testo": "Mid-range hotels near the creek and souqs. Noisy, but with cheap restaurants."
      },
      {
        "nome": "Downtown",
        "perChi": "those who want to be under the Burj Khalifa",
        "testo": "Luxury hotels and malls. Expensive and anonymous."
      },
      {
        "nome": "Marina / JBR",
        "perChi": "those who want beach and skyscrapers",
        "testo": "Modern and touristy, far from historic Dubai."
      }
    ],
    sapori: [
      {
        "nome": "Biryani and Pakistani curries",
        "testo": "In Karama, Bur Dubai and Deira you dine for under ten euros in places full of residents."
      },
      {
        "nome": "Machboos",
        "testo": "Spiced rice with meat or fish, Emirati cuisine."
      },
      {
        "nome": "Shawarma",
        "testo": "From street stalls, all day."
      },
      {
        "nome": "Afghan bread",
        "testo": "Baked in the tandoor, hot."
      }
    ],
    attenzioni: [
      "Buying the Burj Khalifa ticket on site: it costs more and sunset slots run out days ahead.",
      "Stopping at the malls and the Marina: the most interesting part is the creek, souqs and Al Fahidi, twenty minutes by metro.",
      "Stopover in summer: from June to September temperatures exceed 45 degrees and life is indoors.",
      "Rules on dress, alcohol and public behavior: check the official channels."
    ],
    // GUIDA-END
    esperienzeSlugs: ['creek-souq-dubai', 'deserto-emirati'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "The Dubai skyline with the Burj Khalifa at sunset, seen from afar across the water",
    immagine: '/images/emirati-arabi-uniti/dubai.jpg',
  },
  {
    slug: 'abu-dhabi',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 2,
    nome: "Abu Dhabi",
    tipologia: ['city', 'architecture', 'museums'],
    giorniConsigliati: "1-2 days",
    visitataPersonalmente: true,
    introduzione:
      "The capital of the Emirates is lower, greener and much less frenetic than Dubai. Two buildings are enough to justify the detour: the Sheikh Zayed Grand Mosque, with columns inlaid with mother-of-pearl and the largest hand-knotted carpet in the world, and Jean Nouvel's Louvre, beneath a perforated dome that filters light like a palm grove.",
    percheAndarci:
      "It's the destination of Etihad's free stopover, and in two days it shows a more measured and more interesting version of the Emirates than Dubai does. In addition, the Liwa desert is a couple of hours away.",
    cosaVedere: [
      "The Sheikh Zayed Grand Mosque, open to non-Muslims with precise dress rules",
      "The Louvre Abu Dhabi, on Saadiyat Island, with its dome of 7,850 overlapping metal stars",
      "Qasr Al Watan, the presidential palace open to the public, and Qasr Al Hosn, the oldest fort in the city",
      "The Corniche and the Al Mina district, with the fish market",
      "The Zayed National Museum and the Saadiyat cultural district, which keeps growing",
      "Yas Island, with the Formula 1 circuit and the theme parks",
    ],
    cosaFare: [
      "Visit the Grand Mosque in the late afternoon, when the white turns pink and then blue (there's a dedicated experience page)",
      "The Louvre Abu Dhabi, better in the evening, when the light under the dome changes",
      "An excursion to the Liwa dunes, the tallest in the country",
      "The Al Mina fish market, where you buy at the stall and have it cooked next door",
    ],
    doveDormire:
      "The Corniche and the center are convenient and well connected; Saadiyat is the area of museums and beaches; Yas the one of parks and the circuit. With the Etihad stopover the hotel is included and you choose among the partner properties.",
    doveMangiare:
      "As in Dubai, the best and cheapest food is that of the Indian subcontinent, in the neighborhoods around the center. For fish you go to the Al Mina market: you choose it at the stall and take it to the restaurants next door, which cook it for a few dirhams. Real Emirati cooking is found in a few dedicated places: try the machboos, luqaimat as dessert and karak chai, the spiced milk tea drunk here at all hours.",
    comeArrivare:
      "By plane to Abu Dhabi Zayed International (AUH), Etihad's hub. From Dubai there are frequent buses, about 2 hours, or a taxi.",
    comeSpostarsi:
      "There's no metro: you use taxis and Careem, which are cheap, or city buses. Between the center, Saadiyat and Yas distances are large, and for much of the year walking isn't an option.",
    periodoMigliore: "November to March, as across the Gulf. In autumn the Formula 1 Grand Prix fills the city.",
    costi:
      "Grand Mosque free; Louvre Abu Dhabi around 65 dirhams; Qasr Al Watan about 65. Overall a day in Abu Dhabi costs much less than one in Dubai.",
    erroriDaEvitare: [
      "Showing up at the Grand Mosque dressed the wrong way: arms and legs covered for everyone, head covered for women. Abayas can be borrowed, but with long lines, and at certain times entry is limited",
      "Visiting the mosque at noon: the white marble reflects glare and hurts the eyes, and it's also the worst time for photos",
      "Rushing through the Louvre: the dome and the light filtering beneath it are half the work, and need to be looked at slowly",
      "Taking a metro like Dubai's for granted: there isn't one here, and distances are large",
    ],
    miaEsperienza:
      "Abu Dhabi is the surprise of the Emirates, especially if you arrive after Dubai: lower, slower, with space between one building and the next. At the Grand Mosque the records (the largest hand-knotted carpet in the world, the Swarovski crystal chandeliers, eighty-two domes) make you fear excess, and yet it works. The white columns inlaid with floral motifs in mother-of-pearl have a delicacy the numbers don't let you imagine. The right moment is the late afternoon, when the marble goes from white to pink and then, with the night lighting, to blue. The other highlight is the Louvre, where the building is worth as much as the collection: beneath the dome pierced by almost eight thousand overlapping metal stars falls a light that shifts and breaks apart all day, what Nouvel calls a rain of light. You sit beneath it and stay there. Two days are enough, and with the Etihad stopover you don't pay for the hotel.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Sheikh Zayed Grand Mosque",
        "testo": "Eighty-two domes, white columns inlaid with mother-of-pearl, the largest hand-knotted carpet in the world and Swarovski chandeliers. It is open to non-Muslims.",
        "come": "Taxi or Uber. Free entry, with dress rules: arms and legs covered, head covered for women (abayas on loan).",
        "quando": "Late afternoon, when the marble goes from white to pink and then blue. At midday the white dazzles.",
        "tempo": "1-1.5 hours",
        "costo": "Free entry",
        "url": "https://www.szgmc.gov.ae/",
        "consiglio": "Hours for non-Muslims vary, especially on Friday: check the site."
      },
      {
        "nome": "Louvre Abu Dhabi",
        "testo": "Jean Nouvel's museum on Saadiyat Island, under a dome pierced by 7,850 overlapping metal stars that rains light. The building is worth as much as the collection.",
        "come": "Taxi or Uber from Abu Dhabi.",
        "quando": "Evening, when the light under the dome changes.",
        "tempo": "2-3 hours",
        "url": "https://www.louvreabudhabi.ae/",
        "consiglio": "Sit under the dome and stay a while."
      },
      {
        "nome": "Qasr Al Watan",
        "testo": "The presidential palace open to the public, with decorated halls, the Council hall and an exhibition on power in the Emirates.",
        "come": "Taxi or Uber.",
        "quando": "Morning.",
        "tempo": "1.5-2 hours",
        "url": "https://www.qasralwatan.ae/"
      },
      {
        "nome": "Al Mina fish market",
        "testo": "The port market: you pick fish at the counter and take it to the restaurants next door, which cook it for a few dirhams.",
        "come": "Taxi from the center.",
        "quando": "Early morning or late afternoon.",
        "tempo": "1 hour"
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Grand Mosque in late afternoon, dinner on the Corniche",
          "Day 2: Qasr Al Watan in the morning, Louvre Abu Dhabi in the evening"
        ]
      }
    ],
    zone: [
      {
        "nome": "Corniche / center",
        "perChi": "those who want to be in the city",
        "testo": "Hotels with sea views and restaurants nearby."
      },
      {
        "nome": "Saadiyat",
        "perChi": "those who want museums and beach",
        "testo": "Resorts and the Louvre, more isolated and expensive."
      }
    ],
    sapori: [
      {
        "nome": "Indian and Pakistani cuisine",
        "testo": "The best and cheapest, in the districts around the center."
      },
      {
        "nome": "Al Mina fish",
        "testo": "Chosen at the counter and cooked next door."
      },
      {
        "nome": "Machboos",
        "testo": "Spiced rice with meat or fish, Emirati cuisine."
      },
      {
        "nome": "Luqaimat",
        "testo": "Sweet fried dumplings with date syrup."
      }
    ],
    attenzioni: [
      "At the Grand Mosque dressed wrongly: arms and legs covered for all, head covered for women; the borrowed abayas have long queues.",
      "Visiting the mosque at midday: the marble dazzles and cooks.",
      "Book the Louvre ahead on weekends.",
      "Autumn: the Formula 1 Grand Prix fills the city."
    ],
    // GUIDA-END
    esperienzeSlugs: ['moschea-sheikh-zayed', 'louvre-abu-dhabi'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "The skyscrapers of Abu Dhabi's waterfront seen from the sea, with a sailboat",
    immagine: '/images/emirati-arabi-uniti/abu-dhabi.jpg',
  },
  {
    slug: 'liwa-al-ain',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 3,
    nome: "Liwa and Al Ain",
    tipologia: ['desert', 'nature', 'oasis'],
    giorniConsigliati: "1-2 days, as an extension from Abu Dhabi",
    visitataPersonalmente: false,
    introduzione:
      "The interior. To the south is the Liwa oasis, on the edge of the Rub' al-Khali, the Empty Quarter, the largest continuous sand desert in the world, with dunes that exceed 250 meters. To the east is Al Ain, the UNESCO-listed “garden city,” with palm oases irrigated by the falaj, underground channels two thousand years old.",
    percheAndarci:
      "It's the only way to see the real desert, and not its evening-safari version at the gates of Dubai. And Al Ain shows how people lived here before oil: an agricultural oasis with an irrigation system that still works.",
    cosaVedere: [
      "The Moreeb dunes, among the tallest in the world, in the Liwa area",
      "The edge of the Rub' al-Khali, the largest continuous sand desert on the planet",
      "The Al Ain oasis, a UNESCO site, with 147,000 palms and the falaj channels still in use",
      "Al Jahili Fort and the archaeological sites of Hili, with Bronze Age tombs",
      "Jebel Hafeet, the mountain with the scenic road and the view over the oasis",
    ],
    cosaFare: [
      "A night in the desert at Liwa, far more authentic than the evening safaris around Dubai",
      "Dawn over the Moreeb dunes",
      "Walking in the Al Ain oasis along the irrigation channels, in the shade of the palms",
      "Driving up Jebel Hafeet, through the hairpin bends, to the viewpoint at the top",
    ],
    doveDormire:
      "In Liwa there are few resorts in the desert, expensive and to be booked in advance; Al Ain has the normal offering of a city. Almost everyone comes from Abu Dhabi for the day, and it's the choice that makes you miss the best part: the night.",
    doveMangiare:
      "Outside the resorts there are neighborhood restaurants, almost all Indian or Pakistani, good and cheap. In Al Ain it's worth looking for the local dates, the oasis's agricultural product, sold in specialized markets.",
    comeArrivare:
      "From Abu Dhabi it's about 2 hours by road to Liwa and 1 hour 30 minutes to Al Ain. You need a rental car or a transfer: public transport exists but is impractical, and for the dunes you need a 4x4 with a guide anyway.",
    comeSpostarsi: "By your own car on paved roads; on the dunes only in a 4x4 with an experienced driver. Anyone driving on sand without experience usually gets stuck.",
    periodoMigliore:
      "November to March, and even then nights in the desert are cold. In summer the interior often tops 50 degrees (122 °F).",
    costi: "Al Ain oasis and forts free or nearly so; the expensive item is the resorts in the desert.",
    erroriDaEvitare: [
      "Mistaking an evening safari around Dubai for the desert: those are done on small dunes half an hour from the city, here you're on the edge of the Rub' al-Khali",
      "Driving on sand without experience and without a second vehicle: it's the most common way of ending up in trouble",
      "Coming for the day and skipping the night, which is why you come all this way",
      "Underestimating the cold of winter nights in the desert",
    ],
    miaEsperienza:
      "I haven't been there yet, so this page sticks to the facts and doesn't tell about a day that didn't happen. It's on the list for a specific reason. What Dubai and Abu Dhabi sell as a “desert safari” is done on modest dunes half an hour from the city, with quad bikes, dinner in a tent camp and a return in the evening. The Rub' al-Khali is something else, the largest continuous sand desert in the world, with dunes over two hundred meters at Moreeb, and it's two hours from Abu Dhabi: a two-day extension is enough. The other half of the detour is Al Ain, which is the opposite: a UNESCO oasis with a hundred and forty-seven thousand palms irrigated by channels dug two thousand years ago and still working, where you walk in the shade and hear the water flowing. Together they tell what this country was like before oil, which is exactly what's missing from a stopover made only of cities.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Moreeb dunes and Liwa",
        "testo": "The edge of the Rub' al-Khali, the largest continuous sand desert in the world, with dunes over two hundred meters at Moreeb. There are no evening safaris here: you need a night in the desert.",
        "come": "By car or on a tour from Abu Dhabi, about two hours; off track you need an experienced 4x4.",
        "quando": "Dawn and sunset.",
        "tempo": "1-2 days",
        "consiglio": "Do not drive on sand without experience and without a second vehicle."
      },
      {
        "nome": "Al Ain Oasis",
        "testo": "A UNESCO site, with 147,000 palms irrigated by falaj channels dug two thousand years ago and still working. You walk in the shade hearing the water flow.",
        "come": "Al Ain is about 1.5 hours from Abu Dhabi. The oasis is toured on foot.",
        "quando": "Morning.",
        "tempo": "2 hours"
      },
      {
        "nome": "Al Jahili Fort and the Hili sites",
        "testo": "The mud-brick fort and the Bronze Age tombs of Hili, a UNESCO site.",
        "come": "By car from Al Ain.",
        "quando": "Morning.",
        "tempo": "2 hours"
      },
      {
        "nome": "Jebel Hafeet",
        "testo": "A mountain with a switchback road to the viewpoint at the top, over a thousand meters.",
        "come": "By car from Al Ain.",
        "quando": "Sunset.",
        "tempo": "1-2 hours"
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Abu Dhabi to Liwa, night in the desert",
          "Day 2: dawn on the Moreeb dunes, then Al Ain, oasis and fort"
        ]
      }
    ],
    zone: [
      {
        "nome": "Camps and resorts at Liwa",
        "perChi": "those who want the real desert",
        "testo": "A few resorts, some luxury, in the middle of the dunes."
      },
      {
        "nome": "Al Ain",
        "perChi": "those who want the oasis",
        "testo": "City hotels and cheap Indian and Pakistani restaurants."
      }
    ],
    sapori: [
      {
        "nome": "Al Ain dates",
        "testo": "The oasis product, in specialized markets."
      },
      {
        "nome": "Indian and Pakistani cuisine",
        "testo": "In neighborhood restaurants, good and cheap."
      },
      {
        "nome": "Machboos",
        "testo": "Emirati cuisine."
      },
      {
        "nome": "Arabic coffee",
        "testo": "With cardamom."
      }
    ],
    attenzioni: [
      "Mistaking an evening safari for the desert: those are done on small dunes half an hour from Dubai.",
      "Driving on sand without experience and without a second vehicle.",
      "Coming for the day and skipping the night, which is the reason to go to Liwa.",
      "In summer inland temperatures often exceed 50 degrees."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: "The desert plain around Al Ain seen from the slopes of Jebel Hafeet, in the haze",
    immagine: '/images/emirati-arabi-uniti/liwa-al-ain.jpg',
  },
]
