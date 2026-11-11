import type { Destinazione } from '@/lib/types'

export const destinazioniCostaRica: Destinazione[] = [
  {
    slug: 'san-jose',
    paeseSlug: 'costa-rica',
    ordine: 1,
    nome: 'San José',
    tipologia: ['città'],
    giorniConsigliati: "1 day on arrival, 1 on the way back",
    visitataPersonalmente: true,
    introduzione: "The arrival and return point of the trip. There's little to see, but it's a good first taste of Costa Rican food and social life.",
    percheAndarci: "As a logistical base on arrival and departure, and for the first and last casado of the trip.",
    cosaVedere: ["The Mercado Central", "The colonial neighborhood of Barrio Amón", "The National Museum"],
    cosaFare: [
      "Dinner at Jardín de Lolita, among food trucks and long tables with friends",
      "After-dinner drinks at Booze and Scoops and a dancing night at La Concha",
      "Farewell dinner at the Costa Rica Beer Factory",
    ],
    doveDormire:
      "Casa Boutique Las Orquídeas, where we slept both on arrival and on the last night. It's more a home than a hotel: family atmosphere, staff available at any hour, breakfast made to order. A few reviews mention thin walls and rooms that are a bit spartan. Mid-range.\n\nAlternatives: budget: Selina San José, Costa Rica Backpackers Hostel · mid-range: Hotel Presidente, Hotel Kekoldi (Barrio Amón) · luxury: Hotel Grano de Oro, Xandari Resort & Spa (Alajuela, near the airport).",
    doveMangiare: "Jardín de Lolita and Colonia Arepas y Bar on arrival; Costa Rica Beer Factory for the farewell dinner.",
    usciteSerali: "La Concha, in the La California neighborhood, which unlike the center is safe and lively in the evening too.",
    comeArrivare: "International flight to San José; Uber from the airport to the center (30 min-1h, about $14).",
    comeSpostarsi: "Uber, better than taxis: it costs about a third less and is safer.",
    periodoMigliore: "mid to late November",
    costi: "Uber airport-center about $14.",
    erroriDaEvitare: ["Avoid the city center after sunset: always go out with company or by Uber", "Exchange currency only at banks or authorized offices, never on the street"],
    miaEsperienza:
      "San José is only worth seeing in passing. The Mercado Central and the National Museum, the history one, are nice; otherwise, nothing special. Dinner at Jardín de Lolita, among the food trucks all of us sitting together, was the right evening to get back together after our scattered arrivals.",
      "luoghi": [
        {
          "nome": "Mercado Central",
          "testo": "The historic covered market in the centre, with food stalls, coffee, crafts and the sodas serving the casado of the day.",
          "come": "On foot from the centre.",
          "quando": "Morning and lunchtime, when the sodas are busiest.",
          "tempo": "1-1.5 hours",
          "consiglio": "Eating in a soda inside the market is the cheapest way to taste home cooking."
        },
        {
          "nome": "Barrio Amón",
          "testo": "A neighbourhood of wooden and brick houses built between the late 19th and early 20th centuries, former homes of the coffee barons, now with galleries, cafés and boutique hotels.",
          "come": "On foot, north of the centre.",
          "quando": "Morning, in good light.",
          "tempo": "1-2 hours",
          "consiglio": "Better not to walk around with a phone in hand, and in the evening taxis are preferable."
        },
        {
          "nome": "National Museum",
          "testo": "Housed in the former Cuartel Bellavista, with rooms on the country's history, archaeology and nature, opposite the Legislative Assembly.",
          "come": "On foot from the centre.",
          "quando": "Tuesday to Saturday 8:30am-4:30pm, Sunday 9am-4:30pm; closed on Mondays.",
          "tempo": "1-2 hours",
          "url": "https://www.museocostarica.go.cr/"
        },
        {
          "nome": "Teatro Nacional",
          "testo": "The neoclassical theatre opened in 1897 with Faust, paid for by a tax on coffee. Inside is the famous painting of the allegory of coffee and bananas.",
          "come": "On foot from the centre, on Plaza de la Cultura.",
          "quando": "Morning.",
          "tempo": "1 hour",
          "url": "https://www.teatronacional.go.cr/",
          "consiglio": "Book ahead if you want to attend a show."
        },
        {
          "nome": "Pre-Columbian Gold Museum",
          "testo": "The Banco Central museums, in underground halls beneath the Plaza de la Cultura, with the permanent exhibition on pre-Columbian gold and the numismatics museum.",
          "come": "On foot from the center: Plaza de la Cultura, between avenida 0 and 2, calle 5.",
          "quando": "Daily, 9am-4:30pm.",
          "tempo": "1-1.5 hours",
          "costo": "8,800 colones for foreigners, 6,950 for students (official website, 2026).",
          "url": "https://www.museosdelbancocentral.org/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Mercado Central and lunch at a soda",
            "Teatro Nacional and Plaza de la Cultura",
            "Barrio Amón in the afternoon",
            "Dinner in the centre"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1 as above",
            "Day 2: day trip to a volcano (Poás or Irazú), or coffee and the National Museum"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Barrio Amón and Otoya",
          "perChi": "those who want atmosphere",
          "testo": "Historic houses, cafés and a bit of nightlife; a neighbourhood to cross with care after sunset."
        },
        {
          "nome": "Near the airport (Alajuela)",
          "perChi": "late arrival or departure",
          "testo": "Handy hotels for early or late flights; little to see."
        }
      ],
      "sapori": [
        {
          "nome": "Chicken, rice and beans",
          "testo": "The food is ordinary, a mix of American and Central American, with lots of chicken, rice and beans. The fruit, on the other hand, is incredible."
        },
        {
          "nome": "Casado",
          "testo": "The dish of the day with rice, beans, salad, plantain and meat or fish. Eaten in sodas."
        },
        {
          "nome": "Gallo pinto",
          "testo": "Rice and beans sautéed with spices, for breakfast with eggs and sour cream."
        },
        {
          "nome": "Chifrijo",
          "testo": "Rice, beans, pork rind and pico de gallo, a bar snack."
        },
        {
          "nome": "Costa Rican coffee",
          "testo": "Bought in cooperatives and shops in the centre."
        }
      ],
      "attenzioni": [
        "San José has little for the tourist: it is a base for a couple of days, not a destination.",
        "Do not walk at night outside the tourist centre or in the neighbourhoods behind the station; use official taxis or apps.",
        "Pickpockets in markets and on buses: carry only what you need.",
        "Activities in Costa Rica are very expensive and you almost always pay in dollars: factor it into your budget.",
        "Safety gave me a good impression, but as everywhere in Central America, keep your eyes open."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "The center of San José, capital of Costa Rica",
    immagine: '/images/costa-rica/san-jose-stock.jpg',
  },
  {
    slug: 'puerto-viejo',
    paeseSlug: 'costa-rica',
    ordine: 2,
    nome: 'Puerto Viejo',
    tipologia: ['mare', 'natura', 'giungla'],
    giorniConsigliati: "2 days",
    visitataPersonalmente: true,
    introduzione: "The Caribbean coast of Costa Rica, explored by bicycle among Punta Uva, Playa Chiquita and Cocles, with Cahuita National Park a short way off.",
    percheAndarci: "For Punta Uva, the best beach for swimming in the Caribbean, and for the Cahuita tour, with sloths, the Bribrí community and traditional chocolate.",
    cosaVedere: ["Punta Uva", "Playa Chiquita and Cocles", "Cahuita National Park"],
    cosaFare: [
      "Bike rental from Rasta Lion to explore the coast",
      "Full Cahuita tour with the guide José (there's a dedicated experience page)",
      "Sunset happy hour at Cocles",
      "Pacuaré rafting (optional, to be arranged a week in advance)",
    ],
    doveDormire:
      "Escape Caribeño: beachfront bungalows with a pool and a much-photographed tropical garden, breakfast rated excellent by most guests. Some complain about the minimal room amenities and the price, already high, which doesn't include breakfast. Upper mid-range.\n\nAlternatives: budget: Cabinas Guaraná, Rocking J's · mid-range: Coco Loco Lodge · luxury: Le Cameleon Boutique Hotel, Cariblue Beach & Jungle Resort.",
    doveMangiare: "Madre Tierra, Koki Beach Restaurant (often a sloth crosses the roof in the evening), Amimodo.",
    usciteSerali: "Hot Rocks for live music, Selina for karaoke. At night it's better to always go out with company.",
    comeArrivare: "From San José it is about 4-4.5 hours by van or car, coming down through Braulio Carrillo Park towards Limón and then along the coast; a lunch stop halfway is a good idea. Public buses leave from San José's Gran Terminal del Caribe and take a little longer, stopping at Cahuita. From Limón it takes about an hour and a quarter. The international airport is Juan Santamaría (SJO); the Sixaola border with Panama is about 45 minutes away.",
    comeSpostarsi: "Rental bicycle, local tuk tuks for short trips (about $4 per person).",
    periodoMigliore: "all year, as in the tropics",
    costi: "Bike rental about 6$; Cahuita tour 50$ per person; Pacuaré rafting 112$; tuk-tuk about 4$ per person for short hops. Rough daily budget per person for 2026: low 50-80 € (cabinas or hostel, sodas, bike); mid 110-170 € (bungalow in Cocles, one tour a day, restaurant dinners); high from 250 € (jungle hotel at Punta Uva, rafting and private tours).",
    erroriDaEvitare: ["Book the Cahuita tour and the Pacuaré rafting at least a week in advance", "At night always go out with company, especially girls on their own"],
    miaEsperienza:
      "We cycled along the coast to Punta Uva, with howler monkeys calling from the trees overhead. Cahuita, really beautiful: there we saw a nurse shark, rays, several sloths, all kinds of little monkeys and more. The Bribri community, on the other hand, is a cultural experience, but don't picture it as something authentic deep in the jungle, at least not the way I experienced it. It's nice to see how they live, or used to live, and how chocolate is made, but it's not like the Mentawai, to give you an idea. In the area I also recommend the Jaguar Rescue Center. From here we then went to the Panama border.",
    luoghi: [
      {
        nome: "Cahuita National Park",
        testo: "A coastal trail between beach, forest and sea, with a coral reef offshore. You see sloths, howler and capuchin monkeys, raccoons, snakes and birds, and you swim at a beach inside the park.",
        come: "Main entrance at Playa Blanca, at the edge of Cahuita village, or from the Puerto Vargas sector. The trail follows the beach, partly with stream crossings.",
        quando: "Early morning, when animals are active.",
        tempo: "3-4 hours",
        costo: "Playa Blanca sector by donation; Puerto Vargas has a fixed fee. Full tour with a local guide 50 USD per person in cash, about 43 €, entry included",
        lat: 9.73214,
        lng: -82.84006,
        consiglio: "With a local guide you see many more animals: there is an experience page for the full tour with the guide José, to book at least a week ahead. We saw a nurse shark, rays, several sloths and monkeys.",
      },
      {
        nome: "Punta Uva and Playa Chiquita",
        testo: "Pale-sand beaches south of Puerto Viejo, backed by palms and forest. Punta Uva is the best swimming beach on Costa Rica's Caribbean coast, with usually calm water and a headland with a small rock arch.",
        come: "By bike along the coast from Puerto Viejo, about forty minutes' ride; rental in town.",
        quando: "Morning or late afternoon.",
        tempo: "Half a day",
        costo: "Free",
        lat: 9.64354,
        lng: -82.68501,
        consiglio: "Cycling along the coast is the simplest and most genuine way to get to know the Costa Rican Caribbean; along the road you hear howler monkeys.",
      },
      {
        nome: "Playa Cocles",
        testo: "A long, busy beach near town, with surf waves, lifeguards on some stretches and bars on the sand. At sunset it is the happy-hour spot.",
        come: "By bike or on foot from town, 5-10 minutes.",
        quando: "Late afternoon for happy hour.",
        tempo: "2-3 hours",
        costo: "Free",
        lat: 9.6478,
        lng: -82.7322,
        consiglio: "Currents are strong: swim where others are swimming.",
      },
      {
        nome: "Puerto Viejo centre and Salsa Brava",
        testo: "The seaside town, with sodas, reggae bars, shops and nightlife. Off the Salsa Brava reef breaks one of the most powerful waves in the country, best watched from the beach unless you are an expert surfer.",
        come: "On foot.",
        quando: "Evening; the wave is best between December and March.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 9.65725,
        lng: -82.75421,
        consiglio: "At night it is better to move around in company, especially women alone.",
      },
      {
        nome: "Playa Negra",
        testo: "The black volcanic-sand beach north of town, long and quiet, with beginner surf waves and forest right down to the sand.",
        come: "On foot or by bike from the centre, a few minutes towards Cahuita.",
        quando: "Early morning.",
        tempo: "1-2 hours",
        costo: "Free",
      },
      {
        nome: "Jaguar Rescue Center",
        testo: "A centre that rescues injured, sick or orphaned animals, mainly monkeys, sloths, birds and reptiles. It treats them and, when they can be freed, releases them into the forest, including from its La Ceiba release station.",
        come: "Between Cocles and Playa Chiquita, by bike or tuk-tuk from town.",
        quando: "Morning, on the guided tour.",
        tempo: "1.5-2 hours",
        orari: "Guided tours daily at 9.30 and 11.30 am; private tour at 2 pm, limited places",
        lat: 9.6428,
        lng: -82.72347,
        url: "https://www.jaguarrescue.foundation/en-us/",
        consiglio: "Entry is by guided tour only: book online on their website.",
      },
      {
        nome: "Ara Manzanillo",
        testo: "A reintroduction project for the great green macaw, the big parrot that had vanished from the Caribbean coast. On the afternoon visit you see free-flying macaws come to the feeding platforms in the forest.",
        come: "By car or bike towards Manzanillo; by online booking only.",
        quando: "Visits usually at 3 pm, by booking",
        tempo: "1.5 hours",
        lat: 9.62569,
        lng: -82.68491,
        url: "https://aramanzanillo.org/",
      },
      {
        nome: "Manzanillo and the Gandoca-Manzanillo refuge",
        testo: "The village where the coast road ends, at the gateway to the Gandoca-Manzanillo wildlife refuge: trails through forest, cliffs and small coves, with dolphins offshore and corals near the shore.",
        come: "By bike or car, about 13 km south of Puerto Viejo; the trail starts at the end of the village.",
        quando: "Morning, with a calm sea for snorkelling.",
        tempo: "Half a day",
        lat: 9.63162,
        lng: -82.6581,
        consiglio: "With a local guide the trail is safer and you see more animals.",
      },
      {
        nome: "Bribri community and chocolate workshop",
        testo: "A visit to an indigenous Bribri community, where the village leader explains traditional plants and shows the little poison frogs, followed by a traditional chocolate workshop with tasting. It is a cultural experience, but don't picture it as something authentic deep in the jungle.",
        come: "As part of the full Cahuita tour, in the afternoon, or on a dedicated tour.",
        quando: "Afternoon.",
        tempo: "2-3 hours",
        consiglio: "The tour usually ends at a waterfall at the end of a short but steep walk, where you can swim.",
      },
      {
        nome: "Pacuare River (rafting)",
        testo: "A descent of the Pacuare River, through gorges and forest, one of the five best rafting rivers in the world. Four hours on the water can feel long for first-timers, especially in the dry season, when the water is low.",
        come: "Organised tour on the way between San José and Puerto Viejo, to be booked at least a week ahead.",
        quando: "Best in the rainy season, with more water.",
        tempo: "Full day",
        costo: "112 USD per person, about 96 €",
        consiglio: "The river is far from the coast: it is a long day with many hours on the road.",
      },
      {
        nome: "Sixaola border, towards Panama",
        testo: "From Puerto Viejo or Cahuita you take a bus to Sixaola, cross the binational bridge over the Sixaola river, opened in 2021, and enter Panama at Guabito. From there you continue to Bocas del Toro.",
        come: "Local bus to Sixaola, then on foot over the bridge. After Guabito: bus or shared taxi to Changuinola and Almirante, then water taxi to Bocas Town (about 30 minutes).",
        quando: "Early morning: the border offices close in the late afternoon.",
        tempo: "Half a day to Bocas",
        costo: "Costa Rica land exit tax: 8 USD per person, online on the Banco de Costa Rica website or at the BCR kiosks at the border",
        lat: 9.5579,
        lng: -82.66978,
        consiglio: "Panama may ask for an onward ticket and proof of at least 1,000 USD or a credit card. Panama is one hour ahead of Costa Rica.",
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Morning: bike to Punta Uva",
        "Caribbean lunch",
        "Afternoon: Playa Cocles and happy hour",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: bike along the coast to Punta Uva, Jaguar Rescue Center in the morning",
        "Day 2: full Cahuita tour with a guide, Bribri community and chocolate",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above",
        "Day 3: Manzanillo and the Gandoca trail in the morning, Ara Manzanillo at 3 pm, dinner in town",
      ] },
    ],
    zone: [
      {
        nome: "Puerto Viejo centre",
        perChi: "social life and restaurants",
        testo: "Everything close, with cabinas, hostels and small hotels, but music in the evening, sometimes loud.",
        fascia: "40-100 €",
      },
      {
        nome: "Playa Cocles and Punta Uva",
        perChi: "peace and nature",
        testo: "Bungalows and cabins in the forest near the best beaches, but you need a bike or taxi for dinner.",
        fascia: "90-200 €",
      },
      {
        nome: "Manzanillo",
        perChi: "those who want the quietest village",
        testo: "A few simple places at the end of the road, next to the Gandoca refuge; there is little to do in the evening.",
      },
    ],
      "sapori": [
        {
          "nome": "Caribbean rice and beans",
          "testo": "Rice and beans cooked in coconut milk, with chicken or fish."
        },
        {
          "nome": "Coconut chicken and fish",
          "testo": "A Caribbean speciality, in small eateries in town."
        },
        {
          "nome": "Patacones and ceviche",
          "testo": "Fried plantain and fresh ceviche, near the beaches."
        },
        {
          "nome": "Pan bon",
          "testo": "Caribbean sweet bread with fruit, typical of these coasts."
        }
      ],
      "attenzioni": [
        "Thefts on beaches and from bungalows: leave nothing unattended.",
        "Sea and currents at Playa Cocles are strong: swim with caution.",
        "Caribbean weather is rainier and less predictable than the Pacific: leave some margin of days."
      ],
    gite: [
      {
        nome: "Bocas del Toro (Panama)",
        distanza: "half a day's travel via Sixaola",
        come: "Bus to Sixaola, the bridge on foot, then bus or shared taxi to Almirante and water taxi; better with a few nights.",
        testo: "Panama's Caribbean archipelago, with the stilt houses of Bocas Town, the beaches of Isla Bastimentos and the starfish of Playa Estrella.",
      },
      {
        nome: "Cahuita village",
        distanza: "about 16 km, 20 minutes",
        come: "By bus, taxi or bike.",
        testo: "The smallest, slowest village on the coast, with Cahuita's own Playa Negra, Caribbean sodas and the donation entrance to the park.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Puerto Viejo?",
        risposta: "Two days cover the coast by bike and Cahuita park; a third adds Manzanillo, Gandoca and Ara Manzanillo. The weather is unpredictable: a spare day helps.",
      },
      {
        domanda: "Which beach is best for swimming?",
        risposta: "Punta Uva, where the water is usually calm; Cocles and Playa Negra have waves and currents, better for surfing. Swim where others are swimming.",
      },
      {
        domanda: "Do you pay to enter Cahuita Park?",
        risposta: "At the Playa Blanca entrance, in Cahuita village, you leave a donation; the Puerto Vargas sector has a fixed fee. With a guided tour the entry is usually included.",
      },
      {
        domanda: "Is Puerto Viejo safe?",
        risposta: "By day yes, with normal care: theft on beaches and from bungalows is common. At night it is better to move around in company, especially women alone.",
      },
      {
        domanda: "How do you get from Puerto Viejo to Bocas del Toro?",
        risposta: "By bus to Sixaola, on foot over the bridge to Guabito, then bus or shared taxi to Almirante and a water taxi to Bocas Town. On exit you pay an 8-dollar tax, and Panama is one hour ahead.",
      },
      {
        domanda: "When to go to the Caribbean coast?",
        risposta: "You can go all year; September and October are often the driest months here, unlike the Pacific. The weather stays wetter and more unpredictable: leave some slack.",
      },
    ],
    esperienzeSlugs: ['tour-cahuita'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "The Caribbean beach of Punta Uva near Puerto Viejo, Costa Rica",
    immagine: '/images/costa-rica/puerto-viejo-stock.jpg',
  },
  {
    slug: 'tortuguero',
    paeseSlug: 'costa-rica',
    ordine: 3,
    nome: 'Tortuguero',
    tipologia: ['natura', 'giungla'],
    giorniConsigliati: "2 days",
    visitataPersonalmente: true,
    introduzione: "A small village with no roads for cars, reachable only by boat along the jungle canals, with kayaking at dawn among the mangroves.",
    percheAndarci: "For the boat ride, which is already one of the best transfers of the trip.",
    cosaVedere: ["The canals of Tortuguero, with crocodiles, caimans and birds", "Cerro Tortuguero, a panoramic hill with a view over the whole area"],
    cosaFare: [
      "Boat trip from Moín to Tortuguero (there's a dedicated experience page)",
      "Kayaking at dawn among the mangroves (there's a dedicated experience page)",
      "Cerro Tortuguero on your own",
      "Night excursion to see turtle nesting (seasonal, July-October)",
    ],
    doveDormire:
      "Hotel Icaco Tortuguero: convenient location, right in front of the park's beach, quick check-in and check-out. Some reviews find the rooms small and basic for the price. Lower mid-range.\n\nAlternatives: budget: La Casona de Tortuguero, Cabinas Miss Junie · mid-range: Aracari Garden Hotel · luxury: Tortuga Lodge & Gardens, Manatus Hotel.",
    doveMangiare: "Taylor's Place or Mi Niño in town; dinner included at the hotel.",
    comeArrivare: "No roads reach the village: you arrive only by boat or small plane. From Puerto Viejo or Limón you take a van to the port of Moín (about 1h30) and then 3 hours of navigation along the canals. From San José the most common route goes via Cariari to the La Pavona dock, where you take the boat to the village; many lodges sell the full transfer. Tortuguero's airstrip receives domestic flights from San José.",
    comeSpostarsi: "On foot: the village has no roads for cars. Kayak and boat for excursions.",
    periodoMigliore: "July-October for turtle nesting",
    costi: "Cerro Tortuguero 6$ boat + 3$ entry; night turtle walk about 40$ per person; national park around 15 dollars, bought online on the SINAC portal. Rough daily budget per person for 2026: low 60-90 € (cabinas in the village, sodas, shared trips); mid 130-190 € (hotel with dinner, kayak and guided trips); high from 250 € (canal lodge package with transfers, meals and tours).",
    erroriDaEvitare: [],
    miaEsperienza:
      "Tortuguero is gorgeous. It looks a lot like the Amazon and it's fantastic for nature. Even the boat ride from Moín, along jungle canals with crocodiles and monkeys on the banks, was one of the best transfers of the whole trip.",
    luoghi: [
      {
        nome: "Tortuguero canals",
        testo: "A network of mangrove and forest canals in the north-east, home to caimans, crocodiles, monkeys, herons and kingfishers. It looks a lot like the Amazon; you travel by boat with a low-impact engine, with a guide.",
        come: "Boat trip from the village with a guide and park ticket.",
        quando: "Early morning, for animals and light.",
        tempo: "2-3 hours",
        costo: "Park entry around 15 USD, about 13 €, online on the SINAC portal, plus boat and guide",
        lat: 10.4232,
        lng: -83.4967,
        url: "https://serviciosenlinea.sinac.go.cr/",
        consiglio: "The transfer from Moín, through canals and jungle, is one of the best of the trip and is an experience in itself.",
      },
      {
        nome: "Dawn kayak in the mangroves",
        testo: "Two hours of silent kayaking along the side canals, single or double, without an engine, to get close to birds and reptiles at the best time of day. There is a dedicated experience page.",
        come: "With the lodge's guide, leaving before dawn.",
        quando: "Dawn, back in time for breakfast.",
        tempo: "2 hours",
      },
      {
        nome: "Cerro Tortuguero",
        testo: "A volcanic hill north of the village, the only high ground in the area, with a short jungle climb to a viewpoint over canals, sea and forest.",
        come: "On your own: a short boat crossing from the village to the trailhead.",
        quando: "Morning, or the afternoon you arrive.",
        tempo: "1-1.5 hours",
        costo: "6 USD for the boat plus 3 USD entry, about 8 €",
        lat: 10.5851,
        lng: -83.5278,
        consiglio: "Bring water and repellent: in the damp forest there are lots of mosquitoes.",
      },
      {
        nome: "Turtle nesting",
        testo: "In season, green turtles nest on the beach at night: Tortuguero is one of the most important nesting sites in the Atlantic. You watch only with certified guides, in small groups and under strict rules.",
        come: "Night tour with a certified guide, booked in the village.",
        quando: "Night, usually between July and October; ask locally.",
        tempo: "2-3 hours",
        costo: "About 40 USD per person, about 34 €",
        consiglio: "Dark clothes, no lights or flash: follow the guide and keep your distance.",
      },
      {
        nome: "El Gavilán trail",
        testo: "The national park's walking trail, from the Cuatro Esquinas station south of the village, through flooded forest and along the beach. You see howler monkeys, frogs and birds; you often walk in mud.",
        come: "On foot from the village; rubber boots can be rented at the entrance.",
        quando: "Morning.",
        tempo: "1.5-2 hours",
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Tortuguero beach",
        testo: "The long dark-sand Caribbean beach in front of the village, where the turtles nest. It is lovely for walking, but not for swimming: strong currents and open sea.",
        come: "On foot from the village.",
        quando: "Sunset.",
        tempo: "1 hour",
        costo: "Free",
        lat: 10.54225,
        lng: -83.50175,
      },
      {
        nome: "Sea Turtle Conservancy visitor centre",
        testo: "The small museum of the organisation that has studied Tortuguero's turtles since the 1950s, with panels and videos on green turtles. A good way to understand what you will see at night.",
        come: "On foot, at the northern end of the village.",
        quando: "Afternoon, before the night tour.",
        tempo: "30-45 minutes",
        lat: 10.54715,
        lng: -83.50502,
      },
      {
        nome: "Tortuguero village",
        testo: "A village with no roads for cars, between the canal and the sea, with colourful wooden houses, souvenir shops and sodas. Everything is on foot; by the dock there is a small supermarket and a free drinking-water tank.",
        come: "On foot from the dock.",
        quando: "Afternoon and evening.",
        tempo: "1 hour",
        costo: "Free",
      },
    ],
    programmi: [
      { titolo: "Along the route from Moín", tappe: [
        "1h30 by van to the port of Moín",
        "3 hours by boat along the canals, with lunch on board",
        "Afternoon: village and Cerro Tortuguero",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: boat from Moín, village, Cerro Tortuguero, turtles in the evening in season",
        "Day 2: dawn kayak, breakfast, boat departure to Sarapiquí or La Pavona",
      ] },
      { titolo: "3 days", tappe: [
        "Day 1: arrival, village and beach at sunset",
        "Day 2: dawn kayak, El Gavilán trail, Sea Turtle Conservancy centre, night nesting in season",
        "Day 3: canals by boat in the morning, Cerro Tortuguero and departure",
      ] },
    ],
    zone: [
      {
        nome: "Canal lodges",
        perChi: "those who want to immerse themselves in nature",
        testo: "Packages with meals, excursions and transfers, isolated and quiet on the far bank of the canal. Often the only services are the lodge's own.",
        fascia: "da 250 € a persona in pacchetto",
      },
      {
        nome: "Tortuguero village",
        perChi: "budget and independence",
        testo: "Simple cabinas and small hotels, restaurants and guides on foot, with village noise.",
      },
      {
        nome: "Facing the park beach",
        perChi: "convenience",
        testo: "Hotels in the village facing the beach, handy for nesting tours and the trail entrance; rooms often small and basic.",
      },
    ],
      "sapori": [
        {
          "nome": "Caribbean casado",
          "testo": "Rice, beans, fish or coconut chicken."
        },
        {
          "nome": "River and sea fish",
          "testo": "Prawns and fresh fish, fried or grilled."
        },
        {
          "nome": "Tropical fruit",
          "testo": "Papaya, pineapple and bananas from the surroundings."
        },
        {
          "nome": "Gallo pinto",
          "testo": "For breakfast, with eggs and plantain."
        }
      ],
      "attenzioni": [
        "The region is very rainy all year: waterproof jacket and covers.",
        "In the park the nesting rules are strict: no lights, no flash, only with an authorised guide.",
        "Mosquitoes and humidity: repellent and light long-sleeved clothes."
      ],
    gite: [
      {
        nome: "Parismina",
        distanza: "south along the canals, by boat",
        come: "Private boat or a stop on the transfer from Moín.",
        testo: "An Afro-Caribbean village between the canal and the sea, with a community turtle-protection project and far fewer people than Tortuguero.",
      },
      {
        nome: "Barra del Colorado",
        distanza: "north along the canals, by boat",
        come: "Private boat from Tortuguero; arranged through the lodge.",
        testo: "The largest wildlife refuge on Costa Rica's Caribbean coast, towards the Nicaraguan border, with lagoons, flooded forest and tarpon sport fishing.",
      },
    ],
    faq: [
      {
        domanda: "How do you get to Tortuguero?",
        risposta: "Only by boat or plane: from Moín, near Limón, it is 3 hours by boat; from San José you go via Cariari and the La Pavona dock. Many lodges sell the full transfer.",
      },
      {
        domanda: "How many days do you need in Tortuguero?",
        risposta: "One night is enough for the boat journey, the Cerro and the dawn kayak; with two nights you add the park trail and, in season, the nesting without rushing.",
      },
      {
        domanda: "When can you see the turtles?",
        risposta: "Green turtles usually nest between July and October, but the season should be confirmed locally. Tours go out only at night with certified guides.",
      },
      {
        domanda: "Can you swim at Tortuguero?",
        risposta: "Not in the sea: strong currents and open-sea waves make swimming inadvisable. Many lodges have a pool.",
      },
      {
        domanda: "Do you need a package or can you go independently?",
        risposta: "You can go independently, arranging boat, cabinas and guides in the village. Lodge packages cost more but include transfers, meals and tours.",
      },
      {
        domanda: "What is the weather like in Tortuguero?",
        risposta: "It rains a lot all year, even in months that are dry elsewhere. Bring a waterproof jacket, cases for phone and camera, and light long-sleeved clothes.",
      },
    ],
    esperienzeSlugs: ['barca-tortuguero', 'kayak-tortuguero'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "A jungle canal leading to the village of Tortuguero, Costa Rica",
    immagine: '/images/costa-rica/tortuguero-stock.jpg',
  },
  {
    slug: 'sarapiqui',
    paeseSlug: 'costa-rica',
    ordine: 4,
    nome: 'Sarapiquí',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: "2 days",
    visitataPersonalmente: true,
    introduzione: "A lodge immersed in the forest, with rafting on the Sarapiquí River and a cooking class to learn how to prepare traditional dishes.",
    percheAndarci: "For rafting on the Sarapiquí, gentler and suitable even for beginners compared with the more extreme Pacuaré.",
    cosaVedere: ["The forest around the Epic Adventure Lodge", "The Cataratas Bajas del Toro (optional excursion)"],
    cosaFare: [
      "Rafting on the Sarapiquí River (there's a dedicated experience page)",
      "Cooking class included at the lodge (typically empanadas)",
      "Optional excursion to the Cataratas Bajas del Toro",
    ],
    doveDormire:
      "Epic Adventure Lodge, appreciated for its closeness to the river, the hearty breakfast and the warmth of the owners. The only sour note is small shortcomings, such as mosquito nets and towel hooks. Mid-range.\n\nAlternatives: budget: Hotel El Bambú, Perla Verde Hostel · mid-range: La Quinta de Sarapiquí Lodge · luxury: Sueño Azul Resort, Islas del Río.",
    doveMangiare: "The cooking class at the lodge, which also becomes dinner; Restaurante Mirador Tinamú.",
    comeArrivare: "1.5 hours by boat from Tortuguero plus 2.5 hours by van.",
    comeSpostarsi: "Private van; on foot at the lodge.",
    periodoMigliore: "all year, the Sarapiquí is steadier than the Pacuaré",
    costi: "Packed lunch for Bajos del Toro about $12 per person.",
    erroriDaEvitare: ["Stock up on drinks at the supermarket along the way before reaching the lodge"],
    miaEsperienza:
      "The cooking class at the lodge, with the handmade empanadas that then became our dinner, was a convivial moment different from the rest of the trip, slower and more genuine.",
      "luoghi": [
        {
          "nome": "Rafting on the Río Sarapiquí",
          "testo": "A river descent through rapids and forest. There is a dedicated experience card.",
          "come": "Organised tour from the lodge or from local operators, with guide and equipment.",
          "quando": "Morning.",
          "tempo": "Half a day"
        },
        {
          "nome": "Cooking class at the lodge",
          "testo": "A Costa Rican cooking lesson, typically hand-made empanadas that become dinner.",
          "come": "Included in the lodge package.",
          "quando": "Afternoon.",
          "tempo": "2 hours",
          "consiglio": "A convivial moment, slower and more real than the rest of the trip."
        },
        {
          "nome": "Lodge forest",
          "testo": "Trails in the forest around the lodge, with birds, frogs and monkeys.",
          "come": "On foot from the lodge with a guide.",
          "quando": "Dawn.",
          "tempo": "1-2 hours"
        },
        {
          "nome": "Catarata del Toro",
          "testo": "A waterfall dropping into an old volcanic crater, in the forest of Bajos del Toro, with four lookouts at the top. Optional trip.",
          "come": "By car or on a tour; it lies roughly halfway between San José airport and La Fortuna, on a paved road. No booking needed.",
          "quando": "Monday to Saturday 7am-5pm; closed on Sundays.",
          "tempo": "Half a day",
          "costo": "15 USD (official website, 2026).",
          "url": "https://www.catarata-del-toro.com/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: rafting",
            "Lunch at the lodge",
            "Afternoon: cooking class"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: rafting and cooking class",
            "Day 2: forest trails around the lodge, then transfer to Arenal"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lodge in the forest",
          "perChi": "those who want nature",
          "testo": "Isolated stays with activities included, but far from towns."
        }
      ],
      "sapori": [
        {
          "nome": "Empanadas",
          "testo": "Hand-made in the cooking class."
        },
        {
          "nome": "Casado",
          "testo": "The dish of the day with rice and beans."
        },
        {
          "nome": "Tropical fruit",
          "testo": "Pineapple and bananas from the region."
        },
        {
          "nome": "Coffee and cacao",
          "testo": "Grown in the area; to try at the lodges."
        }
      ],
      "attenzioni": [
        "Rafting: always wear the helmet and life jacket provided by the operator and follow the guide.",
        "The area is rainy and humid: raincoat and spare clothes.",
        "Mosquitoes and insects: repellent."
      ],
    esperienzeSlugs: ['rafting-sarapiqui'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "The rainforest around a lodge in Sarapiquí, Costa Rica",
    immagine: '/images/costa-rica/sarapiqui-stock.jpg',
  },
  {
    slug: 'arenal',
    paeseSlug: 'costa-rica',
    ordine: 5,
    nome: 'Arenal and La Fortuna',
    tipologia: ['natura', 'vulcani'],
    giorniConsigliati: "1 day",
    visitataPersonalmente: true,
    introduzione: "The Arenal volcano, the La Fortuna Waterfall and the free hot springs of El Chollín, far more authentic than the paid \"postcard\" spas.",
    percheAndarci: "For the free hot springs of El Chollín, one of the best and least \"postcard\" moments of the whole trip.",
    cosaVedere: ["The Arenal volcano", "The La Fortuna Waterfall", "The El Chollín hot springs"],
    cosaFare: [
      "Swim at the La Fortuna Waterfall (there's a dedicated experience page)",
      "Volcano trek at Mirador El Silencio (optional)",
      "Mistico Hanging Bridges (optional)",
      "Free hot springs of El Chollín",
      "Canyoning in the Lost Canyon (we did it: it's the activity I recommend most in La Fortuna)",
    ],
    doveDormire:
      "Hotel Campos Arenal: among the most cited strengths are the volcano view from the pool, the hearty breakfast and the convenient location. The recurring flaw is the dirt access path, slippery when it rains. Mid-range.\n\nAlternatives: budget: Arenal Backpackers Resort, Gringo Pete's · mid-range: Volcano Lodge & Springs · luxury: Nayara Springs, Tabacón Thermal Resort & Spa.",
    doveMangiare: "Nanku Restaurant with live music; Soda Víquez for traditional, inexpensive food; Spectacular Cantina (Mexican).",
    usciteSerali: "Selina or Lava Lounge.",
    comeArrivare: "From Sarapiquí it is about 1 hour 20 minutes by van. From San José and Juan Santamaría airport (SJO) it takes about 3 hours by car, via San Ramón or Ciudad Quesada; public buses leave from San José, often changing at Ciudad Quesada, and take longer. From Liberia airport (LIR) it is about 2.5-3 hours. To and from Monteverde you take the mountain road around the lake, about 3-3.5 hours, or the jeep-boat-jeep transfer across Lake Arenal.",
    comeSpostarsi: "Minivan at our disposal for the whole day.",
    periodoMigliore: "late afternoon for the hot springs",
    costi: "La Fortuna Waterfall 18-20$; combo tour 90-120$ per person; Lost Canyon canyoning 115-119$. Activities in La Fortuna are expensive: pick a few things done well. Rough daily budget per person for 2026: low 60-90 € (hostel, sodas, free El Chollín and the waterfall); mid 140-200 € (hotel with a volcano view, one activity a day); high from 300 € (thermal resort, canyoning and private tours).",
    erroriDaEvitare: ["There are no changing rooms at the El Chollín springs: river shoes, a swimsuit and a headlamp are enough, no towels"],
    miaEsperienza:
      "La Fortuna is nice, but a bit overtouristy. The activities are expensive, but really, really good, especially the canyoning, which we did and I recommend. The free hot springs of El Choyin, on a natural stretch of river, felt far more authentic to us than the paid hot springs in the area.",
    luoghi: [
      {
        nome: "La Fortuna Waterfall",
        testo: "A waterfall of about 70 metres in a forest gorge, with about 530 steps down and back up and a pool for swimming at the bottom. It is probably the most photographed waterfall in the country. There is a dedicated experience page.",
        come: "A few minutes by car or taxi from La Fortuna town, then steep stairs to the bottom.",
        quando: "In the morning, when it is less crowded.",
        tempo: "2 hours",
        costo: "20 USD for foreigners, about 17 € (2025); you pay even just for the viewpoint",
        orari: "Daily 7 am-5 pm",
        lat: 10.43919,
        lng: -84.66933,
        url: "https://www.cataratariofortuna.com/",
        consiglio: "The way back is all uphill: shoes with grip and water.",
      },
      {
        nome: "The free hot river at El Chollín",
        testo: "A stretch of the Tabacón river with naturally hot water and public access, a few steps from the thermal resorts. Not to be confused with El Choyín, a paid complex on the same river. It is one of the best and least postcard-like moments in the area.",
        come: "By car or taxi from La Fortuna; park on the road, often with an attendant, and walk a short way down to the river.",
        quando: "Late afternoon, or early morning: at weekends and on holidays it is packed.",
        tempo: "1-2 hours",
        costo: "Free",
        lat: 10.49145,
        lng: -84.72491,
        consiglio: "There are no showers, lockers or changing rooms: river shoes, swimwear and a headlamp in a dry bag, and no valuables left in the car.",
      },
      {
        nome: "Mistico hanging bridges",
        testo: "A trail of about 3.2 km in the forest near Arenal, with 16 bridges, 6 of them hanging; the highest pass about 45 metres above the forest. Some find it a little below expectations: with a guide you see many more animals.",
        come: "By car or taxi from La Fortuna; go alone or with a guide, who must be booked.",
        quando: "Early morning, for wildlife.",
        tempo: "2-3 hours",
        costo: "From 32 USD plus tax alone, from 44 USD with a guide, about 28-38 € (2026)",
        orari: "Daily from 6 am; last trail entry 3.50 pm",
        lat: 10.48805,
        lng: -84.75378,
        url: "https://www.misticopark.com/",
      },
      {
        nome: "Arenal Volcano National Park",
        testo: "The state park around the volcano, with trails over the 1992 lava flows, a huge ceiba tree and viewpoints over the cone and the lake. You cannot climb to the crater: the volcano has been quiet since 2010 but the summit stays closed.",
        come: "By car, about 30 minutes from La Fortuna towards the lake; tickets on the SINAC portal.",
        quando: "Morning, when the cone is more often clear of cloud.",
        tempo: "2-3 hours",
        lat: 10.46306,
        lng: -84.70306,
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Arenal 1968",
        testo: "A private reserve next to the national park, with trails through the forest and over the lava flow of the 1968 eruption, which destroyed the villages at the foot of the volcano. From the longest trail, about two hours, you see the cone and the lake together.",
        come: "By car or taxi from La Fortuna, on the road to the national park.",
        quando: "Early morning or late afternoon.",
        tempo: "2 hours",
        lat: 10.46641,
        lng: -84.73621,
        url: "https://www.arenal1968.com/",
      },
      {
        nome: "El Silencio viewpoint",
        testo: "A hike through the forest on the volcano's slopes to a viewpoint with excellent views of the cone. It is one of the three activities in La Fortuna's most common combo tour, together with the waterfall and the hot springs.",
        come: "On your own or as part of the 90-dollar combo tour with the waterfall and hot springs.",
        quando: "Morning, before clouds cover the volcano.",
        tempo: "2 hours",
        costo: "About 10 USD on its own, about 9 €",
      },
      {
        nome: "Canyoning in the Lost Canyon",
        testo: "Abseiling down waterfalls and rock walls in a forest gorge, with an operator who provides gear and transport. It is the activity I recommend most in La Fortuna: a real adrenaline rush, only with serious operators.",
        come: "Book with the operator, with hotel pick-up and lunch included.",
        quando: "In the morning, or early afternoon.",
        tempo: "Half a day",
        costo: "115-119 USD per person, about 100 €",
      },
      {
        nome: "Tabacón hot springs",
        testo: "The best-known thermal resort in the area, built on the hot Tabacón river, with pools and hot waterfalls in a tropical garden. Many resorts sell a day pass with dinner; it is expensive compared with the free river.",
        come: "By car or taxi, about 15 minutes from La Fortuna; day pass to be booked.",
        quando: "Evening, after a day of activities.",
        tempo: "3 hours",
        lat: 10.48781,
        lng: -84.72299,
        consiglio: "For simpler paid springs with a barbecue there are also the Termalitas del Arenal.",
      },
      {
        nome: "Lake Arenal and the Sangregado dam",
        testo: "The country's largest artificial lake, west of the volcano, created by the Sangregado dam. From the dam and the lakeshore road come the widest views of Arenal, and in the evening you often see coatis by the roadside.",
        come: "By car, about 30 minutes from La Fortuna; you drive across the dam.",
        quando: "Sunset.",
        tempo: "1 hour",
        costo: "Free",
        lat: 10.4752,
        lng: -84.76079,
        consiglio: "Don't feed the coatis, even if they come up to the cars.",
      },
      {
        nome: "La Fortuna town",
        testo: "The town at the foot of the volcano, with the church and the central park from which you see the cone when it is clear of cloud. It has agencies, sodas and restaurants for every budget and is the base for all excursions.",
        come: "On foot.",
        quando: "Evening, for dinner.",
        tempo: "1 hour",
        costo: "Free",
        lat: 10.47144,
        lng: -84.64472,
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Morning: La Fortuna Waterfall",
        "Lunch in La Fortuna",
        "Afternoon: El Silencio viewpoint or Mistico hanging bridges",
        "Late afternoon: free hot river at El Chollín",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: waterfall, hanging bridges and hot springs",
        "Day 2: Lost Canyon canyoning in the morning, national park or Arenal 1968 in the afternoon, sunset at the dam",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above",
        "Day 3: Río Celeste in Tenorio Volcano National Park, or an evening at Tabacón",
      ] },
    ],
    zone: [
      {
        nome: "La Fortuna",
        perChi: "services and tours",
        testo: "The town has restaurants, agencies and hotels, many with a volcano view; everything on foot or a few minutes by taxi.",
        fascia: "70-150 €",
      },
      {
        nome: "Volcano road",
        perChi: "hot springs and luxury",
        testo: "Resorts with thermal pools and forest lodges between La Fortuna and the lake; you need a car to eat out.",
        fascia: "150-280 €",
      },
      {
        nome: "El Castillo",
        perChi: "those seeking quiet",
        testo: "A village on the south side of the lake, with cabins and small lodges facing the volcano; the road is partly unpaved.",
      },
    ],
      "sapori": [
        {
          "nome": "Casado",
          "testo": "Rice, beans, salad and meat or fish."
        },
        {
          "nome": "Gallo pinto",
          "testo": "For breakfast, with eggs."
        },
        {
          "nome": "Olla de carne",
          "testo": "Beef stew with yuca, plantain and corn."
        },
        {
          "nome": "Lake fish",
          "testo": "Fried tilapia, in restaurants of the area."
        }
      ],
      "attenzioni": [
        "The staircase to the La Fortuna waterfall is long and the way back is all uphill.",
        "Paid hot springs are expensive: consider the free ones.",
        "Canyoning: very adrenaline-fuelled, only with serious operators. We did it and it's great.",
        "La Fortuna is a bit overtouristy and activities are expensive: pick a few things and do them well."
      ],
    gite: [
      {
        nome: "Río Celeste",
        distanza: "about 1.5-2 hours",
        come: "By car or on an organised tour; entry to Tenorio Volcano National Park to be booked on the SINAC portal.",
        testo: "The milky-blue river in the Tenorio forest, with a waterfall and the spot where two streams meet and change colour. Swimming is not allowed in the park.",
      },
      {
        nome: "Bajos del Toro",
        distanza: "about 1.5-2 hours",
        come: "By car; the area closes in the late afternoon, so arrive by early afternoon.",
        testo: "Costa Rica's «waterfall capital», with the Catarata del Toro and the twin falls in a valley between two national parks. It is quieter than La Fortuna.",
      },
      {
        nome: "Caño Negro",
        distanza: "about 1.5-2 hours north",
        come: "Day tour with a boat trip on the Río Frío, or by car to the village.",
        testo: "A wetland refuge near the Nicaraguan border, with caimans, herons, spoonbills and kingfishers. The dry season concentrates the birds in the lagoons.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in La Fortuna?",
        risposta: "One day covers the waterfall, a hike and the hot springs; two days add canyoning, the national park and the lake. A third day is for Río Celeste.",
      },
      {
        domanda: "Are there free hot springs in La Fortuna?",
        risposta: "Yes, the public stretch of the Tabacón river at El Chollín, with no facilities. Resorts such as Tabacón or Termalitas del Arenal charge, with pools, showers and dinner.",
      },
      {
        domanda: "Can you climb Arenal volcano?",
        risposta: "No, the summit is closed. You walk on the slopes and old lava flows in the national park, at Arenal 1968 or at the El Silencio viewpoint.",
      },
      {
        domanda: "How much is La Fortuna Waterfall?",
        risposta: "20 dollars for foreigners (2025), open daily 7 am-5 pm. There are about 530 steps down and back.",
      },
      {
        domanda: "La Fortuna or Monteverde?",
        risposta: "They are different and most people do both: La Fortuna has the volcano, waterfalls and hot springs; Monteverde the cloud forest, night walks and the longest zip lines. They are about 3-3.5 hours apart by road.",
      },
      {
        domanda: "When can you see the volcano without clouds?",
        risposta: "Usually early in the morning and in the dry season, December to April. The rest of the year the cone is often covered but clears at times.",
      },
    ],
    esperienzeSlugs: ['cascata-fortuna-termales'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "The Arenal volcano seen from La Fortuna, Costa Rica",
    immagine: '/images/copertine/costa-rica-360.jpg',
  },
  {
    slug: 'monteverde',
    paeseSlug: 'costa-rica',
    ordine: 6,
    nome: 'Monteverde',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: "2 days",
    visitataPersonalmente: true,
    introduzione: "The Monteverde cloud forest, with a coffee plantation, a night walk to see wildlife and some of the best ziplines in the country.",
    percheAndarci: "For the cloud forest and for the ziplines, considered among the best in Costa Rica and longer than those in La Fortuna.",
    cosaVedere: ["The Monteverde cloud forest", "A coffee plantation"],
    cosaFare: [
      "Visit to a coffee plantation with tasting",
      "Night walk in the cloud forest (there's a dedicated experience page)",
      "Adventure zipline (there's a dedicated experience page)",
      "Birdwatching at dawn (optional, guide Jason)",
    ],
    doveDormire:
      "Hotel Jardines de Monteverde: well-kept gardens, lots of wildlife to watch without leaving the property, staff always described as kind. Some more recent reviews mention rooms and bathrooms that are a bit dated. Lower mid-range.\n\nAlternatives: budget: Pensión Santa Elena, Monteverde Backpackers · mid-range: Cloud Forest Lodge · luxury: Hotel Belmar, Monteverde Lodge & Gardens.",
    doveMangiare: "Tree House (supermarket next door); Tico y Rico, The Green Restaurant, Sabor Tico.",
    comeArrivare: "From La Fortuna it is about 3-3.5 hours by van on slow, winding mountain roads, or the jeep-boat-jeep transfer across Lake Arenal. From San José and Juan Santamaría airport it takes about 3.5-4 hours: you leave the Inter-American Highway and the last kilometres climb to Santa Elena, at about 1,400 metres. Public buses run from San José and Puntarenas. Towards the Pacific and Uvita, allow up to 4 hours.",
    comeSpostarsi: "Private van for excursions.",
    periodoMigliore: "early morning for birdwatching and ziplining",
    costi: "Night walk (Kinkajou Night Walk) 28$ per person; zip line about 60$ per person; birdwatching 50$ per person. Rough daily budget per person for 2026: low 60-90 € (hostel or guesthouse in Santa Elena, sodas, a reserve without a guide); mid 130-190 € (hotel with a garden, guided reserve walk, zip line or night walk); high from 280 € (forest lodge, private tours).",
    erroriDaEvitare: ["Don't be afraid to ask the guide to cut the night walk short if it goes on too long: not everyone likes the length equally"],
    miaEsperienza:
      "Monteverde has the giant zip line, and it's awesome. The night walk in the cloud forest was great too, with wildlife that only comes out after sunset, although some may find the length (1h30) a bit long.",
    luoghi: [
      {
        nome: "Monteverde Cloud Forest Reserve",
        testo: "High-altitude rainforest wrapped in cloud, with thousands of species of plants, birds and insects; it is the area's historic reserve, where people look for the quetzal. You walk on trails and a hanging bridge above the canopy.",
        come: "By taxi or shuttle from the town of Santa Elena, on a slow mountain road. Since 2026 entry is by time slot, booked online. Better with a guide to spot the animals.",
        quando: "Early morning for birds. The mist is part of the landscape.",
        tempo: "3-4 hours",
        orari: "Forest trails 7.30 am-4 pm; night walk at 6 pm",
        lat: 10.30345,
        lng: -84.78771,
        url: "https://cloudforestmonteverde.com/",
      },
      {
        nome: "Santa Elena Reserve",
        testo: "A community reserve north of town, slightly higher and less visited than Monteverde, with 12 km of trails and an observation tower on the Youth Challenge trail. On clear days you can see Arenal in the distance.",
        come: "Shuttle or taxi from Santa Elena, about 20 minutes; go alone or with a booked guide.",
        quando: "Morning.",
        tempo: "2-4 hours",
        lat: 10.34285,
        lng: -84.79305,
        url: "https://reservasantaelena.org/",
      },
      {
        nome: "Curi-Cancha Reserve",
        testo: "A private reserve between pasture and forest, with about 8 km of easy trails, much loved by birdwatchers: it is one of the best places for quetzals and motmots. Entries are limited and it is less crowded.",
        come: "Taxi from Santa Elena, on the road towards the Monteverde reserve; night walks too.",
        quando: "At dawn, for the birds.",
        tempo: "2-3 hours",
        lat: 10.30661,
        lng: -84.80742,
        url: "https://www.reservacuricancha.com/",
        consiglio: "For dawn birdwatching you can book a private guide, about 50 dollars per person.",
      },
      {
        nome: "Children's Eternal Rainforest, Bajo del Tigre",
        testo: "The largest private reserve in the country, born from fundraising by children around the world. The Bajo del Tigre sector, by the road, has short trails in a lower, drier forest and a night walk in the evening.",
        come: "On foot or by taxi from Santa Elena, a few minutes.",
        quando: "Afternoon, or the evening for the night walk.",
        tempo: "1.5-2 hours",
        lat: 10.30572,
        lng: -84.81922,
      },
      {
        nome: "Night walk in the forest",
        testo: "An evening walk with a guide and torch to see frogs, insects, tarantulas, sloths and other animals that only move after dark. The Kinkajou Night Walk Tour is considered the best. There is a dedicated experience page.",
        come: "Departure after sunset with a guide; bring a torch and closed shoes.",
        quando: "Evening, from 5.30-6 pm.",
        tempo: "1.5 hours",
        costo: "Kinkajou Night Walk 28 USD per person, about 24 €",
        consiglio: "Some find it long: you can ask the guide to keep it to between an hour and a quarter and an hour and a half. Bring a jacket.",
      },
      {
        nome: "Zip-line adventure",
        testo: "A course of cables above the forest. Monteverde's are among the best in the country and longer than La Fortuna's: 100% Aventura states on its website the longest cable in Costa Rica, 1,590 metres, over 10 lines. There is a dedicated experience page.",
        come: "Book with the operator, with hotel transfer; two sessions, at dawn and late morning.",
        quando: "Morning.",
        tempo: "3 hours",
        costo: "About 60 USD; 100% Aventura from 72 USD per person (2026), about 52-62 €",
        url: "https://www.aventuracanopytour.com/",
        consiglio: "If after the third line you don't feel up to it, you can stop and get a 75% refund.",
      },
      {
        nome: "Selvatura and Sky Adventures hanging bridges",
        testo: "Two private parks north of Santa Elena with trails of hanging bridges at canopy height, where you see epiphytes, orchids and canopy birds up close. Sky Adventures also has a cable car; both combine the bridges with zip lines.",
        come: "Park shuttle or taxi from Santa Elena, 15-20 minutes.",
        quando: "Morning, before the afternoon clouds.",
        tempo: "2 hours",
      },
      {
        nome: "Coffee farm",
        testo: "A visit to a farm with a tasting and an explanation of the process, from plant to cup. Some tours add chocolate and sugar cane.",
        come: "Tour booked locally, with transport.",
        quando: "Early afternoon: book the slot in advance.",
        tempo: "2 hours",
      },
      {
        nome: "Santa Elena",
        testo: "The town where you sleep and eat, with sodas, agencies, supermarkets and the departure point for reserve shuttles. It is small and walkable, but evenings are cold and often rainy.",
        come: "On foot.",
        quando: "Evening, for dinner.",
        tempo: "1 hour",
        costo: "Free",
        lat: 10.3175,
        lng: -84.8241,
      },
    ],
    programmi: [
      { titolo: "1 day", tappe: [
        "Morning: Monteverde Reserve with a guide",
        "Lunch in Santa Elena",
        "Afternoon: coffee farm",
        "Evening: night walk",
      ] },
      { titolo: "2 days", tappe: [
        "Day 1: coffee in the afternoon and night walk",
        "Day 2: dawn birdwatching at Curi-Cancha, then zip line in late morning",
      ] },
      { titolo: "3 days", tappe: [
        "Days 1-2 as above",
        "Day 3: Monteverde or Santa Elena reserve in the morning, hanging bridges in the afternoon",
      ] },
    ],
    zone: [
      {
        nome: "Santa Elena",
        perChi: "services and budget",
        testo: "Restaurants, agencies and hotels on foot; for the reserves you need a taxi or shuttle.",
        fascia: "50-110 €",
      },
      {
        nome: "Cerro Plano",
        perChi: "halfway",
        testo: "The road between Santa Elena and the Monteverde reserve, with hotels set in gardens, Bajo del Tigre and Curi-Cancha minutes away.",
        fascia: "80-170 €",
      },
      {
        nome: "Forest lodges",
        perChi: "those seeking nature",
        testo: "Lodges and cabins on the edge of the forest, more isolated and pricier, often with their own trails.",
        fascia: "da 200 €",
      },
    ],
      "sapori": [
        {
          "nome": "Casado",
          "testo": "The dish of the day with rice, beans and chicken or fish."
        },
        {
          "nome": "Monteverde coffee",
          "testo": "Grown in the highlands, with tastings at the fincas."
        },
        {
          "nome": "Trout",
          "testo": "Farmed in the area, in various restaurants."
        },
        {
          "nome": "Cheese and sweets",
          "testo": "Local dairy products."
        }
      ],
      "attenzioni": [
        "It is cold and rains in the evening: bring a waterproof jacket and a sweater.",
        "The mountain roads to the reserve are narrow and slow: allow time, and book your entry slot online.",
        "For birds and wildlife you need a guide: alone you see much less."
      ],
    gite: [
      {
        nome: "Tigre Waterfalls",
        distanza: "nearby, with organised transport",
        come: "Organised hike with transport and lunch included.",
        testo: "A trail through pasture and forest with several waterfalls and hanging bridges, wilder than the reserves; an alternative to the coffee farm in the afternoon.",
      },
      {
        nome: "Lake Arenal and La Fortuna",
        distanza: "about 3 hours by jeep-boat-jeep",
        come: "Combined shuttle and boat transfer across the lake; better as the next stop with a night there.",
        testo: "Arenal volcano, La Fortuna waterfall and the natural hot springs. Crossing the lake with the volcano ahead is the nicest way to move between the two areas.",
      },
    ],
    faq: [
      {
        domanda: "Which reserve should you choose in Monteverde?",
        risposta: "Monteverde is the most famous and visited, with timed entry to book; Santa Elena is higher and quieter; Curi-Cancha is the birdwatchers' favourite. With only one morning, do one of the three with a guide.",
      },
      {
        domanda: "How many days do you need in Monteverde?",
        risposta: "Two days: one for a reserve, coffee and the night walk, one for zip lines and birdwatching. A third adds another reserve and the hanging bridges.",
      },
      {
        domanda: "Do you need a guide in the cloud forest?",
        risposta: "It is not compulsory, but alone you see much less: guides carry a scope and know where to look for quetzals, sloths and frogs. For the night walk it is essential.",
      },
      {
        domanda: "Is it cold in Monteverde?",
        risposta: "Yes, compared with the rest of the country: you are at about 1,400 metres, evenings get cold and it often rains. Bring a waterproof jacket and a jumper.",
      },
      {
        domanda: "How much is the zip line in Monteverde?",
        risposta: "About 60 dollars per person for a three-hour course; 100% Aventura starts from 72 dollars (2026). There are two sessions, at dawn and late morning.",
      },
      {
        domanda: "Can you see the quetzal?",
        risposta: "With a guide and some luck, yes, especially early in the morning between February and June, when it nests. Curi-Cancha and the Monteverde reserve are the best places.",
      },
    ],
    esperienzeSlugs: ['camminata-notturna-monteverde', 'zipline-monteverde'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "The Monteverde cloud forest, Costa Rica",
    immagine: '/images/costa-rica/monteverde-stock.jpg',
  },
  {
    slug: 'uvita',
    paeseSlug: 'costa-rica',
    ordine: 7,
    nome: 'Uvita',
    tipologia: ['mare', 'natura', 'relax'],
    giorniConsigliati: "3 days",
    visitataPersonalmente: true,
    introduzione: "The Pacific coast of Costa Rica, with whale watching and the famous whale-tail-shaped sandbar, the Cola de la Ballena.",
    percheAndarci: "For whale watching (in the right season) and for one of the most beautiful landscapes of the whole trip, the Cola de la Ballena seen at low tide.",
    cosaVedere: ["The Cola de la Ballena, the whale-tail-shaped sandbar", "The Tárcoles bridge with its big crocodiles, along the way"],
    cosaFare: [
      "Whale watching (there's a dedicated experience page)",
      "Sunset horseback ride on the beach at Rancho La Merced (highly recommended)",
      "Surfing with board rental from Nomadic Surf",
      "Sunset yoga on a panoramic deck",
    ],
    doveDormire:
      "El Tecal: good location and friendly staff are the most cited aspects, but several reviews mention rooms and bathrooms not always as well kept as they should be. Budget to mid-range.\n\nAlternatives: budget: Flutterby House, Cascada Verde Hostel · mid-range: Eden Tica Lodge, Hotel Por Qué No? · luxury: La Cusinga Lodge, Oxygen Jungle Villas.",
    doveMangiare: "Gastro Park in Uvita (often a 10% discount if you let them know in advance).",
    comeArrivare: "Up to 4 hours by van from Monteverde, with a photo stop at the Tárcoles bridge.",
    comeSpostarsi: "On foot on the beach; van for excursions.",
    periodoMigliore: "January-March or July-October for whale watching (November-December is less favorable)",
    costi: "Whale watching $70 per person; horseback riding $52 per person; surfing $70 for 4 boards a day; yoga $10 per person.",
    erroriDaEvitare: ["Trusting improvised operators for whale watching: better a serious one like Uvita Ballena Jorobada, and always ask about insurance"],
    miaEsperienza:
      "In Uvita I did a bit of everything. For the whale tour I recommend Uvita Ballena Jorobada. At Rancho La Merced we did the sunset horseback ride on the beach: I fell off, because I'm not an experienced rider, but it's beautiful. The animals are treated well, which matters hugely to me, and they're gentle. Highly recommended. Costa Rica is also great for surfing, and here I went with Ariel. And the Cola de la Ballena at low tide is still one of the most beautiful landscapes of the trip.",
      "luoghi": [
        {
          "nome": "Marino Ballena National Park and Cola de la Ballena",
          "testo": "A sandbar shaped like a whale's tail that emerges at low tide, in Marino Ballena Park. One of the most beautiful landscapes of the trip.",
          "come": "Entrance from Playa Uvita beach; the sandbar is reached on foot at low tide.",
          "quando": "At low tide, to be checked on tide tables.",
          "tempo": "1-2 hours",
          "consiglio": "Check tide times: at high tide the sandbar disappears."
        },
        {
          "nome": "Whale watching",
          "testo": "A boat trip in Marino Ballena National Park, created in 1989, to spot the humpback whales that come here to breed. There is a dedicated experience card.",
          "come": "Tour from Uvita on a small boat.",
          "quando": "Two seasons: from December to April the northern-hemisphere humpbacks arrive, from July to November the southern ones.",
          "tempo": "3 hours",
          "consiglio": "Sightings are not guaranteed, but the scenery is worth it anyway."
        },
        {
          "nome": "Tárcoles bridge",
          "testo": "A bridge over the Tárcoles river, along the main road, from which you can see large crocodiles on the banks.",
          "come": "Stop along the Costanera road, on foot on the bridge.",
          "quando": "Daytime, with light.",
          "tempo": "15-30 minutes",
          "consiglio": "Do not go down to the bank: the crocodiles are real."
        },
        {
          "nome": "Surf and yoga",
          "testo": "Board rental and lessons on the beach, and yoga at sunset on a panoramic deck.",
          "come": "Schools and decks around Uvita and Dominical.",
          "quando": "Morning for surf, sunset for yoga.",
          "tempo": "2 hours"
        },
        {
          "nome": "Corcovado National Park",
          "testo": "The wildest park in the country, on the Osa Peninsula: primary forest, empty beaches, tapirs, peccaries and Costa Rica's largest population of scarlet macaws.",
          "come": "Only with an authorized guide and a reservation (reservaciones.pnc@sinac.go.cr). By boat from Drake Bay, Sierpe or Puerto Jiménez to Sirena station; by land from the La Leona sector, near Playa Carate.",
          "quando": "Daily 8am-4pm. The best time is December to April; Sirena station is closed in October.",
          "tempo": "1-2 days",
          "url": "https://www.visitcostarica.com/",
          "consiglio": "Book well ahead: Costa Rica's tourism board says at least six months."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: Cola de la Ballena at low tide",
            "Lunch in Uvita",
            "Afternoon: surf",
            "Sunset: yoga on the deck"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: Cola de la Ballena and the beach",
            "Day 2: whale watching in season, stop at the Tárcoles bridge heading north"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Uvita",
          "perChi": "beaches and services",
          "testo": "Restaurants, tours and shops near the beach, close to the park."
        },
        {
          "nome": "Hills above the coast",
          "perChi": "those who want views and quiet",
          "testo": "Lodges with ocean views, but far from services."
        }
      ],
      "sapori": [
        {
          "nome": "Fish casado",
          "testo": "Rice, beans and the fish of the day."
        },
        {
          "nome": "Ceviche",
          "testo": "Raw fish marinated in lime, on the beaches."
        },
        {
          "nome": "Fruit and smoothies",
          "testo": "Pineapple, papaya and mango, at the stalls."
        },
        {
          "nome": "Grilled fish",
          "testo": "In the seaside restaurants of Uvita."
        }
      ],
      "attenzioni": [
        "Keep an eye on the tide: the sandbar is submerged at high tide.",
        "The Pacific sea has strong currents: swim with caution.",
        "Thefts from cars parked at beaches: leave nothing in sight."
      ],
    esperienzeSlugs: ['whale-watching-uvita'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "The Cola de la Ballena sandbar at Uvita, Costa Rica",
    immagine: '/images/costa-rica/uvita-stock.jpg',
  },
  {
    slug: 'manuel-antonio',
    paeseSlug: 'costa-rica',
    ordine: 8,
    nome: 'Manuel Antonio National Park',
    tipologia: ['natura', 'mare'],
    giorniConsigliati: "half a day, along the way back",
    visitataPersonalmente: true,
    introduzione: "One of the best stops in all of Costa Rica: guided trails among sloths, monkeys and iguanas, followed by one of the most beautiful beaches in the country.",
    percheAndarci: "With an expert guide the chance of spotting wildlife is very high, in one of the best-known national parks in the country.",
    cosaVedere: ["Sloths, monkeys, iguanas and hummingbirds along the trails", "The beaches inside the park"],
    cosaFare: ["Guided visit of the park, included (there's a dedicated experience page)", "Free time on the beach inside the park"],
    doveDormire: "We didn't sleep here: it was a half-day stop on the way back to San José.",
    doveMangiare: "I have no addresses to suggest: the stop was entirely given over to the park visit.",
    comeArrivare: "From Uvita it is about an hour and a half's transfer on the Costanera. From San José it takes about 3 hours by car, via Jacó and the Tárcoles bridge; direct buses from San José reach Quepos and continue to the park entrance. Quepos also has a small airport with domestic flights from San José. From the park back to San José, allow 3.5-4 hours with traffic.",
    comeSpostarsi: "On foot along the park trails, with a guide.",
    periodoMigliore: "early morning: we left before dawn",
    costi: "I didn't note down the ticket price; today it is about 18 dollars for foreigners, online only on the SINAC portal, and the park is closed on Tuesday. Rough daily budget per person for 2026: low 60-90 € (lodging in Quepos, sodas, park without a guide); mid 140-200 € (hotel on the park road, guide, dinner with a view); high from 300 € (hotel overlooking the Pacific, catamaran trip).",
    erroriDaEvitare: ["Forgetting that the park is closed on Tuesdays: better to check beforehand and, if necessary, move the visit earlier"],
    miaEsperienza:
      "Manuel Antonio is a beautiful park, but with so many people there you almost feel like you're going to the zoo. It's still very beautiful. Thanks to the guide we saw sloths, monkeys and iguanas up close along trails we'd have struggled to read on our own.",
    luoghi: [
      {
        nome: "Manuel Antonio National Park",
        testo: "A small park full of life: sloths, capuchin and squirrel monkeys, iguanas and hummingbirds along the trails, with beaches inside the park. It is one of the most famous and crowded parks in the country. There is a dedicated experience page.",
        come: "You get there from Quepos by bus or car in a few minutes. With a guide you see many more animals; bags are checked: no food in plastic bags and no alcohol.",
        quando: "At opening, when animals are active and there are fewer people.",
        tempo: "3-4 hours",
        costo: "About 18 USD for foreign adults (16 USD plus VAT, 2025-2026), about 16 €, online only and with limited places",
        orari: "Wednesday to Monday 7 am-4 pm; closed Tuesday",
        lat: 9.37556,
        lng: -84.13583,
        url: "https://serviciosenlinea.sinac.go.cr/",
        consiglio: "With the guide we saw sloths, monkeys and iguanas up close along trails we would have found much harder to read on our own.",
      },
      {
        nome: "Playa Manuel Antonio and Playa Espadilla Sur",
        testo: "Beaches inside the park, with pale sand and calm water, separated by the Punta Catedral tombolo. Playa Manuel Antonio, in the most sheltered bay, is one of the most beautiful beaches in the country.",
        come: "From the park trails, with the entry ticket.",
        quando: "Mid-morning, after the guided walk.",
        tempo: "1-2 hours",
        lat: 9.38088,
        lng: -84.1456,
        consiglio: "Don't feed the animals or leave bags unattended: monkeys and raccoons open them.",
      },
      {
        nome: "Punta Catedral trail",
        testo: "A loop through the forest on the headland that was once an island, joined to the coast by a sandbar. It climbs and drops with steps and viewpoints over the Pacific and the islets off the park.",
        come: "Inside the park, starting between the two beaches.",
        quando: "Morning, when it is less hot.",
        tempo: "1 hour",
        lat: 9.3779,
        lng: -84.14679,
      },
      {
        nome: "Playa Espadilla",
        testo: "The long public beach outside the park, in front of Manuel Antonio village, with umbrellas, beginner surf and sunsets over the sea. It is free and open on Tuesdays too.",
        come: "On foot from the park entrance.",
        quando: "Afternoon and sunset.",
        tempo: "2-3 hours",
        costo: "Free",
        lat: 9.39898,
        lng: -84.1596,
        consiglio: "Currents can be strong: swim near the lifeguards and where others are swimming.",
      },
      {
        nome: "Playa Biesanz",
        testo: "A small cove hidden between the forest and the hillside hotels, with calm water and a little snorkelling among the rocks. Monkeys are often in the trees above the sand.",
        come: "On foot down a short, steep path from the road between Quepos and the park.",
        quando: "Morning, or on Tuesday when the park is closed.",
        tempo: "2 hours",
        costo: "Free",
        lat: 9.4009,
        lng: -84.16844,
      },
      {
        nome: "Quepos and Marina Pez Vela",
        testo: "The area's service town, with the market, cheap sodas and the marina where sport fishing and catamaran trips leave from. The seafront is pleasant at sunset.",
        come: "Bus or taxi from the park, about 15 minutes.",
        quando: "Lunch after the park, or evening.",
        tempo: "1-2 hours",
        lat: 9.42642,
        lng: -84.16872,
      },
      {
        nome: "Isla Damas mangroves",
        testo: "A mangrove estuary north of Quepos, explored by boat or kayak through channels with capuchin monkeys, herons and crocodiles. It is a quiet afternoon outing.",
        come: "Tour with transfer from Quepos or Manuel Antonio, about 20 minutes.",
        quando: "Afternoon, at high tide.",
        tempo: "2-3 hours",
        lat: 9.46458,
        lng: -84.1931,
      },
      {
        nome: "Carara National Park",
        testo: "On the Costanera towards San José, a transitional forest between dry and wet, famous for scarlet macaws flying to the coast at sunset. The trails near the road are short and flat.",
        come: "A stop on the Costanera, about 1.5 hours from Manuel Antonio; tickets on the SINAC portal.",
        quando: "Early morning or late afternoon, for the macaws.",
        tempo: "1-2 hours",
        lat: 9.74722,
        lng: -84.62778,
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Tárcoles bridge",
        testo: "On the way between Uvita and San José, the bridge under which large American crocodiles gather on the sandbanks of the Tárcoles river. The stop is a must.",
        come: "A stop on the Costanera; you walk along the bridge footpath.",
        quando: "Daytime.",
        tempo: "20-30 minutes",
        costo: "Free",
        lat: 9.80087,
        lng: -84.60611,
        consiglio: "Don't leave anything visible in a car parked near the bridge.",
      },
    ],
    programmi: [
      { titolo: "Half a day", tappe: [
        "Arrive at park opening",
        "2-3 hour guided walk",
        "Swim at Playa Manuel Antonio",
        "Lunch in Quepos and head back",
      ] },
      { titolo: "1 day", tappe: [
        "Morning: park with a guide and Punta Catedral",
        "Afternoon: Playa Espadilla or Playa Biesanz",
        "Evening: sunset over the sea",
      ] },
      { titolo: "On the way back to San José", tappe: [
        "Leave before dawn and the park at opening",
        "Lunch in Quepos",
        "Stops at Carara and the Tárcoles bridge",
        "Arrive in San José in the evening",
      ] },
    ],
    zone: [
      {
        nome: "Road between Quepos and the park",
        perChi: "views and convenience",
        testo: "Hillside hotels with coastal views, many with pools, but bus and taxi traffic.",
        fascia: "110-330 €",
      },
      {
        nome: "Near the entrance and Playa Espadilla",
        perChi: "those entering at opening",
        testo: "Hotels and cabinas walking distance from the park and the public beach, with simple restaurants.",
        fascia: "90-200 €",
      },
      {
        nome: "Quepos",
        perChi: "budget",
        testo: "Cheaper, with restaurants, the market and the marina; take the bus or a taxi to the park.",
        fascia: "60-110 €",
      },
    ],
      "sapori": [
        {
          "nome": "Fish casado",
          "testo": "Rice, beans and the fish of the day."
        },
        {
          "nome": "Ceviche",
          "testo": "Raw fish marinated in lime, in seaside restaurants."
        },
        {
          "nome": "Tropical fruit",
          "testo": "Pineapple, papaya and bananas, at the stalls near the park."
        },
        {
          "nome": "Smoothies",
          "testo": "With fresh fruit, at the stalls opposite the entrance."
        }
      ],
      "attenzioni": [
        "The park is closed on Tuesdays; after heavy rain SINAC may close it on other days too.",
        "Tickets are sold online only, on the SINAC site: they are not sold at the gate, and sites reselling them at a markup are not official.",
        "Do not feed the animals and keep bags closed: monkeys and raccoons steal.",
        "Since 30 April 2026 fines for entering through unofficial access points or closed areas are high: stay on marked trails.",
        "It's one of the most crowded parks in the country: with all those people it feels like a zoo at times. Arriving at opening time helps."
      ],
    gite: [
      {
        nome: "Nauyaca Waterfalls",
        distanza: "about 1.5 hours south",
        come: "By car towards Dominical, then on foot or by 4x4 from the entrance.",
        testo: "Two tiered falls with a large pool for swimming, in the Barú valley. They are reached by a walk of a few kilometres.",
      },
      {
        nome: "Uvita and Marino Ballena National Park",
        distanza: "about 1-1.5 hours south",
        come: "By car on the Costanera.",
        testo: "The Cola de la Ballena, the whale-tail sandbar visible at low tide, and humpback whale trips, best from January to March and from July to October.",
      },
      {
        nome: "Jacó",
        distanza: "about 1 hour north",
        come: "By car on the Costanera, on the way to San José.",
        testo: "The surf town closest to San José, with a long beach of steady waves, surf schools and nightlife.",
      },
    ],
    faq: [
      {
        domanda: "Is Manuel Antonio Park closed on Tuesday?",
        risposta: "Yes, it opens Wednesday to Monday 7 am-4 pm; in heavy rain SINAC can close it on other days too. On Tuesday, go to Playa Espadilla or Biesanz.",
      },
      {
        domanda: "How do you buy tickets?",
        risposta: "Online only, on SINAC's official portal, with limited places: they are not sold at the gate. Sites reselling them with a mark-up are not official.",
      },
      {
        domanda: "Do you need a guide at Manuel Antonio?",
        risposta: "It is not compulsory, but with the guide's scope you see sloths, frogs and snakes you would miss alone. Certified guides are at the entrance or booked in advance.",
      },
      {
        domanda: "How long do you need for the park?",
        risposta: "Half a day: two to three hours of trails with a guide and an hour or two on the beach. It works as a stop on the way back to San José.",
      },
      {
        domanda: "Can you swim in the park?",
        risposta: "Yes, at Playa Manuel Antonio and Espadilla Sur, where the water is usually calm. Keep bags closed and close by, because monkeys and raccoons steal food.",
      },
      {
        domanda: "Is it too crowded?",
        risposta: "It is one of the most visited parks in the country and at times it feels like a zoo, but it is still very beautiful. Arriving at opening and avoiding weekends helps.",
      },
    ],
    esperienzeSlugs: ['parco-manuel-antonio'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "A sloth among the trees of Manuel Antonio National Park, Costa Rica",
    immagine: '/images/costa-rica/manuel-antonio-stock.jpg',
  },
]
