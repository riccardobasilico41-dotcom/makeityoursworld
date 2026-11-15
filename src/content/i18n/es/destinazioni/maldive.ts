import type { Destinazione } from '@/lib/types'

export const destinazioniMaldive: Destinazione[] = [
  {
    slug: 'male-hulhumale',
    paeseSlug: 'maldive',
    ordine: 1,
    nome: 'Malé y Hulhumalé',
    tipologia: ['città', 'arrivo'],
    giorniConsigliati: 'media jornada o una noche de tránsito',
    visitataPersonalmente: true,
    miaEsperienza:
      "Malé y Hulhumalé fueron mi punto de llegada y de salida en Maldivas, entre el aeropuerto Velana y las lanchas rápidas hacia las islas.",
    introduzione:
      "La capital, una de las ciudades más densamente pobladas del mundo, y Hulhumalé, la isla artificial junto al aeropuerto de Velana, con playa urbana, hoteles y restaurantes.",
    percheAndarci:
      "Para la primera o la última noche, cuando los horarios de los vuelos no permiten una barca o un hidroavión, y para media jornada entre el mercado de pescado y la Mezquita del Viernes.",
    cosaVedere: [
      'El mercado de pescado de Malé por la tarde, cuando vuelven los dhonis',
      'El mercado de frutas y verduras',
      'La Mezquita del Viernes (Hukuru Miskiy), de piedra de coral de 1658',
      'La playa de Hulhumalé',
    ],
    cosaFare: ['Probar los short eats en un café local', 'Un paseo nocturno por el malecón de Hulhumalé'],
    doveDormire: "Hulhumalé, a 10-15 minutos del aeropuerto, con hoteles y guesthouses de 60 a 150 $.",
    doveMangiare: 'Cafés locales para los short eats, restaurantes del malecón de Hulhumalé.',
    comeArrivare: "El aeropuerto Velana está en la isla de Hulhulé, frente a Malé. A la capital va el ferri público, 10-15 minutos, más o menos cada 15 minutos de las 5 a medianoche, por cerca de 1 $ en rufiyaa (unos 1 €); si no, el autobús por el puente Sinamalé (10-15 MVR) o el taxi (unos 70 MVR, unos 4 €). Hulhumalé queda a unos diez minutos en autobús (10-20 MVR) o en taxi (unos 80 MVR, unos 4,50 €). Las lanchas rápidas y los hidroaviones a las demás islas salen de los mostradores de llegadas.",
    comeSpostarsi: 'A pie y en taxi.',
    periodoMigliore: 'todo el año.',
    costi: "Ferri a Malé unos 1 $, autobús 10-20 MVR, taxi 70-80 MVR (unos 4-4,50 €), 2026. Económico: unos 70-100 € al día con guesthouse en Hulhumalé, cafés locales y autobús. Medio: 120-200 € con hotel en el paseo marítimo y taxis. Alto: más de 250 € con los mejores hoteles de Hulhumalé y cenas en restaurante.",
    erroriDaEvitare: ['Visitar las mezquitas durante la oración o sin ropa que cubra', "Buscar alcohol: Malé y Hulhumalé son islas habitadas, y allí rige la prohibición"],
    luoghi: [
      {
        "nome": "Mercado de pescado de Malé",
        "costo": "Entrada libre.",
        "testo": "En el paseo marítimo norte de Malé los dhonis descargan atunes y pescado de arrecife, que se cortan en los mostradores ante los curiosos. Es el rincón más auténtico de la capital: olor fuerte, suelos mojados, pescadores regateando. Al lado está el mercado de fruta y verdura, con cocos, guindillas y paquetes de pescado seco.",
        "come": "Desde la terminal del ferri del aeropuerto, a pocos minutos a pie.",
        "quando": "Desde primera hora de la tarde, cuando vuelven las barcas; el viernes, ritmo reducido por la oración. Sin horario fijo.",
        "tempo": "1 hora",
        "consiglio": "Pide siempre permiso para fotografiar a personas."
      },
      {
        "nome": "Mezquita del Viernes (Hukuru Miskiy)",
        "lng": 73.5125,
        "lat": 4.17806,
        "testo": "Construida en 1658 bajo el sultán Ibrahim Iskandar, es la mezquita más antigua de Malé: bloques de coral encajados sin argamasa y tallados con motivos e inscripciones, techos y vigas de madera lacada. Al lado están el cementerio con lápidas de coral y el minarete Munnaaru. Las mezquitas de piedra de coral de las Maldivas están en la lista indicativa de la UNESCO.",
        "come": "A pie desde el centro de Malé. Para entrar, los no musulmanes necesitan un permiso: se pide al personal de la mezquita o al Ministerio de Asuntos Islámicos; desde fuera se ve bien de todos modos.",
        "quando": "Fuera de las horas de oración, evitando el viernes.",
        "tempo": "30 minutos",
        "consiglio": "Hombros y rodillas cubiertos; no se entra durante la oración."
      },
      {
        "nome": "Playa de Hulhumalé",
        "costo": "Playa pública, gratuita.",
        "lng": 73.54,
        "lat": 4.2125,
        "testo": "La playa urbana de la isla artificial junto al aeropuerto, con paseo marítimo y restaurantes. Cómoda para la primera o la última noche.",
        "come": "Desde Velana en autobús o taxi, 10-15 minutos.",
        "quando": "Atardecer y noche.",
        "tempo": "una noche",
        "consiglio": "Es una isla habitada: valen las normas locales, así que ropa que cubra y nada de alcohol."
      },
      {
        "nome": "Museo Nacional y Sultan Park",
        "testo": "Inaugurado en 1952, el museo reúne piezas desde la época budista hasta los sultanes islámicos: piedras talladas, armas, ropa y objetos de la corte. Está en el Sultan Park, parte del recinto del palacio real del siglo XVII, destruido por un incendio en 1968. El parque, con árboles y bancos a la sombra, es uno de los pocos rincones verdes del centro.",
        "come": "A pie desde el centro de Malé, junto a la Gran Mezquita del Viernes.",
        "quando": "Por la mañana, antes de las horas de más calor.",
        "tempo": "1-1,5 horas",
        "lat": 4.177283,
        "lng": 73.509979,
        "consiglio": "Horarios y entrada se preguntan allí: cambian y no se publican de forma fiable."
      },
      {
        "nome": "Gran Mezquita del Viernes (Islamic Centre)",
        "testo": "Inaugurada en noviembre de 1984, con su gran cúpula dorada y un minarete de 41 metros es la silueta más reconocible de Malé. Se construyó con la ayuda de varios países islámicos, recordados en una placa en la entrada.",
        "come": "A pie en el centro, frente al Sultan Park.",
        "quando": "Fuera de las horas de oración, nunca el viernes a mediodía.",
        "tempo": "20-30 minutos",
        "consiglio": "Hombros y rodillas cubiertos."
      },
      {
        "nome": "Mulee-aage",
        "testo": "La residencia oficial del presidente, construida entre 1914 y 1919 para el heredero al trono, al estilo de los bungalós coloniales de Ceilán. Está junto a la antigua Mezquita del Viernes y al minarete Munnaaru, en el núcleo histórico de la ciudad.",
        "come": "A pie; solo se ve desde fuera.",
        "tempo": "15 minutos",
        "lat": 4.1775,
        "lng": 73.5125
      },
      {
        "nome": "Artificial Beach",
        "testo": "La pequeña playa construida en la esquina oriental de Malé, protegida por rompeolas. Por la tarde se llena de familias y jóvenes que se bañan vestidos: el mejor sitio para ver la ciudad cuando se relaja.",
        "come": "A pie, al extremo este del paseo marítimo.",
        "quando": "Última hora de la tarde y noche.",
        "tempo": "30 minutos-1 hora",
        "costo": "Gratuita.",
        "lat": 4.17426,
        "lng": 73.51856,
        "consiglio": "Baño con camiseta y pantalón largo: nada de bikini."
      },
      {
        "nome": "Puente Sinamalé",
        "testo": "Inaugurado el 30 de agosto de 2018, es el primer puente entre islas de las Maldivas: 2,1 km entre Malé, la isla del aeropuerto y Hulhumalé, con carriles peatonales separados. Desde arriba se ven la laguna, el puerto y la silueta apretada de la capital.",
        "come": "A pie desde el lado este de Malé, o en autobús o taxi.",
        "quando": "Temprano por la mañana o al atardecer, con el sol bajo.",
        "tempo": "unos 30 minutos a pie",
        "lat": 4.17294,
        "lng": 73.52449
      },
      {
        "nome": "Monumento al tsunami",
        "testo": "En el paseo marítimo suroccidental de Malé, recuerda a las víctimas del tsunami del 26 de diciembre de 2004, que golpeó casi todos los atolones. Una parada breve camino de la terminal de ferris de Villimalé.",
        "come": "A pie por el paseo marítimo sur.",
        "tempo": "15 minutos",
        "costo": "Gratuito.",
        "lat": 4.17156,
        "lng": 73.50109
      },
      {
        "nome": "Villimalé (Villingili)",
        "testo": "Una isla a 2 km al oeste de Malé, hoy quinto distrito de la ciudad. En 1973 se convirtió en el segundo resort de las Maldivas y después en barrio residencial: es más verde y tranquila que la capital, con una playa pública.",
        "come": "Ferri público desde la terminal de Villingili, en el lado oeste de Malé, que funciona las 24 horas.",
        "quando": "Por la mañana o a última hora de la tarde.",
        "tempo": "medio día",
        "lat": 4.17361,
        "lng": 73.48472,
        "consiglio": "Es una isla habitada: en la playa, bañador cubierto."
      },
      {
        "nome": "Ferri Velana-Malé",
        "testo": "La forma más barata y más maldiva de llegar a la capital: una barca que cruza el canal entre la isla del aeropuerto y Malé con trabajadores y viajeros diarios. En diez minutos se pasa de la terminal al paseo marítimo norte, cerca del mercado de pescado.",
        "come": "El muelle está frente a las llegadas del aeropuerto Velana; billete en efectivo.",
        "tempo": "10-15 minutos",
        "costo": "Unos 1 $ en rufiyaa (unos 1 €), 2026.",
        "orari": "Más o menos cada 15 minutos, de las 5 a medianoche.",
        "lat": 4.19167,
        "lng": 73.52889
      },
      {
        "nome": "Banana Reef",
        "testo": "En Malé Norte, es uno de los primeros sitios de buceo abiertos en las Maldivas y hoy es área marina protegida. Tiene forma de plátano: paredes, cuevas y salientes con bancos de peces, tiburones de arrecife y corales blandos.",
        "come": "Con un centro de buceo de Malé, Hulhumalé o de los resorts cercanos.",
        "quando": "Todo el año; de diciembre a abril, mejor visibilidad.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $ con los centros locales, unos 43-70 € (2026)."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mercado de fruta por la mañana, mercado de pescado por la tarde",
          "Mezquita del Viernes fuera de la oración",
          "Ferri al aeropuerto o autobús a Hulhumalé",
          "Cena en el paseo marítimo de Hulhumalé"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: llegada a Velana, autobús a Hulhumalé, playa y cena en el paseo marítimo",
          "Día 2: Malé a pie entre el Museo Nacional, mezquitas y mercados, luego ferri a Villimalé y atardecer en Artificial Beach"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Hulhumalé y el puente Sinamalé al atardecer",
          "Día 2: Malé, del mercado de pescado a la Mezquita del Viernes y el Sultan Park",
          "Día 3: inmersión en Banana Reef o un día en un resort cercano"
        ]
      }
    ],
    zone: [
      {
        "nome": "Hulhumalé",
        "perChi": "primera o última noche",
        "testo": "A 10-15 minutos de Velana, con hoteles y casas de huéspedes de 60 a 150 $ y restaurantes en el paseo marítimo. Moderna y algo anónima.",
        "fascia": "50-130 €"
      },
      {
        "nome": "Malé",
        "perChi": "quien quiera la ciudad",
        "testo": "Capital densísima, ruidosa y sin playa. Útil para medio día, menos para dormir."
      },
      {
        "nome": "Villimalé",
        "perChi": "quien busca calma cerca de la capital",
        "testo": "Isla residencial a 2 km de Malé, con playa pública y ferri las 24 horas. Más verde y silenciosa, pero más lejos del aeropuerto."
      }
    ],
    sapori: [
      {
        "nome": "Short eats",
        "testo": "Gulha, bajiya y kavaabu: snacks fritos de la tarde en las cafeterías locales."
      },
      {
        "nome": "Mas huni",
        "testo": "Atún, coco rallado, cebolla y chile con roshi, una torta plana: el desayuno maldivo."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Curry de atún",
        "testo": "Pescado del día en curry, en cafeterías y casas de huéspedes."
      }
    ],
    attenzioni: [
      "En las islas habitadas (Malé, Hulhumalé) el alcohol ni se vende ni se bebe. Importarlo está prohibido.",
      "Los cigarrillos electrónicos están prohibidos: importación desde el 15 de noviembre de 2024, posesión y uso desde el 15 de diciembre de 2024, también para los turistas. Desde el 1 de noviembre de 2025 quien haya nacido a partir del 1 de enero de 2007 no puede comprar ni fumar tabaco, turistas incluidos.",
      "Rellenar la IMUGA (declaración del viajero) en las 96 horas antes del vuelo, una por persona, niños incluidos. Es gratuita: usar solo el portal oficial imuga.immigration.gov.mv, hay webs falsas de pago.",
      "Está prohibido llevarse corales, conchas y arena, incluso de la playa: se confiscan en el aeropuerto y se arriesga una multa."
    ],
    gite: [
      {
        "nome": "Maafushi",
        "distanza": "unos 45 minutos en lancha rápida",
        "come": "Lancha rápida compartida desde Malé o el aeropuerto, 25-40 $ por trayecto (unos 22-35 €).",
        "testo": "La isla local más desarrollada de Malé Sur, con bikini beach y arrecifes con tortugas. Mejor con una noche, pero también sirve para un día."
      },
      {
        "nome": "Un día en un resort",
        "distanza": "20-60 minutos en lancha rápida",
        "come": "Day pass del resort con traslado, 100-200 $ con almuerzo (unos 85-170 €).",
        "testo": "Para ver un arrecife de la casa y una playa de resort sin dormir allí. A veces incluye alcohol."
      },
      {
        "nome": "Guraidhoo",
        "distanza": "31 km, unos 45 minutos en lancha rápida",
        "come": "Lancha rápida compartida, tres salidas al día; el ferri MTCC tarda unas 2 horas y cuarto.",
        "testo": "Isla local más recogida que Maafushi, con los canales del área marina protegida de Guraidhoo Kandu."
      }
    ],
    faq: [
      {
        "domanda": "¿Merece la pena visitar Malé?",
        "risposta": "Para medio día, sí: el mercado de pescado, la Mezquita del Viernes, el Museo Nacional y el paseo marítimo se ven a pie en pocas horas. Para dormir conviene Hulhumalé."
      },
      {
        "domanda": "¿Dónde dormir la noche antes o después del vuelo?",
        "risposta": "En Hulhumalé, a 10-15 minutos del aeropuerto, con hoteles y guesthouses de 60 a 150 $. Quien aterriza de noche y va a un atolón lejano casi siempre tiene que dormir aquí, porque los hidroaviones solo vuelan de día."
      },
      {
        "domanda": "¿Cómo se va del aeropuerto a Malé?",
        "risposta": "Con el ferri público, 10-15 minutos por unos 1 $, o en autobús o taxi por el puente Sinamalé."
      },
      {
        "domanda": "¿Se puede beber alcohol en Malé y Hulhumalé?",
        "risposta": "No. Son islas habitadas y el alcohol no se vende ni se bebe; también está prohibido importarlo. Solo se encuentra en los resorts y en los barcos safari."
      },
      {
        "domanda": "¿Cómo hay que vestir en Malé?",
        "risposta": "Hombros y rodillas cubiertos en la ciudad y en las mezquitas. En la playa, en Hulhumalé como en Artificial Beach, nada de bikini: camiseta y pantalón corto."
      },
      {
        "domanda": "¿Se puede entrar en la antigua Mezquita del Viernes?",
        "risposta": "Los no musulmanes necesitan un permiso, que se pide al personal de la mezquita o al Ministerio de Asuntos Islámicos. El patio, el cementerio de coral y el minarete se ven igualmente desde fuera."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Malé vista desde arriba, con el puerto lleno de barcas y los edificios de colores de la capital',
    immagine: '/images/maldive/male-dall-alto.jpg',
  },
  {
    slug: 'male-sud-vaavu',
    paeseSlug: 'maldive',
    ordine: 2,
    nome: 'Malé Sur y Vaavu',
    tipologia: ['isole locali', 'snorkeling', 'squali'],
    giorniConsigliati: '3-5 días',
    visitataPersonalmente: true,
    introduzione:
      "Los atolones más cercanos al aeropuerto hacia el sur: Malé Sur con Maafushi, Guraidhoo y Gulhi, y más abajo Vaavu, poco turístico, con Fulidhoo y los canales de los tiburones.",
    percheAndarci:
      "Para quien tiene pocos días o quiere gastar poco en traslados: speedboats breves, muchas guesthouses, tortugas, tiburones nodriza y la inmersión nocturna de Alimatha.",
    cosaVedere: [
      'La bikini beach de Maafushi y los arrecifes cercanos con tortugas',
      'La isla de Fulidhoo, pequeña y tranquila',
      'Los canales de Vaavu (Fotteyo, Miyaru Kandu) con tiburones grises',
    ],
    cosaFare: ['Snorkeling con tiburones nodriza y rayas', 'La inmersión nocturna de Alimatha', 'Una jornada en un resort cercano desde Maafushi'],
    doveDormire: 'Guesthouses en Maafushi (la más desarrollada y concurrida), Guraidhoo, Gulhi, Fulidhoo.',
    doveMangiare: 'Cocina maldiva en las guesthouses y en los cafés de la isla.',
    comeArrivare: "Desde Velana o Malé salen lanchas rápidas compartidas a horas fijas: unos 45 minutos a Maafushi y Guraidhoo, 25-40 $ por trayecto (unos 22-35 €), más a Fulidhoo y Vaavu. Se reservan a través de la guesthouse, que suele organizar la recogida en llegadas. Los ferris públicos MTCC salen de la terminal de Villingili en Malé, cuestan 2-3 $, tardan de hora y media a 3 horas, tienen pocas salidas y no circulan los viernes.",
    comeSpostarsi: 'Excursiones en barca organizadas por las guesthouses.',
    periodoMigliore: 'de diciembre a abril por el mar en calma; de mayo a noviembre speedboats más agitadas.',
    costi: "Lancha rápida 25-40 $ por trayecto (unos 22-35 €), ferri MTCC 2-3 $, inmersión 50-80 $ (unos 43-70 €), 2026. Económico: unos 80-110 € al día con guesthouse sencilla, comidas allí y una excursión. Medio: 150-250 € con guesthouse boutique y excursiones diarias. Alto: más de 300 € con inmersiones diarias y un día en un resort.",
    erroriDaEvitare: ['Esperar un pueblo tranquilo en Maafushi: está muy construida y concurrida', 'Contar con los ferris en viernes'],
    luoghi: [
      {
        "nome": "Maafushi y su bikini beach",
        "lng": 73.49001,
        "lat": 3.94116,
        "testo": "La isla local más desarrollada cerca de Malé, con una bikini beach señalizada, muchas casas de huéspedes y arrecifes cercanos donde se ven tortugas.",
        "come": "Lancha rápida compartida desde Malé en unos 45 minutos. El ferri MTCC vía Gulhi sale normalmente por la tarde, de sábado a jueves, y tarda 1,5-2 horas.",
        "quando": "Todo el año; de diciembre a abril el mar está más calmado.",
        "tempo": "2-3 días",
        "costo": "Lancha rápida compartida 20-40 $ por trayecto; ferri MTCC 2-3 $ (indicativo, 2026)",
        "consiglio": "Está muy construida y llena: no es el pueblo tranquilo que se podría esperar."
      },
      {
        "nome": "Fulidhoo",
        "costo": "Ferri MTCC 2-3 $; lancha rápida a acordar con la guesthouse (2026).",
        "lng": 73.41472,
        "lat": 3.68056,
        "testo": "Una pequeña isla local de Vaavu, tranquila, con calles de arena, unos pocos cientos de habitantes y un puñado de casas de huéspedes. Por la tarde-noche suelen acercarse al muelle tiburones nodriza y rayas en busca de restos de pescado. Es una buena base para los canales de Vaavu y la nocturna de Alimatha.",
        "come": "Lancha rápida desde Malé, o ferri MTCC en unas 3 horas, 2-3 veces por semana y nunca en viernes; las excursiones se reservan en la casa de huéspedes.",
        "tempo": "2-3 días"
      },
      {
        "nome": "Canales de Vaavu y Alimatha",
        "testo": "Los canales de Fotteyo y Miyaru Kandu traen tiburones grises. En Alimatha la inmersión nocturna es conocida por las decenas de tiburones nodriza.",
        "come": "Con los centros de buceo y las excursiones de las casas de huéspedes.",
        "quando": "De diciembre a abril por el mar en calma.",
        "tempo": "un día",
        "consiglio": "Los canales tienen corriente: hace falta experiencia y meses de buceo a la espalda."
      },
      {
        "nome": "Guraidhoo",
        "testo": "Isla local de Malé Sur, a unos 31 km de la capital, con unos 3.000 habitantes. Es más pequeña y menos construida que Maafushi, conocida por el esnórquel con tortugas, los bancos de arena y alguna ola para surfear.",
        "come": "Lancha rápida compartida en unos 45 minutos, tres salidas al día; ferri MTCC en unas 2 horas y cuarto.",
        "quando": "Diciembre-abril por el mar en calma.",
        "tempo": "2-3 días",
        "costo": "Lancha rápida 25-40 $ por trayecto, unos 22-35 € (2026).",
        "lat": 3.9,
        "lng": 73.46833
      },
      {
        "nome": "Gulhi",
        "testo": "Pequeña isla local entre Malé y Maafushi, en la ruta del ferri MTCC. Tiene menos alojamientos y menos gente que su vecina, pero las mismas excursiones a tortugas, bancos de arena y resorts.",
        "come": "Lancha rápida compartida desde Malé, o el ferri MTCC a Maafushi, que hace escala aquí.",
        "tempo": "2-3 días",
        "costo": "Lancha rápida 25-40 $, unos 22-35 €; ferri 2-3 $ (2026).",
        "lat": 3.98889,
        "lng": 73.50889
      },
      {
        "nome": "Guraidhoo Kandu",
        "testo": "Un área marina protegida de Malé Sur con dos canales principales, Lhosfushi Kandu y Guraidhoo Kandu, y varios sitios de buceo. Con la corriente entrante llegan tiburones de arrecife, águilas marinas y grandes bancos de peces.",
        "come": "Con los centros de buceo de Guraidhoo y Maafushi.",
        "quando": "Diciembre-abril, con corriente entrante.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $, unos 43-70 € (2026).",
        "consiglio": "Canal con corriente: hace falta experiencia."
      },
      {
        "nome": "Kandooma Thila",
        "testo": "Un pináculo sumergido de Malé Sur, cerca de Guraidhoo, batido por las corrientes. Es conocido por los tiburones grises, las águilas marinas, los jureles y los corales blandos de sus paredes.",
        "come": "En barco con los centros de buceo de Guraidhoo, Maafushi y los resorts cercanos.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $, unos 43-70 € (2026).",
        "consiglio": "Para buceadores con titulación avanzada."
      },
      {
        "nome": "Fotteyo Kandu",
        "testo": "En el borde oriental de Vaavu, uno de los canales más famosos de las Maldivas: cuevas y salientes cubiertos de corales blandos de colores, tiburones grises y águilas marinas cuando la corriente entra desde el océano.",
        "come": "Con los centros de buceo de Fulidhoo, Keyodhoo y Thinadhoo, o en un crucero de buceo.",
        "quando": "Diciembre-abril.",
        "tempo": "medio día",
        "consiglio": "Corriente fuerte: solo buceadores con experiencia."
      },
      {
        "nome": "Felidhoo",
        "testo": "La capital del atolón de Vaavu, en el lado oriental, cerca de los canales. Es una isla de vida cotidiana, con puerto, escuela y mezquita, todavía poco tocada por el turismo.",
        "come": "Lancha rápida desde Malé o ferri MTCC a Vaavu.",
        "tempo": "medio día",
        "lat": 3.47167,
        "lng": 73.54722
      },
      {
        "nome": "Thinadhoo (Vaavu)",
        "testo": "Pequeña isla local de Vaavu junto a Felidhoo, con pocas guesthouses. Es una base tranquila para bucear en los canales orientales del atolón.",
        "come": "Lancha rápida desde Malé, organizada por la guesthouse.",
        "tempo": "2-3 días",
        "lat": 3.48889,
        "lng": 73.53917
      },
      {
        "nome": "Ferri MTCC a Maafushi",
        "testo": "El ferri público es lento pero cuesta una fracción de la lancha rápida y viaja con los maldivos, entre sacos de arroz y motos. En la ruta a Maafushi hace escala en Gulhi.",
        "come": "Desde la terminal de Villingili en Malé; billete en efectivo el mismo día, 30-45 minutos antes.",
        "tempo": "1 hora y media-2 horas",
        "costo": "2-3 $, unos 2-3 € (2026).",
        "orari": "Normalmente por la tarde, de sábado a jueves; nunca el viernes."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: lancha rápida de Malé a Maafushi, snorkel con tortugas",
          "Día 2: excursión de snorkel o inmersión con tiburones nodriza",
          "Día 3: día en un resort cercano, o Vaavu"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: lancha rápida a Maafushi o Guraidhoo, bikini beach y atardecer",
          "Día 2: esnórquel con tortugas y banco de arena, luego regreso a Malé"
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Días 1-2: Guraidhoo o Maafushi, tortugas y una inmersión en Guraidhoo Kandu",
          "Día 3: traslado a Fulidhoo, tiburones nodriza en el muelle por la tarde",
          "Día 4: Fotteyo Kandu o esnórquel, inmersión nocturna en Alimatha",
          "Día 5: regreso a Malé, nunca en ferri un viernes"
        ]
      }
    ],
    zone: [
      {
        "nome": "Maafushi",
        "perChi": "servicios y oferta",
        "testo": "La más desarrollada, con muchas casas de huéspedes y restaurantes. Llena y construida.",
        "fascia": "50-170 €"
      },
      {
        "nome": "Guraidhoo y Gulhi",
        "perChi": "más tranquila",
        "testo": "Islas más pequeñas y tranquilas en el mismo atolón."
      },
      {
        "nome": "Fulidhoo",
        "perChi": "poco turística",
        "testo": "En Vaavu, tranquila y con pocas instalaciones.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Felidhoo, Thinadhoo y Keyodhoo",
        "perChi": "buceadores en Vaavu",
        "testo": "Islas del lado oriental de Vaavu, cerca de los canales. Pocos alojamientos y nada de ambiente nocturno."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Desayuno de atún, coco y cebolla con roshi, en las casas de huéspedes."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día a la brasa en las casas de huéspedes."
      },
      {
        "nome": "Short eats",
        "testo": "Gulha y bajiya fritos en las cafeterías de la isla, por la tarde."
      }
    ],
    attenzioni: [
      "El viernes es día festivo: tiendas y cafeterías cierran desde media mañana, los ferris largos no circulan y las excursiones pueden reducirse.",
      "Bikini solo en la bikini beach señalizada; en otros sitios hombros y rodillas cubiertos, también para bañarse.",
      "Los ferris MTCC son lentos, con pocas salidas y casi nunca en viernes. El billete solo se compra en la terminal el mismo día, 30-45 minutos antes: lleva rufiyaas o dólares en billetes pequeños y consulta los horarios en mtcc.mv o con la casa de huéspedes.",
      "Las excursiones de las casas de huéspedes tienen precios fijos: compara con otras si es posible.",
      "Desde el 1 de enero de 2025 la green tax es de 6 $ por persona y noche en las casas de huéspedes de hasta 50 habitaciones y de 12 $ en los resorts: pregunta si ya está incluida en el precio."
    ],
    gite: [
      {
        "nome": "Un día en un resort cercano",
        "distanza": "10-30 minutos en barco desde Maafushi",
        "come": "Excursión de la guesthouse, 100-200 $ con almuerzo (unos 85-170 €).",
        "testo": "Arrecife de la casa, playa de postal y a veces alcohol incluido: probar un resort sin dejar la isla local."
      },
      {
        "nome": "Banco de arena con pícnic",
        "distanza": "15-30 minutos en barco",
        "come": "Excursión en barco desde la guesthouse, 40-80 $ (unos 35-70 €).",
        "testo": "Una lengua de arena en medio de la laguna, con esnórquel en el arrecife cercano. Sin sombra: toalla, agua y crema."
      },
      {
        "nome": "Alimatha de noche",
        "distanza": "desde Fulidhoo, en barco",
        "come": "Con los centros de buceo de Vaavu; inmersión 50-80 $ (unos 43-70 €).",
        "testo": "La inmersión nocturna con decenas de tiburones nodriza, de las más famosas de las Maldivas."
      }
    ],
    faq: [
      {
        "domanda": "¿Mejor Maafushi o Fulidhoo?",
        "risposta": "Maafushi por la oferta de guesthouses, restaurantes y excursiones; Fulidhoo por un pueblo pequeño y silencioso. Muchos reparten la estancia entre las dos."
      },
      {
        "domanda": "¿Cuánto cuesta llegar a Maafushi?",
        "risposta": "La lancha rápida compartida cuesta 25-40 $ por trayecto y tarda unos 45 minutos. El ferri MTCC cuesta 2-3 $ pero tarda hora y media-2 horas y no circula el viernes."
      },
      {
        "domanda": "¿Se puede beber alcohol en Maafushi?",
        "risposta": "En la isla no. Algunos barcos-bar fondean fuera de la laguna y las guesthouses organizan días en resorts cercanos, donde el alcohol está permitido."
      },
      {
        "domanda": "¿Dónde se ven los tiburones nodriza?",
        "risposta": "En Alimatha, en Vaavu, en la inmersión nocturna, y a menudo por la tarde en el muelle de Fulidhoo, donde llegan con las rayas por los restos de pescado."
      },
      {
        "domanda": "¿Se puede viajar en viernes?",
        "risposta": "Las lanchas rápidas tienen horarios reducidos, los ferris MTCC de rutas largas no circulan. Tiendas y cafés cierran desde media mañana por la oración."
      },
      {
        "domanda": "¿Se puede bañar en bikini?",
        "risposta": "Solo en la bikini beach señalizada. En el resto, también en el agua, hombros y rodillas cubiertos."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un camino de arena entre las palmeras y las casas bajas de una isla local de las Maldivas',
    immagine: '/images/maldive/male-sud-vaavu.jpg',
  },
  {
    slug: 'rasdhoo',
    paeseSlug: 'maldive',
    ordine: 3,
    nome: 'Rasdhoo y Ari Norte',
    tipologia: ['isole locali', 'immersioni', 'squali martello'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Una semana en Ukulhas no estaba en los planes: la última vez estalló la guerra en Oriente Medio, nos cancelaron los vuelos y, por desgracia, tuvimos que quedarnos una semana más. Ukulhas es bonita y muy auténtica, pero distinta de Dhigurah: menos paraíso tropical y más isla vivida. Aquí buceamos y sacamos los títulos con Reef Rangers Ukulhas, buenísimos.",
    introduzione:
      "Un pequeño atolón en el extremo noreste de Ari, con la isla local de Rasdhoo, y las vecinas Ukulhas y Thoddoo. El lado exterior del atolón cae a pico hacia el azul profundo.",
    percheAndarci:
      "Para los tiburones martillo que suben de las profundidades al amanecer, sobre todo de diciembre a abril, y para una isla local con buenos centros de buceo.",
    cosaVedere: ['El sitio de los tiburones martillo al amanecer (Hammerhead Point)', 'Los arrecifes con mantas y tortugas', 'La playa y los jardines de Ukulhas y Thoddoo'],
    cosaFare: ['Una inmersión al amanecer en aguas abiertas para buceadores expertos', 'Snorkeling en los arrecifes de la laguna'],
    doveDormire: 'Guesthouses en Rasdhoo, Ukulhas y Thoddoo.',
    doveMangiare: 'Cocina maldiva y pescado a la parrilla en las guesthouses.',
    comeArrivare: "Desde Velana salen lanchas rápidas compartidas a Rasdhoo, Ukulhas y Thoddoo, en 1 hora-1 hora y media, por 40-70 $ por persona y trayecto (unos 35-60 €). Suele haber una o dos salidas al día, reservadas a través de la guesthouse, que también organiza la recogida en llegadas. El ferri MTCC tarda unas 3 horas, sale pocas veces por semana y no circula el viernes. Entre islas se va con los barcos de los centros de buceo.",
    comeSpostarsi: 'En barca con los centros de buceo.',
    periodoMigliore: 'de diciembre a abril para los tiburones martillo, con el pico entre enero y marzo.',
    costi: "Inmersión 50-80 $ con los centros locales (unos 43-70 €), lancha rápida 40-70 $ por trayecto (unos 35-60 €), 2026. Económico: unos 80-110 € al día con guesthouse, comidas allí y esnórquel. Medio: 150-250 € con dos inmersiones al día. Alto: más de 300 € con cursos de titulación o un día de resort en Kuramathi.",
    erroriDaEvitare: ['Intentar la inmersión de los tiburones martillo sin experiencia en aguas abiertas y en profundidad'],
    luoghi: [
      {
        "nome": "Hammerhead Point",
        "testo": "El sitio es Madivaru Corner, en el lado exterior del atolón que cae al azul profundo. Al amanecer los tiburones martillo festoneados suben del agua más fría y suelen verse entre 25 y 40 metros, junto con tiburones grises y águilas de mar. Es una inmersión en azul, con corriente, para buceadores experimentados.",
        "come": "Con un centro de buceo de Rasdhoo, en barco al amanecer.",
        "quando": "Al amanecer; posibles todo el año, mejor de diciembre a abril (pico enero-marzo).",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $ en los centros locales (indicativo, 2026)",
        "consiglio": "No la hagas sin experiencia en azul y en profundidad."
      },
      {
        "nome": "Ukulhas con Reef Rangers",
        "lng": 72.86444,
        "lat": 4.21389,
        "testo": "Una isla local de Ari Norte, bonita y muy auténtica, más isla vivida que paraíso tropical. Pasamos allí una semana: fue un imprevisto, porque los vuelos se cancelaron al estallar la guerra en Oriente Medio. Buceamos y sacamos los títulos con Reef Rangers Ukulhas, buenísimos.",
        "come": "Lancha rápida desde Malé, de 1 a 1,5 horas.",
        "tempo": "3-4 días, o más para un título",
        "consiglio": "Para buceo y cursos: Reef Rangers Ukulhas. Deja siempre un día de margen antes del vuelo."
      },
      {
        "nome": "Arrecifes de Rasdhoo, Ukulhas y Thoddoo",
        "testo": "Snorkel en los arrecifes de la laguna, con mantas y tortugas. Las playas y los jardines de Ukulhas y Thoddoo.",
        "come": "Excursiones en barco desde las casas de huéspedes y los centros de buceo.",
        "quando": "Todo el año; de diciembre a abril, mar más tranquilo y agua más clara.",
        "tempo": "un día"
      },
      {
        "nome": "Isla de Rasdhoo",
        "testo": "La isla local principal del pequeño atolón de Rasdhoo, separado de Ari en su extremo noreste. Se recorre a pie en poco tiempo, entre casas bajas, mezquita y puerto, y tiene varios centros de buceo orientados al lado exterior del atolón.",
        "come": "Lancha rápida compartida desde Velana, 1 hora-1 hora y media.",
        "quando": "Diciembre-abril por el mar en calma y los tiburones martillo.",
        "tempo": "3-4 días",
        "costo": "Lancha rápida 40-70 $ por trayecto, unos 35-60 € (2026).",
        "lat": 4.26278,
        "lng": 72.99139
      },
      {
        "nome": "Kuramathi",
        "testo": "Una isla-resort larga y estrecha en el mismo pequeño atolón, muy cerca de Rasdhoo, con playa blanca en el lado de la laguna. Desde Rasdhoo es la opción más sencilla para un día con arrecife de la casa, restaurantes y alcohol.",
        "come": "Day pass organizado por la guesthouse, con barco.",
        "tempo": "un día",
        "costo": "Día de resort 100-200 $ con almuerzo, unos 85-170 € (2026).",
        "lat": 4.25861,
        "lng": 72.98
      },
      {
        "nome": "Thoddoo",
        "testo": "Una isla aislada a unos 20 km de Rasdhoo, con unos 1.900 habitantes en 2022 y una economía agrícola: es el mayor productor de sandías de las Maldivas y cultiva papaya, mango, guindillas y maracuyá. En una zona de la isla hay restos budistas.",
        "come": "Lancha rápida compartida desde Velana o barco desde Rasdhoo.",
        "tempo": "2-3 días",
        "lat": 4.43694,
        "lng": 72.95944
      },
      {
        "nome": "Mathiveri",
        "testo": "Pequeña isla local en el lado occidental de Ari Norte, con pocas guesthouses y arrecifes cercanos. Es más recogida que Ukulhas y cómoda para los sitios de buceo del centro del atolón.",
        "come": "Lancha rápida desde Velana, organizada por la guesthouse.",
        "tempo": "2-3 días",
        "lat": 4.19028,
        "lng": 72.74722
      },
      {
        "nome": "Maaya Thila",
        "testo": "Un pequeño thila redondo en Ari Norte, área marina protegida y uno de los sitios más famosos de las Maldivas. Tiburones de punta blanca, tortugas, morenas y peces piedra; de noche los depredadores cazan a su alrededor.",
        "come": "En barco con los centros de buceo de Ukulhas, Mathiveri y Rasdhoo.",
        "quando": "Todo el año; famosa también como nocturna.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $, unos 43-70 € (2026)."
      },
      {
        "nome": "Fish Head (Mushimasmingili Thila)",
        "testo": "Un thila protegido en Ari Norte, conocido por los tiburones grises que patrullan su borde y por los grandes bancos de fusileros y jureles. Las paredes tienen salientes y pequeñas cuevas.",
        "come": "Con los centros de buceo del atolón.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $, unos 43-70 € (2026).",
        "consiglio": "A menudo con corriente: mejor con titulación avanzada."
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: lancha rápida de Malé a Rasdhoo, snorkel en el arrecife",
          "Día 2: inmersión al amanecer en Hammerhead Point (expertos) o snorkel con mantas",
          "Día 3: Ukulhas y Thoddoo"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: lancha rápida de Velana a Rasdhoo, vuelta a la isla y esnórquel en el arrecife",
          "Día 2: amanecer en Hammerhead Point (expertos) o un día en Kuramathi"
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Días 1-2: Rasdhoo, tiburones martillo al amanecer y arrecife de la laguna",
          "Días 3-4: Ukulhas, inmersiones en Maaya Thila y Fish Head",
          "Día 5: Thoddoo y sus plantaciones, luego regreso a Malé"
        ]
      }
    ],
    zone: [
      {
        "nome": "Rasdhoo",
        "perChi": "buceadores",
        "testo": "Isla local con buenos centros de buceo y casas de huéspedes. Cómoda para el amanecer con los tiburones martillo.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Ukulhas",
        "perChi": "quien busque una isla vivida",
        "testo": "Auténtica, con buceo y cursos. Menos paraíso tropical que Dhigurah.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Thoddoo",
        "perChi": "verde y tranquila",
        "testo": "Isla agrícola con jardines y menos turistas.",
        "fascia": "50-85 €"
      },
      {
        "nome": "Mathiveri",
        "perChi": "buceadores que buscan calma",
        "testo": "Isla pequeña en el lado oeste de Ari Norte, cerca de los thilas del centro del atolón. Pocos alojamientos."
      }
    ],
    sapori: [
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día en las casas de huéspedes, con arroz y guarniciones."
      },
      {
        "nome": "Mas huni",
        "testo": "Atún, coco y cebolla con roshi en el desayuno."
      },
      {
        "nome": "Curry de atún",
        "testo": "Curry de atún con arroz, en las casas de huéspedes a la cena."
      },
      {
        "nome": "Fruta de Thoddoo",
        "testo": "Sandía, papaya y otra fruta cultivada en la isla."
      }
    ],
    attenzioni: [
      "Imprevistos con los vuelos: deja un día de margen, porque las cancelaciones y retrasos pueden dejarte atascado en la isla.",
      "Hammerhead Point sin experiencia en azul y en profundidad es peligroso.",
      "Última inmersión al menos 24 horas antes del vuelo, hidroavión incluido, y seguro con cobertura de buceo.",
      "El viernes muchas tiendas cierran y las excursiones pueden reducirse."
    ],
    gite: [
      {
        "nome": "Kuramathi",
        "distanza": "pocos minutos en barco desde Rasdhoo",
        "come": "Day pass a través de la guesthouse, 100-200 $ con almuerzo (unos 85-170 €).",
        "testo": "Un día de resort con arrecife de la casa y playa en la laguna, al lado de la isla local."
      },
      {
        "nome": "Ukulhas",
        "distanza": "unos 15 km desde Rasdhoo",
        "come": "Barco de los centros de buceo o lancha rápida compartida.",
        "testo": "Una isla local con playa larga y un conocido compromiso con la gestión de residuos, buena para bucear y sacarse títulos."
      },
      {
        "nome": "Thoddoo",
        "distanza": "unos 20 km desde Rasdhoo",
        "come": "Barco privado o excursión organizada por la guesthouse.",
        "testo": "Campos de sandías y papayas, playa y un ritmo agrícola que no hay en otras islas."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuándo se ven tiburones martillo en Rasdhoo?",
        "risposta": "Al amanecer, en el lado exterior del atolón, posibles todo el año pero más frecuentes de diciembre a abril, con el pico entre enero y marzo."
      },
      {
        "domanda": "¿Hace falta experiencia para Hammerhead Point?",
        "risposta": "Sí: es una inmersión en azul, con corriente, normalmente entre 25 y 40 metros. Hace falta titulación avanzada y soltura buceando sin referencias."
      },
      {
        "domanda": "¿Mejor Rasdhoo o Ukulhas?",
        "risposta": "Rasdhoo por los tiburones martillo al amanecer; Ukulhas por una isla más vivida, su playa y los sitios del centro de Ari Norte como Maaya Thila."
      },
      {
        "domanda": "¿Cuánto cuesta una inmersión?",
        "risposta": "Con los centros de las islas locales 50-80 $ (unos 43-70 €), con o sin equipo según el centro. Los paquetes de varias inmersiones salen más baratos."
      },
      {
        "domanda": "¿Se puede sacar un título de buceo?",
        "risposta": "Sí, los centros de Rasdhoo y Ukulhas dan cursos básicos y avanzados. Conviene reservar unos días más y uno de margen antes del vuelo."
      },
      {
        "domanda": "¿Cuánto esperar entre la última inmersión y el vuelo?",
        "risposta": "Al menos 24 horas, también para el hidroavión."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'La playa blanca del lado de la laguna de Kuramathi, en el atolón de Rasdhoo',
    immagine: '/images/maldive/rasdhoo.jpg',
  },
  {
    slug: 'ari-sud',
    paeseSlug: 'maldive',
    ordine: 4,
    nome: 'Ari Sur (Dhigurah y Dhangethi)',
    tipologia: ['isole locali', 'snorkeling', 'squali balena', 'mante'],
    giorniConsigliati: '4-5 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Dhigurah es increíble, probablemente la isla más completa de todas las Maldivas, aunque algo de gente sigue habiendo. Una cosa no me gustó: para las excursiones no tienes libertad de elección, solo puedes confiar en tu homestay o tu hotel, y los precios son «de cártel».",
    introduzione:
      "La parte meridional del atolón de Ari, con el área marina protegida entre Maamigili y Dhigurah donde los tiburones ballena jóvenes se alimentan a lo largo del arrecife exterior todo el año.",
    percheAndarci:
      "Es el lugar más sencillo de las Maldivas para nadar con el tiburón ballena, con islas locales de playas largas y mantas en las estaciones de limpieza.",
    cosaVedere: [
      'El tiburón ballena a lo largo del arrecife exterior',
      'Las mantas en las estaciones de limpieza, como alrededor de Rangali',
      'La larga bikini beach de Dhigurah',
      'Los bancos de arena de la laguna',
    ],
    cosaFare: ['Snorkeling con el tiburón ballena', 'Snorkeling o inmersión con las mantas', 'Pesca al atardecer en dhoni'],
    doveDormire: 'Guesthouses en Dhigurah y Dhangethi; resorts en islas cercanas.',
    doveMangiare: 'Cocina maldiva en las guesthouses, pescado del día.',
    comeArrivare: "Desde Velana la lancha rápida compartida a Dhigurah y Dhangethi tarda de hora y media a 2 horas en mar abierto y cuesta unos 50-70 $ por persona y trayecto (unos 43-60 €), con dos salidas al día (hacia las 10:45-11 y las 16) y horarios distintos el viernes. Se reserva a través de la guesthouse. Otra opción es el vuelo interno a Maamigili y luego un barco. Quien aterriza de noche duerme en Hulhumalé y sale a la mañana siguiente.",
    comeSpostarsi: 'Excursiones en barca desde las guesthouses y los centros de buceo.',
    periodoMigliore: 'todo el año para los tiburones ballena, con más avistamientos entre agosto y noviembre según Visit Maldives y mar más tranquilo de diciembre a abril; mantas en el lado occidental en la estación seca.',
    costi: "Tiburón ballena 60-120 $ por persona (unos 52-105 €); mantas y banco de arena 70-130 $ (unos 60-110 €); lancha rápida 50-70 $ por trayecto; inmersión 50-80 $ (2026). Económico: unos 80-120 € al día con guesthouse y una excursión. Medio: 150-250 € con guesthouse boutique y excursiones diarias. Alto: desde 400 € en un resort cercano.",
    erroriDaEvitare: [
      'Acercarse a menos de 3 metros del tiburón ballena, tocarlo o usar el flash',
      'Elegir operadores que no respetan los límites de barcas y nadadores',
    ],
    luoghi: [
      {
        "nome": "Tiburón ballena en el arrecife exterior",
        "testo": "La South Ari Marine Protected Area (SAMPA), entre Maamigili y Dhigurah, es uno de los pocos lugares del mundo donde los tiburones ballena, casi todos machos jóvenes, se ven todo el año. Nadan a lo largo del arrecife exterior, a menudo cerca de la superficie: basta con máscara y aletas. Es el lugar más fácil de las Maldivas para encontrarlos, y las barcas se coordinan por radio para localizarlos.",
        "come": "Excursión en barco desde las casas de huéspedes y centros de buceo de Dhigurah y Dhangethi.",
        "quando": "Todo el año; según Visit Maldives los avistamientos son más numerosos entre agosto y noviembre, y de diciembre a abril el mar está más tranquilo.",
        "tempo": "medio día",
        "costo": "60-120 $ por persona, unos 52-105 € (2026)",
        "consiglio": "Mantén al menos 3 metros de distancia del cuerpo y 4 de la cola, no lo toques, no nades delante de él y no uses flash. Elige operadores que respeten los límites de barcos y nadadores."
      },
      {
        "nome": "Mantas en las estaciones de limpieza",
        "testo": "Las mantas frecuentan las estaciones de limpieza alrededor de Rangali, en el lado occidental del atolón. Se ven haciendo snorkel o buceando.",
        "come": "En barco con las casas de huéspedes o los centros de buceo.",
        "quando": "Estación seca, a partir de diciembre.",
        "tempo": "medio día",
        "costo": "Mantas y banco de arena 70-130 $, unos 60-110 € (2026)"
      },
      {
        "nome": "Bikini beach de Dhigurah",
        "lng": 72.92389,
        "lat": 3.52639,
        "testo": "Dhigurah es increíble, probablemente la isla más completa de todas las Maldivas. Una playa larga, aunque algo de gente hay igualmente.",
        "come": "Lancha rápida desde Malé en unas 2 horas, normalmente dos salidas al día, o vuelo interno a Maamigili y barco.",
        "tempo": "medio día",
        "costo": "Lancha rápida compartida 50-70 $ por trayecto, unos 43-60 € (2026)",
        "consiglio": "En las excursiones no tienes autonomía de elección: dependes de tu homestay o de tu hotel, y los precios son «de cartel»."
      },
      {
        "nome": "Bancos de arena de la laguna",
        "testo": "Bancos de arena que emergen en la laguna, con picnics y snorkel.",
        "come": "Excursión en barco desde las casas de huéspedes.",
        "tempo": "medio día",
        "costo": "Banco de arena con pícnic 40-80 $, unos 35-70 € (2026)"
      },
      {
        "nome": "Dhangethi",
        "testo": "Isla local más pequeña y recogida que Dhigurah, al norte en la misma barrera. Tiene guesthouses, centros de buceo y acceso fácil a sitios del atolón como Broken Rock y Kuda Rah Thila.",
        "come": "Lancha rápida compartida desde Velana, hora y media-2 horas.",
        "tempo": "2-3 días",
        "costo": "Lancha rápida 50-70 $ por trayecto, unos 43-60 € (2026).",
        "lat": 3.60746,
        "lng": 72.95561
      },
      {
        "nome": "Maamigili",
        "testo": "La isla con el aeropuerto interno de Ari Sur, en el borde occidental del área marina protegida de los tiburones ballena. Es sobre todo un punto de paso: se aterriza y se sigue en barco a Dhigurah, Dhangethi o los resorts.",
        "come": "Vuelo interno desde Malé, luego barco.",
        "tempo": "de paso",
        "lat": 3.47522,
        "lng": 72.83507
      },
      {
        "nome": "Kuda Rah Thila",
        "testo": "Un thila protegido de Ari Sur, conocido por sus paredes cubiertas de corales blandos y pequeñas cuevas, con bancos de peces, tortugas y a veces tiburones grises. La cima es profunda: es una inmersión para buceadores titulados.",
        "come": "Con los centros de buceo de Dhangethi y Dhigurah.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $, unos 43-70 € (2026)."
      },
      {
        "nome": "Broken Rock",
        "testo": "Un pináculo de Ari Sur partido por un cañón que se atraviesa nadando, entre corales blandos, gorgonias y peces de arrecife. Uno de los sitios más fotografiados del atolón.",
        "come": "Con los centros de buceo de Dhangethi y Dhigurah.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $, unos 43-70 € (2026).",
        "consiglio": "En el cañón hay que mantenerse lejos del coral: hace falta buena flotabilidad y aleteo."
      },
      {
        "nome": "Mahibadhoo",
        "testo": "La capital de Ari Sur, una isla de 2,4 por 1,2 km con unos 2.500 habitantes que viven de la pesca, el turismo y los servicios públicos. Más vida de pueblo que playa: puerto, mezquitas y cafés locales.",
        "come": "Barco desde Dhangethi o Dhigurah, o lancha rápida desde Velana.",
        "tempo": "medio día",
        "lat": 3.75752,
        "lng": 72.96861
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: lancha rápida de Malé a Dhigurah, playa y atardecer",
          "Día 2: tiburón ballena por la mañana, banco de arena por la tarde"
        ]
      },
      {
        "titolo": "4 días",
        "tappe": [
          "Día 1: llegada a Dhigurah",
          "Día 2: tiburón ballena",
          "Día 3: mantas haciendo snorkel o buceando",
          "Día 4: banco de arena y pesca al atardecer, y regreso"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: lancha rápida de Velana a Dhigurah, bikini beach y atardecer en el lado oeste",
          "Día 2: tiburón ballena en la barrera exterior, tarde de playa",
          "Día 3: mantas y banco de arena, o inmersión en Broken Rock"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dhigurah",
        "perChi": "playa larga",
        "testo": "Isla larga y estrecha con playa, casas de huéspedes y homestays. Hay algo de gente, pero sigue siendo la más completa.",
        "fascia": "50-170 €"
      },
      {
        "nome": "Dhangethi",
        "perChi": "alternativa más pequeña",
        "testo": "Isla local con casas de huéspedes y centros de buceo, más recogida."
      },
      {
        "nome": "Resorts cercanos",
        "perChi": "quien quiera alcohol y comodidad",
        "testo": "En islas cercanas, con traslado en lancha rápida. Todo es más caro, pero se puede beber alcohol.",
        "fascia": "260-520 €"
      },
      {
        "nome": "Maamigili",
        "perChi": "quien llega en vuelo interno",
        "testo": "Isla con aeropuerto, cómoda para los vuelos pero menos bonita para alojarse. Útil para una noche de paso."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Desayuno de atún, coco y cebolla con roshi."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día, en las casas de huéspedes a la cena."
      },
      {
        "nome": "Short eats",
        "testo": "Gulha, bajiya y kavaabu por la tarde."
      }
    ],
    attenzioni: [
      "Tiburón ballena: no acercarse a menos de 3 metros, no tocarlo y nada de flash.",
      "No elijas operadores que no respeten los límites de barcos y nadadores.",
      "Los precios de las excursiones son «de cartel» y solo se puede contar con el propio alojamiento: pregunta qué incluye.",
      "Última inmersión al menos 24 horas antes del vuelo, hidroavión incluido."
    ],
    gite: [
      {
        "nome": "Dhangethi",
        "distanza": "unos 10 km desde Dhigurah",
        "come": "Barco privado o con el centro de buceo.",
        "testo": "Otra isla local del atolón, más recogida, y la puerta a Broken Rock y Kuda Rah Thila."
      },
      {
        "nome": "Un día en un resort cercano",
        "distanza": "15-40 minutos en barco",
        "come": "Day pass a través de la guesthouse, 100-200 $ con almuerzo (unos 85-170 €).",
        "testo": "Arrecife de la casa, playa sin normas de vestimenta y a veces alcohol incluido."
      },
      {
        "nome": "Mahibadhoo",
        "distanza": "unos 26 km desde Dhigurah",
        "come": "Barco organizado por la guesthouse.",
        "testo": "La capital del atolón, para ver la vida diaria de una isla maldiva más grande."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuándo se ve el tiburón ballena en Ari Sur?",
        "risposta": "Todo el año. Según Visit Maldives los avistamientos son más frecuentes de agosto a noviembre; de diciembre a abril el mar está más tranquilo y la visibilidad es mejor."
      },
      {
        "domanda": "¿El avistamiento está garantizado?",
        "risposta": "No. Las probabilidades son altas, pero dependen del mar y la corriente: conviene fijar la salida al principio de la estancia para tener un segundo intento."
      },
      {
        "domanda": "¿Hace falta saber bucear?",
        "risposta": "No: el tiburón ballena nada a menudo cerca de la superficie y bastan máscara y aletas. El buceo es para thilas como Broken Rock y Kuda Rah Thila."
      },
      {
        "domanda": "¿Mejor Dhigurah o Dhangethi?",
        "risposta": "Dhigurah por la playa larga y la bikini beach; Dhangethi por una isla más pequeña cerca de los sitios de buceo."
      },
      {
        "domanda": "¿Qué normas hay con el tiburón ballena?",
        "risposta": "Al menos 3 metros del cuerpo y 4 de la cola, sin tocarlo, sin flash y nunca delante de la boca. Mejor operadores que respeten los límites de barcos y nadadores."
      },
      {
        "domanda": "¿Cuánto cuestan las excursiones?",
        "risposta": "Tiburón ballena 60-120 $ por persona, mantas y banco de arena 70-130 $, banco de arena con pícnic 40-80 $. Se reservan con el propio alojamiento: preguntar qué incluye."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un tiburón ballena nadando justo bajo la superficie, el encuentro por el que se va a Ari Sur',
    immagine: '/images/maldive/squalo-balena.jpg',
  },
  {
    slug: 'baa-hanifaru',
    paeseSlug: 'maldive',
    ordine: 5,
    nome: 'Baa y la bahía de Hanifaru',
    tipologia: ['riserva UNESCO', 'mante', 'snorkeling'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    introduzione:
      "Un atolón reserva de la biosfera de la UNESCO, con la pequeña bahía de Hanifaru donde entre junio y noviembre se reúnen decenas, a veces más de cien, mantas para alimentarse de plancton.",
    percheAndarci:
      "Para una de las mayores agregaciones de mantas del mundo, que se observa haciendo snorkeling, con el pico entre agosto y octubre.",
    cosaVedere: ['Las mantas y los tiburones ballena ocasionales en Hanifaru', 'Los arrecifes y los thila del atolón'],
    cosaFare: ['Snorkeling en Hanifaru con guía autorizado', 'Inmersiones en los sitios del atolón fuera de la bahía'],
    doveDormire: 'Guesthouses en Dharavandhoo y Thulhaadhoo; resorts en las islas del atolón.',
    doveMangiare: 'Cocina maldiva en las guesthouses; restaurantes de los resorts.',
    comeArrivare: "A los resorts de Baa se llega en hidroavión desde Malé, unos 35-45 minutos de vuelo, solo de día y con límites de equipaje estrictos (a menudo 20-25 kg en total); cuesta unos 500-1.200 $ por persona ida y vuelta (unos 430-1.030 €), a veces incluido en el precio. Para las islas locales se toma un vuelo interno de Maldivian o Manta Air hasta el aeropuerto de Dharavandhoo, abierto en 2012, y luego un barco. Quien aterriza de noche duerme en Hulhumalé.",
    comeSpostarsi: 'En barca.',
    periodoMigliore: 'de junio a noviembre, pico de agosto a octubre en las semanas alrededor de luna nueva y luna llena.',
    costi: "Entrada a la bahía unos 20 $ por persona al día (unos 17 €), normalmente incluida en la excursión (60-80 $ desde las islas locales, unos 52-70 €); hidroavión 500-1.200 $ ida y vuelta (2026). Económico: unos 90-130 € al día con guesthouse en Dharavandhoo, comidas y una salida. Medio: 150-250 € con mejor guesthouse e inmersiones. Alto: desde 400 € en un resort con hidroavión.",
    erroriDaEvitare: [
      'Esperar sumergirse con botellas: en Hanifaru solo se permite el snorkeling',
      'Reservar a última hora en agosto-octubre: las entradas están limitadas',
    ],
    luoghi: [
      {
        "nome": "Bahía de Hanifaru",
        "testo": "Una pequeña bahía en forma de embudo en la reserva de la biosfera de la UNESCO de Baa (desde 2011). Con el monzón del suroeste las corrientes atrapan allí el plancton y llegan decenas, a veces más de cien, mantas que comen en círculo, a veces con algún tiburón ballena. Solo se observa haciendo snorkel, en turnos de unos 45 minutos controlados por los guardas.",
        "come": "En barco desde Dharavandhoo o Thulhaadhoo con guía autorizado. El buceo con botellas está prohibido.",
        "quando": "De junio a noviembre, con pico entre agosto y octubre en las semanas de luna nueva y luna llena.",
        "tempo": "medio día",
        "costo": "Entrada 20 $ por persona y día para el fondo de conservación del atolón, normalmente ya incluida en la excursión (indicativo, 2026)",
        "consiglio": "Reserva con antelación en agosto-octubre: las entradas son limitadas. Prohibidos el flash y el contacto con los animales."
      },
      {
        "nome": "Arrecifes y thilas del atolón",
        "costo": "Inmersión 50-80 $ con los centros de las islas locales, unos 43-70 €; en los resorts 100-150 $ (2026).",
        "testo": "Fuera de la bahía, inmersiones en los sitios del atolón, entre pináculos sumergidos (thila) y arrecifes. Aquí se permite bucear con botella y las estaciones de limpieza atraen mantas incluso cuando la bahía está vacía. Es la manera de ver Baa bajo el agua sin los turnos ni las reglas de Hanifaru.",
        "come": "Con los centros de buceo de las islas locales o de los resorts.",
        "tempo": "un día"
      },
      {
        "nome": "Dharavandhoo",
        "testo": "La isla local más cercana a la bahía de Hanifaru, con el aeropuerto interno abierto en 2012, un puerto y varias guesthouses. Las aguas de alrededor, con Dharavandhoo Thila y Hanifaru, están protegidas por ley.",
        "come": "Vuelo interno desde Malé hasta el aeropuerto de la isla.",
        "quando": "Junio-noviembre por las mantas, con el pico en agosto-octubre.",
        "tempo": "3-4 días",
        "lat": 5.15833,
        "lng": 73.13056
      },
      {
        "nome": "Dharavandhoo Thila",
        "testo": "El thila junto a Dharavandhoo, en el área protegida junto con Hanifaru. Es una estación de limpieza frecuentada por mantas y a veces por tiburones ballena, y se puede bucear con botella.",
        "come": "Con los centros de buceo de Dharavandhoo.",
        "quando": "Temporada del monzón del suroeste, de junio a noviembre.",
        "tempo": "medio día",
        "costo": "Inmersión 50-80 $, unos 43-70 € (2026)."
      },
      {
        "nome": "Thulhaadhoo",
        "testo": "La segunda isla más poblada de Baa, famosa por la laca: antes suministraba objetos lacados a las familias nobles, hoy sobre todo a los visitantes. En los talleres se ven cajas y jarrones torneados y pintados a mano.",
        "come": "Barco desde Dharavandhoo o desde los resorts del atolón.",
        "tempo": "medio día o 2-3 días",
        "lat": 5.02306,
        "lng": 72.83972,
        "consiglio": "Los objetos de laca son el recuerdo más auténtico del atolón."
      },
      {
        "nome": "Eydhafushi",
        "testo": "La capital del atolón de Baa, una isla de vida cotidiana más que de turismo, con puerto, tiendas y cafés locales. Útil como escala entre islas y para ver una isla maldiva que trabaja.",
        "come": "Barco desde Dharavandhoo.",
        "tempo": "medio día",
        "lat": 5.10378,
        "lng": 73.07037
      },
      {
        "nome": "Goidhoo",
        "testo": "La isla principal del pequeño atolón de Goidhoo (Horsburgh en las cartas inglesas), ovalado y de unos 16 km de largo, separado de Baa por un canal de casi 10 km. La laguna interior, profunda y sin cabezas de coral, es rara en las Maldivas. En 2022 la isla tenía 583 habitantes.",
        "come": "Lancha rápida desde Malé o barco desde Dharavandhoo, a organizar con la guesthouse.",
        "tempo": "2-3 días",
        "lat": 4.87461,
        "lng": 72.99763
      },
      {
        "nome": "Fulhadhoo",
        "testo": "Una de las islas habitadas más pequeñas de las Maldivas, 0,3 km² y 341 habitantes en 2022, en el atolón de Goidhoo. Playas blancas casi desiertas y pocos alojamientos: la opción para quien busca aislamiento.",
        "come": "Lancha rápida desde Malé o barco desde Goidhoo, a organizar con la guesthouse.",
        "tempo": "2-3 días",
        "lat": 4.88528,
        "lng": 72.93333
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: hidroavión o vuelo interno a Dharavandhoo y luego barco a la casa de huéspedes",
          "Día 2: Hanifaru haciendo snorkel con guía autorizado",
          "Día 3: snorkel o inmersiones fuera de la bahía"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: vuelo interno a Dharavandhoo, tarde de playa",
          "Día 2: Hanifaru en esnórquel por la mañana, regreso en el vuelo de la tarde"
        ]
      },
      {
        "titolo": "5 días",
        "tappe": [
          "Días 1-3: Dharavandhoo, Hanifaru y Dharavandhoo Thila",
          "Día 4: Thulhaadhoo y los talleres de laca",
          "Día 5: regreso a Malé, o continuar hacia el atolón de Goidhoo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Dharavandhoo",
        "perChi": "cerca de la bahía",
        "testo": "Isla local con aeropuerto y casas de huéspedes, la base más cercana a Hanifaru."
      },
      {
        "nome": "Thulhaadhoo",
        "perChi": "isla tranquila",
        "testo": "Isla local con casas de huéspedes, menos turística."
      },
      {
        "nome": "Resorts de Baa",
        "perChi": "quien quiera comodidad",
        "testo": "En las islas del atolón, con hidroavión desde Malé. Caro pero cómodo para las mantas."
      },
      {
        "nome": "Atolón de Goidhoo",
        "perChi": "quien busca aislamiento",
        "testo": "Goidhoo, Fulhadhoo y Fehendhoo, islas pequeñas y poco habitadas en un atolón aparte. Lejos de Hanifaru: para las mantas hace falta una salida larga en barco."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Atún, coco y cebolla con roshi."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Pescado a la parrilla",
        "testo": "Pescado del día, en las casas de huéspedes."
      },
      {
        "nome": "Buffets de los resorts",
        "testo": "Cocina internacional y de pescado, cara a la carta: la pensión completa suele convenir."
      }
    ],
    attenzioni: [
      "En Hanifaru solo se permite el snorkel: nada de botellas.",
      "En agosto-octubre las entradas son limitadas: no reserves a última hora.",
      "Las mantas no están garantizadas: dependen de la marea, la luna y el plancton.",
      "El hidroavión vuela solo de día y tiene límites de equipaje: comprueba antes."
    ],
    gite: [
      {
        "nome": "Thulhaadhoo",
        "distanza": "unos 35 km desde Dharavandhoo",
        "come": "Barco organizado por la guesthouse.",
        "testo": "Los talleres de laca, la artesanía más conocida del atolón, y una isla local grande y vivida."
      },
      {
        "nome": "Eydhafushi",
        "distanza": "unos 9 km desde Dharavandhoo",
        "come": "Barco desde Dharavandhoo.",
        "testo": "La capital del atolón, para medio día entre puerto, tiendas y cafés."
      },
      {
        "nome": "Atolón de Goidhoo",
        "distanza": "unos 37 km desde Dharavandhoo",
        "come": "Barco privado, a acordar con la guesthouse.",
        "testo": "Islas pequeñas con playas casi desiertas y una laguna profunda sin cabezas de coral."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuándo ir a Hanifaru?",
        "risposta": "De junio a noviembre, con el pico entre agosto y octubre en las semanas alrededor de luna nueva y luna llena, cuando las corrientes concentran el plancton."
      },
      {
        "domanda": "¿Se puede bucear en Hanifaru?",
        "risposta": "No, en la bahía solo se permite el esnórquel, en turnos de unos 45 minutos controlados por los guardas. Las botellas se usan en sitios fuera de la bahía, como Dharavandhoo Thila."
      },
      {
        "domanda": "¿Cuánto cuesta ver las mantas en Hanifaru?",
        "risposta": "La entrada cuesta unos 20 $ por persona al día para el fondo de conservación del atolón, normalmente incluida en la excursión, que desde las islas locales cuesta 60-80 $."
      },
      {
        "domanda": "¿Las mantas están garantizadas?",
        "risposta": "No: dependen de la marea, la luna y el plancton. Con tres o cuatro días disponibles las probabilidades suben mucho."
      },
      {
        "domanda": "¿Isla local o resort en Baa?",
        "risposta": "Dharavandhoo es la base más cercana a la bahía y la más barata, con vuelo interno. Los resorts son más cómodos y tienen alcohol, pero con hidroavión y precios mucho más altos."
      },
      {
        "domanda": "¿Hay que reservar con antelación?",
        "risposta": "Sí, entre agosto y octubre: las entradas a la bahía están limitadas y los vuelos internos a Dharavandhoo se llenan."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un grupo de mantas vistas desde arriba mientras nadan en el agua turquesa',
    immagine: '/images/maldive/mante.jpg',
  },
  {
    slug: 'fuvahmulah',
    paeseSlug: 'maldive',
    ordine: 6,
    nome: 'Fuvahmulah',
    tipologia: ['immersioni', 'squali tigre', 'isola locale'],
    giorniConsigliati: '3-4 días',
    visitataPersonalmente: true,
    miaEsperienza:
      "Para bucear recomiendo fuvahmulahdive.com. No es un sitio para principiantes: hace falta experiencia y a menudo se está en el azul. Pero si te gustan los grandes pelágicos es increíble, sobre todo por el tiburón tigre.",
    introduzione:
      "Un atolón formado por una sola isla en el sur de las Maldivas, casi sobre el ecuador, sin laguna, con el océano profundo a pocos metros de la orilla, lagos de agua dulce y una vegetación densa.",
    percheAndarci:
      "Para los tiburones tigre, presentes todo el año, junto con tiburones zorro, martillo y peces luna en algunas temporadas: una de las inmersiones con tiburones más conocidas del mundo.",
    cosaVedere: ['Los tiburones tigre en el Tiger Zoo', 'Los lagos interiores y la playa de Thoondu, con arena de guijarros blancos'],
    cosaFare: ['Inmersiones con los tiburones tigre para buceadores certificados', 'Una vuelta en bici por la isla'],
    doveDormire: 'Guesthouses y pequeños hoteles ligados a los centros de buceo.',
    doveMangiare: 'Cocina maldiva en las guesthouses.',
    comeArrivare: "Fuvahmulah está a unos 494 km al sur de Malé y solo se llega con el vuelo interno, Maldivian o Manta Air, en 1 hora y 20-25 minutos. La pista, en el lado sureste de la isla, funciona desde el 11 de noviembre de 2011, con vuelos diarios a Malé. El puerto está en la punta sureste, cerca del aeropuerto, y de allí salen los barcos de buceo. Quien llega tarde a Velana duerme en Hulhumalé.",
    comeSpostarsi: 'Bici, moto, taxi.',
    periodoMigliore: 'todo el año; el mar puede estar agitado de mayo a noviembre.',
    costi: "Inmersión 50-150 $ según el centro y el número de salidas (unos 43-130 €), 2026. Económico: unos 100-140 € al día con guesthouse y dos inmersiones. Medio: 160-250 € con paquete de buceo completo y moto. Alto: más de 300 € con los mejores alojamientos e inmersiones diarias.",
    erroriDaEvitare: ['Ir sin experiencia: las corrientes y las condiciones oceánicas requieren titulación avanzada y un buen número de inmersiones'],
    luoghi: [
      {
        "nome": "Tiger Zoo, los tiburones tigre",
        "costo": "Inmersión 50-150 $, unos 43-130 € (2026).",
        "testo": "El sitio de inmersión de los tiburones tigre, presentes todo el año, junto con tiburones zorro, martillo y mola mola en algunas temporadas. No es un lugar para principiantes: hace falta experiencia y a menudo se está en el azul, pero si te gustan los grandes pelágicos es increíble.",
        "come": "Con un centro de buceo de la isla. Recomiendo fuvahmulahdive.com.",
        "quando": "Todo el año; el mar puede estar agitado de mayo a noviembre.",
        "tempo": "un día",
        "consiglio": "Hace falta un título avanzado y un buen número de inmersiones: las corrientes y las condiciones oceánicas no perdonan."
      },
      {
        "nome": "Lagos interiores y playa de Thoondu",
        "testo": "La isla tiene dos lagos de agua dulce, algo raro en las Maldivas: Bandaara Kilhi, el más grande, con las marismas y el barro de Koda Kilhi, y Dhadimagi Kilhi, con el Fuvahmulah Nature Park, una pasarela de madera y garzas. Al norte, la playa de Thoondu está hecha de pequeños guijarros blancos y lisos en lugar de arena, y es zona protegida.",
        "come": "En bici, scooter o taxi por la isla.",
        "tempo": "medio día"
      },
      {
        "nome": "Vuelta en bici a la isla",
        "testo": "El atolón es una sola isla, sin laguna, con el océano profundo a pocos metros de la orilla. Una vuelta en bici permite verla entera.",
        "come": "Bici de alquiler en el pueblo.",
        "tempo": "medio día"
      },
      {
        "nome": "Playa de Thoondu",
        "testo": "La playa ancha y blanca en la punta norte de la isla, en el distrito de Dhadimagu. En lugar de arena hay pequeños guijarros lisos y brillantes que en las Maldivas solo se encuentran aquí. Algunos años se forma una laguna natural, Bissaaveli, donde se bañan los vecinos.",
        "come": "En bici, moto o taxi desde el pueblo.",
        "quando": "Al atardecer.",
        "tempo": "1-2 horas",
        "costo": "Gratuita.",
        "lat": -0.27723,
        "lng": 73.41761,
        "consiglio": "Es área protegida: los guijarros no se llevan."
      },
      {
        "nome": "Bandaara Kilhi",
        "testo": "El mayor de los dos lagos de agua dulce de la isla, llamado también «lago del Estado», entre los distritos de Maalegan y Miskiymagu. Alrededor hay pantanos y vegetación espesa: un paisaje que no se ve en ningún otro lugar de las Maldivas.",
        "come": "En bici o moto, en el centro de la isla.",
        "tempo": "1 hora",
        "lat": -0.29804,
        "lng": 73.42902
      },
      {
        "nome": "Havitta de Fuvahmulah",
        "testo": "Una ruina antigua de unos 12 metros de alto en el distrito de Dhadimagu, quizá una estupa del periodo budista, anterior a la conversión al islam. Hoy es una colina cubierta de vegetación, pero sigue siendo una de las huellas más antiguas de la isla.",
        "come": "En bici o moto, en el norte de la isla.",
        "tempo": "30 minutos",
        "lat": -0.28103,
        "lng": 73.41902
      },
      {
        "nome": "Mezquita Gemmiskiy",
        "testo": "En el norte de la isla, en Dhadimagu, una mezquita de piedra de coral construida hacia 1300 y considerada de las más antiguas de las Maldivas. Sigue en uso para la oración.",
        "come": "En bici o moto.",
        "quando": "Fuera de las horas de oración.",
        "tempo": "20 minutos",
        "consiglio": "Se mira desde fuera, con hombros y rodillas cubiertos."
      },
      {
        "nome": "Aeropuerto y puerto de Fuvahmulah",
        "testo": "En el lado sureste de la isla están la pista, en uso desde 2011, y el puerto construido a principios de los años 2000, del que salen los barcos de buceo. Es el punto de llegada y la zona donde se concentran las salidas al mar.",
        "come": "Vuelo interno desde Malé, 1 hora y 20-25 minutos.",
        "tempo": "de paso",
        "lat": -0.3094,
        "lng": 73.43607
      }
    ],
    programmi: [
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: vuelo interno desde Malé (1 hora 20), vuelta a la isla",
          "Día 2: inmersiones con tiburones tigre",
          "Día 3: lagos interiores y playa de Thoondu"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: vuelo desde Malé, tarde en bici entre Bandaara Kilhi y la playa de Thoondu",
          "Día 2: dos inmersiones con tiburones tigre; vuelo al día siguiente, al menos 24 horas después de la última"
        ]
      },
      {
        "titolo": "4 días",
        "tappe": [
          "Día 1: llegada y vuelta a la isla",
          "Días 2-3: inmersiones en Tiger Zoo y en los sitios en azul",
          "Día 4: Havitta, mezquita Gemmiskiy y atardecer en Thoondu, sin inmersiones antes del vuelo"
        ]
      }
    ],
    zone: [
      {
        "nome": "Casas de huéspedes ligadas a los centros de buceo",
        "perChi": "buceadores",
        "testo": "Alojamiento sencillo, a menudo reservado junto con las inmersiones. La isla es pequeña, así que se mueve uno en bici o scooter."
      },
      {
        "nome": "Dhoondigan y el sureste",
        "perChi": "quien bucea a diario",
        "testo": "La zona del puerto y del aeropuerto, de donde salen los barcos de buceo. Cómoda para las salidas al amanecer."
      },
      {
        "nome": "Dhadimagu y el norte",
        "perChi": "quien busca playa y calma",
        "testo": "El norte, con la playa de Thoondu, la Havitta y la mezquita Gemmiskiy. Más lejos del puerto: hace falta moto."
      },
      {
        "nome": "Maalegan y el centro",
        "perChi": "quien quiere estar a medio camino",
        "testo": "El centro de la isla, cerca de Bandaara Kilhi, a pocos minutos tanto del puerto como del norte."
      }
    ],
    sapori: [
      {
        "nome": "Mas huni",
        "testo": "Atún, coco y cebolla con roshi en el desayuno."
      },
      {
        "nome": "Garudhiya",
        "testo": "Caldo de atún con arroz, lima y chile."
      },
      {
        "nome": "Pescado del día",
        "testo": "A la parrilla o en curry en las casas de huéspedes."
      },
      {
        "nome": "Fruta de la isla",
        "testo": "Papaya, plátano y coco cultivados en los campos de la isla, de vegetación densa."
      }
    ],
    attenzioni: [
      "Ir sin experiencia: las corrientes y las condiciones oceánicas requieren título avanzado y un buen número de inmersiones.",
      "Última inmersión al menos 24 horas antes del vuelo, y seguro con cobertura de buceo.",
      "El mar puede estar agitado de mayo a noviembre.",
      "El vuelo interno tiene límites de equipaje: comprueba antes de salir."
    ],
    faq: [
      {
        "domanda": "¿Hace falta experiencia para los tiburones tigre de Fuvahmulah?",
        "risposta": "Sí: se baja en mar abierto, a menudo en azul y con corriente. Los centros piden titulación avanzada y un buen número de inmersiones registradas."
      },
      {
        "domanda": "¿Cuándo ir a Fuvahmulah?",
        "risposta": "Los tiburones tigre están todo el año. De mayo a noviembre el mar puede estar agitado y algunas salidas se cancelan."
      },
      {
        "domanda": "¿Cómo se llega a Fuvahmulah?",
        "risposta": "Con el vuelo interno desde Malé, 1 hora y 20-25 minutos. Conviene un vuelo de ida por la mañana para no perder un día."
      },
      {
        "domanda": "¿Cómo se mueve uno por la isla?",
        "risposta": "En bici, moto o taxi. La isla mide unos 4,5 km de largo y 1,2 de ancho: en moto se llega a todas partes en pocos minutos."
      },
      {
        "domanda": "¿Hay playas para bañarse?",
        "risposta": "Pocas: la isla no tiene laguna y el océano profundo llega a pocos metros de la orilla. Thoondu es la playa más bonita, pero el baño depende del mar del día."
      },
      {
        "domanda": "¿Cuánto esperar entre la última inmersión y el vuelo?",
        "risposta": "Al menos 24 horas. Hay que incluirlo en el plan, porque de aquí siempre se sale en avión."
      }
    ],
    esperienzeSlugs: [],
    tripSlugs: ['maldive-guida'],
    imageAlt: 'Un tiburón tigre nadando sobre el fondo arenoso',
    immagine: '/images/maldive/squalo-tigre.jpg',
  },
]
