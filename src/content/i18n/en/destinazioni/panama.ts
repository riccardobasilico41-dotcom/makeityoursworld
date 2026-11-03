import type { Destinazione } from '@/lib/types'

export const destinazioniPanama: Destinazione[] = [
  {
    slug: 'panama-city',
    paeseSlug: 'panama',
    ordine: 1,
    nome: 'Panama City',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "A capital with two opposite faces a few kilometers apart: the skyline of skyscrapers on the bay and the Casco Viejo, the colonial historic center and UNESCO site, with its squares and rooftops.",
    percheAndarci:
      "It's the air hub of all of Latin America and the obligatory gateway to the country, and unlike many capitals in the region it deserves a couple of days.",
    cosaVedere: [
      'The Casco Viejo, with Plaza de la Independencia and the colonial churches',
      'The Miraflores Locks on the Panama Canal, with the visitor center and the panoramic terrace',
      'The ruins of Panamá Viejo, the original city destroyed by pirates in 1671',
      'The Biomuseo designed by Frank Gehry, on the Calzada de Amador',
      "Parque Natural Metropolitano, tropical forest within the city limits",
    ],
    cosaFare: [
      "Visit the canal locks, best at the times ships transit (there's a dedicated experience page)",
      'An aperitivo on one of the Casco Viejo rooftops at sunset',
      'Day trip to the Perlas islands or Isla Taboga by ferry',
      'Excursion to Portobelo and the Caribbean coast, about 2 hours from the capital',
    ],
    doveDormire: "Casco Viejo for the atmosphere and nightlife; the Marbella and Obarrio area for more modern hotels and often lower prices.",
    doveMangiare:
      "The place not to skip is the Mercado de Mariscos on the bay: downstairs you buy the fish, upstairs they cook it, and a ceviche in a plastic cup costs a couple of dollars. The Casco Viejo has the rooftops and the high-end restaurants, with international-capital prices; the neighborhood fondas serve sancocho, the chicken soup with ñame that is the national dish, and ropa vieja. As street food, try carimañolas and fried empanadas at breakfast.",
    comeArrivare: "International flight to Panama City-Tocumen (PTY), one of the main hubs of the Americas; from the airport to the center 30-45 minutes by taxi or Uber.",
    comeSpostarsi: "Metro (two lines, cheap and functional), Uber widespread and convenient, taxis always to be negotiated before getting in.",
    periodoMigliore: "mid-December to mid-April, the dry season; the rest of the year it rains mostly in the afternoon",
    costi: "you pay in US dollars (the balboa exists only as coins); entry to Miraflores about 20 USD for foreigners",
    erroriDaEvitare: [
      "Going to the locks without checking the transit times: without ships passing through, the visit loses most of its point",
      "Walking at night outside the tourist areas of the Casco Viejo, which borders neighborhoods to avoid",
    ],
    miaEsperienza:
      "From the airport we went straight to the Casco Viejo, and the first impact was a skyline of skyscrapers that looked like nothing we'd seen in the previous three weeks. The next day, in the morning, the Miraflores Locks: the ship transit times need to be checked beforehand, because without a ship maneuvering you're looking at an empty concrete basin, while a container ship coming in with a few inches of margin on each side is worth the detour by itself. In the afternoon the ruins of Panamá Viejo and a walk in the Casco Viejo, where the most interesting thing to look at is the contrast between renovated buildings and facades still propped up. We had lunch at the Mercado de Mariscos with a ceviche in a plastic cup for a couple of dollars. Outside the tourist areas of the Casco, after sunset, it's better not to walk around.",
    esperienzeSlugs: ['chiuse-miraflores'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "The skyline of Panama City's skyscrapers seen from a terrace in the Casco Viejo",
    immagine: '/images/panama/panama-city.jpg',
  },
  {
    slug: 'san-blas',
    paeseSlug: 'panama',
    ordine: 2,
    nome: 'San Blas (Guna Yala)',
    tipologia: ['mare', 'isole', 'cultura'],
    giorniConsigliati: '2-4 days',
    visitataPersonalmente: true,
    introduzione:
      "An archipelago of over 300 Caribbean islands autonomously administered by the Guna people: palm trees, white sand, shallow turquoise water and accommodation that is basic by choice, often without continuous electricity.",
    percheAndarci:
      "It's the most famous sea in Panama and one of the few self-governed indigenous territories on the continent: access rules, transport and facilities are managed by the Guna community, with no tourist chains.",
    cosaVedere: [
      'The best-known islands for day trips: Isla Perro (with a shipwreck for snorkeling), Isla Aguja, Cayos Holandeses',
      'The natural shallow-water pools in the middle of the sea',
      'The Guna villages, where you buy molas, the traditional hand-sewn textiles',
    ],
    cosaFare: [
      "A night in a cabaña on an island, with meals included and boat trips among the islets",
      'Snorkeling on the wrecks and the coral shallows',
      'Sailing crossing to Colombia (3-5 days), the classic alternative to the Darién Gap',
    ],
    doveDormire: "Only cabañas run by Guna families, from very spartan ones to a few options with a private bathroom: you book as a package, with transport and meals included.",
    doveMangiare: "Meals are almost always included in the package: fish, lobster in season, rice and plantain.",
    comeArrivare:
      "4x4 transfer from Panama City to the port of Cartí (about 2h30-3h on a very steep mountain road), then a boat to the islands. Departures very early in the morning.",
    comeSpostarsi: "Only by boat, with transfers arranged by the place you're staying.",
    periodoMigliore: "dry season (December-April) for calmer seas; the boat crossing can be demanding in wind",
    costi:
      "entry to the Guna territory and island taxes to be paid in cash; 4x4 transfer plus boat 40-60 USD each way; packages with cabaña and meals 60-150 USD per person per night",
    erroriDaEvitare: [
      "Arriving without cash: there are no ATMs or card payments on the islands",
      "Expecting resort comforts: limited electricity, rationed fresh water and almost no wifi are part of the experience",
      "Booking through unauthorized intermediaries: the facilities and transport are run by the Guna community, which regulates access",
    ],
    miaEsperienza:
      "Getting there was the most demanding transfer of the second part: wake-up around five, almost three hours of 4x4 on a mountain road with steep grades to the port of Cartí, then the boat to the islands. It's worth knowing what you're getting into. Guna Yala is a self-governed territory: the Guna run the tourism and the entry fee is paid to them, in cash only, because there are no ATMs or cards on the islands. Our cabaña was basic by choice, run by a Guna family: electricity on a schedule, rationed fresh water, almost no wifi, meals included. We spent the full day on the boat among Isla Perro, with the wreck to snorkel, Isla Aguja, the Cayos Holandeses and the natural pools in the middle of the sea. The rules belong to the community: you ask permission before photographing people and houses, nothing is taken away from the islands and scuba diving is prohibited.",
    esperienzeSlugs: ['notte-isola-san-blas'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "White sand islet with palm trees and huts in the San Blas archipelago, Panama",
    immagine: '/images/panama/san-blas.jpg',
  },
  {
    slug: 'bocas-del-toro',
    paeseSlug: 'panama',
    ordine: 3,
    nome: 'Bocas del Toro',
    tipologia: ['mare', 'isole', 'nightlife'],
    giorniConsigliati: '3-5 days',
    visitataPersonalmente: true,
    introduzione:
      "A Caribbean archipelago on the border with Costa Rica, with stilt houses, surfing, snorkeling and the liveliest nightlife in the country.",
    percheAndarci:
      "It's the place where Panama becomes Caribbean in atmosphere too: livelier and less basic than San Blas, with very different islands a few minutes apart by boat.",
    cosaVedere: [
      'Isla Colón, with Bocas Town and its colorful wooden buildings',
      'Starfish Beach, the beach of the sea stars',
      'Isla Bastimentos and the marine national park, with Red Frog Beach',
      'Cayo Zapatilla, often the most beautiful stop on the boat tours',
      'Cayo Coral, for snorkeling in shallow water',
    ],
    cosaFare: [
      'Day boat tour among the islets, with snorkeling stops and dolphin sightings',
      'Surf lesson at Playa Bluff or Paunch',
      'Kayak ride through the mangroves',
      'An evening in Bocas Town, among bars on the water and parties on the islands',
    ],
    doveDormire: "Bocas Town on Isla Colón for services and nightlife; Bastimentos or Carenero for quiet and lodging on the water.",
    doveMangiare:
      "Bocas is the place in Panama where you eat Caribbean: fish and chicken in coconut sauce, rice and beans cooked in coconut milk instead of water, patacones everywhere. The archipelago's Afro-Caribbean heritage shows in the cooking more than elsewhere in the country. In Bocas Town the restaurants on the water cost double the stalls two streets away, where you eat the same fish; the morning market is the cheapest option. Ice-cold local beer is almost the official drink of the island.",
    comeArrivare:
      "Domestic flight from Panama City to Bocas del Toro (about 1 hour) or overnight bus to Almirante and a water taxi (about 30 minutes). Many also arrive overland from Costa Rica, from the Sixaola border.",
    comeSpostarsi: "Water taxis between the islands (a few dollars each way), bicycles and taxis on Isla Colón.",
    periodoMigliore:
      "it has a different microclimate from the rest of the country: September-October and February-March are often the sunniest periods, while here the Panamanian \"dry season\" doesn't always line up",
    costi: "day boat tour 25-40 USD per person plus national park fees; domestic flight 100-150 USD each way",
    erroriDaEvitare: [
      "Taking the national dry season for granted: here the weather follows a different cycle from the rest of Panama",
      "Planning the boat tour without allowing for rough seas, which can cancel outings to the outer cayos",
    ],
    miaEsperienza:
      "From Boquete we got to Bocas overland as far as Almirante and then by water taxi, and it was the opposite of San Blas: stilt houses, a much more social and noisy atmosphere, hostels and people who almost always stay longer than planned. The next day we did the boat tour among the islets: Cayo Zapatilla, often the most beautiful point of the whole tour, and Starfish Beach, which lives up to its name with sea stars in water barely over three feet deep, plus a snorkeling stop at Cayo Coral. Outings to the outer cayos get canceled in rough seas, and that's something to allow for. Two practical warnings: here the weather follows its own microclimate and not the dry season of the rest of Panama, and the sands are infested with chitres, sand flies that bite without you feeling it and leave marks for days. In the evening, in Bocas Town, live music and parties that often move by boat to the nearby islands.",
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "Colorful little stilt houses and a wooden pier over the water at Bocas del Toro, Panama",
    immagine: '/images/panama/bocas-del-toro.jpg',
  },
  {
    slug: 'boquete',
    paeseSlug: 'panama',
    ordine: 4,
    nome: 'Boquete and the Highlands',
    tipologia: ['natura', 'trekking'],
    giorniConsigliati: '2-4 days',
    visitataPersonalmente: true,
    introduzione:
      "Highland Panama, in the province of Chiriquí: cool climate, some of the best coffee plantations in the world, cloud forests and Volcán Barú, the highest point in the country.",
    percheAndarci:
      "It's the only place in the world from which, on the right day, you can see the Pacific Ocean and the Caribbean Sea together. And it's the cool counterweight to the Caribbean islands.",
    cosaVedere: [
      'Volcán Barú (3,475 m), with the night climb for sunrise over the two oceans',
      'The Sendero Los Quetzales, among the best places in the world to spot the quetzal',
      'The coffee plantations of the area, including those that produce the prized Geisha',
      'The Lost Waterfalls and the Caldera Hot Springs',
    ],
    cosaFare: [
      "Night climb of Volcán Barú for sunrise (there's a dedicated experience page)",
      'Tour of a coffee finca with tasting',
      'Birdwatching on the Sendero Los Quetzales, best with a local guide',
      'Rafting on the Rio Chiriquí Viejo',
    ],
    doveDormire: "Boquete town for services; lodges on the surrounding hills for greenery and views of the valley.",
    doveMangiare:
      "In Boquete you drink the best coffee of the trip: the area produces Geisha, which sets world price records at auctions, and in the town's cafés you taste it for a fraction of what it costs elsewhere. For a mountain town the food scene is surprisingly international, because of the community of North American retirees who live there; to eat Panamanian you need the local fondas, with sancocho and carne guisada. At the farmers' market you find strawberries and highland vegetables, rare in the rest of the country.",
    comeArrivare:
      "Domestic flight from Panama City to David (about 1 hour), then 40 minutes by car or bus to Boquete; alternatively an overnight bus from the capital (6-7 hours).",
    comeSpostarsi: "Frequent local buses between David and Boquete; a rental car is handy for the fincas and trails outside town.",
    periodoMigliore:
      "December-April for the Barú climb with clear skies; the bajareque, the fine drizzle typical of the area, can appear in any season",
    costi: "entry to Volcán Barú park a few dollars; guided climb 50-90 USD per person; coffee tour 30-40 USD",
    erroriDaEvitare: [
      "Climbing Barú without winter clothing: you reach the summit before dawn, with wind and temperatures near freezing",
      "Expecting the view of the two oceans to be guaranteed: it only happens with a clear sky, typically in the dry months",
    ],
    miaEsperienza:
      "We got there from San Blas via Panama City and the flight to David, and after the humid heat of the islands Boquete was a physical relief: you sleep with the window open and no fan, something that almost never happens in the rest of the trip. We did the tour of a coffee finca with tasting, and this is where you taste Geisha for a fraction of what it costs elsewhere. The next night we set out around midnight for Barú: eight miles (thirteen kilometers) of dirt track each way, in the dark, with the cold increasing, to reach the 3,475-meter summit before dawn. The view of the two oceans together only comes with a completely clear sky, that is on a few good days even in the dry season; even without that luck, the night climb with the valleys lit up below is worth the effort. By late morning we were back in Boquete.",
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "Rainbow over the green hills around Boquete, in the Chiriquí highlands, Panama",
    immagine: '/images/panama/boquete.jpg',
  },
]
