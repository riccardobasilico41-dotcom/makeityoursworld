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
    comeArrivare: "From Galeão international airport (GIG), about 20 km from the Zona Sul, Copacabana and Ipanema are 40-60 minutes away, longer at rush hour. Taxis from the official cooperatives are paid at the arrivals desk at a fixed municipal fare, about R$122-126 to Copacabana, Ipanema and Leblon (R$145-150 in the evening, at night and on holidays); Uber and 99 cost about R$60-100 from the pick-up area shown in the app. Never accept rides from people who approach you in arrivals. Domestic flights also land at Santos Dumont, downtown.",
    comeSpostarsi: 'Metro between the south zone and downtown, official taxis and apps; on foot only by day in busy areas.',
    periodoMigliore: 'May-October, mild dry winter; December-March hot and rainy.',
    costi: "Low budget about €50-70 a day per person (pousada or hostel, pay-by-weight restaurants, metro); mid-range €120-180 (hotel in Ipanema or Copacabana, restaurants, Christ and Sugarloaf, app rides); high from €300 (seafront hotel, churrascarias and fine restaurants, private guide). Christ the Redeemer R$87 with the van from the Paineiras visitor centre (R$132 from Copacabana or Largo do Machado), R$139 with the cog train from Cosme Velho; Sugarloaf R$205 full ticket; Botanical Garden R$80 for foreigners (2026).",
    erroriDaEvitare: [
      'Holding your phone in your hand on the street or leaving it on your beach towel',
      'Walking in deserted areas in the evening instead of using an app',
      'Going up to the Christ at noon, when it is often in the clouds and crowded',
    ],
    miaEsperienza:
      "I started Brazil here: four days in Rio, between Christ the Redeemer, Santa Teresa and the Escadaria Selarón, Sugarloaf, Copacabana and Ipanema, the sunset from Pedra do Arpoador and evenings of samba in Lapa. I also saw Christ the Redeemer from above, flying over it by helicopter. In Rio my contact is Sylvain.",
    luoghi: [
      {
        "nome": "Christ the Redeemer",
        "testo": "The 30-metre statue (38 with its pedestal) on Corcovado, about 700 metres above the city. From the top you understand Rio's shape: the beaches, the Rodrigo de Freitas lagoon and Sugarloaf at the mouth of the bay.",
        "come": "By the rack railway from Cosme Velho or by the official vans from Paineiras. The ticket is bought online choosing day and time.",
        "quando": "First run of the morning, before clouds and crowds. At midday the statue is often in cloud.",
        "tempo": "3-4 hours including the ride up, the visit and the way down",
        "costo": "Cog train from Cosme Velho R$139, about €24, for adults of any nationality, R$112 for children aged 7-11; official vans from Paineiras about R$87, about €15 (2026)",
        "lat": -22.95194,
        "lng": -43.21056,
        "url": "https://www.tremdocorcovado.rio/",
        "consiglio": "Go in the morning and bring a light jacket: it is windy at the top."
      },
      {
        "nome": "Sugarloaf Mountain",
        "testo": "The granite monolith at the mouth of Guanabara Bay. The cable car rises in two stages, first to Morro da Urca and then to the top, with a 360-degree view.",
        "come": "Cable car from the Praia Vermelha station in the Urca district. Walkers can climb to Urca on a short path and take the cable car only for the second stage.",
        "quando": "Late afternoon, for sunset over the bay and the city lighting up.",
        "tempo": "2-3 hours",
        "costo": "R$205 full ticket, about €35; the reduced fare is for Brazilians only (2026)",
        "orari": "Monday to Friday 8:30-21:00, Saturday and Sunday 7:30-21:00; last boarding at 19:30",
        "lat": -22.9494,
        "lng": -43.1567,
        "url": "https://www.bondinho.com.br/",
        "consiglio": "Arrive an hour before sunset to avoid the queue."
      },
      {
        "nome": "Copacabana, Ipanema and Arpoador",
        "testo": "Rio's two most famous urban beaches, divided into \"postos\", the lifeguard towers that also mark the tribe of each stretch. Between them is Pedra do Arpoador, where people applaud the sunset.",
        "come": "By metro (Cardeal Arcoverde, Siqueira Campos and Cantagalo for Copacabana, General Osório for Ipanema) or on foot along the seafront.",
        "quando": "Morning for the beach; sunset at Arpoador.",
        "tempo": "Half a day",
        "costo": "Free; chairs and umbrellas for hire from the barracas",
        "lat": -22.99056,
        "lng": -43.19167,
        "consiglio": "On the towel bring only what you are willing to lose: do not leave phone and wallet unattended."
      },
      {
        "nome": "Santa Teresa and the Escadaria Selarón",
        "testo": "The hillside district with historic villas, studios and the yellow tram (bondinho). The Escadaria Selarón, a staircase covered in colourful tiles, goes down towards Lapa.",
        "come": "By app or taxi to Santa Teresa, then on foot; the staircase is walked down towards Lapa.",
        "quando": "By day.",
        "tempo": "2-3 hours",
        "costo": "Steps free",
        "lat": -22.91541,
        "lng": -43.17941,
        "consiglio": "Go by day and come back by app."
      },
      {
        "nome": "Historic centre and Museu do Amanhã",
        "testo": "The centre has Confeitaria Colombo, the Theatro Municipal, the cone-shaped cathedral and the library of the Real Gabinete Português de Leitura. At the port, Praça Mauá with the Museu do Amanhã and the Boulevard Olímpico full of murals.",
        "come": "By metro from Ipanema and Copacabana.",
        "quando": "On weekdays, by day: at weekends the centre empties.",
        "tempo": "Half a day",
        "orari": "Museu do Amanhã Thursday to Tuesday 10:00-18:00, last entry 17:00; closed on Wednesdays",
        "lat": -22.89413,
        "lng": -43.1794,
        "url": "https://museudoamanha.org.br/",
        "consiglio": "The centre is for daytime: in the evening and at weekends it empties."
      },
      {
        "nome": "Lapa and samba",
        "testo": "The district under the arches of the aqueduct, with live samba venues and streets full on Friday and Saturday.",
        "come": "By app, round trip, avoiding walking at night.",
        "quando": "Friday and Saturday night.",
        "tempo": "An evening",
        "lat": -22.91259,
        "lng": -43.17985,
        "consiglio": "Carry only your phone and the cash for the evening. Watch for bag snatchers in the crowd late at night."
      },
      {
        "nome": "Botanical Garden (Jardim Botânico)",
        "testo": "The botanical garden founded in 1808 by the Prince Regent John of Portugal, at the foot of Corcovado. The avenue of imperial palms, the orchid and bromeliad houses and the monkeys and toucans in the trees make it the finest green break in the city.",
        "come": "By taxi or app from Ipanema and Leblon, 10-15 minutes; tickets also online at jbrj.eleventickets.com.",
        "quando": "Early morning, when it is cool and the animals are most active.",
        "tempo": "2-3 hours",
        "costo": "R$80 for foreigners, about €14 (2026)",
        "orari": "Arboretum Thursday to Tuesday 8:00-17:00, Wednesday 11:00-17:00; closed 25 December and 1 January",
        "lat": -22.9675,
        "lng": -43.22389,
        "url": "https://www.gov.br/jbrj/pt-br/assuntos/visitacao/horarios-e-ingressos"
      },
      {
        "nome": "Parque Lage",
        "testo": "A 1920s mansion with a courtyard and pool at its centre, inside a park of Atlantic forest below Corcovado. Today it houses an art school and a café, and from the courtyard you see Christ above the trees.",
        "come": "On foot from the Botanical Garden, 10 minutes along Rua Jardim Botânico.",
        "quando": "Morning, combined with the Botanical Garden.",
        "tempo": "1 hour",
        "lat": -22.96055,
        "lng": -43.21204
      },
      {
        "nome": "Real Gabinete Português de Leitura",
        "testo": "The Portuguese community library, completed in 1887 in neo-Manueline style: three floors of wooden shelves under a skylight, with over 350,000 volumes. It is one of the most photographed reading rooms in the world.",
        "come": "Downtown, on foot from Largo da Carioca or Carioca metro station.",
        "quando": "On weekdays.",
        "tempo": "30 minutes",
        "orari": "Monday to Friday 10:00-17:00",
        "lat": -22.90544,
        "lng": -43.18219,
        "url": "https://www.realgabinete.com.br/",
        "consiglio": "Go in quietly: it is a working library, not just a monument."
      },
      {
        "nome": "Museu de Arte do Rio (MAR)",
        "testo": "The art museum on Praça Mauá, next to the Museu do Amanhã, in two buildings joined by a wavy roof. Its exhibitions tell the story of Rio and Brazil, and the terrace looks out over the bay.",
        "come": "On foot from the Museu do Amanhã; metro to Uruguaiana, then the VLT tram.",
        "quando": "On Tuesdays, when entry is free.",
        "tempo": "1-2 hours",
        "costo": "R$20, about €3.50; free on Tuesdays (2026)",
        "orari": "Exhibitions 11:00-18:00, last entry 17:00; closed on Wednesdays",
        "lat": -22.89657,
        "lng": -43.18199,
        "url": "https://museudeartedorio.org.br/"
      },
      {
        "nome": "São Bento Monastery",
        "testo": "The Benedictine monastery on a hill downtown, begun in the 17th century. The façade is plain, the inside is all carved and gilded wood, one of the great examples of Brazilian Baroque.",
        "come": "On foot from Praça Mauá; there is a lift up from Rua Dom Gerardo.",
        "quando": "Sunday morning for mass with the monks singing Gregorian chant, or on weekdays.",
        "tempo": "30-45 minutes",
        "lat": -22.89703,
        "lng": -43.17805,
        "consiglio": "Shoulders and legs covered: it is a working church."
      },
      {
        "nome": "Lagoa Rodrigo de Freitas",
        "testo": "The lagoon behind Ipanema and Leblon, ringed by a cycling and walking path of about 7 km, with kiosks on the water and Corcovado above. The easiest bike ride in the city.",
        "come": "On foot from Ipanema; bike hire along the shore.",
        "quando": "Late afternoon and sunset.",
        "tempo": "1-2 hours",
        "costo": "Free",
        "lat": -22.97112,
        "lng": -43.21172
      },
      {
        "nome": "Vista Chinesa",
        "testo": "A pagoda-shaped viewpoint in Tijuca National Park, the forest inside the city. From here you see the lagoon, Ipanema, Sugarloaf and Christ.",
        "come": "Only by car, app taxi or tour; the road climbs through the forest from the Botanical Garden.",
        "quando": "Morning, with a clear sky.",
        "tempo": "1 hour with the drive",
        "costo": "Free",
        "lat": -22.97316,
        "lng": -43.24976,
        "consiglio": "Don't walk up the forest roads: better a tour or a car with driver."
      },
      {
        "nome": "Maracanã",
        "testo": "The stadium opened for the 1950 World Cup, the temple of Brazilian football. You can visit it on a tour of the dressing rooms and pitch, or go to a Flamengo or Fluminense match.",
        "come": "Metro to Maracanã station.",
        "quando": "A match night, or by day for the tour.",
        "tempo": "1-2 hours for the tour, an evening for a match",
        "lat": -22.9122,
        "lng": -43.2303,
        "consiglio": "Go to matches and back by metro or app, with no valuables."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Christ the Redeemer on the first departure",
          "Lunch in Santa Teresa or downtown",
          "Afternoon: Sugarloaf Mountain",
          "Evening: sunset and dinner in Ipanema"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: the 1-day plan",
          "Day 2: morning on the beach at Ipanema and Copacabana, afternoon downtown with the Real Gabinete and the Museu do Amanhã, evening in Lapa"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Botanical Garden and Parque Lage in the morning, a bike ride round the Lagoa",
          "Afternoon: Santa Teresa and the Escadaria Selarón",
          "Sunset at Arpoador"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ipanema and Leblon",
        "perChi": "Those who want safety and restaurants",
        "testo": "The most polished area, with the sea and the metro close by.",
        "fascia": "€90-250"
      },
      {
        "nome": "Copacabana",
        "perChi": "Those who want the classic atmosphere and lower prices",
        "testo": "The seafront is always alive, but some inner streets are less safe at night.",
        "fascia": "€50-180"
      },
      {
        "nome": "Santa Teresa",
        "perChi": "Those who want an artistic atmosphere",
        "testo": "Pousadas in historic villas, but on the hill with steep streets. In the evening it is better to move by app.",
        "fascia": "€60-150"
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
      "Phone theft on the beach and in the street, robberies in deserted areas in the evening: no jewellery and no phone in your hand. Don't stay on city beaches after dark.",
      "Little cash, but a small sum to hand over in case of a robbery, without resisting.",
      "With Uber and 99 use the official app and check the plate and driver's name: official travel advice warns of fake drivers, airports included.",
      "Official advice (for example the UK government's) recommends not visiting favelas, guided tours included.",
      "Dengue is widespread in cities: repellent and long sleeves at dusk."
    ],
    gite: [
      {
        "nome": "Niterói and the MAC",
        "distanza": "20 minutes by ferry",
        "come": "Boat from the Praça XV terminal downtown, then on foot or by app to the museum.",
        "testo": "Across the bay stands Oscar Niemeyer's Museum of Contemporary Art, the white disc poised on the cliff, with the best view of Rio and Sugarloaf."
      },
      {
        "nome": "Petrópolis",
        "distanza": "about 70 km, 1.5 hours",
        "come": "Bus from the Novo Rio bus station or car with driver.",
        "testo": "The imperial city in the mountains, where the court spent the summer: the Imperial Museum in Pedro II's palace, the cathedral and the cool air of the Serra dos Órgãos."
      },
      {
        "nome": "Ilha Grande",
        "distanza": "about 150 km, 2.5-3 hours plus the boat",
        "come": "Combined van and boat from the Zona Sul, or bus to Conceição de Jacareí and boat; better with a night.",
        "testo": "A car-free island covered in Atlantic forest, with trails between beaches such as Lopes Mendes. It is part of the Costa Verde UNESCO site together with Paraty."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Rio de Janeiro?",
        "risposta": "Three or four days: one for Christ and Santa Teresa, one for Sugarloaf and the beaches, one for downtown and Lapa, plus some slack for the weather."
      },
      {
        "domanda": "Where to stay in Rio?",
        "risposta": "Ipanema and Leblon are the best-kept and safest areas, Copacabana is cheaper with a seafront that never sleeps, Santa Teresa has more atmosphere but is on a hill. It pays to stay near a metro stop."
      },
      {
        "domanda": "Christ the Redeemer: cog train or van?",
        "risposta": "The cog train from Cosme Velho (R$139) runs through the Tijuca forest; the official vans from Paineiras cost less (about R$87). Both are booked online with a date and time."
      },
      {
        "domanda": "What time should you go up Sugarloaf?",
        "risposta": "An hour before sunset, to see the bay in daylight and the city lighting up. Last boarding is at 19:30."
      },
      {
        "domanda": "Is Rio safe for tourists?",
        "risposta": "The main risk is theft and snatching: phone in your pocket, no jewellery, little cash and an app instead of walking at night. Official advice is against visiting favelas, even on tours."
      },
      {
        "domanda": "What is the best time to visit Rio?",
        "risposta": "May to October, with a mild, dry winter. From December to March it is hot with frequent afternoon rain; Carnival fills the city and pushes prices up."
      }
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
    comeArrivare: "From Rio to Paraty the bus from the Novo Rio rodoviária takes about four and a half hours; at weekends buy tickets a few days in advance. By car you take the same route along the BR-101, the Rio-Santos road. For Ilha Grande you take a van to Angra dos Reis or Conceição de Jacareí and then the boat to Vila do Abraão: from Paraty about 3 hours in all, from Rio 3-4 hours. The combined van and boat transfer can be booked the day before in town or online.",
    comeSpostarsi: 'On foot and by boat; there are no cars on Ilha Grande.',
    periodoMigliore: 'April-November for less rain and fewer crowds; December-February full and expensive.',
    erroriDaEvitare: [
      'Not bringing water and food to Lopes Mendes, where there are no services',
      'Leaving large luggage without having booked the airport transfer the day before',
    ],
    miaEsperienza:
      "After Rio, four days on the Costa Verde: two in Paraty, with a boat trip around the bay and the waterfalls on the Cunha road, and two on Ilha Grande, based in Abraão, with a day at Lopes Mendes.",
    luoghi: [
      {
        "nome": "Historic centre of Paraty",
        "testo": "A colonial town, once the gold port of Minas Gerais, a UNESCO World Heritage site since 2019. The centre is closed to cars, with white houses with coloured doors and cobbled streets that sometimes flood at high tide.",
        "come": "Direct buses from the Novo Rio bus station.",
        "quando": "The evening is quiet, with restaurants and live music.",
        "tempo": "Half a day or an evening",
        "lat": -23.21907,
        "lng": -44.71335,
        "consiglio": "At high tide some streets flood: suitable shoes."
      },
      {
        "nome": "Paraty bay by escuna",
        "testo": "The bay has dozens of islands and beaches reachable only by sea. The escunas do a trip of a few hours with swimming stops.",
        "come": "Boarding at Paraty port. Private lanchas cost more but choose where to stop.",
        "quando": "Morning.",
        "tempo": "4-5 hours",
        "costo": "Escuna about 100-150 R$ per person for 4-5 hours with stops (about €17-25), lunch extra",
        "lat": -23.21986,
        "lng": -44.71203,
        "consiglio": "If you want to avoid the crowd, choose a lancha."
      },
      {
        "nome": "Vila do Abraão (Ilha Grande)",
        "testo": "The main village of the car-free island, with pousadas, restaurants and nightlife. Trails leave from here to the Aqueduto and Cachoeira da Feiticeira.",
        "come": "From Paraty by van and boat, via Angra dos Reis or Conceição de Jacareí.",
        "quando": "Afternoon of arrival for a first short trail.",
        "tempo": "One or two nights",
        "lat": -23.14026,
        "lng": -44.16841,
        "consiglio": "Book the Rio airport transfer the day before."
      },
      {
        "nome": "Lopes Mendes, Lagoa Azul and Lagoa Verde",
        "testo": "Lopes Mendes is a long strip of white sand, with open sea and forest behind. Lagoa Azul and Lagoa Verde are visited by boat for snorkelling.",
        "come": "Boat from Abraão to Pouso, then about 20 minutes on foot; the full trail from Abraão takes about three hours.",
        "quando": "Morning. Swim with caution because of waves and currents.",
        "tempo": "Full day",
        "lat": -23.16866,
        "lng": -44.13235,
        "consiglio": "Bring water and food from Vila do Abraão."
      },
      {
        "nome": "Trindade",
        "testo": "A village with wild beaches and the natural pool of Cachadaço.",
        "come": "About 30 minutes south of Paraty, by local bus or taxi.",
        "quando": "Full day, if you have an extra day.",
        "tempo": "A day",
        "lat": -23.35073,
        "lng": -44.72569,
        "consiglio": "Add it if you have an extra day."
      },
      {
        "nome": "Praia do Sono",
        "testo": "A bay of pale sand with a fishing community and no roads, south of Trindade. From here another trail leads to Antigos and Ponta Negra.",
        "come": "Bus or taxi to the Laranjeiras condominium, then about an hour on foot through the forest, or by boat.",
        "quando": "Morning, to leave time to get back before dark.",
        "tempo": "Full day",
        "lat": -23.33422,
        "lng": -44.63261,
        "consiglio": "Bring water and cash: there are only a few kiosks on the beach."
      },
      {
        "nome": "Saco do Mamanguá",
        "testo": "A long, narrow inlet, like a tropical fjord, enclosed by forest-covered hills, with mangroves at its far end. The caiçara communities live only by boat and fishing.",
        "come": "Boat from Paraty or Paraty-Mirim; from the end of the saco the trail starts for the Pão de Açúcar of Mamanguá.",
        "quando": "Morning, when the sea is calm.",
        "tempo": "Full day",
        "lat": -23.26584,
        "lng": -44.62993,
        "consiglio": "The climb to the Pão de Açúcar of Mamanguá takes about an hour and gives a view of the whole inlet."
      },
      {
        "nome": "Cunha waterfalls and alambiques",
        "testo": "On the road to Cunha there are waterfalls and cachaça distilleries.",
        "come": "By taxi or on a tour from the centre of Paraty.",
        "quando": "Afternoon, after the boat trip.",
        "tempo": "Half a day",
        "lat": -23.21255,
        "lng": -44.79232,
        "consiglio": "Bring shoes that can get wet."
      },
      {
        "nome": "Cachoeira da Feiticeira",
        "testo": "A waterfall of about 15 metres in the island's forest, with a pool for swimming. The trail passes near the 19th-century aqueduct of the old lazaretto.",
        "come": "Easy trail from Vila do Abraão, about an hour on foot.",
        "quando": "The afternoon you arrive, or the morning.",
        "tempo": "2-3 hours return",
        "lat": -23.12819,
        "lng": -44.18886,
        "consiglio": "Bring repellent: there is no shortage of mosquitoes in the forest and in Abraão in the evening."
      },
      {
        "nome": "Pico do Papagaio (Ilha Grande)",
        "testo": "The beak-shaped peak that dominates Ilha Grande, at about 980 metres. The trail climbs through the Atlantic Forest to a rock from which you can see the bay and the mainland.",
        "come": "Steep trail from Vila do Abraão; best with a local guide.",
        "quando": "A very early start, or at night for sunrise, only in good weather.",
        "tempo": "5-6 hours return",
        "lat": -23.15506,
        "lng": -44.19681,
        "consiglio": "With low cloud you see nothing from the top: decide on the morning itself."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: arrival in Paraty, the historic centre and dinner with live music",
          "Day 2: the bay by escuna in the morning, waterfalls and alambiques in the afternoon"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Paraty, the historic centre",
          "Day 2: the bay by escuna or Saco do Mamanguá",
          "Day 3: Trindade and Cachadaço, or the trail to Praia do Sono"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Days 1-3 as in the 3-day programme",
          "Day 4: van and boat to Ilha Grande, Cachoeira da Feiticeira in the afternoon",
          "Day 5: Lopes Mendes, or Lagoa Azul and Lagoa Verde by boat; the next day back to Rio"
        ]
      }
    ],
    zone: [
      {
        "nome": "Historic centre of Paraty",
        "perChi": "Those who want a colonial atmosphere",
        "testo": "Pousadas in colonial houses. Cobbled streets, evening noise from bars.",
        "fascia": "€60-200"
      },
      {
        "nome": "Vila do Abraão",
        "perChi": "Those visiting Ilha Grande",
        "testo": "Pousadas, nightlife and boat departures. Car-free island.",
        "fascia": "€40-150"
      },
      {
        "nome": "Jabaquara and outside the centre (Paraty)",
        "perChi": "Those travelling by car who want to spend less",
        "testo": "Pousadas with parking and gardens 10-20 minutes' walk from the historic centre, quieter at night.",
        "fascia": "€40-110"
      },
      {
        "nome": "Trindade",
        "perChi": "Those who want the sea and a village atmosphere",
        "testo": "Simple pousadas and campsites near the beaches, with low-key nightlife. You need the bus to get back to Paraty.",
        "fascia": "€35-100"
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
      "For Lopes Mendes, bring water and food from Vila do Abraão.",
      "Open sea with waves and currents: swim with caution.",
      "Book the airport transfer the day before.",
      "Cobbled streets at high tide: possible flooding."
    ],
    costi: "Low budget about €40-60 a day (simple pousada or hostel, pay-by-weight restaurants, buses); mid-range €90-140 (pousada in Paraty's historic centre or in Abraão, escuna, transfers); high from €220 (charming pousada, private lancha). Escuna on Paraty bay about 100-150 R$ per person for 4-5 hours, lunch extra; a private lancha costs more, to be negotiated at the pier. On the island cash is useful for boats and lunches.",
    gite: [
      {
        "nome": "Paraty-Mirim",
        "distanza": "about 30 minutes, 17 km from Paraty",
        "come": "Local bus or taxi, last stretch on a dirt road.",
        "testo": "A small beach with a little colonial church on the shore and boats to Saco do Mamanguá."
      },
      {
        "nome": "Cunha",
        "distanza": "about 1 hour, 47 km",
        "come": "Car along the paved Serra road.",
        "testo": "A mountain town known for its wood-fired pottery workshops and lavender fields, with the cool climate of the serra."
      },
      {
        "nome": "Angra dos Reis and the islands",
        "distanza": "about 1.5 hours from Paraty, 100 km",
        "come": "Bus along the BR-101 or transfer.",
        "testo": "The port for Ilha Grande and for boat trips among the islands of Angra bay, some of the most beautiful on the coast."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need on the Costa Verde?",
        "risposta": "At least five: three in Paraty with the bay and Trindade, two on Ilha Grande. With fewer days it is best to choose one of the two."
      },
      {
        "domanda": "Paraty or Ilha Grande?",
        "risposta": "Paraty for the colonial centre, the bay by boat and the waterfalls; Ilha Grande for beaches and car-free trails. They are about 3 hours apart by van and boat."
      },
      {
        "domanda": "How do you get to Ilha Grande from Rio?",
        "risposta": "Van to Angra dos Reis or Conceição de Jacareí and then the boat to Vila do Abraão, about 3-4 hours in all. The combined transfer can be booked the day before."
      },
      {
        "domanda": "How much does the escuna trip in Paraty cost?",
        "risposta": "About 100-150 R$ per person for 4-5 hours with swimming stops, lunch extra. A private lancha costs more but lets you choose the beaches."
      },
      {
        "domanda": "Are there cars on Ilha Grande?",
        "risposta": "No, on the island you get around only on foot or by boat. For Lopes Mendes you go by boat to Pouso and then on foot."
      },
      {
        "domanda": "When should you go to the Costa Verde?",
        "risposta": "From March to May and from September to November the weather is good and there are fewer people. In summer, from December to February, it is hot, it often rains in the afternoon and prices go up."
      }
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
    comeArrivare: "Foz do Iguaçu airport (IGU) has flights from São Paulo, Rio and the other big cities, almost always with a connection if you are coming from Rio. It is on the road to the park: the city is 20-30 minutes away by taxi or app, the entrance to the falls about 10 minutes; city bus 120 links the centre, the airport and the park. On the Argentine side there is Puerto Iguazú airport (IGR), with flights from Buenos Aires. You cross the border between the two cities by taxi, bus or transfer, with your passport.",
    comeSpostarsi: 'City buses and taxis to the Brazilian park; taxi or transfer to cross the border.',
    periodoMigliore: 'all year; more water between December and March, less heat between April and September.',
    costi: "Low budget about €40-60 a day (hostel or pousada, bus 120, pay-by-weight restaurants); mid-range €90-140 (hotel in Foz, the falls from both sides, Parque das Aves); high from €250 (hotel inside the park, Macuco Safari, helicopter flights). Brazilian park 134 R$ for foreigners (from 19 December 2025); Argentine park 60,000 pesos for non-resident foreigners (about 40 dollars, from 1 June 2026); Parque das Aves 110 R$; Itaipu Panorâmica 63 R$; inflatable boat 450-550 R$.",
    erroriDaEvitare: [
      'Seeing only one side',
      'Forgetting your passport for the Argentine border',
      'Arriving late at the Garganta del Diablo, which fills up by mid-morning',
    ],
    miaEsperienza:
      "I got here in the evening, flying from Rio after Ilha Grande, and gave the falls two days: the first on the Brazilian side with the Parque das Aves, the second on the Argentine side up to the Garganta del Diablo.",
    luoghi: [
      {
        "nome": "Brazilian side of the falls",
        "testo": "It gives the overall view: a path along the canyon leads to the walkway that goes under the Garganta do Diabo, where you get completely wet.",
        "come": "City buses or taxi from Foz do Iguaçu; you enter by the visitor centre and go up with the park bus.",
        "quando": "Open every day: 9am-4pm Monday to Friday, 8.30am-4pm Saturday and Sunday. Arrive at opening time.",
        "tempo": "2-3 hours",
        "costo": "R$134 for foreigners, R$121 for Brazilians and Mercosur residents (fares in force since 19 December 2025, updated every year). Online only, with day and time",
        "orari": "Daily: 9am-4pm Monday to Friday, 8.30am-4pm on Saturday and Sunday",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "lat": -25.69005,
        "lng": -54.43823,
        "consiglio": "A rain cape or waterproof bag for phone and documents."
      },
      {
        "nome": "Argentine side of the falls",
        "testo": "You walk inside the falls: three walkway circuits (Superior, Inferior and the Garganta del Diablo, reached by a train in the forest) reach above the biggest drop, wrapped in water mist.",
        "come": "The border is crossed by taxi, bus or transfer, showing the passport and doing exit and entry stamps.",
        "quando": "Arrive at opening: the Garganta walkway fills up quickly.",
        "tempo": "Full day",
        "costo": "60,000 pesos for non-resident foreigners (about 40 dollars, from 1 June 2026)",
        "url": "https://www.iguazuargentina.com/",
        "lat": -25.68382,
        "lng": -54.44878,
        "consiglio": "Bring your passport and pesos or a card."
      },
      {
        "nome": "Macuco Safari",
        "testo": "The inflatable boat trip right under the falls.",
        "come": "Can be booked on the spot or in advance; leaves from the Brazilian side.",
        "quando": "Morning or afternoon.",
        "tempo": "1-2 hours",
        "costo": "About 450-550 R$ (about €75-90), separate from park entry",
        "lat": -25.65139,
        "lng": -54.43794,
        "consiglio": "You get completely wet: spare clothes and a phone cover."
      },
      {
        "nome": "Parque das Aves",
        "testo": "A park with toucans, macaws and Atlantic forest birds in large aviaries, opposite the entrance to the Brazilian falls.",
        "come": "Right opposite the entrance of the Brazilian side.",
        "quando": "After the falls, in the afternoon.",
        "tempo": "1-2 hours",
        "costo": "110 R$ full-price ticket (about €18), the same for Brazilians and foreigners, price valid until 30 November 2026",
        "orari": "Daily 8.30am-4.30pm",
        "url": "https://www.parquedasaves.com.br/",
        "lat": -25.61509,
        "lng": -54.48413,
        "consiglio": "It combines well with a morning at the falls."
      },
      {
        "nome": "Itaipu Dam",
        "testo": "One of the largest hydroelectric plants in the world, shared between Brazil and Paraguay on the Paraná River. The panoramic bus tour goes over the dam and the spillway; the special tour also goes into the turbine hall.",
        "come": "About 20 minutes by taxi or app from the centre of Foz; city buses from the terminal.",
        "quando": "Morning or early afternoon; on Friday and Saturday evenings the dam is lit up.",
        "tempo": "1h10 for the panoramic tour, 2h30 for the special tour",
        "costo": "Itaipu Panorâmica 63 R$ (about €10), Itaipu Especial 185 R$ (about €30), Itaipu Iluminada 50 R$ (2026)",
        "orari": "Panorâmica daily 8.30am-5pm; Iluminada Friday and Saturday at 7pm",
        "url": "https://www.turismoitaipu.com.br/",
        "lat": -25.42462,
        "lng": -54.56703,
        "consiglio": "The special tour has limited places and a minimum age: book online in advance."
      },
      {
        "nome": "Trilha do Poço Preto",
        "testo": "A 9 km trail through the Atlantic Forest inside the Brazilian park, on foot or by bike, that reaches the Iguaçu River above the falls. You see butterflies, toucans and, with luck, coatis.",
        "come": "Book it with your park ticket; the starting point is along the park's internal road.",
        "quando": "On foot from 9am to 12pm, by bike from 9am to 3pm.",
        "tempo": "Half a day (19.2 km return)",
        "url": "https://www.cataratasdoiguacu.com.br/",
        "lat": -25.63014,
        "lng": -54.46232,
        "consiglio": "You can only combine it with the falls on the same day if you start at opening time."
      },
      {
        "nome": "Marco das Três Fronteiras",
        "testo": "The point where the Iguaçu River flows into the Paraná, looking out over Brazil, Argentina and Paraguay. The site has a viewpoint, restaurants and an evening show with music and lights.",
        "come": "About 10 minutes by taxi or app from the centre of Foz.",
        "quando": "Sunset, over the rivers.",
        "tempo": "1-2 hours",
        "lat": -25.59015,
        "lng": -54.59025,
        "consiglio": "On the Argentine side there is the Hito Tres Fronteras, free, with the same view the other way round."
      },
      {
        "nome": "Templo Budista Chen Tien",
        "testo": "A Buddhist temple built by the Chinese community of Foz, with a garden of over a hundred statues and a large white Buddha facing Paraguay.",
        "come": "About 15 minutes by taxi or app from the centre.",
        "quando": "Afternoon, with the light on the statues.",
        "tempo": "45 minutes-1 hour",
        "lat": -25.47497,
        "lng": -54.59893,
        "consiglio": "Wear clothing that covers shoulders and knees."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Brazilian side at opening time, Garganta do Diabo walkway",
          "Macuco Safari straight afterwards, if you want the boat",
          "Afternoon: Parque das Aves, opposite the entrance",
          "Sunset at the Marco das Três Fronteiras"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: the 1-day programme",
          "Day 2: Argentine side at opening time, with the Garganta del Diablo first, then the Superior and Inferior circuits"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Itaipu in the morning, the Templo Budista in the afternoon, or the Trilha do Poço Preto in the park"
        ]
      }
    ],
    zone: [
      {
        "nome": "Foz do Iguaçu",
        "perChi": "Those with flights who want convenience",
        "testo": "A wide choice of hotels, linked to the airport. Easier for flights.",
        "fascia": "€40-130"
      },
      {
        "nome": "Puerto Iguazú (Argentina)",
        "perChi": "Those who want to be closer to the Argentine side",
        "testo": "A smaller town, with less choice and less convenient flights.",
        "fascia": "€40-150"
      },
      {
        "nome": "Hotel inside the Brazilian park",
        "perChi": "Those who want the view from the room",
        "testo": "A high-end hotel inside the park.",
        "fascia": "€350-800"
      },
      {
        "nome": "Avenida das Cataratas (Foz)",
        "perChi": "Those who want to stay close to the Brazilian park",
        "testo": "The road between the city and the park, with resorts and hotels with pools set among greenery. You need a taxi or bus 120 in the evening.",
        "fascia": "€70-200"
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
      "Yellow fever: vaccination recommended for anyone visiting Iguaçu Falls."
    ],
    gite: [
      {
        "nome": "Ciudad del Este (Paraguay)",
        "distanza": "about 20-30 minutes, 10 km",
        "come": "Taxi or bus across the Ponte da Amizade, with your passport.",
        "testo": "The city of cut-price trade, full of shopping centres. Useful only for shopping; the bridge is often congested."
      },
      {
        "nome": "Itaipu",
        "distanza": "about 20 minutes, 15 km",
        "come": "Taxi, app or city bus.",
        "testo": "The dam on the Paraná, with the panoramic tour, the special tour into the turbine hall and the evening light show on Friday and Saturday."
      },
      {
        "nome": "Minas de Wanda (Argentina)",
        "distanza": "about 1 hour from Puerto Iguazú, 50 km",
        "come": "Car or tour from the Argentine side.",
        "testo": "An open-cast mine of amethysts, agates and quartz in the Misiones forest, with a short guided visit. Combine it with the return from the Argentine side."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Foz do Iguaçu?",
        "risposta": "Two full days: one for the Brazilian side and Parque das Aves, one for the Argentine side. With a third you can add Itaipu and the Marco das Três Fronteiras."
      },
      {
        "domanda": "Is the Brazilian or the Argentine side of the falls better?",
        "risposta": "The Brazilian side gives the overall view in 2-3 hours; the Argentine side, over a full day, takes you in among and above the drops. If you can, see both."
      },
      {
        "domanda": "How much does entry to the falls cost?",
        "risposta": "Brazilian side 134 R$ for foreigners (from 19 December 2025), online only with a set day and time. Argentine side 60,000 pesos for non-resident foreigners, about 40 dollars, from 1 June 2026."
      },
      {
        "domanda": "Do you need a passport for the Argentine side?",
        "risposta": "Yes: at the border you get exit stamps for Brazil and entry stamps for Argentina, even on a day trip. Taxis and transfers wait while you go through the formalities."
      },
      {
        "domanda": "Should you stay in Foz do Iguaçu or Puerto Iguazú?",
        "risposta": "Foz has more choice and more convenient flights; Puerto Iguazú is smaller but closer to the Argentine side. For two days on the two sides, either works."
      },
      {
        "domanda": "When should you go to Iguazú?",
        "risposta": "All year round. From December to February the flow is stronger but it is hot and crowded; between April and June the climate is milder."
      }
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
    comeArrivare: "Deputado Luís Eduardo Magalhães International Airport (SSA) has flights from all the big Brazilian cities and some direct flights from Europe. From there to Barra it is about 30-50 minutes by taxi or app, longer at rush hour; to Pelourinho about 40-60 minutes. The metro links the airport to the centre (Lapa station), but with luggage a taxi or app is more convenient. From Foz do Iguaçu the flight with a connection takes 4-6 hours.",
    comeSpostarsi: 'Apps and taxis; on foot in the Pelourinho by day.',
    periodoMigliore: 'September-March; heavier rains between April and June.',
    erroriDaEvitare: [
      'Straying from the main streets of the Pelourinho in the evening',
      'Accepting the Bonfim ribbons "gifted" to you on the street',
    ],
    miaEsperienza:
      "Three days in Salvador during the Brazil trip: the Pelourinho, the Elevador Lacerda down to the Mercado Modelo, the Bonfim church and Rio Vermelho in the evening. We watched the first sunset from the Farol da Barra.",
    luoghi: [
      {
        "nome": "Pelourinho and Igreja de São Francisco",
        "testo": "The historic centre, UNESCO heritage: uphill squares with pastel-coloured colonial houses and baroque churches. The Igreja de São Francisco is covered in gold inside.",
        "come": "On foot from your lodging in the centre or by app from the seaside districts.",
        "quando": "By day. In the evening the Pelourinho often has concerts and drumming: check the week's programme.",
        "tempo": "Half a day",
        "orari": "The Igreja de São Francisco has been closed for restoration since February 2025, after part of the ceiling collapsed, with reopening expected around 2029: check before you go",
        "lat": -12.96667,
        "lng": -38.5,
        "consiglio": "In the evening the side streets empty early: stay on the main streets and come back by app."
      },
      {
        "nome": "Terreiro de Jesus and Catedral Basílica",
        "testo": "The large square of Pelourinho, with the 17th-century Jesuit cathedral and two other churches facing it. Inside the cathedral are gilded altars and carved wooden ceilings.",
        "come": "On foot from Pelourinho or from the Elevador Lacerda, in 5 minutes.",
        "quando": "Morning, when the churches are open.",
        "tempo": "1 hour",
        "lat": -12.9729,
        "lng": -38.51033,
        "consiglio": "From here you walk down to the Largo do Pelourinho, the sloping square of the postcards."
      },
      {
        "nome": "Elevador Lacerda and Mercado Modelo",
        "testo": "The public lift of 1873, 72 metres high, links the upper town to the lower town. Below is the Mercado Modelo, a craft market.",
        "come": "The lift starts at Praça Tomé de Souza.",
        "quando": "Morning.",
        "tempo": "1-2 hours",
        "costo": "Elevador about 1 R$ per ride (since 2025)",
        "lat": -12.97417,
        "lng": -38.51333,
        "consiglio": "The market is touristy: haggle over prices."
      },
      {
        "nome": "Museu Afro-Brasileiro",
        "testo": "In the old Faculty of Medicine building on the Terreiro de Jesus, it tells the story of the African cultures that reached Bahia and of candomblé, with Carybé's wooden panels dedicated to the orixás.",
        "come": "On the Terreiro de Jesus, on foot.",
        "quando": "During the day on weekdays.",
        "tempo": "1 hour",
        "lat": -12.97279,
        "lng": -38.50977,
        "consiglio": "Visit it before an evening of music or a capoeira roda: it helps you understand what you are seeing."
      },
      {
        "nome": "Fundação Casa de Jorge Amado",
        "testo": "The blue house on the Largo do Pelourinho dedicated to the writer who told the world about Salvador, with photos, book covers from editions in dozens of languages and a café.",
        "come": "On the Largo do Pelourinho, on foot.",
        "quando": "During the day.",
        "tempo": "45 minutes",
        "lat": -12.97168,
        "lng": -38.50853,
        "consiglio": "A cool break between one church and the next."
      },
      {
        "nome": "Santo Antônio Além do Carmo",
        "testo": "The historic district beyond Pelourinho, quieter, with pousadas in colonial houses, small restaurants and the Largo de Santo Antônio viewpoint over the bay.",
        "come": "On foot from Pelourinho up the Ladeira do Carmo, about 10-15 minutes.",
        "quando": "Late afternoon and evening.",
        "tempo": "1-2 hours",
        "lat": -12.9655,
        "lng": -38.50364,
        "consiglio": "Sunset over the bay from the Largo de Santo Antônio is less crowded than at the Farol."
      },
      {
        "nome": "Igreja do Senhor do Bonfim",
        "testo": "The church of the coloured ribbons, tied to the gate and the wrist as a vow.",
        "come": "By taxi or app from the upper city, about 20-30 minutes.",
        "quando": "Morning.",
        "tempo": "1 hour",
        "lat": -12.92375,
        "lng": -38.50812,
        "consiglio": "If someone offers you a ribbon on the street and you do not want it, decline politely."
      },
      {
        "nome": "Farol da Barra",
        "testo": "The lighthouse at the tip of the city, with the sunset over the bay.",
        "come": "By app or bus from Barra.",
        "quando": "Sunset.",
        "tempo": "1-2 hours",
        "lat": -13.01033,
        "lng": -38.53293,
        "consiglio": "The first sunset in Salvador is watched from here."
      },
      {
        "nome": "Praia do Porto da Barra",
        "testo": "The city beach most loved by baianos, in a small bay with calm water between the Forte de Santo Antônio and the Forte de Santa Maria. At sunset the sun drops into the sea.",
        "come": "On foot from Barra; by app or bus from the centre.",
        "quando": "Morning for a swim, evening for the sunset.",
        "tempo": "Half a day",
        "lat": -13.00327,
        "lng": -38.5333,
        "consiglio": "Leave documents and valuables at the pousada: take the bare minimum to the beach."
      },
      {
        "nome": "Solar do Unhão and MAM Bahia",
        "testo": "A colonial complex on the sea, a former sugar mill and warehouse, now home to the Museum of Modern Art of Bahia, with outdoor sculptures and the bay in front.",
        "come": "By taxi or app from the centre, a few minutes; walking along Avenida Contorno is not recommended.",
        "quando": "Afternoon, for the sunset over the bay.",
        "tempo": "1-2 hours",
        "orari": "Usually closed on Monday",
        "lat": -12.98263,
        "lng": -38.52027,
        "consiglio": "On Saturday afternoons there is often live jazz at sunset: check the programme."
      },
      {
        "nome": "Rio Vermelho and acarajé",
        "testo": "The nightlife district, where the baianas fry acarajé in palm oil in the street.",
        "come": "By app from the centre or Barra.",
        "quando": "Evening.",
        "tempo": "An evening",
        "lat": -13.01006,
        "lng": -38.48996,
        "consiglio": "Eat the acarajé from the baianas, not in tourist venues."
      },
      {
        "nome": "Feira de São Joaquim",
        "testo": "The big popular market on the bay: fruit, spices, pottery, cages of animals and stalls of items for candomblé. Chaotic and real, with no tourists.",
        "come": "By taxi or app from the centre, about 10 minutes.",
        "quando": "Early morning, Monday to Saturday.",
        "tempo": "1 hour",
        "lat": -12.95185,
        "lng": -38.5024,
        "consiglio": "Better with a local or a guide: phone in your pocket and no jewellery."
      },
      {
        "nome": "Lagoa do Abaeté",
        "testo": "A dark-water lagoon surrounded by white dunes in the Itapuã district, celebrated in Bahian music. Today it is a park with boardwalks and kiosks.",
        "come": "About 40-50 minutes by app or taxi from Barra.",
        "quando": "Afternoon, combined with Itapuã beach.",
        "tempo": "1-2 hours",
        "lat": -12.94376,
        "lng": -38.35972,
        "consiglio": "Swimming in the lagoon is not advisable: you come for the scenery."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Terreiro de Jesus, Catedral Basílica and Museu Afro-Brasileiro",
          "Largo do Pelourinho and Casa de Jorge Amado",
          "Elevador Lacerda and Mercado Modelo",
          "Sunset at the Farol da Barra"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: the 1-day programme",
          "Day 2: Igreja do Senhor do Bonfim in the morning, Solar do Unhão in the afternoon, evening in Rio Vermelho with acarajé"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Porto da Barra in the morning, Santo Antônio Além do Carmo at sunset, or a boat trip on the Baía de Todos os Santos; a capoeira roda at a school in Pelourinho, asking beforehand"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pelourinho and Santo Antônio Além do Carmo",
        "perChi": "Those who want the historic centre",
        "testo": "Pousadas in historic houses. Patrolled by day, empties in the evening.",
        "fascia": "€40-150"
      },
      {
        "nome": "Barra and Rio Vermelho",
        "perChi": "Those who want the sea and nightlife",
        "testo": "Safer in the evening, near the beaches and restaurants.",
        "fascia": "€40-140"
      },
      {
        "nome": "Ondina and the seafront",
        "perChi": "Those who want a big hotel by the sea",
        "testo": "Between Barra and Rio Vermelho, with larger hotels facing the ocean. Handy for evenings in Rio Vermelho; you need an app to get to the historic centre.",
        "fascia": "€60-160"
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
      "Pushy vendors around the sights: politely turn down what you do not want.",
      "Petty crime: phone thefts and bag snatching.",
      "Use apps rather than walking at night."
    ],
    costi: "Low budget about €40-60 a day (pousada or hostel, acarajé and pay-by-weight restaurants, metro and buses); mid-range €90-140 (hotel in Barra or Pelourinho, Bahian restaurants, apps for getting around); high from €220 (boutique hotel in a historic house, private boat trip on the bay). Elevador Lacerda about 1 R$ per ride (since 2025); acarajé from the baianas a few reais.",
    gite: [
      {
        "nome": "Morro de São Paulo",
        "distanza": "about 2.5 hours by catamaran",
        "come": "Catamaran from the Terminal Marítimo near the Mercado Modelo; alternatively via Ilha de Itaparica and by road.",
        "testo": "A car-free village on the island of Tinharé, with numbered beaches and natural pools at low tide. Best to spend at least one night: the sea on the catamaran can be rough."
      },
      {
        "nome": "Baía de Todos os Santos (Ilha dos Frades and Itaparica)",
        "distanza": "a day by boat",
        "come": "Organised escuna trip from the port of Salvador.",
        "testo": "The classic tour of the bay, with swimming stops at Ilha dos Frades and lunch on Itaparica. Easy, but crowded at weekends."
      },
      {
        "nome": "Praia do Forte",
        "distanza": "about 1 hour 15 minutes, 80 km",
        "come": "Car, transfer or bus from the rodoviária.",
        "testo": "A fishing village turned beach resort, with natural pools, the base of Projeto Tamar for sea turtles and the ruins of the Castelo Garcia d'Ávila."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Salvador?",
        "risposta": "Three: one for Pelourinho and the lower city, one for Bonfim, the Solar do Unhão and Rio Vermelho, one for the sea or the bay. With Morro de São Paulo, add two."
      },
      {
        "domanda": "Is Pelourinho safe?",
        "risposta": "By day, on the main streets, it is policed and busy. In the evening the side streets empty early: stay on the lively streets and go back by app, called from outside the venue."
      },
      {
        "domanda": "Where should you stay in Salvador?",
        "risposta": "In Pelourinho or Santo Antônio for the history, in Barra and Rio Vermelho for the sea and the nightlife, and these are easier to get around in the evening."
      },
      {
        "domanda": "Is the Igreja de São Francisco open?",
        "risposta": "It has been closed for restoration since February 2025, after part of the ceiling collapsed, with reopening expected around 2029. It is worth checking before you go."
      },
      {
        "domanda": "When should you go to Salvador?",
        "risposta": "From September to March there is less rain and the sea is at its best; April-June is the wettest period. At Carnival and in early February the city is full and prices go up."
      },
      {
        "domanda": "Where can you eat real acarajé?",
        "risposta": "From the baianas at street stalls, especially in Rio Vermelho and Barra, fried to order in palm oil. It costs a few reais."
      }
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
    comeArrivare: "From Salvador to Lençóis it is about 6-7 hours by bus inland, leaving from the rodoviária: the early morning or overnight bus is best. At some times of year Azul flies from Salvador to the Chapada airport, about twenty kilometres from town, in about 1 hour 15, with few flights a week. For the excursions you then need tours with guide and car.",
    comeSpostarsi: 'Guided tours and car; the trails are poorly marked.',
    periodoMigliore: 'April-September, dry season; Poço Encantado lights up from April to September.',
    costi: "Pousadas in Lençóis 200-500 R$ a night for a double (about 35-90 €). Day tours 150-300 R$ per person (about 25-50 €), plus guide and cave entrances, usually excluded. Low budget: a simple pousada shared by two and a group tour, about 50-70 € a day per person plus meals; mid and high budgets rise with nicer pousadas and private guides.",
    erroriDaEvitare: ['Doing the long trails without a guide', "Underestimating the initial climb of the Fumaça"],
    miaEsperienza:
      "Three days in the Chapada, based in Lençóis, arriving by bus from Salvador. We did the classic tour with a guide and car, between the caves, the Poço do Diabo and the sunset on Morro do Pai Inácio.",
    luoghi: [
      {
        "nome": "Morro do Pai Inácio",
        "testo": "The mesa that dominates the valley. Sunset from here is the Chapada classic.",
        "come": "By tour or car; from the car park a short, steep 20-30 minute climb.",
        "quando": "Sunset.",
        "tempo": "2 hours",
        "lat": -12.4594,
        "lng": -41.4715,
        "consiglio": "Arrive half an hour before sunset and bring a head torch for the way down: at the top you stand on rock with no railings."
      },
      {
        "nome": "Cachoeira da Fumaça",
        "testo": "A waterfall of about 340 metres: the wind often scatters the water into mist before it reaches the ground.",
        "come": "From the Vale do Capão, about an hour and a half by road from Lençóis, on a trail of about 6 km return with a steep first climb.",
        "quando": "On clear days: with low cloud you see little from the top.",
        "tempo": "Half a day, starting early",
        "lat": -12.6007,
        "lng": -41.4551,
        "consiglio": "Do not underestimate the initial climb."
      },
      {
        "nome": "Poço Azul and Poço Encantado",
        "testo": "Flooded caves where sunlight enters and turns the water blue. At Poço Azul you can get in the water with a mask; Poço Encantado is for looking only.",
        "come": "With a tour and guide, by car.",
        "quando": "The sunbeam only enters in certain months and hours: ask your guide for times.",
        "tempo": "Half a day",
        "costo": "Entrance ticket at both caves, usually not included in the tour price.",
        "lat": -12.7821,
        "lng": -41.1492,
        "consiglio": "Check the light times: out of season the blue is not seen."
      },
      {
        "nome": "Lapa Doce and Pratinha",
        "testo": "Caves with turquoise water. At Pratinha you swim with mask and torch inside the cave, guided by a rope; Lapa Doce is walked for about an hour, among stalactites and large chambers.",
        "come": "Classic tour with guide and car.",
        "quando": "Full day.",
        "tempo": "A day",
        "costo": "Paid entrances, usually not included in the tour.",
        "lat": -12.3339,
        "lng": -41.6048,
        "consiglio": "Go with a guide: in the caves it helps you find your way."
      },
      {
        "nome": "Vale do Pati",
        "testo": "A multi-day trek through remote valleys, sleeping in farmers' houses.",
        "come": "With a local guide, to be arranged days ahead; you start on foot from Guiné or the Vale do Capão.",
        "quando": "Dry season.",
        "tempo": "3-5 days",
        "lat": -12.7566,
        "lng": -41.5119,
        "consiglio": "For those with time and legs, it is the alternative to day tours."
      },
      {
        "nome": "Lençóis",
        "testo": "The town born in the 19th century with the diamond rush, with colourful colonial houses, stone streets and the river running over red rocks below the centre. It is the base for tours: the agencies are all in the centre and in the evening you can walk the whole town.",
        "come": "Bus from Salvador to the bus station, a few minutes from the centre.",
        "quando": "In the evening, when the next day's tours are arranged.",
        "tempo": "Half a day",
        "lat": -12.5615,
        "lng": -41.3895,
        "consiglio": "Talk to a couple of agencies and book guide and car the evening before."
      },
      {
        "nome": "Ribeirão do Meio",
        "testo": "A river running over a long slab of smooth rock, used as a natural slide, with a pool for swimming. It is the easiest walk from Lençóis.",
        "come": "On foot from town, about 45 minutes on an easy trail.",
        "quando": "On arrival day or a free afternoon.",
        "tempo": "2-3 hours",
        "lat": -12.5875,
        "lng": -41.3893,
        "consiglio": "The pools are dark and deep: only get in where you see locals getting in."
      },
      {
        "nome": "Poço do Diabo",
        "testo": "A waterfall dropping into a dark pool surrounded by rock walls, on the Mucugezinho river. It is one of the stops on the classic tour towards Pai Inácio and the caves.",
        "come": "Short trail from the road, included in the classic tour with guide and car.",
        "quando": "In the hot hours, for a swim.",
        "tempo": "1 hour",
        "lat": -12.4617,
        "lng": -41.4145,
        "consiglio": "Water shoes for the slippery rocks."
      },
      {
        "nome": "Vale do Capão",
        "testo": "A green valley below the mesas, with the village of Caeté-Açu and a more alternative atmosphere than Lençóis. The Fumaça trail and one of the routes into the Vale do Pati start here.",
        "come": "By car or transfer from Lençóis, about an hour and a half.",
        "quando": "For one or two nights, if you want to hike.",
        "tempo": "1-2 days",
        "lat": -12.6093,
        "lng": -41.5014,
        "consiglio": "Those doing the Fumaça early in the morning save a lot of driving by sleeping here."
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
      },
      {
        "titolo": "1 day",
        "tappe": [
          "Classic tour with guide and car: Lapa Doce or Pratinha, Poço do Diabo, sunset at Pai Inácio"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Day 1: arrival in Lençóis and Ribeirão do Meio",
          "Day 2: classic cave tour and Pai Inácio",
          "Days 3-5: Vale do Pati trek with a guide, or the Fumaça from Capão and Poço Azul"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lençóis",
        "perChi": "Those who want the tour base",
        "testo": "Pousadas for every budget. A small town with agencies and restaurants.",
        "fascia": "200-500 R$, about 35-90 €"
      },
      {
        "nome": "Vale do Capão",
        "perChi": "Those who want to hike",
        "testo": "Quieter, close to the Fumaça and the Pati."
      },
      {
        "nome": "Mucugê and Igatu",
        "perChi": "those exploring the south of the Chapada",
        "testo": "Stone towns from the diamond era, closer to Poço Azul, Poço Encantado and the Pati trailheads. Fewer agencies and services than Lençóis."
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
    gite: [
      {
        "nome": "Igatu",
        "distanza": "about 2 hours by car from Lençóis",
        "come": "By car or on a tour, via Andaraí; the last stretch is on a stone road.",
        "testo": "A partly abandoned diamond miners' village, with ruined dry-stone houses among the vegetation. It pairs with Poço Azul and Poço Encantado, which are in the same area."
      },
      {
        "nome": "Cachoeira do Buracão",
        "distanza": "in the south of the Chapada, towards Ibicoara: far from Lençóis, best with a night in the area",
        "come": "With a local guide, required for access.",
        "testo": "A tall waterfall dropping into a narrow canyon: the last stretch is done swimming up the river between the walls to the pool below the fall."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in the Chapada Diamantina?",
        "risposta": "Three days are enough for the classic cave tour, Pai Inácio and one of Fumaça or Poço Azul. With five days you add the Vale do Pati trek."
      },
      {
        "domanda": "Do you need a guide?",
        "risposta": "Not everywhere, but on long trails and in the caves yes, and the routes are poorly marked. Agencies in Lençóis arrange guide and car the evening before."
      },
      {
        "domanda": "Is it better to stay in Lençóis or the Vale do Capão?",
        "risposta": "Lençóis for day tours, services and agencies; Capão for those who want to hike, close to the Fumaça and the Pati, in a quieter setting."
      },
      {
        "domanda": "Can you swim at Poço Azul and Poço Encantado?",
        "risposta": "At Poço Azul yes, with a mask. Poço Encantado is for looking only. Both charge an entrance fee."
      },
      {
        "domanda": "When can you see the blue light in Poço Encantado?",
        "risposta": "Roughly from April to September, in the middle hours of the day, when the sunbeam enters the cave."
      },
      {
        "domanda": "What is the best time to go?",
        "risposta": "April to September, in the dry season, with walkable trails; the waterfalls still have water until June-July."
      }
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
    comeArrivare: "You fly to São Luís, almost always with a stop in São Paulo, Brasília or Fortaleza; from the airport to the centre is about half an hour. From São Luís to Barreirinhas is about 4 hours by van, leaving early in the morning. Atins is reached from Barreirinhas by boat or 4x4; Santo Amaro has a separate access from São Luís.",
    comeSpostarsi: 'Only 4x4 with authorized drivers inside the park; boats on the river.',
    periodoMigliore: 'June-September, with peak water in July-August.',
    costi: "Pousadas in Barreirinhas 250-600 R$ a night for a double (about 45-105 €); in Atins mid-to-upper range. Jardineira 100-150 R$ per person per circuit (about 17-26 €), park entry free, Rio Preguiças boat and lunches extra. Low budget: a simple pousada shared by two and one circuit a day, about 40-70 € per person plus meals; with beach pousadas in Atins and scenic flights the bill goes up.",
    erroriDaEvitare: [
      'Going off-season, when the lagoons are empty',
      'Entering the park in the middle hours of the day without water and a hat',
    ],
    miaEsperienza:
      "These were the last days of the Brazil trip: from São Luís by van to Barreirinhas, the first jardineira ride out to the dunes and a last day by boat along the Rio Preguiças to the sea.",
    luoghi: [
      {
        "nome": "Lagoa Azul circuit",
        "testo": "The first lagoons: clear, warm rainwater collected between white sand dunes up to 40 metres high. You walk barefoot and swim.",
        "come": "By jardineira, the 4x4 with benches on the bed that crosses the river on a raft and takes the sand track.",
        "quando": "Sunset, when the sand changes colour. The lagoons fill with the rains, which fall roughly from January to June, and evaporate in the dry months: check the water level before you go.",
        "tempo": "Half a day",
        "costo": "Jardineira roughly 100-150 R$ per person per circuit, guide included (about 17-26 €). Park entry free.",
        "orari": "Departures are in the early afternoon, to stay until sunset; back after dark.",
        "lat": -2.6631,
        "lng": -42.8621,
        "consiglio": "There is nothing inside the park: bring water and a hat from Barreirinhas."
      },
      {
        "nome": "Lagoa Bonita",
        "testo": "Reached by climbing a steep dune with a rope: from the top you see the sea of dunes and lagoons to the horizon.",
        "come": "Jardineira circuit from the Barreirinhas side.",
        "quando": "At dawn or sunset. At midday the sand is scorching.",
        "tempo": "Half a day",
        "costo": "Jardineira roughly 100-150 R$ per person, guide included (about 17-26 €). Park entry free.",
        "lat": -2.6833,
        "lng": -42.938,
        "consiglio": "Go in the early hours or in the afternoon."
      },
      {
        "nome": "Rio Preguiças: Vassouras, Mandacaru and Caburé",
        "testo": "A day by boat along the river to the sea. At Vassouras capuchin monkeys come to the bank, at Mandacaru there is a lighthouse from which you look over the dunes, Caburé is a spit of sand between the river and the ocean.",
        "come": "Boat from Barreirinhas in the morning, with stops along the river and lunch at Caburé (extra).",
        "quando": "Full day.",
        "tempo": "A day",
        "lat": -2.6503,
        "lng": -42.689,
        "consiglio": "You can sleep at Atins instead of returning."
      },
      {
        "nome": "Atins",
        "testo": "The village at the far end of the park, a kitesurfing base.",
        "come": "By boat or 4x4 from Barreirinhas.",
        "quando": "Best for one night.",
        "tempo": "One night",
        "lat": -2.5717,
        "lng": -42.7428,
        "consiglio": "The return transfer to São Luís is longer from Atins: plan ahead."
      },
      {
        "nome": "Historic centre of São Luís",
        "testo": "The only Brazilian state capital founded by the French (1612), it has a historic centre on the UNESCO list since 1997 with houses covered in Portuguese azulejos.",
        "come": "By app or on foot in the Praia Grande.",
        "quando": "Before leaving for Barreirinhas or on arrival.",
        "tempo": "Half a day",
        "lat": -2.5309,
        "lng": -44.3057,
        "consiglio": "Those arriving early can take a walk in the Praia Grande."
      },
      {
        "nome": "Barreirinhas",
        "testo": "The town on the Rio Preguiças that serves as the gateway to the park, with the circuit agencies, pousadas and the riverfront where the boats leave. It is not pretty in itself, but it is the most practical base.",
        "come": "By van from São Luís, about 4 hours.",
        "quando": "All year; for full lagoons June to September.",
        "tempo": "The base for 2-3 nights",
        "lat": -2.7541,
        "lng": -42.826,
        "consiglio": "Book the circuits the evening before and bring cash for boats and lunches."
      },
      {
        "nome": "Mandacaru lighthouse",
        "testo": "The red and white lighthouse above the village of Mandacaru, along the Rio Preguiças. From the top you see the river, the dunes and the sea together.",
        "come": "A stop on the Rio Preguiças boat trip; you climb on foot by an inside staircase.",
        "quando": "During the boat trip, mid-morning.",
        "tempo": "30-45 minutes",
        "lat": -2.5926,
        "lng": -42.7074,
        "consiglio": "Lots of steps and little space at the top: wait your turn."
      },
      {
        "nome": "Caburé",
        "testo": "A narrow spit of sand between the river and the ocean, with a few pousadas and fish restaurants. It is the lunch stop on the boat trip.",
        "come": "By boat from Barreirinhas or Atins.",
        "quando": "At lunchtime; from August the wind blows hard.",
        "tempo": "2 hours",
        "lat": -2.58,
        "lng": -42.6965,
        "consiglio": "The wind at Caburé and Atins is strong from August on: it is kitesurfing season, less comfortable for swimming."
      },
      {
        "nome": "Canto do Atins",
        "testo": "The spot where the park's dunes come almost down to the beach, west of Atins, with lagoons within walking distance and a couple of shrimp restaurants. From the Atins side the park is less crowded.",
        "come": "By 4x4 or on foot along the beach from Atins.",
        "quando": "Late afternoon, for the lagoons at sunset.",
        "tempo": "Half a day",
        "lat": -2.5719,
        "lng": -42.8021,
        "consiglio": "Bring water: there is no shade among the dunes."
      },
      {
        "nome": "Santo Amaro do Maranhão",
        "testo": "The western gateway to the park, less visited than Barreirinhas, with large lagoons a few kilometres from town. Here the dunes come almost up to the houses.",
        "come": "From São Luís by 4x4 or transfer, then jardineira to the lagoons.",
        "quando": "June to September, with full lagoons.",
        "tempo": "1-2 days",
        "lat": -2.4988,
        "lng": -43.2533,
        "consiglio": "The 10 R$ tourist tax introduced by the town in 2023 has been suspended by the Maranhão court."
      },
      {
        "nome": "Queimada dos Britos",
        "testo": "An oasis home to a few families in the heart of the dunes, with trees, animals and small houses. It is one of the stops on the trek that crosses the park from Atins towards Santo Amaro.",
        "come": "On foot with a guide on the multi-day crossing, or by 4x4 from Santo Amaro.",
        "quando": "Dry season with full lagoons, June to September.",
        "tempo": "One night on the crossing",
        "lat": -2.5023,
        "lng": -43.0599,
        "consiglio": "The crossing is only done with a guide: there are no marked trails among the dunes."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: van from São Luís to Barreirinhas, Lagoa Azul circuit at sunset",
          "Day 2: Lagoa Bonita at dawn, then Rio Preguiças"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Atins and Caburé, return to São Luís"
        ]
      },
      {
        "titolo": "1 day",
        "tappe": [
          "Early arrival in Barreirinhas, Lagoa Azul or Lagoa Bonita circuit in the afternoon until sunset"
        ]
      },
      {
        "titolo": "4 days",
        "tappe": [
          "Day 1: São Luís and Praia Grande",
          "Day 2: van to Barreirinhas and Lagoa Azul circuit",
          "Day 3: Lagoa Bonita at dawn, free afternoon or scenic flight",
          "Day 4: boat on the Rio Preguiças, Mandacaru and Caburé, night in Atins"
        ]
      }
    ],
    zone: [
      {
        "nome": "Barreirinhas",
        "perChi": "Those who want the circuit base",
        "testo": "Pousadas for every budget. Gateway to the park.",
        "fascia": "250-600 R$, about 45-105 €"
      },
      {
        "nome": "Atins",
        "perChi": "Those who want the sea and kitesurfing",
        "testo": "Seaside village, more isolated and with fewer services, with kitesurf resorts and mid-to-upper range beach pousadas."
      },
      {
        "nome": "Santo Amaro do Maranhão",
        "perChi": "those who want the less visited side",
        "testo": "Western gateway to the park, with lagoons close to town and fewer groups."
      },
      {
        "nome": "São Luís historic centre",
        "perChi": "those flying in or out",
        "testo": "A night in Praia Grande or the seaside districts before the van to Barreirinhas; in the evening stay in the lively streets and go back by app."
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
      "In the dry months the lagoons empty.",
      "Do not enter in the central hours without water and a hat.",
      "You enter the park with local agencies' 4x4s and drivers.",
      "Yellow fever: vaccination recommended for all of Maranhão."
    ],
    gite: [
      {
        "nome": "Scenic flight over the park",
        "distanza": "from Barreirinhas airfield",
        "come": "In a small plane, with the local agencies.",
        "testo": "From above you understand how vast the lagoons are: a sea of white dunes with thousands of blue and green pools all the way to the coast."
      },
      {
        "nome": "Alcântara",
        "distanza": "across the bay from São Luís",
        "come": "By boat from the Cais da Praia Grande in São Luís.",
        "testo": "A partly ruined colonial town, with churches and mansions of 19th-century landowners. Visited as a day trip before or after the Lençóis."
      }
    ],
    faq: [
      {
        "domanda": "When are the lagoons full?",
        "risposta": "From June to September, with the most water in July-August. Rain falls roughly from January to June; in the dry months the lagoons evaporate."
      },
      {
        "domanda": "Is there a park entry fee?",
        "risposta": "No. ICMBio sells no tickets and the private concession plan was withdrawn at the end of 2023. You pay for the jardineira circuits, about 100-150 R$ per person."
      },
      {
        "domanda": "Can you drive into the park in your own car?",
        "risposta": "No, you only enter with the authorised off-road vehicles and drivers of local agencies."
      },
      {
        "domanda": "Barreirinhas or Atins?",
        "risposta": "Barreirinhas for the classic circuits, services and transfers to São Luís; Atins for the sea, kitesurfing and the quieter dunes on the east side."
      },
      {
        "domanda": "How many days do you need?",
        "risposta": "Two or three days for the two main circuits and the Rio Preguiças boat trip, plus the transfer time from São Luís, about 4 hours each way."
      },
      {
        "domanda": "Do you need the yellow fever vaccine?",
        "risposta": "It is recommended for all of Maranhão, to be done at least 10 days before departure."
      }
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
    comeArrivare: "You fly to Cuiabá, usually with a stop in São Paulo or Brasília; the airport is in Várzea Grande, just outside the city. From there it is about a 2-hour drive to Poconé, where the Transpantaneira begins: 147 km of dirt road with over a hundred wooden bridges to Porto Jofre. You need a high-clearance car, ideally a 4x4, or a package with transfers.",
    comeSpostarsi: 'High-clearance car or 4x4, or packages with transfer; boats with a piloteiro.',
    periodoMigliore: 'July-October, best August-September.',
    costi: "Boat with piloteiro around 1,400-1,600 R$ a day for 4-6 people (about 240-275 €), 1,000 R$ for half a day. Low budget, independently with a rental car and simple pousadas: under 1,000-1,500 R$ a day per person (about 170-260 €). High budget: full packages with naturalist guide, full board and private boat, 9,000-13,000 R$ per person for 3-4 nights (about 1,550-2,250 €).",
    erroriDaEvitare: [
      'Going in the rainy season (November-April)',
      'Choosing operators that surround the animals with too many boats',
      'Driving the Transpantaneira at night',
    ],
    luoghi: [
      {
        "nome": "The Transpantaneira",
        "testo": "A 147 km dirt road with over a hundred wooden bridges, from Poconé to Porto Jofre. It takes a full day, with stops for wildlife.",
        "come": "Fly to Cuiabá, then drive to Poconé, where the Transpantaneira begins. High-clearance car or 4x4, or packages with transfers.",
        "quando": "In the dry season. Rain falls mostly from November to March and can flood the road.",
        "tempo": "One day",
        "costo": "Public road, no toll.",
        "lat": -16.2827,
        "lng": -56.6277,
        "consiglio": "Do not drive it at night."
      },
      {
        "nome": "Porto Jofre and the jaguars",
        "testo": "The Pantanal is one of the places to see jaguars. In the dry season, on the Cuiabá, Três Irmãos and Piquiri rivers, they are often seen on the banks.",
        "come": "Boat outings with a piloteiro at dawn and in the afternoon.",
        "quando": "Dry season.",
        "tempo": "1-2 days of outings",
        "costo": "Boat with piloteiro around 1,400-1,600 R$ for a full day for 4-6 people (about 240-275 €) and around 1,000 R$ for half a day (about 170 €), to be shared.",
        "lat": -17.3644,
        "lng": -56.7735,
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
        "lat": -15.5987,
        "lng": -56.0991,
        "consiglio": "Mato Grosso is on UTC-4, one hour behind Rio: check your flight times."
      },
      {
        "nome": "Poconé and the start of the Transpantaneira",
        "testo": "The town where the tarmac ends and the Transpantaneira begins, with its wooden entrance gate. It is the last place with fuel stations, cash machines and shops before 147 km of dirt road.",
        "come": "From Cuiabá by car, about 2 hours.",
        "quando": "In the morning, to reach the pousadas in daylight.",
        "tempo": "30-minute stop",
        "lat": -16.2579,
        "lng": -56.6339,
        "consiglio": "Fill up and withdraw cash here."
      },
      {
        "nome": "Rio Pixaim",
        "testo": "The river the Transpantaneira crosses roughly halfway, with several pousadas on its banks. It is one of the best stretches for short boat trips, caimans, capybaras and water birds.",
        "come": "Along the Transpantaneira, by car; boat trips are booked with the pousada.",
        "quando": "Dawn and late afternoon, when animals are most active.",
        "tempo": "1-2 nights",
        "lat": -16.7444,
        "lng": -56.8635,
        "consiglio": "A good halfway stop to break the drive to Porto Jofre."
      },
      {
        "nome": "Encontro das Águas State Park",
        "testo": "The protected area at the confluence of the Cuiabá, Piquiri and Três Irmãos rivers, reached by boat from Porto Jofre. This is where jaguar sightings on the banks are concentrated in the dry season.",
        "come": "Only by boat with a piloteiro from Porto Jofre or the river lodges.",
        "quando": "July to October, best in August and September.",
        "tempo": "Half-day or full-day trips",
        "lat": -17.0861,
        "lng": -56.7203,
        "consiglio": "Leave at dawn: in the afternoon heat jaguars look for shade."
      },
      {
        "nome": "Três Irmãos channels and giant otters",
        "testo": "The side channels and river bends around Porto Jofre, home to families of giant otters, with kingfishers, herons and jabirus. These are the calmest outings, away from the boats following jaguars.",
        "come": "By boat with the piloteiro, asking to go into the smaller channels.",
        "quando": "Early morning.",
        "tempo": "2-3 hours",
        "consiglio": "Otters are noisy and curious, but should be watched from a distance from their dens."
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
      },
      {
        "titolo": "1 day",
        "tappe": [
          "From Cuiabá to Poconé and along the Transpantaneira to the Rio Pixaim, stopping for wildlife, and a night in a pousada: the minimum to see the Pantanal, with no guaranteed jaguars"
        ]
      },
      {
        "titolo": "6 days",
        "tappe": [
          "Day 1: flight to Cuiabá and drive to Poconé and the Rio Pixaim",
          "Day 2: safari around the pousada and drive down to Porto Jofre",
          "Days 3-5: boat at dawn and in the afternoon towards the Encontro das Águas and the Três Irmãos channels",
          "Day 6: back to Cuiabá and flight"
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
        "testo": "Top end, with full packages of several nights."
      },
      {
        "nome": "Poconé",
        "perChi": "those arriving late from Cuiabá",
        "testo": "Town at the start of the Transpantaneira, with simple hotels and services. Handy for hitting the road at dawn."
      },
      {
        "nome": "Cuiabá",
        "perChi": "those with an early flight",
        "testo": "Capital of Mato Grosso, with hotels near the airport, which is in Várzea Grande, just outside the city."
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
      "Rainy season (mostly November-March): flooded Transpantaneira and uncertain boats.",
      "Operators who surround animals: choose those who keep their distance.",
      "Do not drive the Transpantaneira at night.",
      "Yellow fever: vaccine recommended for Mato Grosso."
    ],
    gite: [
      {
        "nome": "Chapada dos Guimarães",
        "distanza": "about 65 km from Cuiabá, 1 hour by car",
        "come": "By rental car or tour from Cuiabá.",
        "testo": "A red sandstone plateau with canyons and waterfalls, such as the Véu de Noiva, falling from a sheer wall. It pairs with the Pantanal on the day before the flight."
      },
      {
        "nome": "Southern Pantanal and Bonito",
        "distanza": "on the other side of the Pantanal, flying into Campo Grande",
        "come": "Flight from Cuiabá to Campo Grande with a stop, then road to Miranda and Bonito.",
        "testo": "Ranches among flooded pastures and the clear rivers of Bonito for snorkelling. Jaguars are seen less regularly than in the north."
      }
    ],
    faq: [
      {
        "domanda": "When can you see jaguars?",
        "risposta": "From July to October, in the dry season, when the water retreats into the rivers; August and September are the best months around Porto Jofre."
      },
      {
        "domanda": "How many days do you need?",
        "risposta": "At least 4-5 days: one to get onto the Transpantaneira, two or three by boat from Porto Jofre and one to return to Cuiabá."
      },
      {
        "domanda": "Can you do the Pantanal independently?",
        "risposta": "Yes, with a high-clearance car or 4x4 rented in Cuiabá and pousadas booked in advance. The boat with piloteiro is arranged with the pousada in Porto Jofre and shared with other travellers."
      },
      {
        "domanda": "How much does it cost?",
        "risposta": "Independently you stay roughly under 1,000-1,500 R$ a day per person (about 170-260 €). Full packages with guide and private boat cost 9,000-13,000 R$ per person for 3-4 nights (about 1,550-2,250 €)."
      },
      {
        "domanda": "Do you need the yellow fever vaccine?",
        "risposta": "It is recommended for Mato Grosso, to be done at least 10 days before departure."
      },
      {
        "domanda": "What time zone is the northern Pantanal in?",
        "risposta": "Mato Grosso is on UTC-4, an hour behind Rio and São Paulo: keep it in mind with domestic flights."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'A jaguar hidden in the vegetation on the riverbank at Porto Jofre, in the northern Pantanal',
    immagine: '/images/brasile/pantanal-giaguaro.jpg',
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
    comeArrivare: "Manaus can only be reached by plane or boat. Direct flights come from São Paulo, Brasília and other Brazilian cities, and there is a flight from Cuiabá for those coming from the Pantanal. Eduardo Gomes airport is north-west of the centre, reachable by taxi or app. Lodges send a boat transfer, or car plus boat, from the city port.",
    comeSpostarsi: 'Lodge transfers by boat; to Tabatinga flight (about 1h30), fast boat (30-36 hours) or slow boat (6-7 days).',
    periodoMigliore: 'all year: high water April-July, low water September-December.',
    costi: "Teatro Amazonas 20 R$ (about 3.50 €), Palacete Provincial free. Lodges with full board, guide and activities from about 800-1,500 R$ per person per night (about 140-260 €), over 2,500 R$ (about 430 €) at the top end. Fast boat to Tabatinga around 1,000 R$ (about 170 €). In the city the budget depends on the hotel; at the lodge almost everything is included.",
    erroriDaEvitare: [
      'Forgetting the exit stamps at the Polícia Federal in Tabatinga',
      'Leaving without the yellow fever vaccine',
      'Counting on fixed boat schedules, which change often',
    ],
    luoghi: [
      {
        "nome": "Teatro Amazonas and Mercado Adolpho Lisboa",
        "testo": "The rubber-boom opera house and the market on the port, opened in 1883 with an iron structure inspired by Les Halles in Paris. They are Manaus's two city stops.",
        "come": "On foot in the historic centre. The theatre visit is guided.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "costo": "Theatre: 20 R$ full, 10 R$ reduced (about 3.50 and 1.70 €); free for people born in Amazonas and children up to 10.",
        "orari": "Theatre: visits Tuesday to Saturday 9:00-17:00, Sundays and holidays 9:00-13:00; no visits on Mondays.",
        "lat": -3.1303,
        "lng": -60.0234,
        "url": "https://cultura.am.gov.br/espacos-culturais/teatros/teatro-amazonas/",
        "consiglio": "The market is a good place to try Amazonian fish."
      },
      {
        "nome": "The Meeting of the Waters",
        "testo": "The point where the dark Rio Negro meets the milky-coffee Solimões, and the two waters run side by side without mixing for about 6 kilometres.",
        "come": "By boat from Manaus, often included in tours.",
        "quando": "Morning.",
        "tempo": "2-3 hours",
        "lat": -3.1189,
        "lng": -59.8927,
        "consiglio": "It is seen better on a boat tour than from the port."
      },
      {
        "nome": "Anavilhanas archipelago",
        "testo": "A huge river archipelago on the Rio Negro, a national park, with flooded forest (igapó).",
        "come": "By tour or lodge.",
        "quando": "At high water you can boat inside the flooded forest: ask the lodge about the river level.",
        "tempo": "1-2 days",
        "lat": -2.5291,
        "lng": -60.9196,
        "consiglio": "Check whether the tour includes the flooded forest."
      },
      {
        "nome": "Lodge in the forest",
        "testo": "Two or three nights in a lodge with canoeing in the igapó, guided walks and night caiman spotting. Pink dolphins in the river.",
        "come": "Lodge boat transfer from Manaus.",
        "quando": "All year; the landscape changes a lot between high and low water.",
        "tempo": "2-3 nights",
        "costo": "Roughly from 800-1,500 R$ per person per night at simple lodges (about 140-260 €) to over 2,500 R$ (about 430 €) at high-end ones, with full board, guide and activities.",
        "consiglio": "For information on agencies, see the Amazon page of the site."
      },
      {
        "nome": "To Tabatinga and the triple border",
        "testo": "From Manaus you can go up the Amazon River to Tabatinga, on the border with Colombia and Peru, and continue to Leticia or Iquitos.",
        "come": "By air, or by fast or slow boat: the slow boat takes several days.",
        "quando": "All year; boat schedules change often.",
        "tempo": "From one day to several days, depending on the means",
        "costo": "Fast boat Manaus-Tabatinga around 1,000 R$ (about 170 €), with one departure a day in April 2026; from Santa Rosa to Iquitos fast boat roughly 150-200 soles.",
        "lat": -4.2247,
        "lng": -69.9362,
        "consiglio": "Before crossing into Colombia or Peru, check the formalities for leaving Brazil."
      },
      {
        "nome": "Palácio Rio Negro",
        "testo": "The villa built in the early 20th century for a German rubber merchant, later the seat of the state government. Today it is a cultural centre with period rooms and exhibitions, and it shows well the luxury of the rubber era.",
        "come": "On foot or by app from the centre, along Avenida Sete de Setembro.",
        "quando": "In the morning, together with the Palacete Provincial.",
        "tempo": "1 hour",
        "orari": "Monday, Wednesday, Thursday, Friday and Saturday 9:00-15:00; closed on Tuesdays.",
        "lat": -3.1351,
        "lng": -60.0168,
        "url": "https://cultura.am.gov.br/espacos-culturais/centros-culturais/centro-cultural-palacio-rio-negro/"
      },
      {
        "nome": "Palacete Provincial",
        "testo": "A 19th-century building on Praça Heliodoro Balbi that brings together several small museums, covering archaeology, numismatics, painting and image and sound. It is cool and quiet.",
        "come": "On foot from the Teatro Amazonas, about 10 minutes.",
        "quando": "In the hot hours, out of the sun.",
        "tempo": "1-1.5 hours",
        "costo": "Free entry.",
        "orari": "Monday, Tuesday, Thursday, Friday and Saturday 9:00-15:00.",
        "lat": -3.1356,
        "lng": -60.021,
        "url": "https://cultura.am.gov.br/espacos-culturais/centros-culturais/centro-cultural-palacete-provincial/"
      },
      {
        "nome": "Catedral Metropolitana",
        "testo": "The cathedral of Nossa Senhora da Conceição, above the port, with its plain façade and tree-lined square in front. From here you walk down to the market and the river.",
        "come": "On foot in the centre, between the port and Avenida Eduardo Ribeiro.",
        "quando": "In the morning.",
        "tempo": "30 minutes",
        "lat": -3.1352,
        "lng": -60.0255
      },
      {
        "nome": "Largo de São Sebastião",
        "testo": "The square in front of the Teatro Amazonas, with black and white wave paving that recalls the Meeting of the Waters, the church of São Sebastião and the monument to the opening of the ports. In the evening it fills with bars and tacacá stalls.",
        "come": "On foot, opposite the theatre.",
        "quando": "In the evening, when it comes alive.",
        "tempo": "1 hour",
        "lat": -3.1298,
        "lng": -60.0226,
        "consiglio": "A good place to try tacacá from the stalls."
      },
      {
        "nome": "MUSA - Museu da Amazônia",
        "testo": "An open-air museum inside the Adolpho Ducke forest reserve, on the northern edge of the city, with forest trails and a 42-metre observation tower rising above the canopy. It is the easiest way to see the forest without leaving Manaus.",
        "come": "By app or taxi from the centre, about 40 minutes. Guided visits, birdwatching and the tower at dawn or sunset must be booked.",
        "quando": "At dawn or sunset from the tower.",
        "tempo": "Half a day",
        "lat": -3.0078,
        "lng": -59.9397,
        "consiglio": "Repellent and closed shoes on the trails."
      },
      {
        "nome": "Bosque da Ciência (INPA)",
        "testo": "The park of the National Institute for Amazon Research, in the city, with forest trails, pools with Amazonian manatees and giant otters. Good for children too.",
        "come": "By app or taxi from the centre, about 20 minutes.",
        "quando": "In the morning, when the animals are more active.",
        "tempo": "2 hours",
        "lat": -3.0973,
        "lng": -59.9864,
        "consiglio": "It closes on some public holidays: check before going."
      },
      {
        "nome": "Praia da Ponta Negra",
        "testo": "The sandy beach on the Rio Negro, west of the centre, with a pedestrian riverfront, restaurants and an amphitheatre. Sunset over the river is the best moment; the beach widens or disappears with the water level.",
        "come": "By app or taxi from the centre, about 30 minutes.",
        "quando": "Late afternoon and sunset.",
        "tempo": "2 hours",
        "lat": -3.0625,
        "lng": -60.1038
      },
      {
        "nome": "Museu do Seringal Vila Paraíso",
        "testo": "A reconstruction of a 19th-century rubber estate on a tributary of the Rio Negro, with the owner's house, the rubber tappers' shacks and latex processing. It explains the story behind the mansions in the centre.",
        "come": "By boat from the Marina do Davi pier, in the Ponta Negra area, about half an hour.",
        "quando": "In the morning, when the heat is milder.",
        "tempo": "Half a day",
        "lat": -3.0242,
        "lng": -60.1618,
        "consiglio": "Pair it with a stop at Ponta Negra on the way back."
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
      },
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Teatro Amazonas, Largo de São Sebastião and Palacete Provincial",
          "Afternoon: Mercado Adolpho Lisboa and the port, sunset at Ponta Negra",
          "Evening: tacacá at Largo de São Sebastião"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: historic centre as above",
          "Day 2: Meeting of the Waters by boat in the morning, MUSA and the tower at sunset"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1-2 as above",
          "Day 3: Museu do Seringal by boat and Bosque da Ciência, or departure for the lodge"
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
      },
      {
        "nome": "Ponta Negra",
        "perChi": "those who want the river and quiet evenings",
        "testo": "District of hotels and apartment blocks on the Rio Negro, near the riverfront and the Marina do Davi pier. Far from the historic centre, which you reach by app."
      },
      {
        "nome": "Novo Airão",
        "perChi": "those who want the Anavilhanas up close",
        "testo": "Small town on the Rio Negro facing the archipelago, with simple pousadas and boat trips. Reached by road from Manaus across the Rio Negro bridge."
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
      "Triple border: check the formalities for leaving Brazil before entering Colombia or Peru.",
      "Yellow fever vaccine: recommended for all of the Amazon.",
      "Boat schedules are not fixed: keep some margin.",
      "Cash in the country's currency before boarding."
    ],
    gite: [
      {
        "nome": "Presidente Figueiredo",
        "distanza": "about 110 km north, 2 hours by road",
        "come": "By car along the BR-174 or on a tour from Manaus.",
        "testo": "The area of waterfalls and caves in the forest, with pools for swimming and short trails. It is the easiest day trip to see water and forest outside the city."
      },
      {
        "nome": "Novo Airão and the Anavilhanas",
        "distanza": "about 3 hours by road",
        "come": "By car or tour, across the Rio Negro bridge; then boat into the archipelago.",
        "testo": "The town facing the Anavilhanas national park, with boat trips among the islands and the flooded forest and the pink dolphins of the Rio Negro close to the shore."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Manaus?",
        "risposta": "One or two days for the city, then two or three nights at a forest lodge: 4-5 days in all. Those continuing to Peru or Colombia by boat add several more."
      },
      {
        "domanda": "Lodge on the Rio Negro or the Solimões?",
        "risposta": "On the Rio Negro the dark, acidic water keeps many mosquitoes away and you see pink dolphins; the Solimões has more wildlife along the banks but more insects."
      },
      {
        "domanda": "When to go?",
        "risposta": "All year. With high water, April to July, you canoe inside the flooded forest; with low water, September to December, beaches appear and you walk more."
      },
      {
        "domanda": "How much does it cost to visit the Teatro Amazonas?",
        "risposta": "The guided visit costs 20 R$, 10 R$ reduced, Tuesday to Saturday 9:00-17:00 and Sundays until 13:00."
      },
      {
        "domanda": "How do you get from Manaus to Tabatinga?",
        "risposta": "By plane in about an hour and a half, by fast boat in 30-36 hours (around 1,000 R$) or by slow boat, with a hammock on deck, in 6-7 days. In Tabatinga you get the exit stamp at the Polícia Federal."
      },
      {
        "domanda": "Do you need the yellow fever vaccine?",
        "risposta": "It is recommended for the whole Amazon, at least 10 days before departure; the certificate may be requested when entering Colombia or Peru at the Amazon border."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['brasile-itinerario'],
    imageAlt: 'River boats moored on the Rio Negro at Manaus',
    immagine: '/images/brasile/manaus-barche-rio-negro.jpg',
  },
]
