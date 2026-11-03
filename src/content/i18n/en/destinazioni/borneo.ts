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
      "The gateway to Sabah: an unpretentious port city, with the best sunsets in Borneo and five islands twenty minutes away by boat. Behind it stands Mount Kinabalu, 4,095 meters, the highest peak in Southeast Asia between the Himalayas and New Guinea.",
    percheAndarci:
      "In Sabah everything starts here. And Kinabalu is one of the few peaks in the world above 4,000 meters you can climb with no mountaineering experience, as long as you have the permit, which is capped and has to be booked months ahead.",
    cosaVedere: [
      'Mount Kinabalu, with the trails starting from the Timpohon Gate and the Laban Rata hut',
      'Kinabalu Park, a UNESCO site, which you can visit even without going to the summit',
      "The Poring hot springs and the park's canopy walkway",
      'Tunku Abdul Rahman Marine Park, five islands twenty minutes by boat from the city',
      'The fish market and the Filipino Market on the waterfront, with the evening stalls',
      "The city mosque at Likas, which seems to float on the water",
    ],
    cosaFare: [
      "Climb Kinabalu in two days with the night at Laban Rata (there's a dedicated experience page)",
      "The via ferrata from the summit ridge, the highest in the world, for those who already have the climbing permit",
      'A day of snorkeling at the marine park islands',
      'Sunset on the waterfront, which in Kota Kinabalu is a collective ritual',
    ],
    doveDormire:
      "In the city the most convenient area is the waterfront. For the Kinabalu climb you sleep in Kundasang or inside the park, because you set off at dawn and from Kota Kinabalu it's two hours by road: doing it in a day means getting up at three.",
    doveMangiare:
      "In Kota Kinabalu you eat by the sea. At the Filipino Market you pick fish at the stall and have it grilled on the spot: it's the city's most typical dinner, at low prices. Try hinava, the raw fish marinated in lime of the Kadazan-Dusun, and tuaran mee, the hand-made noodles of the area. In Sabah's cities Chinese food is excellent and everywhere.",
    comeArrivare:
      "By air to Kota Kinabalu (BKI) from Kuala Lumpur, about 2h30, with dozens of flights a day. On arrival you go through the Sabah passport check, which has its own immigration even for those arriving from the peninsula.",
    comeSpostarsi:
      "In the city on foot and with Grab. For Kinabalu Park and for Sandakan you need intercity minibuses or private transfers: the roads are slow and on the map distances are deceptive.",
    periodoMigliore:
      "March to September for the climb, when it rains less at the summit. In bad weather the mountain closes, and in the past it has also happened after earthquakes: better to set the date with some margin.",
    costi:
      "the Kinabalu climb is expensive and there's no way to save: permit, mandatory guide, night at Laban Rata and transfers are paid as a package, and it's one of the highest items of the whole trip. The marine park islands, on the other hand, cost very little.",
    erroriDaEvitare: [
      "Thinking you can book the Kinabalu climb on the spot: daily permits are just over a hundred and sixty and run out months ahead",
      "Underestimating the altitude: you start at 1,866 meters and reach 4,095 in a little over 24 hours, with no acclimatization, and altitude sickness hits even the fit",
      'Sleeping in Kota Kinabalu the night before the climb',
      "Using the city only as a stopover: the waterfront sunset and the islands twenty minutes away are worth a day",
    ],
    miaEsperienza:
      "Kota Kinabalu itself is a more functional than beautiful city, rebuilt after the bombings of the Second World War, and in half a day you've got it. The reason to come lies behind it. Kinabalu is climbed in two days. The first is an endless staircase in the rainforest, six kilometers of uneven steps with the humidity on your skin, up to the Laban Rata hut at 3,270 meters, where we arrived in the early afternoon. The second begins at two in the morning, in the dark, on bare granite, holding a fixed rope. You feel the altitude: you start from under two thousand meters and in a little over a day you're above four thousand, with no acclimatization, and a headache is the rule more than the exception. Then the sun rises over the granite plateau, and below lies all of Borneo, with the clouds beneath your feet. The practical advice that matters most: permits are just over a hundred and sixty a day and have to be booked months ahead, not weeks.",
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
      "Here is the world's best-known orangutan rehabilitation center, where orphaned or confiscated animals are brought back to the forest little by little, and next to it the sun bear center, home to the smallest bears on the planet. Half an hour away, the city of Sandakan preserves the memory of one of the hardest chapters of the war in the Pacific.",
    percheAndarci:
      "It's the place where you're most likely to see orangutans up close, and the natural base for the Kinabatangan. The Sandakan Memorial Park, then, tells the story of the 1945 death marches: of 2,400 Allied prisoners, six survived.",
    cosaVedere: [
      'The Sepilok Orangutan Rehabilitation Centre, with the platforms where food is left',
      'The Bornean Sun Bear Conservation Centre, next door, often skipped and just as interesting',
      'The Rainforest Discovery Centre, with a canopy walkway excellent for dawn birdwatching',
      'The Sandakan Memorial Park, on the site of the Japanese prison camp',
      'The Agnes Keith House and the view over Sandakan Bay',
    ],
    cosaFare: [
      "Watch the feedings at the Sepilok center (there's a dedicated experience page)",
      'The Rainforest Discovery Centre canopy walkway at dawn, when the hornbills fly by',
      'The sun bear center, two hundred meters away, which almost nobody plans for',
      'An excursion to the Selingan turtle islands, to watch egg-laying at night',
    ],
    doveDormire:
      "In Sepilok, in the lodges set in the forest a few minutes from the centers. It's the best choice, because it lets you be at the first feeding and on the canopy walkway at dawn. Sandakan city is only for connections.",
    doveMangiare:
      "In Sandakan you eat seafood and Chinese food, both of good quality: the city has a historic Chinese community, and the right places are the seafood restaurants on the waterfront. In Sepilok there are only the lodge restaurants, simple and with set menus.",
    comeArrivare:
      'Flight from Kota Kinabalu to Sandakan (about 45 minutes) or 6 hours by road. From Sandakan to Sepilok it is 25 kilometers.',
    comeSpostarsi: "Taxi or transfers organized by the lodges. Public transport exists, but runs rarely and is awkward with luggage.",
    periodoMigliore:
      "all year for the centers, with one important caveat: in the forest fruiting season (roughly between December and February, but it varies) the orangutans find food on their own and far fewer come to the feedings. From April to October the odds are higher.",
    costi: 'Sepilok about 30 ringgit, plus the camera permit; sun bear center around 30; Rainforest Discovery Centre around 15.',
    erroriDaEvitare: [
      "Going to just one feeding: there are two a day, and in an unfavorable season two tries double the odds",
      "Carrying open backpacks, bottles or food in your hand: the macaques snatch them, and it happens often",
      "Stopping at Sepilok and skipping the Kinabatangan convinced you've seen Borneo's wildlife: here the orangutans are semi-wild and used to people",
      "Skipping the Sandakan Memorial Park because it's \"just a park\": it's one of the most powerful memorial sites in Southeast Asia",
    ],
    confronti: [
      {
        titolo: 'Where to see orangutans: Borneo or Sumatra',
        introduzione:
          "Wild orangutans live on only two islands in the world, Borneo and Sumatra, and they are two different species; three, counting the Tapanuli, discovered in 2017 and reduced to a few hundred individuals. It's the choice that changes the trip more than any other, because at the main sites sighting odds, costs and authenticity are completely different. In general, the wilder the encounter, the less guaranteed it is and the more it costs to get there.",
        opzioni: [
          {
            nome: 'Sepilok (Sabah)',
            sintesi: 'Rehabilitation center for orphans and confiscated animals, with two feedings a day on platforms reached by walkways.',
            costo: 'about 30 ringgit entrance',
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
            costo: 'lodge packages from about €100 a night, with meals and outings included',
            durata: '2-3 nights',
            pro: [
              'Fully wild orangutans, along with proboscis monkeys, pygmy elephants, crocodiles and hornbills',
              'The best ratio of sighting odds to cost in all of Borneo',
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
            sintesi: 'Never-logged primary forest, with a research center and a high-end lodge, trails and a canopy walkway at 26 meters.',
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
            costo: 'by far the cheapest: guided treks of 1-3 days for a few tens of euros',
            durata: '1-3 days of trekking',
            pro: [
              'You walk inside the forest and look for them on foot, instead of watching from a platform or a boat',
              'The odds of seeing them are high, because the area is home to animals once rehabilitated and now wild',
              'Very low costs compared with any option in Borneo: lodging, guides and treks cost a fraction',
              "Leuser's jungle is the last place in the world where orangutans, tigers, rhinos and elephants live in the same ecosystem",
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
              'Very convenient: half an hour from Kuching, done in half a morning',
              'The animals are free and semi-wild, not in enclosures',
              'In the right season quite a few can come at once',
            ],
            contro: [
              "In the fruiting season (roughly November-March) nobody may show up, and the reserve says so openly",
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
      "Sabah's longest river, with a strip of forest left along the banks and oil palm plantations all around. This squeeze is an ecological tragedy, and it's also the reason you see more wildlife here than anywhere else in Southeast Asia: the animals have nowhere else to go.",
    percheAndarci:
      "In two days of dawn and sunset outings you see wild orangutans, proboscis monkeys, Bornean pygmy elephants, crocodiles, macaques, hornbills and kingfishers, with the best ratio of sighting odds to cost on the whole island.",
    cosaVedere: [
      'Wild orangutans in the trees along the banks, building their night nests at sunset',
      'Proboscis monkeys, the monkeys with the enormous nose that exist only in Borneo',
      'Bornean pygmy elephants, the smallest in the world, moving in herds along the river',
      'Estuarine crocodiles, best seen on the night outings',
      "Borneo's eight kinds of hornbill, including the rhinoceros hornbill with its orange casque",
      'The Gomantong Caves, with millions of bats and the swiftlet nests harvested for soup',
    ],
    cosaFare: [
      "The dawn and sunset boat outings, the heart of the experience (there's a dedicated experience page)",
      'A night boat outing with torches, for crocodiles, owls and nightjars',
      'A guided trek in the forest behind the lodge, with leech socks',
      'The Gomantong Caves, with the evening bat exodus',
    ],
    doveDormire:
      "In the lodges along the river, almost all around Sukau and Bilit, to be booked as a package with meals and boat outings included: it's the only sensible way to organize. They range from very basic to comfortable, and the price difference lies more in the room than in the guides.",
    doveMangiare:
      "There's no choice, and that's normal: you eat at the lodge, buffet style, three times a day. Simple Malay food: rice, chicken, river fish, stir-fried vegetables, fruit. Good and repetitive. There are no shops: water, snacks and above all cash have to be picked up in Sandakan before leaving.",
    comeArrivare:
      'About 2 hours by road from Sandakan to Sukau or Bilit, then the boat to the lodge. Almost all packages include the transfer from Sandakan or directly from the airport.',
    comeSpostarsi: "Only by boat, with outings organized by the lodge: there are no roads along the river.",
    periodoMigliore:
      "March to October. In the rainy season the river rises and the animals scatter into the flooded forest instead of concentrating on the banks: the odds of seeing them drop considerably.",
    costi: 'packages from about €100 a night per person, with full board, boat outings and transfers included; price differences mostly concern the room level.',
    erroriDaEvitare: [
      "Staying just one night: with two outings you depend on luck, with four or six the odds change completely",
      "Arriving without cash: there are no ATMs along the river, and many lodges and extra services are paid only in ringgit",
      "Expecting the animals to be close: you see them from the boat, often at twenty or thirty meters and backlit. Binoculars change the day more than any camera lens",
      "Underestimating the mosquitoes on the evening outings: here high-concentration repellent is really needed",
    ],
    miaEsperienza:
      "On the Kinabatangan Borneo keeps every promise, and at the same time you understand what has happened to this island. We arrived in the afternoon, and we did the first sunset outing that same evening. You head out by boat at dawn, go up the river with the engine idling and in two hours you see proboscis monkeys leaping between the trees, hornbills passing in pairs, macaques and, with a bit of luck, a wild orangutan moving very slowly on a branch. Then the boat turns into a tributary, the strip of forest thins out and behind it appear the neat rows of oil palms, as far as the eye can see. That's where you understand why the animals are all concentrated in a strip a few hundred meters wide. It's not a successful reserve, it's what's left. Two practical things matter more than the others. Stay at least two nights, because every outing is a lottery and four tickets are worth more than two. And bring binoculars: you're almost always looking at twenty meters, and without them you miss half of what the guide points out.",
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
      "Forty-three thousand hectares of never-logged primary rainforest, one of the few left in Southeast Asia: eighty-meter trees, a canopy walkway suspended at twenty-six meters and a silence that early in the morning only the gibbons break. There are no villages or public roads.",
    percheAndarci:
      "It's the closest thing to Borneo before logging. The difference between primary and secondary forest, which on paper sounds like a technical detail, is visible to the naked eye here: trees of sizes that no longer exist elsewhere and a complete layered structure.",
    cosaVedere: [
      'The canopy walkway suspended at 26 meters among the crowns',
      'The emergent trees, which exceed 80 meters',
      'The wildlife of the primary forest: gibbons, wild orangutans, deer, sun bears and, for a very lucky few, clouded leopards',
      'The Bukit Fatimah viewpoint, with an uninterrupted view over the forest',
      'The burials on the rock wall, left centuries ago by local peoples',
    ],
    cosaFare: [
      'Guided treks by day and by night with naturalists who live on site',
      'The night drive on the forest track, the best time for mammals',
      'Dawn from the canopy walkway, when the gibbons start calling to each other',
      'A swim in the Danum River, with which every day ends',
    ],
    doveDormire:
      "There are only two options, both inside the valley: the research center, basic and cheaper, and the high-end lodge. There are no alternatives and you can't come for the day: it's the most expensive stop of any trip in Borneo.",
    doveMangiare: "Full board included in the package, with no alternatives: for dozens of kilometers around there is nothing else.",
    comeArrivare:
      'Flight to Lahad Datu, then about 2-3 hours of forest track with the transfer organized by the facility. You cannot get there on your own and there is no public transport.',
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
      "I haven't been yet, and in all honesty this page sticks to verifiable information instead of recounting an invented day. It's on the list for two precise reasons. The first is that primary forest is not a naturalists' detail: emergent trees over eighty meters and a complete layered structure barely exist anymore in Southeast Asia, and Danum is one of the very few places where you can still see them. The second is that it's the exact opposite of the Kinabatangan: there the animals are easy to see because they're squeezed into a strip of green between oil palms, here you see little precisely because they still have forty-three thousand hectares to live in. It costs a lot and you have to plan at least three nights: anyone going for one spends the time almost entirely in transfers.",
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
      "Sabah's southeastern coast, with the island of Sipadan offshore: a coral pinnacle rising from 600 meters of depth that many consider the best dive site in the world. Access is capped, you can't sleep on the island and the permit is obtained only through an operator.",
    percheAndarci:
      "For Sipadan, and it's no brochure exaggeration: schools of barracuda in spirals, hundreds of turtles, reef sharks and walls dropping into the blue. And for Mabul and Kapalai, which are the opposite: shallow sandy bottoms where you hunt for the ocean's smallest and strangest animals.",
    cosaVedere: [
      'Sipadan, with the Barracuda Point, Drop Off and Turtle Tomb sites',
      'Mabul, world capital of muck diving: pygmy seahorses, mimic octopuses, nudibranchs, frogfish',
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
      'Flight to Tawau, then about an hour and a half by road to Semporna and the boat to Mabul (about 45 minutes). Almost all resorts organize the whole transfer.',
    comeSpostarsi: 'Only by boat, with outings organized by the dive center.',
    periodoMigliore:
      "April to September, with the calmest sea and best visibility. From November to February the sea is rougher and some outings are canceled.",
    costi:
      "multi-night dive packages with full board; the Sipadan permit is paid separately and is the item that decides everything. Today each permit entitles you to three dives at the island on the same day.",
    erroriDaEvitare: [
      "Showing up hoping to dive at Sipadan without having booked months before: daily permits are just over two hundred and fifty, Sabah Parks assigns them to individual operators and they distribute them among guests, almost always on a rotation and rewarding longer stays",
      "Booking only two nights and counting on Sipadan: the rotation favors those who stay 4-5 nights, which is why the itinerary has to be built that way",
      "Trying to buy a permit on your own: they aren't given to individuals, only to authorized operators",
      "Ignoring the safety advisories for Sabah's east coast: the area is patrolled and tourism runs normally, but the situation should be checked before booking",
    ],
    miaEsperienza:
      "Sipadan lives up to its fame, which is rare for such a celebrated place. You descend along a wall that continues into the blue with no visible bottom, and after a few minutes a school of barracuda passes, twisting into a spiral as wide as a house; the turtles are so many that after the fifth you stop photographing them. Before booking, though, you have to understand that the permit decides everything. There are just over two hundred and fifty a day, they can't be bought from individuals: Sabah Parks assigns them to the operators, who then distribute them among guests on a rotation, and the rotation rewards those who stay longer. Booking two nights and hoping is the surest way not to dive at all. The surprise, though, was another: Mabul, which everyone treats as a base, is one of the best places in the world for muck diving, and searching a gorgonian for a pygmy seahorse the size of a fingernail is as much fun as a school of barracuda. One last thing, which isn't touristy: around the stilt houses live the Bajau Laut, often without citizenship of any state, and the contrast with the resorts fifty meters away deserves a moment's thought.",
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
      "It's probably the most pleasant city in Malaysia. And Sarawak has a history and ethnic makeup entirely different from Sabah: Iban culture dominates here, with the longhouses, communal houses hundreds of meters long where dozens of families live.",
    cosaVedere: [
      "Kuching's riverfront and the old shophouses downtown",
      "The Sarawak Museum and the Borneo Cultures Museum, among the region's best ethnographic museums",
      'Bako National Park, with proboscis monkeys, macaques and sandstone formations on the sea',
      'The Sarawak Cultural Village, with the traditional houses of the different ethnic groups',
      'The Semenggoh Nature Reserve, with rehabilitated, now free-ranging orangutans',
      'The Niah caves, with traces of human presence from forty thousand years ago',
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
      "Flight to Kuching (KCH) from Kuala Lumpur (about 1h45) or from Kota Kinabalu. Here too there is a passport check of its own: Sarawak has immigration separate even from Sabah's.",
    comeSpostarsi:
      "Kuching is walked and done with Grab. For Bako you need a bus and then a boat, with schedules tied to the tide; for Semenggoh, a bus or Grab in half an hour.",
    periodoMigliore:
      "March to October. At Semenggoh the season matters a lot: from April to October the odds of seeing orangutans are much higher, while in the forest fruiting season they may not show up at all.",
    costi: 'Bako around 20 ringgit plus the boat; Semenggoh a few ringgit; museums free or nearly. Kuching is cheap even by Malaysian standards.',
    erroriDaEvitare: [
      "Going to Semenggoh between November and March counting on seeing them: in the fruiting season the orangutans eat in the forest, and the reserve says so openly",
      "Doing Bako as a day trip without checking the tides: the boats come and go according to the water, and it's easy to get stuck",
      "Expecting Sarawak to be like Sabah: they're two states with separate history, populations and immigration, and going from one to the other means a new stamp in your passport",
      "Booking a \"tourist\" longhouse without checking: the experiences vary enormously, from the staged visit to a real stay in a community",
    ],
    miaEsperienza:
      "Kuching is Borneo's surprise: a quiet river city, with the pedestrian riverfront, low Chinese houses and a livability that no other Malaysian city of this size has. Sarawak laksa for breakfast, in one of those rooms with ceiling fans, is one of the best things in all of Malaysia. Bako is the park that delivers. You arrive only by boat, with schedules set by the tide, and within an hour on the trail you meet proboscis monkeys, the monkeys with the enormous nose that exist only on this island: you watch them from a few meters away eating leaves, paying no mind to who passes. On Semenggoh, instead, better to be clear: the orangutans are free and return to the platforms only when the forest offers little, so between November and March nobody may come, and the reserve writes this at the entrance. Anyone who has already seen Sepilok shouldn't come to Sarawak for this: come for Bako, for the longhouses and for the city.",
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
    imageAlt: 'The evening bat exodus from Deer Cave in Gunung Mulu National Park, Sarawak',
    introduzione:
      "A UNESCO World Heritage national park in the interior of Sarawak, reachable only by air, with some of the largest cave systems on the planet. The Sarawak Chamber is the largest known underground chamber in the world, and every evening millions of bats stream out of Deer Cave in spiral formations.",
    percheAndarci:
      "For the caves, which in size have no parallel in the world, and for the Pinnacles, limestone blades fifty meters tall on the mountainside, reached by one of the hardest treks in Southeast Asia.",
    cosaVedere: [
      'Deer Cave, with the evening exit of millions of bats',
      'Lang Cave, the richest in formations',
      'Clearwater Cave and Wind Cave, reached by boat along the river',
      'The Pinnacles of Gunung Api, the limestone blades on the mountainside',
      "The park's canopy walkway, among the longest in the world",
    ],
    cosaFare: [
      'Watch the bats leave Deer Cave at sunset, from the dedicated observatory',
      'The three-day trek to the Pinnacles, with a night at the base camp and a brutal climb over rock and ladders',
      'Adventure caving, for those who want to enter the unequipped parts',
      "The canopy walkway and the forest trails around the park headquarters",
    ],
    doveDormire:
      "Inside the park, in the accommodation run by the park itself, or in the one outside resort. Options are few and need to be booked in advance, because beds in effect limit the number of visitors.",
    doveMangiare: "The park restaurant and the resort one, with no alternatives. As at the other forest stops, whatever you need has to be brought from outside.",
    comeArrivare:
      "Only by air, with flights from Miri, Kuching or Kota Kinabalu: no road reaches the park. It's the main reason this stop has to be organized before everything else.",
    comeSpostarsi: 'On foot along the park boardwalks and by boat along the river for the farther caves.',
    periodoMigliore:
      "all year, but the bat exodus isn't guaranteed: if it rains at sunset, they stay inside. The Pinnacles trek is safer in the driest season.",
    costi: 'park entrance costs little, but every cave and every guided excursion is paid separately; the main item is the flight.',
    erroriDaEvitare: [
      "Booking the flight before the lodging: beds inside the park are limited, and without accommodation you're going nowhere",
      "Planning a single night: between flights and internal distances there would be little time left",
      "Signing up for the Pinnacles trek while underestimating it: it's a climb over rock and ladders among the most demanding in the region, with time limits set by the guides",
      "Counting on the bat exodus: if it rains they don't come out, and it happens often",
    ],
    miaEsperienza:
      "I haven't been yet, and this page sticks to the facts instead of recounting a day that didn't happen. It is on the list for a precise reason, though: the sheer size. The Sarawak Chamber is the largest known underground chamber (by the comparisons you find around, several airliners side by side would fit inside), and Deer Cave has a mouth so wide that the evening bat exodus looks like a column of dark smoke coiling above the forest. Before dreaming about it you need to know one thing about logistics: Mulu can only be reached by air, beds in the park are few and limit visitors, and so you book the opposite of usual: bed first, then the flight.",
    esperienzeSlugs: [],
    tripSlugs: [],
  },
]
