import type { Destinazione } from '@/lib/types'

export const destinazioniTurchia: Destinazione[] = [
  {
    slug: 'istanbul',
    paeseSlug: 'turchia',
    ordine: 1,
    nome: 'Estambul',
    tipologia: ['città', 'storia', 'cibo'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    introduzione:
      'La antigua Bizancio, luego Constantinopla, dividida por el Bósforo entre Europa y Asia: la península histórica de Sultanahmet, los barrios de Beyoğlu y Karaköy, Kadıköy en el lado asiático.',
    percheAndarci:
      'Por Santa Sofía, el Topkapı y la Süleymaniye, por los bazares, por los ferris del Bósforo y por una de las cocinas callejeras más ricas del Mediterráneo.',
    cosaVedere: [
      'Santa Sofía, donde los turistas visitan las galerías superiores',
      'La Mezquita Azul y el Hipódromo',
      'La Cisterna Basílica',
      'El palacio de Topkapı con el harén',
      'La mezquita de Süleymaniye, obra maestra de Sinan',
      'El Gran Bazar y el Bazar de las Especias',
      'Chora (Kariye), con los mosaicos bizantinos reabiertos en 2024',
    ],
    cosaFare: [
      'El ferri público por el Bósforo hasta Anadolu Kavağı',
      'Cruzar en ferri de Eminönü a Kadıköy para ir al mercado del lado asiático',
      'Un hammam histórico',
      'La puesta de sol desde la torre de Gálata o desde una terraza de Karaköy',
    ],
    doveDormire:
      'Sultanahmet para estar a pie de los monumentos, Karaköy y Gálata para locales y vida nocturna, Kadıköy para un Estambul más local. Económicas: pequeños hoteles de Sultanahmet y Fatih · gama media: hoteles boutique de Karaköy · lujo: hoteles históricos en el Bósforo.',
    doveMangiare:
      'Balık ekmek (bocadillo de pescado) en Eminönü, kebab de Adana y lahmacun en las lokanta, meze y rakı en las meyhane de Beyoğlu, desayuno turco en Kadıköy, baklava en Karaköy Güllüoğlu.',
    comeArrivare: 'Aeropuerto de Estambul (IST), conectado por el metro M11 y los autobuses Havaist; aeropuerto Sabiha Gökçen (SAW) en el lado asiático.',
    comeSpostarsi:
      'Istanbulkart recargable para metro, tranvía T1, funiculares y ferris; taxi con las apps BiTaksi o Uber, que en Estambul llama a los taxis amarillos.',
    periodoMigliore: 'abril-junio y septiembre-noviembre',
    costi:
      'Santa Sofía 25 € para los turistas; Topkapı con harén en torno a 50 €; Museum Pass Istanbul en torno a 105 € por 5 días (precios indicativos, en euros).',
    erroriDaEvitare: [
      'Aceptar la invitación de un desconocido a tomar algo en un local: es la estafa de la cuenta inflada, frecuente en Taksim y Sultanahmet',
      'Recoger el cepillo que un limpiabotas deja caer delante de ti: es el pretexto para un lustrado de pago',
      'Comer en los restaurantes de Sultanahmet sin precios a la vista',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Santa Sofía",
        "testo": "La basílica construida por Justiniano en 537, durante casi mil años la iglesia más grande del mundo, luego mezquita y museo, hoy de nuevo mezquita. Los turistas extranjeros visitan las galerías superiores con los mosaicos bizantinos.",
        "come": "Tranvía T1 hasta Sultanahmet. Entrada separada para turistas; ropa que cubra, mujeres con la cabeza cubierta.",
        "quando": "A primera hora. Cerrada a los turistas durante las oraciones, en particular el viernes a mediodía.",
        "tempo": "1-1,5 horas",
        "consiglio": "Comprobar antes los horarios en el sitio oficial, que cambian con las normas de acceso.",
        "costo": "25 € para visitantes extranjeros, recorrido de las galerías superiores (2026)"
      },
      {
        "nome": "Mezquita Azul e Hipódromo",
        "testo": "La mezquita de Sultanahmet, de principios del siglo XVII, con seis minaretes y el interior revestido de azulejos azules de Iznik. Delante, la plaza del antiguo hipódromo con el obelisco egipcio.",
        "come": "A pie desde Santa Sofía. Zapatos fuera, hombros y piernas cubiertos; mujeres con la cabeza cubierta.",
        "quando": "Fuera de las cinco oraciones, que cierran la entrada a los turistas.",
        "tempo": "45 minutos",
        "costo": "Entrada gratuita"
      },
      {
        "nome": "Palacio de Topkapı y Harén",
        "testo": "La residencia de los sultanes otomanos durante casi cuatro siglos: patios, pabellones, tesoro y Harén, con una bonita vista al Bósforo.",
        "come": "A pie desde Santa Sofía. La entrada para extranjeros incluye el Harén y Santa Irene; también se compra en línea.",
        "quando": "Cerrado los martes. Llegar a la apertura de las 9: en otoño e invierno la taquilla cierra pronto.",
        "tempo": "2-3 horas",
        "url": "https://muze.gov.tr/",
        "consiglio": "Pasar primero por el Harén y el Tesoro, que tienen cola, y luego los patios.",
        "costo": "2.750 TL con Harén y Santa Irene (2026)"
      },
      {
        "nome": "Cisterna Basílica",
        "testo": "Un enorme depósito subterráneo bizantino del siglo VI con 336 columnas, de luz tenue. En la base de dos columnas hay cabezas de Medusa.",
        "come": "A pie desde Santa Sofía. Entrada que reservar en línea en temporada alta.",
        "quando": "A primera hora o por la noche, cuando hay menos cola.",
        "tempo": "45 minutos",
        "consiglio": "Evitar el fin de semana y las horas centrales.",
        "costo": "1.950 TL de día, 3.000 TL en la franja nocturna (2026)"
      },
      {
        "nome": "Gran Bazar y Bazar de las Especias",
        "testo": "El mercado cubierto con más de 4.000 tiendas de alfombras, cerámicas, joyas; un poco más allá, el de las especias con té, delicias turcas y frutos secos.",
        "come": "Tranvía T1 hasta Beyazıt-Kapalıçarşı, o a pie desde Santa Sofía en 15 minutos.",
        "quando": "Todo el día; el Gran Bazar cierra el domingo.",
        "tempo": "2 horas",
        "consiglio": "El Bazar de las Especias es menos turístico: ir con calma y probar antes de comprar."
      },
      {
        "nome": "Torre de Gálata",
        "testo": "La torre de piedra genovesa de 1348 sobre Karaköy, de unos 67 metros. Desde el balcón de arriba se ven el Cuerno de Oro, el Bósforo y la península histórica con cúpulas y minaretes. Dentro hay un pequeño museo.",
        "come": "Tranvía T1 hasta Karaköy y subida a pie por las callejuelas, o el funicular histórico Tünel. Se sube en ascensor y luego por una escalera.",
        "quando": "A la apertura o en la última hora antes del cierre: a mediodía la cola puede durar una hora.",
        "tempo": "1 hora con la cola",
        "costo": "30 € para visitantes extranjeros (2026)",
        "url": "https://muze.gov.tr/",
        "consiglio": "El balcón es estrecho y de sentido único: la mejor vista de la península histórica está en el lado sur."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Santa Sofía y Mezquita Azul",
          "Cisterna Basílica",
          "Tarde: Topkapı",
          "Noche: atardecer sobre el Bósforo y cena en Karaköy"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Sultanahmet como arriba",
          "Día 2: Süleymaniye, Gran Bazar, Bazar de las Especias, ferry a Kadıköy",
          "Día 3: Gálata, Beyoğlu, Chora (Kariye) y crucero por el Bósforo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Sultanahmet",
        "perChi": "quien tiene poco tiempo y quiere estar entre los monumentos",
        "testo": "Se va a pie a casi todo. Es turístico, con restaurantes caros y vendedores insistentes; por la noche se apaga pronto."
      },
      {
        "nome": "Gálata / Karaköy",
        "perChi": "quien quiere locales, cafés y vida nocturna",
        "testo": "Barrio de moda, con hoteles boutique y terrazas. Las cuestas son empinadas y de noche es ruidoso."
      },
      {
        "nome": "Beyoğlu / Taksim",
        "perChi": "quien quiere marcha y conexiones",
        "testo": "El corazón de la vida nocturna, cerca de metro y tranvía. Ruidoso y menos cuidado."
      }
    ],
    sapori: [
      {
        "nome": "Balık ekmek",
        "testo": "Bocadillo de pescado a la parrilla, en el puente de Gálata y en Eminönü."
      },
      {
        "nome": "Meze y rakı",
        "testo": "Platillos fríos y aguardiente de anís en las meyhane de Beyoğlu."
      },
      {
        "nome": "Börek y simit",
        "testo": "Hojaldre salado y rosca de sésamo, para el desayuno o un descanso."
      },
      {
        "nome": "Baklava y lokum",
        "testo": "Dulces con pistacho y miel, en Karaköy Güllüoğlu y en las pastelerías históricas."
      }
    ],
    attenzioni: [
      "Estafa de la cuenta inflada: quien invita a beber en un local desconocido lleva a una cuenta enorme, frecuente en Taksim y Sultanahmet.",
      "El limpiabotas que deja caer el cepillo luego pide un lustrado de pago: no recogerlo.",
      "Restaurantes de Sultanahmet sin precios expuestos: pedir la carta con precios antes de sentarse.",
      "Taxis: usar el taxímetro o BiTaksi y Uber; evitar los taxis parados frente a los monumentos."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Santa Sofía vista desde el noroeste, con la gran cúpula y los cuatro minaretes',
    immagine: '/images/viaggi/turchia-itinerario/giorno-02-istanbul.jpg',
  },
  {
    slug: 'cappadocia',
    paeseSlug: 'turchia',
    ordine: 2,
    nome: 'Capadocia',
    tipologia: ['paesaggio', 'trekking', 'storia'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      'Una meseta de toba volcánica que la erosión ha esculpido en chimeneas de hadas, valles y pináculos, con iglesias rupestres bizantinas y ciudades subterráneas.',
    percheAndarci:
      'Por los globos al amanecer, las iglesias con frescos del museo al aire libre de Göreme, los paseos por los valles y las noches en un hotel excavado en la roca.',
    cosaVedere: [
      'El museo al aire libre de Göreme y la Iglesia Oscura',
      'La ciudadela de Uçhisar',
      'El Valle Rojo y el Valle Rosa al atardecer',
      'Paşabağ (valle de los Monjes) y el valle de Devrent',
      'Las ciudades subterráneas de Derinkuyu y Kaymaklı',
      'El valle de Ihlara',
    ],
    cosaFare: [
      'El vuelo en globo al amanecer',
      'Trekking por el Valle del Amor y el Valle de las Palomas',
      'Paseo a caballo o en quad al atardecer',
    ],
    doveDormire:
      'Göreme por comodidad, Uçhisar y Ortahisar por las vistas y la calma, Ürgüp por restaurantes y bodegas. Económicas: pensiones de Göreme · gama media: cave hotels de Göreme y Uçhisar · lujo: Argos in Cappadocia, Museum Hotel.',
    doveMangiare:
      'Testi kebab cocinado en vasija de barro, mantı (raviolis con yogur), pide, los vinos de Ürgüp y Uçhisar.',
    comeArrivare: 'Vuelos desde Estambul a Kayseri (ASR, 1 hora de traslado) o Nevşehir (NAV, 40 minutos); autobuses nocturnos desde Estambul (unas 10-11 horas).',
    comeSpostarsi: 'Coche de alquiler o tours de un día (Red Tour, Green Tour); los dolmuş conectan Göreme, Uçhisar, Avanos y Ürgüp.',
    periodoMigliore: 'abril-junio y septiembre-octubre; en invierno hay nieve y el paisaje es preciosísimo, pero se cancelan más vuelos en globo',
    costi:
      'Globo, de forma indicativa, 180-350 € por persona según la temporada; museo al aire libre de Göreme en torno a 20-25 €; Derinkuyu en torno a 15-20 €; Museum Pass Cappadocia en torno a 45-50 € (indicativos).',
    erroriDaEvitare: [
      'Reservar el globo para la última mañana: con viento los vuelos se cancelan, y conviene tener al menos un día de reserva',
      'Elegir al operador solo por el precio: cuentan la licencia y el número de pasajeros por cesta',
      'Visitar el museo al aire libre a mediodía, cuando llegan todos los grupos',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Museo al aire libre de Göreme",
        "testo": "Un grupo de iglesias rupestres bizantinas con frescos desde el siglo XI, excavadas en conos de roca. La Iglesia Oscura (Karanlık) tiene los colores mejor conservados.",
        "come": "Desde Göreme a pie o en lanzadera, a un kilómetro del centro.",
        "quando": "A la apertura, antes de los grupos organizados.",
        "tempo": "1,5-2 horas",
        "url": "https://muze.gov.tr/",
        "consiglio": "La Iglesia Oscura tiene entrada aparte, pero los colores valen el gasto.",
        "costo": "20 € para visitantes extranjeros; Iglesia Oscura aparte (2026). Para 2027 el ministerio ha anunciado 22 €."
      },
      {
        "nome": "Globo aerostático al amanecer",
        "testo": "El vuelo sobre los valles y las chimeneas de hadas al salir el sol es la razón por la que muchos vienen aquí.",
        "come": "Se reserva con un operador con licencia, con recogida en el hotel antes del amanecer.",
        "quando": "Al amanecer, todo el año si el tiempo lo permite. Con viento fuerte se cancelan los vuelos, más a menudo en invierno.",
        "tempo": "1 hora de vuelo, 3-4 horas en total",
        "consiglio": "Reservar para los primeros días y tener uno de reserva: los vuelos se cancelan con viento."
      },
      {
        "nome": "Valle Rojo y Valle Rosa",
        "testo": "Senderos entre rocas rosas y rojas con iglesias excavadas en la roca, hermosos al atardecer.",
        "come": "Salida a pie desde Göreme o en coche hasta un mirador.",
        "quando": "Atardecer.",
        "tempo": "2-3 horas"
      },
      {
        "nome": "Derinkuyu y Kaymaklı",
        "testo": "Las ciudades subterráneas de varios pisos, excavadas por los habitantes para protegerse de los ataques. Se baja por corredores estrechos hasta decenas de metros.",
        "come": "En coche o en tour desde Göreme, unos 40 minutos.",
        "quando": "A primera hora para evitar la multitud en los corredores.",
        "tempo": "1-1,5 horas",
        "url": "https://muze.gov.tr/",
        "consiglio": "Quien sufre de claustrofobia que se salte Derinkuyu y elija Kaymaklı, algo más ancha.",
        "costo": "13 € cada una para visitantes extranjeros (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: globo, museo al aire libre de Göreme, Valle Rojo al atardecer",
          "Día 2: Derinkuyu, valle de Ihlara, Uçhisar"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: trekking por el Valle del Amor y de las Palomas, atardecer en Uçhisar"
        ]
      }
    ],
    zone: [
      {
        "nome": "Göreme",
        "perChi": "quien quiere estar cerca de todo",
        "testo": "Hoteles en cueva, restaurantes y salidas de los globos. El más turístico."
      },
      {
        "nome": "Uçhisar",
        "perChi": "quien quiere vistas y calma",
        "testo": "Pueblo bajo el castillo, hoteles con encanto y terraza panorámica."
      },
      {
        "nome": "Ürgüp / Mustafapaşa",
        "perChi": "quien quiere un sitio menos turístico",
        "testo": "Pueblos más tranquilos, con restaurantes locales y vino."
      }
    ],
    sapori: [
      {
        "nome": "Testi kebab",
        "testo": "Carne y verduras cocidas en una vasija de barro que se rompe en la mesa."
      },
      {
        "nome": "Mantı",
        "testo": "Raviolis pequeños con yogur y mantequilla especiada."
      },
      {
        "nome": "Vinos de Capadocia",
        "testo": "Tintos de Öküzgözü y blancos de Emir, en las bodegas de Ürgüp y Uçhisar."
      },
      {
        "nome": "Pide",
        "testo": "Pizza turca en forma de barca con queso o carne, en hornos locales."
      }
    ],
    attenzioni: [
      "Globo la última mañana: con viento se cancela, así que es mejor tener uno de reserva.",
      "Elegir el operador por la licencia y los pasajeros por cesta, no solo por el precio.",
      "Museo al aire libre a mediodía: llegan todos los grupos, mejor a la apertura.",
      "Alquiler de quads y caballos: comprobar el estado de los vehículos y el seguro antes de partir."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Globos sobre los valles de toba del parque nacional de Göreme, en Capadocia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-06-cappadocia.jpg',
  },
  {
    slug: 'pamukkale',
    paeseSlug: 'turchia',
    ordine: 3,
    nome: 'Pamukkale y Hierápolis',
    tipologia: ['paesaggio', 'archeologia', 'terme'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione:
      'Una colina de terrazas de travertino blanco formadas por fuentes termales, con las ruinas de la ciudad romana de Hierápolis en lo alto.',
    percheAndarci:
      'Para caminar descalzo por las pozas calcáreas, por el teatro romano de Hierápolis y por la antigua piscina de Cleopatra, con las columnas sumergidas.',
    cosaVedere: [
      'Las terrazas de travertino',
      'El teatro y la necrópolis de Hierápolis',
      'La piscina antigua (Antique Pool), con entrada aparte',
      'El martyrion de San Felipe',
    ],
    cosaFare: ['Subir descalzo desde abajo al atardecer', 'Un baño en la piscina antigua'],
    doveDormire: 'El pueblo de Pamukkale, a los pies de las terrazas, con pensiones y pequeños hoteles con piscina termal.',
    comeArrivare: 'Aeropuerto de Denizli Çardak, luego 1 hora por carretera; autobuses desde Göreme (nocturno, unas 9-10 horas), desde Selçuk (3 horas) y desde Antalya (4 horas).',
    comeSpostarsi: 'A pie; dolmuş a Denizli.',
    periodoMigliore: 'primavera y otoño; en verano las terrazas blancas deslumbran y queman',
    costi: 'Entrada a Pamukkale-Hierápolis en torno a 30 €; piscina antigua aparte, en torno a 10-15 € (indicativos).',
    erroriDaEvitare: [
      'Subir a mediodía en verano: el reflejo del blanco es cegador',
      'Esperar que todas las pozas estén llenas: muchas se dejan secas por turnos para preservar el travertino',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Terrazas de travertino",
        "testo": "Las pozas blancas de caliza a lo largo de la pendiente, llenas por las fuentes calientes. Se sube descalzo, porque no se admiten zapatos sobre el travertino.",
        "come": "Entrada por el sur o el norte del sitio; autobús o coche hasta el aparcamiento.",
        "quando": "Atardecer, con la luz sobre el blanco. A mediodía en verano deslumbra.",
        "tempo": "1-2 horas",
        "url": "https://muze.gov.tr/",
        "consiglio": "Llevar toalla y traje de baño: muchas pozas se cierran por turnos.",
        "costo": "30 € por Hierápolis y los travertinos, entrada única (2026). Para 2027 se han anunciado 35 €."
      },
      {
        "nome": "Hierápolis y Piscina Antigua",
        "testo": "Las ruinas de la ciudad romana sobre las terrazas: el teatro, la necrópolis, el martyrion de San Felipe y la piscina de agua caliente con columnas antiguas en el fondo.",
        "come": "Se camina por el sitio. La piscina tiene entrada aparte.",
        "quando": "A primera hora o al final de la tarde.",
        "tempo": "2 horas",
        "url": "https://muze.gov.tr/",
        "costo": "Incluido en la entrada de los travertinos; Piscina Antigua aparte"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Hierápolis, teatro y necrópolis",
          "Piscina Antigua",
          "Tarde: subida por las terrazas",
          "Atardecer sobre el travertino"
        ]
      }
    ],
    zone: [
      {
        "nome": "Pueblo de Pamukkale",
        "perChi": "quien quiere estar bajo las terrazas",
        "testo": "Pensiones familiares, piscinas termales y restaurantes sencillos."
      },
      {
        "nome": "Karahayıt",
        "perChi": "quien quiere baños termales",
        "testo": "Pueblo cercano con termas y aguas rojas ricas en hierro."
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Masa fina rellena de queso o espinacas, cocida al momento."
      },
      {
        "nome": "Kebab de Denizli",
        "testo": "Carne a la brasa con ensalada y pan caliente."
      },
      {
        "nome": "Ayran",
        "testo": "Yogur líquido salado, para el calor."
      },
      {
        "nome": "Té turco",
        "testo": "En vaso de tulipán, en todas partes."
      }
    ],
    attenzioni: [
      "Subir a mediodía en verano: el reflejo del blanco es cegador y el calor quema.",
      "Esperar que todas las pozas estén llenas: muchas se dejan secas por turnos para proteger el travertino.",
      "Las terrazas se suben descalzo: llevar calcetines para los tramos calientes."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Las pozas de travertino blanco de Pamukkale llenas de agua azulada',
    immagine: '/images/viaggi/turchia-itinerario/giorno-08-pamukkale.jpg',
  },
  {
    slug: 'efeso',
    paeseSlug: 'turchia',
    ordine: 4,
    nome: 'Éfeso, Selçuk y Şirince',
    tipologia: ['archeologia', 'borghi'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La ciudad romana mejor conservada del Mediterráneo oriental, con la biblioteca de Celso y el gran teatro, a pocos kilómetros de la ciudad de Selçuk y del pueblo de colina de Şirince.',
    percheAndarci:
      'Para recorrer la calle de los Curetes hasta la biblioteca de Celso, ver los frescos y los mosaicos de las casas en terraza y pasar una tarde entre las casas griegas de Şirince.',
    cosaVedere: [
      'La biblioteca de Celso y el gran teatro de Éfeso',
      'Las casas en terraza, con entrada aparte',
      'La basílica de San Juan y el castillo de Selçuk',
      'El museo de Éfeso en Selçuk',
      'La casa de la Virgen (Meryem Ana Evi)',
      'Afrodisias, en el camino desde Pamukkale',
    ],
    cosaFare: ['Entrar por la puerta alta y bajar hacia la biblioteca', 'Probar los vinos de fruta en Şirince'],
    doveDormire: 'Selçuk por comodidad y precios, Şirince por la calma; Kuşadası para quien quiera el mar cerca.',
    comeArrivare: 'Aeropuerto de Esmirna (1 hora); tren Esmirna-Selçuk; autobús desde Pamukkale.',
    comeSpostarsi: 'Taxi o dolmuş de Selçuk a la entrada alta de Éfeso (pocos km); coche de alquiler.',
    periodoMigliore: 'abril-junio y septiembre-octubre, siempre a la apertura',
    costi: 'Éfeso en torno a 40 €, casas en terraza en torno a 15 € (indicativos, en euros).',
    erroriDaEvitare: [
      'Entrar a media mañana en temporada alta, cuando llegan los pasajeros de los cruceros de Kuşadası',
      'Saltarse las casas en terraza para ahorrar: son la parte más bonita del sitio',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Éfeso",
        "testo": "La gran ciudad grecorromana con la Biblioteca de Celso, el teatro de unas 25.000 plazas, la calle de los Curetes y las Casas de las Terrazas con mosaicos y frescos.",
        "come": "A 3 km de Selçuk, en taxi o dolmuş; la entrada alta evita la subida.",
        "quando": "A la apertura, sobre todo cuando llegan los cruceros desde Kuşadası.",
        "tempo": "2-3 horas",
        "url": "https://muze.gov.tr/",
        "consiglio": "Las Casas de las Terrazas tienen entrada aparte y son lo más bello del sitio.",
        "costo": "40 € con el museo de experiencia de Éfeso; Casas Adosadas aparte. Combinada con Casas Adosadas, museo de Éfeso y San Juan 65 € (2026)."
      },
      {
        "nome": "Basílica de San Juan y castillo de Selçuk",
        "testo": "La basílica del siglo VI sobre la tumba tradicional del apóstol, con el castillo en la colina.",
        "come": "A pie desde Selçuk.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "Casa de la Virgen María (Meryem Ana)",
        "testo": "El santuario en las colinas sobre Éfeso donde, según la tradición, vivió la Virgen.",
        "come": "En taxi o en tour desde Selçuk.",
        "quando": "Mañana.",
        "tempo": "45 minutos"
      },
      {
        "nome": "Şirince",
        "testo": "Pequeño pueblo de casas de piedra en la colina, con vinos de fruta y tiendas.",
        "come": "Dolmuş o taxi desde Selçuk, 8 km.",
        "quando": "Tarde.",
        "tempo": "1-2 horas",
        "consiglio": "Probar los vinos de fruta antes de comprar."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Éfeso a la apertura y Casas de las Terrazas",
          "Almuerzo en Selçuk",
          "Tarde: basílica de San Juan",
          "Noche: Şirince"
        ]
      }
    ],
    zone: [
      {
        "nome": "Selçuk",
        "perChi": "quien quiere estar cerca de Éfeso",
        "testo": "Pueblo con pensiones familiares, restaurantes y mercado."
      },
      {
        "nome": "Şirince",
        "perChi": "quien quiere ambiente de pueblo",
        "testo": "Casas de piedra y viñedos, más tranquilo pero aislado y con pocos servicios."
      }
    ],
    sapori: [
      {
        "nome": "Gözleme",
        "testo": "Masa rellena, en los puestos del mercado."
      },
      {
        "nome": "Köfte",
        "testo": "Albóndigas a la brasa con pan y ensalada."
      },
      {
        "nome": "Vinos de fruta de Şirince",
        "testo": "De granada, melocotón y mora, en las tiendas del pueblo."
      },
      {
        "nome": "Zeytinyağlı",
        "testo": "Verduras en aceite, entrante frío típico del Egeo."
      }
    ],
    attenzioni: [
      "Entrar a media mañana en temporada alta significa encontrar los cruceros: mejor a la apertura.",
      "Saltarse las Casas de las Terrazas para ahorrar es un error: son lo más bello.",
      "Guías en el lugar: acordar precio y duración antes de empezar."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Las gradas de piedra del antiguo estadio de Éfeso',
    immagine: '/images/viaggi/turchia-itinerario/giorno-10-efeso.jpg',
  },
  {
    slug: 'costa-licia',
    paeseSlug: 'turchia',
    ordine: 5,
    nome: 'Costa licia: Fethiye, Ölüdeniz, Kaş y Kekova',
    tipologia: ['mare', 'trekking', 'road trip'],
    giorniConsigliati: '4-5 días',
    visitataPersonalmente: true,
    introduzione:
      'El tramo de costa entre Fethiye y Antalya, con calas de agua turquesa, tumbas licias excavadas en la roca, el sendero de la Vía Licia y las ruinas sumergidas de Kekova.',
    percheAndarci:
      'Por el mar más bonito de Turquía, las playas de Ölüdeniz y Kaputaş, la arena de Patara, el cañón de Saklıkent y las salidas en barco entre las islas.',
    cosaVedere: [
      'La laguna de Ölüdeniz y el Valle de las Mariposas',
      'El pueblo abandonado de Kayaköy',
      'El cañón de Saklıkent',
      'Las ruinas y la playa de Patara',
      'La playa de Kaputaş',
      'Las ruinas sumergidas de Kekova y el castillo de Kaleköy (Simena)',
    ],
    cosaFare: [
      'Parapente desde el Babadağ sobre Ölüdeniz',
      'Una etapa de la Vía Licia',
      'Kayak o barco sobre la ciudad sumergida de Kekova',
      'Buceo y snorkel en Kaş',
    ],
    doveDormire:
      'Fethiye u Ölüdeniz para la primera base, Kaş para la segunda (la más bonita y animada). Económicas: pensiones de Kaş · gama media: hoteles con vistas al mar · lujo: resorts de Ölüdeniz y Kalkan.',
    doveMangiare: 'Pescado elegido en el mercado de Fethiye y cocinado en los restaurantes de alrededor, gözleme en los pueblos, meze en las tabernas de Kaş.',
    comeArrivare: 'Aeropuertos de Dalaman (para Fethiye) y Antalya (para Kaş y Kekova).',
    comeSpostarsi: 'Coche de alquiler; dolmuş entre las localidades principales; barcos desde el puerto a las islas.',
    periodoMigliore: 'mayo-junio y septiembre-octubre; julio-agosto hace mucho calor y hay mucha gente',
    costi:
      'Excursión en barco con comida, de forma indicativa, 25-45 €; parapente en torno a 100-150 €; Patara y Saklıkent en torno a 5-15 € cada uno (indicativos).',
    erroriDaEvitare: [
      'Recorrer la costa sin coche: entre un pueblo y otro hay dolmuş, pero las mejores calas quedan fuera',
      'Ir en agosto sin reservar: Kaş y Ölüdeniz se llenan',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Ölüdeniz y Valle de las Mariposas",
        "testo": "La laguna turquesa, una de las playas más fotografiadas de Turquía. Un poco más allá, el Valle de las Mariposas, al que se llega en barca.",
        "come": "Dolmuş desde Fethiye, unos 20 minutos.",
        "quando": "Mañana, antes de que lleguen los bañistas.",
        "tempo": "Medio día",
        "consiglio": "El parapente desde el Babadağ es lo más famoso que se hace aquí."
      },
      {
        "nome": "Kayaköy",
        "testo": "Un pueblo griego abandonado en los años veinte, con cientos de casas de piedra en ruinas en la ladera.",
        "come": "Dolmuş desde Fethiye, 8 km.",
        "quando": "Mañana o tarde, con luz baja.",
        "tempo": "1-1,5 horas"
      },
      {
        "nome": "Saklıkent",
        "testo": "Un desfiladero profundo donde se camina en agua helada entre paredes de roca.",
        "come": "En coche desde Fethiye, una hora.",
        "quando": "Verano, cuando hace calor.",
        "tempo": "2-3 horas",
        "consiglio": "Alquilar zapatos de agua en el lugar."
      },
      {
        "nome": "Kekova y Simena",
        "testo": "Un tramo de mar con ruinas licias sumergidas y el pueblo de Kaleköy bajo un castillo.",
        "come": "Excursión en barco o kayak desde Üçağız o Kaş.",
        "quando": "Mañana, con el agua más clara.",
        "tempo": "Medio día",
        "consiglio": "Mejor en kayak al amanecer para ver las ruinas bajo el agua sin barcos."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Fethiye y Ölüdeniz",
          "Día 2: Kayaköy, Saklıkent y Patara",
          "Día 3: Kaş y Kekova"
        ]
      }
    ],
    zone: [
      {
        "nome": "Fethiye",
        "perChi": "quien quiere una base con servicios",
        "testo": "Ciudad con puerto, mercado de pescado y dolmuş para toda la costa."
      },
      {
        "nome": "Ölüdeniz",
        "perChi": "quien quiere playa y parapente",
        "testo": "Turístico, con hoteles y locales hasta tarde."
      },
      {
        "nome": "Kaş",
        "perChi": "quien quiere un pueblo marinero tranquilo",
        "testo": "Cafés y tabernas en el puerto, buceo y excursiones a Kekova."
      }
    ],
    sapori: [
      {
        "nome": "Pescado en el mercado de Fethiye",
        "testo": "Se elige en el mostrador y lo cocinan los restaurantes cercanos."
      },
      {
        "nome": "Gözleme",
        "testo": "Masa fina rellena, en los pueblos."
      },
      {
        "nome": "Meze de Kaş",
        "testo": "Platos fríos de verduras y quesos, en las tabernas del puerto."
      },
      {
        "nome": "Ayran",
        "testo": "Yogur líquido salado."
      }
    ],
    attenzioni: [
      "Recorrer la costa sin coche: los dolmuş existen, pero las mejores calas quedan fuera.",
      "Agosto sin reservar: Kaş y Ölüdeniz se llenan.",
      "Las excursiones en barco vendidas en la calle varían mucho: mirar qué incluye el precio.",
      "Parapente: elegir un operador con licencia."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Panorámica de Kaş con el puerto, las casas blancas y el mar de la costa licia',
    immagine: '/images/viaggi/turchia-itinerario/giorno-13-costa-licia.jpg',
  },
  {
    slug: 'antalya',
    paeseSlug: 'turchia',
    ordine: 6,
    nome: 'Antalya',
    tipologia: ['città', 'mare', 'archeologia'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La gran ciudad de la costa mediterránea, con el casco antiguo de Kaleiçi alrededor del puerto romano y uno de los mejores museos arqueológicos del país.',
    percheAndarci: 'Para cerrar el viaje cerca del aeropuerto, con Kaleiçi, el museo y las cascadas de Düden; en los alrededores están Perge, Aspendos y Termessos.',
    cosaVedere: ['Kaleiçi y la puerta de Adriano', 'El Museo Arqueológico de Antalya', 'Las cascadas de Düden', 'El teatro de Aspendos y Perge'],
    cosaFare: ['Un baño en Konyaaltı', 'La tarde-noche en el puerto viejo'],
    doveDormire: 'En las casas otomanas restauradas de Kaleiçi.',
    comeArrivare: 'Aeropuerto de Antalya (AYT), con vuelos directos desde Italia en temporada y desde Estambul todo el año.',
    comeSpostarsi: 'Tranvía y taxi en la ciudad; coche para los sitios de los alrededores.',
    periodoMigliore: 'de abril a noviembre',
    costi: 'Museo Arqueológico y Aspendos en torno a 15-20 € cada uno (indicativos).',
    erroriDaEvitare: ['Devolver el coche de alquiler en otra ciudad sin haber comprobado la tasa de solo ida'],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kaleiçi",
        "testo": "El centro histórico dentro de las murallas, con casas otomanas, la puerta de Adriano y el puerto viejo. De noche está lleno de restaurantes.",
        "come": "A pie desde la plaza de la torre del reloj.",
        "quando": "Tarde y noche.",
        "tempo": "2 horas"
      },
      {
        "nome": "Museo Arqueológico de Antalya",
        "testo": "Uno de los mejores de Turquía, con estatuas romanas de Perge y sarcófagos licios.",
        "come": "Tranvía hasta la parada Müze.",
        "quando": "Mañana.",
        "tempo": "1,5-2 horas",
        "url": "https://muze.gov.tr/"
      },
      {
        "nome": "Aspendos y Perge",
        "testo": "El teatro de Aspendos, del siglo II, es de los mejor conservados de la Antigüedad: la grada y el escenario están casi intactos y en verano aún acoge espectáculos. Perge, de camino, tiene el estadio, las termas y una larga calle columnada con un canal de agua en el centro.",
        "come": "En coche con conductor o en tour, unos 45 minutos.",
        "quando": "A primera hora.",
        "tempo": "Medio día cada uno",
        "url": "https://muze.gov.tr/",
        "consiglio": "Aspendos es la parada que no hay que saltarse.",
        "costo": "Aspendos 15 €, Perge 11 € para visitantes extranjeros (2026)"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: museo arqueológico",
          "Paseo por Kaleiçi",
          "Tarde: baño en Konyaaltı",
          "Noche: puerto viejo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Kaleiçi",
        "perChi": "quien quiere la ciudad vieja",
        "testo": "Hoteles en casas otomanas, ruido nocturno de los locales."
      },
      {
        "nome": "Konyaaltı",
        "perChi": "quien quiere playa",
        "testo": "Zona moderna con playa de guijarros y montañas al fondo."
      }
    ],
    sapori: [
      {
        "nome": "Piyaz",
        "testo": "Ensalada de alubias blancas con huevo y tahini, especialidad de Antalya."
      },
      {
        "nome": "Şiş köfte",
        "testo": "Albóndigas a la brasa con pan."
      },
      {
        "nome": "Tahini con melaza",
        "testo": "Desayuno dulce con crema de sésamo y melaza de uva."
      },
      {
        "nome": "Fruta fresca",
        "testo": "Naranjas y granadas del mercado."
      }
    ],
    attenzioni: [
      "Coche de alquiler devuelto en otra ciudad: comprobar la tasa de solo ida.",
      "Hoteles todo incluido lejos del centro: a veces el traslado cuesta tanto como la diferencia.",
      "En verano hace mucho calor: visitar al amanecer."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['turchia-itinerario'],
    imageAlt: 'Vista de Kaleiçi, el casco antiguo de Antalya asomado al mar',
    immagine: '/images/viaggi/turchia-itinerario/giorno-15-antalya.jpg',
  },
]
