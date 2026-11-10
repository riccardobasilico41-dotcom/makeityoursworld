import type { Destinazione } from '@/lib/types'

export const destinazioniQatar: Destinazione[] = [
  {
    slug: 'doha',
    paeseSlug: 'qatar',
    ordine: 1,
    nome: 'Doha',
    tipologia: ['città', 'musei', 'stopover'],
    giorniConsigliati: '12-24 horas para la escala esencial, 2 días para hacerla bien',
    visitataPersonalmente: true,
    introduzione:
      "Hace quince años esta capital casi no tenía nada que enseñar. Hoy tiene el Museo de Arte Islámico de I. M. Pei en una isla artificial, el Museo Nacional de Jean Nouvel con forma de rosa del desierto y un zoco restaurado que, a diferencia de muchos de la región, ha seguido siendo un mercado de verdad y no se ha convertido en un decorado.",
    percheAndarci:
      "El programa de escala de Qatar Airways hace que la parada sea casi gratis, y Doha es la ciudad del Golfo que mejor se visita en poco tiempo: el metro conecta aeropuerto, zoco y museos, y en un día completo se ve todo lo que importa.",
    cosaVedere: [
      "El Museo de Arte Islámico, proyectado por I. M. Pei a los noventa años, en una isla artificial frente a la Corniche",
      "El Museo Nacional de Catar de Jean Nouvel, con los discos entrecruzados inspirados en la rosa del desierto",
      "El Souq Waqif, restaurado pero todavía en funcionamiento, con el mercado de los halcones y su hospital",
      "La Corniche, siete kilómetros de paseo marítimo con el skyline de West Bay enfrente",
      "Msheireb Downtown, el barrio reconstruido con sus museos sobre la esclavitud y la historia del petróleo",
      "El Katara Cultural Village y las instalaciones de Richard Serra en el desierto",
    ],
    cosaFare: [
      "Souq Waqif por la noche, cuando abre el mercado de los halcones (véase la ficha de experiencia dedicada)",
      "Museo de Arte Islámico al atardecer, con la vista del skyline desde la escalinata",
      "Paseo en dhow por la bahía, los barcos de madera tradicionales, por pocos riyales",
      "Excursión al inland sea de Khor Al Adaid, donde el mar entra en el desierto (véase la ficha de experiencia dedicada)",
    ],
    doveDormire:
      "Con el programa de escala de Qatar Airways se elige entre los establecimientos concertados a precios simbólicos, y casi siempre es la elección acertada. Fuera del programa, la zona de West Bay es cómoda por el metro, la que rodea el Souq Waqif por el ambiente.",
    doveMangiare:
      "El Souq Waqif es la zona de la ciudad con más restaurantes, de cocina levantina, iraní y catarí, para todos los bolsillos. Hay que probar el machboos, la carne especiada con arroz, y el karak chai en los quioscos: el té con leche especiado que aquí se bebe a todas horas y cuesta pocos céntimos. Para gastar poco, en los barrios donde viven los trabajadores del subcontinente indio hay restaurantes excelentes y baratos.",
    comeArrivare:
      "Vuelo a Hamad International (DOH), hub de Qatar Airways y uno de los mejores aeropuertos del mundo. El metro, línea roja, llega a Msheireb, en el centro, en unos 20 minutos por 2 QAR en clase estándar; el taxi Karwa cuesta unos 40-60 QAR y también funciona Uber. Para los ciudadanos de la UE el visado a la llegada es gratuito. El stopover de Qatar Airways se reserva en el portal Discover Qatar con el código de reserva del vuelo.",
    comeSpostarsi:
      "Metro reciente, económico y climatizado, que cubre todo lo necesario; para lo demás Karwa Taxi y Uber. Caminar por la Corniche es agradable solo de noviembre a marzo.",
    periodoMigliore:
      "de noviembre a marzo. Entre junio y septiembre se superan los 45 grados con una humedad altísima, y una escala en verano se reduce a museos y centros comerciales.",
    costi:
      "Presupuesto diario orientativo por persona, hotel incluido: bajo 60-90 € con el programa stopover, medio 140-220 €, alto más de 350 €. Museo de Arte Islámico 50 QAR para no residentes; Zoco Waqif, Msheireb Museums y Katara gratuitos; metro 2 QAR por viaje. Con el programa stopover el hotel parte de unos 14 dólares por persona y noche.",
    erroriDaEvitare: [
      "No reservar la escala en el portal dedicado: se reserva por separado del vuelo, con el código de reserva, y mucha gente no sabe que existe",
      "Programarla en verano, cuando estar al aire libre es impracticable",
      "Quedarse solo en West Bay y en los centros comerciales: son el zoco y los museos los que justifican bajar del avión",
      "Subestimar las normas de vestimenta: aquí son más conservadoras que en Dubái, con hombros y rodillas cubiertos esperados en público para todos",
    ],
    confronti: [
      {
        titolo: 'Cuánto tiempo quedarse en Doha',
        introduzione:
          "Doha es una de las pocas ciudades del mundo que funcionan tanto en doce horas como en tres días: por eso conviene elegir la duración de la parada en vez de sufrir la escala. Las tres fórmulas dan resultados muy distintos.",
        opzioni: [
          {
            nome: 'Escala corta, 6-10 horas sin salir',
            sintesi: "Quedarse dentro del Hamad International, que está regularmente entre los mejores aeropuertos del mundo.",
            costo: 'nada',
            durata: '6-10 horas',
            pro: ["Ningún riesgo de perder el vuelo", "El aeropuerto tiene jardines interiores, una piscina, zonas de descanso y restaurantes serios", "Ningún trámite"],
            contro: ["No se ve el país", "Diez horas en el aeropuerto siguen siendo diez horas en el aeropuerto"],
            perChi: "Quien tiene equipaje que recoger, conexiones ajustadas o no quiere complicaciones.",
          },
          {
            nome: 'Escala de 12-24 horas, una noche',
            sintesi: "Salir, dormir una noche en la ciudad con el programa de Qatar Airways y ver lo esencial: zoco, Corniche, un museo.",
            costo: 'desde unos 14 dólares por persona y noche en cuatro estrellas con el programa',
            durata: 'una noche',
            pro: [
              "La mejor relación entre coste y resultado: a estas cifras no quedarse es casi una decisión contra los propios intereses",
              "Visado gratuito a la llegada para los italianos, ningún trámite previo",
              "El Souq Waqif por la noche y un museo a la mañana siguiente cubren lo esencial",
              "Metro desde el aeropuerto: se está en la ciudad en veinte minutos",
            ],
            contro: ["Se duerme poco, entre la llegada nocturna y la salida", "No se sale de la ciudad", "Hay que reservarlo en el portal dedicado, por separado del vuelo"],
            perChi: "Casi cualquiera que vuele con Qatar Airways y tenga una escala de más de doce horas.",
          },
          {
            nome: 'Parada de 2-3 días',
            sintesi: "Doha con calma más el inland sea de Khor Al Adaid y el norte del país, con las instalaciones de Richard Serra en el desierto.",
            costo: 'hasta 4 noches con el programa de escala, a tarifas igualmente bajas',
            durata: '2-3 días',
            pro: [
              "Se sale de la ciudad, que es la parte que casi nadie hace",
              "Khor Al Adaid, donde el mar entra en el desierto, es uno de los pocos lugares del mundo hechos así",
              "En tres días se ve todo Catar: es más pequeño que los Abruzos",
            ],
            contro: ["Pasados los cuatro días el país se acaba", "Para el desierto y el norte hace falta un 4x4 o una excursión organizada", "A los costes del hotel se suman los de los traslados fuera de la ciudad"],
            perChi: "Quien quiere hacer de la escala una parada de verdad, y quien ya ha visto la ciudad de Doha.",
          },
        ],
        raccomandazione:
          "Con una escala de más de doce horas la noche en la ciudad es la elección obvia: cuesta lo que una comida y te da una capital entera. Con dos días se añade Khor Al Adaid, lo más insólito del país. Pasados los cuatro días conviene usar Catar como trampolín hacia otra parada del Golfo, porque aquí las cosas que ver se acaban.",
      },
    ],
    miaEsperienza:
      "Doha es la ciudad del Golfo que más rinde en relación con el tiempo que le dedicas, por un motivo casi banal: es pequeña, el metro funciona y las dos cosas que merece la pena ver están cerca. La mejor es el Museo de Arte Islámico. Pei lo proyectó a los noventa años, después de recorrer el mundo musulmán para entender qué era la arquitectura islámica: es un edificio de piedra caliza en una isla artificial, donde la luz entra desde arriba por una cúpula oculta. Desde la escalinata exterior, al atardecer, se mira el skyline de West Bay al otro lado del agua, y es la postal de la ciudad. La otra sorpresa es el Souq Waqif, una reconstrucción que sin embargo funciona: todavía se compran tejidos, especias y halcones de caza, e incluso hay un hospital para halcones que se puede visitar, donde las aves esperan su turno posadas con la caperuza en la cabeza. Es el lugar más extraño y más catarí de la ciudad. Con el programa de escala, todo esto cuesta lo que una pizza.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Museo de Arte Islámico",
        "testo": "El edificio de piedra caliza color crema de I. M. Pei, que lo proyectó a los 91 años, inaugurado en 2008 en una isla artificial frente a la Corniche. Dentro, manuscritos, cerámicas, metales y tejidos de todo el mundo musulmán.",
        "come": "Taxi o Uber desde el centro; el museo indica también un autobús lanzadera gratuito. Se camina por el parque.",
        "quando": "Al atardecer, desde la escalinata exterior, se mira el skyline de West Bay.",
        "tempo": "2-3 horas",
        "costo": "50 QAR para no residentes, unos 12 € (2026)",
        "orari": "De sábado a martes 9-19, jueves 9-21, viernes 13.30-19; cerrado los miércoles (2026).",
        "lat": 25.29502,
        "lng": 51.53927,
        "url": "https://mia.org.qa/en/visit/",
        "consiglio": "Subir la escalinata de atrás al final de la visita: es la postal de la ciudad."
      },
      {
        "nome": "Zoco Waqif",
        "testo": "El mercado histórico, destruido en gran parte por un incendio en 2003 y reconstruido entre 2006 y 2008 en estilo tradicional, tras demoler los edificios modernos. Sigue funcionando: se venden telas, especias, incienso y halcones de caza, en el zoco de los halcones, donde se pueden fotografiar y sostener en el brazo bajo la mirada de los vendedores. Cerca está el hospital de halcones gestionado por el Estado, que cura a las aves heridas. Por la noche los callejones y los restaurantes al aire libre se llenan de familias cataríes.",
        "come": "Metro, línea dorada, hasta Souq Waqif, o Msheireb, donde se cruzan las tres líneas; se camina por los callejones.",
        "quando": "Por la noche, cuando los callejones se animan. El zoco de los halcones tiene horario partido, de mañana y de tarde: consultarlo en Visit Qatar.",
        "tempo": "2 horas",
        "costo": "Entrada libre",
        "lat": 25.28738,
        "lng": 51.53321,
        "consiglio": "El lugar donde mejor se ve la vida catarí, sobre todo por la noche."
      },
      {
        "nome": "Museo Nacional de Catar",
        "testo": "El edificio de Jean Nouvel con discos que se cortan inspirados en la rosa del desierto. Dentro, la historia del país del desierto a las perlas y al gas.",
        "come": "Metro hasta la estación National Museum of Qatar, o taxi.",
        "quando": "Mejor por la mañana. Algunas salas pueden estar cerradas por obras.",
        "tempo": "2 horas",
        "orari": "De sábado a lunes y miércoles 9-19, jueves 9-21, viernes 13.30-19; cerrado los martes; última entrada 45 minutos antes del cierre (2026).",
        "lat": 25.28847,
        "lng": 51.54926,
        "url": "https://nmoq.org.qa/en/visit/"
      },
      {
        "nome": "Corniche y dhow",
        "testo": "El paseo marítimo en media luna sobre la bahía, con los dhow, los barcos de madera tradicionales, que hacen breves paseos de pago.",
        "come": "A pie desde el Museo de Arte Islámico.",
        "quando": "Atardecer.",
        "tempo": "1 hora",
        "costo": "Paseo libre; los paseos en dhow se negocian en el muelle",
        "lat": 25.29139,
        "lng": 51.53722
      },
      {
        "nome": "Msheireb Museums",
        "testo": "Cuatro casas históricas restauradas en el barrio reconstruido de Msheireb, junto al Zoco Waqif. Bin Jelmood House cuenta la esclavitud en el Golfo y el océano Índico, Company House los primeros trabajadores del petróleo, las otras dos la vida de las familias y la historia del barrio. Es la Doha que no sale en las postales.",
        "come": "Metro hasta Msheireb, donde se cruzan las tres líneas, y luego a pie.",
        "quando": "Las horas de calor, antes de pasar al zoco por la noche.",
        "tempo": "1,5-2 horas",
        "costo": "Entrada libre (2026)",
        "orari": "De lunes a jueves 9-17, viernes 15-21; cerrado los domingos (2026).",
        "lat": 25.28689,
        "lng": 51.52889,
        "url": "https://msheirebmuseums.com/en/visit/"
      },
      {
        "nome": "Katara Cultural Village",
        "testo": "Un barrio cultural junto al mar entre West Bay y The Pearl, con un anfiteatro de mármol, dos mezquitas decoradas (la Mezquita Dorada y la Mezquita de Katara con mosaicos turquesa y violeta), galerías, palomares tradicionales y una playa pública. Es donde los cataríes vienen por la tarde a pasear y a cenar.",
        "come": "Taxi o metro, línea roja, hasta Katara, luego a pie.",
        "quando": "Por la noche, cuando baja el calor y se encienden las luces del anfiteatro.",
        "tempo": "1,5-2 horas",
        "costo": "Entrada libre al barrio",
        "lat": 25.36033,
        "lng": 51.52636,
        "url": "https://www.katara.net/",
        "consiglio": "Mirar el calendario de eventos: en el anfiteatro hay a menudo conciertos y festivales."
      },
      {
        "nome": "Mathaf, museo árabe de arte moderno",
        "testo": "El museo de Qatar Museums dedicado al arte moderno y contemporáneo del mundo árabe, en una antigua escuela de Education City reformada por Jean-François Bodin. Las exposiciones cambian a menudo y reúnen a artistas del mundo árabe que en Europa se ven poco.",
        "come": "En taxi o Uber desde el centro, o metro, línea verde, hasta Education City.",
        "quando": "Horarios en la web de Qatar Museums. Bueno para las horas de calor.",
        "tempo": "1-1,5 horas",
        "costo": "Entrada libre para todos, con entrada que reservar (2026)",
        "lat": 25.3106,
        "lng": 51.4197,
        "url": "https://qm.org.qa/tickets/select-tickets/"
      },
      {
        "nome": "3-2-1 Qatar Olympic and Sports Museum",
        "testo": "El museo del deporte de Qatar Museums, junto al Khalifa International Stadium en la Aspire Zone. Recorre la historia del deporte y de los Juegos Olímpicos, con mucho espacio para el fútbol y el Mundial de 2022, y es interactivo: gusta también a quien no sigue el deporte.",
        "come": "Metro, línea dorada, hasta Sports City, o taxi.",
        "quando": "Las horas de calor. Horarios y entradas en la web de Qatar Museums.",
        "tempo": "2 horas",
        "lat": 25.26375,
        "lng": 51.45017,
        "url": "https://qm.org.qa/"
      },
      {
        "nome": "Biblioteca Nacional de Catar",
        "testo": "La biblioteca nacional proyectada por Rem Koolhaas y OMA en la Education City: una única sala enorme con estanterías escalonadas, como un anfiteatro de libros. Bajo el nivel del suelo está la sección de manuscritos y colecciones históricas.",
        "come": "Metro, línea verde, hasta Qatar National Library, y luego a pie.",
        "quando": "Las horas de calor; se combina con el Mathaf, en la misma zona.",
        "tempo": "1 hora",
        "orari": "De sábado a jueves 8-20, viernes 16-20 (2026).",
        "url": "https://www.qnl.qa/en"
      },
      {
        "nome": "Al Bidda Park",
        "testo": "El gran parque a lo largo de la Corniche entre el centro y West Bay, con césped, paseos arbolados y recorridos para correr y montar en bici. Es donde las familias de Doha pasan las tardes de invierno.",
        "come": "Metro, línea roja, hasta Al Bidda o Corniche, y luego a pie.",
        "quando": "Última hora de la tarde y noche, de noviembre a marzo.",
        "tempo": "1 hora",
        "costo": "Entrada libre",
        "lat": 25.30087,
        "lng": 51.51738
      },
      {
        "nome": "The Pearl-Qatar",
        "testo": "Una isla artificial construida sobre los antiguos bancos de perlas, con puertos deportivos, edificios de estilo mediterráneo y el colorido barrio de Qanat Quartier, inspirado en Venecia. Turística y cuidada, buena para un paseo y una cena.",
        "come": "Taxi o Uber desde West Bay.",
        "quando": "Por la noche.",
        "tempo": "1,5-2 horas",
        "costo": "Entrada libre",
        "lat": 25.36861,
        "lng": 51.55194
      },
      {
        "nome": "Lusail y Place Vendôme",
        "testo": "La ciudad nueva al norte de Doha, construida desde cero para el Mundial de 2022, con el estadio de la final, el Lusail Boulevard y el gran centro comercial Place Vendôme, que tiene un espectáculo de fuentes en su interior. Interesa para entender hacia dónde va el país.",
        "come": "Metro, línea roja, hacia Lusail, o el tranvía de Lusail; taxi.",
        "quando": "Por la noche, cuando se iluminan el bulevar y las torres.",
        "tempo": "2 horas",
        "costo": "Entrada libre",
        "lat": 25.40502,
        "lng": 51.52079
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Museo Nacional de Catar (cerrado los martes)",
          "Mediodía: Msheireb Museums y comida en el Zoco Waqif",
          "Tarde: Museo de Arte Islámico (cerrado los miércoles), y luego la escalinata al atardecer",
          "Noche: Corniche, paseo en dhow y cena en el Zoco Waqif"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: como el programa de un día",
          "Día 2, mañana: Education City, con la Biblioteca Nacional de Catar y el Mathaf",
          "Día 2, tarde: 3-2-1 Qatar Olympic and Sports Museum",
          "Día 2, noche: Katara Cultural Village y The Pearl"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Días 1-2: como arriba",
          "Día 3: en 4x4 al mar interior de Khor Al Adaid hasta el atardecer, o el norte con Al Zubarah y las placas de Richard Serra",
          "Noche: Lusail y el bulevar"
        ]
      }
    ],
    zone: [
      {
        "nome": "Souq Waqif / Msheireb",
        "perChi": "quien quiere estar cerca de todo",
        "testo": "Hoteles boutique y cadenas cerca del zoco y del metro.",
        "fascia": "90-220 €"
      },
      {
        "nome": "West Bay",
        "perChi": "quien quiere rascacielos y hoteles de lujo",
        "testo": "Skyline moderno, lejos del zoco.",
        "fascia": "100-250 €"
      },
      {
        "nome": "The Pearl",
        "perChi": "quien quiere playa y restaurantes",
        "testo": "Isla artificial con puerto deportivo y locales, turística y cara.",
        "fascia": "150-350 €"
      },
      {
        "nome": "Lusail",
        "perChi": "quien quiere hoteles nuevos y el mar",
        "testo": "Hoteles recientes entre el bulevar y la marina, conectados por metro y tranvía, pero a 20-30 minutos del centro histórico.",
        "fascia": "110-280 €"
      }
    ],
    sapori: [
      {
        "nome": "Machboos",
        "testo": "Carne especiada con arroz, el plato catarí."
      },
      {
        "nome": "Karak chai",
        "testo": "Té con leche especiado, en quioscos a todas horas; cuesta muy poco."
      },
      {
        "nome": "Cocina levantina e iraní",
        "testo": "En los restaurantes del Souq Waqif."
      },
      {
        "nome": "Cocina de los trabajadores",
        "testo": "En los barrios populares se come bien y se gasta poco."
      }
    ],
    attenzioni: [
      "Ignorar el programa de escala de Qatar Airways: condiciones y forma de reserva están en la web oficial de la aerolínea.",
      "Planearla en verano: estar al aire libre es impracticable.",
      "Quedarse solo en West Bay y los centros comerciales: son el zoco y los museos lo que vale bajarse del avión.",
      "Normas de vestimenta y comportamiento en público: comprobar los canales oficiales."
    ],
    // GUIDA-END
    gite: [
      {
        "nome": "Khor Al Adaid, el mar interior",
        "distanza": "unas 1h30 desde Doha, la última media hora sobre arena",
        "come": "Solo en 4x4 con conductor, reservado con un operador; el precio es por coche.",
        "testo": "Un brazo del Golfo que entra en el desierto, con las dunas que bajan directamente al agua y Arabia Saudí en la otra orilla. Conviene quedarse hasta el atardecer (hay una ficha dedicada)."
      },
      {
        "nome": "Al Zubarah y el norte",
        "distanza": "unos 100 km al noroeste",
        "come": "Coche de alquiler para un día entero; el último tramo hacia las placas de Serra es de tierra.",
        "testo": "El fuerte y la ciudad portuaria de Al Zubarah, patrimonio de la UNESCO, la aldea abandonada de Al Jumail y las cuatro placas de acero de Richard Serra en el desierto de Brouq."
      },
      {
        "nome": "Al Wakrah",
        "distanza": "unos 20 km al sur",
        "come": "Metro, línea roja, hasta Al Wakrah, y luego un taxi corto hasta el zoco.",
        "testo": "El antiguo puerto pesquero al sur de Doha, con un zoco junto al mar más tranquilo que el Zoco Waqif y una playa pública. Bueno para medio día y una cena de pescado."
      }
    ],
    faq: [
      {
        "domanda": "¿Cuántos días hacen falta en Doha?",
        "risposta": "En 12-24 horas se ven el Museo de Arte Islámico, el Museo Nacional y el Zoco Waqif. Con dos días se añaden Education City, Katara y The Pearl; el tercero sirve para Khor Al Adaid o el norte."
      },
      {
        "domanda": "¿Merece la pena salir del aeropuerto en una escala en Doha?",
        "risposta": "Por encima de doce horas, sí: el metro llega al centro en veinte minutos y el visado a la llegada es gratuito para los ciudadanos de la UE. Por debajo de diez horas conviene quedarse en Hamad, que tiene jardines, piscina y zonas de descanso."
      },
      {
        "domanda": "¿Qué días cierran los museos de Doha?",
        "risposta": "El Museo de Arte Islámico cierra los miércoles, el Museo Nacional los martes; los viernes solo abren desde las 13.30. Conviene planificar la visita teniéndolo en cuenta."
      },
      {
        "domanda": "¿Cómo funciona el stopover de Qatar Airways?",
        "risposta": "Con una escala de 12 a 96 horas se reservan de 1 a 4 noches de hotel a tarifas muy bajas en el portal Discover Qatar, separado del vuelo, con el código de reserva. Las condiciones cambian: comprobarlas antes."
      },
      {
        "domanda": "¿Cómo vestirse en Doha?",
        "risposta": "Hombros y rodillas cubiertos en público, para hombres y mujeres; las normas son más conservadoras que en Dubái. En museos y centros comerciales se pide lo mismo."
      },
      {
        "domanda": "¿Cuándo es mejor ir a Doha?",
        "risposta": "De noviembre a marzo. Entre junio y septiembre se superan los 45 grados con humedad altísima, y uno se queda entre museos y centros comerciales."
      }
    ],
    esperienzeSlugs: ['souq-waqif', 'khor-al-adaid'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "Los rascacielos de West Bay vistos desde el agua bajo un cielo despejado, Doha",
    immagine: '/images/qatar/doha.jpg',
  },
  {
    slug: 'qatar-deserto-nord',
    immagine: '/images/qatar/qatar-deserto-nord.jpg',
    paeseSlug: 'qatar',
    ordine: 2,
    nome: 'El desierto y el norte de Catar',
    tipologia: ['deserto', 'natura', 'archeologia'],
    giorniConsigliati: '1-2 días, como ampliación desde Doha',
    visitataPersonalmente: true,
    introduzione:
      "Fuera de la capital Catar está casi vacío. Al sur está Khor Al Adaid, el «inland sea» donde el Golfo entra en el desierto entre dunas que bajan derechas al agua. Al norte están el fuerte de Al Zubarah, patrimonio de la UNESCO, los pueblos de pescadores abandonados y las cuatro planchas de acero de Richard Serra plantadas en medio de la nada.",
    percheAndarci:
      "Khor Al Adaid es un caso raro en el mundo, un brazo de mar que entra en un desierto de dunas vivas. Y el norte muestra el Catar de antes del gas: pueblos de pescadores de perlas abandonados en los años setenta y dejados tal como estaban.",
    cosaVedere: [
      "Khor Al Adaid, el inland sea, reserva natural declarada por la UNESCO, accesible solo en 4x4",
      "El fuerte de Al Zubarah, patrimonio de la UNESCO, y los restos de la ciudad portuaria del siglo XVIII",
      "East-West/West-East de Richard Serra, cuatro planchas de acero de 14 metros de altura en el desierto de Brouq",
      "El pueblo abandonado de Al Jumail, en la costa norte",
      "Las dunas de Sealine y el desierto meridional",
    ],
    cosaFare: [
      "Excursión en 4x4 al inland sea, con el dune bashing y la parada en la orilla (véase la ficha de experiencia dedicada)",
      "Jornada en el norte entre Al Zubarah, Al Jumail y las instalaciones de Serra",
      "Noche en campamento de tiendas en el desierto meridional",
      "Caminar entre las planchas de Serra al atardecer, cuando el acero cambia de color",
    ],
    doveDormire:
      "En el desierto meridional hay campamentos de tiendas de varios niveles, del sencillo al lujoso; el norte casi no tiene alojamientos y se hace en el día desde Doha, a menos de hora y media.",
    doveMangiare:
      "Fuera de Doha hay poquísimo: en los campamentos de tiendas las comidas están incluidas, en el norte casi no hay nada. La comida y el agua se llevan desde Doha, como hacen también los cataríes en sus días fuera de la ciudad.",
    comeArrivare:
      "Khor Al Adaid está a una hora y media de Doha, pero **solo se llega en 4x4 con un conductor experto**: los últimos kilómetros son sobre la arena. Al norte se llega con un coche normal por carretera asfaltada, en poco más de una hora.",
    comeSpostarsi: "Coche de alquiler para el norte; 4x4 con guía para el sur y para el desierto. Fuera de la capital no hay transporte público útil.",
    periodoMigliore:
      "de noviembre a marzo. En verano el desierto catarí es impracticable, y también las excursiones organizadas se hacen solo en los meses frescos.",
    costi: "excursión en 4x4 al inland sea unos 250-500 riyales según la fórmula y la duración; Al Zubarah gratis o casi.",
    erroriDaEvitare: [
      "Intentar llegar a Khor Al Adaid con un coche normal: uno se queda atascado, y es un clásico",
      "Hacer el dune bashing justo después de comer: es más movido de lo que parece",
      "Ir al norte sin agua y sin comida: no hay nada, durante decenas de kilómetros",
      "Programar el desierto entre junio y septiembre",
    ],
    miaEsperienza:
      "Fuera de Doha Catar está casi vacío, y es precisamente por eso por lo que conviene salir de la capital. Khor Al Adaid es lo que me ha quedado. Llegamos en 4x4 tras media hora de arena, con el conductor que desinfló las ruedas al principio de la pista; se corona una última duna y debajo está el mar, un brazo del Golfo que entra en el desierto, con las dunas que bajan derechas al agua y Arabia Saudí en la otra orilla. Pocos lugares en el mundo están hechos así, y que esté a una hora y media de un aeropuerto internacional es casi absurdo. El norte es otra historia, y es la parte que casi nadie hace. Las cuatro planchas de acero de Richard Serra, de catorce metros de altura y alineadas a lo largo de un kilómetro en medio de la nada, se alcanzan por una pista y no hay nadie: ni aparcamiento, ni entrada, ni carteles. Llegas, caminas entre una plancha y otra sin oír más que el viento, y vuelves atrás. Es lo contrario de todo lo demás del Golfo.",
    // GUIDA-START
    luoghi: [
      {
        "nome": "Khor Al Adaid (mar interior)",
        "testo": "Un brazo del Golfo que entra en el desierto, con las dunas que bajan directas al agua, en la frontera con Arabia Saudí. Catar lo ha incluido en su lista indicativa de la UNESCO.",
        "come": "A unos 78 km al sur de Doha. No hay carretera: solo se llega en 4x4 con un conductor experto en todoterreno, desinflando los neumáticos a 18-20 psi antes de salir de Mesaieed, o con una excursión. Se corona la última duna y abajo está el mar.",
        "quando": "Tarde, hasta el atardecer.",
        "tempo": "Medio día",
        "costo": "Entrada gratuita (2026)",
        "consiglio": "No hacer dune bashing justo después de comer: es más movido de lo que parece."
      },
      {
        "nome": "Fuerte de Al Zubarah",
        "testo": "Patrimonio de la UNESCO desde 2013: la ciudad portuaria que floreció a finales del siglo XVIII, hoy un campo de excavaciones, y el fuerte construido en 1938 muy cerca.",
        "come": "En coche desde Doha, unos 105 km hacia el noroeste.",
        "quando": "Mañana.",
        "tempo": "1-1,5 horas",
        "consiglio": "Llevar agua y comida: en el norte hay pocos servicios."
      },
      {
        "nome": "East-West/West-East de Richard Serra",
        "testo": "Cuatro grandes planchas de acero de 2014, alineadas a lo largo de cientos de metros en un valle de la reserva de Brouq. Se llega por una pista.",
        "come": "En coche, mejor un 4x4, hacia la costa occidental.",
        "quando": "Atardecer, cuando el acero cambia de color.",
        "tempo": "1-2 horas",
        "consiglio": "Caminar entre una lámina y otra oyendo solo el viento: es lo contrario del resto del Golfo."
      },
      {
        "nome": "Manglares de Al Thakhira",
        "testo": "La costa entre Al Thakhira y Al Khor tiene extensos manglares. Se recorre en kayak entre los canales, con garzas y otras aves; con la marea baja el fango al descubierto está lleno de cangrejos.",
        "come": "En coche desde Doha, hacia el norte. Kayaks de alquiler con operadores locales, mejor reservar.",
        "quando": "Con la marea alta, a primera hora o al final de la tarde, en los meses frescos.",
        "tempo": "2-3 horas",
        "consiglio": "Consultar el horario de las mareas antes de salir: con la baja los kayaks se quedan en seco."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Al Zubarah y el norte",
          "Tarde: instalaciones de Serra al atardecer"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Khor Al Adaid en 4x4",
          "Día 2: norte, Al Zubarah y Serra"
        ]
      }
    ],
    zone: [
      {
        "nome": "Campamentos de tiendas en el desierto",
        "perChi": "quien quiere una noche bajo las estrellas",
        "testo": "Campamentos con comidas incluidas, al sur, en el desierto."
      },
      {
        "nome": "Doha",
        "perChi": "quien prefiere volver a la ciudad",
        "testo": "Todas las excursiones salen de Doha en el día."
      }
    ],
    sapori: [
      {
        "nome": "Almuerzo de picnic",
        "testo": "Se lleva desde Doha, como hacen los cataríes en las excursiones fuera de la ciudad."
      },
      {
        "nome": "Machboos",
        "testo": "En los campamentos de tiendas."
      },
      {
        "nome": "Karak chai",
        "testo": "Un termo de té especiado."
      },
      {
        "nome": "Dátiles",
        "testo": "En los campamentos, para merendar."
      }
    ],
    attenzioni: [
      "Ir a Khor Al Adaid con un coche normal: no hay carretera y hace falta un 4x4 con un conductor experto en todoterreno.",
      "Hacer dune bashing después de comer.",
      "Ir al norte sin agua ni comida: hay pocos servicios.",
      "Planear el desierto entre junio y septiembre."
    ],
    // GUIDA-END
    esperienzeSlugs: [],
    tripSlugs: ['stopover-golfo'],
    imageAlt: "El fuerte de Al Zubarah, con las torres almenadas y la bandera de Catar, sobre la llanura pedregosa del norte",
  },
]
