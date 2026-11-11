import type { Destinazione } from '@/lib/types'

export const destinazioniBulgaria: Destinazione[] = [
  {
    slug: 'bansko',
    paeseSlug: 'bulgaria',
    ordine: 1,
    nome: 'Bansko',
    tipologia: ['sci', 'montagna'],
    giorniConsigliati: '4 días, tres completos en las pistas',
    visitataPersonalmente: true,
    introduzione: 'Uno de los dominios esquiables más conocidos de Bulgaria, en los montes Pirin, con un centro histórico de casas de piedra y madera.',
    percheAndarci: 'Para esquiar en un rincón de Europa que rara vez aparece en los planes de vacaciones blancas, a precios mucho más bajos que en los Alpes.',
    cosaVedere: ['El centro histórico de Bansko, entre las casas de la «escuela de Bansko» y la parte más moderna', 'La vista desde el Todorka Peak'],
    cosaFare: [
      'Esquí en las pistas de Bansko Ski Zone (hay una ficha de experiencia dedicada)',
      'La bajada iluminada para el esquí nocturno (hay una ficha de experiencia dedicada)',
      'Après-ski en los locales de la base de la góndola',
      'Cena en una mehana típica del centro histórico',
    ],
    doveDormire:
      'Elegí un hotel a pocos minutos a pie de la estación de la góndola: por la mañana llegaba rápido a las pistas y por la noche estaba a dos pasos del centro histórico. No era un establecimiento de marca ni especialmente refinado, solo una base práctica para la semana en la nieve.\n\nAlternativas cerca de la góndola. Económicas: Hotel Dumanov (cerca de la estación inferior), La Vien Guest House (5 minutos a pie, gestión familiar). Gama media: Hotel Ida (piscina interior y jacuzzi), MPM Hotel Sport (acceso casi directo a las pistas). Lujo: Kempinski Hotel Grand Arena Bansko (junto a la góndola), Premier Luxury Mountain Resort.',
    doveMangiare: 'Comimos en las mehane del centro histórico: kapama, banitsa y shopska salata, siempre con rakia.',
    comeArrivare: "Se vuela a Sofía, el aeropuerto internacional más cómodo, a unos 160 km de Bansko: en coche son 2-2,5 horas por la autopista Struma y luego por el valle hasta Razlog. Quien va solo a esquiar suele usar traslados compartidos (unos 15-30 € por persona) o privados (unos 80-90 € por coche), que hay que reservar con antelación. El autobús público cuesta unos 20-22 €, pero obliga a pasar por la estación central de Sofía; el tren hasta Blagoevgrad y luego un minibús es la opción más lenta.",
    comeSpostarsi: 'Una góndola lleva del centro a las pistas; de una pista a otra uno se mueve con los esquís.',
    periodoMigliore: 'de diciembre a la primavera, con nieve artificial; fechas de la temporada en la web oficial',
    costi: "Presupuesto diario por persona, orientativo: bajo 50-70 € (pensión, mehanas, forfait), medio 90-130 € (hotel cerca de la góndola, alquiler de material, cenas fuera), alto desde 200 €. El forfait de un día para adultos costaba unos 33 € en la temporada 2025/26; una cerveza local unos 1,50-2 €, una cena en mehana 15-20 € por persona. En los refugios de altura los precios son mucho más altos. Desde 2026 se paga en euros.",
    erroriDaEvitare: ['Comprar el forfait en taquilla: en línea, con unos días de antelación, cuesta menos', 'Esperar pistas de Alpes: a Bansko se va por la experiencia y por el precio, no por el nivel del dominio'],
    miaEsperienza:
      'No esperaba grandes cosas del esquí en Bulgaria, y es lo que encontré: pistas bonitas y bien cuidadas, nada exagerado comparado con los Alpes. Lo bueno está justo ahí. Se va por la experiencia exótica de esquiar en un rincón de Europa fuera de los circuitos habituales, más que por el esquí en sí.',
    luoghi: [
      {
        nome: "Zona de esquí de Bansko",
        testo: "A la zona se llega con una larga góndola, en servicio desde 2003, desde el pueblo hasta la base de Banderishka Polyana; los remontes llegan a 2.600 metros y hay unos 75 km de pistas. Las pistas son más tranquilas que las alpinas. Se va por la experiencia exótica en un rincón de Europa fuera de los circuitos más conocidos.",
        come: "Estación de la góndola a pocos minutos a pie del centro; forfait en taquilla u online.",
        quando: "Invierno; a primera hora de la mañana hay colas en la góndola.",
        tempo: "jornada completa",
        costo: "forfait de un día para adultos unos 33 € en la temporada 2025/26; tarifas 2026/27 en la web oficial",
        orari: "Temporada del 1 de diciembre de 2026 al 11 de abril de 2027; góndola 8:30-17, telesillas 8:45-16:15.",
        lat: 41.82709,
        lng: 23.4775,
        url: "https://banskoski.com",
        consiglio: "Comprar el forfait online para evitar la cola de la taquilla."
      },
      {
        nome: "Bajada nocturna iluminada",
        testo: "La pista de vuelta al pueblo, se ilumina para esquiar de noche, pero no todos los días. Es una de las atracciones más particulares de Bansko.",
        come: "Góndola hasta la estación intermedia y descenso; horarios en la web de la zona.",
        quando: "Noche, en los días de apertura nocturna.",
        tempo: "1-2 horas",
        url: "https://banskoski.com",
        consiglio: "Después de la bajada, après-ski en los locales de la base de la góndola."
      },
      {
        nome: "Todorka Peak",
        testo: "La estación superior de Todorka, con vista a los montes Pirin. Se llega con los remontes.",
        come: "Góndola y telesillas.",
        quando: "Día despejado, en invierno.",
        tempo: "1 hora",
        lat: 41.75274,
        lng: 23.43179,
        consiglio: "Tener en cuenta el viento y el frío en la cima."
      },
      {
        nome: "Casco antiguo de Bansko",
        testo: "Casas de piedra y madera de la «escuela de Bansko» (el renacimiento búlgaro del siglo XIX), la iglesia de la Santísima Trinidad, construida por los vecinos en el siglo XIX, y las mehanas típicas con kapama, banitsa y shopska salata. Es más animado por la noche.",
        come: "A pie desde la estación de la góndola.",
        quando: "Noche.",
        tempo: "2 horas",
        costo: "entrada libre",
        orari: "Siempre accesible.",
        lat: 41.83933,
        lng: 23.48871,
        consiglio: "Comer en las mehanas del casco antiguo, no en la calle principal."
      },
      {
        nome: "Iglesia de la Santísima Trinidad",
        testo: "La gran iglesia de 1835, construida por los vecinos tras obtener el permiso de las autoridades otomanas, con un campanario de unos 30 metros añadido en 1850. Dentro hay iconos y frescos de pintores de la escuela de Bansko.",
        come: "A pie, en el casco antiguo.",
        quando: "De día, fuera de los oficios.",
        tempo: "30 minutos",
        costo: "entrada libre",
        lat: 41.83539,
        lng: 23.48706,
        consiglio: "Ropa que cubra hombros y rodillas."
      },
      {
        nome: "Casa Velyanova",
        testo: "Una casa fortificada del siglo XIX decorada por el pintor Velyan Ognev, llegado de Debar para pintar la iglesia de la Santísima Trinidad. La «habitación azul» tiene techos de madera tallada y paredes pintadas.",
        come: "A pie, en la calle Velyan Ognev, en el casco antiguo.",
        quando: "De día.",
        tempo: "30 minutos",
        lat: 41.8355,
        lng: 23.48803
      },
      {
        nome: "Casa-museo Neofit Rilski",
        testo: "La casa natal de Neofit Rilski (1793-1881), monje y pedagogo, autor de la primera gramática búlgara. Es una típica casa-fortaleza de Bansko, con muros gruesos y escondites.",
        come: "A pie, en el casco antiguo, cerca de la iglesia de la Santísima Trinidad.",
        quando: "De día.",
        tempo: "30 minutos",
        lat: 41.83509,
        lng: 23.48669
      },
      {
        nome: "Casa-museo Nikola Vaptsarov",
        testo: "La casa natal del poeta Nikola Vaptsarov (1909-1942), fusilado en Sofía por su actividad antifascista, con objetos personales y la historia del Bansko de principios del siglo XX.",
        come: "A pie, en la plaza Nikola Vaptsarov.",
        quando: "De día.",
        tempo: "30-45 minutos",
        lat: 41.8375,
        lng: 23.4888
      },
      {
        nome: "Exposición permanente de iconos",
        testo: "Iconos de la escuela pictórica de Bansko, de los siglos XVIII y XIX, reunidos en un edificio del casco antiguo. Muestra hasta qué punto el pueblo era un centro artístico antes de convertirse en estación de esquí.",
        come: "A pie, en la calle Yane Sandanski, en el casco antiguo.",
        quando: "De día, entre semana.",
        tempo: "30 minutos",
        lat: 41.83615,
        lng: 23.48817
      },
      {
        nome: "Banya y sus aguas termales",
        testo: "El pueblo termal a pocos kilómetros de Bansko, con manantiales calientes, piscinas públicas y hoteles con spa. Una tarde de descanso después de los días en las pistas.",
        come: "En coche o taxi, en un cuarto de hora.",
        quando: "Por la tarde o la noche, después de esquiar.",
        tempo: "2-3 horas",
        lat: 41.88111,
        lng: 23.52444
      }
    ],
    sapori: [
      {
        nome: "Kapama",
        testo: "Estofado de cerdo y salchichas con col, cocido lentamente en una cazuela de barro."
      },
      {
        nome: "Banitsa",
        testo: "Hojaldre de queso, un desayuno típico de Bulgaria."
      },
      {
        nome: "Shopska salata",
        testo: "Ensalada de tomate, pepino y feta rallado."
      },
      {
        nome: "Rakia",
        testo: "Aguardiente de fruta, que se bebe antes de las comidas."
      }
    ],
    attenzioni: [
      "Bulgaria usa el euro desde el 1 de enero de 2026: comparar con los precios en lev de datos antiguos.",
      "Desde Sofía hay unos 160 km: usar traslados reservados, no taxis de la calle.",
      "La zona de esquí tiene colas en temporada alta: llegar pronto a la góndola.",
      "En coche en invierno hace falta equipo de invierno (neumáticos de nieve, cadenas si se exigen)."
    ],
    faq: [
      {
        domanda: "¿Cuándo se esquía en Bansko?",
        risposta: "La temporada 2026/27 va del 1 de diciembre de 2026 al 11 de abril de 2027, con nieve artificial en gran parte de las pistas. Las fechas pueden cambiar según el tiempo."
      },
      {
        domanda: "¿Cuánto cuesta el forfait?",
        risposta: "El de un día para adultos costaba unos 33 € en la temporada 2025/26. Comprándolo en línea con unos días de antelación se ahorra hasta un 25% respecto a la taquilla."
      },
      {
        domanda: "¿Cómo se llega desde Sofía?",
        risposta: "En coche en 2-2,5 horas (unos 160 km), con traslado compartido o privado, o en autobús público desde la estación central de Sofía, más lento y barato."
      },
      {
        domanda: "¿En Bulgaria se paga en euros?",
        risposta: "Sí: Bulgaria entró en la eurozona el 1 de enero de 2026 y desde el 1 de febrero de 2026 el euro es la única moneda legal. En las mehanas fuera del centro conviene llevar efectivo."
      },
      {
        domanda: "¿Bansko es apta para principiantes?",
        risposta: "Sí: en Banderishka Polyana hay pistas azules y la zona de las escuelas de esquí. Las dos negras, entre ellas la del Todorka, son para esquiadores expertos."
      },
      {
        domanda: "¿Hace falta coche en Bansko?",
        risposta: "Si se duerme cerca de la góndola, no: a las pistas se llega a pie y el casco antiguo está a pocos minutos. El coche sirve para Banya, el Pirin en verano o el Monasterio de Rila."
      }
    ],
    gite: [
      {
        nome: "Monasterio de Rila",
        distanza: "unas 2 horas en coche",
        come: "En coche hacia Sofía, con un desvío por el valle de Rila.",
        testo: "El monasterio ortodoxo más importante de Bulgaria, patrimonio de la UNESCO. Encaja bien en el camino de vuelta a Sofía."
      },
      {
        nome: "Refugio Vihren y Parque Nacional del Pirin",
        distanza: "unos 15 km al sur",
        come: "En coche por la carretera del valle del Banderitsa, en verano.",
        testo: "El punto de partida de los senderos hacia el Vihren, la cumbre más alta del Pirin (2.914 m), dentro de un parque patrimonio de la UNESCO."
      },
      {
        nome: "Dobrinishte",
        distanza: "unos 6 km al este",
        come: "En coche o taxi.",
        testo: "Un pueblo con aguas termales y una pequeña estación de esquí, más tranquilo que Bansko."
      }
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Góndola temprano y esquí en Banderishka Polyana y Shiligarnika",
          "Comida en la montaña o de vuelta en el pueblo",
          "Après-ski en la base de la góndola",
          "Cena en una mehana del casco antiguo"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: esquí como en el plan de un día",
          "Día 2: esquí por la mañana hasta el Todorka, tarde en el casco antiguo entre la iglesia de la Santísima Trinidad y la Casa Velyanova, noche en Banya"
        ]
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1 y 2: esquí en la estación",
          "Día 3: Monasterio de Rila en el camino de vuelta a Sofía"
        ]
      }
    ],
    zone: [
      {
        nome: "Cerca de la góndola",
        perChi: "quien esquía todos los días y quiere dejar el coche aparcado",
        testo: "Hoteles a 100-500 metros de la estación de salida, algunos con piscina y spa. En temporada alta se llenan pronto.",
        fascia: "80-130 €"
      },
      {
        nome: "Casco antiguo",
        perChi: "quien quiere las mehanas y la vida nocturna a pie",
        testo: "Pensiones y pequeños hoteles entre las casas de piedra, a 10-15 minutos a pie de la góndola.",
        fascia: "40-90 €"
      },
      {
        nome: "Resorts de lujo",
        perChi: "quien busca spas amplios y servicios de hotel de montaña",
        testo: "Grandes establecimientos de cinco estrellas frente a la góndola o con lanzadera propia."
      },
      {
        nome: "Banya y Razlog",
        perChi: "quien viaja en coche y busca precios más bajos o las termas",
        testo: "Pueblos a 10-15 minutos por carretera, con hoteles termales y pensiones; para esquiar se vuelve cada mañana a Bansko."
      }
    ],
    esperienzeSlugs: ['sci-bansko', 'discesa-notturna-bansko'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'Las pistas nevadas del dominio esquiable de Bansko, Bulgaria',
    immagine: '/images/bulgaria/bansko-stock.jpg',
  },
  {
    slug: 'monastero-rila',
    paeseSlug: 'bulgaria',
    ordine: 2,
    nome: 'Monasterio de Rila',
    tipologia: ['religione', 'storia', 'unesco'],
    giorniConsigliati: 'media jornada, en el camino de regreso',
    visitataPersonalmente: true,
    introduzione: 'El mayor y más importante monasterio ortodoxo de Bulgaria, fundado en el siglo X por el ermitaño Iván de Rila y Patrimonio de la Humanidad de la UNESCO desde 1983.',
    percheAndarci: 'Fue el golpe de efecto del viaje. Después de los días en la nieve el contraste es total, y es probablemente el recuerdo más fuerte de todo el recorrido.',
    cosaVedere: [
      'La Iglesia de la Natividad de la Virgen, de cinco cúpulas, cubierta de frescos coloridísimos',
      'Las altas murallas de piedra que cierran el conjunto y le dan aspecto de fortaleza',
      'El Museo de Historia Eclesiástica, con la Cruz de Rafail, tallada con 104 escenas religiosas y 650 figuras en miniatura',
    ],
    cosaFare: ['Visita al conjunto monástico y a la iglesia (hay una ficha de experiencia dedicada)', 'Visita al Museo de Historia Eclesiástica'],
    doveDormire: 'No dormí allí: fue una parada de media jornada en el camino de regreso a Sofía.',
    doveMangiare: 'No tengo direcciones que recomendar: la parada fue toda para la visita.',
    comeArrivare: "El monasterio está al fondo del valle del río Rilska, a unas 2 horas en coche tanto de Sofía como de Bansko, con un desvío de la autopista Struma a la altura de Kocherinovo. Según el monasterio, el transporte público directo no se ha restablecido: sin coche se llega con una excursión organizada desde Sofía, o en autobús hasta Blagoevgrad y luego en taxi. En invierno la carretera del valle puede tener hielo.",
    comeSpostarsi: 'A pie, dentro del conjunto monástico.',
    periodoMigliore: 'todo el año',
    costi: "Presupuesto diario por persona, orientativo: bajo 30-50 €, medio 60-90 €, alto desde 130 € con noche de hotel y guía privado. La entrada al complejo y a la iglesia es gratuita; en 2026 el Museo de Historia Eclesiástica cuesta 5 €, la Torre de Hrelyo y el museo de la Economía del monasterio 3 € cada uno, el museo etnográfico 4 €.",
    erroriDaEvitare: ['Entrar en la iglesia con hombros y rodillas descubiertos', 'Hacer fotos o vídeos dentro de los edificios religiosos sin seguir las normas del monasterio'],
    miaEsperienza:
      'Después de los días en la nieve, el monasterio fue el golpe de efecto del viaje. Los frescos coloridísimos de la Iglesia de la Natividad de la Virgen y el silencio de la montaña alrededor son el recuerdo más vivo de todo el recorrido.',
    luoghi: [
      {
        nome: "Complejo del Monasterio de Rila",
        testo: "El mayor y más famoso monasterio ortodoxo de Bulgaria, Patrimonio de la UNESCO, fundado en el siglo X, según la tradición, por San Juan de Rila y reconstruido entre 1834 y 1862 tras un incendio. Las altas murallas de piedra, casi de fortaleza, encierran un patio de pórticos con franjas blancas y negras.",
        come: "En coche o bus desde Sofía, al sur de la capital, o como desvío en la carretera entre Bansko y Sofía.",
        quando: "Temprano por la mañana, antes de los autobuses turísticos.",
        tempo: "1,5-2 horas",
        costo: "entrada libre",
        lat: 42.13331,
        lng: 23.34012,
        url: "https://rilskimanastir.org/en/",
        consiglio: "Es un lugar de culto: ropa que cubra hombros y rodillas."
      },
      {
        nome: "Iglesia de la Natividad de la Virgen",
        testo: "La iglesia de cinco cúpulas con frescos de colores vivos en el pórtico y en el interior, obra de varios pintores del siglo XIX, entre ellos los hermanos Zahari y Dimitar Zograf. Para las fotos en el interior, seguir las normas del monasterio.",
        come: "Dentro del patio del monasterio.",
        quando: "Mañana.",
        tempo: "30-45 minutos",
        costo: "entrada libre",
        orari: "Lunes-jueves 6:30-18, viernes-domingo 6:30-18:30; del 1 de junio al 30 de septiembre, viernes-domingo hasta las 19:30.",
        lat: 42.13339,
        lng: 23.34018,
        consiglio: "El silencio de la montaña alrededor es lo mejor."
      },
      {
        nome: "Museo de Historia Eclesiástica y Cruz de Rafail",
        testo: "El museo del monasterio conserva reliquias y la Cruz de Rafail, una sola pieza de madera de 81 x 43 cm en la que el monje Rafail talló 104 escenas religiosas y 650 figuras en miniatura. Es pequeño pero rico.",
        come: "En el complejo, entrada aparte.",
        quando: "De día.",
        tempo: "45 minutos",
        costo: "5 € adultos, 2 € estudiantes hasta 18 años (2026)",
        orari: "Todos los días 8:30-16:30; del 1 de junio al 30 de septiembre 8:30-19:30.",
        lat: 42.13334,
        lng: 23.34072,
        url: "https://rilskimanastir.org/en/museums/tc-rkovno-istoricheski-muzei/",
        consiglio: "El billete es fácil de perder: guardarlo en el bolsillo."
      },
      {
        nome: "Torre de Hrelyo",
        testo: "La construcción más antigua del monasterio, de 1335: una torre de piedra de unos 23 metros y cinco plantas, mandada construir por el señor feudal Stefan Hrelyo Dragovol. En la última planta está la capilla de la Transfiguración, con frescos del siglo XIV.",
        come: "En el patio del monasterio, junto a la iglesia.",
        quando: "Por la mañana.",
        tempo: "30 minutos",
        costo: "3 € adultos, 2 € estudiantes hasta 18 años (2026)",
        orari: "Todos los días 8:30-16:30.",
        lat: 42.1336,
        lng: 23.34021,
        url: "https://rilskimanastir.org/en/museums/khrel-ova-kula/"
      },
      {
        nome: "Galería de iconos",
        testo: "Ochenta iconos de los siglos XVIII y XIX de la colección del monasterio y 28 retratos de los abades, de 1860 a 2005. Una sala pequeña, útil para entender la pintura religiosa búlgara.",
        come: "En el complejo, entrada aparte.",
        quando: "De día.",
        tempo: "20-30 minutos",
        orari: "Todos los días 8:30-16:30.",
        lat: 42.13312,
        lng: 23.3405,
        url: "https://rilskimanastir.org/en/museums/ikonna-galeriia/"
      },
      {
        nome: "Museo de la Economía del monasterio y antigua cocina",
        testo: "La vida práctica del monasterio en los siglos XVIII y XIX: un viejo molino, el horno del pan y herramientas para la madera y las abejas. La pieza estrella es la magernitsa, la cocina donde se preparaban las comidas para monjes y peregrinos, construida por el maestro Alexi del pueblo de Rila.",
        come: "En el complejo, entrada aparte.",
        quando: "De día.",
        tempo: "30 minutos",
        costo: "3 € adultos, 2 € estudiantes hasta 18 años (2026)",
        orari: "Todos los días 8:30-16:30.",
        url: "https://rilskimanastir.org/en/museums/muzei-manastirsko-stopanstvo/"
      },
      {
        nome: "Museo etnográfico y habitaciones de huéspedes",
        testo: "Alfombras, trajes populares, joyas y una habitación doméstica del siglo XIX. Las habitaciones de huéspedes llevan el nombre de las ciudades que las amueblaron, como Koprivshtitsa, Teteven, Chirpan, Kyustendil y Gabrovo.",
        come: "En el complejo; para algunas salas, preguntar al personal del Museo de Historia.",
        quando: "De día.",
        tempo: "30 minutos",
        costo: "4 € adultos, 2 € estudiantes hasta 18 años (2026)",
        orari: "Todos los días 8:30-16:30.",
        url: "https://rilskimanastir.org/en/museums/etnografski-muzei-i-gostni-stai-arkhondaritci/"
      },
      {
        nome: "Cueva de San Juan de Rila",
        testo: "El lugar donde, según la tradición, vivió el ermitaño antes de la fundación del monasterio, con una pequeña iglesia. Los peregrinos pasan por la estrecha grieta de la cueva.",
        come: "En coche unos 3,5 km valle arriba, al este del monasterio, y luego unos diez minutos a pie cuesta arriba por el bosque.",
        quando: "De día, con calzado adecuado.",
        tempo: "1-1,5 horas",
        lat: 42.1501,
        lng: 23.36991
      },
      {
        nome: "Ermita de San Lucas",
        testo: "Una pequeña ermita de 1798 en el bosque, con un patio y la iglesia de San Lucas. Un desvío tranquilo en la carretera hacia Kirilova polyana.",
        come: "A pie o en coche por la carretera de Kirilova polyana, unos 3,7 km al noreste del monasterio, y luego un sendero corto.",
        quando: "De día.",
        tempo: "45 minutos",
        lat: 42.14551,
        lng: 23.36066
      }
    ],
    sapori: [
      {
        nome: "Comida de picnic",
        testo: "En el monasterio no hay restaurantes obligatorios: almorzar antes o después."
      }
    ],
    attenzioni: [
      "Ropa modesta: hombros y rodillas cubiertos, sin sombrero dentro de la iglesia.",
      "Dentro de la iglesia respetar las normas sobre fotos y hablar en voz baja.",
      "Carretera de montaña: en invierno hacen falta neumáticos de nieve."
    ],
    faq: [
      {
        domanda: "¿Cuánto cuesta visitar el Monasterio de Rila?",
        risposta: "El complejo y la iglesia son gratuitos. Los museos se pagan aparte: en 2026 el Museo de Historia Eclesiástica 5 €, la Torre de Hrelyo 3 €, el museo etnográfico 4 €."
      },
      {
        domanda: "¿Cuánto tiempo hace falta?",
        risposta: "Para el patio, la iglesia y el museo bastan 2-3 horas. Con la Torre de Hrelyo y la cueva de San Juan, conviene contar con media jornada."
      },
      {
        domanda: "¿Se pueden hacer fotos?",
        risposta: "El patio se fotografía libremente; dentro de la iglesia y de los edificios religiosos hay que seguir las normas del monasterio, que normalmente no permiten fotos ni vídeos."
      },
      {
        domanda: "¿Cómo hay que vestir?",
        risposta: "Hombros y rodillas cubiertos, sin sombrero dentro de la iglesia y en voz baja: es un monasterio activo."
      },
      {
        domanda: "¿Se llega en transporte público?",
        risposta: "La conexión directa no se ha restablecido. Las alternativas son una excursión organizada desde Sofía o el autobús a Blagoevgrad más un taxi."
      },
      {
        domanda: "¿Se puede dormir en el monasterio?",
        risposta: "Sí, hay habitaciones para huéspedes: se reservan por teléfono de lunes a viernes, 14:30-16 y 18-19, en el +359 896 872 010."
      }
    ],
    gite: [
      {
        nome: "Los Siete Lagos de Rila",
        distanza: "en la otra vertiente del Rila, sobre Sapareva Banya",
        come: "En coche hasta Panichishte, luego telesilla y sendero hasta el refugio Rilski Ezera.",
        testo: "Siete lagos glaciares en terrazas entre 2.100 y 2.500 metros. En verano es la excursión más famosa del Rila."
      },
      {
        nome: "Sofía y la Iglesia de Boyana",
        distanza: "unas 2 horas en coche",
        come: "En coche por la autopista Struma.",
        testo: "La catedral de Alejandro Nevski, la rotonda de San Jorge y los restos romanos de Serdica; al pie del Vitosha, la Iglesia de Boyana con frescos de 1259, patrimonio de la UNESCO."
      },
      {
        nome: "Bansko",
        distanza: "unas 2 horas en coche",
        come: "En coche hacia el sur por la Struma y luego por el valle hasta Razlog.",
        testo: "La estación de esquí del Pirin, con un casco antiguo de casas de piedra y mehanas."
      }
    ],
    programmi: [
      {
        titolo: "Media jornada (de camino)",
        tappe: [
          "Llegada a primera hora, antes de los autobuses turísticos",
          "Patio e Iglesia de la Natividad de la Virgen",
          "Museo de Historia Eclesiástica y Cruz de Rafail",
          "Comida en los restaurantes de fuera de las murallas y salida"
        ]
      },
      {
        titolo: "1 día",
        tappe: [
          "Mañana: iglesia, Torre de Hrelyo y Museo de Historia Eclesiástica",
          "Comida fuera de las murallas",
          "Tarde: cueva de San Juan de Rila y ermita de San Lucas",
          "Vuelta a Sofía o a Bansko"
        ]
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: monasterio y museos, noche en las habitaciones del monasterio o en los hoteles del valle",
          "Día 2: oficio de la mañana, cueva de San Juan y paseo hacia Kirilova polyana"
        ]
      }
    ],
    zone: [
      {
        nome: "Habitaciones del monasterio",
        perChi: "quien quiere vivir el monasterio por la noche y a primera hora",
        testo: "Habitaciones sencillas dentro de las murallas, que se reservan por teléfono entre semana. Por la noche, cerradas las puertas, el patio queda en silencio."
      },
      {
        nome: "Hoteles a lo largo del valle",
        perChi: "quien viaja en coche y quiere más comodidad",
        testo: "Algunos hoteles y un camping a 1-3 km del monasterio, entre ellos uno con spa."
      },
      {
        nome: "Pueblo de Rila",
        perChi: "quien busca pensiones sencillas a precios bajos",
        testo: "El pueblo a unos 20 km valle abajo, con pensiones familiares y algunas tiendas."
      },
      {
        nome: "Sofía",
        perChi: "quien visita el monasterio en el día",
        testo: "La capital, a unas 2 horas, con la oferta de hoteles más amplia; de aquí salen las excursiones organizadas."
      }
    ],
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'La fachada con frescos de la Iglesia de la Natividad de la Virgen en el Monasterio de Rila, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
