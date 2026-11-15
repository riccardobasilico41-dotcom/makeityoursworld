import type { Destinazione } from '@/lib/types'

export const destinazioniMontenegro: Destinazione[] = [
  {
    slug: 'bocche-di-cattaro',
    paeseSlug: 'montenegro',
    ordine: 1,
    nome: 'Bay of Kotor: Kotor and Perast',
    tipologia: ['patrimonio UNESCO', 'mare', 'città storica'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "It was the first stop of my ten days in Montenegro with friends, in a rental car: three days based in Kotor, the old town and the walls up to the fortress, then Perast, Our Lady of the Rocks and the loop around the Bay.",
    introduzione:
      "A deep, branching bay closed in by mountains that drop straight into the water, with the Venetian towns of Kotor and Perast, ship captains' palaces and islets with churches and monasteries.",
    percheAndarci:
      "For the view from Kotor's walls, the Venetian old town, Perast and Our Lady of the Rocks: it is Montenegro's best-known landscape.",
    cosaVedere: [
      "Kotor's old town and the Cathedral of Saint Tryphon",
      "The walls and the fortress of St. John",
      'Perast and the islands of Our Lady of the Rocks and St. George',
      "The Roman mosaics of Risan",
      "Dobrota and Prčanj with the captains' palaces",
    ],
    cosaFare: ['Climb the walls at dawn', 'Take the boat to Our Lady of the Rocks', 'Drive around the bay, crossing on the Kamenari ferry'],
    doveDormire: "Kotor's old town for atmosphere; Dobrota, Muo and Prčanj for quiet and parking; Perast for a night in a palace.",
    doveMangiare: 'Konobe by the sea with grilled fish, mussels buzara-style and black risotto.',
    comeArrivare: "Tivat airport is 15-20 minutes from Kotor: a taxi costs about €15-20, or you can pick up a rental car at the terminal; the stop for scheduled buses is on the main road, about 200 metres away. From Podgorica, the capital, it takes about an hour and a half by road. From Dubrovnik it is about an hour and a half via the Debeli Brijeg border crossing, with queues of a few hours in summer. Frequent buses link Kotor with Budva, Herceg Novi and Podgorica.",
    comeSpostarsi: 'Car, local buses along the shore, boats.',
    periodoMigliore: 'June and September; in July and August crowds and cruise ships.',
    costi: "Walls and fortress €15 in season, cash only; Cathedral of Saint Tryphon about €4; boat to Our Lady of the Rocks about €5 return; Kamenari ferry about €5 per car. Daily budget per person, indicative: low €50-70 (apartment or guesthouse, buses, quick lunches), mid €90-140 (small seaside hotel, dinner in a konoba, boat trip), high from €200 (design hotel or resort in Porto Montenegro and Luštica).",
    erroriDaEvitare: [
      'Visiting Kotor at midday on the days with the most cruise ships',
      'Climbing the walls in the heat and without water',
      'Staying in the old town with a car: parking is scarce and expensive',
    ],
    luoghi: [
      {
        nome: "Kotor Old Town",
        testo: "A maze of medieval lanes inside walls built and extended over centuries, mostly by the Venetians: a UNESCO World Heritage site. Tiny squares, Romanesque churches and the Cathedral of Saint Tryphon, consecrated in 1166. Cats are everywhere, and the town has made them its emblem.",
        come: "Drive or take the bus to the car parks outside the walls and enter through the Sea Gate. You visit on foot on your own.",
        quando: "Early morning or evening: in the middle of the day, with cruise ships in port, the lanes fill up.",
        tempo: "2-3 hours",
        costo: "Free entry",
        orari: "Always open",
        lat: 42.4249,
        lng: 18.7698,
        consiglio: "Get lost in the lanes without a map: the town is small and you always find your way back."
      },
      {
        nome: "St. John's Fortress",
        testo: "The walls climb the mountainside up to the fortress, about 280 metres above the sea. From the top you see the whole bay and its fjord-like shape. Halfway up stands the 16th-century Church of Our Lady of Remedy.",
        come: "The path starts in the old town: about 1,350 uneven steps and 260 metres of ascent. Closed shoes and water.",
        quando: "At opening time or late afternoon, never in the hot hours of summer. There is no shade at the top.",
        tempo: "1.5 hours for the climb, a break and the descent",
        costo: "€15 in season, cash only (2026)",
        lat: 42.4236,
        lng: 18.7719,
        consiglio: "Only use the official entrances in the old town: unofficial gaps in the walls are being closed or watched."
      },
      {
        nome: "Cathedral of Saint Tryphon",
        testo: "Kotor's Catholic cathedral, consecrated in 1166 and partly rebuilt after the earthquakes of 1667 and 1979. Inside are 14th-century frescoes, a Romanesque ciborium and, upstairs, the treasury with silver reliquaries.",
        come: "On Saint Tryphon's Square, in the old town. Tickets at the entrance.",
        quando: "Morning, before the cruise groups arrive.",
        tempo: "30-45 minutes",
        costo: "About €4, cash",
        lat: 42.4243,
        lng: 18.7714,
        consiglio: "Go up to the treasury loggia: from there you look down on the nave."
      },
      {
        nome: "St. Luke's and St. Nicholas's",
        testo: "Two Orthodox churches a few metres apart. St. Luke's, from 1195, is small and Romanesque, and for centuries had two altars, one Catholic and one Orthodox; St. Nicholas's dates from the early 20th century, and its domes are visible from the walls.",
        come: "On St. Luke's Square, in the northern part of the old town. Free entry.",
        quando: "During the day, outside service times.",
        tempo: "20 minutes",
        lat: 42.4255,
        lng: 18.7712
      },
      {
        nome: "Perast and the islands",
        testo: "A Baroque village in a single row of palaces on the water, with sixteen palaces and seventeen churches built by families of captains in the service of Venice. In front lie two islets: the artificial Our Lady of the Rocks and St. George, with its monastery among cypresses.",
        come: "From Kotor by car or bus along the coast road, about 12 km. Leave the car in the car parks at the entrance to the village. Boats to the islands leave from the pier, a crossing of a few minutes.",
        quando: "Morning or late afternoon. Boats leave when they are full.",
        tempo: "2-3 hours including the crossing",
        costo: "Boat to Our Lady of the Rocks about €5 return",
        lat: 42.4869,
        lng: 18.6992,
        consiglio: "Agree the boat price before getting on, for the return trip as well."
      },
      {
        nome: "Our Lady of the Rocks",
        testo: "An artificial island built by dropping stones and the hulls of sunken ships into the sea around a reef where, according to tradition, an icon of the Virgin was found. The church is full of sailors' votive offerings; every 22 July, during the Fašinada, boats bring more stones to enlarge the island.",
        come: "By boat from the Perast waterfront. Inside there is a small museum, with a donation.",
        quando: "Early morning, before the organised excursions.",
        tempo: "45 minutes on the island",
        costo: "Boat about €5, small donation for the museum",
        lat: 42.4867,
        lng: 18.6889,
        consiglio: "St. George, the island next to it, is a monastery and is usually not open to visitors: you see it from the boat."
      },
      {
        nome: "Risan and the Roman mosaics",
        testo: "Ancient Rhizon, considered the oldest settlement in the Bay of Kotor. From the Roman period survive the floor mosaics of a 2nd-century villa, with the god Hypnos asleep: the most precious remnant of the ancient town.",
        come: "On the road from Kotor to Herceg Novi, in the innermost part of the bay. A visit takes a few minutes.",
        quando: "All year, in the morning.",
        tempo: "30 minutes",
        costo: "€6, children under 12 €4; combined ticket with the Perast Museum €12",
        orari: "Tuesday to Sunday 10:00-16:00; closed Mondays, all of January, Orthodox Easter, 1 May and 13-14 November",
        url: "https://muzejikotor.me/en/admission-fees-and-renting/",
        lat: 42.5147,
        lng: 18.695,
        consiglio: "A short stop on the way to Perast, not a day on its own."
      },
      {
        nome: "Dobrota",
        testo: "The village along the shore north of Kotor, with 18th-century sea captains' palaces facing small pebble beaches and jetties. It is where you swim without leaving town.",
        come: "On foot along the shore from the old town, or by local bus towards Perast.",
        quando: "Afternoon for the sea, evening for dinner by the water.",
        tempo: "Half a day",
        costo: "Free",
        lat: 42.4542,
        lng: 18.7683,
        consiglio: "In the evening the shore is lit up and you see the old town with its illuminated walls."
      },
      {
        nome: "Prčanj",
        testo: "A seafarers' village on the shore opposite Dobrota, with the large Church of the Nativity of the Virgin, built between the 18th and 19th centuries and reached by a flight of steps. Narrow road, little traffic and a quiet waterfront.",
        come: "By car or bike from Kotor towards Muo and Stoliv, about 6 km.",
        quando: "Late afternoon, with the light on the bay.",
        tempo: "1 hour",
        lat: 42.4575,
        lng: 18.7422,
        consiglio: "Carry on to Stoliv and Lepetane and close the loop with the ferry."
      },
      {
        nome: "Kamenari-Lepetane ferry",
        testo: "It crosses the Verige, the narrowest strait in the Bay, in a few minutes. It saves the drive around the bay for anyone going from Herceg Novi or Croatia towards Tivat and Budva.",
        come: "Board at Kamenari, on the coast road, or at Lepetane, on the Tivat side. You pay on board.",
        quando: "Morning or evening in summer: on July and August afternoons the queue can be long.",
        tempo: "5-minute crossing, plus the wait",
        costo: "About €5 per car, foot passengers free",
        orari: "Day and night",
        lat: 42.4653,
        lng: 18.6858
      },
      {
        nome: "Tivat and Porto Montenegro",
        testo: "The airport town, with the luxury marina of Porto Montenegro built on the old naval arsenal. A palm-lined waterfront, yachts and restaurants, and the naval heritage museum with a submarine on display outdoors.",
        come: "15-20 minutes from Kotor by car or bus. You walk along the waterfront.",
        quando: "Late afternoon and evening.",
        tempo: "2 hours",
        lat: 42.4333,
        lng: 18.6917,
        consiglio: "Boats to the Blue Cave and the Island of Flowers leave from Tivat."
      },
      {
        nome: "Herceg Novi",
        testo: "The town at the entrance to the Bay, founded in 1382 by the Bosnian king Tvrtko, with a hillside old town, the Kanli Kula fortress at the top and Forte Mare by the sea. A seven-kilometre promenade runs to Igalo, full of bougainvillea and stairways.",
        come: "About 45 minutes from Kotor by car, with the Kamenari ferry or around the bay. Frequent buses.",
        quando: "Morning for the old town, evening for the promenade.",
        tempo: "Half a day",
        lat: 42.4524,
        lng: 18.5381,
        consiglio: "On the way to Dubrovnik it makes a good stop before the border."
      },
      {
        nome: "Blue Cave, Luštica",
        testo: "A sea cave at the tip of the Luštica peninsula, where the light entering under the vault turns the water bright blue. You go in by boat and can swim inside.",
        come: "By boat only, on excursions from Kotor, Tivat or Herceg Novi, often combined with Mamula and Our Lady of the Rocks.",
        quando: "Midday, when the high sun lights up the water; in rough seas the boats do not go in.",
        tempo: "Half a day with the excursion",
        lat: 42.3756,
        lng: 18.5982,
        consiglio: "Bring a swimsuit: swimming in the cave is the best part."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Kotor at opening time, with the climb to the fortress",
          "Lunch in the old town",
          "Perast and the boat to Our Lady of the Rocks in the afternoon",
          "Sunset on the Dobrota waterfront"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Kotor, walls and fortress in the morning, old town and cathedral in the afternoon",
          "Day 2: Risan, Perast and a boat trip to the islands, then Prčanj and Dobrota"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Kotor, walls and fortress in the morning, cathedral and churches in the afternoon, dinner in Dobrota",
          "Day 2: Perast, Our Lady of the Rocks and Risan, then back via Prčanj",
          "Day 3: boat to the Blue Cave on Luštica, or Herceg Novi and Tivat via the Kamenari ferry"
        ]
      }
    ],
    zone: [
      {
        nome: "Kotor Old Town",
        perChi: "those who want the atmosphere",
        testo: "You sleep inside the walls, within walking distance of everything. It is noisy by day because of the cruise ships, and bars stay open late at night. Cars cannot enter: you leave yours outside."
      },
      {
        nome: "Dobrota, Muo and Prčanj",
        perChi: "those travelling by car",
        testo: "On the shore a few kilometres from Kotor, with easier parking and fewer crowds. You reach the centre on foot along the shore or by local bus."
      },
      {
        nome: "Perast",
        perChi: "those looking for quiet",
        testo: "Few hotels and palaces turned into guest rooms. In the late afternoon, when the groups leave, the village is almost empty. Few restaurants."
      },
      {
        nome: "Tivat, Porto Montenegro and Luštica",
        perChi: "those looking for a luxury hotel",
        testo: "Chain hotels and seaside resorts a few minutes from the airport. More modern and less characterful, with Kotor 20 minutes away by car.",
        fascia: "from €200"
      }
    ],
    sapori: [
      {
        nome: "Grilled fish",
        testo: "Sea bream, sea bass and squid, usually sold by weight, in the konobe along the bay (Dobrota, Prčanj, Perast)."
      },
      {
        nome: "Crni rižot",
        testo: "Black cuttlefish-ink risotto, a coastal staple, best in family-run places."
      },
      {
        nome: "Njeguši prosciutto and cheese",
        testo: "Smoked ham and aged cheese from the mountain above Kotor."
      },
      {
        nome: "Vranac",
        testo: "Full-bodied Montenegrin red, almost always available by the glass."
      }
    ],
    attenzioni: [
      "With cruise ships in port (usually May to October) Kotor is congested in the middle of the day: arrive early.",
      "Unofficial taxis at Tivat airport: use those with a displayed fare or agree the price before getting in.",
      "Parking in Kotor and Perast is often paid and checked frequently: use the signed car parks and keep the receipt.",
      "The Kamenari-Lepetani ferry saves the long drive around the bay; in summer the queue can be long."
    ],
    gite: [
      {
        nome: "Lovćen, Njeguši and Cetinje",
        distanza: "about 1 hour to Njeguši",
        come: "By car from Kotor along the road of the 25 serpentines.",
        testo: "The hairpin road above the bay, Njeguši ham, Njegoš's mausoleum on the summit and the old capital Cetinje: a full day of mountains and history."
      },
      {
        nome: "Budva and Sveti Stefan",
        distanza: "about 40 minutes",
        come: "By car or on the frequent buses from Kotor to Budva.",
        testo: "Budva's old town on its fortified peninsula and the viewpoint over the islet of Sveti Stefan, with a swim in one of the bays towards Petrovac."
      },
      {
        nome: "Dubrovnik",
        distanza: "about 1.5 hours, without border queues",
        come: "By car or bus from Kotor and Herceg Novi, via the Debeli Brijeg crossing.",
        testo: "Dubrovnik's walls and old town. In summer the queues at the Croatian border can last hours: leave at dawn and check that your rental allows you to leave the country."
      }
    ],
    faq: [
      {
        domanda: "How many days do you need for the Bay of Kotor?",
        risposta: "Two days are enough for Kotor with its walls and for Perast with Our Lady of the Rocks. With three you add the Blue Cave by boat, or Herceg Novi and Tivat."
      },
      {
        domanda: "How much does it cost to climb Kotor's walls?",
        risposta: "€15 per person in season in 2026, paid in cash at the official entrances in the old town. The climb takes about an hour at a gentle pace."
      },
      {
        domanda: "Is it better to stay in Kotor or Perast?",
        risposta: "Kotor is more convenient for restaurants and buses, but noisy in summer and car-free inside the walls. Perast is much quieter in the evening, with few restaurants: fine for one or two nights."
      },
      {
        domanda: "How do you get to Our Lady of the Rocks?",
        risposta: "On the boats that leave from the Perast waterfront, about €5 return and a crossing of a few minutes. Agree the price before getting on."
      },
      {
        domanda: "When are there fewer cruise ships in Kotor?",
        risposta: "Cruise ships come mostly from May to October, with peaks on some days of the week: the arrival schedule is published by the Port of Kotor. On busy days visit the old town early in the morning or after 18:00."
      },
      {
        domanda: "Do you need a car to explore the Bay?",
        risposta: "It is not essential: local buses link Kotor, Perast, Tivat and Herceg Novi. With a car, though, you drive round the bay more freely, reach Prčanj and Luštica and go up to Lovćen."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: "The red-tiled roofs of Kotor's old town and the domes of the church of St. Nicholas",
    immagine: '/images/viaggi/montenegro-itinerario/giorno-02-bocche-di-cattaro.jpg',
  },
  {
    slug: 'lovcen-cetinje',
    paeseSlug: 'montenegro',
    ordine: 2,
    nome: 'Lovćen and Cetinje',
    tipologia: ['montagna', 'parco nazionale', 'storia'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    miaEsperienza:
      "I went during the ten days in Montenegro with friends: driving from Kotor up the Lovćen hairpins, Njeguši and the Njegoš mausoleum, with the night in Cetinje.",
    introduzione:
      "Montenegro's emblematic mountain, above the Bay of Kotor, with the mausoleum of the prince-bishop and poet Njegoš on the summit, and the old royal capital of Cetinje at its foot.",
    percheAndarci:
      "For the switchback road up from Kotor, the Njeguši prosciutto, the view from the mausoleum and the Cetinje of the embassies.",
    cosaVedere: ['The twenty-five switchbacks above Kotor', 'The village of Njeguši', "Njegoš's mausoleum on Jezerski vrh", "The monastery and King Nikola's palace in Cetinje"],
    cosaFare: ['Taste pršut and cheese at Njeguši', "Climb the mausoleum's 461 steps"],
    doveDormire: 'Guesthouses and small hotels in Cetinje.',
    doveMangiare: 'Pršut, njeguški cheese and njeguški steak in the Njeguši trattorias.',
    comeArrivare: "From Kotor you drive up the 25 serpentines to Njeguši, about an hour; from there it takes another 30-40 minutes to Njegoš's mausoleum and then on to Cetinje. Cetinje is about 40 minutes from Budva and half an hour from Podgorica. Without a car, buses link Cetinje with Budva and Podgorica, but for Njeguši and the mausoleum you need a car or an organised excursion.",
    comeSpostarsi: 'Car.',
    periodoMigliore: 'May-October; in winter the road to the mausoleum can be snowed over.',
    costi: "Lovćen National Park €3 per person per day; Njegoš Mausoleum €8; King Nikola Museum €8; Biljarda €5; combined ticket for all the national museums and the mausoleum €20. Daily budget per person, indicative: low €50-70 (guesthouse in Cetinje, lunch in Njeguši), mid €90-140 (small hotel and museums), high from €200.",
    erroriDaEvitare: ['Tackling the switchbacks with a large camper or at night', 'Going up with low clouds: the view disappears'],
    luoghi: [
      {
        nome: "Road of the 25 serpentines",
        testo: "The old Austro-Hungarian road that climbs from Kotor to Lovćen through 25 numbered hairpins. In a few kilometres you go from sea level to the Njeguši plateau, with the bay growing ever smaller below.",
        come: "Drive it from Kotor. A narrow road, with many coaches.",
        quando: "Morning, for light on the bay and less traffic.",
        tempo: "1 hour with stops",
        costo: "Free",
        consiglio: "Viewpoint lay-bys are few and small: only stop where there is safe space."
      },
      {
        nome: "Njeguši",
        testo: "The ancestral village of the Petrović-Njegoš dynasty, on the slopes of Lovćen. This is where you eat the smoked ham and the cheese that made the area famous, and visit Njegoš's birth house.",
        come: "On the road between Kotor and Lovćen. Have lunch in one of the taverns.",
        quando: "Lunchtime, all year.",
        tempo: "1 hour",
        costo: "Njegoš's birth house €3; included in the mausoleum ticket",
        orari: "Birth house: 11 April to 15 November daily 9:00-16:00; closed 16 November to 10 April",
        url: "https://en.narodnimuzej.me/posjeta-njegoseva-rodna-kuca/",
        lat: 42.4339,
        lng: 18.8103,
        consiglio: "Pršut is also sold whole or vacuum-packed in slices, to take home."
      },
      {
        nome: "Njegoš Mausoleum",
        testo: "On top of Jezerski vrh, at 1,657 metres, the tomb of the prince-bishop and poet Petar II Petrović-Njegoš. You climb 461 steps cut into the rock. From the terrace you see the bay, Lake Skadar and, on clear days, the Adriatic.",
        come: "By car to the car park, with the last stretch on foot after the tunnel.",
        quando: "Early morning or late afternoon. In winter the road can be closed by snow.",
        tempo: "1.5 hours",
        costo: "€8, students €4, under-12s free; plus park entry, €3",
        orari: "11 April to 15 November daily 9:00-16:00, last entry 30 minutes before closing; closed 16 November to 10 April",
        url: "https://en.narodnimuzej.me/posjeta-njegosev-mauzolej/",
        lat: 42.4,
        lng: 18.8378,
        consiglio: "Check the weather: with low cloud you see nothing."
      },
      {
        nome: "Cetinje",
        testo: "Montenegro's historic old capital, with 19th-century embassy buildings and King Nikola's small palace. Cetinje Monastery keeps the relics of St Peter, and the Biljarda, where Njegoš lived, is part of the National Museum.",
        come: "By car from Njeguši, driving down from Lovćen. In town you walk.",
        quando: "Morning, when the museums are open.",
        tempo: "2-3 hours",
        lat: 42.3894,
        lng: 18.9247,
        consiglio: "The King Nikola Museum, the Biljarda and the monastery are a few minutes' walk from one another: half a day covers them all."
      },
      {
        nome: "Cetinje Monastery",
        testo: "The Orthodox monastery rebuilt in the early 18th century, after the first one, founded in 1484 by Ivan Crnojević, had been destroyed by the Ottomans. It keeps the relics of St Peter of Cetinje and venerated objects such as the right hand of St John the Baptist.",
        come: "In the centre, at the foot of the hill. Visit in silence, with shoulders and legs covered.",
        quando: "Morning, outside service times.",
        tempo: "30 minutes",
        costo: "Free entry",
        lat: 42.3877,
        lng: 18.9214
      },
      {
        nome: "King Nikola Museum",
        testo: "The palace where King Nikola I, Montenegro's last monarch, lived, with the court's furniture, portraits, weapons and decorations. It tells the story of the small European capital of the late 19th century, with the great powers' embassies a few steps away.",
        come: "On Cetinje's main square. Guided or self-guided visit, depending on the season.",
        quando: "Morning; in winter it closes at weekends.",
        tempo: "1 hour",
        costo: "€8, students €4, under-12s free; combined ticket for the national museums €20",
        orari: "11 April to 15 November daily 9:00-16:00; 16 November to 10 April Monday-Friday 9:00-15:00, closed Saturday and Sunday",
        url: "https://en.narodnimuzej.me/posjeta-muzej-kralja-nikole/",
        lat: 42.3875,
        lng: 18.9244
      },
      {
        nome: "Biljarda",
        testo: "Njegoš's residence, built in 1838 and named after the billiard table the prince-bishop had carried all the way to Cetinje. It houses the museum devoted to Njegoš and, in a pavilion next door, the large relief map of Montenegro.",
        come: "Next to the monastery, a few minutes' walk from the King Nikola Museum.",
        quando: "Morning.",
        tempo: "45 minutes",
        costo: "€5 with the relief map of Montenegro, students €2.50",
        orari: "11 April to 15 November daily 9:00-16:00; 16 November to 10 April Monday-Friday 9:00-15:00",
        url: "https://en.narodnimuzej.me/posjeta-njegosev-muzej-biljarda/",
        lat: 42.3878,
        lng: 18.9231,
        consiglio: "Look at the relief map before leaving: you see the whole route between the Bay, Lovćen and the lake."
      },
      {
        nome: "Court Church (Ćipur)",
        testo: "A small stone church rebuilt in 1886 on the site of Cetinje's first monastery, the one founded by Ivan Crnojević. Since 1989 it has held the tombs of King Nikola and Queen Milena, brought back from Italy.",
        come: "Next to the King Nikola Museum, in the centre of Cetinje.",
        quando: "During the day.",
        tempo: "15 minutes",
        lat: 42.3869,
        lng: 18.9236
      },
      {
        nome: "Vlach Church",
        testo: "Cetinje's oldest church, from 1450, rebuilt in the 18th century. The fence around it is made from the barrels of rifles captured from the Turks in the 19th-century wars.",
        come: "In the northern part of the centre, a few minutes' walk from the square.",
        quando: "During the day.",
        tempo: "15 minutes",
        lat: 42.3909,
        lng: 18.9244,
        consiglio: "The fence is easy to see even without going in."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Up the 25 serpentines from Kotor",
          "Lunch in Njeguši",
          "Njegoš Mausoleum",
          "Cetinje in the afternoon and back via the Budva road"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: the serpentines, Njeguši and lunch with pršut, Njegoš Mausoleum in the afternoon, night in Cetinje",
          "Day 2: Cetinje Monastery, the Biljarda and the King Nikola Museum in the morning, then Rijeka Crnojevića and Lake Skadar"
        ]
      }
    ],
    zone: [
      {
        nome: "Cetinje",
        perChi: "those who want a base away from the sea",
        testo: "A quiet university town, reachable by car from Kotor and Budva. Few hotels, low-priced guesthouses, limited nightlife."
      },
      {
        nome: "Njeguši",
        perChi: "those who want to sleep in the mountains",
        testo: "A few rooms in family houses and taverns, halfway between Kotor and the mausoleum. Nothing goes on in the evening, but in the morning the park is very close."
      },
      {
        nome: "Kotor",
        perChi: "those on a day trip",
        testo: "More convenient for schedules and restaurants. You drive up in the morning and come back in the evening."
      }
    ],
    sapori: [
      {
        nome: "Njeguši pršut",
        testo: "Raw pork ham smoked with beech wood and cured at altitude."
      },
      {
        nome: "Njeguški cheese",
        testo: "Aged cow's cheese, sharp, typical of the area."
      },
      {
        nome: "Njeguški steak",
        testo: "Veal cutlet stuffed with ham and cheese, served in the village taverns."
      }
    ],
    attenzioni: [
      "The hairpin road has tight bends and coaches: give way to uphill traffic and watch the turns.",
      "Avoid foggy days: the bends are close together and visibility drops.",
      "Some taverns on the road charge more for portions sold by weight: ask the price before ordering."
    ],
    gite: [
      {
        nome: "Rijeka Crnojevića and Lake Skadar",
        distanza: "about 30 minutes",
        come: "By car from Cetinje heading south-east, on a narrow hill road.",
        testo: "The village with the stone bridge over the Crnojević river and, a little further on, the Pavlova Strana viewpoint over the river bend. From here you continue to Virpazar and a boat trip on the lake."
      },
      {
        nome: "Budva",
        distanza: "about 40 minutes",
        come: "By car or bus from Cetinje, heading down to the coast.",
        testo: "The old town on its fortified peninsula and the beaches of the riviera: you go down to the sea in the afternoon, after the morning's museums."
      }
    ],
    faq: [
      {
        domanda: "How much does it cost to enter Lovćen National Park?",
        risposta: "€3 per person per day in 2026, including the visitor centre and the educational trails. Njegoš's mausoleum is paid separately, €8."
      },
      {
        domanda: "Is Njegoš's mausoleum open all year?",
        risposta: "No: it opens from 11 April to 15 November, daily 9:00-16:00. From 16 November to 10 April it is closed to visitors, and the road can be under snow."
      },
      {
        domanda: "Is the serpentine road difficult to drive?",
        risposta: "It is narrow, with 25 hairpins and few places to pass coaches, but it is paved. Drive calmly, by day, sounding your horn on blind bends; with large campervans it is best avoided."
      },
      {
        domanda: "Can you go up to Lovćen by cable car from Kotor?",
        risposta: "Yes, with the Kotor-Lovćen cable car: about 11 minutes up, €20 return and €12 one way for an adult. It closes at the end of the season: in 2026 the last day was 31 October, with reopening planned for spring 2027."
      },
      {
        domanda: "Is the combined ticket for Cetinje's museums worth it?",
        risposta: "It costs €20 and covers all the national museums and Njegoš's mausoleum. It pays off if you visit the mausoleum, the King Nikola Museum and the Biljarda, which cost €21 separately."
      },
      {
        domanda: "Is it better to sleep in Cetinje or go back to Kotor?",
        risposta: "If you are going on to Lake Skadar or Podgorica you save time by sleeping in Cetinje, which is also cheaper. If Kotor is your base, do the loop in a day and return in the evening."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'Meadows and trees on the plateau of Lovćen National Park',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-04-lovcen-cetinje.jpg',
  },
  {
    slug: 'budva-riviera',
    paeseSlug: 'montenegro',
    ordine: 3,
    nome: 'Budva and the Riviera',
    tipologia: ['mare', 'spiagge', 'vita notturna'],
    giorniConsigliati: '1-3 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "I passed through during the ten days in Montenegro with friends: a day driving from Cetinje along the coast, Budva and Sveti Stefan down to Petrovac.",
    introduzione:
      "Montenegro's central coast, with Budva's fortified old town, the islet-resort of Sveti Stefan and the bays down to Petrovac.",
    percheAndarci: 'For a few days by the sea, choosing the quieter bays south of Budva.',
    cosaVedere: ["Budva's old town", 'Sveti Stefan from the viewpoint', 'The beaches of Drobni pijesak and Petrovac'],
    cosaFare: ['Swim in the bays between Budva and Petrovac', "An evening in Budva's old town"],
    doveDormire: 'Petrovac and Pržno for quiet, Budva for nightlife.',
    doveMangiare: 'Fish and Mediterranean cooking; konobe in the bays.',
    comeArrivare: "Budva is about 40 minutes by car from Kotor, about 30 from Tivat airport and a little over an hour from Podgorica via Cetinje. Budva bus station has frequent connections with Kotor, Herceg Novi, Bar and Podgorica, and in summer the coastal buses also stop at Bečići, Sveti Stefan and Petrovac. In July and August the riviera road is slow: set off early or in the evening.",
    comeSpostarsi: 'Car, coastal buses, taxis.',
    periodoMigliore: 'June and September.',
    costi: "Budva old town free; sunbeds and umbrellas €15-30 a day in high season. Daily budget per person, indicative: low €50-70 (apartment, free beach, local food), mid €90-140 (seaside hotel, sunbed, fish dinner), high from €200 (resort between Pržno and Sveti Stefan).",
    erroriDaEvitare: ['Expecting a quiet Budva in August', "Counting on visiting the island of Sveti Stefan: the hotel has been closed since 2020 and the island cannot be visited"],
    luoghi: [
      {
        nome: "Budva Old Town",
        testo: "A fortified core on a peninsula, with walls mostly from the Venetian era, the citadel and stone lanes. It was largely rebuilt after the 1979 earthquake. On the square of the churches, towards the tip, stand St. Mary in Punta, St. John's and the Orthodox Church of the Holy Trinity.",
        come: "On foot from the car parks along the Riviera. You walk round on your own in an hour.",
        quando: "Evening for the atmosphere, early morning for the light on the sea and empty lanes.",
        tempo: "1-2 hours",
        costo: "Free entry",
        orari: "Always open",
        lat: 42.2783,
        lng: 18.838,
        consiglio: "Avoid restaurants with waiters touting at the door."
      },
      {
        nome: "Budva Citadel",
        testo: "The fortress at the tip of the old town, with bastions over the sea and a terrace looking over the beaches and St. Nicholas Island. Inside are a library and exhibition spaces.",
        come: "From the square of the churches, inside the walls. Paid entry.",
        quando: "Late afternoon, with the sun low over the sea.",
        tempo: "30 minutes",
        consiglio: "The best view is from the bastions towards Mogren, not towards the marina."
      },
      {
        nome: "Mogren Beach",
        testo: "Two small beaches, Mogren 1 and Mogren 2, below the cliffs just outside the old town. You reach them on a short cliffside path that starts at the walls. It is the best-known beach near the centre, but in August it fills up early.",
        come: "On foot from the old town, a few minutes along the cliff path.",
        quando: "Early morning in summer; June and September are quieter.",
        tempo: "Half a day",
        lat: 42.2771,
        lng: 18.8327,
        consiglio: "Sunbeds and umbrellas are paid: if you want to lay a towel down, arrive early to find the free section."
      },
      {
        nome: "St. Nicholas Island",
        testo: "The island in front of Budva, the largest on the riviera, with a small church and pebble beaches on the side facing the town. The rest is scrub and rock.",
        come: "In summer by water taxi from Budva harbour, a crossing of about 10 minutes.",
        quando: "From June to September, when the boats run.",
        tempo: "Half a day",
        lat: 42.2667,
        lng: 18.85,
        consiglio: "Bring water and beach shoes: the pebbles are coarse and facilities are few."
      },
      {
        nome: "Jaz Beach",
        testo: "A long pebble and sand beach a few kilometres north-west of Budva, open and less built-up than the town beaches. In summer it hosts festivals and big concerts.",
        come: "By car or on the coastal buses towards Tivat; paid parking.",
        quando: "June and September; in July and August it is packed on concert days.",
        tempo: "Half a day",
        lat: 42.2833,
        lng: 18.8047,
        consiglio: "The western part of the beach is quieter."
      },
      {
        nome: "Sveti Stefan",
        testo: "A stone islet-village joined to the mainland by an isthmus and turned into a luxury resort. The hotel that occupies it has been closed since 2020 and the island cannot be visited. The famous view is from the viewpoint on the road above the bay.",
        come: "Just south of Budva, on the coast road. You look at it from the viewpoint and from the beaches on either side of the isthmus; check locally whether the hotel has reopened.",
        quando: "Late afternoon, with golden light on the stones.",
        tempo: "30 minutes for the photo stop",
        lat: 42.2561,
        lng: 18.8914,
        consiglio: "You can go down to the beach on either side of the isthmus, but it is paid in summer."
      },
      {
        nome: "Pržno and Miločer",
        testo: "A small fishing village with a sheltered beach and, right next to it, Miločer park, the former summer residence of the royal family, with pines and cypresses by the sea. A coastal path leads from Pržno to Sveti Stefan.",
        come: "By car or bus from Budva, about 15 minutes. The coastal path to Sveti Stefan is on foot.",
        quando: "Morning or late afternoon.",
        tempo: "2-3 hours",
        lat: 42.2675,
        lng: 18.8933,
        consiglio: "The path through the pines to Sveti Stefan is the finest walk on the riviera."
      },
      {
        nome: "Praskvica Monastery",
        testo: "An Orthodox monastery among olive trees on the hill above Pržno and Sveti Stefan, with the Church of St. Nicholas and the Church of the Holy Trinity. Its name comes from the peach scent of the nearby spring.",
        come: "By car from the coast road, with a short uphill stretch. Covered clothing.",
        quando: "Morning.",
        tempo: "30 minutes",
        costo: "Free entry",
        lat: 42.2689,
        lng: 18.9103
      },
      {
        nome: "Reževići Monastery",
        testo: "A medieval Orthodox monastery on the coast between Sveti Stefan and Petrovac, with frescoes and a view of the sea through the olive trees. Below it is a small beach.",
        come: "On the coast road, with parking on the verge. Visit in silence, with shoulders and legs covered.",
        quando: "Morning or late afternoon.",
        tempo: "30 minutes",
        costo: "Free entry",
        lat: 42.2149,
        lng: 18.924
      },
      {
        nome: "Petrovac",
        testo: "A more sheltered bay south of Budva, towards Bar, with a promenade, a Venetian fort and a couple of islets. Quieter and family-friendly.",
        come: "From Budva by car or coastal bus.",
        quando: "June and September for the sea and lower prices.",
        tempo: "Half a day",
        lat: 42.2056,
        lng: 18.9425,
        consiglio: "A good base for those who want the sea without Budva's nightlife."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Budva old town in the morning",
          "Lunch by the sea",
          "Sveti Stefan viewpoint in the afternoon",
          "Swim and dinner in Petrovac"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Budva old town and citadel in the morning, afternoon at Mogren, evening in town",
          "Day 2: Pržno and the Miločer path to Sveti Stefan, Reževići Monastery and dinner in Petrovac"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: old town, citadel and Mogren Beach",
          "Day 2: boat to St. Nicholas Island, evening in Budva",
          "Day 3: Pržno, Miločer and Sveti Stefan, then the Praskvica and Reževići monasteries and sunset in Petrovac"
        ]
      }
    ],
    zone: [
      {
        nome: "Budva",
        perChi: "those looking for nightlife",
        testo: "Hotels, bars and crowded beaches. More noise and traffic in summer, but everything is walkable and buses are frequent."
      },
      {
        nome: "Bečići and Rafailovići",
        perChi: "families",
        testo: "A long sand and pebble beach just south of Budva, with large hotels and a pedestrian promenade that reaches town in half an hour on foot."
      },
      {
        nome: "Petrovac and Pržno",
        perChi: "those who want peace and quiet",
        testo: "Smaller bays, seafront restaurants, fewer bars."
      }
    ],
    sapori: [
      {
        nome: "Fish and seafood",
        testo: "Grilled squid, sea bass and prawns in the konobe on the bays."
      },
      {
        nome: "Burek and pita",
        testo: "Flaky pastry filled with cheese or meat, for a quick snack."
      },
      {
        nome: "Rakija",
        testo: "Fruit brandy, often offered at the end of a meal."
      }
    ],
    attenzioni: [
      "In July and August the Riviera road is congested: leave early or in the evening.",
      "Concession beaches charge for sunbeds and umbrellas with very different prices from bay to bay: ask first.",
      "Restaurants with menus without prices: always ask for an estimate before ordering fish by weight."
    ],
    gite: [
      {
        nome: "Kotor and the Bay",
        distanza: "about 40 minutes",
        come: "By car or on the frequent buses from Budva.",
        testo: "Kotor's old town, the climb up the walls and, with an extra hour, Perast and Our Lady of the Rocks."
      },
      {
        nome: "Cetinje and Lovćen",
        distanza: "about 40 minutes to Cetinje",
        come: "By car inland; you need a car for Njegoš's mausoleum.",
        testo: "The old capital with its museums and, above it, Lovćen National Park with the mausoleum on the summit."
      },
      {
        nome: "Lake Skadar",
        distanza: "about 45 minutes to Virpazar",
        come: "By car via Petrovac and the Sozina tunnel, which is tolled.",
        testo: "A boat trip from Virpazar among water-lily channels and birds, with a lunch of lake fish."
      }
    ],
    faq: [
      {
        domanda: "Can you visit the island of Sveti Stefan?",
        risposta: "No: the island is a resort and the hotel has been closed since 2020, so you cannot go in. You see it from the viewpoint on the coast road and from the beaches on either side of the isthmus."
      },
      {
        domanda: "What are the best beaches near Budva?",
        risposta: "Mogren, a walk from the old town, and Jaz, longer and more open, towards Tivat. Further south, Pržno, the beaches beside Sveti Stefan and Petrovac are quieter."
      },
      {
        domanda: "How much do sunbeds and umbrellas cost?",
        risposta: "€15-30 a day in high season, with prices that vary a lot from one bay to the next. Almost every beach has a free section, small and best claimed early."
      },
      {
        domanda: "Is it better to stay in Budva or Petrovac?",
        risposta: "Budva if you want bars and evening life, with everything within walking distance. Petrovac if you prefer a quiet, family-friendly bay, about 20 minutes away by car."
      },
      {
        domanda: "Is Budva chaotic in August?",
        risposta: "Yes: traffic on the coast road, packed beaches and music until late. June and September have warm sea and far fewer crowds."
      },
      {
        domanda: "Do you need a car on the riviera?",
        risposta: "Not for Budva, Bečići and Petrovac, linked by frequent buses in summer. You need one for the monasteries, the small bays and day trips to Kotor, Cetinje and the lake."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: "The Budva Riviera seen from above, with St. Nicholas island and the old town",
    immagine: '/images/viaggi/montenegro-itinerario/giorno-05-budva-riviera.jpg',
  },
  {
    slug: 'lago-di-scutari',
    paeseSlug: 'montenegro',
    ordine: 4,
    nome: 'Lake Skadar',
    tipologia: ['lago', 'parco nazionale', 'natura', 'vino'],
    giorniConsigliati: '1 day',
    visitataPersonalmente: true,
    miaEsperienza:
      "I went during the ten days in Montenegro with friends: a day on the lake between Virpazar, Pavlova Strana and Rijeka Crnojevića, before heading up towards Ostrog and Durmitor.",
    introduzione:
      "The largest lake in the Balkans, shared with Albania, a national park with about 270 bird species, water-lily channels, monasteries on islets and the vineyards of Crmnica.",
    percheAndarci: "For a boat ride among channels and fishing villages, the Pavlova Strana viewpoint and the lake's wines.",
    cosaVedere: ['Virpazar and the water-lily channels', 'The Pavlova Strana viewpoint', 'The village of Rijeka Crnojevića', 'The monasteries on the islets'],
    cosaFare: ['A boat ride from Virpazar', 'A tasting at a family winery', 'Guided birdwatching'],
    doveDormire: 'Guesthouses and farm stays in Virpazar and the villages.',
    doveMangiare: "The lake's carp and eel, vranac and kratošija.",
    comeArrivare: "Virpazar is about 30 minutes from Podgorica and 30-40 minutes from Bar and Petrovac via the Sozina tunnel, which is tolled (about €2.50 per car). The village also has a station on the Podgorica-Bar railway, a short walk from the pier. Rijeka Crnojevića is about half an hour from Cetinje; the scenic road between Virpazar and Rijeka Crnojevića is narrow and best driven by day.",
    comeSpostarsi: 'Car and boats.',
    periodoMigliore: 'May-October; spring and autumn for the birds.',
    costi: "National park €5 per person per day, including the Vranjina and Virpazar visitor centres; boat trip €15-30 per person for 2-3 hours; kayak hire from the park €3-5 an hour. Daily budget per person, indicative: low €45-65 (guesthouse, lunch in a tavern), mid €80-120 (farm stay with a winery, boat and tasting), high from €150 (private boat and dinner at a winery).",
    erroriDaEvitare: ['Getting on boats without a park license', 'Driving the lake road in the evening: it is narrow and unlit'],
    luoghi: [
      {
        nome: "Virpazar and the boat trip",
        testo: "The fishing village on the lake's northern shore, where boats leave to glide among water lilies, reed beds and pelicans. Lake Skadar National Park is one of Europe's largest bird reserves, home to the rare Dalmatian pelican.",
        come: "By car from Podgorica or the coast, or by train on the Podgorica-Bar line. Boats leave from the pier and from the agencies in the village.",
        quando: "Morning or late afternoon to see the birds.",
        tempo: "2-3 hours",
        costo: "Boat €15-30 per person, plus park entry, €5",
        url: "https://nparkovi.me/sections/30/skadarsko-jezero",
        lat: 42.2444,
        lng: 19.0903,
        consiglio: "Agree on duration, route and price before getting on."
      },
      {
        nome: "Pavlova Strana",
        testo: "A viewpoint on the road above the lake where the Crnojević river makes a horseshoe bend around a green tongue of land. It is the most photographed view in the area, with the mountains of Albania in the background on clear days.",
        come: "By car from Virpazar or Rijeka Crnojevića on a narrow, winding mountain road.",
        quando: "Late afternoon.",
        tempo: "30 minutes",
        costo: "Free",
        consiglio: "The car park is small: arrive early."
      },
      {
        nome: "Rijeka Crnojevića",
        testo: "A riverside village with the stone bridge commissioned by Prince Danilo in 1853 and the old harbour. Boats for the lake leave from here.",
        come: "By car from Cetinje, about half an hour.",
        quando: "Morning.",
        tempo: "1.5 hours",
        lat: 42.35,
        lng: 19.0333,
        consiglio: "Try the lake fish in the taverns along the river."
      },
      {
        nome: "Vranjina and the visitor centre",
        testo: "A village on a rise in the northern part of the lake, at the start of the causeway that carries the road and railway towards Podgorica. It houses the national park visitor centre and, just above, the Monastery of St. Nicholas.",
        come: "On the road between Virpazar and Podgorica, just after the bridge over the lake.",
        quando: "Morning, before getting on a boat.",
        tempo: "1 hour",
        costo: "Included in the park ticket, €5",
        url: "https://nparkovi.me/sections/30/skadarsko-jezero",
        lat: 42.2742,
        lng: 19.1356
      },
      {
        nome: "Lesendro Fortress",
        testo: "A 19th-century fortress on an islet close to the shore, built by Njegoš to control the lake during the wars with the Turks. Today it is in ruins and seen from the road and from the boats.",
        come: "From the Virpazar-Podgorica road, near the Vranjina bridge. Boat trips pass right by it.",
        quando: "All year, from outside.",
        tempo: "15 minutes",
        lat: 42.2716,
        lng: 19.1197
      },
      {
        nome: "Žabljak Crnojevića",
        testo: "The ruins of the Crnojević dynasty's 15th-century capital, on an isolated hill in the middle of the lake's marshy plain. Walls, a church and a view over the channels all around.",
        come: "By car to the village, then on foot up a path; alternatively by boat.",
        quando: "Morning or late afternoon: there is no shade in summer.",
        tempo: "1-2 hours",
        lat: 42.3172,
        lng: 19.1569,
        consiglio: "Wear closed shoes: the path is stony."
      },
      {
        nome: "Kom Monastery",
        testo: "A 15th-century monastery on an islet in the lake, founded by the lords of the Crnojević family, with the Church of the Dormition and 16th-century frescoes. It is one of the island monasteries you can reach only by boat.",
        come: "By boat from Virpazar or Rijeka Crnojevića, on the lake tours that include it.",
        quando: "Morning.",
        tempo: "Half a day with the boat trip",
        lat: 42.3101,
        lng: 19.1279
      },
      {
        nome: "Godinje",
        testo: "A winegrowers' village on the south-western shore of the lake, with stone houses joined by passageways and underground cellars. This is where you taste vranac and kratošija straight from the producers.",
        come: "By car from Virpazar towards Murići, about 15 minutes.",
        quando: "September for the harvest; tastings all year.",
        tempo: "1-2 hours",
        lat: 42.2211,
        lng: 19.1092,
        consiglio: "Call the winery first: many are small family businesses."
      },
      {
        nome: "Starčevo Monastery",
        testo: "A small monastery on an islet in the southern part of the lake, founded at the end of the 14th century and one of the oldest in the area.",
        come: "By boat only, on the longer tours from Virpazar or Murići.",
        quando: "Morning, when the lake is calm.",
        tempo: "Half a day with the boat trip",
        lat: 42.19,
        lng: 19.2111,
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Virpazar and a boat trip in the morning",
          "Lunch with lake fish",
          "Pavlova Strana in the afternoon",
          "A family winery for a tasting"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Vranjina visitor centre and Lesendro, boat trip from Virpazar to Kom Monastery, dinner with lake fish",
          "Day 2: Godinje and a winery in the morning, then the scenic road to Pavlova Strana and Rijeka Crnojevića"
        ]
      }
    ],
    zone: [
      {
        nome: "Virpazar",
        perChi: "those who want the lake",
        testo: "Rooms in family houses, fish restaurants and boat departures within walking distance."
      },
      {
        nome: "Godinje and Crmnica",
        perChi: "wine lovers",
        testo: "Farm stays and rooms at wineries among the vineyards, a few minutes from Virpazar. You need a car."
      },
      {
        nome: "Rijeka Crnojevića",
        perChi: "those looking for quiet",
        testo: "Very few places to stay, but beautiful evening light and no organised tourism."
      }
    ],
    sapori: [
      {
        nome: "Lake carp and eel",
        testo: "Stewed or fried, in lakeside taverns."
      },
      {
        nome: "Vranac and kratošija",
        testo: "The red wines of the Crmnica area, in family wineries."
      },
      {
        nome: "Lozova rakija",
        testo: "Grape spirit, often home-made."
      }
    ],
    attenzioni: [
      "Boat trip prices vary a lot: ask the price per person and the duration first.",
      "Mosquitoes are many from June to August: bring repellent.",
      "The park requires an entrance ticket: buy it only at official points and keep it."
    ],
    gite: [
      {
        nome: "Podgorica",
        distanza: "about 30 minutes",
        come: "By car, train or bus from Virpazar.",
        testo: "The capital, with the Ottoman quarter of Stara Varoš, the Millennium Bridge over the Morača and the Cathedral of the Resurrection with its golden mosaics."
      },
      {
        nome: "Cetinje",
        distanza: "about 30 minutes from Rijeka Crnojevića",
        come: "By car.",
        testo: "The old royal capital with its monastery, Njegoš's Biljarda and the King Nikola Museum."
      },
      {
        nome: "Ostrog Monastery",
        distanza: "about 1.5 hours",
        come: "By car via Podgorica and Danilovgrad.",
        testo: "The white sanctuary set into the rock, on the road to Nikšić and Durmitor."
      }
    ],
    faq: [
      {
        domanda: "How much is entry to Lake Skadar National Park?",
        risposta: "€5 per person per day in 2026, including a visit to the Vranjina and Virpazar centres. Buy the ticket at official park points and keep it during the boat trip."
      },
      {
        domanda: "How much does a boat trip on the lake cost?",
        risposta: "€15-30 per person for 2-3 hours on shared boats from Virpazar; a private boat costs more. Agree price, duration and route before getting on."
      },
      {
        domanda: "When can you see the pelicans?",
        risposta: "In spring and autumn, the best seasons for birds, early in the morning or late in the afternoon. The colonies are protected and watched from a distance, ideally with binoculars."
      },
      {
        domanda: "Can you swim in the lake?",
        risposta: "Yes, in summer, at the beaches on the southern shore such as Murići, or from the boats where allowed. The water is shallow and warm; from June to August you need mosquito repellent."
      },
      {
        domanda: "Can you visit the lake as a day trip from the coast?",
        risposta: "Yes: Virpazar is 30-40 minutes from Bar and Petrovac and about 45 minutes from Budva. A night on the lake, though, lets you go out by boat at dawn, the best time."
      },
      {
        domanda: "Which wines can you taste at the lake?",
        risposta: "Mainly the red vranac and kratošija from Crmnica, the wine area between Virpazar and Godinje. Many family wineries offer tastings by appointment."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'The old stone bridge of Rijeka Crnojevića over the river flowing down to Lake Skadar',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-06-lago-di-scutari.jpg',
  },
  {
    slug: 'ostrog',
    paeseSlug: 'montenegro',
    ordine: 5,
    nome: 'Ostrog Monastery',
    tipologia: ['monastero', 'pellegrinaggio'],
    giorniConsigliati: 'half a day',
    visitataPersonalmente: true,
    miaEsperienza:
      "I stopped there during the ten days in Montenegro with friends, on the road from Lake Skadar to Žabljak: a stop at the monastery, then on via Nikšić towards Durmitor.",
    introduzione:
      "Montenegro's most revered Orthodox monastery, white and wedged into a vertical rock face at about 2,950 feet (900 meters), with the relics of Saint Basil of Ostrog.",
    percheAndarci: 'For its position in the rock and for the pilgrimage, which draws the faithful of all denominations.',
    cosaVedere: ['The upper monastery and the cave chapel with the relics', 'The lower monastery'],
    cosaFare: ['Walk the last stretch up from the parking lot'],
    comeArrivare: "The monastery is about an hour's drive from Podgorica and 40 minutes from Nikšić: you leave the main road near Bogetići and climb a narrow, steep road to the lower monastery, then on to the car parks below the upper one. Without a car there are organised excursions from the coast and Podgorica, or the train to Ostrog station on the Podgorica-Nikšić line, where the uphill footpath starts.",
    comeSpostarsi: 'On foot between parking lot and monastery.',
    periodoMigliore: 'all year; crowded in mid-May for the feast of Saint Basil and on summer weekends.',
    costi: "Free entry to both monasteries, donations welcome. Daily budget per person, indicative: low €40-60 (base in Nikšić or Podgorica, lunch in a tavern), mid €80-120 (city hotel and car), high from €150.",
    erroriDaEvitare: ['Arriving with bare shoulders or legs', 'Taking photos inside the chapels'],
    luoghi: [
      {
        nome: "Upper monastery",
        testo: "A church and cells carved into the sheer rock face, at about 900 metres. It was founded in the early 17th century by St. Basil of Ostrog, whose relics lie in the Church of the Presentation, set inside the cave.",
        come: "By car from Podgorica or Nikšić to the car parks, then on foot. The last stretch of road is narrow and steep, with alternating one-way traffic.",
        quando: "Early morning, to avoid the queues. On 12 May, the feast of St. Basil, it is extremely crowded.",
        tempo: "1-2 hours",
        costo: "Free entry, donations",
        url: "https://manastirostrog.com/",
        lat: 42.675,
        lng: 19.0292,
        consiglio: "Covered clothing: shoulders and knees covered, no shorts. Women are asked to wear a skirt, lent at the entrance."
      },
      {
        nome: "Church of the Holy Cross",
        testo: "The upper monastery's second cave church, on the top floor, with frescoes painted directly onto the rock in 1667. From a small terrace you look out over the Zeta valley.",
        come: "From the courtyard of the upper monastery, up the inner stairs.",
        quando: "After visiting the relics, once the queue has thinned.",
        tempo: "20 minutes",
        costo: "Free entry",
        lat: 42.675,
        lng: 19.0292,
        consiglio: "No photos inside: the frescoes are viewed in silence."
      },
      {
        nome: "Lower monastery",
        testo: "Further down, about 3 km below the shrine, with the Church of the Holy Trinity from 1824. Many pilgrims stop here before climbing, and this is where the konak, the pilgrims' guesthouse, is.",
        come: "Along the road that climbs to the upper monastery.",
        quando: "All year.",
        tempo: "30 minutes",
        costo: "Free entry",
        consiglio: "Visit it on the way back, once you have queued at the upper monastery."
      },
      {
        nome: "Pilgrims' path",
        testo: "The woodland path that climbs from the lower to the upper monastery, cutting across the road's hairpins. By tradition some pilgrims walk it barefoot.",
        come: "It starts at the lower monastery; it is steep and partly stepped.",
        quando: "Early morning, while it is cool.",
        tempo: "45 minutes-1.5 hours uphill",
        costo: "Free",
        consiglio: "Shoes with good soles and water: in summer it is hot even in the woods."
      },
      {
        nome: "Danilovgrad",
        testo: "A small town on the Zeta river, founded in the late 19th century, in the valley below Ostrog. The riverside and the bathing spots on the Zeta make a cool stop in summer.",
        come: "On the main road between Podgorica and Nikšić, about 20 minutes from the monastery.",
        quando: "Lunchtime or late afternoon.",
        tempo: "1 hour",
        lat: 42.5516,
        lng: 19.1058
      },
      {
        nome: "Nikšić and Freedom Square",
        testo: "Montenegro's second city, half an hour from the monastery, with a 19th-century centre around the large Freedom Square, bars and open-air cafés. It is the nearest base for those visiting Ostrog and then heading for Durmitor.",
        come: "By car or train from Podgorica. You walk round the centre.",
        quando: "Evening, when the square fills up.",
        tempo: "1-2 hours",
        lat: 42.7737,
        lng: 18.9485
      },
      {
        nome: "Nikšić Royal Palace",
        testo: "King Nikola's summer palace, built at the end of the 19th century in a park in central Nikšić. Today it houses the town museum, with archaeological and historical collections.",
        come: "On foot from Freedom Square, a few minutes.",
        quando: "Morning.",
        tempo: "45 minutes",
        lat: 42.7693,
        lng: 18.9516
      },
      {
        nome: "Lake Krupac",
        testo: "An artificial lake a few kilometres from Nikšić, with grassy beaches, jetties and clean water. In summer it is where the townspeople go to swim.",
        come: "By car from Nikšić, about 10 minutes north-west.",
        quando: "June to September.",
        tempo: "Half a day",
        lat: 42.7991,
        lng: 18.8891,
        consiglio: "A half-day break on the road from Ostrog to Durmitor."
      }
    ],
    programmi: [
      {
        titolo: "Half a day",
        tappe: [
          "Leave Podgorica in the morning",
          "Lower monastery",
          "Climb to the upper monastery",
          "Lunch on the way back"
        ]
      },
      {
        titolo: "1 day, towards Durmitor",
        tappe: [
          "Lower monastery and the pilgrims' path at dawn",
          "Upper monastery with the relics and the Church of the Holy Cross",
          "Lunch in Nikšić and a stroll around Freedom Square",
          "Afternoon on the road to Žabljak, with a stop at Lake Krupac in summer"
        ]
      }
    ],
    zone: [
      {
        nome: "Podgorica",
        perChi: "those visiting as a day trip",
        testo: "A practical base for Ostrog, by car. City hotels and the airport close by."
      },
      {
        nome: "Nikšić",
        perChi: "those continuing to Durmitor",
        testo: "Hotels and guesthouses half an hour from the monastery, with restaurants and evening life on the square. From here Žabljak is about an hour and a half away."
      },
      {
        nome: "Lower monastery konak",
        perChi: "pilgrims",
        testo: "Simple dormitories for those on pilgrimage, for a voluntary donation. It is not a hotel: no online bookings, and the monastery's rules apply."
      }
    ],
    sapori: [
      {
        nome: "Kačamak",
        testo: "Cornmeal and potato porridge with cheese, in local taverns."
      },
      {
        nome: "Mountain cheese",
        testo: "Bought from producers along the road."
      }
    ],
    attenzioni: [
      "The final road is narrow and steep, with alternating traffic in places: give way to uphill vehicles.",
      "It is a place of worship: cover up, keep your voice low, no photos inside the chapel.",
      "On summer weekends and feast days the car park fills up: arrive early."
    ],
    gite: [
      {
        nome: "Lake Skadar",
        distanza: "about 1.5 hours",
        come: "By car via Danilovgrad and Podgorica.",
        testo: "A boat trip from Virpazar among water lilies and birds, with a lunch of lake fish."
      },
      {
        nome: "Durmitor and Žabljak",
        distanza: "about 2.5 hours",
        come: "By car via Nikšić and the Šavnik plateau.",
        testo: "Black Lake, the panoramic road and the Tara canyon: the natural continuation after Ostrog."
      }
    ],
    faq: [
      {
        domanda: "How should you dress to enter Ostrog?",
        risposta: "Shoulders and knees covered for everyone, no shorts or vests. Women are asked to wear a skirt, which is lent at the entrance."
      },
      {
        domanda: "Do you pay to visit the monastery?",
        risposta: "No, entry is free to both the upper and the lower monastery. Donations are welcome, and candles and icons are on sale."
      },
      {
        domanda: "Can you drive all the way to the upper monastery?",
        risposta: "Yes, to the car parks just below, on a narrow, steep road with stretches of alternating one-way traffic. The last bit is on foot; alternatively you climb from the lower monastery on the pilgrims' path."
      },
      {
        domanda: "How much time do you need for Ostrog?",
        risposta: "Half a day from Podgorica, with an hour or two between the two monasteries. On summer weekends and feast days the queue for the relics makes the visit longer."
      },
      {
        domanda: "Can you take photos inside the monastery?",
        risposta: "Not inside the chapels or in the cave with the relics. Outside, in the courtyard and on the terrace, photos are fine."
      },
      {
        domanda: "When is the feast of St. Basil?",
        risposta: "On 12 May: it is the day of the biggest pilgrimage, with thousands of faithful and long queues. If you are not coming for the feast, pick another day."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'The Ostrog monastery set into the rock face',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-07-ostrog.jpg',
  },
  {
    slug: 'durmitor-tara',
    paeseSlug: 'montenegro',
    ordine: 6,
    nome: 'Durmitor and the Tara Canyon',
    tipologia: ['patrimonio UNESCO', 'montagna', 'trekking', 'rafting'],
    giorniConsigliati: '2-3 days',
    visitataPersonalmente: true,
    miaEsperienza:
      "I went in the final part of the ten days in Montenegro with friends, based in Žabljak: the Black Lake, the panoramic road and Bobotov Kuk, then the Tara bridge and rafting before heading down to Podgorica.",
    introduzione:
      "A limestone massif with 48 peaks above 6,500 feet (2,000 meters) and eighteen glacial lakes around Žabljak, and the Tara canyon, up to 4,300 feet (1,300 meters) deep, among the deepest in Europe.",
    percheAndarci: 'For the Black Lake, the Durmitor panoramic road, the climb up Bobotov Kuk and rafting on the Tara.',
    cosaVedere: ['The Black Lake', 'The panoramic road and the Sedlo pass', 'The Sušica canyon', 'The Đurđevića Tara bridge'],
    cosaFare: ['The Black Lake loop', 'The climb up Bobotov Kuk (2,523 m)', 'Rafting between Brštanovica and Šćepan Polje', 'The zipline over the Tara bridge'],
    doveDormire: 'Guesthouses and chalets in Žabljak; rafting camps along the Tara.',
    doveMangiare: 'Kačamak, cicvara, lamb under the bell, mountain-pasture cheeses.',
    comeArrivare: "From Podgorica to Žabljak takes about 2.5-3 hours: via Nikšić and Šavnik, or north on the tolled Smokovac-Mateševo motorway section (about €3.50 per car) and then via Kolašin and Mojkovac. From Ostrog the road via Nikšić takes about 2.5 hours. There are buses from Podgorica and Nikšić, but for the panoramic road, the viewpoints and the Tara bridge you need a car or an excursion.",
    comeSpostarsi: 'Car; transfers from the rafting operators.',
    periodoMigliore: 'June-September for trekking and the panoramic road; November to April snow and skiing.',
    costi: "Durmitor National Park €5 per person per day; rowing boat on Black Lake €10 an hour; park-run Durmitor Ring tour €20 by van, €30 by jeep; rafting €50-80 with lunch; zipline at the Tara bridge €20-30. Daily budget per person, indicative: low €45-65 (guesthouse or campsite, mountain food), mid €80-130 (chalet or small hotel and rafting), high from €180.",
    erroriDaEvitare: [
      'Starting late for Bobotov Kuk: afternoon thunderstorms are frequent',
      'Driving the panoramic road out of season or in fog',
      'Choosing the cheapest rafting without checking equipment and guides',
    ],
    luoghi: [
      {
        nome: "Black Lake (Crno jezero)",
        testo: "A glacial lake among pines and the cliffs of Međed, at 1,416 metres and 3 km from Žabljak. The loop around the lake is an easy path with views of the peaks.",
        come: "From the centre of Žabljak on foot (about 3 km), or by car to the car park. Park entry with a ticket.",
        quando: "Morning, when the lake is calm and mirrors the mountains.",
        tempo: "1-2 hours for the loop",
        costo: "€5 with park entry; rowing boat €10 an hour; parking €1 an hour",
        url: "https://nparkovi.me/sections/27/durmitor",
        lat: 43.1433,
        lng: 19.0875,
        consiglio: "Bring a jacket: even in summer the evenings are cool."
      },
      {
        nome: "Panoramic road and Sedlo pass",
        testo: "The loop of about 80 km around the massif, through canyons, plateaus and pastures with shepherds, crossing the Sedlo pass at about 1,900 metres. It is the way to see Durmitor without walking.",
        come: "By car from Žabljak, clockwise or anticlockwise; a narrow road, without guardrails on many stretches. The park also runs the loop by van or jeep.",
        quando: "June to October, in clear weather.",
        tempo: "Half a day with stops",
        costo: "Free by car; park-run tour €20 by van, €30 by jeep",
        consiglio: "Fill up in Žabljak: there are no petrol stations on the loop."
      },
      {
        nome: "Bobotov Kuk",
        testo: "The highest peak of the Durmitor massif, 2,523 metres. The hike is long and takes a day, with some exposed sections.",
        come: "From the Sedlo pass, about 6-7 hours return. With a local guide if in doubt; the park offers guides at €40 for 4 hours and €80 for 8.",
        quando: "July-September; before that, snow lingers in the gullies.",
        tempo: "Full day",
        lat: 43.1281,
        lng: 19.0347,
        consiglio: "Set off at dawn: afternoon thunderstorms are common."
      },
      {
        nome: "Savin Kuk",
        testo: "A 2,313-metre peak above Žabljak, with the chairlift that serves the ski slopes in winter and carries hikers towards the summit in summer. From the top you see Black Lake and the plateau.",
        come: "By car or on foot from Žabljak to the base of the lifts, a few kilometres from town.",
        quando: "Winter for skiing, summer for hiking.",
        tempo: "Half a day",
        lat: 43.1222,
        lng: 19.0808
      },
      {
        nome: "Zminje Lake",
        testo: "A small lake in the fir forest west of Žabljak, quieter than Black Lake and reached by a short, flat path.",
        come: "From the Šavnik road, on a short path through the woods.",
        quando: "Morning.",
        tempo: "1 hour",
        lat: 43.1555,
        lng: 19.0701,
        consiglio: "A good alternative when Black Lake is crowded."
      },
      {
        nome: "Sušica Canyon",
        testo: "A narrow, deep gorge on the western side of Durmitor, with a green floor and a small lake. The panoramic road descends to the valley floor through hairpins and tunnels cut into the rock.",
        come: "On the panoramic road; from the viewpoint above the gorge or by driving down to the bottom.",
        quando: "June to September.",
        tempo: "1 hour",
        lat: 43.1853,
        lng: 18.9995
      },
      {
        nome: "Ćurevac viewpoint",
        testo: "A viewpoint at about 1,600 metres above the Tara canyon, a few kilometres from Žabljak, where the gorge opens up hundreds of metres below.",
        come: "By car from Žabljak towards Tepca, then a short stretch on foot.",
        quando: "Late afternoon, with low light in the canyon.",
        tempo: "1 hour",
        lat: 43.2006,
        lng: 19.0933,
        consiglio: "If you are not rafting, this is where you see the Tara from above."
      },
      {
        nome: "Tara Canyon",
        testo: "With a maximum depth of 1,300 metres it is among the deepest in Europe. The river has carved vertical walls clad in pines, and the stretch between Brštanovica and Šćepan Polje, 18 km of moderate rapids, is the rafting section.",
        come: "You look at it from the viewpoints on the road and go down to the river on rafting trips from Brštanovica.",
        quando: "Rafting from spring to early autumn, with more water in spring.",
        tempo: "Half a day for rafting",
        costo: "Rafting €50-80 with lunch",
        lat: 43.2508,
        lng: 19.0085,
        consiglio: "Choose licensed operators that provide a life jacket and helmet."
      },
      {
        nome: "Đurđevića Tara Bridge",
        testo: "A five-arch concrete bridge, 365 metres long, with the roadway about 172 metres above the river, completed in 1940. During the war the partisans blew up one of its arches.",
        come: "On the road from Žabljak towards Pljevlja and Mojkovac, about half an hour. The zipline is paid.",
        quando: "Morning.",
        tempo: "45 minutes",
        costo: "Bridge free; zipline €20-30",
        lat: 43.1504,
        lng: 19.2952,
        consiglio: "From here you look down into the canyon and can ride the zipline."
      },
      {
        nome: "Dobrilovina Monastery",
        testo: "A 16th-century Orthodox monastery on the bank of the Tara, in the valley between the Đurđevića Tara bridge and Mojkovac, with 17th-century frescoes.",
        come: "By car from the Đurđevića Tara bridge towards Mojkovac.",
        quando: "Morning or early afternoon.",
        tempo: "30 minutes",
        costo: "Free entry",
        lat: 43.0278,
        lng: 19.4008
      },
      {
        nome: "Morača Monastery",
        testo: "Founded in 1252 in the Morača canyon, with the Church of the Dormition and frescoes from the 13th and 17th centuries. It is the natural stop on the road from Kolašin to Podgorica.",
        come: "On the main Kolašin-Podgorica road, with parking in front of the entrance. Covered clothing.",
        quando: "During the day, on the way back south.",
        tempo: "45 minutes",
        costo: "Free entry",
        lat: 42.7681,
        lng: 19.3917
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Black Lake in the morning",
          "Lunch in Žabljak",
          "Panoramic road over Sedlo",
          "Tara canyon viewpoint"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1: Black Lake and the Sedlo road",
          "Day 2: Đurđevića Tara Bridge and rafting between Brštanovica and Šćepan Polje"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Day 1: Black Lake in the morning, Zminje Lake and the Ćurevac viewpoint at sunset",
          "Day 2: Bobotov Kuk from the Sedlo pass for hikers, or the panoramic loop with the Sušica canyon",
          "Day 3: Đurđevića Tara Bridge and rafting, then the drive south with a stop at Morača Monastery"
        ]
      }
    ],
    zone: [
      {
        nome: "Žabljak",
        perChi: "those who want Durmitor",
        testo: "The town is at about 1,450 metres: guesthouses, wooden chalets, restaurants and trailheads a few minutes away. Cold at night even in summer.",
        fascia: "€40-90"
      },
      {
        nome: "Around Black Lake",
        perChi: "those travelling with a tent",
        testo: "Campsites on the edge of the forest, a walk from the lake and the trails. In the park a tent pitch costs €3 a day."
      },
      {
        nome: "Along the Tara",
        perChi: "those going rafting",
        testo: "Simple camps and bungalows near the rafting put-in and at Šćepan Polje, far from town."
      }
    ],
    sapori: [
      {
        nome: "Kačamak",
        testo: "Cornmeal and potato porridge with cheese and cream."
      },
      {
        nome: "Cicvara",
        testo: "A cream of cornmeal, cheese and sour cream."
      },
      {
        nome: "Lamb under the bell",
        testo: "Lamb and potatoes cooked under an iron dome covered with embers; order ahead."
      },
      {
        nome: "Mountain-pasture cheeses",
        testo: "Made in high huts and sold in Žabljak."
      }
    ],
    attenzioni: [
      "Mountain weather changes fast: start early and bring layers and a waterproof jacket.",
      "Mountain roads can be closed by snow in winter.",
      "Rafting operators: choose companies with certified equipment and guides, and compare prices.",
      "Long routes like Bobotov Kuk are not marked everywhere: in fog it is better to turn back."
    ],
    gite: [
      {
        nome: "Kolašin and Biogradska Gora",
        distanza: "about 1.5 hours",
        come: "By car via the Đurđevića Tara bridge and Mojkovac.",
        testo: "Biogradska Gora National Park, with one of Europe's last virgin forests around a lake, and the mountain town of Kolašin."
      },
      {
        nome: "Pljevlja and the Husein Pasha Mosque",
        distanza: "about 1 hour",
        come: "By car heading north-east, beyond the Tara bridge.",
        testo: "An inland town with the 16th-century Ottoman mosque of Husein Pasha and the nearby Holy Trinity Monastery."
      },
      {
        nome: "Piva and Lake Plužine",
        distanza: "about 1.5 hours",
        come: "By car through the Piva canyon, with tunnels cut into the rock.",
        testo: "The emerald-green artificial lake in the Piva canyon and Piva Monastery, moved stone by stone when the dam was built."
      }
    ],
    faq: [
      {
        domanda: "How much is entry to Durmitor National Park?",
        risposta: "€5 per person per day in 2026, including the visitor centre and the educational trails. Parking at Black Lake is extra, €1 an hour for a car."
      },
      {
        domanda: "When is the Durmitor panoramic road open?",
        risposta: "Roughly from June to October: the rest of the year the Sedlo pass is often snowbound. It is narrow and without guardrails on many stretches, so drive it only by day and in good weather."
      },
      {
        domanda: "Is Bobotov Kuk difficult?",
        risposta: "There are no technical difficulties, but it takes 6-7 hours return from the Sedlo pass, with a big height gain and some exposed sections. Set off at dawn to avoid the afternoon storms."
      },
      {
        domanda: "How much does rafting on the Tara cost?",
        risposta: "Roughly €50-80 per person for the classic stretch between Brštanovica and Šćepan Polje, usually with lunch and transfers. Choose a licensed operator that provides a life jacket and helmet."
      },
      {
        domanda: "How many days do you need for Durmitor?",
        risposta: "Two days are enough for Black Lake, the panoramic road and the Tara bridge with rafting. With three you add the climb to Bobotov Kuk or another hike."
      },
      {
        domanda: "Is it cold in Žabljak in summer?",
        risposta: "Days are mild, but the town is at about 1,450 metres and evenings are cool even in August. Bring a fleece and a waterproof jacket for the storms."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['montenegro-itinerario'],
    imageAlt: 'The Žabljak plateau seen from above, with the Durmitor mountains on the horizon',
    immagine: '/images/viaggi/montenegro-itinerario/giorno-08-durmitor-tara.jpg',
  },
]
