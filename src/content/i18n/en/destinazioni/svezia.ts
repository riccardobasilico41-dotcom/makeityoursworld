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
      "International flight to Stockholm Arlanda. For those arriving as the second stop of the \"Nordic Capitals\" itinerary, from Copenhagen there is the direct SJ train (about 5 hours) or the flight (about 1 hour).",
    comeSpostarsi: "For airport-hotel transit alone it isn't needed. For a full stay there are the metro (Tunnelbana), buses and city ferries with an integrated SL ticket; the old town is also easy to walk.",
    periodoMigliore: 'May-September for the weather and for archipelago outings, which work better with the long days',
    costi:
      "Single SL ticket 43 SEK, day pass 180 SEK. Vasamuseet 195-240 SEK depending on the season. ABBA The Museum 269-349 SEK. Archipelago trip from about 375 SEK (about €33) for a guided 2-2.5 hour outing.",
    erroriDaEvitare: [],
    miaEsperienza:
      "For me Stockholm was just a logistical stop, on the way out and on the way back: just enough time to sleep between one flight and the next.",
    luoghi: [
      {
        nome: "Gamla Stan and the Royal Palace",
        testo: "The medieval old town on an island, with narrow lanes, colourful houses and the Stortorget square. The Royal Palace is one of the largest in Europe still in use, with the changing of the guard in the outer courtyard.",
        come: "On foot from the central station (10 minutes) or by metro to Gamla stan.",
        quando: "Early morning, before the groups; the changing of the guard is at noon on the days given on the royal site.",
        tempo: "2-3 hours",
        url: "https://www.kungligaslotten.se",
        consiglio: "Mårten Trotzigs gränd and Västerlånggatan are the most photographed lanes: go at dawn."
      },
      {
        nome: "Vasa Museum",
        testo: "A warship from 1628 that sank after 1,300 metres in the harbour on its maiden voyage and was recovered almost intact in 1961. It is one of the best-preserved ancient ships in the world, displayed in a large hall with walkways on several levels, from the keel up to deck height.",
        come: "Tram 7 or bus 67 to Djurgården, or ferry from the centre. Free visit, with guided tours in English.",
        quando: "Weekday morning; it is the most visited museum in Scandinavia.",
        tempo: "2 hours",
        costo: "195 SEK adults in low season (2026), more in summer",
        url: "https://www.vasamuseet.se",
        consiglio: "Book your ticket online in high season."
      },
      {
        nome: "Stockholm City Hall (Stadshuset)",
        testo: "The red-brick City Hall of 1923 on the water, home of the Nobel Prize banquet in the Blue Hall and the Golden Hall with 18 million gold tiles. The tower has a seasonal viewing deck.",
        come: "On foot from the station (10 minutes); the visit is guided only.",
        quando: "Morning, with an English tour; the tower is open in summer.",
        tempo: "1 hour",
        url: "https://stadshuset.stockholm",
        consiglio: "Check hours and tour availability on the website before going."
      },
      {
        nome: "Skansen and Djurgården",
        testo: "The oldest open-air museum in the world (1891), with historic houses from all over Sweden, Nordic animals and craftspeople in costume. The island also has ABBA The Museum and the Gröna Lund park.",
        come: "Tram 7 from the centre. The ticket covers the park, not the separate attractions.",
        quando: "Spring and summer; in winter there are Christmas markets.",
        tempo: "3-4 hours",
        url: "https://www.skansen.se",
        consiglio: "Take the funicular up the hill for the view over the city."
      },
      {
        nome: "Drottningholm Palace",
        testo: "The royal family's residence, a UNESCO site, with baroque gardens and an eighteenth-century theatre still working. It is the best visit outside the centre.",
        come: "By metro to Brommaplan then bus, or by boat from Stadshuset (summer), about 1 hour.",
        quando: "Spring-summer, by boat.",
        tempo: "half a day",
        url: "https://www.kungligaslotten.se",
        consiglio: "The boat from Stadshuset is the most beautiful way to arrive at the palace."
      },
      {
        nome: "Stockholm archipelago",
        testo: "Over 30,000 islands and islets opening east of the city toward the Baltic. The ferry takes you to Vaxholm, Grinda or Sandhamn, with trails, rock beaches and small cafes.",
        come: "Waxholmsbolaget ferries from Strömkajen; tickets and timetables on the public transport site.",
        quando: "May-September, with the long days.",
        tempo: "full day",
        url: "https://www.waxholmsbolaget.se",
        consiglio: "For those short of time, Fjäderholmarna is only 25 minutes from the centre."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Gamla Stan and Royal Palace",
          "Lunch with fika in Gamla Stan",
          "Afternoon: Vasa Museum",
          "Evening: stroll in Södermalm"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Stadshuset",
          "Skansen and Djurgården",
          "Dinner in Östermalm"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Drottningholm or the archipelago by boat"
        ]
      }
    ],
    zone: [
      {
        nome: "Gamla Stan",
        perChi: "Those who want the old-town charm",
        testo: "Cobbled lanes and venues, but small rooms and expensive. Evening noise in the main streets."
      },
      {
        nome: "Norrmalm (near the station)",
        perChi: "Those short of time or leaving early",
        testo: "Handy for trains and the airport. Little atmosphere, many offices."
      },
      {
        nome: "Södermalm",
        perChi: "Those looking for bars and young districts",
        testo: "An island with restaurants, old pubs and the view from Fjällgatan; a few minutes by metro from the centre."
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
        testo: "A cardamom bun with almonds and cream, between February and Easter."
      },
      {
        nome: "Gravlax",
        testo: "Salmon cured with dill and sweet mustard, to try in traditional restaurants."
      }
    ],
    attenzioni: [
      "Almost everything is paid by card: many places do not accept cash.",
      "Strong alcohol is bought only at Systembolaget, closed on Sundays.",
      "From Arlanda airport the Arlanda Express or the train is better: taxis without a fixed price can cost a lot.",
      "Pickpockets in the central station and on the metro at rush hour."
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
    comeArrivare: 'Domestic flight from Stockholm Arlanda; then scenic train to Abisko.',
    comeSpostarsi: 'On foot in the center; train to Abisko.',
    periodoMigliore: "the same as Abisko: from late December to March for the aurora, with February-March much cheaper",
    costi:
      "The centre can be visited for free; the church is closed until its planned reopening in 2027. The LKAB mine costs about 590 SEK (€52) per person for the 3-hour guided tour. The ICEHOTEL costs 349 SEK (€31) for daytime entry only, from 3,995 SEK (€350) a night for 2 people to sleep there. Double room in a mid-range hotel in town: roughly €100-150/night.",
    erroriDaEvitare: [],
    miaEsperienza:
      "For me Kiruna was a practical base more than a destination: on the way out the bareness of the STF, on the way back the spa at the Elite Hotel Frost, and in the background the red church and the center in transformation.",
    luoghi: [
      {
        nome: "Kiruna Church",
        testo: "A red wooden church from 1912 by Gustaf Wickman, considered one of the largest wooden buildings in Sweden. On 19 and 20 August 2025 it was carried in one piece about 5 km, on remote-controlled trailers, to the new centre, between the cemetery and the new square, because of the mine's expansion. Work on the interior is under way: reopening is planned for 2027.",
        come: "In Kiruna's new centre, on foot; for now it can only be seen from outside.",
        costo: "closed to the public until the reopening planned for 2027",
        url: "https://www.svenskakyrkan.se/kiruna",
        quando: "Daytime, as winter daylight is short.",
        tempo: "30 minutes-1 hour",
        consiglio: "The new centre is under construction: a chance to see a city on the move."
      },
      {
        nome: "LKAB iron mine",
        testo: "The largest underground iron mine in the world; the guided tour of about 3 hours goes down to 540 metres. It explains why Kiruna is moving.",
        come: "Guided tour run by Kiruna Lapland, by bus from the Kiruna Tourist Center (Malmvägen 9B); days and languages vary with the season.",
        quando: "All year; places sell out fast in winter.",
        tempo: "3 hours",
        costo: "590 SEK adults (2026), including transfer, guide and coffee",
        url: "https://kirunalapland.se/en/mine-tour/",
        consiglio: "Bring warm clothes: underground the temperature is low."
      },
      {
        nome: "ICEHOTEL in Jukkasjärvi",
        testo: "The ice hotel rebuilt every winter with sculptures and themed suites. You can visit without sleeping there, with a one-hour tour, and there is an ice bar.",
        come: "About 20 minutes by car or bus from Kiruna.",
        quando: "December to April.",
        tempo: "1-2 hours",
        url: "https://www.icehotel.com",
        consiglio: "Even those who do not sleep there can visit the rooms and the bar."
      },
      {
        nome: "Elite Hotel Frost and spa",
        testo: "The spa in our Kiruna hotel, ideal for recovering after the days in the cold of Abisko.",
        come: "In the centre of Kiruna.",
        quando: "Evening, after returning from Abisko.",
        tempo: "2 hours",
        consiglio: "One of the experiences worth having after the coldest phase."
      }
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
    comeArrivare: 'Scenic train from Kiruna: a little over an hour through an increasingly bare landscape.',
    comeSpostarsi: 'On foot in the village; organized excursions for snowmobiles and huskies.',
    periodoMigliore: 'from late December to March; February-March costs much less while keeping high chances of aurora',
    costi:
      "Activities, indicative price per person: Aurora Sky Station guided night visit from 1,295 SEK (about €120) and dinner at the top from 2,395 SEK (about €215), STF 2026-27 price list; guided snowmobile on the frozen lake about €100-110 (self-drive €150-250); evening husky sledding with aurora hunting €240 (shorter daytime versions from €70). Costs of the whole trip per person: flights €600-645, lodging €400-600, domestic transport €80 (scenic train + airport transfer), excursions €450-500 for 3 guided tours. Indicative total budget from €1,500 (basic) to €1,800 (excellent level).",
    erroriDaEvitare: [
      "Going at New Year if the goal is to save money: it is the most expensive time of the year to fly and sleep in the area",
      "Not keeping an extra margin on transport: with the extreme cold trains are sometimes canceled (not often, but it happens), and in those cases the local taxis tend to raise prices a bit",
    ],
    miaEsperienza:
      "Abisko was the heart of the trip: the dinner at altitude at the Aurora Sky Station, the snowmobile on the frozen lake and the husky sledding under a sky that at some point really lit up. They are the strongest memories of the week.",
    luoghi: [
      {
        nome: "Aurora Sky Station",
        testo: "A station at the top of Mount Nuolja, reached by chairlift, from which you watch the aurora in one of the clearest places in Sweden. There is also a panoramic dinner.",
        come: "Chairlift from STF Abisko Turiststation. Two options to book ahead, with limited places: Night Visit (guide, return chairlift, thermal overalls and boots) and Northern Lights Dinner.",
        quando: "2026-27 season from 19 October to 27 March, 8:30 pm to 1:00 am; in strong wind the chairlift stops.",
        tempo: "3-4 hours",
        costo: "Night Visit from 1,295 SEK, dinner from 2,395 SEK per person (2026-27 season, STF price list)",
        url: "https://www.auroraskystation.se",
        consiglio: "I had dinner up there: it is among the strongest memories of the week."
      },
      {
        nome: "Frozen Lake Torneträsk and snowmobile",
        testo: "Abisko's big lake freezes in winter and is crossed by snowmobile with a guide, also in the evening under the aurora.",
        come: "Excursion with a local operator, departing from Abisko.",
        quando: "Winter, January to March.",
        tempo: "2-3 hours",
        consiglio: "A driving licence and warm clothes are required; you stop often to watch the sky."
      },
      {
        nome: "Husky sledding",
        testo: "Driving a sled with husky dogs in the park, with a stop for tea and the aurora chase. You learn in a few minutes.",
        come: "Booking with a local operator; minibus transfer.",
        quando: "Winter, with snow.",
        tempo: "half a day",
        consiglio: "Under the aurora it is an emotion that stays."
      },
      {
        nome: "Abisko National Park and Lapporten",
        testo: "The park at the foot of the mountain, the starting point of the Kungsleden, with the Abiskojåkka canyon and the U-shaped valley of Lapporten, the 'gate of Lapland'. The STF tourist station is the base.",
        come: "Train from Kiruna (just over an hour) to Abisko Turiststation station.",
        quando: "Summer for trekking, winter for the aurora.",
        tempo: "full day",
        costo: "park entry free",
        consiglio: "The trails are always open, but in winter you need microspikes or snowshoes."
      }
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
      "There is no real shop in Abisko: bring groceries and cash for essentials."
    ],
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: "Green northern lights above the snow-covered mountains of Abisko National Park",
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
