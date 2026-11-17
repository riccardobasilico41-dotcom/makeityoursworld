import type { Destinazione } from '@/lib/types'

export const destinazioniTanzania: Destinazione[] = [
  {
    slug: 'serengeti',
    paeseSlug: 'tanzania',
    ordine: 1,
    nome: 'Serengeti',
    tipologia: ['safari', 'parco nazionale', 'fauna'],
    giorniConsigliati: '2-3 días, mejor con al menos dos noches dentro del parque',
    visitataPersonalmente: true,
    introduzione:
      'La gran llanura del norte de Tanzania, patrimonio de la UNESCO: sabana abierta, kopjes de granito, grandes felinos y, según la estación, las manadas de la Gran Migración.',
    percheAndarci:
      'Es el parque del que nace la idea misma de safari: espacios enormes, leones, guepardos y leopardos, y millones de ñus y cebras que se desplazan siguiendo las lluvias.',
    cosaVedere: [
      'El valle de Seronera, en el centro del parque, la zona más fácil para los grandes felinos',
      'Los kopjes, los afloramientos de granito donde descansan los leones',
      'Las llanuras del sur hacia Ndutu en la época de los nacimientos de ñus',
      'El río Mara, en el norte, en los cruces de la migración',
    ],
    cosaFare: [
      'Game drives al amanecer y a última hora de la tarde, cuando los animales están más activos',
      'Dormir en tienda dentro del parque (ver la ficha de experiencia)',
      'Seguir la Gran Migración en la zona adecuada para el mes (ver la ficha de experiencia)',
      'Safari en globo al amanecer, para quien quiera ver la llanura desde arriba',
    ],
    doveDormire:
      'Dentro del parque hay de todo: campings públicos con tiendas de campaña, campamentos fijos de tiendas con camas de verdad y baño, lodges y campamentos de lujo. Dormir dentro del Serengeti, y no fuera, ahorra horas de carretera y permite estar en las pistas ya al amanecer. Suricata Safaris organiza el circuito en las tres fórmulas (acampada, gama media y lujo).',
    comeArrivare:
      "Desde Arusha en 4x4, normalmente pasando por Tarangire o el Ngorongoro: son unas 8 horas hasta Seronera, así que el traslado ocupa un día entero con las paradas. Como alternativa hay vuelos internos desde Arusha o el Kilimanjaro a las pistas del parque, Seronera en el centro y Kogatende en el norte, que ahorran dos días de carretera.",
    comeSpostarsi: 'En todoterreno con conductor-guía: dentro del parque no se camina solo.',
    periodoMigliore: 'de junio a octubre (estación seca, migración en el norte desde julio); de diciembre a marzo en el sur, para los nacimientos',
    costi:
      "Entrada 70 $ por persona cada 24 horas en temporada alta (16 de mayo-14 de marzo), unos 60 €, más el 18 % de IVA; niños de 5 a 15 años 20 $. Tasa de pernoctación 60 $ por noche en lodges y campamentos de julio a septiembre, 30 $ en el camping público (2026). Económico: unos 250-300 € por persona al día con un safari de camping en grupo, entradas incluidas. Medio: 400-600 € en campamento de tiendas o lodge con 4x4 privado. Alto: más de 900 € en campamentos de lujo con vuelos internos.",
    erroriDaEvitare: [
      'Ir a la zona equivocada para el mes: la migración se mueve, y en verano en el sur del parque no hay ñus',
      'Planificar un solo día: entre ida y vuelta se pasa más tiempo en el coche que viendo animales',
      'Olvidar ropa de abrigo para los game drives del amanecer, que en el todoterreno abierto son fríos',
    ],
    miaEsperienza:
      'Hice el safari con Suricata Safaris: son top, tienen alojamiento para todos los gustos y también las experiencias en tienda, que recomiendo. Me gusta viajar incómodo y en contacto con la naturaleza, aunque de vez en cuando algún 5 estrellas viene bien.',
    // GUIDA-START
    luoghi: [
      {
        "nome": "Valle de Seronera",
        "testo": "El centro del parque y una de las mejores zonas para los grandes felinos: leones, leopardos en las acacias y guepardos en las llanuras. Los kopjes, los afloramientos de granito, son donde descansan los leones. El río Seronera tiene agua incluso en la estación seca, así que aquí hay animales todo el año.",
        "come": "Safari en 4x4 con guía, desde el lodge o el campamento. No se baja del vehículo fuera de los puntos permitidos.",
        "quando": "Todo el año. Los animales están más activos al amanecer y al final de la tarde.",
        "tempo": "1 día o más",
        "costo": "Entrada 70 $ por persona cada 24 horas en temporada alta (16 de mayo-14 de marzo), unos 60 €, más el 18 % de IVA; niños de 5 a 15 años 20 $, unos 17 € (2026)",
        "orari": "Abierto todos los días del año; las puertas cierran a las 18:00.",
        "lat": -2.4361,
        "lng": 34.8211,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti",
        "consiglio": "Hice el safari con Suricata Safaris, que además tiene experiencias en tienda dentro del parque: las recomiendo."
      },
      {
        "nome": "Centro de visitantes de Seronera",
        "testo": "Un pequeño centro de información construido alrededor de un kopje, con un sendero de paneles que explica el ecosistema del Serengeti y la migración. Entre las rocas se ven a menudo damanes y lagartos agama, y hay una zona de pícnic.",
        "come": "A pocos minutos de la pista principal de Seronera; es el único sitio de la zona donde se puede caminar libremente.",
        "quando": "A mediodía, en la pausa entre los dos safaris.",
        "tempo": "1 hora",
        "lat": -2.4462,
        "lng": 34.8184
      },
      {
        "nome": "Gol Kopjes",
        "testo": "Un grupo de kopjes en las llanuras orientales de hierba corta, una de las mejores zonas para ver guepardos. En la estación de lluvias las manadas de la migración pastan justo alrededor.",
        "come": "En 4x4 con guía, desde la carretera entre la puerta de Naabi Hill y Seronera. El acceso está regulado y el vehículo paga un permiso aparte.",
        "quando": "De diciembre a marzo, cuando las llanuras están verdes.",
        "tempo": "Medio día",
        "costo": "Permiso del vehículo para los Gol Kopjes 10 $, unos 9 €, además de la entrada al parque (2026)",
        "lat": -2.768,
        "lng": 35.0909,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti"
      },
      {
        "nome": "Moru Kopjes",
        "testo": "Kopjes más grandes y espectaculares al suroeste de Seronera, con la Gong Rock, una roca que resuena al golpearla, y antiguas pinturas rupestres masái. Es una de las pocas zonas del parque donde a veces se ven rinocerontes negros.",
        "come": "En 4x4 con guía, a una hora al suroeste de Seronera.",
        "quando": "Todo el año; de diciembre a mayo pasan también las manadas.",
        "tempo": "Medio día"
      },
      {
        "nome": "Llanuras del sur y Ndutu",
        "testo": "La zona donde nacen las crías de ñu, con los depredadores siguiéndolas. Según TANAPA la temporada de partos es sobre todo en enero y febrero. El lago Ndutu ya está dentro del área de conservación de Ngorongoro, que tiene tarifas propias.",
        "come": "Desde Seronera o Ngorongoro en 4x4, con guía; muchos campamentos estacionales se trasladan aquí de diciembre a marzo.",
        "quando": "Sobre todo enero y febrero.",
        "tempo": "1-2 días",
        "lat": -3.0033,
        "lng": 34.997,
        "url": "https://www.tanzaniaparks.go.tz/serengeti"
      },
      {
        "nome": "Corredor occidental y río Grumeti",
        "testo": "La larga lengua de parque que baja hacia el lago Victoria, atravesada por el río Grumeti. Las manadas suelen cruzarlo entre mayo y julio, y en el río viven cocodrilos enormes.",
        "come": "En 4x4 desde Seronera, 2-3 horas hacia el oeste; los campamentos de la zona tienen también pistas de aterrizaje.",
        "quando": "De mayo a julio para la migración.",
        "tempo": "1-2 días",
        "lat": -2.0846,
        "lng": 33.8001
      },
      {
        "nome": "Lobo y el noreste",
        "testo": "Colinas y kopjes en la parte nororiental, mucho menos frecuentada que el centro. En la estación seca pasan las manadas camino de Kenia o de vuelta.",
        "come": "En 4x4 desde Seronera, unas 3 horas hacia el norte.",
        "quando": "De agosto a noviembre.",
        "tempo": "1 día",
        "lat": -1.937,
        "lng": 35.1271
      },
      {
        "nome": "Río Mara y migración",
        "testo": "En el norte del parque, durante la estación seca, los cruces del río Mara de ñus y cebras, con los cocodrilos esperando. El punto de referencia es Kogatende, con una pista de aterrizaje.",
        "come": "Desde Seronera en 4x4, muchas horas de carretera; muchos llegan en avioneta a Kogatende y duermen en los campamentos fijos del norte.",
        "quando": "Estación seca: TANAPA indica junio-octubre para la migración. El momento exacto de los cruces cambia cada año.",
        "tempo": "1-2 días",
        "lat": -1.7038,
        "lng": 35.0033,
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "Preguntar al operador dónde está la migración en el mes del viaje: cambia cada año."
      },
      {
        "nome": "Globo al amanecer",
        "testo": "Un vuelo de una hora sobre la llanura al salir el sol, seguido normalmente de un desayuno en la sabana. Se vuela sobre todo sobre Seronera y, en temporada, sobre las llanuras del sur y el norte.",
        "come": "Se reserva con un operador autorizado, saliendo del campamento antes del amanecer.",
        "quando": "Amanecer.",
        "tempo": "3-4 horas",
        "costo": "El vuelo se paga al operador; el parque cobra una tasa de 50 $ por persona, unos 43 € (2026)"
      },
      {
        "nome": "Safari a pie con ranger",
        "testo": "Caminatas guiadas por un ranger armado que enseñan la sabana de cerca: huellas, plantas, insectos y animales pequeños que desde el vehículo pasan desapercibidos.",
        "come": "Se organizan con el operador o en la sede del parque; hacen falta ranger y permiso.",
        "quando": "Primera hora de la mañana, antes del calor.",
        "tempo": "1-4 horas",
        "costo": "20 $ por persona para caminatas de hasta 4 horas, unos 17 €; 25 $ para las más largas, unos 22 € (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/serengeti"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Vuelo de Arusha a una pista de Seronera",
          "Safari en el valle de Seronera y los kopjes",
          "Vuelo de vuelta por la tarde, o noche en el parque"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: entrada por Naabi Hill, Gol Kopjes, tarde en Seronera y atardecer con los leones",
          "Día 2: globo al amanecer o safari, centro de visitantes, salida"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Naabi Hill, Gol Kopjes y Seronera",
          "Día 2: Seronera al amanecer y Moru Kopjes",
          "Día 3: norte o sur según el mes, siguiendo la migración"
        ]
      }
    ],
    zone: [
      {
        "nome": "Seronera (centro)",
        "perChi": "quien tiene pocos días y busca grandes felinos",
        "testo": "La zona con más lodges, campamentos de tiendas y campings públicos, y con animales todo el año. En temporada alta es también la más concurrida. Quien duerme en el parque paga una tasa de pernoctación por persona: 60 $ por noche en lodges y campamentos de julio a septiembre, 30 $ en el camping público (unos 52 € y 26 €, 2026)."
      },
      {
        "nome": "Sur y Ndutu",
        "perChi": "quien viaja de diciembre a marzo",
        "testo": "Campamentos estacionales cerca de las manadas y de la temporada de partos. Fuera de temporada la zona se vacía."
      },
      {
        "nome": "Norte y Kogatende",
        "perChi": "quien quiere los cruces del Mara",
        "testo": "Campamentos fijos y estacionales junto al río Mara, lejos de todo: casi siempre se llega en avioneta."
      },
      {
        "nome": "Corredor occidental",
        "perChi": "quien viaja entre mayo y julio y busca menos vehículos",
        "testo": "Lodges y campamentos hacia el río Grumeti y las reservas privadas vecinas."
      }
    ],
    sapori: [
      {
        "nome": "Ugali",
        "testo": "Polenta de maíz, acompaña carne y guisos."
      },
      {
        "nome": "Nyama choma",
        "testo": "Carne a la brasa, de cabra o ternera."
      },
      {
        "nome": "Pilau",
        "testo": "Arroz especiado con carne."
      },
      {
        "nome": "Chai y café tanzano",
        "testo": "Servido en todas partes, incluso en el bush."
      }
    ],
    attenzioni: [
      "Ir a la zona equivocada para el mes: la migración se mueve, y el sur es la zona de partos a principios de año.",
      "Planear un solo día: entre ida y vuelta se pasa más tiempo en el coche que mirando animales.",
      "Olvidar capas de abrigo para los safaris del amanecer, fríos en el 4x4 abierto.",
      "Elegir un operador sin licencia: comprobar registro y opiniones.",
      "Las tarifas de los parques TANAPA se pagan por persona y suelen estar incluidas en el precio del operador: pedir que aparezcan aparte en el presupuesto."
    ],
    gite: [
      {
        "nome": "Garganta de Olduvai",
        "distanza": "1 hora en coche desde la puerta de Naabi Hill",
        "come": "En 4x4, en la carretera entre el Serengeti y el cráter del Ngorongoro.",
        "testo": "El yacimiento donde se encontraron los restos de Homo habilis, con un museo asomado a la garganta. Es la parada natural del traslado."
      },
      {
        "nome": "Cráter del Ngorongoro",
        "distanza": "unas 3 horas en coche desde Seronera",
        "come": "En 4x4 con guía, durmiendo normalmente en el borde del cráter o en Karatu.",
        "testo": "La caldera llena de animales, con rinocerontes negros: casi todos la combinan con el Serengeti, a la ida o a la vuelta."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en el Serengeti?",
        "risposta": "Al menos dos noches dentro del parque. Con un solo día se pasa más tiempo en la carretera que viendo animales; con tres se puede seguir la migración en la zona adecuada para el mes."
      },
      {
        "domanda": "¿Cuánto cuesta la entrada al Serengeti en 2026?",
        "risposta": "70 $ por persona cada 24 horas en temporada alta (16 de mayo-14 de marzo), más el 18 % de IVA, y 20 $ para niños de 5 a 15 años. Si se duerme en el parque se añade la tasa de pernoctación."
      },
      {
        "domanda": "¿Cuál es el mejor mes para la Gran Migración?",
        "risposta": "Depende de lo que se quiera ver: los partos en el sur en enero y febrero, el corredor occidental entre mayo y julio, los cruces del Mara de julio a octubre. Las fechas cambian cada año con las lluvias."
      },
      {
        "domanda": "¿Se puede hacer el Serengeti por libre?",
        "risposta": "Se puede entrar con un 4x4 propio, pero casi todos los visitantes van con un operador y un conductor-guía. Dentro del parque no se camina sin ranger ni se baja del vehículo fuera de los puntos permitidos."
      },
      {
        "domanda": "¿Mejor campamento de tiendas o lodge?",
        "risposta": "El campamento hace sentir la sabana también de noche y suele estar más cerca de los animales; el lodge tiene habitaciones de verdad y piscina. Los campamentos estacionales se mueven con la migración, los lodges no."
      },
      {
        "domanda": "¿Hace frío en los safaris?",
        "risposta": "Al amanecer sí, sobre todo de junio a agosto y en el vehículo abierto. Hace falta un forro polar o un plumón ligero, que a media mañana sobra."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['safari-in-tenda', 'grande-migrazione'],
    tripSlugs: [],
    imageAlt: 'Una acacia solitaria en la sabana del Serengeti al atardecer, con colinas en el horizonte',
    immagine: '/images/tanzania/serengeti-savana.jpg',
  },
  {
    slug: 'ngorongoro',
    paeseSlug: 'tanzania',
    ordine: 2,
    nome: 'Cráter del Ngorongoro',
    tipologia: ['safari', 'fauna', 'unesco'],
    giorniConsigliati: '1 día en el cráter, con la noche en el borde',
    visitataPersonalmente: true,
    introduzione:
      'Una caldera volcánica intacta con el fondo plano lleno de animales: herbívoros, leones, hipopótamos y los escasos rinocerontes negros. Es el corazón del Área de Conservación del Ngorongoro, patrimonio de la UNESCO, donde los masái siguen viviendo con sus rebaños.',
    percheAndarci:
      'En pocas horas y en un espacio cerrado se ven muchísimos animales, rinoceronte negro incluido, con las paredes del cráter alrededor.',
    cosaVedere: [
      'El fondo del cráter, con el lago salado y los pantanos',
      'Los rinocerontes negros, que aquí se avistan más fácilmente que en otras zonas del norte',
      'La vista desde el borde del cráter',
      'La garganta de Olduvai, yacimiento paleontológico dentro del área protegida, de camino al Serengeti',
    ],
    cosaFare: [
      'Game drive en el fondo del cráter (ver la ficha de experiencia)',
      'Visita a una aldea masái (boma cultural)',
    ],
    doveDormire:
      'Lodges y campings en el borde del cráter, a unos 2.300 metros: de noche hace mucho frío. Es más barato dormir en Karatu, fuera del área protegida, y subir temprano por la mañana.',
    comeArrivare:
      "Desde Arusha en 4x4, unas 3-4 horas por carretera asfaltada pasando por Mto wa Mbu y Karatu hasta la puerta de Lodoare. Es también la parada entre Arusha y el Serengeti: la carretera hacia Naabi Hill cruza el área protegida, así que la entrada se paga aunque solo se pase. Quien llega en avioneta suele aterrizar en Manyara o en Arusha y sigue en coche.",
    comeSpostarsi: 'En todoterreno con conductor-guía, con bajada y subida por pistas específicas.',
    periodoMigliore: 'todo el año; en la estación seca la hierba está baja y los animales se ven mejor',
    costi:
      "Tarifas oficiales de la NCAA para no residentes de fuera de África oriental: entrada 70,80 $ por persona cada 24 horas, unos 61 € (23,60 $ para niños de 5 a 15 años), más 295 $ por vehículo por cada descenso al cráter y el permiso del 4x4; tasa de pernoctación 59 $ por noche en los lodges (2026). Económico: unos 250-300 € por persona al día con safari de camping y noche en Karatu. Medio: 400-550 € con lodge en el borde o en Karatu y 4x4 privado. Alto: más de 900 € en los lodges de lujo del borde.",
    erroriDaEvitare: [
      'Bajar a media mañana: los primeros vehículos entran al amanecer y encuentran el cráter más vacío',
      'Subestimar el frío en el borde, por la noche y a primera hora',
      'Calcular el safari sin la tasa del cráter, que se paga por vehículo y por eso pesa más en los grupos pequeños',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fondo del cráter y lago Magadi",
        "testo": "El fondo de una caldera volcánica intacta de unos 260 km², con unos 610 metros de profundidad, el lago salado Magadi y pantanos. Viven aquí leones, elefantes, hipopótamos y una pequeña población de rinocerontes negros; cuando hay agua, los flamencos se posan en el lago.",
        "come": "Se baja por una carretera empinada en 4x4 con guía. Cada descenso paga una tasa por vehículo.",
        "quando": "Amanecer: los primeros vehículos entran pronto y encuentran el cráter más vacío.",
        "tempo": "Medio día",
        "costo": "70,80 $ por persona cada 24 horas para no residentes desde 16 años, unos 61 € (23,60 $ de 5 a 15), más 295 $ por vehículo por cada descenso al cráter, unos 254 € (2026)",
        "orari": "Todos los días: puertas del área protegida de 6:00 a 18:00, acceso al cráter de 6:00 a 16:00.",
        "lat": -3.1936,
        "lng": 35.5404,
        "url": "https://www.ncaa.go.tz/tariffs/",
        "consiglio": "La tasa del cráter es por vehículo: pesa más en los grupos pequeños."
      },
      {
        "nome": "Bosque de Lerai",
        "testo": "Un bosque de acacias de corteza amarilla en el fondo del cráter, alimentado por los manantiales que bajan de las paredes. Es donde los elefantes machos pasan las horas de calor y donde se busca a los rinocerontes en el borde de los árboles.",
        "come": "Durante el safari en el fondo del cráter, cerca de la carretera de subida.",
        "quando": "Mañana y primera hora de la tarde.",
        "tempo": "30-60 minutos",
        "lat": -3.2199,
        "lng": 35.5193,
        "url": "https://www.ncaa.go.tz/ngorongoro-crater/"
      },
      {
        "nome": "Manantiales de Ngoitokitok",
        "testo": "La principal zona de pícnic del cráter, junto a una charca con hipopótamos. Los milanos son expertos en robar la comida de las manos: mejor comer dentro del coche.",
        "come": "En el lado oriental del fondo, durante el safari.",
        "quando": "Almuerzo.",
        "tempo": "1 hora",
        "lat": -3.2103,
        "lng": 35.6012,
        "consiglio": "El almuerzo caliente servido en el cráter paga un permiso de 23,60 $ por vehículo; la comida para llevar del lodge no."
      },
      {
        "nome": "Borde del cráter",
        "testo": "La carretera que recorre el borde, a unos 2.300 metros, con miradores sobre la caldera y bosque de montaña donde a veces se cruzan elefantes y búfalos. A primera hora el fondo suele estar cubierto de niebla.",
        "come": "En coche, por la carretera entre la puerta de Lodoare y los lodges del borde.",
        "quando": "Atardecer y amanecer, si la niebla lo permite.",
        "tempo": "30 minutos",
        "url": "https://www.ncaa.go.tz/ngorongoro-crater/"
      },
      {
        "nome": "Garganta de Olduvai",
        "testo": "El yacimiento paleoantropológico en las llanuras del área de conservación, fuera del cráter, donde se encontraron los restos de Homo habilis. El museo asomado a la garganta explica las excavaciones y guarda réplicas de los hallazgos.",
        "come": "En la carretera entre el cráter y el Serengeti, con un desvío de pocos kilómetros.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "costo": "35,40 $ por persona desde 16 años, unos 30 €, junto con Shifting Sand (2026)",
        "lat": -2.9936,
        "lng": 35.3511,
        "url": "https://www.ncaa.go.tz/olduvai-gorge/"
      },
      {
        "nome": "Shifting Sands",
        "testo": "Una duna de ceniza volcánica negra, llegada del Ol Doinyo Lengai, que el viento desplaza unos metros por la llanura cada año. Un hito marca dónde estaba en años anteriores.",
        "come": "En 4x4 desde Olduvai, por pistas en la llanura; hace falta un guía que conozca el camino.",
        "quando": "Mañana, antes del calor.",
        "tempo": "1 hora",
        "costo": "Incluido en la entrada de Olduvai, 35,40 $ (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Huellas de Laetoli",
        "testo": "Las huellas de homínidos dejadas en la ceniza volcánica hace unos 3,6 millones de años, entre los rastros más antiguos de marcha erguida. Las originales están cubiertas para protegerlas; en el lugar hay una réplica y paneles.",
        "come": "En 4x4, al sur de Olduvai por pistas largas: se visita con guía y medio día por delante.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "costo": "23,60 $ por persona desde 16 años, unos 20 € (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Cráter de Empakaai",
        "testo": "Un cráter más pequeño y salvaje al noreste, con un lago alcalino en el fondo donde se reúnen los flamencos. Desde el borde, en los días claros, se ve el volcán Ol Doinyo Lengai, y se baja a pie hasta el lago.",
        "come": "En 4x4, 2-3 horas desde el borde del Ngorongoro; la bajada a pie se hace con un ranger armado.",
        "quando": "Mañana, con la mejor luz sobre el lago.",
        "tempo": "Un día",
        "costo": "Caminata con ranger 23,60 $ por persona hasta 4 horas, unos 20 € (2026)",
        "lat": -2.9126,
        "lng": 35.7871,
        "url": "https://www.ncaa.go.tz/empakai-crater/"
      },
      {
        "nome": "Cráter de Olmoti",
        "testo": "Un cráter poco profundo cubierto de hierba, al norte del Ngorongoro, con un sendero hasta la cascada donde nace el río Munge. Es una caminata corta entre pastos masái.",
        "come": "En 4x4 hasta el pueblo de Nainokanoka, luego a pie con un ranger.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "costo": "Caminata con ranger 23,60 $ por persona hasta 4 horas, unos 20 € (2026)",
        "lat": -3.0115,
        "lng": 35.6497,
        "url": "https://www.ncaa.go.tz/olmoti-crater/"
      },
      {
        "nome": "Endoro y las cuevas de los elefantes",
        "testo": "Un sendero por el bosque de montaña del área protegida que lleva a las cuevas excavadas por los elefantes para lamer la sal mineral de la roca, y a una cascada.",
        "come": "A pie con un ranger, organizado con el operador.",
        "quando": "Mañana.",
        "tempo": "2-3 horas",
        "costo": "17,70 $ por persona desde 16 años, unos 15 € (2026)",
        "url": "https://www.ncaa.go.tz/tariffs/"
      },
      {
        "nome": "Boma masái",
        "testo": "Una visita a un poblado masái, con danzas, casas de barro y explicaciones sobre la vida de los pastores, que en el área protegida aún viven con sus rebaños.",
        "come": "Con el operador, en la carretera alrededor del cráter.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "consiglio": "Preguntar antes qué está incluido y cuánto va al poblado.",
        "costo": "Entrada a los bomas culturales 20 $ por vehículo, unos 17 € (2026), más la donación que pide el poblado",
        "url": "https://www.ncaa.go.tz/tariffs/"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Amanecer: bajada al cráter, lago Magadi y bosque de Lerai",
          "Almuerzo en los manantiales de Ngoitokitok",
          "Tarde: subida, visita al boma o a Olduvai"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: cráter desde el amanecer hasta primera hora de la tarde, noche en el borde",
          "Día 2: Olduvai y Shifting Sands, luego hacia el Serengeti"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: cráter",
          "Día 2: Olmoti y la cascada, noche en la zona",
          "Día 3: bajada a pie al cráter de Empakaai"
        ]
      }
    ],
    zone: [
      {
        "nome": "Borde del cráter",
        "perChi": "quien quiere las vistas y el amanecer en el cráter",
        "testo": "Lodges y camping público en el borde, con vistas a la caldera; de noche hace mucho frío. Dentro del área protegida se paga una tasa de pernoctación de 59 $ por persona y noche en lodges y campamentos, unos 51 €, y 35,40 $ en el camping público (2026)."
      },
      {
        "nome": "Karatu",
        "perChi": "quien quiere gastar menos",
        "testo": "Pueblo entre cafetales a unos veinte minutos de la puerta de Lodoare, con lodges y campings fuera del área protegida: sin tasa de pernoctación, pero con madrugón."
      },
      {
        "nome": "Ndutu",
        "perChi": "quien viaja de diciembre a marzo",
        "testo": "Campamentos estacionales en la parte occidental del área protegida, en el límite con el Serengeti, cerca de las manadas en la temporada de partos."
      }
    ],
    sapori: [
      {
        "nome": "Ugali y guisos",
        "testo": "Platos de maíz y carne, en los lodges."
      },
      {
        "nome": "Pilau",
        "testo": "Arroz especiado."
      },
      {
        "nome": "Mtori",
        "testo": "Sopa de plátano verde y carne, típica del norte."
      },
      {
        "nome": "Chai",
        "testo": "Té especiado con leche."
      }
    ],
    attenzioni: [
      "Bajar a media mañana: los primeros vehículos entran al amanecer y encuentran el cráter más vacío.",
      "Subestimar el frío en el borde, por la noche y a primera hora.",
      "Hacer la cuenta del safari sin la tasa del cráter, que se paga por vehículo.",
      "Visitas a aldeas masáis: elegir operadores que compartan los ingresos con ellas."
    ],
    gite: [
      {
        "nome": "Lago Eyasi",
        "distanza": "1,5-2 horas en coche desde Karatu",
        "come": "En 4x4 con el operador, saliendo antes del amanecer.",
        "testo": "Un lago salado al pie del escarpe, donde viven los hadzabe, entre los últimos cazadores-recolectores de África oriental, y pastores datoga. Se sale con ellos al amanecer."
      },
      {
        "nome": "Lago Manyara",
        "distanza": "1 hora en coche desde Karatu",
        "come": "En 4x4, por la carretera asfaltada hacia Mto wa Mbu.",
        "testo": "El parque del bosque y del lago alcalino bajo el escarpe del Rift, que se recorre en medio día."
      },
      {
        "nome": "Lago Natron",
        "distanza": "unas 3 horas de pista desde Empakaai",
        "come": "En 4x4, bajando de las Highlands hacia el valle del Rift; mejor con una noche allí.",
        "testo": "El lago rojo donde anidan los flamencos enanos, al pie del Ol Doinyo Lengai, el volcán sagrado de los masái."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuánto cuesta visitar el cráter del Ngorongoro en 2026?",
        "risposta": "70,80 $ por persona cada 24 horas de entrada al área protegida, más 295 $ por vehículo por cada descenso al cráter. Cuatro personas en un 4x4 pagan algo más de 70 $ cada una por la tasa del cráter."
      },
      {
        "domanda": "¿Cuánto tiempo se puede estar en el cráter?",
        "risposta": "El acceso al cráter es de 6:00 a 16:00 y las puertas del área protegida cierran a las 18:00. Medio día en el fondo basta para verlo casi todo."
      },
      {
        "domanda": "¿Se ven de verdad los rinocerontes negros?",
        "risposta": "A menudo, pero de lejos: son pocos y viven sobre todo en las zonas abiertas cerca del bosque de Lerai. Unos prismáticos marcan la diferencia."
      },
      {
        "domanda": "¿Mejor dormir en el borde o en Karatu?",
        "risposta": "En el borde se está en la puerta del cráter al amanecer y se tienen las vistas, pero se paga la tasa de pernoctación y hace frío. Karatu cuesta menos y está a unos veinte minutos de la puerta de Lodoare."
      },
      {
        "domanda": "¿El Ngorongoro es uno de los parques de TANAPA?",
        "risposta": "No: es un área de conservación gestionada por la NCAA, con tarifas propias. Se paga incluso solo para cruzarla camino del Serengeti."
      },
      {
        "domanda": "¿Qué llevar para el cráter?",
        "risposta": "Capas de abrigo para la mañana en el borde, prismáticos y agua. El almuerzo se come en las zonas de pícnic, mejor dentro del coche por los milanos."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['cratere-ngorongoro'],
    tripSlugs: [],
    imageAlt: 'El fondo del cráter del Ngorongoro visto desde el borde, con el lago y las paredes de la caldera',
    immagine: '/images/tanzania/ngorongoro-cratere.jpg',
  },
  {
    slug: 'tarangire-manyara',
    paeseSlug: 'tanzania',
    ordine: 3,
    nome: 'Tarangire y el lago Manyara',
    tipologia: ['safari', 'parco nazionale', 'natura'],
    giorniConsigliati: '1 día cada uno, a menudo al principio o al final del circuito',
    visitataPersonalmente: true,
    introduzione:
      'Dos parques cerca de Arusha y muy distintos entre sí: Tarangire, con los baobabs gigantes y las manadas de elefantes junto al río, y el lago Manyara, encajado entre el escarpe del Valle del Rift y el lago, con bosque, flamencos y babuinos.',
    percheAndarci:
      'Son las paradas más cómodas para empezar un safari y, en la estación seca, Tarangire tiene una de las concentraciones de elefantes más altas de Tanzania.',
    cosaVedere: [
      'Los baobabs y los elefantes junto al río Tarangire',
      'El bosque y la orilla del lago Manyara, con flamencos cuando el nivel del agua lo permite',
      'El escarpe del Valle del Rift sobre Manyara',
    ],
    cosaFare: [
      'Game drive en Tarangire, mejor en la estación seca',
      'Recorrido por el parque del lago Manyara, que se hace bien en media jornada',
      'Visita al pueblo de Mto wa Mbu, a la entrada de Manyara',
    ],
    doveDormire:
      'Campamentos y lodges justo fuera o dentro de Tarangire; para Manyara se duerme en Mto wa Mbu o en Karatu, que es también la base para el Ngorongoro.',
    comeArrivare:
      "Desde Arusha en 4x4: Tarangire está a unos 120 km, algo menos de 2 horas por carretera asfaltada hacia el sur, y el lago Manyara a unas 2 horas hacia el oeste, en la carretera a Karatu y el Ngorongoro. Por eso son las primeras paradas del circuito norte. Hay también una pista de aterrizaje en Manyara, con vuelos internos desde Arusha.",
    comeSpostarsi: 'En todoterreno con conductor-guía.',
    periodoMigliore: 'de junio a octubre, cuando los animales se concentran alrededor del agua',
    costi:
      "Entrada a cada parque 50 $ por persona cada 24 horas en temporada alta (16 de mayo-14 de marzo), unos 43 €, más el 18 % de IVA; niños de 5 a 15 años 15 $. Tasa de pernoctación 40 $ por noche en los lodges dentro de los parques; safari nocturno 50 $, canoa en Manyara 20 $ (2026). Económico: unos 200-250 € por persona al día con safari en grupo y noche en Mto wa Mbu. Medio: 350-500 € con lodge y 4x4 privado. Alto: más de 700 € en los campamentos de lujo de Tarangire.",
    erroriDaEvitare: [
      'Saltarse Tarangire para correr al Serengeti: en la estación seca vale el viaje por sí solo',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Parque de Tarangire",
        "testo": "Baobabs, miles de elefantes, la población más densa de Tanzania según TANAPA, y animales que se concentran alrededor del río en la estación seca. Además de elefantes hay leones, jirafas, búfalos y más de 500 especies de aves.",
        "come": "Safari en 4x4 con guía, desde la puerta principal al norte.",
        "quando": "Estación seca, cuando los animales se reúnen alrededor del agua.",
        "tempo": "1 día",
        "costo": "Entrada 50 $ por persona cada 24 horas en temporada alta (16 de mayo-14 de marzo), unos 43 €, más el 18 % de IVA; niños de 5 a 15 años 15 $, unos 13 € (2026)",
        "orari": "Abierto todos los días del año; las puertas cierran a las 18:00.",
        "lat": -3.8333,
        "lng": 36,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire",
        "consiglio": "En la estación seca vale el viaje por sí solo: no hay que saltárselo para correr al Serengeti."
      },
      {
        "nome": "Río Tarangire y los baobabs",
        "testo": "El río que da nombre al parque es la única agua permanente de la zona: en la estación seca las manadas de elefantes excavan en el lecho de arena para beber. En las orillas crecen baobabs enormes, algunos con las cicatrices de los colmillos.",
        "come": "En el safari, siguiendo las pistas junto al río en la parte norte del parque.",
        "quando": "De julio a octubre.",
        "tempo": "Medio día"
      },
      {
        "nome": "Pantano de Silale",
        "testo": "Un gran pantano en el centro-sur del parque que sigue verde incluso en la estación seca y atrae elefantes, búfalos y los leones que los siguen. Es una de las mejores zonas para aves acuáticas.",
        "come": "En el safari, a una hora al sur de la puerta principal.",
        "quando": "Estación seca.",
        "tempo": "Medio día",
        "lat": -4.0207,
        "lng": 36.1372
      },
      {
        "nome": "Safari nocturno en Tarangire",
        "testo": "Un safari después del atardecer con focos, para ver animales nocturnos: ginetas, puercoespines, hienas y, con suerte, leopardos cazando.",
        "come": "Solo con operadores y lodges autorizados, que siguen normas específicas del parque.",
        "quando": "Después del atardecer.",
        "tempo": "2-3 horas",
        "costo": "50 $ por persona, unos 43 €; niños de 5 a 15 años 25 $ (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire"
      },
      {
        "nome": "Safari a pie en Tarangire",
        "testo": "Caminatas con un ranger armado por la sabana del parque, entre termiteros y baobabs, para leer huellas y ver los animales a su altura.",
        "come": "Con el operador o desde los lodges del parque; hacen falta ranger y permiso.",
        "quando": "Primera hora de la mañana.",
        "tempo": "1-4 horas",
        "costo": "20 $ por persona hasta 4 horas, unos 17 €; 25 $ las más largas, unos 22 € (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/tarangire"
      },
      {
        "nome": "Lago Manyara",
        "testo": "Un bosque alimentado por aguas subterráneas, con caobas, higueras y cercopitecos azules, el lago alcalino con flamencos enanos cuando el nivel lo permite y el escarpe del Rift encima. Es famoso por los leones que trepan a los árboles.",
        "come": "Safari de medio día desde la puerta cercana a Mto wa Mbu.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "costo": "Entrada 50 $ por persona cada 24 horas en temporada alta, unos 43 €, más el 18 % de IVA; niños de 5 a 15 años 15 $ (2026)",
        "orari": "Abierto todos los días del año; las puertas cierran a las 18:00.",
        "lat": -3.5833,
        "lng": 35.8333,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/manyara"
      },
      {
        "nome": "Pasarela colgante del lago Manyara",
        "testo": "Una pasarela de puentes colgantes entre las copas del bosque, a la altura de los monos y las aves. Es una de las pocas formas de estar a pie dentro del parque.",
        "come": "Desde el centro de acogida cerca de la entrada del parque, con un guía.",
        "quando": "Mañana, cuando el bosque está más vivo.",
        "tempo": "1 hora",
        "lat": -3.3746,
        "lng": 35.8366
      },
      {
        "nome": "Fuentes termales de Maji Moto",
        "testo": "Fuentes de agua caliente en la parte sur del parque, donde el bosque deja paso a la orilla del lago. Es el punto más lejano del recorrido clásico.",
        "come": "En el safari, por la pista al pie del escarpe hasta el final del parque.",
        "quando": "Media mañana.",
        "tempo": "2-3 horas ida y vuelta desde la entrada"
      },
      {
        "nome": "Canoa en el lago Manyara",
        "testo": "Una salida en canoa por el lago, entre aves acuáticas e hipopótamos a distancia, posible solo cuando el nivel del agua lo permite.",
        "come": "Con un operador autorizado y un guía.",
        "quando": "Primera hora de la mañana o final de la tarde.",
        "tempo": "2 horas",
        "costo": "20 $ por persona, unos 17 € (2026)",
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/manyara"
      },
      {
        "nome": "Mto wa Mbu",
        "testo": "El pueblo junto a la entrada del lago Manyara, en la carretera al Ngorongoro, donde el plátano es el cultivo principal. Viven aquí personas de muchas etnias distintas, y el mercado y las plantaciones se recorren con un guía local.",
        "come": "A pie o en bici con un guía local.",
        "quando": "Mañana.",
        "tempo": "1-2 horas",
        "lat": -3.35,
        "lng": 35.85
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "De Arusha a Tarangire al amanecer",
          "Safari junto al río y entre los baobabs",
          "Tarde hacia Mto wa Mbu o Karatu"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Tarangire",
          "Día 2: Manyara, pasarela colgante y Mto wa Mbu"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Tarangire norte y el río",
          "Día 2: pantano de Silale, safari a pie o nocturno",
          "Día 3: lago Manyara y Mto wa Mbu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dentro o al borde de Tarangire",
        "perChi": "quien quiere el safari de verdad",
        "testo": "Lodges y campamentos de tiendas dentro del parque o en las zonas vecinas, con elefantes que pasan junto a las tiendas. Dentro del parque se paga una tasa de pernoctación de 40 $ por persona y noche, unos 34 € (2026)."
      },
      {
        "nome": "Mto wa Mbu",
        "perChi": "quien quiere gastar menos y estar cerca de Manyara",
        "testo": "Casas de huéspedes, lodges sencillos y campings en el pueblo, a pocos minutos de la puerta del lago Manyara."
      },
      {
        "nome": "Karatu",
        "perChi": "quien sigue hacia el Ngorongoro",
        "testo": "Lodges entre cafetales, a una media hora de Mto wa Mbu y cerca de la puerta del Ngorongoro."
      }
    ],
    sapori: [
      {
        "nome": "Ugali",
        "testo": "Con guisos de carne."
      },
      {
        "nome": "Plátanos fritos",
        "testo": "Tentempié habitual en los mercados de la zona."
      },
      {
        "nome": "Pilau",
        "testo": "Arroz especiado."
      },
      {
        "nome": "Chai",
        "testo": "Servido en todas partes."
      }
    ],
    attenzioni: [
      "Saltarse Tarangire para correr hacia el Serengeti.",
      "Esperar flamencos todo el año: el nivel del agua cambia.",
      "Paseo en bici en Mto wa Mbu: elegir guías locales."
    ],
    gite: [
      {
        "nome": "Cráter del Ngorongoro",
        "distanza": "1,5 horas en coche desde Mto wa Mbu",
        "come": "En 4x4 con guía, por la carretera asfaltada vía Karatu.",
        "testo": "La caldera llena de animales, con rinocerontes negros: la siguiente parada natural del circuito norte."
      },
      {
        "nome": "Lago Natron",
        "distanza": "unas 3 horas de carretera y pista desde Mto wa Mbu",
        "come": "En 4x4, subiendo por el valle del Rift hacia el norte; mejor con una noche allí.",
        "testo": "El lago alcalino donde anidan los flamencos enanos, al pie del volcán Ol Doinyo Lengai, con cascadas a las que se llega a pie siguiendo un arroyo."
      }
    ],
    faq: [
      {
        "domanda": "¿Merece la pena Tarangire si luego se va al Serengeti?",
        "risposta": "Sí, sobre todo de julio a octubre: la concentración de elefantes y los baobabs no se parecen a nada más del circuito. Es además el parque más cercano a Arusha, cómodo para el primer día."
      },
      {
        "domanda": "¿Cuánto cuestan Tarangire y Manyara en 2026?",
        "risposta": "50 $ por persona cada 24 horas por cada parque en temporada alta, más el 18 % de IVA, y 15 $ para niños de 5 a 15 años. El safari nocturno, las caminatas y la canoa se pagan aparte."
      },
      {
        "domanda": "¿Basta medio día para el lago Manyara?",
        "risposta": "Sí, para el recorrido clásico entre bosque y lago. Para llegar a las fuentes de Maji Moto o hacer la pasarela colgante con calma hace falta casi todo el día."
      },
      {
        "domanda": "¿Se ven leones en los árboles en Manyara?",
        "risposta": "A veces, pero no está garantizado: son más la fama del parque que una certeza. El bosque, los babuinos y las aves están siempre."
      },
      {
        "domanda": "¿Hay flamencos todo el año?",
        "risposta": "No: depende del nivel del agua del lago, que cambia mucho de un año a otro. Conviene preguntar al operador antes de salir."
      },
      {
        "domanda": "¿Hay moscas tse-tse en Tarangire?",
        "risposta": "En algunas zonas boscosas sí. Ayudan la ropa clara y larga, evitando el azul y el negro que las atraen, y un repelente."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Una manada de elefantes cruza el río Tarangire, con baobabs en la orilla',
    immagine: '/images/tanzania/tarangire-elefanti.jpg',
  },
  {
    slug: 'zanzibar',
    paeseSlug: 'tanzania',
    ordine: 4,
    nome: 'Zanzíbar',
    tipologia: ['mare', 'spiagge', 'città storica'],
    giorniConsigliati: '4-5 días, después del safari',
    visitataPersonalmente: true,
    introduzione:
      'La isla principal del archipiélago (Unguja) es el mar clásico después del safari: Stone Town, la ciudad vieja patrimonio de la UNESCO, y las playas blancas del océano Índico, desde Nungwi y Kendwa en el norte hasta Paje y Jambiani en la costa este.',
    percheAndarci:
      'Para cerrar el viaje con días de playa, y por una ciudad histórica que mezcla cultura suajili, árabe, india y europea.',
    cosaVedere: [
      'Stone Town, con las puertas talladas, las callejuelas y el paseo marítimo (ver la ficha de experiencia)',
      'Las playas del norte, Nungwi y Kendwa, donde la marea se nota menos',
      'La costa este, Paje y Jambiani, con la marea baja que deja al descubierto la laguna',
      'El bosque de Jozani, con los colobos rojos de Zanzíbar',
    ],
    cosaFare: [
      'Snorkel alrededor del atolón de Mnemba',
      'Kitesurf en Paje',
      'Cena en el mercado nocturno de los Forodhani Gardens en Stone Town',
    ],
    doveDormire:
      'Una o dos noches en Stone Town para la ciudad, luego la playa: el norte para bañarse a cualquier hora, la costa este para el kitesurf y los pueblos más tranquilos.',
    comeArrivare:
      "El aeropuerto de Zanzíbar (ZNZ) está a unos veinte minutos de Stone Town y tiene vuelos internos desde Arusha, el Kilimanjaro y Dar es Salaam, además de vuelos internacionales directos. Desde Dar es Salaam hay también ferris rápidos, unas 2 horas hasta el puerto de Stone Town. A la entrada hace falta el seguro obligatorio de Zanzíbar (44 $).",
    comeSpostarsi: 'Taxis o traslados acordados entre Stone Town y las playas; por Stone Town se va a pie.',
    periodoMigliore: 'de junio a octubre y de diciembre a febrero, fuera de las estaciones de lluvias',
    costi:
      "Seguro obligatorio 44 $ por persona para estancias de hasta 92 días, unos 38 €. Económico: unos 40-60 € al día con casa de huéspedes, comida en los Forodhani Gardens y dala dala. Medio: 100-160 € con hotel junto al mar, taxis y alguna salida en barca. Alto: más de 350 € en resorts de playa u hoteles históricos de Stone Town.",
    erroriDaEvitare: [
      'Elegir la costa este sin saber lo de la marea: con la marea baja el mar se retira cientos de metros',
      'Pasear por Stone Town en bañador o camiseta de tirantes: fuera de las playas se cubren hombros y rodillas',
      'Llegar sin el seguro de Zanzíbar ya comprado online y hacer cola en el aeropuerto',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Stone Town",
        "testo": "La ciudad vieja de callejones, puertas de madera tallada y paseo marítimo, patrimonio de la UNESCO desde 2000, donde la arquitectura mezcla influencias árabes, persas, indias y europeas con la cultura suajili. Se recorre a pie en una mañana, perdiéndose a propósito por las callejuelas.",
        "come": "A pie por los callejones, con un guía el primer día.",
        "quando": "Mañana y tarde-noche, evitando las horas de más calor.",
        "tempo": "Medio día",
        "lat": -6.1624,
        "lng": 39.1913,
        "consiglio": "Cenar en el mercado nocturno de los Forodhani Gardens, junto al Fuerte Viejo, cuando tras el atardecer se asa el pescado."
      },
      {
        "nome": "Forodhani Gardens",
        "testo": "El jardín del paseo marítimo de Stone Town que cada tarde se convierte en un mercado de comida callejera: brochetas de pescado, pulpo, la «pizza de Zanzíbar» hecha a la plancha y zumo de caña. Al atardecer los chicos se tiran al agua desde el muelle.",
        "come": "A pie desde el centro de Stone Town.",
        "quando": "Desde el atardecer.",
        "tempo": "1-2 horas",
        "lat": -6.1606,
        "lng": 39.1886,
        "consiglio": "Preguntar el precio antes de que el pescado vaya a la parrilla."
      },
      {
        "nome": "Fuerte Viejo",
        "testo": "El fuerte construido por los omaníes a finales del siglo XVII, el edificio más antiguo de Stone Town. En el patio hay tiendas de artesanía y un anfiteatro donde se celebran conciertos y eventos, entre ellos el festival Sauti za Busara.",
        "come": "A pie, en el paseo marítimo junto a los Forodhani Gardens.",
        "quando": "Mañana o final de la tarde.",
        "tempo": "30 minutos",
        "lat": -6.1614,
        "lng": 39.1891
      },
      {
        "nome": "Catedral anglicana y antiguo mercado de esclavos",
        "testo": "La catedral de Christ Church se construyó entre 1873 y 1880 en el lugar del último mercado de esclavos de Zanzíbar, cerrado en 1873. Al lado están las celdas subterráneas, un pequeño museo y el monumento con las figuras encadenadas.",
        "come": "A pie en el barrio de Mkunazini, con el guía del lugar.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "lat": -6.1629,
        "lng": 39.1926
      },
      {
        "nome": "Mercado de Darajani",
        "testo": "El mercado principal de Stone Town, con secciones de pescado, carne, fruta y especias. Es ruidoso y abarrotado, y enseña la ciudad real detrás de los callejones restaurados.",
        "come": "A pie, en el borde oriental de la ciudad vieja.",
        "quando": "Primera hora de la mañana, cuando llega el pescado.",
        "tempo": "1 hora",
        "lat": -6.1622,
        "lng": 39.1937
      },
      {
        "nome": "Prison Island (Changuu)",
        "testo": "Una islita frente a Stone Town con la prisión construida a finales del siglo XIX y luego usada como estación de cuarentena, y un recinto con las tortugas gigantes de Aldabra. Alrededor se hace esnórquel en el arrecife.",
        "come": "En barca desde Stone Town, una media hora.",
        "quando": "Mañana, con el mar más tranquilo.",
        "tempo": "Medio día",
        "lat": -6.1192,
        "lng": 39.1667
      },
      {
        "nome": "Banco de arena de Nakupenda",
        "testo": "Una lengua de arena blanca que emerge con la marea baja frente a Stone Town, en medio del mar turquesa. Se para para bañarse, hacer esnórquel y a menudo comer pescado.",
        "come": "En barca desde Stone Town; a menudo combinado con Prison Island.",
        "quando": "Con la marea baja, que decide los horarios de la salida.",
        "tempo": "Medio día",
        "lat": -6.172,
        "lng": 39.149
      },
      {
        "nome": "Bosque de Jozani",
        "testo": "El bosque del parque nacional Jozani-Chwaka Bay, con el colobo rojo de Zanzíbar, un mono que solo vive en la isla y está en peligro. La visita incluye también una pasarela de madera entre los manglares.",
        "come": "En coche desde Stone Town, unos 45 minutos; se visita con un guía del parque.",
        "quando": "Mañana.",
        "tempo": "2 horas",
        "lat": -6.233,
        "lng": 39.404
      },
      {
        "nome": "Granjas de especias",
        "testo": "Las plantaciones del interior de la isla donde crecen el clavo, la canela, la nuez moscada, la vainilla y la pimienta, las especias que hicieron rica a Zanzíbar. La visita suele terminar con una degustación de fruta tropical.",
        "come": "Con un tour o un conductor desde Stone Town, a 20-40 minutos en coche.",
        "quando": "Mañana.",
        "tempo": "2-3 horas"
      },
      {
        "nome": "Atolón de Mnemba",
        "testo": "El arrecife de coral alrededor de la islita privada de Mnemba, en el área marina protegida, famoso por el esnórquel con peces tropicales, tortugas y a menudo delfines. La isla se ve desde la barca: el desembarco es solo para los huéspedes del resort.",
        "come": "En barca desde Matemwe o Nungwi.",
        "quando": "Mañana, con el mar en calma.",
        "tempo": "Medio día",
        "lat": -5.8196,
        "lng": 39.3837,
        "consiglio": "Elegir una salida que no persiga a los delfines: a la larga los aleja."
      },
      {
        "nome": "Nungwi",
        "testo": "El pueblo en la punta norte de la isla, con playas donde la marea se nota poco, astilleros donde aún se construyen dhows a mano y atardeceres sobre el mar. Es la zona más animada, con bares y restaurantes.",
        "come": "Taxi o dala dala desde Stone Town, una hora y media.",
        "quando": "Todo el año, para bañarse a cualquier hora.",
        "tempo": "Un día o más",
        "lat": -5.7272,
        "lng": 39.2992
      },
      {
        "nome": "Kendwa",
        "testo": "La playa al sur de Nungwi, larga y blanca, donde el mar sigue profundo incluso con la marea baja. Es la elección clásica para nadar todo el día.",
        "come": "Taxi desde Stone Town, una hora y media; a pie por la playa desde Nungwi con la marea baja.",
        "quando": "Todo el año.",
        "tempo": "Un día o más",
        "lat": -5.7535,
        "lng": 39.2897
      },
      {
        "nome": "Paje",
        "testo": "La costa este, con una playa ancha y una laguna poco profunda donde la marea cambia mucho el paisaje: conviene mirar los horarios. El viento constante la ha convertido en la capital del kitesurf de la isla.",
        "come": "En coche desde Stone Town, una hora.",
        "quando": "Con la marea alta para bañarse; de junio a septiembre y de diciembre a febrero para el viento.",
        "tempo": "Un día",
        "lat": -6.2667,
        "lng": 39.5341
      },
      {
        "nome": "Jambiani",
        "testo": "Un pueblo de la costa este, más tranquilo que Paje, donde con la marea baja las mujeres cultivan algas en la laguna. La playa es larguísima y el mar cambia de color según la hora.",
        "come": "En coche desde Stone Town, una hora y cuarto.",
        "quando": "Con la marea alta para bañarse.",
        "tempo": "Un día",
        "lat": -6.3167,
        "lng": 39.55
      },
      {
        "nome": "Cueva de Kuza",
        "testo": "Una cueva caliza en el interior de Jambiani con una poza de agua dulce y transparente donde uno se baña. Para la gente del pueblo es un lugar con valor espiritual.",
        "come": "En coche o en bici desde Jambiani.",
        "quando": "En las horas de calor, cuando el agua fresca se agradece.",
        "tempo": "1 hora",
        "lat": -6.3038,
        "lng": 39.5334
      },
      {
        "nome": "The Rock",
        "testo": "Un restaurante construido sobre una roca frente a la playa de Michamvi Pingwe, al que se llega a pie con la marea baja y en barca con la alta. Se ha convertido en uno de los símbolos de la isla.",
        "come": "En coche desde Stone Town o Paje; se reserva con antelación.",
        "quando": "Almuerzo o atardecer.",
        "tempo": "2 horas",
        "lat": -6.152,
        "lng": 39.5194
      },
      {
        "nome": "Kizimkazi",
        "testo": "El pueblo de pescadores en la punta sur, con una de las mezquitas más antiguas de África oriental, que conserva una inscripción de 1107. De aquí salen las barcas para ver delfines.",
        "come": "En coche desde Stone Town, una hora.",
        "quando": "Primera hora de la mañana para los delfines.",
        "tempo": "Medio día",
        "lat": -6.433,
        "lng": 39.4623,
        "consiglio": "Las salidas con delfines suelen estar abarrotadas: elegir a quien mantiene la distancia y no hace saltar a todos encima de los animales."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Stone Town a pie, mercado de Darajani y catedral",
          "Tarde: Fuerte Viejo y paseo marítimo",
          "Noche: Forodhani Gardens"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Stone Town y Forodhani Gardens",
          "Día 2: Prison Island y banco de Nakupenda, luego una granja de especias"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Stone Town",
          "Día 2: bosque de Jozani, costa este y The Rock",
          "Día 3: esnórquel en Mnemba o playa en el norte"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stone Town",
        "perChi": "quien busca cultura",
        "testo": "Hoteles históricos y casas de huéspedes en la ciudad vieja, sin playa: una o dos noches bastan."
      },
      {
        "nome": "Norte (Nungwi, Kendwa)",
        "perChi": "quien quiere playa y ambiente",
        "testo": "Playas, bares y vida nocturna, con baño posible a cualquier hora."
      },
      {
        "nome": "Noreste (Matemwe, Kiwengwa)",
        "perChi": "quien quiere resorts tranquilos y Mnemba cerca",
        "testo": "Resorts grandes y pequeños en playas largas, con el arrecife delante; aquí la marea se nota."
      },
      {
        "nome": "Este (Paje, Jambiani, Michamvi)",
        "perChi": "quien quiere kitesurf y ambiente",
        "testo": "Playas amplias, más tranquilo; el baño depende de las mareas."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "En restaurantes junto al mar."
      },
      {
        "nome": "Urojo",
        "testo": "Sopa especiada de Zanzíbar, en el mercado."
      },
      {
        "nome": "Pilau",
        "testo": "Arroz especiado."
      },
      {
        "nome": "Zumo de caña",
        "testo": "Recién exprimido en los quioscos."
      }
    ],
    attenzioni: [
      "Elegir la costa este sin consultar las mareas: con la marea baja bañarse puede ser difícil.",
      "Pasear por Stone Town en bañador o camiseta de tirantes: fuera de las playas se cubren hombros y rodillas.",
      "Llegar sin el seguro obligatorio de Zanzíbar (ZIC): se compra online en visitzanzibar.go.tz o a la llegada, y vale para toda la estancia.",
      "Vendedores de excursiones en la playa: comparar precios con el hotel."
    ],
    gite: [
      {
        "nome": "Bahía de Menai y Kwale",
        "distanza": "unos 40 minutos en coche hasta Fumba, luego en barca",
        "come": "Con las salidas en dhow desde Fumba, al suroeste de Stone Town.",
        "testo": "Un área marina protegida con bancos de arena, manglares, esnórquel y la isla de Kwale con su gran baobab. El día suele incluir un almuerzo de pescado a la parrilla."
      },
      {
        "nome": "Dar es Salaam",
        "distanza": "unas 2 horas en ferry rápido",
        "come": "Ferris rápidos desde el puerto de Stone Town, varias salidas al día.",
        "testo": "La ciudad más grande de Tanzania, con el mercado de pescado de Kivukoni y el Museo Nacional. Más que una excursión es la puerta de entrada para quien sigue el viaje por el continente."
      }
    ],
    faq: [
      {
        "domanda": "¿Hace falta un seguro para entrar en Zanzíbar?",
        "risposta": "Sí: desde 2024 el seguro de viaje de Zanzíbar es obligatorio, 44 $ por persona para estancias de hasta 92 días. Se compra en línea antes de salir o a la llegada. Quien entra antes por el continente con la póliza NIC, obligatoria allí desde el 1 de octubre de 2026, no tiene que comprar otra."
      },
      {
        "domanda": "¿Mejor la costa norte o la este?",
        "risposta": "El norte, Nungwi y Kendwa, para bañarse a cualquier hora. La costa este, Paje y Jambiani, para el kitesurf y pueblos más tranquilos, sabiendo que con la marea baja el mar se retira cientos de metros."
      },
      {
        "domanda": "¿Cuántos días hacen falta en Zanzíbar?",
        "risposta": "Cuatro o cinco: uno o dos en Stone Town y el resto en el mar con un par de salidas en barca. Después de un safari es la forma clásica de cerrar el viaje."
      },
      {
        "domanda": "¿Cómo vestirse en Stone Town?",
        "risposta": "Cubriendo hombros y rodillas: Zanzíbar es mayoritariamente musulmana y el bañador se deja para las playas. Durante el Ramadán se evita comer y beber por la calle de día."
      },
      {
        "domanda": "¿Cuándo conviene ir?",
        "risposta": "De junio a octubre y de diciembre a febrero, fuera de las dos estaciones de lluvias. Abril y mayo son los meses más lluviosos."
      },
      {
        "domanda": "¿Cómo moverse por la isla?",
        "risposta": "En taxi o traslado acordado, o en dala dala, los minibuses locales, que cuestan muy poco pero son lentos. El precio del taxi se fija antes de subir."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: ['stone-town'],
    tripSlugs: [],
    imageAlt: 'La playa blanca de Nungwi, en el norte de Zanzíbar, con el mar turquesa y las casas en la orilla',
    immagine: '/images/tanzania/zanzibar-nungwi.jpg',
  },
  {
    slug: 'arusha-kilimanjaro',
    paeseSlug: 'tanzania',
    ordine: 5,
    nome: 'Arusha y el Kilimanjaro',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 noche antes y después del safari; 6-8 días para subir el Kilimanjaro',
    visitataPersonalmente: false,
    introduzione:
      'Arusha es la ciudad de la que salen casi todos los safaris del norte, a los pies del monte Meru; un poco más al este está el Kilimanjaro, la montaña más alta de África, con Moshi como base para quien lo sube.',
    percheAndarci:
      'Es la base logística del viaje: aquí se llega, se conoce al operador y se sale hacia los parques. Quien tenga más tiempo puede añadir el trekking en el Kilimanjaro o en el Meru.',
    cosaVedere: [
      'El Kilimanjaro, que en los días despejados se ve incluso desde la carretera',
      'El parque nacional de Arusha, a los pies del monte Meru, para una jornada a pie o en coche',
    ],
    cosaFare: [
      'Subida al Kilimanjaro por una de las rutas clásicas (Machame, Lemosho, Marangu, Rongai)',
      'Trekking de 3-4 días en el monte Meru',
      'Excursión a las cascadas de Materuni y a una plantación de café cerca de Moshi',
    ],
    doveDormire: 'En Arusha hay lodges y hoteles de todos los precios; para el Kilimanjaro la base es Moshi.',
    comeArrivare:
      "El Kilimanjaro International Airport (JRO) está entre Arusha y Moshi, a una hora de Arusha y 45 minutos de Moshi, con vuelos internacionales con escala en el Golfo, Etiopía, Kenia o Europa. El aeropuerto de Arusha (ARK), en las afueras occidentales de la ciudad, atiende los vuelos internos hacia los parques y Zanzíbar. Los operadores suelen incluir el traslado.",
    comeSpostarsi: 'Traslado organizado por el operador o taxi; mucho tráfico en la ciudad en hora punta.',
    periodoMigliore: 'de junio a octubre y de enero a febrero para el Kilimanjaro, fuera de las lluvias',
    costi:
      "Parque de Arusha 50 $ por persona cada 24 horas en temporada alta, unos 43 €, más IVA; Kilimanjaro 70 $ al día más refugios o campings y 20 $ de tasa de rescate (2026). Económico: unos 35-50 € al día en Arusha o Moshi con casa de huéspedes, comida local y dala dala. Medio: 80-130 € con lodge con jardín y taxis. Alto: más de 250 € en los lodges con encanto hacia Usa River.",
    erroriDaEvitare: [
      'Reservar el primer día de safari el mismo día del vuelo intercontinental: mejor una noche en Arusha',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kilimanjaro",
        "testo": "La montaña más alta de África, 5.895 metros en el Uhuru Peak. Según TANAPA la subida al Kibo lleva de 5 a 8 días según la ruta: entre las más conocidas, Machame, Lemosho, Marangu y Rongai. En los días claros se ve incluso desde la carretera.",
        "come": "Con un operador autorizado, con guías y porteadores.",
        "quando": "Evitar las dos estaciones de lluvias, de marzo a mayo y en torno a noviembre.",
        "tempo": "5-8 días",
        "costo": "Entrada 70 $ por persona y día, unos 60 €, más el 18 % de IVA; refugios de la ruta Marangu 60 $ por noche, campings 50 $ por noche, tasa de rescate 20 $ por ascensión (2026)",
        "lat": -3.0764,
        "lng": 37.354,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/kilimanjaro",
        "consiglio": "Más días significan más aclimatación y más probabilidades de llegar a la cima."
      },
      {
        "nome": "Parque nacional de Arusha",
        "testo": "El parque al pie del monte Meru (4.566 metros, la segunda cumbre de Tanzania): la llanura de «Serengeti Ndogo» con búfalos, cebras y jirafas, el cráter de Ngurdoto y el bosque con colobos blancos y negros. Es uno de los pocos parques del norte donde se camina con un ranger.",
        "come": "En coche desde Arusha, unos 40 minutos; las caminatas con ranger se organizan en la puerta.",
        "quando": "Mañana, cuando el Kilimanjaro y el Meru suelen estar despejados.",
        "tempo": "Un día",
        "costo": "Entrada 50 $ por persona cada 24 horas en temporada alta, unos 43 €, más el 18 % de IVA; niños de 5 a 15 años 15 $ (2026)",
        "orari": "Abierto todos los días del año; las puertas cierran a las 18:00.",
        "lat": -3.25,
        "lng": 36.8333,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Monte Meru",
        "testo": "El volcán que domina Arusha, que se sube en 3-4 días con un ranger armado obligatorio, durmiendo en los refugios de Miriakamba y Saddle. Desde la cresta final se ve el Kilimanjaro al amanecer, y es una aclimatación excelente antes del Kili.",
        "come": "Desde la puerta de Momella, dentro del parque nacional de Arusha, con ranger y porteadores.",
        "quando": "De junio a octubre y de enero a febrero.",
        "tempo": "3-4 días",
        "costo": "Refugios 30 $ por noche, unos 26 €; ranger 15 $ al día por grupo y tasa de rescate 20 $ por ascensión, además de la entrada al parque (2026)",
        "lat": -3.2467,
        "lng": 36.7483,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Lagos Momella",
        "testo": "Un grupo de lagos poco profundos en el parque de Arusha, cada uno de un color distinto según las algas y los minerales, con flamencos, hipopótamos y aves acuáticas. En el Pequeño Momella se puede ir en canoa.",
        "come": "En el safari por el parque o en canoa con un guía.",
        "quando": "Mañana.",
        "tempo": "2-3 horas",
        "costo": "Canoa 20 $ por persona, unos 17 € (2026)",
        "lat": -3.2276,
        "lng": 36.896,
        "url": "https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff/arusha"
      },
      {
        "nome": "Materuni y los pueblos del café cerca de Moshi",
        "testo": "Los pueblos chagga en las laderas del Kilimanjaro alrededor de Moshi, con cafetales y cascadas que se visitan con guías locales; el más conocido es Materuni, con una cascada alta y una poza natural. La visita suele incluir el tostado del café a mano.",
        "come": "En coche desde Moshi, unos 30-40 minutos, y luego a pie con un guía del pueblo.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "lat": -3.2502,
        "lng": 37.4001
      },
      {
        "nome": "Moshi",
        "testo": "La ciudad al pie del Kilimanjaro, más tranquila que Arusha, de donde salen casi todas las ascensiones. El mercado central y las calles del centro se recorren a pie, y en las mañanas claras la cumbre aparece sobre los tejados.",
        "come": "En coche desde Arusha, una hora y media; desde el Kilimanjaro International Airport unos 45 minutos.",
        "quando": "Primera hora de la mañana para ver la montaña.",
        "tempo": "Medio día",
        "lat": -3.3349,
        "lng": 37.3404
      },
      {
        "nome": "Centro de Arusha",
        "testo": "La ciudad de los safaris, con la Clock Tower en el centro, el mercado central y el mercado masái de artesanía. Más que un destino es el sitio donde se conoce al operador, se cambia dinero y se hacen las últimas compras.",
        "come": "A pie por el centro, con taxi o bajaji para los trayectos más largos.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "lat": -3.3724,
        "lng": 36.6945
      },
      {
        "nome": "Cultural Heritage Centre",
        "testo": "Un gran edificio a las afueras de Arusha, en la carretera hacia los parques, con una galería de arte africano contemporáneo y tiendas de artesanía, telas y tanzanita.",
        "come": "En coche o taxi, en la carretera de Dodoma a la salida oeste de la ciudad.",
        "quando": "Por la tarde, al volver del safari.",
        "tempo": "1 hora",
        "lat": -3.3772,
        "lng": 36.6583
      },
      {
        "nome": "Fuentes de Kikuletwa (Chemka)",
        "testo": "Una poza natural de agua turquesa y templada entre higueras, alimentada por manantiales, a medio camino entre Arusha y Moshi. Uno se baña y se lanza desde las cuerdas colgadas de los árboles.",
        "come": "En coche, con el último tramo por pista de tierra.",
        "quando": "Entre semana, con menos gente.",
        "tempo": "Medio día",
        "lat": -3.4443,
        "lng": 37.1938
      },
      {
        "nome": "Lago Chala",
        "testo": "Un lago volcánico dentro de un cráter en la frontera con Kenia, de agua azul y paredes empinadas cubiertas de bosque. Se camina por el borde y se baja hasta la orilla.",
        "come": "En coche desde Moshi, una hora y media.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "lat": -3.3174,
        "lng": 37.7001
      },
      {
        "nome": "Lago Duluti",
        "testo": "Un pequeño lago de cráter cerca de Arusha rodeado de bosque, con un sendero circular y salidas en canoa. Con el cielo despejado, al fondo está el Meru.",
        "come": "En coche desde Arusha, unos 20-30 minutos hacia Tengeru.",
        "quando": "Mañana o final de la tarde.",
        "tempo": "2 horas",
        "lat": -3.3868,
        "lng": 36.7889
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: parque de Arusha y lagos Momella",
          "Tarde: cascada de Materuni y café"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: parque de Arusha con caminata y canoa",
          "Día 2: lago Duluti por la mañana, fuentes de Kikuletwa por la tarde"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: centro de Arusha y Cultural Heritage Centre",
          "Día 2: parque de Arusha",
          "Día 3: Moshi, Materuni y café"
        ]
      }
    ],
    zone: [
      {
        "nome": "Arusha",
        "perChi": "quien empieza el safari",
        "testo": "Ciudad de salida de los safaris, con hoteles y agencias; las zonas más tranquilas están fuera del centro, hacia la carretera de Moshi."
      },
      {
        "nome": "Usa River y Tengeru",
        "perChi": "quien quiere verde cerca del parque de Arusha",
        "testo": "Lodges entre plantaciones y jardines en la carretera hacia el Kilimanjaro, a medio camino entre la ciudad y el aeropuerto."
      },
      {
        "nome": "Moshi",
        "perChi": "quien sube al Kilimanjaro",
        "testo": "Ciudad al pie de la montaña, con casas de huéspedes y hoteles sencillos donde se encuentran los operadores de trekking."
      }
    ],
    sapori: [
      {
        "nome": "Café del Kilimanjaro",
        "testo": "Cultivado en las laderas de la montaña."
      },
      {
        "nome": "Ugali",
        "testo": "Con guisos de carne."
      },
      {
        "nome": "Nyama choma",
        "testo": "Carne a la brasa."
      },
      {
        "nome": "Chai",
        "testo": "Té especiado."
      }
    ],
    attenzioni: [
      "Reservar el primer safari el mismo día del vuelo intercontinental: mejor una noche en Arusha.",
      "Subir el Kilimanjaro sin aclimatación: el mal de altura es común.",
      "Elegir un operador solo por el precio: cuentan seguridad, pago de los porteadores y licencia."
    ],
    gite: [
      {
        "nome": "Parque de Tarangire",
        "distanza": "unas 2 horas en coche desde Arusha",
        "come": "En 4x4 con guía, saliendo al amanecer.",
        "testo": "Los baobabs y las manadas de elefantes junto al río: es el parque del circuito norte que mejor se hace en el día desde Arusha."
      },
      {
        "nome": "Lago Manyara",
        "distanza": "unas 2 horas en coche desde Arusha",
        "come": "En 4x4, por la carretera asfaltada hacia Mto wa Mbu.",
        "testo": "El bosque, el lago alcalino y el escarpe del Rift, que se recorren en medio día."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta para subir el Kilimanjaro?",
        "risposta": "De 5 a 8 según la ruta. Las rutas de 7-8 días, como Lemosho, dan más tiempo para aclimatarse y aumentan las probabilidades de llegar al Uhuru Peak."
      },
      {
        "domanda": "¿Cuánto cuestan las tarifas del parque del Kilimanjaro en 2026?",
        "risposta": "70 $ por persona y día de entrada, más IVA, más 60 $ por noche en los refugios o 50 $ en los campings y 20 $ de tasa de rescate. En una ascensión de una semana solo las tarifas del parque rondan los 900 $ por persona."
      },
      {
        "domanda": "¿Hace falta una noche en Arusha antes del safari?",
        "risposta": "Sí, es lo más prudente: los vuelos intercontinentales suelen llegar por la noche y el primer día de safari empieza al amanecer."
      },
      {
        "domanda": "¿Mejor dormir en Arusha o en Moshi?",
        "risposta": "Arusha para los safaris del circuito norte, Moshi para el Kilimanjaro. El Kilimanjaro International Airport está más o menos a medio camino."
      },
      {
        "domanda": "¿Se ve el Kilimanjaro desde Arusha?",
        "risposta": "En los días claros sí, sobre todo al amanecer y de junio a octubre. A menudo, sin embargo, la cumbre se queda entre las nubes durante días."
      },
      {
        "domanda": "¿El Meru es un buen entrenamiento para el Kilimanjaro?",
        "risposta": "Sí: llega a 4.566 metros y se sube en 3-4 días, así que ayuda a aclimatarse. Muchos lo hacen justo antes del Kili."
      }
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'El Kilimanjaro sobre las nubes, con acacias en primer plano',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
