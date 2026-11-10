import type { Destinazione } from '@/lib/types'

export const destinazioniCroazia: Destinazione[] = [
  {
    slug: 'zagabria',
    paeseSlug: 'croazia',
    ordine: 1,
    nome: 'Zagreb',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'La capital, dividida entre la Ciudad Alta medieval y la Ciudad Baja austrohúngara, con cafés, museos y el mercado de Dolac. Es el punto de partida natural para Plitvice.',
    percheAndarci: 'Para una Croacia continental y centroeuropea, distinta de la costa.',
    cosaVedere: [
      'La iglesia de San Marcos y la Ciudad Alta',
      'La torre Lotrščak y el cañón de mediodía',
      'El mercado de Dolac',
      'El Museo de las Relaciones Rotas',
    ],
    cosaFare: ['Una noche en las cafeterías de la calle Tkalčićeva', 'Štrukli en una taberna de la Ciudad Alta', 'El mercadillo navideño en diciembre'],
    doveDormire: 'Ciudad Baja o cerca de la plaza Jelačić: económico 50-80 €, medio 90-150 €, alto más de 200 €.',
    comeArrivare: 'Aeropuerto de Zagreb; en coche desde Trieste en unas dos horas y media.',
    comeSpostarsi: 'A pie, en tranvía y con el funicular a la Ciudad Alta.',
    periodoMigliore: 'abril-octubre; diciembre para el Adviento.',
    erroriDaEvitare: ['Saltársela del todo por correr al mar'],
    luoghi: [
      {
        nome: "Ciudad Alta (Gornji grad)",
        testo: "El núcleo medieval sobre una colina, con la iglesia de San Marcos de tejado de tejas de colores, la torre Lotrščak (donde un cañón dispara cada día al mediodía) y las callejas de la ciudad vieja.",
        come: "A pie desde la Ciudad Baja o en funicular, uno de los más cortos del mundo (66 metros de vía).",
        quando: "Mañana o final de la tarde. El cañón dispara al mediodía.",
        tempo: "2 horas",
        consiglio: "Subir a pie por la calle Tkalčićeva y bajar en funicular."
      },
      {
        nome: "Mercado de Dolac",
        testo: "El mercado al aire libre de la ciudad, sobre la plaza Jelačić, con puestos de fruta y verdura bajo sombrillas rojas y quesos en el mercado cubierto de abajo.",
        come: "A pie desde el centro, a pocos minutos de la plaza Jelačić.",
        quando: "Por la mañana, hasta mediodía, cuando los puestos están llenos.",
        tempo: "1 hora",
        consiglio: "Probar el queso fresco con nata (sir i vrhnje) con pan caliente."
      },
      {
        nome: "Museo de las Relaciones Rotas",
        testo: "Un pequeño museo con objetos donados por personas de todo el mundo, cada uno con la historia de una relación terminada. Divertido y a ratos emotivo.",
        come: "A pie desde la Ciudad Alta, en la calle de los Santos Cirilo y Metodio.",
        quando: "Mañana o tarde, evitando el fin de semana.",
        tempo: "1 hora",
        consiglio: "Lo bonito son las historias de los donantes junto a cada objeto: prever tiempo para leerlas."
      },
      {
        nome: "Cementerio de Mirogoj",
        testo: "El cementerio monumental de la ciudad, abierto en 1876, con el edificio principal diseñado por el arquitecto Hermann Bollé. Las largas arcadas con cúpulas, construidas entre 1879 y 1929, encierran tumbas de todas las religiones, una al lado de otra. Es uno de los lugares más bonitos y tranquilos de Zagreb, y pocos turistas llegan.",
        come: "En el autobús ZET 106 desde la terminal de Kaptol, junto a la catedral (cada 20 minutos aproximadamente en horario de apertura), o a pie cuesta arriba.",
        quando: "Mañana o última hora de la tarde; a principios de noviembre está lleno de velas.",
        tempo: "1 hora",
        costo: "Gratis.",
        consiglio: "Quedarse en los paseos y hablar bajo: es un cementerio en uso."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mercado de Dolac por la mañana",
          "Catedral y Ciudad Alta",
          "Comida con štrukli",
          "Museo de las Relaciones Rotas",
          "Aperitivo en la calle Tkalčićeva"
        ]
      }
    ],
    zone: [
      {
        nome: "Ciudad Baja",
        perChi: "para estación y tranvías",
        testo: "Hoteles y apartamentos a pie de todo; el centro es animado y algo ruidoso por la noche."
      },
      {
        nome: "Cerca de la plaza Jelačić",
        perChi: "para estancias cortas",
        testo: "Todo a pie; los precios son algo más altos."
      }
    ],
    sapori: [
      {
        nome: "Štrukli",
        testo: "Pasta rellena de queso fresco, hervida o al horno, el plato más típico de la ciudad."
      },
      {
        nome: "Purica s mlincima",
        testo: "Pavo asado con pasta fina horneada, plato de cocina casera croata."
      },
      {
        nome: "Kremšnita",
        testo: "Crema y nata entre dos hojaldres, típico de Samobor, cerca de la ciudad."
      }
    ],
    attenzioni: [
      "En taxi, usar apps (Bolt, Uber) o coches con tarifa visible: en la estación los precios varían.",
      "En Navidad suben los precios de alojamiento: reservar con antelación.",
      "En los fines de semana del mercado de Adviento el centro se llena: mejor entre semana."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La iglesia de San Marcos con el tejado de tejas de colores en Zagreb',
    immagine: '/images/viaggi/croazia-itinerario/giorno-01-zagabria.jpg',
  },
  {
    slug: 'plitvice',
    paeseSlug: 'croazia',
    ordine: 2,
    nome: 'Lagos de Plitvice',
    tipologia: ['parco nazionale', 'laghi', 'cascate'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'Dieciséis lagos en terrazas conectados por cascadas y barreras de travertino, atravesados por pasarelas de madera, en el parque nacional más antiguo de Croacia, patrimonio UNESCO desde 1979.',
    percheAndarci: 'Por las cascadas y los colores de los lagos, para ver a la apertura.',
    cosaVedere: ['La Veliki slap, la cascada más alta (78 m)', 'Los lagos inferiores y el cañón', 'Los lagos superiores y el lago Kozjak'],
    cosaFare: ['Entrar a la apertura por la entrada 2 para los lagos superiores', 'Hacer los lagos inferiores a última hora de la tarde'],
    doveDormire: 'Pensiones y habitaciones en Mukinje, Rastovača y Grabovac (60-120 €); pocos hoteles dentro del parque.',
    comeArrivare:
      "El parque está en la carretera nacional D1, a unas 2 horas en coche tanto de Zagreb como de Zadar. Los autobuses de línea entre Zagreb y la costa dálmata paran en las entradas 1 y 2. Los aparcamientos de las entradas abren de 7 a 17 y cuestan 2 € la hora de junio a septiembre y 1,50 € la hora en primavera y otoño. La entrada se compra online con franja horaria y se valida en la entrada elegida; conviene dormir en uno de los pueblos de alrededor y entrar a la apertura.",
    comeSpostarsi: 'A pie por las pasarelas, barco eléctrico en el lago Kozjak y trenecitos panorámicos incluidos en la entrada.',
    periodoMigliore: 'mayo-junio y septiembre-octubre; julio-agosto muy concurridos.',
    costi:
      "Entrada de un día 2026: 40 € de junio a septiembre (25 € después de las 16 en junio-agosto y de las 15 en septiembre), 23 € en abril, mayo y octubre, 10 € de noviembre a marzo; entrada de dos días 60 €, 39 € o 15 € según la temporada. El barco y los trenes panorámicos están incluidos. Presupuesto diario por persona, compartiendo habitación doble: bajo 70-100 €, medio 130-200 €; una pensión cerca de las entradas cuesta unos 60-120 € la noche.",
    erroriDaEvitare: [
      'Llegar a media mañana en temporada alta',
      'No reservar online la franja de entrada',
      'Pensar en bañarse: está prohibido',
    ],
    luoghi: [
      {
        "nome": "Lagos superiores y Kozjak",
        "testo": "Dieciséis lagos unidos por cascadas en terrazas de travertino, con pasarelas de madera sobre agua turquesa. Patrimonio UNESCO desde 1979.",
        "come": "Entrada 2 para los lagos superiores. Senderos marcados con letras (A-K) y barco eléctrico en el Kozjak incluido en la entrada.",
        "quando": "A la apertura o después de las 15, para evitar la hora de los autocares. El periodo más verde es mayo-junio; en otoño los colores son más intensos.",
        "tempo": "4-6 horas para un recorrido completo",
        "costo": "40 € de junio a septiembre (25 € después de las 16 en junio-agosto y de las 15 en septiembre), 23 € en abril, mayo y octubre, 10 € de noviembre a marzo (2026). Comprar solo en la web oficial.",
        "url": "https://np-plitvicka-jezera.hr/en/",
        "consiglio": "En temporada alta conviene comprar la entrada online con antelación: en taquilla puede agotarse. Se valida en la entrada elegida al comprarla.",
        "orari": "Abierto todos los días del año, con horarios que cambian según la temporada. En noviembre de 2026 las entradas 1 y 2 abren de 8 a 15 y la taquilla hasta las 13; el barco del Kozjak funciona de 8 a 16 en el tramo corto, trenes panorámicos cada 30 minutos.",
        "lat": 44.88467,
        "lng": 15.60956
      },
      {
        "nome": "Veliki slap",
        "testo": "La cascada más alta del parque, unos 78 metros, al final de los lagos inferiores. Se ve desde la pasarela de abajo o desde el sendero de arriba.",
        "come": "Entrada 1 para los lagos inferiores y la Veliki slap, a pie con escaleras.",
        "quando": "A primera hora o al final de la tarde.",
        "tempo": "1 hora",
        "consiglio": "Una gran última parada: luego se sube en el trenecito panorámico.",
        "costo": "incluida en la entrada del parque",
        "lat": 44.90254,
        "lng": 15.6079,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Lagos inferiores y cañón",
        "testo": "Un tramo más salvaje y menos concurrido, con paredes de roca, cuevas y cascadas que brotan de la caliza. Las pasarelas pasan a ras de agua entre los lagos Milanovac, Gavanovac y Kaluđerovac, hasta el cañón donde los lagos terminan en el Korana. Desde el sendero alto se ve toda la escalera de lagos desde arriba, la vista de postal.",
        "come": "A pie desde la entrada 1 por el sendero indicado.",
        "quando": "Por la mañana.",
        "tempo": "2 horas",
        "consiglio": "Suela antideslizante: las pasarelas están mojadas.",
        "costo": "incluidos en la entrada del parque",
        "lat": 44.90116,
        "lng": 15.61076,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Galovac",
        "testo": "Uno de los lagos superiores más fotografiados: el agua baja por una serie de escalones de travertino en decenas de pequeñas cascadas, y las pasarelas pasan justo por en medio. Es donde se entiende cómo se formaron los lagos, barrera tras barrera.",
        "come": "Desde la entrada 2 en tren panorámico hasta la estación St3 y luego a pie cuesta abajo por el recorrido de los lagos superiores (programa E).",
        "quando": "Por la mañana, cuando la luz entra entre las hayas y los grupos aún no han subido.",
        "tempo": "1 hora",
        "costo": "incluido en la entrada del parque",
        "lat": 44.87489,
        "lng": 15.60592,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Veliki Prštavac",
        "testo": "La cascada más espectacular de los lagos superiores, donde el Galovac cae al lago de abajo en un solo salto. Al lado está el Mali Prštavac, más pequeño. Las pasarelas pasan al pie del salto y por encima del borde.",
        "come": "Por el recorrido de los lagos superiores, poco por debajo del Galovac.",
        "quando": "En primavera, con el deshielo, el caudal es máximo.",
        "tempo": "30 minutos",
        "costo": "incluido en la entrada del parque",
        "lat": 44.8779,
        "lng": 15.60843,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Prošćansko jezero",
        "testo": "El lago más alto del sistema, largo y rodeado de bosque, donde empieza la escalera de los dieciséis lagos. Tiene menos cascadas que los demás pero es el más silencioso: aquí las pasarelas dejan paso a un sendero por la orilla.",
        "come": "Desde la entrada 2 en tren panorámico hasta la estación St3 (Labudovac) y luego a pie.",
        "quando": "Temprano por la mañana, cuando aún hay niebla sobre el agua.",
        "tempo": "1 hora",
        "costo": "incluido en la entrada del parque",
        "lat": 44.86158,
        "lng": 15.59689,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Sastavci",
        "testo": "Las cascadas al final de los lagos inferiores, donde el agua de todo el sistema cae al cañón y nace el río Korana. Están a pocos pasos de la Veliki slap, pero mucho menos concurridas.",
        "come": "Desde la entrada 1, bajando al cañón por el recorrido de los lagos inferiores (programas A y B).",
        "quando": "Por la mañana o a última hora de la tarde, junto con la Veliki slap.",
        "tempo": "30 minutos",
        "costo": "incluido en la entrada del parque",
        "lat": 44.90283,
        "lng": 15.60927,
        "url": "https://np-plitvicka-jezera.hr/en/"
      },
      {
        "nome": "Cueva Šupljara",
        "testo": "Una cueva en la pared del cañón sobre el lago Kaluđerovac. Se entra desde el sendero de abajo y se sube por dentro por una escalera hasta el borde del cañón, con vistas a los lagos inferiores.",
        "come": "Por el recorrido de los lagos inferiores desde la entrada 1: un desvío corto pero empinado.",
        "quando": "Cuando el cañón está lleno de gente: es uno de los pocos rincones tranquilos.",
        "tempo": "20-30 minutos",
        "costo": "incluida en la entrada del parque",
        "lat": 44.89995,
        "lng": 15.61179,
        "url": "https://np-plitvicka-jezera.hr/en/",
        "consiglio": "Los escalones de dentro están húmedos: hace falta calzado con buena suela."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: entrada 2 a la apertura, tren panorámico hasta St3 y bajada a pie por los lagos superiores: Prošćansko jezero, Galovac y Veliki Prštavac",
          "Media mañana: barco eléctrico por el Kozjak hasta el tramo de los lagos inferiores",
          "Primera hora de la tarde: bocadillo o el punto de restauración junto al barco",
          "Tarde: cañón de los lagos inferiores, cueva Šupljara, Veliki slap y Sastavci",
          "Final del día: subida al borde este del cañón y tren panorámico de vuelta a la entrada (es el programa H del parque)"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1, tarde: entrada 1 después de las 15-16 con la entrada reducida, lagos inferiores, Veliki slap y Sastavci (programa A)",
          "Día 2, mañana: entrada 2 a la apertura, lagos superiores con Galovac y Prošćansko jezero, barco por el Kozjak (programa E)",
          "Día 2, tarde: salida hacia Zadar o Zagreb, con parada en Rastoke"
        ]
      }
    ],
    zone: [
      {
        "nome": "Mukinje y Rastovača",
        "perChi": "para estar cerca",
        "testo": "Pensiones y habitaciones junto a la entrada, cómodas para madrugar.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Grabovac",
        "perChi": "para precios más bajos",
        "testo": "Más barato, a pocos minutos en coche de la entrada.",
        "fascia": "60-120 €"
      },
      {
        "nome": "Hoteles del parque",
        "perChi": "Quien quiere entrar al amanecer sin coger el coche",
        "testo": "Los pocos hoteles gestionados por el parque, como el Hotel Jezero, están cerca de la entrada 2. Son más prácticos que bonitos y se reservan en la web del parque; cerca están también los campings Korana y Borje."
      }
    ],
    gite: [
      {
        "nome": "Rastoke (Slunj)",
        "distanza": "unos 30 km al norte, 30 minutos en coche",
        "come": "En coche por la D1 hacia Zagreb; se deja el coche en Slunj y se recorre a pie.",
        "testo": "Un pueblo de viejos molinos de agua construido sobre las cascadas donde el Slunjčica cae al Korana. Parece un Plitvice en miniatura con casas en medio: se ve en una hora y es una buena parada camino de Zagreb o a la vuelta."
      },
      {
        "nome": "Cuevas de Barać",
        "distanza": "unos 20 km, 25 minutos en coche",
        "come": "En coche hacia Rakovica y luego la carretera de las cuevas. La visita es guiada.",
        "testo": "Cuevas kársticas con estalactitas, salas y colonias de murciélagos, que se recorren con guía por un camino acondicionado. Siguen frescas incluso en verano: hace falta una chaqueta."
      }
    ],
    sapori: [
      {
        nome: "Cordero a la brasa",
        testo: "Se prepara en los restaurantes de la carretera del parque, con patatas."
      },
      {
        nome: "Trucha",
        testo: "De los ríos de la zona, a la parrilla o frita."
      },
      {
        nome: "Štrukli y crema de queso",
        testo: "Se encuentran en las tabernas cercanas a la entrada."
      }
    ],
    attenzioni: [
      "Bañarse en los lagos está prohibido y vigilado: no salir de los senderos.",
      "En verano las entradas pueden agotarse: comprarlas online antes de ir.",
      "Llevar comida y agua: dentro hay pocos servicios y caros."
    ],
    faq: [
      {
        "domanda": "¿Cuánto tiempo hace falta para visitar Plitvice?",
        "risposta": "Un día completo basta para los lagos superiores e inferiores con el programa H (4-6 horas). Quien quiera verlos con calma y con poca gente puede dividir la visita en dos medias jornadas con la entrada de dos días."
      },
      {
        "domanda": "¿Hay que reservar la entrada de Plitvice?",
        "risposta": "Sí, de junio a septiembre conviene comprarla online en la web del parque con franja horaria: en temporada alta puede agotarse en taquilla. La entrada vale para el acceso elegido."
      },
      {
        "domanda": "¿Mejor la entrada 1 o la entrada 2?",
        "risposta": "La entrada 1 está más cerca de la Veliki slap y los lagos inferiores; la 2, de los lagos superiores y el barco. Temprano conviene la 2; por la tarde la 1, para ver las cascadas con luz baja."
      },
      {
        "domanda": "¿Cuánto cuesta Plitvice en 2026?",
        "risposta": "40 € de junio a septiembre (25 € por la tarde), 23 € en abril, mayo y octubre y 10 € de noviembre a marzo. El barco y los trenes panorámicos están incluidos."
      },
      {
        "domanda": "¿Se puede nadar en los lagos de Plitvice?",
        "risposta": "No, el baño está prohibido en todo el parque y se vigila. En el Krka también está prohibido bajo las cascadas desde 2021: para nadar hay que esperar al mar."
      },
      {
        "domanda": "¿Se puede visitar Plitvice en invierno?",
        "risposta": "Sí, el parque abre todo el año y de noviembre a marzo la entrada cuesta 10 €. Los horarios son más cortos y con nieve o hielo puede haber senderos cerrados: conviene mirar los avisos en la web del parque."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Una pasarela de madera junto a una cascada y al agua turquesa de los lagos de Plitvice',
    immagine: '/images/viaggi/croazia-itinerario/giorno-03-plitvice.jpg',
  },
  {
    slug: 'zara-krka-sebenico',
    paeseSlug: 'croazia',
    ordine: 3,
    nome: 'Zadar, Krka y Šibenik',
    tipologia: ['città storiche', 'parco nazionale', 'mare'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'La Dalmacia septentrional: Zadar con el centro romano y veneciano y las instalaciones del paseo marítimo, las cascadas de travertino del Parque Nacional del Krka y Šibenik con la catedral de Santiago.',
    percheAndarci: 'Por el atardecer en el Órgano del mar, las cascadas del Krka y dos ciudades históricas menos concurridas que Split y Dubrovnik.',
    cosaVedere: [
      'El Órgano del mar y el Saludo al Sol en Zadar',
      'La iglesia de San Donato y el foro romano',
      'El Skradinski buk y el monasterio de Visovac en el Krka',
      'La Catedral de Santiago en Šibenik',
    ],
    cosaFare: ['El barco de Skradin a las cascadas', 'Un día en las Kornati o en Ugljan desde Zadar'],
    doveDormire: 'Apartamentos en los cascos antiguos (80-150 €); hoteles en Borik, cerca de Zadar.',
    comeArrivare: 'En coche desde Plitvice; aeropuerto de Zadar con vuelos de temporada.',
    periodoMigliore: 'mayo-junio y septiembre.',
    costi: 'Krka unos 40 € en verano, mucho menos en temporada baja.',
    erroriDaEvitare: ['Esperar poder bañarse bajo las cascadas del Krka: está prohibido desde 2021'],
    luoghi: [
      {
        nome: "Zadar: Órgano marino y Saludo al Sol",
        testo: "Dos instalaciones en el paseo marítimo del casco antiguo: el Órgano marino suena con las olas que entran en tubos bajo los escalones, y al lado un disco de vidrio capta la luz del atardecer. Obra del arquitecto Nikola Bašić.",
        come: "A pie desde el casco antiguo, por la Riva.",
        quando: "Al atardecer, cuando suena y brilla.",
        tempo: "1 hora",
        consiglio: "Sentarse en los escalones: el sonido cambia con el viento y las olas."
      },
      {
        nome: "Casco antiguo de Zadar",
        testo: "Una península con el Foro romano, la iglesia circular de San Donato (siglo IX) e iglesias románicas. Muy dañada en la Segunda Guerra Mundial y reconstruida.",
        come: "A pie desde los aparcamientos fuera de las murallas.",
        quando: "Mañana o noche.",
        tempo: "2 horas",
        consiglio: "El mercado de pescado y fruta junto a las murallas es un buen desayuno."
      },
      {
        nome: "Skradinski buk (Krka)",
        testo: "Una serie de cascadas y pozas en terrazas de travertino en el Parque Nacional de Krka. Se camina por pasarelas y se toma un barco desde Skradin.",
        come: "En coche desde Šibenik. Se sale de la entrada de Skradin con barco incluido en la entrada.",
        quando: "A primera hora o al final del día. Mayo-junio y septiembre.",
        tempo: "3-4 horas",
        costo: "40 € de junio a septiembre, 20 € en abril, mayo y octubre, 7 € de noviembre a marzo (2026); del 1 de abril al 31 de octubre incluye el barco desde Skradin.",
        url: "https://np-krka.hr/en/",
        consiglio: "Ya no se permite el baño al pie de las cascadas."
      },
      {
        nome: "Catedral de Santiago, Šibenik",
        testo: "Catedral renacentista de piedra, patrimonio UNESCO, construida sin mortero con bloques encajados. En el friso exterior corren más de 70 rostros esculpidos.",
        come: "A pie desde el centro histórico.",
        quando: "Por la mañana.",
        tempo: "45 minutos",
        consiglio: "Mirar los rostros de los ábsides: se cree que retratan a gente de la Dalmacia de la época."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Zadar por la mañana",
          "Comida en la ciudad",
          "Atardecer en el Órgano marino"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: Zadar y atardecer en la Riva",
          "Día 2: Krka por la mañana, Šibenik por la tarde"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo de Zadar",
        perChi: "para estar en el centro",
        testo: "Alojamientos de piedra a pocos pasos de todo; animado de noche en la zona de la Riva."
      },
      {
        nome: "Šibenik",
        perChi: "para llegar a Krka",
        testo: "Más tranquila que Split, cómoda para la autopista y el parque."
      }
    ],
    sapori: [
      {
        nome: "Maraschino",
        testo: "Licor de cereza marasca típico de Zadar."
      },
      {
        nome: "Paška janjetina",
        testo: "Cordero asado de la isla de Pag."
      },
      {
        nome: "Sir iz mišine",
        testo: "Queso curado de Pag."
      },
      {
        nome: "Pescado de Šibenik",
        testo: "Cocina sencilla de mar en las konobe del puerto."
      }
    ],
    attenzioni: [
      "En Krka ya no se puede nadar: preguntar en taquilla por las restricciones.",
      "En julio y agosto las cascadas se llenan: llegar a la apertura.",
      "El aparcamiento cerca del casco antiguo es de pago y con límite de tiempo."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'El Skradinski buk en el Parque Nacional del Krka',
    immagine: '/images/viaggi/croazia-itinerario/giorno-05-zara-krka-sebenico.jpg',
  },
  {
    slug: 'spalato',
    paeseSlug: 'croazia',
    ordine: 4,
    nome: 'Split y Trogir',
    tipologia: ['città romana', 'mare', 'porto'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'Split vive dentro el palacio que el emperador Diocleciano mandó construir hacia el año 300 d.C. A media hora está Trogir, islote medieval patrimonio UNESCO. El puerto es el nudo de los ferris a las islas.',
    percheAndarci: 'Por el palacio de Diocleciano, la Riva, el Marjan y las conexiones con Hvar, Brač y Vis.',
    cosaVedere: [
      'El Peristilo y la catedral de San Doimo',
      'Los subterráneos del palacio',
      'La colina del Marjan',
      'El centro de Trogir y el portal de Radovan',
    ],
    cosaFare: ['El picigin en Bačvice', 'Subir al campanario de San Doimo', 'La noche en la Riva'],
    doveDormire: 'Dentro o junto al palacio (habitaciones 100-180 €); hostales desde 30-40 € la cama.',
    comeArrivare:
      "El aeropuerto de Split (SPU) está a unos 20 km del centro, a pocos kilómetros de Trogir: el autobús lanzadera Pleso lleva a la estación de autobuses de Split en unos 30-40 minutos por unos 8 €, el taxi cuesta unos 40-50 € (mucho menos a Trogir). La estación de autobuses, la de tren y el puerto de ferris están una al lado de otra, a pocos minutos a pie de la Riva. Desde Italia hay ferris nocturnos desde Ancona; desde Zagreb se llega en coche por autopista (peaje unos 25-30 €). Quien sigue hacia las islas conviene que devuelva aquí el coche.",
    comeSpostarsi: 'A pie por el centro; autobús a Trogir; catamaranes desde el puerto a las islas.',
    periodoMigliore: 'mayo-junio y septiembre-octubre.',
    costi:
      "Subterráneos del palacio unos 10 € (5 € jóvenes y estudiantes); Galería Meštrović 12 €; fortaleza de Klis 12 €; Salona y Museo Arqueológico 10 € juntos; catamarán a Hvar 10-25 €. Presupuesto diario por persona, compartiendo habitación doble: bajo 70-100 €, medio 130-200 €, alto más de 300 €.",
    erroriDaEvitare: ['Andar en bañador por el casco antiguo: te ponen multa'],
    luoghi: [
      {
        "nome": "Palacio de Diocleciano",
        "testo": "El palacio-fortaleza del emperador romano Diocleciano, construido entre finales del siglo III y el 305 d.C., dentro del cual vive hoy el casco antiguo. Peristilo, mausoleo convertido en catedral y sótanos son el corazón de la visita.",
        "come": "A pie desde la Riva, por la Puerta de Plata o la de Bronce. Las calles son gratis; catedral, campanario y sótanos son de pago.",
        "quando": "A primera hora o por la noche: en las horas centrales las calles están llenas.",
        "tempo": "2-3 horas",
        "consiglio": "Los sótanos: entrada de pago, casi vacíos y fotogénicos.",
        "costo": "calles y Peristilo gratis; catedral, campanario y subterráneos de pago",
        "orari": "Siempre accesible; cada monumento tiene su propio horario.",
        "lat": 43.5085,
        "lng": 16.44025
      },
      {
        "nome": "Subterráneos del palacio",
        "testo": "Las grandes salas abovedadas bajo los aposentos del emperador, casi intactas porque durante siglos estuvieron llenas de escombros. Reproducen en planta las estancias de arriba y dan la medida real del palacio. El pasillo central, con puestos, une la Riva con el Peristilo.",
        "come": "Por la Puerta de Bronce, en el paseo marítimo. El pasillo central es libre; las salas laterales tienen entrada.",
        "quando": "A la apertura, antes de que lleguen los grupos de los cruceros.",
        "tempo": "45 minutos",
        "costo": "unos 10 €, 5 € jóvenes y estudiantes (2026)",
        "lat": 43.50758,
        "lng": 16.43979,
        "consiglio": "Entrar por la Puerta de Bronce y subir al Peristilo: es el recorrido de quien llegaba desde el mar."
      },
      {
        "nome": "Peristilo y Templo de Júpiter",
        "testo": "La plaza con columnas delante de los aposentos imperiales, donde Diocleciano se mostraba a sus súbditos: hoy hay cafés en los escalones y una esfinge egipcia de granito traída por el emperador. A pocos pasos, en un callejón, está el pequeño Templo de Júpiter, convertido en baptisterio, con techo de casetones de piedra.",
        "come": "En el centro del palacio, a pie desde cualquier puerta.",
        "quando": "Temprano para ver la plaza vacía, por la noche por el ambiente.",
        "tempo": "30 minutos",
        "costo": "Peristilo gratis; baptisterio de pago",
        "lat": 43.50824,
        "lng": 16.44017
      },
      {
        "nome": "Catedral de San Domnio y campanario",
        "testo": "El mausoleo octogonal de Diocleciano, convertido en catedral en el siglo VII, es uno de los edificios más antiguos del mundo aún usado como iglesia. El campanario de 57 metros da vistas sobre los tejados.",
        "come": "Dentro del Peristilo. Entrada para catedral y subida al campanario.",
        "quando": "Por la mañana.",
        "tempo": "1 hora",
        "consiglio": "Subir al campanario por la vista: los escalones son muchos y estrechos.",
        "lat": 43.50805,
        "lng": 16.44043
      },
      {
        "nome": "Puerta de Oro y estatua de Gregorio de Nin",
        "testo": "La puerta norte del palacio, la más decorada, de donde salía el camino a Salona. Fuera está la estatua gigante del obispo Gregorio de Nin, obra de Ivan Meštrović, que en el siglo X defendió el uso del croata en la liturgia. Frotarle el dedo gordo del pie da suerte, y por eso brilla.",
        "come": "A pie desde el Peristilo, siguiendo la calle hacia el norte.",
        "quando": "A cualquier hora.",
        "tempo": "15 minutos",
        "costo": "gratis",
        "lat": 43.50918,
        "lng": 16.44065
      },
      {
        "nome": "Riva",
        "testo": "El paseo marítimo peatonal bajo la fachada sur del palacio, con palmeras y cafés. Es el salón de la ciudad: se pasea por la noche, se miran los ferris y se espera el catamarán.",
        "come": "A pie, entre el puerto y la Puerta de Bronce.",
        "quando": "Por la noche, cuando se llena de gente del lugar.",
        "tempo": "1 hora",
        "costo": "gratis",
        "lat": 43.50783,
        "lng": 16.43829
      },
      {
        "nome": "Colina de Marjan",
        "testo": "El parque boscoso sobre la ciudad, con senderos, pequeñas iglesias y un mirador sobre el puerto y las islas. Desde el barrio de Veli Varoš se sube al primer mirador; más allá el pinar sigue hasta la cima, con la gran cruz blanca, y las pequeñas playas del lado del mar abierto. Es adonde van los de Split a correr y bañarse, lejos del gentío del palacio.",
        "come": "A pie desde el barrio Veli Varoš, cuesta arriba hasta el mirador.",
        "quando": "Final de la tarde.",
        "tempo": "2 horas",
        "consiglio": "Llevar agua: en la subida no hay bares.",
        "costo": "gratis",
        "orari": "Parque siempre abierto.",
        "lat": 43.5079,
        "lng": 16.43012
      },
      {
        "nome": "Galería Meštrović",
        "testo": "La villa junto al mar que el escultor Ivan Meštrović se construyó en los años treinta, hoy museo con sus esculturas en mármol, bronce y madera y un jardín sobre la bahía. Con la misma entrada se visita el Kaštilac, un poco más adelante, con el ciclo en madera de la vida de Cristo.",
        "come": "A pie por el lado sur del Marjan (unos 30 minutos desde la Riva) o en el autobús 12.",
        "quando": "Por la mañana, combinada con un baño en las playas del Marjan.",
        "tempo": "1-2 horas",
        "costo": "12 € adultos, Kaštilac incluido (tarifa oficial)",
        "orari": "De martes a domingo 9-17, última entrada media hora antes. Cerrado los lunes y en las fiestas nacionales.",
        "lat": 43.50492,
        "lng": 16.41794,
        "url": "https://mestrovic.hr/"
      },
      {
        "nome": "Pazar y mercado de pescado",
        "testo": "El Pazar es el mercado al aire libre de fruta, verdura y flores justo fuera de la Puerta de Plata. La pescadería (Peskarija), en la parte oeste del centro, vende el pescado de la noche bajo una cubierta del siglo XIX: sin moscas, dicen en Split, por el agua sulfurosa que corre por debajo.",
        "come": "A pie: el Pazar al este del palacio, la pescadería cerca de la calle Marmontova.",
        "quando": "Temprano por la mañana; hacia mediodía los puestos cierran.",
        "tempo": "45 minutos",
        "costo": "gratis",
        "lat": 43.5076,
        "lng": 16.44197
      },
      {
        "nome": "Playa de Bačvice",
        "testo": "La playa de arena de la ciudad, poco profunda, a diez minutos de la Riva. Aquí se juega al picigin, el pasatiempo local: pasarse en círculo una pelota pequeña en el agua baja sin que caiga.",
        "come": "A pie desde la Riva, pasando por detrás de la estación.",
        "quando": "Por la mañana o a última hora de la tarde; por la noche se animan los locales sobre la playa.",
        "tempo": "2-3 horas",
        "costo": "gratis; sombrillas de pago",
        "lat": 43.50194,
        "lng": 16.44598
      },
      {
        "nome": "Museo Arqueológico",
        "testo": "El museo más antiguo de Croacia, fundado en 1820, con inscripciones, sarcófagos y mosaicos de Salona y de la Dalmacia romana. El lapidario bajo el pórtico del jardín es la parte más sugerente.",
        "come": "A unos 15 minutos a pie al norte del centro. Entrada combinada con Salona.",
        "quando": "En las horas de calor, combinado con Salona el mismo día.",
        "tempo": "1 hora",
        "costo": "10 € con Salona, válida 7 días (tarifa 2026)",
        "orari": "1 de junio-30 de septiembre lunes-sábado 9-14 y 15-20; 1 de octubre-31 de mayo lunes-viernes 9-14 y 15-20, sábado 9-14. Cerrado domingos y festivos. Cerrado por montaje del 9 de noviembre al 11 de diciembre de 2026.",
        "lat": 43.5159,
        "lng": 16.43458,
        "url": "https://www.armus.hr/"
      },
      {
        "nome": "Salona",
        "testo": "Las ruinas de la capital romana de Dalmacia, la ciudad de donde era Diocleciano, hoy en Solin, en las afueras de Split. Se camina entre anfiteatro, termas, basílicas paleocristianas y la necrópolis de Manastirine, entre olivos y casi sin turistas.",
        "come": "Autobús urbano de Split a Solin, unos 20 minutos. La entrada está en el Tusculum.",
        "quando": "A primera hora o a última de la tarde: el sitio está todo al sol.",
        "tempo": "2 horas",
        "costo": "10 € con el Museo Arqueológico (tarifa 2026)",
        "orari": "Todos los días: 1 de junio-30 de septiembre 9-20, 1 de octubre-31 de mayo 9-18. Cerrado los festivos.",
        "lat": 43.54169,
        "lng": 16.48331,
        "url": "https://www.armus.hr/"
      },
      {
        "nome": "Fortaleza de Klis",
        "testo": "La fortaleza en el paso sobre Split, que durante siglos controló el camino entre la costa y el interior y resistió largo tiempo a los otomanos. Desde las murallas se ven Split, las islas y la llanura de Salona. Quien haya visto Juego de Tronos la reconocerá como Meereen.",
        "come": "En coche o autobús desde Split, unos 20-30 minutos. Desde el aparcamiento se sube a pie.",
        "quando": "Al atardecer, con la luz sobre la costa.",
        "tempo": "1-1,5 horas",
        "costo": "12 € adultos, 4 € menores de 15 años (web oficial)",
        "orari": "Según la web oficial, todos los días 9-19.",
        "lat": 43.56003,
        "lng": 16.52433,
        "url": "https://www.tvrdavaklis.com/"
      },
      {
        "nome": "Trogir",
        "testo": "Una pequeña ciudad-isla medieval al oeste de Split, con la catedral de San Lorenzo y su portal esculpido por Radovan. Patrimonio UNESCO.",
        "come": "En coche o en autobús desde Split. Se visita a pie.",
        "quando": "Por la mañana.",
        "tempo": "3 horas",
        "consiglio": "Por la tarde, parar a tomar un helado en la Riva.",
        "lat": 43.51705,
        "lng": 16.25144
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Puerta de Bronce, subterráneos y Peristilo antes de los cruceros",
          "Media mañana: catedral de San Domnio, campanario y Templo de Júpiter",
          "Mediodía: Pazar y pescadería, luego comida en Veli Varoš",
          "Tarde: Puerta de Oro y Gregorio de Nin, luego baño en Bačvice",
          "Última hora de la tarde: subida al Marjan hasta el mirador",
          "Noche: paseo por la Riva"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como en el programa de un día",
          "Día 2, mañana: Galería Meštrović y Kaštilac, luego baño en las playas del Marjan",
          "Día 2, tarde: Salona y Museo Arqueológico con la entrada combinada",
          "Día 2, noche: fortaleza de Klis al atardecer"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1 y 2: como arriba",
          "Día 3, mañana: Trogir en autobús, catedral de San Lorenzo y portal de Radovan",
          "Día 3, tarde: vuelta a Split y catamarán de la tarde a Hvar, o excursión al parque del Krka"
        ]
      }
    ],
    zone: [
      {
        "nome": "Casco antiguo",
        "perChi": "para estar en el centro",
        "testo": "Habitaciones dentro del palacio, a pie de todo; ruidoso hasta tarde por la noche.",
        "fascia": "100-180 €"
      },
      {
        "nome": "Veli Varoš",
        "perChi": "para un barrio tranquilo",
        "testo": "Casas de pescadores a un paso del centro, bajo Marjan.",
        "fascia": "70-130 €"
      },
      {
        "nome": "Bačvice",
        "perChi": "Quien quiere la playa al lado",
        "testo": "El barrio sobre la playa de arena, a diez minutos a pie de la Riva y cerca de estaciones y puerto. En verano por la noche hay ruido por los locales de la playa.",
        "fascia": "90-170 €"
      },
      {
        "nome": "Žnjan",
        "perChi": "Quien viaja en coche y busca hoteles modernos",
        "testo": "El paseo marítimo del este, con una playa larga, hoteles nuevos y aparcamiento más fácil. El centro está a una media hora a pie o a pocos minutos en autobús.",
        "fascia": "90-160 €"
      }
    ],
    gite: [
      {
        "nome": "Parque Nacional del Krka",
        "distanza": "aproximadamente 1 hora y cuarto en coche",
        "come": "En coche hasta Skradin y luego el barco hasta Skradinski buk (incluido en la entrada de abril a octubre); también hay excursiones organizadas.",
        "testo": "La gran cascada escalonada de Skradinski buk, con pasarelas, y el monasterio del islote de Visovac. Entrada 40 € de junio a septiembre (30 € después de las 15), 20 € en abril, mayo y octubre; está prohibido bañarse."
      },
      {
        "nome": "Hvar",
        "distanza": "aproximadamente 1 hora en catamarán",
        "come": "Catamaranes de Jadrolinija, TP Line y Krilo desde el puerto de Split hasta Hvar ciudad.",
        "testo": "La ciudad veneciana con la fortaleza española y las islas Pakleni frente al puerto. Se puede hacer en un día, pero la isla merece al menos una noche."
      },
      {
        "nome": "Bol y Zlatni Rat (Brač)",
        "distanza": "aproximadamente 1 hora en catamarán",
        "come": "Catamarán directo desde el puerto de Split a Bol, o ferry a Supetar y autobús cruzando la isla.",
        "testo": "La playa de cantos en forma de punta que cambia con el viento y las corrientes, famosa entre los windsurfistas. Sobre Bol se sube a Vidova Gora, la cima más alta de las islas del Adriático."
      },
      {
        "nome": "Omiš y el cañón del Cetina",
        "distanza": "unos 25 km, 40 minutos en autobús",
        "come": "Autobús de línea desde la estación de Split por la costa.",
        "testo": "Un pueblo entre el mar y las paredes del cañón, con la fortaleza de Mirabella sobre los tejados. En el río Cetina se hace rafting, kayak y tirolina."
      }
    ],
    sapori: [
      {
        nome: "Pašticada",
        testo: "Ternera guisada en salsa de vino y ciruelas, con ñoquis."
      },
      {
        nome: "Soparnik",
        testo: "Tarta salada de acelgas de Dalmacia, cocida bajo las brasas."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto negro con tinta de sepia."
      },
      {
        nome: "Rožata",
        testo: "Flan dálmata de caramelo con el sabor típico del licor de rosas."
      }
    ],
    attenzioni: [
      "Los taxis sin identificar en Split pueden cobrar mucho más que la tarifa: usar Bolt o Uber.",
      "Para los ferris en verano, reservar plaza para el coche con Jadrolinija.",
      "Ojo con los restaurantes de plaza con menús turísticos y precios altos: alejarse una calle reduce el coste."
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Split?",
        "risposta": "Un día completo basta para el palacio de Diocleciano, el Marjan y la Riva. Con dos se añaden la Galería Meštrović, Salona y Klis; con tres, también Trogir o el Krka."
      },
      {
        "domanda": "¿Hay que pagar para ver el palacio de Diocleciano?",
        "risposta": "No, las calles y el Peristilo son libres, porque son el casco antiguo. Se pagan la catedral y el campanario, el baptisterio y los subterráneos (unos 10 €)."
      },
      {
        "domanda": "¿Split o Trogir como base?",
        "risposta": "Split es más cómoda para ferris, autobuses y salir por la noche; Trogir es más pequeña, tranquila y cercana al aeropuerto. Para las islas conviene dormir en Split, cerca del puerto."
      },
      {
        "domanda": "¿Dónde dormir en Split?",
        "risposta": "Dentro del palacio para estar en el centro (unos 100-180 € la noche), en Veli Varoš por un barrio tranquilo, en Bačvice por la playa, en Žnjan por los hoteles con aparcamiento."
      },
      {
        "domanda": "¿Cómo se va de Split a Hvar?",
        "risposta": "En catamarán a Hvar ciudad, en una hora y por 10-25 € en verano. Los ferris con coche llegan en cambio a Stari Grad, al otro lado de la isla."
      },
      {
        "domanda": "¿Se puede ir en bañador por Split?",
        "risposta": "No: en el casco antiguo ir en bañador o sin camiseta y beber alcohol en la calle se multa con 150 €."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Las columnas y los arcos del Peristilo del palacio de Diocleciano en Split',
    immagine: '/images/viaggi/croazia-itinerario/giorno-07-spalato.jpg',
  },
  {
    slug: 'hvar',
    paeseSlug: 'croazia',
    ordine: 5,
    nome: 'Hvar',
    tipologia: ['isola', 'mare', 'vita notturna'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      'La isla más soleada del Adriático, con una ciudad veneciana en la bahía, las islas Pakleni frente al puerto, campos de lavanda en el interior y la llanura de Stari Grad, patrimonio UNESCO.',
    percheAndarci: 'Por las calas de las Pakleni, el atardecer desde la fortaleza y, para quien la busque, la vida nocturna.',
    cosaVedere: ['La fortaleza española', 'Plaza de San Esteban y el teatro de 1612', 'Las islas Pakleni', 'La llanura de Stari Grad'],
    cosaFare: ['Taxi-boat a Palmižana', 'Vuelta por el interior entre lavanda y pueblos abandonados'],
    doveDormire: 'Hvar ciudad para la vida nocturna (100-220 €, más en agosto), Stari Grad y Jelsa para la quietud.',
    comeArrivare:
      "No hay aeropuerto: se llega desde Split. Los catamaranes de Jadrolinija, TP Line y Krilo llevan a Hvar ciudad en una hora, por unos 10-25 € en verano; los ferris con coche de Jadrolinija atracan en cambio en Stari Grad, desde donde Hvar ciudad está a 20-30 minutos en autobús o en coche. Desde Korčula y Dubrovnik hay catamaranes de temporada (Hvar-Korčula, una hora y media). En julio y agosto las plazas de coche en los ferris se reservan con antelación; quien se queda solo en Hvar ciudad puede prescindir del coche.",
    periodoMigliore: 'junio y septiembre; lavanda en flor entre junio y julio.',
    costi:
      "Fortaleza 12 €, o 15 € con la entrada combinada (fortaleza, teatro, logia, torre del reloj e iglesia de San Juan); teatro 10 €; catedral 2 €; taxi-barco a las Pakleni unos 10-15 € ida y vuelta. Presupuesto diario por persona, compartiendo habitación doble: bajo 70-100 €, medio 130-200 €, alto más de 300 €; en agosto Hvar ciudad está entre los lugares más caros de Croacia.",
    erroriDaEvitare: ['Beber en la calle o andar en bañador por la ciudad: multas severas', 'Llegar en agosto sin alojamiento reservado'],
    luoghi: [
      {
        "nome": "Ciudad de Hvar y fortaleza Española",
        "testo": "Una ciudad veneciana junto al mar con la plaza más grande de Dalmacia, la catedral de San Esteban y el teatro del siglo XVII sobre el arsenal. Encima del pueblo está la fortaleza (Fortica) del siglo XVI, con vistas al puerto y a las islas Pakleni.",
        "come": "A pie desde el puerto. A la fortaleza se sube a pie desde el pueblo.",
        "quando": "Fortaleza por la mañana o al final de la tarde, por el calor.",
        "tempo": "2-3 horas",
        "consiglio": "Subir a la fortaleza al atardecer y cenar después en una callejuela fuera de la plaza.",
        "costo": "fortaleza 12 €; combinada 15 € con teatro, logia, torre del reloj e iglesia de San Juan (2026)",
        "orari": "Fortaleza 9-18 (horario de verano 2026 de la oficina de turismo); fuera de temporada hay que comprobarlo.",
        "lat": 43.17474,
        "lng": 16.4421,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Plaza de San Esteban y catedral",
        "testo": "La gran plaza enlosada que se abre desde el puerto hacia la colina, con el pozo veneciano del siglo XVI y palacios de piedra blanca. Al fondo está la catedral de San Esteban, con su campanario de cuatro pisos y altares barrocos en el interior. Por la noche es el centro de la vida del pueblo.",
        "come": "A pie desde el puerto: la plaza empieza en el muelle.",
        "quando": "Temprano para verla vacía, por la noche por el ambiente.",
        "tempo": "45 minutos",
        "costo": "plaza gratis; catedral 2 € (2026)",
        "orari": "Catedral 9-12:30 y 17-19:30 (horario de verano 2026).",
        "lat": 43.17218,
        "lng": 16.44335,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Teatro y Arsenal",
        "testo": "El Arsenal veneciano, donde se reparaban las galeras, sostiene en el primer piso el teatro abierto en 1612, uno de los teatros públicos más antiguos de Europa. La sala, con palcos pintados, es pequeña e íntima; desde la terraza sobre el Arsenal se ve la plaza.",
        "come": "En el lado de la plaza hacia el puerto. El teatro se visita con entrada individual o combinada.",
        "quando": "En las horas de calor, cuando la fortaleza está a pleno sol.",
        "tempo": "30 minutos",
        "costo": "teatro 10 €, o combinada 15 € (2026)",
        "orari": "Teatro 10-18 (verano 2026); el Arsenal no se puede visitar en 2026.",
        "lat": 43.17212,
        "lng": 16.44147,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Convento benedictino y encaje de pita",
        "testo": "Las monjas benedictinas de Hvar hacen un encaje finísimo con las fibras de las hojas de pita (agave), una tradición reconocida por la UNESCO. En el pequeño museo del convento se ven piezas terminadas y, a veces, cómo se preparan los hilos.",
        "come": "En las callejuelas al norte de la plaza, a pie.",
        "quando": "Por la mañana o a última hora de la tarde, según el horario.",
        "tempo": "30 minutos",
        "costo": "5 € (2026)",
        "orari": "10-12:30 y 16-19; cerrado el jueves por la tarde y el domingo (verano 2026).",
        "lat": 43.17313,
        "lng": 16.44204,
        "url": "https://visithvar.hr/"
      },
      {
        "nome": "Islas Pakleni",
        "testo": "Un archipiélago de islotes con calas y agua clara frente a la ciudad de Hvar. Se llega en taxi-barca desde el puerto.",
        "come": "Taxi-barca desde el puerto de Hvar, vuelta a horas acordadas.",
        "quando": "Por la mañana; las calas están más tranquilas antes del mediodía.",
        "tempo": "media jornada",
        "consiglio": "Acordar la hora de vuelta con el barquero.",
        "costo": "taxi-barco unos 10-15 € ida y vuelta (precio orientativo 2026)",
        "lat": 43.16347,
        "lng": 16.39704
      },
      {
        "nome": "Stari Grad",
        "testo": "La ciudad más antigua de la isla, fundada por griegos de Paros en el 384 a.C. con el nombre de Pharos. El puerto largo y estrecho está lleno de barcas y casas de piedra, y en el centro está el Tvrdalj, la villa fortificada del poeta renacentista Petar Hektorović. Es más tranquila y barata que Hvar ciudad.",
        "come": "Aquí llega el ferry de coches desde Split; a Hvar ciudad se llega en coche o autobús.",
        "quando": "Mañana o tarde; todo el año, también fuera de temporada.",
        "tempo": "2 horas",
        "consiglio": "Unir la visita a la llanura de Stari Grad, que empieza justo a las afueras.",
        "costo": "pueblo gratis; Tvrdalj de pago",
        "lat": 43.18248,
        "lng": 16.59573
      },
      {
        "nome": "Llanura de Stari Grad",
        "testo": "Un paisaje agrícola de muros y campos divididos por colonos griegos en el siglo IV a.C., casi sin cambios; patrimonio UNESCO.",
        "come": "Desde Stari Grad en bici o a pie por senderos entre olivos y viñas.",
        "quando": "Primavera y otoño.",
        "tempo": "2-3 horas",
        "consiglio": "El ferry desde Split llega a Stari Grad, no a la ciudad de Hvar.",
        "costo": "gratis",
        "lat": 43.18252,
        "lng": 16.64771
      },
      {
        "nome": "Vrboska",
        "testo": "El pueblo más pequeño de la isla, construido a lo largo de un estrecho brazo de mar cruzado por puentecillos, por eso lo llaman la «pequeña Venecia» de Hvar. Tiene una iglesia fortificada del siglo XVI, levantada para defenderse de los piratas, y un museo de los pescadores.",
        "come": "En coche o autobús desde Stari Grad o Jelsa; a pie por la costa desde Jelsa en una hora.",
        "quando": "Por la noche, para cenar junto al canal.",
        "tempo": "1-2 horas",
        "costo": "gratis",
        "lat": 43.18172,
        "lng": 16.67123
      },
      {
        "nome": "Jelsa",
        "testo": "Un pueblo con puerto en el este de la isla, con una plaza arbolada detrás del muelle y playas de pinar a pocos minutos a pie. Es más tranquilo y barato que Hvar ciudad, y cómodo para las calas de la costa sur.",
        "come": "Autobús desde Stari Grad y Hvar ciudad; en verano, catamarán a Split y a Bol.",
        "quando": "Toda la temporada; en junio y septiembre está especialmente tranquilo.",
        "tempo": "medio día",
        "costo": "gratis",
        "lat": 43.1612,
        "lng": 16.69266
      },
      {
        "nome": "Malo Grablje",
        "testo": "Un pueblo de piedra abandonado en los años sesenta, en una garganta entre olivos sobre Milna. Las casas sin tejado, la iglesia y las terrazas de cultivo cuentan la isla de antes del turismo. Un sendero baja hasta el mar en Milna.",
        "come": "En coche o moto desde Hvar ciudad hacia el interior y el último tramo a pie; o a pie subiendo desde Milna.",
        "quando": "Por la mañana o a última hora de la tarde: a mediodía la garganta da calor.",
        "tempo": "1-2 horas",
        "costo": "gratis",
        "lat": 43.16882,
        "lng": 16.5033
      },
      {
        "nome": "Velo Grablje y la lavanda",
        "testo": "El pueblo del interior que en el siglo XX se convirtió en el centro de la producción de aceite de lavanda de la isla. Alrededor siguen los campos en terrazas, morados entre junio y julio, y los muros de piedra seca.",
        "come": "En coche o moto por la carretera vieja entre Hvar ciudad y Stari Grad.",
        "quando": "Entre finales de junio y julio, con la lavanda en flor.",
        "tempo": "1 hora",
        "costo": "gratis",
        "lat": 43.17074,
        "lng": 16.5217
      },
      {
        "nome": "Playa de Dubovica",
        "testo": "Una bahía de cantos blancos con unas pocas casas de piedra en la costa sur, al este de Hvar ciudad. El agua es transparente y, al no llegar la carretera hasta abajo, está más tranquila que las playas a las que se va en coche.",
        "come": "En coche o autobús hasta la parada en la carretera principal y luego a pie por un sendero de unos 15-20 minutos.",
        "quando": "Por la mañana; por la tarde en verano llegan también los barcos.",
        "tempo": "medio día",
        "costo": "gratis",
        "lat": 43.14593,
        "lng": 16.53487,
        "consiglio": "La subida de vuelta es empinada y al sol: llevar agua."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: plaza de San Esteban, catedral y convento benedictino con el encaje de pita",
          "Media mañana: taxi-barco a Palmižana, baño y comida en las Pakleni",
          "Tarde: vuelta y teatro con la entrada combinada",
          "Atardecer: subida a pie a la fortaleza española, unos veinte minutos entre pinos",
          "Noche: cena en una callejuela lejos de la plaza"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como en el programa de un día",
          "Día 2, mañana: en moto o coche por el interior, Malo Grablje y los campos de lavanda de Velo Grablje",
          "Día 2, tarde: Stari Grad con el Tvrdalj y la llanura de la UNESCO",
          "Día 2, noche: cena junto al canal en Vrboska o en Jelsa"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1 y 2: como arriba",
          "Día 3: excursión en barco a Vis y a la Cueva Azul de Biševo, o un día de playa en Dubovica y la costa sur"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ciudad de Hvar",
        "perChi": "para vida y comodidad",
        "testo": "Hoteles, locales y el puerto, pero más caro y ruidoso en verano.",
        "fascia": "100-250 €"
      },
      {
        "nome": "Stari Grad",
        "perChi": "Quien llega en ferry con coche y busca calma",
        "testo": "La ciudad más antigua de la isla, con su puerto largo y estrecho, restaurantes en el muelle y la llanura de la UNESCO justo al lado. Aquí atraca el ferry desde Split; Hvar ciudad está a 20-30 minutos en autobús o en coche.",
        "fascia": "80-180 €"
      },
      {
        "nome": "Jelsa y Vrboska",
        "perChi": "Quien busca precios más bajos y playas tranquilas",
        "testo": "Dos pueblos vecinos en la costa noreste, con pinares y calas a pie. Son los más baratos de la isla pero quedan lejos de Hvar ciudad: poco prácticos para salir allí cada noche.",
        "fascia": "70-150 €"
      }
    ],
    gite: [
      {
        "nome": "Vis y la Cueva Azul",
        "distanza": "día completo en lancha",
        "come": "Excursiones organizadas en lancha desde el puerto de Hvar ciudad, con paradas en Biševo, Vis y a menudo la bahía de Stiniva.",
        "testo": "La isla más lejana y menos construida de la Dalmacia central y la Cueva Azul del islote de Biševo, donde la luz entra por una abertura bajo el agua. Se ve mejor en las horas centrales de un día de sol; con mala mar la cueva cierra."
      },
      {
        "nome": "Bol y Zlatni Rat (Brač)",
        "distanza": "travesía corta en catamarán desde Jelsa",
        "come": "Catamarán de Jadrolinija de la línea Split-Bol-Jelsa, en los meses en que funciona.",
        "testo": "La playa en punta de Zlatni Rat, que cambia de forma con el viento, y el pueblo de Bol con su convento dominico junto al mar."
      },
      {
        "nome": "Korčula",
        "distanza": "aproximadamente 1 hora y media en catamarán",
        "come": "Catamarán desde Hvar ciudad, por unos 20-30 €.",
        "testo": "La ciudad amurallada en su península, con calles en espina de pez y la catedral de San Marcos. Tiene más sentido como siguiente etapa hacia Dubrovnik que como ida y vuelta en el día."
      }
    ],
    sapori: [
      {
        nome: "Gregada",
        testo: "Guiso de pescado con patatas y aceite, cocina de pescadores."
      },
      {
        nome: "Lavanda",
        testo: "Aceite esencial y miel, a la venta por toda la isla."
      },
      {
        nome: "Vinos Plavac y Bogdanuša",
        testo: "Tinto y blanco locales, de las bodegas de la isla."
      }
    ],
    attenzioni: [
      "El ferry desde Split va a Stari Grad; desde allí hace falta autobús o taxi a la ciudad de Hvar.",
      "En verano las habitaciones de fin de semana se acaban pronto: reservar con meses de antelación.",
      "Llevar escarpines en las rocas: hay erizos de mar."
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Hvar?",
        "risposta": "Dos días bastan para Hvar ciudad, la fortaleza, las Pakleni y una vuelta por el interior con Stari Grad. Con tres se añade la excursión a Vis y a la Cueva Azul."
      },
      {
        "domanda": "¿Es mejor dormir en Hvar ciudad o en Stari Grad?",
        "risposta": "Hvar ciudad para la vida nocturna y las Pakleni, pero es más cara y ruidosa en verano. Stari Grad y Jelsa son más tranquilas, más baratas y cómodas para quien llega en ferry con coche."
      },
      {
        "domanda": "¿Cómo se llega a Hvar desde Split?",
        "risposta": "En catamarán a Hvar ciudad en una hora (10-25 € en verano) o en ferry con coche hasta Stari Grad. En temporada alta conviene reservar."
      },
      {
        "domanda": "¿Cuándo florece la lavanda en Hvar?",
        "risposta": "Entre junio y julio, en los campos del interior alrededor de Velo Grablje y a lo largo de la carretera vieja a Stari Grad."
      },
      {
        "domanda": "¿Cuánto cuesta el taxi-barco a las islas Pakleni?",
        "risposta": "Unos 10-15 € ida y vuelta, con salidas frecuentes en verano desde el puerto de Hvar. Conviene acordar la hora de vuelta."
      },
      {
        "domanda": "¿Hay multas en Hvar por ir en bañador o beber en la calle?",
        "risposta": "Sí, en la ciudad ir en bañador, beber en la calle o dormir en la playa se multa, con sanciones de hasta 500-700 €."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La bahía de Hvar y las islas Pakleni desde la fortaleza española',
    immagine: '/images/viaggi/croazia-itinerario/giorno-08-hvar.jpg',
  },
  {
    slug: 'curzola',
    paeseSlug: 'croazia',
    ordine: 6,
    nome: 'Korčula',
    tipologia: ['isola', 'città storica', 'vino'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      'Una ciudad vieja fortificada en una península, con las calles en espina de pescado, la catedral de San Marcos y la casa dedicada a Marco Polo; en la isla se produce el vino blanco grk.',
    percheAndarci: 'Por una ciudad histórica más tranquila que Hvar y Dubrovnik y por la danza de la moreška.',
    cosaVedere: ['La ciudad vieja y las murallas', 'La catedral de San Marcos', 'Lumbarda y sus viñedos'],
    cosaFare: ['Asistir a la moreška en las noches de verano', 'Degustar el grk en Lumbarda'],
    doveDormire: 'Ciudad vieja o Lumbarda, 90-160 €.',
    comeArrivare: 'Catamarán desde Split, Hvar o Dubrovnik; ferri desde Orebić en la península de Pelješac.',
    periodoMigliore: 'junio y septiembre.',
    erroriDaEvitare: ['Visitarla solo en el día desde los cruceros, perdiéndose la noche'],
    luoghi: [
      {
        nome: "Casco antiguo de Korčula",
        testo: "Una península fortificada con plano «en espina de pez», con calles pensadas para protegerse del viento. Murallas y torres venecianas, y la catedral de San Marcos con un altar de Tintoretto.",
        come: "A pie desde el puerto, por la Puerta de Tierra.",
        quando: "Mañana o noche.",
        tempo: "2 horas",
        consiglio: "Subir a la torre de la catedral para ver los tejados."
      },
      {
        nome: "Casa de Marco Polo",
        testo: "Según la tradición local Marco Polo nació en Korčula. En el centro hay una casa que la tradición señala como la suya.",
        come: "En el centro histórico, con escalones empinados.",
        quando: "Por la mañana.",
        tempo: "30 minutos",
        consiglio: "El nacimiento en Korčula es una tradición, no un hecho documentado."
      },
      {
        nome: "Moreška",
        testo: "Una danza de espadas que escenifica la lucha entre moros y cristianos por una muchacha raptada, que se baila en Korčula desde hace siglos. Dos ejércitos con trajes rojos y negros se enfrentan con golpes rítmicos y chispas en las hojas. Hoy hay funciones fijas para los visitantes un par de veces por semana.",
        come: "Por la noche, al aire libre o en sala, con entrada.",
        quando: "Verano, por la noche.",
        tempo: "1 hora",
        consiglio: "Comprobar día y hora in situ: varían."
      },
      {
        nome: "Península de Pelješac",
        testo: "La larga península de enfrente, con pequeños productores de Plavac mali. Desde Orebić se llega a Korčula con una corta travesía en ferry.",
        come: "En coche, visitando las bodegas de Dingač y Potomje.",
        quando: "Primavera y otoño.",
        tempo: "media jornada",
        consiglio: "Reservar las catas, sobre todo en temporada alta."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Casco antiguo por la mañana",
          "Comida junto al mar",
          "Playa de Lumbarda o paseo en barca",
          "Moreška por la noche, si hay función"
        ]
      }
    ],
    zone: [
      {
        nome: "Casco antiguo",
        perChi: "para el ambiente",
        testo: "Habitaciones en el centro histórico; música y paseo por la noche, pero se duerme bien."
      },
      {
        nome: "Lumbarda",
        perChi: "para playas",
        testo: "Pueblo con playas de arena y viñedos, a pocos kilómetros de la ciudad."
      }
    ],
    sapori: [
      {
        nome: "Grk",
        testo: "Vino blanco seco de la zona de Lumbarda."
      },
      {
        nome: "Pošip",
        testo: "Blanco aromático local, excelente con pescado."
      },
      {
        nome: "Plavac mali",
        testo: "Tinto potente de Pelješac."
      },
      {
        nome: "Zrnovski makaruli",
        testo: "Pasta fresca local, con salsa de carne."
      }
    ],
    attenzioni: [
      "El ferry desde Split y Dubrovnik hay que reservarlo en temporada alta.",
      "Con viento de bora las conexiones pueden cancelarse.",
      "En los restaurantes del muelle comprobar el precio del pescado al peso."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'La ciudad vieja de Korčula en la península fortificada',
    immagine: '/images/viaggi/croazia-itinerario/giorno-10-curzola.jpg',
  },
  {
    slug: 'dubrovnik',
    paeseSlug: 'croazia',
    ordine: 7,
    nome: 'Dubrovnik y Ston',
    tipologia: ['città fortificata', 'mare', 'isole'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      'La antigua república de Ragusa, cerrada por dos kilómetros de murallas sobre el mar, con el Stradun, los palacios y los monasterios. Enfrente está la isla de Lokrum; al norte, Ston con sus murallas de más de cinco kilómetros y las ostras de Mali Ston.',
    percheAndarci: 'Por el recorrido de las murallas, la ciudad vieja, Lokrum y las excursiones a Ston, las Elafiti y la bahía de Kotor.',
    cosaVedere: [
      'Las murallas y la fortaleza de Lovrijenac',
      'El Stradun y el palacio del Rector',
      'La isla de Lokrum',
      'El panorama desde el monte Srđ',
      'Las murallas y las salinas de Ston',
    ],
    cosaFare: ['El recorrido de las murallas a última hora de la tarde', 'Un baño en el Buža, fuera de las murallas', 'Ostras en Mali Ston'],
    doveDormire: 'Dentro de las murallas (desde 150 €, a menudo más de 250 € en temporada alta) o en Lapad y Gruž para precios más bajos.',
    comeArrivare:
      "El aeropuerto de Dubrovnik (Čilipi) está a unos 20 km al sur de la ciudad: el autobús lanzadera Platanus llega a la Puerta de Ploče y a la estación de Gruž en unos 30-35 minutos, por unos 10 € (15 € ida y vuelta); el taxi cuesta unos 40-50 €, Uber y Bolt suelen salir más baratos. Los catamaranes desde Split, Hvar y Korčula atracan en Gruž, desde donde los autobuses Libertas 1A y 1B llevan a la Puerta Pile por unos 2 €. En coche se llega desde el norte por el puente de Pelješac, sin pasar por Bosnia en Neum; el aparcamiento cerca del casco antiguo es escaso y caro.",
    comeSpostarsi: 'A pie por el centro; autobuses urbanos a Gruž y Lapad; barco a Lokrum.',
    periodoMigliore: 'mayo-junio y septiembre-octubre.',
    costi:
      "Murallas unos 40 € (incluyen la fortaleza de Lovrijenac); teleférico 30 € ida y vuelta; Lokrum 30 € con el barco; Palacio del Rector 15 €, o 20 € con la entrada única de los diez museos de la ciudad, válida 7 días; murallas de Ston unos 10 €. Presupuesto diario por persona, compartiendo habitación doble: bajo 70-100 €, medio 130-200 €, alto más de 300 €. Dubrovnik es la ciudad más cara de Croacia, sobre todo en julio y agosto.",
    erroriDaEvitare: [
      'Subir a las murallas en las horas centrales, con calor y la multitud de los cruceros',
      'Reservar dentro de las murallas sin tener en cuenta las escaleras con el equipaje',
      'Llegar en coche y buscar aparcamiento cerca de la ciudad vieja',
    ],
    luoghi: [
      {
        "nome": "Murallas de Dubrovnik",
        "testo": "Un anillo de murallas medievales de casi dos kilómetros alrededor del casco antiguo, con torres y baluartes. El mejor recorrido para ver los tejados rojos y el mar.",
        "come": "Se sube por la Puerta Pile o por el lado del puerto, siguiendo las indicaciones en el lugar.",
        "quando": "A la apertura o al final de la tarde: a mediodía hace calor y hay mucha gente.",
        "tempo": "1 hora y media-2 horas",
        "costo": "unos 40 € (2026), con la entrada a la fortaleza de Lovrijenac incluida",
        "consiglio": "Llevar agua y gorra: hay poca sombra.",
        "lat": 42.64172,
        "lng": 18.10729,
        "url": "https://citywallsdubrovnik.hr/"
      },
      {
        "nome": "Stradun y casco antiguo",
        "testo": "La calle principal de piedra pulida, de unos 300 metros, con la fuente de Onofrio, el Palacio del Rector y la iglesia de San Blas. Tras el terremoto de 1667 se reconstruyó en formas barrocas.",
        "come": "A pie desde la Puerta Pile. Los coches no entran.",
        "quando": "A primera hora o por la noche.",
        "tempo": "2-3 horas",
        "consiglio": "Un paseo después de las 20, cuando se han ido los grupos, es muy distinto.",
        "costo": "gratis",
        "orari": "Siempre accesible; iglesias y museos de la calle tienen su propio horario.",
        "lat": 42.64134,
        "lng": 18.10885
      },
      {
        "nome": "Fortaleza de Lovrijenac",
        "testo": "La fortaleza sobre un espolón de roca de 37 metros fuera de la Puerta Pile, que vigilaba la ciudad por el lado del mar. Sobre la entrada se lee «Non bene pro toto libertas venditur auro», el lema de la república de Ragusa. Desde las terrazas se ven las murallas de enfrente, la bahía de Pile y el mar abierto.",
        "come": "A pie desde la Puerta Pile, por una escalinata empinada. Se entra con la entrada de las murallas.",
        "quando": "A última hora de la tarde, después de las murallas, cuando la luz da en los baluartes de enfrente.",
        "tempo": "45 minutos",
        "costo": "incluida en la entrada de las murallas (unos 40 €, 2026)",
        "lat": 42.6408,
        "lng": 18.10423,
        "url": "https://citywallsdubrovnik.hr/",
        "consiglio": "Guardar la entrada de las murallas: también vale aquí los días siguientes."
      },
      {
        "nome": "Palacio del Rector",
        "testo": "El palacio gótico-renacentista desde el que se gobernaba la república: el rector vivía aquí un mes y luego dejaba el puesto a otro noble. Hoy es el Museo de Historia Cultural, con los salones de representación, la armería, las celdas y el patio porticado. Es la forma más clara de entender cómo funcionaba Ragusa.",
        "come": "En la plaza de la Luža, al final del Stradun. Entrada individual o única para los diez museos de la ciudad.",
        "quando": "Por la mañana, antes de los grupos de los cruceros.",
        "tempo": "1 hora",
        "costo": "15 €; entrada única para 10 museos 20 €, válida 7 días (tarifa oficial)",
        "orari": "1 de abril-31 de octubre todos los días 9-18; 1 de noviembre-31 de marzo 9-16, cerrado los lunes. Cerrado en Navidad, Año Nuevo y el 3 de febrero (San Blas).",
        "lat": 42.64032,
        "lng": 18.11073,
        "url": "https://www.dumus.hr/en/",
        "consiglio": "Si también se piensa ver el Museo de la Guerra Patria en el Srđ o el Museo Marítimo, compensa la entrada única."
      },
      {
        "nome": "Isla de Lokrum",
        "testo": "La isla boscosa frente al casco antiguo, reserva natural a unos 600 metros de la ciudad. Hay un monasterio benedictino con jardín botánico, el fuerte napoleónico en lo alto, pavos reales sueltos y el «Mar Muerto», un pequeño lago de agua salada donde uno se baña. Se nada desde las rocas, lejos del gentío del Stradun.",
        "come": "Barcos regulares desde el puerto viejo, con una travesía corta.",
        "quando": "En la temporada buena, por la mañana; horarios de los barcos en el puerto.",
        "tempo": "medio día",
        "consiglio": "Comprobar la hora del último barco de vuelta antes de ir.",
        "costo": "30 € adultos, 5 € de 7 a 18 años, barco de ida y vuelta incluido (tarifa 2026)",
        "orari": "Barcos desde el puerto viejo; desde el 9 de noviembre de 2026 cada hora de 10 a 15, último regreso a las 16; en verano, más frecuentes. Con mala mar el barco no sale y en la isla no se puede pernoctar.",
        "lat": 42.62757,
        "lng": 18.12066,
        "url": "https://www.lokrum.hr/"
      },
      {
        "nome": "Teleférico y monte Srđ",
        "testo": "Desde la estación sobre las murallas el teleférico sube en pocos minutos al monte Srđ, de 412 metros, con vistas a toda la ciudad y las islas. Arriba está el Fuerte Imperial, construido por los franceses a principios del siglo XIX, que alberga el museo de la guerra de los años noventa, cuando la ciudad fue sitiada. Al atardecer los tejados rojos y Lokrum se tiñen de color, y es el mejor momento.",
        "come": "Desde la estación cerca de la Puerta Buža, a pie.",
        "quando": "Final de la tarde para el atardecer.",
        "tempo": "1-2 horas",
        "costo": "30 € ida y vuelta, 17 € solo ida (web oficial, 2026). Cerrado en diciembre y de enero a marzo; último viaje 30 minutos antes del cierre.",
        "consiglio": "Reservar horario de atardecer: las colas pueden ser largas.",
        "orari": "2026: abril 9-21; mayo 9-22 (desde el 15 hasta las 23:30); junio-agosto 9-24; septiembre 9-24 (desde el 15 hasta las 23); octubre 9-21 (desde el 21 hasta las 20); noviembre 9-17. Cerrado de diciembre a marzo y con viento fuerte.",
        "lat": 42.64307,
        "lng": 18.11157,
        "url": "https://www.dubrovnikcablecar.com/"
      },
      {
        "nome": "Monasterio franciscano",
        "testo": "El convento de los Frailes Menores, justo dentro de la Puerta Pile, con un claustro románico de columnas pareadas y capiteles todos distintos. Dentro hay una farmacia abierta a comienzos del siglo XIV y todavía en funcionamiento, de las más antiguas de Europa. El pequeño museo conserva los tarros y registros de la antigua botica.",
        "come": "Se entra desde el Stradun, justo a la izquierda tras la Puerta Pile. Entrada para claustro y museo; la farmacia se visita como tienda.",
        "quando": "A la apertura, cuando el claustro aún está en silencio.",
        "tempo": "30-45 minutos",
        "lat": 42.64167,
        "lng": 18.10773
      },
      {
        "nome": "Catedral de la Asunción",
        "testo": "La catedral barroca reconstruida tras el terremoto de 1667, en el lugar de una iglesia románica más antigua. Sobre el altar mayor hay un políptico de la Asunción atribuido al taller de Tiziano. El tesoro guarda los relicarios de San Blas, el patrón de la ciudad.",
        "come": "Detrás del Palacio del Rector, hacia el puerto viejo. La iglesia es gratuita; el tesoro se paga aparte.",
        "quando": "Fuera del horario de misas, por la mañana.",
        "tempo": "30 minutos",
        "lat": 42.63991,
        "lng": 18.11042
      },
      {
        "nome": "Iglesia de San Blas y columna de Orlando",
        "testo": "La iglesia barroca del patrón, al final del Stradun, con la estatua de plata del santo que sostiene una maqueta de la ciudad. Delante está la columna de Orlando, de 1418, donde se leían los decretos y se izaba la bandera de la república. El 3 de febrero la fiesta de San Blas llena la plaza.",
        "come": "En la plaza de la Luža, a pie desde el Stradun.",
        "quando": "Por la noche, cuando la plaza se vacía y la fachada está iluminada.",
        "tempo": "20 minutos",
        "costo": "gratis",
        "lat": 42.6407,
        "lng": 18.11028
      },
      {
        "nome": "Monasterio dominico",
        "testo": "El gran convento junto a la Puerta de Ploče, encajado en las murallas del lado este. El claustro gótico con ajimeces y jardín es uno de los rincones más tranquilos del casco antiguo. El museo reúne pinturas de la escuela ragusea, orfebrería y manuscritos.",
        "come": "A pie desde la plaza de la Luža hacia la Puerta de Ploče. Entrada en el acceso al claustro.",
        "quando": "A primera hora de la tarde, cuando los grupos están en las murallas.",
        "tempo": "45 minutos",
        "lat": 42.64165,
        "lng": 18.11111
      },
      {
        "nome": "Buža, las rocas bajo las murallas",
        "testo": "Una abertura en las murallas del lado sur lleva a un bar sobre rocas cortadas a pico sobre el mar. Se toma algo mirando Lokrum y uno se tira al agua desde las rocas, con escalerillas metálicas para subir.",
        "come": "Se sigue el cartel «Cold drinks» desde la zona de la iglesia de los jesuitas y se pasa por el hueco de la muralla.",
        "quando": "Al atardecer para el bar, por la mañana para nadar con menos gente.",
        "tempo": "1-2 horas",
        "lat": 42.63899,
        "lng": 18.10884,
        "consiglio": "Escarpines y nada de niños pequeños: no hay playa, solo rocas."
      },
      {
        "nome": "Playa de Banje",
        "testo": "La playa de cantos más cercana al casco antiguo, justo fuera de la Puerta de Ploče, con vistas a las murallas y a Lokrum. Una parte es libre y otra la ocupa un beach club con tumbonas de pago.",
        "come": "A 5 minutos a pie de la Puerta de Ploče, bajando desde la carretera.",
        "quando": "A primera hora o después de las 17; en las horas centrales del verano está llena.",
        "tempo": "2-3 horas",
        "costo": "acceso libre; tumbonas del beach club de pago",
        "lat": 42.64161,
        "lng": 18.11638
      },
      {
        "nome": "Ston y las ostras de Mali Ston",
        "testo": "Las murallas de Ston, de unos 5,5 km, son de los sistemas de fortificación más largos conservados del mundo. En la bahía de Mali Ston se crían las ostras.",
        "come": "En coche desde Dubrovnik por la costa hacia el noroeste, al comienzo de la península de Pelješac.",
        "quando": "Por la mañana para las murallas y comida con ostras.",
        "tempo": "media jornada",
        "consiglio": "Las murallas son de pago y la caminata cansa.",
        "costo": "murallas de Ston unos 10 € (2026)",
        "lat": 42.83964,
        "lng": 17.69399
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: el Stradun a la apertura, el monasterio franciscano y el Palacio del Rector antes de los cruceros",
          "Media mañana: la catedral y la iglesia de San Blas en la Luža",
          "Comida: fuera del Stradun, en las callejuelas laterales",
          "Tarde: baño en Banje o en las rocas del Buža",
          "Última hora de la tarde: las murallas desde la Puerta Pile y luego Lovrijenac con la misma entrada",
          "Noche: teleférico al Srđ para la puesta de sol"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como en el programa de un día",
          "Día 2, mañana: barco a Lokrum, monasterio benedictino, jardín botánico y baño en el «Mar Muerto»",
          "Día 2, tarde: monasterio dominico y Museo Marítimo con la entrada única de los museos",
          "Día 2, noche: cena en Lapad o en Gruž, más baratos que el centro"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1 y 2: como arriba",
          "Día 3: en coche a Ston, murallas hasta Mali Ston por la mañana y ostras a mediodía, luego las bodegas de Dingač en la península de Pelješac",
          "Como alternativa: barco a las islas Elafiti (Koločep, Lopud, Šipan) desde el puerto de Gruž"
        ]
      }
    ],
    zone: [
      {
        "nome": "Casco antiguo",
        "perChi": "para dormir dentro de las murallas",
        "testo": "Habitaciones dentro de la ciudad, pero ruidoso, abarrotado de día y con pocos servicios para coches.",
        "fascia": "150-350 €"
      },
      {
        "nome": "Ploče",
        "perChi": "Quien quiere vistas al casco antiguo y tiene presupuesto alto",
        "testo": "El barrio en la ladera justo al este de la Puerta de Ploče, con los hoteles más caros y terrazas sobre el puerto viejo y Lokrum. Banje queda debajo y el casco antiguo a pocos minutos a pie, pero todo son escaleras.",
        "fascia": "250-500 €"
      },
      {
        "nome": "Lapad y Babin Kuk",
        "perChi": "para playas",
        "testo": "Penínsulas a pocos km, con hoteles, playas y autobuses al centro.",
        "fascia": "100-250 €"
      },
      {
        "nome": "Gruž",
        "perChi": "Quien llega o se va en catamarán y busca precios más bajos",
        "testo": "El barrio del puerto, con el mercado de la mañana, la estación de autobuses y los muelles de los catamaranes. No es el más bonito, pero las habitaciones cuestan menos y los autobuses 1A y 1B llegan a la Puerta Pile en un cuarto de hora.",
        "fascia": "80-180 €"
      }
    ],
    gite: [
      {
        "nome": "Cavtat",
        "distanza": "unos 20 km, 30 minutos",
        "come": "Autobús urbano Libertas línea 10 desde la estación de Gruž o barco desde el puerto viejo de Dubrovnik.",
        "testo": "Un pueblo de mar tranquilo en una península verde, con paseo de palmeras, el mausoleo Račić del escultor Meštrović y un sendero alrededor de la punta con calas para bañarse. Está cerca del aeropuerto: sirve también para la última mañana."
      },
      {
        "nome": "Islas Elafiti",
        "distanza": "de 30 minutos a 1 hora en barco",
        "come": "Barcos de línea de Jadrolinija o excursiones organizadas desde el puerto de Gruž hacia Koločep, Lopud y Šipan.",
        "testo": "Tres islas sin coches, con pueblos de pescadores, villas de verano de la nobleza ragusea y playas como la arenosa Šunj en Lopud. Se pueden combinar dos islas en el mismo día."
      },
      {
        "nome": "Mljet",
        "distanza": "unas 1,5-2 horas en catamarán",
        "come": "Catamarán desde el puerto de Gruž; luego autobús, bici o a pie hasta los lagos del parque nacional.",
        "testo": "La mitad oeste de la isla es parque nacional, con dos lagos salados entre pinares y el monasterio benedictino en el islote de Santa María, en medio del lago grande. Se recorre en bici o en kayak."
      },
      {
        "nome": "Bocas de Kotor (Montenegro)",
        "distanza": "unas 2 horas en coche, con frontera",
        "come": "En coche de alquiler (hace falta el permiso de la empresa y la carta verde) o con una excursión organizada.",
        "testo": "El fiordo de Montenegro con Perast y sus islotes y la ciudad amurallada de Kotor bajo la montaña. La frontera, fuera de Schengen, puede ser lenta en verano: conviene salir temprano."
      }
    ],
    sapori: [
      {
        nome: "Ostras de Mali Ston",
        testo: "Pequeñas y saladas, criadas en la bahía cercana."
      },
      {
        nome: "Rožata",
        testo: "El flan de caramelo de la ciudad."
      },
      {
        nome: "Crni rižot",
        testo: "Risotto negro con tinta de sepia."
      },
      {
        nome: "Dingač",
        testo: "Tinto intenso de la península de Pelješac."
      }
    ],
    attenzioni: [
      "En temporada alta la ciudad está muy llena, con límites para los cruceros: evitar las horas centrales.",
      "Los restaurantes del Stradun cuestan más: ir a callejuelas laterales o fuera de las murallas.",
      "Los aparcamientos dentro y fuera de la ciudad cobran por horas y multan a quien se pasa.",
      "El puente de Pelješac evita cruzar Bosnia en Neum, así que no hay controles de frontera."
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Dubrovnik?",
        "risposta": "Dos días bastan para las murallas, el casco antiguo, el teleférico y Lokrum. Con tres se añade Ston con sus ostras, las Elafiti o Montenegro."
      },
      {
        "domanda": "¿Cuánto cuestan las murallas de Dubrovnik y compensa el Dubrovnik Pass?",
        "risposta": "La entrada a las murallas cuesta unos 40 € e incluye la fortaleza de Lovrijenac. El Dubrovnik Pass de un día cuesta lo mismo y añade museos y autobuses, pero no el teleférico."
      },
      {
        "domanda": "¿Cuál es la mejor hora para recorrer las murallas?",
        "risposta": "A la apertura o a última hora de la tarde. A mediodía en verano hace mucho calor, casi no hay sombra y llegan los grupos de los cruceros."
      },
      {
        "domanda": "¿Dónde dormir en Dubrovnik?",
        "risposta": "Dentro de las murallas por el ambiente (unos 150-350 € la noche, con muchas escaleras), en Ploče por las vistas, en Lapad por las playas y los precios más bajos, en Gruž por el puerto de catamaranes."
      },
      {
        "domanda": "¿Cómo se llega a Lokrum y cuánto cuesta?",
        "risposta": "En barco desde el puerto viejo, en unos 15 minutos. La entrada a la reserva cuesta 30 € (5 € de 7 a 18 años) e incluye la travesía; el último barco vuelve por la tarde."
      },
      {
        "domanda": "¿Se puede hacer una excursión a Montenegro desde Dubrovnik?",
        "risposta": "Sí, las Bocas de Kotor están a unas dos horas por carretera. Hace falta un documento válido para salir del país y, con coche de alquiler, el permiso de la empresa."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['croazia-itinerario'],
    imageAlt: 'Las murallas y el puerto viejo de Dubrovnik sobre el mar',
    immagine: '/images/viaggi/croazia-itinerario/giorno-11-dubrovnik.jpg',
  },
]
