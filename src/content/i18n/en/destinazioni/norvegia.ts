import type { Destinazione } from '@/lib/types'

export const destinazioniNorvegia: Destinazione[] = [
  {
    slug: 'oslo',
    paeseSlug: 'norvegia',
    ordine: 1,
    nome: 'Oslo',
    tipologia: ['cultura', 'città'],
    giorniConsigliati:
      "1 day, both on the way out and on the way back, on the Lofoten trip; 2-3 full days on the \"Nordic Capitals\" itinerary, as the final stop after Copenhagen and Stockholm",
    visitataPersonalmente: true,
    introduzione:
      "The Norwegian capital: royal gardens, the Aker Brygge waterfront, contemporary art museums and the Opera House overlooking the fjord. On the Lofoten trip it's the entry and exit point, one day each way; on the \"Nordic Capitals\" itinerary it becomes a full stop, with the Vigeland sculpture park, the museums on the Bygdøy peninsula and an outing on the fjord.",
    percheAndarci:
      "A day of culture and walking that works well both to open and to close the Lofoten trip, before or after the domestic flight to Bodø. As the final stop of a tour of Nordic capitals, it holds up well for 2-3 full days between the center, Bygdøy and the fjord.",
    cosaVedere: [
      'Royal Palace gardens',
      'Aker Brygge waterfront',
      'Astrup Fearnley Museum (building by Renzo Piano)',
      'Oslo Opera House, climbing onto the roof for the view over the city and the sea',
      "Vigeland Park (Frognerparken), the largest sculpture park in the world made by a single artist: over 200 bronze, granite and iron statues by Gustav Vigeland, free admission and always open. It's the most visited attraction in all of Norway",
      "The Bygdøy peninsula, with the Fram Museum (dedicated to the polar ship used by Nansen and Amundsen) and the Kon-Tiki Museum (Thor Heyerdahl's raft): the Viking Ship Museum on the same peninsula, on the other hand, is closed for a renovation that should last until 2027, with the Viking ships being moved to the new Museum of the Viking Age: it's worth checking the reopening date before planning the visit",
    ],
    cosaFare: [
      "Walk from the Royal Palace to Aker Brygge and on to the Opera House",
      'Climb onto the roof of the Opera House for the view, with a stop for a hot tea at the café inside',
      'A stroll among the sculptures of Vigeland Park (see the dedicated experience page)',
      'A morning at the Bygdøy museums (Fram Museum and Kon-Tiki Museum), see the dedicated experience page',
      'A two-hour cruise on the Oslofjord, among the islands and bays south of the city (see the dedicated experience page)',
    ],
    doveDormire:
      "I stayed at the Citybox Hotel, a 5-minute walk from Oslo S: an affordable design hotel, self check-in, basic but clean rooms, comfortable beds, a coffee machine in the room. The reviews (Tripadvisor, over 2,400 ratings, 4/5 score) confirm my impression: excellent value for Oslo standards and a very convenient location, against a deliberately minimal style (no physical reception) and a few complaints about noisy rooms if they face the tram. I recommend asking for a room on the inner side.\n\nAlternatives in Oslo. Budget: Saga Poshtel (a few steps from Oslo S), Comfort Hotel Xpress Central Station (two minutes from Jernbanetorget) · mid-range (the Citybox I chose falls here too): Comfort Hotel Karl Johan (250 m from Oslo S) · upscale without going overboard: Amerikalinjen (a historic boutique hotel near the station), The Thief (a design hotel on the Tjuvholmen waterfront, with an on-site spa).",
    doveMangiare:
      "Dinner at Rorbua (Aker Brygge): traditional Norwegian cooking, generous portions, average prices, a warm wooden atmosphere. If you come back to Oslo at the end of the trip, Café Sara is fine for the last dinner: a simple place but open late, handy after an evening flight (on weekends it's best to book).",
    comeArrivare:
      "International flight to Oslo Gardermoen, about 50 km from the centre. The Flytoget express train reaches Oslo Sentralstasjon in about 20 minutes (about NOK 276, 2026), with frequent departures; the Vy regional train takes 23-30 minutes and costs about NOK 125. From Stockholm, for those arriving as the last stop of \"Nordic capitals\": direct SJ train (about 5h45) or domestic flight (about 1 hour). From Copenhagen there is also the DFDS overnight ferry, about 17 hours.",
    comeSpostarsi: "On foot in the center; Flytoget to/from the airport; for Bygdøy, a city bus or the seasonal ferry from City Hall.",
    periodoMigliore: "for the transit stop alone, the summer of the Lofoten trip; May-September for a full stay, with the fjord cruise and Vigeland Park at their best in the long days",
    costi:
      "Flytoget about NOK 276 one way, regional train about NOK 125. Vigeland Park and the Opera roof free; Fram NOK 180 (about €17), Munch and Nasjonalmuseet NOK 220 each (about €20). Oslofjord cruise of 1.5-2 hours: roughly €45-70 per person. Daily budget per person, excluding accommodation: low €60-80 (supermarket, transport, free sights), mid €110-150 (lunch out, average dinner, one museum), high over €200.",
    erroriDaEvitare: [
      "If you go to Café Sara on the weekend, book: in the evening it's a very busy place",
      "Planning a visit to the Viking Ship Museum on Bygdøy without checking first: it's closed for renovation, with reopening expected no earlier than 2027",
    ],
    miaEsperienza:
      "For me Oslo was a short but pleasant stop on both sides of the trip: an afternoon of easy walking on the first day, and a relaxed last dinner at Café Sara on the way back, after a week of trekking.",
    luoghi: [
      {
        nome: "Vigeland Park (Frognerparken)",
        testo: "The largest sculpture park made by a single artist: 212 bronze and granite sculptures by Gustav Vigeland, including the 14-metre Monolith with 121 intertwined human figures. Between 1 and 2 million people visit it every year.",
        come: "Metro or tram to Majorstuen/Vigelandsparken, then a short walk. You follow the central axis, about 850 metres long, from the main gate to the Wheel of Life, past the Monolith.",
        quando: "Always open, free entry. Early morning or summer evening for the sculptures without crowds.",
        tempo: "1.5-2 hours",
        costo: "free entry",
        orari: "Park always open",
        lat: 59.92741,
        lng: 10.69991,
        url: "https://www.vigeland.museum.no",
        consiglio: "The Vigeland Museum, next to the park, holds the artist's studios: useful for an hour if it rains."
      },
      {
        nome: "Oslo Opera House",
        testo: "An opera and ballet house on the fjord, opened in 2008, designed by Snøhetta with an inclined marble roof you can walk on. The view over the city and the sea is worth the climb.",
        come: "On foot from the central station. The roof is always open, even without a ticket for a performance.",
        quando: "At sunset, or in clear weather for the Oslofjord view.",
        tempo: "45 minutes-1 hour",
        costo: "roof: free entry",
        orari: "Roof always accessible",
        lat: 59.9075,
        lng: 10.7522,
        url: "https://www.operaen.no",
        consiglio: "After the climb, a hot tea at the inside cafe: the best way to warm up."
      },
      {
        nome: "Munch and the National Museum",
        testo: "The Munch museum in Bjørvika holds much of Edvard Munch's work; the Nasjonalmuseet, Norway's largest collection of art, architecture and design, has another version of The Scream (1893). Two new buildings near the fjord.",
        come: "The Munch is walkable from the station; the Nasjonalmuseet is walkable from the centre, near the City Hall.",
        quando: "Weekday morning; book online for timed entries.",
        tempo: "2-3 hours each",
        costo: "Munch NOK 220, Nasjonalmuseet NOK 220 for adults (2026), about €20 each; Munch free on the first Wednesday of the month, 6-9pm",
        orari: "Munch daily from 10am; Nasjonalmuseet Tue-Wed 10am-8pm, Thu-Sun 10am-5pm, closed Mondays (2026)",
        lat: 59.90617,
        lng: 10.75566,
        url: "https://www.munch.no",
        consiglio: "Compare the versions of The Scream: the differences show in person."
      },
      {
        nome: "Bygdøy peninsula: Fram and Kon-Tiki",
        testo: "The Fram Museum keeps the polar ship of Nansen and Amundsen, intact and open to board. Next door the Kon-Tiki Museum shows the raft on which Thor Heyerdahl crossed the Pacific in 1947. The Viking Ship Museum is closed for renovation until 2027: check the reopening.",
        come: "By public transport from the centre (routes and tickets on the Ruter app). The museums are a few minutes apart.",
        quando: "Morning, to have the rooms with fewer groups.",
        tempo: "3-4 hours",
        costo: "Fram NOK 180, Kon-Tiki about NOK 180, combined ticket about NOK 325 (2026), about €30",
        orari: "Fram open every day of the year 10am-5pm (2026)",
        lat: 59.90333,
        lng: 10.69944,
        url: "https://www.frammuseum.no",
        consiglio: "The two museums fit comfortably into half a day."
      },
      {
        nome: "Norsk Folkemuseum",
        testo: "The open-air museum on Bygdøy, with more than 150 buildings brought from all over Norway, including a stave church from around 1200. In summer there are costumed guides, animals and craft demonstrations.",
        come: "Bus 30 from the centre to Folkemuseet; in summer also the ferry from Rådhusbrygge.",
        quando: "June to August, when the buildings come alive; in winter it is quieter.",
        tempo: "2-3 hours",
        orari: "Low season Tue-Sun 11am-4pm, closed Mondays (2026)",
        lat: 59.90691,
        lng: 10.68596,
        url: "https://norskfolkemuseum.no/en"
      },
      {
        nome: "Akershus Fortress",
        testo: "A medieval fortress from the 1300s on the harbour, later a Renaissance castle. The park is free and the walls give a nice view over Oslo's harbour; inside are the military museum and the Resistance museum.",
        come: "On foot from the centre; free entry to the grounds.",
        quando: "Daytime; the fortress is guarded by the King's Guard. Inside are also the Armed Forces Museum and the Resistance Museum.",
        tempo: "1.5 hours",
        costo: "grounds free; museums and castle with separate ticket",
        lat: 59.90661,
        lng: 10.73625,
        consiglio: "Climb the walls at sunset: the light on the fjord is the best."
      },
      {
        nome: "City Hall (Rådhuset)",
        testo: "The two brick towers of 1950 dominate the harbour; inside, the main hall is covered with murals on the history and work of Norwegians. This is where the Nobel Peace Prize is awarded every 10 December.",
        come: "On foot from the centre, on the harbour opposite Aker Brygge.",
        quando: "Weekday mornings; the tower carillon plays every hour.",
        tempo: "45 minutes",
        costo: "Free entry",
        orari: "Mon-Sat 9am-4pm, closed Sundays and on some event dates (2026)",
        lat: 59.91167,
        lng: 10.73361,
        url: "https://www.oslo.kommune.no/radhuset/"
      },
      {
        nome: "Royal Palace and Karl Johans gate",
        testo: "The pedestrian Karl Johans gate climbs from the station to the Royal Palace, past Parliament and the University. Around the king's residence lies the Slottsparken, a free park where you can watch the changing of the guard.",
        come: "On foot from Central Station, about 20 minutes on a gentle slope.",
        quando: "For the daily changing of the guard (time on the royal court website); in summer the palace interior is visited on guided tours.",
        tempo: "1-2 hours",
        costo: "Park and street free",
        lat: 59.91722,
        lng: 10.7275,
        url: "https://www.royalcourt.no"
      },
      {
        nome: "Aker Brygge and Astrup Fearnley",
        testo: "The former shipyard area, now a waterfront with restaurants, and the Astrup Fearnley museum of contemporary art, a building by Renzo Piano. Nearby Tjuvholmen has outdoor sculptures.",
        come: "On foot from the Royal Palace along the waterfront.",
        quando: "Summer evening, for outdoor tables on the fjord.",
        tempo: "2 hours",
        orari: "Astrup Fearnley Tue-Fri 12-5pm, Thursday until 7pm, Sat-Sun 11am-5pm; closed Mondays except July and August (12-5pm)",
        lat: 59.90667,
        lng: 10.72139,
        url: "https://www.afmuseet.no",
        consiglio: "Walk to Tjuvholmen: the urban beach is free."
      },
      {
        nome: "Oslofjord cruise",
        testo: "A 1.5-2 hour boat trip among the islands and bays south of the city, with views of the Opera, Akershus fortress and the summer cabins on the islets. It is the easiest way to see how much Oslo lives on its fjord.",
        come: "Departures from the pier in front of City Hall (Rådhusbrygge); for the nearest islands the public ferries with a Ruter ticket are enough.",
        quando: "May to September, with several departures a day; in winter there are far fewer.",
        tempo: "1.5-2 hours",
        costo: "Roughly €45-70 per person",
        lat: 59.91167,
        lng: 10.73361
      },
      {
        nome: "Holmenkollen",
        testo: "Oslo's ski jump, with a ski museum and simulator, above the city. The view over the fjord and the forest is the reason to go up.",
        come: "Metro line 1 to Holmenkollen. The last stretch to the ski jump is on foot.",
        quando: "Daytime, in clear weather; in winter there is often snow.",
        tempo: "2 hours",
        lat: 59.96389,
        lng: 10.66778,
        url: "https://www.holmenkollen.com",
        consiglio: "Go up on the afternoon metro and walk down through the forest."
      },
      {
        nome: "Deichman Bjørvika library",
        testo: "The central library opened in 2020 next to the Opera, with six floors of books, reading rooms, workshops and a big window over the fjord on the top floor. It is a public space you can walk into just to rest in the warm.",
        come: "On foot from Central Station, opposite the Opera.",
        quando: "In cold or rainy weather, or in the evening, when it stays open late.",
        tempo: "45 minutes",
        costo: "Free entry",
        orari: "Weekdays 8am-10pm (2026)",
        lat: 59.90866,
        lng: 10.7527,
        url: "https://deichman.no/bibliotekene/bj%C3%B8rvika"
      },
      {
        nome: "Grünerløkka and Mathallen",
        testo: "The former working-class district along the Akerselva river, now full of cafés, second-hand shops and bars. On its edge is Mathallen, the food hall with stalls of Norwegian produce and small restaurants.",
        come: "Tram 11, 12 or 18 from the centre, or a 20-25 minute walk along the Akerselva.",
        quando: "Sunday, when the parks and flea markets are busy.",
        tempo: "2-3 hours",
        costo: "Free; lunch at Mathallen roughly €15-30",
        orari: "Mathallen Tue-Sat 10am-8pm, Sunday 11am-6pm, closed Mondays",
        lat: 59.92342,
        lng: 10.75168,
        url: "https://www.mathallenoslo.no/en/"
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Early morning: Vigeland Park",
          "Karl Johans gate up to the Royal Palace",
          "Lunch at Aker Brygge",
          "Afternoon: Munch or Nasjonalmuseet",
          "Sunset on the Opera roof"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Bygdøy with the Fram, Kon-Tiki and Norsk Folkemuseum",
          "Back by ferry (in summer) or bus 30",
          "Evening: City Hall from outside and Akershus fortress at sunset"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Oslofjord cruise in the morning",
          "Afternoon at Holmenkollen on metro line 1",
          "Dinner in Grünerløkka or at Mathallen"
        ]
      }
    ],
    zone: [
      {
        nome: "Sentrum and Oslo S",
        testo: "Near the station, the Opera and the airport buses. The Citybox where I slept is 5 minutes from the station. Noisy in the evening near the station.",
        perChi: "Those arriving by train or short of time",
        fascia: "€130-230"
      },
      {
        nome: "Grünerløkka",
        testo: "A young neighbourhood within walking distance of the centre. Lots of bars, noisier at weekends.",
        perChi: "Those looking for bars, cafes and nightlife",
        fascia: "€110-200"
      },
      {
        nome: "Frogner and Majorstuen",
        testo: "A residential area near Vigeland; accommodation a bit pricier, good connections.",
        perChi: "Those who want quiet and the park",
        fascia: "€140-260"
      }
    ],
    sapori: [
      {
        nome: "Brunost",
        testo: "A brown, sweet whey cheese, sliced on bread or waffles."
      },
      {
        nome: "Fårikål",
        testo: "The national dish: lamb and boiled cabbage with peppercorns, typical of autumn."
      },
      {
        nome: "Harbour shrimp (reker)",
        testo: "Boiled prawns eaten with bread, mayonnaise and lemon; in summer they are sold fresh at the harbour."
      },
      {
        nome: "Kanelboller",
        testo: "Cinnamon and cardamom swirls, to try in the bakeries in the centre."
      }
    ],
    attenzioni: [
      "Spirits are sold only at Vinmonopolet; supermarkets sell beer only during set hours and not on Sundays.",
      "Pickpockets around the station and Karl Johans gate: keep bag and phone in front.",
      "Electric scooters and bikes speed on the bike lanes: look before crossing.",
      "The metro uses tickets from the Ruter app: buy before boarding, inspections do happen."
    ],
    faq: [
      {
        domanda: "How many days do you need in Oslo?",
        risposta: "Two days for Vigeland, the Opera, Munch and Bygdøy; a third for the fjord cruise and Holmenkollen."
      },
      {
        domanda: "How do you get from Gardermoen airport to the centre?",
        risposta: "The Flytoget reaches Oslo S in about 20 minutes and costs about NOK 276; the Vy regional train takes 23-30 minutes and costs about NOK 125. Gardermoen is 50 km away: on the way back leave the centre three hours before your flight."
      },
      {
        domanda: "Is Oslo the most expensive Nordic capital?",
        risposta: "For eating and drinking, yes: a beer in a bar costs €9-14, an average dinner starts at €35-45 per person. Many sights are free, though, from Vigeland to the Opera roof."
      },
      {
        domanda: "Is the Viking Ship Museum open?",
        risposta: "No: the Bygdøy site is closed for works and the new Museum of the Viking Age will not open before 2027. Bygdøy is still worth it for the Fram, Kon-Tiki and Norsk Folkemuseum."
      },
      {
        domanda: "Is the Oslo Pass worth it?",
        risposta: "It pays off if in two or three days you do Bygdøy, Munch and Nasjonalmuseet using public transport; if you walk and mostly see the free sights, it is not worth it."
      },
      {
        domanda: "When is the best time to visit Oslo?",
        risposta: "From May to September, with long days and boats on the fjord. In winter you can ski a few minutes by metro from the centre, but it gets dark early."
      }
    ],
    gite: [
      {
        nome: "Fredrikstad",
        distanza: "about 1 hour by train",
        come: "Vy regional trains from Oslo S.",
        testo: "It has the best-preserved fortified town in Scandinavia, Gamlebyen, with ramparts, moats and wooden houses, reached by a small ferry from the modern centre."
      },
      {
        nome: "Drøbak",
        distanza: "40 km",
        come: "Bus from the centre in about an hour; in summer also by boat on the fjord.",
        testo: "A village of white wooden houses on the Oslofjord, with harbour cafés and Oscarsborg fortress on the island opposite, where the German cruiser Blücher was sunk in 1940."
      },
      {
        nome: "Lillehammer",
        distanza: "about 2 hours by train",
        come: "Vy trains from Oslo S and Gardermoen airport.",
        testo: "The 1994 Winter Olympics town on Lake Mjøsa, with the Maihaugen open-air museum and the ski jumps above the centre."
      }
    ],
    esperienzeSlugs: ['vigeland-park-oslo', 'bygdoy-musei-fram-kontiki', 'oslofjord-crociera'],
    tripSlugs: ['lofoten-estate-2025', 'capitali-nordiche'],
    imageAlt: "Glass and marble facade of the Oslo Opera House, with people on the sloping roof",
    immagine: '/images/norvegia/oslo-stock.jpg',
  },
  {
    slug: 'bodo',
    paeseSlug: 'norvegia',
    ordine: 2,
    nome: 'Bodø',
    tipologia: ['natura'],
    giorniConsigliati: 'a few hours, a stop passed through twice (on the way out and back)',
    visitataPersonalmente: true,
    introduzione: "The obligatory transit point between Oslo and the Lofoten: you arrive here by plane, pick up the rental car and take the ferries to the archipelago.",
    percheAndarci: "You have to cross it anyway, and it has enough to offer to fill a few hours nicely between a flight and a ferry.",
    cosaVedere: ['Nyholms Fort, a viewpoint 10 minutes on foot from the port', 'Mjelle beach'],
    cosaFare: [
      'Walk around the center and the pier',
      "Ferry to Misten/Kjerringøy (about 10 minutes, you stay in the car, arrive 30 minutes early): it didn't thrill me, but it's an honest way to fill a few hours. If Bodø/Glimt is playing at home, going to the match may be worth it",
    ],
    doveDormire: "I didn't stay overnight in Bodø, I only passed through: I don't have an address to recommend for anyone who wants to stop for a night.",
    doveMangiare:
      "Bryggerikaia (opens mid-morning): excellent \"mega-stuffed\" takeaway sandwiches, to eat at the city viewpoint. Melkebaren for breakfast: good, but the service is slow, something to factor in when time is tight.",
    comeArrivare: "Domestic flight from Oslo Gardermoen, about an hour and a half. Bodø airport is about 1.5 km from the centre: buses 1 and 4 take 5-10 minutes (about 45 NOK, about 4 €, with the Reis Nordland app), a taxi costs 150-250 NOK, or it is a 15-minute walk; car rental desks are in the terminal. From the Lofoten you arrive on the Moskenes-Bodø ferry (about 3 hours 15 minutes; car up to 6 metres 605 NOK, about 53 €; passengers free); in summer the car space must be booked on the Torghatten Nord website. By train, the Nordland Line arrives from Trondheim in about 10 hours.",
    comeSpostarsi: 'On foot in the center; rental car for the rest of the getting around.',
    periodoMigliore: "I passed through in summer, on the way out and back from the Lofoten; for the other months I have no direct reference",
    costi: "I didn't note down the costs of this stop. For reference: Aviation Museum 195 NOK (about 17 €), airport bus about 45 NOK, ferry to Moskenes 605 NOK per car. Indicative daily budget per person: low 90-120 € (hostel, supermarket food, buses); mid 160-230 € (hotel in a double room, a museum, one restaurant dinner); high 300 € and up (harbour-front hotel, rental car, seafood dinners).",
    erroriDaEvitare: ["Factor in the slow service at Melkebaren if you have little time between one ferry and the next"],
    miaEsperienza:
      "For us it was a logistical stop both on the way out and on the way back, but with enough to do (Mjelle beach, the Nyholms Fort viewpoint) not to feel like wasted time.",
    luoghi: [
      {
        lat: 67.2877,
        lng: 14.3677,
        nome: "Nyholms Fort",
        testo: "An old fort at the tip of Bodø harbour, now with views over the harbour and the islands.",
        come: "On foot from the harbour.",
        quando: "Late afternoon, with light on the islands.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "The easiest spot for a panoramic photo before boarding."
      },
      {
        lat: 67.4085,
        lng: 14.6273,
        nome: "Mjelle beach",
        testo: "A long sandy beach north of the centre, among dunes and sea. In summer you can walk in the evening too with the long light.",
        come: "By car or local bus from Bodø.",
        quando: "Summer, evening.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "Bring a windproof jacket: the northern wind is strong."
      },
      {
        orari: "Always accessible, viewed from the bridge and the shore",
        lat: 67.2281,
        lng: 14.6164,
        nome: "Saltstraumen",
        testo: "One of the strongest tidal currents in the world, south-east of Bodø: each tide cycle pushes up to 400 million cubic metres of water through, forming whirlpools. I did not visit it, but it is the classic outing from Bodø.",
        come: "By car or bus from Bodø.",
        quando: "Check the tide tables: the current is strongest at mid-tide, roughly every six hours.",
        tempo: "2-3 hours",
        consiglio: "Watch from the bridge; no swimming."
      },
      {
        nome: "Norwegian Aviation Museum (Norsk Luftfartsmuseum)",
        testo: "Norway's national aviation museum, in a large propeller-shaped building next to the airport. One wing covers civil flying, the other military aviation, with original aircraft and a section on the Cold War. It is the most substantial indoor visit in Bodø on a rainy day.",
        come: "About 25 minutes on foot from the centre, or by car: it sits by the airport, handy before returning a rental car.",
        quando: "On a rainy day or in the hours before a flight.",
        tempo: "2 hours",
        costo: "Adults 195 NOK (about 17 €), children 6-16 95 NOK, family 550 NOK (2026)",
        orari: "1 June-16 August daily 10:00-18:00; rest of the year Mon-Fri 10:00-16:00, Sat-Sun 11:00-17:00; closed for maintenance 1-24 January and on the Christmas holidays",
        url: "https://luftfartsmuseum.no",
        lat: 67.2764,
        lng: 14.4128,
      },
      {
        nome: "Bodø Cathedral (Bodø domkirke)",
        testo: "The cathedral was built in the 1950s, after the 1940 bombing had destroyed much of the town. It is a modern concrete building with a free-standing bell tower and large stained-glass windows.",
        come: "In the centre, a few minutes' walk from the harbour.",
        quando: "During the day, outside service times.",
        tempo: "20-30 minutes",
        lat: 67.2823,
        lng: 14.3819,
      },
      {
        nome: "Nordland Museum (Nordlandsmuseet)",
        testo: "The regional museum of Nordland, in one of the oldest buildings in the centre. It covers the history of Bodø, fishing and Sámi culture, and shows what the town was like before the war.",
        come: "On foot in the centre, next to the cathedral.",
        quando: "A spare hour between a walk in the centre and the ferry.",
        tempo: "1 hour",
        url: "https://www.nordlandsmuseet.no",
        lat: 67.2819,
        lng: 14.3823,
      },
      {
        nome: "Stormen library and concert hall",
        testo: "The two white buildings on the waterfront are the town's cultural centre: the concert hall on one side, the library on the other, with tall windows over the harbour. The library is free to walk into and a good place to sit and watch the sea.",
        come: "On foot from the quay, on the central waterfront.",
        quando: "In bad weather, or in the evening if there is a concert.",
        tempo: "30 minutes",
        costo: "Library free; concerts ticketed",
        lat: 67.2831,
        lng: 14.3754,
      },
      {
        nome: "Keiservarden",
        testo: "The viewpoint on Rønvikfjellet, above the town, is named after the visit of German Emperor Wilhelm II in the late 19th century. From the top you see Bodø, the islands and, on a clear day, the outline of the Lofoten. In summer it is the classic spot for the midnight sun.",
        come: "Marked trail from the Rønvik area, north of the centre; drive to the trailhead parking, then walk.",
        quando: "A summer evening, with the midnight sun and clear skies.",
        tempo: "2-3 hours round trip",
        costo: "Free",
        lat: 67.315,
        lng: 14.4783,
        consiglio: "Wear hiking shoes: the ground is wet even in summer.",
      },
      {
        nome: "Kjerringøy trading post (Kjerringøy handelssted)",
        testo: "A 19th-century trading post with wooden houses, sea-front warehouses and the merchant's home, now run as a museum by the Nordland Museum. The landscape around it, with pale beaches and pointed peaks, looks like a small-scale Lofoten.",
        come: "Drive north and take the roughly 10-minute ferry to Misten (you stay in the car; be at the quay 30 minutes early).",
        quando: "Summer, when guided tours run.",
        tempo: "Half a day including the drive",
        url: "https://www.nordlandsmuseet.no",
        lat: 67.5195,
        lng: 14.7643,
      },
      {
        nome: "Aspmyra Stadion",
        testo: "The home of Bodø/Glimt, the club that has won the Norwegian league in recent years and made a name for itself in European competitions. It is small and close to the centre: on match days the town turns yellow.",
        come: "A 15-minute walk from the centre.",
        quando: "On home match days; the fixture list is on the club's website.",
        tempo: "2-3 hours for a match",
        url: "https://glimt.no",
        lat: 67.2767,
        lng: 14.3844,
        consiglio: "Buy tickets online early, especially for European matches.",
      },
    ],
    sapori: [
      {
        nome: "Takeaway sandwiches",
        testo: "At Bryggerikaia you eat stuffed sandwiches to take to the viewpoint."
      },
      {
        nome: "Breakfast",
        testo: "At Melkebaren, though service is slow."
      }
    ],
    attenzioni: [
      "If you take the ferry to the Lofoten, arrive well ahead of time: in summer the queues are long.",
      "In summer Bodø's accommodation fills up early: book soon."
    ],
    programmi: [
      { titolo: "Half a day between flight and ferry", tappe: ["Walk around the centre and the quay", "Takeaway sandwich and the view from Nyholms Fort", "Stormen and the cathedral", "At the ferry quay well ahead of time"] },
      { titolo: "1 day", tappe: ["Morning at the Aviation Museum", "Lunch in the centre and the Nordland Museum", "Afternoon at Saltstraumen, timed for the strongest current", "Evening at Keiservarden in the long light"] },
      { titolo: "2 days", tappe: ["Day 1: as above", "Day 2: ferry to Misten and Kjerringøy", "Mjelle beach on the way back", "A Bodø/Glimt match, if there is one"] },
    ],
    zone: [
      { nome: "Centre and harbour", perChi: "Those arriving or leaving by ferry", testo: "Hotels, restaurants and the ferry quay all within a few minutes' walk. The most convenient area for a one-night stopover." },
      { nome: "Near the airport", perChi: "Those with a dawn flight", testo: "A few hotels between the airport and the centre, close to the Aviation Museum. Less atmosphere, but the terminal is minutes away." },
      { nome: "Saltstraumen", perChi: "Those with a car who want nature", testo: "Lodges and cabins around the tidal current, about half an hour from town. Quiet, but you need a car and your own groceries." },
    ],
    gite: [
      { nome: "Saltstraumen", distanza: "about 30 km, half an hour's drive", come: "By car or local bus from Bodø.", testo: "The tidal current forms whirlpools under the bridge four times a day: go at mid-tide and check the tables." },
      { nome: "Kjerringøy", distanza: "about 40 km north, with a 10-minute ferry", come: "By car and ferry to Misten.", testo: "The historic trading post, pale beaches and pointed peaks: a taste of the Lofoten landscape without the crowds." },
      { nome: "Lofoten via Moskenes", distanza: "about 3 hours 15 minutes by ferry", come: "Torghatten Nord ferry to Moskenes, with or without a car.", testo: "More a crossing than a day trip, it leads to Reine and Å: in summer a car space must be booked, foot passengers board without trouble." },
    ],
    faq: [
      { domanda: "Is Bodø worth a stop?", risposta: "As a stop of a few hours, yes: the centre is walkable, Nyholms Fort is ten minutes away and Saltstraumen half an hour. For more than one night you need a specific reason, such as Kjerringøy or a Bodø/Glimt match." },
      { domanda: "How do you get from Bodø to the Lofoten?", risposta: "By ferry to Moskenes, about 3 hours 15 minutes: a car up to 6 metres pays 605 NOK, passengers travel free. Alternatively fly to Leknes or Svolvær, or drive north and take the Bognes-Lødingen ferry." },
      { domanda: "Do you need to book the Moskenes ferry?", risposta: "With a car in summer, yes: book the space on the Torghatten Nord website, or you risk being left behind. Foot passengers board easily; still be at the port 40 minutes early." },
      { domanda: "How far is the airport from the centre?", risposta: "About 1.5 km: a 15-minute walk, 5-10 minutes on buses 1 and 4 (about 45 NOK) or a few minutes by taxi." },
      { domanda: "When can you see the midnight sun in Bodø?", risposta: "Bodø is above the Arctic Circle: the midnight sun lasts roughly from early June to early July. The best place to watch it is Keiservarden, above the town." },
      { domanda: "What to do in Bodø when it rains?", risposta: "The Aviation Museum, the Nordland Museum and the Stormen library, all close to the centre. The aviation museum alone fills a couple of hours." },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: "Aerial view of the port of Bodø, with red cabins on the pier and the coastal road",
    immagine: '/images/norvegia/bodo-stock.jpg',
  },
  {
    slug: 'svolvaer',
    paeseSlug: 'norvegia',
    ordine: 3,
    nome: 'Svolvær',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 nights, first base of the trip',
    visitataPersonalmente: true,
    introduzione: "The main port of the Lofoten and the first logistical base of the trip: from here you set out for the RIB excursion to the Trollfjord and the outing to Henningsvær.",
    percheAndarci: "A central position for the first days in the archipelago, with the best restaurant of the whole trip.",
    cosaVedere: ['The port of Svolvær'],
    cosaFare: ['RIB excursion to the Trollfjord (see the dedicated experience page)', 'Breakfast at Kringla, a very good bakery near the apartments'],
    doveDormire:
      "I stayed in an apartment with a view of the harbor at Nordis Apartment: big windows, a panoramic terrace, a kitchenette. On Booking.com it scores 8.7/10 (417 reviews) and 9.7/10 for location — numbers that confirm my impression: spacious, clean rooms, a view that's worth the stay on its own, convenient for anyone who wants to cook in the evening instead of always going out.\n\nAlternatives in Svolvær. Budget: Lofoten Feriesenter (campsite and cabins, from about 200 NOK per person), Lofoten Sommerhotell og Vandrerhjem (hostel in Kabelvåg, sauna and breakfast included) · mid-range (the Nordis Apartment I chose falls here): Thon Hotel Lofoten (central, harbor view) · upscale without going overboard: Thon Hotel Svolvær (a large hotel on the waterfront, binoculars in every room), Svinøya Rorbuer (historic rorbuer with their own kitchen, the top-rated in Svolvær on Tripadvisor).",
    doveMangiare:
      "Bacalo for an average-priced dinner. Paleo Arctic was the best restaurant of the whole trip: prices a bit above average, but much higher quality. Book in good time.",
    comeArrivare: "From Bodø: about 3h15 of driving to Bognes, Bognes-Lødingen ferry (arrive 40 minutes early), then another 1h40 by car to Svolvær. The crossing takes about an hour and can't be booked: cars board in order of arrival and the fare is paid with AutoPASS or on board. Alternatively, arrive from the south on the Bodø-Moskenes ferry (about 3 hours 15 minutes; a car costs around 600 NOK plus the reservation, foot passengers travel free) and then drive about 2 hours along the E10 from Reine to Svolvær.",
    comeSpostarsi: 'Rental car.',
    periodoMigliore: "I was there in summer; for the other months I have no direct reference",
    costi: "I didn't note down the costs of this stop. 2026 references: Trollfjord RIB 1,195 NOK (about €100), Magic Ice 325 NOK, Kabelvåg museums 130-160 NOK. Roughly, per person per day: €80-120 with campsite or hostel and supermarket food; €180-260 with an apartment or hotel shared by two and one dinner out; over €350 with a refined rorbu, restaurants and excursions every day.",
    erroriDaEvitare: ["Book both the Trollfjord and a dinner at Paleo Arctic in good time: they are the two most in-demand experiences in the area"],
    miaEsperienza:
      "Svolvær was the right base for the first few days: convenient for the Trollfjord and for Henningsvær, and that's where we had the best dinner of the whole trip, at Paleo Arctic.",
    luoghi: [
      {
        nome: "Svolvær harbour",
        testo: "The harbour of the Lofoten capital, with old fishing sheds (rorbuer) and boats. RIBs for the Trollfjord and boats for the islands leave from here.",
        come: "On foot from the centre.",
        quando: "Evening, for the light and the fish on the quay.",
        tempo: "1 hour",
        costo: "free entry",
        lat: 68.23215,
        lng: 14.57516,
        consiglio: "An apartment overlooking the harbour: a practical choice for cooking and resting."
      },
      {
        nome: "Trollfjord",
        testo: "A narrow fjord about 2 km long, with steep walls and a mouth only about a hundred metres wide. In summer the RIB (fast inflatable boat) ride is the most common way to enter.",
        come: "Book a trip with an operator from Svolvær.",
        quando: "Summer, in clear weather.",
        tempo: "2 hours",
        costo: "1,195 NOK adults, 950 NOK children, about €100 (Lofoten Explorer, 2026)",
        lat: 68.3628,
        lng: 14.9361,
        url: "https://lofoten-explorer.no",
        consiglio: "Book ahead: the RIBs fill up."
      },
      {
        nome: "Svolværgeita",
        testo: "A rock with two horns, Storhorn and Lillehorn, above the town: climbers jump from one to the other over the drop. A steep path leads to the base.",
        come: "Trail from the town, well marked but steep.",
        quando: "A day free of clouds.",
        tempo: "3-4 hours",
        costo: "free",
        lat: 68.24632,
        lng: 14.58847,
        consiglio: "Not for those with a fear of heights."
      },
      {
        nome: "Kabelvåg and Lofotr",
        testo: "Just outside Svolvær, the Lofoten Museum in Kabelvåg's old harbour tells the story of fishing; at Borg the Lofotr Viking Museum has a reconstruction of a Viking chieftain's house, open from 1 May to 15 September.",
        come: "By car from Svolvær; Kabelvåg is very close, Borg further west.",
        quando: "Full day.",
        tempo: "2-3 hours",
        costo: "Lofotmuseet 130 NOK, about €11; Lofotr 210 NOK from mid-September to the end of December 2026, around 250 NOK in high season",
        orari: "Lofotmuseet: September to April daily 11am-4pm, closed 24, 25 and 31 December. Lofotr: daily from 1 May to 15 September; November-December 2026 Wednesday and Saturday 11am-5pm",
        lat: 68.20697,
        lng: 14.45292,
        url: "https://lofotr.no",
        consiglio: "The Lofotr Viking Museum can be visited on your own; in summer there are live activities."
      },
      {
        nome: "Lofotakvariet",
        testo: "The Lofoten aquarium, in the old harbour of Kabelvåg: tanks with the fish of the seas around the islands, seals and otters. The liveliest moment is seal feeding.",
        come: "By car, 8 minutes from Svolvær (5 km); parking in front of the aquarium.",
        quando: "At feeding time: 12pm and 4pm in summer, 12pm and 3pm from September to April.",
        tempo: "1-1.5 hours",
        costo: "160 NOK adults, 100 NOK children 3-15, about €14 (2026); SKREI combined ticket 375 NOK",
        orari: "May-August daily 10am-6pm; September-November and February-April 11am-4pm; closed December and January",
        lat: 68.2074,
        lng: 14.4495,
        url: "https://www.museumnord.no/en/our-venues/lofotakvariet/",
        consiglio: "The SKREI ticket also covers Lofotmuseet and Galleri Espolin, a few hundred metres away: all three fit into one morning."
      },
      {
        nome: "Galleri Espolin",
        testo: "The gallery devoted to Kaare Espolin Johnson, the artist who portrayed fishermen's lives and the northern sea in black and white. A modern building at Storvågan, next to Lofotmuseet.",
        come: "By car from Svolvær, 7-8 minutes; parking shared with Lofotmuseet.",
        quando: "Morning, together with the other Kabelvåg museums.",
        tempo: "45 minutes",
        costo: "130 NOK adults, 70 NOK children 5-15, about €11 (from 1 June 2026)",
        orari: "May-August daily 10am-6pm; September-April 11am-4pm, closed 24, 25 and 31 December",
        lat: 68.20806,
        lng: 14.45139,
        url: "https://www.museumnord.no/en/our-venues/galleri-espolin/"
      },
      {
        nome: "Vågan Church (Lofoten Cathedral)",
        testo: "The large wooden church of Kabelvåg, from 1898, nicknamed the «Lofoten Cathedral» for its size. It was built this big for the fishermen who arrived by the thousands for the cod season.",
        come: "By car on the E10, at the entrance to Kabelvåg coming from Svolvær.",
        quando: "During the day; from outside it can be seen at any time.",
        tempo: "30 minutes",
        lat: 68.2157,
        lng: 14.4832
      },
      {
        nome: "Lofoten Krigsminnemuseum",
        testo: "A private museum on the Second World War in northern Norway, packed with uniforms, objects and documents, including those from the 1941 British raid on Lofoten. Small and crammed, it appeals to history lovers.",
        come: "On foot from the harbour, in the centre.",
        quando: "On a rainy day, or after dinner: it also opens in the evening.",
        tempo: "1 hour",
        costo: "150 NOK adults, 50 NOK children, about €13",
        orari: "Monday-Friday 11am-4pm, Saturday 11am-3pm, Sunday 12pm-3pm; every day also 6:30pm-10:15pm",
        lat: 68.23116,
        lng: 14.56482,
        url: "https://lofotenkrigmus.no"
      },
      {
        nome: "Magic Ice Lofoten",
        testo: "A hall of ice sculptures on the harbour, with a bar where drinks are served in an ice glass. It's a tourist attraction, but in the rain it's one of the few indoor things to do in Svolvær.",
        come: "On foot from the centre; ponchos and gloves are provided at the entrance.",
        quando: "Evening or a day of bad weather.",
        tempo: "45 minutes",
        costo: "325 NOK with a welcome drink, about €28",
        orari: "1 June to 1 September daily 12pm-10pm; in winter 2pm-10pm, from 18 September from 6pm",
        lat: 68.22953,
        lng: 14.56676,
        url: "https://www.magicice.no/listings/svolvaer-lofoten/"
      },
      {
        nome: "Svinøya",
        testo: "The islet joined to the centre by a bridge, where Svolvær began: red fishermen's houses, cod drying racks and historic rorbuer now rented to travellers. It's the most photogenic corner of town.",
        come: "On foot from the centre, about ten minutes across the bridge.",
        quando: "Evening, with low light over the harbour.",
        tempo: "45 minutes",
        costo: "free",
        lat: 68.23396,
        lng: 14.57969
      },
      {
        nome: "Fløya and Djevelporten",
        testo: "The mountain behind Svolvær, the same one as Svolværgeita. The trail passes under Djevelporten, the «Devil's Gate», a boulder wedged between two rock walls, and continues to the top of Fløya with views over the harbour and the islands.",
        come: "It starts from the residential area north of the centre; steep trail with stepped and rocky sections.",
        quando: "A cloudless day, never on wet rock.",
        tempo: "half a day",
        costo: "free",
        lat: 68.25084,
        lng: 14.59798,
        consiglio: "Those who don't want to reach the summit can stop at Djevelporten: the view over the harbour is already excellent."
      }
    ],
    sapori: [
      {
        nome: "Stockfish (tørrfisk)",
        testo: "Cod dried in the open air on traditional wooden racks; eaten in soup or with potatoes."
      },
      {
        nome: "Skrei",
        testo: "Winter Arctic cod, from January to April, in local restaurants."
      },
      {
        nome: "Paleo Arctic",
        testo: "The restaurant where I ate best on the whole trip: book in advance."
      }
    ],
    attenzioni: [
      "Lofoten roads are narrow with many bridges: watch for buses and campers.",
      "Book the Trollfjord and dinners ahead in summer.",
      "Public access rights apply, but no camping near houses and no bivouacking in village car parks."
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: RIB to the Trollfjord (2 hours, book ahead)",
          "Lunch in the centre and a walk around Svinøya and the harbour",
          "Afternoon in Kabelvåg: Lofotakvariet, Lofotmuseet and Vågan Church",
          "Evening: dinner (Paleo Arctic needs booking) and the Krigsminnemuseum or Magic Ice"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Henningsvær (27 minutes by car), football pitch and canal",
          "Lunch on the canal and an afternoon on Festvågtind",
          "Back to Svolvær for dinner"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Fløya and Djevelporten in the morning",
          "Afternoon at the Lofotr Viking Museum in Borg (about 1 hour by car), or set off towards Reine"
        ]
      }
    ],
    zone: [
      {
        nome: "Centre and harbour",
        perChi: "those who want restaurants, shops and excursion departures on foot",
        testo: "Seafront hotels and apartments overlooking the harbour, a few steps from the Trollfjord RIBs and the bars.",
        fascia: "€150-300"
      },
      {
        nome: "Svinøya",
        perChi: "those who want to sleep in a historic rorbu",
        testo: "Restored fishermen's houses with kitchens, on the islet joined to the centre by a bridge; quiet but ten minutes' walk from everything.",
        fascia: "€170-300"
      },
      {
        nome: "Kabelvåg",
        perChi: "those who prefer a quieter village or want a hostel",
        testo: "5 km from Svolvær, with the Storvågan museums, the big wooden church and a summer hostel with sauna.",
        fascia: "€100-200"
      },
      {
        nome: "Campsites and cabins",
        perChi: "those travelling with a tent, campervan or a tight budget",
        testo: "Lofoten Feriesenter, just outside Svolvær, has pitches and simple cabins.",
        fascia: "from about 200 NOK per person (about €17)"
      }
    ],
    gite: [
      {
        nome: "Henningsvær",
        distanza: "23 km, about 30 minutes by car",
        come: "By car along the E10 and then the Henningsvær road, which crosses two bridges.",
        testo: "The fishing village with the football pitch on the rock, the canal and the Festvågtind trail."
      },
      {
        nome: "Lofotr Viking Museum at Borg",
        distanza: "55 km, about 1 hour by car",
        come: "By car west on the E10.",
        testo: "A Viking chieftain's longhouse rebuilt at full scale, with ships and outdoor activities in summer."
      },
      {
        nome: "Reine and Hamnøy",
        distanza: "121 km, about 2 hours 10 minutes by car",
        come: "By car on the E10 to the far west of the archipelago.",
        testo: "The most photographed bay in Lofoten and Reinebringen. As a day trip it's a rush: better to move base for one or two nights."
      }
    ],
    faq: [
      {
        domanda: "How many nights do you need in Svolvær?",
        risposta: "Two or three: one day for the Trollfjord and Kabelvåg, one for Henningsvær and Festvågtind, the third for a hike or the Lofotr Viking Museum."
      },
      {
        domanda: "Is it better to stay in Svolvær or Reine?",
        risposta: "It's worth splitting the stay: Svolvær for the eastern islands, Reine or Flakstad for the western ones. They are about two hours apart by car, too far to drive back and forth every day."
      },
      {
        domanda: "Do you need to book the Trollfjord trip?",
        risposta: "In summer yes, a few days ahead: the RIBs have few seats and fill up. The tour lasts about two hours and thermal suits are provided."
      },
      {
        domanda: "Can you visit Svolvær without a car?",
        risposta: "The centre, Svinøya and the boat trips yes, since they leave from the harbour. For Kabelvåg, Henningsvær and the rest of the archipelago a car is almost essential."
      },
      {
        domanda: "What to do in Svolvær when it rains?",
        risposta: "The Kabelvåg museums (aquarium, Lofotmuseet, Galleri Espolin), the Krigsminnemuseum, which also opens in the evening, and Magic Ice. In the rain, rocky trails are best avoided."
      },
      {
        domanda: "How do you get to Svolvær from Bodø?",
        risposta: "By car with the Bognes-Lødingen ferry, about five hours in total, or with the Bodø-Moskenes ferry and then two hours' drive from Reine."
      }
    ],
    esperienzeSlugs: ['trollfjord-rib'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: "The church of Svolvær with the red houses of the harbor against a stormy sky, Lofoten",
    immagine: '/images/norvegia/svolvaer-stock.jpg',
  },
  {
    slug: 'henningsvaer',
    paeseSlug: 'norvegia',
    ordine: 4,
    nome: 'Henningsvær',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: "half a day, as an outing from Svolvær (about 30 minutes by car)",
    visitataPersonalmente: true,
    introduzione: "The \"little Venice\" of the Lofoten: a fishing village with the most photographed soccer field in Norway and a bohemian atmosphere among bakeries, crafts and vintage boutiques.",
    percheAndarci: "One of the most photogenic villages in the archipelago, with a great lunch on the canal and the starting point for the Festvågtind trail.",
    cosaVedere: ['The famous soccer field, great for photos/drone', "The village canal", 'Vintage boutiques and local crafts'],
    cosaFare: [
      "Lunch at Fiskekrogen, on the village canal: the \"little Venice\" effect is real, best to book and ask for a table by the window",
      'A stroll around the village, small but lively',
      'Festvågtind trail in the afternoon (see the dedicated experience page)',
    ],
    doveDormire: "I didn't stay overnight in Henningsvær: you sleep in Svolvær, about 30 minutes by car.",
    doveMangiare: "Fiskekrogen, on the canal: excellent food, but best to book ahead, especially for a table by the window.",
    comeArrivare: "30 minutes by car from Svolvær. It's 23 km: follow the E10 west and then road 816, which enters the village over two bridges. Paid parking is at the entrance to the village, and from there everything is on foot. From the Lofotr Viking Museum at Borg and western Lofoten it takes about 50 minutes (47 km).",
    comeSpostarsi: 'On foot, the village is small.',
    periodoMigliore: "I was there in summer; for the other months I have no direct reference",
    costi: "I didn't note down the costs of this stop. The village itself is free; parking at the entrance is paid. Roughly, per person per day: €80-120 with supermarket food and a campsite night; €180-260 with a night in a rorbu shared by two and lunch on the canal; over €350 with refined accommodation and guided excursions.",
    erroriDaEvitare: ["Not booking Fiskekrogen: at peak hours the restaurant fills up fast"],
    miaEsperienza:
      "Henningsvær was one of the surprises of the trip: lunch on the canal, the soccer field and, in the afternoon, Festvågtind, a wilder and less crowded hike than Reinebringen.",
    luoghi: [
      {
        nome: "Henningsvær football pitch",
        testo: "An artificial-turf pitch built on a small rock island, surrounded by the sea. From above with a drone or from the access bridge it is one of the best known photos of the Lofoten.",
        come: "Drive from Svolvær and park in the village.",
        quando: "Early morning or evening, with soft light.",
        tempo: "30 minutes",
        costo: "free entry",
        lat: 68.1525,
        lng: 14.19723,
        consiglio: "Do not enter the pitch during matches or training."
      },
      {
        nome: "Canal and harbour",
        testo: "The village spreads over small islands joined by bridges, with colourful wooden houses and old fish warehouses. The little Venice feel is real along the canal.",
        come: "On foot from the parking lot.",
        quando: "Morning, before the groups.",
        tempo: "1-2 hours",
        costo: "free entry",
        lat: 68.1529,
        lng: 14.2008,
        consiglio: "Lunch at Fiskekrogen on the canal: book and ask for a window table."
      },
      {
        nome: "Festvågtind",
        testo: "A peak above the village, with views of the open sea and the islands. The trail is wilder and less crowded than Reinebringen.",
        come: "The starting point is near the village; trail with steep sections.",
        quando: "Afternoon in clear weather.",
        tempo: "3-4 hours",
        costo: "free entry",
        lat: 68.17806,
        lng: 14.22527,
        consiglio: "It was one of the surprises of the trip: fewer tourists, more silence."
      },
      {
        nome: "KaviarFactory",
        testo: "A former caviar factory on the harbour turned into a contemporary art hall, with temporary exhibitions of international artists. The white industrial spaces, with windows onto the sea, are worth the visit as much as the works.",
        come: "On foot in the village, on the harbour side.",
        quando: "During the day, especially in summer.",
        tempo: "45 minutes",
        lat: 68.15528,
        lng: 14.20129
      },
      {
        nome: "Henningsvær Lysstøperi & Café",
        testo: "A handmade candle workshop with a small café: you can watch the candles being poured and warm up with a cake between one walk around the village and the next.",
        come: "On foot, in the central part of the village.",
        quando: "A break halfway round, in the cold or the rain.",
        tempo: "30 minutes",
        lat: 68.15446,
        lng: 14.20207
      },
      {
        nome: "Henningsvær bridges",
        testo: "Two arch bridges, opened in 1983, link the village to the island of Austvågøy: the longer one is 258 metres. Before them there was only a ferry from Festvåg, and arriving over the sea is already part of the visit.",
        come: "On road 816, the only road access to the village.",
        quando: "On arrival, in the evening light.",
        tempo: "15 minutes",
        costo: "free",
        lat: 68.15972,
        lng: 14.21472
      },
      {
        nome: "Henningsvær Church",
        testo: "A wooden church from 1974 with 250 seats, on the islet of Heimøya. From here you see the village from the other side of the harbour.",
        come: "On foot from the centre across the small harbour.",
        quando: "During the day.",
        tempo: "20 minutes",
        lat: 68.1518,
        lng: 14.1991
      },
      {
        nome: "Rørvik beach (Rørvikstranda)",
        testo: "A beach of pale sand and green-blue water below the mountains, along the E10 between Kabelvåg and Henningsvær. There's a campsite next to it, and it's the handiest stop on the drive.",
        come: "By car from Svolvær, west along the E10.",
        quando: "A sunny day, even just for a walk on the sand.",
        tempo: "30 minutes",
        costo: "free",
        lat: 68.20399,
        lng: 14.23275
      }
    ],
    sapori: [
      {
        nome: "Fiskekrogen",
        testo: "Restaurant on the canal with fresh local fish: excellent, to be booked."
      },
      {
        nome: "Baked cod",
        testo: "A simple dish with potatoes and butter, traditional cooking."
      }
    ],
    attenzioni: [
      "Parking in the village is limited: arrive early.",
      "For the Festvågtind trail you need hiking boots: after rain it is slippery."
    ],
    programmi: [
      {
        titolo: "Half a day",
        tappe: [
          "Arrival from Svolvær over the bridges",
          "Walk around the canal and the harbour",
          "Lunch on the canal (Fiskekrogen needs booking)",
          "Football pitch and back"
        ]
      },
      {
        titolo: "1 day",
        tappe: [
          "Morning: stop at Rørvik beach on the way",
          "Canal, KaviarFactory and a coffee at the Lysstøperi",
          "Lunch on the canal and the football pitch",
          "Afternoon: Festvågtind (about 3 hours)"
        ]
      },
      {
        titolo: "2 days with a night in the village",
        tappe: [
          "Day 1 as above, with dinner and the evening in the village without the groups",
          "Day 2: Heimøya church and the harbour early in the morning",
          "Head west: Lofotr Viking Museum at Borg (50 minutes)"
        ]
      }
    ],
    zone: [
      {
        nome: "Henningsvær",
        perChi: "those who want the village in the evening, once the groups have left",
        testo: "Rorbuer, small hotels on the quays and guesthouses: few beds, to be booked early in summer.",
        fascia: "€170-300"
      },
      {
        nome: "Svolvær",
        perChi: "those who want more choice and the Trollfjord departures",
        testo: "30 minutes by car, with harbour hotels, apartments and the best restaurants in the area.",
        fascia: "€150-300"
      },
      {
        nome: "Kabelvåg",
        perChi: "those looking for slightly lower prices halfway",
        testo: "A quiet village 20 minutes away, with museums, a summer hostel and rorbuer.",
        fascia: "€100-200"
      }
    ],
    gite: [
      {
        nome: "Svolvær",
        distanza: "23 km, about 30 minutes by car",
        come: "By car on road 816 and then the E10 east.",
        testo: "The main harbour of Lofoten, with the Trollfjord by RIB, Svinøya and the Svolværgeita mountain."
      },
      {
        nome: "Kabelvåg and the Storvågan museums",
        distanza: "18 km, about 20 minutes by car",
        come: "By car towards Svolvær; the museums are just before the village.",
        testo: "Aquarium, Lofotmuseet and Galleri Espolin on a single ticket, plus the big wooden church."
      },
      {
        nome: "Lofotr Viking Museum at Borg",
        distanza: "47 km, about 50 minutes by car",
        come: "By car west along the E10.",
        testo: "The rebuilt Viking longhouse, easy to combine if continuing towards Reine."
      }
    ],
    faq: [
      {
        domanda: "How much time do you need in Henningsvær?",
        risposta: "Half a day for the village, lunch and the football pitch. With Festvågtind it becomes a full day."
      },
      {
        domanda: "Is it worth staying overnight in Henningsvær?",
        risposta: "Yes, to see the village in the evening without the daytime crowds, but beds are few and expensive. Otherwise stay in Svolvær, half an hour away by car."
      },
      {
        domanda: "Where do you park in Henningsvær?",
        risposta: "In the paid car park at the entrance to the village. The inner streets are narrow and the village is explored on foot."
      },
      {
        domanda: "Can you go onto the football pitch?",
        risposta: "It's a real pitch used by the local team: watch from the edge and stay off during matches and training. The famous photo is taken with a drone."
      },
      {
        domanda: "Is Festvågtind difficult?",
        risposta: "It's 3 km with 500 metres of ascent, more technical than Reinebringen on rock and sand. Up and down takes about 3 hours; you need soles that grip on rock."
      },
      {
        domanda: "Henningsvær or Reine?",
        risposta: "They're different: Henningsvær is a village to explore on foot in half a day, Reine is the base for the hikes and beaches of the west. A week-long trip covers both."
      }
    ],
    esperienzeSlugs: ['festvagtind-trail'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: 'Henningsvær from the drone: the football pitch on the rock, the stockfish racks and the archipelago of green islets',
    immagine: '/images/norvegia/henningsvaer-stadio-riccardo.jpg',
  },
  {
    slug: 'reine',
    paeseSlug: 'norvegia',
    ordine: 5,
    nome: 'Reine',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '1-2 days, base for Reinebringen and the trip to Bunes beach',
    visitataPersonalmente: true,
    introduzione: "The emblematic village of the Lofoten, base for the archipelago's most iconic hike and departure point of the ferry to one of the area's most beautiful beaches.",
    percheAndarci: "Reinebringen is the hike everyone associates with the Lofoten, and from here you also set out for Bunes beach: for me they were two of the strongest experiences of the whole trip.",
    cosaVedere: ['The village of Reine', 'Reinebringen from above'],
    cosaFare: [
      'Hike up Reinebringen (see the dedicated experience page)',
      'Ferry and excursion to Bunes beach (see the dedicated experience page)',
      'Stop at the Borg Viking Museum on the way from Svolvær (see the dedicated experience page)',
    ],
    doveDormire: "I didn't stay overnight in Reine: you sleep in Nesland/Flakstad, a few minutes by car.",
    doveMangiare: "I didn't note down any restaurants in Reine: the village's Coop Prix is handy for putting together a packed lunch before the excursions.",
    comeArrivare: "From Svolvær via Leknes (with a stop at the Borg Viking Museum), about 55 minutes by car from Svolvær to Borg, then another 20-30 minutes to Reine. From Bodø there's the ferry to Moskenes, a few minutes from Reine: about 3 hours 15 minutes at sea, a car costs around 600 NOK plus the reservation (in summer, to be made on the Torghatten Nord website), foot passengers travel free; arrive at the port 40 minutes early. From Svolvær it's 121 km along the E10, about 2 hours 10 minutes without stops.",
    comeSpostarsi: 'Paid parking in the village (200 NOK/3h).',
    periodoMigliore: "Reinebringen is only worth it with a clear sky: check the forecast before planning the day.",
    costi: "Parking 200 NOK/3h. The Reinebringen stairs are free. 2026 references: Lofotr 210 NOK off-season, Å museum 125 NOK. Roughly, per person per day: €80-120 at a campsite or cabin with supermarket food; €200-280 with a rorbu shared by two and one dinner out; over €350 with refined rorbuer and a restaurant every evening.",
    erroriDaEvitare: [
      "Reinebringen takes a minimum of fitness because of the elevation gain; if the sky is overcast, better to postpone it, because the view is everything",
      "For the ferry to Vindstad/Bunes, arrive at least 30 minutes early even with reserved spots",
    ],
    miaEsperienza:
      "Reine was the most intense point of the trip: Reinebringen (1h50 my total time, between climb, break and descent) and the next day Bunes beach, reachable only by ferry. Of all the stops, they are the two memories I brought home.",
    luoghi: [
      {
        nome: "Reinebringen",
        testo: "The most famous climb in the Lofoten: a 448-metre summit reached by a stone staircase built between 2016 and 2019. From the top you see Reine with the fjords and mountains around.",
        come: "Parking in the village, well-marked trail; steep but short ascent.",
        quando: "In clear weather and no rain, to avoid slippery steps. Early morning or evening.",
        tempo: "about 2 hours including ascent, rest and descent",
        costo: "stairs free; parking in Reine 200 NOK for 3 hours, about €17",
        lat: 67.9261,
        lng: 13.07532,
        consiglio: "Check the forecast first: with clouds you see nothing from the top."
      },
      {
        nome: "Reine and Hamnøy",
        testo: "A fishing village with red rorbuer on rocks dropping into the sea, among the most photographed views of Norway. A few minutes down the road is Hamnøy, with the same houses and the bridge.",
        come: "On foot in the village; Hamnøy is a short drive away.",
        quando: "Morning, with soft light.",
        tempo: "1-2 hours",
        costo: "free entry",
        lat: 67.9324,
        lng: 13.0887,
        consiglio: "The Coop Prix supermarket in Reine is handy for a packed lunch."
      },
      {
        nome: "Bunes beach",
        testo: "A white sand beach reachable only by ferry from Reine, with a walk from the landing. It is one of the most beautiful and least accessible places in the archipelago.",
        come: "Seasonal ferry from Reine, then a trail on foot.",
        quando: "Summer, after checking the ferry timetable in advance.",
        tempo: "half a day",
        lat: 67.97767,
        lng: 12.96349,
        consiglio: "Together with Reinebringen, it is the memory I took home."
      },
      {
        nome: "Lofotr Viking Museum at Borg",
        testo: "A full-size reconstruction of a Viking chieftain's longhouse, the longest reconstructed longhouse in the world, with ships, a forge and re-enactments. Open from 1 May to 15 September; off-season only on some days (November-December 2026: Wednesday and Saturday 11am-5pm). It lies on the road between Svolvær and Reine.",
        come: "By car from Svolvær; an ideal stop on the transfer.",
        quando: "Full day.",
        tempo: "2 hours",
        costo: "210 NOK adults, 160 NOK children 6-15 from mid-September to the end of December 2026, about €18; around 250 NOK in high season",
        orari: "daily from 1 May to 15 September; November-December 2026 Wednesday and Saturday 11am-5pm, closed 26 December",
        lat: 68.24399,
        lng: 13.75686,
        url: "https://lofotr.no",
        consiglio: "A useful stop if it rains."
      },
      {
        nome: "Sakrisøy",
        testo: "An islet between Reine and Hamnøy with rorbuer painted ochre yellow instead of red, one of the most photographed views on the E10. On the quay is the Anita's Seafood kiosk, with sandwiches, soups and sushi overlooking the fjord.",
        come: "By car, 5 minutes from Reine on the E10; order at the counter.",
        quando: "At lunchtime, in summer, when the kiosk is open.",
        tempo: "1 hour with lunch",
        lat: 67.94109,
        lng: 13.11064,
        url: "https://sakrisoy.no"
      },
      {
        nome: "Kvalvika and Ryten",
        testo: "Kvalvika is a beach enclosed between two rock walls on the open sea, reachable only on foot. The trail starts from Fredvang, crosses a pass and drops to the sand; those with energy left climb Ryten, the peak overlooking the bay from above.",
        come: "By car from Reine to Fredvang (25 km, about 30 minutes), then on foot on a muddy, rocky trail.",
        quando: "A dry, clear day; in summer also in the evening, with the midnight sun.",
        tempo: "half a day",
        costo: "trail free",
        lat: 68.07703,
        lng: 13.09581,
        consiglio: "Proper hiking boots: after rain the peat sections become very slippery."
      },
      {
        nome: "Ramberg beach",
        testo: "A long white sand beach along the E10, with mountains behind and turquoise water in the sun. Next to it is the Ramberg Resort, handy for dinner before a walk on the sand.",
        come: "By car, about 30 minutes from Reine (26 km) on the E10.",
        quando: "Evening: in summer the light lasts into the night.",
        tempo: "30-60 minutes",
        costo: "free",
        lat: 68.0962,
        lng: 13.23793,
        consiglio: "The Ramberg supermarket is better stocked and cheaper than the Coop in Reine, but it only sells beer: no wine or spirits."
      },
      {
        nome: "Å and the Fishing Village Museum",
        testo: "Å, at the end of the E10, is the village with the shortest name in the world and a preserved fishing village. The Norsk Fiskeværsmuseum fills the old houses and warehouses and tells how the communities that lived off fishing in Lofoten got by.",
        come: "By car, about 15 minutes from Reine (9 km); parking at the village entrance.",
        quando: "Late morning, with the guided tour; also in the rain.",
        tempo: "1-1.5 hours",
        costo: "125 NOK adults, 95 NOK ages 6-17, about €11 (autumn 2026)",
        orari: "1 October-6 December 2026 daily 9am-3pm; closed 7 December to 2 January",
        lat: 67.88137,
        lng: 12.98206,
        url: "https://www.museumnord.no/en/our-venues/norsk-fiskevaersmuseum/",
        consiglio: "The village's historic bakery has few seats: better to go early."
      }
    ],
    sapori: [
      {
        nome: "Tørrfisk",
        testo: "Dried cod, the symbol of the Lofoten: you can buy it in packs in shops."
      },
      {
        nome: "Packed lunch",
        testo: "The Coop Prix in Reine is the most practical solution before the hikes."
      }
    ],
    attenzioni: [
      "Reinebringen: there are many steps and the trail is crowded; do not rush down, especially in rain.",
      "The Bunes ferry has limited hours and can be cancelled: check the day before.",
      "Parking and traffic in the village are limited: do not leave the car along the road."
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Reine village and Hamnøy bridge",
          "Reinebringen (about 2 hours up and down)",
          "Lunch at Sakrisøy",
          "Afternoon in Å and at the Fishing Village Museum",
          "Evening: dinner in Ramberg and a walk on the beach"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: morning ferry to Vindstad (40 minutes)",
          "Trail to Bunes beach and a packed lunch",
          "Afternoon ferry and shopping in Ramberg"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Kvalvika from Fredvang, with Ryten for those with strong legs",
          "Head back east with a stop at the Lofotr Viking Museum in Borg"
        ]
      }
    ],
    zone: [
      {
        nome: "Reine and Hamnøy",
        perChi: "those who want to wake up facing the bay",
        testo: "Red rorbuer on the rocks, some facing Reinebringen; the most sought-after, often with a minimum stay in summer.",
        fascia: "€170-350"
      },
      {
        nome: "Sakrisøy",
        perChi: "those looking for a rorbu between Reine and Hamnøy",
        testo: "A few yellow fishermen's houses on the islet, with the seafood kiosk downstairs and the same views as Reine.",
        fascia: "€170-300"
      },
      {
        nome: "Ramberg and Flakstad",
        perChi: "those who want to spend less and don't mind half an hour's drive",
        testo: "Cabins, guesthouses and campsites near Ramberg beach, with the best-stocked supermarket in the area.",
        fascia: "€80-200"
      },
      {
        nome: "Tent at Bunes",
        perChi: "those travelling with a tent who want the beach to themselves",
        testo: "Camping is allowed on Bunes beach, with no fires on the sand and all rubbish carried back; there are no shops in Vindstad.",
        fascia: "free with your own tent, ferry extra"
      }
    ],
    gite: [
      {
        nome: "Å",
        distanza: "9 km, about 15 minutes by car",
        come: "By car on the E10 to the end of the road.",
        testo: "The fishing village at the tip of Lofoten, with the museum, the historic bakery and the stockfish racks."
      },
      {
        nome: "Nusfjord",
        distanza: "41 km, about 45 minutes by car",
        come: "By car east on the E10 and then the side road to Nusfjord.",
        testo: "One of the best-preserved fishing villages in Norway; in summer there is an entry ticket."
      },
      {
        nome: "Lofotr Viking Museum at Borg",
        distanza: "66 km, about 1 hour 10 minutes by car",
        come: "By car east on the E10.",
        testo: "The Viking longhouse rebuilt at full scale: a good stop in the rain."
      },
      {
        nome: "Bodø",
        distanza: "about 3 hours 15 minutes by ferry from Moskenes",
        come: "Torghatten Nord Moskenes-Bodø ferry; in summer car spaces must be booked.",
        testo: "The mainland town, with Mjelle beach and the ferry to Kjerringøy; it's also the quickest way to leave Lofoten."
      }
    ],
    faq: [
      {
        domanda: "How many days do you need in Reine?",
        risposta: "Two: one for Reinebringen with Hamnøy and Å, one for Bunes beach by ferry. A third day adds Kvalvika."
      },
      {
        domanda: "Is Reinebringen difficult?",
        risposta: "Technically no, it's 1,978 stone steps, but they climb 448 metres in 1.1 km and you feel it. The average time is between two and four hours return."
      },
      {
        domanda: "How do you get to Bunes beach?",
        risposta: "With the ferry from Reine to Vindstad, about 40 minutes, with few sailings a day: booking a seat is wise. From Vindstad it's a 45-50 minute walk on an easy trail."
      },
      {
        domanda: "Where do you park in Reine?",
        risposta: "In the village's paid car park, 200 NOK for three hours. Don't leave the car along the road: spaces are few and summer traffic is heavy."
      },
      {
        domanda: "Is it better to stay in Reine or Svolvær?",
        risposta: "For the western islands, Reine or Flakstad; for the Trollfjord and Henningsvær, Svolvær. They are two hours apart by car, so splitting the stay makes sense."
      },
      {
        domanda: "What to do in Reine if it rains?",
        risposta: "The Fishing Village Museum in Å and the Lofotr Viking Museum, both indoors. In the rain the Reinebringen steps and the summit rock get slippery: better to move the hike."
      }
    ],
    esperienzeSlugs: ['reinebringen', 'spiaggia-di-bunes', 'viking-museum-borg'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: "Aerial view from Reinebringen over the village of Reine and the surrounding fjords",
    immagine: '/images/norvegia/reinebringen-stock.jpg',
  },
  {
    slug: 'nesland-flakstad',
    paeseSlug: 'norvegia',
    ordine: 6,
    nome: 'Nesland / Flakstad',
    tipologia: ['natura'],
    giorniConsigliati: '2-3 nights, second base of the trip',
    visitataPersonalmente: true,
    introduzione: "The most isolated and quiet base of the trip: a rorbu looking straight onto the fjord, the starting point for the scenic walk to Nusfjord.",
    percheAndarci: "To step away from the pace of the most famous hikes with a quiet base, and for the walk to Nusfjord, less traveled but just as beautiful.",
    cosaVedere: ['The fjord in front of the rorbu', 'The village of Nusfjord, at the end of the scenic walk'],
    cosaFare: [
      'Scenic walk Nesland-Nusfjord (see the dedicated experience page)',
      'Evening barbecue at the rorbu with groceries bought in Ramberg',
    ],
    doveDormire:
      "I stayed in a private rorbu overlooking the fjord, Casa Flakstad, the most isolated and quiet lodging of the trip. It's a small place, with too few online reviews to quote: a simple, basic rorbu, few lights, plenty of silence, the fjord a few steps away.\n\nAlternatives in Nesland/Flakstad. Budget: Ramberg Gjestegård (simple cabins, 850-1050 NOK a night, discount in low season), Lofoten Beach Camp (family-run campsite in Ramberg, sauna and picnic area) · mid-range (the rorbu I chose falls here): Lofoten Nesland Guesthouse (very high review score, quiet location with an ocean view) · upscale without going overboard: Nusfjord Village & Resort (renovated historic rorbuer in the village of Nusfjord, sauna and hot tubs included; pricey, but with enthusiastic reviews).",
    doveMangiare:
      "Dinner at Ramberg Resort, in a good spot a couple of steps from Ramberg beach for a post-dinner stroll. The supermarket in Ramberg is better stocked and cheaper than the Coop in Reine and is the go-to for organizing an evening barbecue (salmon, vegetables, sides). Note: it only sells beer, no wine or spirits.",
    comeArrivare: "By car on the E10, the road running through the whole Lofoten: about half an hour from Leknes, about an hour and a half from Svolvær, about 50 minutes from Å. The nearest ferry port is Moskenes, served by the Moskenes-Bodø ferry (about 3 hours 15 minutes; car up to 6 metres 605 NOK, about 53 €; passengers free). The most convenient airports are Leknes, with flights from Bodø, and Bodø itself. E10 buses stop at Ramberg but run rarely: a car remains the practical choice.",
    comeSpostarsi: 'Rental car.',
    periodoMigliore: "I was there in summer; for the other months I have no direct reference",
    costi: "Cabins from 850-1050 NOK/night for the budget options in the area. Indicative daily budget per person: low 80-110 € (simple cabin for two, groceries in Ramberg and a barbecue); mid 150-220 € (rorbu or guesthouse in a double room, one restaurant dinner, fuel); high 300 € and up (restored rorbuer in Nusfjord, seafood dinners).",
    erroriDaEvitare: ["The Ramberg supermarket doesn't sell wine/spirits, only beer: plan your shopping accordingly"],
    miaEsperienza:
      "The rorbu in Nesland was the quietest place of the whole trip: no artificial light, the fjord a few steps away, and one of the most relaxed barbecue evenings of the week.",
    luoghi: [
      {
        costo: "Free",
        lat: 68.0042,
        lng: 13.2872,
        nome: "Nesland-Nusfjord walk",
        testo: "A scenic path that follows the fjord coast from Nesland to the village of Nusfjord, with views of the sea and the mountains of Flakstadøya.",
        come: "On foot from the rorbu, along the coast.",
        quando: "Summer evening, with the long light.",
        tempo: "2-3 hours round trip",
        consiglio: "The silence and the few lights of the place are the best part."
      },
      {
        costo: "In summer there is an entry ticket to the village",
        lat: 68.0354,
        lng: 13.3477,
        nome: "Nusfjord",
        testo: "A well-preserved fishing village on the south coast of Flakstadøya, with red rorbuer and a small harbour.",
        come: "A short drive from Nesland.",
        quando: "Morning or evening, avoiding the groups.",
        tempo: "1 hour",
        consiglio: "A short walk, but best in calm weather."
      },
      {
        lat: 68.0899,
        lng: 13.2299,
        nome: "Ramberg and the beaches of Flakstadøya",
        testo: "Ramberg has a long pale sand beach, a bit further on is Skagsanden and, on the neighbouring island of Vestvågøy, Haukland: among the most beautiful beaches in the Lofoten. The water is cold but the colour is Caribbean.",
        come: "By car from Nesland; Haukland is further, towards Leknes.",
        quando: "Summer, with sun.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "Supermarkets sell only beer: wine and spirits are sold only at Vinmonopolet."
      },
      {
        nome: "Skagsanden",
        testo: "A pale sand beach beside Flakstad church, framed by mountains. In winter it is one of the most photographed northern-lights spots; in summer, for long sunsets over the ocean.",
        come: "By car on the E10, with a small parking area by the road.",
        quando: "Summer evenings or clear winter nights.",
        tempo: "30 minutes-1 hour",
        costo: "Free",
        lat: 68.1066,
        lng: 13.2951,
      },
      {
        nome: "Flakstad Church",
        testo: "A red wooden church from the late 18th century, with an onion-domed tower, on the flat land between the road and the sea. It is one of the few old buildings still standing on the island.",
        come: "On the E10 between Ramberg and Skagsanden, with parking in front.",
        quando: "In summer, when the interior is open to visitors.",
        tempo: "20 minutes",
        lat: 68.1048,
        lng: 13.3063,
      },
      {
        nome: "Kvalvika beach",
        testo: "A wild bay on the north coast, reachable only on foot, enclosed between two rock walls. The trail climbs and dips through bog and stones before dropping onto the sand.",
        come: "From the parking area on the road to Fredvang, a trail of about 2 km each way.",
        quando: "Summer, in dry weather: when wet, the mud slows you down a lot.",
        tempo: "2-3 hours round trip",
        costo: "Free; paid parking",
        lat: 68.0781,
        lng: 13.102,
        consiglio: "Hiking shoes, no fires on the beach, and carry your rubbish out.",
      },
      {
        nome: "Ryten",
        testo: "The roughly 540-metre mountain above Kvalvika, with a rock ledge hanging over the beach. One of the finest views in the Lofoten, and a less crowded climb than Reinebringen.",
        come: "Same parking as Kvalvika; the trail splits halfway and climbs to the ridge.",
        quando: "Clear summer days; with low cloud you see nothing.",
        tempo: "4-5 hours round trip",
        costo: "Free; paid parking",
        lat: 68.0893,
        lng: 13.0929,
        consiglio: "You can combine it with the beach: up Ryten, down to Kvalvika.",
      },
      {
        nome: "Fredvang Bridges",
        testo: "Two arched bridges linking Flakstadøya with the village of Fredvang, over a strait of green water. Stopping halfway, in the small parking areas, gives one of the most photographed views in the area.",
        come: "By car, a detour off the E10 towards Fredvang.",
        quando: "In sunshine, when the water is at its clearest.",
        tempo: "20 minutes",
        costo: "Free",
        lat: 68.0803,
        lng: 13.2003,
      },
      {
        nome: "Glasshytta Vikten glassworks",
        testo: "A glass-blowing workshop in a stone-and-timber building on the north coast, facing the ocean. You can watch the glass being worked and buy pieces made on site; there is a small gallery and a summer café.",
        come: "By car, a detour off the E10 towards Vikten, about 15 minutes from Ramberg.",
        quando: "In summer; out of season it may close earlier.",
        tempo: "45 minutes",
        lat: 68.1387,
        lng: 13.3113,
      },
    ],
    sapori: [
      {
        nome: "Rorbu barbecue",
        testo: "Groceries from the Ramberg supermarket: salmon, vegetables and sides are the simplest dinner."
      }
    ],
    attenzioni: [
      "Ramberg: the supermarket sells only beer; for wine you need to go to the nearest Vinmonopolet.",
      "The rorbu is isolated: bring enough groceries and a torch."
    ],
    programmi: [
      { titolo: "1 day", tappe: ["Morning in Nusfjord before the groups", "Flakstad Church and Skagsanden", "Lunch and groceries in Ramberg", "Evening: the Nesland-Nusfjord walk in the long light"] },
      { titolo: "2 days", tappe: ["Day 1: as above", "Day 2: Kvalvika on foot, or Ryten if the sky is clear", "Fredvang Bridges on the way back", "Evening: barbecue at the rorbu"] },
      { titolo: "3 days", tappe: ["Days 1-2: as above", "Day 3: Å, Sakrisøy and Hamnøy to the west", "Or eastwards: Glasshytta Vikten and the beaches of Vestvågøy"] },
    ],
    zone: [
      { nome: "Nesland and Nusfjord", perChi: "Those after silence and a fjord view", testo: "Rorbuer and guesthouses scattered along the south coast, away from the main road. Very few services: shop in Ramberg." },
      { nome: "Ramberg", perChi: "Those who want a supermarket and a beach nearby", testo: "The best-served village on Flakstadøya, with the supermarket, Ramberg Resort and simple cabins on the beach.", fascia: "75-90 € (simple cabin, 850-1,050 NOK)" },
      { nome: "Fredvang", perChi: "Those planning Kvalvika and Ryten", testo: "A village beyond the bridges, at the foot of the Kvalvika and Ryten trails. Few places to stay; book early." },
    ],
    gite: [
      { nome: "Reine and Hamnøy", distanza: "about 30-40 minutes by car", come: "By car west along the E10.", testo: "Reine bay, Reinebringen and the red rorbuer of Hamnøy: the most famous stretch of the Lofoten." },
      { nome: "Å", distanza: "about 50 minutes by car", come: "By car to the end of the E10.", testo: "The Fishing Village Museum and the historic bakery, with a lunch stop in Sakrisøy." },
      { nome: "Haukland and Uttakleiv", distanza: "about 40-50 minutes by car", come: "By car east, past Leknes, on Vestvågøy island.", testo: "Two white beaches linked by a coastal road and a footpath: among the finest in the archipelago." },
      { nome: "Lofotr Viking Museum", distanza: "about 45 minutes by car", come: "By car east to Borg, past Leknes.", testo: "A reconstruction of a Viking chieftain's longhouse, open daily in summer; tickets are around 250 NOK in high season." },
    ],
    faq: [
      { domanda: "Is it better to stay on Flakstadøya rather than in Reine?", risposta: "With a car, yes: Reine is half an hour away, you are halfway between Å and Leknes, and evenings are far quieter. Without a car Reine is more convenient." },
      { domanda: "Do you pay to enter Nusfjord?", risposta: "In summer, yes, there is an entry ticket to the village. Out of season access is freer; the trail from Nesland reaches the village on foot either way." },
      { domanda: "How hard is the Kvalvika trail?", risposta: "It is not technical, but it climbs and dips over stones and bog for about 2 km each way. When wet it turns muddy: hiking shoes are needed." },
      { domanda: "Where can you buy groceries?", risposta: "At the Ramberg supermarket, better stocked and cheaper than the Coop in Reine. It only sells beer: wine and spirits only at the Vinmonopolet." },
      { domanda: "Can you see the northern lights from Flakstad?", risposta: "Yes, from late August to April, with clear, dark skies. Skagsanden and Ramberg beach are the most popular spots, as they face north over the sea." },
    ],
    esperienzeSlugs: ['nesland-nusfjord'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: "Traditional red rorbuer with a fog-wrapped mountain in the background, Lofoten",
    immagine: '/images/norvegia/nesland-stock.jpg',
  },
  {
    slug: 'a',
    paeseSlug: 'norvegia',
    ordine: 7,
    nome: 'Å',
    tipologia: ['cultura'],
    giorniConsigliati: "half a day, as an outing from Nesland/Flakstad (about 50 minutes by car)",
    visitataPersonalmente: true,
    introduzione: "The village with the shortest name in the world, and perhaps the most \"historic\" of the whole area: a traditional bakery and the Fisherman's Museum.",
    percheAndarci: "To understand the way of life of the Lofoten fishing communities, with an indulgent stop at the village bakery.",
    cosaVedere: ['The historic village', 'The traditional bakery'],
    cosaFare: ["Guided visit to the Fisherman's Museum (see the dedicated experience page)", "Lunch on the way at Sakrisøy at Anita's Seafood"],
    doveDormire: "I didn't stay overnight in Å: you sleep in Nesland/Flakstad.",
    doveMangiare:
      "The village's historic bakery (few seats, but excellent pastries). On the way, in Sakrisøy, Anita's Seafood: stuffed sandwiches, soups, sushi, a view of the fjord. You order at the counter, no table service.",
    comeArrivare: "Å is the last village on the E10, at the tip of Moskenesøya island: about 10 km from Reine, about 50 minutes by car from Nesland/Flakstad, about two hours from Svolvær. The ferry port for Bodø is at Moskenes, 5 km before the village: Moskenes-Bodø ferry (about 3 hours 15 minutes; car up to 6 metres 605 NOK, about 53 €; passengers free). Parking is after the tunnel, a few minutes' walk from the village centre. Local buses come from Reine and Leknes, but run rarely.",
    comeSpostarsi: 'On foot, the village is small.',
    periodoMigliore: "I was there in summer, in the rain; for the other months I have no direct reference",
    costi: "I didn't note down the costs of this stop. For reference: Fishing Village Museum 125 NOK (about 11 €), Reine parking 200 NOK for three hours, Moskenes-Bodø ferry 605 NOK per car. Indicative daily budget per person: low 80-110 € (hostel or shared rorbu, Coop groceries); mid 150-220 € (rorbu in a double room, a museum, a seafood lunch); high 300 € and up (waterfront rorbu in Reine or Hamnøy, restaurant dinners).",
    erroriDaEvitare: [],
    miaEsperienza:
      "Å struck me even in the rain: the Fisherman's Museum, with its guided tour in English, tells well a part of local history that elsewhere on the trip you only glimpse in passing.",
    luoghi: [
      {
        costo: "Adults 125 NOK (about 11 €, autumn 2026)",
        orari: "1 November-6 December 2026 daily 9:00-15:00; closed 7 December-2 January; guided tours most days",
        lat: 67.8814,
        lng: 12.9821,
        nome: "Norwegian Fishing Village Museum (Norsk Fiskeværsmuseum)",
        testo: "The museum of the village of Å, with houses, warehouses and a historic bakery, tells the story of Lofoten fishermen.",
        come: "By car from Nesland; opening times and how to visit on the official website.",
        quando: "Morning.",
        tempo: "1.5-2 hours",
        url: "https://www.museumnord.no",
        consiglio: "In the rain, as when I went, it is still a good indoor visit."
      },
      {
        lat: 67.8808,
        lng: 12.9818,
        nome: "Å historic bakery",
        testo: "A historic bakery, with cinnamon rolls and sweets made on site; few seats but excellent.",
        come: "On foot in the village.",
        quando: "Morning.",
        tempo: "30 minutes",
        consiglio: "Get a cinnamon swirl: it is the typical thing."
      },
      {
        lat: 67.9412,
        lng: 13.1111,
        nome: "Sakrisøy and Anita's Seafood",
        testo: "On the way to Å is Sakrisøy, a village of yellow cottages, and Anita's Seafood, where you eat soups, sandwiches and sushi. You order at the counter, no table service.",
        come: "By car, along the road to Å.",
        quando: "Lunch.",
        tempo: "1 hour",
        consiglio: "View of the fjord from the outdoor table."
      },
      {
        nome: "Lofoten Stockfish Museum (Lofoten Tørrfiskmuseum)",
        testo: "A small private museum in an old fish warehouse, devoted to stockfish: the winter cod fishery, drying on the racks and export, above all to Italy. In recent years its opening has been irregular.",
        come: "On foot at the entrance to the village.",
        quando: "In summer.",
        tempo: "45 minutes",
        lat: 67.8823,
        lng: 12.9841,
        consiglio: "If it is closed, the stockfish racks can still be seen outdoors around the village.",
      },
      {
        nome: "Moskstraumen viewpoint",
        testo: "Beyond the last houses of Å a path leads onto the rocks at the tip of the island, facing the Moskstraumen, the tidal current that inspired the 'Maelström' of Edgar Allan Poe and Jules Verne. Værøy island lies on the horizon.",
        come: "A few minutes on foot from the village centre.",
        quando: "With a calm sea and evening light.",
        tempo: "30 minutes",
        costo: "Free",
        consiglio: "The rocks are slippery when wet: keep away from the edge.",
      },
      {
        nome: "Hamnøy",
        testo: "A fishing village on an islet, with red rorbuer on the rocks and the Reine mountains behind. From the bridge on the E10 you get the most famous photo in the Lofoten.",
        come: "By car on the E10, about 20 minutes from Å; small parking area before the bridge.",
        quando: "Early morning or evening, with low-angled light.",
        tempo: "30 minutes",
        costo: "Free",
        lat: 67.9464,
        lng: 13.1376,
        consiglio: "Do not stop your car on the bridge: traffic squeezes past.",
      },
      {
        nome: "Reine",
        testo: "The village on the most famous bay in the Lofoten, at the foot of Reinebringen. Ferries to Vindstad and Bunes beach also leave from here.",
        come: "By car on the E10, about 15 minutes from Å.",
        quando: "Any time of day; Reinebringen only in clear weather.",
        tempo: "1 hour for the village, 2-4 hours with Reinebringen",
        costo: "Parking 200 NOK for three hours (about 17 €)",
        lat: 67.9325,
        lng: 13.0888,
      },
      {
        nome: "Moskenes",
        testo: "The ferry port for Bodø, a few kilometres from Å. There is not much to see, but it is where you arrive and leave if you enter or exit the Lofoten from the west.",
        come: "By car on the E10, about 5 km before Å.",
        quando: "At the port 40 minutes before departure.",
        tempo: "About 3 hours 15 minutes' crossing to Bodø",
        costo: "Car up to 6 metres 605 NOK (about 53 €), passengers free (2026)",
        url: "https://www.torghatten.no/en/our-routes/18-782",
        lat: 67.8998,
        lng: 13.0438,
        consiglio: "In summer, book the car space.",
      },
    ],
    sapori: [
      {
        nome: "Cinnamon rolls from the bakery",
        testo: "Fresh swirls from the historic bakery."
      },
      {
        nome: "Fish soup at Anita's",
        testo: "Soup and sandwiches with a fjord view."
      }
    ],
    attenzioni: [
      "Å is the end of the E10 road: there is nothing beyond, park calmly.",
      "The weather changes fast: bring a waterproof."
    ],
    programmi: [
      { titolo: "Half a day", tappe: ["The historic bakery as soon as it opens", "Fishing Village Museum with the guided tour", "Moskstraumen viewpoint", "Lunch in Sakrisøy"] },
      { titolo: "1 day from Å to Hamnøy", tappe: ["Morning in Å: bakery, museum, the rocks at the end of the village", "Lunch at Anita's Seafood in Sakrisøy", "Afternoon: Reinebringen if the sky is clear", "Evening: photos from the Hamnøy bridge"] },
      { titolo: "2 days", tappe: ["Day 1: as above", "Day 2: morning ferry from Reine to Vindstad and Bunes beach", "Back on the afternoon ferry"] },
    ],
    zone: [
      { nome: "Å", perChi: "Those who want to sleep in the historic village", testo: "Rorbuer and a hostel among the museum buildings. In the evening, once the cars leave, the village is silent." },
      { nome: "Reine, Sakrisøy and Hamnøy", perChi: "Those who want the most famous view", testo: "Rorbuer on the water facing the mountains, a quarter of an hour from Å. The most sought-after stays in the Lofoten: book months ahead." },
      { nome: "Sørvågen and Moskenes", perChi: "Those catching an early ferry", testo: "Between Å and Reine, a few minutes from the ferry port. Quieter and a little cheaper than the postcard villages." },
    ],
    gite: [
      { nome: "Reinebringen", distanza: "about 15 minutes' drive to Reine", come: "By car, then on foot: 1,978 stone steps, 448 metres of ascent.", testo: "The view down over Reine bay, the most famous in the Lofoten. Only worth it in clear weather." },
      { nome: "Bunes beach", distanza: "40-minute ferry from Reine, then about an hour's walk", come: "Reine-Vindstad ferry, few sailings a day: best to book a seat.", testo: "A beach hemmed in by rock walls on the north side of the island. There are no shops in Vindstad: bring water and lunch." },
      { nome: "Nusfjord and Flakstadøya", distanza: "about 50 minutes by car", come: "By car east on the E10.", testo: "The fishing village of Nusfjord, Flakstad Church and the beaches of Ramberg and Skagsanden." },
    ],
    faq: [
      { domanda: "How much time do you need for Å?", risposta: "Half a day is enough for the bakery, the Fishing Village Museum and the rocks at the end of the village. Adding Reine, Sakrisøy and Hamnøy makes a full day." },
      { domanda: "Can you drive into the village?", risposta: "Parking is after the tunnel, a few minutes' walk from the centre: leave the car there and explore on foot, the village is small." },
      { domanda: "Is the Fishing Village Museum open all year?", risposta: "Almost: it closes from early December to early January, and hours change with the seasons. In autumn 2026 it opens daily 9:00-15:00, with a 125 NOK ticket." },
      { domanda: "What does Å mean?", risposta: "In Old Norse it means 'river'. It is considered the shortest place name in the world, along with a few other Scandinavian villages of the same name." },
      { domanda: "When is the best time to go to Å?", risposta: "In summer for the long light and open venues such as the bakery and Anita's Seafood. From February to April the racks are full of stockfish and, at night, the northern lights appear." },
    ],
    esperienzeSlugs: ['museo-dei-pescatori'],
    tripSlugs: ['lofoten-estate-2025'],
    imageAlt: "Traditional stockfish drying racks at sunset, with snowy mountains in the background, Lofoten",
    immagine: '/images/norvegia/a-stock.jpg',
  },
  {
    slug: 'tromso',
    paeseSlug: 'norvegia',
    ordine: 8,
    nome: 'Tromsø',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '5 days, a trip of its own separate from the Lofoten',
    visitataPersonalmente: true,
    introduzione:
      "Norway's \"Arctic capital\", far north of the Lofoten: a base for chasing the northern lights, husky sledding and Sami culture, with the Arctic Cathedral as the symbol of the city.",
    percheAndarci: "For the northern lights and for a package of Arctic activities packed into a few days, with the city itself as a convenient base on foot.",
    cosaVedere: [
      'Arctic Cathedral (Ishavskatedralen), shaped like an iceberg, with one of the largest mosaic stained-glass windows in Europe',
      'Fjellheisen, the cable car up Mount Storsteinen (465 m) with views of the city and fjords: a cabin every 30 minutes, 4-5 minutes up, open until midnight in winter',
      'Polaria, the Arctic center with a panoramic cinema, seal pool and aquariums of North Sea species',
      'Polar Museum, dedicated to the history of Norwegian polar expeditions (seal hunting, Arctic expeditions, Amundsen)',
    ],
    cosaFare: [
      'Aurora chase by minibus (see the dedicated experience page)',
      'Husky sledding at Tromsø Villmarkssenter (see the dedicated experience page)',
      'Sami experience with reindeer (see the dedicated experience page)',
      "Winter whale watching toward Skjervøy (I didn't do it on this trip), see the dedicated experience page",
      "A night in a glass igloo in the Lyngenfjord (I didn't do it on this trip), see the dedicated experience page",
    ],
    doveDormire: "I don't remember exactly where I slept. The most convenient area is the harbor/Storgata one, a few steps from shops, bars and the meeting point for most excursions; a double in a central hotel in high season costs roughly €140-170/night.",
    doveMangiare: "I have general memories rather than specific places: local cuisine revolves a lot around king crab (kongekrabbe) and dried cod (tørrfisk/lutefisk), found in restaurants around Storgata.",
    comeArrivare: "Direct flight or with a connection to Tromsø. Tromsø-Langnes airport is about 5 km from the centre. The Flybussen costs about 125 NOK (200 return), ticket in the app or on board by card, and reaches Storgata and the main hotels in 15-20 minutes, with departures timed to arrivals. City buses 40 and 42 cost about 48 NOK but are slower and run rarely in the evening; a taxi costs about 250-350 NOK, around ten minutes.",
    comeSpostarsi: 'On foot in the center; organized minibuses/coaches for excursions outside the city.',
    periodoMigliore: "from late September to late March for the aurora, with polar night (little daylight) between December and January",
    costi: "Fjellheisen: 645 NOK (about €55) round trip for adults, 310 NOK (about €27) for children aged 3-15 (2026). Polaria: about 400-450 NOK (€35-39). Polar Museum: 130 NOK (about €11). Aurora chase by minibus: €100-160 per person. Husky sledding: €170-320 per person. Sami experience with reindeer: from €145 per person. Whale watching: €130-260 per person. Double in a central hotel in high season: €140-170/night. Roughly, per person per day: €70-110 with a hostel and supermarket food; €180-260 with a central hotel shared by two and one dinner out; €350-500 adding one organised excursion a day.",
    erroriDaEvitare: [
      "Book the evening excursions with some lead time, especially in the peak months (November-March)",
      "Underestimating the wind on the waterfront: you feel it more than expected",
      "Trying to do everything: between aurora, huskies, Sami and whale watching the bill climbs fast. Better to pick 2-3 activities and enjoy them properly",
    ],
    miaEsperienza:
      "Of this trip I'm left with flashes more than a detailed diary: the biting cold as soon as we got off the plane, the darkness of the polar night, and the aurora seen moving across the sky for the first time during the minibus aurora chase. The activities we did, though, I remember well, and below you'll find everything you need to organize them the same way, or better.",
    luoghi: [
      {
        nome: "Arctic Cathedral (Ishavskatedralen)",
        testo: "A 1965 church with a triangular outline, across the bridge from the centre. On the east side is the large glass mosaic 'The Return of Christ', added in 1972.",
        come: "On foot across the bridge or by bus from the centre.",
        quando: "Morning or afternoon; visiting hours and concerts on the website.",
        tempo: "45 minutes",
        costo: "90 NOK adults, about €8; free under 12, paid at the door",
        orari: "1 January-30 May and 16 August-31 December 10am-5pm (Sunday 1pm-5pm; Wednesday closed 1pm-2pm); 1 June-15 August 9am-6pm (Sunday 1pm-6pm)",
        lat: 69.6482,
        lng: 18.9871,
        url: "https://ishavskatedralen.no",
        consiglio: "If there is a midnight concert in summer, better to book."
      },
      {
        nome: "Fjellheisen and Storsteinen",
        testo: "The cable car that rises in a few minutes above the city; at the top there is a viewpoint over the fjords and islands. In winter it is a place to see the aurora without travelling.",
        come: "From the centre take bus 26 from Torgsenteret to the Fjellheisen stop, or walk across the bridge (about 45 minutes). The cabin leaves every half hour, on the hour and at half past, from 9am to midnight.",
        quando: "Evening in winter for the city lights, daytime in summer.",
        tempo: "1-2 hours",
        costo: "645 NOK return for adults, 310 NOK for children aged 3-15 (2026)",
        orari: "daily 9am-midnight, one cabin every half hour",
        lat: 69.64096,
        lng: 18.98724,
        url: "https://www.fjellheisen.no",
        consiglio: "A quick ride, but dress warmly at the top."
      },
      {
        nome: "Polaria",
        testo: "The Arctic centre with aquariums of local and Svalbard marine life, a seal pool and a panoramic cinema.",
        come: "On foot from the centre, next to the harbour.",
        quando: "Daytime, especially if it rains.",
        tempo: "1.5 hours",
        costo: "400-450 NOK, about €35-39",
        orari: "10am-5pm (November 2026); seal feeding and training at 10:30am and 12:30pm",
        lat: 69.6437,
        lng: 18.9501,
        url: "https://polaria.no",
        consiglio: "Seal feeding times are on the website."
      },
      {
        nome: "Polar Museum",
        testo: "A small harbourside museum about polar expeditions and Arctic hunting.",
        come: "On foot from the centre.",
        quando: "Daytime.",
        tempo: "1 hour",
        costo: "130 NOK adults, about €11; free under 18",
        orari: "daily 10am-6pm (2026); closed 1 and 17 May",
        lat: 69.65221,
        lng: 18.96343,
        url: "https://uit.no/tmu/polarmuseet",
        consiglio: "More interesting than it looks, for those who like exploration history."
      },
      {
        nome: "Mack's Ølhallen",
        testo: "The historic pub of the Mack brewery, founded in 1877 and for decades among the northernmost in the world, with draft beer. A local place, without pretensions.",
        come: "On foot from the centre.",
        quando: "Evening.",
        tempo: "1 hour",
        lat: 69.6459,
        lng: 18.95047,
        consiglio: "Try a local beer: you order at the bar."
      },
      {
        nome: "Aurora chase by minibus",
        testo: "An evening outing with a guide out of town, away from the lights, to look for the aurora in clear skies. Tours usually last several hours.",
        come: "Booked with an operator, minibus departure from the centre.",
        quando: "Late September to late March, a night with few clouds.",
        tempo: "an evening",
        costo: "€100-160 per person",
        consiglio: "It was the first time I saw the aurora move across the sky."
      },
      {
        nome: "Huskies and Sami reindeer",
        testo: "At Tromsø Villmarkssenter you can drive a husky sled; other companies organise visits to a Sami camp with reindeer and stories of local culture.",
        come: "Booking with an operator; minibus transfer.",
        quando: "Winter, with snow.",
        tempo: "half a day",
        costo: "huskies €170-320 per person; reindeer with a Sami guide from €145",
        consiglio: "Dress in layers: you stop often."
      },
      {
        nome: "Tromsø Cathedral and Storgata",
        testo: "The Lutheran wooden cathedral, from 1861, stands on the city's main pedestrian street. Around it, Storgata is the street of shops, bars and restaurants where almost all of the centre's life happens.",
        come: "On foot in the centre.",
        quando: "Late afternoon, with the lights on in the winter dark.",
        tempo: "1 hour",
        lat: 69.64874,
        lng: 18.95676
      },
      {
        nome: "Nordnorsk Kunstmuseum",
        testo: "The art museum of northern Norway, in an old building in the centre: 19th-century painting, Sami and contemporary art. A good hour in the warm between excursions.",
        come: "On foot from Storgata, near the harbour.",
        quando: "During the day, in bad weather.",
        tempo: "1 hour",
        costo: "110 NOK adults, about €9; free under 18",
        orari: "Tuesday-Sunday 11am-5pm; closed Monday",
        lat: 69.6482,
        lng: 18.9599,
        url: "https://nnkm.no"
      },
      {
        nome: "Tromsø Museum (Arctic University Museum)",
        testo: "The university museum, in Folkeparken park in the south of the island: rooms on the northern lights, Sami culture, geology and Arctic wildlife. It explains well what you see outside on the excursions.",
        come: "By bus from the centre, or on foot along the shore (about 2 km).",
        quando: "Before the first aurora chase, to understand what you are looking for.",
        tempo: "1.5-2 hours",
        costo: "130 NOK adults, about €11; free under 18",
        orari: "16 August-14 June Monday-Friday 10am-4:30pm, Saturday and Sunday 11am-4pm; 15 June-15 August Monday-Friday 10am-6pm, Saturday and Sunday 11am-5pm; closed 1 January, 1 and 17 May, 24 and 25 December",
        lat: 69.63486,
        lng: 18.91257,
        url: "https://uit.no/tmu"
      },
      {
        nome: "Arctic-Alpine Botanic Garden",
        testo: "The university botanic garden, with Arctic and high-mountain plants from various parts of the world, among rocks and small ponds. Visit once the snow has melted.",
        come: "By bus from the centre towards the Breivika university campus.",
        quando: "June to September.",
        tempo: "1 hour",
        lat: 69.6768,
        lng: 18.9763
      },
      {
        nome: "Pust, harbour saunas",
        testo: "Floating saunas in the inner harbour, with a plunge into the Arctic sea between rounds. There are three, including one shaped like a lavvu, the Sami tent.",
        come: "On foot from the centre; book a time slot online.",
        quando: "A winter evening, before or after dinner.",
        tempo: "1-2 hours",
        costo: "from 150 NOK, about €13, depending on sauna and time",
        orari: "daily 6am-11pm",
        lat: 69.65089,
        lng: 18.96254,
        url: "https://www.pust.io/en/lokasjon/tromso/"
      },
      {
        nome: "Telegrafbukta",
        testo: "A small beach on the south-west side of the island, looking over the fjord and the mountains of Kvaløya. In summer it's the barbecue spot, in winter one of the darkest corners within walking distance.",
        come: "On foot from the centre in about 40 minutes, next to Tromsø Museum, or by bus.",
        quando: "Summer sunset; clear winter evenings.",
        tempo: "1 hour",
        costo: "free",
        lat: 69.63208,
        lng: 18.90648
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Polaria (seals at 10:30am) and Polar Museum",
          "Lunch on Storgata and the Cathedral",
          "Afternoon: Arctic Cathedral",
          "Evening: Fjellheisen for the view and, with clear skies, the aurora"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: huskies or reindeer with a Sami guide (half a day)",
          "Evening: aurora chase by minibus"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Tromsø Museum and Telegrafbukta, or whale watching towards Skjervøy (mid-October to late January)",
          "Evening: Pust sauna in the harbour and a last beer at Mack's Ølhallen"
        ]
      }
    ],
    zone: [
      {
        nome: "Centre (Storgata and harbour)",
        perChi: "Those without a car",
        testo: "A few steps from shops, bars and the meeting point for most excursions. In high season prices are high: book early.",
        fascia: "€140-250"
      },
      {
        nome: "Tromsdalen",
        perChi: "Those who want a bit of quiet",
        testo: "Across the bridge, near the Arctic Cathedral and the cable car; bus to the centre.",
        fascia: "€120-200"
      },
      {
        nome: "Hostels",
        perChi: "those travelling light who spend on excursions",
        testo: "Central hostels such as Tromsø Activities Hostel, with dorm beds and a shared kitchen.",
        fascia: "from about €35 per dorm bed"
      }
    ],
    sapori: [
      {
        nome: "King crab (kongekrabbe)",
        testo: "Restaurants in the centre serve king crab legs, rich and sweet."
      },
      {
        nome: "Stockfish (tørrfisk)",
        testo: "Dried cod, typical northern cooking."
      },
      {
        nome: "Reindeer",
        testo: "Served as stew or pan-seared, typical of Sami cooking."
      }
    ],
    attenzioni: [
      "Aurora is not guaranteed: it needs clear skies and solar activity; plan several evenings.",
      "The biting cold and polar-night days require real thermal layers.",
      "Prices are high: compare tours before booking."
    ],
    gite: [
      {
        nome: "Sommarøy and Kvaløya",
        distanza: "57 km, about 1 hour 10 minutes by car",
        come: "By rental car or on the minibus tours leaving from the centre.",
        testo: "Islets, white sand beaches and clear water on the open sea; in winter the road crosses Kvaløya among snowy mountains."
      },
      {
        nome: "Ersfjordbotn",
        distanza: "21 km, about 30 minutes by car",
        come: "By car across Kvaløya; many aurora chases pass through here.",
        testo: "A fjord closed in by steep walls, away from the city lights: in winter one of the nearest places to watch the aurora."
      },
      {
        nome: "Lyngen Alps",
        distanza: "about 1 hour 30 minutes-2 hours",
        come: "By car or with organised tours; the Lyngen North glass igloos must be booked well in advance.",
        testo: "Mountains rising sheer from the Lyngenfjord. A night in a glass igloo costs around €380-420 for two."
      },
      {
        nome: "Whale watching towards Skjervøy",
        distanza: "full day",
        come: "Only on boat tours from Tromsø, from mid-October to late January.",
        testo: "Orcas and humpbacks following the herring into the northern fjords; €130-260 per person, and the quality of the boat makes a big difference."
      }
    ],
    faq: [
      {
        domanda: "How many days do you need in Tromsø?",
        risposta: "Four or five, to have several evenings for the aurora and two or three daytime excursions. In two days you see the city, but the aurora becomes a gamble."
      },
      {
        domanda: "When can you see the northern lights in Tromsø?",
        risposta: "From late September to late March, with clear skies and some solar activity. It is never guaranteed: plan several outings."
      },
      {
        domanda: "Do you need a car in Tromsø?",
        risposta: "No: the centre is walkable and excursions include transfers. A car is only useful for exploring Kvaløya or Sommarøy independently, and in winter it requires experience on snow and ice."
      },
      {
        domanda: "How do you get from the airport to the centre?",
        risposta: "With the Flybussen, about 125 NOK and 15-20 minutes to Storgata, or by taxi, 250-350 NOK. City buses are cheaper but run rarely in the evening."
      },
      {
        domanda: "Do you need to book excursions in advance?",
        risposta: "Yes, especially from November to March: aurora, huskies and reindeer should be booked a few days ahead, choosing flexible dates for the aurora."
      },
      {
        domanda: "What to do during the polar night?",
        risposta: "In December and January daylight lasts only a few hours: use them for the Arctic Cathedral and the museums, while the dark is the time for Fjellheisen, the harbour sauna and the aurora chase."
      }
    ],
    esperienzeSlugs: ['aurora-chase-minibus-tromso', 'husky-sledding-tromso', 'sami-renne-lavvu-tromso', 'whale-watching-tromso', 'glass-igloo-lyngen'],
    tripSlugs: ['tromso'],
    imageAlt: "Arctic Cathedral of Tromsø lit up in the evening with the northern lights behind it",
    immagine: '/images/norvegia/tromso-stock.jpg',
  },
]
