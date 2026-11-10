import type { Destinazione } from '@/lib/types'

export const destinazioniEgitto: Destinazione[] = [
  {
    slug: 'cairo',
    paeseSlug: 'egitto',
    ordine: 1,
    nome: "Cairo",
    tipologia: ['city', 'museums', 'Islamic culture'],
    giorniConsigliati: "2-3 days, pyramids excluded",
    visitataPersonalmente: true,
    introduzione:
      "Twenty million people, nonstop traffic and a thousand years of Islamic architecture: Cairo is the country's front door and the city that holds the two great Egyptian museums.",
    percheAndarci:
      "For the Grand Egyptian Museum with Tutankhamun's complete treasure, for Islamic Cairo among Mamluk mosques and madrasas, for Coptic Cairo and for an evening at Khan el-Khalili.",
    cosaVedere: [
      "The Grand Egyptian Museum (GEM) in Giza, with its monumental staircase and the Tutankhamun galleries",
      "The Egyptian Museum on Tahrir Square, still full of extraordinary pieces",
      "The Citadel of Saladin and the Muhammad Ali Mosque",
      "Islamic Cairo: the Ibn Tulun Mosque, the Sultan Hassan complex, al-Muizz Street",
      "Coptic Cairo: the Hanging Church and the Ben Ezra Synagogue",
      "The National Museum of Egyptian Civilization (NMEC), with the royal mummies hall",
    ],
    cosaFare: [
      "Stroll through the Khan el-Khalili bazaar in the evening and have a tea at El Fishawy café",
      "A sunset felucca ride on the Nile from the Corniche",
      "The Tannoura Sufi dance show at Wekalet El Ghouri (it's worth checking the days beforehand)",
    ],
    doveDormire:
      "If you're short on time, it's best to sleep in Giza, near the pyramids and the GEM. If you're staying longer, Zamalek (a quiet island on the Nile full of places to go) or Downtown. Budget: guesthouses with pyramid views in Nazlet el-Semman · mid-range: hotels in Zamalek and Garden City · luxury: Marriott Mena House in Giza, the grand hotels on the Nile.",
    doveMangiare:
      "Koshari at Abou Tarek in Downtown, ful and taameya from the morning stands, traditional Egyptian cooking at Zooba or Abou El Sid, fish and mezze in the restaurants of Zamalek.",
    comeArrivare: "Cairo International Airport (CAI); since spring 2025 also Sphinx International Airport, near Giza, served by some flights. The metro doesn't reach the CAI terminals: use Uber or Careem from the departures car park, 30-60 minutes (up to 90 at rush hour) and roughly 200-400 EGP to the centre, 300-500 EGP to Giza. Taxis from the official desks cost more but the price is fixed in advance; ignore anyone offering rides inside the terminal. From Luxor and Aswan you arrive by plane in an hour or by sleeper train.",
    comeSpostarsi:
      "Uber and Careem, cheap and with no haggling. The metro is useful for Downtown and Coptic Cairo (Mar Girgis station). Avoid driving.",
    periodoMigliore: "October to April",
    costi:
      "Low budget €30-45 a day (guesthouse, koshari and street food, metro); mid-range €70-120 (hotel in Zamalek or Giza, Uber, restaurants); high from €200 (big Nile hotels, private guide). 2026 tickets: GEM 1,830 EGP (about $35) from November 1, 2026, with a time slot to book online; Tahrir Egyptian Museum 550 EGP; Citadel 550 EGP; NMEC about 500 EGP. At 60 EGP to the euro, 600 EGP is about €10.",
    erroriDaEvitare: [
      "Showing up at the GEM without a booked ticket: entries are by time slot and peak days sell out",
      "Accepting the “free guide” who offers himself on the street or “my brother's papyrus shop”",
      "Taking a taxi without a meter without agreeing on the price: better to use Uber or Careem",
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: "Grand Egyptian Museum (GEM)",
        testo: "The new museum near the pyramids, with the monumental staircase and the galleries devoted to Tutankhamun. It is the museum to see first.",
        come: "It is in Giza, reachable from the centre by Uber or taxi. Tickets have a date and entry time; the only official online sales site is tickets.gem.eg, but there are also ticket desks on site.",
        quando: "Galleries open 9am-6pm; Wednesday and Saturday until 9pm; last entry one hour before the galleries close (2026). Best at opening time.",
        tempo: "3-4 hours",
        costo: "1,830 EGP, about €30 ($35), from 1 November 2026 (previously 1,570 EGP); timed-entry booking only.",
        orari: "Galleries open daily 9am-6pm, Wednesdays and Saturdays until 9pm; last entry one hour before closing (2026).",
        lat: 29.995,
        lng: 31.1193,
        url: "https://tickets.gem.eg/",
        consiglio: "Book your entry time before leaving, only on the official website, and pair it with the pyramids, a few kilometres away.",
      },
      {
        nome: "Egyptian Museum in Tahrir Square",
        testo: "The historic museum opened in 1902, with thousands of pieces in crowded, rather old-fashioned rooms. It is still full of extraordinary objects even after the Tutankhamun pieces moved out.",
        come: "Metro to Sadat, then on foot from the square. Audio guide or guide on site.",
        quando: "Open daily 9am-5pm, ticket office until 4pm; during Ramadan 9am-4pm (2026). Best early in the morning, before the groups.",
        tempo: "2 hours",
        costo: "550 EGP (about €9) for foreign adults, 275 for students; audio guide 75 EGP (2026)",
        orari: "Daily 9am-5pm, ticket office until 4pm; during Ramadan 9am-4pm (2026).",
        lat: 30.04778,
        lng: 31.23333,
        url: "https://egymonuments.gov.eg/en/museums/egyptian-museum/",
        consiglio: "Choose a few rooms and see them well, rather than rushing through the whole museum.",
      },
      {
        nome: "Saladin's Citadel and the Muhammad Ali Mosque",
        testo: "The fortress Saladin began in 1176, on the hill above the city, with the Ottoman Muhammad Ali Mosque. On clear days the view from the edge reaches the pyramids.",
        come: "Taxi or Uber to the entrance. You walk inside the citadel, in comfortable shoes.",
        quando: "Open daily 8am-5pm (2026). The afternoon has the best light.",
        tempo: "2 hours",
        costo: "550 EGP (about €9) for foreign adults, 275 for students (2026)",
        orari: "Daily 8am-5pm (2026).",
        lat: 30.02944,
        lng: 31.26139,
        url: "https://egymonuments.gov.eg/en/archaeological-sites/cairo-citadel/",
      },
      {
        nome: "Islamic Cairo and al-Muizz Street",
        testo: "The pedestrian street with monuments from the Fatimid to the Ottoman era: mosques, madrasas, gates and mausoleums. An open-air museum, lively in the evening when the façades are lit.",
        come: "You reach it from the Khan el-Khalili area. You walk it from north to south.",
        quando: "From late afternoon into the evening.",
        tempo: "2-3 hours",
        costo: "the street is free; some monuments have their own ticket",
        lat: 30.04667,
        lng: 31.26,
        consiglio: "Climbing a minaret, where allowed, gives the best view of the old city.",
      },
      {
        nome: "Khan el-Khalili",
        testo: "Cairo's great bazaar, with alleys of silver, lamps, spices, textiles. It is touristy, but in the evening it also fills with Cairenes.",
        come: "Taxi to the entrance, then on foot. The El Fishawy cafe is the classic resting point.",
        quando: "Evening.",
        tempo: "2 hours",
        costo: "free",
        lat: 30.0475,
        lng: 31.26222,
        consiglio: "Always haggle, starting well below the first price.",
      },
      {
        nome: "National Museum of Egyptian Civilization (NMEC)",
        testo: "The museum in Fustat that tells Egypt's story from prehistory to today. Its highlight is the Royal Mummies Hall, with around twenty pharaohs and queens moved here from the Egyptian Museum in 2021, Ramesses II and Hatshepsut among them, in a dark, silent room.",
        come: "By Uber or taxi to the Fustat area, near Coptic Cairo. The mummies hall is on the lower floor.",
        quando: "Morning or early afternoon; it pairs well with Coptic Cairo, a few minutes away.",
        tempo: "2 hours",
        costo: "about 500 EGP, about €8 (2026)",
        lat: 30.00761,
        lng: 31.24836,
        consiglio: "Once you've seen the GEM, the NMEC is mainly worth it for the royal mummies: if you're short on time, stick to that hall and the main gallery.",
      },
      {
        nome: "Coptic Cairo: Hanging Church, Ben Ezra Synagogue and Coptic Museum",
        testo: "The oldest core of the city, inside the walls of the Roman fortress of Babylon. The Hanging Church is built over one of the fortress gates; nearby are the Ben Ezra Synagogue, where the Cairo Geniza was found, and the Coptic Museum, with Egypt's richest collection of Christian art.",
        come: "Metro line 1 to Mar Girgis, which exits right in front of the quarter. You explore on foot through narrow lanes; cover shoulders and knees for the churches.",
        quando: "Morning, ideally not on Sunday, when the churches are full for mass.",
        tempo: "2-3 hours",
        costo: "Coptic Museum 280 EGP, about €5 (2026)",
        orari: "Coptic Museum daily 9am-5pm (2026).",
        lat: 30.0054,
        lng: 31.2301,
        url: "https://egymonuments.gov.eg/en/museums/the-coptic-museum/",
      },
      {
        nome: "Mosque-Madrasa of Sultan Hassan and al-Rifai Mosque",
        testo: "Two monumental mosques facing each other below the Citadel. Sultan Hassan's, built 1356-1363, is one of the masterpieces of Mamluk architecture, with a courtyard enclosed by four great iwans; al-Rifai, finished in 1912, holds the tombs of Egypt's royal family and of the last Shah of Iran.",
        come: "On foot from the Citadel, heading down to Salah al-Din Square, or by Uber. You enter barefoot or with shoe covers; women cover their hair.",
        quando: "Outside prayer times, ideally not at Friday midday.",
        tempo: "1 hour",
        lat: 30.0319,
        lng: 31.2567,
      },
      {
        nome: "Ibn Tulun Mosque and Gayer-Anderson Museum",
        testo: "Cairo's oldest mosque to survive largely in its original form, from the 9th century, with a huge courtyard and an external spiral minaret that looks over half the city. Next door, the Gayer-Anderson Museum fills two Ottoman houses furnished by a British officer: mashrabiya, halls and roof terraces.",
        come: "By Uber or taxi; from the Sultan Hassan mosque it's about 15 minutes on foot. The museum entrance is on the side of the mosque.",
        quando: "Late afternoon, when low light sweeps the courtyard.",
        tempo: "1.5 hours",
        costo: "Gayer-Anderson Museum 100 EGP, about €2 (2026)",
        orari: "Gayer-Anderson Museum daily 9am-5pm (2026).",
        lat: 30.02889,
        lng: 31.24944,
        url: "https://egymonuments.gov.eg/en/museums/gayer-anderson-museum/",
      },
      {
        nome: "Al-Azhar Mosque",
        testo: "Founded in 970, it is one of the oldest universities in the world still running and the centre of Sunni Islam. The white marble courtyard, ringed by arcades and minarets from different eras, is one of the calmest places in the old city.",
        come: "On foot from Khan el-Khalili, crossing al-Azhar Street by the underpass. Shoes off at the entrance, women cover their hair.",
        quando: "Outside prayer times, in the afternoon before Khan el-Khalili.",
        tempo: "45 minutes",
        lat: 30.04571,
        lng: 31.26268,
      },
      {
        nome: "Bab Zuweila",
        testo: "The southern gate of the Fatimid city, from 1092, topped by the two minarets of the al-Muayyad mosque. You can climb to the top of the minarets, from where Islamic Cairo looks like a sea of domes and rooftops.",
        come: "At the end of al-Muizz Street, on the south side; you climb on foot up narrow stairs.",
        quando: "Late afternoon, for the light over the old city.",
        tempo: "45 minutes",
        costo: "100 EGP, about €2 (2026)",
        orari: "Daily 9am-5pm (2026).",
        lat: 30.04283,
        lng: 31.2578,
        url: "https://egymonuments.gov.eg/en/monuments/bab-zuwayla/",
      },
      {
        nome: "Museum of Islamic Art",
        testo: "One of the world's most important collections of Islamic art: enamelled glass mosque lamps, carved wood, ceramics, carpets and manuscripts from Egypt, Persia and Turkey. Restored after the 2014 bombing, it is well laid out and rarely crowded.",
        come: "By Uber or taxi to Bab al-Khalq, halfway between Downtown and Islamic Cairo.",
        quando: "Morning, before moving on to Islamic Cairo.",
        tempo: "1.5 hours",
        costo: "340 EGP, about €6 (2026)",
        orari: "9am-5pm (2026).",
        lat: 30.04472,
        lng: 31.25278,
        url: "https://egymonuments.gov.eg/en/museums/islamic-art-museum/",
      },
      {
        nome: "Al-Azhar Park",
        testo: "A large park built on an old rubbish dump at the edge of Islamic Cairo, with gardens, fountains and a stretch of Ayyubid walls brought back to light. From its terraces you see the Citadel and the whole old city, and it's one of Cairo's few quiet green spaces.",
        come: "By Uber or taxi to the main entrance on Salah Salem.",
        quando: "At sunset, as the call to prayer rises from hundreds of minarets.",
        tempo: "1.5 hours",
        lat: 30.0401,
        lng: 31.26408,
        consiglio: "The park's restaurants have the best terraces for dinner with a view over the old city.",
      },
      {
        nome: "Zamalek and Cairo Tower",
        testo: "The Nile island of early-20th-century mansions, embassies, galleries and cafés: Cairo at its calmest. At its southern tip stands Cairo Tower, 187 metres tall and built in 1961, with a terrace looking over the river, the centre and, on clear days, the pyramids.",
        come: "By Uber, or metro line 3 to Safaa Hegazy, in Zamalek. The tower is a walk from Qasr al-Nil Bridge.",
        quando: "Afternoon and evening, when the heat eases and the cafés fill up.",
        tempo: "2-3 hours",
        lat: 30.04583,
        lng: 31.22444,
      },
      {
        nome: "Manial Palace",
        testo: "The residence of Prince Muhammad Ali Tawfik, built between 1900 and 1929 on Roda Island, mixing Ottoman, Persian and Moorish styles. Tiled halls, a throne room, a hunting museum and a garden of banyans and palms.",
        come: "By Uber or taxi to Roda Island, just south of Garden City.",
        quando: "Morning, before the heat; it's almost always quiet.",
        tempo: "1.5 hours",
        costo: "220 EGP, about €4 (2026)",
        orari: "Daily from 9am (2026).",
        lat: 30.0274,
        lng: 31.2298,
        url: "https://egymonuments.gov.eg/en/museums/manial-palace-museum/",
      },
      {
        nome: "Felucca on the Nile",
        testo: "The traditional sailing boat, hired for an hour on the river. Away from the traffic, Cairo goes quiet and you see how much the city is built around the Nile.",
        come: "Board at the landings along the Corniche, in Garden City or near Qasr al-Nil Bridge. The price is per boat, not per person.",
        quando: "At sunset.",
        tempo: "1 hour",
        costo: "price per boat, agree it before boarding",
        consiglio: "Agree the duration and total price before setting off, in Egyptian pounds.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Grand Egyptian Museum at opening",
          "Lunch in Zamalek or Downtown",
          "Afternoon: Citadel, then the Sultan Hassan and al-Rifai mosques",
          "Evening: al-Muizz Street and Khan el-Khalili",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: as above",
          "Day 2 morning: Coptic Cairo by metro, then the NMEC and the Royal Mummies Hall",
          "Day 2 afternoon: Ibn Tulun and the Gayer-Anderson Museum",
          "Day 2 evening: felucca on the Nile and dinner in Zamalek",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3 morning: Egyptian Museum in Tahrir",
          "Day 3 afternoon: Museum of Islamic Art, Bab Zuweila and al-Azhar Mosque",
          "Day 3 sunset: al-Azhar Park",
        ],
      },
    ],
    zone: [
      {
        nome: "Zamalek",
        perChi: "those who want a quiet, well-kept district",
        testo: "An island on the Nile with cafes, restaurants and galleries. More expensive and a bit far from the sights, but easy by Uber.",
        fascia: "€70-180",
      },
      {
        nome: "Downtown",
        perChi: "those who want to be near the Egyptian Museum",
        testo: "19th-century buildings, bars and constant noise. The hotels are old and mid-range.",
        fascia: "€35-90",
      },
      {
        nome: "Giza",
        perChi: "those who want the pyramids and the GEM",
        testo: "An area close to the sites, with hotels with pyramid views. The center is far and traffic is heavy.",
        fascia: "€30-150",
      },
      {
        nome: "Garden City and the Nile Corniche",
        perChi: "those who want a big hotel with a river view",
        testo: "The east bank of the Nile between Downtown and Garden City, with the large international hotels facing the water. Handy for the Egyptian Museum and feluccas; traffic on the Corniche never stops.",
        fascia: "€120-350",
      },
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Rice, lentils, pasta, chickpeas and spicy tomato sauce: the national street dish, served in specialised eateries all over the city."
      },
      {
        "nome": "Ful and taameya",
        "testo": "Stewed fava beans and fava falafel for breakfast, at the morning kiosks."
      },
      {
        "nome": "Molokhia",
        "testo": "Green jute soup with chicken or rabbit and rice."
      },
      {
        "nome": "Om Ali",
        "testo": "A hot dessert of puff pastry, milk, nuts and raisins."
      }
    ],
    attenzioni: [
      "The free guide who offers himself on the street, or a brother's papyrus or perfume shop, is a lure to take you into a store: decline calmly.",
      "Taxis without a meter: agree the price or use Uber and Careem.",
      "In the bazaars the first price is high: haggle and do not buy anything under pressure.",
      "Traffic is heavy: allow much more time than planned between stops.",
      "Regional tensions: the UK government (October 2026) warns of escalation risk, possible flight cancellations and sudden closure of the Taba crossing; it advises against travel to North Sinai and along the Libyan border. Check your government's travel advice before leaving."
    ],
    // GUIDA-END
    gite: [
      {
        nome: "Pyramids of Giza and the Sphinx",
        distanza: "45-75 minutes by Uber from the centre, about 20 km",
        come: "Uber or driver to the main entrance; on the plateau the electric bus links the pyramids, the viewpoint and the Sphinx.",
        testo: "The three pyramids and the Sphinx, a few kilometres from the GEM. Go in at opening, 7am, before the coaches. Plateau 700 EGP, inside the Great Pyramid about 1,500 EGP extra (2026).",
      },
      {
        nome: "Saqqara, Dahshur and Memphis",
        distanza: "1 hour by car, about 30-40 km",
        come: "With a driver for the day (roughly $30-50 per car): there's no convenient public transport.",
        testo: "Djoser's Step Pyramid and the painted mastabas at Saqqara, the Bent and Red pyramids at Dahshur, the colossus of Ramesses II at Memphis. Far fewer people than at Giza. Saqqara 600 EGP, Dahshur 200, Memphis 200 (2026).",
      },
      {
        nome: "Alexandria",
        distanza: "about 3 hours by train, 220 km",
        come: "Train from Cairo's Ramses station, or a car with driver for the day.",
        testo: "Alexander's city on the Mediterranean: the new Library, the Kom el-Shoqafa catacombs, the Qaitbay citadel where the Lighthouse stood and the Corniche. Long but doable in a day.",
      },
      {
        nome: "Fayoum and Wadi al-Hitan",
        distanza: "2-3 hours by car, about 150 km",
        come: "Only with a driver or an organised tour; the last stretch in the desert needs a 4x4.",
        testo: "The oasis with Lake Qarun and the Valley of the Whales at Wadi al-Hitan, a UNESCO site: 40-million-year-old skeletons in the sand. A day of desert close to the capital.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Cairo?",
        risposta: "Two full days for the GEM, the Citadel, Islamic and Coptic Cairo, plus one for the Giza pyramids and one for Saqqara and Dahshur. With fewer than three days, choose between the Egyptian Museum and the NMEC.",
      },
      {
        domanda: "Grand Egyptian Museum or the Egyptian Museum in Tahrir?",
        risposta: "The GEM first: it has Tutankhamun and the new galleries. The Tahrir museum is still full of extraordinary pieces and is cheaper, but it's a second visit for those with time.",
      },
      {
        domanda: "Do you need to book the Grand Egyptian Museum?",
        risposta: "Yes: entry is by time slot and booked only on the official site, tickets.gem.eg. From 1 November 2026 the foreigners' ticket costs 1,830 EGP.",
      },
      {
        domanda: "Is it better to stay in Giza or in central Cairo?",
        risposta: "For a short stay, Giza saves you two trips through traffic to the pyramids and the GEM. For longer, Zamalek or Downtown are more convenient for Islamic Cairo, the central museums and evenings out.",
      },
      {
        domanda: "How do you get around Cairo?",
        risposta: "Uber and Careem are the simplest option with a clear price. The metro is cheap and useful for Downtown, Zamalek and Coptic Cairo (Mar Girgis stop), but it doesn't reach the airport or Giza.",
      },
      {
        domanda: "What should you wear to visit Cairo's mosques?",
        risposta: "Shoulders and knees covered for everyone, a headscarf for women, shoes off at the entrance. Avoid Friday midday and prayer times.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "The mosque-madrasa of Sultan Hassan and the al-Rifa'i Mosque with their minarets, in Islamic Cairo",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg',
  },
  {
    slug: 'piramidi',
    paeseSlug: 'egitto',
    ordine: 2,
    nome: "Pyramids: Giza, Saqqara and Dahshur",
    tipologia: ['archaeology', 'desert'],
    giorniConsigliati: "1-2 days",
    visitataPersonalmente: true,
    introduzione:
      "The three royal necropolises of the Old Kingdom southwest of Cairo: Giza with Khufu, Khafre, Menkaure and the Sphinx; Saqqara with Djoser's step pyramid; Dahshur with the Bent Pyramid and the Red Pyramid.",
    percheAndarci:
      "To see the entire evolution of the pyramid in a day and a half, from the first step pyramid to the perfect shape of Giza, and to enter the inner chambers of Saqqara and Dahshur, far less crowded than Khufu's.",
    cosaVedere: [
      "The Great Pyramid of Khufu, inside too with a separate ticket",
      "The Sphinx and the Valley Temple of Khafre",
      "The panoramic viewpoint of the nine pyramids, in the desert behind Menkaure",
      "Djoser's step pyramid and the painted mastabas of Saqqara (Ti, Mereruka)",
      "The Serapeum of Saqqara, with the sarcophagi of the Apis bulls",
      "The Red Pyramid of Dahshur, which you can descend into without lines",
    ],
    cosaFare: [
      "Get in at 7 when it opens for an hour of good light and fewer groups",
      "Get around the plateau on the internal electric bus instead of by horse or camel",
    ],
    comeArrivare: "Giza is 30-60 minutes from central Cairo depending on traffic; Saqqara and Dahshur are 45-60 minutes from Giza, by car with a driver or on a tour.",
    comeSpostarsi:
      "At Giza the internal electric bus links the entrance, the pyramids and the Sphinx; for Saqqara and Dahshur you need a car with a driver for the day (roughly $30-50).",
    periodoMigliore: "October to April, always early in the morning",
    costi:
      "Giza plateau about 700 EGP; inside the Great Pyramid about 1,500 EGP; Saqqara about 450-600 EGP with the main tombs; Dahshur around 150-200 EGP (approximate, prices change often).",
    erroriDaEvitare: [
      "Believing anyone who says “the entrance is closed” or “you have to go this way”: it's the first hook for the paid camel ride",
      "Getting on a camel without agreeing on the total price, the duration and what it includes: the price doubles to get down",
      "Buying the ticket for the inside of Khufu expecting to see decorations: the chambers are bare, the interest is in the corridor and the Grand Gallery",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Giza Pyramids and the Sphinx",
        "testo": "The Great Pyramid of Khufu, those of Khafre and Menkaure and the Sphinx: Egypt's most famous group, on the plateau south-west of Cairo. The pyramid interiors need separate tickets.",
        "come": "From Giza or Cairo by Uber or with a driver; you get around on foot, by shuttle or on horseback.",
        "quando": "Open daily 8am-4pm (2026). At opening time the light is better and there are fewer groups.",
        "tempo": "3-4 hours",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/giza-plateau/",
        "consiglio": "The panoramic point behind Menkaure shows the three pyramids together, with no crowd.",
        "costo": "EGP 700 for foreign adults, 350 for students (2026). Great Pyramid, Khafre and Menkaure pyramids, tomb of Meresankh III and Workers' Cemetery extra: prices at the ticket office."
      },
      {
        "nome": "Saqqara",
        "testo": "Djoser's Step Pyramid, considered the first large building in cut stone, and the nobles' tombs, such as the mastabas of Mereruka and of Ti, a senior Fifth Dynasty official, with very fine reliefs of farming, fishing, marsh hunting and boat building. The mastaba of Ti is not listed on the official tickets: ask at the ticket office whether it is open.",
        "come": "By car with a driver from Giza or Cairo.",
        "quando": "Open daily 8am-4pm (2026). Best in the morning.",
        "tempo": "2-3 hours",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/saqqara/",
        "consiglio": "The painted tombs are as worthwhile as the pyramid and are usually less crowded.",
        "costo": "EGP 600 for the area for foreign adults; inclusive ticket with the Imhotep Museum, Nobles' and New Kingdom tombs, Mereruka and Mehu EGP 1,400 (2026)"
      },
      {
        "nome": "Dahshur",
        "testo": "The Red Pyramid and the Bent Pyramid, built by Sneferu: the attempts that led to the true smooth-sided pyramid. Usually quiet.",
        "come": "By car with a driver, near Saqqara.",
        "quando": "Open daily 8am-5pm (2026). Best in the morning, when it is cooler.",
        "tempo": "1-2 hours",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/dahshur/",
        "consiglio": "A great addition to Saqqara for those with a full day and a driver.",
        "costo": "EGP 200 for foreign adults, 100 for students (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Giza at opening",
          "Lunch",
          "Afternoon at Saqqara",
          "Return to Cairo"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Giza and the Grand Egyptian Museum",
          "Day 2: Saqqara and Dahshur with a driver"
        ]
      }
    ],
    zone: [
      {
        "nome": "Giza",
        "perChi": "those who want the pyramids from the window",
        "testo": "Hotels with views, very close to the entrance and the GEM. A noisy, untidy area."
      },
      {
        "nome": "Cairo",
        "perChi": "those who want other districts within reach",
        "testo": "You do the day by Uber or with a driver: more choice of places, but a long drive in traffic."
      }
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "A dish of rice, lentils, pasta and spicy sauce, for a cheap lunch."
      },
      {
        "nome": "Stuffed pigeon (hamam mahshi)",
        "testo": "An Egyptian classic, filled with rice or freekeh."
      },
      {
        "nome": "Mint tea",
        "testo": "Served at every stop, very sweet."
      },
      {
        "nome": "Baladi bread",
        "testo": "Egyptian flatbread, baked in neighbourhood ovens."
      }
    ],
    attenzioni: [
      "Anyone saying the entrance is closed or that you must go around another way is trying to take you to the paid camel ride: ignore.",
      "Camel and horse: agree the total price, duration and what it includes, and ask what happens when getting off.",
      "The interior of the Great Pyramid has bare chambers: the interest is in the corridor and the Grand Gallery. If claustrophobic, think twice.",
      "Do not buy papyrus and souvenirs at the entrance from the sellers who approach."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "The pyramids of Giza standing out against the desert on a clear day",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg',
  },
  {
    slug: 'luxor',
    paeseSlug: 'egitto',
    ordine: 3,
    nome: "Luxor",
    tipologia: ['archaeology', 'Nile'],
    giorniConsigliati: "2-3 days",
    visitataPersonalmente: true,
    introduzione:
      "Ancient Thebes, split in two by the Nile: on the east bank the temples of the living, Karnak and Luxor; on the west bank the city of the dead, with the Valley of the Kings, the Valley of the Queens and Hatshepsut's temple.",
    percheAndarci:
      "For the largest concentration of monuments of pharaonic Egypt in one place, and for the painted tombs that still preserve their original colors.",
    cosaVedere: [
      "The Karnak complex and the hypostyle hall with 134 columns",
      "Luxor Temple, to be seen at sunset and with the evening lighting",
      "The Valley of the Kings: the basic ticket includes three tombs, Tutankhamun and Seti I are paid separately",
      "Hatshepsut's mortuary temple at Deir el-Bahari",
      "Medinet Habu, the temple of Ramesses III, with reliefs that are still colored and few visitors",
      "The Colossi of Memnon and the artisans' village of Deir el-Medina",
    ],
    cosaFare: [
      "The hot-air balloon flight at dawn over the west bank",
      "Crossing the Nile by public ferry or by felucca",
      "A day trip to the temple of Dendera or Abydos",
    ],
    doveDormire:
      "East bank for convenience (restaurants, temples on foot), west bank for the calm and the proximity to the tombs. Budget: guesthouses on the west bank · mid-range: Nile hotels on the east bank · luxury: Sofitel Winter Palace, Al Moudira on the west bank.",
    doveMangiare:
      "Home-style Egyptian cooking in the restaurants of the west bank, stuffed pigeon and tagine; on the east bank, the places with a terrace facing Luxor Temple.",
    comeArrivare: "Flight from Cairo (1 hour), day or night train from Cairo (9-10 hours), road from the Red Sea (4 hours from Hurghada, 4-4.5 from Marsa Alam).",
    comeSpostarsi:
      "On the west bank you need a car with a driver or a taxi for the day (roughly $25-40); on the east bank you get around on foot or by Uber. Horse carriages only if you agree on the price beforehand.",
    periodoMigliore: "October to April; in summer, visits only between dawn and 11",
    costi:
      "Karnak about 600 EGP, Luxor Temple about 500 EGP, Valley of the Kings about 750 EGP (3 tombs), Tutankhamun's tomb about 700 EGP, Seti I and Nefertari around 2,000 EGP each, Hatshepsut about 440 EGP; hot-air balloon roughly $50-100 (approximate).",
    erroriDaEvitare: [
      "Going to the Valley of the Kings at noon: between the rock walls it tops 40 °C (104 °F) as early as May",
      "Taking photos in the tombs without the photo permit if one is required: the guards make you pay the “fine” in cash",
      "Choosing the balloon on the lowest price alone: the company matters, and flights are canceled when it's windy",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Karnak Temple",
        "testo": "One of the largest religious complexes of ancient Egypt, built over almost two thousand years by some thirty pharaohs. The hypostyle hall has 134 columns: the twelve central ones are 21 metres high.",
        "come": "From the city by taxi or carriage. You walk in the site, along the avenue of sphinxes from Luxor temple if you want the full route.",
        "quando": "Open daily 6am-5pm (2026). Arrive at opening: in summer it is the only bearable time.",
        "tempo": "2-3 hours",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/karnak/",
        "consiglio": "Return in the evening for the sound and light show, if scheduled.",
        "costo": "EGP 600 including the open-air museum, Temple of Mut EGP 200 (foreign adults, 2026)"
      },
      {
        "nome": "Luxor Temple",
        "testo": "A smaller temple in the middle of town, with colossal statues of Ramesses II and one of the two entrance obelisks: the other has stood in Paris, on the Place de la Concorde, since 1836. Lit up at night it is beautiful.",
        "come": "On foot from the riverfront on the east bank.",
        "quando": "Open daily 6am-8pm (2026). Sunset and evening.",
        "tempo": "1 hour",
        "costo": "EGP 500 for foreign adults, 250 for students (2026)",
        "url": "https://egymonuments.gov.eg/en/monuments/luxor-temple/"
      },
      {
        "nome": "Valley of the Kings",
        "testo": "More than sixty rock-cut tombs, most of them of New Kingdom pharaohs, with painted walls still bright. The basic ticket covers a limited number of tombs; Tutankhamun and others cost extra.",
        "come": "On the west bank, by taxi or on a tour. You visit on foot, tomb by tomb.",
        "quando": "Open daily 6am-5pm (2026). Arrive at opening: at midday it is very hot, even in spring.",
        "tempo": "2-3 hours",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/valley-of-the-kings/",
        "consiglio": "Ask at the ticket office which tombs are open that day and choose those with the best-preserved decoration, not just the most famous one.",
        "costo": "EGP 750 for foreign adults, 375 for students; Tutankhamun and other tombs extra (2026)"
      },
      {
        "nome": "Temple of Hatshepsut",
        "testo": "The mortuary temple of the queen-pharaoh at Deir el-Bahari, built in terraces below the cliff, with architecture that looks modern.",
        "come": "On the west bank, near the Valley of the Kings.",
        "quando": "Open daily 6am-5pm (2026). Early morning.",
        "tempo": "1 hour",
        "costo": "EGP 440 for foreign adults, 220 for students (2026)",
        "url": "https://egymonuments.gov.eg/en/monuments/hatshepsut-temple/"
      },
      {
        "nome": "Medinet Habu and the Colossi of Memnon",
        "testo": "The temple of Ramesses III, with reliefs that still keep their colour and fewer visitors than the big temples, near the two colossi of Amenhotep III watching over the plain.",
        "come": "On the west bank, by taxi with the other stops.",
        "quando": "Medinet Habu open daily 6am-5pm (2026). Mid-morning or late afternoon.",
        "tempo": "1-1.5 hours",
        "consiglio": "Medinet Habu is often skipped, but it is well worth the stop.",
        "costo": "Medinet Habu EGP 230 for foreign adults, 110 for students (2026); the Colossi can be seen from the road"
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": [
          "Dawn: balloon or the Valley of the Kings at opening",
          "Hatshepsut",
          "Medinet Habu and the Colossi",
          "Afternoon: Karnak and Luxor Temple at sunset"
        ]
      },
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: west bank",
          "Day 2: Karnak, Luxor Temple, then a trip to Dendera or Abydos"
        ]
      }
    ],
    zone: [
      {
        "nome": "East bank",
        "perChi": "those who want restaurants and nightlife",
        "testo": "Near Karnak and Luxor temples, with hotels in every range and the riverfront. More touristy and with more sellers."
      },
      {
        "nome": "West bank",
        "perChi": "those who want quiet",
        "testo": "Countryside, houses and small guesthouses near the tombs and fields, with little noise."
      }
    ],
    sapori: [
      {
        "nome": "Stuffed pigeon",
        "testo": "A typical Egyptian dish, also served in the West Bank restaurants."
      },
      {
        "nome": "Meat tagine",
        "testo": "Egyptian home cooking, with vegetables and tomato sauce."
      },
      {
        "nome": "Ful and taameya",
        "testo": "Cheap breakfast at the market kiosks."
      },
      {
        "nome": "Karkade",
        "testo": "Hot or cold hibiscus infusion, in every cafe."
      }
    ],
    attenzioni: [
      "Photo rules in the tombs change often: ask at the ticket office, never use flash. Guards who open a closed corner or pose you then ask for a tip.",
      "Balloons: pick the company and not the lowest price, and leave margin because flights are canceled in wind.",
      "Carriages and sellers on the riverfront start from high figures: haggle and decide beforehand.",
      "In summer visit from dawn to late morning: after that the heat is extreme."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "The papyrus-shaped columns of the great hypostyle hall of Karnak Temple, seen from below",
    immagine: '/images/viaggi/egitto-completo/giorno-14-luxor.jpg',
  },
  {
    slug: 'assuan-abu-simbel',
    paeseSlug: 'egitto',
    ordine: 4,
    nome: "Aswan and Abu Simbel",
    tipologia: ['archaeology', 'Nile', 'Nubian culture'],
    giorniConsigliati: "2-3 days",
    visitataPersonalmente: true,
    introduzione:
      "The southernmost city of the circuit, where the Nile narrows between granite islands and dunes, with the colorful Nubian villages on the west bank. From here you set out for the temples of Ramesses II and Nefertari at Abu Simbel.",
    percheAndarci:
      "For the slowest pace in Egypt, the temple of Philae on an island in the lake, the felucca at sunset and Abu Simbel, the monument moved piece by piece in the 1960s to save it from Lake Nasser.",
    cosaVedere: [
      "The two temples of Abu Simbel, 280 km to the south",
      "The temple of Philae, by boat from the Shellal dock",
      "The Unfinished Obelisk in the granite quarries",
      "The Nubian Museum",
      "The Nubian village of Gharb Soheil",
    ],
    cosaFare: [
      "A felucca at sunset around Elephantine Island",
      "The sound and light show at Abu Simbel, for those who sleep there",
      "On February 22 and October 22 the sun reaches all the way into the sanctuary of the great temple",
    ],
    doveDormire:
      "Budget: Nubian guesthouses on Elephantine Island or in Gharb Soheil · mid-range: hotels on the Corniche · luxury: Old Cataract (Sofitel Legendary). In Abu Simbel there are few places, including the Eskaleh eco-lodge.",
    comeArrivare:
      "Flight from Cairo (1 hour 25 minutes), overnight sleeper train from Cairo or Giza, Nile cruise from Luxor (3-4 nights). For Abu Simbel: a 3.5-hour road trip leaving before dawn, or a 45-minute EgyptAir flight.",
    comeSpostarsi: "Public and private boats on the Nile, taxis and Uber in town; for Abu Simbel, a minivan with a driver or a group tour.",
    periodoMigliore: "November to March; in summer it's the hottest place in the country",
    costi:
      "Abu Simbel roughly 750-850 EGP; Philae about 550 EGP plus the boat (to be agreed on, 300-500 EGP per boat); Nubian Museum about 300 EGP; felucca roughly 300-600 EGP per hour per boat (approximate).",
    erroriDaEvitare: [
      "Doing Abu Simbel in a day in summer without accounting for the 3-4 am wake-up and seven hours of driving round trip",
      "Getting on a felucca without agreeing on whether the price is per person or per boat, and for how long",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Abu Simbel",
        "testo": "The two rock-cut temples of Ramesses II and Nefertari, with colossal statues at the entrance. Between 1963 and 1968 they were cut into blocks and moved to save them from Lake Nasser. On 22 February and 22 October the sun reaches the sanctuary.",
        "come": "From Aswan about 300 km by road, leaving before dawn, or by plane.",
        "quando": "Open daily 6am-5pm (2026). Arrive at opening, before the tour buses.",
        "tempo": "1.5-2 hours on site",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/abu-simbel/",
        "consiglio": "If you can, sleep at Abu Simbel for the sound and light show and the dawn.",
        "costo": "EGP 750 for foreign adults, 375 for students; EGP 1,200 (students 600) on 22 February and 22 October (2026)"
      },
      {
        "nome": "Philae Temple",
        "testo": "The sanctuary of Isis on an island, also moved after the dam. You arrive by boat from the Shellal pier and it is very photogenic.",
        "come": "Taxi to the pier, then a motorboat, with the price to be agreed.",
        "quando": "Open daily 7am-4pm (2026). Early morning for the light.",
        "tempo": "1.5 hours",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/philae/",
        "costo": "EGP 550 for foreign adults, 275 for students, plus the boat from the jetty, to be agreed (2026)"
      },
      {
        "nome": "Nubian village of Gharb Soheil",
        "testo": "A Nubian village on the west bank of the Nile, a few kilometres from the Aswan Dam, founded about a century ago when the old 1902 dam flooded the villages further south. Nubian families welcome visitors into their homes for a meal and, if you like, to stay the night.",
        "come": "From Aswan: ask at your hotel or at the jetty how to get there and agree the price first.",
        "quando": "Afternoon, returning at sunset.",
        "tempo": "2-3 hours",
        "consiglio": "Lunch or dinner in a Nubian home is the best way to get to know the area."
      },
      {
        "nome": "Felucca at sunset",
        "testo": "The traditional sailing boat around Elephantine Island, for a trip of an hour or two.",
        "come": "From the Aswan riverfront.",
        "quando": "Sunset.",
        "tempo": "1-2 hours",
        "consiglio": "Agree whether the price is per boat or per person, and how long it lasts."
      }
    ],
    programmi: [
      {
        "titolo": "2 days",
        "tappe": [
          "Day 1: Philae in the morning, unfinished obelisk, felucca at sunset",
          "Day 2: Abu Simbel at dawn, back by midday"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aswan riverfront",
        "perChi": "those who want to see the Nile",
        "testo": "Hotels near the corniche and the feluccas. Convenient for everything."
      },
      {
        "nome": "Abu Simbel",
        "perChi": "those who want dawn at the temples",
        "testo": "Few places to stay: useful to avoid the night-time wake-up call."
      }
    ],
    sapori: [
      {
        "nome": "Nubian cuisine",
        "testo": "Spiced chicken, fish and rice dishes, in the Nubian villages around Aswan, such as Gharb Soheil."
      },
      {
        "nome": "Karkade",
        "testo": "Hibiscus infusion, very common in Aswan."
      },
      {
        "nome": "Ful and taameya",
        "testo": "Cheap breakfast at the kiosks."
      },
      {
        "nome": "Nile fish",
        "testo": "Served grilled on the riverfront."
      }
    ],
    attenzioni: [
      "Abu Simbel as a day trip means getting up in the middle of the night and many hours on the road: factor it in.",
      "Price of the felucca and the boat to Philae: agree beforehand, per boat or per person.",
      "In summer Aswan is among the hottest places in the country: visit at dawn.",
      "Very insistent sellers on the riverfront: a firm no is enough."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: "The temples of Abu Simbel with the colossal statues of Ramesses II carved into the rock",
    immagine: '/images/viaggi/egitto-completo/giorno-11-assuan-abu-simbel.jpg',
  },
  {
    slug: 'siwa',
    paeseSlug: 'egitto',
    ordine: 5,
    nome: "Siwa Oasis",
    tipologia: ['desert', 'oasis', 'Berber culture'],
    giorniConsigliati: "3 days plus two for travel",
    visitataPersonalmente: true,
    introduzione:
      "An oasis of palms and salt lakes 50 km from the Libyan border, home to a Berber-speaking community, on the edge of the Great Sand Sea.",
    percheAndarci:
      "For an Egypt completely different from the one of temples: salt-mud houses, springs to swim in, the dunes of the Great Sand Sea and the Oracle temple where Alexander the Great was proclaimed son of Amun.",
    cosaVedere: [
      "The fortress of Shali, the old center built of kershef (mud and salt)",
      "The temple of the Oracle of Amun at Aghurmi",
      "The Mountain of the Dead, Gebel al-Mawta, with painted tombs",
      "Cleopatra's Spring",
      "The salt lakes, where you float as in the Dead Sea",
    ],
    cosaFare: [
      "A 4x4 excursion into the Great Sand Sea with sandboarding and sunset on the dunes",
      "A night in a tent camp in the desert",
      "Getting around the oasis by bicycle",
    ],
    doveDormire:
      "Budget: small hotels in the center · mid-range: Siwan-style eco-lodges outside the center · luxury: Adrère Amellal, with no electricity, by candlelight.",
    comeArrivare:
      "Overnight bus from Cairo (about 10-12 hours) or in two legs via Marsa Matruh; alternatively a car with a driver or an organized tour. There are checkpoints along the road: keep your passport always at hand.",
    comeSpostarsi: "Bicycle, tuk-tuk and donkey carts in the oasis; 4x4 with a local driver for the desert.",
    periodoMigliore: "October to April; winter nights in the desert drop close to 0 °C (32 °F)",
    costi:
      "Half-day excursion into the Great Sand Sea roughly $20-35 per person; the desert permit is requested by the local operator, who includes it in the price (approximate).",
    erroriDaEvitare: [
      "Going into the desert with someone who doesn't have the permits: the areas toward the Libyan border are controlled by the army",
      "Wearing skimpy clothes in town: Siwa is a conservative community, and even at the lake or the springs people swim covered",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Shali Fortress",
        "testo": "The old citadel of mud and salt, damaged by three days of rain in 1926 and then abandoned by its residents. From the top you see the whole oasis.",
        "come": "On foot from the center of Siwa.",
        "quando": "Sunset.",
        "tempo": "1 hour"
      },
      {
        "nome": "Temple of the Oracle of Amun",
        "testo": "The ruins on the hill of Aghurmi where, according to tradition, Alexander the Great came to consult the oracle, which recognised him as the god's son and pharaoh.",
        "come": "By bike or taxi from the center.",
        "quando": "Morning or late afternoon.",
        "tempo": "1 hour"
      },
      {
        "nome": "Desert, salt lakes and Cleopatra's Spring",
        "testo": "A 4x4 trip towards the Great Sand Sea with sandboarding, sunset on the dunes and a swim in the springs, such as the ancient natural spring known as Cleopatra's Bath, and in the salt lakes.",
        "come": "Only with a local operator, who holds the desert permit.",
        "quando": "Afternoon, back at sunset.",
        "tempo": "Half a day",
        "consiglio": "Ask whether swimming and dinner are included, and bring a jacket for the evening."
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: arrival, Shali Fortress, sunset",
          "Day 2: Aghurmi, Cleopatra's Bath, desert and a night in a tent",
          "Day 3: bicycle in the oasis, return"
        ]
      }
    ],
    zone: [
      {
        "nome": "Center of Siwa",
        "perChi": "those who want to be near everything",
        "testo": "Hotels and guesthouses near the market and the fortress. Simple."
      },
      {
        "nome": "Eco-lodges in the oasis",
        "perChi": "those who want nature and silence",
        "testo": "Mud houses among the palms, more expensive and not easy to reach on foot."
      }
    ],
    sapori: [
      {
        "nome": "Siwa dates and olives",
        "testo": "The oasis product, sold loose in the market."
      },
      {
        "nome": "Olive oil",
        "testo": "Made in the oasis from local olives."
      }
    ],
    attenzioni: [
      "The desert toward Libya is controlled by the army: go only with operators who have permits.",
      "Siwa is a conservative community: cover shoulders and knees, and swim clothed at the springs.",
      "Keep your passport handy at checkpoints.",
      "Winter nights in the desert are cold: bring warm clothes.",
      "Roads: the UK government (October 2026) treats Siwa and the road from Marsa Matruh as outside the advised-against areas, but advises against all but essential travel on the road between Bahariya and Siwa."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: "Date palms reflected in a spring of the Siwa oasis",
    immagine: '/images/viaggi/egitto-completo/giorno-07-siwa.jpg',
  },
  {
    slug: 'mar-rosso',
    paeseSlug: 'egitto',
    ordine: 6,
    nome: "Red Sea: Hurghada, Marsa Alam and Sharm el-Sheikh",
    tipologia: ['sea', 'diving', 'snorkeling'],
    giorniConsigliati: "3-5 days",
    visitataPersonalmente: true,
    introduzione:
      "The Egyptian coast of the Red Sea and the tip of the Sinai: coral reef right off the shore, wrecks, pelagic sharks offshore and water that doesn't drop below 21-22 °C (70-72 °F) even in winter.",
    percheAndarci:
      "To end the archaeological trip with the sea, or for some of the most famous dives in the world: the Thistlegorm wreck, Ras Mohammed, Elphinstone, the Brothers and Daedalus islands.",
    cosaVedere: [
      "Hurghada: the Giftun Islands and Orange Bay, the Thistlegorm wreck on a long day",
      "Marsa Alam: Abu Dabbab bay with turtles and, with luck, the dugong; the Dolphin House (Samadai) reef; Wadi el Gemal park",
      "Sharm el-Sheikh: Ras Mohammed National Park and the Straits of Tiran",
      "Dahab: the Blue Hole and reefs from the shore",
    ],
    cosaFare: [
      "Snorkeling from the shore on the resort's reef",
      "An Open Water or Advanced course with a PADI or SSI center",
      "A week-long liveaboard dive cruise in the south: Brothers, Daedalus, Elphinstone",
    ],
    doveDormire:
      "Hurghada: El Gouna and Sahl Hasheesh for mid-range and high-end, Hurghada town for budget. Marsa Alam: isolated resorts with a reef out front, eco-lodges like the one at Wadi Lahami for divers. Sharm: Naama Bay for the evening scene, Nabq for resorts.",
    comeArrivare:
      "Direct flights from Italy to Hurghada, Marsa Alam and Sharm el-Sheikh (many seasonal charters); domestic flights from Cairo; from Luxor 4 hours by road to Hurghada, 4-4.5 to Marsa Alam.",
    comeSpostarsi: "Transfers arranged by the resort, taxis and minivans with a driver; for boat excursions you leave from the tourist marinas.",
    periodoMigliore:
      "warm sea from May to November; from December to March the water is around 22 °C (72 °F) with strong wind, making for 5 mm wetsuit days",
    costi:
      "Snorkeling boat excursion with lunch roughly $30-50; single dive $35-55, 10-dive package $300-400; Open Water course $400-550; 7-night liveaboard €1,000-1,800 plus park fees (approximate).",
    erroriDaEvitare: [
      "Choosing Sharm thinking you'll easily get to Luxor: from the Sinai you need a flight, almost always via Cairo",
      "Touching or walking on coral and buying shells or corals: it's forbidden and exports are confiscated at the airport",
      "Booking a liveaboard in the south without the certification and number of dives required (usually Advanced and at least 50 dives)",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hurghada",
        "testo": "One of the main resort towns on the coast, with boat trips for snorkelling and diving to the Giftun Islands and the offshore reefs.",
        "come": "Excursions to book with a local operator from your hotel.",
        "quando": "Year-round; from December to March the water drops to 21-23 °C, in August it reaches 28 °C.",
        "tempo": "A full day"
      },
      {
        "nome": "Marsa Alam and Abu Dabbab",
        "testo": "Further south and quieter: Abu Dabbab bay, known for its sea turtles, and further south Wadi el-Gemal National Park, home to dugongs and green turtles. The airport also gets tourist flights from Italy.",
        "come": "By car from Luxor or on direct flights.",
        "quando": "Early morning, with fewer boats.",
        "tempo": "A full day",
        "consiglio": "A good choice if snorkelling is the priority."
      },
      {
        "nome": "Sharm el-Sheikh and Ras Mohammed",
        "testo": "Diving and snorkelling in Ras Mohammed National Park, with the Thistlegorm wreck not far away.",
        "come": "Direct flights from Europe and Cairo.",
        "quando": "All year.",
        "tempo": "A full day"
      }
    ],
    programmi: [
      {
        "titolo": "3 days",
        "tappe": [
          "Day 1: snorkeling from the resort shore",
          "Day 2: boat to the offshore reefs or Ras Mohammed",
          "Day 3: course or dives"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hurghada",
        "perChi": "those who want lots of choice and low prices",
        "testo": "Resorts everywhere and nightlife, with a heavily built-up coast."
      },
      {
        "nome": "Marsa Alam",
        "perChi": "those who want reefs and calm",
        "testo": "Resorts on the reef, far from the towns: ideal for snorkeling."
      },
      {
        "nome": "Sharm el-Sheikh",
        "perChi": "those who want diving and big resorts",
        "testo": "Many resorts and dive centers, marine parks nearby."
      }
    ],
    sapori: [
      {
        "nome": "Grilled fish",
        "testo": "Chosen at the market and cooked in restaurants by the sea."
      },
      {
        "nome": "Sayadeya",
        "testo": "Fish with spiced rice and onions, from coastal cooking."
      },
      {
        "nome": "Shawarma",
        "testo": "For a quick meal away from the resorts."
      },
      {
        "nome": "Karkade",
        "testo": "Cold hibiscus drink."
      }
    ],
    attenzioni: [
      "Do not touch or step on coral, and do not take shells or coral away.",
      "From Sinai to Luxor you almost always need a flight via Cairo: do not count on the road.",
      "For dive liveaboards ask the operator which certification and experience are required.",
      "From December to March the water is around 21-23 °C and it is often windy: you need a thicker wetsuit.",
      "Sinai: the UK government (October 2026) advises against all travel to North Sinai and all but essential travel to inland South Sinai beyond the St Catherine-Nuweiba road; the coasts, including Sharm el-Sheikh, are excluded."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Table corals and turquoise water on a Red Sea coral reef",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg',
  },
]
