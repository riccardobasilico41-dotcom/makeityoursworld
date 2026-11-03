import type { Esperienza } from '@/lib/types'

export const esperienzePeru: Esperienza[] = [
  {
    slug: 'huayna-picchu',
    paeseSlug: 'peru',
    destinazioneSlug: 'machu-picchu',
    nome: 'Climbing Huayna Picchu',
    localita: 'Machu Picchu, Cusco',
    cosE:
      "The mountain that serves as the backdrop of the classic Machu Picchu photos. The trail climbs very steeply along Inca steps cut into the rock, with exposed stretches secured by cables, up to a platform from which you look down on the citadel. It requires a specific ticket, with a separate daily quota that is much tighter than the general one.",
    percheFarla: "It's the only way to see Machu Picchu from above and understand its layout: from inside the citadel you can't perceive the shape of the whole. I did it and it's beautiful, but you have to book in time.",
    durata: 'about 2-3 hours round trip, on top of the site visit',
    periodo: 'all year, with assigned time slots; in the rainy season the steps become slippery',
    costo: 'the circuit that includes Huayna Picchu or Machu Picchu Mountain costs about 200 soles (around $54), versus about 152 soles for the basic circuit',
    comePrenotare:
      "Only on the official Ministry of Culture portal, tuboleto.cultura.pe. Check availability at least 2-3 months ahead in any season and 3-4 months for the high season (June, July, August): spots are very few and go fast.",
    cosaPortare: 'Shoes with good grip, water, and the awareness that some stretches are narrow and exposed.',
    perChiEAdatta: "People who aren't afraid of heights and have a minimum of fitness: it's short but very steep, at 8,900 feet (2,700 meters) of altitude.",
    giudizio: 'da-verificare',
    alternative: [
      'Machu Picchu Mountain: longer and less steep, a wider view but more distant',
      'Sun Gate (Intipunku): reachable without an extra ticket, with a panoramic view of the citadel',
    ],
    tripSlugs: ['peru-itinerario'],
    imageAlt: 'The summit of Huayna Picchu among the clouds above the ruins of Machu Picchu, Peru',
    immagine: '/images/peru/huayna-picchu.jpg',
  },
  {
    slug: 'cammino-inca',
    paeseSlug: 'peru',
    destinazioneSlug: 'machu-picchu',
    nome: 'Classic Inca Trail',
    localita: 'From km 82 to Machu Picchu, Cusco region',
    cosE:
      "Four days along the original paved road built by the Incas, with three nights camping, the Warmiwañusca pass at 13,800 feet (4,215 meters) and arrival at Machu Picchu at dawn on the last day through Intipunku, the Sun Gate. It can only be done with an authorized agency, never independently.",
    percheFarla: "Because it's the route the citadel was designed for: if you arrive by train you don't see the arrival from above, from the Sun Gate.",
    durata: '4 days, 3 nights',
    periodo:
      'March to January; the trail closes all of February for maintenance. The best season, May to September, is also when permits sell out first',
    costo: 'roughly $600-900 per person, with permit, guide, porters, tents, meals and return train included',
    comePrenotare:
      'Through authorized agencies, 5-6 months ahead for May through August. The permit is in your name and tied to your passport: it cannot be transferred or changed.',
    cosaPortare: 'A sleeping bag suited to sub-zero temperatures, broken-in hiking boots, layered clothing, a headlamp. Porters carry most of the luggage.',
    perChiEAdatta: 'You need decent fitness and, above all, acclimatization: the pass tops 13,800 feet (4,200 meters) on the second day.',
    giudizio: 'da-verificare',
    alternative: [
      'Short Inca Trail (2 days), from km 104, which still arrives at the Sun Gate',
      'Salkantay trek, with no limited-quota permits and cheaper',
    ],
    tripSlugs: [],
    imageAlt: 'Paved stone path of the Inca Trail among vegetation and fog toward Machu Picchu, Peru',
    immagine: '/images/peru/cammino-inca.jpg',
  },
  {
    slug: 'trek-choquequirao',
    paeseSlug: 'peru',
    destinazioneSlug: 'choquequirao',
    nome: 'Choquequirao Trek',
    immagine: '/images/peru/choquequirao.jpg',
    imageAlt: 'The terraces of Choquequirao with the stone llamas, at the end of the climb on the trek from Cachora',
    localita: 'From Cachora, Apurímac region',
    cosE:
      "Four or five days of walking round trip from Cachora, with a descent of about 4,900 feet (1,500 meters) into the Apurímac canyon and the climb up the other side to the Inca citadel of Choquequirao, only partly excavated and almost always deserted.",
    percheFarla:
      "Because it's the only Inca site of monumental scale you can still see in solitude: fewer than ten thousand visitors a year, versus Machu Picchu's million and a half. And because the cable car project, if it ever goes ahead, will change things.",
    durata: '4-5 days round trip; 8-9 days for the traverse to Machu Picchu',
    periodo: 'April to October; in the rainy season the trail along the canyon wall is dangerous because of landslides',
    costo: 'organized trek roughly $400-700 per person for 4-5 days with guide, mules and meals; much less independently, plus entry to the site (around 60 soles)',
    comePrenotare: "Through Cusco agencies; there are no limited-quota permits as for the Inca Trail, so you can arrange it even a few days ahead.",
    cosaPortare:
      'Sturdy hiking boots, high sun protection (the valley floor is very hot and shadeless), at least 3 liters of water a day, a sleeping bag. The mules for the luggage are worth every sol spent.',
    perChiEAdatta:
      'Fit walkers: Cusco guides consider it harder than both the Inca Trail and the Salkantay, because the elevation change is concentrated and the heat in the canyon weighs on you.',
    giudizio: 'da-verificare',
    alternative: ['Choquequirao-Machu Picchu traverse in 8-9 days, for those with time and experience'],
    tripSlugs: [],
  },
  {
    slug: 'homestay-amantani',
    paeseSlug: 'peru',
    destinazioneSlug: 'lago-titicaca',
    nome: 'A Night with a Family on Amantaní',
    localita: 'Amantaní Island, Lake Titicaca',
    cosE:
      "The classic two-day tour of Titicaca includes a night at the home of a family on Amantaní island: you have dinner with them, climb to the Pachatata temple for sunset and take part in the village's evening party in traditional clothes lent by your hosts.",
    percheFarla: "Because it's the only moment of the lake tour when you leave the tourist circuit of the Uros and stay with the people who live there: for me it's the memory of the lake that stuck with me most.",
    durata: '2 days, 1 night, starting from the port of Puno',
    periodo: 'all year; from May to September the days are sunnier but the nights are freezing',
    costo: 'roughly $30-60 per person for the two-day tour, among the best value for money in Peru',
    comePrenotare: "Through the Puno agencies, even the day before; it's best to pick one that works directly with the families on the island.",
    cosaPortare:
      "Heavy clothes for the night (at 12,500 feet (3,800 meters) there's no heating in the houses), a flashlight, cash in small bills and, if you like, a small useful gift for the host family: groceries rather than souvenirs.",
    perChiEAdatta: 'Anyone who accepts basic lodging: shared bathroom, no guaranteed hot water, no continuous electricity.',
    giudizio: 'da-verificare',
    alternative: ['A night on Taquile, less organized for hospitality but with the same kind of experience'],
    tripSlugs: ['peru-itinerario'],
    imageAlt: 'A rowboat on Lake Titicaca with Amantaní island in the background, Peru',
    immagine: '/images/peru/homestay-amantani.jpg',
  },
]
