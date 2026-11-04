import type { Destinazione } from '@/lib/types'

export const destinazioniCoreaDelSud: Destinazione[] = [
  {
    slug: 'seoul',
    paeseSlug: 'corea-del-sud',
    ordine: 1,
    nome: 'Seúl',
    tipologia: ['città', 'cultura', 'gastronomia'],
    giorniConsigliati: '4-5 días, excluidas las excursiones fuera de la ciudad',
    visitataPersonalmente: true,
    introduzione:
      "Una capital de diez millones de habitantes encajada entre montañas y atravesada por el río Han. Cinco palacios reales del siglo XVI conviven con los barrios más tecnológicos de Asia, y a cuarenta kilómetros en línea recta empieza la frontera más militarizada del mundo.",
    percheAndarci:
      "Es una de las pocas megalópolis asiáticas que se recorren a pie, barrio por barrio. Y ninguna otra ciudad cuenta con tanta claridad lo que significa reconstruir un país desde cero en dos generaciones: en 1953 Seúl estaba en ruinas.",
    cosaVedere: [
      "Gyeongbokgung, el palacio principal de la dinastía Joseon, con el cambio de guardia ante la puerta Gwanghwamun",
      "Changdeokgung y su Jardín Secreto (Huwon), que solo se visita con visita guiada de aforo limitado",
      "El pueblo de hanok de Bukchon, entre los dos palacios, con las casas tradicionales todavía habitadas",
      "El Memorial de la Guerra de Corea, el museo que explica todo lo que se verá en la DMZ",
      "El mercado de Gwangjang, el más antiguo de la ciudad, con las cocinas callejeras entre los puestos",
      "La N Seoul Tower en el monte Namsan y la fortaleza urbana que recorre las crestas alrededor del centro",
      "Insadong para la artesanía, Hongdae para la vida universitaria, Seongsu para las cafeterías instaladas en antiguas fábricas",
    ],
    cosaFare: [
      "Visitar Gyeongbokgung en hanbok, el traje tradicional, que da derecho a la entrada gratuita (véase la ficha de experiencia dedicada)",
      "Cena de comida callejera en el mercado de Gwangjang, entre bindaetteok y mayak gimbap",
      "Una noche en un jjimjilbang, la sauna coreana abierta 24 horas, donde también se puede dormir",
      "Caminar un tramo de la fortaleza de Seúl por la cresta del Bugaksan, con la ciudad debajo",
      "Excursión de un día a la DMZ, que sale de aquí (véase la ficha de destino dedicada)",
    ],
    doveDormire:
      "Myeongdong y Jongno son las zonas más cómodas para los palacios y para el metro; Hongdae y Yeonnam para la vida nocturna y los precios más bajos; Seongsu e Itaewon para un ritmo más adulto. Lo que cuenta es estar cerca de una estación de metro: en Seúl las distancias son grandes y el tráfico es pesado.",
    doveMangiare:
      "Seúl es una de las capitales gastronómicas de Asia, y lo primero que hay que entender son los banchan: cualquier plato que se pida llega con cinco o diez acompañamientos gratuitos, que si se piden se reponen sin coste. Hay que probar la barbacoa coreana, donde la carne la das la vuelta tú mismo en la parrilla encastrada en la mesa, el gomtang y el samgyetang para las sopas, el naengmyeon frío en verano y al menos una cena de comida callejera en el mercado de Gwangjang. Los cafés, en cambio, cuestan lo mismo que en Europa: en Corea son lugares de encuentro y se paga la estancia más que la taza.",
    comeArrivare:
      "Vuelo internacional a Incheon (ICN), uno de los mejores aeropuertos del mundo, conectado con el centro por el AREX en aproximadamente una hora. El segundo aeropuerto, Gimpo (GMP), sirve sobre todo a los vuelos internos, Jeju incluida.",
    comeSpostarsi:
      "Metro capilar y limpio, con carteles y avisos en inglés: se paga con la T-money, que se compra en cualquier minimercado. Para los taxis está Kakao T, que funciona con tarjeta extranjera. Ojo con Google Maps: en Corea no calcula rutas, hacen falta Naver Map o KakaoMap.",
    periodoMigliore:
      "abril por los cerezos y octubre-principios de noviembre por el foliage. El verano es caluroso, húmedo y lluvioso; el invierno es gélido pero despejado, y los palacios bajo la nieve compensan el frío.",
    costi:
      "Entrada a los palacios unos 3.000 won, gratis con hanbok; la entrada combinada para cuatro palacios más el santuario de Jongmyo cuesta poco más de 10.000 won. Metro algo más de un euro, comidas 6-15 €.",
    erroriDaEvitare: [
      "Ir a Changdeokgung sin haber reservado la visita al Jardín Secreto: es de aforo limitado, con horarios fijos, y se agota",
      "Fiarse de Google Maps para moverse: muestra los lugares pero no calcula ninguna ruta",
      "Visitar los palacios en martes, cuando Gyeongbokgung está cerrado (los demás cierran el lunes): es el error de planificación más común",
      "Saltarse el Memorial de la Guerra antes de ir a la DMZ: sin ese contexto la excursión a la frontera se queda en una serie de fotografías",
    ],
    confronti: [
      {
        titolo: 'Cuál de los cinco palacios de Seúl',
        introduzione:
          "Los palacios reales de Seúl son cinco, todos en un radio de dos kilómetros, y casi todos los visitantes ven solo uno. Cambian mucho en tamaño, afluencia y tipo de visita, y la elección cambia la jornada.",
        opzioni: [
          {
            nome: 'Gyeongbokgung',
            sintesi: "El palacio principal, el más grande y el más monumental, con el cambio de guardia ante la puerta Gwanghwamun.",
            costo: 'unos 3.000 won, gratis en hanbok',
            durata: '2-3 horas',
            pro: ["Ninguno de los otros cuatro tiene las mismas dimensiones ni la misma solemnidad", "El cambio de guardia, varias veces al día, es un espectáculo de verdad", "Dos museos importantes dentro del recinto"],
            contro: ["El más concurrido de todos", "Casi enteramente reconstruido: los japoneses lo demolieron en gran parte durante la ocupación", "Cerrado los martes"],
            perChi: "Quien ve solo uno y quiere la imagen clásica.",
          },
          {
            nome: 'Changdeokgung y el Jardín Secreto',
            sintesi: "Patrimonio de la UNESCO, construido adaptándose al terreno en lugar de imponerle una cuadrícula, con un jardín real que solo se visita con reserva.",
            costo: 'unos 3.000 won más 5.000 por el Huwon',
            durata: '3 horas con la visita guiada al jardín',
            pro: ["El Jardín Secreto es lo más bonito de todos los palacios de Seúl", "Es el palacio mejor conservado de los cinco", "La visita guiada de aforo limitado mantiene alejada a la multitud"],
            contro: ["El Huwon se reserva online y se agota, sobre todo en otoño", "Horarios rígidos, se entra solo con el grupo asignado", "Cerrado los lunes"],
            perChi: "Quien tiene una mañana para dedicarle y reserva con unos días de antelación. Es la mejor elección.",
          },
          {
            nome: 'Deoksugung',
            sintesi: "El más pequeño y el más extraño: junto a los pabellones tradicionales hay edificios de estilo occidental de principios del siglo XX, que se remontan a los últimos años del imperio coreano.",
            costo: 'unos 1.000 won',
            durata: '1 hora',
            pro: ["En pleno centro, se cuela en cualquier programa", "El contraste entre la arquitectura coreana y la neoclásica no existe en ningún otro sitio", "Precioso de noche, cuando sigue abierto e iluminado"],
            contro: ["Pequeño, se agota enseguida", "Menos espectacular que los demás", "Cerrado los lunes"],
            perChi: "Quien tiene una hora libre o quiere ver un palacio después del atardecer.",
          },
        ],
        raccomandazione:
          "Con dos medias jornadas: Changdeokgung con el Jardín Secreto reservado y Gyeongbokgung para el cambio de guardia. Con una sola, Changdeokgung, siempre que se haya reservado el Huwon: sin él, la comparación se invierte.",
      },
    ],
    miaEsperienza:
      "Seúl me desconcertó porque no se parece a las otras capitales asiáticas: es ordenada, silenciosa para su tamaño, y se recorre a pie. Los palacios son bonitos pero en gran parte reconstruidos; me impresionó más que casi todo lo que veía tuviera menos de setenta años. En 1953 la ciudad estaba en ruinas y casi ninguno de los edificios de hoy existía. En el Memorial de la Guerra esto se vuelve concreto, y por eso hay que verlo antes de la DMZ: sin él, la frontera se queda en una excursión fotográfica. De la comida, ninguna advertencia, solo una constatación: los banchan, diez acompañamientos que llegan gratis y se reponen sin pedir nada, son lo que más ganas me da de volver. Y el jjimjilbang, la sauna abierta 24 horas donde familias enteras duermen en el suelo sobre esterillas, es la institución más coreana que hay.",
    luoghi: [
      {
        nome: "Gyeongbokgung",
        testo: "El palacio principal de la dinastía Joseon, construido en 1395 y en gran parte reconstruido tras la ocupación japonesa. Delante de la puerta Gwanghwamun se celebra el cambio de guardia con trajes de época.",
        come: "Metro línea 3 hasta Gyeongbokgung. Se visita por libre; quien lleva hanbok entra gratis.",
        quando: "Cerrado los martes (los demás palacios cierran los lunes). El cambio de guardia tiene horarios fijos, que conviene consultar en la web.",
        tempo: "2 horas",
        costo: "Entrada gratuita con hanbok",
        consiglio: "Visitarlo en hanbok, como hicimos nosotros, es la opción más económica y divertida.",
      },
      {
        nome: "Changdeokgung y el Jardín Secreto (Huwon)",
        testo: "Palacio Patrimonio de la UNESCO integrado en el paisaje de la colina. El jardín trasero, Huwon, solo se visita con guía, a horas fijas y con plazas limitadas.",
        come: "Metro línea 3 hasta Anguk. Reservar con antelación la entrada al jardín.",
        quando: "Cerrado los lunes. Las visitas guiadas tienen horarios fijos.",
        tempo: "2-2,5 horas",
        consiglio: "Sin reserva no se ve el Jardín Secreto: las plazas se agotan.",
      },
      {
        nome: "Bukchon Hanok Village",
        testo: "Barrio de casas tradicionales coreanas entre Gyeongbokgung y Changdeokgung, todavía habitadas. Callejones en cuesta con vistas a los tejados y a la ciudad moderna.",
        come: "A pie desde Anguk (línea 3), unos 10 minutos.",
        quando: "A primera hora de la mañana; respetar los carteles que piden silencio.",
        tempo: "1-1,5 horas",
        consiglio: "Es un barrio donde vive gente: hablar en voz baja.",
      },
      {
        nome: "Memorial de la Guerra de Corea",
        testo: "Gran museo sobre la guerra de 1950-1953, con reconstrucciones, vehículos y salas. Gratuito.",
        come: "Metro líneas 4 y 6 hasta Samgakji.",
        quando: "Cerrado los lunes.",
        tempo: "2-3 horas",
        costo: "Entrada gratuita",
        consiglio: "Conviene verlo antes de la DMZ: sin él, la frontera se queda en una excursión para hacer fotos.",
      },
      {
        nome: "Mercado de Gwangjang",
        testo: "El mercado histórico de Seúl, con comida callejera: bindaetteok (tortitas de judías), mayak gimbap, tteokbokki.",
        come: "Metro línea 1 hasta Jongno 5-ga.",
        quando: "Por la noche.",
        tempo: "1,5 horas",
        consiglio: "Cena callejera entre los puestos: véase la ficha de experiencia.",
      },
      {
        nome: "Fortaleza de Seúl y N Seoul Tower",
        testo: "Un tramo de la muralla de la fortaleza que sube por las colinas con vistas a la ciudad. La torre N Seoul domina Namsan.",
        come: "Senderos desde Hyehwa o desde Namsan; teleférico hasta la torre.",
        quando: "Al atardecer.",
        tempo: "2-3 horas",
        consiglio: "Caminar por un tramo de la muralla ofrece la mejor vista.",
      },
      {
        nome: "Jjimjilbang",
        testo: "La sauna coreana abierta las 24 horas, con bañeras, saunas y zonas comunes donde también se puede dormir.",
        come: "En muchas zonas de la ciudad; se lleva el uniforme que dan en la entrada.",
        quando: "Por la tarde-noche o de madrugada.",
        tempo: "2-3 horas",
        consiglio: "Se está desnudo en las zonas separadas por sexo: es lo normal.",
      },
    ],
    programmi: [
      { titolo: "1 día: palacios y barrios", tappe: ["Gyeongbokgung a la apertura","Bukchon","Changdeokgung (con reserva)","Comida en Insadong","Noche: Gwangjang"] },
      { titolo: "2 días: más historia y panoramas", tappe: ["Día 1: como arriba","Día 2: Memorial de la Guerra","Fortaleza de Seúl y Namsan al atardecer","Noche en un jjimjilbang"] },
    ],
    zone: [
      { nome: "Myeongdong / Jongno", perChi: "Quien quiere palacios y metro", testo: "Zonas cómodas para los palacios y el metro. Más turísticas y concurridas." },
      { nome: "Hongdae / Yeonnam", perChi: "Quien quiere vida nocturna y precios bajos", testo: "Animadas y jóvenes, ruidosas por la noche." },
      { nome: "Seongsu / Itaewon", perChi: "Quien quiere un ritmo más adulto", testo: "Locales más cuidados." },
    ],
    sapori: [
      { nome: "Banchan", testo: "Guarniciones gratuitas que llegan con cada plato y se reponen sin coste." },
      { nome: "Barbacoa coreana", testo: "La carne se da la vuelta uno mismo en la parrilla encastrada en la mesa." },
      { nome: "Gomtang y samgyetang", testo: "Sopas de ternera y de pollo con ginseng." },
      { nome: "Naengmyeon", testo: "Fideos fríos, para probar en verano." },
    ],
    attenzioni: [
      "Ir a Changdeokgung sin reservar el Jardín Secreto: es de aforo limitado.",
      "Fiarse de Google Maps: en Corea no calcula rutas, hacen falta Naver Map o KakaoMap.",
      "Visitar los palacios en martes o lunes: están cerrados.",
      "Olvidar la T-money, que se compra en cualquier minimercado.",
    ],
    esperienzeSlugs: ['gyeongbokgung-hanbok', 'gwangjang-cibo-strada', 'jjimjilbang'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Un callejón de casas tradicionales hanok en el pueblo de Bukchon, con los rascacielos de Seúl al fondo',
    immagine: '/images/corea-del-sud/seoul.jpg',
  },
  {
    slug: 'dmz',
    paeseSlug: 'corea-del-sud',
    ordine: 2,
    nome: 'La DMZ y Panmunjom',
    tipologia: ['storia', 'memoria', 'escursione'],
    giorniConsigliati: '1 día, en excursión desde Seúl',
    visitataPersonalmente: true,
    introduzione:
      "Una franja de tierra de cuatro kilómetros de ancho y 248 de largo que corta la península de costa a costa, a lo largo de la línea donde los combates se detuvieron el 27 de julio de 1953. Se llama Zona Desmilitarizada y es la frontera más militarizada del planeta: un millón de minas, dos ejércitos desplegados y en medio una franja de bosque en la que desde hace setenta años no entra casi nadie.",
    percheAndarci:
      "Es el único lugar del mundo donde se mira dentro de una guerra que nunca terminó. El armisticio de 1953 nunca se convirtió en un tratado de paz: las dos Coreas están técnicamente todavía en guerra. Los túneles, los pueblos escaparate, la estación que espera un tren que no llega: todo lo que se ve aquí desciende de ese documento que nunca se firmó.",
    cosaVedere: [
      "Imjingak, el parque de la memoria justo fuera de la zona controlada, con el Puente de la Libertad y la locomotora acribillada a balazos dejada donde estaba",
      "El Tercer Túnel de Infiltración, descubierto en 1978: 1.635 metros excavados desde el Norte hacia el sur, a 73 metros bajo tierra, capaz de hacer pasar 30.000 soldados por hora y con la cabeza a poco más de 40 kilómetros de Seúl",
      "El Observatorio de Dora, desde el que se ven la ciudad norcoreana de Kaesong, el «pueblo de la propaganda» de Kijong-dong y el mástil de 160 metros construido para superar el del Sur",
      "La estación de Dorasan, inaugurada en 2002 sobre la línea a Pyongyang, con el cartel que no dice «última estación del Sur» sino «primera estación hacia el Norte»",
      "La JSA de Panmunjom, cuando es accesible: las barracas azules a caballo de la línea de demarcación y el Puente Sin Retorno",
    ],
    cosaFare: [
      "Tour estándar de la DMZ, con el Tercer Túnel, el Observatorio de Dora y Dorasan (véase la ficha de experiencia dedicada)",
      "Tour de la JSA de Panmunjom, cuando está abierta: es una experiencia completamente distinta y hay que reservarla con semanas de antelación (véase la ficha de experiencia dedicada)",
      "Visitar el día anterior el Memorial de la Guerra de Corea en Seúl: es lo que hace legible todo lo demás",
      "Atar una cinta en la valla del Puente de la Libertad, donde las familias separadas dejan mensajes desde hace setenta años",
    ],
    doveDormire: "No se duerme allí: la DMZ se hace en el día desde Seúl, con salidas temprano por la mañana y regreso por la tarde.",
    doveMangiare:
      "El almuerzo casi siempre va incluido en el tour, en restaurantes concertados a lo largo de la carretera hacia Paju. La especialidad de la zona es la soja: el área de Jangdan, justo en la frontera, es conocida por sus judías, y el tofu y el doenjang de estas tierras están entre los mejores del país. Dentro de la zona controlada no se compra ni se come nada fuera de los puntos previstos.",
    comeArrivare:
      "Solo con un tour organizado por un operador autorizado, con salida desde Seúl: no se puede acceder por libre, ni en coche ni en transporte público. Los puntos de encuentro están en el centro, con salidas entre las 7 y las 8 de la mañana.",
    comeSpostarsi:
      "En autocar, dentro del tour. Pasado el control militar se sube a un vehículo autorizado con un guía acreditado y uno no se aleja nunca del grupo: los recorridos son fijos y están vigilados.",
    periodoMigliore:
      "todo el año, con los días despejados de otoño e invierno que ofrecen la mejor visibilidad desde el Observatorio de Dora. Las visitas normalmente se suspenden los lunes y en los festivos nacionales, y pueden cancelarse sin previo aviso por maniobras militares o tensiones diplomáticas.",
    costi:
      "Tour estándar orientativamente 50-90 € por persona desde Seúl, a menudo con almuerzo incluido; el tour con la JSA, cuando lo hay, cuesta bastante más por los trámites de autorización.",
    erroriDaEvitare: [
      "Olvidar el pasaporte: sin el original no se pasa el control, y las copias o fotos no valen",
      "Reservar en el último momento: el tour estándar hay que cogerlo con días de antelación, el de la JSA con semanas, porque los datos del pasaporte deben transmitirse con antelación para la autorización militar",
      "Dar por sentada la JSA: desde 2023 el acceso civil a Panmunjom se ha suspendido varias veces y depende de la situación diplomática. Conviene comprobarlo poco antes de la salida, con un plan B ya preparado",
      "Presentarse con ropa inadecuada en los tours de la JSA, donde existe un código de vestimenta: nada de vaqueros rotos, sandalias ni prendas demasiado ligeras",
      "Fotografiar fuera de los puntos permitidos: las restricciones son reales y se hacen respetar",
      "Ir sin haber leído nada: es el único lugar de este viaje donde el contexto histórico cuenta más que el panorama",
    ],
    confronti: [
      {
        titolo: '¿Tour estándar de la DMZ o JSA de Panmunjom?',
        introduzione:
          "Son dos experiencias distintas que a menudo se confunden. El tour estándar lleva a las áreas controladas alrededor de la zona: túnel, observatorio, estación. La JSA lleva dentro de Panmunjom, al único punto donde los soldados de los dos países se miran a pocos metros de distancia. El segundo tour es mucho más difícil de conseguir y desde 2023 no siempre se hace.",
        opzioni: [
          {
            nome: 'Tour estándar de la DMZ',
            sintesi: "Imjingak, Tercer Túnel de Infiltración, Observatorio de Dora, estación de Dorasan. Media jornada o jornada completa desde Seúl.",
            costo: 'orientativamente 50-90 €, almuerzo a menudo incluido',
            durata: '5-8 horas con los traslados',
            pro: [
              "Disponible prácticamente siempre, con salidas diarias",
              "Se reserva con pocos días de antelación",
              "El Tercer Túnel es el momento más físico: se desciende a pie por una galería excavada desde el Norte hacia Seúl",
              "Sin código de vestimenta y con reglas más relajadas",
            ],
            contro: [
              "No se entra en Panmunjom ni se ven soldados norcoreanos",
              "El descenso al túnel es empinado, en un espacio bajo y estrecho: quien sufra de claustrofobia haría mejor en saltárselo",
              "Desde el Observatorio de Dora, con bruma, se ve poco",
            ],
            perChi: "Cualquiera que tenga un día en Seúl y quiera entender la frontera. Normalmente es la elección obligada, porque a menudo es la única.",
          },
          {
            nome: 'Tour de la JSA de Panmunjom',
            sintesi: "El área de seguridad conjunta, con las barracas azules a caballo de la línea de demarcación, la Freedom House y el Puente Sin Retorno.",
            costo: 'sensiblemente más alto que el tour estándar',
            durata: 'jornada completa',
            pro: [
              "Es el único lugar donde se está a pocos metros de los soldados norcoreanos",
              "Dentro de la sala de reuniones se cruza físicamente la línea de la frontera",
              "El Puente Sin Retorno, donde en 1953 los prisioneros eligieron de qué lado quedarse, de una vez por todas",
            ],
            contro: [
              "Acceso civil suspendido varias veces desde 2023 y nunca garantizado: depende de la situación diplomática del momento",
              "Hay que reservarlo con 2-4 semanas de antelación, con los datos del pasaporte transmitidos días antes para la autorización militar",
              "Código de vestimenta, restricciones fotográficas, declaración de responsabilidad que firmar",
              "Puede cancelarse en el último momento, sin reembolso automático del resto del viaje",
            ],
            perChi: "Quien tiene fechas flexibles, reserva con mucha antelación y acepta que pueda caerse.",
          },
        ],
        raccomandazione:
          "Conviene reservar el tour estándar como base segura y, si las fechas lo permiten, intentar la JSA en paralelo, comprobando poco antes de la salida si está abierta. Construir el viaje sobre la JSA es la manera más segura de quedar decepcionado: desde 2023 ha estado más a menudo cerrada que abierta.",
      },
    ],
    miaEsperienza:
      "La DMZ es la etapa que más que ninguna otra hay que preparar leyendo, porque por sí solo el paisaje no dice casi nada: colinas, alambre de espino, un aparcamiento y un autocar. Fue una de las jornadas más fuertes del viaje porque sabíamos lo que estábamos mirando. En el Tercer Túnel todo se vuelve físico: bajamos cientos de metros por una galería de servicio empinadísima, luego seguimos encorvados por un túnel excavado en la roca, con el casco golpeando contra el techo, hasta una barrera de cemento más allá de la cual el túnel continúa hacia el norte. Fue descubierto en 1978, mide poco más de metro y medio de ancho, y por allí habrían podido pasar treinta mil hombres por hora a cuarenta kilómetros de Seúl. Desde el Observatorio de Dora, con los prismáticos, se ven los campos cultivados del Norte y el pueblo de Kijong-dong, construido a propósito para ser mirado: filas de casas con las ventanas sin cristales y las luces encendidas a horas fijas. La que más tiempo me ha quedado es la estación de Dorasan: reluciente, con los paneles de salidas, los tornos y el personal en servicio, espera desde 2002 un tren a Pyongyang. El cartel no dice «última estación del Sur», dice «primera estación hacia el Norte».",
    luoghi: [
      {
        nome: "Imjingak",
        testo: "Parque de la memoria justo fuera de la zona controlada, con el Puente de la Libertad y la locomotora acribillada a balazos, dejada donde estaba.",
        come: "Con excursión organizada desde Seúl (aproximadamente una hora).",
        quando: "Consultar la excursión.",
        tempo: "45 minutos",
        consiglio: "Aquí empieza el recorrido por la DMZ.",
      },
      {
        nome: "Tercer Túnel de infiltración",
        testo: "Descubierto en 1978: 1.635 metros excavados por el Norte, a 73 metros bajo tierra, de aproximadamente metro y medio de ancho. Se baja por una galería de servicio.",
        come: "Excursión; casco incluido.",
        quando: "Con excursión.",
        tempo: "1 hora",
        consiglio: "La bajada y el túnel son duros: el casco es obligatorio.",
      },
      {
        nome: "Observatorio de Dora y Dorasan",
        testo: "Un mirador sobre Corea del Norte y la estación de tren de Dorasan, lista pero nunca puesta en servicio.",
        come: "Con excursión.",
        quando: "Con excursión.",
        tempo: "1 hora",
        consiglio: "Incluido en la excursión estándar.",
      },
      {
        nome: "JSA de Panmunjom",
        testo: "El Área de Seguridad Conjunta, donde se enfrentan las dos Coreas. Se visita con una excursión autorizada, de plazas limitadas.",
        come: "Excursión específica, que hay que reservar con semanas de antelación.",
        quando: "Cuando está abierta; los datos del pasaporte se envían con antelación.",
        tempo: "Media jornada",
        consiglio: "Es una experiencia distinta: conviene saber qué se está mirando.",
      },
    ],
    programmi: [
      { titolo: "1 día: DMZ", tappe: ["Excursión desde primera hora de Seúl","Imjingak","Tercer Túnel","Observatorio de Dora","Vuelta por la tarde"] },
    ],
    zone: [
      { nome: "No hace falta dormir allí", perChi: "Excursión de un día desde Seúl", testo: "Toda la visita se hace con excursión desde Seúl." },
    ],
    sapori: [
      { nome: "Tofu y doenjang de la zona de Jangdan", testo: "La comida casi siempre está incluida en la excursión." },
    ],
    attenzioni: [
      "Olvidar el pasaporte original: sin él no se pasa el control.",
      "Reservar a última hora: la excursión estándar hay que cogerla con días de antelación, la de la JSA con semanas.",
      "Dar por segura la JSA: puede estar cerrada.",
    ],
    esperienzeSlugs: ['tour-dmz-terzo-tunnel', 'jsa-panmunjom'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La zona desmilitarizada entre las dos Coreas vista desde un puesto de observación, con las colinas del Norte en el horizonte',
    immagine: '/images/corea-del-sud/dmz.jpg',
  },
  {
    slug: 'sokcho-seoraksan',
    paeseSlug: 'corea-del-sud',
    ordine: 3,
    nome: 'Sokcho y el Seoraksan',
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      "El parque nacional más famoso de Corea, en la costa oriental: crestas de granito, monasterios encajados en la roca y, en octubre, el foliage que en este país es un acontecimiento nacional seguido boletín a boletín. A sus pies está Sokcho, ciudad de pescadores con una historia poco contada.",
    percheAndarci:
      "Es el contrapeso natural de Seúl. Y Sokcho tiene una historia precisa: hasta 1945 estaba en el territorio asignado después al Norte, y tras la guerra se llenó de refugiados norcoreanos que nunca pudieron volver a casa. El barrio de Abai, construido por ellos, sigue existiendo.",
    cosaVedere: [
      "El parque nacional del Seoraksan, con el Buda de bronce de Sinheungsa en la entrada",
      "El teleférico a Gwongeumseong, que ahorra la subida a quien no quiere caminar",
      "La ermita de Ulsanbawi, en lo alto de 808 escalones metálicos a lo largo de una pared de granito",
      "El pueblo de Abai en Sokcho, fundado por los refugiados norcoreanos, al que se llega con el galsseonbae, la barcaza de cable que se tira a mano",
      "El mercado de pescado de Sokcho, uno de los mejores de la costa oriental",
    ],
    cosaFare: [
      "Subida a Ulsanbawi, unas 4 horas de ida y vuelta, con el último tramo por escaleras metálicas sobre el vacío",
      "Cruzar el canal de Abai en la barcaza de cable, tirando de ella junto con los demás pasajeros",
      "Comer el ojingeo sundae, el calamar relleno que es la especialidad de los refugiados del Norte",
      "Subida al Daecheongbong, la cima del macizo, para quien tenga una jornada entera y piernas entrenadas",
    ],
    doveDormire:
      "Sokcho es la base natural, con la oferta más amplia y el mar a dos pasos; los moteles y las pensiones cerca de la entrada del parque son más cómodos para salir al amanecer pero mucho más austeros.",
    doveMangiare:
      "Sokcho vive del pescado: el mercado central es el sitio adecuado, con puestos que cocinan al momento. El plato identitario, sin embargo, es el ojingeo sundae, el calamar relleno, traído aquí por los refugiados norcoreanos y convertido en lo que más reivindica la ciudad. Hay que probar también el cangrejo y, en temporada, el pescado crudo servido a la coreana, con hojas de lechuga y pasta de guindilla.",
    comeArrivare:
      "Autobús exprés desde Seúl, unas 2h30 desde la Express Bus Terminal o desde Dong Seoul: el tren no llega hasta aquí y el autobús es el medio normal. Los autobuses coreanos de larga distancia son muy cómodos, con asientos reclinables.",
    comeSpostarsi: "Autobuses locales frecuentes entre Sokcho y la entrada del parque (unos 30 minutos); taxis económicos para los trayectos cortos.",
    periodoMigliore:
      "octubre es el mes del foliage y también aquel en que el parque está más concurrido: los fines de semana de octubre los senderos se recorren en fila. Mayo es la mejor alternativa. En invierno el parque sigue abierto pero los senderos altos se hielan.",
    costi: "entrada al parque unos pocos euros; teleférico a Gwongeumseong en torno a los 11.000 won ida y vuelta.",
    erroriDaEvitare: [
      "Ir un fin de semana de octubre: en Corea el foliage es un fenómeno de masas y el parque se llena más de lo que uno imagina",
      "Subestimar los 808 escalones de Ulsanbawi: son escaleras metálicas empinadas sobre una pared expuesta, y la bajada pesa más que la subida",
      "Quedarse en el Seoraksan y saltarse Abai, que es el motivo por el que Sokcho merece una noche y no media jornada",
    ],
    miaEsperienza:
      "El Seoraksan es bonito, pero por cómo nos fue a nosotros el motivo para venir hasta aquí está en el valle. Sokcho parece una ciudad de costa cualquiera hasta que descubres lo que es el barrio de Abai: lo construyeron los refugiados llegados del Norte durante la guerra, convencidos de quedarse unos meses, y que se quedaron para siempre. Llegamos cruzando un canal en una barcaza de cable que los pasajeros tiran a mano, todos juntos, con ganchos: cuesta unos céntimos, dura dos minutos y vale más que muchas atracciones. En el monte, la subida a Ulsanbawi es dura en el tramo final, ochocientos escalones metálicos sobre una pared de granito con el vacío debajo, pero la vista desde la cima sobre la costa y el mar compensa el esfuerzo. Quien llega un fin de semana de octubre encuentra una fila de gente en los escalones y una espera que estropea la jornada: aquí más que en otros sitios el día laborable es una condición.",
    luoghi: [
      {
        nome: "Parque Nacional de Seoraksan",
        testo: "Macizo granítico con valles, cascadas y senderos. En la entrada está el Buda de bronce de Sinheungsa.",
        come: "Autobús local desde Sokcho (unos 30 minutos) o taxi.",
        quando: "Primavera y otoño; en octubre el follaje atrae multitudes.",
        tempo: "Jornada completa",
        consiglio: "Evitar los fines de semana de octubre.",
      },
      {
        nome: "Gwongeumseong",
        testo: "Fortaleza en la cima, a la que se llega en teleférico, que ahorra la subida.",
        come: "Teleférico desde el parque.",
        quando: "Por la mañana.",
        tempo: "1,5 horas",
        consiglio: "Útil para quien no quiere caminar.",
      },
      {
        nome: "Ulsanbawi",
        testo: "Ermita en lo alto de 808 escalones metálicos a lo largo de una pared de granito, con vistas a la costa.",
        come: "A pie desde el parque, unas 4 horas ida y vuelta.",
        quando: "Por la mañana, con buen tiempo.",
        tempo: "4 horas",
        consiglio: "La bajada pesa más que la subida: rodillas y calzado adecuado.",
      },
      {
        nome: "Pueblo de Abai",
        testo: "Barrio construido por los refugiados del Norte durante la guerra, al que se llega en una barcaza de cable que los pasajeros tiran a mano.",
        come: "Desde el centro de Sokcho, a pie o en taxi.",
        quando: "Todo el día.",
        tempo: "1-2 horas",
        consiglio: "Cuesta unos céntimos y vale más que muchas atracciones.",
      },
    ],
    programmi: [
      { titolo: "2 días: Sokcho y Seoraksan", tappe: ["Día 1: Seoraksan y Ulsanbawi","Noche: mercado de Sokcho","Día 2: Abai y la barcaza, ojingeo sundae"] },
    ],
    zone: [
      { nome: "Ciudad de Sokcho", perChi: "Quien quiere mar y mercado", testo: "Cómoda para el mercado y los autobuses del parque." },
    ],
    sapori: [
      { nome: "Ojingeo sundae", testo: "Calamar relleno, especialidad de los refugiados del Norte." },
      { nome: "Pescado y cangrejo", testo: "En el mercado central, con puestos que cocinan al momento." },
    ],
    attenzioni: [
      "Ir en fin de semana de octubre.",
      "Subestimar los 808 escalones de Ulsanbawi.",
      "Quedarse en Seoraksan y saltarse Abai.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Una cabina del teleférico del Seoraksan sobre los bosques del parque nacional',
    immagine: '/images/corea-del-sud/sokcho-seoraksan.jpg',
  },
  {
    slug: 'andong',
    paeseSlug: 'corea-del-sud',
    ordine: 4,
    nome: 'Andong y el pueblo de Hahoe',
    tipologia: ['cultura', 'borghi', 'storia'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      "El corazón del confucianismo coreano, en la provincia de Gyeongsang del Norte: el pueblo de Hahoe, patrimonio de la UNESCO, está habitado por la misma familia desde hace seiscientos años y conserva casas de nobles y de campesinos dentro del mismo perímetro, en un meandro del río Nakdong.",
    percheAndarci:
      "Aquí se entiende la estructura social que sostuvo Corea durante quinientos años. Y la danza de las máscaras de Hahoe es una de las pocas formas de sátira popular que han sobrevivido: una vez al año los campesinos ridiculizaban a los nobles, con su permiso.",
    cosaVedere: [
      "El pueblo de Hahoe, con las casas de techo de paja de los campesinos y las de techo de tejas de los nobles",
      "El Museo de las máscaras de Hahoe, con los ejemplares originales de madera, tesoro nacional",
      "La academia confuciana de Dosan Seowon, también patrimonio de la UNESCO, inmersa en los bosques",
      "El acantilado de Buyongdae, al otro lado del río, desde donde se ve el pueblo en el meandro",
    ],
    cosaFare: [
      "Asistir al espectáculo de máscaras byeolsingut, que se celebra con regularidad los fines de semana",
      "Cruzar el río en barca y subir a Buyongdae para la vista desde arriba",
      "Dormir en un hanok tradicional dentro del pueblo, que es la única manera de verlo por la noche",
      "Comer el andong jjimdak, el pollo estofado con verduras y fideos de batata que lleva el nombre de la ciudad",
    ],
    doveDormire:
      "Dentro de Hahoe, en una de las casas tradicionales que alquilan habitaciones: se duerme en un colchón fino sobre el suelo calefactado, los baños son compartidos, y a las cinco de la tarde, cuando los autocares se van, el pueblo vuelve a ser un pueblo. Es la única razón para no hacerlo en el día.",
    doveMangiare:
      "El andong jjimdak es el plato de la ciudad y se come en el mercado viejo, donde toda una galería está ocupada por restaurantes que hacen solo eso. La otra especialidad es el heotjesatbap, un bibimbap «de ceremonia» nacido de las ofrendas rituales confucianas, servido sin guindilla y con las verduras dispuestas según una regla precisa. Hay que probar también el soju de Andong, mucho más fuerte que el industrial.",
    comeArrivare:
      "Tren o autobús exprés desde Seúl, unas 2-3 horas según el medio. De Andong al pueblo de Hahoe hay un autobús local que tarda unos 40 minutos y pasa poco: antes de salir conviene mirar los horarios de vuelta.",
    comeSpostarsi: "Autobuses locales entre la ciudad y los sitios; el pueblo se recorre enteramente a pie.",
    periodoMigliore:
      "primavera y otoño. A finales de septiembre-principios de octubre se celebra el festival internacional de las máscaras: llena la ciudad y es a la vez el mejor momento y el más concurrido.",
    costi: "entrada a Hahoe en torno a los 5.000 won, espectáculo de máscaras a menudo gratuito.",
    erroriDaEvitare: [
      "Hacerlo en el día desde Seúl: significa ver el pueblo solo en las horas de los autocares, que son las peores",
      "No comprobar los horarios del autobús de vuelta desde Hahoe: los servicios son pocos y el último sale pronto",
      "Esperar un museo al aire libre: es un pueblo habitado, con familias que viven en él, y hay que tratarlo como tal",
    ],
    miaEsperienza:
      "Casi ningún itinerario extranjero incluye Hahoe, y sin embargo explica más cosas que muchos museos. No es un pueblo reconstruido: todavía viven en él los descendientes de la misma familia, las casas están habitadas y en los patios hay ropa tendida y aperos agrícolas. Me impresionó el urbanismo social: las casas de los nobles, con tejados de tejas, están arriba y en el centro, las de los campesinos, con tejados de paja, todo alrededor, y la jerarquía se lee caminando. La danza de las máscaras es la otra cara de la misma moneda: una vez al año los campesinos representaban un espectáculo en el que el monje es corrupto y el noble un idiota, y los nobles asistían. Dormir allí cambia la visita: a las cinco los autocares se van todos a la vez y quedan el río, los perros y algún anciano sentado fuera.",
    luoghi: [
      {
        nome: "Pueblo de Hahoe",
        testo: "Pueblo Patrimonio de la UNESCO, todavía habitado por los descendientes de la misma familia. Las casas de los nobles (techo de tejas) están arriba y en el centro, las de los campesinos (techo de paja) alrededor.",
        come: "Autobús local desde Andong (unos 50 minutos); el último sale pronto.",
        quando: "A primera hora de la mañana y por la tarde-noche.",
        tempo: "3-4 horas",
        consiglio: "Dormir allí cambia la visita: el anochecer y el amanecer son otro lugar.",
      },
      {
        nome: "Museo de las máscaras de Hahoe",
        testo: "Museo con máscaras originales de madera, tesoro nacional.",
        come: "Fuera del pueblo, a pocos minutos a pie.",
        quando: "Abierto con horarios fijos.",
        tempo: "1 hora",
        consiglio: "Para entender el teatro de máscaras.",
      },
      {
        nome: "Dosan Seowon",
        testo: "Academia confuciana Patrimonio de la UNESCO, inmersa en el bosque.",
        come: "Autobús local y taxi.",
        quando: "Por la mañana.",
        tempo: "1,5 horas",
        consiglio: "Silencio y naturaleza.",
      },
      {
        nome: "Buyongdae",
        testo: "Acantilado en la orilla opuesta del río, con vistas desde lo alto al pueblo.",
        come: "Se cruza el río en barca.",
        quando: "Por la tarde.",
        tempo: "1 hora",
        consiglio: "Desde arriba se lee el mapa del pueblo.",
      },
    ],
    programmi: [
      { titolo: "2 días: Hahoe y Andong", tappe: ["Día 1: Hahoe, museo de las máscaras, noche en un hanok","Día 2: Buyongdae, Dosan Seowon, cena con jjimdak"] },
    ],
    zone: [
      { nome: "Hahoe (hanok)", perChi: "Quien quiere ver el pueblo de noche", testo: "Dormir en una casa tradicional dentro del pueblo." },
    ],
    sapori: [
      { nome: "Andong jjimdak", testo: "Pollo estofado con verduras y fideos, en la galería del mercado." },
      { nome: "Heotjesatbap", testo: "Bibimbap «ceremonial» sin guindilla." },
    ],
    attenzioni: [
      "Hacerlo en el día desde Seúl.",
      "No comprobar el horario del último autobús.",
      "Tratar el pueblo como un museo: está habitado.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'El pueblo de Hahoe en el meandro del río Nakdong, con las montañas detrás, Andong',
    immagine: '/images/corea-del-sud/andong.jpg',
  },
  {
    slug: 'gyeongju',
    paeseSlug: 'corea-del-sud',
    ordine: 5,
    nome: 'Gyeongju',
    tipologia: ['storia', 'cultura', 'archeologia'],
    giorniConsigliati: '2 días',
    visitataPersonalmente: true,
    introduzione:
      "Fue la capital del reino de Silla durante casi mil años, del 57 a. C. al 935 d. C. Es una ciudad baja donde en lugar de palacios hay decenas de túmulos funerarios cubiertos de hierba, altos como colinas, en medio de las calles y de los parques. La llaman «el museo sin muros», y por una vez la definición es exacta.",
    percheAndarci:
      "Es el único lugar de Corea donde la historia antigua se ve a cielo abierto, sin reconstrucciones. Y Bulguksa y la ermita de Seokguram, ambos patrimonio de la UNESCO, son las dos obras maestras del arte budista coreano.",
    cosaVedere: [
      "Los túmulos reales de Daereungwon, con la Tumba del Caballo Celeste abierta y visitable por dentro",
      "El templo de Bulguksa, con las dos pagodas de piedra del siglo VIII",
      "La ermita de Seokguram, la gruta artificial del monte con el Buda de granito que mira hacia el mar",
      "El estanque de Donggung y Wolji (Anapji), que de noche se refleja en los pabellones iluminados",
      "Cheomseongdae, el observatorio astronómico del siglo VII, entre los más antiguos del mundo todavía en pie",
      "El Museo Nacional de Gyeongju, con la corona de oro de Silla",
    ],
    cosaFare: [
      "Vuelta a los túmulos en bicicleta, que es la manera correcta de moverse por esta ciudad",
      "Bulguksa y Seokguram en la misma mañana (véase la ficha de experiencia dedicada)",
      "Templestay en un monasterio, para dormir y levantarse con los monjes (véase la ficha de experiencia dedicada)",
      "Anapji después del atardecer, cuando se encienden las luces sobre el agua",
    ],
    doveDormire:
      "La zona alrededor de Daereungwon es la más cómoda, con las guesthouses en hanok que son la elección más coherente con el lugar. Bomun Lake es el barrio de los resorts, cómodo en coche pero lejos de todo lo demás a pie.",
    doveMangiare:
      "Gyeongju tiene dos especialidades: el ssambap, una comida en la que llegan veinte cuencos pequeños de verduras, carne y salsas para envolver en hojas, y el pan de Hwangnam, un dulce relleno de judías rojas que aquí se vende en cajas de regalo y se come caminando. En la zona del mercado está la cocina de todos los días a precios bajos.",
    comeArrivare:
      "KTX hasta Singyeongju, unas 2 horas desde Seúl y 30 minutos desde Busan, luego autobús o taxi al centro (la estación está fuera de la ciudad). Es una parada intermedia cómoda entre Seúl y Busan.",
    comeSpostarsi:
      "La bicicleta es el medio adecuado: el centro histórico es llano y los sitios están cerca. Para Bulguksa y Seokguram, fuera de la ciudad en el monte Toham, hacen falta autobuses locales o taxi, y entre los dos hay todavía una carretera de montaña.",
    periodoMigliore:
      "abril por los cerezos, que aquí florecen alrededor de los túmulos y están entre los más bonitos del país, y octubre-noviembre por el foliage. El verano es caluroso y húmedo.",
    costi: "Bulguksa y Seokguram unos 6.000 won cada uno, Daereungwon 3.000, Museo Nacional gratuito.",
    erroriDaEvitare: [
      "Hacerla en el día desde Busan: Gyeongju necesita dos días y sobre todo una noche, porque Anapji iluminado es lo más bonito de la ciudad",
      "Programar Seokguram sin comprobar las conexiones: desde la entrada de Bulguksa hay todavía una carretera de montaña y los autobuses son escasos",
      "Esperar ver el Buda de Seokguram de cerca: está protegido por una vidriera y se mira desde la antesala, lo que decepciona a quien no lo sabe de antemano",
    ],
    miaEsperienza:
      "Sobre el papel Gyeongju se subestima; para nosotros fue la etapa más reposada y quizá la más bonita del viaje. Los túmulos reales no están encerrados en un parque arqueológico: están en medio de la ciudad, colinas de hierba de veinte metros de altura junto a un cruce, y dimos vueltas a su alrededor en bicicleta como si nada. Uno está abierto y se entra, con la corona de oro expuesta en el punto exacto en que fue encontrada. Bulguksa es precioso y está muy concurrido. Seokguram, allá arriba en el monte, es lo que deja huella: una gruta artificial del siglo VIII, hecha de bloques de granito ensamblados sin mortero, con un Buda sentado que mira hacia el mar del Este. Se observa detrás de un cristal, desde la antesala, y quien no lo sabe de antemano se decepciona. El mejor momento, sin embargo, es Anapji después de anochecer, con los pabellones reflejados en el estanque: dura media hora y vale la jornada.",
    luoghi: [
      {
        nome: "Daereungwon y Cheonmachong",
        testo: "El parque de los túmulos reales de Silla, en medio de la ciudad. La tumba del Caballo Celestial está abierta y se puede visitar, con la corona de oro en el punto donde se encontró.",
        come: "A pie o en bicicleta desde el centro.",
        quando: "Todo el día.",
        tempo: "1 hora",
        consiglio: "Se rodea en bicicleta como si nada.",
      },
      {
        nome: "Bulguksa",
        testo: "Templo del siglo VIII con las dos pagodas de piedra, Patrimonio de la UNESCO.",
        come: "Autobús o taxi desde el centro, a las afueras, en el monte Toham.",
        quando: "A primera hora de la mañana.",
        tempo: "1,5 horas",
        url: "https://www.bulguksa.or.kr/",
        consiglio: "Muy bonito y muy concurrido.",
      },
      {
        nome: "Seokguram",
        testo: "Gruta artificial del siglo VIII con un Buda de granito que mira al mar. Se observa a través de un cristal.",
        come: "Carretera de montaña desde Bulguksa; autobuses poco frecuentes.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        consiglio: "Comprobar los enlaces de transporte.",
      },
      {
        nome: "Donggung y Wolji (Anapji)",
        testo: "Estanque de palacio de Silla que por la noche se refleja iluminado.",
        come: "A pie o en bicicleta desde el centro.",
        quando: "Después del atardecer.",
        tempo: "1 hora",
        consiglio: "Iluminado es lo más bonito de la ciudad.",
      },
      {
        nome: "Templestay",
        testo: "Un monasterio donde se duerme y se madruga con los monjes.",
        come: "Reservar con antelación.",
        quando: "Una noche.",
        tempo: "1 noche",
        consiglio: "Véase la ficha de experiencia.",
      },
    ],
    programmi: [
      { titolo: "2 días: Gyeongju", tappe: ["Día 1: túmulos en bicicleta, Anapji al atardecer","Día 2: Bulguksa y Seokguram"] },
    ],
    zone: [
      { nome: "Centro histórico", perChi: "Quien quiere moverse en bicicleta", testo: "Centro llano con los sitios cerca." },
    ],
    sapori: [
      { nome: "Ssambap", testo: "Veinte cuencos pequeños para envolver en hojas." },
      { nome: "Pan de Hwangnam", testo: "Dulce de judías rojas, vendido en cajas de regalo." },
    ],
    attenzioni: [
      "Hacerla en el día desde Busan.",
      "Planificar Seokguram sin comprobar los enlaces de transporte.",
      "Esperar ver el Buda de cerca.",
    ],
    esperienzeSlugs: ['bulguksa-seokguram', 'templestay'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Los pabellones del palacio de Donggung iluminados y reflejados en el estanque de Wolji al anochecer, Gyeongju',
    immagine: '/images/corea-del-sud/gyeongju.jpg',
  },
  {
    slug: 'busan',
    paeseSlug: 'corea-del-sud',
    ordine: 6,
    nome: 'Busan',
    tipologia: ['città', 'mare', 'gastronomia'],
    giorniConsigliati: '3 días',
    visitataPersonalmente: true,
    introduzione:
      "La segunda ciudad del país y su puerto principal, tendida entre el mar y las colinas: playas urbanas, el mercado de pescado más grande de Corea, un templo construido sobre los acantilados y un barrio de casas de colores que nació como chabolas de refugiados de guerra.",
    percheAndarci:
      "Es exactamente lo contrario de Seúl: más lenta, más ruidosa, más meridional. Durante la guerra de Corea fue la única gran ciudad que nunca cayó. El perímetro de Busan fue el último trozo de país en resistir, y la ciudad se llenó de cientos de miles de refugiados que ya no se fueron.",
    cosaVedere: [
      "El pueblo cultural de Gamcheon, el barrio de casas de colores aferradas a la colina, nacido como asentamiento de refugiados",
      "El mercado de pescado de Jagalchi, el más grande de Corea, gestionado históricamente por mujeres",
      "El templo de Haedong Yonggungsa, construido sobre los acantilados a pico sobre el mar",
      "Las playas de Haeundae y Gwangalli, con el puente iluminado por la noche",
      "El cementerio conmemorativo de las Naciones Unidas, el único del mundo dedicado a los caídos de la ONU, con soldados de veintidós países",
      "El mercado de Gukje y los callejones de Bosu-dong, la calle de los libreros fundada por los refugiados",
    ],
    cosaFare: [
      "Recorrer Gamcheon de arriba abajo, siguiendo los callejones (véase la ficha de experiencia dedicada)",
      "Desayuno de pescado crudo en la segunda planta del Jagalchi, donde se compra abajo y se hace cocinar arriba",
      "Sendero costero de Igidae, con la vista frontal del skyline de Haeundae",
      "Noche en Gwangalli, con el puente iluminado y los locales en la playa",
      "Visita al cementerio de la ONU, donde la guerra vuelve a estar hecha de nombres",
    ],
    doveDormire:
      "Haeundae por la playa y los servicios, Seomyeon para estar en el centro de los transportes y de la vida nocturna, Nampo-dong por el puerto, los mercados y Gamcheon. Busan es larga y estrecha: el metro lo resuelve, pero la elección de la zona cambia las jornadas.",
    doveMangiare:
      "Busan es una ciudad de mar y se come en consecuencia. Las especialidades son el dwaeji gukbap, la sopa de cerdo con arroz nacida aquí mismo durante la guerra a partir de los restos que los refugiados podían permitirse, y el milmyeon, los fideos fríos de harina, versión pobre del naengmyeon del Norte. Son dos platos que cuentan la historia de la ciudad. En el Jagalchi se compra el pescado en el puesto y se hace cocinar en la planta de arriba, con un suplemento. Hay que probar también los ssiat hotteok, las tortitas dulces rellenas de semillas, en el mercado de Gukje.",
    comeArrivare:
      "KTX desde Seúl en poco más de 2h30, el trayecto ferroviario más transitado del país: conviene reservar unos días antes. Vuelo a Gimhae (PUS) para quien llega desde Jeju.",
    comeSpostarsi: "Metro con cuatro líneas y T-money; autobús para Gamcheon y Haedong Yonggungsa, que no tienen servicio de metro.",
    periodoMigliore:
      "mayo-junio y septiembre-octubre. Julio y agosto son la temporada de playas y Haeundae se convierte en una alfombra de sombrillas; en octubre se celebra el festival internacional de cine, el más importante de Asia.",
    costi: "casi todo gratuito o casi: Gamcheon se visita libremente, el templo es gratuito, los mercados son mercados.",
    erroriDaEvitare: [
      "Tratar Gamcheon como un fondo para fotografías: es un barrio habitado, con ancianos que viven en esas casas, y los carteles que piden silencio hay que respetarlos",
      "Ir a Haedong Yonggungsa en fin de semana, cuando el recorrido por los acantilados se hace en fila india",
      "Saltarse el cementerio de la ONU porque «es un cementerio»: es el lugar que da sentido a todo lo que se ha visto en la DMZ",
      "Subestimar las distancias: Busan se alarga treinta kilómetros a lo largo de la costa",
    ],
    miaEsperienza:
      "Busan me gustó precisamente porque no es Seúl: es más desordenada y más ruidosa, la gente habla más alto y el dialecto se nota incluso sin saber coreano. De Gamcheon todos enseñan las fotos, y conviene ser precisos: esas casas de colores en la colina nacieron como chabolas para los refugiados de guerra, y la pintura llegó solo en los años 2000 con un proyecto de regeneración. Sabiéndolo, caminar dentro es distinto de fotografiarlo. La etapa que nadie pone en el programa, y que más me ha quedado, es el cementerio de las Naciones Unidas: filas de lápidas de chicos de veintidós países, muchos de veinte años, en un jardín silencioso en medio de la ciudad. Después de la DMZ, que es toda geopolítica, allí la guerra vuelve a estar hecha de nombres. De la comida, un solo consejo: el dwaeji gukbap parece una sopa cualquiera y nació del hambre de esta ciudad en 1951. Comerlo en uno de los locales históricos cerca del puerto es lo más busanés que se puede hacer.",
    luoghi: [
      {
        nome: "Pueblo de Gamcheon",
        testo: "Barrio de casas de colores en la colina, nacido como asentamiento de refugiados de guerra.",
        come: "Autobús desde el metro.",
        quando: "A primera hora de la mañana.",
        tempo: "2 horas",
        consiglio: "Es un barrio habitado: respetar los carteles que piden silencio.",
      },
      {
        nome: "Mercado de Jagalchi",
        testo: "El mayor mercado de pescado de Corea, llevado por mujeres. Se compra abajo y se hace cocinar arriba.",
        come: "Metro línea 1 hasta Jagalchi.",
        quando: "Por la mañana.",
        tempo: "1,5 horas",
        consiglio: "Desayuno de pescado crudo en el segundo piso.",
      },
      {
        nome: "Haedong Yonggungsa",
        testo: "Templo construido sobre los acantilados, a pico sobre el mar.",
        come: "Autobús.",
        quando: "Evitar el fin de semana.",
        tempo: "1,5 horas",
        consiglio: "En fin de semana se camina en fila india.",
      },
      {
        nome: "Haeundae y Gwangalli",
        testo: "Las dos playas, con el skyline y el puente iluminado.",
        come: "Metro.",
        quando: "Por la tarde-noche en Gwangalli.",
        tempo: "2 horas",
        consiglio: "El sendero costero de Igidae muestra el skyline.",
      },
      {
        nome: "Cementerio de la ONU",
        testo: "Jardín con las lápidas de soldados de veintidós países, en medio de la ciudad.",
        come: "Metro y un breve tramo a pie.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        consiglio: "Da sentido al viaje después de la DMZ.",
      },
    ],
    programmi: [
      { titolo: "2 días: Busan", tappe: ["Día 1: Gamcheon, Jagalchi, Gwangalli","Día 2: Haedong Yonggungsa, Igidae, cementerio de la ONU"] },
    ],
    zone: [
      { nome: "Haeundae", perChi: "Quien quiere playa", testo: "Zona turística con hoteles." },
      { nome: "Seomyeon / Nampo", perChi: "Quien quiere metro y locales", testo: "Céntrica." },
    ],
    sapori: [
      { nome: "Dwaeji gukbap", testo: "Sopa de cerdo con arroz nacida durante la guerra." },
      { nome: "Milmyeon", testo: "Fideos fríos de harina." },
    ],
    attenzioni: [
      "Tratar Gamcheon como un simple fondo de foto.",
      "Haedong Yonggungsa en fin de semana.",
      "Saltarse el cementerio de la ONU.",
    ],
    esperienzeSlugs: ['gamcheon-busan'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La playa de Haeundae de noche con las torres del LCT iluminadas, Busan',
    immagine: '/images/corea-del-sud/busan.jpg',
  },
  {
    slug: 'jeonju',
    paeseSlug: 'corea-del-sud',
    ordine: 7,
    nome: 'Jeonju',
    tipologia: ['gastronomia', 'cultura', 'borghi'],
    giorniConsigliati: '1-2 días',
    visitataPersonalmente: true,
    introduzione:
      "La ciudad donde nació el bibimbap y donde sobrevive el mayor pueblo de hanok de Corea: más de ochocientas casas tradicionales en un solo barrio, en una ciudad que la UNESCO ha reconocido como ciudad creativa de la gastronomía.",
    percheAndarci:
      "Es la capital gastronómica del país. Y el barrio de hanok, por turístico que sea, es el único lugar donde se puede dormir en una casa tradicional sin salir de la ciudad.",
    cosaVedere: [
      "El pueblo de hanok, con las más de ochocientas casas de tejados curvos",
      "El santuario de Gyeonggijeon, con el retrato del fundador de la dinastía Joseon",
      "La catedral de Jeondong, de ladrillo rojo, construida donde fueron ejecutados los primeros mártires católicos coreanos",
      "El mirador de Omokdae, desde el que se ven todos los tejados del pueblo juntos",
      "El mercado de Nambu, con su sección nocturna los fines de semana",
    ],
    cosaFare: [
      "Comer el bibimbap en la ciudad donde nació, servido en un cuenco de latón con una docena de ingredientes dispuestos en rayos",
      "Recorrer el pueblo en hanbok, como hacen casi todos los coreanos que vienen aquí",
      "Dormir en un hanok, con el suelo calentado por el ondol",
      "Probar el makgeolli de Jeonju, servido en grandes jarras con una mesa llena de acompañamientos incluidos",
    ],
    doveDormire:
      "Dentro del pueblo de hanok, que es el motivo por el que uno se detiene: se duerme en un colchón sobre el suelo caliente, en habitaciones austeras, con los baños a menudo compartidos. Fuera del pueblo los hoteles cuestan menos pero la parada pierde sentido.",
    doveMangiare:
      "El bibimbap de Jeonju es distinto del del resto del país: arroz cocido en caldo de ternera, una docena de verduras, ternera cruda aliñada y una yema, todo en un cuenco de latón. Hay que mezclarlo con energía. Las otras instituciones locales son el kongnamul gukbap, la sopa de brotes de soja que aquí se come por la mañana tras una noche de makgeolli, y los «makgeolli alley», donde pides la bebida y con cada jarra llegan gratis más y más acompañamientos.",
    comeArrivare: "KTX desde Seúl en aproximadamente 1h40, o autobús exprés. La estación está a unos kilómetros del pueblo de hanok, conectada por autobuses urbanos y taxis.",
    comeSpostarsi: "El pueblo se recorre a pie; para el resto de la ciudad, autobuses locales y taxis.",
    periodoMigliore: "primavera y otoño; en octubre se celebra el festival de la comida. Los fines de semana el pueblo está lleno de visitantes coreanos.",
    costi: "entrada al pueblo gratuita, Gyeonggijeon unos 3.000 won; bibimbap 10.000-15.000 won en los locales históricos.",
    erroriDaEvitare: [
      "Ir en fin de semana: el pueblo de hanok es uno de los destinos nacionales más populares de Corea y esos días se camina en medio de la multitud",
      "Quedarse solo en la calle principal, que es toda tiendas de comida para llevar: las calles laterales todavía tienen casas habitadas",
      "Esperar un pueblo antiguo intacto: muchos hanok son reconstrucciones recientes, y el barrio es una operación de conservación",
    ],
    miaEsperienza:
      "Jeonju merece la parada por una sola razón, y basta: se viene aquí a comer. El bibimbap en el cuenco de latón, con el arroz cocido en caldo en vez de en agua, es más rico que el que se come en otros sitios, y hay que mezclarlo con energía hasta dejarlo todo homogéneo, lo contrario de lo que hace quien quiere salvar la disposición para la foto. El pueblo de hanok es muy turístico: la calle principal es una fila continua de puestos de comida callejera y de tiendas que alquilan hanbok, y en fin de semana uno se mueve con dificultad. Pero bastan dos travesías para encontrar patios silenciosos y casas todavía habitadas. Y dormir en un hanok con el suelo caliente bajo la espalda lo recuerdo mejor que muchas atracciones.",
    luoghi: [
      {
        nome: "Pueblo de hanok",
        testo: "Más de ochocientas casas de tejados curvos, muy turístico. Las calles laterales aún tienen casas habitadas.",
        come: "A pie.",
        quando: "Día laborable.",
        tempo: "3 horas",
        consiglio: "Bastan dos travesías para llegar a patios silenciosos.",
      },
      {
        nome: "Gyeonggijeon",
        testo: "Santuario con el retrato del fundador de la dinastía Joseon.",
        come: "A pie desde el pueblo.",
        quando: "Por la mañana.",
        tempo: "45 minutos",
        consiglio: "Poca gente.",
      },
      {
        nome: "Catedral de Jeondong",
        testo: "Catedral de ladrillo rojo construida donde fueron ejecutados los primeros mártires católicos.",
        come: "A pie.",
        quando: "Todo el día.",
        tempo: "30 minutos",
        consiglio: "Cerca del pueblo.",
      },
      {
        nome: "Omokdae",
        testo: "Mirador sobre los tejados del pueblo.",
        come: "A pie, con una breve subida.",
        quando: "Al atardecer.",
        tempo: "30 minutos",
        consiglio: "Panorama sobre el pueblo.",
      },
    ],
    programmi: [
      { titolo: "1 día: Jeonju", tappe: ["Pueblo de hanok","Comida con bibimbap","Gyeonggijeon y catedral","Omokdae al atardecer"] },
    ],
    zone: [
      { nome: "Hanok en el pueblo", perChi: "Quien quiere dormir en una casa tradicional", testo: "Suelo calentado por el ondol." },
    ],
    sapori: [
      { nome: "Bibimbap de Jeonju", testo: "Arroz cocido en caldo de ternera, en cuenco de latón." },
      { nome: "Makgeolli", testo: "Se sirve en grandes jarras." },
      { nome: "Kongnamul gukbap", testo: "Sopa de brotes de soja." },
    ],
    attenzioni: [
      "Ir en fin de semana.",
      "Quedarse en la calle principal.",
      "Esperar un pueblo antiguo intacto.",
    ],
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Los tejados de tejas del pueblo hanok de Jeonju vistos desde arriba, con la ciudad moderna detrás',
    immagine: '/images/corea-del-sud/jeonju.jpg',
  },
  {
    slug: 'jeju',
    paeseSlug: 'corea-del-sud',
    ordine: 8,
    nome: 'Jeju y las haenyeo',
    tipologia: ['isole', 'natura', 'cultura'],
    giorniConsigliati: '4 días, de los cuales al menos uno dedicado a la costa este y a las haenyeo',
    visitataPersonalmente: true,
    introduzione:
      "Una isla volcánica al sur de la península, dominada por el Hallasan, la montaña más alta de Corea del Sur. El mar alrededor es frío, y desde hace siglos se sumergen en apnea mujeres que hoy tienen de media más de setenta años, para recoger moluscos y algas. Son las haenyeo, y desde 2016 su cultura es patrimonio inmaterial de la UNESCO.",
    percheAndarci:
      "Por la isla, que tiene cráteres, cascadas, tubos de lava y un sendero costero de 437 kilómetros. Y sobre todo por las haenyeo: es una de las últimas ocasiones de ver en vivo una práctica que se está acabando y que durante siglos ha moldeado la sociedad y la economía de la isla, un caso sin igual en el Asia oriental.",
    cosaVedere: [
      "El Museo de las haenyeo en Gujwa-eup, en la costa oriental, el punto de partida para entender todo lo demás",
      "Seongsan Ilchulbong, el cono volcánico que sale del mar, patrimonio de la UNESCO, con las demostraciones de inmersión de las haenyeo a sus pies",
      "El Hallasan, 1.947 metros, con los senderos que llevan al cráter de la cumbre",
      "El tubo de lava de Manjanggul, una galería volcánica de kilómetros de longitud",
      "Las cascadas de Jeongbang, entre las poquísimas del mundo que caen directamente al mar",
      "El Parque de la Paz 4·3, dedicado a los hechos de 1948-1954, la página más dura de la historia de la isla",
      "Los bulteok, los refugios circulares de piedra donde las haenyeo se cambian y se calientan: quedan unos setenta",
    ],
    cosaFare: [
      "Asistir a una inmersión de las haenyeo y escuchar el sumbisori (véase la ficha de experiencia dedicada)",
      "Amanecer en Seongsan Ilchulbong, que en coreano significa «pico del sol naciente» (véase la ficha de experiencia dedicada)",
      "Subida al Hallasan por uno de los dos senderos que llegan a la cima (véase la ficha de experiencia dedicada)",
      "Caminar una etapa de los Olle Trail, los senderos costeros que dan la vuelta a la isla",
      "Comer en uno de los puestos gestionados directamente por las cooperativas de haenyeo, donde el pescado se les paga a ellas",
    ],
    doveDormire:
      "Jeju-si, al norte, cerca del aeropuerto, es la base más cómoda para las conexiones; Seogwipo, al sur, tiene el clima más suave y las cascadas; la costa oriental alrededor de Seongsan es la elección adecuada para quien viene sobre todo por las haenyeo y por el amanecer sobre el cono volcánico. En coche la isla se cruza de norte a sur en dos horas, así que la base cuenta menos que en otros sitios.",
    doveMangiare:
      "Jeju tiene una cocina propia, muy distinta de la de la península. El cerdo negro de la isla, criado aquí desde hace siglos, se come a la parrilla y es lo más famoso; el galchi, el pez sable, se sirve a la parrilla o estofado. Luego está lo que recogen las haenyeo (orejas de mar, erizos, pulpo, conchas), vendido a menudo en los puestos de sus cooperativas: es la manera más directa de que el dinero llegue a ellas. Hay que probar también el gogi guksu, los fideos en caldo de cerdo, y el té de mandarina, el producto agrícola símbolo de la isla.",
    comeArrivare:
      "Vuelo desde Seúl Gimpo, Busan u otras ciudades: el Seúl-Jeju es una de las rutas más transitadas del mundo, con decenas de vuelos al día y precios bajísimos. Como alternativa, el ferri desde Mokpo o Wando, mucho más lento.",
    comeSpostarsi:
      "El coche de alquiler es con diferencia el mejor medio: hay autobuses y cuestan poco, pero son lentos, y a muchos puntos de la costa se llega con dificultad. Hace falta el carné internacional, que hay que sacarse en Italia antes de salir.",
    periodoMigliore:
      "abril-junio y septiembre-octubre. El verano está lleno de turismo interno y entre agosto y septiembre llegan los tifones. El invierno es ventoso y frío: las haenyeo trabajan en las condiciones más duras y es más raro verlas en el agua.",
    costi:
      "Museo de las haenyeo unos 1.100 won, Seongsan Ilchulbong 5.000, Manjanggul 4.000, Parque de la Paz 4·3 gratuito. Alquiler de coche desde 40-60 € al día, más caro en temporada alta.",
    erroriDaEvitare: [
      "Esperar encontrar a las haenyeo en el agua a voluntad: salen según mareas, estación y estado del mar, y en los meses de veda biológica no se sumergen. Las únicas salidas con horario fijo son las demostraciones organizadas",
      "Fotografiarlas de cerca sin preguntar: son mujeres trabajando, a menudo muy ancianas, no una atracción folclórica",
      "Subir al Hallasan sin reservar: los dos senderos que llegan a la cima tienen cupos diarios y reserva online obligatoria",
      "Alquilar el coche sin carné internacional, que en Corea es obligatorio y no negociable",
      "Reducir Jeju a una isla de playa: el mar es frío, el viento es constante, y aquí lo que vale es la tierra y quien vive en ella",
    ],
    confronti: [
      {
        titolo: 'Cómo encontrarse con las haenyeo',
        introduzione:
          "Es la razón principal para venir a Jeju, y también la más fácil de equivocar. Las haenyeo no son un espectáculo con horario y su número se está desplomando: eran más de 4.500 en 2013, a finales de 2024 eran unas 2.600, y más del 60 % ha superado los setenta años. Hay cuatro maneras de acercarse, muy distintas en honestidad y en probabilidad de éxito.",
        opzioni: [
          {
            nome: 'El Museo de las haenyeo en Gujwa-eup',
            sintesi: "El museo dedicado, en la costa oriental, con equipamiento original, reconstrucciones de los bulteok, testimonios filmados y la historia de la revuelta de 1932.",
            costo: 'unos 1.100 won',
            durata: '1-2 horas',
            pro: [
              "Es el lugar donde se entiende todo lo demás: sin él, una inmersión vista de lejos se queda en una curiosidad",
              "Cuenta la parte política que ningún tour menciona, incluida la protesta antijaponesa de 1932 liderada por las haenyeo",
              "Siempre abierto, independiente de mareas y estación",
              "Cuesta poquísimo",
            ],
            contro: ["No se ve ninguna haenyeo de carne y hueso", "Apartado de los circuitos clásicos de la isla"],
            perChi: "Todos, como primer paso. Es el presupuesto de los otros tres.",
          },
          {
            nome: 'La demostración en Seongsan Ilchulbong',
            sintesi: "Inmersiones de demostración organizadas a los pies del cono volcánico, con horarios publicados, seguidas de la venta del pescado.",
            costo: 'gratuito para mirar, aparte de la entrada al lugar',
            durata: 'unos 30 minutos',
            pro: [
              "Es la única ocasión casi garantizada de verlas entrar en el agua",
              "Se oye el sumbisori, el silbido con el que expulsan el dióxido de carbono al emerger: es el rasgo más reconocible de su oficio",
              "Se puede comprar a ellas justo después, y el dinero se queda en la cooperativa",
            ],
            contro: [
              "Es una demostración: breve, en aguas poco profundas, con el público alrededor",
              "Los horarios cambian con mareas y tiempo y las salidas se cancelan",
              "Muy concurrida los fines de semana y en temporada alta",
            ],
            perChi: "Quien tiene un solo día en la costa este y quiere buenas probabilidades de verlas.",
          },
          {
            nome: 'Los pueblos de la costa y los bulteok',
            sintesi: "Ir a los pueblos donde trabajan (Hado-ri, Gujwa, Jongdal) con la marea adecuada y mirar desde lejos, sin organizar nada.",
            costo: 'gratuito',
            durata: 'depende: puede no pasar nada',
            pro: [
              "Es la única versión sin domesticar: mujeres trabajando, sin público",
              "Se ven los bulteok, los refugios circulares de piedra donde se cambian y se calientan, que eran también el lugar donde la comunidad tomaba las decisiones por votación",
              "Sin coste y sin multitudes",
            ],
            contro: [
              "Ninguna garantía: depende de marea, estación, mar y veda biológica",
              "Hace falta un coche y la disposición a volver varias veces",
              "Hay que respetar reglas no escritas: no acercarse, no fotografiar de cerca, no entrar en los bulteok",
            ],
            perChi: "Quien tiene más días en la isla y acepta no encontrar nada.",
          },
          {
            nome: 'Los puestos y restaurantes de las cooperativas',
            sintesi: "Comer el pescado allí donde lo venden directamente las haenyeo, a lo largo de la costa: orejas de mar, erizos, pulpo, conchas.",
            costo: 'variable, al peso',
            durata: 'una comida',
            pro: [
              "Así el dinero llega a ellas, sin intermediarios",
              "Se habla con ellas, en la medida en que lo permita el idioma",
              "El pescado es de pocas horas antes, y la diferencia se nota",
            ],
            contro: ["No se ve la inmersión", "Precios no siempre bajos, sobre todo en las orejas de mar", "Pocos carteles en inglés"],
            perChi: "Cualquiera: es el complemento natural de cualquiera de las otras tres opciones.",
          },
        ],
        raccomandazione:
          "La combinación que funciona: museo por la mañana, demostración en Seongsan por la tarde según el horario de las mareas, almuerzo o cena en un puesto de las cooperativas. Con un día más se añade una mañana en los pueblos de la costa este, sin expectativas: si ocurre, es la versión de verdad.",
      },
    ],
    miaEsperienza:
      "Jeju se vende como isla de vacaciones, y es la lectura equivocada: el mar es frío, el viento no para nunca, y lo que vale es la tierra y sobre todo quien trabaja en ella. Las haenyeo son el motivo para llegar hasta aquí, y antes de buscarlas conviene saber quiénes son. Descienden en apnea hasta diez metros, sin botellas, solo con el traje de neopreno, para recoger moluscos y algas. Permanecen bajo el agua un par de minutos y salen con un silbido agudísimo, el sumbisori, que sirve para expulsar el dióxido de carbono de golpe: desde el muelle lo oímos antes de ver nada. Reconocen a las compañeras por ese sonido. Lo que me desconcertó, sin embargo, son las edades. La mujer que salía del agua con la red llena tenía setenta y cinco años, y no es una excepción: más del sesenta por ciento de ellas ha superado los setenta, y en poco más de diez años han pasado de poco más de cuatro mil a unas dos mil seiscientas. El museo de Gujwa explica el resto, incluida la parte que ningún tour cuenta. Aquí durante siglos el sustento de la casa lo han traído las mujeres, con una autonomía económica que en el resto de la Corea confuciana no existía, y en 1932 fueron ellas quienes lideraron una de las mayores protestas contra el dominio japonés. Verlas hoy significa ver el final de algo, y por eso hay que hacerlo ahora.",
    luoghi: [
      {
        nome: "Museo de las haenyeo",
        testo: "Museo en Gujwa-eup sobre la vida de las mujeres buceadoras de la isla.",
        come: "En coche de alquiler.",
        quando: "Abierto con horarios fijos.",
        tempo: "1,5 horas",
        consiglio: "Punto de partida para entender.",
      },
      {
        nome: "Seongsan Ilchulbong",
        testo: "Cono volcánico que sale del mar, Patrimonio de la UNESCO.",
        come: "Coche.",
        quando: "Al amanecer.",
        tempo: "2 horas",
        consiglio: "Amanecer en el «pico del sol naciente».",
      },
      {
        nome: "Hallasan",
        testo: "Volcán de 1.947 metros, con senderos hasta el cráter.",
        come: "Coche y luego sendero.",
        quando: "Jornada completa, con buen tiempo.",
        tempo: "6-9 horas",
        consiglio: "Subida larga.",
      },
      {
        nome: "Manjanggul",
        testo: "Largo tubo de lava.",
        come: "Coche.",
        quando: "Por la mañana.",
        tempo: "1 hora",
        consiglio: "Dentro hace fresco.",
      },
      {
        nome: "Parque de la Paz 4·3",
        testo: "Memorial de los hechos de 1948.",
        come: "Coche.",
        quando: "Por la mañana.",
        tempo: "1,5 horas",
        costo: "Entrada gratuita",
        consiglio: "Para entender la historia de la isla.",
      },
    ],
    programmi: [
      { titolo: "3 días: Jeju", tappe: ["Día 1: haenyeo y Seongsan","Día 2: Hallasan","Día 3: Manjanggul y Parque de la Paz"] },
    ],
    zone: [
      { nome: "Ciudad de Jeju", perChi: "Quien quiere transporte", testo: "Aeropuerto cercano." },
      { nome: "Seogwipo", perChi: "Quien quiere el sur", testo: "Más tranquila." },
    ],
    sapori: [
      { nome: "Cerdo negro", testo: "A la parrilla, lo más famoso." },
      { nome: "Galchi", testo: "Pez sable a la parrilla o guisado." },
    ],
    attenzioni: [
      "Esperar ver a las haenyeo en el agua por encargo.",
      "Fotografiarlas de cerca sin pedir permiso.",
      "Alquilar sin carné internacional.",
    ],
    esperienzeSlugs: ['haenyeo-jeju', 'seongsan-ilchulbong', 'hallasan'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La costa de Yongmeori y el mar vistos desde el monte Sanbangsan, isla de Jeju',
    immagine: '/images/corea-del-sud/jeju.jpg',
  },
]
