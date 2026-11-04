import type { Destinazione } from '@/lib/types'

export const destinazioniCina: Destinazione[] = [
  {
    slug: 'pechino',
    paeseSlug: 'cina',
    ordine: 1,
    nome: 'Beijing',
    tipologia: ['city', 'culture', 'history'],
    giorniConsigliati: '4-5 days, one of them entirely for the Great Wall',
    visitataPersonalmente: true,
    introduzione:
      "The country's political and symbolic capital: two imperial palaces, the temple where the emperor prayed for the harvest, the last hutongs to survive the bulldozers and, an hour and a half away, the stretch of the Great Wall you see in all the photographs.",
    percheAndarci:
      "Because it's the only place where imperial China, Maoist China and today's China touch within a few kilometers: you leave the Forbidden City, cross Tiananmen and find yourself in front of Mao's mausoleum, with the financial skyline in the background.",
    cosaVedere: [
      'The Forbidden City, the largest complex of wooden palaces in the world, with almost a thousand buildings',
      "Tiananmen Square and, on the other side, Jingshan Hill, from which you see the golden roof of the Forbidden City from above",
      'The Temple of Heaven, with the circular hall under three blue roofs and the park where every morning hundreds of retirees dance, sing and play cards',
      'The Summer Palace, with Kunming Lake and the long painted corridor',
      "The hutongs around the Drum Tower and Houhai Lake, the fabric of alleys and courtyards of the old city",
      'The Great Wall: Mutianyu, Jinshanling or Simatai depending on how much you are willing to walk',
    ],
    cosaFare: [
      'Walk a stretch of unrestored Wall at Jinshanling (there is a dedicated experience card)',
      'Visit the Forbidden City at opening time, with the booking made days ahead',
      'Peking duck in a specialized restaurant: in Beijing it is a dish to order whole, carved at the table',
      'Bike or rickshaw ride through the hutongs at sunset',
      'Climb Jingshan in the last hour of light, the best view over the old city',
    ],
    doveDormire:
      "The Dongcheng areas around Wangfujing and the hutongs of Houhai Lake are the most convenient for getting around on foot and by subway; Sanlitun is the choice for those who want the modern side, restaurants and nightlife. It's best to choose by subway line rather than by neighborhood: the city is huge and traffic on the surface is heavy.",
    doveMangiare:
      "Peking duck is the culinary reason to stay in Beijing, and it should be eaten in a place that prepares it as a trade, not where it's just one item on the menu. The rest of the city is eaten on the street and in neighborhood restaurants: jianbing (the savory morning crêpe) from the carts, steamed jiaozi and baozi, hand-pulled Shanxi noodles, and the cumin lamb skewer that is the Muslim legacy of the north. A practical detail: almost all places have the menu only in Chinese, and with the camera translator the problem becomes a game.",
    comeArrivare:
      "International flight to Beijing Capital (PEK) or to the newer Daxing (PKX), which however is very far from the center: check which of the two before booking the transfer. Both are connected by subway and express trains.",
    comeSpostarsi:
      "The subway is the best way: extensive, cheap, with signs also in Latin characters. Taxis are taken only with the app (DiDi, available in English and linkable to a foreign card) because flagging one in the street without speaking Chinese is complicated. Distances in the center are deceptive: what looks like a block on the map is often a kilometer.",
    periodoMigliore:
      "September-October is the best season, with clear skies and mild temperatures; April-May the second choice. Summer is muggy and full of domestic tourism, winter dry and freezing but with the Wall under snow and nobody around.",
    costi:
      "Forbidden City around 60 yuan in high season (less in winter), Temple of Heaven and Summer Palace around 30-60 yuan with the combined ticket, Great Wall admission 40-45 yuan plus cable car where there is one. The subway costs a few yuan a ride.",
    erroriDaEvitare: [
      "Showing up at the Forbidden City without a reservation: entry is capped, named and tied to your passport, and tickets sell out days ahead. The physical ticket office no longer exists",
      "Choosing Badaling because it's the nearest stretch of Wall: it's also the most restored and the most crowded in the country",
      "Following someone who stops you in the street offering a tea ceremony or an art exhibition: it's Beijing's historic scam and it still works",
      "Underestimating distances and planning the Forbidden City, Temple of Heaven and Summer Palace on the same day",
    ],
    confronti: [
      {
        titolo: 'Which stretch of the Great Wall to choose from Beijing',
        introduzione:
          "Whether it will be a trip in a queue or the best day of the journey depends on this choice. There are four stretches reachable in a day from the capital and they don't resemble each other: travel time, effort and above all how many people you find on the walkway all change.",
        opzioni: [
          {
            nome: 'Badaling',
            sintesi: 'The nearest and most famous stretch, fully restored, with a direct train from Beijing North station.',
            costo: 'admission about 40 yuan, high-speed train a few yuan',
            durata: 'half a day',
            pro: ['The easiest to reach, even on your own and without a tour', 'Wide, safe walkway, suitable for anyone', 'Cable car and toboggan to avoid the climb'],
            contro: ['The most crowded stretch in China: on holidays you move in single file', 'Restored to the point of looking like a modern reconstruction', 'Zero sense of isolation'],
            perChi: 'Anyone with few hours, traveling with small children or people with reduced mobility.',
          },
          {
            nome: 'Mutianyu',
            sintesi: 'The best-balanced compromise: restored but immersed in greenery, with a chairlift to go up and a rail toboggan to come down.',
            costo: 'admission about 45 yuan plus 100-140 yuan for cable car and toboggan',
            durata: 'full day with the transfer',
            pro: ['Much less crowded than Badaling', 'A landscape of forests that becomes spectacular in fall', 'The toboggan descent is one of the most fun things of the trip'],
            contro: ['You need a car or an organized transfer, public transport is awkward', 'It is still a rebuilt stretch', 'The extra costs of the lifts double the price of admission'],
            perChi: "Anyone who wants the Wall beautiful and comfortable in a single day, without treating it as a demanding excursion.",
          },
          {
            nome: 'Jinshanling',
            sintesi: 'Two and a half hours from Beijing, only partly restored, with half-collapsed towers, grass between the stones and long stretches with no one in sight.',
            costo: 'admission about 65 yuan, cable car separate',
            durata: 'full day, with 3-4 hours of walking',
            pro: ["It's the Wall you imagine before leaving: ruined, steep, deserted", 'The most photogenic stretch near Beijing', 'You walk for hours passing very few people'],
            contro: ['Long transfer, to be organized', 'Demanding: constant ups and downs on steps of uneven height, with no shade', 'Services almost absent along the route'],
            perChi: 'Anyone with a full day and trained legs, who comes to China partly for this.',
          },
          {
            nome: 'Gubei Water Town and Simatai',
            sintesi: 'A rebuilt water village at the foot of the Wall, with the only stretch that can be visited at night, lit up.',
            costo: 'admission to the village plus ticket for the Wall, roughly 150-200 yuan in total',
            durata: 'one night on site',
            pro: ["The illuminated Wall after sunset can't be seen anywhere else", 'You sleep at the foot of the site, avoiding the evening rush back', 'Nice even just as a village, with the canals'],
            contro: ["The village is a recent reconstruction and it shows: it's a tourist product, not a historic town", 'The most expensive of the four', 'Must be booked in advance, evening entry is capped'],
            perChi: 'Anyone with a night to spend outside the city who wants the Wall in a version no other tour shows.',
          },
        ],
        raccomandazione:
          "With a single day and good legs, Jinshanling: it's the one that stays with you. With half a day or mixed company, Mutianyu without hesitation. Badaling only if there are no alternatives, and never on a national holiday.",
      },
    ],
    miaEsperienza:
      "Beijing is the city that asks for more preparation than anything else on the trip, and it pays back immediately those who did it. The Forbidden City is bigger than any expectation, and that is both its merit and its limit: you cross it courtyard after courtyard in one direction only, with thousands of people, and after the third throne hall I noticed I was looking without seeing. The trick is to leave the central road and slip into the side palaces to the east: almost nobody goes there and the rooms are small, human-sized. The Temple of Heaven early in the morning, on the other hand, never disappoints, and not because of the temple. In the park around it hundreds of retirees dance, sing in chorus, play cards and do sword exercises: it's the most beautiful and least touristy scene in the city. About the hutongs the truth must be told. The ones around Houhai are bars and shops by now; real life is in the alleys two blocks farther on.",
    luoghi: [
      {
        nome: "Forbidden City",
        testo: "The largest complex of wooden imperial palaces in the world, with almost a thousand buildings, lived in by the Ming and Qing emperors for 500 years. You cross it courtyard after courtyard along the central axis.",
        come: "Metro line 1 to Tiananmen East, entering through the Meridian Gate. Tickets are sold online only, in your name and tied to your passport: the physical ticket office no longer exists.",
        quando: "Closed on Mondays. Go at opening time, with a booking made several days ahead.",
        tempo: "3-4 hours",
        url: "https://www.dpm.org.cn/",
        consiglio: "Leave the central route and slip into the side palaces to the east: almost nobody goes there, and the rooms are on a human scale.",
      },
      {
        nome: "Tiananmen Square and Jingshan Hill",
        testo: "The largest square in the world, with security checks. From Jingshan Hill, to the north, you can see the golden roofs of the Forbidden City from above.",
        come: "Metro to Tiananmen East or West; walk to Jingshan from the back of the Forbidden City. You need your passport.",
        quando: "Morning or sunset for Jingshan.",
        tempo: "1 hour for Tiananmen, 1 hour for Jingshan",
        consiglio: "Go to Jingshan at sunset for the light on the rooftops.",
      },
      {
        nome: "Temple of Heaven",
        testo: "The complex where the emperors prayed for good harvests, with the circular hall under three blue roofs. The park around it is popular with retirees.",
        come: "Metro line 5 to Tiantandongmen.",
        quando: "Early morning: in the park hundreds of retirees dance, sing and play cards.",
        tempo: "2-3 hours",
        consiglio: "The park in the early morning is worth as much as the temple.",
      },
      {
        nome: "Summer Palace",
        testo: "An imperial residence on Kunming Lake, with the Long Corridor, Longevity Hill and the Seventeen-Arch Bridge.",
        come: "Metro line 4 to Beigongmen.",
        quando: "A weekday morning.",
        tempo: "3-4 hours",
        consiglio: "It is big: set aside half a day.",
      },
      {
        nome: "The Great Wall at Jinshanling",
        testo: "An unrestored, uncrowded stretch of Ming wall, with towers and steep ups and downs.",
        come: "By car or tour from Beijing, about 2-3 hours.",
        quando: "Early morning, in good weather.",
        tempo: "4-5 hours",
        consiglio: "More beautiful and less crowded than Badaling: see the experience page.",
      },
      {
        nome: "Hutong and Peking duck",
        testo: "The lanes of the old neighbourhoods around Houhai Lake, best explored by bike or rickshaw. Peking duck should be eaten in a restaurant that specialises in it.",
        come: "Metro line 8 to Shichahai.",
        quando: "Evening.",
        tempo: "2-3 hours",
        consiglio: "Avoid places where the duck is just one item on the menu.",
      },
    ],
    programmi: [
      { titolo: "2 days: imperial Beijing", tappe: ["Day 1: Forbidden City, Jingshan, hutong and duck","Day 2: Temple of Heaven in the morning, Summer Palace"] },
      { titolo: "3 days: add the Great Wall", tappe: ["Days 1-2: as above","Day 3: Great Wall at Jinshanling"] },
    ],
    zone: [
      { nome: "Dongcheng / Wangfujing", perChi: "For those who want to get around on foot", testo: "Convenient for the metro and for the lanes around Houhai." },
      { nome: "Sanlitun", perChi: "For those who want the modern side", testo: "Restaurants and nightlife." },
    ],
    sapori: [
      { nome: "Peking duck", testo: "Order it whole, carved at the table." },
      { nome: "Jianbing", testo: "The savoury morning crepe." },
      { nome: "Jiaozi and baozi", testo: "Steamed dumplings." },
      { nome: "Shanxi noodles", testo: "Pulled by hand." },
    ],
    attenzioni: [
      "Turning up at the Forbidden City without a booking: tickets sell out days in advance.",
      "Choosing Badaling: the most restored and most crowded stretch.",
      "Following people who stop you in the street for tea or exhibitions: a known scam.",
      "Hailing a taxi in the street: use DiDi.",
    ],
    esperienzeSlugs: ['muraglia-jinshanling', 'citta-proibita'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'The blue and gold circular roofs of the Hall of Prayer for Good Harvests, in the Temple of Heaven in Beijing',
    immagine: '/images/cina/pechino-tempio-del-cielo-riccardo.jpg',
  },
  {
    slug: 'xian',
    paeseSlug: 'cina',
    ordine: 2,
    nome: "Xi'an",
    tipologia: ['culture', 'history', 'city'],
    giorniConsigliati: '2 full days, arriving the evening before',
    visitataPersonalmente: true,
    introduzione:
      "The eastern terminus of the Silk Road and capital of thirteen dynasties. Today it is a city of thirteen million people with a fully preserved Ming city wall, a Muslim quarter that smells of cumin and, an hour from the center, the Terracotta Army.",
    percheAndarci:
      "For the Terracotta Army, which alone justifies the detour. And because here you understand that China isn't only Han: the Hui quarter, Muslim for more than a thousand years, with the mosque built like a Chinese temple, can't be seen elsewhere.",
    cosaVedere: [
      'The Terracotta Army, with the three pits and the bronze chariots museum',
      'The Ming walls, fourteen kilometers of circuit that you can ride by bicycle on top of the walkway',
      'The Muslim Quarter and the Great Mosque, hidden at the end of an alley of stalls',
      'The Giant Wild Goose Pagoda, with the square of musical fountains',
      "The Bell Tower and the Drum Tower, at the exact point where the city's axes cross",
      'The Shaanxi History Museum, one of the most important in the country',
    ],
    cosaFare: [
      'Visit the Terracotta Army with a booked ticket (there is a dedicated experience card)',
      'Full tour of the walls by bicycle, about an hour and a half of pedaling',
      'Dinner in stages among the stalls of the Muslim Quarter',
      "Taste the roujiamo, the stewed pork sandwich that they claim here as the first hamburger in history",
    ],
    doveDormire:
      "Inside the walls, in the quadrant around the Bell Tower: you walk everywhere, the Muslim Quarter is ten minutes away and the buses to the Terracotta Army leave from the railway station, reachable by subway.",
    doveMangiare:
      "Xi'an is one of the cities where you eat best in China and the credit goes almost entirely to Hui cuisine. In the Muslim Quarter you dine walking: cumin lamb skewers cooked over embers, the roujiamo, biang biang noodles (a single noodle as wide as a belt), cold spicy liangpi, and yangrou paomo, the lamb soup in which you crumble the bread by hand before handing it to the kitchen. The advice is to eat a little at each stall and keep going instead of sitting in a restaurant.",
    comeArrivare:
      "High-speed train from Beijing in about 4h30 and from Shanghai in 6 hours, and it's the right way to get there. Alternatively a flight to Xi'an Xianyang (XIY). Xi'an North station is outside the city but connected by subway.",
    comeSpostarsi:
      "Subway for long trips and the historic center on foot. For the Terracotta Army, public bus 5 (306) from the railway station is cheap and direct; the “tourist buses” that intercept passengers in the station square instead take you to minor sites passed off as the museum, and it's a common rip-off.",
    periodoMigliore: "April-May and September-October; summer in Xi'an is scorching and the pits are not air-conditioned",
    costi:
      "Terracotta Army around 120 yuan in high season, with mandatory online booking; city walls 54 yuan plus bicycle rental; Shaanxi History Museum free but with capped reservations, which sell out in a few minutes.",
    erroriDaEvitare: [
      "Arriving at the Terracotta Army museum without a reservation: the physical ticket offices have been closed, you enter only with a named reservation tied to your passport and the sales window opens just 7 days before",
      'Getting on the unofficial buses in front of the station: they take you to minor mausoleums passing them off as the main site',
      'Visiting the pits starting from number one: it is the most spectacular and after it the other two seem like little; many guides recommend the reverse order',
      'Taking the Shaanxi History Museum for granted: it is free but the daily places sell out within minutes of bookings opening',
    ],
    confronti: [
      {
        titolo: 'High-speed train or domestic flight?',
        introduzione:
          "On the classic Beijing-Xi'an-Shanghai axis the question comes up on every leg, and the answer isn't always the same. What counts is door-to-door duration, not that of the vehicle: high-speed stations are in the city or nearly, airports are not.",
        opzioni: [
          {
            nome: 'High-speed train (up to 5-6 hours)',
            sintesi: "The right vehicle for Beijing-Xi'an, Xi'an-Shanghai, Shanghai-Suzhou and in general for the whole east of the country.",
            costo: 'roughly €40-90 in second class depending on distance',
            durata: "Beijing-Xi'an 4h30, Beijing-Shanghai 4h30, Shanghai-Suzhou 25 minutes",
            pro: ['Stations in the city: you save more time than it seems', 'Punctual trains and departures every half hour on the busiest routes', 'Luggage with you, no hold or weight limits', 'You see the country scroll by from the window'],
            contro: ['Tickets on sale only 15 days ahead, at a time that varies from station to station, and on the busy routes they sell out in a few hours', 'You need a 12306 account verified with your passport, to be prepared before leaving', 'At the station you need 30-40 minutes of margin for the checks, and the gates close before departure'],
            perChi: 'Anyone moving around the east and center of the country: over these distances the train almost always wins.',
          },
          {
            nome: 'Domestic flight',
            sintesi: 'The sensible option on legs that by train exceed eight hours: Shanghai-Lijiang, Beijing-Chengdu, Guilin-Zhangjiajie.',
            costo: 'often €60-120 booking a few weeks ahead',
            durata: '2-3 hours of flight, plus transfers to and from the airports',
            pro: ['Over huge distances it saves a whole day of travel', 'Extensive domestic network, even to mid-sized cities', 'Low prices by European standards'],
            contro: ['Delays on Chinese domestic flights are frequent and sometimes very long', 'Airports far from the center on both sides', 'Security checks slower than in Europe'],
            perChi: 'Anyone crossing the country from east to west, or who needs to reach Yunnan, Sichuan and Hunan from far away.',
          },
        ],
        raccomandazione:
          "The practical rule: under six hours the train beats the plane door to door, over eight the flight wins. And whatever the choice, booking is done before leaving Italy, not on site.",
      },
    ],
    miaEsperienza:
      "Photographs have already shown everything about the Terracotta Army, and seeing it live adds only one thing, but a decisive one: the scale. From the railing of pit number one I looked at a nave two hundred meters long full of rows of soldiers, and only there did I understand they were made to be buried, not to be looked at. The real surprise is another: no statue has the same face, and as you get close to the first rows you see faces, hairstyles and mustaches all different. The experience is very managed though: mandatory walkways, constant crowds, and after the first one pits two and three look like construction sites. The rest of Xi'an makes up for it. Cycling on the walls at sunset, with the modern city on one side and the old roofs on the other, is the thing that stayed with me most, and in the evening the Muslim Quarter is the place where you eat best in all of classic China.",
    luoghi: [
      {
        nome: "Terracotta Army",
        testo: "Thousands of soldiers sculpted in 210 BC for the tomb of the first emperor, none with the same face. Three pits and the museum of the bronze chariots.",
        come: "Bus or taxi from Xi'an (about 1 hour). Online booking in your name: the window opens about 7 days ahead.",
        quando: "At opening time.",
        tempo: "3 hours",
        consiglio: "From the railing of pit 1 you grasp the scale.",
      },
      {
        nome: "Ming City Walls",
        testo: "Fourteen kilometres of walls that you can ride along by bicycle.",
        come: "Gates in the city centre.",
        quando: "Sunset.",
        tempo: "1.5 hours",
        consiglio: "Cycle at sunset.",
      },
      {
        nome: "Muslim Quarter and Great Mosque",
        testo: "Lanes of stalls and Hui cuisine, with the mosque at the end of an alley.",
        come: "On foot from the Drum Tower.",
        quando: "Evening.",
        tempo: "2-3 hours",
        consiglio: "Have dinner in stages among the stalls.",
      },
      {
        nome: "Giant Wild Goose Pagoda",
        testo: "A 7th-century Buddhist pagoda, with the square of musical fountains.",
        come: "Metro line 3.",
        quando: "Evening, for the fountains.",
        tempo: "1.5 hours",
        consiglio: "The fountains are in the evening.",
      },
      {
        nome: "Shaanxi History Museum",
        testo: "A free museum with Tang-era finds.",
        come: "Metro.",
        quando: "Closed on Mondays, with limited-quota booking.",
        tempo: "2 hours",
        costo: "Free entry",
        consiglio: "Book right away: it sells out in minutes.",
      },
    ],
    programmi: [
      { titolo: "2 days: Xi'an", tappe: ["Day 1: Terracotta Army","Evening: Muslim Quarter","Day 2: walls by bike, Pagoda, museum"] },
    ],
    zone: [
      { nome: "Inside the walls", perChi: "For those who want to be close to everything", testo: "Convenient for the Muslim Quarter." },
    ],
    sapori: [
      { nome: "Roujiamo", testo: "A stewed pork sandwich." },
      { nome: "Biang biang noodles", testo: "A noodle as wide as a belt." },
      { nome: "Yangrou paomo", testo: "Lamb soup with bread." },
      { nome: "Liangpi", testo: "Cold and spicy." },
    ],
    attenzioni: [
      "Turning up at the Terracotta Army without a booking.",
      "Getting on unofficial buses in front of the station.",
      "Eating at places that do not display prices.",
    ],
    esperienzeSlugs: ['esercito-terracotta', 'mura-xian-bicicletta'],
    tripSlugs: ['cina-classica'],
    imageAlt: "The Ming walls of Xi'an with the watchtowers and the tree-lined park at the foot of the circuit",
    immagine: '/images/cina/xian.jpg',
  },
  {
    slug: 'shanghai',
    paeseSlug: 'cina',
    ordine: 3,
    nome: 'Shanghai, Suzhou and the water villages',
    tipologia: ['city', 'culture', 'architecture'],
    giorniConsigliati: '4-5 days, one of them in Suzhou and half a day in a water village',
    visitataPersonalmente: true,
    introduzione:
      "The most Western city in China, and the most scenic: on one side the Bund, the riverfront of 1920s colonial banks, on the other the skyscrapers of Pudong, grown on what thirty years ago was countryside. Around it, half an hour by train, the classical gardens of Suzhou and the villages built on canals.",
    percheAndarci:
      "Here China shows itself as it wants to be seen, and within an hour by train there is its opposite: Suzhou and the water towns are the China of scholars, gardens and humpback bridges.",
    cosaVedere: [
      'The Bund at sunset and then again at night, when Pudong lights up across the river',
      'The former French Concession district, with its plane trees and brick houses',
      'Yuyuan Garden and the bazaar around it, in the old city',
      'The Shanghai Tower, third tallest skyscraper in the world, with some of the fastest elevators on the planet',
      "The classical gardens of Suzhou: the Humble Administrator's Garden, the Master of the Nets Garden, the Canglang Pavilion",
      'A water village: Zhujiajiao, Wuzhen, Tongli or Nanxun, all reachable in a day',
    ],
    cosaFare: [
      'Walk on the Bund at blue hour, when the neon signs of Pudong come on',
      'A day in Suzhou by high-speed train, 25 minutes of travel (there is a dedicated experience card)',
      'Rowboat ride in the canals of a water village',
      'Evening in the bars of the former French Concession, the most pleasant district in the city',
      'Climb a Pudong rooftop at sunset, the only way to grasp the size of the city',
    ],
    doveDormire:
      "The former French Concession is the most pleasant area to sleep in, green and walkable; the Bund and Nanjing Road are more central but chaotic; Pudong is worthwhile only for transfer convenience. Shanghai is expensive compared to the rest of the country, but the subway lets you sleep far from the center without penalty.",
    doveMangiare:
      "The signature dish is xiaolongbao, steamed dumplings filled with broth, which are eaten with a precise technique: you bite a corner, drink the broth, then eat the rest. Anyone who bites it whole gets burned. Also worth trying are shengjianbao, the pan-seared version, and the morning noodles in broth. Shanghai also has the most developed international scene in China: it's the right place for a break from Chinese food, if after two weeks you need one. In the water villages you eat river fish and braised pork, which in Wuzhen and Tongli is the specialty.",
    comeArrivare:
      "International flight to Pudong (PVG), connected to the center by the Maglev, the magnetic levitation train that reaches 300 km/h in eight minutes. From Beijing and Xi'an, high-speed train.",
    comeSpostarsi:
      "The Shanghai subway is one of the most extensive in the world and covers everything, including the airports and the departure for Zhujiajiao. For Suzhou and the farther water villages, high-speed rail or bus from the bus stations. DiDi for taxis.",
    periodoMigliore:
      "October-November is the best period, with March-April right behind. Summer is humid and oppressive, with typhoons between July and September; winter is cold and damp, with inadequate heating in many buildings.",
    costi:
      "Suzhou gardens 30-80 yuan each depending on the season; water villages 50-120 yuan village admission, often with a combined ticket for the house museums; Shanghai Tower about 180 yuan. The city itself is the most expensive in mainland China.",
    erroriDaEvitare: [
      "Staying in Shanghai without leaving the city: Suzhou is 25 minutes by train and it's another era",
      'Visiting the Suzhou gardens on a weekend or a holiday: they are small and the crowd cancels their meaning',
      "Choosing the most convenient water village without knowing they are very different from each other (see the comparison below)",
      'Falling for the tea scam on Nanjing Road: here it is even more widespread than in Beijing',
    ],
    confronti: [
      {
        titolo: 'Which water village to choose',
        introduzione:
          "Around Shanghai and Suzhou there are at least six, all sold as “the Venice of the East” and all different in distance, price and level of reconstruction. The difference that counts is how far you are willing to travel to find one that is still inhabited.",
        opzioni: [
          {
            nome: 'Zhujiajiao',
            sintesi: 'The nearest: you reach it by subway from Shanghai in about an hour.',
            costo: 'free entry to the village, combined tickets for the house museums around 60-80 yuan',
            durata: 'half a day',
            pro: ['Very convenient, no need to organize anything', "You can do it in an afternoon without losing a day", 'The Fangsheng bridge and the main canals are beautiful'],
            contro: ['Very touristy and very crowded, especially on weekends', 'Main street now all souvenir shops', 'Little local life left'],
            perChi: 'Anyone short on time who still wants to see a village on the water.',
          },
          {
            nome: 'Tongli',
            sintesi: 'A few kilometers from Suzhou, with canals, bridges and the Retreat and Reflection Garden, a UNESCO site.',
            costo: 'village admission around 100 yuan, garden included',
            durata: 'half a day or a day combined with Suzhou',
            pro: ['Less touristy than Zhujiajiao and bigger', 'The UNESCO garden is on a par with those of Suzhou', 'Combines well with a day in Suzhou'],
            contro: ['You need a transfer by bus or taxi from Suzhou', 'The center is still very commercial', 'Admission ticket required'],
            perChi: "Anyone already in Suzhou who wants to add the village without going back to Shanghai.",
          },
          {
            nome: 'Wuzhen',
            sintesi: 'The most polished and the most rebuilt: two separate sectors, the eastern one visitable in a day and the western one designed for the night, with scenic lighting.',
            costo: 'admission 110-150 yuan per sector, combined more expensive',
            durata: 'one night on site to see the western sector lit up',
            pro: ['The west section at night, with reflections on the canals, is the most photogenic of all', 'Very well run, with orderly services', 'You sleep inside the village'],
            contro: ["It's a museum-village: the residents have been relocated, what you see is a meticulous set", 'The most expensive of the group', 'Two hours from Shanghai'],
            perChi: 'Anyone who puts aesthetics before authenticity and has a night to dedicate to it.',
          },
          {
            nome: 'Nanxun',
            sintesi: 'The least trodden of the four, with the mansions of silk merchants and a fabric still partly inhabited.',
            costo: 'admission around 100 yuan',
            durata: 'one day, with a longer transfer',
            pro: ['Still inhabited: you see laundry hung out, bikes, people cooking on the doorstep', 'The silk merchants’ residences, with original furniture and decoration, have no equal in the other villages', 'Much less crowded'],
            contro: ['The most awkward to reach', 'Minimal tourist services', 'Less “postcard” than the others'],
            perChi: 'Anyone who has already seen a water village and wants the real one.',
          },
        ],
        raccomandazione:
          "With half a day, Zhujiajiao and no regrets. With a free night, west Wuzhen after sunset is the most beautiful thing. Those looking for a place still alive should take Nanxun and accept the longer trip.",
      },
    ],
    miaEsperienza:
      "Shanghai works better than they tell it, and the reason is that you walk. In the former French Concession, among the plane trees and the low brick houses, I forgot I was in the most populous city in the country: that's the Shanghai that's worth it. The Bund at night has to be seen, knowing that everyone thinks so: in the evening on the walkway you stand shoulder to shoulder. The real leap is Suzhou. Twenty-five minutes by train and you go from a vertical city to gardens built in the sixteenth century on a precise rule: no window should frame the same thing twice. It sounds like a guidebook detail, but walking inside you understand it right away. The most important advice is to go on a weekday: those gardens are small, and with the crowd they lose what they exist for.",
    luoghi: [
      {
        nome: "The Bund",
        testo: "The riverfront of colonial buildings, with Pudong on the other side.",
        come: "Metro line 2 to East Nanjing Road.",
        quando: "Sunset and night.",
        tempo: "1-2 hours",
        consiglio: "At night it is crowded.",
      },
      {
        nome: "Former French Concession",
        testo: "A neighbourhood of plane trees and low brick houses, the most pleasant in the city.",
        come: "Metro to Shaanxi South Road.",
        quando: "All day.",
        tempo: "Half a day",
        consiglio: "You explore it on foot.",
      },
      {
        nome: "Yuyuan Garden",
        testo: "A Ming garden in the old city, with the bazaar around it.",
        come: "Metro line 10.",
        quando: "Morning.",
        tempo: "2 hours",
        consiglio: "Lots of tourists.",
      },
      {
        nome: "Shanghai Tower",
        testo: "The third-tallest skyscraper in the world.",
        come: "Metro to Lujiazui.",
        quando: "A clear sky.",
        tempo: "1 hour",
        consiglio: "Book ahead.",
      },
      {
        nome: "Suzhou",
        testo: "Sixteenth-century gardens, 25 minutes away by high-speed train.",
        come: "Train from Shanghai Hongqiao.",
        quando: "A weekday.",
        tempo: "A full day",
        consiglio: "Avoid the weekend.",
      },
      {
        nome: "Water villages",
        testo: "Canal towns with rowing-boat rides.",
        come: "Bus or train.",
        quando: "Morning.",
        tempo: "Half a day",
        consiglio: "They are very different from one another.",
      },
    ],
    programmi: [
      { titolo: "1 day: Shanghai", tappe: ["Former French Concession","Yuyuan","The Bund at sunset"] },
      { titolo: "2 days: add Suzhou", tappe: ["Day 1: as above","Day 2: Suzhou"] },
    ],
    zone: [
      { nome: "Former French Concession", perChi: "For those who want atmosphere", testo: "Pleasant on foot." },
      { nome: "Bund area", perChi: "For those who want a view", testo: "More expensive." },
    ],
    sapori: [
      { nome: "Xiaolongbao", testo: "Dumplings filled with broth." },
      { nome: "Shengjianbao", testo: "Pan-fried on the griddle." },
    ],
    attenzioni: [
      "Stopping without leaving the city.",
      "Visiting Suzhou at the weekend.",
      "Falling for the tea scams.",
    ],
    esperienzeSlugs: ['giardini-suzhou', 'bund-pudong'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'A boat on the main canal of Zhujiajiao, a water village in Qingpu district, Shanghai',
    immagine: '/images/cina/shanghai.jpg',
  },
  {
    slug: 'zhangjiajie',
    paeseSlug: 'cina',
    ordine: 4,
    nome: 'Zhangjiajie',
    tipologia: ['nature', 'trekking', 'viewpoints'],
    giorniConsigliati: '3-4 days: two in the national park, one at Tianmen Shan',
    visitataPersonalmente: true,
    introduzione:
      "The mountains of Hunan: three thousand quartzite pillars up to three hundred meters tall rising out of a sea of mist, which inspired the floating mountains of Avatar. The national park is huge and has to be tackled with a plan, because without one you end up spending four hours in cable car lines.",
    percheAndarci:
      "A landscape like this doesn't exist anywhere else. And here you see that the most beautiful China is also in the parks that almost no foreign traveler puts on an itinerary, as well as in the imperial monuments.",
    cosaVedere: [
      'Yuanjiajie, with the Hallelujah Pillar (the column that inspired Avatar) and the First Bridge Under Heaven',
      'The Bailong Elevator, 326 meters of vertical travel attached to the rock face, the tallest outdoor panoramic elevator in the world',
      'Tianzi Shan, the widest viewpoint over the whole massif',
      "The path along the Golden Whip Stream (Jinbian Xi), the only way to see the pillars from below instead of from above",
      'Tianmen Shan, the “heaven’s gate” mountain, with the 999-step staircase and one of the longest cable cars in the world',
      'The glass-bottomed path suspended on the Tianmen cliff',
    ],
    cosaFare: [
      'Go up to Yuanjiajie with the Bailong elevator and walk down (there is a dedicated experience card)',
      'Full day at Tianmen Shan, with cable car, the 99-hairpin road and the final staircase',
      "Walk the Golden Whip path (Jinbian Xi) at the bottom of the valley, where the buses don't reach",
      "Zhangjiajie Grand Canyon with the glass bridge, which when it opened in 2016 was the longest and highest in the world in its category",
    ],
    doveDormire:
      "Two choices with opposite logic. The village of Wulingyuan, just outside the main entrance of the park, is the right base for two days inside the park: you enter at opening avoiding the worst lines. The city of Zhangjiajie is instead for Tianmen Shan, whose cable car leaves from the city center. With a single base you lose hours in transfers.",
    doveMangiare:
      "Hunan cuisine is among the spiciest in China, more than Sichuan's even if in a different way: it doesn't numb the mouth, it just burns. The dishes to try are stir-fried pork with chili, stewed river fish with fermented peppers and fried stinky tofu, a local specialty despite the name. Inside the park you eat badly and expensively, so it's best to stock up on water and something to eat before entering.",
    comeArrivare:
      "Flight to Zhangjiajie Hehua (DYG), or high-speed train on the Chongqing-Changsha line to Zhangjiajie West. From the station or the airport, bus or taxi to Wulingyuan in about 40 minutes.",
    comeSpostarsi:
      "Inside the park you move only with the eco shuttles, included in the ticket, which connect the entrances to the starting points of cable cars and trails. The system is efficient but internal distances are huge: the map has to be studied beforehand, not at the entrance.",
    periodoMigliore:
      "April-May and September-October. On the mist it's best to reverse the reasoning: it is what makes the pillars look suspended in the void, so a hazy day isn't lost. The lost one is the pouring rain, when the cable cars close.",
    costi:
      "Entrance to the national park around 236 yuan, valid four days and including the internal shuttles; the Bailong elevator and cable cars are paid separately, roughly 65-100 yuan a ride; Tianmen Shan is a separate ticket, around 250-280 yuan with cable car included. The total quickly goes above €60-70 per person.",
    erroriDaEvitare: [
      'Planning a single day: the park is huge and the lines at cable cars and elevator can be worth more than an hour per leg',
      'Going during the national holiday weeks (October 1-7, early May): waiting times become three or four hours',
      'Sleeping in the city thinking you will do the park in a day: you lose two hours of transfers a day',
      'Not buying the Tianmen cable car ticket in advance, with the time slot: you risk being left out on busy days',
    ],
    confronti: [
      {
        titolo: 'National park or Tianmen Shan: which to choose if you have only one day',
        introduzione:
          "Zhangjiajie is actually two different destinations an hour apart, with separate tickets and landscapes that don't resemble each other. Those with little time have to choose, and it's best to do so knowing what you leave behind.",
        opzioni: [
          {
            nome: 'Zhangjiajie National Forest Park (Wulingyuan)',
            sintesi: 'The quartzite pillars, Yuanjiajie, the Bailong elevator: the mountains of Avatar.',
            costo: 'about 236 yuan for four days, plus cable cars and elevator',
            durata: 'at least two days to do it well',
            pro: ["It's the landscape you come all this way for, and it has no equal", 'The ticket is valid for four days: you enter and exit without buying again', 'Many trails, also in the valley bottom, where the crowd thins out'],
            contro: ['Enormous: without a plan you spend hours on shuttles and in lines', 'Very long lines at elevator and cable cars in peak periods', 'Must be paired with lodging at Wulingyuan, not in the city'],
            perChi: 'Anyone coming to Zhangjiajie for the first time: if you pick only one, this is it.',
          },
          {
            nome: 'Tianmen Shan',
            sintesi: 'The mountain above the city, with the natural cave at the top, the 999 steps, the 99-hairpin road and the glass-bottomed paths.',
            costo: 'about 250-280 yuan, cable car included',
            durata: 'one day',
            pro: ['The cable car leaves from the city center: zero transfers', 'The combination of cave, staircase and glass walkways is unique', 'Easily done in a day'],
            contro: ['Less extraordinary landscape than the national park', 'Capped time slots to book in advance', 'The glass walkways are a serious problem for those who suffer from vertigo'],
            perChi: 'Anyone with only one day starting from the city, or who has already done the park and wants something different.',
          },
        ],
        raccomandazione:
          "With three days you do both: two inside the park sleeping at Wulingyuan, one at Tianmen Shan starting from the city, perhaps on the day of arrival or departure. With just one day, the national park without discussion.",
      },
    ],
    miaEsperienza:
      "Zhangjiajie is the place in China that more than any other has to be organized, and the reason is trivial: it's huge and everyone goes. The lines for the Bailong elevator in the middle of the day are the worst thing of the trip. To avoid them you have to be at the entrance at opening and go up right away, leaving the famous viewpoints for late afternoon, when the groups have gone. The landscape holds up to any expectation. What strikes is the number: thousands of pillars, one behind the other to the horizon, going in and out of the mist as you watch. Hoping for a clear day is a mistake: with a cloudless sky they look like ordinary mountains, with haze they look suspended. The least obvious advice is to go down to the valley floor for at least half a day, along the Golden Whip Stream (Jinbian Xi). Looking at those pillars from below, with your neck craned up, is more impressive than seeing them from above.",
    luoghi: [
      {
        nome: "Yuanjiajie and the Hallelujah Pillar",
        testo: "Sandstone pillars that inspired Avatar, with the First Bridge Under Heaven.",
        come: "Bailong Elevator.",
        quando: "First thing in the morning.",
        tempo: "A full day",
        consiglio: "Go up with Bailong and walk down.",
      },
      {
        nome: "Bailong Elevator",
        testo: "326 metres straight up the cliff face.",
        come: "At the entrance.",
        quando: "At opening time.",
        tempo: "1 hour",
        consiglio: "Queues can last an hour.",
      },
      {
        nome: "Tianzi Shan",
        testo: "The widest viewpoint.",
        come: "Cable car.",
        quando: "Afternoon.",
        tempo: "2 hours",
        consiglio: "Go in the afternoon, when there are fewer groups.",
      },
      {
        nome: "Tianmen Shan",
        testo: "A mountain with a cable car, 99 hairpin bends and a staircase.",
        come: "Separate ticket.",
        quando: "A full day.",
        tempo: "A full day",
        consiglio: "A day of its own.",
      },
      {
        nome: "Jinbian Xi",
        testo: "A trail at the bottom of the valley.",
        come: "On foot.",
        quando: "Morning.",
        tempo: "2 hours",
        consiglio: "Where the tour buses do not reach.",
      },
    ],
    programmi: [
      { titolo: "2 days: Zhangjiajie", tappe: ["Day 1: Yuanjiajie, Tianzi Shan","Day 2: Tianmen Shan"] },
    ],
    zone: [
      { nome: "Wulingyuan", perChi: "For those who want to be near the park", testo: "It saves a two-hour transfer." },
    ],
    sapori: [
      { nome: "Chilli pork", testo: "Hunan cuisine." },
      { nome: "Stinky tofu", testo: "Fried." },
    ],
    attenzioni: [
      "Planning just one day.",
      "Going during the holiday weeks.",
      "Sleeping in the city.",
    ],
    esperienzeSlugs: ['avatar-yuanjiajie', 'tianmen-shan'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'The vegetation-covered sandstone pinnacles in Zhangjiajie National Park, Hunan',
    immagine: '/images/cina/zhangjiajie.jpg',
  },
  {
    slug: 'furong-zhen',
    immagine: '/images/viaggi/cina-paesaggi/giorno-3-furong-zhen.jpg',
    paeseSlug: 'cina',
    ordine: 5,
    nome: 'Furong Zhen',
    tipologia: ['villages', 'culture', 'nature'],
    giorniConsigliati: '1 night, as a stop between Zhangjiajie and Fenghuang or Chongqing',
    visitataPersonalmente: true,
    introduzione:
      "The village built over a waterfall: a Tujia village of wooden stilt houses leaning against the rock, with a drop of water passing beneath and through it. It was called Wangcun and took its current name from the film shot there in the 1980s.",
    percheAndarci:
      "Because it's the stop that breaks the transfer between Zhangjiajie and the rest of Hunan, and because at night, with the waterfall lit up and the stone alleys almost empty, it is one of the most beautiful places in the country, and one of the few where you don't meet foreigners.",
    cosaVedere: [
      'The waterfall that crosses the village, with the walkway that passes behind the veil of water',
      'The Tujia stilt houses clinging to the slope above the You River',
      'The main paved street, with steps that descend to the river',
      'The village lit up after sunset, the moment worth sleeping there for',
    ],
    cosaFare: [
      'Walk behind the waterfall along the walkway cut into the rock',
      'Sleep in a guesthouse overlooking the river and watch the village empty out in the evening',
      'Breakfast with spicy tofu and rice noodles at the morning stall',
    ],
    doveDormire:
      "The guesthouses inside the village, those overlooking the river or the waterfall, are the only reason to stop and sleep: whoever arrives for the day sees the place at its worst hours, those of the buses. Standards are simple, rooms small and English almost absent.",
    doveMangiare:
      "Tujia cuisine, so Hunan in its mountain version: stewed river fish, smoked pork hung above the fire (the area's traditional preservation), spicy tofu and pickled vegetables. You eat in the houses on the main street, almost all with the same menu and no English menu.",
    comeArrivare:
      "About 2 hours by car or bus from Zhangjiajie, 1 hour and a half from Fenghuang. The Furong Zhen high-speed station has made the stop much simpler than it used to be: from Chongqing it takes about 3.5-4.5 hours, with a change at Zhangjiajie West (the last leg lasts about twenty minutes). Updated timetables are on the 12306 app.",
    comeSpostarsi: 'All on foot, on steps: the village is built on a slope and there is no flat route.',
    periodoMigliore:
      "After the rains, between April and October, when the waterfall has full flow: in the dry season it shrinks considerably and the village loses its main element.",
    costi: 'Village admission around 100 yuan, which you pay even if sleeping there; very cheap guesthouses.',
    erroriDaEvitare: [
      'Visiting in a day: between ten and four it is full of groups, evening and early morning are a different place',
      'Going in the dry season expecting the waterfall of the photographs',
      'Counting on cash payments or on English-speaking staff: here Alipay or WeChat Pay and the translator are indispensable',
    ],
    miaEsperienza:
      "It's the stop nobody puts on an itinerary, and yet it stays with you. By day Furong Zhen is what you expect: buses, stalls, the same merchandise as every rebuilt Chinese village. Around six in the evening, though, the groups all leave together, the lights come on over the waterfall and the town goes back to being four streets of wet stone, with a few families eating dinner on the doorstep. The strongest memory is the walkway behind the drop of water: you walk in a corridor cut into the rock, with the noise of the water a meter away, and come out soaked with spray. As a historic village it is largely renovated, so anyone looking for authentic architecture will be disappointed. What counts here is the position, which is unique, and the time of day you look at it.",
    luoghi: [
      {
        nome: "Waterfall and walkway",
        testo: "The village is crossed by a waterfall; a walkway passes behind the curtain of water.",
        come: "On foot.",
        quando: "All day.",
        tempo: "1 hour",
        consiglio: "You come out soaked with spray.",
      },
      {
        nome: "Tujia houses",
        testo: "Houses on stilts above the You River.",
        come: "On foot.",
        quando: "Evening.",
        tempo: "2 hours",
        consiglio: "The village lit up.",
      },
    ],
    programmi: [
      { titolo: "1 night: Furong Zhen", tappe: ["Arrive in the afternoon","Waterfall","Evening in the lit-up village","Early morning"] },
    ],
    zone: [
      { nome: "Guesthouse on the river", perChi: "For those who want to see the village when it is empty", testo: "Very cheap." },
    ],
    sapori: [
      { nome: "River fish", testo: "Braised." },
      { nome: "Smoked pork", testo: "Hung over the fire." },
    ],
    attenzioni: [
      "Visiting as a day trip.",
      "Going in the dry season.",
      "Counting on cash.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'The village of Furong Zhen on the cliff above the river, with the traditional houses and the waterfall',
  },
  {
    slug: 'chengdu',
    paeseSlug: 'cina',
    ordine: 6,
    nome: 'Chengdu',
    tipologia: ['city', 'culture', 'food'],
    giorniConsigliati: '3 days, with one trip out of town',
    visitataPersonalmente: true,
    introduzione:
      "The capital of Sichuan, the city of pandas and hot pot, and by reputation the most relaxed in China: people drink tea in the parks for whole afternoons, play mahjong in the street, and the pace is openly slower than in Beijing and Shanghai.",
    percheAndarci:
      "For the pandas, which here you see in a serious research center and not in a zoo. And for the food: Sichuan has the most recognizable cuisine in the country, and Chengdu hot pot is more than a meal.",
    cosaVedere: [
      'The Giant Panda Breeding Research Base, north of the city',
      "The Wenshu Monastery, the city's most beautiful temple, with the tea room in the courtyard",
      'The Kuanzhai Xiangzi district, the wide and narrow restored alleys',
      "People's Park, with the Heming teahouse where ear cleaning is done in the middle of the crowd",
      'The Dujiangyan irrigation system, in uninterrupted operation since the 3rd century BC, a UNESCO site',
      'The Leshan Giant Buddha, 71 meters carved into the rock, about an hour by high-speed rail',
    ],
    cosaFare: [
      'Panda base at opening, when the animals are active (there is a dedicated experience card)',
      'Sichuan hot pot in a neighborhood place, with the broth divided in two',
      'Sichuan Opera show with the face-changing act',
      'An afternoon in a teahouse, which in Chengdu is the quintessential city activity',
      'Day trip to Leshan for the Giant Buddha, or to Dujiangyan',
    ],
    doveDormire:
      "The area around the Wenshu Monastery and that of Kuanzhai Xiangzi are the most convenient and pleasant; the Chunxi Road district is more commercial but very central for the subway. The panda base is to the north and is reached by subway plus shuttle.",
    doveMangiare:
      "Chengdu is perhaps the city where you eat best in China. You need to know that Sichuan spiciness is of a particular kind: Sichuan pepper doesn't burn, it numbs the tongue, and the sensation (the famous “málà”) throws you off at first taste. The must-have dishes are mapo tofu, gongbao chicken (which has nothing to do with the version served in Europe), dan dan noodles and rabbit, which here is everyday cooking. Hot pot has to be done at least once with the divided broth, half spicy and half clear, so everyone chooses. The street food in the alleys is excellent and costs very little.",
    comeArrivare:
      "Flight to Chengdu Tianfu (TFU) or Shuangliu (CTU), or high-speed rail: from Chongqing it's a little over an hour, from Xi'an about 4 hours.",
    comeSpostarsi: 'Extensive and cheap subway, plus DiDi for routes not covered. The center is easy to walk.',
    periodoMigliore:
      "March-June and September-November. Sichuan lives under a gray lid for much of the year (the local joke is that dogs bark when they see the sun), and summer is hot and humid.",
    costi:
      "Panda base 55 yuan, with mandatory named reservation; Leshan around 80 yuan; hot pot 60-120 yuan per person. An inexpensive city compared to the coast.",
    erroriDaEvitare: [
      'Arriving at the panda base mid-morning: after ten the animals have eaten and are asleep, and you see motionless balls of fur',
      'Showing up without a reservation: entry is named, tied to the passport, and the physical ticket offices are closed',
      'Ordering the hot pot entirely spicy on a first experience: the divided broth exists for this',
      'Doing Leshan and Dujiangyan on the same day: they are in opposite directions',
    ],
    miaEsperienza:
      "In Chengdu I felt like staying longer than the schedule allowed. There's little to see: it's about how you are there. In People's Park, on any afternoon, hundreds of people drink tea alone or play cards, and nobody is in a hurry. It's the only Chinese city where time seems plentiful. On the pandas it's best to lower expectations. At seven thirty in the morning they are awake, eating bamboo and climbing, and for an hour they are what you hoped for; two hours later they sleep and the visit loses everything. What throws you most is the hot pot. Sichuan pepper isn't spicy the way we mean it, it puts the mouth to sleep: the first time the sensation is almost alarming, then it becomes addictive. The advice is to ask for the divided broth and not play the hero.",
    luoghi: [
      {
        nome: "Giant Panda Base",
        testo: "A research centre north of the city.",
        come: "Bus or taxi.",
        quando: "At opening time.",
        tempo: "3 hours",
        url: "https://www.panda.org.cn/",
        consiglio: "After ten o'clock they sleep.",
      },
      {
        nome: "Wenshu Monastery",
        testo: "The most beautiful temple in the city, with a teahouse.",
        come: "Metro.",
        quando: "Morning.",
        tempo: "1.5 hours",
        consiglio: "Have tea in the courtyard.",
      },
      {
        nome: "Kuanzhai Xiangzi",
        testo: "Restored lanes.",
        come: "Metro.",
        quando: "Evening.",
        tempo: "1.5 hours",
        consiglio: "Touristy.",
      },
      {
        nome: "People's Park",
        testo: "The Heming teahouse.",
        come: "Metro.",
        quando: "Afternoon.",
        tempo: "2 hours",
        consiglio: "An afternoon spent in a teahouse.",
      },
      {
        nome: "Leshan Buddha",
        testo: "The Great Buddha carved into the rock.",
        come: "By train.",
        quando: "Morning.",
        tempo: "A full day",
        consiglio: "A day trip.",
      },
    ],
    programmi: [
      { titolo: "2 days: Chengdu", tappe: ["Day 1: pandas, Wenshu","Day 2: People's Park, hot pot"] },
    ],
    zone: [
      { nome: "Centre", perChi: "For those who want convenience", testo: "Close to the lines." },
    ],
    sapori: [
      { nome: "Hot pot", testo: "A divided broth." },
      { nome: "Mapo tofu", testo: "A classic." },
      { nome: "Gongbao", testo: "Chicken." },
    ],
    attenzioni: [
      "Pandas in mid-morning.",
      "Without a booking.",
      "All-spicy hot pot.",
    ],
    esperienzeSlugs: ['panda-chengdu', 'hot-pot-sichuan'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'The Great Hall of the Wenshu Monastery among the trees of the courtyard, Chengdu',
    immagine: '/images/cina/chengdu.jpg',
  },
  {
    slug: 'chongqing',
    paeseSlug: 'cina',
    ordine: 7,
    nome: 'Chongqing',
    tipologia: ['city', 'architecture', 'viewpoints'],
    giorniConsigliati: '2 days, plus one if you add Wulong',
    visitataPersonalmente: true,
    introduzione:
      "The vertical megalopolis built on the hills at the confluence of the Yangtze and the Jialing: thirty-two million inhabitants in the municipality, skyscrapers emerging from the fog, and a geography so steep that the subway passes through a building and the same street can be at ground level and on the fifteenth floor at once.",
    percheAndarci:
      "It's the most photogenic and strangest city in China, gone viral in recent years for good reasons: it has no monuments, it has a shape. And it is the starting point for Yangtze cruises and the base for the Wulong karst.",
    cosaVedere: [
      'Hongya Dong, the complex of multi-story stilt houses lit up at night over the river',
      'Liziba station, where the monorail enters and exits from the sixth floor of a residential building',
      'The Ciqikou district, the ancient village preserved inside the city',
      'The Nanshan viewpoint and the cable car over the Yangtze',
      'The Wulong karst, with the three natural bridges and the Tiankeng sinkhole, three hours from the city',
    ],
    cosaFare: [
      'Cross the river by cable car at sunset',
      'See Hongya Dong from the opposite bank after dark, which is the only point from which you understand it',
      "Chongqing hot pot, even oilier and spicier than Chengdu's: it was born here",
      'Excursion for the day or with an overnight stay to the Wulong karst park',
      'Board the cruise on the Three Gorges of the Yangtze, which leaves from here',
    ],
    doveDormire:
      "The Yuzhong peninsula, the historic-financial center, is the most convenient base: Hongya Dong, Liziba and the piers are reachable on foot or with a few subway stops. It's worth spending a bit more for a room with a river view: here the view is the city.",
    doveMangiare:
      "Chongqing hot pot is the original and makes no concessions: red broth of beef fat and chili, without the sweetened version. The historic places still have tables with the shared compartment pot. Outside hot pot, the specialty is xiaomian, the spicy morning noodles, which here are eaten for breakfast sitting on plastic stools in the street. Also worth trying is laziji, the fried chicken buried under a mountain of dried chilies from which it has to be fished out.",
    comeArrivare:
      "Flight to Chongqing Jiangbei (CKG) or high-speed rail: Chengdu is a little over an hour away, Zhangjiajie is 2-2.5 hours by high-speed rail, Furong Zhen is reached with a change at Zhangjiajie West.",
    comeSpostarsi:
      "Subway and monorail, which here are already a show. Taxis have a structural problem: satellite navigation goes haywire in a multi-level city, and it happens that the driver reaches the right coordinate but on the wrong level. Walking is tiring, you go up and down constantly.",
    periodoMigliore:
      "March-May and September-November. Summer in Chongqing is notorious: it is one of China's “furnace cities”, with weeks above 40 degrees and very high humidity.",
    costi:
      "Wulong around 135 yuan plus shuttles; cable car over the Yangtze a few yuan; Hongya Dong free. A very cheap city for food and transport.",
    erroriDaEvitare: [
      'Going to Hongya Dong and looking at it from inside: from the inside it is a shopping mall, it has to be looked at from the opposite bank, after sunset',
      'Trusting maps to estimate walking times: two points three hundred meters apart can be separated by a hundred meters of elevation',
      'Visiting in July or August, when the heat makes any daytime plan impractical',
      'Considering it only a stopover on the way to the Yangtze cruise: it deserves two days on its own',
    ],
    miaEsperienza:
      "Chongqing is the most absurd city I saw in China, and it has to be taken for what it is: no monuments to tick off, a crazy geography to cross. I understood it when I came out of a shopping mall on the first floor and found myself on a busy street, with two more levels of city under my feet. Hongya Dong at night is more impressive than in photographs, on one condition: look at it from the opposite bank, because inside it is a normal themed shopping mall. The subway entering at the sixth floor of an inhabited building is just like in the videos, and the best detail is that for those who live there it is an everyday thing. On the climate no indulgence: in summer you can't stay here, and a trip planned for July is badly planned.",
    luoghi: [
      {
        nome: "Hongya Dong",
        testo: "Lit-up stilt houses on the river.",
        come: "Metro.",
        quando: "After dark.",
        tempo: "1 hour",
        consiglio: "From the opposite bank.",
      },
      {
        nome: "Liziba Station",
        testo: "A monorail running through the building.",
        come: "Metro line 2.",
        quando: "Daytime.",
        tempo: "30 minutes",
        consiglio: "For the people who live there it is normal.",
      },
      {
        nome: "Ciqikou",
        testo: "An old town.",
        come: "Metro.",
        quando: "Morning.",
        tempo: "2 hours",
        consiglio: "Touristy.",
      },
      {
        nome: "Yangtze cable car",
        testo: "A crossing.",
        come: "Cable car.",
        quando: "Sunset.",
        tempo: "30 minutes",
        consiglio: "At sunset.",
      },
      {
        nome: "Wulong",
        testo: "A karst park.",
        come: "Excursion.",
        quando: "A day.",
        tempo: "A full day",
        consiglio: "A day trip.",
      },
    ],
    programmi: [
      { titolo: "1-2 days: Chongqing", tappe: ["Liziba","Cable car","Hongya Dong at night","Hot pot"] },
    ],
    zone: [
      { nome: "Jiefangbei", perChi: "For those who want the centre", testo: "Convenient." },
    ],
    sapori: [
      { nome: "Chongqing hot pot", testo: "Spicy red broth." },
      { nome: "Xiaomian", testo: "Spicy noodles." },
    ],
    attenzioni: [
      "Looking at Hongya Dong from the inside.",
      "Trusting the walking times.",
      "Going in July and August.",
    ],
    esperienzeSlugs: ['hongya-dong-notte'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'The illuminated Chongqing skyline at night with the Qiansimen Bridge and Hongya Dong on the bank',
    immagine: '/images/cina/chongqing.jpg',
  },
  {
    slug: 'lijiang',
    paeseSlug: 'cina',
    ordine: 8,
    nome: 'Lijiang',
    tipologia: ['villages', 'culture', 'mountains'],
    giorniConsigliati: '2-3 days, as a base for Yulong Xueshan',
    visitataPersonalmente: true,
    introduzione:
      "The old town of the Naxi in northern Yunnan, at 2,400 meters: a maze of paved alleys, canals and gray tiled roofs, a UNESCO site, with the Jade Dragon massif closing the horizon to the north.",
    percheAndarci:
      "It's the logistical base for all of northern Yunnan (Yulong Xueshan, Tiger Leaping Gorge, Shangri-La). And Naxi culture, with its pictographic script still in use, is one of the most distinctive in the country.",
    cosaVedere: [
      'The old town (Dayan), with Sifang square and the canals that run through it',
      'Lion Hill and the Wangu Pagoda, for the view over the gray roofs from above',
      'The village of Baisha, to the north, much less touristy and with Ming frescoes',
      'Shuhe, the minor old town, quieter than Dayan',
      'Black Dragon Pool, with the classic postcard of Yulong Xueshan reflected in the water',
    ],
    cosaFare: [
      'Get lost in the alleys of Dayan early in the morning, before the shops open',
      'Climb Lion Hill at sunset',
      'A day at Baisha by bicycle, where Naxi life has remained as it was',
      'Use Lijiang as a base for Yulong Xueshan and Tiger Leaping Gorge',
    ],
    doveDormire:
      "Courtyard guesthouses inside the old town are the right experience, with the warning that cars don't enter Dayan: you arrive at the edge and continue on foot with your luggage on the cobbles. For comfort and quiet, Shuhe, ten minutes by taxi farther north.",
    doveMangiare:
      "Yunnan cuisine is the most different from the rest of China: less spicy than Sichuan, with many mushrooms, flowers, herbs and cheeses (very rare in the rest of the country). The dishes to look for are the “crossing the bridge” noodles (served in boiling broth with ingredients to add at the moment), the grilled goat cheese of the Bai, stir-fried mushrooms in season and the smoked pork of the Naxi. Inside the old town prices are tourist ones: two alleys outside are enough to halve them.",
    comeArrivare:
      "Flight to Lijiang Sanyi (LJG), which is the normal way to get there, with connections from Kunming, Chengdu, Shanghai and Beijing. Alternatively train from Kunming (about 3 hours by high-speed rail) or from Dali.",
    comeSpostarsi: 'The old town is covered only on foot. For Yulong Xueshan, Baisha and Tiger Leaping Gorge you need tourist buses, taxis or a daily driver.',
    periodoMigliore:
      "March-May and September-November, with clear skies and the massif visible. Rains are concentrated between June and August; winter is cold but clear, with snow on the Jade Dragon.",
    costi:
      "The old town maintenance fee (about 50 yuan) is asked at the entrance to some sites; very cheap guesthouses. The altitude is already noticeable: 2,400 meters is not little, and those arriving from sea level feel it.",
    erroriDaEvitare: [
      "Judging Lijiang from the main street of Dayan at six in the evening, when it is a corridor of shops and karaoke: the old town has to be seen at dawn",
      'Ignoring the altitude: from here you go up to 4,500 meters on Yulong Xueshan, and arriving by plane from sea level the evening before is the wrong choice',
      'Skipping Baisha and Shuhe thinking they are the same as Dayan',
    ],
    miaEsperienza:
      "Lijiang divides, and with reason. The old town is a UNESCO site, and at seven in the evening it is a continuous souvenir market with the music at full volume in the bars of the square: whoever arrives at that hour and stays there goes home convinced it's a trap. Then you go out at six in the morning and find another place: wet alleys, canals flowing, old Naxi women sweeping in front of their houses, no shop open. That's why it makes sense to sleep here instead of passing through. The most useful advice is to dedicate half a day to Baisha, ten kilometers to the north. It's the original Naxi village, almost nobody goes, and there you still find what in Dayan you look for without finding. Finally remember that we're at 2,400 meters and that the reason to come here lies farther north: Lijiang is the base, not the destination.",
    luoghi: [
      {
        nome: "Dayan Old Town",
        testo: "A UNESCO World Heritage site, with Sifang Square and the canals.",
        come: "On foot.",
        quando: "Dawn.",
        tempo: "Morning",
        consiglio: "At six in the morning it is a different place.",
      },
      {
        nome: "Lion Hill",
        testo: "The Wangu Pagoda and a view over the rooftops.",
        come: "On foot.",
        quando: "Sunset.",
        tempo: "1 hour",
        consiglio: "At sunset.",
      },
      {
        nome: "Baisha",
        testo: "The original Naxi village, 10 km to the north.",
        come: "By bike or taxi.",
        quando: "Morning.",
        tempo: "Half a day",
        consiglio: "Almost nobody goes there.",
      },
      {
        nome: "Shuhe",
        testo: "A smaller old town.",
        come: "By bike.",
        quando: "Morning.",
        tempo: "1.5 hours",
        consiglio: "Quieter.",
      },
    ],
    programmi: [
      { titolo: "2 days: Lijiang", tappe: ["Day 1: Dayan, Lion Hill","Day 2: Baisha"] },
    ],
    zone: [
      { nome: "Old town", perChi: "For those who want to sleep among the canals", testo: "Better than just passing through." },
    ],
    sapori: [
      { nome: "\"Across the bridge\" noodles", testo: "Boiling broth." },
      { nome: "Goat cheese", testo: "Made by the Bai." },
    ],
    attenzioni: [
      "Judging Dayan at six in the evening.",
      "Ignoring the altitude (2,400 m).",
      "Skipping Baisha.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'The gray roofs of the old town of Lijiang seen from above, with the mountains in the background',
    immagine: '/images/cina/lijiang.jpg',
  },
  {
    slug: 'yulong-shangri-la',
    paeseSlug: 'cina',
    ordine: 9,
    nome: 'Yulong Xueshan, Tiger Leaping Gorge and Shangri-La',
    tipologia: ['mountains', 'nature', 'trekking'],
    giorniConsigliati: '3-4 days starting from Lijiang',
    visitataPersonalmente: true,
    introduzione:
      "The mountains of northern Yunnan: the Jade Dragon massif (Yulong Xueshan), which approaches 5,600 meters and has been climbed only once, in 1987; the amphitheater at 3,100 meters where the show directed by Zhang Yimou is staged; one of the deepest gorges in the world and, at the end of the road, the Tibetan plateau of Shangri-La.",
    percheAndarci:
      "In three days you go from an open-air theater under a glacier to a trek along a gorge carved 3,000 meters deep, to a Tibetan monastery at 3,200 meters of altitude. It's the strongest sequence of landscapes in all of China.",
    cosaVedere: [
      'The Yulong Xueshan massif, with the cable car that goes up to the glacier at 4,506 meters',
      'The Impression Lijiang show, in the open-air amphitheater at 3,100 meters at the foot of the mountain',
      'The Blue Moon Valley and the Yak Meadow, at the foot of the massif',
      'Tiger Leaping Gorge, where the Yangtze runs enclosed between 3,000-meter walls',
      "Songzanlin Monastery in Shangri-La, Yunnan's largest Tibetan Buddhist complex",
      'The old town of Dukezong in Shangri-La, with the great rotating prayer wheel',
    ],
    cosaFare: [
      'Attend Impression Lijiang with the mountain as backdrop (there is a dedicated experience card)',
      'Two-day trek along the high path of Tiger Leaping Gorge (there is a dedicated experience card)',
      'Take the cable car up to the glacier at 4,506 meters and walk on the walkways at altitude',
      'A day in Shangri-La among monastery, old town and plateau',
    ],
    doveDormire:
      "Lijiang as a base for Yulong Xueshan and for the show. For Tiger Leaping Gorge you sleep in the guesthouses along the high path, at Walnut Garden or the Tea Horse Guesthouse, which are the reason the trek is done in two days instead of one. In Shangri-La, the old town of Dukezong.",
    doveMangiare:
      "On the plateau the cuisine changes and becomes Tibetan: yak butter tea (which throws you off at the first sip), dried yak meat, steamed momo and thick soups. Along Tiger Leaping Gorge you eat in the guesthouses, with simple fixed menus better than you would expect. Around Yulong Xueshan the offer is minimal and expensive: it's best to bring lunch and water from Lijiang.",
    comeArrivare:
      "Everything starts from Lijiang: an hour by car to the Yulong Xueshan entrance, two hours to Qiaotou, where the high path of the gorge begins, four hours to Shangri-La (which also has its own airport and, since 2023, a rail connection from Lijiang in a little over an hour).",
    comeSpostarsi:
      "Tourist buses and daily driver from Lijiang; for the gorge trek you move on foot, with big luggage left in storage in Lijiang or transported to the arrival guesthouse.",
    periodoMigliore:
      "March-May and September-November. The gorge is dangerous in the rainy season (June-August) because of landslides; the glacier is visible all year but on cloudy days the cable car goes up into the fog and you see nothing.",
    costi:
      "Yulong Xueshan: about 100 yuan park admission plus 20 for the shuttle plus the glacier cable car, which is the most expensive item (roughly 120 yuan) and must be booked. Impression Lijiang costs about 190-280 yuan depending on the sector. Tiger Leaping Gorge about 65 yuan. Songzanlin Monastery around 100 yuan.",
    erroriDaEvitare: [
      "Going up to the glacier at 4,506 meters the day after arriving by plane from sea level: the altitude is felt, the oxygen canister sold at the entrance isn't a souvenir",
      'Not booking the big cable car in advance: daily quotas are capped and sell out early in high season',
      'Doing Tiger Leaping Gorge along the paved valley-floor road thinking you have seen it: the real route is the high path, much higher up',
      'Planning the trek in the rainy season, when landslides close stretches of the path',
      'Underestimating Shangri-La: at 3,200 meters the nights are cold in every season and you run out of breath even climbing a flight of stairs',
    ],
    confronti: [
      {
        titolo: 'The three cable cars of Yulong Xueshan',
        introduzione:
          "The massif has three different lifts, with very different prices, altitudes and lines. Most visitors take the first without knowing the others exist, and in high season it's the choice that costs the most hours of waiting.",
        opzioni: [
          {
            nome: 'Glacier cable car (Glacier Park)',
            sintesi: 'The big cable car that goes up to 4,506 meters, with the walkways over the glacier and the highest point reachable.',
            costo: 'roughly 120 yuan, on top of admission and shuttle',
            durata: 'half a day counting the waits',
            pro: ['The highest and most scenic point of the massif', 'The altitude is felt, and worth the trip', 'The walkways let you walk at altitude without any technical difficulty'],
            contro: ['Capped daily quota: without a reservation you risk being left out', 'Very long lines in high season', 'At 4,500 meters those who are not acclimatized feel truly ill', 'With clouds you see nothing and the ticket is spent anyway'],
            perChi: 'Anyone who booked in advance, has a clear day and has spent at least one night in Lijiang.',
          },
          {
            nome: 'Spruce Meadow cable car',
            sintesi: 'Goes up to about 3,200 meters, to a clearing of meadows and spruces at the foot of the walls.',
            costo: 'roughly 55 yuan',
            durata: '1-2 hours',
            pro: ['Far shorter lines than the big cable car', 'Altitude accessible to everyone', 'Frontal view of the massif walls, among the most beautiful'],
            contro: ["You don't reach the glacier", 'Less of a “feat” and less of a story', 'Still crowded on weekends'],
            perChi: 'Anyone with altitude problems, traveling with children or elderly, or who found the big cable car sold out.',
          },
          {
            nome: 'Yak Meadow cable car',
            sintesi: 'The least visited of the three, at about 3,700 meters, on high pastures with a small temple.',
            costo: 'roughly 45 yuan',
            durata: '2 hours',
            pro: ['Almost deserted even in high season', 'Landscape of pastures and yaks, the most peaceful of the massif', 'The cheapest'],
            contro: ['The least spectacular from a panoramic standpoint', 'Few services', 'Still requires a dedicated shuttle'],
            perChi: 'Anyone who wants to walk in peace and cannot stand lines.',
          },
        ],
        raccomandazione:
          "With a clear day and the reservation in hand, the glacier cable car: it's the one you remember. If the sky is overcast it's not worth the price: better to fall back on the Spruce Meadow and keep the money for the show.",
      },
    ],
    miaEsperienza:
      "It's the part of China I remember best, for the sequence more than for any single place. Impression Lijiang on paper looks like the classic tourist thing, with five hundred extras, horses and costumes. Live it works for a reason that has nothing to do with the direction: the amphitheater is open-air at 3,100 meters and the backdrop is the real mountain, with the glacier overhead. No theater can compete. The next day, the cable car to 4,506 meters. You go up in a few minutes and the body has no time to adapt: on the walkways you walk twenty steps and rest, and the oxygen canisters sold at the entrance, which seemed implausible, become reasonable. The best thing remains the high path of Tiger Leaping Gorge: two days of walking on an almost deserted slope, with the Yangtze three thousand meters below that you hear before you see it, and guesthouses where everyone dines at the same table. Shangri-La, at the end of the road, is already Tibet in everything but name.",
    luoghi: [
      {
        nome: "Yulong Xueshan",
        testo: "A massif with a cable car up to 4,506 metres.",
        come: "With a tour.",
        quando: "Morning.",
        tempo: "A full day",
        consiglio: "Altitude: acclimatise first.",
      },
      {
        nome: "Impression Lijiang",
        testo: "An open-air show at 3,100 metres.",
        come: "Taxi.",
        quando: "Evening.",
        tempo: "1.5 hours",
        consiglio: "The mountain is the backdrop.",
      },
      {
        nome: "Tiger Leaping Gorge",
        testo: "A Yangtze gorge with walls 3,000 metres high.",
        come: "Two-day trek.",
        quando: "Spring to autumn.",
        tempo: "2 days",
        consiglio: "A high-level trail.",
      },
      {
        nome: "Shangri-La",
        testo: "A monastery, an old town and a plateau.",
        come: "Bus.",
        quando: "A day.",
        tempo: "A full day",
        consiglio: "A Tibetan world.",
      },
    ],
    programmi: [
      { titolo: "3 days: beyond Lijiang", tappe: ["Day 1: Impression Lijiang","Day 2: Yulong Xueshan","Day 3: Tiger Leaping Gorge"] },
    ],
    zone: [
      { nome: "Guesthouse along the gorge", perChi: "For those doing the trek", testo: "A simple set menu." },
    ],
    sapori: [
      { nome: "Yak butter tea", testo: "The first sip is disconcerting." },
      { nome: "Momo", testo: "Steamed." },
    ],
    attenzioni: [
      "Going up to 4,506 m as soon as you arrive.",
      "Not booking the cable car.",
      "The gorge in bad weather.",
    ],
    esperienzeSlugs: ['impression-lijiang', 'gola-salto-tigre'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'The snowy peaks of Yulong Xueshan, the Jade Dragon Snow Mountain, near Lijiang',
    immagine: '/images/cina/yulong-shangri-la.jpg',
  },
  {
    slug: 'yangshuo',
    paeseSlug: 'cina',
    ordine: 10,
    nome: 'Yangshuo and the Li River',
    tipologia: ['nature', 'cycling', 'viewpoints'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    introduzione:
      "The karst of Guangxi: thousands of limestone towers rising from the rice paddies along the Li River, the landscape reproduced on the 20 yuan note and painted for centuries by Chinese artists. Yangshuo is the town at the foot of the towers, once a village and today the base for everything you do in the area.",
    percheAndarci:
      "It's the Chinese landscape par excellence, the one from the painted scrolls. And it's the only stop in the country where the right way to travel is slow: bicycle among the rice paddies, raft on the river, no museum to tick off.",
    cosaVedere: [
      'The stretch of the Li River between Guilin and Yangshuo, the most photographed in China',
      'Xianggong Hill at dawn, the viewpoint over the river bend',
      'The Longji rice terraces, two and a half hours to the north',
      'The village of Xingping, with the view of the 20 yuan note',
      'The Yulong River, with its stone bridges and rice paddies, much quieter than the Li River',
      'The Impression Liu Sanjie show, on the river, with the karst towers as scenery',
    ],
    cosaFare: [
      'Descent of the Li River by raft or boat (there is a dedicated experience card)',
      'A day by bicycle or electric scooter along the Yulong River among rice paddies and villages',
      'Dawn on Xianggong Hill, the best moment of the day',
      'Rock climbing: Yangshuo is one of the world capitals of limestone climbing',
      'Evening show on the river with the towers lit up',
    ],
    doveDormire:
      "The town of Yangshuo is convenient but noisy, especially around West Street; the guesthouses in the countryside, along the Yulong River or toward Xingping, are the best choice and cost less. Xingping is the alternative for those who want a smaller town and the viewpoint a stone's throw away.",
    doveMangiare:
      "The local dish is beer fish, pan-cooked with beer, peppers and tomato, and it should be eaten along the river. Also worth trying are stuffed river snails and Guilin rice noodles, which here are eaten for breakfast with pickles and peanuts for a couple of euros. West Street is the street of restaurants for foreigners, with tamed prices and cooking: just leave it to eat better and spend half.",
    comeArrivare:
      "High-speed rail to Guilin or directly to Yangshuo station (which however is 30 minutes from the center): from Guangzhou about 2-3 hours, from Shanghai 8-9. Flight to Guilin Liangjiang (KWL), then an hour by bus.",
    comeSpostarsi:
      "Bicycle and electric scooter are the right means and are rented everywhere for a few yuan. For the Li River you use a boat or bamboo raft; for Longji you need a bus or a car.",
    periodoMigliore:
      "April-October, with one clarification: the rice paddies are green in summer and golden in late September-October, flooded and reflective in May-June. Summer brings heat and mugginess, but also the right water flow on the river.",
    costi:
      "Boat cruise Guilin-Yangshuo around 215-450 yuan depending on class; bamboo raft on the short stretch from Xingping 100-150 yuan; Longji terraces about 80 yuan; rental bike a few yuan a day.",
    erroriDaEvitare: [
      'Booking the long cruise from Guilin thinking it is the only option: the most beautiful stretch is the one around Xingping, and it can be done by raft in an hour',
      'Stopping on West Street thinking you have seen Yangshuo: the sense of the place is outside the town, on the country roads',
      'Going in August without factoring in heavy heat and humidity',
      'Taking the river flow for granted: in the dry season some raft stretches are suspended',
    ],
    miaEsperienza:
      "In Yangshuo you finally slow down, and on a trip to China that is worth more than it seems. The long cruise from Guilin, the one everyone books, is beautiful but it's a full boat with a buffet. The stretch that counts is the one around Xingping: it takes an hour on a bamboo raft, two people on board and the towers filing past at water level. The best day, though, is the one without a plan: an electric bike, the road along the Yulong River and five hours stopping wherever you happen to be among rice paddies, buffalo and stone bridges. In the evening West Street is the opposite, with signs, loud music and restaurants with a menu in five languages; the remedy is to sleep in the countryside instead of in town. About dawn at Xianggong let's be clear: alarm before five, steep climb in the dark, and then the mist rising from the river bend. It's the photograph I had in mind when I left.",
    luoghi: [
      {
        nome: "Li River",
        testo: "The stretch between Guilin and Yangshuo; the most beautiful part is around Xingping, by raft.",
        come: "Raft.",
        quando: "Morning.",
        tempo: "1 hour",
        consiglio: "The Xingping stretch.",
      },
      {
        nome: "Yulong River",
        testo: "Rice paddies and stone bridges.",
        come: "Electric bike.",
        quando: "A day.",
        tempo: "5 hours",
        consiglio: "Without a plan.",
      },
      {
        nome: "Xianggong Hill",
        testo: "Sunrise over the bend in the river.",
        come: "Taxi.",
        quando: "Dawn.",
        tempo: "2 hours",
        consiglio: "The best moment.",
      },
      {
        nome: "Longji",
        testo: "Rice terraces, 2.5 hours to the north.",
        come: "Tour.",
        quando: "A day.",
        tempo: "A full day",
        consiglio: "A day trip.",
      },
    ],
    programmi: [
      { titolo: "2 days: Yangshuo", tappe: ["Day 1: Xingping by raft, Yulong by bike","Day 2: sunrise at Xianggong, Longji"] },
    ],
    zone: [
      { nome: "Countryside", perChi: "For those who want silence", testo: "Better than West Street." },
    ],
    sapori: [
      { nome: "Beer fish", testo: "With beer and peppers." },
      { nome: "Guilin noodles", testo: "For breakfast." },
    ],
    attenzioni: [
      "The long cruise from Guilin.",
      "Staying on West Street.",
      "Going in August.",
    ],
    esperienzeSlugs: ['fiume-li-zattera'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'The Li River with bamboo rafts and the karst peaks of Yangshuo County',
    immagine: '/images/cina/yangshuo.jpg',
  },
  {
    slug: 'hong-kong',
    paeseSlug: 'cina',
    ordine: 11,
    nome: 'Hong Kong',
    tipologia: ['city', 'viewpoints', 'food'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "A special administrative region with its own border, currency, lingua franca and legal system: you enter and exit with passport control as in another country. One of the most famous skylines in the world, resting on a mountainous island and a peninsula, with seven and a half million people packed between the sea and the rock.",
    percheAndarci:
      "Hong Kong's vertical density doesn't exist elsewhere, and twenty minutes from the skyscrapers there are mountain trails, beaches and fishing villages. No other city in the world goes so quickly from one extreme to the other.",
    cosaVedere: [
      'Victoria Peak, with the Peak Tram, the funicular that climbs almost vertically',
      'Victoria Harbour from the Tsim Sha Tsui waterfront, with the Symphony of Lights show in the evening',
      'The Star Ferry, the historic ferry that crosses the harbor for a few cents',
      "The Sheung Wan district and, next to it, the outdoor Central-Mid-Levels escalators, the longest in the world",
      'The Big Buddha of Ngong Ping on Lantau Island, with the panoramic cable car',
      'The fishing village of Tai O, with its stilt houses',
      'The Mong Kok markets, among them the bird market, the flower market and the Temple Street night market',
    ],
    cosaFare: [
      'Go up to Victoria Peak on the historic tram and walk down along the trail',
      "Cross the harbor on the Star Ferry at sunset: in the city it's the cheapest thing, and the most beautiful",
      'Dim sum at lunch in a traditional place, with the carts passing between the tables',
      "Dragon's Back, the scenic trail above the south coast, half an hour from the center",
      'A day on Lantau among cable car, Big Buddha and Tai O',
    ],
    doveDormire:
      "Causeway Bay and Wan Chai on the island side, Tsim Sha Tsui on the Kowloon side: the subway connects everything in a few minutes and the harbor view is worth the expense. Hong Kong has the smallest and most expensive rooms of the whole trip: better to know it from the start.",
    doveMangiare:
      "It's one of the culinary capitals of Asia, and you can cross it at three levels. Dim sum at lunch, which here is an institution and not a fad. The cha chaan teng, the local diners of hybrid Anglo-Cantonese cuisine (French toast, milk tea, macaroni in broth), where you spend a few dollars. And starred dining, among the densest in the world. Worth trying at least once is roast goose, Cantonese roast goose: it is among the best things I ate in all of China.",
    comeArrivare:
      "International flight to Hong Kong (HKG), one of the main Asian hubs, with the Airport Express taking you to the center in 24 minutes. From mainland China: high-speed rail to West Kowloon (from Guangzhou less than an hour, from Shanghai about 8), ferry, or bus across the Hong Kong-Zhuhai-Macao Bridge.",
    comeSpostarsi:
      "The MTR is among the best subways in the world, with bilingual signs; the Octopus Card also works for buses, ferries and shops. The island's double-decker tram, the “ding ding”, costs a few cents and is the slowest and most pleasant way to cross the city.",
    periodoMigliore:
      "October-December is the best window, with dry air and clear skies. Summer is hot, very humid and crossed by typhoons between July and September; spring brings the haze that erases the view from the Peak.",
    costi:
      "The most expensive city of the whole trip, especially for lodging. Transport and street food remain cheap: the Star Ferry costs less than half a euro and a meal in a cha chaan teng is under 10.",
    erroriDaEvitare: [
      "Forgetting that Hong Kong is a border of its own: entering from mainland China you officially leave the country, and re-entering means a new entry (visa-free for Italians, but the 30-day count restarts)",
      'Going up to the Peak on a hazy day: up there only the view counts, and without visibility the ticket is wasted',
      "Expecting Chinese Alipay or WeChat Pay to work everywhere: here other apps are used, you pay with Octopus, international cards or cash in Hong Kong dollars",
      'Considering it a city only of skyscrapers and skipping Lantau, the islands and the trails: it is half of its identity',
    ],
    miaEsperienza:
      "Hong Kong throws off anyone arriving after ten days of mainland China, because everything works again as you expect: signs in English, Google opening without a VPN, orderly lines. The skyline is gorgeous and seen a thousand times. What stayed with me is something else: half an hour by subway and bus from the financial center you walk on a ridge with the sea below and not a building in sight. Dragon's Back is an easy walk that nobody puts on the plan and is worth as much as the Peak. On the climb to Victoria Peak it's best to be practical. You go only with a clear sky, and at the end of the afternoon the line for the tram can exceed an hour, while the bus that goes up the same way has no line. The most beautiful thing costs less than half a euro: crossing the harbor on the Star Ferry at blue hour, on the lower deck, with the buildings lighting up on both sides.",
    luoghi: [
      {
        nome: "Victoria Peak",
        testo: "With the Peak Tram.",
        come: "Tram.",
        quando: "A clear sky.",
        tempo: "2 hours",
        url: "https://www.thepeak.com.hk/",
        consiglio: "In haze it is pointless.",
      },
      {
        nome: "Star Ferry",
        testo: "The historic ferry.",
        come: "Pier.",
        quando: "Sunset.",
        tempo: "30 minutes",
        consiglio: "It costs a few cents.",
      },
      {
        nome: "Symphony of Lights",
        testo: "An evening show from the Tsim Sha Tsui waterfront.",
        come: "Metro.",
        quando: "Evening.",
        tempo: "1 hour",
        consiglio: "At 8 p.m.",
      },
      {
        nome: "Dragon's Back",
        testo: "A trail on the south coast.",
        come: "Bus.",
        quando: "Morning.",
        tempo: "3 hours",
        consiglio: "As good as the Peak.",
      },
      {
        nome: "Sheung Wan and the escalators",
        testo: "A neighbourhood with the outdoor escalators.",
        come: "On foot.",
        quando: "Daytime.",
        tempo: "2 hours",
        consiglio: "The old centre.",
      },
      {
        nome: "Dim sum",
        testo: "Lunch with trolleys.",
        come: "Traditional restaurant.",
        quando: "Lunch.",
        tempo: "1 hour",
        consiglio: "An institution.",
      },
    ],
    programmi: [
      { titolo: "2 days: Hong Kong", tappe: ["Day 1: Star Ferry, Tsim Sha Tsui, Symphony of Lights","Day 2: Peak, Sheung Wan, Dragon's Back"] },
    ],
    zone: [
      { nome: "Tsim Sha Tsui", perChi: "For those who want a view", testo: "Expensive." },
      { nome: "Sheung Wan", perChi: "For those who want local life", testo: "Central." },
    ],
    sapori: [
      { nome: "Dim sum", testo: "Trolleys." },
      { nome: "Cha chaan teng", testo: "An Anglo-Cantonese diner." },
    ],
    attenzioni: [
      "Forgetting about the border.",
      "Going up the Peak in haze.",
      "Expecting low prices.",
    ],
    esperienzeSlugs: ['star-ferry-victoria-peak'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'The skyline of Hong Kong Island at sunset seen from Victoria Harbour',
    immagine: '/images/cina/hong-kong.jpg',
  },
  {
    slug: 'macao',
    paeseSlug: 'cina',
    ordine: 12,
    nome: 'Macau',
    tipologia: ['city', 'culture', 'food'],
    giorniConsigliati: '1-2 days, often as a day trip from Hong Kong',
    visitataPersonalmente: true,
    introduzione:
      "Four and a half centuries of Portugal squeezed into thirty square kilometers at the mouth of the Pearl River: baroque churches, squares with wavy Portuguese calçada, Macanese cuisine, and two hundred meters away the most profitable casinos in the world, which gross more than Las Vegas.",
    percheAndarci:
      "The historic center is a UNESCO site and resembles nothing else in Asia. And the contrast between the colonial alleys and the Cotai casino strip is one of the most absurd things of the trip.",
    cosaVedere: [
      "The Ruins of St. Paul's, the facade of the Jesuit church left standing alone after the fire of 1835",
      'Largo do Senado, with the wavy Portuguese paving and pastel facades',
      'The Fortaleza do Monte and the Macau Museum',
      'The Taipa Village district, with the pastel house-museums along Rua do Cunha',
      "The A-Ma temple, the city's oldest, from which the name Macau derives",
      'The Cotai strip, with casinos that reproduce Venice, Paris and London at full scale',
    ],
    cosaFare: [
      'Walk the UNESCO historic center, which is done entirely on foot in half a day',
      "Eat Macanese, the world's oldest fusion cuisine",
      'An evening on the Cotai strip, even just to see the scale of the thing',
      'Bungee jumping from the Macau Tower, 233 meters: the highest tower jump in the world',
    ],
    doveDormire:
      "Most visitors arrive for the day from Hong Kong, and it's a sensible choice. Those who stay find the casino hotels on the Cotai at prices often lower than they seem, because the revenue is elsewhere, and simpler places on the historic peninsula.",
    doveMangiare:
      "Macanese cuisine is the culinary reason to come here: it is the fusion of Portuguese, Cantonese and the colonial routes of Africa and India, and exists only here. Worth trying are galinha à africana, minchi (minced meat with potatoes and egg), bacalhau in its local versions and pastéis de nata, which reached Macau from Portugal and spread from here across Asia. Rua do Cunha in Taipa is the right street for tasting while walking.",
    comeArrivare:
      "Fast ferry from Hong Kong (about an hour from the Sheung Wan or Kowloon terminals) or bus across the Hong Kong-Zhuhai-Macao Bridge, the longest sea bridge in the world, about 40 minutes. From mainland China you enter by land at the Gongbei border crossing, in Zhuhai. Macau also has its own international airport.",
    comeSpostarsi:
      "On foot in the historic center. The casinos' free shuttle buses connect ferries, airport and Cotai, and are the means everyone uses, even those who don't gamble. Taxis available but with long lines on weekends.",
    periodoMigliore: 'October-December, like Hong Kong. Summer is humid and hit by typhoons.',
    costi:
      "Admissions almost all free or symbolic in the historic center; the real cost is the transport from Hong Kong (ferry around 160-200 Hong Kong dollars each way). You pay in patacas, but Hong Kong dollars are accepted everywhere at par.",
    erroriDaEvitare: [
      'Going only for the casinos and skipping the historic center, which is the part that counts',
      'Forgetting it is a border: you exit Hong Kong or mainland China and re-enter, with new passport control in both directions',
      'Planning it on a weekend, when the buses from mainland China arrive and lines at the crossings become very long',
      'Taking for granted that it is worth an overnight stay: for many it is the perfect day trip from Hong Kong',
    ],
    miaEsperienza:
      "Macau works for one reason only: the leap. In the morning you pass through a historic center that could be a Portuguese town in the Alentejo, with the wavy paving, the yellow churches and the bakeries with pastéis just out of the oven. In the afternoon a free bus drops you in twenty minutes in front of a full-scale replica of the Grand Canal, with gondoliers singing under a painted sky. They are two different places four kilometers apart, and the point of the day is seeing them on the same day. The historic center is exhausted in half a day: whoever expects a city to explore will be surprised by the size. More than the Ruins of St. Paul's, always full of people, Taipa Village is worth it, with its street of pastel houses and food stalls. And Macanese cuisine is worth it, which you can't find anywhere else in the world.",
    luoghi: [
      {
        nome: "Ruins of St. Paul's",
        testo: "A Jesuit facade.",
        come: "On foot.",
        quando: "Morning.",
        tempo: "45 minutes",
        consiglio: "Always packed.",
      },
      {
        nome: "Senado Square",
        testo: "Wave-patterned paving.",
        come: "On foot.",
        quando: "Daytime.",
        tempo: "30 minutes",
        consiglio: "The centre.",
      },
      {
        nome: "Fortaleza do Monte",
        testo: "The Macao Museum.",
        come: "On foot.",
        quando: "Daytime.",
        tempo: "1.5 hours",
        consiglio: "All on foot.",
      },
      {
        nome: "Taipa Village",
        testo: "Pastel-coloured houses.",
        come: "Bus.",
        quando: "Daytime.",
        tempo: "2 hours",
        consiglio: "Pastéis.",
      },
      {
        nome: "Cotai",
        testo: "The casino strip.",
        come: "Free buses.",
        quando: "Evening.",
        tempo: "2 hours",
        consiglio: "For the scale of it.",
      },
    ],
    programmi: [
      { titolo: "1 day: Macao", tappe: ["Historic centre","Macanese lunch","Taipa","Cotai"] },
    ],
    zone: [
      { nome: "No need to sleep there", perChi: "A day trip from Hong Kong", testo: "Half a day." },
    ],
    sapori: [
      { nome: "Galinha à africana", testo: "Chicken." },
      { nome: "Minchi", testo: "Meat with potatoes and egg." },
      { nome: "Pastéis de nata", testo: "Pastries." },
    ],
    attenzioni: [
      "Casinos only.",
      "Forgetting about the border.",
      "Crowded weekends.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['cina-classica'],
    imageAlt: "The facade of the Ruins of St. Paul's in the historic center of Macau",
    immagine: '/images/cina/macao.jpg',
  },
]
