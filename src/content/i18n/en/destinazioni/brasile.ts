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
        "costo": "Escuna about 100-150 R$ per person for 4-5 hours with stops (about 17-25 €), lunch extra",
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
        "fascia": "60-200 €"
      },
      {
        "nome": "Vila do Abraão",
        "perChi": "Those visiting Ilha Grande",
        "testo": "Pousadas, nightlife and boat departures. Car-free island.",
        "fascia": "40-150 €"
      },
      {
        "nome": "Jabaquara and outside the centre (Paraty)",
        "perChi": "Those travelling by car who want to spend less",
        "testo": "Pousadas with parking and gardens 10-20 minutes' walk from the historic centre, quieter at night.",
        "fascia": "40-110 €"
      },
      {
        "nome": "Trindade",
        "perChi": "Those who want the sea and a village atmosphere",
        "testo": "Simple pousadas and campsites near the beaches, with low-key nightlife. You need the bus to get back to Paraty.",
        "fascia": "35-100 €"
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
    costi: "Low budget about 40-60 € a day (simple pousada or hostel, pay-by-weight restaurants, buses); mid-range 90-140 € (pousada in Paraty's historic centre or in Abraão, escuna, transfers); high from 220 € (charming pousada, private lancha). Escuna on Paraty bay about 100-150 R$ per person for 4-5 hours, lunch extra; a private lancha costs more, to be negotiated at the pier. On the island cash is useful for boats and lunches.",
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
    costi: "Low budget about 40-60 € a day (hostel or pousada, bus 120, pay-by-weight restaurants); mid-range 90-140 € (hotel in Foz, the falls from both sides, Parque das Aves); high from 250 € (hotel inside the park, Macuco Safari, helicopter flights). Brazilian park 134 R$ for foreigners (from 19 December 2025); Argentine park 60,000 pesos for non-resident foreigners (about 40 dollars, from 1 June 2026); Parque das Aves 110 R$; Itaipu Panorâmica 63 R$; inflatable boat 450-550 R$.",
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
        "costo": "About 450-550 R$ (about 75-90 €), separate from park entry",
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
        "costo": "110 R$ full-price ticket (about 18 €), the same for Brazilians and foreigners, price valid until 30 November 2026",
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
        "costo": "Itaipu Panorâmica 63 R$ (about 10 €), Itaipu Especial 185 R$ (about 30 €), Itaipu Iluminada 50 R$ (2026)",
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
        "fascia": "40-130 €"
      },
      {
        "nome": "Puerto Iguazú (Argentina)",
        "perChi": "Those who want to be closer to the Argentine side",
        "testo": "A smaller town, with less choice and less convenient flights.",
        "fascia": "40-150 €"
      },
      {
        "nome": "Hotel inside the Brazilian park",
        "perChi": "Those who want the view from the room",
        "testo": "A high-end hotel inside the park.",
        "fascia": "350-800 €"
      },
      {
        "nome": "Avenida das Cataratas (Foz)",
        "perChi": "Those who want to stay close to the Brazilian park",
        "testo": "The road between the city and the park, with resorts and hotels with pools set among greenery. You need a taxi or bus 120 in the evening.",
        "fascia": "70-200 €"
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
        "fascia": "40-150 €"
      },
      {
        "nome": "Barra and Rio Vermelho",
        "perChi": "Those who want the sea and nightlife",
        "testo": "Safer in the evening, near the beaches and restaurants.",
        "fascia": "40-140 €"
      },
      {
        "nome": "Ondina and the seafront",
        "perChi": "Those who want a big hotel by the sea",
        "testo": "Between Barra and Rio Vermelho, with larger hotels facing the ocean. Handy for evenings in Rio Vermelho; you need an app to get to the historic centre.",
        "fascia": "60-160 €"
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
    costi: "Low budget about 40-60 € a day (pousada or hostel, acarajé and pay-by-weight restaurants, metro and buses); mid-range 90-140 € (hotel in Barra or Pelourinho, Bahian restaurants, apps for getting around); high from 220 € (boutique hotel in a historic house, private boat trip on the bay). Elevador Lacerda about 1 R$ per ride (since 2025); acarajé from the baianas a few reais.",
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
    comeArrivare: 'Bus from Salvador (6-7 hours).',
    comeSpostarsi: 'Guided tours and car; the trails are poorly marked.',
    periodoMigliore: 'April-September, dry season; Poço Encantado lights up from April to September.',
    costi: 'Day tours R$150-300 plus guide and entrance fees.',
    erroriDaEvitare: ['Doing the long trails without a guide', "Underestimating the initial climb of the Fumaça"],
    miaEsperienza:
      "Three days in the Chapada, based in Lençóis, arriving by bus from Salvador. We did the classic tour with a guide and car, between the caves, the Poço do Diabo and the sunset on Morro do Pai Inácio.",
    luoghi: [
      {
        "nome": "Morro do Pai Inácio",
        "testo": "The mesa that dominates the valley. Sunset from here is the Chapada classic.",
        "come": "By tour or car; a short, steep climb from the car park.",
        "quando": "Sunset.",
        "tempo": "2 hours",
        "consiglio": "Bring a torch for the descent."
      },
      {
        "nome": "Cachoeira da Fumaça",
        "testo": "A waterfall of about 340 metres: the wind often scatters the water into mist before it reaches the ground.",
        "come": "From the Capão valley on an out-and-back trail of a few hours with a steep initial climb.",
        "quando": "On clear days: with low cloud you see little from the top.",
        "tempo": "Half a day",
        "consiglio": "Do not underestimate the initial climb."
      },
      {
        "nome": "Poço Azul and Poço Encantado",
        "testo": "Flooded caves where sunlight enters and lights the water blue.",
        "come": "With a tour and guide, by car.",
        "quando": "The sunbeam only enters in certain months and hours: ask your guide for times.",
        "tempo": "Half a day",
        "costo": "Day tours with a guide; entry fees are extra: ask what the price includes",
        "consiglio": "Check the light times: out of season the blue is not seen."
      },
      {
        "nome": "Lapa Doce and Pratinha",
        "testo": "Caves with turquoise water where you snorkel. Poço do Diabo is a waterfall with a dark pool.",
        "come": "Classic tour with guide and car.",
        "quando": "Full day.",
        "tempo": "A day",
        "consiglio": "Go with a guide: in the caves it helps you find your way."
      },
      {
        "nome": "Vale do Pati",
        "testo": "A multi-day trek through remote valleys, sleeping in farmers' houses.",
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
        "testo": "Pousadas for every budget. A small town with agencies and restaurants."
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
    costi: "Jardineira R$100-150 per person per circuit; park entry is free: ICMBio does not sell tickets and the plan to concession the park to private operators was withdrawn at the end of 2023.",
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
        "costo": "Jardineira per person per circuit, guide included: price from the Barreirinhas agencies. Park entry free (2026)",
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
        "testo": "The only Brazilian state capital founded by the French (1612), it has a historic centre on the UNESCO list since 1997 with houses covered in Portuguese azulejos.",
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
      }
    ],
    zone: [
      {
        "nome": "Barreirinhas",
        "perChi": "Those who want the circuit base",
        "testo": "Pousadas for every budget. Gateway to the park."
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
      "In the dry months the lagoons empty.",
      "Do not enter in the central hours without water and a hat.",
      "You enter the park with local agencies' 4x4s and drivers.",
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
        "testo": "A 147 km dirt road with over a hundred wooden bridges, from Poconé to Porto Jofre. It takes a full day, with stops for wildlife.",
        "come": "Fly to Cuiabá, then drive to Poconé, where the Transpantaneira begins. High-clearance car or 4x4, or packages with transfers.",
        "quando": "In the dry season. Rain falls mostly from November to March and can flood the road.",
        "tempo": "One day",
        "consiglio": "Do not drive it at night."
      },
      {
        "nome": "Porto Jofre and the jaguars",
        "testo": "The Pantanal is one of the places to see jaguars. In the dry season, on the Cuiabá, Três Irmãos and Piquiri rivers, they are often seen on the banks.",
        "come": "Boat outings with a piloteiro at dawn and in the afternoon.",
        "quando": "Dry season.",
        "tempo": "1-2 days of outings",
        "costo": "Boat with a piloteiro by the full or half day, to share in a group: ask the pousada for the price",
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
        "consiglio": "Mato Grosso is on UTC-4, one hour behind Rio: check your flight times."
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
        "testo": "Top end, with full packages of several nights."
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
        "testo": "The rubber-boom opera house and the market on the port, opened in 1883 with an iron structure inspired by Les Halles in Paris. They are Manaus's two city stops.",
        "come": "On foot in the historic centre.",
        "quando": "Morning.",
        "tempo": "Half a day",
        "consiglio": "The market is a good place to try Amazonian fish."
      },
      {
        "nome": "The Meeting of the Waters",
        "testo": "The point where the dark Rio Negro meets the milky-coffee Solimões, and the two waters run side by side without mixing for about 6 kilometres.",
        "come": "By boat from Manaus, often included in tours.",
        "quando": "Morning.",
        "tempo": "2-3 hours",
        "consiglio": "It is seen better on a boat tour than from the port."
      },
      {
        "nome": "Anavilhanas archipelago",
        "testo": "A huge river archipelago on the Rio Negro, a national park, with flooded forest (igapó).",
        "come": "By tour or lodge.",
        "quando": "At high water you can boat inside the flooded forest: ask the lodge about the river level.",
        "tempo": "1-2 days",
        "consiglio": "Check whether the tour includes the flooded forest."
      },
      {
        "nome": "Lodge in the forest",
        "testo": "Two or three nights in a lodge with canoeing in the igapó, guided walks and night caiman spotting. Pink dolphins in the river.",
        "come": "Lodge boat transfer from Manaus.",
        "quando": "All year; the landscape changes a lot between high and low water.",
        "tempo": "2-3 nights",
        "costo": "Full board and excursions included: prices vary a lot between lodges",
        "consiglio": "For information on agencies, see the Amazon page of the site."
      },
      {
        "nome": "To Tabatinga and the triple border",
        "testo": "From Manaus you can go up the Amazon River to Tabatinga, on the border with Colombia and Peru, and continue to Leticia or Iquitos.",
        "come": "By air, or by fast or slow boat: the slow boat takes several days.",
        "quando": "All year; boat schedules change often.",
        "tempo": "From one day to several days, depending on the means",
        "costo": "Boat prices at the port of Manaus or from the companies",
        "consiglio": "Before crossing into Colombia or Peru, check the formalities for leaving Brazil."
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
      "Triple border: check the formalities for leaving Brazil before entering Colombia or Peru.",
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
