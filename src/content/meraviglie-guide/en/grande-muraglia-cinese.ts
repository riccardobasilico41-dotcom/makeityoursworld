import type { GuidaMeraviglia } from '../index'

export const guida: GuidaMeraviglia = {
  destinazione: 'cina/pechino',
  prezzi:
    'Great Wall admission (2026): Badaling 40 yuan from April to October and 35 from November to March (about €5); Mutianyu 45 yuan (about €5.50), with shuttle bus, cable car, chairlift and toboggan extra; Juyongguan 40 and 35 yuan; Huanghuacheng 60 yuan (about €7); Jinshanling 65 yuan from April to October and 55 from November to March (about €7-8), cable car 40 yuan one way; Simatai 40 yuan by day and 200 yuan (about €24) for the evening visit, plus 140 yuan (about €17) for Gubei Water Town. At Badaling, Juyongguan and Mutianyu under-18s with a passport get reduced or free entry; lifts are full price for anyone taller than 1.2 metres.',
  luoghi: [
    {
      nome: 'Mutianyu',
      testo:
        'The finest restored section near Beijing: a forested ridge with 20 watchtowers open to visitors and the wall carrying on towards Jiankou. It is less crowded than Badaling and offers three ways up: on foot, by cable car or by chairlift, with the toboggan to ride back down.',
      come:
        'A shuttle bus runs about 3 km from the service centre to the foot of the wall. From there two trails of around 1,100 steps (40 minutes) lead up, or you can take the gondola to tower 14 or the chairlift that pairs with the toboggan. The cable car and the toboggan belong to two different companies and their tickets are not interchangeable.',
      quando: 'At opening time on a weekday. In autumn the woods turn red and yellow; at certain times of year there is also an evening opening on towers 10-15.',
      tempo: 'Half a day, 3-4 hours on site',
      costo:
        'Admission 45 yuan, about €5.50; reduced 25 yuan for foreign minors aged 6 to 18; shuttle, cable car, chairlift and toboggan extra (2026)',
      orari:
        '16 March to 15 November 7:30-18:00 Monday to Friday, 7:30-18:30 Saturday and Sunday; 16 November to 15 March 8:00-17:30. Ticket sales end an hour before closing, entry half an hour before',
      url: 'https://www.mutianyugreatwall.com/',
      lat: 40.43802,
      lng: 116.5619,
      consiglio:
        'Named tickets are sold online up to 30 days ahead, one per passport per day: at the gate you just show your original passport, with nothing to collect.',
    },
    {
      nome: 'Badaling',
      testo:
        'The most famous section and the first opened to visitors, 60 km north-west of Beijing in Yanqing District. It is almost entirely restored, with wide walkways and handrails, and split into a north and a south branch. At weekends and on Chinese holidays it becomes the most crowded in the country.',
      come:
        'By high-speed train on the Beijing-Zhangjiakou line to Badaling Great Wall station, or by car. To go up there is a cable car on the north branch and a funicular on the south branch.',
      quando: 'Early morning on a weekday; in winter, with snow, it is almost empty.',
      tempo: '2-3 hours on site',
      costo:
        '40 yuan from April to October, 35 yuan from November to March, about €5; free for under-18s and over-60s with ID (2026)',
      orari: '1 April to 31 October 6:30-16:30; 1 November to 31 March 7:30-16:00',
      url: 'https://www.badaling.cn/',
      lat: 40.35417,
      lng: 116.00694,
      consiglio: 'Tickets are issued in your name with your passport number: best booked online before you go.',
    },
    {
      nome: 'Juyongguan',
      testo:
        'A fortified pass at the bottom of a narrow valley, on the road between Beijing and Badaling, enclosed by a 4,142-metre ring of walls climbing both slopes. It has gates, towers and a water gate over the stream, and the climb up either side is steep.',
      come: 'By car or taxi from Beijing; it is often combined with Badaling or the Ming Tombs, which lie in the same direction.',
      quando: 'Morning, on weekdays.',
      tempo: '2 hours',
      costo: '40 yuan in high season, 35 in low season, about €4-5; free for under-18s and over-60s with ID (2026)',
      orari: 'Low season 8:30-16:30, high season 8:30-17:30',
      url: 'https://english.beijing.gov.cn/specials/ticketing/attractions/202407/t20240717_3751596.html',
      lat: 40.2882,
      lng: 116.0686,
    },
    {
      nome: 'Huanghuacheng',
      testo:
        'The only stretch of Wall around Beijing that meets water: three sections end up submerged in a reservoir, and part of it can be seen from a boat. The rest climbs steeply over the hills of Huairou District, about 70 km from the city centre.',
      come: 'By car with driver or taxi from Beijing; boats leave from inside the scenic area.',
      quando: 'Spring and autumn; in summer for the boat trip.',
      tempo: '3 hours',
      costo: 'Admission 60 yuan, about €7 (2026)',
      orari:
        'Summer 8:30-17:00 Monday to Friday, 8:00-18:00 on Saturdays and during Golden Week, 8:00-17:00 on Sundays; winter 8:30-16:30',
      url: 'https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260324_4564623.html',
      lat: 40.40868,
      lng: 116.34488,
    },
    {
      nome: 'Jinshanling',
      testo:
        'Ten and a half kilometres of Ming wall between Gubeikou Pass and Wangjing Tower, with 67 watchtowers, in Luanping County (Hebei). It is only partly restored: after the first stretches the steps become uneven, grass grows between the stones and the towers are half collapsed.',
      come:
        'About 130 km from Beijing: car with driver or a day tour, or shared shuttles leaving early in the morning. You go up on foot or by cable car, then walk along the ridge from tower to tower.',
      quando: 'Spring and autumn, starting early; in summer there is no shade on the ridge.',
      tempo: 'A full day: about 2.5 hours on the road each way and 3-4 hours of walking',
      costo: '65 yuan from April to October, 55 yuan from November to March, about €7-8; cable car 40 yuan one way, about €5 (2026)',
      orari: '1 April to 31 October 6:30-18:30; 1 November to 31 March 8:30-16:30',
      lat: 40.67639,
      lng: 117.24444,
      consiglio: 'There is nowhere to buy food or drink along the way: bring water, a hat and shoes with a good grip.',
    },
    {
      nome: 'Simatai',
      testo:
        'A steep, little-rebuilt section above Yuanyang Reservoir and Gubei Water Town, in Miyun District. The towers follow a thin, rocky crest; it is also the only section in the area you can visit after sunset, with the towers lit up.',
      come:
        'You get there through Gubei Water Town, about 2 hours by car from Beijing, and go up on foot or by gondola. The evening visit has its own ticket.',
      quando: 'Late afternoon and evening, from May to October, for the night visit.',
      tempo: '2-3 hours',
      costo: 'By day 40 yuan, about €5; evening visit 200 yuan, about €24, reduced 80 yuan (2026)',
      orari:
        'Daytime entry 9:00-15:00; in the evening, from May to October, entry 18:00-21:40, and everyone must leave the wall by 22:40',
      url: 'https://www.wtown.com/',
      lat: 40.65873,
      lng: 117.28438,
    },
    {
      nome: 'Gubei Water Town',
      testo:
        'A rebuilt town at the foot of Simatai, with canals, stone bridges, courtyard houses, shops and hotels. It is a tourist resort rather than an old village, and the easiest way to sleep beneath the Wall and see it lit up.',
      come: 'By car from Beijing or on tourist buses; inside the town you walk or take a boat along the canals.',
      quando: 'From the afternoon into the evening, with a night on site.',
      tempo: 'Half a day, better with a night',
      costo: 'Town admission 140 yuan, about €17 (2026)',
      orari:
        'Open 9:00-22:30 Sunday to Thursday, 9:00-23:00 Friday and Saturday; ticket check 9:00-21:00 from November to April, 9:00-22:00 from May to October',
      url: 'https://www.wtown.com/',
      lat: 40.64891,
      lng: 117.267,
    },
    {
      nome: 'Ming Tombs',
      testo:
        'The valley below the Tianshou Mountains where thirteen Ming emperors are buried, a UNESCO site like the Wall. You can visit the Sacred Way, lined with stone animals and officials, Changling, the largest tomb, and Dingling, the only one with its underground palace open.',
      come: 'Metro Changping line to Ming Tombs station, then bus or taxi; by car they are often combined with Badaling, Juyongguan or Mutianyu.',
      quando: 'Morning, before or after the Wall.',
      tempo: '2-3 hours',
      costo:
        'Dingling 60 yuan in high season; Changling 45 yuan in high season and 30 in low; Sacred Way 20 and 15 yuan; about €2-7 per site; free for over-60s (2026)',
      orari: 'Low season 8:30-16:30, high season 8:30-17:30',
      url: 'https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260320_4562417.html',
      lat: 40.29446,
      lng: 116.21696,
    },
  ],
  programmi: [
    {
      titolo: 'Half a day: Mutianyu',
      tappe: [
        'Leave Beijing at 7, enter at opening time',
        'Gondola to tower 14 and walk towards the higher towers, where the crowds thin out',
        'Toboggan ride down and lunch in the village before heading back',
      ],
    },
    {
      titolo: '1 day: Jinshanling',
      tappe: [
        'Car with driver at dawn, about 2.5 hours on the road',
        'Up on foot or by cable car, then 3-4 hours along the ridge between the towers',
        'Back in Beijing by late afternoon',
      ],
    },
    {
      titolo: '2 days: Jinshanling and Simatai by night',
      tappe: [
        'Day 1: Jinshanling in the morning, then transfer to Gubei Water Town',
        'Evening: Simatai lit up, night in the town',
        'Day 2: Gubei canals early in the morning, back to Beijing',
      ],
    },
    {
      titolo: '1 day with the Ming Tombs',
      tappe: [
        'Morning: Sacred Way and Dingling',
        'Afternoon: Juyongguan or Mutianyu',
        'Back in Beijing for dinner',
      ],
    },
  ],
  biglietti: [
    {
      tipo: 'Badaling, admission',
      prezzo: '40 yuan April to October, 35 November to March (about €5)',
      include: 'Entry to the section; reduced 20 and 17.5 yuan; free for under-18s and over-60s with ID',
      dove: 'Official Badaling channels or the ticket office, with your passport',
    },
    {
      tipo: 'Mutianyu, admission',
      prezzo: '45 yuan (about €5.50)',
      include: 'The wall only; reduced 25 yuan for foreign minors aged 6 to 18',
      dove: 'mutianyugreatwall.com up to 30 days ahead, named ticket',
    },
    {
      tipo: 'Mutianyu, shuttle bus',
      prezzo: 'about 15 yuan return (about €2)',
      include: 'Bus of about 3 km between the service centre and the foot of the wall; free under 1.2 metres',
      dove: 'Official website or service centre',
    },
    {
      tipo: 'Mutianyu, gondola',
      prezzo: 'about 100 yuan one way, 140 return (about €12-17)',
      include: 'Ride up to tower 14; free under 1.2 metres',
      dove: 'Official website or ticket office',
    },
    {
      tipo: 'Mutianyu, chairlift and toboggan',
      prezzo: 'about 100 yuan one way, 140 return (about €12-17)',
      include: 'Chairlift up and toboggan down; a different company from the gondola, tickets not interchangeable',
      dove: 'Official website or toboggan ticket office',
    },
    {
      tipo: 'Juyongguan, admission',
      prezzo: '40 yuan high season, 35 low season (about €4-5)',
      include: 'Entry to the pass and walls; free for under-18s and over-60s',
      dove: 'Ticket office',
    },
    {
      tipo: 'Huanghuacheng, admission',
      prezzo: '60 yuan (about €7)',
      include: 'Entry to the lake and wall area; reduced for students and minors',
      dove: 'Ticket office',
    },
    {
      tipo: 'Jinshanling, admission',
      prezzo: '65 yuan April to October, 55 November to March (about €7-8)',
      include: 'Entry to the open section',
      dove: 'Ticket office',
    },
    {
      tipo: 'Jinshanling, cable car',
      prezzo: '40 yuan one way (about €5)',
      dove: 'Ticket office',
    },
    {
      tipo: 'Gubei Water Town',
      prezzo: '140 yuan (about €17)',
      include: 'Entry to the town',
      dove: 'wtown.com or ticket office',
    },
    {
      tipo: 'Simatai, daytime',
      prezzo: '40 yuan (about €5)',
      include: 'Entry to the wall, ticket check 9:00-15:00',
      dove: 'wtown.com or the town ticket office',
    },
    {
      tipo: 'Simatai, evening',
      prezzo: '200 yuan (about €24); reduced 80 yuan',
      include: 'Wall lit up, entry 18:00-21:40 from May to October; reduced for children between 1.2 and 1.5 metres, students and over-60s',
      dove: 'wtown.com or the town ticket office, in advance',
    },
    {
      tipo: 'Ming Tombs, Dingling',
      prezzo: '60 yuan in high season (about €7)',
      include: 'Tomb with underground palace; half price for students, free for over-60s and children under 1.2 metres',
      dove: 'Ticket office',
    },
  ],
  mesi: [
    { voto: 2, folla: 'bassa', nota: 'Dry cold and clear skies; with snow the sections are almost empty.' },
    { voto: 2, folla: 'media', nota: 'Chinese New Year brings a week of crowds; the rest of the month is freezing and quiet.' },
    { voto: 3, folla: 'bassa', nota: 'Still cold, with wind and possible sandstorms; few people.' },
    { voto: 4, folla: 'media', nota: 'Mild weather and trees in blossom; the wind can be strong on the ridge.' },
    { voto: 4, folla: 'media', nota: 'Ideal temperatures, but avoid the first days of the month, with the Labour Day holiday.' },
    { voto: 3, folla: 'media', nota: 'Rising heat and long days; start early.' },
    { voto: 2, folla: 'alta', nota: 'Humid heat, thunderstorms and Chinese school holidays.' },
    { voto: 2, folla: 'alta', nota: 'Sticky heat and rain, with domestic tourism at its peak.' },
    { voto: 5, folla: 'media', nota: 'Drier air, clear skies and mild temperatures: the best month.' },
    { voto: 4, folla: 'alta', nota: 'Avoid Golden Week, 1-7 October; afterwards the autumn woods are at their best.' },
    { voto: 4, folla: 'bassa', nota: 'Cool and clear, few people; from the 16th Mutianyu switches to winter hours.' },
    { voto: 2, folla: 'bassa', nota: 'Bitter cold and wind on the towers; empty sections.' },
  ],
  zone: [
    {
      nome: 'Dongcheng and Wangfujing',
      perChi: 'Those visiting the Wall on a day trip and Beijing on foot',
      testo: 'The city centre, handy for the metro and for dawn departures to Mutianyu and Jinshanling.',
      fascia: '€60-130',
    },
    {
      nome: 'Shichahai and Gulou',
      perChi: 'Those who want to sleep in the hutongs',
      testo: 'Hotels in courtyard houses among the lanes and lakes; taxis often can\'t reach the door, so for early departures arrange to meet the car on a main road.',
      fascia: '€60-150',
    },
    {
      nome: 'Mutianyu village',
      perChi: 'Those who want the Wall at opening time without the morning drive',
      testo: 'Guesthouses and a hotel at the foot of the section: in the evening and early morning the place is quiet.',
    },
    {
      nome: 'Gubei Water Town',
      perChi: 'Those who want Simatai by night',
      testo: 'Hotels and inns inside the town, a short walk from the way up to the lit-up wall; the next day Jinshanling is an easy move.',
    },
  ],
  gite: [
    {
      nome: 'Imperial Beijing',
      distanza: '1-2 hours by road from the nearest sections',
      come: 'By car or public transport from the centre.',
      testo: 'The Forbidden City, the Temple of Heaven and the Summer Palace: the natural base for every trip to the Wall.',
      link: '/destinazioni/cina/pechino',
    },
    {
      nome: 'Tianjin',
      distanza: '30 minutes by train from Beijing',
      come: 'High-speed train from Beijing South station.',
      testo: 'A port city with a riverfront of European buildings from the former concessions and a Ferris wheel built on top of a bridge.',
    },
    {
      nome: 'Xi\'an and the Terracotta Army',
      distanza: 'about 4.5 hours by high-speed train from Beijing',
      come: 'Train from Beijing West station, or a domestic flight.',
      testo: 'The ancient capital with city walls you can ride along by bike and the terracotta warriors of the First Emperor, the ruler who linked the earliest stretches of wall.',
      link: '/destinazioni/cina/xian',
    },
  ],
  faq: [
    {
      domanda: 'Which section of the Great Wall should I choose from Beijing?',
      risposta:
        'With half a day or with children, Mutianyu: restored, green, with a cable car and toboggan. To walk for hours on a partly original stretch, Jinshanling. To see it at night, Simatai. Badaling is the easiest to reach but also the most crowded.',
    },
    {
      domanda: 'Can I get to the Wall by public transport?',
      risposta:
        'Yes for Badaling, by high-speed train, and for the Ming Tombs by metro. Mutianyu can be reached by direct shuttles or bus plus taxi; for Jinshanling and Simatai you almost always need a car with driver or a tour.',
    },
    {
      domanda: 'Do I need to book and bring my passport?',
      risposta:
        'Yes: tickets are issued in your name, and at Mutianyu they are sold online up to 30 days ahead, one per passport per day. At the entrance you show your original passport.',
    },
    {
      domanda: 'How hard is the walk?',
      risposta:
        'Harder than it looks: the Wall follows the ridge with tall, uneven steps and no shade. At Mutianyu the cable car saves the climb; at Jinshanling and Simatai you walk for hours on steep stretches.',
    },
    {
      domanda: 'Can I visit the Wall at night?',
      risposta:
        'Yes, at Simatai from May to October, with entry between 18:00 and 21:40 and a 200-yuan ticket; Mutianyu opens in the evening only at certain times, on towers 10-15.',
    },
    {
      domanda: 'When is the best time to go?',
      risposta:
        'September and the second half of October, then April and May. Avoid Golden Week in early October, the first days of May, Chinese New Year and the sticky heat of July and August.',
    },
  ],
  galleria: [
    {
      src: '/images/meraviglie/grande-muraglia-cinese/jinshanling.jpg',
      alt: 'The Great Wall at Jinshanling dropping to a watchtower and climbing again along the green ridge, between hazy hills',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/mutianyu-toboga.jpg',
      alt: 'The metal track of the Mutianyu toboggan running down through the woods, with a yellow railing and the wall on the hill',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/badaling-neve.jpg',
      alt: 'The south section of Badaling covered in snow, with the wall and towers climbing between white trees',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/gubei-da-simatai.jpg',
      alt: 'The Gubei valley seen from high on the Simatai wall, with the town, the reservoir and mountains on the horizon',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/huanghuacheng.jpg',
      alt: 'The Huanghuacheng wall running over wooded hills under a blue sky, with rocky ridges in the background',
    },
    {
      src: '/images/meraviglie/grande-muraglia-cinese/simatai.jpg',
      alt: 'The Simatai wall climbing a bare crest towards the mountains, with a watchtower in the foreground',
    },
  ],
}
