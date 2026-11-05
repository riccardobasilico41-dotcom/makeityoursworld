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
      "International flight to Oslo Gardermoen; from the airport the Flytoget train takes you to the center in 19 minutes (about 210 NOK, departures every 10 minutes). From Stockholm, for anyone arriving as the final stop of \"Nordic Capitals\": direct SJ train (about 5h45) or a domestic flight (about 1h).",
    comeSpostarsi: "On foot in the center; Flytoget to/from the airport; for Bygdøy, a city bus or the seasonal ferry from City Hall.",
    periodoMigliore: "for the transit stop alone, the summer of the Lofoten trip; May-September for a full stay, with the fjord cruise and Vigeland Park at their best in the long days",
    costi:
      "Flytoget about 210 NOK each way; dinners average for Norwegian standards (still expensive compared with Italy). Vigeland Park: free entry. Fram Museum: about 180 NOK (roughly €16). Oslofjord cruise of 1.5-2 hours: roughly €45-70 per person.",
    erroriDaEvitare: [
      "If you go to Café Sara on the weekend, book: in the evening it's a very busy place",
      "Planning a visit to the Viking Ship Museum on Bygdøy without checking first: it's closed for renovation, with reopening expected no earlier than 2027",
    ],
    miaEsperienza:
      "For me Oslo was a short but pleasant stop on both sides of the trip: an afternoon of easy walking on the first day, and a relaxed last dinner at Café Sara on the way back, after a week of trekking.",
    luoghi: [
      {
        nome: "Vigeland Park (Frognerparken)",
        testo: "The largest sculpture park by a single artist: 212 sculptures in bronze and granite by Gustav Vigeland, including the 14 metre Monolith with 121 intertwined bodies. Frogner Park is Norway's most visited tourist attraction.",
        come: "Metro or tram to Majorstuen/Vigelandsparken, then 10 minutes on foot. You walk an axis of about 850 metres from the gate to the monolith.",
        quando: "Always open, free entry. Early morning or summer evening for the sculptures without crowds.",
        tempo: "1.5-2 hours",
        costo: "free entry",
        url: "https://www.vigeland.museum.no",
        consiglio: "The Vigeland Museum, next to the park, holds the artist's studios: useful for an hour if it rains."
      },
      {
        nome: "Oslo Opera House",
        testo: "An opera and ballet house on the fjord, opened in 2008, designed by Snøhetta with an inclined marble roof you can walk on. The view over the city and the sea is worth the climb.",
        come: "On foot from the central station (about 5 minutes). The roof is always open, even without a show ticket.",
        quando: "At sunset, or in clear weather for the Oslofjord view.",
        tempo: "45 minutes-1 hour",
        costo: "roof: free entry",
        url: "https://www.operaen.no",
        consiglio: "After the climb, a hot tea at the inside cafe: the best way to warm up."
      },
      {
        nome: "Akershus Fortress",
        testo: "A medieval fortress from the 1300s on the harbour, later a Renaissance castle. The park is free and the walls give a nice view over Oslo's harbour; inside are the military museum and the Resistance museum.",
        come: "On foot from the centre in 10-15 minutes; free entry to the grounds.",
        quando: "Daytime; the fortress is guarded by the King's Guard. Inside are also the Armed Forces Museum and the Resistance Museum.",
        tempo: "1.5 hours",
        costo: "grounds free; museums and castle with separate ticket",
        consiglio: "Climb the walls at sunset: the light on the fjord is the best."
      },
      {
        nome: "Bygdøy peninsula: Fram and Kon-Tiki",
        testo: "The Fram Museum keeps the polar ship of Nansen and Amundsen, intact and open to board. Next door the Kon-Tiki Museum shows the raft on which Thor Heyerdahl crossed the Pacific in 1947. The Viking Ship Museum is closed for renovation until 2027: check the reopening.",
        come: "In summer the ferry to Bygdøy leaves from Rådhusbryggen; alternatively bus 30. The museums are a few minutes apart.",
        quando: "Morning, to have the rooms with fewer groups.",
        tempo: "3-4 hours",
        costo: "Fram Museum 180 NOK adults (2026); Kon-Tiki has a separate ticket",
        url: "https://www.frammuseum.no",
        consiglio: "The two museums fit nicely into half a day; avoid public-holiday Mondays, when it is crowded."
      },
      {
        nome: "Munch and the National Museum",
        testo: "The Munch museum, in Bjørvika, holds much of Edvard Munch's work; the Nasjonalmuseet, Norway's largest collection of art, architecture and design, has another version of The Scream (1893). Two buildings near the fjord, in the newest district.",
        come: "Munch 10 minutes on foot from the station; the Nasjonalmuseet 15 minutes from the centre.",
        quando: "Weekday morning; book online for timed entries.",
        tempo: "2-3 hours each",
        costo: "Munch 220 NOK adults (2026)",
        url: "https://www.munch.no",
        consiglio: "Compare the versions of The Scream: the differences show in person."
      },
      {
        nome: "Holmenkollen",
        testo: "Oslo's ski jump, with a ski museum and simulator, above the city. The view over the fjord and the forest is the reason to go up.",
        come: "Metro line 1 to Holmenkollen. The path to the jump is on foot.",
        quando: "Daytime, in clear weather; in winter there is often snow.",
        tempo: "2 hours",
        url: "https://www.holmenkollen.com",
        consiglio: "Go up on the afternoon metro and walk down through the forest."
      },
      {
        nome: "Aker Brygge and Astrup Fearnley",
        testo: "The former shipyard area, now a waterfront with restaurants, and the Astrup Fearnley museum of contemporary art, a building by Renzo Piano. Nearby Tjuvholmen has outdoor sculptures.",
        come: "On foot from the Royal Palace along the waterfront, about 20 minutes.",
        quando: "Summer evening, for outdoor tables on the fjord.",
        tempo: "2 hours",
        url: "https://www.afmuseet.no",
        consiglio: "Walk to Tjuvholmen: the urban beach is free."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Vigeland Park",
          "Lunch in the centre",
          "Opera House (roof)",
          "Stroll in Aker Brygge",
          "Dinner at Aker Brygge"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Bygdøy (Fram and Kon-Tiki)",
          "Afternoon at Munch or the National Museum",
          "Akershus at sunset"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Holmenkollen in the morning",
          "Two-hour Oslofjord cruise",
          "Last dinner in the centre"
        ]
      }
    ],
    zone: [
      {
        nome: "Sentrum and Oslo S",
        perChi: "Those arriving by train or short of time",
        testo: "Near the station, the Opera and the airport buses. The Citybox where I slept is 5 minutes from the station. Noisy in the evening near the station."
      },
      {
        nome: "Grünerløkka",
        perChi: "Those looking for bars, cafes and nightlife",
        testo: "The youngest district, 15 minutes on foot from the centre. Many venues, more noise at weekends."
      },
      {
        nome: "Frogner and Majorstuen",
        perChi: "Those who want quiet and the park",
        testo: "A residential area near Vigeland; accommodation a bit pricier, good connections."
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
        testo: "Bought fresh from the boats at Aker Brygge, with bread and mayonnaise."
      },
      {
        nome: "Kanelboller",
        testo: "Cinnamon and cardamom swirls, to try in the bakeries in the centre."
      }
    ],
    attenzioni: [
      "Strong alcohol is sold only at Vinmonopolet; supermarkets sell beer until 20:00 on weekdays and until 18:00 on Saturdays.",
      "Pickpockets around the station and Karl Johans gate: keep bag and phone in front.",
      "Electric scooters and bikes speed on the bike lanes: look before crossing.",
      "The metro uses tickets from the Ruter app: buy before boarding, inspections do happen."
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
    comeArrivare: 'Domestic flight from Oslo Gardermoen.',
    comeSpostarsi: 'On foot in the center; rental car for the rest of the getting around.',
    periodoMigliore: "I passed through in summer, on the way out and back from the Lofoten; for the other months I have no direct reference",
    costi: "I didn't note down the costs of this stop",
    erroriDaEvitare: ["Factor in the slow service at Melkebaren if you have little time between one ferry and the next"],
    miaEsperienza:
      "For us it was a logistical stop both on the way out and on the way back, but with enough to do (Mjelle beach, the Nyholms Fort viewpoint) not to feel like wasted time.",
    luoghi: [
      {
        nome: "Nyholms Fort",
        testo: "An old fort on the tip of Bodø harbour, now with a view of the harbour and the islands. You reach it in 10 minutes on foot from the port.",
        come: "On foot from the harbour.",
        quando: "Late afternoon, with light on the islands.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "The easiest spot for a panoramic photo before boarding."
      },
      {
        nome: "Mjelle beach",
        testo: "A long sandy beach north of the centre, among dunes and sea. In summer you can walk in the evening too with the long light.",
        come: "By car or local bus from Bodø.",
        quando: "Summer, evening.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "Bring a windproof jacket: the northern wind is strong."
      },
      {
        nome: "Saltstraumen",
        testo: "One of the strongest tidal currents in the world, south-east of Bodø: each tide cycle pushes up to 400 million cubic metres of water through, forming whirlpools. I did not visit it, but it is the classic outing from Bodø.",
        come: "By car or bus from Bodø.",
        quando: "Check the tide tables: the current is strongest at mid-tide, roughly every six hours.",
        tempo: "2-3 hours",
        consiglio: "Watch from the bridge; no swimming."
      }
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
      "If you go to the Lofoten by ferry, arrive 30-40 minutes early: in summer the queues are long.",
      "In summer Bodø's accommodation fills up early: book soon."
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
    comeArrivare: "From Bodø: about 3h15 of driving to Bognes, Bognes-Lødingen ferry (arrive 40 minutes early), then another 1h40 by car to Svolvær.",
    comeSpostarsi: 'Rental car.',
    periodoMigliore: "I was there in summer; for the other months I have no direct reference",
    costi: "I didn't note down the costs of this stop",
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
        consiglio: "An apartment overlooking the harbour: a practical choice for cooking and resting."
      },
      {
        nome: "Trollfjord",
        testo: "A narrow fjord about 2 km long, with steep walls and a mouth only about a hundred metres wide. In summer the RIB (fast inflatable boat) ride is the most common way to enter.",
        come: "Excursion booked with an operator from Svolvær, 2-3 hours.",
        quando: "Summer, in clear weather.",
        tempo: "2-3 hours",
        consiglio: "Book ahead: the RIBs fill up."
      },
      {
        nome: "Svolværgeita",
        testo: "A two-horned rock, Storhorn and Lillehorn, above the town: climbers leap the gap of about one and a half metres between them, with the cemetery 300 metres below. A steep trail leads to the base.",
        come: "Trail from the town, well marked but steep.",
        quando: "A day free of clouds.",
        tempo: "3-4 hours",
        consiglio: "Not for those with a fear of heights."
      },
      {
        nome: "Kabelvåg and Lofotr",
        testo: "Just outside Svolvær, the Lofoten Museum in Kabelvåg's old harbour tells the story of fishing; at Borg the Lofotr Viking Museum has a reconstruction of a Viking chieftain's house, open from 1 May to 15 September.",
        come: "By car, about 10 minutes to Kabelvåg and 55 to Borg.",
        quando: "Full day.",
        tempo: "2-3 hours",
        url: "https://lofotr.no",
        consiglio: "The Lofotr Viking Museum can be visited on your own; in summer there are live activities."
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
    comeArrivare: '30 minutes by car from Svolvær.',
    comeSpostarsi: 'On foot, the village is small.',
    periodoMigliore: "I was there in summer; for the other months I have no direct reference",
    costi: "I didn't note down the costs of this stop",
    erroriDaEvitare: ["Not booking Fiskekrogen: at peak hours the restaurant fills up fast"],
    miaEsperienza:
      "Henningsvær was one of the surprises of the trip: lunch on the canal, the soccer field and, in the afternoon, Festvågtind, a wilder and less crowded hike than Reinebringen.",
    luoghi: [
      {
        nome: "Henningsvær football pitch",
        testo: "An artificial-turf pitch built on a small rock island, surrounded by the sea. From above with a drone or from the access bridge it is one of the best known photos of the Lofoten.",
        come: "Arrive by car from Svolvær (about 30 minutes) and park in the village.",
        quando: "Early morning or evening, with soft light.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "Do not enter the pitch during matches or training."
      },
      {
        nome: "Canal and harbour",
        testo: "The village spreads over small islands joined by bridges, with colourful wooden houses and old fish warehouses. The little Venice feel is real along the canal.",
        come: "On foot from the parking lot.",
        quando: "Morning, before the groups.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "Lunch at Fiskekrogen on the canal: book and ask for a window table."
      },
      {
        nome: "Festvågtind",
        testo: "A peak of about 540 metres above the village, with views of the open sea and the islands. The trail is wilder and less crowded than Reinebringen.",
        come: "The starting point is near the village; trail with steep sections.",
        quando: "Afternoon in clear weather.",
        tempo: "3-4 hours",
        costo: "free entry",
        consiglio: "It was one of the surprises of the trip: fewer tourists, more silence."
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
      "Parking in the village is small and paid: arrive early.",
      "For the Festvågtind trail you need hiking boots: after rain it is slippery."
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
    comeArrivare: "From Svolvær via Leknes (with a stop at the Borg Viking Museum), about 55 minutes by car from Svolvær to Borg, then another 20-30 minutes to Reine.",
    comeSpostarsi: 'Paid parking in the village (200 NOK/3h).',
    periodoMigliore: "Reinebringen is only worth it with a clear sky: check the forecast before planning the day.",
    costi: 'Parking 200 NOK/3h.',
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
        tempo: "about 1h50 including ascent, rest and descent",
        costo: "paid parking in the village",
        consiglio: "Check the forecast first: with clouds you see nothing from the top."
      },
      {
        nome: "Reine and Hamnøy",
        testo: "A fishing village with red rorbuer on rocks dropping into the sea, among the most photographed views of Norway. A few minutes down the road is Hamnøy, with the same houses and the bridge.",
        come: "On foot in the village; Hamnøy by car, 5 minutes.",
        quando: "Morning, with soft light.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "The Coop Prix supermarket in Reine is handy for a packed lunch."
      },
      {
        nome: "Bunes beach",
        testo: "A white sand beach reachable only by ferry from Reine, with a walk from the landing. It is one of the most beautiful and least accessible places in the archipelago.",
        come: "Seasonal ferry from Reine, then a trail on foot.",
        quando: "Summer, after checking the ferry timetable in advance.",
        tempo: "half a day",
        consiglio: "Together with Reinebringen, it is the memory I took home."
      },
      {
        nome: "Lofotr Viking Museum at Borg",
        testo: "The largest Viking-age building ever found in Norway, 83 metres long, rebuilt full size with ships, a forge and re-enactments. Open from 1 May to 15 September. It stands on the road between Svolvær and Reine.",
        come: "By car, about 55 minutes from Svolvær; an ideal stop along the transfer.",
        quando: "Full day.",
        tempo: "2 hours",
        url: "https://lofotr.no",
        consiglio: "A useful stop if it rains."
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
    comeArrivare: 'A few minutes by car from Reine.',
    comeSpostarsi: 'Rental car.',
    periodoMigliore: "I was there in summer; for the other months I have no direct reference",
    costi: 'Cabins from 850-1050 NOK/night for the budget options in the area.',
    erroriDaEvitare: ["The Ramberg supermarket doesn't sell wine/spirits, only beer: plan your shopping accordingly"],
    miaEsperienza:
      "The rorbu in Nesland was the quietest place of the whole trip: no artificial light, the fjord a few steps away, and one of the most relaxed barbecue evenings of the week.",
    luoghi: [
      {
        nome: "Nesland-Nusfjord walk",
        testo: "A scenic path that follows the fjord coast from Nesland to the village of Nusfjord, with views of the sea and the mountains of Flakstadøya.",
        come: "On foot from the rorbu, about an hour each way.",
        quando: "Summer evening, with the long light.",
        tempo: "2-3 hours round trip",
        consiglio: "The silence and the few lights of the place are the best part."
      },
      {
        nome: "Nusfjord",
        testo: "A well-preserved fishing village on the south coast of Flakstadøya, with red rorbuer and a small harbour.",
        come: "By car from Nesland, 10 minutes; entry to the village may be paid.",
        quando: "Morning or evening, avoiding the groups.",
        tempo: "1 hour",
        consiglio: "A short walk, but best in calm weather."
      },
      {
        nome: "Ramberg and the beaches of Flakstadøya",
        testo: "Ramberg has a long pale sand beach, a bit further on is Skagsanden and, on the neighbouring island of Vestvågøy, Haukland: among the most beautiful beaches in the Lofoten. The water is cold but the colour is Caribbean.",
        come: "By car from Nesland; Haukland is further, towards Leknes.",
        quando: "Summer, with sun.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "The supermarket in Ramberg sells only beer, no wine or spirits."
      }
    ],
    sapori: [
      {
        nome: "Rorbu barbecue",
        testo: "Groceries from the Ramberg supermarket: salmon, vegetables and sides are the simplest dinner."
      }
    ],
    attenzioni: [
      "Ramberg: the supermarket sells only beer; for wine you need the Vinmonopolet in Leknes.",
      "The rorbu is isolated: bring enough groceries and a torch."
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
    comeArrivare: 'About 50 minutes by car from Nesland/Flakstad.',
    comeSpostarsi: 'On foot, the village is small.',
    periodoMigliore: "I was there in summer, in the rain; for the other months I have no direct reference",
    costi: "I didn't note down the costs of this stop",
    erroriDaEvitare: [],
    miaEsperienza:
      "Å struck me even in the rain: the Fisherman's Museum, with its guided tour in English, tells well a part of local history that elsewhere on the trip you only glimpse in passing.",
    luoghi: [
      {
        nome: "Norwegian Fishing Village Museum (Norsk Fiskeværsmuseum)",
        testo: "The museum of the village of Å, with houses, warehouses and a historic oven, tells the life of Lofoten fishermen. The English guided tour explains local history well.",
        come: "About 50 minutes by car from Nesland; the museum can be visited with a guide or on your own.",
        quando: "Morning, with a guided tour.",
        tempo: "1.5-2 hours",
        url: "https://www.museumnord.no",
        consiglio: "In the rain, as when I went, it is still a good indoor visit."
      },
      {
        nome: "Å historic bakery",
        testo: "A historic bakery, with cinnamon rolls and sweets made on site; few seats but excellent.",
        come: "On foot in the village.",
        quando: "Morning.",
        tempo: "30 minutes",
        consiglio: "Get a cinnamon swirl: it is the typical thing."
      },
      {
        nome: "Sakrisøy and Anita's Seafood",
        testo: "On the way to Å is Sakrisøy, a village of yellow cottages, and Anita's Seafood, where you eat soups, sandwiches and sushi. You order at the counter, no table service.",
        come: "By car, along the road to Å.",
        quando: "Lunch.",
        tempo: "1 hour",
        consiglio: "View of the fjord from the outdoor table."
      }
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
    comeArrivare: 'Direct flight or with a connection to Tromsø.',
    comeSpostarsi: 'On foot in the center; organized minibuses/coaches for excursions outside the city.',
    periodoMigliore: "from late September to late March for the aurora, with polar night (little daylight) between December and January",
    costi:
      "Fjellheisen: 645 NOK (about €55) round trip for adults, 310 NOK (about €27) for children aged 3-15 (2026). Polaria: about 400-450 NOK (€35-39). Polar Museum: 130 NOK (about €11). Aurora chase by minibus: €100-160 per person. Husky sledding: €170-320 per person. Sami experience with reindeer: from €145 per person. Whale watching: €130-260 per person. Double in a central hotel in high season: €140-170/night.",
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
        url: "https://ishavskatedralen.no",
        consiglio: "If there is a midnight concert in summer, better to book."
      },
      {
        nome: "Fjellheisen and Storsteinen",
        testo: "The cable car that rises in a few minutes above the city; at the top there is a viewpoint over the fjords and islands. In winter it is a place to see the aurora without travelling.",
        come: "From the centre by bus 28 or a 15-minute walk; the cabin leaves about every 30 minutes.",
        quando: "Evening in winter for the city lights, daytime in summer.",
        tempo: "1-2 hours",
        costo: "645 NOK return for adults, 310 NOK for children aged 3-15 (2026)",
        url: "https://www.fjellheisen.no",
        consiglio: "A quick ride, but dress warmly at the top."
      },
      {
        nome: "Polaria",
        testo: "The Arctic centre with aquariums of local and Svalbard marine life, the bearded seal pool with an underwater walkway and a five-screen panoramic cinema.",
        come: "On foot from the centre, next to the harbour.",
        quando: "Daytime, especially if it rains.",
        tempo: "1.5 hours",
        url: "https://polaria.no",
        consiglio: "Seal feeding times are on the website."
      },
      {
        nome: "Polar Museum",
        testo: "A museum housed in a historic harbour building, about the history of Norwegian polar expeditions of Amundsen and Arctic seal hunters.",
        come: "On foot from the centre.",
        quando: "Daytime.",
        tempo: "1 hour",
        url: "https://uit.no/tmu/polarmuseet",
        consiglio: "More interesting than it looks, for those who like exploration history."
      },
      {
        nome: "Mack's Ølhallen",
        testo: "The historic pub of the Mack brewery, founded in 1877 and for decades among the northernmost in the world, with draft beer. A local place, without pretensions.",
        come: "On foot from the centre, on Storgata.",
        quando: "Evening.",
        tempo: "1 hour",
        consiglio: "Try a local beer: you order at the bar."
      },
      {
        nome: "Aurora chase by minibus",
        testo: "An evening outing with a guide out of town, away from the lights, to look for the aurora in clear skies. Tours usually last several hours.",
        come: "Booked with an operator, minibus departure from the centre.",
        quando: "Late September to late March, a night with few clouds.",
        tempo: "5-6 hours",
        consiglio: "It was the first time I saw the aurora move across the sky."
      },
      {
        nome: "Huskies and Sami reindeer",
        testo: "At Tromsø Villmarkssenter you can drive a husky sled; other companies organise visits to a Sami camp with reindeer and stories of local culture.",
        come: "Booking with an operator; minibus transfer.",
        quando: "Winter, with snow.",
        tempo: "half a day",
        consiglio: "Dress in layers: you stop often."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Arctic Cathedral",
          "Fjellheisen",
          "Polaria or Polar Museum",
          "Dinner in the centre"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: husky sledding or reindeer",
          "Evening: aurora chase by minibus"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: whale watching at Skjervøy (not done) or relax in the centre",
          "Last evening: Mack's Ølhallen"
        ]
      }
    ],
    zone: [
      {
        nome: "Centre (Storgata and harbour)",
        perChi: "Those without a car",
        testo: "A few steps from shops, bars and the meeting point for most excursions. In high season prices are high: book early."
      },
      {
        nome: "Tromsdalen",
        perChi: "Those who want a bit of quiet",
        testo: "Across the bridge, near the Arctic Cathedral and the cable car; bus to the centre."
      }
    ],
    sapori: [
      {
        nome: "King crab (kongekrabbe)",
        testo: "Around Storgata you eat king crab legs, rich and sweet."
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
    esperienzeSlugs: ['aurora-chase-minibus-tromso', 'husky-sledding-tromso', 'sami-renne-lavvu-tromso', 'whale-watching-tromso', 'glass-igloo-lyngen'],
    tripSlugs: ['tromso'],
    imageAlt: "Arctic Cathedral of Tromsø lit up in the evening with the northern lights behind it",
    immagine: '/images/norvegia/tromso-stock.jpg',
  },
]
