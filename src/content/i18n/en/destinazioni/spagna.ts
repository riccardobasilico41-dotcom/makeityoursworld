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
    comeArrivare: "San Pablo Airport, about 10 km from the center (EA bus or taxi). AVE high-speed train from Madrid in about 2h30.",
    comeSpostarsi: "The historic center can be covered almost entirely on foot; for longer distances, city buses and the tram (line T1) along the central axis.",
    periodoMigliore:
      "March-May and October-early November, with pleasant temperatures. Avoid July-August: Seville is among the hottest cities in Spain, with averages often above 36°C (97°F) and peaks well beyond. Holy Week and the Feria de Abril (two weeks after Easter) bring crowds and high prices, but they're also the days when the city lives its most deeply felt traditions.",
    costi: "Cathedral and Giralda about €15; Real Alcázar about €15.50 (Royal Apartments +€5.50, free in the evening with a reservation in a dedicated time slot); an average flamenco tablao €35-45 per person.",
    erroriDaEvitare: [
      "Underestimating the summer heat: from June to September the middle hours of the day should be avoided for any outdoor activity",
      "Choosing the first tablao advertised in the center without checking its reputation: the most touristy venues put on standard, amplified shows, far from the flamenco of the neighborhoods",
      "Climbing the Giralda in the middle of the day in high season: the lines under the sun can be long",
    ],
    luoghi: [
      {
        "nome": "Seville Cathedral and Giralda",
        "testo": "The largest Gothic cathedral in the world, built after the Reconquista on the site of the great Almohad mosque. Inside is the funerary monument to Christopher Columbus. The bell tower, the Giralda, is the former minaret: you climb it by a ramp, not stairs, and from the top you see the rooftops and the Alcázar.",
        "come": "It stands in the middle of the old town, a short walk from Santa Cruz or Plaza Nueva. A single ticket covers the cathedral and the Giralda: the visit starts at the tower, which has its own access control.",
        "quando": "Monday-Saturday about 10:45-18:00, Sunday from mid-afternoon until 19:00 (2026 hours, which can change for religious services: check the calendar on the website). Best at opening.",
        "tempo": "About 75 minutes, 2 hours without rushing",
        "costo": "13 euros online, 14 euros at the ticket office (2026)",
        "url": "https://www.catedraldesevilla.es/",
        "consiglio": "Buy the ticket online the evening before: in spring the ticket-office queue can cost an hour."
      },
      {
        "nome": "Real Alcázar",
        "testo": "A royal palace still in use, born as a Moorish fortress and rebuilt in the 14th century by King Peter I in Mudéjar style with craftsmen from Granada. The Palacio de Pedro I, the Salón de Embajadores and the stucco-decorated patios are the heart of the visit. Behind lie large gardens with fountains and hedge mazes.",
        "come": "Enter through the Puerta del León, on Plaza del Triunfo, opposite the cathedral. There is a single route; audio guides are rented at the entrance.",
        "quando": "Open 9:30am-7pm from April to September and 9:30am-5pm from October to March. Closed on 1 and 6 January, Good Friday and 25 December. Early morning or the last slot of the afternoon to avoid the groups.",
        "tempo": "2-3 hours",
        "costo": "15.50 euros full price (rate on the official website, 2026); the Royal Apartments cost extra",
        "url": "https://www.alcazarsevilla.org/",
        "consiglio": "Book online and choose the first slot: the patios are small and only enjoyable without crowds. The Royal Apartments are visited with a separate booking."
      },
      {
        "nome": "Barrio de Santa Cruz",
        "testo": "The former Jewish quarter, between the cathedral and the Murillo gardens. Narrow lanes, wrought-iron balconies, small squares with orange trees and patios glimpsed through gates.",
        "come": "On foot, right behind the Alcázar. There is no set route: enter from Calle Judería and leave from the other side.",
        "quando": "At 8-9 in the morning it is empty and cool; after 11 it fills with groups.",
        "tempo": "1-2 hours",
        "consiglio": "Come back in the evening, after dinner: the lanes empty out and the squares are lit."
      },
      {
        "nome": "Plaza de España and Parque de María Luisa",
        "testo": "A monumental semicircle built for the 1929 Ibero-American Exposition, with a canal, bridges and a series of ceramic alcoves, one for each Spanish province. The park beside it is the city's big green lung.",
        "come": "On foot in 20 minutes from the cathedral, or a short bike ride along the park. Free entry.",
        "quando": "Early morning or at sunset. In the central hours of summer there is no shade.",
        "tempo": "1 hour, plus the park",
        "consiglio": "For photos without people, be there just before 9."
      },
      {
        "nome": "Triana",
        "testo": "The district across the Guadalquivir, historically of potters, sailors and Roma families. It is one of the cradles of flamenco. Today it has a covered market, azulejo workshops and bars on Calle Betis, facing the river.",
        "come": "Walk across the Puente de Isabel II (Triana Bridge) from the center in 10-15 minutes.",
        "quando": "The market works mostly in the morning. In the evening Calle Betis is full of people and the river gives a view of the Torre del Oro.",
        "tempo": "2-3 hours",
        "consiglio": "Eat here rather than in the center: the bars cost less and the customers are mostly locals."
      },
      {
        "nome": "Flamenco in a tablao",
        "testo": "Flamenco is best seen in small venues, where the musicians play a few meters from the audience without amplification. Singer, guitarist and dancer answer each other: it is a show you can follow without understanding the words.",
        "come": "Book a seat by phone or on the venue's website a few days ahead. Shows last about an hour. The Museo del Baile Flamenco, in Santa Cruz, also runs evening shows.",
        "quando": "Shows almost every day, usually at 19:00-21:00. Check the weekly program.",
        "tempo": "1-1.5 hours",
        "consiglio": "Sit in the front rows and ask the venue whether the program is acoustic: it avoids the big shows for tour groups."
      },
      {
        "nome": "Metropol Parasol (Las Setas) and Casa de Pilatos",
        "testo": "Las Setas is a large wooden structure with a panoramic walkway above Plaza de la Encarnación, opened in 2011 over a Roman archaeological site. The Casa de Pilatos is a noble palace in Mudéjar and Renaissance style, less visited than the Alcázar but with similar patios.",
        "come": "On foot from the center, about 10 minutes from Plaza Nueva to Las Setas and 10 from the opposite side to the Casa de Pilatos.",
        "quando": "Las Setas at sunset, the Casa de Pilatos in the morning. Check hours on the operators' websites.",
        "tempo": "1 hour each",
        "consiglio": "If the Alcázar is sold out for your date, the Casa de Pilatos is the closest alternative for seeing a Mudéjar palace."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "8:30 Cathedral and Giralda with an online ticket already bought, before the groups.",
          "11:00 Real Alcázar, in the first available slot or with the audio guide.",
          "14:00 Late lunch in Santa Cruz or a bar in the center: tapas and salmorejo.",
          "16:30 Stroll through Plaza de España and Parque de María Luisa, where shade helps.",
          "20:00 Cross the Triana Bridge, tapas dinner by the river and, if possible, acoustic flamenco."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan, without rushing and with a break in mid-afternoon.",
          "Day 2, morning: Casa de Pilatos and Las Setas, on foot along Calle Sierpes.",
          "Day 2, late morning: Triana market and ceramic workshops.",
          "Day 2, afternoon: Torre del Oro and a walk on the Guadalquivir.",
          "Day 2, evening: flamenco show, then tapeo."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above.",
          "Day 3, morning: day trip to Córdoba by AVE train, about 45 minutes, for the Mezquita.",
          "Day 3, afternoon: back in Seville for a last walk in the María Luisa park or Santa Cruz in the evening."
        ]
      }
    ],
    zone: [
      {
        "nome": "Santa Cruz",
        "perChi": "Those who want to be a step from the monuments",
        "testo": "You step out of the hotel and you are already under the cathedral. By day it is crowded, and in the evening the lanes echo with tables from tourist restaurants. Prices are the highest. You get around on foot only, and taxis do not enter the lanes."
      },
      {
        "nome": "Triana",
        "perChi": "Those who prefer a lively, less touristy district",
        "testo": "It costs a little less and has more bars used by locals. The center is 10-15 minutes on foot across the bridge. The noise from riverside venues in the evening can reach the nearest rooms."
      },
      {
        "nome": "Alameda de Hércules and La Macarena",
        "perChi": "Budget travelers or those who like nightlife",
        "testo": "A younger district, with bars, alternative venues and low prices. It is 15-20 minutes on foot from the cathedral. On weekends the square is noisy until late."
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
      "Heat from June to September: spend the hours between 13 and 18 indoors. Carry water and a hat.",
      "Tablaos: be wary of people stopping you in the street with discounted flyers. Book directly with the venue."
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
    comeArrivare: "Federico García Lorca Airport, about 15 km from the center. AVE train from Madrid in about 3h10-3h30; direct bus from Seville (about 3h) or from Córdoba (about 2h).",
    comeSpostarsi: "Historic center and Albaicín on foot only (steep climbs); local minibuses for the higher areas of the Sacromonte and the Albaicín; the Alhambra can be reached on foot uphill from the center or with a dedicated shuttle bus.",
    periodoMigliore: "April-June and September-October. Summer is hot but less extreme than in Seville thanks to the altitude (about 700 meters) and the proximity of the Sierra Nevada; winter is cold, with snow visible on the peaks a few km from the city.",
    costi: "Alhambra general admission €22.27 plus the online fee (2026) (tickets sell out weeks ahead, in high season even months); Cathedral and Capilla Real about €7 each.",
    erroriDaEvitare: [
      "Arriving in Granada without having already booked the Alhambra: tickets are sold on the official website (also by phone or at the ticket machines) and in high season (June-September and holidays) they sell out weeks in advance",
      "Underestimating the climbs of the Albaicín and the Sacromonte: they're steep and cobbled, not very comfortable with luggage or unsuitable shoes",
      "Booking a flamenco show without doing research: in the Sacromonte authentic zambras and very touristy formats coexist at the same price",
    ],
    luoghi: [
      {
        "nome": "Alhambra and Generalife",
        "testo": "The citadel of the Nasrid sultans on the Sabika hill: the Nasrid Palaces with stuccoes and stalactite ceilings, the military Alcazaba, the Renaissance palace of Charles V and the Generalife gardens. The Court of the Lions and the Hall of the Two Sisters are the best-known spots.",
        "come": "On foot uphill from the center (25-30 minutes) or by city minibus. Entry is by named ticket and for the Nasrid Palaces the time slot printed on it applies: arrive early, not late. Bring ID and confirmation.",
        "quando": "Open every day: 8:30am-8pm from 1 April to 14 October, 8:30am-6pm from 15 October to 31 March. Closed on 25 December and 1 January. Tickets are sold through the official channel (online, by phone or at the ticket machines) and in high season they sell out weeks ahead.",
        "tempo": "3-4 hours, half a day to see everything",
        "costo": "22.27 euros for the daytime Alhambra General ticket, plus a fee for online purchases (2026)",
        "url": "https://www.alhambra-patronato.es/",
        "consiglio": "Choose the morning slot for the Nasrid Palaces, when light comes in through the patios. Keep in mind that the route is entirely outdoors."
      },
      {
        "nome": "Albaicín",
        "testo": "The Moorish hillside district, a UNESCO site, with narrow uphill lanes, carmenes (houses with an enclosed garden) and small squares. From several points you see the Alhambra opposite.",
        "come": "On foot from Plaza Nueva, climbing by the Cuesta del Chapiz or Calle Calderería Nueva. There are also minibuses that loop around the district.",
        "quando": "Early morning or late afternoon. In the central hours of summer the climbs are heavy.",
        "tempo": "2-3 hours",
        "consiglio": "Walk down and go up by minibus: the slopes are felt mostly uphill."
      },
      {
        "nome": "Mirador de San Nicolás",
        "testo": "Granada's best-known viewpoint: the Alhambra opens in front and the peaks of the Sierra Nevada rise behind. At sunset it fills with people, musicians and vendors.",
        "come": "A walk of about 20 minutes uphill from Plaza Nueva, or minibus C31 from the center. Free entry.",
        "quando": "At sunset. Alternatively at dawn, almost with no one.",
        "tempo": "30-60 minutes",
        "consiglio": "For the same view with fewer crowds, climb to the nearby Mirador de San Cristóbal or the Carmen de los Mártires."
      },
      {
        "nome": "Cathedral and Capilla Real",
        "testo": "The Renaissance cathedral has a tall, bright nave, unlike the Gothic ones. The Royal Chapel next door holds the tombs of the Catholic Monarchs, Ferdinand and Isabella, in carved marble.",
        "come": "On foot from the center, in the cathedral district. There are two separate entrances.",
        "quando": "Open every day, usually with a break in the central hours, and reduced hours on Sunday. Check the official hours.",
        "tempo": "1 hour for the cathedral, 30-45 minutes for the Royal Chapel",
        "url": "https://catedraldegranada.com/",
        "consiglio": "Best visited after the Alhambra, to understand what came after the fall of the Nasrid kingdom."
      },
      {
        "nome": "Sacromonte and the Cave Museum",
        "testo": "The district of cave houses on the hill facing the Alhambra, historically inhabited by the Roma community. The zambra was born here, a more ritual, group-based flamenco, seen in some cuevas.",
        "come": "On foot along the Camino del Sacromonte from the Albaicín, or by minibus C34. The road is long and uphill.",
        "quando": "Shows in the evening. By day you visit the museum and stroll through the landscape of caves.",
        "tempo": "2-3 hours, plus an evening for a show",
        "consiglio": "Before booking a zambra, read recent reviews: very touristy shows cost the same as the serious ones."
      },
      {
        "nome": "Alcaicería and Corral del Carbón",
        "testo": "The Alcaicería was the old Nasrid silk market: today it is a maze of tourist shops. The Corral del Carbón next to it is a 14th-century caravanserai, one of the few Moorish civil buildings left in Spain.",
        "come": "On foot, a few steps from the cathedral. Entry to the Corral is free during opening hours.",
        "quando": "In the morning, when shops open and the streets are clearer.",
        "tempo": "30-45 minutes",
        "consiglio": "The Corral is worth seeing even just to step into the courtyard with its wooden galleries."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "8:30 Alhambra with a pre-booked ticket and the morning slot for the Nasrid Palaces.",
          "13:30 Lunch in the center with free tapas with your drink.",
          "16:00 Cathedral and Royal Chapel.",
          "18:30 Climb to the Albaicín and Mirador de San Nicolás for sunset.",
          "21:00 Tapas bar crawl in the center or on Calle Navas."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan, with the Alhambra and sunset.",
          "Day 2, morning: Albaicín and Corral del Carbón.",
          "Day 2, afternoon: Sacromonte and the Cave Museum.",
          "Day 2, evening: zambra in a cueva, after checking reviews."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above.",
          "Day 3: trip to the Sierra Nevada (skiing in winter, an hour by car) or to the Alpujarras, with white villages on the southern side of the range."
        ]
      }
    ],
    zone: [
      {
        "nome": "Center around the cathedral",
        "perChi": "Those who want convenience and evening life",
        "testo": "Everything on foot: Alhambra, tapas, Albaicín. In the evening the noise of the bars reaches low-floor rooms. Prices are average."
      },
      {
        "nome": "Albaicín",
        "perChi": "Those looking for atmosphere and a view of the Alhambra",
        "testo": "Rooms in carmenes and small guesthouses, quiet at night. The streets are steep and cobbled, awkward with suitcases: a taxi often cannot reach the door."
      },
      {
        "nome": "Realejo",
        "perChi": "Those who want a local, cheaper neighborhood",
        "testo": "At the foot of the Alhambra, with bars used by university students and low prices. The center is 10-15 minutes on foot, and the climb toward the hill starts right away."
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
    comeArrivare: "AVE train from Madrid in about 1h40-2h, from Seville in about 45 minutes, from Málaga in about 1h: it's one of the best-connected hubs of the Andalusian high-speed network.",
    comeSpostarsi: "The historic center is small and can be covered entirely on foot.",
    periodoMigliore:
      "March-May (with the Patios Festival in May) and October. Córdoba is, along with Seville, the hottest city in Spain: from mid-July to late August many attractions shorten their hours because of the heat, which here hit the Spanish record of 47.6°C (118°F) in August 2021.",
    costi: "Mezquita-Catedral about €15 (night visit €18; free on weekdays 8:30-9:30); Alcázar de los Reyes Cristianos about €7.",
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
        "costo": "15 euros (2026)",
        "url": "https://mezquita-catedraldecordoba.es/",
        "consiglio": "The free morning slot is the best: few people and low light in the aisles. You can also pay and enter later, but the silence is lost."
      },
      {
        "nome": "Judería and Calleja de las Flores",
        "testo": "The old Jewish quarter, behind the Mezquita: narrow white lanes, flowered courtyards and the small Calleja de las Flores that opens onto the bell tower. The 14th-century synagogue is also here, one of the three left in Spain.",
        "come": "On foot, starting from the Puerta de Almodóvar. There is no fixed route.",
        "quando": "Early morning or late afternoon. At midday in summer the lanes hold the heat.",
        "tempo": "1-2 hours",
        "consiglio": "Step into the open patios: the door is often left ajar and looking from the entrance is allowed."
      },
      {
        "nome": "Alcázar de los Reyes Cristianos",
        "testo": "A fortress-palace built by Alfonso XI in the 14th century and used by the Catholic Monarchs. Inside are Roman mosaics, baths and terraced gardens with fountains and citrus trees, best seen from the towers.",
        "come": "On foot from the Mezquita, 5 minutes toward the river. You climb the towers for the view of the city.",
        "quando": "Check hours and closing days on the monument's website. In summer, better in the morning.",
        "tempo": "1-1.5 hours",
        "consiglio": "The gardens are the only shade to sit in after the Mezquita."
      },
      {
        "nome": "Puente Romano and Torre de la Calahorra",
        "testo": "A bridge with 16 arches over the Guadalquivir, of Roman origin and rebuilt several times. From the opposite bank you get the classic view of the Mezquita. The Calahorra tower, at the far end, houses a museum.",
        "come": "On foot, a step from the Mezquita. The bridge is pedestrian only.",
        "quando": "At sunset or after dark, when the Mezquita is lit.",
        "tempo": "30-45 minutes",
        "consiglio": "Cross the bridge and take the photo from the opposite bank, not from the bridge itself."
      },
      {
        "nome": "Patios de Córdoba",
        "testo": "The inner courtyards of houses, with potted flowers, fountains and wells, are a local tradition recognized by UNESCO. During the May festival owners open their homes to the public and the best one wins a contest.",
        "come": "On foot in the San Basilio district and in the Judería. Some public patios can be visited all year.",
        "quando": "Festival in early May, over about two weeks. Dates and hours are checked on the city tourism site.",
        "tempo": "1-2 hours",
        "consiglio": "San Basilio, to the south-west, has the best-kept patios and fewer people than the Judería."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "8:30 Mezquita in the free morning slot, entering before 9:20.",
          "10:30 Judería and Calleja de las Flores.",
          "12:30 Alcázar de los Reyes Cristianos.",
          "14:00 Lunch with salmorejo and rabo de toro, then a break in the hot hours.",
          "18:30 Roman Bridge and the opposite bank, when the light is best."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan, with more time for the lanes.",
          "Day 2, morning: San Basilio patios (or the festival route in May).",
          "Day 2, afternoon: Medina Azahara, the caliphal city a few kilometers away, using the site's bus.",
          "Day 2, evening: tapas dinner in the center."
        ]
      }
    ],
    zone: [
      {
        "nome": "Judería",
        "perChi": "Those who want to be near the Mezquita",
        "testo": "Rooms in historic houses with a patio, a minute from the monument. It is quiet at night, but there are more tourists and expensive restaurants. Traffic does not reach into the lanes."
      },
      {
        "nome": "Around Plaza de las Tendillas",
        "perChi": "Those looking for lower prices and evening life",
        "testo": "A shopping and bar area, 10 minutes on foot from the Mezquita. Street-side rooms can be noisy on weekends."
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
      "Summer: from mid-July through August temperatures often exceed 40 degrees. Plan visits for early morning and evening.",
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
    comeArrivare: "By car from Seville (about 2h) or from Málaga (about 1h30) through the Serranía de Ronda; regional train from Málaga (about 2h, scenic) or from Algeciras.",
    comeSpostarsi: "The center is covered on foot; for the nearby pueblos blancos you need a car, bus connections between villages are scarce and slow.",
    periodoMigliore: "April-June and September-October, with milder temperatures than in the Guadalquivir plain thanks to the altitude (about 750 meters).",
    costi: "Plaza de Toros and museum about €10; Puente Nuevo and Mirador free; Arab baths about €3.50.",
    erroriDaEvitare: [
      "Doing it as a day trip from Seville without staying overnight: the trip (about 2h each way) makes the visit rushed unless you stay at least one night",
      "Driving among the pueblos blancos without allowing for narrow mountain roads and hairpin turns",
      "Underestimating the wind on the Puente Nuevo: in the gorge the currents can be strong, especially in winter",
    ],
    luoghi: [
      {
        "nome": "Puente Nuevo and the Tajo gorge",
        "testo": "The stone bridge completed in 1793 spans the Tajo gorge, more than 100 meters deep, and joins the Moorish town to the newer district. You can walk across it and look at it from below, from the viewpoint trails.",
        "come": "On foot from the center, the bridge is in the middle of town. For the view from below, take the Camino de los Molinos path down, on the south side, or the Mirador de Aldehuela.",
        "quando": "Free entry on the bridge. The best moment is sunset, with low light on the gorge.",
        "tempo": "1-2 hours",
        "consiglio": "The path down is steep and the climb back tires you: closed shoes and water."
      },
      {
        "nome": "Plaza de Toros",
        "testo": "The Ronda bullring, from 1785, is among the oldest in Spain and the home of Pedro Romero's modern bullfighting school. Inside is a small museum with costumes and posters. You can also enter as a simple architectural site, without attending bullfights.",
        "come": "On foot from the Puente Nuevo, 5 minutes toward the Mercadillo district.",
        "quando": "Check hours and opening days on the operator's website; they change by season.",
        "tempo": "1 hour",
        "consiglio": "Those who do not want the bullfighting theme can look only at the architecture and the horse stables."
      },
      {
        "nome": "Baños Árabes and la Ciudad",
        "testo": "The Ciudad, the Moorish quarter, has narrow lanes and old gates. The Arab baths from the 13th-14th century, at the foot of the old town, are among the best preserved in Spain, with star-shaped vaults.",
        "come": "On foot from the Puente Nuevo, descending toward the Guadalevín river. The route is downhill and shaded.",
        "quando": "Check opening hours on the town council's site. In the morning to avoid groups.",
        "tempo": "1-1.5 hours in total",
        "consiglio": "It combines well with the mill path under the gorge, in the same half day."
      },
      {
        "nome": "Setenil de las Bodegas",
        "testo": "A white village half an hour by road from Ronda, with houses and bars built under rocks that overhang the river. The best-known streets are Cuevas del Sol and Cuevas de la Sombra, with tables in the shade of the boulder.",
        "come": "Reached by car from Ronda in about 25-30 minutes, with mountain bends. The village is small and explored on foot.",
        "quando": "In the morning or at midday for lunch. On summer weekends car access is slow.",
        "tempo": "2-3 hours",
        "consiglio": "Park in the lots outside the village, not in the narrow streets."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "9:30 Puente Nuevo and a walk in the Moorish quarter.",
          "11:00 Baños Árabes and the path down into the gorge.",
          "13:30 Lunch with rabo de toro or lamb.",
          "16:00 Plaza de Toros and museum.",
          "19:00 Sunset from the viewpoints over the gorge."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan, with an overnight in Ronda.",
          "Day 2, morning: Setenil de las Bodegas by car.",
          "Day 2, afternoon: Grazalema and the Sierra de Grazalema natural park, on a scenic road."
        ]
      }
    ],
    zone: [
      {
        "nome": "Ronda old town",
        "perChi": "Those who want to see the bridge in the evening and morning",
        "testo": "Hotels and guesthouses a step from the Puente Nuevo. The town empties after sunset, when the day-trip groups leave. The streets are narrow and parking is costly."
      },
      {
        "nome": "Countryside around Ronda",
        "perChi": "Drivers looking for quiet",
        "testo": "Farm stays and cortijos among olive groves and vineyards, 10-15 minutes by road from town. You need a car to dine out."
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
      "Day-trip groups from Seville and the Costa del Sol: between 11 and 16 the center is crowded. Those who sleep in Ronda have almost empty mornings and evenings."
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
    comeArrivare: "San Sebastián Airport (small, few flights) or, more often, Bilbao airport (about 1h20 by bus). Train from Madrid (about 5h) or Barcelona; by car, about 20 minutes from the French border.",
    comeSpostarsi: "The center is covered on foot; city buses for outlying areas and farther beaches.",
    periodoMigliore:
      "June-September, the driest and warmest time of year (still mild, rarely above 25-27°C / 77-81°F). In Andalusia it's the season to avoid because of the heat.",
    costi: "A round of 4-5 pintxos with as many glasses costs roughly €25-35 per person; the simpler bars have pintxos at €2-4 each.",
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
        "consiglio": "Always ask for the house's hot pintxo, not just those on the counter. At the end you tell the barman what you had."
      },
      {
        "nome": "Playa de la Concha and Paseo de la Concha",
        "testo": "The shell-shaped city beach, with the white balustrade of the promenade. The waters are sheltered by Santa Clara island and the seabed is shallow.",
        "come": "On foot from the center; the promenade from the Parte Vieja to the Peine del Viento is about 3 km long.",
        "quando": "For swimming June-September. High tide narrows the beach a lot.",
        "tempo": "1-3 hours",
        "consiglio": "Check the tides: at low tide the beach doubles in size."
      },
      {
        "nome": "Monte Igueldo",
        "testo": "The hill west of the bay, with an amusement park and a viewpoint. You go up by a funicular from 1912, among the oldest in the country.",
        "come": "Funicular from the base, reached by city bus from the center. Alternatively on foot, in about 40 minutes.",
        "quando": "At sunset. Check the season and funicular hours on the official site.",
        "tempo": "1-1.5 hours",
        "consiglio": "Go up around sunset time and walk down along the scenic road."
      },
      {
        "nome": "Monte Urgull",
        "testo": "The fortified hill between the Parte Vieja and the port, with paths among trees and bastions, the Santa Cruz de la Mota castle and the Sacred Heart statue on top.",
        "come": "On foot from the Parte Vieja, stairs next to the port. Free entry to the park.",
        "quando": "All year; in rain the paths are slippery.",
        "tempo": "1-1.5 hours",
        "consiglio": "Shaded paths, good in the hot hours of summer."
      },
      {
        "nome": "Peine del Viento",
        "testo": "A steel sculpture by Eduardo Chillida (1977) anchored to the rocks at the end of La Concha. Three metal elements reach out over the sea and, in high waves, jets of water burst from holes in the pavement.",
        "come": "On foot from La Concha, at the end of the promenade, or by bus to Ondarreta.",
        "quando": "In rough sea or at high tide, when the spray is strongest.",
        "tempo": "30 minutes",
        "consiglio": "In big waves stay away from the low platform."
      },
      {
        "nome": "Getaria and Zarautz",
        "testo": "Two coastal towns, 20-25 minutes from San Sebastián. Getaria is known for grilled fish (turbot) and for txakoli wine, Zarautz for its long beach and surf.",
        "come": "Lurraldebus from the San Sebastián bus station or regional train to Zarautz. A half-day trip.",
        "quando": "All year. In Getaria grilled fish is eaten at lunch.",
        "tempo": "Half a day",
        "consiglio": "Try the fish in Getaria's venues that grill in the street."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "9:00 Walk on the Paseo de la Concha to the Peine del Viento.",
          "11:00 Monte Urgull on foot, view over the port.",
          "13:00 Lunch with a pintxos crawl in the Parte Vieja.",
          "16:00 La Concha beach or rest.",
          "19:00 Monte Igueldo funicular for sunset.",
          "21:00 Second round of pintxos."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan.",
          "Day 2, morning: Gros and Zurriola beach, breakfast at the market.",
          "Day 2, afternoon: Getaria by bus, grilled fish.",
          "Day 2, evening: last evening of pintxos and txakoli or cider."
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Days 1 and 2: as above.",
          "Day 3: day trip to Hondarribia (fishing village) or Pasaia by boat, then back in the evening."
        ]
      }
    ],
    zone: [
      {
        "nome": "Parte Vieja",
        "perChi": "Those who want to be among the bars",
        "testo": "Eat and go out on foot, but at night the noise lasts late and prices are higher. Rooms are small."
      },
      {
        "nome": "Center (Área Romántica)",
        "perChi": "Those looking for convenience and shops",
        "testo": "A 19th-century district between La Concha and Boulevard, 5-10 minutes from the Parte Vieja. Quieter than the old area, with average prices."
      },
      {
        "nome": "Gros",
        "perChi": "Surf lovers who want fewer tourists",
        "testo": "Across the Urumea river, near Zurriola beach. Bars and pintxos at lower prices, 15 minutes on foot from the old center."
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
    comeArrivare: "Bilbao Airport (Loiu), about 12 km from the center (Bizkaibus A3247 bus). Train or bus from Madrid (about 4h30-5h) or from San Sebastián (about 1h20 by bus).",
    comeSpostarsi: "The metro (Euskotren/Metro Bilbao line) is efficient for reaching the Guggenheim and outlying areas; the historic center is covered on foot.",
    periodoMigliore: "June-September, like the rest of the North: cool and rainy climate all year, with summer as the most stable window.",
    costi: "Guggenheim: €18 from mid-June to mid-September, €15 the rest of the year (reduced €9/€7.50); free for under-18s and, in low season, the last Sunday of the month (worth checking the official site before going).",
    erroriDaEvitare: [
      "Visiting the Guggenheim on a Monday without checking first: the museum is closed almost every Monday, except for a seasonal summer extension",
      "Treating Bilbao as a quick stop between San Sebastián and Cantabria: the Casco Viejo deserves at least a full evening",
      "Underestimating the rain: always bring a light raincoat, regardless of the season",
    ],
    luoghi: [
      {
        "nome": "Museo Guggenheim Bilbao",
        "testo": "Frank Gehry's museum, opened in 1997, all in titanium, glass and limestone, on the bank of the Nervión. Outside are Jeff Koons's Puppy, covered in flowers, and Maman, Louise Bourgeois's spider. Inside, temporary exhibitions alternate with a contemporary art collection, including Richard Serra's The Matter of Time.",
        "come": "Metro to Moyúa, then 10 minutes on foot, or tram to Guggenheim. You can visit only the exterior, which is free, with the riverside walk.",
        "quando": "Tuesday to Sunday 10am-7pm; until 8pm in Holy Week and from 15 June to 13 September. Closed on Mondays, except for some special openings, including the summer Mondays. Closed on 25 December and 1 January. Early in the morning the light on the titanium is best.",
        "tempo": "2-3 hours inside, 30 minutes for the exterior",
        "costo": "12 euros full price, free under 18 (rate on the official website in November 2026: it changes with the season and the exhibitions)",
        "url": "https://www.guggenheim-bilbao.eus/",
        "consiglio": "Buy the ticket online and see the Serra rooms first; then the exterior at sunset."
      },
      {
        "nome": "Casco Viejo and Siete Calles",
        "testo": "The medieval old town, with the seven parallel streets from which the city was born, the Santiago cathedral and Plaza Nueva, surrounded by arcades. Here is one of the best pintxos scenes in the country.",
        "come": "On foot or by metro to Casco Viejo. Plaza Nueva is the meeting point.",
        "quando": "Pintxos from noon and from 19. On Thursday evening and weekends the district is full.",
        "tempo": "2-3 hours",
        "consiglio": "Try the bars close to Plaza Nueva and those on the side streets, less touristy."
      },
      {
        "nome": "Mercado de la Ribera",
        "testo": "The covered market on the riverside, in rationalist and Art Deco style, among the largest in Europe. Fish, meat and fruit stalls and an upper floor with pintxos.",
        "come": "On foot from the Casco Viejo, a few minutes away, on the bank of the Nervión.",
        "quando": "In the morning for the stalls. Check hours on weekends and holidays.",
        "tempo": "1 hour",
        "consiglio": "Have a pintxo or a coffee in the food area on the upper floor."
      },
      {
        "nome": "Puente de Vizcaya (Portugalete)",
        "testo": "A transporter bridge from 1893, still working, a UNESCO site. A suspended gondola carries people and cars from one bank of the ría to the other in a few minutes. You can also climb to the high walkway.",
        "come": "Metro line 2 to Areeta (Getxo) or Portugalete. About 30 minutes from central Bilbao.",
        "quando": "Runs all year; check hours and prices for the crossing and the walkway.",
        "tempo": "1-2 hours",
        "url": "https://puente-colgante.com/",
        "consiglio": "Cross by gondola and come back by metro, to see the bridge from below."
      },
      {
        "nome": "Funicular de Artxanda",
        "testo": "A 1915 funicular that climbs the Artxanda hill, above the city, from which you see all Bilbao with the Guggenheim and the ría.",
        "come": "The lower station is a few minutes from the center, across the river.",
        "quando": "At sunset, with a clear sky. Check hours on the operator's site.",
        "tempo": "1 hour",
        "consiglio": "Go up around sunset time and stop for a beer on the hill."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "9:30 Guggenheim, in the morning.",
          "12:30 Walk along the Nervión to the Casco Viejo.",
          "14:00 Mercado de la Ribera and pintxos lunch.",
          "16:30 Siete Calles and cathedral.",
          "19:00 Artxanda funicular for sunset.",
          "21:00 Dinner in the Casco Viejo."
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: as in the one-day plan.",
          "Day 2, morning: Museo de Bellas Artes and the Ensanche.",
          "Day 2, afternoon: Puente de Vizcaya by metro, crossing by gondola.",
          "Day 2, evening: a last evening of pintxos."
        ]
      }
    ],
    zone: [
      {
        "nome": "Casco Viejo",
        "perChi": "Those who want pintxos and atmosphere",
        "testo": "Rooms in the historic district, convenient for the bars. In the evening it is noisy on weekends, especially Thursday."
      },
      {
        "nome": "Ensanche and Guggenheim area",
        "perChi": "Those looking for convenience and connections",
        "testo": "A 19th-century district with shops, metro and tram. Quieter in the evening and a few minutes on foot from the museum."
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
      "Casco Viejo on weekends and at festivals (Aste Nagusia, in late August): full of people and pickpocketing is possible.",
      "Metro and tram: validate your ticket or reloadable card at the entrance."
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
        "come": "On foot from the old town, entirely pedestrian. Entry to the cathedral is free; museums, roof and Pórtico require a separate ticket.",
        "quando": "Pilgrim's mass at noon. The botafumeiro does not swing at every mass: check the calendar on the cathedral's site.",
        "tempo": "1-2 hours",
        "url": "https://www.catedraldesantiago.es/",
        "consiglio": "Arrive half an hour before the pilgrim's mass to sit; afterwards, stay in the square watching the arrivals."
      },
      {
        "nome": "Pilgrim's Office",
        "testo": "Here you collect the Compostela, the pilgrimage certificate, by presenting the stamped credential. To obtain it you need the last 100 km on foot or 200 by bike.",
        "come": "A few minutes on foot from the cathedral, on Rúa das Carretas.",
        "quando": "Open every day, with long queues in summer. Check the official hours.",
        "tempo": "30 minutes-2 hours, depending on the queue",
        "url": "https://oficinadelperegrino.com/",
        "consiglio": "Go in the early afternoon or early morning, when the line is shorter."
      },
      {
        "nome": "Old town and Mercado de Abastos",
        "testo": "The old town, a UNESCO site, is made of stone streets, arcades and squares such as the Quintana and Praza das Praterías. The Mercado de Abastos, the covered market, has fish, cheese and octopus stalls.",
        "come": "On foot. The market is 5 minutes from the cathedral.",
        "quando": "The market in the morning. Rain is frequent: bring a raincoat.",
        "tempo": "2-3 hours",
        "consiglio": "Eat pulpo á feira in the places next to the market, which cook to order."
      },
      {
        "nome": "Camino del Norte: San Sebastián-Bilbao section",
        "testo": "The Camino del Norte follows the Cantabrian coast from Irún to Santiago. The Basque section has constant climbs among cliffs and woods, with stages of 20-25 km. With only a few days you can walk a single stage, for example San Sebastián-Zarautz.",
        "come": "Departure from the San Sebastián or Bilbao stations. Waymarks are yellow arrows and shells. Bus or train are used to return.",
        "quando": "May to September. In winter it rains a lot and days are short.",
        "tempo": "One stage is 5-7 hours on foot",
        "consiglio": "Start early and carry water; refreshment points are rare outside villages."
      },
      {
        "nome": "Finisterre and Muxía",
        "testo": "After Santiago many pilgrims continue for three or four days to Finisterre, on the Atlantic coast, and to Muxía. Finisterre was the end of the world for the Romans, with a lighthouse and cliff.",
        "come": "On foot from Santiago in about 3-4 days, or by bus from Santiago station (about 2 hours).",
        "quando": "Summer. At sunset those who walk stop at the lighthouse.",
        "tempo": "A day from Santiago by bus, 3-4 days on foot",
        "consiglio": "Check bus times for your chosen period, because they change by season."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "9:00 Praza do Obradoiro and Pórtico da Gloria.",
          "11:00 Cathedral and crypt.",
          "12:00 Pilgrim's mass.",
          "14:00 Lunch with octopus and pimientos de Padrón.",
          "16:00 Pilgrim's Office if you arrived on foot.",
          "18:00 Walk in the old town and the Alameda park."
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
        "testo": "10-15 minutes on foot from the center. A quieter area, with hotels and guesthouses."
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
      "Pilgrim's credential: have it stamped at least twice a day in the last 100 km to get the Compostela.",
      "Camino del Norte: constant climbs and exposed stretches of coastal path. Do not underestimate the elevation gain.",
      "Cathedral: visits to the roofs and museums require booking; check the official site."
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
    comeArrivare: "Palma Son Sant Joan Airport, one of the busiest in Spain in summer, with direct flights from all the main Italian cities. Ferry from Barcelona or Valencia (7-8 hours, or 4 hours with the fast ferries).",
    comeSpostarsi: "Rental car recommended for the Serra de Tramuntana; in Palma public transport is enough; the historic train to Sóller is an attraction in itself as well as a means of transport.",
    periodoMigliore: "May-June and September, with pleasant temperatures and fewer crowds than July-August, when prices and tourist flow peak.",
    costi: "Cathedral of Palma about €10; historic train to Sóller about €32 round trip; in high season car rental can cost far more than the rest of the year.",
    erroriDaEvitare: [
      "Limiting yourself to the touristy coast of Palma (Playa de Palma, S'Arenal) without ever seeing the Serra de Tramuntana: it's like going to Rome and seeing only the airport",
      "Driving on the Serra's hairpin roads without allowing for longer times than expected",
      "Booking flights and ferries for July-August without advance notice: it's the period of peak demand and prices rise accordingly",
    ],
    luoghi: [
      {
        "nome": "Cattedrale di Palma (La Seu)",
        "testo": "A Gothic cathedral begun in 1229 right on the seafront, with one of the largest rose windows in European Gothic. Inside are Antoni Gaudí's canopy above the altar and work by Miquel Barceló in the Blessed Sacrament chapel.",
        "come": "On foot from central Palma, facing the Parc de la Mar. Enter from the Plaça de la Seu side; an audio guide comes with the ticket.",
        "quando": "Opening hours change by season and Sunday is for services: check the calendar on the official site. The rose window is best in the morning light.",
        "tempo": "1-1.5 hours",
        "url": "https://catedraldemallorca.org/",
        "consiglio": "The best view of the facade, mirrored in the pond, is from Parc de la Mar, so take it in before going inside."
      },
      {
        "nome": "Palma vecchia: Almudaina e vicoli",
        "testo": "The Almudaina Palace, a former Moorish fortress turned residence of the kings of Mallorca, stands next to the cathedral. Around it lies the old town: hidden patios, Plaça Major, the Arab baths and the Sa Llotja district with bars by the harbour.",
        "come": "All on foot from the cathedral. The palace is run by Patrimonio Nacional and can be visited on your own with the information panels.",
        "quando": "The palace has a weekly closing day and shuts for official ceremonies: check the website. The lanes are nicest in the evening, when the heat drops.",
        "tempo": "half a day for the palace and lanes",
        "url": "https://www.patrimonionacional.es/",
        "consiglio": "Peek through open doorways: many 18th-century patios can be seen from the street."
      },
      {
        "nome": "Valldemossa",
        "testo": "A stone village in a bowl of the Serra de Tramuntana, known for the Cartuja where Chopin and George Sand spent the winter of 1838-39. Steep lanes, flower pots on the windows and the local pastry, coca de patata.",
        "come": "From Palma about 25 minutes by car on the Ma-1110, or by regular bus from the intermodal station. The village is walkable.",
        "quando": "Come early or late in the afternoon: between 11 and 16 the coaches fill it up.",
        "tempo": "2-3 hours",
        "consiglio": "Park in the lots uphill and walk down: the centre's streets are narrow and nearly always full."
      },
      {
        "nome": "Sóller train and Port de Sóller",
        "testo": "A vintage wooden train in service since 1912: 27 kilometres with thirteen tunnels, the longest about 3 kilometres, up to Sóller. From there the historic tram runs down to the port, a bay closed in by mountains with a promenade and boats.",
        "come": "Leaves from the Plaça d'Espanya station in Palma. From Sóller the tram reaches Port de Sóller in about 20 minutes.",
        "quando": "The service stops in winter and restarts in February; timetables vary by season, so check the official site. The morning departures are the better ones.",
        "tempo": "a full day including the port",
        "costo": "about 30 euros return Palma-Sóller (2026)",
        "url": "https://trendesoller.com/",
        "consiglio": "Buy tickets online in advance in high season and sit on the right-hand side on the way out for the valley views."
      },
      {
        "nome": "Sa Calobra e Torrent de Pareis",
        "testo": "A pebble cove at the mouth of the Torrent de Pareis, a canyon with 200-metre walls. The Ma-2141 road that drops to Sa Calobra has a tie-knot hairpin and is one of the island's most photographed. A tunnel leads from the pier to the small beach and the canyon.",
        "come": "By car on the Ma-2141 from the Ma-10, 14 km of bends and about 40 minutes, or by boat from Port de Sóller (crossing of about 1 hour).",
        "quando": "Spring and autumn are calmer for the canyon. The Torrent de Pareis is closed or not advisable in rain and flood: check the forecast.",
        "tempo": "2-3 hours",
        "url": "https://www.caib.es/",
        "consiglio": "The boat spares you the road and the parking, which in summer is the real obstacle: leave the port in the morning."
      },
      {
        "nome": "Cap de Formentor e Pollença",
        "testo": "The island's northernmost peninsula, with sheer cliffs and a lighthouse at the end of 20 km of scenic road above Port de Pollença. On the way is the Mirador des Colomer. Pollença has a central square with cafes and the Calvari staircase, 365 steps.",
        "come": "From Port de Pollença by car 20 km on the Ma-2210 to the lighthouse, about 40 minutes. Palma to Pollença is about an hour.",
        "quando": "At sunset for the light on the lighthouse. From 15 May to 18 October (2026 dates), from 10am to 10pm, the road to the lighthouse is closed to private cars: you go up on TIB bus 334 from Alcúdia and Port de Pollença or by bike. You can drive to the Formentor beach car park until it is full.",
        "tempo": "half a day",
        "url": "https://www.dgt.es/conoce-el-estado-del-trafico/rutas-de-interes/trafico-acceso-faro-de-formentor/",
        "consiglio": "Go up to the Mirador des Colomer at opening time or at sunset: at midday you arrive in a queue."
      },
      {
        "nome": "Cala Mondragó e Es Trenc",
        "testo": "Two beaches in the southeast. Cala Mondragó lies inside a nature park, with pine woods and two sandy coves. Es Trenc is a long white stretch with no buildings, backed by dunes and salt pans.",
        "come": "By car: Cala Mondragó is about an hour from Palma, near Santanyí. Es Trenc is about 50 minutes from Palma, near Campos. Paid parking, which fills up early.",
        "quando": "June and September. In July and August arrive before 10.",
        "tempo": "half a day",
        "consiglio": "You can walk the coast from Mondragó to Cala Santanyí in a couple of hours to leave the crowded beach behind."
      },
      {
        "nome": "Un tratto del GR221 in Tramuntana",
        "testo": "The GR221, the «Dry Stone Route», crosses the Serra de Tramuntana over more than 100 kilometres. A single stage is enough: olive terraces, dry-stone walls, refuges and ancient paths. An easy section is Port de Sóller to Deià along the coast.",
        "come": "Start from Port de Sóller or Deià, both served by regular buses from central Palma. The path is waymarked.",
        "quando": "From October to May. In summer start at dawn: heat and lack of shade take their toll.",
        "tempo": "3-5 hours per stage",
        "url": "https://www.caib.es/",
        "consiglio": "Bring water and hiking shoes: wet stone is slippery. Some paths cross private land and have set passage hours."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Morning: Cathedral and Almudaina on foot",
          "Lunch in the lanes of Sa Llotja",
          "Afternoon: Castell de Bellver by bus or taxi, or a stroll along the Passeig Marítim",
          "Evening: tapas in the old town"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Palma, cathedral and lanes, sunset over the harbour",
          "Day 2: vintage train to Sóller, tram to the port, seafood lunch",
          "Train back in the late afternoon"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Palma",
          "Day 2: Valldemossa in the morning, Deià and Sóller in the afternoon, by car",
          "Day 3: Sa Calobra by boat from Port de Sóller or Formentor by car, sunset in Pollença"
        ]
      }
    ],
    zone: [
      {
        "nome": "Palma old town",
        "perChi": "those who want city life, restaurants and no car",
        "testo": "Everything on foot, lively evenings. Pros: bars, cathedral, markets. Cons: noise in the lanes, small rooms, parking nearly impossible."
      },
      {
        "nome": "Sóller and Port de Sóller",
        "perChi": "those who want mountains and sea together",
        "testo": "A citrus valley with train and tram. Pros: calm evenings, walks. Cons: far from Palma (30 minutes by car through the tunnel), narrow roads."
      },
      {
        "nome": "Pollença and Alcúdia",
        "perChi": "families and beaches",
        "testo": "The north of the island: wide beaches, Formentor nearby. Pros: services for children. Cons: summer is crowded and you can't get far without a car."
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
      "The most famous beaches fill by 10 in summer and parking is paid: leave early or take the bus.",
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
    comeArrivare: "Ibiza Airport, with seasonal direct flights from Italy in high season; ferry from Mallorca (Palma-Ibiza, about 2h15-5h depending on the type of ship) or from Barcelona/Valencia.",
    comeSpostarsi: "A rental car or scooter is almost indispensable for reaching the north of the island and the most secluded coves; local buses connect the main towns but with limited frequency off-season.",
    periodoMigliore:
      "June and September, the best compromise between climate and crowds. July-August is the peak of prices and nightlife, with the south full; the north stays fairly quiet even in high season.",
    costi: "Highly variable: entrance to the big clubs can exceed €60-100 in high season, while a day in the north among free beaches and a simple lunch costs a fraction of that.",
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
        "consiglio": "Go up early, then come down for dinner in the Sa Penya district, below the walls."
      },
      {
        "nome": "Es Vedrà e Cala d'Hort",
        "testo": "Es Vedrà is a 382-metre rock off the southwest coast, wrapped in legends. It's best seen from Cala d'Hort, a beach of sand and pebbles, and from the Torre des Savinar.",
        "come": "By car from Ibiza Town in about 30 minutes. Cala d'Hort has a small car park that is full on summer afternoons.",
        "quando": "Sunset is the busiest moment: arrive at least an hour before.",
        "tempo": "2-3 hours",
        "consiglio": "Eat at one of the beach restaurants and stay after sunset: the crowd leaves."
      },
      {
        "nome": "Cala Comte",
        "testo": "A west-coast beach with low rocks and clear water, famous for sunset with the islets in front.",
        "come": "By car from San Antonio in about 20 minutes, or the seasonal bus.",
        "quando": "Sunset in summer is crowded. Mornings or September are better.",
        "tempo": "half a day",
        "consiglio": "For a dinner by the sea, pick the restaurants on the rocks, but book."
      },
      {
        "nome": "Benirràs e tamburi della domenica",
        "testo": "A bay in the north, enclosed by cliffs. At sunset on Sundays a group of drummers has gathered on the sand for decades, with stalls and people dancing.",
        "come": "By car from Sant Joan de Labritja, about 15 minutes. The last stretch of road is narrow.",
        "quando": "On Sundays at sunset from May to October. On other days the bay is quiet.",
        "tempo": "an evening",
        "consiglio": "Arrive two hours early to find parking and a spot on the sand."
      },
      {
        "nome": "Cala Xarraca e Cala Sant Vicent",
        "testo": "Two small coves in the north. Xarraca is a green bay with calm water; Sant Vicent is rocky and wilder. Little building around.",
        "come": "By car from Sant Joan de Labritja: Xarraca 10 minutes, Sant Vicent 15. Small car parks.",
        "quando": "Early morning or late afternoon.",
        "tempo": "half a day",
        "consiglio": "Bring a mask and snorkel: the water is clear and the seabed rocky."
      },
      {
        "nome": "Ses Salines",
        "testo": "A nature park of salt pans and dunes in the south, with Ses Salines beach and Es Cavallet. The salt pans are still in use and are UNESCO-listed together with Dalt Vila and the posidonia meadows.",
        "come": "By car from Ibiza Town in 20 minutes. Paid parking, with access limits in summer.",
        "quando": "Morning, before the heat. Es Cavallet has a naturist stretch.",
        "tempo": "half a day",
        "url": "https://www.caib.es/",
        "consiglio": "Stay out of the salt pan and dune areas marked as protected."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Dalt Vila in the morning",
          "Lunch in Sa Penya",
          "Afternoon: Ses Salines or Cala Comte",
          "Sunset by the sea"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Dalt Vila and Ses Salines, dinner in town",
          "Day 2: the north, Cala Xarraca and Sant Vicent, market at Sant Joan or Las Dalias, sunset at Benirràs if it's Sunday"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Dalt Vila",
          "Day 2: the north and Benirràs",
          "Day 3: Es Vedrà, Cala d'Hort and Cala Comte at sunset"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ibiza Town",
        "perChi": "those who want services and no driving",
        "testo": "Port, restaurants and buses to the southern beaches. Noisy at night and expensive in summer."
      },
      {
        "nome": "Sant Antoni",
        "perChi": "those who want sea and cheaper nightlife",
        "testo": "A bay with sunsets, bars and connections. Very touristy and lively at night."
      },
      {
        "nome": "North: Santa Gertrudis, Sant Joan",
        "perChi": "those who want quiet",
        "testo": "Green hills, restaurants and coves. You need a car, buses are few."
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
      "In summer many coves have limited car access and paid parking that fills by mid-morning.",
      "Tourist tax (ecotasa) of a few euros per night, paid at the hotel.",
      "In Sant Antoni and other areas there are street-drinking bans and fines for uncivil conduct.",
      "Es Vedrà and the cliffs: stay on marked paths, falls are frequent."
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
        "come": "Walkable. From Maó by regular bus in about an hour, or by car on the Me-1.",
        "quando": "The morning market in Plaça del Born. In the evening the harbour is where you eat.",
        "tempo": "half a day",
        "consiglio": "Leave the car in the car parks outside the centre: streets are narrow and full in summer."
      },
      {
        "nome": "Maó and its harbour",
        "testo": "The current capital, above one of the deepest natural harbours in the Mediterranean, 5 kilometres long. In town: waterfront walks, the Claustre del Carme market, the Museu de Menorca and the Xoriguer gin distillery.",
        "come": "10 minutes from the airport. The town is walkable; boats tour the harbour in about an hour.",
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
        "come": "From Ciutadella 20 minutes by car, then parking and a 15-minute walk. In high season there is also a seasonal shuttle. Or on foot from Cala Galdana along the Camí de Cavalls.",
        "quando": "Early morning or after 16. In midsummer the car park closes early.",
        "tempo": "half a day",
        "consiglio": "Arrive an hour before the others: the water is still and clear even at eight."
      },
      {
        "nome": "Torre d'en Galmés",
        "testo": "The island's largest Talayotic settlement, with three talayots, a taula and an area of circular houses from the Bronze and Iron Ages. It belongs to the Menorca Talayotica site, UNESCO-listed since 2023.",
        "come": "By car from Maó or Ciutadella in about 25 minutes. Visited on your own, with panels. The site has an entrance ticket.",
        "quando": "Early morning or late afternoon, for the heat and the light.",
        "tempo": "1-1.5 hours",
        "consiglio": "Combine it with Cala en Porter or the Museu de Menorca in Maó."
      },
      {
        "nome": "Naveta des Tudons",
        "testo": "A communal tomb shaped like an upturned ship, built in dry stone around 1000 BC. It stands by the roadside and is considered one of the oldest buildings still standing in Europe.",
        "come": "By car on the Maó-Ciutadella road, 5 km from Ciutadella. A half-hour stop.",
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
      "Car parks at the southern coves (Macarella, Turqueta) fill by mid-morning in high season and are paid.",
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
    comeArrivare: "Two airports: Tenerife Sur (TFS), the main one for international flights and the tourist south coast, and Tenerife Norte (TNO), closer to Santa Cruz and La Laguna.",
    comeSpostarsi: "Rental car recommended to reach Teide and Anaga; tram between Santa Cruz and La Laguna; buses (guaguas) extensive but slow toward the mountain areas.",
    periodoMigliore:
      "all year, with a mild and steady climate (16-21°C / 61-70°F even in January): that's why the Canary Islands are the right Spanish destination in winter, when the rest of Europe is cold. At altitude, at Teide, it's colder and in winter snow is not rare.",
    costi: "Teide cable car about €40 round trip; the summit permit is free but limited in number (200 people a day, bookable up to 56 days ahead).",
    erroriDaEvitare: [
      "Going up Teide without having booked the summit permit well in advance: the cable car alone doesn't give access to the last stretch, which is regulated separately",
      "Underestimating the cold at altitude: at the upper cable car station (3,555 m) temperatures are much lower than on the coast, in every season",
      "Focusing only on the south coast and never seeing Anaga: it's an ecosystem that doesn't exist anywhere else on the island",
    ],
    luoghi: [
      {
        "nome": "Teide: cable car and summit",
        "testo": "The cable car climbs from 2,356 to 3,555 metres in about eight minutes. The final stretch to the crater, at 3,715 metres, is on foot in about 40 minutes and needs a free, capped permit. Above 3,500 metres you feel the altitude.",
        "come": "By car from Costa Adeje about an hour and a half, from Puerto de la Cruz an hour and a quarter. The lower station has free parking.",
        "quando": "Take the first run to avoid queues and wind. In strong wind the cable car stops. Check the forecast that day.",
        "tempo": "half a day, the summit permit adds 2 hours",
        "url": "https://www.volcanoteide.com/",
        "consiglio": "Buy the ticket online with a time slot and book the summit permit weeks ahead: they are two separate things."
      },
      {
        "nome": "Roques de García and Las Cañadas",
        "testo": "Lava formations dozens of metres high in the heart of the caldera, with the Roque Cinchado as its symbol. A loop path of about 3.5 kilometres starts from the car park. The Teide stands behind.",
        "come": "From the car park at the foot of the Roques, on the TF-21, a few minutes from the cable car station. The path is marked.",
        "quando": "Morning or sunset. At noon the sun is strong with little shade.",
        "tempo": "1-2 hours",
        "consiglio": "Bring a jacket: at 2,200 metres the wind is cold even in July."
      },
      {
        "nome": "Anaga Rural Park",
        "testo": "North-east mountains with misty laurel forest, a biosphere reserve. Trails cross ridges, hamlets and remote villages such as Taganana and Chinamada.",
        "come": "By car from Santa Cruz or La Laguna to Cruz del Carmen, about 30 minutes, where the visitor centre is. Bus 076 links some villages.",
        "quando": "Morning, when fog is rarer. In rain the paths are muddy.",
        "tempo": "half a day or a full day",
        "url": "https://www.webtenerife.com/",
        "consiglio": "Walk the Sendero de los Sentidos or Cruz del Carmen to Taganana, with a return transfer arranged."
      },
      {
        "nome": "La Laguna",
        "testo": "The island's old capital, a UNESCO site for its regular grid plan of the 1500s. Colonial houses with wooden balconies, churches and courtyards.",
        "come": "By tram from Santa Cruz in about 35 minutes or by car in 15. Visited on foot.",
        "quando": "Weekdays for the student life. In the evening, bars and tapas.",
        "tempo": "2-3 hours",
        "consiglio": "Look into the houses' patios: many have a garden open to the public."
      },
      {
        "nome": "Masca",
        "testo": "A village at 600 metres in a deep gorge in the Teno mountains, with stone houses and ocean views. The Masca ravine drops to the sea along a path of about 5 kilometres.",
        "come": "By the TF-436 from Santiago del Teide, with tight bends. The ravine path needs an online booking and a permit: check the Cabildo's website.",
        "quando": "Morning, to avoid the coaches. The path is closed in rain or alerts.",
        "tempo": "1 hour in the village, half a day for the path",
        "consiglio": "Don't walk the path in casual shoes and carry a boat ticket back."
      },
      {
        "nome": "Garachico",
        "testo": "A north-coast town destroyed by the 1706 eruption that filled the harbour. What remains: the black lava pools (El Caletón), the castle and a square with Baroque buildings.",
        "come": "By car from Puerto de la Cruz in 45 minutes or from Santiago del Teide in 25. Visited on foot.",
        "quando": "Morning or after lunch, with calm sea for the pools.",
        "tempo": "2-3 hours",
        "consiglio": "Fresh seafood lunch near the pier."
      },
      {
        "nome": "Los Gigantes",
        "testo": "Black cliffs of 300-600 metres plunging into the Atlantic on the west coast. Boats from Puerto de los Gigantes go to the foot of the walls, where dolphins and pilot whales are often seen.",
        "come": "By car from Costa Adeje in 40 minutes. Boat trips leave from the port of Puerto de Santiago.",
        "quando": "Morning, with calmer sea. Boats run all year.",
        "tempo": "2-3 hours with a boat trip",
        "consiglio": "Choose operators with the Barco Azul licence: they follow rules on distance from the animals."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Early morning: Teide cable car",
          "Roques de García mid-morning",
          "Lunch up high or in Vilaflor",
          "Afternoon: sunset from Las Cañadas"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Teide and Roques de García",
          "Day 2: Anaga in the morning, La Laguna in the afternoon, dinner in Puerto de la Cruz"
        ]
      },
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: Teide",
          "Day 2: Anaga and La Laguna",
          "Day 3: Masca, Garachico and Los Gigantes with a boat trip"
        ]
      }
    ],
    zone: [
      {
        "nome": "Puerto de la Cruz",
        "perChi": "those who want green, walks and fewer resorts",
        "testo": "North: cooler and damper, gardens, town life. The sea is less suited to swimming. Close to Anaga and the Teide."
      },
      {
        "nome": "Costa Adeje and Los Cristianos",
        "perChi": "those who want sun and beaches",
        "testo": "South: drier and hotter, many hotels, restaurants, nightlife. Less character. Near the Sur airport."
      },
      {
        "nome": "La Laguna",
        "perChi": "students and those heading to Anaga",
        "testo": "A historic, lively town, cooler and damper. Tram to Santa Cruz."
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
        "testo": "A nature reserve of about 400 hectares of shifting sand dunes on the south coast, with a lagoon and a palm grove. The landscape changes with the wind. Playa del Inglés beach is right next to it.",
        "come": "From the Playa del Inglés promenade or the Maspalomas lighthouse you walk into the dunes. Buses from the coast and from Las Palmas.",
        "quando": "Early morning or sunset: at midday the sun is strong and there is no shade.",
        "tempo": "2 hours",
        "consiglio": "Stay on marked paths: the dunes are protected and parts have restricted access."
      },
      {
        "nome": "Roque Nublo",
        "testo": "An 80-metre volcanic rock, 1,813 metres above sea level, the island's symbol. The Guanches revered it. On clear days the summit gives views of Tenerife's Teide.",
        "come": "By car to the La Goleta car park, then a path of about 3 kilometres round trip. From Las Palmas 1.5 hours.",
        "quando": "Morning, before the clouds. The wind is cold even in summer.",
        "tempo": "1.5-2 hours on foot",
        "url": "https://www.grancanaria.com/",
        "consiglio": "Don't leave the marked path: walls near the rock drop away. Bring a sweatshirt."
      },
      {
        "nome": "Vegueta, Las Palmas",
        "testo": "The district founded in 1478, with the Santa Ana Cathedral, the Casa de Colón with documents on his voyage and the Mercado de Vegueta. Colonial streets with wooden balconies.",
        "come": "From central Las Palmas 10 minutes on foot or by bus from Las Canteras. Parking in paid garages.",
        "quando": "Morning for the market. Many museums close on Sunday afternoons.",
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
        "testo": "A 15-kilometre canyon in the southeast with inhabited cave houses and ancient Guanche dwellings. Some restaurants are carved into the rock.",
        "come": "By car from Agüimes about 20 minutes on the GC-103. You can walk along the bottom.",
        "quando": "Morning or lunch. In winter clouds are possible up high.",
        "tempo": "2-3 hours",
        "consiglio": "The visitor centre up top explains the caves. Eat in a cave restaurant, but book."
      },
      {
        "nome": "Puerto de Mogán",
        "testo": "A harbour village with canals, white houses with bougainvillea and a beach. Built in the 1980s in local style and called little Venice.",
        "come": "By car from Maspalomas in 40 minutes on the GC-1 or by bus. The centre is walkable.",
        "quando": "Friday is market day. Sunset over the harbour is quiet.",
        "tempo": "3 hours",
        "consiglio": "The Friday market is crowded: arrive by 10."
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
        "testo": "The lava and ash landscape born from the 1730-1736 eruptions. It can only be visited by bus along the Ruta de los Volcanes, with recorded commentary. At Islote de Hilario there are geothermal demonstrations: water poured into a pipe turns to steam, food cooks on the ground's heat.",
        "come": "By car from Yaiza or Tinajo to the ticket office. The ticket includes the bus, about 35 minutes. You don't get off.",
        "quando": "Arrive early: queues build in the afternoon. Check opening hours on the park's website.",
        "tempo": "1.5-2 hours",
        "consiglio": "The camel ride is a separate activity with its own fee; you can skip it."
      },
      {
        "nome": "Jameos del Agua",
        "testo": "A lava tube by the sea turned by César Manrique in the 1960s-70s into a garden, auditorium and natural pool. In the lake lives a small white blind crab, Munidopsis polymorpha.",
        "come": "By car from Arrecife in 25 minutes on the LZ-1, along the north coast. Visited on foot in a loop.",
        "quando": "Evenings have events: check the calendar on the site. By day before 11 to avoid groups.",
        "tempo": "1.5 hours",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Don't throw coins into the lake: they harm the crabs. It pairs well with the Cueva de los Verdes, a few minutes away."
      },
      {
        "nome": "Cueva de los Verdes",
        "testo": "A lava tube about 7 kilometres long, part of which can be visited, formed by the eruption of the La Corona volcano. Visited in 50 minutes with a guide, through lit chambers and play of light.",
        "come": "By car on the LZ-1 near Haría, 10 minutes from Jameos del Agua. Guided tour with groups at fixed times.",
        "quando": "All year; inside the temperature is constant. Morning to avoid groups.",
        "tempo": "50 minutes",
        "url": "https://cactlanzarote.com/",
        "consiglio": "The route has steps and a low stretch: wear closed shoes with grippy soles."
      },
      {
        "nome": "Mirador del Río",
        "testo": "A Manrique viewpoint set into a cliff 475 metres above the sea, with windows over the El Río strait and the island of La Graciosa. White, curved interiors and a cafe with a view.",
        "come": "By car from the LZ-1 at Haría in 15 minutes, to the north.",
        "quando": "Morning, with fewer clouds. In winter the sky is often overcast.",
        "tempo": "1 hour",
        "costo": "9 euros (CACT, 2026)",
        "url": "https://cactlanzarote.com/",
        "consiglio": "Free entry up to age 6, according to the official CACT site."
      },
      {
        "nome": "Jardín de Cactus",
        "testo": "Manrique's last work, an amphitheatre of terraces in an old quarry, with over a thousand cactus species. At the entrance, an 18th-century windmill.",
        "come": "By car from Arrecife to Guatiza, in the north, in 20 minutes. Visited on foot, flat with a few steps.",
        "quando": "Morning, for softer light. Open every day.",
        "tempo": "1 hour",
        "url": "https://cactlanzarote.com/",
        "consiglio": "On the road you pass Guatiza and its prickly pear plantations, where cochineal is farmed."
      },
      {
        "nome": "La Geria",
        "testo": "A basin of black volcanic ash where vines grow in pits dug into the ground and shielded by semicircular walls. This is where malvasía volcánica comes from. Wineries line the LZ-30.",
        "come": "By car on the LZ-30 between Yaiza and Mozaga, 20 minutes from Arrecife. Wineries offer tastings.",
        "quando": "September for the harvest; in other months wineries open by day.",
        "tempo": "2 hours",
        "consiglio": "Stop at the lay-bys and drive slowly: many tourists stop on the road."
      },
      {
        "nome": "Playa Papagayo e Los Ajaches",
        "testo": "Pale sand coves and turquoise water in the Los Ajaches nature park, in the south. Papagayo is the best known; the others (Caleta del Congrio, Playa Mujeres) are quieter.",
        "come": "By car from Playa Blanca along 5 km of dirt road. Access to the park is paid. You walk from the car parks.",
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
