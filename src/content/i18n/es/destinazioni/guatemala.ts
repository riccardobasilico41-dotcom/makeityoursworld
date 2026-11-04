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
      "luoghi": [
        {
          "nome": "Arco de Santa Catalina",
          "testo": "El arco amarillo del siglo XVII en la 5ª Avenida Norte, con el volcán de Agua enmarcado al fondo. Es la foto símbolo de la ciudad.",
          "come": "A pie desde la plaza central, 5 minutos. Entrada libre.",
          "quando": "Mañana temprano, sin multitudes y con el volcán despejado.",
          "tempo": "15 minutos"
        },
        {
          "nome": "Convento de Santa Clara y La Merced",
          "testo": "Iglesias y conventos coloniales arruinados por el terremoto de 1773, que obligó a trasladar la capital. Antigua es patrimonio UNESCO por este conjunto.",
          "come": "A pie por el centro. Pequeña entrada para las ruinas de Santa Clara; La Merced es una iglesia aún en uso.",
          "quando": "Mañana; la luz de la tarde es buena en la fachada de La Merced.",
          "tempo": "2-3 horas para ambas",
          "url": "https://inguat.gob.gt/"
        },
        {
          "nome": "Cerro de la Cruz",
          "testo": "Un mirador en la colina con la ciudad en primer plano y los volcanes Agua, Fuego y Acatenango detrás. Se llega con una subida corta.",
          "come": "A pie en 20-30 minutos desde el centro, pero mejor en grupo o con la policía turística, presente en la zona.",
          "quando": "Mañana temprano o última hora de la tarde.",
          "tempo": "1 hora",
          "consiglio": "No subir solo ni llevar objetos de valor: la zona ha tenido problemas de seguridad en el pasado."
        },
        {
          "nome": "Volcán Acatenango",
          "testo": "Una subida con campamento sobre las nubes, frente al Fuego en erupción. El tramo más duro del viaje por Guatemala.",
          "come": "Tour de dos días desde Antigua con guía, tienda y comidas. La caminata es de 5-6 horas de subida entre milpas, pinar y arena volcánica.",
          "quando": "Estación seca (noviembre-abril); a la mañana siguiente se baja por la arena.",
          "tempo": "2 días, 1 noche",
          "consiglio": "El campamento está casi a cero de noche: guantes, gorro, capas de abrigo. La bajada es más deslizarse que caminar."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Arco de Santa Catalina y ruinas de La Merced",
            "Mercado municipal y almuerzo",
            "Tarde: Convento de Santa Clara",
            "Atardecer en el Cerro de la Cruz, con la policía turística"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: centro histórico y Cerro de la Cruz",
            "Día 2: Acatenango (2 días en total con la noche en el campamento)"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Día 1: ciudad y ruinas",
            "Días 2-3: Acatenango con noche en el campamento",
            "Si queda tiempo, un taller de chocolate o jade en la ciudad"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro histórico",
          "perChi": "quien quiere ir a pie a todo",
          "testo": "Calles empedradas, todo cerca, pero ruido el fin de semana y precios más altos."
        },
        {
          "nome": "Zonas sobre la 5ª Calle y alrededor de los conventos",
          "perChi": "quien busca más calma",
          "testo": "Más tranquilas de noche; 10-15 minutos a pie al centro."
        }
      ],
      "sapori": [
        {
          "nome": "Pepián",
          "testo": "Guiso de carne con semillas de calabaza, ajonjolí y chile, el plato nacional. En comedores y restaurantes típicos."
        },
        {
          "nome": "Tamales",
          "testo": "El sábado es el día de los tamales de colores envueltos en hojas de plátano. En mercados y casas."
        },
        {
          "nome": "Hilachas",
          "testo": "Carne deshilachada en salsa de tomate y tomatillo, con papas. Plato de familia."
        },
        {
          "nome": "Chocolate guatemalteco",
          "testo": "Tazas de chocolate y tabletas elaboradas en la ciudad, vendidas en tiendas especializadas."
        }
      ],
      "attenzioni": [
        "Subida al Cerro de la Cruz: mejor en grupo o con la policía turística.",
        "Para el Acatenango elegir operadores fiables con equipo adecuado: de noche la temperatura baja a cero.",
        "El Fuego está activo: seguir siempre las indicaciones del guía y los boletines de protección civil (CONRED)."
      ],
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
      "luoghi": [
        {
          "nome": "San Juan la Laguna",
          "testo": "El pueblo más cuidado del lago, con cooperativas textiles de mujeres, murales en las fachadas y talleres de arte.",
          "come": "En lancha pública desde Panajachel o San Pedro (unos 30-45 minutos), luego a pie por las callejuelas.",
          "quando": "Mañana, cuando las cooperativas están abiertas.",
          "tempo": "2-3 horas",
          "consiglio": "Comprar en las cooperativas, donde lo recaudado va a las tejedoras."
        },
        {
          "nome": "San Marcos la Laguna",
          "testo": "El pueblo del yoga y las prácticas holísticas. En la orilla está la plataforma de saltos del Cerro Tzankujil.",
          "come": "En lancha desde Panajachel o San Pedro.",
          "quando": "Mañana, con el lago más calmado.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Santiago Atitlán",
          "testo": "El pueblo más grande y tradicional, donde las mujeres llevan el tocoyal enrollado en la cabeza y se venera a Maximón, figura sincrética.",
          "come": "En lancha pública desde Panajachel, unos 30-40 minutos.",
          "quando": "Mañana.",
          "tempo": "Media jornada",
          "consiglio": "Antes de fotografiar a personas o la figura de Maximón, pedir siempre permiso y dejar una pequeña ofrenda."
        },
        {
          "nome": "Indian Nose (Rostro Maya)",
          "testo": "Un mirador a 3.000 metros sobre San Juan la Laguna, para el amanecer sobre el lago y los volcanes.",
          "come": "Despertar sobre las 4, salida en pick-up y caminata de aproximadamente una hora en la oscuridad con guía.",
          "quando": "Amanecer, con cielo despejado.",
          "tempo": "Media mañana",
          "consiglio": "En temporada de lluvias se sube a oscuras para mirar una nube: consultar el pronóstico."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana temprano: Indian Nose o lancha a San Juan la Laguna",
            "San Marcos para un salto y almuerzo",
            "Regreso antes del viento de la tarde (Xocomil)"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: San Juan la Laguna, San Marcos y San Pedro en lancha",
            "Día 2: Indian Nose al amanecer, luego Santiago Atitlán"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Días 1 y 2 como arriba",
            "Día 3: reserva natural de Atitlán cerca de Panajachel, o día de descanso en el lago"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Panajachel",
          "perChi": "nudo de transportes, primeras noches",
          "testo": "Servicios, restaurantes, la Calle Santander llena de artesanía. Menos ambiente que el resto del lago."
        },
        {
          "nome": "San Pedro la Laguna",
          "perChi": "presupuesto y vida nocturna",
          "testo": "Barato, joven, ruidoso de noche."
        },
        {
          "nome": "San Marcos y San Juan",
          "perChi": "calma y bienestar",
          "testo": "Más tranquilos y más caros; para yoga, silencio y arte."
        }
      ],
      "sapori": [
        {
          "nome": "Pepián y caldo de pollo",
          "testo": "Platos calientes en los comedores del lago, tras una mañana en barca."
        },
        {
          "nome": "Pescado del lago",
          "testo": "Tilapia y black bass fritos, a la orilla en Panajachel y Santiago."
        },
        {
          "nome": "Tortillas y frijoles",
          "testo": "La base de cada comida, en los comedores de los pueblos."
        },
        {
          "nome": "Café de Atitlán",
          "testo": "Café cultivado en las laderas del lago, para probar en pequeños cafés locales."
        }
      ],
      "attenzioni": [
        "Moverse por el lago por la mañana: desde primera hora de la tarde se levanta el Xocomil y las travesías son movidas.",
        "Usar las lanchas públicas oficiales y acordar el precio antes de subir.",
        "En los senderos entre pueblos, sobre todo en San Pedro, ha habido robos: caminar en grupo y de día."
      ],
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
      "luoghi": [
        {
          "nome": "Gran Plaza y Templos I y II",
          "testo": "El corazón de Tikal: los Templos I (del Gran Jaguar) y II se enfrentan en la plaza ceremonial, con acrópolis a los lados. Patrimonio UNESCO dentro del Parque Nacional Tikal.",
          "come": "Desde la entrada del parque se camina por la selva; entrada y senderos suman kilómetros. Se recomienda visita con guía, también por la fauna.",
          "quando": "El parque abre al amanecer; mañana temprano por el fresco y los animales.",
          "tempo": "3-4 horas",
          "url": "https://inguat.gob.gt/"
        },
        {
          "nome": "Templo IV",
          "testo": "El templo más alto del sitio, con una plataforma de madera sobre el dosel de la selva y vista de las cimas de los otros templos.",
          "come": "Subida por escaleras de madera al final del recorrido, con linterna si se sube para el amanecer.",
          "quando": "Amanecer o última hora de la tarde.",
          "tempo": "1 hora",
          "consiglio": "En estación seca el amanecer suele estar velado por la bruma. Lo que justifica madrugar es el coro de monos aulladores y aves antes de que lleguen los autocares."
        },
        {
          "nome": "Mundo Perdido",
          "testo": "El complejo más antiguo del sitio, con una pirámide y plataformas que se ven desde lo alto de una escalera empinada.",
          "come": "A pie desde el parque, después de la Gran Plaza.",
          "quando": "Última hora de la tarde para el atardecer, si se permite el acceso.",
          "tempo": "1-1,5 horas"
        },
        {
          "nome": "Isla de Flores",
          "testo": "Una isla de casas coloridas en el lago Petén Itzá, con malecón tranquilo. Vive casi solo del turismo hacia Tikal.",
          "come": "Puente peatonal desde Santa Elena. 15 minutos a pie de un extremo al otro.",
          "quando": "Noche, para cenar y pasear por el malecón.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Yaxhá",
          "testo": "Un sitio maya menos visitado, con vista al lago y atardecer desde la pirámide, a una hora de Flores.",
          "come": "Tour desde Flores o taxi; es un sitio grande, con pocos turistas.",
          "quando": "Última hora de la tarde.",
          "tempo": "Media jornada",
          "url": "https://inguat.gob.gt/",
          "consiglio": "Si Tikal está llena, Yaxhá merece el desvío."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Salida de Flores a las 3 de la madrugada para el Templo IV al amanecer",
            "Gran Plaza, Templos I y II",
            "Mundo Perdido",
            "Regreso a Flores por la tarde, cena en el malecón"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: llegada a Flores, malecón y cena",
            "Día 2: Tikal al amanecer y visita completa; tarde libre"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Días 1-2 como arriba",
            "Día 3: Yaxhá al atardecer, o la frontera con Belice"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Isla de Flores",
          "perChi": "ambiente y comodidad",
          "testo": "Restaurantes y hoteles a orillas del lago, calles estrechas. Poco ruido, pero Tikal está a 1 hora en coche."
        },
        {
          "nome": "El Remate",
          "perChi": "quien quiere más calma y naturaleza",
          "testo": "En el lago Petén Itzá, a 30 minutos de Tikal: pequeñas cabañas y el atardecer en el lago."
        }
      ],
      "sapori": [
        {
          "nome": "Pepián y caldo de gallina",
          "testo": "Platos típicos guatemaltecos, en los comedores de Flores."
        },
        {
          "nome": "Pescado del lago Petén Itzá",
          "testo": "Frito o a la plancha en los malecones."
        },
        {
          "nome": "Tamales de Petén",
          "testo": "De maíz y carne, envueltos en hojas de plátano."
        },
        {
          "nome": "Café y dulces de maíz",
          "testo": "Para el desayuno, en pequeños locales de la isla."
        }
      ],
      "attenzioni": [
        "Preguntar siempre qué incluye el tour del amanecer: la entrada al parque suele ir aparte.",
        "En temporada de lluvias el amanecer a menudo no se ve: valorar si merece madrugar.",
        "En el sitio se camina kilómetros bajo la selva: llevar agua, repelente y zapatos cerrados."
      ],
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
      "luoghi": [
        {
          "nome": "Pozas naturales de Semuc Champey",
          "testo": "Una serie de pozas turquesas en terrazas, formadas por la caliza, sobre el río Cahabón que corre bajo el puente de roca. Monumento natural con entrada de pago.",
          "come": "Desde Lanquín 30 minutos en pick-up por un camino de tierra. Desde la entrada se camina hasta las pozas.",
          "quando": "Mañana, con menos gente y agua más clara; evitar tras lluvias fuertes, cuando el agua se enturbia.",
          "tempo": "2-3 horas",
          "consiglio": "Se sube desde abajo hacia arriba y luego al Mirador: así se entiende cómo funciona el lugar."
        },
        {
          "nome": "El Mirador",
          "testo": "El mirador sobre las pozas. Desde aquí se ve cómo el río desaparece bajo el puente de roca y reaparece trescientos metros más allá.",
          "come": "Sendero empinado de 30-45 minutos desde la entrada, con escaleras y barro.",
          "quando": "Mañana; evitar las horas de lluvia, cuando los escalones resbalan.",
          "tempo": "1-1,5 horas",
          "consiglio": "Zapatos con agarre y agua: la subida es dura, pero sin la vista desde arriba se pierde el sentido del lugar."
        },
        {
          "nome": "Cuevas de K'anba",
          "testo": "Una cueva con pasillos inundados que se recorren con una vela en la mano y algunos tramos a nado en la oscuridad. Lo menos turístico de la zona.",
          "come": "Con guía, a poca distancia de la entrada del monumento natural.",
          "quando": "Después de visitar las pozas, por la tarde.",
          "tempo": "1-1,5 horas",
          "consiglio": "Quien sufra de claustrofobia que se las salte: los pasos son estrechos y oscuros."
        },
        {
          "nome": "Lanquín",
          "testo": "El pueblo base, último puesto antes de Semuc Champey, con hostales y una sola calle principal.",
          "come": "Desde Cobán o Ciudad de Guatemala en shuttle, 8-10 horas desde Antigua o Atitlán.",
          "quando": "Llegar el día anterior.",
          "tempo": "Una noche"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: pozas y Mirador",
            "Almuerzo",
            "Tarde: cuevas de K'anba"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: llegada a Lanquín, parada en la entrada del parque",
            "Día 2: pozas, Mirador, cuevas; regreso en shuttle al día siguiente"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lanquín",
          "perChi": "todos",
          "testo": "El pueblo base: pocos alojamientos, hostales y casas de huéspedes sencillas, electricidad y conexión limitadas."
        },
        {
          "nome": "Alrededores del río Cahabón",
          "perChi": "quien busca naturaleza",
          "testo": "Algunos lodges en el río, en plena selva, pero lejos de los servicios."
        }
      ],
      "sapori": [
        {
          "nome": "Caldo de pollo y frijoles",
          "testo": "Cocina sencilla en los comedores del pueblo."
        },
        {
          "nome": "Tortillas y huevos",
          "testo": "El desayuno estándar de hostales y comedores."
        },
        {
          "nome": "Cardamomo",
          "testo": "Alta Verapaz es zona productora: se encuentra en infusiones y dulces."
        },
        {
          "nome": "Fruta tropical",
          "testo": "Plátanos, papaya y piña, baratos en los mercadillos."
        }
      ],
      "attenzioni": [
        "Llegar requiere un largo traslado: planificar al menos una noche en Lanquín.",
        "No dejar objetos de valor sin vigilancia en las pozas ni en los senderos.",
        "Tras lluvias fuertes las pozas pierden color y algunos tramos se vuelven peligrosos: preguntar en el pueblo antes de salir."
      ],
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
      "luoghi": [
        {
          "nome": "Mercado de Chichicastenango",
          "testo": "Uno de los mercados más grandes de Centroamérica: textiles, máscaras, cerámicas y productos locales en la plaza, comida y flores en las calles laterales.",
          "come": "En el centro del pueblo, a pie. Shuttle desde Antigua (unas 3 horas) o desde Atitlán.",
          "quando": "Jueves y domingo. Fuera de esos días el pueblo está tranquilo y es poco interesante.",
          "tempo": "3-4 horas",
          "consiglio": "Regatear con calma. Comer de pie en los puestos de la parte de alimentos, en las calles laterales."
        },
        {
          "nome": "Iglesia de Santo Tomás",
          "testo": "Iglesia católica en la plaza principal, en cuya escalinata se queman copal y ofrendas según ritos k'iche'. Un rito real y no un espectáculo.",
          "come": "A pie desde la plaza. Se puede mirar desde la escalinata, pero el interior tiene sus propias reglas.",
          "quando": "Días de mercado.",
          "tempo": "1 hora",
          "consiglio": "No fotografiar a las personas sin permiso y mantener distancia de los ritos."
        },
        {
          "nome": "Cementerio de Chichicastenango",
          "testo": "Poco fuera del centro, con tumbas pintadas de colores vivos y un ambiente muy distinto al de un cementerio europeo.",
          "come": "A pie desde el centro, unos 10 minutos.",
          "quando": "Mañana.",
          "tempo": "45 minutos",
          "consiglio": "Respeto y discreción: es un lugar en uso, no un escenario."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Llegada por la mañana con el mercado ya activo",
            "Almuerzo en los puestos de la parte de alimentos",
            "Santo Tomás y cementerio a primera hora de la tarde",
            "Salida a última hora de la tarde hacia Atitlán"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: mercado, iglesia, cementerio",
            "Noche en el pueblo, regreso al día siguiente, cuando está tranquilo"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro",
          "perChi": "quien duerme en el sitio",
          "testo": "Pequeños hoteles y posadas en la plaza, ruidosos la noche antes del mercado."
        },
        {
          "nome": "De excursión desde Antigua o Atitlán",
          "perChi": "la mayoría",
          "testo": "El pueblo se ve bien en un día: se llega por la mañana y se sale por la tarde."
        }
      ],
      "sapori": [
        {
          "nome": "Pepián y caldo de pollo",
          "testo": "Platos calientes en la parte de alimentos del mercado."
        },
        {
          "nome": "Tamales",
          "testo": "De maíz, en los puestos de las calles laterales."
        },
        {
          "nome": "Atol",
          "testo": "Bebida caliente de maíz, para la mañana fría del altiplano."
        },
        {
          "nome": "Fruta y flores",
          "testo": "Los puestos de flores en la escalinata forman parte del color del mercado."
        }
      ],
      "attenzioni": [
        "El mercado se hace solo jueves y domingo: planificar con antelación.",
        "Carteristas entre la multitud: llevar los objetos de valor delante.",
        "Respetar los ritos k'iche' en la escalinata: sin fotos sin permiso."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'El arco decorado con mosaico de colores en una calle empedrada de Chichicastenango, Guatemala',
    immagine: '/images/guatemala/chichicastenango.jpg',
  },
]
