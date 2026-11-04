import type { Destinazione } from '@/lib/types'

export const destinazioniMaldive: Destinazione[] = [
  {
    slug: 'male-hulhumale',
    paeseSlug: 'maldive',
    ordine: 1,
    nome: 'Malé y Hulhumalé',
    tipologia: ['città', 'arrivo'],
    giorniConsigliati: 'media jornada o una noche de tránsito',
    visitataPersonalmente: true,
    introduzione:
      "La capital, una de las ciudades más densamente pobladas del mundo, y Hulhumalé, la isla artificial junto al aeropuerto de Velana, con playa urbana, hoteles y restaurantes.",
    percheAndarci:
      "Para la primera o la última noche, cuando los horarios de los vuelos no permiten una barca o un hidroavión, y para media jornada entre el mercado de pescado y la Mezquita del Viernes.",
    cosaVedere: [
      'El mercado de pescado de Malé por la mañana',
      'El mercado de frutas y verduras',
      'La Mezquita del Viernes (Hukuru Miskiy), de piedra de coral del siglo XVII',
      'La playa de Hulhumalé',
    ],
    cosaFare: ['Probar los short eats en un café local', 'Un paseo nocturno por el malecón de Hulhumalé'],
    doveDormire: "Hulhumalé, a 10-15 minutos del aeropuerto, con hoteles y guesthouses de 60 a 150 $.",
    doveMangiare: 'Cafés locales para los short eats, restaurantes del malecón de Hulhumalé.',
    comeArrivare: "Desde el aeropuerto de Velana en ferri a Malé (10 minutos, 1-2 $) o en autobús y taxi a Hulhumalé y a Malé por el puente.",
    comeSpostarsi: 'A pie y en taxi.',
    periodoMigliore: 'todo el año.',
    erroriDaEvitare: ['Visitar las mezquitas durante la oración o sin ropa que cubra', "Buscar alcohol: Malé y Hulhumalé son islas habitadas, y allí rige la prohibición"],
    luoghi: [
      {
        "nome": "Mercado de pescado de Malé",
        "testo": "Donde llegan los atunes pescados al amanecer, cortados ante los curiosos. Al lado está el mercado de fruta y verdura.",
        "come": "Desde la terminal del ferri del aeropuerto, a pocos minutos a pie.",
        "quando": "Por la mañana temprano, cuando llega el pescado.",
        "tempo": "1 hora",
        "consiglio": "Pide siempre permiso para fotografiar a personas."
      },
      {
        "nome": "Mezquita del Viernes (Hukuru Miskiy)",
        "testo": "Una mezquita de piedra de coral del siglo XVII, con paredes talladas y techos de madera lacada.",
        "come": "A pie desde el centro de Malé. Se puede visitar con ropa que cubra.",
        "quando": "Fuera de las horas de oración.",
        "tempo": "30 minutos",
        "consiglio": "Hombros y rodillas cubiertos; no se entra durante la oración."
      },
      {
        "nome": "Playa de Hulhumalé",
        "testo": "La playa urbana de la isla artificial junto al aeropuerto, con paseo marítimo y restaurantes. Cómoda para la primera o la última noche.",
        "come": "Desde Velana en autobús o taxi, 10-15 minutos.",
        "quando": "Atardecer y noche.",
        "tempo": "una noche",
        "consiglio": "Es una isla habitada: valen las normas locales, así que ropa que cubra y nada de alcohol."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mercado de pescado y de fruta por la mañana",
          "Mezquita del Viernes fuera de la oración",
          "Ferri al aeropuerto o autobús a Hulhumalé",
          "Cena en el paseo marítimo de Hulhumalé"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hulhumalé",
        "perChi": "primera o última noche",
        "testo": "A 10-15 minutos de Velana, con hoteles y casas de huéspedes de 60 a 150 $ y restaurantes en el paseo marítimo. Moderna y algo anónima."
      },
      {
        "nome": "Malé",
        "perChi": "quien quiera la ciudad",
        "testo": "Capital densísima, ruidosa y sin playa. Útil para medio día, menos para dormir."
      }
    ],
    sapori: [
      {
        "nome": "Short eats",
        "testo": "Gulha, bajiya y kavaabu: snacks fritos de la tarde en las cafeterías locales."
      },
      {
        "nome": "Mas huni",
        "testo": "Atún, coco rallado, cebolla y chile con roshi, una torta plana: el desayuno maldivo."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Curry de atún",
        "testo": "Pescado del día en curry, en cafeterías y casas de huéspedes."
      }
    ],
    attenzioni: [
      "En las islas habitadas (Malé, Hulhumalé) el alcohol ni se vende ni se bebe. Importarlo está prohibido.",
      "Desde el 12 de noviembre de 2024 los cigarrillos electrónicos están prohibidos, con importación y uso incluidos.",
      "Rellenar la IMUGA en las 96 horas antes del vuelo.",
      "Está prohibido llevarse corales, conchas y arena, incluso de la playa: se confiscan en el aeropuerto y se arriesga una multa."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Malé vista desde arriba, con el puerto lleno de barcas y los edificios de colores de la capital',
    immagine: '/images/maldive/male-hulhumale.jpg',
  },
  {
    slug: 'male-sud-vaavu',
    paeseSlug: 'maldive',
    ordine: 2,
    nome: 'Malé Sur y Vaavu',
    tipologia: ['isole locali', 'snorkeling', 'squali'],
    giorniConsigliati: '3-5 días',
    visitataPersonalmente: false,
    introduzione:
      "Los atolones más cercanos al aeropuerto hacia el sur: Malé Sur con Maafushi, Guraidhoo y Gulhi, y más abajo Vaavu, poco turístico, con Fulidhoo y los canales de los tiburones.",
    percheAndarci:
      "Para quien tiene pocos días o quiere gastar poco en traslados: speedboats breves, muchas guesthouses, tortugas, tiburones nodriza y la inmersión nocturna de Alimatha.",
    cosaVedere: [
      'La bikini beach de Maafushi y los arrecifes cercanos con tortugas',
      'La isla de Fulidhoo, pequeña y tranquila',
      'Los canales de Vaavu (Fotteyo, Miyaru Kandu) con tiburones grises',
    ],
    cosaFare: ['Snorkeling con tiburones nodriza y rayas', 'La inmersión nocturna de Alimatha', 'Una jornada en un resort cercano desde Maafushi'],
    doveDormire: 'Guesthouses en Maafushi (la más desarrollada y concurrida), Guraidhoo, Gulhi, Fulidhoo.',
    doveMangiare: 'Cocina maldiva en las guesthouses y en los cafés de la isla.',
    comeArrivare: "Speedboat desde Malé en 30-90 minutos (25-40 $), o ferri MTCC económico con pocas salidas.",
    comeSpostarsi: 'Excursiones en barca organizadas por las guesthouses.',
    periodoMigliore: 'de diciembre a abril por el mar en calma; de mayo a noviembre speedboats más agitadas.',
    erroriDaEvitare: ['Esperar un pueblo tranquilo en Maafushi: está muy construida y concurrida', 'Contar con los ferris en viernes'],
    luoghi: [
      {
        "nome": "Maafushi y su bikini beach",
        "testo": "La isla local más desarrollada cerca de Malé, con una bikini beach señalizada, muchas casas de huéspedes y arrecifes cercanos donde se ven tortugas.",
        "come": "Lancha rápida desde Malé en 30-90 minutos, o el barato ferri MTCC con pocas salidas.",
        "quando": "Todo el año; de diciembre a abril el mar está más calmado.",
        "tempo": "2-3 días",
        "costo": "Lancha rápida aproximadamente 25-40 $ por trayecto (indicativo, 2026)",
        "consiglio": "Está muy construida y llena: no es el pueblo tranquilo que se podría esperar."
      },
      {
        "nome": "Fulidhoo",
        "testo": "Una pequeña isla local de Vaavu, tranquila, con calles de arena y pocos turistas.",
        "come": "Lancha rápida o ferri desde Malé; las excursiones se reservan en la casa de huéspedes.",
        "tempo": "2-3 días"
      },
      {
        "nome": "Canales de Vaavu y Alimatha",
        "testo": "Los canales de Fotteyo y Miyaru Kandu traen tiburones grises. En Alimatha la inmersión nocturna es conocida por las decenas de tiburones nodriza.",
        "come": "Con los centros de buceo y las excursiones de las casas de huéspedes.",
        "quando": "De diciembre a abril por el mar en calma.",
        "tempo": "un día",
        "consiglio": "Los canales tienen corriente: hace falta experiencia y meses de buceo a la espalda."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: lancha rápida de Malé a Maafushi, snorkel con tortugas",
          "Día 2: excursión de snorkel o inmersión con tiburones nodriza",
          "Día 3: día en un resort cercano, o Vaavu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Maafushi",
        "perChi": "servicios y oferta",
        "testo": "La más desarrollada, con muchas casas de huéspedes y restaurantes. Llena y construida."
      },
      {
        "nome": "Guraidhoo y Gulhi",
        "perChi": "más tranquila",
        "testo": "Islas más pequeñas y tranquilas en el mismo atolón."
      },
      {
        "nome": "Fulidhoo",
        "perChi": "poco turística",
        "testo": "En Vaavu, tranquila y con pocas instalaciones."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Desayuno de atún, coco y cebolla con roshi, en las casas de huéspedes."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día a la brasa en las casas de huéspedes."
      },
      {
        "nome": "Short eats",
        "testo": "Gulha y bajiya fritos en las cafeterías de la isla, por la tarde."
      }
    ],
    attenzioni: [
      "El viernes es día festivo: tiendas y cafeterías cierran desde media mañana, los ferris largos no circulan y las excursiones pueden reducirse.",
      "Bikini solo en la bikini beach señalizada; en otros sitios hombros y rodillas cubiertos, también para bañarse.",
      "Los ferris MTCC son lentos, con pocas salidas, y los billetes se pagan en efectivo en la terminal el mismo día.",
      "Las excursiones de las casas de huéspedes tienen precios fijos: compara con otras si es posible."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un camino de arena entre las palmeras y las casas bajas de una isla local de las Maldivas',
    immagine: '/images/maldive/male-sud-vaavu.jpg',
  },
  {
    slug: 'rasdhoo',
    paeseSlug: 'maldive',
    ordine: 3,
    nome: 'Rasdhoo y Ari Norte',
    tipologia: ['isole locali', 'immersioni', 'squali martello'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Una semana en Ukulhas no estaba en los planes: la última vez estalló la guerra en Oriente Medio, nos cancelaron los vuelos y, por desgracia, tuvimos que quedarnos una semana más. Ukulhas es bonita y muy auténtica, pero distinta de Dhigurah: menos paraíso tropical y más isla vivida. Aquí buceamos y sacamos los títulos con Reef Rangers Ukulhas, buenísimos.",
    introduzione:
      "Un pequeño atolón en el extremo noreste de Ari, con la isla local de Rasdhoo, y las vecinas Ukulhas y Thoddoo. El lado exterior del atolón cae a pico hacia el azul profundo.",
    percheAndarci:
      "Para los tiburones martillo que suben de las profundidades al amanecer, de diciembre a mayo, y para una isla local con buenos centros de buceo.",
    cosaVedere: ['El sitio de los tiburones martillo al amanecer (Hammerhead Point)', 'Los arrecifes con mantas y tortugas', 'La playa y los jardines de Ukulhas y Thoddoo'],
    cosaFare: ['Una inmersión al amanecer en aguas abiertas para buceadores expertos', 'Snorkeling en los arrecifes de la laguna'],
    doveDormire: 'Guesthouses en Rasdhoo, Ukulhas y Thoddoo.',
    doveMangiare: 'Cocina maldiva y pescado a la parrilla en las guesthouses.',
    comeArrivare: "Speedboat desde Malé en aproximadamente 1 hora-1 hora y media (40-70 $), o ferri MTCC en unas 3 horas con pocas salidas a la semana.",
    comeSpostarsi: 'En barca con los centros de buceo.',
    periodoMigliore: 'de diciembre a mayo para los tiburones martillo.',
    costi: 'Inmersión 50-80 $ en los centros locales.',
    erroriDaEvitare: ['Intentar la inmersión de los tiburones martillo sin experiencia en aguas abiertas y en profundidad'],
    luoghi: [
      {
        "nome": "Hammerhead Point",
        "testo": "El lado exterior del atolón cae al azul profundo. Al amanecer, de diciembre a mayo, suben los tiburones martillo. Es una inmersión en azul, para buceadores experimentados.",
        "come": "Con un centro de buceo de Rasdhoo, en barco al amanecer.",
        "quando": "Al amanecer, de diciembre a mayo.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $ en los centros locales (indicativo, 2026)",
        "consiglio": "No la hagas sin experiencia en azul y en profundidad."
      },
      {
        "nome": "Ukulhas con Reef Rangers",
        "testo": "Una isla local de Ari Norte, bonita y muy auténtica, más isla vivida que paraíso tropical. Pasamos allí una semana: fue un imprevisto, porque los vuelos se cancelaron al estallar la guerra en Oriente Medio. Buceamos y sacamos los títulos con Reef Rangers Ukulhas, buenísimos.",
        "come": "Lancha rápida desde Malé, de 1 a 1,5 horas.",
        "tempo": "3-4 días, o más para un título",
        "consiglio": "Para buceo y cursos: Reef Rangers Ukulhas. Deja siempre un día de margen antes del vuelo."
      },
      {
        "nome": "Arrecifes de Rasdhoo, Ukulhas y Thoddoo",
        "testo": "Snorkel en los arrecifes de la laguna, con mantas y tortugas. Las playas y los jardines de Ukulhas y Thoddoo.",
        "come": "Excursiones en barco desde las casas de huéspedes y los centros de buceo.",
        "quando": "De diciembre a mayo para los tiburones martillo.",
        "tempo": "un día"
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: lancha rápida de Malé a Rasdhoo, snorkel en el arrecife",
          "Día 2: inmersión al amanecer en Hammerhead Point (expertos) o snorkel con mantas",
          "Día 3: Ukulhas y Thoddoo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rasdhoo",
        "perChi": "buceadores",
        "testo": "Isla local con buenos centros de buceo y casas de huéspedes. Cómoda para el amanecer con los tiburones martillo."
      },
      {
        "nome": "Ukulhas",
        "perChi": "quien busque una isla vivida",
        "testo": "Auténtica, con buceo y cursos. Menos paraíso tropical que Dhigurah."
      },
      {
        "nome": "Thoddoo",
        "perChi": "verde y tranquila",
        "testo": "Isla agrícola con jardines y menos turistas."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día en las casas de huéspedes, con arroz y guarniciones."
      },
      {
        "nome": "Mas huni",
        "testo": "Atún, coco y cebolla con roshi en el desayuno."
      },
      {
        "nome": "Curry de atún",
        "testo": "Curry de atún con arroz, en las casas de huéspedes a la cena."
      },
      {
        "nome": "Fruta de Thoddoo",
        "testo": "Sandía, papaya y otra fruta cultivada en la isla."
      }
    ],
    attenzioni: [
      "Imprevistos con los vuelos: deja un día de margen, porque las cancelaciones y retrasos pueden dejarte atascado en la isla.",
      "Hammerhead Point sin experiencia en azul y en profundidad es peligroso.",
      "Última inmersión al menos 24 horas antes del vuelo, hidroavión incluido, y seguro con cobertura de buceo.",
      "El viernes muchas tiendas cierran y las excursiones pueden reducirse."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'La playa blanca del lado de la laguna de Kuramathi, en el atolón de Rasdhoo',
    immagine: '/images/maldive/rasdhoo.jpg',
  },
  {
    slug: 'ari-sud',
    paeseSlug: 'maldive',
    ordine: 4,
    nome: 'Ari Sur (Dhigurah y Dhangethi)',
    tipologia: ['isole locali', 'snorkeling', 'squali balena', 'mante'],
    giorniConsigliati: '4-5 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Dhigurah es increíble, probablemente la isla más completa de todas las Maldivas, aunque algo de gente sigue habiendo. Una cosa no me gustó: para las excursiones no tienes libertad de elección, solo puedes confiar en tu homestay o tu hotel, y los precios son «de cártel».",
    introduzione:
      "La parte meridional del atolón de Ari, con el área marina protegida entre Maamigili y Dhigurah donde los tiburones ballena jóvenes se alimentan a lo largo del arrecife exterior todo el año.",
    percheAndarci:
      "Es el lugar más sencillo de las Maldivas para nadar con el tiburón ballena, con islas locales de playas largas y mantas en las estaciones de limpieza.",
    cosaVedere: [
      'El tiburón ballena a lo largo del arrecife exterior',
      'Las mantas en las estaciones de limpieza, como alrededor de Rangali',
      'La larga bikini beach de Dhigurah',
      'Los bancos de arena de la laguna',
    ],
    cosaFare: ['Snorkeling con el tiburón ballena', 'Snorkeling o inmersión con las mantas', 'Pesca al atardecer en dhoni'],
    doveDormire: 'Guesthouses en Dhigurah y Dhangethi; resorts en islas cercanas.',
    doveMangiare: 'Cocina maldiva en las guesthouses, pescado del día.',
    comeArrivare: "Speedboat desde Malé en 1 hora y media-2 horas (50-70 $), o vuelo interno a Maamigili y barca.",
    comeSpostarsi: 'Excursiones en barca desde las guesthouses y los centros de buceo.',
    periodoMigliore: 'todo el año para los tiburones ballena, con la ventana más citada de diciembre a abril; mantas en el lado occidental en la estación seca.',
    costi: 'Tiburón ballena 60-120 $ por persona; mantas y bancos de arena 70-130 $.',
    erroriDaEvitare: [
      'Acercarse a menos de 3 metros del tiburón ballena, tocarlo o usar el flash',
      'Elegir operadores que no respetan los límites de barcas y nadadores',
    ],
    luoghi: [
      {
        "nome": "Tiburón ballena en el arrecife exterior",
        "testo": "El área marina protegida entre Maamigili y Dhigurah, donde los tiburones ballena jóvenes se alimentan a lo largo del arrecife exterior todo el año. Es el lugar más fácil de las Maldivas para nadar con ellos.",
        "come": "Excursión en barco desde las casas de huéspedes y centros de buceo de Dhigurah y Dhangethi.",
        "quando": "Todo el año; la ventana más citada es de diciembre a abril.",
        "tempo": "medio día",
        "costo": "60-120 $ por persona (indicativo, 2026)",
        "consiglio": "Mantén más de 3 metros de distancia al animal, no lo toques y no uses flash. Elige operadores que respeten los límites de barcos y nadadores."
      },
      {
        "nome": "Mantas en las estaciones de limpieza",
        "testo": "Las mantas frecuentan las estaciones de limpieza alrededor de Rangali, en el lado occidental del atolón. Se ven haciendo snorkel o buceando.",
        "come": "En barco con las casas de huéspedes o los centros de buceo.",
        "quando": "Estación seca, a partir de diciembre.",
        "tempo": "medio día",
        "costo": "Mantas y bancos de arena 70-130 $ (indicativo, 2026)"
      },
      {
        "nome": "Bikini beach de Dhigurah",
        "testo": "Dhigurah es increíble, probablemente la isla más completa de todas las Maldivas. Una playa larga, aunque algo de gente hay igualmente.",
        "come": "Lancha rápida desde Malé en 1,5-2 horas, o vuelo interno a Maamigili y barco.",
        "tempo": "medio día",
        "costo": "Lancha rápida 50-70 $ por trayecto (indicativo, 2026)",
        "consiglio": "En las excursiones no tienes autonomía de elección: dependes de tu homestay o de tu hotel, y los precios son «de cartel»."
      },
      {
        "nome": "Bancos de arena de la laguna",
        "testo": "Bancos de arena que emergen en la laguna, con picnics y snorkel.",
        "come": "Excursión en barco desde las casas de huéspedes.",
        "tempo": "medio día",
        "costo": "Banco de arena con picnic 40-80 $ (indicativo, 2026)"
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: lancha rápida de Malé a Dhigurah, playa y atardecer",
          "Día 2: tiburón ballena por la mañana, banco de arena por la tarde"
        ]
      },
      {
        "titolo": "4 días",
        "tappe": [
          "Día 1: llegada a Dhigurah",
          "Día 2: tiburón ballena",
          "Día 3: mantas haciendo snorkel o buceando",
          "Día 4: banco de arena y pesca al atardecer, y regreso"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dhigurah",
        "perChi": "playa larga",
        "testo": "Isla larga y estrecha con playa, casas de huéspedes y homestays. Hay algo de gente, pero sigue siendo la más completa."
      },
      {
        "nome": "Dhangethi",
        "perChi": "alternativa más pequeña",
        "testo": "Isla local con casas de huéspedes y centros de buceo, más recogida."
      },
      {
        "nome": "Resorts cercanos",
        "perChi": "quien quiera alcohol y comodidad",
        "testo": "En islas cercanas, con traslado en lancha rápida. Todo es más caro, pero se puede beber alcohol."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Desayuno de atún, coco y cebolla con roshi."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día, en las casas de huéspedes a la cena."
      },
      {
        "nome": "Short eats",
        "testo": "Gulha, bajiya y kavaabu por la tarde."
      }
    ],
    attenzioni: [
      "Tiburón ballena: no acercarse a menos de 3 metros, no tocarlo y nada de flash.",
      "No elijas operadores que no respeten los límites de barcos y nadadores.",
      "Los precios de las excursiones son «de cartel» y solo se puede contar con el propio alojamiento: pregunta qué incluye.",
      "Última inmersión al menos 24 horas antes del vuelo, hidroavión incluido."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un tiburón ballena nadando justo bajo la superficie, el encuentro por el que se va a Ari Sur',
    immagine: '/images/maldive/ari-sud.jpg',
  },
  {
    slug: 'baa-hanifaru',
    paeseSlug: 'maldive',
    ordine: 5,
    nome: 'Baa y la bahía de Hanifaru',
    tipologia: ['riserva UNESCO', 'mante', 'snorkeling'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: false,
    introduzione:
      "Un atolón reserva de la biosfera de la UNESCO, con la pequeña bahía de Hanifaru donde entre junio y noviembre se reúnen decenas, a veces más de cien, mantas para alimentarse de plancton.",
    percheAndarci:
      "Para una de las mayores agregaciones de mantas del mundo, que se observa haciendo snorkeling, con el pico entre agosto y octubre.",
    cosaVedere: ['Las mantas y los tiburones ballena ocasionales en Hanifaru', 'Los arrecifes y los thila del atolón'],
    cosaFare: ['Snorkeling en Hanifaru con guía autorizado', 'Inmersiones en los sitios del atolón fuera de la bahía'],
    doveDormire: 'Guesthouses en Dharavandhoo y Thulhaadhoo; resorts en las islas del atolón.',
    doveMangiare: 'Cocina maldiva en las guesthouses; restaurantes de los resorts.',
    comeArrivare: 'Hidroavión desde Malé (unos 35-45 minutos) o vuelo interno a Dharavandhoo y barca.',
    comeSpostarsi: 'En barca.',
    periodoMigliore: 'de junio a noviembre, pico de agosto a octubre en las semanas alrededor de luna nueva y luna llena.',
    costi: 'Tasa de entrada a la bahía indicativamente 20-50 $ por persona, excursión aparte.',
    erroriDaEvitare: [
      'Esperar sumergirse con botellas: en Hanifaru solo se permite el snorkeling',
      'Reservar a última hora en agosto-octubre: las entradas están limitadas',
    ],
    luoghi: [
      {
        "nome": "Bahía de Hanifaru",
        "testo": "Una pequeña bahía en la reserva de la biosfera de la UNESCO de Baa, donde entre junio y noviembre se reúnen decenas, a veces más de cien, mantas para alimentarse de plancton. Se observa haciendo snorkel.",
        "come": "En barco desde Dharavandhoo o Thulhaadhoo con guía autorizado. El buceo con botellas está prohibido.",
        "quando": "De junio a noviembre, con pico entre agosto y octubre en las semanas de luna nueva y luna llena.",
        "tempo": "medio día",
        "costo": "Entrada 20 $ por persona y día para el fondo de conservación del atolón, normalmente ya incluida en la excursión (indicativo, 2026)",
        "consiglio": "Reserva con antelación en agosto-octubre: las entradas son limitadas."
      },
      {
        "nome": "Arrecifes y thilas del atolón",
        "testo": "Fuera de la bahía, inmersiones en los sitios del atolón, entre pináculos sumergidos y arrecifes.",
        "come": "Con los centros de buceo de las islas locales o de los resorts.",
        "tempo": "un día"
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: hidroavión o vuelo interno a Dharavandhoo y luego barco a la casa de huéspedes",
          "Día 2: Hanifaru haciendo snorkel con guía autorizado",
          "Día 3: snorkel o inmersiones fuera de la bahía"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dharavandhoo",
        "perChi": "cerca de la bahía",
        "testo": "Isla local con aeropuerto y casas de huéspedes, la base más cercana a Hanifaru."
      },
      {
        "nome": "Thulhaadhoo",
        "perChi": "isla tranquila",
        "testo": "Isla local con casas de huéspedes, menos turística."
      },
      {
        "nome": "Resorts de Baa",
        "perChi": "quien quiera comodidad",
        "testo": "En las islas del atolón, con hidroavión desde Malé. Caro pero cómodo para las mantas."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Atún, coco y cebolla con roshi."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día, en las casas de huéspedes."
      },
      {
        "nome": "Buffets de los resorts",
        "testo": "Cocina internacional y de pescado, cara a la carta: la pensión completa suele convenir."
      }
    ],
    attenzioni: [
      "En Hanifaru solo se permite el snorkel: nada de botellas.",
      "En agosto-octubre las entradas son limitadas: no reserves a última hora.",
      "Las mantas no están garantizadas: dependen de la marea, la luna y el plancton.",
      "El hidroavión vuela solo de día y tiene límites de equipaje: comprueba antes."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un grupo de mantas vistas desde arriba mientras nadan en el agua turquesa',
    immagine: '/images/maldive/baa-hanifaru.jpg',
  },
  {
    slug: 'fuvahmulah',
    paeseSlug: 'maldive',
    ordine: 6,
    nome: 'Fuvahmulah',
    tipologia: ['immersioni', 'squali tigre', 'isola locale'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Para bucear recomiendo fuvahmulahdive.com. No es un sitio para principiantes: hace falta experiencia y a menudo se está en el azul. Pero si te gustan los grandes pelágicos es increíble, sobre todo por el tiburón tigre.",
    introduzione:
      "Un atolón formado por una sola isla en el sur de las Maldivas, casi sobre el ecuador, sin laguna, con el océano profundo a pocos metros de la orilla, lagos de agua dulce y una vegetación densa.",
    percheAndarci:
      "Para los tiburones tigre, presentes todo el año, junto con tiburones zorro, martillo y peces luna en algunas temporadas: una de las inmersiones con tiburones más conocidas del mundo.",
    cosaVedere: ['Los tiburones tigre en el Tiger Zoo', 'Los lagos interiores y la playa de Thoondu, con arena de guijarros blancos'],
    cosaFare: ['Inmersiones con los tiburones tigre para buceadores certificados', 'Una vuelta en bici por la isla'],
    doveDormire: 'Guesthouses y pequeños hoteles ligados a los centros de buceo.',
    doveMangiare: 'Cocina maldiva en las guesthouses.',
    comeArrivare: 'Vuelo interno desde Malé en aproximadamente 1 hora y 20 minutos.',
    comeSpostarsi: 'Bici, moto, taxi.',
    periodoMigliore: 'todo el año; el mar puede estar agitado de mayo a noviembre.',
    erroriDaEvitare: ['Ir sin experiencia: las corrientes y las condiciones oceánicas requieren titulación avanzada y un buen número de inmersiones'],
    luoghi: [
      {
        "nome": "Tiger Zoo, los tiburones tigre",
        "testo": "El sitio de inmersión de los tiburones tigre, presentes todo el año, junto con tiburones zorro, martillo y mola mola en algunas temporadas. No es un lugar para principiantes: hace falta experiencia y a menudo se está en el azul, pero si te gustan los grandes pelágicos es increíble.",
        "come": "Con un centro de buceo de la isla. Recomiendo fuvahmulahdive.com.",
        "quando": "Todo el año; el mar puede estar agitado de mayo a noviembre.",
        "tempo": "un día",
        "consiglio": "Hace falta un título avanzado y un buen número de inmersiones: las corrientes y las condiciones oceánicas no perdonan."
      },
      {
        "nome": "Lagos interiores y playa de Thoondu",
        "testo": "La isla tiene lagos de agua dulce y una vegetación densa, algo raro en las Maldivas. La playa de Thoondu tiene arena de guijarros blancos.",
        "come": "En bici, scooter o taxi por la isla.",
        "tempo": "medio día"
      },
      {
        "nome": "Vuelta en bici a la isla",
        "testo": "El atolón es una sola isla, sin laguna, con el océano profundo a pocos metros de la orilla. Una vuelta en bici permite verla entera.",
        "come": "Bici de alquiler en el pueblo.",
        "tempo": "medio día"
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: vuelo interno desde Malé (1 hora 20), vuelta a la isla",
          "Día 2: inmersiones con tiburones tigre",
          "Día 3: lagos interiores y playa de Thoondu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Casas de huéspedes ligadas a los centros de buceo",
        "perChi": "buceadores",
        "testo": "Alojamiento sencillo, a menudo reservado junto con las inmersiones. La isla es pequeña, así que se mueve uno en bici o scooter."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Atún, coco y cebolla con roshi en el desayuno."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Pescado del día",
        "testo": "A la parrilla o en curry en las casas de huéspedes."
      },
      {
        "nome": "Fruta de la isla",
        "testo": "Papaya, plátano y coco cultivados en los campos de la isla, de vegetación densa."
      }
    ],
    attenzioni: [
      "Ir sin experiencia: las corrientes y las condiciones oceánicas requieren título avanzado y un buen número de inmersiones.",
      "Última inmersión al menos 24 horas antes del vuelo, y seguro con cobertura de buceo.",
      "El mar puede estar agitado de mayo a noviembre.",
      "El vuelo interno tiene límites de equipaje: comprueba antes de salir."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un tiburón tigre nadando sobre el fondo arenoso',
    immagine: '/images/maldive/fuvahmulah.jpg',
  },
]
