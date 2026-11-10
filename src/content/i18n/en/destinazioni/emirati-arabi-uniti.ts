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
      "By plane to Dubai International (DXB). From terminals 1 and 3 the Red Line metro reaches Downtown in 20-30 minutes for about 5-7.50 AED on a Nol card bought at the station, from about 5am to midnight; terminal 2 is not served. An RTA metered taxi costs about 60-90 AED, including the 25 AED airport flag fall; Uber and Careem also work. Al Maktoum (DWC) is much farther out. From Abu Dhabi there are frequent buses, about 2 hours.",
    comeSpostarsi:
      "Metro with the Nol Card on the main axis, taxis and Careem for the rest, abra on the creek at one dirham a crossing. You can walk only in winter and only in certain areas: the city is made for cars.",
    periodoMigliore:
      "November to March. From June to September temperatures top 45 degrees (113 °F) with high humidity and life moves indoors: a summer stopover comes down to shopping malls and hotels.",
    costi:
      "Indicative daily budget per person, hotel included: low €70-100 (Deira, metro, subcontinental food), mid €150-250, high over €400. Burj Khalifa from about 170 dirhams for floors 124-125, much more for 148 and for the sunset slots; abra 1 dirham; metro a few dirhams; desert safari 200-400 dirhams depending on the package. With Dubai Connect or the Etihad stopover the hotel comes off the bill.",
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
        "testo": "The old trading port, still active, with wooden boats loaded with goods. The abra, the wooden ferry, crosses the creek for 1 dirham, paid to the boatman, and lands near the spice souq and the gold souq.",
        "come": "Metro Green Line to Al Ras or Al Ghubaiba, then walk to the abra stations.",
        "quando": "Morning or late afternoon, less heat.",
        "tempo": "2-3 hours",
        "costo": "1 AED per crossing, about €0.25, paid to the boatman (2026)",
        "lat": 25.26749,
        "lng": 55.29708,
        "consiglio": "Sit on the abra among people going to work: it is the part of Dubai nobody looks for."
      },
      {
        "nome": "Al Fahidi",
        "testo": "The historic district built from the late 19th century by merchants from Persia, with wind towers and narrow lanes, now restored. It shows what Dubai was like before oil. There are small museums, such as the coffee museum, and cafés in the courtyards.",
        "come": "Metro to Sharaf DG or Al Ghubaiba, then on foot.",
        "quando": "Morning, before the heat.",
        "tempo": "1-2 hours",
        "costo": "Free entry to the district",
        "lat": 25.26423,
        "lng": 55.30017,
        "consiglio": "It combines well with the creek tour in the same morning."
      },
      {
        "nome": "Burj Khalifa",
        "testo": "The tallest building in the world, 828 metres. The At the Top decks on floors 124-125 and At the Top Sky on floor 148 look over the city and the desert.",
        "come": "Metro Red Line to Burj Khalifa/Dubai Mall. Timed ticket, best bought online.",
        "quando": "Sunset, the most requested slot: book it ahead.",
        "tempo": "1-1.5 hours",
        "costo": "Floors 124-125 from about 170 AED, about €40; floor 148 and the sunset slots cost more (2026)",
        "lat": 25.19703,
        "lng": 55.27413,
        "url": "https://www.burjkhalifa.ae/",
        "consiglio": "Book online before you go: the sunset slots sell out first."
      },
      {
        "nome": "Dubai Mall and Dubai Fountain",
        "testo": "The mall at the foot of the Burj Khalifa is an air-conditioned city, with an aquarium, an ice rink and hundreds of shops. On the artificial lake in front, in the evening, the fountain dances to music with jets as tall as a building. It is the Dubai of the photographs, and worth seeing once.",
        "come": "Metro Red Line to Burj Khalifa/Dubai Mall, then the covered walkway.",
        "quando": "Evening, when the fountain shows follow one another.",
        "tempo": "1.5-2 hours",
        "costo": "Entry and fountain show free",
        "lat": 25.19512,
        "lng": 55.27517,
        "consiglio": "Pair it with the Burj Khalifa at sunset: once down from the tower, watch the fountain from the lakeside."
      },
      {
        "nome": "Al Shindagha Museum",
        "testo": "Dubai's history museum, spread across a series of restored traditional houses at the mouth of the creek, where the ruling family lived. It tells how a pearl-diving village became a port and then a metropolis, and has a section on perfume and incense.",
        "come": "Metro Green Line to Al Ghubaiba, then walk along the creek.",
        "quando": "The hot hours: it is indoors and links well with Al Fahidi.",
        "tempo": "1.5-2 hours",
        "costo": "50 AED, about €12 (official 2024 rate)",
        "lat": 25.26643,
        "lng": 55.28945,
        "url": "https://dubaiculture.gov.ae/"
      },
      {
        "nome": "Jumeirah Mosque",
        "testo": "One of the few mosques in Dubai open to non-Muslims, in white stone and Fatimid style. Visits are run by the Sheikh Mohammed Centre for Cultural Understanding, with Arabic coffee and open questions about Islam and life in the Emirates.",
        "come": "Taxi or Careem to Jumeirah Road; you register at the majlis opposite the mosque. Covering clothes, headscarf for women.",
        "quando": "Morning, with the guided visit booked on the centre's website.",
        "tempo": "1-1.5 hours",
        "lat": 25.23406,
        "lng": 55.26548,
        "url": "https://www.cultures.ae/",
        "consiglio": "It is the right place to ask the questions that would seem nosy elsewhere."
      },
      {
        "nome": "Dubai Frame",
        "testo": "A frame about 150 metres high in Zabeel Park, with a bridge at the top partly floored with glass: to the north you look at old Dubai, Deira and Karama, to the south the towers of Sheikh Zayed Road. One section tells the city's history.",
        "come": "Taxi to the Zabeel Park entrance.",
        "quando": "Late afternoon, to see the city in daylight and then lit up.",
        "tempo": "1 hour",
        "costo": "50 AED, about €12; children 3-12 20 AED (2026)",
        "orari": "Daily 9am-9pm; shorter hours during Ramadan and public holidays (2026).",
        "lat": 25.23546,
        "lng": 55.30037,
        "url": "https://www.dubaiframe.ae/",
        "consiglio": "The view over Deira, which you do not see well from the Burj, is the reason to go up."
      },
      {
        "nome": "Museum of the Future",
        "testo": "The ring-shaped building on Sheikh Zayed Road, clad in 1,024 steel panels that form Arabic calligraphy. Inside, five floors of exhibits framed as a journey to 2071: a space station, a floor on nature, one on wellbeing. It is worth it above all for the architecture, which you can photograph from outside without going in.",
        "come": "Metro Red Line to Emirates Towers.",
        "quando": "As of November 2026 the museum is temporarily closed for a new set-up: check the official website before going. In the evening the lit calligraphy looks better in photos.",
        "tempo": "1.5-2 hours",
        "orari": "Temporarily closed in November 2026 while it prepares a new exhibition (official site).",
        "lat": 25.21915,
        "lng": 55.28187,
        "url": "https://museumofthefuture.ae/",
        "consiglio": "If it is still closed, the building alone is worth a stop outside."
      },
      {
        "nome": "Alserkal Avenue",
        "testo": "The art-gallery district carved out of the industrial warehouses of Al Quoz, with contemporary shows, cafés and design shops. It is the opposite of the usual image of Dubai, and shows the art scene of the Gulf and the Middle East.",
        "come": "By taxi: the metro is far away.",
        "quando": "Morning or early afternoon; not every gallery opens every day, so check the website.",
        "tempo": "2 hours",
        "costo": "Free entry",
        "lat": 25.14187,
        "lng": 55.22558,
        "url": "https://alserkal.online/"
      },
      {
        "nome": "Etihad Museum",
        "testo": "The museum built next to Union House, where on 2 December 1971 the rulers signed the birth of the United Arab Emirates. The building is shaped like an open manuscript and tells, with documents and film, how seven emirates became one state.",
        "come": "Taxi along Jumeirah Road; pair it with Jumeirah Mosque, a few minutes away.",
        "quando": "The hot hours.",
        "tempo": "1.5 hours",
        "costo": "25 AED, about €6 (official 2024 rate)",
        "lat": 25.23921,
        "lng": 55.26933,
        "url": "https://dubaiculture.gov.ae/"
      },
      {
        "nome": "Kite Beach and Burj Al Arab",
        "testo": "A long public beach with facilities at Umm Suqeim, with a running track, kiosks and kitesurfing, and the sail-shaped Burj Al Arab hotel in the background. It is the simplest swim in Dubai without paying for a beach club.",
        "come": "Taxi along Jumeirah Road.",
        "quando": "Late afternoon, with the sun setting behind the Burj Al Arab; swimming from October to April.",
        "tempo": "2 hours",
        "costo": "Free beach",
        "lat": 25.163,
        "lng": 55.20672
      },
      {
        "nome": "Palm Jumeirah and The View",
        "testo": "The palm-shaped artificial island, with villas on the fronds and the Atlantis at the far end. The shape only makes sense from above: The View deck, on the 52nd floor of The Palm Tower, shows it whole.",
        "come": "Taxi, or the Palm monorail from Palm Gateway station.",
        "quando": "Afternoon, with low light.",
        "tempo": "1.5 hours",
        "costo": "The View: standard ticket 80-115 AED, about €19-27, depending on the slot (2026)",
        "orari": "The View: daily 9am-7pm (2026).",
        "lat": 25.11806,
        "lng": 55.13333,
        "url": "https://www.theviewpalm.ae/"
      },
      {
        "nome": "Dubai Marina and JBR",
        "testo": "An artificial canal lined with skyscrapers, with a pedestrian promenade of restaurants and boats, opening onto the beach at Jumeirah Beach Residence. It is modern, touristy Dubai, pleasant in the evening.",
        "come": "Metro Red Line to the Marina stops, or the Dubai Tram that runs through it.",
        "quando": "Evening, when the towers light up.",
        "tempo": "2 hours",
        "costo": "Promenade and beach free",
        "lat": 25.08135,
        "lng": 55.14408
      },
      {
        "nome": "Desert safari",
        "testo": "An evening in a 4x4 on the dunes, with sunset, dinner in a desert camp and a night under the stars. It is one of the most popular \"desert\" experiences sold around Dubai.",
        "come": "Operators with hotel pickup. The dunes used for evening safaris are a short drive from the city.",
        "quando": "Afternoon and evening, in the cooler months.",
        "tempo": "5-6 hours",
        "costo": "200-400 AED, about €47-95, depending on the package (2026)",
        "consiglio": "For the real desert you need Liwa and the Rub' al-Khali."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Al Fahidi and Al Shindagha Museum, then the abra across the creek",
          "Midday: spice and gold souqs in Deira, lunch in Bur Dubai or Karama",
          "Afternoon: Dubai Frame for the view over Deira",
          "Sunset: Burj Khalifa, then the fountain in front of Dubai Mall"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan",
          "Day 2, morning: Jumeirah Mosque with the guided visit and Etihad Museum",
          "Day 2, midday: Alserkal Avenue",
          "Day 2, afternoon and evening: desert safari, or Kite Beach at sunset and dinner at the Marina"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2: as above",
          "Day 3: day trip to Abu Dhabi for the Grand Mosque and the Louvre, or to Sharjah for its museums and old town",
          "Evening: Palm Jumeirah and The View, then Dubai Marina"
        ]
      }
    ],
    zone: [
      {
        "nome": "Deira / Bur Dubai",
        "perChi": "those who want old Dubai and to spend less",
        "testo": "Mid-range hotels near the creek and souqs. Noisy, but with cheap restaurants.",
        "fascia": "50-140 €"
      },
      {
        "nome": "Downtown",
        "perChi": "those who want to be under the Burj Khalifa",
        "testo": "Luxury hotels and malls. Expensive and anonymous.",
        "fascia": "180-450 €"
      },
      {
        "nome": "Marina / JBR",
        "perChi": "those who want beach and skyscrapers",
        "testo": "Modern and touristy, far from historic Dubai.",
        "fascia": "130-350 €"
      },
      {
        "nome": "Jumeirah / Umm Suqeim",
        "perChi": "those who want the sea without the towers",
        "testo": "Low-rise villas, public beaches and luxury resorts around the Burj Al Arab. You need a taxi for everything.",
        "fascia": "150-500 €"
      }
    ],
    sapori: [
      {
        "nome": "Biryani and Pakistani curries",
        "testo": "In Karama, Bur Dubai and Deira you eat cheaply in places full of residents."
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
      "Leaving the Burj Khalifa to the last minute: sunset slots sell out days ahead.",
      "Stopping at the malls and the Marina: the most interesting part is the creek, the souqs and Al Fahidi, all reachable by metro.",
      "A summer stopover: from June to September it is extremely hot and life moves indoors.",
      "Rules on dress, alcohol and public behavior: check the official channels.",
      "Regional tensions: European governments warn of possible flight cancellations and airspace closures at short notice (gov.uk, October 2026). Check your government's travel advice before leaving."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Abu Dhabi",
        "distanza": "about 2 hours by bus, 140 km",
        "come": "Frequent buses from Dubai, or a taxi or car with driver for the day.",
        "testo": "The Sheikh Zayed Grand Mosque in the late afternoon and the Louvre Abu Dhabi are enough to justify the day. Better still, spend a night there (there is a dedicated page)."
      },
      {
        "nome": "Sharjah",
        "distanza": "30-60 minutes by taxi depending on traffic",
        "come": "Taxi or Careem from Deira; at rush hour traffic between the two cities is heavy.",
        "testo": "The neighbouring emirate, more conservative and less touristy, with its restored old centre, the Sharjah Art Museum and the museums of Islamic civilisation. No alcohol, and covering clothes."
      },
      {
        "nome": "Liwa and Al Ain",
        "distanza": "Al Ain about 1h45 by car, Liwa about 4 hours",
        "come": "Rental car or driver; the dunes need a 4x4 with a guide.",
        "testo": "The UNESCO oasis of Al Ain and the edge of the Rub' al-Khali at Liwa: the real desert, rather than the evening safari. Liwa needs a night (there is a dedicated page)."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Dubai?",
        "risposta": "In 24 hours you can see the creek, the souqs, Al Fahidi and the Burj Khalifa at sunset. With 48 you add Jumeirah Mosque, Alserkal and the desert; on the third day, go to Abu Dhabi."
      },
      {
        "domanda": "Is it worth leaving the airport on a Dubai layover?",
        "risposta": "Above twelve hours, yes: the metro reaches the centre in twenty minutes and visa on arrival is free for EU citizens. Under ten hours, with checks and getting back three hours early, too little is left."
      },
      {
        "domanda": "Do you need to book the Burj Khalifa?",
        "risposta": "Yes, online and a few days ahead: tickets are timed and the sunset slots, the most expensive, sell out first. On the spot it costs more."
      },
      {
        "domanda": "Where to stay in Dubai for the first time?",
        "risposta": "Deira or Bur Dubai to spend little and have the metro and the old city on the doorstep; Downtown to be under the Burj Khalifa; Marina or Jumeirah for the sea."
      },
      {
        "domanda": "When is the best time to visit Dubai?",
        "risposta": "November to March. From June to September it tops 45 degrees with high humidity and life moves indoors."
      },
      {
        "domanda": "Dubai or Abu Dhabi as a base?",
        "risposta": "Dubai has the metro and more to do at night; Abu Dhabi is calmer and with the Etihad stopover the hotel is free. They are two hours apart by bus: better to sleep a night in each than to shuttle."
      }
    ],
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
      "By plane to Abu Dhabi Zayed International (AUH), Etihad's hub. Bus A1 runs to the centre, about 4 AED with a Hafilat card, 24 hours a day, in 45-60 minutes; a taxi costs about 100-150 AED. From Dubai there are frequent buses, about 2 hours, or a taxi. The Grand Mosque lies between the airport and the centre.",
    comeSpostarsi:
      "There's no metro: you use taxis and Careem, which are cheap, or city buses. Between the center, Saadiyat and Yas distances are large, and for much of the year walking isn't an option.",
    periodoMigliore: "November to March, as across the Gulf. In autumn the Formula 1 Grand Prix fills the city.",
    costi:
      "Indicative daily budget per person, hotel included: low €60-90, mid €130-220, high over €350. Grand Mosque with an online pass (about 10 AED for tourists from September 2026); Louvre Abu Dhabi 70 AED; Qasr Al Watan from about 65 AED; taxis are cheap. Overall a day in Abu Dhabi costs less than one in Dubai, and with the Etihad stopover the hotel is free.",
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
        "testo": "Eighty-two domes, marble columns inlaid with mother-of-pearl, a hand-knotted carpet of over 5,600 square metres and chandeliers with millions of Swarovski crystals. It is open to non-Muslim visitors.",
        "come": "Taxi or Uber. Free visit with a mandatory online pass booked on the official website; dress rules on the website.",
        "quando": "Late afternoon, when the marble turns from white to pink and then blue; at noon the white is blinding.",
        "tempo": "1-1.5 hours",
        "costo": "Online pass required; for tourists, from September 2026, about 10 AED (about €2.50): check the website",
        "orari": "Saturday-Thursday 9am-8.30pm; Friday 9-11.30am and 2.30-8.30pm (2026).",
        "lat": 24.412,
        "lng": 54.474,
        "url": "https://www.szgmc.gov.ae/en/home",
        "consiglio": "Hours for non-Muslims vary, especially on Friday: check the site."
      },
      {
        "nome": "Louvre Abu Dhabi",
        "testo": "Jean Nouvel's museum on Saadiyat Island, opened in 2017, under a dome made of 7,850 overlapping aluminium stars that rains light. The building is worth as much as the collection.",
        "come": "Taxi or Uber from Abu Dhabi.",
        "quando": "Late afternoon, when the light under the dome changes.",
        "tempo": "2-3 hours",
        "costo": "70 AED, about €16; free under 18 (2026)",
        "orari": "Tuesday-Sunday from 10am, closing at 6.30pm or 8.30pm depending on the day; closed Monday (2026).",
        "lat": 24.533,
        "lng": 54.4,
        "url": "https://www.louvreabudhabi.ae/",
        "consiglio": "Sit under the dome and stay a while."
      },
      {
        "nome": "Qasr Al Watan",
        "testo": "The presidential palace, open to the public since 2019. You visit the Great Hall beneath the central dome, 37 metres across, with a chandelier of 350,000 crystals, the hall where the government meets and the House of Knowledge with gifts received from heads of state.",
        "come": "Taxi or Uber.",
        "quando": "Morning. Opening hours and tickets on the official website.",
        "tempo": "1.5-2 hours",
        "costo": "From about 65 AED, about €15 (2026)",
        "lat": 24.46225,
        "lng": 54.30551,
        "url": "https://www.qasralwatan.ae/"
      },
      {
        "nome": "Zayed National Museum",
        "testo": "The national museum of the Emirates, in the Saadiyat cultural district next to the Louvre, designed by Foster + Partners with towers inspired by a falcon's feathers. It tells the country's story from prehistory to Sheikh Zayed, founder of the federation.",
        "come": "Taxi to Saadiyat; pair it with the Louvre on the same day. Shoulders and knees covered.",
        "quando": "Morning, before the Louvre in the afternoon.",
        "tempo": "2-3 hours",
        "orari": "Monday-Thursday 10am-6.30pm, Friday-Sunday 10am-8.30pm; last entry one hour before (2026, reseller data: check).",
        "lat": 24.53456,
        "lng": 54.4188,
        "url": "https://www.zayednationalmuseum.ae/"
      },
      {
        "nome": "Qasr Al Hosn",
        "testo": "The white fort in the city centre, Abu Dhabi's oldest stone building, born as a watchtower over the water well and later home of the ruling family. Restored and turned into a museum, it tells how the city grew around these walls.",
        "come": "Taxi to the centre, on Sheikh Zayed the First Street; the Cultural Foundation is next door.",
        "quando": "Morning.",
        "tempo": "1-1.5 hours",
        "lat": 24.48239,
        "lng": 54.35482
      },
      {
        "nome": "Abrahamic Family House",
        "testo": "Three houses of worship side by side on Saadiyat, a mosque, a church and a synagogue, designed by David Adjaye as three similar volumes of pale stone. All three can be visited, with a route explaining what the three faiths share.",
        "come": "Taxi to the Saadiyat cultural district; covering clothes.",
        "quando": "Morning or afternoon, outside prayer times. Hours and bookings on the official site.",
        "tempo": "1 hour",
        "lat": 24.53093,
        "lng": 54.4061,
        "url": "https://www.abrahamicfamilyhouse.ae/"
      },
      {
        "nome": "Corniche and Heritage Village",
        "testo": "A long seafront with a public beach, cycling and walking paths and views of the skyline. On the breakwater, a short walk from Marina Mall, the Heritage Village recreates life before oil: an old souq, a mosque, a camp, craftspeople doing sadu weaving and glass-blowing, and a small museum on the pearl divers.",
        "come": "Taxi to the Corniche, then on foot or by bike.",
        "quando": "From late afternoon to sunset, when the skyline lights up.",
        "tempo": "2 hours",
        "costo": "Heritage Village free entry (2026)",
        "lat": 24.47324,
        "lng": 54.34087
      },
      {
        "nome": "Wahat Al Karama",
        "testo": "The memorial to the Emirates' fallen, right opposite the Grand Mosque: large leaning aluminium slabs and a pool reflecting the domes. Few visit it, and it gives the best view of the mosque lit up.",
        "come": "On foot or a short taxi ride from the Grand Mosque.",
        "quando": "After sunset, on leaving the mosque.",
        "tempo": "30-45 minutes",
        "lat": 24.41346,
        "lng": 54.47878
      },
      {
        "nome": "Mina Zayed fish market",
        "testo": "The fish market at the port of Mina Zayed, still open and one of the most authentic spots in the city, next to the area's other long-standing markets. You see fresh Gulf fish just off the boats.",
        "come": "Taxi from the center.",
        "quando": "Early morning or late afternoon.",
        "tempo": "1 hour",
        "lat": 24.5253,
        "lng": 54.37693
      },
      {
        "nome": "Saadiyat Beach",
        "testo": "A long white-sand beach on the north side of Saadiyat Island, with low protected dunes where turtles nest. There is a public stretch with facilities, besides the resorts.",
        "come": "Taxi from Abu Dhabi, about 20 minutes from the Corniche.",
        "quando": "Morning, before the Louvre; swimming from October to April.",
        "tempo": "2-3 hours",
        "lat": 24.53167,
        "lng": 54.44306
      },
      {
        "nome": "Jubail Mangrove Park",
        "testo": "A wooden boardwalk running into the mangrove forest of Jubail Island, between the centre and Yas. You walk above shallow water among crabs, herons and aerial roots: an hour of nature half an hour from the centre.",
        "come": "Taxi from the centre or from Yas.",
        "quando": "Early morning or late afternoon, when it is cooler.",
        "tempo": "1 hour"
      },
      {
        "nome": "Yas Island",
        "testo": "The island of theme parks and sport: Ferrari World with its roller coasters, Warner Bros. World, the water park and the Yas Marina Circuit, where the Formula 1 Grand Prix is held in early December.",
        "come": "Taxi, about 30 minutes from the centre; close to the airport.",
        "quando": "A full day if you go into the parks; the evening for the marina.",
        "tempo": "Half a day to a full day",
        "lat": 24.4838,
        "lng": 54.607,
        "url": "https://www.yasisland.com/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Qasr Al Hosn and the centre",
          "Midday and afternoon: Louvre Abu Dhabi on Saadiyat Island",
          "Late afternoon: Sheikh Zayed Grand Mosque until the lights come on",
          "Evening: Wahat Al Karama for the view of the mosque, dinner on the Corniche"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan",
          "Day 2, morning: Qasr Al Watan",
          "Day 2, afternoon: Zayed National Museum and Abrahamic Family House on Saadiyat, then the beach",
          "Day 2, evening: Heritage Village and Mina Zayed fish market"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2: as above",
          "Day 3: day trip to Al Ain, the UNESCO oasis, or towards Liwa with a night in the desert",
          "Alternatively, with children or for Formula 1: Yas Island"
        ]
      }
    ],
    zone: [
      {
        "nome": "Corniche / center",
        "perChi": "those who want to be in the city",
        "testo": "Hotels with sea views and restaurants nearby.",
        "fascia": "80-200 €"
      },
      {
        "nome": "Saadiyat",
        "perChi": "those who want museums and beach",
        "testo": "Resorts and the Louvre, more isolated and expensive.",
        "fascia": "200-500 €"
      },
      {
        "nome": "Yas Island",
        "perChi": "those coming for the parks or for Formula 1",
        "testo": "Modern hotels near the airport and the parks, far from the centre. During the Grand Prix prices rise sharply.",
        "fascia": "100-250 €"
      }
    ],
    sapori: [
      {
        "nome": "Indian and Pakistani cuisine",
        "testo": "Good and cheap, in the neighbourhoods around the centre."
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
      "Wrong clothes at the Grand Mosque: read the dress rules on the official website before going.",
      "Visiting the mosque at midday: the marble dazzles and cooks.",
      "Book the Louvre ahead on weekends.",
      "Early December: the Abu Dhabi Formula 1 Grand Prix fills the city and pushes up hotel prices.",
      "Regional tensions: European governments warn of possible flight cancellations and airspace closures at short notice (gov.uk, October 2026). Check your government's travel advice before leaving."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Dubai",
        "distanza": "about 2 hours by bus, 140 km",
        "come": "Frequent buses, taxi or car with driver.",
        "testo": "The creek by abra, the Deira souqs, Al Fahidi and the Burj Khalifa at sunset fit into one day (there is a dedicated page)."
      },
      {
        "nome": "Al Ain",
        "distanza": "about 1h30 by car",
        "come": "Rental car or driver for the day.",
        "testo": "The UNESCO oasis with over 147,000 palms watered by the falaj, Al Jahili fort and the Jebel Hafeet road for sunset."
      },
      {
        "nome": "Liwa and the Moreeb dunes",
        "distanza": "about 2 hours by car",
        "come": "Car or transfer; on the dunes only by 4x4 with an experienced driver.",
        "testo": "The edge of the Rub' al-Khali, with some of the highest dunes in the world. Better with a night in the desert than as a day trip."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Abu Dhabi?",
        "risposta": "One full day for the Grand Mosque and the Louvre, two to add Qasr Al Watan, the Zayed National Museum and the Corniche. The third is for Al Ain or Liwa."
      },
      {
        "domanda": "Do you need to book the Grand Mosque?",
        "risposta": "Yes: visitors must book an online pass on the official site, with a time slot. On Friday mornings and at midday the hours for non-Muslims are reduced."
      },
      {
        "domanda": "What to wear to the Grand Mosque?",
        "risposta": "Arms and legs covered for everyone, loose and non-transparent clothes, head covered for women. Arrive already dressed correctly to avoid the queue for loan abayas."
      },
      {
        "domanda": "Can you visit Abu Dhabi as a day trip from Dubai?",
        "risposta": "Yes, with two hours by bus each way, but you only see the essentials. Staying a night lets you see the mosque at sunset calmly and the Louvre the next morning."
      },
      {
        "domanda": "Is the Louvre Abu Dhabi open every day?",
        "risposta": "No, it is closed on Mondays. On other days it opens at 10am and closes at 6.30pm or 8.30pm depending on the day; tickets are sold online."
      },
      {
        "domanda": "How does the free Etihad stopover work?",
        "risposta": "You add it while booking a return ticket on the Etihad site with a stop of at least 24 hours, and it gives one or two hotel nights; the hotel must be booked a few days before the flight. Conditions change: check them first."
      }
    ],
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
      "It's a possible extension of the trip I did: this page sticks to verifiable facts. It's on the list for a specific reason. What Dubai and Abu Dhabi sell as a “desert safari” is done on modest dunes half an hour from the city, with quad bikes, dinner in a tent camp and a return in the evening. The Rub' al-Khali is something else, the largest continuous sand desert in the world, with dunes over two hundred meters at Moreeb, and it's two hours from Abu Dhabi: a two-day extension is enough. The other half of the detour is Al Ain, which is the opposite: a UNESCO oasis with a hundred and forty-seven thousand palms irrigated by channels dug two thousand years ago and still working, where you walk in the shade and hear the water flowing. Together they tell what this country was like before oil, which is exactly what's missing from a stopover made only of cities.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Moreeb dunes and Liwa",
        "testo": "The edge of the Rub' al-Khali, the sand desert of the southern Arabian Peninsula, with very high dunes; Moreeb, about 25 km south of the Liwa oasis and about 300 metres high, is the tallest in the Emirates. There are no evening safaris here: you need a night in the desert.",
        "come": "By car or on a tour from Abu Dhabi; off-road you need a 4x4 and experience.",
        "quando": "Dawn and sunset.",
        "tempo": "1-2 days",
        "consiglio": "Do not drive on sand without experience and without a second vehicle."
      },
      {
        "nome": "Al Ain Oasis",
        "testo": "Part of the UNESCO Cultural Sites of Al Ain since 2011: over 147,000 date palms across more than 1,200 hectares, watered by falaj channels, a system thousands of years old. You walk in the shade hearing the water run.",
        "come": "By car from Abu Dhabi. The oasis is explored on foot.",
        "quando": "Morning.",
        "tempo": "2 hours"
      },
      {
        "nome": "Al Jahili Fort and the Hili sites",
        "testo": "Al Jahili Fort, built around 1891, with its watchtowers, and the Hili Archaeological Park, one of the main Bronze Age sites in the Emirates, with tombs from the 3rd millennium BC, part of the UNESCO World Heritage Site.",
        "come": "By car from Al Ain.",
        "quando": "Morning.",
        "tempo": "2 hours"
      },
      {
        "nome": "Jebel Hafeet",
        "testo": "The mountain above Al Ain, with an 11.7 km scenic road of 60 bends up to the car park at the top, overlooking the city.",
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
      "Mistaking an evening safari for the desert: those run on small dunes near Dubai.",
      "Driving on sand without experience and without a second vehicle.",
      "Coming for the day and skipping the night, which is the reason to go to Liwa.",
      "In summer the interior is extremely hot: come between November and March."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: "The desert plain around Al Ain seen from the slopes of Jebel Hafeet, in the haze",
    immagine: '/images/emirati-arabi-uniti/liwa-al-ain.jpg',
  },
]
