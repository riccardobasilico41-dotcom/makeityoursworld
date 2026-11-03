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
      "The Hungarian capital, born in 1873 from the merger of three separate cities: Buda and Óbuda on the hilly west bank of the Danube, Pest on the flat east bank. The historic center of Buda, a UNESCO site since 1987, preserves the royal castle and the medieval district around Matthias Church; Pest concentrates the Parliament, the great 19th-century boulevards and the Jewish Quarter with its ruin bars. Beneath the city there are over a hundred thermal springs, and Budapest is officially known as \"the city of spas\".",
    percheAndarci:
      "Because in a compact, walkable area you get the Danube with the Parliament and Buda Castle facing each other, a historic heritage layered on two different banks and an activity that no other European capital offers with the same quality: bathing in open-air thermal water, in a historic building, in the heart of the city.",
    cosaVedere: [
      'Buda Castle and the hill of the same name, with the Royal Palace (now home to museums) and the view over the Danube and Pest',
      "The Fisherman's Bastion (Halászbástya), the Neo-Romanesque terrace built in 1902 as a viewpoint (it was never a fortification), with seven turrets representing the seven founding Magyar tribes",
      "Matthias Church (Mátyás-templom), next to the Bastion, with its polychrome glazed tile roof and the history of royal coronations and conversion into a mosque during the Ottoman occupation",
      "The Hungarian Parliament (Országház), on the Pest bank, completed in 1904 and among the largest parliament buildings in the world, visitable with a guided tour that includes the Holy Crown of Saint Stephen",
      'The Chain Bridge (Széchenyi lánchíd), the first permanent bridge between Buda and Pest, opened in 1849, lit up in the evening',
      "The Great Synagogue on Dohány Street (Dohány utcai zsinagóga), the largest in Europe and the second in the world after the one in New York, in Moorish style, with the memorial garden and Imre Varga's Tree of Life sculpture dedicated to the victims of the Shoah",
      'The Jewish Quarter (Erzsébetváros, District VII), now the center of the ruin bars (romkocsma), venues born in dilapidated buildings and abandoned courtyards starting in the early 2000s',
      'Margaret Island (Margitsziget), a car-free park in the middle of the Danube, with a musical fountain and its own thermal baths',
    ],
    cosaFare: [
      'A soak at the Széchenyi or Gellért Baths (see the dedicated experience pages)',
      'A cruise or an evening walk on the Danube, to see the Parliament and the Castle lit up from the water',
      "Climbing the dome of Saint Stephen's Basilica for the view over the rooftops of Pest",
      'A tour of the ruin bars of the Jewish Quarter, starting with the best known, Szimpla Kert',
      'Walking across the Chain Bridge between Buda and Pest at sunset',
    ],
    doveDormire:
      "The Pest side, between the Parliament, Saint Stephen's Basilica and the Jewish Quarter, is the most convenient and liveliest area in the evening, a few minutes' walk from the main points of interest. The Buda side is quieter and more scenic, but less central for evening getting around.",
    doveMangiare:
      "Goulash (gulyás), here more soup than stew, in the original Hungarian version; lángos, a disc of fried dough with sour cream and cheese, the most widespread street food; paprikás csirke (chicken paprikash); desserts like rétes (strudel) and Dobos torte. The Central Market Hall (Nagycsarnok), opened in 1897, is the best place to taste local products, paprika included, at low prices compared to the tourist restaurants in the center.",
    comeArrivare:
      "Ferenc Liszt Airport (BUD), about 16 km from the center: the 100E shuttle bus goes directly to the center in about 35-40 minutes, or the 200E city bus plus metro. There is no convenient direct rail connection from Italy: you generally arrive by plane. From Vienna, train in about 2h30.",
    comeSpostarsi: 'BKK network of metro, trams and buses, extensive and cheap. The center of Pest and Buda Hill are also easy to cover on foot. No car needed.',
    periodoMigliore: "April-May and September-October for mild weather and fewer crowds; June-August is high season, hot and crowded; November-March is cold but the baths become a special experience, with Christmas markets in December",
    costi: "a low-to-mid-priced city by Western European standards: a normal dinner €12-20 per person, public transport a few HUF a ride, bath admission the most expensive item of a typical day",
    erroriDaEvitare: [
      'Following people who approach you on the street suggesting "a fantastic place" in the Jewish Quarter or around the tourist squares: it is the classic scheme that leads to wildly inflated bills',
      'Mixing up the zeros of the forint: a bill of "8,000" is not 8 euros, and it is easy to get it wrong in the first few days',
      "Underestimating the baths as a relaxing one-hour break: between entry, changing room and locker queues, less than two and a half to three hours is not enough to enjoy them",
      'Planning the weekend without booking the Parliament tour in advance, which has limited entries and often sells out days ahead in high season',
    ],
    esperienzeSlugs: ['terme-szechenyi', 'terme-gellert', 'crociera-danubio', 'ruin-bar-tour'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: "The white conical towers of the Fisherman's Bastion on Buda Hill, under a blue sky",
    immagine: '/images/ungheria/budapest.jpg',
  },
]
