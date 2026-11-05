import type { Destinazione } from '@/lib/types'

export const destinazioniEgitto: Destinazione[] = [
  {
    slug: 'cairo',
    paeseSlug: 'egitto',
    ordine: 1,
    nome: 'El Cairo',
    tipologia: ['città', 'musei', 'cultura islamica'],
    giorniConsigliati: '2-3 días, sin contar las pirámides',
    visitataPersonalmente: true,
    introduzione:
      "Veinte millones de habitantes, tráfico continuo y mil años de arquitectura islámica: El Cairo es la puerta de entrada al país y la ciudad donde están los dos grandes museos egipcios.",
    percheAndarci:
      "Por el Grand Egyptian Museum con el tesoro completo de Tutankamón, por el Cairo islámico entre mezquitas y madrasas mamelucas, por el Cairo copto y por la noche en el Khan el-Khalili.",
    cosaVedere: [
      "El Grand Egyptian Museum (GEM) en Guiza, con la escalinata monumental y las galerías de Tutankamón",
      "El Museo Egipcio de la plaza Tahrir, todavía lleno de piezas extraordinarias",
      "La Ciudadela de Saladino y la mezquita de Muhammad Ali",
      "El Cairo islámico: la mezquita de Ibn Tulun, el complejo del sultán Hassan, la calle al-Muizz",
      "El Cairo copto: la Iglesia Colgante y la sinagoga Ben Ezra",
      "El Museo Nacional de la Civilización Egipcia (NMEC), con la sala de las momias reales",
    ],
    cosaFare: [
      "Pasear por la noche por el bazar del Khan el-Khalili y tomar un té en el café El Fishawy",
      "Un atardecer en falúa por el Nilo desde la Corniche",
      "El espectáculo de danza sufí Tannoura en el Wekalet El Ghouri (conviene comprobar antes los días)",
    ],
    doveDormire:
      "Para quien tiene poco tiempo conviene dormir en Guiza, cerca de las pirámides y del GEM. Para quien se queda más, Zamalek (isla en el Nilo, tranquila y llena de locales) o Downtown. Económico: guesthouses con vistas a las pirámides en Nazlet el-Semman · gama media: hoteles de Zamalek y Garden City · lujo: Marriott Mena House en Guiza, los grandes hoteles del Nilo.",
    doveMangiare:
      "Koshari en Abou Tarek, en Downtown, ful y taameya en los puestos de la mañana, cocina egipcia tradicional en Zooba o Abou El Sid, pescado y mezze en los restaurantes de Zamalek.",
    comeArrivare: "Aeropuerto internacional de El Cairo (CAI); desde la primavera de 2025 también el Sphinx International Airport, cerca de Guiza, con algunos vuelos.",
    comeSpostarsi:
      "Uber y Careem, económicos y sin regateos. El metro es útil para Downtown y el Cairo copto (parada Mar Girgis). Evitar conducir.",
    periodoMigliore: "de octubre a abril",
    costi:
      "GEM unos 1.830 EGP (35 $) desde el 1 de noviembre de 2026, con franja horaria que hay que reservar online; Museo Egipcio de Tahrir unos 550 EGP; Ciudadela unos 550 EGP; NMEC unos 500 EGP (orientativos).",
    erroriDaEvitare: [
      "Llegar al GEM sin entrada reservada: las entradas son por franja horaria y los días de más afluencia se agotan",
      "Aceptar el «guía gratuito» que se ofrece en la calle o la «tienda de papiros de mi hermano»",
      "Tomar un taxi sin taxímetro sin acordar el precio: mejor Uber o Careem",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Gran Museo Egipcio (GEM)",
        "testo": "El museo nuevo cerca de las pirámides, con la escalinata monumental y las galerías dedicadas a Tutankamón, cuyos objetos se reúnen por primera vez en un solo lugar. Es el museo que hay que ver primero.",
        "come": "Está en Giza, a 30-60 minutos del centro en Uber o taxi. La entrada se compra solo en línea, en la web oficial, con fecha y franja horaria.",
        "quando": "Galerías abiertas de 9 a 18; miércoles y sábado hasta las 21 (2026). Mejor a la apertura.",
        "tempo": "3-4 horas",
        "url": "https://tickets.gem.eg/",
        "consiglio": "Reservar la franja horaria antes de partir y combinarlo con las pirámides, a pocos kilómetros.",
        "costo": "Los precios para extranjeros subieron el 1 de noviembre de 2026: consultarlos en la web oficial al reservar."
      },
      {
        "nome": "Museo Egipcio de la plaza Tahrir",
        "testo": "El museo histórico de 1902, con miles de piezas en salas llenas y de estilo algo antiguo. Sigue lleno de objetos extraordinarios incluso tras el traslado de las piezas de Tutankamón.",
        "come": "Metro hasta Sadat, y a pie desde la plaza. Audioguía o guía en el lugar.",
        "quando": "Abierto todos los días de 9 a 17, taquilla hasta las 16. Mejor a primera hora, antes de los grupos.",
        "tempo": "2 horas",
        "url": "https://egymonuments.gov.eg/en/museums/egyptian-museum/",
        "consiglio": "Elegir pocas salas y verlas bien, en vez de correr por todo el museo.",
        "costo": "550 EGP adultos extranjeros, 275 estudiantes; audioguía 75 EGP (2026)"
      },
      {
        "nome": "Ciudadela de Saladino y mezquita de Muhammad Ali",
        "testo": "La fortaleza del siglo XII en la colina que domina la ciudad, con la mezquita de estilo otomano y cúpulas de alabastro. Desde el borde la vista llega hasta las pirámides en los días claros.",
        "come": "Taxi o Uber hasta la entrada. Se camina dentro de la ciudadela, con calzado cómodo.",
        "quando": "Abierta todos los días de 8 a 17. La tarde tiene la mejor luz y el cielo menos brumoso.",
        "tempo": "2 horas",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/cairo-citadel/",
        "costo": "550 EGP adultos extranjeros, 275 estudiantes (2026)"
      },
      {
        "nome": "El Cairo islámico y la calle al-Muizz",
        "testo": "La calle peatonal con monumentos de los siglos XII-XVIII: mezquitas, madrasas, puertas y mausoleos. Un museo al aire libre, vivo de noche cuando las fachadas están iluminadas.",
        "come": "Se llega desde la zona de Khan el-Khalili. Se camina de norte a sur en 1-2 horas.",
        "quando": "Desde última hora de la tarde hasta la noche.",
        "tempo": "2-3 horas",
        "consiglio": "Subir a un minarete, donde se permite, da la mejor vista de la ciudad vieja."
      },
      {
        "nome": "Khan el-Khalili",
        "testo": "El gran bazar de El Cairo, con callejones de plata, lámparas, especias, telas. Es turístico, pero de noche se llena también de cairotas.",
        "come": "Taxi hasta la entrada, luego a pie. El café El Fishawy es la parada clásica.",
        "quando": "Noche, después de las 18.",
        "tempo": "2 horas",
        "consiglio": "Regatear siempre, partiendo de un tercio del precio dicho."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Gran Museo Egipcio",
          "Almuerzo en Zamalek o Downtown",
          "Tarde: Ciudadela y mezquita de Muhammad Ali",
          "Noche: calle al-Muizz y Khan el-Khalili"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba, o Museo Egipcio por la mañana",
          "Día 2: El Cairo copto e islámico, luego noche en falúa por el Nilo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Zamalek",
        "perChi": "quien quiere un barrio tranquilo y cuidado",
        "testo": "Isla en el Nilo con cafés, restaurantes y galerías. Más cara y algo lejos de las visitas, pero cómoda en Uber."
      },
      {
        "nome": "Downtown",
        "perChi": "quien quiere estar cerca del Museo Egipcio",
        "testo": "Edificios del siglo XIX, locales y ruido constante. Los hoteles son viejos y de gama media."
      },
      {
        "nome": "Guiza",
        "perChi": "quien quiere las pirámides y el GEM",
        "testo": "Zona cercana a los sitios, con hoteles con vistas a las pirámides. El centro queda lejos y el tráfico es pesado."
      }
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Arroz, lentejas, pasta, garbanzos y salsa picante de tomate: el plato callejero nacional, en Abou Tarek en Downtown."
      },
      {
        "nome": "Ful y taameya",
        "testo": "Habas guisadas y falafel de habas para el desayuno, en los quioscos de la mañana."
      },
      {
        "nome": "Molokhia",
        "testo": "Sopa verde de yute con pollo o conejo y arroz."
      },
      {
        "nome": "Om Ali",
        "testo": "Postre caliente de hojaldre, leche, frutos secos y pasas."
      }
    ],
    attenzioni: [
      "El guía gratuito que se ofrece en la calle, o la tienda de papiros o perfumes de un hermano, es un gancho para llevarlo a un comercio: rechazar con calma.",
      "Taxis sin taxímetro: acordar el precio o usar Uber y Careem.",
      "En los bazares el precio dicho es el doble o más: regatear y no comprar nada bajo presión.",
      "El tráfico es pesado: calcular mucho más tiempo del previsto entre una parada y otra."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "La mezquita-madrasa del sultán Hassan y la mezquita de al-Rifa'i con sus minaretes, en el Cairo islámico",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-04-cairo.jpg',
  },
  {
    slug: 'piramidi',
    paeseSlug: 'egitto',
    ordine: 2,
    nome: 'Pirámides: Guiza, Saqqara y Dahshur',
    tipologia: ['archeologia', 'deserto'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      "Las tres necrópolis reales del Imperio Antiguo al suroeste de El Cairo: Guiza con Keops, Kefrén, Micerinos y la Esfinge; Saqqara con la pirámide escalonada de Djoser; Dahshur con la pirámide Romboidal y la pirámide Roja.",
    percheAndarci:
      "Para ver en día y medio toda la evolución de la pirámide, desde la primera escalonada hasta la forma perfecta de Guiza, y para entrar en las cámaras interiores de Saqqara y Dahshur, mucho menos concurridas que las de Keops.",
    cosaVedere: [
      "La Gran Pirámide de Keops, también por dentro con entrada aparte",
      "La Esfinge y el templo del valle de Kefrén",
      "El mirador de las nueve pirámides, en el desierto detrás de Micerinos",
      "La pirámide escalonada de Djoser y las mastabas pintadas de Saqqara (Ti, Mereruka)",
      "El Serapeum de Saqqara, con los sarcófagos de los toros Apis",
      "La pirámide Roja de Dahshur, en la que se baja sin colas",
    ],
    cosaFare: [
      "Entrar a las 7, a la apertura, para tener una hora de buena luz y menos grupos",
      "Moverse por la meseta con el autobús eléctrico interno en lugar de con caballos y camellos",
    ],
    comeArrivare: "Guiza está a 30-60 minutos del centro de El Cairo según el tráfico; Saqqara y Dahshur a 45-60 minutos de Guiza, en coche con conductor o con una excursión.",
    comeSpostarsi:
      "En Guiza el autobús eléctrico interno conecta la entrada, las pirámides y la Esfinge; para Saqqara y Dahshur hace falta un coche con conductor para el día (aproximadamente 30-50 $).",
    periodoMigliore: "de octubre a abril, siempre a primera hora de la mañana",
    costi:
      "Meseta de Guiza unos 700 EGP; interior de la Gran Pirámide unos 1.500 EGP; Saqqara unos 450-600 EGP con las tumbas principales; Dahshur en torno a 150-200 EGP (orientativos, los precios cambian a menudo).",
    erroriDaEvitare: [
      "Creer a quien dice que «la entrada está cerrada» o que «hay que pasar por aquí»: es el primer gancho para el paseo de pago en camello",
      "Subirse a un camello sin haber acordado el precio total, la duración y qué incluye: la cifra se duplica para bajar",
      "Comprar la entrada para el interior de Keops pensando que se van a ver decoraciones: las cámaras están desnudas, el interés está en el corredor y en la Gran Galería",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Pirámides y Esfinge de Guiza",
        "testo": "La Gran Pirámide de Keops, las de Kefrén y Micerino y la Esfinge: el conjunto más famoso de Egipto, en la meseta al suroeste de El Cairo. Se puede entrar en la Gran Pirámide con una entrada aparte.",
        "come": "Desde Guiza o El Cairo en Uber o con conductor; se recorre a pie, en lanzadera eléctrica o a caballo.",
        "quando": "Abierto todos los días de 8 a 16. A la apertura la luz es mejor y hay menos grupos.",
        "tempo": "3-4 horas",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/giza-plateau/",
        "consiglio": "El mirador detrás de Micerino muestra las tres pirámides juntas, sin multitud.",
        "costo": "700 EGP adultos extranjeros, 350 estudiantes (2026). El interior de las pirámides se paga aparte: la Gran Pirámide cuesta 1.500 EGP desde 2025."
      },
      {
        "nome": "Saqqara",
        "testo": "La pirámide escalonada de Djoser, la construcción de piedra grande más antigua, y las mastabas pintadas de Ti y Mereruka con relieves muy hermosos.",
        "come": "En coche con conductor, 45-60 minutos desde Guiza.",
        "quando": "Abierto todos los días de 8 a 16. Mejor por la mañana.",
        "tempo": "2-3 horas",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/saqqara/",
        "consiglio": "Las tumbas pintadas valen más que la propia pirámide y tienen poquísima gente.",
        "costo": "600 EGP el recinto para adultos extranjeros; entrada combinada con tumbas de nobles, Mereruka y museo Imhotep 1.400 EGP (2026)"
      },
      {
        "nome": "Dahshur",
        "testo": "La Pirámide Roja y la Pirámide Romboidal, de Esnefru: los primeros intentos de una verdadera pirámide lisa. Poca gente, y en la Pirámide Roja se baja.",
        "come": "En coche con conductor, cerca de Saqqara.",
        "quando": "Abierto todos los días de 8 a 17. Mejor por la mañana, con menos calor.",
        "tempo": "1-2 horas",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/dahshur/",
        "consiglio": "Un excelente complemento de Saqqara para quien tiene un día entero con conductor.",
        "costo": "200 EGP adultos extranjeros (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Guiza a la apertura",
          "Almuerzo",
          "Tarde en Saqqara",
          "Regreso a El Cairo"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Guiza y Gran Museo Egipcio",
          "Día 2: Saqqara y Dahshur con conductor"
        ]
      }
    ],
    zone: [
      {
        "nome": "Guiza",
        "perChi": "quien quiere las pirámides desde la ventana",
        "testo": "Hoteles con vistas, muy cerca de la entrada y del GEM. Zona ruidosa y poco cuidada."
      },
      {
        "nome": "El Cairo",
        "perChi": "quien quiere otros barrios al alcance",
        "testo": "El día se hace en Uber o con conductor: más oferta de locales, pero 30-60 minutos de carretera."
      }
    ],
    sapori: [
      {
        "nome": "Koshari",
        "testo": "Plato de arroz, lentejas, pasta y salsa picante, para un almuerzo barato."
      },
      {
        "nome": "Pichón relleno (hamam mahshi)",
        "testo": "Un clásico egipcio, relleno de arroz o freekeh."
      },
      {
        "nome": "Té de menta",
        "testo": "Servido en cada parada, muy dulce."
      },
      {
        "nome": "Pan baladi",
        "testo": "Pan plano cocido en el momento en los hornos de los pueblos cercanos."
      }
    ],
    attenzioni: [
      "Quien dice que la entrada está cerrada o que hay que pasar por otro lado intenta llevarlo al paseo de pago en camello: ignorar.",
      "Camello y caballo: acordar precio total, duración y qué incluye, y preguntar qué pasa al bajar.",
      "El interior de la Gran Pirámide tiene cámaras desnudas: el interés está en el corredor y la Gran Galería. Si hay claustrofobia, pensarlo.",
      "No comprar papiros ni recuerdos en la entrada a los vendedores que se acercan."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Las pirámides de Guiza recortándose sobre el desierto en un día despejado",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-02-piramidi.jpg',
  },
  {
    slug: 'luxor',
    paeseSlug: 'egitto',
    ordine: 3,
    nome: 'Luxor',
    tipologia: ['archeologia', 'Nilo'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "La antigua Tebas, dividida en dos por el Nilo: en la orilla este los templos de los vivos, Karnak y Luxor; en la orilla oeste la ciudad de los muertos, con el Valle de los Reyes, el Valle de las Reinas y el templo de Hatshepsut.",
    percheAndarci:
      "Por la mayor concentración de monumentos del Egipto faraónico en un solo lugar, y por las tumbas pintadas que todavía conservan los colores originales.",
    cosaVedere: [
      "El complejo de Karnak y la sala hipóstila con 134 columnas",
      "El templo de Luxor, para ver al atardecer y con la iluminación nocturna",
      "El Valle de los Reyes: la entrada básica incluye tres tumbas, las de Tutankamón y Seti I se pagan aparte",
      "El templo funerario de Hatshepsut en Deir el-Bahari",
      "Medinet Habu, el templo de Ramsés III, con relieves todavía coloreados y pocos visitantes",
      "Los Colosos de Memnón y el poblado de los artesanos de Deir el-Medina",
    ],
    cosaFare: [
      "El vuelo en globo al amanecer sobre la orilla oeste",
      "Cruzar el Nilo en el ferri público o en falúa",
      "Una excursión de un día al templo de Dendera o de Abidos",
    ],
    doveDormire:
      "Orilla este por comodidad (restaurantes, templos a pie), orilla oeste por la calma y la cercanía a las tumbas. Económico: guesthouses en la orilla oeste · gama media: hoteles sobre el Nilo en la orilla este · lujo: Sofitel Winter Palace, Al Moudira en la orilla oeste.",
    doveMangiare:
      "Cocina egipcia casera en los restaurantes de la orilla oeste, pichón relleno y tajín; en la orilla este los locales con terraza frente al templo de Luxor.",
    comeArrivare: "Vuelo desde El Cairo (1 hora), tren diurno o nocturno desde El Cairo (9-10 horas), carretera desde el mar Rojo (4 horas desde Hurghada, 4-4,5 desde Marsa Alam).",
    comeSpostarsi:
      "En la orilla oeste hace falta un coche con conductor o un taxi para el día (aproximadamente 25-40 $); en la orilla este se anda a pie o en Uber. Calesas solo acordando el precio antes.",
    periodoMigliore: "de octubre a abril; en verano solo visitas entre el amanecer y las 11",
    costi:
      "Karnak unos 600 EGP, templo de Luxor unos 500 EGP, Valle de los Reyes unos 750 EGP (3 tumbas), tumba de Tutankamón unos 700 EGP, Seti I y Nefertari en torno a 2.000 EGP cada una, Hatshepsut unos 440 EGP; globo aproximadamente 50-100 $ (orientativos).",
    erroriDaEvitare: [
      "Ir al Valle de los Reyes a mediodía: entre las paredes de roca se superan los 40 °C ya en mayo",
      "Hacer fotos en las tumbas sin el permiso fotográfico si se exige: los guardianes cobran la «multa» en efectivo",
      "Elegir el globo solo por el precio más bajo: cuenta la compañía, y los vuelos se cancelan con viento",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Templo de Karnak",
        "testo": "El mayor complejo religioso del antiguo Egipto, construido a lo largo de más de 1.500 años. La sala hipóstila tiene 134 columnas de hasta 21 metros, cubiertas de jeroglíficos.",
        "come": "Desde la ciudad en taxi o calesa. Se camina por el sitio, y por la avenida de las esfinges desde el templo de Luxor si se quiere el recorrido completo.",
        "quando": "Abierto todos los días de 6 a 17. Llegar a la apertura: en verano es el único momento soportable.",
        "tempo": "2-3 horas",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/karnak/",
        "consiglio": "Volver por la noche para el espectáculo de luz y sonido, si está programado.",
        "costo": "600 EGP con el museo al aire libre, templo de Mut 200 EGP (adultos extranjeros, 2026)"
      },
      {
        "nome": "Templo de Luxor",
        "testo": "Un templo más pequeño, en medio de la ciudad, con estatuas de Ramsés II y un obelisco. De noche, iluminado, es hermosísimo.",
        "come": "A pie desde el paseo del río en la orilla este.",
        "quando": "Atardecer y noche.",
        "tempo": "1 hora",
        "costo": "500 EGP adultos extranjeros (2026)"
      },
      {
        "nome": "Valle de los Reyes",
        "testo": "Las tumbas de los faraones del Imperio Nuevo excavadas en la roca, con paredes pintadas aún coloridas. La entrada básica da acceso a tres tumbas, mientras que Tutankamón y otras se pagan aparte.",
        "come": "En la orilla oeste, en taxi o en tour. Se visita a pie, tumba por tumba.",
        "quando": "Abierto todos los días de 6 a 17. Llegar a la apertura: a mediodía hace mucho calor, ya en primavera.",
        "tempo": "2-3 horas",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/valley-of-the-kings/",
        "consiglio": "Elegir tumbas con decoración bien conservada, como Ramsés IV o Merenptah, y no solo la más famosa.",
        "costo": "750 EGP adultos extranjeros, 375 estudiantes, con tres tumbas; Tutankamón y otras tumbas aparte (2026)"
      },
      {
        "nome": "Templo de Hatshepsut",
        "testo": "El templo funerario de la reina-faraón en Deir el-Bahari, en terrazas bajo la pared de roca. La arquitectura parece muy moderna.",
        "come": "En la orilla oeste, junto al Valle de los Reyes, con lanzadera desde el aparcamiento.",
        "quando": "A primera hora.",
        "tempo": "1 hora",
        "costo": "440 EGP adultos extranjeros (2026)"
      },
      {
        "nome": "Medinet Habu y Colosos de Memnón",
        "testo": "El templo de Ramsés III con relieves aún coloreados y poquísimos visitantes, cerca de los dos colosos de Amenhotep III que vigilan la llanura.",
        "come": "En la orilla oeste, en taxi con las otras paradas.",
        "quando": "Media mañana o última hora de la tarde.",
        "tempo": "1-1,5 horas",
        "consiglio": "Medinet Habu es el templo más infravalorado de Luxor.",
        "costo": "Medinet Habu 220 EGP adultos extranjeros (2026); los Colosos se ven desde la carretera"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Amanecer: globo o Valle de los Reyes a la apertura",
          "Hatshepsut",
          "Medinet Habu y Colosos",
          "Tarde: Karnak y templo de Luxor al atardecer"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: orilla oeste",
          "Día 2: Karnak, templo de Luxor, luego excursión a Dendera o Abydos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Orilla este",
        "perChi": "quien quiere restaurantes y vida nocturna",
        "testo": "Cerca de Karnak y del templo de Luxor, con hoteles de todas las gamas y el paseo del río. Más turística y con más vendedores."
      },
      {
        "nome": "Orilla oeste",
        "perChi": "quien quiere calma",
        "testo": "Campo, casas y pequeñas casas de huéspedes cerca de las tumbas y los cultivos, con poco ruido."
      }
    ],
    sapori: [
      {
        "nome": "Pichón relleno",
        "testo": "El plato más típico de Luxor, en los restaurantes de la orilla oeste."
      },
      {
        "nome": "Tajín de carne",
        "testo": "Cocina egipcia casera, con verduras y salsa de tomate."
      },
      {
        "nome": "Ful y taameya",
        "testo": "Desayuno barato en los quioscos del mercado."
      },
      {
        "nome": "Karkadé",
        "testo": "Infusión fría o caliente de hibisco, en cada café."
      }
    ],
    attenzioni: [
      "Las normas sobre fotos en las tumbas cambian a menudo: preguntar en taquilla, nunca flash. Los guardias que abren un rincón cerrado o te hacen posar luego piden propina.",
      "Globos: elegir la compañía y no el precio más bajo, y dejar margen porque los vuelos se cancelan con viento.",
      "Calesas y vendedores del paseo del río parten de cifras altas: regatear y decidir antes.",
      "En verano las visitas se hacen del amanecer a las 11: después, 40 grados y más."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Las columnas papiriformes de la gran sala hipóstila del templo de Karnak, vistas desde abajo",
    immagine: '/images/viaggi/egitto-completo/giorno-14-luxor.jpg',
  },
  {
    slug: 'assuan-abu-simbel',
    paeseSlug: 'egitto',
    ordine: 4,
    nome: 'Asuán y Abu Simbel',
    tipologia: ['archeologia', 'Nilo', 'cultura nubiana'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "La ciudad más meridional del circuito, donde el Nilo se estrecha entre islas de granito y dunas, con los coloridos pueblos nubios de la orilla oeste. Desde aquí se sale hacia los templos de Ramsés II y Nefertari en Abu Simbel.",
    percheAndarci:
      "Por el ritmo más lento de Egipto, el templo de Philae en una isla del lago, la falúa al atardecer y Abu Simbel, el monumento trasladado pieza a pieza en los años sesenta para salvarlo del lago Nasser.",
    cosaVedere: [
      "Los dos templos de Abu Simbel, a 280 km al sur",
      "El templo de Philae, en barca desde el embarcadero de Shellal",
      "El obelisco inacabado en las canteras de granito",
      "El Museo Nubio",
      "El pueblo nubio de Gharb Soheil",
    ],
    cosaFare: [
      "Una falúa al atardecer alrededor de la isla Elefantina",
      "El espectáculo de luz y sonido en Abu Simbel, para quien duerme allí",
      "El 22 de febrero y el 22 de octubre el sol entra hasta el santuario del templo grande",
    ],
    doveDormire:
      "Económico: guesthouses nubias en la isla Elefantina o en Gharb Soheil · gama media: hoteles en la Corniche · lujo: Old Cataract (Sofitel Legendary). En Abu Simbel hay pocos alojamientos, entre ellos el ecolodge Eskaleh.",
    comeArrivare:
      "Vuelo desde El Cairo (1 h 25), tren nocturno con camarotes cama desde El Cairo o desde Guiza, crucero por el Nilo desde Luxor (3-4 noches). Para Abu Simbel: carretera de 3,5 horas con salida antes del amanecer, o bien vuelo de EgyptAir de 45 minutos.",
    comeSpostarsi: "Barcas públicas y privadas por el Nilo, taxis y Uber en la ciudad; para Abu Simbel minivan con conductor o excursión en grupo.",
    periodoMigliore: "de noviembre a marzo; en verano es el lugar más caluroso del país",
    costi:
      "Abu Simbel aproximadamente 750-850 EGP; Philae unos 550 EGP más la barca (a acordar, 300-500 EGP por barca); Museo Nubio unos 300 EGP; falúa aproximadamente 300-600 EGP la hora por barca (orientativos).",
    erroriDaEvitare: [
      "Hacer Abu Simbel en un día de verano sin contar con levantarse a las 3-4 y siete horas de carretera entre ida y vuelta",
      "Subirse a una falúa sin acordar si el precio es por persona o por barca, y por cuánto tiempo",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Abu Simbel",
        "testo": "Los dos templos de Ramsés II y Nefertari excavados en la roca, con estatuas colosales en la entrada. Fueron trasladados en los años sesenta para salvarlos del lago Nasser. El 22 de febrero y el 22 de octubre el sol entra hasta el santuario.",
        "come": "Desde Asuán 280 km: carretera de unas 3,5 horas en convoy con salida antes del amanecer, o vuelo de 45 minutos.",
        "quando": "Abierto todos los días de 6 a 17. Llegar a la apertura, antes de los autobuses de grupos.",
        "tempo": "1,5-2 horas en el lugar",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/abu-simbel/",
        "consiglio": "Quien pueda, que duerma en Abu Simbel para el espectáculo de luz y sonido y el amanecer.",
        "costo": "750 EGP adultos extranjeros, 375 estudiantes; 1.200 EGP el 22 de febrero y el 22 de octubre (2026)"
      },
      {
        "nome": "Templo de Filé",
        "testo": "El santuario de Isis en una isla, trasladado también tras la presa. Se llega en barca desde el embarcadero de Shellal y es muy fotogénico.",
        "come": "Taxi hasta el embarcadero, luego lancha, con el precio por acordar.",
        "quando": "Abierto todos los días de 7 a 16. Primera hora o primera tarde por la luz.",
        "tempo": "1,5 horas",
        "url": "https://egymonuments.gov.eg/en/archaeological-sites/philae/",
        "costo": "550 EGP adultos extranjeros, más la barca desde el muelle, a negociar (2026)"
      },
      {
        "nome": "Aldea nubia de Gharb Soheil",
        "testo": "Un pueblo de casas coloridas en la isla cerca de Asuán, con restaurantes y familias nubias.",
        "come": "En barca desde el paseo del río.",
        "quando": "Última hora de la tarde.",
        "tempo": "2 horas",
        "consiglio": "Almorzar en una casa nubia es la mejor forma de entender la zona."
      },
      {
        "nome": "Falúa al atardecer",
        "testo": "El barco de vela tradicional alrededor de la isla Elefantina y las islas de los jardines, para un paseo de una o dos horas.",
        "come": "Desde el paseo del río de Asuán.",
        "quando": "Atardecer.",
        "tempo": "1-2 horas",
        "consiglio": "Acordar si el precio es por barco o por persona, y cuánto dura."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Filé por la mañana, obelisco inacabado, falúa al atardecer",
          "Día 2: Abu Simbel al amanecer, regreso a mediodía"
        ]
      }
    ],
    zone: [
      {
        "nome": "Paseo del río de Asuán",
        "perChi": "quien quiere ver el Nilo",
        "testo": "Hoteles cerca del paseo y de las falúas. Cómodo para todo."
      },
      {
        "nome": "Abu Simbel",
        "perChi": "quien quiere el amanecer en los templos",
        "testo": "Pocos hoteles y un solo pueblo: útil para evitar el despertador a las 3."
      }
    ],
    sapori: [
      {
        "nome": "Cocina nubia",
        "testo": "Platos de pollo, pescado y arroz especiados, en las casas de Gharb Soheil."
      },
      {
        "nome": "Karkadé",
        "testo": "Infusión de hibisco, especialidad de Asuán."
      },
      {
        "nome": "Ful y taameya",
        "testo": "Desayuno barato en los quioscos."
      },
      {
        "nome": "Pescado del Nilo",
        "testo": "Servido a la parrilla en el paseo del río."
      }
    ],
    attenzioni: [
      "Abu Simbel en un día de verano significa despertador a las 3-4 y unas siete horas de carretera: tenerlo en cuenta.",
      "Precio de la falúa y de la barca a Filé: acordar antes, por barca o por persona.",
      "En verano Asuán es el lugar más caluroso del país: visitar al amanecer.",
      "Vendedores muy insistentes en el paseo del río: un no firme basta."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: "Los templos de Abu Simbel con las estatuas colosales de Ramsés II esculpidas en la roca",
    immagine: '/images/viaggi/egitto-completo/giorno-11-assuan-abu-simbel.jpg',
  },
  {
    slug: 'siwa',
    paeseSlug: 'egitto',
    ordine: 5,
    nome: 'Oasis de Siwa',
    tipologia: ['deserto', 'oasi', 'cultura berbera'],
    giorniConsigliati: '3 días más dos de viaje',
    visitataPersonalmente: true,
    introduzione:
      "Un oasis de palmeras y lagos salados a 50 km de la frontera libia, habitado por una comunidad de lengua bereber, al borde del Gran Mar de Arena.",
    percheAndarci:
      "Por un Egipto completamente distinto al de los templos: casas de barro salado, manantiales en los que bañarse, las dunas del Gran Mar de Arena y el templo del Oráculo donde Alejandro Magno fue proclamado hijo de Amón.",
    cosaVedere: [
      "La fortaleza de Shali, el casco viejo de kershef (barro y sal)",
      "El templo del Oráculo de Amón en Aghurmi",
      "La montaña de los muertos, Gebel al-Mawta, con tumbas pintadas",
      "El manantial de Cleopatra",
      "Los lagos salados, donde se flota como en el mar Muerto",
    ],
    cosaFare: [
      "Excursión en todoterreno por el Gran Mar de Arena con sandboard y atardecer sobre las dunas",
      "Una noche en un campamento de tiendas en el desierto",
      "Recorrer el oasis en bicicleta",
    ],
    doveDormire:
      "Económico: pequeños hoteles en el centro · gama media: ecolodges de estilo siwano fuera del centro · lujo: Adrère Amellal, sin electricidad, a la luz de las velas.",
    comeArrivare:
      "Autobús nocturno desde El Cairo (unas 10-12 horas) o bien en dos etapas pasando por Marsa Matruh; como alternativa, coche con conductor o excursión organizada. A lo largo de la carretera hay controles: pasaporte siempre a mano.",
    comeSpostarsi: "Bicicleta, tuk-tuk y carros tirados por burros en el oasis; todoterreno con conductor local para el desierto.",
    periodoMigliore: "de octubre a abril; las noches de invierno en el desierto bajan casi a 0 °C",
    costi:
      "Excursión de media jornada por el Gran Mar de Arena aproximadamente 20-35 $ por persona; el permiso para el desierto lo pide el operador local, que lo incluye en el precio (orientativo).",
    erroriDaEvitare: [
      "Ir al desierto con quien no tiene los permisos: las zonas hacia la frontera libia están controladas por el ejército",
      "Llevar ropa corta en el pueblo: Siwa es una comunidad conservadora, y también en el lago o en los manantiales se baña uno vestido",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fortaleza de Shali",
        "testo": "La antigua ciudadela de kershef, una mezcla de barro y sal, hoy en gran parte en ruinas tras las lluvias de 1926. Desde la cima se ve todo el oasis.",
        "come": "A pie desde el centro de Siwa.",
        "quando": "Atardecer.",
        "tempo": "1 hora"
      },
      {
        "nome": "Templo del Oráculo de Amón",
        "testo": "Las ruinas en la colina de Aghurmi donde Alejandro Magno vino a consultar el oráculo en el 331 a. C.",
        "come": "En bici o taxi desde el centro.",
        "quando": "Mañana o última hora de la tarde.",
        "tempo": "1 hora"
      },
      {
        "nome": "Desierto, lagos salados y fuente de Cleopatra",
        "testo": "Excursión en todoterreno por el Gran Mar de Arena con sandboard, atardecer en las dunas y baño en los lagos salados y en los manantiales, donde se flota.",
        "come": "Solo con un operador local, que tiene el permiso para el desierto.",
        "quando": "Tarde, con regreso al atardecer.",
        "tempo": "Medio día",
        "consiglio": "Preguntar si el baño y la cena están incluidos, y llevar una chaqueta para la noche."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: llegada, fortaleza de Shali, atardecer",
          "Día 2: Aghurmi, fuente de Cleopatra, desierto y noche en tienda",
          "Día 3: bicicleta por el oasis, regreso"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro de Siwa",
        "perChi": "quien quiere estar cerca de todo",
        "testo": "Hoteles y casas de huéspedes cerca del mercado y de la fortaleza. Sencillos."
      },
      {
        "nome": "Ecolodges en el oasis",
        "perChi": "quien quiere naturaleza y silencio",
        "testo": "Casas de barro entre las palmeras, más caras y poco cómodas de alcanzar a pie."
      }
    ],
    sapori: [
      {
        "nome": "Dátiles y aceitunas de Siwa",
        "testo": "El producto del oasis, vendido a granel en el mercado."
      },
      {
        "nome": "Aceite de oliva",
        "testo": "Prensado en el oasis, usado en la cocina y para la piel."
      },
      {
        "nome": "Té de menta",
        "testo": "Servido en los quioscos del pueblo."
      },
      {
        "nome": "Pan de Siwa",
        "testo": "Plano y redondo, cocido en hornos de leña."
      }
    ],
    attenzioni: [
      "El desierto hacia Libia lo controla el ejército: ir solo con operadores que tengan permisos.",
      "Siwa es una comunidad conservadora: cubrir hombros y rodillas, y bañarse vestido en los manantiales.",
      "Tener el pasaporte a mano en los controles.",
      "Las noches de invierno en el desierto bajan cerca de 0 °C."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-completo'],
    imageAlt: "Palmeras datileras reflejadas en un manantial del oasis de Siwa",
    immagine: '/images/viaggi/egitto-completo/giorno-07-siwa.jpg',
  },
  {
    slug: 'mar-rosso',
    paeseSlug: 'egitto',
    ordine: 6,
    nome: 'Mar Rojo: Hurghada, Marsa Alam y Sharm el-Sheikh',
    tipologia: ['mare', 'immersioni', 'snorkeling'],
    giorniConsigliati: '3-5 días',
    visitataPersonalmente: true,
    introduzione:
      "La costa egipcia del mar Rojo y la punta del Sinaí: arrecife de coral muy cerca de la orilla, pecios, tiburones pelágicos mar adentro y un agua que no baja de los 21-22 °C ni en invierno.",
    percheAndarci:
      "Para cerrar el viaje arqueológico con el mar, o para algunas de las inmersiones más famosas del mundo: el pecio del Thistlegorm, Ras Mohammed, Elphinstone, las islas Brothers y Daedalus.",
    cosaVedere: [
      "Hurghada: las islas Giftun y la bahía de Orange Bay, el pecio del Thistlegorm en una jornada larga",
      "Marsa Alam: la bahía de Abu Dabbab con tortugas y, con suerte, el dugongo; el arrecife de Dolphin House (Samadai); el parque de Wadi el Gemal",
      "Sharm el-Sheikh: el parque nacional de Ras Mohammed y el estrecho de Tirán",
      "Dahab: el Blue Hole y los arrecifes desde la orilla",
    ],
    cosaFare: [
      "Snorkel desde la orilla en el arrecife del resort",
      "Curso Open Water o Advanced con un centro PADI o SSI",
      "Crucero de buceo (liveaboard) de una semana en el sur: Brothers, Daedalus, Elphinstone",
    ],
    doveDormire:
      "Hurghada: El Gouna y Sahl Hasheesh para la gama media y alta, la ciudad de Hurghada para la gama económica. Marsa Alam: resorts aislados con el arrecife delante, ecolodges como el de Wadi Lahami para los buceadores. Sharm: Naama Bay para la vida nocturna, Nabq para los resorts.",
    comeArrivare:
      "Vuelos directos desde Italia a Hurghada, Marsa Alam y Sharm el-Sheikh (muchos chárteres de temporada); vuelos internos desde El Cairo; desde Luxor 4 horas de carretera hasta Hurghada, 4-4,5 hasta Marsa Alam.",
    comeSpostarsi: "Traslados organizados por el resort, taxis y minivans con conductor; para las excursiones en barco se sale de los puertos turísticos.",
    periodoMigliore:
      "mar cálido de mayo a noviembre; de diciembre a marzo agua en torno a 22 °C y viento fuerte, con jornadas de traje de neopreno de 5 mm",
    costi:
      "Excursión en barco de snorkel con almuerzo aproximadamente 30-50 $; inmersión suelta 35-55 $, paquete de 10 inmersiones 300-400 $; curso Open Water 400-550 $; liveaboard de 7 noches 1.000-1.800 € más tasas del parque (orientativos).",
    erroriDaEvitare: [
      "Elegir Sharm pensando en ir cómodamente a Luxor: desde el Sinaí hace falta un vuelo, casi siempre vía El Cairo",
      "Tocar o caminar sobre el coral y comprar conchas o corales: está prohibido y la exportación se confisca en el aeropuerto",
      "Reservar un liveaboard en el sur sin el título y el número de inmersiones exigidos (normalmente Advanced y al menos 50 inmersiones)",
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Hurghada y las islas Giftun",
        "testo": "El mayor polo turístico, con barcos de snorkel a las islas Giftun y a Orange Bay, y excursiones de un día al pecio del Thistlegorm.",
        "come": "Excursiones que se reservan con un operador local desde el propio hotel.",
        "quando": "Todo el año, con agua más fría de diciembre a marzo.",
        "tempo": "Un día"
      },
      {
        "nome": "Marsa Alam, Abu Dabbab y Dolphin House",
        "testo": "Más al sur y más tranquila: la bahía de Abu Dabbab con tortugas y, con suerte, el dugongo, y el arrecife de Dolphin House.",
        "come": "En coche desde Luxor en unas 4 horas, o con vuelos directos.",
        "quando": "A primera hora, cuando los delfines descansan.",
        "tempo": "Un día",
        "consiglio": "La mejor opción para un snorkel de calidad."
      },
      {
        "nome": "Sharm el-Sheikh y Ras Mohammed",
        "testo": "Buceo y snorkel en el parque nacional de Ras Mohammed y en el estrecho de Tirán, con algunos de los mejores arrecifes del Mar Rojo.",
        "come": "Vuelos directos desde Italia y desde El Cairo.",
        "quando": "Todo el año.",
        "tempo": "Un día"
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: snorkel desde la orilla del resort",
          "Día 2: barco a las islas o a Ras Mohammed",
          "Día 3: curso o inmersiones"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hurghada",
        "perChi": "quien quiere mucha oferta y precios bajos",
        "testo": "Resorts por todas partes y vida nocturna, con la costa muy edificada."
      },
      {
        "nome": "Marsa Alam",
        "perChi": "quien quiere arrecifes y tranquilidad",
        "testo": "Resorts en el arrecife, lejos de las ciudades: ideal para el snorkel."
      },
      {
        "nome": "Sharm el-Sheikh",
        "perChi": "quien quiere buceo y grandes resorts",
        "testo": "Muchos resorts y centros de buceo, parques marinos cerca."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "Elegido en el mercado y cocinado en los restaurantes junto al mar."
      },
      {
        "nome": "Sayadeya",
        "testo": "Pescado con arroz especiado y cebolla, de cocina costera."
      },
      {
        "nome": "Shawarma",
        "testo": "Para una comida rápida lejos de los resorts."
      },
      {
        "nome": "Karkadé",
        "testo": "Bebida fría de hibisco."
      }
    ],
    attenzioni: [
      "No tocar ni pisar el coral y no comprar conchas ni corales: la exportación se confisca en el aeropuerto.",
      "Del Sinaí a Luxor casi siempre hace falta un vuelo vía El Cairo: no contar con la carretera.",
      "Los barcos de buceo con alojamiento (liveaboard) del sur piden título Advanced y un cierto número de inmersiones.",
      "De diciembre a marzo el agua está a unos 22 °C y el viento es fuerte: hace falta un traje de 5 mm."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Corales de mesa y agua turquesa en un arrecife del mar Rojo",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg',
  },
]
