import type { Destinazione } from '@/lib/types'

export const destinazioniGuatemala: Destinazione[] = [
  {
    slug: 'antigua-guatemala',
    paeseSlug: 'guatemala',
    ordine: 1,
    nome: 'Antigua Guatemala',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '2-3 días, más una noche extra si se hace el trekking al Acatenango',
    visitataPersonalmente: true,
    introduzione:
      'La antigua capital colonial, patrimonio de la UNESCO: calles empedradas, fachadas de colores pastel, ruinas de iglesias destruidas por los terremotos y, al fondo, tres volcanes, Agua, Fuego y Acatenango.',
    percheAndarci:
      'Es la base de casi cualquier viaje por Guatemala: está a una hora del aeropuerto de la capital, tiene shuttles a todas las demás paradas del país y de aquí salen los trekkings a los volcanes.',
    cosaVedere: [
      'El Arco de Santa Catalina, con el volcán de Agua enmarcado al fondo',
      'Las ruinas del Convento de Santa Clara y de la iglesia de La Merced',
      'El Cerro de la Cruz, mirador sobre la ciudad y los volcanes (subida corta, mejor en grupo o con la policía turística)',
      'El mercado municipal y el mercado de artesanía',
    ],
    cosaFare: [
      'Trekking de dos días al Acatenango para ver desde el campamento las erupciones del Fuego (ver la ficha de experiencia dedicada)',
      'Curso de cocina guatemalteca o de chocolate (ChocoMuseo y otras escuelas del centro)',
      'Subida al volcán Pacaya en media jornada, una opción más corta que el Acatenango',
      'Jornada en Chichicastenango el jueves o el domingo, para ver el mercado indígena más grande del país',
    ],
    doveDormire:
      'Los alojamientos están todos en el centro histórico, a pocas manzanas del Parque Central: de los hostales con terraza en la azotea a las casas coloniales convertidas en hoteles boutique.',
    doveMangiare:
      'Antigua tiene la cocina más internacional del país y es la única ciudad guatemalteca donde se gasta como en Europa sin darse cuenta. Para evitarlo está el mercado municipal a mediodía, donde el menú del día (sopa, plato, tortillas, bebida) cuesta pocos quetzales. Hay que probar el pepián, el guiso de carne con salsa de semillas tostadas que es el plato nacional, los rellenitos de plátano como dulce callejero y el café: Guatemala produce uno de los mejores del mundo, y aquí se bebe en las torrefacciones que lo tuestan en el local.',
    comeArrivare: 'Vuelo a Ciudad de Guatemala (GUA), luego aproximadamente 1 hora de shuttle o taxi privado hasta Antigua.',
    comeSpostarsi: 'El centro se recorre todo a pie; para las demás paradas del país hay shuttles turísticos, que se reservan en cualquier agencia del centro.',
    periodoMigliore: 'noviembre-abril; la Semana Santa (marzo-abril) trae las procesiones más famosas de América Latina, pero también precios y multitudes mucho más altos',
    costi: 'entre las ciudades más caras de Guatemala, pero económica para los estándares europeos; el trekking al Acatenango parte de unos 60 € con el equipo incluido',
    erroriDaEvitare: [
      'Subir al Cerro de la Cruz solo y fuera del horario de presencia de la policía turística',
      'Subestimar el frío nocturno en el campamento del Acatenango (casi 4.000 m): hacen falta capas de verdad, no solo una sudadera',
    ],
    miaEsperienza:
      'Llegamos a Antigua a primera hora de la tarde y el primer paseo por las calles empedradas lo hicimos con los volcanes Agua, Fuego y Acatenango al fondo de cada calle. Al día siguiente recorrimos el centro histórico, del Arco de Santa Catalina a las iglesias en ruinas, y subimos al Cerro de la Cruz para ver el panorama. Lo que me queda es el Acatenango: cinco o seis horas de subida entre campos de maíz y pinar, sobre la arena volcánica que cede bajo los pies, el tramo más duro de todo el viaje. El campamento estaba por encima de las nubes, el Fuego empezó a entrar en erupción antes del atardecer y de noche lo veíamos lanzar lava a un par de kilómetros sin salir del saco de dormir, con un frío cercano a cero. Por la mañana bajamos más deslizándonos por la arena que caminando. La lista de cosas hechas en Centroamérica empieza ahí.',
    esperienzeSlugs: ['trekking-acatenango'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Calle empedrada de Antigua Guatemala con casas coloniales y el volcán de Agua al fondo',
    immagine: '/images/guatemala/antigua-guatemala.jpg',
  },
  {
    slug: 'lago-atitlan',
    paeseSlug: 'guatemala',
    ordine: 2,
    nome: 'Lago de Atitlán',
    tipologia: ['natura', 'cultura'],
    giorniConsigliati: '2-4 días, según cuántos pueblos se quieran ver',
    visitataPersonalmente: true,
    introduzione:
      'Un lago dentro de una caldera volcánica, rodeado por tres volcanes y por una decena de pueblos mayas muy distintos, conectados casi solo en barca.',
    percheAndarci:
      "Aquí Guatemala va más despacio. Cada pueblo del lago tiene su carácter (hay quien viene por el yoga, quien por las escuelas de español, quien por la vida tradicional tzutujil y kaqchikel) y la base se elige según el ritmo que se busque.",
    cosaVedere: [
      'Panajachel, el pueblo de llegada y nudo de transportes, con la Calle Santander llena de artesanía',
      'San Juan la Laguna, el pueblo más cuidado, conocido por las cooperativas textiles y los murales',
      'San Marcos la Laguna, el pueblo del yoga y las disciplinas holísticas, con la plataforma de saltos de Cerro Tzankujil',
      'Santiago Atitlán, el pueblo más grande y tradicional, donde se venera la figura sincrética de Maximón',
      'La Reserva Natural Atitlán cerca de Panajachel',
    ],
    cosaFare: [
      'Vuelta por los pueblos en lancha, las barcas públicas compartidas (ver la ficha de experiencia dedicada)',
      'Amanecer desde la Nariz del Indio, el mirador sobre la caldera (salida nocturna con guía)',
      'Kayak o SUP en el lago a primeras horas de la mañana, cuando el agua está quieta',
      'Curso de español en San Pedro la Laguna, de los más baratos de América Latina',
    ],
    doveDormire:
      'La base cambia el viaje: Panajachel por la comodidad de los transportes, San Pedro por los precios bajos y la compañía, San Marcos por la calma y el lado holístico, Santa Cruz por los hoteles sobre el agua a los que solo se llega en barca.',
    doveMangiare:
      'En el lago se come bien sabiendo dos cosas: el pescado es casi siempre tilapia de criadero, no pescado del lago, y los restaurantes con vistas cuestan el doble que los que están a una manzana del agua. San Juan la Laguna tiene cooperativas de café que también sirven comida y es el lugar más cuidado; en San Marcos, por la comunidad que vive allí, domina la cocina vegetariana. Para comer como la gente del lugar, el mercado de Panajachel por la mañana: churrasco, tamales y caldo de pollo por pocos quetzales.',
    comeArrivare: 'Shuttle turístico desde Antigua (unas 3 horas) o desde Ciudad de Guatemala; como alternativa, chicken bus con cambio en Los Encuentros.',
    comeSpostarsi: 'Lanchas públicas entre los pueblos (pocos euros por trayecto, salen cuando están llenas, hasta el atardecer); tuk tuk dentro de los pueblos.',
    periodoMigliore: 'noviembre-abril; en cualquier estación, después del mediodía, el viento Xocomil hace las travesías más agitadas',
    costi: 'lanchas 10-25 GTQ por trayecto según la distancia; alojamientos entre los más baratos del país',
    erroriDaEvitare: [
      'Programar las travesías por la tarde: el viento Xocomil se levanta casi cada día y hace incómoda la navegación',
      'Quedarse solo en Panajachel: es el nudo de transportes, no el pueblo más interesante del lago',
      'Subir a la Nariz del Indio sin guía en la oscuridad',
    ],
    miaEsperienza:
      'Panajachel es el nudo de transportes, con la Calle Santander llena de artesanía, pero quedarse solo allí es el error más común: el lago empieza cuando uno se sube a una lancha. En una jornada tocamos San Juan la Laguna, con las cooperativas textiles y los murales, San Marcos, el pueblo del yoga, y San Pedro, y cada diez minutos de barca cambiaba el ambiente. Al día siguiente nos levantamos a las cuatro para la Nariz del Indio y luego cogimos la lancha a Santiago Atitlán, donde las mujeres todavía llevan el tocoyal enrollado en la cabeza. Aprendimos rápido a movernos por la mañana, porque desde primera hora de la tarde se levanta el Xocomil y las travesías se agitan. El amanecer desde la Nariz del Indio solo merece el madrugón con el cielo despejado: en la estación de lluvias se sube en la oscuridad para mirar una nube.',
    esperienzeSlugs: ['lance-villaggi-atitlan'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Las aguas azules del lago de Atitlán con los volcanes al fondo, vistas desde San Marcos La Laguna, Guatemala',
    immagine: '/images/guatemala/lago-atitlan.jpg',
  },
  {
    slug: 'tikal-flores',
    paeseSlug: 'guatemala',
    ordine: 3,
    nome: 'Tikal y Flores',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 días, uno de ellos entero dedicado a Tikal',
    visitataPersonalmente: true,
    introduzione:
      'El mayor sitio maya de Guatemala, en la selva del Petén: templos de más de 60 metros que asoman sobre la bóveda del bosque, entre los gritos de los monos aulladores y los tucanes. La base para visitarlo es la isla de Flores, en el lago Petén Itzá.',
    percheAndarci:
      'A diferencia de otros sitios mayas, Tikal está dentro de un bosque vivo: los animales forman parte de la visita tanto como las pirámides, y la vista desde el Templo IV sobre la selva es una de las más célebres de Mesoamérica.',
    cosaVedere: [
      'La Gran Plaza con los Templos I (del Gran Jaguar) y II',
      'El Templo IV, el más alto del sitio, con la plataforma panorámica sobre el bosque',
      'El Mundo Perdido, el complejo más antiguo del sitio',
      'La isla de Flores, con sus casas de colores y el paseo junto al lago',
      'El sitio menor de Yaxhá, mucho menos concurrido e ideal para el atardecer',
    ],
    cosaFare: [
      'Visita de Tikal al amanecer, con la entrada especial de acceso anticipado (ver la ficha de experiencia dedicada)',
      'Paseo en barca por el lago Petén Itzá al atardecer',
      'Excursión a Yaxhá, accesible en el día desde Flores',
    ],
    doveDormire:
      'Flores (isla) por el ambiente y las conexiones; El Remate como alternativa más tranquila a medio camino hacia Tikal; también hay unos pocos hoteles dentro del parque, cómodos para estar en las puertas a la apertura.',
    doveMangiare:
      'En el Petén hay platos que no se encuentran en el resto de Guatemala: el pescado blanco del lago Petén Itzá a la parrilla y, en los locales más tradicionales, la carne de caza. En la isla de Flores los restaurantes junto al lago tienen el atardecer y precios de turista; una manzana más arriba, en las calles interiores, están los comedores donde se gasta un tercio. Dentro del parque de Tikal hay poco y es caro: conviene llevarse la comida y sobre todo mucha agua.',
    comeArrivare:
      'Vuelo interno de Ciudad de Guatemala a Flores (aproximadamente 1 hora, la solución más rápida) o autobús nocturno (8-10 horas). De Flores al parque, aproximadamente 1h30 de lanzadera.',
    comeSpostarsi: 'Lanzaderas organizadas Flores-Tikal (para el amanecer salen muy temprano); dentro del sitio solo se camina, por varios kilómetros de senderos.',
    periodoMigliore: 'noviembre-abril para los senderos secos; sin embargo, la niebla matinal en la estación seca puede tapar el panorama desde el Templo IV',
    costi: 'entrada al parque aproximadamente 150 GTQ, suplemento por la entrada al amanecer y guía obligatorio en esa franja horaria',
    erroriDaEvitare: [
      'Comprar la entrada para el amanecer esperando un amanecer garantizado: en la estación seca la bruma sobre la selva es frecuente',
      'Subestimar las distancias dentro del sitio: se caminan varios kilómetros con calor y humedad altos',
      'Programar Tikal como excursión de un día desde Antigua: la distancia exige vuelo o autobús nocturno',
    ],
    miaEsperienza:
      'Salimos de Flores hacia las tres de la madrugada y caminamos en la oscuridad hasta el Templo IV con el guía. El amanecer, en la estación seca, suele quedar velado por la bruma; lo que merece el madrugón es el sonido, el coro de monos aulladores y pájaros que se despierta con la primera claridad, antes de que lleguen los autocares. El resto del día lo pasamos entre la Gran Plaza, los Templos I y II y el Mundo Perdido, caminando kilómetros bajo la bóveda del bosque: es lo que distingue a Tikal de los otros sitios mayas. Flores, adonde habíamos llegado la tarde anterior, es una isla de casas de colores con un paseo tranquilo junto al lago, que vive casi solo del turismo hacia Tikal.',
    esperienzeSlugs: ['alba-tikal'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Pirámide escalonada del Mundo Perdido entre los árboles del sitio maya de Tikal, Guatemala',
    immagine: '/images/guatemala/tikal-flores.jpg',
  },
  {
    slug: 'semuc-champey',
    paeseSlug: 'guatemala',
    ordine: 4,
    nome: 'Semuc Champey',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 días, contando los largos traslados',
    visitataPersonalmente: true,
    introduzione:
      "Una escalinata natural de piscinas turquesa de agua calcárea, sobre un puente de roca bajo el que corre, encajonado, el río Cahabón. Está en un valle remoto de la Alta Verapaz, cerca del pueblo de Lanquín.",
    percheAndarci:
      'Es el paisaje natural más fotografiado de Guatemala, y está lo bastante apartado como para no estar nunca demasiado concurrido: la carretera para llegar forma parte del viaje.',
    cosaVedere: [
      'Las piscinas naturales escalonadas de Semuc Champey',
      'El Mirador, punto panorámico desde lo alto sobre las piscinas (subida empinada de unos 30-45 minutos)',
      'El punto en el que el río Cahabón se mete bajo el puente de roca',
      "Las cuevas de K'anba, que se recorren a la luz de una vela",
    ],
    cosaFare: [
      'Baño en las piscinas naturales, con el recorrido de abajo hacia arriba',
      "Cuevas de K'anba con una vela en la mano, tramos a nado incluidos",
      'Tubing en el río Cahabón',
    ],
    doveDormire: 'Lanquín (más servicios y conexiones) o los hostales a lo largo del camino de tierra hacia Semuc, más cerca de la entrada pero aislados.',
    doveMangiare:
      'No hay donde elegir, y conviene saberlo: en Lanquín y a lo largo del camino de tierra hacia el parque se come en los hostales, con menús fijos por la noche, o en los pocos comedores del pueblo. A la entrada de Semuc algunas familias venden pollo a la parrilla y tortillas hechas al momento, lo mejor de la zona. El agua y los snacks hay que comprarlos antes: dentro del parque no se encuentra nada.',
    comeArrivare:
      'Shuttle turístico desde Antigua, Ciudad de Guatemala o Flores: 8-10 horas, con el último tramo por camino de tierra muy lento. Es el traslado más exigente de un recorrido clásico por Guatemala.',
    comeSpostarsi: 'Del pueblo a la entrada del parque se viaja en la caja de las camionetas colectivas, aproximadamente 30-45 minutos.',
    periodoMigliore: 'estación seca para el agua más turquesa: después de las lluvias el color vira a un verde turbio',
    costi: 'entrada al parque aproximadamente 50 GTQ; tour combinado cuevas + tubing + entrada sobre los 150-250 GTQ',
    erroriDaEvitare: [
      'Programarlo como parada «de paso»: los traslados de ida y vuelta a Lanquín son largos y cansados, hace falta un día entero para cada tramo',
      'Ir justo después de días de lluvia intensa, cuando las piscinas pierden el color turquesa',
    ],
    miaEsperienza:
      "Llegar es la mitad del relato: de Panajachel a Lanquín fue la jornada de traslado más larga del viaje, con el último tramo por un camino de tierra que baja lento al valle. Al día siguiente remontamos las piscinas de abajo hacia arriba y luego subimos al Mirador: la subida es empinada, pero sin la vista desde arriba no se entiende cómo funciona el lugar, con el río que desaparece bajo el puente de roca y reaparece trescientos metros más allá. Por la tarde entramos en las cuevas de K'anba, con una vela en la mano y algunos tramos a nado en la oscuridad: lo menos turístico de la zona y lo que más recuerdo. Quien sufra claustrofobia puede saltárselas sin arrepentirse.",
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Las piscinas naturales turquesa escalonadas de Semuc Champey vistas desde arriba entre la selva, Guatemala',
    immagine: '/images/guatemala/semuc-champey.jpg',
  },
  {
    slug: 'chichicastenango',
    paeseSlug: 'guatemala',
    ordine: 5,
    nome: 'Chichicastenango',
    tipologia: ['cultura', 'mercati'],
    giorniConsigliati: 'media jornada, en el día desde Antigua o desde el lago de Atitlán',
    visitataPersonalmente: true,
    introduzione:
      'El mercado indígena más grande de Centroamérica: el jueves y el domingo llena todo el centro del pueblo de tejidos, máscaras, cerámicas, flores y productos alimentarios.',
    percheAndarci:
      "Además del mercado, es uno de los lugares donde el sincretismo maya-católico es más visible: en la escalinata de la iglesia de Santo Tomás todavía se queman copal y ofrendas según los ritos k'iche'.",
    cosaVedere: [
      'El mercado, con la parte artesanal en la plaza principal y la alimentaria en las calles laterales',
      'La iglesia de Santo Tomás y su escalinata, donde se celebran ritos mayas',
      'El cementerio con las tumbas pintadas de colores vivos, un poco fuera del centro',
    ],
    cosaFare: [
      'Regatear tejidos y huipiles en el mercado (regatear es lo normal)',
      'Asistir a los ritos en la escalinata de Santo Tomás, con respeto y sin fotografiar a las personas sin permiso',
    ],
    doveDormire: 'La mayoría de los visitantes llega en el día; para estar en el mercado a la apertura conviene, sin embargo, dormir en el pueblo la noche anterior.',
    doveMangiare:
      'En los días de mercado se come en el mercado, en la parte alimentaria de las calles laterales, de pie en los puestos con los vendedores: tamales envueltos en hoja, chuchitos, caldo, tortillas hechas al momento. Los restaurantes alrededor de la plaza sirven lo mismo al triple de precio. Los demás días hay poco, y nada especial.',
    comeArrivare: 'Shuttle turístico desde Antigua (unas 3 horas) o desde Panajachel (aproximadamente 1h30), con salidas concentradas en los días de mercado.',
    comeSpostarsi: 'Todo a pie, el pueblo es pequeño.',
    periodoMigliore: 'solo jueves y domingo, los días de mercado; conviene llegar pronto, cuando el mercado todavía es de quien trabaja en él',
    costi: 'sin entrada; el coste es lo que se gasta regateando',
    erroriDaEvitare: [
      'Llegar en un día distinto del jueves o el domingo: fuera de los días de mercado el pueblo está tranquilo y es poco interesante',
      'Fotografiar a personas o ritos sin pedir permiso: aquí es una cuestión de respeto',
    ],
    miaEsperienza:
      "Llegamos desde Antigua, tres horas de shuttle, en uno de los dos días de mercado: fuera del jueves y el domingo el pueblo está tranquilo y es poco interesante. Anduvimos entre los puestos de tejidos, máscaras y cerámicas y comimos de pie en los puestos de la parte alimentaria, en las calles laterales. Lo que me ha quedado, sin embargo, es la escalinata de Santo Tomás: en los escalones de una iglesia católica todavía se queman copal y ofrendas según ritos k'iche'. Es un rito de verdad y se mira con respeto, sin fotografiar a las personas sin permiso. A última hora de la tarde seguimos hacia el lago de Atitlán.",
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'El arco decorado con mosaico de colores en una calle empedrada de Chichicastenango, Guatemala',
    immagine: '/images/guatemala/chichicastenango.jpg',
  },
]
