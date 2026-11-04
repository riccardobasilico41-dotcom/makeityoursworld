import type { Destinazione } from '@/lib/types'

export const destinazioniPolonia: Destinazione[] = [
  {
    slug: 'cracovia',
    paeseSlug: 'polonia',
    ordine: 1,
    nome: 'Krakow',
    tipologia: ['città', 'storia', 'arte'],
    giorniConsigliati: '3-4 days, including the day trips to Auschwitz-Birkenau and the Wieliczka Salt Mine',
    visitataPersonalmente: true,
    introduzione:
      "Poland's capital until 1596 and the only major city in the country to come out of World War II almost intact: the historic center, a UNESCO site since 1978 (on the very first list ever compiled), preserves its medieval layout, with Rynek Główny, one of the largest market squares in Europe, Wawel Castle hill and, a little to the south, Kazimierz, the former Jewish quarter now among the liveliest in the city.",
    percheAndarci:
      "Because it packs eight centuries of Polish history into a walkable area (the seat of royal power at Wawel, the mercantile and religious heart of Rynek Główny, the Jewish memory of Kazimierz), and because it is the natural base for two of the most important visits in southern Poland: Auschwitz-Birkenau and the Wieliczka Salt Mine.",
    cosaVedere: [
      "Rynek Główny, the medieval market square, among the largest in Europe, with the Sukiennice (Cloth Hall) at its center, the old cloth hall now a covered souvenir market on the ground floor and a gallery of 19th-century Polish painting upstairs",
      "St. Mary's Basilica, Gothic, with Veit Stoss's (Wit Stwosz) great wooden altarpiece and its two unequal towers: from the taller one, every hour, the Hejnał mariacki sounds, a short trumpet melody played live toward the four cardinal points and cut off abruptly mid-note, in memory of the legendary guard struck by an arrow while sounding the alarm during a Tatar invasion",
      "Wawel Hill, with the Royal Castle (the State Rooms, the Royal Apartments, the Treasury and the Armory) and the Cathedral, the coronation and burial place of Polish kings, with the Sigismund Bell and the royal tombs in the crypts",
      "Kazimierz, the former autonomous town founded in 1335 and, from 1495, for centuries the center of Jewish life in Krakow: the Old Synagogue (the oldest in Poland), the Remuh Synagogue with the adjoining cemetery, and Plac Nowy, the square around which the city's bars are concentrated today",
      "The Barbican and the remains of the medieval walls, at the northern edge of the historic center",
      "The Podgórze district, across the Vistula, with Ghetto Heroes Square (Plac Bohaterów Getta), where rows of empty metal chairs recall the Jewish ghetto set up here by the Nazis in 1941, and the former Oskar Schindler Factory, now a museum",
    ],
    cosaFare: [
      "Listen to the Hejnał from the tower of St. Mary's, preferably on the hour, to hear the melody's sudden interruption",
      "Walk the Royal Road, the historic coronation route from the Barbican to Wawel via Rynek Główny",
      "Go down to the Rynek Underground Museum, beneath the square, with the archaeological remains of the medieval market uncovered during restoration",
      "A walking or bike tour of the former Podgórze ghetto and the Schindler Factory, as a historical counterpoint to Kazimierz",
      "An evening among the bars of Plac Nowy in Kazimierz, or a food and drink tour (see the dedicated experience page)",
    ],
    doveDormire:
      "The historic center (Stare Miasto) inside the Planty, the old tree-lined avenues that follow the line of the demolished walls, is the most convenient choice and has most of the tourist offering. Kazimierz is the more lived-in and cheaper alternative, ten to fifteen minutes' walk from Rynek Główny, with an evening life of its own.",
    doveMangiare:
      'Pierogi remain the signature dish, in dozens of sweet and savory variations; żurek, a soup made from fermented rye flour, often served inside a hollowed-out loaf; bigos, the cabbage and meat stew; zapiekanki, the Polish version of baked street food, born right in Kazimierz on Plac Nowy. The bary mleczne ("milk bars"), cheap canteens inherited from the communist era and still subsidized today, remain the simplest and cheapest way to eat everyday Polish food. To drink, Polish vodka, often flavored (żubrówka with bison grass among the best known).',
    comeArrivare:
      "John Paul II Airport (KRK, Balice), about 9 miles (15 km) from the center: a direct train (SKA1 line) in 17-20 minutes to the central station Kraków Główny, or regular buses (300 and the night bus 902). There is no convenient direct train connection from Italy: you generally arrive by plane. From Warsaw, a high-speed train in about 2h15-2h30.",
    comeSpostarsi: 'The historic center is all on foot. For the rest of the city, trams and buses of the KMK network, with cheap time-based tickets. You don\'t need a car.',
    periodoMigliore: 'April-May and September-October for the mild weather and fewer crowds; June-August is high season, crowded and hotter; November-March is cold but manageable, with the Christmas markets in December',
    costi: 'an inexpensive city: museums and single admissions a few euros, a normal dinner 10-15€ per person, public transport a few PLN a ride',
    erroriDaEvitare: [
      'Changing currency at the kantor with the flashy board near Rynek Główny without checking the rate carefully: some advertise favorable rates for currencies you aren\'t exchanging',
      'Following anyone who approaches you in the street proposing "a fantastic bar" around Rynek Główny, Floriańska Street or Kazimierz: it is the classic scheme that leads to wildly inflated bills',
      "Underestimating the line to climb the tower of St. Mary's Basilica or to enter Wawel Cathedral in high season: it's best to arrive early",
      'Scheduling Auschwitz-Birkenau like any other stop squeezed between two museums: it is a day that has to be set apart and approached with the right frame of mind',
    ],
    luoghi: [
      {
        nome: "Rynek Główny and the Cloth Hall",
        testo: "The medieval market square, one of the largest in Europe, with the Cloth Hall (Sukiennice) at the centre and the town hall tower. Around it stand St Mary's Basilica and cafes with outdoor tables.",
        come: "From the central station on foot, 10 minutes.",
        quando: "Early morning or evening, when the lights come on; crowded by day.",
        tempo: "1-2 hours",
        costo: "free entry",
        consiglio: "The underground museum beneath the square tells the story of the old city."
      },
      {
        nome: "St Mary's Basilica",
        testo: "A Gothic church with the large wooden altarpiece by Veit Stoss and two unequal towers. From the taller one, every hour, plays the Hejnał mariacki, the trumpet melody that breaks off suddenly.",
        come: "On the square; the interior ticket is bought at the side.",
        quando: "Morning; for the Hejnał stand on the square on the hour.",
        tempo: "45 minutes",
        url: "https://www.mariacki.com",
        consiglio: "The altarpiece is seen open only at the hours given on the site."
      },
      {
        nome: "Wawel Hill",
        testo: "The hill above the Vistula with the Royal Castle, the Cathedral where Polish kings were crowned and buried, the Sigismund Bell and the Dragon's Den. The ticket is split among the different routes.",
        come: "On foot from the centre (15 minutes). Tickets are bought in the courtyard or on the site.",
        quando: "Early morning; many routes sell out on busy days.",
        tempo: "3 hours",
        url: "https://wawel.krakow.pl",
        consiglio: "Book routes online: those without booking are few."
      },
      {
        nome: "Kazimierz",
        testo: "The former autonomous Jewish town founded in 1335, with the Old Synagogue (the oldest in Poland), the Remuh synagogue and the cemetery. Today it is also the district of cafes, galleries and venues.",
        come: "On foot or by tram from Stare Miasto (10 minutes).",
        quando: "Daytime for the synagogues; evening for the venues.",
        tempo: "3 hours",
        url: "https://www.jewishkrakow.net",
        consiglio: "Plac Nowy is known for zapiekanki, the long sandwiches."
      },
      {
        nome: "Schindler's Factory and Podgórze",
        testo: "The museum in Oskar Schindler's former factory tells of Nazi-occupied Kraków. Nearby is Ghetto Heroes Square, with rows of empty metal chairs recalling the ghetto.",
        come: "Tram 3/9/19/24 to Zabłocie or on foot from Kazimierz (15 minutes).",
        quando: "Morning; timed tickets.",
        tempo: "2-3 hours",
        url: "https://muzeumkrakow.pl",
        consiglio: "Book days ahead, especially in summer."
      },
      {
        nome: "Wieliczka Salt Mine",
        testo: "A thirteenth-century salt mine, a UNESCO site, 30 minutes from Kraków. The tourist route descends to 135 metres, with chapels carved in salt, underground lakes and the Chapel of St Kinga.",
        come: "Train or bus from Kraków (30 minutes), then on foot to the entrance.",
        quando: "All day; book online.",
        tempo: "3-4 hours",
        url: "https://www.wieliczka-saltmine.com",
        consiglio: "Bring a jacket: underground it is 14 degrees all year."
      },
      {
        nome: "Planty and Barbican",
        testo: "The ring of parks on the line of the demolished walls, surrounding the old town, with the Barbican and St Florian's Gate as the last surviving stretch of the fortifications.",
        come: "On foot, around the centre.",
        quando: "Morning or evening, with soft light.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "A free walk to get your bearings."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Rynek Główny and St Mary's",
          "Wawel",
          "Lunch in Kazimierz",
          "Evening: Planty"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Schindler's Factory and Podgórze",
          "Afternoon in Kazimierz"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Wieliczka Salt Mine or Auschwitz-Birkenau (see dedicated entry)"
        ]
      }
    ],
    zone: [
      {
        nome: "Stare Miasto",
        perChi: "Those who want to be near the sights",
        testo: "The historic heart, close to everything; night noise near the venues."
      },
      {
        nome: "Kazimierz",
        perChi: "Those seeking atmosphere and evening life",
        testo: "A district of cafes and venues, charming lodgings; livelier in the evening."
      },
      {
        nome: "Podgórze",
        perChi: "Those who want quiet and lower prices",
        testo: "Across the Vistula, 15 minutes on foot from the centre."
      }
    ],
    sapori: [
      {
        nome: "Pierogi",
        testo: "Dumplings filled with cheese and potato, meat, or cabbage and mushrooms."
      },
      {
        nome: "Zapiekanka",
        testo: "A half baguette gratinated with mushrooms and cheese, Plac Nowy street food."
      },
      {
        nome: "Obwarzanek krakowski",
        testo: "A braided bread ring, sold by street carts."
      },
      {
        nome: "Żurek",
        testo: "Sour rye soup with sausage and egg, served in a bread bowl."
      }
    ],
    attenzioni: [
      "Taxis: use Bolt or iTaxi and not those parked near the square.",
      "Horse carriages: high and unclear fares, agree beforehand.",
      "Exchange: use ATMs and refuse to pay in euros.",
      "Wawel and Schindler sell out: book ahead.",
      "Pickpockets in the crowded venues of Kazimierz and on trams."
    ],
    esperienzeSlugs: ['wieliczka-miniera-di-sale', 'kazimierz-food-vodka-tour'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: "The Sukiennice lit up in the evening on Krakow's Market Square, with the Gothic tower of St. Mary's Basilica on the left",
    immagine: '/images/polonia/cracovia.jpg',
  },
  {
    slug: 'auschwitz-birkenau',
    paeseSlug: 'polonia',
    ordine: 2,
    nome: 'Auschwitz-Birkenau',
    tipologia: ['memoria', 'storia'],
    giorniConsigliati: 'half a day, as a trip from Krakow',
    visitataPersonalmente: true,
    introduzione:
      "The former German Nazi concentration and extermination camp, in operation from 1940 to 1945 near the Polish town of Oświęcim, about 41 miles (66 km) west of Krakow. It consists of two separate sites linked by a shuttle service: Auschwitz I, the original camp and today home to the main museum, and Auschwitz II-Birkenau, the larger extermination camp built from 1941 about 2 miles (3 km) away. Since 1947 the site has been a Polish state museum, and since 1979 a UNESCO World Heritage Site.",
    percheAndarci:
      "Because it is the symbolic place of the Nazi extermination of Europe's Jews and of other persecuted groups, and because the visit, with the physical evidence preserved on site, helps you understand history the way no book can entirely do. It takes time, preparation and the right state of mind.",
    cosaVedere: [
      'The gate of Auschwitz I with the inscription "Arbeit macht frei"',
      "The museum blocks of Auschwitz I, with the permanent and national exhibitions (including the display cases of the victims' personal belongings: suitcases, glasses, shoes, hair)",
      'Block 11 and the execution wall',
      'The gas chamber and crematorium preserved at Auschwitz I',
      'The expanse of Auschwitz II-Birkenau, far larger, with the railway entrance of the "Judenrampe" where the selection took place, the barracks mostly of wood and the remains of the gas chambers blown up by the retreating Germans in 1945',
      'The international monument to the victims, among the ruins of the Birkenau crematoria',
    ],
    cosaFare: [],
    doveDormire: "It is visited as a day trip from Krakow: it is not designed as a stop with an overnight stay in Oświęcim.",
    doveMangiare: 'A small bar/self-service is in the Auschwitz I visitor center area; most visitors eat on returning to Krakow.',
    comeArrivare:
      "From Krakow: a direct bus from the central bus station (about 1h30, departures every 20-40 minutes, ticket around 34 PLN each way) to the Museum parking lot, or a regional train to Oświęcim station (about 1h40) and then a 20-30 minute walk or a short shuttle bus to the entrance. There are also organized tours with transfer, guide and ticket included, departing from Krakow (about 1h-1h30 of travel).",
    comeSpostarsi: 'Between Auschwitz I and Birkenau (about 2 miles / 3 km) a frequent free shuttle runs; on foot you walk a lot, on largely uncovered ground.',
    periodoMigliore:
      "all year, with different considerations: in summer it is hot and the routes (especially at Birkenau, almost without shade) become tiring; in winter the intense cold perhaps conveys the harshness of the place more than any other season. High season (June-August) is also when it's hardest to find a free entry slot.",
    costi:
      "Entry to the site is free. The cost, when there is one, is that of transport (bus/train) or the organized tour with a guide, which usually costs a few tens of euros per person.",
    erroriDaEvitare: [
      'Showing up without an online reservation: the entry cards, which are free, must be reserved in advance on the official site visit.auschwitz.org (up to three months ahead, and in any case at least a week ahead for slots without a guide): they are no longer sold on site',
      "Not checking the seasonal hours: in the middle hours of the day (roughly from 7:30 until early or late afternoon depending on the month) entry is allowed only with a Museum guide-educator or an organized tour; the independent visit without a guide is possible only in the remaining time slots, later in the afternoon depending on the season",
      'Underestimating the time: a full visit to both sites takes at least 3-4 hours, plus round-trip transport from Krakow: you need a whole day, with no other stops',
      "Dressing or behaving as you would at any tourist attraction: the Museum's rules require respectful clothing and behavior, and some areas forbid photographs",
      'Bringing bulky luggage: there is a size limit for backpacks allowed inside, with paid storage for larger ones',
    ],
    luoghi: [
      {
        nome: "Auschwitz I (Museum)",
        testo: "The first camp, with the 'Arbeit macht frei' sign at the entrance, the museum blocks with national exhibitions and the display cases of victims' personal belongings. It is the place of memory where you grasp the scale of the extermination.",
        come: "From Kraków bus station, bus or shuttle to Oświęcim (about 1.5 hours); visit with the pass, on your own or with a guide.",
        quando: "Early morning, when it is less crowded; booking is required.",
        tempo: "3.5 hours for the guided route",
        costo: "entry is free but requires a time-slot pass",
        url: "https://www.auschwitz.org",
        consiglio: "Large bags are not allowed: check the sizes on the website before leaving."
      },
      {
        nome: "Auschwitz II-Birkenau",
        testo: "The actual extermination camp, much larger, with the entrance railway, the selection ramp and the surviving wooden barracks. The international monument among the remains of the crematoria remembers the victims.",
        come: "Free shuttle from Auschwitz I (about 3 km).",
        quando: "After the visit to Auschwitz I.",
        tempo: "1.5-2 hours",
        url: "https://www.auschwitz.org",
        consiglio: "A place to visit in silence, without selfies."
      },
      {
        nome: "Booking and visiting rules",
        testo: "The Museum runs a system of time-slot passes; guided visits are available in Italian. At some hours the guided tour is mandatory.",
        come: "Tickets are bought only from the official website, weeks ahead in summer.",
        quando: "Avoid weekends and holidays.",
        url: "https://www.auschwitz.org",
        consiglio: "Beware of resellers: the official site is the only reliable one."
      }
    ],
    attenzioni: [
      "Children under 14 are not recommended: the exhibitions are very hard.",
      "Allow for the visit being emotionally heavy: plan the rest of the day calmly.",
      "On site you cannot film or photograph in certain rooms: follow the signs."
    ],
    esperienzeSlugs: ['auschwitz-birkenau-visita-guidata'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: 'The brick guardhouse of Auschwitz II-Birkenau with the central tower and the tracks leading to the entrance, in black and white',
    immagine: '/images/polonia/auschwitz-birkenau.jpg',
  },
]
