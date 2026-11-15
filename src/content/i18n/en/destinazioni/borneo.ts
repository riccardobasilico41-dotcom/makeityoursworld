import type { Destinazione } from '@/lib/types'

export const destinazioniBorneo: Destinazione[] = [
  {
    slug: 'kota-kinabalu',
    paeseSlug: 'borneo',
    ordine: 1,
    nome: 'Kota Kinabalu and Mount Kinabalu',
    tipologia: ['city', 'mountain', 'trekking'],
    giorniConsigliati: '1 day in the city, plus 2-3 for the Kinabalu climb',
    visitataPersonalmente: true,
    introduzione:
      "The gateway to Sabah: an unpretentious port city, with beautiful sunsets over the sea and five islands a short boat ride away. Behind it stands Mount Kinabalu, 4,095 meters, the highest peak in Borneo.",
    percheAndarci:
      "In Sabah everything starts here. And Kinabalu is a peak above 4,000 meters you can climb with no mountaineering experience, as long as you have the permit, which is capped and has to be booked well ahead.",
    cosaVedere: [
      'Mount Kinabalu, with the trails starting from the Timpohon Gate and the Laban Rata hut',
      'Kinabalu Park, a UNESCO site, which you can visit even without going to the summit',
      "The Poring hot springs and the park's canopy walkway",
      'Tunku Abdul Rahman Marine Park, five islands a short boat ride from the city',
      'The fish market and the Filipino Market on the waterfront, with the evening stalls',
      "The city mosque at Likas, which seems to float on the water",
    ],
    cosaFare: [
      "Climb Kinabalu in two days with the night at Laban Rata (there's a dedicated experience page)",
      "The via ferrata near the summit, for those who already have the climbing permit",
      'A day of snorkeling at the marine park islands',
      'Sunset on the waterfront, which in Kota Kinabalu is a collective ritual',
    ],
    doveDormire:
      "In the city the most convenient area is the waterfront. For the Kinabalu climb you sleep in Kundasang or inside the park, because you set off at dawn and from Kota Kinabalu it's a long drive: doing it in a day means getting up in the middle of the night.",
    doveMangiare:
      "In Kota Kinabalu you eat by the sea. At the Filipino Market you pick fish at the stall and have it grilled on the spot: it's the city's most typical dinner, at low prices. Try hinava, the raw fish marinated in lime of the Kadazan-Dusun, and tuaran mee, the hand-made noodles of the area. In Sabah's cities Chinese food is excellent and everywhere.",
    comeArrivare: "Fly into Kota Kinabalu (BKI) from Kuala Lumpur, with many flights a day and about 2 hours 30 minutes in the air. On arrival you clear Sabah's passport control, since the state has its own immigration even for travellers coming from the peninsula. The airport is about 8 km from the centre: Grab from the signposted pick-up zone costs about 15-25 RM (€3-5) and takes 20-30 minutes; a fixed-price coupon taxi, bought at the arrivals counter, about 30-45 RM; the city bus about 5 RM, but it is slow and infrequent.",
    comeSpostarsi:
      "In the city on foot and with Grab. For Kinabalu Park and for Sandakan you need intercity minibuses or private transfers: the roads are slow and on the map distances are deceptive.",
    periodoMigliore:
      "March to September for the climb, when it rains less at the summit. In bad weather the mountain closes, and in the past it has also happened after earthquakes: better to set the date with some margin.",
    costi: "the Kinabalu climb is expensive and there is no way to save: permit 400 RM and guide 350 RM per five adults (about €80 and €70), plus the night at Laban Rata and transfers, all paid as a package. It is one of the biggest items of the whole trip. The marine park islands, on the other hand, cost very little: 25 RM entry plus the boat (2026). In the city a budget day is about €30-45 with a guesthouse, markets and Grab; mid-range €70-110 with a waterfront hotel and a day on the islands; high over €180 with a Tanjung Aru resort and restaurants.",
    erroriDaEvitare: [
      "Thinking you can book the Kinabalu climb on the spot: daily permits are few and run out well ahead",
      "Underestimating the altitude: you start below two thousand meters and reach 4,095 in a little over a day, with no acclimatization, and altitude sickness hits even the fit",
      'Sleeping in Kota Kinabalu the night before the climb',
      "Using the city only as a stopover: the waterfront sunset and the nearby islands are worth a day",
    ],
    miaEsperienza:
      "Kota Kinabalu itself is a more functional than beautiful city, rebuilt after the bombings of the Second World War, and in half a day you've got it. The reason to come lies behind it. Kinabalu is climbed in two days. The first is an endless staircase in the rainforest, six kilometers of uneven steps with the humidity on your skin, up to the Laban Rata hut at 3,270 meters, where we arrived in the early afternoon. The second begins at two in the morning, in the dark, on bare granite, holding a fixed rope. You feel the altitude: you start from under two thousand meters and in a little over a day you're above four thousand, with no acclimatization, and a headache is the rule more than the exception. Then the sun rises over the granite plateau, and below lies all of Borneo, with the clouds beneath your feet. The practical advice that matters most: permits are just over a hundred and sixty a day and have to be booked months ahead, not weeks.",
    luoghi: [
      {
        nome: "Mount Kinabalu",
        testo: "4,095 meters, the highest mountain of Borneo. The climb takes two days: the first to Laban Rata hut, at 3,270 meters, the second starting in the night for the sunrise on the bare granite summit.",
        come: "The climb is allowed only with a registered guide (one per five adults) and a named permit, booked months ahead together with a bed at Laban Rata, through Sabah Parks or authorized operators. You start from Timpohon Gate, at 1,866 meters: the Mesilau trail is closed.",
        quando: "In the drier months; in bad weather the mountain closes. Book with some margin.",
        tempo: "2 days, 1 night at Laban Rata",
        costo: "Climbing permit 400 RM for foreign adults (about €80), 200 RM under 18; guide 350 RM per five adults (about €70); insurance 10 RM (rates in force since 2023, unchanged in 2026). Hut and park entry extra.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Sleep near the park the night before the climb and not in Kota Kinabalu, to start rested.",
        orari: "Start from Timpohon Gate early in the morning, after the permit check; the climbers' briefing is at 6 pm the evening before, at park headquarters.",
        lat: 6.075,
        lng: 116.5586,
      },
      {
        nome: "Kinabalu Park",
        testo: "The park, a UNESCO site since 2000, has extraordinarily rich biodiversity. It can be visited without climbing to the summit, with forest trails, orchids and a botanical centre.",
        come: "By bus or car from Kota Kinabalu towards Ranau. Trails on foot from park headquarters.",
        quando: "In the morning.",
        tempo: "half a day",
        url: "https://www.sabahparks.org.my/",
        consiglio: "A day in the park is the right choice for anyone not doing the climb.",
        costo: "Conservation fee 50 RM for foreign adults (about €10), 25 RM under 18; botanical garden 5 RM (2026).",
        orari: "Daily 8 am-5 pm. Botanical garden 9 am-4 pm, last entry 3 pm, with guided visits at 9 am, noon and 3 pm; guided nature-trail walk at 11 am.",
        lat: 6.0057,
        lng: 116.5425,
      },
      {
        nome: "Poring Hot Springs and canopy walkway",
        testo: "Hot springs in another section of the park, about 40 km south-east of the main headquarters, with a walkway suspended among the forest trees: about 158 metres long and 41 metres high.",
        come: "By car or taxi from Kinabalu Park.",
        quando: "In the morning for the walkway; in the afternoon for the pools.",
        tempo: "3 hours",
        consiglio: "Combine with Kinabalu Park on the same day.",
        costo: "Conservation fee 50 RM for foreign adults (about €10); canopy walkway 10 RM; open-air tub 10 RM for the first three hours (2026).",
        orari: "Daily 8 am-5 pm. As of late 2026 the canopy walkway is temporarily closed: check with Sabah Parks before going.",
        url: "https://www.sabahparks.org.my/",
        lat: 6.048,
        lng: 116.7023,
      },
      {
        nome: "Tunku Abdul Rahman Marine Park",
        testo: "Five islands a short boat ride from the city, Gaya, Manukan, Mamutik, Sapi and Sulug, with beaches, snorkelling and clear water. Gaya is the largest. The right choice for an afternoon at sea after the mountain.",
        come: "By boat from Jesselton Point jetty. The park fee is paid.",
        quando: "The park is open daily, 8:00-17:00. The sea is calmer in the morning.",
        tempo: "half a day",
        costo: "Entry 25 RM per day for foreign adults, about €5 (2026), plus the boat from Jesselton Point.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Manukan, Mamutik and Sapi are the most common choices for a day.",
        orari: "Daily 8 am-5 pm.",
        lat: 5.9667,
        lng: 116.0,
      },
      {
        nome: "Waterfront, Filipino Market and sunset",
        testo: "Kota Kinabalu's waterfront, with the fish market, the evening stalls of the Filipino Market and the bars where you watch sunset over the islands.",
        come: "On foot from the centre. The market is active in the evening.",
        quando: "Sunset and evening.",
        tempo: "2 hours",
        consiglio: "Eat grilled fish at the evening stalls, choosing it from the ice.",
        orari: "The fish stalls run from late afternoon into the evening.",
        lat: 5.9816,
        lng: 116.072,
      },
      {
        nome: "Kota Kinabalu City Mosque",
        testo: "The city's second main mosque, in the Likas district, built on a lagoon: when the water is still it seems to float. The dome and minarets are easy to see from the coastal road too.",
        come: "Grab from the centre, about 15 minutes north. Non-Muslim visitors enter outside prayer times, with arms and legs covered.",
        quando: "Late afternoon, for the light on the water; avoid Friday at midday.",
        tempo: "1 hour",
        lat: 5.9959,
        lng: 116.1078,
      },
      {
        nome: "Atkinson Clock Tower",
        testo: "The wooden clock tower on the slope of Signal Hill is the oldest standing structure in Kota Kinabalu, one of the few that survived the war. It was dedicated to Francis Atkinson, the first district officer of Jesselton, the city's old name.",
        come: "On foot from the centre, a few minutes uphill from Gaya Street.",
        quando: "In the daytime, together with Signal Hill.",
        tempo: "20 minutes",
        costo: "Free: it is seen from outside.",
        lat: 5.9822,
        lng: 116.0773,
      },
      {
        nome: "Signal Hill Observatory",
        testo: "The lookout on the hill behind the centre, with views over the rooftops, the port and the marine park islands. It is the easiest way to understand the layout of the city.",
        come: "On foot from the centre up a steep stairway, or by Grab to the top.",
        quando: "At sunset, when the sun drops behind the islands.",
        tempo: "1 hour",
        lat: 5.9856,
        lng: 116.0791,
      },
      {
        nome: "Gaya Street and the Sunday market",
        testo: "The main street of the old town, with Chinese shophouses, cafés and kopitiam. On Sunday mornings it fills with stalls of fruit, plants, crafts and street food.",
        come: "On foot from the waterfront.",
        quando: "Early Sunday morning, before the heat.",
        tempo: "1-2 hours",
        orari: "The market runs only on Sundays, from early morning to late morning.",
        lat: 5.9835,
        lng: 116.077,
      },
      {
        nome: "Sabah Museum",
        testo: "Sabah's state museum on Bukit Istana Lama hill, with ethnography, natural history and archaeology sections and an open-air village of traditional houses. The main building is temporarily closed for works: check which parts of the complex are open before going.",
        come: "Grab from the centre, about 10 minutes south.",
        quando: "In the hottest hours or when it rains.",
        tempo: "1-2 hours",
        costo: "15 RM for foreigners, about €3 (2026).",
        lat: 5.9614,
        lng: 116.0709,
        url: "https://museum.sabah.gov.my/",
      },
      {
        nome: "Kota Kinabalu Wetland Centre",
        testo: "Twenty-four hectares of mangroves, the last strip of those that once lined the city's coast. A wooden boardwalk crosses the swamp, among resident birds, migrants from northern Asia, crabs and mudskippers.",
        come: "Grab from the centre, about 10 minutes towards Likas.",
        quando: "Early morning or towards evening, for the birds.",
        tempo: "1-2 hours",
        lat: 5.9874,
        lng: 116.0892,
      },
      {
        nome: "Tanjung Aru Beach",
        testo: "The long beach south of the centre, near the airport, where families and food stalls arrive in the evening. It is no memorable swimming spot, but the sunset is among the best in the city.",
        come: "Grab, about 15 minutes from the centre.",
        quando: "At sunset.",
        tempo: "2 hours",
        costo: "Free.",
        lat: 5.9357,
        lng: 116.0467,
      },
      {
        nome: "Kundasang War Memorial",
        testo: "The memorial to the British and Australian prisoners who died on the death marches from Sandakan to Ranau, which also remembers the suffering of Sabah's people. It stands in Kundasang, on the road to Kinabalu Park, with gardens and a view of the mountain.",
        come: "By car, on the transfer to the park: a few minutes from Kundasang town.",
        quando: "In the morning, when the Kinabalu summit is clear.",
        tempo: "1 hour",
        lat: 5.9874,
        lng: 116.5763,
        consiglio: "It means more after the Sandakan Memorial Park, or before it if the trip starts with the mountain.",
      }
    ],
    programmi: [
      {
        titolo: "1 day in town",
        tappe: [
          "Morning: boat to Mamutik or Manukan, snorkeling",
          "Lunch on the island or in town",
          "Afternoon: rest",
          "Sunset on the waterfront and dinner at the Filipino Market stalls"
        ]
      },
      {
        titolo: "2 days in the city",
        tappe: [
          "Day 1: Gaya Street, Atkinson Clock Tower and Signal Hill in the morning",
          "Afternoon at the Wetland Centre or the Sabah Museum, sunset on the waterfront and dinner at the Filipino Market",
          "Day 2: boat from Jesselton Point to Manukan or Sapi, back in the early afternoon",
          "Likas mosque in the late afternoon and sunset at Tanjung Aru",
        ],
      },
      {
        titolo: "3 days with the climb",
        tappe: [
          "Day 1: arrival in Kota Kinabalu, transfer to Kinabalu Park, night near the park",
          "Day 2: climb to Laban Rata, rest and dinner",
          "Day 3: start in the night, summit at dawn, descent and return to Kota Kinabalu"
        ]
      }
    ],
    zone: [
      {
        nome: "Centre of Kota Kinabalu",
        perChi: "anyone who wants convenience and the waterfront",
        testo: "Hotels of every range near the port and restaurants. Noisy in the evening."
      },
      {
        nome: "Near Kinabalu Park (Kundasang)",
        perChi: "anyone climbing to the summit",
        testo: "Lodges and guesthouses far from the city, near Timpohon Gate. Cool in the evening."
      },
      {
        nome: "Tanjung Aru",
        perChi: "those who want the sea near the airport",
        testo: "The big beach resorts south of the centre, a few minutes from the airport. Quiet, but you always need Grab to reach the centre.",
      }
    ],
    sapori: [
      {
        nome: "Hinava",
        testo: "Raw fish marinated in lime with onion and ginger, a traditional Kadazan-Dusun dish."
      },
      {
        nome: "Tuaran mee",
        testo: "Fried egg noodles with meat and vegetables, a specialty of Tuaran near Kota Kinabalu."
      },
      {
        nome: "Grilled fish",
        testo: "Fish grilled over charcoal with sambal, at the waterfront stalls."
      }
    ],
    attenzioni: [
      "Kinabalu permits are limited and sell out months ahead: do not plan to book on the spot.",
      "Altitude is felt: you climb from below two thousand to 4,095 meters in just over a day, and altitude sickness hits even fit people.",
      "Check travel advisories for Sabah's east coast before moving beyond the Kota Kinabalu area.",
      "Carry cash for small businesses: outside the city cards do not always work."
    ],
    gite: [
      {
        nome: "Klias River and proboscis monkeys",
        distanza: "about 2 hours' drive south",
        testo: "A sunset cruise through the mangroves of the Klias peninsula, with proboscis monkeys in the trees and, after dark, fireflies. It is the nearest alternative for those not going to the Kinabatangan.",
        come: "With an afternoon tour, back in the city in the evening.",
      },
      {
        nome: "Tip of Borneo",
        distanza: "about 190 km, 3-4 hours' drive",
        testo: "Tanjung Simpang Mengayau, the northernmost point of Borneo, where the South China Sea meets the Sulu Sea. It is a long day: combine it with the Rungus longhouses around Kudat.",
        come: "By car with a driver or on a day tour, leaving early; the road passes through Kudat.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Kota Kinabalu?",
        risposta: "One or two days for the city and the marine park islands. For Kinabalu add three: transfer to the park, the climb to Laban Rata and the summit at dawn with the descent.",
      },
      {
        domanda: "How do you book the Mount Kinabalu climb?",
        risposta: "The permit is named and tied to a bed at Laban Rata: book months ahead through Sabah Parks or an authorised operator, together with the compulsory guide. You will not find one on the spot.",
      },
      {
        domanda: "How much does it cost to climb Kinabalu?",
        risposta: "For foreign adults the permit costs 400 RM (about €80) and the guide 350 RM per five people. The hut, park entry and transfers are extra, and are usually bought as a package.",
      },
      {
        domanda: "Do you need mountain experience for Kinabalu?",
        risposta: "No technique or climbing gear is needed, but you need stamina: about 1,400 metres of ascent on the first day and the 4,095-metre summit on the second, with no acclimatisation. There is a cut-off time on the route, and anyone too slow is turned back.",
      },
      {
        domanda: "How do you get from the airport to the centre?",
        risposta: "By Grab, about 15-25 RM in 20-30 minutes, or by fixed-price taxi bought at the arrivals counter, about 30-45 RM. The city bus costs about 5 RM but runs rarely.",
      },
      {
        domanda: "Which islands should you choose in Tunku Abdul Rahman Park?",
        risposta: "Manukan, Mamutik and Sapi are the easiest for half a day of beach and snorkelling, about twenty minutes by boat from Jesselton Point; Gaya is the largest. Entry costs 25 RM for foreign adults.",
      },
    ],
    esperienzeSlugs: ['monte-kinabalu'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: "The dome and minarets of Kota Kinabalu's city mosque under a stormy sky",
    immagine: '/images/borneo/kota-kinabalu.jpg',
  },
  {
    slug: 'sepilok-sandakan',
    immagine: '/images/viaggi/borneo-itinerario/giorno-5-sepilok-orangutan.jpg',
    paeseSlug: 'borneo',
    ordine: 2,
    nome: 'Sepilok and Sandakan',
    tipologia: ['wildlife', 'nature', 'history'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "Here is a well-known orangutan rehabilitation center, where orphaned or confiscated animals are brought back to the forest little by little, and next to it the sun bear center, home to the smallest bears on the planet. Not far away, the city of Sandakan preserves the memory of one of the hardest chapters of the war in the Pacific.",
    percheAndarci:
      "It's the place where you're most likely to see orangutans up close, and the natural base for the Kinabatangan. The Sandakan Memorial Park, then, tells the story of the 1945 death marches, which very few Allied prisoners survived.",
    cosaVedere: [
      'The Sepilok Orangutan Rehabilitation Centre, with the platforms where food is left',
      'The Bornean Sun Bear Conservation Centre, next door, often skipped and just as interesting',
      'The Rainforest Discovery Centre, with a canopy walkway excellent for dawn birdwatching',
      'The Sandakan Memorial Park, on the site of the Japanese prison camp',
    ],
    cosaFare: [
      "Watch the feedings at the Sepilok center (there's a dedicated experience page)",
      'The Rainforest Discovery Centre canopy walkway at dawn, when the hornbills fly by',
      'The sun bear center, right next door, which almost nobody plans for',
      'An excursion to the Selingan turtle islands, to watch egg-laying at night',
    ],
    doveDormire:
      "In Sepilok, in the lodges set in the forest a few minutes from the centers. It's the best choice, because it lets you be at the first feeding and on the canopy walkway at dawn. Sandakan city is only for connections.",
    doveMangiare:
      "In Sandakan you eat seafood and Chinese food, both of good quality: the city has a historic Chinese community, and the right places are the seafood restaurants on the waterfront. In Sepilok there are only the lodge restaurants, simple and with set menus.",
    comeArrivare: "Fly from Kota Kinabalu to Sandakan (SDK), just under an hour, or drive about six hours; from Kinabalu Park, after the climb, the transfer takes four or five hours. Sepilok is about 25 km west of the city, half an hour by taxi or with the lodge transfer, and is easy to reach from the airport too.",
    comeSpostarsi: "Taxi or transfers organized by the lodges. Public transport exists, but runs rarely and is awkward with luggage.",
    periodoMigliore:
      "all year for the centers, with one important caveat: in the forest fruiting season, which varies from year to year, the orangutans find food on their own and far fewer come to the feedings.",
    costi: "Sepilok 30 RM for foreign adults (about €6), Rainforest Discovery Centre 30 RM, Agnes Keith House 15 RM (2026); sun bear centre 50 RM (2025). Budget about €35-50 a day with a guesthouse in Sepilok and taxis; mid-range €70-120 with a forest lodge and private transfers; high over €150 adding the night on Selingan or guided tours.",
    erroriDaEvitare: [
      "Going to just one feeding: in an unfavorable season two tries double the odds",
      "Carrying open backpacks, bottles or food in your hand: the macaques snatch them, and it happens often",
      "Stopping at Sepilok and skipping the Kinabatangan convinced you've seen Borneo's wildlife: here the orangutans are semi-wild and used to people",
      "Skipping the Sandakan Memorial Park because it's \"just a park\": it's a deeply moving memorial site",
    ],
    confronti: [
      {
        titolo: 'Where to see orangutans: Borneo or Sumatra',
        introduzione:
          "Wild orangutans live on only two islands in the world, Borneo and Sumatra, and they are two different species; three, counting the Tapanuli, described only recently and with very few individuals. It's the choice that changes the trip more than any other, because at the main sites sighting odds, costs and how wild the animals are change completely. In general, the wilder the encounter, the less guaranteed it is and the more it costs to get there.",
        opzioni: [
          {
            nome: 'Sepilok (Sabah)',
            sintesi: 'Rehabilitation center for orphans and confiscated animals, with two feedings a day on platforms reached by walkways.',
            costo: 'entrance ticket, prices at the ticket office',
            durata: 'half a day; you sleep next door',
            pro: [
              'The highest chance of seeing orangutans up close, at any time of year',
              'Easy to reach and to combine with the Kinabatangan',
              'The rehabilitation work is serious and documented: it is not a zoo',
              'Next door are the sun bear center and an excellent canopy walkway',
            ],
            contro: [
              "The animals are semi-wild and used to people: it's not an encounter in nature",
              'In the forest fruiting season far fewer come, because they feed on their own',
              'Crowded at feeding times',
            ],
            perChi: "Anyone who wants a reasonable certainty of seeing them, and anyone short on time. It's the starting point, not the finish line.",
          },
          {
            nome: 'Kinabatangan River (Sabah)',
            sintesi: 'Boat outings at dawn and sunset along the river, where animals concentrate in the strip of forest left on the banks.',
            costo: 'lodge packages with meals and outings included',
            durata: '2-3 nights',
            pro: [
              'Fully wild orangutans, along with proboscis monkeys, pygmy elephants, crocodiles and hornbills',
              'A very good ratio of sighting odds to cost',
              'With two or three nights the odds go up considerably',
            ],
            contro: [
              'No guarantee: you see them from the boat, often far away and backlit',
              "The strip of forest is narrow precisely because oil palm surrounds it; it's also why the animals concentrate there, and it gives you pause",
              'Heavy mosquitoes and heat on the evening outings',
            ],
            perChi: 'Anyone with at least two nights: it is the choice with the best balance between wild animals and the odds of seeing them.',
          },
          {
            nome: 'Danum Valley (Sabah)',
            sintesi: 'Never-logged primary forest, with a research center and a high-end lodge, trails and a canopy walkway.',
            costo: "Borneo's most expensive stop, with multi-night packages",
            durata: 'at least 3 nights, for it to make sense',
            pro: [
              "Real primary forest, the closest thing to Borneo before logging",
              'Complete wildlife: orangutans, gibbons, clouded leopards, deer, countless birds',
              'Very few people and first-rate naturalist guides',
            ],
            contro: [
              "Very expensive, and orangutans are seen or not seen with no rule: you come here for the forest, not for one species",
              'Hard to reach: long transfers on forest tracks',
              'Leeches, humidity and demanding treks',
            ],
            perChi: 'Anyone with the budget and at least three nights, who comes for the forest itself more than for a list of animals.',
          },
          {
            nome: 'Bukit Lawang (Sumatra, Indonesia)',
            sintesi: "The other island: jungle trekking in Gunung Leuser, with Sumatran orangutans, a different species from Borneo's and critically endangered.",
            costo: 'by far the cheapest: guided treks at low prices',
            durata: '1-3 days of trekking',
            pro: [
              'You walk inside the forest and look for them on foot, instead of watching from a platform or a boat',
              'The odds of seeing them are high, because the area is home to animals once rehabilitated and now wild',
              'Very low costs compared with any option in Borneo: lodging, guides and treks cost a fraction',
              "Leuser's jungle is one of the last places in the world where orangutans, tigers, rhinos and elephants live in the same ecosystem",
            ],
            contro: [
              "The ethical problem exists and should be known beforehand: some guides lure the animals with food to guarantee the sighting, a practice to refuse explicitly when you book",
              "It's much more physical: you climb in mud grabbing roots, in high heat and humidity",
              'The rules are less strict than in Malaysia, and quality depends a lot on the guide you get',
              'Sumatra is far from Borneo: they are two different trips, not two stops of the same one',
            ],
            perChi: 'Anyone who wants to look for them on foot instead of watching, has a limited budget and chooses the operator carefully.',
          },
          {
            nome: 'Semenggoh (Sarawak)',
            sintesi: 'Reserve near Kuching where rehabilitated, now free-ranging orangutans live, returning to the platforms only when the forest offers little.',
            costo: 'a few ringgit',
            durata: '2-3 hours, a day trip from Kuching',
            pro: [
              'Very convenient: close to Kuching, done in a morning',
              'The animals are free and semi-wild, not in enclosures',
              'In the right season quite a few can come at once',
            ],
            contro: [
              "In the fruiting season nobody may show up, and the reserve says so openly",
              'Very crowded, and the stop is short',
              "It's in Sarawak: it only makes sense if the trip passes through Kuching",
            ],
            perChi: "Anyone already in Kuching. On its own it's not a reason to cross Borneo.",
          },
        ],
        raccomandazione:
          "Within Borneo the Sepilok plus Kinabatangan combination works: the first guarantees the close encounter, the second makes it wild, and together they cost less than three nights at Danum Valley. Danum is added if there's budget and days, Semenggoh only if the itinerary touches Sarawak. Between the two islands, instead, the difference is in the experience even before the wildlife: in Sumatra you walk in the jungle and look for them, in Borneo you stand on a platform or a boat and wait. Sumatra costs a fraction and is more physical and more direct; Borneo is more organized, more regulated and also offers things Bukit Lawang doesn't: the proboscis monkeys, the pygmy elephants, Danum's primary forest and Sipadan a few hours away. Anyone who has already done Bukit Lawang shouldn't come to Borneo for the orangutans: come for everything else, and you'll see them again anyway.",
      },
    ],
    miaEsperienza:
      "At Sepilok you see orangutans with more certainty than elsewhere, and it's worth saying right away what that means. They are animals orphaned or confiscated from the illegal trade, in rehabilitation and used to people, and the platforms serve to supplement food they can't yet find on their own. It's not nature, and the center doesn't pretend it is. That said, watching an orangutan cross a rope stretched overhead, three meters up, with that very slow, seemingly deliberate way of moving, is enough to justify a trip. The most useful advice is to go to both feedings, because in certain seasons the forest provides enough fruit and almost nobody comes. Then there's what almost everyone skips: the sun bear center two hundred meters away, with the world's smallest bears rescued from the pet trade, and the Sandakan Memorial Park, where we spent a morning, on the site of the prison camp from which the 1945 death marches set out. Of two thousand four hundred Allied prisoners, six survived.",
    luoghi: [
      {
        nome: "Sepilok Orangutan Rehabilitation Centre",
        testo: "A centre that takes in orphaned orangutans or ones confiscated from the illegal trade, in rehabilitation before returning to the forest. From the platforms you see the animals arrive to eat after the fruit feeding.",
        come: "About 25 km west of Sandakan, by taxi or bus. You walk on wooden boardwalks to the platform.",
        quando: "Feedings at 10am and 3pm (Sabah Wildlife Department): arrive half an hour early and check any changes at the ticket office. Going to both feedings doubles your chances.",
        tempo: "2-3 hours",
        costo: "30 RM for foreign adults, about €6; 15 RM under 18; 10 RM extra for professional cameras and video cameras, phones free (2026). The ticket is valid all day, afternoon feeding included.",
        url: "https://wildlife.sabah.gov.my/",
        consiglio: "Bring a closed backpack and no food in hand: the macaques grab everything.",
        orari: "Daily 9 am-12 pm and 2-4 pm; Fridays 9-11 am and 2-4 pm.",
        lat: 5.865,
        lng: 117.9488,
      },
      {
        nome: "Bornean Sun Bear Conservation Centre",
        testo: "Next to Sepilok, it houses sun bears, the smallest in the world, rescued from the animal trade. Often skipped, and just as interesting.",
        come: "On foot or by taxi from Sepilok, a few minutes.",
        quando: "Morning or early afternoon.",
        tempo: "1 hour",
        costo: "50 RM for foreign adults, about €10 (2025).",
        url: "https://www.bsbcc.org.my/",
        consiglio: "Visit on the same day as the orangutans.",
        lat: 5.865,
        lng: 117.9496,
      },
      {
        nome: "Rainforest Discovery Centre",
        testo: "A forest with suspended walkways, a tower and trails, excellent for birdwatching at dawn.",
        come: "On foot from the centre of Sepilok or by taxi.",
        quando: "At dawn for the birds.",
        tempo: "2 hours",
        consiglio: "Binoculars and a dawn start: it is when the forest is most alive.",
        costo: "30 RM for foreign adults (about €6), 20 RM for ages 5-17; guided night walk 30 RM (2026).",
        orari: "Daily 8 am-5 pm, public holidays included.",
        url: "https://sabahtourism.com/destination/rainforest-discovery-centre-rdc/",
        lat: 5.8765,
        lng: 117.9445,
      },
      {
        nome: "Sandakan Memorial Park",
        testo: "The site of the Japanese prison camp of the Second World War, from which the 1945 death marches to Ranau departed: about 2,400 Allied prisoners died and only six Australians survived, all of them escapees. A park with a small museum and a path through the forest.",
        come: "A few kilometers from Sandakan, by taxi.",
        quando: "In the morning.",
        tempo: "1.5 hours",
        consiglio: "Do not skip it because it is «just a park»: it deserves the time.",
        lat: 5.8876,
        lng: 118.0471,
      },
      {
        nome: "Agnes Keith House",
        testo: "The colonial home of Agnes Newton Keith, the American writer who wrote about Borneo and her wartime internment. Restored by the Sabah Museum, it has been open to the public since 2004, with rooms on the Keiths' life and on colonial Sandakan in the first half of the 20th century.",
        come: "By taxi from central Sandakan.",
        quando: "In the afternoon.",
        tempo: "1 hour",
        consiglio: "Pair it with the Memorial Park on the same day in Sandakan.",
        costo: "15 RM for foreigners, about €3 (2026).",
        url: "https://museum.sabah.gov.my/",
        lat: 5.8431,
        lng: 118.1155,
      },
      {
        nome: "Labuk Bay Proboscis Monkey Sanctuary",
        testo: "A private sanctuary set up inside an oil palm plantation, where proboscis monkeys come to wooden platforms at fruit time. You see them very close and with little effort, but it is an organised encounter, not a wild one.",
        come: "About 40 minutes' drive from Sepilok, by taxi or on the lodges' half-day tours.",
        quando: "At the platform feedings, one in the morning and one in the afternoon: check the times when booking.",
        tempo: "2-3 hours",
        lat: 5.9352,
        lng: 117.7982,
        consiglio: "Worth it for those not going to the Kinabatangan; those who go will see them in the wild.",
      },
      {
        nome: "Puu Jih Shih Temple",
        testo: "A large Chinese Buddhist temple on a hill west of the centre, with dragon-wrapped columns and a wide view over Sandakan bay. It shows the weight of the Chinese community in the city's history.",
        come: "Taxi or Grab from the centre, a few minutes.",
        quando: "In the morning or towards evening.",
        tempo: "45 minutes",
        lat: 5.8342,
        lng: 118.0861,
      },
      {
        nome: "St. Michael and All Angels Church",
        testo: "A stone Anglican church on the hill in the centre, among the oldest in Sabah and one of the few buildings in Sandakan still standing after the war. It pairs with the Agnes Keith House on a tour of the historic town.",
        come: "On foot from the centre, uphill.",
        quando: "In the daytime.",
        tempo: "30 minutes",
        lat: 5.8406,
        lng: 118.1129,
      },
      {
        nome: "Sandakan Central Market",
        testo: "The market near the port, with fish, dried seafood, fruit, vegetables and food stalls. It is where you see everyday Sandakan.",
        come: "On foot in the centre.",
        quando: "Early morning, when the fish comes in.",
        tempo: "1 hour",
        lat: 5.839,
        lng: 118.121,
      },
      {
        nome: "Turtle Islands Park (Selingan)",
        testo: "Three islands 40 km north of Sandakan where green and hawksbill turtles lay their eggs on the beach. You sleep on Selingan island and in the evening the rangers call guests when a turtle comes up the sand; then you watch hatchlings being released.",
        come: "Only with a night on the island, booked in advance through the authorised operator; boat from Sandakan. Places are limited.",
        quando: "All year; book well ahead.",
        tempo: "1 night",
        costo: "Conservation fee 60 RM per day for foreign adults (about €12), 30 RM under 18 (2026); boat and night in the package.",
        orari: "The turtle programme takes place at night.",
        lat: 6.1745,
        lng: 118.0605,
        url: "https://www.sabahparks.org.my/turtle-islands-park",
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "10 am feeding at Sepilok",
          "Sun Bear Centre, a few steps away",
          "Lunch and the Rainforest Discovery Centre",
          "3 pm feeding, on the same ticket",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: morning feeding at Sepilok, Sun Bear Centre, lunch, Rainforest Discovery Centre, afternoon feeding",
          "Day 2: Sandakan Memorial Park, then transfer to the Kinabatangan"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2: as in the 2 days, without leaving for the river",
          "Day 3: a night on Selingan for the turtles, or Labuk Bay and historic Sandakan with Puu Jih Shih, St. Michael's and the Agnes Keith House",
        ],
      }
    ],
    zone: [
      {
        nome: "Sepilok",
        perChi: "anyone who wants to be near the orangutan centre",
        testo: "Lodges and guesthouses in the forest, near the centres. Quiet and with no nightlife."
      },
      {
        nome: "Sandakan",
        perChi: "anyone arriving by air or wanting services",
        testo: "Hotels and restaurants in town, not far from Sepilok. More convenient for departures."
      },
      {
        nome: "Selingan Island",
        perChi: "those who want to see the turtles",
        testo: "The only rooms are the park's, tied to the night programme: one night only, booked well in advance.",
      }
    ],
    sapori: [
      {
        nome: "Fresh grilled fish",
        testo: "Sandakan catch, grilled over charcoal in seaside restaurants."
      },
      {
        nome: "Hainan chicken rice",
        testo: "Poached chicken with rice in broth, a widespread Chinese specialty."
      },
      {
        nome: "Teh tarik",
        testo: "Tea with condensed milk, everywhere."
      }
    ],
    attenzioni: [
      "When the forest is full of fruit the orangutans find food on their own and fewer come to the feedings.",
      "Macaques grab open backpacks, bottles and food: keep everything closed.",
      "Sepilok is not wild forest: the orangutans are used to people. For wildlife you need the Kinabatangan.",
      "Check travel advisories for Sabah's east coast."
    ],
    gite: [
      {
        nome: "Gomantong Caves",
        distanza: "on the way to the Kinabatangan, about an hour before Sukau",
        testo: "Limestone caves with colonies of bats and swiftlets, whose nests are harvested for soup. Entry costs about 30 RM for foreigners; wear closed shoes, as the floor is covered in guano.",
        come: "On the transfer to the river or on a lodge outing.",
      },
      {
        nome: "Kinabatangan River",
        distanza: "about 2 hours by road to Sukau or Bilit",
        testo: "The natural follow-up to Sepilok: wild orangutans and proboscis monkeys, seen from the boat. It is not a day trip: you need at least two nights.",
        come: "With the lodges' packages, which leave from Sandakan or Sepilok.",
      },
    ],
    faq: [
      {
        domanda: "What time are the feedings at Sepilok?",
        risposta: "At 10 am and 3 pm, on the main platform. The ticket is valid all day, so you can come back for the second; rain can delay them.",
      },
      {
        domanda: "How much is entry to Sepilok?",
        risposta: "30 RM for foreign adults and 15 RM under 18 (2026). Professional cameras pay 10 RM extra, phones do not.",
      },
      {
        domanda: "Are orangutans always seen?",
        risposta: "No. When the forest has plenty of fruit, few or none come; going to both feedings doubles the chances.",
      },
      {
        domanda: "Is it better to sleep in Sepilok or Sandakan?",
        risposta: "In Sepilok, in the lodges a few minutes from the centres: you make the first feeding and the canopy walkway at dawn without transfers. Sandakan is for flights and connections.",
      },
      {
        domanda: "How much time do Sepilok and Sandakan need?",
        risposta: "One full day for Sepilok, the sun bear centre and the Rainforest Discovery Centre; a second for the Sandakan Memorial Park and the town, before leaving for the Kinabatangan.",
      },
      {
        domanda: "Can you see turtles from Sandakan?",
        risposta: "Yes, at Turtle Islands Park, with a night on Selingan island booked in advance. Nesting happens at night and the rangers call guests when a turtle comes up the beach.",
      },
    ],
    esperienzeSlugs: ['sepilok-oranghi'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Two orangutans at the Sepilok Orangutan Rehabilitation Centre, shot up close as they feed',
  },
  {
    slug: 'kinabatangan',
    immagine: '/images/borneo/kinabatangan.jpg',
    paeseSlug: 'borneo',
    ordine: 3,
    nome: 'Kinabatangan River',
    tipologia: ['wildlife', 'nature', 'river'],
    giorniConsigliati: '2-3 nights',
    visitataPersonalmente: true,
    introduzione:
      "Sabah's longest river, with a strip of forest left along the banks and oil palm plantations all around. This squeeze is an ecological tragedy, and it's also the reason you see so much wildlife here: the animals have nowhere else to go.",
    percheAndarci:
      "In two days of dawn and sunset outings you see wild orangutans, proboscis monkeys, Bornean pygmy elephants, crocodiles, macaques, hornbills and kingfishers, with a very good ratio of sighting odds to cost.",
    cosaVedere: [
      'Wild orangutans in the trees along the banks, building their night nests at sunset',
      'Proboscis monkeys, the monkeys with the enormous nose that exist only in Borneo',
      'Bornean pygmy elephants, moving in herds along the river',
      'Estuarine crocodiles, best seen on the night outings',
      "Several species of hornbill, including the rhinoceros hornbill with its orange casque",
    ],
    cosaFare: [
      "The dawn and sunset boat outings, the heart of the experience (there's a dedicated experience page)",
      'A night boat outing with torches, for crocodiles, owls and nightjars',
      'A guided trek in the forest behind the lodge, with leech socks',
    ],
    doveDormire:
      "In the lodges along the river, almost all around Sukau and Bilit, to be booked as a package with meals and boat outings included: it's the only sensible way to organize. They range from very basic to comfortable, and the price difference lies more in the room than in the guides.",
    doveMangiare:
      "There's no choice, and that's normal: you eat at the lodge, buffet style, three times a day. Simple Malay food: rice, chicken, river fish, stir-fried vegetables, fruit. Good and repetitive. There are no shops: water, snacks and above all cash have to be picked up in Sandakan before leaving.",
    comeArrivare: "A few hours by road from Sandakan, about two, to Sukau or Bilit, then the boat to the lodge. Almost all packages include the transfer from Sandakan, Sepilok or straight from the airport, and many stop at the Gomantong Caves on the way. Going on to Semporna takes five to six hours by car, or the flight from Sandakan to Tawau and an hour and a half by road.",
    comeSpostarsi: "Only by boat, with outings organized by the lodge: there are no roads along the river.",
    periodoMigliore:
      "March to October. In the rainy season the river rises and the animals scatter into the flooded forest instead of concentrating on the banks: the odds of seeing them drop considerably.",
    costi: "per-person, per-night packages with full board, boat trips and transfers included, often paid partly in cash; price differences are mostly about the room level. Gomantong costs about 30 RM for foreigners (about €6). Budget about €50-80 a day per person in a homestay or a simple lodge; mid-range €100-180 in the comfortable lodges of Sukau; high over €250 with the best rooms and private guides.",
    erroriDaEvitare: [
      "Staying just one night: with two outings you depend on luck, with four or six the odds change completely",
      "Arriving without cash: there are no ATMs along the river, and many lodges and extra services are paid only in ringgit",
      "Expecting the animals to be close: you see them from the boat, often far away and backlit. Binoculars change the day more than any camera lens",
      "Underestimating the mosquitoes on the evening outings: here high-concentration repellent is really needed",
    ],
    miaEsperienza:
      "On the Kinabatangan Borneo keeps every promise, and at the same time you understand what has happened to this island. We arrived in the afternoon, and we did the first sunset outing that same evening. You head out by boat at dawn, go up the river with the engine idling and in two hours you see proboscis monkeys leaping between the trees, hornbills passing in pairs, macaques and, with a bit of luck, a wild orangutan moving very slowly on a branch. Then the boat turns into a tributary, the strip of forest thins out and behind it appear the neat rows of oil palms, as far as the eye can see. That's where you understand why the animals are all concentrated in a strip a few hundred meters wide. It's not a successful reserve, it's what's left. Two practical things matter more than the others. Stay at least two nights, because every outing is a lottery and four tickets are worth more than two. And bring binoculars: you're almost always looking at twenty meters, and without them you miss half of what the guide points out.",
    luoghi: [
      {
        nome: "Dawn river cruise",
        testo: "You go up the river with the engine idling in the most active hour. You see proboscis monkeys, macaques, hornbills and, with luck, wild orangutans in the trees.",
        come: "By boat with the lodge, at set times. Packages include transfer, full board and boat trips.",
        quando: "At dawn: the light is low and animals are active.",
        tempo: "2 hours",
        consiglio: "Binoculars change the day more than any telephoto lens."
      },
      {
        nome: "Sunset and night trips",
        testo: "Orangutans build their nest for the night, proboscis monkeys gather in the riverside trees, and at night you see crocodiles, owls and other nocturnal animals.",
        come: "By boat with the lodge, at set times.",
        quando: "At sunset and after dinner.",
        tempo: "2 hours per trip",
        consiglio: "High-concentration repellent is really needed: the mosquitoes are aggressive."
      },
      {
        nome: "Pygmy elephants and river wildlife",
        testo: "Bornean pygmy elephants move in herds along the banks. The river is also home to saltwater crocodiles, several hornbill species including the rhinoceros hornbill, and macaques.",
        come: "You see them from the boat, usually at a distance and against the light.",
        quando: "Elephants move around a lot: sightings aren't guaranteed at any time of year; ask the lodge where they've been seen recently.",
        tempo: "during the trips",
        consiglio: "Do at least four to six trips: with two you depend on luck."
      },
      {
        nome: "Gomantong Caves",
        testo: "Caves inside Gomantong Hill, the largest limestone outcrop of the lower Kinabatangan, with colonies of bats (a 2012 count estimated about 275,000) and swiftlets. The nests are harvested twice a year, February to April and July to September, by licensed collectors only. Inside you walk on a wooden boardwalk.",
        come: "By car, usually with the lodge transfer or an outing. You visit Simud Hitam cave, a few minutes' walk from the entrance; Simud Putih is closed to the public.",
        quando: "In the afternoon, towards the evening bat exodus.",
        tempo: "2 hours",
        consiglio: "Closed shoes and a torch: the floor is covered in guano and the smell is strong.",
        costo: "About 30 RM for foreigners, about €6.",
        lat: 5.5299,
        lng: 118.0751,
      },
      {
        nome: "Menanggul tributary",
        testo: "A narrow tributary of the Kinabatangan near Sukau, where the boat passes a few metres from the banks. In the late afternoon proboscis monkeys settle into the trees for the night, and you see kingfishers and crocodiles.",
        come: "With the boat trips of the Sukau lodges.",
        quando: "Late afternoon.",
        tempo: "2 hours",
      },
      {
        nome: "Kelenanap oxbow lake",
        testo: "A horseshoe lake formed by an abandoned bend of the river, reached by going up the Kinabatangan. It is one of the best places for birds, hornbills included, in the first hours of the day.",
        come: "On the lodges' morning outing, by boat.",
        quando: "At dawn.",
        tempo: "1-2 hours",
      },
      {
        nome: "Agop Batu Tulug",
        testo: "Caves in a limestone hill by the river at Batu Puteh, with about 125 carved wooden coffins usually attributed to the Orang Sungai, the river peoples. It is a state heritage site, with a small museum and a wooden stairway up to the caves.",
        come: "By car on the Sandakan-Lahad Datu road, about an hour and a half from Sandakan.",
        quando: "In the morning, before the heat.",
        tempo: "1-2 hours",
        lat: 5.4157,
        lng: 117.9424,
        url: "https://museum.sabah.gov.my/",
      },
      {
        nome: "Batu Puteh and community ecotourism",
        testo: "The village of Batu Puteh, on the upper stretch, hosts a community-run ecotourism project with homestays, boat trips and reforestation days in degraded areas. It is a way to see the river from the side of those who live on it.",
        come: "By car on the Sandakan-Lahad Datu road; book in advance.",
        quando: "All year.",
        tempo: "1-2 days",
        lat: 5.4201,
        lng: 117.9418,
      },
      {
        nome: "Guided trekking and night walk",
        testo: "Walks in the forest behind the lodges, by day or by torchlight after dinner: insects, frogs, spiders, owls and, with luck, a tarsier. The ground is muddy and leeches are the rule.",
        come: "With the lodge guides; many lend rubber boots.",
        quando: "In the afternoon or after dinner.",
        tempo: "1-2 hours",
        consiglio: "Leech socks and long sleeves.",
      }
    ],
    programmi: [
      {
        titolo: "2-3 nights",
        tappe: [
          "Day 1: arrival midday, sunset trip",
          "Day 2: dawn cruise, free morning, guided trek in the afternoon, night trip",
          "Day 3: last dawn cruise and departure"
        ]
      },
      {
        titolo: "3 nights",
        tappe: [
          "Day 1: Gomantong on the way, sunset trip on the Menanggul",
          "Day 2: dawn at the Kelenanap oxbow lake, trekking in the afternoon, night trip",
          "Day 3: dawn cruise, then Agop Batu Tulug or half a day at Batu Puteh",
          "Day 4: last dawn trip and departure",
        ],
      }
    ],
    zone: [
      {
        nome: "Sukau",
        perChi: "anyone who wants to be near trips on the main river",
        testo: "River lodges with full board. The classic place, a bit more expensive."
      },
      {
        nome: "Bilit",
        perChi: "anyone who wants to save",
        testo: "Simpler lodges, on a more isolated stretch of the river. A bit less convenient to reach."
      },
      {
        nome: "Batu Puteh",
        perChi: "those looking for a community homestay",
        testo: "Village family homes on the upper stretch of the river. Simpler, with the income staying in the community.",
      }
    ],
    sapori: [
      {
        nome: "Lodge cooking",
        testo: "Buffet or served meals, with rice, fish and vegetables. It is the only choice and varies by lodge."
      },
      {
        nome: "River fish",
        testo: "Local fish is grilled or fried with sambal."
      },
      {
        nome: "Ulam",
        testo: "Salad of fresh herbs eaten with rice and sambal."
      }
    ],
    attenzioni: [
      "Bring cash: along the river there are no ATMs and many services are paid only in ringgit.",
      "Animals are seen at a distance and often against the light: don't expect them close.",
      "One night is not enough: with two trips you depend on luck.",
      "In the rainy season the river rises and animals disperse: fewer sightings."
    ],
    gite: [
      {
        nome: "Sepilok and Sandakan",
        distanza: "about 2-3 hours by road",
        testo: "The orangutan feedings at Sepilok, the sun bear centre and the Sandakan Memorial Park: the natural complement to the river, where you see the animals up close.",
        come: "With the lodge transfer, before or after the river.",
      },
      {
        nome: "Danum Valley",
        distanza: "a few hours by road south, to Lahad Datu",
        testo: "Never-logged primary forest, the opposite of the Kinabatangan: fewer easy sightings, giant trees and intact forest. It is not a day trip.",
        come: "Only with a package and the lodge transfer; at least three nights.",
      },
    ],
    faq: [
      {
        domanda: "How many nights do you need on the Kinabatangan?",
        risposta: "At least two: with four or five boat trips the chances of seeing orangutans and elephants change completely. One night leaves two trips and a lot of luck.",
      },
      {
        domanda: "Sukau or Bilit?",
        risposta: "Sukau is the classic spot, near the Menanggul and the Kelenanap oxbow lake; Bilit has simpler lodges on a more isolated stretch. Guides and trips are similar; the room is what changes most.",
      },
      {
        domanda: "Do you see pygmy elephants?",
        risposta: "Sometimes, but in no guaranteed period: the herds move a lot along the river. The lodges know where they have been seen in recent days.",
      },
      {
        domanda: "What is the best time for the Kinabatangan?",
        risposta: "March to October, with the river low and the animals concentrated on the banks. In the rainy season the water rises and wildlife spreads into the flooded forest.",
      },
      {
        domanda: "Do you need cash on the river?",
        risposta: "Yes. There are no ATMs along the river and many extras are paid only in ringgit: withdraw in Sandakan or Kota Kinabalu.",
      },
      {
        domanda: "What should you bring on the boat?",
        risposta: "Binoculars, a waterproof shell, a dry bag for phone and camera, and strong repellent for the evening trips. For the treks you need leech socks.",
      },
    ],
    esperienzeSlugs: ['crociera-kinabatangan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Colorful wooden boats moored on the muddy bank of the Kinabatangan River, with the rainforest on the opposite shore',
  },
  {
    slug: 'danum-valley',
    paeseSlug: 'borneo',
    ordine: 4,
    nome: 'Danum Valley',
    tipologia: ['nature', 'primary forest', 'trekking'],
    giorniConsigliati: '3 nights minimum',
    visitataPersonalmente: false,
    introduzione:
      "A vast never-logged primary rainforest, one of the few left in Southeast Asia: towering trees, a canopy walkway suspended among the crowns and a silence that early in the morning only the gibbons break. There are no villages or public roads.",
    percheAndarci: "It's the closest thing to Borneo before logging. The difference between primary and secondary forest, which on paper sounds like a technical detail, is visible to the naked eye here: trees of sizes that no longer exist elsewhere and a complete layered structure. And it is the reverse of the Kinabatangan: there animals are easy to see because they are squeezed into a strip of forest between the oil palms; here you see fewer because they still have 438 km² to roam. That is why you need at least three nights.",
    cosaVedere: [
      'The canopy walkway suspended among the crowns',
      'The emergent trees, including Menara, a yellow meranti of 97.6 meters',
      'The wildlife of the primary forest: gibbons, wild orangutans, deer, sun bears and, for a very lucky few, clouded leopards',
      'A viewpoint with an uninterrupted view over the forest',
    ],
    cosaFare: [
      'Guided treks by day and by night with naturalists who live on site',
      'The night drive on the forest track, the best time for mammals',
      'Dawn from the canopy walkway, when the gibbons start calling to each other',
      'A swim in the Danum River, with which every day ends',
    ],
    doveDormire:
      "You can only sleep inside the valley: at the research center, basic and cheaper, or at the high-end lodge. You can't come for the day: it's the most expensive stop of any trip in Borneo.",
    doveMangiare: "Full board included in the package, with no alternatives: there is nothing else around.",
    comeArrivare: "Fly to Lahad Datu from Kota Kinabalu, then about 82 km of mostly logging roads, around two hours, with the transfer organised by the lodge. You cannot get there on your own and there is no public transport: transfers leave at fixed times, so if you land late you sleep in Lahad Datu and leave the next morning.",
    comeSpostarsi: 'On foot on the trails, always with the guide, and by off-road vehicle for the night drives.',
    periodoMigliore:
      "March to October, the driest period. It rains anyway: it's equatorial rainforest, and the rain is part of the package.",
    costi: "the most expensive item of the trip, with multi-night packages that include transfers, full board and guided activities, plus 10 RM tourism tax per room per night for foreigners. The simplest research-centre packages cost about €300 a day per person; chalets €400-450; the upmarket lodge costs more still.",
    erroriDaEvitare: [
      "Going for the orangutans: they're there, but seeing them is unpredictable, and anyone coming for a single species is disappointed. You come here for the forest",
      "Staying one night: after the transfers only a few hours would remain, and the cost per hour would become absurd",
      "Underestimating the leeches: in the wet season there are lots, and the special socks are the only defense that works",
      "Taking a connection for granted: there isn't one here, and it's part of the charm",
    ],
    luoghi: [
      {
        nome: "Canopy walkway",
        testo: "A walkway suspended in the canopy of the primary forest, up to about 26 metres high at its highest point. It lets you see birds and monkeys at treetop level.",
        come: "On foot from the lodge with a guide, on a marked trail.",
        quando: "At dawn for the birds.",
        tempo: "2 hours",
        consiglio: "Go with a guide: they see what the visitor misses.",
        lat: 5.0197,
        lng: 117.7461,
      },
      {
        nome: "Emergent trees and primary forest",
        testo: "About 438 km² of almost undisturbed lowland rainforest, with a canopy that in places exceeds 70 metres. Here in 2019 Menara was measured, a yellow meranti of 97.6 metres: the tallest known living tropical tree.",
        come: "With trails and guided outings from the lodge.",
        quando: "In the morning and after rain.",
        tempo: "half a day",
        consiglio: "Walk slowly and silently: you see more than it seems.",
        lat: 4.9167,
        lng: 117.6667,
      },
      {
        nome: "Night drive and night walk",
        testo: "Night outings with a torch, by four-wheel drive or on foot. That's when owls, tarsiers, snakes and, with luck, a few mammals such as wild cats appear.",
        come: "With the lodge guides, at set times.",
        quando: "After sunset.",
        tempo: "2 hours",
        consiglio: "Do not leave the night outings for the last evening."
      },
      {
        nome: "Coffin Cliff and viewpoint",
        testo: "A forest trail to a cliff where hardwood coffins of the Kadazan-Dusun, some centuries old, still lie in hollows in the rock. Higher up a viewpoint opens over the valley, with unbroken forest to the horizon.",
        come: "On foot with a guide, starting from the lodge.",
        quando: "In the morning.",
        tempo: "3 hours",
        consiglio: "Set off early, before the heat."
      },
      {
        nome: "Jacuzzi Pool and the Danum River",
        testo: "A natural rock pool fed by forest streams, where you stop for a swim on the way back from Coffin Cliff. With the river in the right condition you can also float down the Danum on inner tubes.",
        come: "On foot with the guide; tubing depends on the water level and the weather.",
        quando: "In the hot hours of the day.",
        tempo: "1-2 hours",
      },
      {
        nome: "Danum Valley Field Centre",
        testo: "The research and education centre of Yayasan Sabah, the foundation that manages the reserve. Next to the laboratories a nursery grows hundreds of thousands of dipterocarp seedlings for reforestation, and visitors sleep in simple rooms or dormitories.",
        come: "With a package booked in advance and the transfer from Lahad Datu.",
        quando: "All year.",
        tempo: "at least 3 nights",
      },
      {
        nome: "Birdwatching",
        testo: "Over 270 bird species have been recorded in the reserve, with several hornbills, great argus pheasants and pittas; one small bird, the spectacled flowerpecker, has so far been recorded only here.",
        come: "With the naturalist guides, from the canopy walkway and along the access road.",
        quando: "At dawn and in the late afternoon.",
        tempo: "half a day",
        consiglio: "Binoculars are worth more than any telephoto lens.",
      },
      {
        nome: "Primary forest wildlife",
        testo: "Orangutans, Müller's gibbons, tarsiers, deer, sun bears, pygmy elephants and, for very few, the clouded leopard. The forest is so large that encounters stay rare and unpredictable, which is exactly why they mean more.",
        come: "On guided outings by day and by night.",
        quando: "At dawn, at sunset and after dark.",
        tempo: "throughout the stay",
      }
    ],
    programmi: [
      {
        titolo: "3 nights",
        tappe: [
          "Day 1: transfer from Lahad Datu, afternoon trail near the lodge, night walk",
          "Day 2: dawn at the canopy walkway, morning in the forest, afternoon viewpoint, night drive",
          "Day 3: longer trail with the guides and return the next day"
        ]
      },
      {
        titolo: "4 nights",
        tappe: [
          "As in the 3 nights",
          "An extra day for Coffin Cliff, the Jacuzzi Pool and tubing on the Danum River",
          "A last dawn on the canopy walkway before leaving",
        ],
      }
    ],
    zone: [
      {
        nome: "Lodge inside the reserve",
        perChi: "anyone who wants comfort inside the forest",
        testo: "The high-end lodge, with full board and guided activities. Expensive and with no connection."
      },
      {
        nome: "Research centre",
        perChi: "anyone looking for simple lodging",
        testo: "The research centre's hostel, with lower prices and minimal comfort."
      },
      {
        nome: "Lahad Datu",
        perChi: "those arriving the day before",
        testo: "The airport town, where you sleep if your flight lands late: transfers to the valley leave in the morning.",
      }
    ],
    sapori: [
      {
        nome: "Lodge cooking",
        testo: "Buffet or served meals, with rice, fish and vegetables. There is no other choice."
      }
    ],
    attenzioni: [
      "You do not go for the orangutans: they are there, but seeing them is unpredictable. You go for the forest.",
      "Leeches are numerous in the wet season: proper socks.",
      "There is no connection, and that is part of the charm.",
      "One night makes no sense: after transfers only a few hours remain."
    ],
    gite: [
      {
        nome: "Tabin Wildlife Reserve",
        distanza: "about 48 km east of Lahad Datu",
        testo: "A 1,225 km² reserve in the middle of the Dent peninsula, with mud volcanoes where animals come to lick salt: a good place for pygmy elephants, deer and primates. It adds to Danum for those with extra days.",
        come: "With a package and a night in the reserve, on paved and gravel roads.",
      },
      {
        nome: "Kinabatangan River",
        distanza: "a few hours by road north",
        testo: "The other face of Sabah: wildlife concentrated on the banks and seen from the boat. Together with Danum it gives the full picture of Borneo's forest.",
        come: "With an organised transfer and at least two nights in the river lodges.",
      },
    ],
    faq: [
      {
        domanda: "How many nights do you need in Danum Valley?",
        risposta: "At least three. The transfer from Lahad Datu takes about two hours each way, and with fewer nights you would have only a few hours in the forest.",
      },
      {
        domanda: "Do you see orangutans in Danum Valley?",
        risposta: "They live in the reserve, but sightings are unpredictable. You come to Danum for the primary forest as a whole, not for one species.",
      },
      {
        domanda: "Can you visit as a day trip?",
        risposta: "No. There is no public transport or free access: you enter only with a package and at least one night at one of the valley's lodges.",
      },
      {
        domanda: "Research centre or lodge?",
        risposta: "Danum Valley Field Centre is simpler and cheaper, with basic rooms and dormitories; the upmarket lodge offers more comfort and dedicated guides. The forest is the same.",
      },
      {
        domanda: "What is the best time for Danum Valley?",
        risposta: "March to October, the driest period. It still rains often: this is equatorial rainforest.",
      },
      {
        domanda: "What should you bring to Danum Valley?",
        risposta: "Leech socks, quick-drying long-sleeved clothes, a headlamp for night outings and binoculars. There is no connection.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'A river flowing through the lowland rainforest of the Danum Valley, Sabah',
    immagine: '/images/borneo/danum-valley.jpg',
  },
  {
    slug: 'semporna-sipadan',
    immagine: '/images/borneo/diving-sipadan.jpg',
    paeseSlug: 'borneo',
    ordine: 5,
    nome: 'Semporna and Sipadan',
    tipologia: ['diving', 'sea', 'islands'],
    giorniConsigliati: '4-5 days, to have a real chance of getting the permit',
    visitataPersonalmente: true,
    introduzione:
      "Sabah's southeastern coast, with the island of Sipadan offshore: a coral pinnacle rising from very deep water that many consider among the best dive sites in the world. Access is capped, you can't sleep on the island and the permit is obtained only through an operator.",
    percheAndarci:
      "For Sipadan, and it's no brochure exaggeration: schools of barracuda in spirals, countless turtles, reef sharks and walls dropping into the blue. And for Mabul and Kapalai, which are the opposite: shallow sandy bottoms where you hunt for the ocean's smallest and strangest animals.",
    cosaVedere: [
      'Sipadan, with the Barracuda Point, Drop Off and Turtle Tomb sites',
      'Mabul, famous for muck diving: pygmy seahorses, mimic octopuses, nudibranchs, frogfish',
      'Kapalai, with the stilt houses on the sandbank',
      'The Bajau Laut communities, the "sea nomads", who live on boats and stilt houses, often without citizenship',
      "Bohey Dulang, the island's volcanic crater, with the scenic trail over the lagoon",
    ],
    cosaFare: [
      "Dives at Sipadan, with the permit obtained through the operator (there's a dedicated experience page)",
      'Muck diving at Mabul and Kapalai, which is worth the trip even without Sipadan',
      'The climb up Bohey Dulang, to see the lagoon from the crater rim',
      'Snorkeling for those without certification, knowing that at Sipadan permits go mostly to divers',
    ],
    doveDormire:
      "We slept on the island of Mabul, to already be at sea; there are resorts and cheaper places there. Semporna town costs less and is more convenient for connections, but loses that advantage. **You can't sleep on the island of Sipadan**: the facilities were removed in 2004 precisely to protect it.",
    doveMangiare:
      "In the resorts you eat on full board, included in the package. In Semporna town there are seafood restaurants on the waterfront, excellent and cheap, where you pick the catch of the day at the stall.",
    comeArrivare: "Fly to Tawau (TWU) from Kota Kinabalu or Kuala Lumpur, then about an hour and a half by road to Semporna and 45 minutes by boat to Mabul. Almost all resorts arrange the whole transfer. Boats do not run after dark: if you arrive late you sleep in Semporna and leave the next morning. From the Kinabatangan it is five to six hours by car.",
    comeSpostarsi: 'Only by boat, with outings organized by the dive center.',
    periodoMigliore:
      "April to September, with the calmest sea and best visibility. From November to February the sea is rougher and some outings are canceled.",
    costi: "multi-night dive packages with full board; the Sipadan permit, 100 RM conservation fee plus 350 RM diving fee (about €90, 2026), is paid separately and is the item that decides everything. The number of dives per permit is set by Sabah Parks and changes over time: ask your operator. Tun Sakaran park costs 20 RM a day. Budget about €40-60 a day in Semporna with a guesthouse and a boat trip; mid-range €120-200 per person on Mabul dive packages; high over €250 in stilt resorts with Sipadan.",
    erroriDaEvitare: [
      "Showing up hoping to dive at Sipadan without having booked months before: daily permits are few, Sabah Parks assigns them to individual operators and they distribute them among guests, almost always on a rotation and rewarding longer stays",
      "Booking only two nights and counting on Sipadan: the rotation favors those who stay 4-5 nights, which is why the itinerary has to be built that way",
      "Trying to buy a permit on your own: they aren't given to individuals, only to authorized operators",
      "Ignoring the safety advisories for Sabah's east coast: the area is patrolled and tourism runs normally, but the situation should be checked before booking",
    ],
    miaEsperienza:
      "Sipadan lives up to its fame, which is rare for such a celebrated place. You descend along a wall that continues into the blue with no visible bottom, and after a few minutes a school of barracuda passes, twisting into a spiral as wide as a house; the turtles are so many that after the fifth you stop photographing them. Before booking, though, you have to understand that the permit decides everything. There are just over two hundred and fifty a day, they can't be bought from individuals: Sabah Parks assigns them to the operators, who then distribute them among guests on a rotation, and the rotation rewards those who stay longer. Booking two nights and hoping is the surest way not to dive at all. The surprise, though, was another: Mabul, which everyone treats as a base, is one of the best places in the world for muck diving, and searching a gorgonian for a pygmy seahorse the size of a fingernail is as much fun as a school of barracuda. One last thing, which isn't touristy: around the stilt houses live the Bajau Laut, often without citizenship of any state, and the contrast with the resorts fifty meters away deserves a moment's thought.",
    luoghi: [
      {
        nome: "Sipadan",
        testo: "An oceanic island rising 600 metres from the seabed. The dives are among the most famous in the world, with Barracuda Point, Drop Off and the Turtle Tomb, a cave beneath the island holding turtle skeletons.",
        come: "Only with authorized operators holding Sabah Parks permits. You cannot stay on the island: its facilities closed in 2004, and boats leave from Mabul, Kapalai or Semporna. The number of dives per permit is set by Sabah Parks: ask your operator.",
        quando: "Daily permits are capped and allocated by Sabah Parks to operators, who can book them up to six months ahead. The island usually closes in November to protect the reef.",
        tempo: "1 day per permit",
        costo: "For foreigners, conservation fee 100 RM plus diving permit 350 RM per person per day, about €90 in total (Sabah Parks, 2026); operators add them to the package with a surcharge.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Book 4-5 nights: the permit rotation rewards longer stays.",
        lat: 4.1147,
        lng: 118.6288,
      },
      {
        nome: "Mabul",
        testo: "A small island about 15 km north of Sipadan, famous for muck diving: pygmy seahorses, mimic octopus, nudibranchs and frogfish on sandy bottoms.",
        come: "From stilt resorts, by boat for dives.",
        quando: "Year-round; ask the operators about sea conditions.",
        tempo: "2-3 days",
        consiglio: "Sleep on Mabul, not in Semporna, to be close to the sites.",
        lat: 4.2458,
        lng: 118.6311,
      },
      {
        nome: "Kapalai",
        testo: "A sandbank with stilt resorts over the water, with snorkeling and dives from very good to excellent.",
        come: "With resort boats from Mabul.",
        quando: "Year-round; ask the operators about sea conditions.",
        tempo: "half a day",
        consiglio: "Check whether the resort is still open before booking.",
        lat: 4.2167,
        lng: 118.6833,
      },
      {
        nome: "Bajau Laut communities",
        testo: "The «sea nomads» live on boats and stilt houses, often without citizenship. In Semporna you see children paddling boats to beg.",
        come: "With operators who work with communities, not for photos.",
        quando: "All year.",
        tempo: "half a day",
        consiglio: "Do not give money to children in boats: it encourages them to skip school."
      },
      {
        nome: "Bohey Dulang",
        testo: "The island with a volcanic crater and a panoramic trail above the lagoon, in Tun Sakaran Marine Park: its highest peak reaches 353 metres.",
        come: "By boat from Semporna with organized tours.",
        quando: "In the morning.",
        tempo: "half a day",
        url: "https://www.sabahparks.org.my/tun-sakaran-marine-park",
        consiglio: "Bring hiking shoes and water: the trail is steep.",
        costo: "Tun Sakaran park fee 20 RM for foreign adults (about €4); Bohey Dulang climb 50 RM per person, plus the guide, 50 RM per six people (2026).",
        orari: "Park open daily 8 am-5 pm.",
        lat: 4.5994,
        lng: 118.7866,
      },
      {
        nome: "Pulau Sibuan",
        testo: "A low white-sand island in Tun Sakaran Marine Park, ringed by a shallow reef. It is the classic stop on snorkelling boat trips, often together with Bohey Dulang.",
        come: "On boat trips from Semporna.",
        quando: "In the morning, when the sea is calmest.",
        tempo: "1-2 hours",
        costo: "Included in the Tun Sakaran park fee, 20 RM for foreign adults (2026).",
        lat: 4.6504,
        lng: 118.658,
        url: "https://www.sabahparks.org.my/tun-sakaran-marine-park",
      },
      {
        nome: "Pulau Mantabuan",
        testo: "Another island of Tun Sakaran park, further east, with a beach and reef for snorkelling among corals and reef fish on the park trips.",
        come: "On boat trips from Semporna.",
        quando: "In the morning.",
        tempo: "1-2 hours",
        costo: "Included in the Tun Sakaran park fee (2026).",
        lat: 4.6352,
        lng: 118.7931,
      },
      {
        nome: "Semporna waterfront and fish market",
        testo: "Semporna lives around its port: fish and seafood stalls, painted Bajau boats and stilt restaurants where in the evening you pick the catch at the counter. Almost all boats to the islands leave from here.",
        come: "On foot in the centre.",
        quando: "In the evening, for dinner.",
        tempo: "1-2 hours",
        lat: 4.4757,
        lng: 118.616,
      }
    ],
    programmi: [
      {
        titolo: "1 day from Semporna, without diving",
        tappe: [
          "Morning boat into Tun Sakaran park",
          "Bohey Dulang climb before the heat",
          "Snorkelling at Sibuan and Mantabuan",
          "Seafood dinner on the Semporna waterfront",
        ],
      },
      {
        titolo: "4-5 days",
        tappe: [
          "Day 1: arrival in Tawau, transfer to Semporna and Mabul",
          "Day 2-4: dives at Sipadan when there is a permit, muck diving at Mabul on other days",
          "Day 5: Kapalai or Bohey Dulang, return to Semporna"
        ]
      }
    ],
    zone: [
      {
        nome: "Mabul",
        perChi: "anyone who dives and wants to be near the sites",
        testo: "Stilt resorts and lodges, often with full packages. Expensive and with no other choice."
      },
      {
        nome: "Semporna",
        perChi: "anyone who wants to save",
        testo: "Hotels in town, with boat transfers to the sites. Less convenient and noisier."
      },
      {
        nome: "Kapalai",
        perChi: "those who want to sleep over the water",
        testo: "Stilt resorts above a sandbank, near the Mabul sites. Full packages only.",
      }
    ],
    sapori: [
      {
        nome: "Grilled fish",
        testo: "Fresh catch in the restaurants on Semporna pier."
      },
      {
        nome: "Fish curry",
        testo: "Spicy fish curry with rice, in Semporna's eateries."
      }
    ],
    attenzioni: [
      "Sipadan permits cannot be bought by private individuals: Sabah Parks gives them to operators, and two nights are not enough.",
      "Check security advisories for Sabah's east coast: the area is patrolled, but check before leaving.",
      "Do not give money to Bajau children in boats.",
      "When the sea is rough some trips are cancelled: leave spare days."
    ],
    gite: [
      {
        nome: "Tun Sakaran Marine Park islands",
        distanza: "half- or full-day boat trip from Semporna",
        testo: "Bohey Dulang with its crater trail, then snorkelling at Sibuan and Mantabuan. It is the right day for non-divers or for the day before your flight.",
        come: "On an excursion from Semporna or the resorts, with the park fee.",
      },
      {
        nome: "Tawau Hills Park",
        distanza: "24 km northwest of Tawau, on the way to the airport",
        testo: "Hill forest with trails, waterfalls and hot springs. Entry, 20 RM for foreign adults, includes the botanical garden; it opens 8 am-4 pm on weekdays and 7:30 am-3:30 pm at weekends and on public holidays.",
        come: "By car or Grab from Tawau; it also works on departure day with an evening flight.",
      },
    ],
    faq: [
      {
        domanda: "How do you get a Sipadan permit?",
        risposta: "Only through an authorised operator: Sabah Parks allocates the daily permits to dive centres, which share them among guests in rotation. They are not sold to individuals.",
      },
      {
        domanda: "How many nights do you need to dive Sipadan?",
        risposta: "Four or five, because the rotation rewards longer stays; with two nights it is easy not to get a permit.",
      },
      {
        domanda: "How much does the Sipadan permit cost?",
        risposta: "For foreigners, 100 RM conservation fee plus 350 RM diving fee per day, about €90 in total (2026), usually added to the package with a surcharge.",
      },
      {
        domanda: "Can you sleep on Sipadan?",
        risposta: "No. The facilities on the island were removed in 2004 to protect it: you stay on Mabul, Kapalai or in Semporna and arrive by boat.",
      },
      {
        domanda: "What can non-divers do?",
        risposta: "Snorkelling at Mabul and in the Tun Sakaran park islands, such as Sibuan and Mantabuan, and the Bohey Dulang climb. Sipadan permits go mostly to divers.",
      },
      {
        domanda: "Is the Semporna area safe?",
        risposta: "The east coast has a guarded security zone with a night-time maritime curfew, and tourism runs normally. Still, check up-to-date travel advice before booking.",
      },
    ],
    esperienzeSlugs: ['diving-sipadan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'A school of fish and the coral reef in the waters of Sipadan, lit by shafts of sunlight',
  },
  {
    slug: 'kuching-bako',
    paeseSlug: 'borneo',
    ordine: 6,
    nome: 'Kuching and Sarawak',
    tipologia: ['city', 'nature', 'culture'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "Sarawak's capital sits on the river, with a tidy riverfront and a peculiar history: for a century it was the private kingdom of the \"white rajahs\", the English Brooke dynasty. Around it are Bako National Park with its proboscis monkeys, the Iban longhouse villages and the prehistoric Niah caves.",
    percheAndarci:
      "It's one of the most pleasant cities in Malaysia. And Sarawak has a history and ethnic makeup entirely different from Sabah: Iban culture dominates here, with the longhouses, very long communal houses where many families live.",
    cosaVedere: [
      "Kuching's riverfront and the old shophouses downtown",
      "The Sarawak Museum and the Borneo Cultures Museum, two rich ethnographic museums",
      'Bako National Park, with proboscis monkeys, macaques and sandstone formations on the sea',
      'The Sarawak Cultural Village, with the traditional houses of the different ethnic groups',
      'The Semenggoh Nature Reserve, with rehabilitated, now free-ranging orangutans',
      'The Niah caves, with traces of human presence from tens of thousands of years ago',
    ],
    cosaFare: [
      'A day at Bako, reachable only by boat, with trails among the forest and the cliffs',
      "Semenggoh at the morning feeding, knowing that in the fruiting season nobody may show up",
      'A night in an Iban longhouse along the Batang Ai or the Lemanak',
      'Sarawak laksa for breakfast, a dish different from all other Malaysian laksas',
    ],
    doveDormire:
      "On the riverfront or in Kuching's historic center, which is all walkable. For Bako it's worth a night in the park chalets: it allows the night walk and the dawn trails without depending on boat schedules, which are tied to the tide.",
    doveMangiare:
      "In Kuching you eat very well, and differently from the rest of Malaysia. The dish to try is Sarawak laksa, at breakfast, with a shrimp-and-spice broth that resembles neither Penang's nor the nyonya one. Then kolo mee, the dry noodles, and midin, a forest fern stir-fried with garlic found only here. The right places are the Chinatown night market and the food courts on the river.",
    comeArrivare: "Fly to Kuching (KCH) from Kuala Lumpur, just under two hours, or from Kota Kinabalu; there are also direct flights from Singapore. Here too there is a separate passport control: Sarawak has its own immigration, even with respect to Sabah. From the airport, south of the city, the centre is 20-30 minutes away by Grab or coupon taxi.",
    comeSpostarsi:
      "Kuching is walked and done with Grab. For Bako you need a bus and then a boat, with schedules tied to the tide; for Semenggoh, a bus or Grab.",
    periodoMigliore:
      "March to October. At Semenggoh the season matters a lot: from April to October the odds of seeing orangutans are much higher, while in the forest fruiting season they may not show up at all.",
    costi: "Bako 20 RM for foreign adults plus the boat from Kampung Bako, Semenggoh 10 RM, Niah 20 RM; the waterfront, the temples and the Darul Hana bridge are free. Kuching is cheap even by Malaysian standards: budget about €30-40 a day with a guesthouse in the centre and Grab; mid-range €60-100 with a waterfront hotel and a day trip; high over €150 with a Damai resort and private tours.",
    erroriDaEvitare: [
      "Going to Semenggoh in the fruiting season counting on seeing them: in the fruiting season the orangutans eat in the forest, and the reserve says so openly",
      "Doing Bako as a day trip without checking the tides: the boats come and go according to the water, and it's easy to get stuck",
      "Expecting Sarawak to be like Sabah: they're two states with separate history, populations and immigration, and going from one to the other means a new stamp in your passport",
      "Booking a \"tourist\" longhouse without checking: the experiences vary enormously, from the staged visit to a real stay in a community",
    ],
    miaEsperienza:
      "Kuching is Borneo's surprise: a quiet river city, with the pedestrian riverfront, low Chinese houses and a livability that no other Malaysian city of this size has. Sarawak laksa for breakfast, in one of those rooms with ceiling fans, is one of the best things in all of Malaysia. Bako is the park that delivers. You arrive only by boat, with schedules set by the tide, and within an hour on the trail you meet proboscis monkeys, the monkeys with the enormous nose that exist only on this island: you watch them from a few meters away eating leaves, paying no mind to who passes. On Semenggoh, instead, better to be clear: the orangutans are free and return to the platforms only when the forest offers little, so between November and March nobody may come, and the reserve writes this at the entrance. Anyone who has already seen Sepilok shouldn't come to Sarawak for this: come for Bako, for the longhouses and for the city.",
    luoghi: [
      {
        nome: "Kuching waterfront",
        testo: "The pedestrian waterfront on the Sarawak river, with old Chinese shophouses, Fort Margherita on the other bank and the boats. A quiet, livable city.",
        come: "On foot from the centre. Sampans cross the river for a few ringgit.",
        quando: "In the evening, with the lights on.",
        tempo: "2 hours",
        consiglio: "Take a sampan to Fort Margherita and walk back.",
        lat: 1.5605,
        lng: 110.3431,
      },
      {
        nome: "Sarawak Museum and Borneo Cultures Museum",
        testo: "Two ethnographic museums: objects of the Dayak peoples and the Borneo Cultures Museum, the newer one, with collections and longhouse reconstructions.",
        come: "In central Kuching, on foot or by taxi.",
        quando: "In the morning or in the hottest hours.",
        tempo: "2 hours",
        url: "https://sarawaktourism.com/",
        consiglio: "Visit them before going to a longhouse: it helps you understand what you are seeing.",
        orari: "Borneo Cultures Museum: Monday-Friday 9 am-4:45 pm; Saturday, Sunday and public holidays 9:30 am-4:30 pm.",
        lat: 1.5555,
        lng: 110.3425,
      },
      {
        nome: "Bako National Park",
        testo: "A seaside park with proboscis monkeys, macaques, bearded pigs and wave-carved sandstone stacks. It's one of the best places in Sarawak to see proboscis monkeys.",
        come: "From Kuching (about 40 km) by bus to Kampung Bako, then about 20 minutes by boat. Times depend on the tide.",
        quando: "In the morning, with the right tide.",
        tempo: "1 day",
        consiglio: "Check tide times: you risk getting stuck.",
        costo: "Entry 20 RM for foreign adults, about €4, plus the boat from Kampung Bako, agreed at the jetty.",
        lat: 1.7163,
        lng: 110.4442,
      },
      {
        nome: "Semenggoh Nature Reserve",
        testo: "A reserve with rehabilitated orangutans now free, who return to the platforms only when fruit is lacking in the forest.",
        come: "By taxi or tour from Kuching.",
        quando: "Two sessions a day, morning and afternoon (times at the ticket office). When the forest is full of fruit the orangutans show up less.",
        tempo: "2-3 hours",
        consiglio: "Go without counting on seeing them: the orangutans are free and only come if they want to.",
        costo: "10 RM for foreign adults, about €2.",
        lat: 1.4019,
        lng: 110.3144,
      },
      {
        nome: "Sarawak Cultural Village",
        testo: "A museum village with traditional houses of Sarawak's different ethnic groups, with craft and dance demonstrations.",
        come: "By bus or tour from Kuching, towards Damai.",
        quando: "In the morning.",
        tempo: "half a day",
        consiglio: "It is a reconstruction: see it as an introduction, not instead of a real longhouse.",
        orari: "Daily 9 am-5 pm.",
        url: "https://scv.com.my",
        lat: 1.7498,
        lng: 110.3168,
      },
      {
        nome: "Niah Caves",
        testo: "Huge caves in northern Sarawak with human remains from about 40,000 years ago, rock paintings about 1,200 years old in the Painted Cave and swiftlet-nest collectors at work on the walls. They have been a UNESCO World Heritage Site since 2024.",
        come: "From Miri by car, then a boardwalk through the forest.",
        quando: "In the morning.",
        tempo: "half a day",
        consiglio: "Reached by a detour from the north: weigh the time.",
        costo: "Park entry 20 RM for foreign adults, about €4.",
        lat: 3.8141,
        lng: 113.7827,
      },
      {
        nome: "Fort Margherita",
        testo: "The English-castle-style fort built in 1879 by Charles Brooke, the second White Rajah, to defend Kuching from pirates coming up the river. It is named after his wife Margaret and now houses the Brooke Gallery, on Sarawak's history under the dynasty.",
        come: "By sampan from the waterfront, a few minutes, or by car via Petra Jaya.",
        quando: "In the morning or late afternoon.",
        tempo: "1 hour 30 minutes",
        lat: 1.5606,
        lng: 110.3494,
      },
      {
        nome: "Astana",
        testo: "The palace built in 1870 by Charles Brooke as a wedding gift for his wife, on the north bank of the river, opposite the waterfront. It is the residence of Sarawak's governor: the interior is closed, but the gardens are open.",
        come: "By sampan from the waterfront.",
        quando: "In the daytime; from the waterfront it also looks good at sunset.",
        tempo: "30 minutes",
        lat: 1.5636,
        lng: 110.346,
      },
      {
        nome: "Main Bazaar and Carpenter Street",
        testo: "The oldest streets in the centre, parallel to the river: Main Bazaar with craft and antique shops in the shophouses, Carpenter Street with old workshops, kopitiam and small Chinese temples.",
        come: "On foot from the waterfront.",
        quando: "In the morning or late afternoon.",
        tempo: "1-2 hours",
        lat: 1.5588,
        lng: 110.3469,
      },
      {
        nome: "Tua Pek Kong Temple and Chinese History Museum",
        testo: "The oldest Chinese temple in Kuching, at the end of the waterfront, and opposite it the small museum on the history of Sarawak's Chinese communities. Together they show a side of the city the waterfront alone does not.",
        come: "On foot from the waterfront.",
        quando: "In the morning.",
        tempo: "45 minutes",
        lat: 1.5571,
        lng: 110.349,
      },
      {
        nome: "Darul Hana Bridge",
        testo: "The S-shaped pedestrian bridge over the Sarawak River, the only one linking the two banks of the centre on foot. It leads from the waterfront to the state legislative assembly building, with its large golden roof, and is lit up in the evening.",
        come: "On foot from the waterfront.",
        quando: "In the evening.",
        tempo: "30 minutes",
        costo: "Free.",
        lat: 1.5609,
        lng: 110.3456,
      },
      {
        nome: "Annah Rais Longhouse",
        testo: "A Bidayuh longhouse in the interior south of Kuching, near the border with Kalimantan, lived in by village families and open to visitors, with its long communal bamboo veranda. You can stay overnight in a homestay.",
        come: "By car or on a tour from Kuching, about an hour and a half.",
        quando: "In the daytime, or with a night.",
        tempo: "half a day",
        lat: 1.1561,
        lng: 110.2654,
      },
      {
        nome: "Kubah National Park",
        testo: "A 2,230-hectare park in the Matang range, about 20 km from Kuching, with dipterocarp forest, palms, orchids and a great many frogs. On clear days its three sandstone peaks, Serapi, Selang and Sendok, can be seen from the city.",
        come: "By car or Grab from Kuching.",
        quando: "In the morning, or in the evening for the frogs with a guide.",
        tempo: "half a day",
        lat: 1.6126,
        lng: 110.1966,
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Sarawak laksa for breakfast",
          "Waterfront, Main Bazaar and Carpenter Street",
          "Tua Pek Kong Temple and the Chinese History Museum",
          "Borneo Cultures Museum in the hot hours",
          "Sampan to Fort Margherita and back over the Darul Hana bridge at sunset",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above",
          "Day 2: Bako on the morning boat, back in the afternoon and dinner at the night market",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: waterfront, museums and Sarawak laksa for breakfast",
          "Day 2: Bako with the morning boat, return in the afternoon",
          "Day 3: Semenggoh in the morning, Sarawak Cultural Village in the afternoon"
        ]
      },
      {
        titolo: "4 days",
        tappe: [
          "As the 3 days, with the fourth for a longhouse or an excursion outside town"
        ]
      }
    ],
    zone: [
      {
        nome: "Central Kuching (Waterfront)",
        perChi: "anyone who wants to do everything on foot",
        testo: "Hotels and guesthouses near the waterfront and restaurants. Very convenient, noisy in the evening."
      },
      {
        nome: "Around Bako",
        perChi: "anyone who wants to wake up in the forest",
        testo: "A few lodges near the park, to see the animals at dawn."
      },
      {
        nome: "Santubong and Damai",
        perChi: "those who want sea and mountain",
        testo: "Resorts on the Santubong peninsula, near the Sarawak Cultural Village and Mount Santubong. Handy for day trips, far from the city in the evening.",
      }
    ],
    sapori: [
      {
        nome: "Sarawak laksa",
        testo: "Noodles in a spice and coconut broth with prawns, chicken and egg. It is Kuching's breakfast and among the best things in Malaysia."
      },
      {
        nome: "Kolo mee",
        testo: "Noodles dressed with meat and sauce, served at breakfast."
      },
      {
        nome: "Midin",
        testo: "A wild fern stir-fried with garlic, typical of Sarawak."
      },
      {
        nome: "Fish in banana leaf",
        testo: "Marinated fish cooked in a leaf, Dayak cooking."
      }
    ],
    attenzioni: [
      "Sarawak has its own immigration: a new passport stamp even when arriving from the peninsula or Sabah.",
      "At Bako times depend on the tide: check first.",
      "At Semenggoh the orangutans aren't guaranteed, especially when the forest is full of fruit.",
      "Choose the longhouse carefully: experiences range from a staged visit to a real stay."
    ],
    gite: [
      {
        nome: "Santubong peninsula and Damai",
        distanza: "about 35 km, 40 minutes by car",
        testo: "Mount Santubong, with a steep trail to the top, the Damai beaches and the Sarawak Cultural Village. At sunset, boat trips leave from the estuary to look for Irrawaddy dolphins.",
        come: "By Grab or the resort shuttles.",
      },
      {
        nome: "Iban longhouses of the Batang Ai or the Lemanak",
        distanza: "4-5 hours by road east, then by boat",
        testo: "Iban longhouses along the rivers of the interior: communal life on the veranda, rice fields, forest. It is the experience that varies most depending on the community and the operator.",
        come: "With an operator that works with the community, at least one night.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Kuching?",
        risposta: "Three: one for the city and museums, one for Bako and one for Semenggoh and the Sarawak Cultural Village. A fourth adds a longhouse or the Santubong peninsula.",
      },
      {
        domanda: "How do you get to Bako?",
        risposta: "By bus or Grab to Kampung Bako, about 40 km, then about twenty minutes by boat. Boat times depend on the tide: agree the return before leaving.",
      },
      {
        domanda: "Are orangutans guaranteed at Semenggoh?",
        risposta: "No: they are free and come back to the platforms mostly when the forest offers little. Between November and March, in fruit season, none may come.",
      },
      {
        domanda: "Do you need your passport between Sabah and Sarawak?",
        risposta: "Yes. Sarawak has its own immigration: on arrival you go through passport control and get a new stamp, even from Kota Kinabalu or the peninsula.",
      },
      {
        domanda: "What should you eat in Kuching?",
        risposta: "Sarawak laksa for breakfast, kolo mee and midin, the forest fern stir-fried with garlic. The right places are the kopitiam in the centre, the night market and the riverside food courts.",
      },
      {
        domanda: "How do you choose a longhouse?",
        risposta: "By checking the operator: it ranges from a visit staged for groups to a real stay with a family. The Batang Ai and Lemanak longhouses need at least one night.",
      },
    ],
    esperienzeSlugs: ['bako-nasiche'],
    tripSlugs: [],
    imageAlt: 'Mount Santubong in the haze beyond the Sarawak River, near Kuching',
    immagine: '/images/borneo/kuching-bako.jpg',
  },
  {
    slug: 'gunung-mulu',
    paeseSlug: 'borneo',
    ordine: 7,
    nome: 'Gunung Mulu',
    tipologia: ['nature', 'caves', 'trekking'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: false,
    imageAlt: 'The Pinnacles of Gunung Mulu: grey limestone spires tens of meters tall between the rainforest and the mist',
    introduzione:
      "A UNESCO World Heritage national park in the interior of Sarawak, usually reached by air, with some of the largest cave systems on the planet. The Sarawak Chamber is among the largest known underground chambers, and almost every evening millions of bats stream out of Deer Cave in spiral formations.",
    percheAndarci: "For the caves, which in size have no parallel in the world, and for the Pinnacles, limestone blades tens of meters tall on the mountainside, reached by a very demanding trek. The Sarawak Chamber is the largest known underground chamber, and Deer Cave has a mouth so wide that the evening bat exodus looks like a column of dark smoke above the forest. The park is usually reached by plane and beds are few: book the bed first, then the flight.",
    cosaVedere: [
      'Deer Cave, with the evening exit of millions of bats',
      'Lang Cave, rich in formations',
      'Clearwater Cave and Wind Cave, reached by boat along the river',
      'The Pinnacles of Gunung Api, the limestone blades on the mountainside',
      "The park's canopy walkway, 420 meters long",
    ],
    cosaFare: [
      'Watch the bats leave Deer Cave at sunset, from the dedicated observatory',
      'The three-day trek to the Pinnacles, with a night at the base camp and a brutal climb over rock and ladders',
      'Adventure caving, for those who want to enter the unequipped parts',
      "The canopy walkway and the forest trails around the park headquarters",
    ],
    doveDormire:
      "Inside the park, in the accommodation run by the park itself, or in a resort just outside. Options are few and need to be booked in advance, because beds in effect limit the number of visitors.",
    doveMangiare: "The park restaurant and the resort one, with no alternatives. As at the other forest stops, whatever you need has to be brought from outside.",
    comeArrivare: "Usually by plane, with domestic flights from Miri, about half an hour, and from Kota Kinabalu and Kuching: no road reaches the park, and the alternative is a long boat trip upriver from Marudi. The airport is a few minutes from park headquarters. The planes are small and seats are few, which is the main reason this stop must be organised before everything else.",
    comeSpostarsi: 'On foot along the park boardwalks and by boat along the river for the farther caves.',
    periodoMigliore:
      "all year, but the bat exodus isn't guaranteed: if it rains at sunset, they stay inside. The Pinnacles trek is safer in the driest season.",
    costi: "every cave and every guided excursion is paid separately: Deer and Lang Cave 35 MYR, Clearwater and Wind Cave 70 MYR, canopy walk 55 MYR, Pinnacles 465 MYR per person (2026). Sleeping in the park costs 370-402 MYR a night for two (about €75-80), the dormitory 80 MYR per bed, plus 10 RM tourism tax per room. Budget about €40-60 a day with the dormitory and the main tours; mid-range €100-150 with a room in the park; high over €250 with the resort and advanced caving. The biggest item is still the flight.",
    erroriDaEvitare: [
      "Booking the flight before the lodging: beds inside the park are limited, and without accommodation you're going nowhere",
      "Planning a single night: between flights and internal distances there would be little time left",
      "Signing up for the Pinnacles trek while underestimating it: it's a very demanding climb over rock and ladders, with time limits set by the guides",
      "Counting on the bat exodus: if it rains they don't come out, and it happens often",
    ],
    luoghi: [
      {
        nome: "Deer Cave and the bat exodus",
        testo: "The largest cave passage in the world, 120 to 150 metres across. At sunset about three million bats spiral out towards the forest, like a column of smoke.",
        come: "On foot from park headquarters on a boardwalk. Deer Cave is seen on a tour along with Lang Cave; the bat exodus is watched from a platform.",
        quando: "At sunset. If it rains the bats do not come out.",
        tempo: "half a day",
        url: "https://mulupark.com/deer-lang/",
        consiglio: "Do not plan the exodus as your only evening: with rain it can be cancelled.",
        costo: "Guided tour of Deer Cave and Lang Cave 35 MYR per person, about €7 (2026), guide included.",
        orari: "Departures daily at 2 pm or 2:30 pm from headquarters; the bat exodus can start after 5 pm. The total route is 9 km, the first 3 on an almost flat boardwalk.",
        lat: 4.0271,
        lng: 114.8286,
      },
      {
        nome: "Lang Cave",
        testo: "A smaller cave rich in formations, stalactites and stalagmites that are lit up.",
        come: "On a guided tour from headquarters.",
        quando: "In the afternoon, on the 2 pm tour.",
        tempo: "1.5 hours",
        consiglio: "Combined with Deer Cave on the same tour.",
        costo: "Included in the tour with Deer Cave, 35 MYR (2026).",
        lat: 4.0243,
        lng: 114.8252,
      },
      {
        nome: "Clearwater Cave and Wind Cave",
        testo: "Caves reached by boat along the river. Clearwater is the longest cave system in Southeast Asia, with over 227 km of passages explored (2018); Wind Cave has cool galleries with formations.",
        come: "By boat from headquarters, then on foot with a guide.",
        quando: "In the morning.",
        tempo: "half a day",
        url: "https://mulupark.com/clearwater-winds/",
        consiglio: "Bring a swimsuit: you can swim in the river pools.",
        costo: "70 MYR per person, about €14 (2026), with guide and longboat; bring your own food and water.",
        orari: "Daily, departures at 8:45 am and 9:15 am; about 4 hours.",
        lat: 4.065,
        lng: 114.8314,
      },
      {
        nome: "Pinnacles of Gunung Api",
        testo: "Limestone blades up to 50 metres high on the flank of Gunung Api. The last stretch climbs 2.4 km and about 1,200 metres to the viewpoint, over rock and ladders: a very demanding trek, not advised for those 16 and under.",
        come: "Only with a park guide: three days and two nights, with a boat stretch, a long walk to Camp 5 and a very steep final climb with ropes and ladders.",
        quando: "In the driest season.",
        tempo: "3 days, 2 nights",
        consiglio: "Underestimating it is the most common mistake: training is needed.",
        costo: "465 MYR per person, about €93, with guide, boat and camp (2026); minimum three participants, one or two pay much more.",
        orari: "Departure at 9:15 am from headquarters; the climb starts around 6:30 am on the second day.",
        url: "https://mulupark.com/pinnacles/",
      },
      {
        nome: "Canopy skywalk",
        testo: "A 420-metre walkway suspended 25 metres up among the forest canopy.",
        come: "On foot from headquarters, with a guide only.",
        quando: "Early in the morning.",
        tempo: "1 hour",
        consiglio: "Combine with a walk in the forest.",
        costo: "55 MYR per person, about €11, guide included (2026).",
        orari: "Departures at 7, 8:30, 10, 10:30 am and 12:30 pm; about 2 hours.",
        url: "https://mulupark.com/canopy-walk/",
        lat: 4.0326,
        lng: 114.819,
      },
      {
        nome: "Batu Bungan",
        testo: "A Penan settlement on the Melinau River, the first stop on the boat trip to Wind Cave and Clearwater, with a small handicraft market.",
        come: "On the Clearwater and Wind Cave boat tour.",
        quando: "In the morning; the market is closed on Sundays.",
        tempo: "30 minutes",
        lat: 4.0536,
        lng: 114.8186,
      },
      {
        nome: "Racer Cave",
        testo: "An intermediate-level adventure cave, named after the racer snakes that hunt bats and swiftlets inside. You walk, climb with ropes and cross unlit stretches.",
        come: "Only with a park guide, by booking; minimum age 12.",
        quando: "All year.",
        costo: "165 MYR per person, about €33 (2026).",
        lat: 4.0585,
        lng: 114.8279,
        url: "https://mulupark.com/racer-cave/",
      },
      {
        nome: "Sarawak Chamber",
        testo: "The largest known underground chamber, in the Gua Nasib Bagus cave. You reach it after three hours of trail to the entrance, then a water channel of about 900 metres and a rope traverse, with a compulsory night at Camp 1.",
        come: "By booking, groups of 3 to 6, minimum age 16; you must be able to swim and prove experience in undeveloped caves.",
        quando: "Only with low water: if the level is high the guide cancels the trip.",
        tempo: "2 days, 1 night",
        costo: "315 MYR per person, about €63 (2026).",
        lat: 4.0719,
        lng: 114.8768,
        url: "https://mulupark.com/sarawak-chamber-overnight-at-camp-1/",
      },
      {
        nome: "Paku Waterfall",
        testo: "A forest trail from headquarters to a small waterfall with a pool for swimming. It is the easiest self-guided walk in the park.",
        come: "On foot from headquarters, on a marked trail.",
        quando: "In the morning, before the cave tours.",
        tempo: "half a day",
        lat: 4.037,
        lng: 114.8293,
      },
      {
        nome: "Night walk",
        testo: "A guided torchlight outing in the forest around headquarters: stick insects, frogs, spiders and snakes, all a few metres from the boardwalks.",
        come: "With a park guide.",
        quando: "After dinner.",
        tempo: "1-2 hours",
        costo: "35 MYR per person, about €7 (2026).",
        orari: "Departures at 7 pm or 7:30 pm, depending on the weather.",
        url: "https://mulupark.com/night-walk/",
      }
    ],
    programmi: [
      {
        titolo: "3 days",
        tappe: [
          "Day 1: arrival by air, Deer Cave, Lang Cave and the bat exodus",
          "Day 2: boat to Clearwater Cave and Wind Cave, canopy skywalk",
          "Day 3: free morning and return flight"
        ]
      },
      {
        titolo: "5 days with the Pinnacles",
        tappe: [
          "Day 1: arrive by plane, Deer Cave, Lang Cave and the bat exodus",
          "Days 2-4: Pinnacles trek with two nights at Camp 5 and the boat on the Melinau",
          "Day 5: canopy walk in the morning and flight back",
        ],
      }
    ],
    zone: [
      {
        nome: "Inside the park (near headquarters)",
        perChi: "everyone: beds are few",
        testo: "Lodge, hostel and a resort near the entrance. You book the bed first, then the flight.",
        fascia: "€75-80",
      },
      {
        nome: "Park dormitory",
        perChi: "solo travellers or those on a tight budget",
        testo: "A 14-bed dormitory with shared bathroom and hot water, breakfast included: 80 MYR per bed per night (2026).",
      },
      {
        nome: "Resort outside the park",
        perChi: "those who want a pool and spa",
        testo: "A five-star resort about five minutes from the park, with rooms on boardwalks in the forest.",
      }
    ],
    sapori: [
      {
        nome: "Lodge cooking",
        testo: "Simple meals, with rice, fish and vegetables."
      }
    ],
    attenzioni: [
      "There are no roads: you arrive by plane (or on a long boat trip up from Marudi) and beds in the park are few. Book accommodation first, then the flight.",
      "The bat exodus is not guaranteed: if it rains, they stay inside.",
      "The Pinnacles trek is hard: rock and ladders, with time limits.",
      "One night is not enough: between flights and distances little time would remain."
    ],
    gite: [
      {
        nome: "Niah National Park",
        distanza: "about 2 hours by car from Miri",
        testo: "Caves with human remains about 40,000 years old and the paintings of the Painted Cave, a UNESCO World Heritage Site since 2024. It makes sense with a night in Miri between arrival and the Mulu flight.",
        come: "By car from Miri, before or after the Mulu flight.",
      },
      {
        nome: "Miri",
        distanza: "about 30 minutes by plane",
        testo: "The city from which almost all flights to the park depart, and the base for Niah. A night here helps when flight times do not match.",
        come: "On domestic flights from Mulu.",
      },
    ],
    faq: [
      {
        domanda: "How do you get to Gunung Mulu?",
        risposta: "By plane, usually from Miri with about half an hour of flight, or from Kota Kinabalu and Kuching. There are no roads: the alternative is a long boat trip upriver from Marudi.",
      },
      {
        domanda: "How many days do you need in Mulu?",
        risposta: "Three for the main caves and the canopy walk; five if you add the Pinnacles trek, which takes three days and two nights.",
      },
      {
        domanda: "How much do the cave tours cost?",
        risposta: "Deer and Lang Cave 35 MYR per person, Clearwater and Wind Cave 70 MYR with the boat, canopy walk 55 MYR (2026). All activities are done with park guides.",
      },
      {
        domanda: "Is the bat exodus always visible?",
        risposta: "No. It usually starts after 5 pm, but in rain the bats stay inside: it is worth having at least two evenings.",
      },
      {
        domanda: "Is the Pinnacles trek for everyone?",
        risposta: "No: 2.4 km and about 1,200 metres of ascent over rock and ladders, with descents that often take five hours or more. The park advises against it for those 16 and under and requires at least three participants.",
      },
      {
        domanda: "Where do you sleep in Mulu?",
        risposta: "Inside the park, in bungalows, longhouses and a dormitory run by the park, or in a resort five minutes away. Places are few: book the accommodation before the flight.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
  },
]
