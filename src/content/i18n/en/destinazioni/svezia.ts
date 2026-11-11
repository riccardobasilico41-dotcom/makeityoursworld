import type { Destinazione } from '@/lib/types'

export const destinazioniSvezia: Destinazione[] = [
  {
    slug: 'stoccolma',
    paeseSlug: 'svezia',
    ordine: 1,
    nome: 'Stockholm',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      "one night on the way out and one on the way back in the Lapland trip, transit only; 2-3 full days in the \"Nordic Capitals\" itinerary, as the second stop after Copenhagen",
    visitataPersonalmente: true,
    introduzione:
      "On the Lapland trip it is the obligatory transit between the international flight and the domestic one to Kiruna. But it is also a capital that deserves far more than one night: it is built on fourteen islands linked by over fifty bridges, and it has the medieval core of Gamla Stan, the 17th-century wreck of the Vasa and the city hall where the Nobel banquet is held every year.",
    percheAndarci:
      "For the domestic flight to Kiruna you have to pass through anyway, one night each way. And it is the natural second stop of a tour of the Nordic capitals: from Copenhagen you arrive by train or plane, and between the old town, museums and archipelago the city fills 2-3 days nicely.",
    cosaVedere: [
      "The city center, in a very reduced version if you are only in transit for a night",
      "Gamla Stan, the medieval old town on an island of its own: narrow alleys, colorful houses, the Royal Palace (with the changing of the guard) and the square of Stortorget",
      "The Vasamuseet (Vasa Museum), with a royal warship from 1628 that sank in Stockholm harbor on its maiden voyage and was recovered almost intact in 1961: one of the best-preserved ancient ships in the world",
      "Stadshuset, the red-brick City Hall on the waterfront, home of the Nobel Prize banquet in the Blue Hall and of the Golden Hall covered in over 18 million gold tesserae",
      "ABBA The Museum, on the island of Djurgården, dedicated to Sweden's most famous pop group, with original memorabilia and interactive rooms",
      "The Stockholm archipelago (Stockholms skärgård), over 30,000 islands and islets opening east of the city toward the Baltic Sea",
    ],
    cosaFare: [
      "Little else beyond check-in/check-out if you are only in transit for a night",
      "A stroll among the alleys of Gamla Stan, with a stop at Stortorget",
      "A visit to the Vasamuseet (see the dedicated experience page)",
      "A guided tour of Stadshuset, with a climb up the tower in the warm months for the view over the city (access is seasonal: check the hours beforehand)",
      "A half day or a full day by boat in the archipelago (see the dedicated experience page)",
    ],
    doveDormire:
      "I slept at the Radisson Blu Royal Viking both on the way out and on the way back, in transit to Lapland: a reliable international chain, convenient for those arriving or leaving on evening flights. For a full stay, Gamla Stan and Norrmalm/the old town remain the most central and walkable areas; Södermalm, younger and with bars and restaurants of its own, is an often cheaper alternative a few minutes by metro from the center.",
    doveMangiare:
      "During the transit stops I only had a few hours and have no places to recommend. Most of the city's offerings are in Södermalm and Östermalm, from fast-casual to high-end restaurants.",
    comeArrivare:
      "International flight to Stockholm Arlanda. For those arriving as the second stop of the \"Nordic Capitals\" itinerary, from Copenhagen there is the direct SJ train (about 5 hours) or the flight (about 1 hour). From Arlanda the Arlanda Express reaches Central Station in about 20 minutes (about SEK 349, more if bought on board); the SL commuter train with airport supplement and the Flygbussarna coaches are slower and cheaper. Taxis are best taken only from the big companies, at a fixed fare.",
    comeSpostarsi: "For airport-hotel transit alone it isn't needed. For a full stay there are the metro (Tunnelbana), buses and city ferries with an integrated SL ticket; the old town is also easy to walk.",
    periodoMigliore: 'May-September for the weather and for archipelago outings, which work better with the long days',
    costi:
      "Single SL ticket 43 SEK, day pass 180 SEK. Vasamuseet 195-240 SEK depending on the season. ABBA The Museum 269-349 SEK. Archipelago trip from about 375 SEK (about €33) for a guided 2-2.5 hour outing. Daily budget per person, excluding accommodation: low €50-70 (supermarket, transport pass, one museum), mid €90-130 (lunch out, average dinner, two entries), high over €180.",
    erroriDaEvitare: [],
    miaEsperienza:
      "For me Stockholm was just a logistical stop, on the way out and on the way back: just enough time to sleep between one flight and the next.",
    luoghi: [
      {
        nome: "Gamla Stan and the Royal Palace",
        testo: "The medieval old town on an island, with narrow lanes, colourful houses and the Stortorget square. The Royal Palace, the king's official residence with over 1,400 rooms, holds the changing of the guard in the outer courtyard.",
        come: "On foot from the central station or by metro to Gamla stan.",
        quando: "Early morning, before the groups; the changing of the guard is at noon on the days given on the royal site.",
        tempo: "2-3 hours",
        costo: "Streets free; Royal Palace SEK 220 for adults, SEK 240 from May to September (2026), about €20",
        orari: "Royal Palace open daily 10am-4pm in low season (November 2026); longer hours in summer, see the website",
        lat: 59.325,
        lng: 18.07056,
        url: "https://www.kungligaslotten.se",
        consiglio: "Mårten Trotzigs gränd and Västerlånggatan are the most photographed lanes: go at dawn."
      },
      {
        nome: "Vasa Museum",
        testo: "A warship from 1628 that sank in the harbour on 10 August 1628, about 1,300 metres into its maiden voyage, and was raised almost intact in 1961. It is the best-preserved 17th-century ship in the world, displayed in a large hall with walkways on several levels, from the keel up to deck height.",
        come: "Tram 7 or bus 67 to the Nordiska museet/Vasamuseet stop, or ferry 80 from Nybroplan or 82 from Slussen to Allmänna gränd, an 8-minute walk away. Self-guided visit.",
        quando: "Weekday morning, when it is less busy.",
        tempo: "2 hours",
        costo: "195 SEK adults in low season (2026), more in summer",
        orari: "Daily: 8:30am-6pm in summer, 10am-5pm the rest of the year, Wednesdays until 8pm",
        lat: 59.32807,
        lng: 18.09139,
        url: "https://www.vasamuseet.se",
        consiglio: "Book your ticket online in high season."
      },
      {
        nome: "Stockholm City Hall (Stadshuset)",
        testo: "The red-brick City Hall from 1923 on the water, home of the Nobel Prize banquet in the Blue Hall and of the Golden Hall covered in more than 18 million gold mosaic tiles. The tower is 106 metres high, with a 365-step staircase and a lift: from the top you see the whole city.",
        come: "On foot from the station; the interior can only be seen on a guided tour.",
        quando: "Morning; tour and tower times on the official website, where tickets are sold.",
        tempo: "1 hour",
        costo: "Guided tour of about 45 minutes, just over €10; tower (May-September) on a separate ticket",
        lat: 59.3275,
        lng: 18.055,
        url: "https://stadshuset.stockholm",
        consiglio: "Check hours and tour availability on the website before going."
      },
      {
        nome: "Skansen and Djurgården",
        testo: "Sweden's oldest open-air museum, opened in 1891, with historic houses from all over Sweden, Nordic animals and craftspeople in costume. The island also has ABBA The Museum and the Gröna Lund park.",
        come: "Tram 7 or ferry from the centre. The ticket covers the park, not the separate attractions.",
        quando: "Spring and summer; in winter there are Christmas markets.",
        tempo: "3-4 hours",
        orari: "June to late August 10am-6pm; in winter weekdays 10am-3pm, weekends 10am-4pm (2026-27 calendar)",
        lat: 59.32418,
        lng: 18.102,
        url: "https://www.skansen.se",
        consiglio: "Go up the hill for the view over the city; in December there is a Christmas market."
      },
      {
        nome: "ABBA The Museum",
        testo: "The museum of the world's most famous Swedish pop group, with costumes, gold records and interactive rooms where you sing and dance to their songs. It works even if you are not a fan: cheerful, well made and quick to see.",
        come: "On Djurgården, a few minutes' walk from the Vasa Museum; tram 7 from the centre.",
        quando: "At opening or after 3pm: it is busiest between 10am and 3pm.",
        tempo: "1.5-2 hours",
        costo: "SEK 269-349 depending on the day, about €24-31",
        orari: "Daily 10am-6pm, entry by 30-minute time slot",
        lat: 59.325,
        lng: 18.09639,
        url: "https://abbathemuseum.com",
        consiglio: "Buy online: it is cheaper and you pick your slot."
      },
      {
        nome: "Nobel Prize Museum",
        testo: "Inside the old Stock Exchange on one side of Stortorget, it tells the story of the laureates and their discoveries with objects, videos and short stories. It is small and fits easily into a walk around Gamla Stan.",
        come: "On Stortorget square, Gamla Stan; metro to Gamla stan.",
        quando: "Friday evening, open until 9pm, or on a rainy day.",
        tempo: "1 hour",
        costo: "SEK 160 for adults (2026), about €14; free under 18",
        orari: "Tue-Sun 11am-5pm, Fridays until 9pm; closed Mondays in low season (November 2026)",
        lat: 59.32522,
        lng: 18.07083,
        url: "https://nobelprizemuseum.se/en/"
      },
      {
        nome: "Södermalm and Monteliusvägen",
        testo: "The island south of the centre, with cafés, vintage shops and the city's youngest neighbourhoods. The Monteliusvägen path runs along the cliffs and gives the best view over Gamla Stan, Riddarholmen and City Hall.",
        come: "Metro to Slussen or Mariatorget, then a 10-minute uphill walk.",
        quando: "At sunset, with the light on the water.",
        tempo: "2-3 hours",
        costo: "Free",
        orari: "Path always open",
        lat: 59.32072,
        lng: 18.06031
      },
      {
        nome: "Fotografiska",
        testo: "A museum of contemporary photography in a former customs building on the Södermalm waterfront, with three or four exhibitions that change during the year. The top-floor café has one of the best views over the water and Djurgården.",
        come: "A 10-minute walk from Slussen along Stadsgårdshamnen.",
        quando: "In the evening: it stays open late.",
        tempo: "1.5-2 hours",
        orari: "Open until 11pm (2026)",
        lat: 59.31779,
        lng: 18.08472,
        url: "https://www.fotografiska.com/sto/en/"
      },
      {
        nome: "Moderna Museet (Skeppsholmen)",
        testo: "The modern art museum on Skeppsholmen island, with a collection ranging from Picasso and Dalí to Rauschenberg and Warhol. Outside, in the garden, stand the colourful sculptures of Niki de Saint Phalle.",
        come: "On foot from the centre over the Skeppsholmsbron bridge, or bus 65.",
        quando: "Friday 6-8pm, when entry is free.",
        tempo: "2 hours",
        costo: "SEK 170 (2026), about €15; free up to age 18",
        orari: "10am-6pm, Tuesdays and Fridays until 8pm (2026)",
        lat: 59.32639,
        lng: 18.08361,
        url: "https://www.modernamuseet.se/stockholm/en/"
      },
      {
        nome: "Drottningholm Palace",
        testo: "Since 1981 the king and queen have lived in the south wing; the rest is open to the public. A UNESCO site since 1991, it has baroque gardens and an 18th-century theatre still in use, with a summer opera festival.",
        come: "On the island of Lovön, outside the city; how to get there by public transport on the official website.",
        quando: "Spring and summer, for the gardens.",
        tempo: "half a day",
        costo: "SEK 170 for adults (2026), about €15",
        orari: "Off season Saturdays and Sundays only, 10am-4pm (November 2026); summer calendar on the website",
        lat: 59.32167,
        lng: 17.88694,
        url: "https://www.kungligaslotten.se",
        consiglio: "Leave time for the gardens: they are the most pleasant part of the visit."
      },
      {
        nome: "Stockholm archipelago",
        testo: "Tens of thousands of islands and islets opening east of the city toward the Baltic. The ferry takes you to Vaxholm, Grinda or Sandhamn, with trails, rock beaches and small cafes.",
        come: "Scheduled boats from the centre; tickets and timetables on the Waxholmsbolaget website.",
        quando: "May-September, with the long days.",
        tempo: "full day",
        costo: "Guided 2-2.5 hour trip from about SEK 375, about €33",
        lat: 59.38778,
        lng: 18.73581,
        url: "https://www.waxholmsbolaget.se",
        consiglio: "If you are short on time, the Fjäderholmarna islands are close to the centre."
      },
      {
        nome: "Östermalms Saluhall",
        testo: "The historic covered market of 1888, recently restored, with stalls of fish, cheese, reindeer meat and small restaurants. The right place for a lunch of herring and prawns without booking.",
        come: "Metro to Östermalmstorg.",
        quando: "At lunchtime on weekdays.",
        tempo: "1 hour",
        costo: "Free entry; lunch roughly €15-30",
        orari: "Mon-Fri 9:30am-7pm, Saturday 9:30am-5pm; some restaurants open in the evening",
        lat: 59.33597,
        lng: 18.07809,
        url: "https://ostermalmshallen.se/en/"
      },
      {
        nome: "The metro art stations",
        testo: "More than ninety metro stations are decorated by artists, so the network is called the world's longest art gallery. T-Centralen, with its blue vines on the bare rock, Kungsträdgården and Solna centrum are the best known.",
        come: "With a normal SL ticket; the blue line has the most striking stations.",
        quando: "Outside rush hour, to take photos without crowds.",
        tempo: "1-2 hours",
        costo: "SL single ticket SEK 43, about €4; day pass SEK 180",
        lat: 59.33167,
        lng: 18.06083
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Gamla Stan, Stortorget and the Royal Palace",
          "Nobel Prize Museum or fika in a Gamla Stan café",
          "Afternoon: Vasa Museum on Djurgården",
          "Sunset from Monteliusvägen and dinner in Södermalm"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: guided tour of the Stadshuset",
          "Lunch at Östermalms Saluhall",
          "Afternoon: Skansen or ABBA The Museum",
          "Evening: Fotografiska, open late"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3 in summer: boat into the archipelago (Vaxholm or Fjäderholmarna)",
          "Day 3 in winter: Drottningholm (at weekends) and Moderna Museet",
          "Back via a tour of the metro art stations"
        ]
      }
    ],
    zone: [
      {
        nome: "Gamla Stan",
        testo: "Cobbled lanes and venues, but small rooms and expensive. Evening noise in the main streets.",
        perChi: "Those who want the old-town charm",
        fascia: "€150-280"
      },
      {
        nome: "Norrmalm (near the station)",
        testo: "Handy for trains and the airport. Little atmosphere, many offices.",
        perChi: "Those short of time or leaving early",
        fascia: "€120-220"
      },
      {
        nome: "Södermalm",
        testo: "An island with restaurants, old pubs and the view from Fjällgatan; a few minutes by metro from the centre.",
        perChi: "Those looking for bars and young districts",
        fascia: "€100-200"
      },
      {
        nome: "Östermalm",
        testo: "Wide avenues, the covered market and good restaurants; walking distance from Djurgården and the centre. The most expensive area.",
        perChi: "Those who want an elegant, quiet neighbourhood",
        fascia: "€160-300"
      }
    ],
    sapori: [
      {
        nome: "Köttbullar",
        testo: "Swedish meatballs with cream sauce, mash and lingonberries: the most famous dish."
      },
      {
        nome: "Fika and kanelbullar",
        testo: "The coffee break with cinnamon or cardamom swirls, in every cafe."
      },
      {
        nome: "Semla",
        testo: "A cardamom bun with almond paste and cream, a winter treat around Shrove Tuesday."
      },
      {
        nome: "Gravlax",
        testo: "Salmon cured with dill and sweet mustard, to try in traditional restaurants."
      }
    ],
    attenzioni: [
      "Almost everything is paid by card: many places do not accept cash.",
      "Drinks above 3.5% alcohol are sold only at Systembolaget, which is closed on Sundays and public holidays.",
      "From Arlanda airport the Arlanda Express reaches the centre in 18 minutes, leaving every 12-15 minutes; there are also other trains and buses: taxis without an agreed fare can be very expensive.",
      "Pickpockets in the central station and on the metro at rush hour."
    ],
    faq: [
      {
        domanda: "How many days do you need in Stockholm?",
        risposta: "Two days are enough for Gamla Stan, the Vasa Museum, the Stadshuset and Skansen. With three days you add the archipelago in summer or Drottningholm."
      },
      {
        domanda: "How do you get from Arlanda airport to the centre?",
        risposta: "The Arlanda Express reaches Central Station in about 20 minutes and costs about SEK 349. The SL commuter train and Flygbussarna coaches are slower but cheaper."
      },
      {
        domanda: "Is Stockholm expensive?",
        risposta: "Less than Oslo and Copenhagen, but more than Italy: a simple meal costs €12-20, an average dinner €35-45 per person, a beer €6-9."
      },
      {
        domanda: "Do you need to book the Vasa Museum?",
        risposta: "It is not compulsory, but in summer and at weekends buying online saves queuing. ABBA The Museum only works with time slots."
      },
      {
        domanda: "Do you need cash in Sweden?",
        risposta: "Hardly ever: cards are accepted everywhere, metro and stalls included. Some places do not take cash at all."
      },
      {
        domanda: "When is the best time to visit Stockholm?",
        risposta: "From May to September, with very long days and boats to the archipelago. December has Christmas markets at Skansen and in Gamla Stan, but it gets dark early."
      }
    ],
    gite: [
      {
        nome: "Uppsala",
        distanza: "40 minutes by train",
        come: "Frequent SJ and regional trains from Central Station.",
        testo: "Scandinavia's oldest university town, with the largest Gothic cathedral in the north, the castle and the Viking burial mounds of Gamla Uppsala a few kilometres away."
      },
      {
        nome: "Vaxholm",
        distanza: "1 hour by boat",
        come: "Waxholmsbolaget boats from Strömkajen, or bus 670 from Tekniska högskolan.",
        testo: "The closest and easiest archipelago town, with wooden houses, a fortress on the islet in front of the harbour and cafés on the water."
      },
      {
        nome: "Sigtuna",
        distanza: "50 km",
        come: "Commuter train to Märsta, then bus 570 or 575.",
        testo: "Sweden's oldest town, founded around 980, with a main street of low houses, ruins of medieval churches and rune stones along the roads."
      }
    ],
    esperienzeSlugs: ['vasamuseet-stoccolma', 'gamla-stan-passeggiata', 'abba-museum-stoccolma', 'arcipelago-stoccolma-in-barca'],
    tripSlugs: ['lapponia-svedese-abisko', 'capitali-nordiche'],
    imageAlt: "Colorful houses of Stockholm's old town on the water in winter",
    immagine: '/images/svezia/stoccolma-stock.jpg',
  },
  {
    slug: 'kiruna',
    paeseSlug: 'svezia',
    ordine: 2,
    nome: 'Kiruna',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 nights in total (outbound and return), logistical base for Abisko',
    visitataPersonalmente: true,
    introduzione: "Sweden's northernmost city, the logistical base for Abisko. It is famous for the LKAB iron mine, which is forcing the city to move, piece by piece, a few kilometers further on.",
    percheAndarci: "It's the obligatory passage to Abisko, but it has an identity of its own: the red wooden church, the center in the midst of an urban transformation and, not far away, the ICEHOTEL.",
    cosaVedere: [
      "Kiruna's red wooden church, one of the city's landmark buildings",
      "The city center, which in the coming years will be dismantled and rebuilt elsewhere for the expansion of the mine",
    ],
    cosaFare: [
      "A walk around the center",
      "Relaxing in the spa at the Elite Hotel Frost after the more intense days in Abisko",
      "Guided tour of the LKAB mine (3 hours, down to 540 m deep; see the dedicated experience page)",
      "Half-day trip to the ICEHOTEL in Jukkasjärvi, about 20 minutes away (see the dedicated experience page)",
    ],
    doveDormire:
      "On the way out I slept at the STF Malmfältens Folkhögskola, a simple, basic accommodation run by the Svenska Turistföreningen (the Swedish hiking association, very present throughout the region). On the way back at the Elite Hotel Frost - Hotel & Spa: a nice step up in quality, with an in-house spa ideal for recovering after the coldest days in Abisko.",
    doveMangiare: "I have no restaurants to recommend. The indicative budget I had planned for: breakfasts €10-15/day, lunches and dinners €30-50 per meal.",
    comeArrivare: "You fly into Kiruna airport (KRN), with domestic flights from Stockholm Arlanda: the bus timed to arrivals takes about 20 minutes to the centre for 100-110 SEK (about €10), a taxi costs 300-400 SEK. Alternatively, the SJ train from Stockholm towards Narvik stops in Kiruna. From Kiruna to Abisko you continue by train, about an hour and a quarter, or by car on the E10 (about 96 km).",
    comeSpostarsi: 'On foot in the center; train to Abisko.',
    periodoMigliore: "the same as Abisko: from late December to March for the aurora, with February-March much cheaper",
    costi: "The centre is free to visit; the church is closed until its planned reopening in 2027. The LKAB mine costs 590 SEK (about €52) per person for the 3-hour guided tour. The ICEHOTEL costs 325 SEK (about €29) for a day visit only until December 2026, from 3,995 SEK (about €350) per night for 2 people to sleep in an ice room. Double room in a mid-range hotel in town: roughly €100-150/night. Indicative daily budget per person: €80-110 with an STF hostel and supermarket food; €160-230 with a hotel in the centre and two meals out (€30-50 per meal); over €400 with a night at the ICEHOTEL and a guided tour.",
    erroriDaEvitare: [],
    miaEsperienza:
      "For me Kiruna was a practical base more than a destination: on the way out the bareness of the STF, on the way back the spa at the Elite Hotel Frost, and in the background the red church and the center in transformation.",
    luoghi: [
      {
        nome: "Kiruna Church",
        testo: "A red wooden church from 1912 by Gustaf Wickman, considered one of the largest wooden buildings in Sweden. On 19 and 20 August 2025 it was moved in one piece about 5 km, on remote-controlled trailers, to the new centre, between the cemetery and the new square, because of the mine's expansion. Work is under way inside: reopening is planned for 2027.",
        come: "In Kiruna's new centre, on foot; for now it can only be seen from outside.",
        quando: "Daytime, as winter daylight is short.",
        tempo: "30 minutes-1 hour",
        costo: "closed to the public until its planned reopening in 2027",
        orari: "interior closed for works until 2027; the exterior can be seen at any time",
        lat: 67.84959,
        lng: 20.28885,
        url: "https://www.svenskakyrkan.se/kiruna",
        consiglio: "The new centre is under construction: a chance to see a town on the move.",
      },
      {
        nome: "LKAB iron mine",
        testo: "The largest and most modern underground iron mine in the world; the guided tour, about 3 hours long, goes down to LKAB's visitor centre 540 metres underground and explains why Kiruna is relocating.",
        come: "Kiruna Lapland guided tour by bus from the Kiruna Tourist Center (Malmvägen 9B); days and languages change with the season.",
        quando: "All year round; places sell out quickly in winter.",
        tempo: "3 hours",
        costo: "590 SEK adults, about €52 (2026), including transfer, guide and coffee",
        orari: "days, times and languages vary with the season; check-in 15 minutes before departure, online booking",
        url: "https://kirunalapland.se/en/mine-tour/",
        consiglio: "Bring warm clothes: it's cold underground.",
      },
      {
        nome: "ICEHOTEL in Jukkasjärvi",
        testo: "The ice hotel rebuilt every winter with sculptures and themed suites in mid-December, and left to melt into the Torne River in April. You can visit without staying; ICEHOTEL 365, with the ICEBAR and the art suites, is open all year.",
        come: "In Jukkasjärvi, about 20 km from Kiruna: by car or on Länstrafiken Norrbotten bus 501 (pay by card on board, few departures at weekends).",
        quando: "December to April for the ice hotel itself.",
        tempo: "1-2 hours",
        costo: "day visit 325 SEK adults, about €29 (April-December 2026); children 4-12 39 SEK",
        orari: "ICEHOTEL 365 exhibition daily 11am-6pm until 11 December 2026, then 10am-6pm until 10 April 2027; ICEBAR 11am-8pm from December 2026 to March 2027",
        lat: 67.85021,
        lng: 20.59642,
        url: "https://www.icehotel.com/tickets-opening-hours",
        consiglio: "Card only: cash is not accepted anywhere on site.",
      },
      {
        nome: "Jukkasjärvi Church",
        testo: "A small red wooden church with a separate bell tower: the current building dates from 1726 but keeps parts from 1607. Inside, the altarpiece painted by Bror Hjorth is the reason to go in.",
        come: "In Jukkasjärvi, a few minutes' walk from the ICEHOTEL: it fits into the same half day.",
        quando: "During the day, before or after the ICEHOTEL visit.",
        tempo: "30 minutes",
        orari: "daily 10am-3pm, all year",
        lat: 67.84663,
        lng: 20.62125,
        url: "https://kirunalapland.se/en/destinations/jukkasjarvi/",
      },
      {
        nome: "Nutti Sámi Siida and Márkanbáiki museum",
        testo: "An open-air museum on Sámi culture in Jukkasjärvi: nomadic life, the history of reindeer herding, and reindeer you can feed by hand. There's a café hut serving Sámi lunch and a craft shop.",
        come: "In Jukkasjärvi, next to the church; run by Nutti Sámi Siida, which also organises reindeer sled trips.",
        quando: "Winter: in summer most of the herd is in the mountains and only a few reindeer stay at the museum.",
        tempo: "1-2 hours",
        orari: "museum daily 10am-4pm; 24 December 10am-2pm",
        lat: 67.84698,
        lng: 20.62,
        url: "https://nutti.se",
      },
      {
        nome: "Kristallen town hall and the new centre",
        testo: "Kristallen town hall, inaugurated in 2018, was the first building of the new centre, about three kilometres east of old Kiruna. Blocks, a culture centre, a bathhouse and schools are going up around it: this is where the town's move makes sense.",
        come: "On foot from the church or the Elite Hotel Frost, all in the same district.",
        quando: "During the day; in winter in the midday light window.",
        tempo: "1 hour",
        lat: 67.849,
        lng: 20.30277,
        url: "https://kirunalapland.se/en/city-transformation/",
      },
      {
        nome: "Luossavaara",
        testo: "The hill north of town, with the Luossabacken ski slopes and trails. From the top you see the old and new centres and, opposite, the mine mountain.",
        come: "By car or taxi to the base of the slopes; in winter by ski lift or on snowshoes.",
        quando: "At sunset or on clear nights, away from the town lights.",
        tempo: "1-2 hours",
        lat: 67.87273,
        lng: 20.21002,
      },
      {
        nome: "Elite Hotel Frost and spa",
        testo: "The spa in our Kiruna hotel, ideal for recovering after the days in the cold of Abisko.",
        come: "In Kiruna's new centre.",
        quando: "Evening, after returning from Abisko.",
        tempo: "2 hours",
        lat: 67.84956,
        lng: 20.30609,
        consiglio: "One of the experiences worth having after the coldest phase.",
      },
    ],
    sapori: [
      {
        nome: "Reindeer",
        testo: "Renskav (thin slices of reindeer with mash and lingonberries), the typical dish of the North."
      },
      {
        nome: "Cloudberries (hjortron)",
        testo: "Orange fruit typical of Lapland, as jam or with ice cream."
      },
      {
        nome: "Arctic char",
        testo: "Freshwater fish served smoked or pan-seared."
      }
    ],
    attenzioni: [
      "In winter the temperature can drop below -30 degrees: technical layered clothing, not cotton.",
      "The mine and the ICEHOTEL are booked ahead in peak months.",
      "The aurora is not guaranteed: plan several evenings in the area."
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning in the new centre: Kiruna Church (from outside) and Kristallen town hall",
          "Lunch in the centre",
          "Afternoon in Jukkasjärvi on bus 501: ICEHOTEL, Jukkasjärvi Church and Márkanbáiki museum",
          "Evening at the Elite Hotel Frost spa or chasing the aurora outside town",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: LKAB mine tour (3 hours, book ahead)",
          "Afternoon on Luossavaara hill for the view over town",
          "Evening on a guided aurora outing",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: train to Abisko, about an hour and a quarter",
          "Abiskojåkka canyon in daylight and an evening at the Aurora Sky Station",
        ],
      },
    ],
    zone: [
      {
        nome: "Kiruna new centre",
        perChi: "those who want restaurants, shops and the airport bus close by",
        testo: "Home to the Elite Hotel Frost and the other town hotels, near the church and town hall. Handy for the mine and for getting around by bus.",
        fascia: "€110-180",
      },
      {
        nome: "Jukkasjärvi",
        perChi: "those who want to sleep at the ICEHOTEL or by the Torne River",
        testo: "The ICEHOTEL village, about 20 km away: warm rooms all year and ice rooms from December to April. In the evening there are few places to eat besides the hotel.",
        fascia: "€150-350 (ice room from 3,995 SEK for 2)",
      },
      {
        nome: "Kurravaara and aurora camps",
        perChi: "those looking for real darkness and cabins with a view",
        testo: "Small camps and cabins outside town, away from the lights, designed for watching the sky from your doorstep. You need a car or the property's transfer.",
        fascia: "€200-250",
      },
    ],
    gite: [
      {
        nome: "Abisko",
        distanza: "about 1 hour 15 minutes by train, 96 km",
        come: "Train on the Narvik line to Abisko Turiststation stop; by car on the E10.",
        testo: "The national park with its dry microclimate, the Aurora Sky Station on Mount Nuolja and Lake Torneträsk: it's the reason for the trip, and deserves at least two nights.",
      },
      {
        nome: "Jukkasjärvi",
        distanza: "about 20 km, 20 minutes",
        come: "Länstrafiken Norrbotten bus 501 or car.",
        testo: "ICEHOTEL, an eighteenth-century church and a Sámi museum in the same half day.",
      },
      {
        nome: "Nikkaluokta and Kebnekaise",
        distanza: "about 70 km by car",
        come: "By car or summer bus to Nikkaluokta; from there a trail to the Kebnekaise mountain station.",
        testo: "The gateway to Sweden's highest mountain. It's a summer trip: in winter the area is only reachable by snowmobile with guides.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Kiruna?",
        risposta: "One day is enough for the centre and Jukkasjärvi; with two you can add the LKAB mine, which runs only on some days. Those heading to Abisko usually sleep in Kiruna on the way there and back.",
      },
      {
        domanda: "Kiruna or Abisko as a base for the northern lights?",
        risposta: "Abisko, for its dry microclimate and the darkness of the park. Kiruna is handier for flights and services: one night here and two or three in Abisko works well.",
      },
      {
        domanda: "Do you need to book the LKAB mine tour?",
        risposta: "Yes, tours are booked online on the Kiruna Lapland website and leave from the Kiruna Tourist Center. Days and languages change with the season and in winter places sell out quickly.",
      },
      {
        domanda: "Can you visit the ICEHOTEL without staying?",
        risposta: "Yes, with a day ticket: 325 SEK for adults until December 2026. Payment is by card only.",
      },
      {
        domanda: "How do you get from Kiruna to the ICEHOTEL?",
        risposta: "By Länstrafiken Norrbotten bus 501, car or taxi: it's about 20 km. Departures are few at weekends, so check the timetable on ltnbd.se.",
      },
      {
        domanda: "Is Kiruna Church open?",
        risposta: "No: it was moved to the new centre in August 2025 and the interior stays closed until the planned reopening in 2027. It can always be seen from outside.",
      },
    ],
    esperienzeSlugs: ['icehotel-jukkasjarvi', 'miniera-lkab-kiruna'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: "Kiruna's red wooden church under a Swedish winter sky",
    immagine: '/images/svezia/kiruna-stock.jpg',
  },
  {
    slug: 'abisko',
    paeseSlug: 'svezia',
    ordine: 3,
    nome: 'Abisko',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 nights, the heart of the trip',
    visitataPersonalmente: true,
    introduzione: "The reason for the trip: a national park with a dry microclimate that makes it one of the best places in the world to see the northern lights, and the base for snowmobiling, husky sledding and the Aurora Sky Station.",
    percheAndarci: "First of all for the northern lights. Then for the Arctic nature of the national park and for the two most adrenaline-filled activities of the trip.",
    cosaVedere: [
      "The view from the Aurora Sky Station, at the top of Mount Nuolja",
      "The frozen lake of the national park",
    ],
    cosaFare: [
      "Aurora Sky Station: chairlift and panoramic dinner (see the dedicated experience page)",
      "Snowmobiling on the frozen lake (see the dedicated experience page)",
      "Husky sledding with aurora hunting (see the dedicated experience page)",
    ],
    doveDormire:
      "I slept at the STF Abisko Turiststation, the historic mountain station inside the national park, from which you set off directly for the Aurora Sky Station chairlift. It is basic, but set in the park it has an atmosphere I haven't found elsewhere.",
    doveMangiare: "I have no places to recommend: breakfasts are often included in the STF properties, lunches and dinners around the average I had planned for (€30-50 per meal).",
    comeArrivare: "From Kiruna you arrive by train on the Narvik line, about an hour and a quarter through an increasingly bare landscape: Abisko has two stops, Abisko Östra for the village and Abisko Turiststation, the right one for the STF station, the naturum and the chairlift. There are also direct SJ trains from Stockholm. By car it's about 96 km from Kiruna on the E10; from Kiruna airport the train or a transfer is the best option.",
    comeSpostarsi: 'On foot in the village; organized excursions for snowmobiles and huskies.',
    periodoMigliore: 'from late December to March; February-March costs much less while keeping high chances of aurora',
    costi: "Activities, indicative price per person: Aurora Sky Station with guided evening visit from 1,295 SEK (about €120) and mountaintop dinner from 2,395 SEK (about €215), STF price list for the 2026-27 season; chairlift only from 260 SEK (about €23); guided snowmobile on the frozen lake about €100-110 (self-drive €150-250); evening husky sledding with aurora hunt €240 (shorter daytime versions from €70). Costs of the whole trip per person: flights €600-645, accommodation €400-600, internal transport €80 (scenic train + airport transfer), excursions €450-500 for 3 guided tours. Indicative total budget from €1,500 (basic) to €1,800 (top level). Per day, per person: about €80-120 with a simple STF room and simple meals; €200-300 with one or two guided activities; over €400 with the mountaintop dinner and self-drive snowmobiling.",
    erroriDaEvitare: [
      "Going at New Year if the goal is to save money: it is the most expensive time of the year to fly and sleep in the area",
      "Not keeping an extra margin on transport: with the extreme cold trains are sometimes canceled (not often, but it happens), and in those cases the local taxis tend to raise prices a bit",
    ],
    miaEsperienza:
      "Abisko was the heart of the trip: the dinner at altitude at the Aurora Sky Station, the snowmobile on the frozen lake and the husky sledding under a sky that at some point really lit up. They are the strongest memories of the week.",
    luoghi: [
      {
        nome: "Aurora Sky Station",
        testo: "A station at the top of Mount Nuolja, at 900 metres, reached by a 20-minute chairlift ride, from which you watch the aurora in one of the clearest spots in Sweden. There's also a panoramic dinner.",
        come: "Chairlift from STF Abisko Turiststation. Two options to book in advance, with limited places: Night Visit (guide, return chairlift, thermal overalls and boots) and Northern Lights Dinner.",
        quando: "2026-27 season from 19 October to 27 March; in strong wind the chairlift stops.",
        tempo: "3-4 hours",
        costo: "Night Visit from 1,295 SEK, dinner from 2,395 SEK per person (2026-27 season, STF price list); chairlift only from 260 SEK",
        orari: "winter 2026-27 from 8:30pm to 1am; summer 2026 daytime 9:30am-4pm (12 June-20 September) and evenings 8pm-1:30am (12 June-19 July)",
        lat: 68.36169,
        lng: 18.72341,
        url: "https://www.auroraskystation.se",
        consiglio: "I had dinner up there: it is among the strongest memories of the week.",
      },
      {
        nome: "Frozen Lake Torneträsk and snowmobiling",
        testo: "Abisko's great lake, 70 km long, is usually frozen from December to June and can be crossed by snowmobile with a guide, even in the evening under the aurora.",
        come: "Excursion with a local operator, departing from Abisko: in a sled pulled by the guide's snowmobile, or self-drive with a driving licence.",
        quando: "Winter, when the lake is frozen: dates with the operator.",
        tempo: "2-3 hours",
        costo: "guided about €100-110 (2 hours); self-drive €150-250 (half day)",
        lat: 68.367,
        lng: 19.1,
        consiglio: "Warm clothes are needed; driving requirements on the operator's website. You often stop to look at the sky.",
      },
      {
        nome: "Husky sledding",
        testo: "Driving a husky dog sled around Abisko, with a stop for tea and an aurora hunt.",
        come: "Book with a local operator; pick-up at STF Abisko Turiststation, where it's best to be 45 minutes early.",
        quando: "Winter, with snow.",
        tempo: "half day",
        costo: "evening outing with aurora hunt €240; shorter daytime versions from €70",
        consiglio: "Under the aurora it's an emotion that stays with you.",
      },
      {
        nome: "Abisko National Park and Lapporten",
        testo: "The park at the foot of the mountains, with the U-shaped valley of Lapporten, the 'gate of Lapland', in the background. Precipitation is only 300 millimetres a year, which is why the sky is so often clear.",
        come: "Train from Kiruna to Abisko Turiststation; the naturum and the STF station are about 800 metres away.",
        quando: "Summer for trekking, winter for the aurora.",
        tempo: "full day",
        costo: "free entry to the park",
        lat: 68.26622,
        lng: 18.98619,
        url: "https://www.sverigesnationalparker.se/en/parks/abisko-national-park/",
        consiglio: "Trails are always open, but in winter you need microspikes or snowshoes.",
      },
      {
        nome: "Abiskojåkka canyon",
        testo: "The river running from Lake Abiskojaure to Torneträsk carves a narrow gorge a few minutes from the STF station. It's the easiest walk in the park, with an accessible stretch of trail and a rest area.",
        come: "On foot from the naturum or STF Abisko Turiststation; in winter microspikes help on the ice.",
        quando: "In daylight; in winter the midday window.",
        tempo: "1 hour",
        costo: "free",
        lat: 68.36389,
        lng: 18.7875,
      },
      {
        nome: "Naturum Abisko",
        testo: "The park's visitor centre: an exhibition on geology, flora and fauna and on the effects of climate change on the mountains, with nature guides, a small library and a shop. Upstairs there are temporary exhibitions and screenings.",
        come: "Next to STF Abisko Turiststation, about 800 metres from the train stop; outside there's an information point that is always open.",
        quando: "Before setting off on the trails.",
        tempo: "1 hour",
        orari: "2026-27: 1-26 September Tuesday-Saturday 9am-5pm; 1 December-13 February Tuesday, Thursday and Saturday 2-5pm; from 15 February same days 1-5pm",
        lat: 68.35812,
        lng: 18.78489,
        url: "https://www.lansstyrelsen.se/norrbotten/besoksmal/naturum-i-norrbottens-lan/naturum-abisko.html",
      },
      {
        nome: "Kungsleden",
        testo: "The 'King's Trail', 425 km long, starts right at STF Abisko Turiststation and climbs along the Abiskojåkka river. Even without the full trek, the first kilometres make a lovely walk through the birches.",
        come: "Start on foot from the STF station; gear can be rented in the shop.",
        quando: "Late June to September for walking; in winter the first stretch is done on snowshoes or skis.",
        tempo: "from 2 hours to several days",
        costo: "free",
        lat: 68.35738,
        lng: 18.78247,
        url: "https://www.swedishtouristassociation.com/facilities/stf-abisko-mountain-station/",
      },
      {
        nome: "Mount Nuolja and the midnight sun",
        testo: "In summer Nuolja becomes the place to see the midnight sun: from early June Abisko has polar day. You go up by chairlift or on foot and walk down.",
        come: "Chairlift from the valley station near the STF, or the trail from the station.",
        quando: "Mid-June to mid-July, when the evening chairlift runs.",
        tempo: "3-4 hours",
        costo: "chairlift from 260 SEK, about €23",
        orari: "evening chairlift 8pm-1:30am from 12 June to 19 July (summer 2026)",
        lat: 68.37256,
        lng: 18.69877,
        url: "https://auroraskystation.se/sommar/linbana-sommar/",
      },
    ],
    sapori: [
      {
        nome: "Dinner at the Aurora Sky Station",
        testo: "Fixed menu with local ingredients, at the top of the mountain."
      },
      {
        nome: "STF breakfast",
        testo: "STF facilities often include breakfast: a simple, generous buffet."
      }
    ],
    attenzioni: [
      "The Aurora Sky Station and chairlift can close in strong wind or storm.",
      "Whoever drives a snowmobile is liable for damage: check excess and insurance.",
      "Abisko has few services: bring the essentials with you."
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Arrive by train at Abisko Turiststation stop",
          "Naturum and Abiskojåkka canyon in daylight",
          "Dinner at the STF and an evening at the Aurora Sky Station (Night Visit or mountaintop dinner)",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: snowmobile on frozen Torneträsk",
          "Evening: husky sledding with aurora hunt",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: first stretch of the Kungsleden on snowshoes, or a trip to Björkliden",
          "Free evening for another aurora hunt, if the sky is clear",
          "In summer: Lapporten and the midnight sun from Nuolja",
        ],
      },
    ],
    zone: [
      {
        nome: "STF Abisko Turiststation",
        perChi: "those who want the chairlift and trails on the doorstep",
        testo: "The historic station inside the park, with rooms, hostel, restaurant and a shop with rentals. The Kungsleden starts here and this is where you take the chairlift.",
        fascia: "€90-160",
      },
      {
        nome: "Abisko Östra",
        perChi: "those who prefer a lodge or a cabin with a kitchen",
        testo: "The village proper, about 4 km east of the STF station, with lodges, cabins and a few restaurants; it has its own train stop.",
        fascia: "from about €180",
      },
      {
        nome: "Björkliden",
        perChi: "those who want a mountain resort with ski slopes",
        testo: "About 9 km from Abisko on the E10, with hotels, cabins and slopes; it also has Sweden's northernmost golf course.",
      },
    ],
    gite: [
      {
        nome: "Björkliden",
        distanza: "about 9 km, 10 minutes by car",
        come: "By car on the E10 or by train, with its own stop.",
        testo: "The nearest ski village, with slopes and trails above Torneträsk.",
      },
      {
        nome: "Riksgränsen",
        distanza: "about 36 km, half an hour by car",
        come: "By car on the E10 or by train on the Narvik line.",
        testo: "The last Swedish village before the Norwegian border, among mountains and lakes, known for late-season skiing.",
      },
      {
        nome: "Narvik",
        distanza: "about 77 km, just over an hour by car",
        come: "Train on the iron ore line or car on the E10 across the border.",
        testo: "The Norwegian port where the line carrying ore from Kiruna ends: in one day you go from the frozen lake to the fjords.",
      },
      {
        nome: "Kiruna and Jukkasjärvi",
        distanza: "about 1 hour 15 minutes by train to Kiruna",
        come: "Train to Kiruna, then bus 501 to Jukkasjärvi.",
        testo: "The ICEHOTEL, the Sámi museum and the town moving for the mine, best combined with the return journey.",
      },
    ],
    faq: [
      {
        domanda: "How many nights do you need in Abisko to see the northern lights?",
        risposta: "At least two, better three: the aurora isn't guaranteed and the weather changes from one evening to the next. With more evenings you can put the most expensive activity on the one with the best sky.",
      },
      {
        domanda: "When can you see the aurora in Abisko?",
        risposta: "When it's dark, so from September to March; the Aurora Sky Station opens in the evening from 19 October to 27 March in the 2026-27 season. From early June there's polar day and the aurora can't be seen.",
      },
      {
        domanda: "Do you need to book the Aurora Sky Station?",
        risposta: "Yes, the Night Visit and dinner have limited places and are booked online with STF. In strong wind the chairlift stops.",
      },
      {
        domanda: "Which train stop do you get off at?",
        risposta: "Abisko Turiststation for the STF station, the naturum and the chairlift; Abisko Östra for the village. They are about 4 km apart.",
      },
      {
        domanda: "Is Abisko worth it in summer too?",
        risposta: "Yes, for the midnight sun from Nuolja, the Kungsleden and the park trails. In summer the chairlift runs during the day and, from mid-June to mid-July, in the evening too.",
      },
      {
        domanda: "What are winter temperatures like?",
        risposta: "Often between -20 and -30 °C in the coldest weeks, but it's a dry cold. You need technical layers, a balaclava and double gloves, especially up the mountain and on the snowmobile.",
      },
    ],
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: "Green northern lights above the snow-covered mountains of Abisko National Park",
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
