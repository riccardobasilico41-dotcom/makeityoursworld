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
    percheAndarci: 'Como base logística para la reunión de bienvenida y para el primer y el último casado del viaje.',
    cosaVedere: ['El Mercado Central', 'El barrio colonial de Barrio Amón', 'El Museo Nacional'],
    cosaFare: [
      'Cena en el Jardín de Lolita, entre food trucks y ambiente de grupo',
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
    erroriDaEvitare: ['Evitar el centro de la ciudad después de anochecer: mejor moverse siempre en grupo o en Uber', 'Cambiar moneda solo en bancos o casas de cambio autorizadas, nunca en la calle'],
    miaEsperienza:
      "San José merece verse solo de paso. Están bien el Mercado Central y el Museo Nacional, el de historia; por lo demás, nada especial. La cena en el Jardín de Lolita, entre los food trucks y con todo el grupo sentado junto, nos hizo socializar desde la primera noche.",
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
    usciteSerali: 'Hot Rocks para la música en vivo, Selina para el karaoke. De noche mejor moverse siempre en grupo.',
    comeArrivare: 'Unas 4-4h30 de van desde San José.',
    comeSpostarsi: 'Bicicleta de alquiler, tuk tuks locales para los desplazamientos cortos (unos 4$ por persona).',
    periodoMigliore: 'todo el año tropical',
    costi: 'Alquiler de bici unos 6$; tour de Cahuita 50$ por persona; rafting en el Pacuaré 112$.',
    erroriDaEvitare: ['Reservar el tour de Cahuita y el rafting en el Pacuaré con al menos una semana de antelación', 'De noche moverse siempre en grupo, sobre todo las chicas solas'],
    miaEsperienza:
      "Pedaleamos por la costa hasta Punta Uva, con los monos aulladores que se oían en los árboles sobre nuestras cabezas. Cahuita, preciosa de verdad: allí vimos el tiburón nodriza, rayas, varios perezosos, monitos de todo tipo y más. La comunidad bribri, en cambio, es una experiencia cultural, pero no te la imagines como algo auténtico dentro de la selva, al menos por cómo la viví yo. Está bien ver cómo viven, o vivían, y cómo se hace el chocolate, pero no es como los mentawai, por decirlo así. En la zona recomiendo también el Jaguar Rescue Center. Desde aquí fuimos luego a la frontera con Panamá.",
      "luoghi": [
        {
          "nome": "Parque Nacional Cahuita",
          "testo": "Sendero costero entre playa, bosque y mar, con un arrecife de coral frente a la costa. Se ven perezosos, monos aulladores y carablancas, mapaches y aves. En la entrada de Cahuita no se paga entrada sino que se deja un donativo.",
          "come": "Entrada principal en Cahuita, o por el lado de Puerto Vargas. El sendero bordea la playa, en parte con vados.",
          "quando": "Mañana temprano, cuando los animales están activos.",
          "tempo": "3-4 horas",
          "consiglio": "Con guía local se ven muchos más animales. Hay una ficha de experiencia dedicada a un tour completo con el guía José. Nosotros vimos el tiburón nodriza, rayas, varios perezosos y monos."
        },
        {
          "nome": "Punta Uva y Playa Chiquita",
          "testo": "Playas de arena clara al sur de Puerto Viejo, con palmeras y selva detrás. Desde aquí se oyen los monos aulladores en los árboles.",
          "come": "En bici por la costa desde Puerto Viejo; alquiler en el pueblo.",
          "quando": "Mañana o última hora de la tarde.",
          "tempo": "Media jornada",
          "consiglio": "Pedalear por la costa es la forma más sencilla y más real de conocer el Caribe costarricense."
        },
        {
          "nome": "Playa Cocles",
          "testo": "Playa concurrida cerca del pueblo, con olas para surfear y bares en la arena.",
          "come": "En bici o a pie desde el pueblo.",
          "quando": "Última hora de la tarde para el happy hour.",
          "tempo": "2-3 horas",
          "consiglio": "Las corrientes son fuertes: bañarse con cuidado."
        },
        {
          "nome": "Río Pacuare (rafting)",
          "testo": "Un descenso por el río Pacuare, entre gargantas y selva, excursión opcional muy solicitada en la zona.",
          "come": "Tour organizado desde Puerto Viejo, reservado unos días antes.",
          "quando": "Consultar con el operador la mejor época.",
          "tempo": "Día completo",
          "consiglio": "El río está lejos de la costa: es un día largo, con muchas horas de carretera."
        },
        {
          "nome": "Jaguar Rescue Center",
          "testo": "Un centro que recoge animales heridos, enfermos o huérfanos, sobre todo monos, perezosos, aves y reptiles. Los cura y, cuando pueden volver a vivir libres, los libera en el bosque, también desde su estación de liberación La Ceiba.",
          "come": "En Puerto Viejo, en bici o en tuk tuk desde el pueblo.",
          "quando": "Visitas guiadas todos los días a las 9.30 y a las 11.30; visita privada a las 14, con plazas limitadas.",
          "tempo": "1,5-2 horas",
          "url": "https://www.jaguarrescue.foundation/en-us/",
          "consiglio": "Solo se entra con la visita guiada: reservarla en línea en su web."
        },
        {
          "nome": "Frontera de Sixaola, hacia Panamá",
          "testo": "Desde Puerto Viejo o Cahuita se llega en bus a Sixaola, se cruza el puente binacional sobre el río Sixaola, abierto en 2021, y se entra en Panamá por Guabito. Desde allí se sigue hacia Bocas del Toro.",
          "come": "Bus local hasta Sixaola, luego a pie por el puente. Después de Guabito: bus o taxi colectivo hasta Changuinola y Almirante, luego water taxi hasta Bocas Town (unos 30 minutos).",
          "quando": "Temprano por la mañana: las oficinas de frontera cierran a última hora de la tarde.",
          "tempo": "Media jornada hasta Bocas",
          "costo": "Impuesto de salida terrestre de Costa Rica: 8 USD por persona, en línea en la web del Banco de Costa Rica o en los quioscos del BCR de la frontera.",
          "consiglio": "Panamá puede pedir el billete de salida y la prueba de al menos 1.000 USD o una tarjeta de crédito. Panamá va una hora por delante de Costa Rica."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: bici hasta Punta Uva",
            "Almuerzo de comida caribeña",
            "Tarde: Playa Cocles y happy hour"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: bici por la costa hasta Punta Uva",
            "Día 2: Parque de Cahuita con guía, luego un baño"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Centro de Puerto Viejo",
          "perChi": "vida social y restaurantes",
          "testo": "Todo cerca pero música por la noche, a veces fuerte."
        },
        {
          "nome": "Playa Cocles y Punta Uva",
          "perChi": "calma y naturaleza",
          "testo": "Cabañas en la selva, pero hace falta bici o taxi para cenar."
        }
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
    comeArrivare: '1h30 de van hasta el puerto de Moín, luego 3 horas de navegación en barco.',
    comeSpostarsi: 'A pie: el pueblo no tiene carreteras para coches. Kayak y barco para las excursiones.',
    periodoMigliore: 'julio-octubre para la anidación de las tortugas',
    costi: 'Cerro Tortuguero 6$ de barco + 3$ de entrada; excursión nocturna a las tortugas unos 40$ por persona.',
    erroriDaEvitare: [],
    miaEsperienza:
      "Tortuguero es precioso. Se parece mucho a la Amazonia y es fantástico para la naturaleza. Ya el trayecto en barco desde Moín, entre canales de selva con cocodrilos y monos en las orillas, fue uno de los traslados más bonitos de todo el viaje.",
      "luoghi": [
        {
          "nome": "Canales de Tortuguero",
          "testo": "Una red de canales de manglar y selva en el noreste, habitada por caimanes, cocodrilos, monos, garzas y martines pescadores. Se navega en barca con motor de bajo impacto.",
          "come": "Barca desde Moín o desde la zona de Cariari-La Pavona, largas horas de traslado. El pueblo no tiene carreteras.",
          "quando": "Mañana temprano, por los animales y la luz.",
          "tempo": "2-3 horas",
          "consiglio": "El traslado de Moín a Tortuguero, entre canales y selva, es uno de los más bonitos del viaje y vale como experiencia en sí."
        },
        {
          "nome": "Kayak al amanecer en los manglares",
          "testo": "Kayak en silencio por canales laterales, sin motor, para acercarse a aves y reptiles.",
          "come": "Con guía del lodge, salida antes del amanecer. Hay una ficha de experiencia dedicada.",
          "quando": "Amanecer.",
          "tempo": "2 horas"
        },
        {
          "nome": "Cerro Tortuguero",
          "testo": "Colina con vistas a canales, mar y bosque.",
          "come": "Breve cruce en lancha desde el pueblo hasta el inicio del sendero; preguntar en el lodge las reglas de acceso y la tarifa vigentes.",
          "quando": "Mañana.",
          "tempo": "1-1,5 horas",
          "consiglio": "Llevar agua y repelente: en el bosque húmedo hay muchos mosquitos."
        },
        {
          "nome": "Anidación de tortugas",
          "testo": "En temporada las tortugas verdes ponen huevos en la playa por la noche. Solo se observan con guías autorizados.",
          "come": "Excursión nocturna con guía autorizado, en grupos pequeños y con reglas estrictas.",
          "quando": "Noche, en la temporada de anidación.",
          "tempo": "2-3 horas",
          "consiglio": "Sin luces ni flash: seguir al guía y mantener la distancia."
        }
      ],
      "programmi": [
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: barca desde Moín, llegada al pueblo, paseo a pie",
            "Día 2: kayak al amanecer, canales en barca, Cerro Tortuguero"
          ]
        },
        {
          "titolo": "3 días",
          "tappe": [
            "Días 1-2 como arriba",
            "Día 3: anidación nocturna (en temporada) o trekking en el parque"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Lodges en los canales",
          "perChi": "quien quiere sumergirse en la naturaleza",
          "testo": "Paquetes con comidas y excursiones, aislados y silenciosos. A menudo los únicos servicios son los del lodge."
        },
        {
          "nome": "Pueblo de Tortuguero",
          "perChi": "presupuesto",
          "testo": "Cabinas sencillas y restaurantes, con el ruido del pueblo."
        }
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
    comeArrivare: 'Unos 1h20 de van desde Sarapiquí.',
    comeSpostarsi: 'Minivan a disposición durante todo el día.',
    periodoMigliore: 'última hora de la tarde para las aguas termales',
    costi: 'Cascada de La Fortuna 18-20$; tour combo 90-120$ por persona; canyoning Lost Canyon 115-119$.',
    erroriDaEvitare: ['En las aguas de El Chollín no hay vestuarios: bastan zapatos de río, bañador y linterna frontal, sin toallas'],
    miaEsperienza:
      "La Fortuna es bonita, pero algo overtouristy. Las actividades son caras, pero buenísimas, sobre todo el canyoning, que hicimos y que recomiendo. Las aguas termales gratuitas de El Choyin, en un tramo de río natural, nos parecieron mucho más auténticas que los baños de pago de la zona.",
      "luoghi": [
        {
          "nome": "Cascada de La Fortuna",
          "testo": "Una catarata de unos 70 metros en un cañón de bosque, con unos 530 escalones entre bajada y subida y una poza para bañarse. Hay una ficha de experiencia dedicada.",
          "come": "A pocos minutos en coche o taxi del pueblo de La Fortuna, luego escaleras empinadas hasta la base.",
          "quando": "Abierta todos los días de 7 a 17 h; mejor en la mañana, con menos gente.",
          "tempo": "2 horas",
          "costo": "20 USD para extranjeros (2025); se paga aunque solo se vaya al mirador.",
          "url": "https://www.cataratariofortuna.com/",
          "consiglio": "El regreso es todo cuesta arriba: zapatos con agarre y agua."
        },
        {
          "nome": "El río termal gratuito de El Chollín",
          "testo": "Un tramo del río Tabacón con agua caliente natural y acceso público, a pocos pasos de los resorts termales. No confundir con El Choyín, un complejo de pago en el mismo río.",
          "come": "En coche o taxi desde La Fortuna; se aparca en la carretera, a menudo con un cuidador, y se baja a pie al río por un tramo corto.",
          "quando": "Temprano por la mañana: los fines de semana y festivos está lleno.",
          "tempo": "1-2 horas",
          "consiglio": "No hay duchas, taquillas ni servicios: escarpines, toalla y nada de valor en el coche."
        },
        {
          "nome": "Puentes colgantes de Místico",
          "testo": "Un sendero de unos 3,2 km por el bosque cerca del Arenal, con 16 puentes, 6 de ellos colgantes; los más altos pasan a unos 45 metros sobre el bosque.",
          "come": "En coche o taxi desde La Fortuna; se va por libre o con un guía, que hay que reservar.",
          "quando": "Abierto todos los días desde las 6; último acceso al sendero a las 15:50. Mejor temprano por la mañana, por los animales.",
          "tempo": "2-3 horas",
          "costo": "Desde 32 USD más impuestos por libre, desde 44 USD con guía (web oficial, 2026).",
          "url": "https://www.misticopark.com/"
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: cascada de La Fortuna",
            "Almuerzo en La Fortuna",
            "Tarde: río termal gratuito de El Chollín"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: cascada y aguas termales",
            "Día 2: puentes colgantes de Místico o caminata con vista al volcán, canyoning opcional"
          ]
        }
      ],
      "zone": [
        {
          "nome": "La Fortuna",
          "perChi": "servicios y tours",
          "testo": "El pueblo tiene restaurantes, agencias y hoteles, con vista al volcán."
        },
        {
          "nome": "Alrededores del volcán",
          "perChi": "quien busca silencio",
          "testo": "Lodges en la selva, con termas propias; hace falta coche para cenar."
        }
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
    comeArrivare: 'Unas 3-3h30 de van desde La Fortuna.',
    comeSpostarsi: 'Van privada para las excursiones.',
    periodoMigliore: 'primera hora de la mañana para birdwatching y tirolina',
    costi: 'Caminata nocturna (Kinkajou Night Walk) 28$ por persona; tirolina unos 60$ por persona; birdwatching 50$ por persona.',
    erroriDaEvitare: ['No tener miedo de pedirle al guía que acorte la caminata nocturna si dura demasiado: por la duración no gusta a todos por igual'],
    miaEsperienza:
      "En Monteverde está la tirolina gigante, y es una pasada. También estuvo bien la caminata nocturna por el bosque nuboso, con la fauna que solo se mueve después del atardecer, aunque a alguno la duración (1h30) se le puede hacer larga.",
      "luoghi": [
        {
          "nome": "Bosque nuboso de Monteverde",
          "testo": "Un bosque lluvioso de altura, envuelto en nubes, con miles de especies de plantas, aves e insectos. Se camina por senderos y puentes.",
          "come": "En taxi o buseta desde el pueblo de Santa Elena, por un camino de montaña lento. Desde 2026 la entrada es por horario y se reserva en línea. Mejor con guía para reconocer los animales.",
          "quando": "Senderos del bosque de 7:30 a 16:00 (horario del sitio oficial); temprano por la mañana para las aves. La niebla es parte del paisaje.",
          "tempo": "3-4 horas",
          "url": "https://cloudforestmonteverde.com/"
        },
        {
          "nome": "Caminata nocturna en el bosque",
          "testo": "Excursión de noche con guía y linterna para ver ranas, insectos, tarántulas y otros animales nocturnos. Hay una ficha de experiencia dedicada.",
          "come": "Salida después del atardecer con guía.",
          "quando": "Noche: en la reserva la caminata nocturna sale a las 18:00.",
          "tempo": "1-2 horas",
          "consiglio": "A algunos la duración puede parecerles larga. Llevar chaqueta y zapatos cerrados."
        },
        {
          "nome": "Plantación de café",
          "testo": "Visita a una finca con degustación y explicación del proceso, de la planta a la taza.",
          "come": "Tour de media jornada reservado en el lugar.",
          "quando": "Mañana.",
          "tempo": "2-3 horas"
        },
        {
          "nome": "Zipline aventura",
          "testo": "Un recorrido de tirolesas sobre el dosel. Hay una ficha de experiencia dedicada. En Monteverde está la tirolina gigante: 100% Aventura declara en su web el cable más largo de Costa Rica, 1.590 metros, en 10 líneas, desde 72 USD por persona (2026).",
          "url": "https://www.aventuracanopytour.com/",
          "come": "Reserva con operador local, con traslado.",
          "quando": "Mañana.",
          "tempo": "2-3 horas",
          "consiglio": "Preguntar siempre por el equipo y las medidas de seguridad del operador."
        }
      ],
      "programmi": [
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: bosque nuboso con guía",
            "Almuerzo en Santa Elena",
            "Tarde: café",
            "Noche: caminata nocturna"
          ]
        },
        {
          "titolo": "2 días",
          "tappe": [
            "Día 1: bosque, café y caminata nocturna",
            "Día 2: zipline, birdwatching al amanecer como opción"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Santa Elena",
          "perChi": "servicios y presupuesto",
          "testo": "Restaurantes, agencias y hoteles; para la reserva hace falta taxi o shuttle."
        },
        {
          "nome": "Cerca de la reserva",
          "perChi": "quien busca naturaleza",
          "testo": "Lodges y cabañas cerca del bosque, más aislados y más caros."
        }
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
    erroriDaEvitare: ['Fiarse de operadores improvisados para el whale watching: mejor uno serio como Uvita Ballena Jorobada o la agencia, y preguntar siempre por el seguro'],
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
    comeArrivare: 'Unos 1h30 de traslado desde Uvita.',
    comeSpostarsi: 'A pie por los senderos del parque, con guía.',
    periodoMigliore: 'primera hora de la mañana: nosotros salimos antes del amanecer',
    costi: 'El precio de la entrada no lo apunté; recordad que el parque cierra los martes.',
    erroriDaEvitare: ['Olvidar que el parque cierra los martes: mejor comprobarlo antes y, si hace falta, adelantar la visita'],
    miaEsperienza:
      "Manuel Antonio es bonito como parque, pero por la cantidad de gente que hay casi tienes la sensación de ir al zoo. Aun así sigue siendo muy bonito. Gracias al guía vimos de cerca perezosos, monos e iguanas por senderos que solos nos habría costado mucho más leer.",
      "luoghi": [
        {
          "nome": "Parque Nacional Manuel Antonio",
          "testo": "Un parque pequeño pero rico en vida: perezosos, monos capuchinos, iguanas y colibríes a lo largo de los senderos, con playas dentro del parque. Hay una ficha de experiencia dedicada.",
          "come": "Desde Quepos en bus o coche, en pocos minutos. Con guía se ven muchos más animales.",
          "quando": "Temprano, cuando los animales están activos. Abierto de miércoles a lunes, de 7 a 16 h; cerrado los martes.",
          "tempo": "3-4 horas",
          "costo": "Unos 18 USD para extranjeros adultos (16 USD más IVA, 2025-2026), solo en línea y con cupo limitado.",
          "url": "https://serviciosenlinea.sinac.go.cr/",
          "consiglio": "Con el guía vimos de cerca perezosos, monos e iguanas a lo largo de senderos que solos habríamos tenido mucho más difícil de leer."
        },
        {
          "nome": "Playa Manuel Antonio y Playa Espadilla Sur",
          "testo": "Playas dentro del parque, con arena clara y agua calma. Se puede nadar después de la visita.",
          "come": "Desde los senderos del parque.",
          "quando": "Media mañana.",
          "tempo": "1-2 horas",
          "consiglio": "No dar de comer a los animales ni dejar mochilas sin vigilancia: los monos las abren."
        },
        {
          "nome": "Puente de Tárcoles",
          "testo": "En el trayecto desde Uvita, el puente con los grandes cocodrilos del río Tárcoles.",
          "come": "Parada en la Costanera.",
          "quando": "De día.",
          "tempo": "20-30 minutos"
        }
      ],
      "programmi": [
        {
          "titolo": "Media jornada",
          "tappe": [
            "Llegar a la apertura del parque",
            "Visita guiada de 2-3 horas",
            "Baño en la playa",
            "Almuerzo en Quepos y regreso"
          ]
        },
        {
          "titolo": "1 día",
          "tappe": [
            "Mañana: parque con guía",
            "Tarde: playa pública de Manuel Antonio",
            "Noche: atardecer en el mar"
          ]
        }
      ],
      "zone": [
        {
          "nome": "Carretera entre Quepos y el parque",
          "perChi": "vistas y comodidad",
          "testo": "Hoteles con vista a la costa, pero tráfico de buses y taxis."
        },
        {
          "nome": "Quepos",
          "perChi": "presupuesto",
          "testo": "Más barato, con restaurantes y mercado."
        }
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
    esperienzeSlugs: ['parco-manuel-antonio'],
    tripSlugs: ['costa-rica-itinerario'],
    imageAlt: 'Un perezoso entre los árboles del Parque Nacional Manuel Antonio, Costa Rica',
    immagine: '/images/costa-rica/manuel-antonio-stock.jpg',
  },
]
