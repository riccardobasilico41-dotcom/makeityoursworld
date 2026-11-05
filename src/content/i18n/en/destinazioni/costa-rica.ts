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
    percheAndarci: "As a logistical base for the welcome meeting and for the first and last casado of the trip.",
    cosaVedere: ["The Mercado Central", "The colonial neighborhood of Barrio Amón", "The National Museum"],
    cosaFare: [
      "Dinner at Jardín de Lolita, among food trucks and group socializing",
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
    erroriDaEvitare: ["Avoid the city center after sunset: always move in a group or by Uber", "Exchange currency only at banks or authorized offices, never on the street"],
    miaEsperienza:
      "San José itself offers little to the tourist. Dinner at Jardín de Lolita, among the food trucks and with the whole group seated together, got us socializing from the very first night.",
      "luoghi": [
        {
          "nome": "Mercado Central",
          "testo": "The historic covered market in the centre, with food stalls, coffee, crafts and the sodas serving the casado of the day.",
          "come": "On foot from the centre. Enter from the side streets of Avenida Central.",
          "quando": "Morning and lunchtime, when the sodas are busiest.",
          "tempo": "1-1.5 hours",
          "consiglio": "Eating in a soda inside the market is the cheapest way to taste home cooking."
        },
        {
          "nome": "Barrio Amón",
          "testo": "A neighbourhood of early-20th-century wooden and brick houses, former homes of the coffee barons, now with galleries, cafés and boutique hotels.",
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
          "tempo": "1.5 hours",
          "url": "https://www.museocostarica.go.cr/"
        },
        {
          "nome": "Teatro Nacional",
          "testo": "The neoclassical theatre opened in 1897 with Faust, paid for by a tax on coffee. Inside is the famous painting of the allegory of coffee and bananas, which ended up on the five-colón note.",
          "come": "On foot from the centre, on Plaza de la Cultura.",
          "quando": "Morning.",
          "tempo": "1 hour",
          "url": "https://www.teatronacional.go.cr/",
          "consiglio": "Book ahead if you want to attend a show."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Mercado Central and lunch at a soda",
            "Teatro Nacional and Plaza de la Cultura",
            "Barrio Amón in the afternoon",
            "Dinner at a food truck at Jardín de Lolita"
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
          "testo": "Bought in cooperatives and shops in the centre; among the best in Central America."
        }
      ],
      "attenzioni": [
        "San José has little for the tourist: it is a base for a couple of days, not a destination.",
        "Do not walk at night outside the tourist centre or in the neighbourhoods behind the station; use official taxis or apps.",
        "Pickpockets in markets and on buses: carry only what you need."
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
    usciteSerali: "Hot Rocks for live music, Selina for karaoke. At night it's better to always move in a group.",
    comeArrivare: "About 4-4.5 hours by van from San José.",
    comeSpostarsi: "Rental bicycle, local tuk tuks for short trips (about $4 per person).",
    periodoMigliore: "all year, as in the tropics",
    costi: "Bike rental about $6; Cahuita tour $50 per person; Pacuaré rafting $112.",
    erroriDaEvitare: ["Book the Cahuita tour and the Pacuaré rafting at least a week in advance", "At night always move in a group, especially girls on their own"],
    miaEsperienza:
      "We pedaled along the coast to Punta Uva, with howler monkeys heard from the trees overhead: to get to know the Costa Rican Caribbean it was the simplest and truest way.",
      "luoghi": [
        {
          "nome": "Cahuita National Park",
          "testo": "A coastal trail between beach, forest and sea, with a coral reef offshore. You see sloths, howler and capuchin monkeys, raccoons and birds. It is the only national park in Costa Rica where, at the Cahuita entrance, you leave a donation instead of buying a ticket.",
          "come": "Main entrance in Cahuita, or from the Puerto Vargas side. The trail follows the beach, with some river crossings.",
          "quando": "Early morning, when animals are active.",
          "tempo": "3-4 hours",
          "consiglio": "With a local guide you see many more animals. There is a dedicated experience card for a full tour with the guide José."
        },
        {
          "nome": "Punta Uva and Playa Chiquita",
          "testo": "Pale-sand beaches south of Puerto Viejo, with palms and forest behind. From here you hear howler monkeys in the trees.",
          "come": "By bike along the coast from Puerto Viejo; rentals in town.",
          "quando": "Morning or late afternoon.",
          "tempo": "Half a day",
          "consiglio": "Cycling along the coast is the simplest and truest way to know the Costa Rican Caribbean."
        },
        {
          "nome": "Playa Cocles",
          "testo": "The longest and most popular beach, with surf waves and bars on the sand.",
          "come": "By bike or on foot from town.",
          "quando": "Late afternoon for happy hour.",
          "tempo": "2-3 hours",
          "consiglio": "Currents are strong: swim with care, usually not guarded."
        },
        {
          "nome": "Pacuaré River (rafting)",
          "testo": "A descent of the Pacuaré river, through gorges and forest, an optional excursion much in demand in the area.",
          "come": "Organised tour from Puerto Viejo, booked a few days ahead.",
          "quando": "Check the best season with the operator.",
          "tempo": "Full day",
          "consiglio": "The river is far from the coast: it is a long day with many hours on the road."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: bike to Punta Uva",
            "Lunch of Caribbean food",
            "Afternoon: Playa Cocles and happy hour"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: bike along the coast to Punta Uva",
            "Day 2: Cahuita Park with a guide, then a swim"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Puerto Viejo centre",
          "perChi": "social life and restaurants",
          "testo": "Everything close but music in the evening, sometimes loud."
        },
        {
          "nome": "Playa Cocles and Punta Uva",
          "perChi": "calm and nature",
          "testo": "Cabañas in the forest, but you need a bike or taxi for dinner."
        }
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
    comeArrivare: "1.5 hours by van to the port of Moín, then 3 hours by boat.",
    comeSpostarsi: "On foot: the village has no roads for cars. Kayak and boat for excursions.",
    periodoMigliore: "July-October for turtle nesting",
    costi: "Cerro Tortuguero $6 boat + $3 entrance; night turtle excursion about $40 per person.",
    erroriDaEvitare: [],
    miaEsperienza:
      "The boat ride from Moín to Tortuguero, through jungle canals with crocodiles and monkeys on the banks, was one of the best transfers of the whole trip, an experience in itself.",
      "luoghi": [
        {
          "nome": "Tortuguero canals",
          "testo": "A network of mangrove and forest canals in the north-east, home to caimans, crocodiles, monkeys, herons and kingfishers. You go by boat with a low-impact motor.",
          "come": "Boat from Moín or from the Cariari-La Pavona area, long transfer hours. The village has no roads.",
          "quando": "Early morning, for animals and light.",
          "tempo": "2-3 hours",
          "consiglio": "The transfer from Moín to Tortuguero, through canals and jungle, is one of the best of the trip and counts as an experience in itself."
        },
        {
          "nome": "Kayak at dawn in the mangroves",
          "testo": "Silent kayaking along side canals, without a motor, to get close to birds and reptiles.",
          "come": "With a lodge guide, leaving before dawn. There is a dedicated experience card.",
          "quando": "Dawn.",
          "tempo": "2 hours"
        },
        {
          "nome": "Cerro Tortuguero",
          "testo": "The highest hill in the area, with views over canals, sea and forest.",
          "come": "A short boat crossing from the village to the trailhead; ask your lodge about current access rules and fee.",
          "quando": "Morning.",
          "tempo": "1-1.5 hours",
          "consiglio": "Bring water and repellent: in the humid forest there are many mosquitoes."
        },
        {
          "nome": "Turtle nesting",
          "testo": "Between July and October green turtles lay eggs on the beach at night. They can only be observed with authorised guides.",
          "come": "Night excursion with an authorised guide, in small groups and with strict rules.",
          "quando": "Night; July-October.",
          "tempo": "2-3 hours",
          "consiglio": "No lights or flash: follow the guide and keep your distance."
        }
      ],
      "programmi": [
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: boat from Moín, arrival in the village, walk around",
            "Day 2: kayak at dawn, canals by boat, Cerro Tortuguero"
          ]
        },
        {
          "titolo": "3 days",
          "tappe": [
            "Days 1-2 as above",
            "Day 3: night nesting (July-October) or a trek in the park"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lodges on the canals",
          "perChi": "those who want to be immersed in nature",
          "testo": "Packages with meals and excursions, isolated and quiet. Often the only services are the lodge's."
        },
        {
          "nome": "Tortuguero village",
          "perChi": "budget",
          "testo": "Simple cabinas and restaurants, with village noise."
        }
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
          "testo": "A river descent through moderate rapids and forest, also suitable for beginners. There is a dedicated experience card.",
          "come": "Organised tour from the lodge or from local operators, with guide and equipment.",
          "quando": "Morning; green season for more water.",
          "tempo": "Half a day"
        },
        {
          "nome": "Catarata del Toro (Bajos del Toro)",
          "testo": "A waterfall with a trail and viewpoint, set in the forest. Optional excursion.",
          "come": "By car or on a tour from the lodge.",
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
            "Day 2: Cataratas Bajas del Toro, then transfer to Arenal"
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
          "testo": "Pineapple and bananas from the region, a big producer."
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
      "Canyoning in the Lost Canyon (optional, very adrenaline-filled)",
    ],
    doveDormire:
      "Hotel Campos Arenal: among the most cited strengths are the volcano view from the pool, the hearty breakfast and the convenient location. The recurring flaw is the dirt access path, slippery when it rains. Mid-range.\n\nAlternatives: budget: Arenal Backpackers Resort, Gringo Pete's · mid-range: Volcano Lodge & Springs · luxury: Nayara Springs, Tabacón Thermal Resort & Spa.",
    doveMangiare: "Nanku Restaurant with live music; Soda Víquez for traditional, inexpensive food; Spectacular Cantina (Mexican).",
    usciteSerali: "Selina or Lava Lounge.",
    comeArrivare: "About 1h20 by van from Sarapiquí.",
    comeSpostarsi: "Minivan at our disposal for the whole day.",
    periodoMigliore: "late afternoon for the hot springs",
    costi: "La Fortuna Waterfall $18-20; combo tour $90-120 per person; Lost Canyon canyoning $115-119.",
    erroriDaEvitare: ["There are no changing rooms at the El Chollín springs: river shoes, a swimsuit and a headlamp are enough, no towels"],
    miaEsperienza:
      "The free hot springs of El Choyin, on a stretch of natural river, felt far more authentic to us than the paid spas in the area. It was one of the truest moments of the whole trip.",
      "luoghi": [
        {
          "nome": "La Fortuna waterfall",
          "testo": "A waterfall of over 70 metres in a forest gorge, with about 530 steps down and back up and a pool for a swim. There is a dedicated experience card.",
          "come": "A few minutes by car or taxi from La Fortuna town, then steep stairs to the base.",
          "quando": "Open daily 7am-5pm; mornings are less crowded.",
          "tempo": "2 hours",
          "costo": "20 USD for foreigners (2025); you pay even if you only go to the viewpoint.",
          "url": "https://www.cataratariofortuna.com/",
          "consiglio": "The way back is all uphill: shoes with grip and water."
        },
        {
          "nome": "The free thermal river at El Chollín",
          "testo": "A stretch of the Tabacón river with naturally hot water and public access, a few steps from the thermal resorts. Not to be confused with El Choyín, a paid complex on the same river.",
          "come": "By car or taxi from La Fortuna; you park on the road, often with an attendant, and walk a short way down to the river.",
          "quando": "Early morning: at weekends and on holidays it is packed.",
          "tempo": "1-2 hours",
          "consiglio": "No showers, lockers or facilities: water shoes, a towel and no valuables left in the car."
        },
        {
          "nome": "Mirador El Silencio",
          "testo": "A trek with a view of the Arenal volcano, active until 2010 and dormant today. Optional excursion.",
          "come": "By car towards the volcano side or with an organised tour.",
          "quando": "Early morning, for a cloud-free volcano.",
          "tempo": "Half a day"
        },
        {
          "nome": "Mistico hanging bridges",
          "testo": "A route of hanging bridges above the forest, with a guide and a safe trail. Optional.",
          "come": "Ticket at the entrance; car or tour.",
          "quando": "Morning.",
          "tempo": "2 hours"
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: La Fortuna waterfall",
            "Lunch in La Fortuna",
            "Afternoon: free thermal river at El Chollín"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: waterfall and hot springs",
            "Day 2: Mirador El Silencio or hanging bridges, optional canyoning"
          ]
        }
      ],
      "zone": [
        {
          "nome": "La Fortuna",
          "perChi": "services and tours",
          "testo": "The town has restaurants, agencies and hotels, with a view of the volcano."
        },
        {
          "nome": "Around the volcano",
          "perChi": "those who want quiet",
          "testo": "Lodges in the forest, with their own hot springs; you need a car to dine."
        }
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
          "testo": "Beef stew with yuca, plantain and corn, typical of the highlands."
        },
        {
          "nome": "Lake fish",
          "testo": "Fried tilapia, in restaurants of the area."
        }
      ],
      "attenzioni": [
        "The staircase to the La Fortuna waterfall is long and the way back is all uphill.",
        "Paid hot springs are expensive: consider the free ones.",
        "Canyoning (Lost Canyon): very adrenaline-fuelled and optional, only with serious operators."
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
    comeArrivare: "About 3-3.5 hours by van from La Fortuna.",
    comeSpostarsi: "Private van for excursions.",
    periodoMigliore: "early morning for birdwatching and ziplining",
    costi: "Night walk (Kinkajou Night Walk) $28 per person; zipline about $60 per person; birdwatching $50 per person.",
    erroriDaEvitare: ["Don't be afraid to ask the guide to cut the night walk short if it goes on too long: not everyone likes the length equally"],
    miaEsperienza:
      "The night walk in the cloud forest, with wildlife that only moves after sunset, was one of the best experiences of the trip, even if for some the length (1h30) may feel long.",
      "luoghi": [
        {
          "nome": "Monteverde cloud forest",
          "testo": "A high-altitude rainforest wrapped in clouds, with thousands of species of plants, birds and insects. You walk on trails and bridges.",
          "come": "By taxi or shuttle from the small town of Santa Elena, on a slow mountain road. Since 2026 entry is timed and booked online. Better with a guide to spot the animals.",
          "quando": "Forest trails from 7:30 to 16:00 (official site hours); early morning for birds. The fog is part of the landscape.",
          "tempo": "3-4 hours",
          "url": "https://cloudforestmonteverde.com/"
        },
        {
          "nome": "Night walk in the forest",
          "testo": "An evening excursion with guide and torch to see frogs, insects, tarantulas and other nocturnal animals. There is a dedicated experience card.",
          "come": "Departure after sunset with a guide.",
          "quando": "Evening: at the reserve the night walk starts at 18:00.",
          "tempo": "1.5 hours",
          "consiglio": "To some people the duration can feel long. Bring a jacket and closed shoes."
        },
        {
          "nome": "Coffee plantation",
          "testo": "A visit to a finca with tasting and an explanation of the process, from plant to cup.",
          "come": "Half-day tour booked locally.",
          "quando": "Morning.",
          "tempo": "2-3 hours"
        },
        {
          "nome": "Zipline adventure",
          "testo": "A zipline route above the canopy, one of the best known in the country. There is a dedicated experience card.",
          "come": "Booking with a local operator, with transfer.",
          "quando": "Morning.",
          "tempo": "2-3 hours",
          "consiglio": "Always ask about the operator's equipment and safety measures."
        }
      ],
      "programmi": [
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: cloud forest with a guide",
            "Lunch in Santa Elena",
            "Afternoon: coffee",
            "Evening: night walk"
          ]
        },
        {
          "titolo": "2 days",
          "tappe": [
            "Day 1: forest, coffee and night walk",
            "Day 2: zipline, birdwatching at dawn as an option"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Santa Elena",
          "perChi": "services and budget",
          "testo": "Restaurants, agencies and hotels; you need a taxi or shuttle to the reserve."
        },
        {
          "nome": "Near the reserve",
          "perChi": "those who want nature",
          "testo": "Lodges and cabañas near the forest, more isolated and pricier."
        }
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
          "testo": "Local dairy products, for which the area is famous."
        }
      ],
      "attenzioni": [
        "It is cold and rains in the evening: bring a waterproof jacket and a sweater.",
        "The mountain roads to the reserve are narrow and slow: allow time, and book your entry slot online.",
        "For birds and wildlife you need a guide: alone you see much less."
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
      "Horseback riding at Rancho Merced (optional)",
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
    erroriDaEvitare: ["Book whale watching only through the DMC, avoiding local providers without adequate insurance"],
    miaEsperienza:
      "The Cola de la Ballena, the whale-tail-shaped sandbar you see at low tide, remains one of the most beautiful landscapes of the whole trip, no matter how many whales you manage to spot at sea.",
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
    comeArrivare: "About 1.5 hours of transfer from Uvita.",
    comeSpostarsi: "On foot along the park trails, with a guide.",
    periodoMigliore: "early morning: we left before dawn",
    costi: "Remember that the park is closed on Tuesdays.",
    erroriDaEvitare: ["Forgetting that the park is closed on Tuesdays: better to check beforehand and, if necessary, move the visit earlier"],
    miaEsperienza:
      "Thanks to the guide, Manuel Antonio was one of the stops with the most sightings of the whole trip: we saw sloths, monkeys and iguanas up close along trails that on our own we'd have had much more trouble reading.",
      "luoghi": [
        {
          "nome": "Manuel Antonio National Park",
          "testo": "A small but life-rich park: sloths, capuchin monkeys, iguanas and hummingbirds along the trails, with beaches inside the park. There is a dedicated experience card.",
          "come": "From Quepos by bus or car, in a few minutes. With a guide you see many more animals.",
          "quando": "Early morning, when the animals are active. Open Wednesday to Monday, 7am-4pm; closed on Tuesdays.",
          "tempo": "3-4 hours",
          "costo": "About 18 USD for foreign adults (16 USD plus VAT, 2025-2026), online only and with limited places.",
          "url": "https://serviciosenlinea.sinac.go.cr/",
          "consiglio": "With the guide we saw sloths, monkeys and iguanas up close along trails that we would have struggled much more to read alone."
        },
        {
          "nome": "Playa Manuel Antonio and Playa Espadilla Sur",
          "testo": "Beaches inside the park, with pale sand and calm water. You can swim after the visit.",
          "come": "From the park trails.",
          "quando": "Mid-morning.",
          "tempo": "1-2 hours",
          "consiglio": "Do not feed the animals and do not leave backpacks unattended: monkeys open them."
        },
        {
          "nome": "Tárcoles bridge",
          "testo": "Along the route from Uvita, the bridge with the large crocodiles of the Tárcoles river.",
          "come": "Stop on the Costanera.",
          "quando": "Daytime.",
          "tempo": "20-30 minutes"
        }
      ],
      "programmi": [
        {
          "titolo": "Half a day",
          "tappe": [
            "Arrive when the park opens",
            "Guided visit of 2-3 hours",
            "Swim at the beach",
            "Lunch in Quepos and return"
          ]
        },
        {
          "titolo": "1 day",
          "tappe": [
            "Morning: park with a guide",
            "Afternoon: Manuel Antonio public beach",
            "Evening: sunset over the sea"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Road between Quepos and the park",
          "perChi": "views and convenience",
          "testo": "Hotels with coast views, but bus and taxi traffic."
        },
        {
          "nome": "Quepos",
          "perChi": "budget",
          "testo": "Cheaper, with restaurants and a market."
        }
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
        "Since 30 April 2026 fines for entering through unofficial access points or closed areas are high: stay on marked trails."
      ],
    esperienzeSlugs: ['parco-manuel-antonio'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: "A sloth among the trees of Manuel Antonio National Park, Costa Rica",
    immagine: '/images/costa-rica/manuel-antonio-stock.jpg',
  },
]
