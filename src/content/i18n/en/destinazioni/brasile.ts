import type { Destinazione } from '@/lib/types'

export const destinazioniBrasile: Destinazione[] = [
  {
    slug: 'rio-de-janeiro',
    paeseSlug: 'brasile',
    ordine: 1,
    nome: 'Rio de Janeiro',
    tipologia: ['city', 'sea', 'viewpoints'],
    giorniConsigliati: '4 days',
    visitataPersonalmente: true,
    introduzione:
      "A metropolis squeezed between granite mountains, Atlantic forest and ocean, with the beaches of Copacabana and Ipanema, Christ the Redeemer on Corcovado and Sugarloaf at the entrance to Guanabara Bay.",
    percheAndarci: 'For the views from above, the beaches in the city, the samba of Lapa and the cooking of the botecos.',
    cosaVedere: [
      'Christ the Redeemer on Corcovado',
      'Sugarloaf (Pão de Açúcar) at sunset',
      'Copacabana, Ipanema and Pedra do Arpoador',
      'Santa Teresa and the Escadaria Selarón',
      'The historic center, the Real Gabinete Português de Leitura and the Museu do Amanhã',
    ],
    cosaFare: [
      'Go up to the Christ on the first run of the morning',
      'Applaud the sunset from Arpoador',
      'An evening of samba in Lapa, round trip by app',
      'The Saturday feijoada',
    ],
    doveDormire: 'Ipanema, Leblon or Copacabana: budget R$200-350, mid-range R$450-800, high-end over R$1,200 a night.',
    doveMangiare: 'Botecos, rodízio churrascarias, pay-by-weight places, pastel and caldo de cana in the markets.',
    comeArrivare: 'Galeão international airport (GIG); domestic flights also from Santos Dumont, downtown.',
    comeSpostarsi: 'Metro between the south zone and downtown, official taxis and apps; on foot only by day in busy areas.',
    periodoMigliore: 'May-October, mild dry winter; December-March hot and rainy.',
    costi: 'Christ the Redeemer R$85-90 with the official van; Sugarloaf R$180-200.',
    erroriDaEvitare: [
      'Holding your phone in your hand on the street or leaving it on your beach towel',
      'Walking in deserted areas in the evening instead of using an app',
      'Going up to the Christ at noon, when it is often in the clouds and crowded',
    ],
    luoghi: [
      {
        "nome": "Christ the Redeemer",
        "testo": "The 30-metre statue on Corcovado, 710 metres above the city. From the top you grasp the shape of Rio: the beaches, the Rodrigo de Freitas lagoon and Sugarloaf at the mouth of the bay.",
        "come": "By the rack railway from Cosme Velho or by the official vans from Paineiras. The ticket is bought online choosing day and time.",
        "quando": "First run of the morning, before clouds and crowds. At midday the statue is often in cloud.",
        "tempo": "3-4 hours including the ride up, the visit and the way down",
        "costo": "About 87 R$ with the official van, a single price all year (2026)",
        "url": "https://paineirascorcovado.com.br/",
        "consiglio": "Go in the morning and bring a light jacket: it is windy at the top."
      },
      {
        "nome": "Sugarloaf Mountain",
        "testo": "The granite monolith at the mouth of Guanabara Bay. The cable car rises in two stages, first to Morro da Urca and then to the top, with a 360-degree view.",
        "come": "Cable car from the Praia Vermelha station in the Urca district. Walkers can climb to Urca on a short path and take the cable car only for the second stage.",
        "quando": "Late afternoon, for sunset over the bay and the city lighting up.",
        "tempo": "2-3 hours",
        "costo": "About 205 R$ for the full ticket (2026); the 160 R$ promotional fare is for Brazilians only",
        "url": "https://www.bondinho.com.br/",
        "consiglio": "Arrive an hour before sunset to avoid the queue."
      },
      {
        "nome": "Copacabana, Ipanema and Arpoador",
        "testo": "The two best-known urban beaches in the world, divided into \"postos\", the lifeguard towers that also mark the tribe of each stretch. Between them is Pedra do Arpoador, where people applaud the sunset.",
        "come": "By metro (Copacabana, Cantagalo and General Osório stations) or on foot along the seafront.",
        "quando": "Morning for the beach; sunset at Arpoador.",
        "tempo": "Half a day",
        "consiglio": "On the towel bring only what you are willing to lose: do not leave phone and wallet unattended."
      },
      {
        "nome": "Santa Teresa and the Escadaria Selarón",
        "testo": "The hillside district with 19th-century villas, studios and the yellow tram (bondinho). The Escadaria Selarón, a staircase covered in colourful tiles, goes down towards Lapa.",
        "come": "By app or taxi to Santa Teresa, then on foot; the staircase is walked down towards Lapa.",
        "quando": "By day.",
        "tempo": "2-3 hours",
        "consiglio": "Go by day and come back by app."
      },
      {
        "nome": "Historic centre and Museu do Amanhã",
        "testo": "The centre has Confeitaria Colombo, the Theatro Municipal, the cone-shaped cathedral and the Real Gabinete Português de Leitura, one of the most beautiful libraries in the world. At the port, Praça Mauá with the Museu do Amanhã and the Boulevard Olímpico full of murals.",
        "come": "By metro from Ipanema and Copacabana: 20-30 minutes.",
        "quando": "On weekdays, by day. Many attractions close on Sunday and the centre empties.",
        "tempo": "Half a day",
        "consiglio": "The centre is for daytime: in the evening and at weekends it empties."
      },
      {
        "nome": "Lapa and samba",
        "testo": "The district under the arches of the aqueduct, with live samba venues and streets full on Friday and Saturday.",
        "come": "By app, round trip, avoiding walking at night.",
        "quando": "Friday and Saturday night.",
        "tempo": "An evening",
        "consiglio": "Carry only your phone and the cash for the evening. Watch for bag snatchers in the crowd late at night."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Christ the Redeemer on the first run",
          "Lunch in Santa Teresa or the centre",
          "Afternoon: Sugarloaf",
          "Evening: sunset and dinner in Ipanema"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: the 1-day plan",
          "Day 2: morning on the beach at Ipanema and Copacabana, afternoon in the centre and Museu do Amanhã, evening in Lapa"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Santa Teresa and the Escadaria Selarón, sunset at Arpoador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ipanema and Leblon",
        "perChi": "Those who want safety and restaurants",
        "testo": "The most polished area, with sea and a nearby metro. Budget 200-350 R$, mid-range 450-800 R$, high-end over 1,200 R$ a night."
      },
      {
        "nome": "Copacabana",
        "perChi": "Those who want the classic atmosphere and lower prices",
        "testo": "The seafront is always alive, but some inner streets are less safe at night."
      },
      {
        "nome": "Santa Teresa",
        "perChi": "Those who want an artistic atmosphere",
        "testo": "Pousadas in historic villas, but on the hill with steep streets. In the evening it is better to move by app."
      }
    ],
    sapori: [
      {
        "nome": "Feijoada",
        "testo": "Black bean stew with pork cuts, served with rice, collard greens and farofa. Traditional on Saturday."
      },
      {
        "nome": "Rodízio churrascarias",
        "testo": "Grilled meat served at the table, all you can eat."
      },
      {
        "nome": "Pastel and caldo de cana",
        "testo": "Fried pastry and sugarcane juice, typical of the markets."
      },
      {
        "nome": "Pay-by-weight restaurants",
        "testo": "Buffet paid by the kilo, the everyday lunch of the cariocas."
      },
      {
        "nome": "Caipirinha",
        "testo": "Cachaça, lime and sugar, everywhere."
      }
    ],
    attenzioni: [
      "Phone theft on the beach and in the street, motorbike snatching, robberies in empty areas at night: no jewellery and no phone in hand.",
      "Little cash, but a small sum to hand over in case of a robbery, without resisting.",
      "With Uber and 99 check the plate and driver name: the Italian foreign ministry reports fake drivers, especially at the airport.",
      "Viaggiare Sicuri advises against any visit to the favelas, even with guides.",
      "Dengue is widespread in cities: repellent and long sleeves at dusk."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Christ the Redeemer on Corcovado above Rio de Janeiro bay, with Sugarloaf',
    immagine: '/images/viaggi/brasile-itinerario/giorno-02-rio-de-janeiro.jpg',
  },
  {
    slug: 'costa-verde',
    paeseSlug: 'brasile',
    ordine: 2,
    nome: 'Paraty and Ilha Grande',
    tipologia: ['sea', 'colonial town', 'islands', 'forest'],
    giorniConsigliati: '4 days',
    visitataPersonalmente: true,
    introduzione:
      "The Costa Verde between Rio and São Paulo includes the colonial town of Paraty, a gold port in the eighteenth century, and Ilha Grande, a car-free island covered in Atlantic forest. Since 2019 they have been a UNESCO site together with the Serra da Bocaina.",
    percheAndarci: "For Paraty bay by boat, the waterfalls of the hinterland and beaches like Lopes Mendes.",
    cosaVedere: [
      "Paraty's historic center",
      "The islands of Paraty bay",
      'Trindade and the Cachadaço natural pool',
      'Lopes Mendes, Lagoa Azul and Lagoa Verde on Ilha Grande',
    ],
    cosaFare: [
      'A schooner (escuna) ride around the bay',
      "The waterfalls and cachaça alambiques on the Cunha road",
      'The forest trails of Ilha Grande',
    ],
    doveDormire: 'Pousadas in the center of Paraty (R$300-700) and in Vila do Abraão (R$250-600).',
    comeArrivare: 'Bus from Rio to Paraty (about 4 and a half hours); van and boat from Paraty or Rio to Ilha Grande.',
    comeSpostarsi: 'On foot and by boat; there are no cars on Ilha Grande.',
    periodoMigliore: 'April-November for less rain and fewer crowds; December-February full and expensive.',
    erroriDaEvitare: [
      'Not bringing water and food to Lopes Mendes, where there are no services',
      'Leaving large luggage without having booked the airport transfer the day before',
    ],
    luoghi: [
      {
        "nome": "Historic centre of Paraty",
        "testo": "An 18th-century colonial town, gold port of Minas Gerais, UNESCO heritage since 2019. The centre is closed to cars, with white houses with coloured doors and cobbled streets that sometimes flood at high tide.",
        "come": "Bus from Rio (Novo Rio bus station) in about 4.5 hours.",
        "quando": "The evening is quiet, with restaurants and live music.",
        "tempo": "Half a day or an evening",
        "consiglio": "At high tide some streets flood: suitable shoes."
      },
      {
        "nome": "Paraty bay by escuna",
        "testo": "The bay has dozens of islands and beaches reachable only by sea. Escunas make a 4-5 hour trip with swimming stops.",
        "come": "Boarding at Paraty port. Private lanchas cost more but choose where to stop.",
        "quando": "Morning.",
        "tempo": "4-5 hours",
        "consiglio": "If you want to avoid the crowd, choose a lancha."
      },
      {
        "nome": "Cunha waterfalls and alambiques",
        "testo": "On the road to Cunha there are waterfalls such as Cachoeira do Tobogã, where local kids slide down the rock, and cachaça distilleries.",
        "come": "By taxi or on a tour from the centre of Paraty.",
        "quando": "Afternoon, after the boat trip.",
        "tempo": "Half a day",
        "consiglio": "Bring shoes that can get wet."
      },
      {
        "nome": "Trindade",
        "testo": "A village with wild beaches and the natural pool of Cachadaço.",
        "come": "30 minutes south of Paraty, by bus or taxi.",
        "quando": "Full day, if you have an extra day.",
        "tempo": "A day",
        "consiglio": "Add it if you have an extra day."
      },
      {
        "nome": "Vila do Abraão (Ilha Grande)",
        "testo": "The main village of the car-free island, with pousadas, restaurants and nightlife. Trails leave from here to the Aqueduto and Cachoeira da Feiticeira.",
        "come": "From Paraty by van and boat (about 3 hours), via Angra dos Reis or Conceição de Jacareí.",
        "quando": "Afternoon of arrival for a first short trail.",
        "tempo": "One or two nights",
        "consiglio": "Book the Rio airport transfer the day before."
      },
      {
        "nome": "Lopes Mendes, Lagoa Azul and Lagoa Verde",
        "testo": "Lopes Mendes is considered one of the most beautiful beaches in Brazil: three kilometres of fine white sand, open sea, forest behind. Lagoa Azul and Lagoa Verde are visited by boat for snorkelling.",
        "come": "By boat to Pouso then a 20-minute walk, or a trail of about three hours through the forest.",
        "quando": "Morning. Swim with caution because of waves and currents.",
        "tempo": "Full day",
        "consiglio": "There are no services at Lopes Mendes: bring water and food."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Paraty (historic centre, bay by escuna)",
          "Day 2: Cunha waterfalls or Trindade, then evening in Paraty"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Paraty and the bay",
          "Day 2: transfer to Ilha Grande, Vila do Abraão",
          "Day 3: Lopes Mendes"
        ]
      },
      {
        "titolo": "4 days",
        "tappe": [
          "Days 1-3 as above",
          "Day 4: Lagoa Azul and Lagoa Verde by boat, then return to Rio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic centre of Paraty",
        "perChi": "Those who want a colonial atmosphere",
        "testo": "Pousadas 300-700 R$. Cobbled streets, evening noise from the bars."
      },
      {
        "nome": "Vila do Abraão",
        "perChi": "Those visiting Ilha Grande",
        "testo": "Pousadas 250-600 R$, nightlife and boat departures. Car-free island."
      }
    ],
    sapori: [
      {
        "nome": "Craft cachaça",
        "testo": "Made locally in Paraty and in the nearby distilleries."
      },
      {
        "nome": "Fish and seafood",
        "testo": "Grilled or as moqueca in the seaside restaurants."
      },
      {
        "nome": "Banana-da-terra",
        "testo": "Fried plantain, served as a side dish all along the coast."
      }
    ],
    attenzioni: [
      "No services at Lopes Mendes: bring water and food.",
      "Open sea with waves and currents: swim with caution.",
      "Book the airport transfer the day before.",
      "Cobbled streets at high tide: possible flooding."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'White colonial houses with colorful doors in the historic center of Paraty',
    immagine: '/images/viaggi/brasile-itinerario/giorno-05-costa-verde.jpg',
  },
  {
    slug: 'foz-do-iguacu',
    paeseSlug: 'brasile',
    ordine: 3,
    nome: 'Iguazú Falls (Foz do Iguaçu)',
    tipologia: ['waterfalls', 'national park', 'nature'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "About 275 drops along almost three kilometers on the border between Brazil and Argentina, inside two UNESCO national parks. The Brazilian side offers the overview, the Argentine side the walkways above the Garganta del Diablo.",
    percheAndarci: 'For one of the largest waterfall systems in the world, to be seen from two countries.',
    cosaVedere: [
      'The trail and walkway of the Garganta do Diabo on the Brazilian side',
      'The Superior and Inferior circuits and the Garganta del Diablo on the Argentine side',
      'The Parque das Aves',
    ],
    cosaFare: ['The boat ride under the falls', 'The forest train on the Argentine side'],
    doveDormire: 'Foz do Iguaçu, mid-range R$300-600; the only hotel inside the Brazilian park is high-end.',
    comeArrivare: 'Flight to Foz do Iguaçu (IGU), often via São Paulo; Argentine airport at Puerto Iguazú.',
    comeSpostarsi: 'City buses and taxis to the Brazilian park; taxi or transfer to cross the border.',
    periodoMigliore: 'all year; more water between December and March, less heat between April and September.',
    costi: 'Brazilian park R$100-110; Argentine park about 35-45 dollars, paid in pesos; boat ride R$450-550.',
    erroriDaEvitare: [
      'Seeing only one side',
      'Forgetting your passport for the Argentine border',
      'Arriving late at the Garganta del Diablo, which fills up by mid-morning',
    ],
    luoghi: [
      {
        "nome": "Brazilian side of the falls",
        "testo": "It gives the overall view: a path of about a kilometre and a half along the canyon, up to the walkway that goes under the Garganta do Diabo, where you get completely wet.",
        "come": "City buses or taxi from Foz do Iguaçu; you enter by the visitor centre and go up with the park bus.",
        "quando": "Arrive early in the morning.",
        "tempo": "2-3 hours",
        "costo": "About 130 R$ for foreigners (2026, cap 134 R$), to buy online with day and time",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "consiglio": "A rain cape or waterproof bag for phone and documents."
      },
      {
        "nome": "Argentine side of the falls",
        "testo": "You walk inside the falls: three walkway circuits (Superior, Inferior and the Garganta del Diablo, reached by a train in the forest) reach above the biggest drop, where the water mist rises tens of metres.",
        "come": "The border is crossed by taxi, bus or transfer, showing the passport and doing exit and entry stamps.",
        "quando": "Arrive at opening: the Garganta walkway fills up by mid-morning.",
        "tempo": "Full day",
        "costo": "60,000 Argentine pesos for non-resident foreigners (about 40 dollars) from 1 June 2026, with a reduced fare on the second consecutive day",
        "url": "https://www.iguazuargentina.com/",
        "consiglio": "Bring your passport and pesos or a card."
      },
      {
        "nome": "Parque das Aves",
        "testo": "A park with toucans, macaws and Atlantic forest birds in large aviaries, opposite the entrance to the Brazilian falls.",
        "come": "Right opposite the entrance of the Brazilian side.",
        "quando": "After the falls, in the afternoon.",
        "tempo": "1-2 hours",
        "consiglio": "It combines well with a morning at the falls."
      },
      {
        "nome": "Macuco Safari",
        "testo": "The inflatable boat trip right under the falls.",
        "come": "Can be booked on the spot or in advance; leaves from the Brazilian side.",
        "quando": "Morning or afternoon.",
        "tempo": "1-2 hours",
        "costo": "Roughly 450-550 R$",
        "consiglio": "You get completely wet: spare clothes and a phone cover."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Brazilian side of the falls",
          "Afternoon: Parque das Aves"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Brazilian side and Parque das Aves, optional Macuco Safari",
          "Day 2: Argentine side, starting at opening, with the Garganta del Diablo first"
        ]
      }
    ],
    zone: [
      {
        "nome": "Foz do Iguaçu",
        "perChi": "Those with flights who want convenience",
        "testo": "Mid-range 300-600 R$ a night, linked to the airport. More convenient for flights."
      },
      {
        "nome": "Puerto Iguazú (Argentina)",
        "perChi": "Those who want to be closer to the Argentine side",
        "testo": "A smaller town, with less choice and less convenient flights."
      },
      {
        "nome": "Hotel inside the Brazilian park",
        "perChi": "Those who want the view from the room",
        "testo": "The only hotel inside the park is high-end."
      }
    ],
    sapori: [
      {
        "nome": "River fish",
        "testo": "Surubí and other Paraná fish, grilled."
      },
      {
        "nome": "Chipa",
        "testo": "Cheese rolls from the Paraguayan and Argentine tradition, sold on the street."
      },
      {
        "nome": "Churrasco",
        "testo": "Grilled meat in the restaurants of Foz."
      }
    ],
    attenzioni: [
      "Seeing only one side: they are different experiences.",
      "Forgetting your passport for the Argentine border.",
      "Arriving late at the Garganta del Diablo, which fills up by mid-morning.",
      "Yellow fever: vaccination recommended for western Paraná."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'The walkways of the Brazilian side in front of the Iguazú Falls',
    immagine: '/images/viaggi/brasile-itinerario/giorno-10-foz-do-iguacu.jpg',
  },
  {
    slug: 'salvador-de-bahia',
    paeseSlug: 'brasile',
    ordine: 4,
    nome: 'Salvador de Bahia',
    tipologia: ['colonial city', 'Afro-Brazilian culture', 'sea'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    introduzione:
      "First capital of Brazil (1549-1763) and the main port of arrival for enslaved Africans, Salvador has a deeply Afro-Brazilian culture: candomblé, capoeira, drums, cooking with dendê oil. The historic center of Pelourinho is a UNESCO site.",
    percheAndarci: 'For the Pelourinho, the music, the capoeira and Bahian cooking.',
    cosaVedere: [
      'The Pelourinho and the Igreja de São Francisco',
      'The Elevador Lacerda and the Mercado Modelo',
      'The Igreja do Senhor do Bonfim',
      'The Farol da Barra at sunset',
    ],
    cosaFare: [
      'Tuesday night in the Pelourinho',
      'Watch a capoeira roda',
      'Eat acarajé from the baianas of Rio Vermelho',
    ],
    doveDormire: 'Pelourinho and Santo Antônio Além do Carmo (pousadas R$250-600), Barra and Rio Vermelho for the sea.',
    doveMangiare: 'Moqueca baiana, acarajé, vatapá, bobó de camarão.',
    comeArrivare: 'Salvador international airport, connected to all the big Brazilian cities.',
    comeSpostarsi: 'Apps and taxis; on foot in the Pelourinho by day.',
    periodoMigliore: 'September-March; heavier rains between April and June.',
    erroriDaEvitare: [
      'Straying from the main streets of the Pelourinho in the evening',
      'Accepting the Bonfim ribbons "gifted" to you on the street',
    ],
    luoghi: [
      {
        "nome": "Pelourinho and Igreja de São Francisco",
        "testo": "The historic centre, UNESCO heritage: uphill squares with pastel-coloured colonial houses and baroque churches. The Igreja de São Francisco is covered in gold inside.",
        "come": "On foot from your lodging in the centre or by app from the seaside districts.",
        "quando": "By day. On Tuesday night the Pelourinho celebrates, with concerts and Olodum drums.",
        "tempo": "Half a day",
        "consiglio": "In the evening the side streets empty early: stay on the main streets and come back by app."
      },
      {
        "nome": "Elevador Lacerda and Mercado Modelo",
        "testo": "The public lift of 1873 links the upper town to the lower town. Below is the Mercado Modelo, a craft market.",
        "come": "The lift starts at Praça Tomé de Souza.",
        "quando": "Morning.",
        "tempo": "1-2 hours",
        "consiglio": "The market is touristy: haggle over prices."
      },
      {
        "nome": "Igreja do Senhor do Bonfim",
        "testo": "The church of the coloured ribbons, tied to the gate and the wrist as a vow.",
        "come": "By app or taxi from the centre.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "consiglio": "Do not accept ribbons \"given\" on the street: they then ask for money."
      },
      {
        "nome": "Rio Vermelho and acarajé",
        "testo": "The nightlife district, where the baianas fry acarajé in palm oil in the street.",
        "come": "By app from the centre or Barra.",
        "quando": "Evening.",
        "tempo": "An evening",
        "consiglio": "Eat the acarajé from the baianas, not in tourist venues."
      },
      {
        "nome": "Farol da Barra",
        "testo": "The lighthouse at the tip of the city, with the most beautiful sunset over the bay.",
        "come": "By app or bus from Barra.",
        "quando": "Sunset.",
        "tempo": "1-2 hours",
        "consiglio": "The first sunset in Salvador is watched from here."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Pelourinho and Igreja de São Francisco",
          "Elevador Lacerda and Mercado Modelo",
          "Sunset at Farol da Barra"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: the 1-day plan",
          "Day 2: Igreja do Senhor do Bonfim, Solar do Unhão, evening in Rio Vermelho"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: a capoeira roda at a Pelourinho school (ask first) or a boat trip in the Baía de Todos os Santos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pelourinho and Santo Antônio Além do Carmo",
        "perChi": "Those who want the historic centre",
        "testo": "Pousadas 250-600 R$. Patrolled by day, emptier in the evening."
      },
      {
        "nome": "Barra and Rio Vermelho",
        "perChi": "Those who want the sea and nightlife",
        "testo": "Safer in the evening, near the beaches and restaurants."
      }
    ],
    sapori: [
      {
        "nome": "Moqueca baiana",
        "testo": "Fish stew with coconut milk and dendê oil."
      },
      {
        "nome": "Acarajé",
        "testo": "Black-eyed bean fritter fried in palm oil, filled with vatapá and shrimp."
      },
      {
        "nome": "Vatapá",
        "testo": "Cream of bread, shrimp, coconut milk and peanuts."
      },
      {
        "nome": "Bobó de camarão",
        "testo": "Cassava cream with shrimp."
      }
    ],
    attenzioni: [
      "The Pelourinho at night: leaving the main streets is risky.",
      "Bonfim ribbons \"given\" on the street: they then ask for money.",
      "Petty crime: phone thefts and bag snatching.",
      "Use apps rather than walking at night."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'The sloping square of the Pelourinho in Salvador with colonial houses and the Rosário dos Pretos church',
    immagine: '/images/viaggi/brasile-itinerario/giorno-13-salvador-de-bahia.jpg',
  },
  {
    slug: 'chapada-diamantina',
    paeseSlug: 'brasile',
    ordine: 5,
    nome: 'Chapada Diamantina',
    tipologia: ['trekking', 'waterfalls', 'caves', 'national park'],
    giorniConsigliati: '3-5 days',
    visitataPersonalmente: true,
    introduzione:
      "A plateau of mesas, canyons, flooded caves and waterfalls in the interior of Bahia, with the town of Lençóis, born of the nineteenth-century diamond rush, as a base.",
    percheAndarci: "For the treks, waterfalls like the Fumaça and the blue-water caves of Poço Azul and Poço Encantado.",
    cosaVedere: [
      'Morro do Pai Inácio at sunset',
      'The Cachoeira da Fumaça',
      'Poço Azul and Poço Encantado',
      'The caves of Lapa Doce and Pratinha',
    ],
    cosaFare: ['The multi-day trek of the Vale do Pati', 'A swim at Ribeirão do Meio'],
    doveDormire: 'Lençóis (pousadas R$200-500) or the Vale do Capão.',
    comeArrivare: 'Bus from Salvador (6-7 hours).',
    comeSpostarsi: 'Guided tours and car; the trails are poorly marked.',
    periodoMigliore: 'April-September, dry season; Poço Encantado lights up from April to September.',
    costi: 'Day tours R$150-300 plus guide and entrance fees.',
    erroriDaEvitare: ['Doing the long trails without a guide', "Underestimating the initial climb of the Fumaça"],
    luoghi: [
      {
        "nome": "Morro do Pai Inácio",
        "testo": "The mesa that dominates the valley. Sunset from here is the Chapada classic.",
        "come": "By tour or car; 20-30 minutes of steep climb from the car park.",
        "quando": "Sunset.",
        "tempo": "2 hours",
        "consiglio": "Bring a torch for the descent."
      },
      {
        "nome": "Cachoeira da Fumaça",
        "testo": "One of the tallest waterfalls in Brazil, about 340 metres. In the dry season the water turns to smoke before touching the ground, hence the name.",
        "come": "From the Capão valley on a 6 km round-trip path with a steep initial climb.",
        "quando": "Dry season, April-September.",
        "tempo": "Half a day",
        "consiglio": "Do not underestimate the initial climb."
      },
      {
        "nome": "Poço Azul and Poço Encantado",
        "testo": "Flooded caves where sunlight enters and lights the water blue.",
        "come": "With a tour and guide, by car.",
        "quando": "Poço Encantado lights up in the midday hours from April to September.",
        "tempo": "Half a day",
        "costo": "Day tours 150-300 R$ plus guide and entry",
        "consiglio": "Check the light times: out of season the blue is not seen."
      },
      {
        "nome": "Lapa Doce and Pratinha",
        "testo": "Caves with turquoise water where you snorkel. Poço do Diabo is a waterfall with a dark pool.",
        "come": "Classic tour with guide and car.",
        "quando": "Full day.",
        "tempo": "A day",
        "consiglio": "In the caves a guide is mandatory."
      },
      {
        "nome": "Vale do Pati",
        "testo": "A trek of 3-5 days through remote valleys sleeping in farmers' houses.",
        "come": "With a guide, on foot, from Guiné or the Vale do Capão.",
        "quando": "Dry season.",
        "tempo": "3-5 days",
        "consiglio": "For those with time and legs, it is the alternative to day tours."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Ribeirão do Meio, Lapa Doce or Pratinha, sunset at Pai Inácio",
          "Day 2: Cachoeira da Fumaça or Poço Azul and Poço Encantado"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: a second activity of your choice, or the start of the Vale do Pati"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lençóis",
        "perChi": "Those who want the tour base",
        "testo": "Pousadas 200-500 R$. Small town with agencies and restaurants."
      },
      {
        "nome": "Vale do Capão",
        "perChi": "Those who want to hike",
        "testo": "Quieter, close to the Fumaça and the Pati."
      }
    ],
    sapori: [
      {
        "nome": "Bahian cooking of the interior",
        "testo": "Sun-dried beef, feijão tropeiro, farofa."
      },
      {
        "nome": "Cachaça and local liqueurs",
        "testo": "Made on the region's fazendas."
      }
    ],
    attenzioni: [
      "Long trails without a guide: the routes are poorly marked.",
      "Underestimating the initial climb of the Fumaça.",
      "Outside the dry season many waterfalls are harder to reach."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'The mesas of the Chapada Diamantina seen from above',
    immagine: '/images/viaggi/brasile-itinerario/giorno-16-chapada-diamantina.jpg',
  },
  {
    slug: 'lencois-maranhenses',
    paeseSlug: 'brasile',
    ordine: 6,
    nome: 'Lençóis Maranhenses',
    tipologia: ['dunes', 'lagoons', 'national park'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "A national park of white dunes on the coast of Maranhão where, after the rains, thousands of lagoons of clear fresh water form. Barreirinhas, on the Rio Preguiças, is the gateway; Atins is the village at the far end of the park.",
    percheAndarci: 'To swim in the lagoons among the dunes, between June and September.',
    cosaVedere: [
      'The Lagoa Azul circuit',
      'The Lagoa Bonita from the top of the dune',
      'Vassouras, Mandacaru and Caburé along the Rio Preguiças',
      'The historic center of São Luís',
    ],
    cosaFare: ['The 4x4 jardineira circuits', 'The boat on the Rio Preguiças to the sea', 'The scenic flight over the park', 'Kitesurfing at Atins'],
    doveDormire: 'Barreirinhas (pousadas R$250-600) or Atins for a base on the sea.',
    comeArrivare: 'Flight to São Luís, then van to Barreirinhas (about 4 hours).',
    comeSpostarsi: 'Only 4x4 with authorized drivers inside the park; boats on the river.',
    periodoMigliore: 'June-September, with peak water in July-August.',
    costi: "Jardineira R$100-150 per person per circuit; for park entry it's worth checking before leaving, because a concession plan is under way.",
    erroriDaEvitare: [
      'Going off-season, when the lagoons are empty',
      'Entering the park in the middle hours of the day without water and a hat',
    ],
    luoghi: [
      {
        "nome": "Lagoa Azul circuit",
        "testo": "The first lagoons: clear, warm rainwater collected between white sand dunes up to 40 metres high. You walk barefoot and swim.",
        "come": "By jardineira, the 4x4 with benches on the bed that crosses the river on a raft and takes the sand track.",
        "quando": "Sunset, when the sand changes colour. June-September, with the most water in July-August.",
        "tempo": "Half a day",
        "costo": "Jardineira 100-150 R$ per person per circuit, guide included. Park entry free (2026)",
        "consiglio": "There is nothing inside the park: bring water and a hat from Barreirinhas."
      },
      {
        "nome": "Lagoa Bonita",
        "testo": "Reached by climbing a steep dune with a rope: from the top you see the sea of dunes and lagoons to the horizon.",
        "come": "Jardineira circuit from the Barreirinhas side.",
        "quando": "At dawn or sunset. At midday the sand is scorching.",
        "tempo": "Half a day",
        "consiglio": "Go in the early hours or in the afternoon."
      },
      {
        "nome": "Rio Preguiças: Vassouras, Mandacaru and Caburé",
        "testo": "A day by boat along the river to the sea. At Vassouras capuchin monkeys come to the bank, at Mandacaru there is a lighthouse from which you look over the dunes, Caburé is a spit of sand between the river and the ocean.",
        "come": "Boat from Barreirinhas.",
        "quando": "Full day.",
        "tempo": "A day",
        "consiglio": "You can sleep at Atins instead of returning."
      },
      {
        "nome": "Atins",
        "testo": "The village at the far end of the park, a kitesurfing base.",
        "come": "By boat or 4x4 from Barreirinhas.",
        "quando": "Best for one night.",
        "tempo": "One night",
        "consiglio": "The return transfer to São Luís is longer from Atins: plan ahead."
      },
      {
        "nome": "Historic centre of São Luís",
        "testo": "The only Brazilian capital founded by the French (1612), with a historic centre of houses covered in Portuguese azulejos, UNESCO heritage.",
        "come": "By app or on foot in the Praia Grande.",
        "quando": "Before leaving for Barreirinhas or on arrival.",
        "tempo": "Half a day",
        "consiglio": "Those arriving early can take a walk in the Praia Grande."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: van from São Luís to Barreirinhas (about 4 hours), Lagoa Azul circuit at sunset",
          "Day 2: Lagoa Bonita at dawn, then Rio Preguiças"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Atins and Caburé, return to São Luís"
        ]
      }
    ],
    zone: [
      {
        "nome": "Barreirinhas",
        "perChi": "Those who want the circuit base",
        "testo": "Pousadas 250-600 R$. Gateway to the park."
      },
      {
        "nome": "Atins",
        "perChi": "Those who want the sea and kitesurfing",
        "testo": "Seaside village, more isolated and less served."
      }
    ],
    sapori: [
      {
        "nome": "Arroz de cuxá",
        "testo": "Rice with vinagreira and dried shrimp, typical of Maranhão."
      },
      {
        "nome": "Torta de camarão",
        "testo": "Shrimp pie, a specialty of São Luís."
      },
      {
        "nome": "Guaraná Jesus",
        "testo": "Local pink soft drink, symbol of the state."
      }
    ],
    attenzioni: [
      "Out of season the lagoons are empty.",
      "Do not enter in the central hours without water and a hat.",
      "In the park you travel only by 4x4 with authorised drivers.",
      "Yellow fever: vaccination recommended for all of Maranhão."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'Turquoise lagoons among the white dunes of the Lençóis Maranhenses',
    immagine: '/images/viaggi/brasile-itinerario/giorno-19-lencois-maranhenses.jpg',
  },
  {
    slug: 'pantanal',
    paeseSlug: 'brasile',
    ordine: 7,
    nome: 'Pantanal (Transpantaneira and Porto Jofre)',
    tipologia: ['wildlife', 'safari', 'wetland'],
    giorniConsigliati: '4-6 days',
    visitataPersonalmente: false,
    introduzione:
      "The largest tropical wetland in the world. In the northern Pantanal, along the dirt road of the Transpantaneira to Porto Jofre, in the dry season jaguars are seen on the riverbanks with a regularity that has no equal.",
    percheAndarci: 'For the jaguars, giant otters, caimans and the wetland birds.',
    cosaVedere: ['The Transpantaneira and its wooden bridges', 'The Cuiabá, Três Irmãos and Piquiri rivers around Porto Jofre'],
    cosaFare: ['Boat outings at dawn and in the afternoon for the jaguars', 'Safaris by car, on horseback or on foot from the pousadas'],
    doveDormire: 'Simple pousadas along the Transpantaneira (budget option), riverside lodges or a floating hotel near Porto Jofre (high-end).',
    comeArrivare: 'Flight to Cuiabá, then about 2 hours to Poconé and the Transpantaneira (147 km to Porto Jofre).',
    comeSpostarsi: 'High-clearance car or 4x4, or packages with transfer; boats with a piloteiro.',
    periodoMigliore: 'July-October, best August-September.',
    costi: 'Boat for the day around R$1,600 for a maximum of 4 people; full packages R$9,000-13,000 per person for 3-4 nights.',
    erroriDaEvitare: [
      'Going in the rainy season (November-April)',
      'Choosing operators that surround the animals with too many boats',
      'Driving the Transpantaneira at night',
    ],
    luoghi: [
      {
        "nome": "The Transpantaneira",
        "testo": "A 147 km dirt road with over a hundred wooden bridges ending at Porto Jofre. It takes a full day, with stops for animals.",
        "come": "Flight to Cuiabá, about 2 hours to Poconé and then the road. High-clearance car or 4x4, or packages with transfers.",
        "quando": "July-October, best August-September. From November to April rain floods the road.",
        "tempo": "One day",
        "consiglio": "Do not drive it at night."
      },
      {
        "nome": "Porto Jofre and the jaguars",
        "testo": "On the Cuiabá, Três Irmãos and Piquiri rivers in the dry season jaguars are seen on the banks with a regularity unmatched anywhere.",
        "come": "Boat outings with a piloteiro at dawn and in the afternoon.",
        "quando": "July-October.",
        "tempo": "1-2 days of outings",
        "costo": "Boat for the full day 1,400-1,600 R$ for 4-6 people, about 1,000 R$ for half a day (traveller reports, 2026)",
        "consiglio": "Avoid operators who surround the animals with too many boats."
      },
      {
        "nome": "Safari from the pousadas",
        "testo": "Safari by car, horse or on foot from the pousadas along the Transpantaneira, for capybaras, caimans, toucans and jabiru storks.",
        "come": "With the pousada, which organises the outings.",
        "quando": "Morning and late afternoon.",
        "tempo": "1-2 days",
        "consiglio": "The budget option: two nights in a simple pousada and one or two boat days from Porto Jofre."
      },
      {
        "nome": "Cuiabá",
        "testo": "The capital of Mato Grosso, a logistics base for the Pantanal and for continuing to the Amazon with a flight to Manaus.",
        "come": "Flight from São Paulo or Brasília.",
        "quando": "Arrival and departure day.",
        "tempo": "One night",
        "consiglio": "Time zone UTC-4, an hour behind Rio."
      }
    ],
    programmi: [
      {
        "titolo": "4 days",
        "tappe": [
          "Day 1: flight to Cuiabá and road to a pousada",
          "Day 2: safari and descent to Porto Jofre",
          "Day 3: boat outings for jaguars",
          "Day 4: return to Cuiabá"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Day 1: flight and pousada along the Transpantaneira",
          "Day 2: safari and descent to Porto Jofre",
          "Days 3-4: boat at dawn and in the afternoon",
          "Day 5: return to Cuiabá and flight"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pousadas along the Transpantaneira",
        "perChi": "Those on a modest budget",
        "testo": "Simple and cheap, with outings on foot and by car."
      },
      {
        "nome": "River lodge or floating hotel at Porto Jofre",
        "perChi": "Those who want jaguars",
        "testo": "High-end, with complete packages 9,000-13,000 R$ per person for 3-4 nights."
      }
    ],
    sapori: [
      {
        "nome": "River fish",
        "testo": "Pintado, pacu and piranha, grilled or in soup."
      },
      {
        "nome": "Carne seca",
        "testo": "Dried beef from Mato Grosso with rice and cassava."
      }
    ],
    attenzioni: [
      "Rainy season (November-April): flooded Transpantaneira and uncertain boats.",
      "Operators who surround animals: choose those who keep their distance.",
      "Do not drive the Transpantaneira at night.",
      "Yellow fever: vaccine recommended for Mato Grosso."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'A jaguar hidden in the vegetation on the riverbank at Porto Jofre, in the northern Pantanal',
    immagine: '/images/brasile/pantanal-stock.jpg',
  },
  {
    slug: 'amazzonia-manaus',
    paeseSlug: 'brasile',
    ordine: 8,
    nome: 'The Amazon from Manaus',
    tipologia: ['forest', 'river', 'wildlife'],
    giorniConsigliati: '4-5 days, up to 10 continuing toward Peru or Colombia',
    visitataPersonalmente: false,
    introduzione:
      "Manaus, a city of over two million people reachable only by air or boat, is the gateway to the Brazilian Amazon, at the confluence of the Rio Negro and the Solimões. From here you go up the river to the triple border with Colombia and Peru.",
    percheAndarci: 'For the flooded forest, the pink dolphins, the Meeting of the Waters and, if you like, to cross the continent by river.',
    cosaVedere: [
      'The Teatro Amazonas and the Mercado Adolpho Lisboa',
      'The Meeting of the Waters',
      'The Anavilhanas archipelago on the Rio Negro',
    ],
    cosaFare: [
      'Two or three nights at a lodge in the forest',
      'Canoeing in the igapó, a guided walk, night caiman spotting',
      'The fast or slow boat to Tabatinga, then Leticia (Colombia) or Iquitos (Peru)',
    ],
    doveDormire: 'Full-board lodges on the Rio Negro (R$800-2,500 per person per night); hotels downtown in Manaus.',
    comeArrivare: 'Flight to Manaus from São Paulo, Brasília or Cuiabá.',
    comeSpostarsi: 'Lodge transfers by boat; to Tabatinga flight (about 1h30), fast boat (30-36 hours) or slow boat (6-7 days).',
    periodoMigliore: 'all year: high water April-July, low water September-December.',
    costi: 'Fast boat Manaus-Tabatinga about R$1,000; fast boat Santa Rosa-Iquitos roughly 150-200 soles.',
    erroriDaEvitare: [
      'Forgetting the exit stamps at the Polícia Federal in Tabatinga',
      'Leaving without the yellow fever vaccine',
      'Counting on fixed boat schedules, which change often',
    ],
    luoghi: [
      {
        "nome": "Teatro Amazonas and Mercado Adolpho Lisboa",
        "testo": "The opera house of the rubber boom and the port market inspired by the Halles of Paris. The two urban stops of Manaus.",
        "come": "On foot in the historic centre.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "consiglio": "The market is a good place to try Amazonian fish."
      },
      {
        "nome": "The Meeting of the Waters",
        "testo": "The point where the dark Rio Negro meets the milky-coffee Solimões and the two waters run side by side without mixing for kilometres.",
        "come": "By boat from Manaus, often included in tours.",
        "quando": "Morning.",
        "tempo": "2-3 hours",
        "consiglio": "It is seen better on a boat tour than from the port."
      },
      {
        "nome": "Anavilhanas archipelago",
        "testo": "One of the largest river archipelagos in the world, on the Rio Negro, with flooded forest (igapó).",
        "come": "By tour or lodge.",
        "quando": "High water April-July to navigate the flooded forest.",
        "tempo": "1-2 days",
        "consiglio": "Check whether the tour includes the flooded forest."
      },
      {
        "nome": "Lodge in the forest",
        "testo": "Two or three nights in a lodge with canoeing in the igapó, guided walks and night caiman spotting. Pink dolphins in the river.",
        "come": "Lodge boat transfer from Manaus.",
        "quando": "All year; low water September-December.",
        "tempo": "2-3 nights",
        "costo": "Lodge with full board 800-2,500 R$ per person per night",
        "consiglio": "For information on agencies, see the Amazon page of the site."
      },
      {
        "nome": "To Tabatinga and the triple border",
        "testo": "From Manaus you can go up the Amazon River to Tabatinga, on the border with Colombia and Peru, and continue to Leticia or Iquitos.",
        "come": "Flight (about 1h30), fast boat (30-36 hours) or slow boat (6-7 days).",
        "quando": "All year; boat schedules change often.",
        "tempo": "1-7 days depending on the means",
        "costo": "Fast boat Manaus-Tabatinga about 1,000 R$ (2026)",
        "consiglio": "Get your exit stamps at the Polícia Federal in Tabatinga."
      }
    ],
    programmi: [
      {
        "titolo": "4 days",
        "tappe": [
          "Day 1: Manaus (theatre and market)",
          "Day 2: Meeting of the Waters and transfer to the lodge",
          "Day 3: canoe in the igapó and night outing",
          "Day 4: return to Manaus"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Day 1: Manaus",
          "Day 2: Meeting of the Waters and lodge",
          "Days 3-4: forest and Anavilhanas",
          "Day 5: return to Manaus"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centre of Manaus",
        "perChi": "Those staying a few days",
        "testo": "Hotels in the centre near the theatre and port. Heat and traffic."
      },
      {
        "nome": "Lodges on the Rio Negro",
        "perChi": "Those who want the forest",
        "testo": "Full board, excursions included. High cost, but everything included."
      }
    ],
    sapori: [
      {
        "nome": "Grilled tambaqui",
        "testo": "Amazonian fish, served with farofa and cassava."
      },
      {
        "nome": "Tacacá",
        "testo": "Soup with tucupi, jambu and shrimp, typical of the Amazon."
      },
      {
        "nome": "Açaí",
        "testo": "Served savoury with fish or sweet with guaraná."
      }
    ],
    attenzioni: [
      "Exit stamps at the Polícia Federal in Tabatinga: forgetting them complicates entry into Colombia and Peru.",
      "Yellow fever vaccine: recommended for all of the Amazon.",
      "Boat schedules are not fixed: keep some margin.",
      "Cash in the country's currency before boarding."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'River boats moored on the Rio Negro at Manaus',
    immagine: '/images/brasile/manaus-stock.jpg',
  },
]
