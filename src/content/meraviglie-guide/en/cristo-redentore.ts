import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'brasile/rio-de-janeiro',
  prezzi:
    'Trem do Corcovado (2026): adults R$139 (about €24) for any nationality, children aged 7 to 11 R$112 (about €19), up to 6 free on an adult\'s lap; the ticket includes the return train and access to the monument. Official Paineiras Corcovado vans from about R$87 (about €15) from the Paineiras visitor centre, more from Copacabana and Largo do Machado. Discounts for over-60s and students apply only to Brazilian citizens and residents.',
  luoghi: [
    {
      nome: 'Christ the Redeemer and the Corcovado terrace',
      testo:
        'The 30-metre Art Deco statue, 38 with its pedestal, on top of Corcovado, about 700 metres above the city. From the terrace at its feet you see the whole shape of Rio: Sugarloaf at the mouth of the bay, Copacabana, Ipanema and the Rodrigo de Freitas lagoon. There is a small chapel at the base.',
      come:
        'By rack railway from Cosme Velho or by the official vans; from the top station you go up by lifts and escalators or walk the last stretch.',
      quando: 'On the first departure of the morning, before the clouds and the crowds; at midday the statue is often covered.',
      tempo: '3-4 hours including the ride up, the visit and the ride down',
      costo: 'Included in the train ticket (R$139, about €24) or the van ticket (from R$87, about €15) (2026)',
      orari:
        'Train and vans daily from 8:00 to 19:00 (last ride down), until 20:00 in summer; hours may be extended in high season',
      url: 'https://www.tremdocorcovado.rio/',
      lat: -22.95194,
      lng: -43.21056,
      consiglio: 'It is windy at the top: a light jacket is useful even in summer.',
    },
    {
      nome: 'Trem do Corcovado (Cosme Velho)',
      testo:
        'The rack railway of 1884, the oldest tourist railway in Brazil, climbing from the Cosme Velho neighbourhood through the Atlantic forest of Tijuca National Park. Today\'s electric trains make the climb among trees, vines and glimpses of the city.',
      come:
        'The station is at Rua Cosme Velho 513, by taxi or ride-hailing app from Copacabana and Ipanema. Tickets are bought online for a set day and time; check-in at the ticket office must be done at least 40 minutes before departure.',
      quando: 'The first train of the day, or late afternoon in the warm light.',
      tempo: 'About 3 hours including the visit at the top',
      costo: 'Adults R$139, about €24; children 7-11 R$112, about €19; up to 6 free on a lap (2026)',
      orari: 'Departures daily from 8:00 to 18:00, every twenty minutes, with extra runs depending on availability',
      url: 'https://www.tremdocorcovado.rio/',
      lat: -22.94061,
      lng: -43.19853,
    },
    {
      nome: 'Official vans and Paineiras Visitor Centre',
      testo:
        'The other official way up: vans run by the Paineiras Corcovado concession leaving from Copacabana, Largo do Machado or the Paineiras visitor centre, in the forest about 15 minutes from the statue. The ticket includes the return van from the same point and access to the monument.',
      come:
        'In Copacabana you board at Praça do Lido; at Largo do Machado in front of the Nossa Senhora da Glória church, near the metro. The visitor centre, on Estrada das Paineiras, is reached by taxi or app: there is no parking.',
      quando: 'The first slot, at 8:00; arrive 15 minutes before your chosen time (the grace period is 15 minutes).',
      tempo: 'At least an hour and a half at the top, plus the journey',
      costo: 'From Paineiras about R$87, about €15; from Copacabana and Largo do Machado it costs more (2026)',
      orari:
        'Daily: Copacabana 7:30-16:00, Largo do Machado 7:00-16:00, Paineiras 7:30-18:00 with last entry at 17:00',
      url: 'https://www.paineirascorcovado.com.br/',
      lat: -22.94774,
      lng: -43.21751,
    },
    {
      nome: 'Parque Lage',
      testo:
        'A 1920s mansion inside a park of Atlantic forest at the foot of Corcovado: from the garden you see Christ the Redeemer above the rock face. The palace with its courtyard and pool is closed for restoration, with reopening expected in 2027; the park, trails and gardens stay open. The trail up to Corcovado starts here.',
      come: 'By taxi or app, or on foot from the Jardim Botânico in about ten minutes along Rua Jardim Botânico.',
      quando: 'Morning, combined with the Jardim Botânico.',
      tempo: '1 hour; half a day with the trail',
      costo: 'Free entry',
      orari:
        'Entry 8:00-18:00, with an hour to leave after the gate closes; access to the Corcovado trail until 15:00',
      url: 'https://parquenacionaldatijuca.rio/',
      lat: -22.9606,
      lng: -43.212,
      consiglio: 'The Corcovado trail is steep, with a section fitted with chains: better done in a group or with a guide.',
    },
    {
      nome: 'Floresta da Tijuca',
      testo:
        'The largest sector of Tijuca National Park, a forest replanted in the 19th century inside the city, with trails, waterfalls and viewpoints. The Cascatinha Taunay, near the entrance, is the easiest waterfall to reach; the longer trails climb to Pico da Tijuca.',
      come:
        'The main entrance is at Praça Afonso Viseu, in Alto da Boa Vista, by taxi or app. Inside you drive along the park road or walk the trails.',
      quando: 'Early morning, while it is cool; better on weekdays.',
      tempo: 'Half a day',
      orari:
        'Cars 8:00-17:00, on foot and by bike 6:00-17:00, leave by 18:00; visitor centre 8:00-17:00; trails from Bom Retiro 7:00-15:00',
      url: 'https://parquenacionaldatijuca.rio/',
      lat: -22.96131,
      lng: -43.27347,
      consiglio: 'In strong winds or storms the park can close during the day.',
    },
    {
      nome: 'Vista Chinesa',
      testo:
        'A pagoda-shaped viewpoint in Tijuca National Park. From here you see the lagoon, Ipanema, Sugarloaf and Christ the Redeemer, with the forest all around.',
      come: 'Only by car, ride-hailing taxi or tour; the road climbs through the forest from the Jardim Botânico.',
      quando: 'Morning, with clear skies.',
      tempo: '1 hour including the drive',
      costo: 'Free',
      lat: -22.97316,
      lng: -43.24976,
      consiglio: 'Don\'t walk up the forest roads: a tour or a car with driver is the better choice.',
    },
    {
      nome: 'Jardim Botânico',
      testo:
        'The botanical garden founded in 1808 at the foot of Corcovado, with its avenue of imperial palms, orchid and bromeliad greenhouses, and monkeys and toucans in the trees. From many spots you can see Christ the Redeemer high above.',
      come: 'By taxi or app from Ipanema and Leblon, 10-15 minutes; tickets also online.',
      quando: 'Early morning, when it is cool and the animals are most active.',
      tempo: '2-3 hours',
      costo: 'R$80 for foreigners, about €14 (2026)',
      orari: 'Arboretum Thursday to Tuesday 8:00-17:00, Wednesday 11:00-17:00; closed 25 December and 1 January',
      url: 'https://www.gov.br/jbrj/pt-br/assuntos/visitacao/horarios-e-ingressos',
      lat: -22.9675,
      lng: -43.22389,
    },
    {
      nome: 'Santa Teresa and the bonde',
      testo:
        'The hillside neighbourhood of historic villas, studios and the yellow tram, the bonde, which leaves from the centre and crosses the Lapa arches. From the neighbourhood you walk down the Escadaria Selarón, the staircase covered in colourful tiles.',
      come: 'The bonde leaves from Carioca station, in the centre, near Carioca metro; otherwise take a taxi or app to Largo dos Guimarães.',
      quando: 'In the daytime, on weekdays, when the tram is less full.',
      tempo: '2-3 hours',
      costo: 'Bonde R$20 return, about €3.50; staircase free (2026)',
      orari: 'Bonde daily 8:00-17:00 on the main line',
      url: 'https://riotur.rio/',
      lat: -22.9217,
      lng: -43.18605,
      consiglio: 'Go in the daytime and head back by app.',
    },
    {
      nome: 'Sugarloaf Mountain',
      testo:
        'The granite monolith at the mouth of Guanabara Bay, Rio\'s other great view, with Christ the Redeemer across the city. The cable car goes up in two stages, first to Morro da Urca and then to the summit.',
      come: 'Cable car from Praia Vermelha station, in the Urca neighbourhood.',
      quando: 'Late afternoon, for sunset over the bay and the city lights coming on.',
      tempo: '2-3 hours',
      costo: 'R$205 full ticket, about €35; the reduced fare is only for Brazilians (2026)',
      orari: 'Monday to Friday 8:30-21:00, Saturday and Sunday 7:30-21:00; last boarding at 19:30',
      url: 'https://www.bondinho.com.br/',
      lat: -22.94949,
      lng: -43.15616,
      consiglio: 'Arrive an hour before sunset to avoid the queue.',
    },
  ],
  programmi: [
    {
      titolo: 'Half a day: Christ the Redeemer',
      tappe: [
        '8:00 train from Cosme Velho (check-in 40 minutes before)',
        'An hour and a half on the terrace and at the chapel',
        'Ride down and lunch in Laranjeiras or the Zona Sul',
      ],
    },
    {
      titolo: '1 day: Christ the Redeemer and the two views',
      tappe: [
        'Morning: Christ the Redeemer on the first departure',
        'Lunch and afternoon at the Jardim Botânico and Parque Lage',
        'Sunset from Sugarloaf Mountain',
      ],
    },
    {
      titolo: '2 days: Christ the Redeemer and the forest',
      tappe: [
        'Day 1: the 1-day plan',
        'Day 2: Floresta da Tijuca and the Cascatinha in the morning, Vista Chinesa',
        'Afternoon: bonde and Santa Teresa, walking down the Escadaria Selarón',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Trem do Corcovado, adults',
      prezzo: 'R$139 (about €24)',
      include: 'Return train from Cosme Velho and access to the monument; valid for any nationality',
      dove: 'tremdocorcovado.rio, official app, call centre or WhatsApp',
    },
    {
      tipo: 'Trem do Corcovado, children aged 7-11',
      prezzo: 'R$112 (about €19)',
      include: 'Same as adult; ID showing age required. Up to 6 free on an adult\'s lap',
      dove: 'tremdocorcovado.rio',
    },
    {
      tipo: 'Trem do Corcovado, over-60s and students',
      prezzo: 'R$74 over-60s, R$112 students (about €13-19)',
      include: 'Only for Brazilian citizens and residents with ID',
      dove: 'tremdocorcovado.rio',
    },
    {
      tipo: 'Official van from Paineiras',
      prezzo: 'about R$87 (about €15)',
      include: 'Return van from the visitor centre and access to the monument',
      dove: 'paineirascorcovado.com.br',
    },
    {
      tipo: 'Official van from Copacabana or Largo do Machado',
      prezzo: 'more than the van from Paineiras, depending on the date',
      include: 'Return van from the same point and access to the monument',
      dove: 'paineirascorcovado.com.br',
    },
    {
      tipo: 'Sugarloaf Mountain, cable car',
      prezzo: 'R$205 (about €35)',
      include: 'Both stages, return; reduced fare only for Brazilians',
      dove: 'bondinho.com.br or ticket office',
    },
    {
      tipo: 'Jardim Botânico',
      prezzo: 'R$80 for foreigners (about €14)',
      include: 'Entry to the arboretum',
      dove: 'Online or ticket office',
    },
  ],
  mesi: [
    { voto: 3, folla: 'alta', nota: 'High summer and Brazilian holidays: heat, afternoon storms and frequent cloud at the top.' },
    { voto: 2, folla: 'alta', nota: 'Carnival fills the city and pushes prices up; heat and rain.' },
    { voto: 3, folla: 'media', nota: 'Still hot and rainy, but crowds drop after Carnival.' },
    { voto: 4, folla: 'media', nota: 'Cooler and less rain; Easter and Tiradentes, on the 21st, bring visitors.' },
    { voto: 5, folla: 'bassa', nota: 'The dry season begins: clearer air and few crowds.' },
    { voto: 4, folla: 'bassa', nota: 'Mild, dry winter, with festas juninas in the neighbourhoods.' },
    { voto: 4, folla: 'media', nota: 'Dry and cool, but with the Brazilian school holidays.' },
    { voto: 5, folla: 'bassa', nota: 'One of the driest months, with good visibility.' },
    { voto: 4, folla: 'media', nota: 'Still dry, temperatures rising; national holiday on the 7th.' },
    { voto: 4, folla: 'media', nota: 'Spring, with the first rains; national holiday on the 12th.' },
    { voto: 3, folla: 'media', nota: 'Hotter and more humid, holidays on the 15th and 20th.' },
    { voto: 2, folla: 'alta', nota: 'Christmas and New Year: off-the-scale crowds, heat and rain.' },
  ],
  zone: [
    {
      nome: 'Copacabana',
      perChi: 'Those after the seafront and lower prices',
      testo: 'The official vans to Christ the Redeemer also leave from here, at Praça do Lido. The seafront is always lively, but some inner streets are less safe at night.',
      fascia: '€50-180',
    },
    {
      nome: 'Ipanema and Leblon',
      perChi: 'Those who want the most polished area',
      testo: 'Sea, restaurants and a nearby metro; Jardim Botânico, Parque Lage and Cosme Velho are a few minutes away by taxi.',
      fascia: '€90-250',
    },
    {
      nome: 'Santa Teresa',
      perChi: 'Those looking for atmosphere and pousadas in historic villas',
      testo: 'On the hill, close to Cosme Velho and the centre; steep streets, and in the evening it is better to get around by app.',
      fascia: '€60-150',
    },
  ],
  gite: [
    {
      nome: 'Copacabana, Ipanema and Arpoador',
      distanza: '15-20 minutes from Corcovado',
      come: 'By taxi or app, or by metro from Largo do Machado.',
      testo: 'The beaches you see from the Christ the Redeemer terrace, with the sunset applauded from Pedra do Arpoador.',
      link: '/destinazioni/brasile/rio-de-janeiro',
    },
    {
      nome: 'Niterói and the MAC',
      distanza: '20 minutes by ferry',
      come: 'Ferry from Praça XV station, in the centre, then on foot or by app to the museum.',
      testo: 'Oscar Niemeyer\'s Museum of Contemporary Art on the cliff, with the best view of Rio, Sugarloaf and Corcovado.',
    },
    {
      nome: 'Petrópolis',
      distanza: 'about 70 km, 1.5 hours',
      come: 'Bus from Novo Rio bus station or car with driver.',
      testo: 'The imperial city in the mountains, with the Imperial Museum in Pedro II\'s palace and the cool air of the Serra dos Órgãos.',
    },
    {
      nome: 'Ilha Grande and Paraty',
      distanza: 'about 150 km, 2.5-3 hours plus the boat',
      come: 'Combined van and boat from the Zona Sul; best with at least one night.',
      testo: 'The Costa Verde: a car-free island covered in Atlantic forest and a colonial town by the sea, together on the UNESCO list.',
      link: '/destinazioni/brasile/costa-verde',
    },
  ],
  faq: [
    {
      domanda: 'Is it better to take the train or the van up to Christ the Redeemer?',
      risposta:
        'The train from Cosme Velho (R$139) is the most beautiful, as it runs through the Tijuca forest; the official vans also leave from Copacabana and Largo do Machado, and from Paineiras they cost less, about R$87. Both include access to the monument.',
    },
    {
      domanda: 'What time is best to go?',
      risposta:
        'On the first departure at 8:00: there are fewer people and the statue is more often free of cloud, which tends to build towards midday.',
    },
    {
      domanda: 'Do I need to book?',
      risposta:
        'Yes, it is best to buy a ticket online for a set day and time, especially at weekends and in December and January. For the train, check-in at the ticket office must be done at least 40 minutes beforehand.',
    },
    {
      domanda: 'Can I walk up Corcovado?',
      risposta:
        'Yes, on the trail starting at Parque Lage: it is steep, has a section with chains and access closes at 15:00. At the top, access to the monument is paid separately, on sale from 8:00 to 17:00.',
    },
    {
      domanda: 'What if Christ the Redeemer is in the clouds?',
      risposta:
        'It happens in every season, including the dry one: check the webcams and the forecast that morning and keep a spare day in your plans.',
    },
    {
      domanda: 'Are there discounts for foreign visitors?',
      risposta:
        'Only for children: R$112 from 7 to 11 and free up to 6 on a lap. Reduced fares for over-60s and students apply only to Brazilians and residents.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/cristo-redentore/vista-pan-di-zucchero.jpg',
      alt: 'Visitors on the Corcovado terrace overlooking Guanabara Bay, with Sugarloaf Mountain and the islands on the horizon',
    },
    {
      src: '/images/meraviglie/cristo-redentore/statua-dettaglio.jpg',
      alt: 'The face of Christ the Redeemer seen from below, against a blue sky with white clouds',
    },
    {
      src: '/images/meraviglie/cristo-redentore/trem-cosme-velho.jpg',
      alt: 'A red Trem do Corcovado train at Cosme Velho station, between buildings and the green hillside',
    },
    {
      src: '/images/meraviglie/cristo-redentore/parque-lage.jpg',
      alt: 'The Parque Lage mansion with its fountain and palms, below the Corcovado rock face with Christ the Redeemer on top',
    },
    {
      src: '/images/meraviglie/cristo-redentore/cascatinha-tijuca.jpg',
      alt: 'The Cascatinha Taunay falling between rocks and greenery in the Floresta da Tijuca',
    },
    {
      src: '/images/meraviglie/cristo-redentore/bonde-santa-teresa.jpg',
      alt: 'The yellow Santa Teresa tram on its tracks, with the high-rises of central Rio behind',
    },
  ],
}
