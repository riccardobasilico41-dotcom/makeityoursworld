import type { Destinazione } from '@/lib/types'

export const destinazioniPanama: Destinazione[] = [
  {
    slug: 'panama-city',
    paeseSlug: 'panama',
    ordine: 1,
    nome: 'Ciudad de Panamá',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: true,
    introduzione:
      'Una capital con dos caras opuestas a pocos kilómetros de distancia: el skyline de rascacielos sobre la bahía y el Casco Viejo, el centro histórico colonial Patrimonio de la UNESCO, con sus plazas y sus rooftops.',
    percheAndarci:
      'Es el hub aéreo de toda Latinoamérica y la puerta de entrada obligada al país, y a diferencia de muchas capitales de la región merece un par de días.',
    cosaVedere: [
      'El Casco Viejo, con la Plaza de la Independencia y las iglesias coloniales',
      'Las esclusas de Miraflores en el Canal de Panamá, con el centro de visitantes y la terraza panorámica',
      'Las ruinas de Panamá Viejo, la ciudad original destruida por los piratas en 1671',
      'El Biomuseo firmado por Frank Gehry, en la Calzada de Amador',
      'El Parque Natural Metropolitano, selva tropical dentro de los límites de la ciudad',
    ],
    cosaFare: [
      'Visita a las esclusas del canal, mejor en los horarios de tránsito de los barcos (hay una ficha de experiencia dedicada)',
      'Aperitivo en uno de los rooftops del Casco Viejo al atardecer',
      'Excursión de un día a las islas Perlas o a Isla Taboga en ferri',
      'Excursión a Portobelo y a la costa caribeña, a unas 2 horas de la capital',
    ],
    doveDormire: 'Casco Viejo por el ambiente y la vida nocturna; zona de Marbella y Obarrio para hoteles más modernos y precios a menudo más bajos.',
    doveMangiare:
      'El sitio que no hay que saltarse es el Mercado de Mariscos en la bahía: en la planta de abajo se compra el pescado, en la de arriba lo cocinan, y un ceviche en vaso de plástico cuesta un par de dólares. El Casco Viejo tiene los rooftops y los restaurantes de autor, con precios de capital internacional; las fondas de barrio sirven el sancocho, la sopa de pollo con ñame que es el plato nacional, y la ropa vieja. Como comida callejera, para probar las carimañolas y las empanadas fritas en el desayuno.',
    comeArrivare: 'Vuelo internacional a Ciudad de Panamá-Tocumen (PTY), uno de los principales hubs de las Américas; del aeropuerto al centro 30-45 minutos en taxi o Uber.',
    comeSpostarsi: 'Metro (dos líneas, económico y funcional), Uber extendido y conveniente, taxis que hay que negociar siempre antes de subir.',
    periodoMigliore: 'mediados de diciembre-mediados de abril, estación seca; el resto del año llueve sobre todo por la tarde',
    costi: 'se paga en dólares estadounidenses (el balboa solo existe en monedas); entrada a Miraflores unos 20 USD para los extranjeros',
    erroriDaEvitare: [
      'Ir a las esclusas sin comprobar los horarios de tránsito: sin barcos en paso la visita pierde gran parte de su sentido',
      'Andar de noche fuera de las zonas turísticas del Casco Viejo, que linda con barrios que hay que evitar',
    ],
    miaEsperienza:
      'Del aeropuerto fuimos directos al Casco Viejo, y el primer impacto fue un skyline de rascacielos que no se parecía a nada de lo visto en las tres semanas anteriores. Al día siguiente, por la mañana, las esclusas de Miraflores: los horarios de tránsito de los barcos hay que comprobarlos antes, porque sin un barco maniobrando se mira una pileta de cemento vacía, mientras que un portacontenedores que entra con pocos centímetros de margen por cada lado vale por sí solo el desvío. Por la tarde las ruinas de Panamá Viejo y un paseo por el Casco Viejo, donde lo más interesante de mirar es el contraste entre edificios restaurados y fachadas todavía apuntaladas. Comimos en el Mercado de Mariscos con un ceviche en vaso de plástico de un par de dólares. Fuera de las zonas turísticas del Casco, después del atardecer, mejor no andar a pie.',
      "luoghi": [
        {
          "nome": "Esclusas de Miraflores",
          "testo": "Las esclusas del Canal de Panamá donde los barcos son elevados y descendidos entre los dos niveles, con centro de visitantes, museo y terraza panorámica.",
          "come": "Taxi o Uber desde la ciudad de Panamá, unos 20-30 minutos. Entrada en el centro de visitantes.",
          "quando": "Mañana: conviene consultar antes los horarios de tránsito de los barcos, porque sin barco en maniobra se mira una cuenca vacía.",
          "tempo": "2-3 horas",
          "url": "https://pancanal.com/",
          "consiglio": "Un portacontenedores entrando con pocos centímetros de margen a cada lado vale por sí solo el desvío."
        },
        {
          "nome": "Casco Viejo",
          "testo": "El centro histórico colonial, patrimonio UNESCO: Plaza de la Independencia, iglesias, palacios restaurados y fachadas aún apuntaladas, entre cafés y rooftops.",
          "come": "A pie una vez llegados; el barrio se recorre en un día.",
          "quando": "Mañana y atardecer; de noche quedarse en las calles turísticas.",
          "tempo": "Media jornada",
          "consiglio": "El contraste entre edificios restaurados y fachadas apuntaladas es lo más interesante de mirar. Fuera de las zonas turísticas, después del atardecer, mejor no caminar."
        },
        {
          "nome": "Panamá Viejo",
          "testo": "Las ruinas de la ciudad original, fundada en 1519 y destruida por piratas en 1671, con la torre de la catedral.",
          "come": "Taxi desde el centro, unos 15-20 minutos.",
          "quando": "Mañana, antes del calor.",
          "tempo": "1,5 horas",
          "url": "https://www.visitpanama.com/"
        },
        {
          "nome": "Mercado de Mariscos",
          "testo": "El mercado de pescado cerca del Casco Viejo, con puestos de ceviche servido en vasos.",
          "come": "A pie desde el Casco Viejo, 10 minutos.",
          "quando": "Almuerzo.",
          "tempo": "1 hora",
          "consiglio": "Ceviche en vaso de plástico por un par de dólares."
        },
        {
          "nome": "Biomuseo",
          "testo": "El museo diseñado por Frank Gehry en la Calzada de Amador, sobre el surgimiento del istmo de Panamá y la biodiversidad.",
          "come": "Taxi o Uber.",
          "quando": "Mañana.",
          "tempo": "2 horas"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: esclusas de Miraflores con un barco en tránsito",
            "Almuerzo en el Mercado de Mariscos",
            "Tarde: Casco Viejo",
            "Atardecer en el mar desde la Cinta Costera"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: Miraflores, Casco Viejo",
            "Día 2: Panamá Viejo, Biomuseo, Calzada de Amador"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Casco Viejo",
          "perChi": "ambiente y locales",
          "testo": "Hoteles y restaurantes en edificios restaurados, a pie. Más caros, ruidosos de noche los fines de semana."
        },
        {
          "nome": "Bella Vista y Obarrio",
          "perChi": "servicios y precios",
          "testo": "Un barrio de rascacielos, hoteles y restaurantes, bien conectado en taxi."
        }
      ],
      "sapori": [
        {
          "nome": "Ceviche",
          "testo": "Pescado crudo marinado en lima, en el Mercado de Mariscos."
        },
        {
          "nome": "Sancocho",
          "testo": "Sopa de pollo con yuca y culantro, el plato nacional."
        },
        {
          "nome": "Arroz con pollo",
          "testo": "Arroz con pollo y verduras, en las fondas."
        },
        {
          "nome": "Patacones",
          "testo": "Plátano verde frito y aplastado, para acompañar los platos."
        }
      ],
      "attenzioni": [
        "Fuera del Casco turístico, después del atardecer, no caminar: usar taxis o apps.",
        "Antes de ir a Miraflores consultar los horarios de tránsito de los barcos.",
        "Taxis sin taxímetro: acordar el precio antes de salir o usar Uber."
      ],
    esperienzeSlugs: ['chiuse-miraflores'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'El skyline de rascacielos de Ciudad de Panamá visto desde una terraza del Casco Viejo',
    immagine: '/images/panama/panama-city.jpg',
  },
  {
    slug: 'san-blas',
    paeseSlug: 'panama',
    ordine: 2,
    nome: 'San Blas (Guna Yala)',
    tipologia: ['mare', 'isole', 'cultura'],
    giorniConsigliati: '2-4 días',
    visitataPersonalmente: true,
    introduzione:
      'Un archipiélago de más de 300 islas caribeñas administrado de forma autónoma por el pueblo guna: palmeras, arena blanca, agua poco profunda turquesa y alojamientos esenciales por elección, a menudo sin electricidad continua.',
    percheAndarci:
      'Es el mar más famoso de Panamá y uno de los pocos territorios indígenas autogobernados del continente: las reglas de acceso, los transportes y las instalaciones los gestiona la comunidad guna, sin cadenas turísticas.',
    cosaVedere: [
      'Las islas más conocidas para las excursiones de un día: Isla Perro (con un pecio para hacer snorkel), Isla Aguja, Cayos Holandeses',
      'Las piscinas naturales de agua poco profunda en medio del mar',
      'Los pueblos guna, donde se compran las molas, los tejidos tradicionales cosidos a mano',
    ],
    cosaFare: [
      'Noche en cabaña en una isla, con comidas incluidas y paseos en barca entre los islotes',
      'Snorkel en los pecios y en los bajíos coralinos',
      'Travesía a vela hacia Colombia (3-5 días), alternativa clásica al Tapón del Darién',
    ],
    doveDormire: 'Solo cabañas gestionadas por las familias guna, desde las muy espartanas hasta alguna opción con baño privado: se reserva en paquete, con transporte y comidas incluidos.',
    doveMangiare: 'Las comidas casi siempre están incluidas en el paquete: pescado, langosta en temporada, arroz y plátano.',
    comeArrivare:
      'Traslado en 4x4 desde Ciudad de Panamá hasta el puerto de Cartí (unas 2 h 30-3 h por una carretera de montaña muy empinada), luego barca hacia las islas. Salidas muy temprano por la mañana.',
    comeSpostarsi: 'Solo en barca, con los traslados organizados por el alojamiento.',
    periodoMigliore: 'estación seca (diciembre-abril) para un mar más tranquilo; la travesía en barca puede ser exigente con viento',
    costi:
      'entrada al territorio guna y tasas de las islas, que se pagan en efectivo; traslado 4x4 más barca 40-60 USD por tramo; paquetes con cabaña y comidas 60-150 USD por persona y noche',
    erroriDaEvitare: [
      'Llegar sin efectivo: en las islas no hay cajeros ni pagos con tarjeta',
      'Esperar comodidades de resort: electricidad limitada, agua dulce racionada y wifi casi inexistente forman parte de la experiencia',
      'Reservar con intermediarios no autorizados: los alojamientos y los transportes los gestiona la comunidad guna, que regula los accesos',
    ],
    miaEsperienza:
      'Llegar fue el traslado más exigente de la segunda parte: despertador hacia las cinco, casi tres horas de 4x4 por una carretera de montaña de pendientes empinadas hasta el puerto de Cartí, luego la barca hacia las islas. Conviene saber en qué se entra. Guna Yala es un territorio autogobernado: el turismo lo gestionan los guna y la tasa de entrada se les paga a ellos, solo en efectivo, porque en las islas no hay cajeros ni tarjetas. Nuestra cabaña era esencial por elección, gestionada por una familia guna: luz a ciertas horas, agua dulce racionada, wifi casi inexistente, comidas incluidas. El día completo lo pasamos en barca entre Isla Perro, con el pecio para hacer snorkel, Isla Aguja, los Cayos Holandeses y las piscinas naturales en medio del mar. Las reglas son de la comunidad: se pide permiso antes de fotografiar a personas y casas, de las islas no se saca nada y las inmersiones con botellas están prohibidas.',
      "luoghi": [
        {
          "nome": "Isla Perro y el naufragio",
          "testo": "Un islote con el naufragio de un barco a pocos metros de la orilla, perfecto para hacer snorkel en agua poco profunda y clara.",
          "come": "En barca desde las islas donde se duerme, en un recorrido de día.",
          "quando": "Mañana, con el mar calmo.",
          "tempo": "1-2 horas",
          "consiglio": "Se hace snorkel sin botellas: la comunidad prohíbe el buceo con botellas."
        },
        {
          "nome": "Isla Aguja y Cayos Holandeses",
          "testo": "Islotes con palmeras y arena blanca, agua turquesa y fondos poco profundos.",
          "come": "Recorrido en barca entre las islas, incluido en el paquete.",
          "quando": "Mañana, con luz limpia.",
          "tempo": "Día"
        },
        {
          "nome": "Piscinas naturales en medio del mar",
          "testo": "Bancos de arena con agua hasta la rodilla, rodeados de mar abierto.",
          "come": "En barca desde la cabaña.",
          "quando": "Mañana.",
          "tempo": "1 hora"
        },
        {
          "nome": "Pueblos guna y molas",
          "testo": "Los pueblos guna, donde se compran las molas, textiles tradicionales cosidos a mano. Guna Yala es un territorio autogobernado.",
          "come": "Visita desde una de las islas habitadas, con el permiso de los residentes.",
          "quando": "De día.",
          "tempo": "1-2 horas",
          "consiglio": "Pedir permiso antes de fotografiar personas y casas, y no llevarse nada de las islas."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Salida al amanecer de la ciudad de Panamá en 4x4 a Cartí",
            "Barca a las islas, snorkel en Isla Perro",
            "Regreso hacia la noche, a menudo demasiado justo para un solo día"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: 4x4 hasta Cartí, barca, noche en cabaña",
            "Día 2: recorrido entre Isla Perro, Isla Aguja, Cayos Holandeses, piscinas naturales, luego regreso"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Cabaña en una isla guna",
          "perChi": "experiencia auténtica",
          "testo": "Esencial por elección: luz por horario, agua dulce racionada, wifi casi inexistente, comidas incluidas, gestionada por una familia guna."
        },
        {
          "nome": "Alojamiento en tierra firme en Cartí",
          "perChi": "quien quiere llegar al amanecer",
          "testo": "Menos sugestivo, pero evita la salida nocturna."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado y langosta a la parrilla",
          "testo": "La pesca de los guna, a menudo incluida en las comidas."
        },
        {
          "nome": "Arroz y frijoles",
          "testo": "Base de cada comida, con plátano frito."
        },
        {
          "nome": "Patacones",
          "testo": "Plátano frito, como acompañamiento."
        },
        {
          "nome": "Coco",
          "testo": "Agua de coco fresca y trozos de pulpa, recogidos en la isla."
        }
      ],
      "attenzioni": [
        "La tasa de entrada a Guna Yala se paga a los guna, solo en efectivo: en las islas no hay cajeros ni tarjetas.",
        "El viaje desde la ciudad de Panamá empieza hacia las 5 y dura casi tres horas en 4x4 por una carretera de montaña empinada: quien se maree que tome un remedio.",
        "Reglas de la comunidad: pedir permiso antes de fotografiar personas y casas, no llevarse nada de las islas, sin botellas de buceo."
      ],
    esperienzeSlugs: ['notte-isola-san-blas'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Islote de arena blanca con palmeras y cabañas en el archipiélago de San Blas, Panamá',
    immagine: '/images/panama/san-blas.jpg',
  },
  {
    slug: 'bocas-del-toro',
    paeseSlug: 'panama',
    ordine: 3,
    nome: 'Bocas del Toro',
    tipologia: ['mare', 'isole', 'nightlife'],
    giorniConsigliati: '3-5 días',
    visitataPersonalmente: true,
    introduzione:
      'Archipiélago caribeño en la frontera con Costa Rica, con casas sobre pilotes, surf, snorkel y la vida nocturna más animada del país.',
    percheAndarci:
      'Es el lugar donde Panamá se vuelve caribeña también en el ambiente: más animado y menos esencial que San Blas, con islas muy distintas entre sí a pocos minutos en barca.',
    cosaVedere: [
      'Isla Colón, con Bocas Town y sus edificios de madera de colores',
      'Starfish Beach, la playa de las estrellas de mar',
      'Isla Bastimentos y el parque nacional marino, con Red Frog Beach',
      'Cayo Zapatilla, a menudo la parada más bonita de los tours en barca',
      'Cayo Coral, para hacer snorkel en aguas poco profundas',
    ],
    cosaFare: [
      'Tour en barca de un día entre los islotes, con paradas de snorkel y avistamiento de delfines',
      'Clase de surf en Playa Bluff o Paunch',
      'Paseo en kayak entre los manglares',
      'Noche en Bocas Town, entre bares sobre el agua y fiestas en las islas',
    ],
    doveDormire: 'Bocas Town en Isla Colón por los servicios y la vida nocturna; Bastimentos o Carenero por la tranquilidad y los alojamientos sobre el agua.',
    doveMangiare:
      'Bocas es el lugar de Panamá donde se come caribeño: pescado y pollo en salsa de coco, rice and beans cocinados con leche de coco en lugar de con agua, patacones por todas partes. El patrimonio afrocaribeño del archipiélago se nota en la cocina más que en cualquier otro punto del país. En Bocas Town los restaurantes sobre el agua cuestan el doble que los chiringuitos a dos calles de distancia, donde se come el mismo pescado; el mercado de la mañana es la opción más económica. La cerveza local helada es casi la bebida oficial de la isla.',
    comeArrivare:
      'Vuelo interno de Ciudad de Panamá a Bocas del Toro (aproximadamente 1 hora) o autobús nocturno hasta Almirante y water taxi (unos 30 minutos). Mucha gente llega también por tierra desde Costa Rica, desde la frontera de Sixaola.',
    comeSpostarsi: 'Water taxi entre las islas (pocos dólares por tramo), bicicletas y taxis en Isla Colón.',
    periodoMigliore:
      'tiene un microclima distinto al del resto del país: septiembre-octubre y febrero-marzo suelen ser los periodos más soleados, mientras que aquí la «estación seca» panameña no siempre coincide',
    costi: 'tour en barca de un día 25-40 USD por persona más las tasas del parque nacional; vuelo interno 100-150 USD por tramo',
    erroriDaEvitare: [
      'Dar por hecha la estación seca nacional: aquí el tiempo sigue un ciclo distinto al del resto de Panamá',
      'Programar el tour en barca sin tener en cuenta el mar picado, que puede cancelar las salidas hacia los cayos más exteriores',
    ],
    miaEsperienza:
      'Desde Boquete llegamos a Bocas por tierra hasta Almirante y luego en water taxi, y fue lo opuesto a San Blas: casas sobre pilotes, un ambiente mucho más social y ruidoso, hostales y gente que casi siempre se queda más de lo previsto. Al día siguiente hicimos el paseo en barca entre los islotes: Cayo Zapatilla, a menudo el punto más bonito de todo el recorrido, y Starfish Beach, que cumple la promesa del nombre con estrellas de mar en agua de poco más de un metro, más una parada de snorkel en Cayo Coral. Las salidas hacia los cayos más exteriores se cancelan con el mar picado, y es una eventualidad que hay que tener en cuenta. Dos advertencias prácticas: aquí el tiempo sigue un microclima propio y no la estación seca del resto de Panamá, y las arenas están infestadas de chitras, mosquitos que pican sin que se note y dejan marcas durante días. Por la noche, en Bocas Town, música en directo y fiestas que a menudo se trasladan en barca a las islas cercanas.',
      "luoghi": [
        {
          "nome": "Isla Colón y Bocas Town",
          "testo": "La ciudad principal del archipiélago, con casas de madera de colores sobre pilotes, hostales y vida nocturna.",
          "come": "Llegada en water taxi desde Almirante o en avión desde la ciudad de Panamá.",
          "quando": "Noche, para música en vivo y fiestas.",
          "tempo": "Media jornada"
        },
        {
          "nome": "Cayo Zapatilla",
          "testo": "Dos islotes deshabitados en el parque marino de Bastimentos, con arena blanca y selva. A menudo la parada más bonita de los tours en barca.",
          "come": "Con tour en barca desde Bocas Town; entrada al parque aparte.",
          "quando": "Mañana, con mar calmo.",
          "tempo": "Media jornada",
          "consiglio": "Las salidas a los cayos más externos se cancelan con mar picado: tenerlo en cuenta."
        },
        {
          "nome": "Starfish Beach",
          "testo": "La playa de las estrellas de mar: se ven en agua de poco más de un metro, y se cumple la promesa del nombre.",
          "come": "Parada en los tours en barca o en taxi acuático.",
          "quando": "Mañana.",
          "tempo": "45 minutos-1 hora",
          "consiglio": "No tocar ni sacar las estrellas de mar del agua."
        },
        {
          "nome": "Cayo Coral e Isla Bastimentos",
          "testo": "Snorkel en aguas poco profundas en Cayo Coral; Bastimentos tiene el parque nacional marino y Red Frog Beach.",
          "come": "Tour en barca desde Bocas Town.",
          "quando": "Mañana.",
          "tempo": "Media jornada"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: tour en barca a Cayo Zapatilla, Starfish Beach, Cayo Coral",
            "Tarde: descanso en Bocas Town",
            "Noche: música en vivo"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: recorrido por los cayos",
            "Día 2: Red Frog Beach en Bastimentos y noche en barca hacia las islas cercanas"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Bocas Town",
          "perChi": "vida social",
          "testo": "Hostales, bares y restaurantes, ruidosa. Gente que casi siempre se queda más de lo previsto."
        },
        {
          "nome": "Bastimentos y Carenero",
          "perChi": "tranquilidad",
          "testo": "Pocos servicios, más naturaleza y silencio."
        }
      ],
      "sapori": [
        {
          "nome": "Pescado al coco",
          "testo": "Plato caribeño con leche de coco y pescado."
        },
        {
          "nome": "Rondón",
          "testo": "Guiso de pescado, plátano y yuca en leche de coco."
        },
        {
          "nome": "Patacones",
          "testo": "Plátano frito con ceviche o queso."
        },
        {
          "nome": "Mariscos",
          "testo": "Cangrejos y langosta, en temporada y en restaurantes frente al mar."
        }
      ],
      "attenzioni": [
        "Bocas tiene su propio microclima y lluvias, no la estación seca del resto de Panamá.",
        "Los chitres, mosquitos que pican sin que se note y dejan marcas durante días, infestan las arenas: repelente.",
        "Las salidas a los cayos más externos se cancelan con mar picado."
      ],
    esperienzeSlugs: [],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Casitas de colores sobre pilotes y muelle de madera sobre el agua en Bocas del Toro, Panamá',
    immagine: '/images/panama/bocas-del-toro.jpg',
  },
  {
    slug: 'boquete',
    paeseSlug: 'panama',
    ordine: 4,
    nome: 'Boquete y las tierras altas',
    tipologia: ['natura', 'trekking'],
    giorniConsigliati: '2-4 días',
    visitataPersonalmente: true,
    introduzione:
      'El Panamá de altura, en la provincia de Chiriquí: clima fresco, plantaciones de café entre las mejores del mundo, bosques nublados y el Volcán Barú, el punto más alto del país.',
    percheAndarci:
      'Es el único lugar del mundo desde el que, con el día adecuado, se ven juntos el océano Pacífico y el mar Caribe. Y es el contrapeso fresco a las islas caribeñas.',
    cosaVedere: [
      'El Volcán Barú (3.475 m), con la subida nocturna para el amanecer sobre los dos océanos',
      'El Sendero Los Quetzales, entre los mejores lugares del mundo para avistar el quetzal',
      'Las plantaciones de café de la zona, entre ellas las que producen el apreciado Geisha',
      'Las cascadas de Lost Waterfalls y las Caldera Hot Springs',
    ],
    cosaFare: [
      'Subida nocturna al Volcán Barú para el amanecer (hay una ficha de experiencia dedicada)',
      'Tour por una finca de café con cata',
      'Observación de aves en el Sendero Los Quetzales, mejor con guía local',
      'Rafting en el Río Chiriquí Viejo',
    ],
    doveDormire: 'El pueblo de Boquete por los servicios; los lodges de las colinas circundantes por el verde y las vistas al valle.',
    doveMangiare:
      'En Boquete se bebe el mejor café del viaje: la zona produce el Geisha, que en las subastas bate récords mundiales de precio, y en las cafeterías del pueblo se prueba a una fracción de lo que cuesta en otros sitios. Para ser un pueblo de montaña la oferta gastronómica es sorprendentemente internacional, por la comunidad de jubilados norteamericanos que vive allí; para comer panameño hacen falta las fondas locales, con el sancocho y la carne guisada. En el mercado de agricultores se encuentran fresas y verdura de altura, raras en el resto del país.',
    comeArrivare:
      'Vuelo interno de Ciudad de Panamá a David (aproximadamente 1 hora), luego 40 minutos en coche o autobús hasta Boquete; como alternativa, autobús nocturno desde la capital (6-7 horas).',
    comeSpostarsi: 'Autobuses locales frecuentes entre David y Boquete; coche de alquiler cómodo para las fincas y los senderos fuera del pueblo.',
    periodoMigliore:
      'diciembre-abril para la subida al Barú con cielos despejados; el bajareque, la llovizna fina típica de la zona, puede aparecer en cualquier estación',
    costi: 'entrada al parque Volcán Barú pocos dólares; subida guiada 50-90 USD por persona; tour del café 30-40 USD',
    erroriDaEvitare: [
      'Subir al Barú sin ropa de invierno: a la cima se llega antes del amanecer, con viento y temperaturas cercanas a cero',
      'Esperar que la vista sobre los dos océanos esté garantizada: ocurre solo con cielo limpio, típicamente en los meses secos',
    ],
    miaEsperienza:
      'Llegamos desde San Blas pasando por Ciudad de Panamá y el vuelo a David, y tras el calor húmedo de las islas Boquete fue un alivio físico: se duerme con la ventana abierta y sin ventilador, algo que en el resto del viaje no pasa casi nunca. Hicimos el tour de una finca de café con cata, y es aquí donde se prueba el Geisha a una fracción de lo que cuesta en otros sitios. La noche siguiente salimos hacia medianoche para el Barú: trece kilómetros de pista de tierra por cada lado, a oscuras, con el frío en aumento, para llegar a la cima, a 3.475 metros, antes del amanecer. La vista sobre los dos océanos juntos solo se tiene con el cielo del todo limpio, es decir, en pocos días buenos incluso en estación seca; aun sin esa suerte, la subida nocturna con los valles iluminados abajo vale el esfuerzo. A última hora de la mañana estábamos de nuevo en Boquete.',
      "luoghi": [
        {
          "nome": "Volcán Barú",
          "testo": "La cumbre más alta de Panamá (3.475 m), desde la que con cielo despejado se ven el Pacífico y el Atlántico a la vez. Subida nocturna para el amanecer.",
          "come": "Salida hacia la medianoche en pick-up y 4x4 por 13 km de pista de tierra, o a pie con guía.",
          "quando": "Amanecer, con cielo del todo despejado, es decir pocos días buenos incluso en estación seca.",
          "tempo": "Noche-mañana",
          "consiglio": "Sin la vista de los dos océanos, la subida nocturna con los valles iluminados debajo merece igualmente el esfuerzo. Llevar capas de abrigo."
        },
        {
          "nome": "Sendero Los Quetzales",
          "testo": "Uno de los mejores lugares del mundo para avistar el quetzal, en el bosque nuboso entre Boquete y Cerro Punta.",
          "come": "Sendero de unas horas, con guía o por cuenta propia.",
          "quando": "Mañana temprano; el mejor periodo para el quetzal es la temporada de anidación, aproximadamente abril-junio.",
          "tempo": "4-5 horas"
        },
        {
          "nome": "Tour de una finca de café",
          "testo": "Visita a una plantación con degustación, incluido el Geisha, el café preciado de Boquete, a una fracción del precio de otros sitios.",
          "come": "Tour de media jornada reservable en el pueblo.",
          "quando": "Mañana.",
          "tempo": "2-3 horas",
          "consiglio": "El Geisha se prueba aquí a una fracción de lo que cuesta en otros lugares."
        },
        {
          "nome": "Cascadas y Caldera Hot Springs",
          "testo": "Lost Waterfalls, un recorrido de tres cascadas, y las aguas termales naturales de Caldera.",
          "come": "Coche o taxi desde Boquete.",
          "quando": "De día.",
          "tempo": "Media jornada"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Tour de una finca de café con degustación",
            "Tarde: Lost Waterfalls o Caldera Hot Springs"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: café y descanso (Boquete es fresca)",
            "Día 2: Sendero Los Quetzales por la mañana, noche para el Barú"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Día 1: café",
            "Día 2: Sendero Los Quetzales",
            "Día 3: Barú al amanecer, luego descanso"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Boquete",
          "perChi": "servicios y vida",
          "testo": "Restaurantes, tours, hoteles; más fresco que el resto de Panamá, se duerme con la ventana abierta."
        },
        {
          "nome": "Alrededores y fincas",
          "perChi": "naturaleza y silencio",
          "testo": "Lodges entre café y selva, lejos de los servicios."
        }
      ],
      "sapori": [
        {
          "nome": "Café Geisha",
          "testo": "El café preciado de la zona, para probar en una finca o en un café de Boquete."
        },
        {
          "nome": "Sancocho",
          "testo": "Sopa de pollo con yuca y culantro."
        },
        {
          "nome": "Trucha",
          "testo": "Criada en ríos de altura, en restaurantes de la zona."
        },
        {
          "nome": "Fresas y verduras de altura",
          "testo": "Productos de los mercados de Boquete."
        }
      ],
      "attenzioni": [
        "El Barú se sube de noche: capas de abrigo, linterna y guía; el frío aumenta con la altura.",
        "La vista de los dos océanos desde la cumbre solo se tiene con cielo del todo despejado, en pocos días buenos.",
        "Lluvia y niebla pueden cambiar los planes: dejar un día de margen."
      ],
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: ['centro-america-itinerario'],
    imageAlt: 'Arcoíris sobre las colinas verdes alrededor de Boquete, en las tierras altas de Chiriquí, Panamá',
    immagine: '/images/panama/boquete.jpg',
  },
]
