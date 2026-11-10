import type { Destinazione } from '@/lib/types'

export const destinazioniSpagna: Destinazione[] = [
  // --- ANDALUSIA (Sud) ---
  {
    slug: 'siviglia',
    paeseSlug: 'spagna',
    ordine: 1,
    nome: 'Seville',
    tipologia: ['città', 'cultura moresca', 'flamenco'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The capital of Andalusia, on the Guadalquivir. Here eight centuries of Moorish rule coexist with Baroque Seville and, on the other bank, with the Gypsy quarter of Triana, where flamenco was born in the street before becoming a show.",
    percheAndarci:
      "In a center you can walk around, there's the largest Gothic cathedral in the world, the most beautiful Moorish-Christian palace in Spain after the Alhambra and the neighborhood where flamenco is still a family tradition, as well as tablaos for tourists.",
    cosaVedere: [
      "The Cathedral of Seville, the largest Gothic church in the world, built over the old Almohad mosque: inside, the tomb of Christopher Columbus",
      "The Giralda, the mosque's former minaret turned bell tower, with the ramp (not stairs) that climbs to the top",
      "The Real Alcázar, a royal palace still in use, a masterpiece of Mudéjar style with its patios, gardens and the Hall of Ambassadors",
      "The Barrio de Santa Cruz, the former Jewish quarter, a maze of narrow alleys and flowering patios",
      "Triana, the neighborhood across the river, cradle of flamenco and of Sevillian ceramics",
      "The Plaza de España, built for the 1929 Ibero-American Exposition, with its navigable canal and tiles representing every Spanish province",
    ],
    cosaFare: [
      "Climb the Giralda early in the morning, before the heat and the crowds",
      "A stroll through the patios of Triana and the Mercado de Triana, the covered market on the riverfront",
      "See a flamenco show in an acoustic tablao, without amplification, instead of one of the big venues for tourist groups",
      "An evening walk along the Guadalquivir, when the summer heat eases",
    ],
    doveDormire: "The Barrio de Santa Cruz is the most central and touristy neighborhood; Triana is more of a local neighborhood and costs a bit less, a few minutes' walk from the center across the Puente de Triana.",
    doveMangiare:
      "The tapeo (a round of tapas across several bars) is the local institution: salmorejo (cold tomato cream, thicker than gazpacho), espinacas con garbanzos, pescaíto frito (mixed fried fish) and jamón ibérico. In Triana the bars of the covered market are the cheapest way to start the evening.",
    comeArrivare:
      'San Pablo Airport, about 10 km from the center (EA bus or taxi). AVE high-speed train from Madrid in about 2h30. Tussam\'s EA bus runs to Santa Justa, Prado de San Sebastián and Plaza de Armas in about 35 minutes, every 20-30 minutes, for about €4 payable on board by contactless card; taxis have a fixed fare to the centre of about €25 by day and €28 at night and on holidays.',
    comeSpostarsi: "The historic center can be covered almost entirely on foot; for longer distances, city buses and the tram (line T1) along the central axis.",
    periodoMigliore:
      "March-May and October-early November, with pleasant temperatures. Avoid July-August: Seville is among the hottest cities in Spain, with averages often above 36°C (97°F) and peaks well beyond. Holy Week and the Feria de Abril (two weeks after Easter) bring crowds and high prices, but they're also the days when the city lives its most deeply felt traditions.",
    costi:
      'Cathedral and Giralda about €15; Real Alcázar about €15.50 (Royal Apartments +€5.50, free in the evening with a reservation in a dedicated time slot); an average flamenco tablao €35-45 per person. Rough daily budget per person, sharing a double: low €60-80, mid €110-150, high over €220.',
    erroriDaEvitare: [
      "Underestimating the summer heat: from June to September the middle hours of the day should be avoided for any outdoor activity",
      "Choosing the first tablao advertised in the center without checking its reputation: the most touristy venues put on standard, amplified shows, far from the flamenco of the neighborhoods",
      "Climbing the Giralda in the middle of the day in high season: the lines under the sun can be long",
    ],
    luoghi: [
      {
        "nome": "Seville Cathedral and Giralda",
        "testo": "One of the largest Gothic cathedrals in the world, built after the Reconquista on the site of the great Almohad mosque. Inside is the funerary monument to Christopher Columbus. The bell tower, the Giralda, is the former minaret: you climb it by a ramp, not stairs, and from the top you see the rooftops and the Alcázar.",
        "come": "It stands in the middle of the old town, a short walk from Santa Cruz or Plaza Nueva. A single ticket covers the cathedral and the Giralda: the visit starts at the tower, which has its own access control.",
        "quando": "Monday-Saturday 10:45-18:00 (ticket office until 17:00), Sunday 14:30-19:00 (ticket office until 18:00); 2026 hours, which change for services and events: check the calendar on the website. Best at opening.",
        "tempo": "1-2 hours",
        "costo": "€13 online, €14 at the ticket office (from 1 January 2026); the ticket also covers the church of El Salvador",
        "orari": "Monday to Saturday from late morning to late afternoon; Sundays afternoon only.",
        "lat": 37.3858,
        "lng": -5.9931,
        "url": "https://www.catedraldesevilla.es/",
        "consiglio": "Buy the ticket online the night before: in spring the ticket office queue is long. The visit starts with the Giralda, so climb it straight away while your legs are fresh."
      },
      {
        "nome": "Real Alcázar",
        "testo": "A royal palace still in use, born as a Moorish fortress and rebuilt in the 14th century by King Peter I in Mudéjar style with craftsmen from Granada. The Palacio de Pedro I, the Salón de Embajadores and the stucco-decorated patios are the heart of the visit. Behind lie large gardens with fountains and hedge mazes.",
        "come": "Enter through the Puerta del León, on Plaza del Triunfo, opposite the cathedral. There is a single route; audio guides are rented at the entrance.",
        "quando": "Open 9:30am-7pm from April to September and 9:30am-5pm from October to March. Closed on 1 and 6 January, Good Friday and 25 December. Early morning or the last slot of the afternoon to avoid the groups.",
        "tempo": "2-3 hours",
        "costo": "15.50 euros full price (rate on the official website, 2026); the Royal Apartments cost extra",
        "orari": "Daily from 9:30; closes at 19 April-September and 17 in winter.",
        "lat": 37.3831,
        "lng": -5.9902,
        "url": "https://www.alcazarsevilla.org/",
        "consiglio": "Book online and choose the first slot: the patios are small and only enjoyable without crowds. The Royal Apartments are visited with a separate booking."
      },
      {
        "nome": "Barrio de Santa Cruz",
        "testo": "The former Jewish quarter, between the cathedral and the Murillo gardens. Narrow lanes, wrought-iron balconies, small squares with orange trees and patios glimpsed through gates.",
        "come": "On foot, right behind the Alcázar. There is no set route: enter from Calle Judería and leave from the other side.",
        "quando": "Early in the morning it is empty and cool; by late morning it fills with groups.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 37.3851,
        "lng": -5.9887,
        "consiglio": "Come back in the evening, after dinner: the lanes empty out and the squares are lit."
      },
      {
        "nome": "Plaza de España and Parque de María Luisa",
        "testo": "A monumental semicircle built for the 1929 Ibero-American Exposition, with a canal, bridges and a series of ceramic alcoves, one for each Spanish province. The park beside it is the city's big green lung.",
        "come": "On foot from the cathedral, or by bike along the park. Free entry.",
        "quando": "Early morning or at sunset. In the central hours of summer there is no shade.",
        "tempo": "1 hour, plus the park",
        "costo": "free; rowing boats on the canal charged",
        "lat": 37.3772,
        "lng": -5.9869,
        "consiglio": "If you want photos without people, come early in the morning. The ceramic benches are arranged by province in alphabetical order: finding your favourite one is a small game."
      },
      {
        "nome": "Triana",
        "testo": "The district across the Guadalquivir, historically of potters, sailors and Roma families. It is one of the cradles of flamenco. Today it has a covered market, azulejo workshops and bars on Calle Betis, facing the river.",
        "come": "Walk across the Puente de Isabel II (Triana Bridge) from the centre.",
        "quando": "The market works mostly in the morning. In the evening Calle Betis is full of people and the river gives a view of the Torre del Oro.",
        "tempo": "2-3 hours",
        "costo": "free; Castillo de San Jorge free entry",
        "lat": 37.3851,
        "lng": -6.0033,
        "consiglio": "Eat here rather than in the center: the bars cost less and the customers are mostly locals."
      },
      {
        "nome": "Flamenco in a tablao",
        "testo": "Flamenco is best seen in small venues, where the musicians play a few meters from the audience without amplification. Singer, guitarist and dancer answer each other: it is a show you can follow without understanding the words.",
        "come": "Book a seat on the venue's website or by phone a few days ahead. The Museo del Baile Flamenco, in Santa Cruz, also runs evening shows.",
        "quando": "Shows almost every day, with times that vary by venue: check the weekly programme.",
        "tempo": "1-1.5 hours",
        "costo": "about €35-45 per person in an average tablao",
        "consiglio": "Sit in the front rows and ask the venue whether the program is acoustic: it avoids the big shows for tour groups."
      },
      {
        "nome": "Metropol Parasol (Las Setas) and Casa de Pilatos",
        "testo": "Las Setas is a large wooden structure above Plaza de la Encarnación, completed in 2011, with panoramic terraces on top and, below, a museum of Roman and Moorish remains found during the dig. The Casa de Pilatos is a noble palace in Mudéjar and Renaissance style, less visited than the Alcázar but with similar patios.",
        "come": "On foot from the centre: Las Setas north of Calle Sierpes, the Casa de Pilatos to the east.",
        "quando": "Las Setas at sunset, the Casa de Pilatos in the morning. Check hours on the operators' websites.",
        "tempo": "1 hour each",
        "lat": 37.3933,
        "lng": -5.9918,
        "consiglio": "If the Alcázar is sold out for your date, the Casa de Pilatos is the closest alternative for seeing a Mudéjar palace."
      },
      {
        "nome": "Archivo General de Indias",
        "testo": "The former merchants' exchange, between the cathedral and the Alcázar, holds the records of Spain's American empire, from Columbus's letters to maps. The first-floor rooms, with mahogany shelving, are free to visit.",
        "come": "On Avenida de la Constitución, next to the cathedral.",
        "quando": "In the hot hours, between other visits.",
        "tempo": "30-45 minutes",
        "costo": "free",
        "orari": "Tuesday to Sunday; closed Mondays.",
        "lat": 37.3846,
        "lng": -5.9926
      },
      {
        "nome": "Torre del Oro and the riverside",
        "testo": "The 13th-century Almohad watchtower on the Guadalquivir that guarded the galleon port. Inside is a small naval museum; the Paseo de Cristóbal Colón leads on to the Maestranza and the Triana bridge.",
        "come": "Ten minutes' walk from the cathedral.",
        "quando": "At sunset, walking along the river towards Triana.",
        "tempo": "30 minutes",
        "costo": "naval museum for a token fee",
        "lat": 37.3824,
        "lng": -5.9964
      },
      {
        "nome": "Maestranza Bullring",
        "testo": "One of Spain's oldest and most important bullrings, from the 18th century, with a white-and-ochre façade on the river. The guided tour covers the stands, the chapel and the bullfighting museum.",
        "come": "On Paseo de Cristóbal Colón; frequent timed guided tours.",
        "quando": "Morning; tours stop on bullfight days.",
        "tempo": "45 minutes",
        "costo": "about €12, guided (2026)",
        "lat": 37.3858,
        "lng": -5.9988,
        "url": "https://www.realmaestranza.com/"
      },
      {
        "nome": "Museum of Fine Arts",
        "testo": "In a convent with tiled cloisters, Spain's second gallery for Golden Age painting: Murillo, Zurbarán, Valdés Leal. The convent church is frescoed from top to bottom.",
        "come": "Plaza del Museo, ten minutes north-west of the cathedral.",
        "quando": "Sunday morning, with the art market in the square.",
        "tempo": "1.5 hours",
        "costo": "free for EU citizens",
        "orari": "Closed Mondays.",
        "lat": 37.3929,
        "lng": -6.0001
      },
      {
        "nome": "Palacio de las Dueñas",
        "testo": "The Dukes of Alba's palace, Gothic-Mudéjar and Renaissance, with flowering patios, the lemon grove and rooms full of family paintings and mementoes. The poet Antonio Machado was born here.",
        "come": "Five minutes from Las Setas, on Calle Dueñas; audio guide included.",
        "quando": "In spring, with bougainvillea and orange blossom.",
        "tempo": "1 hour",
        "costo": "about €15, with audio guide (2026)",
        "lat": 37.3966,
        "lng": -5.9898,
        "url": "https://www.lasduenas.es/"
      },
      {
        "nome": "Hospital de los Venerables",
        "testo": "A Baroque home for elderly priests in the heart of Santa Cruz, with a sunken patio and a church frescoed by Valdés Leal. It houses the Velázquez Centre, with works by the Seville-born painter.",
        "come": "On Plaza de los Venerables, in the lanes of Santa Cruz; audio guide included.",
        "quando": "Midday, when the barrio is full of groups.",
        "tempo": "1 hour",
        "costo": "ticketed, with audio guide",
        "lat": 37.3852,
        "lng": -5.9907,
        "url": "https://www.fundacionfocus.com/"
      },
      {
        "nome": "Basílica de la Macarena",
        "testo": "The church of the Esperanza Macarena, Seville's most revered Virgin, who goes out in procession on the night of Good Friday. The museum next door keeps the brotherhood's floats and embroidered mantles.",
        "come": "In the north of the old town, by the Arch and the Almohad walls; bus or a 20-minute walk from Las Setas.",
        "quando": "Morning, combined with the Feria market and the Alameda.",
        "tempo": "45 minutes",
        "costo": "basilica free; museum ticketed",
        "lat": 37.403,
        "lng": -5.9895,
        "url": "https://www.hermandaddelamacarena.es/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Real Alcázar at opening, with a timed ticket",
          "Cathedral and Giralda, then the Archivo de Indias",
          "Lunch and siesta; afternoon in the Barrio de Santa Cruz",
          "Plaza de España at sunset",
          "Evening: tapas in Triana and flamenco"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Alcázar, Cathedral and Giralda, Santa Cruz, tablao in the evening",
          "Day 2: Plaza de España and María Luisa Park in the morning, Torre del Oro and the Maestranza, Triana in the afternoon, Las Setas at sunset"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Alcázar, Cathedral, Archivo de Indias, Santa Cruz",
          "Day 2: Plaza de España, Torre del Oro, Maestranza, Triana and flamenco",
          "Day 3: Casa de Pilatos, Palacio de las Dueñas, Museum of Fine Arts and Las Setas; or a trip to Córdoba"
        ]
      }
    ],
    zone: [
      {
        "nome": "Santa Cruz",
        "perChi": "Those who want to be a step from the monuments",
        "testo": "You step out of the hotel and you are already under the cathedral. By day it is crowded, and in the evening the lanes echo with tables from tourist restaurants. Prices are the highest. You get around on foot only, and taxis do not enter the lanes.",
        "fascia": "110-220 €"
      },
      {
        "nome": "Triana",
        "perChi": "Those who prefer a lively, less touristy district",
        "testo": "It costs a little less and has more bars used by locals. The centre is a walk across the bridge. Noise from the riverside bars in the evening can reach the nearest rooms.",
        "fascia": "90-170 €"
      },
      {
        "nome": "Alameda de Hércules and La Macarena",
        "perChi": "Budget travelers or those who like nightlife",
        "testo": "A younger district, with bars, alternative venues and modest prices, north of the centre and walkable from the cathedral. At weekends the square is noisy until late.",
        "fascia": "80-150 €"
      }
    ],
    gite: [
      {
        "nome": "Córdoba",
        "distanza": "45 minutes by high-speed train",
        "come": "AVE or private high-speed trains from Santa Justa; 20 minutes' walk from the station to the Mezquita.",
        "testo": "The Mosque-Cathedral, with its forest of red-and-white arches, the Jewish quarter and the Roman bridge. The Mezquita costs about €13 and is free early in the morning Monday to Saturday."
      },
      {
        "nome": "Cádiz",
        "distanza": "1h45 by train",
        "come": "Regional trains from Santa Justa to Cádiz, arriving in the centre.",
        "testo": "One of Europe's oldest cities on a peninsula, with a seafront cathedral, a fish market and La Caleta beach."
      },
      {
        "nome": "Carmona",
        "distanza": "35 km, 40 minutes by bus",
        "come": "Bus from the Prado de San Sebastián station.",
        "testo": "A white hill town with Roman gates, King Pedro's Alcázar and a Roman necropolis. An easy half-day."
      },
      {
        "nome": "Jerez de la Frontera",
        "distanza": "1 hour by train",
        "come": "Regional trains from Santa Justa; the bodegas are walkable from the centre.",
        "testo": "The sherry bodegas, with tours and tastings, and the Royal Andalusian School of Equestrian Art with its horse show."
      }
    ],
    sapori: [
      {
        "nome": "Salmorejo",
        "testo": "A cold cream of tomato, bread, oil and garlic, thicker than gazpacho, topped with boiled egg and ham. You find it in almost every bar as a starter or a tapa."
      },
      {
        "nome": "Espinacas con garbanzos",
        "testo": "Spinach and chickpeas with cumin and garlic, a dish of Moorish origin served in small portions in tapas bars."
      },
      {
        "nome": "Pescaíto frito",
        "testo": "Mixed fried fish (anchovies, squid, hake) dusted in fine flour and fried in olive oil. A Friday tradition, eaten in fry shops and bars in Triana."
      },
      {
        "nome": "Jamón ibérico and carrillada",
        "testo": "Cured ham is served in thin slices at the bar. Carrillada is pork cheek braised in wine, tender, among the most requested dishes in neighborhood bars."
      },
      {
        "nome": "Torrijas and pestiños",
        "testo": "Sweets typical of Holy Week: torrijas are slices of bread soaked in milk and fried, pestiños are honey fritters. You find them in pastry shops at that time."
      }
    ],
    attenzioni: [
      "Women offering sprigs of rosemary in front of the cathedral: they read your palm or bless you and then ask for money. Just say no and do not take the sprig.",
      "Pickpockets in crowded areas: cathedral, Santa Cruz, Plaza de España and the trams. Keep your bag in front and your phone in an inner pocket.",
      "Tickets for the Real Alcázar, cathedral and Giralda: buy them only on the official sites. Resellers add surcharges, and at Easter and during the Feria de Abril dates sell out early.",
      "Heat from June to September: spend the middle of the afternoon indoors. Carry water and a hat.",
      "Tablaos: be wary of people stopping you in the street with discounted flyers. Book directly with the venue."
    ],
    faq: [
      {
        "domanda": "How many days do you need in Seville?",
        "risposta": "Two days for the Alcázar, Cathedral, Santa Cruz, Plaza de España and Triana; three for the palaces and museums at leisure or a trip to Córdoba."
      },
      {
        "domanda": "Do you need to book the Real Alcázar?",
        "risposta": "Yes, buy the timed ticket online, about €15.50: in spring the best slots go days ahead. The Royal Apartments carry a supplement and limited places."
      },
      {
        "domanda": "Can you visit Seville in summer?",
        "risposta": "Yes, but in July and August it often tops 40°C: sightsee early and after 19:00, siesta at midday. March-May and October-November are the best months."
      },
      {
        "domanda": "When are Holy Week and the April Fair?",
        "risposta": "Holy Week is the week before Easter, the Feria two weeks after. On those days the city is full and rooms can cost three times as much."
      },
      {
        "domanda": "Where to stay in Seville?",
        "risposta": "Santa Cruz to be next to the monuments, Triana for a lived-in neighbourhood, the Alameda for bars and lower prices. Outside festivals a double costs about €80-220."
      },
      {
        "domanda": "How do you get from the airport to central Seville?",
        "risposta": "The EA bus reaches Santa Justa and Prado de San Sebastián in about 35 minutes for about €4, payable on board by card. Taxis have a fixed fare of about €25 by day."
      }
    ],
    esperienzeSlugs: ['flamenco-triana', 'tapeo-siviglia'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: "The Giralda and the spires of the Cathedral of Seville next to a tower of the Real Alcázar walls",
    immagine: '/images/spagna/siviglia.jpg',
  },
  {
    slug: 'granada',
    paeseSlug: 'spagna',
    ordine: 2,
    nome: 'Granada',
    tipologia: ['città', 'cultura moresca', 'montagna'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The last capital of the Moorish kingdom of al-Andalus, which fell in 1492. The Alhambra dominates it from the hill and around it are the snow-capped peaks of the Sierra Nevada: at certain times of year it's the only place in Europe where you can ski in the morning and be at the beach in the afternoon.",
    percheAndarci:
      "For the Alhambra, one of the most visited monuments in the world and for many the main reason for a trip to Andalusia. Then there's the Albaicín, the Moorish quarter facing it, and a student life that makes Granada cheaper and younger than the other Andalusian cities.",
    cosaVedere: [
      "The Alhambra: the Nasrid Palaces (Palacio de Comares and Palacio de los Leones, with the famous Patio de los Leones), the Alcazaba, the oldest fortress, and the Generalife, the sultans' summer gardens",
      "The Albaicín, the UNESCO World Heritage Moorish quarter with its old Arab layout of alleys and carmens (houses with an enclosed garden)",
      "The Mirador de San Nicolás, the viewpoint over the Alhambra with the snow-capped Sierra Nevada in the background, especially at sunset",
      "The Renaissance Cathedral and the Capilla Real, where the Catholic Monarchs Ferdinand and Isabella are buried",
      "The Sacromonte, the district of cave houses historically inhabited by the Gypsy community, heart of a flamenco tradition of its own (the zambra)",
    ],
    cosaFare: [
      "Book the Alhambra tickets well in advance (see the dedicated experience page): forgetting to do so is the most common mistake of those visiting Granada",
      "Stroll through the Albaicín with no fixed destination, among the carmens and small mosques",
      "Climb to the Mirador de San Nicolás at sunset for the classic view of the Alhambra",
      "A flamenco zambra in one of the cave houses of the Sacromonte",
      "The Granada tapeo: here, unlike almost everywhere else in Spain, the tapa comes free with every drink",
    ],
    doveDormire: "The Albaicín for the atmosphere and the view, with steep climbs to factor in; the center around the Cathedral for convenience and nightlife.",
    doveMangiare:
      "Granada is among the few Spanish cities where the tapa is still free with every drink ordered: a round of beers in the bars of the center or Calle Navas equals a light dinner. Try the remojón granadino (orange, salt cod and olive salad) and the dishes of Morisco tradition with spices like cumin and cinnamon.",
    comeArrivare:
      'Federico García Lorca Airport, about 15 km from the center. AVE train from Madrid in about 3h10-3h30; direct bus from Seville (about 3h) or from Córdoba (about 2h). From the airport a bus reaches the centre in about 40 minutes. In town, minibus C30 (to the Alhambra) and C31 and C32 (to the Albaicín and Sacromonte) leave from Plaza Isabel la Católica and Plaza Nueva.',
    comeSpostarsi: "Historic center and Albaicín on foot only (steep climbs); local minibuses for the higher areas of the Sacromonte and the Albaicín; the Alhambra can be reached on foot uphill from the center or with a dedicated shuttle bus.",
    periodoMigliore: "April-June and September-October. Summer is hot but less extreme than in Seville thanks to the altitude (about 700 meters) and the proximity of the Sierra Nevada; winter is cold, with snow visible on the peaks a few km from the city.",
    costi:
      'Alhambra general admission €22.27 plus the online fee (2026) (tickets sell out weeks ahead, in high season even months); Cathedral and Capilla Real about €7 each. Rough daily budget per person, sharing a double: low €50-70, mid €90-130, high over €200.',
    erroriDaEvitare: [
      "Arriving in Granada without having already booked the Alhambra: tickets are sold on the official website (also by phone or at the ticket machines) and in high season (June-September and holidays) they sell out weeks in advance",
      "Underestimating the climbs of the Albaicín and the Sacromonte: they're steep and cobbled, not very comfortable with luggage or unsuitable shoes",
      "Booking a flamenco show without doing research: in the Sacromonte authentic zambras and very touristy formats coexist at the same price",
    ],
    luoghi: [
      {
        "nome": "Alhambra and Generalife",
        "testo": "The citadel of the Nasrid sultans on the Sabika hill: the Nasrid Palaces with stuccoes and stalactite ceilings, the military Alcazaba, the Renaissance palace of Charles V and the Generalife gardens. The Court of the Lions and the Hall of the Two Sisters are the best-known spots.",
        "come": "On foot uphill from the centre or by city minibus 30 or 32 from Plaza Isabel la Católica. Entry is by named ticket and for the Nasrid Palaces the time slot printed on it applies: arrive early, not late. Bring ID and confirmation.",
        "quando": "Open every day: 8:30am-8pm from 1 April to 14 October, 8:30am-6pm from 15 October to 31 March. Closed on 25 December and 1 January. Tickets are sold through the official channel (online, by phone or at the ticket machines) and in high season they sell out weeks ahead.",
        "tempo": "3-4 hours, half a day to see everything",
        "costo": "€22.08 for the daytime Alhambra General ticket on the official channel (2026)",
        "orari": "Daily from 8:30; closes at 20 from April to mid-October and 18 in winter, with night visits on some evenings.",
        "lat": 37.1761,
        "lng": -3.5881,
        "url": "https://www.alhambra-patronato.es/",
        "consiglio": "Choose the morning slot for the Nasrid Palaces, when light comes in through the patios. Keep in mind that the route is entirely outdoors."
      },
      {
        "nome": "Albaicín",
        "testo": "The Moorish hillside district, a UNESCO site, with narrow uphill lanes, carmenes (houses with an enclosed garden) and small squares. From several points you see the Alhambra opposite.",
        "come": "On foot from Plaza Nueva, climbing by the Cuesta del Chapiz or Calle Calderería Nueva. There are also minibuses that loop around the district.",
        "quando": "Early morning or late afternoon. In the central hours of summer the climbs are heavy.",
        "tempo": "2-3 hours",
        "costo": "free",
        "lat": 37.181,
        "lng": -3.592,
        "consiglio": "Walk down and go up by minibus: the slopes are felt mostly uphill."
      },
      {
        "nome": "Mirador de San Nicolás",
        "testo": "Granada's best-known viewpoint: the Alhambra opens in front and the peaks of the Sierra Nevada rise behind. At sunset it fills with people, musicians and vendors.",
        "come": "A walk uphill from Plaza Nueva, or the city minibus C31 or C32 that climbs to the Albaicín. Free entry.",
        "quando": "At sunset. Alternatively at dawn, almost with no one.",
        "tempo": "30-60 minutes",
        "costo": "free",
        "lat": 37.1811,
        "lng": -3.5926,
        "consiglio": "For the same view with fewer crowds, climb to the nearby Mirador de San Cristóbal or the Carmen de los Mártires."
      },
      {
        "nome": "Cathedral and Capilla Real",
        "testo": "The Renaissance cathedral has a tall, bright nave, unlike the Gothic ones. The Royal Chapel next door holds the tombs of the Catholic Monarchs, Ferdinand and Isabella, in carved marble.",
        "come": "On foot from the center, in the cathedral district. There are two separate entrances.",
        "quando": "Open every day, usually with a break in the central hours, and reduced hours on Sunday. Check the official hours.",
        "tempo": "1 hour for the cathedral, 30-45 minutes for the Royal Chapel",
        "costo": "about €7 for the Cathedral and about €7 for the Capilla Real (2026)",
        "lat": 37.1764,
        "lng": -3.5994,
        "url": "https://catedraldegranada.com/",
        "consiglio": "Best visited after the Alhambra, to understand what came after the fall of the Nasrid kingdom."
      },
      {
        "nome": "Sacromonte and the Cave Museum",
        "testo": "The district of cave houses on the hill facing the Alhambra, historically inhabited by the Roma community. The zambra was born here, a more ritual, group-based flamenco, seen in some cuevas.",
        "come": "On foot along the Camino del Sacromonte from the Albaicín, or by city minibus C34 from the centre. The road is long and uphill.",
        "quando": "Shows in the evening. By day you visit the museum and stroll through the landscape of caves.",
        "tempo": "2-3 hours, plus an evening for a show",
        "lat": 37.183,
        "lng": -3.58,
        "consiglio": "Before booking a zambra, read recent reviews: very touristy shows cost the same as the serious ones."
      },
      {
        "nome": "Alcaicería and Corral del Carbón",
        "testo": "The Alcaicería was the old Nasrid silk market: today it is a maze of tourist shops. The Corral del Carbón, next to it, is a rare Nasrid-era funduq from the 14th century, once a warehouse and inn for merchants.",
        "come": "On foot, a few steps from the cathedral. Entry to the Corral is free during opening hours.",
        "quando": "In the morning, when shops open and the streets are clearer.",
        "tempo": "30-45 minutes",
        "costo": "free",
        "lat": 37.1755,
        "lng": -3.5985,
        "consiglio": "The Corral is worth seeing even just to step into the courtyard with its wooden galleries."
      },
      {
        "nome": "Carrera del Darro and Paseo de los Tristes",
        "testo": "The cobbled street along the Darro river, with little stone bridges, convents and mansions beneath the Alhambra walls. It ends at the Paseo de los Tristes, where you look up at the fortress.",
        "come": "On foot from Plaza Nueva; minibuses C31 and C32 run this way.",
        "quando": "In the evening, with the Alhambra lit up.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 37.1781,
        "lng": -3.5905
      },
      {
        "nome": "El Bañuelo",
        "testo": "The 11th-century Arab baths on the Carrera del Darro, among the best preserved in Spain, with star-pierced vaulted ceilings. It is part of the Dobla de Oro ticket with other Andalusi monuments.",
        "come": "On the Carrera del Darro, five minutes from Plaza Nueva.",
        "quando": "On sunny hours, when light pours through the skylights.",
        "tempo": "20-30 minutes",
        "costo": "cheap ticket, included in the Dobla de Oro",
        "lat": 37.1779,
        "lng": -3.5911
      },
      {
        "nome": "San Miguel Alto viewpoint",
        "testo": "The highest viewpoint over the Albaicín, by the hermitage on the Nasrid walls, with the Alhambra, the city and the Sierra Nevada all in view. Far less crowded than San Nicolás.",
        "come": "On foot from Sacromonte or Puerta de Fajalauza, a steep climb; by taxi almost to the top.",
        "quando": "At sunset, with a jacket in winter.",
        "tempo": "1 hour with the climb",
        "costo": "free",
        "lat": 37.1858,
        "lng": -3.5915
      },
      {
        "nome": "Monastery of San Jerónimo",
        "testo": "The first monastery founded after the Christian conquest, with two cloisters and a Renaissance church where the Gran Capitán is buried. Its gilded interior is among the finest in the city.",
        "come": "Ten minutes' walk west of the cathedral.",
        "quando": "Morning, when it is quiet.",
        "tempo": "45 minutes",
        "costo": "a few euros",
        "lat": 37.1787,
        "lng": -3.6038
      },
      {
        "nome": "Granada Charterhouse",
        "testo": "The charterhouse's sacristy is one of Spain's Baroque masterpieces, all white stucco, marble and inlay. The cloister and refectory hold paintings by Sánchez Cotán.",
        "come": "North of the centre, near the university: city buses or a 25-minute walk.",
        "quando": "An afternoon, after siesta.",
        "tempo": "45 minutes",
        "costo": "a few euros",
        "lat": 37.1924,
        "lng": -3.5987
      },
      {
        "nome": "Huerta de San Vicente",
        "testo": "The García Lorca family's summer house, where the poet wrote some of his works and which he left shortly before he was killed in 1936. Guided tours show original furniture and objects.",
        "come": "In the García Lorca park, 20 minutes' walk from the centre; timed group tours.",
        "quando": "Morning; closed Mondays.",
        "tempo": "45 minutes",
        "orari": "Closed Mondays.",
        "lat": 37.17,
        "lng": -3.613,
        "url": "https://www.huertadesanvicente.com/"
      },
      {
        "nome": "Hammam Al Ándalus",
        "testo": "Modern Arab-style baths in a house at the foot of the Alhambra, with pools at three temperatures, a steam room and massages. A way to end a day of hills.",
        "come": "On Calle Santa Ana, next to Plaza Nueva; 90-minute sessions by booking.",
        "quando": "In the evening, after the Alhambra.",
        "tempo": "1.5 hours",
        "costo": "paid, with or without massage",
        "lat": 37.1775,
        "lng": -3.5917,
        "url": "https://granada.hammamalandalus.com/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Alhambra with the Nasrid Palaces at your ticket time, Alcazaba and Generalife",
          "Lunch and siesta in the centre",
          "Afternoon: Cathedral, Capilla Real and Alcaicería",
          "Carrera del Darro and the climb into the Albaicín",
          "Sunset at the Mirador de San Nicolás and a tapas dinner"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Alhambra and Generalife, Carrera del Darro and Paseo de los Tristes in the evening",
          "Day 2: Cathedral and Capilla Real, Alcaicería, El Bañuelo, Albaicín and Sacromonte, sunset at San Miguel Alto or San Nicolás, flamenco in a cave"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Alhambra and Generalife, Paseo de los Tristes",
          "Day 2: centre, Cathedral, San Jerónimo, Albaicín and sunset at San Nicolás",
          "Day 3: Sacromonte and the Cave Museum, the Charterhouse or Huerta de San Vicente, hammam in the evening; or a trip to the Alpujarras"
        ]
      }
    ],
    zone: [
      {
        "nome": "Center around the cathedral",
        "perChi": "Those who want convenience and evening life",
        "testo": "Everything on foot: Alhambra, tapas, Albaicín. In the evening the noise of the bars reaches low-floor rooms. Prices are average.",
        "fascia": "80-160 €"
      },
      {
        "nome": "Albaicín",
        "perChi": "Those looking for atmosphere and a view of the Alhambra",
        "testo": "Rooms in carmenes and small guesthouses, quiet at night. The streets are steep and cobbled, awkward with suitcases: a taxi often cannot reach the door.",
        "fascia": "90-180 €"
      },
      {
        "nome": "Realejo",
        "perChi": "Those who want a local, cheaper neighborhood",
        "testo": "At the foot of the Alhambra, with bars used by students and low prices. The centre is a short walk away, and the climb up the hill starts right away.",
        "fascia": "70-140 €"
      }
    ],
    gite: [
      {
        "nome": "Las Alpujarras",
        "distanza": "75 km, 1h15 by car",
        "come": "By car, or Alsa buses to Pampaneira, Bubión and Capileira, a few a day.",
        "testo": "White villages with flat Berber roofs on the slopes of the Sierra Nevada, in the Poqueira gorge. Marked trails link one village to the next."
      },
      {
        "nome": "Sierra Nevada",
        "distanza": "35 km, 45 minutes-1 hour",
        "come": "Direct buses from Granada bus station to Pradollano, or by car.",
        "testo": "Europe's southernmost ski resort, usually open December to April; in summer there are high trails towards the Veleta."
      },
      {
        "nome": "Córdoba",
        "distanza": "1h30 by train",
        "come": "Direct high-speed trains from Granada; the old town is 20 minutes' walk from the station.",
        "testo": "The Mosque-Cathedral and the Jewish quarter fit well into a day if you leave early."
      }
    ],
    sapori: [
      {
        "nome": "Free tapa with your drink",
        "testo": "In Granada every drink comes with a free tapa: order another drink and the tapa changes. A round of Calle Navas, Calle Elvira and Realejo makes an inexpensive dinner."
      },
      {
        "nome": "Remojón granadino",
        "testo": "A salad of orange, desalted cod, onion and black olives, with olive oil. A cold dish of peasant origin."
      },
      {
        "nome": "Habas con jamón and tortilla del Sacromonte",
        "testo": "Broad beans with ham are a seasonal classic. The Sacromonte tortilla, with lamb brains and testicles, is a historic Roma dish; it is found in few restaurants and should be ordered knowing what it is."
      },
      {
        "nome": "Piononos from Santa Fe",
        "testo": "Small rolled sweets soaked in syrup, topped with burnt cream, born in Santa Fe, near Granada. Bought in pastry shops in the center."
      },
      {
        "nome": "Tea and Arab sweets on Calle Calderería",
        "testo": "The teahouses of Calderería Nueva serve mint tea and pastries. It is a recent tradition born from the Moorish quarter, useful for a break."
      }
    ],
    attenzioni: [
      "Alhambra tickets: buy only from the official site. Resellers inflate prices; tickets are named and ID is required.",
      "Women offering rosemary or reading palms around the cathedral and the Alhambra: they then ask for money. Say no and do not take anything in your hand.",
      "Albaicín and Sacromonte after dark: poorly lit lanes, a few theft incidents. It is better to move in a group or by minibus in the evening.",
      "Low-emission zone in the center: if arriving by car, check the city website for rules on foreign plates before entering.",
      "Steep climbs: comfortable shoes, water in summer, and allow more time to get around than the map suggests."
    ],
    faq: [
      {
        "domanda": "How many days do you need in Granada?",
        "risposta": "Two days: one for the Alhambra and one for the centre, the Albaicín and Sacromonte. With three, add the monasteries, the hammam or a trip to the Alpujarras."
      },
      {
        "domanda": "How do you buy Alhambra tickets?",
        "risposta": "Only on the official website, up to three months ahead: the general ticket costs €22.27 plus the online fee (2026) and carries your name. In high season it sells out weeks or months ahead."
      },
      {
        "domanda": "What happens if I am late for the Nasrid Palaces?",
        "risposta": "You will not get in: the time printed on the ticket is strict and cannot be changed. Arrive at the palace entrance with half an hour to spare."
      },
      {
        "domanda": "Are tapas really free in Granada?",
        "risposta": "Yes, in most bars every drink comes with a tapa included in the price, often a different one each round. Three or four drinks make a dinner."
      },
      {
        "domanda": "Where to stay in Granada?",
        "risposta": "The centre around the cathedral for convenience, the Albaicín for atmosphere and views but lots of climbing, the Realejo to spend less. A double costs about €70-180."
      }
    ],
    esperienzeSlugs: ['alhambra-visita', 'zambra-sacromonte'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: "The Alhambra of Granada with the Palace of Charles V and the Nasrid towers lit by dawn light, with the Sierra Nevada in the background",
    immagine: '/images/spagna/granada.jpg',
  },
  {
    slug: 'cordoba',
    paeseSlug: 'spagna',
    ordine: 3,
    nome: 'Córdoba',
    tipologia: ['città', 'cultura moresca'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "In the 10th century, under the Umayyad Caliphate, Córdoba was the most populous and most cultured city in Western Europe, where Islamic, Jewish and Christian culture coexisted. What remains is Andalusia's most disorienting monument: the Mezquita, a forest of over eight hundred marble and onyx columns with a Renaissance cathedral built right in the middle.",
    percheAndarci:
      "For the Mezquita-Catedral, a space that photos don't capture: you cross the forest of columns and two-level bicolor arches and in the center you find yourself facing a Gothic nave forcibly grafted into the mosque. Of the four Andalusian cities it's the most compact, the easiest to see in a day.",
    cosaVedere: [
      "The Mezquita-Catedral, with the Mihrab (the most precious prayer niche in Western Islamic art) and the Renaissance Capilla Mayor in the center of the columned hall",
      "The Alcázar de los Reyes Cristianos, the fortress-palace of the Catholic Monarchs with its terraced gardens",
      "The Judería, the old Jewish quarter, with the medieval Synagogue (one of the three remaining in Spain) and the narrow streets around Calleja de las Flores",
      "The Roman Bridge over the Guadalquivir, with the Calahorra Tower at the opposite end",
      "The Patios de Córdoba, the flowering inner courtyards typical of the city, protagonists of the Patios Festival in May (UNESCO intangible cultural heritage)",
    ],
    cosaFare: [
      "Visit the Mezquita early in the morning, when it's free for residents from 8:30 to 9:30 and in any case less crowded",
      "Get lost in the Judería between Calleja de las Flores and the Synagogue",
      "If the trip falls in May, follow the route of the Patios de Córdoba open to the public",
      "Cross the Roman Bridge at sunset for the classic view of the Mezquita",
    ],
    doveDormire: "The Judería for its proximity to the Mezquita; the modern center around Plaza de las Tendillas for lower prices.",
    doveMangiare: "Salmorejo was born here, thicker than Sevillian gazpacho; rabo de toro (braised oxtail) and flamenquín (fried roll of ham and cheese) are the signature dishes of Córdoba cuisine.",
    comeArrivare: "Córdoba has no scheduled flights: you land in Seville or Málaga. From Seville San Pablo the EA bus (about €4, 35 minutes) goes to Santa Justa station, then the AVE reaches Córdoba in about 45 minutes. From Málaga the Cercanías C1 train (about €2, 12 minutes) goes to María Zambrano, then it is about an hour by high-speed train. From Madrid Atocha the AVE takes 1h40-2h, from Granada about 1h30. From Córdoba station to the old town it is about twenty minutes on foot, or a short taxi ride.",
    comeSpostarsi: "The historic center is small and can be covered entirely on foot.",
    periodoMigliore:
      "March-May (with the Patios Festival in May) and October. Córdoba is, along with Seville, the hottest city in Spain: from mid-July to late August many attractions shorten their hours because of the heat, which here hit the Spanish record of 47.6°C (118°F) in August 2021.",
    costi: "Mezquita-Catedral €15 (free Monday to Saturday 8:30-9:30), bell tower €4, night visit €25; Alcázar about €7; Palacio de Viana €8.50-14; Calahorra Tower €4.50; Synagogue free. Indicative daily budget per person, sharing a double room: low €50-70, mid €90-130, high over €200.",
    erroriDaEvitare: [
      "Planning a midday visit in high summer: between mid-July and late August any travel in the middle hours should be avoided",
      "Treating Córdoba as a rushed half day between Seville and Granada: the Mezquita alone deserves at least 2 hours at an easy pace",
      "Missing the Patios Festival if the trip falls in May: it needs to be planned ahead, because the open courtyards have limited hours",
    ],
    luoghi: [
      {
        "nome": "Mezquita-Catedral",
        "testo": "The mosque founded in the 8th century and enlarged several times by the Umayyads: a forest of columns with two-tier, two-colored arches. After the Reconquista a Renaissance cathedral was built in the middle. The Mihrab, the prayer niche, is decorated with Byzantine mosaics.",
        "come": "Entrance through the Puerta del Perdón or the Patio de los Naranjos, a step from the river. You visit on your own, with a rented audio guide; the cathedral in the center is crossed on the same route.",
        "quando": "Monday to Saturday, from 8:30 to 9:30, entry is free (access until 9:20, no groups); after that you pay. Hours change by season and services: check the official site.",
        "tempo": "1.5-2 hours",
        "costo": "15 euros; «El Alma de Córdoba» night visit 25 euros (official site, 2026)",
        "url": "https://mezquita-catedraldecordoba.es/",
        "consiglio": "The free morning slot is the best: few people and low light in the aisles. You can also pay and enter later, but the silence is lost.",
        "orari": "They vary by date and religious services: in November 2026, for example, 10:00-18:00, with the ticket office closing 30 minutes earlier. Free entry Monday to Saturday 8:30-9:30. Daily calendar on the official site.",
        "lat": 37.87887,
        "lng": -4.77934
      },
      {
        "nome": "Judería and Calleja de las Flores",
        "testo": "The old Jewish quarter, behind the Mezquita: narrow white lanes, flowered courtyards and the little Calleja de las Flores opening onto the bell tower. Here too is the synagogue completed in 1315, the only one in Córdoba to escape destruction.",
        "come": "On foot, starting from the Puerta de Almodóvar. There is no fixed route.",
        "quando": "Early morning or late afternoon. At midday in summer the lanes hold the heat.",
        "tempo": "1-2 hours",
        "consiglio": "Step into the open patios: the door is often left ajar and looking from the entrance is allowed.",
        "costo": "free",
        "lat": 37.87899,
        "lng": -4.7817
      },
      {
        "nome": "Alcázar de los Reyes Cristianos",
        "testo": "A fortress-palace built on the remains of the Umayyad and Almohad ones and rebuilt by Alfonso XI, with works completed in 1328. The Catholic Monarchs were the last rulers to live here. Inside is the Hall of Mosaics, with Roman mosaics from the 2nd and 3rd centuries; outside, terraced gardens with fountains and citrus trees, best seen from the towers.",
        "come": "On foot from the Mezquita, towards the river. You climb the towers for the view of the city.",
        "quando": "Check hours and closing days on the monument's website. In summer, better in the morning.",
        "tempo": "1-1.5 hours",
        "consiglio": "The gardens are the only shade to sit in after the Mezquita.",
        "costo": "about 7 euros (2026)",
        "orari": "Closed on Mondays; hours change by season and are shortened in summer because of the heat.",
        "lat": 37.8766,
        "lng": -4.78138,
        "url": "https://alcazardelosreyescristianos.cordoba.es/"
      },
      {
        "nome": "Puente Romano and Torre de la Calahorra",
        "testo": "A bridge of Roman origin over the Guadalquivir, rebuilt many times: today it has 16 arches and is pedestrian. For centuries it was the city's only bridge. From the far bank you get the classic view of the Mezquita. The Calahorra tower, at the south end, houses a museum.",
        "come": "On foot, a step from the Mezquita. The bridge is pedestrian only.",
        "quando": "At sunset or after dark, when the Mezquita is lit.",
        "tempo": "30-45 minutes",
        "consiglio": "Cross the bridge and take the photo from the opposite bank, not from the bridge itself.",
        "costo": "bridge free; Calahorra Tower 4.50 euros with terrace and audio guide (official site, 2026)",
        "orari": "Tower: November-February 10:00-18:00; October and March-May 10:00-19:00; June-September 10:00-14:00 and 16:30-20:30.",
        "lat": 37.87663,
        "lng": -4.77788,
        "url": "https://www.torrecalahorra.es/"
      },
      {
        "nome": "Patios de Córdoba",
        "testo": "The inner courtyards of houses, with potted flowers, fountains and wells, are a local tradition recognized by UNESCO. During the May festival owners open their homes to the public and the best one wins a contest.",
        "come": "On foot in the San Basilio district and in the Judería. Some public patios can be visited all year.",
        "quando": "Festival in early May, over about two weeks. Dates and hours are checked on the city tourism site.",
        "tempo": "1-2 hours",
        "consiglio": "San Basilio, to the south-west, has the best-kept patios and fewer people than the Judería.",
        "lat": 37.87599,
        "lng": -4.78429
      },
      {
        "nome": "Mezquita bell tower",
        "testo": "The Baroque bell tower built in the 16th and 17th centuries around the old Umayyad minaret, which is still enclosed inside the masonry. From the top you see the Patio de los Naranjos, the rooftops of the Judería and the Guadalquivir.",
        "come": "You climb in small timed groups, with a ticket separate from the Mezquita. Entrance from the Patio de los Naranjos.",
        "quando": "The first slot of the morning or the last of the afternoon, with low light on the rooftops.",
        "tempo": "30 minutes",
        "costo": "4 euros (official site, 2026)",
        "orari": "Slots every 30 minutes; in November 2026 from 9:30 to 18:30.",
        "lat": 37.87955,
        "lng": -4.78032,
        "url": "https://tickets.mezquita-catedraldecordoba.es/es/458-web-individual/2334-torre-campanario",
        "consiglio": "Book online together with the Mezquita: the groups are small and sell out before tickets for the columned hall."
      },
      {
        "nome": "Synagogue",
        "testo": "A small prayer hall completed in 1315, with Mudéjar-style stucco and Hebrew inscriptions on the walls. It is one of the few medieval synagogues left in Spain and stands in the heart of the Judería.",
        "come": "On foot in Calle Judíos, five minutes from the Mezquita. You visit on your own; booking only for groups.",
        "quando": "In the morning, before the guided groups arrive.",
        "tempo": "20-30 minutes",
        "costo": "free",
        "orari": "Tuesday-Sunday 9:00-15:00, last entry 10 minutes before; closed on Mondays, except public holidays.",
        "lat": 37.87979,
        "lng": -4.78344,
        "url": "https://www.juntadeandalucia.es/cultura/enclaves/enclave-monumental-sinagoga-de-cordoba"
      },
      {
        "nome": "Medina Azahara (Madinat al-Zahra)",
        "testo": "The palace city founded by Abd al-Rahman III in the 10th century at the foot of the Sierra Morena, abandoned and sacked after a few decades. You visit the museum and the excavations, with the decorated reception hall and the terraces over the plain. It has been a UNESCO World Heritage Site since 2018.",
        "come": "About 8 km west of the centre. By car you park at the museum; from there a shuttle takes you to the site. Tourist buses and guided tours also leave from the centre.",
        "quando": "In the morning: the site has almost no shade. In summer there are evening openings.",
        "tempo": "half a day",
        "costo": "free for European Union citizens, 1.50 euros for others (Junta de Andalucía)",
        "orari": "From 21 September to 20 March: Tuesday-Saturday 9:00-18:00, Sundays and holidays 9:00-15:00; closed on Mondays. Different hours in summer: check the website.",
        "lat": 37.88608,
        "lng": -4.86779,
        "url": "https://www.museosdeandalucia.es/web/conjuntoarqueologicomadinatalzahra",
        "consiglio": "See the museum first, with the model of the city: it helps to read the excavations, which are hard to understand on their own."
      },
      {
        "nome": "Palacio de Viana",
        "testo": "A noble palace with twelve patios and a garden, each with different plants and fountains. It is the way to see Córdoba's patios in any month, not only during the May festival.",
        "come": "On foot, about 20 minutes from the Mezquita, in the Santa Marina quarter. You can see just the patios or add the guided tour of the interiors.",
        "quando": "In spring, with the flowers; in the morning there is more light in the courtyards.",
        "tempo": "1-1.5 hours",
        "costo": "patios only 8.50 euros; patios and guided interiors 14 euros (official site)",
        "orari": "September-December: Tuesday-Saturday 10:00-19:00, Sundays and holidays 10:00-15:00; July and August: Tuesday-Sunday 9:00-15:00. Closed on Mondays.",
        "lat": 37.88867,
        "lng": -4.77432,
        "url": "https://www.palaciodeviana.com/"
      },
      {
        "nome": "Baños del Alcázar Califal",
        "testo": "The 10th-century Arab baths that were part of the caliphs' old alcázar. You walk through the cold, warm and hot rooms, with vaults and star-shaped skylights.",
        "come": "In the Campo Santo de los Mártires, a few steps from the Alcázar de los Reyes Cristianos.",
        "quando": "Together with the Alcázar, in the morning.",
        "tempo": "30-45 minutes",
        "lat": 37.87791,
        "lng": -4.78228
      },
      {
        "nome": "Roman Temple",
        "testo": "The columns of a large 1st-century AD temple, uncovered in the 1950s during works to enlarge the town hall and partly raised again. A reminder that Córdoba was the capital of Roman Baetica.",
        "come": "In Calle Claudio Marcelo, next to the town hall. It is seen from the street, behind a fence.",
        "quando": "In the evening, when it is lit, on the way to the Corredera.",
        "tempo": "15 minutes",
        "costo": "free, seen from the street",
        "lat": 37.88476,
        "lng": -4.77639
      },
      {
        "nome": "Plaza de la Corredera",
        "testo": "A large 17th-century arcaded rectangular square, closed on all sides by houses with balconies. Markets and bullfights were once held here; today it is full of outdoor tables.",
        "come": "On foot, 10 minutes north-east of the Mezquita.",
        "quando": "At sunset or for dinner.",
        "tempo": "30 minutes",
        "costo": "free",
        "lat": 37.88354,
        "lng": -4.77443
      },
      {
        "nome": "Plaza del Potro",
        "testo": "A small square with a 16th-century fountain topped by a colt, mentioned by Cervantes in Don Quixote. Facing it are the Posada del Potro, an old inn, and the building that houses the Fine Arts Museum and the Julio Romero de Torres Museum, the painter of Córdoba's women.",
        "come": "On foot, 10 minutes from the Mezquita following the river east.",
        "quando": "In the late afternoon.",
        "tempo": "30 minutes-1 hour with a museum",
        "lat": 37.88101,
        "lng": -4.77482
      },
      {
        "nome": "Fernandine churches",
        "testo": "The churches built after the Christian conquest of 1236, in a plain Gothic style with rose windows and Mudéjar details, in the quarters north of the centre. San Lorenzo, Santa Marina and San Pablo are the best known.",
        "come": "On foot, with a walk of a couple of hours between Santa Marina and San Lorenzo. The diocese sells a ticket for the church route on the Mezquita website.",
        "quando": "In the afternoon, after the Palacio de Viana, which is in the same quarter.",
        "tempo": "2 hours",
        "lat": 37.88856,
        "lng": -4.76889,
        "url": "https://tickets.mezquita-catedraldecordoba.es/es/458-web-individual/2337-ruta-de-las-iglesias-fernandinas"
      },
      {
        "nome": "Caballerizas Reales",
        "testo": "The royal stables founded by Philip II in 1570 to breed the Andalusian horse. In the evening they host an equestrian show with music and flamenco.",
        "come": "On foot, next to the Alcázar de los Reyes Cristianos, in the San Basilio quarter.",
        "quando": "In the evening, for the show; by day you see the stables and the riding arena.",
        "tempo": "1.5 hours with the show",
        "lat": 37.87654,
        "lng": -4.7832
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Mezquita in the free slot, entering before 9:20, then the bell tower with your booked slot",
          "Judería, Calleja de las Flores and the Synagogue",
          "Late morning: Alcázar de los Reyes Cristianos and Baños del Alcázar Califal",
          "Early afternoon: lunch with salmorejo and rabo de toro, then a break in the hot hours",
          "Late afternoon: Roman Bridge and Calahorra Tower, sunset from the south bank"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan",
          "Day 2, morning: Medina Azahara, the museum first and then the excavations",
          "Day 2, afternoon: Palacio de Viana and the Fernandine churches of Santa Marina and San Lorenzo",
          "Day 2, evening: Roman Temple, Plaza de la Corredera and tapas"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above",
          "Day 3, morning: the San Basilio patios and the Caballerizas Reales",
          "Day 3, afternoon: Plaza del Potro and the Julio Romero de Torres Museum, or the castle of Almodóvar del Río",
          "Day 3, evening: equestrian show at the Caballerizas or the Mezquita night visit"
        ]
      }
    ],
    zone: [
      {
        "nome": "Judería",
        "perChi": "Those who want to be near the Mezquita",
        "testo": "Rooms in historic houses with a patio, a minute from the monument. It is quiet at night, but there are more tourists and expensive restaurants. Traffic does not reach into the lanes.",
        "fascia": "80-150 €"
      },
      {
        "nome": "Around Plaza de las Tendillas",
        "perChi": "Those looking for lower prices and evening life",
        "testo": "A shopping and bar district, walkable from the Mezquita. Street-side rooms can be noisy at weekends.",
        "fascia": "60-110 €"
      },
      {
        "nome": "San Basilio and Alcázar Viejo",
        "perChi": "those looking for calm close to the centre",
        "testo": "The quarter with the best-kept patios, between the Alcázar and the walls. Quiet streets in the evening and courtyard houses turned into small hotels; the Mezquita is 10 minutes away on foot.",
        "fascia": "60-110 €"
      },
      {
        "nome": "Santa Marina and San Pedro",
        "perChi": "those who want to spend less and see neighbourhood Córdoba",
        "testo": "The north and east of the old town, with the Fernandine churches, the Palacio de Viana and bars where locals go. Further from the Mezquita, 15 to 25 minutes on foot.",
        "fascia": "50-100 €"
      }
    ],
    gite: [
      {
        "nome": "Seville",
        "distanza": "45 minutes by AVE",
        "come": "Frequent high-speed trains from Córdoba to Santa Justa, to book on Renfe or with the private operators.",
        "testo": "The cathedral with the Giralda, the Real Alcázar and Triana. Doable as a day trip leaving early, but it deserves at least one night."
      },
      {
        "nome": "Granada",
        "distanza": "about 1.5 hours by train",
        "come": "Direct high-speed trains from Córdoba; the Alhambra must be booked on the official site.",
        "testo": "It makes sense as a day trip only with an Alhambra ticket already in hand; otherwise it is better to stay overnight."
      },
      {
        "nome": "Castle of Almodóvar del Río",
        "distanza": "about 25 km",
        "come": "By car along the Guadalquivir to the west, or with organised trips from Córdoba.",
        "testo": "A castle of Arab origin restored in the early 20th century, on top of a hill above the river and the olive groves. An easy half day."
      },
      {
        "nome": "Montilla and the Montilla-Moriles wineries",
        "distanza": "about 45 km",
        "come": "By car to the south; wineries are visited by booking.",
        "testo": "The area of the fortified wines that go with Córdoba's cooking, with wineries and tastings among the vineyards of the Campiña."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Córdoba?",
        "risposta": "One day is enough for the Mezquita, the Judería, the Alcázar and the Roman Bridge. With two you add Medina Azahara, the Palacio de Viana and the Fernandine churches without rushing."
      },
      {
        "domanda": "Do you need to book the Mezquita?",
        "risposta": "It is not compulsory, but buying online is worth it, especially for the bell tower, which has small slots, and for the night visit."
      },
      {
        "domanda": "When is the Mezquita free?",
        "risposta": "Monday to Saturday from 8:30 to 9:30, with access until about 9:20 and no groups, except on days with special events. After that you pay the 15-euro ticket."
      },
      {
        "domanda": "Can you visit Córdoba as a day trip from Seville?",
        "risposta": "Yes: the AVE takes about 45 minutes. Leaving early you see the Mezquita, the Judería and the Alcázar, but Medina Azahara stays out."
      },
      {
        "domanda": "When is the Patios Festival?",
        "risposta": "In the first half of May, for about two weeks. Entry to most houses is free, and in those days rooms and trains should be booked well ahead."
      },
      {
        "domanda": "How do you get to Medina Azahara?",
        "risposta": "It is about 8 km west of the centre: by car you park at the museum and a shuttle takes you to the site, or you go with a tourist bus or a guided tour. Entry is free for EU citizens."
      }
    ],
    sapori: [
      {
        "nome": "Salmorejo cordobés",
        "testo": "A cold cream of tomato and bread, thicker than gazpacho, with ham and boiled egg. Born in Córdoba, it is the most requested starter."
      },
      {
        "nome": "Rabo de toro",
        "testo": "Oxtail braised for hours with wine and vegetables, served hot. It is the trattoria dish most associated with the city."
      },
      {
        "nome": "Flamenquín",
        "testo": "A roll of pork loin and ham, breaded and fried. It is also eaten as a tapa."
      },
      {
        "nome": "Berenjenas con miel de caña",
        "testo": "Eggplant fried in light batter, served with sugar cane molasses. A simple dish, very common in bars."
      }
    ],
    attenzioni: [
      "Mezquita: the free morning slot has an access control that closes around 9:20. Those who arrive later must pay for a ticket.",
      "Summer: from mid-July to August temperatures can exceed 40 degrees. Plan visits for early morning and evening.",
      "Rosemary sellers in front of the Mezquita and in the Judería: they ask for money after putting it in your hand. Say no.",
      "May, the patio festival: lodgings and trains fill up weeks ahead, so book early."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: "The forest of columns and red-and-white bicolor arches inside the Mezquita of Córdoba",
    immagine: '/images/spagna/cordoba.jpg',
  },
  {
    slug: 'ronda-pueblos-blancos',
    paeseSlug: 'spagna',
    ordine: 4,
    nome: 'Ronda and the Pueblos Blancos',
    tipologia: ['montagna', 'borghi', 'natura'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "Ronda is the most scenic of the \"pueblos blancos,\" the white villages of inland Andalusia. It sits on both sides of the Tajo, a gorge more than 100 meters deep, joined by the 18th-century Puente Nuevo. It's the mountains after the Moorish cities of the plain, and it's the cradle of modern bullfighting.",
    percheAndarci:
      "It's the most photographed view in Andalusia after the Alhambra, and it slows down an itinerary made of big cities: you walk on the edge of a canyon, visit the oldest bullring in Spain still in use and stop in the wineries of the area.",
    cosaVedere: [
      "The Puente Nuevo, the stone bridge that spans the Tajo gorge more than 100 meters up",
      "The Plaza de Toros de Ronda, among the oldest bullrings in Spain (1785), with the bullfighting museum",
      "The Mirador de Aldehuela and the trail that descends into the gorge for the view of the bridge from below",
      "La Ciudad, the oldest Moorish quarter, on the opposite side of the bridge from the modern center",
      "The Arab baths (Baños Árabes), among the best preserved in Spain",
    ],
    cosaFare: [
      "Walk on the Puente Nuevo and go down the Mirador de Aldehuela trail for the perspective from the bottom of the gorge",
      "A tasting tour of the wineries in the Ronda wine region, less known than others in Andalusia but with growing quality",
      "Extend the visit to one or two nearby pueblos blancos like Setenil de las Bodegas (houses dug under rock overhangs) or Grazalema, in the natural park of the same name",
    ],
    doveDormire: "The historic center of Ronda, near the Puente Nuevo, for the view and convenience; alternatively a farmhouse or a masía in the surrounding countryside, for those who want to slow down even more.",
    doveMangiare: "Andalusian mountain cooking: rabo de toro, cordero (lamb) grilled over embers and local goat cheeses, often accompanied by wines of the Sierras de Málaga denomination.",
    comeArrivare:
      "Málaga airport is about 97 km away, 1h45 by car, the easiest option because you'll need the car for the pueblos blancos anyway; it's worth renting one at the airport. From Seville it's 129 km, about 2 hours, and from Granada 2-2.5 hours. Without a car there is the regional train from Málaga, about 2 hours on a scenic line: from the airport to María Zambrano station take the Cercanías C1, about 12 minutes and about €2. Ronda station is in the new part of town, within walking distance of the centre.",
    comeSpostarsi: "The center is covered on foot; for the nearby pueblos blancos you need a car, bus connections between villages are scarce and slow.",
    periodoMigliore: "April-June and September-October, with milder temperatures than in the Guadalquivir plain thanks to the altitude (about 750 meters).",
    costi:
      "Plaza de Toros €10 (€12 with audio guide); Baños Árabes €4.50; Palacio de Mondragón €5; €12 municipal pass for the Baños, Mondragón, the Puente Nuevo centre and other municipal museums; the Puente Nuevo, the Alameda and the villages are free. Indicative daily budget per person, sharing a double: low €60-80, mid €110-150, high over €200, excluding car hire.",
    erroriDaEvitare: [
      "Doing it as a day trip from Seville without staying overnight: the trip (about 2h each way) makes the visit rushed unless you stay at least one night",
      "Driving among the pueblos blancos without allowing for narrow mountain roads and hairpin turns",
      "Underestimating the wind on the Puente Nuevo: in the gorge the currents can be strong, especially in winter",
    ],
    luoghi: [
      {
        "nome": "Puente Nuevo and the Tajo gorge",
        "testo": "The stone bridge completed in 1793 spans the Tajo gorge, about 120 metres deep, and links the Moorish town to the new quarter. You walk across it and look at it from below, from the viewpoint paths.",
        "come": "On foot from the center, the bridge is in the middle of town. For the view from below, take the Camino de los Molinos path down, on the south side, or the Mirador de Aldehuela.",
        "quando": "Free entry on the bridge. The best moment is sunset, with low light on the gorge.",
        "tempo": "1-2 hours",
        "consiglio": "The path down is steep and the climb back tires you: closed shoes and water.",
        "costo": "Free on the bridge; the interpretation centre inside the bridge is included in the municipal pass (€12, 2025 rate, free under 14)",
        "orari": "The bridge is always open. Interpretation centre: Monday and Saturday 10am-2pm and 3-6pm, Tuesday to Friday 10am-7pm, Sundays and public holidays 10am-3pm; last entry half an hour before closing.",
        "lat": 36.74063,
        "lng": -5.16585,
        "url": "https://turismoderonda.es/es/ronda/que_ver/arquitectura_plazas_monumentos/puente_nuevo_de_ronda"
      },
      {
        "nome": "Plaza de Toros",
        "testo": "Ronda's bullring, opened in 1785, is one of the oldest in Spain and is tied to the Romero family, above all to Pedro Romero, one of the fathers of bullfighting on foot. Inside is a museum of costumes and weapons. You can visit it simply as architecture, without attending a bullfight.",
        "come": "On foot from the Puente Nuevo, towards the Mercadillo quarter.",
        "quando": "In the morning at opening time, before the day-trip groups from the coast.",
        "tempo": "1 hour",
        "consiglio": "Those who do not want the bullfighting theme can look only at the architecture and the horse stables.",
        "costo": "€10 standard, €12 with audio guide (official site rates, 2026)",
        "orari": "Every day from 10am; closes at 6pm November to February, 7pm in March and October, 8pm April to September. Consolidation works are under way in the ring.",
        "lat": 36.74237,
        "lng": -5.16707,
        "url": "https://www.rmcr.org/visita-plaza-museo/"
      },
      {
        "nome": "Baños Árabes and la Ciudad",
        "testo": "The Ciudad, the Moorish quarter, has narrow lanes and old gates. The Arab baths from the 13th-14th century, at the foot of the old town, are among the best preserved in Spain, with star-shaped vaults.",
        "come": "On foot from the Puente Nuevo, descending toward the Guadalevín river. The route is downhill and shaded.",
        "quando": "In the morning to avoid the groups; on Sundays it closes at 3pm.",
        "tempo": "1-1.5 hours in total",
        "consiglio": "It combines well with the mill path under the gorge, in the same half day.",
        "costo": "€4.50 standard, €3 for students under 26 and pensioners (2026); included in the €12 municipal pass",
        "orari": "Monday and Saturday 10am-2pm and 3-6pm, Tuesday to Friday 10am-7pm, Sundays and public holidays 10am-3pm; last entry half an hour before closing.",
        "lat": 36.73899,
        "lng": -5.16271,
        "url": "https://turismoderonda.es/es/ronda/que_ver/arquitectura_plazas_monumentos/banos_arabes"
      },
      {
        "nome": "Casa del Rey Moro and la Mina",
        "testo": "A noble house beside the bridge, with terraced gardens over the gorge. The reason to go in is la Mina, an Islamic-era stairway cut into the rock down to the Guadalevín river: it was used to bring water into town during sieges.",
        "come": "On foot from the Puente Nuevo, down Calle Santo Domingo. Tickets are sold only at the ticket office.",
        "quando": "In the morning, when the stairs are less crowded.",
        "tempo": "1 hour",
        "orari": "Every day 10am-8pm October to April, 10am-9:30pm May to September.",
        "lat": 36.73984,
        "lng": -5.1643,
        "url": "https://www.casadelreymoro.org/",
        "consiglio": "There are about three hundred steps, damp and slippery: wear shoes with good grip and save energy for the climb back."
      },
      {
        "nome": "Palacio de Mondragón (Ronda Museum)",
        "testo": "A palace in la Ciudad with Mudéjar patios and a hanging garden on the edge of the cliff. It houses the municipal museum, with sections on prehistory and Islamic Ronda.",
        "come": "On foot in la Ciudad, on Plaza Mondragón, ten minutes from the bridge.",
        "quando": "Late morning, combined with Santa María la Mayor.",
        "tempo": "45 minutes",
        "costo": "€5 (2026); included in the €12 municipal pass",
        "orari": "Monday and Saturday 10am-2pm and 3-6pm, Tuesday to Friday 10am-7pm, Sundays and public holidays 10am-3pm; last entry half an hour before closing.",
        "lat": 36.73758,
        "lng": -5.16679,
        "url": "https://turismoderonda.es/es/ronda/que_ver/arquitectura_plazas_monumentos/palacio_mondragon"
      },
      {
        "nome": "Santa María la Mayor",
        "testo": "The main church of la Ciudad, built over the great mosque after the Christian conquest of 1485. The mihrab arch survives from the Islamic building; the rest mixes late Gothic and Renaissance.",
        "come": "On foot on Plaza Duquesa de Parcent, in the heart of la Ciudad.",
        "quando": "Outside service times; the square in front is quiet in the morning.",
        "tempo": "30-45 minutes",
        "lat": 36.73748,
        "lng": -5.16537
      },
      {
        "nome": "Alameda del Tajo and the cliff viewpoints",
        "testo": "The 19th-century garden next to the bullring ends in balconies hanging over the valley. From here and from the Paseo de los Ingleses you see the cliff the town stands on and the countryside out to the Serranía.",
        "come": "On foot from the Plaza de Toros; the park is free.",
        "quando": "At sunset, when the light hits the cliff face.",
        "tempo": "30 minutes-1 hour",
        "costo": "Free",
        "lat": 36.74326,
        "lng": -5.16822
      },
      {
        "nome": "Setenil de las Bodegas",
        "testo": "A white village near Ronda, with houses and bars built under the rocks that overhang the river. The best-known streets are Cuevas del Sol and Cuevas de la Sombra, with tables in the shade of the rock.",
        "come": "By car from Ronda, on a winding mountain road. The village is small and easy to walk.",
        "quando": "In the morning or at midday for lunch. On summer weekends car access is slow.",
        "tempo": "2-3 hours",
        "consiglio": "Park in the lots outside the village, not in the narrow streets.",
        "costo": "Free, you walk around the village on your own",
        "lat": 36.86417,
        "lng": -5.18139
      },
      {
        "nome": "Grazalema",
        "testo": "A white village at the foot of the Sierra de Grazalema, in the natural park of the same name. It is the base for the sierra's trails and for the scenic roads towards Zahara.",
        "come": "By car from Ronda, 32 km in about 35 minutes on a mountain road. Parking at the entrance to the village.",
        "quando": "Spring and autumn; in winter the Puerto de las Palomas road can ice over.",
        "tempo": "2-3 hours",
        "costo": "Free",
        "lat": 36.75839,
        "lng": -5.36607,
        "consiglio": "Some park trails, such as the Pinsapar, need a free permit from the visitor centre: check before you go."
      },
      {
        "nome": "Zahara de la Sierra",
        "testo": "A white village on a spur below a tower of the Nasrid castle, with a turquoise reservoir at its feet. The climb to the tower gives the widest view over the sierra.",
        "come": "By car from Ronda, 34 km in about 40 minutes, or from Grazalema over the Puerto de las Palomas (17 km). An uphill path from the village leads to the tower.",
        "quando": "Morning or late afternoon; in summer the climb to the tower is in full sun.",
        "tempo": "2 hours",
        "lat": 36.84058,
        "lng": -5.39054
      },
      {
        "nome": "Olvera",
        "testo": "The northernmost white village on the loop, with the outline of its castle and the Encarnación church on top of the hill. It is the end point of the Vía Verde de la Sierra, an old railway turned into a cycle path.",
        "come": "By car from Ronda, 33 km in about 50 minutes, or 15-20 minutes from Setenil.",
        "quando": "In the afternoon, combined with Setenil.",
        "tempo": "1-2 hours",
        "lat": 36.9349,
        "lng": -5.26012
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Plaza de Toros at the 10am opening, then the Alameda del Tajo and the cliff viewpoints.",
          "Late morning: Puente Nuevo and its interpretation centre, then la Ciudad with Santa María la Mayor and the Palacio de Mondragón.",
          "Early afternoon: lunch with rabo de toro or lamb.",
          "Afternoon: Casa del Rey Moro and the Mina stairway, then the Baños Árabes and the mills path below the gorge.",
          "Sunset: the bridge from below or from the Mirador de Aldehuela."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Ronda as in the one-day plan, staying overnight in the centre.",
          "Day 2, morning: Setenil de las Bodegas (30 minutes by car), with Cuevas del Sol and Cuevas de la Sombra streets.",
          "Day 2, lunch: in Setenil, under the rocks.",
          "Day 2, afternoon: Olvera, 15-20 minutes away, with its hilltop castle; back to Ronda."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: Ronda, then Setenil and Olvera as above.",
          "Day 3, morning: Grazalema (35 minutes from Ronda) and a walk in the natural park.",
          "Day 3, afternoon: Puerto de las Palomas and Zahara de la Sierra (17 km), climb to the castle tower.",
          "Day 3, evening: back to Ronda in 40 minutes, or stay the night in Grazalema."
        ]
      }
    ],
    zone: [
      {
        "nome": "Ronda old town",
        "perChi": "Those who want to see the bridge in the evening and morning",
        "testo": "Hotels and guesthouses a step from the Puente Nuevo. The town empties after sunset, when the day-trip groups leave. The streets are narrow and parking is costly.",
        "fascia": "€90-180"
      },
      {
        "nome": "Countryside around Ronda",
        "perChi": "Drivers looking for quiet",
        "testo": "Farm stays and cortijos among olive groves and vineyards, a short drive from town. You need the car to eat out.",
        "fascia": "€80-160"
      },
      {
        "nome": "Mercadillo and the station area",
        "perChi": "Those arriving by train or wanting to spend less",
        "testo": "The new part of town between Calle Virgen de la Paz and the station has guesthouses and simple hotels, easier parking and the bridge ten to fifteen minutes away on foot. Less view, more quiet and lower prices.",
        "fascia": "€60-110"
      }
    ],
    gite: [
      {
        "nome": "Caminito del Rey",
        "distanza": "60 km, about 1 hour by car",
        "come": "By car on the A-367 to Ardales and then the MA-5403. The path is one-way from north to south; a €2.50 shuttle bus takes you from the end back to the north entrance every half hour from 8:30am to 4:30pm.",
        "testo": "Walkways hanging on the walls of the Gaitanes gorge. Entry €10, guided visit €18, to be booked on the official site; not allowed under 8. The route closes in bad weather."
      },
      {
        "nome": "Arcos de la Frontera",
        "distanza": "85 km, about 1h20 by car",
        "come": "By car heading west on the A-372 through the Sierra de Grazalema, or on the A-374 via Algodonales.",
        "testo": "The largest of the pueblos blancos, on a cliff above the Guadalete, with the basilica of Santa María and the viewpoint on Plaza del Cabildo. It pairs well with Grazalema on the way."
      },
      {
        "nome": "Antequera and the dolmens",
        "distanza": "88 km, about 1h30 by car",
        "come": "By car on the A-367 and A-384 towards Campillos, or as a stop on the road from Granada.",
        "testo": "The Menga and Viera dolmens, a UNESCO site, free for EU citizens and closed on Mondays, and the town with its Alcazaba. The karst landscape of El Torcal is nearby."
      }
    ],
    sapori: [
      {
        "nome": "Rabo de toro",
        "testo": "Braised oxtail, a typical Ronda dish tied to the bullfighting tradition. Eaten in the restaurants of the center."
      },
      {
        "nome": "Cordero serrano",
        "testo": "Mountain lamb grilled or roasted, served with potatoes. A Sunday lunch dish."
      },
      {
        "nome": "Queso de cabra payoyo",
        "testo": "Goat cheese from the Payoya breed, produced in the Sierra de Grazalema, aged or fresh."
      },
      {
        "nome": "Vinos Sierras de Málaga",
        "testo": "Red and white wines from the wineries around Ronda, some of which can be visited by appointment."
      }
    ],
    attenzioni: [
      "Mountain roads to Setenil and Grazalema: tight bends and limited visibility. Drive slowly and give way to larger vehicles.",
      "Parking in Ronda and the villages: blue zones are paid and fines are frequent. Use the covered car parks outside the center.",
      "Strong wind over the gorge in winter: along the path and at the viewpoints stay away from the edge.",
      "Day-trip groups from Seville and the Costa del Sol: in the middle of the day the centre is crowded. Those who sleep in Ronda have the mornings and evenings almost to themselves."
    ],
    faq: [
      {
        "domanda": "How many days do you need in Ronda?",
        "risposta": "One full day is enough for the bridge, la Ciudad, the bullring and the Arab baths. With two or three days you can add Setenil, Olvera, Grazalema and Zahara."
      },
      {
        "domanda": "Can you visit Ronda as a day trip from Seville or Málaga?",
        "risposta": "Yes, but it's about 2 hours each way from Seville and 1h45 from Málaga, and in the middle of the day the centre is full of groups. Staying one night lets you see the bridge in the evening and almost empty early in the morning."
      },
      {
        "domanda": "Which white villages are worth seeing near Ronda?",
        "risposta": "Setenil de las Bodegas, 30 minutes away, for the houses under the rock; Grazalema and Zahara de la Sierra for the mountains; Olvera for its castle. Arcos de la Frontera is further, about 1h20."
      },
      {
        "domanda": "Do you need a car for the pueblos blancos?",
        "risposta": "Almost always: buses between villages are few and slow. Ronda itself is walkable; the car is only needed to get out."
      },
      {
        "domanda": "How much do Ronda's monuments cost?",
        "risposta": "The Plaza de Toros costs €10, the Baños Árabes €4.50 and the Palacio de Mondragón €5. The €12 municipal pass covers the Baños, Mondragón and the Puente Nuevo centre; the bridge itself is free."
      },
      {
        "domanda": "Can you do the Caminito del Rey from Ronda?",
        "risposta": "Yes, the entrance is about an hour's drive away. Tickets cost €10 and should be booked on the official site, especially on spring weekends."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: "The Puente Nuevo of Ronda above the Tajo gorge, with white houses perched on the edge of the cliff",
    immagine: '/images/spagna/ronda-pueblos-blancos.jpg',
  },

  // --- NORD (Paesi Baschi, Cantabria, Asturie, Galizia) ---
  {
    slug: 'san-sebastian',
    paeseSlug: 'spagna',
    ordine: 5,
    nome: 'San Sebastián (Donostia)',
    tipologia: ['città', 'gastronomia', 'mare'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The Basque city on the shell-shaped bay of La Concha, with more Michelin stars per capita than any other city in the world and the densest pintxo culture (the Basque bar snack) in Spain. It's the opposite of Andalusia: cool climate, intimate atmosphere and a Basque identity, of language and culture, clearly distinct from the rest of the country.",
    percheAndarci:
      "For the way of eating. Here the real meal is made by hopping between the bars of the Parte Vieja, one pintxo and one glass per place: the Basques call it txikiteo and it's a social ritual before a gastronomic one. It's the main reason to come to the city.",
    cosaVedere: [
      "The Parte Vieja, the old town with the highest density of pintxo bars in the city",
      "Playa de la Concha, the shell-shaped urban beach considered among the most beautiful in Europe",
      "Monte Igueldo, reachable by a historic funicular, for the view over the bay",
      "Isla de Santa Clara, in the middle of the bay, reachable by boat in summer",
      "The Peine del Viento (Comb of the Wind), Eduardo Chillida's sculpture set into the rocks at the end of La Concha",
    ],
    cosaFare: [
      "A pintxo round in the Parte Vieja following the local rule: one bar, one specialty, one glass of txakoli or cider, then you change places",
      "Ride the funicular up Monte Igueldo for sunset over the bay",
      "A swim at Playa de la Concha in the summer months",
      "A half-day extension to Getaria or Zarautz, the coastal towns just outside the city known for grilled fish and surfing",
    ],
    doveDormire: "The Parte Vieja to be in the middle of the pintxo bars, but it's noisy in the evening; Gros, across the Urumea river, is quieter and close to Zurriola beach, the surf one.",
    doveMangiare:
      "The txikiteo in the Parte Vieja is the experience itself (see the dedicated experience page): one bar, one specialty, one glass of txakoli (slightly sparkling Basque white wine) or cider, then you move on to the next bar. Unwritten rule: you eat standing at the counter, you take the pintxo with your hands, you pay at the end of the round by telling the bartender what you had.",
    comeArrivare:
      "The most convenient flights from Italy usually land in Bilbao (BIO): the direct Pesa bus to San Sebastián leaves from in front of arrivals, takes about 1h15, runs roughly hourly and costs around €14-17 from the machine or online; a taxi for the same trip costs about €170-190. Closer to the city are the small San Sebastián airport at Hondarribia (EAS), with few flights, mostly from Madrid and Barcelona, and Biarritz airport (BIQ) in France. By train from Madrid it takes about 5 hours; by car the French border is about twenty minutes away. In town it's best to leave the car in a car park: the center is walkable.",
    comeSpostarsi: "The center is covered on foot; city buses for outlying areas and farther beaches.",
    periodoMigliore:
      "June-September, the driest and warmest time of year (still mild, rarely above 25-27°C / 77-81°F). In Andalusia it's the season to avoid because of the heat.",
    costi:
      "A round of 4-5 pintxos with as many glasses costs roughly €25-35 per person; the simpler bars have pintxos at €2-4 each. Monte Igueldo funicular €5.50 return, San Telmo Museum €10 (free on Tuesdays), Aquarium €16, boat to Santa Clara island €5 (2026 figures). San Sebastián is among the most expensive Spanish cities for accommodation. Indicative daily budget per person, sharing a double: low €80-110, mid €150-200, high over €300.",
    erroriDaEvitare: [
      "Asking for a plate and loading it up with pintxos like at a buffet: it's considered unlocal, better one or two pieces per bar before changing places",
      "Staying in a single bar for the whole evening: the point of the txikiteo is to move",
      "Underestimating the Atlantic weather even in summer: it rains more often than in the other three Spanish regions in this guide, so it's best to always carry a light jacket",
    ],
    luoghi: [
      {
        "nome": "Parte Vieja and pintxos crawl",
        "testo": "The old town, between Plaza de la Constitución, the port and Monte Urgull, is the area with the most pintxos bars in the city. The ritual is called txikiteo: one bar, one or two pintxos, one glass, then you change venue.",
        "come": "On foot from the seafront or Boulevard. You eat standing at the bar, take cold pintxos from the counter, and order hot ones aloud.",
        "quando": "Lunch from 13 and evening from 19-20. On weekends the best bars are full.",
        "tempo": "2-3 hours of crawling",
        "consiglio": "Always ask for the house's hot pintxo, not just those on the counter. At the end you tell the barman what you had.",
        "costo": "pintxos from about €2-4 each in the simpler bars; a round of 4-5 pintxos with as many glasses about €25-35 per person",
        "lat": 43.32333,
        "lng": -1.985
      },
      {
        "nome": "Playa de la Concha and Paseo de la Concha",
        "testo": "The shell-shaped city beach, with the white balustrade of the promenade. The waters are sheltered by Santa Clara island and the seabed is shallow.",
        "come": "On foot from the centre: the promenade runs from the Parte Vieja to the end of the bay, towards the Peine del Viento.",
        "quando": "For swimming June-September. High tide narrows the beach a lot.",
        "tempo": "1-3 hours",
        "consiglio": "Check the tides: at low tide the beach doubles in size.",
        "costo": "free",
        "lat": 43.3177,
        "lng": -1.98637
      },
      {
        "nome": "Monte Igueldo",
        "testo": "The hill west of the bay, with an amusement park and a viewpoint. You go up on the funicular opened in 1912.",
        "come": "Funicular from the base, reached by city bus from the centre. Or walk up.",
        "quando": "At sunset. Check the season and funicular hours on the official site.",
        "tempo": "1-1.5 hours",
        "consiglio": "Go up around sunset time and walk down along the scenic road.",
        "costo": "funicular return €5.50, single €4, children up to 7 €2.50; the ticket includes entry to the hilltop grounds, rides are extra (2026 fares). Those who walk or drive up pay €3 for the viewpoint.",
        "orari": "Funicular, viewpoint and ride hours change day by day and are published in the calendar on the website; rides close on rainy days.",
        "url": "https://www.monteigueldo.es/organiza-tu-visita",
        "lat": 43.3207,
        "lng": -2.0093
      },
      {
        "nome": "Monte Urgull",
        "testo": "The fortified hill between the Parte Vieja and the port, with paths among trees and bastions, the Santa Cruz de la Mota castle and the Sacred Heart statue on top.",
        "come": "On foot from the Parte Vieja, stairs next to the port. Free entry to the park.",
        "quando": "All year; in rain the paths are slippery.",
        "tempo": "1-1.5 hours",
        "consiglio": "Shaded paths, good in the hot hours of summer.",
        "costo": "free",
        "lat": 43.32472,
        "lng": -1.98889
      },
      {
        "nome": "Peine del Viento",
        "testo": "Three steel sculptures by Eduardo Chillida anchored to the rocks at the end of the bay. They reach out over the sea and, with big waves, air and water burst out of holes in the paving of the little square.",
        "come": "On foot from La Concha, at the end of the promenade, or by bus to Ondarreta.",
        "quando": "In rough sea or at high tide, when the spray is strongest.",
        "tempo": "30 minutes",
        "consiglio": "In big waves stay away from the low platform.",
        "costo": "free",
        "lat": 43.32177,
        "lng": -2.00567
      },
      {
        "nome": "Basilica of Santa María del Coro",
        "testo": "The 18th-century Baroque church at the end of Calle Mayor, wedged between the houses and Monte Urgull. Its richly carved façade can only be seen in full from the street opposite, with the Buen Pastor cathedral lined up behind you on the other side of town.",
        "come": "On foot in the Parte Vieja, at the northern end of Calle Mayor.",
        "quando": "In the morning, outside service times.",
        "tempo": "20-30 minutes",
        "lat": 43.32399,
        "lng": -1.98669
      },
      {
        "nome": "Plaza de la Constitución",
        "testo": "The arcaded square at the heart of the Parte Vieja, with numbered balconies recalling the years when it hosted bullfights. Some of the best-known pintxo bars are around it, and the main festivals happen here, starting with the Tamborrada on 20 January.",
        "come": "On foot, in the heart of the Parte Vieja.",
        "quando": "In the evening, when the bars under the arcades fill up.",
        "tempo": "15-30 minutes",
        "costo": "free",
        "lat": 43.32361,
        "lng": -1.98489
      },
      {
        "nome": "San Telmo Museum",
        "testo": "The museum of Basque society, in a 16th-century Dominican convent at the foot of Urgull with a modern wing clad in perforated metal. It tells the history and culture of the Basque Country; the convent church holds the large gilded canvases by Josep Maria Sert.",
        "come": "On foot from Plaza Zuloaga, in the Parte Vieja. Tickets at the desk or online.",
        "quando": "Entry is free for everyone on Tuesdays; on rainy days it's the obvious shelter.",
        "tempo": "1h30-2 hours",
        "costo": "€10 full, €4 reduced; free on Tuesdays and for under-25s (2026 prices)",
        "orari": "Tuesday-Sunday 10am-7pm from November to March, 10am-8pm from April to October. Closed Mondays (except public holidays and long weekends), 1 and 20 January and 25 December.",
        "url": "https://www.santelmomuseoa.eus/",
        "lat": 43.32477,
        "lng": -1.9853
      },
      {
        "nome": "Santa Clara Island",
        "testo": "The islet in the middle of Concha bay, with a lighthouse, paths through the grass and a small beach at low tide. From here you see the city from the sea, with the Concha and the two hills on either side.",
        "come": "With the Motoras de la Isla boats from the harbor: the red line goes straight to the island in under 10 minutes, the blue line does a half-hour bay tour and lets you get off on the island.",
        "quando": "June to September, with a calm sea; off season departures are few and should be checked.",
        "tempo": "2-3 hours",
        "costo": "€5 return on the direct line, €8 for the bay tour with a stop on the island (2026)",
        "orari": "Direct line from 1 June to 30 September, 10am-7pm roughly every 30 minutes, last return from the island at 8pm; subject to weather and sea conditions.",
        "url": "https://www.motorasdelaisla.com/",
        "lat": 43.32068,
        "lng": -1.99967
      },
      {
        "nome": "Aquarium",
        "testo": "The aquarium on the harbor pier, opened in 1928. The highlight is the large oceanarium crossed by a transparent tunnel, with sand tiger sharks, rays and turtles; upstairs there's a section on Basque maritime history.",
        "come": "At the end of the harbor, on foot from the Parte Vieja along the pier. Tickets at the desk or online.",
        "quando": "On Tuesdays, Thursdays and Saturdays at noon you can watch the fish being fed in the oceanarium. Good with children and on rainy days.",
        "tempo": "1h30",
        "costo": "€16 adults, €8 children aged 4 to 12, €12 reduced for students and over-65s (2026)",
        "orari": "November-March and October: Tuesday-Friday 10am-7pm, weekends and holidays 10am-8pm, closed Mondays; April-June and September daily 10am-7pm (weekends 10am-8pm); July-August 10am-8pm. Ticket office closes an hour earlier; closed 1 and 20 January and 25 December.",
        "url": "https://aquariumss.com/tarifas/",
        "lat": 43.32288,
        "lng": -1.99206
      },
      {
        "nome": "Gros and Zurriola beach",
        "testo": "The neighborhood across the Urumea river, younger and less touristy than the Parte Vieja, with pintxo bars used mostly by people who live there. Zurriola is the beach open to the ocean, with steady waves: it's the surfing beach, with schools and rentals along the promenade.",
        "come": "On foot from the Parte Vieja across the Kursaal or Santa Catalina bridge.",
        "quando": "Morning for surfing, evening for the neighborhood bars.",
        "tempo": "Half a day",
        "costo": "free; surf lessons and board rental extra",
        "lat": 43.3264,
        "lng": -1.975
      },
      {
        "nome": "Miramar Palace and gardens",
        "testo": "The summer residence built in the late 19th century for Queen Maria Cristina, in English cottage style, on the knoll dividing the Concha from Ondarreta. The palace only opens for events, but the park around it is open and has one of the best views over the bay.",
        "come": "On foot along the Concha promenade, climbing the ramp halfway along the bay.",
        "quando": "At sunset, with the light on the bay.",
        "tempo": "30-45 minutes",
        "costo": "gardens free",
        "lat": 43.31455,
        "lng": -1.99772
      },
      {
        "nome": "Buen Pastor Cathedral",
        "testo": "The late 19th-century neo-Gothic cathedral in the middle of the 19th-century district, with a 75-meter bell tower, the tallest in the province. Outside is a square where locals meet in the evening.",
        "come": "On foot from the Boulevard along Calle Loiola, in the Área Romántica.",
        "quando": "During the day, outside mass times.",
        "tempo": "20-30 minutes",
        "lat": 43.3167,
        "lng": -1.98156
      },
      {
        "nome": "Kursaal and Paseo Nuevo",
        "testo": "Rafael Moneo's two glass cubes at the mouth of the Urumea host the September Film Festival. From the Kursaal the Paseo Nuevo runs around Monte Urgull above the sea to the harbor: in storms the waves break over the parapet.",
        "come": "On foot from Zurriola or the Parte Vieja; the Paseo Nuevo is a loop of about 2 km.",
        "quando": "With heavy seas for the waves, or at sunset.",
        "tempo": "45 minutes-1 hour",
        "costo": "walk free",
        "lat": 43.32444,
        "lng": -1.97908
      },
      {
        "nome": "La Bretxa market",
        "testo": "The historic market on the edge of the Parte Vieja, under the square of the same name, with fish, vegetable and cheese stalls where the city-center bars also stock up. It's the place to see the Cantabrian catch before it ends up on the counters.",
        "come": "On foot, at the entrance to the Parte Vieja from the Boulevard.",
        "quando": "Weekday mornings, when the stalls are full.",
        "tempo": "30-45 minutes",
        "lat": 43.32347,
        "lng": -1.98274
      },
      {
        "nome": "Getaria and Zarautz",
        "testo": "Two coastal towns west of San Sebastián. Getaria is known for grilled fish (turbot) and txakoli wine, Zarautz for its long beach and surfing.",
        "come": "Lurraldebus from the San Sebastián bus station or regional train to Zarautz. A half-day trip.",
        "quando": "All year. In Getaria grilled fish is eaten at lunch.",
        "tempo": "Half a day",
        "consiglio": "Try the fish in Getaria's venues that grill in the street.",
        "lat": 43.30446,
        "lng": -2.20374
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: breakfast and a walk on the Paseo de la Concha from the town hall to the Peine del Viento, stopping at the Miramar gardens.",
          "Late morning: Basilica of Santa María and Plaza de la Constitución, then La Bretxa market.",
          "Lunch: first pintxo round in the Parte Vieja.",
          "Afternoon: climb Monte Urgull and come back along the Paseo Nuevo to the Kursaal.",
          "Sunset: Monte Igueldo funicular for the view over the bay.",
          "Evening: second pintxo round in different bars from the first."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan.",
          "Day 2, morning: San Telmo Museum (free on Tuesdays), then the Aquarium at the end of the harbor.",
          "Day 2, afternoon: in summer the boat to Santa Clara island, otherwise Gros and Zurriola beach.",
          "Day 2, evening: pintxos in Gros, quieter and cheaper than the Parte Vieja."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above.",
          "Day 3, morning: Getaria by bus, seafront and harbor, lunch with grilled fish and txakoli.",
          "Day 3, afternoon: Zarautz for its long beach, or Chillida Leku (closed Tuesday and Wednesday) on the way back.",
          "Day 3, evening: last dinner in town, perhaps in a cider house inland during cider season."
        ]
      }
    ],
    zone: [
      {
        "nome": "Parte Vieja",
        "perChi": "Those who want to be among the bars",
        "testo": "Eat and go out on foot, but at night the noise lasts late and prices are higher. Rooms are small.",
        "fascia": "€120-250"
      },
      {
        "nome": "Center (Área Romántica)",
        "perChi": "Those looking for convenience and shops",
        "testo": "A 19th-century district between the Concha and the Boulevard, a short walk from the Parte Vieja. Quieter than the old town, with mid-range prices.",
        "fascia": "€130-280"
      },
      {
        "nome": "Gros",
        "perChi": "Surf lovers who want fewer tourists",
        "testo": "Across the Urumea river, near Zurriola beach. Bars and pintxos at lower prices, a walk from the old town across the bridge.",
        "fascia": "€110-220"
      },
      {
        "nome": "Antiguo and Ondarreta",
        "perChi": "Families and those who want a quiet beach",
        "testo": "The residential district at the end of the bay, between Ondarreta beach and Monte Igueldo. It's quiet in the evening and has a few less expensive hotels; the Parte Vieja is 30-40 minutes on foot along the seafront or a few minutes by bus.",
        "fascia": "€100-200"
      }
    ],
    gite: [
      {
        "nome": "Getaria and Zarautz",
        "distanza": "25 km, about 30 minutes",
        "come": "Lurraldebus bus from the bus station or by car along the coast.",
        "testo": "The fishing port with grills in the street, txakoli vineyards on the hills and the museum devoted to Cristóbal Balenciaga, who was born here. Zarautz, a few kilometers away, has the longest beach on the Basque coast."
      },
      {
        "nome": "Hondarribia",
        "distanza": "20 km, about 30 minutes",
        "come": "Lurraldebus bus or by car; from the harbor a small boat crosses the Bidasoa to Hendaye, in France.",
        "testo": "The walled town on the border, with its uphill medieval center, the castle of Charles V and the Marina district with colorful fishermen's houses and wooden balconies. It pairs well with an evening of pintxos in the Marina bars."
      },
      {
        "nome": "Chillida Leku",
        "distanza": "about 10 km, 20 minutes by car",
        "come": "By car or taxi towards Hernani; there's free parking for visitors.",
        "testo": "The open-air museum of Eduardo Chillida, the sculptor of the Peine del Viento: about forty iron and granite sculptures scattered across a meadow around a 16th-century farmhouse. Ticket €14, open 10am-5pm, closed Tuesday and Wednesday (2026)."
      },
      {
        "nome": "Pasaia",
        "distanza": "7 km, 15 minutes",
        "come": "City bus, or on foot along the coastal path over Monte Ulía, about 2-3 hours.",
        "testo": "The port at the end of a narrow inlet, with Pasai Donibane, a single street of houses overlooking the water, and the house where Victor Hugo lived. The two banks are linked by a small ferry that shuttles back and forth all day."
      }
    ],
    sapori: [
      {
        "nome": "Pintxos",
        "testo": "Snacks on a slice of bread: gilda (olive, anchovy and pepper), tortilla, jamón, cod. At the bar you take them with your hands."
      },
      {
        "nome": "Txakoli",
        "testo": "Basque white wine, lightly sparkling, poured from a height into the glass. Drunk mostly in summer."
      },
      {
        "nome": "Sidra",
        "testo": "Natural Basque cider, not carbonated, served in inland cider houses with a set menu of cod omelette, steak and cheese."
      },
      {
        "nome": "Bacalao al pil-pil",
        "testo": "Cod cooked slowly in olive oil and garlic until it forms an emulsified sauce."
      },
      {
        "nome": "Tarta de queso",
        "testo": "The Basque cheesecake, baked tall and creamy with a burnt top, made famous by a bar in the Parte Vieja."
      }
    ],
    attenzioni: [
      "Prices: the most touristy bars in the Parte Vieja charge a lot for one pintxo. Look at the counter and the price list before ordering.",
      "Rain and cool weather even in summer: bring a waterproof jacket.",
      "Sea at La Concha: check flags and tides before entering, since there are currents near the rocks.",
      "Pickpockets in the crowd in the Parte Vieja on weekends and during the August festival (Semana Grande): keep your bag in front.",
      "At cider houses and restaurants book on weekends: the good places fill up."
    ],
    faq: [
      {
        "domanda": "How many days do you need in San Sebastián?",
        "risposta": "Two days are enough for the Concha, the Parte Vieja, the two hills and two evenings of pintxos. With three you can add Getaria or Hondarribia and a museum at a relaxed pace."
      },
      {
        "domanda": "How does a pintxo crawl work?",
        "risposta": "You walk into a bar, take one or two pintxos and a glass, then move on to the next bar. Cold ones are taken from the counter, hot ones are ordered out loud, and you pay at the end by saying what you had."
      },
      {
        "domanda": "How much is the Monte Igueldo funicular?",
        "risposta": "In 2026 a return ticket costs €5.50 for adults and €2.50 for children up to 7, and includes entry to the grounds at the top. The amusement park rides are paid separately."
      },
      {
        "domanda": "Is it better to stay in San Sebastián or Bilbao?",
        "risposta": "For food and the sea, San Sebastián, which costs more. The two cities are about 1h20 apart by bus: on a tight budget you can sleep in Bilbao and come here for the day, giving up the pintxo evenings."
      },
      {
        "domanda": "Can you swim in San Sebastián?",
        "risposta": "Yes, from June to September: the Concha and Ondarreta are sheltered and shallow, while Zurriola is open to the waves and popular with surfers. At high tide the Concha shrinks to a strip."
      },
      {
        "domanda": "When is the best time to visit San Sebastián?",
        "risposta": "June to September for swimming and drier weather. September also brings the Film Festival, which fills the hotels; in winter it rains often, but the bars are full and accommodation prices drop."
      }
    ],
    esperienzeSlugs: ['pintxos-crawl-donostia'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: "La Concha beach in San Sebastián with Santa Clara island and Monte Igueldo in the background",
    immagine: '/images/spagna/san-sebastian.jpg',
  },
  {
    slug: 'bilbao',
    paeseSlug: 'spagna',
    ordine: 6,
    nome: 'Bilbao',
    tipologia: ['città', 'arte', 'architettura'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The former Basque industrial capital. In 1997 the Frank Gehry Guggenheim Museum opened and the term \"Bilbao effect\" was born, for an entire city regenerated by a single building. Today it's one of the liveliest cultural capitals in the north of Spain, with a historic center (the Casco Viejo) left almost as it was next to the skyscrapers on the Nervión estuary.",
    percheAndarci:
      "The Guggenheim alone is worth the trip, for the titanium building that reflects light differently at every hour and for the contemporary art collections. The Casco Viejo, with its medieval \"Siete Calles,\" then has a pintxo scene as serious as San Sebastián's, with fewer tourists.",
    cosaVedere: [
      "The Guggenheim Museum Bilbao, Frank Gehry's titanium building on the Nervión estuary, with Jeff Koons's \"Puppy\" and Louise Bourgeois's \"Maman\" outside",
      "The Casco Viejo, the \"Siete Calles\" of the medieval old town, with the Cathedral of Santiago",
      "The Mercado de la Ribera, one of the largest covered markets in Europe, on the riverfront",
      "The Puente de Vizcaya (in Portugalete, just outside the city), the oldest transporter bridge in the world, a UNESCO World Heritage site",
      "The Ensanche district, the bourgeois nineteenth-century Bilbao, with shops and Art Nouveau architecture",
    ],
    cosaFare: [
      "Visit the Guggenheim early in the morning, when the light on the titanium is most beautiful and the lines shorter",
      "A pintxo round in the Casco Viejo, less touristy and cheaper than San Sebastián's",
      "Cross the Puente de Vizcaya on the suspended gondola, or climb to the panoramic walkway",
      "A walk along the Nervión from the Guggenheim to the Casco Viejo",
    ],
    doveDormire: "The Casco Viejo for the historic atmosphere and pintxos; the Ensanche, near the Guggenheim, for convenience and connections.",
    doveMangiare: "The same pintxo culture as San Sebastián but with a more urban and less touristy character, concentrated in the Siete Calles of the Casco Viejo; bacalao al pil-pil and txuletón (grilled steak) are the highlights of Basque restaurant cooking.",
    comeArrivare:
      "Bilbao airport (Loiu) is about 12 km from the centre: the Bizkaibus A3247 leaves from outside arrivals and reaches the centre in about 20 minutes, for about €5 (less with the Barik card); a taxi takes a quarter of an hour. The direct Pesa bus to San Sebastián also leaves from the airport, about 1h15 and €14-17. From Madrid it takes about 4h30-5h by train or bus; from San Sebastián about 1h20 by bus.",
    comeSpostarsi: "The metro (Euskotren/Metro Bilbao line) is efficient for reaching the Guggenheim and outlying areas; the historic center is covered on foot.",
    periodoMigliore: "June-September, like the rest of the North: cool and rainy climate all year, with summer as the most stable window.",
    costi:
      "Guggenheim €12 full price in November 2026 (the rate changes with exhibitions and was higher in summer), free under 18; Museo de Bellas Artes €12, free on Tuesdays; combined ticket for both museums €16. Vizcaya Bridge: gondola crossing €0.60, walkway €11. A round of pintxos with a drink costs about €20-30 per person. Indicative daily budget per person, sharing a double room: low €70-90, mid €120-160, high over €230.",
    erroriDaEvitare: [
      "Visiting the Guggenheim on a Monday without checking first: the museum is closed almost every Monday, except for a seasonal summer extension",
      "Treating Bilbao as a quick stop between San Sebastián and Cantabria: the Casco Viejo deserves at least a full evening",
      "Underestimating the rain: always bring a light raincoat, regardless of the season",
    ],
    luoghi: [
      {
        "nome": "Museo Guggenheim Bilbao",
        "testo": "Frank Gehry's museum, opened in 1997, all in titanium, glass and limestone, on the bank of the Nervión. Outside are Jeff Koons's Puppy, covered in flowers, and Maman, Louise Bourgeois's spider. Inside, temporary exhibitions alternate with a contemporary art collection, including Richard Serra's The Matter of Time.",
        "come": "Metro to Moyúa and then on foot, or tram to the Guggenheim stop. You can also just see the outside, which is free, with the riverside walk.",
        "quando": "Tuesday to Sunday 10am-7pm; until 8pm in Holy Week and from 15 June to 13 September. Closed on Mondays, except for some special openings, including the summer Mondays. Closed on 25 December and 1 January. Early in the morning the light on the titanium is best.",
        "tempo": "2-3 hours inside, 30 minutes for the exterior",
        "costo": "12 euros full price, free under 18 (rate on the official website in November 2026: it changes with the season and the exhibitions)",
        "url": "https://www.guggenheim-bilbao.eus/",
        "consiglio": "Buy the ticket online and see the Serra rooms first; then the exterior at sunset.",
        "orari": "Tuesday-Sunday 10am-7pm; until 8pm in Holy Week and from 15 June to 13 September. Closed on Mondays, except summer Mondays and a few dates (2026). Closed 25 December and 1 January; closes at 5pm on 24 and 31 December.",
        "lat": 43.26883,
        "lng": -2.9341
      },
      {
        "nome": "Casco Viejo and Siete Calles",
        "testo": "The medieval old town, with the seven parallel streets from which the city was born, the Santiago cathedral and Plaza Nueva, surrounded by arcades. Here is one of the best pintxos scenes in the country.",
        "come": "On foot or by metro to Casco Viejo. Plaza Nueva is the meeting point.",
        "quando": "Pintxos from noon and from 19. On Thursday evening and weekends the district is full.",
        "tempo": "2-3 hours",
        "consiglio": "Try the bars close to Plaza Nueva and those on the side streets, less touristy.",
        "costo": "free",
        "lat": 43.25722,
        "lng": -2.92389
      },
      {
        "nome": "Museo de Bellas Artes",
        "testo": "The city's fine arts museum, five minutes from the Guggenheim, with a collection running from the Middle Ages to the 20th century: Spanish masters such as El Greco, Zurbarán and Goya and a large section of Basque painting. It is the classic complement to the Guggenheim and takes a morning.",
        "come": "Metro to Plaza Elíptica or tram to Abandoibarra or Guggenheim. The museum is in Doña Casilda park, on Plaza Eduardo Chillida.",
        "quando": "On Tuesdays entry is free but only some rooms are open: for the full collection pick another day.",
        "tempo": "1.5-2 hours",
        "costo": "€12 full, €6 reduced, free under 18; combined with the Guggenheim €16 (2026)",
        "orari": "Monday and Wednesday-Saturday 10am-7pm (collections close at 6pm); Tuesday 10am-6pm with fewer spaces; Sunday 10am-3pm. Closed 25 December, 1 and 6 January.",
        "lat": 43.26597,
        "lng": -2.93785,
        "url": "https://www.bilbaomuseoa.eus/",
        "consiglio": "If you visit both museums, the combined ticket saves money."
      },
      {
        "nome": "Mercado de la Ribera",
        "testo": "The covered market on the riverfront, opened in 1929, rationalist in style with Art Deco decoration: one of the largest covered markets in Europe. Fish, meat and fruit stalls and an area with pintxos.",
        "come": "On foot from the Casco Viejo, a few minutes away, on the bank of the Nervión.",
        "quando": "In the morning for the stalls. Check hours on weekends and holidays.",
        "tempo": "1 hour",
        "consiglio": "Have a pintxo or a coffee in the food area on the upper floor.",
        "costo": "free entry",
        "orari": "Stalls are closed on Sundays.",
        "lat": 43.25552,
        "lng": -2.92424
      },
      {
        "nome": "Plaza Nueva",
        "testo": "The 19th-century arcaded square of the Casco Viejo, closed in by neoclassical buildings and ringed by pintxo bars. It is the meeting point of the old town, both at aperitivo time and in the evening.",
        "come": "On foot from the Casco Viejo, or metro to Casco Viejo station, a few steps away.",
        "quando": "On Sunday mornings there is a stamp and coin market under the arcades; in the evening for pintxos.",
        "tempo": "30 minutes-1 hour, longer if you stop to eat",
        "costo": "free",
        "lat": 43.25901,
        "lng": -2.92269
      },
      {
        "nome": "Santiago Cathedral",
        "testo": "The Gothic cathedral of the Casco Viejo, dedicated to Saint James, with a cloister and a facade rebuilt in the 19th century. Bilbao was a stop on the Camino del Norte and the church keeps that link.",
        "come": "On foot, on Plaza de Santiago, in the heart of the Siete Calles. Tourist visits run at different times from services.",
        "quando": "Outside mass times; hours change for religious reasons.",
        "tempo": "30-45 minutes",
        "lat": 43.25721,
        "lng": -2.9237,
        "url": "https://catedralbilbao.com/"
      },
      {
        "nome": "Riverside walk, Abandoibarra and Zubizuri",
        "testo": "The Nervión riverfront, redone after the shipyards closed, links the Casco Viejo to the Guggenheim with parks, sculptures and bridges. The Zubizuri, Santiago Calatrava's white footbridge, is the most photographed point of the walk.",
        "come": "On foot from Plaza Nueva or the Mercado de la Ribera along the left bank; the tram runs parallel if you want to ride back.",
        "quando": "At sunset or in the evening, when the museum's titanium catches the light. In the rain the Zubizuri deck is slippery.",
        "tempo": "1 hour at an easy pace",
        "costo": "free",
        "lat": 43.26632,
        "lng": -2.9278
      },
      {
        "nome": "Puente de Vizcaya (Portugalete)",
        "testo": "A transporter bridge from 1893, still working and a UNESCO site since 2006. A hanging gondola carries people and cars from one bank of the estuary to the other in a few minutes. Lifts in the pillars take you up to the high walkway.",
        "come": "Metro line 1 to Areeta (Getxo) or line 2 to Portugalete, one for each bank.",
        "quando": "Runs all year; check hours and prices for the crossing and the walkway.",
        "tempo": "1-2 hours",
        "url": "https://puente-colgante.com/",
        "consiglio": "Cross by gondola and come back by metro, to see the bridge from below.",
        "costo": "gondola €0.60 per person; upper walkway €11 return, €9 reduced, €14 with audio guide (2026)",
        "orari": "The gondola runs continuous crossings of about 8 minutes. Walkway 10am-8pm from Easter to October, 10am-2pm and 4pm-7pm from November to Easter; last entry 20 minutes before closing. In late 2026 the lift was on reduced hours because of a fault: check the website.",
        "lat": 43.32306,
        "lng": -3.01694
      },
      {
        "nome": "Funicular de Artxanda",
        "testo": "A 1915 funicular that climbs Artxanda hill above the city, with a view over all of Bilbao, the Guggenheim and the estuary.",
        "come": "The lower station is a few minutes from the center, across the river.",
        "quando": "At sunset, with a clear sky. Check hours on the operator's site.",
        "tempo": "1 hour",
        "consiglio": "Go up around sunset time and stop for a beer on the hill.",
        "orari": "October to May Monday-Saturday 7:15am-10pm, Sundays and holidays 8:15am-10pm; June to September until 11pm on Fridays, Saturdays and holiday eves (hours from unofficial sources, to be checked).",
        "lat": 43.2713,
        "lng": -2.92253
      },
      {
        "nome": "Azkuna Zentroa (Alhóndiga)",
        "testo": "The early 20th-century former wine warehouse, turned by Philippe Starck into a cultural centre. In the atrium there are dozens of columns, each one different, in brick, marble, metal and wood; above are cinemas, a library, gyms and a pool with a transparent bottom you can see from below.",
        "come": "On foot from Gran Vía and Plaza Moyúa, or metro to Indautxu.",
        "quando": "On a rainy afternoon, combined with a walk through the Ensanche.",
        "tempo": "30 minutes-1 hour",
        "lat": 43.25969,
        "lng": -2.93712,
        "url": "https://www.azkunazentroa.eus/"
      },
      {
        "nome": "Euskal Museoa (Basque Museum)",
        "testo": "The museum of Basque ethnography, in a 17th-century former college in the Casco Viejo. It covers fishing, shepherding, crafts and festivals of the Basque Country; in the cloister stands the Mikeldi, a prehistoric stone idol shaped like an animal.",
        "come": "On foot, on Plaza Miguel de Unamuno, at the entrance to the Casco Viejo.",
        "quando": "Before walking the Siete Calles, to get the background on Basque culture.",
        "tempo": "1 hour",
        "lat": 43.25803,
        "lng": -2.92185
      },
      {
        "nome": "Basilica of Begoña",
        "testo": "The sanctuary of the patron saint of Biscay, on a hill above the Casco Viejo. From the churchyard you see the old town from above, and it is one of the locals' classic climbs.",
        "come": "On foot up the Mallona steps from Plaza de Unamuno, or with the public Begoña lift from the Casco Viejo.",
        "quando": "In the morning, combined with the Basque Museum at the foot of the steps.",
        "tempo": "1 hour including the climb",
        "costo": "free entry",
        "lat": 43.25877,
        "lng": -2.91374
      },
      {
        "nome": "Itsasmuseum",
        "testo": "The maritime museum of the estuary, on the site of the former Euskalduna shipyards, next to the conference centre. It covers the port, shipbuilding and the city's bond with the water; outside stands the red Carola crane, a symbol of the industrial past.",
        "come": "On foot from the Guggenheim along the river in about 15 minutes, or tram to Euskalduna.",
        "quando": "On a rainy day or when travelling with children.",
        "tempo": "1-1.5 hours",
        "orari": "Tuesday-Sunday 11am-7pm; closed Mondays.",
        "lat": 43.2664,
        "lng": -2.9462,
        "url": "https://www.itsasmuseum.eus/"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Guggenheim at the 10am opening, with Puppy and Maman outside before going in.",
          "Late morning: riverside walk to the Zubizuri and the Mercado de la Ribera.",
          "Lunch: pintxos on Plaza Nueva or upstairs at the market.",
          "Afternoon: Siete Calles, Santiago Cathedral and the Basque Museum.",
          "Late afternoon: Artxanda funicular for sunset over the city.",
          "Evening: second round of pintxos in the Casco Viejo."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Guggenheim, riverside, Ribera, Casco Viejo and Artxanda as in the one-day plan.",
          "Day 2, morning: Museo de Bellas Artes (with the combined ticket) and Doña Casilda park.",
          "Day 2, lunch: Ensanche, Gran Vía and Azkuna Zentroa.",
          "Day 2, afternoon: metro to Portugalete or Areeta, gondola crossing of the Vizcaya Bridge and the upper walkway.",
          "Day 2, evening: pintxo dinner on Plaza Nueva."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as in the two-day plan.",
          "Day 3, morning: San Juan de Gaztelugatxe by car (about 45 minutes), booking access if it is a limited-entry day.",
          "Day 3, lunch: Bermeo or Mundaka, on the coast.",
          "Day 3, afternoon: Gernika, with the Casa de Juntas and the tree, then back to Bilbao.",
          "Day 3, evening: Basilica of Begoña at sunset and a last dinner in the Casco Viejo."
        ]
      }
    ],
    zone: [
      {
        "nome": "Casco Viejo",
        "perChi": "Those who want pintxos and atmosphere",
        "testo": "Rooms in the historic district, convenient for the bars. In the evening it is noisy on weekends, especially Thursday.",
        "fascia": "€70-150"
      },
      {
        "nome": "Ensanche and Guggenheim area",
        "perChi": "Those looking for convenience and connections",
        "testo": "A 19th-century district with shops, metro and tram. Quieter in the evening and a few minutes on foot from the museum.",
        "fascia": "€90-180"
      },
      {
        "nome": "Abandoibarra",
        "perChi": "Those who want the Guggenheim outside the window",
        "testo": "The new riverside district between the museum and the Euskalduna palace, with large hotels and rooms overlooking the river. It is quiet in the evening but has few bars: for pintxos you walk or take the tram to the Casco Viejo.",
        "fascia": "€120-250"
      },
      {
        "nome": "Bilbao La Vieja and San Francisco",
        "perChi": "Budget travellers and fans of alternative bars",
        "testo": "On the bank opposite the Casco Viejo, linked by the San Antón bridge, it is the neighbourhood of young bars, galleries and world cuisines. Prices are the lowest in the centre, but some streets are less well kept at night.",
        "fascia": "€60-120"
      }
    ],
    gite: [
      {
        "nome": "San Juan de Gaztelugatxe",
        "distanza": "34 km, about 45 minutes by car",
        "come": "By car towards Bakio; from the car park you walk down and then climb the steps to the hermitage. On the busiest days a free online booking is required, to be shown at the entrance.",
        "testo": "The hermitage on an islet joined to the coast by a stone bridge and a long stairway, one of the most photographed places in the Basque Country. The way down is easy, the way back up is tiring: good shoes and a couple of hours are needed."
      },
      {
        "nome": "Gernika",
        "distanza": "38 km, 40 minutes by car or about 1 hour by train",
        "come": "Euskotren train from Atxuri station or by car; the centre is walkable.",
        "testo": "The symbolic town of the Basque Country, bombed in 1937 and painted by Picasso. You can see the Casa de Juntas with the Gernika tree, the Peace Museum and the mural reproduction of Guernica on a street in the centre. It pairs well with Mundaka and the Urdaibai reserve."
      },
      {
        "nome": "San Sebastián",
        "distanza": "about 1h20 by bus",
        "come": "Direct buses from the Termibus bus station, roughly every hour.",
        "testo": "La Concha, Monte Urgull and the pintxo crawl in the Parte Vieja. It works as a day trip, but the city deserves at least one night: it has its own page."
      },
      {
        "nome": "Zumaia and the flysch",
        "distanza": "79 km, about 1 hour by car",
        "come": "By car on the motorway towards San Sebastián, exit for Zumaia; Itzurun beach is a walk from the village.",
        "testo": "The layered flysch cliffs enclose Itzurun beach and are among the most famous landscapes of the Basque coast. At low tide the rock platform is exposed."
      }
    ],
    sapori: [
      {
        "nome": "Pintxos",
        "testo": "In the Casco Viejo you find gildas, tortillas, squid and hot dishes. You take them at the bar and pay at the end."
      },
      {
        "nome": "Bacalao al pil-pil",
        "testo": "Cod with olive oil and garlic sauce, a classic dish of Basque restaurants."
      },
      {
        "nome": "Txuletón",
        "testo": "Grilled beef rib, thick, served with coarse salt. Shared between two."
      },
      {
        "nome": "Marmitako",
        "testo": "A stew of tuna and potatoes, a seafarers' dish with pepper."
      },
      {
        "nome": "Txakoli",
        "testo": "Basque white wine, lightly sparkling, perfect with pintxos."
      }
    ],
    attenzioni: [
      "Guggenheim: check closing days and prices before going. Fares change by season.",
      "Frequent rain all year: bring a light raincoat.",
      "Casco Viejo at weekends and during Aste Nagusia, the August festival: crowded, and pickpocketing is possible.",
      "Metro and tram: validate your ticket or reloadable card at the entrance."
    ],
    faq: [
      {
        "domanda": "How many days do you need in Bilbao?",
        "risposta": "One day is enough for the Guggenheim, the Casco Viejo and the riverside. With two you add the Museo de Bellas Artes and the Vizcaya Bridge; with three, San Juan de Gaztelugatxe and Gernika."
      },
      {
        "domanda": "Do you need to book the Guggenheim?",
        "risposta": "It isn't required, but an online ticket avoids the queue in summer and on long weekends. The museum is closed on most Mondays, except those from 15 June to early September."
      },
      {
        "domanda": "How much does the Guggenheim Bilbao cost?",
        "risposta": "In November 2026 a full ticket costs €12, reduced €6, free under 18; the price changes with exhibitions. There is a €16 combined ticket with the Museo de Bellas Artes."
      },
      {
        "domanda": "Do you need to book San Juan de Gaztelugatxe?",
        "risposta": "Only on limited-entry days, meaning high season and public holidays: booking is free and done online. On other days access is open."
      },
      {
        "domanda": "Bilbao or San Sebastián as a base?",
        "risposta": "San Sebastián has the beach and the most famous pintxos, Bilbao the museums, slightly cheaper hotels and better airport links. With 4-5 days it pays to sleep in both."
      },
      {
        "domanda": "How do you get from Bilbao airport to the centre?",
        "risposta": "The Bizkaibus A3247 reaches the centre in about 20 minutes for about €5, less with the Barik card. The direct bus to San Sebastián leaves from the same airport."
      }
    ],
    esperienzeSlugs: ['guggenheim-bilbao'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: "The titanium Guggenheim Museum in Bilbao along the Nervión promenade, with the red La Salve bridge in the background",
    immagine: '/images/spagna/bilbao.jpg',
  },
  {
    slug: 'santiago-compostela-camino-del-norte',
    paeseSlug: 'spagna',
    ordine: 7,
    nome: 'Santiago de Compostela and the Camino del Norte',
    tipologia: ['cammino', 'cultura', 'natura'],
    giorniConsigliati: '2-3 days for Santiago, plus the time chosen for a stretch of the Camino',
    visitataPersonalmente: true,
    introduzione:
      "The final destination of all the Camino de Santiago routes: the Cathedral holds, according to tradition, the relics of the apostle James. The Camino del Norte is the coastal variant that runs from Irún through the Basque Country, Cantabria, Asturias and Galicia for about 825-865 km. It's less trodden than the Camino Francés and passes through the most varied landscapes of northern Spain: Atlantic cliffs, beaches, mountains and, at the end, green and rainy Galicia.",
    percheAndarci:
      "Even a few days on the Camino del Norte, for example along the Cantabrian or Asturian coast, show the real Spanish North, far from the heat and the crowds of the south. And Santiago de Compostela, at the end, has an atmosphere of arrival that no other Spanish city has.",
    cosaVedere: [
      "The Cathedral of Santiago de Compostela, with the Romanesque Pórtico da Gloria and the botafumeiro, the huge censer that swings along the nave at the main Masses",
      "The Praza do Obradoiro, the square in front of the Cathedral's Baroque facade, the symbolic arrival point of all the Caminos",
      "The historic center of Santiago, a UNESCO World Heritage site, with one of the oldest universities in Spain",
      "Along the Camino del Norte: San Sebastián and Bilbao (see the dedicated pages), Santander and Santillana del Mar in Cantabria, the Asturian Costa Verde around Llanes and Gijón",
      "The Museum of the Pilgrimages in Santiago, to put the history of the Camino in context before or after the Cathedral visit",
    ],
    cosaFare: [
      "Walk a stretch of the Camino del Norte, even just a few days: the coast between San Sebastián and Bilbao and the Asturian one around Llanes are among the most beautiful stretches",
      "Attend the pilgrim's Mass at noon in the Santiago Cathedral, when on certain occasions the botafumeiro swings",
      "Collect the Compostela, the pilgrimage certificate, at the Pilgrim's Office, if you have walked at least the last 100 km on foot (or 200 by bike)",
    ],
    doveDormire:
      "In Santiago, the historic center around the Cathedral. Along the Camino the traditional choice is albergues (pilgrim hostels, often with bunk beds and very low prices); those who want more comfort find pensiones and small hotels in the coastal towns.",
    doveMangiare: "In Galicia you eat pulpo á feira (boiled octopus with paprika and oil, served on a wooden plate) and seafood; along the Cantabrian and Asturian coast, the catch of the day and fabada asturiana (stew of beans, chorizo and morcilla).",
    comeArrivare: "Santiago-Rosalía de Castro Airport, well connected with Europe. To start a stretch of the Camino del Norte: Irún (French border) or any of the intermediate stages, reachable by train or bus from the respective cities (San Sebastián, Bilbao, Santander).",
    comeSpostarsi: "On foot along the Camino, following the yellow arrows and the shells that mark the route; in Santiago, the historic center is entirely pedestrian.",
    periodoMigliore:
      "May-September for walking; the driest period runs from June to early September. The Camino can be done all year, but in winter and late autumn it often rains and the days are short.",
    costi: "Cathedral and museum complex: the price varies by section (some areas are free); an albergue along the Camino costs between €10 and €20 a night.",
    erroriDaEvitare: [
      "Underestimating the elevation gain and terrain of the Camino del Norte: it's more demanding and less equipped than the Camino Francés, with exposed stretches of coastal trail",
      "Not booking the albergue in the peak months (June-September) along the most popular stretches: beds, especially in small villages, run out",
      "Arriving in Santiago without the pilgrim's credentials stamped along the route, if you want to obtain the Compostela",
    ],
    luoghi: [
      {
        "nome": "Cathedral of Santiago de Compostela",
        "testo": "A destination for pilgrims for eleven centuries, it holds, according to tradition, the relics of the apostle James. Inside are the Romanesque Pórtico da Gloria, the crypt with the urn and the botafumeiro, the huge incense burner that swings along the transept in some celebrations. From Praza do Obradoiro you see the Baroque facade.",
        "come": "On foot from the old town, which is entirely pedestrian. Museums, the Pórtico da Gloria and guided tours are booked separately on the cathedral website.",
        "quando": "From 16 October 2026, until further notice, pilgrim masses are held in the church of San Agustín (9:30, 12:00 and 19:30) because of works in the main chapel; the 7:30 mass stays in the cathedral. The botafumeiro does not swing at every mass: check the cathedral website.",
        "tempo": "1-2 hours",
        "url": "https://www.catedraldesantiago.es/",
        "consiglio": "Arrive early for the pilgrim mass to get a seat; afterwards, stay in Praza do Obradoiro to watch the arrivals."
      },
      {
        "nome": "Pilgrim's Office",
        "testo": "This is where you collect the Compostela, the pilgrimage certificate, by showing your stamped credential. You need at least the last 100 continuous km on foot or on horseback, or 200 km by bike; if you only do the minimum, you must stamp at the start and end of each stage, with the date.",
        "come": "A few minutes' walk from the cathedral, at Rúa das Carretas 33. You take a number with a QR code that shows the queue in real time.",
        "quando": "Every day 10:00-19:00, closed on 25 December and 1 January. At peak times same-day collection is not guaranteed.",
        "tempo": "30 minutes-2 hours, depending on the queue",
        "url": "https://oficinadelperegrino.com/",
        "consiglio": "Go in the early afternoon or early morning, when the line is shorter."
      },
      {
        "nome": "Old town and Mercado de Abastos",
        "testo": "The old town, a UNESCO site, is made of stone streets, arcades and squares such as the Quintana and Praza das Praterías. The Mercado de Abastos, the covered market, has fish, cheese and octopus stalls.",
        "come": "On foot. The market is a few minutes from the cathedral.",
        "quando": "The market in the morning. Rain is frequent: bring a raincoat.",
        "tempo": "2-3 hours",
        "consiglio": "Eat pulpo á feira in the places next to the market, which cook to order."
      },
      {
        "nome": "Camino del Norte: San Sebastián-Bilbao section",
        "testo": "The Camino del Norte follows the Cantabrian coast from Irún to Santiago. The Basque stretch climbs constantly between cliffs and woods, with long stages. With only a few days you can walk a single stage, for example San Sebastián-Zarautz.",
        "come": "Departure from the San Sebastián or Bilbao stations. Waymarks are yellow arrows and shells. Bus or train are used to return.",
        "quando": "May to September. In winter it rains a lot and days are short.",
        "tempo": "One stage is 5-7 hours on foot",
        "consiglio": "Start early and carry water; refreshment points are rare outside villages."
      },
      {
        "nome": "Finisterre and Muxía",
        "testo": "After Santiago many pilgrims walk on for a few days to Finisterre, on the Atlantic coast, and Muxía. For the Romans Finisterre was the \"end of the world\": today there is a lighthouse on the cliff.",
        "come": "On foot from Santiago in a few days, or by bus from Santiago bus station.",
        "quando": "Summer. At sunset those who walk stop at the lighthouse.",
        "tempo": "a day from Santiago by bus, a few days on foot",
        "consiglio": "Check bus times for your chosen period, because they change by season."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Praza do Obradoiro and Pórtico da Gloria.",
          "Late morning: Cathedral and crypt.",
          "Late morning: Pilgrim mass (until further notice in the church of San Agustín).",
          "Early afternoon: Lunch with octopus and pimientos de Padrón.",
          "Afternoon: Pilgrim's Office if you arrived on foot.",
          "Late afternoon: Walk in the old town and the Alameda park."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan.",
          "Day 2, morning: Mercado de Abastos and Praza das Praterías.",
          "Day 2, afternoon: Pilgrimage Museum or a visit to the cathedral roofs.",
          "Day 2, evening: dinner with Galician products."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above.",
          "Day 3: bus trip to Finisterre and Muxía, back in the evening."
        ]
      }
    ],
    zone: [
      {
        "nome": "Old town",
        "perChi": "Those who want to be near the cathedral",
        "testo": "Rooms in stone buildings, a step from everything. In the evening pilgrims arrive in the square and there is movement until late. Prices are higher."
      },
      {
        "nome": "Ensanche and station area",
        "perChi": "Those arriving by train or bus who want lower costs",
        "testo": "Walkable from the centre, but outside the monumental area. A quieter area, with hotels and guesthouses."
      }
    ],
    sapori: [
      {
        "nome": "Pulpo á feira",
        "testo": "Boiled octopus, cut with scissors, dressed with oil, salt and paprika, served on a wooden plate."
      },
      {
        "nome": "Empanada gallega",
        "testo": "A savory pie filled with tuna, meat or seafood, sold by the slice."
      },
      {
        "nome": "Pimientos de Padrón",
        "testo": "Green peppers fried with coarse salt: some are spicy."
      },
      {
        "nome": "Tarta de Santiago",
        "testo": "An almond cake with a Cross of Saint James on top in powdered sugar."
      },
      {
        "nome": "Albariño",
        "testo": "White wine from Galicia, dry and fragrant, ideal with fish."
      }
    ],
    attenzioni: [
      "Frequent rain in Galicia in every season: poncho, waterproof shoes and a change of socks.",
      "Albergue in peak months (June-September): book ahead in small villages.",
      "Pilgrim credential: if you only walk the minimum 100 km, stamp it at the start and end of each stage, with the date, to get the Compostela.",
      "Camino del Norte: constant climbs and exposed stretches of coastal path. Do not underestimate the elevation gain.",
      "Cathedral: museums, the Pórtico da Gloria and guided tours are booked on the official site; since October 2026 there are works in the main chapel."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: "The Baroque facade of the Cathedral of Santiago de Compostela on the Praza do Obradoiro in afternoon light",
    immagine: '/images/spagna/santiago-compostela-camino-del-norte.jpg',
  },

  // --- BALEARI ---
  {
    slug: 'mallorca',
    paeseSlug: 'spagna',
    ordine: 8,
    nome: 'Mallorca',
    tipologia: ['isola', 'mare', 'montagna'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "The largest and most complete of the Balearic Islands. It has Palma, a real capital with a Gothic cathedral on the sea, and the Serra de Tramuntana, the UNESCO World Heritage mountain range that runs for 90 km along the northwest coast: the green part of the island, which those who come for the beaches often don't see.",
    percheAndarci:
      "On the same island there's the Mediterranean capital life of Palma and a terraced mountain range you don't expect in the Balearics. The Serra de Tramuntana is an agricultural landscape shaped by people over centuries, and that's why UNESCO declared it a cultural heritage site in 2011.",
    cosaVedere: [
      "The Cathedral of Palma (La Seu), Gothic, directly on the sea, with Antoni Gaudí's interventions inside",
      "The historic center of Palma, with the Almudaina Palace and the alleys of the Barrio Gótico",
      "The Serra de Tramuntana: Valldemossa, the stone village where Chopin and George Sand stayed, and Sóller, reachable by a vintage early-20th-century train",
      "Port de Sóller and the rugged coast below the Serra",
      "The beaches of the east coast, more regular and less scenic than those of the north but better suited to families",
    ],
    cosaFare: [
      "The historic Palma-Sóller train (running since 1912) through the Serra de Tramuntana",
      "A stretch of the GR221, the \"Dry Stone Route\" that crosses the Serra: a stage of a few hours is enough to understand the terraced landscape",
      "Get lost in the historic center of Palma in the evening, when the heat eases and the alleys come alive",
    ],
    confronti: [
      {
        titolo: 'Which Balearic island to choose (or how to split them across several days)',
        introduzione:
          "Mallorca, Ibiza and Minorca have very different character, pace and services. Before booking it's worth knowing what sets them apart.",
        opzioni: [
          {
            nome: 'Mallorca',
            sintesi: "The largest and most complete: a real capital (Palma), mountains (Serra de Tramuntana) and several different types of coast on the same island.",
            pro: [
              "It has a city, mountains and several types of beach, with no need to go elsewhere",
              "The internal transport network (trains, buses) is the most developed of the three islands",
              "Less tied than Ibiza to the image of nightlife",
            ],
            contro: [
              "The most touristy coast (Playa de Palma, Magaluf) is overcrowded and not very representative of the rest of the island",
              "In high season Palma and the Serra de Tramuntana can be very crowded",
            ],
            perChi: "Those who want a single island that covers several different interests, from city to mountains to sea.",
          },
          {
            nome: 'Ibiza',
            sintesi: "Famous for the nightlife of the south (Ibiza Town, Playa d'en Bossa, San Antonio), but with a rural, quiet north (Sant Joan, Santa Gertrudis) that is completely different.",
            pro: [
              "For those who seek it, the nightlife remains the most famous and varied in Europe",
              "The north of the island has secluded coves, craft markets and a bohemian air that few associate with Ibiza",
              "Dalt Vila, the fortified old town, is a UNESCO World Heritage site and is worth it even for those not looking for nightlife",
            ],
            contro: [
              "The reputation as a club island discourages, wrongly, those who seek something else",
              "Prices among the highest of the three islands in high season, especially in the south",
            ],
            perChi: "Those who want both nightlife and, if they like, a rural and almost silent island a few km away.",
          },
          {
            nome: 'Minorca',
            sintesi: "The smallest and quietest of the three: little built up, with less crowded beaches and a slower pace by choice.",
            pro: [
              "Much less developed than Mallorca and Ibiza: much of the island is a UNESCO biosphere reserve",
              "The coves (for example Cala Macarelleta) remain among the least crowded in the Balearics",
              "The Camí de Cavalls, the old coastal path that circles the island, is suited to those looking for quiet hikes",
            ],
            contro: [
              "Nightlife almost absent, for those who seek it",
              "Fewer direct connections and more expensive to reach off-season",
            ],
            perChi: "Those who want the opposite of Ibiza: sea, nature and silence, without giving up comforts.",
          },
        ],
        raccomandazione:
          "With a week it's better to choose one instead of cramming them all in: Mallorca for a complete island, Ibiza if you're interested in nightlife and the rural north, Minorca for the quietest Balearics. With more time, the frequent ferries between Mallorca and the other two make it easy to combine two.",
      },
    ],
    doveDormire: "Palma for city life; Sóller or Port de Sóller for the ideal base in the Serra de Tramuntana.",
    doveMangiare: "Sobrasada (spreadable pork cured meat with paprika) and ensaïmadas (spiral pastry) are the signature products; in the Serra, mountain restaurants serve dishes based on lamb and local vegetables.",
    comeArrivare: "Palma airport (Son Sant Joan), about ten kilometres from the city, with direct flights from many Italian cities. EMT bus A1 goes to the centre and the port in 15-20 minutes, about every 15 minutes, for about €5 in cash or about €3 with a contactless card; a taxi from the official rank costs about €20-25. By ferry you arrive from Barcelona or Valencia in 7-8 hours, or in about 4 with fast ferries. From the Plaça d'Espanya intermodal station the train to Sóller and the TIB buses for the whole island depart.",
    comeSpostarsi: "Rental car recommended for the Serra de Tramuntana; in Palma public transport is enough; the historic train to Sóller is an attraction in itself as well as a means of transport.",
    periodoMigliore: "May-June and September, with pleasant temperatures and fewer crowds than July-August, when prices and tourist flow peak.",
    costi: "Cathedral about €10 (about €25 with the terraces); Sóller train €30 return, tram to the port €10 each way; Bellver Castle €4 (free on Sundays); Cuevas del Drach €18.50 online. In high season car hire costs much more than the rest of the year. Indicative daily budget per person, sharing a double room: low €70-100, mid €130-180, high over €280.",
    erroriDaEvitare: [
      "Limiting yourself to the touristy coast of Palma (Playa de Palma, S'Arenal) without ever seeing the Serra de Tramuntana: it's like going to Rome and seeing only the airport",
      "Driving on the Serra's hairpin roads without allowing for longer times than expected",
      "Booking flights and ferries for July-August without advance notice: it's the period of peak demand and prices rise accordingly",
    ],
    luoghi: [
      {
        "nome": "Cattedrale di Palma (La Seu)",
        "testo": "A Gothic cathedral begun in 1229, after the conquest by James I, and finished in 1601, right on the seafront. Its rose window, about 13 metres across, is among the largest Gothic rose windows in Europe. Inside are Antoni Gaudí's canopy over the altar and the chapel of Saint Peter remade by Miquel Barceló.",
        "come": "On foot from central Palma, opposite the Parc de la Mar. Entrance on the Plaça de la Seu side.",
        "quando": "Opening hours change by season and Sunday is for services: check the calendar on the official site. The rose window is best in the morning light.",
        "tempo": "1-1.5 hours",
        "url": "https://catedraldemallorca.org/",
        "consiglio": "The best view of the facade, mirrored in the pond, is from Parc de la Mar, so take it in before going inside.",
        "costo": "about 10 euros with the museum, about 25 with the climb to the terraces (2026)",
        "orari": "Visits Monday to Friday until the afternoon and Saturday morning only; closed to visitors on Sundays.",
        "lat": 39.5675,
        "lng": 2.64806
      },
      {
        "nome": "Palma vecchia: Almudaina e vicoli",
        "testo": "The Almudaina Palace, a former Moorish fortress turned residence of the kings of Mallorca, stands next to the cathedral. Around it lies the old town: hidden patios, Plaça Major, the Arab baths and the Sa Llotja district with bars by the harbour.",
        "come": "All on foot from the cathedral. The palace is run by Patrimonio Nacional and can be visited on your own with the information panels.",
        "quando": "The palace has a weekly closing day and shuts for official ceremonies: check the website. The lanes are nicest in the evening, when the heat drops.",
        "tempo": "half a day for the palace and lanes",
        "url": "https://www.patrimonionacional.es/",
        "consiglio": "Peek through open doorways: many 18th-century patios can be seen from the street.",
        "lat": 39.5675,
        "lng": 2.64722
      },
      {
        "nome": "Valldemossa",
        "testo": "A stone village in a bowl of the Serra de Tramuntana, known for the Cartuja where Chopin and George Sand spent the winter of 1838-39. Steep lanes, flower pots on the windows and the local pastry, coca de patata.",
        "come": "From Palma by car on the Ma-1110, or by scheduled bus from the intermodal station. The village is easy to walk.",
        "quando": "Arrive early or in the late afternoon: the coaches arrive in the middle of the day.",
        "tempo": "2-3 hours",
        "consiglio": "Park in the lots uphill and walk down: the centre's streets are narrow and nearly always full.",
        "lat": 39.71168,
        "lng": 2.62258
      },
      {
        "nome": "Sóller train and Port de Sóller",
        "testo": "A vintage wooden train opened in 1912: about 27 kilometres through mountains and tunnels to Sóller. From there the historic tram runs down to the port, a bay closed in by mountains, with a seafront and boats.",
        "come": "It leaves from the Plaça d'Espanya station in Palma. From Sóller the tram goes to Port de Sóller; tickets are bought on board.",
        "quando": "The train stops in winter: for the 2026-27 season from 23 November 2026 to 1 February 2027. Times vary by season, so check the official site. Morning departures are best.",
        "tempo": "a full day including the port",
        "costo": "€30 return Palma-Sóller; Sóller-Port de Sóller tram €10 per trip (official site, 2026)",
        "url": "https://trendesoller.com/",
        "consiglio": "Buy tickets online in advance in high season and sit on the right-hand side on the way out for the valley views.",
        "orari": "Departures from Palma mostly in the morning; service suspended from 23 November 2026 to 1 February 2027.",
        "lat": 39.61204,
        "lng": 2.66002
      },
      {
        "nome": "Sa Calobra e Torrent de Pareis",
        "testo": "A pebble cove at the mouth of the Torrent de Pareis, a narrow canyon between towering walls. The Ma-2141 road down to Sa Calobra has a looping bend and is much photographed. A tunnel leads from the jetty to the little beach and the canyon.",
        "come": "By car on the Ma-2141 from the Ma-10, a long descent of bends, or by boat from Port de Sóller.",
        "quando": "Spring and autumn are calmer for the canyon. The Torrent de Pareis is closed or not advisable in rain and flood: check the forecast.",
        "tempo": "2-3 hours",
        "url": "https://www.caib.es/",
        "consiglio": "The boat spares you the road and the parking, which in summer is the real obstacle: leave the port in the morning.",
        "lat": 39.85097,
        "lng": 2.8
      },
      {
        "nome": "Cap de Formentor e Pollença",
        "testo": "The island's northernmost peninsula, with sheer cliffs and a lighthouse at the end of a long scenic road above Port de Pollença. Along the road is the Mirador des Colomer. Pollença has a main square with bars and the 365-step Calvari stairway.",
        "come": "From Port de Pollença by car on the Ma-2210 towards the lighthouse, within the seasonal rules below. From Palma to Pollença by car or bus.",
        "quando": "At sunset for the light on the lighthouse. From 15 May to 18 October (2026 dates), from 10am to 10pm, the road to the lighthouse is closed to private cars: you go up on TIB bus 334 from Alcúdia and Port de Pollença or by bike. You can drive to the Formentor beach car park until it is full.",
        "tempo": "half a day",
        "url": "https://www.dgt.es/conoce-el-estado-del-trafico/rutas-de-interes/trafico-acceso-faro-de-formentor/",
        "consiglio": "Go up to the Mirador des Colomer at opening time or at sunset: at midday you arrive in a queue.",
        "lat": 39.96137,
        "lng": 3.21229
      },
      {
        "nome": "Cala Mondragó e Es Trenc",
        "testo": "Two beaches in the southeast. Cala Mondragó lies inside a nature park, with pine woods and two sandy coves. Es Trenc is a long white stretch with no buildings, backed by dunes and salt pans.",
        "come": "By car from Palma: Cala Mondragó is near Santanyí, Es Trenc near Campos. Paid car parks, which fill up early.",
        "quando": "June and September. In July and August arrive before 10.",
        "tempo": "half a day",
        "consiglio": "From Mondragó you can walk along the coast to Cala Santanyí if you want to leave the crowded beach.",
        "lat": 39.34934,
        "lng": 3.18905
      },
      {
        "nome": "Un tratto del GR221 in Tramuntana",
        "testo": "The GR221, the \"Dry Stone Route\", crosses the whole Serra de Tramuntana in stages. One stage is enough: olive terraces, dry-stone walls, refuges and old paths. An easy section is Port de Sóller-Deià along the coast.",
        "come": "Start from Port de Sóller or Deià, both served by regular buses from central Palma. The path is waymarked.",
        "quando": "From October to May. In summer start at dawn: heat and lack of shade take their toll.",
        "tempo": "3-5 hours per stage",
        "url": "https://www.caib.es/",
        "consiglio": "Bring water and hiking shoes: wet stone is slippery. Some paths cross private land and have set passage hours."
      },
      {
        "nome": "Bellver Castle",
        "testo": "A 14th-century Gothic castle with a circular plan, built for the kings of Mallorca on a wooded hill above Palma. Inside is the city history museum; from the roof terrace you see the whole bay, with the cathedral and the port.",
        "come": "By city bus or taxi up to the car park, or on foot uphill through the park from the El Terreno quarter. The ticket office is in the visitor centre at the car park.",
        "quando": "Late afternoon, with the light on the bay; on Sundays entry is free but it is busier.",
        "tempo": "1-1.5 hours",
        "costo": "4 euros, free on Sundays (official site)",
        "orari": "Closed on Mondays. October-March Tuesday-Saturday 10:00-18:00, April-September 10:00-19:00; Sundays and holidays 10:00-15:00. Closed 1 January, Easter Sunday, 1 May and 25 December.",
        "lat": 39.56375,
        "lng": 2.61934,
        "url": "https://castelldebellver.palma.es/"
      },
      {
        "nome": "Cuevas del Drach",
        "testo": "Caves at Porto Cristo, on the east coast, with a route of about 1,200 metres among stalactites and pools to Lake Martel, where you hear a short live classical music concert.",
        "come": "By car from Palma heading east to Porto Cristo, or with organised trips. Timed entries, with tickets online.",
        "quando": "The first slot of the morning or out of season: in summer the groups are large.",
        "tempo": "1 hour for the visit, half a day with the trip",
        "costo": "18.50 euros online, 19.50 euros at the ticket office (official site)",
        "orari": "Timed visits every day; from 1 November to 15 March at 10:30, 12:00, 14:00 and 15:30. Closed 25 December and 1 January.",
        "lat": 39.53574,
        "lng": 3.33062,
        "url": "https://www.cuevasdeldrach.com/",
        "consiglio": "Buy online: it is cheaper and you choose the time. In November 2026 the site says the boat ride on the lake is suspended; the visit and the concert go ahead."
      },
      {
        "nome": "Deià",
        "testo": "A stone village on a hill between the olive trees and the sea, in the Serra de Tramuntana, where the poet Robert Graves lived and is buried. Below the village is Cala de Deià, a pebble cove with fishing boats.",
        "come": "On the Ma-10 between Valldemossa and Sóller, by car or by scheduled bus. You walk down to the cove through the olive groves.",
        "quando": "Morning or sunset; in summer parking is the main problem.",
        "tempo": "2-3 hours with the cove",
        "lat": 39.74774,
        "lng": 2.64834
      },
      {
        "nome": "Fornalutx",
        "testo": "A stone village above the Sóller valley, all steps, tiled roofs and terraced citrus groves. It is one of the most photographed in the Tramuntana and takes little time to walk around.",
        "come": "By car from Sóller in a few minutes, or on foot from Sóller via Biniaraix.",
        "quando": "Late afternoon, after the coaches have left.",
        "tempo": "1 hour",
        "lat": 39.78268,
        "lng": 2.74092
      },
      {
        "nome": "Alcúdia and Pollentia",
        "testo": "A northern town enclosed by medieval walls, with gates and walkways. Just outside are the ruins of Pollentia, the island's Roman city, with the theatre and the houses.",
        "come": "By car or with TIB buses from Palma; the old town is explored on foot.",
        "quando": "Morning or late afternoon, avoiding the hot hours on the walls.",
        "tempo": "half a day",
        "lat": 39.8525,
        "lng": 3.11917
      },
      {
        "nome": "Santuari de Lluc",
        "testo": "The sanctuary in the heart of the Serra de Tramuntana, a pilgrimage site since the Middle Ages, with the statue of the Black Madonna and the boys' choir, the Blauets. Trails among holm oaks and limestone rocks start around it.",
        "come": "By car on the Ma-10 or with TIB buses. It is on the road to Sa Calobra.",
        "quando": "As a stop on the road to Sa Calobra or Pollença.",
        "tempo": "1 hour",
        "lat": 39.82292,
        "lng": 2.88444
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Cathedral and Almudaina on foot",
          "Lunch in the lanes of Sa Llotja",
          "Afternoon: Bellver Castle by bus or taxi, or a walk along the Passeig Marítim",
          "Evening: tapas in the old town"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Palma, cathedral and lanes, sunset from Bellver Castle",
          "Day 2: historic train to Sóller, tram down to the port, fish lunch",
          "Back by train in the late afternoon, or a stop in Fornalutx by car"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Palma",
          "Day 2: Valldemossa in the morning, Deià and Sóller in the afternoon, by car",
          "Day 3: Sa Calobra by boat from Port de Sóller, or Lluc and Formentor by car, sunset in Pollença"
        ]
      },
      {
        "titolo": "5 days",
        "tappe": [
          "Days 1-3: as above",
          "Day 4: Alcúdia and Pollentia, beach on the bay of Alcúdia",
          "Day 5: Cuevas del Drach in the morning, then Cala Mondragó or Es Trenc"
        ]
      }
    ],
    zone: [
      {
        "nome": "Palma old town",
        "perChi": "those who want city life, restaurants and no car",
        "testo": "Everything on foot, lively evenings. Pros: bars, cathedral, markets. Cons: noise in the lanes, small rooms, parking nearly impossible.",
        "fascia": "130-250 €"
      },
      {
        "nome": "Sóller and Port de Sóller",
        "perChi": "those who want mountains and sea together",
        "testo": "A valley of citrus groves with train and tram. Pros: quiet evenings, walks. Cons: far from Palma (via the tunnel), narrow roads.",
        "fascia": "120-220 €"
      },
      {
        "nome": "Pollença and Alcúdia",
        "perChi": "families and beaches",
        "testo": "The north of the island: wide beaches, Formentor nearby. Pros: services for children. Cons: summer is crowded and you can't get far without a car.",
        "fascia": "100-200 €"
      },
      {
        "nome": "South-east: Santanyí and around",
        "perChi": "those looking for coves and quiet villages",
        "testo": "Villages of golden stone and coves among the pine woods, near Cala Mondragó and the Cuevas del Drach. Pros: sea and a slow pace. Cons: far from the Tramuntana, you need a car.",
        "fascia": "110-200 €"
      }
    ],
    gite: [
      {
        "nome": "Menorca",
        "distanza": "1-2.5 hours by ferry from Alcúdia",
        "come": "Alcúdia-Ciutadella ferries with Baleària and Trasmed; book ahead in summer.",
        "testo": "Ciutadella with its port and old town, and the coves of the south. As a day trip it works from the north of Mallorca; with one night it is easier."
      },
      {
        "nome": "Cabrera National Park",
        "distanza": "about an hour's drive from Palma, then the boat",
        "come": "Authorised boats from Colònia de Sant Jordi, in the south of the island, to be booked.",
        "testo": "A small protected archipelago with a castle above the harbour, very clear water and almost no buildings. The day includes a swimming stop."
      },
      {
        "nome": "Ibiza",
        "distanza": "2h15-4h15 by ferry from Palma",
        "come": "Baleària and Trasmed ferries from the port of Palma.",
        "testo": "Dalt Vila, the fortified old town, a UNESCO World Heritage Site. As a day trip only with the fast ferry; better as the next stop of the trip."
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need in Mallorca?",
        "risposta": "Three or four days are enough for Palma, the Serra de Tramuntana and a beach. With a week you add the north around Pollença and Alcúdia and the coves of the south-east."
      },
      {
        "domanda": "Do you need a car in Mallorca?",
        "risposta": "For the Tramuntana, Formentor and the coves, yes. Palma, Sóller and the port are easy to reach by train, tram and bus."
      },
      {
        "domanda": "Is it better to stay in Palma or in Sóller?",
        "risposta": "Palma for city life, restaurants and getting around by public transport; Sóller or Port de Sóller for walking in the Tramuntana and quiet evenings."
      },
      {
        "domanda": "Can you drive up to the Formentor lighthouse?",
        "risposta": "From 15 May to 18 October 2026, between 10:00 and 22:00, the road to the lighthouse is closed to private cars: you go up on TIB bus 334 or by bike. Outside those hours and that period you can drive."
      },
      {
        "domanda": "Does the Sóller train run all year?",
        "risposta": "No: for the 2026-27 season it stops from 23 November 2026 to 1 February 2027. A return from Palma costs 30 euros, the tram to the port 10 euros each way."
      },
      {
        "domanda": "What is the best time for Mallorca?",
        "risposta": "May-June and September, with a warm sea and fewer people. October and April are good for walking; July and August are the most expensive and crowded months."
      }
    ],
    sapori: [
      {
        "nome": "Ensaimada",
        "testo": "A spiral of leavened pastry dusted with icing sugar. Sold in Palma's old bakeries, plain or with pumpkin cream."
      },
      {
        "nome": "Sobrassada",
        "testo": "Spreadable pork sausage, red with paprika, PGI. On bread with a drizzle of honey."
      },
      {
        "nome": "Tumbet",
        "testo": "Layers of fried potato, aubergine and pepper with tomato sauce. A traditional summer dish."
      },
      {
        "nome": "Coca de patata",
        "testo": "A soft potato cake, typical of Valldemossa."
      },
      {
        "nome": "Arròs brut",
        "testo": "Soupy rice with meat and mushrooms. Found in inland restaurants, in winter."
      },
      {
        "nome": "Herbes de Mallorca",
        "testo": "A digestive herbal liqueur, served after meals."
      }
    ],
    attenzioni: [
      "Central Palma has restricted-traffic zones with cameras: your hotel registers the plate, otherwise a fine arrives. Use public garages.",
      "On Tramuntana roads (Ma-10, Ma-2141) there are many bends and cyclists, especially in spring: drive slowly and don't overtake in hairpins.",
      "The most famous beaches fill up during the morning in summer and parking is paid: leave early or take the bus.",
      "Tourist tax (ecotasa) of a few euros per night, paid at the hotel and varying by category.",
      "Parts of Playa de Palma and Magaluf ban drinking in the street and balconing, with fines.",
      "Pickpockets in the busy central streets and in the cathedral queue: keep bags in front."
    ],
    esperienzeSlugs: ['serra-tramuntana-trekking'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: "The stone houses of Valldemossa and the bell tower of Sant Bartomeu among the wooded mountains of the Serra de Tramuntana, Mallorca",
    immagine: '/images/spagna/mallorca.jpg',
  },
  {
    slug: 'ibiza',
    paeseSlug: 'spagna',
    ordine: 9,
    nome: 'Ibiza',
    tipologia: ['isola', 'mare', 'vita notturna'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "Ibiza is two islands in one, and reducing it to the world capital of nightlife is the most common oversimplification. The south (Ibiza Town, Playa d'en Bossa, San Antonio) is the center of a clubbing scene unmatched in Europe; the north (Sant Joan de Labritja, Santa Gertrudis) is rural, quiet and almost hippie, with secluded coves and craft markets.",
    percheAndarci:
      "Depending on where you stay, you get the Ibiza of clubs until dawn or that of silent coves and the organic market on Sunday morning. The north, which guidebooks often neglect, is the part that best shows the character of the island.",
    cosaVedere: [
      "Dalt Vila, the fortified upper city of Ibiza Town, a UNESCO World Heritage site, with Renaissance walls and medieval alleys",
      "The big clubs of the south (Pacha, Amnesia, Ushuaïa), a worldwide symbol of clubbing culture from the '80s-'90s to today",
      "The rural north around Sant Joan de Labritja: coves like Cala Xarraca and Cala Sant Vicent, and Benirràs, famous for the Sunday sunset drumming",
      "Santa Gertrudis de Fruitera, the village at the center of the island with cafés, art galleries and a relaxed atmosphere",
      "The hippie market of Las Dalias (in Sant Carles) and the Saturday market of Sant Joan, among the least commercial on the island",
    ],
    cosaFare: [
      "A tour of the coves in the north (Cala Xarraca, Cala Sant Vicent) as a silent counterpoint to the scene in the south",
      "Sunset at the Benirràs drums, on Sunday, an informal ritual that has lasted for decades",
      "A visit to the craft markets of the north (Las Dalias, Sant Joan) instead of the tourist shops at the port",
      "For those seeking nightlife, an evening at one of the historic clubs, booking well in advance in high season",
    ],
    doveDormire: "Ibiza Town/Dalt Vila for city life and proximity to the clubs of the south; Santa Gertrudis or Sant Joan for the quiet version of the island, with car trips to reach the beaches.",
    doveMangiare: "Bullit de peix (fish stew with rice served separately) is the island's traditional dish; in the north, the small country restaurants around Santa Gertrudis and San Juan have simpler and cheaper food than the port.",
    comeArrivare:
      "Ibiza airport (IBZ), south of Eivissa, with seasonal direct flights from Italy in high season. The bus to Eivissa (formerly line 10, renumbered in the AERO lines from 2026) costs about €3.50 and takes about 20 minutes; a taxi costs about €20-25, with long queues in summer. Baleària and Trasmed ferries run from Palma (2h15-4h15 depending on the ship) and from Barcelona or Valencia; Formentera is about 30 minutes from Eivissa port. In summer, beware of unlicensed rides offered outside arrivals.",
    comeSpostarsi: "A rental car or scooter is almost indispensable for reaching the north of the island and the most secluded coves; local buses connect the main towns but with limited frequency off-season.",
    periodoMigliore:
      "June and September, the best compromise between climate and crowds. July-August is the peak of prices and nightlife, with the south full; the north stays fairly quiet even in high season.",
    costi:
      "Entry to the big clubs often over €60-100 in high season; Cova de Can Marçà €15; an ecotax of a few euros per night paid at the hotel. Accommodation is among the most expensive in Europe in July and August. Rough daily budget per person in summer, sharing a double room and a rental car: low €90-120, mid €160-250, high over €350; in May, June and September you spend less.",
    erroriDaEvitare: [
      "Reducing Ibiza to nightlife without ever seeing the north: it's the part that surprises most those who arrive with the idea of the club island",
      "Booking entrance to the big clubs last minute in high season: the best events sell out days or weeks ahead",
      "Getting around only on foot or relying only on buses: without your own vehicle much of the north and the most beautiful coves remain out of reach",
    ],
    luoghi: [
      {
        "nome": "Dalt Vila",
        "testo": "The upper town of Ibiza Town, ringed by 16th-century Renaissance walls and a UNESCO site. Inside are steep lanes, the cathedral, a contemporary art museum and viewpoints over the port and Formentera.",
        "come": "On foot from the port, climbing from Portal de ses Taules. The route is all uphill on cobbles.",
        "quando": "At sunset for the light on the walls. By day in summer there's little shade.",
        "tempo": "2-3 hours",
        "url": "https://www.eivissa.es/",
        "consiglio": "Go up early, then come down for dinner in the Sa Penya district, below the walls.",
        "costo": "free",
        "lat": 38.90661,
        "lng": 1.43629
      },
      {
        "nome": "Ibiza Cathedral",
        "testo": "Santa Maria de les Neus stands at the top of Dalt Vila, the highest point of the town. It was built in Gothic style in the 14th century on the site of the mosque and remodelled in Baroque style in the 18th. From the esplanade in front you see the port, the coast and, on clear days, Formentera.",
        "come": "On foot, climbing through Dalt Vila from the Portal de ses Taules: it is the last stop of the climb.",
        "quando": "In the morning, before the heat; out of season the hours are shorter.",
        "tempo": "30 minutes",
        "lat": 38.9067,
        "lng": 1.4367
      },
      {
        "nome": "Es Vedrà e Cala d'Hort",
        "testo": "Es Vedrà is a 413-metre islet off the south-west coast, wrapped in legends. It is best seen from Cala d'Hort, a sand and pebble beach, and from the Torre des Savinar.",
        "come": "By car from Ibiza Town. Cala d'Hort has a small car park, full on summer afternoons.",
        "quando": "Sunset is the busiest moment: arrive at least an hour before.",
        "tempo": "2-3 hours",
        "consiglio": "Eat at one of the beach restaurants and stay after sunset: the crowd leaves.",
        "costo": "free",
        "lat": 38.89026,
        "lng": 1.22429
      },
      {
        "nome": "Cala Comte",
        "testo": "A west-coast beach with low rocks and clear water, famous for sunset with the islets in front.",
        "come": "By car from Sant Antoni, or by seasonal bus.",
        "quando": "Sunset in summer is crowded. Mornings or September are better.",
        "tempo": "half a day",
        "consiglio": "For a dinner by the sea, pick the restaurants on the rocks, but book.",
        "costo": "free",
        "lat": 38.96257,
        "lng": 1.22012
      },
      {
        "nome": "Benirràs e tamburi della domenica",
        "testo": "A bay in the north, enclosed by cliffs. At sunset on Sundays a group of drummers has gathered on the sand for decades, with stalls and people dancing.",
        "come": "By car from Sant Joan de Labritja. The road is narrow in the last stretch.",
        "quando": "On Sundays at sunset from May to October. On other days the bay is quiet.",
        "tempo": "an evening",
        "consiglio": "Arrive well ahead to find parking and a spot on the sand.",
        "costo": "free",
        "lat": 39.08944,
        "lng": 1.45392
      },
      {
        "nome": "Ses Salines",
        "testo": "A nature park of salt pans and dunes in the south, with Ses Salines beach and Es Cavallet. The salt pans are still in use and are UNESCO-listed together with Dalt Vila and the posidonia meadows.",
        "come": "By car from Ibiza Town. Paid parking, with access limits in summer.",
        "quando": "Morning, before the heat. Es Cavallet has a naturist stretch.",
        "tempo": "half a day",
        "url": "https://www.caib.es/",
        "consiglio": "Stay out of the salt pan and dune areas marked as protected.",
        "costo": "free beach; paid parking in summer",
        "lat": 38.84107,
        "lng": 1.39186
      },
      {
        "nome": "Cala Xarraca e Cala Sant Vicent",
        "testo": "Two small coves in the north. Xarraca is a green bay with calm water; Sant Vicent is rocky and wilder. Little building around.",
        "come": "By car from Sant Joan de Labritja; small car parks.",
        "quando": "Early morning or late afternoon.",
        "tempo": "half a day",
        "consiglio": "Bring a mask and snorkel: the water is clear and the seabed rocky.",
        "costo": "free",
        "lat": 39.0983,
        "lng": 1.4975
      },
      {
        "nome": "Sa Penya and La Marina",
        "testo": "The lower quarters between the port and the walls: La Marina with its whitewashed houses, the old market and shopping streets, and Sa Penya squeezed onto the rock, the historic fishermen's quarter. In the evening this is where people eat before going up to Dalt Vila or out to the clubs.",
        "come": "On foot from Eivissa port.",
        "quando": "From late afternoon. In summer it is crowded until late at night.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 38.90873,
        "lng": 1.43856,
        "consiglio": "If you sleep here, ask for a room that doesn't face the bar streets."
      },
      {
        "nome": "MACE, Museu d'Art Contemporani",
        "testo": "Eivissa's contemporary art museum, inside Dalt Vila near the Portal de ses Taules, in an 18th-century military building. It gathers the artists who have worked on the island since the 1950s and, under a glass floor, the archaeological remains found during restoration.",
        "come": "On foot, just past the Portal de ses Taules.",
        "quando": "In the hot hours, as a break from the climb.",
        "tempo": "1 hour",
        "lat": 38.90836,
        "lng": 1.43631
      },
      {
        "nome": "Santa Eulària and Puig de Missa",
        "testo": "The east-coast town, quieter and family-oriented. Above the centre rises the Puig de Missa, a hill with a fortified white 16th-century church, built as a defence against pirates, and farmhouses around it.",
        "come": "By car or bus from Eivissa. The Puig de Missa is a 15-minute walk up from the centre.",
        "quando": "At sunset, with the light on the church and the river valley.",
        "tempo": "1-2 hours",
        "costo": "free",
        "lat": 38.98407,
        "lng": 1.52932
      },
      {
        "nome": "Las Dalias market",
        "testo": "The island's best-known hippie market, in Sant Carles de Peralta, in the garden of an old roadside venue. Stalls of crafts, clothes, jewellery and food: less commercial than the markets in the south.",
        "come": "By car on the road from Santa Eulària to Sant Carles; parking along the road.",
        "quando": "Saturday morning, as soon as it opens.",
        "tempo": "1-2 hours",
        "orari": "Hippie market on Saturday 10am-5pm and Sunday 11am-5pm (November 2026 calendar); in summer the programme changes, check the website.",
        "lat": 39.0283,
        "lng": 1.55786,
        "url": "https://lasdalias.es/"
      },
      {
        "nome": "Santa Gertrudis de Fruitera",
        "testo": "The small village in the middle of the island, with a white church, a pedestrian square of bars and restaurants and a few art galleries. It is the base for those who want countryside Ibiza.",
        "come": "By car from Eivissa in a quarter of an hour; walkable.",
        "quando": "At lunch or dinner, when the square fills up.",
        "tempo": "1 hour",
        "costo": "free",
        "lat": 38.9986,
        "lng": 1.43012
      },
      {
        "nome": "Cova de Can Marçà",
        "testo": "A cave above the bay of Port de Sant Miquel, once used by smugglers. It is visited with a guide, among stalactites, coloured lights and an artificial waterfall, and from the exit you look down on the sea.",
        "come": "By car via Sant Miquel de Balansat to Port de Sant Miquel. Guided tours of about 40 minutes, every 45 minutes, no booking needed.",
        "quando": "On a cloudy day or in the hot hours.",
        "tempo": "1 hour",
        "costo": "€15 adults",
        "orari": "Open all year: 10:30am-7:30pm from May to October, 10:30am-5:30pm from November to April.",
        "lat": 39.08337,
        "lng": 1.44186,
        "url": "https://www.covadecanmarsa.com/"
      },
      {
        "nome": "Sant Antoni and sunset at Caló des Moro",
        "testo": "Sant Antoni is the west-coast town, with its sunset bay and a promenade of music bars. The small rocky cove of Caló des Moro is where people gather to watch the sun go down over the sea.",
        "come": "By car or bus from Eivissa; then on foot along the promenade north of the port.",
        "quando": "At sunset, arriving an hour early to get a spot.",
        "tempo": "2 hours",
        "costo": "free on the promenade; the bars require you to order",
        "lat": 38.98522,
        "lng": 1.29667
      },
      {
        "nome": "Talamanca",
        "testo": "The most convenient beach from Eivissa, in a bay east of the port, with sand and shallow water. It is not the island's most beautiful, but you can get there without a car.",
        "come": "On foot along the port from Eivissa, or a few minutes by taxi.",
        "quando": "Afternoon, after a morning in Dalt Vila.",
        "tempo": "half a day",
        "costo": "free",
        "lat": 38.9163,
        "lng": 1.4539
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Dalt Vila from the Portal de ses Taules, MACE and the Cathedral at the top",
          "Lunch: La Marina, below the walls",
          "Afternoon: Ses Salines, or Talamanca without a car",
          "Evening: sunset at Cala Comte or Caló des Moro, then dinner in Sa Penya"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan",
          "Day 2, morning: the north by car, Cala Xarraca and Cala Sant Vicent, or the Las Dalias market if it is Saturday",
          "Day 2, afternoon: Cova de Can Marçà and a late lunch in Santa Gertrudis",
          "Day 2, evening: Benirràs at sunset, with the drums if it is Sunday"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above",
          "Day 3, morning: Santa Eulària and the Puig de Missa",
          "Day 3, afternoon: Cala d'Hort and the Torre des Savinar facing Es Vedrà",
          "Day 3, evening: sunset over Es Vedrà and dinner on the beach, or a night at one of the historic clubs booked online"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ibiza Town",
        "perChi": "those who want services and no driving",
        "testo": "Port, restaurants and buses to the southern beaches. Noisy at night and expensive in summer.",
        "fascia": "180-400 €"
      },
      {
        "nome": "Sant Antoni",
        "perChi": "those who want sea and cheaper nightlife",
        "testo": "A bay with sunsets, bars and connections. Very touristy and lively at night.",
        "fascia": "120-280 €"
      },
      {
        "nome": "North: Santa Gertrudis, Sant Joan",
        "perChi": "those who want quiet",
        "testo": "Green hills, restaurants and coves. You need a car, buses are few.",
        "fascia": "150-350 €"
      },
      {
        "nome": "Santa Eulària des Riu",
        "perChi": "families and those who want a quiet town",
        "testo": "Seafront, a town beach and restaurants, far from the clubs. Buses to Eivissa and a handy location for the north-east and Las Dalias.",
        "fascia": "150-300 €"
      }
    ],
    gite: [
      {
        "nome": "Formentera",
        "distanza": "about 30 minutes by ferry",
        "come": "Frequent fast ferries from Eivissa port to La Savina; on the island you rent e-bikes, scooters or cars.",
        "testo": "The smallest of the inhabited Balearics, flat, with the beaches of Ses Illetes and Llevant inside the natural park and very clear water. One day is enough for the north of the island and the Cap de Barbaria lighthouse."
      },
      {
        "nome": "Palma de Mallorca",
        "distanza": "2h15-4h15 by ferry",
        "come": "Baleària and Trasmed from Eivissa to Palma; fast ships take about two and a quarter hours.",
        "testo": "The Gothic cathedral by the sea with Gaudí's additions, the old quarter and the Passeig del Born. Better as the next stop of the trip than as a there-and-back day trip."
      }
    ],
    sapori: [
      {
        "nome": "Bullit de peix",
        "testo": "Fish soup with rice served apart, the island's traditional dish."
      },
      {
        "nome": "Flaó",
        "testo": "A fresh cheese and mint dessert, like a cheesecake."
      },
      {
        "nome": "Sofrit pagès",
        "testo": "Meat, potato and sausage stew with spices, typical of the countryside."
      },
      {
        "nome": "Hierbas ibicencas",
        "testo": "A sweet aromatic herb liqueur, for after the meal."
      },
      {
        "nome": "Ensalada payesa",
        "testo": "Salad of tomatoes, peppers and dried fish or sausage."
      }
    ],
    attenzioni: [
      "Club tickets sold by people on the street or on social media can be fake: buy only from the venue's website.",
      "Unlicensed taxis near airports and clubs: use official ranks or apps.",
      "In summer many coves have limited car access and paid car parks that fill up during the morning.",
      "Tourist tax (ecotasa) of a few euros per night, paid at the hotel.",
      "In Sant Antoni and other areas there are street-drinking bans and fines for uncivil conduct.",
      "Es Vedrà and the cliffs: stay on marked paths, falls are frequent."
    ],
    faq: [
      {
        "domanda": "How many days do you need in Ibiza?",
        "risposta": "Three days for Dalt Vila, the south-west beaches and the north with its coves and markets. With four or five you can add a day trip to Formentera."
      },
      {
        "domanda": "Is Ibiza good for people who don't go clubbing?",
        "risposta": "Yes. The north, between Sant Joan, Santa Gertrudis and the coves, is quiet even in August, and the old town of Dalt Vila is a UNESCO World Heritage Site."
      },
      {
        "domanda": "Where is the best place to stay in Ibiza?",
        "risposta": "Eivissa to avoid driving and be near the clubs, Sant Antoni for sunsets and slightly lower prices, the north or Santa Eulària for quiet. In summer a double room rarely costs less than €120-150 a night."
      },
      {
        "domanda": "Do you need a car in Ibiza?",
        "risposta": "For the north and the coves yes, or at least a scooter: buses link the main towns but run rarely out of season. If you stay between Eivissa, Talamanca and Ses Salines you can do without."
      },
      {
        "domanda": "When should you go to Ibiza?",
        "risposta": "June and September are the compromise between warm sea, open clubs and less extreme prices. July and August are the peak for crowds and costs."
      },
      {
        "domanda": "How do you get to Formentera from Ibiza?",
        "risposta": "By fast ferry from Eivissa port, about 30 minutes, frequent all day in season. On the island you get around by e-bike, scooter or rental car."
      }
    ],
    esperienzeSlugs: ['ibiza-nord-calette'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: "The walls and cathedral of Dalt Vila above the white houses of the port of Ibiza Town",
    immagine: '/images/spagna/ibiza.jpg',
  },
  {
    slug: 'minorca',
    paeseSlug: 'spagna',
    ordine: 10,
    nome: 'Minorca',
    tipologia: ['isola', 'mare', 'natura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The smallest and quietest of the three major Balearic islands. Much of the territory is a UNESCO Biosphere Reserve, since the '80s little has been built by political choice and the coves remain among the least crowded in the archipelago.",
    percheAndarci:
      "It's the right island for those who know the reputation of Mallorca and Ibiza and are looking for the opposite: no big resorts or clubs. The best way to get to know it remains the Camí de Cavalls, the old coastal path that circles it entirely.",
    cosaVedere: [
      "Ciutadella, the former capital, with the old port and the Gothic Cathedral within the walls",
      "Mahón (Maó), the current capital, with one of the deepest natural harbors in the Mediterranean",
      "The Camí de Cavalls, the coastal path of about 185 km that surrounds the entire island, walkable in stages",
      "Cala Macarelleta and Cala Turqueta, among the most photographed and least developed coves in the Balearics",
      "The Talayotic megalithic sites (taulas and navetas), left by a prehistoric civilization unique to the island, a UNESCO World Heritage site since 2023",
    ],
    cosaFare: [
      "Walk one or more stages of the Camí de Cavalls, from the easiest near Ciutadella to the wilder ones on the north coast",
      "A boat trip along the south coast to reach the coves not accessible by car",
      "Visit one of the Talayotic sites (for example Torre d'en Galmés, the largest on the island)",
    ],
    doveDormire: "Ciutadella for the historic atmosphere and the old port; Mahón for the capital and connections; the southern coastal areas for those who mainly aim for the coves.",
    doveMangiare: "Caldereta de langosta (spiny lobster stew, the island's signature dish, not cheap) and Mahón-Menorca PDO cheese, among the best known in Spain.",
    comeArrivare: "Mahón Airport, with seasonal direct flights from Italy in high season. Ferry from Mallorca: Alcúdia-Ciutadella (1-2h30) or Palma-Mahón (about 6h).",
    comeSpostarsi: "A rental car is almost indispensable: buses connect the main towns but not the most secluded coves, which are the reason to come here.",
    periodoMigliore: "June and September, with pleasant temperatures and fewer crowds; the island stays quieter than Mallorca and Ibiza even in midsummer, thanks to less tourist development.",
    costi: "In high season it generally costs a bit less than Ibiza; car rental and ferries are the main budget items.",
    erroriDaEvitare: [
      "Expecting the nightlife or tourist services of Ibiza or Mallorca: Minorca chose another path",
      "Trying to see the whole island in a single day: the best coves require travel on secondary roads, often unpaved in the last stretches",
      "Going without a car, relying only on buses: much of the island's charm is in the coves reachable only by your own vehicle or on foot",
    ],
    luoghi: [
      {
        "nome": "Ciutadella",
        "testo": "The former capital, with a long narrow harbour like a ria, a Gothic cathedral and noble palaces under the arcades of Ses Voltes. Seafood restaurants line the port. The Sant Joan festival, on 23-24 June, fills the town with horses and riders.",
        "come": "Explore on foot. From Maó by scheduled bus or by car on the Me-1.",
        "quando": "The morning market in Plaça del Born. In the evening the harbour is where you eat.",
        "tempo": "half a day",
        "consiglio": "Leave the car in the car parks outside the centre: streets are narrow and full in summer."
      },
      {
        "nome": "Maó and its harbour",
        "testo": "The present capital, above a long, deep natural harbour, one of the great ones of the Mediterranean. In town: walks along the waterfront, the Claustre del Carme market, the Museu de Menorca and the Xoriguer gin distillery.",
        "come": "The airport is close. In town you walk; boats tour the harbour.",
        "quando": "Morning for the market, sunset over the harbour.",
        "tempo": "half a day",
        "consiglio": "Taste Xoriguer gin at the distillery: it goes into the pomada, the local lemon drink."
      },
      {
        "nome": "Camí de Cavalls",
        "testo": "The coastal path of about 185 kilometres that circles the island in 20 stages, once used by horses and soldiers. Coast, pine woods, cliffs and beaches. A single stage, such as Cala Galdana-Cala Macarella, is enough to get it.",
        "come": "Start from several points with parking. The route is waymarked; the official site has maps and stages.",
        "quando": "Spring and autumn. In summer the lack of shade and the heat weigh heavily.",
        "tempo": "3-6 hours per stage",
        "url": "https://www.camidecavalls.com/",
        "consiglio": "Carry plenty of water and choose short stages ending at a beach: swim halfway."
      },
      {
        "nome": "Cala Macarella and Macarelleta",
        "testo": "Two nearby coves on the south coast. Macarella is a bay of white sand and pine woods; the smaller Macarelleta is reached on foot from the first and is partly naturist.",
        "come": "From Ciutadella by car to the car park, then a stretch on foot. In high season there is also a seasonal bus. Or walk from Cala Galdana along the Camí de Cavalls.",
        "quando": "Early morning or late afternoon. In high summer the car park fills up early.",
        "tempo": "half a day",
        "consiglio": "Get there before everyone else: early in the morning the water is still and clear."
      },
      {
        "nome": "Torre d'en Galmés",
        "testo": "One of the largest Talayotic settlements in the Balearics, with three talayots, the taula enclosure and Bronze and Iron Age houses, lived in from about 1400 BC until Roman times. It is part of the Talayotic Menorca site, a UNESCO World Heritage site since 2023.",
        "come": "By car from Maó or Ciutadella, in the middle of the island. Self-guided, with panels. There is an entry ticket.",
        "quando": "Early morning or late afternoon, for the heat and the light.",
        "tempo": "1-1.5 hours",
        "consiglio": "Combine it with Cala en Porter or the Museu de Menorca in Maó."
      },
      {
        "nome": "Naveta des Tudons",
        "testo": "A collective tomb shaped like an upturned boat, built of dry stone and used as an ossuary between about 1200 and 750 BC. It is Menorca's most remarkable megalithic tomb and stands just off the road.",
        "come": "By car on the Maó-Ciutadella road, a few kilometres from Ciutadella. A half-hour stop.",
        "quando": "Any time; the golden light of late afternoon is best.",
        "tempo": "30 minutes",
        "consiglio": "Stop on the way between the two towns: no detour needed."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Ciutadella and the market",
          "Seafood lunch on the harbour",
          "Afternoon: Cala Macarella",
          "Evening: sunset on the harbour"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Ciutadella, Naveta des Tudons, Macarella",
          "Day 2: Maó and harbour, Torre d'en Galmés, Xoriguer gin"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Ciutadella",
          "Day 2: a stage of the Camí de Cavalls and Macarelleta",
          "Day 3: Maó, Torre d'en Galmés, Fornells with the caldereta"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ciutadella",
        "perChi": "those who want historic atmosphere",
        "testo": "Harbour, lanes and evening life. Close to the southwest coves. Parking is hard in summer."
      },
      {
        "nome": "Maó",
        "perChi": "those with a flight or ferry",
        "testo": "More practical for connections, fewer beaches in town. A good base for the centre and east."
      },
      {
        "nome": "South coast (Cala Galdana, Son Bou)",
        "perChi": "those who want the sea",
        "testo": "Resorts and a long beach. More services, less character."
      }
    ],
    sapori: [
      {
        "nome": "Caldereta de langosta",
        "testo": "Lobster stew, a Fornells speciality, expensive."
      },
      {
        "nome": "Mahón-Menorca cheese",
        "testo": "PDO cow's milk cheese, from young to aged."
      },
      {
        "nome": "Xoriguer gin and pomada",
        "testo": "The island's gin, mixed with lemonade in the pomada."
      },
      {
        "nome": "Oliaigua",
        "testo": "Tomato, onion and fig soup, a peasant dish."
      },
      {
        "nome": "Sobrassada",
        "testo": "Spreadable pork sausage, as in Mallorca."
      }
    ],
    attenzioni: [
      "The car parks for the southern coves (Macarella, Turqueta) fill up during the morning in high season and are paid.",
      "On the Camí de Cavalls there is no shade and little water: start early and avoid midday.",
      "Book your rental car months ahead in summer: prices climb.",
      "Tourist tax (ecotasa) of a few euros per night, paid at the hotel.",
      "No fires or wild camping: they are banned and checks are frequent.",
      "Don't trample the dunes or the washed-up posidonia, which are protected."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: "The white sand beach and turquoise water of Cala Macarelleta among the pine groves, Minorca",
    immagine: '/images/spagna/minorca.jpg',
  },

  // --- CANARIE ---
  {
    slug: 'tenerife',
    paeseSlug: 'spagna',
    ordine: 11,
    nome: 'Tenerife',
    tipologia: ['isola', 'vulcano', 'natura'],
    giorniConsigliati: '3-4 days',
    visitataPersonalmente: true,
    introduzione:
      "The largest of the Canary Islands. Here is Teide, the highest volcano in Spain (3,715 meters) and, measured from its base on the ocean floor, the third-tallest volcanic structure in the world. Teide National Park, a UNESCO World Heritage site, is a lunar landscape of lava flows and rock formations found nowhere else. At the far north, the Anaga Rural Park is a laurel forest that survived from the Tertiary era, a biosphere reserve since 2015.",
    percheAndarci:
      "For Teide, the highest point in Spain and, thanks to the clear sky at altitude, one of the best astronomical observatories in the world. And for the contrast with Anaga, a few dozen km away, where the trade-wind fog feeds a primeval forest covered in moss and lichen.",
    cosaVedere: [
      "Teide National Park, with the cable car that climbs to 3,555 meters and the lunar landscape of Las Cañadas, the great caldera that surrounds it",
      "The Anaga Rural Park, a UNESCO biosphere reserve, with trails through the laurel forest and isolated villages like Taganana",
      "La Laguna, the island's old capital, a UNESCO World Heritage site for its unfortified Renaissance urban layout",
      "Puerto de la Cruz and its botanical gardens on the north coast, greener and less developed for tourism than the south coast",
      "Los Gigantes, the tall cliffs plunging into the Atlantic, on the west coast",
    ],
    cosaFare: [
      "Book the Teide cable car ticket in time and, separately, the free permit for the last stretch on foot to the summit (see the dedicated experience page)",
      "A hike in the Anaga Rural Park, for example from Cruz del Carmen to Taganana",
      "Stargazing: Tenerife is one of the best places in the world, thanks to the Sky Law that protects the island from light pollution",
    ],
    doveDormire: "Puerto de la Cruz for the north coast, greener and less touristy; Costa Adeje or Los Cristianos for the south coast, sunnier and more touristy, convenient for those who focus on the sea.",
    doveMangiare: "Papas arrugadas (small potatoes boiled in very salty water) with mojo rojo and mojo verde (spicy sauces, one based on pepper, the other on cilantro or parsley) are the signature dish of all the Canary Islands; gofio, toasted cereal flour of Guanche origin, appears in a thousand variations.",
    comeArrivare:
      "Two airports: Tenerife Sur (TFS), where most flights from Italy land, and Tenerife Norte (TFN), near La Laguna, used mainly for inter-island flights. TITSA guaguas (buses) serve both (ticket on board or Ten+ card); line 343 runs from the South to the North and continues to Puerto de la Cruz, about €10. By car it takes about 30 minutes from the North airport to Puerto de la Cruz and about an hour and a quarter from the South. A rental car picked up at the airport is still the most practical choice for Teide, Anaga and Masca.",
    comeSpostarsi: "Rental car recommended to reach Teide and Anaga; tram between Santa Cruz and La Laguna; buses (guaguas) extensive but slow toward the mountain areas.",
    periodoMigliore:
      "all year, with a mild and steady climate (16-21°C / 61-70°F even in January): that's why the Canary Islands are the right Spanish destination in winter, when the rest of Europe is cold. At altitude, at Teide, it's colder and in winter snow is not rare.",
    costi:
      "Teide cable car €43 return for non-residents (2026); summit permit about €15 for non-residents from 2026; Masca trail from €40.66 plus the return boat; Palmetum €6, Dragon Tree park €5, Jardín Botánico about €3. Rough daily budget per person, sharing a double room and a rental car: low €60-80, mid €110-160, high over €230.",
    erroriDaEvitare: [
      "Going up Teide without having booked the summit permit well in advance: the cable car alone doesn't give access to the last stretch, which is regulated separately",
      "Underestimating the cold at altitude: at the upper cable car station (3,555 m) temperatures are much lower than on the coast, in every season",
      "Focusing only on the south coast and never seeing Anaga: it's an ecosystem that doesn't exist anywhere else on the island",
    ],
    luoghi: [
      {
        "nome": "Teide: cable car and summit",
        "testo": "The cable car climbs from 2,356 to 3,555 metres in under eight minutes. The last stretch to the crater, above 3,700 metres, is on foot along trail no. 10 (Telesforo Bravo) and needs a free permit with limited numbers. Above 3,500 metres you feel the altitude.",
        "come": "By car from the coast, on mountain roads. The base station has a free car park.",
        "quando": "Take the first run to avoid queues and wind. In strong wind the cable car stops. Check the forecast that day.",
        "tempo": "half a day, longer with the summit climb",
        "url": "https://www.volcanoteide.com/",
        "consiglio": "Buy the cable car ticket online with a time slot and apply for the summit permit well ahead, even months: they are two separate things.",
        "costo": "cable car return €43 for non-residents and €10.75 for Canary Islands residents, one way €24 (2026 fares); summit permit about €15 for non-residents from 2026",
        "orari": "Daily from 9am. In the short-hours months (January-March, mid-April to June, from late October) last ascent 4pm and last descent 4:50pm; in July-September and at Easter last ascent 5:40pm and last descent 6:30pm (2026 calendar). It stops in strong wind.",
        "lat": 28.25455,
        "lng": -16.62602
      },
      {
        "nome": "Roques de García and Las Cañadas",
        "testo": "Lava formations tens of metres high in the heart of the caldera, with the Roque Cinchado as their symbol. An easy circular trail starts from the car park. Behind them is the Teide.",
        "come": "From the car park at the foot of the Roques, on the TF-21, a few minutes from the cable car station. The path is marked.",
        "quando": "Morning or sunset. At noon the sun is strong with little shade.",
        "tempo": "1-2 hours",
        "consiglio": "Bring a jacket: at altitude the wind is cold even in July.",
        "costo": "free",
        "lat": 28.23177,
        "lng": -16.63995
      },
      {
        "nome": "Anaga Rural Park",
        "testo": "North-east mountains with misty laurel forest, a biosphere reserve. Trails cross ridges, hamlets and remote villages such as Taganana and Chinamada.",
        "come": "By car from Santa Cruz or La Laguna to Cruz del Carmen, where the visitor centre is. Some villages are served by scheduled buses.",
        "quando": "Morning, when fog is rarer. In rain the paths are muddy.",
        "tempo": "half a day or a full day",
        "url": "https://www.webtenerife.com/",
        "consiglio": "Walk the Sendero de los Sentidos or Cruz del Carmen to Taganana, with a return transfer arranged.",
        "costo": "free, including the Cruz del Carmen visitor centre; El Pijaral forest only with a free permit requested in advance",
        "lat": 28.53101,
        "lng": -16.27989
      },
      {
        "nome": "La Laguna",
        "testo": "The island's old capital, UNESCO-listed for its grid street plan, one of the first of the colonial cities. Houses with wooden balconies, churches and courtyards.",
        "come": "By tram from Santa Cruz or by car. Explore on foot.",
        "quando": "Weekdays for the student life. In the evening, bars and tapas.",
        "tempo": "2-3 hours",
        "consiglio": "Look into the houses' patios: many have a garden open to the public.",
        "costo": "free",
        "lat": 28.48889,
        "lng": -16.31611
      },
      {
        "nome": "La Orotava",
        "testo": "The town above Puerto de la Cruz, with an uphill old centre of 17th-century mansions and dark wooden balconies. The Casa de los Balcones, from 1632, has an inner patio with a wooden gallery and a small crafts museum. From the Concepción church you look down the valley to the sea.",
        "come": "By car from Puerto de la Cruz in about 15 minutes, with paid parking on the edge of the centre; then everything on foot. It is also on the road up to Teide.",
        "quando": "In the morning. For Corpus Christi, in spring, the streets and the town hall square are covered with carpets of flowers and volcanic sand.",
        "tempo": "2 hours",
        "lat": 28.38833,
        "lng": -16.52583,
        "consiglio": "Stop here on the way down from Teide: the valley road goes right through the town."
      },
      {
        "nome": "Puerto de la Cruz",
        "testo": "The old port of the north coast, the island's first resort as early as the 19th century. It has a real town centre, with Plaza del Charco, the Ranilla quarter and the seafront that leads to Lago Martiánez, the seawater pools designed by César Manrique.",
        "come": "By TITSA guagua from the North airport or La Laguna, or by car. The centre is walkable.",
        "quando": "Late afternoon and evening, on the seafront and the square. The sea here is often rough: the pools are better for swimming.",
        "tempo": "half a day",
        "costo": "the centre is free; Lago Martiánez is paid separately",
        "lat": 28.41653,
        "lng": -16.55055
      },
      {
        "nome": "Masca",
        "testo": "A village in a deep gorge in the Teno mountains, with stone houses and ocean views. The Masca ravine leads down on foot to the sea.",
        "come": "The village is reached on the TF-436 from Santiago del Teide, a narrow road full of bends. For the ravine trail you book on the official site caminobarrancodemasca.com and, since December 2025, the starting point can only be reached on TITSA bus 355 from Santiago del Teide; the return boat from the beach is bought separately, within four hours of your descent slot.",
        "quando": "Morning, to avoid the coaches. The path is closed in rain or alerts.",
        "tempo": "1 hour in the village, half a day for the path",
        "consiglio": "Don't do the trail in walking shoes, and check beforehand how to get back from the sea: there is no road from the beach.",
        "costo": "trail access from €40.66 (descent only, in the current pilot phase); free for Tenerife residents; the return boat is extra",
        "orari": "Trail open 8:30am-6pm, with descent slots every 30 minutes from 8:30am to 1pm; bookings Wednesday to Saturday. In rough seas the boat may be cancelled and you walk back up.",
        "lat": 28.30528,
        "lng": -16.84028,
        "url": "https://www.caminobarrancodemasca.com/"
      },
      {
        "nome": "Garachico",
        "testo": "A north-coast town destroyed by the 1706 eruption that filled the harbour. What remains: the black lava pools (El Caletón), the castle and a square with Baroque buildings.",
        "come": "By car from Puerto de la Cruz or Santiago del Teide. Explore on foot.",
        "quando": "Morning or after lunch, with calm sea for the pools.",
        "tempo": "2-3 hours",
        "consiglio": "Fresh seafood lunch near the pier.",
        "costo": "free, including the El Caletón natural pools",
        "lat": 28.37369,
        "lng": -16.76405
      },
      {
        "nome": "Los Gigantes",
        "testo": "Towering black cliffs dropping into the Atlantic on the west coast. Boats from the harbour go to the foot of the walls, where dolphins and pilot whales are often seen.",
        "come": "By car from Costa Adeje. Boat trips leave from Puerto de Los Gigantes and nearby harbours.",
        "quando": "Morning, with calmer sea. Boats run all year.",
        "tempo": "2-3 hours with a boat trip",
        "consiglio": "Choose operators with the Barco Azul licence: they follow rules on distance from the animals.",
        "lat": 28.29652,
        "lng": -16.85577
      },
      {
        "nome": "Jardín Botánico of Puerto de la Cruz",
        "testo": "The Jardín de Aclimatación de La Orotava was founded in 1788 by order of Charles III, to get tropical plants from the colonies used to a European climate before taking them to Spain. Today it is a compact garden with palms, giant fig trees with aerial roots and plants from every continent.",
        "come": "Uphill on foot from the centre of Puerto de la Cruz, or by local bus to the Botánico area.",
        "quando": "In the morning or on a cloudy day, which is common on the north coast.",
        "tempo": "1-1.5 hours",
        "costo": "about €3",
        "lat": 28.41139,
        "lng": -16.53583
      },
      {
        "nome": "Santa Cruz: Auditorio and Palmetum",
        "testo": "The island's capital is worth a visit for two things by the sea. Santiago Calatrava's Auditorio, from 2003, with its white concrete sail over the port. Next to it is the Palmetum, a palm garden built on top of an old landfill, with plants from every tropical region.",
        "come": "The tram links La Laguna to Santa Cruz in about 40 minutes; from the centre you walk along the sea to the Auditorio and the Palmetum.",
        "quando": "Morning for the Palmetum, which has little shade; the Auditorio at sunset.",
        "tempo": "half a day",
        "costo": "Palmetum €6 for non-resident adults; the outside of the Auditorio is free",
        "orari": "Palmetum daily 10am-6pm, last entry 5pm.",
        "lat": 28.45194,
        "lng": -16.25583,
        "url": "https://www.palmetumtenerife.es/"
      },
      {
        "nome": "Playa de Las Teresitas",
        "testo": "The beach of San Andrés, just north of Santa Cruz, with pale sand brought from the Sahara in the 1970s and a breakwater that keeps the water calm. Behind it rise the Anaga mountains.",
        "come": "By car or guagua from Santa Cruz, about ten kilometres along the coast.",
        "quando": "On weekdays. At weekends families from the capital arrive and the car park fills up.",
        "tempo": "half a day",
        "costo": "free",
        "lat": 28.50861,
        "lng": -16.18583,
        "consiglio": "It pairs well with a morning in Anaga: from the TF-12 you drive down to San Andrés."
      },
      {
        "nome": "Drago Milenario of Icod de los Vinos",
        "testo": "The largest and oldest dragon tree (Dracaena draco) in the Canaries, more than twenty metres tall and estimated to be several centuries old. It is a symbol of the island, surrounded by a small garden of endemic plants.",
        "come": "By car on the north coast road, between Puerto de la Cruz and Garachico. The tree can also be seen from the square of San Marcos church; the park around it charges admission.",
        "quando": "On the way to Garachico or Masca.",
        "tempo": "45 minutes",
        "costo": "Dragon Tree park €5 for adults (2026)",
        "lat": 28.3666,
        "lng": -16.72222,
        "consiglio": "If you are short of time, look at it from San Marcos square without going in."
      },
      {
        "nome": "Candelaria",
        "testo": "The town of the basilica of the Virgen de Candelaria, patron saint of the Canaries. On the square by the sea stand the bronze statues of the nine menceyes, the Guanche kings of the island before the conquest.",
        "come": "By car on the TF-1 motorway, between Santa Cruz and the South.",
        "quando": "Outside the mid-August pilgrimage, when the square is packed.",
        "tempo": "1 hour",
        "costo": "free entry to the basilica",
        "lat": 28.35139,
        "lng": -16.36972
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: first Teide cable car at 9am, with the summit permit if you got one",
          "Late morning: the Roques de García loop, with Teide in front of you",
          "Lunch: down the valley in La Orotava, then a walk round the centre and the Casa de los Balcones",
          "Evening: seafront and Plaza del Charco in Puerto de la Cruz"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan",
          "Day 2, morning: Anaga from Cruz del Carmen, with the Sendero de los Sentidos or a stretch towards Taganana",
          "Day 2, afternoon: La Laguna on foot, then Playa de Las Teresitas or the Palmetum in Santa Cruz",
          "Day 2, evening: dinner among the student bars of La Laguna"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above",
          "Day 3, morning: Masca, the village or the ravine descent with a booked slot (Wednesday-Saturday) and the return boat",
          "Day 3, afternoon: boat trip under the Los Gigantes cliffs, or Garachico with the El Caletón pools",
          "Day 3, way back: stop at the Drago Milenario in Icod de los Vinos on the road to Puerto de la Cruz"
        ]
      }
    ],
    zone: [
      {
        "nome": "Puerto de la Cruz",
        "perChi": "those who want green, walks and fewer resorts",
        "testo": "North: cooler and damper, gardens, town life. The sea is less suited to swimming. Close to Anaga and the Teide.",
        "fascia": "70-140 €"
      },
      {
        "nome": "Costa Adeje and Los Cristianos",
        "perChi": "those who want sun and beaches",
        "testo": "South: drier and hotter, many hotels, restaurants, nightlife. Less character. Near the Sur airport.",
        "fascia": "120-250 €"
      },
      {
        "nome": "La Laguna",
        "perChi": "students and those heading to Anaga",
        "testo": "A historic, lively town, cooler and damper. Tram to Santa Cruz.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Santa Cruz de Tenerife",
        "perChi": "those getting around by public transport",
        "testo": "The capital, with the tram to La Laguna, the bus station for the whole island, and the Palmetum and Las Teresitas nearby. Not very touristy, with city prices rather than resort prices.",
        "fascia": "70-130 €"
      }
    ],
    gite: [
      {
        "nome": "La Gomera",
        "distanza": "about 1 hour by ferry",
        "come": "Ferries from Los Cristianos to San Sebastián de La Gomera; on the island you need a rental car or an organised tour.",
        "testo": "The neighbouring island, with Garajonay National Park, a UNESCO-listed laurel forest, and terraced valleys. It can be seen in a long day if you take the first boat."
      },
      {
        "nome": "Gran Canaria",
        "distanza": "30-40 minutes by plane",
        "come": "Inter-island flights with Binter or Canaryfly from Tenerife Norte; rent another car on arrival.",
        "testo": "Las Palmas with Vegueta and Las Canteras beach, the Maspalomas dunes and Roque Nublo. Better as a stay of a few days than as a day trip."
      },
      {
        "nome": "Masca and Punta de Teno",
        "distanza": "about 1 hour from Puerto de la Cruz",
        "come": "By car via Garachico and Buenavista del Norte, or by TITSA bus to Santiago del Teide for the trail.",
        "testo": "The north-western corner of the island, with the Teno massif, villages in ravines and cliffs dropping into the sea."
      }
    ],
    sapori: [
      {
        "nome": "Papas arrugadas with mojo",
        "testo": "Small potatoes boiled in very salty water, with a spicy red sauce or a green one of coriander."
      },
      {
        "nome": "Gofio",
        "testo": "Toasted cereal flour of Guanche origin, used in soups and desserts."
      },
      {
        "nome": "Ropa vieja",
        "testo": "Chickpea stew with shredded meat."
      },
      {
        "nome": "Conejo en salmorejo",
        "testo": "Rabbit marinated in vinegar, garlic and spices."
      },
      {
        "nome": "Tacoronte-Acentejo wine",
        "testo": "Wines from listán negro grapes, grown on volcanic soil."
      }
    ],
    attenzioni: [
      "The Teide summit permit is free but must be booked, and the cable car alone is not enough: without it you can't go beyond the upper station.",
      "At altitude, mountain sickness affects even fit people: ascend slowly and don't carry on if you have a headache.",
      "Taking rocks or volcanic sand from the park is forbidden and can mean fines.",
      "Mountain roads (Masca, Anaga) are narrow and winding: fog and rain can stop traffic.",
      "Swimming under a red flag is dangerous, especially in the north with strong waves.",
      "Sun and UV are strong even with a cold wind: sunscreen and a hat."
    ],
    faq: [
      {
        "domanda": "How many days do you need in Tenerife?",
        "risposta": "Three or four days are enough for Teide, Anaga with La Laguna and the north-west coast between Masca and Garachico. With less than two days you only see Teide."
      },
      {
        "domanda": "Is it better to stay in the north or the south of Tenerife?",
        "risposta": "The north, in Puerto de la Cruz or La Laguna, for real towns and closer access to Teide and Anaga. The south, in Costa Adeje or Los Cristianos, for guaranteed sun and beaches."
      },
      {
        "domanda": "Do you need to book the Teide cable car and the summit permit?",
        "risposta": "They are two separate bookings. The cable car costs €43 return for non-residents and is best booked online with a time slot; the summit permit is capped at about 200 people a day and can be requested up to 56 days ahead."
      },
      {
        "domanda": "Do you need a car in Tenerife?",
        "risposta": "For Teide, Anaga and the west coast, yes: the guaguas go everywhere but are slow in the mountains. Between Santa Cruz and La Laguna the tram is enough."
      },
      {
        "domanda": "Can you hike the Masca trail?",
        "risposta": "Yes, with compulsory booking on the official site, from €40.66, descent only during the pilot phase and with the return boat bought separately. You reach the start on TITSA bus 355 from Santiago del Teide."
      },
      {
        "domanda": "When should you go to Tenerife?",
        "risposta": "All year round: on the coast it stays between 16 and 21 degrees even in January. On Teide it is cold in every season and in winter snow can close the roads."
      }
    ],
    esperienzeSlugs: ['teide-vetta-permesso'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: "Teide volcano seen from the Ucanca plain, in the Las Cañadas caldera, Tenerife",
    immagine: '/images/spagna/tenerife.jpg',
  },
  {
    slug: 'gran-canaria',
    paeseSlug: 'spagna',
    ordine: 12,
    nome: 'Gran Canaria',
    tipologia: ['isola', 'natura', 'mare'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "They call it \"a continent in miniature\" for the many microclimates and landscapes packed into just 1,560 km² (600 sq mi). In the south are the almost Saharan dunes of Maspalomas; in the center the mountains around Roque Nublo, at over 1,800 meters, with the climate of a European mid-altitude mountain range.",
    percheAndarci:
      "In a single day's drive you go from the desert dunes of the south to the Canary pines of the central mountains: no other Canary island has such different landscapes in so little space.",
    cosaVedere: [
      "The Maspalomas Dunes, a nature reserve of shifting sand dunes on the south coast, with the nearby Playa del Inglés beach",
      "Las Palmas de Gran Canaria, the capital, with the historic center of Vegueta and the Christopher Columbus house-museum",
      "Roque Nublo, the volcanic rock that is the island's symbol, reachable with a hike of a few hours from the center of the island",
      "The Barranco de Guayadeque, a canyon inhabited since pre-Hispanic times, with cave houses still lived in",
      "Puerto de Mogán, the southwest port village with navigable canals that earn it the nickname \"little Venice\"",
    ],
    cosaFare: [
      "A hike to Roque Nublo, with a view that on clear days reaches all the way to Teide on Tenerife",
      "A walk among the Maspalomas dunes at sunset, when the heat eases",
      "A tour of the Barranco de Guayadeque, among cave houses and a restaurant dug into the rock",
    ],
    doveDormire: "Las Palmas for city life and the urban beach of Las Canteras; Maspalomas/Playa del Inglés for those who mainly focus on the dunes and the sea.",
    doveMangiare: "As in the rest of the Canary Islands, papas arrugadas with mojo and gofio; in Las Palmas, the Mercado de Vegueta is the right place for a first taste of local cuisine among the stalls.",
    comeArrivare: "Gran Canaria Airport (LPA), about 30 km from Las Palmas and close to the tourist south coast. Domestic flight from Tenerife in about 30-40 minutes, or ferry (about 1h30-2h30 depending on the route).",
    comeSpostarsi: "Rental car to reach the mountainous center; efficient buses along the coast between Las Palmas and Maspalomas.",
    periodoMigliore: "all year, with the same mild climate as the rest of the Canary Islands; the cooler mountains of the center are pleasant in the months when the coast is hotter.",
    costi: "Overall similar to the rest of the Canary Islands, with Las Palmas slightly cheaper than the tourist areas of the south.",
    erroriDaEvitare: [
      "Staying on the south coast without ever going up toward the mountains of the center: it's the part that makes the island \"a continent in miniature\"",
      "Underestimating the sun on the Maspalomas dunes: little shade, better to avoid the middle hours of the day",
    ],
    luoghi: [
      {
        "nome": "Dune di Maspalomas",
        "testo": "A nature reserve of shifting sand dunes on the south coast, with a lagoon and a palm grove. The landscape changes with the wind. Playa del Inglés beach is right next to it.",
        "come": "From the Playa del Inglés promenade or the Maspalomas lighthouse you walk into the dunes. Buses from the coast and from Las Palmas.",
        "quando": "Early morning or sunset: at midday the sun is strong and there is no shade.",
        "tempo": "2 hours",
        "consiglio": "Stay on marked paths: the dunes are protected and parts have restricted access."
      },
      {
        "nome": "Roque Nublo",
        "testo": "A volcanic rock about 80 metres tall, its top 1,813 metres above sea level: the symbol of the island. On clear days you can see Tenerife's Teide from up there.",
        "come": "By car to the La Goleta car park, then a short but uphill trail, out and back.",
        "quando": "Morning, before the clouds. The wind is cold even in summer.",
        "tempo": "1.5-2 hours on foot",
        "url": "https://www.grancanaria.com/",
        "consiglio": "Don't leave the marked path: walls near the rock drop away. Bring a sweatshirt."
      },
      {
        "nome": "Vegueta, Las Palmas",
        "testo": "The district where Las Palmas was founded in 1478, with Santa Ana Cathedral, the Casa de Colón, a museum on Columbus's voyages, and the Vegueta market. Colonial streets with wooden balconies.",
        "come": "On foot from central Las Palmas or by bus from Las Canteras. Parking in paid garages.",
        "quando": "Morning for the market. Museum hours on the official sites, especially on Sundays.",
        "tempo": "half a day",
        "consiglio": "Climb the cathedral tower for the view over the roofs."
      },
      {
        "nome": "Playa de Las Canteras",
        "testo": "Three kilometres of Las Palmas city beach, shielded by a rock barrier (La Barra) that makes it a calm pool. A promenade with bars, and surf.",
        "come": "Reached by city bus or on foot from Santa Catalina. The beach is in the city centre.",
        "quando": "All year. La Barra shows at low tide.",
        "tempo": "half a day",
        "consiglio": "In heavy seas the barrier doesn't protect: check the flags."
      },
      {
        "nome": "Barranco de Guayadeque",
        "testo": "A canyon in the south-east with inhabited cave houses and ancient Guanche dwellings. Some restaurants are carved into the rock.",
        "come": "By car from Agüimes on the GC-103. You can walk along the bottom.",
        "quando": "Morning or lunch. In winter clouds are possible up high.",
        "tempo": "2-3 hours",
        "consiglio": "The visitor centre up top explains the caves. Eat in a cave restaurant, but book."
      },
      {
        "nome": "Puerto de Mogán",
        "testo": "A harbour village with canals, white houses with bougainvillea and a beach. Built in the 1980s in local style and called little Venice.",
        "come": "By car from Maspalomas on the GC-1 or by bus. The centre is easy to walk.",
        "quando": "Friday is market day. Sunset over the harbour is quiet.",
        "tempo": "3 hours",
        "consiglio": "The Friday market is crowded: arrive early."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Vegueta and the market",
          "Lunch at Las Canteras",
          "Afternoon: Maspalomas at sunset"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Las Palmas, Vegueta and Las Canteras",
          "Day 2: Roque Nublo in the morning, Guayadeque at lunch, the dunes at sunset"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Las Palmas",
          "Day 2: central mountains, Roque Nublo and Tejeda",
          "Day 3: Puerto de Mogán and Maspalomas"
        ]
      }
    ],
    zone: [
      {
        "nome": "Las Palmas (Las Canteras)",
        "perChi": "those who want city and beach",
        "testo": "Life all year, restaurants, buses. Cooler and windier than the south. Evening noise."
      },
      {
        "nome": "Maspalomas and Playa del Inglés",
        "perChi": "those who want guaranteed sun",
        "testo": "South coast: hot and dry, big hotels, dunes nearby. More touristy and less authentic."
      },
      {
        "nome": "Puerto de Mogán",
        "perChi": "those who want calm",
        "testo": "Small and quiet, but you need a car to get around. Fewer places to eat."
      }
    ],
    sapori: [
      {
        "nome": "Papas arrugadas with mojo",
        "testo": "Small potatoes boiled in salted water, with a spicy red or green sauce."
      },
      {
        "nome": "Sancocho canario",
        "testo": "Salted fish with potatoes and mojo, often a Sunday dish."
      },
      {
        "nome": "Queso de flor de Guía",
        "testo": "A soft cheese made with thistle flowers, typical of Guía."
      },
      {
        "nome": "Arehucas rum",
        "testo": "Rum made on the island, also in honey version (ron miel)."
      },
      {
        "nome": "Bienmesabe",
        "testo": "A dessert of almonds, eggs and honey, typical of Tejeda."
      }
    ],
    attenzioni: [
      "In the south, at Playa del Inglés and Puerto Rico, timeshare promoters stop tourists with scratch cards and gifts: decline.",
      "On the dunes, stay on the paths and carry water: no shade and strong sun.",
      "Mountain roads (GC-60) have many bends and fog: drive slowly.",
      "Strong currents at some southern beaches and Las Canteras in heavy seas: respect the flags.",
      "In summer wildfires are frequent in the mountains: fire is banned, respect trail closures.",
      "Vegueta and Las Palmas: petty pickpocketing in markets and at the port."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: "The sand dunes of Maspalomas in the low light of sunset, with the ocean in the background, Gran Canaria",
    immagine: '/images/spagna/gran-canaria.jpg',
  },
  {
    slug: 'lanzarote',
    paeseSlug: 'spagna',
    ordine: 13,
    nome: 'Lanzarote',
    tipologia: ['isola', 'vulcano', 'architettura'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The most volcanic of the Canary Islands: between 1730 and 1736 eruptions covered a quarter of the surface with lava and created the Timanfaya landscape. Since 1993 the whole island has been a UNESCO Biosphere Reserve, the first of the Canary Islands to have it across its entire territory. Architecture and urban planning bear the mark of a single artist, César Manrique.",
    percheAndarci:
      "For Timanfaya, a lunar landscape that can only be visited on a guided bus (you can't walk freely on the lava), with live geothermal demonstrations. And to see how an entire island was shaped by a single architect-artist, who banned billboards and buildings taller than palm trees: rules that still apply today.",
    cosaVedere: [
      "Timanfaya National Park, with the Ruta de los Volcanes on a guided bus and the geothermal demonstrations at the Islote del Hilario",
      "The Jameos del Agua, a lava tube transformed by César Manrique into an arts center with a natural pool and a small endemic blind crustacean",
      "The Mirador del Río, Manrique's viewpoint set into the rock with a view of the island of La Graciosa",
      "The Cueva de los Verdes, another lava tube, among the longest in the world, visitable on a guided route",
      "The Jardín de Cactus, Manrique's last work, a terraced garden with hundreds of cactus species in an old quarry",
      "The La Geria wine region, where vines grow in small pits dug into the volcanic ash and protected by semicircular walls",
    ],
    cosaFare: [
      "The Ruta de los Volcanes at Timanfaya, always staying aboard the bus for reasons of safety and protection of the ground still hot a few meters below the surface",
      "A tour of César Manrique's works (Jameos del Agua, Mirador del Río, Jardín de Cactus), which alone explain the look of the island",
      "Wine tasting in La Geria, among the vineyards dug into volcanic ash",
      "Ferry for a day trip to La Graciosa, the car-free islet north of Lanzarote",
    ],
    doveDormire: "Arrecife, the capital, for connections; Playa Blanca in the south or Puerto del Carmen for those who focus on the sea, both with low buildings because of the urban planning rules Manrique wanted.",
    doveMangiare: "As in the rest of the Canary Islands, papas arrugadas and mojo. The wines of La Geria, in particular the malvasía volcánico, come from vineyards that have no equivalent elsewhere and deserve a tasting of their own.",
    comeArrivare: "Lanzarote Airport (ACE), near Arrecife. Domestic flight from the other Canary Islands or ferry from Gran Canaria/Fuerteventura.",
    comeSpostarsi: "A rental car is almost indispensable: the distances between the places to see are greater than on the other smaller islands and buses exist, but they run rarely.",
    periodoMigliore: "all year, with the same mild climate as the other Canary Islands; Timanfaya, exposed to the sun on dark terrain, is more comfortable to visit in the cooler hours of the day.",
    costi: "Timanfaya about €12-18 with bus included; Jameos del Agua and Cueva de los Verdes about €10-12 each; a combined ticket for several Manrique sites almost always pays off for those who see them all.",
    erroriDaEvitare: [
      "Getting off the bus or leaving the marked routes at Timanfaya: it's forbidden for safety (the ground stays hot a few meters down) and for environmental protection",
      "Underestimating the distances between one site and the next: Lanzarote is larger than it looks on the map and the roads, however good, take time",
      "Visiting Manrique's sites as separate attractions, without grasping the common thread: they're conceived as a single project that unites architecture and volcanic landscape",
    ],
    luoghi: [
      {
        "nome": "Parco Nazionale di Timanfaya",
        "testo": "The lava and ash landscape created by the eruptions of 1730-1736. It can only be visited by bus along the Ruta de los Volcanes, with recorded commentary. At Islote de Hilario there are geothermal demonstrations: water poured into a pipe turns to steam and food is cooked on the heat of the ground.",
        "come": "By car from Yaiza or Tinajo to the entrance. The ticket, which includes the bus tour, is bought online for a set date and time. You don't get off the bus.",
        "quando": "Every day 9:00-15:45 (CACT website). Pick an early slot: later the queues grow.",
        "tempo": "an hour and a half",
        "costo": "€30, free up to age 6 (CACT, 2026)",
        "url": "https://cactlanzarote.com/",
        "consiglio": "The camel ride is a separate activity with its own fee; you can skip it."
      },
      {
        "nome": "Jameos del Agua",
        "testo": "A stretch of the La Corona lava tube by the sea, the first centre created by César Manrique, turned into a garden, auditorium and natural lagoon. A tiny blind white crab, Munidopsis polymorpha, lives in the lake.",
        "come": "By car from Arrecife on the LZ-1, on the north coast. Visited on foot along a loop.",
        "quando": "Every day 10:00-18:00 (CACT website); there are evening events, check the calendar. By day go early to avoid groups.",
        "tempo": "1.5 hours",
        "url": "https://cactlanzarote.com/",
        "costo": "from €17, free up to age 6 (CACT, 2026)",
        "consiglio": "Don't throw coins into the lake: they harm the crabs. It pairs well with the Cueva de los Verdes, a few minutes away."
      },
      {
        "nome": "Cueva de los Verdes",
        "testo": "A visitable stretch of the lava tube formed by the eruption of La Corona volcano, with galleries, mineral formations and lighting effects. Guided visits last about 50 minutes.",
        "come": "By car on the LZ-1 near Haría, close to Jameos del Agua. Guided visit at set times, with an online ticket for a date and time.",
        "quando": "Every day 9:30-16:45 (CACT website); inside the temperature is constant. Morning to avoid groups.",
        "tempo": "50 minutes",
        "url": "https://cactlanzarote.com/",
        "costo": "€17, free up to age 6 (CACT, 2026)",
        "consiglio": "The route has steps and a low stretch: wear closed shoes with grippy soles."
      },
      {
        "nome": "Mirador del Río",
        "testo": "Manrique's viewpoint built into the cliff and clad in volcanic stone, almost invisible from outside, with windows over the El Río strait and the island of La Graciosa. White curved interiors, a bar with a view.",
        "come": "By car from the LZ-1 via Haría, at the northern tip of the island.",
        "quando": "Every day 10:00-17:00 (CACT website). Morning, with fewer clouds; in winter the sky is often overcast.",
        "tempo": "1 hour",
        "costo": "€9, free up to age 6 (CACT, 2026)",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Have a coffee at the inside bar facing the windows: it's the best way to take in the view without hurry. Combine it on the same trip with Jameos del Agua and the Cueva de los Verdes."
      },
      {
        "nome": "Jardín de Cactus",
        "testo": "Manrique's last work: an amphitheatre of terraces in an old quarry, with cacti from five continents. A windmill stands at the entrance.",
        "come": "By car from Arrecife to Guatiza, in the north. Visited on foot, flat with a few steps.",
        "quando": "Every day 10:00-17:00 (CACT website). Morning, for softer light.",
        "tempo": "1 hour",
        "url": "https://cactlanzarote.com/",
        "costo": "€9, free up to age 6 (CACT, 2026)",
        "consiglio": "On the road you pass Guatiza and its prickly pear plantations, where cochineal is farmed."
      },
      {
        "nome": "La Geria",
        "testo": "A basin of black volcanic ash where vines grow in pits dug into the ground and shielded by semicircular walls. This is where malvasía volcánica comes from. Wineries line the LZ-30.",
        "come": "By car on the LZ-30 between Yaiza and Mozaga. The wineries offer tastings.",
        "quando": "September for the harvest; in other months wineries open by day.",
        "tempo": "2 hours",
        "consiglio": "Stop at the lay-bys and drive slowly: many tourists stop on the road."
      },
      {
        "nome": "Playa Papagayo e Los Ajaches",
        "testo": "Pale sand coves and turquoise water in the Los Ajaches nature park, in the south. Papagayo is the best known; the others (Caleta del Congrio, Playa Mujeres) are quieter.",
        "come": "By car from Playa Blanca on a dirt road; there is an access fee for cars (charged by Yaiza town council). Walk from the car parks.",
        "quando": "Morning in summer, with little wind. Wind kicks up the sand.",
        "tempo": "half a day",
        "consiglio": "Bring a parasol, water and food: the coves have no services."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Timanfaya",
          "Lunch in Yaiza",
          "Afternoon: La Geria with a winery",
          "Evening: Playa Blanca"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: south, Timanfaya and La Geria",
          "Day 2: north, Jardín de Cactus, Jameos del Agua, Cueva de los Verdes, Mirador del Río"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Timanfaya and La Geria",
          "Day 2: Manrique's works and the north",
          "Day 3: Papagayo or the boat trip to La Graciosa"
        ]
      }
    ],
    zone: [
      {
        "nome": "Playa Blanca",
        "perChi": "those who want beaches and calm",
        "testo": "South: quiet, a promenade and easy beaches. Near Papagayo and Timanfaya. Little life away from the seafront."
      },
      {
        "nome": "Puerto del Carmen",
        "perChi": "those who want activity",
        "testo": "A long avenue of bars and restaurants, a long beach. More touristy and noisy. Near the airport."
      },
      {
        "nome": "Costa Teguise and Arrecife",
        "perChi": "those who want services and wind for surfing",
        "testo": "Costa Teguise is more modern, with wind for windsurfing; Arrecife is the capital, more practical than pretty."
      }
    ],
    sapori: [
      {
        "nome": "Papas arrugadas with mojo",
        "testo": "Small potatoes boiled in very salty water, with red or green mojo."
      },
      {
        "nome": "Fresh fish",
        "testo": "Grilled vieja, cherne and sama, especially in the restaurants of Playa Blanca and La Santa."
      },
      {
        "nome": "Malvasía volcánica",
        "testo": "White wine from La Geria, dry or sweet."
      },
      {
        "nome": "Goat cheese",
        "testo": "Fresh or aged goat cheese, often rolled in pimentón."
      },
      {
        "nome": "Cochineal and prickly pears",
        "testo": "Natural red dye and the fruit of the Guatiza cacti."
      }
    ],
    attenzioni: [
      "At Timanfaya you don't leave the bus or the routes: the ground is hot and protected, and fines are possible.",
      "Collecting black sand, lapilli or volcanic rocks is forbidden and carries fines.",
      "Strong trade winds lift sand and spoil the southern beaches; there are gusts on northern roads.",
      "Dirt roads to Papagayo: rental firms often exclude underbody damage; read the contract.",
      "The Sunday market in Teguise is very crowded: pickpockets.",
      "Strong sun even with clouds and wind: sunscreen and a hat."
    ],
    esperienzeSlugs: ['timanfaya-ruta-volcanes'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: "The volcanic cones and expanses of dark ash of Timanfaya National Park, Lanzarote",
    immagine: '/images/spagna/lanzarote.jpg',
  },
]
