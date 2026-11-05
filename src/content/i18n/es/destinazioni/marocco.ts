import type { Destinazione } from '@/lib/types'

export const destinazioniMarocco: Destinazione[] = [
  {
    slug: 'marrakech',
    paeseSlug: 'marocco',
    ordine: 1,
    nome: 'Marrakech',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '3 días, entre el principio y el final del viaje',
    visitataPersonalmente: true,
    introduzione: "La medina, los zocos, Jemaa El-Fna de noche y el Jardin Majorelle: el punto de partida y de llegada del viaje, donde pasamos tres noches en momentos distintos.",
    percheAndarci: "Es la puerta de entrada más cómoda a Marruecos, con monumentos y ambiente que merecen más de una visita.",
    cosaVedere: [
      'Plaza Jemaa El-Fna, el corazón de la medina',
      'Madraza Ali Ben Youssef',
      'Palacio de la Bahía',
      'Tumbas Saadíes',
      'Mezquita Koutoubia (solo el exterior)',
      'Jardin Majorelle',
    ],
    cosaFare: [
      'Visita guiada de Marrakech (mira la ficha de experiencia dedicada)',
      'Visita al Jardin Majorelle (mira la ficha de experiencia dedicada)',
      'Compras en los zocos',
      'Cena con espectáculo en Narwama',
    ],
    doveDormire:
      "Dormimos en Villa Zahra, una villa espaciosa y tranquila, cómoda y menos agobiante que un hotel en el corazón de la medina. Según las reseñas tiene piscina y personal atento. El único inconveniente es la ubicación, un poco alejada del centro, algo que hay que tener presente para los desplazamientos nocturnos.\n\nEconómicas: Central House Marrakech Medina, Equity Point Marrakech · gama media: Riad Nelia, Riad Yasmine · lujo (sin excesos): IZZA, Riad Kaiss.",
    doveMangiare: 'Kui Zin (cena de bienvenida), Narwama (espectáculo durante la cena), Safran by Koya.',
    usciteSerali: 'Churchill Bar o La Pergola.',
    comeArrivare: 'Vuelo internacional a Marrakech.',
    comeSpostarsi: 'Furgoneta privada con guía, a pie por la medina, taxi para el Jardin Majorelle (50 MAD por trayecto).',
    periodoMigliore: 'principios de mayo',
    costi: 'Madraza 50 MAD, Palacio de la Bahía 70 MAD, Tumbas Saadíes 70 MAD, Jardin Majorelle 150 MAD por persona.',
    erroriDaEvitare: ['No reservar el Jardin Majorelle con antelación: las entradas tienen aforo limitado y en las horas centrales se llena enseguida'],
    miaEsperienza:
      "La visita guiada fue una forma excelente de orientarme en la medina, pero el recuerdo más fuerte de Marrakech sigue siendo Jemaa El-Fna, vista de nuevo de noche después del tour, entre encantadores de serpientes, músicos y puestos de todo tipo.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Plaza Jemaa el-Fna",
        "testo": "El corazón de la medina: de día zumos de naranja, aguadores y encantadores de serpientes, de noche cuentacuentos, músicos y decenas de cocinas al aire libre. La UNESCO la proclamó patrimonio inmaterial en 2001 y la inscribió en la Lista en 2008.",
        "come": "Se llega a pie desde la medina; los taxis paran en los bordes. Se camina entre los puestos.",
        "quando": "Al atardecer y por la noche, cuando abren las cocinas.",
        "tempo": "1-2 horas",
        "consiglio": "Comer en los puestos numerados con precios expuestos y elegir los llenos de gente local."
      },
      {
        "nome": "Madrasa Ben Youssef",
        "testo": "La escuela coránica nacida en época meriní en el siglo XIV y reconstruida por el sultán saadí Abdallah al-Ghalib, terminada en 1564-65: entonces era la mayor del Magreb y alojaba hasta 800 estudiantes. El patio tiene una gran alberca en el centro y paredes de zellige, estuco y cedro tallado. Alrededor, en dos plantas, hay unas 130 celdas de estudiantes.",
        "come": "A pie en la medina norte, desde Jemaa el-Fna.",
        "quando": "Mañana a la apertura, para tener los patios vacíos.",
        "tempo": "45 minutos",
        "costo": "50 MAD (de mi viaje)"
      },
      {
        "nome": "Palacio de la Bahía",
        "testo": "El palacio iniciado en la década de 1860 por el gran visir Si Musa y ampliado por su hijo Ba Ahmed hasta 1900: unas 150 estancias, patios, jardines y techos de cedro pintado.",
        "come": "A pie desde el Mellah o Jemaa el-Fna.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "costo": "70 MAD (de mi viaje)"
      },
      {
        "nome": "Tumbas Saadíes",
        "testo": "La necrópolis real saadí, ampliada sobre todo por Ahmad al-Mansur (1578-1603), con columnas de mármol de Carrara, muqarnas y zellige. La Sala de las Doce Columnas es la tumba de al-Mansur.",
        "come": "Detrás de la mezquita de la Kasba, a pie desde Jemaa el-Fna.",
        "quando": "A primera hora: por la tarde se forma cola.",
        "tempo": "30-45 minutos",
        "costo": "70 MAD (de mi viaje)"
      },
      {
        "nome": "Jardín Majorelle",
        "testo": "El jardín botánico de una hectárea creado por el pintor Jacques Majorelle desde 1923, con el azul cobalto que lleva su nombre; en los años ochenta lo compraron y restauraron Yves Saint Laurent y Pierre Bergé. En la villa está el museo bereber Pierre Bergé.",
        "come": "Taxi desde la medina, en el barrio de Guéliz. Entradas solo online, en la web oficial tickets.jardinmajorelle.com.",
        "quando": "Jardín abierto todos los días de 8 a 17.30, última entrada a las 17; museo bereber de 8.30 a 17 (2026). Mejor a la apertura.",
        "tempo": "1-1,5 horas",
        "costo": "150 MAD (de mi viaje)",
        "consiglio": "Comprar la entrada solo en la web oficial: las compradas en otros sitios no dan acceso.",
        "url": "https://www.jardinmajorelle.com/"
      },
      {
        "nome": "Museo Yves Saint Laurent",
        "testo": "Abierto en 2017 a pocos pasos del Jardin Majorelle, muestra por rotación ropa, bocetos y fotografías del diseñador, que tenía casa en Marrakech. También hay una sala de exposiciones temporales.",
        "come": "A pie desde el Jardin Majorelle. Entradas en la web oficial tickets.jardinmajorelle.com.",
        "quando": "Abierto todos los días salvo el miércoles, de 10 a 18, última entrada 17.30 (2026).",
        "tempo": "1 hora",
        "url": "https://www.museeyslmarrakech.com/",
        "consiglio": "Combinarlo con el Majorelle la misma mañana, reservando los dos con antelación."
      },
      {
        "nome": "Mezquita Kutubía",
        "testo": "La mezquita almohade construida entre 1158 y 1195, con un alminar de unos 77 metros que es la referencia de la ciudad y probablemente inspiró la Giralda de Sevilla. Está cerrada a los no musulmanes; en la explanada se ven los restos de la primera mezquita, iniciada en 1147.",
        "come": "A pie desde Jemaa el-Fna, hacia el oeste.",
        "quando": "Atardecer, cuando el alminar se colorea y empieza la llamada a la oración de la tarde.",
        "tempo": "30 minutos",
        "costo": "Exterior y jardines libres"
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Madrasa Ben Youssef y zocos",
          "Almuerzo en la medina",
          "Tarde: Palacio de la Bahía y Tumbas Saadíes",
          "Noche: Jemaa el-Fna al atardecer y cena"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como arriba",
          "Día 2: Jardín Majorelle a la apertura, Guéliz, hammam y cena con espectáculo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "quien quiere la atmósfera de Marrakech",
        "testo": "Riads dentro de las murallas, a pocos minutos de Jemaa el-Fna. Callejones estrechos, ruido, difícil orientarse con equipaje: pedir al riad que envíe a alguien a la puerta."
      },
      {
        "nome": "Guéliz",
        "perChi": "quien quiere una ciudad moderna",
        "testo": "Barrio europeo con restaurantes y tiendas, cerca del Jardín Majorelle. Más tranquilo, pero se pierde la atmósfera."
      },
      {
        "nome": "Hivernage",
        "perChi": "quien quiere hoteles con piscina",
        "testo": "Grandes hoteles con jardín, cerca tanto de la medina como de Guéliz."
      }
    ],
    sapori: [
      {
        "nome": "Tajín",
        "testo": "Carne o pollo con limón, aceitunas y verduras, cocidos en el recipiente de barro."
      },
      {
        "nome": "Cuscús del viernes",
        "testo": "El plato de la semana en las casas; se encuentra en los restaurantes el viernes."
      },
      {
        "nome": "Pastela",
        "testo": "Hojaldre crujiente con pichón o pollo, almendras y canela."
      },
      {
        "nome": "Té de menta",
        "testo": "Siempre servido, para beber caliente y muy dulce."
      }
    ],
    attenzioni: [
      "Los guías no autorizados que se ofrecen en la medina piden luego una propina alta: acordar antes o usar un guía oficial.",
      "Si un chico dice «la calle está cerrada», intenta llevarlo a una tienda: comprobar en el mapa.",
      "En los zocos regatear empezando muy por debajo del primer precio.",
      "Fotos a los encantadores y músicos de Jemaa el-Fna: se paga, acordar antes.",
      "El Jardin Majorelle vende entradas solo online: no llegar sin ella."
    ],
    // GUIDA-END
    esperienzeSlugs: ['tour-marrakech', 'jardin-majorelle'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La plaza Jemaa El-Fna animada de noche en Marrakech, Marruecos',
    immagine: '/images/marocco/marrakech-stock.jpg',
  },
  {
    slug: 'ait-benhaddou',
    paeseSlug: 'marocco',
    ordine: 2,
    nome: 'Kasbah de Telouet y Aït Benhaddou',
    tipologia: ['storia', 'kasbah'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: "La antigua residencia de la familia Glaoui en Telouet y el ksar de Aït Benhaddou, Patrimonio de la Humanidad de la UNESCO y escenario de muchísimas películas, de «Gladiator» a «Juego de tronos».",
    percheAndarci: "Por uno de los pueblos fortificados de barro mejor conservados de Marruecos, que parece detenido en otra época.",
    cosaVedere: ['La Kasbah de Telouet, con sus interiores muy decorados', 'El ksar de Aït Benhaddou'],
    cosaFare: ['Visita a la Kasbah de Telouet', 'Visita al ksar de Aït Benhaddou'],
    doveDormire:
      "Dormimos en el Ksar El Janoub, el alojamiento con mejores reseñas de la zona: habitaciones limpias y cuidadas, piscina con vistas y un servicio descrito como atento y cordial (varias reseñas mencionan al propietario, Khalid, por su hospitalidad).\n\nEconómicas: Riad Caravane, Dar Mouna · gama media: Kasbah Tebi, Kasbah El Hajja · lujo (sin excesos): Kasbah Rayane, Caravane Hotel (Ounila Valley).",
    doveMangiare: 'Tawesna, para comer después de la visita al ksar.',
    comeArrivare: 'Unas 2 h 30 desde Marrakech hasta Telouet, luego aproximadamente 1 h hasta Aït Benhaddou.',
    comeSpostarsi: 'A pie por el ksar.',
    periodoMigliore: 'por la mañana, para tener la mejor luz sobre la fachada de tierra apisonada',
    costi: 'No apunté los precios de las entradas a Telouet y Aït Benhaddou.',
    erroriDaEvitare: ['Olvidarse de recargar los power banks antes de la noche en el desierto: en los campamentos de jaimas no hay enchufes'],
    miaEsperienza:
      "Me sorprendió el contraste entre el exterior de tierra apisonada de la Kasbah de Telouet, ya en parte derrumbado, y los interiores llenos de decoración. El ksar de Aït Benhaddou en persona es todavía más bonito que en las películas que lo hicieron famoso.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kasbah de Telouet",
        "testo": "La residencia del clan Glaoui, iniciada en 1860 en la vieja ruta de caravanas del Atlas. Gran parte del palacio está en ruinas y el terremoto de 2023 dañó también la parte restaurada; los salones tienen zellige, estuco y techos de cedro pintado.",
        "come": "Desde Marrakech por el puerto del Tizi n'Tichka; se visita con un guía local. Preguntar antes qué salas están abiertas.",
        "quando": "Mañana.",
        "tempo": "1 hora",
        "consiglio": "El contraste entre el barro exterior y los interiores decorados es la sorpresa de la visita."
      },
      {
        "nome": "Ksar de Aït Benhaddou",
        "testo": "El pueblo fortificado de adobe junto al río Ounila, patrimonio de la UNESCO desde 1987, escenario de películas desde «Lawrence de Arabia» hasta «Gladiator». Se sube a la cima por la vista del valle.",
        "come": "En coche desde Telouet; desde el pueblo moderno se cruza el río por la pasarela peatonal y se sube entre las casas.",
        "quando": "Mañana, por la mejor luz en la fachada y sin calor.",
        "tempo": "1-1,5 horas"
      },
      {
        "nome": "Kasbah de Taourirt en Uarzazat",
        "testo": "La kasba ampliada por los Glaoui en el siglo XIX en el centro de Ouarzazate, donde se juntan los valles del Draa y del Dadès. Una parte está restaurada y abierta, con salas decoradas y techos de caña; otras partes siguen habitadas. Sufrió daños en el terremoto de 2023.",
        "come": "En el centro de Ouarzazate. Se visita por libre o con un guía en la entrada.",
        "quando": "Última hora de la tarde, de camino a los valles. Horarios en el lugar.",
        "tempo": "45 minutos",
        "consiglio": "Los estudios de cine de la ciudad solo valen para los cinéfilos: la kasba es más interesante."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Salida de Marrakech, puerto del Tizi n'Tichka",
          "Kasba de Telouet",
          "Almuerzo por el camino",
          "Ksar de Aït Benhaddou"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aït Benhaddou",
        "perChi": "quien quiere dormir en el valle",
        "testo": "Kasbah-hoteles a pocos pasos del ksar, sencillos y tranquilos."
      },
      {
        "nome": "Uarzazate",
        "perChi": "quien quiere más servicios",
        "testo": "Ciudad cercana, con hoteles de todas las categorías y restaurantes."
      }
    ],
    sapori: [
      {
        "nome": "Tajín con almendras",
        "testo": "Cordero con ciruelas y almendras, en los restaurantes alrededor del ksar."
      },
      {
        "nome": "Pan bereber",
        "testo": "Cocido en los hornos de leña de los pueblos."
      },
      {
        "nome": "Dátiles del valle del Draa",
        "testo": "Dulces y blandos, a la venta junto a la carretera."
      },
      {
        "nome": "Té de menta",
        "testo": "Servido en todas partes como bienvenida."
      }
    ],
    attenzioni: [
      "El puerto de Tizi n'Tichka es sinuoso y en invierno puede haber nieve o hielo.",
      "Los guías de Aït Benhaddou piden tarifas por persona: acordar antes.",
      "Olvidar cargar los power banks antes de la noche en el desierto: en los campamentos no hay enchufes."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'El ksar fortificado de Aït Benhaddou, Patrimonio de la Humanidad de la UNESCO, Marruecos',
    immagine: '/images/marocco/ait-benhaddou-stock.jpg',
  },
  {
    slug: 'merzouga',
    paeseSlug: 'marocco',
    ordine: 3,
    nome: 'Gargantas del Todra y Merzouga',
    tipologia: ['deserto', 'natura'],
    giorniConsigliati: '2 días, 1 noche en el desierto',
    visitataPersonalmente: true,
    introduzione: "Las Gargantas del Todra por el camino, y después una noche en Erg Chebbi con camello, quad y un cielo estrellado sin comparación.",
    percheAndarci: "Es la entrada al Sáhara y uno de los momentos más bonitos del viaje: el cielo estrellado del desierto, lejos de cualquier luz artificial.",
    cosaVedere: ['Las Gargantas del Todra', 'Las dunas de Erg Chebbi'],
    cosaFare: [
      'Visita a las Gargantas del Todra (30 minutos)',
      'Noche en el desierto en Erg Chebbi (mira la ficha de experiencia dedicada)',
      'Paseo en camello al atardecer y al amanecer',
      'Quad por el desierto (mira la ficha de experiencia dedicada)',
    ],
    doveDormire:
      "Dormimos en el Camp La Source, un campamento de jaimas a los pies de las dunas de Erg Chebbi: jaimas amplias y cuidadas, una gestión familiar descrita como muy acogedora y el cielo estrellado lejos de cualquier luz artificial.\n\nEconómicas: Hostel La Liberte Merzouga, Merzouga Camp and Hostel · gama media: Auberge La Khaima, Nomad Palace Camp · lujo (sin excesos): Merzouga Luxury Desert Camp, Sahara Desert Luxury Camp.",
    doveMangiare: 'Cena en el campamento de jaimas; las alergias e intolerancias se pueden avisar con antelación.',
    comeArrivare: 'Unas 3 h desde Aït Benhaddou hasta las Gargantas del Todra, luego unas 3 h hasta Erg Chebbi.',
    comeSpostarsi: 'Camello y quad por el desierto.',
    periodoMigliore: 'principios de mayo, noches todavía frescas',
    costi: 'Quad 350 MAD por persona.',
    erroriDaEvitare: ['Entrar en el desierto sin turbante o pashmina: conviene comprarlos antes en el mercado local, sirven contra la arena y contra el frío de la noche', 'Llegar a Merzouga sin existencias de alcohol y snacks: en el desierto se encuentran pocos'],
    miaEsperienza:
      "El cielo estrellado de noche, lejos de cualquier luz artificial, fue uno de los momentos más bonitos del viaje. El paseo en camello al amanecer, con las dunas cambiando de color a la luz del sol, cerró muy bien aquella noche.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Gargantas del Todra",
        "testo": "Un cañón en el Alto Atlas: en los últimos 600 metros las paredes lisas suben hasta unos 160 metros y el fondo se estrecha hasta una decena de metros. Se camina por el fondo junto al arroyo.",
        "come": "En coche por la carretera hacia Merzouga; se para en una explanada y se camina.",
        "quando": "Mañana, antes de los grupos.",
        "tempo": "30 minutos"
      },
      {
        "nome": "Erg Chebbi y la noche en el desierto",
        "testo": "Dunas de hasta unos 150 metros de alto, a lo largo de una treintena de kilómetros, cerca de Merzouga. Se sube en camello al campamento, se cena, se duerme bajo un cielo sin luces y se vuelve al amanecer.",
        "come": "El camello sale del pueblo hacia el campamento.",
        "quando": "Atardecer y amanecer; la mejor temporada va de octubre a abril.",
        "tempo": "Una noche",
        "consiglio": "Llevar un turbante o pashmina contra la arena y el frío nocturno, y cargar el teléfono antes."
      },
      {
        "nome": "Quad en el desierto",
        "testo": "Un paseo en quad entre las dunas y los pueblos cerca de Merzouga, en grupo con un guía.",
        "come": "Reservar en el hotel o en el campamento.",
        "quando": "Mañana o última hora de la tarde.",
        "tempo": "1-2 horas",
        "costo": "350 MAD por persona (de mi viaje)"
      },
      {
        "nome": "Khamlia y la música gnawa",
        "testo": "Un pueblo al borde del Erg Chebbi ligado a la música gnawa: en las casas de música tocan tambores y qraqeb, las castañuelas de hierro, y sirven té. En verano acoge un festival gnawa de tres noches.",
        "come": "En coche o 4x4 desde Merzouga. Suele ser una parada de los tours en jeep alrededor del Erg Chebbi.",
        "quando": "Por la tarde, antes de salir hacia el campamento en el desierto.",
        "tempo": "1 hora",
        "costo": "Donativo para los músicos",
        "consiglio": "Dejar un donativo o comprar un CD: es de lo que vive el grupo."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Gargantas del Todra, luego traslado a Merzouga, camello al atardecer, noche en el campamento",
          "Día 2: amanecer sobre las dunas, regreso"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campamento de tiendas en Erg Chebbi",
        "perChi": "quien quiere la noche en el desierto",
        "testo": "Tiendas sencillas o más cómodas, con cena y desayuno. Poca electricidad."
      },
      {
        "nome": "Hotel en Merzouga",
        "perChi": "quien prefiere una habitación",
        "testo": "Hoteles y kasbahs con piscina, a pocos minutos de las dunas."
      }
    ],
    sapori: [
      {
        "nome": "Pan del desierto (madfouna)",
        "testo": "Un pan relleno de carne y cebolla cocido bajo la arena."
      },
      {
        "nome": "Tajín de camello",
        "testo": "En algunos campamentos se sirve a pedido."
      },
      {
        "nome": "Té bereber",
        "testo": "Con menta y especias, en los campamentos."
      },
      {
        "nome": "Dátiles",
        "testo": "Dulces y secos, del valle del Ziz."
      }
    ],
    attenzioni: [
      "Entrar en el desierto sin turbante ni pashmina: conviene comprarlos antes en el mercado, sirven contra la arena y el frío.",
      "Llegar a Merzouga sin provisión de alcohol y snacks: en el desierto se encuentra poco.",
      "Las noches son frías incluso en primavera: llevar capas de abrigo.",
      "Comprobar cuánto cuestan camello y quad antes de firmar: los precios varían."
    ],
    // GUIDA-END
    esperienzeSlugs: ['notte-deserto-erg-chebbi', 'gole-todra', 'quad-deserto-merzouga'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Un guía con turbante conduce a un dromedario sobre la arena naranja de las dunas de Merzouga',
    immagine: '/images/marocco/merzouga-guida-dromedario-riccardo.jpg',
  },
  {
    slug: 'agdz',
    paeseSlug: 'marocco',
    ordine: 4,
    nome: 'Agdz y el valle del Draa',
    tipologia: ['kasbah', 'natura'],
    giorniConsigliati: '1 día',
    visitataPersonalmente: true,
    introduzione: "El valle del Draa y la Kasbah de Tamnougalt, una de las mejor conservadas de la zona.",
    percheAndarci: "Una etapa más tranquila entre el desierto y la costa, con una de las kasbahs mejor conservadas de Marruecos.",
    cosaVedere: ['La Kasbah de Tamnougalt'],
    cosaFare: ['Visita a la Kasbah de Tamnougalt', 'Tiempo libre en la piscina'],
    doveDormire:
      "Pasamos una noche en la Kasbah Trane, a lo largo del valle del Draa: zona tranquila y buen punto de apoyo para la cercana Kasbah de Tamnougalt. No encontré reseñas con este nombre exacto.\n\nEconómicas: Kasbah Maktob Tamnougalt, Guest House Jardin de Tamnougalt · gama media: Maison d'Hôtes Kasbah Azul, Dar Jnane - La Maison Du Jardin · lujo (sin excesos): Hotel and Restaurant Kasbah Draa, Kasbah Kissane.",
    doveMangiare: 'Cena en el hotel.',
    comeArrivare: 'Unas 4 h desde Merzouga.',
    comeSpostarsi: 'A pie por la kasbah.',
    periodoMigliore: 'por la tarde-noche, para la visita a la Kasbah de Tamnougalt',
    costi: 'Kasbah de Tamnougalt 20 MAD por persona + 200 MAD de propina para el guía local.',
    erroriDaEvitare: [],
    miaEsperienza:
      "Después del desierto, Agdz llegó en el momento justo para tomar aliento, y la Kasbah de Tamnougalt me recordó lo mucho que merece la pena salirse de los itinerarios más trillados.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Kasbah de Tamnougalt",
        "testo": "Una kasbah fortificada en el valle del Draa, habitada por familias bereberes. Se visita con un guía local que explica las salas y la vida del pueblo.",
        "come": "En coche por el valle del Draa.",
        "quando": "Tarde, por la luz sobre los muros de barro.",
        "tempo": "1 hora",
        "costo": "20 MAD por persona más unos 200 MAD de propina para el guía (de mi viaje)"
      },
      {
        "nome": "Valle del Draa",
        "testo": "El largo valle de palmerales a lo largo del río, con kasbahs y pueblos de barro.",
        "come": "En coche por la carretera principal.",
        "quando": "Tarde.",
        "tempo": "Medio día",
        "consiglio": "Salirse de las rutas más trilladas vale la pena: Tamnougalt lo demuestra."
      },
      {
        "nome": "Zagora y el cartel «Tombuctú 52 días»",
        "testo": "La capital del valle del Draa. A la salida está el mural que sustituyó al viejo cartel «Tombouctou 52 jours», el tiempo que tardaban las caravanas en llegar a Tombuctú. Un poco más al sur está Tamegroute, con la biblioteca de la zawiya y la cerámica esmaltada.",
        "come": "Desde Agdz hacia el sur por el valle. Tamegroute está un poco más adelante.",
        "quando": "Por la mañana para Tamegroute y los talleres de alfareros.",
        "tempo": "Media jornada",
        "consiglio": "En la biblioteca de Tamegroute los libros solo se pueden ver allí; los hornos de los alfareros valen más que las pequeñas dunas de la zona."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Salida de Merzouga",
          "Almuerzo en la carretera",
          "Kasbah de Tamnougalt",
          "Tiempo libre en la piscina"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agdz",
        "perChi": "quien quiere una pausa tras el desierto",
        "testo": "Pequeña ciudad con kasbah-hoteles y piscina, tranquila y sin turistas."
      },
      {
        "nome": "Zagora",
        "perChi": "quien quiere más servicios",
        "testo": "Ciudad más grande al sur, con hoteles y salidas al desierto."
      }
    ],
    sapori: [
      {
        "nome": "Dátiles del Draa",
        "testo": "El producto de los palmerales del valle."
      },
      {
        "nome": "Tajín de verduras",
        "testo": "Con calabacín, zanahoria y azafrán, en hoteles y restaurantes."
      },
      {
        "nome": "Pan bereber",
        "testo": "Cocido en horno comunal."
      },
      {
        "nome": "Té de menta",
        "testo": "Con hospitalidad."
      }
    ],
    attenzioni: [
      "Comprobar cuánto pide el guía local antes de la visita: la propina se acuerda.",
      "El calor es fuerte en verano.",
      "La zona está muy aislada: llevar efectivo."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La Kasbah de Tamnougalt en el valle del Draa, Marruecos',
    immagine: '/images/marocco/agdz-stock.jpg',
  },
  {
    slug: 'agadir',
    paeseSlug: 'marocco',
    ordine: 5,
    nome: 'Agadir y Taghazout',
    tipologia: ['mare', 'surf'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: "Taliouine, la capital marroquí del azafrán, y una clase de surf en Taghazout, uno de los pueblos más conocidos del surf en Marruecos.",
    percheAndarci: "La costa después de días de desierto y kasbahs, con una parada golosa en Taliouine por el camino.",
    cosaVedere: ['La ciudad vieja de Taliouine', 'El casco histórico de Taroudant'],
    cosaFare: [
      'Compra de azafrán en Taliouine',
      'Yoga al atardecer con Khalid',
      'Clase de surf en Taghazout (mira la ficha de experiencia dedicada)',
    ],
    doveDormire:
      "Pasamos una noche en el Hotel Oasis, cómodo por estar cerca del mar y de los restaurantes. Las reseñas en internet son dispares: buenas la ubicación y el desayuno buffet, menos el mantenimiento de las habitaciones, que varios huéspedes describen como anticuadas.\n\nEconómicas: Hotel Sindibad Agadir, Résidence IGOUDAR · gama media: Riad Dar Maktoub, Hôtel Riad Salam Agadir · lujo (sin excesos): Sofitel Agadir Thalassa Sea & Spa, Hotel Riu Palace Tikida Agadir.",
    doveMangiare: 'Les Blancs (terraza con vistas al mar, cocina española y mediterránea); comida en Taghazout después del surf.',
    usciteSerali: 'LOFT, cachimbas y cervezas, ambiente de discoteca árabe.',
    comeArrivare: 'Unas 2 h 30 desde Agdz hasta Taliouine, luego unas 3 h hasta Agadir.',
    comeSpostarsi: 'Furgoneta privada, a pie en Taghazout.',
    periodoMigliore: 'principios de mayo, buenas condiciones para empezar a hacer surf',
    costi: 'Clase de surf 250 MAD por persona (duchas 10 MAD).',
    erroriDaEvitare: ['Comprar el azafrán en las tiendas de la carretera pensadas para los turistas de paso: en Taliouine conviene ir solo a los sitios que recomiende el guía'],
    miaEsperienza:
      "Una mañana distinta del resto del viaje: después de días de desierto y kasbahs, el surf en Taghazout fue un chapuzón, también en sentido literal, en un mundo completamente distinto.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Taliouine y el azafrán",
        "testo": "El pueblo famoso por el azafrán, entre los principales exportadores del mundo. En otoño, normalmente en noviembre, celebra el festival internacional del azafrán.",
        "come": "En coche desde Agdz, por la carretera hacia Taroudant.",
        "quando": "Otoño, en la temporada de floración.",
        "tempo": "1 hora",
        "consiglio": "Comprar el azafrán en cooperativas y sitios recomendados, no en tiendas para turistas de paso."
      },
      {
        "nome": "Taghazout y el surf",
        "testo": "El pueblo de pescadores a unos 19 km al norte de Agadir convertido en uno de los destinos de surf de Marruecos, con escuelas para principiantes; un poco al norte está Anchor Point, con sus largas olas de derecha.",
        "come": "Desde Agadir en taxi o autobús; escuelas y alquiler en el lugar.",
        "quando": "Las mejores condiciones van de septiembre a abril; para principiantes cuentan la escuela y el día.",
        "tempo": "Medio día",
        "costo": "Clase 250 MAD por persona, duchas 10 MAD (de mi viaje)",
        "consiglio": "Parar a almorzar en Taghazout tras la clase."
      },
      {
        "nome": "Taroudant",
        "testo": "Una pequeña ciudad dentro de murallas de tierra de entre 6 y 8 km, con bastiones y nueve puertas aún en uso. Tiene dos zocos junto a las plazas principales, mucho menos turísticos que los de Marrakech, y se recorre bien en calesa junto a la muralla.",
        "come": "En coche desde Taliouine, hacia Agadir.",
        "quando": "Tarde.",
        "tempo": "1-2 horas"
      },
      {
        "nome": "Kasbah de Agadir Oufella",
        "testo": "Las murallas de la vieja kasba en la colina sobre el puerto, destruida por el terremoto de 1960 junto con la ciudad vieja que encerraba. Desde arriba se ve toda la bahía.",
        "come": "En taxi o con el teleférico en servicio desde 2022, que sube unos 1,7 km desde el puente de Tildi.",
        "quando": "Atardecer, con la luz sobre la bahía.",
        "tempo": "1 hora",
        "consiglio": "Subir en teleférico y bajar en taxi o a pie, mirando el puerto pesquero."
      },
      {
        "nome": "Zoco El Had",
        "testo": "El gran mercado cubierto de Agadir, dentro de murallas con muchas puertas: fruta, especias, aceite de argán, cerámica y ropa, con muchos más marroquíes que turistas. Es el sitio para comprar argán y amlou a precios normales.",
        "come": "En taxi desde el paseo marítimo.",
        "quando": "Por la mañana. Cerrado los lunes; suele abrir de 9 a 18 (2026), pero cada puesto tiene su propio horario.",
        "tempo": "1,5-2 horas",
        "consiglio": "Los puestos de fruta y verdura son la parte más animada."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Taliouine, azafrán, luego Taroudant y llegada a Agadir, yoga al atardecer",
          "Día 2: surf en Taghazout, almuerzo, cena en Les Blancs"
        ]
      }
    ],
    zone: [
      {
        "nome": "Agadir",
        "perChi": "quien quiere playa y servicios",
        "testo": "Ciudad moderna reconstruida tras el terremoto de 1960, con paseo marítimo y hoteles."
      },
      {
        "nome": "Taghazout",
        "perChi": "quien quiere surf y ambiente",
        "testo": "Pueblo con escuelas de surf y casas de huéspedes, relajado."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "En los restaurantes del puerto de Agadir."
      },
      {
        "nome": "Aceite de argán y amlou",
        "testo": "Pasta de almendras, aceite de argán y miel, para untar en el pan."
      },
      {
        "nome": "Tajín de pescado",
        "testo": "En la costa, con verduras y especias."
      },
      {
        "nome": "Azafrán",
        "testo": "En tés y platos, comprado en Taliouine."
      }
    ],
    attenzioni: [
      "El azafrán de las tiendas para turistas suele estar adulterado, comprar solo en sitios recomendados.",
      "La corriente en Taghazout puede ser fuerte: seguir las indicaciones del instructor.",
      "El sol en la costa quema incluso con el cielo cubierto."
    ],
    // GUIDA-END
    esperienzeSlugs: ['surf-taghazout'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'Clase de surf en las olas de Taghazout, Marruecos',
    immagine: '/images/marocco/agadir-stock.jpg',
  },
  {
    slug: 'essaouira',
    paeseSlug: 'marocco',
    ordine: 6,
    nome: 'Essaouira',
    tipologia: ['città', 'mare', 'relax'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione: "La ciudad portuaria fortificada del Atlántico, con una medina blanca y azul de las más bonitas de Marruecos.",
    percheAndarci: "Por un ambiente distinto del resto del viaje, con las compras más baratas que en Marrakech y un poco de relax.",
    cosaVedere: ['La medina blanca y azul de Essaouira', 'El puerto fortificado', 'El Ranch de Diabat'],
    cosaFare: [
      'Visita guiada de Essaouira (1 h 30)',
      'Hammam de Kenza (mira la ficha de experiencia dedicada)',
      'Aventura en quad en el Ranch de Diabat, con posible paseo a caballo',
    ],
    doveDormire:
      "Pasamos una noche en la Maison De Sud, en pleno casco histórico, a pocos pasos de los zocos y del puerto: una casa con carácter, con decoración artesanal y, según las reseñas, un personal muy atento. Habitaciones pequeñas, y por la noche se oyen las llamadas a la oración, algo normal en el corazón de la medina.\n\nEconómicas: La Smala, Riad Al Madina · gama media: Lyon Mogador, Riad Chakir Mogador · lujo (sin excesos): Heure Bleue Palais, Riad Dar Maya.",
    doveMangiare: 'Triskala, La Table by Madada o Des Rêves.',
    comeArrivare: 'Unas 2 h 30 desde Agadir pasando por Taghazout.',
    comeSpostarsi: 'A pie por la medina.',
    periodoMigliore: 'última hora de la tarde, para la visita guiada con mejor luz',
    costi: 'Hammam 250 MAD por persona; compras en general más baratas que en Marrakech.',
    erroriDaEvitare: [],
    miaEsperienza:
      "Después de días de furgoneta, desierto y visitas, la hora en el hammam de Kenza fue uno de los pocos momentos de relax de verdad del viaje, y la medina blanca y azul de Essaouira sigue siendo uno de los ambientes más bonitos de Marruecos.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Medina de Esauira",
        "testo": "La ciudad blanca y azul construida desde 1760 por orden del sultán Mohammed III, con murallas y bastiones sobre el mar, patrimonio de la UNESCO desde 2001. Callejones peatonales y talleres de talla de madera de tuya.",
        "come": "A pie: se entra por las puertas principales o desde el puerto.",
        "quando": "Última hora de la tarde, con mejor luz.",
        "tempo": "2-3 horas",
        "consiglio": "Un tour guiado a pie da una buena orientación."
      },
      {
        "nome": "Puerto y Skala",
        "testo": "El puerto con las barcas azules de los pescadores y la Sqala, los bastiones con cañones usados también como escenario de «Juego de tronos», con gaviotas y puestos de pescado.",
        "come": "A pie desde la medina.",
        "quando": "Mañana, cuando llegan los pesqueros, y al atardecer.",
        "tempo": "1 hora"
      },
      {
        "nome": "Hammam",
        "testo": "Un baño de vapor con exfoliación y masaje en la tradición marroquí.",
        "come": "Reservar con antelación en un establecimiento de la medina.",
        "quando": "Tarde.",
        "tempo": "1-1,5 horas",
        "costo": "250 MAD por persona en Kenza (de mi viaje)",
        "consiglio": "Perfecto tras días de furgoneta y visitas."
      },
      {
        "nome": "Ranch de Diabat",
        "testo": "Excursiones a caballo y en quad por la costa de arena hacia Diabat, a unos 5 km al sur, cerca de las ruinas de Bordj El Berod.",
        "come": "En taxi desde la medina.",
        "quando": "Última hora de la tarde.",
        "tempo": "1-2 horas"
      },
      {
        "nome": "Playa y kitesurf",
        "testo": "La larga bahía de arena al sur de la medina, barrida por fuertes alisios: por eso la frecuentan mucho los aficionados al kitesurf y al windsurf. Poca gente se baña, el agua está fría; se camina hasta Diabat con la isla de Mogador delante.",
        "come": "A pie desde la medina hacia el sur. Escuelas de kite y alquiler en la playa.",
        "quando": "Por la tarde, cuando el viento es más regular.",
        "tempo": "Media jornada",
        "consiglio": "Para una clase de kite elegir una escuela con licencia e instructores certificados, y preguntar qué cubre el seguro."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: llegada, medina y puerto, cena de pescado",
          "Día 2: mañana en el mercado, hammam, tarde en Diabat"
        ]
      }
    ],
    zone: [
      {
        "nome": "Medina",
        "perChi": "quien quiere estar dentro de la ciudad",
        "testo": "Riads y pensiones en los callejones blancos, muy cerca de todo. Habitaciones pequeñas, pero la atmósfera es única."
      },
      {
        "nome": "Paseo marítimo",
        "perChi": "quien quiere playa y viento",
        "testo": "Hoteles modernos frente al mar, más grandes y con aparcamiento."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla en el puerto",
        "testo": "Se elige en el mostrador y lo cocinan los restaurantes cercanos."
      },
      {
        "nome": "Tajín de pescado",
        "testo": "Con verduras y especias."
      },
      {
        "nome": "Aceite de argán",
        "testo": "Hecho en cooperativas de mujeres, para cocina y cosmética."
      },
      {
        "nome": "Dulces de almendra",
        "testo": "De los pasteleros de la medina."
      }
    ],
    attenzioni: [
      "El viento fuerte (alisios) hace a menudo frío el paseo marítimo: llevar una chaqueta incluso en verano.",
      "Las compras en Esauira suelen costar menos que en Marrakech, pero el precio se negocia igualmente.",
      "Evitar los guías no oficiales en la calle."
    ],
    // GUIDA-END
    esperienzeSlugs: ['hammam-essaouira'],
    tripSlugs: ['marocco-itinerario'],
    imageAlt: 'La medina blanca y azul de la ciudad portuaria de Essaouira, Marruecos',
    immagine: '/images/marocco/essaouira-stock.jpg',
  },
  {
    slug: 'chefchaouen',
    paeseSlug: 'marocco',
    ordine: 7,
    nome: 'Chefchaouen',
    tipologia: ['città', 'montagna'],
    giorniConsigliati: '2 noches',
    visitataPersonalmente: false,
    introduzione:
      'La ciudad azul en las montañas del Rif, fundada en 1471 como fortaleza contra los portugueses. Una medina pequeña, con las casas pintadas de azul, la kasbah en la plaza y montañas alrededor.',
    percheAndarci:
      'Para caminar por la medina azul al amanecer, cuando todavía está vacía, y ver el atardecer desde la Mezquita española. Es también una pausa más tranquila entre Tánger y Fez.',
    cosaVedere: [
      'La medina azul',
      'La plaza Outa el-Hammam y la Gran Mezquita',
      'La kasbah, hoy museo',
      'El manantial de Ras el-Ma',
      'La Mezquita española y la vista sobre la ciudad',
    ],
    cosaFare: ['Fotografiar las callejuelas al amanecer', 'Subir a la Mezquita española al atardecer', 'Un día en Akchour, entre gargantas y cascadas'],
    comeArrivare:
      'No hay tren. Autobuses CTM desde Tánger (unos 110 km) y desde Fez (unos 200 km, 4-5 horas), con billetes en booking.ctm.ma; si no, coche con conductor.',
    comeSpostarsi: 'A pie: la medina es pequeña y toda cuesta arriba.',
    periodoMigliore: 'primavera y otoño',
    erroriDaEvitare: [
      'Aceptar el cannabis que alguien ofrece por la calle: en Marruecos las drogas de cualquier tipo se castigan con cárcel',
      'Llegar solo para una tarde: la medina luce a primera hora y por la noche, cuando los grupos de excursión ya se han ido',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'La medina azul',
        testo:
          'Callejuelas en cuesta y casas pintadas en muchos tonos de azul. Sobre el porqué hay varias versiones: para alejar a los mosquitos, para recordar el cielo o para atraer a los turistas, como cuentan algunos vecinos. Ninguna es segura. La ciudad creció con los andalusíes, los moriscos y los judíos sefardíes llegados de España.',
        come: 'A pie, sin rumbo. El riad suele mandar a alguien a recoger el equipaje.',
        quando: 'Al amanecer, antes de que lleguen los grupos de excursión.',
        tempo: 'medio día',
        consiglio: 'Muchas puertas y escalinatas son casas privadas: se fotografía sin entrar y sin poner a posar a los niños.',
      },
      {
        nome: 'La plaza Outa el-Hammam y la kasbah',
        testo:
          'La plaza central de la medina, con los cafés, la Gran Mezquita y la kasbah, la antigua fortaleza hoy convertida en museo.',
        come: 'En el centro de la medina. En la Gran Mezquita los no musulmanes no entran.',
        quando: 'Por la noche, cuando la plaza se llena.',
        tempo: '1-2 horas',
      },
      {
        nome: 'Ras el-Ma',
        testo: 'El manantial al pie de la montaña, justo fuera de la medina, desde donde el agua baja hacia la ciudad.',
        come: 'A pie desde la plaza, subiendo hacia la puerta este de la medina.',
        quando: 'Por la mañana o a última hora de la tarde, antes de subir a la Mezquita española.',
        tempo: '30 minutos',
      },
      {
        nome: 'Mezquita española',
        testo:
          'La mezquita construida en los años veinte, durante el protectorado español, en la colina frente a la ciudad. Hoy es sobre todo un mirador sobre todo Chefchaouen.',
        come: 'A pie desde Ras el-Ma, por un sendero en subida.',
        quando: 'Al atardecer.',
        tempo: '1 hora con la subida',
        consiglio: 'La linterna del móvil preparada para bajar a oscuras.',
      },
      {
        nome: 'Akchour',
        testo: 'Un valle a unos 30 km de Chefchaouen, con las gargantas y las cascadas del río y senderos entre las rocas. Es la excursión del día para quien quiere naturaleza después de la medina.',
        come: 'Coche con conductor o taxi desde Chefchaouen.',
        quando: 'En primavera y en otoño.',
        tempo: 'un día',
        consiglio: 'Calzado de senderismo: los caminos pasan por rocas y por el agua.',
      },
    ],
    programmi: [
      {
        titolo: '1 día',
        tappe: ['Mañana: la medina al amanecer', 'Kasbah y plaza Outa el-Hammam', 'Tarde: Ras el-Ma', 'Atardecer desde la Mezquita española'],
      },
      {
        titolo: '2 días',
        tappe: ['Día 1: como arriba', 'Día 2: Akchour en el día con conductor'],
      },
    ],
    zone: [
      {
        nome: 'Medina',
        perChi: 'quien quiere la ciudad azul en la puerta',
        testo: 'Riads y hoteles pequeños entre las callejuelas. Muchas escaleras y cuestas con el equipaje.',
      },
      {
        nome: 'Fuera de las murallas',
        perChi: 'quien llega en coche',
        testo: 'Hoteles más grandes, más cómodos para aparcar, a pocos minutos a pie de la medina.',
      },
    ],
    sapori: [
      { nome: 'Queso de cabra del Rif', testo: 'El queso fresco de las montañas de alrededor, en los restaurantes de la medina.' },
      { nome: 'Tajín', testo: 'Carne o pollo cocinados en el recipiente de barro, como en el resto de Marruecos.' },
      { nome: 'Té con hierbabuena', testo: 'Se sirve en todas partes, caliente y muy dulce, en los cafés de la plaza.' },
    ],
    attenzioni: [
      'Quien ofrece cannabis por la calle: en Marruecos la posesión y el consumo se castigan con cárcel, también a los turistas.',
      'Falsos guías que se ofrecen para llevarte a la Mezquita española: el sendero es fácil y se hace solo.',
      'Fotos a las personas: hay que pedir permiso antes.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: 'Las callejuelas pintadas de azul de la medina de Chefchaouen, en las montañas del Rif, Marruecos',
  },
  {
    slug: 'fes',
    paeseSlug: 'marocco',
    ordine: 8,
    nome: 'Fez',
    tipologia: ['città', 'cultura', 'città imperiale'],
    giorniConsigliati: '2-3 días',
    visitataPersonalmente: false,
    introduzione:
      'Fundada en 789 por Idrís I, capital hasta 1912. La ciudad vieja, Fez el-Bali, es Patrimonio de la UNESCO desde 1981 y es una de las mayores zonas urbanas del mundo sin coches.',
    percheAndarci:
      'Por la medina más grande y más antigua de Marruecos, con las madrasas meriníes, la Qarawiyyin y las curtidurías. Es el punto donde este itinerario se separa del del desierto.',
    cosaVedere: [
      'Bab Bou Jeloud',
      'Medersa Bou Inania',
      'Medersa al-Attarine',
      'La Qarawiyyin (solo desde fuera)',
      'Las curtidurías Chouara',
      'Fez Jdid, el Mellah y el Palacio Real (por fuera)',
      'Los jardines de Jnan Sbil',
    ],
    cosaFare: ['Una mañana con un guía oficial por Fez el-Bali', 'Mirar las curtidurías desde las terrazas', 'El atardecer sobre la medina desde las Tumbas meriníes'],
    comeArrivare:
      'En tren ONCF desde Mequinez, Rabat y Casablanca; en autobús CTM desde Chefchaouen; aeropuerto de Fès-Saïss con vuelos desde Europa.',
    comeSpostarsi: 'A pie en la medina, en petit taxi entre la medina, Fez Jdid y la estación.',
    periodoMigliore: 'primavera y otoño; en verano hace mucho calor',
    erroriDaEvitare: [
      'Recorrer la medina el primer día solo y sin mapa sin conexión: es un laberinto',
      'Seguir a quien se ofrece como guía por la calle: los guías oficiales llevan acreditación',
      'Reservar un riad sin preguntar dónde deja el taxi: en la medina no entran los coches',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Bab Bou Jeloud y la Talaa Kebira',
        testo:
          'La puerta decorada con azulejos azules por la que se entra en Fez el-Bali. Desde aquí baja la Talaa Kebira, la calle principal de la medina, entre talleres, puestos de comida y mulas cargadas.',
        come: 'Petit taxi hasta Bab Bou Jeloud, luego a pie cuesta abajo.',
        quando: 'Por la mañana, cuando abren las tiendas.',
        tempo: 'media hora, y luego se sigue por la medina',
      },
      {
        nome: 'Medersa Bou Inania',
        testo:
          'Mandada construir por el sultán meriní Abu Inan entre 1350 y 1355. Es la única madrasa de Marruecos que hacía también de mezquita del viernes, con su propio alminar. Enfrente está el antiguo reloj de agua de 1357, que ya no funciona.',
        come: 'En la Talaa Kebira, a pocos minutos de Bab Bou Jeloud. La sala de oración no está abierta a los no musulmanes, pero se ve desde el patio.',
        quando: 'A primera hora. Fuera de las horas de oración.',
        tempo: '30-45 minutos',
      },
      {
        nome: 'Medersa al-Attarine',
        testo:
          'Pequeña madrasa construida entre 1323 y 1325 para el sultán meriní Abu Said Uthman II, con el patio cubierto de zellige, yeserías y madera de cedro tallada. Está abierta como sitio histórico.',
        come: 'En el corazón de la medina, junto a la Qarawiyyin.',
        quando: 'Por la mañana.',
        tempo: '30 minutos',
      },
      {
        nome: 'La Qarawiyyin',
        testo:
          'La mezquita fundada en 857-859 por Fátima al-Fihri, que luego se convirtió en una de las instituciones de estudio más antiguas del mundo todavía en activo. Es el centro de la medina.',
        come: 'Los no musulmanes no entran: por las puertas abiertas se ven una parte del patio y del interior.',
        tempo: '15 minutos',
        consiglio: 'No quedarse mucho rato delante de las puertas durante la oración.',
      },
      {
        nome: 'Curtidurías Chouara',
        testo:
          'La curtiduría más grande de la medina, con las tinas de piedra llenas de tintes donde se trabajan las pieles como desde hace siglos. Restaurada hace unos años y mantenida en su sitio. El olor es fuerte.',
        come: 'Se mira desde arriba, desde las terrazas de las tiendas de piel de alrededor, que piden pasar por la tienda.',
        quando: 'Por la mañana, cuando las tinas están en uso.',
        tempo: '30 minutos',
        consiglio: 'No hay obligación de comprar. Una pequeña propina a quien acompaña a la terraza es lo normal.',
      },
      {
        nome: 'Fez Jdid y el Mellah',
        testo:
          'La ciudad nueva construida por los benimerines en el siglo XIII, con las grandes puertas del Palacio Real y el Mellah, el antiguo barrio judío, con casas de balcones hacia la calle.',
        come: 'Petit taxi, o a pie desde Bab Bou Jeloud pasando por Jnan Sbil. El Palacio Real solo se ve por fuera.',
        quando: 'Por la tarde.',
        tempo: '2 horas',
      },
      {
        nome: 'Jnan Sbil',
        testo: 'Los jardines históricos entre Fez el-Bali y Fez Jdid, con paseos, estanques y árboles: la pausa a la sombra del día.',
        come: 'A pie desde Bab Bou Jeloud.',
        tempo: '30-45 minutos',
      },
      {
        nome: 'Las Tumbas meriníes',
        testo: 'Las ruinas en las colinas al norte de la medina. El motivo para subir es la vista: todo Fez el-Bali debajo, con los tejados y los alminares.',
        come: 'En petit taxi. Mejor no volver a pie solo cuando ya es de noche.',
        quando: 'Antes del atardecer.',
        tempo: '1 hora',
      },
    ],
    programmi: [
      {
        titolo: '1 día',
        tappe: [
          'Mañana con guía oficial: Bab Bou Jeloud, Medersa Bou Inania, Talaa Kebira',
          'Medersa al-Attarine y la Qarawiyyin desde las puertas',
          'Tarde: curtidurías Chouara',
          'Atardecer desde las Tumbas meriníes',
        ],
      },
      {
        titolo: '2 días',
        tappe: ['Día 1: como arriba', 'Día 2: Fez Jdid, el Mellah y Jnan Sbil, tarde libre en los zocos o en un hammam'],
      },
      {
        titolo: '3 días',
        tappe: ['Días 1-2: como arriba', 'Día 3: Volubilis, Moulay Idriss y Mequinez en el día con coche y conductor'],
      },
    ],
    zone: [
      {
        nome: 'Fez el-Bali',
        perChi: 'quien quiere dormir dentro de la medina',
        testo: 'Riads en las callejuelas, silenciosos por dentro y caóticos por fuera. Elegir un riad cerca de una puerta a la que lleguen los taxis, como Bab Bou Jeloud.',
      },
      {
        nome: 'Ville Nouvelle',
        perChi: 'quien llega en tren o busca comodidad',
        testo: 'La ciudad moderna, con hoteles de cadena y restaurantes, cerca de la estación. Para la medina hace falta taxi.',
      },
    ],
    sapori: [
      { nome: 'Pastela', testo: 'Hojaldre crujiente con pichón o pollo, almendras y canela, una de las especialidades de Fez.' },
      { nome: 'Harira', testo: 'La sopa de legumbres y tomate, que se encuentra en todas partes y por la noche, en Ramadán, rompe el ayuno.' },
      { nome: 'Comida callejera en la Talaa Kebira', testo: 'Pan, buñuelos y dulces en los puestos de la calle principal.' },
      { nome: 'Té con hierbabuena', testo: 'Lo ofrecen en cada tienda y cada riad.' },
    ],
    attenzioni: [
      'Falsos guías que se ofrecen por la calle: pedir la acreditación oficial antes de irse con nadie.',
      'Quien dice que una calle está cerrada quiere llevarte a una tienda: comprobar en el mapa.',
      'Carteristas entre la gente de los zocos: mochila delante y nada de efectivo a la vista.',
      'En las curtidurías las terrazas son de las tiendas: se mira, se da las gracias, no hay obligación de comprar.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: 'Los tejados de la medina de Fez el-Bali vistos desde arriba, con los alminares, Marruecos',
  },
  {
    slug: 'meknes-volubilis',
    paeseSlug: 'marocco',
    ordine: 9,
    nome: 'Mequinez y Volubilis',
    tipologia: ['città', 'storia', 'città imperiale', 'archeologia'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: false,
    introduzione:
      'Mequinez es la ciudad de Moulay Ismail, que la hizo capital y reinó de 1672 a 1727: Patrimonio de la UNESCO desde 1996. A unos 30 km están las ruinas romanas de Volubilis, Patrimonio de la UNESCO desde 1997, y la ciudad santa de Moulay Idriss.',
    percheAndarci:
      'Por las puertas y los graneros de Moulay Ismail, en una ciudad más tranquila que Fez, y por los mosaicos de una ciudad romana en los confines del imperio.',
    cosaVedere: [
      'Bab Mansour y la plaza el-Hedim',
      'El mausoleo de Moulay Ismail',
      'El Heri es-Souani y el estanque del Agdal',
      'La Medersa Bou Inania de Mequinez',
      'Volubilis',
      'Moulay Idriss Zerhoun',
    ],
    cosaFare: ['Volubilis a primera hora', 'Un paseo por libre por la medina de Mequinez'],
    comeArrivare: 'En tren ONCF desde Fez (unos 40 minutos) o desde Rabat (unas 2 horas y media). Mequinez tiene dos estaciones.',
    comeSpostarsi: 'A pie en la medina, petit taxi en la ciudad, taxi o coche con conductor para Volubilis y Moulay Idriss.',
    periodoMigliore: 'primavera y otoño; en Volubilis el sol de verano aprieta',
    erroriDaEvitare: [
      'Ir a Volubilis en las horas centrales del verano: el yacimiento casi no tiene sombra',
      'Llamar caballerizas al Heri es-Souani: era un granero, como explican las fuentes históricas',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Volubilis',
        testo:
          'Habitada ya en el siglo III a. C., fue capital del reino de Mauritania y luego ciudad romana desde el 44 d. C. A finales del siglo II tenía unos 20.000 habitantes y vivía del aceite de oliva. Roma la abandonó hacia el 285. Quedan el Decumano Máximo, la basílica, el Capitolio, el Arco de Caracalla del 217 y los mosaicos de las casas, como los Trabajos de Hércules y Orfeo.',
        come: 'Unos 30 km desde Mequinez en taxi o coche con conductor; unos 95 km desde Fez. Se visita a pie siguiendo el recorrido del yacimiento.',
        quando: 'A primera hora: el yacimiento está al aire libre y casi sin sombra.',
        tempo: '2 horas',
        consiglio: 'Sombrero, agua y calzado cerrado. Un guía en la entrada ayuda a leer las ruinas.',
      },
      {
        nome: 'Moulay Idriss Zerhoun',
        testo:
          'La ciudad santa construida alrededor del mausoleo de Idrís I, que en Volubilis fundó en 787-788 la dinastía idrisí y allí murió asesinado en 791. Está a pocos kilómetros de las ruinas, en las colinas.',
        come: 'Con el mismo taxi de Volubilis. El mausoleo es un lugar de peregrinación y por norma no está abierto a los no musulmanes.',
        quando: 'Después de Volubilis, a media mañana.',
        tempo: '1 hora',
        consiglio: 'Subir a un mirador sobre el pueblo para verlo desde arriba.',
      },
      {
        nome: 'Bab Mansour y la plaza el-Hedim',
        testo:
          'La puerta monumental que empezó Moulay Ismail y terminó en 1732 su hijo Moulay Abdallah, y que toma el nombre de Mansour al-Alj, un cristiano convertido al islam. Delante está la plaza el-Hedim, cuyo nombre significa "escombros": viene de las demoliciones hechas para abrirla.',
        come: 'A pie, en la entrada de la medina.',
        quando: 'A última hora de la tarde, cuando la plaza se anima.',
        tempo: '30 minutos',
      },
      {
        nome: 'Mausoleo de Moulay Ismail',
        testo: 'La tumba del sultán, reformada entre 1727 y 1729. Es un lugar religioso abierto también a los visitantes.',
        come: 'A pie desde Bab Mansour, en la ciudad imperial. Ropa que cubra y silencio.',
        tempo: '30 minutos',
      },
      {
        nome: 'Heri es-Souani',
        testo:
          'El enorme granero y almacén de Moulay Ismail, con 22 filas de arcos que sostenían una bóveda hoy derrumbada. A menudo se le llama caballeriza, pero era un granero. Está junto al estanque del Agdal, parte del sistema hidráulico del palacio.',
        come: 'Petit taxi desde Bab Mansour: a pie queda lejos.',
        tempo: '45 minutos',
      },
      {
        nome: 'Medersa Bou Inania de Mequinez',
        testo: 'La madrasa meriní que empezó hacia 1335-36 el sultán Abu al-Hasan y que lleva el nombre de su hijo Abu Inan. Está abierta a los visitantes.',
        come: 'En la medina, a pie desde el-Hedim.',
        tempo: '30 minutos',
      },
      {
        nome: 'Museo Dar Jamai',
        testo: 'Un palacio de 1882, construido por un gran visir del sultán, que hoy acoge un museo asomado a la plaza el-Hedim.',
        come: 'En la plaza el-Hedim.',
        tempo: '45 minutos',
      },
    ],
    programmi: [
      {
        titolo: '1 día',
        tappe: ['Mañana: Volubilis', 'Media mañana: Moulay Idriss', 'Tarde: Bab Mansour, el-Hedim y el mausoleo de Moulay Ismail'],
      },
      {
        titolo: '2 días',
        tappe: ['Día 1: Volubilis y Moulay Idriss', 'Día 2: Mequinez, con el Heri es-Souani, la madrasa y Dar Jamai'],
      },
    ],
    zone: [
      {
        nome: 'Medina',
        perChi: 'quien quiere dormir cerca de el-Hedim',
        testo: 'Riads y casas de huéspedes a pocos pasos de Bab Mansour.',
      },
      {
        nome: 'Ville Nouvelle',
        perChi: 'quien viaja en tren',
        testo: 'Hoteles más fáciles de alcanzar desde la estación; para la medina hace falta taxi.',
      },
    ],
    sapori: [
      { nome: 'Aceitunas y aceite de la llanura', testo: 'La zona de Volubilis y Mequinez es tierra de olivos desde hace dos mil años.' },
      { nome: 'Tajín', testo: 'En los restaurantes alrededor de el-Hedim.' },
      { nome: 'Harira', testo: 'La sopa de legumbres que se encuentra en todas partes.' },
    ],
    attenzioni: [
      'En Volubilis hay guías que se ofrecen en la entrada: acordar precio y duración antes de empezar.',
      'El taxi a Volubilis y Moulay Idriss hay que acordarlo antes, con la espera y la vuelta incluidas.',
      'Ropa que cubra en Moulay Idriss, que es una ciudad santa.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: 'Las columnas y el Arco de Caracalla entre las ruinas romanas de Volubilis, cerca de Mequinez, Marruecos',
  },
  {
    slug: 'rabat',
    paeseSlug: 'marocco',
    ordine: 10,
    nome: 'Rabat (y la Mezquita Hassan II de Casablanca)',
    tipologia: ['città', 'cultura', 'città imperiale', 'mare'],
    giorniConsigliati: '1-2 días, más medio día en Casablanca',
    visitataPersonalmente: false,
    introduzione:
      'La capital de Marruecos desde 1956, en la desembocadura del Bu Regreg, frente a Salé. Patrimonio de la UNESCO desde 2012, con la ciudad vieja y la moderna. A un trayecto corto en tren está Casablanca, con la Mezquita Hassan II.',
    percheAndarci:
      'Por la Kasbah de los Udayas sobre el mar, la Torre Hassan y el Chellah, en una ciudad ordenada donde se pasea sin presiones. Luego Casablanca por su mezquita.',
    cosaVedere: [
      'La Kasbah de los Udayas',
      'Los Jardines andalusíes',
      'La Torre Hassan',
      'El Mausoleo de Mohammed V',
      'El Chellah',
      'La Mezquita Hassan II en Casablanca',
    ],
    cosaFare: ['El mirador de la kasbah sobre el río y el Atlántico', 'El tour guiado de la Mezquita Hassan II'],
    comeArrivare:
      'En tren ONCF: Al Boraq desde Tánger (alrededor de 1 hora y 20) y desde Casablanca; trenes desde Mequinez y Fez. Las estaciones son Rabat Ville y Rabat Agdal. También está el aeropuerto de Rabat-Salé.',
    comeSpostarsi: 'A pie y en tranvía, que une Rabat y Salé desde 2011.',
    periodoMigliore: 'todo el año, con la primavera y el otoño más agradables',
    erroriDaEvitare: [
      'Presentarse en la Mezquita Hassan II con pantalón corto o sin mangas: no se entra',
      'Ir a la Mezquita Hassan II sin mirar los turnos: el viernes hay menos',
    ],
    // GUIDA-START
    luoghi: [
      {
        nome: 'Kasbah de los Udayas',
        testo:
          'La ciudadela construida por los almohades hacia 1150 en la desembocadura del Bu Regreg. Se entra por la puerta de Bab Oudaya, levantada entre 1195 y 1199, y se camina entre las casas blancas y azules hasta el mirador sobre Salé y el Atlántico. En el pabellón de Moulay Ismail está el Museo Nacional de la Joyería, reabierto en 2023.',
        come: 'A pie desde la medina. Entrada libre a la kasbah.',
        quando: 'Por la mañana o a última hora de la tarde.',
        tempo: '1-1,5 horas',
      },
      {
        nome: 'Jardines andalusíes',
        testo: 'El jardín creado entre 1915 y 1918, durante el protectorado francés, según el modelo de los jardines moriscos de al-Ándalus, dentro de la kasbah.',
        come: 'Dentro de la Kasbah de los Udayas.',
        tempo: '30 minutos',
      },
      {
        nome: 'Torre Hassan y Mausoleo de Mohammed V',
        testo:
          'La Torre Hassan es el alminar nunca terminado de la gran mezquita que mandó construir el sultán almohade Yaqub al-Mansur en el siglo XII. Enfrente está el Mausoleo de Mohammed V, terminado en 1971, donde también están enterrados el rey Hassan II y el príncipe Abdallah, con la guardia real en la entrada.',
        come: 'A pie o en tranvía. La explanada está abierta.',
        quando: 'Por la mañana o a última hora de la tarde.',
        tempo: '1 hora',
        consiglio: 'Ropa que cubra, y nada de fotos a los guardias sin preguntar.',
      },
      {
        nome: 'Chellah',
        testo:
          'El lugar donde se superponen las ruinas de la ciudad romana de Sala y la necrópolis de los benimerines, iniciada en 1284-85. La puerta principal es de 1339. En los árboles y en el viejo alminar anidan las cigüeñas. Cada año acoge el festival Jazz au Chellah.',
        come: 'Petit taxi, o a pie desde la Torre Hassan.',
        quando: 'Por la tarde, cuando la luz es más suave.',
        tempo: '1 hora',
      },
      {
        nome: 'Mezquita Hassan II (Casablanca)',
        testo:
          'La gran mezquita sobre el mar de Casablanca, una de las pocas de Marruecos que pueden visitar los no musulmanes, solo con el tour guiado. El tour pasa por la sala de oración, la sala del alminar y las salas de abluciones.',
        come: 'Al Boraq desde Rabat Agdal hasta Casa Voyageurs, luego taxi. Entrada en la mezquita para el turno.',
        quando:
          'Del 16 de septiembre al 14 de marzo: de sábado a jueves a las 9, 10, 11, 12 y 15; viernes a las 9, 10 y 15. Del 15 de marzo al 15 de septiembre también a las 16. Durante el Ramadán los horarios cambian.',
        tempo: '1 hora',
        costo: '140 MAD para adultos extranjeros (2026)',
        url: 'https://fmh2.ma/',
        consiglio: 'Hombros y rodillas cubiertos, nada de pantalón corto ni camisetas de tirantes. Los zapatos se quitan en la entrada.',
      },
    ],
    programmi: [
      {
        titolo: '1 día',
        tappe: ['Mañana: Kasbah de los Udayas y Jardines andalusíes', 'Tarde: Torre Hassan y Mausoleo de Mohammed V', 'Última hora de la tarde: Chellah'],
      },
      {
        titolo: '2 días',
        tappe: ['Día 1: como arriba', 'Día 2: Al Boraq a Casablanca y tour de la Mezquita Hassan II'],
      },
    ],
    zone: [
      {
        nome: 'Medina de Rabat',
        perChi: 'quien quiere dormir cerca de la kasbah',
        testo: 'Riads a pocos minutos de la Kasbah de los Udayas. Más tranquila que la medina de Fez.',
      },
      {
        nome: 'Centro moderno y Agdal',
        perChi: 'quien viaja en tren',
        testo: 'Hoteles cerca de las estaciones de Rabat Ville y Rabat Agdal, con el tranvía para la medina.',
      },
    ],
    sapori: [
      { nome: 'Pescado del Atlántico', testo: 'Pescado a la brasa en los restaurantes hacia el puerto y la desembocadura del río.' },
      { nome: 'Té con hierbabuena', testo: 'En los cafés de la kasbah y de la medina.' },
    ],
    attenzioni: [
      'En la Mezquita Hassan II solo se entra con el tour guiado y con ropa que cubra: los revendedores online cobran más que la entrada en la mezquita.',
      'Carteristas en las zonas con mucha gente y en las playas.',
      'Taxis: pedir el taxímetro o acordar el precio antes.',
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['marocco-citta-imperiali'],
    imageAlt: 'La puerta almohade de Bab Oudaya y las murallas de la Kasbah de los Udayas en Rabat, Marruecos',
  },
]
