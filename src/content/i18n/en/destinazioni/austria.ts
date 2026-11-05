import type { Destinazione } from '@/lib/types'

export const destinazioniAustria: Destinazione[] = [
  {
    slug: 'vienna',
    paeseSlug: 'austria',
    ordine: 1,
    nome: 'Vienna',
    tipologia: ['città', 'arte', 'musica'],
    giorniConsigliati: '3-4 days for the Innere Stadt, Schönbrunn, the Belvedere and the Prater',
    visitataPersonalmente: true,
    introduzione:
      "The Austrian capital, for centuries the heart of the Habsburg Empire and today one of the cities with the best quality of life in the world according to several international rankings. The historic center is compact: the Innere Stadt, a UNESCO World Heritage site, surrounded by the Ring, the boulevard that took the place of the old walls in the 19th century. Schönbrunn Palace, the Belvedere palace and the large Prater park lie just outside the most central core.",
    percheAndarci:
      "Because it concentrates in an area you can cross on foot (or in a few minutes by U-Bahn) centuries of imperial history, one of the most important art collections in Central Europe with Klimt's \"The Kiss\" at the Belvedere, and a coffee culture recognized by UNESCO as intangible heritage. And you pay in euros, without the currency exchange complications of Prague or Krakow.",
    cosaVedere: [
      "St. Stephen's Cathedral (Stephansdom), Gothic, the symbol of the city, with its roof of 230,000 colored tiles and the south tower (Steffl) 136 meters tall, which you can climb by 343 steps to a panoramic viewpoint; beneath the cathedral, the catacombs with the internal organs of the Habsburg emperors",
      "The Hofburg, the Habsburgs' winter palace for over six centuries, today home to the Sisi Museum, the Imperial Apartments and the Spanish Riding School with its Lipizzaner horses",
      "Schönbrunn Palace, the summer residence of the imperial family, with over 1,400 rooms (a few dozen open to visitors), the Baroque gardens and the Gloriette on the hill",
      "The Belvedere Palace, with the Upper Belvedere housing \"The Kiss\" and other works by Gustav Klimt, as well as one of the most important collections of Austrian art in the world",
      "The Naschmarkt, the city's most famous food market, over a mile of stalls with fruit, spices and international cuisines, with a flea market on Saturdays",
      "The Prater, the large public park since 1766, with the Wiener Riesenrad, the Ferris wheel built in 1897 for Emperor Franz Joseph's jubilee and for decades the tallest in the world",
    ],
    cosaFare: [
      "Sit down at least once in a historic café (Café Central, Café Sacher or Landtmann among the best known) to understand Kaffeehauskultur first-hand, the Viennese coffee culture recognized by UNESCO as intangible cultural heritage since 2011",
      "Climb the south tower of St. Stephen's Cathedral for a view from above over the rooftops of the historic center",
      "Attend a performance at the State Opera with a standing ticket (Stehplatz), starting from about €13, one of the cheapest ways in the world to see a top-level opera",
      "A ride on the Wiener Riesenrad at the Prater, especially at sunset",
      "A walk along the Ring, the boulevard that circles the Innere Stadt on the line of the old walls, among 19th-century historicist buildings",
    ],
    doveDormire:
      "The Innere Stadt (the 1st district, inside the Ring) is the most convenient choice and concentrates most of the attractions, but it's also the area with the highest prices. The neighboring districts (2nd, 4th, 7th) are cheaper alternatives and well connected by U-Bahn, often a few minutes' walk from the Ring.",
    doveMangiare:
      "Wiener Schnitzel, the breaded veal cutlet, is the signature dish; Tafelspitz, the Viennese boiled beef, is just as traditional. Among desserts, Sachertorte (the famous chocolate cake with apricot jam, born right in Vienna) and Apfelstrudel. The Naschmarkt is the best place for an informal meal among different cuisines; the historic cafés, besides coffee, often serve pastries and small meals throughout the day.",
    comeArrivare:
      "Vienna-Schwechat Airport (VIE), about 18 km from the center: the City Airport Train (CAT) reaches Wien Mitte in 16 minutes (about €14.90 each way), or the regional trains (S7, ÖBB) cover the same route in slightly more time for a lower price. By train from Italy, direct connections from several Northern cities; from Prague, about 4 hours by direct train.",
    comeSpostarsi: "The historic center is largely on foot. For the rest of the city, U-Bahn, tram and bus of Wiener Linien, with single tickets or day/multi-day passes. You don't need a car.",
    periodoMigliore: 'April-May and September-October for the mild weather and smaller crowds; June-August is high season, crowded especially at Schönbrunn and Stephansplatz; November-March is cold but manageable, with the Christmas markets in December',
    costi: 'around the European average: main museums €20-25, normal meal €15-25 per person, Opera standing tickets from €13, cheap public transport',
    erroriDaEvitare: [
      'Showing up at Schönbrunn or the Belvedere in high season without a ticket booked online: lines on site can exceed an hour',
      'Underestimating Kaffeehauskultur as a mere coffee break: in the historic cafés the table is "rented" for as long as you like: it is a precise cultural custom, to be taken slowly',
      'Planning shopping or errands on a Sunday: almost all shops, supermarkets included, are closed by law, with the sole exceptions of stations, the airport and duty pharmacies',
      'Letting your guard down on the U3 subway line at rush hour: it is the most reported line for pickpocketing in the city',
      "Underestimating the size of Schönbrunn: just touring the palace and the main gardens takes a good half day",
    ],
    luoghi: [
      {
        nome: "Schönbrunn Palace",
        testo: "The Habsburgs' summer residence, a UNESCO site, with 1,441 rooms and baroque gardens. You visit the apartments of Franz Joseph and Sisi, with different tours.",
        come: "Metro U4 to Schönbrunn (20 minutes from the centre). Timed tickets online.",
        quando: "Palace daily 8:30am-5pm, gardens from 6:30am; early morning to beat the groups.",
        tempo: "3-4 hours",
        costo: "Palace Ticket €42 adults (2026), online only on the official site; gardens free",
        url: "https://www.schoenbrunn.at",
        consiglio: "Tours differ in length and rooms included: choose on the official website, the only online sales channel, not from resellers."
      },
      {
        nome: "Hofburg and Sisi Museum",
        testo: "The imperial palace in the centre, with imperial apartments, the silver collection and the museum dedicated to Sisi. The complex also houses the Spanish Riding School.",
        come: "Metro U3 to Herrengasse, then on foot (5 minutes).",
        quando: "Daily 10am-4:30pm; the redesigned Sisi Museum reopens on 19 November 2026. Weekday mornings.",
        tempo: "2 hours",
        costo: "Sisi Museum €15, with guided tour of the apartments €33 (2026)",
        url: "https://www.sisimuseum-hofburg.at",
        consiglio: "Combine with a walk in the Volksgarten next door."
      },
      {
        nome: "St Stephen's Cathedral (Stephansdom)",
        testo: "The symbol of Vienna, in Gothic style, with a roof of 230,000 coloured tiles and the 136 metre south tower, climbed on foot. On the unfinished north tower a platform holds the Pummerin bell; below lie the catacombs with the remains of over 11,000 people.",
        come: "Metro U1/U3 to Stephansplatz. Towers and catacombs are paid: prices on the official website.",
        quando: "Tourist visits Mon-Sat 9-11:30am and 1-4:30pm, Sundays and holidays 1-4:30pm, services permitting. Early morning or evening for the light on the roof.",
        tempo: "1 hour",
        url: "https://www.stephanskirche.at",
        consiglio: "The catacombs can only be seen on a guided tour."
      },
      {
        nome: "Belvedere",
        testo: "Two baroque palaces of Prince Eugene of Savoy, with a French formal garden between them; the Upper Belvedere holds an important Klimt collection, with 'The Kiss', and works by Schiele and Kokoschka. The park is beautiful on its own.",
        come: "Tram D to Schloss Belvedere. Tickets for the Upper Belvedere.",
        quando: "Daily 9am-6pm; early morning to see 'The Kiss' without crowds.",
        tempo: "2 hours",
        costo: "Upper Belvedere €23 adults (2026, day price)",
        url: "https://www.belvedere.at",
        consiglio: "Entry is free up to 19; in summer (mid-July to August) it opens until 7pm."
      },
      {
        nome: "Kunsthistorisches Museum",
        testo: "The Habsburgs' great art museum, with Bruegel, Raphael, Titian and Vermeer. The building itself, with its dome and staircase, is a work of art.",
        come: "On the Ring, opposite the Naturhistorisches Museum, near the Volkstheater and Museumsquartier metro stops.",
        quando: "Daily 10am-6pm, Thursday until 9pm; weekday mornings.",
        tempo: "2-3 hours",
        costo: "€22 online, €24 on site (2026); since 8 September 2026 entry by time slot only",
        url: "https://www.khm.at",
        consiglio: "The Bruegel room is the most famous, but on its own is worth half the museum."
      },
      {
        nome: "State Opera (Staatsoper)",
        testo: "One of the most important opera houses in the world. You can visit with a guided tour or attend a performance with very cheap standing tickets.",
        come: "Metro U1/U2/U4 to Karlsplatz. Standing tickets are sold only on the day of the performance, from 10am.",
        quando: "Evening; buy standing places that same morning, as soon as sales open.",
        tempo: "3 hours",
        url: "https://www.wiener-staatsoper.at",
        consiglio: "The standing-room areas have a limited view but excellent acoustics."
      },
      {
        nome: "Prater and Riesenrad",
        testo: "The big park with the 1897 Ferris wheel, famous from the film 'The Third Man'. There are historic rides and the long tree-lined avenue.",
        come: "Metro U1 to Praterstern.",
        quando: "Afternoon or evening, for the view of the city.",
        tempo: "2 hours",
        costo: "park entry free",
        url: "https://www.wienerriesenrad.com",
        consiglio: "Ride the wheel at sunset."
      },
      {
        nome: "Naschmarkt",
        testo: "Vienna's most famous market: stalls of fruit, spices, olives and restaurants. On Saturdays there is also a flea market.",
        come: "Metro U4 to Kettenbrückengasse.",
        quando: "Monday to Saturday; closed on Sunday.",
        tempo: "1-2 hours",
        consiglio: "Saturday morning is the liveliest time."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Stephansdom",
          "Lunch with Schnitzel",
          "Hofburg and Sisi Museum",
          "Evening: Naschmarkt or cafe"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Schönbrunn in the morning",
          "Belvedere and Klimt",
          "Evening: opera standing"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Kunsthistorisches Museum, Prater and Riesenrad"
        ]
      }
    ],
    zone: [
      {
        nome: "Innere Stadt (centre)",
        perChi: "Those who want everything on foot",
        testo: "Near Stephansdom and Hofburg; high prices, evening noise."
      },
      {
        nome: "Neubau and Mariahilf",
        perChi: "Those seeking cultural life and cafes",
        testo: "Creative districts near the MuseumsQuartier, good links."
      },
      {
        nome: "Leopoldstadt",
        perChi: "Those who want to save and the Prater",
        testo: "A multicultural district near the Prater, with a direct metro."
      }
    ],
    sapori: [
      {
        nome: "Wiener Schnitzel",
        testo: "Breaded veal cutlet, the Viennese speciality; found everywhere."
      },
      {
        nome: "Sachertorte",
        testo: "Chocolate cake with apricot jam, from Café Sacher and Demel."
      },
      {
        nome: "Apfelstrudel",
        testo: "Apple strudel, served hot with vanilla sauce or cream."
      },
      {
        nome: "Tafelspitz",
        testo: "Boiled beef with horseradish and apple, a traditional Habsburg dish."
      }
    ],
    attenzioni: [
      "Concerts: buy tickets at the box office or on official websites, not from costumed sellers in the street.",
      "Fiaker (carriages) are expensive: ask the price first.",
      "Transit tickets: validate paper ones before boarding, or risk an on-the-spot fine.",
      "On Sundays shops are closed, supermarkets included.",
      "Pickpockets in crowded centres, on transport and at main stations; take more care in parks after dark."
    ],
    esperienzeSlugs: ['vienna-schonbrunn-biglietto', 'vienna-opera-stehplatz', 'vienna-giro-caffe-storici'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: "The glazed zigzag-patterned colored tile roof of St. Stephen's Cathedral in Vienna, among the Gothic spires",
    immagine: '/images/austria/vienna.jpg',
  },
]
