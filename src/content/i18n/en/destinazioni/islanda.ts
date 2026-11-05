import type { Destinazione } from '@/lib/types'

export const destinazioniIslanda: Destinazione[] = [
  {
    slug: 'keflavik',
    paeseSlug: 'islanda',
    ordine: 1,
    nome: 'Keflavík',
    tipologia: ['cultura'],
    giorniConsigliati: "1 night, on arrival",
    visitataPersonalmente: true,
    introduzione: "The first stop of the trip: we landed here, slept the first night in a hotel (the only one besides Reykjavík) and the next day picked up the car and tent.",
    percheAndarci: "It's the obligatory starting point, a few minutes from the Reykjanes peninsula, an active volcanic zone.",
    cosaVedere: ['Downtown Keflavík', 'The Reykjanes peninsula'],
    cosaFare: [
      'Dinner at Kaffi Duus and an evening stroll downtown',
      "Excursion to the erupting volcano on the Reykjanes peninsula (see the dedicated experience page; I went on my own, without a tour)",
    ],
    doveDormire:
      "I slept at the Konvin Hotel, one of the largest hotels in the airport area: convenient thanks to the shuttle, with a generous breakfast. Online reviews (about 3/5 across nearly 940 Tripadvisor reviews) rate it average for a one-night stop: those who choose it for its proximity to the airport find it practical and the staff friendly, others mention cold rooms or bathrooms that aren't spotless. Nothing special, but for the first night it works.\n\nAlternatives in Keflavík/Reykjanesbær. Budget: guesthouses and small B&Bs in the area · mid-range (the Konvin Hotel falls here): other hotels near the airport with shuttle included · more refined: boutique hotels in central Reykjavík (~45 min by car), for those who gladly give up airport convenience on the first or last night.",
    doveMangiare: "Kaffi Duus (bus 55 + a few minutes on foot): mixed fish, about €30 per person.",
    comeArrivare: "Flight to Keflavík; bus 55 (about 20 minutes, Kellir stop, €4 per person) to the center.",
    comeSpostarsi: "Bus 55 on the first day; rental car from the next day (pickup at Sixt Rent a Car at the airport).",
    periodoMigliore: "the same as the whole trip: summer, if you tour the island by tent",
    costi: "Bus 55: €4 per person each way.",
    erroriDaEvitare: ["The last bus 55 leaves just after 11 p.m.: don't miss it to get back to the hotel"],
    miaEsperienza:
      "Keflavík was a short stop, but it's tied to one of my strongest memories of Iceland: during the trip, on the Reykjanes peninsula, a few minutes from here, I saw an erupting volcano up close, going on my own, without a tour.",
    luoghi: [
      {
        nome: "Reykjanes Peninsula and volcanic area",
        testo: "The south-west tip of the island, a few minutes from the airport: lava fields, craters and steam vents along a ridge between two tectonic plates. Since 2021 the area has seen a series of eruptions, and the accessible trails change from time to time.",
        come: "By car from Keflavík. Check trail status and closures on the official sites before leaving; during an eruption go only where the authorities allow.",
        quando: "In clear, calm weather; in summer the long daylight lets you go in the evening too.",
        tempo: "half a day",
        url: "https://safetravel.is",
        consiglio: "I went on my own, without a tour: always check gas, wind and closures before leaving."
      },
      {
        nome: "Bridge Between Continents (Midlina)",
        testo: "A small footbridge over the rift between the North American and Eurasian plates, at Sandvík. A symbolic crossing, handy for a half-hour stop between the airport and Reykjanes.",
        come: "By car from Keflavík; parking near the bridge.",
        quando: "Any time; it is outdoors and always open.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "Easy to combine with the Reykjanesviti lighthouse and the Gunnuhver geothermal area."
      },
      {
        nome: "Keflavík centre and waterfront",
        testo: "A quiet port town with a seafront, a rocky coast and the Icelandic Museum of Rock'n'Roll. For late arrivals it is the place to eat without going far.",
        come: "On foot in the centre; from the airport by bus or taxi.",
        quando: "At sunset, very late in summer.",
        tempo: "1-2 hours",
        consiglio: "Check the time of the last bus before heading out in the evening."
      }
    ],
    sapori: [
      {
        nome: "Mixed fish",
        testo: "Cod, haddock and Arctic char pan-fried or in soup are the staples of the harbour restaurants; at Kaffi Duus that is what we ate."
      },
      {
        nome: "Skyr",
        testo: "A thick dairy product similar to yogurt, sold in every supermarket: a cheap, high-protein breakfast."
      },
      {
        nome: "Icelandic hot dog (pylsur)",
        testo: "A sausage made largely with lamb, with raw and fried onion and sauces; sold cheaply at petrol stations and kiosks."
      }
    ],
    attenzioni: [
      "Volcano and gas: during eruptions follow only official guidance (safetravel.is, vedur.is) and never approach lava flows.",
      "With a rental car, check cover for sand, ash and gravel damage, which the basic insurance often excludes.",
      "Fill up before leaving the Reykjavík area: in the East and North, pumps are rare and often unmanned."
    ],
    esperienzeSlugs: ['vulcano-reykjanes'],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Glowing lava flow during a night eruption on the Reykjanes peninsula, near Keflavík",
    immagine: '/images/islanda/keflavik-stock.jpg',
  },
  {
    slug: 'vik',
    paeseSlug: 'islanda',
    ordine: 2,
    nome: 'Vík',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: "1 night, after a day full of waterfalls",
    visitataPersonalmente: true,
    introduzione: "The first night in a tent of the trip, after a day spent between the Golden Circle and the most photographed waterfalls of southern Iceland.",
    percheAndarci: "It's the base for one of the nights I remember best from the trip: the Sólheimasandur plane wreck, reached on foot at midnight, in the late-July light that never fully fades at midnight.",
    cosaVedere: ['Geysir and Gullfoss (Golden Circle)', 'Seljalandsfoss and Gljúfrabúi', 'Skógafoss', 'DC-3 plane wreck at Sólheimasandur'],
    cosaFare: [
      'Golden Circle: Geysir (eruptions every 6-7 minutes) and Gullfoss, the two-tiered "golden waterfall"',
      'Seljalandsfoss, walking behind the waterfall, and the nearby Gljúfrabúi by walking inside the river',
      'Skógafoss and the climb of the roughly 470 steps of the viewpoint trail',
      'Night hike to the plane wreck: about 20 minutes by car from Vík to the parking lot on the Ring Road, then 4 km (40-60 minutes) on foot over flat, wind-exposed black sand, round trip',
    ],
    doveDormire:
      "I slept at the Vík campsite (1,950 ISK + shower 300 ISK): electricity, showers, shared kitchen. It's practically the only large facility in the area, convenient and well equipped, though in the most recent reviews some people complain about overcrowding in high season.\n\nAlternatives in Vík. Budget: The Barn (one of the best hostels in Iceland), Farmhouse Lodge Guesthouse · mid-range: Hotel Kría, Nordic design on the main street · more refined: Hótel Vík í Mýrdal.",
    doveMangiare: "Packed lunch or around the waterfalls; dinner at the campsite.",
    comeArrivare: "From Keflavík, with stops at the Golden Circle and the southern waterfalls along the way.",
    comeSpostarsi: "Rental car (picked up in the morning in Keflavík together with the tent).",
    periodoMigliore: "late July, for the light that never fully fades at midnight and makes the night hike to the wreck possible",
    costi: "Campsite 1,950 ISK + shower 300 ISK; parking at Seljalandsfoss 700 ISK.",
    erroriDaEvitare: [
      "After an already full day the plane wreck is quite a slog: better to gauge your energy before setting out at midnight",
      "Bring a flashlight or a power bank for your phone: four kilometers of flat black sand with no landmarks",
    ],
    miaEsperienza:
      "At the end of July at midnight there was still light, so after dinner I decided at the last minute not to go to bed and to reach the wreck on foot. After an already full day it was a slog, but it's probably the most absurd moment of the trip, and the one I remember best.",
    luoghi: [
      {
        nome: "Þingvellir",
        testo: "A national park and UNESCO site in the rift between two tectonic plates, where the first Icelandic parliament met in 930. You walk between basalt walls and the lake, with the Almannagjá fault as the passage.",
        come: "By car from Reykjavík or from Keflavík. Trails start from the visitor centre; no guide needed.",
        quando: "Early morning or evening, to avoid the buses; in summer open at all hours.",
        tempo: "1-2 hours",
        costo: "trails free; paid parking, about 1,000 ISK per car (2025)",
        url: "https://www.thingvellir.is",
        consiglio: "Parking and the visitor centre are paid: check current rates on the official site."
      },
      {
        nome: "Geysir and Strokkur",
        testo: "A geothermal area on the Golden Circle. The original Geysir erupts rarely, while Strokkur, about fifty metres away, shoots jets of 15-20 metres every 6-10 minutes.",
        come: "Stop from the road, free access to the geothermal field; the paths are short.",
        quando: "When the wind blows the steam away from the crowd; always open.",
        tempo: "45 minutes",
        costo: "free entry",
        consiglio: "Stay upwind and away from the pools: the water is close to 100 degrees."
      },
      {
        nome: "Gullfoss",
        testo: "The 'golden waterfall': two drops (about 11 and 21 metres) into a narrow gorge of the Hvítá river. A walkway leads to the edge, in the spray.",
        come: "Parking nearby; two levels of paths, the lower one reaching the edge is often closed in winter because of ice.",
        quando: "Early morning or evening, with low-angle light.",
        tempo: "45 minutes",
        costo: "free entry",
        consiglio: "Wear a waterproof: the spray reaches the paths."
      },
      {
        nome: "Seljalandsfoss and Gljúfrabúi",
        testo: "Seljalandsfoss falls 60 metres and you can go around it on a slippery path behind the curtain. A little further on, hidden in a crack, Gljúfrabúi can be seen by wading into the stream.",
        come: "Paid parking (700 ISK when I went); short path, often muddy.",
        quando: "Summer evening, when the sun hits the fall from the west.",
        tempo: "1 hour",
        costo: "parking about 900-1,000 ISK per car (2025)",
        consiglio: "Waterproof shoes to get inside the Gljúfrabúi gorge."
      },
      {
        nome: "Skógafoss",
        testo: "A waterfall 25 metres wide and 60 high, on the edge of the old coastal cliff. A 527-step staircase on the side climbs to the top, where the trail to the Fimmvörðuháls pass begins.",
        come: "Parking at the foot; the campsite next door is handy for the evening.",
        quando: "Afternoon, for the rainbow when it is sunny.",
        tempo: "45 minutes",
        costo: "free entry; paid parking, about 1,000 ISK (2025, Parka app)",
        consiglio: "Climb the wooden stairs for the view from above: the platform also shows the coast."
      },
      {
        nome: "DC-3 wreck at Sólheimasandur",
        testo: "A US Navy plane that came down in November 1973 on a plain of black sand, with no victims. The area is bare and windswept; since 2016 the landowners have banned driving there.",
        come: "Car park on the Ring Road, then a long walk across flat sand. No guide needed.",
        quando: "Late in summer, when the sun grazes the horizon; at night you need a torch.",
        tempo: "2-3 hours round trip",
        consiglio: "We went at midnight in late-July light: bring water and a power bank, the route has no landmarks."
      }
    ],
    sapori: [
      {
        nome: "Kjötsúpa",
        testo: "Lamb soup with root vegetables, typical of windy days: found at the waterfall kiosks and gas station cafes."
      },
      {
        nome: "Rye bread (rúgbrauð)",
        testo: "Dark, sweet bread baked slowly, sometimes using geothermal heat; eaten with butter or smoked fish."
      },
      {
        nome: "Packed lunch",
        testo: "Discount supermarkets such as Bónus and Krónan are the cheapest option: shop and cook at the campsite to save money."
      }
    ],
    attenzioni: [
      "At Reynisfjara and other black beaches sneaker waves arrive without warning: never turn your back on the sea.",
      "F-roads and unbridged fords require a 4x4 and are usually not covered by basic rental insurance.",
      "Wild camping with a tent is very restricted: use campsites and respect the signs.",
      "Outside the Reykjavík area many fuel pumps are automatic: carry a card with a PIN."
    ],
    esperienzeSlugs: ['relitto-aereo-solheimasandur', 'golden-circle'],
    tripSlugs: ['islanda-2024'],
    imageAlt: "DC-3 plane wreck abandoned on the black sand of Sólheimasandur, Iceland",
    immagine: '/images/islanda/vik-stock.jpg',
  },
  {
    slug: 'skaftafell-jokulsarlon',
    paeseSlug: 'islanda',
    ordine: 3,
    nome: 'Skaftafell and Jökulsárlón',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: "one full day, no overnight stay",
    visitataPersonalmente: true,
    introduzione: "The frozen heart of Vatnajökull National Park, the largest in Europe. In the same day: a glacier trek, kayaking among the icebergs and Diamond Beach.",
    percheAndarci: "It's probably the fullest day of the trip: the glacier on foot, kayaking among the icebergs and, before that, two black beaches and a canyon.",
    cosaVedere: [
      'Dyrhólaey (lighthouse and black lava arch) and Reynisfjara (beach of basalt columns)',
      'Fjaðrárgljúfur, a canyon about 100 meters deep',
      'Svartifoss, the black waterfall of Skaftafell',
      'Jökulsárlón lagoon and Diamond Beach',
    ],
    cosaFare: [
      'Guided trek on the Vatnajökull glacier, with crampons and ice axe (see the dedicated experience page)',
      'Kayaking among the icebergs of the Jökulsárlón lagoon (see the dedicated experience page)',
      'Walk at Reynisfjara (watch out for the waves, unpredictable and dangerous) and Dyrhólaey',
      'Photo walk at Fjaðrárgljúfur, much less crowded than other sites in the area',
    ],
    doveDormire: "I didn't stay overnight here: you sleep in Höfn, about an hour further along the Ring Road.",
    doveMangiare: "Quick lunch at Reynisfjara (hot dog/soup stand, 2-3,000 ISK).",
    comeArrivare: "From Vík, along the Ring Road, with stops at Dyrhólaey, Reynisfjara and Fjaðrárgljúfur.",
    comeSpostarsi: "Rental car; the Skaftafell area can only be explored on foot.",
    periodoMigliore: "summer, for the best glacier access conditions",
    costi: "check the glacier trek and kayak prices on the operators' websites when booking",
    erroriDaEvitare: ['At Reynisfjara always follow the safety signs: the waves are unpredictable'],
    miaEsperienza:
      "The glacier trek and the kayaking among the icebergs were two of the most intense experiences of the trip. I did the trek with Troll Expeditions.",
    luoghi: [
      {
        nome: "Dyrhólaey",
        testo: "A headland with a black lava arch in the sea and a lighthouse, with a fine view of the south coast. In summer puffins nest on the cliffs. The lighthouse dates from 1927.",
        come: "By car, gravel road to drive with care up to the high parking lot.",
        quando: "Late spring and summer for puffins; at sunset for the light.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "Stay on the marked paths: the cliffs are high and crumbly."
      },
      {
        nome: "Reynisfjara",
        testo: "A black sand beach with basalt columns and the Reynisdrangar sea stacks. One of the most photogenic and dangerous beaches in Iceland because of sudden waves.",
        come: "Car park and a short path; there are signs about sea conditions at the entrance.",
        quando: "Early morning, when there are fewer buses.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "Follow the safety instructions: the waves reach much higher than it looks."
      },
      {
        nome: "Fjaðrárgljúfur",
        testo: "A winding canyon nearly 100 metres deep and about 2 km long, with moss-covered walls. The trail climbs the rim with continuous views.",
        come: "Parking close to the road; a well-kept trail to walk.",
        quando: "Summer, with the river low; in spring it may be closed because of mud.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "Stay on the path: in 2019 the canyon was closed because the rush of visitors after a music video was damaging the environment."
      },
      {
        nome: "Skaftafell and Svartifoss",
        testo: "In Vatnajökull National Park, trails among birches and glacier tongues. The most popular one leads to the Svartifoss waterfall, framed by basalt columns.",
        come: "From the Skaftafell visitor centre, an uphill trail.",
        quando: "Summer, with long daylight; the trail is closed or icy in the cold months.",
        tempo: "2-3 hours",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "Parking is paid; the visitor centre has a cafe and weather information."
      },
      {
        nome: "Jökulsárlón glacier lagoon and Diamond Beach",
        testo: "A lagoon with icebergs calved from the Breiðamerkurjökull glacier, which drift out to sea through a channel. On the black sand beach across the road the ice blocks sparkle like diamonds.",
        come: "Paid parking next to the lagoon (about 1,000 ISK, 2025). Boat trips leave from the kiosk on the shore: amphibious boat from May to November, Zodiac from May to October; kayaking must be booked ahead.",
        quando: "Early morning or evening; in summer the light never fades.",
        tempo: "2-3 hours",
        costo: "lagoon and beach free; amphibious boat 7,100 ISK, Zodiac 16,600 ISK per adult (2026, icelagoon.is)",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "Kayaking among the icebergs is among my strongest memories: I did not note the operator and price, so check current offers."
      }
    ],
    programmi: [
      {
        titolo: "1 day from Vík to Höfn",
        tappe: [
          "Early start from Vík heading east",
          "Dyrhólaey and Reynisfjara",
          "Fjaðrárgljúfur",
          "Skaftafell (Svartifoss) or a glacier trek",
          "Jökulsárlón and Diamond Beach",
          "Arrive in Höfn for the night"
        ]
      }
    ],
    attenzioni: [
      "Reynisfjara: sneaker waves, stay away from the water.",
      "On the glacier go only with licensed guides: crampons and ice axe are really needed.",
      "Check the wind before leaving: strong gusts can damage car doors, a damage not covered by basic insurance."
    ],
    esperienzeSlugs: ['trekking-ghiacciaio-vatnajokull', 'kayak-jokulsarlon'],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'A large blue iceberg floating on the Jökulsárlón glacier lagoon, with the Vatnajökull mountains behind',
    immagine: '/images/islanda/jokulsarlon-iceberg-riccardo.jpg',
  },
  {
    slug: 'hofn',
    paeseSlug: 'islanda',
    ordine: 4,
    nome: 'Höfn',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 night',
    visitataPersonalmente: true,
    introduzione: "The \"capital of Icelandic lobster,\" with the Viking film set at Vestrahorn right next to the campsite.",
    percheAndarci: "A good base after the fullest day of the trip, with a curious stop at the Viking Village before setting off again.",
    cosaVedere: ['Viking Village (set built in 2010)', 'Vestrahorn mountain', 'Stokksnes black beach'],
    cosaFare: ['Tour of the Viking Village: horses grazing, reconstruction of a Viking village'],
    doveDormire:
      "There are two campsites in Höfn, the Vestrahorn and the municipal one. The Vestrahorn (~2,800 ISK per person/night) includes entry to the Viking Village and the view over Stokksnes, but some reviews mention only two showers, available at limited hours; the municipal campsite on Hafnarbraut (~1,800 ISK) is more central, near the town pool.\n\nAlternatives in Höfn. Budget: Höfn HI Hostel, Guesthouse Dyngja · mid-range: Hotel Höfn, The Old Airline Guesthouse · more refined: Fosshotel Vatnajökull, Brunnhóll Country Guesthouse.",
    doveMangiare: "Fish soup at one of the restaurants in Höfn, the \"capital of Icelandic lobster,\" or dinner at the campsite.",
    comeArrivare: "From Skaftafell/Jökulsárlón, about an hour's drive.",
    comeSpostarsi: 'Rental car.',
    periodoMigliore: "the same as the whole trip: summer, if you tour the island by tent",
    costi: "Vestrahorn campsite ~2,800 ISK/night, municipal campsite ~1,800 ISK/night.",
    erroriDaEvitare: [],
    miaEsperienza: "After the most intense day of the trip, Höfn was a quiet stop, handy for resting before the long stretch toward the East Fjords the next day.",
    luoghi: [
      {
        nome: "Vestrahorn and Stokksnes",
        testo: "A steep, dark mountain reflected in the black dunes of Stokksnes beach. It is one of the most photographed spots in Iceland.",
        come: "After the road to Stokksnes there is a paid entrance run by the private landowner; then a few minutes on foot.",
        quando: "Sunrise or sunset, with shallow water for reflections.",
        tempo: "1-2 hours",
        costo: "paid entrance (rate to be checked on site)",
        consiglio: "The Viking Village is on the same road: do both together."
      },
      {
        nome: "Viking Village",
        testo: "A Viking village built as a film set at the foot of Vestrahorn. The wood and turf houses with the mountain behind make a good photo subject.",
        come: "Reached from the same road as Stokksnes.",
        quando: "Low-light hour, when Vestrahorn stands out in the background.",
        tempo: "30 minutes",
        consiglio: "If horses are roaming free, don't feed them or get too close."
      },
      {
        nome: "Höfn harbour and langoustine",
        testo: "A fishing town known for its langoustine (called lobster), with a small harbour and beautiful views of the Vatnajökull glacier from the waterfront.",
        come: "On foot from the municipal campsite.",
        quando: "Dinner: restaurants fill up early in summer.",
        tempo: "1-2 hours",
        consiglio: "Book dinner in Höfn in summer."
      }
    ],
    sapori: [
      {
        nome: "Icelandic langoustine (humar)",
        testo: "Small, sweet prawns served in soup, grilled or with garlic butter: typical of Höfn."
      },
      {
        nome: "Fish soup",
        testo: "A creamy soup with the catch of the day, sometimes with rye bread."
      }
    ],
    attenzioni: [
      "In high season Höfn is full: book campsite and dinner ahead.",
      "The eastern stretch of the Ring Road has few pumps: fill up in Höfn."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Vestrahorn mountain and black sand beach near Höfn, Iceland',
    immagine: '/images/islanda/hofn-stock.jpg',
  },
  {
    slug: 'egilsstadir',
    paeseSlug: 'islanda',
    ordine: 5,
    nome: 'Egilsstaðir',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 night',
    visitataPersonalmente: true,
    introduzione: "The capital of eastern Iceland, reached through the least touristy and wildest fjords on the island.",
    percheAndarci: "The road along the East Fjords is among the most scenic of the trip, and the Vök Baths are the first hot bath after days of hiking and wind.",
    cosaVedere: ['East Fjords along Route 1', 'Optional detour to Seyðisfjörður, an artsy town among the mountains'],
    cosaFare: [
      'Scenic drive along the East Fjords (about 250 km, 3-4 actual hours that easily become 5-6 with stops: the road follows every fjord)',
      'Vök Baths, a hot pool floating on Lake Urriðavatn (see the dedicated experience page)',
    ],
    doveDormire:
      "I slept at Camp Egilsstaðir, well reviewed (4/5 on Tripadvisor): clean bathrooms, washers and dryers, indoor kitchens, electricity, for about 2,000 ISK per person.\n\nAlternatives in Egilsstaðir. Budget: Hafaldan HI Hostel (Harbour building) · mid-range: Við Lónið Guesthouse · more refined: Gistihúsið Lake Hotel Egilsstaðir, Hotel Valaskjálf.",
    doveMangiare: "Dinner at the campsite or at one of the places in Egilsstaðir.",
    comeArrivare: "From Höfn, along the East Fjords (Route 1).",
    comeSpostarsi: 'Rental car.',
    periodoMigliore: "the same as the whole trip: summer, if you tour the island by tent",
    costi: "Campsite about 2,000 ISK per person.",
    erroriDaEvitare: [],
    miaEsperienza: "The Vök Baths came at just the right moment: after two days of hiking and wind, it was the first real hot bath of the trip.",
    luoghi: [
      {
        nome: "East Fjords",
        testo: "The coastal Route 1 between Höfn and Egilsstaðir follows every fjord, with steep mountains, waterfalls and fishing villages. Allow a long day with stops.",
        come: "By car; there are no shortcuts and the weather changes fast.",
        quando: "Summer, for visibility; in winter the Öxi pass may close.",
        tempo: "a full day",
        url: "https://safetravel.is",
        consiglio: "Plan breaks in villages like Djúpivogur, and fill up beforehand."
      },
      {
        nome: "Seyðisfjörður",
        testo: "An artists' village in a deep fjord, with colourful wooden houses, the blue church and the rainbow street. You arrive by descending a mountain pass (Fjarðarheiði) with beautiful waterfalls.",
        come: "By car from Egilsstaðir (27 km), over the Fjarðarheiði pass. Every week from mid-March to late November the Smyril Line ferry Norröna arrives here from Hirtshals (Denmark) and Tórshavn (Faroe Islands).",
        quando: "Summer; the pass can be closed by snow from autumn to spring.",
        tempo: "half a day",
        consiglio: "Walk to the waterfalls along the road, with several stops."
      },
      {
        nome: "Vök Baths",
        testo: "Floating geothermal pools on Lake Urriðavatn, a short drive from Egilsstaðir, with a bar on the water. The first real hot bath after days of trekking and wind.",
        come: "By car, just outside Egilsstaðir. At weekends it is better to book online.",
        quando: "Evening, for the light and the steam on the water.",
        tempo: "2 hours",
        consiglio: "Check current prices on the official site before going."
      },
      {
        nome: "Lagarfljót and Hallormsstaður forest",
        testo: "One of Iceland's largest forests, 740 hectares of tall trees and a trail along the Lagarfljót. A real surprise in an almost treeless country.",
        come: "By car, about 25 km from Egilsstaðir along the lake, in the Fljótsdalur valley.",
        quando: "Summer and early autumn for the colours.",
        tempo: "2 hours",
        consiglio: "Small and quiet, ideal as a break from driving."
      }
    ],
    sapori: [
      {
        nome: "Reindeer (hreindýr)",
        testo: "In the East reindeer meat is on the menu in local restaurants: pan-seared or in a stew."
      },
      {
        nome: "Bakery bread and pastries",
        testo: "In small villages the bakeries are excellent: kleina (fried dough) and vínarbrauð (pastry with cream)."
      }
    ],
    attenzioni: [
      "Mountain roads like Fjarðarheiði and Öxi can close due to snow or fog: check road.is.",
      "Fuel pumps in the fjords are far apart: fill up when you can."
    ],
    esperienzeSlugs: ['terme-naturali-islanda'],
    tripSlugs: ['islanda-2024'],
    imageAlt: "Village of Seyðisfjörður among the snow-covered mountains of an Icelandic East fjord",
    immagine: '/images/islanda/egilsstadir-stock.jpg',
  },
  {
    slug: 'asbyrgi',
    paeseSlug: 'islanda',
    ordine: 6,
    nome: 'Ásbyrgi',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 night',
    visitataPersonalmente: true,
    introduzione: "The horseshoe-shaped canyon in the heart of the national park, with Stuðlagil and the most powerful waterfall in Europe along the way.",
    percheAndarci: "In terms of landscapes, it's one of the most intense days of the trip: in a few hours the basalt columns, the most powerful waterfall in Europe and the Ásbyrgi canyon.",
    cosaVedere: [
      'Stuðlagil Canyon: basalt columns 30 meters high and a river with turquoise water, famous only since 2017',
      'Dettifoss: the most powerful waterfall in Europe (44 m drop, flow up to 500 m³/s in summer)',
      'Ásbyrgi canyon, with a walk to the Botnstjörn pond',
    ],
    cosaFare: [
      'Walk to Stuðlagil Canyon (about 1h drive, last stretch on dirt road)',
      'View of Dettifoss from the west side (Route 862, paved, the best view)',
      'Walk among the green walls of the Ásbyrgi canyon',
    ],
    doveDormire:
      "I slept at the Ásbyrgi national park campsite (up to 350 pitches, open from mid-May to the end of October), which according to reviews has good facilities (clean bathrooms, showers, laundry). In high season it's best to book.\n\nThe area is very remote and nearby alternatives are few: in Kópasker (about 35-40 minutes) there are Kópasker Guesthouse, MELAR Guesthouse and Kópasker HI Hostel (budget/mid-range). There's no luxury in the surroundings: you choose between the campsite itself, which also has small studios, and the guesthouses of Kópasker.",
    doveMangiare: 'Dinner at the campsite.',
    comeArrivare: "From Egilsstaðir, with stops at Stuðlagil Canyon and Dettifoss.",
    comeSpostarsi: "Rental car; last stretch to Stuðlagil on dirt road.",
    periodoMigliore: "campsite open from mid-May to the end of October",
    costi: "check the campsite price when booking",
    erroriDaEvitare: ["Don't leave the campsite unbooked in high season: the area is very remote and alternatives are few"],
    miaEsperienza: "You hear Dettifoss before you see it: the roar and the force of the muddy water are among the most physical memories of the trip.",
    luoghi: [
      {
        nome: "Stuðlagil",
        testo: "A canyon with basalt columns and turquoise water that was almost unknown until a few years ago: the Kárahnjúkar dam upstream reduced the river's flow and exposed the walls. There are two approaches: the viewing platform on the west bank and, on the east bank, a longer trail.",
        come: "Last stretch on a gravel road from the asphalt; short, well-kept trails.",
        quando: "Summer, with the river low and full light.",
        tempo: "1-2 hours",
        consiglio: "The trail down to the river is better than the platform but needs suitable shoes."
      },
      {
        nome: "Dettifoss",
        testo: "A waterfall 100 metres wide and 44 high, considered the most powerful in Europe. The water is muddy and grey, and the noise carries far.",
        come: "From Route 862 (paved) on the west side, the best view; from the car park to the viewpoint it is a 1 km walk each way.",
        quando: "Summer; in spring the flow is at its peak.",
        tempo: "1 hour",
        costo: "free entry",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "You hear it before you see it: stay behind the chains, the edge is slippery."
      },
      {
        nome: "Ásbyrgi canyon",
        testo: "A horseshoe-shaped gorge 3.5 km long and 1 wide, with walls up to 100 metres and a birch forest on the floor. According to legend it is the hoofprint of Odin's horse.",
        come: "From the parking lot a flat trail leads to the Botnstjörn pond.",
        quando: "Evening or morning, with low light on the walls.",
        tempo: "2 hours",
        costo: "free entry",
        url: "https://www.vatnajokulsthjodgardur.is",
        consiglio: "The national park campsite is on the canyon floor, with excellent facilities."
      },
      {
        nome: "Hljóðaklettar",
        testo: "The 'echo rocks' in Vesturdalur, part of a row of craters about 6 km long that erupted 8,000-9,000 years ago. Floods from the Jökulsá river washed away the loose material and laid bare the basalt formed by magma that solidified in the volcanic conduits.",
        come: "In Vesturdalur, about 15 km south of Ásbyrgi, on a paved road. Marked trails from the car park.",
        tempo: "30 minutes to 1.5 hours",
        costo: "free entry",
        url: "https://www.vatnajokulsthjodgardur.is/en/areas/jokulsargljufur/hljodaklettar",
        consiglio: "Trail V2 (1.2 km, about 30 minutes, easy) is enough to see the rocks; the V3 loop is 3 km, 1-1.5 hours, and more demanding."
      },
    ],
    attenzioni: [
      "The area is remote: fill up with fuel and groceries in Húsavík or Akureyri.",
      "Gravel roads near Dettifoss east require a 4x4; Route 862 west is paved."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Aerial view of the horseshoe-shaped Ásbyrgi canyon, Iceland',
    immagine: '/images/islanda/asbyrgi-stock.jpg',
  },
  {
    slug: 'akureyri',
    paeseSlug: 'islanda',
    ordine: 7,
    nome: 'Akureyri and Lake Mývatn',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 night',
    visitataPersonalmente: true,
    introduzione: "Base for whale watching in Húsavík and for the geothermal area of Lake Mývatn, before the last big transfer toward Snæfellsnes.",
    percheAndarci: "A boat tour in search of humpbacks and minke whales, and then one of the areas with the most geothermal phenomena in all of Iceland.",
    cosaVedere: [
      'Skjálfandi Bay, for whale watching from Húsavík',
      'Grjótagjá (lava cave with hot spring, a Game of Thrones location; not swimmable today)',
      'Hverfjall (ring volcanic crater), Hverir (fumaroles and mud pools), Dimmuborgir (maze of lava formations)',
      'Goðafoss, the "waterfall of the gods"',
    ],
    cosaFare: [
      'Whale watching from Húsavík (see the dedicated experience page)',
      'Tour of the Mývatn geothermal area (see the dedicated experience page)',
    ],
    doveDormire:
      "I slept at the Hamrar campsite, among the best reviewed in Iceland (4/5 on Tripadvisor), at the edge of the Kjarnaskógur forest, with nearly new showers and excellent facilities. The indicative price is around 1,500 ISK per person plus a fee for the tent.\n\nAlternatives in Akureyri. Budget: Akureyri Backpackers, Guesthouse Bægisá · mid-range: Centrum Hotel · more refined: Hotel Kea, Bryggjan Boutique Hotel.",
    doveMangiare: "Quick lunch in Húsavík; barbecue at the campsite in the evening with groceries bought in Akureyri.",
    comeArrivare: "From Ásbyrgi, with a stop in Húsavík and the Mývatn area.",
    comeSpostarsi: 'Rental car.',
    periodoMigliore: "summer, for the best whale watching tour conditions",
    costi: "Hamrar campsite ~1,500 ISK/person + tent fee.",
    erroriDaEvitare: [],
    miaEsperienza: "Whale watching in the morning and the geothermal area in the afternoon: it was one of the most varied days of the trip, from open sea to sulfur in a few hours.",
    luoghi: [
      {
        nome: "Whale watching from Húsavík",
        testo: "Skjálfandi Bay is one of Iceland's best-known whale-watching spots: in summer humpback whales are often seen. Tours leave from Húsavík harbour and last about 3 hours.",
        come: "Book online with the operator; traditional or fast boats.",
        quando: "Daily trips from March to November; June-August is the best period. Early morning for calm seas.",
        tempo: "3 hours",
        costo: "from 12,990 ISK for the classic 3-hour tour with North Sailing (2026)",
        consiglio: "Dress in layers: it is cold on the boat even in summer."
      },
      {
        nome: "Goðafoss",
        testo: "The 'waterfall of the gods', 30 metres wide and 12 high, where, according to a legend probably born in the 19th century, around the year 1000 the lawspeaker Þorgeir threw the statues of the old gods after the conversion to Christianity.",
        come: "A stop along the Ring Road, with two sides and short paths.",
        quando: "Summer evening or early morning.",
        tempo: "30-45 minutes",
        costo: "free entry",
        consiglio: "The west side has fewer people and a better view."
      },
      {
        nome: "Mývatn geothermal area",
        testo: "The lake is ringed by volcanic features: the Hverfjall craters, the sulphur-smelling fumaroles of Hverir and the lava maze of Dimmuborgir. In a few kilometres you see three different landscapes.",
        come: "By car around the lake; short, well-marked trails.",
        quando: "Morning, before the groups; in summer the midges are annoying.",
        tempo: "half a day",
        consiglio: "Bring a head net: the lake's name means 'midge lake'."
      },
      {
        nome: "Grjótagjá",
        testo: "A small lava cave with a hot spring, known from a Game of Thrones scene.",
        come: "Small parking lot and a few steps.",
        quando: "Any time.",
        tempo: "20 minutes",
        costo: "free entry",
        consiglio: "Follow the signs on site: the water can be very hot."
      },
      {
        nome: "Akureyri town",
        testo: "The largest town outside the capital region, at the end of a long fjord and about 100 km from the Arctic Circle, with Akureyrarkirkja church, the botanical garden and a fine mountain view.",
        come: "On foot from the centre, including the Lystigarðurinn botanical garden.",
        quando: "Daytime; evening for the cafes.",
        tempo: "2-3 hours",
        consiglio: "Stock up here: the supermarkets are better supplied than in the northern villages."
      }
    ],
    sapori: [
      {
        nome: "Campsite barbecue",
        testo: "Groceries from Akureyri and the shared kitchen or grill at the campsite: the simplest way to save."
      },
      {
        nome: "Icelandic milk ice cream",
        testo: "In Iceland ice cream is eaten all year round, even in the cold: try it in the cafés and ice-cream shops in the centre."
      }
    ],
    attenzioni: [
      "The whale tour can be cancelled because of weather: leave a spare day.",
      "Around Mývatn there are many midges in summer: bring a head cover."
    ],
    esperienzeSlugs: ['whale-watching-husavik', 'zona-geotermale-myvatn'],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Steaming hot pool in the sulfur-colored ground of the geothermal area near Lake Mývatn',
    immagine: '/images/islanda/akureyri-stock.jpg',
  },
  {
    slug: 'grundarfjordur',
    paeseSlug: 'islanda',
    ordine: 8,
    nome: 'Grundarfjörður',
    tipologia: ['natura', 'campeggio'],
    giorniConsigliati: '1 night',
    visitataPersonalmente: true,
    introduzione: "The Snæfellsnes peninsula and Kirkjufell, the most photographed mountain in Iceland, after the longest transfer day of the trip.",
    percheAndarci: "It's a day almost entirely of driving, but at the end there's sunset at Kirkjufell, with the last real dinner in a tent of the trip.",
    cosaVedere: ['Traditional turf houses along Route 1', 'Kirkjufell (463 m) and the Kirkjufellsfoss waterfall'],
    cosaFare: [
      'Stop at a little-visited natural hot pool in West Iceland, for example Guðrúnarlaug (basic changing room, free entry)',
      'Photos of Kirkjufell at sunset: the parking lot is right next to the waterfall, no walking needed',
    ],
    doveDormire:
      "I slept at the campsite at the foot of Kirkjufell, simple and scenic, with a direct view of the fjord and the mountain.\n\nIn town the options are few: the Kirkjufell Guesthouse and Apartments (from about $180/night) is practically the main mid-range choice, and budget or luxury alternatives are few. For more choice it's worth looking toward Stykkishólmur, about 25 minutes by car.",
    doveMangiare: "Groceries at the town's shops (10 minutes on foot from the campsite) and dinner at the campsite: the last real tent dinner of the trip.",
    comeArrivare: "From Akureyri, about 390 km and 5 actual hours of driving via Route 1 and Borgarnes (6-7 hours with stops).",
    comeSpostarsi: 'Rental car.',
    periodoMigliore: "summer, for the light that lasts late on Kirkjufell at sunset",
    costi: "check the campsite price before leaving",
    erroriDaEvitare: ["Allow 6-7 hours of driving with stops: it's the longest transfer of the whole trip"],
    miaEsperienza: "The last dinner in the tent, with a view of Kirkjufell and the fjord, was a nice way to close the \"on the road\" part of the trip, before the final two nights in hotels.",
    luoghi: [
      {
        nome: "Kirkjufell and Kirkjufellsfoss",
        testo: "Said to be the most photographed mountain in Iceland, 463 metres high and hat-shaped, with a waterfall at its foot. The parking lot is next to the falls and no walking is needed.",
        come: "By car from Route 54; a short stop.",
        quando: "Sunset, especially in summer; in winter at night for the aurora.",
        tempo: "1 hour",
        costo: "free entry; paid parking, about 1,000 ISK (2025)",
        consiglio: "The campsite at the foot of the mountain has the best view without moving."
      },
      {
        nome: "Arnarstapi and Hellnar",
        testo: "Two former fishing villages on the south coast of Snæfellsnes, linked by a coastal path past cliffs, basalt arches and seabird nests.",
        come: "Parking in both villages; the path is on foot.",
        quando: "Summer.",
        tempo: "1-2 hours",
        consiglio: "Bring a windproof jacket: it is open sea."
      },
      {
        nome: "Djúpalónssandur",
        testo: "A black pebble beach with the remains of the British trawler Epine GY7, wrecked in 1948, and the four stones once used to test fishermen's strength, from Amlóði (23 kg) to Fullsterkur (154 kg). It is reached by a short path through the lava.",
        come: "Small car park on Route 574 and a short walk down.",
        quando: "Morning or evening.",
        tempo: "1 hour",
        consiglio: "The waves are strong: don't get too close to the water."
      },
      {
        nome: "Guðrúnarlaug",
        testo: "A rebuilt hot pool at Laugar, in the Sælingsdalur valley, at the spot described in the Laxdæla saga: it is named after the heroine Guðrún Ósvífursdóttir. It is still little visited.",
        come: "By car, in the Sælingsdalur valley.",
        quando: "Evening.",
        tempo: "1 hour",
        consiglio: "Basic changing room: bring a towel and flip-flops."
      }
    ],
    attenzioni: [
      "The Akureyri-Snæfellsnes leg is one of the longest driving days of the trip: set off early.",
      "Natural hot pools often have no changing rooms: respect the rules and leave everything clean."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Kirkjufell mountain and the Kirkjufellsfoss waterfall, Iceland',
    immagine: '/images/islanda/grundarfjordur-stock.jpg',
  },
  {
    slug: 'reykjavik',
    paeseSlug: 'islanda',
    ordine: 9,
    nome: 'Reykjavík',
    tipologia: ['cultura'],
    giorniConsigliati: "1-2 nights, to close out the trip",
    visitataPersonalmente: true,
    introduzione: "The capital, the last stop after six nights in a tent: a real bed, the city center and the last dinner of the trip.",
    percheAndarci: "It's a good way to end the trip, among the colorful streets of the center and a thermal stop on the way back.",
    cosaVedere: ['Hallgrímskirkja church', 'Colorful streets of the center', 'Kolaportið flea market (Saturday/Sunday)'],
    cosaFare: [
      'Optional stop at a natural hot pool in West Iceland on the way back (for example in the Deildartunguhver/Krauma area, the most powerful hot spring in Europe)',
      'Walking tour of the city center, with an optional stop at the Kolaportið market',
    ],
    doveDormire: "It's best to sleep downtown anyway, so you can walk everywhere.\n\nAlternatives in Reykjavík. Budget: KEX Hostel, Loft HI Eco Hostel · mid-range: hotels in the Þingholt area, Hlemmur Square · more refined: The Reykjavik EDITION, Canopy by Hilton Reykjavík.",
    doveMangiare: "Last dinner at one of the restaurants downtown.",
    comeArrivare: "From Grundarfjörður, about 2h30 of driving (180 km via Borgarnes).",
    comeSpostarsi: "On foot downtown.",
    periodoMigliore: "the same as the whole trip: summer, if you tour the island by tent",
    costi: "",
    erroriDaEvitare: [],
    miaEsperienza: "After six nights in a tent, the last night in a real bed in Reykjavík was almost surreal: a good way to celebrate the end of the trip before the flight home from Keflavík.",
    luoghi: [
      {
        nome: "Hallgrímskirkja",
        testo: "A concrete Lutheran church inspired by basalt columns, started in 1945 and finished in 1986. The 74.5 metre tower has a viewing deck over the city, reached by lift.",
        come: "In the centre, on foot. Entry to the church and to the tower is separate.",
        quando: "Church open daily 10am-5pm in winter and 9am-8pm in summer; tower until 4:45pm in winter and 7:45pm in summer. Morning for the softest light.",
        tempo: "45 minutes",
        costo: "church free; tower 1,500 ISK adults (2026), ticket sold only in the church, no advance booking",
        url: "https://hallgrimskirkja.is",
        consiglio: "Check the tower hours on the official site: they can change for concerts and services."
      },
      {
        nome: "Harpa and the waterfront",
        testo: "A glass concert hall on the harbour, opened in 2011, with a honeycomb facade. The waterfront leads to the Sólfar sculpture and the Faxaflói bay.",
        come: "On foot from the centre; entry to the foyer is free.",
        quando: "Sunset, when the glass reflects the sky.",
        tempo: "1 hour",
        costo: "free entry to the foyer",
        url: "https://www.harpa.is",
        consiglio: "Book concert tickets ahead."
      },
      {
        nome: "Perlan and Wonders of Iceland",
        testo: "A glass-domed building on top of the city's hot-water tanks, with an artificial ice cave, a planetarium and a viewing deck.",
        come: "Outside the centre, by bus or car; handy on a rainy day.",
        quando: "Exhibitions open daily 9am-9pm; ideal on bad-weather days.",
        tempo: "2-3 hours",
        url: "https://perlan.is",
        consiglio: "Book online to avoid queues."
      },
      {
        nome: "Old town and street art",
        testo: "Colourful streets around Skólavörðustígur, with design shops, galleries and murals. The Þingholt district has painted corrugated-iron houses.",
        come: "On foot; the uphill stretch starts at the church.",
        quando: "Morning or afternoon.",
        tempo: "2 hours",
        consiglio: "On Saturdays and Sundays there is the Kolaportið flea market."
      },
      {
        nome: "Kolaportið",
        testo: "An indoor flea market near the harbour, on Saturdays and Sundays: second-hand goods, books, souvenirs and a stall of dried fish and other traditional food.",
        come: "On foot from the centre, next to the old harbour.",
        quando: "Saturday and Sunday, all year; hours on the official website.",
        tempo: "1 hour",
        url: "https://kolaportid.is",
        consiglio: "Try harðfiskur (dried fish) with butter."
      },
      {
        nome: "Public geothermal pools",
        testo: "Geothermal pools are part of local social life: Sundhöllin in the centre, Laugardalslaug in Laugardalur park, the largest conventional pool complex in Iceland, Vesturbæjarlaug near the sea.",
        come: "By bus or on foot; paid entry, a naked shower is mandatory before getting in.",
        quando: "Evening, when locals gather.",
        tempo: "2 hours",
        consiglio: "Shower without swimwear: it is a hygiene rule Icelanders take seriously."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Hallgrímskirkja and a walk along Skólavörðustígur",
          "Lunch in the centre",
          "Harpa and the waterfront",
          "Evening at a geothermal pool"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Golden Circle (Þingvellir, Geysir, Gullfoss) by car or tour",
          "Dinner in the centre"
        ]
      }
    ],
    zone: [
      {
        nome: "Centre (101)",
        perChi: "Those who want to walk everywhere",
        testo: "Near Hallgrímskirkja, restaurants and bars. Noisier on weekend evenings, small rooms."
      },
      {
        nome: "Laugardalur",
        perChi: "Those seeking quiet and lower prices",
        testo: "Near the pools and the park; further from the centre, served by buses."
      },
      {
        nome: "Near the harbour",
        perChi: "Those arriving with ferries or tours",
        testo: "Has modern hotels, close to Harpa."
      }
    ],
    sapori: [
      {
        nome: "Hot dog (pylsur)",
        testo: "The most common street food: a sausage with raw and fried onion and sauces, from kiosks in the centre. The best known is Bæjarins Beztu Pylsur, running since 1937, with its main stand on Tryggvagata, opposite Harpa."
      },
      {
        nome: "Skyr and pastries",
        testo: "In the bakeries of the centre: kleina, snúður (cinnamon swirl)."
      },
      {
        nome: "Fresh fish at the harbour",
        testo: "Fish soups and baked cod in the restaurants of the old harbour."
      },
      {
        nome: "Plokkfiskur",
        testo: "Mashed cod and potatoes, a home dish found in traditional restaurants."
      }
    ],
    attenzioni: [
      "High prices: have soup or a hot dog for lunch and eat dinner at bars with a dish of the day to save.",
      "Taxis are expensive: buses or a car are better.",
      "In the centre's bars on Saturday night alcohol prices are high: check your bill."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Art Deco-style spire of the Hallgrímskirkja church in Reykjavík',
    immagine: '/images/islanda/reykjavik-stock.jpg',
  },
]
