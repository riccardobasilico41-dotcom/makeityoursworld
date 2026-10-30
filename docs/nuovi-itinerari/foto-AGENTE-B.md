# Foto nuovi itinerari — agente B

Tutte le foto vengono da Wikimedia Commons con licenza **CC0** o **pubblico dominio** (verificata via API, campo LicenseShortName): nessuna attribuzione obbligatoria, crediti tenuti solo per tracciabilità. Unsplash/Pexels/Pixabay non erano raggiungibili da script (challenge anti-bot); alcune foto Commons sono import CC0 da Unsplash.

## Blocco per `src/content/viaggi-copertine.ts` (dentro `copertineViaggi`)

```ts
  'egitto-mare-luxor-cairo': {
    immagine: '/images/copertine/egitto-mare-luxor-cairo.jpg',
    imageAlt: 'Una mongolfiera sopra la Valle dei Re all\'alba, sulla riva ovest di Luxor',
  },
  'egitto-completo': {
    immagine: '/images/copertine/egitto-completo.jpg',
    imageAlt: 'Le statue osiriache di Ramses II nella sala interna del tempio grande di Abu Simbel',
  },
  'turchia-itinerario': {
    immagine: '/images/copertine/turchia-itinerario.jpg',
    imageAlt: 'Le valli di tufo della Cappadocia viste dall\'alto da una mongolfiera',
  },
  'filippine-itinerario': {
    immagine: '/images/copertine/filippine-itinerario.jpg',
    imageAlt: 'Isole calcaree e acqua turchese nell\'arcipelago delle Calamian, attorno a Coron',
  },
  'california-road-trip': {
    immagine: '/images/copertine/california-road-trip.jpg',
    imageAlt: 'La Highway 1 che scende verso il ponte di Bixby Creek lungo la costa di Big Sur',
  },
  'montenegro-itinerario': {
    immagine: '/images/copertine/montenegro-itinerario.jpg',
    imageAlt: 'Il faro e la chiesa della Madonna dello Scarpello sull\'isolotto davanti a Perast, nelle Bocche di Cattaro',
  },
```

## Blocco per `src/content/viaggi-copertine-crediti.ts` (dentro `creditiCopertine`)

```ts
  'egitto-mare-luxor-cairo': {
    autore: 'Mustang Joe (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Floating_over_the_Valley_of_the_Kings,_Luxor,_Egypt_(54480104477).jpg',
  },
  'egitto-completo': {
    autore: 'Gary Todd from Xinzheng, China (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Abu_Simbel_Temple_of_Ramesses_II_(9794542314).jpg',
  },
  'turchia-itinerario': {
    autore: 'Netha Hussain (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aerial_view_of_Cappadocia_from_hot_air_balloon_68.jpg',
  },
  'filippine-itinerario': {
    autore: 'lumoplank (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Coron_and_Calamian_Islands_-_Coron1729.jpg',
  },
  'california-road-trip': {
    autore: 'adrian aows (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Icons_(Unsplash).jpg',
  },
  'montenegro-itinerario': {
    autore: 'Tumi-1983 (Wikimedia Commons)',
    licenza: 'CC0 1.0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:R.K.C._Gospa_od_Škrpjela,_Perast,_Montenegro.jpg',
  },
```

## Blocco per `src/content/viaggi-giorno-foto-crediti.ts` (dentro `creditiGiornoFoto`)

