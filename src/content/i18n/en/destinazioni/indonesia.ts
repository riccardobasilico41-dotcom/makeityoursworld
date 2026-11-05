import type { Destinazione } from '@/lib/types'

export const destinazioniIndonesia: Destinazione[] = [
  {
    slug: 'sumatra',
    paeseSlug: 'indonesia',
    ordine: 1,
    nome: 'Sumatra',
    tipologia: ['natura', 'avventura', 'trekking'],
    giorniConsigliati: '7-10 days to cover the north (Bukit Lawang, Lake Toba, Berastagi)',
    visitataPersonalmente: true,
    introduzione:
      "The archipelago's wildest gateway: the Gunung Leuser jungle with the last wild orangutans on the planet, the largest volcanic lake in the world and Batak culture on Samosir island.",
    percheAndarci:
      "Jungle trekking here is less trodden than in other Southeast Asian destinations, and the strongest moment is meeting the orangutans.",
    cosaVedere: [
      "Gunung Leuser National Park at Bukit Lawang, one of the last habitats of the Sumatran orangutans",
      "Lake Toba, the largest volcanic lake in the world, with Samosir island at its center",
      "The Batak villages of Samosir, with traditional saddle-roofed houses and stone tombs",
      "The Sibayak and Sinabung volcanoes around Berastagi",
    ],
    cosaFare: [
      "A 1-3 day jungle trek at Bukit Lawang to spot wild orangutans (only with a certified guide)",
      "Boat trip on Lake Toba and a day by scooter on Samosir island",
      "A dip in the hot springs at the foot of Sibayak after a volcano trek",
      "Immersion in Batak culture: ceremonies, crafts, Sigale-gale dances",
    ],
    doveDormire:
      "Guesthouses along the Bohorok river at Bukit Lawang, handy for an early start on the trek; homestays on Samosir island for Lake Toba.",
    doveMangiare:
      "You eat simply and almost everywhere well: nasi padang (display cases with ten or fifteen ready dishes: you point at what you want and pay only for what you touch) is the local institution and was born right here, in West Sumatra. Around Lake Toba pork appears, rare in the rest of Muslim Indonesia, because the Batak are Christian. Sumatran coffee, drunk in the warungs on the road to Berastagi, is among the best in the country and costs a few cents.",
    comeArrivare: "Flight to Medan (Kualanamu International, KNO) from Jakarta or from Kuala Lumpur/Singapore.",
    comeSpostarsi: "Private car or bus between Medan, Bukit Lawang, Berastagi and Lake Toba; ferry to Samosir island.",
    periodoMigliore: "June-September, the driest season for trekking",
    costi: "among the cheapest islands in the archipelago, especially for accommodation and guided treks",
    erroriDaEvitare: [
      "Relying on uncertified guides for the orangutan trek: unregulated close contact is dangerous for both visitors and animals",
      "Underestimating travel times on mountain roads that are often in poor condition",
    ],
    confronti: [
      {
        titolo: 'Orangutans in Sumatra or Borneo?',
        introduzione:
          "Wild orangutans exist only on these two islands, and they are different species: the Sumatran one (critically endangered, a few thousand individuals) and the Bornean one. Anyone who has done Bukit Lawang and is thinking of Borneo, or vice versa, is right to ask, because the two experiences are different.",
        opzioni: [
          {
            nome: 'Bukit Lawang, Sumatra',
            sintesi: "Trekking on foot in the Gunung Leuser jungle, looking for the animals instead of waiting for them.",
            costo: "the cheapest of all: guided 1-3 day treks for a few tens of euros, simple accommodation on the river",
            durata: '2-3 days',
            pro: [
              "You walk inside the forest: the encounter is active, with no platforms or boats",
              "High chances, because the area is home to formerly rehabilitated individuals who are now wild",
              "Very low costs, a quarter or less of any Borneo option",
              "The Leuser is the last ecosystem in the world where orangutans, tigers, rhinos and elephants live together",
            ],
            contro: [
              "There is an ethical knot: some guides lure the animals with food to guarantee the sighting, and this must be explicitly refused when you book",
              "Physically demanding: mud, roots, high heat and humidity",
              "Less strict regulation than in Malaysia: quality depends a lot on the guide",
              "Besides the orangutans, the area offers less variety of visible wildlife",
            ],
            perChi: "Anyone who wants to look for them on foot, has a modest budget and chooses the operator carefully.",
          },
          {
            nome: 'Sabah, Malaysian Borneo',
            sintesi: "The Sepilok plus Kinabatangan system: a rehabilitation center with scheduled feedings and then river cruises to spot wild animals.",
            costo: "much higher: lodges on the Kinabatangan are paid as a package, from about 100€ a night",
            durata: '4-5 days to do both sensibly',
            pro: [
              "At Sepilok a close encounter is reasonably guaranteed in almost every season",
              "On the Kinabatangan the orangutans are wild and come with everything else: proboscis monkeys, pygmy elephants, crocodiles, hornbills",
              "Higher management and regulation standards, with declared feeding practices",
              "The same island has the primary forest of the Danum Valley and Sipadan",
            ],
            contro: [
              "You watch from a platform or a boat twenty or thirty meters away: it's less direct",
              "It costs much more, and internal transfers are long",
              "At Sepilok the animals are semi-wild and used to humans",
            ],
            perChi: "Anyone who also wants to see the rest of Borneo's wildlife and accepts a higher budget in exchange for greater predictability.",
          },
        ],
        raccomandazione:
          "For the orangutan encounter alone, Sumatra gives more for much less: you walk, you search, and it costs a fraction. Borneo is the choice when the list is longer (proboscis monkeys, pygmy elephants, primary forest, Sipadan) and the orangutans are only one of the reasons. Anyone who has already done Bukit Lawang shouldn't cross half of Southeast Asia to see them again: go to Borneo for everything else, and you'll see them anyway.",
      },
    ],
    miaEsperienza:
      "It's the island almost nobody puts on the itinerary, and they're wrong. At Bukit Lawang we climbed up through the mud holding on to roots, in a heat that took your breath away, and after three hours without seeing anything I started to doubt I hadn't wasted a day. Then an orangutan came down onto a branch a few meters away, stayed looking for a few seconds and went back to eating, and the doubt vanished. There's an uncomfortable side too: some guides lure the animals with food to guarantee the sighting, and this must be explicitly refused when you book. Lake Toba, afterward, was the decompression: big as a province, silent, with a rhythm that slows down by itself.",
    luoghi: [
      {
        nome: "Bukit Lawang and the Gunung Leuser",
        testo: "The village on the Bohorok River at the gates of Gunung Leuser National Park, one of the two remaining habitats of the Sumatran orangutan. Formerly rehabilitated orangutans, now wild, live in the area. The park is also home to the Sumatran elephant, tiger and rhinoceros.",
        come: "From Medan by car or minibus, a few hours depending on traffic. Treks are only done with a certified guide, on foot in the jungle, for half a day or several days.",
        quando: "In the drier months, when the trails are less muddy. Head out at dawn.",
        tempo: "2-3 days",
        consiglio: "Explicitly refuse, already when booking, guides who lure animals with food."
      },
      {
        nome: "Lake Toba",
        testo: "The largest volcanic lake in the world, born of an enormous eruption. Cool water, green shores, villages and a large island in the middle, Samosir.",
        come: "From Medan by car or bus to Parapat, several hours on the road, then a ferry to Tuk Tuk on Samosir Island.",
        quando: "All year, better in the morning and in the dry season.",
        tempo: "2-3 days",
        consiglio: "After Bukit Lawang it is the ideal decompression: slow pace, no hurry."
      },
      {
        nome: "Samosir Island and the Batak villages",
        testo: "The Toba Batak are overwhelmingly Christian and live in saddle-roofed houses with carved façades. In Tomok there are the stone tombs of the Sidabutar kings, in Ambarita the stone chairs of the assemblies.",
        come: "By rented scooter or car from Tuk Tuk, along the road that circles the island.",
        quando: "In the morning. The Sigale-gale puppet dances are staged mostly for visitors, in some villages.",
        tempo: "1 day",
        consiglio: "Rent a scooter and circle the island slowly, stopping in villages."
      },
      {
        nome: "Gunung Sibayak and Berastagi",
        testo: "An active but calm volcano above the town of Berastagi, with a climb of a few hours and fumaroles at the top. Afterward, hot springs for resting.",
        come: "From Berastagi on foot or by motorbike to the trailhead. Better with a guide.",
        quando: "In the early morning hours.",
        tempo: "half a day",
        consiglio: "End the trek with a soak in the hot springs."
      },
      {
        nome: "Medan: Istana Maimun and markets",
        testo: "The starting city for almost every trip in northern Sumatra. The palace of the Sultan of Deli, built between 1887 and 1891 and still owned by the sultanate, and the markets are the most interesting stops.",
        come: "The palace is in the centre, by taxi or Grab.",
        quando: "In the morning.",
        tempo: "2 hours",
        consiglio: "Do not stay more than one night: the good part is outside the city."
      }
    ],
    programmi: [
      {
        titolo: "7 days",
        tappe: [
          "Day 1: arrival in Medan, transfer to Bukit Lawang",
          "Day 2-3: trek in Leuser with a certified guide",
          "Day 4: transfer to Berastagi, Sibayak",
          "Day 5-6: Lake Toba and Samosir",
          "Day 7: return to Medan"
        ]
      },
      {
        titolo: "10 days",
        tappe: [
          "As the 7 days, with an extra day at Bukit Lawang and two at Lake Toba"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Lawang",
        perChi: "anyone doing the trek",
        testo: "Guesthouses along the Bohorok river. Simple and convenient for an early start."
      },
      {
        nome: "Tuk Tuk (Samosir)",
        perChi: "anyone going to Lake Toba",
        testo: "Homestays and guesthouses on the Tuk Tuk peninsula, on the lake. Quiet, low cost."
      },
      {
        nome: "Berastagi",
        perChi: "anyone going to the volcano",
        testo: "A highland town with cheap lodging, cooler."
      }
    ],
    sapori: [
      {
        nome: "Nasi padang",
        testo: "Rice with many ready-made dishes brought to the table or shown in the window: you pick what you want and pay for what you touch. It comes from West Sumatra."
      },
      {
        nome: "Sumatran coffee",
        testo: "Among the best in the country, drunk in the warungs on the road to Berastagi for a few cents."
      },
      {
        nome: "Batak pork",
        testo: "Around Lake Toba, because the Batak are Christian. Rare in the rest of Muslim Indonesia."
      },
      {
        nome: "Mie goreng",
        testo: "Stir-fried noodles with vegetables and egg. Almost always available."
      }
    ],
    attenzioni: [
      "Trek only with certified guides: unregulated close contact is dangerous for you and for the orangutans.",
      "On mountain roads journey times are much longer than they look.",
      "The Bohorok river can swell with rain: follow local advice.",
      "Law: Indonesia has very severe drug laws. Carry nothing that is not your own."
    ],
    esperienzeSlugs: ['trekking-oranghi-bukit-lawang'],
    tripSlugs: ['indonesia-itinerario', 'sumatra-mentawai'],
    imageAlt: "Lake Toba seen from above among green hills and forest, Sumatra",
    immagine: '/images/indonesia/sumatra.jpg',
  },
  {
    slug: 'giava',
    paeseSlug: 'indonesia',
    ordine: 2,
    nome: 'Java',
    tipologia: ['cultura', 'natura', 'vulcani'],
    giorniConsigliati: '6-8 days between Yogyakarta, Bromo and Ijen',
    visitataPersonalmente: true,
    introduzione:
      "The most populous island in Indonesia, the cultural heart of the country with the most imposing Buddhist and Hindu temples in Southeast Asia and two of the most spectacular volcanoes to see at dawn.",
    percheAndarci:
      "In a few hundred kilometers it packs the temples of Borobudur and Prambanan, dawn over the Bromo crater and the blue fire of Ijen, very different experiences.",
    cosaVedere: [
      "Borobudur, the largest Buddhist temple in the world, at dawn",
      "Prambanan, the largest Hindu temple complex in Indonesia",
      "Mount Bromo, with its smoking crater surrounded by the Sea of Sand",
      "Kawah Ijen, with its turquoise sulfuric acid lake and the blue flames at night",
    ],
    cosaFare: [
      "Dawn at Bromo by 4x4 jeep from the Mount Penanjakan viewpoint",
      "Night trek to the Ijen crater to see the \"blue fire\" phenomenon and the sulfur miners at work",
      "Tour of the temples of Yogyakarta, the ideal base for Borobudur and Prambanan",
      "Batik class or a visit to a traditional workshop in Yogyakarta",
    ],
    doveDormire:
      "Yogyakarta as a base for Borobudur and Prambanan, with the Prawirotaman area quieter than Malioboro; for Bromo you sleep at Cemoro Lawang, on the crater rim, and for Ijen in Banyuwangi or the guesthouses of Licin.",
    doveMangiare:
      "Yogyakarta is the place to try gudeg, the sweet jackfruit stew that is the city's signature dish and divides whoever tastes it. For the rest, the street beats the restaurants: nasi goreng and mie goreng from the evening carts, sate ayam and tempeh (invented right here in Java), fried and eaten as a snack. Around Bromo and Ijen the offer is minimal and meals are had at the guesthouse: it's not the part of the trip where you eat well.",
    comeArrivare:
      "Flight to Jakarta (CGK), the country's international hub, or directly to Yogyakarta or Surabaya (starting point for Bromo/Ijen).",
    comeSpostarsi:
      "Train between the main cities (an efficient Jakarta-Yogyakarta-Surabaya network), car with driver for the excursions to Bromo and Ijen.",
    periodoMigliore: "May-September, clearer skies for dawn at Bromo",
    costi: "average for the archipelago; the organized tours for Bromo/Ijen have a fixed cost regardless of the season",
    erroriDaEvitare: [
      "Climbing Kawah Ijen without a gas mask: sulfur fumes are dangerous",
      "Underestimating Jakarta traffic when planning your transfers",
    ],
    miaEsperienza:
      "Java is the part of Indonesia that feels least like a vacation and leaves the sharpest memory. Ijen above all: we set off at one in the morning and climbed in the dark with the gas mask on. Down in the crater, the blue flames were smaller than they look in photos; everything else was enormous. Miners walked past with baskets of eighty kilos of sulfur on their shoulders, barefoot or nearly, and in there tourism takes on a different weight. At Bromo the opposite happened: dawn from Penanjakan is spectacular, but it's also a parking lot with hundreds of jeeps and rows of people holding up their phones. It's still worth it, as long as you know beforehand. Borobudur at dawn is one of the few things that lives up to its myth, but the ticket to climb the structure is limited in number and sells out well in advance.",
    luoghi: [
      {
        nome: "Borobudur",
        testo: "The largest Buddhist temple in the world, from the 9th century, with nine stacked platforms, six square and three circular, and more than 2,600 stone relief panels. At dawn, with mist over the plain, it's one of the few places that lives up to its legend.",
        come: "From Yogyakarta, about 40 km to the southeast, by car or bus. Climbing the monument is capped, with a guide and special sandals: book online on the official website well in advance.",
        quando: "At sunrise or sunset, with dedicated paid packages. Climbing the structure is split into time slots with a fixed quota and sells out.",
        tempo: "3 hours",
        costo: "Two different tickets: the park, and the climb up the structure, which includes a guide and upanat sandals. Foreigner rates are higher than for Indonesians: current prices on the official website.",
        url: "https://borobudurpark.com/",
        consiglio: "Book the climbing ticket well ahead, because places are limited."
      },
      {
        nome: "Prambanan",
        testo: "The largest Hindu temple complex in Indonesia, from the mid-9th century, with towers dedicated to Shiva, Vishnu and Brahma; Shiva's is 47 metres tall. The reliefs of the Shiva and Brahma temples tell the Ramayana.",
        come: "About 17 km from Yogyakarta, by Trans Jogja bus or taxi. Visit on your own or with a guide.",
        quando: "In the morning or at sunset. On Mondays, for maintenance, only the park around the temples can be visited: check the official website. On some evenings, often at full moon, the Ramayana ballet is staged at the open-air Trimurti theatre.",
        tempo: "2 hours",
        costo: "About 25 USD for foreign adults (IDR 387,500, 2025); a combined ticket with Borobudur or Ratu Boko exists.",
        url: "https://borobudurpark.com/",
        consiglio: "Check ballet dates: in some periods it is held at sunset with the towers lit."
      },
      {
        nome: "Yogyakarta Kraton and Taman Sari",
        testo: "The sultan's palace, still in use, with a museum and gamelan performances. Within the Kraton grounds is Taman Sari, the «water castle» built between 1758 and 1765, with pools and gates that could flood the complex.",
        come: "On foot or by becak from Malioboro.",
        quando: "In the morning. The Kraton has reduced hours on ceremony days.",
        tempo: "2 hours",
        consiglio: "Visit both on the same walk, then get lost in the batik district streets."
      },
      {
        nome: "Gunung Bromo",
        testo: "A smoking crater inside the Tengger caldera, surrounded by the Sea of Sand. Dawn from the Penanjakan viewpoint is one of Java's most famous images.",
        come: "From Cemoro Lawang or Surabaya by 4x4 jeep booked the evening before. You leave in the middle of the night. The ticket is bought online on the park's official website, before the visit.",
        quando: "At dawn; from April to October the sky is clearer.",
        tempo: "half a day",
        costo: "Foreigner ticket bought online on the park website: fares have changed several times and sources disagree, so check the amount there. Jeep extra.",
        url: "https://bromotenggersemeru.org/",
        consiglio: "Dawn from Penanjakan is spectacular but crowded with jeeps: go knowing it."
      },
      {
        nome: "Kawah Ijen and the blue fire",
        testo: "The largest strongly acidic crater lake in the world, about a kilometre wide and turquoise, and at night the blue flames of burning sulphur gas. Sulphur miners work in the crater, carrying loads of 75 to 90 kilos on their shoulders.",
        come: "From Banyuwangi or Licin by car to Paltuding, then about two hours on foot to the crater rim and another 45 minutes down towards the lake, where allowed. A real gas mask is needed. Tickets are bought online; the park also asks for a recent medical certificate (hotels and tours often arrange it).",
        quando: "The Paltuding gate opens at 2am and closes at noon; the blue fire is only visible in the dark, before dawn. The crater closes one day a month for cleaning and in bad weather or volcanic activity.",
        tempo: "half a day",
        costo: "Foreigners IDR 100,000 on weekdays and IDR 150,000 at weekends and on holidays (2025).",
        url: "https://ayoketamannasional.kehutanan.go.id/en/taman-wisata-alam/kawah-ijen",
        consiglio: "Bring a real gas mask and not a scarf; do not photograph the miners without asking."
      },
      {
        nome: "Malioboro and batik workshops",
        testo: "Yogyakarta's shopping street and the batik workshops where you can learn the wax and dye technique.",
        come: "On foot. Courses are booked at workshops in the Taman Sari district.",
        quando: "Afternoon and evening.",
        tempo: "2-3 hours",
        consiglio: "A batik course is a good way to see a living craft."
      }
    ],
    programmi: [
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Yogyakarta, Kraton and Taman Sari, dinner on Malioboro",
          "Day 2: dawn at Borobudur, Prambanan in the afternoon",
          "Day 3: train to Surabaya or Probolinggo, night at Cemoro Lawang"
        ]
      },
      {
        titolo: "6-8 days",
        tappe: [
          "Days 1-3 as above",
          "Day 4: dawn at Bromo, transfer toward Banyuwangi",
          "Day 5: Ijen in the night, rest",
          "Days 6-8: Bali or return"
        ]
      }
    ],
    zone: [
      {
        nome: "Prawirotaman (Yogyakarta)",
        perChi: "anyone who wants to be quieter",
        testo: "A district of cafés and guesthouses, less chaotic than Malioboro."
      },
      {
        nome: "Malioboro",
        perChi: "anyone who wants the tourist heart",
        testo: "Near the station and stalls. Noisy."
      },
      {
        nome: "Cemoro Lawang",
        perChi: "anyone going to Bromo",
        testo: "A village on the crater rim, with simple lodging. Cold at night."
      },
      {
        nome: "Banyuwangi or Licin",
        perChi: "anyone going to Ijen",
        testo: "Simple lodging for a 1 a.m. start."
      }
    ],
    sapori: [
      {
        nome: "Gudeg",
        testo: "Sweet jackfruit stew, Yogyakarta's signature dish. It divides those who taste it."
      },
      {
        nome: "Nasi goreng and mie goreng",
        testo: "Fried rice and noodles, from evening carts."
      },
      {
        nome: "Sate ayam",
        testo: "Chicken skewers with peanut sauce."
      },
      {
        nome: "Tempeh",
        testo: "Fermented soy, invented right in Java, fried and eaten as a snack."
      }
    ],
    attenzioni: [
      "Ijen: without a gas mask the sulfur fumes are dangerous.",
      "Jakarta traffic makes journey times unpredictable.",
      "Bromo: agree the jeep price before leaving; Penanjakan is crowded.",
      "Unofficial taxis at stations ask high fares: use Grab or metered taxis."
    ],
    esperienzeSlugs: ['alba-bromo-jeep'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
    imageAlt: "A stone Buddha head at Borobudur, seen from behind, in front of the valley wrapped in dawn mist, Java",
    immagine: '/images/indonesia/borobudur-buddha-nebbia-riccardo.jpg',
  },
  {
    slug: 'bali',
    paeseSlug: 'indonesia',
    ordine: 3,
    nome: 'Bali',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: '7-10 days to cover Ubud, the south and at least one of the nearby islands',
    visitataPersonalmente: true,
    introduzione:
      "The best-known island of the archipelago: terraced rice paddies, temples perched over the sea, surf beaches and one of the most developed nightlife and wellness scenes in Southeast Asia.",
    percheAndarci:
      "In a small space there are very different souls: the cultural calm of Ubud, the surf and nightlife of the south, the cliffs of Uluwatu and Nusa Penida a few hours away by boat.",
    cosaVedere: [
      "The terraced rice paddies of Tegalalang and the monkey forest in Ubud",
      "The Uluwatu temple, on a cliff dropping straight into the sea",
      "Tanah Lot, the temple on a rock surrounded by the tide",
      "Kelingking Beach and Angel's Billabong on Nusa Penida",
    ],
    cosaFare: [
      "Sunrise trek on the Gunung Batur volcano",
      "A day (or more) on the Nusa Penida islands for Kelingking Beach and the snorkeling spots with manta rays (there is a dedicated experience page)",
      "Surfing at Canggu or Uluwatu, for all levels",
      "Kecak dance at sunset at the Uluwatu temple",
      "Scooter ride among the rice paddies of Ubud's hinterland",
    ],
    doveDormire:
      "Ubud for the cultural side and the rice paddies, Canggu for surf and evening life, Uluwatu for the cliffs and relative calm, Sanur or Nusa Dua for a quieter, family-friendly pace. Sleeping one night on Nusa Penida avoids the double crossing in a day.",
    doveMangiare:
      "The mistake is eating only in cafés for foreigners, which are everywhere and excellent but tell you little. Babi guling, spit-roasted suckling pig, is the Balinese dish par excellence and is found in specialized places that open at lunch and close when they run out; bebek betutu, duck cooked for hours in spices, often has to be ordered the day before. In neighborhood warungs you eat for a few euros, and quality has nothing to do with price.",
    comeArrivare: "Flight to Denpasar (DPS), the island's main international airport.",
    comeSpostarsi:
      "Rented scooter (international license recommended, frequent checks) or private driver/Grab for longer trips.",
    periodoMigliore: "April-October, dry season",
    costi: "vary a lot: it's among the Indonesian destinations with the most offer, both budget and high-end",
    erroriDaEvitare: [
      "Renting a scooter without an international license: checks are frequent and fines are steep",
      "Underestimating the traffic between Canggu and Seminyak at rush hour",
      "Not booking the boat to Nusa Penida in advance in high season",
    ],
    miaEsperienza:
      "Bali is two different islands depending on where you sleep, and that's why it gets opposite verdicts. The south between Canggu and Seminyak is made of concrete, traffic and places designed for people coming from outside: you can have fun, but Indonesia is elsewhere. Twenty kilometers inland is enough and the flower offerings in front of the houses, renewed every morning, reappear, along with temples in use rather than on display: the island becomes what you came looking for. More than any rice paddy or beach, what stayed with me is the Kecak dance at Uluwatu at sunset, with seventy men sitting in a circle making all the music with their voices. Nusa Penida, on the other hand, is by now a victim of its own success (Kelingking at midday is a line of people on a steep path) and it's best to be on the first boat in the morning.",
    luoghi: [
      {
        nome: "Ubud and the Tegalalang rice terraces",
        testo: "The cultural heart of Bali, with temples, workshops, dances and terraced rice fields around. Tegalalang is the most photographed, but the interior has less-trodden valleys.",
        come: "From Denpasar or the south by car with driver or scooter: with traffic it can take up to an hour and a half. The rice terraces are visited on foot.",
        quando: "In the morning, before the groups.",
        tempo: "1 day",
        consiglio: "Twenty kilometers inland are enough to find flower offerings in front of houses and temples in use again."
      },
      {
        nome: "Ubud Monkey Forest",
        testo: "A forest with temples and hundreds of macaques. They are used to visitors and steal glasses, bags and food.",
        come: "On foot from the centre of Ubud.",
        quando: "In the morning.",
        tempo: "1 hour",
        consiglio: "Bring no food or dangling items: the macaques grab everything."
      },
      {
        nome: "Uluwatu Temple and Kecak dance",
        testo: "A temple on a cliff dropping sheer into the sea. In the evening the Kecak dance is held in the amphitheatre: dozens of men, sometimes more than a hundred, sit in a circle and make all the music with their voices, without instruments, telling the Ramayana.",
        come: "From Canggu or Seminyak by car or scooter; with traffic allow at least an hour. There are macaques everywhere.",
        quando: "At sunset.",
        tempo: "2-3 hours",
        consiglio: "Arrive early to get a good seat in the amphitheatre."
      },
      {
        nome: "Tanah Lot",
        testo: "A temple on an offshore rock, surrounded by the tide. One of the most photographed sunset spots in Bali.",
        come: "By car from Canggu, a short way along the coast. At low tide you can reach the foot of the rock.",
        quando: "At sunset, but it is crowded.",
        tempo: "1.5 hours",
        consiglio: "Check the tide: at low tide it is more striking."
      },
      {
        nome: "Sunrise on Gunung Batur",
        testo: "A night trek to the top of the volcano, 1,717 metres, for sunrise over the caldera and Lake Batur. The climb takes a few hours and isn't technical.",
        come: "With a local guide, starting from Toya Bungkah or nearby villages in the middle of the night.",
        quando: "Start in the middle of the night to be at the top for sunrise.",
        tempo: "half a day",
        consiglio: "Bring a jacket: it is cold at the top."
      },
      {
        nome: "Nusa Penida: Kelingking Beach",
        testo: "A dinosaur-shaped cliff above a beach, the island's most photographed spot. With Angel's Billabong and Manta Bay it completes the tour.",
        come: "By fast boat from Sanur or Padang Bai, then car or scooter on the island.",
        quando: "On the first boat in the morning, to avoid the queue on the steep path.",
        tempo: "1 day",
        consiglio: "Sleeping a night on Nusa Penida avoids the double crossing in one day."
      }
    ],
    programmi: [
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Ubud, Monkey Forest and Tegalalang rice fields",
          "Day 2: sunrise on Batur, free afternoon",
          "Day 3: Uluwatu at sunset with the Kecak dance"
        ]
      },
      {
        titolo: "7 days",
        tappe: [
          "Days 1-3 as above",
          "Day 4: Tanah Lot at sunset",
          "Days 5-6: Nusa Penida, with a night on the island",
          "Day 7: return and rest"
        ]
      }
    ],
    zone: [
      {
        nome: "Ubud",
        perChi: "anyone seeking culture and rice fields",
        testo: "Cultural heart, with guesthouses among the fields. Very touristy by day."
      },
      {
        nome: "Canggu",
        perChi: "anyone seeking surf and nightlife",
        testo: "Bars, cafés and black beaches. Heavy traffic and concrete."
      },
      {
        nome: "Uluwatu",
        perChi: "anyone seeking cliffs and relative calm",
        testo: "Beaches under cliffs and sunsets. Quieter but far from everything."
      },
      {
        nome: "Sanur or Nusa Dua",
        perChi: "families",
        testo: "A calmer pace and sheltered sea."
      }
    ],
    sapori: [
      {
        nome: "Babi guling",
        testo: "Spit-roasted suckling pig, the Balinese dish par excellence. Found in specialized places that open at lunch and close when they run out."
      },
      {
        nome: "Bebek betutu",
        testo: "Duck cooked for hours in spices, often to order the day before."
      },
      {
        nome: "Nasi campur",
        testo: "Rice with small tastes of meat, vegetables and fritters, in neighborhood warungs."
      },
      {
        nome: "Sate lilit",
        testo: "Skewers of minced fish or meat wrapped around bamboo or lemongrass."
      }
    ],
    attenzioni: [
      "Scooters: an international licence is needed, checks are frequent and fines high.",
      "Traffic between Canggu and Seminyak at peak hours: leave plenty of margin.",
      "Money changers and cocktails: use official exchanges and drink at reliable venues. Methanol in drinks is a risk flagged by authorities.",
      "Nusa Penida: book the boat ahead in high season and leave early.",
      "On arrival you pay the Bali tourist levy, IDR 150,000 per person since 2024: best paid online on the official Love Bali website (lovebali.baliprov.go.id).",
    ],
    esperienzeSlugs: ['giornata-nusa-penida'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
    imageAlt: 'The Jatiluwih rice terraces in Bali, glistening with water to the horizon, seen from the drone',
    immagine: '/images/indonesia/jatiluwih-terrazze-riccardo.jpg',
  },
  {
    slug: 'sulawesi',
    paeseSlug: 'indonesia',
    ordine: 4,
    nome: 'Sulawesi',
    tipologia: ['cultura', 'natura', 'diving'],
    giorniConsigliati: '7-9 days between Tana Toraja and Bunaken',
    visitataPersonalmente: true,
    introduzione:
      "An island of unique shape, split between the funeral traditions and mountain villages of Tana Toraja and the reefs of Bunaken National Park, in the far north.",
    percheAndarci:
      "It offers two almost opposite experiences: a culture that treats death as a social event instead of a taboo, and one of the most beautiful marine parks in Southeast Asia.",
    cosaVedere: [
      "The tongkonan villages of Tana Toraja, with their boat-roofed houses",
      "The tombs carved into the rock and the \"tau tau,\" the wooden effigies of the dead",
      "The reef of Bunaken National Park, with vertical coral walls",
      "Makassar and the Dutch fort of Fort Rotterdam",
    ],
    cosaFare: [
      "Attend, with a local guide to explain the etiquette, a Toraja funeral ceremony if it happens to fall in the right period",
      "Trekking among the mountain villages around Rantepao",
      "Diving or snorkeling in Bunaken National Park (there is a dedicated experience page)",
    ],
    doveDormire:
      "Rantepao is the natural base for all of Tana Toraja, with simple guesthouses in the center; for Bunaken you choose between the dive resorts on the island itself, handier for dawn dives, and Manado on the mainland, cheaper but with an hour of boat every day.",
    doveMangiare:
      "Sulawesi has the spiciest cooking in the archipelago, especially in the north around Manado: the dish to know is rica-rica, based on chili in quantities that are not negotiable. In Makassar you eat coto makassar, a beef soup served at breakfast, and grilled fish on the seafront in the evening. In Tana Toraja pork and buffalo appear, because the area is Christian: pa'piong, meat cooked inside a bamboo tube, has to be ordered hours ahead.",
    comeArrivare:
      "Flight to Makassar (main hub), then bus or domestic flight to Rantepao (Tana Toraja) or to Manado (base for Bunaken).",
    comeSpostarsi: "Bus or car with driver for Tana Toraja; boat from the Manado pier for Bunaken. To organize everything I recommend Wale Adventure (wale-adventure.com), a local tour operator: kind and good at what they do, with private tours all over the island and a vanilla farm you can visit (I built their website).",
    periodoMigliore: "May-October",
    costi: "average, higher for the diving packages at Bunaken",
    erroriDaEvitare: [
      "Attending funeral ceremonies without a guide to explain the etiquette: they are private events, open to visitors only with certain rules of respect",
    ],
    miaEsperienza:
      "Tana Toraja is the most different thing I saw in Indonesia, and it's not a postcard place. A Toraja funeral lasts days, gathers hundreds of people and involves the sacrifice of buffalo in front of everyone. It has nothing of the sobriety we're used to: it's an enormously expensive celebration, for which families save for years. As an outsider you can attend (you bring a gift, usually sugar or cigarettes, and stay where the guide indicates), but you have to be ready to see things that hit hard. Bunaken is the other side: coral walls dropping straight down for hundreds of meters, where you turn onto your back and there's no bottom below. Between the two, the one that changed something in me is Toraja.",
    luoghi: [
      {
        nome: "Rantepao and the tongkonan villages",
        testo: "The heart of Tana Toraja, with boat-roofed houses (tongkonan) and rice fields. Kete Kesu is the best-preserved village, with houses, granaries and tombs.",
        come: "Toraja is about 300 km north of Makassar: a long trip by night bus or car, or by domestic flight. The villages are visited with a guide.",
        quando: "In the dry season. Funeral dates are set by the families: the guide will know if one is taking place.",
        tempo: "2-3 days",
        consiglio: "Take a local guide who explains the symbols: without one you lose half the meaning."
      },
      {
        nome: "Rock tombs: Londa and Lemo",
        testo: "Tombs carved into the cliff face, with «tau tau», wooden effigies of the dead, watching from balconies. At Londa there are coffins in a cave.",
        come: "With the guide from Rantepao, by car or scooter.",
        quando: "In the morning.",
        tempo: "half a day",
        consiglio: "Bring a torch for the caves and respect the tombs: do not touch bones."
      },
      {
        nome: "A Toraja funeral",
        testo: "A funeral lasts several days, often draws hundreds of people and involves sacrificing buffalo. Families save for years. It's an extremely expensive celebration, not a sober mourning.",
        come: "Only with a guide who explains the etiquette. You bring a gift, usually sugar or cigarettes, and stay where the guide says.",
        quando: "Whenever the family holds it: dates aren't fixed and you find out locally, through the guide.",
        tempo: "half a day",
        consiglio: "Be prepared to see striking things. To organize the trip: Wale Adventure (wale-adventure.com), a local operator."
      },
      {
        nome: "Bunaken National Marine Park",
        testo: "Vertical coral walls and clear water, with thirteen genera of coral. One of the best-known places in the world for snorkelling and boat diving.",
        come: "By boat from Manado harbour. Packages of one or more nights.",
        quando: "In the months with the calmest sea: ask the dive operators.",
        tempo: "2-3 days",
        consiglio: "Whoever arrives after Toraja experiences it as a counterweight: two different faces of the island."
      },
      {
        nome: "Fort Rotterdam and Makassar",
        testo: "The fort on the harbour, originally a fortress of the Gowa kingdom and rebuilt by the Dutch VOC between 1673 and 1679, with the La Galigo museum. The city is the starting point for Toraja.",
        come: "On foot or by taxi from the centre of Makassar.",
        quando: "In the morning.",
        tempo: "1-2 hours",
        consiglio: "Eat coto makassar in the morning and grilled fish on the waterfront in the evening."
      }
    ],
    programmi: [
      {
        titolo: "7-9 days",
        tappe: [
          "Day 1: arrival in Makassar, Fort Rotterdam",
          "Day 2: transfer to Rantepao",
          "Day 3-4: tongkonan, Londa and Lemo, a funeral if there is one",
          "Day 5: return to Makassar or flight to Manado",
          "Day 6-8: Bunaken",
          "Day 9: return"
        ]
      }
    ],
    zone: [
      {
        nome: "Rantepao",
        perChi: "anyone visiting Tana Toraja",
        testo: "A small town with guesthouses and restaurants, base for the villages."
      },
      {
        nome: "Manado",
        perChi: "anyone going to Bunaken",
        testo: "A port city with hotels, from where boats leave for the island."
      },
      {
        nome: "Bunaken Island",
        perChi: "anyone diving",
        testo: "Homestays and resorts on the island. Simple."
      }
    ],
    sapori: [
      {
        nome: "Coto makassar",
        testo: "Beef soup, served for breakfast in Makassar."
      },
      {
        nome: "Pa'piong",
        testo: "Meat cooked in a bamboo tube, typical of Toraja. Must be ordered hours ahead."
      },
      {
        nome: "Rica-rica",
        testo: "A very spicy dish of the north, around Manado."
      },
      {
        nome: "Grilled fish",
        testo: "On the Makassar waterfront, in the evening."
      }
    ],
    attenzioni: [
      "Funeral ceremonies: do not show up without a guide; they are private events with rules of respect.",
      "Tana Toraja is Christian: pork appears, which elsewhere in Indonesia is rare.",
      "Roads to Toraja are long and winding; the night bus is uncomfortable.",
      "Diving packages at Bunaken cost more than average: compare operators."
    ],
    esperienzeSlugs: ['diving-bunaken-national-park'],
    tripSlugs: ['indonesia-itinerario'],
    imageAlt: "A tongkonan with a ship's-prow roof in a Toraja village near Rantepao, Sulawesi",
    immagine: '/images/indonesia/sulawesi.jpg',
  },
  {
    slug: 'lombok-gili',
    paeseSlug: 'indonesia',
    ordine: 5,
    nome: 'Lombok and Gili',
    tipologia: ['mare', 'trekking', 'isole'],
    giorniConsigliati: '6-8 days, of which 2-3 for the Rinjani trek if included',
    visitataPersonalmente: true,
    introduzione:
      "Bali's less crowded neighbor: the three Gili islands without motor vehicles, the Rinjani volcano (the second highest in Indonesia) and southern beaches still little visited.",
    percheAndarci:
      "The pace is slower than in Bali: the Rinjani trek is the physical challenge, the Gilis the relaxed counterweight by the sea.",
    cosaVedere: [
      "The three Gili islands (Trawangan, Meno, Air), with no cars or scooters",
      "Mount Rinjani, with the crater lake Segara Anak",
      "The southern beaches: Kuta Lombok, Tanjung Aan, Selong Belanak",
    ],
    cosaFare: [
      "Snorkeling with sea turtles at the Gilis",
      "A 2-3 day trek on the Rinjani up to the crater lake (there is a dedicated experience page)",
      "Surfing at Kuta Lombok or, for advanced levels, at Desert Point",
    ],
    doveDormire:
      "Gili Trawangan for evening life, Gili Air for the balance between services and calm, Gili Meno for silence; in Lombok, Kuta is the southern base for surf and beaches, Senaru and Sembalun are the two villages from which the Rinjani treks start.",
    doveMangiare:
      "The dish of Lombok is ayam taliwang, grilled chicken in a chili sauce that shows no mercy: in Sasak the island's name means precisely chili. On the Gilis the evening market on Trawangan is the best and cheapest place: the fish is displayed on ice, you choose it and wait for it to be grilled. In the seaside restaurants you pay mostly for the view.",
    comeArrivare:
      "Flight to Lombok International Airport (LOP), or fast ferry from Bali (Padang Bai or Sanur toward the Gilis).",
    comeSpostarsi: "Only cidomo (horse-drawn carts) or bicycle on the Gilis, where motor vehicles are banned; car or scooter on the rest of Lombok.",
    periodoMigliore:
      "April-November; the Rinjani is accessible only from April to December, closed in the rainy season",
    costi: "generally cheaper than Bali",
    erroriDaEvitare: [
      "Underestimating the effort and altitude of the Rinjani trek",
      "Attempting the trek without a guide: it is mandatory by law",
    ],
    miaEsperienza:
      "The Rinjani is the hardest trek I did in Indonesia, and comparison with the others doesn't hold up. The climb to the crater rim is long and exposed, and ends on volcanic sand where for every three steps you lose one. We pitched camp on the rim, in the wind, and you sleep little and badly. Waking up above Lake Segara Anak with the clouds below, though, repays everything. The Gilis are perfect right afterward: no cars or scooters, you walk around in an hour and the turtles can be seen from the beach, with no boat or guide. Trawangan at night is more of a party than some expect, Meno is the opposite: better to know before booking.",
    luoghi: [
      {
        nome: "The Gili islands: Trawangan, Meno and Air",
        testo: "Three islands where cars and motorbikes are banned by local ordinance: you get around on foot, by bike or by horse cart (cidomo). Trawangan is the largest and the party island, Meno the quietest, Air somewhere in between. Turtles can be seen on the reefs close to shore.",
        come: "Fast boat from Bali (Padang Bai, about 1.5-2.5 hours) or local boat from Bangsal, the port on Lombok's north coast. On the Gilis you walk or take a cidomo.",
        quando: "In the dry season. Meno is the quietest at any time.",
        tempo: "2-3 days",
        consiglio: "Choose the island by character: party on Trawangan, calm on Meno."
      },
      {
        nome: "Snorkeling with turtles",
        testo: "Green turtles graze on the reefs close to shore, for example along the east coast of Gili Air; Gili Meno also has a turtle sanctuary. No boat or guide needed.",
        come: "You enter the water from the beach, with rented mask and fins.",
        quando: "In the morning, with calmer water.",
        tempo: "1-2 hours",
        consiglio: "Do not touch or chase the turtles: keep your distance."
      },
      {
        nome: "Trek to Gunung Rinjani",
        testo: "Indonesia's second-highest volcano, 3,726 metres. From the crater rim you see Lake Segara Anak, at about 2,000 metres. The route is long and exposed and ends on volcanic sand.",
        come: "From Senaru or Sembalun, only with a licensed operator and a guide. You must register online on the official eRinjani system, with a recent medical certificate and insurance; since 2026 each guide can take at most four trekkers. Multi-day packages with porters and tents.",
        quando: "In the dry season. With rain, bad weather or after accidents the park may close the trails: check eRinjani before booking.",
        tempo: "several days",
        consiglio: "The camp on the rim is windy and you sleep little: waking above the clouds with the lake below pays off everything."
      },
      {
        nome: "Senaru waterfalls",
        testo: "Sendang Gile and Tiu Kelep are two waterfalls in the forest at the foot of Rinjani, reached by a short walk. A great rest day before or after the trek.",
        come: "On foot from Senaru, with a guide.",
        quando: "In the morning.",
        tempo: "3 hours",
        consiglio: "Wear shoes that can get wet."
      },
      {
        nome: "Southern beaches: Kuta, Tanjung Aan, Selong Belanak",
        testo: "Bays of pale sand and surf waves, much less crowded than Bali.",
        come: "By scooter or car from Kuta Lombok, which is close to the airport.",
        quando: "In the morning or at sunset.",
        tempo: "1 day",
        consiglio: "Selong Belanak is the best for beginner surfers."
      }
    ],
    programmi: [
      {
        titolo: "6-8 days",
        tappe: [
          "Day 1: arrival in Lombok, Senaru",
          "Day 2-4: Rinjani trek",
          "Day 5: rest, Senaru waterfalls",
          "Day 6-7: Gili, snorkeling with turtles",
          "Day 8: departure"
        ]
      },
      {
        titolo: "Without Rinjani",
        tappe: [
          "Day 1-2: Kuta Lombok and the southern beaches",
          "Day 3-5: Gili",
          "Day 6: return"
        ]
      }
    ],
    zone: [
      {
        nome: "Gili Trawangan",
        perChi: "anyone who wants nightlife",
        testo: "Bars, restaurants and venues. Louder than many expect."
      },
      {
        nome: "Gili Meno",
        perChi: "anyone seeking calm",
        testo: "The quietest, with few services and lovely sunsets."
      },
      {
        nome: "Senaru or Sembalun",
        perChi: "anyone doing Rinjani",
        testo: "Villages on the volcano's slopes with simple guesthouses."
      },
      {
        nome: "Kuta Lombok",
        perChi: "anyone seeking beaches and surf",
        testo: "A quiet town with cheap lodging."
      }
    ],
    sapori: [
      {
        nome: "Ayam taliwang",
        testo: "Grilled chicken in a chilli sauce that takes no prisoners, Lombok's best-known dish."
      },
      {
        nome: "Grilled fish at Trawangan night market",
        testo: "Fish is displayed on ice, you choose and wait for it to be grilled. The best and cheapest spot on the Gilis."
      },
      {
        nome: "Plecing kangkung",
        testo: "Water spinach with spicy tomato sauce, a typical Lombok side dish."
      },
      {
        nome: "Sate rembiga",
        testo: "Spicy beef skewers, typical of Lombok."
      }
    ],
    attenzioni: [
      "Rinjani: a guide, a licensed operator and eRinjani registration are compulsory. Underestimating effort and altitude is the most common mistake.",
      "Trawangan in the evening is more party than it looks; Meno is the opposite. Choose one by character.",
      "Crossings from Bali: the sea can be rough; avoid booking overly tight transfers.",
      "On the Gilis, currents and boats: do not swim far from the shore."
    ],
    esperienzeSlugs: ['trekking-gunung-rinjani'],
    tripSlugs: ['indonesia-itinerario', 'giava-bali-gili'],
    imageAlt: 'A white sand islet off Lombok, with outrigger boats moored and the hills behind',
    immagine: '/images/indonesia/gili-isolotto-barche-riccardo.jpg',
  },
  {
    slug: 'komodo',
    paeseSlug: 'indonesia',
    ordine: 6,
    nome: 'Komodo',
    tipologia: ['natura', 'avventura', 'diving'],
    giorniConsigliati: '3-4 days, often on a boat tour from Labuan Bajo',
    visitataPersonalmente: true,
    introduzione:
      "The national park that gives its name to the last great land predator left on Earth, the Komodo dragon, in an archipelago of islands beautiful above and below sea level.",
    percheAndarci:
      "It is probably the only place in the world to see Komodo dragons in their natural habitat, plus some of the most photographed panoramas and seabeds in Indonesia.",
    cosaVedere: [
      "The Komodo dragons on Komodo island and on Rinca island",
      "Pink Beach, with sand tinted pink by coral fragments",
      "Padar Island, the viewpoint with the three crescent bays",
      "The snorkeling spots of Kanawa and Kelor",
    ],
    cosaFare: [
      "Guided trek to see the Komodo dragons (there is a dedicated experience page)",
      "Climb to Padar Island at dawn for the iconic panorama",
      "Snorkeling or diving in the marine park",
      "Boat tour (2-4 day liveaboard) from Labuan Bajo among the islands of the park",
    ],
    doveDormire:
      "Labuan Bajo is everyone's base, with a wide choice of hostels and resorts on the harbor. Otherwise you sleep on board, on boat tours of two or more nights, which are also the only way to be at Padar at dawn.",
    doveMangiare:
      "In Labuan Bajo you eat fish, and well: the evening market on the waterfront displays the day's catch and grills it on the spot, at prices much lower than the restaurants with a harbor view a bit farther along. On board the crew cooks: simple dishes of rice, fish and vegetables, but good.",
    comeArrivare: "Flight to Labuan Bajo (Flores), starting point for all tours to the park.",
    comeSpostarsi: "Only by boat: organized tours of one or more days, or liveaboards.",
    periodoMigliore: "April-December, dry season with calmer seas",
    costi: "variable depending on the length of the boat tour; multi-day liveaboards cost more",
    erroriDaEvitare: [
      "Approaching the dragons without a ranger or a guide: they are dangerous predators",
      "Underestimating the rough sea and strong currents between the islands",
    ],
    miaEsperienza:
      "The dragons almost always stay still. They are huge animals that spend the day in the shade and move little, and anyone expecting a documentary scene is thrown off: what impresses is the size and the fact that the ranger holds only a forked stick. Rinca is wilder and less crowded than Komodo island, and it's worth asking for it specifically. The best moment is Padar at dawn: a short, steep climb along a ridge, and below, three bays with three different sands all together. It has to be done very early, because from eight the line on the path is continuous and the heat makes itself felt.",
    luoghi: [
      {
        nome: "Rinca Island",
        testo: "After Komodo it's the park island with the most dragons, about 1,300, wilder and less crowded. The dragons almost always lie still in the shade, but they are dangerous predators.",
        come: "By boat from Labuan Bajo: the time depends on the type of boat. You walk the trails with a ranger, who carries only a forked stick.",
        quando: "In the morning, in the cooler hours.",
        tempo: "half a day",
        url: "https://komodonationalpark.org/",
        consiglio: "Ask explicitly for Rinca in the tour: it is wilder than Komodo island."
      },
      {
        nome: "Komodo Island and Loh Liang",
        testo: "The island that gives the park its name and the one with the most dragons, about 1,700. Short trails start from Loh Liang and lead to areas where dragons can be seen.",
        come: "By boat from Labuan Bajo, farther than Rinca. With a compulsory ranger.",
        quando: "In the morning.",
        tempo: "half a day",
        url: "https://komodonationalpark.org/",
        consiglio: "Never approach without the ranger and never leave the trail."
      },
      {
        nome: "Padar Island",
        testo: "A short steep climb on a ridge, and below three bays with sands of different colors: the park's most famous viewpoint.",
        come: "By boat from Labuan Bajo with a tour, often as the first stop of the morning.",
        quando: "At dawn, very early: soon after, the groups arrive, the queue on the trail is constant and the heat kicks in.",
        tempo: "1.5 hours",
        consiglio: "Going up at first light is the only way to have the view without the queue."
      },
      {
        nome: "Pink Beach",
        testo: "A pinkish beach from coral fragments mixed with the sand, with excellent snorkeling.",
        come: "By boat as a stop on the tour.",
        quando: "Morning or early afternoon.",
        tempo: "1-2 hours",
        consiglio: "Snorkel: the seabed is more interesting than the beach."
      },
      {
        nome: "Kanawa, Kelor and Manta Point",
        testo: "Islands and snorkeling spots with coral reef and, in some places, manta rays.",
        come: "By boat on one-day or multi-day tours.",
        quando: "In the months with the calmest sea; ask the crew.",
        tempo: "half a day",
        consiglio: "Strong currents between islands: listen to the crew's instructions."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Dawn: Padar",
          "Morning: Pink Beach and snorkeling",
          "Lunch on board",
          "Afternoon: Rinca or Komodo with the rangers",
          "Sunset: return to Labuan Bajo"
        ]
      },
      {
        titolo: "3 days (boat)",
        tappe: [
          "Day 1: Kanawa, Rinca, night on board",
          "Day 2: Padar at dawn, Pink Beach, Manta Point",
          "Day 3: Komodo island and return"
        ]
      }
    ],
    zone: [
      {
        nome: "Labuan Bajo",
        perChi: "anyone doing day tours",
        testo: "A port with hotels of every range, seaside restaurants and the evening fish market. Base for all tours."
      },
      {
        nome: "On board (liveaboard)",
        perChi: "anyone wanting to see more",
        testo: "Sleeping on the boat lets you be at Padar at dawn, before the groups. Costs more."
      }
    ],
    sapori: [
      {
        nome: "Grilled fish from the evening market",
        testo: "The day's catch displayed on Labuan Bajo's waterfront and grilled to order. Costs far less than the restaurants with a harbor view."
      },
      {
        nome: "Boat cooking",
        testo: "On board the crew cooks: rice, fish and vegetables, simple but good."
      },
      {
        nome: "Flores coffee",
        testo: "Home-roasted and served unfiltered."
      }
    ],
    attenzioni: [
      "Approach the dragons only with a ranger: they are dangerous predators.",
      "Rough sea and strong currents between islands: listen to the crew and do not swim alone.",
      "At Padar the queue on the trail builds right after dawn: go up at first light.",
      "Check the official park fees and permits before booking."
    ],
    esperienzeSlugs: ['trekking-draghi-komodo'],
    tripSlugs: ['indonesia-itinerario'],
    imageAlt: "The hills and bays of Padar island seen from the viewpoint, Komodo National Park",
    immagine: '/images/indonesia/komodo.jpg',
  },
  {
    slug: 'flores',
    paeseSlug: 'indonesia',
    ordine: 7,
    nome: 'Flores',
    tipologia: ['natura', 'cultura', 'vulcani'],
    giorniConsigliati: '5-7 days, often combined with Komodo via Labuan Bajo',
    visitataPersonalmente: true,
    introduzione:
      "The wildest and least developed of the islands touched by the trip, famous for the three color-changing volcanic lakes of Kelimutu and for traditional villages suspended among the mountains.",
    percheAndarci:
      "It's a more rural, less touristy side of Indonesia, with volcanic landscapes and a village culture still alive.",
    cosaVedere: [
      "Kelimutu, with its three crater lakes of different colors",
      "The traditional village of Bena, at the foot of the Inerie volcano",
      "Wae Rebo, the remote village reachable only on foot",
      "Riung, starting point for the 17 islands tour",
    ],
    cosaFare: [
      "Dawn at Kelimutu to see the lakes in the best light (there is a dedicated experience page)",
      "A 1-2 day trek to the village of Wae Rebo",
      "Tour of the traditional villages around Bajawa, including Bena",
    ],
    doveDormire:
      "Moni is the village from which you set off at night for Kelimutu, with basic guesthouses; Bajawa serves as a base for the traditional villages, Labuan Bajo for the west and the Komodo tours. At Wae Rebo you sleep in the village's communal house, all together on the floor: it's not a hotel and shouldn't be treated like one.",
    doveMangiare:
      "The offer is minimal, and it's part of the trip: outside Labuan Bajo you eat in village warungs, almost always rice, fish or chicken and stir-fried vegetables, with few alternatives. It's worth trying se'i, the smoked meat typical of the eastern islands, and everywhere you find Flores coffee, home-roasted and served unfiltered. In the guesthouses of Moni dinner is ordered in the afternoon, because they cook it specially.",
    comeArrivare:
      "Flight to Labuan Bajo for the west of the island (and to continue toward Komodo), or to Ende or Maumere for the east.",
    comeSpostarsi:
      "The Trans-Flores, the road crossing the island from west to east: scenic but winding and slower than it seems on the map.",
    periodoMigliore: "May-October",
    costi: "among the cheapest islands of the trip",
    erroriDaEvitare: [
      "Underestimating travel times on the Trans-Flores: straight-line distances are deceptive",
    ],
    miaEsperienza:
      "Flores is the part of Indonesia that has stayed behind, and that is exactly what makes it the most interesting for me. The Trans-Flores looks short on the map, but it's really an endless succession of curves: two hundred kilometers is a whole day, and anyone short on time would do better to give it up. Kelimutu at dawn is worth the three a.m. alarm anyway. The colors of the three lakes change over time and there's no way to know beforehand what you'll find, and that's the point of the place. Wae Rebo is the strongest thing on the island: three hours of climbing in the forest, then seven conical houses in a clearing among the mountains and nothing else. It's an inhabited village, and you stay by its rules.",
    luoghi: [
      {
        nome: "Kelimutu",
        testo: "Three crater lakes on the same mountain, of different colours that change over time with volcanic gases and rain: in 2016 they changed six times in a few months. There's no way of knowing in advance which colours you'll find, and that's the point of the place.",
        come: "From the village of Moni, about 13 km and 45 minutes by motorbike or car to the car park, then on foot. Alarm at three.",
        quando: "At dawn, before the mist rises.",
        tempo: "3 hours",
        consiglio: "They deserve the three a.m. wake-up: the dawn light on the lakes is the best part."
      },
      {
        nome: "Bena",
        testo: "A traditional village at the foot of the Inerie volcano, with rows of thatched houses and megalithic stone monuments. The Ngada people still live here.",
        come: "From Bajawa by car, not far. You leave a donation at the entrance.",
        quando: "In the morning.",
        tempo: "1-2 hours",
        consiglio: "Leave a small offering and ask before photographing people."
      },
      {
        nome: "Wae Rebo",
        testo: "A remote village with seven conical houses (mbaru niang) arranged in a circle around the altar, in a clearing among the mountains. It's inhabited and you follow its rules: first of all the welcome ritual, the Wailu'u. One of the most powerful things on the island.",
        come: "From the Denge area, about 4.5 km and 2.5-3 hours uphill through the forest. You sleep in the village guest houses, dormitory-style. It's arranged through the village committee or an operator.",
        quando: "In the dry season; when it rains the trail is muddy.",
        tempo: "2 days (1 night)",
        consiglio: "Bring a modest gift for the community and respect the village rules."
      },
      {
        nome: "Riung and the 17 islands",
        testo: "An archipelago of small islands with beaches, snorkeling and fruit bats.",
        come: "From Bajawa or Ruteng to Riung by car, then boat. Half-day or day tours.",
        quando: "In the dry season, when the sea is calmer.",
        tempo: "half a day",
        consiglio: "Come with the right time: distances on the Trans-Flores are deceptive."
      },
      {
        nome: "Cancar and Ruteng spiderweb rice fields",
        testo: "Rice fields laid out in a radial pattern like a spiderweb, following the ancient land division. The best viewpoint is on a hill a few minutes from the village.",
        come: "From Ruteng, about twenty kilometres by car.",
        quando: "In the morning or at sunset.",
        tempo: "1 hour",
        consiglio: "Combine with a stop in Ruteng, a cool highland town, and its coffee."
      }
    ],
    programmi: [
      {
        titolo: "5-7 days (east-west)",
        tappe: [
          "Day 1: Maumere or Ende, Moni",
          "Day 2: Kelimutu at dawn, Trans-Flores toward Bajawa",
          "Day 3: Bena and Ngada villages",
          "Day 4: road to Ruteng, Cancar",
          "Day 5: Denge and climb to Wae Rebo",
          "Day 6: Wae Rebo, descent and return to Labuan Bajo"
        ]
      }
    ],
    zone: [
      {
        nome: "Moni",
        perChi: "anyone seeing Kelimutu",
        testo: "A village of simple guesthouses. Dinner is ordered in the afternoon."
      },
      {
        nome: "Bajawa",
        perChi: "anyone going to Bena",
        testo: "A highland town with all kinds of lodging, cooler."
      },
      {
        nome: "Labuan Bajo",
        perChi: "anyone departing or arriving",
        testo: "A port with more services, base for Komodo."
      }
    ],
    sapori: [
      {
        nome: "Se'i",
        testo: "Smoked meat typical of the eastern islands."
      },
      {
        nome: "Flores coffee",
        testo: "Home-roasted and served unfiltered, everywhere."
      },
      {
        nome: "Village warungs",
        testo: "Rice, fish or chicken and stir-fried vegetables: the offer is minimal, and that is part of the trip."
      },
      {
        nome: "Sayur rebus",
        testo: "Boiled vegetables with sambal, simple and common."
      }
    ],
    attenzioni: [
      "The Trans-Flores is long and winding: two hundred kilometers is a full day.",
      "At Wae Rebo and Bena you are a guest: ask before photographing and respect local rules.",
      "Guesthouses have few places: book for the main stops.",
      "Carry cash: ATMs are rare outside Labuan Bajo."
    ],
    esperienzeSlugs: ['alba-kelimutu'],
    tripSlugs: ['indonesia-itinerario'],
    imageAlt: "The conical mbaru niang houses of the village of Wae Rebo among the mountains of Flores",
    immagine: '/images/indonesia/flores.jpg',
  },
  {
    slug: 'raja-ampat',
    paeseSlug: 'indonesia',
    ordine: 8,
    nome: 'Raja Ampat',
    tipologia: ['diving', 'natura', 'mare'],
    giorniConsigliati: '5-7 days, best on a liveaboard or across several different islands',
    visitataPersonalmente: true,
    introduzione:
      "The most remote archipelago of the trip, in West Papua: reefs considered among the most biodiverse in the world and mushroom-shaped islands rising from an emerald sea.",
    percheAndarci:
      "For divers and snorkelers it's one of the most coveted destinations in the world; even without diving, the viewpoints over the mushroom islands are enough to justify the trip.",
    cosaVedere: [
      "Piaynemo and Wayag, the iconic viewpoints over the mushroom-shaped limestone islands",
      "Arborek, a stilt village with a reef accessible straight from the beach",
      "The manta ray spots and the pristine reefs of the marine park",
    ],
    cosaFare: [
      "Diving or snorkeling on a liveaboard among the reefs of the marine park (there is a dedicated experience page)",
      "Climb to the Piaynemo and Wayag viewpoints",
      "A day at Arborek for snorkeling from the village",
    ],
    doveDormire:
      "Three options very different in budget and comfort (homestay, dive resort or liveaboard): the comparison is below.",
    doveMangiare:
      "There is no choice, and none is needed: in homestays you eat what the family cooks, three times a day, freshly caught fish with rice and vegetables. It's good and monotonous. Outside the lodgings there are no restaurants, so the last chance to buy snacks, water and cash is Sorong or Waisai: there are no ATMs on the islands.",
    comeArrivare:
      "Flight to Sorong (via Jakarta or Makassar), then fast ferry or private boat to Waisai or the resorts/liveaboards.",
    comeSpostarsi: "Only by sea: public boat, private boat or liveaboard.",
    periodoMigliore:
      "there is no truly wrong season: there are two different experiences. From October to April, with the peak between December and February, the currents bring an upwelling of plankton-rich water that draws mantas and the other big pelagics, the sea is calmer and liveaboards operate at full strength: it's the safest window and the one with the most wildlife. From May to September southeast winds blow, stronger in August, which raise the sea especially in the Dampier Strait and on crossings toward Misool: transfers between islands can get longer and outings in the most exposed areas can be cancelled, and many liveaboards move elsewhere in this period. In exchange, summer has far fewer people. For rain there's no seasonal rule: it rains all year here, in short, unpredictable showers. What decides when to go is the wind and what you want to see underwater.",
    costi:
      "among the most expensive destinations in Indonesia because of logistics and the mandatory marine park permit (PIN Raja Ampat)",
    erroriDaEvitare: [
      "Not calculating the cost and time needed to get the mandatory marine park permit (PIN Raja Ampat)",
      "Underestimating internal transport costs: flights and boats to this area are among the priciest in the country",
      "Going in summer expecting the same big pelagics as in winter: mantas and sharks are much less frequent when plankton doesn't rise to the surface",
      "Not allowing buffer days if you travel from May to September: wind can cancel an outing or lengthen a transfer between islands, especially toward Misool",
    ],
    confronti: [
      {
        titolo: 'Where to stay in Raja Ampat: homestay, resort or liveaboard?',
        introduzione:
          "With an archipelago made almost only of islands and no real town, where you sleep decides a large part of the trip: budget, contact with local communities and which points of the park you can actually reach.",
        opzioni: [
          {
            nome: 'Homestay',
            sintesi: "Family-run stilt houses on islands like Gam, Kri or Arborek: the simplest and most common base.",
            costo: "roughly 25-45€ a night, meals included (breakfast, lunch and dinner prepared by the family)",
            durata: 'best suited to stays of a week or more on one or two islands',
            pro: [
              "The spending stays almost entirely with the local community, which is also what supports protection of the marine park",
              "Many exceptional reefs (Arborek above all) can be reached by swimming from the beach, without a boat",
              "Direct contact with the people who live on the islands",
            ],
            contro: [
              "Basic accommodation: bathroom often shared, electricity only at fixed hours (generator)",
              "No restaurants outside the lodging: you eat what the family cooks",
              "For the farthest points (Wayag, Misool) you still have to arrange boats separately",
            ],
            perChi: "Anyone who wants the cheapest and most local-life way to stay in Raja Ampat, and is content to explore the area around their own island.",
          },
          {
            nome: 'Dive resort',
            sintesi: "Mid-to-high range properties, often on a private or nearly private island, designed for organized diving.",
            costo: 'from about 150 to over 400€ a night, often with packages that include dives',
            durata: 'from a few days to a week, with daily boat outings to nearby sites',
            pro: [
              "Much higher comfort than a homestay: hot water, continuous electricity, own restaurant",
              "Dedicated staff and faster, better-equipped boats for dive outings",
              "A good fixed base for anyone who wants more comfort without giving up daily diving",
            ],
            contro: [
              "Cost still high, and further from the model that directly supports the communities",
              "Stays tied to a single area: for distant points you still have to move",
            ],
            perChi: "Serious divers who want comfort and organization, without the budget or flexibility of a liveaboard.",
          },
          {
            nome: 'Liveaboard',
            sintesi: "A boat that serves as both lodging and transport, moving at night so each day you're at a different site.",
            costo: 'the most expensive by far: roughly 250-500€+ a day per person, all inclusive',
            durata: 'generally 7-10 days, the most efficient way to cover areas far from each other',
            pro: [
              "It's the only practical way to get to Wayag or push south toward Misool on the same trip",
              "No time lost in overland transfers or ferries: you sleep while the boat changes area",
              "Dives and meals organized by the crew, the highest comfort of the three options",
            ],
            contro: [
              "The cost is by far the highest of the three options, often double or triple a week in a homestay",
              "The least connected to local communities: the money almost all stays with the operator",
              "In the wind season (May-September) many liveaboards move elsewhere, to avoid the most exposed areas",
            ],
            perChi: 'Anyone with the budget who wants to see the most of the archipelago, remotest points included, in a single organized week.',
          },
        ],
        raccomandazione:
          "For a first trip on a modest budget, a homestay on an island like Kri or Arborek already gives a great deal. A liveaboard is justified when the goal is to see the whole archipelago, Wayag included, in a single intense week: that's where its cost, the highest of the three options, makes sense.",
      },
    ],
    miaEsperienza:
      "It's the most beautiful place I've seen underwater, and also the hardest to reach: two flights, a ferry and a boat, with costs that look nothing like the rest of Indonesia. The difference shows at the first snorkel, though: a density of fish like the reef at Arborek, twenty meters from shore, doesn't exist anywhere else anymore. The currents are strong and must be taken seriously: certain spots can only be done at the right times. Sleeping in homestays rather than resorts is the choice worth making, because that model, even more than the price, is what keeps the park's protection going. Piaynemo at sunset, with the wooden stairs and the crowded platform, is the only moment you meet anyone else. We were there in August 2026, which every guidebook marks as the wrong season. In part it is, but not in the way you expect: the sea was amazing all the same, ten days without seeing a drop of rain. The wind, though, made itself felt: it lengthened a couple of transfers between islands and made us skip an outing in a more exposed area. The other thing to count is the big pelagics: mantas and sharks are much rarer in summer, because the upwelling of plankton-rich water that draws them is mainly a winter phenomenon. With reefs full of fish anyway and very few other tourists around, it was a trade-off I don't regret.",
    luoghi: [
      {
        nome: "Piaynemo",
        testo: "Raja Ampat's iconic viewpoint, with mushroom-shaped limestone islands rising from a turquoise lagoon. Reached by a wooden staircase.",
        come: "By boat from the islands of Waisai or from homestays. The marine park permit (PIN Raja Ampat) is paid.",
        quando: "At sunset, but it is the only time you meet anyone else.",
        tempo: "half a day",
        consiglio: "Go up early or at the end of the day to avoid the crowded platform."
      },
      {
        nome: "Wayag",
        testo: "The other famous viewpoint, in the north, with dozens of limestone islets in a lagoon. Farther, it takes more time and more money.",
        come: "By liveaboard or private boat, far from Waisai. Depends on wind and sea.",
        quando: "In the months with the calmest sea: ask homestays and operators.",
        tempo: "1 day or more",
        consiglio: "Allow a buffer day: wind can cancel the trip."
      },
      {
        nome: "Arborek",
        testo: "A stilt village with a reef you can reach straight from the beach, with a density of fish a few metres from shore that is rare elsewhere.",
        come: "By boat from the rest of the islands. You sleep in the village homestays.",
        quando: "All year; better in the morning.",
        tempo: "1-2 days",
        consiglio: "Sleep in homestays, not resorts: that model is what keeps the park's protection going."
      },
      {
        nome: "Dampier Strait and manta spots",
        testo: "The park's pristine reefs, with mantas at cleaning stations and a huge variety of fish. Currents are strong and must be respected.",
        come: "By boat with operators, at the right times for currents.",
        quando: "Mantas and large pelagics depend on the season: ask the dive operators before setting dates.",
        tempo: "1-2 days",
        consiglio: "Certain spots can only be done with the right current: follow the guide's instructions."
      },
      {
        nome: "Misool",
        testo: "The south of the park, with more remote reefs and limestone islands and calmer areas. Less traveled.",
        come: "By liveaboard or resort, far from Waisai.",
        quando: "In the months with the calmest sea; when the wind blows the sea towards Misool gets rough.",
        tempo: "2 days or more",
        consiglio: "In windy weather transfers to Misool can be cancelled: leave some margin."
      }
    ],
    programmi: [
      {
        titolo: "5-7 days",
        tappe: [
          "Day 1: flight to Sorong, ferry to Waisai",
          "Day 2-3: Arborek and snorkeling on nearby reefs",
          "Day 4: Piaynemo",
          "Day 5-6: manta spots or Wayag, if the sea allows",
          "Day 7: return to Sorong"
        ]
      }
    ],
    zone: [
      {
        nome: "Homestays (Arborek, Gam, Kri)",
        perChi: "anyone who wants to save and support communities",
        testo: "You sleep in families' homes, eat what they cook, without electricity at all hours."
      },
      {
        nome: "Liveaboard",
        perChi: "anyone who wants to cover more areas",
        testo: "A boat with bunks, to reach Wayag and Misool. Expensive."
      },
      {
        nome: "Waisai",
        perChi: "anyone arriving and leaving",
        testo: "The district capital, with few services and a logistics stop."
      }
    ],
    sapori: [
      {
        nome: "Fresh fish with rice",
        testo: "Freshly caught fish with rice and vegetables, in homestays. Good and monotonous."
      },
      {
        nome: "Papeda",
        testo: "Sago glue, typical of Papua, served with yellow fish soup."
      },
      {
        nome: "Seasonal fruit",
        testo: "Whatever there is, on the islands."
      }
    ],
    attenzioni: [
      "The marine park permit (PIN Raja Ampat) is mandatory: work out its cost and time.",
      "Wind can lengthen transfers and cancel trips to exposed areas: ask operators which season is best.",
      "There are no ATMs on the islands: withdraw in Sorong or Waisai.",
      "Currents are strong: always follow the guide's instructions."
    ],
    esperienzeSlugs: ['diving-liveaboard-raja-ampat'],
    tripSlugs: [],
    imageAlt: "Limestone islets covered in forest in the turquoise lagoon of Piaynemo, Raja Ampat",
    immagine: '/images/indonesia/raja-ampat.jpg',
  },
  {
    slug: 'mentawai',
    paeseSlug: 'indonesia',
    ordine: 9,
    nome: 'Mentawai',
    tipologia: ['natura', 'cultura', 'surf', 'mare'],
    giorniConsigliati: '7-8 days: 3-4 in the Siberut jungle, the rest on Sipora for the sea or surfing',
    visitataPersonalmente: true,
    introduzione:
      "An archipelago west of Sumatra, with four main islands: Siberut, Sipora, North Pagai and South Pagai. On Siberut you spend a few days in the jungle with a Mentawai family; on Sipora there are beaches and some of the most famous surf breaks in the world.",
    percheAndarci:
      "To spend a few days in an uma, the Mentawai longhouse, with guides from Siberut, and then for the sea and the waves of Sipora.",
    cosaVedere: [
      "The Siberut jungle, going up the river by motorized canoe to a family's uma",
      "The beaches of Sipora",
      "Tuapejat, the capital of the Mentawai, on Sipora",
      "The breaks of Sipora: Lance's Left and HTs in the south, Telescopes in the north",
    ],
    cosaFare: [
      "A few days with a Mentawai family in the Siberut jungle, with an operator that works with Mentawai guides",
      "Surfing the reefs of Sipora, only for intermediates and experts, in the May-September season",
      "Surf lessons on beach breaks for beginners, best in the months with little swell",
    ],
    doveDormire:
      "On Siberut in the uma of the host family, on a mat under a mosquito net. On Sipora homestays (roughly 700,000-1,500,000 IDR a night) or resorts and surf camps (from about 4,000,000 IDR).",
    comeArrivare:
      "Mentawai Fast ferry from Padang: about 3.5 hours to Tuapejat (Sipora) and about 4 to Siberut. Times and prices (300,000-400,000 IDR depending on the source) change often: check them on the operator's official page. No confirmed regular flights show up for the Mentawai airport.",
    comeSpostarsi:
      "On Siberut minivan, motorized canoe on the river and trekking through mud. Between the islands and to the breaks, private boat (roughly 1,500,000-3,000,000 IDR a day) or transfers organized by operators and surf camps.",
    periodoMigliore:
      "May to early September for the Siberut jungle, May-September for the biggest swells; from November to January it rains a lot",
    costi:
      "stays with Mentawai Tribe from €200 (3 days) to €550 (8 days) per person; surfers pay a compulsory surf tax, with the amount to be checked at booking.",
    erroriDaEvitare: [
      "Treating the visit as a show: you are a guest in a family's home, you ask permission before every photo and you don't pay for poses or costumes",
      "Leaving without buffer days: with a red Syahbandar flag the ferries don't go out",
      "Underestimating the conditions: mud, mosquitoes, no electricity, humid heat",
      "Thinking the famous reefs are suitable for beginners",
      "Leaving without insurance that covers evacuation and without having seen a travel medicine clinic about malaria",
    ],
    miaEsperienza:
      "I went with Mentawai Tribe, a Padang operator that works with guides from Siberut, and I spent a few days in the jungle with a Mentawai family. These places are unreal. It's not for everyone, though: there's mud everywhere, there are insects, there's no electricity and you sleep on a mat. And there's an ethical side to face honestly. It's not a human zoo, you're a guest in someone's home. You ask before photographing, the guide arranges the gifts, the money has to reach the community: that's why it matters to choose an operator with Mentawai guides. It also helps to know that for decades the state suppressed their traditions, burning ritual objects and arresting the shamans. After the jungle there are the beaches, beautiful, and the surf of Sipora, which is the reason almost everyone comes all the way here.",
    luoghi: [
      {
        nome: "Siberut jungle and a Mentawai family's uma",
        testo: "You go up the river by motorized canoe to the uma, a family's longhouse, and spend a few days in the jungle. Mud everywhere, insects, no electricity, you sleep on a mat. It is not a human zoo: you are a guest in someone's home.",
        come: "From the Maileppet wharf at Muara Siberut, by motor canoe and on foot through the forest. With Mentawai guides from local operators in Padang.",
        quando: "In the less rainy months; ask the operator, because at certain times it rains a lot and the trails get hard.",
        tempo: "3-8 days",
        consiglio: "Ask before photographing, agree gifts with the guide and choose an operator with Mentawai guides, so the money reaches the community."
      },
      {
        nome: "Tuapejat and Sipora",
        testo: "The capital of the Mentawai and the island with the nicest beaches. After the Siberut jungle it is the sea and rest part.",
        come: "Mentawai Fast ferry from Padang, only on some days of the week. Times and prices change often: check them on the operator's page.",
        quando: "In the months with the calmest sea, after asking operators.",
        tempo: "2-3 days",
        consiglio: "Leave days of margin: with the Syahbandar red flag the ferries do not sail."
      },
      {
        nome: "Sipora beaches",
        testo: "Beautiful, little-visited beaches with clear water.",
        come: "By scooter or with organized transfers from Tuapejat.",
        quando: "In the months with the calmest sea.",
        tempo: "1-2 days",
        consiglio: "Bring everything you need: services on the island are few."
      },
      {
        nome: "The Mentawai surf breaks",
        testo: "Some of the most famous waves in the world, the reason almost everyone comes this far. Surf camps and boats take you to the breaks depending on the swell and your level.",
        come: "By private boat or transfers organized by surf camps. Mandatory surf fee.",
        quando: "Swells and the best season depend on your level: ask the surf camps before fixing dates.",
        tempo: "at least 5 days",
        consiglio: "The famous reefs are not for beginners: choose breaks by level."
      }
    ],
    programmi: [
      {
        titolo: "8-9 days",
        tappe: [
          "Day 1: Padang, ferry to Siberut",
          "Day 2-5: jungle with the Mentawai family",
          "Day 6: return and ferry to Tuapejat",
          "Day 7-8: beaches or surf at Sipora",
          "Day 9: return to Padang"
        ]
      }
    ],
    zone: [
      {
        nome: "Siberut (uma or homestay)",
        perChi: "anyone doing the jungle",
        testo: "You sleep with the family or in a simple camp. No electricity."
      },
      {
        nome: "Tuapejat",
        perChi: "anyone arriving by ferry",
        testo: "Simple hotels and restaurants. A logistics point."
      },
      {
        nome: "Sipora surf camps",
        perChi: "surfers",
        testo: "Dedicated facilities, with boats for the breaks."
      }
    ],
    sapori: [
      {
        nome: "Fish and rice",
        testo: "The basic meal in the jungle and on the islands."
      },
      {
        nome: "Sago",
        testo: "A traditional Mentawai food, prepared by families."
      },
      {
        nome: "Nasi padang in Padang",
        testo: "Before or after the islands, the dish of the departure city."
      }
    ],
    attenzioni: [
      "Do not treat the visit as a show: you are a guest, you ask before photographing and you do not pay for poses or costumes.",
      "With a red flag the ferries do not sail: leave with days of margin.",
      "Tough conditions: mud, mosquitoes, no electricity, humid heat.",
      "Insurance that covers evacuation and a visit to a travel-medicine clinic for malaria."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sumatra-mentawai'],
    imageAlt: 'The Siberut jungle and the beaches of Sipora, Mentawai Islands',
  },
]
