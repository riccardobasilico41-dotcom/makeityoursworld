import type { Destinazione } from '@/lib/types'

export const destinazioniEgitto: Destinazione[] = [
  {
    slug: 'cairo',
    paeseSlug: 'egitto',
    ordine: 1,
    nome: "Cairo",
    tipologia: ['city', 'museums', 'Islamic culture'],
    giorniConsigliati: "2-3 days, pyramids excluded",
    visitataPersonalmente: true,
    introduzione:
      "Twenty million people, nonstop traffic and a thousand years of Islamic architecture: Cairo is the country's front door and the city that holds the two great Egyptian museums.",
    percheAndarci:
      "For the Grand Egyptian Museum with Tutankhamun's complete treasure, for Islamic Cairo among Mamluk mosques and madrasas, for Coptic Cairo and for an evening at Khan el-Khalili.",
    cosaVedere: [
      "The Grand Egyptian Museum (GEM) in Giza, with its monumental staircase and the Tutankhamun galleries",
      "The Egyptian Museum on Tahrir Square, still full of extraordinary pieces",
      "The Citadel of Saladin and the Muhammad Ali Mosque",
      "Islamic Cairo: the Ibn Tulun Mosque, the Sultan Hassan complex, al-Muizz Street",
      "Coptic Cairo: the Hanging Church and the Ben Ezra Synagogue",
      "The National Museum of Egyptian Civilization (NMEC), with the royal mummies hall",
    ],
    cosaFare: [
      "Stroll through the Khan el-Khalili bazaar in the evening and have a tea at El Fishawy café",
      "A sunset felucca ride on the Nile from the Corniche",
      "The Tannoura Sufi dance show at Wekalet El Ghouri (it's worth checking the days beforehand)",
    ],
    doveDormire:
      "If you're short on time, it's best to sleep in Giza, near the pyramids and the GEM. If you're staying longer, Zamalek (a quiet island on the Nile full of places to go) or Downtown. Budget: guesthouses with pyramid views in Nazlet el-Semman · mid-range: hotels in Zamalek and Garden City · luxury: Marriott Mena House in Giza, the grand hotels on the Nile.",
    doveMangiare:
      "Koshari at Abou Tarek in Downtown, ful and taameya from the morning stands, traditional Egyptian cooking at Zooba or Abou El Sid, fish and mezze in the restaurants of Zamalek.",
    comeArrivare: "Cairo International Airport (CAI); since spring 2025 also Sphinx International Airport, near Giza, served by a few flights.",
    comeSpostarsi:
      "Uber and Careem, cheap and with no haggling. The metro is useful for Downtown and Coptic Cairo (Mar Girgis station). Avoid driving.",
    periodoMigliore: "October to April",
    costi:
      "GEM about 1,830 EGP ($35) from November 1, 2026, with a time slot to book online; Tahrir Egyptian Museum about 550 EGP; Citadel about 550 EGP; NMEC about 500 EGP (approximate).",
    erroriDaEvitare: [
      "Showing up at the GEM without a booked ticket: entries are by time slot and peak days sell out",
      "Accepting the “free guide” who offers himself on the street or “my brother's papyrus shop”",
      "Taking a taxi without a meter without agreeing on the price: better to use Uber or Careem",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "The mosque-madrasa of Sultan Hassan and the al-Rifa'i Mosque with their minarets, in Islamic Cairo",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg',
  },
  {
    slug: 'piramidi',
    paeseSlug: 'egitto',
    ordine: 2,
    nome: "Pyramids: Giza, Saqqara and Dahshur",
    tipologia: ['archaeology', 'desert'],
    giorniConsigliati: "1-2 days",
    visitataPersonalmente: true,
    introduzione:
      "The three royal necropolises of the Old Kingdom southwest of Cairo: Giza with Khufu, Khafre, Menkaure and the Sphinx; Saqqara with Djoser's step pyramid; Dahshur with the Bent Pyramid and the Red Pyramid.",
    percheAndarci:
      "To see the entire evolution of the pyramid in a day and a half, from the first step pyramid to the perfect shape of Giza, and to enter the inner chambers of Saqqara and Dahshur, far less crowded than Khufu's.",
    cosaVedere: [
      "The Great Pyramid of Khufu, inside too with a separate ticket",
      "The Sphinx and the Valley Temple of Khafre",
      "The panoramic viewpoint of the nine pyramids, in the desert behind Menkaure",
      "Djoser's step pyramid and the painted mastabas of Saqqara (Ti, Mereruka)",
      "The Serapeum of Saqqara, with the sarcophagi of the Apis bulls",
      "The Red Pyramid of Dahshur, which you can descend into without lines",
    ],
    cosaFare: [
      "Get in at 7 when it opens for an hour of good light and fewer groups",
      "Get around the plateau on the internal electric bus instead of by horse or camel",
    ],
    comeArrivare: "Giza is 30-60 minutes from central Cairo depending on traffic; Saqqara and Dahshur are 45-60 minutes from Giza, by car with a driver or on a tour.",
    comeSpostarsi:
      "At Giza the internal electric bus links the entrance, the pyramids and the Sphinx; for Saqqara and Dahshur you need a car with a driver for the day (roughly $30-50).",
    periodoMigliore: "October to April, always early in the morning",
    costi:
      "Giza plateau about 700 EGP; inside the Great Pyramid about 1,500 EGP; Saqqara about 450-600 EGP with the main tombs; Dahshur around 150-200 EGP (approximate, prices change often).",
    erroriDaEvitare: [
      "Believing anyone who says “the entrance is closed” or “you have to go this way”: it's the first hook for the paid camel ride",
      "Getting on a camel without agreeing on the total price, the duration and what it includes: the price doubles to get down",
      "Buying the ticket for the inside of Khufu expecting to see decorations: the chambers are bare, the interest is in the corridor and the Grand Gallery",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "The pyramids of Giza standing out against the desert on a clear day",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg',
  },
  {
    slug: 'luxor',
    paeseSlug: 'egitto',
    ordine: 3,
    nome: "Luxor",
    tipologia: ['archaeology', 'Nile'],
    giorniConsigliati: "2-3 days",
    visitataPersonalmente: true,
    introduzione:
      "Ancient Thebes, split in two by the Nile: on the east bank the temples of the living, Karnak and Luxor; on the west bank the city of the dead, with the Valley of the Kings, the Valley of the Queens and Hatshepsut's temple.",
    percheAndarci:
      "For the largest concentration of monuments of pharaonic Egypt in one place, and for the painted tombs that still preserve their original colors.",
    cosaVedere: [
      "The Karnak complex and the hypostyle hall with 134 columns",
      "Luxor Temple, to be seen at sunset and with the evening lighting",
      "The Valley of the Kings: the basic ticket includes three tombs, Tutankhamun and Seti I are paid separately",
      "Hatshepsut's mortuary temple at Deir el-Bahari",
      "Medinet Habu, the temple of Ramesses III, with reliefs that are still colored and few visitors",
      "The Colossi of Memnon and the artisans' village of Deir el-Medina",
    ],
    cosaFare: [
      "The hot-air balloon flight at dawn over the west bank",
      "Crossing the Nile by public ferry or by felucca",
      "A day trip to the temple of Dendera or Abydos",
    ],
    doveDormire:
      "East bank for convenience (restaurants, temples on foot), west bank for the calm and the proximity to the tombs. Budget: guesthouses on the west bank · mid-range: Nile hotels on the east bank · luxury: Sofitel Winter Palace, Al Moudira on the west bank.",
    doveMangiare:
      "Home-style Egyptian cooking in the restaurants of the west bank, stuffed pigeon and tagine; on the east bank, the places with a terrace facing Luxor Temple.",
    comeArrivare: "Flight from Cairo (1 hour), day or night train from Cairo (9-10 hours), road from the Red Sea (4 hours from Hurghada, 4-4.5 from Marsa Alam).",
    comeSpostarsi:
      "On the west bank you need a car with a driver or a taxi for the day (roughly $25-40); on the east bank you get around on foot or by Uber. Horse carriages only if you agree on the price beforehand.",
    periodoMigliore: "October to April; in summer, visits only between dawn and 11",
    costi:
      "Karnak about 600 EGP, Luxor Temple about 500 EGP, Valley of the Kings about 750 EGP (3 tombs), Tutankhamun's tomb about 700 EGP, Seti I and Nefertari around 2,000 EGP each, Hatshepsut about 440 EGP; hot-air balloon roughly $50-100 (approximate).",
    erroriDaEvitare: [
      "Going to the Valley of the Kings at noon: between the rock walls it tops 40 °C (104 °F) as early as May",
      "Taking photos in the tombs without the photo permit if one is required: the guards make you pay the “fine” in cash",
      "Choosing the balloon on the lowest price alone: the company matters, and flights are canceled when it's windy",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "The papyrus-shaped columns of the great hypostyle hall of Karnak Temple, seen from below",
    immagine: '/images/viaggi/egitto-completo/giorno-14-luxor.jpg',
  },
  {
    slug: 'assuan-abu-simbel',
    paeseSlug: 'egitto',
    ordine: 4,
    nome: "Aswan and Abu Simbel",
    tipologia: ['archaeology', 'Nile', 'Nubian culture'],
    giorniConsigliati: "2-3 days",
    visitataPersonalmente: true,
    introduzione:
      "The southernmost city of the circuit, where the Nile narrows between granite islands and dunes, with the colorful Nubian villages on the west bank. From here you set out for the temples of Ramesses II and Nefertari at Abu Simbel.",
    percheAndarci:
      "For the slowest pace in Egypt, the temple of Philae on an island in the lake, the felucca at sunset and Abu Simbel, the monument moved piece by piece in the 1960s to save it from Lake Nasser.",
    cosaVedere: [
      "The two temples of Abu Simbel, 280 km to the south",
      "The temple of Philae, by boat from the Shellal dock",
      "The Unfinished Obelisk in the granite quarries",
      "The Nubian Museum",
      "The Nubian village of Gharb Soheil",
    ],
    cosaFare: [
      "A felucca at sunset around Elephantine Island",
      "The sound and light show at Abu Simbel, for those who sleep there",
      "On February 22 and October 22 the sun reaches all the way into the sanctuary of the great temple",
    ],
    doveDormire:
      "Budget: Nubian guesthouses on Elephantine Island or in Gharb Soheil · mid-range: hotels on the Corniche · luxury: Old Cataract (Sofitel Legendary). In Abu Simbel there are few places, including the Eskaleh eco-lodge.",
    comeArrivare:
      "Flight from Cairo (1 hour 25 minutes), overnight sleeper train from Cairo or Giza, Nile cruise from Luxor (3-4 nights). For Abu Simbel: a 3.5-hour road trip leaving before dawn, or a 45-minute EgyptAir flight.",
    comeSpostarsi: "Public and private boats on the Nile, taxis and Uber in town; for Abu Simbel, a minivan with a driver or a group tour.",
    periodoMigliore: "November to March; in summer it's the hottest place in the country",
    costi:
      "Abu Simbel roughly 750-850 EGP; Philae about 550 EGP plus the boat (to be agreed on, 300-500 EGP per boat); Nubian Museum about 300 EGP; felucca roughly 300-600 EGP per hour per boat (approximate).",
    erroriDaEvitare: [
      "Doing Abu Simbel in a day in summer without accounting for the 3-4 am wake-up and seven hours of driving round trip",
      "Getting on a felucca without agreeing on whether the price is per person or per boat, and for how long",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: "The temples of Abu Simbel with the colossal statues of Ramesses II carved into the rock",
    immagine: '/images/viaggi/egitto-completo/giorno-11-assuan-abu-simbel.jpg',
  },
  {
    slug: 'siwa',
    paeseSlug: 'egitto',
    ordine: 5,
    nome: "Siwa Oasis",
    tipologia: ['desert', 'oasis', 'Berber culture'],
    giorniConsigliati: "3 days plus two for travel",
    visitataPersonalmente: true,
    introduzione:
      "An oasis of palms and salt lakes 50 km from the Libyan border, home to a Berber-speaking community, on the edge of the Great Sand Sea.",
    percheAndarci:
      "For an Egypt completely different from the one of temples: salt-mud houses, springs to swim in, the dunes of the Great Sand Sea and the Oracle temple where Alexander the Great was proclaimed son of Amun.",
    cosaVedere: [
      "The fortress of Shali, the old center built of kershef (mud and salt)",
      "The temple of the Oracle of Amun at Aghurmi",
      "The Mountain of the Dead, Gebel al-Mawta, with painted tombs",
      "Cleopatra's Spring",
      "The salt lakes, where you float as in the Dead Sea",
    ],
    cosaFare: [
      "A 4x4 excursion into the Great Sand Sea with sandboarding and sunset on the dunes",
      "A night in a tent camp in the desert",
      "Getting around the oasis by bicycle",
    ],
    doveDormire:
      "Budget: small hotels in the center · mid-range: Siwan-style eco-lodges outside the center · luxury: Adrère Amellal, with no electricity, by candlelight.",
    comeArrivare:
      "Overnight bus from Cairo (about 10-12 hours) or in two legs via Marsa Matruh; alternatively a car with a driver or an organized tour. There are checkpoints along the road: keep your passport always at hand.",
    comeSpostarsi: "Bicycle, tuk-tuk and donkey carts in the oasis; 4x4 with a local driver for the desert.",
    periodoMigliore: "October to April; winter nights in the desert drop close to 0 °C (32 °F)",
    costi:
      "Half-day excursion into the Great Sand Sea roughly $20-35 per person; the desert permit is requested by the local operator, who includes it in the price (approximate).",
    erroriDaEvitare: [
      "Going into the desert with someone who doesn't have the permits: the areas toward the Libyan border are controlled by the army",
      "Wearing skimpy clothes in town: Siwa is a conservative community, and even at the lake or the springs people swim covered",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: "Date palms reflected in a spring of the Siwa oasis",
    immagine: '/images/viaggi/egitto-completo/giorno-07-siwa.jpg',
  },
  {
    slug: 'mar-rosso',
    paeseSlug: 'egitto',
    ordine: 6,
    nome: "Red Sea: Hurghada, Marsa Alam and Sharm el-Sheikh",
    tipologia: ['sea', 'diving', 'snorkeling'],
    giorniConsigliati: "3-5 days",
    visitataPersonalmente: true,
    introduzione:
      "The Egyptian coast of the Red Sea and the tip of the Sinai: coral reef right off the shore, wrecks, pelagic sharks offshore and water that doesn't drop below 21-22 °C (70-72 °F) even in winter.",
    percheAndarci:
      "To end the archaeological trip with the sea, or for some of the most famous dives in the world: the Thistlegorm wreck, Ras Mohammed, Elphinstone, the Brothers and Daedalus islands.",
    cosaVedere: [
      "Hurghada: the Giftun Islands and Orange Bay, the Thistlegorm wreck on a long day",
      "Marsa Alam: Abu Dabbab bay with turtles and, with luck, the dugong; the Dolphin House (Samadai) reef; Wadi el Gemal park",
      "Sharm el-Sheikh: Ras Mohammed National Park and the Straits of Tiran",
      "Dahab: the Blue Hole and reefs from the shore",
    ],
    cosaFare: [
      "Snorkeling from the shore on the resort's reef",
      "An Open Water or Advanced course with a PADI or SSI center",
      "A week-long liveaboard dive cruise in the south: Brothers, Daedalus, Elphinstone",
    ],
    doveDormire:
      "Hurghada: El Gouna and Sahl Hasheesh for mid-range and high-end, Hurghada town for budget. Marsa Alam: isolated resorts with a reef out front, eco-lodges like the one at Wadi Lahami for divers. Sharm: Naama Bay for the evening scene, Nabq for resorts.",
    comeArrivare:
      "Direct flights from Italy to Hurghada, Marsa Alam and Sharm el-Sheikh (many seasonal charters); domestic flights from Cairo; from Luxor 4 hours by road to Hurghada, 4-4.5 to Marsa Alam.",
    comeSpostarsi: "Transfers arranged by the resort, taxis and minivans with a driver; for boat excursions you leave from the tourist marinas.",
    periodoMigliore:
      "warm sea from May to November; from December to March the water is around 22 °C (72 °F) with strong wind, making for 5 mm wetsuit days",
    costi:
      "Snorkeling boat excursion with lunch roughly $30-50; single dive $35-55, 10-dive package $300-400; Open Water course $400-550; 7-night liveaboard €1,000-1,800 plus park fees (approximate).",
    erroriDaEvitare: [
      "Choosing Sharm thinking you'll easily get to Luxor: from the Sinai you need a flight, almost always via Cairo",
      "Touching or walking on coral and buying shells or corals: it's forbidden and exports are confiscated at the airport",
      "Booking a liveaboard in the south without the certification and number of dives required (usually Advanced and at least 50 dives)",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Table corals and turquoise water on a Red Sea coral reef",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg',
  },
]
