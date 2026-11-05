import type { Destinazione } from '@/lib/types'

export const destinazioniIndia: Destinazione[] = [
  // --- NORD ---
  {
    slug: 'delhi',
    paeseSlug: 'india',
    ordine: 1,
    nome: 'Delhi',
    tipologia: ['città', 'storia moghul', 'arrivo'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "The capital is two cities in one: Shah Jahan's Mughal Old Delhi, with the Jama Masjid, the Red Fort and the alleys of Chandni Chowk, and the British New Delhi of grand avenues, gardens and mausoleums.",
    percheAndarci:
      "Almost all flights from Italy arrive here, and two days are enough to see the monuments that explain the rest of the trip: Humayun's Tomb, the model for the Taj Mahal, and the Qutub Minar, one of India's earliest Islamic monuments.",
    cosaVedere: [
      "The Jama Masjid, one of the largest mosques in India, and the Red Fort",
      "The markets of Chandni Chowk and the spice market of Khari Baoli",
      "Humayun's Tomb and the Sufi neighborhood of Nizamuddin",
      "The Qutub Minar and the iron pillar",
      "The Gurudwara Bangla Sahib, the Sikh temple with a free kitchen open to everyone",
      "India Gate, Kartavya Path and the Lodhi Gardens",
    ],
    cosaFare: [
      "A cycle-rickshaw ride through the alleys of Old Delhi",
      "Eat at the langar of the Gurudwara Bangla Sahib",
      "Listen to qawwali at Nizamuddin in the evening, especially on Thursdays",
      "Get around by metro, the simplest and cleanest way in the city",
    ],
    doveDormire:
      "Karol Bagh and Connaught Place in the mid-range, South Delhi (Hauz Khas, Defence Colony) for quiet. Paharganj is cheap and close to New Delhi station, but chaotic.",
    doveMangiare:
      "Parathas at Paranthe Wali Gali, kebabs around the Jama Masjid, chaat in Chandni Chowk, Punjabi cuisine all over the city.",
    comeArrivare:
      "Indira Gandhi International Airport, connected to the center by the Airport Express metro (about 20 minutes to New Delhi) or by prepaid taxi and Uber.",
    comeSpostarsi: "Metro (with a women-only car), Uber, Ola and tuk-tuks at an agreed price.",
    periodoMigliore:
      "October-November and February-March. Between November and January air pollution is often very high; from April to June the heat exceeds 40 °C (104 °F).",
    costi: "ASI monuments about 550-600 rupees for foreigners; metro a few dozen rupees per ride.",
    erroriDaEvitare: [
      "Getting into unofficial taxis at the airport or believing anyone who says your hotel is closed",
      "Going into the fake tourist offices near New Delhi station and Connaught Place",
      "Visiting Old Delhi during the hottest hours or on Friday at prayer time",
    ],
    luoghi: [
      {
        nome: "Humayun's Tomb",
        testo: "India's first great garden tomb, finished in 1572 for the emperor Humayun: red sandstone, white marble and a garden split into four by water channels. It is the direct model for the Taj Mahal and a UNESCO World Heritage Site. The complex holds other tombs too, including the older one of Isa Khan.",
        come: "Metro to JLN Stadium or Hazrat Nizamuddin, then a short tuk-tuk ride. You can visit on your own: the panels explain things well and you don't need a guide.",
        quando: "Opening hours on the ASI website. Late afternoon gives the best light on the sandstone.",
        tempo: "1.5-2 hours",
        costo: "about 600 rupees for foreigners, 550 online (ASI rate, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "See it before the Taj Mahal: you'll recognize the layout, the double dome and the garden that become perfect in Agra."
      },
      {
        nome: "Qutub Minar and the iron pillar",
        testo: "A sandstone tower about 73 meters tall, begun in 1199 by Qutb ud-Din Aibak, the first sultan of Delhi, with carved bands of Quranic inscriptions. Next to it are the ruins of the Quwwat-ul-Islam mosque, the oldest surviving mosque of the Delhi Sultans, and an iron pillar with a 4th-century inscription that doesn't rust.",
        come: "Yellow metro line to Qutub Minar, then a short tuk-tuk ride. You can't climb the tower: it has been closed to the public since 1981.",
        quando: "Opening hours on the ASI website. Best at opening time, before the tour groups and the heat.",
        tempo: "1.5 hours",
        costo: "about 600 rupees for foreigners, 550 online (ASI rate, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "It pairs well with a walk through Mehrauli, with the tombs and stepwells scattered around the archaeological park."
      },
      {
        nome: "Red Fort",
        testo: "Shah Jahan's citadel, built between 1638 and 1648 when the Mughal capital moved from Agra to Delhi. Inside are the audience halls, the marble pavilions and a few museums. Every August 15 the prime minister addresses the nation from here.",
        come: "Violet metro line to Lal Quila. Enter through the Lahori Gate after the security checks.",
        quando: "Since February 2026 it has been open every day, Mondays included, from sunrise to 9 p.m. Go early in the morning to avoid the Sunday crowds.",
        tempo: "2 hours",
        costo: "600 rupees for foreigners, 550 online (ASI rate, 2026)",
        url: "https://asi.nic.in/",
        consiglio: "If you're short on time, choose Humayun's Tomb: the fort is big but barer than you'd expect."
      },
      {
        nome: "Jama Masjid",
        testo: "One of India's largest mosques, commissioned by Shah Jahan and finished in 1656. The courtyard holds about 25,000 worshippers, and from the minarets you can see all of Old Delhi.",
        come: "Violet metro line to Jama Masjid. Shoes come off at the entrance; if your legs or shoulders are bare, they lend you a robe.",
        quando: "Closed to visitors during prayers, and very crowded at Friday noon. Go in the morning or mid-afternoon.",
        tempo: "45 minutes",
        costo: "free entry; you pay for a phone or camera and to climb the minaret",
        consiglio: "Agree on the fees at the gate, and don't give money to anyone who offers to “watch” your shoes inside the courtyard."
      },
      {
        nome: "Chandni Chowk and the Khari Baoli spice market",
        testo: "The merchants' street of Mughal Delhi, now a tangle of alleys that each sell one thing: silver, bridal fabrics, paper, fried sweets. At the far end is Khari Baoli, the wholesale spice market, where chilies and cardamom are sold by the sack.",
        come: "Yellow metro line to Chandni Chowk. The best way to get around is a cycle-rickshaw at a price agreed beforehand, then on foot.",
        quando: "From mid-morning, when the shops are open.",
        tempo: "half a day",
        consiglio: "Step into Gadodia Market, the 1920s building where the spice wholesalers work: it's the heart of the market."
      },
      {
        nome: "Gurudwara Bangla Sahib",
        testo: "Delhi's best-known Sikh temple, with a golden dome and a sacred pool. The langar, the community kitchen, serves free meals to anyone, cooked by volunteers.",
        come: "On Baba Kharak Singh Marg, near Connaught Place, on foot or by tuk-tuk. Leave shoes and socks at the deposit and cover your head: you can pick up scarves at the entrance.",
        quando: "Open every day. The evening, with the lights and the singing, is the most atmospheric time.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Sit on the floor at the langar with everyone else and, if you like, lend a hand in the kitchen."
      },
      {
        nome: "Nizamuddin Dargah and qawwali",
        testo: "The shrine of the Sufi saint Nizamuddin Auliya, in a neighborhood of alleys near Humayun's Tomb. Every evening, after the sunset prayer, qawwali singers perform in front of the tomb among the worshippers.",
        come: "On foot from Humayun's Tomb or from Hazrat Nizamuddin station. Shoes off, head covered, long clothes.",
        quando: "Every evening after the sunset prayer; Thursday is the most heartfelt and crowded night.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "Offerings are voluntary: leave only what you want, even if someone insists."
      },
      {
        nome: "India Gate, Kartavya Path and the Lodhi Gardens",
        testo: "The British Delhi of grand avenues: the war memorial arch of India Gate and the ceremonial boulevard leading to the government buildings. A little further south, the Lodhi Gardens are a public park with the tombs of 15th-century sultans.",
        come: "Metro to Khan Market for the Lodhi Gardens; India Gate by tuk-tuk or on foot from Central Secretariat.",
        quando: "Lodhi Gardens at dawn, when Delhi goes jogging and does yoga. India Gate at sunset, when it lights up.",
        tempo: "2 hours",
        costo: "free",
        consiglio: "End at the Lodhi Gardens with a coffee in Khan Market: it's the quietest corner of the city."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Jama Masjid at opening time",
          "Chandni Chowk by cycle-rickshaw and Khari Baoli",
          "Lunch with parathas at Paranthe Wali Gali",
          "Humayun's Tomb in the afternoon",
          "Qawwali at Nizamuddin, if it's Thursday"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Old Delhi, the Red Fort and Jama Masjid, then Humayun's Tomb and Nizamuddin",
          "Day 2: Qutub Minar at opening time and Mehrauli",
          "Lodhi Gardens and Gurudwara Bangla Sahib",
          "India Gate at sunset, or the night train to Varanasi in the evening, as we did"
        ]
      }
    ],
    zone: [
      {
        nome: "Connaught Place and Karol Bagh",
        perChi: "convenience and the metro",
        testo: "At the center of the metro network, close to New Delhi station. Mid-range hotels and restaurants everywhere; Karol Bagh is noisier and busier."
      },
      {
        nome: "South Delhi (Hauz Khas, Defence Colony)",
        perChi: "peace and quiet",
        testo: "Green residential neighborhoods with well-kept guesthouses and restaurants. You're farther from Old Delhi, and in traffic the drive is long."
      },
      {
        nome: "Paharganj",
        perChi: "tight budgets",
        testo: "Across from New Delhi station, very handy for trains. Cheap but chaotic, dirty and full of touts: fine for one night before a train."
      },
      {
        nome: "Aerocity",
        perChi: "dawn or late-night flights",
        testo: "Chain hotels next to the airport, linked by the Airport Express metro. Handy for arriving and leaving, not much use for seeing the city."
      }
    ],
    sapori: [
      {
        nome: "Parathas at Paranthe Wali Gali",
        testo: "Fried flatbread stuffed with potato, cauliflower or paneer, served with chutney and pumpkin curry. You eat them in the alley of the same name in Chandni Chowk, in shops that have been open for generations."
      },
      {
        nome: "Kebabs and curries by the Jama Masjid",
        testo: "Around the mosque, toward Matia Mahal, are the Mughlai kitchens: kebabs, slow-cooked beef nihari and korma. Karim's is the best known, open since 1913."
      },
      {
        nome: "Chaat",
        testo: "Sweet and sour street snacks: aloo tikki, papdi chaat, golgappa filled with spiced water. In Chandni Chowk and the neighborhood markets."
      },
      {
        nome: "Chole bhature",
        testo: "Spicy chickpeas with a fried bread that puffs up like a balloon, Delhi's heavy breakfast. In every Punjabi eatery."
      },
      {
        nome: "Butter chicken",
        testo: "Tandoori chicken in a tomato and butter sauce, made famous after 1947 by the Moti Mahal restaurant, opened in Delhi by Punjabi refugees. You'll find it in Punjabi restaurants all over the city."
      }
    ],
    attenzioni: [
      "People who stop you near New Delhi station saying the foreign tourist ticket office is closed or has moved: the International Tourist Bureau is inside the station, upstairs, and doesn't close “for repairs.”",
      "The private “tourist offices” around Connaught Place sell expensive packages while passing themselves off as government agencies.",
      "At the airport and in the evening: only prepaid taxis, Uber or Ola, or the hotel transfer. Don't believe anyone who says your hotel is closed or full.",
      "Don't accept food or drinks from strangers: the UK Foreign Office reports thefts after drugged drinks.",
      "Between November and January the air is often terrible: check the air quality index and bring an FFP2 mask."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi', 'india-sud-taj-mahal'],
    imageAlt: "Humayun's Tomb in Delhi, in red sandstone and white marble, at the center of the Mughal gardens",
    immagine: '/images/india/delhi.jpg',
  },
  {
    slug: 'agra',
    paeseSlug: 'india',
    ordine: 2,
    nome: 'Agra and the Taj Mahal',
    tipologia: ['storia moghul', 'patrimonio UNESCO'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The city of the Taj Mahal, the white marble mausoleum Shah Jahan had built for his wife Mumtaz Mahal, and of Agra Fort, the red sandstone Mughal citadel along the Yamuna river.",
    percheAndarci:
      "To see the Taj Mahal at dawn, when the marble changes color and the gardens are almost empty. Agra itself is a chaotic city: one night is enough, two if you also want to see it at sunset from Mehtab Bagh.",
    cosaVedere: [
      "The Taj Mahal when the gates open, with the inside of the mausoleum",
      "Agra Fort, from which Shah Jahan, a prisoner, gazed at the Taj",
      "Itimad-ud-Daulah, the \"baby Taj\" inlaid with semi-precious stones",
      "The Mehtab Bagh garden, on the opposite bank of the river, for sunset",
      "Fatehpur Sikri, Akbar's abandoned capital, about an hour's drive away",
    ],
    cosaFare: [
      "Enter through the east gate at dawn with a ticket bought online",
      "Watch the Taj at sunset from Mehtab Bagh or a rooftop terrace in Taj Ganj",
    ],
    doveDormire: "Taj Ganj and Fatehabad Road, within walking distance of the Taj's east gate.",
    doveMangiare: "Mughlai cuisine (biryani, korma, kebabs) and petha, the city's candied pumpkin sweet.",
    comeArrivare:
      "From Delhi by train, on the Gatimaan Express in about 2 hours (it doesn't run on Fridays; timetables on IRCTC), or by car on the Yamuna Expressway (3-4 hours).",
    comeSpostarsi: "Electric tuk-tuks near the Taj (gasoline vehicles can't get close), car with driver for Fatehpur Sikri.",
    periodoMigliore: "October-March; between December and January fog can cover the Taj at dawn for a couple of hours.",
    costi:
      "Taj Mahal about 1,100 rupees for foreigners, plus 200 for the inside of the mausoleum; Agra Fort about 650; Fatehpur Sikri about 600 (indicative, October 2026). Free entry under 15.",
    erroriDaEvitare: [
      "Arriving on a Friday: the Taj Mahal is closed",
      "Bringing food, tripods or drones, which aren't allowed in, and big bags, which slow down the security checks",
      "Relying on guides who offer their services at the gates without a badge",
    ],
    luoghi: [
      {
        nome: "Taj Mahal",
        testo: "The white marble mausoleum Shah Jahan had built for his wife Mumtaz Mahal, who died in 1631. The symmetry is total: garden, pools, mosque and guesthouse mirror each other on either side. Up close, the marble is inlaid with semi-precious stones.",
        come: "You get there by electric tuk-tuk or golf cart from the parking lots, because cars can't come close. There are two main entrances, east and west; buy your ticket online on the official portal, and expect security checks at the entrance. Licensed guides carry an ID badge.",
        quando: "From half an hour before sunrise to half an hour before sunset. Closed on Fridays. On some nights around the full moon there is a night viewing, in small groups and by booking only: dates and rules on the official website.",
        tempo: "2-3 hours",
        costo: "1,100 rupees for foreigners, plus 200 for the inside of the mausoleum; free under 15 (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "We saw it twice, at sunset and at dawn the next day, and each entry needs its own ticket. There are lines at security: bring the bare minimum and, if you can, no backpacks, to speed everything up."
      },
      {
        nome: "Agra Fort",
        testo: "Akbar's red sandstone citadel, later expanded with the marble pavilions of Shah Jahan, who spent his last years here as his son's prisoner. From the Musamman Burj you can see the Taj along the river. It's a UNESCO World Heritage Site.",
        come: "Enter through the Amar Singh Gate, 1.5 miles from the Taj, by tuk-tuk. A licensed guide helps you understand who built what.",
        quando: "Every day from sunrise to sunset. Good in the morning or early afternoon before the Taj.",
        tempo: "2 hours",
        costo: "650 rupees for foreigners, 600 on Fridays (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Friday, when the Taj is closed, is the right day for the fort: it costs a little less."
      },
      {
        nome: "Itimad-ud-Daulah",
        testo: "The tomb Nur Jahan had built for her father between 1622 and 1628, on the opposite bank of the Yamuna. In white marble inlaid with semi-precious stones, it marks the shift from red sandstone Mughal tombs to the marble of the Taj, which is why people call it the “Baby Taj.”",
        come: "By tuk-tuk from the Fort across the bridge, about 20 minutes. You can visit on your own.",
        quando: "Open on Fridays too, at a lower rate; opening hours on the official website. Few people at any hour.",
        tempo: "45 minutes",
        costo: "310 rupees for foreigners, 300 on Fridays (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "Look closely at the inlay work: this is the workshop where the Taj's decorations were tried out."
      },
      {
        nome: "Mehtab Bagh",
        testo: "The Mughal garden on the north bank of the Yamuna, lined up exactly with the Taj. From here you see the mausoleum straight ahead, across the river, with no crowds.",
        come: "By tuk-tuk from Itimad-ud-Daulah, 15 minutes. The riverside viewpoint is at the far end of the garden.",
        quando: "Sunset, and also Fridays, when the Taj is closed.",
        tempo: "1 hour",
        costo: "300 rupees for foreigners (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "If your day in Agra falls on a Friday, this is where you see the Taj from."
      },
      {
        nome: "Fatehpur Sikri",
        testo: "The capital Akbar built between 1571 and 1585 and abandoned soon after. The palaces, courtyards and great mosque with the Buland Darwaza have survived almost intact.",
        come: "About 23 miles away, an hour by car, on the road to Jaipur or Ranthambore. The royal complex needs a ticket; you take your shoes off to enter the mosque.",
        quando: "Open on Fridays too, at a lower rate; opening hours on the official website. Go in the morning, before the sandstone courtyard heats up.",
        tempo: "2 hours",
        costo: "610 rupees for foreigners, 600 on Fridays (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "In the mosque courtyard you'll be approached by vendors and fake guides: say no right away and keep walking."
      },
      {
        nome: "Akbar's Tomb at Sikandra",
        testo: "The mausoleum of the emperor Akbar, built by Jahangir between 1605 and 1613 about 5 miles from the center, with a monumental gateway inlaid with marble and slate and a large garden around it.",
        come: "By car or tuk-tuk heading north, on the road to Delhi. You can visit on your own.",
        quando: "Open on Fridays too, at a lower rate; opening hours on the official website.",
        tempo: "1 hour",
        costo: "310 rupees for foreigners, 300 on Fridays (tajmahal.gov.in, 2026)",
        url: "https://www.tajmahal.gov.in/",
        consiglio: "An easy stop when you arrive from Delhi by car, before you enter the city."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Agra Fort in the morning",
          "Itimad-ud-Daulah",
          "Lunch and a rest at the hotel in Taj Ganj",
          "Taj Mahal in the late afternoon, until closing"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Agra Fort, Itimad-ud-Daulah and the Taj Mahal at sunset",
          "Day 2: the Taj Mahal at dawn, as we did",
          "Breakfast and departure with a stop at Fatehpur Sikri",
          "If one of the two days is a Friday: Mehtab Bagh instead of the Taj"
        ]
      }
    ],
    zone: [
      {
        nome: "Taj Ganj",
        perChi: "walking to the Taj",
        testo: "The alleys south of the Taj, 5-10 minutes from the gates: cheap guesthouses and rooftops with a view of the dome. Noisy, cramped and full of touts."
      },
      {
        nome: "Fatehabad Road",
        perChi: "mid-range and upscale",
        testo: "The avenue of chain and luxury hotels, about a mile from the east entrance. Quieter and tidier, but you need a tuk-tuk for everything."
      }
    ],
    sapori: [
      {
        nome: "Petha",
        testo: "Agra's sweet: cubes of candied ash gourd, plain, with saffron or with coconut. Buy it at the old sweet shops, like Panchhi Petha."
      },
      {
        nome: "Bedai and jalebi",
        testo: "Agra's breakfast: fried bread stuffed with lentils and served with potato curry, then fried spirals soaked in syrup. In the old city shops, in the morning."
      },
      {
        nome: "Mughlai cuisine",
        testo: "Biryani, korma, kebabs and naan from the tandoor oven, the court cuisine of the Mughals. In the restaurants on Fatehabad Road and in Taj Ganj."
      },
      {
        nome: "Dalmoth",
        testo: "A salty, crunchy mix of fried lentils and spices to munch with chai. Sold by weight alongside petha."
      }
    ],
    attenzioni: [
      "The Taj Mahal is closed on Fridays: check the calendar before you book trains and hotels.",
      "People at the gates who offer to guide you without an official badge, or who sell tickets outside the ticket offices.",
      "The inlaid marble shops your driver or tuk-tuk takes you to pay a commission: prices go up accordingly.",
      "Food, drones and tripods without a permit aren't allowed into the Taj; big bags and books slow down the security checks.",
      "Between December and January fog can cover the Taj at dawn for a couple of hours."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi', 'india-sud-taj-mahal'],
    imageAlt: "The symmetrical Taj Mahal at dawn, with the water basin and the garden cypresses, Agra",
    immagine: '/images/india/agra-taj-mahal-alba-riccardo.jpg',
  },
  {
    slug: 'jaipur',
    paeseSlug: 'india',
    ordine: 3,
    nome: 'Jaipur',
    tipologia: ['città', 'forti e palazzi', 'bazar'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "The capital of Rajasthan, the \"Pink City\" founded in the eighteenth century by Maharaja Jai Singh II with a grid plan, terracotta-colored walls, bazaars and some of the most photographed palaces in India.",
    percheAndarci:
      "It packs the Amber Fort, the Hawa Mahal, the City Palace and the Jantar Mantar observatory into two days, plus the best markets in Rajasthan for block-printed textiles, jewelry and embroidered shoes.",
    cosaVedere: [
      "The Amber Fort, with the Hall of Mirrors, early in the morning",
      "The Hawa Mahal, the Palace of Winds",
      "The City Palace and the Jantar Mantar",
      "The Jal Mahal on Man Sagar lake and the Panna Meena stepwell",
      "Nahargarh Fort at sunset",
    ],
    cosaFare: [
      "Walk up to Amber along the ramp",
      "Wander Johari Bazaar and Bapu Bazaar",
      "A textile block-printing workshop",
      "A Rajasthani thali and a lassi in a terracotta cup",
    ],
    doveDormire: "Havelis and heritage hotels in the old city or in Bani Park.",
    doveMangiare: "From baati churma, laal maas, ker sangri, kachori in the morning, and lassi.",
    comeArrivare: "From Agra by car in 5-6 hours with Fatehpur Sikri; from Delhi by train (about 4-5 hours) or by plane.",
    comeSpostarsi: "Tuk-tuks, Uber and Ola, driver for Amber and Nahargarh.",
    periodoMigliore: "October-March.",
    costi:
      "Since January 1, 2026 (state fee revision) foreigners pay 1,000 rupees at Amber and 600 at Hawa Mahal, Jantar Mantar, Nahargarh and Albert Hall; the composite ticket is valid for 10 days at all state-run monuments and museums in Rajasthan (5,500 rupees according to the local press). The City Palace, which is private, has its own rates on its official website.",
    erroriDaEvitare: [
      "Believing the offer to buy gems to resell in Italy",
      "Riding up to Amber on an elephant",
      "Visiting Amber at noon, with the heat and the tour groups",
    ],
    luoghi: [
      {
        nome: "Amber Fort",
        testo: "The palace-fortress of the Kachwaha rulers, in the hills 7 miles from the city, with walls running down to Maota Lake. Inside are courtyards and halls, including the Sheesh Mahal, the hall of mirrors. It's a UNESCO World Heritage Site as one of the hill forts of Rajasthan.",
        come: "With your driver or Uber to the foot of the fort, then up the ramp on foot, or by jeep. A licensed guide or the audio guide helps you find your way around the courtyards.",
        quando: "At morning opening time, before the tour buses and the heat.",
        tempo: "2-3 hours",
        costo: "1,000 rupees for foreigners under the state revision in force since January 1, 2026",
        consiglio: "Inside the fort is the 1135 AD restaurant: we went back there for dinner, and it was very good, in a really atmospheric setting. At the end they invited us to see the maharajas' private room on the top floor, where they still dine and receive important guests."
      },
      {
        nome: "Hawa Mahal",
        testo: "The Palace of the Winds, built in 1799: a five-story pink facade with 953 small latticed windows, from which the women of the court watched the street without being seen. Behind the facade it's just a thin screen.",
        come: "In the old city, near Badi Chaupar. The entrance is on the City Palace side; you look at the facade from the street or from the rooftop cafés opposite.",
        quando: "Early morning: the facade faces east and catches the first sun.",
        tempo: "45 minutes",
        costo: "600 rupees for foreigners (state rate since January 1, 2026)",
        consiglio: "The best photo is from a rooftop across the street, with a chai, before 9 a.m."
      },
      {
        nome: "City Palace",
        testo: "The residence of Jaipur's royal family, still partly lived in: courtyards, gates painted with peacocks, armories and textile collections. The Chandra Mahal, where the family lives, can only be visited on the Royal Tour.",
        come: "In the heart of the old city, next to the Jantar Mantar. The Royal Tour, with a guide and refreshments, can only be bought at the ticket office.",
        quando: "Every day from 9:30 a.m. to 6:30 p.m., closed only on the second day of Holi. The Mubarak Mahal textile gallery has been closed for restoration since March 2026.",
        tempo: "1.5-2 hours",
        costo: "Royal Tour 4,000 rupees per person; museum rates on the official website (citypalace.org, 2026)",
        url: "https://citypalace.org/visit",
        consiglio: "Combine it with the Jantar Mantar, which is a few steps away: you can do both in the same afternoon."
      },
      {
        nome: "Jantar Mantar",
        testo: "The astronomical observatory built by Jai Singh II in the 18th century, with giant stone instruments. The Samrat Yantra sundial is about 27 meters tall and is said to tell the time to within about two seconds. It's a UNESCO World Heritage Site.",
        come: "Next to the City Palace. Without explanations the instruments look like sculptures: a guide or the audio guide is a good idea.",
        quando: "During the day with the sun, which you need to see how the sundials work.",
        tempo: "1 hour",
        costo: "600 rupees for foreigners (state rate since January 1, 2026)",
        consiglio: "Go at midday: it's the only place in Jaipur where a high sun helps."
      },
      {
        nome: "Jal Mahal and Panna Meena ka Kund",
        testo: "The Jal Mahal is a palace that seems to float on Man Sagar Lake, on the road to Amber; you can't go inside, you look at it from the promenade. Near the fort is Panna Meena ka Kund, a 16th-century stepwell with crisscrossing staircases.",
        come: "Stops along the road to Amber, with your driver. The stepwell is a 10-minute walk from the fort parking lot.",
        quando: "The stepwell in the morning, with the low light on the steps. The Jal Mahal at sunset too.",
        tempo: "1 hour in total",
        costo: "free",
        consiglio: "You can no longer go down the stepwell's steps: take your photos from the edge."
      },
      {
        nome: "Nahargarh Fort",
        testo: "The fort on the ridge above the city, built in 1734. From the walls you see all of Jaipur, pink and dusty, lighting up at sunset.",
        come: "By car with your driver along the ridge road. Inside is the Madhavendra palace with the queens' apartments.",
        quando: "Late afternoon until sunset.",
        tempo: "1.5 hours",
        costo: "600 rupees for foreigners (state rate since January 1, 2026)",
        consiglio: "Don't walk down in the dark: go back by car."
      },
      {
        nome: "Albert Hall Museum",
        testo: "The oldest museum in Rajasthan, in an Indo-Saracenic building from 1887 in the middle of the Ram Niwas gardens. It holds weapons, carpets, miniatures and an Egyptian mummy.",
        come: "Just outside the old city, by tuk-tuk. The route is short and well signposted.",
        quando: "During the day for the museum; in the evening the building is lit up.",
        tempo: "1 hour",
        consiglio: "Entry is 600 rupees for foreigners. The state composite ticket is valid for 10 days across Rajasthan: it only pays off if you visit many state-run monuments, outside Jaipur too."
      },
      {
        nome: "The old city bazaars",
        testo: "Jaipur is the best city in Rajasthan for shopping: Johari Bazaar for jewelry and fabrics, Bapu Bazaar for embroidered shoes (jutti) and block-printed cloth, Tripolia for lac bangles.",
        come: "On foot under the arcades of the old city. To see block printing, head to the workshops in Sanganer or Bagru, outside the city.",
        quando: "Late morning, when the shops open and before the heat.",
        tempo: "half a day",
        consiglio: "Bargain calmly, and never buy stones “to resell back home.”"
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Amber Fort at opening time",
          "Panna Meena ka Kund and Jal Mahal",
          "City Palace and Jantar Mantar in the afternoon",
          "Hawa Mahal",
          "Sunset from Nahargarh"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Hawa Mahal at dawn, Amber, Panna Meena and Jal Mahal, dinner at 1135 AD inside the fort",
          "Day 2: City Palace and Jantar Mantar",
          "The old city bazaars and a block-printing workshop",
          "Albert Hall and sunset from Nahargarh, dinner at Jamavar"
        ]
      }
    ],
    zone: [
      {
        nome: "Old city (Pink City)",
        perChi: "walking to the monuments",
        testo: "Havelis turned into hotels inside the walls, a few minutes from the Hawa Mahal and the City Palace. A one-of-a-kind atmosphere, but traffic, horns and crowded streets until late."
      },
      {
        nome: "Bani Park and Civil Lines",
        perChi: "quiet and heritage hotels",
        testo: "Residential neighborhoods just west of the walls, with many heritage hotels and gardens. The old city is 10-15 minutes away by tuk-tuk."
      },
      {
        nome: "C-Scheme and MI Road",
        perChi: "restaurants and convenience",
        testo: "The modern center, with cafés, restaurants and chain hotels. Convenient and clean, with less character."
      }
    ],
    sapori: [
      {
        nome: "Dinners fit for a maharaja",
        testo: "In Jaipur we had dinners fit for a maharaja. At Jamavar, the Indian restaurant at The Leela Palace: expensive, and you book with a deposit, but it's worth every rupee. And at 1135 AD, inside Amber Fort: very good, in a really atmospheric setting."
      },
      {
        nome: "Street food",
        testo: "During the day we always ate on the street and our stomachs were always fine, lucky us. The rule is food cooked in front of you and served piping hot, at stalls full of locals."
      },
      {
        nome: "Pyaaz kachori",
        testo: "A fried pastry stuffed with spiced onion, Jaipur's breakfast. The old shops, like Rawat Mishthan Bhandar, start frying early in the morning."
      },
      {
        nome: "Dal baati churma",
        testo: "Rajasthan's signature dish: balls of bread baked in the embers and soaked in ghee, with lentils and a sweet wheat crumble. In Rajasthani restaurants and in thalis."
      },
      {
        nome: "Laal maas",
        testo: "A red, spicy mutton curry made with Mathania chilies. In restaurants serving Rajput cuisine."
      },
      {
        nome: "Lassi in a clay cup",
        testo: "Thick, sweet yogurt served in a kulhad, the disposable clay cup. The most famous is from the Lassiwala shops on MI Road."
      }
    ],
    attenzioni: [
      "The gem scam: a friendly shopkeeper suggests you take stones back home and resell them for a big profit. The stones are worth little and you never see your money again.",
      "Tuk-tuks and drivers take you to shops where they get a commission: say clearly where you want to go.",
      "Don't ride up to Amber on an elephant: animal welfare groups advise against it.",
      "Choose your Rajasthan driver carefully: ours was a total nutcase, and I don't recommend him. Drivers often stop at “tourist” restaurants where they eat for free: you can ask for a normal dhaba.",
      "State monument prices changed on January 1, 2026: check the fees on the official portal before you go."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: "The pink facade of the Hawa Mahal in Jaipur, with its latticed windows and green shutters",
    immagine: '/images/india/jaipur-hawa-mahal-facciata-riccardo.jpg',
  },
  {
    slug: 'ranthambore',
    paeseSlug: 'india',
    ordine: 4,
    nome: "Ranthambore",
    tipologia: ["national park", "safari", "tigers"],
    giorniConsigliati: "2 nights, at least two safaris",
    visitataPersonalmente: true,
    introduzione:
      "One of India's most famous tiger parks, between Agra and Jaipur: dry forest, lakes and ruins, with a medieval fort on a cliff inside the park. You can only visit on official safaris, by jeep or open truck.",
    percheAndarci:
      "To see tigers in the wild a few hours from Jaipur. Besides tigers there are leopards, sloth bears, crocodiles in the lakes and plenty of deer. Ranthambore Fort is a UNESCO site along with Rajasthan's other hill forts.",
    cosaVedere: [
      "The park on the morning and afternoon safaris",
      "Ranthambore Fort and the Ganesh temple on top of the cliff",
    ],
    cosaFare: [
      "At least two safaris, because zones are assigned at random",
      "Book the gypsy, the 6-seat jeep, rather than the canter that seats about twenty",
    ],
    doveDormire: "Lodges and hotels along the park road in Sawai Madhopur, many with safari pickup.",
    comeArrivare: "About 5-6 hours by car from Agra, 3.5-4 from Jaipur. The station is Sawai Madhopur, on the Delhi-Mumbai line.",
    comeSpostarsi: "On the safari vehicles (gypsy or canter) that pick you up at your hotel.",
    periodoMigliore:
      "October-June; the core zones (1-5) close for the monsoon, from July to September, while some outer zones stay open. March to June is hot, but animals are easier to spot around water.",
    erroriDaEvitare: [
      "Booking late: the gypsies sell out first",
      "Doing just one safari: the zone you get may be the wrong one",
      "Bright clothes and loud voices on safari",
    ],
    luoghi: [
      {
        nome: "The park on safari",
        testo: "Dry forest, lakes and ruins, home to tigers, leopards, sloth bears, crocodiles and lots of sambar deer. The park is divided into zones, and each safari covers just one, assigned by the Forest Department.",
        come: "Only on official safaris, by gypsy (a 6-seat jeep) or canter (an open truck for about twenty people), which pick you up at your hotel. You book with your passport on the Forest Department portal or through your hotel.",
        quando: "Two shifts a day, early morning and afternoon, with times that change with the season. Zones 1-5 close from July to September. From March to June it's hot, but you see animals near the water.",
        tempo: "a few hours per safari, depending on the season; at least two safaris",
        consiglio: "We booked late and ended up in a canter, but we were lucky anyway: 3 tigers on a single morning safari, plus two little bears running. If you want a gypsy, book well in advance, and always do at least two safaris: you don't choose the zone, it's assigned at random."
      },
      {
        nome: "Ranthambore Fort",
        testo: "A medieval fort, possibly founded around the 10th century, on a cliff inside the park, with walls, cisterns and the Trinetra Ganesh temple, a pilgrimage site. It's a UNESCO World Heritage Site as one of the hill forts of Rajasthan.",
        come: "You drive up from the park gate by car or tuk-tuk, then climb the stairs on foot, like the pilgrims heading to the Ganesh temple.",
        quando: "In the morning, between safaris. On Wednesdays the Ganesh temple draws thousands of worshippers.",
        tempo: "2 hours",
        consiglio: "Along the walls you often see langurs, and sometimes animals from the park below the cliff."
      },
      {
        nome: "Padam Talao and Rajbagh lakes",
        testo: "The central zones of the park hold the most photographed lakes, with the Jogi Mahal hunting lodge and the Rajbagh ruins on the water. Crocodiles, water birds and deer coming to drink.",
        come: "You only see them if your safari gets one of the central zones.",
        quando: "In the dry season, when the animals gather around the water.",
        tempo: "within a safari",
        consiglio: "Ask your hotel which zones are giving good sightings: you can't choose, but it helps you know what to expect."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning safari",
          "Ranthambore Fort and the Ganesh temple",
          "Afternoon safari"
        ]
      },
      {
        titolo: "2 nights",
        tappe: [
          "Day 1: arrival, afternoon safari",
          "Day 2: morning safari, the fort, afternoon safari",
          "Day 3: one last safari at dawn and departure for Jaipur"
        ]
      }
    ],
    zone: [
      {
        nome: "Ranthambore Road",
        perChi: "safari-goers",
        testo: "The road between Sawai Madhopur and the park gate, with lodges and resorts at every price. Many arrange safari pickups; you sleep peacefully, but there's nothing around."
      },
      {
        nome: "Sawai Madhopur",
        perChi: "train arrivals on a small budget",
        testo: "The town near the station, with simple hotels. Handy for trains, less so for safaris: the vehicles still pick you up, just earlier."
      }
    ],
    attenzioni: [
      "Many sites with names similar to the official one resell safaris at higher prices: book on the Forest Department portal or through a reliable hotel.",
      "Tigers aren't guaranteed: two or three safaris greatly improve your chances.",
      "Between December and February, mornings in the open vehicles are cold: bring layers, a hat and gloves.",
      "Bright colors, loud voices and food in the vehicles are banned or frowned upon by the rangers."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: "Ranthambore National Park",
  },
  {
    slug: 'pushkar',
    paeseSlug: 'india',
    ordine: 4,
    nome: 'Pushkar',
    tipologia: ['città santa', 'lago', 'atmosfera'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    introduzione:
      "A small holy town around a lake with about fifty ghats, home to one of the very few temples dedicated to Brahma in India. Vegetarian by tradition: no meat, no eggs and no alcohol.",
    percheAndarci:
      "To slow down between Jaipur and Jodhpur: the ghats at sunset, the evening chants, the bazaar alleys. Around the full moon of Kartik (October-November) it hosts the camel fair.",
    cosaVedere: ["The ghats on the lake at sunset", "The Brahma temple", "The Savitri temple on the hill, reachable on foot or by cable car"],
    cosaFare: ["Climb to the Savitri temple for sunrise", "Watch the evening aarti on the ghats", "Visit the camel fair, if the dates line up"],
    doveDormire: "Guesthouses and small hotels with a terrace on the lake; during the fair prices multiply.",
    doveMangiare: "Vegetarian thalis, malpua (sweet fritters) and coffee on the terraces.",
    comeArrivare: "From Jaipur about 3 hours by car, or train to Ajmer and 30 minutes by road.",
    comeSpostarsi: "On foot.",
    periodoMigliore: "October-March; camel fair around the full moon of Kartik.",
    erroriDaEvitare: [
      "Accepting the \"free\" flower for the puja on the ghats: a request for a donation follows",
      "Photographing bathers on the ghats without asking",
    ],
    luoghi: [
      {
        nome: "The sacred lake and the ghats",
        testo: "A small lake ringed by about 52 ghats and white houses, where legend says a lotus flower fell from Brahma's hand. At sunset, bells and chanting fill the air over the water.",
        come: "On foot from the bazaar. Shoes off on the ghats; photographing bathers without asking is frowned upon.",
        quando: "Dawn and sunset, with the evening aarti on the main ghats like Varaha and Gau Ghat.",
        tempo: "2 hours",
        costo: "free",
        consiglio: "Sit on a rooftop overlooking the lake at sunset instead of on the steps: you watch the ceremony without being approached."
      },
      {
        nome: "Brahma Temple",
        testo: "One of the very few temples in India dedicated to Brahma, the creator god. The current building dates from the 14th century, with a red spire and a floor of silver coins left by worshippers.",
        come: "In the bazaar, on foot. Shoes off before you go in.",
        quando: "Early morning or late afternoon: it closes in the middle of the day, usually from 1:30 to 3 p.m.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "Anyone who offers to take you in “for the blessing” will ask for a donation: you can go in perfectly well on your own."
      },
      {
        nome: "Savitri Temple",
        testo: "The temple of Brahma's wife, on top of Ratnagiri hill, behind the Brahma temple. From up there you see Pushkar, the lake and the desert.",
        come: "On foot up a long staircase, or by cable car (times and fares on site).",
        quando: "At dawn, setting off in the dark with a flashlight, or at sunset.",
        tempo: "2 hours including the climb",
        consiglio: "Bring water: there's nothing along the stairs."
      },
      {
        nome: "The camel fair",
        testo: "One of India's largest camel, horse and cattle fairs: thousands of camels, traders, competitions and pilgrims. It runs in the days leading up to the Kartik full moon and ends on that day: November 24 in 2026.",
        come: "At the fairground, on foot from the center. The government of Rajasthan publishes the exact dates.",
        quando: "The first days, when the camels are traded; the last five, around the full moon, are the busiest with pilgrims.",
        tempo: "half a day",
        consiglio: "Book your room months ahead: prices multiply during those days."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Arrival from Jaipur and sunset on the ghats",
          "Evening aarti",
          "Dawn at Savitri Temple",
          "Brahma Temple and the bazaar, then departure for Jodhpur"
        ]
      }
    ],
    zone: [
      {
        nome: "Around the lake",
        perChi: "walking to the ghats",
        testo: "Guesthouses and small hotels with terraces over the water, in the pedestrian center. Temple bells and loudspeakers from dawn."
      },
      {
        nome: "Outside town",
        perChi: "quiet and a pool",
        testo: "Resorts and tented camps among the fields, 1-3 miles out. Silent, but you need a tuk-tuk to get to the lake."
      }
    ],
    sapori: [
      {
        nome: "Malpua",
        testo: "Sweet pancakes fried in ghee and dipped in syrup, the specialty of the bazaar sweet shops."
      },
      {
        nome: "Vegetarian thali",
        testo: "Pushkar is vegetarian by tradition: no meat, eggs or alcohol. The thali with dal, vegetables, chapati and rice is what everyone eats."
      },
      {
        nome: "Gulkand and rose products",
        testo: "Roses are grown around Pushkar: in the bazaar shops you'll find rose petal jam (gulkand), rose syrup and rose water."
      },
      {
        nome: "Falafel and backpacker food",
        testo: "Decades of Israeli travelers have left falafel and hummus in many bazaar cafés, alongside Indian food."
      }
    ],
    attenzioni: [
      "The “free” flower on the ghats: it's followed by a puja and a request for a donation for your family, often a very large one.",
      "Don't photograph people bathing or ceremonies without asking.",
      "Bhang lassi, made with cannabis, is easy to find but has strong and unpredictable effects.",
      "During the camel fair, watch out for pickpockets in the crowds."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: "The ghats and white houses overlooking Pushkar's sacred lake, reflected in the water in the afternoon light",
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-10-pushkar.jpg',
  },
  {
    slug: 'jodhpur',
    paeseSlug: 'india',
    ordine: 5,
    nome: 'Jodhpur',
    tipologia: ['città', 'forti e palazzi'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: true,
    introduzione:
      "The blue city, on the edge of the Thar desert, dominated by Mehrangarh Fort on a rocky spur rising about 120 meters above the plain.",
    percheAndarci:
      "Mehrangarh is the most impressive fort in Rajasthan and the old city, with its blue-painted houses, is quieter and more vertical than Jaipur.",
    cosaVedere: [
      "Mehrangarh Fort and its museum",
      "The Jaswant Thada cenotaph",
      "The blue alleys of Navchokiya and Brahmpuri",
      "The Toorji ka Jhalra stepwell",
      "The Ghanta Ghar and the Sardar market",
    ],
    cosaFare: ["Visit the fort with the included audio guide", "Sunset from a terrace in the old city", "The zipline along the fort walls"],
    doveDormire: "Havelis with a terrace below the fort, in the Ghanta Ghar and Navchokiya area.",
    doveMangiare: "Mirchi bada, pyaaz kachori and saffron makhaniya lassi.",
    comeArrivare: "From Jaipur by train or by car: allow half a day of travel.",
    comeSpostarsi: "On foot and by tuk-tuk; cars don't enter the alleys.",
    periodoMigliore: "October-March; cold nights in January.",
    costi: "Mehrangarh museum 800 rupees for foreigners, audio guide included; Jaswant Thada 100 rupees; Rao Jodha Park 100 rupees (official website, 2026).",
    erroriDaEvitare: ["Arriving with heavy suitcases in the stepped alleys", "Visiting the fort during the middle of the day"],
    luoghi: [
      {
        nome: "Mehrangarh Fort",
        testo: "The Rathore fort on a rock spur above the blue city, begun in 1459. Inside is one of the best-kept museums in India, with galleries of palanquins, weapons, howdahs, royal cradles and paintings. It's run by a foundation of the royal family.",
        come: "By tuk-tuk or on foot from the old city, up a steep climb. At the entrance there's an elevator to the upper part (50 rupees one way, 2026). The museum route is signposted.",
        quando: "The museum is open every day from 9 a.m. to 5 p.m. Go at opening time, before the heat and the groups.",
        tempo: "2-3 hours",
        url: "https://www.mehrangarh.org/visit/",
        costo: "800 rupees for foreigners, audio guide included (official website, 2026)",
        consiglio: "Get the audio guide, included in the foreigners' ticket: it tells the story of the fort room by room, and you can take your time without a guide."
      },
      {
        nome: "Jaswant Thada",
        testo: "The white marble cenotaph of Maharaja Jaswant Singh II, commissioned by his son Sardar Singh in 1899 and finished in 1906, on a hill between the fort and the city. The marble sheets are so thin they glow warmly in the sun.",
        come: "A short way from the fort, on foot or by tuk-tuk. It has its own ticket: 100 rupees for foreigners (official website, 2026).",
        quando: "Every day from 9 a.m. to 5 p.m. Late afternoon, with the view of the fort.",
        tempo: "45 minutes",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "Pair it with the Rao Jodha Desert Rock Park, right next door."
      },
      {
        nome: "Rao Jodha Desert Rock Park",
        testo: "Seventy hectares of rocky land around the fort, where since 2006 the Mehrangarh foundation has brought back the desert plants. Short trails with views of the walls.",
        come: "The entrance is near the fort. Walk on your own or with a naturalist guide (200 rupees, official website 2026). Ticket 100 rupees.",
        quando: "From October to March, 8 a.m. to 5:30 p.m.; from April to September, 7 a.m. to 6:30 p.m. Early morning for the light and the birds.",
        tempo: "1-2 hours",
        url: "https://www.mehrangarh.org/visit/",
        consiglio: "It's the quietest place in Jodhpur: good for a break after the fort."
      },
      {
        nome: "The blue city: Brahmpuri and Navchokiya",
        testo: "The alleys below the fort, with houses painted indigo. There are several stories about why the houses are blue, none of them documented. Stairways, little squares, small shrines and kids playing cricket.",
        come: "On foot, getting lost. Cars can't get in; a tuk-tuk drops you where the alleys begin.",
        quando: "Early morning or late afternoon, with soft light on the blue.",
        tempo: "1-2 hours",
        costo: "free",
        consiglio: "Always ask before photographing people in their doorways."
      },
      {
        nome: "Toorji ka Jhalra and the Ghanta Ghar",
        testo: "A carved sandstone stepwell, usually dated to around 1740 and restored several times, in the old city below the fort. Around the Ghanta Ghar is Sardar Market, with spices, fabrics and kitchenware.",
        come: "On foot in the old city.",
        quando: "The stepwell in the morning; the market from late morning to evening.",
        tempo: "1-2 hours",
        costo: "free",
        consiglio: "The evening, with the stepwell lit up and the market open, is the best time."
      },
      {
        nome: "Umaid Bhawan Palace",
        testo: "The Art Deco palace finished in 1943, now partly a luxury hotel and partly the royal family's residence. One wing is a small museum on the family's 20th-century history; the maharajas' vintage cars stand in the garden in front.",
        come: "Outside the old city, by tuk-tuk. The museum has a separate entrance from the hotel.",
        quando: "During the day; it fits well into an afternoon.",
        tempo: "1 hour",
        consiglio: "If you're short on time, you can skip it: Mehrangarh and the alleys are worth more."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Mehrangarh at opening time",
          "Jaswant Thada and Rao Jodha Park",
          "Lunch with mirchi bada at the Ghanta Ghar",
          "The blue alleys in the afternoon",
          "Toorji ka Jhalra in the evening"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Mehrangarh, Jaswant Thada, Rao Jodha Park",
          "Day 2: the alleys of Brahmpuri and Navchokiya in the morning",
          "Umaid Bhawan in the afternoon",
          "Sardar Market and sunset from a rooftop below the fort"
        ]
      }
    ],
    zone: [
      {
        nome: "Below the fort (Navchokiya, Brahmpuri)",
        perChi: "rooftops with a view",
        testo: "Havelis and guesthouses in the blue alleys, with rooftops facing the fort. A beautiful atmosphere, but steep stairs and no cars up to the door."
      },
      {
        nome: "Ghanta Ghar",
        perChi: "everything on foot",
        testo: "Around the clock tower: the market, restaurants and tuk-tuks right outside. Noisy until late."
      },
      {
        nome: "Ratanada and the new city",
        perChi: "heritage hotels with gardens",
        testo: "Former noble residences and hotels with pools, outside the old city. Quiet, but you always need a tuk-tuk."
      }
    ],
    sapori: [
      {
        nome: "Mirchi bada",
        testo: "A big chili stuffed with spiced potato, coated in chickpea batter and fried. Eaten hot at the stalls around the Ghanta Ghar."
      },
      {
        nome: "Makhaniya lassi",
        testo: "A very thick lassi with saffron and cardamom, almost thick enough to eat with a spoon. The best known comes from the old shops near the clock tower."
      },
      {
        nome: "Pyaaz kachori",
        testo: "The fried pastry stuffed with onion, even spicier here than in Jaipur, with tamarind chutney."
      },
      {
        nome: "Mawa kachori",
        testo: "The sweet version: filled with reduced milk and dried fruit, then dipped in syrup. A Jodhpur sweet."
      }
    ],
    attenzioni: [
      "Famous places have copies with the same name a few steps away, like the omelette shop at the Ghanta Ghar and the spice shops: check the address and the sign.",
      "Tuk-tuks offering a free or very cheap ride take you to shops that pay them a commission.",
      "The old city alleys are full of steps: heavy rolling suitcases become a problem.",
      "The monkeys around Jaswant Thada and the temples grab food right out of your hands."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: "Mehrangarh Fort on its cliff above the old city of Jodhpur",
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-11-jodhpur.jpg',
  },
  {
    slug: 'jaisalmer',
    paeseSlug: 'india',
    ordine: 6,
    nome: 'Jaisalmer and the Thar Desert',
    tipologia: ['deserto', 'forti e palazzi'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    introduzione:
      "The golden city, built in yellow sandstone in the Thar desert, not far from the Pakistani border, with one of the few forts in the world still inhabited.",
    percheAndarci:
      "For the inhabited fort, the havelis carved like lace and a night among the dunes, which is the easiest desert experience to organize in India.",
    cosaVedere: ["Jaisalmer Fort and its Jain temples", "The havelis of Patwon and Nathmal", "Gadisar lake at dawn", "The dunes of Sam or Khuri"],
    cosaFare: ["A night in a desert tent camp with a camel ride at sunset", "Sunset from the fort's ramparts"],
    doveDormire: "Hotels in the havelis of the city below the fort; tent camps in the desert for one night.",
    doveMangiare: "Ker sangri, dal baati and Jaisalmer sweets.",
    comeArrivare: "From Jodhpur by car or train, half a day of travel; the airport has flights from Delhi, Mumbai and other cities, some only in certain seasons.",
    comeSpostarsi: "On foot in town, jeep for the dunes.",
    periodoMigliore: "November-February; from April the heat is extreme.",
    erroriDaEvitare: [
      "Choosing the cheapest desert camp: hygiene standards and the treatment of the camels vary a lot",
      "Approaching the border areas, which are subject to restrictions",
    ],
    luoghi: [
      {
        nome: "Jaisalmer Fort",
        testo: "The yellow sandstone fort from 1156, one of the few in the world still lived in: about 4,000 people live inside the walls, among houses, shops, temples and hotels. It's a UNESCO World Heritage Site as one of the hill forts of Rajasthan.",
        come: "You walk in through the main gate and wander freely through the alleys. The maharawal's palace (Raj Mahal) and the Jain temples charge an entry fee.",
        quando: "Morning for the Jain temples, which usually admit visitors only until noon. Sunset from the ramparts.",
        tempo: "half a day",
        consiglio: "Sleep outside the walls and visit during the day: according to the Archaeological Survey of India, the water used by hotels and restaurants inside the walls seeps into the foundations and weakens them."
      },
      {
        nome: "Patwon and Nathmal havelis",
        testo: "19th-century merchants' mansions with facades carved like stone lace. Patwon ki Haveli is actually a group of five houses, begun in 1805 by the merchant Guman Chand Patwa for his sons; part of it is a museum.",
        come: "In the town below the fort, on foot. There's an entry fee for the part you can visit.",
        quando: "Morning, before the alleys fill up.",
        tempo: "1 hour",
        consiglio: "You can see the facades well for free from the street; you go inside mostly for the rooftops."
      },
      {
        nome: "Gadisar Lake",
        testo: "The reservoir that once supplied the whole city with water, dug in 1156 and rebuilt around 1367 by Rawal Gadsi, with pavilions and temples on the water.",
        come: "About a mile from the fort, on foot or by tuk-tuk. There are rowboats and pedal boats.",
        quando: "Dawn, when the water is still and there's no one but the birds.",
        tempo: "1 hour",
        costo: "free access; boats cost extra",
        consiglio: "Get there before sunrise and stay until the sun lights up the fort in the distance."
      },
      {
        nome: "Sam and Khuri dunes",
        testo: "The Thar dunes a few dozen kilometers from the city, where you arrive by camel at sunset and sleep in tented camps. Sam is bigger and busier; Khuri is smaller and quieter.",
        come: "By jeep with your camp, which usually arranges the transfer, camel ride, dinner and music. Big luggage stays at your hotel in Jaisalmer.",
        quando: "From November to February, with cold nights. From April the heat is extreme.",
        tempo: "one night",
        consiglio: "Choose a camp with recent reviews on hygiene and how they treat the camels, even if it costs more."
      },
      {
        nome: "Bada Bagh",
        testo: "A garden of cenotaphs of the rulers of Jaisalmer, with dozens of sandstone pavilions on a hill, about 6 km north of the city, built between the 18th and early 20th centuries.",
        come: "By car or tuk-tuk, also on the way to the dunes.",
        quando: "At sunset or dawn, when the sandstone turns orange.",
        tempo: "45 minutes",
        consiglio: "It pairs well with the abandoned village of Kuldhara, about 18 km southwest of the city."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "The fort and Jain temples in the morning",
          "Patwon Haveli",
          "Afternoon toward the dunes, a camel ride at sunset and a night at camp"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: arrival from Jodhpur, afternoon at the dunes and a night at camp",
          "Day 2: return, the fort and Jain temples",
          "Patwon and Nathmal havelis",
          "Sunset from the ramparts or at Gadisar"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "The two days above",
          "Day 3: dawn at Gadisar",
          "Bada Bagh and Kuldhara",
          "A last evening on a rooftop facing the lit-up fort"
        ]
      }
    ],
    zone: [
      {
        nome: "Below the fort",
        perChi: "walking to the fort",
        testo: "Hotels in the havelis of the alleys around the fort, with rooftops facing the walls. Convenient, and less harmful to the monument than the hotels inside the walls."
      },
      {
        nome: "Inside the fort",
        perChi: "atmosphere",
        testo: "Guesthouses inside the walls: a one-of-a-kind atmosphere, but narrow alleys, little water and conservation problems for the fort."
      },
      {
        nome: "Desert camps",
        perChi: "one night",
        testo: "Tented camps at Sam or Khuri, from the most basic to luxury tents with a bathroom. You go for one night, not as a base."
      }
    ],
    sapori: [
      {
        nome: "Ker sangri",
        testo: "Dried desert berries and beans cooked with spices, the most typical dish of the Thar. In the thalis of the city's restaurants."
      },
      {
        nome: "Dal baati churma",
        testo: "Balls of bread baked in the embers, with lentils and a sweet crumble: it's often dinner at the desert camps."
      },
      {
        nome: "Ghotua and panchdhari laddoo",
        testo: "Jaisalmer's sweets, balls of flour, sugar and ghee. In the sweet shops near the fort gate."
      },
      {
        nome: "Chai in the desert",
        testo: "Tea with milk and spices made over the fire at camp, at sunset or at dawn among the dunes."
      }
    ],
    attenzioni: [
      "At the train station and bus stop people offer free rides to your hotel: they often end up at a different hotel that pays a commission.",
      "The cheapest camps vary a lot in hygiene and in how they treat the camels.",
      "Jaisalmer is close to Pakistan: the UK Foreign Office advises against all travel within 10 km of the border, which in Rajasthan is unmarked in places. Check your government's travel advice before you go.",
      "In May and June average highs are above 40 °C (104 °F): always carry water."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: "The golden sandstone walls and ramparts of Jaisalmer Fort",
    immagine: '/images/viaggi/india-rajasthan-varanasi/giorno-13-jaisalmer.jpg',
  },
  {
    slug: 'udaipur',
    paeseSlug: 'india',
    ordine: 7,
    nome: 'Udaipur',
    tipologia: ['città', 'laghi', 'palazzi'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: true,
    introduzione:
      "The city of lakes, in the Aravalli hills, with the City Palace on the shore of Lake Pichola and white palaces on the islands.",
    percheAndarci:
      "It's the most relaxing stop in Rajasthan: lakeside terraces, boat rides, ghats and quieter alleys than elsewhere. On the road from Jodhpur there's the Ranakpur temple.",
    cosaVedere: [
      "The City Palace",
      "The Jagdish temple",
      "Lake Pichola with Jag Mandir",
      "The Sajjangarh Monsoon Palace at sunset",
      "The Jain temple of Ranakpur and Kumbhalgarh fort, on the road from Jodhpur",
    ],
    cosaFare: ["A boat ride on Pichola", "Dinner on a terrace at Ambrai Ghat", "A traditional dance show at Bagore ki Haveli"],
    doveDormire: "Lal Ghat and Gangaur Ghat for budget and mid-range; Ambrai and Hanuman Ghat for the view of the palace.",
    doveMangiare: "Lakeside terraces for the view, old-city thali houses for eating well and spending little.",
    comeArrivare: "From Jodhpur by car, a long day with the stop at Ranakpur; airport with flights to Delhi, Mumbai and Jaipur.",
    comeSpostarsi: "On foot and by tuk-tuk; boats on the lake.",
    periodoMigliore: "October-March; after the monsoon the lakes are full.",
    costi: "City Palace 400 rupees, one price for Indians and foreigners (official website, 2023); boat to Jag Mandir 600 rupees, 800 at sunset (official fares April 2025-March 2026); at Ranakpur non-Jains usually enter from noon.",
    erroriDaEvitare: ["Arriving at Ranakpur early in the morning: non-Jains only enter from noon", "Wearing leather at Ranakpur"],
    luoghi: [
      {
        nome: "City Palace",
        testo: "The palace of the Maharanas of Mewar, which grew over four centuries on the shore of Lake Pichola. Peacock courtyards, mirrored halls, balconies over the lake; part of it is a museum, and part still belongs to the royal family.",
        come: "Enter through the Badi Pol or the Shitla Mata gate, on foot from the old city. Tickets at both gates or online on the museum's website; a guide or audio guide (in English, French, German and Spanish) is useful.",
        quando: "Open every day from 9 a.m. to 9 p.m., ticket sales until 8 p.m. Go at morning opening time, before the groups.",
        tempo: "2-3 hours",
        costo: "400 rupees, the same for Indians and foreigners (official website, 2023)",
        url: "https://www.citypalacemuseum.org/planyourvisit",
        consiglio: "Do the palace in the morning and the boat on Lake Pichola in the afternoon, from the same jetty."
      },
      {
        nome: "Lake Pichola by boat",
        testo: "The artificial lake created in 1362, with the Lake Palace (now a hotel) and Jag Mandir on its islands. From the water you see the whole facade of the City Palace.",
        come: "The official boats leave from Rameshwar Ghat, next to the City Palace, and go to Jag Mandir; other boats leave from some of the ghats.",
        quando: "Daytime rides from 10 a.m.; the sunset ride costs more. Times change between summer and winter.",
        tempo: "1 hour",
        costo: "ride with a stop at Jag Mandir 600 rupees, 800 at sunset (official fares April 2025-March 2026)",
        consiglio: "Ask whether the ride includes the stop at Jag Mandir: not all of them do."
      },
      {
        nome: "Jagdish Temple",
        testo: "The 1651 temple to Jagannath, a form of Vishnu, a few steps from the palace, at the top of 32 marble steps, its walls covered in carvings. It's a living temple, with chanting and offerings all day.",
        come: "On foot from the Badi Pol. Leave your shoes at the entrance.",
        quando: "Early morning and evening, during the ceremonies.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "Sit on the steps for a moment during the evening aarti."
      },
      {
        nome: "Bagore ki Haveli",
        testo: "An 18th-century noble house on Gangaur Ghat, now a museum. In the evening it hosts the Dharohar show of Rajasthani dance and music.",
        come: "On foot from Lal Ghat. Tickets for the show at the box office; it's best to arrive early.",
        quando: "In the evening: the show starts at 7 p.m. and lasts an hour.",
        tempo: "1-2 hours",
        consiglio: "Arrive half an hour early for a front-row seat."
      },
      {
        nome: "Sajjangarh, the Monsoon Palace",
        testo: "A white palace begun in 1884 on a hill about 5 km west of the city, inside a small wildlife sanctuary. From up there you see the lakes and the Aravalli hills.",
        come: "By car or tuk-tuk, on a road that winds up through the sanctuary. Open until sunset.",
        quando: "At sunset.",
        tempo: "1.5 hours",
        consiglio: "The view is better than the palace itself: go for the sunset."
      },
      {
        nome: "Ranakpur and Kumbhalgarh",
        testo: "Along the road from Jodhpur. Ranakpur is a 15th-century Jain temple in white marble with 1,444 pillars, each one different. Kumbhalgarh is a fort from 1448 with 36 km (22 miles) of walls across the hills, a UNESCO site since 2013.",
        come: "With your driver, as a stop on the travel day between Jodhpur and Udaipur. Audio guide available at Ranakpur.",
        quando: "Ranakpur admits non-Jains only after the morning prayers, usually from noon; sources disagree on the closing time.",
        tempo: "1.5 hours at Ranakpur, 2 hours at Kumbhalgarh",
        consiglio: "No leather at Ranakpur: belts, bags and wallets stay in the car."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "City Palace at opening time",
          "Jagdish Temple",
          "Boat ride on Lake Pichola in the afternoon",
          "Show at Bagore ki Haveli"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: City Palace, Jagdish, Gangaur and Ambrai ghats",
          "Boat on Lake Pichola and Bagore ki Haveli",
          "Day 2: a free morning in the alleys and the miniature painting workshops",
          "Sunset from Sajjangarh and dinner on a rooftop at Ambrai Ghat"
        ]
      }
    ],
    zone: [
      {
        nome: "Lal Ghat and Gangaur Ghat",
        perChi: "budget and mid-range",
        testo: "Guesthouses with rooftops in the alleys behind the City Palace, walking distance from everything. Narrow streets and scooters, but it's the heart of the old city."
      },
      {
        nome: "Hanuman Ghat and Ambrai",
        perChi: "a view of the palace",
        testo: "On the opposite shore of Lake Pichola: from the rooftops you see the City Palace across the water. Quieter, and you cross the bridge on foot."
      },
      {
        nome: "Fateh Sagar Lake",
        perChi: "hotels with gardens and pools",
        testo: "Farther north, along a lake with a promenade. More space and calm, but you need a tuk-tuk for the old city."
      }
    ],
    sapori: [
      {
        nome: "Rajasthani thali",
        testo: "The full lunch with dal, vegetables, kadhi and chapati, refilled as often as you like. The thali houses in the old city are the cheapest and the best."
      },
      {
        nome: "Gatte ki sabzi",
        testo: "Chickpea flour dumplings in a yogurt curry, a classic of Mewar's vegetarian cooking."
      },
      {
        nome: "Dal baati",
        testo: "Rajasthan's signature dish, often served here in rooftop restaurants."
      },
      {
        nome: "Kachori and jalebi in the morning",
        testo: "Savory fried pastries and sweet spirals at the shops around the Jagdish Temple, the local breakfast."
      }
    ],
    attenzioni: [
      "Miniature painting “art schools” where the “students” sell the paintings: they're often just shops, and the starting prices are very high.",
      "The sunset boat ride costs more than the daytime one: check the fare at the ticket office.",
      "At Ranakpur non-Jains are only allowed in from noon: don't arrive early in the morning.",
      "Monkeys can turn up on the lakeside rooftops: don't leave food in sight."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-10-giorni', 'india-rajasthan-varanasi'],
    imageAlt: "The City Palace of Udaipur on the shore of Lake Pichola",
    immagine: '/images/viaggi/india-rajasthan-10-giorni/giorno-10-udaipur.jpg',
  },
  {
    slug: 'varanasi',
    paeseSlug: 'india',
    ordine: 8,
    nome: 'Varanasi and Sarnath',
    tipologia: ['città santa', 'fiume', 'spiritualità'],
    giorniConsigliati: '3 days',
    visitataPersonalmente: true,
    introduzione:
      "The holy city of Hinduism on the western bank of the Ganges, with 84 ghats, the stairways where people pray, bathe and cremate the dead. Half an hour away is Sarnath, where the Buddha gave his first sermon.",
    percheAndarci:
      "To see India's religious life unfiltered: the ritual bath at dawn, the pyres of Manikarnika, the evening Ganga Aarti. It's the most intense stop on any trip in the North.",
    cosaVedere: [
      "The ghats at dawn from a boat, from Assi Ghat heading north",
      "The evening Ganga Aarti at Dashashwamedh Ghat",
      "Manikarnika Ghat, the cremation ghat, from a distance and without photos",
      "The Kashi Vishwanath, Shiva's golden temple, with the new corridor to the river",
      "The alleys of the old city and the silk weavers' workshops",
      "Sarnath: the Dhamek stupa, the ruins of the monastery and the museum with the Ashoka capital",
    ],
    cosaFare: [
      "A rowboat at dawn",
      "The Subah-e-Banaras at Assi Ghat, the morning ceremony",
      "A thick lassi in an old-city shop",
      "An afternoon walk along all the ghats",
    ],
    doveDormire:
      "On the ghats or in the alleys just behind, between Assi and Dashashwamedh: budget guesthouses, riverside havelis in the mid and high range. The new city is convenient but far from the river.",
    doveMangiare: "Lassi, kachori sabzi, tamatar chaat, malaiyo in winter, Banaras paan. Many vegetarian places.",
    comeArrivare:
      "From Delhi by overnight train (about 10 hours in a sleeper berth, such as the Shiv Ganga Express) or on the daytime Vande Bharat (about 8 hours), or by plane (about 1 hour 30 minutes; the airport is about 26 km from the city).",
    comeSpostarsi: "On foot along the ghats and in the alleys, boats on the river, e-rickshaws and tuk-tuks toward the new city and Sarnath.",
    periodoMigliore:
      "October-March; November for Dev Deepawali (November 24 in 2026). December-January with thick fog at dawn. During the monsoon (July-September) the lower ghats go underwater.",
    costi: "Private boat at a price to agree before you get in; Sarnath with separate tickets for the site and the museum, ASI fares at the ticket office; museum closed on Friday.",
    erroriDaEvitare: [
      "Following the spontaneous \"guide\" at Manikarnika who then asks for money for the wood",
      "Photographing cremations or grieving families",
      "Getting on a boat without having agreed on price and duration",
      "Bathing in the Ganges or drinking the river water",
      "Bringing a phone and bags to the Kashi Vishwanath: they aren't allowed in and go into lockers",
    ],
    luoghi: [
      {
        nome: "The ghats at dawn by boat",
        testo: "Eighty-four flights of steps along the Ganges, one after another, where at dawn pilgrims take their ritual bath, priests pray and washermen beat the laundry. From the water you see the whole riverfront of the city.",
        come: "A rowboat from Assi or Dashashwamedh, heading north to Manikarnika. Agree on the price and length of the ride before you get in.",
        quando: "Half an hour before sunrise. Between December and January fog can stop the boats; during the monsoon the river rises.",
        tempo: "1-2 hours",
        costo: "a private boat at a negotiated price: fares vary a lot with season, length of ride and boatman",
        consiglio: "In Varanasi you absolutely have to go with Shiva. I've rarely met anyone so kind and helpful, who knows the place so well and explains it to you as you walk around: it's like strolling through your own hometown with a friend."
      },
      {
        nome: "Ganga Aarti at Dashashwamedh",
        testo: "The evening ceremony for the river: a group of priests swing large fire lamps to the rhythm of bells and chanting, in front of thousands of people on the steps and in boats.",
        come: "From the main ghat, on the steps, or from a boat anchored in front. You arrive on foot from Godowlia, because cars stop before that.",
        quando: "Every evening at sunset; the time changes with the season. Arrive at least an hour early to get a spot on the steps.",
        tempo: "1.5 hours",
        costo: "free from the steps",
        consiglio: "Keep bags and phones in front of you: pickpockets work the crowd."
      },
      {
        nome: "Subah-e-Banaras at Assi Ghat",
        testo: "The morning ceremony at the southernmost ghat: chanting, classical music, a small aarti and yoga on the steps. More intimate and less crowded than the evening one.",
        come: "At Assi Ghat, on foot if you're staying nearby.",
        quando: "Before dawn, every day.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "It goes well with the boat ride: when the ceremony ends, you get in and head north."
      },
      {
        nome: "Manikarnika Ghat",
        testo: "One of the two cremation ghats, where the pyre fires never go out. For Hindus, being cremated here brings moksha, release from the cycle of rebirth.",
        come: "Watch from a boat or from a distance on the steps above. No photos and no videos.",
        quando: "During the day; in the evening you see it well from a boat.",
        tempo: "30 minutes",
        consiglio: "Ignore anyone who introduces himself as a guide or a “hospice volunteer”: in the end he asks for money for firewood for the poor."
      },
      {
        nome: "Kashi Vishwanath",
        testo: "Shiva's golden temple, one of the holiest in India. The Kashi Vishwanath Dham corridor, inaugurated on 13 December 2021, links it directly to the river.",
        come: "Phones, bags and electronics aren't allowed in: there are free lockers at the gates. Lines are long; there's a faster paid entry (Sugam Darshan) you can book on the official website, suspended during the aartis and on festival days.",
        quando: "Early morning. Mondays, Shiva's day, and festivals are very crowded.",
        tempo: "1-3 hours depending on the line",
        costo: "free entry",
        url: "https://shrikashivishwanath.org/",
        consiglio: "Wear long clothes and keep nothing in your pockets: you'll get through security faster."
      },
      {
        nome: "The old city alleys",
        testo: "The maze of alleys behind the ghats, with small shrines, cows, sweet shops, flower sellers and the looms of Banarasi silk.",
        come: "On foot, ideally with a guide the first time: Google Maps gets lost here.",
        quando: "Morning and afternoon. After sunset it's better not to wander them alone, especially for women.",
        tempo: "half a day",
        consiglio: "Buy silk at recommended shops: silk sold as “handmade” can come from a power loom."
      },
      {
        nome: "Sarnath",
        testo: "The place where the Buddha gave his first sermon, about 8 km (5 miles) northeast of Varanasi. There's the Dhamek Stupa, the ruins of monasteries and a museum with Ashoka's lion capital, the symbol of India.",
        come: "By tuk-tuk or car. The archaeological site and the museum have separate tickets.",
        quando: "Morning. The museum is open from 10 a.m. to 5 p.m. and closed on Fridays (Incredible India).",
        tempo: "half a day",
        costo: "ASI tickets for the site and the museum, fares at the ticket office",
        url: "https://asi.nic.in/",
        consiglio: "Don't go on a Friday: without the museum you miss the best part."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Boat at dawn from Assi Ghat",
          "Kashi Vishwanath in the morning",
          "Old city alleys and a lassi",
          "A walk along the ghats in the afternoon",
          "Ganga Aarti at Dashashwamedh"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: arrival, a walk along the ghats, Ganga Aarti",
          "Day 2: Subah-e-Banaras and a boat at dawn",
          "Manikarnika from the boat, Kashi Vishwanath",
          "Alleys and silk shops"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "The two days above, the way we did them, arriving on the night train from Delhi",
          "Day 3: Sarnath in the morning (not on a Friday)",
          "A slow afternoon on the southern ghats",
          "The evening train to Agra"
        ]
      }
    ],
    zone: [
      {
        nome: "Assi Ghat",
        perChi: "the river with a bit of calm",
        testo: "The southernmost ghat, with cafés, guesthouses and the morning ceremony. A little quieter; you get to Dashashwamedh by boat or with a long walk along the ghats."
      },
      {
        nome: "Dashashwamedh and Godowlia",
        perChi: "staying in the center",
        testo: "Guesthouses and havelis on the river among the central ghats, a short walk from the aarti and Kashi Vishwanath. Crowded and noisy at all hours."
      },
      {
        nome: "Cantonment, the new city",
        perChi: "chain hotels",
        testo: "Handy for the station and the airport, but far from the river, and traffic makes it slow. And the river at dawn is the reason to come."
      }
    ],
    sapori: [
      {
        nome: "Lassi",
        testo: "Thick yogurt, sometimes with fruit or malai, served in clay cups at the shops in the alleys toward Manikarnika."
      },
      {
        nome: "Kachori sabzi and jalebi",
        testo: "Varanasi's breakfast: stuffed fried pastries with potato curry, then hot jalebi. In the alley shops from dawn."
      },
      {
        nome: "Tamatar chaat",
        testo: "A hot chaat of tomato, potato and spices, served in little leaf bowls. At the chaat stalls in Godowlia."
      },
      {
        nome: "Malaiyo",
        testo: "Saffron milk froth whipped outdoors on winter nights and sold at dawn. Only in the cold months."
      },
      {
        nome: "Banarasi paan",
        testo: "A betel leaf filled with areca nut, spices and sweets, chewed after dinner. To try it, ask for the sweet version, without tobacco."
      }
    ],
    attenzioni: [
      "The monkeys on hotel rooftops get aggressive about food. In Varanasi my girlfriend was bitten by a monkey on the rooftop of our hotel overlooking the Ganges: Shiva took us to the hospital for the checkup and the shots. If it happens, go straight away for rabies prophylaxis.",
      "The self-appointed “guide” at Manikarnika who then asks for money for cremation firewood.",
      "Agree on the price and length of the boat ride before you get in.",
      "Don't swim in the Ganges and don't drink the river water, not even when it's “blessed.”",
      "In the alleys and in the aarti crowd, harassment and pickpocketing can happen: it's better to have company after sunset."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-rajasthan-varanasi'],
    imageAlt: "A red rowboat glides on the Ganges in front of the ghats and palaces of Varanasi",
    immagine: '/images/india/varanasi-barca-rossa-gange-riccardo.jpg',
  },

  // --- SUD ---
  {
    slug: 'chennai',
    paeseSlug: 'india',
    ordine: 9,
    nome: 'Chennai',
    tipologia: ['città', 'arrivo'],
    giorniConsigliati: 'a stopover',
    visitataPersonalmente: false,
    introduzione:
      "The capital of Tamil Nadu, formerly Madras, the air gateway to southeastern India. A big, hot city, with the Marina Beach seafront and the Mylapore neighborhood around the Kapaleeshwarar temple.",
    percheAndarci: "Mostly as an arrival point: Mamallapuram is about 60 kilometres away by road. With half a day you can see Mylapore and the Government Museum with its South Indian bronzes.",
    cosaVedere: [
      "The Kapaleeshwarar temple in Mylapore",
      "Marina Beach at sunset",
      "The bronzes at the Government Museum",
    ],
    cosaFare: ["A meal on a banana leaf at a historic vegetarian restaurant", "A filter coffee in a metal cup"],
    comeArrivare: "Chennai International Airport, with flights from Italy via the Gulf.",
    comeSpostarsi: "Uber, Ola, metro and tuk-tuks.",
    periodoMigliore: "December-March; October-December is the northeast monsoon season.",
    erroriDaEvitare: [
      "Swimming at Marina Beach: it is banned by law, the currents are dangerous and there are no lifeguards",
      "Planning a visit between October and December without allowing for the monsoon and cyclones",
    ],
    luoghi: [
      {
        nome: "Kapaleeshwarar Temple",
        testo: "The Shiva temple of the Mylapore neighbourhood, with a gopuram of about 37 metres covered in stucco figures and a large sacred tank that holds water all year. Around it is one of the city's most traditional Tamil neighbourhoods, with shops selling flowers, brass and sweets.",
        come: "By metro or Uber to Mylapore. Shoes go to the deposit. Since September 2026 photos and videos are banned in the big temples of Tamil Nadu, and the phone rules have changed more than once: follow the instructions at the entrance.",
        quando: "Early morning or evening, during the ceremonies. Opening times are posted at the temple entrance.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "Walk the streets around the tank, among the shops and stalls."
      },
      {
        nome: "Government Museum, Egmore",
        testo: "Founded in 1851, it is the second oldest museum in India after the Indian Museum in Kolkata. The Bronze Gallery holds statues of South Indian deities, including the 11th-century Nataraja (dancing Shiva) from Tiruvalangadu.",
        come: "By metro or Uber to Egmore. You can visit on your own; the complex is big, so head straight for the bronze gallery.",
        quando: "10:30 am to 6:30 pm, closed on Fridays and on some holidays (Deepavali, Pongal, 26 January, 15 August, 2 October). Source: official website, 2026.",
        tempo: "1.5 hours",
        url: "https://www.govtmuseumchennai.org/",
        consiglio: "If you're going on to Thanjavur and Madurai, this is where you learn what you'll see in the temples."
      },
      {
        nome: "Marina Beach",
        testo: "The longest natural urban beach in India, with a promenade of about 6 kilometres. At sunset it fills with families, snack sellers and fairground rides.",
        come: "By Uber or tuk-tuk. The promenade runs the whole length of the beach.",
        quando: "Late afternoon and sunset, when the heat eases.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Walk and eat, but swimming here is banned by law: the currents are dangerous and there are no lifeguards."
      },
      {
        nome: "Fort St. George",
        testo: "The first English fortress in India, founded in 1639 and completed in 1644, now home to the Tamil Nadu legislative assembly. Inside are St. Mary's Church, from 1680, the oldest Anglican church in India, and the Fort Museum on the British period.",
        come: "By Uber or tuk-tuk, near the port.",
        quando: "In the morning; Fort Museum opening times on the ASI website.",
        tempo: "1 hour",
        consiglio: "A visit for colonial history buffs; otherwise Mylapore is the better choice."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Kapaleeshwarar and Mylapore in the morning",
          "Tamil breakfast with filter coffee",
          "Government Museum and the Chola bronzes",
          "Sunset at Marina Beach",
          "In the evening, or the next morning, leave for Mamallapuram"
        ]
      }
    ],
    zone: [
      {
        nome: "Mylapore and Alwarpet",
        perChi: "traditional Chennai",
        testo: "The neighborhood of temples and old vegetarian restaurants, near Marina Beach. Heavy traffic, but everything is an Uber ride away."
      },
      {
        nome: "Egmore",
        perChi: "train arrivals and departures",
        testo: "Near the station and the museum, with mid-range hotels. Convenient, not very charming."
      },
      {
        nome: "Near the airport or on East Coast Road",
        perChi: "heading straight to Mamallapuram",
        testo: "Hotels and resorts to the south, on the road to the coast. You skip the center and leave right away."
      }
    ],
    sapori: [
      {
        nome: "Filter coffee",
        testo: "Coffee with chicory and milk, poured back and forth between two metal cups to make it frothy. In every traditional vegetarian restaurant."
      },
      {
        nome: "Banana leaf meal",
        testo: "Rice, sambar, rasam, vegetables, yogurt and pickles served on a banana leaf and refilled as often as you like. In Mylapore's vegetarian restaurants."
      },
      {
        nome: "Idli, dosa and vada",
        testo: "Steamed rice cakes, crispy rice and lentil crêpes and fried lentil donuts, with coconut chutney. The breakfast of the South."
      },
      {
        nome: "Chettinad chicken",
        testo: "The spiciest curry in Tamil Nadu, with black pepper, star anise and toasted coconut. In restaurants serving Chettinad cuisine."
      }
    ],
    attenzioni: [
      "Do not swim at Marina Beach: it is banned by law, the currents are strong and there are no lifeguards.",
      "Between October and December the northeast monsoon brings heavy rain and sometimes cyclones.",
      "Tuk-tuks rarely use the meter: Uber, Ola or a price agreed in advance are better.",
      "Since September 2026 photos and videos are banned in the big temples of Tamil Nadu; the phone rules (deposit or phone switched off) have changed more than once: follow the instructions at the entrance.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: "Waves on the sand of Marina Beach at dusk, Chennai",
    immagine: '/images/india/chennai.jpg',
  },
  {
    slug: 'mamallapuram',
    paeseSlug: 'india',
    ordine: 10,
    nome: 'Mamallapuram',
    tipologia: ['patrimonio UNESCO', 'mare', 'templi'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: false,
    introduzione: "The ancient port of the Pallava kings on the Coromandel Coast, where some of the first stone temples of the South were carved between the 7th and 8th centuries: rock-cut temples, reliefs and the temple by the sea.",
    percheAndarci:
      "To see, in a small and quiet town, the beginning of everything you'll see in Thanjavur and Madurai, and to recover from the flight before heading south.",
    cosaVedere: [
      "The Shore Temple on the beach",
      "The Five Rathas, monolithic temples shaped like chariots",
      "Arjuna's Penance, the great bas-relief in the rock",
      "Krishna's Butter Ball and the rock-cut temples of the hill",
    ],
    cosaFare: ["Visit the stonecutters' workshops", "Sunset at the Shore Temple", "A day trip to Kanchipuram, the city of temples and silk"],
    doveDormire: "Guesthouses near the fishermen's beach; resorts on the East Coast Road.",
    doveMangiare: "Fish and seafood at the beach restaurants, Tamil breakfasts in town.",
    comeArrivare: "About 60 kilometres south of Chennai, by car or taxi from the airport along East Coast Road.",
    comeSpostarsi: "On foot and by bike; tuk-tuk for the Five Rathas.",
    periodoMigliore: "December-March.",
    costi: "The Shore Temple and the Five Rathas require an ASI ticket: rates for foreigners at the ticket office or on the ASI portal. Arjuna's Penance is free to see.",
    erroriDaEvitare: [
      "Swimming without asking first: the sea off the town has strong currents",
      "Visiting the sites at midday, on granite in full sun",
    ],
    luoghi: [
      {
        nome: "Shore Temple",
        testo: "The granite temple on the beach, built by the Pallava kings in the early 8th century, under Narasimhavarman II. It is one of the oldest built (rather than rock-cut) stone temples of South India; the salty wind has partly worn away its decoration. It has been a UNESCO site since 1984, together with the other monuments of Mamallapuram.",
        come: "On foot from the town. Ticket at the ASI ticket office or online.",
        quando: "Opening times at the ticket office or on the ASI website. Dawn and late afternoon give the best light on the granite.",
        tempo: "1 hour",
        costo: "ASI ticket for foreigners, rate at the ticket office",
        url: "https://asi.nic.in/",
        consiglio: "Walk round the temple on the sea side: you can see clearly how much the wind has worn down the carvings."
      },
      {
        nome: "The Five Rathas",
        testo: "Five chariot-shaped temples, each carved from a single block of pink granite in the 7th century. Beside them stand a free-standing stone elephant and a Nandi bull, and on the Bhima Ratha the columns rest on lions.",
        come: "Just outside the centre, by bike or tuk-tuk. ASI ticket.",
        quando: "Early morning, before the sun makes the granite scorching hot.",
        tempo: "45 minutes",
        costo: "ASI ticket; ask at the ticket office whether it also covers the Shore Temple",
        url: "https://asi.nic.in/",
        consiglio: "Walk around each ratha: each one has a different style of roof."
      },
      {
        nome: "Arjuna's Penance",
        testo: "An open-air relief about 29 by 13 metres, carved on two boulders: gods, animals, sages and the descent of the Ganges from heaven, with almost life-size elephants.",
        come: "In the center of town, on foot. Free access.",
        quando: "Early morning or late afternoon, when the low light makes the figures stand out.",
        tempo: "30 minutes",
        costo: "free",
        consiglio: "Look for the cat standing on one leg, imitating the sages' penance."
      },
      {
        nome: "Krishna's Butterball and the hill",
        testo: "A granite boulder balanced on a slope, surrounded by cave temples carved into the rock, like the Varaha and Mahishasuramardini, with beautiful bas-reliefs. At the top is the old lighthouse.",
        come: "On foot from Arjuna's Penance, along paths across the hill.",
        quando: "Late afternoon until sunset.",
        tempo: "1-2 hours",
        consiglio: "Wear comfortable shoes: the rock is smooth and slippery."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "The Five Rathas at opening time",
          "Arjuna's Penance",
          "Seafood lunch on the beach",
          "The hill with the cave temples and Krishna's Butterball",
          "Shore Temple at sunset"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "The day above",
          "Day 2: trip to Kanchipuram, the old Pallava capital, city of temples and silk",
          "Back for an evening in town among the stone carvers' workshops",
        ]
      }
    ],
    zone: [
      {
        nome: "The town, near the fishermen's beach",
        perChi: "everything on foot",
        testo: "Guesthouses and small hotels between the beach and the monuments, with seafood restaurants. Simple, and quiet in the evening."
      },
      {
        nome: "East Coast Road",
        perChi: "resorts with a pool",
        testo: "Beach resorts north and south of the town. Good for resting after the flight; you need transport for the sites."
      }
    ],
    sapori: [
      {
        nome: "Fish and seafood",
        testo: "Prawns, squid and the catch of the day, grilled or in curry, at the restaurants on the fishermen's beach."
      },
      {
        nome: "Tamil breakfast",
        testo: "Idli, dosa and pongal with filter coffee, at the town's vegetarian eateries."
      },
      {
        nome: "Meen kuzhambu",
        testo: "A tamarind fish curry from the Coromandel Coast, tangy and spicy, served with rice."
      },
      {
        nome: "Fresh coconut",
        testo: "Coconuts cut open on the spot by vendors on the beach, the best drink in the heat."
      }
    ],
    attenzioni: [
      "Ask locally before swimming: the sea off the town has strong currents.",
      "Buy tickets at the ASI ticket offices or online, not from people offering them in the street.",
      "In the sculpture workshops prices for foreigners start high: bargain.",
      "At midday the granite in the sun is scorching: see the sites at dawn and sunset.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: "The Shore Temple of Mamallapuram on the beach, in wind-eroded granite",
    immagine: '/images/india/mamallapuram.jpg',
  },
  {
    slug: 'madurai',
    paeseSlug: 'india',
    ordine: 11,
    nome: 'Madurai',
    tipologia: ['città', 'templi'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: false,
    introduzione:
      "One of the oldest inhabited cities of the South, grown in concentric circles around the Meenakshi Amman temple, with its fourteen towers covered in painted deities.",
    percheAndarci:
      "The Meenakshi is the most alive temple in southern India: worshippers, musicians, elephants and ceremonies at every hour, and the evening procession.",
    cosaVedere: [
      "The Meenakshi Amman temple, the Golden Lotus Tank and the Hall of a Thousand Pillars",
      "The Thirumalai Nayak palace",
      "The Mattuthavani flower market at dawn",
    ],
    cosaFare: ["Attend the night ceremony at the temple", "Drink a jigarthanda", "Have a dress sewn in a day by the tailors near the temple"],
    doveDormire: "City hotels near the temple; heritage hotels in the surrounding hills.",
    doveMangiare: "Parotta with mutton curry, Chettinad cuisine, idli and dosa in the morning, jigarthanda.",
    comeArrivare: "From Thanjavur by car or train; Madurai airport has domestic flights.",
    comeSpostarsi: "On foot around the temple, tuk-tuks for the rest.",
    periodoMigliore: "December-February; from March it gets very hot.",
    costi: "Meenakshi free entry (the main shrines are reserved for Hindus); phone deposit for a small fee.",
    erroriDaEvitare: [
      "Ignoring the phone rules: at the Meenakshi photos and videos are banned and the phone must be left at the deposit or kept switched off, according to the current instructions",
      "Going to the temple without checking the times: it usually closes for a few hours in the middle of the day",
    ],
    luoghi: [
      {
        nome: "Meenakshi Amman Temple",
        testo: "A temple-city with fourteen gopurams covered in thousands of painted statues, dedicated to the goddess Meenakshi and to Shiva (Sundareswarar). Inside are the Golden Lotus tank and the Hall of a Thousand Pillars, which actually has 985 carved ones, and ceremonies throughout the day.",
        come: "Four entrances, one on each side. Shoes go to the deposit; phone at the deposit or switched off according to the current rules, photos banned. Clothes covering shoulders and legs. The main shrines are reserved for Hindus.",
        quando: "Usually open from 5 am until the middle of the day and from 4 pm to 9.30 pm (Incredible India, 2026); times change during festivals. Every evening a procession carries Shiva's footprints in a palanquin to Meenakshi's chamber.",
        tempo: "2-3 hours",
        costo: "free entry; small fee for the phone deposit",
        consiglio: "Go twice: in the morning for the architecture and in the evening for the ceremonies."
      },
      {
        nome: "Thirumalai Nayak Palace",
        testo: "The palace of King Thirumalai Nayak, completed around 1636, with a courtyard ringed by huge white columns about 25 metres high and great arches. About a quarter of it survives today, but that is enough to give the scale.",
        come: "About 2 kilometres southeast of the temple, on foot or by tuk-tuk.",
        quando: "Morning or late afternoon. In the evening there is a sound and light show, in Tamil and English, on the story of the Silappathikaram.",
        tempo: "1 hour",
        consiglio: "It fits well into the morning, before you go back to the temple in the evening."
      },
      {
        nome: "Mattuthavani flower market",
        testo: "The wholesale flower market: mountains of jasmine, marigolds and roses sold by weight for temples, weddings and women's braids.",
        come: "Near the Mattuthavani bus station, by tuk-tuk.",
        quando: "At dawn, when the deliveries arrive.",
        tempo: "1 hour",
        costo: "free",
        consiglio: "Go early: by mid-morning the best part is over."
      },
      {
        nome: "Gandhi Memorial Museum",
        testo: "A museum on the independence struggle in the former palace of Queen Rani Mangammal, with the blood-stained cloth Gandhi wore on the day he was killed (some say it is a replica).",
        come: "By tuk-tuk, near the Collector Office.",
        quando: "During the day; opening times on the museum website (gandhimmm.org).",
        tempo: "1 hour",
        consiglio: "A quiet break between your two visits to the temple."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "The flower market at dawn",
          "Meenakshi Temple in the morning",
          "Thirumalai Nayak Palace",
          "Jigarthanda in the afternoon",
          "Back to the temple for the evening ceremony"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "The day above",
          "Day 2: Gandhi Memorial Museum",
          "Tailors' shops and markets around the temple",
          "Leave for Munnar in the afternoon"
        ]
      }
    ],
    zone: [
      {
        nome: "Around the temple",
        perChi: "walking to the Meenakshi",
        testo: "Simple and mid-range hotels in the streets around the temple, some with rooftops facing the towers. Noisy, but very handy for visits at dawn and in the evening."
      },
      {
        nome: "The hills around the city",
        perChi: "quiet and a pool",
        testo: "Heritage hotels and resorts on the hills 3-6 miles out, with views over the city. You need a car to go anywhere."
      }
    ],
    sapori: [
      {
        nome: "Jigarthanda",
        testo: "Madurai's cold drink: milk, almond gum, syrup and ice cream. At the old stalls around the temple."
      },
      {
        nome: "Parotta with salna",
        testo: "Flaky flatbread fried on the griddle, served with a light mutton or chicken curry. In restaurants that stay open late."
      },
      {
        nome: "Kari dosa",
        testo: "A thick dosa topped with minced mutton and egg, Madurai's late-night specialty."
      },
      {
        nome: "Idli",
        testo: "Steamed rice cakes, very soft, with several chutneys: in Madurai they are eaten at breakfast and dinner."
      }
    ],
    attenzioni: [
      "At the Meenakshi photos and videos are banned and the phone goes to the deposit or stays off: since September 2026 the rules in Tamil Nadu's big temples have changed more than once.",
      "Anyone inviting you up to a rooftop \"to see the temple from above\" often takes you into a textile shop.",
      "In the middle of the day the temple usually closes for a few hours: plan your visits for morning and evening.",
      "From March the heat is very strong: water and a hat.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: "One of the painted towers of the Meenakshi temple in Madurai, covered with colorful statues",
    immagine: '/images/viaggi/india-sud-taj-mahal/giorno-05-madurai.jpg',
  },
  {
    slug: 'munnar',
    paeseSlug: 'india',
    ordine: 12,
    nome: 'Munnar',
    tipologia: ['montagna', 'piantagioni di tè', 'natura'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: false,
    introduzione:
      "A hill station at about 1,600 meters in the Western Ghats of Kerala, surrounded by tea plantations covering the hills as far as the eye can see.",
    percheAndarci:
      "For the cool air after the plains, walks among the tea, the Nilgiri tahr at Eravikulam and the sunrises above the clouds at Kolukkumalai.",
    cosaVedere: [
      "Eravikulam National Park and the Nilgiri tahr",
      "The Tata tea museum (KDHP)",
      "The Kolukkumalai plantations at dawn",
      "The viewpoints of Top Station and the Mattupetty dams",
    ],
    cosaFare: ["A guided trek among the plantations", "Sunrise at Kolukkumalai by jeep", "Buy tea directly at the factories"],
    doveDormire: "Homestays and resorts outside town, among the plantations.",
    doveMangiare: "Kerala cuisine at the homestays, often the best in the area.",
    comeArrivare: "From Kochi about 130 kilometres of mountain road; from Madurai you cross the Ghats: either way, half a day by car.",
    comeSpostarsi: "Car with driver and local jeeps.",
    periodoMigliore: "September-May; June and July are the wettest months, and the monsoon brings landslides and closed roads.",
    costi: "Eravikulam 500 rupees for foreigners plus 50 for a camera (official website, 2026); jeep to Kolukkumalai to be agreed.",
    erroriDaEvitare: ["Arriving in February-March counting on Eravikulam, closed for the calving season", "Sleeping in town, which is busy and noisy"],
    luoghi: [
      {
        nome: "Eravikulam National Park",
        testo: "Highland grassland and forest at around 2,000 metres, home to the largest population of Nilgiri tahr, a mountain goat found only in the Nilgiris and the southern Western Ghats. The park also contains Anamudi, 2,695 metres, the highest peak in South India.",
        come: "13 kilometres from Munnar. Inside the park you walk along the roads and trails of the Rajamala tourist zone. Tickets online on the official website or at the counter of the Munnar information centre.",
        quando: "Entry from 8 am to 2 pm (official website, 2026). Closed every year for the tahr calving season, between February and March, sometimes until early April: the website itself gives different dates, so check before you go. Best at opening time, before the clouds and the queue.",
        tempo: "half a day",
        costo: "500 rupees for foreigners, plus 50 for a camera (2026)",
        url: "https://www.eravikulamnationalpark.in/",
        consiglio: "Book online for weekends and Indian holidays: tickets sell out."
      },
      {
        nome: "KDHP Tea Museum",
        testo: "The Tata tea museum on the Nallathanni estate, with historic machinery and a small demonstration of how the leaves are processed.",
        come: "About a mile from town, by tuk-tuk.",
        quando: "During the day. Several sources say it is closed on Mondays: check before you go.",
        tempo: "1 hour",
        consiglio: "Taste the teas at the end and buy them here, at factory prices."
      },
      {
        nome: "Kolukkumalai",
        testo: "A tea plantation at about 2,170 metres, among the highest in the world, on the Tamil Nadu side but reached only from Munnar. At dawn the hills rise out of the clouds.",
        come: "By 4x4 jeep from Suryanelli, on about 17 kilometres of steep dirt track. Jeeps are booked through the hotel.",
        quando: "Departure before dawn, in the dark.",
        tempo: "half a day",
        consiglio: "Agree clearly on what the jeep price includes: waiting time, entry to the estate and the ride back."
      },
      {
        nome: "Top Station and Mattupetty Dam",
        testo: "A viewpoint on the edge of the Ghats, near the Tamil Nadu border, looking down over the plains. Along the way are Mattupetty Dam, Echo Point and endless plantations.",
        come: "By car from Munnar, with stops along the way.",
        quando: "Morning, before the haze rises.",
        tempo: "half a day",
        consiglio: "On weekends the viewpoints are crowded: a weekday is better."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Eravikulam at opening time",
          "KDHP Tea Museum",
          "A walk through the plantations in the afternoon"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: dawn at Kolukkumalai by jeep, back for a rest",
          "Afternoon at the tea museum",
          "Day 2: Eravikulam in the morning",
          "Mattupetty and Top Station in the afternoon"
        ]
      }
    ],
    zone: [
      {
        nome: "Among the plantations (Chithirapuram, Pallivasal)",
        perChi: "silence",
        testo: "Homestays and resorts on the hills outside town, overlooking the plantations. Total silence, but you need a car and dinner is where you sleep."
      },
      {
        nome: "Munnar town",
        perChi: "getting around by local transport",
        testo: "Budget hotels and restaurants in the center, with jeeps and tuk-tuks close at hand. Busy and noisy."
      },
      {
        nome: "Chinnakanal and Suryanelli",
        perChi: "going to Kolukkumalai",
        testo: "Farther east, near Anayirangal Lake. Handy for the dawn jeep ride, isolated for everything else."
      }
    ],
    sapori: [
      {
        nome: "Homestay cooking",
        testo: "Vegetable and chicken curries, rice and homemade bread: often the best meal in the area."
      },
      {
        nome: "Puttu and kadala",
        testo: "Steamed cylinders of rice and coconut, with black chickpea curry. Kerala's breakfast."
      },
      {
        nome: "Appam",
        testo: "Fermented rice crêpes, crispy at the edges and soft in the middle, with a vegetable or chicken stew."
      },
      {
        nome: "Tea and cardamom",
        testo: "Black tea from the hills and cardamom from the nearby plantations, to buy directly from the factories and cooperatives."
      }
    ],
    attenzioni: [
      "Eravikulam closes every year between February and March, sometimes until early April, for the tahr calving season.",
      "During the monsoon, especially in June and July, heavy rain, landslides and closed roads; in the wet seasons there are leeches on the trails.",
      "Jeep prices to Kolukkumalai vary a lot: get everything spelled out before you leave.",
      "At weekends and on Indian holidays many tourists arrive from Kerala and Tamil Nadu: traffic and queues.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: "The hills of Munnar covered with tea plantations, with orderly rows of green bushes",
    immagine: '/images/india/munnar.jpg',
  },
  {
    slug: 'backwaters-alleppey',
    paeseSlug: 'india',
    ordine: 13,
    nome: 'Alleppey Backwaters',
    tipologia: ['lagune', 'natura', 'houseboat'],
    giorniConsigliati: '1-2 days',
    visitataPersonalmente: false,
    introduzione:
      "Kerala's network of canals, lagoons and lakes running parallel to the sea between Alappuzha (Alleppey), Kumarakom and Kollam, with rice paddies below water level and villages on strips of land.",
    percheAndarci:
      "For a night on a wood-and-bamboo houseboat, watching village life from the water, or for a canoe ride on the narrowest canals.",
    cosaVedere: ["The canals and rice paddies of Kuttanad", "Vembanad Lake", "The villages of Kainakary on the small canals"],
    cosaFare: ["A night on a houseboat (kettuvallam)", "A canoe ride at dawn on the narrow canals", "The snake boat races, if you travel in August"],
    doveDormire: "Houseboat, or homestays on the canals at Kainakary or Kumarakom.",
    doveMangiare: "Grilled karimeen (pearl spot), fish curry and Kerala red rice, prepared by the on-board cook.",
    comeArrivare: "From Kochi 1-2 hours by car depending on traffic; from Munnar half a day by road.",
    comeSpostarsi: "By boat.",
    periodoMigliore: "October-March.",
    costi: "Houseboats: the price varies a lot with the type of boat, number of cabins and season, usually with meals included. The DTPC prepaid counter in Alappuzha applies controlled rates.",
    erroriDaEvitare: [
      "Booking from touts on the piers without seeing the boat",
      "Expecting air conditioning during the day: it often works only at night",
      "Sticking to the main canals only, which are full of boats",
    ],
    luoghi: [
      {
        nome: "A night on a houseboat",
        testo: "The kettuvallam was the cargo boat that carried rice and spices from Kuttanad to the port of Kochi; when lorries took over, it was turned into a floating house with cabins, a cook and a crew. You cruise on Lake Vembanad and the canals of Kuttanad, watching villages, paddy fields and churches from the water.",
        come: "Boats leave from the Alappuzha jetties. Choose boats registered with Kerala Tourism, booked at the DTPC prepaid counter or with reliable operators, and seen in recent photos.",
        quando: "From October to March. Boarding around midday, disembarking the next morning; in the evening the boat moors.",
        tempo: "one night",
        costo: "varies a lot with the boat and season, meals usually included: ask for a written quote",
        url: "https://www.keralatourism.org/houseboat/",
        consiglio: "Ask for a route that leaves the main canals, where the boats line up one behind the other."
      },
      {
        nome: "By canoe on the narrow canals",
        testo: "Rowing canoes go into canals where houseboats can't pass: you see the houses up close, women doing the washing, children going to school by boat.",
        come: "With homestays and small operators in Kainakary and Alappuzha, with a rower.",
        quando: "At dawn, when the canals are calm and full of birds.",
        tempo: "2-3 hours",
        consiglio: "If you only have one day, a canoe at dawn gives you more than a houseboat."
      },
      {
        nome: "The snake boat races",
        testo: "Boats more than 30 metres long with dozens of rowers singing in chorus. The most famous is the Nehru Trophy, on Lake Punnamada, over a course of about 1.4 kilometres.",
        come: "Paid stands on Lake Punnamada in Alappuzha; details on the race's official website.",
        quando: "The Nehru Trophy is usually held in August, during the monsoon (traditionally on the second Saturday of the month, but the date changes: in 2024 it was postponed to September, in 2026 it was held on 22 August).",
        tempo: "a full day",
        consiglio: "If you're traveling in August, it's worth the trip on its own."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Canoe at dawn on the canals of Kainakary",
          "Lunch with karimeen and red rice",
          "Afternoon on Vembanad Lake by boat"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: board a houseboat at noon, cruise and spend the night on board",
          "Day 2: get off in the morning",
          "Canoe on the small canals",
          "Afternoon at Marari Beach or leave for Kochi"
        ]
      }
    ],
    zone: [
      {
        nome: "Houseboat",
        perChi: "one night",
        testo: "The night on board is the reason for the trip. Small cabins, and air conditioning often only at night."
      },
      {
        nome: "Kainakary and Kuttanad",
        perChi: "village life",
        testo: "Homestays on the canals, reached by boat. Silence, home cooking and a canoe at dawn, but far from everything."
      },
      {
        nome: "Kumarakom",
        perChi: "resorts with a pool",
        testo: "On the east shore of Vembanad Lake, with upscale resorts. Comfortable and well kept, with less village life."
      },
      {
        nome: "Marari Beach",
        perChi: "beach and backwaters",
        testo: "North of Alappuzha, homestays and resorts on the beach. Good for alternating canals and sea."
      }
    ],
    sapori: [
      {
        nome: "Karimeen pollichathu",
        testo: "Pearl spot, a lagoon fish, marinated in spices and cooked in a banana leaf. On board and at the eateries along the canals."
      },
      {
        nome: "Fish curry with red rice",
        testo: "Fish in a red sauce with kudampuli tamarind, served with Kuttanad red rice, grown below water level."
      },
      {
        nome: "Toddy shop food",
        testo: "The palm wine taverns (kallu shappu) serve spicy fish, tapioca and duck. A very local atmosphere."
      },
      {
        nome: "Duck curry",
        testo: "Ducks raised in the rice paddies end up in a coconut and pepper stew, a backwaters dish."
      }
    ],
    attenzioni: [
      "Touts on the jetties: book after seeing the boat or recent photos, preferably at the DTPC prepaid counter in Alappuzha or on boats registered with Kerala Tourism.",
      "Air conditioning in the cabin often works only at night: ask beforehand.",
      "The main canals are full of houseboats in a line: ask for side routes.",
      "Mosquitoes in the evening: repellent and long sleeves.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: "A wood-and-bamboo houseboat on a canal in the Kerala backwaters among coconut palms",
    immagine: '/images/viaggi/india-sud-taj-mahal/giorno-09-backwaters-alleppey.jpg',
  },
  {
    slug: 'fort-kochi',
    paeseSlug: 'india',
    ordine: 14,
    nome: 'Fort Kochi',
    tipologia: ['città coloniale', 'cultura', 'mare'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: false,
    introduzione:
      "The historic quarter of Kochi, a spice port for centuries, marked by the Portuguese, Dutch and British, with Chinese fishing nets on the waterfront and the Jewish quarter of Mattancherry.",
    percheAndarci:
      "For Kerala's most cosmopolitan city, to be explored on foot among churches, synagogues, spice warehouses and art galleries, with kathakali in the evening.",
    cosaVedere: [
      "The Chinese fishing nets",
      "St. Francis Church",
      "The Dutch Palace in Mattancherry with its Ramayana murals",
      "The Paradesi Synagogue and Jew Town",
      "The spice warehouses",
    ],
    cosaFare: ["A kathakali show", "A Kerala cooking class", "Buy fish at the market near the nets and have it cooked"],
    doveDormire: "Family-run homestays and heritage hotels in colonial bungalows.",
    doveMangiare: "Appam with stew, fish moilee, grilled karimeen, coffee in the galleries.",
    comeArrivare: "From Kochi International Airport an hour or more by car, depending on traffic; from Alleppey 1-2 hours.",
    comeSpostarsi: "On foot and by bike, ferry to Ernakulam.",
    periodoMigliore: "October-March; the Kochi Biennale, roughly every two years, opens in December and runs for about three months (the latest: 12 December 2025-31 March 2026).",
    costi: "Kathakali, the palace and the synagogue have modest ticket prices; rates at the ticket offices.",
    erroriDaEvitare: [
      "Arriving in Mattancherry on a Friday: the synagogue is closed, and so is the palace according to most sources",
      "Buying spices and \"antiques\" without bargaining",
    ],
    luoghi: [
      {
        nome: "The Chinese fishing nets",
        testo: "Large cantilevered nets at least 10 metres high, worked by teams of up to six fishermen with stone counterweights hanging from ropes. They are the symbol of Fort Kochi, on the seafront.",
        come: "On foot along the seafront at Vasco da Gama Square.",
        quando: "Late afternoon and sunset, when the nets work against the sun.",
        tempo: "45 minutes",
        costo: "free",
        consiglio: "At the fish market next door you can buy the catch and have the restaurants just behind cook it."
      },
      {
        nome: "St. Francis Church",
        testo: "One of the oldest European churches in India: founded in 1503 as a Portuguese wooden church and rebuilt in masonry in the early 16th century. Vasco da Gama, who died in Kochi in 1524, was buried here; fourteen years later his remains were taken back to Lisbon.",
        come: "In the center of Fort Kochi, on foot. Go in quietly, with covered clothing.",
        quando: "During the day, outside service times.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "Look on the floor for the spot of Vasco da Gama's first burial."
      },
      {
        nome: "Mattancherry Palace",
        testo: "The palace the Portuguese gave to the king of Kochi around 1545, also called the \"Dutch Palace\" because Mattancherry passed to the Dutch in 1663. Inside are the Ramayana murals, among the masterpieces of Kerala mural painting.",
        come: "In Mattancherry, a few kilometres from the centre of Fort Kochi, by tuk-tuk or bike.",
        quando: "Almost all sources say it is closed on Fridays, some on Saturdays too; opening hours have a midday break. Check on the ASI website before going.",
        tempo: "1 hour",
        consiglio: "The mural rooms are dark: give your eyes time to adjust."
      },
      {
        nome: "Paradesi Synagogue and Jew Town",
        testo: "The synagogue from 1568, still in use, with a floor of hundreds of 18th-century Chinese porcelain tiles, hand-painted and each one different, and Belgian glass chandeliers. Around it, Jew Town is a street of antique dealers and spice shops.",
        come: "Next to Mattancherry Palace, on foot. You enter barefoot; men in shirts and long trousers, women in skirts below the knee.",
        quando: "Open in the morning and late afternoon, with a long break; closed on Fridays, Saturdays and Jewish holidays (some sources say Sundays too). Check the times before you go.",
        tempo: "30 minutes",
        consiglio: "The palace and the synagogue can be seen together in one morning, never on a Friday or Saturday."
      },
      {
        nome: "The spice warehouses",
        testo: "Along Bazaar Road and Jew Town stand the old pepper and ginger warehouses, some still working, others turned into galleries and cafés.",
        come: "On foot or by bike from Mattancherry toward Fort Kochi.",
        quando: "Morning, when the work is going on.",
        tempo: "1 hour",
        consiglio: "If you're buying spices, compare prices in several shops: the difference is big."
      },
      {
        nome: "A kathakali show",
        testo: "Kerala's dance theater, with elaborate makeup, wide skirts and stories from the epics told through gestures and the eyes. In the Fort Kochi theaters you can also watch the makeup being applied before the show.",
        come: "At the cultural centres of Fort Kochi, with a ticket booked the same day or the day before.",
        quando: "In the evening; in many theatres the actors' make-up starts before the show and you can watch it. Times at the theatre.",
        tempo: "about 2 hours with the make-up",
        consiglio: "Arrive in time for the makeup: it's half the show."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Mattancherry: palace and synagogue (not on a Friday or Saturday)",
          "Jew Town and the spice warehouses",
          "St. Francis Church",
          "Chinese fishing nets at sunset",
          "Kathakali in the evening",
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "The day above",
          "Day 2: a Kerala cooking class in the morning",
          "Fort Kochi's galleries and cafés",
          "Ferry to Ernakulam and back at sunset"
        ]
      }
    ],
    zone: [
      {
        nome: "Fort Kochi",
        perChi: "the historic quarter",
        testo: "Homestays and heritage hotels in colonial bungalows, everything on foot. Quiet in the evening, an hour or more from the airport."
      },
      {
        nome: "Mattancherry",
        perChi: "the Jewish quarter",
        testo: "A few guesthouses near the palace and the synagogue. Lively during the day, empty in the evening."
      },
      {
        nome: "Ernakulam",
        perChi: "train arrivals and departures",
        testo: "The modern city on the mainland, with the station and chain hotels. Convenient for transport; you get to Fort Kochi by ferry."
      }
    ],
    sapori: [
      {
        nome: "Appam with stew",
        testo: "Fermented rice crêpes with a vegetable, chicken or mutton stew in coconut milk. The breakfast of Kerala's Christians."
      },
      {
        nome: "Fish moilee",
        testo: "Fish in a light sauce of coconut, turmeric and curry leaves, of Portuguese origin. In many Fort Kochi restaurants."
      },
      {
        nome: "Kerala parotta and beef fry",
        testo: "Flaky flatbread with beef stir-fried with coconut and spices, a popular dish in Kerala, where people eat beef."
      },
      {
        nome: "Banana chips",
        testo: "Slices of green banana fried in coconut oil, salted or sweet, freshly made in the bazaar shops."
      }
    ],
    attenzioni: [
      "The Paradesi Synagogue is closed on Fridays, Saturdays and Jewish holidays; Mattancherry Palace usually on Fridays.",
      "Tuk-tuks offering a tour for almost nothing take you to spice and textile shops on commission.",
      "Spices and \"antiques\" in Jew Town: bargain, and be wary of certified antiques.",
      "Mosquitoes and dengue cases in the rainy season: repellent.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: "The Chinese fishing nets on the Fort Kochi waterfront at sunset",
    immagine: '/images/india/fort-kochi.jpg',
  },
  {
    slug: 'hampi',
    paeseSlug: 'india',
    ordine: 15,
    nome: 'Hampi',
    tipologia: ['patrimonio UNESCO', 'rovine', 'paesaggio'],
    giorniConsigliati: '2 days',
    visitataPersonalmente: false,
    introduzione:
      "The ruins of Vijayanagara, capital of one of the greatest empires in India, destroyed in 1565, in a landscape of granite boulders, rice paddies and banana groves along the Tungabhadra river.",
    percheAndarci: "For more than 1,600 surviving monuments in a landscape like no other, with a quiet village and sunsets from the rocky hills.",
    cosaVedere: [
      "The Virupaksha temple, still active",
      "The Vittala temple and the stone chariot",
      "The Royal Centre, the Queens' Enclosure with the Lotus Mahal and the elephant stables",
      "The Hampi bazaar and Hemakuta hill",
      "Matanga hill at sunset",
    ],
    cosaFare: ["Get around by scooter or bike among the groups of monuments", "A coracle ride on the Tungabhadra", "Boulder climbing with local guides"],
    doveDormire: "Simple guesthouses in the bazaar; resorts across the river at Virupapur Gaddi and Hanumanahalli, or near Kamalapura.",
    doveMangiare: "Thalis and coffee on the rooftops; in the bazaar the food is mostly vegetarian.",
    comeArrivare: "Overnight train from Bangalore to Hosapete, then 13 kilometres by tuk-tuk; there is also Vidyanagar (Jindal) airport, with a few domestic flights.",
    comeSpostarsi: "Scooter, bicycle or tuk-tuk by the day.",
    periodoMigliore: "October-February; from March the heat on the granite becomes heavy.",
    costi: "Vittala and the Zenana Enclosure with an ASI ticket for foreigners: rates at the ticket office, as 2026 sources disagree. Most of the rest of the site is free. Coracle at a price to be agreed.",
    erroriDaEvitare: ["Visiting the sites at noon", "Counting on the boat to Virupapur Gaddi during flood season"],
    luoghi: [
      {
        nome: "Virupaksha Temple",
        testo: "The Shiva temple still in use in Hampi bazaar, with a nine-tier gopuram 50 metres high, visible from all over the valley. Worship here has continued without a break since around the 7th century, before the Vijayanagara empire.",
        come: "At the end of the bazaar, on foot. Shoes go to the deposit.",
        quando: "Early morning, when worshippers bring their offerings.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "Go early in the morning, then climb Hemakuta, just above, to see the gopuram from above."
      },
      {
        nome: "Vittala Temple and the stone chariot",
        testo: "Hampi's most refined temple, from the 16th century, with the stone chariot and the pillars that ring when struck (they can no longer be touched). It is one of the symbols of the UNESCO site.",
        come: "Cars cannot go beyond the car park: you get there by electric vehicle or on foot. ASI ticket at the ticket office.",
        quando: "At opening time, before the strong sun and the groups. Sources give different hours: check them at the ticket office.",
        tempo: "1.5 hours",
        costo: "about 600 rupees for foreigners, rate subject to change (Karnataka Tourism, 2026); validity for the Zenana Enclosure at the ticket office",
        url: "https://asi.nic.in/",
        consiglio: "Walk there from the bazaar along the river: a couple of kilometres among ruins and boulders."
      },
      {
        nome: "The Royal Center",
        testo: "The political heart of the capital: the three-tiered platform of Mahanavami Dibba, the large stepped granite tank and the Hazara Rama temple, with friezes telling the Ramayana.",
        come: "A few kilometres from the bazaar, towards Kamalapura, by bike, scooter or tuk-tuk.",
        quando: "Morning or late afternoon.",
        tempo: "2 hours",
        consiglio: "Leave time for the Hazara Rama: its friezes are the city's picture book."
      },
      {
        nome: "The Zenana Enclosure and the Elephant Stables",
        testo: "The Lotus Mahal, a two-storey pavilion with pyramidal towers and a lotus-bud dome, and next to it the royal elephant stables: eleven chambers in a row, almost all topped by domes. Nearby stands a watchtower.",
        come: "Next to the Royal Centre. ASI ticket: ask at the ticket office whether it is also valid for Vittala on the same day.",
        quando: "Afternoon, after the Vittala in the morning.",
        tempo: "1 hour",
        costo: "ASI ticket for foreigners, rate at the ticket office",
        url: "https://asi.nic.in/",
        consiglio: "Keep the ticket in your pocket: they check it."
      },
      {
        nome: "Hemakuta and Matanga hills",
        testo: "Hemakuta is a rocky hill above the bazaar with more than thirty small temples. Matanga is the most panoramic hill of the site: at the top is the Virabhadra temple, and you see the river, the paddy fields and the ruins among the boulders.",
        come: "On foot from the bazaar. Hemakuta is easy; Matanga is a steep climb on steps and rock.",
        quando: "Hemakuta at sunset; Matanga at dawn, setting off in the dark with a flashlight.",
        tempo: "1-2 hours",
        costo: "free",
        consiglio: "Don't climb Matanga alone in the dark: go in a group or with a local guide."
      },
      {
        nome: "A coracle on the Tungabhadra",
        testo: "The round boats of woven bamboo, used for centuries to cross the river. A ride takes you between the boulders and the temples on the banks.",
        come: "At the landing points along the river. Agree the price beforehand.",
        quando: "When the river is calm; they stop when the monsoon floods come.",
        tempo: "30-45 minutes",
        costo: "to be agreed with the boatman",
        consiglio: "Always ask for a life jacket."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Vittala at opening time, walking in along the river",
          "A coracle on the Tungabhadra",
          "Afternoon at the Royal Center and the Zenana Enclosure",
          "Sunset from Hemakuta"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Virupaksha at dawn, Vittala and the river, sunset from Hemakuta",
          "Day 2: dawn from Matanga",
          "Royal Center, Hazara Rama, Lotus Mahal and the Elephant Stables",
          "Afternoon by scooter to the smaller temples"
        ]
      }
    ],
    zone: [
      {
        nome: "Hampi Bazaar",
        perChi: "everything on foot",
        testo: "Simple guesthouses in the village below the Virupaksha, within walking distance of many monuments. Quiet, mostly vegetarian food."
      },
      {
        nome: "Virupapur Gaddi and Hanumanahalli",
        perChi: "relaxing",
        testo: "Across the river, among rice paddies and boulders, with resorts and cafés. The ferry depends on the water level: when the river is high you have to take a long detour by road."
      },
      {
        nome: "Kamalapura and Hosapete",
        perChi: "hotels with a pool and comforts",
        testo: "Larger hotels near the Royal Centre or in Hosapete, 13 kilometres away. Comfortable; you need transport for everything."
      }
    ],
    sapori: [
      {
        nome: "Banana leaf thali",
        testo: "Rice, sambar, rasam, vegetables and chapati served on a leaf and refilled as often as you like. At the bazaar eateries and the riverside cafés."
      },
      {
        nome: "Karnataka breakfast",
        testo: "Idli, vada and dosa with coconut chutney, or upma, at the bazaar shops from dawn."
      },
      {
        nome: "Bisi bele bath",
        testo: "Rice with lentils, vegetables and spices, cooked until creamy: a one-pot dish from Karnataka."
      },
      {
        nome: "Bananas and sugarcane",
        testo: "Bananas and sugarcane grow around Hampi: freshly pressed cane juice and small, very sweet bananas at the stalls."
      }
    ],
    attenzioni: [
      "Do not swim in the Tungabhadra: the currents and boulders are dangerous.",
      "To ride a scooter you need a licence valid for motorcycles, with an International Driving Permit, and a helmet.",
      "The ferry to Virupapur Gaddi does not run when the river is in flood.",
      "Visit the sites in the morning and late afternoon: at midday the granite in the sun is scorching.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['india-sud-taj-mahal'],
    imageAlt: "The stone chariot of the Vittala temple in Hampi, among carved columns and granite boulders",
    immagine: '/images/india/hampi.jpg',
  },
]
