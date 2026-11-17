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
    comeArrivare: "You land at Tocumen (PTY), Copa Airlines' hub and one of the main airports in the Americas. Metro Line 2 leaves from the airport, with a fare of about 0.50 USD on the rechargeable card (about €0.45); a taxi or Uber to Casco Viejo takes 30-45 minutes, longer in evening traffic. From Belize there is a direct Copa flight from Belize City, about 2.5 hours, only on some days of the week. Domestic flights to David and Bocas del Toro leave instead from Albrook airport, in the city: between Albrook and Tocumen the taxi takes 30-60 minutes.",
    comeSpostarsi: "Metro (two lines, cheap and functional), Uber widespread and convenient, taxis always to be negotiated before getting in.",
    periodoMigliore: "mid-December to mid-April, the dry season; the rest of the year it rains mostly in the afternoon",
    costi: "You pay in US dollars (the balboa exists only as coins). Miraflores 17.22 USD for non-residents (about €15), Biomuseo 20 USD (about €17), Canal Museum 15 USD (about €13), Metropolitan Natural Park 5 USD (about €4). Budget: about €45-60 a day with a hostel in Casco Viejo, fondas and the metro. Mid-range: €110-160 with a hotel in Bella Vista or El Cangrejo, Uber and a few museums. High: over €250 with a design hotel in the Casco and rooftop dinners.",
    erroriDaEvitare: [
      "Going to the locks without checking the transit times: without ships passing through, the visit loses most of its point",
      "Walking at night outside the tourist areas of the Casco Viejo, which borders neighborhoods to avoid",
    ],
    miaEsperienza:
      "From the airport we went straight to the Casco Viejo, and the first impact was a skyline of skyscrapers that looked like nothing we'd seen in the previous three weeks. The next day, in the morning, the Miraflores Locks: the ship transit times need to be checked beforehand, because without a ship maneuvering you're looking at an empty concrete basin, while a container ship coming in with a few inches of margin on each side is worth the detour by itself. In the afternoon the ruins of Panamá Viejo and a walk in the Casco Viejo, where the most interesting thing to look at is the contrast between renovated buildings and facades still propped up. We had lunch at the Mercado de Mariscos with a ceviche in a plastic cup for a couple of dollars. Outside the tourist areas of the Casco, after sunset, it's better not to walk around.",
      "luoghi": [
        {
          "nome": "Miraflores Locks",
          "testo": "The Panama Canal locks where ships are raised and lowered between the two levels, with a visitor centre, museum and viewing terrace.",
          "come": "Ride-hailing taxi or hotel transfer from Panama City. Entry ticket to the visitor centre.",
          "quando": "Morning: check ship transit times in advance, because without a ship in motion you are looking at an empty basin.",
          "tempo": "2-3 hours",
          "costo": "17.22 USD for non-residents aged 13 and over, about €15; 7.22 USD for ages 6-12 (2026). Tickets also online.",
          "url": "https://visitcanaldepanama.com/",
          "consiglio": "A container ship entering with a few centimetres of clearance on each side is worth the detour alone.",
          "orari": "Daily 8am-6pm; ticket office 8am-5pm. Renovation works under way until the end of 2026, with possible waits.",
          "lat": 8.9957,
          "lng": -79.5905
        },
        {
          "nome": "Casco Viejo",
          "testo": "The colonial historic centre, a UNESCO site: Plaza de la Independencia, churches, restored palaces and façades still propped up, among cafés and rooftops.",
          "come": "On foot once you arrive; the district can be seen in a day.",
          "quando": "Morning and sunset; in the evening stay on the tourist streets.",
          "tempo": "Half a day",
          "consiglio": "The contrast between restored buildings and propped-up façades is the most interesting thing to look at. Outside the tourist areas, after sunset, better not to walk.",
          "costo": "Free.",
          "lat": 8.9525,
          "lng": -79.5347
        },
        {
          "nome": "Panamá Viejo",
          "testo": "The ruins of the original city, founded in 1519 and destroyed in 1671 during the attack of the privateer Henry Morgan, by a fire whose author is still uncertain. Together with Casco Viejo it has been a UNESCO site since 1997.",
          "come": "Ride-hailing taxi from the centre.",
          "quando": "Tuesday to Sunday, 8:30am-5:30pm (ticket office until 4:30pm); closed on Mondays. Morning, before the heat.",
          "tempo": "1-2 hours",
          "url": "https://www.patronatopanamaviejo.org/",
          "orari": "Tuesday to Sunday 8:30am-5:30pm, ticket office until 4:30pm; closed Monday.",
          "lat": 9.0072,
          "lng": -79.4884
        },
        {
          "nome": "Mercado de Mariscos",
          "testo": "The fish market near Casco Viejo, with ceviche stalls served in cups.",
          "come": "On foot from Casco Viejo.",
          "quando": "Lunch.",
          "tempo": "1 hour",
          "consiglio": "Ceviche comes in a plastic cup, eaten at the counter, for a few dollars.",
          "lat": 8.9583,
          "lng": -79.539
        },
        {
          "nome": "Biomuseo",
          "testo": "The museum designed by Frank Gehry on the Amador Causeway, about the rise of the isthmus of Panama and biodiversity. The building with coloured canopies is visible from afar; inside, the rooms tell how the isthmus, joining two continents, changed animals and currents.",
          "come": "Taxi or Uber.",
          "quando": "Tuesday to Friday 9am-3pm, Saturday and Sunday 10am-3pm; closed on Mondays.",
          "tempo": "2 hours",
          "costo": "20 USD for non-resident adults, about €17 (2026).",
          "url": "https://biomuseo.org/",
          "orari": "Tuesday to Friday 9am-3pm, Saturday and Sunday 10am-3pm; closed Monday.",
          "lat": 8.9319,
          "lng": -79.5448
        },
        {
          "nome": "Interoceanic Canal Museum",
          "testo": "The museum of the canal's history, in a 19th-century building on Plaza de la Independencia that housed the French canal company. It covers the failed French attempt, the American works, the thousands of workers who died and the handover to Panama in 1999.",
          "come": "On foot in Casco Viejo, on the main square.",
          "quando": "Before or after Miraflores, to understand what you are looking at.",
          "tempo": "1-2 hours",
          "costo": "15 USD for non-resident adults, about €13 (2026).",
          "orari": "Tuesday to Sunday 9am-6pm, ticket office until 5:30pm; closed Monday.",
          "lat": 8.9518,
          "lng": -79.5347,
          "url": "https://museodelcanal.com/"
        },
        {
          "nome": "Iglesia de San José and the golden altar",
          "testo": "A Casco Viejo church holding a Baroque altar of gilded wood brought from Panamá Viejo. Tradition says it was painted black to hide it from Henry Morgan's pirates in 1671.",
          "come": "On foot on Avenida A, in Casco Viejo.",
          "quando": "Morning, outside service times.",
          "tempo": "20 minutes",
          "lat": 8.9514,
          "lng": -79.536,
          "consiglio": "Cover shoulders and knees: it is a working church."
        },
        {
          "nome": "Plaza de Francia and Las Bóvedas",
          "testo": "The square at the tip of Casco Viejo, with the obelisk honoring the French who died building the first canal. Above the old vaults of the walls you walk along Paseo Esteban Huertas, with views of the bay and the skyline.",
          "come": "On foot, at the far end of Casco Viejo.",
          "quando": "Late afternoon and sunset.",
          "tempo": "30-45 minutes",
          "costo": "Free.",
          "lat": 8.9499,
          "lng": -79.5321
        },
        {
          "nome": "Cinta Costera",
          "testo": "The seafront built on the bay between Casco Viejo and Paitilla, with bike lanes, sports courts and lawns. In the evening it fills with joggers and walkers; it gives the best view of the skyline.",
          "come": "On foot from the Mercado de Mariscos or Casco Viejo; bikes can be rented along the way.",
          "quando": "Sunset and early evening, when the heat drops.",
          "tempo": "1-2 hours",
          "costo": "Free.",
          "lat": 8.959,
          "lng": -79.5379
        },
        {
          "nome": "Amador Causeway",
          "testo": "The causeway, built with rock dug out for the canal, linking the mainland to four islets at the canal's Pacific entrance. You walk or cycle it watching the waiting ships and the city from the water; the Biomuseo stands at its start.",
          "come": "Taxi or Uber; bikes and pedal carts for rent at the start of the causeway.",
          "quando": "Late afternoon and sunset.",
          "tempo": "2 hours",
          "costo": "Free.",
          "lat": 8.9178,
          "lng": -79.5339
        },
        {
          "nome": "Metropolitan Natural Park",
          "testo": "Over 200 hectares of tropical dry forest inside the city, with trails and a lookout over the bay and the canal. Sloths, toucans, tamarin monkeys and agoutis live a few minutes from the skyscrapers.",
          "come": "Taxi or Uber to the entrance on Avenida Juan Pablo II.",
          "quando": "At opening, when wildlife is active and it is cooler.",
          "tempo": "2-3 hours",
          "costo": "5 USD for foreign adults, about €4 (2026).",
          "orari": "Trails open daily 7am-4:30pm, holidays included.",
          "lat": 8.9854,
          "lng": -79.5467,
          "url": "https://www.parquemetropolitano.org/"
        },
        {
          "nome": "Ancón Hill",
          "testo": "The city's highest hill, topped by a huge Panamanian flag. It lay inside the US-administered Canal Zone: today it is green space you climb on foot for views of Casco Viejo, the port of Balboa and the Bridge of the Americas.",
          "come": "Taxi to the start of the Quarry Heights road, then about half an hour uphill on foot on tarmac.",
          "quando": "Early morning, before the heat.",
          "tempo": "1-2 hours",
          "costo": "Free.",
          "lat": 8.9576,
          "lng": -79.5492,
          "consiglio": "Sloths and toucans are often seen along the road: walk slowly and look up at the trees."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Miraflores Locks with a ship in transit",
            "Lunch at the Mercado de Mariscos",
            "Afternoon: Casco Viejo",
            "Sunset over the sea from the Cinta Costera"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Miraflores, Casco Viejo",
            "Day 2: Panamá Viejo, Biomuseo, Calzada de Amador"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Day 1: Miraflores in the morning, Mercado de Mariscos, Casco Viejo and the Canal Museum",
            "Day 2: Metropolitan Natural Park at opening, Panamá Viejo, sunset on the Cinta Costera",
            "Day 3: Ancón Hill in the morning, Biomuseo and the Amador Causeway, or a trip to Taboga Island"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Casco Viejo",
          "perChi": "atmosphere and venues",
          "testo": "Hotels and restaurants in restored buildings, on foot. Pricier, noisy at night on weekends."
        },
        {
          "nome": "Bella Vista and Obarrio",
          "perChi": "services and prices",
          "testo": "A district of skyscrapers, hotels and restaurants, well connected by taxi."
        },
        {
          "nome": "El Cangrejo",
          "perChi": "restaurants and the metro",
          "testo": "A residential neighborhood around Vía Argentina, with cafés, restaurants of every cuisine and a metro stop. Quieter than the Casco at night."
        }
      ],
      "sapori": [
        {
          "nome": "Ceviche",
          "testo": "Raw fish marinated in lime, at the Mercado de Mariscos."
        },
        {
          "nome": "Sancocho",
          "testo": "Chicken soup with yuca and coriander, the national dish."
        },
        {
          "nome": "Arroz con pollo",
          "testo": "Chicken rice with vegetables, in the fondas."
        },
        {
          "nome": "Patacones",
          "testo": "Fried, flattened green plantain, to go with dishes."
        }
      ],
      "attenzioni": [
        "The UK Foreign Office reports muggings in Casco Viejo too, as well as Panamá Viejo and Avenida Central: after dark use ride-hailing taxis and don't walk alone on poorly lit streets.",
        "Before going to Miraflores check ship transit times.",
        "Taxis are often poorly maintained and have no meter: better to use apps or hotel-arranged transport."
      ],
      "gite": [
        {
          "nome": "Agua Clara Locks",
          "distanza": "about 80 km, on the Caribbean side near Colón",
          "come": "By car or day tour; tickets also online.",
          "testo": "The visitor center of the new locks, opened in 2016 for larger ships, with a terrace over Gatún Lake. Open daily 8am-5pm, ticket office until 3:30pm; 10 USD for non-resident adults (about €9)."
        },
        {
          "nome": "Portobelo",
          "distanza": "about 2 hours by road, on the Caribbean coast",
          "come": "By car or day tour, often combined with a beach on the coast.",
          "testo": "The Spanish port where convoys carrying Peruvian silver set sail, with UNESCO-listed forts on the bay and the church of the Black Christ. It is also a center of Congo, Afro-Panamanian culture."
        },
        {
          "nome": "Taboga Island",
          "distanza": "about 20 km out in the Gulf of Panama",
          "come": "Ferry from the Amador Causeway; there and back in a day.",
          "testo": "The \"island of flowers\", with a village of colorful houses, one of the oldest churches in the Americas and quiet beaches facing the ships queuing for the canal."
        }
      ],
      "faq": [
        {
          "domanda": "How many days do you need in Panama City?",
          "risposta": "Two days cover the canal, Casco Viejo and Panamá Viejo; a third adds the Metropolitan Park, Amador or a trip to Taboga."
        },
        {
          "domanda": "When do ships pass through Miraflores?",
          "risposta": "Transits follow time slots that change every day: check them on the day and arrive at the start of a slot. Peak entry times are 8am and 2pm."
        },
        {
          "domanda": "Is Casco Viejo safe?",
          "risposta": "The tourist streets are patrolled and lively until late, but the neighborhood borders areas to avoid and bag snatching happens. After dark, use app taxis."
        },
        {
          "domanda": "Do I need cash or dollars?",
          "risposta": "The currency is the US dollar, with balboa coins for small change. In the city cards work almost everywhere; cash is needed for markets, taxis and above all San Blas."
        },
        {
          "domanda": "How do you get around the city?",
          "risposta": "The metro for routes along its two lines, Uber for the rest. Street taxis often have no meter: agree the fare before getting in."
        },
        {
          "domanda": "When is the best time to go?",
          "risposta": "Mid-December to mid-April, in the dry season. The rest of the year it rains mostly in the afternoon, and mornings stay good for sightseeing."
        }
      ],
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
    comeArrivare: "You leave Panama City before dawn in a 4x4 booked with your package: about 2.5-3 hours of driving, the last stretches on a mountain road with very steep grades, to the port of Cartí. At the checkpoint you show your passport and pay the Guna community fee, about 20 USD per person (about €17), plus 2-5 USD at the port (about €2-4), cash only. From the dock a boat takes you to the islands in 15-60 minutes depending on where you stay. The return usually leaves mid-morning and reaches the city in the early afternoon.",
    comeSpostarsi: "Only by boat, with transfers arranged by the place you're staying.",
    periodoMigliore: "dry season (December-April) for calmer seas; the boat crossing can be demanding in wind",
    costi: "Guna community fee about 20 USD per person (about €17) plus 2-5 USD at the port, cash only; 4x4 plus boat transfer 40-60 USD each way (about €34-52); packages with cabaña and meals 60-150 USD per person per night (about €52-130). Budget: about €80-100 a day with a shared cabaña and transfers. Mid-range: €130-170 with a private cabaña and an island-hopping tour. High: over €200 with a private bathroom on an outer island and a private boat.",
    erroriDaEvitare: [
      "Arriving without cash: there are no ATMs or card payments on the islands",
      "Expecting resort comforts: limited electricity, rationed fresh water and almost no wifi are part of the experience",
      "Booking through unauthorized intermediaries: the facilities and transport are run by the Guna community, which regulates access",
    ],
    miaEsperienza:
      "Getting there was the most demanding transfer of the second part: wake-up around five, almost three hours of 4x4 on a mountain road with steep grades to the port of Cartí, then the boat to the islands. It's worth knowing what you're getting into. Guna Yala is a self-governed territory: the Guna run the tourism and the entry fee is paid to them, in cash only, because there are no ATMs or cards on the islands. Our cabaña was basic by choice, run by a Guna family: electricity on a schedule, rationed fresh water, almost no wifi, meals included. We spent the full day on the boat among Isla Perro, with the wreck to snorkel, Isla Aguja, the Cayos Holandeses and the natural pools in the middle of the sea. The rules belong to the community: you ask permission before photographing people and houses, nothing is taken away from the islands and scuba diving is prohibited.",
      "luoghi": [
        {
          "nome": "Isla Perro and the wreck",
          "testo": "A small island with a shipwreck to see while snorkelling.",
          "come": "By boat from the islands where you sleep, on a day tour.",
          "quando": "Morning, with calm sea.",
          "tempo": "1-2 hours",
          "consiglio": "Snorkelling only, no tanks: scuba diving is banned in Guna Yala to protect the reef.",
          "lat": 9.5582,
          "lng": -78.8761
        },
        {
          "nome": "Isla Aguja and Cayos Holandeses",
          "testo": "Islets with palms and white sand, turquoise water and shallow seabeds.",
          "come": "Boat tour among the islands, included in the package.",
          "quando": "Morning, in clear light.",
          "tempo": "Day"
        },
        {
          "nome": "Natural pools in the middle of the sea",
          "testo": "Sandbanks with shallow water, surrounded by open sea.",
          "come": "By boat from the cabaña.",
          "quando": "Morning.",
          "tempo": "Short stop"
        },
        {
          "nome": "Guna villages and molas",
          "testo": "The Guna villages, where you can buy molas, the traditional textiles hand-sewn by the women. Guna Yala is an autonomous comarca, governed by the Guna General Congress and each community's sahila.",
          "come": "Visit from one of the inhabited islands, with the residents' permission.",
          "quando": "Daytime.",
          "tempo": "1-2 hours",
          "consiglio": "Ask permission before photographing people and houses, and take nothing away from the islands."
        },
        {
          "nome": "Gardi Sugdub",
          "testo": "The island village off the port of Cartí, almost entirely covered by cane and tin houses. With rising seas, in 2024 most residents moved to a new neighborhood on the mainland: the island remains the place to see everyday Guna life, far from the postcard beaches.",
          "come": "By boat from Cartí in a few minutes, with the community's permission; often a stop on the way in or out.",
          "quando": "Daytime, on arrival or departure.",
          "tempo": "1 hour",
          "lat": 9.4707,
          "lng": -78.961,
          "consiglio": "Always ask before taking photos: some families ask for a small fee."
        },
        {
          "nome": "Chichime",
          "testo": "Two palm-fringed islands with white sand on the outer edge of the western archipelago, with shallow water and cabañas run by Guna families. They are among the most popular for overnight stays, also with visiting sailboats.",
          "come": "By boat from Cartí, with your host's package.",
          "quando": "Dry season, with calmer sea for the crossing.",
          "tempo": "1-2 nights",
          "lat": 9.5859,
          "lng": -78.8788
        },
        {
          "nome": "Cayos Limones",
          "testo": "A cluster of islets around a sheltered inner lagoon, with pale sand and shallows where you snorkel from the shore. They are one of the most common stops on boat tours of the western islands.",
          "come": "By boat, on island-hopping tours or with an overnight stay.",
          "quando": "Morning, in clear light.",
          "tempo": "Half a day",
          "lat": 9.5667,
          "lng": -78.861
        },
        {
          "nome": "El Porvenir (Gaigirgordub)",
          "testo": "A small island with the airstrip and the comarca's offices, at the western end of the archipelago. It is Guna Yala's administrative hub more than a beach destination, but boats leave from here to the nearby islands.",
          "come": "By boat from Cartí or the nearby islands.",
          "quando": "Daytime.",
          "tempo": "Short stop",
          "lat": 9.5503,
          "lng": -78.9552
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Pre-dawn departure from Panama City by 4x4 to Cartí",
            "Boat to the islands, snorkelling at Isla Perro",
            "Return towards evening, often too tight for a single day"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: 4x4 to Cartí, boat, night in a cabaña",
            "Day 2: tour among Isla Perro, Isla Aguja, Cayos Holandeses, natural pools, then return"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Day 1: 4x4 to Cartí, stop at Gardi Sugdub, boat to the island and a night in a cabaña",
            "Day 2: boat tour of Isla Perro, Cayos Limones and the natural pools",
            "Day 3: free morning in the water, back to Cartí and by 4x4 to Panama City"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Cabaña on a Guna island",
          "perChi": "those who want to sleep in a Guna community",
          "testo": "Basic by choice: electricity on a schedule, rationed fresh water, almost no wifi, meals included, run by a Guna family."
        },
        {
          "nome": "Accommodation on the mainland at Cartí",
          "perChi": "those who want to arrive at dawn",
          "testo": "Less atmospheric, but avoids the night departure."
        },
        {
          "nome": "Outer islands (Chichime, Cayos Limones)",
          "perChi": "clearer water",
          "testo": "Clearer water and fewer passing boats, in exchange for a longer, choppier crossing from Cartí."
        }
      ],
      "sapori": [
        {
          "nome": "Grilled fish and lobster",
          "testo": "The Guna catch, often included in meals."
        },
        {
          "nome": "Rice and beans",
          "testo": "The base of every meal, with fried plantain."
        },
        {
          "nome": "Patacones",
          "testo": "Fried plantain, as a side."
        },
        {
          "nome": "Coconut",
          "testo": "Fresh coconut water and pieces of flesh, gathered on the island."
        }
      ],
      "attenzioni": [
        "Entering Guna Yala means paying a fee to the comarca, on top of the port: bring cash, as there are no ATMs on the islands.",
        "The trip from Panama City starts before dawn, with hours of 4x4 on a steep mountain road: if you get carsick, take something.",
        "Community rules: ask permission before photographing people and houses, take nothing from the islands, no scuba."
      ],
      "gite": [
        {
          "nome": "Isla Pelícano",
          "distanza": "about 17 km from the port of Cartí",
          "come": "By boat, as a stop on island-hopping tours.",
          "testo": "A sand islet with a handful of palms, so small you walk around it in a minute: it is the San Blas image that ends up on postcards."
        },
        {
          "nome": "Sailing to Colombia",
          "distanza": "3-5 days of sailing",
          "come": "On the sailboats making the crossing between San Blas and the Colombian coast, booked in Panama City.",
          "testo": "It is the classic alternative to the Darién Gap, where there are no roads: a few days among the Guna islands and then open sea to Colombia."
        }
      ],
      "faq": [
        {
          "domanda": "Can you do San Blas as a day trip?",
          "risposta": "You can, but between the 4x4 and the boat you spend 6 hours travelling and little time on the islands. With at least one night it makes sense."
        },
        {
          "domanda": "How much cash should I bring?",
          "risposta": "Enough for the community fee, the port, any per-island surcharges, drinks and molas, in US dollars. There are no ATMs or card payments on the islands."
        },
        {
          "domanda": "What is a cabaña on San Blas like?",
          "risposta": "Basic: cane walls, a bed or hammock, often a shared bathroom, electricity for only a few hours and rationed fresh water. Meals of fish, rice and plantain are almost always included."
        },
        {
          "domanda": "Can you scuba dive on San Blas?",
          "risposta": "No, scuba diving is banned by decision of the Guna authorities. Snorkeling is allowed, and the shallow reefs are enough."
        },
        {
          "domanda": "When is the best time to go?",
          "risposta": "December to April, in the dry season, with more sun and usually calmer seas. In strong wind the boat crossing from Cartí can be rough."
        },
        {
          "domanda": "How do you book?",
          "risposta": "With a package including 4x4, boat, cabaña and meals, sold by Panama City agencies or directly by Guna families. Community fees are usually paid separately."
        }
      ],
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
      "Domestic flight from Panama City to Bocas del Toro (about 1 hour) or overnight bus to Almirante and a water taxi (about 30 minutes). From Costa Rica you arrive overland from the Caribbean side: bus from Puerto Viejo or Cahuita to Sixaola, exit Costa Rica (land exit tax of 8 USD, about €7, online on the Banco de Costa Rica website or at the BCR kiosks), walk across the binational bridge over the Sixaola River, opened in 2021, and enter Panama at Guabito. Then bus or shared taxi to Changuinola and Almirante, and water taxi to Bocas Town (about 30 minutes). There are also door-to-door shuttles from Puerto Viejo.",
    comeSpostarsi: "Water taxis between the islands (a few dollars each way), bicycles and taxis on Isla Colón.",
    periodoMigliore:
      "it has a different microclimate from the rest of the country: September-October and February-March are often the sunniest periods, while here the Panamanian \"dry season\" doesn't always line up",
    costi: "Day boat tour about 50-55 USD per person (about €43-47), lunch extra; marine park fee for Cayo Zapatilla about 10 USD cash (about €9) if not included; domestic flight 100-150 USD each way (about €86-130). Budget: about €40-55 a day with a hostel in Bocas Town, food stalls and water taxis. Mid-range: €90-140 with an over-water hotel and one tour. High: over €220 with a lodge on Bastimentos or Carenero and a private boat.",
    erroriDaEvitare: [
      "Taking the national dry season for granted: here the weather follows a different cycle from the rest of Panama",
      "Planning the boat tour without allowing for rough seas, which can cancel outings to the outer cayos",
    ],
    miaEsperienza:
      "From Boquete we got to Bocas overland as far as Almirante and then by water taxi, and it was the opposite of San Blas: stilt houses, a much more social and noisy atmosphere, hostels and people who almost always stay longer than planned. The next day we did the boat tour among the islets: Cayo Zapatilla, often the most beautiful point of the whole tour, and Starfish Beach, which lives up to its name with sea stars in water barely over three feet deep, plus a snorkeling stop at Cayo Coral. Outings to the outer cayos get canceled in rough seas, and that's something to allow for. Two practical warnings: here the weather follows its own microclimate and not the dry season of the rest of Panama, and the sands are infested with chitres, sand flies that bite without you feeling it and leave marks for days. In the evening, in Bocas Town, live music and parties that often move by boat to the nearby islands.",
      "luoghi": [
        {
          "nome": "Isla Colón and Bocas Town",
          "testo": "The main town of the archipelago, with colourful wooden houses on stilts, hostels and nightlife.",
          "come": "Arrive by water taxi from Almirante or by plane from Panama City.",
          "quando": "Evening, for live music and parties.",
          "tempo": "Half a day",
          "lat": 9.3386,
          "lng": -82.2404
        },
        {
          "nome": "Cayo Zapatilla",
          "testo": "The uninhabited islets of Cayos Zapatilla, inside Isla Bastimentos National Marine Park, created in 1988, with white sand and forest. Often the best stop on boat tours.",
          "come": "With a boat tour from Bocas Town; park entry extra.",
          "quando": "Morning, with calm sea.",
          "tempo": "Half a day",
          "consiglio": "Trips to the outer cayos are cancelled in rough sea: factor this in.",
          "costo": "Marine park fee about 10 USD cash (about €9), if not included in the tour.",
          "lat": 9.2655,
          "lng": -82.0552
        },
        {
          "nome": "Starfish Beach",
          "testo": "The starfish beach: you see them in shallow water near the shore, and the name keeps its promise.",
          "come": "Stop on boat tours or by water taxi.",
          "quando": "Morning.",
          "tempo": "Short stop",
          "consiglio": "Do not touch or take the starfish out of the water.",
          "lat": 9.4048,
          "lng": -82.3255
        },
        {
          "nome": "Cayo Coral and Isla Bastimentos",
          "testo": "Snorkelling in shallow water at Cayo Coral. Isla Bastimentos has the national marine park and Red Frog Beach, reached by water taxi.",
          "come": "Boat tour from Bocas Town.",
          "quando": "Morning.",
          "tempo": "Half a day",
          "lat": 9.2433,
          "lng": -82.1449
        },
        {
          "nome": "Red Frog Beach",
          "testo": "A long beach on the Atlantic side of Isla Bastimentos, with golden sand and forest behind. It is named after the tiny red poison frogs living in the undergrowth. The sea is often rough, better for surfing than swimming.",
          "come": "Water taxi from Bocas Town to the dock, then a short trail through the forest.",
          "quando": "Morning, when the sea is calmer.",
          "tempo": "Half a day",
          "lat": 9.3447,
          "lng": -82.1695,
          "consiglio": "Strong currents: swim only where others swim, and never alone."
        },
        {
          "nome": "Playa Bluff",
          "testo": "The wave beach on the Atlantic side of Isla Colón: kilometers of almost empty sand, powerful breakers and turtles nesting in season. It is the place for surfing, not for a quiet swim.",
          "come": "By taxi or bike from Bocas Town along the coast road.",
          "quando": "Morning; swim only when the sea is calm.",
          "tempo": "Half a day",
          "lat": 9.3991,
          "lng": -82.2453,
          "consiglio": "During turtle nesting, no lights on the beach at night."
        },
        {
          "nome": "Boca del Drago",
          "testo": "The northwest corner of Isla Colón, with calm, clear water, palms and a few seafood restaurants. From here Starfish Beach is a few minutes' walk.",
          "come": "Bus or taxi from Bocas Town across the island, or by boat on tours.",
          "quando": "Morning, before the tour boats arrive.",
          "tempo": "Half a day",
          "lat": 9.4144,
          "lng": -82.331
        },
        {
          "nome": "Isla Carenero",
          "testo": "The island facing Bocas Town, a couple of minutes away by boat: over-water lodgings, a few restaurants and a path around it. Off its point breaks a wave known to surfers.",
          "come": "Water taxi from Bocas Town, at any time of day.",
          "quando": "Afternoon and dinner, with views of Bocas Town's lights.",
          "tempo": "2-3 hours",
          "lat": 9.3466,
          "lng": -82.2318
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: boat tour to Cayo Zapatilla, Starfish Beach, Cayo Coral",
            "Afternoon: rest in Bocas Town",
            "Evening: live music"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: tour of the cayos",
            "Day 2: Red Frog Beach on Bastimentos and an evening boat ride to nearby islands"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Day 1: arrival, a walk around Bocas Town, dinner on Isla Carenero",
            "Day 2: cayes tour with Cayo Zapatilla, Cayo Coral and Dolphin Bay",
            "Day 3: Boca del Drago and Starfish Beach in the morning, Playa Bluff in the afternoon"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Bocas Town",
          "perChi": "social life",
          "testo": "Hostels, bars and restaurants, noisy. People who almost always stay longer than planned."
        },
        {
          "nome": "Bastimentos and Carenero",
          "perChi": "quiet",
          "testo": "Few services, more nature and silence."
        },
        {
          "nome": "Isla Colón outside town",
          "perChi": "surfing and nature",
          "testo": "Along the road to Playa Bluff or towards Boca del Drago: houses between forest and sea, quiet evenings, but you need a bike or taxi for everything."
        }
      ],
      "sapori": [
        {
          "nome": "Coconut fish",
          "testo": "Caribbean dish with coconut milk and fish."
        },
        {
          "nome": "Rondón",
          "testo": "Fish, plantain and yuca stew in coconut milk."
        },
        {
          "nome": "Patacones",
          "testo": "Fried plantain with ceviche or cheese."
        },
        {
          "nome": "Seafood",
          "testo": "Crabs and lobster, in season and in seaside restaurants."
        }
      ],
      "attenzioni": [
        "Bocas has its own microclimate and rains, not the dry season of the rest of Panama.",
        "Chitras, sandflies that bite without you noticing and leave marks for days, infest the beaches: repellent.",
        "Trips to the outer cayos are cancelled when the sea is rough.",
        "Arriving overland from Costa Rica, at Guabito they may ask for an onward ticket out of Panama and proof of at least 1,000 USD or a credit card. Panama is one hour ahead of Costa Rica, and the border offices close in the late afternoon: better to cross in the morning."
      ],
      "gite": [
        {
          "nome": "Dolphin Bay",
          "distanza": "about 11 km south of Bocas Town",
          "come": "By boat, usually as the first stop of the cayes tour.",
          "testo": "A sheltered bay among the mangroves where a group of bottlenose dolphins lives, watched from the boat. Boats should keep their distance and their engines low."
        },
        {
          "nome": "Old Bank (Isla Bastimentos)",
          "distanza": "a few minutes by water taxi from Bocas Town",
          "come": "Water taxi from the Bocas Town dock.",
          "testo": "Bastimentos' Afro-Caribbean village, with wooden houses over the water and a community speaking Guari-Guari, an English-based creole. From here a trail crosses the island to Wizard Beach."
        }
      ],
      "faq": [
        {
          "domanda": "How many days do you need in Bocas del Toro?",
          "risposta": "Three days for the cayes tour, Bastimentos and Boca del Drago; many stay five, also to keep a spare day if the sea cancels trips."
        },
        {
          "domanda": "Bocas del Toro or San Blas?",
          "risposta": "Bocas is lively, with hostels, bars, surf and services; San Blas is remote and basic, with the prettiest islands and the Guna community. They are different experiences and many do both."
        },
        {
          "domanda": "When is the best time to go?",
          "risposta": "Bocas has its own climate: September-October and February-March are often the sunniest months, while the dry season of the rest of Panama is not guaranteed here."
        },
        {
          "domanda": "How do you get around the islands?",
          "risposta": "By water taxi, leaving from the Bocas Town docks for a few dollars each way. On Isla Colón there are also buses, taxis and rental bikes."
        },
        {
          "domanda": "What are chitras?",
          "risposta": "Tiny sandflies living on the beaches that bite unnoticed, leaving marks that itch for days. Use repellent and wear long clothes at sunset."
        },
        {
          "domanda": "Can you get there from Boquete without going via Panama City?",
          "risposta": "Yes: direct shuttles from Boquete with the water taxi included, or a bus from David to Almirante and then a boat to Bocas Town, about half an hour. It takes a few hours in all."
        }
      ],
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
    comeArrivare: "From Panama City the Air Panama domestic flight to David leaves from Albrook airport, in the city, not Tocumen, and takes about an hour; book it ahead. From David to Boquete it is about 40 minutes, on frequent buses from the main terminal or by taxi, on a road climbing gently into the mountains. Alternatively there is the overnight bus from the capital, 6-7 hours. Towards Bocas del Toro there are direct shuttles with the water taxi included, or the bus from David to Almirante across the Cordillera.",
    comeSpostarsi: "Frequent local buses between David and Boquete; a rental car is handy for the fincas and trails outside town.",
    periodoMigliore:
      "December-April for the Barú climb with clear skies; the bajareque, the fine drizzle typical of the area, can appear in any season",
    costi: "Guided Barú climb 50-90 USD per person (about €43-77); coffee farm tour about 35-45 USD (about €30-39). Budget: about €40-55 a day with a hostel in town, fondas and buses. Mid-range: €90-140 with a hotel or hillside lodge and one tour a day. High: over €200 with a lodge among the coffee and private guides.",
    erroriDaEvitare: [
      "Climbing Barú without winter clothing: you reach the summit before dawn, with wind and temperatures near freezing",
      "Expecting the view of the two oceans to be guaranteed: it only happens with a clear sky, typically in the dry months",
    ],
    miaEsperienza:
      "We got there from San Blas via Panama City and the flight to David, and after the humid heat of the islands Boquete was a physical relief: you sleep with the window open and no fan, something that almost never happens in the rest of the trip. We did the tour of a coffee finca with tasting, and this is where you taste Geisha for a fraction of what it costs elsewhere. The next night we set out around midnight for Barú: eight miles (thirteen kilometers) of dirt track each way, in the dark, with the cold increasing, to reach the 3,475-meter summit before dawn. The view of the two oceans together only comes with a completely clear sky, that is on a few good days even in the dry season; even without that luck, the night climb with the valleys lit up below is worth the effort. By late morning we were back in Boquete.",
      "luoghi": [
        {
          "nome": "Barú volcano",
          "testo": "The volcano of Chiriquí and the highest peak in Panama (3,475 m), from where on a clear day you see the Pacific and the Caribbean together, which happens rarely. Night climb for sunrise.",
          "come": "Start around midnight, on foot with a guide on a long, steep trail, or with 4x4 tours to the top.",
          "quando": "Sunrise, with completely clear skies, which means few good days even in the dry season.",
          "tempo": "Night-morning",
          "consiglio": "Without the view of two oceans, the night climb with the lit valleys below is still worth the effort. Bring warm layers.",
          "lat": 8.8089,
          "lng": -82.5424,
          "url": "https://miambiente.gob.pa/"
        },
        {
          "nome": "Sendero Los Quetzales",
          "testo": "A trail in Barú park, in the cloud forest between Boquete and Cerro Punta, on the flank of the volcano. It is a good place to look for the quetzal.",
          "come": "A trail of a few hours, with a guide or independently.",
          "quando": "Early morning, when birds are most active. The trail sometimes closes for bad weather or fallen trees (reopened in November 2025): check with MiAmbiente.",
          "tempo": "About 6 hours",
          "url": "https://miambiente.gob.pa/",
          "lat": 8.8465,
          "lng": -82.4897
        },
        {
          "nome": "Coffee finca tour",
          "testo": "A visit to a plantation with tasting, including Geisha, Boquete's prized coffee, at a fraction of the price elsewhere.",
          "come": "Half-day tour bookable in town.",
          "quando": "Morning.",
          "tempo": "2-3 hours",
          "consiglio": "Geisha can be tasted here at a fraction of what it costs elsewhere.",
          "costo": "About 35-45 USD per person (about €30-39), tasting included."
        },
        {
          "nome": "Lost Waterfalls",
          "testo": "A trail in the cloud forest of Los Naranjos, near Boquete, linking three waterfalls, each reached by a short detour.",
          "come": "By car or taxi from Boquete to the entrance; a trail of about 3.2 km, of moderate difficulty.",
          "quando": "By day, best in the morning.",
          "tempo": "Half a day",
          "url": "https://www.tourismpanama.com/blog/post/trails-and-waterfalls-to-enjoy-in-boquete/",
          "lat": 8.8419,
          "lng": -82.4785
        },
        {
          "nome": "Bajo Boquete and Parque Central",
          "testo": "The town center, on the floor of the Caldera River valley, with the square, the market, the cafés serving local coffee and the tour agencies. Cloud-covered mountains frame every street.",
          "come": "On foot; the town is small and flat.",
          "quando": "Morning, before the afternoon rain.",
          "tempo": "2 hours",
          "costo": "Free.",
          "lat": 8.7765,
          "lng": -82.4323
        },
        {
          "nome": "El Pianista Trail",
          "testo": "A trail climbing a narrow valley along a stream, crossing it several times on small bridges, through the cloud forest above Boquete. The lower part is easy; higher up it gets steep and muddy.",
          "come": "Taxi from Boquete to the trailhead, in the Palo Alto area.",
          "quando": "Early morning.",
          "tempo": "2-4 hours",
          "lat": 8.817,
          "lng": -82.4232,
          "consiglio": "Hiking shoes and a rain jacket: the bajareque drizzle arrives without warning."
        },
        {
          "nome": "Mi Jardín es su Jardín",
          "testo": "The garden of a private villa on the edge of town, open to visitors: flowerbeds, colorful sculptures and manicured lawns, in the cool climate that lets flowers grow year-round in Boquete.",
          "come": "On foot or by taxi from Bajo Boquete, heading up towards Volcancito.",
          "quando": "Daytime, in sunshine.",
          "tempo": "30-45 minutes",
          "lat": 8.7885,
          "lng": -82.4376
        },
        {
          "nome": "Cerro Punta",
          "testo": "One of Panama's highest farming villages, on the far side of Barú: fields of potatoes, strawberries and flowers on steep slopes, cold air and greenhouses everywhere. It is the end of the Los Quetzales Trail and the gateway to La Amistad International Park.",
          "come": "By car around the volcano via Volcán, or on foot along the Los Quetzales Trail.",
          "quando": "Morning, before the clouds roll in.",
          "tempo": "Half a day",
          "lat": 8.8526,
          "lng": -82.5736
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Coffee finca tour with tasting",
            "Afternoon: Lost Waterfalls or a stroll around town"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: coffee and rest (Boquete is cool)",
            "Day 2: Sendero Los Quetzales in the morning, night climb of Barú"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Day 1: coffee",
            "Day 2: Sendero Los Quetzales",
            "Day 3: Barú at dawn, then rest"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Boquete",
          "perChi": "services and life",
          "testo": "Restaurants, tours, hotels; cooler than the rest of Panama, you sleep with the window open."
        },
        {
          "nome": "Surroundings and fincas",
          "perChi": "nature and quiet",
          "testo": "Lodges among coffee and forest, far from services."
        },
        {
          "nome": "David",
          "perChi": "travelers in transit",
          "testo": "The lowland city with the airport and bus terminal: hot and unremarkable, useful only for a night before a flight or a dawn bus."
        }
      ],
      "sapori": [
        {
          "nome": "Geisha coffee",
          "testo": "The prized coffee of the area, to taste at a finca or in a Boquete café."
        },
        {
          "nome": "Sancocho",
          "testo": "Chicken soup with yuca and coriander."
        },
        {
          "nome": "Trout",
          "testo": "Farmed in highland rivers, in restaurants of the area."
        },
        {
          "nome": "Strawberries and highland vegetables",
          "testo": "Products of the Boquete markets."
        }
      ],
      "attenzioni": [
        "Barú is climbed at night: warm layers, torch and guide. Panama's mountain trails are poorly marked, phones often have no signal and hikers have gone missing: never alone.",
        "The view of two oceans from the summit is only possible with fully clear skies, on few good days.",
        "Rain and fog can change plans: keep a day in hand."
      ],
      "gite": [
        {
          "nome": "Caldera hot springs",
          "distanza": "about 15 km south of Boquete",
          "come": "By car or taxi to Caldera village, then the last stretch on a dirt track and on foot.",
          "testo": "Small pools of volcanic hot water by the river, among the fields. They are rustic, with no facilities, and you alternate them with a dip in the cold river."
        },
        {
          "nome": "Gulf of Chiriquí and Boca Chica",
          "distanza": "on the Pacific coast, beyond David",
          "come": "By car or on a day tour, then a boat to the marine park islands.",
          "testo": "The Gulf of Chiriquí national marine park, with forested islands and Pacific beaches, snorkeling and, roughly from July to October, passing humpback whales. It is the nearest sea to the highlands."
        }
      ],
      "faq": [
        {
          "domanda": "How many days do you need in Boquete?",
          "risposta": "Three days: one for coffee and the town, one for the Los Quetzales Trail or the Lost Waterfalls, one for Barú, climbed at night and leaving you tired for the rest of the day."
        },
        {
          "domanda": "Is the Barú climb hard?",
          "risposta": "On foot, yes: about 13 km of rocky track each way, 10-12 hours round trip, with no water along the way and near-freezing temperatures at the top. A 4x4 cuts out much of the climb."
        },
        {
          "domanda": "Can you really see both oceans from the top of Barú?",
          "risposta": "Yes, but only with a perfectly clear sky, which happens on few days even in the dry season. Climb without counting on it."
        },
        {
          "domanda": "What is Geisha coffee?",
          "risposta": "A highly aromatic coffee variety that found its ideal home in the Boquete highlands and fetches record prices at auction. At the farms and town cafés you taste it for a fraction of the price elsewhere."
        },
        {
          "domanda": "What is the weather like in Boquete?",
          "risposta": "Cool all year, with evenings that call for a jacket. Afternoons are often rainy, and the bajareque, a fine drizzle, can come in any season: plan outdoor outings for the morning."
        }
      ],
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: "Rainbow over the green hills around Boquete, in the Chiriquí highlands, Panama",
    immagine: '/images/panama/boquete.jpg',
  },
]
