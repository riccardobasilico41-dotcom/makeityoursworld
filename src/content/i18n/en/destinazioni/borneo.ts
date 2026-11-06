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
    comeArrivare:
      "By air to Kota Kinabalu (BKI) from Kuala Lumpur, with many flights a day. On arrival you go through the Sabah passport check, which has its own immigration even for those arriving from the peninsula.",
    comeSpostarsi:
      "In the city on foot and with Grab. For Kinabalu Park and for Sandakan you need intercity minibuses or private transfers: the roads are slow and on the map distances are deceptive.",
    periodoMigliore:
      "March to September for the climb, when it rains less at the summit. In bad weather the mountain closes, and in the past it has also happened after earthquakes: better to set the date with some margin.",
    costi:
      "the Kinabalu climb is expensive and there's no way to save: permit, mandatory guide, night at Laban Rata and transfers are paid as a package, and it's one of the highest items of the whole trip. The marine park islands, on the other hand, cost very little.",
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
        costo: "Climbing permit RM 400 for foreign adults, guide RM 350 per five people, insurance RM 10 (Sabah Parks rates in force since 2023); hut and park entry extra.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Sleep near the park the night before the climb and not in Kota Kinabalu, to start rested."
      },
      {
        nome: "Kinabalu Park",
        testo: "The park, a UNESCO site since 2000, has extraordinarily rich biodiversity. It can be visited without climbing to the summit, with forest trails, orchids and a botanical centre.",
        come: "By bus or car from Kota Kinabalu towards Ranau. Trails on foot from park headquarters.",
        quando: "In the morning.",
        tempo: "half a day",
        url: "https://www.sabahparks.org.my/",
        consiglio: "A day in the park is the right choice for anyone not doing the climb."
      },
      {
        nome: "Poring Hot Springs and canopy walkway",
        testo: "Hot springs in another section of the park, about 40 km south-east of the main headquarters, with a walkway suspended among the forest trees: about 158 metres long and 41 metres high.",
        come: "By car or taxi from Kinabalu Park.",
        quando: "In the morning for the walkway; in the afternoon for the pools.",
        tempo: "3 hours",
        consiglio: "Combine with Kinabalu Park on the same day."
      },
      {
        nome: "Tunku Abdul Rahman Marine Park",
        testo: "Five islands a short boat ride from the city, Gaya, Manukan, Mamutik, Sapi and Sulug, with beaches, snorkelling and clear water. Gaya is the largest. The right choice for an afternoon at sea after the mountain.",
        come: "By boat from Jesselton Point jetty. The park fee is paid.",
        quando: "The park is open daily, 8:00-17:00. The sea is calmer in the morning.",
        tempo: "half a day",
        costo: "Park entry RM 25 per day for foreign adults (Sabah Parks), plus the boat.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Manukan, Mamutik and Sapi are the most common choices for a day."
      },
      {
        nome: "Waterfront, Filipino Market and sunset",
        testo: "Kota Kinabalu's waterfront, with the fish market, the evening stalls of the Filipino Market and the bars where you watch sunset over the islands.",
        come: "On foot from the centre. The market is active in the evening.",
        quando: "Sunset and evening.",
        tempo: "2 hours",
        consiglio: "Eat grilled fish at the evening stalls, choosing it from the ice."
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
    comeArrivare:
      'Flight from Kota Kinabalu to Sandakan or a long journey by road. Sepilok is just outside Sandakan.',
    comeSpostarsi: "Taxi or transfers organized by the lodges. Public transport exists, but runs rarely and is awkward with luggage.",
    periodoMigliore:
      "all year for the centers, with one important caveat: in the forest fruiting season, which varies from year to year, the orangutans find food on their own and far fewer come to the feedings.",
    costi: "Sepilok with an entrance ticket (current prices at the ticket office); sun bear centre 50 ringgit (2025); Rainforest Discovery Centre with a separate ticket.",
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
          "Wild orangutans live on only two islands in the world, Borneo and Sumatra, and they are two different species; three, counting the Tapanuli, described only recently and with very few individuals. It's the choice that changes the trip more than any other, because at the main sites sighting odds, costs and authenticity are completely different. In general, the wilder the encounter, the less guaranteed it is and the more it costs to get there.",
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
            perChi: 'Anyone with at least two nights: it is the choice with the best balance between authenticity and success.',
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
        costo: "Current prices at the ticket office or on the Sabah Wildlife Department website; bring cash.",
        url: "https://wildlife.sabah.gov.my/",
        consiglio: "Bring a closed backpack and no food in hand: the macaques grab everything."
      },
      {
        nome: "Bornean Sun Bear Conservation Centre",
        testo: "Next to Sepilok, it houses sun bears, the smallest in the world, rescued from the animal trade. Often skipped, and just as interesting.",
        come: "On foot or by taxi from Sepilok, a few minutes.",
        quando: "Morning or early afternoon.",
        tempo: "1 hour",
        costo: "RM 50 for foreign adults (2025).",
        url: "https://www.bsbcc.org.my/",
        consiglio: "Visit on the same day as the orangutans."
      },
      {
        nome: "Rainforest Discovery Centre",
        testo: "A forest with suspended walkways, a tower and trails, excellent for birdwatching at dawn.",
        come: "On foot from the centre of Sepilok or by taxi.",
        quando: "At dawn for the birds.",
        tempo: "2 hours",
        consiglio: "Binoculars and a dawn start: it is when the forest is most alive."
      },
      {
        nome: "Sandakan Memorial Park",
        testo: "The site of the Japanese prison camp of the Second World War, from which the 1945 death marches to Ranau departed: about 2,400 Allied prisoners died and only six Australians survived, all of them escapees. A park with a small museum and a path through the forest.",
        come: "A few kilometers from Sandakan, by taxi.",
        quando: "In the morning.",
        tempo: "1.5 hours",
        consiglio: "Do not skip it because it is «just a park»: it deserves the time."
      },
      {
        nome: "Agnes Keith House",
        testo: "The colonial home of Agnes Newton Keith, the American writer who wrote about Borneo and her wartime internment. Restored by the Sabah Museum, it has been open to the public since 2004, with rooms on the Keiths' life and on colonial Sandakan in the first half of the 20th century.",
        come: "By taxi from central Sandakan.",
        quando: "In the afternoon.",
        tempo: "1 hour",
        consiglio: "Pair it with the Memorial Park on the same day in Sandakan."
      },
    ],
    programmi: [
      {
        titolo: "2 days",
        tappe: [
          "Day 1: morning feeding at Sepilok, Sun Bear Centre, lunch, Rainforest Discovery Centre, afternoon feeding",
          "Day 2: Sandakan Memorial Park, then transfer to the Kinabatangan"
        ]
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
    comeArrivare:
      'A few hours by road from Sandakan to Sukau or Bilit, then the boat to the lodge. Almost all packages include the transfer from Sandakan or directly from the airport.',
    comeSpostarsi: "Only by boat, with outings organized by the lodge: there are no roads along the river.",
    periodoMigliore:
      "March to October. In the rainy season the river rises and the animals scatter into the flooded forest instead of concentrating on the banks: the odds of seeing them drop considerably.",
    costi: "per-person, per-night packages with full board, boat trips and transfers included; price differences are mostly about the room level.",
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
        consiglio: "Closed shoes and a torch: the floor is covered in guano and the smell is strong."
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
    percheAndarci:
      "It's the closest thing to Borneo before logging. The difference between primary and secondary forest, which on paper sounds like a technical detail, is visible to the naked eye here: trees of sizes that no longer exist elsewhere and a complete layered structure.",
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
    comeArrivare:
      'Flight to Lahad Datu, then a long stretch of forest track with the transfer organized by the facility. You cannot get there on your own and there is no public transport.',
    comeSpostarsi: 'On foot on the trails, always with the guide, and by off-road vehicle for the night drives.',
    periodoMigliore:
      "March to October, the driest period. It rains anyway: it's equatorial rainforest, and the rain is part of the package.",
    costi: 'the most expensive item of the trip, with multi-night packages that include transfers, full board and guided activities.',
    erroriDaEvitare: [
      "Going for the orangutans: they're there, but seeing them is unpredictable, and anyone coming for a single species is disappointed. You come here for the forest",
      "Staying one night: after the transfers only a few hours would remain, and the cost per hour would become absurd",
      "Underestimating the leeches: in the wet season there are lots, and the special socks are the only defense that works",
      "Taking a connection for granted: there isn't one here, and it's part of the charm",
    ],
    miaEsperienza:
      "It's a possible extension of the trip I did: this page sticks to verifiable facts. It's on the list for two precise reasons. The first is that primary forest is not a naturalists' detail: emergent trees over eighty meters and a complete layered structure barely exist anymore in Southeast Asia, and Danum is one of the very few places where you can still see them. The second is that it's the exact opposite of the Kinabatangan: there the animals are easy to see because they're squeezed into a strip of green between oil palms, here you see little precisely because they still have forty-three thousand hectares to live in. It costs a lot and you have to plan at least three nights: anyone going for one spends the time almost entirely in transfers.",
    luoghi: [
      {
        nome: "Canopy walkway",
        testo: "A walkway suspended among the crowns of the primary forest. It lets you see birds and monkeys at treetop level.",
        come: "On foot from the lodge with a guide, on a marked trail.",
        quando: "At dawn for the birds.",
        tempo: "2 hours",
        consiglio: "Go with a guide: they see what the visitor misses."
      },
      {
        nome: "Emergent trees and primary forest",
        testo: "About 438 km² of almost undisturbed lowland rainforest, with a canopy that in places exceeds 70 metres. Here in 2019 Menara was measured, a yellow meranti of 97.6 metres: the tallest known living tropical tree.",
        come: "With trails and guided outings from the lodge.",
        quando: "In the morning and after rain.",
        tempo: "half a day",
        consiglio: "Walk slowly and silently: you see more than it seems."
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
        nome: "Forest viewpoint",
        testo: "A viewpoint with an unbroken view over the forest, reached on foot with a guide.",
        come: "On foot with a guide, starting from the lodge.",
        quando: "In the morning.",
        tempo: "3 hours",
        consiglio: "Set off early, before the heat."
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
    comeArrivare:
      'Flight to Tawau, then the road to Semporna and the boat to Mabul. Almost all resorts organize the whole transfer.',
    comeSpostarsi: 'Only by boat, with outings organized by the dive center.',
    periodoMigliore:
      "April to September, with the calmest sea and best visibility. From November to February the sea is rougher and some outings are canceled.",
    costi:
      "multi-night dive packages with full board; the Sipadan permit is paid separately and is the item that decides everything. The number of dives per permit is set by Sabah Parks and changes over time: ask the operator.",
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
        costo: "For foreigners a RM 100 conservation fee plus a RM 350 diving permit per person per day (Sabah Parks); operators include them in the package with a mark-up.",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Book 4-5 nights: the permit rotation rewards longer stays."
      },
      {
        nome: "Mabul",
        testo: "A small island about 15 km north of Sipadan, famous for muck diving: pygmy seahorses, mimic octopus, nudibranchs and frogfish on sandy bottoms.",
        come: "From stilt resorts, by boat for dives.",
        quando: "Year-round; ask the operators about sea conditions.",
        tempo: "2-3 days",
        consiglio: "Sleep on Mabul, not in Semporna, to be close to the sites."
      },
      {
        nome: "Kapalai",
        testo: "A sandbank with stilt resorts over the water, with snorkeling and dives from very good to excellent.",
        come: "With resort boats from Mabul.",
        quando: "Year-round; ask the operators about sea conditions.",
        tempo: "half a day",
        consiglio: "Check whether the resort is still open before booking."
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
        testo: "The island with a volcanic crater and a scenic trail over the lagoon, in the Tun Sakaran marine park.",
        come: "By boat from Semporna with organized tours.",
        quando: "In the morning.",
        tempo: "half a day",
        url: "https://www.sabahparks.org.my/",
        consiglio: "Bring hiking shoes and water: the trail is steep."
      }
    ],
    programmi: [
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
    comeArrivare:
      "Flight to Kuching (KCH) from Kuala Lumpur or from Kota Kinabalu. Here too there is a passport check of its own: Sarawak has immigration separate even from Sabah's.",
    comeSpostarsi:
      "Kuching is walked and done with Grab. For Bako you need a bus and then a boat, with schedules tied to the tide; for Semenggoh, a bus or Grab.",
    periodoMigliore:
      "March to October. At Semenggoh the season matters a lot: from April to October the odds of seeing orangutans are much higher, while in the forest fruiting season they may not show up at all.",
    costi: "Bako with park entry plus the boat; Semenggoh with a small ticket; museums free or nearly so. Kuching is cheap even by Malaysian standards.",
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
        consiglio: "Take a sampan to Fort Margherita and walk back."
      },
      {
        nome: "Sarawak Museum and Borneo Cultures Museum",
        testo: "Two ethnographic museums: objects of the Dayak peoples and the Borneo Cultures Museum, the newer one, with collections and longhouse reconstructions.",
        come: "In central Kuching, on foot or by taxi.",
        quando: "In the morning or in the hottest hours.",
        tempo: "2 hours",
        url: "https://sarawaktourism.com/",
        consiglio: "Visit them before going to a longhouse: it helps you understand what you are seeing."
      },
      {
        nome: "Bako National Park",
        testo: "A seaside park with proboscis monkeys, macaques, bearded pigs and wave-carved sandstone stacks. It's one of the best places in Sarawak to see proboscis monkeys.",
        come: "From Kuching (about 40 km) by bus to Kampung Bako, then about 20 minutes by boat. Times depend on the tide.",
        quando: "In the morning, with the right tide.",
        tempo: "1 day",
        consiglio: "Check tide times: you risk getting stuck."
      },
      {
        nome: "Semenggoh Nature Reserve",
        testo: "A reserve with rehabilitated orangutans now free, who return to the platforms only when fruit is lacking in the forest.",
        come: "By taxi or tour from Kuching.",
        quando: "Two sessions a day, morning and afternoon (times at the ticket office). When the forest is full of fruit the orangutans show up less.",
        tempo: "2-3 hours",
        consiglio: "Go without counting on seeing them: the orangutans are free and only come if they want to."
      },
      {
        nome: "Sarawak Cultural Village",
        testo: "A museum village with traditional houses of Sarawak's different ethnic groups, with craft and dance demonstrations.",
        come: "By bus or tour from Kuching, towards Damai.",
        quando: "In the morning.",
        tempo: "half a day",
        consiglio: "It is a reconstruction: see it as an introduction, not instead of a real longhouse."
      },
      {
        nome: "Niah Caves",
        testo: "Huge caves in northern Sarawak with human remains from about 40,000 years ago, rock paintings about 1,200 years old in the Painted Cave and swiftlet-nest collectors at work on the walls. They have been a UNESCO World Heritage Site since 2024.",
        come: "From Miri by car, then a boardwalk through the forest.",
        quando: "In the morning.",
        tempo: "half a day",
        consiglio: "Reached by a detour from the north: weigh the time."
      }
    ],
    programmi: [
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
    percheAndarci:
      "For the caves, which in size have no parallel in the world, and for the Pinnacles, limestone blades tens of meters tall on the mountainside, reached by a very demanding trek.",
    cosaVedere: [
      'Deer Cave, with the evening exit of millions of bats',
      'Lang Cave, rich in formations',
      'Clearwater Cave and Wind Cave, reached by boat along the river',
      'The Pinnacles of Gunung Api, the limestone blades on the mountainside',
      "The park's canopy walkway, 480 meters long",
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
    comeArrivare:
      "Usually by air, with domestic flights from Miri and other Borneo cities: no road reaches the park, the alternative is a long trip upriver by boat. It's the main reason this stop has to be organized before everything else.",
    comeSpostarsi: 'On foot along the park boardwalks and by boat along the river for the farther caves.',
    periodoMigliore:
      "all year, but the bat exodus isn't guaranteed: if it rains at sunset, they stay inside. The Pinnacles trek is safer in the driest season.",
    costi: 'park entrance costs little, but every cave and every guided excursion is paid separately; the main item is the flight.',
    erroriDaEvitare: [
      "Booking the flight before the lodging: beds inside the park are limited, and without accommodation you're going nowhere",
      "Planning a single night: between flights and internal distances there would be little time left",
      "Signing up for the Pinnacles trek while underestimating it: it's a very demanding climb over rock and ladders, with time limits set by the guides",
      "Counting on the bat exodus: if it rains they don't come out, and it happens often",
    ],
    miaEsperienza:
      "It's a possible extension of the trip I did: this page sticks to verifiable facts. It is on the list for a precise reason, though: the sheer size. The Sarawak Chamber is the largest known underground chamber (by the comparisons you find around, several airliners side by side would fit inside), and Deer Cave has a mouth so wide that the evening bat exodus looks like a column of dark smoke coiling above the forest. Before dreaming about it you need to know one thing about logistics: Mulu can only be reached by air, beds in the park are few and limit visitors, and so you book the opposite of usual: bed first, then the flight.",
    luoghi: [
      {
        nome: "Deer Cave and the bat exodus",
        testo: "The largest cave passage in the world, 120 to 150 metres across. At sunset about three million bats spiral out towards the forest, like a column of smoke.",
        come: "On foot from park headquarters on a boardwalk. Deer Cave is seen on a tour along with Lang Cave; the bat exodus is watched from a platform.",
        quando: "At sunset. If it rains the bats do not come out.",
        tempo: "half a day",
        url: "https://www.mulupark.com/",
        consiglio: "Do not plan the exodus as your only evening: with rain it can be cancelled."
      },
      {
        nome: "Lang Cave",
        testo: "A smaller cave rich in formations, stalactites and stalagmites that are lit up.",
        come: "On a guided tour from headquarters.",
        quando: "In the morning.",
        tempo: "1.5 hours",
        consiglio: "Combined with Deer Cave on the same tour."
      },
      {
        nome: "Clearwater Cave and Wind Cave",
        testo: "Caves reached by boat along the river. Clearwater is the longest cave system in Southeast Asia, with over 227 km of passages explored (2018); Wind Cave has cool galleries with formations.",
        come: "By boat from headquarters, then on foot with a guide.",
        quando: "In the morning.",
        tempo: "half a day",
        url: "https://www.mulupark.com/",
        consiglio: "Bring a swimsuit: you can swim in the river pools."
      },
      {
        nome: "Pinnacles of Gunung Api",
        testo: "Limestone blades tens of meters high on the mountainside. A very demanding trek on rock and ladders.",
        come: "Only with a park guide: three days and two nights, with a boat stretch, a long walk to Camp 5 and a very steep final climb with ropes and ladders.",
        quando: "In the driest season.",
        tempo: "3 days, 2 nights",
        consiglio: "Underestimating it is the most common mistake: training is needed."
      },
      {
        nome: "Canopy skywalk",
        testo: "A 480-metre walkway suspended among the forest canopy.",
        come: "On foot from headquarters.",
        quando: "Early in the morning.",
        tempo: "1 hour",
        consiglio: "Combine with a walk in the forest."
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
      }
    ],
    zone: [
      {
        nome: "Inside the park (near headquarters)",
        perChi: "everyone: beds are few",
        testo: "Lodge, hostel and a resort near the entrance. You book the bed first, then the flight."
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
    esperienzeSlugs: [],
    tripSlugs: [],
  },
]
