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
      "I spent my first night in the tent at the Skógafoss campsite, at the foot of the waterfall, half an hour from Vík. In Vík the campsite (1,950 ISK + shower 300 ISK) has electricity, showers, shared kitchen. It's practically the only large facility in the area, convenient and well equipped, though in the most recent reviews some people complain about overcrowding in high season.\n\nAlternatives in Vík. Budget: The Barn (one of the best hostels in Iceland), Farmhouse Lodge Guesthouse · mid-range: Hotel Kría, Nordic design on the main street · more refined: Hótel Vík í Mýrdal.",
    doveMangiare: "Packed lunch or around the waterfalls; dinner at the campsite.",
    comeArrivare: "From Keflavík, with stops at the Golden Circle and the southern waterfalls along the way. From Reykjavík it's about 180 km on Route 1, two and a half hours without stops, which easily becomes a full day with the waterfalls; from Keflavík add another hour. Without a car there is Strætó bus 51 between Reykjavík and Höfn, stopping in Vík with few departures a day, or day tours from the capital.",
    comeSpostarsi: "Rental car (picked up in the morning in Keflavík together with the tent).",
    periodoMigliore: "late July, for the light that never fully fades at midnight and makes the night hike to the wreck possible",
    costi: "Campsite 1,950 ISK + shower 300 ISK; parking at Seljalandsfoss 700 ISK. Roughly, per person per day with a shared car: €60-90 camping with supermarket food; €180-250 with a hotel in Vík and a restaurant dinner; over €350 with a smart hotel and a glacier tour. Almost all south coast car parks charge, 750-1,000 ISK each.",
    erroriDaEvitare: [
      "After an already full day the plane wreck is quite a slog: better to gauge your energy before setting out at midnight",
      "Bring a flashlight or a power bank for your phone: four kilometers of flat black sand with no landmarks",
    ],
    miaEsperienza:
      "At the end of July at midnight there was still light, so after dinner I decided at the last minute not to go to bed and to reach the wreck on foot. After an already full day it was a slog, but it's probably the most absurd moment of the trip, and the one I remember best.",
    luoghi: [
      {
        nome: "Seljalandsfoss and Gljúfrabúi",
        testo: "Seljalandsfoss falls 60 metres and you can go around it on a slippery path behind the curtain. A little further on, hidden in a crack, Gljúfrabúi can be seen by wading into the stream.",
        come: "Paid parking (700 ISK when I went); short path, often muddy.",
        quando: "Summer evening, when the sun hits the fall from the west.",
        tempo: "1 hour",
        costo: "parking about 900-1,000 ISK per car (2025)",
        lat: 63.61583,
        lng: -19.99278,
        consiglio: "Waterproof shoes to get inside the Gljúfrabúi gorge.",
      },
      {
        nome: "Skógafoss",
        testo: "A waterfall 25 metres wide and 60 high, on the edge of the old coastal cliff. A 527-step staircase on the side climbs to the top, where the trail to the Fimmvörðuháls pass begins.",
        come: "Parking at the foot of the falls; the campsite next door is handy for the evening, and it's where we pitched the tent on the first night of the trip.",
        quando: "Afternoon, for the rainbow when it is sunny.",
        tempo: "45 minutes",
        costo: "free entry; parking 1,000 ISK per car up to 5 seats, about €7 (2026, paid via the Parka app or website)",
        lat: 63.53211,
        lng: -19.51114,
        consiglio: "Climb the wooden stairs for the view from above: the platform also shows the coast.",
      },
      {
        nome: "Kvernufoss",
        testo: "A waterfall of about thirty metres hidden in a gorge behind the Skógar museum, far less crowded than Skógafoss. As at Seljalandsfoss, you can walk behind the falls on a wet path.",
        come: "From the Skógar museum car park, follow the path along the stream, about 15-20 minutes on foot.",
        quando: "Late afternoon, when the Skógafoss coaches have left.",
        tempo: "1 hour",
        costo: "parking 750 ISK per car, about €5 (2026), including access to the museum toilets",
        lat: 63.52899,
        lng: -19.4803,
      },
      {
        nome: "Skógar Museum (Skógasafn)",
        testo: "An open-air folk museum with turf houses, a small church and thousands of objects from rural life in the south, plus a section on transport and communications. It's the right stop for a rainy hour near Skógafoss.",
        come: "In Skógar, a few minutes' drive from the waterfall; paid parking.",
        quando: "Any time, useful in bad weather.",
        tempo: "1.5-2 hours",
        costo: "3,000 ISK for adults, about €21 (2026); free under 12",
        orari: "June-August 9am-6pm, September-May 10am-5pm; closed 24-25 December and 1 January.",
        lat: 63.52592,
        lng: -19.49127,
        url: "https://www.skogasafn.is",
      },
      {
        nome: "DC-3 wreck at Sólheimasandur",
        testo: "A US Navy plane that came down in November 1973 on a plain of black sand, with no victims. The area is bare and windswept; since 2016 the landowners have banned driving there.",
        come: "Car park on the Ring Road, then a long walk across flat sand. No guide needed.",
        quando: "Late in summer, when the sun grazes the horizon; at night you need a torch.",
        tempo: "2-3 hours round trip",
        lat: 63.45908,
        lng: -19.36482,
        consiglio: "We went at midnight in late-July light: bring water and a power bank, the route has no landmarks.",
      },
      {
        nome: "Dyrhólaey",
        testo: "A headland with a large black lava arch in the sea and a lighthouse from 1927, with views of the south coast and the Reynisdrangar sea stacks. In summer puffins nest on the cliffs.",
        come: "By car south from Route 1: a lower car park near the arch and an upper one by the lighthouse, up a steep gravel road.",
        quando: "May to August for puffins; sunset for the light. In spring part of the headland may close for nesting.",
        tempo: "1 hour",
        costo: "parking 750 ISK per car, about €5 (2026, Parka)",
        lat: 63.39972,
        lng: -19.12639,
        consiglio: "Stay on the marked paths: the cliffs are high and crumbly.",
      },
      {
        nome: "Reynisfjara",
        testo: "The black sand beach with the basalt columns of the Hálsanefshellir cave and the Reynisdrangar sea stacks offshore. It's one of the most photographed beaches in Iceland and also one of the most dangerous, because of sneaker waves that rush up the beach without warning.",
        come: "Road 215 off Route 1, then a short path from the car park; at the entrance a traffic-light sign shows the day's risk level.",
        quando: "Early morning, before the coaches; in rough seas keep well away from the waterline.",
        tempo: "1 hour",
        costo: "free entry; parking 1,000 ISK per car for up to 4 hours, about €7 (2026, Parka)",
        lat: 63.4035,
        lng: -19.0474,
        consiglio: "Never turn your back on the sea and don't climb onto the low rocks: the waves have killed people.",
      },
      {
        nome: "Vík and Víkurkirkja church",
        testo: "Iceland's southernmost village, a few hundred people between the cliff and the black beach. The small red-roofed church from 1934, on the hill above the houses, is where you see the village and the Reynisdrangar stacks together.",
        come: "On foot from the village centre, up the lane behind the houses; there is a small car park below the church.",
        quando: "Evening, with low light over the sea.",
        tempo: "1 hour",
        costo: "free",
        lat: 63.42053,
        lng: -19.00293,
        consiglio: "The village has a supermarket and a petrol station: stock up before heading east, where services thin out.",
      },
      {
        nome: "Fjaðrárgljúfur",
        testo: "A winding canyon about a hundred metres deep and some two kilometres long, with moss-covered walls and a river running along the bottom. The path follows the rim with viewing platforms.",
        come: "About 70 km east of Vík, just after the turn-off for road 206; from the car park a well-kept path climbs gently.",
        quando: "Summer, when the ground is dry; in spring the path can close because of mud.",
        tempo: "1 hour",
        costo: "parking 1,000 ISK per car, valid all day, about €7 (2026, Parka)",
        lat: 63.77125,
        lng: -18.17194,
        consiglio: "Stay on the path: in 2019 the canyon was closed because too many visitors were damaging the vegetation.",
      },
      {
        nome: "Þingvellir",
        testo: "A national park and UNESCO site in the rift between two tectonic plates, where the first Icelandic parliament met in 930. You walk between basalt walls and the lake, with the Almannagjá fault as the passage.",
        come: "By car from Reykjavík or from Keflavík. Trails start from the visitor centre; no guide needed.",
        quando: "Early morning or evening, to avoid the buses; in summer open at all hours.",
        tempo: "1-2 hours",
        costo: "trails free; paid parking, about 1,000 ISK per car (2025)",
        lat: 64.25381,
        lng: -21.03725,
        url: "https://www.thingvellir.is",
        consiglio: "Parking and the visitor centre are paid: check current rates on the official site.",
      },
      {
        nome: "Geysir and Strokkur",
        testo: "A geothermal area on the Golden Circle. The original Geysir erupts rarely, while Strokkur, about fifty metres away, shoots jets of 15-20 metres every 6-10 minutes.",
        come: "Stop from the road, free access to the geothermal field; the paths are short.",
        quando: "When the wind blows the steam away from the crowd; always open.",
        tempo: "45 minutes",
        costo: "free entry",
        lat: 64.31306,
        lng: -20.30056,
        consiglio: "Stay upwind and away from the pools: the water is close to 100 degrees.",
      },
      {
        nome: "Gullfoss",
        testo: "The 'golden waterfall': two drops (about 11 and 21 metres) into a narrow gorge of the Hvítá river. A walkway leads to the edge, in the spray.",
        come: "Parking nearby; two levels of paths, the lower one reaching the edge is often closed in winter because of ice.",
        quando: "Early morning or evening, with low-angle light.",
        tempo: "45 minutes",
        costo: "free entry",
        lat: 64.32611,
        lng: -20.12111,
        consiglio: "Wear a waterproof: the spray reaches the paths.",
      },
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
    programmi: [
      {
        titolo: "1 day from Reykjavík",
        tappe: [
          "Early start along Route 1",
          "Seljalandsfoss and Gljúfrabúi",
          "Skógafoss and, if there's time, Kvernufoss",
          "DC-3 wreck at Sólheimasandur (2-3 hours on foot)",
          "Reynisfjara and dinner in Vík",
        ],
      },
      {
        titolo: "2 days with a night in Vík",
        tappe: [
          "Day 1: Golden Circle or the southern waterfalls, night in Skógar or Vík",
          "Day 2: Dyrhólaey and Reynisfjara in the morning",
          "Vík and Víkurkirkja church",
          "Fjaðrárgljúfur in the afternoon, then on towards Skaftafell",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: ice cave under Mýrdalsjökull on a tour from Vík, or Þórsmörk",
          "Alternatively, Jökulsárlón lagoon if you're continuing on the Ring Road",
        ],
      },
    ],
    gite: [
      {
        nome: "Skaftafell and Jökulsárlón",
        distanza: "Skaftafell about 135 km, Jökulsárlón about 190 km",
        come: "By car east along Route 1; glacier hikes and kayaking only with a guide.",
        testo: "Vatnajökull National Park, Svartifoss waterfall and the iceberg lagoon with Diamond Beach. As a day trip from Vík it's a rush: better to sleep further east.",
      },
      {
        nome: "Katla ice cave",
        distanza: "about 30-40 minutes from Vík by 4x4",
        come: "Only on super-jeep tours leaving from Vík, with crampons and helmets provided.",
        testo: "A cave in ash-black ice under the Mýrdalsjökull glacier, open even in summer, when the Vatnajökull caves are closed.",
      },
      {
        nome: "Þórsmörk",
        distanza: "about 30 km of track from Route 1, near Seljalandsfoss",
        come: "On the summer 4x4 bus or a tour: the track fords several rivers and is not for a normal car.",
        testo: "A green valley between three glaciers, with half-day trails and the end point of the trek coming down from Skógar over the Fimmvörðuháls pass.",
      },
      {
        nome: "Westman Islands (Vestmannaeyjar)",
        distanza: "ferry from Landeyjahöfn, about 1 hour's drive from Vík",
        come: "Herjólfur ferry from Landeyjahöfn; in winter it sometimes sails from Þorlákshöfn, further away.",
        testo: "Heimaey island, with the Eldfell volcano from the 1973 eruption and one of the largest puffin colonies in the world.",
      },
    ],
    faq: [
      {
        domanda: "How many nights do you need in Vík?",
        risposta: "One night is enough for Reynisfjara, Dyrhólaey and the village. With two you can add the ice cave or Fjaðrárgljúfur without rushing.",
      },
      {
        domanda: "Is it better to stay in Vík or Skógar?",
        risposta: "Skógar is handier for the waterfalls and the wreck, Vík for the beaches and for heading east. Vík has more services; in Skógar you sleep at the foot of Skógafoss.",
      },
      {
        domanda: "Can you drive to the Sólheimasandur plane wreck?",
        risposta: "No, driving there has been banned since 2016. From the car park on Route 1 it's about 4 km each way on foot across flat sand.",
      },
      {
        domanda: "Is Reynisfjara really dangerous?",
        risposta: "Yes: sneaker waves rush up the beach suddenly and have killed several people. The traffic-light sign at the entrance shows the day's risk and must be respected.",
      },
      {
        domanda: "Can you do the south coast as a day trip from Reykjavík?",
        risposta: "As far as Vík, yes, but it's about five hours' driving there and back plus stops. To see the wreck and the beaches as well, a night there is better.",
      },
      {
        domanda: "How do you pay for parking?",
        risposta: "Almost everywhere via the Parka app or website, within 24 hours, by number plate. If you don't pay, a 1,960 ISK late fee is added and charged through the rental company.",
      },
    ],
    zone: [
      {
        nome: "Vík",
        perChi: "those who want dinner, a supermarket and the beach a few minutes away",
        testo: "Hotels, guesthouses and the campsite below the cliff; in summer it fills up early and prices rise.",
        fascia: "€150-280",
      },
      {
        nome: "Skógar",
        perChi: "those who want to wake up facing the waterfall",
        testo: "Two or three hotels and the campsite at the foot of Skógafoss, halfway between Seljalandsfoss and Vík; very few services in the evening.",
        fascia: "€160-280",
      },
      {
        nome: "Hvolsvöllur and Hella",
        perChi: "those arriving late from Reykjavík or looking for lower prices",
        testo: "Towns with supermarkets, petrol stations and a few restaurants, about an hour from Vík; also handy for Þórsmörk.",
        fascia: "€130-220",
      },
      {
        nome: "South coast campsites",
        perChi: "those travelling by tent or camper",
        testo: "Skógafoss and Vík are the handiest campsites along the road: showers, shared kitchen and, at Vík, electricity. Wild camping is not allowed.",
        fascia: "about €30 for two with your own tent (Vík 1,950 ISK per person plus 300 ISK for the shower)",
      },
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
    comeArrivare: "From Grundarfjörður, about a 2h30 drive (180 km via Borgarnes). From Keflavík airport (KEF), about 50 km away, Flybus reaches the BSÍ terminal in about 45 minutes for about 4,000 ISK, with departures timed to arrivals; Airport Direct goes to its own terminal or to hotels for about 5,000 ISK. Strætó bus 55 costs about 2,400 ISK but is slow with few departures; a taxi costs 20,000-25,000 ISK and there is no Uber.",
    comeSpostarsi: "On foot downtown.",
    periodoMigliore: "the same as the whole trip: summer, if you tour the island by tent",
    costi: "I didn't note down the costs of the last stop. Roughly, per person per day: €90-120 with a hostel, supermarket food and a city pool; €200-280 with a central hotel, a restaurant dinner and a museum; over €400 with a design hotel, spa and a boat trip. A main course in a restaurant often costs 4,000-6,000 ISK.",
    erroriDaEvitare: [],
    miaEsperienza: "After six nights in a tent, the last night in a real bed in Reykjavík was almost surreal: a good way to celebrate the end of the trip before the flight home from Keflavík.",
    luoghi: [
      {
        nome: "Hallgrímskirkja",
        testo: "A concrete Lutheran church inspired by basalt columns, started in 1945 and finished in 1986. The 74.5 metre tower has a viewing deck over the city, reached by lift.",
        come: "In the centre, on foot. Entry to the church and to the tower is separate.",
        quando: "Church open daily 10am-5pm in winter and 9am-8pm in summer; tower until 4:45pm in winter and 7:45pm in summer. Morning for the softest light.",
        tempo: "45 minutes",
        costo: "church free; tower 1,500 ISK for adults, about €10 (2026), tickets only in the church, no advance booking",
        orari: "Church 10am-5pm in winter and 9am-8pm in summer; tower until 4:45pm in winter and 7:45pm in summer, daily except during services and concerts.",
        lat: 64.1417,
        lng: -21.9266,
        url: "https://hallgrimskirkja.is",
        consiglio: "Check the tower hours on the official site: they can change for concerts and services.",
      },
      {
        nome: "Harpa and the waterfront",
        testo: "A glass concert hall on the harbour, opened in 2011, with a honeycomb facade. The waterfront leads to the Sólfar sculpture and the Faxaflói bay.",
        come: "On foot from the centre; entry to the foyer is free.",
        quando: "Sunset, when the glass reflects the sky.",
        tempo: "1 hour",
        costo: "free entry to the foyer",
        lat: 64.15028,
        lng: -21.9325,
        url: "https://www.harpa.is",
        consiglio: "Book concert tickets ahead.",
      },
      {
        nome: "Perlan and Wonders of Iceland",
        testo: "A glass-domed building on top of the city's hot-water tanks, with an artificial ice cave, a planetarium and a viewing deck.",
        come: "Outside the centre, by bus or car; handy on a rainy day.",
        quando: "Exhibitions open daily 9am-9pm; ideal on bad-weather days.",
        tempo: "2-3 hours",
        orari: "Exhibitions daily 9am-9pm.",
        lat: 64.1292,
        lng: -21.9189,
        url: "https://perlan.is",
        consiglio: "Book online to avoid queues.",
      },
      {
        nome: "Old town and street art",
        testo: "Colourful streets around Skólavörðustígur, with design shops, galleries and murals. The Þingholt district has painted corrugated-iron houses.",
        come: "On foot; the uphill stretch starts at the church.",
        quando: "Morning or afternoon.",
        tempo: "2 hours",
        lat: 64.1458,
        lng: -21.9285,
        consiglio: "On Saturdays and Sundays there is the Kolaportið flea market.",
      },
      {
        nome: "Kolaportið",
        testo: "An indoor flea market near the harbour, on Saturdays and Sundays: second-hand goods, books, souvenirs and a stall of dried fish and other traditional food.",
        come: "On foot from the centre, next to the old harbour.",
        quando: "Saturday and Sunday, all year; hours on the official website.",
        tempo: "1 hour",
        orari: "Saturdays and Sundays, all year.",
        lat: 64.14889,
        lng: -21.93861,
        url: "https://kolaportid.is",
        consiglio: "Try harðfiskur (dried fish) with butter.",
      },
      {
        nome: "Public geothermal pools",
        testo: "Geothermal pools are part of local social life: Sundhöllin in the centre, Laugardalslaug in Laugardalur park, the largest conventional pool complex in Iceland, Vesturbæjarlaug near the sea.",
        come: "By bus or on foot; paid entry, a naked shower is mandatory before getting in.",
        quando: "Evening, when locals gather.",
        tempo: "2 hours",
        costo: "city pools 1,500 ISK per adult entry, about €10 (rate in force since 5 May 2026)",
        lat: 64.14583,
        lng: -21.88028,
        url: "https://reykjavik.is/en/swimming-pools/fees",
        consiglio: "Shower without swimwear: it is a hygiene rule Icelanders take seriously.",
      },
      {
        nome: "National Museum of Iceland",
        testo: "The permanent exhibition tells the island's story from the arrival of the Viking settlers to today, with the carved Valþjófsstaður door, drinking horns and traditional costumes. It's the right place to make sense of the rest of the trip, and a good choice on rainy days.",
        come: "On foot from the centre, on Suðurgata next to the university.",
        quando: "Any day, best in the morning.",
        tempo: "2 hours",
        costo: "3,300 ISK for adults, about €23 (2026); free under 18",
        orari: "Daily 10am-5pm.",
        lat: 64.14194,
        lng: -21.94806,
        url: "https://www.thjodminjasafn.is/english",
      },
      {
        nome: "Settlement Exhibition (Reykjavík 871±2)",
        testo: "Beneath Aðalstræti you visit the remains of a 10th-century longhouse, excavated where the city began, with a newer section that runs up to the present. Digital reconstructions and finds explain how the first inhabitants lived.",
        come: "Right in the centre, on the corner of Aðalstræti 16; Reykjavík City Museum ticket.",
        quando: "A bad-weather day.",
        tempo: "1 hour",
        lat: 64.14751,
        lng: -21.94281,
        url: "https://borgarsogusafn.is/en/adalstraeti-en",
      },
      {
        nome: "Tjörnin and City Hall",
        testo: "The pond in the centre, ringed by colourful houses, with swans, ducks and geese all year. City Hall, on the water, has a large relief model of Iceland on the ground floor, handy for going over your route.",
        come: "On foot, a short walk from Austurvöllur and Parliament.",
        quando: "Morning or sunset; in winter it is sometimes frozen.",
        tempo: "45 minutes",
        costo: "free entry",
        lat: 64.14444,
        lng: -21.9425,
      },
      {
        nome: "Sun Voyager (Sólfar)",
        testo: "Jón Gunnar Árnason's 1990 steel sculpture, shaped like the skeleton of a Viking ship facing the sea and Mount Esja. It's the most photographed spot on the seafront.",
        come: "On foot along Sæbraut, about 10 minutes from Harpa.",
        quando: "Sunset or, in winter, during the low-light hours.",
        tempo: "20 minutes",
        costo: "free",
        lat: 64.1476,
        lng: -21.92231,
      },
      {
        nome: "Old Harbour and Grandi",
        testo: "The harbour where whale-watching and puffin tours depart, with fish shacks, ice cream shops and the Grandi district, a former warehouse area with museums and a food hall. Whales of Iceland, with life-size models of cetaceans, is here.",
        come: "On foot from the centre along Geirsgata.",
        quando: "Afternoon, perhaps before or after a boat trip.",
        tempo: "2 hours",
        costo: "harbour free; Whales of Iceland 4,000 ISK for adults, about €28 (2026)",
        orari: "Whales of Iceland daily 10am-5pm.",
        lat: 64.1556,
        lng: -21.9488,
        url: "https://whalesoficeland.is",
      },
      {
        nome: "Sky Lagoon",
        testo: "A geothermal lagoon opened in 2021 at Kársnes, with an infinity pool facing the ocean and a seven-step ritual of hot water, cold plunge and sauna. It's the spa closest to the centre, the city alternative to the Blue Lagoon.",
        come: "About 15 minutes by car or taxi from the centre, in Kópavogur; timed entry booked online.",
        quando: "Evening, including in winter with dark skies for the aurora.",
        tempo: "2-3 hours",
        lat: 64.11649,
        lng: -21.94887,
        url: "https://www.skylagoon.com",
      },
      {
        nome: "Grótta Lighthouse",
        testo: "The lighthouse at the tip of the Seltjarnarnes peninsula, reached along a strip of land that the high tide covers. Beside it is a small geothermal foot bath, and in winter it's one of the darkest spots near the city for watching the aurora.",
        come: "By bus or bike from the centre, about 4 km; from the car you continue on foot.",
        quando: "Sunset; check the tide table before crossing.",
        tempo: "1 hour",
        costo: "free",
        lat: 64.1644,
        lng: -22.022,
        consiglio: "In spring and early summer the islet closes for nesting birds: stay on the shore.",
      },
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Hallgrímskirkja and the tower",
          "Skólavörðustígur and Laugavegur on foot",
          "Lunch in the centre, then Tjörnin and City Hall",
          "Harpa, the seafront and Sun Voyager",
          "Evening at a city pool",
        ],
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: National Museum or Settlement Exhibition in the morning",
          "Old Harbour, Grandi and a whale-watching trip",
          "Sunset at Grótta Lighthouse or an evening at Sky Lagoon",
        ],
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Golden Circle (Þingvellir, Geysir, Gullfoss) by car or on a tour",
          "Dinner in the centre; on Saturday or Sunday a stop at Kolaportið",
        ],
      },
    ],
    zone: [
      {
        nome: "Centre (101)",
        perChi: "Those who want to walk everywhere",
        testo: "Near Hallgrímskirkja, restaurants and bars. Noisier on weekend evenings, small rooms.",
        fascia: "€180-350",
      },
      {
        nome: "Laugardalur",
        perChi: "Those seeking quiet and lower prices",
        testo: "Near the pools and the park; further from the centre, served by buses.",
        fascia: "€130-220",
      },
      {
        nome: "Near the harbour",
        perChi: "Those arriving with ferries or tours",
        testo: "Has modern hotels, close to Harpa.",
        fascia: "€220-400",
      },
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
    gite: [
      {
        nome: "Golden Circle",
        distanza: "about 230 km round trip, a full day by car",
        come: "By car or on coach tours leaving from the centre; Þingvellir is about 45 minutes away.",
        testo: "The classic loop of Þingvellir, the Geysir geothermal field and Gullfoss waterfall: the three most famous sights near the capital.",
      },
      {
        nome: "Reykjanes Peninsula and Blue Lagoon",
        distanza: "about 50 km, 45 minutes by car",
        come: "By car or on direct buses to the lagoon; the Blue Lagoon is booked online, from 11,990 ISK (about €83).",
        testo: "Lava fields, cliffs and the volcanic area of Grindavík, active several times since 2023. Before going, check on safetravel.is that the area is open.",
      },
      {
        nome: "South coast to Vík",
        distanza: "about 180 km, 2.5 hours by car each way",
        come: "By car or on a full-day tour.",
        testo: "Seljalandsfoss, Skógafoss, Dyrhólaey and the black beach of Reynisfjara. As a day trip it's long: if you can, spend a night in Vík.",
      },
      {
        nome: "Snæfellsnes Peninsula",
        distanza: "about 180 km, 2.5 hours by car",
        come: "By car, via Borgarnes; day tours leave from the capital.",
        testo: "Kirkjufell mountain, the Snæfellsjökull glacier volcano and fishing villages: Iceland in miniature, west of the capital.",
      },
    ],
    faq: [
      {
        domanda: "How many days do you need in Reykjavík?",
        risposta: "One full day is enough for the centre, two if you add museums, the harbour and a spa. With three you can also do the Golden Circle.",
      },
      {
        domanda: "Is Reykjavík a good base for day trips?",
        risposta: "Yes for the Golden Circle, Reykjanes and Snæfellsnes. For the south coast beyond Vík it's better to sleep along the way, so you don't spend the day in the car.",
      },
      {
        domanda: "Blue Lagoon or Sky Lagoon?",
        risposta: "The Blue Lagoon is near the airport and handy on arrival or departure; Sky Lagoon is a quarter of an hour from the centre and faces the ocean. Both are booked online.",
      },
      {
        domanda: "Are the city pools worth it?",
        risposta: "Yes: they cost 1,500 ISK and are the most Icelandic way to spend an evening. Before going in you shower without a swimsuit, and it's compulsory.",
      },
      {
        domanda: "Can you see the northern lights from Reykjavík?",
        risposta: "From September to April, with clear skies and high activity, you sometimes see them even from the city. Head to darker spots such as Grótta Lighthouse or out of town.",
      },
      {
        domanda: "Do you need a car in the city?",
        risposta: "No, the centre is walkable and Strætó buses cover the rest. A car is for trips out of town.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['islanda-2024'],
    imageAlt: 'Art Deco-style spire of the Hallgrímskirkja church in Reykjavík',
    immagine: '/images/islanda/reykjavik-stock.jpg',
  },
]
