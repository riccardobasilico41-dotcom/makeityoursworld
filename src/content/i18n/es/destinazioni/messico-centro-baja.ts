import type { Destinazione } from '@/lib/types'

export const destinazioniMessicoCentroBaja: Destinazione[] = [
  {
    slug: 'citta-del-messico',
    paeseSlug: 'messico',
    ordine: 10,
    nome: 'Ciudad de México',
    tipologia: ['città', 'cultura', 'archeologia', 'gastronomia'],
    giorniConsigliati: '4-5 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital está a 2.240 metros sobre el fondo de un lago desecado, encima de las ruinas de Tenochtitlán. Veinte millones de habitantes, un centro histórico patrimonio de la UNESCO, el museo arqueológico más importante de las Américas y una cocina callejera entre las más ricas del mundo.',
    percheAndarci:
      'Porque es la clave para entender el resto del país: las civilizaciones prehispánicas en el Museo de Antropología y en Teotihuacán, la historia colonial en el Zócalo, el México de hoy en los barrios de Roma, Condesa y Coyoacán. A finales de octubre es también el punto de partida del Día de los Muertos, con la procesión de las Catrinas y las grandes ofrendas públicas.',
    cosaVedere: [
      'El Zócalo, la Catedral Metropolitana y el Templo Mayor',
      'El Palacio Nacional con los murales de Diego Rivera y el Palacio de Bellas Artes',
      'El Museo Nacional de Antropología en el bosque de Chapultepec',
      'Teotihuacán, la Pirámide del Sol y la Calzada de los Muertos',
      'Coyoacán y la Casa Azul de Frida Kahlo',
      'Los canales de Xochimilco',
    ],
    cosaFare: [
      'Teotihuacán a la apertura de las 9, o en globo al amanecer',
      'Un paseo en trajinera por Xochimilco, acordando el precio por hora antes de subir',
      'Una noche de lucha libre en la Arena México (martes, viernes y domingo)',
      'Tacos al pastor y de suadero en las taquerías de barrio',
      'A finales de octubre, la Mega Procesión de Catrinas por el Paseo de la Reforma',
    ],
    doveDormire:
      'Roma Norte o Condesa, barrios arbolados y seguros a 20-30 minutos del centro. Económico 600-1.200 MXN por noche, medio 1.800-3.500 MXN, alto más de 5.000 MXN. El Centro Histórico es cómodo de día pero está vacío por la noche.',
    doveMangiare:
      'Taquerías, mercados (Coyoacán, San Juan), tamales y atole en el desayuno, churros con chocolate. Los restaurantes de autor de Roma y Polanco se reservan con semanas de antelación.',
    comeArrivare: 'Aeropuerto internacional Benito Juárez (AICM), con vuelos directos o vía una capital europea; en la ciudad, con taxi de prepago o app.',
    comeSpostarsi: 'Metro (5 MXN por viaje), Metrobús y apps de transporte; a Teotihuacán, autobús desde la Terminal del Norte. Nada de taxis parados en la calle.',
    periodoMigliore: 'de octubre a abril, estación seca; finales de octubre para el Día de los Muertos.',
    costi: 'Teotihuacán y Museo de Antropología unos 210 MXN cada uno para extranjeros desde 2026; metro 5 MXN; trajinera 600-700 MXN la hora por barca.',
    erroriDaEvitare: [
      'Coger taxis en la calle en lugar de taxis de prepago, de sitio o app',
      'Programar el Museo de Antropología o el Templo Mayor en lunes, cuando están cerrados',
      'Subestimar la altitud los dos primeros días',
      'No reservar la Casa Azul, que se agota días antes',
    ],
      "luoghi": [
        {
          "nome": "Zócalo, Catedral y Templo Mayor",
          "testo": "La plaza central con la Catedral Metropolitana, el Palacio Nacional y, al lado, el Templo Mayor, el corazón azteca de Tenochtitlan, con su museo.",
          "come": "Metro Zócalo. El Templo Mayor tiene entrada INAH aparte.",
          "quando": "Mañana; el museo y la zona arqueológica del Templo Mayor abren de martes a domingo, 9 a 17 h, y cierran los lunes.",
          "tempo": "3 horas",
          "costo": "Templo Mayor: 210 MXN para extranjeros (2026); los domingos gratis solo para mexicanos y residentes.",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Museo Nacional de Antropología",
          "testo": "El museo arqueológico más grande del país, en el bosque de Chapultepec, con la Piedra del Sol y las salas de las culturas mesoamericanas.",
          "come": "Metro Auditorio o Chapultepec.",
          "quando": "Mañana; suele cerrar los lunes.",
          "tempo": "3-4 horas",
          "costo": "210 MXN para extranjeros (2026).",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Elegir 3-4 salas: es demasiado grande para verlo todo."
        },
        {
          "nome": "Teotihuacán",
          "testo": "La ciudad de los Templos del Sol y de la Luna y de la Calzada de los Muertos, a unos 50 km de la ciudad, patrimonio UNESCO.",
          "come": "Bus desde la terminal Norte (aprox. 1 hora) o tour; entrada INAH.",
          "quando": "A la apertura de las 8 (abre todos los días hasta las 17 h), antes del calor y de los grupos.",
          "tempo": "Media jornada",
          "costo": "210 MXN para extranjeros (2026). Según notas de agosto de 2026 la Pirámide de la Luna está cerrada hasta nuevo aviso: preguntar en taquilla.",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Llevar sombrero y agua: casi no hay sombra."
        },
        {
          "nome": "Coyoacán y Casa Azul",
          "testo": "Barrio colonial con plazas y mercado, y la Casa Azul de Frida Kahlo, hoy museo.",
          "come": "Metro o Uber; para la Casa Azul hay que reservar entradas online con antelación.",
          "quando": "Mañana; el museo cierra los lunes y hay que llegar a la hora indicada en el boleto.",
          "tempo": "Media jornada",
          "costo": "Casa Azul: 320 MXN para extranjeros (2026), con entrada por horario reservada en línea.",
          "url": "https://boletos.museofridakahlo.org.mx/"
        },
        {
          "nome": "Xochimilco",
          "testo": "Los canales con trajineras de colores, resto del sistema lacustre azteca.",
          "come": "Metro y tren ligero o Uber hasta los embarcaderos.",
          "quando": "Mañanas entre semana, menos gente.",
          "tempo": "2-3 horas",
          "consiglio": "Acordar la duración y el precio de la barca antes de subir."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Zócalo, Catedral y Templo Mayor",
            "Palacio de Bellas Artes",
            "Almuerzo de tacos",
            "Museo Nacional de Antropología por la tarde"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: centro histórico y museo de Antropología",
            "Día 2: Teotihuacán a la apertura, Coyoacán por la tarde"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Días 1-2 como arriba",
            "Día 3: Xochimilco y Casa Azul, o Bellas Artes con los murales"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro histórico",
          "perChi": "a pie de todo",
          "testo": "Zócalo y museos cerca, pero ruidoso y poco seguro de noche lejos de las calles principales."
        },
        {
          "nome": "Roma y Condesa",
          "perChi": "restaurantes y locales",
          "testo": "Barrios de cafés y vida nocturna, más seguros a pie, cerca de Chapultepec."
        },
        {
          "nome": "Coyoacán",
          "perChi": "calma e historia",
          "testo": "Barrio residencial y colonial, más lejos del centro."
        }
      ],
      "sapori": [
        {
          "nome": "Tacos al pastor",
          "testo": "Cerdo al trompo con piña, en todas las taquerías."
        },
        {
          "nome": "Tlacoyos y quesadillas",
          "testo": "Tortillas de maíz rellenas, de los puestos."
        },
        {
          "nome": "Chilaquiles",
          "testo": "Tortilla en salsa picante para el desayuno."
        },
        {
          "nome": "Pozole",
          "testo": "Sopa de maíz y carne, los domingos."
        },
        {
          "nome": "Mole y tamales",
          "testo": "Salsas y tamales, en los mercados."
        }
      ],
      "attenzioni": [
        "Carteristas en el metro y en el Zócalo: llevar los objetos delante y no exhibir teléfonos.",
        "Taxis de calle: usar Uber o taxis de sitio.",
        "Altitud (2.240 m): beber agua y ir despacio el primer día."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos', 'messico-cdmx-baja-california'],
    imageAlt: 'El Palacio de Bellas Artes en el centro histórico de Ciudad de México',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-01-citta-del-messico.jpg',
  },
  {
    slug: 'puebla-cholula',
    paeseSlug: 'messico',
    ordine: 11,
    nome: 'Puebla y Cholula',
    tipologia: ['città coloniale', 'archeologia', 'gastronomia', 'vulcani'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      "Puebla es una ciudad colonial patrimonio de la UNESCO, con las fachadas revestidas de talavera y una de las cocinas más importantes del país. A media hora está Cholula, con la pirámide más grande del mundo por volumen y, en la cima, el santuario de la Virgen de los Remedios con el Popocatépetl al fondo.",
    percheAndarci:
      'Por la imagen de la iglesia amarilla sobre la pirámide con el volcán humeando detrás, por el barroco poblano y por el mole. Es también la etapa natural entre Ciudad de México y Oaxaca.',
    cosaVedere: [
      'El centro histórico de Puebla con la Catedral y la Capilla del Rosario',
      'La Biblioteca Palafoxiana, la primera biblioteca pública de las Américas',
      'La Gran Pirámide de Cholula, sus túneles y el Santuario de la Virgen de los Remedios',
      'Las iglesias barrocas indígenas de Tonantzintla y Acatepec',
    ],
    cosaFare: [
      'Subir a la iglesia sobre la pirámide al amanecer o al atardecer para ver el Popocatépetl y el Iztaccíhuatl',
      'Visitar un taller de talavera tradicional',
      'Probar el mole poblano, las cemitas y los dulces de la Calle de los Dulces',
    ],
    doveDormire:
      'En Puebla, el centro alrededor del Zócalo, con muchos hoteles en edificios coloniales (gama media 1.200-2.500 MXN). En Cholula, hostales y hotelitos a los pies de la pirámide desde unos 700 MXN.',
    doveMangiare: 'Mole poblano, chalupas, cemitas y molotes; los chiles en nogada son un plato de agosto-septiembre.',
    comeArrivare: 'Autobús ADO desde Ciudad de México (unas 2 horas, 200-300 MXN); de Puebla a Cholula, taxi o colectivo (20-30 minutos).',
    comeSpostarsi: 'A pie por los centros; taxi y apps entre Puebla y Cholula.',
    periodoMigliore: 'de octubre a abril; las mañanas despejadas de noviembre a febrero son las mejores para ver los volcanes.',
    erroriDaEvitare: [
      'Visitar Cholula solo a mediodía, cuando la bruma suele esconder el volcán',
      'Hacer Puebla en el día desde Ciudad de México sin dormir al menos una noche en Cholula',
    ],
      "luoghi": [
        {
          "nome": "Centro histórico de Puebla y Catedral",
          "testo": "Patrimonio UNESCO, con la Catedral, el Zócalo y casas cubiertas de azulejos de talavera.",
          "come": "A pie desde el Zócalo.",
          "quando": "Mañana.",
          "tempo": "3 horas"
        },
        {
          "nome": "Biblioteca Palafoxiana y Capilla del Rosario",
          "testo": "La primera biblioteca pública de América, de 1646, y una capilla barroca cubierta de oro (Templo de Santo Domingo).",
          "come": "A pie desde el centro.",
          "quando": "Mañana.",
          "tempo": "1,5 horas"
        },
        {
          "nome": "Gran Pirámide de Cholula",
          "testo": "La pirámide más grande del mundo por volumen, casi escondida bajo un cerro de pasto, con la iglesia de la Virgen de los Remedios en la cima. Los túneles reabrieron en marzo de 2026 después de seis años cerrados, con visitas en grupo y en horarios fijos.",
          "come": "Bus o Uber desde Puebla (unos 20 minutos).",
          "quando": "Mañana; atardecer para la vista de los volcanes.",
          "tempo": "2-3 horas",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "Subir a la iglesia de la cima para el panorama de los volcanes Popocatépetl e Iztaccíhuatl."
        },
        {
          "nome": "Tonantzintla y Acatepec",
          "testo": "Iglesias barrocas indígenas con fachadas de azulejos e interiores cubiertos de estuco dorado.",
          "come": "Uber o colectivo desde Cholula.",
          "quando": "Mañana.",
          "tempo": "1-2 horas"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Catedral, Capilla del Rosario",
            "Almuerzo con mole poblano",
            "Tarde: Cholula y pirámide"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: centro de Puebla y Palafoxiana",
            "Día 2: Cholula, pirámide, Tonantzintla y Acatepec"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro histórico de Puebla",
          "perChi": "a pie de todo",
          "testo": "Hoteles en edificios históricos y restaurantes cerca."
        },
        {
          "nome": "Cholula",
          "perChi": "ambiente de pueblo",
          "testo": "Más tranquilo, con bares y vida estudiantil."
        }
      ],
      "sapori": [
        {
          "nome": "Mole poblano",
          "testo": "Salsa de chiles y chocolate sobre pollo, símbolo de la ciudad."
        },
        {
          "nome": "Chiles en nogada",
          "testo": "Chiles rellenos con salsa de nuez, en agosto-septiembre."
        },
        {
          "nome": "Cemitas",
          "testo": "Bocadillos con carne, aguacate y queso."
        },
        {
          "nome": "Tacos árabes",
          "testo": "Cerdo a la parrilla con pan árabe."
        }
      ],
      "attenzioni": [
        "Los túneles de la pirámide de Cholula son estrechos: no apto para quien sufra claustrofobia.",
        "Taxis de calle: usar Uber.",
        "El volcán Popocatépetl está activo: el panorama puede variar."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'El Santuario de la Virgen de los Remedios sobre la pirámide de Cholula con el volcán nevado detrás',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-06-puebla-cholula.jpg',
  },
  {
    slug: 'oaxaca',
    paeseSlug: 'messico',
    ordine: 12,
    nome: 'Oaxaca',
    tipologia: ['città coloniale', 'Día de los Muertos', 'gastronomia', 'archeologia'],
    giorniConsigliati: '4-5 días, más en los días de la fiesta',
    visitataPersonalmente: true,
    introduzione:
      'Capital del estado más indígena de México, a 1.550 metros, con un centro colonial de piedra verde patrimonio de la UNESCO, mercados enormes y la cocina de los siete moles. Entre el 31 de octubre y el 2 de noviembre es el lugar donde el Día de los Muertos está más vivo y es más variado.',
    percheAndarci:
      'Por las noches de la fiesta en los cementerios y en los pueblos de alrededor, por el mezcal, por los mercados y por Monte Albán, la capital zapoteca en la cima de una montaña.',
    cosaVedere: [
      'El Templo de Santo Domingo, el museo y el jardín etnobotánico',
      'Los mercados 20 de Noviembre y Benito Juárez',
      'Monte Albán',
      'El cementerio de Santa Cruz Xoxocotlán la noche del 31 de octubre',
      'El Panteón General (San Miguel)',
    ],
    cosaFare: [
      'Seguir una comparsa en los barrios de Jalatlaco y Xochimilco en los días previos a la fiesta',
      'La muerteada de San Agustín Etla la noche del 1 de noviembre, con un tour que garantice la vuelta',
      'El pasillo de humo del Mercado 20 de Noviembre',
      'Probar tlayudas, mole negro, tejate y chapulines',
    ],
    doveDormire:
      'El centro entre Santo Domingo y Jalatlaco. En las noches de la fiesta los precios se multiplican por dos o tres: hostales 400-800 MXN por cama, gama media 1.500-3.500 MXN, alta más de 5.000 MXN. Reservar con 4-6 meses de antelación.',
    doveMangiare: 'Los mercados para tlayudas, mole y chocolate; las mezcalerías del centro para el mezcal artesanal.',
    comeArrivare: 'Autobús ADO desde Puebla (unas 4 horas y media) o desde Ciudad de México (6-7 horas); vuelo desde Ciudad de México (aproximadamente 1 hora).',
    comeSpostarsi: 'A pie por el centro; colectivos y taxis para los pueblos; tours organizados para las noches de la fiesta, cuando escasean los taxis.',
    periodoMigliore: 'de octubre a abril; del 28 de octubre al 2 de noviembre para el Día de los Muertos; julio para la Guelaguetza.',
    costi: 'Tours nocturnos a los cementerios 600-1.200 MXN; entrada a los panteones libre.',
    erroriDaEvitare: [
      'Reservar el alojamiento para la fiesta a pocas semanas de la salida',
      'Pagar tours que prometen un "acceso" a los cementerios, que es libre',
      'Fotografiar a personas y altares sin pedir permiso',
      'No informarse sobre los bloqueos antes de los desplazamientos largos',
    ],
      "luoghi": [
        {
          "nome": "Templo de Santo Domingo y jardín etnobotánico",
          "testo": "Iglesia barroca con interiores dorados, ex convento con museo y el jardín etnobotánico, visitable solo con guía.",
          "come": "A pie desde el centro.",
          "quando": "Mañana.",
          "tempo": "2-3 horas",
          "url": "https://www.inah.gob.mx/",
          "consiglio": "El jardín etnobotánico se visita en tour guiado a horas fijas: reservar."
        },
        {
          "nome": "Monte Albán",
          "testo": "La antigua capital zapoteca en una colina sobre la ciudad, patrimonio UNESCO, con la gran plaza y las tumbas.",
          "come": "Shuttle o taxi desde Oaxaca (unos 20-30 minutos); entrada INAH.",
          "quando": "A la apertura.",
          "tempo": "2-3 horas",
          "costo": "210 MXN para extranjeros (2026).",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Mercados 20 de Noviembre y Benito Juárez",
          "testo": "Mercados con puestos de carne asada, chapulines, chocolate, mole y queso.",
          "come": "A pie desde el centro.",
          "quando": "Mañana y mediodía.",
          "tempo": "1-2 horas"
        },
        {
          "nome": "Panteón de Santa Cruz Xoxocotlán y Panteón General",
          "testo": "Las veladas del Día de Muertos (31 de octubre-2 de noviembre), con tumbas decoradas y velas.",
          "come": "Taxi o tour; Panteón General en San Miguel.",
          "quando": "Noche del 31 de octubre y 1-2 de noviembre.",
          "tempo": "Una velada",
          "consiglio": "Respetar a las familias: no es un espectáculo."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Santo Domingo",
            "Mercados y almuerzo de tlayuda",
            "Monte Albán por la tarde"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: centro y Santo Domingo",
            "Día 2: Monte Albán, mercados, mezcalería"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Días 1-2 como arriba",
            "Día 3: Valles Centrales (Teotitlán, Mitla, Hierve el Agua)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro histórico",
          "perChi": "a pie de todo",
          "testo": "Hoteles en casas coloniales, cultura y restaurantes, más ruidoso."
        },
        {
          "nome": "Barrio de Jalatlaco",
          "perChi": "cafés y ambiente",
          "testo": "Un barrio de casas de colores, más tranquilo, a 10-15 minutos."
        }
      ],
      "sapori": [
        {
          "nome": "Mole negro",
          "testo": "Salsa oscura de chiles, especias y chocolate."
        },
        {
          "nome": "Tlayuda",
          "testo": "Una gran tortilla crujiente con frijoles, queso y carne."
        },
        {
          "nome": "Quesillo y tasajo",
          "testo": "Queso de hebra y carne seca asada."
        },
        {
          "nome": "Chapulines",
          "testo": "Saltamontes tostados con limón y chile."
        },
        {
          "nome": "Mezcal y chocolate",
          "testo": "Especialidades de la región, en mezcalerías y talleres."
        }
      ],
      "attenzioni": [
        "Durante el Día de Muertos Oaxaca está muy llena: reservar hoteles y tours con meses de antelación.",
        "Mezcal artesanal: comprar a productores y tiendas fiables.",
        "Taxis sin taxímetro: acordar el precio."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'Un altar de cempasúchil iluminado por velas en la noche de los muertos en Oaxaca',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-08-oaxaca.jpg',
  },
  {
    slug: 'valles-centrales-oaxaca',
    paeseSlug: 'messico',
    ordine: 13,
    nome: 'Valles Centrales: Teotitlán, Matatlán, Mitla y Hierve el Agua',
    tipologia: ['villaggi', 'mezcal', 'archeologia', 'natura'],
    giorniConsigliati: '1-2 días desde Oaxaca',
    visitataPersonalmente: true,
    introduzione:
      'El valle de Tlacolula, al este de Oaxaca, pone en fila a lo largo de la carretera 190 el ahuehuete del Tule, el pueblo tejedor de Teotitlán del Valle, los palenques de mezcal de Santiago Matatlán, los mosaicos de piedra de Mitla y las cascadas petrificadas de Hierve el Agua.',
    percheAndarci:
      'Para ver cómo se hace el mezcal artesanal, por las ruinas zapotecas y por los pueblos donde la vida comunitaria sigue siendo la de las fiestas.',
    cosaVedere: [
      'El Árbol del Tule en Santa María del Tule',
      'Los talleres de alfombras de lana de Teotitlán del Valle',
      'Los palenques de Santiago Matatlán',
      'Los mosaicos geométricos de Mitla',
      'Hierve el Agua, cuando está abierto',
      'Las ruinas de Yagul',
    ],
    cosaFare: [
      'Visitar un palenque y probar mezcal de distintos agaves',
      'La muerteada de San Agustín Etla (al norte de Oaxaca) la noche del 1 de noviembre',
      'Bañarse en las piscinas naturales de Hierve el Agua',
    ],
    comeArrivare: 'En tour de grupo desde Oaxaca (600-900 MXN), con coche y conductor o en colectivo por la 190.',
    comeSpostarsi: 'Colectivos entre los pueblos; desde Mitla, camionetas compartidas a Hierve el Agua.',
    periodoMigliore: 'todo el año; finales de octubre-principios de noviembre para los altares en las casas y las comparsas.',
    costi: 'Hierve el Agua 50-100 MXN en efectivo entre cuota comunitaria y entrada; Mitla entrada INAH; degustaciones en los palenques gratuitas o por pocos pesos.',
    erroriDaEvitare: [
      'Salir hacia Hierve el Agua sin comprobar que esté abierto: los cierres por disputas entre comunidades son frecuentes',
      'Conducir después de las degustaciones de mezcal',
      'Entrar en los altares de las casas sin invitación',
    ],
      "luoghi": [
        {
          "nome": "Árbol del Tule",
          "testo": "Un ahuehuete de unos 2.000 años con el tronco más ancho del mundo, en el atrio de la iglesia de Santa María del Tule.",
          "come": "Bus o taxi desde Oaxaca (unos 15 minutos).",
          "quando": "Mañana.",
          "tempo": "30 minutos"
        },
        {
          "nome": "Teotitlán del Valle",
          "testo": "Un pueblo zapoteco de tapetes de lana tejidos a mano con tintes naturales (grana cochinilla, añil).",
          "come": "Taxi o tour desde Oaxaca.",
          "quando": "Mañana.",
          "tempo": "1-2 horas",
          "consiglio": "Comprar en los talleres familiares, donde se ve el trabajo."
        },
        {
          "nome": "Mitla",
          "testo": "Sitio zapoteco-mixteco con mosaicos geométricos de piedra encajada. Entrada INAH.",
          "come": "Colectivo o tour desde Oaxaca (aprox. 1 hora).",
          "quando": "Mañana.",
          "tempo": "1,5 horas",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Hierve el Agua",
          "testo": "Cascadas petrificadas de caliza y pozas naturales con vista al valle. Gestionadas por la comunidad; la apertura puede cambiar.",
          "come": "Tour desde Oaxaca o en coche (aprox. 1,5 horas).",
          "quando": "Mañana, con menos gente; comprobar la apertura.",
          "tempo": "2-3 horas",
          "consiglio": "Tras lluvias o por bloqueos de carretera puede estar cerrado: comprobar antes."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Árbol del Tule",
            "Teotitlán del Valle",
            "Mezcal en Santiago Matatlán",
            "Mitla"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Tule, Teotitlán y Mitla",
            "Día 2: Hierve el Agua y Yagul"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Base en Oaxaca",
          "perChi": "servicios",
          "testo": "Los Valles se visitan en excursión de un día desde Oaxaca."
        },
        {
          "nome": "Teotitlán o Mitla",
          "perChi": "quien quiere quedarse",
          "testo": "Pequeñas posadas familiares, calma y cultura local."
        }
      ],
      "sapori": [
        {
          "nome": "Mezcal artesanal",
          "testo": "Elaborado en Santiago Matatlán, con degustaciones en los palenques."
        },
        {
          "nome": "Tlayudas",
          "testo": "En los comedores de los pueblos."
        },
        {
          "nome": "Barbacoa",
          "testo": "Carne de chivo cocida en horno de tierra."
        },
        {
          "nome": "Pan de yema",
          "testo": "Pan dulce típico de los pueblos."
        }
      ],
      "attenzioni": [
        "Hierve el Agua: gestionada por la comunidad, puede cerrar; comprobar antes.",
        "Comprar tapetes en talleres familiares, no a intermediarios.",
        "Las degustaciones de mezcal son fuertes: no conducir."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'Las cascadas petrificadas de Hierve el Agua sobre el valle',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-11-valles-centrales-oaxaca.jpg',
  },
  {
    slug: 'puerto-escondido',
    paeseSlug: 'messico',
    ordine: 14,
    nome: 'Puerto Escondido y la costa de Oaxaca',
    tipologia: ['mare', 'surf', 'natura'],
    giorniConsigliati: '3-5 días',
    visitataPersonalmente: true,
    introduzione:
      'Una ciudad de surf en el Pacífico, con la ola de Zicatela entre las más potentes del mundo, calas tranquilas, lagunas con bioluminiscencia y, hacia el este, los pueblos de Mazunte y Zipolite. Desde 2024 la nueva autopista la ha acercado a unas tres horas de Oaxaca.',
    percheAndarci: 'Para cerrar un viaje cultural con océano, surf, atardeceres y naturaleza costera.',
    cosaVedere: [
      'Playa Zicatela y La Punta',
      'Las calas de Carrizalillo, Manzanillo y Puerto Angelito',
      'La Laguna de Manialtepec',
      'Mazunte, Zipolite y Punta Cometa',
    ],
    cosaFare: [
      'Una clase de surf en Carrizalillo o en La Punta',
      'La suelta de tortugas al atardecer en Playa Bacocho, en temporada',
      'La bioluminiscencia en Manialtepec en una noche sin luna',
    ],
    doveDormire:
      'La Punta para hostales y presupuesto ajustado (desde 600 MXN), Zicatela para la gama media y la vida nocturna (1.500-3.000 MXN), Carrizalillo y Rinconada para la calma y algún hotel de gama alta.',
    doveMangiare: 'Pescado a la talla, ceviche, tiritas y tacos de pescado en las palapas de la playa.',
    comeArrivare: 'Autobús o van desde Oaxaca (3-3,5 horas por la Barranca Larga-Ventanilla); vuelos directos desde Ciudad de México (aproximadamente 1 hora).',
    comeSpostarsi: 'Taxi y colectivos por la carretera 200.',
    periodoMigliore: 'de noviembre a abril, estación seca; de junio a octubre lluvias y posibles huracanes.',
    costi: 'Clase de surf 600-900 MXN; tour de la laguna 500-900 MXN.',
    erroriDaEvitare: [
      'Nadar en Zicatela, donde las corrientes de resaca son peligrosas',
      'Elegir tours de bioluminiscencia con motor hasta el fondo de la laguna',
      'Dejar objetos sin vigilancia en la playa por la noche',
    ],
      "luoghi": [
        {
          "nome": "Playa Zicatela",
          "testo": "Una de las olas más potentes de México, la «Mexican Pipeline», para surfistas expertos; la playa tiene restaurantes y hoteles.",
          "come": "A pie o taxi desde el centro.",
          "quando": "Amanecer y atardecer para mirar a los surfistas; bañarse solo con mucha prudencia.",
          "tempo": "Media jornada",
          "consiglio": "Corrientes peligrosas: no nadar donde hay olas grandes."
        },
        {
          "nome": "Carrizalillo, Manzanillo y Puerto Angelito",
          "testo": "Calas resguardadas con agua calma, aptas para bañarse y hacer snorkel.",
          "come": "Taxi o a pie con una escalinata.",
          "quando": "Mañana.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Laguna de Manialtepec",
          "testo": "Una laguna con manglares y aves, con bioluminiscencia nocturna.",
          "come": "Tour en barca desde Puerto Escondido.",
          "quando": "Amanecer o noche.",
          "tempo": "2-3 horas"
        },
        {
          "nome": "Mazunte, Zipolite y Punta Cometa",
          "testo": "Pueblos de la costa cercana: Mazunte por el centro de tortugas, Zipolite por la playa libre, Punta Cometa por el atardecer.",
          "come": "Coche o colectivo desde Puerto Escondido (1-2 horas).",
          "quando": "Atardecer en Punta Cometa.",
          "tempo": "Día completo"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Carrizalillo",
            "Almuerzo de pescado",
            "Tarde: Zicatela",
            "Atardecer en la playa"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: calas y Zicatela",
            "Día 2: Mazunte, Punta Cometa y Zipolite"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Zicatela",
          "perChi": "surf y vida nocturna",
          "testo": "Hoteles, bares y restaurantes, ruidosos de noche."
        },
        {
          "nome": "La Punta",
          "perChi": "ambiente tranquilo",
          "testo": "Más tranquila, con olas más bajas, cerca de las calas."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado fresco",
          "testo": "A la plancha, en las playas."
        },
        {
          "nome": "Tlayuda",
          "testo": "De Oaxaca, en restaurantes locales."
        },
        {
          "nome": "Ceviche y aguachile",
          "testo": "Fresco, junto al mar."
        },
        {
          "nome": "Tamales oaxaqueños",
          "testo": "Envueltos en hojas de plátano."
        }
      ],
      "attenzioni": [
        "Las corrientes en Zicatela y Zipolite son peligrosas: nadar solo donde se indica.",
        "Robos en la playa: no dejar nada sin vigilancia.",
        "La carretera desde Oaxaca es larga y con curvas: valorar el vuelo."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'La bahía de Puerto Escondido vista desde lo alto entre los cactus',
    immagine: '/images/viaggi/messico-dia-de-los-muertos/giorno-12-puerto-escondido.jpg',
  },
  {
    slug: 'patzcuaro-janitzio',
    paeseSlug: 'messico',
    ordine: 15,
    nome: 'Pátzcuaro y Janitzio (Michoacán)',
    tipologia: ['Día de los Muertos', 'lago', 'villaggi'],
    giorniConsigliati: '2-3 días entre el 30 de octubre y el 2 de noviembre',
    visitataPersonalmente: false,
    introduzione:
      'Pátzcuaro es una ciudad colonial purépecha a orillas del lago del mismo nombre, en el estado de Michoacán. En la isla de Janitzio, la noche del 1 de noviembre, el cementerio se enciende de velas y desde las orillas llegan las barcas: es la imagen más famosa del Día de los Muertos.',
    percheAndarci:
      'Por la noche de Janitzio y por los cementerios de los pueblos del lago, como Tzintzuntzan e Ihuatzio. Es una etapa que hay que valorar con atención: Michoacán está en el nivel 4 de los avisos de viaje de Estados Unidos y entre los estados desaconsejados por Suiza en 2026.',
    cosaVedere: [
      'La isla de Janitzio y su cementerio la noche del 1 de noviembre',
      'El cementerio y las yácatas de Tzintzuntzan, la antigua capital purépecha',
      'Las plazas coloniales de Pátzcuaro',
    ],
    cosaFare: [
      'La velada de Tzintzuntzan la noche del 31 de octubre',
      'La travesía en lancha desde el Muelle General hasta Janitzio',
      'El tianguis artesanal de la Noche de Ánimas',
    ],
    comeArrivare: 'Autobús desde Ciudad de México vía Morelia por la autopista 15D (4-5 horas).',
    comeSpostarsi: 'Lanchas desde el Muelle General a Janitzio; taxis y colectivos para los pueblos del lago.',
    periodoMigliore: 'del 30 de octubre al 2 de noviembre para la Noche de Ánimas.',
    erroriDaEvitare: [
      'Decidir ir sin haber leído la ficha actualizada de Viaggiare Sicuri sobre Michoacán',
      'Desplazarse de noche fuera de las carreteras principales',
      'Pensar en unir en el mismo viaje Janitzio y las noches principales de Oaxaca: coinciden',
    ],
      "luoghi": [
        {
          "nome": "Isla de Janitzio",
          "testo": "Una isla en el lago de Pátzcuaro con la estatua de Morelos, famosa por la velada del Día de Muertos en el panteón, la noche del 1 de noviembre.",
          "come": "Barca desde el muelle de Pátzcuaro (unos 20-30 minutos).",
          "quando": "Noche del 1 de noviembre para la velada.",
          "tempo": "Media jornada",
          "consiglio": "Respetar a las familias: la velada no es un espectáculo."
        },
        {
          "nome": "Tzintzuntzan",
          "testo": "Antigua capital purépecha, con las yácatas (pirámides circulares) y un cementerio decorado.",
          "come": "Coche o colectivo desde Pátzcuaro (unos 20 minutos).",
          "quando": "Mañana.",
          "tempo": "2 horas",
          "costo": "210 MXN para extranjeros (2026).",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Plazas coloniales de Pátzcuaro",
          "testo": "Plaza Vasco de Quiroga y Plaza Gertrudis Bocanegra, con portales y mercado de artesanías.",
          "come": "A pie.",
          "quando": "Mañana.",
          "tempo": "2-3 horas"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Plaza Vasco de Quiroga y mercado",
            "Tarde: Tzintzuntzan",
            "Noche: barca a Janitzio, velada (1 de noviembre)"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Pátzcuaro y Tzintzuntzan",
            "Día 2: Janitzio y alrededores"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro de Pátzcuaro",
          "perChi": "a pie de todo",
          "testo": "Hoteles en casas coloniales, cerca de las plazas."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado blanco",
          "testo": "Pescado blanco del lago, frito o a la plancha."
        },
        {
          "nome": "Corundas y uchepos",
          "testo": "Tamales de maíz de tradición purépecha."
        },
        {
          "nome": "Sopa tarasca",
          "testo": "Sopa de frijol y tomate con chile ancho."
        },
        {
          "nome": "Carnitas",
          "testo": "Cerdo cocido lentamente, de Michoacán."
        }
      ],
      "attenzioni": [
        "Durante el Día de Muertos la zona está muy llena: reservar con meses de antelación.",
        "Respetar a las familias durante las veladas: sin flash ni fotos invasivas.",
        "Barca a Janitzio: acordar el precio."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-dia-de-los-muertos'],
    imageAlt: 'La isla de Janitzio en el lago de Pátzcuaro con el monumento a Morelos en la cima, vista desde lo alto',
    immagine: '/images/messico/janitzio-stock.jpg',
  },
  {
    slug: 'la-paz-baja',
    paeseSlug: 'messico',
    ordine: 16,
    nome: 'La Paz y Espíritu Santo',
    tipologia: ['mare', 'fauna marina', 'isole'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital de Baja California Sur tiene el ritmo de una ciudad de provincia, un paseo marítimo de cinco kilómetros sobre el Mar de Cortés y, enfrente, el archipiélago deshabitado de Espíritu Santo, patrimonio de la UNESCO. En invierno en la bahía se alimenta el tiburón ballena.',
    percheAndarci: 'Para nadar con el tiburón ballena y con los lobos marinos de Los Islotes, y para Playa Balandra.',
    cosaVedere: [
      'El Malecón al atardecer',
      'Playa Balandra, El Tecolote y Pichilingue',
      'El archipiélago de Espíritu Santo y Los Islotes',
    ],
    cosaFare: [
      'Nadar con el tiburón ballena con un operador autorizado por la CONANP (octubre-noviembre/abril)',
      'Snorkel con los lobos marinos en Los Islotes',
      'Kayak y comida en la playa en Ensenada Grande',
    ],
    doveDormire: 'El Malecón o el centro, todo a pie. Económico 700-1.200 MXN, medio 1.800-3.000 MXN, alto más de 4.500 MXN en los resorts hacia Pichilingue.',
    doveMangiare: 'Tacos de pescado y de camarón, ceviche, aguachile, almejas chocolatas.',
    comeArrivare: 'Vuelo desde Ciudad de México (unas 2 horas y 15); ferri de Baja Ferries desde Mazatlán o Topolobampo a Pichilingue.',
    comeSpostarsi: 'Coche de alquiler para playas y alrededores; barcas de los tours para las islas.',
    periodoMigliore: 'de noviembre a abril para el tiburón ballena; febrero-marzo para juntar también las ballenas grises.',
    costi: 'Tiburón ballena 1.500-2.500 MXN más cuota del parque; Espíritu Santo 2.500-3.500 MXN; Balandra unos 120 MXN por turno.',
    erroriDaEvitare: [
      'Ir a Balandra sin haber reservado el turno',
      'Elegir un operador no autorizado para el tiburón ballena',
      'No dejar un día de margen por el viento del norte',
    ],
      "luoghi": [
        {
          "nome": "Malecón de La Paz",
          "testo": "Un paseo marítimo de unos 5 km con esculturas, cafés y el atardecer sobre el Mar de Cortés.",
          "come": "A pie desde el centro.",
          "quando": "Atardecer.",
          "tempo": "1-2 horas"
        },
        {
          "nome": "Playa Balandra",
          "testo": "Una bahía poco profunda de agua turquesa, conocida por la roca del hongo. El acceso está limitado para proteger el ecosistema.",
          "come": "En coche o taxi desde La Paz (unos 25 minutos); comprobar las reglas de acceso y el número máximo de visitantes.",
          "quando": "Mañana temprano.",
          "tempo": "Media jornada",
          "consiglio": "Para entrar hay que respetar las reglas del parque; comprobar con antelación."
        },
        {
          "nome": "Isla Espíritu Santo y Los Islotes",
          "testo": "Un archipiélago UNESCO con colonias de lobos marinos y fondos para el snorkel. Se nada con lobos marinos en Los Islotes.",
          "come": "Tour en barca desde La Paz con operador autorizado.",
          "quando": "Mañana; todo el año con horarios variables.",
          "tempo": "Día completo"
        },
        {
          "nome": "Tiburón ballena en la bahía de La Paz",
          "testo": "Encuentro con tiburones ballena, en temporada, con operadores autorizados.",
          "come": "Tour en barca desde La Paz.",
          "quando": "Aprox. de octubre a marzo.",
          "tempo": "Media jornada",
          "consiglio": "Elegir operadores que respeten las distancias y los límites de número."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Playa Balandra",
            "Almuerzo de pescado",
            "Atardecer en el Malecón"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Balandra y Malecón",
            "Día 2: Espíritu Santo y Los Islotes"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro y Malecón",
          "perChi": "a pie de todo",
          "testo": "Hoteles y restaurantes cerca del paseo marítimo."
        },
        {
          "nome": "Hacia Balandra",
          "perChi": "calma",
          "testo": "Hoteles más tranquilos al norte, más lejos del centro."
        }
      ],
      "sapori": [
        {
          "nome": "Tacos de pescado",
          "testo": "Especialidad de Baja, en taquerías."
        },
        {
          "nome": "Almejas chocolatas",
          "testo": "Almejas locales, frescas."
        },
        {
          "nome": "Machaca",
          "testo": "Carne seca deshebrada con huevo, de Baja."
        },
        {
          "nome": "Ceviche",
          "testo": "Con limón, en restaurantes frente al mar."
        }
      ],
      "attenzioni": [
        "Balandra tiene acceso limitado: comprobar las reglas y los horarios.",
        "Para Los Islotes elegir operadores autorizados: las reglas sobre los lobos marinos son estrictas.",
        "Sol fuerte y viento: llevar agua y protección."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'Playa Balandra desde lo alto con el agua poco profunda turquesa, cerca de La Paz',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-07-la-paz-baja.jpg',
  },
  {
    slug: 'bahia-magdalena',
    paeseSlug: 'messico',
    ordine: 17,
    nome: 'Bahía Magdalena',
    tipologia: ['balene', 'laguna', 'villaggi di pescatori'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'Una gran bahía del Pacífico protegida por islas de arena, a unas tres horas de La Paz, con los pueblos de pescadores de Puerto Adolfo López Mateos y Puerto San Carlos. De enero a abril las ballenas grises paren y amamantan aquí a sus crías.',
    percheAndarci: 'Para ver de cerca a las madres de ballena gris con sus crías, desde las pangas de las cooperativas locales.',
    cosaVedere: ['Las lagunas de las ballenas grises', 'Las dunas de las islas barrera', 'Los pueblos de pescadores'],
    cosaFare: [
      'Una salida en panga por la mañana, cuando el viento es más débil',
      'El Festival de la Ballena Gris a finales de enero-febrero en López Mateos',
    ],
    doveDormire: 'Alojamientos sencillos y pequeños moteles en los dos pueblos (700-1.500 MXN); campamentos en paquete en las islas.',
    doveMangiare: 'Pescado y marisco de los pescadores en restaurantes familiares.',
    comeArrivare: 'En coche desde La Paz (unas 3 horas) o desde Loreto (unas 2,5-3 horas), vía Ciudad Constitución.',
    periodoMigliore: 'de mediados de febrero a finales de marzo; temporada oficial enero-abril.',
    costi: 'Panga aproximadamente 1.500-2.000 MXN la hora por barca (6-8 personas), solo efectivo.',
    erroriDaEvitare: [
      'Llegar sin efectivo',
      'Planificar las salidas por la tarde, cuando el viento levanta la laguna',
      'Conducir de noche en la carretera de vuelta',
    ],
      "luoghi": [
        {
          "nome": "Avistamiento de ballenas grises",
          "testo": "Las lagunas de Bahía Magdalena acogen cada año a las ballenas grises que vienen a parir. Se sale en panga y las ballenas se acercan a la barca.",
          "come": "Panga con operador desde Puerto Adolfo López Mateos o Puerto San Carlos.",
          "quando": "De enero a marzo, por la mañana con menos viento.",
          "tempo": "2-3 horas",
          "consiglio": "Una salida por la mañana, cuando el viento es más débil."
        },
        {
          "nome": "Dunas de las islas barrera",
          "testo": "Dunas de arena en Isla Magdalena, la larga barrera que separa la laguna del Pacífico. Desde arriba se ven de un lado las aguas tranquilas donde nadan las ballenas y del otro las olas del océano; a menudo es la parada después de la salida en panga.",
          "come": "En panga desde las lagunas.",
          "quando": "Mañana.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Pueblos de pescadores",
          "testo": "Puerto Adolfo López Mateos y Puerto San Carlos, pueblos de pescadores con mercado y pescado fresco. Viven de la pesca y, en invierno, de las ballenas: fuera de temporada están casi vacíos, con pocos restaurantes abiertos.",
          "come": "En coche desde La Paz o Ciudad Constitución.",
          "quando": "De día.",
          "tempo": "Media jornada",
          "consiglio": "El Festival de la Ballena Gris se celebra a finales de enero-febrero en López Mateos."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: salida en panga para las ballenas",
            "Almuerzo de pescado",
            "Tarde: dunas"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: llegada, salida por la tarde",
            "Día 2: salida matutina y Festival de la Ballena (si coincide)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Puerto Adolfo López Mateos",
          "perChi": "naturaleza",
          "testo": "Pocos servicios, posadas sencillas."
        },
        {
          "nome": "Puerto San Carlos",
          "perChi": "servicios",
          "testo": "Más grande, con hoteles."
        }
      ],
      "sapori": [
        {
          "nome": "Almejas chocolatas",
          "testo": "Almejas grandes de concha color chocolate, crudas con limón y salsa o tatemadas, cocidas bajo las brasas. Se compran a los pescadores o en los puestos del puerto."
        },
        {
          "nome": "Callo de hacha",
          "testo": "El músculo de un gran bivalvo de las lagunas, en láminas finas y crudo con limón, pepino y chile, o en aguachile."
        },
        {
          "nome": "Tacos de pescado y camarón",
          "testo": "Capeados, con col, crema y salsas, en los puestos de Puerto San Carlos y López Mateos. Son la comida rápida después de la salida en lancha."
        },
        {
          "nome": "Ceviche",
          "testo": "Pescado o camarón marinado en limón con tomate, cebolla y cilantro, sobre tostadas crujientes."
        }
      ],
      "attenzioni": [
        "La temporada de ballenas va de enero a marzo: fuera de temporada no se ven.",
        "El viento de la tarde agita el mar: reservar por la mañana.",
        "Pocos servicios: llevar efectivo.",
        "Las salidas con ballenas están reguladas: solo con pangas autorizadas, con tiempos y distancias limitados.",
        "Distancias largas y pocas gasolineras: cargar gasolina en Ciudad Constitución.",
        "Las mañanas de invierno en lancha son frescas y húmedas: rompevientos y capas."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'Una ballena gris que emerge en vertical del agua frente a la costa de Baja California Sur',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-09-bahia-magdalena.jpg',
  },
  {
    slug: 'loreto',
    paeseSlug: 'messico',
    ordine: 18,
    nome: 'Loreto',
    tipologia: ['Pueblo Mágico', 'balene', 'parco marino'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'Un Pueblo Mágico en el Mar de Cortés fundado en 1697 por los jesuitas, con la primera misión de las Californias y un parque nacional marino por donde pasa en invierno la ballena azul.',
    percheAndarci: 'Por la ballena azul (mediados de enero-finales de marzo), por las islas del parque y por la tranquilidad del pueblo.',
    cosaVedere: [
      'La Misión de Nuestra Señora de Loreto',
      'El Parque Nacional Bahía de Loreto e Isla Coronado',
      'La Misión de San Javier en la Sierra de la Giganta',
    ],
    cosaFare: [
      'Una salida de unas cinco horas para ver la ballena azul con lancheros autorizados',
      'Snorkel y playa en Isla Coronado',
    ],
    doveDormire: 'El centro histórico cerca de la misión (gama media 1.200-2.500 MXN); resorts en Nopoló para la gama alta.',
    doveMangiare: 'Pescado del día y almejas en el malecón.',
    comeArrivare: 'En coche desde La Paz (4,5-5 horas) o desde Bahía Magdalena (2,5-3 horas); pequeño aeropuerto con vuelos sobre todo desde Estados Unidos y Tijuana.',
    periodoMigliore: 'de mediados de enero a finales de marzo para la ballena azul.',
    costi: 'Salida para la ballena azul desde unos 3.000 MXN por persona.',
    erroriDaEvitare: [
      'Llegar a Loreto sin haber repostado en el tramo desde Ciudad Constitución',
      'Reservar con operadores sin permiso del parque',
    ],
      "luoghi": [
        {
          "nome": "Misión de Nuestra Señora de Loreto",
          "testo": "La primera misión jesuita de Baja California, fundada en 1697, con museo de las misiones junto a la iglesia. De aquí partió la colonización de las Californias; la iglesia de piedra, sencilla y maciza, sigue siendo el centro de la vida del pueblo.",
          "come": "A pie desde el centro.",
          "quando": "Mañana.",
          "tempo": "1 hora",
          "url": "https://www.inah.gob.mx/"
        },
        {
          "nome": "Parque Nacional Bahía de Loreto e Isla Coronado",
          "testo": "Parque marino con islas, snorkel y avistamiento de ballena azul en temporada. Isla Coronado tiene una playa blanca y agua transparente; en la lancha es fácil cruzarse con delfines y lobos marinos.",
          "come": "Barca desde Loreto con operador autorizado.",
          "quando": "Mañana; mar calmo.",
          "tempo": "Día completo"
        },
        {
          "nome": "Misión San Javier",
          "testo": "Misión jesuita de 1699 en la Sierra de la Giganta, a la que se llega por una carretera de montaña entre cañones y oasis de palmas. La iglesia de piedra del siglo XVIII es de las mejor conservadas de Baja, y al lado hay un viejo olivo de los misioneros.",
          "come": "Coche o tour desde Loreto (aprox. 1,5 horas).",
          "quando": "Mañana.",
          "tempo": "Media jornada",
          "consiglio": "Carretera de montaña con curvas cerradas: manejar de día y con calma."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Misión de Loreto",
            "Almuerzo de pescado",
            "Tarde: Isla Coronado"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Loreto y el Parque Nacional",
            "Día 2: Misión San Javier"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro de Loreto",
          "perChi": "a pie de todo",
          "testo": "Hoteles pequeños y restaurantes cerca del malecón."
        }
      ],
      "sapori": [
        {
          "nome": "Almejas tatemadas",
          "testo": "Almejas chocolatas cocidas bajo un fuego de hierbas secas, directamente en la arena: la especialidad de Loreto. Se comen con limón y salsa."
        },
        {
          "nome": "Tacos de pescado",
          "testo": "Capeados, con col, crema y salsas, en los puestos del centro desde la mañana."
        },
        {
          "nome": "Machaca",
          "testo": "Carne de res seca y deshebrada, guisada con huevo, cebolla y chile: el desayuno de los ranchos de la sierra, con tortillas de harina."
        },
        {
          "nome": "Dulces de dátil",
          "testo": "En los oasis alrededor de Loreto y San Javier crecen las palmas datileras que trajeron los misioneros: dátiles y dulces se venden en las tiendas del pueblo."
        }
      ],
      "attenzioni": [
        "La carretera a San Javier sube a la montaña con curvas cerradas: manejar de día y con calma.",
        "Sol fuerte y calor de verano: ir temprano.",
        "Operadores autorizados en el parque nacional.",
        "El parque marino cobra una cuota de área protegida: preguntar si está incluida en el precio del tour."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'La Misión de Nuestra Señora de Loreto, de piedra entre las palmeras, en el centro del pueblo',
    immagine: '/images/messico/loreto-mision-stock.jpg',
  },
  {
    slug: 'todos-santos',
    paeseSlug: 'messico',
    ordine: 19,
    nome: 'Todos Santos',
    tipologia: ['Pueblo Mágico', 'surf', 'arte'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'Un Pueblo Mágico en el Pacífico justo sobre el Trópico de Cáncer, con casas coloniales, galerías y cafés, y playas de surf como Playa Cerritos. Más tranquilo y menos caro que Los Cabos, a una hora de carretera.',
    percheAndarci: 'Para una parada lenta entre La Paz y Cabo, surf en Cerritos y las sueltas de tortugas en temporada.',
    cosaVedere: ['El centro histórico y las galerías', 'Playa Cerritos', 'Las playas del Pacífico al atardecer'],
    cosaFare: ['Clase de surf en Cerritos', 'Suelta de tortugas con los proyectos locales, en las temporadas de eclosión'],
    doveDormire: 'Centro histórico, con pequeños hoteles con encanto (2.000-5.000 MXN) y alguna casa de huéspedes económica.',
    comeArrivare: 'En coche desde La Paz (aproximadamente 1 hora) o desde Cabo San Lucas (aproximadamente 1 hora).',
    periodoMigliore: 'de noviembre a abril.',
    erroriDaEvitare: ['Nadar en las playas abiertas del Pacífico fuera de Cerritos: corrientes fuertes'],
      "luoghi": [
        {
          "nome": "Centro histórico y galerías",
          "testo": "Pueblo Mágico con casas coloniales, galerías de arte, boutiques y cafés. Era un pueblo cañero; hoy vive de artistas, surfistas y pequeños restaurantes que cocinan con las verduras de las huertas cercanas.",
          "come": "A pie.",
          "quando": "Mañana y noche.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Playa Cerritos",
          "testo": "Una playa en el Pacífico con olas aptas para surf de principiantes, escuelas y alquiler de tablas.",
          "come": "En coche o taxi desde Todos Santos (unos 15 minutos).",
          "quando": "Mañana.",
          "tempo": "Media jornada",
          "consiglio": "Fuera de Cerritos las playas del Pacífico tienen corrientes fuertes: no nadar."
        },
        {
          "nome": "Liberación de tortugas",
          "testo": "Proyectos locales de conservación que liberan crías en las temporadas de eclosión. En las playas cercanas al pueblo anidan varias especies de tortugas marinas; los voluntarios protegen los nidos y, al atardecer, acompañan a las crías hacia el mar.",
          "come": "Con proyectos locales, en temporada.",
          "quando": "Tarde-noche.",
          "tempo": "1-2 horas",
          "consiglio": "Respetar las reglas del proyecto."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: centro y galerías",
            "Tarde: Cerritos y clase de surf",
            "Atardecer en el Pacífico"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: centro y Cerritos",
            "Día 2: tortugas en temporada o un día en La Paz"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro histórico",
          "perChi": "encanto",
          "testo": "Hoteles pequeños y casas de huéspedes, a pie de los restaurantes."
        }
      ],
      "sapori": [
        {
          "nome": "Tacos de pescado y camarón",
          "testo": "Al estilo de Baja, capeados, con col, crema y salsas, en los puestos del pueblo y rumbo a Cerritos."
        },
        {
          "nome": "Pescado del día a la parrilla",
          "testo": "La pesca del Pacífico, a menudo dorado o huachinango, a las brasas con mantequilla de ajo o salsa, en los restaurantes del centro."
        },
        {
          "nome": "Cocina de huerta",
          "testo": "Alrededor de Todos Santos hay huertas y granjas orgánicas: hierbas, verduras y mangos llegan a los menús de los restaurantes y a las tiendas del pueblo."
        },
        {
          "nome": "Café y dulces",
          "testo": "Panaderías y cafés del centro, con pan dulce y dulces de guayaba o mango, para una pausa entre galerías."
        }
      ],
      "attenzioni": [
        "Nadar en las playas abiertas del Pacífico fuera de Cerritos: corrientes fuertes.",
        "Carretera desde La Paz y Cabo San Lucas: aprox. 1 hora.",
        "Las galerías cierran a horas variables: comprobar.",
        "De junio a noviembre es temporada de huracanes: revisar los avisos antes de salir."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'La larga playa oceánica de Todos Santos vista desde lo alto',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-13-todos-santos.jpg',
  },
  {
    slug: 'los-cabos',
    paeseSlug: 'messico',
    ordine: 20,
    nome: 'Los Cabos',
    tipologia: ['mare', 'balene', 'resort'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      'La punta de la península, con dos ciudades muy distintas: Cabo San Lucas, turística y nocturna, con El Arco donde el Mar de Cortés se encuentra con el Pacífico, y San José del Cabo, colonial y tranquila. Al nordeste, Cabo Pulmo tiene el único arrecife de coral duro del Golfo de California.',
    percheAndarci: 'Por las jorobadas (diciembre-abril), El Arco y Cabo Pulmo, y por el aeropuerto de regreso.',
    cosaVedere: ['El Arco y Playa del Amor', 'El centro y el barrio de las galerías de San José del Cabo', 'El parque nacional de Cabo Pulmo'],
    cosaFare: [
      'Avistamiento de ballenas jorobadas',
      'El Art Walk de los jueves por la noche en San José del Cabo (noviembre-junio)',
      'Snorkel en Cabo Pulmo con operadores del pueblo',
    ],
    doveDormire: 'San José del Cabo para la gama media (1.800-3.500 MXN); el Corridor para los resorts de gama alta, a menudo por encima de 7.000 MXN; Cabo San Lucas para la vida nocturna.',
    comeArrivare: 'Aeropuerto de San José del Cabo (SJD), con vuelos a Ciudad de México y directos a Estados Unidos; en coche desde Todos Santos (aproximadamente 1 hora).',
    periodoMigliore: 'de diciembre a abril para las jorobadas.',
    costi: 'Avistamiento de ballenas 1.000-2.000 MXN por persona.',
    erroriDaEvitare: [
      'Detenerse con los vendedores de multipropiedad en el aeropuerto y en la Marina',
      'Subestimar los precios, los más altos de Baja',
    ],
      "luoghi": [
        {
          "nome": "El Arco y Playa del Amor",
          "testo": "La formación rocosa donde el Mar de Cortés se encuentra con el Pacífico, con la Playa del Amor escondida detrás.",
          "come": "Taxi acuático desde el muelle de Cabo San Lucas.",
          "quando": "Mañana.",
          "tempo": "1-2 horas",
          "consiglio": "El mar está picado: no siempre se puede desembarcar."
        },
        {
          "nome": "San José del Cabo",
          "testo": "Un centro colonial con galerías de arte y el Art Walk de los jueves por la noche (noviembre-junio).",
          "come": "En coche o bus desde Cabo San Lucas (unos 30 minutos).",
          "quando": "Jueves por la noche.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Parque Nacional Cabo Pulmo",
          "testo": "El único arrecife de coral duro del Golfo de California, patrimonio UNESCO, para snorkel y buceo.",
          "come": "Coche desde Los Cabos (aprox. 1,5-2 horas) y barca con operador del pueblo.",
          "quando": "Mañana.",
          "tempo": "Día completo"
        },
        {
          "nome": "Avistamiento de ballenas jorobadas",
          "testo": "Avistamiento de ballena jorobada en las aguas de Los Cabos. En invierno llegan aquí para reproducirse y parir: desde la lancha se ven saltos, coletazos y, con suerte, madres con su cría.",
          "come": "Barca desde Cabo San Lucas o San José del Cabo.",
          "quando": "Diciembre-abril.",
          "tempo": "2-3 horas"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: El Arco en taxi acuático",
            "Almuerzo en Cabo San Lucas",
            "Jueves por la noche: Art Walk en San José del Cabo"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: El Arco y Cabo San Lucas",
            "Día 2: Cabo Pulmo o ballenas (diciembre-abril)"
          ]
        }
      ],
      "zone": [
        {
          "nome": "San José del Cabo",
          "perChi": "tranquilidad",
          "testo": "Un centro colonial, más calmado y menos turístico."
        },
        {
          "nome": "Cabo San Lucas",
          "perChi": "vida nocturna",
          "testo": "Marina, bares y locales, muy turístico."
        }
      ],
      "sapori": [
        {
          "nome": "Tacos de pescado",
          "testo": "Al estilo de Baja, capeados, con col, crema y salsas. En las taquerías de San José del Cabo cuestan mucho menos que en la marina de Cabo San Lucas."
        },
        {
          "nome": "Ceviche y aguachile",
          "testo": "Pescado o camarón crudo en limón, el aguachile con chile y pepino. Van bien a mediodía, con una cerveza fría."
        },
        {
          "nome": "Langosta",
          "testo": "A la parrilla o a la mantequilla, en los restaurantes frente al mar. Es cara: preguntar el precio por peso antes de pedir."
        },
        {
          "nome": "Margarita",
          "testo": "Tequila, limón y triple sec con sal en el borde, en los bares de Cabo San Lucas. La hora feliz de la tarde reduce la cuenta a la mitad."
        }
      ],
      "attenzioni": [
        "Cabo San Lucas es turística y cara: comparar precios.",
        "Ofertas de tiempo compartido: rechazar a quien te para en la calle.",
        "El Pacífico tiene corrientes fuertes: en Cabo San Lucas nadar solo en playas protegidas y señalizadas, como Médano, Chileno y Santa María.",
        "En Cabo Pulmo solo se entra al agua con los operadores del pueblo: las reglas del parque son estrictas para proteger el arrecife.",
        "De junio a noviembre es temporada de huracanes: revisar los avisos."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['messico-cdmx-baja-california'],
    imageAlt: 'El Arco de Cabo San Lucas con una barca delante de las rocas',
    immagine: '/images/viaggi/messico-cdmx-baja-california/giorno-14-los-cabos.jpg',
  },
]
