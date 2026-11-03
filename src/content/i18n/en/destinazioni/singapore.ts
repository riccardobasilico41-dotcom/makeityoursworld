import type { Destinazione } from '@/lib/types'

export const destinazioniSingapore: Destinazione[] = [
  {
    slug: 'marina-bay',
    paeseSlug: 'singapore',
    ordine: 1,
    nome: 'Marina Bay and the Gardens',
    tipologia: ['architettura', 'città', 'panorami'],
    giorniConsigliati: '1 day, with the evening devoted to the Gardens',
    visitataPersonalmente: true,
    introduzione:
      "The bay built on land taken from the sea, where everything that makes Singapore recognizable is found: the hotel with a ship on the roof, the fifty-meter-tall Supertrees, the air-conditioned conservatories and the lotus-shaped museum. It's the city as it wants to be seen, and it works.",
    percheAndarci:
      "Because it's one of the most successful urban planning experiments of the last thirty years: an entire bay designed from scratch that risked becoming an open-air shopping mall. Instead it holds up, especially after sunset.",
    cosaVedere: [
      "The Supertree Grove at Gardens by the Bay, with the free evening light show",
      "The Flower Dome and Cloud Forest conservatories, with the tallest indoor waterfall in the world",
      "Marina Bay Sands and its rooftop observation deck",
      "The Helix Bridge and the Merlion, the city's symbol statue",
      "The ArtScience Museum, shaped like a lotus, at the tip of the bay",
      "The illuminated waterfront, which you can walk all the way around",
    ],
    cosaFare: [
      "Light show at the Supertrees after sunset (see the dedicated experience page)",
      "A full walk around the bay, about 3.5 km, best at blue hour",
      "Go up to a rooftop bar instead of the observation deck: you pay for a cocktail and get the same view",
      "Evenings at the Marina Barrage, the dam with a lawn on its roof where Singaporeans fly kites",
    ],
    doveDormire:
      "The area is the most expensive in the city. Those who sleep here do it for the view; those who want to spend less stay in Chinatown, Bugis or Geylang and get here by metro in ten minutes, which is the reasonable choice.",
    doveMangiare:
      "It's the part of the city where you eat worst for the price: the restaurants around the bay are designed for people who don't move. The advice is to eat elsewhere and come here after dinner, or stop at Satay by the Bay, the hawker center inside the Gardens, which is the only option at normal prices in the area.",
    comeArrivare: "Metro: the Bayfront, Marina Bay and Promenade stops serve the whole area. From the airport it's about 30 minutes by MRT.",
    comeSpostarsi:
      "All on foot, but with a warning: the heat is serious and there's little shade. The air-conditioned underground passages connecting the shopping malls are the city's real pedestrian network and are worth using.",
    periodoMigliore:
      "all year, better in the evening: there are the lights, and during the day the humidity on the bay is heavy and the asphalt radiates heat back.",
    costi:
      "the bay, the Supertrees and the light show are free; the conservatories cost around 30-50 SGD, the Marina Bay Sands deck about 30. Almost everything else can be seen without paying anything.",
    erroriDaEvitare: [
      "Paying for the Marina Bay Sands observation deck: it costs as much as a cocktail at the bar in the same building, which has the same view and where you can sit down",
      "Going to the Gardens in the middle of the day, when it's very hot and there are no lights",
      "Skipping the conservatories thinking they're just any botanical garden: the Cloud Forest, with its thirty-meter indoor waterfall, is the most surprising thing in the area",
      "Having dinner around the bay: you pay double to eat worse than at any hawker center",
    ],
    miaEsperienza:
      "I expected an artificial place, and yet Marina Bay works. It's worth understanding why: the bay is closed off by a dam that turned seawater into a freshwater reservoir and solved half of the country's water problem. Knowing that, the Supertrees stop being fake trees and become what they are: rainwater collection and ventilation towers for the conservatories, with solar panels on top. The evening light show is free and lasts about fifteen minutes. We lay down on the lawn under the towers along with hundreds of people: it's the best thing in the city and it costs nothing. The Cloud Forest, with the thirty-meter waterfall inside an air-conditioned glass dome, is the other surprise. The rule for the whole area: don't pay for the view from above and order a cocktail at the bar of the same skyscraper.",
    esperienzeSlugs: ['gardens-by-the-bay'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "The three towers of Marina Bay Sands overlooking the water of the bay, Singapore",
    immagine: '/images/singapore/marina-bay.jpg',
  },
  {
    slug: 'quartieri-etnici',
    paeseSlug: 'singapore',
    ordine: 2,
    nome: 'Chinatown, Little India and Kampong Glam',
    tipologia: ['cultura', 'gastronomia', 'città'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The three historic districts of the communities that made Singapore, each with its own temple or mosque, its own cuisine and its own rhythm. Here the city stops looking like a project.",
    percheAndarci:
      "Because they're what remains when you take away the skyline: two-story shophouses, workshops, working temples, and the hawker centers where you eat for three euros a cuisine that elsewhere would be restaurant fare.",
    cosaVedere: [
      "The Buddha Tooth Relic Temple and the Sri Mariamman, the oldest Hindu temple in the city, both in Chinatown",
      "Maxwell Food Centre and Chinatown Complex, the two historic hawker centers",
      "The Sri Veeramakaliamman temple and the fabric and spice streets of Little India",
      "Tekka Centre, the covered market of Little India",
      "The Sultan Mosque in Kampong Glam and the colorful houses of Haji Lane",
      "The Tiong Bahru district, with its 1930s rationalist architecture and its market",
    ],
    cosaFare: [
      "Lunch or dinner in a hawker center, the right way to eat in this city (see the dedicated experience page)",
      "Walk the three districts in sequence, which are a few metro stops from one another",
      "Breakfast with kaya toast and soft-boiled egg, which is the local morning ritual",
      "An evening on Haji Lane, among murals and small bars, which is the least institutional part of the city",
    ],
    doveDormire:
      "Chinatown and Bugis are the best areas for value: central, served by the metro and much cheaper than Marina Bay. Little India has the lowest prices of all.",
    doveMangiare:
      "Here you eat, and you eat in a hawker center. Hainanese chicken with rice cooked in the broth is the national dish; then Katong laksa with coconut milk, char kway teow, chilli crab (which costs a lot more and is eaten elsewhere, by the sea), roti prata and teh tarik in Little India, nasi padang in Kampong Glam. The rule: the longest line marks the best stall, and you get in line.",
    comeArrivare: "Metro: Chinatown, Little India and Bugis each have their own stop, a few stations apart.",
    comeSpostarsi: "On foot within each district, by MRT between them. They're all within three kilometers.",
    periodoMigliore:
      "all year. The special moments are Chinese New Year in Chinatown, Deepavali in Little India and Hari Raya in Kampong Glam, when the respective districts light up. At Chinese New Year, though, many family-run hawker stalls close for days.",
    costi:
      "almost nothing: the districts are walked, temples are free or nearly so, and a full meal in a hawker center is between 3 and 6 euros. It's the Singapore you can do on little money.",
    erroriDaEvitare: [
      "Eating in air-conditioned restaurants with a picture menu when fifty meters away there's a hawker center: you pay triple for a worse dish",
      "Going to Chinatown only for the souvenir street, which is the least interesting part of the district",
      "Forgetting the rules in temples: shoulders and knees covered, shoes off where indicated",
      "Walking around at midday: between eleven and three the heat is heavy, and it's also rush hour at the hawker centers",
    ],
    miaEsperienza:
      "This is the Singapore that changes the mind of those who think it's just a city of skyscrapers and rules. Hawker centers are the country's most successful civic invention: in the 1970s the government took street vendors off the streets for hygiene reasons. Instead of eliminating them it put them all under roofs with running water and licenses, and today you eat extraordinary food for three euros, seated at shared tables, in a place anyone can afford. To find your way the system is trivial and works: we always looked at which stall had the line and got in line. Walking between Chinatown, Little India and Kampong Glam in the same afternoon, I was struck by how little they resemble one another: the smells, the music, the language you hear on the street change, and they're two metro stops apart. The local detail to know: on the tables you find packets of tissues sitting alone. It's the \"chope,\" the way of reserving a seat, and it doesn't get moved.",
    esperienzeSlugs: ['hawker-centre'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "Trengganu Street in Chinatown, with shophouses and red lanterns, Singapore",
    immagine: '/images/singapore/quartieri-etnici.jpg',
  },
  {
    slug: 'natura-singapore',
    paeseSlug: 'singapore',
    ordine: 3,
    nome: 'Green Singapore',
    tipologia: ['natura', 'parchi', 'fauna selvatica'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      "The part almost nobody puts on the itinerary: a UNESCO World Heritage botanic garden, a primary forest reserve in the middle of the island, elevated trails among the treetops and a car-free island where you cycle among wooden houses.",
    percheAndarci:
      "Because it dismantles the idea that Singapore is just concrete: almost half of the territory is covered in green, the urban plan is literally called \"city in a garden,\" and twenty minutes by metro from the financial center there are monkeys and monitor lizards.",
    cosaVedere: [
      "The Singapore Botanic Gardens, a UNESCO World Heritage site, with the National Orchid Garden",
      "The Bukit Timah Nature Reserve, primary rainforest around the island's highest hill",
      "MacRitchie Reservoir with the TreeTop Walk, the suspension walkway above the forest",
      "The island of Pulau Ubin, ten minutes by boat, car-free, with the last wooden kampong houses",
      "The Southern Ridges, the route of pedestrian bridges among the southern hills, with Henderson Waves",
    ],
    cosaFare: [
      "Walk the MacRitchie trail to the TreeTop Walk, about 10 km round trip",
      "A day cycling on Pulau Ubin, with the Chek Jawa lagoon",
      "Botanic Gardens at opening, when it's full of locals running and doing tai chi",
      "Southern Ridges at sunset, walking on Henderson Waves",
    ],
    doveDormire: "None of these areas is a sensible base: you sleep in the center and get there by metro or a short ride.",
    doveMangiare:
      "No offerings inside the reserves, apart from a few kiosks: bring plenty of water, because the humid heat on the trails is serious. On Pulau Ubin there are a couple of seafood restaurants in the jetty village, simple and right that way.",
    comeArrivare:
      "The Botanic Gardens and MacRitchie have metro stops or are reachable in a few minutes' ride; for Pulau Ubin you go to Changi Point and take a bumboat, which leaves when it has twelve passengers on board.",
    comeSpostarsi: "On foot in the reserves, by bicycle on Pulau Ubin (rented at the jetty).",
    periodoMigliore:
      "all year, early in the morning. After ten o'clock the heat and humidity make the trails much heavier than the distance suggests.",
    costi: "all free, including the Botanic Gardens, MacRitchie and Pulau Ubin; only the National Orchid Garden has a ticket of a few dollars.",
    erroriDaEvitare: [
      "Underestimating the climate: ten kilometers at MacRitchie in this humidity count double, and along the route you can't buy water",
      "Approaching the macaques or eating in front of them: at MacRitchie and Bukit Timah they're used to humans and snatch bags",
      "Arriving at the TreeTop Walk too late: the walkway has closing hours and is walked in one direction only",
      "Treating Pulau Ubin as an optional outing: it's the place where you see what Singapore was like before 1965, and it no longer exists anywhere else",
    ],
    miaEsperienza:
      "This is the part of Singapore that overturns the idea you form before arriving. Twenty minutes by metro from the bay of skyscrapers there's a real rainforest, with macaques on the trails and monitor lizards crossing in front of you, and the MacRitchie TreeTop Walk is a suspension walkway above the treetops that nobody associates with this city. The Botanic Gardens early in the morning are the most beautiful and least touristy scene of all: locals running, groups of elderly people doing tai chi under the trees, families on the lawns. A park that's used, more than visited. The place that's worth more than any other, though, is Pulau Ubin: ten minutes on a wooden boat that leaves only when it has twelve passengers, and you land on a car-free island, with wooden houses on stilts, dirt trails and rental bikes. It's what Singapore was like before 1965, and it has remained only there. It works as a counterweight to everything else, and costs as much as the ferry.",
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "A path among tropical plants and palms in the Singapore Botanic Gardens",
    immagine: '/images/singapore/natura-singapore.jpg',
  },
  {
    slug: 'sentosa',
    paeseSlug: 'singapore',
    ordine: 4,
    nome: 'Sentosa and the South',
    tipologia: ['mare', 'famiglia', 'parchi'],
    giorniConsigliati: 'half a day or a full day with the parks',
    visitataPersonalmente: true,
    introduzione:
      "The island to the south, connected by a bridge, a monorail and a cable car: artificial beaches, theme parks, an aquarium and the southernmost point of continental Asia, a pedestrian walkway on a small islet, complete with a sign.",
    percheAndarci:
      "For the parks, if you're traveling with kids, and for the cable car over the harbor, which is the best way to see how big the maritime traffic passing through here is: Singapore is one of the busiest ports on the planet and from up there you count the ships at anchor by the dozens.",
    cosaVedere: [
      "Universal Studios Singapore and the S.E.A. Aquarium at Resorts World",
      "The beaches of Siloso, Palawan and Tanjong, artificial but well equipped",
      "The Mount Faber-Sentosa cable car, over the harbor",
      "Fort Siloso, the only preserved British coastal fortification, with the story of the fall of Singapore in 1942",
      "The southernmost point of continental Asia, on the islet connected by a suspension bridge at Palawan Beach",
    ],
    cosaFare: [
      "Cable car from Mount Faber, which is the right way to arrive",
      "A day at the parks, if there are kids or if it rains",
      "Walk the Southern Ridges to Mount Faber and then go down to Sentosa by cable car",
      "Fort Siloso, which is free and tells the part of history the island usually doesn't show",
    ],
    doveDormire: "Sentosa's hotels are expensive and isolated from the rest of the city: it only makes sense for those spending several days at the parks with kids.",
    doveMangiare:
      "The offerings on the island are all at theme park prices. The advice is to eat before or after, at VivoCity, the shopping mall where the monorail starts, which has a normal food court on the top floor.",
    comeArrivare:
      "Monorail from VivoCity (HarbourFront MRT stop), cable car from Mount Faber or on foot over the pedestrian bridge, which is free and takes ten minutes.",
    comeSpostarsi: "Free internal shuttles, monorail and lots of walking: the island is long and the points of interest are far apart.",
    periodoMigliore: "all year. On weekends and school holidays the island is very crowded with residents.",
    costi:
      "access to the island on foot is free, the monorail costs a few dollars; the real expense is the parks: Universal Studios and the aquarium have international theme park prices.",
    erroriDaEvitare: [
      "Expecting beaches: they're artificial, with imported sand, and in front there's the tanker anchorage. They have to be taken for what they are",
      "Paying for the monorail on the way in: the pedestrian bridge is free, covered and takes ten minutes",
      "Planning a full day if you're not going to the parks: half a day is more than enough",
      "Going on the weekend, when half of Singapore is there",
    ],
    miaEsperienza:
      "Sentosa is the stop on which it's worth being honest: it's an entertainment island, with artificial beaches of imported sand looking out on an anchorage full of waiting tankers. Those who go looking for the sea come back puzzled. With kids, or on a rainy day, the parks and the aquarium are excellent and justify everything. For everyone else, the two things that make the trip are others: the cable car from Mount Faber, which passes over the harbor and lets you see how many ships are at anchor (Singapore is one of the busiest ports in the world and from above you understand what that means), and Fort Siloso, free, with the cannons pointed toward the sea and the story of how the city fell into Japanese hands in 1942, from land, while the artillery was looking the wrong way. For those two things the half day is worth it.",
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: "A Sentosa cable car cabin above the island's forest, with the harbor in the background",
    immagine: '/images/singapore/sentosa.jpg',
  },
]
