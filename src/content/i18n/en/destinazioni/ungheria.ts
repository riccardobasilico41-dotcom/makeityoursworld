import type { Destinazione } from '@/lib/types'

export const destinazioniUngheria: Destinazione[] = [
  {
    slug: 'budapest',
    paeseSlug: 'ungheria',
    ordine: 1,
    nome: 'Budapest',
    tipologia: ['città', 'terme', 'storia'],
    giorniConsigliati: '3-4 days, with one day devoted to the thermal baths',
    visitataPersonalmente: true,
    introduzione:
      "The Hungarian capital, born in 1873 from the merger of three separate cities: Buda and Óbuda on the hilly west bank of the Danube, Pest on the flat east bank. The historic center of Buda, a UNESCO site since 1987, preserves the royal castle and the medieval district around Matthias Church; Pest concentrates the Parliament, the great 19th-century boulevards and the Jewish Quarter with its ruin bars. Many thermal springs rise beneath the city, and Budapest is known as \"the city of spas\".",
    percheAndarci:
      "Because in a compact, walkable area you get the Danube with the Parliament and Buda Castle facing each other, a historic heritage layered on two different banks and an activity that no other European capital offers with the same quality: bathing in open-air thermal water, in a historic building, in the heart of the city.",
    cosaVedere: [
      'Buda Castle and the hill of the same name, with the Royal Palace (now home to museums) and the view over the Danube and Pest',
      "The Fisherman's Bastion (Halászbástya), the Neo-Romanesque terrace built in 1902 as a viewpoint (it was never a fortification), with seven turrets representing the seven founding Magyar tribes",
      "Matthias Church (Mátyás-templom), next to the Bastion, with its polychrome glazed tile roof and the history of royal coronations and conversion into a mosque during the Ottoman occupation",
      "The Hungarian Parliament (Országház), on the Pest bank, completed in 1904 and among the largest parliament buildings in the world, visitable with a guided tour that includes the Holy Crown of Saint Stephen",
      'The Chain Bridge (Széchenyi lánchíd), the first permanent bridge between Buda and Pest, opened in 1849, lit up in the evening',
      "The Great Synagogue on Dohány Street (Dohány utcai zsinagóga), among the largest in the world, in Moorish style, with the memorial garden and Imre Varga's Tree of Life sculpture dedicated to the victims of the Shoah",
      'The Jewish Quarter (Erzsébetváros, District VII), now the center of the ruin bars (romkocsma), venues born in dilapidated buildings and abandoned courtyards starting in the early 2000s',
      'Margaret Island (Margitsziget), a car-free park in the middle of the Danube, with a musical fountain and its own thermal baths',
    ],
    cosaFare: [
      'A soak at the Széchenyi or Gellért Baths (see the dedicated experience pages)',
      'A cruise or an evening walk on the Danube, to see the Parliament and the Castle lit up from the water',
      "Climbing the dome of Saint Stephen's Basilica for the view over the rooftops of Pest",
      'A tour of the ruin bars of the Jewish Quarter, such as Szimpla Kert',
      'Walking across the Chain Bridge between Buda and Pest at sunset',
    ],
    doveDormire:
      "The Pest side, between the Parliament, Saint Stephen's Basilica and the Jewish Quarter, is the most convenient and liveliest area in the evening, a few minutes' walk from the main points of interest. The Buda side is quieter and more scenic, but less central for evening getting around.",
    doveMangiare:
      "Goulash (gulyás), here more soup than stew, in the original Hungarian version; lángos, a disc of fried dough with sour cream and cheese, the most widespread street food; paprikás csirke (chicken paprikash); desserts like rétes (strudel) and Dobos torte. The Central Market Hall (Nagycsarnok), opened in 1897, is the best place to taste local products, paprika included, at low prices compared to the tourist restaurants in the center.",
    comeArrivare:
      "Ferenc Liszt Airport (BUD), south-east of the city: a shuttle bus goes directly to the center, or a city bus plus metro. There is no convenient direct rail connection from Italy: you generally arrive by plane. From Vienna there are direct trains.",
    comeSpostarsi: 'BKK network of metro, trams and buses, extensive and cheap. The center of Pest and Buda Hill are also easy to cover on foot. No car needed.',
    periodoMigliore: "April-May and September-October for mild weather and fewer crowds; June-August is high season, hot and crowded; November-March is cold but the baths become a special experience, with Christmas markets in December",
    costi: "a low-to-mid-priced city by Western European standards: cheap public transport, bath admission the most expensive item of a typical day",
    erroriDaEvitare: [
      'Following people who approach you on the street suggesting "a fantastic place" in the Jewish Quarter or around the tourist squares: it is the classic scheme that leads to wildly inflated bills',
      'Mixing up the zeros of the forint: a bill of "8,000" is not 8 euros, and it is easy to get it wrong in the first few days',
      "Underestimating the baths as a relaxing one-hour break: between entry, changing room and locker queues, it is worth setting aside at least half a day",
      'Planning the weekend without booking the Parliament tour in advance, which has limited entries and often sells out days ahead in high season',
    ],
    luoghi: [
      {
        nome: "Buda Castle and Royal Palace",
        testo: "Buda Hill above the Danube, with the Royal Palace, today home to museums (Hungarian National Gallery, Budapest History Museum, National Széchényi Library). You go up by the Sikló funicular or on foot.",
        come: "Sikló funicular from Clark Ádám tér, next to the Chain Bridge, or on foot.",
        quando: "Morning, to avoid the groups.",
        tempo: "2-3 hours",
        consiglio: "From the south side of the hill you get the best view of the Danube."
      },
      {
        nome: "Fisherman's Bastion and Matthias Church",
        testo: "The Bastion is a neo-Romanesque terrace built between 1895 and 1902 (never a real bastion), with seven turrets for the seven Magyar tribes that settled in the Carpathian Basin. Next to it, Matthias Church has a roof of coloured tiles.",
        come: "On foot from the Castle.",
        quando: "Dawn or evening, for photos without crowds; lots of people in the middle of the day.",
        tempo: "1-1.5 hours",
        consiglio: "Part of the upper terraces is ticketed: prices and hours on site."
      },
      {
        nome: "Hungarian Parliament",
        testo: "Completed in 1904, it is a large neo-Gothic building on the Danube. It can only be visited on a guided tour, which passes through the central hall where the Holy Crown has been displayed since 2000.",
        come: "Metro M2 or tram 2 to Kossuth Lajos tér. Tickets are booked online for a time.",
        quando: "Morning; there is a security check at the entrance.",
        tempo: "1 hour",
        url: "https://www.parlament.hu",
        consiglio: "Book days ahead, especially in high season."
      },
      {
        nome: "Chain Bridge and riverfront",
        testo: "The first permanent bridge between Buda and Pest, opened in 1849, lit up at night. On the Pest bank are the Shoes on the Danube, a memorial to Jewish victims of 1944-45.",
        come: "On foot from the centre, along the bank.",
        quando: "Evening, when the bridge and Parliament are lit.",
        tempo: "1 hour",
        costo: "free entry",
        consiglio: "Walk along the Danube from Pest at sunset."
      },
      {
        nome: "Széchenyi Baths",
        testo: "One of the best-known spa complexes in Europe, opened in 1913, with 18 pools (15 indoor and 3 outdoor); the outdoor ones are between 27 and 38 degrees. The building is a yellow neo-baroque one in a yellow neo-baroque building in Városliget. Locals and tourists mix.",
        come: "Metro M1 (yellow line) to Széchenyi fürdő station, in the middle of Városliget park.",
        quando: "Weekday morning; summer evenings have parties.",
        tempo: "half a day",
        url: "https://www.szechenyibath.hu",
        consiglio: "Bring flip-flops and a towel. Hours and prices change: check them on the official site, where you can also buy tickets."
      },
      {
        nome: "Great Market Hall",
        testo: "A covered market opened in 1897, at the end of Váci utca, with paprika, salamis and strudel; upstairs there are food stalls and souvenirs. Closed on Sunday.",
        come: "Metro M4 or tram 2, 47 and 49 to Fővám tér, or on foot from Váci utca.",
        quando: "Weekday morning; closed on Sunday.",
        tempo: "1-1.5 hours",
        consiglio: "Pay in forints, the exchange counters here are expensive."
      },
      {
        nome: "Dohány Street Synagogue",
        testo: "The largest synagogue in Europe, in Moorish Revival style, with almost 3,000 seats. In the courtyard is the Raoul Wallenberg memorial park with Imre Varga's Tree of Life, a metal willow with the victims' names on its leaves.",
        come: "Metro M2 or tram 47 and 49 to Astoria, then a short walk.",
        quando: "Weekday morning; closing days on the official site.",
        tempo: "1.5 hours",
        consiglio: "The complex also includes the Hungarian Jewish Museum."
      },
      {
        nome: "Jewish quarter and ruin bars",
        testo: "The VII district is the heart of the evening scene, with bars born in abandoned buildings, like Szimpla Kert. By day it is a quiet district with cafes.",
        come: "On foot from the centre.",
        quando: "Evening.",
        tempo: "2-3 hours",
        consiglio: "By day Szimpla Kert is quieter and easier to look around."
      }
    ],
    programmi: [
      {
        titolo: "1 day",
        tappe: [
          "Morning: Buda Castle",
          "Fisherman's Bastion",
          "Lunch with lángos",
          "Afternoon: Chain Bridge",
          "Evening: lit-up Parliament"
        ]
      },
      {
        titolo: "2 days",
        tappe: [
          "Day 1 as above",
          "Day 2: Széchenyi in the morning",
          "Great Market Hall",
          "Synagogue and Jewish quarter, ruin bars"
        ]
      },
      {
        titolo: "3 days",
        tappe: [
          "Days 1-2 as above",
          "Day 3: Margaret Island, Gellért Hill, House of Terror"
        ]
      }
    ],
    zone: [
      {
        nome: "Pest (V and VI district)",
        perChi: "Those who want to be a step from everything",
        testo: "Near Váci utca and the Basilica; higher prices and evening noise."
      },
      {
        nome: "Jewish quarter (VII)",
        perChi: "Those seeking nightlife",
        testo: "Full of bars, noisy at weekends."
      },
      {
        nome: "Buda (I and II district)",
        perChi: "Those who prefer quiet",
        testo: "Near the Castle, quiet streets; fewer cheap restaurants."
      }
    ],
    sapori: [
      {
        nome: "Gulyás",
        testo: "Beef and paprika soup, in traditional restaurants."
      },
      {
        nome: "Lángos",
        testo: "Fried flatbread with sour cream and cheese, typical of the Market."
      },
      {
        nome: "Kürtőskalács",
        testo: "Spiral cake cooked over embers, with sugar and cinnamon."
      },
      {
        nome: "Dobos torta",
        testo: "Layer cake with chocolate cream and caramel."
      }
    ],
    attenzioni: [
      "Taxis: use well-known companies; be wary of drivers who recommend a bar or club, some work with venues that inflate the bill.",
      "Bars and restaurants that inflate the bill, sometimes walking tourists to a cash machine: always ask for the menu with prices before ordering.",
      "Exchange: use bank ATMs and refuse to be charged in euros.",
      "Public transport: tickets to be validated or bought with BudapestGO, the official BKK app; inspectors fine tourists.",
      "Service is sometimes already included: check the bill."
    ],
    esperienzeSlugs: ['terme-szechenyi', 'terme-gellert', 'crociera-danubio', 'ruin-bar-tour'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: "The white conical towers of the Fisherman's Bastion on Buda Hill, under a blue sky",
    immagine: '/images/ungheria/budapest.jpg',
  },
]
