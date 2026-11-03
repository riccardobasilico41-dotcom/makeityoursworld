import type { Esperienza } from '@/lib/types'

export const esperienzeBorneo: Esperienza[] = [
  {
    slug: 'monte-kinabalu',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kota-kinabalu',
    nome: 'Climbing Mount Kinabalu',
    localita: 'Kinabalu Park, Sabah',
    cosE:
      "The two-day climb to the highest peak in Southeast Asia between the Himalayas and New Guinea, 4,095 meters. First six kilometers of steps in the rainforest to the Laban Rata hut, at 3,270 meters; then you set off again at two in the morning over the bare granite plateau, with fixed ropes, to reach the summit at dawn.",
    percheFarla:
      "It's one of the very few peaks in the world above 4,000 meters you can reach with no mountaineering experience. And dawn on the granite plateau, with the clouds beneath your feet and all of Borneo around you, is what almost everyone puts at the top of this trip.",
    durata: '2 days, 1 night at the hut',
    periodo:
      "March to September, when it rains less at the summit. In bad weather the mountain closes, and in the past it stayed closed for months after earthquakes: better to set the date with some margin.",
    costo:
      "the most expensive item of the trip: climbing permit, mandatory guide, night with meals at Laban Rata, insurance and transfers are paid as a package. If the summit via ferrata is included, the bill goes up further.",
    comePrenotare:
      "**Months** ahead, not weeks: daily permits are just over a hundred and sixty and depend on the hut's beds, the only lodging at altitude. You book through the authorized operators that manage the accommodation on the mountain. The guide is mandatory by law, and it's no formality.",
    cosaPortare:
      "Real layers: you start at 1,866 meters at twenty degrees and before dawn at the summit it's close to zero, with wind. Thin gloves, headlamp (you set off at night, in pitch dark), shoes that grip wet granite and the bare minimum in your pack, because on the staircase every kilo weighs double.",
    perChiEAdatta:
      "You don't need technique, you need legs: the first day is six kilometers of almost all uneven steps. The real problem is the altitude. In a little over twenty-four hours you go from under two thousand to over four thousand meters with no acclimatization, and altitude sickness hits even the very fit.",
    miaEsperienza:
      "The first day is an endless staircase inside the rainforest: six kilometers of uneven wood and stone steps, with the humidity on your skin and the feeling they'll never end. In the early afternoon we reached the Laban Rata hut, where you have an early dinner and try to sleep at eight in the evening in a dorm at 3,270 meters, which few manage at that altitude. Then the wake-up at one thirty, and the part you remember. You head out in the dark, the forest is over, and you walk on bare rock holding a fixed rope, with a line of headlamps above and below marking the route along the mountainside. You feel the altitude: headache and short breath are the norm, and some give up in the last hundred meters. Then you reach the granite plateau, the sky goes from black to orange and below are the clouds and all of Borneo. The practical advice that matters most: permits are just over a hundred and sixty a day and tied to the hut's beds, so you book months ahead. Anyone who tries on the spot doesn't climb.",
    giudizio: 'imperdibile',
    alternative: [
      'Kinabalu Park without the summit, with the low trails, the botanical garden and the Poring hot springs',
      'The summit via ferrata, the highest in the world, for those who already have the climbing permit and want to add a day',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Hikers on the granite slabs of the summit of Mount Kinabalu, above the sea of clouds',
    immagine: '/images/borneo/monte-kinabalu.jpg',
  },
  {
    slug: 'sepilok-oranghi',
    immagine: '/images/viaggi/borneo-itinerario/giorno-5-sepilok-orangutan.jpg',
    paeseSlug: 'borneo',
    destinazioneSlug: 'sepilok-sandakan',
    nome: 'Orangutan feedings at Sepilok',
    localita: 'Sepilok Orangutan Rehabilitation Centre, Sabah',
    cosE:
      "The center where orphaned orangutans, or ones confiscated from the illegal trade, are brought back to the forest little by little. Twice a day, on platforms reached by wooden walkways, fruit is left that supplements what the animals can't yet get for themselves.",
    percheFarla:
      "It's the place in the world where you're most likely to see orangutans up close. And the center doesn't pretend to be nature: it explains openly that this is rehabilitation, and it's far more honest than most wildlife attractions in Southeast Asia.",
    durata: 'half a day, counting both feedings',
    periodo:
      "all year, with one decisive caveat. In the forest fruiting season, roughly between December and February but with variations, the orangutans find food on their own and far fewer come to the platforms. From April to October the odds are much higher.",
    costo: 'about 30 ringgit entrance, plus a camera permit',
    comePrenotare:
      "You don't book: you pay at the entrance. Feedings are at fixed times, in the morning and early afternoon, and it's worth going to both: that's two tries instead of one.",
    cosaPortare:
      "Just water, kept in a bag: the macaques roam around the walkways and snatch bottles, bags and glasses without a second thought. Backpacks should be closed or left in the lockers at the entrance.",
    perChiEAdatta: 'For everyone. The walkways are comfortable and almost all shaded, and the route is short.',
    miaEsperienza:
      "We went in the morning, for the first feeding. It's the place where you see orangutans with the most certainty, and it's worth saying right away what that means: they are animals orphaned or seized from the illegal trade, in rehabilitation, used to people. It's not nature, and the center doesn't present it as such; in this part of the world that's not a given. That said, watching an orangutan cross a rope stretched a few meters overhead, with that very slow, oddly deliberate way of moving, is enough on its own to justify a trip. The most useful advice is to go to both feedings, because in certain seasons the forest provides enough fruit and almost nobody comes to the platforms: it's stated openly, it's not bad luck. The thing almost everyone skips is two hundred meters away: the sun bear center, the world's smallest bears, rescued from the pet trade. They're less famous, and the visit is just as interesting.",
    giudizio: 'imperdibile',
    alternative: [
      'The Kinabatangan for wild orangutans, less guaranteed but real',
      'Semenggoh in Sarawak, with free-ranging animals that in the fruiting season may not show',
      'Bukit Lawang in Sumatra, where you look for orangutans on foot in the jungle instead of waiting for them',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Two orangutans at the Sepilok Orangutan Rehabilitation Centre, shot up close as they feed',
  },
  {
    slug: 'crociera-kinabatangan',
    immagine: '/images/borneo/kinabatangan.jpg',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kinabatangan',
    nome: 'Kinabatangan River cruises',
    localita: 'Sukau and Bilit, Kinabatangan River, Sabah',
    cosE:
      "Boat outings at dawn and sunset along the river, with the engine idling, to see the animals concentrated in the strip of forest left on the banks: wild orangutans, proboscis monkeys, pygmy elephants, crocodiles, hornbills and macaques. Almost always a night outing with torches is added.",
    percheFarla:
      "In all of Southeast Asia it's the place with the best ratio of sighting odds to cost. And here the animals are fully wild: no platforms, no meal times.",
    durata: '2-3 nights at a lodge, with 4-6 outings in all',
    periodo:
      "March to October. In the rainy season the river rises, the forest floods and the animals scatter inland instead of concentrating on the banks: the odds drop considerably.",
    costo: 'packages from about €100 a night per person, with full board, boat outings and transfers from Sandakan included',
    comePrenotare:
      "Directly with the lodges in Sukau or Bilit, as a package: organizing the pieces separately makes no sense, because along the river there are no independent services. In high season it's wise to move a few months ahead.",
    cosaPortare:
      "**Binoculars**, which change the day more than anything: you're almost always looking at twenty or thirty meters, and without them you miss half of what the guide points out. Then high-concentration repellent for the evening outings, a light rain jacket and cash in ringgit, because along the river there are no ATMs.",
    perChiEAdatta: "For everyone: you sit in the boat. The only effort is the wake-ups before dawn and the humid heat.",
    miaEsperienza:
      "On the Kinabatangan Borneo delivers what it promises, and at the same moment you understand what has happened to this island. We reached the lodge by boat and the first outing, at sunset, was that same evening. You head out at dawn with mist still on the river and the engine almost off, and in two hours you pass proboscis monkeys leaping between the branches (the monkeys with the enormous nose that exist only here), hornbills in pairs, macaques, crocodiles motionless on the banks and, with a bit of luck, a wild orangutan moving very slowly in a tree. Then the boat turns into a tributary, the strip of green thins out and behind it appear the neat rows of oil palms, to the horizon. There the thing changes sign: the animals are so easy to see because they're squeezed into a strip of forest a few hundred meters wide. It's not a well-designed reserve, it's what was left over. Two concrete tips: stay at least two nights, because every outing is a lottery and four tickets are worth more than two, and bring binoculars.",
    giudizio: 'imperdibile',
    alternative: [
      'Danum Valley, real primary forest, where animals are seen less precisely because they have more space',
      'The Gomantong Caves, not far, with the evening exodus of millions of bats',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Colorful wooden boats moored on the bank of the Kinabatangan River, ready to set off toward the forest',
  },
  {
    slug: 'diving-sipadan',
    paeseSlug: 'borneo',
    destinazioneSlug: 'semporna-sipadan',
    nome: 'Diving at Sipadan',
    localita: 'Sipadan Island, off Semporna, Sabah',
    cosE:
      "A coral pinnacle rising from six hundred meters of depth in the middle of the sea, with vertical walls, schools of barracuda, hundreds of turtles and reef sharks. Access is capped, with daily permits managed by Sabah Parks; you can't sleep on the island since the facilities were removed in 2004.",
    percheFarla:
      "It's one of the very few places in the world where the fame of \"best dive site on the planet\" holds up against the facts: the amount of life on those walls has almost no parallel.",
    durata: 'one day of diving, within a stay of 4-5 nights',
    periodo:
      "April to September, with calm sea and better visibility. From November to February the sea is rougher and outings can be canceled.",
    costo:
      "the permit is paid on top of the dive package; today each permit entitles you to three dives at the island on the same day. The total cost depends on the resort and the length of the stay.",
    comePrenotare:
      "The decisive point: **permits aren't given to individuals**. Sabah Parks assigns a daily quota, just over two hundred and fifty permits, to authorized operators, who distribute them among their guests almost always on a rotation, rewarding longer stays. So you book a multi-night package at a resort on Mabul or Kapalai, six to twelve months ahead in peak months, and the permit comes from there.",
    cosaPortare:
      "Certification and logbook, which are checked, and diving insurance. Be aware that on some dives the currents are serious. The rest of the equipment can be rented on site.",
    perChiEAdatta:
      "Certified divers with a minimum of experience: the walls drop straight down and in some spots the currents are strong. For those without certification there's snorkeling, but permits go almost entirely to divers, so it's not the choice to build the trip on.",
    miaEsperienza:
      "Sipadan lives up to its fame, which can rarely be said of such a celebrated place. You descend along a wall that continues into the blue with no visible bottom, and in a few minutes a school of barracuda passes, twisting into a spiral as wide as a house; the turtles are so many that after the fifth you stop photographing them. Before booking, though, you have to understand that the permit decides the whole trip. There are just over two hundred and fifty a day, they can't be bought from individuals: Sabah Parks assigns them to the operators, who distribute them on a rotation among guests, and the rotation rewards those who stay longer. Booking two nights and hoping is the surest way not to dive at all. The surprise was another: Mabul, which everyone treats as a simple base, is one of the best places in the world for muck diving, and spending forty minutes searching a gorgonian for a pygmy seahorse the size of a fingernail is as much fun as a school of barracuda.",
    giudizio: 'imperdibile',
    alternative: [
      'Muck diving at Mabul and Kapalai, which is worth the trip even without the Sipadan permit',
      'The islands of Tunku Abdul Rahman Marine Park at Kota Kinabalu, for easy snorkeling with no permits',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'A school of fish above the coral reef in the waters of Sipadan',
    immagine: '/images/borneo/diving-sipadan.jpg',
  },
  {
    slug: 'bako-nasiche',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kuching-bako',
    nome: 'The proboscis monkeys of Bako National Park',
    localita: 'Bako National Park, Sarawak',
    cosE:
      "Sarawak's oldest national park, reachable only by boat. The trails cross seven different types of vegetation in a few thousand hectares, to the sandstone cliffs on the sea. It's the most accessible place in the world to see proboscis monkeys, the monkeys with the enormous nose that live only in Borneo.",
    percheFarla:
      "Proboscis monkeys exist only on this island, and here you watch them from a few meters away, without a boat and without needing much luck. The park, besides, is one of the best-made day trips in all of Southeast Asia.",
    durata: 'one day, better with a night in the park chalets',
    periodo:
      "March to October. Boat times depend on the tide and not the clock: at low tide departures shift or get canceled, and that's the constraint that shapes the whole day.",
    costo: 'entrance around 20 ringgit, plus the round-trip boat to be split among passengers',
    comePrenotare:
      "You register your entry at the park headquarters. The chalets inside are few and need to be booked beforehand on the Sarawak parks portal: whoever has one can do the dawn trails and the night walk, and that's the real advantage.",
    cosaPortare:
      "Lots of water, repellent, trail shoes and binoculars. And no food in your hand: the long-tailed macaques around the headquarters are aggressive and organized, and steal constantly.",
    perChiEAdatta: "For everyone: there are trails of every length, from a quarter of an hour to a full day, and the proboscis monkeys are often seen near the facilities.",
    miaEsperienza:
      "Bako is the trip that gives back more than it costs, half an hour from Kuching. You arrive only from the sea, on a boat that lands right on the beach when the tide allows, and that alone puts you in the right spirit. You often meet the proboscis monkeys within the first hour on the trail: males with that outsized nose and swollen belly, sitting on branches eating leaves, watching whoever passes without giving them any attention. They exist only on this island, and seeing them from five meters, without a boat and without stakeouts, is easier here than anywhere else in Borneo. The macaques near the headquarters are the opposite: aggressive, used to people and very fast, and holding food in your hand is a mistake you pay for at once. The constraint to keep in mind is the tide, because boats leave according to the water and not the schedule: whoever goes for the day without checking it risks getting stuck or losing the afternoon.",
    giudizio: 'la-rifarei',
    alternative: [
      'Semenggoh for free-ranging orangutans, half an hour from Kuching, where though the season decides everything',
      "A night in an Iban longhouse along the Batang Ai, for Sarawak's cultural side",
    ],
    tripSlugs: [],
    imageAlt: 'A proboscis monkey sitting on a branch in Bako National Park, Sarawak',
    immagine: '/images/borneo/bako-nasiche.jpg',
  },
]
