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
      "Una capital que pasó de ser un campamento de buscadores de estaño a una ciudad de rascacielos en poco más de un siglo, donde una mezquita, un templo hindú y un templo chino pueden estar en la misma manzana y donde la institución cívica es la comida callejera.",
    percheAndarci:
      "Es la forma más rápida de entender cómo funciona Malasia: tres comunidades viven en la misma ciudad con lenguas, religiones y cocinas separadas, y se encuentran en los food courts. Y es un excelente hub aéreo, del que parte todo el resto del viaje.",
    cosaVedere: [
      'Las Torres Petronas, con el skybridge y la plataforma panorámica',
      'Las Cuevas Batu, con la estatua dorada de Murugan de 42 metros de altura y los 272 escalones de colores',
      'La mezquita Masjid Jamek, en la confluencia de los dos ríos de los que la ciudad toma su nombre',
      'El barrio de Chinatown alrededor de Petaling Street y el templo Sri Mahamariamman',
      'El Museo de Artes Islámicas, uno de los mejores del mundo en su género y casi siempre vacío',
      'El mercado nocturno de Jalan Alor, donde se cena al aire libre entre decenas de cocinas',
    ],
    cosaFare: [
      'Subir a las Cuevas Batu temprano por la mañana, antes del calor y de los grupos (hay una ficha de experiencia dedicada)',
      'Cenar en Jalan Alor, la forma correcta de pasar la primera noche',
      'Recorrer los barrios a pie: Chinatown, Little India en Brickfields, Kampung Baru',
      'Pasear por la pasarela de copas del parque forestal de Bukit Nanas, selva pluvial primaria que queda en pleno centro de la ciudad',
    ],
    doveDormire:
      "Bukit Bintang por la comodidad y la vida nocturna, Chinatown por los precios bajos y el carácter, KLCC por la cercanía a las torres y a los centros comerciales. La ciudad es grande y caótica: conviene estar cerca de una estación de monorraíl o de metro.",
    doveMangiare:
      "Kuala Lumpur es una de las ciudades donde mejor se come en Asia, y la forma de hacerlo es una sola: los food courts y los puestos callejeros, olvidándose de los restaurantes. Hay que probar el nasi lemak (arroz al coco con sambal, anchoas secas, cacahuetes y huevo: es el plato nacional y se come en el desayuno), el char kway teow, el roti canai indio por la mañana con dahl, el laksa y el satay a la brasa. Jalan Alor por la noche es la versión más escenográfica; los food courts de los centros comerciales, con aire acondicionado, son buenos y cuestan nada.",
    comeArrivare:
      "Vuelo a Kuala Lumpur International (KUL), gran hub regional, con el KLIA Ekspres que lleva al centro en 28 minutos. La terminal 2 sirve los vuelos low cost, incluidos los de Borneo.",
    comeSpostarsi:
      "Metro, monorraíl y LRT cubren bien el centro, con la Touch 'n Go o el billete sencillo. Grab es barato y resuelve todo lo demás. Caminar es posible pero cansado: aceras discontinuas, calor y humedad.",
    periodoMigliore:
      "todo el año, con chubascos por la tarde en cualquier estación. Las lluvias más insistentes se concentran entre octubre y diciembre y en abril.",
    costi:
      "Skybridge de las Petronas alrededor de 80 ringgit, Cuevas Batu gratis (de pago solo la Dark Cave cuando es accesible), Museo de Artes Islámicas unos 20 ringgit. Los transportes cuestan pocos ringgit.",
    erroriDaEvitare: [
      "Subir a las Cuevas Batu a mediodía: 272 escalones bajo el sol ecuatorial, con los monos que roban todo lo que se lleva en la mano",
      "Vestirse demasiado destapado para visitar templos y mezquitas: en las Cuevas Batu y en la Masjid Negara hacen falta hombros y rodillas cubiertos, y los sarongs prestados a la entrada solo lo resuelven en parte",
      "Juzgar la ciudad por los centros comerciales de Bukit Bintang: lo que vale está en los barrios, a pie",
      "Contar con las tarjetas en los puestos callejeros: ahí hace falta efectivo",
    ],
    miaEsperienza:
      "Casi todos usan Kuala Lumpur como escala, y sin embargo aguanta dos días completos, a condición de recorrerla por barrios más que por monumentos. Las Petronas se miran desde abajo en la hora azul y está bien así: la subida al skybridge cuesta y devuelve menos de lo que promete. Las Cuevas Batu hay que hacerlas a las siete de la mañana, cuando los escalones de colores todavía están a la sombra y los fieles suben a rezar: dos horas después es una escalinata abrasadora con cientos de personas y los monos arrancando las botellas de las manos. El recuerdo que queda, sin embargo, es más sencillo: la noche en Jalan Alor, sentados en taburetes de plástico en medio de la calle, con una cocina china a la derecha, una malaya a la izquierda y un puesto indio enfrente. Es ahí donde se entiende de qué país se está hablando.",
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
      "Una isla en el estrecho de Malaca con George Town en el centro, antiguo puerto franco británico y hoy Patrimonio de la Humanidad de la UNESCO: shophouses chinas, mezquitas, templos, casas-clan sobre el agua y la que casi todos los malayos consideran sin discusión la mejor cocina callejera del país.",
    percheAndarci:
      "Por la comida, que aquí basta por sí sola para justificar el viaje, y porque George Town es la ciudad donde los estratos culturales de Malasia mejor se leen: cuatro comunidades en cuatro manzanas, cada una con su propia arquitectura religiosa, todas llegadas por mar.",
    cosaVedere: [
      'El casco histórico UNESCO de George Town, con las shophouses peranakan',
      'Los Clan Jetties, los poblados sobre pilotes de las familias chinas, cada uno de un clan distinto',
      'El templo Kek Lok Si, el complejo budista más grande de Malasia, en la colina de Air Itam',
      'La Blue Mansion de Cheong Fatt Tze y la Pinang Peranakan Mansion',
      'La Street of Harmony, donde mezquita, templo chino, templo hindú e iglesia anglicana están en la misma calle',
      'Los murales del centro, que han hecho famosa a George Town mucho más allá de su perímetro',
    ],
    cosaFare: [
      'Comer en los puestos callejeros, el motivo por el que se viene aquí (hay una ficha de experiencia dedicada)',
      'Recorrer el casco histórico a pie siguiendo los murales y las instalaciones de hierro forjado',
      'Subir a Penang Hill en funicular para ver la isla y respirar aire fresco',
      'Excursión al Penang National Park, el parque nacional más pequeño del mundo, hasta Monkey Beach',
    ],
    doveDormire:
      "Dentro del perímetro UNESCO de George Town, a ser posible en una shophouse restaurada: se recorre todo a pie y es la única forma de ver la ciudad por la noche. Batu Ferringhi es la zona de las playas y los resorts, pero está al otro lado de la isla y deja fuera la mejor parte.",
    doveMangiare:
      "Es la razón del viaje. Para probar por orden: el assam laksa, la sopa ácida de pescado y tamarindo que es el plato símbolo de la isla; el char kway teow salteado en el wok a fuego vivo; el cendol, el postre helado con leche de coco y azúcar de palma; el nasi kandar indio-musulmán, con los currys vertidos unos sobre otros sobre el arroz; y el rojak, ensalada de frutas salada con salsa de gambas fermentadas. Se come en los coffee shops y en los food courts más que en los restaurantes, y los mejores puestos tienen horarios propios: algunos abren solo por la mañana, otros solo después de la puesta de sol.",
    comeArrivare:
      "Vuelo a Penang (PEN) desde Kuala Lumpur o desde el extranjero, o tren ETS hasta Butterworth y ferri, que es la forma más bonita de llegar. En autobús desde Kuala Lumpur son unas 5 horas.",
    comeSpostarsi: 'George Town se recorre a pie; para el resto de la isla autobuses públicos económicos y Grab.',
    periodoMigliore:
      "de diciembre a marzo, la estación más seca de la costa oeste. A finales de junio se celebra el George Town Festival y en julio el festival de la comida: ambos excelentes motivos para estar, pero la ciudad se llena.",
    costi:
      "La ciudad en sí es casi toda gratuita: el casco histórico se camina, los murales no se pagan. Kek Lok Si ofrece entrada libre con contribución para el funicular de la pagoda; Penang Hill unos 30 ringgit ida y vuelta.",
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
          "Son las dos ciudades del Estrecho inscritas juntas en la lista UNESCO en 2008, tienen la misma historia (puertos coloniales con comunidades china, india y malaya) y a menudo se ponen como alternativa cuando hay poco tiempo. Se parecen menos de lo que parece.",
        opzioni: [
          {
            nome: 'George Town (Penang)',
            sintesi: "La más grande, la más viva y la capital gastronómica del país, en una isla con también montaña, parque nacional y playas.",
            costo: 'la ciudad es casi toda gratuita; vuelo o 5 horas de autobús desde KL',
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
            sintesi: "Más pequeña y más antigua, con la estratificación portuguesa, holandesa y británica visible en pocas manzanas, a dos horas de Kuala Lumpur.",
            costo: 'autobús desde KL unas 2 horas, pocos euros',
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
      "El puerto que durante siglos controló el estrecho más estratégico de Asia, conquistado por los portugueses en 1511, luego por los holandeses y por fin por los británicos: tres dominaciones europeas superpuestas en pocas manzanas, más la cultura peranakan nacida de los matrimonios entre comerciantes chinos y mujeres malayas.",
    percheAndarci:
      "Aquí la historia colonial del sudeste asiático se lee caminando (la iglesia portuguesa en ruinas, la plaza holandesa roja, el fuerte), y la ciudad está a medio camino entre Kuala Lumpur y Singapur.",
    cosaVedere: [
      'La Dutch Square con la Christ Church y el Stadthuys, el ayuntamiento holandés de 1650',
      'Las ruinas de la iglesia de St. Paul en lo alto de la colina, con vistas al estrecho',
      'La Porta de Santiago, lo que queda de la fortaleza portuguesa A Famosa',
      'Jonker Street, la calle principal de Chinatown, con el mercado nocturno del fin de semana',
      'El Baba & Nyonya Heritage Museum, una casa peranakan conservada con el mobiliario original',
      'La Kampung Kling Mosque y el Cheng Hoon Teng, el templo chino más antiguo de Malasia',
    ],
    cosaFare: [
      'Caminar el casco histórico UNESCO, que se recorre entero a pie en media jornada',
      'Cenar peranakan, la cocina nacida del encuentro entre chinos y malayos y que existe casi solo aquí y en Penang',
      'Mercado nocturno de Jonker Street el viernes, sábado o domingo por la noche',
      'Paseo en barca por el río al atardecer, con los murales en las orillas',
    ],
    doveDormire:
      "Dentro del casco histórico, mejor por el lado de Chinatown: por la noche, cuando los autocares de los visitantes de un día se han ido, el barrio cambia por completo, y esa es la razón para quedarse a dormir.",
    doveMangiare:
      "La cocina que hay que buscar es la peranakan o nyonya: el ayam pongteh, el pollo estofado con salsa de soja fermentada, y el laksa nyonya, con leche de coco, que es distinto del de Penang. La especialidad popular es en cambio el chicken rice ball, el pollo con el arroz servido en bolas compactas, nacido aquí. Para probar también el cendol de Malaca, rico en azúcar de palma, y los satay celup, las brochetas que cuecen los propios clientes en una olla de salsa de cacahuete hirviendo en el centro de la mesa.",
    comeArrivare:
      "Autobús desde Kuala Lumpur, unas 2 horas, con salidas continuas desde la terminal TBS. De Malaca a Singapur hay autobuses directos en 4-5 horas, frontera incluida: es la razón por la que esta ciudad está en medio de casi todos los itinerarios.",
    comeSpostarsi: 'El casco histórico se recorre a pie. Para la estación de autobuses, que está fuera de la ciudad, hacen falta un autobús local o Grab.',
    periodoMigliore: 'de diciembre a marzo. El mercado nocturno de Jonker Street solo existe el fin de semana, lo que condiciona la elección de los días.',
    costi: 'Baba & Nyonya Heritage Museum unos 25 ringgit, St. Paul y la Porta de Santiago gratis, paseo en barca por el río alrededor de 30.',
    erroriDaEvitare: [
      "Ir en fin de semana esperando tranquilidad: de viernes a domingo Malaca es uno de los destinos nacionales más concurridos de Malasia",
      "Hacerla en el día desde Kuala Lumpur: se ve solo en las peores horas y se pierde la noche, que es el momento en que la ciudad funciona",
      "Subir a los trishaws decorados con luces y música a todo volumen esperando un paseo romántico: son una atracción kitsch, lo cual está muy bien si se sabe de antemano",
    ],
    miaEsperienza:
      "Malaca es una parada breve que rinde mucho más de lo que promete, con una condición: dormir allí. De día, sobre todo en fin de semana, el centro es un flujo continuo de visitantes de un día desde Kuala Lumpur y Singapur, con los trishaws decorados con luces LED que pasan a todo volumen: un nivel de kitsch que a la segunda vez resulta divertido. Por la noche, cuando los autocares se van, quedan las callejuelas de Chinatown, las casas peranakan con las puertas abiertas y el río iluminado. La colina de St. Paul, con la iglesia portuguesa sin techo y las lápidas holandesas apoyadas en las paredes, es el sitio donde los estratos de esta ciudad se entienden en dos minutos. Y la cocina nyonya, nacida del encuentro entre comerciantes chinos y mujeres malayas, es una de las cosas más interesantes que comí en todo el país.",
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
      "La meseta a 1.500 metros donde los británicos se refugiaban del calor: plantaciones de té hasta donde alcanza la vista, invernaderos de fresas, selva de musgo y un clima que por la noche baja de los quince grados. Es el único lugar de la península donde hace falta una sudadera.",
    percheAndarci:
      "Tras unos días de calor ecuatorial el alivio físico se nota, y las plantaciones de té que bajan en ondas por las colinas son uno de los paisajes más fotografiados del país. La mossy forest, el bosque de musgo de altura, es otra cosa completamente distinta.",
    cosaVedere: [
      'Las plantaciones de té de Sungai Palas y Bharat, con las terrazas verdes que siguen las colinas',
      'La mossy forest en el Gunung Brinchang, un bosque de altura cubierto de musgo y helechos, que se recorre por una pasarela',
      'Las granjas de fresas y los invernaderos, que son el segundo producto local',
      'El Time Tunnel Museum en Brinchang, para la historia colonial de la meseta',
      'El mercado de Brinchang, con los productos de la meseta',
    ],
    cosaFare: [
      'Visita a una plantación con degustación y vistas a las terrazas (hay una ficha de experiencia dedicada)',
      'Paseo por la mossy forest por la mañana, cuando la niebla todavía está entre los árboles',
      'Uno de los senderos numerados de la zona, del fácil al bastante exigente',
      'Buscar la rafflesia, la flor más grande del mundo, con un guía local: florece por períodos y no está garantizada',
    ],
    doveDormire:
      "Tanah Rata es el pueblo más cómodo y tiene la oferta más amplia; Brinchang está más cerca de las plantaciones pero es más anónimo. Las habitaciones raramente tienen calefacción: por la noche hace frío en serio y las mantas cuentan más que las estrellas.",
    doveMangiare:
      "La meseta tiene una identidad gastronómica propia ligada al clima: el steamboat, la olla de caldo hirviendo en el centro de la mesa en la que se cuecen verduras y carne, es lo que come todo el mundo por la noche porque hace frío, y es lo correcto. Por lo demás, té y scones en los salones de té de las plantaciones (una herencia colonial que aquí no es una pose) y las fresas en todas las formas posibles, incluidas las que sería mejor evitar.",
    comeArrivare:
      "Autobús desde Kuala Lumpur (unas 4 horas) o desde Penang e Ipoh. El último tramo es una carretera de montaña con cientos de curvas: quien se marea en coche lo nota, y no es un detalle menor en cuatro horas de viaje.",
    comeSpostarsi:
      "Las distancias entre los puntos de interés son incómodas a pie y el transporte público es escaso: casi todos se apuntan a un tour de media jornada o toman un taxi para el día. Grab funciona a trompicones.",
    periodoMigliore:
      "todo el año, con temperaturas estables de 15-22 grados. Las lluvias son frecuentes por la tarde en cualquier estación: las salidas hay que programarlas por la mañana.",
    costi: 'entrada a las plantaciones gratuita o simbólica; tour de media jornada alrededor de 40-60 ringgit.',
    erroriDaEvitare: [
      "Ir en fin de semana o durante las vacaciones escolares malasias: la meseta es el destino nacional por excelencia y las carreteras de curvas se convierten en una cola",
      "No llevar nada de abrigo: aquí, único lugar del viaje, por la noche se hiela",
      "Reservar los tours más baratos para la mossy forest, que a menudo llevan solo a la pasarela abarrotada cerca de la torre en lugar de a la parte de verdad",
      "Esperar paisajes vírgenes: la meseta está muy cultivada y en algunas zonas los invernaderos de plástico se han comido la vista",
    ],
    miaEsperienza:
      "Las Cameron Highlands funcionan sobre todo por contraste: llegamos tras días de calor húmedo y por la noche dormimos bajo una manta, que a esas alturas parecía un lujo. Las plantaciones de té son bonitas, con las terrazas verdes que bajan en ondas, y el salón de té asomado a las colinas es una de esas cosas coloniales que aquí no desentonan. La mossy forest es la parte que más sorprende (un bosque enano a 2.000 metros todo cubierto de musgo, con la niebla entre las ramas) y a la vez aquella en la que conviene ser práctico: hay dos mossy forest, la de verdad y la pasarela turística junto al aparcamiento de la torre, y los tours más baratos llevan solo a la segunda. Está también el reverso de la medalla: la meseta es agrícola y en algunos tramos los invernaderos de plástico cubren laderas enteras. Es una zona cultivada con partes muy bonitas dentro, no un parque nacional.",
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
      "Una de las selvas pluviales más antiguas del planeta (se calcula alrededor de 130 millones de años, ininterrumpida incluso durante las glaciaciones), en el corazón de la península malaya. Se llega en barca por el río, y eso ya dice mucho de qué esperar.",
    percheAndarci:
      "Es selva de verdad, accesible en media jornada desde Kuala Lumpur, y la pasarela de copas suspendida entre los árboles es una de las pocas formas de ver una selva pluvial desde arriba en lugar de desde abajo, donde casi no se ve nada.",
    cosaVedere: [
      'La canopy walkway, una de las más largas del mundo, suspendida a 40 metros entre los árboles',
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
      "Unas 3-4 horas de minibús desde Kuala Lumpur hasta Kuala Tembeling o directamente a Jerantut, luego barca larga por el río Tembeling: la travesía dura unas 2-3 horas y es la parte más bonita del traslado. Muchos operadores ofrecen el paquete combinado desde la capital.",
    comeSpostarsi: 'A pie en el parque y en barca por el río: no hay carreteras. Para cruzar de Kuala Tahan a la entrada hay barquitas de remos continuas por pocos ringgit.',
    periodoMigliore:
      "de febrero a septiembre, la ventana más seca. De noviembre a enero las lluvias son fuertes y algunas actividades se suspenden; el nivel del río condiciona las remontadas en barca.",
    costi: 'entrada al parque pocos ringgit más el permiso para la cámara; canopy walkway unos 5 ringgit; las excursiones guiadas 50-150 ringgit según la duración.',
    erroriDaEvitare: [
      "Esperar ver tigres, elefantes o tapires: existen, pero los avistamientos son rarísimos y quien llega con esa idea vuelve decepcionado. Aquí se oye más de lo que se ve",
      "Ir sin calcetines antisanguijuelas en la estación húmeda: las sanguijuelas terrestres son numerosas y llegan desde abajo",
      "Hacer la canopy walkway a mediodía, cuando hay cola en las pasarelas y se pasa de uno en uno",
      "Subestimar la night walk: es el momento en que la selva se anima, y casi todos se la saltan por cansancio",
    ],
    miaEsperienza:
      "Taman Negara hay que afrontarla con la expectativa correcta, porque es la parada que decepciona a quien llega pensando en un documental. La selva pluvial es densísima y de lado se ve a pocos metros: se oyen cigarras, gibones lejanos, pájaros, pero de animales grandes casi no se ve nada. Lo que la hace memorable son la travesía en barca larga para llegar, dos horas y media a contracorriente entre dos muros de verde, y la canopy walkway, la única forma de mirar la selva desde arriba y entender su estructura por estratos. Hay que hacerla a la apertura, porque más tarde se pasa de uno en uno con la cola detrás. La night walk es la parte que casi todos se saltan, y es la que vale: con la linterna se ven arañas, serpientes, ojos que reflejan en la oscuridad, y la selva de día silenciosa se vuelve ruidosísima. Una última cosa práctica: las sanguijuelas existen y suben por los pies, y los calcetines específicos no son un exceso de celo.",
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
      "Un archipiélago de noventa y nueve islas en el norte del estrecho de Malaca, pegado a la frontera tailandesa: playas, manglares, un geoparque UNESCO de formaciones calizas y el teleférico más empinado del mundo, que sube a una cresta con un puente colgante en curva.",
    percheAndarci:
      "Es la mejor isla de la costa oeste accesible sin complicaciones, funciona también en la estación en que las Perhentian cierran, y el paseo en barca entre los manglares muestra una Malasia distinta de la de las playas.",
    cosaVedere: [
      'El Sky Bridge, el puente peatonal curvo suspendido a 660 metros, al que se llega con el teleférico de Machinchang',
      'El geoparque de los manglares de Kilim, con las formaciones calizas y las cuevas',
      'Las cascadas de Telaga Tujuh, las siete pozas naturales en sucesión',
      'La playa de Pantai Cenang, la más equipada, y las más tranquilas del norte',
      'La isla de Dayang Bunting, con su lago de agua dulce a pocos metros del mar',
    ],
    cosaFare: [
      'Paseo en barca por los manglares de Kilim, con las águilas marinas y las cuevas calizas',
      'Teleférico y Sky Bridge, mejor por la mañana antes de que llegue la bruma',
      'Island hopping hacia Dayang Bunting y Beras Basah',
      'Aprovechar el duty free: Langkawi es zona franca y el alcohol cuesta una fracción de lo que cuesta en el resto de Malasia',
    ],
    doveDormire:
      "Pantai Cenang por servicios, restaurantes y vida nocturna; la costa norte alrededor de Datai y Tanjung Rhu por los resorts y la verdadera tranquilidad; Kuah por los precios bajos y la cercanía al puerto, pero sin playa digna.",
    doveMangiare:
      "La isla vive del turismo y los precios lo reflejan, pero bastan pocos metros de la playa para volver a los estándares malasios: los puestos del mercado nocturno, que rota de pueblo en pueblo según el día de la semana, son la mejor opción y la más económica. El pescado a la parrilla y los currys de pescado son la cocina natural del lugar. Y, al ser zona franca, es el único lugar de Malasia donde beber cuesta poco.",
    comeArrivare:
      "Vuelo a Langkawi (LGK) desde Kuala Lumpur o Penang, o ferri desde Kuala Kedah, Penang o Satun en Tailandia, útil para quien combina los dos países.",
    comeSpostarsi:
      "Coche o moto de alquiler son el medio adecuado: la isla es grande, el transporte público casi inexistente y los taxis caros respecto al resto del país. Conducir es sencillo y las carreteras son buenas.",
    periodoMigliore:
      "de noviembre a abril, la estación seca de la costa oeste, con el mar más en calma. De mayo a octubre las lluvias son más frecuentes y en agosto-septiembre puede llegar la bruma de incendios de Indonesia.",
    costi: 'teleférico y Sky Bridge alrededor de 85 ringgit, paseo por los manglares 250-350 ringgit por barca a repartir, alquiler de moto pocos euros al día.',
    erroriDaEvitare: [
      "Esperar aguas de postal tailandesa: el mar de Langkawi suele estar turbio porque estamos en la desembocadura de sistemas fluviales, y quien busca el turquesa se queda decepcionado",
      "Subir al teleférico a primera hora de la tarde, cuando la bruma tapa la vista y la cola es larga",
      "Alquilar la moto sin carné internacional y sin casco: los controles existen",
      "Tratar el paseo por los manglares como una excursión en barca: los guías que dan de comer a las águilas para atraerlas practican algo discutible, y hay que preguntar de antemano si el operador lo hace",
    ],
    miaEsperienza:
      "Langkawi es la isla cómoda de Malasia y hay que tomarla por lo que es: se llega en avión, se alquila una moto y se recorre libremente. Con el mar hay que bajar las expectativas. El agua suele ser verdosa y turbia, porque estamos en el estrecho y los ríos desembocan allí: quien busca el turquesa de las postales está mirando la costa equivocada de Malasia. Por sorpresa, lo que da sentido a la parada es la parte no playera: el paseo entre los manglares de Kilim, con las paredes calizas que se cierran sobre la barca, las cuevas de murciélagos y los cangrejos en el fango, es más interesante que cualquier playa de la isla. El Sky Bridge merece la subida a condición de hacerla pronto: hacia mediodía la bruma se lo come todo y queda la cola. Y está el detalle práctico que nadie anticipa: Langkawi es puerto franco, así que el alcohol cuesta un tercio que en el resto del país, y se nota enseguida cómo cambia el ambiente nocturno respecto al resto de Malasia.",
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
      "Dos islas en la costa este, en el mar de China Meridional: arena blanca, agua turquesa de verdad, tortugas que se encuentran haciendo snorkeling desde la orilla y ninguna carretera, porque no hay vehículos. Cierran de noviembre a febrero, cuando llega el monzón.",
    percheAndarci:
      "Son la respuesta a la pregunta de dónde está el mar bonito en Malasia (en la costa este, no en la oeste), y el desarrollo todavía es bajo: se duerme en chalets, se come en la playa y por la noche la electricidad en algunos sitios va con generador.",
    cosaVedere: [
      'Perhentian Besar, la más grande, más tranquila y con las mejores playas',
      'Perhentian Kecil, la pequeña, con Long Beach y la vida nocturna',
      'El arrecife alrededor de Shark Point y Turtle Point, accesibles haciendo snorkeling',
      'La laguna de Romantic Beach y las calas accesibles solo por mar',
    ],
    cosaFare: [
      'Snorkeling con las tortugas, que aquí se ven partiendo desde la playa sin barca ni guía',
      'Curso o inmersiones: las Perhentian están entre los sitios más económicos del mundo para sacarse una titulación',
      'Paseo en barca alrededor de las dos islas con paradas en los puntos de snorkeling',
      'Recorrer el sendero por la selva entre las playas, la única conexión por tierra',
    ],
    doveDormire:
      "Besar para las familias y quien busca calma, Kecil y Long Beach para el ritmo más social y los precios bajos. Los alojamientos son sencillos: chalets de madera, aire acondicionado no siempre, y en algunos establecimientos la electricidad funciona por franjas horarias.",
    doveMangiare:
      "Se come en los restaurantes de los chalets y en las barbacoas nocturnas en la playa, donde el pescado se expone sobre hielo y se asa al momento: es la cena típica y cuesta poco. La oferta es limitada y repetitiva (nasi goreng, mie goreng, pescado, curry) y hay que aceptarla como parte del paquete. Hay que saber que estamos en un estado conservador, el alcohol se encuentra poco y es caro, y algunos establecimientos no lo sirven en absoluto.",
    comeArrivare:
      "Vuelo a Kota Bharu o autobús nocturno desde Kuala Lumpur hasta Kuala Besut, luego speedboat de unos 30-40 minutos. La travesía es rápida pero movida: quien se marea en el mar lo nota.",
    comeSpostarsi: 'Solo a pie y en water taxi: en las islas no hay carreteras ni vehículos. Los traslados entre playas se hacen en barca, por pocos ringgit.',
    periodoMigliore:
      "de marzo a octubre, con los mejores meses de abril a septiembre. **De noviembre a febrero las islas cierran casi por completo** por el monzón del noreste: los establecimientos echan el cierre y los ferris se detienen. Es un cierre de verdad, más que una temporada baja.",
    costi:
      "chalets sencillos desde 25-50 € la noche, speedboat ida y vuelta alrededor de 70 ringgit más la tasa de conservación marina, inmersiones entre las más económicas del sudeste asiático.",
    erroriDaEvitare: [
      "Programarlas entre noviembre y febrero: están cerradas, y es el error que echa a perder itinerarios enteros",
      "Contar con los pagos con tarjeta: en las islas se funciona casi solo con efectivo y los cajeros son poquísimos y a menudo están vacíos: se saca dinero en tierra firme",
      "Esperar resorts y servicios: aquí se duerme en chalets y la corriente puede ir por horarios",
      "Subestimar el código social de Terengganu: es un estado conservador, y fuera de las playas la ropa que cubre es la norma esperada",
    ],
    miaEsperienza:
      "Por las Perhentian vale la pena reorganizar un itinerario en Malasia: es la única costa donde el mar es el de las fotografías, turquesa y transparente, y basta entrar en el agua desde la playa para cruzarse con una tortuga que ramonea en el fondo sin darle importancia. Es también un lugar que se ha quedado atrás a propósito: chalets de madera, ventilador en lugar de aire acondicionado, electricidad por franjas, ningún cajero que funcione y cenas que a los tres días se repiten. Quien lo sabe de antemano lo disfruta, quien espera un resort no. Lo que hay que poner en la agenda antes que nada es el calendario: de noviembre a febrero el monzón del noreste cierra las islas, los ferris se detienen y los establecimientos echan el cierre. Más que temporada baja, está cerrado: es el error que hace saltar más itinerarios malasios que cualquier otro.",
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Una playa de arena blanca y mar turquesa a los pies de la selva en Perhentian Kecil',
    immagine: '/images/malesia/perhentian.jpg',
  },
]
