import type { Destinazione } from '@/lib/types'

export const destinazioniRepubblicaCeca: Destinazione[] = [
  {
    slug: 'praga',
    paeseSlug: 'repubblica-ceca',
    ordine: 1,
    nome: 'Prague',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3-4 days for the Old Town, the Castle and Vyšehrad',
    visitataPersonalmente: true,
    introduzione:
      "The \"city of a hundred spires,\" the Czech capital on both banks of the Vltava, with one of the best-preserved medieval and Baroque historic centers in Europe. It came through the bombings of World War II almost unscathed, and today it's a compact set of five historic districts, all walkable in a few days: Staré Město (the Old Town), Malá Strana (the Lesser Town), Hradčany (the Castle hill), Josefov (the Jewish quarter) and the nineteenth-century Nové Město (the New Town).",
    percheAndarci:
      "In a compact area it packs centuries of almost intact Gothic, Renaissance and Baroque architecture, a castle that is among the largest castle complexes in the world and a Jewish quarter with one of the most important collections of historic synagogues in Europe. And prices, beer included, remain low compared with Western Europe.",
    cosaVedere: [
      "Old Town Square (Staroměstské náměstí), with the Astronomical Clock (Orloj) tower on the town hall (from 1410, the third-oldest astronomical clock in the world and the oldest still working), the Gothic Church of Our Lady before Týn and the Baroque Church of St. Nicholas",
      "Charles Bridge (Karlův most), Gothic, 516 meters long, built starting in 1357 on the commission of Charles IV: sixteen arches and more than seventy Baroque statues (all copies: the originals are kept under cover), including the oldest and most venerated, that of St. John of Nepomuk from 1683",
      "Prague Castle hill (Pražský hrad), among the largest enclosed castle complexes in the world, with the Gothic St. Vitus Cathedral (Katedrála svatého Víta) inside it, the Old Royal Palace, Golden Lane (Zlatá ulička) and St. George's Basilica",
      "Malá Strana, the Baroque district at the foot of the Castle, with the Church of St. Nicholas (not to be confused with the one of the same name in Old Town Square), the John Lennon Wall and Kampa Island on the Vltava",
      "Josefov, the former Jewish quarter in the heart of Staré Město, with six historic sites including synagogues and the Old Jewish Cemetery, run by the Jewish Museum in Prague",
      "Vyšehrad, the hilltop fortress south of the center, less visited than the Castle but with over a thousand years of history (according to the founding legend of Prague, it's where Princess Libuše prophesied its birth) and some of the widest views over the city and the Vltava",
    ],
    cosaFare: [
      "Stop in Old Town Square on the hour, between 9 and 23, for the procession of the Orloj's mechanical Apostles and the skeleton of Death pulling the rope",
      "Cross Charles Bridge early, before 8, to avoid the bulk of the crowd that fills it during the day",
      "Climb the Lesser Town Bridge Tower (Malostranská mostecká věž), at the end of Charles Bridge on the Malá Strana side, for a view from above that is less crowded than the one from the Old Town tower",
      "Walk along the Vyšehrad walls at sunset, for a view of the city that is much quieter than the one from the Castle",
      "An evening in a traditional hospoda (pub) outside the most touristy center, to drink Czech beer at the city's real prices, not the inflated ones around the main square",
    ],
    doveDormire:
      "Staré Město (the Old Town) is the most convenient choice and concentrates almost all the tourist offerings, but it's also the most expensive area and the most crowded in the evening. Malá Strana, at the foot of the Castle, is quieter and just as central. Vinohrady and Žižkov, just outside the historic core but well connected by tram, are the more lived-in and cheaper alternatives.",
    doveMangiare:
      "The signature dish is svíčková (beef roast in a cream and vegetable sauce, served with knedlíky, sliced bread dumplings), along with goulash and trdelník, the street sweet rolled and cooked over embers, which in recent years has become a symbol (more touristy than traditional). Hospodas, the traditional pubs, remain the truest and cheapest way to eat Czech dishes with a draft beer. As for drinks, there's beer: the country has the highest per capita consumption in the world, and outside the tourist areas beer often costs less than bottled water.",
    comeArrivare:
      "Václav Havel Airport (PRG), about 17 km from the center: there's no direct metro connection, but a bus (line 119 or 191) takes you in 15-20 minutes to the nearest metro station (Nádraží Veleslavín, line A), and from there the center is a few minutes away. From Italy there's no convenient direct train: you usually arrive by plane. From Vienna, a direct train in about 4 hours.",
    comeSpostarsi: "The historic center is all on foot. For the rest of the city there's the PID metro, tram and bus network, with cheap timed tickets to validate on board. You don't need a car.",
    periodoMigliore: "April-May and September-October for mild weather and fewer crowds; June-August is high season, crowded and hotter; November-March is cold but easy to get around, with the Christmas markets in December",
    costi: "still a cheap city outside the most touristy center: a meal in a neighborhood hospoda a few euros, dinner in the historic center €15-20 per person, public transport a few CZK per ride",
    erroriDaEvitare: [
      "Sitting down at a restaurant around Old Town Square or on Karlova street without checking the menu and prices first: it's the area with the most reports of inflated bills, unrequested \"welcome drinks\" and items added to the check",
      "Taking tram 22 toward the Castle with valuables in open pockets or backpacks: it's the line most reported for pickpocketing, especially in high season",
      "Listening to someone on the street who presents themselves as a police officer and asks for your documents or to pay a fine on the spot: a real officer doesn't do that, and if in doubt, ask to go together to a police station",
      "Exchanging currency or paying in euros counting on a favorable \"automatic\" rate: the Czech Republic is not in the eurozone, and the \"converted\" prices displayed in tourist venues are almost always unfavorable",
      "Underestimating the line for the Astronomical Clock or for St. Vitus Cathedral in high season: it's best to arrive early or toward evening",
    ],
    luoghi: [
      {
        nome: "Old Town Square and Orloj",
        testo: "The central square with the Astronomical Clock tower (1410), the third-oldest astronomical clock in the world and the oldest still working. On the hour the skeleton of Death rings the bell and the twelve Apostles pass by the little windows.",
        come: "On foot, metro A to Staroměstská. The Orloj can be seen from the square, free.",
        quando: "On the hour, but arrive 10 minutes early; the Town Hall tower has a paid viewing deck.",
        tempo: "1 hour",
        costo: "square and show free",
        url: "https://www.prague.eu",
        consiglio: "Climb the Town Hall tower for the view of the square."
      },
      {
        nome: "Charles Bridge",
        testo: "The 516 metre Gothic bridge begun in 1357 for Charles IV, with over 30 baroque statues (copies). It joins the Old Town to Malá Strana and the Castle.",
        come: "On foot; always open.",
        quando: "Dawn, when it is empty, or after 21:00.",
        tempo: "30-45 minutes",
        costo: "free entry",
        consiglio: "Pickpockets are active at peak hours; keep your bag in front."
      },
      {
        nome: "Prague Castle and St Vitus Cathedral",
        testo: "According to Guinness World Records the largest ancient castle in the world, almost 70,000 square metres, with the Gothic St Vitus Cathedral, the Old Royal Palace, St George's Basilica and Golden Lane. The courtyard and gardens are free to enter.",
        come: "Tram 22 to Pražský hrad, then on foot. Tickets at the entrance or online.",
        quando: "Early morning, at opening; changing of the guard times on the official site.",
        tempo: "3-4 hours",
        url: "https://www.hrad.cz",
        consiglio: "There are several ticket types: compare what each includes on the official site."
      },
      {
        nome: "Malá Strana and the John Lennon Wall",
        testo: "The baroque district at the foot of the Castle, with St Nicholas Church and Kampa island. The Lennon Wall, covered with graffiti since the 1980s, is on the small square Velkopřevorské náměstí, near Kampa island.",
        come: "On foot from Charles Bridge (5 minutes).",
        quando: "Morning or late afternoon.",
        tempo: "2 hours",
        costo: "free entry",
        consiglio: "Leave the wall as it is: no more drawings are needed."
      },
      {
        nome: "Josefov and the Jewish Museum",
        testo: "The former Jewish quarter in the heart of Staré Město, with five synagogues and the Old Jewish Cemetery run by the Jewish Museum, including the Spanish and Pinkas synagogues. One ticket covers all the museum's sites; the Old-New Synagogue, still used for worship, needs a separate or combined ticket.",
        come: "Metro A to Staroměstská, then 5 minutes.",
        quando: "Open every day except Saturdays and Jewish holidays; early morning, before the groups.",
        tempo: "2-3 hours",
        costo: "CZK 600 adults for all Jewish Museum sites (2026)",
        url: "https://www.jewishmuseum.cz",
        consiglio: "The Old-New Synagogue has a separate ticket."
      },
      {
        nome: "Vyšehrad",
        testo: "The hilltop fortress to the south, less visited than the Castle, with the Basilica of Saints Peter and Paul and the cemetery of great Czechs (Dvořák, Smetana). The view over the Vltava is excellent.",
        come: "Metro C to Vyšehrad, then 10 minutes on foot.",
        quando: "Afternoon.",
        tempo: "1.5 hours",
        costo: "park free",
        url: "https://www.praha-vysehrad.cz",
        consiglio: "Better than the Castle for those who want to walk in silence."
      },
      {
        nome: "Petřín Hill",
        testo: "The green hill with the 1891 lookout tower, often described as a small Eiffel Tower, the rose garden and a mirror maze. The funicular, opened in 1891, climbs from Újezd in Malá Strana: stopped in September 2024 for landslide risk, it reopened on 22 September 2026 with new cars.",
        come: "Funicular from Újezd: 30- and 90-minute tickets are not valid, you need a funicular ticket or a pass of 24 hours or more.",
        quando: "Clear day.",
        tempo: "2 hours",
        consiglio: "Ride up by funicular and walk down through the parks."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Prague Castle",
          "Lunch in Malá Strana",
          "Charles Bridge",
          "Old Town Square and Orloj",
          "Dinner with Czech beer"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Josefov",
          "Petřín or Vyšehrad",
          "Evening: Vinohrady"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: trip to Kutná Hora or Karlštejn"
        ]
      }
    ],
    zone: [
      {
        nome: "Staré Město",
        perChi: "Those who want to be near the sights",
        testo: "The tourist heart, very crowded and pricey; noise at night."
      },
      {
        nome: "Malá Strana",
        perChi: "Those seeking a picturesque district",
        testo: "Near the Castle, quiet streets; pricier restaurants."
      },
      {
        nome: "Vinohrady",
        perChi: "Those who want a local atmosphere and better prices",
        testo: "A residential district with cafes and parks, tram connections."
      },
      {
        nome: "Žižkov",
        perChi: "Those seeking pubs and nightlife at low prices",
        testo: "A lively and less touristy district."
      }
    ],
    sapori: [
      {
        nome: "Svíčková",
        testo: "Beef sirloin in vegetable and cream sauce with bread dumplings."
      },
      {
        nome: "Goulash with dumplings",
        testo: "Beef stew with dumplings, in traditional pubs."
      },
      {
        nome: "Pivo",
        testo: "Czech beer: Pilsner Urquell, Budvar, Kozel, often served at a low price."
      },
      {
        nome: "Smažený sýr",
        testo: "Breaded fried cheese, with chips and tartar sauce."
      }
    ],
    attenzioni: [
      "Currency exchange: avoid the '0% commission' booths in the centre; withdraw from ATMs and refuse to pay in euros.",
      "Taxis: use a known company or an app rather than hailing one in the street, check the rates shown on the side and avoid unmarked cars.",
      "Pickpockets on trams to the Castle, on transport from the airport and in crowded tourist areas. Be wary of fake plainclothes police asking to see your money and passport.",
      "Trdelník is not a Czech sweet but a tourist product; local bakeries offer better.",
      "Transit tickets must be validated before boarding (not those bought from machines on board): the on-the-spot fine is 1,000 CZK."
    ],
    esperienzeSlugs: ['praga-castello-biglietto', 'praga-josefov-jewish-town', 'praga-degustazione-birra'],
    tripSlugs: ['praga-weekend'],
    imageAlt: "Prague Castle and St. Vitus Cathedral lit up at blue hour, with Charles Bridge and the Vltava in the foreground",
    immagine: '/images/repubblica-ceca/praga.jpg',
  },
]
