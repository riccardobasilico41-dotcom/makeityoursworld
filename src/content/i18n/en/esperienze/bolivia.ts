import type { Esperienza } from '@/lib/types'

export const esperienzeBolivia: Esperienza[] = [
  {
    slug: 'carretera-de-la-muerte',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'la-paz',
    nome: 'Death Road by mountain bike',
    localita: 'From La Cumbre (4,650 m) to Yolosa (1,200 m), Yungas',
    cosE:
      "The mountain bike descent along the old Yungas road, the one that in the 1990s earned the name \"most dangerous road in the world\" for the number of vehicles that ended up in the void. Since 2006 traffic runs on a new paved road, and the old track has become in practice a cycling route: about 64 km of descent, with over 3,400 meters of elevation loss, from the glacial pass of La Cumbre to the subtropical forest of Yolosa.",
    percheFarla:
      "Because in a few hours you cross three climate zones, from the cold of the puna to the humid jungle, on a dirt track three meters wide with drops of hundreds of meters. It's the most iconic activity in Bolivia, and you don't need to be an expert cyclist.",
    durata: 'full day: departure from La Paz early in the morning, return in the late afternoon',
    periodo:
      "all year, but the dry season (May-October) is much better: in the rainy season the track becomes muddy, visibility drops with the fog and the risk concretely increases",
    costo:
      "roughly $80-170 per person depending on the operator. Budget operators are around $80-100, premium ones between $120 and $170, with real differences in bikes, groups and safety protocols.",
    comePrenotare:
      "Through the agencies in La Paz, even a day ahead. It's worth reading recent reviews and asking explicitly which bikes will be used, how many people per guide and whether full protective gear is included.",
    cosaPortare:
      "Layered clothing: you start at 4,650 meters near freezing and arrive at 1,200 meters with a tropical climate. Gloves, glasses, sun protection and a full change of clothes for the end.",
    perChiEAdatta:
      "You don't need to be an expert cyclist (it's all downhill and you go at your own pace), but you need to be able to handle a mountain bike on dirt and, above all, have the sense not to speed. Not recommended for those with vertigo.",
    confronti: [
      {
        titolo: 'Budget or premium operator: where the difference lies',
        introduzione:
          "On this route the price of the tour affects safety, more than comfort. The numbers help frame the real risk: of the roughly 25,000 cyclists who ride the road each year, serious injuries requiring hospitalization number in the order of a few per year, and fatal accidents work out at roughly one every two or three years across all operators combined: at least eighteen since 1998. Almost all reported accidents involve budget operators, poor equipment, excessive speed or rider error.",
        opzioni: [
          {
            nome: 'Budget operators',
            sintesi: 'Basic tours with low-end dual-suspension bikes and larger groups.',
            costo: '$80-100',
            pro: [
              'Low cost, which weighs on a long trip',
              'The route and the views are the same',
            ],
            contro: [
              'Less rigorous bike maintenance: on a 64 km descent the brakes are everything',
              'Larger groups, so less control by the guides',
              'It is the tier where almost all reported accidents are concentrated',
            ],
            perChi: "Not recommended: it's the only case, among all the trips on the site, where saving money isn't worth it.",
          },
          {
            nome: 'Premium operators',
            sintesi:
              "High-end, well-maintained bikes, limited groups, structured safety protocols, experienced guides and a support vehicle following. This tier includes the historic names in the business: Gravity Bolivia, which practically invented these tours in 1998, Barracuda Biking and Vertigo Biking.",
            costo: '$120-170',
            pro: [
              'Well-kept bikes, with brakes up to the 3,400 meters of descent',
              'Small groups, often with a limit of ten riders per guide',
              'A real safety briefing and a support vehicle for anyone who stops',
            ],
            contro: ['Costs almost double the budget tier'],
            perChi: 'Anyone planning to do it.',
          },
        ],
        raccomandazione:
          "On this activity, choosing the cheapest operator to save 50 dollars is the wrong choice: the data say the difference between the two tiers is measured in accidents. Better to give it up entirely than to do it with poor equipment.",
      },
    ],
    giudizio: 'da-verificare',
    alternative: ['Drive the road by car or motorbike with a driver, for those who want to see the landscape without pedaling'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'The dirt track of the Death Road cut into the side of the Yungas mountains, Bolivia',
    immagine: '/images/bolivia/carretera-de-la-muerte.jpg',
  },
  {
    slug: 'tour-uyuni-sud-lipez',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'salar-de-uyuni',
    nome: '3-day Uyuni and Sud Lípez tour',
    localita: 'From Uyuni to Sud Lípez, up to the Chilean border',
    cosE:
      "The classic 4x4 tour that departs from Uyuni, crosses the salar, and continues south among colored lagoons, high-altitude deserts, geysers and hot springs, with the option of ending in San Pedro de Atacama in Chile instead of coming back.",
    percheFarla: "Because it concentrates into three days a sequence of landscapes that doesn't exist elsewhere: salt flat, flamingos on red lagoons, geysers at 5,000 meters and volcanoes on the border.",
    durata: '3 days, 2 nights (there is also a one-day version on the salar alone)',
    periodo:
      "May-October for the dry salar that can be crossed in full; January-March for the mirror effect, though with several stops inaccessible",
    costo: 'roughly $150-250 per person depending on the operator, plus the entrance to the Eduardo Avaroa reserve',
    comePrenotare:
      "Through the agencies in Uyuni or La Paz. It's worth choosing based on vehicle maintenance and not on price: you travel on isolated tracks above 4,500 meters, where a serious breakdown is a hard problem to solve.",
    cosaPortare:
      "A heavy sleeping bag (not always included, and in the Sud Lípez lodgings you sleep below freezing), layered clothing, very high sun protection (at that altitude the sun reflected by the salt burns), a swimsuit for the hot springs and cash for admissions.",
    perChiEAdatta: 'Suitable for everyone physically, but the altitude makes itself felt: on the second day you go above 4,800 meters.',
    giudizio: 'da-verificare',
    alternative: [
      'One-day tour on the salar alone, for those short on time',
      'The reverse route starting from San Pedro de Atacama, in Chile',
    ],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'A flamingo in a high-altitude salt lagoon among the hills of the Bolivian altiplano',
    immagine: '/images/bolivia/tour-uyuni-sud-lipez.jpg',
  },
  {
    slug: 'miniere-cerro-rico',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'sucre-potosi',
    nome: 'Visit to the Cerro Rico mines',
    localita: 'Cerro Rico, Potosí',
    cosE:
      "The guided visit to the tunnels of the still-active mining cooperatives of Cerro Rico, the mountain whose silver financed the Spanish empire for centuries. You enter with a helmet, lamp and boots, almost always accompanied by former miners, into narrow, hot and dusty tunnels where work is still done by largely manual methods.",
    percheFarla:
      "Because it's one of the few places in the world where you can touch what colonial extraction meant, and because the account of those who work there is more effective than any museum.",
    durata: 'about 4 hours',
    periodo: 'all year, on working days when the cooperatives are active',
    costo: 'roughly $15-30 per person with a guide, equipment included',
    comePrenotare: 'Through the agencies in Potosí, preferring those run by former miners who give a share to the cooperatives.',
    cosaPortare:
      "Clothes you can ruin forever, a mask or buff for the dust, water. It's tradition to bring a small gift to the miners you meet (coca leaves, soft drinks, gloves), to be bought at the miners' market before going up.",
    perChiEAdatta:
      "Not recommended for those with claustrophobia or breathing problems: the tunnels are narrow, the air is terrible and you are at 4,000 meters of altitude. It should be approached knowing that it is a workplace, with very harsh conditions and reduced life expectancy.",
    giudizio: 'da-verificare',
    alternative: ['Casa Nacional de la Moneda, the old colonial mint, to understand the history of Cerro Rico without entering a mine'],
    tripSlugs: ['bolivia-itinerario'],
    imageAlt: 'The Cerro Rico mountain of Potosí, riddled with silver mines, above the rooftops of the city, Bolivia',
    immagine: '/images/bolivia/miniere-cerro-rico.jpg',
  },
]
