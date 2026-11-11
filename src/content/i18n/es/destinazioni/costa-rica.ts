import type { Destinazione } from '@/lib/types'

export const destinazioniCostaRica: Destinazione[] = [
  {
    slug: 'san-jose',
    paeseSlug: 'costa-rica',
    ordine: 1,
    nome: 'San José',
    tipologia: ['città'],
    giorniConsigliati: '1 día a la llegada, 1 al regreso',
    visitataPersonalmente: true,
    introduzione: 'El punto de llegada y de regreso del viaje. Hay poco que ver, pero es un buen primer bocado de cocina y vida social costarricense.',
    percheAndarci: 'Como base logística a la llegada y a la salida, y para el primer y el último casado del viaje.',
    cosaVedere: ['El Mercado Central', 'El barrio colonial de Barrio Amón', 'El Museo Nacional'],
    cosaFare: [
      'Cena en el Jardín de Lolita, entre food trucks y mesas largas con amigos',
      'Después de cenar en Booze and Scoops y noche de baile en La Concha',
      'Cena de despedida en la Costa Rica Beer Factory',
    ],
    doveDormire:
      'Casa Boutique Las Orquídeas, donde dormimos tanto a la llegada como la última noche. Es más una casa que un hotel: ambiente familiar, personal disponible a cualquier hora, desayuno preparado al momento. Alguna reseña señala paredes finas y habitaciones algo espartanas. Gama media.\n\nAlternativas: económicas: Selina San José, Costa Rica Backpackers Hostel · gama media: Hotel Presidente, Hotel Kekoldi (Barrio Amón) · lujo: Hotel Grano de Oro, Xandari Resort & Spa (Alajuela, cerca del aeropuerto).',
    doveMangiare: 'Jardín de Lolita y Colonia Arepas y Bar a la llegada; Costa Rica Beer Factory para la cena de despedida.',
    usciteSerali: 'La Concha, en el barrio de La California, que a diferencia del centro es seguro y animado también por la noche.',
    comeArrivare: 'Vuelo internacional a San José; Uber del aeropuerto al centro (30 min-1h, unos 14$).',
    comeSpostarsi: 'Uber, mejor que los taxis: cuesta un tercio menos y es más seguro.',
    periodoMigliore: 'mediados-finales de noviembre',
    costi: 'Uber aeropuerto-centro unos 14$.',
    erroriDaEvitare: ['Evitar el centro de la ciudad después de anochecer: mejor moverse siempre acompañado o en Uber', 'Cambiar moneda solo en bancos o casas de cambio autorizadas, nunca en la calle'],
    miaEsperienza:
      "San José merece verse solo de paso. Están bien el Mercado Central y el Museo Nacional, el de historia; por lo demás, nada especial. La cena en el Jardín de Lolita, entre los food trucks y todos sentados juntos, fue la noche perfecta para reencontrarnos después de las llegadas sueltas.",
      "luoghi": [
        {
          "nome": "Mercado Central",
          "testo": "El histórico mercado cubierto del centro, con puestos de comida, café, artesanía y las sodas que sirven el casado del día.",
          "come": "A pie desde el centro.",
          "quando": "Mañana y mediodía, cuando las sodas tienen más movimiento.",
          "tempo": "1-1,5 horas",
          "consiglio": "Comer en una soda dentro del mercado es la forma más barata de probar la cocina casera."
        },
        {
          "nome": "Barrio Amón",
          "testo": "Barrio de casas de madera y ladrillo construidas entre finales del siglo XIX y principios del XX, antiguas casas de los barones del café, hoy con galerías, cafés y hoteles con encanto.",
          "come": "A pie, al norte del centro.",
          "quando": "Mañana, con buena luz.",
          "tempo": "1-2 horas",
          "consiglio": "Mejor no caminar con el teléfono en la mano, y de noche son preferibles los taxis."
        },
        {
          "nome": "Museo Nacional",
          "testo": "Alojado en el antiguo Cuartel Bellavista, con salas de historia, arqueología y naturaleza del país, frente a la Asamblea Legislativa.",
          "come": "A pie desde el centro.",
          "quando": "Martes a sábado de 8:30 a 16:30, domingo de 9 a 16:30; cerrado los lunes.",
          "tempo": "1-2 horas",
          "url": "https://www.museocostarica.go.cr/"
        },
        {
          "nome": "Teatro Nacional",
          "testo": "El teatro neoclásico inaugurado en 1897 con el Fausto, pagado con un impuesto al café. Dentro está la famosa pintura de la alegoría del café y el banano.",
          "come": "A pie desde el centro, en la Plaza de la Cultura.",
          "quando": "Mañana.",
          "tempo": "1 hora",
          "url": "https://www.teatronacional.go.cr/",
          "consiglio": "Reservar con antelación si se quiere asistir a un espectáculo."
        },
        {
          "nome": "Museo del Oro Precolombino",
          "testo": "Los museos del Banco Central, en salas subterráneas bajo la Plaza de la Cultura, con la exposición permanente sobre el oro precolombino y el museo de numismática.",
          "come": "A pie desde el centro: Plaza de la Cultura, entre avenida 0 y 2, calle 5.",
          "quando": "Todos los días, 9-16.30.",
          "tempo": "1-1,5 horas",
          "costo": "8.800 colones para extranjeros, 6.950 para estudiantes (web oficial, 2026).",
          "url": "https://www.museosdelbancocentral.org/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mercado Central y almuerzo en una soda",
            "Teatro Nacional y Plaza de la Cultura",
            "Barrio Amón por la tarde",
            "Cena en el centro"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1 como arriba",
            "Día 2: excursión a un volcán (Poás o Irazú) en el día, o café y Museo Nacional"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Barrio Amón y Otoya",
          "perChi": "quien busca ambiente",
          "testo": "Casas históricas, cafés y algo de vida nocturna; barrio para cruzar con cuidado después del atardecer."
        },
        {
          "nome": "Cerca del aeropuerto (Alajuela)",
          "perChi": "llegada o salida tarde",
          "testo": "Hoteles cómodos para vuelos temprano o tarde; poco que ver."
        }
      ],
      "sapori": [
        {
          "nome": "Pollo, arroz y frijoles",
          "testo": "La comida es normal, una mezcla entre estadounidense y centroamericana, con mucho pollo, arroz y frijoles. La fruta, en cambio, es increíble."
        },
        {
          "nome": "Casado",
          "testo": "El plato del día con arroz, frijoles, ensalada, plátano y carne o pescado. Se come en las sodas."
        },
        {
          "nome": "Gallo pinto",
          "testo": "Arroz y frijoles salteados con especias, para el desayuno con huevos y natilla."
        },
        {
          "nome": "Chifrijo",
          "testo": "Arroz, frijoles, chicharrón y pico de gallo, una botana de bar."
        },
        {
          "nome": "Café costarricense",
          "testo": "Se compra en cooperativas y tiendas del centro."
        }
      ],
      "attenzioni": [
        "San José ofrece poco al turista: es una base de un par de días, no un destino.",
        "No caminar de noche fuera del centro turístico ni en los barrios detrás de la estación; usar taxis oficiales o apps.",
        "Carteristas en mercados y buses: llevar solo lo necesario.",
        "Las actividades en Costa Rica son carísimas y casi siempre se paga en dólares: tenedlo en cuenta en el presupuesto.",
        "La seguridad me dio una buena impresión, pero como en toda Centroamérica, siempre ojos abiertos."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'El centro de San José, capital de Costa Rica',
    immagine: '/images/costa-rica/san-jose-stock.jpg',
  },
  {
    slug: 'puerto-viejo',
    paeseSlug: 'costa-rica',
    ordine: 2,
    nome: 'Puerto Viejo',
    tipologia: ['mare', 'natura', 'giungla'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: 'La costa caribeña de Costa Rica, recorrida en bicicleta entre Punta Uva, Playa Chiquita y Cocles, con el Parque Nacional de Cahuita a un paso.',
    percheAndarci: 'Por Punta Uva, la playa más bonita para nadar en el Caribe, y por el tour de Cahuita, entre perezosos, comunidad bribri y chocolate tradicional.',
    cosaVedere: ['Punta Uva', 'Playa Chiquita y Cocles', 'El Parque Nacional de Cahuita'],
    cosaFare: [
      'Alquiler de bici en Rasta Lion para explorar la costa',
      'Tour completo de Cahuita con el guía José (hay una ficha de experiencia dedicada)',
      'Happy hour al atardecer en Cocles',
      'Rafting en el Pacuaré (opcional, a organizar con una semana de antelación)',
    ],
    doveDormire:
      'Escape Caribeño: bungalós frente a la playa con piscina y un jardín tropical muy fotografiado, desayuno valorado como excelente por la mayoría de los huéspedes. Alguien se queja del equipamiento mínimo en la habitación y del precio, ya alto, que no incluye el desayuno. Gama media-alta.\n\nAlternativas: económicas: Cabinas Guaraná, Rocking J\'s · gama media: Coco Loco Lodge · lujo: Le Cameleon Boutique Hotel, Cariblue Beach & Jungle Resort.',
    doveMangiare: 'Madre Tierra, Koki Beach Restaurant (a menudo un perezoso cruza el tejado por la noche), Amimodo.',
    usciteSerali: 'Hot Rocks para la música en vivo, Selina para el karaoke. De noche mejor moverse siempre acompañado.',
    comeArrivare: "Desde San José son unas 4-4,5 horas de furgoneta o coche, bajando por el Parque Braulio Carrillo hacia Limón y luego por la costa; conviene parar a mitad de camino para comer. Los autobuses públicos salen de la Gran Terminal del Caribe de San José y tardan algo más, con parada en Cahuita. Desde Limón se llega en una hora y cuarto. El aeropuerto internacional es el Juan Santamaría (SJO); la frontera de Sixaola, hacia Panamá, está a unos 45 minutos.",
    comeSpostarsi: 'Bicicleta de alquiler, tuk tuks locales para los desplazamientos cortos (unos 4$ por persona).',
    periodoMigliore: 'todo el año tropical',
    costi: "Alquiler de bici unos 6$; tour de Cahuita 50$ por persona; rafting en el Pacuare 112$; tuk tuk unos 4$ por persona en trayectos cortos. Presupuesto diario por persona, orientativo para 2026: bajo 50-80 € (cabinas u hostal, sodas, bici); medio 110-170 € (bungalow en Cocles, un tour al día, cenas en restaurante); alto desde 250 € (hotel en la selva en Punta Uva, rafting y tours privados).",
    erroriDaEvitare: ['Reservar el tour de Cahuita y el rafting en el Pacuaré con al menos una semana de antelación', 'De noche moverse siempre acompañado, sobre todo las chicas solas'],
    miaEsperienza:
      "Pedaleamos por la costa hasta Punta Uva, con los monos aulladores que se oían en los árboles sobre nuestras cabezas. Cahuita, preciosa de verdad: allí vimos el tiburón nodriza, rayas, varios perezosos, monitos de todo tipo y más. La comunidad bribri, en cambio, es una experiencia cultural, pero no te la imagines como algo auténtico dentro de la selva, al menos por cómo la viví yo. Está bien ver cómo viven, o vivían, y cómo se hace el chocolate, pero no es como los mentawai, por decirlo así. En la zona recomiendo también el Jaguar Rescue Center. Desde aquí fuimos luego a la frontera con Panamá.",
    luoghi: [
      {
        nome: "Parque Nacional Cahuita",
        testo: "Un sendero costero entre playa, selva y mar, con un arrecife de coral frente a la costa. Se ven perezosos, monos aulladores y carablanca, mapaches, serpientes y aves, y se nada en una playa dentro del parque.",
        come: "Entrada principal en Playa Blanca, a la entrada del pueblo de Cahuita, o por el sector Puerto Vargas. El sendero bordea la playa, en parte con vados.",
        quando: "Temprano, cuando los animales están activos.",
        tempo: "3-4 horas",
        costo: "Sector Playa Blanca con donación voluntaria; Puerto Vargas con tarifa fija. Tour completo con guía local 50 USD por persona en efectivo, unos 43 €, entrada incluida",
        lat: 9.73214,
        lng: -82.84006,
        consiglio: "Con un guía local se ven muchos más animales: hay una ficha de experiencia del tour completo con el guía José, a reservar al menos una semana antes. Nosotros vimos un tiburón gata, rayas, varios perezosos y monos.",
      },
      {
        nome: "Punta Uva y Playa Chiquita",
        testo: "Playas de arena clara al sur de Puerto Viejo, con palmeras y selva detrás. Punta Uva es la mejor playa para nadar del Caribe costarricense, con agua normalmente tranquila y una punta con un pequeño arco de roca.",
        come: "En bici por la costa desde Puerto Viejo, unos cuarenta minutos de pedaleo; alquiler en el pueblo.",
        quando: "Por la mañana o al final de la tarde.",
        tempo: "Medio día",
        costo: "Gratis",
        lat: 9.64354,
        lng: -82.68501,
        consiglio: "Pedalear por la costa es la forma más sencilla y auténtica de conocer el Caribe costarricense; por el camino se oyen los monos aulladores.",
      },
      {
        nome: "Playa Cocles",
        testo: "Una playa larga y concurrida cerca del pueblo, con olas para surf, salvavidas en algunos tramos y bares en la arena. Al atardecer es el sitio del happy hour.",
        come: "En bici o a pie desde el pueblo, 5-10 minutos.",
        quando: "Al final de la tarde, para el happy hour.",
        tempo: "2-3 horas",
        costo: "Gratis",
        lat: 9.6478,
        lng: -82.7322,
        consiglio: "Las corrientes son fuertes: bañarse donde nadan los demás.",
      },
      {
        nome: "Centro de Puerto Viejo y Salsa Brava",
        testo: "El pueblo junto al mar, con sodas, bares de reggae, tiendas y vida nocturna. Frente al arrecife de Salsa Brava rompe una de las olas más potentes del país, para mirar desde la playa si no se es surfista experto.",
        come: "A pie.",
        quando: "Por la noche; la ola es mejor entre diciembre y marzo.",
        tempo: "1-2 horas",
        costo: "Gratis",
        lat: 9.65725,
        lng: -82.75421,
        consiglio: "De noche mejor moverse acompañados, sobre todo las chicas solas.",
      },
      {
        nome: "Playa Negra",
        testo: "La playa de arena volcánica negra al norte del pueblo, larga y poco concurrida, con olas para principiantes de surf y la selva hasta la arena.",
        come: "A pie o en bici desde el centro, a pocos minutos hacia Cahuita.",
        quando: "Temprano.",
        tempo: "1-2 horas",
        costo: "Gratis",
      },
      {
        nome: "Jaguar Rescue Center",
        testo: "Un centro que rescata animales heridos, enfermos o huérfanos, sobre todo monos, perezosos, aves y reptiles. Los cura y, cuando pueden volver a la libertad, los libera en la selva, también desde su estación de liberación La Ceiba.",
        come: "Entre Cocles y Playa Chiquita, en bici o tuk tuk desde el pueblo.",
        quando: "Por la mañana, con la visita guiada.",
        tempo: "1,5-2 horas",
        orari: "Visitas guiadas todos los días a las 9.30 y a las 11.30; visita privada a las 14 h, con cupo limitado",
        lat: 9.6428,
        lng: -82.72347,
        url: "https://www.jaguarrescue.foundation/en-us/",
        consiglio: "Solo se entra con visita guiada: reservarla en línea en su web.",
      },
      {
        nome: "Ara Manzanillo",
        testo: "Un proyecto de reintroducción de la lapa verde, el gran loro que había desaparecido de la costa caribeña. En la visita de la tarde se ven las lapas libres llegar a los comederos en la selva.",
        come: "En coche o bici hacia Manzanillo; solo con reserva en línea.",
        quando: "Visitas normalmente a las 15 h, con reserva",
        tempo: "1,5 horas",
        lat: 9.62569,
        lng: -82.68491,
        url: "https://aramanzanillo.org/",
      },
      {
        nome: "Manzanillo y el refugio Gandoca-Manzanillo",
        testo: "El pueblo donde termina la carretera costera, a las puertas del refugio de vida silvestre Gandoca-Manzanillo: senderos entre selva, acantilados y pequeñas calas, con delfines mar adentro y corales cerca de la orilla.",
        come: "En bici o coche, unos 13 km al sur de Puerto Viejo; el sendero sale del final del pueblo.",
        quando: "Por la mañana, con el mar en calma para el esnórquel.",
        tempo: "Medio día",
        lat: 9.63162,
        lng: -82.6581,
        consiglio: "Con un guía local el sendero es más seguro y se ven más animales.",
      },
      {
        nome: "Comunidad bribri y taller de chocolate",
        testo: "Una visita a una comunidad indígena bribri, donde el jefe del pueblo explica las plantas tradicionales y muestra las pequeñas ranas venenosas, y luego un taller de chocolate tradicional con degustación. Es una experiencia cultural, pero no hay que imaginarla como algo auténtico en plena selva.",
        come: "Dentro del tour completo de Cahuita, por la tarde, o con un tour dedicado.",
        quando: "Por la tarde.",
        tempo: "2-3 horas",
        consiglio: "El recorrido suele terminar en una catarata al final de una caminata corta pero empinada, donde se puede nadar.",
      },
      {
        nome: "Río Pacuare (rafting)",
        testo: "Descenso por el río Pacuare, entre cañones y selva, uno de los cinco mejores ríos del mundo para el rafting. Cuatro horas en el agua pueden hacerse largas para quien va por primera vez, sobre todo en época seca, con el agua baja.",
        come: "Tour organizado en el trayecto entre San José y Puerto Viejo, a reservar al menos una semana antes.",
        quando: "Mejor en época de lluvias, con más agua.",
        tempo: "Día completo",
        costo: "112 USD por persona, unos 96 €",
        consiglio: "El río está lejos de la costa: es un día largo, con muchas horas de carretera.",
      },
      {
        nome: "Frontera de Sixaola, hacia Panamá",
        testo: "Desde Puerto Viejo o Cahuita se llega en bus a Sixaola, se cruza el puente binacional sobre el río Sixaola, abierto en 2021, y se entra en Panamá por Guabito. Desde allí se sigue a Bocas del Toro.",
        come: "Bus local hasta Sixaola, luego a pie por el puente. Tras Guabito: bus o taxi colectivo hasta Changuinola y Almirante, luego taxi acuático a Bocas Town (unos 30 minutos).",
        quando: "Temprano: las oficinas de frontera cierran al final de la tarde.",
        tempo: "Medio día hasta Bocas",
        costo: "Impuesto de salida terrestre de Costa Rica: 8 USD por persona, en línea en la web del Banco de Costa Rica o en los quioscos BCR de la frontera",
        lat: 9.5579,
        lng: -82.66978,
        consiglio: "Panamá puede pedir el billete de salida y prueba de al menos 1.000 USD o una tarjeta de crédito. Panamá va una hora por delante de Costa Rica.",
      },
    ],
    programmi: [
      { titolo: "1 día", tappe: [
        "Mañana: bici hasta Punta Uva",
        "Comida caribeña",
        "Tarde: Playa Cocles y happy hour",
      ] },
      { titolo: "2 días", tappe: [
        "Día 1: bici por la costa hasta Punta Uva, Jaguar Rescue Center por la mañana",
        "Día 2: tour completo de Cahuita con guía, comunidad bribri y chocolate",
      ] },
      { titolo: "3 días", tappe: [
        "Días 1-2 como arriba",
        "Día 3: Manzanillo y el sendero de Gandoca por la mañana, Ara Manzanillo a las 15 h, cena en el pueblo",
      ] },
    ],
    zone: [
      {
        nome: "Centro de Puerto Viejo",
        perChi: "vida social y restaurantes",
        testo: "Todo cerca, con cabinas, hostales y pequeños hoteles, pero música por la noche, a veces fuerte.",
        fascia: "40-100 €",
      },
      {
        nome: "Playa Cocles y Punta Uva",
        perChi: "calma y naturaleza",
        testo: "Bungalows y cabañas en la selva cerca de las mejores playas, pero hace falta bici o taxi para cenar.",
        fascia: "90-200 €",
      },
      {
        nome: "Manzanillo",
        perChi: "quien quiere el pueblo más tranquilo",
        testo: "Pocos alojamientos sencillos al final de la carretera, junto al refugio de Gandoca; por la noche hay poco que hacer.",
      },
    ],
      "sapori": [
        {
          "nome": "Rice and beans caribeño",
          "testo": "Arroz y frijoles cocidos en leche de coco, con pollo o pescado."
        },
        {
          "nome": "Pollo y pescado al coco",
          "testo": "Especialidad caribeña, en pequeños locales del pueblo."
        },
        {
          "nome": "Patacones y ceviche",
          "testo": "Plátano frito y ceviche fresco, cerca de las playas."
        },
        {
          "nome": "Pan bon",
          "testo": "Pan dulce caribeño con fruta, típico de estas costas."
        }
      ],
      "attenzioni": [
        "Robos en playas y bungalows: no dejar nada sin vigilancia.",
        "El mar y las corrientes en Playa Cocles son fuertes: bañarse con prudencia.",
        "El tiempo caribeño es más lluvioso e imprevisible que el del Pacífico: dejar margen de días."
      ],
    gite: [
      {
        nome: "Bocas del Toro (Panamá)",
        distanza: "medio día de viaje por Sixaola",
        come: "Bus hasta Sixaola, el puente a pie, luego bus o taxi colectivo hasta Almirante y taxi acuático; mejor con algunas noches.",
        testo: "El archipiélago caribeño de Panamá, con las casas sobre pilotes de Bocas Town, las playas de Isla Bastimentos y las estrellas de mar de Playa Estrella.",
      },
      {
        nome: "Pueblo de Cahuita",
        distanza: "unos 16 km, 20 minutos",
        come: "En bus, taxi o bici.",
        testo: "El pueblo más pequeño y tranquilo de la costa, con la Playa Negra de Cahuita, sodas de cocina caribeña y la entrada al parque con donación.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Puerto Viejo?",
        risposta: "Dos días bastan para la costa en bici y el parque de Cahuita; con un tercero se añaden Manzanillo, Gandoca y Ara Manzanillo. El tiempo es impredecible: un día de margen ayuda.",
      },
      {
        domanda: "¿Qué playa es mejor para nadar?",
        risposta: "Punta Uva, con agua normalmente tranquila; en Cocles y Playa Negra hay olas y corrientes, mejor para el surf. Hay que bañarse donde nadan los demás.",
      },
      {
        domanda: "¿Se paga la entrada al Parque Cahuita?",
        risposta: "En la entrada de Playa Blanca, en el pueblo de Cahuita, se deja una donación; el sector Puerto Vargas tiene tarifa fija. Con el tour guiado la entrada suele estar incluida.",
      },
      {
        domanda: "¿Es seguro Puerto Viejo?",
        risposta: "De día sí, con las precauciones normales: los robos en la playa y en los bungalows son frecuentes. De noche conviene moverse acompañados, sobre todo las chicas solas.",
      },
      {
        domanda: "¿Cómo se va de Puerto Viejo a Bocas del Toro?",
        risposta: "En bus hasta Sixaola, a pie por el puente hasta Guabito, luego bus o taxi colectivo hasta Almirante y taxi acuático a Bocas Town. A la salida se pagan 8 dólares de impuesto y Panamá va una hora adelantado.",
      },
      {
        domanda: "¿Cuándo ir a la costa caribeña?",
        risposta: "Se puede ir todo el año; septiembre y octubre suelen ser aquí los meses más secos, al revés que en el Pacífico. El tiempo sigue siendo más lluvioso e impredecible: conviene dejar margen.",
      },
    ],
    esperienzeSlugs: ['tour-cahuita'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'La playa caribeña de Punta Uva cerca de Puerto Viejo, Costa Rica',
    immagine: '/images/costa-rica/puerto-viejo-stock.jpg',
  },
  {
    slug: 'tortuguero',
    paeseSlug: 'costa-rica',
    ordine: 3,
    nome: 'Tortuguero',
    tipologia: ['natura', 'giungla'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: 'Un pequeño pueblo sin carreteras para coches, al que solo se llega en barco por los canales de la selva, con kayak al amanecer entre los manglares.',
    percheAndarci: 'Por el trayecto en barco, que ya es uno de los traslados más bonitos del viaje.',
    cosaVedere: ['Los canales de Tortuguero, entre cocodrilos, caimanes y aves', 'Cerro Tortuguero, colina panorámica con vistas a toda la zona'],
    cosaFare: [
      'Navegación en barco de Moín a Tortuguero (hay una ficha de experiencia dedicada)',
      'Kayak al amanecer entre los manglares (hay una ficha de experiencia dedicada)',
      'Cerro Tortuguero por libre',
      'Excursión nocturna a la anidación de las tortugas (de temporada, julio-octubre)',
    ],
    doveDormire:
      'Hotel Icaco Tortuguero: ubicación cómoda, justo frente a la playa del parque, check-in y check-out rápidos. Algunas reseñas juzgan las habitaciones pequeñas y esenciales para el precio. Gama media-baja.\n\nAlternativas: económicas: La Casona de Tortuguero, Cabinas Miss Junie · gama media: Aracari Garden Hotel · lujo: Tortuga Lodge & Gardens, Manatus Hotel.',
    doveMangiare: 'Taylor\'s Place o Mi Niño en el pueblo; cena incluida en el hotel.',
    comeArrivare: "Al pueblo no llegan carreteras: solo se llega en lancha o en avioneta. Desde Puerto Viejo o Limón se va en furgoneta hasta el puerto de Moín (aproximadamente 1h30) y luego son 3 horas de navegación por los canales. Desde San José la ruta más usada pasa por Cariari hasta el muelle de La Pavona, donde se toma la lancha al pueblo; muchos lodges venden el traslado completo. La pista de Tortuguero recibe vuelos nacionales desde San José.",
    comeSpostarsi: 'A pie: el pueblo no tiene carreteras para coches. Kayak y barco para las excursiones.',
    periodoMigliore: 'julio-octubre para la anidación de las tortugas',
    costi: "Cerro Tortuguero 6$ lancha + 3$ entrada; tour nocturno de tortugas unos 40$ por persona; parque nacional en torno a 15 dólares, en línea en el portal del SINAC. Presupuesto diario por persona, orientativo para 2026: bajo 60-90 € (cabinas en el pueblo, sodas, tours compartidos); medio 130-190 € (hotel con cena, kayak y salidas guiadas); alto desde 250 € (paquete en lodge en los canales con traslados, comidas y tours).",
    erroriDaEvitare: [],
    miaEsperienza:
      "Tortuguero es precioso. Se parece mucho a la Amazonia y es fantástico para la naturaleza. Ya el trayecto en barco desde Moín, entre canales de selva con cocodrilos y monos en las orillas, fue uno de los traslados más bonitos de todo el viaje.",
    luoghi: [
      {
        nome: "Canales de Tortuguero",
        testo: "Una red de canales de manglar y selva en el noreste, habitada por caimanes, cocodrilos, monos, garzas y martines pescadores. Se parece mucho a la Amazonía; se navega en lancha con motor de bajo impacto, con guía.",
        come: "Salida en lancha desde el pueblo con guía y entrada al parque.",
        quando: "Temprano, por los animales y la luz.",
        tempo: "2-3 horas",
        costo: "Entrada al parque en torno a 15 USD, unos 13 €, en línea en el portal del SINAC, más lancha y guía",
        lat: 10.4232,
        lng: -83.4967,
        url: "https://serviciosenlinea.sinac.go.cr/",
        consiglio: "El traslado desde Moín, entre canales y selva, es uno de los más bonitos del viaje y vale como experiencia por sí mismo.",
      },
      {
        nome: "Kayak al amanecer en los manglares",
        testo: "Dos horas de kayak en silencio por los canales laterales, individual o doble, sin motor, para acercarse a aves y reptiles en el mejor momento del día. Hay una ficha de experiencia dedicada.",
        come: "Con guía del lodge, salida antes del amanecer.",
        quando: "Al amanecer, volviendo para el desayuno.",
        tempo: "2 horas",
      },
      {
        nome: "Cerro Tortuguero",
        testo: "Un cerro volcánico al norte del pueblo, la única elevación de la zona, con una subida corta por la selva hasta un mirador sobre canales, mar y bosque.",
        come: "Por libre: una travesía corta en lancha desde el pueblo hasta el inicio del sendero.",
        quando: "Por la mañana o la tarde de llegada.",
        tempo: "1-1,5 horas",
        costo: "6 USD de lancha más 3 USD de entrada, unos 8 €",
        lat: 10.5851,
        lng: -83.5278,
        consiglio: "Llevar agua y repelente: en el bosque húmedo hay muchos mosquitos.",
      },
      {
        nome: "Anidación de tortugas",
        testo: "En temporada las tortugas verdes desovan en la playa de noche: Tortuguero es uno de los sitios de anidación más importantes del Atlántico. Solo se observan con guías certificados, en grupos pequeños y con reglas estrictas.",
        come: "Tour nocturno con guía certificado, reservado en el pueblo.",
        quando: "De noche, normalmente entre julio y octubre; conviene preguntar en el lugar.",
        tempo: "2-3 horas",
        costo: "Unos 40 USD por persona, unos 34 €",
        consiglio: "Ropa oscura, sin luces ni flash: se sigue al guía y se mantiene la distancia.",
      },
      {
        nome: "Sendero El Gavilán",
        testo: "El sendero a pie del parque nacional, desde la estación Cuatro Esquinas al sur del pueblo, entre bosque inundado y playa. Se ven monos aulladores, ranas y aves; a menudo se camina por el barro.",
        come: "A pie desde el pueblo; en la entrada se alquilan botas de hule.",
        quando: "Por la mañana.",
        tempo: "1,5-2 horas",
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Playa de Tortuguero",
        testo: "La larga playa de arena oscura en el Caribe frente al pueblo, donde anidan las tortugas. Es bonita para caminar, pero no para bañarse: corrientes fuertes y mar abierto.",
        come: "A pie desde el pueblo.",
        quando: "Al atardecer.",
        tempo: "1 hora",
        costo: "Gratis",
        lat: 10.54225,
        lng: -83.50175,
      },
      {
        nome: "Centro de visitantes de la Sea Turtle Conservancy",
        testo: "El pequeño museo de la organización que estudia las tortugas de Tortuguero desde los años cincuenta, con paneles y vídeos sobre la tortuga verde. Una buena forma de entender lo que se verá de noche.",
        come: "A pie, en el extremo norte del pueblo.",
        quando: "Por la tarde, antes del tour nocturno.",
        tempo: "30-45 minutos",
        lat: 10.54715,
        lng: -83.50502,
      },
      {
        nome: "Pueblo de Tortuguero",
        testo: "Un pueblo sin carreteras para coches, entre el canal y el mar, con casas de madera de colores, tiendas de recuerdos y sodas. Todo se recorre a pie; frente al muelle hay un pequeño supermercado y un tanque de agua potable gratuita.",
        come: "A pie desde el muelle.",
        quando: "Por la tarde y por la noche.",
        tempo: "1 hora",
        costo: "Gratis",
      },
    ],
    programmi: [
      { titolo: "Por la ruta desde Moín", tappe: [
        "1h30 de furgoneta hasta el puerto de Moín",
        "3 horas de lancha por los canales, con comida a bordo",
        "Tarde: pueblo y Cerro Tortuguero",
      ] },
      { titolo: "2 días", tappe: [
        "Día 1: lancha desde Moín, pueblo, Cerro Tortuguero, tortugas por la noche en temporada",
        "Día 2: kayak al amanecer, desayuno, salida en lancha hacia Sarapiquí o La Pavona",
      ] },
      { titolo: "3 días", tappe: [
        "Día 1: llegada, pueblo y playa al atardecer",
        "Día 2: kayak al amanecer, sendero El Gavilán, centro de la Sea Turtle Conservancy, anidación nocturna en temporada",
        "Día 3: canales en lancha por la mañana, Cerro Tortuguero y salida",
      ] },
    ],
    zone: [
      {
        nome: "Lodges en los canales",
        perChi: "quien quiere sumergirse en la naturaleza",
        testo: "Paquetes con comidas, excursiones y traslados, aislados y tranquilos en la otra orilla del canal. A menudo los únicos servicios son los del lodge.",
        fascia: "da 250 € a persona in pacchetto",
      },
      {
        nome: "Pueblo de Tortuguero",
        perChi: "presupuesto e independencia",
        testo: "Cabinas sencillas y pequeños hoteles, restaurantes y guías a pie, con el ruido del pueblo.",
      },
      {
        nome: "Frente a la playa del parque",
        perChi: "comodidad",
        testo: "Hoteles en el pueblo frente a la playa, cómodos para la anidación y la entrada al sendero; habitaciones a menudo pequeñas y básicas.",
      },
    ],
      "sapori": [
        {
          "nome": "Casado caribeño",
          "testo": "Arroz, frijoles, pescado o pollo al coco."
        },
        {
          "nome": "Pescado de río y de mar",
          "testo": "Camarones y pescado fresco, fritos o a la plancha."
        },
        {
          "nome": "Fruta tropical",
          "testo": "Papaya, piña y plátanos de los alrededores."
        },
        {
          "nome": "Gallo pinto",
          "testo": "Para el desayuno, con huevos y plátano."
        }
      ],
      "attenzioni": [
        "La región es muy lluviosa todo el año: chaqueta impermeable y fundas.",
        "En el parque las reglas sobre la anidación son estrictas: sin luces ni flash, solo con guía autorizado.",
        "Mosquitos y humedad: repelente y ropa ligera de manga larga."
      ],
    gite: [
      {
        nome: "Parismina",
        distanza: "al sur por los canales, en lancha",
        come: "Lancha privada o parada durante el traslado desde Moín.",
        testo: "Un pueblo afrocaribeño entre el canal y el mar, con un proyecto comunal de protección de tortugas y mucha menos gente que Tortuguero.",
      },
      {
        nome: "Barra del Colorado",
        distanza: "al norte por los canales, en lancha",
        come: "Lancha privada desde Tortuguero; se organiza con el lodge.",
        testo: "El refugio de vida silvestre más grande del Caribe costarricense, hacia la frontera con Nicaragua, con lagunas, bosque inundado y pesca deportiva del sábalo.",
      },
    ],
    faq: [
      {
        domanda: "¿Cómo se llega a Tortuguero?",
        risposta: "Solo en lancha o avión: desde Moín, cerca de Limón, son 3 horas de navegación; desde San José se pasa por Cariari y el muelle de La Pavona. Muchos lodges venden el traslado completo.",
      },
      {
        domanda: "¿Cuántos días hacen falta en Tortuguero?",
        risposta: "Una noche basta para el viaje en lancha, el Cerro y el kayak al amanecer; con dos se añaden el sendero del parque y, en temporada, la anidación sin prisas.",
      },
      {
        domanda: "¿Cuándo se ven las tortugas?",
        risposta: "Las tortugas verdes suelen anidar entre julio y octubre, pero la temporada hay que confirmarla en el lugar. Solo se sale de noche con guías certificados.",
      },
      {
        domanda: "¿Se puede nadar en Tortuguero?",
        risposta: "En el mar no: las corrientes fuertes y el oleaje de mar abierto lo desaconsejan. Muchos lodges tienen piscina.",
      },
      {
        domanda: "¿Hace falta un paquete o se puede ir por libre?",
        risposta: "Se puede ir por libre, contratando lancha, cabinas y guías en el pueblo. Los paquetes de los lodges cuestan más pero incluyen traslados, comidas y salidas.",
      },
      {
        domanda: "¿Qué tiempo hace en Tortuguero?",
        risposta: "Llueve mucho todo el año, incluso en meses secos en otras zonas. Hacen falta chubasquero, fundas para móvil y cámara y ropa ligera de manga larga.",
      },
    ],
    esperienzeSlugs: ['barca-tortuguero', 'kayak-tortuguero'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Un canal de selva hacia el pueblo de Tortuguero, Costa Rica',
    immagine: '/images/costa-rica/tortuguero-stock.jpg',
  },
  {
    slug: 'sarapiqui',
    paeseSlug: 'costa-rica',
    ordine: 4,
    nome: 'Sarapiquí',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: 'Un lodge inmerso en el bosque, con rafting en el río Sarapiquí y una clase de cocina para aprender a preparar platos tradicionales.',
    percheAndarci: 'Por el rafting en el Sarapiquí, más regular y apto también para principiantes frente al más extremo Pacuaré.',
    cosaVedere: ['El bosque alrededor del Epic Adventure Lodge', 'Las Cataratas Bajas del Toro (excursión opcional)'],
    cosaFare: [
      'Rafting en el río Sarapiquí (hay una ficha de experiencia dedicada)',
      'Clase de cocina incluida en el lodge (típicamente empanadas)',
      'Excursión opcional a las Cataratas Bajas del Toro',
    ],
    doveDormire:
      'Epic Adventure Lodge, apreciado por la cercanía al río, el desayuno abundante y la calidez de los propietarios. La única nota discordante son pequeñas carencias, como mosquiteros y ganchos para toallas. Gama media.\n\nAlternativas: económicas: Hotel El Bambú, Perla Verde Hostel · gama media: La Quinta de Sarapiquí Lodge · lujo: Sueño Azul Resort, Islas del Río.',
    doveMangiare: 'La clase de cocina en el lodge, que se convierte también en la cena; Restaurante Mirador Tinamú.',
    comeArrivare: '1h30 en barco desde Tortuguero más 2h30 en van.',
    comeSpostarsi: 'Van privada; a pie en el lodge.',
    periodoMigliore: 'todo el año, el Sarapiquí es más constante que el Pacuaré',
    costi: 'Comida de picnic para Bajos del Toro unos 12$ por persona.',
    erroriDaEvitare: ['Hacer provisión de bebidas en el supermercado por el camino antes de llegar al lodge'],
    miaEsperienza:
      'La clase de cocina en el lodge, con las empanadas preparadas a mano que luego se convirtieron en nuestra cena, fue un momento de convivencia distinto del resto del viaje, más lento y más verdadero.',
      "luoghi": [
        {
          "nome": "Rafting en el Río Sarapiquí",
          "testo": "Un descenso por el río con rápidos y selva. Hay una ficha de experiencia dedicada.",
          "come": "Tour organizado desde el lodge o con operadores locales, con guía y equipo.",
          "quando": "Mañana.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Clase de cocina en el lodge",
          "testo": "Lección de cocina costarricense, típicamente empanadas hechas a mano que se convierten en la cena.",
          "come": "Incluida en el paquete del lodge.",
          "quando": "Tarde.",
          "tempo": "2 horas",
          "consiglio": "Un momento de convivencia, más lento y más real que el resto del viaje."
        },
        {
          "nome": "Selva del lodge",
          "testo": "Senderos en la selva alrededor del lodge, con aves, ranas y monos.",
          "come": "A pie desde el lodge con guía.",
          "quando": "Amanecer.",
          "tempo": "1-2 horas"
        },
        {
          "nome": "Catarata del Toro",
          "testo": "Una catarata que cae dentro de un antiguo cráter volcánico, en el bosque de Bajos del Toro, con cuatro miradores arriba. Excursión opcional.",
          "come": "En coche o con un tour; está más o menos a mitad de camino entre el aeropuerto de San José y La Fortuna, por carretera asfaltada. No hace falta reservar.",
          "quando": "De lunes a sábado de 7 a 17; cerrada los domingos.",
          "tempo": "Media jornada",
          "costo": "15 USD (web oficial, 2026).",
          "url": "https://www.catarata-del-toro.com/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: rafting",
            "Almuerzo en el lodge",
            "Tarde: clase de cocina"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: rafting y clase de cocina",
            "Día 2: senderos en el bosque del lodge, luego traslado hacia Arenal"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lodge en la selva",
          "perChi": "quien busca naturaleza",
          "testo": "Alojamientos aislados, con actividades incluidas, pero lejos de los pueblos."
        }
      ],
      "sapori": [
        {
          "nome": "Empanadas",
          "testo": "Hechas a mano en la clase de cocina."
        },
        {
          "nome": "Casado",
          "testo": "El plato del día con arroz y frijoles."
        },
        {
          "nome": "Fruta tropical",
          "testo": "Piña y plátanos de la región."
        },
        {
          "nome": "Café y cacao",
          "testo": "Cultivados en la zona; para probar en los lodges."
        }
      ],
      "attenzioni": [
        "Rafting: usar siempre casco y chaleco proporcionados por el operador y seguir al guía.",
        "La zona es lluviosa y húmeda: impermeable y ropa de repuesto.",
        "Mosquitos e insectos: repelente."
      ],
    esperienzeSlugs: ['rafting-sarapiqui'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'La selva tropical alrededor de un lodge en Sarapiquí, Costa Rica',
    immagine: '/images/costa-rica/sarapiqui-stock.jpg',
  },
  {
    slug: 'arenal',
    paeseSlug: 'costa-rica',
    ordine: 5,
    nome: 'Arenal y La Fortuna',
    tipologia: ['natura', 'vulcani'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: 'El volcán Arenal, la Cascada de La Fortuna y las aguas termales gratuitas de El Chollín, mucho más auténticas que los baños de pago "de postal".',
    percheAndarci: 'Por las aguas termales gratuitas de El Chollín, uno de los momentos más bonitos y menos "de postal" de todo el viaje.',
    cosaVedere: ['El volcán Arenal', 'La Cascada de La Fortuna', 'Las aguas termales de El Chollín'],
    cosaFare: [
      'Baño en la Cascada de La Fortuna (hay una ficha de experiencia dedicada)',
      'Trekking al volcán en el Mirador El Silencio (opcional)',
      'Puentes colgantes de Mistico Hanging Bridges (opcional)',
      'Aguas termales gratuitas de El Chollín',
      'Canyoning en el Lost Canyon (lo hicimos: es la actividad que más recomiendo en La Fortuna)',
    ],
    doveDormire:
      'Hotel Campos Arenal: entre los puntos fuertes más citados están la vista del volcán desde la piscina, el desayuno abundante y la ubicación cómoda. El defecto recurrente es el camino de tierra de acceso, resbaladizo cuando llueve. Gama media.\n\nAlternativas: económicas: Arenal Backpackers Resort, Gringo Pete\'s · gama media: Volcano Lodge & Springs · lujo: Nayara Springs, Tabacón Thermal Resort & Spa.',
    doveMangiare: 'Nanku Restaurant con música en vivo; Soda Víquez para la cocina tradicional y económica; Spectacular Cantina (mexicano).',
    usciteSerali: 'Selina o Lava Lounge.',
    comeArrivare: "Desde Sarapiquí hay 1 hora y 20 minutos de furgoneta. Desde San José y el aeropuerto Juan Santamaría (SJO) son unas 3 horas en coche, por San Ramón o Ciudad Quesada; los autobuses públicos salen de San José, a menudo con cambio en Ciudad Quesada, y tardan más. Desde el aeropuerto de Liberia (LIR) son unas 2,5-3 horas. Hacia y desde Monteverde se va por la carretera de montaña alrededor del lago, unas 3-3,5 horas, o con el traslado jeep-bote-jeep que cruza el Lago Arenal.",
    comeSpostarsi: 'Minivan a disposición durante todo el día.',
    periodoMigliore: 'última hora de la tarde para las aguas termales',
    costi: "Catarata de La Fortuna 18-20$; tour combinado 90-120$ por persona; canyoning en Lost Canyon 115-119$. Las actividades de La Fortuna son caras: conviene elegir pocas y bien hechas. Presupuesto diario por persona, orientativo para 2026: bajo 60-90 € (hostal, sodas, El Chollín gratis y la catarata); medio 140-200 € (hotel con vista al volcán, una actividad al día); alto desde 300 € (resort termal, canyoning y tours privados).",
    erroriDaEvitare: ['En las aguas de El Chollín no hay vestuarios: bastan zapatos de río, bañador y linterna frontal, sin toallas'],
    miaEsperienza:
      "La Fortuna es bonita, pero algo overtouristy. Las actividades son caras, pero buenísimas, sobre todo el canyoning, que hicimos y que recomiendo. Las aguas termales gratuitas de El Choyin, en un tramo de río natural, nos parecieron mucho más auténticas que los baños de pago de la zona.",
    luoghi: [
      {
        nome: "Catarata de La Fortuna",
        testo: "Una catarata de unos 70 metros en un cañón de selva, con unos 530 escalones entre bajada y subida y una poza para bañarse en la base. Probablemente es la catarata más fotografiada del país. Hay una ficha de experiencia dedicada.",
        come: "Pocos minutos en coche o taxi desde el pueblo de La Fortuna, luego escaleras empinadas hasta la base.",
        quando: "Por la mañana, con menos gente.",
        tempo: "2 horas",
        costo: "20 USD para extranjeros, unos 17 € (2025); se paga aunque solo se vaya al mirador",
        orari: "Todos los días de 7 a 17 h",
        lat: 10.43919,
        lng: -84.66933,
        url: "https://www.cataratariofortuna.com/",
        consiglio: "La vuelta es toda en subida: calzado con agarre y agua.",
      },
      {
        nome: "El río termal gratuito de El Chollín",
        testo: "Un tramo del río Tabacón con agua caliente natural y acceso público, a pocos pasos de los resorts termales. No confundir con El Choyín, un complejo de pago en el mismo río. Es uno de los mejores momentos de la zona, y de los menos de postal.",
        come: "En coche o taxi desde La Fortuna; se aparca en la carretera, a menudo con un cuidador, y se baja a pie al río por un tramo corto.",
        quando: "Al final de la tarde, o temprano: los fines de semana y festivos se llena.",
        tempo: "1-2 horas",
        costo: "Gratis",
        lat: 10.49145,
        lng: -84.72491,
        consiglio: "No hay duchas, taquillas ni vestuarios: escarpines, bañador y una linterna frontal en una bolsa estanca, y nada de valor en el coche.",
      },
      {
        nome: "Puentes colgantes de Mistico",
        testo: "Un sendero de unos 3,2 km en la selva cerca del Arenal, con 16 puentes, 6 de ellos colgantes; los más altos pasan a unos 45 metros sobre el bosque. Hay quien lo encuentra algo por debajo de lo esperado: con guía se ven muchos más animales.",
        come: "En coche o taxi desde La Fortuna; se va solo o con guía, que hay que reservar.",
        quando: "Temprano, por los animales.",
        tempo: "2-3 horas",
        costo: "Desde 32 USD más impuestos solo, desde 44 USD con guía, unos 28-38 € (2026)",
        orari: "Todos los días desde las 6; último acceso al sendero a las 15.50",
        lat: 10.48805,
        lng: -84.75378,
        url: "https://www.misticopark.com/",
      },
      {
        nome: "Parque Nacional Volcán Arenal",
        testo: "El parque estatal alrededor del volcán, con senderos sobre las coladas de lava de 1992, una gran ceiba y miradores sobre el cono y el lago. Al cráter no se sube: el volcán está en reposo desde 2010 pero la cima sigue cerrada.",
        come: "En coche, unos 30 minutos desde La Fortuna hacia el lago; entradas en el portal del SINAC.",
        quando: "Por la mañana, cuando el cono suele estar más despejado.",
        tempo: "2-3 horas",
        lat: 10.46306,
        lng: -84.70306,
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Arenal 1968",
        testo: "Una reserva privada junto al parque nacional, con senderos por la selva y sobre la colada de la erupción de 1968, que destruyó los pueblos al pie del volcán. Desde el sendero más largo, unas dos horas, se ven juntos el cono y el lago.",
        come: "En coche o taxi desde La Fortuna, en la carretera hacia el parque nacional.",
        quando: "Temprano o al final de la tarde.",
        tempo: "2 horas",
        lat: 10.46641,
        lng: -84.73621,
        url: "https://www.arenal1968.com/",
      },
      {
        nome: "Mirador El Silencio",
        testo: "Una caminata por la selva en las faldas del volcán hasta un mirador con muy buenas vistas del cono. Es una de las tres actividades del tour combinado más habitual de La Fortuna, junto con la catarata y las termas.",
        come: "Por libre o dentro del tour combinado de 90 dólares con catarata y termas.",
        quando: "Por la mañana, antes de que las nubes tapen el volcán.",
        tempo: "2 horas",
        costo: "Unos 10 USD por separado, unos 9 €",
      },
      {
        nome: "Canyoning en el Lost Canyon",
        testo: "Descenso en rápel por cascadas y paredes de roca en un cañón de selva, con un operador que pone el equipo y el transporte. Es la actividad que más recomiendo en La Fortuna: mucha adrenalina, solo con operadores serios.",
        come: "Reserva con el operador, con recogida en el hotel y comida incluida.",
        quando: "Por la mañana, o a primera hora de la tarde.",
        tempo: "Medio día",
        costo: "115-119 USD por persona, unos 100 €",
      },
      {
        nome: "Termas de Tabacón",
        testo: "El resort termal más famoso de la zona, construido sobre el río caliente Tabacón, con piscinas y cascadas de agua termal en un jardín tropical. Muchos resorts venden un pase de día con cena; es caro comparado con el río gratuito.",
        come: "En coche o taxi, unos 15 minutos desde La Fortuna; pase de día con reserva.",
        quando: "Por la noche, después de un día de actividades.",
        tempo: "3 horas",
        lat: 10.48781,
        lng: -84.72299,
        consiglio: "Para termas más sencillas y con barbacoa están también las Termalitas del Arenal, de pago.",
      },
      {
        nome: "Lago Arenal y represa Sangregado",
        testo: "El lago artificial más grande del país, al oeste del volcán, creado por la represa Sangregado. Desde la represa y la carretera de la orilla están los miradores más amplios sobre el Arenal, y al atardecer se ven a menudo pizotes al borde del camino.",
        come: "En coche, unos 30 minutos desde La Fortuna; la represa se cruza en coche.",
        quando: "Al atardecer.",
        tempo: "1 hora",
        costo: "Gratis",
        lat: 10.4752,
        lng: -84.76079,
        consiglio: "No dar de comer a los pizotes, aunque se acerquen a los coches.",
      },
      {
        nome: "Pueblo de La Fortuna",
        testo: "El pueblo al pie del volcán, con la iglesia y el parque central desde donde se ve el cono cuando está despejado. Tiene agencias, sodas y restaurantes para todos los bolsillos y es la base de todas las excursiones.",
        come: "A pie.",
        quando: "Por la noche, para cenar.",
        tempo: "1 hora",
        costo: "Gratis",
        lat: 10.47144,
        lng: -84.64472,
      },
    ],
    programmi: [
      { titolo: "1 día", tappe: [
        "Mañana: Catarata de La Fortuna",
        "Comida en La Fortuna",
        "Tarde: Mirador El Silencio o puentes de Mistico",
        "Final de la tarde: río termal gratuito de El Chollín",
      ] },
      { titolo: "2 días", tappe: [
        "Día 1: catarata, puentes colgantes y termas",
        "Día 2: canyoning en el Lost Canyon por la mañana, parque nacional o Arenal 1968 por la tarde, atardecer en la represa",
      ] },
      { titolo: "3 días", tappe: [
        "Días 1-2 como arriba",
        "Día 3: Río Celeste en el Parque Nacional Volcán Tenorio, o una tarde en Tabacón",
      ] },
    ],
    zone: [
      {
        nome: "La Fortuna",
        perChi: "servicios y tours",
        testo: "El pueblo tiene restaurantes, agencias y hoteles, muchos con vista al volcán; todo a pie o a pocos minutos en taxi.",
        fascia: "70-150 €",
      },
      {
        nome: "Carretera del volcán",
        perChi: "termas y lujo",
        testo: "Resorts con piscinas termales y lodges en la selva entre La Fortuna y el lago; hace falta coche para cenar fuera.",
        fascia: "150-280 €",
      },
      {
        nome: "El Castillo",
        perChi: "quien busca silencio",
        testo: "Un pueblo en el lado sur del lago, con cabañas y pequeños lodges frente al volcán; el camino es en parte de lastre.",
      },
    ],
      "sapori": [
        {
          "nome": "Casado",
          "testo": "Arroz, frijoles, ensalada y carne o pescado."
        },
        {
          "nome": "Gallo pinto",
          "testo": "Para el desayuno, con huevos."
        },
        {
          "nome": "Olla de carne",
          "testo": "Guiso de res con yuca, plátano y maíz."
        },
        {
          "nome": "Pescado de lago",
          "testo": "Tilapia frita, en restaurantes de la zona."
        }
      ],
      "attenzioni": [
        "La escalera a la cascada de La Fortuna es larga y el regreso es todo cuesta arriba.",
        "Las termas de pago son caras: valorar las gratuitas.",
        "Canyoning: muy adrenalínico, solo con operadores serios. Nosotros lo hicimos y es precioso.",
        "La Fortuna es algo overtouristy y las actividades son caras: elegir pocas cosas y hacerlas bien."
      ],
    gite: [
      {
        nome: "Río Celeste",
        distanza: "aproximadamente 1,5-2 horas",
        come: "En coche o tour organizado; entrada al Parque Nacional Volcán Tenorio con reserva en el portal del SINAC.",
        testo: "El río de agua azul lechoso en la selva del Tenorio, con una catarata y el punto donde dos quebradas se unen y cambian de color. En el parque no se permite bañarse.",
      },
      {
        nome: "Bajos del Toro",
        distanza: "aproximadamente 1,5-2 horas",
        come: "En coche; la zona cierra al final de la tarde, así que hay que llegar a primera hora de la tarde.",
        testo: "La «capital de las cataratas» de Costa Rica, con la Catarata del Toro y las cataratas gemelas en un valle entre dos parques nacionales. Es más tranquila que La Fortuna.",
      },
      {
        nome: "Caño Negro",
        distanza: "aproximadamente 1,5-2 horas al norte",
        come: "Tour de un día con paseo en lancha por el Río Frío, o en coche hasta el pueblo.",
        testo: "Refugio de humedales cerca de la frontera con Nicaragua, con caimanes, garzas, espátulas y martines pescadores. La época seca concentra las aves en las lagunas.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en La Fortuna?",
        risposta: "Un día basta para la catarata, una caminata y las termas; con dos se añaden el canyoning, el parque nacional y el lago. El tercero es para el Río Celeste.",
      },
      {
        domanda: "¿Hay termas gratuitas en La Fortuna?",
        risposta: "Sí, el tramo público del río Tabacón en El Chollín, sin servicios. Los resorts como Tabacón o las Termalitas del Arenal son de pago, con piscinas, duchas y cena.",
      },
      {
        domanda: "¿Se puede subir al volcán Arenal?",
        risposta: "No, la cima está cerrada. Se camina por las faldas y las antiguas coladas en el parque nacional, en Arenal 1968 o en el Mirador El Silencio.",
      },
      {
        domanda: "¿Cuánto cuesta la Catarata de La Fortuna?",
        risposta: "20 dólares para extranjeros (2025), abierta todos los días de 7 a 17 h. Son unos 530 escalones entre bajada y subida.",
      },
      {
        domanda: "¿La Fortuna o Monteverde?",
        risposta: "Son distintas y casi todos hacen las dos: La Fortuna tiene el volcán, las cataratas y las termas; Monteverde el bosque nuboso, las caminatas nocturnas y los canopy más largos. Entre ambas hay unas 3-3,5 horas de carretera.",
      },
      {
        domanda: "¿Cuándo se ve el volcán sin nubes?",
        risposta: "Normalmente temprano y en la época seca, de diciembre a abril. El resto del año el cono suele estar cubierto, pero se despeja a ratos.",
      },
    ],
    esperienzeSlugs: ['cascata-fortuna-termales'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'El volcán Arenal visto desde La Fortuna, Costa Rica',
    immagine: '/images/copertine/costa-rica-360.jpg',
  },
  {
    slug: 'monteverde',
    paeseSlug: 'costa-rica',
    ordine: 6,
    nome: 'Monteverde',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: 'El bosque nuboso de Monteverde, con una plantación de café, una caminata nocturna para ver la fauna y algunas de las mejores tirolinas del país.',
    percheAndarci: 'Por el bosque nuboso y por las tirolinas, consideradas de las mejores de Costa Rica y más largas que las de La Fortuna.',
    cosaVedere: ['El bosque nuboso de Monteverde', 'Una plantación de café'],
    cosaFare: [
      'Visita a una plantación de café con degustación',
      'Caminata nocturna por el bosque nuboso (hay una ficha de experiencia dedicada)',
      'Tirolina aventura (hay una ficha de experiencia dedicada)',
      'Birdwatching al amanecer (opcional, guía Jason)',
    ],
    doveDormire:
      'Hotel Jardines de Monteverde: jardines cuidados, mucha fauna que observar sin salir del alojamiento, personal siempre citado como amable. Algunas reseñas más recientes señalan habitaciones y baños algo anticuados. Gama media-baja.\n\nAlternativas: económicas: Pensión Santa Elena, Monteverde Backpackers · gama media: Cloud Forest Lodge · lujo: Hotel Belmar, Monteverde Lodge & Gardens.',
    doveMangiare: 'Tree House (supermercado al lado); Tico y Rico, The Green Restaurant, Sabor Tico.',
    comeArrivare: "Desde La Fortuna son unas 3-3,5 horas de furgoneta por carreteras de montaña lentas y llenas de curvas, o el traslado jeep-bote-jeep cruzando el Lago Arenal. Desde San José y el aeropuerto Juan Santamaría son unas 3,5-4 horas: se deja la Interamericana y los últimos kilómetros suben hasta Santa Elena, a unos 1.400 metros. Los autobuses públicos salen de San José y de Puntarenas. Hacia el Pacífico y Uvita hay que contar hasta 4 horas.",
    comeSpostarsi: 'Van privada para las excursiones.',
    periodoMigliore: 'primera hora de la mañana para birdwatching y tirolina',
    costi: "Caminata nocturna (Kinkajou Night Walk) 28$ por persona; canopy unos 60$ por persona; observación de aves 50$ por persona. Presupuesto diario por persona, orientativo para 2026: bajo 60-90 € (hostal o pensión en Santa Elena, sodas, una reserva sin guía); medio 130-190 € (hotel con jardín, guía en la reserva, canopy o caminata nocturna); alto desde 280 € (lodge en el bosque, tours privados).",
    erroriDaEvitare: ['No tener miedo de pedirle al guía que acorte la caminata nocturna si dura demasiado: por la duración no gusta a todos por igual'],
    miaEsperienza:
      "En Monteverde está la tirolina gigante, y es una pasada. También estuvo bien la caminata nocturna por el bosque nuboso, con la fauna que solo se mueve después del atardecer, aunque a alguno la duración (1h30) se le puede hacer larga.",
    luoghi: [
      {
        nome: "Reserva Bosque Nuboso Monteverde",
        testo: "Selva de altura envuelta en nubes, con miles de especies de plantas, aves e insectos; es la reserva histórica de la zona, donde se busca el quetzal. Se camina por senderos y por un puente colgante sobre las copas.",
        come: "En taxi o buseta desde el pueblo de Santa Elena, por una carretera de montaña lenta. Desde 2026 la entrada es con horario, reservado en línea. Mejor con guía para reconocer los animales.",
        quando: "Temprano para las aves. La niebla es parte del paisaje.",
        tempo: "3-4 horas",
        orari: "Senderos del bosque de 7.30 a 16 h; caminata nocturna a las 18 h",
        lat: 10.30345,
        lng: -84.78771,
        url: "https://cloudforestmonteverde.com/",
      },
      {
        nome: "Reserva de Santa Elena",
        testo: "Una reserva comunal al norte del pueblo, algo más alta y menos visitada que Monteverde, con 12 km de senderos y una torre de observación en el sendero Youth Challenge. Los días despejados se ve el Arenal a lo lejos.",
        come: "Buseta o taxi desde Santa Elena, unos 20 minutos; se va solo o con guía reservado.",
        quando: "Por la mañana.",
        tempo: "2-4 horas",
        lat: 10.34285,
        lng: -84.79305,
        url: "https://reservasantaelena.org/",
      },
      {
        nome: "Reserva Curi-Cancha",
        testo: "Una reserva privada entre potreros y bosque, con unos 8 km de senderos fáciles, muy apreciada por los observadores de aves: es uno de los mejores sitios para el quetzal y los momotos. Las entradas son limitadas y hay menos gente.",
        come: "Taxi desde Santa Elena, en la carretera hacia la reserva de Monteverde; también caminata nocturna.",
        quando: "Al amanecer, por las aves.",
        tempo: "2-3 horas",
        lat: 10.30661,
        lng: -84.80742,
        url: "https://www.reservacuricancha.com/",
        consiglio: "Para la observación de aves al amanecer se puede reservar un guía privado, unos 50 dólares por persona.",
      },
      {
        nome: "Bosque Eterno de los Niños, Bajo del Tigre",
        testo: "La reserva privada más grande del país, nacida de una recaudación de niños de todo el mundo. El sector Bajo del Tigre, junto a la carretera, tiene senderos cortos en un bosque más bajo y seco, y por la noche una caminata nocturna.",
        come: "A pie o en taxi desde Santa Elena, pocos minutos.",
        quando: "Por la tarde, o por la noche para la caminata nocturna.",
        tempo: "1,5-2 horas",
        lat: 10.30572,
        lng: -84.81922,
      },
      {
        nome: "Caminata nocturna en el bosque",
        testo: "Salida nocturna con guía y linterna para ver ranas, insectos, tarántulas, perezosos y otros animales que solo se mueven de noche. El Kinkajou Night Walk Tour se considera el mejor. Hay una ficha de experiencia dedicada.",
        come: "Salida tras el atardecer con guía; hacen falta linterna y calzado cerrado.",
        quando: "Por la noche, desde las 17.30-18 h.",
        tempo: "1,5 horas",
        costo: "Kinkajou Night Walk 28 USD por persona, unos 24 €",
        consiglio: "A algunos se les hace larga: se puede pedir al guía que dure entre una hora y cuarto y una hora y media. Llevar chaqueta.",
      },
      {
        nome: "Canopy de aventura",
        testo: "Un recorrido de cables sobre el bosque. Los de Monteverde están entre los mejores del país y son más largos que los de La Fortuna: 100% Aventura declara en su web el cable más largo de Costa Rica, 1.590 metros, en 10 líneas. Hay una ficha de experiencia dedicada.",
        come: "Reserva con el operador, con traslado desde el hotel; dos turnos, al amanecer y a media mañana.",
        quando: "Por la mañana.",
        tempo: "3 horas",
        costo: "Unos 60 USD; 100% Aventura desde 72 USD por persona (2026), unos 52-62 €",
        url: "https://www.aventuracanopytour.com/",
        consiglio: "Quien tras el tercer cable no se anima puede parar y recibe un reembolso del 75%.",
      },
      {
        nome: "Puentes colgantes de Selvatura y Sky Adventures",
        testo: "Dos parques privados al norte de Santa Elena con senderos de puentes colgantes a la altura de las copas, donde se ven de cerca epífitas, orquídeas y aves del dosel. Sky Adventures tiene además un teleférico; ambos combinan puentes y canopy.",
        come: "Buseta de los parques o taxi desde Santa Elena, 15-20 minutos.",
        quando: "Por la mañana, antes de las nubes de la tarde.",
        tempo: "2 horas",
      },
      {
        nome: "Finca de café",
        testo: "Visita a una finca con degustación y explicación del proceso, de la planta a la taza. Hay tours que añaden chocolate y caña de azúcar.",
        come: "Tour reservado en el lugar, con transporte.",
        quando: "A primera hora de la tarde: conviene reservar el turno con antelación.",
        tempo: "2 horas",
      },
      {
        nome: "Santa Elena",
        testo: "El pueblo donde se duerme y se come, con sodas, agencias, supermercados y el punto de salida de las busetas a las reservas. Es pequeño y se recorre a pie, pero por la noche hace frío y a menudo llueve.",
        come: "A pie.",
        quando: "Por la noche, para cenar.",
        tempo: "1 hora",
        costo: "Gratis",
        lat: 10.3175,
        lng: -84.8241,
      },
    ],
    programmi: [
      { titolo: "1 día", tappe: [
        "Mañana: Reserva de Monteverde con guía",
        "Comida en Santa Elena",
        "Tarde: finca de café",
        "Noche: caminata nocturna",
      ] },
      { titolo: "2 días", tappe: [
        "Día 1: café por la tarde y caminata nocturna",
        "Día 2: aves al amanecer en Curi-Cancha, luego canopy a media mañana",
      ] },
      { titolo: "3 días", tappe: [
        "Días 1-2 como arriba",
        "Día 3: reserva de Monteverde o de Santa Elena por la mañana, puentes colgantes por la tarde",
      ] },
    ],
    zone: [
      {
        nome: "Santa Elena",
        perChi: "servicios y presupuesto",
        testo: "Restaurantes, agencias y hoteles a pie; para las reservas hace falta taxi o buseta.",
        fascia: "50-110 €",
      },
      {
        nome: "Cerro Plano",
        perChi: "a medio camino",
        testo: "La carretera entre Santa Elena y la reserva de Monteverde, con hoteles entre jardines y Bajo del Tigre y Curi-Cancha a pocos minutos.",
        fascia: "80-170 €",
      },
      {
        nome: "Lodges en el bosque",
        perChi: "quien busca naturaleza",
        testo: "Lodges y cabañas al borde del bosque, más aislados y caros, a menudo con senderos propios.",
        fascia: "da 200 €",
      },
    ],
      "sapori": [
        {
          "nome": "Casado",
          "testo": "El plato del día con arroz, frijoles y pollo o pescado."
        },
        {
          "nome": "Café de Monteverde",
          "testo": "Cultivado en las tierras altas, con degustaciones en las fincas."
        },
        {
          "nome": "Trucha",
          "testo": "Criada en la zona, en varios restaurantes."
        },
        {
          "nome": "Queso y dulces",
          "testo": "Productos lácteos locales."
        }
      ],
      "attenzioni": [
        "Hace frío y llueve por la noche: llevar chaqueta impermeable y suéter.",
        "Los caminos de montaña hacia la reserva son estrechos y lentos: dejar tiempo, y reservar el horario de entrada en línea.",
        "Para las aves y la fauna hace falta un guía: solo se ve mucho menos."
      ],
    gite: [
      {
        nome: "Cataratas del Tigre",
        distanza: "en los alrededores, con transporte organizado",
        come: "Excursión organizada con transporte y comida incluidos.",
        testo: "Un sendero entre potreros y bosque con varias cataratas y puentes colgantes, más salvaje que las reservas; una alternativa a la finca de café por la tarde.",
      },
      {
        nome: "Lago Arenal y La Fortuna",
        distanza: "unas 3 horas en jeep-bote-jeep",
        come: "Traslado combinado en buseta y lancha por el lago; mejor como siguiente parada con una noche.",
        testo: "El volcán Arenal, la catarata de La Fortuna y las termas naturales. Cruzar el lago con el volcán enfrente es la forma más bonita de moverse entre las dos zonas.",
      },
    ],
    faq: [
      {
        domanda: "¿Qué reserva elegir en Monteverde?",
        risposta: "Monteverde es la más famosa y visitada, con entrada por horario reservada; Santa Elena es más alta y tranquila; Curi-Cancha es la favorita para las aves. Con una sola mañana, conviene una de las tres con guía.",
      },
      {
        domanda: "¿Cuántos días hacen falta en Monteverde?",
        risposta: "Dos días: uno para una reserva, café y caminata nocturna, otro para canopy y aves. Con un tercero se añaden otra reserva y los puentes colgantes.",
      },
      {
        domanda: "¿Hace falta guía en el bosque nuboso?",
        risposta: "No es obligatoria, pero solo se ve mucho menos: los guías llevan telescopio y saben dónde buscar quetzales, perezosos y ranas. Para la caminata nocturna es imprescindible.",
      },
      {
        domanda: "¿Hace frío en Monteverde?",
        risposta: "Sí, comparado con el resto del país: se está a unos 1.400 metros, por la noche baja la temperatura y llueve a menudo. Hacen falta chubasquero y jersey.",
      },
      {
        domanda: "¿Cuánto cuesta el canopy en Monteverde?",
        risposta: "Unos 60 dólares por persona para un recorrido de tres horas; 100% Aventura desde 72 dólares (2026). Hay dos turnos, al amanecer y a media mañana.",
      },
      {
        domanda: "¿Se ve el quetzal?",
        risposta: "Con guía y algo de suerte sí, sobre todo temprano entre febrero y junio, cuando anida. Curi-Cancha y la reserva de Monteverde son los mejores sitios.",
      },
    ],
    esperienzeSlugs: ['camminata-notturna-monteverde', 'zipline-monteverde'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'El bosque nuboso de Monteverde, Costa Rica',
    immagine: '/images/costa-rica/monteverde-stock.jpg',
  },
  {
    slug: 'uvita',
    paeseSlug: 'costa-rica',
    ordine: 7,
    nome: 'Uvita',
    tipologia: ['mare', 'natura', 'relax'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione: 'La costa pacífica de Costa Rica, con el whale watching y el célebre banco de arena en forma de cola de ballena, la Cola de la Ballena.',
    percheAndarci: 'Por el whale watching (en la temporada adecuada) y por uno de los paisajes más bonitos de todo el viaje, la Cola de la Ballena vista con marea baja.',
    cosaVedere: ['La Cola de la Ballena, el banco de arena en forma de cola de ballena', 'El puente de Tárcoles con los grandes cocodrilos, por el camino'],
    cosaFare: [
      'Whale watching (hay una ficha de experiencia dedicada)',
      'Paseo a caballo al atardecer por la playa en el Rancho La Merced (muy recomendado)',
      'Surf con Ariel, o alquiler de tablas en Nomadic Surf',
      'Yoga al atardecer en un deck panorámico',
    ],
    doveDormire:
      'El Tecal: la buena ubicación y el personal cordial son los aspectos más citados, pero varias reseñas señalan habitaciones y baños no siempre tan cuidados como deberían. Gama económica-media.\n\nAlternativas: económicas: Flutterby House, Cascada Verde Hostel · gama media: Eden Tica Lodge, Hotel Por Qué No? · lujo: La Cusinga Lodge, Oxygen Jungle Villas.',
    doveMangiare: 'Gastro Park de Uvita (a menudo descuento del 10% si se avisa con antelación).',
    comeArrivare: 'Hasta 4 horas de van desde Monteverde, con parada fotográfica en el puente de Tárcoles.',
    comeSpostarsi: 'A pie en la playa; van para las excursiones.',
    periodoMigliore: 'enero-marzo o julio-octubre para el whale watching (noviembre-diciembre es menos favorable)',
    costi: 'Whale watching 70$ por persona; equitación 52$ por persona; surf 70$ por 4 tablas al día; yoga 10$ por persona.',
    erroriDaEvitare: ['Fiarse de operadores improvisados para el whale watching: mejor uno serio como Uvita Ballena Jorobada, y preguntar siempre por el seguro'],
    miaEsperienza:
      "En Uvita hice un poco de todo. Para el tour de las ballenas recomiendo Uvita Ballena Jorobada. En el Rancho La Merced hicimos el paseo a caballo al atardecer por la playa: yo me caí, porque no soy un jinete experto, pero es precioso. Los animales están bien tratados, algo importantísimo para mí, y son dóciles. Superrecomendado. Costa Rica es preciosa también para el surf, y aquí lo hice con Ariel. Y la Cola de la Ballena con la marea baja sigue siendo uno de los paisajes más bonitos del viaje.",
      "luoghi": [
        {
          "nome": "Parque Nacional Marino Ballena y Cola de la Ballena",
          "testo": "Un banco de arena con forma de cola de ballena que emerge con la marea baja, en el Parque Marino Ballena. Uno de los paisajes más bonitos del viaje.",
          "come": "Entrada desde la playa de Playa Uvita; el banco se alcanza a pie con la marea baja.",
          "quando": "Con marea baja, a consultar en las tablas de mareas.",
          "tempo": "1-2 horas",
          "consiglio": "Comprobar los horarios de marea: con marea alta el banco desaparece."
        },
        {
          "nome": "Avistamiento de ballenas",
          "testo": "Salida en barca en el Parque Nacional Marino Ballena, creado en 1989, para ver las ballenas jorobadas que vienen aquí a reproducirse. Hay una ficha de experiencia dedicada.",
          "come": "Tour desde Uvita en barca pequeña.",
          "quando": "Dos temporadas: de diciembre a abril llegan las jorobadas del hemisferio norte, de julio a noviembre las del sur.",
          "tempo": "3 horas",
          "consiglio": "Los avistamientos no están garantizados, pero el paisaje merece la pena igual."
        },
        {
          "nome": "Puente de Tárcoles",
          "testo": "Un puente sobre el río Tárcoles, a lo largo de la carretera principal, desde el que se ven grandes cocodrilos en las orillas.",
          "come": "Parada en la carretera Costanera, a pie por el puente.",
          "quando": "De día, con luz.",
          "tempo": "15-30 minutos",
          "consiglio": "No bajar a la orilla: los cocodrilos son reales."
        },
        {
          "nome": "Surf y yoga",
          "testo": "Alquiler de tablas y clases en la playa, y yoga al atardecer en una terraza panorámica.",
          "come": "Escuelas y terrazas en la zona de Uvita y Dominical.",
          "quando": "Mañana para el surf, atardecer para el yoga.",
          "tempo": "2 horas"
        },
        {
          "nome": "Parque Nacional Corcovado",
          "testo": "El parque más salvaje del país, en la península de Osa: bosque primario, playas desiertas, dantas, pecaríes y la mayor población de lapas rojas de Costa Rica.",
          "come": "Solo con guía autorizado y reserva (reservaciones.pnc@sinac.go.cr). En barco desde Bahía Drake, Sierpe o Puerto Jiménez hasta la estación Sirena; por tierra desde el sector La Leona, cerca de Playa Carate.",
          "quando": "Todos los días 8-16. La mejor época va de diciembre a abril; en octubre la estación Sirena está cerrada.",
          "tempo": "1-2 días",
          "url": "https://www.visitcostarica.com/",
          "consiglio": "Reservar con mucha antelación: el instituto de turismo costarricense indica al menos seis meses."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: Cola de la Ballena con marea baja",
            "Almuerzo en Uvita",
            "Tarde: surf",
            "Atardecer: yoga en la terraza"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Cola de la Ballena y playa",
            "Día 2: avistamiento de ballenas en temporada, parada en el puente de Tárcoles hacia el norte"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Uvita",
          "perChi": "playas y servicios",
          "testo": "Restaurantes, tours y tiendas cerca de la playa, a poca distancia del parque."
        },
        {
          "nome": "Colinas sobre la costa",
          "perChi": "quien busca vistas y silencio",
          "testo": "Lodges con vista al océano, pero lejos de los servicios."
        }
      ],
      "sapori": [
        {
          "nome": "Casado de pescado",
          "testo": "Arroz, frijoles y pescado del día."
        },
        {
          "nome": "Ceviche",
          "testo": "Pescado crudo marinado en lima, en las playas."
        },
        {
          "nome": "Fruta y batidos",
          "testo": "Piña, papaya y mango, en los puestos."
        },
        {
          "nome": "Pescado a la parrilla",
          "testo": "En los restaurantes frente al mar de Uvita."
        }
      ],
      "attenzioni": [
        "Vigilar la marea: el banco de arena se sumerge con marea alta.",
        "El mar del Pacífico tiene corrientes fuertes: nadar con prudencia.",
        "Robos de coches aparcados en las playas: no dejar nada a la vista."
      ],
    esperienzeSlugs: ['whale-watching-uvita'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'El banco de arena de la Cola de la Ballena en Uvita, Costa Rica',
    immagine: '/images/costa-rica/uvita-stock.jpg',
  },
  {
    slug: 'manuel-antonio',
    paeseSlug: 'costa-rica',
    ordine: 8,
    nome: 'Parque Nacional Manuel Antonio',
    tipologia: ['natura', 'mare'],
    giorniConsigliati: 'media jornada, de camino al regreso',
    visitataPersonalmente: true,
    introduzione: 'Una de las paradas más bonitas de toda Costa Rica: senderos guiados entre perezosos, monos e iguanas, seguidos de una de las playas más bonitas del país.',
    percheAndarci: 'Con un guía experto la probabilidad de avistar fauna salvaje es altísima, en uno de los parques nacionales más famosos del país.',
    cosaVedere: ['Perezosos, monos, iguanas y colibríes por los senderos', 'Las playas dentro del parque'],
    cosaFare: ['Visita guiada incluida en el parque (hay una ficha de experiencia dedicada)', 'Tiempo libre en la playa dentro del parque'],
    doveDormire: 'Aquí no dormimos: fue una parada de media jornada de camino al regreso a San José.',
    doveMangiare: 'No tengo direcciones que señalar: la parada fue toda para la visita al parque.',
    comeArrivare: "Desde Uvita hay hora y media de traslado por la Costanera. Desde San José son unas 3 horas en coche, pasando por Jacó y el puente del Tárcoles; los autobuses directos desde San José llegan a Quepos y siguen hasta la entrada del parque. Quepos tiene también un pequeño aeropuerto con vuelos nacionales desde San José. Del parque a San José, para el regreso, hay que contar 3,5-4 horas con el tráfico.",
    comeSpostarsi: 'A pie por los senderos del parque, con guía.',
    periodoMigliore: 'primera hora de la mañana: nosotros salimos antes del amanecer',
    costi: "No apunté el precio de la entrada; hoy es de unos 18 dólares para extranjeros, solo en línea en el portal del SINAC, y el parque cierra los martes. Presupuesto diario por persona, orientativo para 2026: bajo 60-90 € (alojamiento en Quepos, sodas, parque sin guía); medio 140-200 € (hotel en la carretera del parque, guía, cena con vista); alto desde 300 € (hotel con vista al Pacífico, salida en catamarán).",
    erroriDaEvitare: ['Olvidar que el parque cierra los martes: mejor comprobarlo antes y, si hace falta, adelantar la visita'],
    miaEsperienza:
      "Manuel Antonio es bonito como parque, pero por la cantidad de gente que hay casi tienes la sensación de ir al zoo. Aun así sigue siendo muy bonito. Gracias al guía vimos de cerca perezosos, monos e iguanas por senderos que solos nos habría costado mucho más leer.",
    luoghi: [
      {
        nome: "Parque Nacional Manuel Antonio",
        testo: "Un parque pequeño pero lleno de vida: perezosos, monos carablanca y titíes, iguanas y colibríes por los senderos, con playas dentro del parque. Es uno de los parques más famosos y concurridos del país. Hay una ficha de experiencia dedicada.",
        come: "Se llega desde Quepos en bus o coche en pocos minutos. Con guía se ven muchos más animales; revisan las mochilas: nada de comida en bolsas de plástico ni alcohol.",
        quando: "A la apertura, cuando los animales están activos y hay menos gente.",
        tempo: "3-4 horas",
        costo: "Unos 18 USD para extranjeros adultos (16 USD más IVA, 2025-2026), unos 16 €, solo en línea y con cupo limitado",
        orari: "De miércoles a lunes de 7 a 16 h; cerrado el martes",
        lat: 9.37556,
        lng: -84.13583,
        url: "https://serviciosenlinea.sinac.go.cr/",
        consiglio: "Con el guía vimos de cerca perezosos, monos e iguanas por senderos que solos nos habría costado mucho más leer.",
      },
      {
        nome: "Playa Manuel Antonio y Playa Espadilla Sur",
        testo: "Playas dentro del parque, de arena clara y agua tranquila, separadas por el tómbolo de Punta Catedral. Playa Manuel Antonio, en la bahía más resguardada, es una de las playas más bonitas del país.",
        come: "Desde los senderos del parque, con la entrada.",
        quando: "A media mañana, después de la visita guiada.",
        tempo: "1-2 horas",
        lat: 9.38088,
        lng: -84.1456,
        consiglio: "No dar de comer a los animales ni dejar mochilas sin vigilancia: los monos y mapaches las abren.",
      },
      {
        nome: "Sendero Punta Catedral",
        testo: "Un circuito por el bosque en el promontorio que fue una isla, unido a la costa por una lengua de arena. Sube y baja con escalones y miradores sobre el Pacífico y los islotes frente al parque.",
        come: "Dentro del parque, saliendo entre las dos playas.",
        quando: "Por la mañana, cuando hace menos calor.",
        tempo: "1 hora",
        lat: 9.3779,
        lng: -84.14679,
      },
      {
        nome: "Playa Espadilla",
        testo: "La larga playa pública fuera del parque, frente al pueblo de Manuel Antonio, con sombrillas, surf para principiantes y atardeceres sobre el mar. Es libre y abre también el martes.",
        come: "A pie desde la entrada del parque.",
        quando: "Por la tarde y al atardecer.",
        tempo: "2-3 horas",
        costo: "Gratis",
        lat: 9.39898,
        lng: -84.1596,
        consiglio: "Las corrientes pueden ser fuertes: bañarse cerca de los salvavidas y donde nadan los demás.",
      },
      {
        nome: "Playa Biesanz",
        testo: "Una pequeña cala escondida entre el bosque y los hoteles de la colina, con agua tranquila y algo de esnórquel entre las rocas. A menudo hay monos en los árboles sobre la arena.",
        come: "A pie por un sendero corto y empinado desde la carretera entre Quepos y el parque.",
        quando: "Por la mañana, o el martes cuando el parque está cerrado.",
        tempo: "2 horas",
        costo: "Gratis",
        lat: 9.4009,
        lng: -84.16844,
      },
      {
        nome: "Quepos y Marina Pez Vela",
        testo: "El pueblo de servicios de la zona, con el mercado, sodas baratas y la marina de donde salen la pesca deportiva y los catamaranes. El malecón es agradable al atardecer.",
        come: "Bus o taxi desde el parque, unos 15 minutos.",
        quando: "Comida después del parque, o por la noche.",
        tempo: "1-2 horas",
        lat: 9.42642,
        lng: -84.16872,
      },
      {
        nome: "Manglares de Isla Damas",
        testo: "Un estuario de manglar al norte de Quepos, que se recorre en lancha o kayak por canales con monos carablanca, garzas y cocodrilos. Es una salida tranquila para una tarde.",
        come: "Tour con traslado desde Quepos o Manuel Antonio, unos 20 minutos.",
        quando: "Por la tarde, con marea alta.",
        tempo: "2-3 horas",
        lat: 9.46458,
        lng: -84.1931,
      },
      {
        nome: "Parque Nacional Carara",
        testo: "En la Costanera hacia San José, un bosque de transición entre seco y húmedo, famoso por las lapas rojas que vuelan hacia la costa al atardecer. Los senderos junto a la carretera son cortos y llanos.",
        come: "Parada en la Costanera, a hora y media de Manuel Antonio; entradas en el portal del SINAC.",
        quando: "Temprano o al final de la tarde, por las lapas.",
        tempo: "1-2 horas",
        lat: 9.74722,
        lng: -84.62778,
        url: "https://serviciosenlinea.sinac.go.cr/",
      },
      {
        nome: "Puente del Tárcoles",
        testo: "En el trayecto entre Uvita y San José, el puente bajo el cual se juntan grandes cocodrilos americanos en los bancos de arena del río Tárcoles. La parada es obligada.",
        come: "Parada en la Costanera; se camina por la acera del puente.",
        quando: "De día.",
        tempo: "20-30 minutos",
        costo: "Gratis",
        lat: 9.80087,
        lng: -84.60611,
        consiglio: "No dejar nada a la vista en el coche aparcado junto al puente.",
      },
    ],
    programmi: [
      { titolo: "Medio día", tappe: [
        "Llegada a la apertura del parque",
        "Visita guiada de 2-3 horas",
        "Baño en Playa Manuel Antonio",
        "Comida en Quepos y regreso",
      ] },
      { titolo: "1 día", tappe: [
        "Mañana: parque con guía y Punta Catedral",
        "Tarde: Playa Espadilla o Playa Biesanz",
        "Noche: atardecer sobre el mar",
      ] },
      { titolo: "De regreso a San José", tappe: [
        "Salida antes del amanecer y parque a la apertura",
        "Comida en Quepos",
        "Paradas en Carara y el puente del Tárcoles",
        "Llegada a San José por la noche",
      ] },
    ],
    zone: [
      {
        nome: "Carretera entre Quepos y el parque",
        perChi: "vistas y comodidad",
        testo: "Hoteles en la colina con vista a la costa, muchos con piscina, pero tráfico de buses y taxis.",
        fascia: "110-330 €",
      },
      {
        nome: "Cerca de la entrada y de Playa Espadilla",
        perChi: "quien quiere entrar a la apertura",
        testo: "Hoteles y cabinas a pie del parque y de la playa pública, con restaurantes sencillos.",
        fascia: "90-200 €",
      },
      {
        nome: "Quepos",
        perChi: "presupuesto",
        testo: "Más barato, con restaurantes, mercado y marina; al parque se va en bus o taxi.",
        fascia: "60-110 €",
      },
    ],
      "sapori": [
        {
          "nome": "Casado de pescado",
          "testo": "Arroz, frijoles y pescado del día."
        },
        {
          "nome": "Ceviche",
          "testo": "Pescado crudo marinado en lima, en restaurantes frente al mar."
        },
        {
          "nome": "Fruta tropical",
          "testo": "Piña, papaya y plátanos, en los puestos cerca del parque."
        },
        {
          "nome": "Batidos",
          "testo": "Con fruta fresca, en los puestos frente a la entrada."
        }
      ],
      "attenzioni": [
        "El parque cierra los martes; con lluvias fuertes el SINAC puede cerrarlo también otros días.",
        "Las entradas se compran solo en línea, en el sitio del SINAC: no se venden en la entrada, y los sitios que las revenden con recargo no son oficiales.",
        "No dar de comer a los animales y mantener los bolsos cerrados: monos y mapaches roban.",
        "Desde el 30 de abril de 2026 las multas por entrar por accesos no oficiales o a zonas cerradas al público son altas: quedarse en los senderos marcados.",
        "Es uno de los parques más concurridos del país: con tanta gente a ratos parece un zoo. Llegar a la apertura ayuda."
      ],
    gite: [
      {
        nome: "Cataratas Nauyaca",
        distanza: "aproximadamente 1,5 horas al sur",
        come: "En coche hacia Dominical, luego a pie o en 4x4 desde la entrada.",
        testo: "Dos saltos uno sobre otro con una gran poza donde nadar, en el valle del Barú. Se llega con una caminata de algunos kilómetros.",
      },
      {
        nome: "Uvita y Parque Nacional Marino Ballena",
        distanza: "aproximadamente 1-1,5 horas al sur",
        come: "En coche por la Costanera.",
        testo: "La Cola de la Ballena, el banco de arena con forma de cola de ballena que se ve con marea baja, y las salidas para ver ballenas jorobadas, mejor de enero a marzo y de julio a octubre.",
      },
      {
        nome: "Jacó",
        distanza: "aproximadamente 1 hora al norte",
        come: "En coche por la Costanera, camino de San José.",
        testo: "El pueblo surfero más cercano a San José, con una larga playa de olas regulares, escuelas de surf y vida nocturna.",
      },
    ],
    faq: [
      {
        domanda: "¿El Parque Manuel Antonio cierra los martes?",
        risposta: "Sí, abre de miércoles a lunes de 7 a 16 h; con lluvias fuertes el SINAC puede cerrarlo otros días. El martes se va a Playa Espadilla o a Biesanz.",
      },
      {
        domanda: "¿Cómo se compran las entradas?",
        risposta: "Solo en línea, en el portal oficial del SINAC, con cupo limitado: en la entrada no se venden. Las webs que las revenden con recargo no son oficiales.",
      },
      {
        domanda: "¿Hace falta guía en Manuel Antonio?",
        risposta: "No es obligatorio, pero con el telescopio del guía se ven perezosos, ranas y serpientes que solo se escapan. Los guías certificados están en la entrada o se reservan antes.",
      },
      {
        domanda: "¿Cuánto tiempo hace falta para el parque?",
        risposta: "Medio día: dos o tres horas de senderos con guía y una o dos horas de playa. Sirve también como parada de regreso a San José.",
      },
      {
        domanda: "¿Se puede nadar en el parque?",
        risposta: "Sí, en Playa Manuel Antonio y Espadilla Sur, con agua normalmente tranquila. Las mochilas hay que tenerlas cerradas y cerca, porque monos y mapaches roban comida.",
      },
      {
        domanda: "¿Está demasiado lleno?",
        risposta: "Es uno de los parques más visitados del país y a ratos parece un zoológico, pero sigue siendo muy bonito. Llegar a la apertura y evitar los fines de semana ayuda.",
      },
    ],
    esperienzeSlugs: ['parco-manuel-antonio'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Un perezoso entre los árboles del Parque Nacional Manuel Antonio, Costa Rica',
    immagine: '/images/costa-rica/manuel-antonio-stock.jpg',
  },
]
