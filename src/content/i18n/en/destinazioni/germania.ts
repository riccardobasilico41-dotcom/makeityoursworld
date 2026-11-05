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
    comeArrivare:
      "Berlin Brandenburg Airport (BER), the city's only airport since 2020: connected to the center by S-Bahn and regional trains in about 30 minutes. From Italy there's no convenient direct train connection: you generally arrive by plane.",
    comeSpostarsi: "BVG network of U-Bahn, S-Bahn, trams and buses, very extensive given the size of the city: unlike more compact old towns like Kraków, getting from one neighborhood to another here almost always requires public transport. No car needed.",
    periodoMigliore: "May-September for the mild weather and long days; June-August is high season and more crowded; November-March is cold, but the Christmas markets in December are still a good reason to go anyway",
    costi: "a mid-range city for Western Europe, more affordable than Paris or London: regular dinner 15-25€ per person, single BVG ticket about 3€, tickets to the big museums the priciest item of a typical day",
    erroriDaEvitare: [
      "Getting photographed with the fake soldiers at Checkpoint Charlie without knowing that the service is paid: the \"free\" photo is charged afterward",
      "Planning Museum Island around the Pergamonmuseum: it has been fully closed since October 2023. The north wing with the Pergamon Altar reopens on 4 June 2027, the south wing with the Ishtar Gate only around 2037",
      "Assuming shops are open on Sunday: German opening-hours law closes almost all commercial activity, restaurants excluded",
      "Underestimating distances: Berlin is much more spread out than other European capitals, and getting between Mitte and Friedrichshain always requires public transport",
      "Treating the places of remembrance (the Wall, the Topography of Terror, the Holocaust Memorial) as just another photo stop: they are designed for a quiet, informed visit",
    ],
    luoghi: [
      {
        nome: "Reichstag and dome",
        testo: "Seat of the Bundestag, with the glass dome designed by Norman Foster and completed in 1999. A spiral ramp winds up and down inside the dome, with views of the city and of the parliament chamber below.",
        come: "Free entry with mandatory registration on the Bundestag website (name and date of birth of every visitor). At the entrance, security checks and original photo ID.",
        quando: "Evening, for the city lights; entry every quarter of an hour, last admission 9:45pm (closed on 24 December). Register several days ahead.",
        tempo: "1.5 hours",
        costo: "free entry, registration required",
        url: "https://www.bundestag.de",
        consiglio: "There is a 20-minute audio guide in the dome, in twelve languages, that describes the surrounding buildings."
      },
      {
        nome: "Brandenburg Gate",
        testo: "The neoclassical monument of 1791 with the Quadriga on top, since 1989 the symbol of German reunification. On Pariser Platz are embassies and luxury hotels.",
        come: "On foot from the Brandenburger Tor S-Bahn station.",
        quando: "Early morning or evening, for photos without crowds.",
        tempo: "30 minutes",
        costo: "free entry",
        consiglio: "In the evening the gate is lit and the square empties."
      },
      {
        nome: "Holocaust Memorial",
        testo: "A field of over 2,700 concrete stelae by Peter Eisenman, in which you walk in a disorienting landscape. Below the memorial is an information centre with personal stories.",
        come: "On foot from the Brandenburg Gate.",
        quando: "The field is open day and night; the (free) information centre is open Tue-Sun 10am-6pm, last entry 45 minutes before closing, closed on Mondays.",
        tempo: "1 hour",
        costo: "free entry",
        url: "https://www.stiftung-denkmal.de",
        consiglio: "Enter with respect: it is a place of remembrance, not a playground."
      },
      {
        nome: "Berlin Wall Memorial (Bernauer Straße)",
        testo: "A preserved stretch of the Wall, with the original death strip, the watchtower and the documentation centre. A walkway above the strip shows what the division was like.",
        come: "S-Bahn S1, S2, S25 or S26 to Nordbahnhof, or U-Bahn U8 to Bernauer Straße.",
        quando: "Morning. The outdoor exhibition is open daily 8am-10pm; documentation centre and visitor centre Tue-Sun 10am-6pm.",
        tempo: "1.5-2 hours",
        costo: "free entry",
        url: "https://www.stiftung-berliner-mauer.de",
        consiglio: "Climb the platform of the documentation centre for the view along the route."
      },
      {
        nome: "Topography of Terror",
        testo: "The documentation centre on the site of the former Gestapo and SS headquarters. The exhibition explains how Nazi repression worked.",
        come: "On foot from Potsdamer Platz.",
        quando: "Daily 10am-8pm; outdoor areas until dusk, 8pm at the latest.",
        tempo: "1.5-2 hours",
        costo: "free entry",
        url: "https://www.topographie.de",
        consiglio: "Pairs well with a walk around Potsdamer Platz."
      },
      {
        nome: "Museum Island",
        testo: "A UNESCO site since 1999, with five museums including the Neues Museum (with the bust of Nefertiti), the Altes Museum and the Alte Nationalgalerie. The Pergamonmuseum has been fully closed since 2023: the north wing with the Pergamon Altar reopens on 4 June 2027, the south wing with the Ishtar Gate around 2037. Meanwhile, Pergamonmuseum. Das Panorama, opposite the island, shows the panorama of ancient Pergamon.",
        come: "U-Bahn to Museumsinsel or S-Bahn to Hackescher Markt or Friedrichstraße, then on foot; the Neues Museum entrance is through the James-Simon-Galerie. Single and combined tickets on the official website.",
        quando: "Weekday mornings. The Neues Museum is open Tue-Sun 10am-6pm, closed on Mondays; opening times of the other museums on the official website.",
        tempo: "half a day",
        url: "https://www.smb.museum",
        consiglio: "Nefertiti is in the north dome hall of the Neues Museum: tickets and prices on the official website."
      },
      {
        nome: "East Side Gallery",
        testo: "1,316 metres of the Wall still standing along the Spree in Friedrichshain, the longest surviving stretch, painted in spring 1990 by 118 artists from 21 countries: one of the largest open-air art galleries in the world.",
        come: "On Mühlenstraße, between Ostbahnhof station and the Oberbaumbrücke: walk it along the Spree.",
        quando: "Morning or late evening, with fewer people.",
        tempo: "1-1.5 hours",
        costo: "free entry",
        consiglio: "Do not write on the works: it is an offence and damages the murals."
      },
      {
        nome: "Mauerpark",
        testo: "A park on the old line of the Wall, known for its flea market, held every Sunday since 2004, and for Bearpit Karaoke on Sunday afternoons, weather permitting, from spring to autumn.",
        come: "On foot from the Berlin Wall Memorial on Bernauer Straße.",
        quando: "Sunday.",
        tempo: "2 hours",
        costo: "free entry",
        consiglio: "The karaoke in the amphitheatre is an experience for locals."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Reichstag and Brandenburg Gate",
          "Holocaust Memorial",
          "Lunch with currywurst",
          "Afternoon: Topography of Terror",
          "Evening: East Side Gallery"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Museum Island",
          "Wall Memorial (Bernauer Straße)",
          "Evening in Prenzlauer Berg"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Mauerpark on Sunday, Charlottenburg or Potsdam"
        ]
      }
    ],
    zone: [
      {
        nome: "Mitte",
        perChi: "Those short of time who want the sights on foot",
        testo: "Near Museum Island and Alexanderplatz; high prices and touristy areas."
      },
      {
        nome: "Prenzlauer Berg",
        perChi: "Those seeking a quiet area and cafes",
        testo: "Well-kept houses, restaurants and parks; good metro links."
      },
      {
        nome: "Kreuzberg and Friedrichshain",
        perChi: "Those who want nightlife and street art",
        testo: "Venues, street food and murals; more noise and lower prices."
      },
      {
        nome: "Charlottenburg",
        perChi: "Those who prefer a classic atmosphere",
        testo: "Elegant shops and avenues, near the Zoo and Charlottenburg Palace."
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
