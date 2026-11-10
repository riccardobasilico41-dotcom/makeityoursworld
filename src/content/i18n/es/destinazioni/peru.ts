import type { Destinazione } from '@/lib/types'

export const destinazioniPeru: Destinazione[] = [
  {
    slug: 'cusco',
    paeseSlug: 'peru',
    ordine: 1,
    nome: 'Cusco',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: "3-4 días, de los cuales al menos dos solo para aclimatarse",
    visitataPersonalmente: true,
    introduzione:
      "La antigua capital del imperio inca a 3.400 metros, donde los cimientos de piedra encajada en seco sostienen todavía las iglesias coloniales construidas encima. Es la base logística de casi todo lo que se hace en Perú: de aquí salen trenes, treks y vuelos a la Amazonia.",
    percheAndarci:
      "Porque es el punto de partida obligado y porque merece la pena también por sí sola: la mampostería inca de Sacsayhuamán y de Qorikancha es la mejor manera de entender lo que se va a ver en Machu Picchu.",
    cosaVedere: [
      "Qorikancha, el templo del sol inca sobre el que los conquistadores construyeron el convento de Santo Domingo",
      "Sacsayhuamán, la fortaleza con los bloques megalíticos encajados sin mortero, sobre la ciudad",
      "Plaza de Armas y la Catedral",
      "El barrio de San Blas, el más empinado y típico",
      "La Piedra de los Doce Ángulos, en la calle Hatun Rumiyoc",
    ],
    cosaFare: [
      "Tomárselo con calma los dos primeros días: sin aclimatación el resto del viaje no se puede hacer",
      "Mercado de San Pedro para el primer bocado de la cocina andina",
      "Curso de cocina peruana o cata de ceviche y pisco sour",
      "Jornada en Rainbow Mountain (Vinicunca) o en la laguna Humantay, ambas por encima de los 4.600 metros, para hacer solo después de haberse aclimatado",
    ],
    doveDormire:
      "El casco histórico y San Blas son las zonas más cómodas y agradables; San Blas, sin embargo, es todo cuesta arriba, algo que en los primeros días en altura se nota bastante.",
    doveMangiare:
      "El mercado de San Pedro es el sitio adecuado para el primer impacto: zumos de fruta en el mostrador, sopas y menú del día por pocos soles. Para probar en la ciudad el cuy (conejillo de Indias), la alpaca a la parrilla y el chicharrón; el pisco sour es obligatorio la primera noche, pero con calma, porque a 3.400 metros el alcohol pesa el doble.",
    comeArrivare: "Vuelo interno desde Lima (1 h 20 aprox.), la solución casi obligada. Por tierra desde Puno o Arequipa hacen falta 6-10 horas de autobús. El aeropuerto Alejandro Velasco Astete (CUZ) está en la ciudad: taxi oficial o app en 15-20 minutos, unos 20-40 soles (5-10 €); hay que evitar a los falsos taxistas a la salida de llegadas. Desde Puno existe también el bus turístico de unas 10 horas con paradas en Pukará, La Raya, Raqchi y Andahuaylillas. Cusco está a 3.400 metros: conviene dejar libre el día de llegada.",
    comeSpostarsi: "El centro se recorre a pie; taxis económicos y colectivos para las zonas exteriores. Para el Valle Sagrado, tours organizados o coche con conductor.",
    periodoMigliore: "mayo-septiembre, estación seca. Ojo con el 24 de junio, cuando el Inti Raymi llena la ciudad",
    costi: "Presupuesto bajo 30-45 € al día (albergue, menú del día en el mercado, colectivos); medio 70-120 € (hotel en el centro o en San Blas, restaurantes, taxis); alto desde 200 € (hoteles en casonas coloniales, guía privado, tours privados). El Boleto Turístico del Cusco (unos 130 soles, unos 33 €) cubre en una sola entrada Sacsayhuamán, los sitios del Valle Sagrado y varios museos; casi siempre compensa.",
    erroriDaEvitare: [
      "Aterrizar en Cusco y salir al día siguiente a hacer un trek: es la forma más directa de arruinarse el viaje con el mal de altura",
      "Subestimar las noches: a 3.400 metros hace frío todo el año, incluso cuando de día hay 20 grados",
      "Subir a Rainbow Mountain los primeros días, cuando el organismo todavía no ha reaccionado a la altitud",
    ],
    miaEsperienza:
      "El primer día aquí es un día perdido, y hay que asumirlo: aterrizamos a 3.400 metros y solo caminamos despacio entre la Plaza de Armas y San Blas, con el té de coca en la mano como hace todo el mundo. Es lo que hace falta, y el resto del viaje sale ganando. El segundo día Qorikancha y Sacsayhuamán, la mejor manera de entender de antemano lo que se verá en Machu Picchu, y la comida en el mercado de San Pedro entre zumos en el mostrador y sopas por pocos soles. Para los souvenirs, en Cusco yo voy a Assunta. Desde aquí hice tanto Rainbow Mountain como la laguna Humantay, más otra montaña de colores y un par de lagunas cuyo nombre no recuerdo. También estuve en Perú dos veces como voluntario, y una de ellas fue aquí en Cusco, con el Proyecto Cusimaky: es un proyecto que apoyo, e invito a quien pase por Cusco a visitarlo.",
    luoghi: [
      {
        nome: "Plaza de Armas y Catedral",
        testo: "El corazón colonial de Cusco: soportales, balcones de madera y una Catedral construida con bloques sacados de Sacsayhuamán. De noche, con las iglesias iluminadas, es el lugar para recuperar el aliento tras el día de llegada.",
        come: "En el centro, a pie desde casi todos los alojamientos. La Catedral tiene su propia entrada, no incluida en el Boleto Turístico general.",
        quando: "La plaza es mejor al amanecer y después del atardecer, cuando los grupos de los tours están en otra parte.",
        tempo: "1-2 horas con la Catedral",
        lat: -13.51677,
        lng: -71.97878,
        consiglio: "El primer día no hagas nada más: camina despacio entre la plaza y San Blas con un té de coca en la mano, como todos.",
      },
      {
        nome: "Qorikancha (convento de Santo Domingo)",
        testo: "Era el templo del Sol de los Incas. Los conquistadores construyeron encima el convento de Santo Domingo, pero los muros de piedra encajada en seco resistieron los terremotos que dañaron la parte colonial. Explica de qué trataban las piedras que se verán en Machu Picchu.",
        come: "A pie desde la Plaza de Armas, hacia el sureste. Se visita el convento con los claustros y las salas incas; hay también un museo de sitio aparte.",
        quando: "Mejor por la mañana, antes de los grupos organizados.",
        tempo: "1 hora",
        costo: "unos 20 soles, unos 5 € (2026); no incluido en el Boleto Turístico",
        lat: -13.52,
        lng: -71.97556,
        consiglio: "Visítalo el segundo día junto con Sacsayhuamán: son la mejor forma de entender la mampostería inca antes del resto del viaje.",
      },
      {
        nome: "Sacsayhuamán",
        testo: "La fortaleza-santuario sobre la ciudad, con tres grandes muros en terrazas de bloques megalíticos encajados sin argamasa: el más grande se estima entre 128 y casi 200 toneladas. Desde arriba se ve todo Cusco, y el 24 de junio aquí se celebra el Inti Raymi.",
        come: "Sobre la ciudad, al norte: en taxi o a pie cuesta arriba, algo que conviene evitar los primeros días en altura. Está incluido en el Boleto Turístico.",
        quando: "Mañana o primera hora de la tarde. El 24 de junio, día del Inti Raymi, el acceso cambia: infórmate antes.",
        tempo: "1,5-2 horas",
        costo: "Boleto Turístico general unos 130 soles (unos 33 €) para extranjeros, válido 10 días, 16 sitios (tarifario COSITUC, 2026). Los boletos parciales de un solo circuito cuestan 70 soles (unos 18 €)",
        lat: -13.50778,
        lng: -71.98222,
        consiglio: "Sube en taxi y baja a pie: la bajada hacia San Blas es agradable y no cansa.",
      },
      {
        nome: "San Blas y la Piedra de los Doce Ángulos",
        testo: "El barrio de los artesanos, todo callejones en subida, talleres y cafés. En la calle Hatun Rumiyoc está la piedra de los doce ángulos, un bloque inca encajado a la perfección entre los demás.",
        come: "A pie desde la plaza. Las calles son empinadas y empedradas.",
        quando: "Todo el día; los talleres están más animados por la tarde.",
        tempo: "1-2 horas",
        costo: "entrada libre",
        lat: -13.51601,
        lng: -71.97625,
        consiglio: "Para los souvenirs aquí hay cosas más cuidadas que en los puestos de la plaza. Cuenta con las cuestas: en los primeros días se notan.",
      },
      {
        nome: "Iglesia de la Compañía de Jesús",
        testo: "La iglesia de los jesuitas en el lado sureste de la Plaza de Armas, construida sobre los restos del palacio del inca Huayna Cápac. La fachada barroca es más rica que la de la Catedral, con la que los jesuitas querían competir, e iluminada de noche es la postal de la plaza.",
        come: "En la Plaza de Armas, a pocos pasos de la Catedral. Tiene entrada propia.",
        quando: "La fachada al atardecer y de noche; el interior a última hora de la tarde.",
        tempo: "30-45 minutos",
        lat: -13.5176,
        lng: -71.97796,
      },
      {
        nome: "Mercado de San Pedro",
        testo: "El mercado cubierto donde comen los cusqueños: puestos de jugos, sopas, quesos, hierbas y coca. Una primera prueba de la cocina andina sin gastar mucho.",
        come: "A pie desde la Plaza de Armas, hacia el oeste. Entrada libre.",
        quando: "Mañana y almuerzo; por la tarde muchos puestos cierran.",
        tempo: "1 hora",
        costo: "entrada libre",
        lat: -13.52116,
        lng: -71.9825,
        consiglio: "El menú del día al mediodía cuesta pocos soles y es lo que come la gente local. Lleva el bolso por delante: aquí hay carteristas.",
      },
      {
        nome: "Museo Inka",
        testo: "El museo de la Universidad San Antonio Abad, en una casona colonial a dos pasos de la plaza, con cerámica, textiles, objetos de oro, qeros pintados y momias. En el patio suelen trabajar tejedoras de comunidades andinas.",
        come: "A pie desde la Plaza de Armas, subiendo por la Cuesta del Almirante. Tiene entrada propia, no incluida en el Boleto Turístico.",
        quando: "Una tarde de descanso en los primeros días de aclimatación.",
        tempo: "1-1,5 horas",
        lat: -13.51563,
        lng: -71.97815,
      },
      {
        nome: "Museo de Arte Precolombino (MAP)",
        testo: "Una selección de la colección del Museo Larco de Lima, expuesta en una casona colonial de la plazoleta Nazarenas. Pocas salas, muy cuidadas: cerámica moche y nazca, oro y plata de las culturas anteriores a los incas.",
        come: "A pie desde la Plaza de Armas, en la plazoleta Nazarenas. Tiene entrada propia.",
        quando: "Por la tarde o por la noche.",
        tempo: "1 hora",
        lat: -13.51491,
        lng: -71.97735,
        consiglio: "Quien no pase por Lima o no tenga tiempo para el Museo Larco encuentra aquí lo esencial.",
      },
      {
        nome: "Iglesia y mirador de San Cristóbal",
        testo: "La pequeña iglesia en la colina al norte de la plaza, con un atrio asomado a todo Cusco. Al lado quedan los muros del palacio de Manco Cápac, el Colcampata. Es el mirador de la ciudad más cercano al centro.",
        come: "A pie cuesta arriba desde la Plaza de Armas por la Cuesta del Almirante o en taxi; está en el camino a Sacsayhuamán.",
        quando: "Al atardecer, cuando la ciudad se ilumina.",
        tempo: "30 minutos",
        lat: -13.51343,
        lng: -71.9802,
      },
      {
        nome: "Q'enqo",
        testo: "Un santuario inca tallado en un gran afloramiento de roca, con canales en zigzag, hornacinas y una cueva con un altar que se cree usado para ritos y momificaciones. Es el sitio más cercano a Sacsayhuamán y el más misterioso del circuito.",
        come: "A 1 km de Sacsayhuamán, en la carretera a Pisac: a pie o en taxi. Incluido en el Boleto Turístico.",
        quando: "Justo después de Sacsayhuamán, por la mañana.",
        tempo: "30-45 minutos",
        costo: "incluido en el Boleto Turístico (130 soles, unos 33 €, 2026)",
        lat: -13.51056,
        lng: -71.97167,
      },
      {
        nome: "Cristo Blanco",
        testo: "La estatua blanca de Cristo con los brazos abiertos, regalada a la ciudad en 1945, en la colina junto a Sacsayhuamán. Desde aquí se tiene la vista más amplia de Cusco y del valle.",
        come: "En taxi o a pie desde la parte alta de San Blas o desde Sacsayhuamán, 10 minutos. Es un espacio abierto.",
        quando: "Al atardecer, o de noche para ver la ciudad iluminada.",
        tempo: "30 minutos",
        costo: "entrada libre",
        lat: -13.51042,
        lng: -71.97622,
      },
      {
        nome: "Tambomachay y Puka Pukara",
        testo: "Dos pequeños sitios uno frente al otro, en la carretera a Pisac. Tambomachay, el «baño del inca», tiene fuentes y canales de piedra que aún funcionan; Puka Pukara era un puesto de control y descanso en el camino al Valle Sagrado.",
        come: "En taxi desde Cusco, unos 8 km, o con los buses hacia Pisac. Muchos bajan luego a pie hasta Q'enqo y Sacsayhuamán, cuesta abajo.",
        quando: "Por la mañana, antes de los grupos del city tour de la tarde.",
        tempo: "1 hora para los dos",
        costo: "incluido en el Boleto Turístico (130 soles, unos 33 €, 2026)",
        lat: -13.48083,
        lng: -71.96472,
        consiglio: "Subir en taxi hasta Tambomachay y bajar a pie pasando por Puka Pukara, Q'enqo y Sacsayhuamán: se hace todo el circuito sin esfuerzo de subida.",
      },
      {
        nome: "Montaña de Siete Colores (Vinicunca)",
        testo: "La montaña a rayas ocre, rosa y turquesa, por encima de los 5.000 metros. Excursión de un día desde Cusco, con una caminata final en altura dura para el aliento más que por la distancia.",
        come: "Excursión de un día con salida de madrugada desde Cusco, unas horas de carretera y una caminata cuesta arriba. Se va con agencia.",
        quando: "Temporada seca. Salida antes del amanecer para encontrar menos gente.",
        tempo: "Día completo",
        costo: "entrada a Vinicunca unos 25-30 soles (unos 7 €) en efectivo, pagada a la comunidad; el tour desde Cusco se paga aparte (2026)",
        lat: -13.87023,
        lng: -71.30295,
        consiglio: "Hazla tras algunos días de aclimatación. Rick también hizo la laguna Humantay y otras lagunas de la zona, siempre después de acostumbrarse a la altura.",
      },
      {
        nome: "Laguna Humantay",
        testo: "Un lago turquesa a unos 4.200 metros, al pie del glaciar del Nevado Humantay, en la ruta del trek del Salkantay. La subida desde el aparcamiento de Soraypampa es corta pero empinada y en altura.",
        come: "Excursión de un día con salida de madrugada desde Cusco: unas 3 horas de carretera hasta Soraypampa, luego 1-1,5 horas de subida. Hay caballos para buena parte de la subida.",
        quando: "Temporada seca, de mayo a septiembre; llegar temprano, antes de que las nubes cubran la montaña.",
        tempo: "Día completo",
        costo: "entrada aparte del tour, a aclarar con la agencia",
        lat: -13.37955,
        lng: -72.58466,
        consiglio: "Mejor tras unos días de aclimatación, como la Montaña de Siete Colores; capas de abrigo, protector solar y agua.",
      },
    ],
    programmi: [
      {
        titolo: "1 día",
        tappe: [
          "Mañana: Plaza de Armas, Catedral e iglesia de la Compañía",
          "Qorikancha y almuerzo en el mercado de San Pedro",
          "Tarde: San Blas y la Piedra de los Doce Ángulos",
          "Atardecer en el mirador de San Cristóbal",
          "Noche: cena ligera y a la cama temprano, estás en altura",
        ],
      },
      {
        titolo: "2 días",
        tappe: [
          "Día 1: plaza, San Blas y mercado, todo tranquilo, té de coca y nada de alcohol",
          "Día 2 mañana: Qorikancha y Museo Inka",
          "Día 2 tarde: taxi hasta Tambomachay, luego a pie cuesta abajo por Puka Pukara, Q'enqo y Sacsayhuamán",
          "Día 2 atardecer: Cristo Blanco y bajada hacia San Blas",
        ],
      },
      {
        titolo: "3 días",
        tappe: [
          "Días 1-2 como en el programa de 2 días",
          "Día 3: Museo de Arte Precolombino y últimos paseos por la ciudad, luego noche ya en el Valle Sagrado (más bajo)",
          "Como alternativa, bien aclimatados: Montaña de Siete Colores o laguna Humantay en el día",
        ],
      },
    ],
    zone: [
      {
        nome: "Centro histórico y Plaza de Armas",
        perChi: "Quien llega y quiere todo a pie",
        testo: "La zona más cómoda para restaurantes, agencias y transporte. De noche es animada y algo ruidosa; cuidado con los carteristas en las calles más turísticas.",
        fascia: "40-150 €",
      },
      {
        nome: "San Blas",
        perChi: "Quien busca ambiente y talleres",
        testo: "El barrio más bonito, con callejones y cafés. Todo en subida, y en los primeros días en altura las escaleras pesan mucho.",
        fascia: "40-130 €",
      },
      {
        nome: "Zona de San Pedro y Santa Ana",
        perChi: "Quien quiere ahorrar",
        testo: "Alojamientos más baratos cerca del mercado y de la terminal de buses. Menos pintoresca, pero la plaza queda a pie.",
        fascia: "25-60 €",
      },
      {
        nome: "Valle Sagrado (Urubamba y Ollantaytambo)",
        perChi: "quien quiere aclimatarse más abajo",
        testo: "Pueblos a unos 2.800-2.900 metros, 600 por debajo de Cusco: se duerme mejor y ya se está en el camino a Machu Picchu. Desde aquí Cusco queda a hora y media.",
        fascia: "50-250 €",
      },
    ],
    sapori: [
      {
        "nome": "Cuy",
        "testo": "Conejillo de indias asado o frito, plato de fiesta andino. Se come en los restaurantes típicos del centro y en las picanterías fuera de la ciudad."
      },
      {
        "nome": "Alpaca a la parrilla",
        "testo": "Carne magra, parecida a una ternera delicada. Se encuentra en casi todos los restaurantes del centro."
      },
      {
        "nome": "Chicharrón",
        "testo": "Trozos de cerdo fritos servidos con maíz y papas, típico del fin de semana."
      },
      {
        "nome": "Mate de coca",
        "testo": "Infusión de hojas de coca, ofrecida en casi todos los alojamientos. Se bebe todo el día en los primeros días en altura."
      },
      {
        "nome": "Menú del día",
        "testo": "Sopa, segundo y bebida a precio fijo bajo. El mejor lugar para probarlo es el mercado de San Pedro."
      }
    ],
    attenzioni: [
      "Taxis informales en el aeropuerto y en todas partes: usa solo taxis reservados o apps. Es uno de los puntos donde más se dan robos.",
      "Cambistas callejeros que pasan billetes falsos o fuera de circulación: cambia solo en banco o en una casa de cambio autorizada.",
      "Carteristas en las zonas turísticas concurridas y en el mercado de San Pedro: bolso por delante, sin el teléfono en la mano.",
      "Mal de altura (soroche): dos días de calma real antes de cualquier trek, sin alcohol el primer día.",
      "Buses de larga distancia: usa solo las compañías principales, sobre todo de noche."
    ],
    gite: [
      {
        nome: "Pisac y el Valle Sagrado",
        distanza: "1 hora en coche aprox., 33 km",
        come: "Colectivo o bus desde el centro, taxi, o tour de un día que combina Pisac, Urubamba y Ollantaytambo.",
        testo: "Las terrazas y la ciudadela inca sobre el pueblo de Pisac, el mercado artesanal abajo y el valle del Urubamba. Las ruinas de Pisac están incluidas en el Boleto Turístico.",
      },
      {
        nome: "Chinchero, Moray y Maras",
        distanza: "1-1,5 horas en coche, unos 50 km",
        come: "Coche con conductor o tour de medio día; en transporte público es incómodo.",
        testo: "La iglesia y las tejedoras de Chinchero, las terrazas circulares de Moray y los miles de pozas de las salineras de Maras, que tienen entrada aparte de unos 20 soles en efectivo.",
      },
      {
        nome: "Machu Picchu",
        distanza: "3,5-4 horas entre coche y tren",
        come: "Coche o bus hasta Ollantaytambo, tren PeruRail o IncaRail hasta Aguas Calientes, luego bus lanzadera hasta la entrada.",
        testo: "Factible en el día pero larguísima: mejor dormir en Aguas Calientes y entrar en el primer turno. Entradas solo en tuboleto.cultura.pe, con mucha antelación.",
      },
      {
        nome: "Tipón y Andahuaylillas",
        distanza: "40-50 minutos en coche, unos 25-40 km",
        come: "Taxi o coche para medio día hacia el sureste, en la carretera a Puno.",
        testo: "Los canales de agua incas aún en funcionamiento de Tipón y la iglesia de Andahuaylillas, llamada la «Capilla Sixtina de los Andes» por sus muros pintados. Medio día lejos de los grupos.",
      },
    ],
    faq: [
      {
        domanda: "¿Cuántos días hacen falta en Cusco?",
        risposta: "Al menos tres: uno solo para aclimatarse, uno para el Qorikancha y los sitios sobre la ciudad, uno para museos o una excursión. Con el Valle Sagrado y Machu Picchu se llega fácilmente a 5-6 días en la zona.",
      },
      {
        domanda: "¿Cómo evitar el mal de altura en Cusco?",
        risposta: "El primer día se camina despacio, se bebe mucho, se evita el alcohol y se come ligero; el mate de coca ayuda. Quien pueda duerme las primeras noches en el Valle Sagrado, 600 metros más abajo, y deja para después las excursiones por encima de 4.000 metros.",
      },
      {
        domanda: "¿Compensa el Boleto Turístico del Cusco?",
        risposta: "Casi siempre: por unos 130 soles cubre durante 10 días Sacsayhuamán, Q'enqo, Tambomachay, Pisac, Ollantaytambo, Moray y varios museos. No incluye el Qorikancha, la Catedral, las salineras de Maras ni Machu Picchu.",
      },
      {
        domanda: "¿Mejor dormir en Cusco o en el Valle Sagrado?",
        risposta: "En Cusco por los museos, los restaurantes y la noche; en el Valle Sagrado para aclimatarse mejor y acercarse a Machu Picchu. Muchos reparten las noches entre los dos.",
      },
      {
        domanda: "¿Montaña de Siete Colores o laguna Humantay?",
        risposta: "La Montaña de Siete Colores supera los 5.000 metros y es más dura; Humantay es más corta y menos concurrida. Las dos requieren unos días de aclimatación y salir antes del amanecer.",
      },
      {
        domanda: "¿Cuándo ir a Cusco?",
        risposta: "De mayo a septiembre, la temporada seca, con días despejados y noches frías. En torno al 24 de junio, por el Inti Raymi, la ciudad está llena y el alojamiento se reserva con mucha antelación.",
      },
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: "Una vendedora con sombrero levanta una bandeja de mazorcas delante de la catedral de Cusco, en la Plaza de Armas",
    immagine: '/images/peru/cusco-plaza-de-armas-venditrice-riccardo.jpg',
  },
  {
    slug: 'valle-sacra',
    paeseSlug: 'peru',
    ordine: 2,
    nome: 'Valle Sagrado de los Incas',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: "2-3 días, mejor durmiendo allí que haciéndolo en el día desde Cusco",
    visitataPersonalmente: true,
    introduzione:
      "El valle del río Urubamba entre Cusco y Machu Picchu: terrazas, salinas todavía en uso desde los tiempos de los incas, pueblos de tejedores y la fortaleza de Ollantaytambo, de donde salen los trenes.",
    percheAndarci:
      "Está 500-600 metros más abajo que Cusco, así que es el lugar adecuado para aclimatarse durmiendo mejor, y está llena de sitios que casi nadie visita con calma porque todos corren a Machu Picchu.",
    cosaVedere: [
      "Ollantaytambo, el único asentamiento inca todavía habitado según el trazado original, con la fortaleza de terrazas sobre el pueblo",
      "Las salinas de Maras, miles de pozas blancas excavadas en la ladera de la montaña",
      "Moray, las terrazas circulares concéntricas usadas por los incas como laboratorio agrícola",
      "El mercado y el sitio arqueológico de Pisac",
      "Chinchero, por el tejido tradicional",
    ],
    cosaFare: [
      "Dormir en Ollantaytambo la noche antes del tren a Machu Picchu: se gana una hora larga de sueño respecto a salir desde Cusco",
      "Paseo en bici o quad entre Maras y Moray",
      "Rafting en el Urubamba o parapente sobre el valle",
      "Taller de tejido con una cooperativa de mujeres en Chinchero",
    ],
    doveDormire:
      "Ollantaytambo es la opción más estratégica para el tren; Urubamba tiene los alojamientos más confortables; Pisac es la más tranquila y alternativa.",
    doveMangiare:
      "En el valle se come mejor en los restaurantes de campo con vistas a las terrazas que en los locales turísticos de Pisac. Para buscar, la trucha de los ríos de la zona y el clásico menú del día, que a mediodía cuesta poquísimo y es lo que comen los locales.",
    comeArrivare: "1 h 30 aprox. en coche de Cusco a Ollantaytambo; colectivos frecuentes y económicos desde la calle Pavitos en Cusco.",
    comeSpostarsi: "Coche con conductor o tour organizado para cubrir Maras, Moray y Pisac en una jornada; colectivos entre los pueblos principales.",
    periodoMigliore: "mayo-septiembre; en la estación de lluvias los caminos de tierra hacia Maras se vuelven difíciles",
    costi: "la mayoría de los sitios está incluida en el Boleto Turístico; las salinas de Maras tienen una entrada aparte, que se paga en efectivo en el acceso",
    erroriDaEvitare: [
      "Comprimir Valle Sagrado y Machu Picchu en una única jornada a la carrera: es el error clásico que le quita sentido a ambas",
      "Dormir en Cusco la noche antes del tren de las 5 o las 6 de la mañana desde Ollantaytambo",
    ],
    miaEsperienza:
      "Está quinientos metros más abajo que Cusco, y a partir de aquí se duerme mejor. El primer día Pisac, con el mercado y el sitio en la colina, luego Ollantaytambo, donde dormimos para estar listos para el tren de la mañana a Machu Picchu. El pueblo da lo mejor de sí por la noche, cuando los autocares de los tours se han ido y vuelve a sus habitantes. Al día siguiente el resto del valle: las salinas de Maras, pozas excavadas en la montaña y usadas durante generaciones por las mismas familias, las terrazas circulares de Moray y Chinchero, por el tejido. Es la parada que hay que alargar si se tiene un día más, y es la que casi todos sacrifican por correr a Machu Picchu.",
    luoghi: [
      {
        "nome": "Pisac",
        "testo": "Un pueblo con un mercado artesanal y, en la colina, un sitio inca con terrazas y el barrio ceremonial. El sitio recibe menos visitas que Machu Picchu y se recorre casi a solas.",
        "come": "Desde Cusco en colectivo o coche. El sitio arqueológico está incluido en el Boleto Turístico; el mercado está en el pueblo.",
        "quando": "Temprano para el sitio, luego el mercado. Hay mercado martes, jueves y domingo; el más grande es el domingo.",
        "tempo": "Medio día",
        "consiglio": "Si solo tienes un día, ve al sitio por la mañana y baja al mercado para almorzar."
      },
      {
        "nome": "Ollantaytambo",
        "testo": "Un pueblo con una trama de calles de origen inca y algunas de las viviendas habitadas sin interrupción más antiguas de Sudamérica, bajo una fortaleza en terrazas. De aquí sale la mayoría de los trenes a Machu Picchu.",
        "come": "En coche o colectivo desde Cusco, unos 72 km de carretera. Se visita a pie. El sitio está incluido en el Boleto Turístico.",
        "quando": "El sitio por la mañana; el pueblo luce más de noche, cuando los buses de los tours se han ido.",
        "tempo": "2-3 horas para el sitio, una noche para el pueblo",
        "consiglio": "Duerme aquí la noche antes del tren a Machu Picchu: duermes más que saliendo desde Cusco.",
        "url": "https://cosituccusco.pe/tarifario/"
      },
      {
        "nome": "Salineras de Maras",
        "testo": "Muchísimos pozos blancos excavados en la ladera, alimentados por un manantial salado y trabajados durante generaciones por las mismas familias.",
        "come": "En coche con conductor o en tour, a menudo junto con Moray. Se camina por el borde de las pozas donde está permitido.",
        "quando": "Mañana o última hora de la tarde, cuando la sal es más blanca.",
        "tempo": "1 hora",
        "costo": "Entrada aparte, no incluida en el Boleto Turístico: se paga en efectivo en el acceso",
        "consiglio": "Los caminos de tierra hacia Maras se vuelven difíciles en la estación de lluvias."
      },
      {
        "nome": "Moray",
        "testo": "Terrazas circulares concéntricas, una especie de anfiteatro: los Incas las usaban como laboratorio agrícola, con diferencias de temperatura entre niveles.",
        "come": "En coche o bici desde Maras. Incluido en el Boleto Turístico.",
        "quando": "Todo el día; la luz de la mañana es la mejor.",
        "tempo": "45 minutos",
        "consiglio": "El paseo en bici o cuatriciclo entre Maras y Moray es una buena alternativa al coche."
      },
      {
        "nome": "Chinchero",
        "testo": "Un pueblo de tejedoras sobre el valle, con terrazas incas y la iglesia colonial de Nuestra Señora de la Natividad.",
        "come": "Desde Cusco, en la carretera al valle. Sitio incluido en el Boleto Turístico.",
        "quando": "Mañana.",
        "tempo": "1-2 horas",
        "consiglio": "Un taller de tejido con una cooperativa de mujeres vale más que las tiendas turísticas."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: Pisac (sitio y mercado)",
          "Almuerzo en Urubamba",
          "Tarde: Ollantaytambo",
          "Regreso a Cusco o noche allí"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Chinchero, Moray, Maras, luego noche en Ollantaytambo",
          "Día 2: Pisac por la mañana, o tren a Machu Picchu desde Ollantaytambo"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Pisac y noche en Pisac o Urubamba",
          "Día 2: Chinchero, Moray, Maras, noche en Ollantaytambo",
          "Día 3: Ollantaytambo y tren a Aguas Calientes"
        ]
      }
    ],
    zone: [
      {
        "nome": "Ollantaytambo",
        "perChi": "Quien toma el tren a Machu Picchu",
        "testo": "La opción más estratégica: estación a pie, callejones incas y poca gente de noche. Pequeña, con menos oferta de locales."
      },
      {
        "nome": "Urubamba",
        "perChi": "Quien busca comodidad y centralidad",
        "testo": "El pueblo con los alojamientos más cómodos y a menudo más espacio, a mitad del valle. Menos carácter."
      },
      {
        "nome": "Pisac",
        "perChi": "Quien quiere tranquilidad y ambiente alternativo",
        "testo": "Más tranquila y con escena artesana, pero más lejos del tren. El mercado del domingo trae mucha gente."
      }
    ],
    sapori: [
      {
        "nome": "Trucha",
        "testo": "Trucha de los ríos de la zona, a la parrilla o frita. Se come en los restaurantes campestres del valle."
      },
      {
        "nome": "Menú del día",
        "testo": "Al mediodía cuesta muy poco y es lo que come la gente local."
      },
      {
        "nome": "Chicha morada y chicha de jora",
        "testo": "La primera es una bebida de maíz morado sin alcohol, la segunda una cerveza de maíz fermentado. Se encuentran en pueblos y mercados."
      },
      {
        "nome": "Maíz cancha y choclo con queso",
        "testo": "Maíz tostado y mazorcas grandes con queso fresco, tentempié callejero y de mesa en todo el valle."
      }
    ],
    attenzioni: [
      "No comprimas el Valle Sagrado y Machu Picchu en un solo día: ambos pierden sentido.",
      "Tours baratos con largas paradas en tiendas turísticas: pregunta antes qué sitios incluyen.",
      "Caminos de tierra hacia Maras y Moray difíciles en la estación de lluvias.",
      "Tren a Machu Picchu: los asientos se agotan con semanas de antelación en los meses de temporada alta."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: "Miles de pozas de sal de Maras que bajan escalonadas por la ladera del Valle Sagrado",
    immagine: '/images/peru/saline-maras-riccardo.jpg',
  },
  {
    slug: 'machu-picchu',
    paeseSlug: 'peru',
    ordine: 3,
    nome: 'Machu Picchu',
    tipologia: ['cultura', 'trekking'],
    giorniConsigliati: "2 días (una noche en Aguas Calientes) para entrar en la apertura sin prisas",
    visitataPersonalmente: true,
    introduzione:
      "La ciudadela inca del siglo XV suspendida entre las montañas, y el destino con el sistema de acceso más regulado de toda Sudamérica: cupos diarios, franjas horarias fijas, circuitos obligados y entradas extra con número muy reducido para las cimas.",
    percheAndarci:
      "Porque es lo que promete ser, y porque la forma de llegar cambia todo el viaje: llegar en tren o tras cuatro días de caminata a través de la Puerta del Sol son dos experiencias distintas.",
    cosaVedere: [
      "El Intihuatana, la piedra ritual ligada a la observación solar, uno de los pocos supervivientes a la destrucción colonial",
      "El Templo del Sol y el Recinto Real, donde la mampostería inca alcanza el máximo nivel",
      "Las terrazas agrícolas, con las perspectivas fotográficas clásicas",
      "Huayna Picchu, la cima que sirve de fondo a las fotos: subida empinada con entrada aparte",
      "Intipunku, la Puerta del Sol, punto de llegada del Camino Inca",
    ],
    cosaFare: [
      "Elegir el circuito adecuado en el momento de la reserva: los recorridos están numerados y son vinculantes, no se circula libremente por el sitio",
      "Añadir la subida al Huayna Picchu o a la Montaña Machu Picchu, ambas con cupo aparte y muy limitado",
      "Dormir en Aguas Calientes para entrar en el primer turno, cuando el sitio está más vacío",
    ],
    confronti: [
      {
        titolo: "Cómo llegar a Machu Picchu: todas las opciones comparadas",
        introduzione:
          "No existe una carretera que llegue a Machu Picchu: se llega solo en tren, a pie, o con una combinación de las dos cosas. La elección pesa en el presupuesto mucho más que la entrada, que cuesta relativamente poco. Todas las opciones convergen en Aguas Calientes (Machu Picchu Pueblo), desde donde se sube con el autobús lanzadera en 25 minutos o a pie en 1 h 30-2 h.",
        opzioni: [
          {
            nome: "Tren desde Ollantaytambo o Cusco",
            sintesi:
              "La vía clásica: tren PeruRail o IncaRail hasta Aguas Calientes, luego autobús lanzadera hasta la entrada. Las salidas desde Ollantaytambo son más numerosas y más económicas que las de Cusco/Poroy.",
            costo: "tren 70-500 $ ida y vuelta según la clase (Expedition/Voyager las económicas, Vistadome panorámico, Hiram Bingham de lujo), más 24 $ de autobús lanzadera I/V y la entrada al sitio (152 soles para extranjeros adultos en los circuitos sin montaña, 2026)",
            durata: "1 día desde Ollantaytambo, mejor 2 con noche en Aguas Calientes",
            pro: [
              "No requiere preparación física, apto para todos",
              "Tiempos seguros y previsibles, útil si se tienen pocos días",
              "Permite dormir en Aguas Calientes y entrar en el primer turno",
            ],
            contro: [
              "Con diferencia la opción más cara",
              "Las plazas del tren se agotan con semanas de antelación en los meses punta",
              "Cero sensación de llegada «progresiva»: se pasa del vagón a la ciudadela en pocas horas",
            ],
            perChi: "Quien tiene poco tiempo, viaja con niños o no quiere afrontar un trek en altura.",
          },
          {
            nome: "Camino Inca clásico (4 días)",
            sintesi:
              "El trek histórico por la vía empedrada original, con llegada a Machu Picchu a través de Intipunku, la Puerta del Sol, al amanecer del último día. Obligatorio ir con una agencia autorizada: no se puede recorrer por cuenta propia.",
            costo: "unos 600-900 $ por persona, todo incluido (permiso, guía, porteadores, campamento, comidas, tren de vuelta)",
            durata: "4 días, 3 noches",
            pro: [
              "La llegada por la Puerta del Sol es la forma en que el sitio estaba pensado para ser visto",
              "Sitios incas a lo largo del recorrido que ninguna otra vía toca",
              "Todo organizado: porteadores, cocinero, tiendas",
            ],
            contro: [
              "Los permisos tienen cupo y se agotan incluso 5-6 meses antes, sobre todo para los meses de mayo a agosto",
              "Cerrado todo febrero por mantenimiento",
              "Paso Warmiwañusca a 4.215 metros: hace falta aclimatación de verdad",
            ],
            perChi: "Quien quiere la experiencia histórica completa y puede reservar con muchos meses de antelación.",
          },
          {
            nome: "Camino Inca corto (2 días)",
            sintesi:
              "Versión reducida que parte del km 104 del ferrocarril y cubre el último tramo del sendero original, con llegada a la Puerta del Sol por la tarde y visita del sitio al día siguiente.",
            costo: "unos 400-550 $ por persona",
            durata: "2 días, 1 noche (en Aguas Calientes, no en tienda)",
            pro: [
              "Se llega igualmente por Intipunku, como en el recorrido clásico",
              "Mucho menos exigente, se duerme en hotel",
              "Permisos más fáciles de encontrar que para el clásico",
            ],
            contro: [
              "Requiere igualmente un permiso con cupo cerrado",
              "Se pierde gran parte del recorrido y de los sitios intermedios",
            ],
            perChi: "Quien quiere la llegada por la Puerta del Sol sin cuatro días de campamento en altura.",
          },
          {
            nome: "Trek del Salkantay (4-5 días)",
            sintesi:
              "La alternativa más popular al Camino Inca: paso a 4.630 metros bajo el glaciar Salkantay, luego descenso hacia el bosque nuboso y llegada a Aguas Calientes vía Hidroeléctrica.",
            costo: "unos 350-600 $ por persona según el nivel de los campamentos",
            durata: "4-5 días",
            pro: [
              "Sin permisos con cupo cerrado: se puede reservar incluso pocos días antes",
              "Paisajes más variados que el Camino Inca, del glaciar a la jungla",
              "Cuesta bastante menos",
            ],
            contro: [
              "El paso es más alto que el del Camino Inca: la altitud se nota",
              "No se llega por la Puerta del Sol sino desde abajo, como quien llega en tren",
            ],
            perChi: "Quien quiere un trek exigente y panorámico sin depender de los permisos.",
          },
          {
            nome: "Vía Hidroeléctrica (autobús + caminata)",
            sintesi:
              "La opción low cost: minibús desde Cusco hasta la central de Hidroeléctrica, luego 2-3 horas de caminata llana por las vías hasta Aguas Calientes.",
            costo: "unos 30-60 $ ida y vuelta por el transporte",
            durata: "2 días (6-7 horas de carretera por trayecto más la caminata)",
            pro: [
              "Con diferencia la vía más económica para llegar al sitio",
              "La caminata final por el ferrocarril es agradable y llana",
            ],
            contro: [
              "La carretera es larga, tortuosa y en algunos tramos expuesta: no es un trayecto cómodo",
              "En la estación de lluvias son frecuentes los desprendimientos y las interrupciones",
              "Jornada muy larga, con salida antes del amanecer",
            ],
            perChi: "Quien viaja con presupuesto reducido y tiene un día más que gastar.",
          },
          {
            nome: "Inca Jungle Trek (3-4 días)",
            sintesi:
              "Fórmula de aventura que combina descenso en mountain bike, rafting, tirolina y caminata, con llegada final a Aguas Calientes.",
            costo: "unos 250-450 $ por persona según las actividades incluidas",
            durata: "3-4 días",
            pro: [
              "La forma más divertida de llegar si se busca adrenalina más que arqueología",
              "No se requiere ningún permiso",
              "Altitudes más bajas que en los demás treks: menos problemas de altura",
            ],
            contro: [
              "Poco contenido histórico-arqueológico a lo largo del recorrido",
              "La calidad de las bicis y del equipo varía mucho de un operador a otro",
            ],
            perChi: "Quien es joven por dentro, busca actividades y no le interesa el camino histórico.",
          },
        ],
        raccomandazione:
          "Con fechas fijas y poco tiempo, tren desde Ollantaytambo con noche en Aguas Calientes: se entra en el primer turno y se evita la carrera. Con 4-5 días y ganas de caminar, el Salkantay da más paisaje por menos dinero y sin la ansiedad de los permisos. El Camino Inca clásico solo merece la pena si se puede decidir (y reservar) con al menos cinco o seis meses de antelación.",
      },
    ],
    doveDormire:
      "Aguas Calientes (Machu Picchu Pueblo) es la única base que permite entrar en el primer turno sin depender del primer tren del día; como alternativa Ollantaytambo o el Valle Sagrado para una visita en el día.",
    doveMangiare:
      "Aguas Calientes vive del turismo y los precios lo demuestran: los restaurantes de la calle principal son caros y mediocres, mejor bajar hacia el mercado para comer a una fracción del precio. Conviene de todos modos llevarse agua y algo de comer para la visita, porque dentro del sitio no se puede consumir comida.",
    comeArrivare: "Véase la comparación de arriba: tren, trek o vía Hidroeléctrica, todas con llegada a Aguas Calientes.",
    comeSpostarsi:
      "De Aguas Calientes a la entrada del sitio: autobús lanzadera Consettur, unos 25 minutos y 24 $ ida y vuelta, o 1 h 30-2 h a pie cuesta arriba. Dentro del sitio se circula solo por el circuito asignado.",
    periodoMigliore:
      "mayo-septiembre por los cielos despejados, pero es también el periodo en el que todo se agota antes. Abril y octubre son un buen compromiso entre clima y afluencia",
    costi:
      "Entrada para extranjeros adultos (2026): 152 soles en los circuitos sin montaña, 200 soles en las rutas con Huayna Picchu, la Montaña Machu Picchu o la Gran Caverna. Desde el 1 de mayo de 2026 se anunció una subida de 11 soles para extranjeros adultos: comprueba la cifra final al comprar. Hay tres circuitos y diez rutas, con aforo diario (4.500 entradas al día, 5.600 en temporada alta). El único vendedor oficial es el portal del Ministerio de Cultura, tuboleto.cultura.pe: todo lo demás son revendedores con recargo.",
    erroriDaEvitare: [
      "Reservar tarde: para el Huayna Picchu hacen falta 2-3 meses de antelación en cualquier temporada, 3-4 en los meses punta, y las plazas se agotan rápido",
      "Comprar las entradas a revendedores no oficiales a precios inflados en lugar de en tuboleto.cultura.pe",
      "Elegir el circuito sin leer qué incluye: los recorridos son vinculantes y algunos no pasan por los puntos que se dan por descontados",
      "Llegar a Cusco y subir a Machu Picchu al día siguiente, sin aclimatación",
    ],
    miaEsperienza:
      "El momento que me llevo de Perú es Machu Picchu al amanecer. Entrar entre los primeros, cuando la ciudadela está todavía casi vacía, compensa el despertador en la oscuridad y el camino para llegar: el consejo que vale más que todos es dormir en Aguas Calientes y entrar en el primer turno, más que por la luz por esos cuarenta minutos en los que el lugar todavía está en silencio. He llegado de varias maneras: con un trekking de cinco días, con la furgoneta hasta Hidroeléctrica y luego a pie, y en tren, en clase económica. Hice también el Huayna Picchu: es precioso, pero hay que reservar con tiempo y quien sufre de vértigo debe pensárselo bien. Conviene saber de antemano que no se circula libremente: el circuito elegido en el momento de la reserva decide lo que se verá y lo que no.",
    luoghi: [
      {
        "nome": "La ciudadela y los circuitos de visita",
        "testo": "El complejo inca del siglo XV con terrazas agrícolas, el Templo del Sol, el Recinto Real y el Intihuatana, la piedra ritual ligada al sol.",
        "come": "Se llega a Aguas Calientes en tren o a pie, luego bus o subida a pie. Dentro del sitio el recorrido es obligatorio: el circuito se elige al comprar y no se puede ir libremente. Las normas sobre guía y circuitos están en el portal oficial.",
        "quando": "El primer turno es el más tranquilo y compensa el madrugón. La temporada seca es también la que agota antes las entradas.",
        "tempo": "3-4 horas",
        "costo": "152 soles para extranjeros adultos en los circuitos sin montaña (2026). Comprueba la tarifa actual en el portal oficial, el único donde comprar",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "Duerme en Aguas Calientes para entrar en el primer turno. Lleva agua y un tentempié para comer antes de entrar."
      },
      {
        "nome": "Huayna Picchu",
        "testo": "La cumbre que aparece al fondo de las fotos, con una subida empinada por escalones de piedra y tramos expuestos. Desde arriba se ve la ciudadela desde lo alto.",
        "come": "Entrada aparte con horarios fijos y plazas muy limitadas. La subida parte desde dentro del sitio: tómatela con calma, es empinada.",
        "quando": "Horarios de mañana. Reserva con mucha antelación, sobre todo en temporada alta.",
        "tempo": "2-3 horas",
        "costo": "Aparte de la entrada solo a la ciudadela: tarifa en el portal oficial",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "Rick lo hizo: es precioso, pero quien sufra de vértigo debe pensarlo bien."
      },
      {
        "nome": "Montaña Machu Picchu",
        "testo": "La montaña detrás de la ciudadela, alternativa al Huayna Picchu, con una vista más amplia y un recorrido más largo pero menos expuesto.",
        "come": "Entrada aparte de cupo limitado, mismas reglas de reserva que Huayna Picchu. La subida parte desde el sitio.",
        "quando": "Franjas horarias por la mañana; reserva con mucha antelación.",
        "tempo": "3-4 horas de subida y bajada",
        "costo": "Aparte de la entrada solo a la ciudadela: tarifa en el portal oficial",
        "url": "https://tuboleto.cultura.pe/",
        "consiglio": "Si el Huayna Picchu está agotado o temes los tramos expuestos, esta es la alternativa."
      },
      {
        "nome": "Intipunku, la Puerta del Sol",
        "testo": "El paso desde el que quien hace el Camino Inca ve por primera vez la ciudadela al amanecer. También se puede alcanzar con una caminata desde el sitio.",
        "come": "Caminata cuesta arriba desde dentro del sitio, por el sendero original.",
        "quando": "Amanecer para quien llega por el Camino Inca; para los demás, la mañana.",
        "tempo": "1,5-2 horas ida y vuelta",
        "consiglio": "Ofrece una vista distinta y casi vacía. Pregunta en la entrada si tu circuito incluye el tramo."
      },
      {
        "nome": "Aguas Calientes (Machu Picchu Pueblo)",
        "testo": "El pueblo base de toda la visita, construido alrededor de las vías. Tiene las aguas termales que le dan nombre y el mercado, pero vive del turismo y los precios lo muestran.",
        "come": "Solo en tren o a pie (ver la comparación de arriba). De aquí sale el bus lanzadera Consettur hacia el sitio.",
        "quando": "Se duerme una noche para entrar en el primer turno.",
        "tempo": "Una noche",
        "consiglio": "Baja hacia el mercado para comer por una fracción de los precios de la calle principal."
      },
      {
        "nome": "Cómo llegar: tren, Camino Inca, Salkantay, Hidroeléctrica",
        "testo": "El cómo pesa en el presupuesto más que la entrada. Rick llegó en tren, en clase económica, en minibús hasta Hidroeléctrica y luego a pie, y con un trekking de cinco días.",
        "come": "Tren PeruRail o IncaRail desde Ollantaytambo o Cusco; trek del Salkantay sin permisos con cupo; Camino Inca solo con agencia autorizada y permisos que se agotan con mucha antelación.",
        "quando": "El Camino Inca cierra en febrero. La temporada seca es la más solicitada.",
        "tempo": "De 1 día (tren) a 4-5 días (trek)",
        "consiglio": "Con fechas fijas: tren desde Ollantaytambo y noche en Aguas Calientes. Con 4-5 días, el Salkantay."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Tren temprano desde Ollantaytambo",
          "Bus lanzadera y visita guiada de 2-3 horas",
          "Regreso en tren por la tarde (día largo, tiempos ajustados)"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: tren a Aguas Calientes por la tarde, cena y a la cama temprano",
          "Día 2: primer bus de la mañana, entrada en el primer turno, Huayna Picchu si lo tienes, regreso en tren"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Valle Sagrado y noche en Ollantaytambo",
          "Día 2: tren, Machu Picchu en el primer turno",
          "Día 3: segunda mañana en el sitio o termas y regreso"
        ]
      }
    ],
    zone: [
      {
        "nome": "Aguas Calientes",
        "perChi": "Quien quiere el primer turno",
        "testo": "La única base que no depende del primer tren. Precios altos para lo que ofrece, ruido de las vías y de los locales."
      },
      {
        "nome": "Ollantaytambo",
        "perChi": "Quien toma el tren y quiere dormir en un pueblo de verdad",
        "testo": "Más tranquila y con callejones incas. El tren sale temprano, así que el despertador suena antes del amanecer."
      },
      {
        "nome": "Valle Sagrado (Urubamba)",
        "perChi": "Quien visita en el día y no quiere dormir a mucha altura",
        "testo": "Más bajo y cómodo, pero obliga a un día muy largo hasta el sitio."
      }
    ],
    sapori: [
      {
        "nome": "Menú del día en el mercado de Aguas Calientes",
        "testo": "Sopa y plato único por una fracción de los precios de los restaurantes de la calle principal."
      },
      {
        "nome": "Trucha",
        "testo": "Trucha de río, el plato más común en los menús locales."
      },
      {
        "nome": "Lomo saltado",
        "testo": "Ternera salteada con cebolla, tomate y papas fritas, servida con arroz. Se encuentra en todas partes."
      },
      {
        "nome": "Chicha morada",
        "testo": "Bebida dulce de maíz morado sin alcohol que acompaña casi todas las comidas."
      }
    ],
    attenzioni: [
      "Compra las entradas solo en tuboleto.cultura.pe: los revendedores aplican un recargo.",
      "El circuito elegido es vinculante: lee qué incluye antes de pagar.",
      "El sitio tiene cupos diarios y franjas horarias: sin reserva no se entra.",
      "No subas a Machu Picchu al día siguiente de llegar a Cusco: hace falta aclimatación.",
      "Buses largos y carreteras hacia Hidroeléctrica: sinuosas y con derrumbes en la estación de lluvias."
    ],
    esperienzeSlugs: ['huayna-picchu', 'cammino-inca'],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: "Una llama solitaria pasta en las terrazas incas de Machu Picchu envueltas en la niebla de la mañana",
    immagine: '/images/peru/machu-picchu-lama-terrazze-riccardo.jpg',
  },
  {
    slug: 'choquequirao',
    paeseSlug: 'peru',
    ordine: 4,
    nome: 'Choquequirao',
    tipologia: ['trekking', 'cultura', 'avventura'],
    giorniConsigliati: "4-5 días para la ida y vuelta clásica",
    visitataPersonalmente: false,
    immagine: '/images/peru/choquequirao.jpg',
    imageAlt: "Las terrazas incas de Choquequirao con las llamas de piedra blanca en los muros y un grupo de excursionistas en la terraza",
    introduzione:
      "La «hermana de Machu Picchu»: una ciudadela inca de dimensiones comparables, excavada solo en un tercio aproximadamente, encaramada sobre el cañón del Apurímac. Llegan menos de diez mil personas al año, frente al millón y medio de Machu Picchu, y el motivo es sencillo: no hay otra forma que caminar durante dos días.",
    percheAndarci:
      "Es el lugar donde se puede estar delante de ruinas incas de esa escala casi a solas, algo que en Machu Picchu no ocurre desde hace décadas. Y es una ventana que se está cerrando: desde hace años se habla de un teleférico que reduciría el acceso de dos días de caminata a veinte minutos.",
    cosaVedere: [
      "La plaza ceremonial y el sector de los usnu, la parte central de la ciudadela",
      "Las terrazas de las llamas, decoradas con figuras de llama de piedra blanca engastada",
      "El sector agrícola con las terrazas que bajan por la ladera de la montaña",
      "El cañón del Apurímac, uno de los más profundos del continente, que se cruza bajando y subiendo unos 1.500 metros por cada lado",
    ],
    cosaFare: [
      "El trek clásico de 4-5 días desde Cachora, ida y vuelta por el mismo camino (véase la ficha de experiencia dedicada)",
      "La travesía larga Choquequirao-Machu Picchu, 8-9 días, uno de los treks más duros y bonitos de Perú",
      "Quedarse dos noches en el sitio en lugar de una, para tener una jornada completa entre las ruinas sin el cansancio de la subida",
    ],
    doveDormire:
      "Camping a lo largo de todo el recorrido (Chiquisca, Santa Rosa, Marampata), con algunas familias que alquilan espacios y servicios básicos en Marampata, el pueblo más cercano al sitio.",
    doveMangiare: "Comidas preparadas por la propia organización del trek; en Marampata y Chiquisca se encuentra algo sencillo.",
    comeArrivare: "Desde Cusco unas 4 horas en coche hasta Cachora (región de Apurímac), el punto de partida del sendero.",
    comeSpostarsi: "Solo a pie. Se pueden alquilar mulas para el equipaje y, en algunos tramos, para quien tiene dificultades.",
    periodoMigliore:
      "de abril a octubre. En la estación de lluvias el sendero se vuelve peligroso por los desprendimientos y el calor en el cañón es pesado en cualquier periodo",
    costi:
      "Trek organizado, unos 400-700 $ por persona para 4-5 días con guía, mulas y comidas; por cuenta propia se gasta mucho menos, más la entrada al sitio, que se paga en el puesto de control.",
    confronti: [
      {
        titolo: "¿Ir ahora o esperar al teleférico?",
        introduzione:
          "El proyecto de un teleférico a Choquequirao existe desde 2011 y desde entonces se ha aplazado varias veces por razones técnicas, legales, ambientales y sociales. En 2026 sigue en fase de licitación, con el modelo de la asociación público-privada, y sin una fecha de construcción confirmada. Cambiaría del todo el lugar.",
        opzioni: [
          {
            nome: "Ir ahora, a pie",
            sintesi: "El trek de 4-5 días desde Cachora, como se hace hoy: dos días de caminata para llegar, con descenso y subida del cañón del Apurímac.",
            durata: "4-5 días",
            costo: "400-700 $ con agencia, mucho menos por cuenta propia",
            pro: [
              "Ruinas de escala monumental casi desiertas: hoy van unas 10.000 personas al año",
              "El recorrido en sí se considera más duro que el Camino Inca y que el Salkantay y es parte de la experiencia",
              "Ninguna infraestructura turística: el lugar sigue como era",
            ],
            contro: [
              "Físicamente exigente: unos 1.500 metros de desnivel en bajada y otros tantos en subida, dos veces, con calor fuerte en el fondo del valle",
              "Hace falta tiempo: 4-5 días como mínimo, difíciles de encajar en un itinerario corto",
            ],
            perChi: "Quien camina con gusto y quiere ver el lugar antes de que cambie.",
          },
          {
            nome: "Esperar al teleférico",
            sintesi:
              "El proyecto prevé más de 10 km de recorrido aéreo entre Kiuñalla (Apurímac) y Yanama (Cusco), con una inversión estimada en torno a los 261 millones de dólares.",
            durata: "20 minutos en lugar de dos días de caminata",
            pro: [
              "Haría el sitio accesible a cualquiera, con independencia de la forma física",
              "Tiempos compatibles con una visita en el día desde Cusco",
            ],
            contro: [
              "Ninguna fecha de construcción confirmada: la adjudicación se esperaba en el último trimestre de 2026 y el proyecto se retrasa desde hace más de una década",
              "La capacidad pasaría de unos 10.000 visitantes al año a más de un millón: sería otro lugar",
            ],
            perChi: "Quien no puede o no quiere afrontar cuatro días de trek en altura.",
          },
        ],
        raccomandazione:
          "Si se es capaz de caminar, ir ahora. Hoy el valor de Choquequirao está en las ruinas y también en que se llega con esfuerzo y se está casi a solas: justo lo que el teleférico eliminaría.",
      },
    ],
    erroriDaEvitare: [
      "Subestimarlo porque «es menos famoso que Machu Picchu»: los guías de Cusco lo consideran más duro tanto el Camino Inca como el Salkantay",
      "Llevar demasiado peso: el desnivel se nota muchísimo, las mulas para el equipaje valen cada sol gastado",
      "Ir en la estación de lluvias, cuando el sendero por la ladera del cañón se vuelve peligroso",
      "Programar una sola noche en el sitio: se llega cansado y se vuelve a salir enseguida, perdiendo el sentido del lugar",
    ],
    miaEsperienza:
      '',
    luoghi: [
      {
        "nome": "La ciudadela de Choquequirao",
        "testo": "Una ciudadela inca llamada la «ciudad hermana» de Machu Picchu por su estructura y arquitectura, excavada solo en parte (entre el 30 y el 40%). Llega poca gente, porque no hay otra forma que caminar.",
        "come": "Solo a pie desde Cachora, tras dos días de caminata. Se acampa cerca del sitio; guía recomendable.",
        "quando": "Temporada seca. En la temporada de lluvias el sendero es peligroso.",
        "tempo": "Una mañana o un día entero; mejor dos noches",
        "costo": "Entrada al sitio que se paga en el puesto de control antes de la ciudadela; tarifa en la web del Ministerio de Cultura",
        "consiglio": "Quédate dos noches para tener un día completo entre las ruinas sin el cansancio de la subida."
      },
      {
        "nome": "Las terrazas de las llamas",
        "testo": "Terrazas decoradas con figuras de llamas y otros camélidos en piedra blanca incrustada en el muro, el detalle más reconocible del sitio.",
        "come": "En el sector agrícola del sitio, a corta caminata desde la zona central.",
        "quando": "Temprano por la mañana, con la luz rasante sobre los muros.",
        "tempo": "30-60 minutos",
        "consiglio": "Lleva un teleobjetivo o acércate a los muros: las figuras son pequeñas."
      },
      {
        "nome": "El cañón del Apurímac",
        "testo": "Un cañón profundísimo: entre el sitio y el río hay unos 1.600 metros de desnivel, y el sendero los baja y los vuelve a subir, con mucho calor en el fondo.",
        "come": "El sendero parte de Cachora, baja hasta el río y sube hacia Marampata. Las etapas se hacen con campamentos en el camino.",
        "quando": "Sal al amanecer para evitar el calor en el fondo del valle.",
        "tempo": "2 días de caminata en cada sentido",
        "consiglio": "Los mulos para el equipaje valen cada sol: el desnivel se nota muchísimo."
      },
      {
        "nome": "Marampata y los campamentos en el sendero",
        "testo": "El pueblo justo antes del sitio, con algunas familias que alquilan espacio para tiendas y servicios básicos. Más abajo, Chiquisca y Santa Rosa son las paradas clásicas.",
        "come": "En el sendero, poco antes del sitio.",
        "quando": "Como parada nocturna, antes de la última subida.",
        "tempo": "Una noche",
        "consiglio": "Lleva efectivo en monedas y billetes pequeños: no hay cajeros."
      }
    ],
    programmi: [
      {
        "titolo": "4-5 días",
        "tappe": [
          "Día 1: Cusco-Cachora en coche, luego bajada hacia el río y primer campamento",
          "Día 2: subida hacia Marampata",
          "Día 3: visita a Choquequirao",
          "Día 4: regreso hacia Chiquisca o Santa Rosa",
          "Día 5: subida a Cachora y regreso a Cusco"
        ]
      }
    ],
    zone: [
      {
        "nome": "Cachora",
        "perChi": "Quien parte y prepara el trek",
        "testo": "El pueblo de salida, con alojamientos sencillos y mulos para alquilar. Una noche antes de salir ayuda con la altura."
      },
      {
        "nome": "Campamentos en el sendero (Chiquisca, Santa Rosa, Marampata)",
        "perChi": "Caminantes",
        "testo": "Camping con servicios básicos. Poca comodidad, mucho silencio."
      }
    ],
    sapori: [
      {
        "nome": "Comidas del trek",
        "testo": "Preparadas por la agencia: sopas, arroz, té de coca. Por cuenta propia se lleva todo, salvo algo sencillo en Marampata y Chiquisca."
      },
      {
        "nome": "Fruta del cañón",
        "testo": "En el fondo cálido del valle las familias venden naranjas y plátanos a los caminantes."
      }
    ],
    attenzioni: [
      "El trek suele considerarse más duro que el Camino Inca y el Salkantay: no lo subestimes.",
      "No en la estación de lluvias: el sendero en la ladera del cañón se vuelve peligroso.",
      "Sin cobertura telefónica: deja tu itinerario a alguien.",
      "Una sola noche en el sitio es muy poco."
    ],
    esperienzeSlugs: ['trek-choquequirao'],
    tripSlugs: [],
  },
  {
    slug: 'amazzonia-peruviana',
    paeseSlug: 'peru',
    ordine: 5,
    nome: 'Amazonia peruana',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: "3-4 días desde Puerto Maldonado, 5-7 desde Iquitos, 6-8 para el Manu",
    visitataPersonalmente: true,
    introduzione:
      "Más de la mitad del territorio peruano es selva amazónica, y la verdadera pregunta es «por qué puerta entrar»: Puerto Maldonado, Iquitos y el Manu ofrecen tres experiencias muy distintas en coste, dificultad y tipo de fauna.",
    percheAndarci:
      "Porque es el contrapeso adecuado a los Andes y porque Perú tiene algunas de las áreas protegidas más biodiversas del planeta: la Reserva de Tambopata, el Parque Nacional del Manu y la reserva Pacaya-Samiria.",
    cosaVedere: [
      "Las collpas, las paredes de arcilla donde cientos de loros y guacamayos se reúnen al amanecer para completar los minerales",
      "Las nutrias gigantes de los lagos en forma de herradura, como el Lago Sandoval",
      "Los delfines rosados de río, más fáciles de avistar en la zona de Iquitos",
      "Caimanes, monos, perezosos y cientos de especies de aves",
      "Las canopy walkway, las pasarelas suspendidas entre las copas de los árboles",
    ],
    cosaFare: [
      "Excursiones nocturnas por la selva, cuando la fauna está más activa",
      "Navegación al amanecer para avistar fauna a lo largo de los ríos",
      "Pesca de pirañas y visita a las comunidades locales",
      "Observación de aves en las collpas, a hacer muy temprano por la mañana",
    ],
    confronti: [
      {
        titolo: "Las tres puertas de la Amazonia peruana comparadas",
        introduzione:
          "Puerto Maldonado, Iquitos y el Manu son tres cosas distintas: cambian el tiempo necesario, el coste, la dificultad de acceso e incluso los animales que se ven. Elegir una sin saber lo que ofrecen las otras es la forma más común de quedar decepcionado de un lodge amazónico. Nosotros entramos por Puerto Maldonado, hacia la reserva de Tambopata; Iquitos y el Manu quedan aquí como alternativas para quien tiene más días.",
        opzioni: [
          {
            nome: "Puerto Maldonado (Tambopata)",
            sintesi:
              "La puerta por la que entramos nosotros, y la más sencilla: vuelos directos desde Cusco y desde Lima, y lodges accesibles con breves traslados en barca por los ríos Madre de Dios y Tambopata.",
            costo: "unos 300-600 $ por 3 noches en lodge, todo incluido; vuelo desde Cusco algo más de una hora",
            durata: "3-4 días, el formato ideal",
            pro: [
              "Acceso muy rápido: se puede insertar en un itinerario Cusco-Machu Picchu sin trastocarlo",
              "Excelente para nutrias gigantes, guacamayos en las collpas y fauna de las copas",
              "Amplia oferta de lodges para todos los rangos de precio",
            ],
            contro: [
              "La zona más cercana a la ciudad es la más transitada: para la mejor fauna hay que adentrarse más río arriba, y hacen falta más horas de barca",
              "Menos «expedición» y más circuito organizado",
            ],
            perChi: "Quien tiene pocos días y quiere de todos modos una Amazonia de verdad sin complicaciones logísticas.",
          },
          {
            nome: "Iquitos (Pacaya-Samiria y Río Amazonas)",
            sintesi:
              "La ciudad más grande del mundo no accesible por carretera: se llega solo en avión o remontando el río. Es la base para las expediciones fluviales largas y para los cruceros por el Río Amazonas.",
            costo: "de 400-800 $ por un lodge de unas noches hasta varios miles por los cruceros fluviales",
            durata: "5-7 días para que tenga sentido",
            pro: [
              "La experiencia fluvial más completa: se navega de verdad en lugar de hacer base en un lodge",
              "Los delfines rosados se avistan con más facilidad que en otros sitios",
              "La ciudad misma es un pedazo de historia del boom del caucho, con un carácter que Puerto Maldonado no tiene",
            ],
            contro: [
              "Se llega solo vía Lima: no encaja bien en un recorrido andino",
              "Requiere más días para justificar el desplazamiento",
              "Algunas atracciones cercanas a la ciudad son muy turísticas, con animales mantenidos en condiciones discutibles",
            ],
            perChi: "Quien quiere el río como protagonista y tiene una semana que dedicarle.",
          },
          {
            nome: "Parque Nacional del Manu",
            sintesi:
              "Una de las áreas más biodiversas del planeta, accesible desde Cusco por tierra y luego en barca, atravesando el descenso de los Andes a la selva de llanura.",
            costo: "unos 800-1.500 $ por una expedición de 6-8 días",
            durata: "6-8 días, no menos",
            pro: [
              "La biodiversidad más alta de las tres: es el lugar donde se ve más",
              "El descenso de los Andes a la selva atraviesa franjas de vegetación completamente distintas, gallito de las rocas incluido",
              "Poco transitado: se encuentran poquísimos otros grupos",
            ],
            contro: [
              "El más caro y el más largo: dos días de traslado solo para entrar y salir",
              "Nivel de dificultad de moderado a exigente",
              "La zona reservada tiene accesos limitados y requiere operadores autorizados",
            ],
            perChi: "Quien pone la fauna en primer lugar y tiene tiempo y presupuesto para una verdadera expedición.",
          },
        ],
        raccomandazione:
          "En un viaje clásico de dos semanas por Perú, Puerto Maldonado es la opción sensata, y es la que hicimos nosotros: cuesta poco en términos de tiempo y da de todos modos una Amazonia de verdad, siempre que se elija un lodge suficientemente lejos de la ciudad. Iquitos solo tiene sentido si se dedica una semana al río. El Manu es para quien vuelve a Perú una segunda vez, o para quien viene a propósito por la fauna.",
      },
    ],
    doveDormire:
      "Lodges en la selva, casi siempre vendidos en paquete con traslados, comidas y excursiones incluidas. Cuenta más la distancia de la ciudad que el lujo del establecimiento: cuanto más se remonta el río, más fauna se ve.",
    doveMangiare: "Comidas incluidas en los paquetes de los lodges.",
    comeArrivare:
      "Puerto Maldonado: vuelo desde Cusco (algo más de una hora) o desde Lima. Iquitos: vuelo desde Lima, o remontando el río: no existen carreteras. Manu: desde Cusco por tierra y luego en barca, con dos días de traslado.",
    comeSpostarsi: "Solo en barca por los ríos y a pie por los senderos, siempre acompañados por un guía del lodge.",
    periodoMigliore:
      "De mayo a octubre (aguas bajas) los senderos son más practicables y la fauna se concentra a lo largo de los cursos de agua; de diciembre a mayo (aguas altas) se navega más adentro en la selva inundada. No existe una estación sin lluvia.",
    costi: "La partida principal es el paquete del lodge; el vuelo interno de Cusco a Puerto Maldonado cuesta poco si se reserva con tiempo.",
    erroriDaEvitare: [
      "Elegir el lodge más cercano a la ciudad porque cuesta menos: es la razón número uno por la que la gente vuelve diciendo «no hemos visto nada»",
      "Ir a la Amazonia dos noches: el primer y el último día se van casi enteros en traslados",
      "Olvidar el certificado de vacunación contra la fiebre amarilla, exigido por algunos lodges",
      "Subestimar el repelente, la linterna frontal y las bolsas impermeables para la electrónica",
    ],
    miaEsperienza:
      "Entramos en la Amazonia por Puerto Maldonado, con el vuelo desde Lima y luego la barca por el río hasta un lodge en la reserva de Tambopata. No es el documental que uno espera: en la selva espesa se oye mucho más de lo que se ve. Hicimos la canopy walkway entre las copas de los árboles y la navegación hasta el lago Sandoval, el de las nutrias gigantes. El momento que lo dio todo la vuelta fue el amanecer en la collpa, cuando cientos de loros y guacamayos llegaron juntos a la pared de arcilla y durante veinte minutos no conseguimos mirar otra cosa. La otra cosa que cuenta más de lo que parece es la distancia de la ciudad: desde los lodges cercanos, cómodos, se ve poquísimo, mientras que unas horas más de barca cambian la experiencia. Al calor húmedo nunca me acostumbré del todo, pero si se puede, a la Amazonia hay que dedicarle tiempo: es increíble.",
    luoghi: [
      {
        "nome": "Puerto Maldonado y la reserva de Tambopata",
        "testo": "La puerta más cómoda a la Amazonía peruana, con vuelo desde Cusco o Lima y luego barca hasta los lodges de la reserva. Aquí Rick hizo la pasarela de dosel y la navegación.",
        "come": "Vuelo desde Cusco o Lima, luego barca por el río. Los lodges venden paquetes con traslados y excursiones.",
        "quando": "La temporada seca tiene senderos más transitables y fauna concentrada en los ríos.",
        "tempo": "3-4 días",
        "consiglio": "Elige un lodge lejos de la ciudad: en los cercanos se ve muy poco."
      },
      {
        "nome": "La collpa de los loros",
        "testo": "Una pared de arcilla donde por la mañana muchos loros y guacamayos se reúnen para tomar minerales. Una observación breve pero intensa.",
        "come": "Se llega con el guía del lodge, saliendo antes del amanecer. Algunas collpas están cerca de Tambopata, otras en el Manu.",
        "quando": "Al amanecer, mejor en días sin lluvia.",
        "tempo": "2-3 horas",
        "consiglio": "Rick la vio y fue el momento que le dio la vuelta al viaje: durante veinte minutos no se mira otra cosa."
      },
      {
        "nome": "Lago Sandoval",
        "testo": "Un lago en el bosque donde se ven aves y caimanes y, con algo de suerte, nutrias gigantes. Se llega con una caminata por el bosque y luego en canoa.",
        "come": "Excursión organizada por los lodges, a pie más canoa.",
        "quando": "Mañana o última hora de la tarde.",
        "tempo": "Medio día",
        "consiglio": "Lleva repelente y linterna frontal."
      },
      {
        "nome": "Iquitos y Pacaya-Samiria",
        "testo": "Iquitos es la ciudad más grande del mundo, fuera de las islas, a la que no se llega por carretera: solo en avión o en barco. Desde la ciudad salen expediciones hacia la reserva Pacaya-Samiria, donde Rick fue con Ruth Amazon Expedition: noches en casas de campesinos y en carpa en el bosque.",
        "come": "Vuelo desde Lima o barca por el río. Desde Iquitos los tours salen de agencias y alojamientos.",
        "quando": "Todo el año; la temporada seca hace más fáciles los senderos.",
        "tempo": "3-4 días para una expedición",
        "costo": "3 días 1.000 soles, 4 días 1.350 soles por persona con Ruth Amazon Expedition (noviembre de 2026)",
        "url": "https://ruthamazonexpeditions.com/",
        "consiglio": "Dormir en carpa en el bosque no es para todos: valóralo antes de salir. El mercado de Belén se puede recorrer por cuenta propia pero con cuidado."
      },
      {
        "nome": "Manu",
        "testo": "El Parque Nacional del Manu, un área protegida muy rica en fauna, con acceso largo y difícil.",
        "come": "Desde Cusco por carretera y luego en barca, con un traslado largo.",
        "quando": "Temporada seca.",
        "tempo": "6-8 días",
        "consiglio": "Elígelo solo con al menos una semana y presupuesto alto."
      }
    ],
    programmi: [
      {
        "titolo": "3 días (Puerto Maldonado)",
        "tappe": [
          "Día 1: vuelo, barca y llegada al lodge",
          "Día 2: collpa al amanecer, pasarela de dosel, salida nocturna",
          "Día 3: lago Sandoval y regreso"
        ]
      },
      {
        "titolo": "4 días (Iquitos y Pacaya-Samiria)",
        "tappe": [
          "Día 1: Iquitos y traslado en barca",
          "Días 2-3: navegación, caminatas y noches en el bosque",
          "Día 4: regreso a Iquitos"
        ]
      }
    ],
    zone: [
      {
        "nome": "Lodges lejos de la ciudad",
        "perChi": "Quien quiere ver fauna",
        "testo": "Cuanto más arriba por el río, más se ve. Cuestan más y requieren más horas de barca."
      },
      {
        "nome": "Puerto Maldonado e Iquitos",
        "perChi": "Quien necesita logística",
        "testo": "Ciudades de tránsito con alojamientos sencillos, calor y ruido de mototaxis."
      }
    ],
    sapori: [
      {
        "nome": "Juane",
        "testo": "Arroz con pollo envuelto en hoja de bijao, plato típico de la selva."
      },
      {
        "nome": "Pescado de río",
        "testo": "Paiche, boquichico y otras especies, a la parrilla o en sopa."
      },
      {
        "nome": "Tacacho con cecina",
        "testo": "Bolitas de plátano verde con carne ahumada, desayuno típico de la selva."
      }
    ],
    attenzioni: [
      "Vacuna contra la fiebre amarilla: recomendada para la Amazonia, consulta al médico antes de salir.",
      "Repelente, linterna frontal y bolsas impermeables para la electrónica.",
      "Dos noches son pocas: el primer y el último día se van en traslados.",
      "Zonas fronterizas con Ecuador, Colombia y Brasil: más riesgos por el crimen ligado al narcotráfico, sigue los avisos de viaje oficiales.",
      "Ceremonias de ayahuasca y San Pedro en Iquitos: no están reguladas y los avisos oficiales señalan casos graves, muertes y agresiones."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario'],
    imageAlt: 'Un río de la Amazonía peruana que corre recto por la selva, visto desde el dron bajo el cielo azul',
    immagine: '/images/peru/amazzonia-fiume-foresta-riccardo.jpg',
  },
  {
    slug: 'lago-titicaca',
    paeseSlug: 'peru',
    ordine: 6,
    nome: 'Lago Titicaca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: "2-3 días por el lado peruano, 4-5 si se continúa a Bolivia",
    visitataPersonalmente: true,
    introduzione:
      "El lago navegable más alto del mundo, a 3.812 metros, dividido entre Perú y Bolivia. Por el lado peruano se sale de Puno hacia las islas flotantes de los Uros, Taquile y Amantaní; por el lado boliviano están Copacabana y la Isla del Sol, y la frontera se cruza sin dificultad.",
    percheAndarci:
      "Por las comunidades que viven allí, más que por el paisaje: los Uros construyen todavía las islas con totora, en Taquile el tejido es patrimonio de la UNESCO y en Amantaní se duerme en casa de las familias.",
    cosaVedere: [
      "Las islas flotantes de los Uros, a pocos minutos en barca de Puno",
      "Taquile, con sus tejidos y la vista de la parte boliviana del lago",
      "Amantaní, la isla donde se pernocta con las familias",
      "Las torres funerarias preincas de Sillustani, justo a las afueras de Puno",
      "Copacabana y la Isla del Sol, en Bolivia, donde según la tradición nació el primer Inca",
    ],
    cosaFare: [
      "Tour de dos días con noche en homestay en Amantaní: es lo que da sentido a la visita",
      "Continuar por tierra hacia Bolivia (véase la comparación de abajo)",
      "Kayak al amanecer en el lago, donde el agua está quieta y la luz es mejor",
    ],
    confronti: [
      {
        titolo: "Ampliar el Titicaca a Bolivia: cómo y si compensa",
        introduzione:
          "Puno y Copacabana distan pocas horas y la frontera de Kasani/Yunguyo es una de las más sencillas del continente. La pregunta es si quedarse en el lado peruano o cruzar también el boliviano, que tiene un carácter distinto.",
        opzioni: [
          {
            nome: "Solo lado peruano (Puno)",
            sintesi: "Base en Puno, con Uros, Taquile y, eventualmente, la noche en Amantaní.",
            durata: "2-3 días",
            pro: [
              "No hace falta cruzar fronteras, todo encaja fácilmente con Cusco o Arequipa",
              "El homestay en Amantaní es la experiencia más verdadera del lago",
            ],
            contro: [
              "Los Uros son el punto más turístico y organizado de todo el lago",
              "Puno como ciudad tiene poco que ofrecer",
            ],
            perChi: "Quien tiene un itinerario solo peruano y pocos días.",
          },
          {
            nome: "Ampliación a Copacabana e Isla del Sol (Bolivia)",
            sintesi:
              "Autobús de Puno a Copacabana cruzando la frontera de Kasani (3-4 horas en total, con el trámite de salida y entrada a pie), luego barca a la Isla del Sol.",
            costo: "autobús 10-20 $; barca a la Isla del Sol pocos dólares; tasas de entrada locales en la isla",
            durata: "2-3 días más",
            pro: [
              "La Isla del Sol es más bonita y menos construida que las islas peruanas, con senderos panorámicos entre ruinas incas",
              "Copacabana tiene una atmósfera de pueblo de peregrinación que Puno no tiene",
              "Abre de forma natural el camino a La Paz y al resto de Bolivia",
            ],
            contro: [
              "Hay que contar con la logística de frontera, con los sellos de salida y entrada que se hacen a pie",
              "En la Isla del Sol las tensiones entre comunidades han limitado a ratos el acceso a la parte norte: conviene preguntar en el lugar",
            ],
            perChi: "Quien está haciendo un recorrido sudamericano más amplio o quiere entrar en Bolivia por tierra.",
          },
        ],
        raccomandazione:
          "Si Bolivia ya está en el programa, el Titicaca es la mejor manera de entrar: se pasa de Puno a Copacabana en medio día y se llega a La Paz al día siguiente. Si en cambio el viaje sigue siendo peruano, bastan dos días en Puno con la noche en Amantaní.",
      },
    ],
    doveDormire: "Puno por la logística; Amantaní para el homestay, que es la razón principal para venir hasta aquí.",
    doveMangiare:
      "En el lago la comida que cuenta es la cena en Amantaní, preparada por la familia que acoge y comida junto a ellos: sencilla y genuina. En el recorrido en barca desde Puno la comida se hace en Taquile, con la vista de la parte boliviana del lago.",
    comeArrivare:
      "Desde Cusco, autobús turístico de 7-8 horas aprox. con paradas en los sitios del camino (la mejor fórmula), tren panorámico Andean Explorer, o vuelo a Juliaca. Desde Arequipa unas 6 horas de autobús.",
    comeSpostarsi: "Barcas colectivas y tours organizados desde el puerto de Puno; en Taquile y Amantaní se circula solo a pie, cuesta arriba.",
    periodoMigliore: "mayo-septiembre por el sol; las noches son gélidas todo el año a casi 3.900 metros",
    costi: "tour de dos días con homestay, unos 30-60 $ por persona, una de las mejores relaciones calidad-precio de Perú",
    erroriDaEvitare: [
      "Llegar a Puno directamente desde baja altitud: a 3.812 metros el mal de altura es más probable que en Cusco",
      "Hacer solo el recorrido por los Uros en medio día y marcharse: es la parte más turística y menos representativa del lago",
      "Subestimar el frío nocturno en las casas de Amantaní, donde no hay calefacción",
    ],
    miaEsperienza:
      "Los Uros, hay que decirlo, son una puesta en escena turística: media hora interesante de explicación sobre cómo se construye la isla de totora, y poco más. Luego Taquile, con la comida y la vista de la parte boliviana del lago. El Titicaca se convirtió en otra cosa en Amantaní, donde dormimos en casa de una familia, cenamos con ellos y subimos al templo de Pachatata para el atardecer. No es cómodo: baño compartido, agua caliente no garantizada y, a 3.800 metros sin calefacción, la noche es helada. Pero es el único punto del recorrido en el que se sale del circuito turístico, y es el momento del lago que más se me ha quedado grabado.",
    luoghi: [
      {
        "nome": "Puno",
        "testo": "La base del lago, que está a 3.812 metros. Tiene un centro animado y el puerto de donde salen los barcos. Está más alto que Cusco: el mal de altura es más probable.",
        "come": "Desde Cusco en bus turístico con paradas (un día), un tren turístico o vuelo a Juliaca. También hay buses desde Arequipa.",
        "quando": "Temporada seca, por el sol.",
        "tempo": "1-2 días",
        "consiglio": "Llega ya aclimatado y no planees nada pesado el primer día."
      },
      {
        "nome": "Islas de los Uros",
        "testo": "Islas flotantes de totora, construidas por las comunidades que aún viven en ellas. La visita es turística: una breve explicación de cómo se construye la isla.",
        "come": "Barca desde Puno, trayecto corto.",
        "quando": "Mañana.",
        "tempo": "1-2 horas",
        "consiglio": "Rick la define como una puesta en escena turística: no le dediques más tiempo del necesario."
      },
      {
        "nome": "Taquile",
        "testo": "Isla con pueblo y tejido tradicional, reconocido por la UNESCO. Se almuerza con vista al lago.",
        "come": "Barca desde Puno, unas horas de navegación, luego a pie cuesta arriba.",
        "quando": "Mañana y almuerzo.",
        "tempo": "Medio día",
        "consiglio": "Se camina en altura y cuesta arriba, a ritmo lento."
      },
      {
        "nome": "Amantaní",
        "testo": "La isla donde se duerme en casa de las familias. Se cena con ellas y se sube al templo de Pachatata para el atardecer. Sin carreteras, sin calefacción.",
        "come": "Barca desde Puno, normalmente en un tour de dos días.",
        "quando": "Atardecer y amanecer.",
        "tempo": "Una noche",
        "costo": "Tour de dos días con homestay: se reserva con las agencias de Puno, compara qué incluye",
        "consiglio": "Es el momento del lago que más se le quedó a Rick. Lleva un saco de dormir abrigado: baño compartido y agua caliente no garantizada."
      },
      {
        "nome": "Sillustani",
        "testo": "Torres funerarias preincas (chullpas) a orillas de la laguna Umayo, cerca de Puno.",
        "come": "Tour de medio día o taxi desde Puno.",
        "quando": "Tarde, con luz baja.",
        "tempo": "2-3 horas",
        "consiglio": "Si hay poco tiempo, elige Amantaní en lugar de los Uros y añade esto aparte."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: barca desde Puno, Uros, Amantaní, cena con la familia",
          "Día 2: amanecer, Taquile, regreso a Puno"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Puno y Sillustani",
          "Días 2-3: como en el programa de 2 días"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro de Puno",
        "perChi": "Quien necesita logística",
        "testo": "Alojamientos, agencias y restaurantes, pero en altura las noches son frías."
      },
      {
        "nome": "Amantaní (homestay)",
        "perChi": "Quien busca la experiencia real",
        "testo": "La familia acoge con cena. Baño compartido, sin calefacción."
      }
    ],
    sapori: [
      {
        "nome": "Trucha y pejerrey",
        "testo": "Trucha y pescado del lago, fritos o a la parrilla."
      },
      {
        "nome": "Quinua",
        "testo": "En sopas y platos locales, cultivada en altura."
      },
      {
        "nome": "Cena en Amantaní",
        "testo": "Sencilla y genuina, preparada por la familia anfitriona."
      }
    ],
    attenzioni: [
      "Altura: llegar directo desde baja altitud aumenta mucho el riesgo de soroche.",
      "Frío nocturno en las casas de Amantaní, sin calefacción.",
      "El tour de medio día solo a los Uros es la parte más turística del lago."
    ],
    esperienzeSlugs: ['homestay-amantani'],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: "Una mujer uro sonriente con sombrero de paja muestra un tapiz bordado en el lago Titicaca",
    immagine: '/images/peru/titicaca-uros-arazzo-riccardo.jpg',
  },
  {
    slug: 'lima',
    paeseSlug: 'peru',
    ordine: 7,
    nome: 'Lima',
    tipologia: ['città', 'cibo'],
    giorniConsigliati: "2 días, a menudo al principio y al final del viaje",
    visitataPersonalmente: true,
    introduzione:
      "La capital junto al océano, punto de llegada de todo vuelo internacional y, en los últimos veinte años, una de las capitales gastronómicas mundiales: varios restaurantes de la ciudad aparecen de forma estable en las clasificaciones de los mejores del mundo.",
    percheAndarci: "Porque se pasa por ella de todos modos, y porque es el lugar donde la cocina peruana se ve al máximo nivel, del ceviche de barrio a la alta cocina.",
    cosaVedere: [
      "El casco histórico colonial, Patrimonio de la UNESCO, con la Plaza Mayor y el convento de San Francisco",
      "Miraflores y el Malecón, el paseo por el acantilado a pico sobre el océano",
      "Barranco, el barrio bohemio con los murales y el Puente de los Suspiros",
      "El Museo Larco, con la colección de arte precolombino más importante del país",
      "Huaca Pucllana, la pirámide preinca en medio de Miraflores",
    ],
    cosaFare: [
      "Comer ceviche en una cevichería a mediodía, como se usa aquí (por la noche se considera fuera de horario)",
      "Tour gastronómico entre mercados y cocinas de barrio",
      "Parapente desde el acantilado de Miraflores",
      "Reservar con mucha antelación uno de los restaurantes de clasificación mundial, si interesa",
    ],
    doveDormire: "Miraflores por comodidad y seguridad, Barranco por el ambiente; ambos lejos del casco histórico pero bien conectados.",
    doveMangiare:
      "Lima es el motivo gastronómico del viaje: ceviche a mediodía en una cevichería de barrio (por la noche se considera fuera de horario y el pescado ya no es el de la mañana), luego tiradito, causa, lomo saltado y anticuchos de los carritos por la noche. La alta cocina por la que la ciudad es famosa hay que reservarla con semanas de antelación.",
    comeArrivare: "Aeropuerto Jorge Chávez, el único aeropuerto intercontinental del país. Del aeropuerto al centro, taxis autorizados o apps: nunca los taxistas piratas a la salida.",
    comeSpostarsi: "Taxi mediante app, Metropolitano para los ejes principales; el tráfico es pesado, los tiempos hay que alargarlos siempre.",
    periodoMigliore: "diciembre-abril por el sol; de junio a noviembre la garúa, una bruma húmeda constante, cubre la ciudad",
    costi: "en la media; la alta cocina tiene precios internacionales, el resto no",
    erroriDaEvitare: [
      "Coger taxis no autorizados a la salida del aeropuerto: es uno de los puntos donde los robos a turistas son más frecuentes",
      "Saltársela del todo: muchos pasan solo en tránsito, pero en dos días aquí se ve un Perú que en los Andes no existe",
    ],
    miaEsperienza:
      "Muchos la atraviesan solo en tránsito y se pierden el mejor motivo para quedarse, la comida. La cocina peruana es una de las cosas que más recuerdo de estos viajes, y Lima es el lugar donde me pareció mejor. El primer ceviche lo comimos a mediodía, como se usa aquí, en una cevichería de barrio con el pescado llegado por la mañana. Luego el casco histórico entre la Plaza Mayor y San Francisco, el Malecón de Miraflores hasta Huaca Pucllana y el aperitivo al atardecer en Barranco, en el Puente de los Suspiros. La ciudad, sin embargo, es peligrosa: hay que recorrerla con atención, sobre todo fuera de Miraflores y Barranco.",
    luoghi: [
      {
        "nome": "Plaza Mayor y convento de San Francisco",
        "testo": "El centro histórico colonial, patrimonio UNESCO. La Plaza Mayor tiene el palacio de gobierno y la catedral; a pocos pasos el convento de San Francisco con la biblioteca y las catacumbas.",
        "come": "En taxi o Metropolitano desde Miraflores; luego a pie.",
        "quando": "De día, entre semana. De noche es mejor evitarlo.",
        "tempo": "Medio día",
        "consiglio": "El centro hay que recorrerlo con atención, sobre todo fuera de las calles principales."
      },
      {
        "nome": "Miraflores y el Malecón",
        "testo": "El paseo sobre el acantilado frente al océano, con parques, vista al Pacífico y parapente. El primer paseo nocturno en Lima es aquí.",
        "come": "A pie desde cualquier hotel de Miraflores.",
        "quando": "Atardecer y noche, con las luces.",
        "tempo": "1-2 horas",
        "consiglio": "Es de las zonas más tranquilas de la ciudad, pero también aquí los avisos oficiales señalan robos: el teléfono en el bolsillo."
      },
      {
        "nome": "Huaca Pucllana",
        "testo": "Una pirámide de adobe y arcilla en medio de Miraflores, centro de la cultura Lima, que floreció entre el 200 y el 700 d.C.",
        "come": "A pie desde Miraflores; visita guiada.",
        "quando": "De día; horarios en el sitio oficial del museo.",
        "tempo": "1 hora",
        "consiglio": "Se visita con guía: da el contexto de una Lima mucho más antigua que los incas."
      },
      {
        "nome": "Barranco",
        "testo": "El barrio bohemio de los murales, las galerías y los locales. El Puente de los Suspiros es el lugar clásico del aperitivo al atardecer.",
        "come": "En taxi o app desde Miraflores.",
        "quando": "Última hora de la tarde y noche.",
        "tempo": "2-3 horas",
        "consiglio": "Rick cerró aquí el día: aperitivo en el puente al atardecer."
      },
      {
        "nome": "Museo Larco",
        "testo": "Una gran colección de arte precolombino, en una casa virreinal con jardines.",
        "come": "En taxi o app, en Pueblo Libre.",
        "quando": "Mañana, para evitar grupos. Consulta horarios y días en el sitio.",
        "tempo": "2 horas",
        "url": "https://www.museolarco.org/",
        "consiglio": "Añádelo si tienes medio día libre, sobre todo por los textiles y la galería erótica."
      }
    ],
    programmi: [
      {
        "titolo": "1 día",
        "tappe": [
          "Mañana: centro histórico",
          "Almuerzo: ceviche en una cevichería de barrio",
          "Tarde: Miraflores y Malecón",
          "Atardecer: Barranco"
        ]
      },
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: el programa de 1 día",
          "Día 2: Museo Larco y Huaca Pucllana, cena en un restaurante reservado con antelación"
        ]
      }
    ],
    zone: [
      {
        "nome": "Miraflores",
        "perChi": "Quien busca comodidad y seguridad",
        "testo": "La zona más cómoda y segura, cerca del Malecón. Más cara."
      },
      {
        "nome": "Barranco",
        "perChi": "Quien busca ambiente y vida nocturna",
        "testo": "Bohemio, con locales y murales. Más ruidoso de noche."
      },
      {
        "nome": "Centro histórico",
        "perChi": "Quien quiere ahorrar",
        "testo": "Alojamientos baratos, pero la zona se vacía de noche y es menos segura."
      }
    ],
    sapori: [
      {
        "nome": "Ceviche",
        "testo": "Pescado crudo marinado en limón con cebolla y ají. Se come al mediodía en una cevichería de barrio, no a la cena."
      },
      {
        "nome": "Tiradito y causa",
        "testo": "El primero es pescado crudo en láminas, la segunda un pastel frío de papa amarilla."
      },
      {
        "nome": "Lomo saltado",
        "testo": "Ternera salteada con cebolla y tomate, servida con arroz y papas fritas."
      },
      {
        "nome": "Anticuchos",
        "testo": "Brochetas de corazón de res marinado, de los carritos por la noche."
      },
      {
        "nome": "Pisco sour",
        "testo": "El cóctel nacional: pisco, limón, clara de huevo y almíbar."
      }
    ],
    attenzioni: [
      "Taxis informales a la salida del aeropuerto: uno de los puntos donde más se dan robos. Solo taxis reservados o apps.",
      "Robos incluso en zonas turísticas como Miraflores y Barranco: nada de valor a la vista, el teléfono lejos del borde de la calle, cajeros solo dentro de bancos o edificios.",
      "El tráfico es pesado: añade siempre tiempo.",
      "Reserva con antelación los restaurantes de alta cocina."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: "Vista desde lo alto del barrio de Miraflores en Lima, con edificios y un parque arbolado, Perú",
    immagine: '/images/peru/lima.jpg',
  },
  {
    slug: 'arequipa-colca',
    paeseSlug: 'peru',
    ordine: 8,
    nome: 'Arequipa y el Colca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: "3-4 días, de los cuales dos para el cañón",
    visitataPersonalmente: true,
    introduzione:
      "La «ciudad blanca», construida en sillar, la piedra volcánica clara, a los pies del volcán Misti. A pocas horas está el Cañón del Colca, uno de los más profundos del mundo, donde los cóndores alzan el vuelo a primera hora de la mañana.",
    percheAndarci:
      "Arequipa está a 2.300 metros y es la parada adecuada para aclimatarse poco a poco antes de subir a Cusco o Puno, en lugar de llegar de golpe a la altura.",
    cosaVedere: [
      "El Monasterio de Santa Catalina, una ciudad dentro de la ciudad con callejones y patios de colores",
      "La Plaza de Armas y la catedral de sillar blanco",
      "La momia Juanita en el Museo Santuarios Andinos",
      "La Cruz del Cóndor, en el Cañón del Colca, punto de avistamiento de los cóndores andinos",
      "Los pueblos coloniales y las terrazas preincas a lo largo del cañón",
    ],
    cosaFare: [
      "Madrugar para la Cruz del Cóndor: los cóndores aprovechan las corrientes térmicas de la mañana",
      "Trek de dos días en el cañón hasta el oasis de Sangalle, con subida al amanecer",
      "Baños termales de La Calera en Chivay",
      "Probar el rocoto relleno y los demás platos de la cocina arequipeña, distinta de la del resto del país",
    ],
    doveDormire: "Casco histórico de Arequipa; Chivay o Cabanaconde como bases para el cañón.",
    doveMangiare:
      "La cocina arequipeña es distinta de la del resto de Perú y merece la pena probarla en las picanterías tradicionales: rocoto relleno, adobo el domingo por la mañana y chupe de camarones. En el cañón la oferta se reduce a los menús fijos de los pequeños restaurantes de los pueblos.",
    comeArrivare: "Vuelo desde Lima (1 h 30 aprox.) o autobús nocturno; desde Puno unas 6 horas de autobús.",
    comeSpostarsi: "Arequipa se recorre a pie; para el Colca tours organizados de dos días o autobús de línea hasta Chivay y Cabanaconde.",
    periodoMigliore: "mayo-septiembre; los cóndores se avistan todo el año pero con más probabilidad en las primeras horas de la mañana",
    costi: "Monasterio de Santa Catalina 50 soles para extranjeros adultos (2026); boleto turístico del Colca aparte",
    erroriDaEvitare: [
      "Hacer el Colca en una sola jornada desde Arequipa: significa salir a las 3 de la madrugada y pasar casi todo el tiempo en autocar",
      "Subestimar la subida desde el oasis de Sangalle: unos 1.100 metros de desnivel, para hacer antes de que el sol apriete",
    ],
    miaEsperienza:
      "Es la ciudad donde por fin dormí bien: a 2.300 metros el cuerpo se recupera, y después de días pasados en altura se nota. El Monasterio de Santa Catalina es el lugar que más se me quedó grabado. No esperaba que fuera tan grande: es una pequeña ciudad amurallada con los callejones pintados de azul y naranja. A la Cruz del Cóndor, en cambio, hay que llegar con las expectativas adecuadas: los cóndores se alzan con las corrientes de la mañana y cuando ocurre es impresionante, pero no está garantizado y la explanada está llena de gente. Merece de todos modos el despertador al amanecer. En Arequipa también estuve como osteópata voluntario, en una de las dos veces que vine a Perú a hacer voluntariado.",
    luoghi: [
      {
        "nome": "Plaza de Armas y catedral de Arequipa",
        "testo": "La plaza de la ciudad blanca, construida en sillar, la piedra volcánica clara, con soportales y la catedral. El volcán Misti aparece al fondo.",
        "come": "A pie desde el centro histórico.",
        "quando": "Por la tarde-noche, con luz cálida sobre el sillar.",
        "tempo": "1 hora",
        "consiglio": "Arequipa está más baja que Cusco y Puno: la parada ideal para aclimatarse antes de Cusco o Puno."
      },
      {
        "nome": "Monasterio de Santa Catalina",
        "testo": "Una ciudad dentro de la ciudad, con callejones, patios de colores y celdas. Vivían aquí monjas dominicas, aisladas del mundo durante siglos.",
        "come": "A pie desde el centro. Necesitas el pasaporte para la entrada de extranjero.",
        "quando": "Todos los días de 9 a 17; martes y miércoles abre hasta las 20 (último acceso a las 19). Cerrado el Viernes Santo, el 25 de diciembre y el 1 de enero.",
        "tempo": "1,5-2 horas",
        "costo": "50 soles para extranjeros adultos (2026)",
        "url": "https://www.santacatalina.org.pe/",
        "consiglio": "Visítalo a media mañana o de noche para evitar grupos."
      },
      {
        "nome": "Museo Santuarios Andinos y la momia Juanita",
        "testo": "Museo con la momia de una joven inca sacrificada en el volcán Ampato, hallada muy bien conservada.",
        "come": "A pie desde el centro. Visita guiada.",
        "quando": "Consulta horarios y días de cierre antes de ir.",
        "tempo": "1 hora",
        "consiglio": "La visita es guiada y breve: vale la pena para entender el contexto del Colca."
      },
      {
        "nome": "Cruz del Cóndor",
        "testo": "El mirador de los cóndores andinos en el Cañón del Colca, uno de los más profundos del mundo. Los cóndores pasan cerca de las paredes del cañón.",
        "come": "Tour organizado desde Arequipa o bus de línea hasta Chivay y Cabanaconde, con traslado al mirador.",
        "quando": "Primeras horas de la mañana, todo el año.",
        "tempo": "1-2 horas en el punto",
        "consiglio": "Duerme en Chivay o Cabanaconde la noche anterior para llegar temprano."
      },
      {
        "nome": "Chivay y los baños termales de La Calera",
        "testo": "El pueblo principal del valle, con mercado y las termas de La Calera, excelentes tras un día de carretera en altura.",
        "come": "Carretera desde Arequipa.",
        "quando": "Noche.",
        "tempo": "1-2 horas en las termas",
        "consiglio": "Buena base para la primera noche en el cañón."
      },
      {
        "nome": "Trek a Sangalle (el oasis)",
        "testo": "Trek de dos días en el cañón, bajando hasta el oasis de Sangalle y subiendo al amanecer.",
        "come": "Parte de Cabanaconde; se puede hacer por cuenta propia o con guía.",
        "quando": "Temporada seca; baja temprano para evitar el calor.",
        "tempo": "2 días",
        "consiglio": "La subida es dura: sal a oscuras para evitar el sol."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Plaza de Armas y Santa Catalina",
          "Día 2: Museo Santuarios Andinos y salida hacia Chivay"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Arequipa",
          "Día 2: Chivay, termas de La Calera",
          "Día 3: Cruz del Cóndor al amanecer y regreso o continuación a Puno"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro histórico de Arequipa",
        "perChi": "Quien visita la ciudad",
        "testo": "La zona más cómoda para el monasterio y la plaza. Algunas calles son ruidosas de noche."
      },
      {
        "nome": "Chivay",
        "perChi": "Quien visita el cañón sin trekking",
        "testo": "El pueblo más grande del valle, con termas y mercado. En altura, frío de noche."
      },
      {
        "nome": "Cabanaconde",
        "perChi": "Quien quiere caminar",
        "testo": "El pueblo cercano a la Cruz del Cóndor y al sendero a Sangalle. Alojamientos sencillos."
      }
    ],
    sapori: [
      {
        "nome": "Rocoto relleno",
        "testo": "Pimiento picante relleno de carne y queso, plato típico de Arequipa."
      },
      {
        "nome": "Adobo",
        "testo": "Cerdo marinado en chicha y especias, que se come los domingos por la mañana."
      },
      {
        "nome": "Chupe de camarones",
        "testo": "Sopa de camarones de río, típica de las picanterías."
      },
      {
        "nome": "Menús fijos del Colca",
        "testo": "En el cañón la oferta se reduce a los menús de los pequeños restaurantes de los pueblos."
      }
    ],
    attenzioni: [
      "Buses nocturnos: elige solo compañías principales.",
      "Altura en el Colca: los pueblos y miradores están a gran altura.",
      "El trek de Sangalle en verano es muy caluroso en el fondo.",
      "No compres tours muy baratos: a menudo se saltan paradas."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario', 'peru-due-settimane'],
    imageAlt: "La fachada iluminada de la catedral de Arequipa de noche, con el campanario dorado sobre el cielo negro",
    immagine: '/images/peru/arequipa-cattedrale-notte-riccardo.jpg',
  },
  {
    slug: 'huaraz-cordillera-blanca',
    paeseSlug: 'peru',
    ordine: 9,
    nome: 'Huaraz y la Cordillera Blanca',
    tipologia: ['trekking', 'natura', 'avventura'],
    giorniConsigliati: "4-7 días, según los treks elegidos",
    visitataPersonalmente: true,
    introduzione:
      "La cadena tropical más alta del mundo, con más de treinta cimas por encima de los 6.000 metros y lagos glaciares de colores casi falsos. Es el Perú de la alta montaña, casi ignorado por quien viene solo por Machu Picchu.",
    percheAndarci:
      "Porque es la mejor zona de trekking del país y porque la Laguna 69 y el circuito de Santa Cruz aguantan la comparación con cualquier trek andino, a una fracción del coste y de la multitud del circuito de Cusco.",
    cosaVedere: [
      "La Laguna 69, a 4.600 metros, de un turquesa que parece artificial",
      "El Nevado Huascarán, la montaña más alta de Perú (6.768 m)",
      "La Laguna Parón, la más grande de la Cordillera Blanca",
      "El sitio arqueológico de Chavín de Huántar, Patrimonio de la UNESCO",
      "El Nevado Pastoruri, uno de los pocos glaciares accesibles en el día",
    ],
    cosaFare: [
      "Laguna 69 en el día: el clásico, exigente por la altitud más que por la distancia",
      "Trek de Santa Cruz, 4 días entre los 6.000 de la cordillera",
      "Alpinismo de iniciación en el Nevado Mateo o en el Ishinca, para quien tiene experiencia",
    ],
    doveDormire: "Huaraz es la base de todo: albergues y pequeños hoteles, con agencias de trekking en cada esquina.",
    doveMangiare:
      "Huaraz es una ciudad de montaña y se come en consecuencia: sopas calientes en cada comida, trucha de las piscifactorías de altura, cuy y la pachamanca, la carne cocinada bajo tierra con piedras al rojo, que se encuentra sobre todo los fines de semana. El mercado central por la mañana sirve caldo de gallina y las infusiones de hierbas de altura que los primeros días ayudan. Para los días de trekking, el picnic lo preparan las agencias o se compra en el mercado: en los senderos no hay nada.",
    comeArrivare: "Autobús nocturno desde Lima, unas 8 horas. No hay vuelos regulares cómodos: la carretera es la vía normal.",
    comeSpostarsi: "Colectivos y tours diarios de las agencias de Huaraz para todos los puntos de partida de los treks.",
    periodoMigliore: "de mayo a septiembre, la estación seca: el resto del año los senderos de altura se vuelven impracticables",
    costi: "entre las zonas más baratas de Perú: una jornada guiada a la Laguna 69 cuesta pocas decenas de dólares",
    erroriDaEvitare: [
      "Llegar desde Lima (nivel del mar) y salir al día siguiente a la Laguna 69 a 4.600 metros: hace falta aclimatarse en Huaraz al menos dos días",
      "Fiarse de las agencias más baratas sin comprobar guías y equipo, sobre todo para los treks de varios días",
    ],
    miaEsperienza:
      "Es la parte de Perú que casi nadie hace, y es una pena: la Cordillera Blanca aguanta la comparación con cualquier cosa que se vea alrededor de Cusco, a una fracción del precio y sin colas. La Laguna 69 lo resume todo: los últimos cuarenta minutos por encima de los 4.500 metros fueron una lucha con la respiración, veinte pasos y una parada, y luego nos encontramos delante de ese turquesa que parece retocado y no lo es. El pueblo en sí no es bonito, es una base de apoyo llena de agencias, pero es lo que hace falta.",
    luoghi: [
      {
        "nome": "Laguna 69",
        "testo": "La laguna turquesa a 4.600 metros, con un color que parece retocado. Es el trek de un día clásico de la Cordillera Blanca, duro por la altura más que por la distancia.",
        "come": "Excursión de un día con salida al amanecer desde Huaraz, unas horas de carretera y luego unas horas de caminata cuesta arriba. Se hace con agencia o en colectivo.",
        "quando": "Temporada seca. Sal temprano para tener el cielo despejado.",
        "tempo": "Día completo",
        "consiglio": "Rick describe los últimos cuarenta minutos por encima de los 4.500 metros como una lucha con el aliento: veinte pasos y una parada. Aclimátate en Huaraz al menos dos días."
      },
      {
        "nome": "Trek de Santa Cruz",
        "testo": "Un trek de varios días en la cordillera entre cumbres altísimas, con campamentos y el paso de Punta Unión.",
        "come": "Con agencia, con mulas y cocinero, desde Huaraz, con un traslado largo al inicio.",
        "quando": "Temporada seca.",
        "tempo": "4 días",
        "consiglio": "Verifica el guía y el equipo: las agencias más baratas no siempre son fiables."
      },
      {
        "nome": "Laguna Parón",
        "testo": "Una laguna de alta montaña de la Cordillera Blanca, rodeada de cumbres, con agua turquesa.",
        "come": "Colectivo o tour de un día desde Huaraz, con un tramo de pista de tierra.",
        "quando": "Temprano por la mañana.",
        "tempo": "Medio día o día completo",
        "consiglio": "Una buena alternativa si la Laguna 69 es demasiado cansada."
      },
      {
        "nome": "Chavín de Huántar",
        "testo": "Sitio arqueológico patrimonio UNESCO, un centro ceremonial preinca con galerías subterráneas y esculturas.",
        "come": "Tour de un día desde Huaraz, con un largo viaje por carretera.",
        "quando": "Mañana; las galerías están más frescas.",
        "tempo": "Día completo con traslados",
        "consiglio": "Visita el museo: explica gran parte del sitio."
      },
      {
        "nome": "Nevado Pastoruri",
        "testo": "Un glaciar accesible en un día, a gran altura, en fuerte retroceso.",
        "come": "Tour de un día, con una corta caminata final.",
        "quando": "Mañana.",
        "tempo": "Día completo",
        "consiglio": "La altura es alta: pide la parada de aclimatación."
      }
    ],
    programmi: [
      {
        "titolo": "2 días",
        "tappe": [
          "Día 1: Huaraz y aclimatación (ciudad, mercado)",
          "Día 2: Laguna 69 o Parón"
        ]
      },
      {
        "titolo": "3 días",
        "tappe": [
          "Día 1: Huaraz, aclimatación",
          "Día 2: Laguna 69",
          "Día 3: Chavín o Parón"
        ]
      }
    ],
    zone: [
      {
        "nome": "Centro de Huaraz",
        "perChi": "Quien busca una base para los treks",
        "testo": "Hostales y pequeños hoteles, agencias en cada esquina. La ciudad no es bonita, pero es cómoda."
      }
    ],
    sapori: [
      {
        "nome": "Trucha",
        "testo": "Trucha de criadero en altura."
      },
      {
        "nome": "Cuy",
        "testo": "Conejillo de indias, plato tradicional."
      },
      {
        "nome": "Pachamanca",
        "testo": "Carne cocida bajo tierra con piedras calientes, sobre todo los fines de semana."
      },
      {
        "nome": "Caldo de gallina",
        "testo": "Caldo de gallina, en el mercado central por la mañana."
      }
    ],
    attenzioni: [
      "No salgas hacia la Laguna 69 al día siguiente de llegar desde Lima: hacen falta al menos dos días de aclimatación.",
      "Verifica guías y equipo de los treks de varios días antes de pagar.",
      "Bus nocturno Lima-Huaraz: solo compañías principales.",
      "Sin cobertura telefónica en los treks."
    ],
    esperienzeSlugs: [],
    tripSlugs: ['peru-itinerario'],
    imageAlt: "La Laguna 69 de color turquesa a los pies de los glaciares de la Cordillera Blanca, Perú",
    immagine: '/images/peru/huaraz-cordillera-blanca.jpg',
  },
]