```ts
  'egitto-mare-luxor-cairo': {
    'Giorno 1 — Arrivo al Cairo': {
      autore: 'Robster1983 at English Wikipedia (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Giza-pyramids.JPG',
    },
    'Giorno 2 — Le piramidi di Giza e il Grand Egyptian Museum': {
      autore: 'Warren LeMay from Chicago, IL, United States (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pyramids_of_Giza,_Giza,_GG,_EGY_(47902719631).jpg',
    },
    'Giorno 3 — Saqqara, Dahshur e la sera al Khan el-Khalili': {
      autore: 'Gary Todd from Xinzheng, China (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Saqqara_Pyramid_and_Temple_of_Zoser_(Djoser)_(9794271904).jpg',
    },
    'Giorno 4 — Il Cairo islamico e copto, volo per Luxor': {
      autore: 'shadyshaker (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cairo_Mosque_Egypt_Islam_Architecture.jpg',
    },
    'Giorno 5 — Luxor, riva ovest: Valle dei Re e tempio di Hatshepsut': {
      autore: 'Warren LeMay from Covington, KY, United States (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mortuary_Temple_of_Hatshepsut,_Luxor,_LG,_EGY_-_Flickr_-_w_lemay.jpg',
    },
    'Giorno 6 — Mongolfiera all\'alba, Karnak e il tempio di Luxor': {
      autore: 'Mustang Joe (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hot_air_balloons_over_the_Valley_of_the_Kings_-_Flickr_-_Mustang_Joe.jpg',
    },
    'Giorno 7 — Da Luxor al Mar Rosso': {
      autore: 'Earth Science and Remote Sensing Unit, Lyndon B. Johnson Space Center (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:ISS006-E-10805_-_View_of_Egypt.jpg',
    },
    'Giorno 8 — Mare: la barriera corallina dalla riva': {
      autore: 'no rights reserved (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Chlorurus_sordidus,_Marsa_Shagra,_Marsa_Alam,_Red_Sea_Governorate,_Egypt_imported_from_iNaturalist_photo_348227348.jpg',
    },
    'Giorno 9 — In barca alle isole o immersioni': {
      autore: 'Mahmoud Habeeb (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Coral_Reef_in_the_Red_Sea.JPG',
    },
    'Giorno 11 — Rientro': {
      autore: 'Mahmoud Habeeb (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Coral_Reef_in_the_Red_Sea.JPG',
    },
  },
  'egitto-completo': {
    'Giorno 1 — Arrivo al Cairo': {
      autore: 'Gary Todd from Xinzheng, China (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mosque-Madrassa_of_Sultan_Hassan,_Cairo,_Egypt_(9797501896).jpg',
    },
    'Giorno 2 — Giza e il Grand Egyptian Museum': {
      autore: 'Warren LeMay from Chicago, IL, United States (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pyramids_of_Giza,_Giza,_GG,_EGY_(47850611872).jpg',
    },
    'Giorno 3 — Saqqara, Dahshur e Menfi': {
      autore: 'LisethHatta17 (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Saqqara_Necropolis.jpg',
    },
    'Giorno 4 — Il Cairo islamico, il Cairo copto e il Museo Egizio': {
      autore: 'Gary Todd from Xinzheng, China (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mosque_of_Muhammad_Ali,_Selah-Al-Din_(Saladin)_Citadel,_Cairo_(9797492034).jpg',
    },
    'Giorno 5 — Da Cairo a Marsa Matruh passando per Alessandria': {
      autore: 'ديفيد عادل وهبة خليل 2 (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:كورنيش_مرسى_مطروح_4.jpg',
    },
    'Giorno 6 — Da Marsa Matruh a Siwa': {
      autore: 'Mohamed shokry algarnosy (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:جزيرة_فطناس_محمد_شكري_الجرنوسي_82.jpg',
    },
    'Giorno 7 — Siwa: l\'Oracolo, la montagna dei morti e la sorgente di Cleopatra': {
      autore: 'Mohamed shokry algarnosy (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:جزيرة_فطناس_محمد_شكري_الجرنوسي_51.jpg',
    },
    'Giorno 8 — Il Grande Mare di Sabbia': {
      autore: 'NASA (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:ISS-31_Linear_dunes_in_the_Great_Sand_Sea_in_southwest_Egypt.jpg',
    },
    'Giorno 9 — Rientro al Cairo': {
      autore: 'Warren LeMay from Cincinnati, OH, United States (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Khan_el-Khalili,_Old_Cairo,_al-Qāhirah,_CG,_EGY_(47122173924).jpg',
    },
    'Giorno 10 — Volo per Assuan e feluca al tramonto': {
      autore: 'Warren LeMay from Cullowhee, NC, United States (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aswan_from_the_Nile_River,_Aswan,_AG,_EGY_(48025382026).jpg',
    },
    'Giorno 11 — Abu Simbel all\'alba': {
      autore: 'Warren LeMay from Cullowhee, NC, United States (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Abu_Simbel_Temples,_Abu_Simbel,_AG,_EGY_(48017152218).jpg',
    },
    'Giorno 12 — Philae e l\'imbarco sulla crociera del Nilo': {
      autore: 'RndmCrs (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Temple_of_Philae_as_seen_from_a_boat.jpg',
    },
    'Giorno 13 — Crociera: Kom Ombo ed Edfu': {
      autore: 'Warren LeMay from Cullowhee, NC, United States (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Temple_of_Horus_at_Edfu,_Edfu,_AG,_EGY_(48022552433).jpg',
    },
    'Giorno 14 — Esna e l\'arrivo a Luxor: Karnak e il tempio di Luxor': {
      autore: 'Warren LeMay from Chicago, IL, United States (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Great_Hypostyle_Hall,_Karnak_Temple,_Luxor,_LG,_EGY_(48009633832).jpg',
    },
    'Giorno 15 — Luxor, riva ovest: Valle dei Re, Hatshepsut e Nefertari': {
      autore: 'Mustang Joe (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tomb_of_Rameses_IV,_Valley_of_the_Kings,_Egypt_(53956208628).jpg',
    },
    'Giorno 16 — Mongolfiera, Medinet Habu e Deir el-Medina': {
      autore: 'Mustang Joe (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sunrise_Balloon_Ride,_Valley_of_the_Kings_(53379322967).jpg',
    },
    'Giorno 17 — Gita a Dendera o ad Abydos': {
      autore: 'A. Parrot (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Barques_of_Amun,_Mut,_and_Khonsu,_Temple_of_Seti_I_at_Abydos.jpg',
    },
    'Giorno 18 — Da Luxor a Marsa Alam': {
      autore: 'Earth Science and Remote Sensing Unit, Lyndon B. Johnson Space Center (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:ISS006-E-10805_-_View_of_Egypt.jpg',
    },
    'Giorno 19 — Immersioni: Abu Dabbab e i reef di Marsa Alam': {
      autore: 'no rights reserved (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Chlorurus_sordidus,_Marsa_Shagra,_Marsa_Alam,_Red_Sea_Governorate,_Egypt_imported_from_iNaturalist_photo_348227348.jpg',
    },
    'Giorno 20 — Immersioni a Elphinstone o snorkeling a Dolphin House': {
      autore: 'no rights reserved (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Slingjaw_Wrasse,_Fort_Arabesque,_Hurghada,_Red_Sea_Governorate,_Egypt_imported_from_iNaturalist_photo_404796817.jpg',
    },
    'Giorno 21 — Rientro': {
      autore: 'Mahmoud Habeeb (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Coral_Reef_in_the_Red_Sea.JPG',
    },
  },
  'turchia-itinerario': {
    'Giorno 1 — Arrivo a Istanbul': {
      autore: 'Hamdigumus (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Günbatımı,_Sultanahmet_2015.jpg',
    },
    'Giorno 2 — Sultanahmet: Santa Sofia, la Moschea Blu e la Cisterna': {
      autore: 'Julian Lupyan (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hagia_Sophia_from_Northwest,_2024.jpg',
    },
    'Giorno 3 — Topkapı, il Gran Bazar e la Süleymaniye': {
      autore: 'Julian Lupyan (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sultan\'s_Throne,_Imperial_Hall,_Topkapı_Palace_Harem.jpg',
    },
    'Giorno 4 — Il Bosforo, Beyoğlu e Kadıköy': {
      autore: 'xxoktayxx (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Galata_tower_view.jpg',
    },
    'Giorno 5 — Volo per la Cappadocia': {
      autore: 'Feridun F. Alkaya (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:CAPPADOCIA_Göreme_National_Park_and_the_Rock_Sites._World_Heritage_List._Turkey_-_43735381830.jpg',
    },
    'Giorno 6 — Mongolfiera all\'alba e il museo all\'aperto di Göreme': {
      autore: 'Feridun F. Alkaya (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:CAPPADOCIA_Göreme_National_Park_and_the_Rock_Sites._World_Heritage_List._Turkey._Hot_Air_Ballooning_Cappadocia.jpg',
    },
    'Giorno 7 — Valle Rossa, Uçhisar e la città sotterranea': {
      autore: 'Wokege (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:View_of_geological_strata_in_Capadocia.jpg',
    },
    'Giorno 8 — Pamukkale e Hierapolis': {
      autore: 'LoggaWiggler (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pamukkale_Travertenlerinden_bir_fotoğraf.jpg',
    },
    'Giorno 9 — Afrodisia e l\'arrivo a Selçuk': {
      autore: 'Feridun F. Alkaya (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:APHRODISIAS_Ancient_City_-_The_monumental_gateway_or_tetrapylon.jpg',
    },
    'Giorno 10 — Efeso e Şirince': {
      autore: 'Olos88 (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ancient_stadium_in_Ephesus,_April_2024_(12).jpg',
    },
    'Giorno 11 — Verso la costa licia: Fethiye': {
      autore: 'Luc Coekaerts (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Fethiye_-_49217311762.jpg',
    },
    'Giorno 12 — Ölüdeniz, Kayaköy e la Via Licia': {
      autore: 'Hocu (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kayaköy_hillside_01.jpg',
    },
    'Giorno 13 — Da Fethiye a Kaş: Saklıkent e Patara': {
      autore: 'Cobija (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kaş_görünümü.jpg',
    },
    'Giorno 14 — Kekova in barca': {
      autore: 'Luc Coekaerts (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:View_Kas.jpg',
    },
    'Giorno 15 — Da Kaş ad Antalya': {
      autore: 'Cobija (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kaleiçi_görünümü.JPG',
    },
    'Giorno 16 — Antalya e rientro': {
      autore: 'Cobija (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kaleiçi_görünümü_(2).JPG',
    },
  },
  'filippine-itinerario': {
    'Giorno 1 — Arrivo a Manila': {
      autore: 'lumoplank (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Intramuros,_Manila-_Part_1_-_Forts_-_Intramuros1975.jpg',
    },
    'Giorno 2 — Volo per Puerto Princesa e van per El Nido': {
      autore: 'lumoplank (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:El_Nido_town_-_ElNido2132.jpg',
    },
    'Giorno 3 — El Nido: le lagune del Tour A': {
      autore: 'MC Guisona macoreine (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:El_Nido_(Unsplash).jpg',
    },
    'Giorno 4 — El Nido: il Tour C e la spiaggia di Nacpan': {
      autore: 'P.A.V. Mahusay (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:El_Nido,_Palawan_(1).jpg',
    },
    'Giorno 5 — Traghetto per Coron': {
      autore: 'lumoplank (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mount_Tapyas_-_Tapyas1700.jpg',
    },
    'Giorno 6 — Coron: il lago Kayangan, il Barracuda e le Twin Lagoon': {
      autore: 'lumoplank (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Coron_and_Calamian_Islands_-_Coron1713.jpg',
    },
    'Giorno 7 — Coron: relitti e isole di sabbia': {
      autore: 'lumoplank (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Coron_and_Calamian_Islands_-_Coron1734.jpg',
    },
    'Giorno 8 — Volo per Cebu e trasferimento a Moalboal': {
      autore: 'Ken Suarez kensuarez (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pescador_Island_(Unsplash).jpg',
    },
    'Giorno 9 — Moalboal: le sardine e le tartarughe': {
      autore: 'Ken Suarez kensuarez (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:A_view_from_the_top_of_Pescador_Island_(Unsplash).jpg',
    },
    'Giorno 11 — Da Moalboal a Bohol': {
      autore: 'rogel tura (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Chocolate_Hills_in_Bohol.jpg',
    },
    'Giorno 12 — Bohol: Chocolate Hills, tarsi e il fiume Loboc': {
      autore: 'lumoplank (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tarsiers_of_Bohol_-_Bohol1892.jpg',
    },
    'Giorno 13 — Panglao: Balicasag e Virgin Island': {
      autore: 'Deepak-nsk (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Doljo_Beach_in_Panglao.jpg',
    },
    'Giorno 14 — Volo per Siargao': {
      autore: 'theinstantmatrix (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Magpupungko_beach_area_spherical_360-degree_08-23-2017.jpg',
    },
    'Giorno 16 — Siargao: la laguna di Sugba e Magpupungko': {
      autore: 'theinstantmatrix (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Magpupungko_beach_area_02_spherical_360-degree_08-23-2017.jpg',
    },
    'Giorno 17 — Siargao: surf e ultimo giorno di mare': {
      autore: 'Surigao del Norte Provincial Government (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cloud_9_October_2026.jpg',
    },
    'Giorno 18 — Rientro da Siargao': {
      autore: 'Surigao del Norte Provincial Government (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cloud_9_October_2026.jpg',
    },
  },
  'california-road-trip': {
    'Giorno 1 — Arrivo a San Francisco': {
      autore: 'Umer Sayyam (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Golden_Gate_Bridge_at_Purple_sunset.jpg',
    },
    'Giorno 2 — San Francisco: il Golden Gate, il Presidio e Alcatraz': {
      autore: 'CaryXz5 (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Fort_Point_View_of_Golden_Gate_Bridge.jpg',
    },
    'Giorno 3 — San Francisco: i quartieri e Muir Woods': {
      autore: 'Autore sconosciuto (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:MUWO4188.jpg',
    },
    'Giorno 4 — Da San Francisco a Yosemite': {
      autore: 'Sebastien Gabriel (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Yosemite_National_Park_Unsplash.jpg',
    },
    'Giorno 5 — Yosemite Valley: il Mist Trail e le cascate': {
      autore: 'Cam Adams camadams (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Vernal_Fall,_Yosemite_Valley,_United_States_(Unsplash).jpg',
    },
    'Giorno 6 — Yosemite: Glacier Point e Mariposa Grove': {
      autore: 'Cam DiCecca camdicecca (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Glacier_Point_Through_The_Fog_(Unsplash).jpg',
    },
    'Giorno 7 — Da Yosemite a Sequoia': {
      autore: 'Susan Yin syinq (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Trees_in_Sequoia_National_Park_(Unsplash).jpg',
    },
    'Giorno 8 — Sequoia: il General Sherman e Moro Rock': {
      autore: 'Dsdugan (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:17_23_321_moro.jpg',
    },
    'Giorno 9 — Verso la Death Valley': {
      autore: 'NPS (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Thimble_Peak_and_the_Cottonwood_Mountains_rise_above_Mesquite_Flat_Sand_Dunes._(105bfe72-28d2-427f-8605-1c77628ed87b).JPG',
    },
    'Giorno 10 — Death Valley: Badwater, Artists Drive e Zabriskie Point': {
      autore: 'NPS (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Telescope_Peak_is_reflected_in_a_shallow_pool_in_Badwater_Basin_following_rains._(198717b7-3110-474a-a060-1a19606d47a4).jpg',
    },
    'Giorno 11 — Dalla Death Valley a Joshua Tree': {
      autore: 'Joshua Tree National Park (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sunset_at_Joshua_Tree_National_Park_(21123226221).jpg',
    },
    'Giorno 12 — Joshua Tree': {
      autore: 'StephenGA (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Joshua_Tree_National_Park_-_51758583325.jpg',
    },
    'Giorno 13 — Palm Springs e l\'arrivo a Los Angeles': {
      autore: 'Visviva (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Agua_Caliente_Band_signage_downtown_Palm_Springs.jpg',
    },
    'Giorno 14 — Los Angeles: il Getty, Hollywood e il Griffith Observatory': {
      autore: 'The Fun Chronicles (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Griffith_Observatory_with_Downtown_Los_Angeles_In_The_Background_-_54084315490.jpg',
    },
    'Giorno 15 — Los Angeles: Santa Monica, Venice e Malibu': {
      autore: 'Bernard Spragg. NZ from Christchurch, New Zealand (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Santa_Monica_Pier._(48943413288).jpg',
    },
    'Giorno 16 — Santa Barbara e la costa fino a Cambria': {
      autore: 'Mx. Granger (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:West_Beach_3.jpg',
    },
    'Giorno 17 — Big Sur sulla Highway 1': {
      autore: 'Joe Pascavage pascavage (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sand_beach_bay_among_rocks_(Unsplash).jpg',
    },
    'Giorno 18 — Monterey, Carmel e il rientro a San Francisco': {
      autore: 'U.S. Fish and Wildlife Service Headquarters (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Monterey_Bay_Coast_(7161010684).jpg',
    },
    'Giorno 19 — Partenza da San Francisco': {
      autore: 'Bernard Spragg. NZ from Christchurch, New Zealand (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Painted_ladies_(16)_(8654118574).jpg',
    },
  },
  'montenegro-itinerario': {
    'Giorno 1 — Arrivo a Tivat e Kotor al tramonto': {
      autore: 'photo-nic.co.uk nic chiro (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kotor,_Montenegro_(Unsplash).jpg',
    },
    'Giorno 2 — Kotor: la città vecchia e le mura fino alla fortezza': {
      autore: 'Tumi-1983 (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cityscape_to_Kotor.jpg',
    },
    'Giorno 3 — Perast, la Madonna dello Scarpello e il giro delle Bocche': {
      autore: 'Tumi-1983 (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Perast_from_bay_of_Kotor.jpg',
    },
    'Giorno 4 — Le serpentine del Lovćen, Njeguši e Cetinje': {
      autore: 'Qasinka (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:2023_Lovćen_national_park_1.jpg',
    },
    'Giorno 5 — Budva, la costa e Sveti Stefan': {
      autore: 'Dirgela (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Budva_Riviera.jpg',
    },
    'Giorno 6 — Il lago di Scutari: Virpazar e Rijeka Crnojevića': {
      autore: 'Fabizor (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rijeka_Crnojevića_(Stari_most).JPG',
    },
    'Giorno 7 — Il monastero di Ostrog e la strada per Žabljak': {
      autore: 'William Hall (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Gornji_manasti_sa_konakom_-_panorama_2008.jpg',
    },
    'Giorno 8 — Durmitor: il Lago Nero, la strada panoramica e il Bobotov Kuk': {
      autore: 'Rybioko (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Zabljak.jpg',
    },
    'Giorno 9 — Il ponte sul Tara, il rafting e la discesa verso sud': {
      autore: 'Bojana Smiljanić; Original uploader was Zrno at sr.wikipedia (Wikimedia Commons)',
      licenza: 'Pubblico dominio',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kanjon_Tare_(2006).jpg',
    },
    'Giorno 10 — Podgorica e partenza': {
      autore: 'Rakoon (Wikimedia Commons)',
      licenza: 'CC0 1.0 (pubblico dominio)',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:DSC_0123_podgorica_july_2017.jpg',
    },
  },
```
