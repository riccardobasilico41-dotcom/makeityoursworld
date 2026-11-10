import type { Destinazione } from '@/lib/types'

export const destinazioniGermania: Destinazione[] = [
  {
    slug: 'berlino',
    paeseSlug: 'germania',
    ordine: 1,
    nome: 'Berlin',
    tipologia: ['città', 'storia', 'memoria', 'arte'],
    giorniConsigliati: '4 days, one more than other capitals, because of the size of the city',
    visitataPersonalmente: true,
    introduzione:
      "The German capital, capital of the Reich until 1945, divided from 1961 to 1989 into West Berlin and East Berlin by the Wall that made it the physical symbol of the Cold War, and reunified with Germany in 1990. It is much more spread out and less dense than other European capitals, with neighborhoods of very different character: the old town and the government quarter, the UNESCO World Heritage Museum Island, and the eastern neighborhoods like Kreuzberg and Friedrichshain, which grew in the wake of reunification to become among the liveliest in Europe.",
    percheAndarci:
      "It concentrates two centuries of European history in a single city (the empire, Nazism, the Cold War division, reunification), with sites that have stayed where they were and can be visited on foot. And it's one of the European capitals with the densest art, museum and nightlife scene, grown precisely in the neighborhoods that until a few decades ago were on the edge of the divided city.",
    cosaVedere: [
      "The Brandenburg Gate, built in 1791, with the Quadriga on top, the symbol of German reunification since 1989",
      "The Reichstag, seat of the Bundestag, with its famous glass dome designed by Norman Foster and completed in 1999, which can be visited with a free advance reservation",
      "The Memorial to the Murdered Jews of Europe (Denkmal für die ermordeten Juden Europas), the field of 2,711 concrete stelae designed by Peter Eisenman near the Brandenburg Gate, with the underground information center",
      "The Berlin Wall Memorial (Gedenkstätte Berliner Mauer) along Bernauer Straße, the best-preserved and best-documented stretch, with the reconstruction of the \"death strip\" and the documentation center",
      "Checkpoint Charlie, the former crossing point between the American and Soviet sectors, now reconstructed with a symbolic post and become one of the most photographed and touristy places in the city",
      "The Topography of Terror (Topographie des Terrors), the documentation center built on the site of the former Gestapo and SS headquarters, with a stretch of the Wall preserved along the perimeter",
      "Museum Island (Museumsinsel), a UNESCO World Heritage Site since 1999, with five museums including the Neues Museum (with the bust of Nefertiti), the Altes Museum and the Pergamonmuseum, closed for works since 2023 and reopening on 4 June 2027",
      "The East Side Gallery, 1.3 km of the Wall still standing along the Spree in Friedrichshain, painted by more than a hundred artists in 1990: the longest open-air art gallery in the world",
      "The Kreuzberg neighborhood, multicultural and alternative, with the Turkish market along the Maybachufer and plenty of street art",
    ],
    cosaFare: [
      "Climb the Reichstag dome (free reservation required) for the view over the government quarter",
      "Walk along Bernauer Straße at the Wall Memorial, the most direct way to understand what the border between the two Berlins meant",
      "Spend at least half a day on Museum Island, bearing in mind that the Pergamonmuseum is fully closed until 4 June 2027",
      "Walk or bike the East Side Gallery along the Spree",
      "An evening among the bars of Kreuzberg or Friedrichshain and, for those interested, a taste of the Berlin techno scene (there is a dedicated experience entry)",
    ],
    doveDormire:
      "Mitte, the old town around the Brandenburg Gate and Museum Island, is the most convenient area for the first part of the itinerary, well served by public transport. Kreuzberg and Friedrichshain, farther east, are the more lived-in alternative and generally cheaper, with an evening life of their own that the old town doesn't have, at the cost of a few extra minutes on the metro to the museums.",
    doveMangiare:
      "Currywurst, the sausage cut into slices and served with curry sauce, born right here in Berlin after the war; döner kebab, which arrived with Turkish immigration and became the city's signature dish, to the point that several variants compete for the title of \"original\"; markets like the Markthalle Neun in Kreuzberg for international street food. On Sundays almost all shops (not restaurants) are closed because of the Ladenschlussgesetz, the German opening-hours law.",
    comeArrivare: "**Berlin Brandenburg Airport (BER)**, the city's only airport since 2020. The **FEX Airport Express** and regional trains reach the Hauptbahnhof in about 30 minutes; **S-Bahn lines S9 and S45** are slower, about 45-50 minutes, but stop in more neighbourhoods. All of them need an **ABC** ticket, about €5 in 2026, from machines or the BVG app: an AB ticket is not enough. There is no convenient direct train from Italy: most people fly.",
    comeSpostarsi: "BVG network of U-Bahn, S-Bahn, trams and buses, very extensive given the size of the city: unlike more compact old towns like Kraków, getting from one neighborhood to another here almost always requires public transport. No car needed.",
    periodoMigliore: "May-September for the mild weather and long days; June-August is high season and more crowded; November-March is cold, but the Christmas markets in December are still a good reason to go anyway",
    costi: "a mid-range city for Western Europe, more affordable than Paris or London: regular dinner 15-25€ per person, single BVG ticket about 3€, tickets to the big museums the priciest item of a typical day. Indicative daily budget per person, sharing a double room: low €60-80, mid €110-160, high over €230.",
    erroriDaEvitare: [
      "Getting photographed with the fake soldiers at Checkpoint Charlie without knowing that the service is paid: the \"free\" photo is charged afterward",
      "Planning Museum Island around the Pergamonmuseum: it has been fully closed since October 2023. The north wing with the Pergamon Altar reopens on 4 June 2027, the south wing with the Ishtar Gate only around 2037",
      "Assuming shops are open on Sunday: German opening-hours law closes almost all commercial activity, restaurants excluded",
      "Underestimating distances: Berlin is much more spread out than other European capitals, and getting between Mitte and Friedrichshain always requires public transport",
      "Treating the places of remembrance (the Wall, the Topography of Terror, the Holocaust Memorial) as just another photo stop: they are designed for a quiet, informed visit",
    ],
    luoghi: [
      {
        "nome": "Reichstag and dome",
        "testo": "Seat of the Bundestag, with the glass dome designed by Norman Foster and completed in 1999. A spiral ramp winds up and down inside the dome, with views of the city and of the parliament chamber below.",
        "come": "Free entry with mandatory registration on the Bundestag website (name and date of birth of every visitor). At the entrance, security checks and original photo ID.",
        "quando": "Evening, for the city lights; entry every quarter of an hour, last admission 9:45pm (closed on 24 December). Register several days ahead.",
        "tempo": "1.5 hours",
        "costo": "free entry, registration required",
        "orari": "Entries every quarter of an hour, the last at 9.45pm; closed 24 December.",
        "lat": 52.51865,
        "lng": 13.3761,
        "url": "https://www.bundestag.de",
        "consiglio": "There is a 20-minute audio guide in the dome, in twelve languages, that describes the surrounding buildings."
      },
      {
        "nome": "Brandenburg Gate",
        "testo": "The neoclassical monument of 1791 with the Quadriga on top, since 1989 the symbol of German reunification. On Pariser Platz are embassies and luxury hotels.",
        "come": "On foot from the Brandenburger Tor S-Bahn station.",
        "quando": "Early morning or evening, for photos without crowds.",
        "tempo": "30 minutes",
        "costo": "free entry",
        "lat": 52.51627,
        "lng": 13.3777,
        "consiglio": "In the evening the gate is lit and the square empties."
      },
      {
        "nome": "Holocaust Memorial",
        "testo": "A field of over 2,700 concrete stelae by Peter Eisenman, in which you walk in a disorienting landscape. Below the memorial is an information centre with personal stories.",
        "come": "On foot from the Brandenburg Gate.",
        "quando": "The field is open day and night; the (free) information centre is open Tue-Sun 10am-6pm, last entry 45 minutes before closing, closed on Mondays.",
        "tempo": "1 hour",
        "costo": "free entry",
        "orari": "Field of stelae always open; information centre Tue-Sun 10am-6pm, closed Mondays.",
        "lat": 52.51387,
        "lng": 13.37873,
        "url": "https://www.stiftung-denkmal.de",
        "consiglio": "Enter with respect: it is a place of remembrance, not a playground."
      },
      {
        "nome": "Berlin Wall Memorial (Bernauer Straße)",
        "testo": "A preserved stretch of the Wall, with the original death strip, the watchtower and the documentation centre. A walkway above the strip shows what the division was like.",
        "come": "S-Bahn S1, S2, S25 or S26 to Nordbahnhof, or U-Bahn U8 to Bernauer Straße.",
        "quando": "Morning. The outdoor exhibition is open daily 8am-10pm; documentation centre and visitor centre Tue-Sun 10am-6pm.",
        "tempo": "1.5-2 hours",
        "costo": "free entry",
        "orari": "Open-air exhibition daily 8am-10pm; documentation centre and visitor centre Tue-Sun 10am-6pm, closed Mondays.",
        "lat": 52.53751,
        "lng": 13.39468,
        "url": "https://www.stiftung-berliner-mauer.de",
        "consiglio": "Climb the platform of the documentation centre for the view along the route."
      },
      {
        "nome": "Topography of Terror",
        "testo": "The documentation centre on the site of the former Gestapo and SS headquarters. The exhibition explains how Nazi repression worked.",
        "come": "On foot from Potsdamer Platz.",
        "quando": "Daily 10am-8pm; outdoor areas until dusk, 8pm at the latest.",
        "tempo": "1.5-2 hours",
        "costo": "free entry",
        "orari": "Daily 10am-8pm; outdoor areas until dusk.",
        "lat": 52.50621,
        "lng": 13.38415,
        "url": "https://www.topographie.de",
        "consiglio": "Pairs well with a walk around Potsdamer Platz."
      },
      {
        "nome": "Museum Island",
        "testo": "A UNESCO site since 1999, with five museums including the Neues Museum (with the bust of Nefertiti), the Altes Museum and the Alte Nationalgalerie. The Pergamonmuseum has been fully closed since 2023: the north wing with the Pergamon Altar reopens on 4 June 2027, the south wing with the Ishtar Gate around 2037. Meanwhile, Pergamonmuseum. Das Panorama, opposite the island, shows the panorama of ancient Pergamon.",
        "come": "U-Bahn to Museumsinsel or S-Bahn to Hackescher Markt or Friedrichstraße, then on foot; the Neues Museum entrance is through the James-Simon-Galerie. Single and combined tickets on the official website.",
        "quando": "Weekday mornings. The Neues Museum is open Tue-Sun 10am-6pm, closed on Mondays; opening times of the other museums on the official website.",
        "tempo": "half a day",
        "costo": "Museum Island area ticket €24 full, €12 reduced (2026)",
        "orari": "Neues Museum Tue-Sun 10am-6pm, closed Mondays.",
        "lat": 52.52016,
        "lng": 13.39774,
        "url": "https://www.smb.museum",
        "consiglio": "Nefertiti is in the north dome hall of the Neues Museum: tickets and prices on the official website."
      },
      {
        "nome": "Berliner Dom",
        "testo": "The Protestant cathedral of the Hohenzollern dynasty on Museum Island, with its large green dome, a crypt with around a hundred royal sarcophagi and an outdoor walkway 50 metres up above the Spree.",
        "come": "On foot from Museum Island; U5 Museumsinsel or S-Bahn Hackescher Markt. Tickets online, audio guide included.",
        "quando": "Morning or late afternoon; hours change on days with services and concerts.",
        "tempo": "1-1.5 hours",
        "costo": "€15 full, €12 reduced (2026)",
        "orari": "Usually Monday-Saturday 9am-6pm, Sunday noon-6pm; last entry 5pm.",
        "lat": 52.51908,
        "lng": 13.40109,
        "url": "https://www.berlinerdom.de/",
        "consiglio": "The dome walkway is reached on foot, with many steps: the climb is worth it for the view over the island."
      },
      {
        "nome": "Fernsehturm (TV Tower)",
        "testo": "The television tower on Alexanderplatz, built by the GDR in 1969 and 368 metres tall, the highest point in the city. The observation deck is at about 200 metres and shows the full extent of Berlin.",
        "come": "S-Bahn and U-Bahn to Alexanderplatz. Timed tickets on the official website.",
        "quando": "At sunset, booked ahead; on clear days.",
        "tempo": "1 hour",
        "costo": "from €20 (2026)",
        "orari": "Observation deck 10am-11pm; 24 December 10am-4pm.",
        "lat": 52.52083,
        "lng": 13.40942,
        "url": "https://tv-turm.de/",
        "consiglio": "Without a booked time slot, the wait at weekends can be long."
      },
      {
        "nome": "DDR Museum",
        "testo": "An interactive museum on everyday life in East Germany: a reconstructed flat, a Trabant to sit in, school, work, the Stasi. It is on the Spree, opposite the cathedral.",
        "come": "On foot from the Berliner Dom or Alexanderplatz.",
        "quando": "In the evening, after the island's museums, or on a rainy day.",
        "tempo": "1-1.5 hours",
        "orari": "Daily 9am-9pm, 365 days a year.",
        "lat": 52.51944,
        "lng": 13.40224,
        "url": "https://www.ddr-museum.de/"
      },
      {
        "nome": "East Side Gallery",
        "testo": "1,316 metres of the Wall still standing along the Spree in Friedrichshain, the longest surviving stretch, painted in spring 1990 by 118 artists from 21 countries: one of the largest open-air art galleries in the world.",
        "come": "On Mühlenstraße, between Ostbahnhof station and the Oberbaumbrücke: walk it along the Spree.",
        "quando": "Morning or late evening, with fewer people.",
        "tempo": "1-1.5 hours",
        "costo": "free entry",
        "orari": "Open air, always accessible.",
        "lat": 52.50445,
        "lng": 13.44084,
        "consiglio": "Do not write on the works: it is an offence and damages the murals."
      },
      {
        "nome": "Checkpoint Charlie",
        "testo": "The former crossing between the American and Soviet sectors, where in 1961 the two sides' tanks faced each other. Today there is a replica of the guard hut with sandbags and outdoor panels on the history of the border.",
        "come": "U6 to Kochstraße; 10 minutes on foot from the Topography of Terror.",
        "quando": "Early morning, before the groups.",
        "tempo": "30 minutes",
        "costo": "free outdoors",
        "lat": 52.50743,
        "lng": 13.39038,
        "consiglio": "The actors in uniform charge for photos: it is a paid service."
      },
      {
        "nome": "Charlottenburg Palace",
        "testo": "The largest Hohenzollern residence in Berlin, built from 1695 for Queen Sophie Charlotte, with baroque apartments, Frederick the Great's rococo New Wing and a large park on the Spree.",
        "come": "U2 to Sophie-Charlotte-Platz or bus to Luisenplatz, then on foot.",
        "quando": "Morning; the park is free and lovely in every season.",
        "tempo": "half a day",
        "costo": "Old Palace or New Wing €12; charlottenburg+ ticket for all museums in the park €19 (2026)",
        "orari": "Tuesday-Sunday 10am-5.30pm April to October, 10am-4.30pm November and December; closed Mondays, 24 and 25 December.",
        "lat": 52.52064,
        "lng": 13.29271,
        "url": "https://www.spsg.de/",
        "consiglio": "The charlottenburg+ ticket comes with a set entry time for the Old Palace: book it on arrival."
      },
      {
        "nome": "Mauerpark",
        "testo": "A park on the old line of the Wall, known for its flea market, held every Sunday since 2004, and for Bearpit Karaoke on Sunday afternoons, weather permitting, from spring to autumn.",
        "come": "On foot from the Berlin Wall Memorial on Bernauer Straße.",
        "quando": "Sunday.",
        "tempo": "2 hours",
        "costo": "free entry",
        "orari": "Flea market on Sundays.",
        "lat": 52.54372,
        "lng": 13.40193,
        "consiglio": "The karaoke in the amphitheatre is an experience for locals."
      },
      {
        "nome": "Tempelhofer Feld",
        "testo": "The old Tempelhof airport, closed in 2008 and turned into a 300-hectare park: people walk, cycle and skate on the runways, next to the huge terminal built in the 1930s and used for the 1948-49 airlift.",
        "come": "U6 to Paradestraße or U8 to Boddinstraße, then one of the entrances.",
        "quando": "Sunny afternoons and sunset, from spring to autumn.",
        "tempo": "1-2 hours",
        "costo": "free entry",
        "lat": 52.47442,
        "lng": 13.4026,
        "consiglio": "The gates close in the evening, at times that change month by month: check them before sunset."
      }
    ],
    programmi: [
      {
        "titolo": "1 day",
        "tappe": ["Morning: Reichstag and Brandenburg Gate", "Holocaust Memorial", "Currywurst for lunch", "Afternoon: Topography of Terror and Checkpoint Charlie", "Evening: East Side Gallery"]
      },
      {
        "titolo": "2 days",
        "tappe": ["Day 1 as above", "Day 2: Museum Island and Berliner Dom", "Berlin Wall Memorial (Bernauer Straße)", "Evening in Prenzlauer Berg"]
      },
      {
        "titolo": "3 days",
        "tappe": ["Days 1-2 as above", "Day 3: Fernsehturm and DDR Museum in the morning, Charlottenburg Palace in the afternoon, or Mauerpark on a Sunday"]
      },
      {
        "titolo": "4 days",
        "tappe": ["Days 1-3 as above", "Day 4: Potsdam and Sanssouci, or Kreuzberg with the Maybachufer market and sunset at Tempelhofer Feld"]
      }
    ],
    zone: [
      {
        "nome": "Mitte",
        "testo": "Near Museum Island and Alexanderplatz; high prices and touristy areas.",
        "perChi": "Those short of time who want the sights on foot",
        "fascia": "€100-200"
      },
      {
        "nome": "Prenzlauer Berg",
        "testo": "Well-kept houses, restaurants and parks; good metro links.",
        "perChi": "Those seeking a quiet area and cafes",
        "fascia": "€80-160"
      },
      {
        "nome": "Kreuzberg and Friedrichshain",
        "testo": "Venues, street food and murals; more noise and lower prices.",
        "perChi": "Those who want nightlife and street art",
        "fascia": "€60-140"
      },
      {
        "nome": "Charlottenburg",
        "testo": "Elegant shops and avenues, near the Zoo and Charlottenburg Palace.",
        "perChi": "Those who prefer a classic atmosphere",
        "fascia": "€80-170"
      }
    ],
    gite: [
      {
        "nome": "Potsdam and Sanssouci",
        "testo": "Frederick the Great's summer residence, with Sanssouci Palace (€14, closed Mondays; 2026), the vineyard terraces and a huge park of palaces and pavilions, a UNESCO site.",
        "come": "Regional train or S-Bahn S7 to Potsdam Hauptbahnhof, with an ABC ticket; then a bus to the park.",
        "distanza": "about 35 km, 30-40 minutes by train"
      },
      {
        "nome": "Sachsenhausen Memorial",
        "testo": "The concentration camp built by the SS in 1936 on the edge of Berlin, now a memorial and museum, free of charge. Open daily from 8.30am, until 6pm in summer and 4.30pm in winter. Visited in silence.",
        "come": "S1 from Friedrichstraße (about 45 minutes) or RE5 from the Hauptbahnhof (about 25) to Oranienburg, then 20 minutes on foot.",
        "distanza": "about 35 km, 25-45 minutes by train"
      },
      {
        "nome": "Spreewald",
        "testo": "A network of canals through the woods explored by punt, with villages of the Sorbian minority and pickled gherkins sold along the banks.",
        "come": "Regional train to Lübbenau, then on foot to the landing stages.",
        "distanza": "about 100 km south-east"
      }
    ],
    faq: [
      {
        "domanda": "How many days do you need for Berlin?",
        "risposta": "Four days, one more than for other capitals, because the city is very spread out. In three you can see the memorial sites, Museum Island and one neighbourhood in the east."
      },
      {
        "domanda": "Do you need to book the Reichstag dome?",
        "risposta": "Yes: entry is free but you must register on the Bundestag website with each visitor's name and date of birth, and show ID at the entrance. Do it several days ahead."
      },
      {
        "domanda": "Is the Pergamonmuseum open?",
        "risposta": "No, it has been fully closed since October 2023. The north wing with the Pergamon Altar reopens on 4 June 2027; the island's other museums, such as the Neues Museum with Nefertiti, are open."
      },
      {
        "domanda": "Where to stay in Berlin for a first visit?",
        "risposta": "Mitte to have the monuments within walking distance, Prenzlauer Berg for a quiet area near the centre, Kreuzberg or Friedrichshain to spend less and go out at night."
      },
      {
        "domanda": "Which ticket do you need from BER airport?",
        "risposta": "The ABC ticket, about €5 in 2026: the AB ticket does not cover the airport, and checks are frequent. FEX and regional trains reach the Hauptbahnhof in about 30 minutes."
      },
      {
        "domanda": "Are shops open on Sundays in Berlin?",
        "risposta": "Almost all are closed, under the opening-hours law; restaurants, bars, museums and pharmacies stay open. Sunday is Mauerpark day."
      }
    ],
    sapori: [
      {
        nome: "Currywurst",
        testo: "Sliced sausage with curry sauce and ketchup, eaten standing at the kiosks."
      },
      {
        nome: "Döner Kebab",
        testo: "The kebab in bread spread through Berlin thanks to Turkish immigrants and is one of the city's favourite street foods."
      },
      {
        nome: "Berliner (Pfannkuchen)",
        testo: "The jam-filled doughnut, typical of bars and bakeries."
      },
      {
        nome: "Eisbein and Schnitzel",
        testo: "Pork knuckle and cutlet, classics of beer halls and traditional restaurants."
      }
    ],
    attenzioni: [
      "BVG tickets: validate paper ones and keep the ticket with you, checks are frequent and fines are steep.",
      "Cash: some places only take cash, bring some.",
      "Pickpockets: take care at stations, on crowded transport and in tourist spots.",
    ],
    esperienzeSlugs: ['reichstag-cupola', 'museumsinsel-pergamon', 'east-side-gallery', 'berlino-clubbing'],
    tripSlugs: ['berlino-weekend'],
    imageAlt: 'The Reichstag building in Berlin with its glass dome and the German flag, seen from the lawn in front',
    immagine: '/images/germania/berlino.jpg',
  },
]
