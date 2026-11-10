import type { Destinazione } from '@/lib/types'

export const destinazioniSriLanka: Destinazione[] = [
  {
    slug: 'negombo',
    paeseSlug: 'sri-lanka',
    ordine: 1,
    nome: 'Negombo',
    tipologia: ['mare', 'arrivo'],
    giorniConsigliati: '1 day, round trip',
    visitataPersonalmente: true,
    introduzione: "The first and last stop of the trip, near Colombo airport, with its famous fish market at dawn.",
    percheAndarci: "It's the natural base for anyone arriving in or leaving from Colombo, and the early-morning fish market is a sight.",
    cosaVedere: ["The Negombo fish market at dawn"],
    cosaFare: [
      "Welcome or farewell dinner among Salt Restaurant, Tuk Tuk Wine & Dine and Jude Restaurant",
      "After-dinner drinks at Rodeo or the Sky Lounge",
      "Fish market early in the morning",
    ],
    doveDormire:
      "On the way in we slept at the Regal Réseau Hotel & Spa (4/5 on Tripadvisor, about 400 reviews): people like the rooftop with infinity pool, though some guests say the bar music carries to the rooms. On the way back at the Goldi Sands Hotel (4/5, over 1,700 reviews): a better-than-expected buffet breakfast and a convenient location, but some reviewers find the furnishings dated.\n\nBudget: Icebear Guesthouse, Ocean Beauty Guest House. Mid-range: Jetwing Sea, Jetwing Lagoon. Luxury (modest): Jetwing Blue, Sentido Heritance Negombo.",
    doveMangiare: "Jude Restaurant (good fish but slow service, about €12 a head); SeaJoy for a cheap lunch.",
    usciteSerali: "Rodeo, Sky Lounge, or a beach party, asking your guide and locals where there is one.",
    comeArrivare: "Transfer from Colombo airport, about 6,000 LKR per car.",
    comeSpostarsi: "Private van with driver.",
    periodoMigliore: 'November',
    costi: "Dinner about €12 a head; airport transfer 5,000-6,000 LKR.",
    erroriDaEvitare: [],
    miaEsperienza:
      "The Negombo fish market early in the morning was a genuine sight, a good way to get your bearings in the country right after arriving.",
    luoghi: [
      {
        "nome": "Negombo fish market",
        "testo": "On the beach the fishing boats unload at dawn and the fish is laid out to dry or sold straight away. A genuine show, a good way to get a feel for the country on arrival.",
        "come": "A few minutes from the centre, by tuk-tuk or on foot from the seafront hotels.",
        "quando": "Dawn or early morning.",
        "tempo": "1 hour",
        "consiglio": "Go early: by mid-morning the activity is nearly over."
      },
      {
        "nome": "St. Mary's Church",
        "testo": "Negombo is called \"Little Rome\" for its Catholic churches, a legacy of the Portuguese period. St. Mary's, finished in 1922 after almost fifty years of work, has a ceiling painted with scenes from the life of Christ by a local Buddhist artist, N.S. Godamanne.",
        "come": "On foot or by tuk-tuk from the centre.",
        "tempo": "30 minutes",
        "consiglio": "Cover shoulders and knees, as in all places of worship."
      },
      {
        "nome": "Seafront dinner",
        "testo": "Negombo is the ideal stop for a welcome or farewell dinner: Salt Restaurant, Tuk Tuk Wine & Dine and Jude Restaurant.",
        "tempo": "an evening",
        "costo": "Dinner about €12 per person (from the 2023 trip)",
        "consiglio": "Jude Restaurant: good fish but slow service."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Fish market at dawn",
          "St. Mary's Church",
          "Fish lunch at SeaJoy",
          "Welcome or farewell dinner by the sea"
        ]
      }
    ],
    zone: [
      {
        "nome": "Negombo seafront",
        "perChi": "arrival and departure",
        "testo": "Seafront hotels near Colombo airport. Convenient, but not much that is authentic beyond the fish market."
      }
    ],
    sapori: [
      {
        "nome": "Grilled fish",
        "testo": "Fish of the day in the seafront restaurants, such as Jude."
      },
      {
        "nome": "Rice and curry",
        "testo": "Rice with several curries of vegetables, fish or chicken: the basic Sri Lankan meal."
      },
      {
        "nome": "Kottu",
        "testo": "Roti cut into strips and stir-fried with vegetables and egg or meat, in street eateries."
      },
      {
        "nome": "Hoppers",
        "testo": "Small bowls of rice-and-coconut batter, with an egg in the middle: breakfast or dinner."
      }
    ],
    attenzioni: [
      "The ETA electronic visa is compulsory: apply online on the official site eta.gov.lk. It is free for Italian passports from 25 May 2026 (30 days, double entry), but conditions change: check before leaving.",
      "The local SIM (Dialog or SLT-Mobitel) can be bought at the airport desks: compare the offers before choosing.",
      "Agree the price of the tuk-tuk or transfer before getting in.",
      "In places of worship cover shoulders and knees: bring a sarong or long trousers."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "Colorful fishing boats on the beach at Negombo, Sri Lanka",
    immagine: '/images/sri-lanka/negombo-stock.jpg',
  },
  {
    slug: 'anuradhapura',
    paeseSlug: 'sri-lanka',
    ordine: 2,
    nome: 'Anuradhapura',
    tipologia: ['storia', 'religione'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: "The first of the \"sacred cities\" of the Sinhalese cultural triangle: immense dagobas, sacred trees and ruins with over two thousand years of Buddhist history.",
    percheAndarci: "To understand the roots of Buddhism in Sri Lanka, standing before the Sri Maha Bodhi, a direct descendant of the tree under which the Buddha reached enlightenment.",
    cosaVedere: ["The dagobas of the archaeological site", "The Sri Maha Bodhi, the sacred tree"],
    cosaFare: ["Guided visit of the archaeological site (about 3h) by bicycle, with Anil or with Lalith"],
    doveDormire:
      "We slept at the Miridiya Lake Resort: average rating 3/5 on Tripadvisor (about 400 reviews), but under the new management it seems to have improved a lot (entrance, food, rooms). The view of Nuwara Wewa lake is much liked; some complain about showers and humidity in the bathrooms.\n\nBudget: Saubagya Inn, Why Not Palace. Mid-range: Kings Town Hotel, Monaara Leisure. Luxury: Ulagalla by Uga Escapes, Divulgaha Gedara Boutique Hotel.",
    doveMangiare: "Hotel buffet (about 2,200 LKR plus drinks).",
    comeArrivare: "About 5h by van from Negombo.",
    comeSpostarsi: "By bicycle with the guide, inside the site.",
    periodoMigliore: 'the afternoon, after arriving',
    costi: "Guide about 6,500 LKR (€19) plus tip.",
    erroriDaEvitare: [],
    miaEsperienza:
      "The immense dagobas of Anuradhapura immediately give you the measure of the island's Buddhist history. It was a good first contact with the cultural triangle, before the better-known stops like Sigiriya.",
    luoghi: [
      {
        "nome": "Sri Maha Bodhi",
        "testo": "The sacred tree, a direct descendant of the one under which the Buddha reached enlightenment, planted in the 3rd century BC. For the faithful it is the most venerated place in the city.",
        "come": "Inside the archaeological site, by bicycle or on foot. You enter barefoot and without a hat, with shoulders and legs covered; pilgrims dress in white.",
        "quando": "Morning or late afternoon; on full-moon (poya) days it is packed with pilgrims.",
        "tempo": "1 hour"
      },
      {
        "nome": "The dagobas of the archaeological site",
        "testo": "The immense white domes, like the Ruwanwelisaya emerging from the forest, give the measure of the island's Buddhist history.",
        "come": "Guided visit by bicycle, about 3 hours.",
        "quando": "Ticket office open 7 am to 5 pm. Afternoon, after arrival; better to avoid midday because of the heat.",
        "tempo": "3 hours",
        "costo": "Site ticket for foreigners about 30 USD (March 2026), paid in rupees; guide about 6,500 LKR (€19) plus tip (from the 2023 trip)",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "With a guide the places make sense: without one, they are heaps of stone."
      },
      {
        "nome": "Nuwara Wewa lake",
        "testo": "The large artificial lake beside the new town, lovely at sunset. Several hotels overlook it, including the Miridiya Lake Resort.",
        "quando": "Sunset.",
        "tempo": "1 hour"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Arrival from Negombo (about 5 hours by van)",
          "Afternoon: Sri Maha Bodhi and the dagobas by bicycle with a guide",
          "Sunset on Nuwara Wewa lake",
          "Buffet dinner at the hotel"
        ]
      }
    ],
    zone: [
      {
        "nome": "New town and lake",
        "perChi": "those who want a comfortable hotel",
        "testo": "Hotels and guesthouses overlooking the lake, a few minutes from the sites by tuk-tuk. The most practical area."
      },
      {
        "nome": "Out of town",
        "perChi": "those after luxury and quiet",
        "testo": "Country villas and resorts, farther from the sites; transfers needed."
      }
    ],
    sapori: [
      {
        "nome": "Hotel buffet",
        "testo": "Vegetable curry, rice and fish, about 2,200 LKR per person plus drinks at the Miridiya (2023)."
      },
      {
        "nome": "Rice and curry",
        "testo": "The island's basic meal, in the town eateries."
      },
      {
        "nome": "String hoppers",
        "testo": "Steamed rice-noodle nests, served with curry and coconut sambol at breakfast."
      },
      {
        "nome": "Curd and treacle",
        "testo": "Buffalo-milk curd with kithul palm syrup: a typical dessert."
      }
    ],
    attenzioni: [
      "In sacred places you enter barefoot, covered and in light clothing: bring socks or accept the hot sand at midday.",
      "Never pose for a photo in front of a Buddha statue: it is considered disrespectful, and disrespecting Buddhist images is an offence.",
      "Full-moon (poya) days are holidays and alcohol is usually not available: the site is packed.",
      "The afternoon heat is strong: bring water and a hat."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "The white dome of the Ruwanwelisaya emerging from the forest under a rainy sky, Anuradhapura",
    immagine: '/images/sri-lanka/anuradhapura-ruwanwelisaya-foresta-riccardo.jpg',
  },
  {
    slug: 'dambulla-sigiriya',
    paeseSlug: 'sri-lanka',
    ordine: 3,
    nome: 'Dambulla and Sigiriya',
    tipologia: ['storia', 'trekking', 'natura'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione: "The heart of the cultural triangle: Mihintale, the safari at Minneriya, sunset from Pidurangala Rock, Sigiriya's Lion Rock and the Golden Temple carved into the rock.",
    percheAndarci: "More powerful moments are packed in here than in any other stop of the trip: history, nature and hiking in two intense days.",
    cosaVedere: [
      "Mihintale, where according to tradition Buddhism first arrived in Sri Lanka",
      "Sigiriya, Lion Rock, with the foundations of the 5th-century royal palace and the frescoes of the celestial maidens",
      "The Golden Temple of Dambulla, five caves carved into the rock",
      "The view of Sigiriya from Pidurangala Rock",
    ],
    cosaFare: [
      "Safari at Minneriya among the elephants (there is a dedicated experience page)",
      "Sunset hike up Pidurangala Rock (30-minute climb)",
      "Hike up Sigiriya (1h30-2h climb; there is a dedicated experience page)",
      "Visit to the Golden Temple of Dambulla",
      "The Dambulla Wholesale Market: Dambulla is one of the main vegetable distribution hubs in the country",
    ],
    doveDormire:
      "We slept at the Tropical Life Resort, on paper the best of the trip's nine hotels: no. 1 among the specialty properties in Dambulla, 4/5 on Tripadvisor. Clean, well-equipped rooms, a generous buffet, all set in greenery. A few reviews mention there is no WiFi in the room.\n\nBudget: Relax Guesthouse, Lake Island Homestay. Mid-range: Lake Lodge Boutique Hotel, Kalundewa Retreat. Luxury: Heritance Kandalama (the famous hotel designed by Geoffrey Bawa), Aliya Resort & Spa.",
    doveMangiare: "Mom's Kitchen and Golden Palace, between Dambulla and Sigiriya.",
    comeArrivare: "From Anuradhapura it is about a 1.5-hour transfer, passing through Mihintale and the safari. From Kandy it takes about 2 hours by car. From Colombo airport (CMB) it is about 4 hours by car with a driver, the most common option; buses to Dambulla leave from Colombo and Kandy, slower but cheap. Dambulla and Sigiriya are about half an hour apart.",
    comeSpostarsi: "Private van; on foot for the hikes.",
    periodoMigliore: 'early morning for Sigiriya, to avoid the heat',
    costi: "Mihintale 1,000 LKR (about €3, 2026; in 2023 it was 500 LKR plus 50 for a sarong); safari at Minneriya about 12,000 LKR per jeep plus entrance (2023); Sigiriya about 35 USD (about €30, 2026); Golden Temple about 3,000 LKR (about €9, 2026); Pidurangala 1,000 LKR. Rough daily budget per person: low €30-40 (guesthouse in Sigiriya, rice and curry, tuk-tuks), mid €70-120 (hotel with pool, driver, one safari), high from €200 (Heritance Kandalama or a luxury resort, private guide).",
    erroriDaEvitare: ["Starting late for Sigiriya: it's better to move early to avoid the worst heat during the climb"],
    miaEsperienza:
      "Sunset from Pidurangala Rock, with Sigiriya Rock in front of you, is one of the most beautiful views of the whole trip. Maybe I liked it more than the climb up Sigiriya, which everyone does in a rush without stopping here.",
    luoghi: [
      {
        "nome": "Sigiriya, the Lion Rock",
        "testo": "A rock about 180 metres high topped by the foundations of King Kashyapa's palace (477-495), a UNESCO World Heritage Site since 1982. On the way up you pass the frescoes of the celestial maidens, the mirror wall covered in 9th-10th-century poetic graffiti, and the two lion's paws that frame the last staircase.",
        "come": "From the ticket office you climb on foot (1.5-2 hours up on the 2023 trip); by van from Dambulla.",
        "quando": "Ticket office open 7 am to 5 pm: arrive at opening time to avoid the worst heat and queues.",
        "tempo": "3-4 hours",
        "costo": "About 35 USD (about €30) for foreigners (March 2026), paid in rupees at the day's rate; includes the museum. You can also buy online.",
        "orari": "Ticket office daily 7 am to 5 pm (2026).",
        "lat": 7.95694,
        "lng": 80.75972,
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "consiglio": "Move early: by mid-morning the climb is hard and crowded."
      },
      {
        "nome": "Pidurangala Rock",
        "testo": "The sunset from Pidurangala, with Sigiriya Rock in front, is one of the best views of the trip. I may have liked it more than the Sigiriya climb, which everyone does in a rush without stopping here.",
        "come": "A climb on foot, with a final stretch of rock (about 30 minutes on the 2023 trip).",
        "quando": "Sunset.",
        "tempo": "2 hours",
        "costo": "Entry 1,000 LKR, about €3 (from the 2023 trip, unchanged in 2026)",
        "lat": 7.96562,
        "lng": 80.76185,
        "consiglio": "Bring a torch for the descent once the sun has set."
      },
      {
        "nome": "Dambulla Golden Temple",
        "testo": "Five caves carved into the rock with 153 Buddha statues and about 2,100 square metres of paintings on walls and ceilings. It has been a UNESCO World Heritage Site since 1991. The largest cave is the most striking: the statues stand in a row under a fully painted ceiling.",
        "come": "From Sigiriya by van; you climb a staircase and enter barefoot, with shoulders and knees covered.",
        "quando": "Morning or late afternoon.",
        "tempo": "1.5 hours",
        "costo": "About 3,000 LKR (about €9) for foreigners (2026)",
        "orari": "Ticket office until 5 pm, temple open until 7 pm (2023 trip).",
        "lat": 7.85667,
        "lng": 80.64917
      },
      {
        "nome": "Minneriya safari",
        "testo": "A jeep safari among the elephants in Minneriya park, which wraps around the reservoir built by King Mahasen in the 3rd century. In the dry season, as the water recedes, the elephants come down to the shores in herds to graze on the fresh grass.",
        "come": "By jeep with a driver-guide from the Sigiriya area.",
        "quando": "Afternoon; the time with the most elephants together (the \"gathering\") is usually July to October, peaking in August and September.",
        "tempo": "3-4 hours",
        "costo": "About 12,000 LKR per jeep plus entry (from the 2023 trip); park entry about 25 USD per foreign adult, plus taxes, service charge and vehicle (2026)",
        "lat": 7.97889,
        "lng": 80.84889
      },
      {
        "nome": "Mihintale",
        "testo": "The hill where, according to tradition, Buddhism first arrived in Sri Lanka. According to tradition, this is where the monk Mahinda met King Devanampiya Tissa. A staircase of 1,840 granite steps leads to the temples and the great stupa at the top.",
        "come": "About 12 km east of Anuradhapura, by van. You climb on foot; temples are entered barefoot.",
        "quando": "Morning, before the heat.",
        "tempo": "1.5 hours",
        "costo": "Entry 1,000 LKR for foreigners (2026); in 2023 it was 500 LKR plus 50 LKR for a sarong",
        "lat": 8.35059,
        "lng": 80.51694
      },
      {
        "nome": "Kaudulla National Park",
        "testo": "The park next to Minneriya, joined to it by the same elephant corridor: when the water drops in one park, the herds move to the other, around Kaudulla lake. It is visited by jeep, like Minneriya.",
        "come": "By jeep with a driver-guide from the Sigiriya and Habarana area; the park is chosen the same morning, depending on where the elephants are.",
        "quando": "Afternoon.",
        "tempo": "3-4 hours",
        "lat": 8.16111,
        "lng": 80.905
      },
      {
        "nome": "Dambulla wholesale market",
        "testo": "Sri Lanka's largest wholesale fruit and vegetable market: loaded lorries, mountains of produce and loud haggling. Between the stalls you can try street food.",
        "come": "On Dambulla's main road, a few minutes from the Golden Temple.",
        "quando": "Morning, when the lorries arrive.",
        "tempo": "45 minutes",
        "lat": 7.86604,
        "lng": 80.65173
      },
      {
        "nome": "Kandalama Lake",
        "testo": "The reservoir east of Dambulla, ringed by forest, where Geoffrey Bawa built the Heritance Kandalama, wedged into the rock and covered in greenery. At sunset the light on the water and the hills is beautiful.",
        "come": "By tuk-tuk or car from Dambulla, about 20 minutes.",
        "quando": "Sunset.",
        "tempo": "1-2 hours",
        "lat": 7.87502,
        "lng": 80.70501
      },
      {
        "nome": "Ibbankatuwa Megalithic Tombs",
        "testo": "A prehistoric burial ground from about 2,700 years ago, a few kilometres from the Golden Temple: cist graves made of stone slabs, where urns, beads and metal objects were found.",
        "come": "By tuk-tuk or car, just south of Dambulla on the Kandy road.",
        "tempo": "30-45 minutes",
        "lat": 7.83725,
        "lng": 80.62989
      },
      {
        "nome": "Nalanda Gedige",
        "testo": "A stone temple about a thousand years old that blends Hindu and Buddhist styles, taken apart and rebuilt piece by piece to save it from a reservoir. Tradition places it at the geographic centre of the island.",
        "come": "On the road between Dambulla and Kandy, about 25 km south of Dambulla: stop on the way.",
        "tempo": "30-45 minutes",
        "lat": 7.66972,
        "lng": 80.64556
      },
      {
        "nome": "Popham's Arboretum",
        "testo": "A dry-zone forest arboretum started in the 1960s by an English planter, Sam Popham. Guided woodland trails among ebony and satinwood: an hour of silence a few minutes from Dambulla.",
        "come": "By tuk-tuk from Dambulla, on the road to Kandalama.",
        "quando": "Early morning or late afternoon, when it is cooler.",
        "tempo": "1-2 hours",
        "lat": 7.86081,
        "lng": 80.67586
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Early morning: Sigiriya",
          "Lunch and the Golden Temple of Dambulla",
          "Afternoon: Pidurangala for sunset"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Mihintale, Minneriya safari, sunset at Pidurangala",
          "Day 2: Sigiriya at opening, then Golden Temple and Dambulla market"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Mihintale in the morning, safari at Minneriya or Kaudulla in the afternoon",
          "Day 2: Sigiriya at opening time, Golden Temple and Dambulla market, sunset at Pidurangala",
          "Day 3: day trip to Polonnaruwa by bike, back via Kandalama lake"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dambulla",
        "perChi": "convenient base",
        "testo": "Hotels set in greenery, half an hour from the sites. Tropical Life Resort was the best of the trip's nine hotels.",
        "fascia": "€30-90"
      },
      {
        "nome": "Sigiriya",
        "perChi": "near the rock",
        "testo": "Guesthouses and hotels near the ticket office, convenient for a dawn climb. Fewer restaurants.",
        "fascia": "€25-80"
      },
      {
        "nome": "Kandalama lake",
        "perChi": "luxury and architecture",
        "testo": "The Heritance Kandalama, designed by Geoffrey Bawa, is the most famous and among the priciest.",
        "fascia": "€120-250"
      },
      {
        "nome": "Habarana",
        "perChi": "safaris and Polonnaruwa",
        "testo": "A crossroads north-east of Sigiriya, close to the Minneriya and Kaudulla entrances and on the road to Polonnaruwa. Many resorts with pools, little to do in the evening.",
        "fascia": "€40-150"
      }
    ],
    sapori: [
      {
        "nome": "Rice and curry",
        "testo": "Rice with vegetable curries, dal and fish, at Mom's Kitchen and Golden Palace."
      },
      {
        "nome": "Kottu",
        "testo": "Roti strips stir-fried with vegetables and egg, in street eateries."
      },
      {
        "nome": "Dambulla fruit",
        "testo": "Dambulla is one of the country's main vegetable distribution hubs: at the wholesale market you see loaded lorries and mountains of local produce."
      },
      {
        "nome": "Tea and sweets",
        "testo": "Milk tea and coconut-and-treacle sweets in roadside cafés."
      }
    ],
    attenzioni: [
      "Sigiriya ticket: pay only at the official ticket office. People who stop tourists on the road offering \"shortcuts\" or discounted tickets are touts.",
      "Monkeys: keep no food in sight and do not stare them in the eye.",
      "Sigiriya: leave early to avoid the worst heat on the climb.",
      "Sarong and covered shoulders for Mihintale and the Golden Temple."
    ],
    gite: [
      {
        "nome": "Polonnaruwa",
        "distanza": "about 1h10 from Sigiriya",
        "come": "By car with a driver; the site is explored by bike, hired on the spot for about 1,000 LKR (2023).",
        "testo": "The island's second medieval capital, a UNESCO site: temples, palaces and the great Buddha statues of the Gal Vihara. It takes two and a half to three hours, lighter and more straightforward than Sigiriya."
      },
      {
        "nome": "Ritigala",
        "distanza": "about 40 km",
        "come": "By car with a driver; visited on foot, along paved paths in the woods.",
        "testo": "The ruins of a hermit monastery in the forest, on the slopes of the highest mountain in the northern plain: stone paths, platforms and pools, with almost no tourists."
      },
      {
        "nome": "Avukana Buddha",
        "distanza": "about 40 km",
        "come": "By car with a driver, past the Kala Wewa reservoir.",
        "testo": "A standing Buddha about 12 metres tall, carved from the rock in the 5th century beside the great Kala Wewa reservoir. It is among the best-preserved ancient statues on the island."
      }
    ],
    faq: [
      {
        "domanda": "Sigiriya or Pidurangala?",
        "risposta": "Sigiriya has the frescoes, the history and the palace foundations; Pidurangala costs much less and gives you the view of Lion Rock. If you have time, do both: Sigiriya at opening, Pidurangala at sunset."
      },
      {
        "domanda": "How much does Sigiriya cost?",
        "risposta": "About 35 USD for foreigners (March 2026), paid in rupees at the day's rate, museum included. Tickets are sold at the official ticket office or online on the Central Cultural Fund portal."
      },
      {
        "domanda": "Is it better to stay in Dambulla or Sigiriya?",
        "risposta": "Sigiriya is handier for the dawn climb; Dambulla has more hotels and restaurants and is close to the Golden Temple. They are about half an hour apart."
      },
      {
        "domanda": "How many days do you need?",
        "risposta": "Two full days cover Sigiriya, Pidurangala, the Golden Temple and a safari. A third adds Polonnaruwa or Mihintale."
      },
      {
        "domanda": "Minneriya or Kaudulla for elephants?",
        "risposta": "It depends on the season: the herds move between the two parks following the water. The famous gathering is at Minneriya, usually from July to October; the park is chosen the same morning based on where the elephants are."
      },
      {
        "domanda": "What should you wear at the Golden Temple?",
        "risposta": "Shoulders and knees covered, and you go in barefoot, leaving your shoes at the deposit. A sarong or long trousers do the job."
      }
    ],
    esperienzeSlugs: ['safari-minneriya', 'trekking-sigiriya'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "Sigiriya rock emerging blue from the jungle at dusk, seen from Pidurangala",
    immagine: '/images/sri-lanka/sigiriya-crepuscolo-riccardo.jpg',
  },
  {
    slug: 'polonnaruwa',
    paeseSlug: 'sri-lanka',
    ordine: 4,
    nome: 'Polonnaruwa',
    tipologia: ['storia'],
    giorniConsigliati: 'half a day',
    visitataPersonalmente: true,
    introduzione: "The second medieval capital of Sri Lanka, which we toured by bicycle among temples and Buddha statues.",
    percheAndarci: "It's lighter and more immediate than Sigiriya, with just as much history.",
    cosaVedere: ["The temples and Buddha statues of the medieval city"],
    cosaFare: ["Tour of the temples by rented bicycle (1,000 LKR)", "Lunch at Priyamali gedara, with a view of the rice paddies"],
    doveDormire: "I didn't sleep there: it was a half-day trip from Dambulla.",
    doveMangiare: "Priyamali gedara, a country restaurant with a view of the rice paddies: very good.",
    comeArrivare: "About 1h10 transfer from Sigiriya.",
    comeSpostarsi: "By rented bicycle, inside the site.",
    periodoMigliore: 'morning or afternoon',
    costi: "Bicycle 1,000 LKR (about €2.50); guide (Indu) 6,000 LKR plus tip.",
    erroriDaEvitare: [],
    miaEsperienza:
      "Touring Polonnaruwa by bicycle was a nice change of pace after the climb up Sigiriya the day before. Lunch at Priyamali gedara, with a view of the rice paddies, was one of the best of the trip.",
    luoghi: [
      {
        "nome": "Gal Vihara",
        "testo": "Four Buddha images carved into a single granite wall in the 12th century, including a standing figure and a reclining Buddha about 14 metres long.",
        "come": "In the archaeological site, by bicycle; you leave your shoes at the entrance.",
        "quando": "Morning or afternoon, in low light.",
        "tempo": "30 minutes"
      },
      {
        "nome": "Vatadage and the Quadrangle",
        "testo": "The Vatadage is a circular temple built perhaps for the tooth relic, perhaps for the Buddha's alms bowl: historians disagree. It has stairways and a carved moonstone at the north entrance. The Quadrangle gathers the finest temples of the medieval city in one enclosure.",
        "come": "You cycle between the ruins and visit the Quadrangle temples on foot.",
        "tempo": "1 hour"
      },
      {
        "nome": "Bicycle ride among the temples",
        "testo": "Cycling Polonnaruwa was a nice change of pace after the Sigiriya climb the day before. The site is lighter and more immediate than Sigiriya, with as much history.",
        "come": "Bicycle hire at the site entrance, with or without a guide.",
        "quando": "Ticket office open 7 am to 5 pm. Morning or afternoon; avoid midday.",
        "tempo": "half a day",
        "url": "https://eservices.ccf.gov.lk/eticketing/landing",
        "costo": "Site ticket for foreigners about 30 USD (March 2026); bicycle 1,000 LKR (about €2.50); guide 6,000 LKR plus tip (from the 2023 trip)",
        "consiglio": "Lunch at Priyamali gedara, a country restaurant overlooking the rice paddies: very good."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "From Sigiriya to Polonnaruwa (about 1 hour 10)",
          "Bicycle ride: Quadrangle, Vatadage, Gal Vihara",
          "Lunch at Priyamali gedara",
          "Return to Dambulla"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dambulla or Sigiriya",
        "perChi": "day trip",
        "testo": "Polonnaruwa is visited in half a day from Dambulla or Sigiriya, without staying overnight."
      },
      {
        "nome": "New Polonnaruwa",
        "perChi": "those who want to stay close",
        "testo": "Guesthouses and small hotels near the lake and the site; little nightlife."
      }
    ],
    sapori: [
      {
        "nome": "Country rice and curry",
        "testo": "The Priyamali gedara lunch, overlooking the paddies."
      },
      {
        "nome": "Fruit and tea",
        "testo": "Bananas, papaya and milk tea along the site roads."
      },
      {
        "nome": "Kottu",
        "testo": "Stir-fried roti with vegetables in the eateries of new Polonnaruwa."
      }
    ],
    attenzioni: [
      "In the temples you enter barefoot, without shoes or hat: stone in the sun burns, so visit in the morning or late in the day.",
      "The site ticket is bought only at the official ticket office: be wary of anyone offering guides or tickets on the street.",
      "Beware of monkeys: do not offer food.",
      "Midday heat is strong: bring water and a hat."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "The profile of a stone Buddha marked by cracks against the cloudy sky of Polonnaruwa",
    immagine: '/images/sri-lanka/polonnaruwa-buddha-profilo-riccardo.jpg',
  },
  {
    slug: 'kandy',
    paeseSlug: 'sri-lanka',
    ordine: 5,
    nome: 'Kandy',
    tipologia: ['cultura', 'religione'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: "The Temple of the Tooth with its evening ceremony, the fish market where we found the best souvenirs and the lake in the city.",
    percheAndarci: "For the evening ceremony at the Temple of the Tooth, one of the most spiritual and heartfelt moments of the trip.",
    cosaVedere: ["The Temple of the Tooth", "The Bahiravokanda Buddha statue", "The lake in the city"],
    cosaFare: [
      "The Ranweli Spice Garden, with a visit to the spice plantation",
      "The Kandy Fish Market, the best place of the trip for souvenirs (spices, textiles)",
      "The evening ceremony at the Temple of the Tooth (there is a dedicated experience page)",
    ],
    doveDormire:
      "We slept at the Rivendell Hotel: 4/5 on Tripadvisor, but with mixed opinions. Those who like it talk about a quiet location outside the center and the view of the hills; others find it pricey for what it offers, and early in the morning you hear the noise of a nearby temple.\n\nBudget: 256 Townhouse Rest, Sharon Inn Kandy. Mid-range: Hotel Suisse, OZO Kandy. Luxury: Earl's Regency, The Grand Kandyan.",
    doveMangiare: "The Ranweli Spice Garden for lunch; a South Indian restaurant we found on the spot, cheap and excellent (with a bit of confusion over the orders).",
    comeArrivare: "From Dambulla it is about 2 hours by car, with the stop at the Ranweli Spice Garden made on the 2023 trip. From Colombo airport (CMB) it takes about 3 hours by car with a driver. The train from Colombo Fort takes about 2.5-3 hours and already climbs into the hills. Kandy is also where the hill-country trains to Nanu Oya and Ella leave from: reserved seats are booked in advance on the Sri Lanka Railways portal.",
    comeSpostarsi: "On foot in the center.",
    periodoMigliore: 'late afternoon or evening, to arrive in time for the Temple of the Tooth ceremony',
    costi: "Entrance to the Temple of the Tooth 2,000 LKR in 2023, 3,000 LKR (about €9) in 2026. Rough daily budget per person: low €25-35 (guesthouse, rice and curry, buses and tuk-tuks), mid €60-100 (hotel in the hills, restaurants, driver), high from €180 (luxury hotel and private guide).",
    erroriDaEvitare: ["Arriving at the Temple of the Tooth at the last minute: the line already forms in the late afternoon, so show up well ahead"],
    miaEsperienza:
      "The evening ceremony at the Temple of the Tooth, with the drums starting just before the light fades, was one of the most intense and spiritual moments of the whole trip.",
    luoghi: [
      {
        "nome": "Temple of the Tooth",
        "testo": "It houses the relic of the Buddha's tooth and is one of Buddhism's most sacred places, a UNESCO site together with the city of Kandy. The evening ceremony, with the drums starting just before the light fades, was one of the most intense and spiritual moments of the trip.",
        "come": "On foot from the centre, by the lake. You enter barefoot with shoulders and knees covered; the relic is enclosed in seven golden caskets in the chamber called Handun Kunama. Shorts and sleeveless tops are not allowed; suitable clothing is available at the entrance.",
        "quando": "Open daily 5:30 am to 8 pm. Ceremonies are at 5:30 am, 9:30 am and 6:30 pm: for the evening one the queue forms already in the late afternoon.",
        "tempo": "2 hours",
        "costo": "3,000 LKR (about €9) for foreigners (2026, official site), including the complex's museums; in 2023 it was 2,000 LKR. Only tickets from the temple's machines are valid.",
        "orari": "Daily 5:30 am to 8 pm; ceremonies at 5:30 am, 9:30 am and 6:30 pm (official site, 2026).",
        "lat": 7.2936,
        "lng": 80.6414,
        "url": "https://sridaladamaligawa.lk/",
        "consiglio": "Arrive well ahead: arriving at the last moment means staying at the back of the queue."
      },
      {
        "nome": "Royal Botanic Gardens, Peradeniya",
        "testo": "Sri Lanka's largest botanic garden, about 60 hectares in a bend of the Mahaweli river, a few kilometres from the centre. Once a royal garden, it was reshaped by the British in the 19th century: today it has the avenue of royal palms, the orchid house and a huge Java fig that covers a whole lawn on its own.",
        "come": "By tuk-tuk or bus from central Kandy, about 20 minutes. You walk around: the avenues are shaded, but the garden is big.",
        "quando": "Morning, before the heat; at weekends many local families come.",
        "tempo": "2-3 hours",
        "orari": "Daily 7:30 am to 6 pm (official site, 2026).",
        "lat": 7.27111,
        "lng": 80.59556,
        "url": "https://en.botanicgardens.gov.lk/"
      },
      {
        "nome": "Bahirawakanda Buddha and the lake",
        "testo": "A large Buddha statue on a hill above the city, with a view over Kandy and the artificial lake at its centre.",
        "come": "By tuk-tuk from the centre, a few minutes.",
        "quando": "Sunset.",
        "tempo": "1 hour",
        "lat": 7.29558,
        "lng": 80.6309
      },
      {
        "nome": "Kandyan dance show",
        "testo": "The show of Kandy's traditional dances, with drums, costumes and fire-walking at the end. It is staged for tourists, but it lasts about an hour and fits nicely before the evening ceremony at the Temple of the Tooth.",
        "come": "At the Kandyan Art Association, on the north side of the lake, a few minutes' walk from the temple. Tickets at the door.",
        "quando": "Late afternoon, before the evening ceremony.",
        "tempo": "1 hour",
        "lat": 7.29204,
        "lng": 80.64241
      },
      {
        "nome": "Kandy National Museum",
        "testo": "In the old queens' palace next to the Temple of the Tooth, it holds objects from the Kandyan kingdom: weapons, jewellery, tools and documents up to the arrival of the British in 1815.",
        "come": "On foot, within the temple complex.",
        "tempo": "45 minutes",
        "lat": 7.29472,
        "lng": 80.64083
      },
      {
        "nome": "Natha Devale and Vishnu Devale",
        "testo": "Next to the Temple of the Tooth stand the shrines of the city's guardian deities: the 14th-century Natha Devale is one of the oldest buildings in Kandy. Buddhism and cults of Hindu origin share the same courtyard, and this is where the Esala Perahera procession sets off.",
        "come": "On foot, leaving the Temple of the Tooth northwards. Shoes off.",
        "tempo": "30 minutes",
        "lat": 7.2942,
        "lng": 80.6405
      },
      {
        "nome": "Kandy fish market",
        "testo": "The best place of the trip for souvenirs: spices, fabrics and local products, at lower prices than in the tourist shops.",
        "come": "In the centre, on foot.",
        "quando": "Morning or late afternoon.",
        "tempo": "1 hour"
      },
      {
        "nome": "Udawattakele Forest Reserve",
        "testo": "The forest behind the Temple of the Tooth, once reserved for the kings of Kandy. Woodland trails, monkeys, plenty of birds and a pond, a few minutes' walk from the centre: the right place for a break from the traffic.",
        "come": "On foot from the temple, climbing behind the complex; the ticket is paid at the gate.",
        "quando": "Early morning, for the cool air and the birds.",
        "tempo": "1-2 hours",
        "lat": 7.29944,
        "lng": 80.63889,
        "consiglio": "Keep food out of sight: the monkeys are used to visitors."
      },
      {
        "nome": "Ceylon Tea Museum",
        "testo": "In an old 1925 tea factory in the Hantana hills, it tells the story of Ceylon tea with the original machinery. On the top floor there is a tea room looking over the hills.",
        "come": "By tuk-tuk from the centre, about 15-20 minutes up the Hantana road.",
        "tempo": "1.5 hours",
        "lat": 7.26861,
        "lng": 80.63266
      },
      {
        "nome": "British Garrison Cemetery",
        "testo": "A small colonial cemetery behind the Temple of the Tooth, with the graves of Britons who died in Kandy in the 19th century, many of them very young. The headstones tell the story of colonial life; it is a quiet, little-visited corner.",
        "come": "On foot, uphill from the road behind the temple. Donation to the caretaker.",
        "tempo": "30 minutes",
        "lat": 7.2928,
        "lng": 80.6432
      },
      {
        "nome": "Lankatilaka Temple",
        "testo": "A 14th-century temple on a rocky outcrop west of Kandy, with a Buddhist shrine and one for Hindu deities under the same roof. It is the most striking of the three western temples, together with Gadaladeniya and Embekke.",
        "come": "By tuk-tuk or car from Kandy, about half an hour; the three temples are close together and fit into one morning.",
        "quando": "Morning.",
        "tempo": "45 minutes",
        "lat": 7.23384,
        "lng": 80.56503
      },
      {
        "nome": "Gadaladeniya Temple",
        "testo": "A 14th-century stone temple built with the help of South Indian architects: its Dravidian style sets it apart from almost every other temple on the island.",
        "come": "By tuk-tuk or car from Kandy, on the western temples loop.",
        "tempo": "30 minutes",
        "lat": 7.25731,
        "lng": 80.55608
      },
      {
        "nome": "Embekke Devalaya",
        "testo": "Famous for the wooden pillars of its drumming hall, carved with dancers, soldiers, double-headed eagles and animals: one of the masterpieces of Kandyan woodcarving.",
        "come": "By tuk-tuk or car from Kandy, on the western temples loop.",
        "tempo": "30 minutes",
        "lat": 7.21792,
        "lng": 80.56772
      },
      {
        "nome": "Ranweli Spice Garden",
        "testo": "A visit to a spice plantation with lunch, on the road from Dambulla to Kandy.",
        "come": "A stop on the transfer from Dambulla, about 2 hours by van.",
        "tempo": "1.5 hours"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Arrival from Dambulla with a stop at Ranweli Spice Garden",
          "Afternoon: fish market and the lake",
          "Late afternoon: Temple of the Tooth, arriving early",
          "Evening ceremony"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: market and lake, Kandyan dance show in the late afternoon, evening ceremony at the Temple of the Tooth",
          "Day 2: Peradeniya botanic gardens in the morning, Ceylon Tea Museum, sunset at the Bahirawakanda Buddha"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Temple of the Tooth with the 9:30 am ceremony, national museum and devales, evening ceremony",
          "Day 2: Peradeniya and the Gadaladeniya, Lankatilaka and Embekke temples",
          "Day 3: Udawattakele in the morning, Ceylon Tea Museum, Kandyan dances and Bahirawakanda at sunset (or the trip to Ambuluwawa)"
        ]
      }
    ],
    zone: [
      {
        "nome": "Outside the centre",
        "perChi": "quiet",
        "testo": "Hotels on the hills such as the Rivendell, with views, but far from the temple. You sleep better, though a nearby temple is audible early in the morning.",
        "fascia": "€40-100"
      },
      {
        "nome": "Near the lake",
        "perChi": "visiting on foot",
        "testo": "Hotels and guesthouses a few minutes from the temple and market. More traffic and noise.",
        "fascia": "€25-70"
      },
      {
        "nome": "Luxury hotels out of town",
        "perChi": "pool and comfort",
        "testo": "Earl's Regency and The Grand Kandyan, with pools and views over the hills. You need a tuk-tuk or car to get to the centre.",
        "fascia": "€120-250"
      }
    ],
    sapori: [
      {
        "nome": "South Indian rice and curry",
        "testo": "In a South Indian restaurant found on the spot: cheap and excellent, though with a bit of confusion over orders."
      },
      {
        "nome": "Spices",
        "testo": "Cardamom, cinnamon and pepper from the spice garden and the market."
      },
      {
        "nome": "Dosa and idli",
        "testo": "Fermented rice crêpes and cakes, in the Indian restaurants."
      },
      {
        "nome": "Kandy tea",
        "testo": "Black highland tea, packaged in the shops of the centre."
      }
    ],
    attenzioni: [
      "At the Temple of the Tooth you enter barefoot, with shoulders and knees covered, without turning your back on statues for photos.",
      "The temple is not a museum: on festival and full-moon (poya) days it is packed with pilgrims.",
      "Paid \"spice tours\" sell products at high prices: compare with the market.",
      "Agree the tuk-tuk price before getting in."
    ],
    gite: [
      {
        "nome": "Kitulgala and rafting on the Kelani",
        "distanza": "about 2 hours by car",
        "come": "By van or car with a driver; rafting is arranged with a local operator or through the DMC.",
        "testo": "The river where The Bridge on the River Kwai was filmed, with rapids that suit first-timers too. Operators add canyoning, waterfall jumps and a jungle walk. It lies on the way to Adam's Peak."
      },
      {
        "nome": "Ambuluwawa Tower",
        "distanza": "about 1 hour by car",
        "come": "By car or tuk-tuk via Gampola, then a narrow road to the top of the hill.",
        "testo": "A spiral tower on a hilltop, with an outside staircase that narrows towards the tip and a 360-degree view over the mountains. Places of worship of four religions share the hill."
      },
      {
        "nome": "Knuckles Range",
        "distanza": "about 2 hours by car",
        "come": "With a driver to Riverston or Deanston, then on foot with a local guide.",
        "testo": "The Knuckles range, a UNESCO site together with the central highlands, has trails through cloud forest, waterfalls and villages. From Kandy it makes a full day of trekking."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Kandy?",
        "risposta": "One day is enough for the Temple of the Tooth, the lake and the evening ceremony. With two you add Peradeniya gardens and the tea museum; with three, the western temples or a day trip."
      },
      {
        "domanda": "What time is the ceremony at the Temple of the Tooth?",
        "risposta": "Ceremonies are at 5:30 am, 9:30 am and 6:30 pm (official site, 2026). For the evening one it pays to queue from the late afternoon."
      },
      {
        "domanda": "What should you wear to the Temple of the Tooth?",
        "risposta": "Shoulders and knees covered, and you go in barefoot. Shorts and vests are not allowed; suitable clothes are available at the entrance."
      },
      {
        "domanda": "How do you get from Kandy to Ella?",
        "risposta": "By train on the hill-country line, about 7 hours on paper and often more: it is the most scenic ride on the island. Reserved seats must be booked well ahead; otherwise go by car with a driver."
      },
      {
        "domanda": "When is the Esala Perahera?",
        "risposta": "Kandy's great procession takes place between July and August, on dates that change every year with the lunar calendar. Hotels fill up and prices rise then: book well ahead."
      },
      {
        "domanda": "Is it better to stay by the lake or in the hills?",
        "risposta": "By the lake you walk to the temple and the market, with more traffic and noise. In the hills you sleep better and have a view, but every trip is by tuk-tuk."
      }
    ],
    esperienzeSlugs: ['tempio-del-dente'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "Silhouettes of worshippers in silence before the golden reliquary of the Temple of the Tooth in Kandy",
    immagine: '/images/sri-lanka/kandy-tempio-dente-reliquiario-riccardo.jpg',
  },
  {
    slug: 'nallathanniya',
    paeseSlug: 'sri-lanka',
    ordine: 6,
    nome: "Nallathanniya and Adam's Peak",
    tipologia: ['trekking', 'religione', 'avventura'],
    giorniConsigliati: '1 and a half days, including rafting at Kitulgala',
    visitataPersonalmente: true,
    introduzione: "Rafting on the Kelani River at Kitulgala and the night climb of Adam's Peak, the real physical test of the trip.",
    percheAndarci: "For the night climb up to the sunrise at the top, together with hundreds of local pilgrims. It's worth more for the path than for the destination.",
    cosaVedere: ["The Kelani River, where The Bridge on the River Kwai was filmed", "Sunrise from the top of Adam's Peak (2,243 m)"],
    cosaFare: [
      "Rafting on the Kelani River at Kitulgala (there is a dedicated experience page)",
      "Night climb of Adam's Peak (2h30-3h up; there is a dedicated experience page)",
    ],
    doveDormire:
      "Our base for the climb was the Wathsala Inn, 3/5 on Tripadvisor: nice view of the valley and the Peak, friendly staff, but many reviews point to maintenance problems (showers, sheets, leaks). Take it for what it is, an essential stopover for setting off at night, not a vacation spot.\n\nBudget: Slightly Chilled, Sun Mount Adam's Peak. Mid-range: White House Adam's Peak, Adams Peak Grand. There are no real luxury properties here: it's the village where the trek starts.",
    doveMangiare: "Dinner at the hotel before the night departure.",
    comeArrivare: "About 2h transfer from Kandy, passing through Kitulgala.",
    comeSpostarsi: "On foot for the whole climb.",
    periodoMigliore: 'the pilgrimage season, December-May, for the lit path (which is also more crowded)',
    costi: "I didn't note down how much rafting and the extra activities at Kitulgala cost: they are agreed with the operator.",
    erroriDaEvitare: ["Climbing without a sweatshirt: at the top at dawn it is cold and windy (3-6 °C on the 2023 trip)"],
    miaEsperienza:
      "The night on Adam's Peak, in single file with hundreds of local pilgrims on a fully lit staircase, was the real physical test of the trip. At the top the cold cuts, but climbing alongside people who do it out of faith, not for tourism, counts more than the sunrise itself.",
    luoghi: [
      {
        "nome": "Adam's Peak (Sri Pada)",
        "testo": "A mountain of 2,243 metres sacred to Buddhists, Hindus, Muslims and Christians. You climb at night along a fully lit staircase, in single file with hundreds of local pilgrims, to reach the top at dawn. I found that the path counts more than the destination.",
        "come": "You set off on foot from the village of Nallathanniya in the middle of the night; the climb takes several hours (2.5-3 hours on the 2023 trip).",
        "quando": "Pilgrimage season, December to May, with the lit path; April is the busiest month.",
        "tempo": "6-7 hours including climb, sunrise and descent",
        "consiglio": "At the top at dawn it is cold and windy (3-6 °C on the 2023 trip): bring a sweater."
      },
      {
        "nome": "Rafting at Kitulgala",
        "testo": "Rafting on the Kelani river, the same one where The Bridge on the River Kwai was filmed.",
        "come": "With a Kitulgala operator, on the road from Kandy toward Nallathanniya.",
        "tempo": "half a day",
        "costo": "I did not note what it cost: you agree it with the operator."
      },
      {
        "nome": "Kelani river",
        "testo": "The river that runs through Kitulgala, between forest and rapids, with the film set area.",
        "come": "From the main road in Kitulgala.",
        "tempo": "1 hour"
      }
    ],
    programmi: [
      {
        "titolo": "1.5 days",
        "tappe": [
          "Morning: rafting at Kitulgala on the road from Kandy",
          "Afternoon: arrival at Nallathanniya, rest and an early dinner",
          "Night: set off for Adam's Peak",
          "Dawn at the top and descent, then transfer"
        ]
      }
    ],
    zone: [
      {
        "nome": "Nallathanniya",
        "perChi": "those climbing at night",
        "testo": "The village where the trail starts: basic guesthouses such as the Wathsala Inn, with valley views. Not a holiday spot."
      },
      {
        "nome": "Hatton",
        "perChi": "more comfort",
        "testo": "Nearby town with more choice of lodging and restaurants, but further from the trailhead: the peak is about 32 km away."
      }
    ],
    sapori: [
      {
        "nome": "Hotel dinner",
        "testo": "Rice and curry before the night start, at the hotel or guesthouse."
      },
      {
        "nome": "Hot tea on the climb",
        "testo": "Along the staircase there are small stalls of tea and biscuits for pilgrims."
      },
      {
        "nome": "Roti",
        "testo": "Stuffed flatbread, for breakfast on the way back."
      }
    ],
    attenzioni: [
      "Climbing without a sweater: at the top at dawn it is cold and windy.",
      "The staircase is very crowded in pilgrimage season: keep to the flow and do not stop on the steps.",
      "Bring a head torch and shoes with good grip: the staircase is lit, but it is wise to have one anyway.",
      "In fog or rain the climb is slippery: assess conditions before starting."
    ],
    esperienzeSlugs: ['rafting-kitulgala', 'scalata-adams-peak'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "The shrine on the summit of Adam's Peak and the pilgrims' stairway on the green ridge, among low clouds",
    immagine: '/images/sri-lanka/adams-peak-vetta-riccardo.jpg',
  },
  {
    slug: 'nuwara-eliya',
    paeseSlug: 'sri-lanka',
    ordine: 7,
    nome: 'Nuwara Eliya',
    tipologia: ['natura', 'relax'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione: "Sri Lanka's \"Little England\", at 1,868 meters above sea level, among tea plantations and the Horton Plains plateau.",
    percheAndarci: "For the change of climate and landscape compared with the rest of the trip: tea, fresh air and, for those who want it, one of the most beautiful hikes on the island.",
    cosaVedere: ["The Pedro Tea Plantation and its tea factory", "World's End at Horton Plains, the edge of the plateau with an 870-meter drop"],
    cosaFare: [
      "Visit to the Pedro tea plantation",
      "Relax: massage, tea ceremony at the Grand Hotel, Victoria Park, Lover's Leap Falls",
      "Adventure: hike to World's End, at Horton Plains (3h)",
    ],
    doveDormire:
      "We slept at the Araliya RED, one of the most booked in the area, 4/5 with almost 2,000 reviews: the heated pool is much liked, the staff is hospitable and from the rooftop you can see the town. Some report noise from nearby rooms and a smell of diesel at the entrance.\n\nBudget: Galaxy Grand Hotel, Star Gate Private Villa. Mid-range: Jetwing St. Andrew's, Clifton Inn. Luxury: Heritance Tea Factory, The Grand Hotel Nuwara Eliya.",
    doveMangiare: "De Silva Food Center, Grand Indian, Grand Thai or Themparadu (the most local); after-dinner drinks at the Lakeview Pub.",
    comeArrivare: "Transfer from Hatton/Nallathanniya, passing the Pedro Tea Plantation.",
    comeSpostarsi: "Private van for Horton Plains, on foot in town.",
    periodoMigliore: 'a sunny day for the hike to World\'s End',
    costi: "Activities in Nuwara Eliya (massage, tea ceremony) 5,000-8,000 LKR.",
    erroriDaEvitare: [],
    miaEsperienza:
      "The transfer to the Pedro Tea Plantation was much shorter than expected, and so I had more time left for the free afternoon among the bright green tea valleys around Nuwara Eliya.",
    luoghi: [
      {
        "nome": "Pedro Tea Plantation",
        "testo": "A plantation with its tea factory, where you follow processing from leaf to cup. The transfer from Nallathanniya was much shorter than expected, so I had more time for a free afternoon among the tea valleys.",
        "come": "About 3.5 km east of Nuwara Eliya, on the road to Kandapola: by van or tuk-tuk. Lover's Leap waterfall is nearby.",
        "quando": "Morning or early afternoon.",
        "tempo": "1 hour"
      },
      {
        "nome": "World's End at Horton Plains",
        "testo": "The edge of the Horton Plains plateau, above 2,000 metres, with an 870-metre drop to the plain below. The trek is a loop of about 9.5 km, 3 hours at an easy pace, through grassland and cloud forest, with a detour to Baker's Falls. Plastic is banned in the park: discarded bags have killed several sambar, the park's deer.",
        "come": "By van from Nuwara Eliya, leaving at dawn; you walk a marked trail. The entrance opens at 6 am.",
        "quando": "Early morning: later mist and clouds arrive and the view disappears. A sunny day is needed.",
        "tempo": "3 hours walking plus the transfer",
        "costo": "Park entry about 25 USD per foreign adult, plus taxes, service charge and vehicle (2026)",
        "consiglio": "Leave Nuwara Eliya at dawn, to reach the edge before the clouds."
      },
      {
        "nome": "Victoria Park and the lake",
        "testo": "A tidy English-style park, with flowerbeds and birds, in the heart of Sri Lanka's \"Little England\".",
        "come": "On foot from the centre.",
        "tempo": "1 hour"
      },
      {
        "nome": "Tea ceremony and relaxation",
        "testo": "Afternoon tea at the Grand Hotel, a massage or a walk to Lover's Leap waterfall, about 30 metres high among the plantations.",
        "tempo": "half a day",
        "costo": "Activities 5,000-8,000 LKR (from the 2023 trip)"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Early morning: World's End at Horton Plains",
          "Lunch in Nuwara Eliya",
          "Afternoon: Pedro Tea Plantation and tea at the Grand Hotel"
        ]
      }
    ],
    zone: [
      {
        "nome": "Nuwara Eliya centre",
        "perChi": "those who want to walk",
        "testo": "Hotels and restaurants a few minutes from the park and market. More noise and traffic."
      },
      {
        "nome": "Tea hills",
        "perChi": "views and quiet",
        "testo": "Plantations and charming resorts such as the Heritance Tea Factory, farther from the centre."
      }
    ],
    sapori: [
      {
        "nome": "Nuwara Eliya tea",
        "testo": "Highland plantation tea, light and fragrant, to try at the factory or the Grand Hotel."
      },
      {
        "nome": "Local restaurants",
        "testo": "De Silva Food Center, Grand Indian, Grand Thai or Themparadu, the most local."
      },
      {
        "nome": "Strawberries",
        "testo": "The cool climate lets them grow at altitude: they are sold at the roadside."
      },
      {
        "nome": "Highland vegetables",
        "testo": "Carrots, cabbages and potatoes grown on terraces, in local curries."
      }
    ],
    attenzioni: [
      "The cold: at 1,868 metres the evenings are cool and it is colder still at Horton Plains. Bring a fleece.",
      "At World's End without sun there is no view: check conditions and leave early.",
      "Do not bring single-use plastic into Horton Plains, where it is banned.",
      "On the trails stay on the marked path: there are unprotected drops."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "The green tea valleys around Nuwara Eliya, Sri Lanka",
    immagine: '/images/sri-lanka/nuwara-eliya-stock.jpg',
  },
  {
    slug: 'ella',
    paeseSlug: 'sri-lanka',
    ordine: 8,
    nome: 'Ella',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '1 day, plus the scenic train to get there',
    visitataPersonalmente: true,
    introduzione: "The scenic train from Nuwara Eliya, the Nine Arches Bridge and the viewpoints over the most photographed tea hills in Sri Lanka.",
    percheAndarci: "For the island's most famous scenic train and for the many viewpoints a short walk from the village.",
    cosaVedere: ["The Nine Arches Bridge", "Lipton's Seat", "Ravana Falls, about 6 km from Ella"],
    cosaFare: [
      "The Nuwara Eliya-Ella scenic train (there is a dedicated experience page)",
      "The Flying Ravana zip line (about €20, 15 minutes from Ella)",
      "A massage at Spa Ceylon",
      "The cooking class with dinner organized by the DMC",
    ],
    doveDormire:
      "We slept at the 88th Hotel, 4/5 on Tripadvisor and one of the most recommended places in the area: central, close to Ella Rock and the Nine Arches Bridge, with a warm welcome. Better to start with the right expectations: no air conditioning, no elevator, a firm bed with just sheets.\n\nBudget: Ella Alpine Resort, Rock Side Inn. Mid-range: Arawe Retreat, Zion View Ella Green Retreat. Luxury: 98 Acres Resort & Spa, Nine Skies.",
    doveMangiare: "Cooking class with dinner from the DMC; after-dinner drinks at One Love Ella (watch out for the drinks offered at the table, which often end up on the bill).",
    comeArrivare: "The classic way is the scenic train from Nanu Oya, the station for Nuwara Eliya: 3 hours on paper, but real times are unpredictable. From Kandy the same train takes about 7 hours on paper. By car with a driver it is about 2.5 hours from Nuwara Eliya and about 2 hours from Yala; from Colombo airport it is a full day on the road. Reserved seats are booked on the Sri Lanka Railways portal.",
    comeSpostarsi: "On foot for the viewpoints near the village.",
    periodoMigliore: "I have no precise indications on the best season for Ella: we went in November",
    costi: "Flying Ravana zip line about €20 (2023); Nine Arches Bridge free. Rough daily budget per person: low €25-35 (guesthouse in the village, rice and curry, tuk-tuks), mid €60-100 (hotel in the hills, cooking class, one activity), high from €200 (luxury resort, private driver).",
    erroriDaEvitare: ["Waiting to book scenic train tickets: they must be bought well ahead, because they sell out immediately, especially in high season"],
    miaEsperienza:
      "The scenic train arrived hours late and with nothing to eat on board. The tea valleys stretching as far as the eye can see from the window, though, are among the most beautiful images of the whole trip. You have to get on with the right spirit: delays are the norm.",
    luoghi: [
      {
        "nome": "Nuwara Eliya to Ella scenic train",
        "testo": "The most famous stretch of the highland railway, among tea valleys as far as the eye can see. Our train arrived hours late and with nothing to eat on board, but the views from the window are among the best of the trip.",
        "come": "You board at Nanu Oya station, for Nuwara Eliya; on paper 3 hours, but real timings are unpredictable.",
        "quando": "Morning. Reserved seats are booked on the official Sri Lanka Railways portal and collected at the counter with the booking code and your passport: book well ahead, because they sell out quickly, especially in high season.",
        "tempo": "3 hours on paper (2023 trip), often a lot more",
        "url": "https://seatreservation.railway.gov.lk/mtktwebslr/",
        "consiglio": "Board with the right spirit: delays are the norm. Bring food and water."
      },
      {
        "nome": "Nine Arches Bridge",
        "testo": "A nine-arched railway viaduct in stone, brick and cement, finished in 1919: 91 metres long and 24 high, set in the jungle. The most charming moment is when a train passes.",
        "come": "At Demodara, between Ella and Demodara stations: by tuk-tuk and then on foot along a path.",
        "quando": "When a train passes: ask guesthouse for the times.",
        "tempo": "1 hour",
        "costo": "Free (2023 trip)",
        "lat": 6.87667,
        "lng": 81.06111,
        "consiglio": "Do not walk on the tracks when a train is coming."
      },
      {
        "nome": "Little Adam's Peak",
        "testo": "Ella's easiest and loveliest walk: a path through the tea estates leads to the top of a hill looking over the valley and the Ella Gap. The name comes from its shape, which recalls Adam's Peak.",
        "come": "On foot from the village along the Passara road, then the path through the tea: about 45 minutes of easy climbing.",
        "quando": "Dawn or early morning, before the heat and the clouds.",
        "tempo": "2 hours return",
        "lat": 6.86505,
        "lng": 81.06302
      },
      {
        "nome": "Ella Rock",
        "testo": "A longer, harder climb, past the railway, tea estates and woodland, up to a rocky spur above the valley. The view is worth the effort, but the trail is not always marked.",
        "come": "On foot from Ella, partly along the railway; if you don't want to get lost, take a local guide.",
        "quando": "Start at dawn: by mid-morning clouds often hide the view.",
        "tempo": "4-5 hours return",
        "lat": 6.85472,
        "lng": 81.05194,
        "consiglio": "Be wary of people pointing out \"shortcuts\" on the trail and then asking for money to lead you back to the right path."
      },
      {
        "nome": "Ravana Falls",
        "testo": "A tiered waterfall about 25 metres high on the road to Wellawaya, about 6 km from Ella. The Ramayana legend links it to King Ravana, who is said to have hidden Princess Sita here.",
        "come": "By tuk-tuk or bus towards Wellawaya: you can see it from the road.",
        "quando": "During and after the rains, when it carries more water.",
        "tempo": "30 minutes",
        "lat": 6.84083,
        "lng": 81.05444
      },
      {
        "nome": "Lipton's Seat",
        "testo": "The viewpoint over the tea plantations of the Dambatenne estate, named after Thomas Lipton, the tea king. It is not in Ella but above Haputale: worth the trip if the sky is clear.",
        "come": "By van or tuk-tuk from Ella to Haputale, then up the Dambatenne estate road.",
        "quando": "Early morning, before the clouds.",
        "tempo": "half a day from Ella",
        "lat": 6.78068,
        "lng": 81.0155
      },
      {
        "nome": "Flying Ravana zip line",
        "testo": "A 550-metre two-wire zip line over the hills above Ella. It starts from Mini Adam's Peak and runs over the tea plantations.",
        "come": "By tuk-tuk from Ella, a few minutes (about 15 on the 2023 trip).",
        "tempo": "1.5 hours",
        "costo": "About €20 (from the 2023 trip)",
        "lat": 6.86598,
        "lng": 81.06207,
        "url": "https://www.flyingravana.com/"
      },
      {
        "nome": "Ravana Cave",
        "testo": "A cave in the rock above the valley, also tied to the legend of Ravana and Sita. There is little to see inside: it is worth it mostly for the climb and the view.",
        "come": "By tuk-tuk to the bottom, then a long, steep flight of steps.",
        "quando": "Morning, before the heat.",
        "tempo": "1 hour",
        "lat": 6.86438,
        "lng": 81.04854
      },
      {
        "nome": "Uva Halpewatte Tea Factory",
        "testo": "A working tea factory in the hills north of Ella. The guided tour follows the process from freshly picked leaf to packed tea and ends with a tasting.",
        "come": "By tuk-tuk from Ella, on a mountain road.",
        "quando": "Morning, when the factory is processing leaves.",
        "tempo": "1 hour",
        "lat": 6.88956,
        "lng": 81.03477
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Scenic train from Nanu Oya (delays possible)",
          "Arrive in Ella and lunch",
          "Afternoon: Nine Arches Bridge at train time",
          "Cooking class with dinner"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: scenic train and Nine Arches Bridge",
          "Day 2: Lipton's Seat at dawn (above Haputale), then zip line and massage in the afternoon"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: scenic train from Nanu Oya, then Nine Arches Bridge when a train passes",
          "Day 2: Little Adam's Peak at dawn, zip line, Halpewatte tea factory, cooking class in the evening",
          "Day 3: Ella Rock at dawn and Ravana Falls in the afternoon, or the trip to Lipton's Seat"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ella centre",
        "perChi": "convenience and nightlife",
        "testo": "Guesthouses such as the 88th Hotel, near Ella Rock and the Nine Arches Bridge. Noisy in the evening along the main road.",
        "fascia": "€25-70"
      },
      {
        "nome": "Hills outside the centre",
        "perChi": "those after views and quiet",
        "testo": "Resorts and villas among the plantations, with wide views. You need a tuk-tuk to reach the village.",
        "fascia": "€60-150"
      },
      {
        "nome": "Luxury resorts",
        "perChi": "a special night",
        "testo": "98 Acres Resort & Spa, among the tea estates below Little Adam's Peak, and the more secluded Nine Skies. Bungalows with views and pools; the village is a tuk-tuk ride away.",
        "fascia": "€180-350"
      }
    ],
    sapori: [
      {
        "nome": "Cooking class",
        "testo": "You learn to make coconut curry, sambol and dal; dinner is part of the lesson."
      },
      {
        "nome": "Kottu",
        "testo": "Roti strips stir-fried with vegetables and egg, in main-road places."
      },
      {
        "nome": "Hill tea",
        "testo": "From the plantations around Ella, in cafés with a view."
      },
      {
        "nome": "Rice and curry",
        "testo": "The basic meal, in every guesthouse."
      }
    ],
    attenzioni: [
      "Scenic train: tickets sell out fast and delays of hours are the norm. Book well ahead and do not plan tight connections.",
      "One Love Ella and similar places: drinks offered at the table often end up on the bill.",
      "Some rooms have no air conditioning, lift or soft beds: read the description carefully before booking.",
      "On the Nine Arches Bridge tracks, do not stand still when a train arrives."
    ],
    gite: [
      {
        "nome": "Diyaluma Falls",
        "distanza": "about 1.5 hours by car",
        "come": "By car or tuk-tuk via Wellawaya and Koslanda; for the upper pools you climb on foot, best with a village guide.",
        "testo": "Sri Lanka's second-highest waterfall, about 220 metres. At the top there are natural pools to swim in, looking out over the plain."
      },
      {
        "nome": "Buduruvagala",
        "distanza": "about 1 hour by car",
        "come": "By car via Wellawaya, then a few kilometres of side road.",
        "testo": "Seven figures carved into the rock around the 10th century, including a standing Buddha of about 15 metres, in the middle of the forest and with hardly any tourists."
      },
      {
        "nome": "Yala National Park",
        "distanza": "about 2 hours by car",
        "come": "With a driver, leaving very early; the safari is by jeep with a guide.",
        "testo": "The park with the highest density of leopards in the world, plus elephants, crocodiles, buffalo and many birds. The safari lasts about four hours and cost 12,000-16,000 LKR per jeep plus entry (2023 trip)."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Ella?",
        "risposta": "One day is enough for the train and Nine Arches Bridge. With two or three you add the dawn walks (Little Adam's Peak, Ella Rock), the zip line and the trip to Lipton's Seat."
      },
      {
        "domanda": "How do you book the train to Ella?",
        "risposta": "Reserved seats are bought on the official Sri Lanka Railways portal and collected at the counter with the code and your passport. They sell out fast, especially in high season: book as soon as sales open."
      },
      {
        "domanda": "Is the scenic train on time?",
        "risposta": "Hardly ever: delays of hours are normal and there is nothing to eat on board. Don't plan tight connections, and bring water and food."
      },
      {
        "domanda": "Little Adam's Peak or Ella Rock?",
        "risposta": "Little Adam's Peak is easy, about 45 minutes up, fine for everyone. Ella Rock is longer and less marked, but wilder: it is for those with time and legs."
      },
      {
        "domanda": "When does the train cross Nine Arches Bridge?",
        "risposta": "Trains pass several times a day, between morning and late afternoon, but the times are not reliable. Ask at your guesthouse and wait at the viewpoint with a good margin."
      },
      {
        "domanda": "Can you do Yala as a day trip from Ella?",
        "risposta": "Yes: it is about 2 hours by road, leaving very early for the morning safari. Many then carry on to the south coast."
      }
    ],
    esperienzeSlugs: ['treno-panoramico-ella'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "An old locomotive with its headlight on among the grassy tracks of the Sri Lankan highlands",
    immagine: '/images/sri-lanka/treno-locomotiva-altipiani-riccardo.jpg',
  },
  {
    slug: 'hikkaduwa',
    paeseSlug: 'sri-lanka',
    ordine: 9,
    nome: 'Hikkaduwa',
    tipologia: ['mare', 'relax'],
    giorniConsigliati: '2-3 days, including the safari at Yala along the way',
    visitataPersonalmente: true,
    introduzione: "The safari at Yala National Park and the beaches of the south: the relaxed part of the trip, after days of temples and hiking.",
    percheAndarci: "To end the trip at the sea, after all the temples, safaris and hikes of the previous days.",
    cosaVedere: ["Yala National Park", "The Tsunami Museum"],
    cosaFare: [
      "Safari at Yala, one of the parks with the highest density of leopards in the world (there is a dedicated experience page)",
      "Swimming with turtles: the best spot is in front of the Hikka Tranz by Cinnamon Hotel",
      "Tsunami Museum",
      "Big Buddha, surfing, snorkeling, diving, boat safari on the Madu River",
    ],
    doveDormire:
      "We slept at the Sapphire Seas Beachfront Hotel, with very positive reviews: a boutique hotel right on the sea, spacious rooms and a cleanliness many mention. Some describe it as \"an oasis\" compared with the busier parts of Hikkaduwa.\n\nBudget: Hilda Guest House, Amaroo Hikkaduwa. Mid-range: Sea Star Boutique Hotel, Hikka Tranz by Cinnamon. Luxury: Crystal Sands, Aditya Resort.",
    doveMangiare: "Dinner on the beach (we had the red snapper: slow service but an excellent dinner); Steffi's Mandala (vegetarian) or Thambili Cafe for lunch; Sea Salt Society or Canal View for dinner.",
    comeArrivare: "About 2h15-2h40 transfer from Ella, passing through the safari at Yala.",
    comeSpostarsi: "On foot on the beach.",
    periodoMigliore: 'November, when we went, though between the two monsoons rain and squalls can still hit the coast',
    costi: "Safari at Yala 12,000-16,000 LKR per jeep, plus entrance (€27-30 per person) and tip.",
    erroriDaEvitare: ["Trusting the \"stilt fishermen\" along the south coast: by now they are almost always a paid staged show for tourists"],
    miaEsperienza:
      "After days full of temples and hiking, the beaches of Hikkaduwa were the right way to close the trip. The red snapper eaten on the beach one evening, with slow service and the sea a few steps away, is one of the truest memories of all of Sri Lanka.",
    luoghi: [
      {
        "nome": "Yala National Park",
        "testo": "One of the parks with the highest density of leopards in the world, where you also see elephants, crocodiles and birds on safari.",
        "come": "By jeep with a guide, on the road from Ella to Hikkaduwa; the safari lasts a few hours.",
        "quando": "Early morning or late afternoon, when animals are active.",
        "tempo": "4 hours",
        "costo": "Jeep 12,000-16,000 LKR, plus entry (€27-30 per person) and tip (from the 2023 trip); the basic entry fee is about 25 USD per foreign adult, plus taxes, service charge and vehicle (2026)",
        "consiglio": "Leopards are not guaranteed: ask the driver where they have been sighted."
      },
      {
        "nome": "Swimming with turtles",
        "testo": "The best spot in Hikkaduwa is in front of the Hikka Tranz by Cinnamon Hotel, where sea turtles come to graze on seagrass.",
        "come": "From the beach, with mask and fins.",
        "quando": "Morning, with calm sea.",
        "tempo": "1-2 hours",
        "consiglio": "Do not touch or chase the turtles, and keep your distance."
      },
      {
        "nome": "Tsunami Museum",
        "testo": "A museum dedicated to the 2004 tsunami, which killed thousands of people on the south coast. A serious moment in the middle of a beach holiday.",
        "come": "By tuk-tuk from Hikkaduwa.",
        "tempo": "1 hour"
      },
      {
        "nome": "Madu river, surfing and the Big Buddha",
        "testo": "A boat safari on the Madu river among mangroves, the large Buddha statue along the coast and, for sea lovers, surfing, snorkelling and diving.",
        "come": "Excursions from Hikkaduwa by tuk-tuk or boat.",
        "tempo": "half a day"
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Yala safari on the transfer from Ella, then dinner on the beach",
          "Day 2: turtle snorkelling in the morning, Tsunami Museum, afternoon at the beach"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hikkaduwa seafront",
        "perChi": "nightlife and surf",
        "testo": "Bars, surf schools and hotels along the main road. Noisy and busy."
      },
      {
        "nome": "Seafront hotels outside the centre",
        "perChi": "quiet",
        "testo": "Boutique hotels such as the Sapphire Seas, directly on the beach, in less busy areas."
      }
    ],
    sapori: [
      {
        "nome": "Grilled red snapper",
        "testo": "Dinner on the beach: slow service but excellent fish. One of the truest memories of Sri Lanka."
      },
      {
        "nome": "Vegetarian food",
        "testo": "Steffi's Mandala or Thambili Cafe at lunch."
      },
      {
        "nome": "Seafood",
        "testo": "Sea Salt Society or Canal View at dinner."
      },
      {
        "nome": "Fresh coconut",
        "testo": "Thambili, the orange king coconut, sold along the beach."
      }
    ],
    attenzioni: [
      "The \"stilt fishermen\" along the south coast: they are now almost always a staged show for payment.",
      "In October and November, between the two monsoons, squalls and rough sea can hit the south coast: ask at the hotel before swimming.",
      "Yala safari: choose operators who respect distance from animals and the limits on jeeps around sightings.",
      "Currents and high waves in the south: swim where other people are and respect the flags."
    ],
    esperienzeSlugs: ['safari-yala'],
    tripSlugs: ['sri-lanka-2023'],
    imageAlt: "The beach of Hikkaduwa on the south coast of Sri Lanka",
    immagine: '/images/sri-lanka/hikkaduwa-stock.jpg',
  },
]
