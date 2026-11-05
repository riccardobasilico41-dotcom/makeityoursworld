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
      'Desde Arusha en todoterreno, normalmente pasando por Tarangire o el Ngorongoro: es una larga jornada de carretera. Como alternativa, vuelo interno desde Arusha a una de las pistas del parque.',
    comeSpostarsi: 'En todoterreno con conductor-guía: dentro del parque no se camina solo.',
    periodoMigliore: 'de junio a octubre (estación seca, migración en el norte desde julio); de diciembre a marzo en el sur, para los nacimientos',
    costi:
      'Entrada de unos 83 $ por persona cada 24 horas en temporada alta y 71 $ en baja, IVA incluido, más la tasa de pernoctación en campamentos y lodges (unos 59-71 $ por noche); en el camping público unos 35 $ (orientativos, a comprobar con el operador).',
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
        "nome": "Valle del Seronera",
        "testo": "El centro del parque, una de las mejores zonas para los grandes felinos: leones, leopardos en las acacias y guepardos en las llanuras. Los kopjes, los afloramientos de granito, son donde descansan los leones.",
        "come": "Safari en todoterreno con guía, desde el lodge o el campamento. No se baja del vehículo fuera de los puntos permitidos.",
        "quando": "El parque abre todo el año y las puertas cierran a las 18 (TANAPA). Los animales están más activos al amanecer y a última hora de la tarde.",
        "tempo": "1 día o más",
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "Hice el safari con Suricata Safaris, que además tiene experiencias en tienda dentro del parque: las recomiendo.",
        "costo": "Tarifa de entrada TANAPA para visitantes extranjeros: precios actualizados en la web oficial; preguntar al operador si el presupuesto incluye tasas e IVA"
      },
      {
        "nome": "Llanuras del sur y Ndutu",
        "testo": "La zona donde nacen las crías de ñu, con los depredadores siguiéndolas. Según TANAPA la temporada de partos es sobre todo enero y febrero.",
        "come": "Desde Seronera o Ngorongoro en 4x4, con guía.",
        "quando": "Sobre todo enero y febrero.",
        "tempo": "1-2 días",
        "url": "https://www.tanzaniaparks.go.tz/serengeti"
      },
      {
        "nome": "Río Mara y migración",
        "testo": "En el norte del parque, durante la estación seca, los cruces del río Mara de ñus y cebras, con los cocodrilos esperando.",
        "come": "Desde Seronera en 4x4, muchas horas de camino; muchos campamentos son fijos en el norte.",
        "quando": "Estación seca: TANAPA indica junio-octubre para la migración. El momento exacto de los cruces cambia cada año.",
        "tempo": "1-2 días",
        "url": "https://www.tanzaniaparks.go.tz/serengeti",
        "consiglio": "Preguntar al operador dónde está la migración en el mes del viaje: cambia cada año."
      },
      {
        "nome": "Globo aerostático al amanecer",
        "testo": "Un vuelo sobre la llanura al amanecer, normalmente seguido de un desayuno en la sabana.",
        "come": "Se reserva con un operador, saliendo del campamento antes del amanecer.",
        "quando": "Amanecer.",
        "tempo": "3-4 horas"
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: safari en Seronera, atardecer con los leones",
          "Día 2: globo al amanecer o safari, salida"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2 como arriba",
          "Día 3: norte o sur según el mes, siguiendo la migración"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campamentos de tiendas",
        "perChi": "quien quiere el safari más auténtico",
        "testo": "Tiendas con camas y baño, en medio de la sabana. De noche se oyen los animales."
      },
      {
        "nome": "Lodges",
        "perChi": "quien quiere más comodidad",
        "testo": "Habitaciones de verdad y piscina, a menudo con vistas panorámicas."
      },
      {
        "nome": "Camping público",
        "perChi": "quien quiere gastar menos",
        "testo": "El más barato, con servicios básicos."
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
      'Lodges y campings en el borde del cráter, a unos 2.300 metros: de noche hace frío de verdad. Es más barato dormir en Karatu, fuera del área protegida, y subir temprano por la mañana.',
    comeArrivare: 'Desde Arusha en todoterreno, pasando por Karatu; es también la parada de paso entre Arusha y el Serengeti.',
    comeSpostarsi: 'En todoterreno con conductor-guía, con bajada y subida por pistas específicas.',
    periodoMigliore: 'todo el año; en la estación seca la hierba está baja y los animales se ven mejor',
    costi:
      'Tarifas oficiales de la NCAA para visitantes no residentes de fuera de África oriental: entrada 70,80 $ por persona cada 24 horas (23,60 $ para niños de 5 a 15 años), más 295 $ por vehículo por cada bajada al cráter y el permiso del todoterreno.',
    erroriDaEvitare: [
      'Bajar a media mañana: los primeros vehículos entran al amanecer y encuentran el cráter más vacío',
      'Subestimar el frío en el borde, por la noche y a primera hora',
      'Calcular el safari sin la tasa del cráter, que se paga por vehículo y por eso pesa más en los grupos pequeños',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Fondo del cráter",
        "testo": "El fondo de una caldera volcánica intacta de unos 260 km², de unos 610 metros de profundidad, con el lago salado Magadi y pantanos. Viven aquí leones, elefantes, hipopótamos y una pequeña población de rinocerontes negros.",
        "come": "Se baja por una carretera empinada en todoterreno con guía. Cada bajada paga una tasa por vehículo.",
        "quando": "Amanecer: los primeros vehículos entran temprano y encuentran el cráter más vacío.",
        "tempo": "Medio día",
        "costo": "70,80 $ por persona cada 24 horas para no residentes desde 16 años (23,60 $ de 5 a 15), más 295 $ por vehículo por cada bajada al cráter (tarifas NCAA, 2026)",
        "url": "https://www.ncaa.go.tz/tariffs/",
        "consiglio": "La tasa del cráter es por vehículo: pesa más en los grupos pequeños."
      },
      {
        "nome": "Garganta de Olduvai",
        "testo": "El yacimiento paleoantropológico en las llanuras del Área de Conservación, fuera del cráter, donde se hallaron restos de Homo habilis. Hay un museo con explicaciones.",
        "come": "En la carretera entre el cráter y el Serengeti.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "url": "https://www.ncaa.go.tz/tariffs/",
        "costo": "35,40 $ por persona desde 16 años, junto con Shifting Sand (tarifa NCAA, 2026)"
      },
      {
        "nome": "Boma masái",
        "testo": "Una visita a una aldea masái, con danzas, casas de barro y explicaciones sobre la vida de los pastores.",
        "come": "Con el operador, en el camino alrededor del cráter.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "consiglio": "Preguntar de antemano qué incluye y cuánto va a las aldeas.",
        "costo": "Entrada a los bomas culturales 20 $ por vehículo (tarifa NCAA, 2026), más lo que pida el poblado"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Amanecer: descenso al cráter",
          "Almuerzo en el fondo, en el área de picnic",
          "Tarde: subida, visita al boma o a Olduvai"
        ]
      }
    ],
    zone: [
      {
        "nome": "Borde del cráter",
        "perChi": "quien quiere vista y amanecer",
        "testo": "Lodges y campamentos en el borde, con vistas a la caldera. Frío por la noche."
      },
      {
        "nome": "Karatu",
        "perChi": "quien quiere gastar menos",
        "testo": "Pequeña ciudad cerca de la entrada del cráter, con lodges económicos."
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
    comeArrivare: 'Desde Arusha en todoterreno: son los dos parques del circuito norte más cercanos a la ciudad.',
    comeSpostarsi: 'En todoterreno con conductor-guía.',
    periodoMigliore: 'de junio a octubre, cuando los animales se concentran alrededor del agua',
    costi: 'Entrada orientativa de unos 50-60 $ por persona cada 24 horas para cada parque (tarifas de TANAPA según los operadores, a comprobar).',
    erroriDaEvitare: [
      'Saltarse Tarangire para correr al Serengeti: en la estación seca vale el viaje por sí solo',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Parque nacional de Tarangire",
        "testo": "Baobabs, miles de elefantes, la población más densa de Tanzania según TANAPA, y animales que se concentran junto al río en la estación seca.",
        "come": "Safari en todoterreno con guía.",
        "quando": "Estación seca, cuando los animales se reúnen junto al agua. Las puertas cierran a las 18.",
        "tempo": "1 día",
        "url": "https://www.tanzaniaparks.go.tz/tarangire",
        "consiglio": "En la estación seca vale por sí solo el viaje: no saltárselo por correr hacia el Serengeti.",
        "costo": "Tarifa de entrada TANAPA para visitantes extranjeros: precios actualizados en la web oficial; preguntar al operador si el presupuesto incluye tasas e IVA"
      },
      {
        "nome": "Lago Manyara",
        "testo": "Un bosque alimentado por aguas subterráneas, con caobas, higueras y monos azules, una pasarela entre las copas, el lago alcalino con flamencos enanos cuando el nivel lo permite y el escarpe del Rift encima. Es famoso por los leones que trepan a los árboles.",
        "come": "Safari de medio día.",
        "quando": "Mañana.",
        "tempo": "Medio día",
        "url": "https://www.tanzaniaparks.go.tz/lake-manyara",
        "costo": "Tarifa de entrada TANAPA para visitantes extranjeros: precios actualizados en la web oficial; preguntar al operador si el presupuesto incluye tasas e IVA"
      },
      {
        "nome": "Mto wa Mbu",
        "testo": "El pueblo cerca de la entrada del Lago Manyara, en la carretera al Ngorongoro, donde el plátano es el cultivo principal, para recorrer con un guía local.",
        "come": "A pie o en bici con un guía local.",
        "quando": "Mañana.",
        "tempo": "1-2 horas"
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Tarangire",
          "Día 2: Manyara y Mto wa Mbu"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lodges en los parques",
        "perChi": "quien quiere el safari de verdad",
        "testo": "Lodges y campamentos en el borde del parque."
      },
      {
        "nome": "Karatu / Mto wa Mbu",
        "perChi": "quien quiere gastar menos",
        "testo": "Pueblos con lodges y campings."
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
      'Vuelo interno desde Arusha o el Kilimanjaro al aeropuerto de Zanzíbar (ZNZ), o vuelos internacionales directos; desde Dar es Salaam también el ferry rápido. A la entrada hace falta el seguro obligatorio de Zanzíbar (44 $).',
    comeSpostarsi: 'Taxis o traslados acordados entre Stone Town y las playas; por Stone Town se va a pie.',
    periodoMigliore: 'de junio a octubre y de diciembre a febrero, fuera de las estaciones de lluvias',
    costi: 'Seguro obligatorio 44 $ por persona para estancias de hasta 92 días.',
    erroriDaEvitare: [
      'Elegir la costa este sin saber lo de la marea: con la marea baja el mar se retira cientos de metros',
      'Pasear por Stone Town en bañador o camiseta de tirantes: fuera de las playas se cubren hombros y rodillas',
      'Llegar sin el seguro de Zanzíbar ya comprado online y hacer cola en el aeropuerto',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Stone Town",
        "testo": "La ciudad vieja de callejones, puertas de madera tallada y paseo marítimo, patrimonio de la UNESCO desde 2000, donde la arquitectura mezcla influencias árabes, persas, indias y europeas con la cultura suajili.",
        "come": "A pie por los callejones, con un guía el primer día.",
        "quando": "Mañana y noche.",
        "tempo": "Medio día",
        "consiglio": "Cena en el mercado nocturno de los Forodhani Gardens, junto al Fuerte Viejo, cuando tras el atardecer se asa el pescado."
      },
      {
        "nome": "Nungwi y Kendwa",
        "testo": "Las playas del norte de la isla.",
        "come": "Taxi o dala dala desde Stone Town.",
        "quando": "Todo el año.",
        "tempo": "Un día entero"
      },
      {
        "nome": "Paje y Jambiani",
        "testo": "La costa este, con playas amplias y una laguna poco profunda donde la marea cambia mucho el paisaje: conviene consultar sus horarios. Kitesurf en Paje.",
        "come": "En coche desde Stone Town.",
        "quando": "Con marea alta para el baño.",
        "tempo": "Un día entero"
      },
      {
        "nome": "Bosque de Jozani y atolón de Mnemba",
        "testo": "El bosque de Jozani, en el parque nacional Jozani-Chwaka Bay, con el colobo rojo de Zanzíbar, un mono que solo vive en la isla y está en peligro; y el atolón de Mnemba, famoso por el snorkel.",
        "come": "Jozani en coche; Mnemba en barco desde el noreste.",
        "quando": "Mañana.",
        "tempo": "Medio día cada uno"
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Stone Town",
          "Día 2: bosque de Jozani y costa este",
          "Día 3: snorkel en Mnemba o playa en el norte"
        ]
      }
    ],
    zone: [
      {
        "nome": "Stone Town",
        "perChi": "quien quiere cultura",
        "testo": "Hoteles históricos en la ciudad vieja, sin playa."
      },
      {
        "nome": "Norte (Nungwi, Kendwa)",
        "perChi": "quien quiere playa y locales",
        "testo": "Playas, locales y vida nocturna."
      },
      {
        "nome": "Este (Paje, Jambiani)",
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
    comeArrivare: 'Kilimanjaro International Airport (JRO), entre Arusha y Moshi; el aeropuerto de Arusha (ARK) sirve los vuelos internos.',
    comeSpostarsi: 'Traslado organizado por el operador o taxi; mucho tráfico en la ciudad en hora punta.',
    periodoMigliore: 'de junio a octubre y de enero a febrero para el Kilimanjaro, fuera de las lluvias',
    erroriDaEvitare: [
      'Reservar el primer día de safari el mismo día del vuelo intercontinental: mejor una noche en Arusha',
    ],
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kilimanjaro",
        "testo": "La montaña más alta de África, 5.895 metros en el Uhuru Peak. Según TANAPA la subida al Kibo requiere de 5 a 8 días según la ruta: entre las más conocidas, Machame, Lemosho, Marangu y Rongai. En días despejados se ve desde la carretera.",
        "come": "Con un operador autorizado, con guías y porteadores.",
        "quando": "Evitar las dos estaciones de lluvias, de marzo a mayo y en torno a noviembre.",
        "tempo": "5-8 días",
        "url": "https://www.tanzaniaparks.go.tz/kilimanjaro",
        "consiglio": "Más días significan más aclimatación y más posibilidades de llegar a la cima.",
        "costo": "Tarifa de entrada TANAPA para visitantes extranjeros: precios actualizados en la web oficial; preguntar al operador si el presupuesto incluye tasas e IVA"
      },
      {
        "nome": "Parque nacional de Arusha",
        "testo": "El parque al pie del monte Meru (4.566 metros, la segunda cumbre de Tanzania): la llanura de «Serengeti Ndogo» con búfalos, cebras y jirafas, los lagos Momella con hipopótamos y aves acuáticas, y paseos con un ranger.",
        "come": "En coche desde Arusha; las caminatas con guarda se organizan en la entrada.",
        "quando": "Mañana.",
        "tempo": "Un día entero",
        "url": "https://www.tanzaniaparks.go.tz/arusha",
        "costo": "Tarifa de entrada TANAPA para visitantes extranjeros: precios actualizados en la web oficial; preguntar al operador si el presupuesto incluye tasas e IVA"
      },
      {
        "nome": "Materuni y aldeas del café cerca de Moshi",
        "testo": "Las aldeas en las laderas del Kilimanjaro alrededor de Moshi, con plantaciones de café y cascadas para visitar con guías locales; la más conocida es Materuni, famosa por sus cascadas.",
        "come": "En coche desde Moshi.",
        "quando": "Mañana.",
        "tempo": "Medio día"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: parque nacional de Arusha",
          "Tarde: cascadas de Materuni y café"
        ]
      }
    ],
    zone: [
      {
        "nome": "Arusha",
        "perChi": "quien sale de safari",
        "testo": "La ciudad de salida de los safaris, con hoteles y agencias."
      },
      {
        "nome": "Moshi",
        "perChi": "quien sube el Kilimanjaro",
        "testo": "Pueblo a los pies de la montaña, con casas de huéspedes."
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
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'El Kilimanjaro sobre las nubes, con acacias en primer plano',
    immagine: '/images/tanzania/kilimanjaro.jpg',
  },
]
