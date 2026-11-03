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
    esperienzeSlugs: [],
    tripSlugs: ['egitto-mare-luxor-cairo', 'egitto-completo'],
    imageAlt: "Corales de mesa y agua turquesa en un arrecife del mar Rojo",
    immagine: '/images/viaggi/egitto-mare-luxor-cairo/giorno-09-mar-rosso.jpg',
  },
]
