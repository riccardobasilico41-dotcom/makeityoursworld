import type { Destinazione } from '@/lib/types'

export const destinazioniMalesia: Destinazione[] = [
  {
    slug: 'kuala-lumpur',
    paeseSlug: 'malesia',
    ordine: 1,
    nome: 'Kuala Lumpur',
    tipologia: ['città', 'gastronomia', 'architettura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "Una capital que pasó de ser un campamento de buscadores de estaño a una ciudad de rascacielos, donde una mezquita, un templo hindú y un templo chino pueden estar en la misma manzana y donde la institución cívica es la comida callejera.",
    percheAndarci:
      "Es la forma más rápida de entender cómo funciona Malasia: tres comunidades viven en la misma ciudad con lenguas, religiones y cocinas separadas, y se encuentran en los food courts. Y es un excelente hub aéreo, del que parte todo el resto del viaje.",
    cosaVedere: [
      'Las Torres Petronas, con el skybridge y la plataforma panorámica',
      'Las Cuevas Batu, con la estatua dorada de Murugan de casi 43 metros de altura y la larga escalinata de colores',
      'La mezquita Masjid Jamek, en la confluencia de los dos ríos de los que la ciudad toma su nombre',
      'El barrio de Chinatown alrededor de Petaling Street y el templo Sri Mahamariamman',
      'El Museo de Artes Islámicas, rico y normalmente tranquilo',
      'El mercado nocturno de Jalan Alor, donde se cena al aire libre entre puestos de cocinas distintas',
    ],
    cosaFare: [
      'Subir a las Cuevas Batu temprano por la mañana, antes del calor y de los grupos (hay una ficha de experiencia dedicada)',
      'Cenar en Jalan Alor, la forma correcta de pasar la primera noche',
      'Recorrer los barrios a pie: Chinatown, Little India en Brickfields, Kampung Baru',
      'Pasear por la pasarela de copas del parque forestal de Bukit Nanas, un retazo de selva pluvial en pleno centro de la ciudad',
    ],
    doveDormire:
      "Bukit Bintang por la comodidad y la vida nocturna, Chinatown por los precios bajos y el carácter, KLCC por la cercanía a las torres y a los centros comerciales. La ciudad es grande y caótica: conviene estar cerca de una estación de monorraíl o de metro.",
    doveMangiare:
      "Kuala Lumpur es una ciudad donde se come muy bien, y la forma de hacerlo es una sola: los food courts y los puestos callejeros, olvidándose de los restaurantes. Hay que probar el nasi lemak (arroz al coco con sambal, anchoas secas, cacahuetes y huevo: se considera el plato nacional y se come en el desayuno), el char kway teow, el roti canai indio por la mañana con dahl, el laksa y el satay a la brasa. Jalan Alor por la noche es la versión más escenográfica; los food courts de los centros comerciales, con aire acondicionado, son buenos y baratos.",
    comeArrivare:
      "Vuelo a Kuala Lumpur International (KUL), gran hub regional, con el tren KLIA Ekspres que lleva al centro. La terminal 2 sirve los vuelos low cost, incluidos los de Borneo.",
    comeSpostarsi:
      "Metro, monorraíl y LRT cubren bien el centro, con la Touch 'n Go o el billete sencillo. Grab es barato y resuelve todo lo demás. Caminar es posible pero cansado: aceras discontinuas, calor y humedad.",
    periodoMigliore:
      "todo el año, con chubascos por la tarde en cualquier estación.",
    costi:
      "Skybridge de las Petronas de pago (precios en la web oficial), Batu Caves gratis, Museo de Artes Islámicas con entrada (tarifas en la web del museo). El transporte cuesta pocos ringgit.",
    erroriDaEvitare: [
      "Subir a las Cuevas Batu a mediodía: una larga escalinata bajo el sol ecuatorial, con los monos que roban todo lo que se lleva en la mano",
      "Vestirse demasiado destapado para visitar templos y mezquitas: en las Cuevas Batu y en la Masjid Negara hacen falta hombros y rodillas cubiertos, y los sarongs prestados a la entrada solo lo resuelven en parte",
      "Juzgar la ciudad por los centros comerciales de Bukit Bintang: lo que vale está en los barrios, a pie",
      "Contar con las tarjetas en los puestos callejeros: ahí hace falta efectivo",
    ],
    miaEsperienza:
      "Casi todos usan Kuala Lumpur como escala, y sin embargo aguanta dos días completos, a condición de recorrerla por barrios más que por monumentos. Las Petronas se miran desde abajo en la hora azul y está bien así: la subida al skybridge cuesta y devuelve menos de lo que promete. Las Cuevas Batu hay que hacerlas a las siete de la mañana, cuando los escalones de colores todavía están a la sombra y los fieles suben a rezar: dos horas después es una escalinata abrasadora con cientos de personas y los monos arrancando las botellas de las manos. El recuerdo que queda, sin embargo, es más sencillo: la noche en Jalan Alor, sentados en taburetes de plástico en medio de la calle, con una cocina china a la derecha, una malaya a la izquierda y un puesto indio enfrente. Es ahí donde se entiende de qué país se está hablando.",
    luoghi: [
      {
        nome: "Petronas Twin Towers",
        testo: "Las torres gemelas son el símbolo de la ciudad. Se visita el skybridge que une las dos torres y el mirador más alto; a sus pies está el parque KLCC con la fuente.",
        come: "LRT hasta KLCC, con salida directa al centro comercial. Las entradas para la subida son con horario y se reservan online en el sitio oficial.",
        quando: "De martes a domingo, 9-21; cerrado los lunes salvo festivos (2025). El atardecer es la hora más solicitada y las plazas se acaban. Desde abajo las torres se ven mejor a la hora azul.",
        tempo: "1 hora para la subida; el parque KLCC se recorre en media hora",
        costo: "Entrada con hora para el skybridge y el mirador, más cara para los no malasios: precios actualizados y compra en la web oficial (las entradas de revendedores no oficiales no se reembolsan).",
        consiglio: "Quien no quiera gastar puede mirarlas desde abajo y ver la panorámica desde otra torre, la KL Tower."
      },
      {
        nome: "Batu Caves",
        testo: "Un santuario hindú en una cueva caliza, precedido por la estatua dorada de Murugan, de casi 43 metros, y por una larga escalinata de colores. Dentro hay un gran salón con pequeños templos, la luz que entra por una abertura del techo y monos en las escaleras.",
        come: "Tren Komuter desde KL Sentral hasta la terminal de Batu Caves. La entrada a la cueva principal es libre. La Dark Cave, la cueva interior protegida, solo se visita con las salidas educativas de la Malaysian Nature Society, cuando están activas. Hombros y rodillas cubiertos.",
        quando: "Temprano por la mañana, con los fieles subiendo y los escalones a la sombra. Durante la fiesta del Thaipusam las multitudes son enormes.",
        tempo: "2 horas",
        costo: "entrada gratuita",
        consiglio: "No llevar en la mano botellas, gafas ni comida: los monos las arrebatan."
      },
      {
        nome: "Masjid Jamek",
        testo: "La mezquita está en la confluencia de los ríos Klang y Gombak, donde nació la ciudad. Un poco más allá está el Sultan Abdul Samad Building.",
        come: "LRT hasta Masjid Jamek. La mezquita se visita fuera de las horas de oración, con una túnica prestada en la entrada.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        consiglio: "Seguir a pie hasta Chinatown, en la misma tarde."
      },
      {
        nome: "Chinatown, Petaling Street y Sri Mahamariamman",
        testo: "El barrio chino con el mercado callejero y un templo hindú histórico, a pocos pasos uno del otro.",
        come: "LRT hasta Pasar Seni. El mercado es al aire libre, el templo se visita descalzo.",
        quando: "Por la mañana el templo; por la noche la calle, cuando el mercado está más vivo.",
        tempo: "1 hora y media",
        consiglio: "No comprar las falsificaciones: los precios iniciales son muy altos."
      },
      {
        nome: "Museo de Artes Islámicas",
        testo: "Un museo rico sobre el tema: tejidos, cerámicas, manuscritos y maquetas de mezquitas. Normalmente está tranquilo.",
        come: "En el parque de los Lake Gardens, cerca de la Mezquita Nacional. En taxi o Grab, o a pie desde KL Sentral con una caminata larga.",
        quando: "Abierto todos los días, 9:30-18 (última entrada 17:30). Ideal a primera hora de la tarde, en las horas de más calor.",
        tempo: "2 horas",
        url: "https://www.iamm.org.my/",
        consiglio: "La cafetería del museo, climatizada y silenciosa, es una pausa excelente.",
        costo: "Entrada de pago; tarifas en la web del museo."
      },
      {
        nome: "Jalan Alor",
        testo: "Una calle cerrada al tráfico por la noche, con mesas al aire libre y cocinas china, malaya e india una junto a otra. El sitio donde comer la primera noche.",
        come: "A pie desde Bukit Bintang o en monorraíl hasta Bukit Bintang.",
        quando: "Por la noche.",
        tempo: "1-2 horas",
        consiglio: "Preguntar el precio antes de pedir el pescado, que se paga al peso."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: ["Primera hora: Batu Caves, con la subida a la sombra","Regreso y desayuno en KL Sentral","Primera hora de la tarde: Museo de Artes Islámicas, al fresco","Media tarde: Masjid Jamek a pie, luego Chinatown","Hora azul: las Petronas desde abajo","Noche: cena en Jalan Alor"]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: como arriba sin Jalan Alor",
          "Día 2: mañana en los Lake Gardens y el Perdana Botanical Garden, luego KL Tower; noche con cena en Jalan Alor y Bukit Bintang"
        ]
      }
    ],
    zone: [
      {
        nome: "Bukit Bintang",
        perChi: "quien quiere comida, tiendas y vida nocturna",
        testo: "El centro de las compras, con muchísimas opciones de alojamiento y restaurantes. Es ruidoso y algo turístico, pero bien conectado."
      },
      {
        nome: "KLCC",
        perChi: "quien busca vistas a las torres y hoteles de gama alta",
        testo: "Tranquilo, limpio, con restaurantes de calidad. Menos vida auténtica."
      },
      {
        nome: "Chinatown y Pasar Seni",
        perChi: "quien quiere ahorrar y estar cerca de mercados y estación",
        testo: "Hostales y hoteles baratos, cerca del tren al aeropuerto. Ruidoso por la noche."
      }
    ],
    sapori: [
      {
        nome: "Nasi lemak",
        testo: "Arroz con coco, anchoas fritas, huevo, pepino y sambal. El desayuno nacional; se encuentra en todas partes, desde los puestos callejeros."
      },
      {
        nome: "Char kway teow",
        testo: "Fideos de arroz salteados a fuego vivo con gambas, huevo y brotes de soja. Un plato callejero chino-malayo, excelente por la noche en Jalan Alor."
      },
      {
        nome: "Bak kut teh",
        testo: "Costillas de cerdo en caldo de especias y ajo, de origen chino. Se come en el desayuno o en el almuerzo en los locales de Klang y Chinatown."
      },
      {
        nome: "Roti canai",
        testo: "Pan indio plano, crujiente y grasiento, servido con curry de lentejas. Se come en los locales mamak abiertos toda la noche."
      }
    ],
    attenzioni: [
      "Robos con tirón desde moto: mantener el teléfono lejos del bordillo y el bolso en el lado opuesto a la calzada.",
      "En Batu Caves, monos agresivos con la comida y los bolsos abiertos. En el santuario, hombros y rodillas cubiertos.",
      "Taxis: usar Grab o taxis con taxímetro. Rechazar a quien proponga un «precio fijo» en la estación.",
      "El calor y los chubascos de la tarde son casi diarios: las visitas al aire libre, por la mañana."
    ],
    esperienzeSlugs: ['batu-caves'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'El skyline de Kuala Lumpur al anochecer con las Torres Petronas iluminadas',
    immagine: '/images/malesia/kuala-lumpur.jpg',
  },
  {
    slug: 'penang',
    paeseSlug: 'malesia',
    ordine: 2,
    nome: 'Penang y George Town',
    tipologia: ['gastronomia', 'cultura', 'città coloniali'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      "Una isla en el estrecho de Malaca con George Town en el centro, antiguo puerto franco británico y hoy Patrimonio de la Humanidad de la UNESCO: shophouses chinas, mezquitas, templos, casas-clan sobre el agua y una cocina callejera famosa en todo el país.",
    percheAndarci:
      "Por la comida, que aquí basta por sí sola para justificar el viaje, y porque George Town es la ciudad donde los estratos culturales de Malasia mejor se leen: comunidades distintas a pocas manzanas, cada una con su propia arquitectura religiosa, todas llegadas por mar.",
    cosaVedere: [
      'El casco histórico UNESCO de George Town, con las shophouses peranakan',
      'Los Clan Jetties, los poblados sobre pilotes de las familias chinas, cada uno de un clan distinto',
      'El templo Kek Lok Si, gran complejo budista en la colina de Air Itam',
      'La Blue Mansion de Cheong Fatt Tze y la Pinang Peranakan Mansion',
      'La Street of Harmony, donde mezquita, templo chino, templo hindú e iglesia anglicana están en la misma calle',
      'Los murales del centro, que han hecho famosa a George Town mucho más allá de su perímetro',
    ],
    cosaFare: [
      'Comer en los puestos callejeros, el motivo por el que se viene aquí (hay una ficha de experiencia dedicada)',
      'Recorrer el casco histórico a pie siguiendo los murales y las instalaciones de hierro forjado',
      'Subir a Penang Hill en funicular para ver la isla y respirar aire fresco',
      'Excursión al Penang National Park hasta Monkey Beach',
    ],
    doveDormire:
      "Dentro del perímetro UNESCO de George Town, a ser posible en una shophouse restaurada: se recorre todo a pie y es la única forma de ver la ciudad por la noche. Batu Ferringhi es la zona de las playas y los resorts, pero está al otro lado de la isla y deja fuera la mejor parte.",
    doveMangiare:
      "Es la razón del viaje. Para probar por orden: el assam laksa, la sopa ácida de pescado y tamarindo que es el plato símbolo de la isla; el char kway teow salteado en el wok a fuego vivo; el cendol, el postre helado con leche de coco y azúcar de palma; el nasi kandar indio-musulmán, con los currys vertidos unos sobre otros sobre el arroz; y el rojak, ensalada de frutas salada con salsa de gambas fermentadas. Se come en los coffee shops y en los food courts más que en los restaurantes, y los mejores puestos tienen horarios propios: algunos abren solo por la mañana, otros solo después de la puesta de sol.",
    comeArrivare:
      "Vuelo a Penang (PEN) desde Kuala Lumpur o desde el extranjero, o tren ETS hasta Butterworth y ferri, que es la forma más bonita de llegar.",
    comeSpostarsi: 'George Town se recorre a pie; para el resto de la isla autobuses públicos económicos y Grab.',
    periodoMigliore:
      "la estación más seca, a principios de año. Durante los festivales de la ciudad, como el George Town Festival, la ciudad se llena.",
    costi:
      "La ciudad en sí es casi toda gratuita: el casco histórico se recorre a pie y los murales no se pagan. En Kek Lok Si se pagan los ascensores inclinados hacia la estatua; el funicular de Penang Hill tiene billete, con tarifas en la web oficial.",
    erroriDaEvitare: [
      "Ir a Penang por las playas: Batu Ferringhi es mediocre y mantiene lejos de la parte que importa",
      "Comer en los restaurantes con menú ilustrado: los mejores puestos no tienen letreros en inglés y cierran cuando se acaban los ingredientes",
      "Recorrer el casco histórico a mediodía: entre las once y las tres el calor es serio y hay poca sombra",
      "Quedarse una sola noche: George Town necesita al menos dos noches, porque la mitad de los puestos trabaja solo después de la puesta de sol",
    ],
    confronti: [
      {
        titolo: '¿Penang o Malaca?',
        introduzione:
          "Son las dos ciudades del Estrecho inscritas juntas en la lista UNESCO, tienen la misma historia (puertos coloniales con comunidades china, india y malaya) y a menudo se ponen como alternativa cuando hay poco tiempo. Se parecen menos de lo que parece.",
        opzioni: [
          {
            nome: 'George Town (Penang)',
            sintesi: "Más grande y más viva, considerada la capital gastronómica del país, en una isla con también montaña, parque nacional y playas.",
            costo: 'la ciudad es casi toda gratuita; vuelo o autobús desde KL',
            durata: '2-3 días',
            pro: [
              'La comida callejera es de otro nivel, y es el motivo principal para venir a Malasia',
              'Casco histórico más grande y todavía habitado, además de restaurado para los visitantes',
              'Hay más cosas además de la ciudad: Penang Hill, el parque nacional, los Clan Jetties',
            ],
            contro: ['Más lejos de Kuala Lumpur', 'Más caótica y menos fotogénica en conjunto', 'Las playas decepcionan'],
            perChi: "Quien tiene al menos dos días y viene también a comer. Si se elige solo una, es esta.",
          },
          {
            nome: 'Malaca',
            sintesi: "Más pequeña y más antigua, con la estratificación portuguesa, holandesa y británica visible en pocas manzanas, no lejos de Kuala Lumpur.",
            costo: 'autobús desde KL, económico',
            durata: '1-2 días',
            pro: [
              'Cómoda: encaja entre Kuala Lumpur y Singapur sin desvíos',
              'Historia colonial más antigua y más legible, con tres dominaciones europeas superpuestas',
              'Jonker Street el fin de semana y el barrio peranakan son muy bonitos',
            ],
            contro: [
              'Mucho más turística en proporción, y el fin de semana invadida por los visitantes de un día',
              'El centro se agota en media jornada',
              'La cocina es buena pero no aguanta la comparación con Penang',
            ],
            perChi: "Quien tiene un solo día o viaja por tierra hacia Singapur.",
          },
        ],
        raccomandazione:
          "Con una semana a disposición se hacen las dos: Malaca es una parada de un día de camino a Singapur, Penang una etapa propia de dos o tres. Si hay que elegir una, Penang, a menos que el viaje termine en Singapur por tierra: en ese caso Malaca no cuesta casi tiempo.",
      },
    ],
    miaEsperienza:
      "A Penang se va a comer, y quien diga lo contrario no ha estado. El casco histórico de George Town es bonito (shophouses desconchadas, letreros chinos, los Clan Jetties sobre pilotes donde todavía vive gente), pero lo que lo hace distinto de cualquier otra ciudad malasia es que cada comunidad ha traído aquí su propia cocina y ninguna la ha aguado. El assam laksa, con ese caldo ácido de pescado y tamarindo que a la primera cucharada descoloca, es el plato por el que vale la desviación. Hay que saber cómo funciona: los mejores puestos no tienen letreros en inglés, abren a horarios propios y cierran cuando se acaba, y puede pasar que uno se presente y se encuentre la persiana bajada a las dos de la tarde. En cuanto a la parte artística, los murales son simpáticos y ya hay colas para fotografiarse delante de los más famosos, pero la ciudad es Patrimonio de la UNESCO por otra cosa.",
    luoghi: [
      {
        nome: "Centro histórico de George Town",
        testo: "Patrimonio de la UNESCO por su mosaico de culturas: shophouses peranakan, templos chinos, mezquitas, iglesias y antiguas casas británicas. Se recorre a pie por las calles estrechas con los murales.",
        come: "Desde la terminal de ferris o los hoteles, a pie. Muchas rutas a pie.",
        quando: "A primera hora de la mañana y después de las cuatro de la tarde. Entre las once y las tres el calor es serio.",
        tempo: "medio día",
        consiglio: "Buscar los murales pero también los talleres de artesanos, y parar a tomar un café blanco en una vieja cafetería."
      },
      {
        nome: "Clan Jetties",
        testo: "Poblados sobre pilotes donde viven desde hace generaciones familias chinas agrupadas por clan. El más conocido es el Chew Jetty, con casas de madera, altares y tiendas.",
        come: "A pie desde el paseo marítimo de George Town. Es un lugar donde se vive: caminar en silencio, preguntar antes de fotografiar.",
        quando: "Por la mañana o a última hora de la tarde.",
        tempo: "1 hora",
        consiglio: "Comprar algo en una de las tiendas del muelle: es la única forma correcta de apoyar a quien vive allí."
      },
      {
        nome: "Kek Lok Si",
        testo: "Un gran conjunto budista al pie de la colina de Air Itam. La pagoda de los Diez Mil Budas tiene la base china, la parte central tailandesa y la cúpula birmana; más arriba hay una gran estatua de Guanyin de bronce.",
        come: "Autobús Rapid Penang desde George Town o taxi. Unos ascensores inclinados suben hasta la estatua.",
        quando: "Por la mañana; en el Año Nuevo chino está lleno de farolillos y fieles.",
        tempo: "1 hora y media",
        costo: "entrada al conjunto libre; los ascensores inclinados se pagan aparte",
        consiglio: "Subir hasta la estatua de Guanyin: la vista sobre Penang vale los escalones."
      },
      {
        nome: "Cheong Fatt Tze Mansion (Blue Mansion)",
        testo: "La casa-palacio del mercader Cheong Fatt Tze, construida entre 1897 y 1904, con las paredes color índigo obtenidas de cal y tinte natural, los patios interiores y el mobiliario original. La restauración recibió un premio UNESCO de conservación del patrimonio.",
        come: "A pie desde el centro de George Town. Se visita con el tour guiado en inglés, a horas fijas; la casa es también un hotel.",
        quando: "Por la mañana, con el tour en inglés.",
        tempo: "1 hora",
        url: "https://www.cheongfatttzemansion.com/",
        consiglio: "Llegar a tiempo para el primer tour: los grupos son pequeños y el relato vale más que las salas."
      },
      {
        nome: "Street of Harmony",
        testo: "Un tramo de Jalan Masjid Kapitan Keling y alrededores donde están juntos una mezquita, un templo chino, un templo hindú y una iglesia anglicana. Un ejemplo real de convivencia.",
        come: "A pie por el casco histórico.",
        quando: "Por la mañana. Las mezquitas están cerradas a los no musulmanes durante la oración.",
        tempo: "1 hora",
        costo: "gratuito",
        consiglio: "Visitar la Kapitan Keling Mosque fuera de las horas de oración, con ropa cubierta."
      },
      {
        nome: "Penang Hill",
        testo: "Una colina sobre la ciudad, a la que se sube en funicular, con aire más fresco, un jardín botánico y vistas sobre George Town y el continente.",
        come: "En autobús desde Komtar o en taxi hasta la estación del funicular, luego la subida en funicular.",
        quando: "Abierta todos los días de 6:15 a 21:45. Por la mañana hay menos niebla y menos colas.",
        tempo: "3 horas",
        url: "https://www.penanghill.gov.my/",
        consiglio: "Subir pronto: por la tarde las colas del funicular son largas."
      }
    ],
    programmi: [
      {
        titolo: "2 días",
        tappe: [
          "Día 1: mañana a pie por el centro histórico y Street of Harmony; almuerzo en un centro de comida; primera hora de la tarde Blue Mansion; última hora Clan Jetties; noche cena callejera",
          "Día 2: mañana Kek Lok Si; almuerzo en Air Itam (assam laksa); tarde Penang Hill; noche libre"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Como los dos días, con el tercero dedicado a comer: desayuno tradicional, mercado, una ruta en busca de los mejores puestos y una cena final en un hawker"
        ]
      }
    ],
    zone: [
      {
        nome: "Centro histórico de George Town",
        perChi: "quien quiere hacerlo todo a pie",
        testo: "Shophouses restauradas convertidas en casas de huéspedes y pequeños hoteles. Muy cómodo, algo ruidoso por la noche."
      },
      {
        nome: "Batu Ferringhi",
        perChi: "quien busca mar y resorts",
        testo: "Una franja de playa con grandes hoteles. Mar mediocre, pero es la zona más cómoda para familias."
      },
      {
        nome: "Komtar y Jalan Burma",
        perChi: "quien quiere ahorrar",
        testo: "Hoteles de gama media, fuera del corazón turístico pero a pocos minutos en autobús o taxi."
      }
    ],
    sapori: [
      {
        nome: "Assam laksa",
        testo: "Fideos en caldo ácido de pescado y tamarindo con menta y piña. El plato por el que vale la pena el desvío; se come en Air Itam."
      },
      {
        nome: "Char kway teow",
        testo: "Fideos salteados a fuego alto con gambas, berberechos y huevo. En Penang la versión sabe a humo del fuego de carbón."
      },
      {
        nome: "Nasi kandar",
        testo: "Arroz con distintos currys por encima, de origen indio musulmán. Se pide en el mostrador y se señala qué va en el plato."
      },
      {
        nome: "Cendol",
        testo: "Hielo picado, leche de coco, almíbar de palma y gelatinas verdes. El postre de Penang."
      }
    ],
    attenzioni: [
      "Los mejores puestos no tienen carteles en inglés, abren a su hora y cierran cuando se les acaba: llegar pronto o no contar con sitio.",
      "Evitar el centro entre las once y las tres: el calor es fuerte y la sombra escasa.",
      "En templos y mezquitas, hombros y rodillas cubiertos, zapatos fuera.",
      "En los puestos turísticos junto a los murales la comida y los recuerdos cuestan más que en las calles laterales."
    ],
    esperienzeSlugs: ['street-food-penang'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Los tejados de George Town, Weld Quay y los Clan Jetties vistos desde arriba, con el estrecho y Butterworth al fondo',
    immagine: '/images/malesia/penang.jpg',
  },
  {
    slug: 'malacca',
    paeseSlug: 'malesia',
    ordine: 3,
    nome: 'Malaca',
    tipologia: ['storia', 'città coloniali', 'gastronomia'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      "El puerto que durante siglos controló el estrecho más estratégico de Asia, conquistado por los portugueses, luego por los holandeses y por fin por los británicos: tres dominaciones europeas superpuestas en pocas manzanas, más la cultura peranakan nacida de los matrimonios entre comerciantes chinos y mujeres malayas.",
    percheAndarci:
      "Aquí la historia colonial del sudeste asiático se lee caminando (la iglesia portuguesa en ruinas, la plaza holandesa roja, el fuerte), y la ciudad está a medio camino entre Kuala Lumpur y Singapur.",
    cosaVedere: [
      'La Dutch Square con la Christ Church y el Stadthuys, el antiguo ayuntamiento holandés',
      'Las ruinas de la iglesia de St. Paul en lo alto de la colina, con vistas al estrecho',
      'La Porta de Santiago, lo que queda de la fortaleza portuguesa A Famosa',
      'Jonker Street, la calle principal de Chinatown, con el mercado nocturno del fin de semana',
      'El Baba & Nyonya Heritage Museum, una casa peranakan conservada con el mobiliario original',
      'El Cheng Hoon Teng, templo chino histórico',
    ],
    cosaFare: [
      'Caminar el casco histórico UNESCO, que se recorre entero a pie en media jornada',
      'Cenar peranakan, la cocina nacida del encuentro entre chinos y malayos, típica de Malaca y Penang',
      'Mercado nocturno de Jonker Street el fin de semana',
      'Paseo en barca por el río al atardecer, con los murales en las orillas',
    ],
    doveDormire:
      "Dentro del casco histórico, mejor por el lado de Chinatown: por la noche, cuando los autocares de los visitantes de un día se han ido, el barrio cambia por completo, y esa es la razón para quedarse a dormir.",
    doveMangiare:
      "La cocina que hay que buscar es la peranakan o nyonya: el ayam pongteh, el pollo estofado con salsa de soja fermentada, y el laksa nyonya, con leche de coco, que es distinto del de Penang. La especialidad popular es en cambio el chicken rice ball, el pollo con el arroz servido en bolas compactas, típico de la ciudad. Para probar también el cendol de Malaca, rico en azúcar de palma, y los satay celup, las brochetas que cuecen los propios clientes en una olla de salsa de cacahuete hirviendo en el centro de la mesa.",
    comeArrivare:
      "Autobuses frecuentes desde Kuala Lumpur, desde la terminal TBS. De Malaca a Singapur hay autobuses directos, frontera incluida: es la razón por la que esta ciudad está en medio de casi todos los itinerarios.",
    comeSpostarsi: 'El casco histórico se recorre a pie. Para la estación de autobuses, que está fuera de la ciudad, hacen falta un autobús local o Grab.',
    periodoMigliore: 'todo el año, con los meses más secos a principios de año. El mercado nocturno de Jonker Street solo existe el fin de semana, lo que condiciona la elección de los días.',
    costi: "Baba & Nyonya Heritage Museum de pago (tarifas en su web), St. Paul y la Porta de Santiago gratis, paseo en barca por el río de pago.",
    erroriDaEvitare: [
      "Ir en fin de semana esperando tranquilidad: de viernes a domingo Malaca es un destino nacional muy concurrido",
      "Hacerla en el día desde Kuala Lumpur: se ve solo en las peores horas y se pierde la noche, que es el momento en que la ciudad funciona",
      "Subir a los trishaws decorados con luces y música a todo volumen esperando un paseo romántico: son una atracción kitsch, lo cual está muy bien si se sabe de antemano",
    ],
    miaEsperienza:
      "Malaca es una parada breve que rinde mucho más de lo que promete, con una condición: dormir allí. De día, sobre todo en fin de semana, el centro es un flujo continuo de visitantes de un día desde Kuala Lumpur y Singapur, con los trishaws decorados con luces LED que pasan a todo volumen: un nivel de kitsch que a la segunda vez resulta divertido. Por la noche, cuando los autocares se van, quedan las callejuelas de Chinatown, las casas peranakan con las puertas abiertas y el río iluminado. La colina de St. Paul, con la iglesia portuguesa sin techo y las lápidas holandesas apoyadas en las paredes, es el sitio donde los estratos de esta ciudad se entienden en dos minutos. Y la cocina nyonya, nacida del encuentro entre comerciantes chinos y mujeres malayas, es una de las cosas más interesantes que comí en todo el país.",
    luoghi: [
      {
        nome: "Dutch Square, Christ Church y Stadthuys",
        testo: "El centro holandés de la ciudad, con los edificios rojo ladrillo: la Christ Church y el Stadthuys, la antigua sede del gobierno holandés.",
        come: "A pie desde el centro histórico. El Stadthuys alberga un museo de historia y etnografía.",
        quando: "Por la mañana, antes de la multitud.",
        tempo: "1 hora",
        consiglio: "Empezar aquí y subir hacia St. Paul por las escaleras laterales."
      },
      {
        nome: "St. Paul's Hill y Porta de Santiago",
        testo: "En la colina están las ruinas de la iglesia nacida como capilla portuguesa, con lápidas holandesas en los muros. Al pie está la Porta de Santiago, última parte de la fortaleza A Famosa.",
        come: "A pie, con una breve subida. Desde la cima se ve el estrecho.",
        quando: "Al atardecer, con la luz cayendo sobre el estrecho.",
        tempo: "1 hora",
        costo: "gratuito",
        consiglio: "Leer las lápidas: son un resumen de la historia de la ciudad."
      },
      {
        nome: "Jonker Street",
        testo: "La calle principal de Chinatown, con tiendas de antigüedades, cafés y, los fines de semana, un mercado nocturno abarrotado.",
        come: "A pie desde el centro. El mercado nocturno abre viernes, sábado y domingo por la noche.",
        quando: "Entre semana para caminar con calma; el fin de semana para el mercado.",
        tempo: "1-2 horas",
        consiglio: "Comer en Jonker no siempre es la mejor opción: probar las calles laterales."
      },
      {
        nome: "Baba & Nyonya Heritage Museum",
        testo: "La casa de una familia peranakan, conservada con el mobiliario original: madera tallada, porcelanas y fotos de familia. Cuenta la comunidad chino-malaya nacida del encuentro de los mercaderes chinos con las mujeres locales.",
        come: "A pie desde Jonker Street.",
        quando: "Cerrado los martes. Los demás días laborables 10-16:15, el fin de semana 10-16:45 (2025).",
        tempo: "1 hora",
        url: "https://www.babanyonyamuseum.com/",
        consiglio: "Consultar horarios y modalidades de visita en la web antes de ir."
      },
      {
        nome: "Cheng Hoon Teng",
        testo: "Un templo chino histórico, todavía en uso; en las calles cercanas hay también una mezquita y un templo hindú: tres culturas a pocos pasos.",
        come: "A pie, en el casco histórico, en la zona conocida como Harmony Street.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        costo: "gratuito",
        consiglio: "Visitar ambos en el mismo paseo, con la cabeza cubierta para la mezquita."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Dutch Square y Stadthuys",
          "Media mañana: St. Paul's Hill y Porta de Santiago",
          "Almuerzo: cocina nyonya",
          "Primera hora de la tarde: Baba & Nyonya Museum",
          "Última hora de la tarde: Cheng Hoon Teng y Harmony Street",
          "Noche: Jonker Street y el río iluminado"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: como arriba",
          "Día 2: mañana paseando por Chinatown en día laborable, paseo en barco por el río y regreso por la tarde"
        ]
      }
    ],
    zone: [
      {
        nome: "Chinatown y Jonker Street",
        perChi: "quien quiere estar en el corazón de la ciudad",
        testo: "Casas de huéspedes en casas históricas, muchas cerca de todo. Ruidoso los fines de semana."
      },
      {
        nome: "Orilla del río",
        perChi: "quien busca vista al río",
        testo: "Hoteles con vistas al río, más tranquilos. Algo más lejos de Jonker Street."
      }
    ],
    sapori: [
      {
        nome: "Chicken rice ball",
        testo: "Arroz moldeado en bolas y servido con pollo hervido. La versión local del chicken rice."
      },
      {
        nome: "Laksa nyonya",
        testo: "Fideos en caldo de coco y gambas, típicos de la cocina peranakan."
      },
      {
        nome: "Cendol",
        testo: "Hielo picado, leche de coco, almíbar de palma y gelatinas verdes. Un postre muy querido en Malaca."
      },
      {
        nome: "Satay celup",
        testo: "Brochetas que se cuecen en la mesa en una olla de salsa hirviendo. Una especialidad de Malaca."
      }
    ],
    attenzioni: [
      "De viernes a domingo la ciudad se llena de excursionistas: si se puede, venir entre semana.",
      "Los trishaw decorados con luces y música alta son una atracción: acordar el precio antes de subir.",
      "No hacerlo en una excursión de un día desde Kuala Lumpur: se pierde la noche, cuando se van los autocares.",
      "El calor es fuerte a mediodía: llevar agua y cubrirse la cabeza."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'El río de Malaca entre las casas de colores del casco histórico, con un barco turístico',
    immagine: '/images/malesia/malacca.jpg',
  },
  {
    slug: 'cameron-highlands',
    paeseSlug: 'malesia',
    ordine: 4,
    nome: 'Cameron Highlands',
    tipologia: ['natura', 'montagna', 'trekking'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      "La meseta donde los británicos se refugiaban del calor: plantaciones de té hasta donde alcanza la vista, invernaderos de fresas, selva de musgo y un clima fresco por la noche. Es uno de los pocos lugares de la península donde hace falta una sudadera.",
    percheAndarci:
      "Tras unos días de calor ecuatorial el alivio físico se nota, y las plantaciones de té que bajan en ondas por las colinas son un paisaje muy fotografiado. La mossy forest, el bosque de musgo de altura, es otra cosa completamente distinta.",
    cosaVedere: [
      'Las plantaciones de té, con las terrazas verdes que siguen las colinas',
      'La mossy forest en el Gunung Brinchang, un bosque de altura cubierto de musgo y helechos, que se recorre por una pasarela',
      'Las granjas de fresas y los invernaderos, la otra producción típica de la meseta',
      'El mercado de Brinchang, con los productos de la meseta',
    ],
    cosaFare: [
      'Visita a una plantación con degustación y vistas a las terrazas (hay una ficha de experiencia dedicada)',
      'Paseo por la mossy forest por la mañana, cuando la niebla todavía está entre los árboles',
      'Uno de los senderos numerados de la zona, del fácil al bastante exigente',
      'Buscar la rafflesia, una flor gigante, con un guía local: florece por períodos y no está garantizada',
    ],
    doveDormire:
      "Tanah Rata es el pueblo más cómodo y tiene la oferta más amplia; Brinchang está más cerca de las plantaciones pero es más anónimo. Las habitaciones raramente tienen calefacción: por la noche hace frío en serio y las mantas cuentan más que las estrellas.",
    doveMangiare:
      "La meseta tiene una identidad gastronómica propia ligada al clima: el steamboat, la olla de caldo hirviendo en el centro de la mesa en la que se cuecen verduras y carne, es lo que come todo el mundo por la noche porque hace frío, y es lo correcto. Por lo demás, té y scones en los salones de té de las plantaciones (una herencia colonial que aquí no es una pose) y las fresas en todas las formas posibles, incluidas las que sería mejor evitar.",
    comeArrivare:
      "Autobús desde Kuala Lumpur o desde Penang e Ipoh. El último tramo es una carretera de montaña con muchas curvas: quien se marea en coche lo nota, y no es un detalle menor en un viaje largo.",
    comeSpostarsi:
      "Las distancias entre los puntos de interés son incómodas a pie y el transporte público es escaso: casi todos se apuntan a un tour de media jornada o toman un taxi para el día. Grab funciona a trompicones.",
    periodoMigliore:
      "todo el año, con temperaturas frescas y estables. Las lluvias son frecuentes por la tarde en cualquier estación: las salidas hay que programarlas por la mañana.",
    costi: "entrada a las plantaciones gratuita o simbólica; los tours de medio día son de pago, con precios que conviene comparar entre las agencias de Tanah Rata.",
    erroriDaEvitare: [
      "Ir en fin de semana o durante las vacaciones escolares malasias: la meseta es un destino nacional muy querido y las carreteras de curvas se convierten en una cola",
      "No llevar nada de abrigo: aquí, único lugar del viaje, por la noche se hiela",
      "Reservar los tours más baratos para la mossy forest, que a menudo llevan solo a la pasarela abarrotada cerca de la torre en lugar de a la parte de verdad",
      "Esperar paisajes vírgenes: la meseta está muy cultivada y en algunas zonas los invernaderos de plástico se han comido la vista",
    ],
    miaEsperienza:
      "Las Cameron Highlands funcionan sobre todo por contraste: llegamos tras días de calor húmedo y por la noche dormimos bajo una manta, que a esas alturas parecía un lujo. Las plantaciones de té son bonitas, con las terrazas verdes que bajan en ondas, y el salón de té asomado a las colinas es una de esas cosas coloniales que aquí no desentonan. La mossy forest es la parte que más sorprende (un bosque enano a 2.000 metros todo cubierto de musgo, con la niebla entre las ramas) y a la vez aquella en la que conviene ser práctico: hay dos mossy forest, la de verdad y la pasarela turística junto al aparcamiento de la torre, y los tours más baratos llevan solo a la segunda. Está también el reverso de la medalla: la meseta es agrícola y en algunos tramos los invernaderos de plástico cubren laderas enteras. Es una zona cultivada con partes muy bonitas dentro, no un parque nacional.",
    luoghi: [
      {
        nome: "Plantaciones de té",
        testo: "Colinas cubiertas de terrazas de té hasta donde alcanza la vista. Algunas plantaciones tienen un salón de té con vistas.",
        come: "En coche o con tour desde Tanah Rata o Brinchang. Carreteras de montaña estrechas.",
        quando: "Por la mañana, con menos niebla y menos gente.",
        tempo: "2 horas",
        consiglio: "Tomar el té en la terraza y mirar las colinas media hora: es la mejor parte."
      },
      {
        nome: "Mossy Forest en el Gunung Brinchang",
        testo: "Un bosque de altura cerca de la cima del Gunung Brinchang, cubierto de musgo, helechos y orquídeas silvestres, con niebla entre las ramas. Se recorre por una pasarela de madera.",
        come: "En todoterreno o con un tour guiado desde Tanah Rata o Brinchang. Pedir que lleven a la parte auténtica, no solo a la pasarela junto al aparcamiento de la torre.",
        quando: "A primera hora de la mañana: la niebla sube hacia el mediodía.",
        tempo: "2-3 horas",
        consiglio: "Preferir un tour guiado con una hora más: los tours más baratos solo llevan a la pasarela abarrotada."
      },
      {
        nome: "Granjas de fresas e invernaderos",
        testo: "El cultivo de fresas y verduras es la otra actividad típica del altiplano. Se visitan los invernaderos, se comen fresas y se compra miel y té.",
        come: "En coche o con un tour, por la carretera principal de Brinchang.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        consiglio: "No esperar un paisaje virgen: muchas zonas están cubiertas por invernaderos de plástico."
      },
      {
        nome: "Brinchang y el mercado",
        testo: "Uno de los pueblos principales de la meseta, con el mercado de productos locales, un mercado nocturno y los restaurantes donde se come steamboat.",
        come: "A pie en Brinchang o en autobús desde Tanah Rata.",
        quando: "A última hora de la tarde y por la noche.",
        tempo: "2 horas",
        consiglio: "Llevar una sudadera: por la noche hace frío."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Primera hora de la mañana: Mossy Forest con tour guiado",
          "Media mañana: plantación de té con té en la terraza",
          "Almuerzo en Brinchang",
          "Primera hora de la tarde: granja de fresas",
          "Noche: steamboat en Brinchang"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Como arriba, y el segundo día senderismo ligero por los caminos de Tanah Rata y algo de tiempo libre"
        ]
      }
    ],
    zone: [
      {
        nome: "Tanah Rata",
        perChi: "quien quiere estar cerca de los senderos y los autobuses",
        testo: "El centro con hostales y casas de huéspedes, cómodo para excursiones y restaurantes. Algo concurrido."
      },
      {
        nome: "Brinchang",
        perChi: "quien quiere estar cerca de la Mossy Forest y del mercado",
        testo: "Más tranquilo, con hoteles de gama media y más frío por la noche."
      }
    ],
    sapori: [
      {
        nome: "Steamboat",
        testo: "Una olla de caldo hirviendo en el centro de la mesa donde se cuecen carne, pescado y verduras. Ideal para las noches frías del altiplano."
      },
      {
        nome: "Scones con fresas y nata",
        testo: "Una herencia británica, servida en las salas de té de las plantaciones."
      },
      {
        nome: "Té de plantación",
        testo: "Té negro local, servido en las salas de té de las plantaciones."
      },
      {
        nome: "Murtabak",
        testo: "Una torta rellena de carne y huevo, de origen indio musulmán. Se encuentra en los locales de Tanah Rata y Brinchang."
      }
    ],
    attenzioni: [
      "Los fines de semana y en vacaciones escolares malasias las carreteras de curvas se atascan: venir en día laborable.",
      "Por la noche refresca, y en altura hace frío: llevar algo de abrigo.",
      "Para quien se marea en el coche: la carretera de subida está llena de curvas.",
      "Elegir un tour de la Mossy Forest que llegue a la parte auténtica y no solo a la pasarela junto al aparcamiento."
    ],
    esperienzeSlugs: ['piantagioni-te-cameron'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Las colinas cubiertas de selva de las Cameron Highlands vistas desde un mirador',
    immagine: '/images/malesia/cameron-highlands.jpg',
  },
  {
    slug: 'taman-negara',
    paeseSlug: 'malesia',
    ordine: 5,
    nome: 'Taman Negara',
    tipologia: ['natura', 'giungla', 'trekking'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      "Una selva pluvial antiquísima, en el corazón de la península malaya. Se llega en barca por el río, y eso ya dice mucho de qué esperar.",
    percheAndarci:
      "Es selva de verdad, accesible desde Kuala Lumpur, y la pasarela de copas suspendida entre los árboles es una de las pocas formas de ver una selva pluvial desde arriba en lugar de desde abajo, donde casi no se ve nada.",
    cosaVedere: [
      'La canopy walkway, suspendida entre las copas de los árboles',
      'El Bukit Teresek, la subida panorámica sobre la bóveda de la selva',
      'Los rápidos de Lata Berkoh, remontados en barca',
      'Un poblado orang asli, las comunidades indígenas de la península, con demostración de cerbatana',
      'Las cuevas de Gua Telinga, que se recorren arrastrándose, para quien no teme los espacios estrechos',
    ],
    cosaFare: [
      'Caminar por la canopy walkway a primera hora de la mañana (hay una ficha de experiencia dedicada)',
      'Night walk guiada en la selva, el momento en que los animales se ven de verdad',
      'Remontar el río en barca larga hasta los rápidos',
      'Trekking de varios días hacia los hides, los puestos de avistamiento donde se duerme esperando a la fauna',
    ],
    doveDormire:
      "Kuala Tahan, el pueblo en la orilla opuesta a la entrada del parque, tiene los alojamientos económicos y los restaurantes flotantes; dentro del parque está el resort oficial, más caro pero con la ventaja de estar ya en el lado correcto del río por la mañana.",
    doveMangiare:
      "En Kuala Tahan se come en los restaurantes flotantes amarrados en el río, que sirven cocina malaya sencilla a precios bajos con la corriente pasando bajo las mesas. Dentro del parque la oferta es limitada y cara. Para los treks largos se lleva todo de fuera: agua incluida, porque a lo largo de los senderos no hay nada.",
    comeArrivare:
      "Minibús desde Kuala Lumpur hasta Kuala Tembeling o a Jerantut, luego barca larga por el río Tembeling: la travesía es la parte más bonita del traslado. Muchos operadores ofrecen el paquete combinado desde la capital.",
    comeSpostarsi: 'A pie en el parque y en barca por el río: no hay carreteras. Para cruzar de Kuala Tahan a la entrada hay barquitas frecuentes y baratas.',
    periodoMigliore:
      "la ventana más seca es a mitad de año. A final de año las lluvias son fuertes y algunas actividades se suspenden; el nivel del río condiciona las remontadas en barca.",
    costi: "para entrar en el parque hace falta el permiso del Departamento de Fauna y Parques (a menudo incluido en los paquetes); la canopy walkway y las excursiones guiadas se pagan aparte, con precios que varían según la duración.",
    erroriDaEvitare: [
      "Esperar ver tigres, elefantes o tapires: existen, pero los avistamientos son rarísimos y quien llega con esa idea vuelve decepcionado. Aquí se oye más de lo que se ve",
      "Ir sin calcetines antisanguijuelas en la estación húmeda: las sanguijuelas terrestres son numerosas y llegan desde abajo",
      "Hacer la canopy walkway a mediodía, cuando hay cola en las pasarelas y se pasa de uno en uno",
      "Subestimar la night walk: es el momento en que la selva se anima, y casi todos se la saltan por cansancio",
    ],
    miaEsperienza:
      "Taman Negara hay que afrontarla con la expectativa correcta, porque es la parada que decepciona a quien llega pensando en un documental. La selva pluvial es densísima y de lado se ve a pocos metros: se oyen cigarras, gibones lejanos, pájaros, pero de animales grandes casi no se ve nada. Lo que la hace memorable son la travesía en barca larga para llegar, dos horas y media a contracorriente entre dos muros de verde, y la canopy walkway, la única forma de mirar la selva desde arriba y entender su estructura por estratos. Hay que hacerla a la apertura, porque más tarde se pasa de uno en uno con la cola detrás. La night walk es la parte que casi todos se saltan, y es la que vale: con la linterna se ven arañas, serpientes, ojos que reflejan en la oscuridad, y la selva de día silenciosa se vuelve ruidosísima. Una última cosa práctica: las sanguijuelas existen y suben por los pies, y los calcetines específicos no son un exceso de celo.",
    luoghi: [
      {
        nome: "Canopy walkway",
        testo: "Una pasarela colgante entre las copas de los árboles. Es la única manera de mirar la selva desde arriba y entender su estructura por capas.",
        come: "A pie desde el pueblo de Kuala Tahan, por un sendero en la selva. El permiso se compra en el centro de visitantes; se pasa de pocos en pocos.",
        quando: "A la apertura: más tarde se va con cola detrás.",
        tempo: "2-3 horas",
        consiglio: "Ir a la apertura para tener la pasarela casi libre."
      },
      {
        nome: "Bukit Teresek",
        testo: "Una subida empinada sobre el dosel de la selva, con escalones y raíces. Desde arriba se ve la extensión verde y el río.",
        come: "A pie desde Kuala Tahan, por el mismo sendero de la canopy walkway, con un tramo más.",
        quando: "A primera hora de la mañana, por el fresco.",
        tempo: "2 horas",
        consiglio: "Llevar agua y calcetines altos contra las sanguijuelas."
      },
      {
        nome: "Lata Berkoh",
        testo: "Rápidos río arriba del pueblo, a los que se llega remontando el río en barca larga. El trayecto en barca, contracorriente entre dos paredes de selva, ya forma parte de la visita.",
        come: "En barca larga desde el pueblo, a horas acordadas con los operadores. El nivel del río decide si se puede ir.",
        quando: "Por la mañana. En la temporada de lluvias las salidas se suspenden.",
        tempo: "medio día",
        consiglio: "Preguntar a varios operadores si la salida está confirmada antes de reservar."
      },
      {
        nome: "Night walk",
        testo: "Una caminata nocturna con guía y linterna por el bosque: arañas, insectos, serpientes y ranas, y con suerte algún mamífero. Es el momento en que el bosque cobra vida.",
        come: "Con un guía del parque o de un operador autorizado, desde el pueblo.",
        quando: "Después del atardecer, durante un par de horas.",
        tempo: "2 horas",
        consiglio: "Es la parte que casi todos se saltan por cansancio y la que merece la pena."
      },
      {
        nome: "Poblado Orang Asli y Gua Telinga",
        testo: "Las comunidades indígenas de la península siguen viviendo en la zona; una visita con demostración de cerbatana es la forma más habitual. Gua Telinga es una cueva que se recorre arrastrándose, con murciélagos.",
        come: "Con operadores autorizados, en barca. La visita a la cueva exige no tener problemas con los espacios estrechos.",
        quando: "Por la mañana.",
        tempo: "medio día",
        consiglio: "Elegir un operador que lleve dinero a la comunidad y no haga un espectáculo."
      }
    ],
    programmi: [
      {
        titolo: "2 días",
        tappe: [
          "Día 1: llegada en barca desde Kuala Tembeling, instalación, night walk",
          "Día 2: canopy walkway a la apertura, Bukit Teresek, almuerzo en el pueblo, regreso por la tarde"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Como los 2 días, con el día adicional para Lata Berkoh o el poblado Orang Asli"
        ]
      }
    ],
    zone: [
      {
        nome: "Kuala Tahan (lado del pueblo)",
        perChi: "quien quiere una cama barata y restaurantes cerca",
        testo: "Casas de huéspedes y chalés en el río frente al parque, con restaurantes flotantes. Ruidoso y sencillo."
      },
      {
        nome: "Dentro del parque",
        perChi: "quien quiere alojarse dentro del parque",
        testo: "Resort con chalés, cerca de los senderos. Más caro, con poca oferta de comida."
      }
    ],
    sapori: [
      {
        nome: "Pescado de río a la parrilla",
        testo: "Pescado del Tembeling a la brasa, servido en los restaurantes flotantes de Kuala Tahan."
      },
      {
        nome: "Nasi campur",
        testo: "Arroz con muchos platitos a elegir, señalados en el mostrador. Una comida sencilla y barata."
      },
      {
        nome: "Teh tarik",
        testo: "Té con leche condensada «estirado» de un vaso a otro. Se pide en todas partes."
      },
      {
        nome: "Mee goreng",
        testo: "Fideos salteados con verduras y huevo. El plato que casi siempre hay."
      }
    ],
    attenzioni: [
      "Las sanguijuelas abundan en la estación húmeda: calcetines adecuados y revisar las piernas al final del día.",
      "No esperar ver tigres ni elefantes: los avistamientos son rarísimos.",
      "Casi no hay cajeros en el pueblo: llevar efectivo desde Kuala Lumpur o Jerantut.",
      "En la estación de lluvias, a final de año, los ríos crecen y algunas actividades se suspenden: preguntar en el lugar."
    ],
    esperienzeSlugs: ['canopy-walkway-taman-negara'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'La selva pluvial de Taman Negara vista desde la colina de Teresek, con las montañas en el horizonte',
    immagine: '/images/malesia/taman-negara.jpg',
  },
  {
    slug: 'langkawi',
    paeseSlug: 'malesia',
    ordine: 6,
    nome: 'Langkawi',
    tipologia: ['mare', 'isole', 'natura'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      "Un archipiélago de muchas islas en el norte del estrecho de Malaca, pegado a la frontera tailandesa: playas, manglares, un geoparque UNESCO de formaciones calizas y un teleférico empinadísimo que sube a una cresta con un puente colgante en curva.",
    percheAndarci:
      "Es una isla de la costa oeste accesible sin complicaciones, funciona también en la estación en que las Perhentian cierran, y el paseo en barca entre los manglares muestra una Malasia distinta de la de las playas.",
    cosaVedere: [
      'El Sky Bridge, el puente peatonal curvo suspendido sobre la selva, al que se llega con el teleférico de Machinchang',
      'El geoparque de los manglares de Kilim, con las formaciones calizas y las cuevas',
      'La playa equipada de Pantai Cenang y las más tranquilas del norte',
    ],
    cosaFare: [
      'Paseo en barca por los manglares de Kilim, con las águilas marinas y las cuevas calizas',
      'Teleférico y Sky Bridge, mejor por la mañana antes de que llegue la bruma',
      'Island hopping entre las islas cercanas',
    ],
    doveDormire:
      "Pantai Cenang por servicios, restaurantes y vida nocturna; la costa norte alrededor de Datai y Tanjung Rhu por los resorts y la verdadera tranquilidad; Kuah por los precios bajos y la cercanía al puerto, pero sin playa digna.",
    doveMangiare:
      "La isla vive del turismo y los precios lo reflejan, pero bastan pocos metros de la playa para volver a los estándares malasios: los puestos de los mercados nocturnos son la mejor opción y la más económica. El pescado a la parrilla y los currys de pescado son la cocina natural del lugar.",
    comeArrivare:
      "Vuelo a Langkawi (LGK) desde Kuala Lumpur o Penang, o ferri desde Kuala Kedah, Penang o Satun en Tailandia, útil para quien combina los dos países.",
    comeSpostarsi:
      "Coche o moto de alquiler son el medio adecuado: la isla es grande, el transporte público casi inexistente y los taxis caros respecto al resto del país. Conducir es sencillo y las carreteras son buenas.",
    periodoMigliore:
      "la estación seca de la costa oeste, en torno a principios de año, con el mar más en calma. En los meses centrales las lluvias son más frecuentes y puede llegar la bruma de incendios de Indonesia.",
    costi: "teleférico y Sky Bridge de pago (tarifas en la web oficial), paseo por los manglares por barca a compartir, alquiler de scooter barato.",
    erroriDaEvitare: [
      "Esperar aguas de postal tailandesa: el mar de Langkawi suele estar turbio porque estamos en la desembocadura de sistemas fluviales, y quien busca el turquesa se queda decepcionado",
      "Subir al teleférico a primera hora de la tarde, cuando la bruma tapa la vista y la cola es larga",
      "Alquilar la moto sin carné internacional y sin casco: los controles existen",
      "Tratar el paseo por los manglares como una excursión en barca: los guías que dan de comer a las águilas para atraerlas practican algo discutible, y hay que preguntar de antemano si el operador lo hace",
    ],
    miaEsperienza:
      "Langkawi es la isla cómoda de Malasia y hay que tomarla por lo que es: se llega en avión, se alquila una moto y se recorre libremente. Con el mar hay que bajar las expectativas. El agua suele ser verdosa y turbia, porque estamos en el estrecho y los ríos desembocan allí: quien busca el turquesa de las postales está mirando la costa equivocada de Malasia. Por sorpresa, lo que da sentido a la parada es la parte no playera: el paseo entre los manglares de Kilim, con las paredes calizas que se cierran sobre la barca, las cuevas de murciélagos y los cangrejos en el fango, es más interesante que cualquier playa de la isla. El Sky Bridge merece la subida a condición de hacerla pronto: hacia mediodía la bruma se lo come todo y queda la cola. Y está el detalle práctico que nadie anticipa: Langkawi es puerto franco, así que el alcohol cuesta un tercio que en el resto del país, y se nota enseguida cómo cambia el ambiente nocturno respecto al resto de Malasia.",
    luoghi: [
      {
        nome: "Langkawi Sky Bridge y teleférico",
        testo: "El teleférico sube hacia la cima del Gunung Mat Cincang. Desde allí se baja al puente peatonal curvo, suspendido en el vacío, con vistas al mar, las islas y la selva.",
        come: "Desde la estación base se toma el teleférico hasta la estación superior, luego el ascensor inclinado SkyGlide o un sendero llevan al puente.",
        quando: "Por la mañana, cuando la neblina es menor y las colas más cortas.",
        tempo: "3 horas",
        url: "https://www.panoramalangkawi.com/",
        consiglio: "Subir a la apertura: hacia el mediodía la neblina cubre la vista."
      },
      {
        nome: "Manglares de Kilim",
        testo: "Forman parte del geoparque UNESCO de Langkawi: paredes calizas, cuevas de murciélagos, monos y cangrejos en el fango. Se visita en barca.",
        come: "En barca con operadores, desde el embarcadero de Kilim. El recorrido dura unas horas.",
        quando: "Por la mañana.",
        tempo: "medio día",
        consiglio: "Preguntar antes si el operador da de comer a las águilas: es una práctica discutible."
      },
      {
        nome: "Pantai Cenang",
        testo: "Una playa equipada, con bares, restaurantes y tiendas. Mar a menudo turbio, pero con una bonita puesta de sol.",
        come: "En scooter o taxi desde el aeropuerto, que está cerca.",
        quando: "El atardecer.",
        tempo: "2 horas",
        consiglio: "Quien busque el mar turquesa debe ir a las Perhentian: aquí hay vida de playa."
      }
    ],
    programmi: [
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Sky Bridge a la apertura, almuerzo, Pantai Cenang al atardecer",
          "Día 2: manglares de Kilim por la mañana, paseo entre las islas por la tarde"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Como los 2 días, con un tercer día libre: playas del norte, paseo en scooter entre arrozales, atardecer en Tanjung Rhu"
        ]
      }
    ],
    zone: [
      {
        nome: "Pantai Cenang",
        perChi: "quien quiere playa, bares y cenar fuera",
        testo: "La zona más animada, con mucha oferta. Ruidosa y concurrida."
      },
      {
        nome: "Pantai Tengah",
        perChi: "quien busca algo de calma",
        testo: "Junto a Cenang, más tranquila, con resorts y casas de huéspedes."
      },
      {
        nome: "Kuah",
        perChi: "quien llega en ferri o quiere ahorrar",
        testo: "La capital, con el puerto y los precios más bajos, pero lejos de las playas."
      }
    ],
    sapori: [
      {
        nome: "Pescado a la parrilla",
        testo: "Pescado fresco a la brasa con sambal, en los restaurantes junto al mar."
      },
      {
        nome: "Laksa de Langkawi",
        testo: "Fideos en caldo de pescado especiado. Se encuentra en puestos callejeros."
      },
      {
        nome: "Nasi lemak",
        testo: "Arroz con coco, anchoas fritas, huevo y sambal. El desayuno nacional."
      }
    ],
    attenzioni: [
      "Mar a menudo turbio: quien busque agua turquesa se decepciona, mejor centrarse en los manglares y las excursiones.",
      "Scooter: carné internacional y casco, los controles existen.",
      "Águilas y monos en los manglares: no darles de comer y preguntar al operador si lo hace.",
      "En los meses secos puede llegar la bruma de los incendios de Indonesia: consultar las noticias."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'El Sky Bridge de Langkawi suspendido entre las montañas cubiertas de selva',
    immagine: '/images/malesia/langkawi.jpg',
  },
  {
    slug: 'perhentian',
    paeseSlug: 'malesia',
    ordine: 7,
    nome: 'Islas Perhentian',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    introduzione:
      "Dos islas en la costa este, en el mar de China Meridional: arena blanca, agua turquesa de verdad, tortugas que se encuentran haciendo snorkeling desde la orilla y ninguna carretera, porque no hay vehículos. Cierran casi por completo cuando llega el monzón del noreste, entre finales y principios de año.",
    percheAndarci:
      "Son la respuesta a la pregunta de dónde está el mar bonito en Malasia (en la costa este, no en la oeste), y el desarrollo todavía es bajo: se duerme en chalets, se come en la playa y por la noche la electricidad en algunos sitios va con generador.",
    cosaVedere: [
      'Perhentian Besar, la más grande, más tranquila y con las mejores playas',
      'Perhentian Kecil, la pequeña, con Long Beach y la vida nocturna',
      'Los arrecifes accesibles haciendo snorkeling',
      'Las calas accesibles solo por mar',
    ],
    cosaFare: [
      'Snorkeling con las tortugas, que aquí se ven partiendo desde la playa sin barca ni guía',
      'Curso o inmersiones: las Perhentian son un sitio económico para sacarse una titulación',
      'Paseo en barca alrededor de las dos islas con paradas en los puntos de snorkeling',
      'Recorrer el sendero por la selva entre las playas, la única conexión por tierra',
    ],
    doveDormire:
      "Besar para las familias y quien busca calma, Kecil y Long Beach para el ritmo más social y los precios bajos. Los alojamientos son sencillos: chalets de madera, aire acondicionado no siempre, y en algunos establecimientos la electricidad funciona por franjas horarias.",
    doveMangiare:
      "Se come en los restaurantes de los chalets y en las barbacoas nocturnas en la playa, donde el pescado se expone sobre hielo y se asa al momento: es la cena típica y cuesta poco. La oferta es limitada y repetitiva (nasi goreng, mie goreng, pescado, curry) y hay que aceptarla como parte del paquete. Hay que saber que estamos en un estado conservador, el alcohol se encuentra poco y es caro, y algunos establecimientos no lo sirven en absoluto.",
    comeArrivare:
      "Vuelo a Kota Bharu o autobús nocturno desde Kuala Lumpur hasta Kuala Besut, luego speedboat. La travesía es rápida pero movida: quien se marea en el mar lo nota.",
    comeSpostarsi: 'Solo a pie y en water taxi: en las islas no hay carreteras ni vehículos. Los traslados entre playas se hacen en barca, por pocos ringgit.',
    periodoMigliore:
      "los meses fuera del monzón, en la parte central del año. **Entre finales y principios de año las islas cierran casi por completo** por el monzón del noreste: los establecimientos echan el cierre y los ferris se detienen. Es un cierre de verdad, más que una temporada baja.",
    costi:
      "chalets sencillos a precios bajos, lancha rápida de ida y vuelta desde Kuala Besut; inmersiones a precios bajos.",
    erroriDaEvitare: [
      "Programarlas durante el monzón del noreste: están cerradas, y es el error que echa a perder itinerarios enteros",
      "Contar con los pagos con tarjeta: en las islas se funciona casi solo con efectivo y los cajeros son poquísimos y a menudo están vacíos: se saca dinero en tierra firme",
      "Esperar resorts y servicios: aquí se duerme en chalets y la corriente puede ir por horarios",
      "Subestimar el código social de Terengganu: es un estado conservador, y fuera de las playas la ropa que cubre es la norma esperada",
    ],
    miaEsperienza:
      "Por las Perhentian vale la pena reorganizar un itinerario en Malasia: es la única costa donde el mar es el de las fotografías, turquesa y transparente, y basta entrar en el agua desde la playa para cruzarse con una tortuga que ramonea en el fondo sin darle importancia. Es también un lugar que se ha quedado atrás a propósito: chalets de madera, ventilador en lugar de aire acondicionado, electricidad por franjas, ningún cajero que funcione y cenas que a los tres días se repiten. Quien lo sabe de antemano lo disfruta, quien espera un resort no. Lo que hay que poner en la agenda antes que nada es el calendario: de noviembre a febrero el monzón del noreste cierra las islas, los ferris se detienen y los establecimientos echan el cierre. Más que temporada baja, está cerrado: es el error que hace saltar más itinerarios malasios que cualquier otro.",
    luoghi: [
      {
        nome: "Perhentian Besar",
        testo: "La isla grande, más tranquila, con las mejores playas y menos locales nocturnos. El sitio para quien quiere mar y silencio.",
        come: "En lancha rápida desde el muelle de Kuala Besut.",
        quando: "En los meses fuera del monzón. Con el monzón del noreste casi todos los resorts y ferris paran.",
        tempo: "al menos 2 noches",
        consiglio: "Reservar chalé y barca con antelación en temporada alta."
      },
      {
        nome: "Perhentian Kecil y Long Beach",
        testo: "La isla pequeña, con la playa más animada (Long Beach), bares en la arena y vida nocturna. Al otro lado, Coral Bay, más tranquila.",
        come: "Lancha rápida desde Kuala Besut; entre playas con taxi acuático.",
        quando: "En los meses fuera del monzón.",
        tempo: "al menos 2 noches",
        consiglio: "Quien busque silencio debe ir a Coral Bay o a Besar."
      },
      {
        nome: "Snorkel en el arrecife",
        testo: "Puntos de snorkel donde se pueden encontrar tiburones de punta negra y tortugas. En algunos puntos se entra directamente desde la playa.",
        come: "En barca con los operadores de snorkel, medio día.",
        quando: "Por la mañana, con el agua más clara.",
        tempo: "medio día",
        consiglio: "No tocar ni perseguir a las tortugas: se miran sin acercarse."
      },
      {
        nome: "Calas solo por mar",
        testo: "Calas accesibles solo en barca o por senderos cortos, con agua transparente y poquísima gente.",
        come: "Con taxi acuático desde Kecil, o a pie por el bosque con sendero señalizado.",
        quando: "Por la mañana.",
        tempo: "medio día",
        consiglio: "Llevar efectivo para el taxi acuático: en las islas los cajeros son muy pocos."
      }
    ],
    programmi: [
      {
        titolo: "3 días",
        tappe: [
          "Día 1: llegada, chalé, playa y atardecer",
          "Día 2: salida de snorkel por el arrecife",
          "Día 3: calas solo por mar y regreso en barca"
        ]
      },
      {
        titolo: "4 días",
        tappe: [
          "Como los 3 días, con el cuarto para una inmersión o un día libre en la playa"
        ]
      }
    ],
    zone: [
      {
        nome: "Long Beach (Kecil)",
        perChi: "quien quiere vida nocturna y comodidad",
        testo: "Chalés sencillos, bares, restaurantes, centros de buceo. Más ruidosa."
      },
      {
        nome: "Coral Bay (Kecil)",
        perChi: "quien quiere atardeceres y algo de calma",
        testo: "En el lado oeste de Kecil, con bares en la playa y poca gente."
      },
      {
        nome: "Perhentian Besar",
        perChi: "quien quiere el mejor mar y silencio",
        testo: "Pocos resorts y chalés, algunos restaurantes. Electricidad a ciertas horas."
      }
    ],
    sapori: [
      {
        nome: "Pescado a la parrilla",
        testo: "Pesca del día a la brasa con arroz y verduras, en pequeños restaurantes en la playa."
      },
      {
        nome: "Nasi goreng",
        testo: "Arroz salteado con huevo y verduras. Casi siempre disponible."
      },
      {
        nome: "Roti canai",
        testo: "Pan plano servido con curry. Un desayuno básico."
      },
      {
        nome: "Fruta fresca y agua de coco",
        testo: "Coco y fruta tropical, vendidos en la playa."
      }
    ],
    attenzioni: [
      "Con el monzón del noreste, entre finales y principios de año, casi todos los resorts y ferris cierran: comprobar las fechas antes de reservar.",
      "Efectivo: pocos cajeros y a menudo vacíos, retirar en el continente.",
      "Terengganu es un estado conservador: lejos de las playas, vestir ropa cubierta.",
      "Electricidad a ciertas horas y sin aire acondicionado en muchos chalés."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Una playa de arena blanca y mar turquesa a los pies de la selva en Perhentian Kecil',
    immagine: '/images/malesia/perhentian.jpg',
  },
]
