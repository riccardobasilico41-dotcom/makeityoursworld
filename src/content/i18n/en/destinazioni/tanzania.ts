import type { Destinazione } from '@/lib/types'

export const destinazioniTanzania: Destinazione[] = [
  {
    slug: 'serengeti',
    paeseSlug: 'tanzania',
    ordine: 1,
    nome: 'Serengeti',
    tipologia: ['safari', 'parco nazionale', 'fauna'],
    giorniConsigliati: '2-3 days, ideally with at least two nights inside the park',
    visitataPersonalmente: true,
    introduzione:
      "The great plain of northern Tanzania, a UNESCO World Heritage Site: open savanna, granite kopjes, big cats and, depending on the season, the herds of the Great Migration.",
    percheAndarci:
      "It's the park where the very idea of a safari comes from: huge open spaces, lions, cheetahs and leopards, and millions of wildebeest and zebras moving with the rains.",
    cosaVedere: [
      'The Seronera Valley, in the center of the park, the easiest area for big cats',
      'The kopjes, the granite outcrops where lions rest',
      'The southern plains toward Ndutu during the wildebeest calving season',
      'The Mara River, in the north, during the migration crossings',
    ],
    cosaFare: [
      'Game drives at dawn and in the late afternoon, when animals are most active',
      'Sleeping in a tent inside the park (see the dedicated experience page)',
      'Following the Great Migration in the right area for the month (see the dedicated experience page)',
      'A hot air balloon safari at dawn, if you want to see the plain from above',
    ],
    doveDormire:
      "Inside the park there's everything: public campsites with camping tents, permanent tented camps with real beds and bathrooms, lodges and luxury camps. Sleeping inside the Serengeti rather than outside saves hours on the road and puts you on the tracks right at dawn. Suricata Safaris runs the circuit in all three styles (camping, mid-range and luxury).",
    comeArrivare:
      "From Arusha by 4x4, usually via Tarangire or Ngorongoro: it's a long day on the road. Alternatively, a domestic flight from Arusha to one of the park's airstrips.",
    comeSpostarsi: "By 4x4 with a driver-guide: you can't walk on your own inside the park.",
    periodoMigliore:
      'June to October (dry season, migration in the north from July); December to March in the south, for the calving',
    costi:
      "Entry about $83 per person every 24 hours in high season and $71 in low season, VAT included, plus the overnight fee at camps and lodges (about $59-71 per night); at public campsites about $35 (approximate, check with your operator).",
    erroriDaEvitare: [
      "Going to the wrong area for the month: the migration moves, and in summer there are no wildebeest in the south of the park",
      'Planning a single day: between getting there and back you spend more time in the car than watching animals',
      'Forgetting warm layers for the dawn game drives, which are cold on an open 4x4',
    ],
    miaEsperienza:
      "I did my safari with Suricata Safaris: they're top, they have accommodation for every taste and also the tent experiences, which I recommend. I like traveling rough and close to nature, even if a 5-star stay now and then is fine too.",
    esperienzeSlugs: ['safari-in-tenda', 'grande-migrazione'],
    tripSlugs: [],
    imageAlt: 'A lone acacia in the Serengeti savanna at sunset, with hills on the horizon',
    immagine: '/images/tanzania/serengeti-savana.jpg',
  },
  {
    slug: 'ngorongoro',
    paeseSlug: 'tanzania',
    ordine: 2,
    nome: 'Ngorongoro Crater',
    tipologia: ['safari', 'fauna', 'unesco'],
    giorniConsigliati: '1 day in the crater, with the night on the rim',
    visitataPersonalmente: true,
    introduzione:
      "An intact volcanic caldera with a flat floor full of animals: grazers, lions, hippos and the rare black rhino. It's the heart of the Ngorongoro Conservation Area, a UNESCO World Heritage Site, where the Maasai still live with their herds.",
    percheAndarci:
      "In a few hours and in an enclosed space you see a huge number of animals, black rhino included, with the crater walls all around.",
    cosaVedere: [
      'The crater floor, with its salt lake and swamps',
      'The black rhinos, which are easier to spot here than elsewhere in the north',
      'The view from the crater rim',
      "Olduvai Gorge, a paleontological site inside the protected area, on the way to the Serengeti",
    ],
    cosaFare: [
      'A game drive on the crater floor (see the dedicated experience page)',
      'A visit to a Maasai village (cultural boma)',
    ],
    doveDormire:
      "Lodges and campsites on the crater rim, at about 2,300 meters: it gets really cold at night. It's cheaper to sleep in Karatu, outside the protected area, and drive up early in the morning.",
    comeArrivare: 'From Arusha by 4x4, via Karatu; it\'s also the stop on the way between Arusha and the Serengeti.',
    comeSpostarsi: 'By 4x4 with a driver-guide, going down and back up on dedicated tracks.',
    periodoMigliore: 'all year; in the dry season the grass is short and animals are easier to see',
    costi:
      "Official NCAA rates for non-resident visitors from outside East Africa: entry $70.80 per person every 24 hours ($23.60 for children aged 5 to 15), plus $295 per vehicle for each descent into the crater and the 4x4 permit.",
    erroriDaEvitare: [
      'Going down mid-morning: the first vehicles enter at dawn and find the crater emptier',
      'Underestimating the cold on the rim, in the evening and early morning',
      'Budgeting the safari without the crater fee, which is charged per vehicle and so weighs more on small groups',
    ],
    esperienzeSlugs: ['cratere-ngorongoro'],
    tripSlugs: [],
    imageAlt: 'The floor of Ngorongoro Crater seen from the rim, with the lake and the caldera walls',
    immagine: '/images/tanzania/ngorongoro-cratere.jpg',
  },
  {
    slug: 'tarangire-manyara',
    paeseSlug: 'tanzania',
    ordine: 3,
    nome: 'Tarangire and Lake Manyara',
    tipologia: ['safari', 'parco nazionale', 'natura'],
    giorniConsigliati: '1 day each, often at the start or end of the circuit',
    visitataPersonalmente: true,
    introduzione:
      "Two parks close to Arusha and very different from each other: Tarangire, with giant baobabs and herds of elephants along the river, and Lake Manyara, squeezed between the Rift Valley escarpment and the lake, with forest, flamingos and baboons.",
    percheAndarci:
      "They're the easiest stops to start a safari and, in the dry season, Tarangire has one of the highest concentrations of elephants in Tanzania.",
    cosaVedere: [
      'The baobabs and elephants along the Tarangire River',
      'The forest and the shore of Lake Manyara, with flamingos when the water level allows',
      'The Rift Valley escarpment above Manyara',
    ],
    cosaFare: [
      'A game drive in Tarangire, best in the dry season',
      'A drive through Lake Manyara National Park, which works well in half a day',
      'A visit to the village of Mto wa Mbu, at the entrance to Manyara',
    ],
    doveDormire:
      'Camps and lodges just outside or inside Tarangire; for Manyara you stay in Mto wa Mbu or Karatu, which is also the base for Ngorongoro.',
    comeArrivare: 'From Arusha by 4x4: they are the two parks of the northern circuit closest to the city.',
    comeSpostarsi: 'By 4x4 with a driver-guide.',
    periodoMigliore: 'June to October, when animals gather around the water',
    costi: 'Approximate entry of about $50-60 per person every 24 hours for each park (TANAPA rates as reported by operators, to be checked).',
    erroriDaEvitare: [
      'Skipping Tarangire to rush to the Serengeti: in the dry season it\'s worth the trip on its own',
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'A herd of elephants crossing the Tarangire River, with baobabs on the bank',
    immagine: '/images/tanzania/tarangire-elefanti.jpg',
  },
  {
    slug: 'zanzibar',
    paeseSlug: 'tanzania',
    ordine: 4,
    nome: 'Zanzibar',
    tipologia: ['mare', 'spiagge', 'città storica'],
    giorniConsigliati: '4-5 days, after the safari',
    visitataPersonalmente: true,
    introduzione:
      "The main island of the archipelago (Unguja) is the classic beach stop after a safari: Stone Town, the UNESCO-listed old town, and the white beaches of the Indian Ocean, from Nungwi and Kendwa in the north to Paje and Jambiani on the east coast.",
    percheAndarci:
      'To end the trip with some beach days, and for a historic town that mixes Swahili, Arab, Indian and European culture.',
    cosaVedere: [
      'Stone Town, with its carved doors, alleys and waterfront (see the dedicated experience page)',
      'The northern beaches, Nungwi and Kendwa, where the tide is less noticeable',
      'The east coast, Paje and Jambiani, where low tide uncovers the lagoon',
      'Jozani Forest, with the Zanzibar red colobus monkeys',
    ],
    cosaFare: [
      'Snorkeling around Mnemba Atoll',
      'Kitesurfing in Paje',
      'Dinner at the evening market in the Forodhani Gardens in Stone Town',
    ],
    doveDormire:
      'One or two nights in Stone Town for the town, then the beach: the north to swim at any time of day, the east coast for kitesurfing and quieter villages.',
    comeArrivare:
      "Domestic flight from Arusha or Kilimanjaro to Zanzibar airport (ZNZ), or direct international flights; from Dar es Salaam also the fast ferry. On entry you need Zanzibar's mandatory insurance ($44).",
    comeSpostarsi: 'Taxis or pre-arranged transfers between Stone Town and the beaches; in Stone Town you walk.',
    periodoMigliore: 'June to October and December to February, outside the rainy seasons',
    costi: 'Mandatory insurance $44 per person for stays of up to 92 days.',
    erroriDaEvitare: [
      'Choosing the east coast without knowing about the tide: at low tide the sea pulls back hundreds of meters',
      'Walking around Stone Town in swimwear or a tank top: away from the beaches you cover shoulders and knees',
      "Arriving without Zanzibar's insurance already bought online, and queuing at the airport",
    ],
    esperienzeSlugs: ['stone-town'],
    tripSlugs: [],
    imageAlt: 'The white beach of Nungwi, in northern Zanzibar, with turquoise water and houses on the shore',
    immagine: '/images/tanzania/zanzibar-nungwi.jpg',
  },
  {
    slug: 'arusha-kilimanjaro',
    paeseSlug: 'tanzania',
    ordine: 5,
    nome: 'Arusha and Kilimanjaro',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 night before and after the safari; 6-8 days to climb Kilimanjaro',
    visitataPersonalmente: false,
    introduzione:
      "Arusha is the town almost every northern safari starts from, at the foot of Mount Meru; a little further east is Kilimanjaro, Africa's highest mountain, with Moshi as the base for climbers.",
    percheAndarci:
      "It's the logistics hub of the trip: this is where you land, meet your operator and head off to the parks. With more time you can add a trek on Kilimanjaro or Meru.",
    cosaVedere: [
      'Kilimanjaro, which on clear days you can see even from the road',
      'Arusha National Park, at the foot of Mount Meru, for a day on foot or by car',
    ],
    cosaFare: [
      'Climbing Kilimanjaro on one of the classic routes (Machame, Lemosho, Marangu, Rongai)',
      'A 3-4 day trek on Mount Meru',
      'A trip to the Materuni waterfalls and a coffee farm near Moshi',
    ],
    doveDormire: 'Arusha has lodges and hotels in every price range; for Kilimanjaro the base is Moshi.',
    comeArrivare: 'Kilimanjaro International Airport (JRO), between Arusha and Moshi; Arusha Airport (ARK) handles domestic flights.',
    comeSpostarsi: 'Transfer arranged by your operator or taxi; heavy traffic in town at rush hour.',
    periodoMigliore: 'June to October and January to February for Kilimanjaro, outside the rains',
    erroriDaEvitare: [
      'Booking the first safari day on the same day as your long-haul flight: better to spend a night in Arusha',
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Kilimanjaro above the clouds, with acacias in the foreground',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
